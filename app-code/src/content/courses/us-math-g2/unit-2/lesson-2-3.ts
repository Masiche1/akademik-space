import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m2-u2-lesson-2-3",
  code: "2-3",
  title: "Adding Within 1000",
  goal: "I CAN add numbers within 1000 using strategies.",
  standards: ["2.NBT.B.7"],
  vocabulary: [
    { term: "Add", definition: "Combine amounts." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Ones", definition: "Single digits." },
    { term: "Regroup", definition: "Carry to next place." },
    { term: "Strategy", definition: "Method to solve." },
    { term: "Decompose", definition: "Break into parts." },
    { term: "Sum", definition: "Total." },
  ],
  concepts: [
    {
      id: "m2-u2-add-1000",
      title: "Adding within 1000",
      skill: "Add numbers within 1000 using place value strategies.",
      lesson: {
        sections: [
          {
            heading: "Add by place value",
            body: "Add **hundreds**, **tens**, and **ones** separately, then combine. Or use **regrouping** when a place adds to 10+.",
          },
          {
            heading: "Strategies",
            body: "Use strategies like **decompose** (300 + 200 = 500, then add 47), or add in parts.",
          },
        ],
        keyFormulas: [
          { name: "Add", statement: "Add hundreds, tens, ones separately or regroup." },
          { name: "Strategy", statement: "Decompose: 300 + 47 + 200 + 50 + 7" },
        ],
        workedExample: {
          problem: "Add 345 + 232 using place value.",
          solution: "300 + 200 = 500; 40 + 30 = 70; 5 + 2 = 7. Total: 577.",
        },
      },
      questions: [
        {
          id: "m2-u2-add-1000-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "234 + 145 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "379"
                    },
                    {
                              "id": "b",
                              "text": "389"
                    },
                    {
                              "id": "c",
                              "text": "279"
                    },
                    {
                              "id": "d",
                              "text": "399"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "300+100=400... wait: 234+145 = 379? Let's check: 200+100=300, 30+40=70, 4+5=9 → 379."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "300+100=400... wait: 234+145 = 379? Let's check: 200+100=300, 30+40=70, 4+5=9 → 379.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "379",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m2-u2-add-1000-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A good strategy for 456 + 234 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add all at once"
                    },
                    {
                              "id": "b",
                              "text": "decompose into hundreds, tens, ones"
                    },
                    {
                              "id": "c",
                              "text": "subtract instead"
                    },
                    {
                              "id": "d",
                              "text": "count by 1s"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Decompose by place value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decompose by place value.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "decompose",
          "commonErrors": [
                    "Picks inefficient method."
          ]
},
        },
        {
          id: "m2-u2-add-1000-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Add 567 + 234 using place value decomposition.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "add",
                              "name": "Decompose",
                              "statement": "Hundreds + tens + ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "500 + 200 = 700.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "60 + 30 = 90.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "7 + 4 = 11.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "700 + 90 + 11 = 801.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "801",
          "commonErrors": "Wrong sum."
},
        },
        {
          id: "m2-u2-add-1000-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "678 + 123 = ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 801
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "678 + 123 = 801."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "801",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "801",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m2-u2-add-1000-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Add 456 + 345 + 200. Use any strategy and explain it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "add",
                              "name": "Multi-add",
                              "statement": "Any valid strategy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correct sum.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Explains strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1001",
          "commonErrors": "Wrong sum."
},
        },
        {
          id: "m2-u2-add-1000-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Groups of hundred."
                    },
                    {
                              "id": "b",
                              "text": "Combine amounts."
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
                              "statement": "\"Add\" means Combine amounts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Combine amounts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Combine amounts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u2-add-1000-q7",
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
                              "text": "Carry to next place."
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
          id: "m2-u2-add-1000-q8",
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
                              "text": "Carry to next place."
                    },
                    {
                              "id": "d",
                              "text": "Method to solve."
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
