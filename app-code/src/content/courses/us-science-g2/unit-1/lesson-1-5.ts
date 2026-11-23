import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "sci2-u1-lesson-1-5",
  code: "1-5",
  title: "Forces and Motion Review",
  goal: "I CAN describe pushes, pulls, friction, gravity and motion patterns.",
  standards: ["NGSS 2-PS2-1", "NGSS 2-PS2-2"],
  vocabulary: [
    { term: "Push", definition: "Force away." },
    { term: "Pull", definition: "Force toward." },
    { term: "Friction", definition: "Slows motion." },
    { term: "Gravity", definition: "Pulls down." },
    { term: "Motion", definition: "Movement." },
    { term: "Fast", definition: "Quick." },
    { term: "Slow", definition: "Gentle." },
    { term: "Force", definition: "Push or pull." },
  ],
  concepts: [
    {
      id: "sci2-u1-motion-review",
      title: "Forces and motion review",
      skill: "Combine pushes, pulls, friction, gravity and motion patterns.",
      lesson: {
        sections: [
          {
            heading: "All force skills",
            body: "Forces are **pushes**, **pulls**, **friction** (slows), and **gravity** (pulls down). They cause **motion** in different patterns.",
          },
          {
            heading: "Put it together",
            body: "Describe how forces make things move, slow, fall, and move in patterns.",
          },
        ],
        keyFormulas: [
          { name: "Forces review", statement: "Push + pull + friction + gravity + motion patterns = all force skills." },
        ],
        workedExample: {
          problem: "Describe all forces acting when you kick a ball.",
          solution: "Your foot **pushes** it (force), **friction** slows it on grass, **gravity** pulls it down, it moves in a **curve**.",
        },
      },
      questions: [
        {
          id: "sci2-u1-motion-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Forces include which?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only pushes"
                    },
                    {
                              "id": "b",
                              "text": "pushes, pulls, friction, gravity"
                    },
                    {
                              "id": "c",
                              "text": "only gravity"
                    },
                    {
                              "id": "d",
                              "text": "only friction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All forces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All forces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all forces**",
          "commonErrors": [
                    "Lists one force."
          ]
},
        },
        {
          id: "sci2-u1-motion-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe all forces when you slide a toy car across the floor then drop a ball.",
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
                                                  "All forces",
                                                  "Push/pull + friction + gravity."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All forces",
                                                  "Push/pull + friction + gravity."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes forces for both.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Car: push + friction slows. Ball: gravity pulls down.'**"
          ]
},
        },
        {
          id: "sci2-u1-motion-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Friction slows things because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it pushes them"
                    },
                    {
                              "id": "b",
                              "text": "it rubs against surfaces"
                    },
                    {
                              "id": "c",
                              "text": "it pulls them up"
                    },
                    {
                              "id": "d",
                              "text": "it makes them faster"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Friction = rubbing against surfaces."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Friction = rubbing against surfaces.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**rubbing**",
          "commonErrors": [
                    "Thinks friction speeds things."
          ]
},
        },
        {
          id: "sci2-u1-motion-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force toward."
                    },
                    {
                              "id": "b",
                              "text": "Force away."
                    },
                    {
                              "id": "c",
                              "text": "Slows motion."
                    },
                    {
                              "id": "d",
                              "text": "Pulls down."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Force away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-motion-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Slows motion."
                    },
                    {
                              "id": "b",
                              "text": "Pulls down."
                    },
                    {
                              "id": "c",
                              "text": "Movement."
                    },
                    {
                              "id": "d",
                              "text": "Force toward."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pull\" means Force toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pull\" means Force toward.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pull** = Force toward.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-motion-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Friction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pulls down."
                    },
                    {
                              "id": "b",
                              "text": "Slows motion."
                    },
                    {
                              "id": "c",
                              "text": "Movement."
                    },
                    {
                              "id": "d",
                              "text": "Quick."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Friction\" means Slows motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Friction\" means Slows motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Friction** = Slows motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-motion-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gravity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Movement."
                    },
                    {
                              "id": "b",
                              "text": "Quick."
                    },
                    {
                              "id": "c",
                              "text": "Gentle."
                    },
                    {
                              "id": "d",
                              "text": "Pulls down."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gravity\" means Pulls down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gravity\" means Pulls down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gravity** = Pulls down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-motion-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quick."
                    },
                    {
                              "id": "b",
                              "text": "Movement."
                    },
                    {
                              "id": "c",
                              "text": "Gentle."
                    },
                    {
                              "id": "d",
                              "text": "Push or pull."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Motion\" means Movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motion\" means Movement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Motion** = Movement.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
