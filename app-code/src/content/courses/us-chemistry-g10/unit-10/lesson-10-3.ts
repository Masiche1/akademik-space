import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "chem10-u10-lesson-10-3",
  code: "10-3",
  title: "Integrated Chemistry Review",
  goal: "I CAN solve multi-concept chemistry problems integrating periodic trends, bonding, stoichiometry, and thermochemistry.",
  standards: [
    "HS-PS1-1",
    "HS-PS1-2",
    "HS-PS1-3",
    "HS-PS1-4",
    "HS-PS1-5",
    "HS-PS1-6",
    "HS-PS1-7",
    "HS-PS1-8",
    "SEP: Engaging in Argument from Evidence",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    {
      term: "Integrated problem",
      definition: "Requires multiple concepts to solve.",
    },
    {
      term: "System model",
      definition: "Representation of components and interactions.",
    },
    {
      term: "Evidence-based reasoning",
      definition: "Using data to support conclusions.",
    },
    {
      term: "Chemical reasoning",
      definition: "Applying principles to predict outcomes.",
    },
  ],
  concepts: [
    {
      id: "chem10-u10-review-atomic",
      title: "Atomic structure and periodicity review",
      skill: "Solve problems combining atomic structure and periodic trends.",
      lesson: {
        sections: [
          {
            heading: "Key concepts",
            body: "- Electron configuration determines position.\n- Periodic trends: radius ↓ across, ↑ down; IE ↑ across, ↓ down; EN ↑ across, ↓ down.\n- Isotopes: same protons, different neutrons.",
          },
          {
            heading: "Integration",
            body: "Atomic structure → electron config → periodic position → chemical properties → bonding → reactions.",
          },
        ],
        keyFormulas: [
          { name: "Periodic trends", statement: "Radius/IE/EN patterns" },
          { name: "Electron config", statement: "Determines position" },
        ],
        workedExample: {
          problem: "Rank Na, Mg, Al by atomic radius and explain.",
          solution: "Na > Mg > Al — radius decreases across period 3.",
        },
      },
      questions: [
        {
          id: "chem10-u10-rev-atomic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines an element's position in the periodic table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atomic mass" },
              { id: "b", text: "Electron configuration" },
              { id: "c", text: "Neutron count" },
              { id: "d", text: "Density" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Periodic position",
                statement: "Electron config determines.",
              },
            ],
            steps: [
              {
                reasoning: "Config → shells (period) + valence (group).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Electron configuration",
            commonErrors: ["Atomic mass."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-rev-atomic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rank Cl, Br, I by atomic radius.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Atomic radius",
                statement: "Increases down group.",
              },
            ],
            steps: [
              { reasoning: "Cl smallest (period 3).", marks: 1, markCode: "M" },
              { reasoning: "Br middle (period 4).", marks: 1, markCode: "M" },
              { reasoning: "I largest (period 5).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cl < Br < I.",
            commonErrors: ["Reversed order."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-rev-atomic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does Na lose electrons more easily than Mg?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ionization",
                statement: "Na has lower IE.",
              },
            ],
            steps: [
              {
                reasoning: "Na: 1 valence e⁻ → easier to lose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mg: 2 valence e⁻ → harder to lose both.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Na lower IE → more reactive metal.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Na → Na⁺ easily; Mg → Mg²⁺ less easily.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fewer valence electrons → easier to lose.",
            commonErrors: ["Same ease for both."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u10-rev-atomic-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Elements X (group 1, period 3) and Y (group 17, period 3).",
          parts: [
            { label: "a", prompt: "Identify X and Y.", marks: 2 },
            { label: "b", prompt: "Compare atomic radii.", marks: 2 },
            { label: "c", prompt: "Compare electronegativity.", marks: 2 },
            { label: "d", prompt: "Predict compound formed.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Periodic trends",
                statement: "X=Na, Y=Cl.",
              },
            ],
            steps: [
              {
                reasoning:
                  "X = Na (group 1, period 3); Y = Cl (group 17, period 3).",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Na larger than Cl (lower Z_eff).",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Cl more electronegative (attracts electrons).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Na loses 1e⁻ → Na⁺; Cl gains 1e⁻ → Cl⁻.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Ionic compound NaCl.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) Na/Cl (b) Na>Cl (c) Cl>Na (d) NaCl.",
            commonErrors: ["Wrong elements."],
            examinerNote: "2+2+2+4 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-review-reaction",
      title: "Reaction and energy review",
      skill:
        "Solve problems combining stoichiometry, kinetics, and thermochemistry.",
      lesson: {
        sections: [
          {
            heading: "Key concepts",
            body: "- Stoichiometry: mole ratios from balanced equations.\n- Rates: collision theory, catalysts, rate laws.\n- Thermochemistry: ΔH, calorimetry, Hess's law.\n- Equilibrium: Le Chatelier, K.",
          },
          {
            heading: "Integration",
            body: "Reaction → stoichiometry → rate → equilibrium → energy.",
          },
        ],
        keyFormulas: [
          { name: "Stoichiometry", statement: "Mole ratios" },
          { name: "Rate law", statement: "$Rate = k[A]^m[B]^n$" },
          { name: "ΔH", statement: "Bond energies or calorimetry" },
        ],
        workedExample: {
          problem:
            "2H₂ + O₂ → 2H₂O (ΔH=−572 kJ). How much energy from 4 mol H₂?",
          solution: "4 mol H₂ → 2×(−572)/2 = −572 kJ.",
        },
      },
      questions: [
        {
          id: "chem10-u10-rev-react-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 2H₂ + O₂ → 2H₂O, what's the mole ratio H₂:O₂?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1:1" },
              { id: "b", text: "2:1" },
              { id: "c", text: "1:2" },
              { id: "d", text: "2:2" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Mole ratio",
                statement: "2 H₂ : 1 O₂.",
              },
            ],
            steps: [
              {
                reasoning: "Coefficients give ratio.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 2:1",
            commonErrors: ["Wrong ratio."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-rev-react-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does increasing temperature affect exothermic equilibrium?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Le Chatelier",
                statement: "Exothermic + T↑ → shift left.",
              },
            ],
            steps: [
              {
                reasoning: "Exothermic: heat is product.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Increase T → shift left (toward reactants).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Less product at higher T.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shifts left → less product.",
            commonErrors: ["Shift right."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u10-rev-react-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For A + B ⇌ C (ΔH<0), what happens if: (a) catalyst added, (b) [A] increased, (c) T decreased?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Le Chatelier",
                statement: "Each stress has specific effect.",
              },
            ],
            steps: [
              {
                reasoning: "Catalyst: faster both directions, no shift.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "[A] increased: shift right (more product).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "T decreased (exothermic): shift right.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "(a) no shift (b) right (c) right.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) no shift (b) right (c) right.",
            commonErrors: ["Catalyst shifts equilibrium."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u10-rev-react-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "2SO₂ + O₂ ⇌ 2SO₃ (ΔH=−198 kJ). At equilibrium, [SO₂]=0.1, [O₂]=0.1, [SO₃]=0.4 M.",
          parts: [
            { label: "a", prompt: "Write K expression.", marks: 2 },
            { label: "b", prompt: "Calculate K.", marks: 3 },
            { label: "c", prompt: "Effect of adding O₂?", marks: 2 },
            { label: "d", prompt: "Effect of increasing T?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "K",
                statement: "$K = [SO_3]^2/([SO_2]^2[O_2])$",
              },
            ],
            steps: [
              {
                reasoning: "$K = [SO_3]^2 / ([SO_2]^2[O_2])$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "$K = 0.4^2/(0.1^2 \\times 0.1) = 0.16/0.001 = 160$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: K = 160.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Add O₂ → shift right (more SO₃).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Increase T (exothermic) → shift left (less SO₃).",
                marks: 3,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer: "(a) K expr (b) 160 (c) right (d) left.",
            commonErrors: ["Wrong K expression."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-review-physical",
      title: "Physical chemistry review",
      skill: "Solve problems combining gases, solutions, and thermochemistry.",
      lesson: {
        sections: [
          {
            heading: "Key concepts",
            body: "- Gas laws: PV=nRT, Boyle, Charles.\n- Solutions: molarity, molality, colligative.\n- Thermochemistry: ΔH, calorimetry, Hess.\n- Acids/bases: pH, titration, buffers.",
          },
        ],
        keyFormulas: [
          { name: "Ideal gas", statement: "$PV = nRT$" },
          { name: "pH", statement: "$-\\log[H^+]$" },
          { name: "Calorimetry", statement: "$q = mc\\Delta T$" },
        ],
        workedExample: {
          problem: "0.5 mol gas at 300K in 20L. P? Then pH of 0.01M HCl?",
          solution: "P = 0.61 atm; pH = 2.",
        },
      },
      questions: [
        {
          id: "chem10-u10-rev-phys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the ideal gas law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "PV = nRT" },
              { id: "b", text: "P = nRT" },
              { id: "c", text: "V = nRT" },
              { id: "d", text: "n = PV/RT" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ideal gas", statement: "$PV = nRT$" },
            ],
            steps: [
              { reasoning: "PV = nRT is the law.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** PV = nRT",
            commonErrors: ["Missing variable."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "chem10-u10-rev-phys-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate pH of 0.001 M HCl.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "pH", statement: "$pH = -\\log[H^+]$" },
            ],
            steps: [
              { reasoning: "[H⁺] = 0.001 M.", marks: 1, markCode: "M" },
              {
                reasoning: "$pH = -\\log(0.001) = 3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: pH = 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "pH = 3.",
            commonErrors: ["Wrong log."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u10-rev-phys-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "100 g water heated from 20°C to 30°C. Calculate q and classify.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$q = mc\\Delta T$",
              },
            ],
            steps: [
              {
                reasoning: "$q = 100 \\times 4.18 \\times 10 = 4180$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 4180 J or 4.18 kJ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Endothermic (heat absorbed).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Heating = endothermic process.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "q = 4.18 kJ, endothermic.",
            commonErrors: ["Wrong classification."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u10-rev-phys-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Integrated: 2.0 mol H₂ + O₂ → 2H₂O at 25°C in 50 L.",
          parts: [
            { label: "a", prompt: "O₂ needed?", marks: 2 },
            { label: "b", prompt: "H₂O produced (mol)?", marks: 2 },
            {
              label: "c",
              prompt: "If ΔH=−572 kJ/mol H₂, energy released?",
              marks: 3,
            },
            { label: "d", prompt: "Exo or endo?", marks: 1 },
            { label: "e", prompt: "pH of resulting solution?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Integrated",
                statement: "Stoich + energy + properties.",
              },
            ],
            steps: [
              {
                reasoning: "1.0 mol O₂ needed (2:1 ratio).",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "2.0 mol H₂O produced.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$2.0 \\times (-572) = -1144$ kJ.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: −1144 kJ.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              { reasoning: "Exothermic.", marks: 1, markCode: "B", part: "d" },
              {
                reasoning: "Neutral (pH 7) — pure water.",
                marks: 2,
                markCode: "A",
                part: "e",
              },
            ],
            finalAnswer: "(a) 1 mol (b) 2 mol (c) −1144 kJ (d) exo (e) pH 7.",
            commonErrors: ["Wrong mole ratio."],
            examinerNote: "2+2+3+1+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-review-organic",
      title: "Organic and biochemistry review",
      skill: "Solve problems combining organic structures and biomolecules.",
      lesson: {
        sections: [
          {
            heading: "Key concepts",
            body: "- Hydrocarbons: alkanes, alkenes, alkynes.\n- Functional groups: -OH, -COOH, -COO-, -NH₂.\n- Isomers: same formula, different structure.\n- Biomolecules: carbs, lipids, proteins, nucleic acids.",
          },
        ],
        keyFormulas: [
          { name: "Hydrocarbons", statement: "Alkane/alkene/alkyne" },
          { name: "Functional groups", statement: "Determine properties" },
          { name: "Biomolecules", statement: "Carbs/lipids/proteins/nucleic" },
        ],
        workedExample: {
          problem: "Identify functional group in CH₃COOCH₃.",
          solution: "Ester (-COO-) — methyl acetate.",
        },
      },
      questions: [
        {
          id: "chem10-u10-rev-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the functional group in CH₃COOH?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alcohol" },
              { id: "b", text: "Carboxylic acid" },
              { id: "c", text: "Ester" },
              { id: "d", text: "Ketone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Functional groups",
                statement: "-COOH = carboxylic acid.",
              },
            ],
            steps: [
              {
                reasoning: "-COOH → carboxylic acid.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Carboxylic acid",
            commonErrors: ["Alcohol."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-rev-org-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Classify: CH₄, C₂H₄, C₂H₂.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Hydrocarbons",
                statement: "Alkane/alkene/alkyne.",
              },
            ],
            steps: [
              { reasoning: "CH₄: alkane.", marks: 1, markCode: "M" },
              { reasoning: "C₂H₄: alkene.", marks: 1, markCode: "M" },
              { reasoning: "C₂H₂: alkyne.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alkane, alkene, alkyne.",
            commonErrors: ["Wrong classification."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "chem10-u10-rev-org-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How many structural isomers does C₅H₁₂ have?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Isomers",
                statement: "Pentane has 3 isomers.",
              },
            ],
            steps: [
              { reasoning: "n-pentane (straight).", marks: 1, markCode: "M" },
              {
                reasoning: "Isopentane (2-methylbutane).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Neopentane (2,2-dimethylpropane).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Total: 3 isomers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 isomers.",
            commonErrors: ["Missing neopentane."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u10-rev-org-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Biomolecules and their roles.",
          parts: [
            { label: "a", prompt: "Monomer of protein?", marks: 2 },
            { label: "b", prompt: "Function of lipid?", marks: 2 },
            { label: "c", prompt: "Monomer of DNA?", marks: 3 },
            { label: "d", prompt: "Why are carbs quick energy?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Biomolecules",
                statement: "Monomers and functions.",
              },
            ],
            steps: [
              { reasoning: "Amino acid.", marks: 2, markCode: "M", part: "a" },
              {
                reasoning: "Energy storage, membranes, insulation.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              { reasoning: "Nucleotide.", marks: 3, markCode: "M", part: "c" },
              {
                reasoning: "Water-soluble → quick absorption/metabolism.",
                marks: 3,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) amino acid (b) storage/membrane (c) nucleotide (d) water-soluble.",
            commonErrors: ["Wrong monomer."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u10-review-capstone",
      title: "Chemistry Capstone Problems",
      skill: "Solve comprehensive problems integrating all chemistry topics.",
      lesson: {
        sections: [
          {
            heading: "Integration strategy",
            body: "1. Identify concepts needed.\n2. Apply principles systematically.\n3. Check units and reasonableness.\n4. Verify with conservation laws.",
          },
          {
            heading: "Topics covered",
            body: "Atomic structure → periodic trends → bonding → stoichiometry → kinetics → equilibrium → thermochemistry → solutions → acids/bases → organic → biochemistry.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Multiple concepts per problem" },
          {
            name: "Verification",
            statement: "Check units, conservation, reasonableness",
          },
        ],
        workedExample: {
          problem: "Complete chemistry problem solving approach.",
          solution: "Identify → apply → verify.",
        },
      },
      questions: [
        {
          id: "chem10-u10-capstone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the first step in solving a chemistry problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Identify concepts needed" },
              { id: "c", text: "Guess answer" },
              { id: "d", text: "Check units" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Problem solving",
                statement: "Identify concepts first.",
              },
            ],
            steps: [
              {
                reasoning: "Identify needed concepts before calculating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Identify concepts needed",
            commonErrors: ["Jumping to calculation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u10-capstone-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is unit checking important in chemistry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Units",
                statement: "Units ensure correct answer.",
              },
            ],
            steps: [
              {
                reasoning: "Units track what quantity is measured.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Wrong units → wrong answer even if numbers right.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Unit analysis catches errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Units ensure dimensional correctness.",
            commonErrors: ["Ignoring units."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u10-capstone-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does conservation of mass help verify answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conservation",
                statement: "Mass conserved in reactions.",
              },
            ],
            steps: [
              {
                reasoning: "Total mass reactants = products.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Check atom counts balance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unbalanced equation → error in stoichiometry.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Verification catches mistakes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Mass conservation verifies stoichiometry.",
            commonErrors: ["Not using as check."],
            examinerNote: "R2, M1, A1.",
          },
        },
        {
          id: "chem10-u10-capstone-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Final integrated problem: CH₄ combustion analysis.",
          parts: [
            { label: "a", prompt: "Balance equation?", marks: 2 },
            { label: "b", prompt: "If 8.0 g CH₄ burns, moles CO₂?", marks: 3 },
            { label: "c", prompt: "Volume CO₂ at STP?", marks: 2 },
            {
              label: "d",
              prompt: "If ΔH=−890 kJ/mol, energy released?",
              marks: 2,
            },
            { label: "e", prompt: "Exo or endo?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Integrated",
                statement: "Stoich + gas + energy.",
              },
            ],
            steps: [
              {
                reasoning: "CH₄ + 2O₂ → CO₂ + 2H₂O.",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "$n_{CH_4} = 8.0/16 = 0.50$ mol → 0.50 mol CO₂.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 0.50 mol.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$V = 0.50 \\times 22.4 = 11.2$ L.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "$0.50 \\times (-890) = -445$ kJ.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: −445 kJ.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
              { reasoning: "Exothermic.", marks: 1, markCode: "B", part: "e" },
            ],
            finalAnswer:
              "(a) balanced (b) 0.50 mol (c) 11.2 L (d) −445 kJ (e) exo.",
            commonErrors: ["Wrong mole ratio."],
            examinerNote: "2+3+2+2+1 = 10.",
          },
        },
      ],
    },
  ],
};
