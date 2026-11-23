import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m1-u1-lesson-1-3",
  code: "1-3",
  title: "Tens and Ones",
  goal: "I CAN break numbers into tens and ones.",
  standards: ["1.NBT.A.1", "1.NBT.B.2"],
  vocabulary: [
    { term: "Ten", definition: "A group of 10." },
    { term: "One", definition: "A single unit." },
    { term: "Tens place", definition: "Shows how many tens." },
    { term: "Ones place", definition: "Shows how many ones." },
    { term: "Decompose", definition: "Break into parts." },
    { term: "Compose", definition: "Put parts together." },
    { term: "Bundle", definition: "Group into tens." },
    { term: "Value", definition: "What a digit is worth." },
  ],
  concepts: [
    {
      id: "m1-u1-tens-and-ones",
      title: "Tens and ones",
      skill: "Break numbers into tens and ones and rebuild them.",
      lesson: {
        sections: [
          {
            heading: "Tens and ones",
            body: "Numbers like **34** have **3 tens** and **4 ones**. We can **decompose** (break apart) numbers into tens and ones, or **compose** (put together) them.",
          },
          {
            heading: "Bundles of ten",
            body: "When we have **10 ones**, we can **bundle** them into **1 ten**. This makes counting and adding easier.",
          },
        ],
        keyFormulas: [
          { name: "Decompose", statement: "34 = 3 tens + 4 ones" },
          { name: "Compose", statement: "3 tens + 4 ones = 34" },
        ],
        workedExample: {
          problem: "Break 57 into tens and ones.",
          solution: "**57 = 5 tens + 7 ones** (50 + 7).",
        },
      },
      questions: [
        {
          id: "m1-u1-tens-and-ones-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many tens are in 42?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Tens",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "42 has 4 tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "42 has 4 tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(4)**",
          "commonErrors": [
                    "Counts ones instead."
          ]
},
        },
        {
          id: "m1-u1-tens-and-ones-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many ones are in 42?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Ones",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "42 has 2 ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "42 has 2 ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(2)**",
          "commonErrors": [
                    "Counts tens instead."
          ]
},
        },
        {
          id: "m1-u1-tens-and-ones-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What number is 3 tens and 5 ones?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Number",
                              "answer": 35
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3 tens = 30, +5 ones = 35."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 tens = 30, +5 ones = 35.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(35)**",
          "commonErrors": [
                    "Adds wrong places."
          ]
},
        },
        {
          id: "m1-u1-tens-and-ones-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "10 ones can be bundled into...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10 tens"
                    },
                    {
                              "id": "b",
                              "text": "1 ten"
                    },
                    {
                              "id": "c",
                              "text": "100 ones"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "10 ones = 1 ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "10 ones = 1 ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**1 ten**",
          "commonErrors": [
                    "Thinks 10 ones = 10 tens."
          ]
},
        },
        {
          id: "m1-u1-tens-and-ones-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Break 68 into tens and ones. Then write it as a sum.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Decompose",
                              "statement": "6 tens + 8 ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decomposes correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Writes 60 + 8 = 68.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**68 = 60 + 8**",
          "commonErrors": [
                    "Wrong decomposition.",
                    "Cannot write sum."
          ]
},
        },
        {
          id: "m1-u1-tens-and-ones-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A single unit."
                    },
                    {
                              "id": "b",
                              "text": "A group of 10."
                    },
                    {
                              "id": "c",
                              "text": "Shows how many tens."
                    },
                    {
                              "id": "d",
                              "text": "Shows how many ones."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ten\" means A group of 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ten\" means A group of 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ten** = A group of 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-tens-and-ones-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"One\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows how many tens."
                    },
                    {
                              "id": "b",
                              "text": "Shows how many ones."
                    },
                    {
                              "id": "c",
                              "text": "Break into parts."
                    },
                    {
                              "id": "d",
                              "text": "A single unit."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"One\" means A single unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"One\" means A single unit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**One** = A single unit.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-tens-and-ones-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens place\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Shows how many ones."
                    },
                    {
                              "id": "b",
                              "text": "Shows how many tens."
                    },
                    {
                              "id": "c",
                              "text": "Break into parts."
                    },
                    {
                              "id": "d",
                              "text": "Put parts together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens place\" means Shows how many tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens place\" means Shows how many tens.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens place** = Shows how many tens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-tens-and-ones-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones place\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break into parts."
                    },
                    {
                              "id": "b",
                              "text": "Put parts together."
                    },
                    {
                              "id": "c",
                              "text": "Group into tens."
                    },
                    {
                              "id": "d",
                              "text": "Shows how many ones."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones place\" means Shows how many ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones place\" means Shows how many ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones place** = Shows how many ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
