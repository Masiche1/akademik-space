import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m1-u1-lesson-1-1",
  code: "1-1",
  title: "Counting to 120",
  goal: "I CAN count to 120 by ones, twos, fives and tens.",
  standards: ["1.NBT.A.1", "1.NBT.A.2", "1.NBT.B.2"],
  vocabulary: [
    { term: "Count by 1s", definition: "Say every number: 1, 2, 3 ..." },
    { term: "Count by 2s", definition: "Skip one: 2, 4, 6, 8 ..." },
    { term: "Count by 5s", definition: "Skip four: 5, 10, 15, 20 ..." },
    { term: "Count by 10s", definition: "Skip nine: 10, 20, 30 ..." },
    { term: "Pattern", definition: "Numbers that repeat in order." },
    { term: "Skip count", definition: "Count by jumping over numbers." },
    { term: "Sequence", definition: "Numbers in order." },
    { term: "120", definition: "One hundred twenty." },
  ],
  concepts: [
    {
      id: "m1-u1-count-to-120",
      title: "Counting patterns",
      skill: "Count within 120 by 1s, 2s, 5s and 10s and recognize patterns.",
      lesson: {
        sections: [
          {
            heading: "Counting by different amounts",
            body: "We can count by **1s** (every number), **2s** (skip one), **5s** (skip four), and **10s** (skip nine). Each has its own **pattern**.",
          },
          {
            heading: "Patterns help us",
            body: "Counting patterns make it easier to count large groups quickly. Counting by 10s: 10, 20, 30, 40 — each number is 10 more than the last.",
          },
        ],
        keyFormulas: [
          { name: "Count by 2s", statement: "2, 4, 6, 8, 10 ... (add 2 each time)" },
          { name: "Count by 5s", statement: "5, 10, 15, 20, 25 ... (add 5 each time)" },
          { name: "Count by 10s", statement: "10, 20, 30, 40 ... (add 10 each time)" },
        ],
        workedExample: {
          problem: "Count by 10s starting at 10: 10, 20, __, 40, __.",
          solution: "**30** and **50** — each number is 10 more.",
        },
      },
      questions: [
        {
          id: "m1-u1-count-to-120-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count by 10s: 10, 20, __, 40. What is missing?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing number",
                              "answer": 30
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Each number is 10 more than the last."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each number is 10 more than the last.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(30)**",
          "commonErrors": [
                    "Adds wrong amount."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count by 5s: 5, 10, __, 20. What is missing?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing number",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Each number is 5 more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each number is 5 more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(15)**",
          "commonErrors": [
                    "Adds wrong amount."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Count by 2s: 2, 4, 6, __, 10. What is missing?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing number",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Each number is 2 more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each number is 2 more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(8)**",
          "commonErrors": [
                    "Adds wrong amount."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 + 10?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 20
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 10: 11, ..., 20. 10 + 10 = 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 10: 11, ..., 20. 10 + 10 = 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$20$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 + 10?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "20"
                    },
                    {
                              "id": "b",
                              "text": "21"
                    },
                    {
                              "id": "c",
                              "text": "18"
                    },
                    {
                              "id": "d",
                              "text": "23"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 10 + 10 = 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 10 + 10 = 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**20**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q6",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Count by 10s from 10 to 100. What number comes after 50?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count by 10s",
                              "statement": "Each +10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counts by 10s correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Says 60.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**60**",
          "commonErrors": [
                    "Wrong count.",
                    "Cannot count."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count by 1s\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Skip one: 2, 4, 6, 8 ..."
                    },
                    {
                              "id": "b",
                              "text": "Say every number: 1, 2, 3 ..."
                    },
                    {
                              "id": "c",
                              "text": "Skip four: 5, 10, 15, 20 ..."
                    },
                    {
                              "id": "d",
                              "text": "Skip nine: 10, 20, 30 ..."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count by 1s\" means Say every number: 1, 2, 3 ..."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count by 1s\" means Say every number: 1, 2, 3 ...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count by 1s** = Say every number: 1, 2, 3 ...",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count by 2s\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Skip four: 5, 10, 15, 20 ..."
                    },
                    {
                              "id": "b",
                              "text": "Skip nine: 10, 20, 30 ..."
                    },
                    {
                              "id": "c",
                              "text": "Numbers that repeat in order."
                    },
                    {
                              "id": "d",
                              "text": "Skip one: 2, 4, 6, 8 ..."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count by 2s\" means Skip one: 2, 4, 6, 8 ..."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count by 2s\" means Skip one: 2, 4, 6, 8 ...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count by 2s** = Skip one: 2, 4, 6, 8 ...",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count by 5s\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Skip nine: 10, 20, 30 ..."
                    },
                    {
                              "id": "b",
                              "text": "Skip four: 5, 10, 15, 20 ..."
                    },
                    {
                              "id": "c",
                              "text": "Numbers that repeat in order."
                    },
                    {
                              "id": "d",
                              "text": "Count by jumping over numbers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count by 5s\" means Skip four: 5, 10, 15, 20 ..."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count by 5s\" means Skip four: 5, 10, 15, 20 ...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count by 5s** = Skip four: 5, 10, 15, 20 ...",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u1-count-to-120-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count by 10s\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers that repeat in order."
                    },
                    {
                              "id": "b",
                              "text": "Count by jumping over numbers."
                    },
                    {
                              "id": "c",
                              "text": "Numbers in order."
                    },
                    {
                              "id": "d",
                              "text": "Skip nine: 10, 20, 30 ..."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count by 10s\" means Skip nine: 10, 20, 30 ..."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count by 10s\" means Skip nine: 10, 20, 30 ...",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count by 10s** = Skip nine: 10, 20, 30 ...",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
