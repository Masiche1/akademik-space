import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "mpk-u3-lesson-3-5",
  code: "3-5",
  title: "Add Within 10",
  goal: "I CAN add two numbers whose total is 10 or less.",
  standards: ["ELOF-PK.MATH.ADD.2"],
  vocabulary: [
    { term: "Within 10", definition: "Numbers up to 10." },
    { term: "Fact", definition: "A number fact you know by heart." },
    { term: "Sum", definition: "The answer to addition." },
    { term: "Make ten", definition: "Use 10 as a helper number." },
    { term: "Fluent", definition: "Answer quickly without counting all." },
    { term: "Strategy", definition: "A smart way to solve." },
  ],
  concepts: [
    {
      id: "mpk-u3-add-within-10",
      title: "Adding within 10",
      skill: "Recall and use addition facts with totals up to 10.",
      lesson: {
        sections: [
          {
            heading: "Know your facts",
            body: "Facts like 3 + 2 = 5, 4 + 4 = 8 should be quick. Practice them until you can say them without counting every time.",
          },
          {
            heading: "Use strategies",
            body: "**Count on** from the bigger number, or **make ten**: for 8 + 2, you know 8 + 2 = 10. Strategies help when a fact is not automatic yet.",
          },
        ],
        keyFormulas: [
          { name: "Addition facts", statement: "a + b = sum where sum <= 10" },
          { name: "Count on", statement: "Start at bigger number, count up by smaller." },
        ],
        workedExample: {
          problem: "Solve 6 + 3 using count on.",
          solution: "Start at 6, count on 3: 7, 8, 9. **6 + 3 = 9.**",
        },
      },
      questions: [
        {
          id: "mpk-u3-add-within-10-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 3 + 4?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 3: 4, ..., 7. 3 + 4 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 3: 4, ..., 7. 3 + 4 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$7$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "mpk-u3-add-within-10-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 3 + 4?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7"
                    },
                    {
                              "id": "b",
                              "text": "8"
                    },
                    {
                              "id": "c",
                              "text": "5"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 3 + 4 = 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 3 + 4 = 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "mpk-u3-add-within-10-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 5 + 3?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count on from 5: 6, ..., 8. 5 + 3 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 5: 6, ..., 8. 5 + 3 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "mpk-u3-add-within-10-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "7 + 2 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "8"
                    },
                    {
                              "id": "b",
                              "text": "9"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 + 2 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 + 2 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**9**",
          "commonErrors": [
                    "Counts 7, 8 and stops."
          ]
},
        },
        {
          id: "mpk-u3-add-within-10-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "4 + 4 = ?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "4 + 4 = 8."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 + 4 = 8.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$8$",
          "commonErrors": [
                    "Says 9 or 7."
          ]
},
        },
        {
          id: "mpk-u3-add-within-10-q6",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve 6 + 3 by counting on from 6.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sum",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Start at 6, count on 3: 7, 8, 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start at 6, count on 3: 7, 8, 9.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "6 + 3 = 9.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Counts both numbers from 1."
          ]
},
        },
        {
          id: "mpk-u3-add-within-10-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 10\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A number fact you know by heart."
                    },
                    {
                              "id": "b",
                              "text": "Numbers up to 10."
                    },
                    {
                              "id": "c",
                              "text": "The answer to addition."
                    },
                    {
                              "id": "d",
                              "text": "Use 10 as a helper number."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Within 10\" means Numbers up to 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Within 10\" means Numbers up to 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Within 10** = Numbers up to 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u3-add-within-10-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The answer to addition."
                    },
                    {
                              "id": "b",
                              "text": "Use 10 as a helper number."
                    },
                    {
                              "id": "c",
                              "text": "Answer quickly without counting all."
                    },
                    {
                              "id": "d",
                              "text": "A number fact you know by heart."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means A number fact you know by heart."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means A number fact you know by heart.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = A number fact you know by heart.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
