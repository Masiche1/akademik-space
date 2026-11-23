import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "edxbteceng-u7-lesson-7-1",
  code: "7-1",
  title: "Trigonometry and Resolving Forces",
  goal: "I CAN use sine, cosine and tangent to find unknown sides and angles, and resolve a force into perpendicular components.",
  standards: ["Pearson BTEC L3 National Engineering — Engineering mathematics", "Trigonometry: sin, cos, tan and force resolution"],
  
  vocabulary: [
    { term: "Sine", definition: "Ratio opposite/hypotenuse in a right-angled triangle: sin θ = opp/hyp." },
    { term: "Cosine", definition: "Ratio adjacent/hypotenuse: cos θ = adj/hyp." },
    { term: "Tangent", definition: "Ratio opposite/adjacent: tan θ = opp/adj." },
    { term: "Resolving a force", definition: "Splitting a force into perpendicular horizontal and vertical components." },
    { term: "Hypotenuse", definition: "The longest side of a right-angled triangle, opposite the right angle." },
    { term: "Resultant", definition: "The single force equivalent to two or more forces combined." },
  ],
  concepts: [
    {
      id: "edxbteceng-u7-1-trig",
      title: "Trigonometric ratios and right-angled triangles",
      skill: "Use sin, cos and tan to calculate unknown sides and angles in right-angled triangles applied to engineering problems.",
      lesson: {
        sections: [
          {
            heading: "The three ratios",
            body: "For a right-angled triangle with angle $\\theta$, opposite side $\\text{opp}$, adjacent side $\\text{adj}$ and hypotenuse $\\text{hyp}$:\n\n- $\\sin\\theta = \\text{opp}/\\text{hyp}$\n- $\\cos\\theta = \\text{adj}/\\text{hyp}$\n- $\\tan\\theta = \\text{opp}/\\text{adj}$\n\nUseful values: $\\sin 30° = 0.5$, $\\cos 30° = 0.866$, $\\tan 30° = 0.577$; $\\sin 45° = \\cos 45° = 0.707$, $\\tan 45° = 1$; $\\sin 60° = 0.866$, $\\cos 60° = 0.5$.\n\nTo find an angle use the **inverse** functions: $\\theta = \\sin^{-1}(\\text{opp}/\\text{hyp})$ etc.",
          },
          {
            heading: "Pythagoras and engineering triangles",
            body: "The hypotenuse also satisfies $a^2 + b^2 = c^2$ for legs $a$, $b$ and hypotenuse $c$. Common triples: 3-4-5, 5-12-13, 8-15-17.\n\nEngineering applications: ramps and inclines (angle from rise/run via tan), ladders against walls, forces at angles, roof trusses, road gradients. A gradient of 1:10 means rise/run = 0.1, so the angle is $\\tan^{-1}(0.1) \\approx 5.7°$.",
          },
        ],
        keyFormulas: [
          { name: "Sine", statement: "$\\sin\\theta = \\text{opp}/\\text{hyp}$" },
          { name: "Cosine", statement: "$\\cos\\theta = \\text{adj}/\\text{hyp}$" },
          { name: "Tangent", statement: "$\\tan\\theta = \\text{opp}/\\text{adj}$" },
          { name: "Pythagoras", statement: "$a^2 + b^2 = c^2$" },
        ],
        workedExample: {
          problem: "A ramp rises 1.5 m over a horizontal run of 6 m. Find the angle of the ramp to the horizontal.",
          solution: "$\\tan\\theta = \\text{rise}/\\text{run} = 1.5/6 = 0.25$\n$\\theta = \\tan^{-1}(0.25) \\approx 14.0°$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u7-1-trig-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a right-angled triangle, sin θ is defined as which ratio?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "opposite ÷ hypotenuse"
                    },
                    {
                              "id": "b",
                              "text": "adjacent ÷ hypotenuse"
                    },
                    {
                              "id": "c",
                              "text": "opposite ÷ adjacent"
                    },
                    {
                              "id": "d",
                              "text": "hypotenuse ÷ opposite"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sine",
                              "statement": "$\\sin\\theta = \\text{opp}/\\text{hyp}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sine = opposite/hypotenuse.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) opposite ÷ hypotenuse"
},
        },
        {
          id: "edxbteceng-u7-1-trig-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A right-angled triangle has opposite side 3 m and hypotenuse 5 m. Find sin θ.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "sin θ",
                              "answer": 0.6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Sine",
                              "statement": "$\\sin\\theta = \\text{opp}/\\text{hyp}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\sin\\theta = 3/5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\sin\\theta = 0.6$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.6"
},
        },
        {
          id: "edxbteceng-u7-1-trig-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ladder 5 m long leans against a wall with its foot 3 m from the wall. Calculate the angle the ladder makes with the ground.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cosine",
                              "statement": "$\\cos\\theta = \\text{adj}/\\text{hyp}$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adjacent (foot distance) = 3 m, hypotenuse (ladder) = 5 m.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\cos\\theta = 3/5 = 0.6$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\theta = \\cos^{-1}(0.6) \\approx 53.1°$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$\\approx 53.1°$",
          "commonErrors": [
                    "Using sin instead of cos — the adjacent side is the foot distance."
          ]
},
        },
        {
          id: "edxbteceng-u7-1-trig-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A roof truss has a horizontal beam 4 m long and a rafter meeting it at 30°.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the vertical height of the roof apex above the beam.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the length of the rafter.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Tangent",
                              "statement": "$\\tan\\theta = \\text{opp}/\\text{adj}$"
                    },
                    {
                              "kind": "formula",
                              "name": "Cosine",
                              "statement": "$\\cos\\theta = \\text{adj}/\\text{hyp}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$\\tan 30° = h/4$ → $h = 4 \\times \\tan 30°$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$h = 4 \\times 0.577 \\approx 2.31\\ \\text{m}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\cos 30° = 4/L$ → $L = 4/\\cos 30°$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$L = 4/0.866 \\approx 4.62\\ \\text{m}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $\\approx 2.31$ m (b) $\\approx 4.62$ m"
},
        },
        {
          id: "edxbteceng-u7-1-trig-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A road has a gradient of 1:12 (rise:run).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Express the gradient as a decimal slope.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Calculate the angle of the road to the horizontal.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the vertical rise over a horizontal distance of 60 m.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State one engineering reason for limiting road gradients.",
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
                              "name": "Gradient",
                              "statement": "rise/run as a ratio or decimal."
                    },
                    {
                              "kind": "formula",
                              "name": "Tangent",
                              "statement": "$\\tan\\theta = \\text{rise}/\\text{run}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Slope = 1/12 $\\approx 0.0833$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\tan\\theta = 1/12$ → $\\theta = \\tan^{-1}(0.0833)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\theta \\approx 4.76°$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Rise = 60 × (1/12) = 5 m.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Safety — steep gradients are harder for vehicles to climb and descend safely.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) 0.0833 (b) $\\approx 4.76°$ (c) 5 m (d) vehicle safety"
},
        },
        {
          id: "edxbteceng-u7-1-trig-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A crane jib of length 12 m is raised so it makes 40° with the horizontal. The jib pivot is 8 m above the ground.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the horizontal distance from the pivot to the jib tip.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the height of the jib tip above the pivot.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Calculate the height of the jib tip above the ground.",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "State which trigonometric ratio you used for each part and why.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Cosine",
                              "statement": "$\\cos\\theta = \\text{adj}/\\text{hyp}$"
                    },
                    {
                              "kind": "formula",
                              "name": "Sine",
                              "statement": "$\\sin\\theta = \\text{opp}/\\text{hyp}$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Horizontal = adj: $12\\cos 40° = 12 \\times 0.766$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$\\approx 9.19\\ \\text{m}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Height above pivot = opp: $12\\sin 40° = 12 \\times 0.643$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\approx 7.71\\ \\text{m}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$8 + 7.71 = 15.71\\ \\text{m}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Cosine for horizontal (adjacent), sine for height (opposite) — correct sides relative to angle.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $\\approx 9.19$ m (b) $\\approx 7.71$ m (c) $\\approx 15.71$ m (d) cos→adj, sin→opp"
},
        },
      ],
    },
    {
      id: "edxbteceng-u7-1-forces",
      title: "Resolving forces into components",
      skill: "Resolve a force acting at an angle into horizontal and vertical components using trigonometry, and combine components to find resultants.",
      lesson: {
        sections: [
          {
            heading: "Force resolution",
            body: "A force $F$ acting at angle $\\theta$ above the horizontal can be split into two perpendicular components:\n\n- Horizontal: $F_x = F\\cos\\theta$\n- Vertical: $F_y = F\\sin\\theta$\n\nThis is the reverse of finding a resultant. Engineers resolve forces on inclined planes, crane loads, bolts and linkages — e.g. a 100 N pull at 30° gives $100\\cos30° = 86.6\\ \\text{N}$ horizontally and $100\\sin30° = 50\\ \\text{N}$ vertically.\n\nIf the force acts below the horizontal or on an incline, choose axes carefully — resolve parallel and perpendicular to the surface.",
          },
          {
            heading: "Combining components",
            body: "Two perpendicular components $F_x$ and $F_y$ can be recombined into a resultant $F = \\sqrt{F_x^2 + F_y^2}$ at angle $\\theta = \\tan^{-1}(F_y/F_x)$.\n\nExample: a sledge pulled with 60 N horizontally and 80 N vertically has resultant $\\sqrt{60^2+80^2} = 100\\ \\text{N}$ (a 3-4-5 triangle scaled).\n\nFor forces at arbitrary angles, resolve each into x and y components first, sum the x-components and y-components separately, then find the resultant.",
          },
        ],
        keyFormulas: [
          { name: "Horizontal component", statement: "$F_x = F\\cos\\theta$" },
          { name: "Vertical component", statement: "$F_y = F\\sin\\theta$" },
          { name: "Resultant", statement: "$F = \\sqrt{F_x^2 + F_y^2}$" },
          { name: "Resultant angle", statement: "$\\theta = \\tan^{-1}(F_y/F_x)$" },
        ],
        workedExample: {
          problem: "A 200 N force acts at 40° above the horizontal. Find its horizontal and vertical components.",
          solution: "$F_x = 200\\cos40° = 200 \\times 0.766 = 153.2\\ \\text{N}$\n$F_y = 200\\sin40° = 200 \\times 0.643 = 128.6\\ \\text{N}$.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u7-1-forces-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A force F acts at angle θ above the horizontal. The horizontal component is given by:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$F\\cos\\theta$"
                    },
                    {
                              "id": "b",
                              "text": "$F\\sin\\theta$"
                    },
                    {
                              "id": "c",
                              "text": "$F\\tan\\theta$"
                    },
                    {
                              "id": "d",
                              "text": "$F/\\cos\\theta$"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Force resolution",
                              "statement": "$F_x = F\\cos\\theta$, $F_y = F\\sin\\theta$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Horizontal is adjacent → cosine.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(a) $F\\cos\\theta$"
},
        },
        {
          id: "edxbteceng-u7-1-forces-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 100 N force acts at 30° above the horizontal. Calculate the vertical component.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "vertical component",
                              "answer": 50,
                              "unit": "N"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Vertical component",
                              "statement": "$F_y = F\\sin\\theta$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$F_y = 100\\sin30° = 100 \\times 0.5$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$F_y = 50\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$50\\ \\text{N}$"
},
        },
        {
          id: "edxbteceng-u7-1-forces-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A crate is pulled by a rope at 40° to the horizontal with a tension of 150 N. Find the horizontal and vertical components of the pull.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Force resolution",
                              "statement": "$F_x = F\\cos\\theta$, $F_y = F\\sin\\theta$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$F_x = 150\\cos40° = 150 \\times 0.766 \\approx 114.9\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$F_y = 150\\sin40° = 150 \\times 0.643 \\approx 96.4\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both components given correctly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$F_x \\approx 114.9$ N, $F_y \\approx 96.4$ N"
},
        },
        {
          id: "edxbteceng-u7-1-forces-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two perpendicular forces act on a bracket: 60 N horizontally and 80 N vertically.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the magnitude of the resultant force.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate the angle of the resultant to the horizontal.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Resultant",
                              "statement": "$F = \\sqrt{F_x^2+F_y^2}$"
                    },
                    {
                              "kind": "formula",
                              "name": "Resultant angle",
                              "statement": "$\\theta = \\tan^{-1}(F_y/F_x)$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$F = \\sqrt{60^2 + 80^2} = \\sqrt{3600+6400} = \\sqrt{10000}$.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "$F = 100\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\theta = \\tan^{-1}(80/60) = \\tan^{-1}(1.333)$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$\\theta \\approx 53.1°$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) $100$ N (b) $\\approx 53.1°$"
},
        },
        {
          id: "edxbteceng-u7-1-forces-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A trolley is pulled up a 20° incline by a rope parallel to the slope with tension 120 N.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Resolve the tension into components parallel and perpendicular to the slope.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why resolving parallel/perpendicular to the slope (not horizontal/vertical) is useful here.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Force resolution",
                              "statement": "Components depend on chosen axes."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The rope is parallel to the slope, so the tension acts entirely along the slope: parallel component = 120 N, perpendicular component = 0 N.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Gravity also resolves along the slope, so parallel/perpendicular components match the motion/friction directions.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "This simplifies applying Newton's laws along and across the incline.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) parallel 120 N, perpendicular 0 N (b) aligns with gravity/friction components",
          "commonErrors": [
                    "Resolving relative to horizontal when the incline is the natural reference."
          ]
},
        },
        {
          id: "edxbteceng-u7-1-forces-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A cable supporting a lamp makes 35° with the horizontal. The lamp weighs 80 N and hangs vertically.",
          parts: [
          {
                    "label": "a",
                    "prompt": "The vertical component of cable tension must equal the weight. Write an equation for this.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate the tension in the cable.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Calculate the horizontal component of the tension.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why two cables at equal angles are often used instead of one.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Force resolution",
                              "statement": "$F_y = F\\sin\\theta$, $F_x = F\\cos\\theta$"
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "$T\\sin35° = 80$ (vertical component balances weight).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$T = 80/\\sin35° = 80/0.574$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "$T \\approx 139.4\\ \\text{N}$.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "$T_x = T\\cos35° = 139.4 \\times 0.819$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "$T_x \\approx 114.1\\ \\text{N}$.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Two symmetric cables cancel horizontal components.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "This avoids sideways pull on the mounting point and reduces tension per cable.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) $T\\sin35°=80$ (b) $\\approx 139.4$ N (c) $\\approx 114.1$ N (d) cancels horizontal pull"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u7-trig-notes",
      title: "Trigonometry and forces — notes",
      summary: "sin=opp/hyp, cos=adj/hyp, tan=opp/adj. Resolve F into Fcosθ (horizontal) and Fsinθ (vertical). Resultant = √(Fx²+Fy²).",
      sections: [
        { heading: "Choosing the ratio", body: "Know which sides you have: opposite+adjacent→tan; opposite+hypotenuse→sin; adjacent+hypotenuse→cos." },
        { heading: "Force resolution", body: "Fcosθ horizontal, Fsinθ vertical. Recombine with Pythagoras for resultant." },
        { heading: "Inclines", body: "Resolve parallel/perpendicular to the slope to match gravity and friction." },
      ],
    },
  ],
};
