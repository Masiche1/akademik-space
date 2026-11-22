import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "esc11-u2-lesson-2-3",
  code: "2-3",
  title: "Chemical Calculations and Reactions",
  goal: "I CAN balance equations, calculate reacting masses and interpret energy changes.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Chemistry (Y11)"],
  vocabulary: [
    {
      term: "Balanced equation",
      definition: "Equal atoms each side — obeys conservation of mass.",
    },
    {
      term: "Limiting reactant",
      definition: "Runs out first — determines maximum product.",
    },
    {
      term: "Excess reactant",
      definition: "Left over after reaction — ensures complete reaction.",
    },
    {
      term: "Conservation of mass",
      definition: "Total mass reactants = total mass products.",
    },
  ],
  concepts: [
    {
      id: "esc11-u2-balancing",
      title: "Balancing Equations and Reacting Masses",
      skill:
        "Balance chemical equations and calculate masses of reactants and products.",
      lesson: {
        sections: [
          {
            heading: "Balancing equations",
            body: "Balance by adjusting **coefficients** (never subscripts). Method: count atoms each side → balance metals first, then non-metals, then oxygen/hydrogen last. Example: C₃H₈ + O₂ → CO₂ + H₂O → 1C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.\n\n**Types**: synthesis (A+B→AB), decomposition (AB→A+B), displacement (A+BC→AC+B), combustion (fuel+O₂→CO₂+H₂O), neutralisation (acid+alkali→salt+water). Ionic equations show only reacting ions.",
          },
          {
            heading: "Reacting masses and yield",
            body: "**Mass calculations**: balanced equation gives mole ratios → convert to masses via Mr. **Limiting reactant**: runs out first → max product; **excess** ensures completion. **Percentage yield** = actual ÷ theoretical × 100% — losses from side reactions, incomplete reaction, handling.\n\n**Atom economy** = useful product mass ÷ total reactant mass × 100% — green chemistry metric. High atom economy = less waste. Haber process high; many organic syntheses low.",
          },
        ],
        keyFormulas: [
          {
            name: "Balancing",
            statement: "Coefficients balance atoms; conservation of mass.",
          },
          {
            name: "Percentage yield",
            statement:
              "actual ÷ theoretical × 100%; atom economy = useful ÷ total mass.",
          },
        ],
        workedExample: {
          problem:
            "2H₂ + O₂ → 2H₂O. If 4 g H₂ reacts with excess O₂, what mass of water?",
          solution: "4g H₂ = 2 mol → 2 mol H₂O = 36 g.",
        },
      },
      questions: [
        {
          id: "esc11-u2-balancing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Balance: H₂ + O₂ → H₂O",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balancing",
                statement: "2H₂ + O₂ → 2H₂O — 4H, 2O each side.",
              },
            ],
            steps: [
              { reasoning: "2H₂ + O₂ → 2H₂O.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "2H₂ + O₂ → 2H₂O",
            commonErrors: ["Subscripts changed.", "Unbalanced O."],
          },
        },
        {
          id: "esc11-u2-balancing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a reaction, 10 g reactants produce 9 g products. Explain the missing gram.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation of mass",
                statement:
                  "Mass conserved — missing mass likely gas not measured.",
              },
            ],
            steps: [
              {
                reasoning: "Conservation of mass requires equality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gas product may escape measurement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Re-weigh including gas or seal container.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Gas escaped — total mass still conserved if included.",
            commonErrors: ["Mass destroyed view.", "No gas explanation."],
          },
        },
        {
          id: "esc11-u2-balancing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "CH₄ + 2O₂ → CO₂ + 2H₂O. If 16 g CH₄ burns (Mr=16), calculate CO₂ produced (Mr=44).",
          response: {
            type: "numeric",
            parts: [{ label: "CO₂ mass (g)", answer: 44 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Reacting masses",
                statement: "1 mol CH₄ → 1 mol CO₂ = 44 g.",
              },
            ],
            steps: [
              {
                reasoning: "16g CH₄ = 1 mol → 1 mol CO₂ = 44 g.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "44 g",
            commonErrors: ["Wrong mole ratio.", "Mr used wrong."],
          },
        },
        {
          id: "esc11-u2-balancing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Industrial process makes product with 80% yield.",
          parts: [
            {
              label: "a",
              prompt: "Explain what 'percentage yield' means.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Give two reasons yield isn't 100%.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Calculate atom economy if only desired product counts.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Yield",
                statement:
                  "Yield = actual/theoretical; atom economy = useful/total mass.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Actual product ÷ theoretical max × 100%.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) 80% = got 80% of possible product.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Side reactions, incomplete reaction.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Product loss in handling/transfer.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Atom economy = desired product mass ÷ all reactant mass.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) ×100% for percentage.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) actual/theoretical×100 (b) side reactions/losses (c) useful mass ÷ total reactant mass ×100",
            commonErrors: ["Yield vs atom economy confused.", "No reasons."],
          },
        },
      ],
    },
    {
      id: "esc11-u2-energy",
      title: "Energy Changes and Bond Energies",
      skill: "Describe exothermic/endothermic reactions and energy profiles.",
      lesson: {
        sections: [
          {
            heading: "Energy profiles",
            body: "**Exothermic** (ΔH negative): products lower energy than reactants — heat released to surroundings (combustion, neutralisation, respiration). **Endothermic** (ΔH positive): products higher — heat absorbed (photosynthesis, thermal decomposition, instant ice packs).\n\n**Energy profile diagram**: y-axis = energy, x-axis = reaction progress. Peak = activation energy (Ea) — energy needed to start. Catalysts lower Ea (alternative pathway). ΔH = products − reactants energy.",
          },
          {
            heading: "Bond energies and applications",
            body: "**Bond breaking** absorbs energy (endothermic); **bond forming** releases (exothermic). Net ΔH = energy broken − energy formed. Strong bonds (C≡N, C=O) need more energy to break.\n\n**Applications**: respiration releases energy for ATP; combustion powers engines; photosynthesis stores solar energy in glucose; respiration reverses it. Hand warmers = exothermic oxidation; cold packs = endothermic dissolution.",
          },
        ],
        keyFormulas: [
          {
            name: "ΔH",
            statement:
              "ΔH = products energy − reactants energy; negative = exothermic.",
          },
          {
            name: "Bond energy",
            statement: "Break = absorb; form = release; net = ΔH.",
          },
        ],
        workedExample: {
          problem:
            "Reaction absorbs 100 kJ to break bonds, releases 150 kJ forming bonds. ΔH?",
          solution: "ΔH = 100 − 150 = −50 kJ → exothermic.",
        },
      },
      questions: [
        {
          id: "esc11-u2-energy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is exothermic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Instant cold pack" },
              { id: "b", text: "Thermal decomposition" },
              { id: "c", text: "Photosynthesis" },
              { id: "d", text: "Combustion" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exothermic",
                statement:
                  "Releases heat — combustion, respiration, neutralisation.",
              },
            ],
            steps: [
              {
                reasoning: "Combustion exothermic.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Combustion",
            commonErrors: ["Photosynthesis confused — endothermic."],
          },
        },
        {
          id: "esc11-u2-energy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "On an energy profile, what does the peak represent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Activation energy",
                statement: "Peak = minimum energy to start reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Peak = activation energy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Minimum energy for successful collision.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Catalyst lowers this peak.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Activation energy — minimum energy needed for reaction to proceed.",
            commonErrors: [
              "Total energy confused.",
              "Products energy assumed.",
            ],
          },
        },
        {
          id: "esc11-u2-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Breaking bonds requires 400 kJ; forming releases 600 kJ. Calculate ΔH and classify.",
          response: {
            type: "numeric",
            parts: [{ label: "ΔH (kJ)", answer: -200 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ΔH",
                statement: "ΔH = broken − formed = 400 − 600 = −200 kJ.",
              },
            ],
            steps: [
              {
                reasoning: "ΔH = 400 − 600 = −200 kJ → exothermic.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "−200 kJ (exothermic)",
            commonErrors: ["Sign reversed.", "Absolute value only."],
          },
        },
        {
          id: "esc11-u2-energy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (endothermic).",
          parts: [
            { label: "a", prompt: "Explain why it's endothermic.", marks: 3 },
            {
              label: "b",
              prompt: "Describe where the energy comes from.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Explain how respiration relates to it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photosynthesis energy",
                statement:
                  "Stores solar energy in glucose; respiration releases it.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Stores energy in glucose bonds.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Products higher energy than reactants.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) ΔH positive — heat absorbed.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Light energy from sun powers it.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Respiration reverses — glucose → CO₂+H₂O.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Releases stored energy as ATP/heat.",
                marks: 1,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Essentially opposite reaction energetically.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) stores energy, ΔH>0 (b) sunlight (c) respiration reverses releasing energy",
            commonErrors: ["Photosynthesis exothermic.", "No energy source."],
          },
        },
      ],
    },
  ],
};
