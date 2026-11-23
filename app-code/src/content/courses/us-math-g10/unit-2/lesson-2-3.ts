import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m10-u2-lesson-2-3",
  code: "2-3",
  title: "Right Triangle Trigonometry",
  goal: "I CAN use sine, cosine and tangent ratios to solve right triangles.",
  standards: ["G-SRT.6", "G-SRT.7", "G-SRT.8"],
  vocabulary: [
    { term: "Sine", definition: "$\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$." },
    { term: "Cosine", definition: "$\\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$." },
    { term: "Tangent", definition: "$\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$." },
    { term: "SOH-CAH-TOA", definition: "Mnemonic for the three ratios." },
    { term: "Inverse trig", definition: "$\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$ find an angle from a ratio." },
  ],
  concepts: [
    {
      id: "m10-u2-right-triangle-trig",
      title: "Trig ratios",
      skill: "Identify opposite/adjacent relative to the reference angle and solve for sides or angles.",
      lesson: {
        sections: [
          {
            heading: "The three ratios",
            body: "Relative to a chosen acute angle $\\theta$: **opposite** is across from it, **adjacent** is next to it (not the hypotenuse), and **hypotenuse** is always the longest side. SOH-CAH-TOA gives sine, cosine, tangent respectively. The ratios depend only on the angle, not the triangle's size.",
          },
          {
            heading: "Solving triangles",
            body: "With two sides known, pick the ratio connecting them: opposite+adjacent → tangent; opposite+hypotenuse → sine; adjacent+hypotenuse → cosine. With a side and an angle, use **inverse** trig ($\\tan^{-1}$ etc.) to find missing angles, or multiply by the hypotenuse to find sides.",
          },
        ],
        keyFormulas: [
          { name: "SOH-CAH-TOA", statement: "$\\sin = \\frac{opp}{hyp}$, $\\cos = \\frac{adj}{hyp}$, $\\tan = \\frac{opp}{adj}$" },
          { name: "Find angle", statement: "$\\theta = \\tan^{-1}\\left(\\frac{opp}{adj}\\right)$" },
        ],
        workedExample: {
          problem: "A right triangle has opposite side $5$, adjacent side $12$, hypotenuse $13$ relative to angle $\\theta$. Find $\\sin\\theta$, $\\cos\\theta$ and $\\theta$.",
          solution: "$\\sin\\theta = \\frac{5}{13} \\approx 0.385$, $\\cos\\theta = \\frac{12}{13} \\approx 0.923$, $\\tan\\theta = \\frac{5}{12} \\approx 0.417$. $\\theta = \\tan^{-1}(0.417) \\approx 22.6^\\circ$.",
        },
      },
      questions: [
        {
          id: "m10-u2-right-triangle-trig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a right triangle, $\\sin\\theta$ equals ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{\\text{opposite}}{\\text{hypotenuse}}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{\\text{opposite}}{\\text{adjacent}}$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{\\text{hypotenuse}}{\\text{opposite}}$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sine",
                              "statement": "SOH: opposite over hypotenuse."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sine = opposite/hypotenuse.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** $\\frac{\\text{opposite}}{\\text{hypotenuse}}$",
          "commonErrors": [
                    "Mixing up sine and cosine."
          ]
},
        },
        {
          id: "m10-u2-right-triangle-trig-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A right triangle has angle $\\theta$ with opposite $8$ and hypotenuse $17$. What is $\\sin\\theta$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$\\frac{8}{17}$"
                    },
                    {
                              "id": "b",
                              "text": "$\\frac{15}{17}$"
                    },
                    {
                              "id": "c",
                              "text": "$\\frac{8}{15}$"
                    },
                    {
                              "id": "d",
                              "text": "$\\frac{17}{8}$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Sine",
                              "statement": "$\\sin\\theta = \\frac{opp}{hyp} = \\frac{8}{17}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opposite $8$, hypotenuse $17$: ratio $\\frac{8}{17}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct ratio.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** $\\frac{8}{17}$",
          "commonErrors": [
                    "Using the adjacent side $15$ instead of hypotenuse."
          ]
},
        },
        {
          id: "m10-u2-right-triangle-trig-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "From a point $20$ m from a building, the angle of elevation to the roof is $35^\\circ$. How tall is the building? Use $\\tan 35^\\circ \\approx 0.700$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Height",
                              "answer": 14,
                              "unit": "m"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Tangent",
                              "statement": "$\\tan\\theta = \\frac{opp}{adj} = \\frac{h}{20}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$h = 20 \\times 0.700 = 14$ m.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct height.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$14$ m",
          "commonErrors": [
                    "Dividing by $\\tan$ instead of multiplying."
          ]
},
        },
        {
          id: "m10-u2-right-triangle-trig-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A ramp rises $1.5$ m over a horizontal run of $8$ m. Find the angle of inclination to the nearest degree and the length of the ramp.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "model",
                              "name": "Right triangle",
                              "statement": "Rise = opposite, run = adjacent, ramp = hypotenuse."
                    },
                    {
                              "kind": "method",
                              "name": "Trig + Pythagorean",
                              "statement": "$\\tan\\theta = \\frac{1.5}{8}$; $L = \\sqrt{1.5^2 + 8^2}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\theta = \\tan^{-1}(1.5/8) = \\tan^{-1}(0.1875) \\approx 10.6^\\circ \\approx 11^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$L = \\sqrt{2.25 + 64} = \\sqrt{66.25} \\approx 8.14$ m.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Angle $\\approx 11^\\circ$, ramp $\\approx 8.14$ m.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\approx 11^\\circ$; $\\approx 8.14$ m",
          "commonErrors": [
                    "Using sine with the run as hypotenuse."
          ]
},
        },
      ],
    },
  ],
};
