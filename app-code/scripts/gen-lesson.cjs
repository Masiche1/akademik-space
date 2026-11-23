// Lesson generator: reads a data file (CommonJS module exporting an array of lesson specs)
// and writes fully-formed Lesson .ts files.
// Usage: node scripts/gen-lesson.cjs <dataFile> <outDir>
// Spec shape:
// {
//   file: "lesson-1-3.ts", exportName: "lesson13",
//   lesson: { id, code, title, goal, standards[], stage, vocabulary[{term,definition}],
//     concepts: [{ id, title, skill, sections[{heading,body}], keyFormulas[{name,statement}],
//       workedExample{problem,solution},
//       questions: [{ id, difficulty, totalMarks, stem, parts?, extract?, response, markscheme, tier?, paper? }] }] },
//   notes: { id, title, summary, sections[{heading,body}] }   // optional
// }
// Backwards compatible: `lesson.concept` (singular) is treated as a one-element `concepts`.
const fs = require("fs");
const path = require("path");

const [, , dataFile, outDir] = process.argv;
const specs = require(path.resolve(dataFile));

function js(v, indent) {
  return JSON.stringify(v, null, indent);
}

function renderQuestion(q) {
  const lines = ["        {"];
  lines.push(`          id: ${js(q.id)},`);
  if (q.paper != null) lines.push(`          paper: ${js(q.paper)},`);
  lines.push(`          difficulty: ${js(q.difficulty)},`);
  if (q.tier != null) lines.push(`          tier: ${js(q.tier)},`);
  lines.push(`          totalMarks: ${q.totalMarks},`);
  if (q.extract != null) lines.push(`          extract: ${js(q.extract, 10)},`);
  lines.push(`          stem: ${js(q.stem)},`);
  if (q.parts != null) lines.push(`          parts: ${js(q.parts, 10)},`);
  lines.push(`          response: ${q.response ? js(q.response, 10) : '{ type: "open" }'},`);
  lines.push(`          markscheme: ${js(q.markscheme, 10)},`);
  lines.push("        },");
  return lines.join("\n");
}

function renderConcept(c) {
  const sections = (c.sections || []).map(s =>
    `          {\n            heading: ${js(s.heading)},\n            body: ${js(s.body)},\n          },`).join("\n");
  const formulas = (c.keyFormulas || []).map(f =>
    `          { name: ${js(f.name)}, statement: ${js(f.statement)} },`).join("\n");
  const questions = (c.questions || []).map(renderQuestion).join("\n");
  const we = c.workedExample
    ? `        workedExample: {\n          problem: ${js(c.workedExample.problem)},\n          solution: ${js(c.workedExample.solution)},\n        },`
    : "";
  return `    {
      id: ${js(c.id)},
      title: ${js(c.title)},
      skill: ${js(c.skill)},
      lesson: {
        sections: [
${sections}
        ],
        keyFormulas: [
${formulas}
        ],
${we}
      },
      questions: [
${questions}
      ],
    },`;
}

for (const spec of specs) {
  const { file, exportName, lesson, notes } = spec;
  const concepts = lesson.concepts || (lesson.concept ? [lesson.concept] : []);
  if (concepts.length === 0) throw new Error(`${file}: lesson has no concepts`);

  const vocab = (lesson.vocabulary || []).map(v =>
    `    { term: ${js(v.term)}, definition: ${js(v.definition)} },`).join("\n");
  const conceptBlocks = concepts.map(renderConcept).join("\n");

  let notesBlock = "";
  if (notes) {
    const noteSections = (notes.sections || []).map(s =>
      `        { heading: ${js(s.heading)}, body: ${js(s.body)} },`).join("\n");
    notesBlock = `  notes: [
    {
      id: ${js(notes.id)},
      title: ${js(notes.title)},
      ${notes.summary != null ? `summary: ${js(notes.summary)},` : ""}
      sections: [
${noteSections}
      ],
    },
  ],`;
  }

  const out = `import type { Lesson } from "../../../types.ts";

export const ${exportName}: Lesson = {
  id: ${js(lesson.id)},
  code: ${js(lesson.code)},
  title: ${js(lesson.title)},
  goal: ${js(lesson.goal)},
  standards: [${(lesson.standards || []).map(s => js(s)).join(", ")}],
  ${lesson.stage != null ? `stage: ${lesson.stage},` : ""}
  vocabulary: [
${vocab}
  ],
  concepts: [
${conceptBlocks}
  ],
${notesBlock}
};
`;
  fs.writeFileSync(path.join(outDir, file), out, "utf8");
  console.log("wrote", file);
}
