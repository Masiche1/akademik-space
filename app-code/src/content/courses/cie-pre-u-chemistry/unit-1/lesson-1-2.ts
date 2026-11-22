import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cipuc-u1-lesson-1-2",
  code: "1-2",
  title: "Stoichiometry, States and Energetics",
  goal: "I CAN perform mole calculations, balance equations and apply enthalpy concepts at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Chemistry 9791",
    "Physical chemistry: stoichiometry",
  ],
  vocabulary: [
    {
      term: "Mole",
      definition:
        "Amount of substance containing 6.02 × 10²³ particles — bridges mass and particle count.",
    },
    {
      term: "Limiting reagent",
      definition:
        "Reactant completely consumed first — determines maximum product formed.",
    },
    {
      term: "Enthalpy change",
      definition:
        "Heat energy change at constant pressure — ΔH = H(products) − H(reactants).",
    },
    {
      term: "Exothermic",
      definition:
        "ΔH < 0 — releases energy to surroundings (temperature rises).",
    },
    {
      term: "Endothermic",
      definition:
        "ΔH > 0 — absorbs energy from surroundings (temperature falls).",
    },
    {
      term: "Hess's law",
      definition:
        "Enthalpy change is path-independent — ΔH depends only on initial and final states.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u1-s1-stoich",
      title: "Moles, equations and enthalpy",
      skill:
        "Balance equations, do mole/enthalpy calculations and apply Hess's law.",
      lesson: {
        sections: [
          {
            heading: "The mole and stoichiometry",
            body: "One mole contains $6.02 \\times 10^{23}$ particles (Avogadro constant). Key relationships: $n = m/M_r$, $n = V/24$ dm³ for gases at RTP, $PV = nRT$ for ideal gases. In balanced equations, mole ratios come directly from coefficients — e.g. $2H_2 + O_2 \\rightarrow 2H_2O$ means 2 mol H₂ : 1 mol O₂ : 2 mol H₂O. The **limiting reagent** is found by comparing available moles to required ratio; product yield is based on it. Percentage yield = (actual/theoretical) × 100; atom economy = (mass of desired product/mass of all products) × 100.",
          },
          {
            heading: "States and enthalpy",
            body: "Standard enthalpy changes: **ΔHf°** — forming 1 mol compound from elements in standard states; **ΔHc°** — complete combustion of 1 mol in excess O₂; **ΔHneut** — neutralisation of 1 mol H⁺ by 1 mol OH⁻ (always ≈ −57 kJ mol⁻¹). Exothermic reactions have negative ΔH — energy released often breaks/form bonds: breaking bonds is endothermic, forming bonds is exothermic; net ΔH = bonds broken − bonds formed. Enthalpy profile diagrams show the energy pathway — activation energy is the peak above reactants.",
          },
          {
            heading: "Hess's law and cycles",
            body: "Hess's law: ΔH for a reaction is the same regardless of route — enables calculation via cycles: ΔH(target) = ΣΔH(steps along path). Standard application: ΔHf values let you compute ΔH = ΣΔHf(products) − ΣΔHf(reactants). Bond enthalpy calculations: ΔH ≈ Σ(bonds broken) − Σ(bonds formed). Calorimetry measures q = mcΔT, then ΔH = q/n. Always convert units: kJ → J where needed, dm³ ↔ cm³ (÷1000), °C ↔ K (for gas laws, +273).",
          },
        ],
        keyFormulas: [
          {
            name: "Moles",
            statement:
              "$n = \\frac{m}{M_r} = \\frac{V}{24\\ \\text{dm}^3} = \\frac{PV}{RT}$",
          },
          {
            name: "Enthalpy from formation",
            statement:
              "$\\Delta H = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})$",
          },
          {
            name: "Calorimetry",
            statement: "$q = mc\\Delta T$; $\\Delta H = \\frac{q}{n}$",
          },
        ],
        workedExample: {
          problem:
            "What mass of water is produced when 2.0 g of hydrogen burns completely in oxygen? (H₂ + ½O₂ → H₂O)",
          solution:
            "$n(H_2) = 2.0/2.0 = 1.0$ mol → $n(H_2O) = 1.0$ mol → $m = 1.0 \\times 18 = 18$ g.",
        },
      },
      questions: [
        {
          id: "cipuc-u1-stoich-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many moles are in 8.0 g of methane, CH₄? (A_r: C=12, H=1)",
          response: {
            type: "numeric",
            parts: [{ label: "Moles", answer: 0.5, unit: "mol" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles from mass",
                statement: "$n = m/M_r$; $M_r(CH_4) = 16$.",
              },
            ],
            steps: [
              {
                reasoning: "$n = 8.0/16 = 0.50$ mol.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.50 mol",
          },
        },
        {
          id: "cipuc-u1-stoich-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Balance the equation: C₃H₈ + O₂ → CO₂ + H₂O.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Balancing",
                statement: "Balance C first, then H, then O last.",
              },
            ],
            steps: [
              {
                reasoning: "3 C → 3 CO₂; 8 H → 4 H₂O.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "O needed: 6+4=10 → 5 O₂. Equation: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
          },
        },
        {
          id: "cipuc-u1-stoich-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "0.50 mol of Mg reacts with excess HCl: Mg + 2HCl → MgCl₂ + H₂. Calculate the volume of H₂ produced at RTP (24 dm³/mol).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gas volume",
                statement: "$V = n \\times 24$ dm³ at RTP.",
              },
            ],
            steps: [
              {
                reasoning: "Mole ratio Mg : H₂ = 1 : 1 → n(H₂) = 0.50 mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "V = n × 24 dm³/mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "V = 0.50 × 24 = 12 dm³.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "12 dm³",
          },
        },
        {
          id: "cipuc-u1-stoich-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a calorimetry experiment, 100 cm³ of water warms from 20.0 °C to 28.5 °C when 0.10 g of ethanol burns. Calculate ΔHc of ethanol in kJ mol⁻¹. (c = 4.18 J g⁻¹ °C⁻¹, M_r ethanol = 46)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$q = mc\\Delta T$; $\\Delta H = q/n$.",
              },
            ],
            steps: [
              {
                reasoning: "q = mcΔT = 100 × 4.18 × 8.5 = 3553 J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "n(ethanol) = 0.10/46 = 0.00217 mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ΔH = q/n = 3553/0.00217 ≈ 1.64 × 10⁶ J mol⁻¹ = 1640 kJ mol⁻¹.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Combustion is exothermic → ΔHc ≈ −1640 kJ mol⁻¹ (accept magnitude with sign explained).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "≈ −1640 kJ mol⁻¹",
          },
        },
        {
          id: "cipuc-u1-stoich-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression gives the amount in moles, $n$, of a gas of volume $V$ dm³ measured at RTP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n = 24/V$" },
              { id: "b", text: "$n = V/24$" },
              { id: "c", text: "$n = 24V$" },
              { id: "d", text: "$n = V - 24$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Gas at RTP",
                statement: "At RTP, $1$ mol of gas occupies $24$ dm³.",
              },
            ],
            steps: [
              {
                reasoning: "$V = 24n$, so rearranging gives $n = V/24$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $n = V/24$",
          },
        },
        {
          id: "cipuc-u1-stoich-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate the amount in moles of O₂ in 4.8 g. ($M_r(O_2)=32$)",
          response: {
            type: "numeric",
            parts: [{ label: "Amount", answer: 0.15, unit: "mol" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles from mass",
                statement: "$n = m/M_r$",
              },
            ],
            steps: [
              {
                reasoning: "$n = 4.8/32 = 0.15$ mol.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.15 mol",
          },
        },
        {
          id: "cipuc-u1-stoich-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "For 2H₂ + O₂ → 2H₂O, 4.0 mol of H₂ and 1.0 mol of O₂ are mixed. Which reactant is in excess?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are limiting" },
              { id: "b", text: "H₂" },
              { id: "c", text: "O₂" },
              { id: "d", text: "Neither — the ratio is exact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Limiting reagent",
                statement:
                  "Compare available moles with the balanced mole ratio; the reactant that remains is in excess.",
              },
            ],
            steps: [
              {
                reasoning:
                  "4.0 mol H₂ needs 2.0 mol O₂, but only 1.0 mol O₂ is present, so H₂ remains in excess.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** H₂",
          },
        },
        {
          id: "cipuc-u1-stoich-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "For CaCO₃ → CaO + CO₂, calculate (a) the mass of 0.25 mol CaCO₃ and (b) the volume of CO₂ produced at RTP. ($M_r(CaCO_3)=100$)",
          response: {
            type: "numeric",
            parts: [
              { label: "Mass of CaCO₃", answer: 25, unit: "g" },
              { label: "Volume of CO₂", answer: 6, unit: "dm³" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Moles, mass and gas volume",
                statement: "$m=nM_r$; at RTP $V=24n$ dm³.",
              },
            ],
            steps: [
              {
                reasoning: "$m = 0.25 \\times 100 = 25$ g.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n(CO_2)=0.25$ mol, so $V=0.25 \\times 24 = 6$ dm³.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25 g; 6 dm³",
          },
        },
        {
          id: "cipuc-u1-stoich-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which expression gives the percentage yield of a reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "(actual mass + theoretical mass) × 100" },
              { id: "b", text: "(theoretical mass − actual mass) × 100" },
              { id: "c", text: "(theoretical mass ÷ actual mass) × 100" },
              { id: "d", text: "(actual mass ÷ theoretical mass) × 100" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage yield",
                statement:
                  "Percentage yield compares the actual product with the theoretical maximum.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Percentage yield = actual yield / theoretical yield × 100%, so actual is divided by theoretical.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** (actual mass ÷ theoretical mass) × 100",
          },
        },
        {
          id: "cipuc-u1-stoich-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about the standard enthalpy change of combustion of methane is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is zero because combustion is a physical change" },
              { id: "b", text: "It is negative because energy is released to the surroundings" },
              { id: "c", text: "It depends on the mass of methane burned" },
              { id: "d", text: "It is positive because energy is absorbed from the surroundings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enthalpy of combustion",
                statement:
                  "Complete combustion of 1 mol in excess oxygen is exothermic, so ΔHc is negative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Combustion releases energy, so ΔH < 0 and the surroundings warm up.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** It is negative because energy is released",
          },
        },
        {
          id: "cipuc-u1-stoich-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a calorimetry experiment, 100 cm³ of water warms from 20.0 °C to 26.0 °C when 0.046 g of ethanol burns completely. Calculate ΔHc of ethanol in kJ mol⁻¹. (c = 4.18 J g⁻¹ °C⁻¹, $M_r$ ethanol = 46)",
          response: {
            type: "numeric",
            parts: [{ label: "ΔHc", answer: -2508, unit: "kJ mol⁻¹" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Calorimetry",
                statement: "$q = mcΔT$; convert J to kJ before dividing by moles.",
              },
            ],
            steps: [
              {
                reasoning: "$q = 100 \\times 4.18 \\times 6.0 = 2508$ J.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$n(ethanol) = 0.046/46 = 0.0010$ mol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$ΔH = -2508/0.0010 = -2508$ kJ mol⁻¹; the negative sign shows energy released.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "-2508 kJ mol⁻¹",
          },
        },
        {
          id: "cipuc-u1-stoich-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In the equation ΔH = ΣΔHf(products) − ΣΔHf(reactants), why is ΔHf° of an element in its standard state defined as zero?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elements always have positive enthalpies of formation" },
              { id: "b", text: "Standard states are only used for gases" },
              { id: "c", text: "Elements never participate in chemical reactions" },
              { id: "d", text: "Elements in standard states are the reference level for formation enthalpies" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standard enthalpy of formation",
                statement:
                  "ΔHf° is measured relative to the elements in their standard states, which are assigned zero.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formation enthalpies compare compounds with their constituent elements in standard states, so those elements provide the zero reference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** They are the reference level",
          },
        },
        {
          id: "cipuc-u1-stoich-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the standard state of bromine at 298 K?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aqueous solution" },
              { id: "b", text: "Solid" },
              { id: "c", text: "Liquid" },
              { id: "d", text: "Gas" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standard state",
                statement:
                  "The most stable form of a substance at 298 K and 100 kPa; bromine is liquid under these conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Bromine is a red-brown liquid at room temperature and pressure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Liquid",
          },
        },
        {
          id: "cipuc-u1-stoich-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An ideal gas occupies 2.0 dm³ at 101 kPa and 298 K. Calculate n using $PV = nRT$ with $R = 8.31$ J K⁻¹ mol⁻¹.",
          response: {
            type: "numeric",
            parts: [{ label: "Amount", answer: 0.0816, unit: "mol" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ideal gas law",
                statement: "$PV = nRT$; use $P$ in Pa and $V$ in m³.",
              },
            ],
            steps: [
              {
                reasoning: "$P = 101000$ Pa and $V = 0.0020$ m³.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$n = (101000 \\times 0.0020)/(8.31 \\times 298) = 0.0816$ mol.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "0.0816 mol",
          },
        },
        {
          id: "cipuc-u1-stoich-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "For H₂ + Cl₂ → 2HCl, bond enthalpies are H–H = 436, Cl–Cl = 243 and H–Cl = 431 kJ mol⁻¹. Which calculation gives ΔH for the reaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 × 431 − 436 − 243" },
              { id: "b", text: "436 + 243 − 2 × 431" },
              { id: "c", text: "436 − 243 − 2 × 431" },
              { id: "d", text: "436 + 243 + 2 × 431" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Bond enthalpy cycle",
                statement:
                  "ΔH ≈ Σ bonds broken − Σ bonds formed; two H–Cl bonds are formed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Break one H–H and one Cl–Cl, form two H–Cl: ΔH = 436 + 243 − 2(431).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** 436 + 243 − 2 × 431",
          },
        },
        {
          id: "cipuc-u1-stoich-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use the data below to calculate ΔH for CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l). ΔHf° values: CH₄(g) = −74.8, CO₂(g) = −393.5, H₂O(l) = −285.8 kJ mol⁻¹.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Enthalpy from formation",
                statement:
                  "$\\Delta H = \\sum \\Delta H_f^\\circ(\\text{products}) - \\sum \\Delta H_f^\\circ(\\text{reactants})$; elements in standard states have $\\Delta H_f^\\circ = 0$.",
              },
            ],
            steps: [
              {
                reasoning: "O₂(g) is an element in its standard state, so its ΔHf° contribution is zero.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ΣΔHf°(products) = −393.5 + 2(−285.8) = −965.1 kJ mol⁻¹.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ΣΔHf°(reactants) = −74.8 + 0 = −74.8 kJ mol⁻¹.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ΔH = −965.1 − (−74.8) = −890.3 kJ mol⁻¹, so combustion of methane is exothermic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "−890.3 kJ mol⁻¹",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipuc-u1-stoich-notes",
      title: "Stoichiometry and energetics — revision notes",
      summary: "Mole calculations, balancing, enthalpy, Hess's law.",
      sections: [
        {
          heading: "Key skills",
          body: "Always convert to moles first. For calorimetry: q = mcΔT then divide by moles — check significant figures and unit conversions (J→kJ, cm³→g for water).",
        },
        {
          heading: "Exam tips",
          body: "Learn ΔHf° and ΔHc° definitions — exam questions test whether you know the standard states. Hess's law cycles: sum enthalpies along the path you choose.",
        },
      ],
    },
  ],
};
