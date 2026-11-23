import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m2-u2-lesson-2-1",
  code: "2-1",
  title: "Adding Hundreds",
  goal: "I CAN add hundreds and two-digit numbers.",
  standards: ["2.NBT.B.7"],
  vocabulary: [
    { term: "Add", definition: "Combine amounts." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Ones", definition: "Single digits." },
    { term: "Sum", definition: "Total after adding." },
    { term: "Plus", definition: "Addition sign." },
    { term: "Equals", definition: "Same as." },
    { term: "Total", definition: "Final amount." },
  ],
  concepts: [
    {
      id: "m2-u2-add-100s",
      title: "Adding hundreds",
      skill: "Add hundreds and two-digit numbers within 1000.",
      lesson: {
        sections: [
          {
            heading: "Add by place",
            body: "Add **hundreds** to hundreds, **tens** to tens, **ones** to ones. 300 + 200 = 500; 40 + 30 = 70.",
          },
          {
            heading: "Add hundreds to two-digit",
            body: "To add a hundred to a two-digit number, add to the hundreds place: 400 + 35 = 435.",
          },
        ],
        keyFormulas: [
          { name: "Add hundreds", statement: "300 + 200 = 500." },
          { name: "Add to place", statement: "400 + 35 = 435" },
        ],
        workedExample: {
          problem: "Add 500 + 200.",
          solution: "500 + 200 = 700 (5 hundreds + 2 hundreds = 7 hundreds).",
        },
      },
      questions: [
        {
          id: "m2-u2-add-100s-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "500 + 200 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "300"
                    },
                    {
                              "id": "b",
                              "text": "700"
                    },
                    {
                              "id": "c",
                              "text": "520"
                    },
                    {
                              "id": "d",
                              "text": "7000"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 hundreds + 2 hundreds = 7 hundreds = 700."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 hundreds + 2 hundreds = 7 hundreds = 700.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "700",
          "commonErrors": [
                    "Adds wrong places."
          ]
},
        },
        {
          id: "m2-u2-add-100s-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "400 + 35 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "435"
                    },
                    {
                              "id": "b",
                              "text": "453"
                    },
                    {
                              "id": "c",
                              "text": "75"
                    },
                    {
                              "id": "d",
                              "text": "40035"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "400 + 35 = 435."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "400 + 35 = 435.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "435",
          "commonErrors": [
                    "Reorders digits."
          ]
},
        },
        {
          id: "m2-u2-add-100s-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Add 300 + 400 + 50. Show your work by place.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "add",
                              "name": "Hundreds+two-digit",
                              "statement": "Add by place value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "300 + 400 = 700.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "700 + 50 = 750.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "750",
          "commonErrors": "Wrong sum."
},
        },
        {
          id: "m2-u2-add-100s-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "800 + 100 = ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 900
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "800 + 100 = 900."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "900",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "900",
          "commonErrors": [
                    "Wrong sum."
          ]
},
        },
        {
          id: "m2-u2-add-100s-q5",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Add 200 + 300 + 60 + 40. Break it into easier steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "add",
                              "name": "Multi-step",
                              "statement": "Break into place groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "200 + 300 = 500.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "60 + 40 = 100.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "500 + 100 = 600.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "600",
          "commonErrors": "Wrong sum."
},
        },
        {
          id: "m2-u2-add-100s-q6",
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
          id: "m2-u2-add-100s-q7",
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
                              "text": "Total after adding."
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
          id: "m2-u2-add-100s-q8",
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
                              "text": "Total after adding."
                    },
                    {
                              "id": "d",
                              "text": "Addition sign."
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
