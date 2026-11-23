import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "m6-u8-lesson-8-1",
  code: "8-1",
  title: "Final: Ratios and Algebra",
  goal: "I CAN combine ratios and algebra skills.",
  standards: ["6.RP.A.1", "6.EE.B.7"],
  vocabulary: [
    { term: "Ratio", definition: "Comparison." },
    { term: "Proportion", definition: "Equal ratios." },
    { term: "Percent", definition: "Per hundred." },
    { term: "Expression", definition: "Math phrase." },
    { term: "Equation", definition: "Math sentence." },
    { term: "Solve", definition: "Find value." },
    { term: "Variable", definition: "Unknown." },
    { term: "Evaluate", definition: "Find value." },
  ],
  concepts: [
    {
      id: "m6-u8-final-ratios-algebra",
      title: "Final: ratios and algebra",
      skill: "Combine ratio/proportion skills with algebraic expressions and equations.",
      lesson: {
        sections: [
          {
            heading: "Combined skills",
            body: "Use **ratios/proportions/percents** together with **expressions/equations** to solve real-world problems.",
          },
          {
            heading: "Put it together",
            body: "Use all skills for complex problems.",
          },
        ],
        keyFormulas: [
          { name: "Combined", statement: "Ratios + algebra = complex problem solving." },
        ],
        workedExample: {
          problem: "A recipe uses 3 cups flour for 12 cookies. How much flour for 20 cookies? Write as proportion and solve.",
          solution: "3/12 = x/20; 3x20 = 12x; 60 = 12x; **x = 5 cups**.",
        },
      },
      questions: [
        {
          id: "m6-u8-final-ratios-algebra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "3/12 = x/20. Cross-multiply gives...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "60 = 12x"
                    },
                    {
                              "id": "b",
                              "text": "3x = 20"
                    },
                    {
                              "id": "c",
                              "text": "12x = 60"
                    },
                    {
                              "id": "d",
                              "text": "x = 5"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "12x = 60."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "12x = 60.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "12x = 60",
          "commonErrors": [
                    "Wrong cross-multiplication."
          ]
},
        },
        {
          id: "m6-u8-final-ratios-algebra-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve: 2x + 5 = 17",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "x = 6"
                    },
                    {
                              "id": "b",
                              "text": "x = 11"
                    },
                    {
                              "id": "c",
                              "text": "x = 5"
                    },
                    {
                              "id": "d",
                              "text": "x = 7"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "2x=12; x=6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2x=12; x=6.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "x = 6",
          "commonErrors": [
                    "Wrong answer."
          ]
},
        },
        {
          id: "m6-u8-final-ratios-algebra-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A car travels 180 miles on 6 gallons. How far on 10 gallons? Also solve 3x - 7 = 14.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ratios+algebra",
                              "statement": "300 miles, x=7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**180/6 = 30 mpg; 30x10 = 300 miles; 3x-7=14 -> 3x=21 -> x=7.**",
          "commonErrors": [
                    "Wrong answers.",
                    "Missing parts."
          ]
},
        },
        {
          id: "m6-u8-final-ratios-algebra-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ratios and algebra work together because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're separate"
                    },
                    {
                              "id": "b",
                              "text": "proportions can be solved with algebraic equations"
                    },
                    {
                              "id": "c",
                              "text": "ratios are easier"
                    },
                    {
                              "id": "d",
                              "text": "algebra is ratios"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Proportions use algebra."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Proportions use algebra.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "proportions can be solved with algebraic equations",
          "commonErrors": [
                    "Thinks they're unrelated."
          ]
},
        },
        {
          id: "m6-u8-final-ratios-algebra-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve a real-world proportion problem and explain how you set up the equation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ratios+algebra",
                              "statement": "Solved + explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Solves problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains setup.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., '3/4 = x/12 -> 3x12 = 4x -> 36 = 4x -> x = 9; set up equal ratios.'**",
          "commonErrors": [
                    "Cannot solve.",
                    "No explanation."
          ]
},
        },
        {
          id: "m6-u8-final-ratios-algebra-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ratio\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Equal ratios."
                    },
                    {
                              "id": "b",
                              "text": "Comparison."
                    },
                    {
                              "id": "c",
                              "text": "Per hundred."
                    },
                    {
                              "id": "d",
                              "text": "Math phrase."
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
          id: "m6-u8-final-ratios-algebra-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Proportion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Per hundred."
                    },
                    {
                              "id": "b",
                              "text": "Math phrase."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Equal ratios."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Proportion\" means Equal ratios."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Proportion\" means Equal ratios.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Proportion** = Equal ratios.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u8-final-ratios-algebra-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Percent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math phrase."
                    },
                    {
                              "id": "b",
                              "text": "Per hundred."
                    },
                    {
                              "id": "c",
                              "text": "Math sentence."
                    },
                    {
                              "id": "d",
                              "text": "Find value."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Percent\" means Per hundred."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Percent\" means Per hundred.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Percent** = Per hundred.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
