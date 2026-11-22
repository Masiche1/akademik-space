import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "esc10-u2-lesson-2-2",
  code: "2-2",
  title: "Chemical Reactions and Rates",
  goal: "I CAN describe chemical reactions, write equations and explain factors affecting rate.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Chemistry"],
  vocabulary: [
    {
      term: "Chemical reaction",
      definition: "Process forming new substances with different properties.",
    },
    {
      term: "Catalyst",
      definition: "Substance speeding a reaction without being consumed.",
    },
    {
      term: "Rate of reaction",
      definition:
        "How fast reactants are converted to products — measured by mass/volume change per time.",
    },
    {
      term: "Collision theory",
      definition:
        "Reactions occur when particles collide with sufficient energy (activation energy).",
    },
  ],
  concepts: [
    {
      id: "esc10-u2-reactions",
      title: "Chemical Reactions and Equations",
      skill: "Identify reaction types and balance symbol equations.",
      lesson: {
        sections: [
          {
            heading: "Types of reaction",
            body: "**Combustion**: fuel + oxygen → CO₂ + water (+energy). **Decomposition**: one → many (thermal decomposition of CaCO₃ → CaO + CO₂). **Displacement**: more reactive metal replaces less reactive (Fe + CuSO₄ → FeSO₄ + Cu). **Neutralisation**: acid + alkali → salt + water. **Oxidation/reduction**: oxygen gain/electron loss vs opposite.\n\n**Signs of reaction**: colour change, gas evolution, precipitate, temperature change, light/sound. **Conservation of mass**: atoms rearranged not created — equations must balance.",
          },
          {
            heading: "Balancing equations",
            body: "Balance by adjusting **coefficients** (numbers before formulas) — never change formulas. Count atoms each side until equal.\n\nExample: CH₄ + O₂ → CO₂ + H₂O → balance C (1=1), H (4→2H₂O), O (2→2+1=3→3/2 O₂) → CH₄ + 2O₂ → CO₂ + 2H₂O. Check: 1C, 4H, 4O each side.",
          },
        ],
        keyFormulas: [
          {
            name: "Reaction types",
            statement:
              "Combustion, decomposition, displacement, neutralisation, redox.",
          },
          {
            name: "Balancing",
            statement: "Adjust coefficients only — atoms conserved both sides.",
          },
        ],
        workedExample: {
          problem: "Balance: Fe + O₂ → Fe₂O₃",
          solution: "4Fe + 3O₂ → 2Fe₂O₃ — 4Fe, 6O each side.",
        },
      },
      questions: [
        {
          id: "esc10-u2-reactions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What must be true of a balanced chemical equation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same number of each atom on both sides" },
              { id: "b", text: "All coefficients equal" },
              { id: "c", text: "Same number of molecules each side" },
              { id: "d", text: "Same mass of products only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation of atoms",
                statement: "Balanced = same atom count each side.",
              },
            ],
            steps: [
              {
                reasoning: "Atoms conserved — same count each side.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Same atoms each side",
            commonErrors: ["Molecules vs atoms confused."],
          },
        },
        {
          id: "esc10-u2-reactions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Balance: H₂ + O₂ → H₂O",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equation balancing",
                statement: "Adjust coefficients until atoms match.",
              },
            ],
            steps: [
              {
                reasoning: "O unbalanced — need 2 H₂O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then H unbalanced — need 2 H₂.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "2H₂ + O₂ → 2H₂O.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2H₂ + O₂ → 2H₂O",
            commonErrors: ["Formulas changed.", "Atoms not counted."],
          },
        },
        {
          id: "esc10-u2-reactions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify the reaction type: Fe + CuSO₄ → FeSO₄ + Cu",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Displacement",
                statement:
                  "More reactive element displaces less reactive from compound.",
              },
            ],
            steps: [
              {
                reasoning: "Type identified: displacement.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Iron more reactive than copper.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Copper displaced from solution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Coherent identification.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Displacement — iron (more reactive) displaces copper from copper sulfate.",
            commonErrors: ["Wrong type.", "Reactivity not explained."],
          },
        },
        {
          id: "esc10-u2-reactions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Methane burns: CH₄ + O₂ → CO₂ + H₂O",
          parts: [
            { label: "a", prompt: "Balance the equation.", marks: 3 },
            { label: "b", prompt: "Identify the reaction type.", marks: 2 },
            {
              label: "c",
              prompt: "Suggest two observations during combustion.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Balancing + identification",
                statement: "CH₄ + 2O₂ → CO₂ + 2H₂O; combustion.",
              },
            ],
            steps: [
              {
                reasoning: "(a) CH₄ + 2O₂ → CO₂ + 2H₂O.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Atoms balanced both sides.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Combustion — fuel + oxygen.",
                marks: 2,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning:
                  "(c) Two observations: flame, heat, water condensation, CO₂.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
              {
                reasoning: "(c) Valid observations.",
                marks: 1,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) CH₄+2O₂→CO₂+2H₂O (b) combustion (c) flame/heat/condensation",
            commonErrors: ["Unbalanced.", "Wrong type."],
          },
        },
      ],
    },
    {
      id: "esc10-u2-rates",
      title: "Rates of Reaction",
      skill: "Explain collision theory and factors affecting reaction rate.",
      lesson: {
        sections: [
          {
            heading: "Collision theory",
            body: "Reactions need particles to **collide with sufficient energy** (activation energy) and correct orientation. More collisions per second = faster rate. Factors increasing collision frequency/energy: **concentration** (more particles per volume), **pressure** (gases — more collisions), **temperature** (faster particles = more energetic collisions), **surface area** (powdered vs lump — more contact), **catalyst** (lowers activation energy).\n\n**Measuring rate**: mass loss (gas escape), volume of gas produced, precipitate appearance, colour change — all tracked over time.",
          },
          {
            heading: "Catalysts and applications",
            body: "**Catalysts** provide alternative pathway with lower activation energy — more collisions succeed. Enzymes are biological catalysts (specific, work at body temp). Industrial: Haber process (iron), catalytic converters (platinum/palladium/rhodium — convert CO/NOx to less harmful gases).\n\n**Rate vs yield**: faster rate ≠ more product — equilibrium reactions reach same yield eventually. Catalysts don't change yield, only speed.",
          },
        ],
        keyFormulas: [
          {
            name: "Rate factors",
            statement:
              "Concentration, pressure, temperature, surface area, catalyst.",
          },
          {
            name: "Collision theory",
            statement:
              "Collisions need sufficient energy + correct orientation.",
          },
        ],
        workedExample: {
          problem:
            "Why does powdered marble react faster with acid than lump marble?",
          solution:
            "Powdered = larger surface area → more particle collisions per second.",
        },
      },
      questions: [
        {
          id: "esc10-u2-rates-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a catalyst?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A product of reaction" },
              {
                id: "b",
                text: "A substance speeding reaction without being consumed",
              },
              { id: "c", text: "A type of energy" },
              { id: "d", text: "A reactant consumed in reaction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catalyst",
                statement: "Speeds reaction, not consumed, unchanged at end.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst = speed without consumption.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Speeds without being consumed",
            commonErrors: ["Reactant view."],
          },
        },
        {
          id: "esc10-u2-rates-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing temperature speeds up a reaction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature and rate",
                statement:
                  "Hotter particles move faster → more frequent, more energetic collisions.",
              },
            ],
            steps: [
              {
                reasoning: "Particles gain kinetic energy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Move faster → more collisions/sec.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "More energetic → exceed activation energy more often.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Higher temp = faster particles = more frequent + energetic collisions = faster rate.",
            commonErrors: [
              "Only frequency considered.",
              "Energy aspect missed.",
            ],
          },
        },
        {
          id: "esc10-u2-rates-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does a catalyst increase reaction rate without being consumed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst mechanism",
                statement:
                  "Provides lower activation energy pathway; regenerated unchanged.",
              },
            ],
            steps: [
              {
                reasoning: "Offers alternative reaction pathway.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower activation energy needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More collisions succeed → faster rate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Regenerated at end — unchanged.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Catalyst lowers activation energy via alternative pathway; it's regenerated unchanged after reaction.",
            commonErrors: ["Catalyst consumed view.", "No energy mechanism."],
          },
        },
        {
          id: "esc10-u2-rates-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Marble chips react with hydrochloric acid producing CO₂.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe how you would measure the rate of this reaction.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Predict the effect of doubling acid concentration on rate.",
              marks: 3,
            },
            { label: "c", prompt: "Explain using collision theory.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rate measurement + factors",
                statement:
                  "Measure gas volume over time; concentration ↑ = rate ↑.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Collect CO₂ in syringe/inverted measuring cylinder.",
                marks: 2,
                markCode: "AO4",
                part: "a",
              },
              {
                reasoning: "(a) Record volume at time intervals.",
                marks: 1,
                markCode: "AO4",
                part: "a",
              },
              {
                reasoning: "(b) Rate increases (roughly doubles).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) More acid particles per volume.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) More collisions per second → faster rate.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) measure CO₂ volume vs time (b) rate ↑ ~double (c) more collisions",
            commonErrors: [
              "No measurement method.",
              "Yield confused with rate.",
            ],
          },
        },
      ],
    },
  ],
};
