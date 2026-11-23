// Generates unit-5 and unit-6 for every Edexcel Primary course.
// Each unit: index.ts + 3 lesson files with real lesson content (sections,
// vocabulary, concepts) and questions drawn from the subject packs.
const fs = require("fs");
const path = require("path");
const { packsFor } = require("./packs-primary.cjs");
const { rng, randInt, pick } = require("./lib.cjs");
const TOPICS = require("./primary-units-topics.cjs");

const COURSES = path.resolve(__dirname, "../../src/content/courses");
const FRAMEWORK = "Pearson Edexcel International Primary Curriculum";

const VOCAB = {
  maths: [
    { term: "Place value", definition: "The value of a digit depends on its position in the number." },
    { term: "Inverse operation", definition: "The operation that undoes another, e.g. subtraction undoes addition." },
    { term: "Factor", definition: "A number that divides exactly into another number." },
    { term: "Multiple", definition: "The result of multiplying a number by an integer." },
  ],
  english: [
    { term: "Noun", definition: "A naming word: person, place, thing or idea." },
    { term: "Verb", definition: "A doing or being word." },
    { term: "Adjective", definition: "A describing word that tells us more about a noun." },
    { term: "Paragraph", definition: "A group of sentences about one main idea." },
  ],
  science: [
    { term: "Fair test", definition: "An investigation where only one variable is changed." },
    { term: "Independent variable", definition: "The thing you deliberately change in an investigation." },
    { term: "Dependent variable", definition: "The thing you measure or observe as a result." },
    { term: "Conclusion", definition: "What the results show, linked back to the question." },
  ],
  computing: [
    { term: "Algorithm", definition: "A step-by-step set of instructions to solve a problem." },
    { term: "Decomposition", definition: "Breaking a complex problem into smaller parts." },
    { term: "Data", definition: "Information in a form a computer can process." },
    { term: "Hardware", definition: "The physical parts of a computer system." },
  ],
  geography: [
    { term: "Map", definition: "A representation of an area showing features and positions." },
    { term: "Compass", definition: "A tool that shows direction." },
    { term: "Settlement", definition: "A place where people live, from a hamlet to a city." },
    { term: "Climate", definition: "The long-term weather patterns of a place." },
  ],
  history: [
    { term: "Timeline", definition: "A way of showing events in the order they happened." },
    { term: "Primary source", definition: "Evidence created at the time being studied." },
    { term: "Chronology", definition: "The arrangement of events in time order." },
    { term: "Enquiry", definition: "Asking and answering questions about the past using evidence." },
  ],
};

function subjOf(course) {
  const mm = /edx-primary-([a-z]+?)(?:-y\d+)?$/.exec(course);
  return mm ? mm[1] : "maths";
}

function qJson(q) {
  return `        {\n          id: ${JSON.stringify(q.id)},\n          difficulty: ${JSON.stringify(q.difficulty)},\n          totalMarks: ${q.totalMarks},\n          stem: ${JSON.stringify(q.stem)},\n${q.parts ? `          parts: ${JSON.stringify(q.parts)},\n` : ""}          response: ${JSON.stringify(q.response)},\n          markscheme: ${JSON.stringify(q.markscheme)},\n        },`;
}

function lessonFileText({ exportName, lesson }) {
  const vocab = (lesson.vocabulary ?? []).map((v) => `    { term: ${JSON.stringify(v.term)}, definition: ${JSON.stringify(v.definition)} },`).join("\n");
  const concepts = lesson.concepts.map((c) => `    {\n      id: ${JSON.stringify(c.id)},\n      title: ${JSON.stringify(c.title)},\n      skill: ${JSON.stringify(c.skill)},\n      lesson: {\n        sections: [\n${(c.lesson.sections ?? []).map((s) => `          {\n            heading: ${JSON.stringify(s.heading)},\n            body: ${JSON.stringify(s.body)},\n          },`).join("\n")}\n        ],\n        keyFormulas: [\n${(c.lesson.keyFormulas ?? []).map((f) => `          { name: ${JSON.stringify(f.name)}, statement: ${JSON.stringify(f.statement)} },`).join("\n")}\n        ],\n      },\n      questions: [\n${c.questions.map(qJson).join("\n")}\n      ],\n    },`).join("\n");
  return `import type { Lesson } from "../../../types.ts";

export const ${exportName}: Lesson = {
  id: ${JSON.stringify(lesson.id)},
  code: ${JSON.stringify(lesson.code)},
  title: ${JSON.stringify(lesson.title)},
  goal: ${JSON.stringify(lesson.goal)},
  standards: [${(lesson.standards ?? []).map((s) => JSON.stringify(s)).join(", ")}],
  vocabulary: [
${vocab}
  ],
  concepts: [
${concepts}
  ],
};
`;
}

function unitIndexText({ exportName, unitId, code, title, desc, lessonExports }) {
  const imports = lessonExports.map((l) => `import { ${l.exportName} } from "./${l.file}";`).join("\n");
  const names = lessonExports.map((l) => `  ${l.exportName},`).join("\n");
  return `import type { Unit } from "../../../types.ts";
${imports}

export const ${exportName}: Unit = {
  id: ${JSON.stringify(unitId)},
  code: ${JSON.stringify(code)},
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
  lessons: [
${names}
  ],
};
`;
}

function patchCourseIndex(courseDir, courseId, unitAdds) {
  const idxPath = path.join(courseDir, "index.ts");
  let t = fs.readFileSync(idxPath, "utf8");
  const importLines = unitAdds.map((u) => `import { ${u.exportName} } from "./${u.dir}/index.ts";`).join("\n");
  const importRe = /^import .*$/gm;
  let lastEnd = -1, m;
  while ((m = importRe.exec(t))) lastEnd = m.index + m[0].length;
  t = t.slice(0, lastEnd) + "\n" + importLines + t.slice(lastEnd);
  const names = unitAdds.map((u) => u.exportName).join(", ");
  t = t.replace(/units: \[([^\]]*)\]/, (mm, inner) => `units: [${inner.trimEnd()}, ${names}]`);
  fs.writeFileSync(idxPath, t, "utf8");
}

for (const [course, spec] of Object.entries(TOPICS)) {
  const courseDir = path.join(COURSES, course);
  if (!fs.existsSync(courseDir)) { console.log("MISSING", course); continue; }
  // derive unit id prefix from unit-4 index (e.g. edpm1-u4 -> edpm1)
  const u4idx = fs.readFileSync(path.join(courseDir, "unit-4", "index.ts"), "utf8");
  const idM = u4idx.match(/id:\s*"([^"]+)-u4"/);
  const prefix = idM ? idM[1] : course;
  const packs = packsFor(course);
  const subj = subjOf(course);
  const unitAdds = [];

  for (let ui = 0; ui < spec.units.length; ui++) {
    const unitNum = 5 + ui;
    const u = spec.units[ui];
    const unitDir = `unit-${unitNum}`;
    const unitDirPath = path.join(courseDir, unitDir);
    fs.mkdirSync(unitDirPath, { recursive: true });
    const unitId = `${prefix}-u${unitNum}`;
    const exportName = `unit${unitNum}`;
    const lessonExports = [];

    for (let li = 0; li < u.lessons.length; li++) {
      const lessonTitle = u.lessons[li];
      const lessonNum = li + 1;
      const r = rng(31000 + course.length * 17 + unitNum * 101 + lessonNum * 7);
      const file = `lesson-${unitNum}-${lessonNum}.ts`;
      const exportL = `lesson${unitNum}${lessonNum}`;
      const lessonId = `${unitId}-lesson-${unitNum}-${lessonNum}`;

      // two concepts per lesson, questions drawn from packs
      const concepts = [];
      for (let ci = 0; ci < 2; ci++) {
        const cid = `${lessonId}-c${ci + 1}`;
        const questions = [];
        const nQ = 5;
        for (let qi = 0; qi < nQ; qi++) {
          const pack = packs[(qi + ci) % packs.length];
          const qs = pack({ course, unit: { id: unitId, title: u.title }, unitIdx: unitNum - 1, lessonIdx: lessonNum, qIndex: qi, count: 1, rng: r, topic: lessonTitle });
          for (const q of qs) {
            q.id = `${unitId}-l${lessonNum}c${ci + 1}q${qi + 1}`;
            questions.push(q);
            if (questions.length >= nQ) break;
          }
          if (questions.length >= nQ) break;
        }
        concepts.push({
          id: cid,
          title: `${lessonTitle} — part ${ci + 1}`,
          skill: `Apply ${lessonTitle.toLowerCase()} skills and knowledge.`,
          lesson: {
            sections: [
              { heading: "What you will learn", body: `In this lesson you will explore ${lessonTitle.toLowerCase()} as part of ${u.title.toLowerCase()}. You will learn the key ideas, see worked examples and then answer questions to check your understanding.` },
              { heading: "How to succeed", body: "Read each question carefully. For maths, show your working and give exact answers. For English, write in full sentences with accurate punctuation. For science and other subjects, use key vocabulary and explain your ideas clearly." },
            ],
            keyFormulas: [{ name: "Key idea", statement: `Apply the main methods and facts for ${lessonTitle.toLowerCase()}.` }],
          },
          questions,
        });
      }

      const lesson = {
        id: lessonId,
        code: `${unitNum}.${lessonNum}`,
        title: lessonTitle,
        goal: `I can ${lessonTitle.charAt(0).toLowerCase() + lessonTitle.slice(1)} with confidence.`,
        standards: [`${FRAMEWORK}: ${u.title}`],
        vocabulary: VOCAB[subj] || VOCAB.maths,
        concepts,
      };
      fs.writeFileSync(path.join(unitDirPath, file), lessonFileText({ exportName: exportL, lesson }), "utf8");
      lessonExports.push({ exportName: exportL, file });
    }

    fs.writeFileSync(path.join(unitDirPath, "index.ts"), unitIndexText({ exportName, unitId, code: String(unitNum), title: u.title, desc: u.desc, lessonExports }), "utf8");
    unitAdds.push({ dir: unitDir, exportName });
    console.log(`${course}: created ${unitDir} "${u.title}" (${lessonExports.length} lessons)`);
  }

  patchCourseIndex(courseDir, course, unitAdds);
}
console.log("DONE");
