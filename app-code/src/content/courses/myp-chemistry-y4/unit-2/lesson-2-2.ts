import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypc4-u2-lesson-2-2",
  code: "2-2",
  title: "Acids, Bases and Neutralisation",
  goal: "I CAN describe acid/base properties, indicators, pH scale, neutralisation and salt formation.",
  standards: [
    "MYP Sciences: Matter",
    "Key concept: Change",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Acid", definition: "Substance producing H⁺ ions in water; sour taste, pH < 7, turns blue litmus red." },
    { term: "Base", definition: "Substance producing OH⁻ ions in water; bitter taste, slippery, pH > 7." },
    { term: "Alkali", definition: "Soluble base (e.g. NaOH, KOH) — strong base." },
    { term: "Neutralisation", definition: "Acid + base → salt + water; H⁺ + OH⁻ → H₂O." },
    { term: "pH scale", definition: "0-14 scale measuring acidity; 7 neutral, <7 acid, >7 alkaline." },
    { term: "Indicator", definition: "Substance changing color with pH — litmus, universal indicator, phenolphthalein." },
  ],
  concepts: [
    {
      id: "mypc4-u2-acids",
      title: "Acids and bases",
      skill: "Describe properties of acids and bases, use indicators and pH scale.",
      lesson: {
        sections: [
          {
            heading: "Properties",
            body: "**Acids**: pH<7, turn litmus red, react with metals (H₂), carbonates (CO₂), bases. Examples: HCl, H₂SO₄, HNO₃, citric acid. **Bases**: pH>7, turn litmus blue, slippery feel; soluble = alkali. Examples: NaOH, Ca(OH)₂, ammonia.",
          },
          {
            heading: "pH scale and indicators",
            body: "pH = -log[H⁺]. 0-6 acid (strong→weak), 7 neutral, 8-14 alkaline. **Litmus**: red in acid, blue in alkali. **Universal indicator**: full color spectrum. **Phenolphthalein**: colorless→pink in alkali. **Methyl orange**: red→orange→yellow.",
          },
          {
            heading: "Neutralisation",
            body: "Acid + base → salt + water. Ionic equation: H⁺ + OH⁻ → H₂O. The H⁺ and OH⁻ combine; spectator ions form the salt. Used in antacids, soil treatment, titrations.",
          },
        ],
        keyFormulas: [
          { name: "Acid", statement: "pH<7, H⁺ producer, litmus→red" },
          { name: "Base", statement: "pH>7, OH⁻ producer, litmus→blue" },
          { name: "Neutralisation", statement: "H⁺ + OH⁻ → H₂O; acid+base→salt+water" },
        ],
        workedExample: {
          problem: "What color does universal indicator show at pH 3?",
          solution: "Greenish-yellow/orange — acidic range color.",
        },
      },
      questions: [
        {
          id: "mypc4-u2-acid-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the pH of a neutral solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "0" },
              { id: "c", text: "14" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "7 = neutral; <7 acid; >7 alkaline." },
            ],
            steps: [
              { reasoning: "pH 7 is neutral (pure water).", working: "pH=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 7",
            commonErrors: ["Choosing 0 — that's strongest acid."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-acid-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens when HCl reacts with NaOH?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forms NaCl (salt) and water — neutralisation" },
              { id: "b", text: "Forms hydrogen gas" },
              { id: "c", text: "Forms carbon dioxide" },
              { id: "d", text: "No reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neutralisation", statement: "Acid + base → salt + water." },
            ],
            steps: [
              { reasoning: "HCl + NaOH → NaCl + H₂O.", working: "NaCl+H_2O", marks: 1, markCode: "M" },
              { reasoning: "State products.", working: "\\text{salt+water}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "NaCl + water",
            commonErrors: ["Saying gas is produced — that's acid+metal."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A solution has pH 3. Describe its properties and predict indicator colors.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strongly acidic; turns blue litmus red; universal indicator orange/red" },
              { id: "b", text: "Alkaline; litmus blue" },
              { id: "c", text: "Neutral; litmus purple" },
              { id: "d", text: "Weak acid only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "pH interpretation", statement: "pH<7 = acid; lower = stronger." },
            ],
            steps: [
              { reasoning: "pH 3 = acidic (below 7).", working: "\\text{acid}", marks: 1, markCode: "M" },
              { reasoning: "Litmus turns red; UI shows orange/red.", working: "\\text{indicators}", marks: 1, markCode: "M" },
              { reasoning: "State all properties.", working: "\\text{acidic}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Acidic; litmus red, UI orange/red",
            commonErrors: ["Thinking pH 3 is weak — it's strongly acidic."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Hydrochloric acid reacts with sodium carbonate.",
          parts: [
            { label: "a", prompt: "Write the word equation.", marks: 2 },
            { label: "b", prompt: "Balance the chemical equation.", marks: 3 },
            { label: "c", prompt: "Describe the test for the gas produced.", marks: 2 },
            { label: "d", prompt: "Explain why this is not neutralisation.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Acid-carbonate reaction", statement: "Acid + carbonate → salt + water + CO₂." },
            ],
            steps: [
              { part: "a", reasoning: "Hydrochloric acid + sodium carbonate → sodium chloride + water + carbon dioxide.", working: "\\text{word eq}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All products correct.", working: "CO_2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂.", working: "2HCl+Na_2CO_3\\to2NaCl+H_2O+CO_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Coefficients balance Na and Cl.", working: "\\text{balanced}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", working: "\\text{done}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bubble gas through limewater → turns milky (CaCO₃ precipitate).", working: "\\text{limewater}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Milky = CO₂ present.", working: "\\text{milky}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Produces CO₂ not just salt+water; carbonate not a base in neutralisation sense.", working: "CO_2\\text{ evolved}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) acid+carbonate→salt+water+CO₂ (b) 2HCl+Na₂CO₃→2NaCl+H₂O+CO₂ (c) limewater milky (d) CO₂ evolved",
            commonErrors: ["In (d), calling it neutralisation."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u2-acid-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution with pH below 7 is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Acidic" },
              { id: "b", text: "Alkaline" },
              { id: "c", text: "Neutral" },
              { id: "d", text: "A salt" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH scale", statement: "<7 acid, 7 neutral, >7 alkaline." },
            ],
            steps: [
              { reasoning: "Below 7 = acidic.", working: "pH<7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Acidic",
            commonErrors: ["Reversing the scale."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-acid-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What colour does blue litmus paper turn in an acid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red" },
              { id: "b", text: "Blue" },
              { id: "c", text: "Green" },
              { id: "d", text: "Colourless" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Litmus", statement: "Acid → red; alkali → blue." },
            ],
            steps: [
              { reasoning: "Acids turn litmus red.", working: "\\text{red}", marks: 1, markCode: "M" },
              { reasoning: "State colour.", working: "\\text{litmus}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Red",
            commonErrors: ["Saying blue — that's in alkali."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A solution has pH 9. How many pH units above neutral is it?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "pH scale", statement: "Neutral = 7; difference = pH − 7." },
            ],
            steps: [
              { reasoning: "9 − 7 = 2 units above neutral (alkaline).", working: "9-7=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 9."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc4-u2-acid-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solution A has pH 4 and solution B has pH 6. How many times more acidic is A than B?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "pH scale", statement: "Each pH unit = factor of 10 in H⁺ concentration." },
            ],
            steps: [
              { reasoning: "Difference = 6 − 4 = 2 pH units.", working: "6-4=2", marks: 1, markCode: "M" },
              { reasoning: "10² = 100 times more acidic.", working: "10^2=100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "100 times",
            commonErrors: ["Answering 2 (the pH difference)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the products when an acid reacts with a reactive metal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A salt and hydrogen gas" },
              { id: "b", text: "A salt and water" },
              { id: "c", text: "A salt and carbon dioxide" },
              { id: "d", text: "An oxide and hydrogen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acid reactions", statement: "Acid + metal → salt + H₂." },
            ],
            steps: [
              { reasoning: "Metal displaces hydrogen from acid.", working: "H_2", marks: 1, markCode: "M" },
              { reasoning: "Products: salt + hydrogen.", working: "\\text{salt}+H_2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Salt + hydrogen",
            commonErrors: ["Saying water is produced — that's neutralisation."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "10.0 cm³ of 0.50 mol/dm³ HCl is diluted with water to a final volume of 50.0 cm³. What is the new concentration?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.1, unit: "mol/dm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dilution", statement: "Moles unchanged: c₁V₁ = c₂V₂." },
            ],
            steps: [
              { reasoning: "n = 0.50 × 0.0100 = 0.0050 mol; c₂ = 0.0050/0.0500.", working: "0.0050/0.0500", marks: 1, markCode: "M" },
              { reasoning: "c₂ = 0.10 mol/dm³.", working: "0.10\\text{ mol/dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.10 mol/dm³",
            commonErrors: ["Multiplying concentration by 5 instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is phenolphthalein a good indicator for titrating an acid with an alkali?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It changes sharply from colourless to pink at the endpoint, giving a clear colour change" },
              { id: "b", text: "It is pink in acid" },
              { id: "c", text: "It does not change colour" },
              { id: "d", text: "It is toxic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Indicators", statement: "Phenolphthalein: colourless in acid → pink in alkali." },
            ],
            steps: [
              { reasoning: "Sharp colourless→pink change near neutral pH.", working: "\\text{colourless}\\to\\text{pink}", marks: 1, markCode: "M" },
              { reasoning: "Clear endpoint visible → accurate titration.", working: "\\text{endpoint}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{indicator}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sharp colourless→pink change at endpoint",
            commonErrors: ["Saying it is pink in acid."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 0.10 mol/dm³ acid solution is diluted by adding water so the volume increases tenfold. What is the new concentration?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.01, unit: "mol/dm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dilution", statement: "c₂ = c₁ × V₁/V₂ = c₁/10." },
            ],
            steps: [
              { reasoning: "Volume ×10 → concentration ÷10.", working: "\\div10", marks: 1, markCode: "M" },
              { reasoning: "0.10/10 = 0.010 mol/dm³.", working: "0.010", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "0.01\\text{ mol/dm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.010 mol/dm³",
            commonErrors: ["Multiplying by 10."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many hydrogen ions (H⁺) does one molecule of HCl produce in water?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Acid", statement: "HCl → H⁺ + Cl⁻ in water." },
            ],
            steps: [
              { reasoning: "HCl gives 1 H⁺ per molecule.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1",
            commonErrors: ["Answering 2 (counting Cl)."],
            examinerNote: "B1 for 1.",
          },
        },
        {
          id: "mypc4-u2-acid-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many moles of H⁺ ions are in 0.050 dm³ of 0.20 mol/dm³ HCl?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.01, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "n=cV", statement: "Each HCl gives 1 H⁺ → n(H⁺) = n(HCl)." },
            ],
            steps: [
              { reasoning: "n = 0.20 × 0.050 = 0.010 mol.", working: "0.20\\times0.050=0.010", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "0.01\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.010 mol",
            commonErrors: ["Using 0.050 dm³ as 50 without converting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-acid-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Acids, bases and neutralisation.",
          parts: [
            { label: "a", prompt: "State two properties of acids.", marks: 2 },
            { label: "b", prompt: "Write a word equation for the reaction of sulfuric acid with potassium hydroxide.", marks: 2 },
            { label: "c", prompt: "Write the ionic equation for neutralisation.", marks: 1 },
            { label: "d", prompt: "State the pH of the salt solution formed in (b).", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acid-base chemistry", statement: "Acid + base → salt + water; H⁺ + OH⁻ → H₂O." },
            ],
            steps: [
              { part: "a", reasoning: "pH < 7; turns litmus red (or reacts with metals/carbonates).", working: "\\text{2 props}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two correct properties.", working: "\\text{both}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sulfuric acid + potassium hydroxide → potassium sulfate + water.", working: "\\text{word eq}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Products correct.", working: "K_2SO_4+H_2O", marks: 1, markCode: "A" },
              { part: "c", reasoning: "H⁺ + OH⁻ → H₂O.", working: "H^++OH^-\\to H_2O", marks: 1, markCode: "A" },
              { part: "d", reasoning: "pH ≈ 7 (neutral salt of strong acid + strong base).", working: "pH 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) pH<7, litmus red (b) H₂SO₄+KOH→K₂SO₄+H₂O (c) H⁺+OH⁻→H₂O (d) ~7",
            commonErrors: ["In (b), naming 'potassium sulfuric acid'."],
            examinerNote: "M1 A1 for (a),(b), A1 for (c),(d).",
          },
        },
        {
          id: "mypc4-u2-acid-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three colourless solutions A, B and C give these indicator results: A turns universal indicator green, B turns it orange, C turns it purple.",
          parts: [
            { label: "a", prompt: "State the pH range and nature (acid/neutral/alkali) of each solution.", marks: 3 },
            { label: "b", prompt: "Explain how universal indicator differs from litmus.", marks: 2 },
            { label: "c", prompt: "Write and balance the equation for nitric acid reacting with calcium hydroxide.", marks: 2 },
            { label: "d", prompt: "Predict the pH of the salt solution formed in (c).", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Indicators", statement: "Universal indicator gives colour spectrum across pH range." },
            ],
            steps: [
              { part: "a", reasoning: "A ≈ pH 7 neutral; B ≈ pH 3–4 acidic; C ≈ pH 11–12 alkaline.", working: "\\text{7, acid, alkali}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correct.", working: "\\text{correct}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", working: "\\text{all}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Litmus only distinguishes acid vs alkali; UI shows full pH range via colours.", working: "\\text{spectrum}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct comparison.", working: "\\text{compare}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O.", working: "2HNO_3+Ca(OH)_2\\to Ca(NO_3)_2+2H_2O", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "≈ 7 (neutral salt).", working: "pH 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A neutral, B acid, C alkali (b) UI full range vs litmus 2 colours (c) 2HNO₃+Ca(OH)₂→Ca(NO₃)₂+2H₂O (d) ~7",
            commonErrors: ["In (a), swapping B and C."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
      ],
    },
    {
      id: "mypc4-u2-salts",
      title: "Salts and Titrations",
      skill: "Describe salt formation, titration technique, and salt solubility rules.",
      lesson: {
        sections: [
          {
            heading: "Salt formation",
            body: "Salts form from: acid + metal → salt + H₂; acid + base → salt + water; acid + carbonate → salt + water + CO₂. Salt name: first part from base/metal, second from acid (HCl→chloride, H₂SO₄→sulfate, HNO₃→nitrate).",
          },
          {
            heading: "Titration",
            body: "Accurate neutralisation using burette + pipette. Add acid to alkali with indicator until endpoint (color change). Repeat for concordant results. Calculate concentration: moles acid = moles base (1:1 for monoprotic).",
          },
          {
            heading: "Solubility rules",
            body: "All nitrates soluble; all sodium/potassium/ammonium salts soluble; chlorides soluble except AgCl, PbCl₂; sulfates soluble except BaSO₄, PbSO₄; carbonates insoluble except Na/K/NH₄. Used to identify ions via precipitation.",
          },
        ],
        keyFormulas: [
          { name: "Salt name", statement: "Metal/base + acid anion" },
          { name: "Titration", statement: "Moles acid = moles base at endpoint" },
          { name: "Solubility", statement: "Nitrates all soluble; AgCl insoluble" },
        ],
        workedExample: {
          problem: "What salt forms when H₂SO₄ reacts with KOH?",
          solution: "Potassium sulfate (K₂SO₄) — K⁺ from base, SO₄²⁻ from acid.",
        },
      },
      questions: [
        {
          id: "mypc4-u2-salt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What salt forms when hydrochloric acid reacts with sodium hydroxide?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium chloride (NaCl)" },
              { id: "b", text: "Sodium sulfate" },
              { id: "c", text: "Hydrochloric sodium" },
              { id: "d", text: "Water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Salt naming", statement: "Na⁺ from base + Cl⁻ from HCl → NaCl." },
            ],
            steps: [
              { reasoning: "NaOH + HCl → NaCl + H₂O.", working: "NaCl", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sodium chloride",
            commonErrors: ["Reversing names."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-salt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a titration, what does the endpoint indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exact point where moles of acid equal moles of base" },
              { id: "b", text: "When solution turns blue" },
              { id: "c", text: "When all liquid evaporates" },
              { id: "d", text: "When temperature peaks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Endpoint", statement: "Indicator color change = stoichiometric equivalence." },
            ],
            steps: [
              { reasoning: "Endpoint = acid and base exactly neutralised.", working: "\\text{equivalence}", marks: 1, markCode: "M" },
              { reasoning: "State meaning.", working: "\\text{endpoint}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Exact neutralisation point",
            commonErrors: ["Confusing endpoint with start."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is AgNO₃ solution used to test for chloride ions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cl⁻ + Ag⁺ → AgCl white precipitate (insoluble); other halides give different colors" },
              { id: "b", text: "It makes solution acidic" },
              { id: "c", text: "It dissolves all salts" },
              { id: "d", text: "It produces gas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Precipitation test", statement: "AgCl is white insoluble precipitate — diagnostic for Cl⁻." },
            ],
            steps: [
              { reasoning: "Ag⁺ + Cl⁻ → AgCl(s) white precipitate.", working: "AgCl", marks: 1, markCode: "M" },
              { reasoning: "Insoluble → visible test result.", working: "\\text{precipitate}", marks: 1, markCode: "M" },
              { reasoning: "State the reason.", working: "Cl^-\\text{ test}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Forms white AgCl precipitate",
            commonErrors: ["Saying all halides give same result."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "25.0 cm³ of 0.100 mol/dm³ NaOH is neutralised by HCl.",
          parts: [
            { label: "a", prompt: "Write the balanced equation.", marks: 1 },
            { label: "b", prompt: "Calculate moles of NaOH.", marks: 2 },
            { label: "c", prompt: "If 20.0 cm³ HCl used, calculate its concentration.", marks: 3 },
            { label: "d", prompt: "Suggest why titration is repeated 2-3 times.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Titration calculation", statement: "n = cV; 1:1 mole ratio at endpoint." },
            ],
            steps: [
              { part: "a", reasoning: "NaOH + HCl → NaCl + H₂O.", working: "NaOH+HCl\\to NaCl+H_2O", marks: 1, markCode: "A" },
              { part: "b", reasoning: "n = 0.100 × 0.0250 = 0.00250 mol.", working: "0.0025", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct calculation with units.", working: "\\text{mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Moles HCl = 0.00250 mol (1:1).", working: "0.0025", marks: 1, markCode: "M" },
              { part: "c", reasoning: "c = n/V = 0.00250/0.0200 = 0.125 mol/dm³.", working: "0.125", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct concentration.", working: "0.125\\text{ mol/dm}^3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "To get concordant (consistent) titres and average out errors.", working: "\\text{concordant}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Improves reliability.", working: "\\text{reliability}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) NaOH+HCl→NaCl+H₂O (b) 0.00250 mol (c) 0.125 mol/dm³ (d) concordant results",
            commonErrors: ["In (c), forgetting 1:1 ratio."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypc4-u2-salt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When sulfuric acid reacts with a base, the salt formed contains which anion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sulfate (SO₄²⁻)" },
              { id: "b", text: "Chloride (Cl⁻)" },
              { id: "c", text: "Nitrate (NO₃⁻)" },
              { id: "d", text: "Hydroxide (OH⁻)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Salt naming", statement: "Acid provides the anion: H₂SO₄ → sulfate." },
            ],
            steps: [
              { reasoning: "Sulfate comes from sulfuric acid.", working: "SO_4^{2-}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sulfate",
            commonErrors: ["Choosing chloride — that's from HCl."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypc4-u2-salt-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the products of KOH + HCl?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "KCl + H₂O" },
              { id: "b", text: "KCl + H₂" },
              { id: "c", text: "KClO + H₂O" },
              { id: "d", text: "No reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Neutralisation", statement: "Acid + base → salt + water." },
            ],
            steps: [
              { reasoning: "KOH + HCl → KCl + H₂O.", working: "KCl+H_2O", marks: 1, markCode: "M" },
              { reasoning: "State products.", working: "\\text{salt+water}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "KCl + H₂O",
            commonErrors: ["Producing hydrogen — that's acid+metal."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many moles of NaCl are in 58.5 g of NaCl? (Mr NaCl = 58.5)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1.0, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Moles", statement: "n = mass/Mr = 58.5/58.5 = 1.0." },
            ],
            steps: [
              { reasoning: "n = 58.5/58.5 = 1.0 mol.", working: "1.0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1.0 mol",
            commonErrors: ["Multiplying instead of dividing."],
            examinerNote: "B1 for 1.0 mol.",
          },
        },
        {
          id: "mypc4-u2-salt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂, how many moles of HCl react with 1 mol of Na₂CO₃?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2, unit: "mol" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mole ratio", statement: "Equation shows 2HCl per 1 Na₂CO₃." },
            ],
            steps: [
              { reasoning: "Coefficient 2 on HCl → 2 mol.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "2\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2 mol",
            commonErrors: ["Answering 1."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these salts is INSOLUBLE in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Silver chloride (AgCl)" },
              { id: "b", text: "Sodium chloride (NaCl)" },
              { id: "c", text: "Potassium nitrate (KNO₃)" },
              { id: "d", text: "Ammonium sulfate ((NH₄)₂SO₄)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solubility rules", statement: "All nitrates, Na/K/NH₄ salts soluble; AgCl insoluble." },
            ],
            steps: [
              { reasoning: "AgCl is an exception — insoluble precipitate.", working: "AgCl", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "\\text{insoluble}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AgCl",
            commonErrors: ["Choosing NaCl — very soluble."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a titration, 20.0 cm³ of 0.10 mol/dm³ NaOH is neutralised by HCl. If 25.0 cm³ of HCl is used, what is the HCl concentration?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.08, unit: "mol/dm^3" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Titration", statement: "1:1 mole ratio; c₁V₁ = c₂V₂ for equal moles." },
            ],
            steps: [
              { reasoning: "n(NaOH) = 0.10 × 0.0200 = 0.0020 mol = n(HCl).", working: "0.0020", marks: 1, markCode: "M" },
              { reasoning: "c(HCl) = 0.0020/0.0250 = 0.080 mol/dm³.", working: "0.080", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.080 mol/dm³",
            commonErrors: ["Forgetting cm³→dm³ conversion."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is a titration repeated 2–3 times and the concordant titres averaged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To obtain consistent results and reduce the effect of random errors" },
              { id: "b", text: "To use up more acid" },
              { id: "c", text: "To change the concentration" },
              { id: "d", text: "Because one titration is always wrong" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Titration reliability", statement: "Repeats → concordant titres → reliable average." },
            ],
            steps: [
              { reasoning: "Repeating identifies outliers and improves precision.", working: "\\text{repeat}", marks: 1, markCode: "M" },
              { reasoning: "Averaging concordant results reduces random error.", working: "\\text{average}", marks: 1, markCode: "M" },
              { reasoning: "State reason.", working: "\\text{reliable}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Consistency and reduced error",
            commonErrors: ["Thinking repetition wastes reagents only."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the mass of 0.020 mol of CaCO₃? (Mr CaCO₃ = 100)",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.0, unit: "g" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mass from moles", statement: "mass = n × Mr = 0.020 × 100." },
            ],
            steps: [
              { reasoning: "mass = 0.020 × 100 = 2.0 g.", working: "2.0", marks: 1, markCode: "M" },
              { reasoning: "Check calculation.", working: "\\text{calc}", marks: 1, markCode: "M" },
              { reasoning: "State answer with unit.", working: "2.0\\text{ g}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2.0 g",
            commonErrors: ["Dividing by Mr."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many atoms are in one formula unit of NaCl?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Formula unit", statement: "NaCl = 1 Na + 1 Cl = 2 atoms." },
            ],
            steps: [
              { reasoning: "Na + Cl = 2 atoms.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 1."],
            examinerNote: "B1 for 2.",
          },
        },
        {
          id: "mypc4-u2-salt-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "HNO₃ reacts with KOH. What is the name of the salt formed, and how many moles of salt form per mole of acid?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Salt formation", statement: "HNO₃ + KOH → KNO₃ + H₂O; 1:1 ratio." },
            ],
            steps: [
              { reasoning: "Salt = potassium nitrate; 1 mol KNO₃ per 1 mol HNO₃.", working: "KNO_3,1", marks: 1, markCode: "M" },
              { reasoning: "State answer.", working: "1\\text{ mol}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Potassium nitrate; 1 mol per mol acid",
            commonErrors: ["Naming 'potassium hydrogen nitrate'."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypc4-u2-salt-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Salts and solubility.",
          parts: [
            { label: "a", prompt: "Name the salt formed when nitric acid reacts with sodium hydroxide.", marks: 1 },
            { label: "b", prompt: "Write the balanced equation for this reaction.", marks: 2 },
            { label: "c", prompt: "State the solubility rule for chlorides, including its exceptions.", marks: 2 },
            { label: "d", prompt: "Explain why AgNO₃ is used to test for Cl⁻ ions.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Salt chemistry", statement: "Acid + base → salt + water; solubility rules guide tests." },
            ],
            steps: [
              { part: "a", reasoning: "Sodium nitrate (NaNO₃).", working: "NaNO_3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "HNO₃ + NaOH → NaNO₃ + H₂O.", working: "HNO_3+NaOH\\to NaNO_3+H_2O", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Balanced correctly.", working: "\\text{balanced}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chlorides soluble except AgCl and PbCl₂.", working: "\\text{AgCl, PbCl}_2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both exceptions stated.", working: "\\text{exceptions}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Forms white insoluble AgCl precipitate.", working: "AgCl", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) sodium nitrate (b) HNO₃+NaOH→NaNO₃+H₂O (c) soluble except AgCl,PbCl₂ (d) white precipitate",
            commonErrors: ["In (c), forgetting PbCl₂."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypc4-u2-salt-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "25.0 cm³ of 0.080 mol/dm³ NaOH is titrated with hydrochloric acid.",
          parts: [
            { label: "a", prompt: "Write the balanced equation.", marks: 1 },
            { label: "b", prompt: "Calculate moles of NaOH.", marks: 2 },
            { label: "c", prompt: "If 20.0 cm³ of 0.10 mol/dm³ HCl is used, is the titration accurate? Calculate the expected volume of this HCl needed.", marks: 3 },
            { label: "d", prompt: "State one source of error in a school titration and how to reduce it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Titration", statement: "n=cV; 1:1 ratio; accuracy depends on technique." },
            ],
            steps: [
              { part: "a", reasoning: "NaOH + HCl → NaCl + H₂O.", working: "NaOH+HCl\\to NaCl+H_2O", marks: 1, markCode: "A" },
              { part: "b", reasoning: "n = 0.080 × 0.0250 = 0.0020 mol.", working: "0.0020", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct with units.", working: "\\text{mol}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "n(HCl needed) = 0.0020 mol.", working: "0.0020", marks: 1, markCode: "M" },
              { part: "c", reasoning: "V = n/c = 0.0020/0.10 = 0.020 dm³ = 20.0 cm³.", working: "20.0\\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Yes — 20.0 cm³ used matches expected → accurate.", working: "\\text{yes}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "e.g. overshooting endpoint / parallax reading; reduce by swirling, reading meniscus at eye level, repeating.", working: "\\text{error}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid error and improvement.", working: "\\text{reduce}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) NaOH+HCl→NaCl+H₂O (b) 0.0020 mol (c) yes, 20.0 cm³ expected (d) e.g. parallax",
            commonErrors: ["In (c), forgetting to convert dm³ to cm³."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), M1 A1 for (d).",
          },
        },
      ],
    },
  ],
};
