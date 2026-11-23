import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "mpk-u7-lesson-7-4",
  code: "7-4",
  title: "Count On Strategy",
  goal: "I CAN count on from a bigger number to add.",
  standards: ["ELOF-PK.MATH.ADD.3"],
  vocabulary: [
    { term: "Count on", definition: "Start from the bigger number and count up." },
    { term: "Start at", definition: "The number where counting begins." },
    { term: "Add on", definition: "Add by counting forward." },
    { term: "Faster way", definition: "A strategy that saves time." },
    { term: "Anchor", definition: "A number you start counting from." },
  ],
  concepts: [
    {
      id: "mpk-u7-count-on-strategy",
      title: "Counting on to add",
      skill: "Use count-on strategy for addition within 20.",
      lesson: {
        sections: [
          {
            heading: "Start big, count small",
            body: "For 6 + 2, start at 6 and count on 2: 7, 8. Answer is 8. This is faster than counting all objects from 1.",
          },
          {
            heading: "When it helps",
            body: "Count on works best when one number is bigger. For 2 + 6, start at 6 (the bigger) and count on 2.",
          },
        ],
        keyFormulas: [
          { name: "Count on", statement: "Start at bigger number; count up by smaller number." },
        ],
        workedExample: {
          problem: "4 + 3 = ? Use count on.",
          solution: "Start at 4, count on 3: 5, 6, 7. **4 + 3 = 7.**",
        },
      },
      questions: [
        {
          id: "mpk-u7-count-on-strategy-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Use count on: 5 + 2 = ?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "6"
                    },
                    {
                              "id": "b",
                              "text": "7"
                    },
                    {
                              "id": "c",
                              "text": "8"
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
                              "statement": "Start at 5, count on 2: 6, 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start at 5, count on 2: 6, 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7**",
          "commonErrors": [
                    "Starts at 2 instead of 5."
          ]
},
        },
        {
          id: "mpk-u7-count-on-strategy-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For 3 + 7, which number should you start counting on from?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "7"
                    },
                    {
                              "id": "c",
                              "text": "10"
                    },
                    {
                              "id": "d",
                              "text": "1"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Start from the bigger number: 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start from the bigger number: 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**7**",
          "commonErrors": [
                    "Starts from the smaller number."
          ]
},
        },
        {
          id: "mpk-u7-count-on-strategy-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "7 + 2 = ? (count on from 7)",
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
                              "statement": "7, 8, 9 — count on 2 lands on 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7, 8, 9 — count on 2 lands on 9.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$9$",
          "commonErrors": [
                    "Counts 7, 8 and stops."
          ]
},
        },
        {
          id: "mpk-u7-count-on-strategy-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 6 + 3?",
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
                              "statement": "Count on from 6: 7, ..., 9. 6 + 3 = 9."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count on from 6: 7, ..., 9. 6 + 3 = 9.",
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
          id: "mpk-u7-count-on-strategy-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve 8 + 2 using count on. Explain why you started at 8, not 2.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count on from bigger",
                              "statement": "8 is bigger, so start there."
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        {
                                                  "reasoning": "8 + 2 = 10 (count on: 9, 10).",
                                                  "marks": 1,
                                                  "markCode": "M"
                                        },
                                        {
                                                  "reasoning": "Started at 8 because it is the bigger number.",
                                                  "marks": 1,
                                                  "markCode": "A"
                                        }
                              ],
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**8 + 2 = 10**",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": [
                    "Starts at 2 and counts to 8.",
                    "Counts both numbers fully."
          ]
},
        },
        {
          id: "mpk-u7-count-on-strategy-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count on\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The number where counting begins."
                    },
                    {
                              "id": "b",
                              "text": "Start from the bigger number and count up."
                    },
                    {
                              "id": "c",
                              "text": "Add by counting forward."
                    },
                    {
                              "id": "d",
                              "text": "A strategy that saves time."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count on\" means Start from the bigger number and count up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count on\" means Start from the bigger number and count up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count on** = Start from the bigger number and count up.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u7-count-on-strategy-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Start at\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Add by counting forward."
                    },
                    {
                              "id": "b",
                              "text": "A strategy that saves time."
                    },
                    {
                              "id": "c",
                              "text": "A number you start counting from."
                    },
                    {
                              "id": "d",
                              "text": "The number where counting begins."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Start at\" means The number where counting begins."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Start at\" means The number where counting begins.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Start at** = The number where counting begins.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "mpk-u7-count-on-strategy-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add on\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A strategy that saves time."
                    },
                    {
                              "id": "b",
                              "text": "Add by counting forward."
                    },
                    {
                              "id": "c",
                              "text": "A number you start counting from."
                    },
                    {
                              "id": "d",
                              "text": "Start from the bigger number and count up."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Add on\" means Add by counting forward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Add on\" means Add by counting forward.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Add on** = Add by counting forward.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
