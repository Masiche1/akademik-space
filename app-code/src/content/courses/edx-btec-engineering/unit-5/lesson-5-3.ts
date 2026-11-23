import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edxbteceng-u5-lesson-5-3",
  code: "5-3",
  title: "Fluid Flow and Hydraulic Systems",
  goal: "I CAN apply the continuity equation, Bernoulli's principle and Pascal's law to analyse fluid flow and hydraulic machines.",
  standards: ["Pearson BTEC L3 National Engineering — Unit 5: Thermal and Fluid Principles", "Engineering calculations: flow rate, hydraulics, Bernoulli"],
  
  vocabulary: [
    { term: "Flow rate", definition: "The volume of fluid passing a point per second, Q = Av, in m³/s." },
    { term: "Continuity equation", definition: "For an incompressible fluid, Av is constant — flow speed rises where the cross-section narrows." },
    { term: "Bernoulli's principle", definition: "Where fluid speed increases, its pressure decreases (and vice versa) for steady flow." },
    { term: "Hydraulic system", definition: "A machine using an incompressible fluid to transmit and multiply force via Pascal's law." },
    { term: "Mechanical advantage", definition: "The ratio of output force to input force in a machine: MA = F_out/F_in." },
    { term: "Incompressible fluid", definition: "A fluid whose volume does not change under pressure — practically all liquids." },
  ],
  concepts: [
    {
      id: "edxbteceng-u5-3-flow",
      title: "Flow rate, continuity and Bernoulli",
      skill: "Calculate volumetric flow rate and velocity in pipes, apply the continuity equation, and explain Bernoulli's principle qualitatively and quantitatively.",
      lesson: {
        sections: [
          {
            heading: "Flow rate and continuity",
            body: "The **flow rate** $Q$ is the volume of fluid passing per second: $Q = Av$, where $A$ is cross-sectional area (m²) and $v$ is average velocity (m/s). For an **incompressible** fluid the same volume must pass every point each second, so $A_1v_1 = A_2v_2$ — the continuity equation.\n\nThis is why water speeds up in a narrow section of a pipe or river (a venturi) and slows in a wide reservoir. Engineers use this to measure flow: if area is known and velocity is measured, $Q$ follows.",
          },
          {
            heading: "Bernoulli's principle",
            body: "As a fluid speeds up, its pressure falls. The full statement: for steady flow of an incompressible, non-viscous fluid, $P + \\tfrac{1}{2}\\rho v^2 + \\rho gh$ is constant along a streamline — pressure energy, kinetic energy and potential energy trade off.\n\nApplications: a venturi tube creates a pressure drop to measure flow; aircraft wings generate lift because air moves faster over the curved upper surface, lowering pressure there; a carburettor/atomiser draws fuel into fast-moving air.",
          },
        ],
        keyFormulas: [
          { name: "Flow rate", statement: "$Q = Av$" },
          { name: "Continuity", statement: "$A_1 v_1 = A_2 v_2$" },
          { name: "Bernoulli", statement: "$P + \\tfrac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$" },
        ],
        workedExample: {
          problem: "Water flows through a pipe at 0.03 m³/s. The pipe narrows from area 0.01 m² to 0.005 m². Find the velocity in each section.",
          solution: "Wide section: $v_1 = Q/A_1 = 0.03/0.01 = 3\\ \\text{m/s}$.\nNarrow section: $v_2 = Q/A_2 = 0.03/0.005 = 6\\ \\text{m/s}$ — velocity doubles as area halves (continuity).",
        },
      },
      questions: [
        {
          id: "edxbteceng-u5-3-flow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For steady flow of an incompressible fluid, which relationship is constant along a pipe?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$A_1v_1 = A_2v_2$"
                    },
                    {
                              "id": "b",
                              "text": "$A_1v_1 = A_2 + v_2$"
                    },
                    {
                              "id": "c",
                              "text": "$v_1/A_1 = v_2/A_2$"
                    },
                    {
                              "id": "d",
                              "text": "$P_1 = P_2$ always"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Continuity equation",
                              "statement": "$A_1v_1 = A_2v_2$ for incompressible flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Continuity requires the same volume per second at every section: $Av$ is constant.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) $A_1v_1 = A_2v_2$"
},
        },
        {
          id: "edxbteceng-u5-3-flow-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Water flows through a pipe of cross-sectional area 0.02 m² at a velocity of 3 m/s. Calculate the volumetric flow rate in m³/s.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "flow rate",
                              "answer": 0.06,
                              "unit": "m³/s"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Flow rate",
                              "statement": "$Q = Av$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute $A = 0.02\\ \\text{m}^2$ and $v = 3\\ \\text{m/s}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$Q = 0.02 \\times 3 = 0.06\\ \\text{m}^3/\\text{s}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$0.06\\ \\text{m}^3/\\text{s}$"
},
        },
        {
          id: "edxbteceng-u5-3-flow-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pipe carrying an incompressible fluid narrows from 0.04 m² to 0.01 m². The velocity in the wide section is 2 m/s. Explain what happens to the velocity in the narrow section and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Continuity equation",
                              "statement": "$A_1v_1 = A_2v_2$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Continuity: $v_2 = A_1v_1/A_2 = (0.04 \\times 2)/0.01 = 8\\ \\text{m/s}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The same volume of fluid must pass each section every second.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "A smaller area forces the fluid to move faster to carry the same flow rate.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Velocity rises to 8 m/s because flow rate Q = Av is conserved."
},
        },
        {
          id: "edxbteceng-u5-3-flow-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A venturi meter has a wide section of area 0.05 m² where water flows at 4 m/s and a throat of area 0.02 m².",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the flow rate Q.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the velocity in the throat.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State Bernoulli's principle in words.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Flow rate",
                              "statement": "$Q = Av$"
                    },
                    {
                              "kind": "law",
                              "name": "Bernoulli",
                              "statement": "Faster flow → lower pressure."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$Q = Av = 0.05 \\times 4 = 0.2\\ \\text{m}^3/\\text{s}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$v_2 = Q/A_2 = 0.2 / 0.02 = 10\\ \\text{m/s}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Where fluid speed increases, its pressure decreases (for steady incompressible flow).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $0.2\\ \\text{m}^3/\\text{s}$ (b) $10\\ \\text{m/s}$ (c) speed up → pressure down"
},
        },
        {
          id: "edxbteceng-u5-3-flow-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Air flows over the top of an aircraft wing. The air above the wing moves faster than the air below it.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Use Bernoulli's principle to explain the pressure difference created.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "In a pipe, area A₁ = 0.1 m² and velocity v₁ = 2 m/s. The area narrows to A₂ = 0.025 m². Calculate v₂.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the SI unit of flow rate Q.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Name one other engineering application of Bernoulli's principle.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Bernoulli",
                              "statement": "$P + \\frac{1}{2}\\rho v^2 = \\text{constant}$ along a streamline."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Faster-moving air has lower pressure (Bernoulli).",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pressure below the wing is therefore higher, producing an upward force — lift.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "$v_2 = A_1v_1/A_2 = (0.1 \\times 2)/0.025 = 8\\ \\text{m/s}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "m³/s.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any valid: venturi flow meter, carburettor, atomiser, sports ball curve, chimney draft.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) faster air → lower pressure → lift (b) 8 m/s (c) m³/s (d) e.g. venturi meter"
},
        },
        {
          id: "edxbteceng-u5-3-flow-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A pipeline carries oil ($\\rho$ constant) at 0.12 m³/s. Section 1 has area 0.04 m²; section 2 is a constriction of area 0.015 m².",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the continuity equation.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the velocity in section 1.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the velocity in section 2.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain, using Bernoulli's principle, why the pressure in section 2 is lower.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Name two real devices that use this pressure drop.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "State the SI unit of velocity.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Continuity",
                              "statement": "$A_1v_1 = A_2v_2$"
                    },
                    {
                              "kind": "law",
                              "name": "Bernoulli",
                              "statement": "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$A_1v_1 = A_2v_2$ (or $Q = Av$ constant).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$v_1 = Q/A_1 = 0.12 / 0.04 = 3\\ \\text{m/s}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$v_2 = Q/A_2 = 0.12 / 0.015 = 8\\ \\text{m/s}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Section 2 is faster (8 m/s vs 3 m/s); by Bernoulli higher speed means lower pressure.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Kinetic energy term $\\frac{1}{2}\\rho v^2$ rises, so static pressure P falls to keep the sum constant.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Any two of: venturi meter, carburettor, atomiser spray, wing lift, chimney.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "f",
                              "reasoning": "m/s.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) $A_1v_1 = A_2v_2$ (b) 3 m/s (c) 8 m/s (d) faster → lower pressure (e) venturi/carburettor etc. (f) m/s"
},
        },
      ],
    },
    {
      id: "edxbteceng-u5-3-hydraulics",
      title: "Hydraulic systems and Pascal's law",
      skill: "Apply Pascal's law to hydraulic presses and jacks, calculate force multiplication and mechanical advantage, and explain energy conservation.",
      lesson: {
        sections: [
          {
            heading: "How hydraulics multiply force",
            body: "Pascal's law states that pressure applied to an enclosed **incompressible** fluid is transmitted equally in all directions. In a hydraulic press/jack, a small input piston of area $A_1$ pushes on the fluid; the same pressure acts on the large output piston of area $A_2$, producing a much larger force.\n\nSince $P = F/A$ and pressure is equal on both sides: $F_1/A_1 = F_2/A_2$, so $F_2 = F_1 \\times (A_2/A_1)$. The force is multiplied by the ratio of piston areas — this ratio is the **mechanical advantage**.",
          },
          {
            heading: "Energy conservation and real systems",
            body: "Force multiplication is paid for in distance: the input piston must move further than the output piston moves. Work in equals work out (ideally): $F_1 d_1 = F_2 d_2$. Because $F_2/F_1 = A_2/A_1$, the output displacement is smaller by the same factor.\n\nReal systems lose energy to friction and fluid leakage, so actual output force is slightly less than ideal. Applications: car brakes, hydraulic jacks, excavators, injection moulding presses, aircraft controls.",
          },
        ],
        keyFormulas: [
          { name: "Pascal's law", statement: "$F_1/A_1 = F_2/A_2$" },
          { name: "Mechanical advantage", statement: "$MA = F_2/F_1 = A_2/A_1$" },
          { name: "Work conservation", statement: "$F_1d_1 = F_2d_2$ (ideal)" },
        ],
        workedExample: {
          problem: "A hydraulic jack has input piston area 0.01 m² and output piston area 0.2 m². An input force of 100 N is applied. Find the output force.",
          solution: "$F_2 = F_1 \\times (A_2/A_1) = 100 \\times (0.2/0.01) = 100 \\times 20 = 2000\\ \\text{N}$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u5-3-hydraulics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hydraulic systems multiply force because of which principle?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pascal's law — pressure is transmitted equally through an enclosed fluid"
                    },
                    {
                              "id": "b",
                              "text": "Archimedes' principle"
                    },
                    {
                              "id": "c",
                              "text": "Bernoulli's principle"
                    },
                    {
                              "id": "d",
                              "text": "Hooke's law"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Pascal's law",
                              "statement": "Pressure applied to enclosed fluid is transmitted equally in all directions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hydraulic machines rely on Pascal's law: equal pressure on both pistons lets a large area produce a large force.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) Pascal's law"
},
        },
        {
          id: "edxbteceng-u5-3-hydraulics-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A hydraulic press has input piston area 0.01 m² and output piston area 0.15 m². A force of 150 N is applied to the input piston. Calculate the output force.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "output force",
                              "answer": 2250,
                              "unit": "N"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Pascal's law",
                              "statement": "$F_2 = F_1 \\times A_2/A_1$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$F_2 = 150 \\times (0.15/0.01) = 150 \\times 15$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$F_2 = 2250\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$2250\\ \\text{N}$"
},
        },
        {
          id: "edxbteceng-u5-3-hydraulics-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a hydraulic jack lifts a heavy load using Pascal's law, and why the input piston must move a greater distance than the output piston.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Pascal's law",
                              "statement": "Pressure transmitted equally through enclosed fluid."
                    },
                    {
                              "kind": "principle",
                              "name": "Work conservation",
                              "statement": "$F_1d_1 = F_2d_2$ ideally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Input force creates pressure $P = F_1/A_1$ transmitted unchanged to the large output piston.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "The larger output area gives $F_2 = PA_2$, a much bigger force.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Energy/work is conserved: bigger output force means smaller output displacement — input piston travels further.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Equal pressure on a larger output area multiplies force; the gain in force is paid for by greater input displacement."
},
        },
        {
          id: "edxbteceng-u5-3-hydraulics-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A hydraulic press has an input piston of area 0.02 m² and an output piston of area 0.3 m². An input force of 800 N is applied.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the output force.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State what happens to the distance moved by the output piston compared with the input piston.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Pascal's law",
                              "statement": "$F_2 = F_1 \\times A_2/A_1$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$F_2 = 800 \\times (0.3/0.02) = 800 \\times 15$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$= 12\\ 000\\ \\text{N}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "The output piston moves a smaller distance than the input piston.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Force gain = area ratio 15, so displacement ratio is inverse: output moves $1/15$ of input distance (work conservation $F_1d_1 = F_2d_2$).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $12\\ 000\\ \\text{N}$ (b) output moves less — by factor ~1/15"
},
        },
        {
          id: "edxbteceng-u5-3-hydraulics-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A hydraulic brake uses pistons of area $A_1 = 0.005\\ \\text{m}^2$ (master cylinder) and $A_2 = 0.1\\ \\text{m}^2$ (slave cylinder).",
          parts: [
          {
                    "label": "a",
                    "prompt": "State Pascal's law.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the force needed at the master cylinder to produce 9000 N at the slave cylinder.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why the hydraulic fluid must be incompressible.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Name one other application of hydraulic systems.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "law",
                              "name": "Pascal's law",
                              "statement": "$F_1/A_1 = F_2/A_2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pressure applied to an enclosed fluid is transmitted equally in all directions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "$F_1 = F_2 \\times (A_1/A_2) = 9000 \\times (0.005/0.1)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$= 9000 \\times 0.05 = 450\\ \\text{N}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "If the fluid compressed, pressure would not transmit instantly and the output force/displacement would be unreliable.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Any valid: car jack, excavator, injection moulding, aircraft flaps, clutch.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Pascal's law (b) 450 N (c) incompressible → pressure transmits fully (d) e.g. car jack"
},
        },
        {
          id: "edxbteceng-u5-3-hydraulics-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A hydraulic press has input piston area $A_1 = 0.01\\ \\text{m}^2$ and output piston area $A_2 = 0.15\\ \\text{m}^2$. A force of 800 N is applied to the input piston, which moves 30 cm.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define mechanical advantage.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the output force.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the mechanical advantage of the press.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Calculate the distance the output piston moves (ideal).",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Verify that work in equals work out.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Explain why a real press delivers slightly less output force than the ideal value.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mechanical advantage",
                              "statement": "$MA = F_{\\text{out}}/F_{\\text{in}}$"
                    },
                    {
                              "kind": "law",
                              "name": "Pascal's law",
                              "statement": "$F_1/A_1 = F_2/A_2$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Ratio of output force to input force.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "$F_2 = 800 \\times (0.15/0.01) = 800 \\times 15 = 12\\ 000\\ \\text{N}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$MA = 12\\ 000 / 800 = 15$ (equals $A_2/A_1 = 15$).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Work conservation: $d_2 = F_1d_1/F_2 = (800 \\times 0.30)/12\\ 000$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "$d_2 = 240/12\\ 000 = 0.02\\ \\text{m} = 2\\ \\text{cm}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Work in $= 800 \\times 0.30 = 240\\ \\text{J}$; work out $= 12\\ 000 \\times 0.02 = 240\\ \\text{J}$ — equal.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "f",
                              "reasoning": "Friction in seals/pistons and fluid leakage dissipate energy, reducing real output force.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $F_{out}/F_{in}$ (b) 12 000 N (c) 15 (d) 2 cm (e) both 240 J (f) friction/leakage losses",
          "commonErrors": [
                    "Forgetting that force multiplication trades against displacement — output moves less."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u5-flow-notes",
      title: "Fluid flow and hydraulics — notes",
      summary: "Q = Av and A₁v₁ = A₂v₂ for continuity; Bernoulli: faster → lower pressure; hydraulics: F₂ = F₁·A₂/A₁.",
      sections: [
        { heading: "Key formulas", body: "$Q = Av$; $A_1v_1 = A_2v_2$; Bernoulli $P + \\frac{1}{2}\\rho v^2 + \\rho gh = $ const; hydraulics $F_1/A_1 = F_2/A_2$; $MA = A_2/A_1$." },
        { heading: "Continuity intuition", body: "Same volume per second must pass every section — narrower pipe, faster flow." },
        { heading: "Hydraulics intuition", body: "Force gain = area ratio; distance lost by same ratio; work conserved." },
      ],
    },
  ],
};
