import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "edxbteceng-u7-lesson-7-2",
  code: "7-2",
  title: "Vectors and Force Equilibrium",
  goal: "I CAN represent forces as vectors, calculate vector magnitudes and components, and determine equilibrium conditions for engineering structures.",
  standards: ["Pearson BTEC L3 National Engineering — Engineering mathematics", "Vectors: components, resultant, equilibrium"],
  
  vocabulary: [
    { term: "Vector", definition: "A quantity with magnitude and direction (e.g. force, velocity); contrasted with scalar which has magnitude only." },
    { term: "Scalar", definition: "A quantity with magnitude only, no direction (e.g. mass, temperature, speed)." },
    { term: "Vector component", definition: "The projection of a vector onto an axis, e.g. x and y components." },
    { term: "Resultant vector", definition: "The single vector equivalent to the vector sum of several vectors." },
    { term: "Equilibrium", definition: "The state where all forces on a body balance — no net force and no net turning effect." },
    { term: "Unit vector", definition: "A vector of length 1 in a given direction." },
  ],
  concepts: [
    {
      id: "edxbteceng-u7-2-vectors",
      title: "Vector components and magnitude",
      skill: "Resolve vectors into x and y components, find vector magnitude using Pythagoras, and convert between component and magnitude-angle form.",
      lesson: {
        sections: [
          {
            heading: "Vectors vs scalars",
            body: "A **vector** has both magnitude and direction — force, velocity, displacement. A **scalar** has magnitude only — mass, speed, distance, temperature. Speed is scalar; velocity is vector.\n\nA 2D vector can be written as components $(F_x, F_y)$ or as magnitude and angle $(F, \\theta)$. To convert: $F_x = F\\cos\\theta$, $F_y = F\\sin\\theta$. To go back: $F = \\sqrt{F_x^2+F_y^2}$, $\\theta = \\tan^{-1}(F_y/F_x)$.",
          },
          {
            heading: "Adding vectors",
            body: "Vectors add by adding corresponding components: $(a_x + b_x,\\ a_y + b_y)$. Subtract by reversing the direction of the subtracted vector.\n\nA vector's magnitude is always positive; its direction is measured from the positive x-axis, anticlockwise. Negative components indicate direction along the negative axis. This component method works for any number of forces or velocities.",
          },
        ],
        keyFormulas: [
          { name: "Magnitude", statement: "$|F| = \\sqrt{F_x^2 + F_y^2}$" },
          { name: "Components", statement: "$F_x = F\\cos\\theta$, $F_y = F\\sin\\theta$" },
          { name: "Vector sum", statement: "$(a_x+b_x,\\ a_y+b_y)$" },
        ],
        workedExample: {
          problem: "A force vector has components Fx = 30 N and Fy = 40 N. Find its magnitude and direction.",
          solution: "$|F| = \\sqrt{30^2+40^2} = \\sqrt{2500} = 50\\ \\text{N}$\n$\\theta = \\tan^{-1}(40/30) = \\tan^{-1}(1.333) \\approx 53.1°$ above horizontal.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u7-2-vectors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a vector quantity?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force"
                    },
                    {
                              "id": "b",
                              "text": "Mass"
                    },
                    {
                              "id": "c",
                              "text": "Temperature"
                    },
                    {
                              "id": "d",
                              "text": "Speed"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Vector",
                              "statement": "Has magnitude and direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Force has magnitude and direction; mass, temperature and speed are scalars.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) force"
},
        },
        {
          id: "edxbteceng-u7-2-vectors-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A vector has magnitude 10 N at 60° above the horizontal. Calculate its x-component.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "x-component",
                              "answer": 5,
                              "unit": "N"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Components",
                              "statement": "$F_x = F\\cos\\theta$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$F_x = 10\\cos60° = 10 \\times 0.5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$F_x = 5\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5\\ \\text{N}$"
},
        },
        {
          id: "edxbteceng-u7-2-vectors-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A force has components Fx = 12 N and Fy = 5 N. Calculate its magnitude and direction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Magnitude",
                              "statement": "$|F| = \\sqrt{F_x^2+F_y^2}$"
                    },
                    {
                              "kind": "formula",
                              "name": "Direction",
                              "statement": "$\\theta = \\tan^{-1}(F_y/F_x)$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$|F| = \\sqrt{144+25} = \\sqrt{169} = 13\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\theta = \\tan^{-1}(5/12) = \\tan^{-1}(0.4167)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\theta \\approx 22.6°$ above horizontal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$13$ N at $\\approx 22.6°$"
},
        },
        {
          id: "edxbteceng-u7-2-vectors-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two forces act on a point: A = (40 N, 0°) i.e. 40 N east, and B = (0 N, 30 N) i.e. 30 N north.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the x and y components of each force.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the resultant force vector (components).",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the magnitude of the resultant.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Vector addition",
                              "statement": "Add components separately."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A = (40, 0); B = (0, 30).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Resultant = (40+0, 0+30) = (40, 30) N.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$|R| = \\sqrt{40^2+30^2} = \\sqrt{2500} = 50\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) A(40,0), B(0,30) (b) (40,30) N (c) 50 N"
},
        },
        {
          id: "edxbteceng-u7-2-vectors-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A drone experiences three forces simultaneously: wind pushes it with 10 N east; motor thrust gives 10 N north; gravity pulls 15 N down.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Assign axes (x east, y north, z up) and write each force as a vector.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the resultant of the horizontal (x,y) forces.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State whether the drone is in equilibrium and why.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Vector components",
                              "statement": "Resolve each force into components."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Wind = (10,0,0); thrust = (0,10,0); gravity = (0,0,−15).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Horizontal resultant = (10,10) → magnitude $\\sqrt{200} \\approx 14.1\\ \\text{N}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Not in equilibrium — net force exists in all three directions.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Gravity isn't balanced (no upward 15 N force); horizontal forces don't cancel either.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) (10,0,0),(0,10,0),(0,0,−15) (b) ~14.1 N (c) not equilibrium"
},
        },
        {
          id: "edxbteceng-u7-2-vectors-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A surveyor measures a boundary: from point P, boundary goes 30 m east to Q, then 40 m north to R.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write the displacement vectors PQ and QR.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Find the resultant displacement PR (components).",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the straight-line distance PR.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Calculate the bearing of PR from P (angle clockwise from north).",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "State why vectors are used rather than scalars for displacement.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Vector addition",
                              "statement": "Add components separately."
                    },
                    {
                              "kind": "formula",
                              "name": "Magnitude",
                              "statement": "$|d| = \\sqrt{x^2+y^2}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "PQ = (30, 0) east; QR = (0, 40) north (x east, y north).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "PR = (30+0, 0+40) = (30, 40) m.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$|PR| = \\sqrt{900+1600} = \\sqrt{2500} = 50\\ \\text{m}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Angle from east = $\\tan^{-1}(40/30) = 53.1°$; bearing from north = $90° - 53.1° = 36.9°$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "e",
                              "reasoning": "Displacement needs direction — 30+40=70 m scalar distance would be wrong path; vectors capture the actual route.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) (30,0),(0,40) (b) (30,40) (c) 50 m (d) 36.9° (e) direction matters"
},
        },
      ],
    },
    {
      id: "edxbteceng-u7-2-equilibrium",
      title: "Force equilibrium and resultants",
      skill: "Apply the conditions for equilibrium — vector sum of forces equals zero — to analyse structures and machines.",
      lesson: {
        sections: [
          {
            heading: "Conditions for equilibrium",
            body: "A body is in **equilibrium** when it has no net force AND no net turning effect (moment). For forces in a plane, this means:\n\n- Sum of x-components = 0\n- Sum of y-components = 0\n\nThe **resultant** of all forces must be zero. If three forces act on a body in equilibrium, they must form a closed triangle — each force's components balance the others.\n\nThis is the basis of **static analysis**: trusses, bridges, cranes, shelves and building frames are designed so forces balance.",
          },
          {
            heading: "Three-force members",
            body: "A common case: a body held by two cables plus its weight. If the body is in equilibrium, the two cable tensions and the weight form a closed vector triangle.\n\nExample: a 100 N weight hangs from two symmetric cables at 30° to horizontal. Each cable tension T has vertical component $T\\sin30°$; two cables share the load: $2T\\sin30° = 100$ → $T = 100\\ \\text{N}$. The horizontal components cancel by symmetry.\n\nNon-symmetric cases need component equations: $\\sum F_x = 0$ and $\\sum F_y = 0$ solved simultaneously.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium", statement: "$\\sum F_x = 0$ and $\\sum F_y = 0$" },
          { name: "Resultant = 0", statement: "vector sum of all forces is zero" },
          { name: "Three-force rule", statement: "forces form a closed triangle" },
        ],
        workedExample: {
          problem: "A 200 N crate hangs from two vertical ropes. What tension does each rope carry?",
          solution: "Two ropes share equally: each carries 200/2 = 100 N. Sum Fy = 100 + 100 − 200 = 0 — equilibrium.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u7-2-equilibrium-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a body in equilibrium under coplanar forces, the vector sum of all forces must be:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Zero"
                    },
                    {
                              "id": "b",
                              "text": "Equal to the weight"
                    },
                    {
                              "id": "c",
                              "text": "Maximum"
                    },
                    {
                              "id": "d",
                              "text": "Twice the weight"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Equilibrium",
                              "statement": "$\\sum F = 0$ — no net force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Equilibrium requires net force = 0.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) zero"
},
        },
        {
          id: "edxbteceng-u7-2-equilibrium-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 60 N picture hangs from two vertical wires. What is the tension in each wire?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "tension",
                              "answer": 30,
                              "unit": "N"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Equilibrium",
                              "statement": "$\\sum F_y = 0$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two wires share equally: 60/2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Tension = 30 N each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$30$ N"
},
        },
        {
          id: "edxbteceng-u7-2-equilibrium-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sign of weight 50 N hangs from two cables. Cable A pulls with 40 N horizontally left and cable B provides vertical support. Explain the equilibrium condition and find the vertical component needed from cable B.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Equilibrium",
                              "statement": "$\\sum F_x = 0$, $\\sum F_y = 0$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For equilibrium, vertical forces must balance the 50 N weight.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Cable B's vertical component must equal 50 N upward.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Horizontal: cable A's 40 N must be balanced by another horizontal force (e.g. wall reaction).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Cable B vertical component = 50 N; horizontal forces must also balance."
},
        },
        {
          id: "edxbteceng-u7-2-equilibrium-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A 100 N weight hangs from two symmetric cables each at 30° to the horizontal.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why the horizontal components cancel.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the tension in each cable.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Equilibrium",
                              "statement": "$\\sum F_x = 0$"
                    },
                    {
                              "kind": "formula",
                              "name": "Vertical component",
                              "statement": "$T\\sin\\theta$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Equal angles and tensions → equal horizontal components in opposite directions.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each cable's vertical component = $T\\sin30° = 0.5T$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two cables: $2 \\times 0.5T = 100$ → $T = 100\\ \\text{N}$.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) symmetric → horizontal cancels (b) $T = 100$ N each"
},
        },
        {
          id: "edxbteceng-u7-2-equilibrium-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Three forces act on a bracket: 30 N east, 40 N north, and a third force R that keeps it in equilibrium.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Find the vector sum of the 30 N and 40 N forces.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the direction and magnitude of force R needed for equilibrium.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how you know the bracket is in equilibrium.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Equilibrium",
                              "statement": "Resultant must be zero."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "(30, 0) + (0, 40) = (30, 40); magnitude $\\sqrt{2500} = 50$ N.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "R = (−30, −40), magnitude 50 N, pointing southwest (opposite to resultant).",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "R cancels the resultant exactly — sum of all forces = 0.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "With zero net force the bracket has no tendency to accelerate.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) (30,40), 50 N (b) R = 50 N opposite direction (c) forces sum to zero"
},
        },
        {
          id: "edxbteceng-u7-2-equilibrium-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A 150 N crate is suspended by two ropes. Rope A pulls at 40° above horizontal to the left; rope B pulls at 50° above horizontal to the right.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write equations for equilibrium in the x and y directions.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the vertical equilibrium equation (sum of Fy = 0).",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why you cannot find both tensions from the vertical equation alone.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State what additional information would be needed to solve for both tensions.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Explain the 'three-force member' principle that simplifies such problems.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Equilibrium",
                              "statement": "$\\sum F_x = 0$, $\\sum F_y = 0$"
                    },
                    {
                              "kind": "principle",
                              "name": "Three-force rule",
                              "statement": "Three forces in equilibrium form a closed triangle."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\sum F_x$: $T_A\\cos40° = T_B\\cos50°$ (horizontal balance). $\\sum F_y$: $T_A\\sin40° + T_B\\sin50° = 150$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$T_A\\sin40° + T_B\\sin50° - 150 = 0$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "One equation has two unknowns ($T_A$, $T_B$) — infinitely many solutions.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Need the horizontal equilibrium equation too (second equation) to solve simultaneously.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Three forces in equilibrium form a closed triangle; can be solved by sine rule without components.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\sum F_x=0$, $\\sum F_y=0$ (b) $T_A\\sin40°+T_B\\sin50°=150$ (c) two unknowns one equation (d) need both equations (e) closed triangle",
          "commonErrors": [
                    "Trying to solve with only the vertical equation — need both x and y equilibrium."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u7-vectors-notes",
      title: "Vectors and equilibrium — notes",
      summary: "Vector = magnitude + direction. Components Fx=Fcosθ, Fy=Fsinθ; resultant=√(Fx²+Fy²). Equilibrium: ΣFx=0, ΣFy=0.",
      sections: [
        { heading: "Component method", body: "Resolve every vector into x and y components, sum each direction, then find magnitude/direction of resultant." },
        { heading: "Equilibrium", body: "Net force must be zero — both ΣFx=0 and ΣFy=0. Symmetric setups cancel automatically." },
        { heading: "Three-force members", body: "Three forces in equilibrium form a closed triangle — solvable by sine rule." },
      ],
    },
  ],
};
