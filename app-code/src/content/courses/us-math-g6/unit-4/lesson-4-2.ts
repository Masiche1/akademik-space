import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "m6-u4-lesson-4-2",
  code: "4-2",
  title: "Surface Area",
  goal: "I CAN find the surface area of prisms and pyramids.",
  standards: ["6.G.A.4"],
  vocabulary: [
    { term: "Surface area", definition: "Total outside area." },
    { term: "Net", definition: "Flattened shape." },
    { term: "Face", definition: "Flat side." },
    { term: "Prism", definition: "Two congruent bases." },
    { term: "Pyramid", definition: "One base, triangular sides." },
    { term: "Lateral", definition: "Side faces." },
    { term: "Total", definition: "All faces." },
    { term: "Formula", definition: "Math rule." },
  ],
  concepts: [
    {
      id: "m6-u4-surface-area",
      title: "Surface area",
      skill: "Find surface area of rectangular prisms and pyramids.",
      lesson: {
        sections: [
          {
            heading: "Unfold",
            body: "A **net** is the **flattened** shape. **Surface area** = sum of all face areas.",
          },
          {
            heading: "Prism",
            body: "Rectangular prism: $SA = 2(lw + lh + wh)$. **Pyramid**: $SA = $ base area + sum of triangular face areas.",
          },
        ],
        keyFormulas: [
          { name: "Prism", statement: "SA = 2(lw+lh+wh)." },
          { name: "Pyramid", statement: "SA = base + triangles." },
        ],
        workedExample: {
          problem: "Find SA of a box 3x4x5.",
          solution: "$SA = 2(3x4 + 3x5 + 4x5) = 2(12+15+20) = 2(47) = 94$ sq units.",
        },
      },
      questions: [
        {
          id: "m6-u4-surface-area-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Surface area is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "inside space"
                    },
                    {
                              "id": "b",
                              "text": "total outside area"
                    },
                    {
                              "id": "c",
                              "text": "one face"
                    },
                    {
                              "id": "d",
                              "text": "volume"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Total outside area."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total outside area.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "total outside area",
          "commonErrors": [
                    "Confuses with volume."
          ]
},
        },
        {
          id: "m6-u4-surface-area-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'net' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3D shape"
                    },
                    {
                              "id": "b",
                              "text": "flattened 2D version"
                    },
                    {
                              "id": "c",
                              "text": "formula"
                    },
                    {
                              "id": "d",
                              "text": "measurement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Flattened version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Flattened version.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "flattened 2D version",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m6-u4-surface-area-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the surface area of a rectangular prism 4x3x2 using a net.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Surface area",
                              "statement": "52 sq units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds SA.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**SA = 2(4x3 + 4x2 + 3x2) = 2(12+8+6) = 2(26) = 52 sq units.**",
          "commonErrors": [
                    "Wrong SA.",
                    "Missing net."
          ]
},
        },
        {
          id: "m6-u4-surface-area-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For a prism, surface area includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only top"
                    },
                    {
                              "id": "b",
                              "text": "all faces"
                    },
                    {
                              "id": "c",
                              "text": "only sides"
                    },
                    {
                              "id": "d",
                              "text": "only bottom"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All faces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All faces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "all faces",
          "commonErrors": [
                    "Missing faces."
          ]
},
        },
        {
          id: "m6-u4-surface-area-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the surface area of a pyramid with a square base and explain how you found the triangular faces.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Surface area",
                              "statement": "SA + triangles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds SA.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains triangles.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**SA = base area + 4 triangular faces; each triangle = 1/2 x base x slant height.**",
          "commonErrors": [
                    "Cannot find.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u4-surface-area-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Surface area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flattened shape."
                    },
                    {
                              "id": "b",
                              "text": "Total outside area."
                    },
                    {
                              "id": "c",
                              "text": "Flat side."
                    },
                    {
                              "id": "d",
                              "text": "Two congruent bases."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Surface area\" means Total outside area."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Surface area\" means Total outside area.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Surface area** = Total outside area.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u4-surface-area-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Net\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Flat side."
                    },
                    {
                              "id": "b",
                              "text": "Two congruent bases."
                    },
                    {
                              "id": "c",
                              "text": "One base, triangular sides."
                    },
                    {
                              "id": "d",
                              "text": "Flattened shape."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Net\" means Flattened shape."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Net\" means Flattened shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Net** = Flattened shape.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u4-surface-area-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Face\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two congruent bases."
                    },
                    {
                              "id": "b",
                              "text": "Flat side."
                    },
                    {
                              "id": "c",
                              "text": "One base, triangular sides."
                    },
                    {
                              "id": "d",
                              "text": "Side faces."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Face\" means Flat side."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Face\" means Flat side.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Face** = Flat side.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
