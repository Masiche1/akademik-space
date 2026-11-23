import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "m2-u7-lesson-7-2",
  code: "7-2",
  title: "3D Shapes",
  goal: "I CAN identify and describe 3D shapes.",
  standards: ["2.G.A.1"],
  vocabulary: [
    { term: "Shape", definition: "Closed figure." },
    { term: "3D", definition: "Solid shape." },
    { term: "Cube", definition: "6 square faces." },
    { term: "Sphere", definition: "Round ball." },
    { term: "Cylinder", definition: "Two circular faces." },
    { term: "Cone", definition: "Pointy top." },
    { term: "Pyramid", definition: "Pointed top, flat base." },
    { term: "Face", definition: "Flat surface." },
  ],
  concepts: [
    {
      id: "m2-u7-3d-shapes",
      title: "3D shapes",
      skill: "Identify and describe 3D shapes by faces and features.",
      lesson: {
        sections: [
          {
            heading: "Solid shapes",
            body: "**3D shapes** are solid. A **cube** has 6 square faces; a **sphere** is round; a **cylinder** has 2 circular faces; a **cone** has a point; a **pyramid** has a pointed top.",
          },
          {
            heading: "Faces and features",
            body: "Count **faces** (flat surfaces). A cube has 6 faces; a cylinder has 3 (2 circles + 1 rectangle).",
          },
        ],
        keyFormulas: [
          { name: "3D shapes", statement: "Cube=6 faces, Sphere=0 faces, Cylinder=3, Cone=2, Pyramid=5." },
        ],
        workedExample: {
          problem: "How many faces does a cube have?",
          solution: "A cube has **6 square faces**.",
        },
      },
      questions: [
        {
          id: "m2-u7-3d-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cube has how many faces?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "12"
                    }
          ],
          "correctChoiceId": "b"
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
          "finalAnswer": "6",
          "commonErrors": [
                    "Picks wrong count."
          ]
},
        },
        {
          id: "m2-u7-3d-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sphere is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flat"
                    },
                    {
                              "id": "b",
                              "text": "completely round"
                    },
                    {
                              "id": "c",
                              "text": "pointy"
                    },
                    {
                              "id": "d",
                              "text": "square"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sphere = round ball."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sphere = round ball.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "round ball",
          "commonErrors": [
                    "Picks wrong shape."
          ]
},
        },
        {
          id: "m2-u7-3d-shapes-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Identify the 3D shape: it has a pointed top and a flat base. How many faces does a cube have?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "shape",
                              "name": "3D",
                              "statement": "Identify + count faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cone or pyramid (pointed top).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Cube: 6 faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cone or pyramid; cube has 6 faces",
          "commonErrors": "Wrong shape."
},
        },
        {
          id: "m2-u7-3d-shapes-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many faces does a cylinder have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "Cylinder = 3 faces (2 circles + 1 rectangle)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Wrong count."
          ]
},
        },
        {
          id: "m2-u7-3d-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify three 3D shapes you can find in your classroom. For each, name the shape and describe its faces.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "shape",
                              "name": "3D shapes",
                              "statement": "3 shapes + faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies 3 shapes.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Describes faces for each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "e.g., Box: cube (6 faces); Can: cylinder (3); Ball: sphere (0)",
          "commonErrors": "Wrong faces."
},
        },
        {
          id: "m2-u7-3d-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid shape."
                    },
                    {
                              "id": "b",
                              "text": "Closed figure."
                    },
                    {
                              "id": "c",
                              "text": "6 square faces."
                    },
                    {
                              "id": "d",
                              "text": "Round ball."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Shape\" means Closed figure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Shape\" means Closed figure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Shape** = Closed figure.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-3d-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6 square faces."
                    },
                    {
                              "id": "b",
                              "text": "Round ball."
                    },
                    {
                              "id": "c",
                              "text": "Two circular faces."
                    },
                    {
                              "id": "d",
                              "text": "Solid shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"3D\" means Solid shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"3D\" means Solid shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D** = Solid shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u7-3d-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cube\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Round ball."
                    },
                    {
                              "id": "b",
                              "text": "6 square faces."
                    },
                    {
                              "id": "c",
                              "text": "Two circular faces."
                    },
                    {
                              "id": "d",
                              "text": "Pointy top."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
