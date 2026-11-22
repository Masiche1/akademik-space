import type { Lesson } from "../../../types.ts";

export const lesson511: Lesson = {
  id: "cial-c-u5-lesson-5-1",
  code: "5-1",
  title: "Chemical equilibrium",
  goal: "I CAN write equilibrium expressions, use $K_c$ and $K_p$, and apply Le Chatelier's principle.",
  standards: ["9701 5.1: equilibrium"],
  vocabulary: [
    {
      term: "Dynamic equilibrium",
      definition: "Forward and reverse rates equal; concentrations constant.",
    },
    {
      term: "Equilibrium constant",
      definition: "$K_c$ — ratio of product to reactant concentrations at equilibrium.",
    },
    {
      term: "Le Chatelier's principle",
      definition: "System counteracts changes in concentration, pressure or temperature.",
    },
    {
      term: "Homogeneous equilibrium",
      definition: "All species in same phase.",
    },
    {
      term: "Haber process",
      definition: "$N_2 + 3H_2 \\rightleftharpoons 2NH_3$ — industrial ammonia synthesis.",
    },
    {
      term: "Contact process",
      definition: "$2SO_2 + O_2 \\rightleftharpoons 2SO_3$ — industrial sulfuric acid.",
    },
  ],
  concepts: [
    {
      id: "cial-c-u5-kc",
      title: "Equilibrium constants $K_c$ and $K_p$",
      skill: "Write $K_c$ and $K_p$ expressions and calculate values.",
      lesson: {
        sections: [
          {
            heading: "$K_c$ expression",
            body: "For $aA + bB \\rightleftharpoons cC + dD$: $K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$ — products over reactants, powers = coefficients, solids/liquids omitted. Only concentration (or pressure) terms appear.",
          },
          {
            heading: "$K_p$ for gases",
            body: "For gas-phase equilibria use partial pressures: $K_p = \\frac{p_C^c p_D^d}{p_A^a p_B^b}$. Relation: $K_p = K_c(RT)^{\\Delta n}$ where $\\Delta n$ = moles of gas products − reactants.",
          },
          {
            heading: "Interpreting $K$",
            body: "$K>1$: products favoured at equilibrium; $K<1$: reactants favoured; $K \\approx 1$: comparable. $K$ is constant at fixed temperature only — changes with temperature, not with concentration/pressure/catalyst.",
          },
        ],
        keyFormulas: [
          {
            name: "$K_c$",
            statement: "$\\frac{[C]^c[D]^d}{[A]^a[B]^b}$",
          },
          {
            name: "$K_p$",
            statement: "$\\frac{p_C^c p_D^d}{p_A^a p_B^b} = K_c(RT)^{\\Delta n}$",
          },
        ],
        workedExample: {
          problem:
            "For $N_2O_4 \\rightleftharpoons 2NO_2$, at equilibrium $[N_2O_4]=0.40$ and $[NO_2]=0.60$ mol dm$^{-3}$. Find $K_c$.",
          solution:
            "$K_c = \\frac{[NO_2]^2}{[N_2O_4]} = \\frac{0.60^2}{0.40} = \\frac{0.36}{0.40} = 0.90$ mol dm$^{-3}$.",
        },
      },
      questions: [
        {
          id: "cial-c-u5-kc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $H_2 + I_2 \\rightleftharpoons 2HI$, what is $K_c$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{[H_2][I_2]}{[HI]^2}$" },
              { id: "b", text: "$[HI]^2[H_2][I_2]$" },
              { id: "c", text: "$\\frac{[HI]}{[H_2][I_2]}$" },
              { id: "d", text: "$\\frac{[HI]^2}{[H_2][I_2]}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_c$ expression",
                statement: "Products over reactants with coefficient powers.",
              },
            ],
            steps: [
              {
                reasoning: "$K_c = \\frac{[HI]^2}{[H_2][I_2]}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{[HI]^2}{[H_2][I_2]}$",
          },
        },
        {
          id: "cial-c-u5-kc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $N_2O_4 \\rightleftharpoons 2NO_2$, $[N_2O_4]=0.50$ and $[NO_2]=0.80$ at equilibrium. Calculate $K_c$.",
          response: {
            type: "numeric",
            parts: [{ label: "Kc", answer: 1.28 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_c$",
                statement: "$K_c=\\frac{[NO_2]^2}{[N_2O_4]}$.",
              },
            ],
            steps: [
              {
                reasoning: "$K_c = \\frac{0.80^2}{0.50}$.",
                working: "\\frac{0.64}{0.50}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$=1.28$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1.28$",
          },
        },
        {
          id: "cial-c-u5-kc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2SO_2 + O_2 \\rightleftharpoons 2SO_3$, write $K_p$ in terms of partial pressures and state what $\\Delta n$ is.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_p$",
                statement: "$K_p=\\frac{p_{SO_3}^2}{p_{SO_2}^2 p_{O_2}}$; $\\Delta n = 2-3 = -1$.",
              },
            ],
            steps: [
              {
                reasoning: "$K_p = \\frac{p_{SO_3}^2}{p_{SO_2}^2 \\cdot p_{O_2}}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Powers match coefficients (2, 2, 1).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta n = 2 - (2+1) = -1$ mole of gas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct expression and $\\Delta n$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_p=\\frac{p_{SO_3}^2}{p_{SO_2}^2 p_{O_2}}$, $\\Delta n=-1$",
          },
        },
        {
          id: "cial-c-u5-kc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Equilibrium constants.",
          parts: [
            {
              label: "a",
              prompt: "Write the $K_c$ expression for $2NO + O_2 \\rightleftharpoons 2NO_2$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "For $N_2O_4 \\rightleftharpoons 2NO_2$, given $[N_2O_4]=0.50$, $[NO_2]=0.80$, calculate $K_c$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What does $K_c > 1$ tell you about the position of equilibrium?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Does adding a catalyst change $K_c$? Explain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_c$",
                statement: "Products/reactants; K only changes with temperature.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$K_c = \\frac{[NO_2]^2}{[NO]^2[O_2]}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct powers and order.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$K_c = \\frac{0.80^2}{0.50}$.",
                working: "\\frac{0.64}{0.50}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$=1.28$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct value.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Products favoured — equilibrium lies to the right.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "More product than reactant at equilibrium.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "No — catalyst speeds both directions equally.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Equilibrium position and $K_c$ unchanged.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) [NO2]2/[NO]2[O2] (b) 1.28 (c) products favoured (d) no change",
          },
        },
        {
          id: "cial-c-u5-kc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which species are omitted from a $K_c$ expression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aqueous ions" },
              { id: "b", text: "Gaseous species" },
              { id: "c", text: "Products" },
              { id: "d", text: "Solids and pure liquids" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "$K_c$",
                statement: "Only species in solution with changing concentration appear.",
              },
            ],
            steps: [
              {
                reasoning: "Solids and pure liquids have constant activity and are omitted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Solids and pure liquids",
          },
        },
        {
          id: "cial-c-u5-kc-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $2HI \\rightleftharpoons H_2 + I_2$, at equilibrium $[HI]=0.40$, $[H_2]=0.10$ and $[I_2]=0.10$ mol dm$^{-3}$. Calculate $K_c$.",
          response: {
            type: "numeric",
            parts: [{ label: "Kc", answer: 0.0625 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_c$",
                statement: "$K_c=\\frac{[H_2][I_2]}{[HI]^2}$.",
              },
            ],
            steps: [
              {
                reasoning: "$K_c = \\frac{[H_2][I_2]}{[HI]^2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_c = \\frac{0.10 \\times 0.10}{0.40^2} = \\frac{0.010}{0.16}$.",
                working: "\\frac{0.010}{0.16}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_c = 0.0625$ (dimensionless, $\\Delta n = 0$).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.0625$",
          },
        },
        {
          id: "cial-c-u5-kc-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $N_2O_4(g) \\rightleftharpoons 2NO_2(g)$, write the $K_p$ expression in terms of partial pressures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_p$",
                statement: "$K_p=\\frac{p_{NO_2}^2}{p_{N_2O_4}}$ — powers equal coefficients.",
              },
            ],
            steps: [
              {
                reasoning: "$K_p = \\frac{p_{NO_2}^2}{p_{N_2O_4}}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Powers match the stoichiometric coefficients (2 and 1).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct expression stated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_p=\\frac{p_{NO_2}^2}{p_{N_2O_4}}$",
          },
        },
        {
          id: "cial-c-u5-kc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "For which reaction is $K_p$ numerically equal to $K_c$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$H_2 + I_2 \\rightleftharpoons 2HI$" },
              { id: "b", text: "$N_2 + 3H_2 \\rightleftharpoons 2NH_3$" },
              { id: "c", text: "$2SO_2 + O_2 \\rightleftharpoons 2SO_3$" },
              { id: "d", text: "$PCl_5 \\rightleftharpoons PCl_3 + Cl_2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_p = K_c(RT)^{\\Delta n}$",
                statement: "$K_p=K_c$ only when $\\Delta n=0$.",
              },
            ],
            steps: [
              {
                reasoning: "$H_2+I_2\\rightleftharpoons2HI$ has 2 mol gas each side, so $\\Delta n=0$ and $(RT)^0=1$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$H_2+I_2\\rightleftharpoons2HI$",
          },
        },
        {
          id: "cial-c-u5-kc-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $N_2O_4 \\rightleftharpoons 2NO_2$, $K_c = 0.50$ mol dm$^{-3}$. At equilibrium $[N_2O_4] = 0.20$ mol dm$^{-3}$. Calculate $[NO_2]$.",
          response: {
            type: "numeric",
            parts: [{ label: "[NO2]", answer: 0.316 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_c$",
                statement: "$[NO_2]=\\sqrt{K_c[N_2O_4]}$.",
              },
            ],
            steps: [
              {
                reasoning: "$K_c = \\frac{[NO_2]^2}{[N_2O_4]}$, so $[NO_2]^2 = K_c[N_2O_4]$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[NO_2]^2 = 0.50 \\times 0.20 = 0.10$.",
                working: "0.50 \\times 0.20 = 0.10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[NO_2] = \\sqrt{0.10}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[NO_2] \\approx 0.316$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.316$ mol dm$^{-3}$",
          },
        },
        {
          id: "cial-c-u5-kc-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)$, write the $K_c$ and $K_p$ expressions and state $\\Delta n$ in $K_p = K_c(RT)^{\\Delta n}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_c$ and $K_p$",
                statement: "$K_c=\\frac{[PCl_3][Cl_2]}{[PCl_5]}$; $\\Delta n = 2-1 = +1$.",
              },
            ],
            steps: [
              {
                reasoning: "$K_c = \\frac{[PCl_3][Cl_2]}{[PCl_5]}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_p = \\frac{p_{PCl_3}\\, p_{Cl_2}}{p_{PCl_5}}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\Delta n = (1+1) - 1 = +1$ mole of gas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three parts correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_c=\\frac{[PCl_3][Cl_2]}{[PCl_5]}$, $K_p=\\frac{p_{PCl_3}p_{Cl_2}}{p_{PCl_5}}$, $\\Delta n=+1$",
          },
        },
        {
          id: "cial-c-u5-kc-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At constant temperature, which of the following does NOT change the value of $K_c$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing pressure" },
              { id: "b", text: "Adding a catalyst" },
              { id: "c", text: "Increasing reactant concentration" },
              { id: "d", text: "Adding more product" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "$K$ dependence",
                statement: "$K$ changes only with temperature.",
              },
            ],
            steps: [
              {
                reasoning: "A catalyst speeds both directions equally; $K_c$ is unchanged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Adding a catalyst",
          },
        },
        {
          id: "cial-c-u5-kc-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $PCl_5 \\rightleftharpoons PCl_3 + Cl_2$, $K_c = 0.10$ mol dm$^{-3}$ at 300 K. Calculate $K_p$ ($R = 8.31$ J K$^{-1}$ mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [{ label: "Kp", answer: 249.3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_p = K_c(RT)^{\\Delta n}$",
                statement: "$\\Delta n = +1$ here.",
              },
            ],
            steps: [
              {
                reasoning: "$K_p = K_c(RT)^{\\Delta n} = 0.10 \\times (8.31 \\times 300)^{+1}$.",
                working: "0.10 \\times 8.31 \\times 300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$RT = 2493$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_p = 0.10 \\times 2493 = 249.3$ atm (or appropriate pressure units).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct value with correct sign of $\\Delta n$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$249.3$",
          },
        },
        {
          id: "cial-c-u5-kc-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State the conditions used in the Haber process and explain the effect of each on the yield or rate of ammonia production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Haber process",
                statement: "$\\sim 400$ °C, high pressure, Fe catalyst.",
              },
            ],
            steps: [
              {
                reasoning: "Temperature $\\sim 400$ °C — a compromise: higher T gives faster rate but lowers equilibrium yield (exothermic).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High pressure — equilibrium shifts toward fewer gas moles (4 $\\to$ 2), increasing yield.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Iron catalyst — speeds attainment of equilibrium without changing yield.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each condition justified correctly.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$\\sim400$ °C, high pressure, Fe catalyst — each justified",
          },
        },
        {
          id: "cial-c-u5-kc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $H_2 + I_2 \\rightleftharpoons 2HI$, the units of $K_c$ are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "dimensionless (no units)" },
              { id: "b", text: "mol dm$^{-3}$" },
              { id: "c", text: "(mol dm$^{-3}$)$^{-1}$" },
              { id: "d", text: "Depends on temperature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Units of $K_c$",
                statement: "Units depend on $\\Delta n$; $\\Delta n=0$ gives dimensionless $K_c$.",
              },
            ],
            steps: [
              {
                reasoning: "Equal moles of gas each side so $K_c=\\frac{[HI]^2}{[H_2][I_2]}$ has cancelling concentration units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dimensionless",
          },
        },
        {
          id: "cial-c-u5-kc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2SO_2 + O_2 \\rightleftharpoons 2SO_3$, at equilibrium $[SO_2]=0.20$, $[O_2]=0.30$ and $[SO_3]=0.60$ mol dm$^{-3}$. Calculate $K_c$.",
          response: {
            type: "numeric",
            parts: [{ label: "Kc", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_c$",
                statement: "$K_c=\\frac{[SO_3]^2}{[SO_2]^2[O_2]}$.",
              },
            ],
            steps: [
              {
                reasoning: "$K_c = \\frac{[SO_3]^2}{[SO_2]^2[O_2]}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_c = \\frac{0.60^2}{0.20^2 \\times 0.30}$.",
                working: "\\frac{0.36}{0.012}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Numerator $=0.36$, denominator $=0.012$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_c = 30$ dm$^3$ mol$^{-1}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30$",
          },
        },
        {
          id: "cial-c-u5-kc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Equilibrium constants — extended.",
          parts: [
            {
              label: "a",
              prompt: "Write the $K_c$ expression for $2NO + O_2 \\rightleftharpoons 2NO_2$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write the $K_p$ expression and state $\\Delta n$ for the same reaction.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What does a value of $K_c > 1$ indicate about the position of equilibrium?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Does changing the temperature change $K_c$? Explain.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "Does adding a catalyst change $K_c$? Give a one-line reason.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K$ expressions",
                statement: "Products over reactants; $K$ fixed by temperature only.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$K_c = \\frac{[NO_2]^2}{[NO]^2[O_2]}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct powers (2, 2, 1).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$K_p = \\frac{p_{NO_2}^2}{p_{NO}^2\\, p_{O_2}}$; $\\Delta n = 2 - 3 = -1$.",
                marks: 2,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$K_c > 1$ means products are favoured at equilibrium.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "The equilibrium lies to the right — more product than reactant at equilibrium.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Yes — $K$ is constant only at fixed temperature.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Changing T shifts equilibrium and gives a new $K$ value.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning: "No — catalyst speeds both directions equally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) [NO2]2/[NO]2[O2] (b) Kp with Δn=-1 (c) products favoured (d) yes, T changes K (e) no",
          },
        },
      ],
    },
    {
      id: "cial-c-u5-le-chatelier",
      title: "Le Chatelier's principle",
      skill: "Predict equilibrium shifts from changes in concentration, pressure and temperature.",
      lesson: {
        sections: [
          {
            heading: "Concentration",
            body: "Increasing reactant concentration shifts equilibrium right (more product). Increasing product shifts left. Only concentration changes affect position — $K$ unchanged.",
          },
          {
            heading: "Pressure (gases)",
            body: "Increasing pressure shifts equilibrium toward fewer moles of gas. Decreasing pressure shifts toward more moles. If $\\Delta n=0$ (equal moles each side), pressure has no effect.",
          },
          {
            heading: "Temperature",
            body: "Increasing T shifts equilibrium in endothermic direction (absorbs heat); decreasing T shifts exothermic. Temperature changes DO change $K$ — unlike concentration/pressure.",
          },
        ],
        keyFormulas: [
          {
            name: "Le Chatelier",
            statement: "System opposes imposed change.",
          },
          {
            name: "Pressure effect",
            statement: "Shift toward fewer gas moles on pressure increase.",
          },
        ],
        workedExample: {
          problem:
            "For $N_2+3H_2\\rightleftharpoons2NH_3$ ($\\Delta H=-92$ kJ/mol), predict effect of: (a) adding $N_2$; (b) increasing pressure; (c) increasing T.",
          solution:
            "(a) shifts right (more NH$_3$); (b) shifts right (4 mol gas $\\to$ 2 mol); (c) shifts left (endothermic direction, reverse of exothermic forward).",
        },
      },
      questions: [
        {
          id: "cial-c-u5-lc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $N_2+3H_2\\rightleftharpoons2NH_3$, increasing pressure shifts equilibrium toward...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depends on temperature" },
              { id: "b", text: "More NH$_3$ (fewer gas moles)" },
              { id: "c", text: "More N$_2$ and H$_2$" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier pressure",
                statement: "Shift toward fewer gas moles.",
              },
            ],
            steps: [
              {
                reasoning: "4 mol gas reactants $\\to$ 2 mol product; fewer moles favoured.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "More NH3",
          },
        },
        {
          id: "cial-c-u5-lc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For an exothermic equilibrium ($\\Delta H<0$), what happens to the position when temperature is increased?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier temperature",
                statement: "Increase T shifts toward endothermic direction.",
              },
            ],
            steps: [
              {
                reasoning: "Forward reaction is exothermic; reverse is endothermic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher T favours endothermic direction = reverse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equilibrium shifts left (toward reactants).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shifts left (reactants)",
          },
        },
        {
          id: "cial-c-u5-lc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2SO_2+O_2\\rightleftharpoons2SO_3$ ($\\Delta H=-197$), state the effect of: (a) adding $SO_2$; (b) increasing pressure; (c) increasing T.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier",
                statement: "Conc right, pressure to fewer moles, T to endothermic.",
              },
            ],
            steps: [
              {
                reasoning: "(a) More $SO_2$ shifts right toward $SO_3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 3 mol gas $\\to$ 2 mol; higher pressure shifts right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Exothermic forward; higher T shifts left (endothermic).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All three correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) right (b) right (c) left",
          },
        },
        {
          id: "cial-c-u5-lc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Le Chatelier's principle.",
          parts: [
            {
              label: "a",
              prompt: "For $N_2+3H_2\\rightleftharpoons2NH_3$, state the effect of increasing pressure.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What happens if temperature is increased for this exothermic reaction?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What happens if more $H_2$ is added?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Does adding a catalyst shift the equilibrium? Explain.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier",
                statement: "Shifts oppose change; catalyst doesn't shift position.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Shifts right — 4 mol gas to 2 mol product.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Fewer gas moles favoured at high pressure.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Shifts left — endothermic direction favoured at high T.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Reverse of exothermic forward reaction.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Shifts right — more reactant consumed to replace removed $H_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Position moves toward products.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "No — catalyst speeds both forward and reverse equally.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Equilibrium reached faster but position unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$K$ value also unchanged.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) right (b) left (c) right (d) no shift, faster only",
          },
        },
        {
          id: "cial-c-u5-lc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $CO + H_2O(g) \\rightleftharpoons CO_2 + H_2$, the number of moles of gas is the same on both sides. Increasing the pressure will...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift equilibrium to the right" },
              { id: "b", text: "Increase $K_c$" },
              { id: "c", text: "Shift equilibrium to the left" },
              { id: "d", text: "Have no effect on the position" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier pressure",
                statement: "Equal gas moles each side — pressure has no effect.",
              },
            ],
            steps: [
              {
                reasoning: "$\\Delta n=0$, so pressure does not favour either side.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No effect",
          },
        },
        {
          id: "cial-c-u5-lc-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "For an endothermic equilibrium ($\\Delta H > 0$), predict the effect of decreasing the temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier temperature",
                statement: "Lower T favours the exothermic direction.",
              },
            ],
            steps: [
              {
                reasoning: "Forward reaction is endothermic; reverse is exothermic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lowering T favours the exothermic (reverse) direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equilibrium shifts left (toward reactants).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shifts left (reactants)",
          },
        },
        {
          id: "cial-c-u5-lc-q7",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $N_2O_4 \\rightleftharpoons 2NO_2$, $K_p = 0.15$ atm at a certain temperature. If the equilibrium partial pressure of $N_2O_4$ is $0.20$ atm, calculate $p_{NO_2}$.",
          response: {
            type: "numeric",
            parts: [{ label: "pNO2", answer: 0.173 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_p$",
                statement: "$K_p=\\frac{p_{NO_2}^2}{p_{N_2O_4}}$.",
              },
            ],
            steps: [
              {
                reasoning: "$K_p = \\frac{p_{NO_2}^2}{p_{N_2O_4}}$, so $p_{NO_2}^2 = K_p \\cdot p_{N_2O_4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$p_{NO_2}^2 = 0.15 \\times 0.20 = 0.030$.",
                working: "0.15 \\times 0.20 = 0.030",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$p_{NO_2} = \\sqrt{0.030}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$p_{NO_2} \\approx 0.173$ atm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.173$ atm",
          },
        },
        {
          id: "cial-c-u5-lc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the concentration of a product in an equilibrium mixture is suddenly increased, the equilibrium position shifts...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Depends on $K$" },
              { id: "b", text: "To the left, consuming some product" },
              { id: "c", text: "To the right, making more product" },
              { id: "d", text: "Not at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier concentration",
                statement: "System opposes the change — extra product is consumed.",
              },
            ],
            steps: [
              {
                reasoning: "More product shifts equilibrium left toward reactants.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "To the left",
          },
        },
        {
          id: "cial-c-u5-lc-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "State the conditions used in the Contact process for making sulfuric acid, and explain why the temperature is not lowered further even though the forward reaction is exothermic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Contact process",
                statement: "$\\sim 450$ °C, $\\sim 1$ atm, V$_2$O$_5$ catalyst.",
              },
            ],
            steps: [
              {
                reasoning: "Conditions: about $450$ °C, near atmospheric pressure, V$_2$O$_5$ catalyst.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower T would increase yield (exothermic) but the rate would become too slow for economic production.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "V$_2$O$_5$ catalyst speeds attainment of equilibrium without changing yield.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasoned compromise between yield and rate.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "$\\sim450$ °C, $\\sim1$ atm, V$_2$O$_5$ — T is a rate/yield compromise",
          },
        },
        {
          id: "cial-c-u5-lc-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which change does NOT increase the equilibrium yield of NH$_3$ in the Haber process?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decreasing the temperature" },
              { id: "b", text: "Removing NH$_3$ as it forms" },
              { id: "c", text: "Increasing the pressure" },
              { id: "d", text: "Adding more Fe catalyst" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier",
                statement: "Catalyst changes rate only, never equilibrium yield.",
              },
            ],
            steps: [
              {
                reasoning: "Fe catalyst speeds both directions equally — yield unchanged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Adding more Fe catalyst",
          },
        },
        {
          id: "cial-c-u5-lc-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $PCl_5 \\rightleftharpoons PCl_3 + Cl_2$, $0.10$ mol PCl$_5$, $0.20$ mol PCl$_3$ and $0.20$ mol Cl$_2$ are present at equilibrium in $1.0$ dm$^3$. Calculate $K_c$.",
          response: {
            type: "numeric",
            parts: [{ label: "Kc", answer: 0.4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_c$",
                statement: "$K_c=\\frac{[PCl_3][Cl_2]}{[PCl_5]}$; concentration $=$ moles $/$ volume.",
              },
            ],
            steps: [
              {
                reasoning: "In $1.0$ dm$^3$, $[PCl_5]=0.10$, $[PCl_3]=0.20$, $[Cl_2]=0.20$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_c = \\frac{0.20 \\times 0.20}{0.10}$.",
                working: "\\frac{0.04}{0.10}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Numerator $=0.04$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_c = 0.40$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.40$ mol dm$^{-3}$",
          },
        },
        {
          id: "cial-c-u5-lc-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing the pressure has no effect on the equilibrium position of $H_2 + I_2 \\rightleftharpoons 2HI$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier pressure",
                statement: "Pressure shifts toward fewer gas moles only when $\\Delta n \\neq 0$.",
              },
            ],
            steps: [
              {
                reasoning: "2 mol gas on each side, so $\\Delta n = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Higher pressure compresses all species equally; neither side is favoured.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equilibrium position and $K_c$ are unchanged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\Delta n=0$, so no shift",
          },
        },
        {
          id: "cial-c-u5-lc-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A catalyst affects a chemical equilibrium by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shifting it toward the products" },
              { id: "b", text: "Speeding attainment of equilibrium without shifting it" },
              { id: "c", text: "Making the reaction irreversible" },
              { id: "d", text: "Increasing the value of $K$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Catalyst and equilibrium",
                statement: "Catalyst lowers activation energy for both directions equally.",
              },
            ],
            steps: [
              {
                reasoning: "Both forward and reverse rates increase equally; position and $K$ unchanged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Speeds attainment, no shift",
          },
        },
        {
          id: "cial-c-u5-lc-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $2NO + O_2 \\rightleftharpoons 2NO_2$, $K_c = 5.0$ dm$^3$ mol$^{-1}$ at 300 K. Calculate $K_p$ ($R = 8.31$ J K$^{-1}$ mol$^{-1}$).",
          response: {
            type: "numeric",
            parts: [{ label: "Kp", answer: 0.00201 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "$K_p = K_c(RT)^{\\Delta n}$",
                statement: "$\\Delta n = 2-3 = -1$.",
              },
            ],
            steps: [
              {
                reasoning: "$K_p = K_c(RT)^{-1} = \\frac{K_c}{RT}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$RT = 8.31 \\times 300 = 2493$.",
                working: "8.31 \\times 300 = 2493",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_p = \\frac{5.0}{2493}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$K_p \\approx 2.01 \\times 10^{-3}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.01\\times10^{-3}$",
          },
        },
        {
          id: "cial-c-u5-lc-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the Haber process $N_2 + 3H_2 \\rightleftharpoons 2NH_3$ ($\\Delta H = -92$ kJ mol$^{-1}$), predict the effect on both the equilibrium yield and the rate of: (a) increasing temperature; (b) removing NH$_3$ as it forms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier",
                statement: "Yield shifts by Le Chatelier; rate depends on temperature and concentrations.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Higher T shifts equilibrium left — yield decreases (endothermic direction).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(a) Rate increases because molecules have more kinetic energy and collide more effectively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Removing NH$_3$ shifts equilibrium right — yield increases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Rate may slow slightly as product concentration falls, but equilibrium is driven forward.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) yield down, rate up (b) yield up, rate roughly steady/slower",
          },
        },
        {
          id: "cial-c-u5-lc-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Le Chatelier's principle — extended.",
          parts: [
            {
              label: "a",
              prompt: "State Le Chatelier's principle.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "For $N_2 + 3H_2 \\rightleftharpoons 2NH_3$, state the effect of adding more $N_2$.",
              marks: 1,
            },
            {
              label: "c",
              prompt: "State the rule for the effect of pressure on a gaseous equilibrium.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "State the rule for the effect of temperature on an equilibrium.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "What is the effect of a catalyst on the equilibrium position?",
              marks: 1,
            },
            {
              label: "f",
              prompt: "For the Haber process, predict the shift when (i) pressure is increased and (ii) temperature is increased.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Chatelier",
                statement: "System opposes imposed change; catalyst does not shift position.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A system at equilibrium opposes any imposed change so as to minimise its effect.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Adding $N_2$ (a reactant) shifts equilibrium right toward NH$_3$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Higher pressure shifts toward fewer moles of gas; lower pressure toward more.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "No effect if $\\Delta n = 0$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Higher T shifts in the endothermic direction; lower T in the exothermic direction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Temperature is the only factor (of these) that changes $K$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning: "No shift — catalyst speeds both directions equally.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "f",
                reasoning: "(i) Pressure increase shifts right (4 mol $\\to$ 2 mol gas).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "f",
                reasoning: "(ii) Temperature increase shifts left (endothermic direction).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) opposes change (b) right (c) fewer gas moles (d) endothermic direction (e) no shift (f) right/left",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-c-u5-equilibrium-notes",
      title: "Chemical equilibrium — revision notes",
      summary:
        "$K_c$, $K_p$ expressions and Le Chatelier shifts.",
      sections: [
        {
          heading: "$K$ expressions",
          body: "$K_c=\\frac{[products]^{powers}}{[reactants]^{powers}}$; omit solids/liquids. $K_p$ uses partial pressures for gases; $K_p=K_c(RT)^{\\Delta n}$. $K$ changes only with temperature — never with concentration, pressure or catalyst.",
        },
        {
          heading: "Le Chatelier",
          body: "Concentration up $\\to$ shift away. Pressure up $\\to$ shift to fewer gas moles. Temperature up $\\to$ shift endothermic. Catalyst $\\to$ faster equilibrium, same position. Haber: high P, moderate T, Fe catalyst; Contact: V$_2$O$_5$ catalyst.",
        },
        {
          heading: "Exam checklist",
          body: "Write powers = coefficients exactly. For pressure questions count gas moles each side first. For temperature, identify which direction is endothermic before predicting the shift.",
        },
      ],
    },
  ],
};
