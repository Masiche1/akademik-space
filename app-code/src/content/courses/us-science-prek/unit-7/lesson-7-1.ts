import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "spk-u7-lesson-7-1",
  code: "7-1",
  title: "Parts of the Body",
  goal: "I CAN name major body parts and what they do.",
  standards: ["ELOF-PK.SCI.BODY.1"],
  vocabulary: [
    { term: "Head", definition: "Top part of body with brain, eyes, ears, nose, mouth." },
    { term: "Arm", definition: "Limb used for reaching and holding." },
    { term: "Leg", definition: "Limb used for standing and walking." },
    { term: "Hand", definition: "End of arm with fingers for grasping." },
    { term: "Foot", definition: "End of leg for standing and walking." },
    { term: "Organ", definition: "Body part that does a special job." },
    { term: "Brain", definition: "Controls the body and thinking." },
  ],
  concepts: [
    {
      id: "spk-u7-body-parts",
      title: "Parts of the body",
      skill: "Name major body parts and their functions.",
      lesson: {
        sections: [
          {
            heading: "Body parts",
            body: "Our body has a **head** (brain, eyes, ears, nose, mouth), **arms** and **legs** (for moving), **hands** (fingers for grasping), **feet** (for standing/walking), and many **organs** inside that do special jobs.",
          },
          {
            heading: "What each does",
            body: "The **brain** controls thinking. **Eyes** see, **ears** hear, **nose** smells, **tongue** tastes. **Legs** walk, **arms** reach, **hands** grab.",
          },
        ],
        keyFormulas: [
          { name: "Body parts", statement: "Head/brain, arms/legs, hands/feet, organs — each has a job." },
        ],
        workedExample: {
          problem: "Which body part do you use to grab a toy?",
          solution: "You use your **hand** — specifically your **fingers** to grasp.",
        },
      },
      questions: [
        {
          id: "spk-u7-body-parts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which body part controls thinking?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "heart"
                    },
                    {
                              "id": "b",
                              "text": "brain"
                    },
                    {
                              "id": "c",
                              "text": "stomach"
                    },
                    {
                              "id": "d",
                              "text": "hand"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "The brain controls thinking and the body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The brain controls thinking and the body.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**brain**",
          "commonErrors": [
                    "Picks wrong organ."
          ]
},
        },
        {
          id: "spk-u7-body-parts-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "You use your... to walk and stand.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "hands"
                    },
                    {
                              "id": "b",
                              "text": "legs and feet"
                    },
                    {
                              "id": "c",
                              "text": "arms"
                    },
                    {
                              "id": "d",
                              "text": "head"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Legs and feet are for walking and standing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Legs and feet are for walking and standing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**legs + feet**",
          "commonErrors": [
                    "Picks wrong limbs."
          ]
},
        },
        {
          id: "spk-u7-body-parts-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name three body parts and what each one does.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body parts",
                              "statement": "Name parts + functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 3 parts + jobs.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Eyes see, legs walk, hands grab.'**",
          "commonErrors": [
                    "Cannot name parts.",
                    "Wrong functions."
          ]
},
        },
        {
          id: "spk-u7-body-parts-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'heart' is an organ that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "thinks"
                    },
                    {
                              "id": "b",
                              "text": "pumps blood through the body"
                    },
                    {
                              "id": "c",
                              "text": "sees"
                    },
                    {
                              "id": "d",
                              "text": "walks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Heart pumps blood through the body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Heart pumps blood through the body.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Pumps blood**",
          "commonErrors": [
                    "Confuses with brain."
          ]
},
        },
        {
          id: "spk-u7-body-parts-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Point to or name five body parts. For each, say what it does. Then explain how the brain tells them what to do.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body parts",
                              "statement": "Name 5 parts + functions + brain role."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 5 parts + functions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains brain's role.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Eyes see, ears hear, legs walk, hands grab, mouth eats; brain controls all.'**",
          "commonErrors": [
                    "Fewer than 5.",
                    "Cannot explain brain."
          ]
},
        },
        {
          id: "spk-u7-body-parts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Head\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Limb used for reaching and holding."
                    },
                    {
                              "id": "b",
                              "text": "Top part of body with brain, eyes, ears, nose, mouth."
                    },
                    {
                              "id": "c",
                              "text": "Limb used for standing and walking."
                    },
                    {
                              "id": "d",
                              "text": "End of arm with fingers for grasping."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Head\" means Top part of body with brain, eyes, ears, nose, mouth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Head\" means Top part of body with brain, eyes, ears, nose, mouth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Head** = Top part of body with brain, eyes, ears, nose, mouth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u7-body-parts-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Arm\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Limb used for standing and walking."
                    },
                    {
                              "id": "b",
                              "text": "End of arm with fingers for grasping."
                    },
                    {
                              "id": "c",
                              "text": "End of leg for standing and walking."
                    },
                    {
                              "id": "d",
                              "text": "Limb used for reaching and holding."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Arm\" means Limb used for reaching and holding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Arm\" means Limb used for reaching and holding.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Arm** = Limb used for reaching and holding.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u7-body-parts-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Leg\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "End of arm with fingers for grasping."
                    },
                    {
                              "id": "b",
                              "text": "Limb used for standing and walking."
                    },
                    {
                              "id": "c",
                              "text": "End of leg for standing and walking."
                    },
                    {
                              "id": "d",
                              "text": "Body part that does a special job."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Leg\" means Limb used for standing and walking."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Leg\" means Limb used for standing and walking.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Leg** = Limb used for standing and walking.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
