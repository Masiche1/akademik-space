import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "satm-u3-lesson-3-1",
  code: "3-1",
  title: "Ratios and Percentages",
  goal: "I CAN solve problems involving ratios, rates, and percentages.",
  standards: ["SAT M 3.x"],
  vocabulary: [
    { term: "Ratio", definition: "Comparison of quantities — $a:b$ or $\\frac{a}{b}$." },
    { term: "Rate", definition: "Ratio with different units — miles/hour, dollars/item." },
    { term: "Percent", definition: "Per hundred — $x\\% = \\frac{x}{100}$." },
    { term: "Percent change", definition: "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$." },
    { term: "Proportion", definition: "Equal ratios — $\\frac{a}{b} = \\frac{c}{d}$." },
    { term: "Unit rate", definition: "Rate per single unit — cost per item, speed per hour." },
  ],
  concepts: [
    {
      id: "satm-u3-ratios-percent",
      title: "Ratios and percentages",
      skill: "Solve problems with ratios, rates, and percent change.",
      lesson: {
        sections: [
          {
            heading: "Ratio and proportion",
            body: "Ratio $a:b$ compares quantities. Proportion $\\frac{a}{b} = \\frac{c}{d}$ solves for unknowns — cross-multiply: $ad = bc$. Scale ratios up/down by multiplying both parts by same factor. Unit rate = rate per ONE unit — fastest way to compare prices/speeds.",
          },
          {
            heading: "Percent problems",
            body: "Percent = per hundred. Percent change $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. Successive percent changes MULTIPLY, not add: 20% increase then 20% decrease = $1.2 \\times 0.8 = 0.96$ = 4% net decrease, NOT 0%.",
          },
        ],
        keyFormulas: [
          { name: "Proportion", statement: "$\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc$" },
          { name: "Percent change", statement: "$\\frac{\\text{new}-\\text{old}}{\\text{old}} \\times 100$" },
        ],
        workedExample: {
          problem: "A $\\$40$ item is discounted 25%, then another 10% off the sale price. Final price?",
          solution: "After 25% off: $40 \\times 0.75 = 30$. After 10% off: $30 \\times 0.90 = 27$. Final: $\\$27$ — NOT $40 \\times 0.65 = 26$ (percents don't add).",
        },
      },
      questions: [
        {
          id: "satm-u3-ratios-percent-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ratio $3:5$ means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3 plus 5"
                    },
                    {
                              "id": "b",
                              "text": "3 compared to 5"
                    },
                    {
                              "id": "c",
                              "text": "3 out of 5"
                    },
                    {
                              "id": "d",
                              "text": "3 times 5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Ratio",
                              "statement": "Comparison of parts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ratio $3:5$ compares quantities — for every 3 of one, 5 of other; total parts = 8.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3 to 5 comparison",
          "commonErrors": [
                    "Confusing with fraction or sum."
          ]
},
        },
        {
          id: "satm-u3-ratios-percent-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $\\frac{x}{4} = \\frac{9}{12}$, then $x = $ ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "9"
                    },
                    {
                              "id": "d",
                              "text": "12"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Cross-multiply",
                              "statement": "$12x = 36$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cross-multiply: $12x = 4 \\times 9 = 36$ → $x = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Not simplifying $\\frac{9}{12} = \\frac{3}{4}$ first."
          ]
},
        },
        {
          id: "satm-u3-ratios-percent-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A price increases 20% then decreases 20%. What is the net percent change?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Net %",
                              "answer": -4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multiply factors",
                              "statement": "$1.2 \\times 0.8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1.20 \\times 0.80 = 0.96$ → net change $= 0.96 - 1 = -0.04 = -4\\%$ (4% decrease).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: $-4\\%$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$-4\\%$",
          "commonErrors": [
                    "Adding 20% and -20% = 0% — percents multiply, not add."
          ]
},
        },
        {
          id: "satm-u3-ratios-percent-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why successive percent changes multiply rather than add, with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Compounding",
                              "statement": "Each % applies to new base."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each percent change applies to the NEW amount, not the original — 20% increase makes $100 → $120$; 20% decrease applies to $120$, not $100$: $120 \\times 0.8 = 96$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multiplicative: $1.2 \\times 0.8 = 0.96$ → net $-4\\%$; additive would wrongly give $100 \\times (1 + 0.2 - 0.2) = 100$ → 0%.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The base keeps changing — that's why percents compound multiplicatively.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Multiply factors — base changes each time",
          "commonErrors": [
                    "Adding successive percents."
          ]
},
        },
      ],
    },
  ],
};
