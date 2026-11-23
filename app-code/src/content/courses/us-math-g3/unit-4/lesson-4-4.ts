import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "m3-u4-lesson-4-4",
  code: "4-4",
  title: "Problem-Solving Strategies",
  goal: "I CAN choose the right operation for word problems.",
  standards: ["3.OA.A.3", "3.OA.B.5", "3.OA.B.6"],
  vocabulary: [
    { term: "Strategy", definition: "Way to solve." },
    { term: "Keywords", definition: "Words that signal operation." },
    { term: "Total", definition: "All together." },
    { term: "Each", definition: "Per group." },
    { term: "Left", definition: "Remaining." },
    { term: "Groups", definition: "How many sets." },
    { term: "Share", definition: "Split equally." },
    { term: "Choose", definition: "Pick the right operation." },
  ],
  concepts: [
    {
      id: "m3-u4-problem-strategies",
      title: "Problem-solving strategies",
      skill: "Choose the right operation based on problem structure.",
      lesson: {
        sections: [
          {
            heading: "Choose the operation",
            body: "Look for **keywords**: 'each', 'per', 'every' -> multiply; 'share', 'split', 'left', 'remaining' -> divide or subtract; 'total', 'altogether' -> add.",
          },
          {
            heading: "Draw or act it out",
            body: "**Draw** a picture or **act out** the problem to understand what operation is needed.",
          },
        ],
        keyFormulas: [
          { name: "Choose operation", statement: "Keywords -> operation." },
        ],
        workedExample: {
          problem: "'There are 5 bags with 8 marbles each. How many marbles in all?' Which operation?",
          solution: "'Each' and 'in all' -> **multiply**: $5 \\times 8 = 40$.",
        },
      },
      questions: [
        {
          id: "m3-u4-problem-strategies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'5 bags with 8 marbles each. How many in all?' Which operation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "divide"
                    },
                    {
                              "id": "b",
                              "text": "multiply"
                    },
                    {
                              "id": "c",
                              "text": "subtract"
                    },
                    {
                              "id": "d",
                              "text": "add"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'Each' + 'in all' = multiply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Each' + 'in all' = multiply.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiply",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m3-u4-problem-strategies-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'48 students share into groups of 6. How many groups?' Which operation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "multiply"
                    },
                    {
                              "id": "b",
                              "text": "divide"
                    },
                    {
                              "id": "c",
                              "text": "add"
                    },
                    {
                              "id": "d",
                              "text": "subtract"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'Share' + 'groups' = divide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Share' + 'groups' = divide.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "divide",
          "commonErrors": [
                    "Wrong operation."
          ]
},
        },
        {
          id: "m3-u4-problem-strategies-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "'There are 6 boxes of 10 pencils. How many pencils in all?'",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "6 x 10 = 60."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "60",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "60",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m3-u4-problem-strategies-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'40 candies are shared among 8 children. How many each?'",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "40 / 8 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m3-u4-problem-strategies-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve two problems: one multiplication, one division. Explain which operation you chose for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Strategies",
                              "statement": "Choose correct operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves multiplication.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Solves division.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., '6 x 8 = 48; 48 / 6 = 8'**",
          "commonErrors": [
                    "Wrong operations.",
                    "No explanation."
          ]
},
        },
        {
          id: "m3-u4-problem-strategies-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Strategy\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Words that signal operation."
                    },
                    {
                              "id": "b",
                              "text": "Way to solve."
                    },
                    {
                              "id": "c",
                              "text": "All together."
                    },
                    {
                              "id": "d",
                              "text": "Per group."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Strategy\" means Way to solve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Strategy\" means Way to solve.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Strategy** = Way to solve.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u4-problem-strategies-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Keywords\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "All together."
                    },
                    {
                              "id": "b",
                              "text": "Per group."
                    },
                    {
                              "id": "c",
                              "text": "Remaining."
                    },
                    {
                              "id": "d",
                              "text": "Words that signal operation."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Keywords\" means Words that signal operation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Keywords\" means Words that signal operation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Keywords** = Words that signal operation.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u4-problem-strategies-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Total\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Per group."
                    },
                    {
                              "id": "b",
                              "text": "All together."
                    },
                    {
                              "id": "c",
                              "text": "Remaining."
                    },
                    {
                              "id": "d",
                              "text": "How many sets."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Total\" means All together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Total\" means All together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Total** = All together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
