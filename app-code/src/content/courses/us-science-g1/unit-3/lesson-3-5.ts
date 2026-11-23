import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "s1-u3-lesson-3-5",
  code: "3-5",
  title: "Motion Review",
  goal: "I CAN describe how pushes and pulls affect motion.",
  standards: ["1-PS1-1", "1-PS1-2"],
  vocabulary: [
    { term: "Push", definition: "Force away." },
    { term: "Pull", definition: "Force toward." },
    { term: "Force", definition: "Push or pull." },
    { term: "Motion", definition: "Movement." },
    { term: "Friction", definition: "Slows motion." },
    { term: "Start", definition: "Begin moving." },
    { term: "Stop", definition: "End moving." },
    { term: "Direction", definition: "Which way." },
  ],
  concepts: [
    {
      id: "s1-u3-motion-review",
      title: "Pushes and pulls review",
      skill: "Combine push/pull identification with motion effects.",
      lesson: {
        sections: [
          {
            heading: "All motion knowledge",
            body: "**Pushes** move things away, **pulls** move them toward us. Both **forces** can **start/stop/speed/slow/change direction** of motion. **Friction** slows things.",
          },
          {
            heading: "Put it together",
            body: "Identify pushes and pulls and describe their effects on motion.",
          },
        ],
        keyFormulas: [
          { name: "Push/Pull", statement: "Push=away, Pull=toward; forces affect motion; friction slows." },
        ],
        workedExample: {
          problem: "Describe a push and a pull and their effects.",
          solution: "Push ball away (starts motion); pull drawer toward (brings closer).",
        },
      },
      questions: [
        {
          id: "s1-u3-motion-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Push/pull knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only names"
                    },
                    {
                              "id": "b",
                              "text": "identify forces + describe motion effects + friction"
                    },
                    {
                              "id": "c",
                              "text": "only colors"
                    },
                    {
                              "id": "d",
                              "text": "only size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "All motion topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All motion topics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all topics**",
          "commonErrors": [
                    "Lists one topic."
          ]
},
        },
        {
          id: "s1-u3-motion-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Push a toy and describe the force type and three effects on its motion.",
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
                                                  "Push/Pull",
                                                  "Force type + 3 effects."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Push/Pull",
                                                  "Force type + 3 effects."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Identifies force type.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes 3 effects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Push away; started moving, sped up, stopped due to friction.'**"
          ]
},
        },
        {
          id: "s1-u3-motion-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Friction makes things...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "move faster"
                    },
                    {
                              "id": "b",
                              "text": "slow down"
                    },
                    {
                              "id": "c",
                              "text": "fly"
                    },
                    {
                              "id": "d",
                              "text": "disappear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Friction slows motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Friction slows motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**slow down**",
          "commonErrors": [
                    "Thinks friction speeds up."
          ]
},
        },
        {
          id: "s1-u3-motion-review-q4",
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
                              "text": "Push or pull."
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
          id: "s1-u3-motion-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Push or pull."
                    },
                    {
                              "id": "b",
                              "text": "Movement."
                    },
                    {
                              "id": "c",
                              "text": "Slows motion."
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
          id: "s1-u3-motion-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Movement."
                    },
                    {
                              "id": "b",
                              "text": "Push or pull."
                    },
                    {
                              "id": "c",
                              "text": "Slows motion."
                    },
                    {
                              "id": "d",
                              "text": "Begin moving."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "s1-u3-motion-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Slows motion."
                    },
                    {
                              "id": "b",
                              "text": "Begin moving."
                    },
                    {
                              "id": "c",
                              "text": "End moving."
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
          id: "s1-u3-motion-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Friction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Begin moving."
                    },
                    {
                              "id": "b",
                              "text": "Slows motion."
                    },
                    {
                              "id": "c",
                              "text": "End moving."
                    },
                    {
                              "id": "d",
                              "text": "Which way."
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
      ],
    },
  ],
};
