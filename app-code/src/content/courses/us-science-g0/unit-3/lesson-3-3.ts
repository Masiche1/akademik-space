import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "s0-u3-lesson-3-3",
  code: "3-3",
  title: "Gravity",
  goal: "I CAN observe that things fall down because of gravity.",
  standards: ["K-PS2-1", "K-PS3-1"],
  vocabulary: [
    { term: "Gravity", definition: "The force that pulls things down." },
    { term: "Fall", definition: "Move down toward the ground." },
    { term: "Drop", definition: "Let something fall." },
    { term: "Down", definition: "Toward the ground." },
    { term: "Earth", definition: "Our planet." },
    { term: "Pull", definition: "Force toward." },
    { term: "Float", definition: "Stay up without falling." },
    { term: "Heavy", definition: "Has more weight." },
  ],
  concepts: [
    {
      id: "s0-u3-gravity",
      title: "Gravity",
      skill: "Observe that gravity pulls things down toward Earth.",
      lesson: {
        sections: [
          {
            heading: "What is gravity?",
            body: "**Gravity** is the force that pulls things **down** toward the **Earth**. When you **drop** something, it **falls** down because of gravity.",
          },
          {
            heading: "What floats?",
            body: "Some things **float** — like balloons or feathers — because other forces (like air) can hold them up against gravity. Most objects **fall**.",
          },
        ],
        keyFormulas: [
          { name: "Gravity", statement: "Pulls things down toward Earth; most things fall, some float." },
        ],
        workedExample: {
          problem: "You drop a ball and a balloon. What happens to each?",
          solution: "The **ball falls** (gravity pulls it down). The **balloon may float** (air pushes it up against gravity).",
        },
      },
      questions: [
        {
          id: "s0-u3-gravity-q1",
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
                              "statement": "Gravity = down toward Earth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity = down toward Earth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**down**",
          "commonErrors": [
                    "Thinks gravity pulls up."
          ]
},
        },
        {
          id: "s0-u3-gravity-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When you drop an object, it...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "floats up"
                    },
                    {
                              "id": "b",
                              "text": "falls down"
                    },
                    {
                              "id": "c",
                              "text": "stays still"
                    },
                    {
                              "id": "d",
                              "text": "moves sideways"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Dropped objects fall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dropped objects fall.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**falls down**",
          "commonErrors": [
                    "Thinks it floats."
          ]
},
        },
        {
          id: "s0-u3-gravity-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Drop two different objects. Do they both fall? Does one fall faster? Describe what happens.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Gravity",
                              "statement": "Drop objects + observe falling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Drops objects + describes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Both fell; the heavier one fell faster.'**",
          "commonErrors": [
                    "No observation.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s0-u3-gravity-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Float' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fall down"
                    },
                    {
                              "id": "b",
                              "text": "stay up without falling"
                    },
                    {
                              "id": "c",
                              "text": "roll"
                    },
                    {
                              "id": "d",
                              "text": "slide"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Float = stay up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Float = stay up.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**stay up**",
          "commonErrors": [
                    "Confuses with fall."
          ]
},
        },
        {
          id: "s0-u3-gravity-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Drop a heavy object and a light object. Which falls faster? Why do you think so?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Gravity",
                              "statement": "Compare falling speeds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Drops both objects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares + gives idea why.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Heavy fell faster; gravity pulls harder on more mass.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No idea why."
          ]
},
        },
        {
          id: "s0-u3-gravity-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Gravity\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move down toward the ground."
                    },
                    {
                              "id": "b",
                              "text": "The force that pulls things down."
                    },
                    {
                              "id": "c",
                              "text": "Let something fall."
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
                              "statement": "\"Gravity\" means The force that pulls things down."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Gravity\" means The force that pulls things down.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Gravity** = The force that pulls things down.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u3-gravity-q7",
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
                              "text": "Toward the ground."
                    },
                    {
                              "id": "c",
                              "text": "Our planet."
                    },
                    {
                              "id": "d",
                              "text": "Move down toward the ground."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fall\" means Move down toward the ground."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fall\" means Move down toward the ground.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fall** = Move down toward the ground.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u3-gravity-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Drop\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Toward the ground."
                    },
                    {
                              "id": "b",
                              "text": "Let something fall."
                    },
                    {
                              "id": "c",
                              "text": "Our planet."
                    },
                    {
                              "id": "d",
                              "text": "Force toward."
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
