import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "mpk-u5-lesson-5-3",
  code: "5-3",
  title: "3D Shapes",
  goal: "I CAN name balls, boxes, cans and cones.",
  standards: ["ELOF-PK.MATH.GEO.3"],
  vocabulary: [
    { term: "3D shape", definition: "A solid shape you can hold, like a ball or box." },
    { term: "Sphere", definition: "A perfectly round ball shape." },
    { term: "Cube", definition: "A box with 6 square faces." },
    { term: "Cylinder", definition: "A can shape — round with flat top and bottom." },
    { term: "Cone", definition: "An ice-cream cone shape — pointy top, round bottom." },
  ],
  concepts: [
    {
      id: "mpk-u5-shapes-3d",
      title: "Solid (3D) shapes",
      skill: "Recognize spheres, cubes, cylinders and cones in the world.",
      lesson: {
        sections: [
          {
            heading: "Solid shapes",
            body: "Unlike flat 2D shapes, **3D shapes** are solids you can hold. A ball is a **sphere**, a box is a **cube**, a can is a **cylinder**, an ice-cream cone is a **cone**.",
          },
          {
            heading: "Find them around you",
            body: "Look for solids: basketball (sphere), dice (cube), soup can (cylinder), party hat (cone). Naming them helps you describe the world.",
          },
        ],
        keyFormulas: [
          { name: "Sphere", statement: "Perfectly round ball" },
          { name: "Cube", statement: "6 square faces" },
          { name: "Cylinder", statement: "Round can shape" },
          { name: "Cone", statement: "Pointy top, round base" },
        ],
        workedExample: {
          problem: "What 3D shape is a soup can?",
          solution: "A can is round with flat top and bottom = **cylinder**.",
        },
      },
      questions: [
        {
          id: "mpk-u5-shapes-3d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A basketball is shaped like a...",
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
                              "statement": "A basketball is a sphere."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A basketball is a sphere.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sphere**",
          "commonErrors": [
                    "Calls every round thing a circle (2D)."
          ]
},
        },
        {
          id: "mpk-u5-shapes-3d-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A dice is shaped like a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sphere"
                    },
                    {
                              "id": "b",
                              "text": "cube"
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
                              "statement": "A dice has 6 square faces = cube."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A dice has 6 square faces = cube.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cube**",
          "commonErrors": [
                    "Thinks dice are spheres."
          ]
},
        },
        {
          id: "mpk-u5-shapes-3d-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "An ice-cream cone (the cone part) is shaped like a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sphere"
                    },
                    {
                              "id": "b",
                              "text": "cube"
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
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pointy top + round base = cone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pointy top + round base = cone.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cone**",
          "commonErrors": [
                    "Confuses cone with cylinder."
          ]
},
        },
        {
          id: "mpk-u5-shapes-3d-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many flat faces does a cube have?",
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
                              "statement": "A cube has 6 square faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A cube has 6 square faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$6$",
          "commonErrors": [
                    "Says 4 or 5."
          ]
},
        },
        {
          id: "mpk-u5-shapes-3d-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Name two 3D shapes you can find in your house. Describe what each looks like.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Match objects to shapes",
                              "statement": "Can = cylinder, ball = sphere, box = cube."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "Names 2 real objects with correct 3D shapes.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Descriptions match (e.g., 'soup can is a cylinder').",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**e.g., soup can = cylinder, ball = sphere**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Names 2D shapes instead.",
                    "Mismatches object and shape."
          ]
},
        },
        {
          id: "mpk-u5-shapes-3d-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"3D shape\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A perfectly round ball shape."
                    },
                    {
                              "id": "b",
                              "text": "A solid shape you can hold, like a ball or box."
                    },
                    {
                              "id": "c",
                              "text": "A box with 6 square faces."
                    },
                    {
                              "id": "d",
                              "text": "A can shape — round with flat top and bottom."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"3D shape\" means A solid shape you can hold, like a ball or box."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"3D shape\" means A solid shape you can hold, like a ball or box.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3D shape** = A solid shape you can hold, like a ball or box.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-shapes-3d-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sphere\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A box with 6 square faces."
                    },
                    {
                              "id": "b",
                              "text": "A can shape — round with flat top and bottom."
                    },
                    {
                              "id": "c",
                              "text": "An ice-cream cone shape — pointy top, round bottom."
                    },
                    {
                              "id": "d",
                              "text": "A perfectly round ball shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sphere\" means A perfectly round ball shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sphere\" means A perfectly round ball shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sphere** = A perfectly round ball shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u5-shapes-3d-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Cube\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A can shape — round with flat top and bottom."
                    },
                    {
                              "id": "b",
                              "text": "A box with 6 square faces."
                    },
                    {
                              "id": "c",
                              "text": "An ice-cream cone shape — pointy top, round bottom."
                    },
                    {
                              "id": "d",
                              "text": "A solid shape you can hold, like a ball or box."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Cube\" means A box with 6 square faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Cube\" means A box with 6 square faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cube** = A box with 6 square faces.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
