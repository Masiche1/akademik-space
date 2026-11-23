import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "m2-u3-lesson-3-1",
  code: "3-1",
  title: "Subtracting Hundreds",
  goal: "I CAN subtract hundreds and two-digit numbers.",
  standards: ["2.NBT.B.7"],
  vocabulary: [
    { term: "Subtract", definition: "Take away." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Ones", definition: "Single digits." },
    { term: "Difference", definition: "Result of subtracting." },
    { term: "Minus", definition: "Subtraction sign." },
    { term: "Left", definition: "Remaining." },
    { term: "Borrow", definition: "Take from next place." },
  ],
  concepts: [
    {
      id: "m2-u3-sub-100s",
      title: "Subtracting hundreds",
      skill: "Subtract hundreds and two-digit numbers within 1000.",
      lesson: {
        sections: [
          {
            heading: "Subtract by place",
            body: "Subtract **hundreds** from hundreds, **tens** from tens, **ones** from ones. 800 - 300 = 500.",
          },
          {
            heading: "Subtract from two-digit",
            body: "To subtract from a three-digit number, subtract from each place: 435 - 200 = 235.",
          },
        ],
        keyFormulas: [
          { name: "Sub hundreds", statement: "800 - 300 = 500." },
          { name: "Sub place", statement: "435 - 200 = 235" },
        ],
        workedExample: {
          problem: "Subtract 700 - 300.",
          solution: "700 - 300 = 400 (7 hundreds - 3 hundreds = 4 hundreds).",
        },
      },
      questions: [
        {
          id: "m2-u3-sub-100s-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "800 - 300 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "500"
                    },
                    {
                              "id": "b",
                              "text": "1100"
                    },
                    {
                              "id": "c",
                              "text": "530"
                    },
                    {
                              "id": "d",
                              "text": "5000"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "8 hundreds - 3 hundreds = 5 hundreds = 500."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "8 hundreds - 3 hundreds = 5 hundreds = 500.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "500",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m2-u3-sub-100s-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "600 - 45 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "555"
                    },
                    {
                              "id": "b",
                              "text": "645"
                    },
                    {
                              "id": "c",
                              "text": "565"
                    },
                    {
                              "id": "d",
                              "text": "5555"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "600 - 45 = 555."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "600 - 45 = 555.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "555",
          "commonErrors": [
                    "Wrong subtraction."
          ]
},
        },
        {
          id: "m2-u3-sub-100s-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Subtract 500 - 200 - 30. Show by place.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "sub",
                              "name": "Hundreds+two-digit",
                              "statement": "Subtract by place value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "500 - 200 = 300.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "300 - 30 = 270.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "270",
          "commonErrors": "Wrong difference."
},
        },
        {
          id: "m2-u3-sub-100s-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "900 - 400 = ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 500
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "900 - 400 = 500."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "500",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "500",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m2-u3-sub-100s-q5",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Subtract 800 - 300 - 50 - 20. Break into steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "sub",
                              "name": "Multi-step",
                              "statement": "Break into place groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "800 - 300 = 500.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "500 - 50 = 450.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "450 - 20 = 430.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "430",
          "commonErrors": "Wrong difference."
},
        },
        {
          id: "m2-u3-sub-100s-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of hundred."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Groups of ten."
                    },
                    {
                              "id": "d",
                              "text": "Single digits."
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
          id: "m2-u3-sub-100s-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Hundreds\" mean?",
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
                              "text": "Result of subtracting."
                    },
                    {
                              "id": "d",
                              "text": "Groups of hundred."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Hundreds\" means Groups of hundred."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Hundreds\" means Groups of hundred.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Hundreds** = Groups of hundred.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u3-sub-100s-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Tens\" mean?",
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
                              "text": "Result of subtracting."
                    },
                    {
                              "id": "d",
                              "text": "Subtraction sign."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Tens\" means Groups of ten."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Tens\" means Groups of ten.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Tens** = Groups of ten.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
