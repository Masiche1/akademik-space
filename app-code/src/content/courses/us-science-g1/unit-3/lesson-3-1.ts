import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "s1-u3-lesson-3-1",
  code: "3-1",
  title: "Pushes and Pulls",
  goal: "I CAN identify pushes and pulls.",
  standards: ["1-PS1-1"],
  vocabulary: [
    { term: "Push", definition: "Force that moves away." },
    { term: "Pull", definition: "Force that moves toward." },
    { term: "Force", definition: "A push or pull." },
    { term: "Move", definition: "Change position." },
    { term: "Direction", definition: "Which way it goes." },
    { term: "Strong", definition: "Big force." },
    { term: "Gentle", definition: "Small force." },
    { term: "Speed", definition: "How fast it moves." },
  ],
  concepts: [
    {
      id: "s1-u3-push-pull",
      title: "Pushes and pulls",
      skill: "Pushes move things away; pulls move things toward us.",
      lesson: {
        sections: [
          {
            heading: "Two kinds of force",
            body: "A **push** moves something **away**; a **pull** moves something **toward** us. Both are **forces** that can make things **move** or change **direction** or **speed**.",
          },
          {
            heading: "Force changes motion",
            body: "A **strong** push or pull moves things faster or farther; a **gentle** one moves them slowly.",
          },
        ],
        keyFormulas: [
          { name: "Push/Pull", statement: "Push=away, Pull=toward; force changes motion." },
        ],
        workedExample: {
          problem: "You open a door. Are you pushing or pulling?",
          solution: "If door moves toward you, you're **pulling**; if away, you're **pushing**.",
        },
      },
      questions: [
        {
          id: "s1-u3-push-pull-q1",
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
          "finalAnswer": "**away**",
          "commonErrors": [
                    "Confuses with pull."
          ]
},
        },
        {
          id: "s1-u3-push-pull-q2",
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
                              "text": "up only"
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
                              "statement": "Pull moves toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pull moves toward.",
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
          id: "s1-u3-push-pull-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one example of a push and one example of a pull. What moves in each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Push/Pull",
                              "statement": "Push away, pull toward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives push example + what moves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives pull example + what moves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Push: kick ball away. Pull: open drawer toward me.'**",
          "commonErrors": [
                    "Both same type.",
                    "No movement stated."
          ]
},
        },
        {
          id: "s1-u3-push-pull-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'force' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a picture"
                    },
                    {
                              "id": "b",
                              "text": "a push or pull"
                    },
                    {
                              "id": "c",
                              "text": "a color"
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
                    "Thinks force is visual."
          ]
},
        },
        {
          id: "s1-u3-push-pull-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Try pushing a toy car gently vs strongly. How does the force change the motion?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Force",
                              "statement": "Strong vs gentle force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes gentle push result.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes strong push result.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Gentle push = slow; strong push = fast/far.'**",
          "commonErrors": [
                    "No difference observed.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s1-u3-push-pull-q6",
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
          id: "s1-u3-push-pull-q7",
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
                              "text": "Which way it goes."
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
          id: "s1-u3-push-pull-q8",
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
                              "text": "Which way it goes."
                    },
                    {
                              "id": "d",
                              "text": "Big force."
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
