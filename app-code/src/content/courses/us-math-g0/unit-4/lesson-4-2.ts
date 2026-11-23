import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "m0-u4-lesson-4-2",
  code: "4-2",
  title: "Subtraction Facts to 10",
  goal: "I CAN quickly recall subtraction facts within 10.",
  standards: ["K.OA.A.1", "K.OA.A.5"],
  vocabulary: [
    { term: "Fact", definition: "A number sentence you should know quickly." },
    { term: "Difference", definition: "Answer to subtraction." },
    { term: "Fluency", definition: "Fast and accurate." },
    { term: "Take away", definition: "Remove objects." },
    { term: "Related fact", definition: "Addition and subtraction that use the same numbers." },
  ],
  concepts: [
    {
      id: "m0-u4-sub-facts",
      title: "Subtraction facts",
      skill: "Recall subtraction facts within 10 and connect to addition.",
      lesson: {
        sections: [
          {
            heading: "Know your facts",
            body: "A **subtraction fact** is a number sentence you should know: 7 - 3 = 4, 10 - 5 = 5. **Fluency** means fast, correct answers.",
          },
          {
            heading: "Related facts",
            body: "Subtraction and addition are **related**: if 3 + 4 = 7, then 7 - 3 = 4 and 7 - 4 = 3. Knowing one helps you know the others.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction facts", statement: "Memorize differences within 10." },
          { name: "Related facts", statement: "a + b = c means c - a = b and c - b = a." },
        ],
        workedExample: {
          problem: "If 2 + 5 = 7, what is 7 - 5?",
          solution: "7 - 5 = **2** (related fact).",
        },
      },
      questions: [
        {
          id: "m0-u4-sub-facts-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 8 - 5?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 8: 7, ..., 3. 8 - 5 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 8: 7, ..., 3. 8 - 5 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 8 - 5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "1"
                    },
                    {
                              "id": "d",
                              "text": "6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 5 from 8: 8 - 5 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 5 from 8: 8 - 5 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 - 7?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 10: 9, ..., 3. 10 - 7 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 10: 9, ..., 3. 10 - 7 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 10 - 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "1"
                    },
                    {
                              "id": "d",
                              "text": "6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Take away 7 from 10: 10 - 7 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Take away 7 from 10: 10 - 7 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**3**",
          "commonErrors": [
                    "Reverses the subtraction."
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 9 - 4?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "5"
                    },
                    {
                              "id": "c",
                              "text": "6"
                    },
                    {
                              "id": "d",
                              "text": "13"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "9 - 4 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "9 - 4 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**5**",
          "commonErrors": [
                    "Adds instead of subtracts."
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "If 4 + 3 = 7, then 7 - 3 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "4"
                    },
                    {
                              "id": "c",
                              "text": "7"
                    },
                    {
                              "id": "d",
                              "text": "10"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 - 3 = 4 (related fact)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 - 3 = 4 (related fact).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**4**",
          "commonErrors": [
                    "Picks wrong related number."
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three subtraction facts within 10 and solve each.",
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
                                                  "skill",
                                                  "Subtraction facts",
                                                  "Recall differences."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Subtraction facts",
                                                  "Recall differences."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves 3 facts correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 8-3=5, 9-6=3, 10-4=6**"
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer to subtraction."
                    },
                    {
                              "id": "b",
                              "text": "A number sentence you should know quickly."
                    },
                    {
                              "id": "c",
                              "text": "Fast and accurate."
                    },
                    {
                              "id": "d",
                              "text": "Remove objects."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact\" means A number sentence you should know quickly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means A number sentence you should know quickly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact** = A number sentence you should know quickly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Difference\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fast and accurate."
                    },
                    {
                              "id": "b",
                              "text": "Remove objects."
                    },
                    {
                              "id": "c",
                              "text": "Addition and subtraction that use the same numbers."
                    },
                    {
                              "id": "d",
                              "text": "Answer to subtraction."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Difference\" means Answer to subtraction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Difference\" means Answer to subtraction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Difference** = Answer to subtraction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u4-sub-facts-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fluency\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Remove objects."
                    },
                    {
                              "id": "b",
                              "text": "Fast and accurate."
                    },
                    {
                              "id": "c",
                              "text": "Addition and subtraction that use the same numbers."
                    },
                    {
                              "id": "d",
                              "text": "A number sentence you should know quickly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fluency\" means Fast and accurate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fluency\" means Fast and accurate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fluency** = Fast and accurate.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
