import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "s0-u3-lesson-3-1",
  code: "3-1",
  title: "Pushes and Pulls",
  goal: "I CAN tell the difference between a push and a pull.",
  standards: ["K-PS2-1", "K-PS2-2"],
  vocabulary: [
    { term: "Push", definition: "Force that moves something away." },
    { term: "Pull", definition: "Force that moves something toward you." },
    { term: "Force", definition: "A push or pull." },
    { term: "Move", definition: "Change position." },
    { term: "Direction", definition: "Which way something goes." },
    { term: "Strength", definition: "How hard you push or pull." },
    { term: "Motion", definition: "Movement." },
  ],
  concepts: [
    {
      id: "s0-u3-push-pull",
      title: "Pushes and pulls",
      skill: "Distinguish pushes (away) from pulls (toward).",
      lesson: {
        sections: [
          {
            heading: "Push vs pull",
            body: "A **push** moves something **away** from you; a **pull** moves something **toward** you. Both are **forces** that cause **motion**.",
          },
          {
            heading: "Direction matters",
            body: "The **direction** of the force matters — push = away, pull = toward. A stronger **push** or **pull** makes things move faster or farther.",
          },
        ],
        keyFormulas: [
          { name: "Push/Pull", statement: "Push=away, Pull=toward; both are forces causing motion." },
        ],
        workedExample: {
          problem: "You open a door. Are you pushing or pulling? You close it — push or pull?",
          solution: "Opening = **pull** (toward you). Closing = **push** (away from you).",
        },
      },
      questions: [
        {
          id: "s0-u3-push-pull-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'push' moves something...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "toward you"
                    },
                    {
                              "id": "b",
                              "text": "away from you"
                    },
                    {
                              "id": "c",
                              "text": "nowhere"
                    },
                    {
                              "id": "d",
                              "text": "up only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Push = away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push = away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**away**",
          "commonErrors": [
                    "Confuses with pull."
          ]
},
        },
        {
          id: "s0-u3-push-pull-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'pull' moves something...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "away"
                    },
                    {
                              "id": "b",
                              "text": "toward you"
                    },
                    {
                              "id": "c",
                              "text": "nowhere"
                    },
                    {
                              "id": "d",
                              "text": "sideways only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pull = toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pull = toward.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**toward**",
          "commonErrors": [
                    "Confuses with push."
          ]
},
        },
        {
          id: "s0-u3-push-pull-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give one example of a push and one of a pull you do every day.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Push/pull",
                              "statement": "Push example + pull example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives one push + one pull.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Push: closing a door. Pull: opening a drawer.'**",
          "commonErrors": [
                    "Both same type.",
                    "Cannot give examples."
          ]
},
        },
        {
          id: "s0-u3-push-pull-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'force' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a color"
                    },
                    {
                              "id": "b",
                              "text": "a push or pull"
                    },
                    {
                              "id": "c",
                              "text": "a shape"
                    },
                    {
                              "id": "d",
                              "text": "a number"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Force = push or pull."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Force = push or pull.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**push or pull**",
          "commonErrors": [
                    "Confuses with shape."
          ]
},
        },
        {
          id: "s0-u3-push-pull-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe a push and a pull you did today. Which moved something away? Which moved it toward you?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Push/pull",
                              "statement": "Push + pull examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes a push.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes a pull.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Pushed a swing (away); pulled a chair (toward).'**",
          "commonErrors": [
                    "Only one type.",
                    "Cannot distinguish."
          ]
},
        },
        {
          id: "s0-u3-push-pull-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force that moves something toward you."
                    },
                    {
                              "id": "b",
                              "text": "Force that moves something away."
                    },
                    {
                              "id": "c",
                              "text": "A push or pull."
                    },
                    {
                              "id": "d",
                              "text": "Change position."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Force that moves something away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force that moves something away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force that moves something away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u3-push-pull-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A push or pull."
                    },
                    {
                              "id": "b",
                              "text": "Change position."
                    },
                    {
                              "id": "c",
                              "text": "Which way something goes."
                    },
                    {
                              "id": "d",
                              "text": "Force that moves something toward you."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pull\" means Force that moves something toward you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pull\" means Force that moves something toward you.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pull** = Force that moves something toward you.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u3-push-pull-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Change position."
                    },
                    {
                              "id": "b",
                              "text": "A push or pull."
                    },
                    {
                              "id": "c",
                              "text": "Which way something goes."
                    },
                    {
                              "id": "d",
                              "text": "How hard you push or pull."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Force\" means A push or pull."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Force\" means A push or pull.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Force** = A push or pull.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
