import type { Lesson } from "../../../types.ts";

export const lesson311: Lesson = {
  id: "edps6-u3-lesson-3-1",
  code: "3-1",
  title: "Separating Mixtures and Solutions",
  goal: "I CAN separate complex mixtures and explain solutions.",
  standards: ["Year 6 Science: Separating mixtures"],
  vocabulary: [
    { term: "Mixture", definition: "Substances not chemically combined." },
    { term: "Solution", definition: "Homogeneous mixture of solute+solvent." },
    { term: "Saturated", definition: "Solution can't dissolve more solute." },
    { term: "Distillation", definition: "Evaporate then condense to purify." },
  ],
  concepts: [
    {
      id: "edps6-u3-separate",
      title: "Separation techniques",
      skill: "Choose and describe separation methods.",
      lesson: {
        sections: [
          {
            heading: "Separation methods",
            body: "**Filtration** (insoluble solid+liquid), **evaporation/crystallisation** (dissolved solid), **distillation** (purify liquid — evaporate+condense), **magnetism** (magnetic+non-magnetic), **sieving** (particle size), **decanting** (pour liquid off), **chromatography** (coloured dyes).",
          },
          {
            heading: "Choosing methods",
            body: "**Insoluble** → filter; **dissolved** → evaporate; **liquid+liquid** → separating funnel (density); **magnetic** → magnet; **dissolved liquid** → distillation.",
          },
        ],
        keyFormulas: [
          { name: "Filtration", statement: "Insoluble solid" },
          { name: "Distillation", statement: "Purify liquid" },
          { name: "Chromatography", statement: "Separate dyes" },
        ],
        workedExample: {
          problem: "How to purify salt water?",
          solution:
            "Distillation — evaporate water, condense pure water, leaving salt.",
        },
      },
      questions: [
        {
          id: "edps6-u3-sep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which method purifies a liquid by evaporating and condensing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sieving" },
              { id: "b", text: "Filtration" },
              { id: "c", text: "Magnetism" },
              { id: "d", text: "Distillation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distillation",
                statement: "Evaporate+condense.",
              },
            ],
            steps: [{ reasoning: "Recall method.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Distillation",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edps6-u3-sep-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a saturated solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Can't dissolve more solute" },
              { id: "b", text: "Pure liquid" },
              { id: "c", text: "No solute" },
              { id: "d", text: "Only water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Saturated",
                statement: "Max solute.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              { reasoning: "Answer: max solute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Can't dissolve more solute",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps6-u3-sep-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How would you separate ink into its different colours?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chromatography",
                statement: "Separates dyes by solubility.",
              },
            ],
            steps: [
              { reasoning: "Method identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Chromatography — different dyes travel different distances on paper",
            commonErrors: ["Wrong method."],
          },
        },
        {
          id: "edps6-u3-sep-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a method to separate a mixture of salt, sand and oil from water.",
          parts: [
            { label: "a", prompt: "First separation", marks: 1 },
            { label: "b", prompt: "Second separation", marks: 1 },
            { label: "c", prompt: "Final recovery", marks: 1 },
            { label: "d", prompt: "All correct", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Separation",
                statement: "Decant oil→filter sand→evaporate salt.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Oil separated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sand filtered.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Salt recovered.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "1. Separate oil with separating funnel. 2. Filter sand. 3. Evaporate water to recover salt",
            commonErrors: ["Incomplete method."],
          },
        },
      ],
    },
    {
      id: "edps6-u3-dissolve",
      title: "Dissolving and Solutions",
      skill: "Explain dissolving and factors affecting it.",
      lesson: {
        sections: [
          {
            heading: "Dissolving",
            body: "**Solute** dissolves in **solvent** → **solution**. **Soluble** substances dissolve; **insoluble** don't. Dissolving speed affected by: **temperature** (hot = faster), **stirring**, **particle size** (smaller = faster), **surface area**.",
          },
          {
            heading: "Solutions",
            body: "Homogeneous (uniform throughout). **Saturated** = can't dissolve more; **concentrated** = lots of solute; **dilute** = little solute. Crystallisation = evaporating to get solid back.",
          },
        ],
        keyFormulas: [
          { name: "Solute+solvent", statement: "→ solution" },
          { name: "Saturated", statement: "Max dissolved" },
          { name: "Concentrated/dilute", statement: "Lots/little solute" },
        ],
        workedExample: {
          problem: "Why does salt dissolve faster in hot water?",
          solution: "Heating increases particle energy and movement.",
        },
      },
      questions: [
        {
          id: "edps6-u3-di-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solute dissolved in solvent" },
              { id: "b", text: "A gas" },
              { id: "c", text: "An insoluble mixture" },
              { id: "d", text: "A solid mixture" },
            ],
            correctChoiceId: "a",
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
          id: "edps6-u3-di-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which dissolves faster: cold or hot water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both same" },
              { id: "b", text: "Neither" },
              { id: "c", text: "Cold" },
              { id: "d", text: "Hot" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dissolving",
                statement: "Hot = faster.",
              },
            ],
            steps: [
              { reasoning: "Recall factor.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hot.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hot",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edps6-u3-di-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three factors affecting dissolving rate.",
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
            finalAnswer: "Temperature, stirring, particle size",
            commonErrors: ["Missing factor."],
          },
        },
        {
          id: "edps6-u3-di-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a fair test to investigate how stirring affects dissolving.",
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
                statement: "Same solute/water; vary stirring; time dissolving.",
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
                reasoning: "Stirring varied.",
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
              "Keep same sugar/water; test stirred vs unstirred; time dissolving; predict stirred = faster",
            commonErrors: ["Unfair test."],
          },
        },
      ],
    },
  ],
};
