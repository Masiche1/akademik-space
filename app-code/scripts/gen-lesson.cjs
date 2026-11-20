// Lesson generator: reads a data file (CommonJS module exporting an array of lesson specs)
// and writes fully-formed Lesson .ts files.
// Usage: node scripts/gen-lesson.cjs <dataFile> <outDir>
// Spec shape:
// {
//   file: "lesson-1-3.ts", exportName: "lesson13",
//   lesson: { id, code, title, goal, standards[], stage, vocabulary[{term,definition}],
//     concept: { id, title, skill, sections[{heading,body}], keyFormulas[{name,statement}],
//       workedExample{problem,solution},
//       questions: [{ difficulty, totalMarks, stem, response, markscheme }] } },
//   notes: { id, title, summary, sections[{heading,body}] }
// }
const fs = require("fs");
const path = require("path");

const [, , dataFile, outDir] = process.argv;
const specs = require(path.resolve(dataFile));

function qJson(q) {
  return JSON.stringify(q, null, 8)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/\[\n(\s+)"([^"]+)"/g, (m, ws, s) => `[\n${ws}"${s}"`);
}

for (const spec of specs) {
  const { file, exportName, lesson, notes } = spec;
  const c = lesson.concept;
  const questions = c.questions.map((q, i) => {
    const isMcq = q.response && q.response.type === "mcq";
    return `        {
          id: "${q.id}",
          difficulty: "${q.difficulty}",
          totalMarks: ${q.totalMarks},
          stem: ${JSON.stringify(q.stem)},
          response: ${q.response ? JSON.stringify(q.response, null, 10) : '{ type: "open" }'},
          markscheme: ${JSON.stringify(q.markscheme, null, 10)},
        },`;
  }).join("\n");

  const vocab = lesson.vocabulary.map(v => `    { term: ${JSON.stringify(v.term)}, definition: ${JSON.stringify(v.definition)} },`).join("\n");
  const sections = c.sections.map(s => `          {\n            heading: ${JSON.stringify(s.heading)},\n            body: ${JSON.stringify(s.body)},\n          },`).join("\n");
  const formulas = c.keyFormulas.map(f => `          { name: ${JSON.stringify(f.name)}, statement: ${JSON.stringify(f.statement)} },`).join("\n");
  const noteSections = notes.sections.map(s => `        { heading: ${JSON.stringify(s.heading)}, body: ${JSON.stringify(s.body)} },`).join("\n");

  const out = `import type { Lesson } from "../../../types.ts";

export const ${exportName}: Lesson = {
  id: ${JSON.stringify(lesson.id)},
  code: ${JSON.stringify(lesson.code)},
  title: ${JSON.stringify(lesson.title)},
  goal: ${JSON.stringify(lesson.goal)},
  standards: [${lesson.standards.map(s => JSON.stringify(s)).join(", ")}],
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
        ],
        workedExample: {
          problem: ${JSON.stringify(c.workedExample.problem)},
          solution: ${JSON.stringify(c.workedExample.solution)},
        },
      },
      questions: [
${questions}
      ],
    },
  ],
  notes: [
    {
      id: ${JSON.stringify(notes.id)},
      title: ${JSON.stringify(notes.title)},
      summary: ${JSON.stringify(notes.summary)},
      sections: [
${noteSections}
      ],
    },
  ],
};
`;
  fs.writeFileSync(path.join(outDir, file), out, "utf8");
  console.log("wrote", file);
}
