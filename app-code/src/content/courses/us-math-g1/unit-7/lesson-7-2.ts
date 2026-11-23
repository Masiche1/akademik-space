import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m1-u7-lesson-7-2",
  code: "7-2",
  title: "3D Shapes",
  goal: "I CAN identify and describe 3D shapes.",
  standards: ["1.G.A.1"],
  vocabulary: [
    { term: "3D shape", definition: "Solid shape with length, width, height." },
    { term: "Cube", definition: "6 square faces." },
    { term: "Sphere", definition: "Round like a ball." },
    { term: "Cylinder", definition: "Two circular faces + curved." },
    { term: "Cone", definition: "Pointed top, round base." },
    { term: "Face", definition: "Flat surface of 3D shape." },
    { term: "Edge", definition: "Where faces meet." },
    { term: "Vertex", definition: "Point where edges meet." },
  ],
  concepts: [
    {
      id: "m1-u7-3d-shapes",
      title: "3D shapes",
      skill: "Identify and describe 3D shapes: cube, sphere, cylinder, cone.",
      lesson: {
        sections: [
          {
            heading: "What are 3D shapes?",
            body: "**3D shapes** are solid shapes with **faces**, **edges** and **vertices**. A **cube** has 6 square faces; a **sphere** is round like a ball; a **cylinder** has two circular faces; a **cone** has a pointed top.",
          },
          {
            heading: "Describe 3D shapes",
            body: "Count **faces** (flat surfaces), **edges** (where faces meet), and **vertices** (corners). A cube has 6 faces, 12 edges, 8 vertices.",
          },
        ],
        keyFormulas: [
          { name: "3D shapes", statement: "Cube (6 faces), Sphere (0 faces), Cylinder (2 circles + curved), Cone (1 circle + point)." },
        ],
        workedExample: {
          problem: "How many faces does a cube have?",
          solution: "**6 square faces**.",
        },
      },
      questions: [
        {
          id: "m1-u7-3d-shapes-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many faces does a cube have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Faces",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cube = 6 faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cube = 6 faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(6)**",
          "commonErrors": [
                    "Counts wrong."
          ]
},
        },
        {
          id: "m1-u7-3d-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which 3D shape is round like a ball?",
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
                              "text": "cone"
                    },
                    {
                              "id": "d",
                              "text": "cylinder"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sphere = ball shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sphere = ball shape.",
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
          id: "m1-u7-3d-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cylinder has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "no flat faces"
                    },
                    {
                              "id": "b",
                              "text": "two circular faces and one curved surface"
                    },
                    {
                              "id": "c",
                              "text": "six square faces"
                    },
                    {
                              "id": "d",
                              "text": "a pointed top"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cylinder = 2 circles + curved."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cylinder = 2 circles + curved.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2 circles + curved**",
          "commonErrors": [
                    "Confuses with cone."
          ]
},
        },
        {
          id: "m1-u7-3d-shapes-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose a 3D shape (cube, sphere, cylinder, cone). Describe its faces and edges.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "3D shape",
                              "statement": "Describe faces + edges."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes shape.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Counts faces/edges.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Cube: 6 faces, 12 edges'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong counts."
          ]
},
        },
        {
          id: "m1-u7-3d-shapes-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6 square faces."
                    },
                    {
                              "id": "b",
                              "text": "Solid shape with length, width, height."
                    },
                    {
                              "id": "c",
                              "text": "Round like a ball."
                    },
                    {
                              "id": "d",
                              "text": "Two circular faces + curved."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"3D shape\" means Solid shape with length, width, height."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"3D shape\" means Solid shape with length, width, height.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D shape** = Solid shape with length, width, height.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-3d-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cube\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Round like a ball."
                    },
                    {
                              "id": "b",
                              "text": "Two circular faces + curved."
                    },
                    {
                              "id": "c",
                              "text": "Pointed top, round base."
                    },
                    {
                              "id": "d",
                              "text": "6 square faces."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cube\" means 6 square faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cube\" means 6 square faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cube** = 6 square faces.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-3d-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two circular faces + curved."
                    },
                    {
                              "id": "b",
                              "text": "Round like a ball."
                    },
                    {
                              "id": "c",
                              "text": "Pointed top, round base."
                    },
                    {
                              "id": "d",
                              "text": "Flat surface of 3D shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sphere\" means Round like a ball."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sphere\" means Round like a ball.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sphere** = Round like a ball.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u7-3d-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cylinder\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pointed top, round base."
                    },
                    {
                              "id": "b",
                              "text": "Flat surface of 3D shape."
                    },
                    {
                              "id": "c",
                              "text": "Where faces meet."
                    },
                    {
                              "id": "d",
                              "text": "Two circular faces + curved."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cylinder\" means Two circular faces + curved."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cylinder\" means Two circular faces + curved.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cylinder** = Two circular faces + curved.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
