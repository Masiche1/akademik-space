import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "stats-u3-lesson-3-1",
  code: "3-1",
  title: "Expected Value and Decisions",
  goal: "I CAN use expected value to evaluate decisions.",
  standards: ["S-MD.A.1", "S-MD.A.2", "S-MD.A.3", "S-MD.A.4", "S-MD.B.5"],
  vocabulary: [
    { term: "Expected value", definition: "Long-run average payoff." },
    { term: "Decision", definition: "Choice under uncertainty." },
    { term: "Risk", definition: "Variability of outcomes." },
    { term: "Payoff", definition: "Gain or loss." },
    { term: "Fair game", definition: "Expected value = 0." },
  ],
  concepts: [
    {
      id: "stats-u3-expected-value",
      title: "Expected value and decisions",
      skill: "Use expected value to evaluate decisions.",
      lesson: {
        sections: [
          {
            heading: "Expected value in decisions",
            body: "Expected value = sum of (outcome × probability). A positive EV decision is favorable in the long run. Example: a lottery ticket costing $1 with 1/1000 chance of $500 has EV = $0.50 - $1 = -$0.50 (unfavorable).",
          },
          {
            heading: "Risk vs EV",
            body: "Two options can have same EV but different risk (variance). Risk-averse people prefer lower variance even at same EV. Insurance is paying to reduce variance — you accept small certain loss to avoid large uncertain loss.",
          },
        ],
        keyFormulas: [
          { name: "EV", statement: "Σ(x·P(x))." },
          { name: "Fair game", statement: "EV = 0." },
          { name: "Risk", statement: "Variance of outcomes." },
        ],
        workedExample: {
          problem: "A game costs $5 to play. You win $20 with probability 0.3, $0 otherwise. What is the EV?",
          solution: "EV = $20 × 0.3 + $0 × 0.7 = $6. Net EV = $6 - $5 = $1 (favorable).",
        },
      },
      questions: [
        {
          id: "stats-u3-expected-value-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair game has expected value of ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "positive"
                    },
                    {
                              "id": "b",
                              "text": "zero"
                    },
                    {
                              "id": "c",
                              "text": "negative"
                    },
                    {
                              "id": "d",
                              "text": "infinite"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fair game",
                              "statement": "EV = 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A fair game has expected value of zero — no advantage to either side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** zero",
          "commonErrors": [
                    "Thinking fair means positive."
          ]
},
        },
        {
          id: "stats-u3-expected-value-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Insurance is purchased to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increase risk"
                    },
                    {
                              "id": "b",
                              "text": "reduce variance/risk"
                    },
                    {
                              "id": "c",
                              "text": "increase expected value"
                    },
                    {
                              "id": "d",
                              "text": "guarantee profit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insurance",
                              "statement": "Pay to reduce uncertainty."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insurance transfers risk — you pay a premium to avoid potentially large losses.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** reduce variance/risk",
          "commonErrors": [
                    "Thinking insurance increases EV."
          ]
},
        },
        {
          id: "stats-u3-expected-value-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A bet pays $100 with probability 0.1 and $0 otherwise. What is the expected payoff?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "EV",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "EV",
                              "statement": "$100 \\times 0.1 = 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$100 \\times 0.1 = 10$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$10$",
          "commonErrors": [
                    "Saying $100 or $0."
          ]
},
        },
        {
          id: "stats-u3-expected-value-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two jobs pay the same expected salary but one has steady income and the other is commission-based. How might a risk-averse person choose? Explain using variance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Variance",
                              "statement": "Spread of outcomes."
                    },
                    {
                              "kind": "skill",
                              "name": "Risk aversion",
                              "statement": "Prefer lower variance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same EV, different variance. The commission job has high variance (some months high, some low); the steady job has low variance. A risk-averse person prefers the steady job despite same expected pay — they value certainty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correctly applies variance to decision.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Same EV; prefer lower variance if risk-averse.**",
          "commonErrors": [
                    "Choosing based only on EV."
          ]
},
        },
      ],
    },
  ],
};
