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
              { id: "a", text: "Increasing concentration" },
              { id: "b", text: "Increasing pressure" },
              { id: "c", text: "Increasing temperature" },
              { id: "d", text: "Adding a catalyst" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cipuc-u1-react-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Calculate the pH of 0.0020 mol dm⁻³ hydrochloric acid.",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 2.7, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pH",
                statement: "$pH = -\\log_{10}[H^+]$; HCl is a strong acid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[H^+] = 0.0020$ mol dm$^{-3}$, so $pH = -\\log(0.0020) = 2.70$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.70",
          },
        },
        {
          id: "cipuc-u1-react-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A catalyst is added to a reaction that has reached equilibrium. What is the effect on the position of equilibrium?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "There is no change — it speeds up both directions equally",
              },
              { id: "b", text: "It shifts to the left, favouring reactants" },
              { id: "c", text: "It shifts to the right, favouring products" },
              { id: "d", text: "The reaction stops because the catalyst is consumed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier",
                statement:
                  "A catalyst lowers the activation energy of both forward and reverse reactions equally, so it does not change the equilibrium position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The catalyst speeds up the forward and reverse rates by the same factor, so equilibrium is reached faster but the position is unchanged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "c",
          },
        },
        {
          id: "cipuc-u1-react-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate the pH of 0.10 mol dm⁻³ sodium hydroxide solution.",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 13, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pOH route",
                statement:
                  "$[OH^-] = 0.10$; $pOH = -\\log[OH^-]$; $pH = 14 - pOH$.",
              },
            ],
            steps: [
              {
                reasoning: "NaOH is strong → $[OH^-] = 0.10$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$pOH = -\\log(0.10) = 1.00$, so $pH = 14 - 1.00 = 13.00$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "13.0",
          },
        },
        {
          id: "cipuc-u1-react-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ethanoic acid has $K_a = 1.8 \\times 10^{-5}$ and methanoic acid has $K_a = 1.8 \\times 10^{-4}$. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanoic acid is stronger — it has the smaller $K_a$" },
              { id: "b", text: "Methanoic acid is stronger — it has the larger $K_a$" },
              { id: "c", text: "They are equally strong" },
              { id: "d", text: "Strength cannot be compared from $K_a$ values" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Acid strength",
                statement:
                  "$K_a$ measures acid dissociation — a larger $K_a$ means a stronger acid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$1.8 \\times 10^{-4} > 1.8 \\times 10^{-5}$, so methanoic acid dissociates more and is stronger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u1-react-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does increasing the temperature increase the rate of most chemical reactions?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The equilibrium position shifts towards the products",
              },
              {
                id: "b",
                text: "The activation energy of the reaction is lowered",
              },
              {
                id: "c",
                text: "The concentration of reactant particles increases",
              },
              {
                id: "d",
                text: "Particles have more kinetic energy, so a greater proportion exceed the activation energy",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collision theory",
                statement:
                  "Higher temperature gives particles more kinetic energy; more collisions exceed $E_a$ per second.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Temperature does not change $E_a$ or concentration — it increases the fraction of collisions with sufficient energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u1-react-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "The pH of an aqueous solution is 4.00. Calculate the hydrogen ion concentration, $[H^+]$, in mol dm⁻³.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "[H+]",
                answer: 0.0001,
                tolerance: 0.00002,
                unit: "mol dm⁻³",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pH",
                statement: "$[H^+] = 10^{-pH}$.",
              },
            ],
            steps: [
              {
                reasoning: "$[H^+] = 10^{-4.00}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[H^+] = 1.0 \\times 10^{-4}$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1.0 \\times 10^{-4}$ mol dm⁻³",
          },
        },
        {
          id: "cipuc-u1-react-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair of substances forms a buffer solution when dissolved together in water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium hydroxide and water" },
              {
                id: "b",
                text: "Ethanoic acid and sodium ethanoate",
              },
              { id: "c", text: "Hydrochloric acid and sodium chloride" },
              { id: "d", text: "Sulfuric acid and sodium sulfate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Buffer",
                statement:
                  "A buffer is a weak acid plus its conjugate base salt (or weak base plus its salt).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ethanoic acid (weak acid) + sodium ethanoate (its salt) is the classic buffer pair; the other options are strong acid/base or neutral combinations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "b",
          },
        },
        {
          id: "cipuc-u1-react-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ethanoic acid has $K_a = 1.8 \\times 10^{-5}$. Calculate the hydrogen ion concentration in 0.10 mol dm⁻³ ethanoic acid, assuming $[H^+] \\ll c$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "[H+]",
                answer: 0.00134,
                tolerance: 0.0002,
                unit: "mol dm⁻³",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak acid",
                statement:
                  "$[H^+] \\approx \\sqrt{K_a \\times c}$ when dissociation is small.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For a weak acid, $[H^+] \\approx \\sqrt{K_a \\times c}$ (the approximation is valid since $K_a \\ll c$).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$[H^+] \\approx \\sqrt{1.8 \\times 10^{-5} \\times 0.10} = \\sqrt{1.8 \\times 10^{-6}}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[H^+] \\approx 1.34 \\times 10^{-3}$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1.34 \\times 10^{-3}$ mol dm⁻³",
          },
        },
        {
          id: "cipuc-u1-react-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For the equilibrium N₂O₄(g) ⇌ 2NO₂(g), what happens to the position of equilibrium when the gas mixture is compressed to half its original volume at constant temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The equilibrium constant Kc increases" },
              { id: "b", text: "It shifts left, towards N₂O₄" },
              { id: "c", text: "There is no change in position" },
              { id: "d", text: "It shifts right, towards NO₂" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier",
                statement:
                  "Increasing pressure favours the side with fewer moles of gas; only temperature changes K.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compression doubles pressure; the left side has 1 mol gas vs 2 mol on the right, so the system shifts left towards N₂O₄. Kc is unchanged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u1-react-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For an endothermic reaction at equilibrium, which change will increase the value of the equilibrium constant K?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the pressure" },
              { id: "b", text: "Increasing the temperature" },
              { id: "c", text: "Adding a catalyst" },
              { id: "d", text: "Increasing the concentration of a reactant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equilibrium constant",
                statement:
                  "Only a change in temperature changes the value of K; concentration and pressure changes shift position only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For an endothermic reaction, raising temperature shifts equilibrium right (towards products), so K increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a",
          },
        },
        {
          id: "cipuc-u1-react-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "25.0 cm³ of 0.100 mol dm⁻³ hydrochloric acid is diluted with water to a final volume of 250 cm³. Calculate the pH of the diluted solution.",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 2, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dilution",
                statement:
                  "$c_1V_1 = c_2V_2$; $[H^+]$ equals the diluted acid concentration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$c_2 = (0.100 \\times 25.0)/250 = 0.0100$ mol dm$^{-3}$, so $[H^+] = 0.0100$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH = -\\log(0.0100) = 2.00$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2.00",
          },
        },
        {
          id: "cipuc-u1-react-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), $\\Delta H < 0$, explain the effect of increasing the temperature on (a) the position of equilibrium and (b) the value of the equilibrium constant Kc.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier and K",
                statement:
                  "Temperature shifts equilibrium in the endothermic direction; K changes only with temperature.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The reaction is exothermic, so increasing temperature favours the endothermic (reverse) direction → equilibrium shifts left, producing less NH₃.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Although both forward and reverse rates increase, the reverse rate increases more, so the net shift is left.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Kc decreases because the reaction quotient at the new equilibrium is smaller — only temperature changes K.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Summary: higher temperature → less NH₃ at equilibrium and a smaller Kc, even though the reaction reaches equilibrium faster.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shift left, less NH₃, Kc decreases.",
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
