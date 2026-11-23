import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "app2-u1-lesson-1-1",
  code: "1-1",
  title: "Fluid Statics and Dynamics",
  goal: "I CAN apply pressure, buoyancy, and fluid flow principles.",
  standards: ["FLU-1"],
  vocabulary: [
    { term: "Pressure", definition: "$P = \\frac{F}{A}$ — force per unit area; in fluids $P = P_0 + \\rho gh$." },
    { term: "Pascal's principle", definition: "Pressure applied to confined fluid transmitted equally throughout." },
    { term: "Archimedes' principle", definition: "Buoyant force = weight of displaced fluid: $F_b = \\rho_{fluid} V g$." },
    { term: "Continuity equation", definition: "$A_1 v_1 = A_2 v_2$ — flow rate constant for incompressible fluid." },
    { term: "Bernoulli's equation", definition: "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$ — energy conservation for fluids." },
  ],
  concepts: [
    {
      id: "app2-u1-fluid-statics",
      title: "Fluids",
      skill: "Apply pressure, buoyancy, and flow equations.",
      lesson: {
        sections: [
          {
            heading: "Fluid statics",
            body: "Pressure increases with depth: $P = P_0 + \\rho gh$ — that's why dams are thicker at the bottom. **Pascal's principle**: pressure applied to enclosed fluid transmits equally — the basis of hydraulic lifts and brakes. **Archimedes' principle**: buoyant force equals weight of displaced fluid — objects float when $F_b \\ge mg$.",
          },
          {
            heading: "Fluid dynamics",
            body: "For steady flow of incompressible fluid, **continuity** $A_1v_1 = A_2v_2$ conserves volume flow — narrow pipes speed up. **Bernoulli's equation** $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$ is energy conservation: faster flow means lower pressure (Venturi effect, airplane lift).",
          },
        ],
        keyFormulas: [
          { name: "Pressure at depth", statement: "$P = P_0 + \\rho gh$" },
          { name: "Buoyancy", statement: "$F_b = \\rho_{fluid} V_{disp} g$" },
          { name: "Continuity", statement: "$A_1 v_1 = A_2 v_2$" },
          { name: "Bernoulli", statement: "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{const}$" },
        ],
        workedExample: {
          problem: "Object displaces $0.002$ m³ of water ($\\rho = 1000$ kg/m³). Buoyant force?",
          solution: "$F_b = \\rho V g = 1000 \\times 0.002 \\times 9.8 = 19.6$ N upward.",
        },
      },
      questions: [
        {
          id: "app2-u1-fluid-statics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pressure in a fluid increases with ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "volume"
                    },
                    {
                              "id": "b",
                              "text": "depth"
                    },
                    {
                              "id": "c",
                              "text": "temperature only"
                    },
                    {
                              "id": "d",
                              "text": "surface area"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "$P = P_0 + \\rho gh$",
                              "statement": "Pressure grows with depth $h$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deeper fluid means more weight pressing down — pressure rises linearly with depth.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Depth",
          "commonErrors": [
                    "Thinking pressure is uniform throughout a fluid."
          ]
},
        },
        {
          id: "app2-u1-fluid-statics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A pipe narrows from $A_1 = 0.02$ m² to $A_2 = 0.005$ m². If $v_1 = 2$ m/s, $v_2 = $?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$0.5$ m/s"
                    },
                    {
                              "id": "b",
                              "text": "$2$ m/s"
                    },
                    {
                              "id": "c",
                              "text": "$8$ m/s"
                    },
                    {
                              "id": "d",
                              "text": "$4$ m/s"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Continuity",
                              "statement": "$A_1v_1 = A_2v_2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$v_2 = \\frac{0.02 \\times 2}{0.005} = \\frac{0.04}{0.005} = 8$ m/s.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$8$ m/s",
          "commonErrors": [
                    "Multiplying areas instead of using the ratio."
          ]
},
        },
        {
          id: "app2-u1-fluid-statics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $0.5$ m³ object is fully submerged in water ($\\rho = 1000$). Buoyant force? ($g = 9.8$). Enter N.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$F_b$",
                              "answer": 4900
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Archimedes",
                              "statement": "$F_b = \\rho V g = 1000 \\times 0.5 \\times 9.8$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$F_b = 4900$ N upward.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$F_b = 4900$ N.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4900$ N",
          "commonErrors": [
                    "Using object's density instead of fluid density."
          ]
},
        },
        {
          id: "app2-u1-fluid-statics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a ship floats even though it's made of steel (denser than water), using Archimedes' principle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Archimedes",
                              "statement": "$F_b = $ weight of displaced fluid."
                    },
                    {
                              "kind": "concept",
                              "name": "Hull design",
                              "statement": "Shape displaces huge volume of water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The ship's hull encloses air — its AVERAGE density (steel + air) is less than water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It displaces a volume of water whose weight exceeds the ship's total weight — $F_b > mg$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Net upward force makes it float; cargo loading reduces freeboard until $F_b = mg$ at the waterline.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$F_b = $ weight of displaced water $\\ge mg$",
          "commonErrors": [
                    "Saying 'steel floats' — it's the average density with enclosed air that matters."
          ]
},
        },
      ],
    },
  ],
};
