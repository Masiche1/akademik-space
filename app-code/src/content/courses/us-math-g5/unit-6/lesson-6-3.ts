import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m5-u6-lesson-6-3",
  code: "6-3",
  title: "Symmetry",
  goal: "I CAN identify lines of symmetry in shapes.",
  standards: ["5.G.B.3", "5.G.B.4"],
  vocabulary: [
    { term: "Symmetry", definition: "Mirror image." },
    { term: "Line of symmetry", definition: "Fold line." },
    { term: "Reflect", definition: "Mirror image." },
    { term: "Fold", definition: "Crease." },
    { term: "Match", definition: "Both sides same." },
    { term: "Shape", definition: "2D figure." },
    { term: "Pattern", definition: "Repeating design." },
    { term: "Mirror", definition: "Reflection." },
  ],
  concepts: [
    {
      id: "m5-u6-symmetry",
      title: "Symmetry",
      skill: "Identify lines of symmetry in 2D shapes.",
      lesson: {
        sections: [
          {
            heading: "Mirror halves",
            body: "A **line of symmetry** divides a shape into two **matching** halves — like folding. If both sides **match** when folded, it's symmetric.",
          },
          {
            heading: "Examples",
            body: "A **square** has 4 lines of symmetry; a **rectangle** has 2; a **circle** has infinite; a **triangle** may have 0, 1, 2 or 3.",
          },
        ],
        keyFormulas: [
          { name: "Symmetry", statement: "Fold -> halves match = symmetric." },
        ],
        workedExample: {
          problem: "How many lines of symmetry does a rectangle have?",
          solution: "**2** — one horizontal, one vertical (through midpoints).",
        },
      },
      questions: [
        {
          id: "m5-u6-symmetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'line of symmetry' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a diagonal"
                    },
                    {
                              "id": "b",
                              "text": "a fold line where halves match"
                    },
                    {
                              "id": "c",
                              "text": "a border"
                    },
                    {
                              "id": "d",
                              "text": "a center"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fold line where halves match."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fold line where halves match.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a fold line where halves match",
          "commonErrors": [
                    "Wrong definition."
          ]
},
        },
        {
          id: "m5-u6-symmetry-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A square has how many lines of symmetry?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "1"
                    },
                    {
                              "id": "d",
                              "text": "0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Square = 4 lines."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Square = 4 lines.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Wrong count."
          ]
},
        },
        {
          id: "m5-u6-symmetry-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Draw or describe a shape with exactly 2 lines of symmetry. Explain why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Symmetry",
                              "statement": "Shape + explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes shape.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains symmetry.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Rectangle: 2 lines (horizontal + vertical through midpoints).**",
          "commonErrors": [
                    "Wrong count.",
                    "No explanation."
          ]
},
        },
        {
          id: "m5-u6-symmetry-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A circle has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0 lines"
                    },
                    {
                              "id": "b",
                              "text": "infinite lines of symmetry"
                    },
                    {
                              "id": "c",
                              "text": "1 line"
                    },
                    {
                              "id": "d",
                              "text": "2 lines"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Circle = infinite."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Circle = infinite.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "infinite lines of symmetry",
          "commonErrors": [
                    "Wrong count."
          ]
},
        },
        {
          id: "m5-u6-symmetry-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare lines of symmetry in a square vs rectangle vs equilateral triangle. Which has the most?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Symmetry",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares shapes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies most.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Square: 4; Rectangle: 2; Equilateral triangle: 3. Square has most.**",
          "commonErrors": [
                    "Wrong counts.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "m5-u6-symmetry-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Symmetry\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fold line."
                    },
                    {
                              "id": "b",
                              "text": "Mirror image."
                    },
                    {
                              "id": "c",
                              "text": "Crease."
                    },
                    {
                              "id": "d",
                              "text": "Both sides same."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Symmetry\" means Mirror image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Symmetry\" means Mirror image.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Symmetry** = Mirror image.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u6-symmetry-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Line of symmetry\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mirror image."
                    },
                    {
                              "id": "b",
                              "text": "Crease."
                    },
                    {
                              "id": "c",
                              "text": "Both sides same."
                    },
                    {
                              "id": "d",
                              "text": "Fold line."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Line of symmetry\" means Fold line."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Line of symmetry\" means Fold line.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Line of symmetry** = Fold line.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m5-u6-symmetry-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reflect\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Crease."
                    },
                    {
                              "id": "b",
                              "text": "Mirror image."
                    },
                    {
                              "id": "c",
                              "text": "Both sides same."
                    },
                    {
                              "id": "d",
                              "text": "2D figure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reflect\" means Mirror image."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reflect\" means Mirror image.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reflect** = Mirror image.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
