import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "app2-u2-lesson-2-1",
  code: "2-1",
  title: "Electric Fields and Potential",
  goal: "I CAN compute electric fields, potential, and capacitance.",
  standards: ["ELE-1"],
  vocabulary: [
    { term: "Electric field", definition: "$\\vec{E} = \\frac{\\vec{F}}{q}$ — force per unit charge; field lines show direction." },
    { term: "Point charge field", definition: "$E = k\\frac{|q|}{r^2}$ — inverse-square, radially outward/inward." },
    { term: "Electric potential", definition: "$V = \\frac{U}{q}$ — potential energy per charge; voltage = potential difference." },
    { term: "Point charge potential", definition: "$V = k\\frac{q}{r}$ — scalar, no direction." },
    { term: "Capacitor", definition: "Stores charge: $Q = CV$; parallel plate $C = \\frac{\\epsilon_0 A}{d}$." },
  ],
  concepts: [
    {
      id: "app2-u2-electric-fields-potential",
      title: "Electric fields and potential",
      skill: "Compute fields, potentials, and capacitor behavior.",
      lesson: {
        sections: [
          {
            heading: "Fields vs potential",
            body: "**Electric field** $\\vec{E}$ is a vector — force per charge, superposes as vectors, field lines show direction. **Electric potential** $V$ is a scalar — energy per charge, superposes as scalars. They're related: $\\vec{E} = -\\nabla V$ — field points in direction of decreasing potential (like height vs slope).",
          },
          {
            heading: "Capacitors",
            body: "Store charge $Q = CV$ where $C$ is capacitance (farads). Parallel plate: $C = \\frac{\\epsilon_0 A}{d}$ — bigger plates or smaller gap means more capacitance. Energy stored $U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV$. Dielectrics (insulators) increase $C$ by reducing effective field.",
          },
        ],
        keyFormulas: [
          { name: "Point charge E", statement: "$E = k\\frac{|q|}{r^2}$" },
          { name: "Point charge V", statement: "$V = k\\frac{q}{r}$" },
          { name: "Capacitor", statement: "$Q = CV$; $U = \\frac{1}{2}CV^2$" },
        ],
        workedExample: {
          problem: "Capacitor $C = 10$ $\\mu$F charged to $V = 50$ V. Stored energy?",
          solution: "$U = \\frac{1}{2}CV^2 = \\frac{1}{2}(10 \\times 10^{-6})(2500) = 0.0125$ J $= 12.5$ mJ.",
        },
      },
      questions: [
        {
          id: "app2-u2-electric-fields-potential-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Electric field is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "scalar"
                    },
                    {
                              "id": "b",
                              "text": "vector — force per unit charge"
                    },
                    {
                              "id": "c",
                              "text": "energy per charge"
                    },
                    {
                              "id": "d",
                              "text": "charge itself"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "$\\vec{E}$",
                              "statement": "Vector quantity: force per test charge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$E$ has magnitude and direction — it's $F/q$, a vector.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Vector (force/charge)",
          "commonErrors": [
                    "Confusing $E$ (vector) with $V$ (scalar potential)."
          ]
},
        },
        {
          id: "app2-u2-electric-fields-potential-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Doubling the distance from a point charge, the field strength ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "halves"
                    },
                    {
                              "id": "b",
                              "text": "quarters"
                    },
                    {
                              "id": "c",
                              "text": "doubles"
                    },
                    {
                              "id": "d",
                              "text": "unchanged"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "$E = kq/r^2$",
                              "statement": "Inverse-square — distance squared in denominator."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$r \\to 2r$ gives $E \\to E/4$ — inverse-square law.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Quarters",
          "commonErrors": [
                    "Thinking it's inverse-linear like potential ($1/r$)."
          ]
},
        },
        {
          id: "app2-u2-electric-fields-potential-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $2$ $\\mu$C charge sits $0.5$ m from a point. Find $E$ ($k = 9 \\times 10^9$). Enter N/C.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$E$",
                              "answer": 72000
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$E = kq/r^2$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$E = \\frac{9 \\times 10^9 \\times 2 \\times 10^{-6}}{0.25} = \\frac{18000}{0.25} = 72{,}000$ N/C.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$E = 72{,}000$ N/C.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$72000$ N/C",
          "commonErrors": [
                    "Using $r$ instead of $r^2$ or wrong power of ten."
          ]
},
        },
        {
          id: "app2-u2-electric-fields-potential-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the relationship between electric field and electric potential, including their mathematical connection.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Field",
                              "statement": "$E$ = force per charge, vector."
                    },
                    {
                              "kind": "definition",
                              "name": "Potential",
                              "statement": "$V$ = energy per charge, scalar."
                    },
                    {
                              "kind": "theorem",
                              "name": "$\\vec{E} = -\\nabla V$",
                              "statement": "Field is negative gradient of potential."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Field $\\vec{E}$ tells you the force a charge would feel; potential $V$ tells you the energy it would have.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\vec{E} = -\\nabla V$ — field points in direction of steepest potential decrease, like downhill slope.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Equipotential surfaces are perpendicular to field lines; moving along a field line decreases potential.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$\\vec{E} = -\\nabla V$; field points downhill in potential",
          "commonErrors": [
                    "Treating them as interchangeable or ignoring the vector/scalar distinction."
          ]
},
        },
      ],
    },
  ],
};
