import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m4-u2-lesson-2-3",
  code: "2-3",
  title: "Adding and Subtracting in Columns",
  goal: "I CAN add and subtract multi-digit numbers using columns.",
  standards: ["4.NBT.B.4"],
  vocabulary: [
    { term: "Column", definition: "Line up by place value." },
    { term: "Regroup", definition: "Carry or borrow." },
    { term: "Ones", definition: "Rightmost place." },
    { term: "Tens", definition: "Second place." },
    { term: "Hundreds", definition: "Third place." },
    { term: "Thousands", definition: "Fourth place." },
    { term: "Check", definition: "Verify your work." },
    { term: "Estimate", definition: "Check reasonableness." },
  ],
  concepts: [
    {
      id: "m4-u2-add-subtract-columns",
      title: "Adding and subtracting in columns",
      skill: "Line up digits by place value and use regrouping.",
      lesson: {
        sections: [
          {
            heading: "Columns",
            body: "Line up numbers so **ones** are under **ones**, **tens** under **tens**, etc. Add or subtract **right to left**.",
          },
          {
            heading: "Regrouping",
            body: "If a column adds to 10 or more, **carry** the extra to the next column. If you can't subtract, **borrow** from the next column.",
          },
        ],
        keyFormulas: [
          { name: "Columns", statement: "Ones -> tens -> hundreds -> thousands." },
          { name: "Check", statement: "Add to check subtraction; subtract to check addition." },
        ],
        workedExample: {
          problem: "Calculate $45,678 + 23,456$.",
          solution: "Ones: 8+6=14 (write 4, carry 1). Tens: 7+5+1=13 (write 3, carry 1). Hundreds: 6+4+1=11 (write 1, carry 1). Thousands: 5+3+1=9. Ten thousands: 4+2=6. **Answer: 69,134.**",
        },
      },
      questions: [
        {
          id: "m4-u2-add-subtract-columns-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $23,456 + 45,678$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "69,134"
                    },
                    {
                              "id": "b",
                              "text": "68,134"
                    },
                    {
                              "id": "c",
                              "text": "69,034"
                    },
                    {
                              "id": "d",
                              "text": "79,134"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "23,456 + 45,678 = 69,134."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "23,456 + 45,678 = 69,134.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "69,134",
          "commonErrors": [
                    "Misses carry."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-columns-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is $78,901 - 34,567$?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "44,334"
                    },
                    {
                              "id": "b",
                              "text": "45,334"
                    },
                    {
                              "id": "c",
                              "text": "44,434"
                    },
                    {
                              "id": "d",
                              "text": "54,334"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "78,901 - 34,567 = 44,334."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "78,901 - 34,567 = 44,334.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "44,334",
          "commonErrors": [
                    "Wrong subtraction."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-columns-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $56,789 + 34,567$ and $89,012 - 45,678$. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Columns",
                              "statement": "91,356 and 43,334."
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
          "finalAnswer": "**56,789 + 34,567 = 91,356; 89,012 - 45,678 = 43,334**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing work."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-columns-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When adding in columns, you should start from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the left"
                    },
                    {
                              "id": "b",
                              "text": "the right (ones)"
                    },
                    {
                              "id": "c",
                              "text": "the middle"
                    },
                    {
                              "id": "d",
                              "text": "either side"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Start from ones (right)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start from ones (right).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the right (ones)",
          "commonErrors": [
                    "Starts from left."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-columns-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Add $67,890 + 23,456$ and subtract $78,901 - 56,789$. Show your regrouping.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Columns",
                              "statement": "91,346 and 22,112."
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
          "finalAnswer": "**67,890 + 23,456 = 91,346; 78,901 - 56,789 = 22,112**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing regrouping."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-columns-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Column\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carry or borrow."
                    },
                    {
                              "id": "b",
                              "text": "Line up by place value."
                    },
                    {
                              "id": "c",
                              "text": "Rightmost place."
                    },
                    {
                              "id": "d",
                              "text": "Second place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Column\" means Line up by place value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Column\" means Line up by place value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Column** = Line up by place value.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m4-u2-add-subtract-columns-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Regroup\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rightmost place."
                    },
                    {
                              "id": "b",
                              "text": "Second place."
                    },
                    {
                              "id": "c",
                              "text": "Third place."
                    },
                    {
                              "id": "d",
                              "text": "Carry or borrow."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "m4-u2-add-subtract-columns-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Second place."
                    },
                    {
                              "id": "b",
                              "text": "Rightmost place."
                    },
                    {
                              "id": "c",
                              "text": "Third place."
                    },
                    {
                              "id": "d",
                              "text": "Fourth place."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ones\" means Rightmost place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ones\" means Rightmost place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ones** = Rightmost place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
