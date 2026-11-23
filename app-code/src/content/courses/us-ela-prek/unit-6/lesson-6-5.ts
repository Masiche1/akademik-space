import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "epk-u6-lesson-6-5",
  code: "6-5",
  title: "Fine Motor Skills",
  goal: "I CAN use my hands and fingers to write, draw and cut.",
  standards: ["ELOF-PK.LL.WRITE.5"],
  vocabulary: [
    { term: "Fine motor", definition: "Small movements of hands and fingers." },
    { term: "Grip", definition: "How you hold a pencil or crayon." },
    { term: "Scissors", definition: "Tool for cutting paper." },
    { term: "Hand strength", definition: "How strong your fingers are." },
    { term: "Coordination", definition: "Moving hands and eyes together." },
  ],
  concepts: [
    {
      id: "epk-u6-fine-motor",
      title: "Fine motor skills",
      skill: "Develop hand strength, grip and coordination for writing and cutting.",
      lesson: {
        sections: [
          {
            heading: "Small hand movements",
            body: "**Fine motor skills** are the small movements of your hands and fingers — holding a pencil, cutting with scissors, buttoning a shirt. These are needed for writing.",
          },
          {
            heading: "Grip and control",
            body: "Hold your pencil with a **tripod grip** — thumb and two fingers, like pinching. This gives you control. Practice strengthens your hands.",
          },
        ],
        keyFormulas: [
          { name: "Fine motor", statement: "Small hand/finger movements: grip, cut, draw, write." },
        ],
        workedExample: {
          problem: "Show the tripod grip for holding a pencil.",
          solution: "Pinch the pencil with **thumb + index + middle finger**, resting on the side.",
        },
      },
      questions: [
        {
          id: "epk-u6-fine-motor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Fine motor skills' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "big movements like running"
                    },
                    {
                              "id": "b",
                              "text": "small hand and finger movements"
                    },
                    {
                              "id": "c",
                              "text": "eye movements only"
                    },
                    {
                              "id": "d",
                              "text": "foot movements"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Fine motor = small hand/finger movements."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fine motor = small hand/finger movements.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Small hand movements**",
          "commonErrors": [
                    "Confuses with gross motor."
          ]
},
        },
        {
          id: "epk-u6-fine-motor-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'tripod grip' for a pencil uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "all five fingers"
                    },
                    {
                              "id": "b",
                              "text": "thumb and two fingers"
                    },
                    {
                              "id": "c",
                              "text": "just the palm"
                    },
                    {
                              "id": "d",
                              "text": "no fingers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Tripod grip = thumb + index + middle finger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tripod grip = thumb + index + middle finger.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Thumb + two fingers**",
          "commonErrors": [
                    "Wrong grip."
          ]
},
        },
        {
          id: "epk-u6-fine-motor-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Hold a pencil or crayon correctly. Describe your grip.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Tripod grip",
                              "statement": "Thumb + index + middle finger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses tripod grip.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Thumb + index + middle finger pinching pencil**",
          "commonErrors": [
                    "Fist grip.",
                    "Cannot hold correctly."
          ]
},
        },
        {
          id: "epk-u6-fine-motor-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why are fine motor skills important for writing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They are not"
                    },
                    {
                              "id": "b",
                              "text": "You need finger control to form letters"
                    },
                    {
                              "id": "c",
                              "text": "Only for drawing"
                    },
                    {
                              "id": "d",
                              "text": "For running"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Fine motor control lets you form letters precisely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fine motor control lets you form letters precisely.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Finger control for letters**",
          "commonErrors": [
                    "Thinks fine motor is unrelated."
          ]
},
        },
        {
          id: "epk-u6-fine-motor-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Cut a straight line on paper with scissors. Then draw a simple shape. What was hard?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Fine motor",
                              "statement": "Cut + draw with control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cuts straight line.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Draws shape and says difficulty.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Cutting straight was hard; drawing circle easier.'**",
          "commonErrors": [
                    "Cannot cut.",
                    "No reflection."
          ]
},
        },
        {
          id: "epk-u6-fine-motor-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fine motor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How you hold a pencil or crayon."
                    },
                    {
                              "id": "b",
                              "text": "Small movements of hands and fingers."
                    },
                    {
                              "id": "c",
                              "text": "Tool for cutting paper."
                    },
                    {
                              "id": "d",
                              "text": "How strong your fingers are."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fine motor\" means Small movements of hands and fingers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fine motor\" means Small movements of hands and fingers.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fine motor** = Small movements of hands and fingers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-fine-motor-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Grip\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tool for cutting paper."
                    },
                    {
                              "id": "b",
                              "text": "How strong your fingers are."
                    },
                    {
                              "id": "c",
                              "text": "Moving hands and eyes together."
                    },
                    {
                              "id": "d",
                              "text": "How you hold a pencil or crayon."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Grip\" means How you hold a pencil or crayon."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Grip\" means How you hold a pencil or crayon.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Grip** = How you hold a pencil or crayon.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u6-fine-motor-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Scissors\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How strong your fingers are."
                    },
                    {
                              "id": "b",
                              "text": "Tool for cutting paper."
                    },
                    {
                              "id": "c",
                              "text": "Moving hands and eyes together."
                    },
                    {
                              "id": "d",
                              "text": "Small movements of hands and fingers."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Scissors\" means Tool for cutting paper."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Scissors\" means Tool for cutting paper.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Scissors** = Tool for cutting paper.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
