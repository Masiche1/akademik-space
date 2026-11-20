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
            { id: "a", text: "Melting" }, { id: "b", text: "Freezing" }, { id: "c", text: "Evaporation" }, { id: "d", text: "Condensation" },
          ], correctChoiceId: "c" },
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
