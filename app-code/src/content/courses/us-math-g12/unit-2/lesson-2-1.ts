import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m12-u2-lesson-2-1",
  code: "2-1",
  title: "The Unit Circle",
  goal: "I CAN evaluate sine, cosine and tangent for standard and related angles.",
  standards: ["F-TF.1", "F-TF.2"],
  vocabulary: [
    { term: "Unit circle", definition: "Circle of radius $1$ centered at origin; angle $\\theta$ measured counterclockwise from positive $x$-axis." },
    { term: "Coordinates", definition: "Point on circle: $(\\cos\\theta, \\sin\\theta)$ — $x$ is cosine, $y$ is sine." },
    { term: "Reference angle", definition: "The acute angle to the nearest $x$-axis; determines the magnitude of trig values." },
    { term: "Quadrant signs", definition: "ASTC: All, Sine, Tangent, Cosine positive in quadrants I, II, III, IV respectively." },
    { term: "Special angles", definition: "$0, 30, 45, 60, 90$ degrees and their radian equivalents $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$." },
  ],
  concepts: [
    {
      id: "m12-u2-unit-circle",
      title: "Unit circle values",
      skill: "Find trig values for any standard angle using reference angles and quadrant signs.",
      lesson: {
        sections: [
          {
            heading: "Coordinates as trig",
            body: "For angle $\\theta$ on the unit circle, the point is $(\\cos\\theta, \\sin\\theta)$. At $\\theta = 0$: $(1, 0)$, so $\\cos 0 = 1$, $\\sin 0 = 0$, $\\tan 0 = 0$. At $\\frac{\\pi}{2}$: $(0,1)$.",
          },
          {
            heading: "Reference angles and signs",
            body: "For angles beyond Quadrant I, find the **reference angle** (acute, to the $x$-axis) to get the magnitude from the standard table, then apply the quadrant sign. ASTC remembers which ratios stay positive: Quadrant II → sine positive, Quadrant III → tangent, Quadrant IV → cosine. So $\\sin \\frac{5\\pi}{6} = \\sin \\frac{\\pi}{6} = \\frac{1}{2}$ (QII, sine positive).",
          },
        ],
        keyFormulas: [
          { name: "Point", statement: "$(\\cos\\theta, \\sin\\theta)$ on unit circle" },
          { name: "ASTC", statement: "Q1: all; Q2: sin; Q3: tan; Q4: cos" },
          { name: "Reference angle", statement: "Acute angle to nearest axis gives magnitude" },
        ],
        workedExample: {
          problem: "Find $\\cos\\frac{2\\pi}{3}$.",
          solution: "Reference angle $= \\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$. In QII, cosine is negative: $\\cos\\frac{2\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$.",
        },
      },
      questions: [
        {
          id: "m12-u2-unit-circle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$\\sin 0$ equals ___.",
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
                              "text": "$\\frac{1}{2}$"
                    },
                    {
                              "id": "d",
                              "text": "undefined"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "unit circle",
                              "name": "At $\\theta = 0$ the point is $(1, 0)$, so $\\sin = y = 0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\sin 0 = 0$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** $0$",
          "commonErrors": [
                    "Confusing $\\sin 0$ with $\\sin \\frac{\\pi}{2} = 1$."
          ]
},
        },
        {
          id: "m12-u2-unit-circle-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\cos\\frac{\\pi}{4}$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\frac{\\sqrt{2}}{2}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{1}{2}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{\\sqrt{3}}{2}$"
                    },
                    {
                              "id": "d",
                              "text": "$1$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "special angle",
                              "name": "45° reference: legs equal, hypotenuse $\\sqrt{2}$ → $\\frac{\\sqrt{2}}{2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\cos 45^\\circ = \\frac{\\sqrt{2}}{2} \\approx 0.707$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $\\frac{\\sqrt{2}}{2}$",
          "commonErrors": [
                    "Mixing up $\\frac{\\pi}{4}$ and $\\frac{\\pi}{3}$ values."
          ]
},
        },
        {
          id: "m12-u2-unit-circle-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $\\sin\\frac{5\\pi}{6}$. Enter the exact value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 0.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reference + sign",
                              "statement": "Ref angle $\\frac{\\pi}{6}$; QII sine positive: $\\frac{1}{2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\frac{1}{2}$",
          "commonErrors": [
                    "Applying QI sign or wrong reference angle."
          ]
},
        },
        {
          id: "m12-u2-unit-circle-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find $\\tan\\frac{4\\pi}{3}$ exactly, showing reference angle and quadrant reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reference angle",
                              "statement": "$\\frac{4\\pi}{3}$ is in QIII; reference angle $= \\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$."
                    },
                    {
                              "kind": "rule",
                              "name": "ASTC",
                              "statement": "QIII: tangent positive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reference angle $\\frac{\\pi}{3}$ gives $\\tan = \\sqrt{3}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "QIII tangent is positive, so $\\tan\\frac{4\\pi}{3} = +\\sqrt{3}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Exact value $\\sqrt{3}$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\tan\\frac{4\\pi}{3} = \\sqrt{3}$",
          "commonErrors": [
                    "Making tangent negative — in QIII both sine and cosine are negative, so their ratio is positive."
          ]
},
        },
      ],
    },
  ],
};
