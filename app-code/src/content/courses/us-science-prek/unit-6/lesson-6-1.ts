import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "spk-u6-lesson-6-1",
  code: "6-1",
  title: "Push and Pull",
  goal: "I CAN describe push and pull forces.",
  standards: ["ELOF-PK.SCI.FORCE.1"],
  vocabulary: [
    { term: "Push", definition: "Force that moves something away." },
    { term: "Pull", definition: "Force that moves something toward you." },
    { term: "Force", definition: "A push or pull that can change motion." },
    { term: "Move", definition: "Change position." },
    { term: "Direction", definition: "Which way something goes." },
    { term: "Strength", definition: "How hard you push or pull." },
  ],
  concepts: [
    {
      id: "spk-u6-push-pull",
      title: "Push and pull",
      skill: "Describe push and pull forces and their effects.",
      lesson: {
        sections: [
          {
            heading: "Push and pull",
            body: "A **force** is a **push** or **pull**. Pushing moves something **away**; pulling moves it **toward** you. Forces can make things **move**, **stop**, or **change direction**.",
          },
          {
            heading: "Strength matters",
            body: "The **strength** of your push or pull affects how much the object moves. A gentle push makes a ball roll slowly; a hard push makes it roll fast or far.",
          },
        ],
        keyFormulas: [
          { name: "Force", statement: "Push=away, Pull=toward. Force changes motion: start, stop, change direction." },
        ],
        workedExample: {
          problem: "You push a toy car away from you. Is that a push or pull?",
          solution: "That is a **push** — it moves the car **away** from you.",
        },
      },
      questions: [
        {
          id: "spk-u6-push-pull-q1",
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
                              "statement": "Push moves something away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push moves something away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Away**",
          "commonErrors": [
                    "Confuses push with pull."
          ]
},
        },
        {
          id: "spk-u6-push-pull-q2",
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
                              "text": "sideways only"
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
                              "statement": "Pull moves something toward you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pull moves something toward you.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Toward**",
          "commonErrors": [
                    "Confuses pull with push."
          ]
},
        },
        {
          id: "spk-u6-push-pull-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give an example of a push and an example of a pull. What moves in each case?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Push/pull",
                              "statement": "Push=away, pull=toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives push + pull examples.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Push: shove door open; Pull: drag chair toward me.'**",
          "commonErrors": [
                    "Cannot give examples.",
                    "Confuses push/pull."
          ]
},
        },
        {
          id: "spk-u6-push-pull-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A force can make an object...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only move faster"
                    },
                    {
                              "id": "b",
                              "text": "move, stop, or change direction"
                    },
                    {
                              "id": "c",
                              "text": "disappear"
                    },
                    {
                              "id": "d",
                              "text": "only slow down"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Force can start, stop or change motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Force can start, stop or change motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Move, stop, change direction**",
          "commonErrors": [
                    "Thinks force only speeds up."
          ]
},
        },
        {
          id: "spk-u6-push-pull-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Push a ball gently, then push it hard. What was different? How does force strength affect motion?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Force strength",
                              "statement": "Stronger force = more movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares gentle vs hard push.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains strength effect.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Gentle push = slow roll; hard push = fast/far roll.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No explanation."
          ]
},
        },
        {
          id: "spk-u6-push-pull-q6",
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
                              "text": "A push or pull that can change motion."
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
          id: "spk-u6-push-pull-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A push or pull that can change motion."
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
          id: "spk-u6-push-pull-q8",
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
                              "text": "A push or pull that can change motion."
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
                              "statement": "\"Force\" means A push or pull that can change motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Force\" means A push or pull that can change motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Force** = A push or pull that can change motion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
