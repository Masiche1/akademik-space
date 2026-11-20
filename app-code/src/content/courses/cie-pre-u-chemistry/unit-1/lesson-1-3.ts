import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cipuc-u1-lesson-1-3",
  code: "1-3",
  title: "Kinetics, Equilibria and Acids and Bases",
  goal: "I CAN apply rate equations, Le Chatelier's principle and pH calculations at Pre-U standard.",
  standards: [
    "Cambridge Pre-U Chemistry 9791",
    "Physical chemistry: reactions",
  ],
  vocabulary: [
    {
      term: "Rate of reaction",
      definition:
        "Change in concentration of reactant/product per unit time — affected by concentration, temperature, surface area, catalyst.",
    },
    {
      term: "Activation energy",
      definition:
        "Minimum energy for reaction — lowered by catalysts via alternative pathway.",
    },
    {
      term: "Dynamic equilibrium",
      definition:
        "Forward and reverse rates equal — concentrations constant but reactions still occurring.",
    },
    {
      term: "Le Chatelier's principle",
      definition:
        "System at equilibrium opposes the imposed change — shift to reduce the stress.",
    },
    {
      term: "pH",
      definition:
        "$pH = -\\log_{10}[H^+]$ — strong acids fully dissociate; weak acids partially.",
    },
    {
      term: "pKa",
      definition:
        "$pK_a = -\\log_{10}K_a$ — smaller pKa = stronger acid; buffer capacity centred near pKa.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u1-s1-reactions",
      title: "Rates, equilibria and acid–base chemistry",
      skill:
        "Explain rate factors, predict equilibrium shifts and calculate pH.",
      lesson: {
        sections: [
          {
            heading: "Reaction rates and activation energy",
            body: "Rate increases with: higher concentration/pressure (more frequent collisions), higher temperature (faster particles, more exceed Ea — the effect is disproportionate: ~10 °C doubles rate), larger surface area, and catalysts (provide alternative pathway with lower Ea — not consumed). Collision theory explains all factors. Rate = k[A]^m[B]^n for elementary steps; overall order = m + n. For zero-order, rate is independent of concentration; first-order rate ∝ [A]; second-order rate ∝ [A]².",
          },
          {
            heading: "Equilibrium and Le Chatelier",
            body: "At dynamic equilibrium, forward and reverse rates are equal — concentrations stay constant but molecules still react. Le Chatelier: (1) increase concentration of reactant → shift right (more product); (2) increase pressure (fewer gas moles side favoured); (3) increase temperature → shift in endothermic direction; (4) catalyst → speeds both directions equally, no shift in position. Kc = [products]/[reactants] for concentration equilibrium; Kp for gases. Only temperature changes K's value — concentration/pressure changes shift position but not K.",
          },
          {
            heading: "Acids, bases and pH",
            body: "Strong acids (HCl, H₂SO₄ first proton) fully dissociate; weak acids (CH₃COOH) partially — Ka = [H⁺][A⁻]/[HA]. pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14 at 25 °C. For strong acid: [H⁺] = concentration. For weak acid: [H⁺] ≈ √(Ka × c). Buffers resist pH change — made from weak acid + its salt (or weak base + salt); Henderson–Hasselbalch: pH = pKa + log([A⁻]/[HA]). Titration curves: strong-strong steep at pH 7; weak-strong equivalence above 7.",
          },
        ],
        keyFormulas: [
          {
            name: "pH",
            statement: "$pH = -\\log_{10}[H^+]$; $pH + pOH = 14$",
          },
          {
            name: "Weak acid",
            statement:
              "$[H^+] \\approx \\sqrt{K_a \\times c}$; $K_a = \\frac{[H^+][A^-]}{[HA]}$",
          },
          {
            name: "Le Chatelier",
            statement: "System opposes imposed change — only T changes K",
          },
        ],
        workedExample: {
          problem: "Calculate the pH of 0.001 mol dm⁻³ HCl.",
          solution:
            "HCl is strong → [H⁺] = 0.001 = 10⁻³ → pH = −log(10⁻³) = 3.0.",
        },
      },
      questions: [
        {
          id: "cipuc-u1-react-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change would NOT increase the rate of a reaction between two solutions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing temperature" },
              { id: "b", text: "Adding a catalyst" },
              { id: "c", text: "Increasing pressure" },
              { id: "d", text: "Increasing concentration" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rate factors",
                statement:
                  "Pressure affects gas-phase reactions only — not reactions in solution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pressure only matters for gases; solutions are incompressible — concentration already captures the effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipuc-u1-react-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "For N₂ + 3H₂ ⇌ 2NH₃ (exothermic), predict the effect of: (a) increasing pressure; (b) increasing temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier",
                statement:
                  "System shifts to oppose the change; temperature favours the endothermic direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Pressure increase favours fewer gas moles: 4 mol gas → 2 mol gas, so shift right → more NH₃.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Temperature increase favours endothermic direction (reverse) → less NH₃, though rate increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) more NH₃; (b) less NH₃ but faster.",
          },
        },
        {
          id: "cipuc-u1-react-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Calculate the pH of 0.050 mol dm⁻³ NaOH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pOH route",
                statement:
                  "$[OH^-] = 0.050$; $pOH = -\\log[OH^-]$; $pH = 14 - pOH$.",
              },
            ],
            steps: [
              {
                reasoning: "NaOH is strong → [OH⁻] = 0.050 mol dm⁻³.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "pOH = −log(0.050) = 1.30.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "pH = 14 − 1.30 = 12.7.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "pH ≈ 12.7",
          },
        },
        {
          id: "cipuc-u1-react-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A buffer contains 0.10 mol dm⁻³ ethanoic acid (Ka = 1.8 × 10⁻⁵) and 0.20 mol dm⁻³ sodium ethanoate. Calculate its pH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Henderson–Hasselbalch",
                statement:
                  "$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$; $pK_a = -\\log K_a$.",
              },
            ],
            steps: [
              {
                reasoning: "pKa = −log(1.8 × 10⁻⁵) = 4.74.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ratio [A⁻]/[HA] = 0.20/0.10 = 2.0 → log(2.0) = 0.30.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "pH = 4.74 + 0.30 = 5.04.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Buffer pH sits near pKa and resists small additions of acid or base.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "pH ≈ 5.04",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipuc-u1-reactions-notes",
      title: "Kinetics, equilibria and acids — revision notes",
      summary: "Rate factors, Le Chatelier, pH and buffers.",
      sections: [
        {
          heading: "Key skills",
          body: "For equilibrium questions always state which direction the shift goes AND why (fewer moles, endothermic, etc.). For pH, identify strong vs weak first — the calculation route differs.",
        },
        {
          heading: "Exam tips",
          body: "Catalysts do NOT shift equilibrium — they speed both directions equally. Only temperature changes K. Know the seven strong acids and common weak ones.",
        },
      ],
    },
  ],
};
