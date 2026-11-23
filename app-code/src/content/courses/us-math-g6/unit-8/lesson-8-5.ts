import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "m6-u8-lesson-8-5",
  code: "8-5",
  title: "Final Assessment",
  goal: "I CAN demonstrate Grade 6 math mastery.",
  standards: ["6.RP.A.1", "6.NS.C.5", "6.EE.B.7", "6.G.A.1", "6.SP.A.1"],
  vocabulary: [
    { term: "Ratio", definition: "Comparison." },
    { term: "Integer", definition: "Whole + negative." },
    { term: "Expression", definition: "Math phrase." },
    { term: "Area", definition: "2D space." },
    { term: "Volume", definition: "3D inside." },
    { term: "Data", definition: "Information." },
    { term: "Probability", definition: "Likelihood." },
    { term: "Mastery", definition: "All skills." },
  ],
  concepts: [
    {
      id: "m6-u8-final-assessment",
      title: "Final assessment",
      skill: "Demonstrate mastery of all Grade 6 math skills.",
      lesson: {
        sections: [
          {
            heading: "Mastery check",
            body: "This assessment covers **all Grade 6 math skills**: ratios, integers, fractions/decimals, algebra, geometry, statistics, and probability.",
          },
          {
            heading: "You did it!",
            body: "If you can solve these problems, you have mastered Grade 6 math and are ready for Grade 7!",
          },
        ],
        keyFormulas: [
          { name: "Mastery", statement: "All skills demonstrated = Grade 6 mastery." },
        ],
        workedExample: {
          problem: "Complete assessment: ratios, integers, fractions, algebra, geometry, statistics.",
          solution: "All problems solved = Grade 6 math mastery.",
        },
      },
      questions: [
        {
          id: "m6-u8-final-assessment-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 6 math assessment covers...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only ratios"
                    },
                    {
                              "id": "b",
                              "text": "all Grade 6 math skills"
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
          "finalAnswer": "all Grade 6 math skills",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m6-u8-final-assessment-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Demonstrate mastery: solve a proportion, compute with integers, divide fractions, solve an equation, find an area, and calculate a probability.",
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
                                                  "Mastery",
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
                                                  "Mastery",
                                                  "All skills demonstrated."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates mastery.",
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
          id: "m6-u8-final-assessment-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Grade 6 math mastery means you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "do advanced calculus"
                    },
                    {
                              "id": "b",
                              "text": "solve problems using all Grade 6 skills"
                    },
                    {
                              "id": "c",
                              "text": "write novels"
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
                              "statement": "Solve problems with all skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solve problems with all skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "solve problems using all G6 skills",
          "commonErrors": [
                    "Thinks mastery is advanced."
          ]
},
        },
        {
          id: "m6-u8-final-assessment-q4",
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
          id: "m6-u8-final-assessment-q5",
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
          id: "m6-u8-final-assessment-q6",
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
          id: "m6-u8-final-assessment-q7",
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
          id: "m6-u8-final-assessment-q8",
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
