import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "phys10-u1-lesson-1-2",
  code: "1-2",
  title: "Energy and Conservation",
  goal: "I CAN analyze energy transfer and apply conservation of energy.",
  standards: ["HS-PS3-1", "HS-PS3-2", "HS-PS3-4"],
  vocabulary: [
    { term: "Kinetic energy", definition: "Energy of motion: $KE = \\frac{1}{2}mv^2$." },
    { term: "Potential energy", definition: "Stored energy: $PE = mgh$." },
    { term: "Conservation", definition: "Total energy stays constant." },
    { term: "Work", definition: "Energy transferred by force." },
    { term: "Power", definition: "Rate of energy transfer: $P = W/t$." },
  ],
  concepts: [
    {
      id: "phys10-u1-energy",
      title: "Energy and conservation",
      skill: "Apply conservation of mechanical energy.",
      lesson: {
        sections: [
          {
            heading: "Forms of energy",
            body: "Kinetic energy is energy of motion: $KE = \\frac{1}{2}mv^2$. Gravitational potential energy is stored by position: $PE = mgh$. Energy transforms between forms but total is conserved (ignoring friction).",
          },
          {
            heading: "Conservation of energy",
            body: "In a frictionless system, $KE_i + PE_i = KE_f + PE_f$. A ball rolling down a hill converts potential to kinetic. With friction, some energy becomes thermal energy — total still conserved.",
          },
        ],
        keyFormulas: [
          { name: "Kinetic", statement: "$\\frac{1}{2}mv^2$" },
          { name: "Potential", statement: "$mgh$" },
          { name: "Conservation", statement: "$KE_i + PE_i = KE_f + PE_f$" },
        ],
        workedExample: {
          problem: "A 2 kg ball falls from 5 m. Find its speed just before hitting the ground (g = 10 m/s²).",
          solution: "$mgh = \\frac{1}{2}mv^2$ → $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5} = 10$ m/s.",
        },
      },
      questions: [
        {
          id: "phys10-u1-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Kinetic energy depends on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mass and height only"
                    },
                    {
                              "id": "b",
                              "text": "mass and speed"
                    },
                    {
                              "id": "c",
                              "text": "height and speed"
                    },
                    {
                              "id": "d",
                              "text": "volume only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Kinetic energy",
                              "statement": "$\\frac{1}{2}mv^2$ — mass and speed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "KE depends on mass and speed squared.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** mass and speed",
          "commonErrors": [
                    "Thinking height matters for KE."
          ]
},
        },
        {
          id: "phys10-u1-energy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ball at the top of a hill has maximum ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "kinetic energy"
                    },
                    {
                              "id": "b",
                              "text": "potential energy"
                    },
                    {
                              "id": "c",
                              "text": "thermal energy"
                    },
                    {
                              "id": "d",
                              "text": "zero energy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Potential energy",
                              "statement": "$PE = mgh$ — maximum at height."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At the top, height is maximum so PE is maximum; KE is minimum.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** potential energy",
          "commonErrors": [
                    "Confusing KE and PE."
          ]
},
        },
        {
          id: "phys10-u1-energy-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 3 kg object moves at 4 m/s. What is its kinetic energy? ($KE = \\frac{1}{2}mv^2$)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "KE",
                              "answer": 24,
                              "unit": "J"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Kinetic",
                              "statement": "$\\frac{1}{2} \\times 3 \\times 16 = 24$ J."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$KE = 0.5 \\times 3 \\times 4^2 = 24$ J.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$24$ J",
          "commonErrors": [
                    "Forgetting to square velocity."
          ]
},
        },
        {
          id: "phys10-u1-energy-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A roller coaster car loses 200 J of potential energy going down a hill. If friction is negligible, how much kinetic energy does it gain? Explain using conservation of energy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Conservation",
                              "statement": "Energy transforms, total constant."
                    },
                    {
                              "kind": "skill",
                              "name": "Transform",
                              "statement": "PE → KE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It gains 200 J of kinetic energy — the lost PE converts to KE. Total energy stays constant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct value with conservation reasoning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**200 J (PE converts to KE).**",
          "commonErrors": [
                    "Saying energy is destroyed."
          ]
},
        },
      ],
    },
  ],
};
