import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "satm-u1-lesson-1-5",
  code: "1-5",
  title: "Linear Models in Context",
  goal: "I CAN interpret linear models and their parameters.",
  standards: ["SAT M 1.x"],
  vocabulary: [
    { term: "Linear model", definition: "$y = mx + b$ describing real-world relationship." },
    { term: "Rate of change", definition: "Slope $m$ — units per unit." },
    { term: "Initial value", definition: "Y-intercept $b$ — value at start." },
    { term: "Interpretation", definition: "What slope and intercept mean in context." },
    { term: "Extrapolation", definition: "Predicting beyond data range — risky." },
    { term: "Linear vs nonlinear", definition: "Constant rate vs changing rate." },
  ],
  concepts: [
    {
      id: "satm-u1-linear-models",
      title: "Linear models",
      skill: "Interpret slope and intercept in real-world contexts.",
      lesson: {
        sections: [
          {
            heading: "Interpreting parameters",
            body: "In $y = mx + b$: **slope $m$** is the rate of change — 'dollars per hour', 'degrees per day'; **intercept $b$** is the initial value — 'starting amount', 'value at time zero'. SAT questions ask what slope/intercept REPRESENT — answer in context units, not just numbers.",
          },
          {
            heading: "Model limitations",
            body: "Linear models assume CONSTANT rate — they work within the data range but may fail outside it (extrapolation). A linear model of population growth fails when growth accelerates; a linear model of cooling fails as temperature approaches room temp. Recognize when linear assumptions break.",
          },
        ],
        keyFormulas: [
          { name: "Interpret", statement: "$m$ = rate (units/unit); $b$ = initial value" },
          { name: "Extrapolation risk", statement: "Linear assumption may fail outside data range" },
        ],
        workedExample: {
          problem: "A tank drains linearly: $V(t) = 100 - 5t$ liters after $t$ minutes. Interpret slope and intercept.",
          solution: "Slope $-5$ = draining 5 liters per minute (negative = decreasing). Intercept $100$ = 100 liters initially (at $t=0$). Tank empties at $t = 20$ min.",
        },
      },
      questions: [
        {
          id: "satm-u1-linear-models-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In $y = mx + b$, the slope $m$ represents ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the starting value"
                    },
                    {
                              "id": "b",
                              "text": "the rate of change"
                    },
                    {
                              "id": "c",
                              "text": "the maximum value"
                    },
                    {
                              "id": "d",
                              "text": "the x-intercept"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Slope",
                              "statement": "Rate of change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slope $m$ is the rate — how much $y$ changes per unit $x$; intercept $b$ is the initial value.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Rate of change",
          "commonErrors": [
                    "Confusing slope with intercept."
          ]
},
        },
        {
          id: "satm-u1-linear-models-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $C = 50 + 0.10x$ (cost in dollars, $x$ = miles), the $0.10$ means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$50 base fee"
                    },
                    {
                              "id": "b",
                              "text": "$0.10 per mile"
                    },
                    {
                              "id": "c",
                              "text": "10% discount"
                    },
                    {
                              "id": "d",
                              "text": "total cost"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Slope interpretation",
                              "statement": "Rate in context units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slope $0.10$ = $0.10 per mile — the per-unit cost; intercept $50$ = base fee.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$0.10 per mile",
          "commonErrors": [
                    "Reading slope as total or percentage."
          ]
},
        },
        {
          id: "satm-u1-linear-models-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using $V(t) = 100 - 5t$, when does the tank empty ($V = 0$)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "t",
                              "answer": 20
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Set V=0, solve",
                              "statement": "$100 - 5t = 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$100 - 5t = 0$ → $5t = 100$ → $t = 20$ minutes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $t = 20$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$20$ minutes",
          "commonErrors": [
                    "Sign error — move terms carefully."
          ]
},
        },
        {
          id: "satm-u1-linear-models-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A model predicts linear growth but reality shows accelerating growth. What does this reveal about the model?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Model limitation",
                              "statement": "Constant rate assumption."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear model assumes CONSTANT rate — accelerating growth means the rate is INCREASING, violating linearity; the model will underestimate future values.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Extrapolating a linear model beyond its valid range is dangerous — the model fit the data range but doesn't capture the accelerating trend.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Better model: exponential or quadratic for accelerating growth — recognize when linear assumptions break down.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Linear = constant rate; accelerating needs nonlinear model",
          "commonErrors": [
                    "Trusting linear extrapolation blindly."
          ]
},
        },
      ],
    },
  ],
};
