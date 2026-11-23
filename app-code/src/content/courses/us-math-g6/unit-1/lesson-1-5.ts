import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "m6-u1-lesson-1-5",
  code: "1-5",
  title: "Percent Problems",
  goal: "I CAN solve percent problems.",
  standards: ["6.RP.A.3"],
  vocabulary: [
    { term: "Percent", definition: "Part per hundred." },
    { term: "Of", definition: "Multiply." },
    { term: "Find percent", definition: "What % is it." },
    { term: "Find part", definition: "How much." },
    { term: "Find whole", definition: "Total." },
    { term: "Increase", definition: "Add percent." },
    { term: "Decrease", definition: "Subtract percent." },
    { term: "Discount", definition: "Price reduction." },
  ],
  concepts: [
    {
      id: "m6-u1-percent-problems",
      title: "Percent problems",
      skill: "Solve problems involving percents: find part, whole, or percent.",
      lesson: {
        sections: [
          {
            heading: "Three types",
            body: "Find **part** (what is 20% of 50?), find **percent** (what % is 10 of 40?), find **whole** (10 is 25% of what?).",
          },
          {
            heading: "Increase/decrease",
            body: "**Increase**: add percent of original. **Decrease/discount**: subtract percent.",
          },
        ],
        keyFormulas: [
          { name: "Percent", statement: "part = percent x whole; whole = part / percent." },
        ],
        workedExample: {
          problem: "What is 30% of 80?",
          solution: "0.30 x 80 = **24**.",
        },
      },
      questions: [
        {
          id: "m6-u1-percent-problems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 25% of 80?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "20"
                    },
                    {
                              "id": "b",
                              "text": "25"
                    },
                    {
                              "id": "c",
                              "text": "30"
                    },
                    {
                              "id": "d",
                              "text": "40"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "0.25 x 80 = 20."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "0.25 x 80 = 20.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20",
          "commonErrors": [
                    "Wrong calculation."
          ]
},
        },
        {
          id: "m6-u1-percent-problems-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "15 is what percent of 60?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "20%"
                    },
                    {
                              "id": "b",
                              "text": "25%"
                    },
                    {
                              "id": "c",
                              "text": "30%"
                    },
                    {
                              "id": "d",
                              "text": "15%"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "15/60 = 0.25 = 25%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "15/60 = 0.25 = 25%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "25%",
          "commonErrors": [
                    "Wrong percent."
          ]
},
        },
        {
          id: "m6-u1-percent-problems-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: What is 40% of 75? 18 is what percent of 90? 12 is 30% of what number?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Percent",
                              "statement": "30, 20%, 40."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**40% of 75 = 30; 18/90 = 20%; 12/0.30 = 40.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m6-u1-percent-problems-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A $50 item is 20% off. Sale price is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$40"
                    },
                    {
                              "id": "b",
                              "text": "$30"
                    },
                    {
                              "id": "c",
                              "text": "$45"
                    },
                    {
                              "id": "d",
                              "text": "$35"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "20% of 50 = 10; 50-10 = $40."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20% of 50 = 10; 50-10 = $40.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$40",
          "commonErrors": [
                    "Wrong calculation."
          ]
},
        },
        {
          id: "m6-u1-percent-problems-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve a percent problem and explain whether you found the part, percent, or whole.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Percent",
                              "statement": "Solved + identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies type.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'What is 15% of 200? = 30 (found part).'**",
          "commonErrors": [
                    "Cannot solve.",
                    "No identification."
          ]
},
        },
        {
          id: "m6-u1-percent-problems-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Percent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Multiply."
                    },
                    {
                              "id": "b",
                              "text": "Part per hundred."
                    },
                    {
                              "id": "c",
                              "text": "What % is it."
                    },
                    {
                              "id": "d",
                              "text": "How much."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Percent\" means Part per hundred."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Percent\" means Part per hundred.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Percent** = Part per hundred.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-percent-problems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Of\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What % is it."
                    },
                    {
                              "id": "b",
                              "text": "How much."
                    },
                    {
                              "id": "c",
                              "text": "Total."
                    },
                    {
                              "id": "d",
                              "text": "Multiply."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Of\" means Multiply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Of\" means Multiply.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Of** = Multiply.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-percent-problems-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Find percent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How much."
                    },
                    {
                              "id": "b",
                              "text": "What % is it."
                    },
                    {
                              "id": "c",
                              "text": "Total."
                    },
                    {
                              "id": "d",
                              "text": "Add percent."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Find percent\" means What % is it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Find percent\" means What % is it.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Find percent** = What % is it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
