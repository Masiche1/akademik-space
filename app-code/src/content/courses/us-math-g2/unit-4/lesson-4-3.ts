import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "m2-u4-lesson-4-3",
  code: "4-3",
  title: "True and False Equations",
  goal: "I CAN identify true and false equations.",
  standards: ["2.OA.A.1", "2.NBT.B.7"],
  vocabulary: [
    { term: "Equation", definition: "Math sentence." },
    { term: "True", definition: "Correct." },
    { term: "False", definition: "Incorrect." },
    { term: "Equal", definition: "Same value." },
    { term: "Balance", definition: "Both sides same." },
    { term: "Check", definition: "Verify." },
    { term: "Side", definition: "Left or right." },
    { term: "Value", definition: "What it equals." },
  ],
  concepts: [
    {
      id: "m2-u4-true-false-equations",
      title: "True and false equations",
      skill: "Determine if equations are true or false by checking both sides.",
      lesson: {
        sections: [
          {
            heading: "Check both sides",
            body: "An equation is **true** if both sides are **equal**. 45 + 27 = 72 is true; 45 + 27 = 73 is false.",
          },
          {
            heading: "Evaluate each side",
            body: "Calculate each side separately, then compare. If they're equal, it's **true**; if not, it's **false**.",
          },
        ],
        keyFormulas: [
          { name: "True/False", statement: "Both sides equal -> true; different -> false." },
        ],
        workedExample: {
          problem: "Is 156 + 234 = 390 true or false?",
          solution: "156 + 234 = 390. Both sides equal -> **true**.",
        },
      },
      questions: [
        {
          id: "m2-u4-true-false-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An equation is 'true' when...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "sides are different"
                    },
                    {
                              "id": "b",
                              "text": "both sides are equal"
                    },
                    {
                              "id": "c",
                              "text": "it has a plus sign"
                    },
                    {
                              "id": "d",
                              "text": "it's long"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "True = both sides equal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "True = both sides equal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "both sides equal",
          "commonErrors": [
                    "Picks wrong condition."
          ]
},
        },
        {
          id: "m2-u4-true-false-equations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is 234 + 156 = 390 true?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "false"
                    },
                    {
                              "id": "b",
                              "text": "true"
                    },
                    {
                              "id": "c",
                              "text": "can't tell"
                    },
                    {
                              "id": "d",
                              "text": "maybe"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "234 + 156 = 390 -> true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "234 + 156 = 390 -> true.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "true",
          "commonErrors": [
                    "Wrong evaluation."
          ]
},
        },
        {
          id: "m2-u4-true-false-equations-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Check if 345 + 234 = 579 is true or false. Show your work.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "true",
                              "name": "Check equation",
                              "statement": "Evaluate both sides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "345 + 234 = 579.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Both sides equal -> true.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "True",
          "commonErrors": "Wrong evaluation."
},
        },
        {
          id: "m2-u4-true-false-equations-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is 567 + 234 = 801 true? Answer 1 for true, 0 for false.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Answer",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "reasoning",
                              "statement": "567 + 234 = 801 -> true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Wrong evaluation."
          ]
},
        },
        {
          id: "m2-u4-true-false-equations-q5",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Check three equations and identify which are true and which are false: 156+234=390, 345+234=578, 456+345=801.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "true",
                              "name": "Multiple equations",
                              "statement": "Check each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "156+234=390 true.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "345+234=579 not 578 -> false.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "456+345=801 true.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "True, false, true",
          "commonErrors": "Wrong evaluations."
},
        },
        {
          id: "m2-u4-true-false-equations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Correct."
                    },
                    {
                              "id": "b",
                              "text": "Math sentence."
                    },
                    {
                              "id": "c",
                              "text": "Incorrect."
                    },
                    {
                              "id": "d",
                              "text": "Same value."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equation\" means Math sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equation\" means Math sentence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equation** = Math sentence.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u4-true-false-equations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"True\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Incorrect."
                    },
                    {
                              "id": "b",
                              "text": "Same value."
                    },
                    {
                              "id": "c",
                              "text": "Both sides same."
                    },
                    {
                              "id": "d",
                              "text": "Correct."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"True\" means Correct."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"True\" means Correct.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**True** = Correct.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m2-u4-true-false-equations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"False\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same value."
                    },
                    {
                              "id": "b",
                              "text": "Incorrect."
                    },
                    {
                              "id": "c",
                              "text": "Both sides same."
                    },
                    {
                              "id": "d",
                              "text": "Verify."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"False\" means Incorrect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"False\" means Incorrect.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**False** = Incorrect.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
