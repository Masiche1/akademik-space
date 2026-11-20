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
