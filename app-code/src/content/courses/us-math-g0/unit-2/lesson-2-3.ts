import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "m0-u2-lesson-2-3",
  code: "2-3",
  title: "More or Less?",
  goal: "I CAN look at two groups and quickly say which has more or fewer.",
  standards: ["K.CC.C.7"],
  vocabulary: [
    { term: "Estimate", definition: "Guess how many without counting exactly." },
    { term: "Quick look", definition: "See at a glance which is more." },
    { term: "Spread out", definition: "Objects spread apart look like more." },
    { term: "Cluster", definition: "Objects close together look like fewer." },
    { term: "Count to be sure", definition: "Verify with counting when unsure." },
  ],
  concepts: [
    {
      id: "m0-u2-more-or-less",
      title: "More or less at a glance",
      skill: "Use visual estimation and counting to compare groups.",
      lesson: {
        sections: [
          {
            heading: "Quick comparisons",
            body: "Sometimes you can tell which group has **more** just by looking — a big pile vs a small pile. But looks can trick you: spread-out objects look like more.",
          },
          {
            heading: "Always verify",
            body: "When unsure, **count** both groups to be sure. Estimation is a guess; counting gives the true answer.",
          },
        ],
        keyFormulas: [
          { name: "Estimate vs count", statement: "Quick look for estimate; count for exact answer." },
        ],
        workedExample: {
          problem: "Two groups look similar size. How do you know which has more?",
          solution: "**Count** both groups — the one with the larger last number has more.",
        },
      },
      questions: [
        {
          id: "m0-u2-more-or-less-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 7 dots. Group B has 3 dots. Which group has more?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group A"
                    },
                    {
                              "id": "b",
                              "text": "Group B"
                    },
                    {
                              "id": "c",
                              "text": "They are the same"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count each group: 7 > 3, so Group A has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 7 > 3, so Group A has more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group A**",
          "commonErrors": [
                    "Picks the group that looks bigger without counting."
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 7 dots. Group B has 3 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 - 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 - 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 3 dots. Group B has 7 dots. Which group has more?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Group A"
                    },
                    {
                              "id": "b",
                              "text": "Group B"
                    },
                    {
                              "id": "c",
                              "text": "They are the same"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Count each group: 7 > 3, so Group B has more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Count each group: 7 > 3, so Group B has more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group B**",
          "commonErrors": [
                    "Picks the group that looks bigger without counting."
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Group A has 3 dots. Group B has 7 dots. How many more does the larger group have?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "More",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "7 - 3 = 4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "7 - 3 = 4.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Adds the two groups instead of subtracting."
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A group of objects spread far apart may LOOK like more because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they are actually more"
                    },
                    {
                              "id": "b",
                              "text": "spread objects take up more space"
                    },
                    {
                              "id": "c",
                              "text": "they are bigger"
                    },
                    {
                              "id": "d",
                              "text": "they are closer"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Spread objects take more space and can look like more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Spread objects take more space and can look like more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**take up more space**",
          "commonErrors": [
                    "Thinks spread = more objects."
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Look at two groups of objects. Which has more? Estimate first, then count to check.",
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
                                                  "Estimate + count",
                                                  "Guess then verify."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Estimate + count",
                                                  "Guess then verify."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Estimates and verifies by counting.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Looks like more; counted: 6 vs 4.'**"
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The most reliable way to know which group has more is to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "count both groups"
                    },
                    {
                              "id": "c",
                              "text": "look at size"
                    },
                    {
                              "id": "d",
                              "text": "spread them out"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Counting gives the exact answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counting gives the exact answer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**count**",
          "commonErrors": [
                    "Thinks guessing is reliable."
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Estimate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See at a glance which is more."
                    },
                    {
                              "id": "b",
                              "text": "Guess how many without counting exactly."
                    },
                    {
                              "id": "c",
                              "text": "Objects spread apart look like more."
                    },
                    {
                              "id": "d",
                              "text": "Objects close together look like fewer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Estimate\" means Guess how many without counting exactly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Estimate\" means Guess how many without counting exactly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Estimate** = Guess how many without counting exactly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quick look\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Objects spread apart look like more."
                    },
                    {
                              "id": "b",
                              "text": "Objects close together look like fewer."
                    },
                    {
                              "id": "c",
                              "text": "Verify with counting when unsure."
                    },
                    {
                              "id": "d",
                              "text": "See at a glance which is more."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Quick look\" means See at a glance which is more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quick look\" means See at a glance which is more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Quick look** = See at a glance which is more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "m0-u2-more-or-less-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spread out\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Objects close together look like fewer."
                    },
                    {
                              "id": "b",
                              "text": "Objects spread apart look like more."
                    },
                    {
                              "id": "c",
                              "text": "Verify with counting when unsure."
                    },
                    {
                              "id": "d",
                              "text": "Guess how many without counting exactly."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Spread out\" means Objects spread apart look like more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spread out\" means Objects spread apart look like more.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Spread out** = Objects spread apart look like more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
