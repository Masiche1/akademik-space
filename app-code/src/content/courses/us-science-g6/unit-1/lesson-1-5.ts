import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "sci6-u1-lesson-1-5",
  code: "1-5",
  title: "Friction and Gravity",
  goal: "I CAN explain friction and gravity as forces.",
  standards: ["MS-PS2-1"],
  vocabulary: [
    { term: "Friction", definition: "Opposing force." },
    { term: "Gravity", definition: "Pull toward Earth." },
    { term: "Normal force", definition: "Support force." },
    { term: "Air resistance", definition: "Friction with air." },
    { term: "Surface", definition: "What you touch." },
    { term: "Weight", definition: "Gravity force." },
    { term: "Mass", definition: "Amount of matter." },
    { term: "Contact", definition: "Touching." },
  ],
  concepts: [
    {
      id: "sci6-u1-friction-gravity",
      title: "Friction and gravity",
      skill: "Explain how friction and gravity affect motion.",
      lesson: {
        sections: [
          {
            heading: "Friction",
            body: "**Friction** opposes motion between surfaces. More roughness = more friction. It can be helpful (walking) or harmful (wasted energy).",
          },
          {
            heading: "Gravity",
            body: "**Gravity** pulls objects toward Earth's center. **Weight** = gravity force = mass x gravity. Heavier objects have more weight.",
          },
        ],
        keyFormulas: [
          { name: "Friction", statement: "Opposes motion; depends on surfaces." },
          { name: "Gravity", statement: "Pulls toward Earth; weight = mg." },
        ],
        workedExample: {
          problem: "Why do we wear seatbelts?",
          solution: "**Because of inertia (Newton's 1st law) — body keeps moving forward in crash; seatbelt provides force to stop us.**",
        },
      },
      questions: [
        {
          id: "sci6-u1-friction-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Friction' is a force that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "helps motion"
                    },
                    {
                              "id": "b",
                              "text": "opposes motion"
                    },
                    {
                              "id": "c",
                              "text": "creates motion"
                    },
                    {
                              "id": "d",
                              "text": "only acts on liquids"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Opposes motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opposes motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "opposes motion",
          "commonErrors": [
                    "Wrong direction."
          ]
},
        },
        {
          id: "sci6-u1-friction-gravity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Gravity' is a force that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "pushes objects up"
                    },
                    {
                              "id": "b",
                              "text": "pulls objects toward Earth"
                    },
                    {
                              "id": "c",
                              "text": "only acts on metals"
                    },
                    {
                              "id": "d",
                              "text": "only acts at night"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pulls toward Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pulls toward Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "pulls objects toward Earth",
          "commonErrors": [
                    "Wrong direction."
          ]
},
        },
        {
          id: "sci6-u1-friction-gravity-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Explain why a ball eventually stops rolling on grass but rolls farther on ice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Friction",
                              "statement": "Friction explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains friction.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Grass has more friction than ice; friction opposes motion, so ball stops faster on grass.**",
          "commonErrors": [
                    "Wrong explanation.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "sci6-u1-friction-gravity-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Weight' differs from 'mass' because weight is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "amount of matter"
                    },
                    {
                              "id": "b",
                              "text": "gravity force on mass"
                    },
                    {
                              "id": "c",
                              "text": "same as mass"
                    },
                    {
                              "id": "d",
                              "text": "only on Earth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity force.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "gravity force on mass",
          "commonErrors": [
                    "Confuses with mass."
          ]
},
        },
        {
          id: "sci6-u1-friction-gravity-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe how friction and gravity each affect an object's motion, giving examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Friction/gravity",
                              "statement": "Both explained."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains friction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains gravity.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Friction: slows objects (brakes); Gravity: pulls objects down (falls); Both affect motion.**",
          "commonErrors": [
                    "Only one explained.",
                    "Wrong explanations."
          ]
},
        },
        {
          id: "sci6-u1-friction-gravity-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Friction\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pull toward Earth."
                    },
                    {
                              "id": "b",
                              "text": "Opposing force."
                    },
                    {
                              "id": "c",
                              "text": "Support force."
                    },
                    {
                              "id": "d",
                              "text": "Friction with air."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Friction\" means Opposing force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Friction\" means Opposing force.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Friction** = Opposing force.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-friction-gravity-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gravity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Support force."
                    },
                    {
                              "id": "b",
                              "text": "Friction with air."
                    },
                    {
                              "id": "c",
                              "text": "What you touch."
                    },
                    {
                              "id": "d",
                              "text": "Pull toward Earth."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gravity\" means Pull toward Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gravity\" means Pull toward Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gravity** = Pull toward Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci6-u1-friction-gravity-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Normal force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Friction with air."
                    },
                    {
                              "id": "b",
                              "text": "Support force."
                    },
                    {
                              "id": "c",
                              "text": "What you touch."
                    },
                    {
                              "id": "d",
                              "text": "Gravity force."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Normal force\" means Support force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Normal force\" means Support force.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Normal force** = Support force.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
