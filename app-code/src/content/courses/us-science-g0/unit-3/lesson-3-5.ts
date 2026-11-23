import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "s0-u3-lesson-3-5",
  code: "3-5",
  title: "Pushes and Pulls Review",
  goal: "I CAN use pushes, pulls, gravity and motion together.",
  standards: ["K-PS2-1", "K-PS2-2", "K-PS3-1"],
  vocabulary: [
    { term: "Push", definition: "Force away." },
    { term: "Pull", definition: "Force toward." },
    { term: "Gravity", definition: "Pulls down." },
    { term: "Motion", definition: "Movement." },
    { term: "Fall", definition: "Move down." },
    { term: "Roll", definition: "Turn over." },
    { term: "Slide", definition: "Move along surface." },
    { term: "Cause", definition: "What makes it happen." },
  ],
  concepts: [
    {
      id: "s0-u3-pushes-review",
      title: "Pushes and pulls review",
      skill: "Combine pushes, pulls, gravity and motion observation.",
      lesson: {
        sections: [
          {
            heading: "All about forces and motion",
            body: "**Pushes** move things away, **pulls** move them toward you, and **gravity** pulls things down. These **forces** cause **motion** — objects roll, slide, fall, or stop.",
          },
          {
            heading: "Put it together",
            body: "Push or pull an object, watch how it moves, and explain what force caused it.",
          },
        ],
        keyFormulas: [
          { name: "Forces/motion", statement: "Push + pull + gravity -> motion (roll, slide, fall, stop)." },
        ],
        workedExample: {
          problem: "You push a ball and it rolls, then it falls off a table. Explain both motions.",
          solution: "**Push** made it roll; **gravity** made it fall.",
        },
      },
      questions: [
        {
          id: "s0-u3-pushes-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Forces that cause motion include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only pushes"
                    },
                    {
                              "id": "b",
                              "text": "pushes, pulls and gravity"
                    },
                    {
                              "id": "c",
                              "text": "only pulls"
                    },
                    {
                              "id": "d",
                              "text": "only gravity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pushes, pulls, gravity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pushes, pulls, gravity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all three**",
          "commonErrors": [
                    "Lists one force."
          ]
},
        },
        {
          id: "s0-u3-pushes-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Push or pull an object, then describe how it moved and what force(s) caused the motion.",
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
                                                  "Push/pull + motion + cause."
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
                                                  "Push/pull + motion + cause."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Pushes/pulls + describes motion + cause.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Pushed ball; it rolled then fell (gravity).'**"
          ]
},
        },
        {
          id: "s0-u3-pushes-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gravity causes objects to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "float up"
                    },
                    {
                              "id": "b",
                              "text": "fall down"
                    },
                    {
                              "id": "c",
                              "text": "roll sideways"
                    },
                    {
                              "id": "d",
                              "text": "stay still"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity = fall down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity = fall down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fall down**",
          "commonErrors": [
                    "Confuses with float."
          ]
},
        },
        {
          id: "s0-u3-pushes-review-q4",
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
                              "text": "Pulls down."
                    },
                    {
                              "id": "d",
                              "text": "Movement."
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
          id: "s0-u3-pushes-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pulls down."
                    },
                    {
                              "id": "b",
                              "text": "Movement."
                    },
                    {
                              "id": "c",
                              "text": "Move down."
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
          id: "s0-u3-pushes-review-q6",
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
                              "text": "Pulls down."
                    },
                    {
                              "id": "c",
                              "text": "Move down."
                    },
                    {
                              "id": "d",
                              "text": "Turn over."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "s0-u3-pushes-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move down."
                    },
                    {
                              "id": "b",
                              "text": "Turn over."
                    },
                    {
                              "id": "c",
                              "text": "Move along surface."
                    },
                    {
                              "id": "d",
                              "text": "Movement."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "s0-u3-pushes-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fall\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Turn over."
                    },
                    {
                              "id": "b",
                              "text": "Move down."
                    },
                    {
                              "id": "c",
                              "text": "Move along surface."
                    },
                    {
                              "id": "d",
                              "text": "What makes it happen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fall\" means Move down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fall\" means Move down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fall** = Move down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
