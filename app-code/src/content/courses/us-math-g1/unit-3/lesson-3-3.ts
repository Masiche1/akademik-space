import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m1-u3-lesson-3-3",
  code: "3-3",
  title: "Subtraction Word Problems",
  goal: "I CAN solve subtraction word problems within 20.",
  standards: ["1.OA.A.1", "1.OA.C.6"],
  vocabulary: [
    { term: "Word problem", definition: "Story problem." },
    { term: "Take away", definition: "Remove some." },
    { term: "Difference", definition: "What is left." },
    { term: "Remaining", definition: "Still there." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Situation", definition: "Story setup." },
    { term: "Question", definition: "What is asked." },
    { term: "Answer", definition: "Result." },
  ],
  concepts: [
    {
      id: "m1-u3-sub-word-problems",
      title: "Subtraction word problems",
      skill: "Solve subtraction word problems within 20.",
      lesson: {
        sections: [
          {
            heading: "Read for 'take away'",
            body: "Subtraction word problems tell a story where something is **taken away** or **removed**. 'Sam had 12 cookies and ate 5. How many left?' becomes $12 - 5 = ?$",
          },
          {
            heading: "Find what remains",
            body: "The question asks how many **remain** or are **left** — that's the **difference** after taking away.",
          },
        ],
        keyFormulas: [
          { name: "Sub word problem", statement: "Read story -> identify 'take away' -> write equation -> solve." },
        ],
        workedExample: {
          problem: "There were 15 birds. 6 flew away. How many birds are left?",
          solution: "$15 - 6 = 9$ — **9 birds are left**.",
        },
      },
      questions: [
        {
          id: "m1-u3-sub-word-problems-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "There are 14 apples. You eat 5. How many left?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Left",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$14 - 5 = 9$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$14 - 5 = 9$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(9)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u3-sub-word-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A box has 18 pencils. 9 are taken out. How many left?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Left",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "$18 - 9 = 9$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$18 - 9 = 9$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(9)**",
          "commonErrors": [
                    "Adds instead."
          ]
},
        },
        {
          id: "m1-u3-sub-word-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "'How many left' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "add"
                    },
                    {
                              "id": "b",
                              "text": "subtract to find what remains"
                    },
                    {
                              "id": "c",
                              "text": "count by 10s"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
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
                    "Confuses with add."
          ]
},
        },
        {
          id: "m1-u3-sub-word-problems-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write and solve: 'There were 16 balloons. 7 popped. How many are left?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Word problem",
                              "statement": "16 - 7 = 9."
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
          "finalAnswer": "**$16 - 7 = 9$**",
          "commonErrors": [
                    "Wrong equation.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "m1-u3-sub-word-problems-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Remove some."
                    },
                    {
                              "id": "b",
                              "text": "Story problem."
                    },
                    {
                              "id": "c",
                              "text": "What is left."
                    },
                    {
                              "id": "d",
                              "text": "Still there."
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
          id: "m1-u3-sub-word-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Take away\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What is left."
                    },
                    {
                              "id": "b",
                              "text": "Still there."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Remove some."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Take away\" means Remove some."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Take away\" means Remove some.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Take away** = Remove some.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-sub-word-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Difference\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Still there."
                    },
                    {
                              "id": "b",
                              "text": "What is left."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Story setup."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Difference\" means What is left."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Difference\" means What is left.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Difference** = What is left.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-sub-word-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Remaining\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math sentence."
                    },
                    {
                              "id": "b",
                              "text": "Story setup."
                    },
                    {
                              "id": "c",
                              "text": "What is asked."
                    },
                    {
                              "id": "d",
                              "text": "Still there."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Remaining\" means Still there."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Remaining\" means Still there.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Remaining** = Still there.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
