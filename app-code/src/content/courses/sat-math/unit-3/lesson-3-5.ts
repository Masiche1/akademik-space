import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "satm-u3-lesson-3-5",
  code: "3-5",
  title: "Mathematical Modeling",
  goal: "I CAN set up and solve real-world problems with equations.",
  standards: ["SAT M 3.x"],
  vocabulary: [
    { term: "Model", definition: "Mathematical representation of real situation." },
    { term: "Variable", definition: "Unknown quantity to solve for." },
    { term: "Constraint", definition: "Condition limiting possible solutions." },
    { term: "Optimization", definition: "Finding max/min of a quantity." },
    { term: "System in context", definition: "Multiple equations representing relationships." },
    { term: "Interpretation", definition: "What the solution means practically." },
  ],
  concepts: [
    {
      id: "satm-u3-modeling",
      title: "Mathematical modeling",
      skill: "Translate word problems into mathematical models and solve.",
      lesson: {
        sections: [
          {
            heading: "Modeling process",
            body: "1) Identify what's given and what's unknown; 2) Define variables clearly; 3) Write equations/inequalities representing relationships; 4) Solve; 5) INTERPRET — check answer makes sense in context (can't have negative items, can't exceed capacity). The math is only half — interpretation matters.",
          },
          {
            heading: "Common model types",
            body: "**Linear**: constant rate relationships ($y = mx + b$); **Systems**: multiple constraints (budget + capacity); **Quadratic**: optimization (max area, projectile motion); **Exponential**: growth/decay. Recognizing which model fits the scenario is the key skill.",
          },
        ],
        keyFormulas: [
          { name: "Model steps", statement: "Define → equation → solve → interpret" },
          { name: "Check", statement: "Does answer make sense in context?" },
        ],
        workedExample: {
          problem: "A rectangle has perimeter 40. Maximize area. Find dimensions.",
          solution: "Let length $l$, width $w$: $2l + 2w = 40$ → $l + w = 20$ → $w = 20 - l$. Area $A = l(20-l) = 20l - l^2$ — quadratic max at $l = 10$ → square 10×10, area 100.",
        },
      },
      questions: [
        {
          id: "satm-u3-modeling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mathematical model is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a perfect replica"
                    },
                    {
                              "id": "b",
                              "text": "a mathematical representation of a situation"
                    },
                    {
                              "id": "c",
                              "text": "always accurate"
                    },
                    {
                              "id": "d",
                              "text": "a graph"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Model",
                              "statement": "Math representation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A model simplifies reality into math — useful but imperfect; always check if solution makes sense in context.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Math representation",
          "commonErrors": [
                    "Thinking models are perfect."
          ]
},
        },
        {
          id: "satm-u3-modeling-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In optimization problems, the answer is typically ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any valid solution"
                    },
                    {
                              "id": "b",
                              "text": "the maximum or minimum possible value"
                    },
                    {
                              "id": "c",
                              "text": "the average"
                    },
                    {
                              "id": "d",
                              "text": "zero"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Optimization",
                              "statement": "Find extreme value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Optimization finds the best (max or min) value satisfying constraints — e.g., max area for given perimeter.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Max or min",
          "commonErrors": [
                    "Finding any solution, not the optimal."
          ]
},
        },
        {
          id: "satm-u3-modeling-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A company sells $x$ items at $\\$10$ each. Cost is $\\$200 + \\$4x$. Write profit equation and find break-even $x$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "x",
                              "answer": 34
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Revenue - cost = 0",
                              "statement": "$10x = 200 + 4x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Profit $= 10x - (200 + 4x) = 6x - 200$. Break-even: $6x - 200 = 0$ → $6x = 200$ → $x = 33.33$ → need $x = 34$ items (whole).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 34 (rounding up for whole items).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "34",
          "commonErrors": [
                    "Forgetting to round up for whole items."
          ]
},
        },
        {
          id: "satm-u3-modeling-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why checking 'does the answer make sense in context' is essential in modeling.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Interpretation",
                              "statement": "Math vs reality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mathematical solutions can be unrealistic — negative quantities, fractional items, values exceeding physical limits; the model's assumptions may not hold for the solution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: solving for 'number of people' gives 7.5 — meaningless; or 'time to empty tank' gives -3 hours — impossible; context check catches these.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The model is a simplification — real-world constraints (whole numbers, non-negative, capacity limits) must be applied AFTER solving.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Check feasibility — math can give impossible answers",
          "commonErrors": [
                    "Trusting math output without context check."
          ]
},
        },
      ],
    },
  ],
};
