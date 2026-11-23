import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m1-u5-lesson-5-2",
  code: "5-2",
  title: "Subtracting within 100",
  goal: "I CAN subtract within 100 using place value.",
  standards: ["1.NBT.C.6", "1.OA.A.1", "1.NBT.B.2"],
  vocabulary: [
    { term: "Subtract", definition: "Take away." },
    { term: "Within 100", definition: "Numbers up to 100." },
    { term: "Place value", definition: "Tens and ones." },
    { term: "Tens", definition: "Groups of 10." },
    { term: "Ones", definition: "Single units." },
    { term: "Regroup", definition: "Borrow from tens." },
    { term: "Difference", definition: "Answer." },
    { term: "Equation", definition: "Math sentence." },
  ],
  concepts: [
    {
      id: "m1-u5-sub-within-100",
      title: "Subtracting within 100",
      skill: "Subtract within 100 by subtracting tens and ones separately.",
      lesson: {
        sections: [
          {
            heading: "Subtract tens and ones",
            body: "To subtract within 100, subtract the **tens** and **ones** separately. $56 - 23$: 5 tens - 2 tens = 3 tens; 6 ones - 3 ones = 3 ones; total = 33.",
          },
          {
            heading: "Regrouping (borrowing)",
            body: "If ones are not enough, **regroup** — borrow 1 ten from the tens place. $52 - 27$: borrow 1 ten (52 = 4 tens + 12 ones), then $12 - 7 = 5$ ones, $4 - 2 = 2$ tens — answer 25.",
          },
        ],
        keyFormulas: [
          { name: "Subtract within 100", statement: "Subtract tens - subtract ones; regroup if needed." },
        ],
        workedExample: {
          problem: "Solve $64 - 38$.",
          solution: "Borrow: 64 = 5 tens + 14 ones. $14 - 8 = 6$ ones, $5 - 3 = 2$ tens. **$64 - 38 = 26$**.",
        },
      },
      questions: [
        {
          id: "m1-u5-sub-within-100-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $56 - 23$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 33
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "50-20=30, 6-3=3, 30+3=33."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "50-20=30, 6-3=3, 30+3=33.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(33)**",
          "commonErrors": [
                    "Subtracts wrong places."
          ]
},
        },
        {
          id: "m1-u5-sub-within-100-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $72 - 45$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 27
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Borrow: 72=6 tens+12 ones, 12-5=7, 6-4=2, =27."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Borrow: 72=6 tens+12 ones, 12-5=7, 6-4=2, =27.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(27)**",
          "commonErrors": [
                    "Does not borrow."
          ]
},
        },
        {
          id: "m1-u5-sub-within-100-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $81 - 56$.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Borrow: 81=7 tens+11 ones, 11-6=5, 7-5=2, =25."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Borrow: 81=7 tens+11 ones, 11-6=5, 7-5=2, =25.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(25)**",
          "commonErrors": [
                    "Does not borrow."
          ]
},
        },
        {
          id: "m1-u5-sub-within-100-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $93 - 47$ showing tens and ones, including borrowing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract within 100",
                              "statement": "Borrow: 93=8 tens+13 ones, 13-7=6, 8-4=4, =46."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Borrows correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gets 46.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**46**",
          "commonErrors": [
                    "No borrowing.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u5-sub-within-100-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers up to 100."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Tens and ones."
                    },
                    {
                              "id": "d",
                              "text": "Groups of 10."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Subtract\" means Take away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Subtract\" means Take away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Subtract** = Take away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-sub-within-100-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 100\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tens and ones."
                    },
                    {
                              "id": "b",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "c",
                              "text": "Single units."
                    },
                    {
                              "id": "d",
                              "text": "Numbers up to 100."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Within 100\" means Numbers up to 100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Within 100\" means Numbers up to 100.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Within 100** = Numbers up to 100.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-sub-within-100-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Place value\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of 10."
                    },
                    {
                              "id": "b",
                              "text": "Tens and ones."
                    },
                    {
                              "id": "c",
                              "text": "Single units."
                    },
                    {
                              "id": "d",
                              "text": "Borrow from tens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Place value\" means Tens and ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Place value\" means Tens and ones.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Place value** = Tens and ones.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-sub-within-100-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Single units."
                    },
                    {
                              "id": "b",
                              "text": "Borrow from tens."
                    },
                    {
                              "id": "c",
                              "text": "Answer."
                    },
                    {
                              "id": "d",
                              "text": "Groups of 10."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens\" means Groups of 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens\" means Groups of 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens** = Groups of 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
