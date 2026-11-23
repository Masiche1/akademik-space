import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apst-u2-lesson-2-1",
  code: "2-1",
  title: "Probability Rules",
  goal: "I CAN apply addition and multiplication rules and compute expected value.",
  standards: ["PROB-1"],
  vocabulary: [
    { term: "Sample space", definition: "The set of all possible outcomes." },
    { term: "Event", definition: "A subset of the sample space." },
    { term: "Addition rule", definition: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$." },
    { term: "Multiplication rule", definition: "$P(A \\cap B) = P(A)P(B|A)$ — chain rule for sequential events." },
    { term: "Expected value", definition: "$E[X] = \\sum x_i P(x_i)$ — long-run average." },
  ],
  concepts: [
    {
      id: "apst-u2-probability-rules",
      title: "Probability rules",
      skill: "Combine probabilities correctly and compute expectations.",
      lesson: {
        sections: [
          {
            heading: "Addition rule",
            body: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ — subtract the overlap once to avoid double-counting. For **mutually exclusive** events, $P(A \\cap B) = 0$ and the rule simplifies to $P(A) + P(B)$.",
          },
          {
            heading: "Expected value",
            body: "For a discrete random variable, $E[X] = \\sum x_i \\cdot P(x_i)$ — the weighted average outcome. A game is worth playing in the long run only if $E[X] > 0$ (after costs).",
          },
        ],
        keyFormulas: [
          { name: "Addition rule", statement: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$" },
          { name: "Expected value", statement: "$E[X] = \\sum x_i P(x_i)$" },
        ],
        workedExample: {
          problem: "Die roll pays $\\$5$ on even, loses $\\$2$ on odd. Expected value?",
          solution: "$E = 3 \\times \\frac{3}{6}(5) + 3 \\times \\frac{3}{6}(-2) = 2.5 - 1 = \\$1.50$ per roll — positive expectation.",
        },
      },
      questions: [
        {
          id: "apst-u2-probability-rules-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Events $A$ and $B$ are mutually exclusive. Then $P(A \\cap B) = $.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$P(A)P(B)$"
                    },
                    {
                              "id": "b",
                              "text": "$0$"
                    },
                    {
                              "id": "c",
                              "text": "$P(A) + P(B)$"
                    },
                    {
                              "id": "d",
                              "text": "$1$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mutually exclusive",
                              "statement": "Cannot both occur — no overlap."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mutually exclusive means the intersection is empty: probability $0$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$0$",
          "commonErrors": [
                    "Multiplying probabilities for exclusive events."
          ]
},
        },
        {
          id: "apst-u2-probability-rules-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "$P(A) = 0.4$, $P(B) = 0.3$, $P(A \\cap B) = 0.1$. Find $P(A \\cup B)$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$0.7$"
                    },
                    {
                              "id": "b",
                              "text": "$0.6$"
                    },
                    {
                              "id": "c",
                              "text": "$0.8$"
                    },
                    {
                              "id": "d",
                              "text": "$0.12$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Addition rule",
                              "statement": "$0.4 + 0.3 - 0.1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$P(A \\cup B) = 0.4 + 0.3 - 0.1 = 0.6$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$0.6$",
          "commonErrors": [
                    "Forgetting to subtract the overlap."
          ]
},
        },
        {
          id: "apst-u2-probability-rules-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A game pays $\\$10$ with probability $0.2$ and $\\$0$ otherwise. Expected winnings? Enter the value in dollars.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$E[X]$",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Expected value",
                              "statement": "$E = 10(0.2) + 0(0.8)$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$E[X] = 10 \\times 0.2 = \\$2$ per play.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$E = \\$2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2$",
          "commonErrors": [
                    "Using probability $0.8$ instead of $0.2$ for the payout."
          ]
},
        },
        {
          id: "apst-u2-probability-rules-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bag has 4 red and 6 blue marbles. You draw two without replacement. (a) Find $P(\\text{both red})$. (b) Find $P(\\text{at least one red})$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multiplication rule",
                              "statement": "Sequential without replacement."
                    },
                    {
                              "kind": "concept",
                              "name": "Complement",
                              "statement": "At least one = $1 - P(\\text{none})$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) $P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15} \\approx 0.133$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) $P(\\text{no red}) = \\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$, so $P(\\text{at least one}) = 1 - \\frac{1}{3} = \\frac{2}{3}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both probabilities correct.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $\\frac{2}{15}$; (b) $\\frac{2}{3}$",
          "commonErrors": [
                    "Using replacement probabilities or adding instead of complementing."
          ]
},
        },
      ],
    },
  ],
};
