import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "mpk-u8-lesson-8-2",
  code: "8-2",
  title: "Review: Adding and Subtracting",
  goal: "I CAN add and subtract within 10 fluently.",
  standards: ["ELOF-PK.MATH.REVIEW.2"],
  vocabulary: [
    { term: "Fluent", definition: "Know answers quickly." },
    { term: "Within 10", definition: "Numbers up to 10." },
    { term: "Fact family", definition: "Related add/subtract facts." },
    { term: "Strategy", definition: "A smart way to solve." },
    { term: "Check", definition: "Verify your answer." },
  ],
  concepts: [
    {
      id: "mpk-u8-review-add-sub",
      title: "Add/subtract review",
      skill: "Solve addition and subtraction within 10.",
      lesson: {
        sections: [
          {
            heading: "Facts within 10",
            body: "Know your add/sub facts: 3 + 2 = 5, 5 - 2 = 3. The **fact family** 2, 3, 5 gives all related facts.",
          },
          {
            heading: "Strategies",
            body: "Use **count on** for adding (start at bigger number). Use **count back** for subtracting. Check by acting it out with objects.",
          },
        ],
        keyFormulas: [
          { name: "Fact family", statement: "If 2 + 3 = 5, then 3 + 2 = 5, 5 - 2 = 3, 5 - 3 = 2." },
        ],
        workedExample: {
          problem: "Solve: 7 - 4 = ? and 4 + 3 = ?",
          solution: "7 - 4 = **3**; 4 + 3 = **7**. (Different fact families.)",
        },
      },
      questions: [
        {
          id: "mpk-u8-review-add-sub-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 + 5?",
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
                              "statement": "Count on from 4: 5, ..., 9. 4 + 5 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 4: 5, ..., 9. 4 + 5 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Counts both numbers again instead of counting on."
          ]
},
        },
        {
          id: "mpk-u8-review-add-sub-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 4 + 5?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "9"
                    },
                    {
                              "id": "b",
                              "text": "10"
                    },
                    {
                              "id": "c",
                              "text": "7"
                    },
                    {
                              "id": "d",
                              "text": "12"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Make a ten or count on: 4 + 5 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Make a ten or count on: 4 + 5 = 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**9**",
          "commonErrors": [
                    "Adds the digits instead of the quantities."
          ]
},
        },
        {
          id: "mpk-u8-review-add-sub-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 9 - 4?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count back from 9: 8, ..., 5. 9 - 4 = 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 9: 8, ..., 5. 9 - 4 = 5.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$5$",
          "commonErrors": [
                    "Adds instead of subtracting."
          ]
},
        },
        {
          id: "mpk-u8-review-add-sub-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is in the same fact family as 3 + 4 = 7?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "7 - 3 = 4"
                    },
                    {
                              "id": "b",
                              "text": "7 + 3 = 10"
                    },
                    {
                              "id": "c",
                              "text": "4 - 3 = 1"
                    },
                    {
                              "id": "d",
                              "text": "3 + 3 = 6"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fact family: 3, 4, 7 -> 7 - 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fact family: 3, 4, 7 -> 7 - 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7 - 3 = 4**",
          "commonErrors": [
                    "Picks unrelated facts."
          ]
},
        },
        {
          id: "mpk-u8-review-add-sub-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "8 - 5 = ?",
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
                              "statement": "Count back from 8: 7, 6, 5 — wait, 8 - 5 = 3."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count back from 8: 7, 6, 5 — wait, 8 - 5 = 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Counts back only 4 steps."
          ]
},
        },
        {
          id: "mpk-u8-review-add-sub-q6",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve 6 + 4 and 10 - 4. Explain how they are related.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Fact family",
                              "statement": "6 + 4 = 10 and 10 - 4 = 6 are related."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "6 + 4 = 10.",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "10 - 4 = 6 — same fact family.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**6 + 4 = 10; 10 - 4 = 6**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Gets one answer wrong.",
                    "Cannot explain the relation."
          ]
},
        },
        {
          id: "mpk-u8-review-add-sub-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fluent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Numbers up to 10."
                    },
                    {
                              "id": "b",
                              "text": "Know answers quickly."
                    },
                    {
                              "id": "c",
                              "text": "Related add/subtract facts."
                    },
                    {
                              "id": "d",
                              "text": "A smart way to solve."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fluent\" means Know answers quickly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fluent\" means Know answers quickly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fluent** = Know answers quickly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u8-review-add-sub-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Within 10\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Related add/subtract facts."
                    },
                    {
                              "id": "b",
                              "text": "A smart way to solve."
                    },
                    {
                              "id": "c",
                              "text": "Verify your answer."
                    },
                    {
                              "id": "d",
                              "text": "Numbers up to 10."
                    }
          ],
          "correctChoiceId": "d"
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
      ],
    },
  ],
};
