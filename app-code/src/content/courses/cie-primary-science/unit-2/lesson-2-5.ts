import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "cips-u2-lesson-2-5",
  code: "2-5",
  title: "Stage 5 — States of Matter and Dissolving",
  goal: "I CAN describe solids, liquids and gases and explain dissolving.",
  standards: ["Cambridge Primary Science 0097 Stage 5: materials",
  "Cambridge Primary Science 0097 framework substrands: 5Cc, 5Cm"],
  stage: 5,
  vocabulary: [
    { term: "Solid", definition: "Matter with fixed shape and volume." },
    { term: "Liquid", definition: "Matter with fixed volume that takes the container's shape." },
    { term: "Gas", definition: "Matter that spreads to fill any space." },
    { term: "Dissolving", definition: "When a solid disappears into a liquid to make a solution." },
    { term: "Solute and solvent", definition: "The dissolved solid (solute) and the liquid it dissolves in (solvent)." },
  ],
  concepts: [
    {
      id: "cips-u2-s5-matter",
      title: "States of matter and solutions",
      skill: "Describe the three states and explain dissolving at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "Solids keep their own shape and volume (ice, rock). Liquids keep their volume but take the shape of their container (water, milk). Gases spread out to fill all available space (air, steam). Heating or cooling can change a substance from one state to another — melting, freezing, evaporating, condensing.",
          },
          {
            heading: "Dissolving",
            body: "When salt dissolves in water, the solid breaks into tiny particles spread through the liquid — a solution. The salt is the solute, the water is the solvent. The solution looks clear but still contains the dissolved substance, which can be recovered by evaporating the water.",
          },
        ],
        keyFormulas: [
          { name: "States", statement: "Solid: fixed shape+volume; liquid: fixed volume; gas: fills space" },
          { name: "Solution", statement: "solute + solvent = solution" },
        ],
        workedExample: {
          problem: "What happens when sugar is stirred into warm water?",
          solution: "The sugar dissolves — it spreads through the water as tiny particles, making a clear solution.",
        },
      },
      questions: [
        {
          id: "cips-u2-mm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state of matter fills all available space?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gas" }, { id: "b", text: "Solid" }, { id: "c", text: "Liquid" }, { id: "d", text: "None" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Gas", statement: "Gas spreads to fill any space." }],
            steps: [{ reasoning: "Gases expand to fill containers.", marks: 1, markCode: "A" }],
            finalAnswer: "Gas",
          },
        },
        {
          id: "cips-u2-mm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the solute and solvent when salt dissolves in water.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Solute and solvent", statement: "Dissolved solid = solute; liquid = solvent." }],
            steps: [
              { reasoning: "Salt is the solute.", marks: 1, markCode: "M" },
              { reasoning: "Water is the solvent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Solute: salt; solvent: water",
          },
        },
        {
          id: "cips-u2-mm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between melting and dissolving?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Melting vs dissolving", statement: "Melting = state change by heat; dissolving = solid into liquid." }],
            steps: [
              { reasoning: "Melting changes solid to liquid by heating — no solvent needed.", marks: 1, markCode: "M" },
              { reasoning: "Dissolving spreads a solid through a liquid to make a solution.", marks: 1, markCode: "M" },
              { reasoning: "Answer contrasts both clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Melting = heat changes state; dissolving = solid spreads in liquid",
          },
        },
        {
          id: "cips-u2-mm-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How could you recover the salt from salty water? Name the process.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Evaporation", statement: "Heat the solution; water evaporates leaving solute." }],
            steps: [
              { reasoning: "Heat the solution gently.", marks: 1, markCode: "M" },
              { reasoning: "Water evaporates as gas.", marks: 1, markCode: "M" },
              { reasoning: "Salt crystals remain — process is evaporation.", marks: 1, markCode: "M" },
              { reasoning: "Answer: evaporate the water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporate the water to recover the salt",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-mm-notes",
      title: "States of matter — revision notes",
      summary: "Solid fixed; liquid fixed volume; gas fills space; dissolve → solution.",
      sections: [
        { heading: "States", body: "Heat: solid→liquid→gas; cool reverses. Liquid takes container shape only." },
        { heading: "Dissolving", body: "Solute + solvent = solution; evaporate solvent to recover solute." },
      ],
    },
  ],
};
