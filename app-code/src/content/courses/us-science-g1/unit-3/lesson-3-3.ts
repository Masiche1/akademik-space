import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "s1-u3-lesson-3-3",
  code: "3-3",
  title: "Effects of Pulls",
  goal: "I CAN describe how pulls change motion.",
  standards: ["1-PS1-1", "1-PS1-2"],
  vocabulary: [
    { term: "Pull", definition: "Force toward." },
    { term: "Toward", definition: "Move closer." },
    { term: "Bring", definition: "Move to you." },
    { term: "Draw", definition: "Pull toward." },
    { term: "Drag", definition: "Pull along." },
    { term: "Motion", definition: "Movement." },
    { term: "Direction", definition: "Which way." },
    { term: "Force", definition: "Push or pull." },
  ],
  concepts: [
    {
      id: "s1-u3-pull-effects",
      title: "Effects of pulls",
      skill: "Pulls move things toward us and can start, stop or change motion.",
      lesson: {
        sections: [
          {
            heading: "Pulls bring things",
            body: "A **pull** moves things **toward** us. Pulls can **start** things moving, **bring** them closer, **drag** them along, or **change direction** just like pushes.",
          },
          {
            heading: "Pull examples",
            body: "Opening a drawer, pulling a wagon, reeling in a fishing line — all **pulls** that move things **toward** us.",
          },
        ],
        keyFormulas: [
          { name: "Pull effects", statement: "Pull moves things toward us; can change motion like pushes." },
        ],
        workedExample: {
          problem: "You pull a wagon toward you. What kind of force is this?",
          solution: "A **pull** — it moves the wagon **toward** you.",
        },
      },
      questions: [
        {
          id: "s1-u3-pull-effects-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pull moves things...",
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
          id: "s1-u3-pull-effects-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a pull?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "kicking a ball"
                    },
                    {
                              "id": "b",
                              "text": "opening a drawer toward you"
                    },
                    {
                              "id": "c",
                              "text": "pushing a car"
                    },
                    {
                              "id": "d",
                              "text": "throwing a ball"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Opening drawer = pull."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opening drawer = pull.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**opening drawer**",
          "commonErrors": [
                    "Picks push/throw."
          ]
},
        },
        {
          id: "s1-u3-pull-effects-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Give two examples of pulls in daily life. What moves toward you in each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pull",
                              "statement": "Toward movement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gives 2 pull examples + what moves.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Open drawer (drawer comes), reel in fishing line (fish comes).'**",
          "commonErrors": [
                    "Fewer than 2 examples.",
                    "Examples are pushes."
          ]
},
        },
        {
          id: "s1-u3-pull-effects-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Drag' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "push"
                    },
                    {
                              "id": "b",
                              "text": "pull along behind"
                    },
                    {
                              "id": "c",
                              "text": "throw"
                    },
                    {
                              "id": "d",
                              "text": "drop"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Drag = pull along."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Drag = pull along.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**pull along**",
          "commonErrors": [
                    "Confuses with push."
          ]
},
        },
        {
          id: "s1-u3-pull-effects-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pull a toy wagon and describe how the pull changes its motion compared to pushing it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Pull",
                              "statement": "Compare pull vs push effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes pull motion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compares to push.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Pull brings wagon toward me; push would send it away.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No motion described."
          ]
},
        },
        {
          id: "s1-u3-pull-effects-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Pull\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move closer."
                    },
                    {
                              "id": "b",
                              "text": "Force toward."
                    },
                    {
                              "id": "c",
                              "text": "Move to you."
                    },
                    {
                              "id": "d",
                              "text": "Pull toward."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "s1-u3-pull-effects-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Toward\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move to you."
                    },
                    {
                              "id": "b",
                              "text": "Pull toward."
                    },
                    {
                              "id": "c",
                              "text": "Pull along."
                    },
                    {
                              "id": "d",
                              "text": "Move closer."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Toward\" means Move closer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Toward\" means Move closer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Toward** = Move closer.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u3-pull-effects-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bring\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Pull toward."
                    },
                    {
                              "id": "b",
                              "text": "Move to you."
                    },
                    {
                              "id": "c",
                              "text": "Pull along."
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
                              "statement": "\"Bring\" means Move to you."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bring\" means Move to you.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bring** = Move to you.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
