import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "chem10-u9-lesson-9-3",
  code: "9-3",
  title: "Solutions and Colligative Properties",
  goal: "I CAN calculate solution concentrations and explain colligative properties.",
  standards: [
    "HS-PS1-3",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Solution",
      definition: "Homogeneous mixture of solute and solvent.",
    },
    { term: "Solute", definition: "Substance dissolved." },
    { term: "Solvent", definition: "Substance doing the dissolving." },
    { term: "Molality", definition: "Moles solute per kg solvent." },
    {
      term: "Colligative property",
      definition: "Property depending on solute particle number.",
    },
    {
      term: "Boiling point elevation",
      definition: "Increase in bp with solute.",
    },
    {
      term: "Freezing point depression",
      definition: "Decrease in fp with solute.",
    },
    {
      term: "Osmosis",
      definition: "Diffusion of solvent through semipermeable membrane.",
    },
  ],
  concepts: [
    {
      id: "chem10-u9-concentration",
      title: "Solution concentration",
      skill: "Calculate molarity, molality, and dilution.",
      lesson: {
        sections: [
          {
            heading: "Concentration units",
            body: "- **Molarity**: mol solute/L solution.\n- **Molality**: mol solute/kg solvent.\n- **Percent**: mass solute/mass solution × 100.",
          },
          {
            heading: "Dilution",
            body: "$$M_1V_1 = M_2V_2$$\n\nDiluting doesn't change moles — just adds solvent.",
          },
        ],
        keyFormulas: [
          { name: "Molarity", statement: "$M = n/V$" },
          { name: "Molality", statement: "$m = n/kg$ solvent" },
          { name: "Dilution", statement: "$M_1V_1 = M_2V_2$" },
        ],
        workedExample: {
          problem: "How to make 500 mL of 0.10 M from 1.0 M stock?",
          solution:
            "$M_1V_1 = M_2V_2$: $1.0 \\times V_1 = 0.10 \\times 0.500$ → V₁ = 50 mL stock.",
        },
      },
      questions: [
        {
          id: "chem10-u9-conc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is molality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mol per liter solution" },
              { id: "b", text: "Mol per kg solvent" },
              { id: "c", text: "Grams per liter" },
              { id: "d", text: "Percent by mass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Molality",
                statement: "Mol/kg solvent.",
              },
            ],
            steps: [
              {
                reasoning: "Molality = mol solute per kg solvent.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Mol per kg solvent",
            commonErrors: ["Confusing with molarity."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u9-conc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Dilute 100 mL of 0.50 M to 500 mL. New concentration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Dilution",
                statement: "$M_1V_1 = M_2V_2$",
              },
            ],
            steps: [
              {
                reasoning: "$0.50 \\times 0.100 = M_2 \\times 0.500$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$M_2 = 0.050/0.500 = 0.10$ M.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 0.10 M.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.10 M.",
            commonErrors: ["Wrong volume units."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u9-conc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Calculate molality of 5.0 g NaCl in 500 g water (M=58.5).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Molality", statement: "$m = n/kg$" },
            ],
            steps: [
              {
                reasoning: "$n = 5.0/58.5 = 0.0855$ mol.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "kg solvent = 0.500 kg.", marks: 1, markCode: "M" },
              {
                reasoning: "$m = 0.0855/0.500 = 0.171$ mol/kg.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 0.171 m.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.171 m.",
            commonErrors: ["Using grams not kg."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u9-conc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Prepare 250 mL of 0.20 M NaCl solution.",
          parts: [
            { label: "a", prompt: "Moles NaCl needed?", marks: 3 },
            { label: "b", prompt: "Mass NaCl (M=58.5)?", marks: 3 },
            {
              label: "c",
              prompt: "How to prepare from 1.0 M stock?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why molality used for boiling point?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solution prep",
                statement: "$n = MV$, mass = nM",
              },
            ],
            steps: [
              {
                reasoning: "$n = 0.20 \\times 0.250 = 0.050$ mol.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 0.050 mol.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Mass = 0.050 \\times 58.5 = 2.925$ g.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 2.93 g.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "$V_1 = 0.20 \\times 0.250/1.0 = 0.050$ L = 50 mL stock.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Molality uses solvent mass (temperature independent).",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 0.050 mol (b) 2.93 g (c) 50 mL stock (d) temp independent.",
            commonErrors: ["Using mL not L."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u9-colligative",
      title: "Colligative properties",
      skill: "Explain and calculate colligative property changes.",
      lesson: {
        sections: [
          {
            heading: "Colligative properties",
            body: "Depend on NUMBER of solute particles, not identity:\n\n- **Boiling point elevation**: ΔTb = i·Kb·m\n- **Freezing point depression**: ΔTf = i·Kf·m\n- **Osmotic pressure**: Π = i·M·RT\n\n(i = van't Hoff factor)",
          },
          {
            heading: "Applications",
            body: "- Road salt melts ice (fp depression).\n- Antifreeze prevents freezing.\n- Osmosis in cells; reverse osmosis for water purification.",
          },
        ],
        keyFormulas: [
          { name: "Boiling elevation", statement: "$\\Delta T_b = iK_bm$" },
          { name: "Freezing depression", statement: "$\\Delta T_f = iK_fm$" },
          { name: "Osmotic pressure", statement: "$\\Pi = iMRT$" },
        ],
        workedExample: {
          problem: "1 m NaCl solution freezes below 0°C. Why?",
          solution: "NaCl → Na⁺ + Cl⁻ (i=2) → freezing point depression.",
        },
      },
      questions: [
        {
          id: "chem10-u9-colligative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are colligative properties?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Properties depending on solute identity" },
              {
                id: "b",
                text: "Properties depending on solute particle number",
              },
              { id: "c", text: "Chemical properties" },
              { id: "d", text: "Physical appearance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Colligative",
                statement: "Depends on particle number.",
              },
            ],
            steps: [
              {
                reasoning: "Colligative = number of particles matters.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(b)** Properties depending on solute particle number",
            commonErrors: ["Thinking identity matters."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u9-colligative-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does adding salt lower water's freezing point?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Freezing depression",
                statement: "Solute particles interfere with crystallization.",
              },
            ],
            steps: [
              {
                reasoning: "NaCl → Na⁺ + Cl⁻ (2 particles).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Particles interfere with ice crystal formation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Lower temperature needed to freeze → depression.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Solute particles interfere with freezing.",
            commonErrors: ["Not mentioning particles."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "chem10-u9-colligative-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare 0.1 m NaCl vs 0.1 m glucose freezing point depression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "van't Hoff factor",
                statement: "i = particles per formula unit.",
              },
            ],
            steps: [
              { reasoning: "NaCl: i=2 (Na⁺ + Cl⁻).", marks: 1, markCode: "M" },
              {
                reasoning: "Glucose: i=1 (molecular, no dissociation).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NaCl has more particles → greater depression.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "ΔTf(NaCl) = 2×ΔTf(glucose).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "NaCl depresses more (i=2 vs i=1).",
            commonErrors: ["Same depression for both."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u9-colligative-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Reverse osmosis purifies seawater.",
          parts: [
            { label: "a", prompt: "What is osmosis?", marks: 2 },
            { label: "b", prompt: "What is reverse osmosis?", marks: 3 },
            { label: "c", prompt: "Why does it require pressure?", marks: 2 },
            { label: "d", prompt: "Application?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Osmosis",
                statement: "Solvent diffuses through membrane.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Osmosis: solvent moves from low to high solute concentration.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Reverse osmosis: pressure forces solvent from concentrated to dilute.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Applied pressure exceeds osmotic pressure.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Desalination, water purification, medical dialysis.",
                marks: 3,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) solvent diffusion (b) pressure-driven reverse (c) exceed osmotic (d) desalination.",
            commonErrors: ["Same direction as osmosis."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u9-gas-laws",
      title: "Gas laws review",
      skill: "Apply gas laws to calculate P, V, n, T relationships.",
      lesson: {
        sections: [
          {
            heading: "Gas laws",
            body: "- **Boyle's**: PV = constant (T,n constant).\n- **Charles's**: V/T = constant (P,n constant).\n- **Avogadro's**: V/n = constant (P,T constant).\n- **Ideal gas**: PV = nRT.",
          },
          {
            heading: "Applications",
            body: "- Combine laws for non-STP conditions.\n- Use R = 0.0821 L·atm/mol·K.\n- Convert T to Kelvin.",
          },
        ],
        keyFormulas: [
          { name: "Ideal gas", statement: "$PV = nRT$" },
          { name: "Boyle", statement: "$P_1V_1 = P_2V_2$" },
          { name: "Charles", statement: "$V_1/T_1 = V_2/T_2$" },
          { name: "R", statement: "0.0821 L·atm/mol·K" },
        ],
        workedExample: {
          problem: "2 mol gas at 300 K in 10 L. Pressure?",
          solution: "$P = nRT/V = (2)(0.0821)(300)/10 = 4.93$ atm.",
        },
      },
      questions: [
        {
          id: "chem10-u9-gaslaws-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ideal gas law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PV = nRT" },
              { id: "b", text: "P = nRT/V" },
              { id: "c", text: "V = nRT/P" },
              { id: "d", text: "All of the above" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ideal gas", statement: "$PV = nRT$" },
            ],
            steps: [
              {
                reasoning: "All rearrangements equivalent.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** All of the above",
            commonErrors: ["Not recognizing rearrangements."],
            examinerNote: "B1 for (d).",
          },
        },
        {
          id: "chem10-u9-gaslaws-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate P for 1.0 mol gas at 300 K in 20 L.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ideal gas", statement: "$P = nRT/V$" },
            ],
            steps: [
              {
                reasoning: "$P = (1.0)(0.0821)(300)/20$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 24.63/20 = 1.23$ atm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 1.23 atm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.23 atm.",
            commonErrors: ["Wrong T (not Kelvin)."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u9-gaslaws-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Gas at 2.0 atm, 5.0 L, 300 K. Compressed to 2.5 L at same T. New P?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Boyle's law",
                statement: "$P_1V_1 = P_2V_2$",
              },
            ],
            steps: [
              {
                reasoning: "Same T,n → Boyle's law applies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2.0 \\times 5.0 = P_2 \\times 2.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P_2 = 10/2.5 = 4.0$ atm.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 4.0 atm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4.0 atm.",
            commonErrors: ["Wrong law applied."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u9-gaslaws-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "0.50 mol O₂ at 25°C (298 K) in a 15 L container.",
          parts: [
            { label: "a", prompt: "Calculate pressure.", marks: 3 },
            {
              label: "b",
              prompt: "If heated to 50°C (323 K), new P?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "If compressed to 10 L at 298 K, new P?",
              marks: 2,
            },
            { label: "d", prompt: "Why convert T to Kelvin?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ideal gas", statement: "$PV = nRT$" },
            ],
            steps: [
              {
                reasoning:
                  "$P = (0.50)(0.0821)(298)/15 = 12.24/15 = 0.816$ atm.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 0.816 atm.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$P_2 = 0.816 \\times 323/298 = 0.885$ atm.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 0.885 atm.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$P = 0.816 \\times 15/10 = 1.22$ atm.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Kelvin needed for proportional relationships.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 0.816 (b) 0.885 (c) 1.22 atm (d) Kelvin required.",
            commonErrors: ["Using Celsius."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
  ],
};
