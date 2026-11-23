import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "m2-u2-lesson-2-5",
  code: "2-5",
  title: "Addition Review",
  goal: "I CAN add within 1000 using all strategies.",
  standards: ["2.NBT.B.7", "2.OA.A.1"],
  vocabulary: [
    { term: "Add", definition: "Combine amounts." },
    { term: "Hundreds", definition: "Groups of hundred." },
    { term: "Tens", definition: "Groups of ten." },
    { term: "Ones", definition: "Single digits." },
    { term: "Regroup", definition: "Carry to next place." },
    { term: "Word problem", definition: "Story with numbers." },
    { term: "Strategy", definition: "Method to solve." },
    { term: "Sum", definition: "Total." },
  ],
  concepts: [
    {
      id: "m2-u2-add-review",
      title: "Addition review",
      skill: "Combine all addition skills within 1000.",
      lesson: {
        sections: [
          {
            heading: "All addition skills",
            body: "We **add** hundreds, tens and ones, **regroup** when needed, and solve **word problems** within 1000.",
          },
          {
            heading: "Put it together",
            body: "Use all addition strategies to solve problems.",
          },
        ],
        keyFormulas: [
          { name: "Addition", statement: "Hundreds + tens + ones + regroup + word problems = addition mastery." },
        ],
        workedExample: {
          problem: "Solve: 456 + 378 = ?",
          solution: "456 + 378 = 834.",
        },
      },
      questions: [
        {
          id: "m2-u2-add-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Addition skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "add by place, regroup, solve word problems"
                    },
                    {
                              "id": "c",
                              "text": "only adding hundreds"
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
                              "statement": "All addition skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All addition skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "All addition skills.",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m2-u2-add-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Add 456 + 389 and solve a word problem: 'There are 234 books and 189 more arrive. How many total?'",
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
                                                  "add",
                                                  "All skills",
                                                  "Add + word problem."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "add",
                                                  "All skills",
                                                  "Add + word problem."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "456 + 389 = 845.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "234 + 189 = 423.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "456 + 389 = 845; 234 + 189 = 423"
          ]
},
        },
        {
          id: "m2-u2-add-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sum of 567 + 234 is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "791"
                    },
                    {
                              "id": "b",
                              "text": "801"
                    },
                    {
                              "id": "c",
                              "text": "711"
                    },
                    {
                              "id": "d",
                              "text": "891"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "567 + 234 = 801."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "567 + 234 = 801.",
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
          id: "m2-u2-add-review-q4",
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
          id: "m2-u2-add-review-q5",
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
          id: "m2-u2-add-review-q6",
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
          id: "m2-u2-add-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ones\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carry to next place."
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
          id: "m2-u2-add-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Regroup\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story with numbers."
                    },
                    {
                              "id": "b",
                              "text": "Carry to next place."
                    },
                    {
                              "id": "c",
                              "text": "Method to solve."
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
      ],
    },
  ],
};
