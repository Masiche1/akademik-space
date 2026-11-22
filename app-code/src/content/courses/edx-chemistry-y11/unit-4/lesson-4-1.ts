import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ech11-u4-lesson-4-1",
  code: "4-1",
  title: "Quantitative Chemical Analysis",
  goal: "I CAN perform accurate quantitative analysis including titrations and gravimetry.",
  standards: ["Edexcel IGCSE Chemistry 4CH1 — Investigative Skills"],
  vocabulary: [
    {
      term: "Back titration",
      definition: "Titrate excess reagent to determine amount reacted.",
    },
    {
      term: "Gravimetric analysis",
      definition: "Determine amount by weighing precipitate.",
    },
    {
      term: "Standard solution",
      definition: "Solution of known concentration for titration.",
    },
    {
      term: "Percentage purity",
      definition: "Actual vs theoretical content × 100%.",
    },
  ],
  concepts: [
    {
      id: "ech11-u4-quantitative",
      title: "Advanced Titrations and Calculations",
      skill: "Perform back titrations and gravimetric analysis.",
      lesson: {
        sections: [
          {
            heading: "Back titration",
            body: "**Principle**: react excess reagent with known amount, titrate leftover to find how much reacted. **Example**: impure CaCO₃ + excess HCl → leftover HCl titrated with NaOH → moles HCl reacted = initial − leftover → moles CaCO₃.\n\n**Steps**: weigh sample → add excess standard acid → filter if needed → titrate excess acid with standard base → calculate reacted amount → determine purity %.",
          },
          {
            heading: "Gravimetric analysis",
            body: "**Method**: precipitate target ion, filter, wash, dry, weigh. **Example**: sulfate + BaCl₂ → BaSO₄ precipitate → weigh → moles BaSO₄ = moles sulfate. **Advantages**: very accurate, no indicators needed. **Disadvantages**: slow (drying/weighing), possible coprecipitation.\n\n**Calculations**: moles precipitate = mass ÷ Mr → relates to original ion via 1:1 ratio.",
          },
        ],
        keyFormulas: [
          {
            name: "Back titration",
            statement: "Reacted = initial − excess (titrated).",
          },
          {
            name: "Gravimetric",
            statement: "Moles precipitate = moles target ion (1:1).",
          },
        ],
        workedExample: {
          problem:
            "1.0g impure CaCO₃ + excess HCl. Excess HCl needs 25cm³ 0.1M NaOH to neutralise. Find purity.",
          solution:
            "n(NaOH)=0.0025 mol = excess HCl; if initial HCl was 0.005 mol, reacted = 0.0025 mol → 0.25g CaCO₃ = 25% pure.",
        },
      },
      questions: [
        {
          id: "ech11-u4-quantitative-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a back titration used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colorimetry" },
              { id: "b", text: "Direct titration" },
              { id: "c", text: "Measuring excess reagent" },
              { id: "d", text: "Gas analysis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Back titration",
                statement: "Determines amount reacted by titrating excess.",
              },
            ],
            steps: [
              {
                reasoning: "Measures excess reagent.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Measuring excess",
            commonErrors: ["Direct titration confused."],
          },
        },
        {
          id: "ech11-u4-quantitative-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is gravimetric analysis considered accurate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gravimetric accuracy",
                statement: "Direct mass measurement — no subjective endpoint.",
              },
            ],
            steps: [
              {
                reasoning: "Measures mass directly — objective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No indicator/endpoint errors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balances precise to 0.01g.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Direct mass measurement — no subjective endpoint or indicator errors.",
            commonErrors: ["Faster assumed.", "No precision link."],
          },
        },
        {
          id: "ech11-u4-quantitative-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In back titration, initial acid = 0.005 mol, excess acid = 0.002 mol. How much reacted?",
          response: {
            type: "numeric",
            parts: [{ label: "Reacted moles", answer: 0.003 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Back titration",
                statement: "Reacted = initial − excess.",
              },
            ],
            steps: [
              {
                reasoning: "0.005 − 0.002 = 0.003 mol.",
                marks: 4,
                markCode: "M",
              },
            ],
            finalAnswer: "0.003 mol",
            commonErrors: ["Added instead of subtracting."],
          },
        },
        {
          id: "ech11-u4-quantitative-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Impure CaCO₃ sample: 2.0g + excess HCl. Excess HCl titrated: 30.0 cm³ 0.100 mol/dm³ NaOH.",
          parts: [
            { label: "a", prompt: "Calculate moles of excess HCl.", marks: 2 },
            {
              label: "b",
              prompt: "If initial HCl was 0.006 mol, find moles CaCO₃ reacted.",
              marks: 3,
            },
            { label: "c", prompt: "Calculate percentage purity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Back titration calc",
                statement:
                  "Reacted = initial − excess; purity = actual/theoretical × 100.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) n(NaOH) = 0.100 × 0.030 = 0.003 mol = excess HCl.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Reacted = 0.006 − 0.003 = 0.003 mol CaCO₃.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) Mass = 0.003 × 100 = 0.3g.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "(c) Purity = 0.3 ÷ 2.0 × 100 = 15%.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(c) Correct percentage.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 0.003 mol (b) 0.003 mol/0.3g (c) 15% pure",
            commonErrors: ["cm³ not converted.", "Purity formula wrong."],
          },
        },
      ],
    },
    {
      id: "ech11-u4-organic-prac",
      title: "Organic Chemistry Practical Tests",
      skill: "Distinguish organic compounds using chemical tests.",
      lesson: {
        sections: [
          {
            heading: "Hydrocarbon tests",
            body: "**Bromine water test**: alkenes decolourise orange bromine water (addition across C=C); alkanes don't react. **Limewater test**: CO₂ turns limewater milky — combustion products.\n\n**Ethanol test**: burns with blue flame; reacts with sodium → H₂ gas (fizzes). **Ethanoic acid**: reacts with carbonates → CO₂ effervescence; has vinegar smell. **Ester test**: fruity smell when warmed with alcohol.",
          },
          {
            heading: "Functional group tests",
            body: "**Alcohol**: acidified K₂Cr₂O₇ → orange to green (oxidation to aldehyde/acid). **Aldehyde**: Tollens' reagent → silver mirror; Fehling's → brick red precipitate. **Carboxylic acid**: reacts with NaHCO₃ → CO₂ effervescence.\n\n**Distinguishing**: ethanol vs ethanoic acid — carbonate test (acid fizzes, alcohol doesn't); primary vs secondary alcohol — oxidation products differ.",
          },
        ],
        keyFormulas: [
          {
            name: "Bromine test",
            statement: "Alkenes decolourise bromine water; alkanes don't.",
          },
          {
            name: "Functional groups",
            statement: "OH=alcohol, CHO=aldehyde, COOH=acid, COO=ester.",
          },
        ],
        workedExample: {
          problem: "Unknown decolourises bromine water. What type?",
          solution: "Alkene — C=C reacts with Br₂.",
        },
      },
      questions: [
        {
          id: "ech11-u4-organic-prac-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which compound decolourises bromine water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol" },
              { id: "b", text: "Ethene" },
              { id: "c", text: "Methane" },
              { id: "d", text: "Ethanoic acid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Bromine test",
                statement: "Alkenes decolourise bromine water.",
              },
            ],
            steps: [
              {
                reasoning: "Ethene = alkene → decolourises.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Ethene",
            commonErrors: ["Alkane assumed."],
          },
        },
        {
          id: "ech11-u4-organic-prac-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you distinguish ethanol from ethanoic acid?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distinguishing test",
                statement: "Acid + carbonate → CO₂; alcohol doesn't.",
              },
            ],
            steps: [
              { reasoning: "Add NaHCO₃ to each.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Ethanoic acid → effervescence (CO₂).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ethanol → no reaction.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Add NaHCO₃ — ethanoic acid fizzes (CO₂), ethanol doesn't.",
            commonErrors: ["Smell alone.", "No test specified."],
          },
        },
        {
          id: "ech11-u4-organic-prac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the bromine water test works for alkenes but not alkanes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bromine test",
                statement: "C=C adds Br₂; C-C single bond doesn't react.",
              },
            ],
            steps: [
              {
                reasoning: "Alkene has C=C double bond.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Br₂ adds across double bond — consumed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Alkane saturated — no reactive bond.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bromine water stays orange.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Alkene C=C reacts with Br₂ (addition) → orange lost; alkane C-C doesn't react.",
            commonErrors: ["Both react.", "No bond explanation."],
          },
        },
        {
          id: "ech11-u4-organic-prac-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three unknown organic liquids: hexane, hexene, ethanol.",
          parts: [
            {
              label: "a",
              prompt: "Describe a test to identify each.",
              marks: 4,
            },
            { label: "b", prompt: "State expected observations.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Organic identification",
                statement: "Bromine water for alkenes; burning for ethanol.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Bromine water test — hexene decolourises.",
                marks: 2,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning:
                  "(a) Burn test — ethanol burns blue; hydrocarbons orange sooty.",
                marks: 2,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "(b) Hexene: bromine water decolourises.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Hexane: no decolourisation, orange flame.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Ethanol: blue flame, no decolourisation.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Na reaction — ethanol fizzes with Na.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) bromine+burn tests (b) hexene=decolourise, hexane=orange, ethanol=blue+Na fizz",
            commonErrors: ["Single test assumed.", "Observations vague."],
          },
        },
      ],
    },
    {
      id: "ech11-u4-industrial",
      title: "Industrial Chemistry Investigations",
      skill: "Investigate equilibrium, rates and industrial processes.",
      lesson: {
        sections: [
          {
            heading: "Equilibrium experiments",
            body: "**Le Chatelier demonstrations**: cobalt chloride equilibrium (pink↔blue with temperature), Fe³⁺ + SCN⁻ equilibrium (colour with concentration), NO₂/N₂O₄ (brown↔colourless with temperature/pressure).\n\n**Haber process model**: N₂ + 3H₂ ⇌ 2NH₃ — demonstrate pressure/concentration effects on yield. **Contact process**: SO₂ + ½O₂ ⇌ SO₃ — similar principles. Measure yield at different conditions.",
          },
          {
            heading: "Industrial analysis",
            body: "**Fertiliser analysis**: test for nitrate (NaOH+Al→NH₃), phosphate (ammonium molybdate→yellow), potassium (flame test). **Water quality**: pH, dissolved oxygen, nitrate/nitrite levels. **Food additives**: test for preservatives, colourings, sweeteners.\n\n**Safety**: industrial chemicals hazardous — risk assessment, PPE, ventilation. Data: quantitative measurements, comparison to standards.",
          },
        ],
        keyFormulas: [
          {
            name: "Le Chatelier",
            statement:
              "System opposes changes — pressure/concentration/temperature.",
          },
          {
            name: "Equilibrium",
            statement: "Forward = reverse rate — dynamic balance.",
          },
        ],
        workedExample: {
          problem:
            "CoCl₂ equilibrium: pink→blue on heating. What does this show?",
          solution:
            "Endothermic forward reaction — heat shifts toward blue (products).",
        },
      },
      questions: [
        {
          id: "ech11-u4-industrial-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the Haber process produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sulfuric acid" },
              { id: "b", text: "Ammonia" },
              { id: "c", text: "Ethanol" },
              { id: "d", text: "Methanol" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Haber process",
                statement: "N₂ + 3H₂ → 2NH₃ — ammonia production.",
              },
            ],
            steps: [
              { reasoning: "Produces ammonia.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Ammonia",
            commonErrors: ["Contact process confused."],
          },
        },
        {
          id: "ech11-u4-industrial-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a catalyst used in the Haber process if it doesn't change yield?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst in equilibrium",
                statement:
                  "Speeds both directions equally — reaches equilibrium faster.",
              },
            ],
            steps: [
              {
                reasoning: "Lowers activation energy both ways.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reaches equilibrium faster.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Doesn't shift equilibrium position.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Catalyst speeds both directions equally — reaches equilibrium faster, same yield.",
            commonErrors: ["Increases yield assumed.", "No equilibrium link."],
          },
        },
        {
          id: "ech11-u4-industrial-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Haber process uses high pressure despite equilibrium favouring low pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Haber pressure",
                statement: "High pressure increases rate/yield despite cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "4 gas molecules → 2 — high pressure favours products.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Higher pressure = higher yield.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "But expensive equipment needed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Compromise between yield and cost.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "High pressure increases yield (fewer gas molecules) despite equipment cost — industrial compromise.",
            commonErrors: ["Low pressure better.", "No cost link."],
          },
        },
        {
          id: "ech11-u4-industrial-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Investigating Le Chatelier's principle with cobalt chloride equilibrium.",
          parts: [
            {
              label: "a",
              prompt: "Describe the equilibrium and colour change.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Predict effect of heating and cooling.",
              marks: 3,
            },
            { label: "c", prompt: "Explain using Le Chatelier.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CoCl₂ equilibrium",
                statement:
                  "Pink (hydrated) ⇌ blue (anhydrous) — temperature dependent.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Pink [Co(H₂O)₆]²⁺ ⇌ blue [CoCl₄]²⁻ + water.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Colour change shows equilibrium shift.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Heating → blue (endothermic direction); cooling → pink.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Correct predictions.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) System opposes temperature change — endothermic absorbs heat.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) pink⇌blue equilibrium (b) heat→blue, cool→pink (c) endothermic absorbs heat",
            commonErrors: ["Wrong direction.", "No Le Chatelier."],
          },
        },
      ],
    },
  ],
};
