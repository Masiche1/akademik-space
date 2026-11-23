import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "m4-u4-lesson-4-2",
  code: "4-2",
  title: "Dividing Larger Numbers",
  goal: "I CAN divide larger numbers and interpret remainders.",
  standards: ["4.NBT.B.6"],
  vocabulary: [
    { term: "Dividend", definition: "Number being divided." },
    { term: "Divisor", definition: "Number you divide by." },
    { term: "Quotient", definition: "Answer." },
    { term: "Remainder", definition: "What's left over." },
    { term: "Interpret", definition: "What remainder means." },
    { term: "Round up", definition: "Add 1 to quotient." },
    { term: "Round down", definition: "Keep quotient." },
    { term: "Check", definition: "Multiply to verify." },
  ],
  concepts: [
    {
      id: "m4-u4-divide-2digit",
      title: "Dividing larger numbers",
      skill: "Divide larger numbers and interpret remainders in context.",
      lesson: {
        sections: [
          {
            heading: "Remainders matter",
            body: "When dividing, you may have a **remainder**. In word problems, decide if you **round up** (need more) or **round down** (have enough).",
          },
          {
            heading: "Example",
            body: "$25 \\div 4 = 6$ remainder $1$. If sharing 25 cookies among 4 people, each gets 6 with 1 left over.",
          },
        ],
        keyFormulas: [
          { name: "Divide", statement: "Dividend / divisor = quotient + remainder." },
          { name: "Interpret", statement: "Remainder -> round up or down depending on context." },
        ],
        workedExample: {
          problem: "45 students go on a trip. Each bus holds 8. How many buses needed?",
          solution: "$45 \\div 8 = 5$ remainder $5$. Need **6 buses** (round up).",
        },
      },
      questions: [
        {
          id: "m4-u4-divide-2digit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $45 \\div 8$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5 r 5"
                    },
                    {
                              "id": "b",
                              "text": "5 r 4"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "4 r 13"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "45 / 8 = 5 remainder 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "45 / 8 = 5 remainder 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5 r 5",
          "commonErrors": [
                    "Wrong remainder."
          ]
},
        },
        {
          id: "m4-u4-divide-2digit-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "50 students need buses. Each bus holds 12. How many buses?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "4 r 2"
                    },
                    {
                              "id": "d",
                              "text": "3"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "50 / 12 = 4 r 2; need 5 buses (round up)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "50 / 12 = 4 r 2; need 5 buses (round up).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Rounds down instead."
          ]
},
        },
        {
          id: "m4-u4-divide-2digit-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Divide $78 \\div 6$ and interpret the remainder in a word problem context.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "13 exactly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divides correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interprets remainder.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**78 / 6 = 13 exactly; no remainder**",
          "commonErrors": [
                    "Wrong quotient.",
                    "No interpretation."
          ]
},
        },
        {
          id: "m4-u4-divide-2digit-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When should you round UP the quotient?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When you have extra"
                    },
                    {
                              "id": "b",
                              "text": "When you need more of something"
                    },
                    {
                              "id": "c",
                              "text": "Never"
                    },
                    {
                              "id": "d",
                              "text": "Always"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Round up when you need more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Round up when you need more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "When you need more of something",
          "commonErrors": [
                    "Thinks always round down."
          ]
},
        },
        {
          id: "m4-u4-divide-2digit-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve: 67 students need to be divided into groups of 8. How many full groups and how many left over?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Divide",
                              "statement": "8 r 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds quotient.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds remainder.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**67 / 8 = 8 r 3; 8 full groups, 3 left over**",
          "commonErrors": [
                    "Wrong quotient.",
                    "No remainder."
          ]
},
        },
        {
          id: "m4-u4-divide-2digit-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dividend\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number you divide by."
                    },
                    {
                              "id": "b",
                              "text": "Number being divided."
                    },
                    {
                              "id": "c",
                              "text": "Answer."
                    },
                    {
                              "id": "d",
                              "text": "What's left over."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Dividend\" means Number being divided."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dividend\" means Number being divided.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Dividend** = Number being divided.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-2digit-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Divisor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "What's left over."
                    },
                    {
                              "id": "c",
                              "text": "What remainder means."
                    },
                    {
                              "id": "d",
                              "text": "Number you divide by."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Divisor\" means Number you divide by."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Divisor\" means Number you divide by.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Divisor** = Number you divide by.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u4-divide-2digit-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quotient\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What's left over."
                    },
                    {
                              "id": "b",
                              "text": "Answer."
                    },
                    {
                              "id": "c",
                              "text": "What remainder means."
                    },
                    {
                              "id": "d",
                              "text": "Add 1 to quotient."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quotient\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quotient\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quotient** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
