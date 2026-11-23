import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m0-u7-lesson-7-2",
  code: "7-2",
  title: "3D Shapes",
  goal: "I CAN name and describe solid shapes like cube, sphere, cylinder and cone.",
  standards: ["K.G.A.1", "K.G.A.2"],
  vocabulary: [
    { term: "3D shape", definition: "A solid shape you can hold." },
    { term: "Cube", definition: "A box shape with 6 square faces." },
    { term: "Sphere", definition: "A round ball shape." },
    { term: "Cylinder", definition: "A can shape with two circular ends." },
    { term: "Cone", definition: "A shape with a point and a round base." },
    { term: "Face", definition: "A flat surface of a 3D shape." },
    { term: "Edge", definition: "Where two faces meet." },
    { term: "Vertex", definition: "A corner point of a 3D shape." },
  ],
  concepts: [
    {
      id: "m0-u7-3d-shapes",
      title: "3D shapes",
      skill: "Name and describe solid 3D shapes and their faces, edges and vertices.",
      lesson: {
        sections: [
          {
            heading: "Solid shapes",
            body: "**3D shapes** are solid — you can hold them: **cube** (box), **sphere** (ball), **cylinder** (can), **cone** (ice cream cone).",
          },
          {
            heading: "Faces, edges, vertices",
            body: "3D shapes have **faces** (flat surfaces), **edges** (where faces meet), and **vertices** (corner points). A cube has 6 faces, 12 edges, 8 vertices.",
          },
        ],
        keyFormulas: [
          { name: "3D shapes", statement: "Cube=6 faces, Sphere=0 faces, Cylinder=2 circular faces, Cone=1 circular face + point." },
        ],
        workedExample: {
          problem: "What shape is a soup can?",
          solution: "A soup can is a **cylinder** — two circular ends and a curved side.",
        },
      },
      questions: [
        {
          id: "m0-u7-3d-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A ball is an example of which 3D shape?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cube"
                    },
                    {
                              "id": "b",
                              "text": "sphere"
                    },
                    {
                              "id": "c",
                              "text": "cylinder"
                    },
                    {
                              "id": "d",
                              "text": "cone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ball = sphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ball = sphere.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**sphere**",
          "commonErrors": [
                    "Picks wrong shape."
          ]
},
        },
        {
          id: "m0-u7-3d-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A soup can is shaped like a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "cube"
                    },
                    {
                              "id": "b",
                              "text": "sphere"
                    },
                    {
                              "id": "c",
                              "text": "cylinder"
                    },
                    {
                              "id": "d",
                              "text": "cone"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Can = cylinder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Can = cylinder.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**cylinder**",
          "commonErrors": [
                    "Picks wrong shape."
          ]
},
        },
        {
          id: "m0-u7-3d-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three 3D shapes and one real object for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "3D shapes",
                                                  "Cube, sphere, cylinder, cone + objects."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "3D shapes",
                                                  "Cube, sphere, cylinder, cone + objects."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Names 3 shapes + objects.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Cube=dice, sphere=ball, cylinder=can.'**"
          ]
},
        },
        {
          id: "m0-u7-3d-shapes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'face' of a 3D shape is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a corner"
                    },
                    {
                              "id": "b",
                              "text": "a flat surface"
                    },
                    {
                              "id": "c",
                              "text": "an edge"
                    },
                    {
                              "id": "d",
                              "text": "a point"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Face = flat surface."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Face = flat surface.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**flat surface**",
          "commonErrors": [
                    "Confuses with edge."
          ]
},
        },
        {
          id: "m0-u7-3d-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare a cube and a sphere. How are they different? Which has flat faces?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "3D shapes",
                              "statement": "Cube=flat faces, sphere=curved."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Compares cube and sphere.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Says which has flat faces.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Cube has flat faces; sphere is all curved.**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Cannot compare.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m0-u7-3d-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A box shape with 6 square faces."
                    },
                    {
                              "id": "b",
                              "text": "A solid shape you can hold."
                    },
                    {
                              "id": "c",
                              "text": "A round ball shape."
                    },
                    {
                              "id": "d",
                              "text": "A can shape with two circular ends."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"3D shape\" means A solid shape you can hold."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"3D shape\" means A solid shape you can hold.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D shape** = A solid shape you can hold.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-3d-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cube\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A round ball shape."
                    },
                    {
                              "id": "b",
                              "text": "A can shape with two circular ends."
                    },
                    {
                              "id": "c",
                              "text": "A shape with a point and a round base."
                    },
                    {
                              "id": "d",
                              "text": "A box shape with 6 square faces."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cube\" means A box shape with 6 square faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cube\" means A box shape with 6 square faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cube** = A box shape with 6 square faces.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u7-3d-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A can shape with two circular ends."
                    },
                    {
                              "id": "b",
                              "text": "A round ball shape."
                    },
                    {
                              "id": "c",
                              "text": "A shape with a point and a round base."
                    },
                    {
                              "id": "d",
                              "text": "A flat surface of a 3D shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sphere\" means A round ball shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sphere\" means A round ball shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sphere** = A round ball shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
