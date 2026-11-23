import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "sci3-u4-lesson-4-3",
  code: "4-3",
  title: "Properties of Matter",
  goal: "I CAN describe properties of solids, liquids and gases.",
  standards: ["PS1.A"],
  vocabulary: [
    { term: "Property", definition: "A quality of matter." },
    { term: "Hard", definition: "Resists scratching." },
    { term: "Soft", definition: "Easy to scratch." },
    { term: "Rigid", definition: "Keeps shape." },
    { term: "Flow", definition: "Moves like liquid/gas." },
    { term: "Fill", definition: "Takes container shape." },
    { term: "Compress", definition: "Can be squeezed smaller." },
    { term: "Expand", definition: "Can be stretched bigger." },
  ],
  concepts: [
    {
      id: "sci3-u4-properties",
      title: "Properties of matter",
      skill: "Describe properties: hardness, rigidity, flow, fill, compress, expand.",
      lesson: {
        sections: [
          {
            heading: "Each state has properties",
            body: "**Solids** are **rigid** (keep shape) and can be **hard** or **soft**. **Liquids** **flow** and take container shape. **Gases** can be **compressed** and **expanded**.",
          },
          {
            heading: "Testing properties",
            body: "We can test properties: can it be scratched? Does it flow? Can it be squeezed? These tell us its state.",
          },
        ],
        keyFormulas: [
          { name: "Properties", statement: "Hard/soft + rigid/flow + compress/expand = properties of matter." },
        ],
        workedExample: {
          problem: "Water takes the shape of its container but has fixed volume. What state is it?",
          solution: "**Liquid** — fixed volume but takes container shape.",
        },
      },
      questions: [
        {
          id: "sci3-u4-properties-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a property of solids?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flows"
                    },
                    {
                              "id": "b",
                              "text": "rigid — keeps shape"
                    },
                    {
                              "id": "c",
                              "text": "compressible"
                    },
                    {
                              "id": "d",
                              "text": "expands"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Solids are rigid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solids are rigid.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rigid — keeps shape",
          "commonErrors": [
                    "Thinks solids flow."
          ]
},
        },
        {
          id: "sci3-u4-properties-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a property of gases?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rigid"
                    },
                    {
                              "id": "b",
                              "text": "compressible and expandable"
                    },
                    {
                              "id": "c",
                              "text": "fixed shape"
                    },
                    {
                              "id": "d",
                              "text": "flows only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gases can be compressed/expanded."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gases can be compressed/expanded.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "compressible and expandable",
          "commonErrors": [
                    "Thinks gases are rigid."
          ]
},
        },
        {
          id: "sci3-u4-properties-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two properties of liquids and give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Properties",
                              "statement": "2 liquid properties + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 properties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Flows and takes container shape — water.'**",
          "commonErrors": [
                    "Cannot describe properties.",
                    "No example."
          ]
},
        },
        {
          id: "sci3-u4-properties-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Compress' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "stretch bigger"
                    },
                    {
                              "id": "b",
                              "text": "squeeze smaller"
                    },
                    {
                              "id": "c",
                              "text": "flow"
                    },
                    {
                              "id": "d",
                              "text": "melt"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Compress = squeeze smaller."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compress = squeeze smaller.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "squeeze smaller",
          "commonErrors": [
                    "Thinks it's expand."
          ]
},
        },
        {
          id: "sci3-u4-properties-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare properties of a solid and a gas. How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Properties",
                              "statement": "Solid vs gas properties."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes solid properties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes gas properties + difference.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Solid: rigid, fixed shape. Gas: no fixed shape, compressible.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one state."
          ]
},
        },
        {
          id: "sci3-u4-properties-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Property\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Resists scratching."
                    },
                    {
                              "id": "b",
                              "text": "A quality of matter."
                    },
                    {
                              "id": "c",
                              "text": "Easy to scratch."
                    },
                    {
                              "id": "d",
                              "text": "Keeps shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Property\" means A quality of matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Property\" means A quality of matter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Property** = A quality of matter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-properties-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hard\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Easy to scratch."
                    },
                    {
                              "id": "b",
                              "text": "Keeps shape."
                    },
                    {
                              "id": "c",
                              "text": "Moves like liquid/gas."
                    },
                    {
                              "id": "d",
                              "text": "Resists scratching."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hard\" means Resists scratching."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hard\" means Resists scratching.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hard** = Resists scratching.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u4-properties-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Soft\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Keeps shape."
                    },
                    {
                              "id": "b",
                              "text": "Easy to scratch."
                    },
                    {
                              "id": "c",
                              "text": "Moves like liquid/gas."
                    },
                    {
                              "id": "d",
                              "text": "Takes container shape."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Soft\" means Easy to scratch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Soft\" means Easy to scratch.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Soft** = Easy to scratch.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
