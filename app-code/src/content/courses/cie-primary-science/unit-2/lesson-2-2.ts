import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cips-u2-lesson-2-2",
  code: "2-2",
  title: "Stage 5 — Materials and Their Properties",
  goal: "I CAN group materials by their properties.",
  standards: ["Cambridge Primary Science 0097 Stage 5: materials",
  "Cambridge Primary Science 0097 framework substrands: 5Cm, 5Cp"],
  stage: 5,
  vocabulary: [
    { term: "Material", definition: "A substance that objects are made from." },
    { term: "Property", definition: "A characteristic of a material, like hardness or flexibility." },
    { term: "Transparent", definition: "Allows light through so you can see through it." },
    { term: "Opaque", definition: "Does not allow light through." },
    { term: "Soluble", definition: "Able to dissolve in a liquid." },
  ],
  concepts: [
    {
      id: "cips-u2-s5-properties",
      title: "Material properties",
      skill: "Describe and compare material properties at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Properties",
            body: "Materials have properties: hardness (how hard), flexibility (can it bend), transparency (can you see through), and whether they conduct heat or electricity.",
          },
          {
            heading: "Choosing materials",
            body: "We choose materials for their properties. Glass is transparent so we use it for windows. Metal is strong and conducts electricity so we use it for wires.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is a raincoat made of plastic, not paper?",
          solution: "Plastic is waterproof and does not tear easily; paper would get wet and tear.",
        },
      },
      questions: [
        {
          id: "cips-u2-s5-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'transparent' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hard" }, { id: "b", text: "You can see through it" }, { id: "c", text: "It conducts heat" }, { id: "d", text: "It dissolves" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Transparent", statement: "Allows light through." }],
            steps: [{ reasoning: "Transparent means you can see through it.", marks: 1, markCode: "B" }],
            finalAnswer: "See through",
          },
        },
        {
          id: "cips-u2-s5-pr-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is best for a window?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Wood" }, { id: "b", text: "Glass" }, { id: "c", text: "Fabric" }, { id: "d", text: "Cardboard" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Material choice", statement: "Choose for properties." }],
            steps: [{ reasoning: "Glass is transparent, so you can see through windows.", marks: 1, markCode: "B" }],
            finalAnswer: "Glass",
          },
        },
        {
          id: "cips-u2-s5-pr-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is metal used for electrical wires?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Material choice", statement: "Property determines use." }],
            steps: [
              { reasoning: "Metal conducts electricity.", marks: 1, markCode: "B" },
              { reasoning: "It is also flexible and strong.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Conducts electricity",
          },
        },
        {
          id: "cips-u2-s5-pr-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare wood and metal in terms of strength and weight.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Comparing materials", statement: "Identify properties." }],
            steps: [
              { reasoning: "Metal is stronger than wood.", marks: 1, markCode: "B" },
              { reasoning: "Metal is heavier than wood for the same size.", marks: 1, markCode: "B" },
              { reasoning: "Wood is lighter and easier to work with.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Metal stronger/heavier; wood lighter",
          },
        },
      ],
    },
    {
      id: "cips-u2-s5-solubility",
      title: "Solubility and dissolving",
      skill: "Understand soluble and insoluble materials at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Soluble and insoluble",
            body: "Soluble materials dissolve in water (sugar, salt). Insoluble materials do not dissolve (sand, oil).",
          },
          {
            heading: "Testing solubility",
            body: "To test, add the material to water and stir. If it disappears, it is soluble; if it stays visible, it is insoluble.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is sand soluble in water?",
          solution: "No — sand does not dissolve; it settles at the bottom.",
        },
      },
      questions: [
        {
          id: "cips-u2-s5-so-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which material is soluble in water?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sand" }, { id: "b", text: "Sugar" }, { id: "c", text: "Oil" }, { id: "d", text: "Plastic" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Soluble", statement: "Dissolves in liquid." }],
            steps: [{ reasoning: "Sugar dissolves in water.", marks: 1, markCode: "B" }],
            finalAnswer: "Sugar",
          },
        },
        {
          id: "cips-u2-s5-so-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'insoluble' mean?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Insoluble", statement: "Does not dissolve." }],
            steps: [
              { reasoning: "Insoluble means it does not dissolve in water.", marks: 1, markCode: "B" },
              { reasoning: "Examples: sand, oil, plastic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Does not dissolve",
          },
        },
        {
          id: "cips-u2-s5-so-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "How would you test if a powder is soluble in water?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing solubility", statement: "Add to water and observe." }],
            steps: [
              { reasoning: "Add the powder to water and stir.", marks: 1, markCode: "B" },
              { reasoning: "If it disappears it is soluble; if it stays, it is insoluble.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Add to water and observe",
          },
        },
        {
          id: "cips-u2-s5-so-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is salt soluble but sand insoluble in water?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Solubility", statement: "Different materials dissolve differently." }],
            steps: [
              { reasoning: "Salt particles can mix with water molecules and dissolve.", marks: 1, markCode: "B" },
              { reasoning: "Sand particles are too large and heavy to dissolve.", marks: 1, markCode: "B" },
              { reasoning: "This is why they behave differently in water.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Salt dissolves; sand does not",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-s5-materials-notes",
      title: "Stage 5 materials — revision notes",
      summary: "Material properties, transparency, solubility.",
      sections: [
        { heading: "Properties", body: "Hardness, flexibility, transparency, conductivity. Choose materials for their properties." },
        { heading: "Solubility", body: "Soluble dissolves in water; insoluble does not. Test by adding to water and stirring." },
      ],
    },
  ],
};
