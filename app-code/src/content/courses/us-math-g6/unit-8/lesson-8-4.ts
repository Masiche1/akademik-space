import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "m6-u8-lesson-8-4",
  code: "8-4",
  title: "Final Comprehensive Review",
  goal: "I CAN use all Grade 6 math skills together.",
  standards: ["6.RP.A.1", "6.NS.C.5", "6.EE.B.7", "6.G.A.1", "6.SP.A.1"],
  vocabulary: [
    { term: "Ratio", definition: "Comparison." },
    { term: "Integer", definition: "Whole + negative." },
    { term: "Expression", definition: "Math phrase." },
    { term: "Area", definition: "2D space." },
    { term: "Volume", definition: "3D inside." },
    { term: "Data", definition: "Information." },
    { term: "Probability", definition: "Likelihood." },
    { term: "Review", definition: "All skills." },
  ],
  concepts: [
    {
      id: "m6-u8-final-comprehensive",
      title: "Final comprehensive review",
      skill: "Combine all Grade 6 math skills.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 6 math",
            body: "Grade 6 covers **ratios/proportions/percents**, **integers/rational numbers/fractions/decimals**, **expressions/equations/inequalities**, **geometry** (area, volume, coordinates), and **statistics/probability**.",
          },
          {
            heading: "You are a Grade 6 mathematician!",
            body: "You can work with all these skills and are ready for Grade 7!",
          },
        ],
        keyFormulas: [
          { name: "Grade 6 math", statement: "All skills = Grade 6 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: solve a proportion, compute with integers, divide fractions, solve an equation, find an area, and calculate a probability.",
          solution: "All skills demonstrated = Grade 6 math mastery.",
        },
      },
      questions: [
        {
          id: "m6-u8-final-comprehensive-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 6 math includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only ratios"
                    },
                    {
                              "id": "b",
                              "text": "ratios, integers, fractions/decimals, algebra, geometry, statistics"
                    },
                    {
                              "id": "c",
                              "text": "only algebra"
                    },
                    {
                              "id": "d",
                              "text": "only geometry"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All Grade 6 math skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 6 math skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "ratios, integers, fractions/decimals, algebra, geometry, statistics",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m6-u8-final-comprehensive-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: solve a proportion, compute with integers, divide fractions, solve an equation, find an area, and calculate a probability.",
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
                                                  "All math",
                                                  "All skills demonstrated."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All math",
                                                  "All skills demonstrated."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates all skills.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '5/6=x/18->x=15; -7+3=-4; 3/4/2/5=15/8; 3x+5=20->x=5; Triangle A=18; P=1/4.'**"
          ]
},
        },
        {
          id: "m6-u8-final-comprehensive-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 7 math because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do calculus"
                    },
                    {
                              "id": "b",
                              "text": "work with all Grade 6 math skills"
                    },
                    {
                              "id": "c",
                              "text": "read novels"
                    },
                    {
                              "id": "d",
                              "text": "do physics"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Grade 6 skills prepare for Grade 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 6 skills prepare for Grade 7.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "G6 skills prepare for G7",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "m6-u8-final-comprehensive-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ratio\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whole + negative."
                    },
                    {
                              "id": "b",
                              "text": "Comparison."
                    },
                    {
                              "id": "c",
                              "text": "Math phrase."
                    },
                    {
                              "id": "d",
                              "text": "2D space."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ratio\" means Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ratio\" means Comparison.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ratio** = Comparison.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u8-final-comprehensive-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math phrase."
                    },
                    {
                              "id": "b",
                              "text": "2D space."
                    },
                    {
                              "id": "c",
                              "text": "3D inside."
                    },
                    {
                              "id": "d",
                              "text": "Whole + negative."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Integer\" means Whole + negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integer\" means Whole + negative.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Integer** = Whole + negative.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u8-final-comprehensive-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Expression\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2D space."
                    },
                    {
                              "id": "b",
                              "text": "Math phrase."
                    },
                    {
                              "id": "c",
                              "text": "3D inside."
                    },
                    {
                              "id": "d",
                              "text": "Information."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Expression\" means Math phrase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Expression\" means Math phrase.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Expression** = Math phrase.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u8-final-comprehensive-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Area\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3D inside."
                    },
                    {
                              "id": "b",
                              "text": "Information."
                    },
                    {
                              "id": "c",
                              "text": "Likelihood."
                    },
                    {
                              "id": "d",
                              "text": "2D space."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Area\" means 2D space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Area\" means 2D space.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Area** = 2D space.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u8-final-comprehensive-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Volume\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Information."
                    },
                    {
                              "id": "b",
                              "text": "3D inside."
                    },
                    {
                              "id": "c",
                              "text": "Likelihood."
                    },
                    {
                              "id": "d",
                              "text": "All skills."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Volume\" means 3D inside."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Volume\" means 3D inside.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Volume** = 3D inside.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
