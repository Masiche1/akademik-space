import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m11-u2-lesson-2-3",
  code: "2-3",
  title: "The Quadratic Formula and Discriminant",
  goal: "I CAN solve any quadratic with the formula and use the discriminant to classify roots.",
  standards: ["A-REI.4", "A-SSE.1"],
  vocabulary: [
    { term: "Quadratic formula", definition: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ — solves any $ax^2 + bx + c = 0$." },
    { term: "Discriminant", definition: "$D = b^2 - 4ac$; determines the number and type of roots." },
    { term: "Two real roots", definition: "$D > 0$: two distinct real solutions." },
    { term: "One real root", definition: "$D = 0$: a repeated root (vertex touches the axis)." },
    { term: "Complex roots", definition: "$D < 0$: no real solutions; two complex conjugate roots." },
  ],
  concepts: [
    {
      id: "m11-u2-quadratic-formula",
      title: "Formula and discriminant",
      skill: "Apply the formula accurately and interpret $D$ before solving.",
      lesson: {
        sections: [
          {
            heading: "Using the formula",
            body: "Identify $a$, $b$, $c$ **with signs**, substitute carefully, simplify the radical, then divide by $2a$ last. The $\\pm$ produces both solutions — never drop it. Estimate first: the formula always works when factoring fails.",
          },
          {
            heading: "The discriminant",
            body: "$D = b^2 - 4ac$ tells you the story before you compute: $D > 0$ two real roots, $D = 0$ one repeated real root, $D < 0$ two complex roots (no $x$-intercepts). It is the fastest way to classify a quadratic's solutions.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic formula", statement: "$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$" },
          { name: "Discriminant", statement: "$D = b^2 - 4ac$: $>0$ two real, $=0$ one, $<0$ complex" },
        ],
        workedExample: {
          problem: "Solve $2x^2 - 4x - 3 = 0$ and classify the roots.",
          solution: "$D = 16 - 4(2)(-3) = 40 > 0$ — two real roots. $x = \\frac{4 \\pm \\sqrt{40}}{4} = \\frac{4 \\pm 2\\sqrt{10}}{4} = \\frac{2 \\pm \\sqrt{10}}{2}$.",
        },
      },
      questions: [
        {
          id: "m11-u2-quadratic-formula-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $3x^2 - 5x + 2 = 0$, what is the discriminant?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$1$"
                    },
                    {
                              "id": "b",
                              "text": "$-1$"
                    },
                    {
                              "id": "c",
                              "text": "$49$"
                    },
                    {
                              "id": "d",
                              "text": "$17$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Discriminant",
                              "statement": "$D = (-5)^2 - 4(3)(2) = 25 - 24 = 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$D = 1 > 0$ — two real roots.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $1$",
          "commonErrors": [
                    "Using $b$ without its sign: $25$ either way here, but $4ac$ sign errors are common."
          ]
},
        },
        {
          id: "m11-u2-quadratic-formula-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many real solutions does $x^2 + 4x + 4 = 0$ have?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two distinct"
                    },
                    {
                              "id": "b",
                              "text": "One repeated"
                    },
                    {
                              "id": "c",
                              "text": "None (complex)"
                    },
                    {
                              "id": "d",
                              "text": "Infinitely many"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Discriminant",
                              "statement": "$D = 16 - 16 = 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$D = 0$ means one repeated real root $x = -2$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct classification.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** One repeated",
          "commonErrors": [
                    "Saying two roots because degree is $2$."
          ]
},
        },
        {
          id: "m11-u2-quadratic-formula-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2 - 5x + 6 = 0$ using the quadratic formula. Enter the larger root.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Larger root",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Quadratic formula",
                              "statement": "$x = \\frac{5 \\pm \\sqrt{25-24}}{2} = \\frac{5 \\pm 1}{2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Roots $3$ and $2$; larger is $3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$x = 3$",
          "commonErrors": [
                    "Forgetting the $\\pm$ and reporting only one root."
          ]
},
        },
        {
          id: "m11-u2-quadratic-formula-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ball's height is $h(t) = -16t^2 + 48t + 4$ feet. Find when it hits the ground ($h = 0$) using the quadratic formula, rounding to the nearest tenth.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Set $h = 0$",
                              "statement": "$-16t^2 + 48t + 4 = 0$."
                    },
                    {
                              "kind": "method",
                              "name": "Quadratic formula",
                              "statement": "$a=-16, b=48, c=4$; $t = \\frac{-48 \\pm \\sqrt{2304 + 256}}{-32}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$D = 2304 - 4(-16)(4) = 2560$; $\\sqrt{2560} \\approx 50.6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$t = \\frac{-48 \\pm 50.6}{-32}$ gives $t \\approx 3.1$ or $t \\approx -0.08$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Negative time is rejected: hits ground at $t \\approx 3.1$ s.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$t \\approx 3.1$ seconds",
          "commonErrors": [
                    "Keeping the negative-time solution as physical."
          ]
},
        },
      ],
    },
  ],
};
