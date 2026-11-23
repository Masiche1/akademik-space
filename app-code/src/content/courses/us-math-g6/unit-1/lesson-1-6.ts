import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "m6-u1-lesson-1-6",
  code: "1-6",
  title: "Ratio/Proportion Review",
  goal: "I CAN use all ratio and proportion skills.",
  standards: ["6.RP.A.1", "6.RP.A.2", "6.RP.A.3"],
  vocabulary: [
    { term: "Ratio", definition: "Comparison." },
    { term: "Rate", definition: "Different units." },
    { term: "Unit rate", definition: "Per one." },
    { term: "Proportion", definition: "Equal ratios." },
    { term: "Percent", definition: "Per hundred." },
    { term: "Cross-multiply", definition: "Solve proportions." },
    { term: "Simplify", definition: "Reduce." },
    { term: "Convert", definition: "Change form." },
  ],
  concepts: [
    {
      id: "m6-u1-ratio-proportion-review",
      title: "Ratio/proportion review",
      skill: "Combine ratios, rates, proportions and percents.",
      lesson: {
        sections: [
          {
            heading: "All ratio/proportion skills",
            body: "Write/simplify **ratios**, find **unit rates**, solve **proportions**, and work with **percents**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills for real-world problems.",
          },
        ],
        keyFormulas: [
          { name: "Ratio/proportion", statement: "Ratios + rates + proportions + percents = all skills." },
        ],
        workedExample: {
          problem: "Use all ratio/proportion skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "m6-u1-ratio-proportion-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ratio/proportion skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only ratios"
                    },
                    {
                              "id": "b",
                              "text": "ratios, rates, proportions, percents"
                    },
                    {
                              "id": "c",
                              "text": "only percents"
                    },
                    {
                              "id": "d",
                              "text": "only proportions"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "ratios, rates, proportions, percents",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "m6-u1-ratio-proportion-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a ratio, find a unit rate, solve a proportion, and convert a fraction to percent.",
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
                                                  "All ratio/proportion",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All ratio/proportion",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., '3:2; $3/item; 5/6=x/18 -> x=15; 3/4=75%.'**"
          ]
},
        },
        {
          id: "m6-u1-ratio-proportion-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ratios and proportions are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're math"
                    },
                    {
                              "id": "b",
                              "text": "they describe relationships in the real world"
                    },
                    {
                              "id": "c",
                              "text": "they're required"
                    },
                    {
                              "id": "d",
                              "text": "they're easy"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Describe real relationships."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describe real relationships.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they describe relationships in the real world",
          "commonErrors": [
                    "Thinks they're just math."
          ]
},
        },
        {
          id: "m6-u1-ratio-proportion-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ratio\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Different units."
                    },
                    {
                              "id": "b",
                              "text": "Comparison."
                    },
                    {
                              "id": "c",
                              "text": "Per one."
                    },
                    {
                              "id": "d",
                              "text": "Equal ratios."
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
          id: "m6-u1-ratio-proportion-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Rate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Per one."
                    },
                    {
                              "id": "b",
                              "text": "Equal ratios."
                    },
                    {
                              "id": "c",
                              "text": "Per hundred."
                    },
                    {
                              "id": "d",
                              "text": "Different units."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Rate\" means Different units."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Rate\" means Different units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rate** = Different units.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-ratio-proportion-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Unit rate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Equal ratios."
                    },
                    {
                              "id": "b",
                              "text": "Per one."
                    },
                    {
                              "id": "c",
                              "text": "Per hundred."
                    },
                    {
                              "id": "d",
                              "text": "Solve proportions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Unit rate\" means Per one."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Unit rate\" means Per one.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Unit rate** = Per one.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m6-u1-ratio-proportion-review-q7",
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
                              "text": "Solve proportions."
                    },
                    {
                              "id": "c",
                              "text": "Reduce."
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
          id: "m6-u1-ratio-proportion-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Percent\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Solve proportions."
                    },
                    {
                              "id": "b",
                              "text": "Per hundred."
                    },
                    {
                              "id": "c",
                              "text": "Reduce."
                    },
                    {
                              "id": "d",
                              "text": "Change form."
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
