import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "m2-u2-lesson-2-2",
  code: "2-2",
  title: "Adding With Regrouping",
  goal: "I CAN add two-digit and three-digit numbers with regrouping.",
  standards: ["2.NBT.B.7"],
  vocabulary: [
    { term: "Regroup", definition: "Carry to next place." },
    { term: "Carry", definition: "Move a group to next place." },
    { term: "Ones", definition: "Single digits." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Sum", definition: "Total." },
    { term: "Place value", definition: "What digit is worth." },
    { term: "Exchange", definition: "Trade ten ones for a ten." },
  ],
  concepts: [
    {
      id: "m2-u2-add-with-regrouping",
      title: "Adding with regrouping",
      skill: "Add two-digit and three-digit numbers, regrouping when needed.",
      lesson: {
        sections: [
          {
            heading: "Regrouping",
            body: "When ones add to 10 or more, **regroup** — carry a ten to the tens place. 8 + 5 = 13, so write 3 and carry 1 ten.",
          },
          {
            heading: "Add by place",
            body: "Add ones first, then tens, then hundreds. Regroup whenever a place adds to 10 or more.",
          },
        ],
        keyFormulas: [
          { name: "Regroup", statement: "Ones sum >= 10 -> carry 1 to tens." },
          { name: "Add", statement: "Add ones, then tens, then hundreds, regrouping as needed." },
        ],
        workedExample: {
          problem: "Add 47 + 38.",
          solution: "7 + 8 = 15 (write 5, carry 1). 4 + 3 + 1 = 8. Answer: 85.",
        },
      },
      questions: [
        {
          id: "m2-u2-add-with-regrouping-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "47 + 38 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "75"
                    },
                    {
                              "id": "b",
                              "text": "85"
                    },
                    {
                              "id": "c",
                              "text": "715"
                    },
                    {
                              "id": "d",
                              "text": "65"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7+8=15 (carry 1), 4+3+1=8. Answer 85."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7+8=15 (carry 1), 4+3+1=8. Answer 85.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "85",
          "commonErrors": [
                    "Forgets to carry."
          ]
},
        },
        {
          id: "m2-u2-add-with-regrouping-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 56 + 27, the ones are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "5 + 2"
                    },
                    {
                              "id": "b",
                              "text": "6 + 7 = 13"
                    },
                    {
                              "id": "c",
                              "text": "5 + 7"
                    },
                    {
                              "id": "d",
                              "text": "6 + 2"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ones: 6 + 7 = 13."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones: 6 + 7 = 13.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6 + 7 = 13",
          "commonErrors": [
                    "Picks tens."
          ]
},
        },
        {
          id: "m2-u2-add-with-regrouping-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add 68 + 25. Show regrouping.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "add",
                              "name": "Regroup",
                              "statement": "Ones first, carry, then tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 + 5 = 13, write 3 carry 1.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "6 + 2 + 1 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Answer 93.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "93",
          "commonErrors": "Wrong answer."
},
        },
        {
          id: "m2-u2-add-with-regrouping-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "345 + 278 = ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 623
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "345 + 278 = 623."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "623",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "623",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m2-u2-add-with-regrouping-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Add 456 + 387. Show each step with regrouping.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "add",
                              "name": "Three-digit regroup",
                              "statement": "Ones, tens, hundreds with carries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "6 + 7 = 13, write 3 carry 1.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "5 + 8 + 1 = 14, write 4 carry 1.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "4 + 3 + 1 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Answer 843.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "843",
          "commonErrors": "Wrong sum."
},
        },
        {
          id: "m2-u2-add-with-regrouping-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Regroup\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move a group to next place."
                    },
                    {
                              "id": "b",
                              "text": "Carry to next place."
                    },
                    {
                              "id": "c",
                              "text": "Single digits."
                    },
                    {
                              "id": "d",
                              "text": "Groups of ten."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Regroup\" means Carry to next place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Regroup\" means Carry to next place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Regroup** = Carry to next place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u2-add-with-regrouping-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Carry\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single digits."
                    },
                    {
                              "id": "b",
                              "text": "Groups of ten."
                    },
                    {
                              "id": "c",
                              "text": "Groups of hundred."
                    },
                    {
                              "id": "d",
                              "text": "Move a group to next place."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Carry\" means Move a group to next place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Carry\" means Move a group to next place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Carry** = Move a group to next place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u2-add-with-regrouping-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of ten."
                    },
                    {
                              "id": "b",
                              "text": "Single digits."
                    },
                    {
                              "id": "c",
                              "text": "Groups of hundred."
                    },
                    {
                              "id": "d",
                              "text": "Total."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones\" means Single digits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones\" means Single digits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones** = Single digits.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
