import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "sci2-u1-lesson-1-1",
  code: "1-1",
  title: "Pushes and Pulls",
  goal: "I CAN describe how pushes and pulls make things move.",
  standards: ["NGSS 2-PS2-1", "NGSS 2-PS2-2"],
  vocabulary: [
    { term: "Push", definition: "Force that moves away." },
    { term: "Pull", definition: "Force that moves toward." },
    { term: "Force", definition: "Push or pull." },
    { term: "Move", definition: "Change position." },
    { term: "Strong", definition: "More force." },
    { term: "Weak", definition: "Less force." },
    { term: "Direction", definition: "Which way it goes." },
    { term: "Speed", definition: "How fast it moves." },
  ],
  concepts: [
    {
      id: "sci2-u1-push-pull",
      title: "Pushes and pulls",
      skill: "Describe how pushes and pulls make things move in different directions and speeds.",
      lesson: {
        sections: [
          {
            heading: "Push or pull?",
            body: "A **push** moves something **away**; a **pull** moves it **toward** you. Both are **forces** that cause **motion**.",
          },
          {
            heading: "Strong or weak?",
            body: "A **strong** push moves things faster or farther than a **weak** one. The **direction** of the force decides which way things move.",
          },
        ],
        keyFormulas: [
          { name: "Push", statement: "Force moving away from you." },
          { name: "Pull", statement: "Force moving toward you." },
        ],
        workedExample: {
          problem: "You push a toy car away from you. Is that a push or pull? Which way does it go?",
          solution: "It's a **push** — it moves **away** from you.",
        },
      },
      questions: [
        {
          id: "sci2-u1-push-pull-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'push' is a force that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "moves toward you"
                    },
                    {
                              "id": "b",
                              "text": "moves away from you"
                    },
                    {
                              "id": "c",
                              "text": "stops everything"
                    },
                    {
                              "id": "d",
                              "text": "does nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Push moves away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push moves away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**moves away**",
          "commonErrors": [
                    "Confuses push with pull."
          ]
},
        },
        {
          id: "sci2-u1-push-pull-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "You pull a wagon toward you. What kind of force is it?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "push"
                    },
                    {
                              "id": "b",
                              "text": "pull"
                    },
                    {
                              "id": "c",
                              "text": "gravity"
                    },
                    {
                              "id": "d",
                              "text": "friction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pull = moves toward you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pull = moves toward you.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**pull**",
          "commonErrors": [
                    "Confuses with push."
          ]
},
        },
        {
          id: "sci2-u1-push-pull-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give one example of a push and one of a pull.",
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
                              "reasoning": "Gives one push + one pull.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Push: kick a ball. Pull: open a drawer.'**",
          "commonErrors": [
                    "Both same type.",
                    "Cannot give examples."
          ]
},
        },
        {
          id: "sci2-u1-push-pull-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Force' means...",
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
                              "text": "a number"
                    },
                    {
                              "id": "d",
                              "text": "a sound"
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
                    "Thinks force is unrelated."
          ]
},
        },
        {
          id: "sci2-u1-push-pull-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Push and pull a toy car. How does a strong push differ from a weak one?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Force",
                              "statement": "Strong vs weak force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes strong push.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes weak push difference.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Strong push moves it fast/far; weak push barely moves it.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Same result."
          ]
},
        },
        {
          id: "sci2-u1-push-pull-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Force that moves toward."
                    },
                    {
                              "id": "b",
                              "text": "Force that moves away."
                    },
                    {
                              "id": "c",
                              "text": "Push or pull."
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
                              "statement": "\"Push\" means Force that moves away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force that moves away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force that moves away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-push-pull-q7",
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
                              "text": "Change position."
                    },
                    {
                              "id": "c",
                              "text": "More force."
                    },
                    {
                              "id": "d",
                              "text": "Force that moves toward."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Pull\" means Force that moves toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Pull\" means Force that moves toward.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pull** = Force that moves toward.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u1-push-pull-q8",
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
                              "text": "Push or pull."
                    },
                    {
                              "id": "c",
                              "text": "More force."
                    },
                    {
                              "id": "d",
                              "text": "Less force."
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
      ],
    },
  ],
};
