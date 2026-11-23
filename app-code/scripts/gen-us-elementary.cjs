// Generates US elementary (K-6) course folders from compact spec files.
// Usage: node scripts/gen-us-elementary.cjs <dataFile...>
// Each data file must export { courses: [...] } (CommonJS).
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../src/content/courses");

const J = (v) => JSON.stringify(v);

function emitVocab(vocab) {
  return vocab
    .map(([term, definition]) => `    { term: ${J(term)}, definition: ${J(definition)} },`)
    .join("\n");
}

function emitSections(sections) {
  return sections
    .map(
      ([heading, body]) =>
        `          {\n            heading: ${J(heading)},\n            body: ${J(body)},\n          },`,
    )
    .join("\n");
}

function emitFormulas(formulas) {
  return formulas
    .map(([name, statement]) => `          { name: ${J(name)}, statement: ${J(statement)} },`)
    .join("\n");
}

function emitQuestion(q, conceptId, index) {
  const id = `${conceptId}-q${index + 1}`;
  const response =
    q.response ??
    (q.choices
      ? {
          type: "mcq",
          choices: q.choices.map(([cid, text]) => ({ id: cid, text })),
          correctChoiceId: q.correct,
        }
      : q.numeric
        ? { type: "numeric", parts: q.numeric }
        : { type: "open" });
  const markscheme = {
    principles: q.principles.map(([kind, name, statement]) => ({ kind, name, statement })),
    steps: q.steps.map((s) => ({
      ...(s.part ? { part: s.part } : {}),
      reasoning: s.reasoning,
      ...(s.working ? { working: s.working } : {}),
      marks: s.marks,
      markCode: s.markCode,
    })),
    finalAnswer: q.finalAnswer,
    ...(q.commonErrors ? { commonErrors: q.commonErrors } : {}),
    ...(q.examinerNote ? { examinerNote: q.examinerNote } : {}),
    ...(q.levels ? { levels: q.levels } : {}),
  };
  return `        {
          id: ${J(id)},
          difficulty: ${J(q.difficulty)},
          totalMarks: ${q.totalMarks},
          stem: ${J(q.stem)},
          ${q.parts ? `parts: ${JSON.stringify(q.parts, null, 10)},\n          ` : ""}${q.extract ? `extract: ${JSON.stringify(q.extract, null, 10)},\n          ` : ""}response: ${JSON.stringify(response, null, 10)},
          markscheme: ${JSON.stringify(markscheme, null, 10)},
        },`;
}

function emitLesson(coursePrefix, unitNum, lessonNum, spec) {
  const conceptId = `${coursePrefix}-u${unitNum}-${spec.slug}`;
  const questions = spec.concept.questions.map((q, i) => emitQuestion(q, conceptId, i)).join("\n");
  return `import type { Lesson } from "../../../types.ts";

export const lesson${unitNum}${lessonNum}: Lesson = {
  id: ${J(`${coursePrefix}-u${unitNum}-lesson-${unitNum}-${lessonNum}`)},
  code: ${J(`${unitNum}-${lessonNum}`)},
  title: ${J(spec.title)},
  goal: ${J(spec.goal)},
  standards: [${spec.standards.map(J).join(", ")}],
  vocabulary: [
${emitVocab(spec.vocab)}
  ],
  concepts: [
    {
      id: ${J(conceptId)},
      title: ${J(spec.concept.title)},
      skill: ${J(spec.concept.skill)},
      lesson: {
        sections: [
${emitSections(spec.concept.sections)}
        ],
        keyFormulas: [
${emitFormulas(spec.concept.formulas)}
        ],
        workedExample: {
          problem: ${J(spec.concept.worked.problem)},
          solution: ${J(spec.concept.worked.solution)},
        },
      },
      questions: [
${questions}
      ],
    },
  ],
};
`;
}

function emitUnitIndex(coursePrefix, unitNum, unit) {
  const imports = unit.lessons
    .map((_, i) => `import { lesson${unitNum}${i + 1} } from "./lesson-${unitNum}-${i + 1}.ts";`)
    .join("\n");
  const lessons = unit.lessons.map((_, i) => `lesson${unitNum}${i + 1}`).join(", ");
  return `import type { Unit } from "../../../types.ts";
${imports}

export const unit${unitNum}: Unit = {
  id: ${J(`${coursePrefix}-u${unitNum}`)},
  code: ${J(String(unitNum))},
  title: ${J(unit.title)},
  description: ${J(unit.description)},
  lessons: [${lessons}],
};
`;
}

function emitCourseIndex(course) {
  const imports = course.units
    .map((_, i) => `import { unit${i + 1} } from "./unit-${i + 1}/index.ts";`)
    .join("\n");
  const units = course.units.map((_, i) => `unit${i + 1}`).join(", ");
  // `us` is optional: untagged courses (e.g. the HS math sequence) group under "High School Math".
  const us = course.us ? `\n  us: { subject: ${J(course.us.subject)}, grade: ${course.us.grade} },` : "";
  const ap = course.ap ? `\n  ap: { exam: ${J(course.ap.exam)} },` : "";
  const sat = course.sat ? `\n  sat: { section: ${J(course.sat.section)} },` : "";
  return `import type { Course } from "../../types.ts";
${imports}

export const ${course.exportName}: Course = {
  id: ${J(course.id)},
  title: ${J(course.title)},
  shortTitle: ${J(course.shortTitle)},
  grade: ${J(course.grade)},
  framework: ${J(course.framework)},
  description: ${J(course.description)},
  units: [${units}],${us}${ap}${sat}
};
`;
}

function writeCourse(course) {
  const dir = path.join(ROOT, course.id);
  fs.mkdirSync(dir, { recursive: true });
  course.units.forEach((unit, ui) => {
    const unitNum = ui + 1;
    const unitDir = path.join(dir, `unit-${unitNum}`);
    fs.mkdirSync(unitDir, { recursive: true });
    fs.writeFileSync(path.join(unitDir, "index.ts"), emitUnitIndex(course.prefix, unitNum, unit), "utf8");
    unit.lessons.forEach((lesson, li) => {
      const lessonNum = li + 1;
      fs.writeFileSync(
        path.join(unitDir, `lesson-${unitNum}-${lessonNum}.ts`),
        emitLesson(course.prefix, unitNum, lessonNum, lesson),
        "utf8",
      );
    });
  });
  fs.writeFileSync(path.join(dir, "index.ts"), emitCourseIndex(course), "utf8");
  console.log(`wrote ${course.id}`);
}

const courses = process.argv.slice(2).flatMap((file) => require(path.resolve(file)).courses);
for (const course of courses) writeCourse(course);
