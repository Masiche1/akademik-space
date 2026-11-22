import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "esc11-u2-lesson-2-1",
  code: "2-1",
  title: "Quantitative Chemistry: The Mole",
  goal: "I CAN use the mole concept for calculations involving masses, solutions and gases.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Chemistry (Y11)"],
  vocabulary: [
    {
      term: "Mole",
      definition:
        "Amount of substance — 6.02×10²³ particles (Avogadro's number).",
    },
    {
      term: "Molar mass",
      definition: "Mass of one mole in grams — from relative atomic mass.",
    },
    {
      term: "Concentration",
      definition: "Amount of solute per volume — mol/dm³.",
    },
    {
      term: "Avogadro's hypothesis",
      definition: "Equal gas volumes at same T,P contain equal moles.",
    },
  ],
  concepts: [
    {
      id: "esc11-u2-mole",
      title: "Moles and Calculations",
      skill: "Calculate moles from mass, concentration and gas volumes.",
      lesson: {
        sections: [
          {
            heading: "The mole concept",
            body: "**Mole** bridges particle count and mass: moles = mass ÷ molar mass (Mr). Molar mass = sum of relative atomic masses (H₂O = 18, CO₂ = 44, NaCl = 58.5). **Avogadro's number** = 6.02×10²³ particles per mole — same for atoms, molecules, ions.\n\n**Concentration** = moles ÷ volume (mol/dm³); rearrange for moles or volume. **Titrations**: moles acid = moles base at endpoint (for 1:1 reactions) → find unknown concentration. Indicator shows endpoint.",
          },
          {
            heading: "Gas volumes and formulae",
            body: "**Gas molar volume**: at RTP (room temp & pressure) 1 mole gas = 24 dm³. Moles = volume ÷ 24. Ideal gas: PV = nRT (advanced).\n\n**Empirical formula**: simplest whole-number ratio of atoms — from % composition or masses. **Molecular formula**: actual atom counts — empirical × n where n = Mr ÷ empirical Mr. **Reacting masses**: use balanced equation ratios + Mr to predict masses — e.g., 2H₂ + O₂ → 2H₂O means 4g H₂ + 32g O₂ → 36g H₂O.",
          },
        ],
        keyFormulas: [
          { name: "Moles", statement: "n = mass ÷ Mr; concentration = n ÷ V." },
          { name: "Gas volume", statement: "At RTP, 1 mol gas = 24 dm³." },
        ],
        workedExample: {
          problem:
            "What mass of CO₂ is produced from 12 g of carbon (Mr C=12, CO₂=44)?",
          solution: "C + O₂ → CO₂; 12g C = 1 mol → 1 mol CO₂ = 44 g.",
        },
      },
      questions: [
        {
          id: "esc11-u2-mole-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the molar mass of H₂SO₄ (H=1, S=32, O=16)?",
          response: {
            type: "numeric",
            parts: [{ label: "Molar mass (g/mol)", answer: 98 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Molar mass",
                statement: "Sum of atomic masses: 2(1)+32+4(16)=98.",
              },
            ],
            steps: [
              { reasoning: "2+32+64 = 98 g/mol.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "98 g/mol",
            commonErrors: ["Forgetting ×4 oxygens."],
          },
        },
        {
          id: "esc11-u2-mole-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many moles are in 0.5 dm³ of 2.0 mol/dm³ NaOH?",
          response: { type: "numeric", parts: [{ label: "Moles", answer: 1 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Concentration",
                statement: "n = c × V.",
              },
            ],
            steps: [
              { reasoning: "n = 2.0 × 0.5 = 1 mol.", marks: 3, markCode: "M" },
            ],
            finalAnswer: "1 mol",
            commonErrors: ["Volume in cm³ not converted.", "Inverted formula."],
          },
        },
        {
          id: "esc11-u2-mole-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A gas occupies 48 dm³ at RTP. Calculate moles.",
          response: { type: "numeric", parts: [{ label: "Moles", answer: 2 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gas molar volume",
                statement: "1 mol = 24 dm³ at RTP.",
              },
            ],
            steps: [
              { reasoning: "n = 48 ÷ 24 = 2 mol.", marks: 4, markCode: "M" },
            ],
            finalAnswer: "2 mol",
            commonErrors: ["Used STP volume.", "Not divided by 24."],
          },
        },
        {
          id: "esc11-u2-mole-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "25.0 cm³ of 0.100 mol/dm³ HCl neutralises 20.0 cm³ NaOH.",
          parts: [
            { label: "a", prompt: "Calculate moles of HCl.", marks: 3 },
            {
              label: "b",
              prompt: "Find NaOH concentration (1:1 reaction).",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Titration",
                statement: "n_acid = n_base at endpoint for 1:1.",
              },
            ],
            steps: [
              {
                reasoning: "(a) n = c × V = 0.100 × 0.025 = 0.0025 mol.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) Moles NaOH = 0.0025 (1:1).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) V = 0.020 dm³.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(b) c = n/V = 0.0025/0.020 = 0.125 mol/dm³.",
                marks: 2,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "(a) 0.0025 mol (b) 0.125 mol/dm³",
            commonErrors: ["cm³ not converted.", "Wrong ratio assumed."],
          },
        },
      ],
    },
    {
      id: "esc11-u2-organic",
      title: "Organic Chemistry",
      skill:
        "Describe homologous series, hydrocarbons and key organic reactions.",
      lesson: {
        sections: [
          {
            heading: "Hydrocarbons and series",
            body: "**Hydrocarbons**: contain only C and H. **Alkanes** (single bonds, CₙH₂ₙ₊₂): methane, ethane, propane — saturated, unreactive, fuels. **Alkenes** (double bond, CₙH₂ₙ): ethene, propene — unsaturated, reactive (test: decolourise bromine water).\n\n**Functional groups**: -OH alcohols (ethanol — fermentation/fermentation), -COOH carboxylic acids (ethanoic acid — vinegar), ester (-COO- — fruity smells), halogenoalkanes. **Polymers**: addition polymers (polyethene — monomers join, no byproduct), condensation polymers (nylon, polyester — join with water loss).",
          },
          {
            heading: "Organic reactions",
            body: "**Cracking**: long alkanes → shorter alkanes + alkenes (heat/catalyst — makes petrol + plastics feedstock). **Combustion**: complete → CO₂ + H₂O; incomplete → CO + soot (carbon). **Addition**: alkenes + Br₂/H₂ across double bond. **Fermentation**: glucose → ethanol + CO₂ (yeast, 30-40°C). **Esterification**: carboxylic acid + alcohol → ester + water.\n\n**Uses**: ethanol fuel/solvent, esters flavourings/fragrances, polymers packaging/textiles. Crude oil → fractional distillation separates by boiling point.",
          },
        ],
        keyFormulas: [
          {
            name: "Alkanes vs alkenes",
            statement:
              "Alkanes CₙH₂ₙ₊₂ saturated; alkenes CₙH₂ₙ unsaturated (C=C).",
          },
          {
            name: "Bromine test",
            statement: "Alkenes decolourise bromine water; alkanes don't.",
          },
        ],
        workedExample: {
          problem: "Ethene (C₂H₄) + bromine water. What happens?",
          solution:
            "Bromine water decolourises — addition across C=C → 1,2-dibromoethane.",
        },
      },
      questions: [
        {
          id: "esc11-u2-organic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the general formula of alkanes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CₙH₂ₙ₊₂" },
              { id: "b", text: "CₙH₂ₙ" },
              { id: "c", text: "CₙH₂ₙ₋₂" },
              { id: "d", text: "CₙHₙ" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Alkanes",
                statement: "Saturated: CₙH₂ₙ₊₂.",
              },
            ],
            steps: [
              { reasoning: "Alkanes = CₙH₂ₙ₊₂.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** CₙH₂ₙ₊₂",
            commonErrors: ["Alkenes formula confused."],
          },
        },
        {
          id: "esc11-u2-organic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does an alkene decolourise bromine water but an alkane doesn't?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bromine test",
                statement: "Alkenes have C=C → addition reaction consumes Br₂.",
              },
            ],
            steps: [
              {
                reasoning: "Alkene has double bond.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Br₂ adds across C=C — consumed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Alkane saturated — no reaction.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Alkene C=C reacts with Br₂ (addition) → orange colour lost; alkane has no double bond → unchanged.",
            commonErrors: ["Colour change wrong direction.", "No mechanism."],
          },
        },
        {
          id: "esc11-u2-organic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cracking is important in the oil industry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cracking",
                statement:
                  "Breaks long alkanes into shorter alkanes + alkenes.",
              },
            ],
            steps: [
              {
                reasoning: "Demand: short chains (petrol) > long.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cracking produces shorter alkanes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Also produces alkenes → polymers/plastics.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Cracking converts surplus long-chain fractions into needed short-chain fuels + alkene feedstock for plastics.",
            commonErrors: ["Only fuel mention.", "No alkene link."],
          },
        },
        {
          id: "esc11-u2-organic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Ethanol can be produced by fermentation or hydration of ethene.",
          parts: [
            {
              label: "a",
              prompt: "Write the equation for fermentation.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Compare the two production methods.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethanol production",
                statement:
                  "Fermentation (renewable, slow) vs hydration (fossil fuel, fast).",
              },
            ],
            steps: [
              {
                reasoning: "(a) C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (yeast).",
                marks: 3,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Fermentation: renewable glucose, slow, dilute.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Hydration: ethene + steam, fast, fossil fuel.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Both yield ethanol; choice depends on cost/sustainability.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) glucose→ethanol+CO₂ (b) fermentation renewable/slow vs hydration fast/fossil",
            commonErrors: ["Wrong equation.", "No comparison."],
          },
        },
      ],
    },
    {
      id: "esc11-u2-analysis",
      title: "Metals, Analysis and Energetics",
      skill:
        "Describe metal reactions, qualitative analysis and energy changes.",
      lesson: {
        sections: [
          {
            heading: "Metal properties and reactions",
            body: "**Reactivity**: K most reactive → Au least. **Extraction**: electrolysis (K-Na-Ca), carbon reduction (Zn-Fe), native/heat (Cu-Ag-Au). **Reactions**: metal + acid → salt + H₂ (above H only); metal + oxygen → oxide; metal carbonate + acid → salt + CO₂ + water.\n\n**Qualitative analysis**: flame tests (Li crimson, Na yellow, K lilac, Ca brick-red, Cu blue-green); precipitation (Cl⁻ + AgNO₃ → white AgCl; SO₄²⁻ + BaCl₂ → white BaSO₄; OH⁻ + Fe³⁺ → brown precipitate).",
          },
          {
            heading: "Energetics and equilibrium",
            body: "**Exothermic**: releases heat (ΔH negative) — combustion, respiration, neutralisation. **Endothermic**: absorbs heat (ΔH positive) — photosynthesis, thermal decomposition. **Energy profile**: activation energy peak; catalysts lower it.\n\n**Bond energies**: breaking bonds absorbs energy, forming releases — net = reaction enthalpy. **Industrial equilibrium**: Haber (N₂+3H₂⇌2NH₃ — compromise temp), Contact (SO₂+½O₂⇌SO₃). Le Chatelier already covered Y10 — apply to industrial conditions.",
          },
        ],
        keyFormulas: [
          {
            name: "Exo/endothermic",
            statement: "Exo releases heat (ΔH<0); endo absorbs (ΔH>0).",
          },
          {
            name: "Flame test",
            statement:
              "Li=crimson, Na=yellow, K=lilac, Ca=brick-red, Cu=blue-green.",
          },
        ],
        workedExample: {
          problem: "A reaction releases 50 kJ heat. Exo or endothermic?",
          solution: "Exothermic — heat released to surroundings (ΔH = −50 kJ).",
        },
      },
      questions: [
        {
          id: "esc11-u2-analysis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What colour flame does sodium produce?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yellow" },
              { id: "b", text: "Crimson" },
              { id: "c", text: "Lilac" },
              { id: "d", text: "Brick-red" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Flame test",
                statement: "Na = yellow flame.",
              },
            ],
            steps: [
              { reasoning: "Sodium → yellow.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Yellow",
            commonErrors: ["Lithium confused — crimson."],
          },
        },
        {
          id: "esc11-u2-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A solution forms a white precipitate with AgNO₃ that dissolves in ammonia. What ion is present?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Halide tests",
                statement:
                  "Cl⁻ + AgNO₃ → white AgCl (soluble in ammonia); Br⁻ → cream; I⁻ → yellow.",
              },
            ],
            steps: [
              { reasoning: "White ppt = AgCl.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Ammonia soluble confirms chloride.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Ion = chloride (Cl⁻).", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Chloride ions (Cl⁻)",
            commonErrors: [
              "Bromide assumed — cream not white.",
              "Sulfate confused.",
            ],
          },
        },
        {
          id: "esc11-u2-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Haber process uses a compromise temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Haber compromise",
                statement:
                  "Exothermic — high T speeds rate but lowers yield; moderate T balances.",
              },
            ],
            steps: [
              {
                reasoning: "Reaction exothermic — heat favours reactants.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "High temp → faster rate but lower equilibrium yield.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Low temp → high yield but too slow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "~450°C compromise + catalyst.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Moderate temp balances rate vs yield — exothermic reaction needs heat for speed but loses yield.",
            commonErrors: ["Max temp assumed.", "No rate-yield tradeoff."],
          },
        },
        {
          id: "esc11-u2-analysis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Copper(II) sulfate solution is tested with sodium hydroxide.",
          parts: [
            {
              label: "a",
              prompt: "Describe the observation and write the ionic equation.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how you'd confirm it's copper.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why is NaOH used rather than NH₃ for this test?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Precipitation",
                statement: "Cu²⁺ + 2OH⁻ → blue Cu(OH)₂ precipitate.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Blue precipitate forms.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Cu²⁺ + 2OH⁻ → Cu(OH)₂.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Blue colour = copper hydroxide.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Confirm with excess NH₃ → deep blue solution.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "(c) NH₃ forms soluble complex — no precipitate.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) blue ppt, Cu²⁺+2OH⁻→Cu(OH)₂ (b) blue colour + NH₃ test (c) NH₃ dissolves it",
            commonErrors: ["Wrong colour.", "No confirmation."],
          },
        },
      ],
    },
  ],
};
