import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apch-u2-lesson-2-3",
  code: "2-3",
  title: "Chemical Equilibrium and Acids/Bases",
  goal: "I CAN apply equilibrium principles and classify acids and bases.",
  standards: ["EQ-1"],
  vocabulary: [
    { term: "Dynamic equilibrium", definition: "Forward and reverse rates equal — concentrations constant but reactions continue." },
    { term: "Equilibrium constant", definition: "$K = \\frac{[products]^{coeff}}{[reactants]^{coeff}}$ — measures position." },
    { term: "Le Chatelier", definition: "System shifts to counteract stress: concentration, pressure, temperature." },
    { term: "Acid", definition: "Proton donor ($H^+$); Arrhenius: produces $H^+$ in water." },
    { term: "Base", definition: "Proton acceptor ($OH^-$ Arrhenius: produces $OH^-$)." },
    { term: "pH", definition: "$-\\log[H^+]$ — below $7$ acidic, above $7$ basic." },
    { term: "Buffer", definition: "Resists pH change — weak acid + conjugate base pair." },
  ],
  concepts: [
    {
      id: "apch-u2-equilibrium-acids",
      title: "Equilibrium and acids/bases",
      skill: "Predict equilibrium shifts and classify acid-base behavior.",
      lesson: {
        sections: [
          {
            heading: "Equilibrium",
            body: "At equilibrium, $Q = K$ and rates balance — it's dynamic, not static. **Le Chatelier's principle**: adding reactant shifts right (more product); increasing pressure shifts toward fewer gas moles; raising temperature shifts toward endothermic direction. $K$ changes only with temperature.",
          },
          {
            heading: "Acids and bases",
            body: "Arrhenius: acids produce $H^+$, bases produce $OH^-$ in water. Brønsted-Lowry: acids donate $H^+$, bases accept $H^+$. **pH** $= -\\log[H^+]$: each unit is a $10\\times$ change in $[H^+]$. Strong acids/bases fully dissociate; weak ones partially. Buffers (weak acid + salt) resist pH change — vital in blood.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium constant", statement: "$K = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$" },
          { name: "pH", statement: "$pH = -\\log[H^+]$; $pOH = -\\log[OH^-]$; $pH + pOH = 14$" },
          { name: "Le Chatelier", statement: "Shift opposes applied stress" },
        ],
        workedExample: {
          problem: "$N_2 + 3H_2 \\leftrightarrow 2NH_3$ (exothermic). What happens to $K$ and position if temperature rises?",
          solution: "Raising T shifts equilibrium LEFT (toward reactants, endothermic direction) — less $NH_3$. $K$ decreases since the reaction is exothermic.",
        },
      },
      questions: [
        {
          id: "apch-u2-equilibrium-acids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At equilibrium, the rates of forward and reverse reactions are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "zero"
                    },
                    {
                              "id": "b",
                              "text": "equal"
                    },
                    {
                              "id": "c",
                              "text": "increasing"
                    },
                    {
                              "id": "d",
                              "text": "different"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dynamic equilibrium",
                              "statement": "Rates equal — concentrations constant but reactions continue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At equilibrium, forward rate = reverse rate; both reactions still occur.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Equal",
          "commonErrors": [
                    "Thinking equilibrium means reactions stop."
          ]
},
        },
        {
          id: "apch-u2-equilibrium-acids-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solution has $[H^+] = 10^{-3}$ M. Its pH is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$11$"
                    },
                    {
                              "id": "b",
                              "text": "$3$"
                    },
                    {
                              "id": "c",
                              "text": "$7$"
                    },
                    {
                              "id": "d",
                              "text": "$10$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "pH",
                              "statement": "$pH = -\\log(10^{-3}) = 3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$pH = -(-3) = 3$ — acidic.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Dropping the negative sign in the log."
          ]
},
        },
        {
          id: "apch-u2-equilibrium-acids-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For $A + B \\leftrightarrow C$ with $K = 10$, at equilibrium $[C] = 0.5$ M and $[A] = [B] = 0.1$ M. Is $Q < K$, $Q = K$, or $Q > K$? Answer 1 for $<$, 2 for $=$, 3 for $>$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Comparison",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Q vs K",
                              "statement": "$Q = \\frac{[C]}{[A][B]} = \\frac{0.5}{0.01} = 50$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$Q = 50 > K = 10$ — reaction shifts left toward reactants.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$3$ ($Q > K$).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$3$ ($Q > K$)",
          "commonErrors": [
                    "Inverting the Q expression or comparing wrong quantities."
          ]
},
        },
        {
          id: "apch-u2-equilibrium-acids-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a buffer maintains stable pH when small amounts of acid or base are added.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Buffer components",
                              "statement": "Weak acid HA + conjugate base A$^-$."
                    },
                    {
                              "kind": "concept",
                              "name": "Neutralization",
                              "statement": "Added $H^+$ consumed by A$^-$; added $OH^-$ consumed by HA."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A buffer contains a weak acid (HA) and its conjugate base (A$^-$) in comparable amounts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Added strong acid $H^+$ reacts with A$^-$ to form HA — the strong acid is neutralized.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Added strong base $OH^-$ reacts with HA to form A$^-$ and water — similarly neutralized. pH stays nearly constant until buffer capacity is exhausted.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Weak acid/conjugate base pair neutralizes added $H^+$ or $OH^-$",
          "commonErrors": [
                    "Saying buffers 'absorb' acid without the chemical mechanism."
          ]
},
        },
      ],
    },
  ],
};
