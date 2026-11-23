import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "m6-u2-lesson-2-5",
  code: "2-5",
  title: "Absolute Value",
  goal: "I CAN solve absolute value problems.",
  standards: ["6.NS.C.7"],
  vocabulary: [
    { term: "Absolute value", definition: "Distance from zero." },
    { term: "Positive", definition: "> 0." },
    { term: "Negative", definition: "< 0." },
    { term: "Distance", definition: "How far." },
    { term: "Magnitude", definition: "Size." },
    { term: "Opposite", definition: "Other side." },
    { term: "Number line", definition: "Visual." },
    { term: "Equation", definition: "Math sentence." },
  ],
  concepts: [
    {
      id: "m6-u2-absolute-value",
      title: "Absolute value",
      skill: "Use absolute value to solve problems involving distance.",
      lesson: {
        sections: [
          {
            heading: "Distance from zero",
            body: "**Absolute value** |x| means the **distance** from zero: |-5| = 5, |5| = 5. It's always non-negative.",
          },
          {
            heading: "Real-world",
            body: "Use for distances: |temperature change|, |position change|, |score difference|.",
          },
        ],
        keyFormulas: [
          { name: "Absolute", statement: "|x| = distance from 0 = always positive." },
        ],
        workedExample: {
          problem: "A diver is at -15 feet. How far from the surface?",
          solution: "|-15| = **15 feet**.",
        },
      },
      questions: [
        {
          id: "m6-u2-absolute-value-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "|−8| equals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-8"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "0"
                    },
                    {
                              "id": "d",
                              "text": "16"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "|-8| = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "|-8| = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Keeps negative."
          ]
},
        },
        {
          id: "m6-u2-absolute-value-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Absolute value always gives...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "negative"
                    },
                    {
                              "id": "b",
                              "text": "non-negative"
                    },
                    {
                              "id": "c",
                              "text": "zero"
                    },
                    {
                              "id": "d",
                              "text": "fraction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Non-negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Non-negative.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "non-negative",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "m6-u2-absolute-value-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the absolute value of: -12, 7, -3.5, 0.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Absolute",
                              "statement": "12, 7, 3.5, 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**|-12|=12; |7|=7; |-3.5|=3.5; |0|=0.**",
          "commonErrors": [
                    "Wrong values.",
                    "Missing numbers."
          ]
},
        },
        {
          id: "m6-u2-absolute-value-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Absolute value represents...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sign"
                    },
                    {
                              "id": "b",
                              "text": "distance from zero"
                    },
                    {
                              "id": "c",
                              "text": "direction"
                    },
                    {
                              "id": "d",
                              "text": "size of number"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Distance from zero."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Distance from zero.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "distance from zero",
          "commonErrors": [
                    "Confuses with sign."
          ]
},
        },
        {
          id: "m6-u2-absolute-value-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A hiker is 250m above sea level, then descends 400m. Use absolute value to find how far they descended.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Absolute",
                              "statement": "400m."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses absolute.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds distance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**|250 - (-150)| = |400| = 400m descended.**",
          "commonErrors": [
                    "Cannot use absolute.",
                    "Wrong distance."
          ]
},
        },
        {
          id: "m6-u2-absolute-value-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Absolute value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "> 0."
                    },
                    {
                              "id": "b",
                              "text": "Distance from zero."
                    },
                    {
                              "id": "c",
                              "text": "< 0."
                    },
                    {
                              "id": "d",
                              "text": "How far."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Absolute value\" means Distance from zero."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Absolute value\" means Distance from zero.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Absolute value** = Distance from zero.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-absolute-value-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Positive\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "< 0."
                    },
                    {
                              "id": "b",
                              "text": "How far."
                    },
                    {
                              "id": "c",
                              "text": "Size."
                    },
                    {
                              "id": "d",
                              "text": "> 0."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Positive\" means > 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Positive\" means > 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Positive** = > 0.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u2-absolute-value-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Negative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How far."
                    },
                    {
                              "id": "b",
                              "text": "< 0."
                    },
                    {
                              "id": "c",
                              "text": "Size."
                    },
                    {
                              "id": "d",
                              "text": "Other side."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Negative\" means < 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Negative\" means < 0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Negative** = < 0.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
