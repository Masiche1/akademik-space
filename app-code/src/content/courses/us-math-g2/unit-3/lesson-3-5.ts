import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "m2-u3-lesson-3-5",
  code: "3-5",
  title: "Subtraction Review",
  goal: "I CAN subtract within 1000 using all strategies.",
  standards: ["2.NBT.B.7", "2.OA.A.1"],
  vocabulary: [
    { term: "Subtract", definition: "Take away." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Ones", definition: "Single digits." },
    { term: "Borrow", definition: "Take from next place." },
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Strategy", definition: "Method to solve." },
    { term: "Difference", definition: "Result." },
  ],
  concepts: [
    {
      id: "m2-u3-sub-review",
      title: "Subtraction review",
      skill: "Combine all subtraction skills within 1000.",
      lesson: {
        sections: [
          {
            heading: "All subtraction skills",
            body: "We **subtract** hundreds, tens and ones, **borrow** when needed, and solve **word problems** within 1000.",
          },
          {
            heading: "Put it together",
            body: "Use all subtraction strategies to solve problems.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction", statement: "Hundreds + tens + ones + borrow + word problems = subtraction mastery." },
        ],
        workedExample: {
          problem: "Solve: 789 - 456 = ?",
          solution: "789 - 456 = 333.",
        },
      },
      questions: [
        {
          id: "m2-u3-sub-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Subtraction skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "sub by place, borrow, solve word problems"
                    },
                    {
                              "id": "c",
                              "text": "only subtracting hundreds"
                    },
                    {
                              "id": "d",
                              "text": "only comparing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All subtraction skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All subtraction skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All subtraction skills.",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m2-u3-sub-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Subtract 789 - 456 and solve a word problem: 'There are 567 apples. 234 are picked. How many left?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "sub",
                                                  "All skills",
                                                  "Sub + word problem."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "sub",
                                                  "All skills",
                                                  "Sub + word problem."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "789 - 456 = 333.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "567 - 234 = 333.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "789 - 456 = 333; 567 - 234 = 333"
          ]
},
        },
        {
          id: "m2-u3-sub-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The difference of 800 - 345 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "455"
                    },
                    {
                              "id": "b",
                              "text": "455"
                    },
                    {
                              "id": "c",
                              "text": "545"
                    },
                    {
                              "id": "d",
                              "text": "1455"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "800 - 345 = 455."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "800 - 345 = 455.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "455",
          "commonErrors": [
                    "Wrong difference."
          ]
},
        },
        {
          id: "m2-u3-sub-review-q4",
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
          id: "m2-u3-sub-review-q5",
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
          id: "m2-u3-sub-review-q6",
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
                              "text": "Story with numbers."
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
        {
          id: "m2-u3-sub-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Take from next place."
                    },
                    {
                              "id": "b",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "c",
                              "text": "Method to solve."
                    },
                    {
                              "id": "d",
                              "text": "Single digits."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "m2-u3-sub-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Borrow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "b",
                              "text": "Take from next place."
                    },
                    {
                              "id": "c",
                              "text": "Method to solve."
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
                              "statement": "\"Borrow\" means Take from next place."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Borrow\" means Take from next place.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Borrow** = Take from next place.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
