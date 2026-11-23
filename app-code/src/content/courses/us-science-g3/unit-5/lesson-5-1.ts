import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "sci3-u5-lesson-5-1",
  code: "5-1",
  title: "Pushes and Pulls",
  goal: "I CAN describe pushes and pulls as forces.",
  standards: ["PS2.A"],
  vocabulary: [
    { term: "Force", definition: "A push or pull." },
    { term: "Push", definition: "Force away from you." },
    { term: "Pull", definition: "Force toward you." },
    { term: "Motion", definition: "Movement." },
    { term: "Speed", definition: "How fast." },
    { term: "Direction", definition: "Where it goes." },
    { term: "Strength", definition: "How hard." },
    { term: "Contact", definition: "Touching." },
  ],
  concepts: [
    {
      id: "sci3-u5-push-pull",
      title: "Pushes and pulls",
      skill: "Describe pushes and pulls as forces that cause motion.",
      lesson: {
        sections: [
          {
            heading: "Forces cause motion",
            body: "A **force** is a **push** or **pull**. Forces can make things **move**, **stop**, **speed up**, **slow down**, or **change direction**.",
          },
          {
            heading: "Push vs pull",
            body: "A **push** moves something **away**; a **pull** moves it **toward** you. The **strength** of the force affects how much motion changes.",
          },
        ],
        keyFormulas: [
          { name: "Forces", statement: "Push (away) + Pull (toward) = force; force -> motion changes." },
        ],
        workedExample: {
          problem: "You push a swing to make it go higher. What kind of force is this?",
          solution: "A **push** — it moves the swing away from you.",
        },
      },
      questions: [
        {
          id: "sci3-u5-push-pull-q1",
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
                              "text": "a toy"
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
          "finalAnswer": "a push or pull",
          "commonErrors": [
                    "Thinks force is something else."
          ]
},
        },
        {
          id: "sci3-u5-push-pull-q2",
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
                              "statement": "Pull = toward you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pull = toward you.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "toward you",
          "commonErrors": [
                    "Thinks pull moves away."
          ]
},
        },
        {
          id: "sci3-u5-push-pull-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give an example of a push and a pull. What motion does each cause?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Push/pull",
                              "statement": "Push+pull+motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives push example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives pull example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Push: push door open. Pull: pull drawer out.'**",
          "commonErrors": [
                    "Cannot give examples.",
                    "Only one type."
          ]
},
        },
        {
          id: "sci3-u5-push-pull-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Forces can change...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only speed"
                    },
                    {
                              "id": "b",
                              "text": "speed, direction, or whether it moves"
                    },
                    {
                              "id": "c",
                              "text": "only direction"
                    },
                    {
                              "id": "d",
                              "text": "only color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Forces change motion in many ways."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Forces change motion in many ways.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "speed, direction, or whether it moves",
          "commonErrors": [
                    "Thinks forces only change speed."
          ]
},
        },
        {
          id: "sci3-u5-push-pull-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Describe how a force can make something stop moving.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Push/pull",
                              "statement": "Force -> stop motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes force stopping motion.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'A force opposite to motion slows and stops it — like friction or pushing back.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Thinks forces only start motion."
          ]
},
        },
        {
          id: "sci3-u5-push-pull-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Force\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force away from you."
                    },
                    {
                              "id": "b",
                              "text": "A push or pull."
                    },
                    {
                              "id": "c",
                              "text": "Force toward you."
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
        {
          id: "sci3-u5-push-pull-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force toward you."
                    },
                    {
                              "id": "b",
                              "text": "Movement."
                    },
                    {
                              "id": "c",
                              "text": "How fast."
                    },
                    {
                              "id": "d",
                              "text": "Force away from you."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Force away from you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force away from you.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force away from you.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u5-push-pull-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Movement."
                    },
                    {
                              "id": "b",
                              "text": "Force toward you."
                    },
                    {
                              "id": "c",
                              "text": "How fast."
                    },
                    {
                              "id": "d",
                              "text": "Where it goes."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pull\" means Force toward you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pull\" means Force toward you.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pull** = Force toward you.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
