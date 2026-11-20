import type { Lesson } from "../../../types.ts";

export const lesson19: Lesson = {
  id: "cips-u1-lesson-1-9",
  code: "1-9",
  title: "Stage 3 — Grouping Materials and Dissolving",
  goal: "I CAN group materials by properties and explain simple dissolving.",
  standards: ["Cambridge Primary Science 0097 Stage 3: materials",
  "Cambridge Primary Science 0097 framework substrands: 3Cm, 3Cp, 3Cc"],
  stage: 3,
  vocabulary: [
    { term: "Property", definition: "A feature you can observe or test." },
    { term: "Hard/soft", definition: "Resistance to being scratched or dented." },
    { term: "Rough/smooth", definition: "Texture of a surface." },
    { term: "Dissolve", definition: "When a solid mixes into a liquid and seems to disappear." },
    { term: "Solution", definition: "The liquid made when something dissolves." },
  ],
  concepts: [
    {
      id: "cips-u1-s9-materials",
      title: "Material properties and dissolving",
      skill: "Group materials by testable properties and describe dissolving at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Grouping by properties",
            body: "You can group materials by properties you can test: hard or soft (wood vs sponge), rough or smooth (sandpaper vs glass), bendy or stiff (rubber vs ruler), magnetic or not (iron vs plastic). Build a key — a list of properties and which materials belong to each group.",
          },
          {
            heading: "Dissolving",
            body: "When sugar or salt is stirred into water, it dissolves — the solid breaks into tiny pieces spread through the liquid, making a solution. The solid hasn't disappeared; it's still there, you just can't see it. Stirring speeds up dissolving; warm water dissolves faster than cold.",
          },
        ],
        keyFormulas: [
          { name: "Properties", statement: "hard/soft, rough/smooth, bendy/stiff, magnetic" },
          { name: "Dissolving", statement: "solid + liquid → solution (still contains the solid)" },
        ],
        workedExample: {
          problem: "Why does salt seem to disappear in water?",
          solution: "It dissolves — breaks into tiny pieces spread through the water, making a solution.",
        },
      },
      questions: [
        {
          id: "cips-u1-dm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is magnetic?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wood" }, { id: "b", text: "Iron" }, { id: "c", text: "Plastic" }, { id: "d", text: "Glass" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Magnetic", statement: "Iron and steel are magnetic." }],
            steps: [{ reasoning: "Iron is magnetic; the others are not.", marks: 1, markCode: "A" }],
            finalAnswer: "Iron",
          },
        },
        {
          id: "cips-u1-dm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What happens when sugar is stirred into warm water?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Dissolving", statement: "Solid spreads through liquid." }],
            steps: [
              { reasoning: "The sugar dissolves into the water.", marks: 1, markCode: "M" },
              { reasoning: "It makes a clear solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It dissolves, making a solution",
          },
        },
        {
          id: "cips-u1-dm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can you tell if something has really dissolved or just sunk?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing dissolving", statement: "Check for visible solid or filter." }],
            steps: [
              { reasoning: "If solid pieces remain visible, it hasn't dissolved.", marks: 1, markCode: "M" },
              { reasoning: "Dissolved = evenly spread, clear liquid.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains the test.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Look for remaining solid pieces or test with a filter",
          },
        },
        {
          id: "cips-u1-dm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two glasses of water: one cold, one warm. The same amount of salt is added to each and stirred for 10 seconds. Which dissolves faster and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Fair test reasoning", statement: "Only temperature differs." }],
            steps: [
              { reasoning: "Warm water dissolves faster.", marks: 1, markCode: "M" },
              { reasoning: "Warm particles move faster, spreading the salt quicker.", marks: 1, markCode: "M" },
              { reasoning: "Only temperature changed — fair comparison.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains the effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Warm water — particles move faster so dissolving is quicker",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u1-dm-notes",
      title: "Materials and dissolving — revision notes",
      summary: "Group by hardness/texture/magnetism; dissolve → solution; warm dissolves faster.",
      sections: [
        { heading: "Properties", body: "Test hard/soft, rough/smooth, bendy/stiff, magnetic — make a key." },
        { heading: "Dissolving", body: "Solid breaks into liquid; warm + stirring speeds it up." },
      ],
    },
  ],
};
