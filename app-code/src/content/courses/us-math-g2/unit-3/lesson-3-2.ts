import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "m2-u3-lesson-3-2",
  code: "3-2",
  title: "Subtracting With Regrouping",
  goal: "I CAN subtract with regrouping (borrowing).",
  standards: ["2.NBT.B.7"],
  vocabulary: [
    { term: "Regroup", definition: "Borrow from next place." },
    { term: "Borrow", definition: "Take from higher place." },
    { term: "Ones", definition: "Single digits." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Difference", definition: "Result." },
    { term: "Place value", definition: "What digit is worth." },
    { term: "Exchange", definition: "Trade a ten for ten ones." },
  ],
  concepts: [
    {
      id: "m2-u3-sub-regrouping",
      title: "Subtracting with regrouping",
      skill: "Subtract two-digit and three-digit numbers, borrowing when needed.",
      lesson: {
        sections: [
          {
            heading: "Borrowing",
            body: "When a digit is too small to subtract, **borrow** from the next place. 52 - 27: can't do 2 - 7, so borrow a ten: 12 - 7 = 5, then 4 - 2 = 2. Answer: 25.",
          },
          {
            heading: "Subtract by place",
            body: "Subtract ones first, then tens, then hundreds. Borrow when needed.",
          },
        ],
        keyFormulas: [
          { name: "Borrow", statement: "Digit too small -> borrow from next place." },
          { name: "Sub", statement: "Ones first, then tens, then hundreds, borrowing as needed." },
        ],
        workedExample: {
          problem: "Subtract 63 - 28.",
          solution: "3 - 8 can't, borrow: 13 - 8 = 5. 5 - 2 = 3 (after borrow). Answer: 35.",
        },
      },
      questions: [
        {
          id: "m2-u3-sub-regrouping-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "63 - 28 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "45"
                    },
                    {
                              "id": "b",
                              "text": "35"
                    },
                    {
                              "id": "c",
                              "text": "95"
                    },
                    {
                              "id": "d",
                              "text": "55"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Borrow: 13-8=5, 5-2=3. Answer 35."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Borrow: 13-8=5, 5-2=3. Answer 35.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "35",
          "commonErrors": [
                    "Forgets to borrow."
          ]
},
        },
        {
          id: "m2-u3-sub-regrouping-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 82 - 45, the ones are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8 - 4"
                    },
                    {
                              "id": "b",
                              "text": "2 - 5 (need borrow)"
                    },
                    {
                              "id": "c",
                              "text": "8 - 5"
                    },
                    {
                              "id": "d",
                              "text": "2 - 4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Ones: 2 - 5 needs borrow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ones: 2 - 5 needs borrow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2 - 5 needs borrow",
          "commonErrors": [
                    "Picks tens."
          ]
},
        },
        {
          id: "m2-u3-sub-regrouping-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Subtract 75 - 38. Show borrowing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "sub",
                              "name": "Borrow",
                              "statement": "Ones first, borrow, then tens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 - 8 can't, borrow: 15 - 8 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "6 - 3 = 3 (after borrow).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Answer 37.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "37",
          "commonErrors": "Wrong answer."
},
        },
        {
          id: "m2-u3-sub-regrouping-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "456 - 278 = ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 178
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "456 - 278 = 178."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "178",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "178",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m2-u3-sub-regrouping-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Subtract 634 - 257. Show each step with borrowing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "sub",
                              "name": "Three-digit borrow",
                              "statement": "Ones, tens, hundreds with borrows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 - 7 can't, borrow: 14 - 7 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "2 - 5 can't (after borrow), borrow: 12 - 5 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "5 - 2 = 3 (after borrow).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Answer 377.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "377",
          "commonErrors": "Wrong difference."
},
        },
        {
          id: "m2-u3-sub-regrouping-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Regroup\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take from higher place."
                    },
                    {
                              "id": "b",
                              "text": "Borrow from next place."
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
                              "statement": "\"Regroup\" means Borrow from next place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Regroup\" means Borrow from next place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Regroup** = Borrow from next place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u3-sub-regrouping-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Borrow\" mean?",
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
                              "text": "Take from higher place."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Borrow\" means Take from higher place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Borrow\" means Take from higher place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Borrow** = Take from higher place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u3-sub-regrouping-q8",
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
                              "text": "Result."
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
