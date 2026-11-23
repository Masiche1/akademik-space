import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m4-u2-lesson-2-1",
  code: "2-1",
  title: "Add and Subtract with Regrouping",
  goal: "I CAN add and subtract multi-digit numbers with regrouping.",
  standards: ["4.NBT.B.4"],
  vocabulary: [
    { term: "Regroup", definition: "Carry or borrow." },
    { term: "Add", definition: "Combine numbers." },
    { term: "Subtract", definition: "Take away." },
    { term: "Column", definition: "Line up digits." },
    { term: "Ones", definition: "Rightmost place." },
    { term: "Carry", definition: "Move to next place." },
    { term: "Borrow", definition: "Take from next place." },
    { term: "Estimate", definition: "Check reasonableness." },
  ],
  concepts: [
    {
      id: "m4-u2-add-subtract-regroup",
      title: "Add and subtract with regrouping",
      skill: "Add and subtract multi-digit numbers using regrouping.",
      lesson: {
        sections: [
          {
            heading: "Line up and regroup",
            body: "To **add**, line up digits by place value. If a column sums to 10+, **regroup** (carry) to the next place. To **subtract**, **borrow** when needed.",
          },
          {
            heading: "Estimate first",
            body: "**Estimate** before you compute to check if your answer is reasonable: 4,567 + 3,210 ≈ 7,777.",
          },
        ],
        keyFormulas: [
          { name: "Add", statement: "Ones -> tens -> hundreds -> thousands; carry when >= 10." },
          { name: "Subtract", statement: "Borrow when digit < subtrahend." },
        ],
        workedExample: {
          problem: "Calculate 4,567 + 3,289.",
          solution: "Ones: 7+9=16, write 6 carry 1. Tens: 6+8+1=15, write 5 carry 1. Hundreds: 5+2+1=8. Thousands: 4+3=7. **Answer: 7,856.**",
        },
      },
      questions: [
        {
          id: "m4-u2-add-subtract-regroup-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 4,567 + 3,289?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7,856"
                    },
                    {
                              "id": "b",
                              "text": "7,756"
                    },
                    {
                              "id": "c",
                              "text": "8,856"
                    },
                    {
                              "id": "d",
                              "text": "7,866"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7,856 after regrouping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7,856 after regrouping.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7,856",
          "commonErrors": [
                    "Misses carry."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-regroup-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 8,432 - 3,567?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4,875"
                    },
                    {
                              "id": "b",
                              "text": "4,765"
                    },
                    {
                              "id": "c",
                              "text": "5,865"
                    },
                    {
                              "id": "d",
                              "text": "4,865"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8,432 - 3,567 = 4,865... wait: 432-567 needs borrow. 8,432 - 3,567 = 4,865."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8,432 - 3,567 = 4,865... wait: 432-567 needs borrow. 8,432 - 3,567 = 4,865.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4,865",
          "commonErrors": [
                    "Wrong subtraction."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-regroup-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate 6,789 + 4,321 and 9,876 - 5,432. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Add/subtract",
                              "statement": "11,110 and 4,444."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adds correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subtracts correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**6,789 + 4,321 = 11,110; 9,876 - 5,432 = 4,444**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing work."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-regroup-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Estimate: 3,456 + 4,567 is about...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7,000"
                    },
                    {
                              "id": "b",
                              "text": "8,000"
                    },
                    {
                              "id": "c",
                              "text": "9,000"
                    },
                    {
                              "id": "d",
                              "text": "10,000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "3,000 + 5,000 = 8,000."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3,000 + 5,000 = 8,000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "8,000",
          "commonErrors": [
                    "Poor estimate."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-regroup-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve: A store sells 4,567 toys and 3,289 games. How many items total? Then it sells 2,156 items. How many left?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Add/subtract",
                              "statement": "Total + remaining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds total.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Finds remaining.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**4,567 + 3,289 = 7,856; 7,856 - 2,156 = 5,700**",
          "commonErrors": [
                    "Wrong answers.",
                    "Only one step."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-regroup-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Regroup\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine numbers."
                    },
                    {
                              "id": "b",
                              "text": "Carry or borrow."
                    },
                    {
                              "id": "c",
                              "text": "Take away."
                    },
                    {
                              "id": "d",
                              "text": "Line up digits."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Regroup\" means Carry or borrow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Regroup\" means Carry or borrow.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Regroup** = Carry or borrow.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-regroup-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take away."
                    },
                    {
                              "id": "b",
                              "text": "Line up digits."
                    },
                    {
                              "id": "c",
                              "text": "Rightmost place."
                    },
                    {
                              "id": "d",
                              "text": "Combine numbers."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Combine numbers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine numbers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine numbers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-regroup-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Line up digits."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Rightmost place."
                    },
                    {
                              "id": "d",
                              "text": "Move to next place."
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
      ],
    },
  ],
};
