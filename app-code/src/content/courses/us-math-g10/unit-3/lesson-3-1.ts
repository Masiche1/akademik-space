import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m10-u3-lesson-3-1",
  code: "3-1",
  title: "Circle Theorems",
  goal: "I CAN apply central and inscribed angle relationships in circles.",
  standards: ["G-C.2", "G-C.5"],
  vocabulary: [
    { term: "Central angle", definition: "An angle whose vertex is the center; its measure equals its intercepted arc." },
    { term: "Inscribed angle", definition: "An angle whose vertex is on the circle; it equals half its intercepted arc." },
    { term: "Intercepted arc", definition: "The arc 'inside' an angle that the angle opens toward." },
    { term: "Inscribed angle theorem", definition: "An inscribed angle is half the measure of its intercepted arc (and half the central angle on the same arc)." },
    { term: "Chord", definition: "A segment joining two points on the circle." },
  ],
  concepts: [
    {
      id: "m10-u3-circle-theorems",
      title: "Angles in circles",
      skill: "Relate arcs, central angles and inscribed angles.",
      lesson: {
        sections: [
          {
            heading: "Central vs inscribed",
            body: "A **central angle** equals its intercepted arc exactly. An **inscribed angle** — vertex on the circle — equals **half** that arc. So an inscribed angle is always half the central angle subtending the same arc. An angle inscribed in a **semicircle** is always $90^\\circ$.",
          },
          {
            heading: "Using the relationships",
            body: "The arc measure equals the central angle; the inscribed angle is half the arc. Given an inscribed angle, double it to get the arc; given the arc, halve it for the inscribed angle. These relations let you chain unknowns around a circle figure.",
          },
        ],
        keyFormulas: [
          { name: "Central angle", statement: "$\\text{central} = \\text{arc measure}$" },
          { name: "Inscribed angle", statement: "$\\text{inscribed} = \\frac{1}{2} \\times \\text{arc} = \\frac{1}{2} \\times \\text{central}$" },
          { name: "Semicircle", statement: "Angle inscribed in a semicircle $= 90^\\circ$" },
        ],
        workedExample: {
          problem: "A central angle intercepts an arc of $80^\\circ$. What is an inscribed angle on the same arc?",
          solution: "Inscribed angle $= \\frac{1}{2} \\times 80^\\circ = 40^\\circ$.",
        },
      },
      questions: [
        {
          id: "m10-u3-circle-theorems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An inscribed angle intercepts an arc of $100^\\circ$. The angle measures ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$100^\\circ$"
                    },
                    {
                              "id": "b",
                              "text": "$50^\\circ$"
                    },
                    {
                              "id": "c",
                              "text": "$200^\\circ$"
                    },
                    {
                              "id": "d",
                              "text": "$25^\\circ$"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Inscribed angle",
                              "statement": "Inscribed angle = half the intercepted arc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$100 / 2 = 50^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** $50^\\circ$",
          "commonErrors": [
                    "Using the full arc instead of half."
          ]
},
        },
        {
          id: "m10-u3-circle-theorems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A central angle and an inscribed angle intercept the same arc. If the inscribed angle is $32^\\circ$, the arc measures ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$16^\\circ$"
                    },
                    {
                              "id": "b",
                              "text": "$32^\\circ$"
                    },
                    {
                              "id": "c",
                              "text": "$64^\\circ$"
                    },
                    {
                              "id": "d",
                              "text": "$128^\\circ$"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Arc relationship",
                              "statement": "Arc = $2 \\times$ inscribed angle."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arc $= 2 \\times 32 = 64^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct arc.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** $64^\\circ$",
          "commonErrors": [
                    "Halving instead of doubling."
          ]
},
        },
        {
          id: "m10-u3-circle-theorems-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "An angle is inscribed in a semicircle. What is its measure in degrees?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Angle",
                              "answer": 90,
                              "unit": "degrees"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Thales",
                              "statement": "Angle in a semicircle is right."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$90^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$90^\\circ$",
          "commonErrors": [
                    "Applying half-arc rule to a $180^\\circ$ arc incorrectly — result is still $90^\\circ$, but the reason is Thales' theorem."
          ]
},
        },
        {
          id: "m10-u3-circle-theorems-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a circle, central angle $AOB$ intercepts arc $AB$ of $110^\\circ$. Point $C$ is on the major arc. Find $\\angle ACB$, then find arc $AB$'s measure if $\\angle ACB = 38^\\circ$ instead.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Inscribed angle",
                              "statement": "Inscribed = half the intercepted arc."
                    },
                    {
                              "kind": "method",
                              "name": "Invert",
                              "statement": "Arc = $2 \\times$ inscribed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\angle ACB = \\frac{1}{2} \\times 110^\\circ = 55^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If $\\angle ACB = 38^\\circ$, then arc $AB = 2 \\times 38 = 76^\\circ$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both directions of the relationship applied correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$55^\\circ$; arc $= 76^\\circ$",
          "commonErrors": [
                    "Using the major arc instead of the intercepted minor arc."
          ]
},
        },
      ],
    },
  ],
};
