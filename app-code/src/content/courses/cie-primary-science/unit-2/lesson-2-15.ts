import type { Lesson } from "../../../types.ts";

export const lesson215: Lesson = {
  id: "cips-u2-lesson-2-15",
  code: "2-15",
  title: "Stage 6 — Changing Materials: Heating, Cooling and Mixtures",
  goal: "I CAN describe changes of state, dissolving and reversible/irreversible changes.",
  standards: ["Cambridge Primary Science 0097 Stage 6: materials",
  "Cambridge Primary Science 0097 framework substrands: 6Cc, 6Cp, 6TWSc, 6TWSa"],
  stage: 6,
  vocabulary: [
    { term: "Change of state", definition: "Solid↔liquid↔gas via heating or cooling." },
    { term: "Melting", definition: "Solid → liquid by heating." },
    { term: "Evaporation", definition: "Liquid → gas at the surface." },
    { term: "Condensation", definition: "Gas → liquid on a cold surface." },
    { term: "Reversible change", definition: "Can be undone: melting ice, dissolving salt." },
  ],
  concepts: [
    {
      id: "cips-u2-s15-materials-changes",
      title: "Changes of state, dissolving and reversibility",
      skill: "Describe state changes, dissolving and classify changes as reversible/irreversible at Stage 6 level.",
      lesson: {
        sections: [
          {
            heading: "Changes of state",
            body: "Heating changes states: solid melts to liquid (ice→water), liquid evaporates to gas (water→steam), gas condenses back to liquid on cold surfaces, liquid freezes to solid when cooled. Boiling = evaporation throughout the liquid at 100°C for water; melting point of ice = 0°C. These changes are reversible — cool steam and it condenses back to water.",
          },
          {
            heading: "Dissolving and reversibility",
            body: "Dissolving spreads a solid through a liquid — the solute can be recovered by evaporating the solvent (reversible). Some changes can't be undone: burning toast, cooking an egg, rusting iron — these are irreversible chemical changes producing new substances.",
          },
        ],
        keyFormulas: [
          { name: "State changes", statement: "melt (heat), evaporate, condense, freeze" },
          { name: "Reversibility", statement: "physical changes undoable; chemical changes not" },
        ],
        workedExample: {
          problem: "Is dissolving salt in water reversible? Explain.",
          solution: "Yes — evaporate the water and the salt remains, unchanged.",
        },
      },
      questions: [
        {
          id: "cips-u2-ch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the change of state called when a liquid becomes a gas?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Condensation" },
            { id: "b", text: "Freezing" },
            { id: "c", text: "Melting" },
            { id: "d", text: "Evaporation" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaporation", statement: "Liquid → gas." }],
            steps: [{ reasoning: "Liquid to gas = evaporation.", marks: 1, markCode: "A" }],
            finalAnswer: "Evaporation",
          },
        },
        {
          id: "cips-u2-ch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Is burning paper a reversible or irreversible change?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Irreversible", statement: "Can't be undone — new substance." }],
            steps: [
              { reasoning: "Burning creates ash — can't get paper back.", marks: 1, markCode: "M" },
              { reasoning: "Answer: irreversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Irreversible",
          },
        },
        {
          id: "cips-u2-ch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why steam condenses on a cold bathroom mirror.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Condensation", statement: "Gas → liquid on cold surface." }],
            steps: [
              { reasoning: "Steam (gas) hits cold mirror.", marks: 1, markCode: "M" },
              { reasoning: "Loses heat → condenses to liquid water.", marks: 1, markCode: "M" },
              { reasoning: "Answer explains the state change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steam cools on cold surface → condenses to water droplets",
          },
        },
        {
          id: "cips-u2-ch-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "Classify each change as reversible or irreversible and explain: (a) melting chocolate, (b) frying an egg, (c) dissolving sugar in tea, (d) rusting a bike. Then explain the water cycle as repeated state changes. Show reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reversible vs irreversible", statement: "Physical vs chemical changes." }],
            steps: [
              { reasoning: "(a) Melting chocolate = reversible (cool to set again).", marks: 1, markCode: "M" },
              { reasoning: "(b) Frying egg = irreversible (protein changes permanently).", marks: 1, markCode: "M" },
              { reasoning: "(c) Dissolving sugar = reversible (evaporate to recover).", marks: 1, markCode: "M" },
              { reasoning: "(d) Rusting = irreversible (new substance forms).", marks: 1, markCode: "M" },
              { reasoning: "Water cycle: evaporation → condensation → precipitation → collection.", marks: 1, markCode: "M" },
              { reasoning: "Each stage is a state change.", marks: 1, markCode: "M" },
              { reasoning: "Cycle repeats continuously.", marks: 1, markCode: "M" },
              { reasoning: "All classifications correct with reasons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reversible: melting chocolate, dissolving sugar; irreversible: frying egg, rusting",
          },
        },
        {
          id: "cips-u2-ch-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the change of state called when a solid becomes a liquid?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Melting" },
            { id: "b", text: "Evaporation" },
            { id: "c", text: "Freezing" },
            { id: "d", text: "Condensation" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Melting", statement: "Solid → liquid by heating." }],
            steps: [{ reasoning: "Solid to liquid = melting.", marks: 1, markCode: "A" }],
            finalAnswer: "Melting",
          },
        },
        {
          id: "cips-u2-ch-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the change of state called when a gas becomes a liquid?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Condensation" },
            { id: "b", text: "Evaporation" },
            { id: "c", text: "Melting" },
            { id: "d", text: "Freezing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Condensation", statement: "Gas → liquid on cold surface." }],
            steps: [{ reasoning: "Gas to liquid = condensation.", marks: 1, markCode: "A" }],
            finalAnswer: "Condensation",
          },
        },
        {
          id: "cips-u2-ch-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many changes of state are there: melting, freezing, evaporation, condensation?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "changes" }] },
          markscheme: {
            principles: [{ kind: "definition", name: "State changes", statement: "Four main changes." }],
            steps: [{ reasoning: "There are 4 changes of state.", marks: 1, markCode: "M" }],
            finalAnswer: "4",
          },
        },
        {
          id: "cips-u2-ch-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In 6 change tests, 4 are reversible and 2 are irreversible. What is the total number of irreversible changes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "changes" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Reversibility", statement: "Count irreversible changes." }],
            steps: [
              { reasoning: "2 changes are irreversible.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cips-u2-ch-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change is REVERISIBLE?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Melting ice" },
            { id: "b", text: "Cooking an egg" },
            { id: "c", text: "Burning toast" },
            { id: "d", text: "Rusting iron" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reversible", statement: "Can be undone — melting ice." }],
            steps: [{ reasoning: "Melting ice is reversible; the others are chemical.", marks: 1, markCode: "A" }],
            finalAnswer: "Melting ice",
          },
        },
        {
          id: "cips-u2-ch-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two changes that are IRREVERSIBLE.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Irreversible", statement: "Can't be undone — burning, cooking, rusting." }],
            steps: [
              { reasoning: "First irreversible change (e.g. burning).", marks: 1, markCode: "M" },
              { reasoning: "Second (e.g. cooking egg or rusting).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. burning and rusting",
          },
        },
        {
          id: "cips-u2-ch-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Is dissolving salt in water reversible? Explain how you could prove it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reversible", statement: "Physical changes can be undone." }],
            steps: [
              { reasoning: "Yes — it is a physical change.", marks: 1, markCode: "M" },
              { reasoning: "Evaporate the water — salt remains unchanged.", marks: 1, markCode: "M" },
              { reasoning: "No new substance formed → reversible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes — evaporate water to recover salt",
          },
        },
        {
          id: "cips-u2-ch-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "At what temperature does water boil?",
          response: { type: "mcq", choices: [
            { id: "a", text: "25°C" },
            { id: "b", text: "100°C" },
            { id: "c", text: "0°C" },
            { id: "d", text: "50°C" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Boiling point", statement: "Water boils at 100°C." }],
            steps: [{ reasoning: "Water boils at 100°C.", marks: 1, markCode: "A" }],
            finalAnswer: "100°C",
          },
        },
        {
          id: "cips-u2-ch-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A kettle boils 500 mL of water. If 200 mL evaporates as steam, how much liquid water remains?",
          response: { type: "numeric", parts: [{ label: "a", answer: 300, unit: "mL" }] },
          markscheme: {
            principles: [{ kind: "technique", name: "State changes", statement: "Subtract evaporated amount." }],
            steps: [
              { reasoning: "$500 - 200 = 300$.", marks: 1, markCode: "M" },
              { reasoning: "300 mL remains.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "300",
          },
        },
        {
          id: "cips-u2-ch-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between evaporation and boiling.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaporation vs boiling", statement: "Surface vs throughout at 100°C." }],
            steps: [
              { reasoning: "Evaporation happens at the surface at any temperature.", marks: 1, markCode: "M" },
              { reasoning: "Boiling happens throughout the liquid at 100°C.", marks: 1, markCode: "M" },
              { reasoning: "Both turn liquid to gas but under different conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaporation=surface any temp; boiling=throughout at 100°C",
          },
        },
        {
          id: "cips-u2-ch-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change happens when water is cooled below 0°C?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Freezing" },
            { id: "b", text: "Melting" },
            { id: "c", text: "Evaporation" },
            { id: "d", text: "Condensation" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Freezing", statement: "Liquid → solid when cooled." }],
            steps: [{ reasoning: "Water freezes to ice below 0°C.", marks: 1, markCode: "A" }],
            finalAnswer: "Freezing",
          },
        },
        {
          id: "cips-u2-ch-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Name the four changes of state and define each. (b) Is melting reversible? Explain. (c) Is burning reversible? Explain. (d) Is dissolving salt reversible? How? (e) What is condensation? Give a real example. (f) At what temperature does water boil? (g) Explain evaporation vs boiling. (h) Describe the water cycle as state changes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Changes of state and reversibility", statement: "Integrated Stage 6 materials answer." }],
            steps: [
              { reasoning: "(a) Melting S→L; freezing L→S; evaporation L→G; condensation G→L.", marks: 1, markCode: "M" },
              { reasoning: "(b) Yes — cool the liquid and it solidifies again.", marks: 1, markCode: "M" },
              { reasoning: "(c) No — creates ash/new substances; can't undo.", marks: 1, markCode: "M" },
              { reasoning: "(d) Yes — evaporate water to recover salt.", marks: 1, markCode: "M" },
              { reasoning: "(e) Gas → liquid on cold surface; e.g. steam on mirror.", marks: 1, markCode: "M" },
              { reasoning: "(f) 100°C.", marks: 1, markCode: "M" },
              { reasoning: "(g) Evaporation=surface any temp; boiling=throughout at 100°C.", marks: 1, markCode: "M" },
              { reasoning: "(h) Evaporation→condensation→precipitation→collection, repeating.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "State changes, reversibility examples, condensation, boiling point, evap vs boil, water cycle.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cips-u2-ch-notes",
      title: "Changing materials — notes",
      summary: "melt/evaporate/condense/freeze; reversible = undoable; chemical = permanent.",
      sections: [
        { heading: "State changes", body: "Heat: solid→liquid→gas; cool reverses. Boiling point 100°C, melting ice 0°C." },
        { heading: "Reversibility", body: "Physical changes (melting, dissolving) undoable; chemical (burning, rusting) not." },
      ],
    },
  ],
};
