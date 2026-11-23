import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "sci3-u5-lesson-5-5",
  code: "5-5",
  title: "Forces and Motion Review",
  goal: "I CAN describe pushes, pulls, gravity, friction and balanced/unbalanced forces.",
  standards: ["PS2.A", "PS2.B"],
  vocabulary: [
    { term: "Force", definition: "Push or pull." },
    { term: "Push", definition: "Away." },
    { term: "Pull", definition: "Toward." },
    { term: "Gravity", definition: "Pulls to Earth." },
    { term: "Friction", definition: "Slows motion." },
    { term: "Balanced", definition: "Equal — still." },
    { term: "Unbalanced", definition: "Unequal — moves." },
    { term: "Motion", definition: "Movement." },
  ],
  concepts: [
    {
      id: "sci3-u5-motion-review",
      title: "Forces and motion review",
      skill: "Combine pushes, pulls, gravity, friction, balanced/unbalanced forces.",
      lesson: {
        sections: [
          {
            heading: "All force knowledge",
            body: "Forces are **pushes and pulls**. **Gravity** pulls down; **friction** slows motion. **Balanced** forces = still; **unbalanced** = motion changes.",
          },
          {
            heading: "Put it together",
            body: "Describe how different forces affect motion.",
          },
        ],
        keyFormulas: [
          { name: "Forces", statement: "Push + pull + gravity + friction + balanced/unbalanced = all forces." },
        ],
        workedExample: {
          problem: "Describe how gravity, friction, and balanced/unbalanced forces affect motion.",
          solution: "Gravity pulls down; friction slows; balanced=still; unbalanced=moves.",
        },
      },
      questions: [
        {
          id: "sci3-u5-motion-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Force knowledge includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only pushes"
                    },
                    {
                              "id": "b",
                              "text": "pushes, pulls, gravity, friction, balanced/unbalanced"
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
                              "statement": "All force skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All force skills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "pushes, pulls, gravity, friction, balanced/unbalanced",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "sci3-u5-motion-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how gravity, friction, and balanced/unbalanced forces each affect motion. Give an example.",
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
                                                  "Gravity + friction + balanced/unbalanced."
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
                                                  "Gravity + friction + balanced/unbalanced."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Gravity: ball falls. Friction: slows slide. Balanced: still; unbalanced: moves.'**"
          ]
},
        },
        {
          id: "sci3-u5-motion-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Forces are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're fun"
                    },
                    {
                              "id": "b",
                              "text": "they cause and change motion"
                    },
                    {
                              "id": "c",
                              "text": "they're invisible"
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
                              "statement": "Forces cause/change motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Forces cause/change motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "they cause and change motion",
          "commonErrors": [
                    "Thinks forces are useless."
          ]
},
        },
        {
          id: "sci3-u5-motion-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Away."
                    },
                    {
                              "id": "b",
                              "text": "Push or pull."
                    },
                    {
                              "id": "c",
                              "text": "Toward."
                    },
                    {
                              "id": "d",
                              "text": "Pulls to Earth."
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
          id: "sci3-u5-motion-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Toward."
                    },
                    {
                              "id": "b",
                              "text": "Pulls to Earth."
                    },
                    {
                              "id": "c",
                              "text": "Slows motion."
                    },
                    {
                              "id": "d",
                              "text": "Away."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-motion-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pulls to Earth."
                    },
                    {
                              "id": "b",
                              "text": "Toward."
                    },
                    {
                              "id": "c",
                              "text": "Slows motion."
                    },
                    {
                              "id": "d",
                              "text": "Equal — still."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pull\" means Toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pull\" means Toward.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pull** = Toward.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-motion-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gravity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Slows motion."
                    },
                    {
                              "id": "b",
                              "text": "Equal — still."
                    },
                    {
                              "id": "c",
                              "text": "Unequal — moves."
                    },
                    {
                              "id": "d",
                              "text": "Pulls to Earth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gravity\" means Pulls to Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gravity\" means Pulls to Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gravity** = Pulls to Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-motion-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Friction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Equal — still."
                    },
                    {
                              "id": "b",
                              "text": "Slows motion."
                    },
                    {
                              "id": "c",
                              "text": "Unequal — moves."
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
