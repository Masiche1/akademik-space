import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m2-u3-lesson-3-3",
  code: "3-3",
  title: "Subtracting Within 1000",
  goal: "I CAN subtract within 1000 using strategies.",
  standards: ["2.NBT.B.7"],
  vocabulary: [
    { term: "Subtract", definition: "Take away." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Ones", definition: "Single digits." },
    { term: "Borrow", definition: "Take from next place." },
    { term: "Strategy", definition: "Method to solve." },
    { term: "Decompose", definition: "Break into parts." },
    { term: "Difference", definition: "Result." },
  ],
  concepts: [
    {
      id: "m2-u3-sub-1000",
      title: "Subtracting within 1000",
      skill: "Subtract within 1000 using place value strategies.",
      lesson: {
        sections: [
          {
            heading: "Subtract by place value",
            body: "Subtract **hundreds**, **tens**, **ones** separately, borrowing when needed. Or use **counting up** or **decompose** strategies.",
          },
          {
            heading: "Strategies",
            body: "Use **counting up** (how much to add to get there), or subtract in parts.",
          },
        ],
        keyFormulas: [
          { name: "Sub", statement: "Subtract hundreds, tens, ones separately or borrow." },
          { name: "Strategy", statement: "Count up or decompose." },
        ],
        workedExample: {
          problem: "Subtract 500 - 234 using place value.",
          solution: "500 - 200 = 300; 300 - 30 = 270; 270 - 4 = 266.",
        },
      },
      questions: [
        {
          id: "m2-u3-sub-1000-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "567 - 234 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "333"
                    },
                    {
                              "id": "b",
                              "text": "343"
                    },
                    {
                              "id": "c",
                              "text": "433"
                    },
                    {
                              "id": "d",
                              "text": "801"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "500-200=300, 60-30=30, 7-4=3 → 333."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "500-200=300, 60-30=30, 7-4=3 → 333.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "333",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m2-u3-sub-1000-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A good strategy for 500 - 178 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subtract all at once"
                    },
                    {
                              "id": "b",
                              "text": "count up from 178 to 500"
                    },
                    {
                              "id": "c",
                              "text": "add instead"
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
                              "statement": "Count up is efficient."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count up is efficient.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "count up",
          "commonErrors": [
                    "Picks inefficient method."
          ]
},
        },
        {
          id: "m2-u3-sub-1000-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Subtract 700 - 345 using place value.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "sub",
                              "name": "Place value",
                              "statement": "Hundreds, tens, ones."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "700 - 300 = 400.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "400 - 40 = 360.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "360 - 5 = 355.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "355",
          "commonErrors": "Wrong difference."
},
        },
        {
          id: "m2-u3-sub-1000-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "800 - 456 = ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 344
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "800 - 456 = 344."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "344",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "344",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m2-u3-sub-1000-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Subtract 900 - 567. Use counting up and explain.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "sub",
                              "name": "Count up",
                              "statement": "How much to add to 567 to get 900."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "900 - 567 = 333.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Explains counting up: 567 + 333 = 900.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "333",
          "commonErrors": "Wrong difference."
},
        },
        {
          id: "m2-u3-sub-1000-q6",
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
          id: "m2-u3-sub-1000-q7",
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
                              "text": "Take from next place."
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
          id: "m2-u3-sub-1000-q8",
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
                              "text": "Take from next place."
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
