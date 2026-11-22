import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "esc10-u2-lesson-2-3",
  code: "2-3",
  title: "Acids, Alkalis, Metals and Reversible Reactions",
  goal: "I CAN describe acid/alkali properties, metal reactivity and reversible reactions.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Chemistry"],
  vocabulary: [
    {
      term: "pH scale",
      definition:
        "0-14 scale: acids <7, neutral 7, alkalis >7 — each unit = 10× difference.",
    },
    { term: "Neutralisation", definition: "Acid + alkali → salt + water." },
    {
      term: "Reactivity series",
      definition: "Metals ordered by reactivity — potassium most, gold least.",
    },
    {
      term: "Reversible reaction",
      definition: "Products can react to re-form reactants — indicated by ⇌.",
    },
  ],
  concepts: [
    {
      id: "esc10-u2-acids-metals",
      title: "Acids, Alkalis and Metals",
      skill:
        "Use the pH scale, describe neutralisation and predict metal reactions.",
      lesson: {
        sections: [
          {
            heading: "Acids and alkalis",
            body: "**Acids**: pH <7, H⁺ ions, react with metals → salt + H₂, with carbonates → salt + CO₂ + water, turn litmus red. **Alkalis**: pH >7, OH⁻ ions, turn litmus blue, feel slippery (don't touch). **Neutralisation**: acid + alkali → salt + water — used in antacids, soil treatment.\n\n**Indicators**: universal indicator (full colour range), litmus (red/blue), phenolphthalein (colourless→pink), methyl orange (red→yellow). pH probes give digital readings.",
          },
          {
            heading: "Metals and reactivity",
            body: "**Reactivity series** (most→least): K, Na, Ca, Mg, Al, Zn, Fe, Sn, Pb, Cu, Ag, Au. Metals above H displace it from acids → salt + H₂; below H don't react with dilute acids (Cu, Ag, Au).\n\n**Extraction**: very reactive metals (K, Na, Ca) need electrolysis; middle (Zn, Fe) need carbon reduction; least reactive (Cu, Ag, Au) found native or heated. **Corrosion**: iron + oxygen + water → rust; aluminium forms protective oxide layer.",
          },
        ],
        keyFormulas: [
          {
            name: "pH scale",
            statement:
              "Acid <7, neutral 7, alkali >7; each unit = 10× H⁺ change.",
          },
          {
            name: "Metal + acid",
            statement: "Above H: salt + H₂; below H: no reaction.",
          },
        ],
        workedExample: {
          problem: "Will zinc react with dilute sulfuric acid?",
          solution:
            "Yes — zinc is above hydrogen in reactivity series → zinc sulfate + hydrogen.",
        },
      },
      questions: [
        {
          id: "esc10-u2-acids-metals-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the pH of a neutral solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "7" },
              { id: "d", text: "14" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neutral pH",
                statement: "pH 7 = neutral (pure water).",
              },
            ],
            steps: [
              { reasoning: "Neutral = pH 7.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** 7",
            commonErrors: ["0 or 14 chosen."],
          },
        },
        {
          id: "esc10-u2-acids-metals-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the word equation for neutralisation of hydrochloric acid with sodium hydroxide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Neutralisation",
                statement: "Acid + alkali → salt + water.",
              },
            ],
            steps: [
              {
                reasoning: "Reactants: HCl + NaOH.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Products: NaCl + water.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Complete correct equation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Hydrochloric acid + sodium hydroxide → sodium chloride + water",
            commonErrors: ["Wrong products.", "Incomplete."],
          },
        },
        {
          id: "esc10-u2-acids-metals-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why can't copper be extracted from its ore by heating with carbon, but iron can?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Extraction methods",
                statement:
                  "Reactivity determines method — carbon only reduces less reactive metals.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon reduction works for metals below carbon.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Iron is below carbon — reducible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Copper is below iron — even less reactive, needs different method.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Carbon can only reduce metals less reactive than itself; iron qualifies, copper needs electrolysis or other methods.",
            commonErrors: ["Reversed reactivity.", "Same method assumed."],
          },
        },
        {
          id: "esc10-u2-acids-metals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three metals: magnesium, zinc, copper — each added to dilute HCl.",
          parts: [
            {
              label: "a",
              prompt: "Predict which react and rank by rate.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Write equations for those that react.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reactivity series",
                statement: "Mg > Zn > H > Cu — Mg and Zn react, Cu doesn't.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Mg and Zn react (above H); Cu doesn't.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Rate: Mg > Zn (more reactive = faster).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Mg + 2HCl → MgCl₂ + H₂.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Zn + 2HCl → ZnCl₂ + H₂.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) Mg fastest, Zn slower, Cu none (b) MgCl₂+H₂, ZnCl₂+H₂",
            commonErrors: ["Cu reacts assumed.", "Rate order wrong."],
          },
        },
      ],
    },
    {
      id: "esc10-u2-reversible",
      title: "Reversible Reactions and Equilibrium",
      skill:
        "Describe reversible reactions, dynamic equilibrium and Le Chatelier's principle.",
      lesson: {
        sections: [
          {
            heading: "Reversible reactions",
            body: "**Reversible**: products can re-form reactants — shown by ⇌. Thermal decomposition of CaCO₃ ⇌ CaO + CO₂. Hydration/dehydration of CuSO₄. Haber process N₂ + 3H₂ ⇌ 2NH₃.\n\n**Dynamic equilibrium**: forward and reverse rates equal — concentrations constant but reactions continue. Not static — particles still reacting both ways.",
          },
          {
            heading: "Le Chatelier's principle",
            body: "System at equilibrium responds to change by **opposing** it:\n- **Concentration**: increase reactant → shifts toward products; decrease → toward reactants.\n- **Pressure** (gases): increase → shifts toward fewer gas molecules; decrease → more molecules.\n- **Temperature**: increase → shifts toward endothermic direction; decrease → exothermic direction.\n\nCatalysts speed both directions equally — don't shift equilibrium, just reach it faster.",
          },
        ],
        keyFormulas: [
          {
            name: "Reversible reaction",
            statement: "⇌ symbol — products can re-form reactants.",
          },
          {
            name: "Le Chatelier",
            statement:
              "System opposes changes to concentration, pressure, temperature.",
          },
        ],
        workedExample: {
          problem:
            "Haber: N₂ + 3H₂ ⇌ 2NH₃ (exothermic). Predict effect of increasing pressure.",
          solution:
            "Shifts right — 4 gas molecules → 2, fewer moles favoured at high pressure.",
        },
      },
      questions: [
        {
          id: "esc10-u2-reversible-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What symbol indicates a reversible reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "+" },
              { id: "b", text: "→" },
              { id: "c", text: "⇌" },
              { id: "d", text: "=" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Reversible symbol",
                statement: "⇌ = forward and reverse.",
              },
            ],
            steps: [
              {
                reasoning: "⇌ indicates reversibility.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** ⇌",
            commonErrors: ["→ chosen."],
          },
        },
        {
          id: "esc10-u2-reversible-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is dynamic equilibrium?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dynamic equilibrium",
                statement:
                  "Forward and reverse rates equal — concentrations constant, reactions continue.",
              },
            ],
            steps: [
              {
                reasoning: "Rates equal both directions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Concentrations constant.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reactions still occurring (dynamic).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Equal forward/reverse rates — concentrations constant but reactions continue microscopically.",
            commonErrors: ["Reactions stopped view.", "No rate equality."],
          },
        },
        {
          id: "esc10-u2-reversible-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using Le Chatelier's principle, predict the effect of increasing temperature on an exothermic equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier temperature",
                statement:
                  "Heat increase shifts equilibrium toward endothermic direction.",
              },
            ],
            steps: [
              {
                reasoning: "Exothermic forward = releases heat.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Adding heat = system must absorb it.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shifts toward reactants (endothermic direction).",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent application.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Shifts toward reactants — system absorbs added heat by favouring endothermic reverse direction.",
            commonErrors: ["Wrong direction.", "No heat absorption link."],
          },
        },
        {
          id: "esc10-u2-reversible-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Haber process: N₂ + 3H₂ ⇌ 2NH₃ (exothermic).",
          parts: [
            {
              label: "a",
              prompt: "Predict effect of increasing pressure on yield.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Predict effect of increasing temperature on yield and rate.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain the industrial compromise.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Haber process",
                statement:
                  "Pressure ↑ yield; temp ↑ rate but ↓ yield — compromise needed.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Pressure ↑ → shifts right (4→2 gas molecules).",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Yield of NH₃ increases.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Temp ↑ → rate ↑ but equilibrium shifts left (exothermic).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Yield decreases despite faster rate.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Moderate temp (~450°C) + high pressure + catalyst compromise.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) pressure↑→yield↑ (b) temp↑→rate↑yield↓ (c) moderate temp compromise",
            commonErrors: [
              "Temp and rate conflated.",
              "No compromise explained.",
            ],
          },
        },
      ],
    },
  ],
};
