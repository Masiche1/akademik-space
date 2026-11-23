import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m12-u2-lesson-2-3",
  code: "2-3",
  title: "Trig Identities and Equations",
  goal: "I CAN apply the Pythagorean and sum identities and solve basic trig equations.",
  standards: ["F-TF.8", "F-TF.9"],
  vocabulary: [
    { term: "Pythagorean identity", definition: "$\\sin^2\\theta + \\cos^2\\theta = 1$; also $1 + \\tan^2\\theta = \\sec^2\\theta$." },
    { term: "Even/odd", definition: "$\\cos(-\\theta) = \\cos\\theta$ (even); $\\sin(-\\theta) = -\\sin\\theta$ and $\\tan(-\\theta) = -\\tan\\theta$ (odd)." },
    { term: "Sum identity", definition: "$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$." },
    { term: "Solving equations", definition: "Isolate the trig function, then use unit-circle values or inverse trig on $[0, 2\\pi)$." },
    { term: "Periodicity", definition: "Solutions repeat every $2\\pi$ (or $\\pi$ for tangent)." },
  ],
  concepts: [
    {
      id: "m12-u2-trig-identities-equations",
      title: "Identities and equations",
      skill: "Use identities to rewrite expressions and find all solutions in a given interval.",
      lesson: {
        sections: [
          {
            heading: "Core identities",
            body: "$\\sin^2\\theta + \\cos^2\\theta = 1$ comes straight from the unit circle ($x^2 + y^2 = 1$). Dividing by $\\cos^2$ gives $\\tan^2 + 1 = \\sec^2$. Even/odd rules simplify negative angles: $\\sin(-\\theta) = -\\sin\\theta$.",
          },
          {
            heading: "Solving trig equations",
            body: "Isolate the function first: $2\\sin x = 1 \\Rightarrow \\sin x = \\frac{1}{2}$, then find all angles in the interval with that value — sine is $\\frac{1}{2}$ at $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ in $[0, 2\\pi)$. Always check whether the interval demands all branches or just the principal value.",
          },
        ],
        keyFormulas: [
          { name: "Pythagorean", statement: "$\\sin^2\\theta + \\cos^2\\theta = 1$" },
          { name: "Sum", statement: "$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$" },
          { name: "Solve", statement: "Isolate function, list all solutions in interval" },
        ],
        workedExample: {
          problem: "Solve $2\\sin x = 1$ for $x \\in [0, 2\\pi)$.",
          solution: "$\\sin x = \\frac{1}{2}$. Sine equals $\\frac{1}{2}$ at $x = \\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$.",
        },
      },
      questions: [
        {
          id: "m12-u2-trig-identities-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is equivalent to $\\sin^2\\theta + \\cos^2\\theta$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$0$"
                    },
                    {
                              "id": "b",
                              "text": "$1$"
                    },
                    {
                              "id": "c",
                              "text": "$2$"
                    },
                    {
                              "id": "d",
                              "text": "$\\sin 2\\theta$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "identity",
                              "name": "Pythagorean",
                              "statement": "The fundamental identity equals $1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\sin^2 + \\cos^2 = 1$ for all $\\theta$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** $1$",
          "commonErrors": [
                    "Confusing with $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$."
          ]
},
        },
        {
          id: "m12-u2-trig-identities-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\cos(-\\frac{\\pi}{3})$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\frac{1}{2}$"
                    },
                    {
                              "id": "b",
                              "text": "$-\\frac{1}{2}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{\\sqrt{3}}{2}$"
                    },
                    {
                              "id": "d",
                              "text": "$-\\frac{\\sqrt{3}}{2}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "rule",
                              "name": "Cosine is even",
                              "statement": "$\\cos(-\\theta) = \\cos\\theta$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\cos(-\\frac{\\pi}{3}) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $\\frac{1}{2}$",
          "commonErrors": [
                    "Applying odd-function rule to cosine."
          ]
},
        },
        {
          id: "m12-u2-trig-identities-equations-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $\\cos x = -\\frac{1}{2}$ for $x \\in [0, 2\\pi)$. Enter the number of solutions.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Count",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Unit circle",
                              "statement": "$\\cos x = -\\frac{1}{2}$ at $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$ — two solutions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two solutions in $[0, 2\\pi)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct count.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$2$ solutions",
          "commonErrors": [
                    "Reporting only the QII solution."
          ]
},
        },
        {
          id: "m12-u2-trig-identities-equations-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Verify the identity $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$ for $A = \\frac{\\pi}{6}$, $B = \\frac{\\pi}{3}$ by computing both sides.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Left side",
                              "statement": "$\\sin(\\frac{\\pi}{6} + \\frac{\\pi}{3}) = \\sin\\frac{\\pi}{2} = 1$."
                    },
                    {
                              "kind": "method",
                              "name": "Right side",
                              "statement": "$\\sin\\frac{\\pi}{6}\\cos\\frac{\\pi}{3} + \\cos\\frac{\\pi}{6}\\sin\\frac{\\pi}{3} = \\frac{1}{2}\\cdot\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\cdot\\frac{\\sqrt{3}}{2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Left side: $\\sin\\frac{\\pi}{2} = 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Right side: $\\frac{1}{4} + \\frac{3}{4} = 1$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both sides equal $1$ — identity verified for these values.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Both sides $= 1$; identity confirmed",
          "commonErrors": [
                    "Adding the angles incorrectly: $\\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}$, not $\\frac{\\pi}{9}$."
          ]
},
        },
      ],
    },
  ],
};
