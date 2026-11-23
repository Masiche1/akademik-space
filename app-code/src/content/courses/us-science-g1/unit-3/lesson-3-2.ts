import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "s1-u3-lesson-3-2",
  code: "3-2",
  title: "Effects of Pushes",
  goal: "I CAN describe how pushes change motion.",
  standards: ["1-PS1-1", "1-PS1-2"],
  vocabulary: [
    { term: "Push", definition: "Force away." },
    { term: "Start", definition: "Begin moving." },
    { term: "Stop", definition: "End moving." },
    { term: "Speed up", definition: "Move faster." },
    { term: "Slow down", definition: "Move slower." },
    { term: "Change direction", definition: "Go another way." },
    { term: "Friction", definition: "Slows moving things." },
    { term: "Surface", definition: "What object moves on." },
  ],
  concepts: [
    {
      id: "s1-u3-push-effects",
      title: "Effects of pushes",
      skill: "Pushes can start, stop, speed up, slow down or change direction of motion.",
      lesson: {
        sections: [
          {
            heading: "Pushes change motion",
            body: "A **push** can **start** something moving, **stop** it, **speed it up**, **slow it down**, or **change its direction**. The **surface** it moves on affects how far it goes (**friction** slows it).",
          },
          {
            heading: "Friction",
            body: "**Friction** is a force that slows moving things — a toy car rolls farther on smooth floor than on carpet.",
          },
        ],
        keyFormulas: [
          { name: "Push effects", statement: "Push can start/stop/speed/slow/change direction." },
        ],
        workedExample: {
          problem: "You push a toy car. It rolls then stops. Why did it stop?",
          solution: "**Friction** with the floor slowed it down.",
        },
      },
      questions: [
        {
          id: "s1-u3-push-effects-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A push can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only start motion"
                    },
                    {
                              "id": "b",
                              "text": "start, stop, speed up, slow down, or change direction"
                    },
                    {
                              "id": "c",
                              "text": "only stop motion"
                    },
                    {
                              "id": "d",
                              "text": "make things disappear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Push affects motion many ways."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Push affects motion many ways.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all effects**",
          "commonErrors": [
                    "Picks only one effect."
          ]
},
        },
        {
          id: "s1-u3-push-effects-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Friction' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a push"
                    },
                    {
                              "id": "b",
                              "text": "a force that slows moving things"
                    },
                    {
                              "id": "c",
                              "text": "a pull"
                    },
                    {
                              "id": "d",
                              "text": "a color"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Friction slows motion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Friction slows motion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**slows motion**",
          "commonErrors": [
                    "Confuses with push."
          ]
},
        },
        {
          id: "s1-u3-push-effects-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Push a toy car on two surfaces (smooth vs rough). Describe how far it goes and why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Push effects",
                              "statement": "Surface affects distance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares distances.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains friction role.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Goes farther on smooth floor; rough surface has more friction.'**",
          "commonErrors": [
                    "No comparison.",
                    "No explanation."
          ]
},
        },
        {
          id: "s1-u3-push-effects-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which surface has more friction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ice"
                    },
                    {
                              "id": "b",
                              "text": "carpet"
                    },
                    {
                              "id": "c",
                              "text": "glass"
                    },
                    {
                              "id": "d",
                              "text": "plastic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Carpet has more friction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Carpet has more friction.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**carpet**",
          "commonErrors": [
                    "Picks smooth surface."
          ]
},
        },
        {
          id: "s1-u3-push-effects-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Push a ball and describe three effects your push had on its motion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Push effects",
                              "statement": "3 effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 push effects.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Started moving, sped up, changed direction.'**",
          "commonErrors": [
                    "Fewer than 3 effects.",
                    "Cannot describe."
          ]
},
        },
        {
          id: "s1-u3-push-effects-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Push\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Begin moving."
                    },
                    {
                              "id": "b",
                              "text": "Force away."
                    },
                    {
                              "id": "c",
                              "text": "End moving."
                    },
                    {
                              "id": "d",
                              "text": "Move faster."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Push\" means Force away."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Push\" means Force away.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Push** = Force away.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u3-push-effects-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Start\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "End moving."
                    },
                    {
                              "id": "b",
                              "text": "Move faster."
                    },
                    {
                              "id": "c",
                              "text": "Move slower."
                    },
                    {
                              "id": "d",
                              "text": "Begin moving."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Start\" means Begin moving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Start\" means Begin moving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Start** = Begin moving.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u3-push-effects-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Stop\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Move faster."
                    },
                    {
                              "id": "b",
                              "text": "End moving."
                    },
                    {
                              "id": "c",
                              "text": "Move slower."
                    },
                    {
                              "id": "d",
                              "text": "Go another way."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Stop\" means End moving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Stop\" means End moving.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Stop** = End moving.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
