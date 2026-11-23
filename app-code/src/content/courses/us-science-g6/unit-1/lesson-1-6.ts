import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "sci6-u1-lesson-1-6",
  code: "1-6",
  title: "Motion/Forces Review",
  goal: "I CAN use all motion and force skills.",
  standards: ["MS-PS2-1", "MS-PS2-2"],
  vocabulary: [
    { term: "Motion", definition: "Change in position." },
    { term: "Force", definition: "Push or pull." },
    { term: "Speed", definition: "Distance/time." },
    { term: "Velocity", definition: "Speed + direction." },
    { term: "Newton's laws", definition: "Three laws." },
    { term: "Friction", definition: "Opposing force." },
    { term: "Gravity", definition: "Pulling force." },
    { term: "Net force", definition: "Total force." },
  ],
  concepts: [
    {
      id: "sci6-u1-motion-forces-review",
      title: "Motion/forces review",
      skill: "Combine motion concepts with forces and Newton's laws.",
      lesson: {
        sections: [
          {
            heading: "All motion/force skills",
            body: "Describe **motion**, apply **Newton's laws**, and explain **forces** (friction, gravity).",
          },
          {
            heading: "Put it together",
            body: "Use all skills to understand how objects move.",
          },
        ],
        keyFormulas: [
          { name: "Motion/forces", statement: "Motion + forces + Newton's = all skills." },
        ],
        workedExample: {
          problem: "Use all motion/force skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "sci6-u1-motion-forces-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Motion/force skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only motion"
                    },
                    {
                              "id": "b",
                              "text": "motion, forces, Newton's laws, friction, gravity"
                    },
                    {
                              "id": "c",
                              "text": "only forces"
                    },
                    {
                              "id": "d",
                              "text": "only Newton's"
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
          "finalAnswer": "motion, forces, Newton's laws, friction, gravity",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci6-u1-motion-forces-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Calculate speed, apply Newton's Second Law, identify a force, and explain balanced vs unbalanced forces.",
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
                                                  "All motion/force",
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
                                                  "All motion/force",
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
                    "**e.g., 'Speed = 60/2 = 30 mph; F = ma; Friction opposes motion; Balanced = no change.'**"
          ]
},
        },
        {
          id: "sci6-u1-motion-forces-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Understanding motion and forces helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only test"
                    },
                    {
                              "id": "b",
                              "text": "explain how objects move and why"
                    },
                    {
                              "id": "c",
                              "text": "only memorize"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Explain motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explain motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "explain how objects move and why",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "sci6-u1-motion-forces-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Push or pull."
                    },
                    {
                              "id": "b",
                              "text": "Change in position."
                    },
                    {
                              "id": "c",
                              "text": "Distance/time."
                    },
                    {
                              "id": "d",
                              "text": "Speed + direction."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Motion\" means Change in position."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motion\" means Change in position.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Motion** = Change in position.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-motion-forces-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Distance/time."
                    },
                    {
                              "id": "b",
                              "text": "Speed + direction."
                    },
                    {
                              "id": "c",
                              "text": "Three laws."
                    },
                    {
                              "id": "d",
                              "text": "Push or pull."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Force\" means Push or pull."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Force\" means Push or pull.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Force** = Push or pull.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-motion-forces-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speed\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Speed + direction."
                    },
                    {
                              "id": "b",
                              "text": "Distance/time."
                    },
                    {
                              "id": "c",
                              "text": "Three laws."
                    },
                    {
                              "id": "d",
                              "text": "Opposing force."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Speed\" means Distance/time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Speed\" means Distance/time.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Speed** = Distance/time.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-motion-forces-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Velocity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Three laws."
                    },
                    {
                              "id": "b",
                              "text": "Opposing force."
                    },
                    {
                              "id": "c",
                              "text": "Pulling force."
                    },
                    {
                              "id": "d",
                              "text": "Speed + direction."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Velocity\" means Speed + direction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Velocity\" means Speed + direction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Velocity** = Speed + direction.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-motion-forces-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Newton's laws\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opposing force."
                    },
                    {
                              "id": "b",
                              "text": "Three laws."
                    },
                    {
                              "id": "c",
                              "text": "Pulling force."
                    },
                    {
                              "id": "d",
                              "text": "Total force."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Newton's laws\" means Three laws."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Newton's laws\" means Three laws.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Newton's laws** = Three laws.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
