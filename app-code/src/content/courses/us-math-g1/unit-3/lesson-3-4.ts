import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "m1-u3-lesson-3-4",
  code: "3-4",
  title: "Subtraction Review",
  goal: "I CAN subtract within 20 using all strategies.",
  standards: ["1.OA.A.1", "1.OA.B.3", "1.OA.C.6"],
  vocabulary: [
    { term: "Subtract", definition: "Take away." },
    { term: "Difference", definition: "Answer." },
    { term: "Count back", definition: "Count down." },
    { term: "Fact family", definition: "Related facts." },
    { term: "Word problem", definition: "Story problem." },
    { term: "Missing subtrahend", definition: "Unknown taken away." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m1-u3-sub-review",
      title: "Subtraction review",
      skill: "Combine all subtraction strategies within 20.",
      lesson: {
        sections: [
          {
            heading: "All subtraction strategies",
            body: "We can **subtract** by **counting back**, using **fact families**, and solving **word problems**. All work within 20.",
          },
          {
            heading: "Choose a strategy",
            body: "Count back for direct subtraction, fact families for missing numbers, word problems for stories.",
          },
        ],
        keyFormulas: [
          { name: "Subtraction", statement: "Count back + fact families + word problems = subtracting within 20." },
        ],
        workedExample: {
          problem: "Solve $15 - 7$ using count back, then check with fact family.",
          solution: "Count back: 14,13,12,11,10,9,8 — **8**. Check: $8 + 7 = 15$ ✓.",
        },
      },
      questions: [
        {
          id: "m1-u3-sub-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Subtraction strategies include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "count back, fact families, word problems"
                    },
                    {
                              "id": "c",
                              "text": "only addition"
                    },
                    {
                              "id": "d",
                              "text": "only shapes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All subtraction strategies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All subtraction strategies.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all strategies**",
          "commonErrors": [
                    "Lists one strategy."
          ]
},
        },
        {
          id: "m1-u3-sub-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $14 - 6$ two ways: count back and check with a fact family.",
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
                                                  "method",
                                                  "Two methods",
                                                  "Count back: 8; Check: 8+6=14."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "method",
                                                  "Two methods",
                                                  "Count back: 8; Check: 8+6=14."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Counts back.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Checks with fact family.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**8**"
          ]
},
        },
        {
          id: "m1-u3-sub-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $? - 5 = 9$, what is the missing minuend?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 14
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
          "finalAnswer": "**(14)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u3-sub-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Subtract\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Take away."
                    },
                    {
                              "id": "c",
                              "text": "Count down."
                    },
                    {
                              "id": "d",
                              "text": "Related facts."
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
          id: "m1-u3-sub-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Difference\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Count down."
                    },
                    {
                              "id": "b",
                              "text": "Related facts."
                    },
                    {
                              "id": "c",
                              "text": "Story problem."
                    },
                    {
                              "id": "d",
                              "text": "Answer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Difference\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Difference\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Difference** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-sub-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count back\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Related facts."
                    },
                    {
                              "id": "b",
                              "text": "Count down."
                    },
                    {
                              "id": "c",
                              "text": "Story problem."
                    },
                    {
                              "id": "d",
                              "text": "Unknown taken away."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count back\" means Count down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count back\" means Count down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count back** = Count down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-sub-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact family\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story problem."
                    },
                    {
                              "id": "b",
                              "text": "Unknown taken away."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Related facts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fact family\" means Related facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact family\" means Related facts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fact family** = Related facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u3-sub-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Word problem\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unknown taken away."
                    },
                    {
                              "id": "b",
                              "text": "Story problem."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
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
      ],
    },
  ],
};
