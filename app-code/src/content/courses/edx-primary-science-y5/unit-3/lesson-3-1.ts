import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "edps5-u3-lesson-3-1",
  code: "3-1",
  title: "Separating Mixtures",
  goal: "I CAN separate mixtures using different techniques.",
  standards: ["Year 5 Science: Separating mixtures"],
  vocabulary: [
    {
      term: "Mixture",
      definition: "Two or more substances not chemically combined.",
    },
    { term: "Solution", definition: "Mixture where one dissolves in another." },
    {
      term: "Filtration",
      definition: "Separating insoluble solid from liquid.",
    },
    {
      term: "Evaporation",
      definition: "Separating dissolved solid by heating.",
    },
  ],
  concepts: [
    {
      id: "edps5-u3-separate",
      title: "Separation techniques",
      skill: "Choose appropriate separation methods for different mixtures.",
      lesson: {
        sections: [
          {
            heading: "Separation methods",
            body: "**Filtration**: insoluble solid from liquid (sand+water). **Evaporation**: dissolved solid from solution (salt water). **Magnetism**: magnetic from non-magnetic (iron filings+sand). **Sieving**: different sized particles. **Decanting**: pour off liquid. **Distillation**: evaporate then condense to purify liquid.",
          },
          {
            heading: "Choosing methods",
            body: "Match method to mixture: **insoluble** → filter; **dissolved** → evaporate/crystallise; **magnetic** → magnet; **liquid+liquid** → separate funnel (density).",
          },
        ],
        keyFormulas: [
          { name: "Filtration", statement: "Insoluble solid+liquid" },
          { name: "Evaporation", statement: "Dissolved solid" },
          { name: "Magnetism", statement: "Magnetic materials" },
        ],
        workedExample: {
          problem: "How to separate salt from sand?",
          solution:
            "Add water — salt dissolves, sand doesn't. Filter out sand, evaporate water to get salt.",
        },
      },
      questions: [
        {
          id: "edps5-u3-sep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method separates an insoluble solid from a liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporation" },
              { id: "b", text: "Decanting" },
              { id: "c", text: "Distillation" },
              { id: "d", text: "Filtration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Filtration",
                statement: "Insoluble solid.",
              },
            ],
            steps: [{ reasoning: "Recall method.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Filtration",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edps5-u3-sep-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do you recover salt from salt water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaporate the water" },
              { id: "b", text: "Filter it" },
              { id: "c", text: "Freeze it" },
              { id: "d", text: "Use a magnet" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaporation",
                statement: "Recover dissolved solid.",
              },
            ],
            steps: [
              { reasoning: "Recall method.", marks: 1, markCode: "M" },
              { reasoning: "Answer: evaporate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Evaporate the water",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edps5-u3-sep-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How would you separate iron filings from sand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Magnetism",
                statement: "Magnet attracts iron.",
              },
            ],
            steps: [
              { reasoning: "Method identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Use a magnet — it attracts iron filings, leaving sand behind",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edps5-u3-sep-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a method to separate a mixture of salt, sand and iron filings.",
          parts: [
            { label: "a", prompt: "First step", marks: 1 },
            { label: "b", prompt: "Second step", marks: 1 },
            { label: "c", prompt: "Third step", marks: 1 },
            { label: "d", prompt: "All correct", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Separation",
                statement: "Magnet→dissolve→filter→evaporate.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Magnet used.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Dissolve+filter.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "Evaporate.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "1. Magnet removes iron filings. 2. Add water — salt dissolves. 3. Filter out sand. 4. Evaporate water to get salt",
            commonErrors: ["Incomplete method."],
          },
        },
      ],
    },
    {
      id: "edps5-u3-dissolve",
      title: "Dissolving and solutions",
      skill: "Explain dissolving and factors affecting it.",
      lesson: {
        sections: [
          {
            heading: "Dissolving",
            body: "**Dissolving** = solute particles spreading through solvent to form a **solution**. **Soluble** substances dissolve (salt, sugar); **insoluble** don't (sand, oil). Stirring, heating, and smaller particle size speed dissolving.",
          },
          {
            heading: "Concentration",
            body: "**Concentration** = amount of solute per solvent. Saturated solution can't dissolve more solute. Solutions are homogeneous — uniform throughout.",
          },
        ],
        keyFormulas: [
          { name: "Solution", statement: "Solute dissolved in solvent" },
          { name: "Soluble", statement: "Can dissolve" },
          { name: "Concentration", statement: "Solute per solvent" },
        ],
        workedExample: {
          problem: "Why does sugar dissolve faster in hot water?",
          solution:
            "Heating increases particle movement, speeding dissolution.",
        },
      },
      questions: [
        {
          id: "edps5-u3-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A gas" },
              { id: "b", text: "An insoluble mixture" },
              { id: "c", text: "A mixture of solids" },
              { id: "d", text: "Solute dissolved in solvent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Solution",
                statement: "Solute+solvent.",
              },
            ],
            steps: [
              { reasoning: "Solution defined.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Solute dissolved in solvent",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps5-u3-di-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which dissolves faster: whole sugar cube or crushed sugar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neither" },
              { id: "b", text: "Whole cube" },
              { id: "c", text: "Both same" },
              { id: "d", text: "Crushed sugar" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dissolving",
                statement: "Smaller particles = faster.",
              },
            ],
            steps: [
              { reasoning: "Identify factor.", marks: 1, markCode: "M" },
              { reasoning: "Answer: crushed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Crushed sugar",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edps5-u3-di-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three factors that affect how fast something dissolves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dissolving factors",
                statement: "Temperature, stirring, particle size.",
              },
            ],
            steps: [
              { reasoning: "Factor 1.", marks: 1, markCode: "A" },
              { reasoning: "Factor 2.", marks: 1, markCode: "A" },
              { reasoning: "Factor 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Temperature, stirring, particle size (smaller = faster)",
            commonErrors: ["Missing factor."],
          },
        },
        {
          id: "edps5-u3-di-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test to investigate how temperature affects dissolving.",
          parts: [
            { label: "a", prompt: "Controls", marks: 1 },
            { label: "b", prompt: "Variable changed", marks: 1 },
            { label: "c", prompt: "What you measure", marks: 1 },
            { label: "d", prompt: "Prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fair test",
                statement:
                  "Same solute/solvent; vary temperature; time dissolving.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Controls listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Temperature varied.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Time measured.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Prediction made.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Keep same sugar/water amount; test cold/room/hot water; time dissolving; predict hotter = faster",
            commonErrors: ["Unfair test."],
          },
        },
      ],
    },
  ],
};
