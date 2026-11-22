import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "chemhl-u4-lesson-4-2",
  code: "4-2",
  title: "pH Curves and Acid–Base Calculations",
  goal: "I CAN calculate the pH of weak acids, weak bases and buffer solutions, sketch and interpret titration curves, and select appropriate indicators for acid–base titrations.",
  standards: ["Paper 1", "Paper 2", "AHL R3"],
  vocabulary: [
    {
      term: "pH",
      definition:
        "The negative logarithm of hydrogen ion concentration: $pH = -\\log[H^+]$; each unit represents a tenfold change in [H$^+$].",
    },
    {
      term: "pOH",
      definition:
        "$pOH = -\\log[OH^-]$; related to pH by $pH + pOH = 14$ at 298 K.",
    },
    {
      term: "pKa",
      definition:
        "The negative logarithm of the acid dissociation constant: $pK_a = -\\log K_a$; weaker acids have higher pKa.",
    },
    {
      term: "Equivalence point",
      definition:
        "The point in a titration where moles of acid equal moles of base added; the steepest part of the curve.",
    },
    {
      term: "Half-equivalence point",
      definition:
        "The point where half the acid has been neutralised; here pH = pKa for weak acid–strong base titrations.",
    },
    {
      term: "Buffer region",
      definition:
        "The relatively flat part of a titration curve before the equivalence point where the solution resists pH change.",
    },
  ],
  concepts: [
    {
      id: "chemhl-u4-ph-calcs",
      title: "pH calculations for weak acids and bases",
      skill:
        "Calculate pH of weak acid and weak base solutions using Ka and Kb, including the validity of approximations.",
      lesson: {
        sections: [
          {
            heading: "Weak acid pH",
            body: "For a weak acid HA with concentration $c$ and $K_a$: set up $K_a = \\frac{x^2}{c - x}$ where $x = [H^+]$. If $K_a \\ll c$ (typically $K_a/c < 0.01$), the approximation $[H^+] \\approx \\sqrt{K_a c}$ is valid. Otherwise solve the quadratic. The pH is $-\\log[H^+]$. For polyprotic acids only the first dissociation matters significantly for pH.",
          },
          {
            heading: "Weak base pH",
            body: "For a weak base B with $K_b = \\frac{[BH^+][OH^-]}{[B]}$: $[OH^-] \\approx \\sqrt{K_b c}$, then $pOH = -\\log[OH^-]$ and $pH = 14 - pOH$. Alternatively use $K_a$ of the conjugate acid: $K_a \\cdot K_b = K_w = 1.0 \\times 10^{-14}$, so $pK_a + pK_b = 14$.",
          },
          {
            heading: "Salt solutions",
            body: "The pH of a salt solution depends on the ions: salts of strong acid + strong base (NaCl) are neutral (pH 7); salts of weak acid + strong base (NaA) are basic (A$^-$ hydrolyses); salts of strong acid + weak base (BH$^+$Cl$^-$) are acidic (BH$^+$ hydrolyses); salts of weak acid + weak base depend on relative $K_a$ and $K_b$. This explains why NH$_4$Cl solution is acidic and NaOAc solution is basic.",
          },
        ],
        keyFormulas: [
          {
            name: "Weak acid",
            statement:
              "$[H^+] \\approx \\sqrt{K_a c}$ (when $K_a \\ll c$); $pH = -\\log[H^+]$.",
          },
          {
            name: "Weak base",
            statement:
              "$[OH^-] \\approx \\sqrt{K_b c}$; $pH = 14 + \\log[OH^-]$ or $14 - pOH$.",
          },
          {
            name: "Ka–Kb relation",
            statement: "$K_a \\cdot K_b = K_w = 10^{-14}$; $pK_a + pK_b = 14$.",
          },
        ],
        workedExample: {
          problem:
            "Calculate the pH of $0.050$ M NH$_3$ solution given $K_b = 1.8 \\times 10^{-5}$.",
          solution:
            "$[OH^-] \\approx \\sqrt{K_b c} = \\sqrt{1.8 \\times 10^{-5} \\times 0.050} = \\sqrt{9.0 \\times 10^{-7}} = 9.5 \\times 10^{-4}$ M. $pOH = 3.02$, $pH = 14 - 3.02 = 10.98$.",
        },
      },
      questions: [
        {
          id: "chemhl-u4-ph-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The pH of a $0.001$ M HCl solution is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "7" },
              { id: "c", text: "3" },
              { id: "d", text: "11" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pH",
                statement:
                  "$pH = -\\log[H^+]$; strong acid fully ionizes so $[H^+] = c$.",
              },
            ],
            steps: [
              {
                reasoning: "$[H^+] = 0.001 = 10^{-3}$ M → $pH = 3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** pH = 3",
            commonErrors: [
              "Forgetting strong acids fully ionize — [H$^+$] = concentration.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A weak base B has $K_b = 1.8 \\times 10^{-5}$ and concentration $0.10$ M. Calculate its pH.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak base pH",
                statement: "$[OH^-] \\approx \\sqrt{K_b c}$; $pH = 14 - pOH$.",
              },
            ],
            steps: [
              {
                reasoning: "Calculate [OH$^-$].",
                working:
                  "[OH^-] = \\sqrt{1.8 \\times 10^{-5} \\times 0.10} = 1.34 \\times 10^{-3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pOH = -\\log(1.34 \\times 10^{-3}) = 2.87$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH = 14 - 2.87 = 11.13$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$pH \\approx 11.1$",
            commonErrors: [
              "Using $[H^+] = \\sqrt{K_b c}$ — must find [OH$^-$] first then convert.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a solution of NH$_4$Cl is acidic while a solution of NaOAc (sodium ethanoate) is basic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Salt hydrolysis",
                statement:
                  "Ions from weak acids/bases hydrolyse water, making salt solutions acidic or basic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NH$_4^+$ is the conjugate acid of weak base NH$_3$; it donates H$^+$ to water.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Cl$^-$ is the conjugate base of strong acid HCl — does not hydrolyse.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Net result: [H$^+$] > [OH$^-$] → acidic.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "OAc$^-$ is the conjugate base of weak acid HOAc; it accepts H$^+$ from water.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "NH$_4^+$ hydrolyses (acidic); OAc$^-$ hydrolyses (basic).",
            commonErrors: [
              "Saying 'NH$_4$Cl is acidic because NH$_3$ is basic' — it's the conjugate acid NH$_4^+$ that matters.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Ethanoic acid (CH$_3$COOH, $K_a = 1.8 \\times 10^{-5}$) is titrated with NaOH.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the pH of $0.10$ M ethanoic acid.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "State the pH at the equivalence point and explain why it is not 7.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Identify the species present at the half-equivalence point and state the pH there.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Choose an appropriate indicator and justify your choice.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak acid pH",
                statement: "$[H^+] \\approx \\sqrt{K_a c}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$[H^+] = \\sqrt{1.8 \\times 10^{-5} \\times 0.10} = 1.34 \\times 10^{-3}$; $pH = 2.87$.",
                marks: 1,
                markCode: "M",
              },
              { part: "a", reasoning: "pH ≈ 2.87.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning:
                  "At equivalence only CH$_3$COO$^-$ (conjugate base) is present.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "It hydrolyses: OAc$^-$ + H$_2$O ⇌ HOAc + OH$^-$ → pH > 7.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "At half-equivalence [HOAc] = [OAc$^-$] — a buffer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "pH = pK$_a$ = $-\\log(1.8 \\times 10^{-5}) = 4.74$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Indicator needed with pK$_a$ near the equivalence point pH (~8-9 for this titration).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Phenolphthalein (changes ~8.3-10) is suitable; methyl orange would change too early.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) pH≈2.87. (b) pH>7 — OAc$^-$ hydrolyses. (c) pH=pKa=4.74. (d) Phenolphthalein.",
            commonErrors: [
              "Choosing methyl orange — it changes at pH ~4, far from the weak-acid equivalence point.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The pH of a $0.01$ M NaOH solution is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "13" },
              { id: "b", text: "7" },
              { id: "c", text: "12" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pH",
                statement:
                  "$pOH = -\\log[OH^-]$; strong base fully ionizes so $[OH^-] = c$; $pH = 14 - pOH$.",
              },
            ],
            steps: [
              {
                reasoning: "$[OH^-] = 0.01 = 10^{-2}$ → $pOH = 2$ → $pH = 12$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** pH = 12",
            commonErrors: ["Reporting pOH = 2 as the pH."],
          },
        },
        {
          id: "chemhl-u4-ph-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The approximation $[H^+] \\approx \\sqrt{K_a c}$ for a weak acid is valid when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$K_a = c$" },
              { id: "b", text: "$K_a \\ll c$ (typically $K_a/c < 0.01$)" },
              { id: "c", text: "The acid is strong" },
              { id: "d", text: "The solution is very dilute" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weak acid approximation",
                statement:
                  "If $K_a \\ll c$, the amount ionized $x$ is negligible compared with $c$, so $[H^+] \\approx \\sqrt{K_a c}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The approximation assumes $c - x \\approx c$, valid only when $x \\ll c$ i.e. $K_a \\ll c$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $K_a \\ll c$",
            commonErrors: [
              "Applying the approximation when Ka is comparable to c — the quadratic must be solved.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate the pH of a $2.0 \\times 10^{-4}$ M HCl solution.",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 3.7, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pH",
                statement: "$pH = -\\log[H^+]$; strong acid fully ionizes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[H^+] = 2.0\\times10^{-4}$ → $pH = -\\log(2.0\\times10^{-4})$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$pH = 3.70$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$pH \\approx 3.70$",
            commonErrors: [
              "Forgetting the coefficient 2.0 — pH is not exactly 3.70 by coincidence; log must be evaluated.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the pH of a $0.10$ M ethanoic acid solution ($K_a = 1.8 \\times 10^{-5}$).",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 2.87, tolerance: 0.02 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak acid pH",
                statement:
                  "$[H^+] \\approx \\sqrt{K_a c}$ when $K_a \\ll c$; here $K_a/c = 1.8\\times10^{-4} \\ll 0.01$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[H^+] = \\sqrt{1.8\\times10^{-5} \\times 0.10} = 1.34\\times10^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH = -\\log(1.34\\times10^{-3})$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$pH \\approx 2.87$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$pH \\approx 2.87$",
            commonErrors: ["Using $[H^+] = K_a c$ without the square root."],
          },
        },
        {
          id: "chemhl-u4-ph-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the pH of a $0.050$ M NH$_3$ solution ($K_b = 1.8 \\times 10^{-5}$).",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 11.0, tolerance: 0.02 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak base pH",
                statement: "$[OH^-] \\approx \\sqrt{K_b c}$; $pH = 14 - pOH$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[OH^-] = \\sqrt{1.8\\times10^{-5} \\times 0.050} = 9.5\\times10^{-4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pOH = -\\log(9.5\\times10^{-4}) = 3.02$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH = 14 - 3.02 \\approx 11.0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$pH \\approx 11.0$",
            commonErrors: [
              "Taking $pH = -\\log[OH^-]$ directly — must convert via pOH.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Given $pK_b$ of NH$_3$ = 4.75, the $pK_a$ of its conjugate acid NH$_4^+$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4.75" },
              { id: "b", text: "19.25" },
              { id: "c", text: "9.25" },
              { id: "d", text: "14.0" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ka–Kb relation",
                statement: "$pK_a + pK_b = 14$ for conjugate acid–base pairs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$pK_a(NH_4^+) = 14 - pK_b(NH_3) = 14 - 4.75 = 9.25$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 9.25",
            commonErrors: [
              "Forgetting the sum is 14 — pKa of the conjugate acid is NOT equal to pKb of the base.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Calculate the pH of a $0.20$ M HF solution ($K_a = 6.8 \\times 10^{-4}$).",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 1.93, tolerance: 0.02 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak acid pH",
                statement:
                  "$[H^+] \\approx \\sqrt{K_a c}$; check $K_a/c = 3.4\\times10^{-3} < 0.01$ — approximation valid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check approximation: $K_a/c = 6.8\\times10^{-4}/0.20 = 3.4\\times10^{-3} < 0.01$ — valid.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "$[H^+] = \\sqrt{6.8\\times10^{-4} \\times 0.20} = \\sqrt{1.36\\times10^{-4}} = 0.0117$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$pH = -\\log(0.0117)$.", marks: 1, markCode: "M" },
              { reasoning: "$pH \\approx 1.93$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$pH \\approx 1.93$",
            commonErrors: [
              "HF is weak but relatively strong — still use Ka, not full ionization.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following salt solutions is acidic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NaOAc" },
              { id: "b", text: "NaCl" },
              { id: "c", text: "NH$_4$Cl" },
              { id: "d", text: "Na$_2$CO$_3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Salt hydrolysis",
                statement:
                  "Salt of strong acid + weak base is acidic (conjugate acid hydrolyses).",
              },
            ],
            steps: [
              {
                reasoning:
                  "NH$_4^+$ is the conjugate acid of weak base NH$_3$ → acidic; NaCl neutral; NaOAc and Na$_2$CO$_3$ contain conjugate bases → basic.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** NH$_4$Cl",
            commonErrors: [
              "Choosing NaOAc — the ethanoate ion makes the solution basic.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "A weak acid HA has $K_a = 0.050$ and concentration $0.10$ mol dm$^{-3}$. Calculate the pH, showing why the approximation $[H^+] \\approx \\sqrt{K_a c}$ fails here.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak acid pH",
                statement:
                  "$K_a = \\frac{x^2}{c-x}$; solve quadratic when $K_a/c$ is not small.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check: $K_a/c = 0.050/0.10 = 0.50 \\gg 0.01$ — approximation invalid.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Set up $\\frac{x^2}{0.10 - x} = 0.050$ → $x^2 + 0.050x - 0.005 = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solve: $x = \\frac{-0.050 + \\sqrt{0.0025 + 0.020}}{2} = \\frac{-0.050 + 0.150}{2} = 0.050$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$[H^+] = 0.050$ mol dm$^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH = -\\log(0.050) \\approx 1.30$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$pH \\approx 1.30$",
            commonErrors: [
              "Using $\\sqrt{K_a c} = 0.0707$ without checking — gives wrong pH.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Calculate the pOH of a $0.01$ M NaOH solution.",
          response: {
            type: "numeric",
            parts: [{ label: "pOH", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "pOH",
                statement: "$pOH = -\\log[OH^-]$; strong base fully ionizes.",
              },
            ],
            steps: [
              {
                reasoning: "$[OH^-] = 0.01 = 10^{-2}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$pOH = 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$pOH = 2$",
            commonErrors: ["Answering pH = 2 instead of pOH."],
          },
        },
        {
          id: "chemhl-u4-ph-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Carbonic acid H$_2$CO$_3$ has $K_{a1} = 4.3 \\times 10^{-7}$ and $K_{a2} = 5.6 \\times 10^{-11}$.",
          parts: [
            {
              label: "a",
              prompt:
                "State which $K_a$ value determines the pH of a carbonic acid solution and explain why.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Calculate the pH of $0.10$ M H$_2$CO$_3$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain why the second dissociation can be ignored for the pH calculation.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Estimate the pH of an NaHCO$_3$ solution, explaining your reasoning.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polyprotic acids",
                statement:
                  "Only the first dissociation contributes significantly to [H$^+$] because $K_{a1} \\gg K_{a2}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$K_{a1}$ determines pH — it is ~$10^4$ times larger than $K_{a2}$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "The first dissociation produces almost all the H$^+$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "$[H^+] \\approx \\sqrt{4.3\\times10^{-7} \\times 0.10} = \\sqrt{4.3\\times10^{-8}} = 2.07\\times10^{-4}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$pH = -\\log(2.07\\times10^{-4}) \\approx 3.68$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$K_{a2} = 5.6\\times10^{-11}$ is negligible compared with $K_{a1} = 4.3\\times10^{-7}$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "The second step contributes virtually no additional H$^+$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "HCO$_3^-$ is amphiprotic; pH ≈ $\\frac{pK_{a1} + pK_{a2}}{2} = \\frac{6.37 + 10.25}{2} \\approx 8.3$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Solution is weakly basic, consistent with NaHCO$_3$ being a salt of weak acid and strong base.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $K_{a1}$ dominates. (b) pH≈3.68. (c) $K_{a2} \\ll K_{a1}$. (d) pH≈8.3 (amphiprotic average).",
            commonErrors: [
              "Using $K_{a2}$ for the pH — it is ~10$^4$ times smaller.",
            ],
          },
        },
        {
          id: "chemhl-u4-ph-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The pH of a $1.0 \\times 10^{-8}$ M HCl solution is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water autoionisation",
                statement:
                  "At very low [H$^+$], water's own ionisation ($10^{-7}$ M) dominates; an acid cannot make the solution basic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[H^+]_{total} = 10^{-8} + 10^{-7} \\approx 1.1\\times10^{-7}$ → pH ≈ 6.96 ≈ 7.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Therefore choice (b) is correct — pH cannot exceed 7 for an acidic solution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** ≈ 7",
            commonErrors: [
              "Answering pH = 8 — forgetting water autoionisation sets a floor near 7.",
            ],
          },
        },
      ],
    },
    {
      id: "chemhl-u4-titration-curves",
      title: "Interpreting titration curves",
      skill:
        "Compare titration curves for strong/weak acid–base combinations and extract pKa, equivalence volume and buffer capacity from curve features.",
      lesson: {
        sections: [
          {
            heading: "Four curve types",
            body: "Strong acid–strong base: starts pH ~1, equivalence at pH 7, symmetric S-curve. Weak acid–strong base: starts pH ~3, buffer region before equivalence, equivalence pH > 7, half-equivalence at pH = pKa. Strong acid–weak base: starts pH ~13, equivalence pH < 7. Weak acid–weak base: equivalence pH depends on relative strengths — near 7 if comparable.",
          },
          {
            heading: "Reading the curve",
            body: "The equivalence point is where the curve is steepest (maximum slope) — found by drawing tangent lines or locating the inflection. The volume at equivalence gives moles of acid/base. For weak acid titrations, the half-equivalence point (half the equivalence volume) gives pH = pKa directly. The buffer region is where pH changes slowly — maximum buffer capacity is at half-equivalence.",
          },
          {
            heading: "Choosing indicators",
            body: "An indicator should change colour within the steep part of the curve near the equivalence point. For strong acid–strong base (equivalence pH 7) either methyl orange or phenolphthalein works. For weak acid–strong base (equivalence pH >7) phenolphthalein is needed. For strong acid–weak base (equivalence pH <7) methyl orange or methyl red. The indicator's transition range should match the equivalence pH ±1.",
          },
        ],
        keyFormulas: [
          {
            name: "Equivalence point",
            statement:
              "Steepest point of titration curve; moles acid = moles base.",
          },
          {
            name: "Half-equivalence",
            statement:
              "Half the equivalence volume; pH = pKa for weak acid–strong base.",
          },
          {
            name: "Indicator choice",
            statement:
              "Indicator pK$_a$ should be within ±1 of the equivalence point pH.",
          },
        ],
        workedExample: {
          problem:
            "In a titration of ethanoic acid with NaOH, the equivalence point occurs at 25.0 cm³ of NaOH and the pH there is 8.7. Estimate the pKa of ethanoic acid.",
          solution:
            "At half-equivalence (12.5 cm³ NaOH), pH = pKa. From a typical curve the pH at 12.5 cm³ is ~4.7, so pKa ≈ 4.7 — consistent with ethanoic acid's known pKa of 4.74.",
        },
      },
      questions: [
        {
          id: "chemhl-u4-tc-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a weak acid–strong base titration, the equivalence point pH is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exactly 7" },
              { id: "b", text: "Below 7" },
              { id: "c", text: "Above 7" },
              { id: "d", text: "Equal to pKa" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equivalence pH",
                statement:
                  "Weak acid–strong base equivalence contains the conjugate base → basic solution → pH > 7.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At equivalence only the salt (conjugate base + Na$^+$) is present; A$^-$ hydrolyses.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Above 7",
            commonErrors: [
              "Saying pH = 7 — that's only for strong acid–strong base.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A titration curve shows the equivalence point at pH 8.9. Which indicator is most suitable and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indicator selection",
                statement:
                  "Indicator transition range should be near the equivalence pH.",
              },
            ],
            steps: [
              {
                reasoning:
                  "pH 8.9 is basic — the titration is weak acid–strong base.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Phenolphthalein changes colour around pH 8.3-10 — matches well.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Methyl orange (changes ~3-4) would change far too early.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Phenolphthalein — its transition range (~8-10) matches the basic equivalence point.",
            commonErrors: [
              "Choosing methyl orange because 'it's an acid-base indicator' — range matters.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "In a titration of a weak monoprotic acid with NaOH, the equivalence point is at 20.0 cm³ and pH 9.0. The pH at 10.0 cm³ is 4.8. Determine the pKa of the acid and justify your method.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half-equivalence",
                statement:
                  "At half the equivalence volume, pH = pKa for weak acid–strong base.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Half-equivalence is at 10.0 cm³ NaOH (half of 20.0).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At this point [HA] = [A$^-$] — buffer with equal concentrations.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Henderson–Hasselbalch: $pH = pK_a + \\log 1 = pK_a$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Therefore pKa = 4.8.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$pK_a = 4.8$",
            commonErrors: [
              "Reading pKa from the equivalence point instead of the half-equivalence point.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Compare the titration curves for (a) HCl vs NaOH and (b) CH$_3$COOH vs NaOH, both starting with 25.0 cm³ of 0.10 M acid.",
          parts: [
            {
              label: "a",
              prompt:
                "State the initial pH and equivalence pH for each titration.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Identify which curve has a buffer region and explain why.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "State which indicator is appropriate for each titration.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Curve comparison",
                statement:
                  "Strong acid starts low and ends at pH 7; weak acid has buffer region and ends above 7.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "HCl: initial pH ≈ 1 (strong, fully ionized); equivalence pH = 7.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "CH$_3$COOH: initial pH ≈ 2.9 (weak, partial ionization); equivalence pH > 7.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Both reach the same equivalence volume (same moles).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The weak acid curve has a buffer region before equivalence.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "HA/A$^-$ coexist and resist pH change; strong acid has no such buffer.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "HCl–NaOH: either methyl orange or phenolphthalein (equivalence pH 7).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "CH$_3$COOH–NaOH: phenolphthalein (equivalence pH > 7).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Methyl orange would change too early for the weak acid titration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) HCl: pH~1→7; HOAc: pH~2.9→>7. (b) Weak acid has buffer region. (c) HCl: either; HOAc: phenolphthalein.",
            commonErrors: [
              "Forgetting the equivalence volume is the same — same moles of acid.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "On a pH titration curve, the equivalence point is located at:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The steepest part of the curve (maximum slope)",
              },
              { id: "b", text: "The initial pH" },
              { id: "c", text: "The buffer region" },
              { id: "d", text: "The point where pH = 7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equivalence point",
                statement:
                  "The equivalence point is the inflection point where the slope is greatest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At equivalence the solution composition changes most rapidly → steepest slope.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** The steepest part of the curve",
            commonErrors: [
              "Assuming equivalence is always at pH 7 — only true for strong acid–strong base.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a strong acid–weak base titration, the pH at the equivalence point is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Below 7" },
              { id: "b", text: "Above 7" },
              { id: "c", text: "Exactly 7" },
              { id: "d", text: "Equal to pKb" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equivalence pH",
                statement:
                  "Strong acid–weak base equivalence contains the conjugate acid → acidic → pH < 7.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The salt formed contains BH$^+$ which hydrolyses to give H$^+$.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Below 7",
            commonErrors: [
              "Confusing with weak acid–strong base, where pH > 7.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q7",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 2,
          stem: "A $25.0$ cm$^3$ sample of $0.10$ M HCl is titrated with $0.10$ M NaOH. Calculate the volume of NaOH needed to reach the equivalence point.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume / cm$^3$", answer: 25.0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Titration stoichiometry",
                statement:
                  "At equivalence, moles acid = moles base: $c_aV_a = c_bV_b$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$V_b = \\frac{c_aV_a}{c_b} = \\frac{0.10 \\times 25.0}{0.10}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$V_b = 25.0$ cm$^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25.0$ cm$^3$",
            commonErrors: [
              "Inverting the ratio — equal concentrations give equal volumes here.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a weak acid–strong base titration, the equivalence point is reached at $30.0$ cm$^3$ of NaOH. At what volume is the half-equivalence point, and what is the pH there if $pK_a = 4.74$?",
          response: {
            type: "numeric",
            parts: [
              { label: "Half-equivalence volume / cm$^3$", answer: 15.0 },
              { label: "pH", answer: 4.74, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half-equivalence",
                statement:
                  "At half the equivalence volume, [HA] = [A$^-$] so pH = pK$_a$.",
              },
            ],
            steps: [
              {
                reasoning: "Half-equivalence volume = $30.0/2 = 15.0$ cm$^3$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At this point pH = pK$_a$ = 4.74.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15.0$ cm$^3$; pH = 4.74",
            commonErrors: [
              "Using the full equivalence volume for the half-equivalence point.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "At the half-equivalence point of a weak acid–NaOH titration the pH is measured as $4.8$. Calculate the $K_a$ of the acid.",
          response: {
            type: "numeric",
            parts: [{ label: "$K_a$", answer: 1.58e-5, tolerance: 0.1e-5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half-equivalence",
                statement:
                  "pH = pK$_a$ at half-equivalence; $K_a = 10^{-pK_a}$.",
              },
            ],
            steps: [
              { reasoning: "pK$_a$ = 4.8.", marks: 1, markCode: "M" },
              { reasoning: "$K_a = 10^{-4.8}$.", marks: 1, markCode: "M" },
              {
                reasoning: "$K_a \\approx 1.6 \\times 10^{-5}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$K_a \\approx 1.6 \\times 10^{-5}$",
            commonErrors: [
              "Answering pKa instead of Ka, or using $10^{+4.8}$.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The most suitable indicator for a strong acid–weak base titration (equivalence pH ≈ 5) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Litmus only" },
              { id: "b", text: "Phenolphthalein" },
              { id: "c", text: "No indicator works" },
              { id: "d", text: "Methyl orange or methyl red" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indicator selection",
                statement:
                  "Indicator transition range should match the equivalence pH; acidic equivalence → methyl orange/red.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Equivalence pH ≈ 5 is acidic — methyl orange (≈3.1-4.4) or methyl red (≈4.4-6.2) match.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Methyl orange or methyl red",
            commonErrors: [
              "Choosing phenolphthalein — it changes at pH ~8-10, too basic.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a weak acid–strong base titration, the buffer region of the curve occurs:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the very start of the titration" },
              { id: "b", text: "After the equivalence point" },
              {
                id: "c",
                text: "Before the equivalence point, where HA and A$^-$ coexist",
              },
              { id: "d", text: "Exactly at the equivalence point" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Buffer region",
                statement:
                  "Buffer capacity is greatest where comparable amounts of HA and A$^-$ coexist — before equivalence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Before equivalence, added OH$^-$ converts some HA to A$^-$, creating a buffer; pH changes slowly.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Before the equivalence point",
            commonErrors: [
              "Placing the buffer region at equivalence — pH changes fastest there.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A $20.0$ cm$^3$ sample of $0.15$ M ethanoic acid is titrated with $0.10$ M NaOH. Calculate the volume of NaOH required to reach the equivalence point.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume / cm$^3$", answer: 30.0, tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Titration stoichiometry",
                statement: "$c_aV_a = c_bV_b$ at equivalence (1:1 monoprotic).",
              },
            ],
            steps: [
              {
                reasoning: "Moles acid = $0.15 \\times 20.0 = 3.0$ mmol.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Volume NaOH = $\\frac{3.0}{0.10}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate: $V_b = 30.0$ cm$^3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: $30.0$ cm$^3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30.0$ cm$^3$",
            commonErrors: [
              "Using $20.0/0.15$ style inverted ratios — compute moles first.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why the titration curve for a weak acid with a strong base has (a) a less steep equivalence jump and (b) a buffer region, compared with a strong acid–strong base titration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Buffer region",
                statement:
                  "HA/A$^-$ coexistence resists pH change before equivalence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) At equivalence the solution contains A$^-$ which hydrolyses — a weak base — so pH is buffered near the equivalence point.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "(a) The conjugate base partially neutralises added acid/base, reducing the slope.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "(b) Before equivalence, added OH$^-$ converts HA to A$^-$; both species coexist in comparable amounts.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "(b) The HA/A$^-$ pair resists pH change — maximum buffer capacity near half-equivalence.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "In a strong acid titration there is no buffer — H$^+$ and OH$^-$ react directly with a sharp jump.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Weak acid curve: smaller jump (conjugate base buffers) + buffer region before equivalence.",
            commonErrors: [
              "Claiming weak acid titrations have no equivalence point — the jump is just smaller.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Calculate the initial pH of a $0.20$ M NH$_3$ solution before any titrant is added ($K_b = 1.8 \\times 10^{-5}$).",
          response: {
            type: "numeric",
            parts: [{ label: "pH", answer: 11.28, tolerance: 0.02 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Weak base pH",
                statement: "$[OH^-] \\approx \\sqrt{K_b c}$; $pH = 14 - pOH$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$[OH^-] = \\sqrt{1.8\\times10^{-5} \\times 0.20} = 1.90\\times10^{-3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pOH = -\\log(1.90\\times10^{-3}) = 2.72$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$pH = 14 - 2.72 = 11.28$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "pH ≈ 11.3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$pH \\approx 11.3$",
            commonErrors: [
              "This is the initial pH of a weak base–strong acid curve — starts basic, ends acidic.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A $25.0$ cm$^3$ sample of $0.050$ M HCl is titrated with $0.050$ M NaOH.",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the initial pH and the pH at the equivalence point.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate the volume of NaOH at the equivalence point.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "State the pH at the half-equivalence point and explain what species are present.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "State which indicators would be suitable and justify.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Strong acid–strong base titration",
                statement:
                  "Initial pH from [H$^+$]=c; equivalence pH = 7; equal concentrations → equal volumes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Initial: $[H^+] = 0.050$ → $pH = -\\log(0.050) = 1.30$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Equivalence: only NaCl (neutral salt) → pH = 7.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Correct values for both points.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$V_b = \\frac{0.050 \\times 25.0}{0.050} = 25.0$ cm$^3$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Half-equivalence (12.5 cm$^3$): equal moles HCl and NaCl remain — but NO buffer exists for strong acid.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Species: H$^+$, Cl$^-$, Na$^+$, and excess strong acid — pH is still determined by remaining HCl, around pH ≈ 1.6 (half neutralised).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Either methyl orange or phenolphthalein — equivalence pH = 7 lies in both transition ranges.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "The steep jump spans roughly pH 4–10 so both indicators change within it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Initial pH≈1.30, equivalence pH=7. (b) 25.0 cm$^3$. (c) No buffer — strong acid remains. (d) Methyl orange or phenolphthalein.",
            commonErrors: [
              "Claiming pH = pKa at half-equivalence — that rule only applies to weak acids.",
            ],
          },
        },
        {
          id: "chemhl-u4-tc-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The buffer capacity of a weak acid–strong base titration is greatest at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After the equivalence point" },
              { id: "b", text: "The equivalence point" },
              {
                id: "c",
                text: "The half-equivalence point, where [HA] = [A$^-$]",
              },
              { id: "d", text: "The start of the titration" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Buffer capacity",
                statement:
                  "Maximum resistance to pH change occurs when acid and conjugate base are present in equal amounts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At half-equivalence [HA] = [A$^-$]; the buffer is most effective there.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** The half-equivalence point",
            commonErrors: [
              "Choosing the equivalence point — pH changes most rapidly there.",
            ],
          },
        },
      ],
    },
  ],
};
