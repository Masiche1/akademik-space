import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "m4-u7-lesson-7-4",
  code: "7-4",
  title: "Classifying Shapes",
  goal: "I CAN classify 2D and 3D shapes by their properties.",
  standards: ["4.G.A.1", "4.G.A.2"],
  vocabulary: [
    { term: "2D shape", definition: "Flat shape." },
    { term: "3D shape", definition: "Solid shape." },
    { term: "Rectangle", definition: "4 sides, right angles." },
    { term: "Square", definition: "4 equal sides." },
    { term: "Triangle", definition: "3 sides." },
    { term: "Circle", definition: "Round shape." },
    { term: "Cube", definition: "6 square faces." },
    { term: "Sphere", definition: "Perfectly round." },
  ],
  concepts: [
    {
      id: "m4-u7-classify-shapes",
      title: "Classifying shapes",
      skill: "Classify 2D shapes (rectangle, square, triangle, circle) and 3D shapes (cube, sphere, cylinder).",
      lesson: {
        sections: [
          {
            heading: "2D shapes",
            body: "**2D shapes** are flat: **rectangle** (4 sides, right angles), **square** (4 equal sides), **triangle** (3 sides), **circle** (round).",
          },
          {
            heading: "3D shapes",
            body: "**3D shapes** are solid: **cube** (6 square faces), **sphere** (perfectly round), **cylinder** (two circular faces), **pyramid** (triangular faces).",
          },
        ],
        keyFormulas: [
          { name: "2D", statement: "Rectangle + square + triangle + circle = flat shapes." },
          { name: "3D", statement: "Cube + sphere + cylinder + pyramid = solid shapes." },
        ],
        workedExample: {
          problem: "Is a basketball a 2D or 3D shape? What type?",
          solution: "**3D** — it's a **sphere** (perfectly round solid).",
        },
      },
      questions: [
        {
          id: "m4-u7-classify-shapes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A '2D shape' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a solid"
                    },
                    {
                              "id": "b",
                              "text": "a flat shape"
                    },
                    {
                              "id": "c",
                              "text": "a line"
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
                              "statement": "2D = flat shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2D = flat shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a flat shape",
          "commonErrors": [
                    "Thinks 2D is solid."
          ]
},
        },
        {
          id: "m4-u7-classify-shapes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'cube' has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6 square faces"
                    },
                    {
                              "id": "b",
                              "text": "4 sides"
                    },
                    {
                              "id": "c",
                              "text": "3 sides"
                    },
                    {
                              "id": "d",
                              "text": "1 face"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Cube = 6 square faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cube = 6 square faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6 square faces",
          "commonErrors": [
                    "Wrong shape."
          ]
},
        },
        {
          id: "m4-u7-classify-shapes-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these as 2D or 3D: circle, cube, triangle, sphere, rectangle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shapes",
                              "statement": "2D: circle/triangle/rectangle; 3D: cube/sphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all five.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2D: circle, triangle, rectangle; 3D: cube, sphere**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Missing shapes."
          ]
},
        },
        {
          id: "m4-u7-classify-shapes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'sphere' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flat"
                    },
                    {
                              "id": "b",
                              "text": "perfectly round 3D shape"
                    },
                    {
                              "id": "c",
                              "text": "a cube"
                    },
                    {
                              "id": "d",
                              "text": "a cylinder"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sphere = perfectly round 3D."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sphere = perfectly round 3D.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "perfectly round 3D shape",
          "commonErrors": [
                    "Thinks it's 2D."
          ]
},
        },
        {
          id: "m4-u7-classify-shapes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Give two examples of 2D shapes and two examples of 3D shapes you might find in a classroom.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Shapes",
                              "statement": "2D + 3D examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives 2D examples.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives 3D examples.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**2D: paper (rectangle), clock (circle); 3D: box (cube), ball (sphere)**",
          "commonErrors": [
                    "Cannot give examples.",
                    "Wrong types."
          ]
},
        },
        {
          id: "m4-u7-classify-shapes-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"2D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solid shape."
                    },
                    {
                              "id": "b",
                              "text": "Flat shape."
                    },
                    {
                              "id": "c",
                              "text": "4 sides, right angles."
                    },
                    {
                              "id": "d",
                              "text": "4 equal sides."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"2D shape\" means Flat shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"2D shape\" means Flat shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**2D shape** = Flat shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-classify-shapes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 sides, right angles."
                    },
                    {
                              "id": "b",
                              "text": "4 equal sides."
                    },
                    {
                              "id": "c",
                              "text": "3 sides."
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
                              "statement": "\"3D shape\" means Solid shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"3D shape\" means Solid shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D shape** = Solid shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u7-classify-shapes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rectangle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4 equal sides."
                    },
                    {
                              "id": "b",
                              "text": "4 sides, right angles."
                    },
                    {
                              "id": "c",
                              "text": "3 sides."
                    },
                    {
                              "id": "d",
                              "text": "Round shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rectangle\" means 4 sides, right angles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rectangle\" means 4 sides, right angles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rectangle** = 4 sides, right angles.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
