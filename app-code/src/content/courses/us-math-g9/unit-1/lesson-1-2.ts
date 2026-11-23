import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m9-u1-lesson-1-2",
  code: "1-2",
  title: "Literal Equations and Formulas",
  goal: "I CAN solve a literal equation for a specified variable.",
  standards: ["A-REI.3", "A-CED.4"],
  vocabulary: [
    { term: "Literal equation", definition: "An equation that contains two or more variables, such as $A = \\frac{1}{2}bh$." },
    { term: "Formula", definition: "A literal equation that expresses a real-world relationship, such as distance $= rt$." },
    { term: "Isolate", definition: "Rearrange so the target variable stands alone on one side." },
    { term: "Substitute", definition: "Replace a variable with a known value to evaluate the formula." },
  ],
  concepts: [
    {
      id: "m9-u1-literal-equations",
      title: "Rearranging formulas",
      skill: "Treat other variables as constants and isolate the requested variable.",
      lesson: {
        sections: [
          {
            heading: "Same rules as numbers",
            body: "Solving $A = \\frac{1}{2}bh$ for $h$ uses exactly the same inverse operations as solving a numerical equation — the only difference is that $b$ and $A$ are treated as known constants. Multiply both sides by $2$, then divide by $b$: $h = \\frac{2A}{b}$.",
          },
          {
            heading: "Using formulas",
            body: "Once a formula is rearranged, substitute known values to find an unknown. For example, in $d = rt$, solving for $t$ gives $t = \\frac{d}{r}$; with $d = 150$ miles and $r = 50$ mph, $t = 3$ hours.",
          },
        ],
        keyFormulas: [
          { name: "Area of triangle", statement: "$A = \\frac{1}{2}bh \\Rightarrow h = \\frac{2A}{b}$" },
          { name: "Distance", statement: "$d = rt \\Rightarrow t = \\frac{d}{r}$" },
        ],
        workedExample: {
          problem: "The formula $v = u + at$ relates final velocity, initial velocity, acceleration and time. Solve for $t$.",
          solution: "Subtract $u$: $v - u = at$. Divide by $a$: $t = \\frac{v - u}{a}$.",
        },
      },
      questions: [
        {
          id: "m9-u1-literal-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $P = 2l + 2w$ for $w$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$w = \\frac{P - 2l}{2}$"
                    },
                    {
                              "id": "b",
                              "text": "$w = \\frac{P}{2} - l$"
                    },
                    {
                              "id": "c",
                              "text": "$w = P - 2l$"
                    },
                    {
                              "id": "d",
                              "text": "$w = \\frac{P + 2l}{2}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Inverse operations",
                              "statement": "Subtract $2l$ first, then divide by $2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2w = P - 2l$, so $w = \\frac{P - 2l}{2}$. (Note $\\frac{P}{2} - l$ is equivalent but $\\frac{P-2l}{2}$ is the direct result.)",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $w = \\frac{P - 2l}{2}$",
          "commonErrors": [
                    "Forgetting to subtract $2l$ before dividing."
          ]
},
        },
        {
          id: "m9-u1-literal-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $y = mx + b$ for $m$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$m = \\frac{y + b}{x}$"
                    },
                    {
                              "id": "b",
                              "text": "$m = \\frac{y - b}{x}$"
                    },
                    {
                              "id": "c",
                              "text": "$m = y - bx$"
                    },
                    {
                              "id": "d",
                              "text": "$m = \\frac{y}{x} + b$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Isolate $m$",
                              "statement": "Subtract $b$, then divide by $x$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$y - b = mx$, so $m = \\frac{y - b}{x}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct rearrangement.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** $m = \\frac{y - b}{x}$",
          "commonErrors": [
                    "Adding $b$ instead of subtracting."
          ]
},
        },
        {
          id: "m9-u1-literal-equations-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Use $A = \\frac{1}{2}bh$ with $A = 24$ and $b = 8$ to find $h$. Enter the value of $h$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$h$",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Substitute and solve",
                              "statement": "$24 = \\frac{1}{2}(8)h = 4h$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$4h = 24$ gives $h = 6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$h = 6$",
          "commonErrors": [
                    "Multiplying by $\\frac{1}{2}$ instead of dividing."
          ]
},
        },
        {
          id: "m9-u1-literal-equations-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The formula for the volume of a cylinder is $V = \\pi r^2 h$. Solve for $r$, then find $r$ when $V = 36\\pi$ and $h = 4$.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Isolate then substitute",
                              "statement": "Divide by $\\pi h$, take the square root."
                    },
                    {
                              "kind": "skill",
                              "name": "Substitute",
                              "statement": "Use the rearranged formula."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$r^2 = \\frac{V}{\\pi h}$, so $r = \\sqrt{\\frac{V}{\\pi h}}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Substitute: $r = \\sqrt{\\frac{36\\pi}{4\\pi}} = \\sqrt{9} = 3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct formula and value $r = 3$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$r = \\sqrt{\\frac{V}{\\pi h}}$; $r = 3$",
          "commonErrors": [
                    "Dividing by $\\pi$ only and forgetting $h$."
          ]
},
        },
      ],
    },
  ],
};
