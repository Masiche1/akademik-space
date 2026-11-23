import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "spk-u6-lesson-6-2",
  code: "6-2",
  title: "Gravity",
  goal: "I CAN describe gravity as a force that pulls things down.",
  standards: ["ELOF-PK.SCI.FORCE.2"],
  vocabulary: [
    { term: "Gravity", definition: "The force that pulls things toward Earth." },
    { term: "Fall", definition: "Move downward due to gravity." },
    { term: "Drop", definition: "Let something fall." },
    { term: "Heavy", definition: "Weighs a lot." },
    { term: "Light", definition: "Weighs a little." },
    { term: "Down", definition: "Toward the ground." },
    { term: "Pull", definition: "Force toward something." },
  ],
  concepts: [
    {
      id: "spk-u6-gravity",
      title: "Gravity",
      skill: "Describe gravity as a downward force on Earth.",
      lesson: {
        sections: [
          {
            heading: "What is gravity?",
            body: "**Gravity** is the force that pulls things **down** toward Earth's center. When you drop something, gravity pulls it to the ground.",
          },
          {
            heading: "Everything falls",
            body: "All objects are affected by gravity — a feather and a rock both fall down, though air resistance makes the feather fall slower. Gravity pulls **everything** down.",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "Force pulling objects toward Earth's center = downward." },
        ],
        workedExample: {
          problem: "Why does a ball fall when you drop it?",
          solution: "**Gravity** pulls the ball down toward the ground.",
        },
      },
      questions: [
        {
          id: "spk-u6-gravity-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gravity pulls things...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "up"
                    },
                    {
                              "id": "b",
                              "text": "down toward Earth"
                    },
                    {
                              "id": "c",
                              "text": "sideways"
                    },
                    {
                              "id": "d",
                              "text": "nowhere"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Gravity pulls things down toward Earth's center."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity pulls things down toward Earth's center.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Down**",
          "commonErrors": [
                    "Thinks gravity pulls up."
          ]
},
        },
        {
          id: "spk-u6-gravity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When you drop a ball, it falls because of...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "wind"
                    },
                    {
                              "id": "b",
                              "text": "gravity"
                    },
                    {
                              "id": "c",
                              "text": "magnetism"
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
                              "statement": "Gravity pulls the ball down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity pulls the ball down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**gravity**",
          "commonErrors": [
                    "Thinks nothing pulls it."
          ]
},
        },
        {
          id: "spk-u6-gravity-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Drop two objects of different weights. Do they both fall? Why? What force causes it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Gravity",
                              "statement": "Both fall due to gravity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observes both fall + names gravity.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Both fall — gravity pulls everything down regardless of weight.'**",
          "commonErrors": [
                    "Thinks heavy falls faster only.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "spk-u6-gravity-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Air resistance' makes some objects fall...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "faster"
                    },
                    {
                              "id": "b",
                              "text": "slower (like a feather)"
                    },
                    {
                              "id": "c",
                              "text": "upward"
                    },
                    {
                              "id": "d",
                              "text": "sideways"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Air resistance slows light objects like feathers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Air resistance slows light objects like feathers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Slower**",
          "commonErrors": [
                    "Thinks air resistance speeds up."
          ]
},
        },
        {
          id: "spk-u6-gravity-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Drop a heavy object and a light object from the same height. Which hits first? Why? What role does gravity play?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Gravity",
                              "statement": "Gravity pulls both; air resistance affects light."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Observes which hits first.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains gravity + air resistance.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Heavy hits first because less air resistance; gravity pulls both equally.'**",
          "commonErrors": [
                    "Wrong observation.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "spk-u6-gravity-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gravity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move downward due to gravity."
                    },
                    {
                              "id": "b",
                              "text": "The force that pulls things toward Earth."
                    },
                    {
                              "id": "c",
                              "text": "Let something fall."
                    },
                    {
                              "id": "d",
                              "text": "Weighs a lot."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Gravity\" means The force that pulls things toward Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gravity\" means The force that pulls things toward Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gravity** = The force that pulls things toward Earth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u6-gravity-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fall\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Let something fall."
                    },
                    {
                              "id": "b",
                              "text": "Weighs a lot."
                    },
                    {
                              "id": "c",
                              "text": "Weighs a little."
                    },
                    {
                              "id": "d",
                              "text": "Move downward due to gravity."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fall\" means Move downward due to gravity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fall\" means Move downward due to gravity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fall** = Move downward due to gravity.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u6-gravity-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Drop\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Weighs a lot."
                    },
                    {
                              "id": "b",
                              "text": "Let something fall."
                    },
                    {
                              "id": "c",
                              "text": "Weighs a little."
                    },
                    {
                              "id": "d",
                              "text": "Toward the ground."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Drop\" means Let something fall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Drop\" means Let something fall.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Drop** = Let something fall.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
