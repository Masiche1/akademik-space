// Exam-question generator engine.
// Builds exam-style Lesson .ts files and registers them in unit index.ts files.
// Usage: node scripts/exam-gen/gen.cjs <courseDirName> <specModulePath>
// Spec module exports: { course, packs, perUnit } where
//   packs: array of pack functions (ctx) => Question[]
//   perUnit: (unitInfo, idx) => number of questions to add to that unit
const fs = require("fs");
const path = require("path");

const COURSES = path.resolve(__dirname, "../../src/content/courses");

// ---------- deterministic RNG ----------
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
function randInt(r, lo, hi) { return lo + Math.floor(r() * (hi - lo + 1)); }
function pick(r, arr) { return arr[Math.floor(r() * arr.length)]; }
function shuffle(r, arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- question builders ----------
// Every builder returns a plain Question object; markscheme marks always sum to totalMarks.

function mcq({ id, difficulty = "core", totalMarks = 1, stem, choices, correct, principle, reasoning, working, finalAnswer, commonErrors, examinerNote, paper, tier }) {
  // choices: [{id:"a",text},...] or [text,...] (ids auto a,b,c,d)
  const ch = choices.map((c, i) => (typeof c === "string" ? { id: "abcd"[i], text: c } : c));
  const correctId = typeof correct === "string" && /^[a-d]$/.test(correct) ? correct : ch[correct].id;
  return {
    id, difficulty, totalMarks,
    ...(paper ? { paper } : {}),
    ...(tier ? { tier } : {}),
    stem,
    response: { type: "mcq", choices: ch, correctChoiceId: correctId },
    markscheme: {
      principles: [principle],
      steps: [{ reasoning, working, marks: totalMarks, markCode: "B" }],
      finalAnswer: finalAnswer ?? `**(${correctId})** ${ch.find((c) => c.id === correctId).text}`,
      ...(commonErrors ? { commonErrors } : {}),
      ...(examinerNote ? { examinerNote } : {}),
    },
  };
}

// numeric question: parts = [{label, prompt?, answer, tolerance?, unit?}]
// steps: array of {part?, reasoning, working?, marks, markCode} — caller ensures sums match.
function numeric({ id, difficulty = "core", stem, parts, steps, principles, finalAnswer, commonErrors, unordered, examParts, examinerNote, paper, tier }) {
  const totalMarks = examParts
    ? examParts.reduce((s, p) => s + p.marks, 0)
    : parts.reduce((s, p) => s + (p.marks ?? 1), 0);
  const np = parts.map((p) => ({
    label: p.label,
    answer: p.answer,
    ...(p.tolerance != null ? { tolerance: p.tolerance } : {}),
    ...(p.unit ? { unit: p.unit } : {}),
  }));
  return {
    id, difficulty, totalMarks,
    ...(paper ? { paper } : {}),
    ...(tier ? { tier } : {}),
    stem,
    ...(examParts ? { parts: examParts.map((p) => ({ label: p.label, prompt: p.prompt, marks: p.marks })) } : {}),
    response: { type: "numeric", parts: np, ...(unordered ? { unordered: true } : {}) },
    markscheme: {
      principles,
      steps,
      finalAnswer,
      ...(commonErrors ? { commonErrors } : {}),
      ...(examinerNote ? { examinerNote } : {}),
    },
  };
}

// open question (single or structured). parts optional: [{label,prompt,marks}]
// steps must include `part` matching labels when parts exist.
function openQ({ id, difficulty = "core", stem, parts, steps, principles, finalAnswer, commonErrors, levels, examinerNote, paper, tier }) {
  const totalMarks = parts ? parts.reduce((s, p) => s + p.marks, 0) : steps.reduce((s, st) => s + st.marks, 0);
  return {
    id, difficulty, totalMarks,
    ...(paper ? { paper } : {}),
    ...(tier ? { tier } : {}),
    stem,
    ...(parts ? { parts: parts.map((p) => ({ label: p.label, prompt: p.prompt, marks: p.marks })) } : {}),
    response: { type: "open" },
    markscheme: {
      principles,
      steps,
      finalAnswer,
      ...(commonErrors ? { commonErrors } : {}),
      ...(levels ? { levels } : {}),
      ...(examinerNote ? { examinerNote } : {}),
    },
  };
}

// Convenience: build markscheme steps for simple "method + answer" questions.
function methodSteps(workingSteps) {
  // workingSteps: [{reasoning, working?, marks, markCode?, part?}]
  return workingSteps.map((s) => ({
    reasoning: s.reasoning,
    ...(s.working ? { working: s.working } : {}),
    marks: s.marks,
    markCode: s.markCode ?? "M",
    ...(s.part ? { part: s.part } : {}),
  }));
}

// ---------- lesson / unit emission ----------

function lessonFileText({ exportName, lesson }) {
  const c = lesson.concepts[0];
  const qJson = (q) => `        {\n          id: ${JSON.stringify(q.id)},\n          difficulty: ${JSON.stringify(q.difficulty)},\n          ${q.paper ? `paper: ${JSON.stringify(q.paper)},\n          ` : ""}${q.tier ? `tier: ${JSON.stringify(q.tier)},\n          ` : ""}totalMarks: ${q.totalMarks},\n          stem: ${JSON.stringify(q.stem)},\n${q.parts ? `          parts: ${JSON.stringify(q.parts)},\n` : ""}          response: ${JSON.stringify(q.response)},\n          markscheme: ${JSON.stringify(q.markscheme)},\n        },`;
  const questions = c.questions.map(qJson).join("\n");
  const vocab = (lesson.vocabulary ?? []).map((v) => `    { term: ${JSON.stringify(v.term)}, definition: ${JSON.stringify(v.definition)} },`).join("\n");
  const sections = (c.lesson.sections ?? []).map((s) => `          {\n            heading: ${JSON.stringify(s.heading)},\n            body: ${JSON.stringify(s.body)},\n          },`).join("\n");
  const formulas = (c.lesson.keyFormulas ?? []).map((f) => `          { name: ${JSON.stringify(f.name)}, statement: ${JSON.stringify(f.statement)} },`).join("\n");
  const notes = (lesson.notes ?? []).map((n) => `    {\n      id: ${JSON.stringify(n.id)},\n      title: ${JSON.stringify(n.title)},\n      summary: ${JSON.stringify(n.summary ?? "")},\n      sections: [\n${(n.sections ?? []).map((s) => `        { heading: ${JSON.stringify(s.heading)}, body: ${JSON.stringify(s.body)} },`).join("\n")}\n      ],\n    },`).join("\n");

  return `import type { Lesson } from "../../../types.ts";

export const ${exportName}: Lesson = {
  id: ${JSON.stringify(lesson.id)},
  code: ${JSON.stringify(lesson.code)},
  title: ${JSON.stringify(lesson.title)},
  goal: ${JSON.stringify(lesson.goal)},
  standards: [${(lesson.standards ?? []).map((s) => JSON.stringify(s)).join(", ")}],
  ${lesson.stage != null ? `stage: ${lesson.stage},` : ""}
  vocabulary: [
${vocab}
  ],
  concepts: [
    {
      id: ${JSON.stringify(c.id)},
      title: ${JSON.stringify(c.title)},
      skill: ${JSON.stringify(c.skill)},
      lesson: {
        sections: [
${sections}
        ],
        keyFormulas: [
${formulas}
        ],${c.lesson.workedExample ? `
        workedExample: {
          problem: ${JSON.stringify(c.lesson.workedExample.problem)},
          solution: ${JSON.stringify(c.lesson.workedExample.solution)},
        },` : ""}
      },
      questions: [
${questions}
      ],
    },
  ],
${notes ? `  notes: [\n${notes}\n  ],\n` : ""}};
`;
}

// Surgically add lessons to an existing unit index.ts: insert import lines after
// the last import and append entries before the lessons array closes.
// `existingExports` are {exportName, file} already present (not re-added).
function rewriteUnitIndex(unitDir, newLessons) {
  const idxPath = path.join(unitDir, "index.ts");
  let text = fs.readFileSync(idxPath, "utf8");
  const importLines = newLessons.map((l) => `import { ${l.exportName} } from "./${l.file}";`).join("\n");
  const entries = newLessons.map((l) => `  ${l.exportName},`).join("\n");
  // Insert imports after the last existing import line.
  const importRe = /^import .*$/gm;
  let lastImportEnd = -1, m;
  while ((m = importRe.exec(text))) lastImportEnd = m.index + m[0].length;
  if (lastImportEnd === -1) throw new Error("no imports found in " + idxPath);
  text = text.slice(0, lastImportEnd) + "\n" + importLines + text.slice(lastImportEnd);
  // Append lesson entries before the closing "]" of the lessons array.
  const lessonsIdx = text.indexOf("lessons: [");
  if (lessonsIdx === -1) throw new Error("no lessons array in " + idxPath);
  const closeIdx = text.indexOf("]", lessonsIdx);
  if (closeIdx === -1) throw new Error("no lessons close in " + idxPath);
  const before = text.slice(0, closeIdx).replace(/\s+$/, "");
  const prefix = before.endsWith(",") || before.endsWith("[") ? " " : ", ";
  const names = newLessons.map((l) => l.exportName).join(", ");
  text = text.slice(0, closeIdx) + prefix + names + text.slice(closeIdx);
  fs.writeFileSync(idxPath, text, "utf8");
}

// ---------- course runner ----------
// spec: { course, targetPerCourse?, packs: [fn], perUnit?: fn(unitInfo)=>count, questionsPerLesson?, seed?, topicFor?(unit)=>string }
async function runCourse(spec) {
  const courseDir = path.join(COURSES, spec.course);
  const unitDirs = fs.readdirSync(courseDir).filter((d) => /^unit-\d/.test(d)).sort();
  const report = [];

  // First pass: count existing questions per unit.
  const unitInfos = unitDirs.map((ud, ui) => {
    const idxPath = path.join(courseDir, ud, "index.ts");
    const idxText = fs.readFileSync(idxPath, "utf8");
    const idM = idxText.match(/id:\s*"([^"]+)"/);
    const codeM = idxText.match(/code:\s*"([^"]+)"/);
    const titleM = idxText.match(/title:\s*"([^"]+)"/);
    const descM = idxText.match(/description:\s*"((?:[^"\\]|\\.)*)"/);
    // count questions in lesson files
    let qCount = 0;
    const lessonFiles = fs.readdirSync(path.join(courseDir, ud)).filter((f) => f.startsWith("lesson-") && f.endsWith(".ts"));
    const lessonExports = [];
    for (const lf of lessonFiles.sort()) {
      const lt = fs.readFileSync(path.join(courseDir, ud, lf), "utf8");
      const em = lt.match(/export const (\w+): Lesson/);
      if (em) lessonExports.push({ exportName: em[1], file: lf });
      qCount += (lt.match(/totalMarks:/g) || []).length;
    }
    return {
      dir: ud, ui, id: idM?.[1] ?? ud, code: codeM?.[1] ?? ud, title: titleM?.[1] ?? ud,
      desc: descM ? JSON.parse(`"${descM[1]}"`) : "", qCount, lessonExports,
    };
  });

  const totalExisting = unitInfos.reduce((s, u) => s + u.qCount, 0);
  const target = spec.targetPerCourse ?? 300;
  const deficit = Math.max(0, target - totalExisting);
  if (deficit === 0) { console.log(`${spec.course}: already ${totalExisting} >= ${target}`); return; }

  // Distribute deficit across units (perUnit override or evenly).
  const counts = unitInfos.map((u, i) => (spec.perUnit ? spec.perUnit(u, i, deficit) : Math.ceil(deficit / unitInfos.length)));
  // Trim so we don't overshoot absurdly: allow overshoot up to one lesson.
  const qPerLesson = spec.questionsPerLesson ?? 10;

  for (let i = 0; i < unitInfos.length; i++) {
    const u = unitInfos[i];
    const want = counts[i];
    if (!want) continue;
    const nLessons = Math.max(1, Math.ceil(want / qPerLesson));
    const perLesson = Math.ceil(want / nLessons);
    const r = rng((spec.seed ?? 12345) + i * 977 + spec.course.length * 31);
    const topic = spec.topicFor ? spec.topicFor(u, i) : u.title;
    const standards = spec.standardsFor ? spec.standardsFor(u, i) : [];

    for (let k = 0; k < nLessons; k++) {
      const need = Math.min(perLesson, want - k * perLesson);
      if (need <= 0) break;
      const lessonIdx = k + 1;
      const lessonId = `${u.id}-exam${lessonIdx}`;
      const exportName = `exam${u.code.replace(/\W/g, "")}${lessonIdx}`;
      const file = `lesson-${u.dir.replace("unit-", "")}-x${lessonIdx}.ts`;
      const questions = [];
      // call packs in rotation until we have `need` questions
      let guard = 0;
      while (questions.length < need && guard++ < 200) {
        const pack = spec.packs[questions.length % spec.packs.length];
        const qs = pack({ course: spec.course, unit: u, unitIdx: i, lessonIdx, qIndex: questions.length, count: need - questions.length, rng: r, topic });
        for (const q of qs) {
          if (questions.length >= need) break;
          q.id = `${u.id}-x${lessonIdx}-q${questions.length + 1}`;
          questions.push(q);
        }
      }
      const lesson = {
        id: lessonId,
        code: `${u.code}-X${lessonIdx}`,
        title: `Exam Practice ${lessonIdx}: ${topic}`,
        goal: `I CAN answer ${topic.toLowerCase()} exam-style questions under timed conditions.`,
        standards,
        vocabulary: spec.vocabulary ? spec.vocabulary(u, i, k) : [],
        concepts: [{
          id: `${lessonId}-concept`,
          title: `${topic} — exam practice`,
          skill: `Apply ${topic.toLowerCase()} techniques to exam-style questions.`,
          lesson: {
            sections: spec.sections ? spec.sections(u, i, k) : [{
              heading: "Exam technique",
              body: "Read each question carefully, show all working, check units, and write final answers clearly. Spend roughly one minute per mark.",
            }],
            keyFormulas: spec.keyFormulas ? spec.keyFormulas(u, i, k) : [],
            workedExample: spec.workedExample ? spec.workedExample(u, i, k) : undefined,
          },
          questions,
        }],
        notes: spec.notes ? spec.notes(u, i, k) : undefined,
      };
      fs.writeFileSync(path.join(courseDir, u.dir, file), lessonFileText({ exportName, lesson }), "utf8");
      u.lessonExports.push({ exportName, file });
      u.qCount += questions.length;
    }
  }

  // Rewrite each touched unit index — only the newly added lessons.
  for (const u of unitInfos) {
    const added = u.lessonExports.filter((l) => l.file.includes("-x"));
    if (added.length === 0) continue;
    rewriteUnitIndex(path.join(courseDir, u.dir), added);
  }

  const totalNew = unitInfos.reduce((s, u) => s + u.qCount, 0) - totalExisting;
  console.log(`${spec.course}: +${totalNew} questions -> ${totalExisting + totalNew} total`);
  report.push([spec.course, totalExisting, totalNew]);
  return report;
}

module.exports = { runCourse, rng, randInt, pick, shuffle, mcq, numeric, openQ, methodSteps, COURSES };
