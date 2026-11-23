import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "chem10-u9-lesson-9-2",
  code: "9-2",
  title: "Acids, Bases, and pH",
  goal: "I CAN describe acid-base properties, calculate pH, and predict neutralization reactions.",
  standards: [
    "HS-PS1-8",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    { term: "Acid", definition: "Proton (H⁺) donor; pH < 7." },
    { term: "Base", definition: "Proton acceptor or OH⁻ producer; pH > 7." },
    { term: "pH", definition: "-log[H⁺]; scale 0-14." },
    { term: "Neutralization", definition: "Acid + base → salt + water." },
    { term: "Strong acid", definition: "Fully dissociates (HCl, H₂SO₄)." },
    { term: "Weak acid", definition: "Partially dissociates (CH₃COOH)." },
    { term: "Indicator", definition: "Substance changing color with pH." },
    { term: "Titration", definition: "Measuring concentration via reaction." },
  ],
  concepts: [
    {
      id: "chem10-u9-acidbase-basics",
      title: "Acid-base properties",
      skill: "Describe properties of acids and bases and pH scale.",
      lesson: {
        sections: [
          {
            heading: "Acids",
            body: "- Produce H⁺ ions in water.\n- Sour taste, turn litmus red.\n- React with metals → H₂ gas.\n- Examples: HCl, H₂SO₄, CH₃COOH, citric acid.",
          },
          {
            heading: "Bases",
            body: "- Produce OH⁻ ions in water.\n- Bitter taste, slippery feel, turn litmus blue.\n- Examples: NaOH, KOH, NH₃, soap.",
          },
          {
            heading: "pH scale",
            body: "pH = −log[H⁺]\n- pH 0-6: acidic\n- pH 7: neutral\n- pH 8-14: basic\nEach unit = 10× change in [H⁺].",
          },
        ],
        keyFormulas: [
          { name: "Acid", statement: "H⁺ donor, pH < 7" },
          { name: "Base", statement: "OH⁻ producer, pH > 7" },
          { name: "pH", statement: "$-\\log[H^+]$" },
        ],
        workedExample: {
          problem: "What's the pH of 0.001 M HCl?",
          solution: "pH = −log(0.001) = 3.",
        },
      },
      questions: [
        {
          id: "chem10-u9-abbasics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the pH of a neutral solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0" },
              { id: "b", text: "7" },
              { id: "c", text: "14" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH scale", statement: "7 = neutral." },
            ],
            steps: [
              {
                reasoning: "pH 7 = neutral (pure water).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 7",
            commonErrors: ["Thinking 0 or 14."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u9-abbasics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What happens when an acid reacts with a base?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Neutralization",
                statement: "Acid + base → salt + water.",
              },
            ],
            steps: [
              { reasoning: "H⁺ + OH⁻ → H₂O.", marks: 1, markCode: "M" },
              {
                reasoning: "Salt formed (e.g., NaCl).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "pH moves toward neutral.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Salt + water; pH → neutral.",
            commonErrors: ["Not knowing products."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u9-abbasics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate pH of 0.01 M HCl.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH", statement: "$pH = -\\log[H^+]$" },
            ],
            steps: [
              {
                reasoning: "[H⁺] = 0.01 M (strong acid fully dissociates).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$pH = -\\log(0.01)$.", marks: 1, markCode: "M" },
              { reasoning: "$= -(-2) = 2$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: pH = 2.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "pH = 2.",
            commonErrors: ["Wrong log calculation."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u9-abbasics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare 0.1 M HCl and 0.1 M CH₃COOH.",
          parts: [
            { label: "a", prompt: "Strong vs weak?", marks: 2 },
            { label: "b", prompt: "pH of each?", marks: 4 },
            { label: "c", prompt: "Why different?", marks: 2 },
            { label: "d", prompt: "Same concentration → same pH?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Strong vs weak",
                statement: "Strong fully dissociates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HCl strong (fully dissociates); CH₃COOH weak (partial).",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "HCl: [H⁺]=0.1 → pH=1.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "CH₃COOH: [H⁺]<0.1 → pH>1 (partial dissociation).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Different [H⁺] → different pH.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "No — weak acid has less H⁺ → higher pH.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) strong/weak (b) pH 1 vs >1 (c) dissociation (d) no.",
            commonErrors: ["Assuming same pH."],
            examinerNote: "2+4+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u9-titration",
      title: "Titration calculations",
      skill: "Calculate unknown concentrations from titration data.",
      lesson: {
        sections: [
          {
            heading: "Titration setup",
            body: "Unknown solution (analyte) in flask + indicator.\nKnown solution (titrant) in burette.\n\nAt endpoint: moles acid = moles base (for 1:1).",
          },
          {
            heading: "Calculations",
            body: "$M_1V_1 = M_2V_2$ for 1:1 reactions.\n\nFor non-1:1: use mole ratio from equation.",
          },
        ],
        keyFormulas: [
          { name: "Titration", statement: "$M_1V_1 = M_2V_2$ (1:1)" },
          { name: "Moles", statement: "$n = MV$" },
          { name: "Endpoint", statement: "Indicator color change" },
        ],
        workedExample: {
          problem:
            "25.0 mL 0.10 M NaOH titrated with 0.20 M HCl. Volume needed?",
          solution: "$0.10 \\times 25.0 = 0.20 \\times V$ → V = 12.5 mL.",
        },
      },
      questions: [
        {
          id: "chem10-u9-titration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the endpoint in titration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start of reaction" },
              { id: "b", text: "Indicator color change" },
              { id: "c", text: "Equivalence point" },
              { id: "d", text: "End of experiment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Endpoint",
                statement: "Indicator color change.",
              },
            ],
            steps: [
              {
                reasoning: "Endpoint = observable color change.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Indicator color change",
            commonErrors: ["Confusing with equivalence point."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u9-titration-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "20.0 mL of 0.15 M HCl is titrated with 0.30 M NaOH. What volume of NaOH is needed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Titration",
                statement: "$M_1V_1 = M_2V_2$",
              },
            ],
            steps: [
              {
                reasoning: "$0.15 \\times 20.0 = 0.30 \\times V$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$V = 3.0/0.30 = 10.0$ mL.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 10.0 mL.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10.0 mL.",
            commonErrors: ["Wrong formula direction."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u9-titration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "25.0 mL of vinegar (acetic acid) needs 18.5 mL of 0.100 M NaOH. Calculate vinegar molarity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Titration",
                statement: "$M_1V_1 = M_2V_2$",
              },
            ],
            steps: [
              {
                reasoning: "$M_{acid} \\times 25.0 = 0.100 \\times 18.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$M_{acid} = 1.85/25.0 = 0.074$ M.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 0.074 M.", marks: 1, markCode: "M" },
              {
                reasoning: "1:1 ratio assumed (monoprotic acid).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "0.074 M acetic acid.",
            commonErrors: ["Wrong volume assignment."],
            examinerNote: "M3, R1.",
          },
        },
        {
          id: "chem10-u9-titration-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "H₂SO₄ (diprotic) titrated with NaOH. 20.0 mL acid needs 30.0 mL of 0.100 M NaOH.",
          parts: [
            { label: "a", prompt: "Balanced equation?", marks: 2 },
            { label: "b", prompt: "Mole ratio?", marks: 2 },
            { label: "c", prompt: "Moles NaOH used?", marks: 2 },
            { label: "d", prompt: "Moles H₂SO₄?", marks: 2 },
            { label: "e", prompt: "Acid molarity?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Diprotic acid",
                statement: "2 NaOH per H₂SO₄.",
              },
            ],
            steps: [
              {
                reasoning: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Ratio 1:2 (acid:base).",
                marks: 2,
                markCode: "B",
                part: "b",
              },
              {
                reasoning: "$n_{NaOH} = 0.100 \\times 0.0300 = 0.00300$ mol.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$n_{H_2SO_4} = 0.00300/2 = 0.00150$ mol.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "$M = 0.00150/0.0200 = 0.075$ M.",
                marks: 1,
                markCode: "M",
                part: "e",
              },
              {
                reasoning: "Answer: 0.075 M.",
                marks: 1,
                markCode: "A",
                part: "e",
              },
            ],
            finalAnswer:
              "(a) 2NaOH (b) 1:2 (c) 0.003 mol (d) 0.0015 mol (e) 0.075 M.",
            commonErrors: ["Using 1:1 for diprotic."],
            examinerNote: "2+2+2+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u9-buffers",
      title: "Buffers and pH control",
      skill: "Explain buffer action and calculate buffer pH.",
      lesson: {
        sections: [
          {
            heading: "Buffer components",
            body: "Buffer = weak acid + conjugate base (or weak base + conjugate acid).\n\n- Resists pH change when acid/base added.\n- Henderson-Hasselbalch: $pH = pK_a + \\log([base]/[acid])$.",
          },
          {
            heading: "Buffer action",
            body: "Add acid → base component neutralizes.\nAdd base → acid component neutralizes.\n\nBest buffering when [acid] ≈ [base] (pH ≈ pKa).",
          },
        ],
        keyFormulas: [
          { name: "Buffer", statement: "Weak acid + conjugate base" },
          {
            name: "Henderson-Hasselbalch",
            statement: "$pH = pK_a + \\log([B]/[A])$",
          },
          { name: "Optimal buffer", statement: "[acid] ≈ [base]" },
        ],
        workedExample: {
          problem:
            "Buffer with 0.1 M acetic acid (pKa=4.76) and 0.1 M acetate. pH?",
          solution: "pH = 4.76 + log(1) = 4.76.",
        },
      },
      questions: [
        {
          id: "chem10-u9-buffer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the components of an acidic buffer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strong acid + strong base" },
              { id: "b", text: "Weak acid + conjugate base" },
              { id: "c", text: "Strong base + weak acid" },
              { id: "d", text: "Two strong acids" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acidic buffer",
                statement: "Weak acid + conjugate base.",
              },
            ],
            steps: [
              {
                reasoning: "Acidic buffer = weak acid + its conjugate base.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Weak acid + conjugate base",
            commonErrors: ["Using strong acid."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u9-buffer-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a buffer resist pH change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Buffer action",
                statement: "Neutralizes added acid/base.",
              },
            ],
            steps: [
              {
                reasoning: "Added acid → conjugate base neutralizes.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Added base → weak acid neutralizes.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "pH stays relatively stable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Acid/base components neutralize additions.",
            commonErrors: ["Not explaining mechanism."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u9-buffer-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Buffer has pKa = 4.76. What's pH when [acid]=[base]?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Henderson-Hasselbalch",
                statement: "$pH = pK_a + \\log(1) = pK_a$",
              },
            ],
            steps: [
              {
                reasoning: "When [acid]=[base], ratio = 1.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\log(1) = 0$.", marks: 1, markCode: "M" },
              { reasoning: "$pH = pK_a = 4.76$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: pH = pKa.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "pH = 4.76.",
            commonErrors: ["Wrong formula use."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u9-buffer-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Blood buffer: H₂CO₃/HCO₃⁻ maintains pH ~7.4 (pKa₁ ≈ 6.1).",
          parts: [
            {
              label: "a",
              prompt: "Why is this an effective buffer?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "What happens when CO₂ increases?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How does hyperventilation affect pH?",
              marks: 2,
            },
            { label: "d", prompt: "Why can't strong acids buffer?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Blood buffer",
                statement: "Weak acid/base pair.",
              },
            ],
            steps: [
              {
                reasoning: "Weak acid (H₂CO₃) + conjugate base (HCO₃⁻).",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "pKa close to blood pH → effective buffering.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "More CO₂ → more H₂CO₃ → shifts equilibrium → pH drops slightly.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Hyperventilation → less CO₂ → pH rises (respiratory alkalosis).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Strong acids fully dissociate → can't act as buffer.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) weak pair+pKa close (b) pH drops (c) pH rises (d) strong can't buffer.",
            commonErrors: ["Not linking CO₂ to buffer."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
