import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m1-u5-lesson-5-3",
  code: "5-3",
  title: "Word Problems within 100",
  goal: "I CAN solve addition and subtraction word problems within 100.",
  standards: ["1.OA.A.1", "1.NBT.C.4", "1.NBT.C.6"],
  vocabulary: [
    { term: "Word problem", definition: "Story problem." },
    { term: "Within 100", definition: "Numbers up to 100." },
    { term: "Add", definition: "Put together." },
    { term: "Subtract", definition: "Take away." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Total", definition: "Whole amount." },
    { term: "Remaining", definition: "What is left." },
    { term: "Solve", definition: "Find answer." },
  ],
  concepts: [
    {
      id: "m1-u5-add-sub-100-word",
      title: "Word problems within 100",
      skill: "Solve addition and subtraction word problems within 100.",
      lesson: {
        sections: [
          {
            heading: "Read and choose",
            body: "Word problems within 100 need you to decide: is this **addition** (put together) or **subtraction** (take away)? Read the story carefully.",
          },
          {
            heading: "Solve within 100",
            body: "Use place value strategies to add or subtract within 100, including regrouping when needed.",
          },
        ],
        keyFormulas: [
          { name: "Word problem", statement: "Read -> choose operation -> solve within 100." },
        ],
        workedExample: {
          problem: "A store had 68 stickers. It sold 35. How many are left?",
          solution: "$68 - 35 = 33$ — **33 stickers left**.",
        },
      },
      questions: [
        {
          id: "m1-u5-add-sub-100-word-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "A class has 45 students. 18 are absent. How many are present?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Present",
                              "answer": 27
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$45 - 18 = 27$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$45 - 18 = 27$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(27)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u5-add-sub-100-word-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 36 red marbles and 47 blue marbles. How many total?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total",
                              "answer": 83
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$36 + 47 = 83$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$36 + 47 = 83$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(83)**",
          "commonErrors": [
                    "Subtracts instead."
          ]
},
        },
        {
          id: "m1-u5-add-sub-100-word-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "'How many left' in a word problem means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "subtract"
                    },
                    {
                              "id": "c",
                              "text": "multiply"
                    },
                    {
                              "id": "d",
                              "text": "divide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Left = subtract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Left = subtract.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**subtract**",
          "commonErrors": [
                    "Confuses operation."
          ]
},
        },
        {
          id: "m1-u5-add-sub-100-word-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve: 'There were 82 birds. 29 flew away. How many are left?' Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Sub within 100",
                              "statement": "Borrow: 82=7 tens+12 ones, 12-9=3, 7-2=5, =53."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes equation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Solves correctly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**$82 - 29 = 53$**",
          "commonErrors": [
                    "Wrong operation.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u5-add-sub-100-word-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers up to 100."
                    },
                    {
                              "id": "b",
                              "text": "Story problem."
                    },
                    {
                              "id": "c",
                              "text": "Put together."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Word problem\" means Story problem."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Word problem\" means Story problem.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Word problem** = Story problem.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-add-sub-100-word-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 100\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put together."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
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
          id: "m1-u5-add-sub-100-word-q7",
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
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Whole amount."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add\" means Put together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add\" means Put together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add** = Put together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u5-add-sub-100-word-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "Whole amount."
                    },
                    {
                              "id": "c",
                              "text": "What is left."
                    },
                    {
                              "id": "d",
                              "text": "Take away."
                    }
          ],
          "correctChoiceId": "d"
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
