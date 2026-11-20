import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "chemhl-u4-lesson-4-1",
  code: "4-1",
  title: "The Equilibrium Law",
  goal: "I CAN write Kc and Kp expressions for homogeneous equilibria, use ICE tables to calculate equilibrium concentrations, and explain the effect of changing conditions on the equilibrium constant.",
  standards: ["Paper 1", "Paper 2", "AHL R2"],
  vocabulary: [
    {
      term: "Equilibrium constant ($K_c$)",
      definition:
        "The ratio of product to reactant concentrations (each raised to its stoichiometric coefficient) at equilibrium, for reactions in solution or gas phase.",
    },
    {
      term: "Equilibrium constant ($K_p$)",
      definition:
        "The equilibrium constant expressed in terms of partial pressures for gas-phase reactions.",
    },
    {
      term: "Reaction quotient ($Q$)",
      definition:
        "The same expression as $K_c$ but using concentrations at any point; compared with $K_c$ to predict the direction of reaction.",
    },
    {
      term: "ICE table",
      definition:
        "A table of Initial, Change and Equilibrium concentrations used to solve equilibrium problems algebraically.",
    },
    {
      term: "Homogeneous equilibrium",
      definition:
        "An equilibrium where all species are in the same phase (all gases or all in solution).",
    },
    {
      term: "Le Chatelier's principle",
      definition:
        "If a system at equilibrium is disturbed, it shifts to partially oppose the change; but $K$ itself only changes with temperature.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u4-kc-kp",
      title: "Kc and Kp expressions",
      skill:
        "Write equilibrium constant expressions for reactions, distinguish Kc from Kp, and relate them through the ideal gas law.",
      lesson: {
        sections: [
          {
            heading: "Writing Kc",
            body: "For a general reaction $aA + bB \\rightleftharpoons cC + dD$, the equilibrium constant is $K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$ using equilibrium concentrations. Pure solids and pure liquids are omitted (their 'concentrations' are constant). The value of $K_c$ is constant at a given temperature — it does not change with concentration or pressure, only with temperature.",
          },
          {
            heading: "Kp for gas reactions",
            body: "For gas-phase reactions the equilibrium constant can be written in terms of partial pressures: $K_p = \\frac{p_C^c p_D^d}{p_A^a p_B^b}$. The relationship between $K_p$ and $K_c$ is $K_p = K_c(RT)^{\\Delta n}$ where $\\Delta n$ is the change in moles of gas. For reactions with $\\Delta n = 0$ (e.g. $H_2 + I_2 \\rightleftharpoons 2HI$), $K_p = K_c$.",
          },
          {
            heading: "Reaction quotient",
            body: "The reaction quotient $Q$ has the same form as $K_c$ but uses concentrations at any moment, not just equilibrium. If $Q < K_c$ the reaction proceeds forward; if $Q > K_c$ it proceeds backward; if $Q = K_c$ the system is at equilibrium. This is the quantitative version of Le Chatelier's principle.",
          },
        ],
        keyFormulas: [
          {
            name: "Kc expression",
            statement:
              "$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$ — products over reactants, powers = stoichiometric coefficients.",
          },
          {
            name: "Kp expression",
            statement:
              "$K_p = \\frac{p_C^c p_D^d}{p_A^a p_B^b}$ for gas-phase equilibria.",
          },
          {
            name: "Kp–Kc relation",
            statement:
              "$K_p = K_c(RT)^{\\Delta n}$, $\\Delta n$ = change in moles of gas.",
          },
        ],
        workedExample: {
          problem:
            "For $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, write $K_c$ and $K_p$ expressions and state the relationship.",
          solution:
            "$K_c = \\frac{[NH_3]^2}{[N_2][H_2]^3}$; $K_p = \\frac{p_{NH_3}^2}{p_{N_2}p_{H_2}^3}$; $K_p = K_c(RT)^{-2}$ since $\\Delta n = 2 - 4 = -2$.",
        },
      },
      questions: [
        {
          id: "chemhl-u4-kc-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the reaction $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, the correct $K_c$ expression is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{[SO_3]^2}{[SO_2]^2[O_2]}$" },
              { id: "b", text: "$\\frac{[SO_2]^2[O_2]}{[SO_3]^2}$" },
              { id: "c", text: "$\\frac{[SO_3]}{[SO_2][O_2]}$" },
              { id: "d", text: "$\\frac{[SO_2][O_2]}{[SO_3]}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kc expression",
                statement:
                  "Products over reactants, each raised to its stoichiometric coefficient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Products (SO$_3$) go on top with power 2; reactants (SO$_2$ power 2, O$_2$ power 1) on bottom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{[SO_3]^2}{[SO_2]^2[O_2]}$",
            commonErrors: [
              "Inverting the expression or using coefficients of 1 for all species.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$, $K_p = 50$ at $700$ K. Calculate $K_c$ at the same temperature ($R = 8.31$ J K$^{-1}$ mol$^{-1}$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement: "$K_p = K_c(RT)^{\\Delta n}$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta n = 2 - 2 = 0$, so $K_p = K_c$.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore $K_c = K_p = 50$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No RT calculation needed because $\\Delta n = 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_c = 50$",
            commonErrors: [
              "Applying the RT factor when $\\Delta n = 0$ — it equals 1.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$, $K_p = 0.80$ at $500$ K. Calculate $K_c$ ($R = 8.31$ J K$^{-1}$ mol$^{-1}$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement: "$K_p = K_c(RT)^{\\Delta n}$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta n = (1 + 1) - 1 = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange: $K_c = K_p / (RT)^{\\Delta n}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate $RT$.",
                working: "8.31 \\times 500 = 4155",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $K_c$.",
                working: "0.80 / 4155 = 1.93 \\times 10^{-4}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_c \\approx 1.9 \\times 10^{-4}$",
            commonErrors: [
              "Using $\\Delta n$ with wrong sign — products minus reactants of gas moles.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "For the equilibrium $CO(g) + 2H_2(g) \\rightleftharpoons CH_3OH(g)$, $K_c = 10.5$ dm$^6$ mol$^{-2}$ at $400$ K. A mixture has $[CO] = 0.20$, $[H_2] = 0.40$, $[CH_3OH] = 0.10$ mol dm$^{-3}$.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the reaction quotient $Q$ and state the direction the reaction will proceed.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Write the ICE table setup for this system.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why $K_c$ does not change if more CO is added at constant temperature.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reaction quotient",
                statement:
                  "$Q$ has the same form as $K_c$ but uses current concentrations; $Q < K_c$ → forward, $Q > K_c$ → backward.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Write $Q = [CH_3OH]/([CO][H_2]^2)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Calculate.",
                working: "0.10 / (0.20 \\times 0.40^2) = 0.10 / 0.032 = 3.125",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$Q = 3.1 < K_c = 10.5$ → reaction proceeds forward (right).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "ICE: Initial [CO]=0.20, [H$_2$]=0.40, [CH$_3$OH]=0.10; Change −x, −2x, +x; Equilibrium subtract/add x terms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct stoichiometric ratios in the change row.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$K_c$ depends only on temperature (and the reaction itself).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Adding CO changes concentrations temporarily but the system shifts to restore the same $K_c$ value.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "At the new equilibrium the ratio of concentrations returns to $K_c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $Q = 3.1 < K_c$ → forward. (b) ICE with −x, −2x, +x. (c) $K_c$ is temperature-dependent only; concentrations adjust.",
            commonErrors: [
              "Comparing Q with Kc incorrectly — Q < Kc means forward reaction.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the reaction $N_2O_4(g) \\rightleftharpoons 2NO_2(g)$, the correct $K_c$ expression is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{[NO_2]^2}{[N_2O_4]}$" },
              { id: "b", text: "$\\frac{[N_2O_4]}{[NO_2]^2}$" },
              { id: "c", text: "$\\frac{[NO_2]}{[N_2O_4]}$" },
              { id: "d", text: "$[NO_2]^2[N_2O_4]$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kc expression",
                statement:
                  "Products over reactants, each raised to its stoichiometric coefficient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NO$_2$ is the product with coefficient 2, so $[NO_2]^2$ goes on top; N$_2$O$_4$ is the reactant on the bottom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{[NO_2]^2}{[N_2O_4]}$",
            commonErrors: [
              "Using a coefficient of 1 for every species, or inverting the expression.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "When writing a $K_c$ expression, which species are omitted?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pure solids and pure liquids" },
              { id: "b", text: "All gases" },
              { id: "c", text: "The products" },
              { id: "d", text: "Species with a coefficient of 1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kc expression",
                statement:
                  "Only species whose concentrations can change are included; pure solids and liquids have constant concentration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pure solids and pure liquids have constant 'concentrations' and are left out of $K_c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Pure solids and pure liquids",
            commonErrors: [
              "Thinking gases are omitted — gas concentrations appear in $K_c$ as $[gas]$.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a reaction at some instant, $Q = 0.40$ and $K_c = 2.5$. The reaction will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "proceed in the forward direction" },
              { id: "b", text: "proceed in the reverse direction" },
              { id: "c", text: "be at equilibrium" },
              { id: "d", text: "have $K_c$ change to 0.40" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reaction quotient",
                statement:
                  "$Q < K_c$ → forward; $Q > K_c$ → reverse; $Q = K_c$ → equilibrium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$Q = 0.40 < K_c = 2.5$, so the reaction quotient must increase — products must form.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Proceed in the forward direction",
            commonErrors: [
              "Reversing the comparison — $Q < K_c$ means forward, not reverse.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For $H_2(g) + Cl_2(g) \\rightleftharpoons 2HCl(g)$, $\\Delta n = 0$, so:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$K_p = K_c$" },
              { id: "b", text: "$K_p = K_c(RT)^{-2}$" },
              { id: "c", text: "$K_p = K_c(RT)^2$" },
              { id: "d", text: "$K_p$ is not defined for this reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement:
                  "$K_p = K_c(RT)^{\\Delta n}$; when $\\Delta n = 0$, $(RT)^0 = 1$.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta n = 0$ gives $K_p = K_c(RT)^0 = K_c$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $K_p = K_c$",
            commonErrors: [
              "Applying an RT factor even when $\\Delta n = 0$ — it equals 1.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "For $2NO_2(g) \\rightleftharpoons N_2O_4(g)$, the relationship between $K_p$ and $K_c$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$K_p = K_c(RT)^{-1}$" },
              { id: "b", text: "$K_p = K_c(RT)$" },
              { id: "c", text: "$K_p = K_c(RT)^2$" },
              { id: "d", text: "$K_p = K_c$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement:
                  "$K_p = K_c(RT)^{\\Delta n}$ where $\\Delta n$ is moles of gas in products minus reactants.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta n = 1 - 2 = -1$, so $K_p = K_c(RT)^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $K_p = K_c(RT)^{-1}$",
            commonErrors: [
              "Sign error in $\\Delta n$ — it is products minus reactants of gas moles.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For $SO_2Cl_2(g) \\rightleftharpoons SO_2(g) + Cl_2(g)$, $K_p = 0.25$ atm at $400$ K. Calculate $K_c$ ($R = 8.31$ J K$^{-1}$ mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$K_c$ / mol dm$^{-3}$",
                answer: 0.0000752,
                tolerance: 0.000001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement: "$K_p = K_c(RT)^{\\Delta n}$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta n = (1+1) - 1 = +1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange and evaluate $RT$.",
                working: "K_c = K_p/(RT) = 0.25/(8.31 \\times 400) = 0.25/3324",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $K_c$.",
                working: "K_c = 7.52 \\times 10^{-5}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_c \\approx 7.5 \\times 10^{-5}$ mol dm$^{-3}$",
            commonErrors: [
              "Using $\\Delta n = -1$ — products minus reactants gives +1 here.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "For $CO(g) + 2H_2(g) \\rightleftharpoons CH_3OH(g)$, $K_c = 10.5$ mol$^{-2}$ dm$^6$ at $400$ K. A mixture contains $[CO] = 0.10$, $[H_2] = 0.20$ and $[CH_3OH] = 0.050$ mol dm$^{-3}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$Q$", answer: 12.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reaction quotient",
                statement:
                  "$Q$ has the same form as $K_c$ but uses current concentrations; $Q < K_c$ → forward, $Q > K_c$ → reverse.",
              },
            ],
            steps: [
              {
                reasoning: "Write $Q = \\frac{[CH_3OH]}{[CO][H_2]^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the given concentrations.",
                working: "Q = 0.050/(0.10 \\times 0.20^2)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "Q = 0.050/0.0040 = 12.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$Q = 12.5 > K_c = 10.5$ → reaction proceeds in reverse.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Q = 12.5 > K_c$ → reverse direction",
            commonErrors: [
              "Forgetting to square $[H_2]$ — the coefficient 2 must be applied as a power.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$, $K_p = 1.5 \\times 10^{-4}$ at $700$ K. Calculate $K_c$ ($R = 8.31$ J K$^{-1}$ mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$K_c$ / mol$^{-2}$ dm$^6$",
                answer: 5076,
                tolerance: 50,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement: "$K_p = K_c(RT)^{\\Delta n}$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta n = 2 - (1+3) = -2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rearrange: $K_c = K_p(RT)^2$ since $(RT)^{-2}$ is in the denominator.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Calculate $(RT)^2$.",
                working:
                  "RT = 8.31 \\times 700 = 5817; (RT)^2 = 3.38 \\times 10^7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $K_c$.",
                working:
                  "K_c = 1.5 \\times 10^{-4} \\times 3.38 \\times 10^7 \\approx 5.1 \\times 10^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_c \\approx 5.1 \\times 10^{3}$ mol$^{-2}$ dm$^6$",
            commonErrors: [
              "Dividing by $(RT)^2$ instead of multiplying — check the sign of $\\Delta n$.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$, $K_c = 1.9 \\times 10^{-4}$ mol dm$^{-3}$ at $500$ K. Calculate $K_p$ ($R = 8.31$ J K$^{-1}$ mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [{ label: "$K_p$ / atm", answer: 0.79, tolerance: 0.02 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement: "$K_p = K_c(RT)^{\\Delta n}$",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta n = (1+1) - 1 = +1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So $K_p = K_c(RT)$; evaluate $RT$.",
                working: "RT = 8.31 \\times 500 = 4155",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $K_p$.",
                working: "K_p = 1.9 \\times 10^{-4} \\times 4155 \\approx 0.79",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_p \\approx 0.79$ atm",
            commonErrors: [
              "Inverting the relation — with $\\Delta n = +1$, $K_p = K_c(RT)$, not $K_c/(RT)$.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For $N_2O_4(g) \\rightleftharpoons 2NO_2(g)$, calculate the change in moles of gas, $\\Delta n$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\Delta n$", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Delta n",
                statement:
                  "$\\Delta n$ = (moles of gas in products) − (moles of gas in reactants).",
              },
            ],
            steps: [
              {
                reasoning: "Products have 2 mol gas, reactants have 1 mol gas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta n = 2 - 1 = +1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta n = +1$",
            commonErrors: [
              "Reversing the subtraction — reactants minus products gives −1.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "For the equilibrium $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$:",
          parts: [
            {
              label: "a",
              prompt: "Write the $K_c$ and $K_p$ expressions.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "State $\\Delta n$ and hence the relationship between $K_p$ and $K_c$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why adding a catalyst does not change the value of $K_c$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kc expression",
                statement:
                  "Products over reactants, each raised to its stoichiometric coefficient.",
              },
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement: "$K_p = K_c(RT)^{\\Delta n}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$K_c = \\frac{[SO_3]^2}{[SO_2]^2[O_2]}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$K_p = \\frac{p_{SO_3}^2}{p_{SO_2}^2\\,p_{O_2}}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\Delta n = 2 - 3 = -1$, so $K_p = K_c(RT)^{-1}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct powers applied to all three species.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "A catalyst speeds up the forward and reverse rates equally.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The equilibrium position and $K_c$ are unchanged — only the rate of reaching equilibrium increases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $K_c = [SO_3]^2/([SO_2]^2[O_2])$, $K_p = p_{SO_3}^2/(p_{SO_2}^2 p_{O_2})$. (b) $\\Delta n = -1$, $K_p = K_c(RT)^{-1}$. (c) Catalyst does not shift equilibrium.",
            commonErrors: [
              "Writing $[SO_3]$ without the power of 2, or claiming a catalyst changes $K_c$.",
            ],
          },
        },
        {
          id: "chemhl-u4-kc-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "For $CO(g) + 2H_2(g) \\rightleftharpoons CH_3OH(g)$, $K_p = 2.2 \\times 10^{-5}$ atm$^{-2}$ at $400$ K ($R = 8.31$ J K$^{-1}$ mol$^{-1}$).",
          parts: [
            {
              label: "a",
              prompt: "Write the $K_c$ and $K_p$ expressions.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate $\\Delta n$ and hence the value of $K_c$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "State and explain the effect on $K_c$ of doubling the total pressure at constant temperature.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Kp–Kc relation",
                statement: "$K_p = K_c(RT)^{\\Delta n}$",
              },
              {
                kind: "principle",
                name: "K depends only on temperature",
                statement:
                  "$K_c$ is unchanged by concentration or pressure changes at fixed temperature.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$K_c = \\frac{[CH_3OH]}{[CO][H_2]^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$K_p = \\frac{p_{CH_3OH}}{p_{CO}\\,p_{H_2}^2}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\Delta n = 1 - 3 = -2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Rearrange: $K_c = K_p(RT)^2$; evaluate $(RT)^2 = (8.31 \\times 400)^2 = (3324)^2 = 1.11 \\times 10^7$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$K_c = 2.2 \\times 10^{-5} \\times 1.11 \\times 10^7 \\approx 243$ mol$^{-2}$ dm$^6$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$K_c$ does not change — it depends only on temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Doubling pressure shifts equilibrium toward fewer gas moles (toward CH$_3$OH) but the ratio of concentrations at equilibrium returns to the same $K_c$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Only a temperature change alters $K_c$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Expressions as above. (b) $\\Delta n = -2$, $K_c \\approx 243$ mol$^{-2}$ dm$^6$. (c) $K_c$ unchanged; only position shifts.",
            commonErrors: [
              "Thinking pressure changes $K_c$ — it changes position, not the constant.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u4-ice-tables",
      title: "ICE-table equilibrium calculations",
      skill:
        "Set up and solve ICE tables to find equilibrium concentrations for homogeneous reactions.",
      lesson: {
        sections: [
          {
            heading: "Setting up the ICE table",
            body: "For a reaction $aA + bB \\rightleftharpoons cC + dD$ with initial concentrations known, make a table: Initial concentrations, Change (in terms of $x$ multiplied by stoichiometric coefficients), and Equilibrium (initial + change). For reactants the change is $-ax$, $-bx$; for products $+cx$, $+dx$. The equilibrium concentrations are then substituted into the $K_c$ expression.",
          },
          {
            heading: "Solving the quadratic",
            body: "Substituting equilibrium expressions into $K_c$ usually gives a quadratic in $x$: $ax^2 + bx + c = 0$. Solve with the quadratic formula or by inspection if one root is physically meaningless (negative concentration). The physically valid root is the one giving all equilibrium concentrations $\\geq 0$ and not exceeding initial amounts. For small $K$ values, the approximation $[A]_{eq} \\approx [A]_0 - ax$ may simplify the algebra.",
          },
          {
            heading: "Worked pattern",
            body: "Example: $H_2 + I_2 \\rightleftharpoons 2HI$, start with $[H_2] = [I_2] = 0.10$, $K_c = 50$. ICE gives equilibrium $[H_2] = [I_2] = 0.10 - x$, $[HI] = 2x$. Substitute: $\\frac{(2x)^2}{(0.10-x)^2} = 50$ → $\\frac{2x}{0.10-x} = \\sqrt{50} = 7.07$ → solve for $x = 0.088$. This pattern (equal initial concentrations of reactants) often gives a perfect-square root.",
          },
        ],
        keyFormulas: [
          {
            name: "ICE table",
            statement:
              "Initial / Change (−ax, +cx) / Equilibrium rows; substitute into $K_c$.",
          },
          {
            name: "Quadratic solution",
            statement:
              "$ax^2 + bx + c = 0$; choose the physically valid root ($x \\geq 0$, concentrations $\\geq 0$).",
          },
          {
            name: "Small-K approximation",
            statement:
              "If $K$ is very small, $x \\ll [A]_0$ so $[A]_{eq} \\approx [A]_0$ simplifies the equation.",
          },
        ],
        workedExample: {
          problem:
            "For $A \\rightleftharpoons B + C$ with $K_c = 0.25$, starting with $[A] = 1.0$ M only, find equilibrium concentrations.",
          solution:
            "ICE: Initial [A]=1.0, [B]=[C]=0; Change −x, +x, +x; Equilibrium [A]=1−x, [B]=[C]=x. $K_c = \\frac{x^2}{1-x} = 0.25$ → $x^2 = 0.25 - 0.25x$ → $x^2 + 0.25x - 0.25 = 0$ → $x = 0.39$. So [A]=0.61, [B]=[C]=0.39 M.",
        },
      },
      questions: [
        {
          id: "chemhl-u4-ice-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an ICE table for $2A \\rightleftharpoons B + C$, if the reaction proceeds forward by extent $x$, the change in [A] is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2x$" },
              { id: "b", text: "$-x$" },
              { id: "c", text: "$+2x$" },
              { id: "d", text: "$+x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICE change row",
                statement:
                  "Change = stoichiometric coefficient × extent of reaction, negative for reactants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A has coefficient 2 and is a reactant → change = $-2x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $-2x$",
            commonErrors: [
              "Using −x regardless of coefficient — the coefficient multiplies the extent.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For $A \\rightleftharpoons B + C$ with $K_c = 0.25$, starting with $[A] = 1.0$ M and $[B] = [C] = 0$, set up the ICE expressions and write the equation to solve for $x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICE table",
                statement:
                  "Initial / Change / Equilibrium rows substituted into $K_c$.",
              },
            ],
            steps: [
              {
                reasoning: "Equilibrium: [A] = 1−x, [B] = [C] = x.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_c = \\frac{x^2}{1-x} = 0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearranged: $x^2 + 0.25x - 0.25 = 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{x^2}{1-x} = 0.25$ → $x^2 + 0.25x - 0.25 = 0$",
            commonErrors: [
              "Forgetting that [B] and [C] both equal x (1:1:1 stoichiometry).",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$ with $K_c = 50$, starting with $[H_2] = [I_2] = 0.10$ M, find the equilibrium concentration of HI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ICE method",
                statement:
                  "ICE table → substitute into $K_c$ → solve quadratic.",
              },
            ],
            steps: [
              {
                reasoning: "ICE: [H$_2$]=[I$_2$]=0.10−x, [HI]=2x.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\frac{(2x)^2}{(0.10-x)^2} = 50$ → $\\frac{2x}{0.10-x} = 7.07$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve: $2x = 7.07(0.10-x)$ → $x = 0.088$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "[HI] = 2x = $0.176$ M.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$[HI]_{eq} \\approx 0.18$ mol dm$^{-3}$",
            commonErrors: ["Forgetting [HI] = 2x not x — report 2x not x."],
          },
        },
        {
          id: "chemhl-u4-ice-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "For $N_2O_4(g) \\rightleftharpoons 2NO_2(g)$, $K_c = 4.6 \\times 10^{-3}$ mol dm$^{-3}$ at $298$ K. A sealed vessel initially contains only N$_2$O$_4$ at $0.20$ mol dm$^{-3}$.",
          parts: [
            {
              label: "a",
              prompt: "Write the ICE table expressions for all species.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Set up the equation for $x$ and state whether an approximation is valid.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Solve for $x$ and find the equilibrium concentrations.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Calculate the percentage of N$_2$O$_4$ that has dissociated.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Small-K approximation",
                statement:
                  "If $K$ is small, $x \\ll [A]_0$ so $[A]_{eq} \\approx [A]_0$ simplifies solving.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "ICE: [N$_2$O$_4$] = 0.20−x, [NO$_2$] = 2x.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct stoichiometric coefficients applied.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$K_c = \\frac{(2x)^2}{0.20-x} = 4.6 \\times 10^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$K$ is small so $x \\ll 0.20$; approximate $0.20 - x \\approx 0.20$.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Solve approximately: $4x^2 / 0.20 = 4.6 \\times 10^{-3}$ → $x^2 = 2.3 \\times 10^{-4}$ → $x = 0.0152$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "[N$_2$O$_4$] = 0.185, [NO$_2$] = 0.030 mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Percentage dissociated = $x/0.20 \\times 100 = 0.0152/0.20 \\times 100$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate: $\\approx 7.6\\%$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) ICE as above. (b) $4x^2/(0.20-x) = 4.6\\times10^{-3}$; small-K approx valid. (c) x=0.015, [NO$_2$]=0.030 M. (d) ~7.6% dissociated.",
            commonErrors: [
              "Not checking the small-K approximation — here it is valid since x << 0.20.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the ICE table of $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$, if the reaction proceeds forward by extent $x$, the change in $[PCl_5]$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-x$" },
              { id: "b", text: "$+x$" },
              { id: "c", text: "$-2x$" },
              { id: "d", text: "$+2x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICE change row",
                statement:
                  "Change = stoichiometric coefficient × extent, negative for reactants.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PCl$_5$ is a reactant with coefficient 1 → change = $-1 \\times x = -x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $-x$",
            commonErrors: [
              "Using −2x — the coefficient of PCl$_5$ is 1, not 2.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solving an ICE quadratic gives two roots for $x$: $x = 0.15$ and $x = -0.30$. Which root is physically valid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 0.15$ only" },
              { id: "b", text: "$x = -0.30$ only" },
              { id: "c", text: "Both roots" },
              { id: "d", text: "Neither — take the average" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Physical root",
                statement:
                  "The valid root gives all equilibrium concentrations ≥ 0 and does not exceed the available reactant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x = -0.30$ would give negative equilibrium concentrations — impossible.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $x = 0.15$",
            commonErrors: [
              "Choosing the larger-magnitude root without checking concentrations stay positive.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$ starting with $[H_2] = [I_2] = 0.10$ mol dm$^{-3}$, the reaction proceeds to $x = 0.050$ mol dm$^{-3}$. Calculate $[HI]$ at this point.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$[HI]$ / mol dm$^{-3}$",
                answer: 0.1,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICE change row",
                statement: "HI has coefficient 2 → change = $+2x$.",
              },
            ],
            steps: [
              {
                reasoning: "$[HI] = 0 + 2x = 2(0.050)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[HI] = 0.10$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$[HI] = 0.10$ mol dm$^{-3}$",
            commonErrors: ["Reporting x instead of 2x for [HI]."],
          },
        },
        {
          id: "chemhl-u4-ice-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $A \\rightleftharpoons B + C$ with $K_c = 0.25$, starting with $[A] = 1.0$ mol dm$^{-3}$ only, solve the ICE equation $\\frac{x^2}{1-x} = 0.25$ for $x$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$ / mol dm$^{-3}$", answer: 0.39, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ICE method",
                statement:
                  "Substitute equilibrium expressions into $K_c$ and solve the quadratic.",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange to $x^2 + 0.25x - 0.25 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the quadratic formula.",
                working:
                  "x = (-0.25 + \\sqrt{0.0625 + 1.0})/2 = (-0.25 + 1.031)/2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the positive root: $x \\approx 0.39$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\approx 0.39$ mol dm$^{-3}$",
            commonErrors: [
              "Taking the negative root — it gives [A] > initial concentration.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "For $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$ with $K_c = 50$, starting with $[H_2] = [I_2] = 0.20$ mol dm$^{-3}$, find the equilibrium concentration of HI.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$[HI]_{eq}$ / mol dm$^{-3}$",
                answer: 0.31,
                tolerance: 0.01,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ICE method",
                statement:
                  "ICE: [H$_2$]=[I$_2$]=0.20−x, [HI]=2x; substitute into $K_c$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\frac{(2x)^2}{(0.20-x)^2} = 50$ → $\\frac{2x}{0.20-x} = 7.07$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for x.",
                working: "2x = 7.07(0.20 - x) → x \\approx 0.156",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[HI]_{eq} = 2x \\approx 0.31$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$[HI]_{eq} \\approx 0.31$ mol dm$^{-3}$",
            commonErrors: ["Reporting x rather than 2x."],
          },
        },
        {
          id: "chemhl-u4-ice-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The small-$K$ approximation ($[A]_{eq} \\approx [A]_0$) in an ICE calculation is valid when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$K_c$ is very small, so $x \\ll [A]_0$" },
              { id: "b", text: "$K_c$ is very large" },
              { id: "c", text: "The reaction goes to completion" },
              { id: "d", text: "All concentrations are equal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Small-K approximation",
                statement:
                  "If $x$ is negligible compared with $[A]_0$, then $[A]_{eq} \\approx [A]_0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Small $K_c$ means little reaction occurs, so the change $x$ is tiny relative to $[A]_0$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $K_c$ is very small, so $x \\ll [A]_0$",
            commonErrors: [
              "Assuming the approximation works for large K — there the reaction is extensive.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For $N_2O_4(g) \\rightleftharpoons 2NO_2(g)$ with $K_c = 4.6 \\times 10^{-3}$ mol dm$^{-3}$, starting with only $[N_2O_4] = 0.20$ mol dm$^{-3}$, solve the exact quadratic for $x$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "$x$ / mol dm$^{-3}$",
                answer: 0.0146,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ICE method",
                statement:
                  "ICE: [N$_2$O$_4$]=0.20−x, [NO$_2$]=2x; solve $\\frac{4x^2}{0.20-x} = 4.6\\times10^{-3}$ exactly.",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange: $4x^2 + 0.0046x - 0.00092 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply quadratic formula.",
                working:
                  "x = (-0.0046 + \\sqrt{2.1\\times10^{-5} + 0.01472})/8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate discriminant.",
                working: "\\sqrt{0.01474} = 0.1214; x = 0.1168/8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$x \\approx 0.0146$ mol dm$^{-3}$ (close to the approximate 0.0152).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x \\approx 0.0146$ mol dm$^{-3}$",
            commonErrors: [
              "Stopping at the approximation without solving the quadratic when asked for the exact value.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In an ICE table for $A \\rightleftharpoons 2B$ where the reaction proceeds forward by extent $x$, the equilibrium concentration of B is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$[B]_0 + x$" },
              { id: "b", text: "$[B]_0 + 2x$" },
              { id: "c", text: "$[B]_0 - x$" },
              { id: "d", text: "$2x$ only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICE change row",
                statement:
                  "Equilibrium = initial + change; change for B is $+2x$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "B is a product with coefficient 2 → equilibrium $[B] = [B]_0 + 2x$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $[B]_0 + 2x$",
            commonErrors: ["Forgetting to add the initial concentration."],
          },
        },
        {
          id: "chemhl-u4-ice-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "For $A \\rightleftharpoons B + C$ with $K_c = 0.25$, starting with $[A] = 0.50$ and $[B] = 0.10$ mol dm$^{-3}$ (and $[C] = 0$), find the equilibrium concentration of C.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ICE method",
                statement:
                  "Equilibrium: [A]=0.50−x, [B]=0.10+x, [C]=x; substitute into $K_c$ and solve the quadratic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ICE expressions: [A] = 0.50 − x, [B] = 0.10 + x, [C] = x.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set up $\\frac{x(0.10+x)}{0.50-x} = 0.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange: $x^2 + 0.35x - 0.125 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solve: $x = \\frac{-0.35 + \\sqrt{0.1225 + 0.50}}{2} = \\frac{-0.35 + 0.789}{2} \\approx 0.22$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[C]_{eq} = x \\approx 0.22$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$[C]_{eq} \\approx 0.22$ mol dm$^{-3}$",
            commonErrors: [
              "Ignoring the initial [B] = 0.10 — it must be included as 0.10 + x.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For $N_2O_4(g) \\rightleftharpoons 2NO_2(g)$ with $K_c = 4.6 \\times 10^{-3}$ mol dm$^{-3}$, starting with $[N_2O_4] = 0.10$ mol dm$^{-3}$, find the percentage of N$_2$O$_4$ dissociated at equilibrium (use the small-$K$ approximation).",
          response: {
            type: "numeric",
            parts: [{ label: "% dissociated", answer: 10.7, tolerance: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ICE method",
                statement:
                  "ICE: [N$_2$O$_4$]≈0.10, [NO$_2$]=2x; $\\frac{4x^2}{0.10} = 4.6\\times10^{-3}$ → $x = 0.0107$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Approximate: $4x^2/0.10 = 4.6\\times10^{-3}$ → $x^2 = 1.15\\times10^{-4}$ → $x = 0.0107$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Check approximation: $x/0.10 = 10.7\\%$ — borderline but acceptable for small K.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Percentage dissociated = $\\frac{x}{[N_2O_4]_0} \\times 100 = \\frac{0.0107}{0.10} \\times 100$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 10.7\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 10.7\\%$ dissociated",
            commonErrors: [
              "Using 2x instead of x in the percentage — x is the amount of N$_2$O$_4$ that dissociated.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "For $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$, $K_c = 0.020$ mol dm$^{-3}$ at $500$ K. A vessel initially contains only PCl$_5$ at $0.30$ mol dm$^{-3}$.",
          parts: [
            {
              label: "a",
              prompt: "Write the ICE table expressions for all species.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Set up the equation for $x$ and state whether the small-$K$ approximation is justified.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Solve for $x$ and find the equilibrium concentrations.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Calculate the percentage of PCl$_5$ dissociated.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "ICE method",
                statement:
                  "ICE: [PCl$_5$]=0.30−x, [PCl$_3$]=[Cl$_2$]=x; $\\frac{x^2}{0.30-x} = 0.020$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "ICE: [PCl$_5$] = 0.30 − x, [PCl$_3$] = x, [Cl$_2$] = x.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct 1:1:1 stoichiometry for products.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\frac{x^2}{0.30 - x} = 0.020$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$K_c = 0.020$ is moderately small; the approximation is only approximate — x ≈ 0.077 is ~26% of 0.30, so solve exactly.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Rearrange: $x^2 + 0.020x - 0.006 = 0$ → $x = \\frac{-0.020 + \\sqrt{0.0004 + 0.024}}{2} \\approx 0.068$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "[PCl$_5$] ≈ 0.232, [PCl$_3$] = [Cl$_2$] ≈ 0.068 mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Percentage = $\\frac{0.068}{0.30} \\times 100$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$\\approx 22.7\\%$ dissociated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) ICE as above. (b) $x^2/(0.30-x)=0.020$; approximation marginal. (c) x≈0.068 M. (d) ~23% dissociated.",
            commonErrors: [
              "Applying the small-K approximation blindly — 23% dissociation is too large.",
            ],
          },
        },
        {
          id: "chemhl-u4-ice-q16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an ICE table, the symbol $x$ represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The equilibrium concentration of the product" },
              {
                id: "b",
                text: "The extent of reaction (change in concentration of a species with coefficient 1)",
              },
              { id: "c", text: "The equilibrium constant" },
              { id: "d", text: "The initial concentration" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICE table",
                statement:
                  "x is the extent of reaction; changes are coefficient × x.",
              },
            ],
            steps: [
              {
                reasoning:
                  "x measures how far the reaction proceeds; all concentration changes are multiples of x.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The extent of reaction",
            commonErrors: [
              "Confusing x with a concentration — it is the extent, multiplied by coefficients.",
            ],
          },
        },
      ],
    },
  ],
};
