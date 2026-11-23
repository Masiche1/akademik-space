import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m6-u1-lesson-1-1",
  code: "1-1",
  title: "Ratio Basics",
  goal: "I CAN write and simplify ratios.",
  standards: ["6.RP.A.1"],
  vocabulary: [
    { term: "Ratio", definition: "Comparison of two quantities." },
    { term: "Rate", definition: "Ratio with different units." },
    { term: "Unit rate", definition: "Rate per one unit." },
    { term: "Proportion", definition: "Equal ratios." },
    { term: "Simplify", definition: "Reduce ratio." },
    { term: "Equivalent", definition: "Same ratio." },
    { term: "Part-to-part", definition: "Comparing parts." },
    { term: "Part-to-whole", definition: "Comparing part to total." },
  ],
  concepts: [
    {
      id: "m6-u1-ratio-basics",
      title: "Ratio basics",
      skill: "Write, simplify and interpret ratios.",
      lesson: {
        sections: [
          {
            heading: "Comparing quantities",
            body: "A **ratio** compares two quantities: 3 cats to 2 dogs = **3:2** or **3/2**. Ratios can be **part-to-part** or **part-to-whole**.",
          },
          {
            heading: "Simplifying",
            body: "Simplify ratios like fractions: 12:8 = **3:2** (divide both by 4).",
          },
        ],
        keyFormulas: [
          { name: "Ratio", statement: "a:b = a/b; simplify by dividing both." },
        ],
        workedExample: {
          problem: "Write the ratio of 15 boys to 10 girls and simplify.",
          solution: "15:10 = **3:2** (divide by 5).",
        },
      },
      questions: [
        {
          id: "m6-u1-ratio-basics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The ratio of 8 apples to 4 oranges is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2:1"
                    },
                    {
                              "id": "b",
                              "text": "4:2"
                    },
                    {
                              "id": "c",
                              "text": "8:4"
                    },
                    {
                              "id": "d",
                              "text": "1:2"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8:4 = 2:1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8:4 = 2:1.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2:1",
          "commonErrors": [
                    "Not simplified."
          ]
},
        },
        {
          id: "m6-u1-ratio-basics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'unit rate' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any rate"
                    },
                    {
                              "id": "b",
                              "text": "rate per one unit"
                    },
                    {
                              "id": "c",
                              "text": "ratio"
                    },
                    {
                              "id": "d",
                              "text": "proportion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Rate per one unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rate per one unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "rate per one unit",
          "commonErrors": [
                    "Confuses with ratio."
          ]
},
        },
        {
          id: "m6-u1-ratio-basics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the ratio of 20 students to 15 teachers and simplify it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ratio",
                              "statement": "4:3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes ratio.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Simplifies.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**20:15 = 4:3**",
          "commonErrors": [
                    "Not simplified.",
                    "Wrong ratio."
          ]
},
        },
        {
          id: "m6-u1-ratio-basics-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'rate' is a ratio with...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "same units"
                    },
                    {
                              "id": "b",
                              "text": "different units"
                    },
                    {
                              "id": "c",
                              "text": "no units"
                    },
                    {
                              "id": "d",
                              "text": "one unit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Different units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Different units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "different units",
          "commonErrors": [
                    "Confuses with ratio."
          ]
},
        },
        {
          id: "m6-u1-ratio-basics-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write a ratio in three different forms: a:b, a/b, and 'a to b'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ratio",
                              "statement": "Three forms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes all forms.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., '3:2, 3/2, 3 to 2'**",
          "commonErrors": [
                    "Missing forms.",
                    "Wrong ratio."
          ]
},
        },
        {
          id: "m6-u1-ratio-basics-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ratio\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ratio with different units."
                    },
                    {
                              "id": "b",
                              "text": "Comparison of two quantities."
                    },
                    {
                              "id": "c",
                              "text": "Rate per one unit."
                    },
                    {
                              "id": "d",
                              "text": "Equal ratios."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ratio\" means Comparison of two quantities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ratio\" means Comparison of two quantities.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ratio** = Comparison of two quantities.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-ratio-basics-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rate per one unit."
                    },
                    {
                              "id": "b",
                              "text": "Equal ratios."
                    },
                    {
                              "id": "c",
                              "text": "Reduce ratio."
                    },
                    {
                              "id": "d",
                              "text": "Ratio with different units."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rate\" means Ratio with different units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rate\" means Ratio with different units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rate** = Ratio with different units.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-ratio-basics-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Unit rate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Equal ratios."
                    },
                    {
                              "id": "b",
                              "text": "Rate per one unit."
                    },
                    {
                              "id": "c",
                              "text": "Reduce ratio."
                    },
                    {
                              "id": "d",
                              "text": "Same ratio."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Unit rate\" means Rate per one unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Unit rate\" means Rate per one unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Unit rate** = Rate per one unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
