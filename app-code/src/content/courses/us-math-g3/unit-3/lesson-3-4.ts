import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "m3-u3-lesson-3-4",
  code: "3-4",
  title: "Division Word Problems",
  goal: "I CAN solve division word problems within 100.",
  standards: ["3.OA.A.3", "3.OA.B.6"],
  vocabulary: [
    { term: "Share", definition: "Split equally." },
    { term: "Groups", definition: "How many sets." },
    { term: "Each", definition: "Per group." },
    { term: "Total", definition: "The whole amount." },
    { term: "Equation", definition: "Number sentence." },
    { term: "Quotient", definition: "Answer to divide." },
    { term: "Equal", definition: "Same amount." },
    { term: "Solve", definition: "Find the answer." },
  ],
  concepts: [
    {
      id: "m3-u3-divide-word-problems",
      title: "Division word problems",
      skill: "Identify sharing or grouping and write division equations.",
      lesson: {
        sections: [
          {
            heading: "Look for sharing",
            body: "Division problems involve **sharing** equally or **grouping**. '24 eggs shared into 4 boxes' = $24 \\div 4 = 6$. 'How many groups of 5 in 30?' = $30 \\div 5 = 6$.",
          },
          {
            heading: "Write the equation",
            body: "Identify **total**, **groups** or **size**, then divide: total / groups = each, or total / size = groups.",
          },
        ],
        keyFormulas: [
          { name: "Share", statement: "total / groups = each." },
          { name: "Group", statement: "total / size = groups." },
        ],
        workedExample: {
          problem: "20 stickers shared into 4 envelopes. How many per envelope?",
          solution: "$20 \\div 4 = 5$ per envelope.",
        },
      },
      questions: [
        {
          id: "m3-u3-divide-word-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'20 stickers shared into 4 envelopes. How many per envelope?' What is the answer?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "80"
                    },
                    {
                              "id": "b",
                              "text": "16"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "24"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "20 / 4 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20 / 4 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m3-u3-divide-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'How many groups of 5 in 30?' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "30 x 5"
                    },
                    {
                              "id": "b",
                              "text": "30 / 5"
                    },
                    {
                              "id": "c",
                              "text": "30 - 5"
                    },
                    {
                              "id": "d",
                              "text": "30 + 5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "30 / 5 = 6 groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "30 / 5 = 6 groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "30 / 5",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m3-u3-divide-word-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "24 eggs shared into 4 boxes. How many per box?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "24 / 4 = 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m3-u3-divide-word-problems-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "45 students in groups of 5. How many groups?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "45 / 5 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m3-u3-divide-word-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write and solve: 'A farmer has 48 carrots to pack into bags of 6. How many bags?' Then write a related multiplication fact.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word problems",
                              "statement": "48 / 6 = 8 bags."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves division.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Writes related multiplication.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**48/6=8 bags; 8x6=48**",
          "commonErrors": [
                    "Wrong answer.",
                    "No related fact."
          ]
},
        },
        {
          id: "m3-u3-divide-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Share\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How many sets."
                    },
                    {
                              "id": "b",
                              "text": "Split equally."
                    },
                    {
                              "id": "c",
                              "text": "Per group."
                    },
                    {
                              "id": "d",
                              "text": "The whole amount."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Share\" means Split equally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Share\" means Split equally.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Share** = Split equally.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Groups\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Per group."
                    },
                    {
                              "id": "b",
                              "text": "The whole amount."
                    },
                    {
                              "id": "c",
                              "text": "Number sentence."
                    },
                    {
                              "id": "d",
                              "text": "How many sets."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Groups\" means How many sets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Groups\" means How many sets.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Groups** = How many sets.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u3-divide-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Each\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The whole amount."
                    },
                    {
                              "id": "b",
                              "text": "Per group."
                    },
                    {
                              "id": "c",
                              "text": "Number sentence."
                    },
                    {
                              "id": "d",
                              "text": "Answer to divide."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Each\" means Per group."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Each\" means Per group.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Each** = Per group.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
