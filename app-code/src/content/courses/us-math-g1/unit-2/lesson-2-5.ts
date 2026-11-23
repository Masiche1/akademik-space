import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "m1-u2-lesson-2-5",
  code: "2-5",
  title: "Addition Review",
  goal: "I CAN add within 20 using all strategies.",
  standards: ["1.OA.A.1", "1.OA.C.5", "1.OA.C.6", "1.OA.B.3"],
  vocabulary: [
    { term: "Add", definition: "Put together." },
    { term: "Sum", definition: "Answer." },
    { term: "Count on", definition: "Start and count up." },
    { term: "Make ten", definition: "Break to make 10." },
    { term: "Fact family", definition: "Related facts." },
    { term: "Word problem", definition: "Story problem." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Missing addend", definition: "Unknown number." },
  ],
  concepts: [
    {
      id: "m1-u2-add-review",
      title: "Addition review",
      skill: "Combine all addition strategies within 20.",
      lesson: {
        sections: [
          {
            heading: "All addition strategies",
            body: "We can **add** by **counting on**, **making ten**, using **fact families**, and solving **word problems**. All work within 20.",
          },
          {
            heading: "Choose a strategy",
            body: "Pick the strategy that works best — count on for small numbers, make ten for numbers near 10, fact families for missing addends.",
          },
        ],
        keyFormulas: [
          { name: "Addition", statement: "Count on + make ten + fact families + word problems = adding within 20." },
        ],
        workedExample: {
          problem: "Solve $9 + 6$ using make ten, then check with count on.",
          solution: "Make ten: $9 + 1 = 10, +5 = 15$. Count on: 9,10,11,12,13,14,15 — **15**.",
        },
      },
      questions: [
        {
          id: "m1-u2-add-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Addition strategies include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only counting"
                    },
                    {
                              "id": "b",
                              "text": "count on, make ten, fact families, word problems"
                    },
                    {
                              "id": "c",
                              "text": "only subtraction"
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
                              "statement": "All addition strategies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All addition strategies.",
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
          id: "m1-u2-add-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $8 + 7$ two ways: make ten and count on. Show both methods.",
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
                                                  "Make ten: 8+2=10,+5=15; Count on: 15."
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
                                                  "Make ten: 8+2=10,+5=15; Count on: 15."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does make ten.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Does count on.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "commonErrors": [
                    "**15**"
          ]
},
        },
        {
          id: "m1-u2-add-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $5 + ? = 14$, what is missing?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Missing",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "5 + 9 = 14."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 + 9 = 14.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(9)**",
          "commonErrors": [
                    "Adds wrong."
          ]
},
        },
        {
          id: "m1-u2-add-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Add\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Answer."
                    },
                    {
                              "id": "b",
                              "text": "Put together."
                    },
                    {
                              "id": "c",
                              "text": "Start and count up."
                    },
                    {
                              "id": "d",
                              "text": "Break to make 10."
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
          id: "m1-u2-add-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sum\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Start and count up."
                    },
                    {
                              "id": "b",
                              "text": "Break to make 10."
                    },
                    {
                              "id": "c",
                              "text": "Related facts."
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
                              "statement": "\"Sum\" means Answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sum\" means Answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sum** = Answer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-add-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Count on\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Break to make 10."
                    },
                    {
                              "id": "b",
                              "text": "Start and count up."
                    },
                    {
                              "id": "c",
                              "text": "Related facts."
                    },
                    {
                              "id": "d",
                              "text": "Story problem."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Count on\" means Start and count up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Count on\" means Start and count up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Count on** = Start and count up.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-add-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Make ten\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Related facts."
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
                              "text": "Break to make 10."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Make ten\" means Break to make 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Make ten\" means Break to make 10.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Make ten** = Break to make 10.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m1-u2-add-review-q8",
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
                              "text": "Related facts."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Unknown number."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
