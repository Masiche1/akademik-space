import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "m3-u4-lesson-4-5",
  code: "4-5",
  title: "Word Problems Review",
  goal: "I CAN solve all multiplication and division word problems.",
  standards: ["3.OA.A.3", "3.OA.B.5", "3.OA.B.6"],
  vocabulary: [
    { term: "Equal groups", definition: "Same number each." },
    { term: "Array", definition: "Rows and columns." },
    { term: "Share", definition: "Split equally." },
    { term: "Total", definition: "All together." },
    { term: "Two-step", definition: "Two operations." },
    { term: "Equation", definition: "Number sentence." },
    { term: "Solve", definition: "Find answer." },
    { term: "Check", definition: "Verify." },
  ],
  concepts: [
    {
      id: "m3-u4-word-problems-review",
      title: "Word problems review",
      skill: "Combine all word problem skills.",
      lesson: {
        sections: [
          {
            heading: "All word problem skills",
            body: "Solve **multiplication** (equal groups, arrays), **division** (sharing, grouping), and **two-step** problems. Choose the right operation.",
          },
          {
            heading: "Put it together",
            body: "Read carefully, identify the operation, solve, and check.",
          },
        ],
        keyFormulas: [
          { name: "Word problems", statement: "Read -> identify operation -> solve -> check." },
        ],
        workedExample: {
          problem: "Solve a mixed set of multiplication and division word problems.",
          solution: "All word problem skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m3-u4-word-problems-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Word problem skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only multiplication"
                    },
                    {
                              "id": "b",
                              "text": "multiply, divide, two-step, strategies"
                    },
                    {
                              "id": "c",
                              "text": "only division"
                    },
                    {
                              "id": "d",
                              "text": "only two-step"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All word problem skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All word problem skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m3-u4-word-problems-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve three word problems: one multiplication, one division, one two-step. Show your work.",
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
                                                  "All word problems",
                                                  "All operations."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All word problems",
                                                  "All operations."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Solves all three types.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., '6x8=48; 48/6=8; 4x6+5=29'**"
          ]
},
        },
        {
          id: "m3-u4-word-problems-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Each' usually signals...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "division"
                    },
                    {
                              "id": "b",
                              "text": "multiplication"
                    },
                    {
                              "id": "c",
                              "text": "addition"
                    },
                    {
                              "id": "d",
                              "text": "subtraction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "'Each' -> multiply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Each' -> multiply.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "multiply",
          "commonErrors": [
                    "Wrong signal."
          ]
},
        },
        {
          id: "m3-u4-word-problems-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Equal groups\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rows and columns."
                    },
                    {
                              "id": "b",
                              "text": "Same number each."
                    },
                    {
                              "id": "c",
                              "text": "Split equally."
                    },
                    {
                              "id": "d",
                              "text": "All together."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Equal groups\" means Same number each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Equal groups\" means Same number each.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Equal groups** = Same number each.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u4-word-problems-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Array\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Split equally."
                    },
                    {
                              "id": "b",
                              "text": "All together."
                    },
                    {
                              "id": "c",
                              "text": "Two operations."
                    },
                    {
                              "id": "d",
                              "text": "Rows and columns."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Array\" means Rows and columns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Array\" means Rows and columns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Array** = Rows and columns.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u4-word-problems-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Share\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "All together."
                    },
                    {
                              "id": "b",
                              "text": "Split equally."
                    },
                    {
                              "id": "c",
                              "text": "Two operations."
                    },
                    {
                              "id": "d",
                              "text": "Number sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Share\" means Split equally."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Share\" means Split equally.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Share** = Split equally.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u4-word-problems-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Total\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Two operations."
                    },
                    {
                              "id": "b",
                              "text": "Number sentence."
                    },
                    {
                              "id": "c",
                              "text": "Find answer."
                    },
                    {
                              "id": "d",
                              "text": "All together."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Total\" means All together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Total\" means All together.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Total** = All together.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m3-u4-word-problems-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Two-step\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Number sentence."
                    },
                    {
                              "id": "b",
                              "text": "Two operations."
                    },
                    {
                              "id": "c",
                              "text": "Find answer."
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
                              "statement": "\"Two-step\" means Two operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Two-step\" means Two operations.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Two-step** = Two operations.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
