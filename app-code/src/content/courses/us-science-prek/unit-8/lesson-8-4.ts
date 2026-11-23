import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "spk-u8-lesson-8-4",
  code: "8-4",
  title: "Review: Body and Senses",
  goal: "I CAN name body parts, match senses and describe healthy habits.",
  standards: ["ELOF-PK.SCI.REVIEW.4"],
  vocabulary: [
    { term: "Body part", definition: "Head, arm, leg, hand, foot, organ." },
    { term: "Sense", definition: "Sight, hearing, smell, taste, touch." },
    { term: "Brain", definition: "Controls body." },
    { term: "Healthy", definition: "Good habits." },
    { term: "Exercise", definition: "Move to stay strong." },
    { term: "Organ", definition: "Special body part." },
    { term: "Skin", definition: "Touch sense." },
    { term: "Tongue", definition: "Taste sense." },
  ],
  concepts: [
    {
      id: "spk-u8-review-body-senses",
      title: "Body and senses review",
      skill: "Combine body parts, senses and healthy habits.",
      lesson: {
        sections: [
          {
            heading: "Body + senses + health",
            body: "Body parts (head, arms, legs, organs) do jobs. Senses (sight, hearing, smell, taste, touch) let us explore. Healthy habits (exercise, sleep, good food, clean) keep us strong.",
          },
          {
            heading: "Put it together",
            body: "Name body parts, match senses, and describe healthy habits for each.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Body parts + senses + health = understanding ourselves." },
        ],
        workedExample: {
          problem: "Match senses to body parts and give a health tip for each.",
          solution: "Eyes=sight (rest), ears=hearing (protect), skin=touch (keep clean), tongue=taste (eat well), nose=smell (keep clean).",
        },
      },
      questions: [
        {
          id: "spk-u8-review-body-senses-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "The sense of touch is in the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eyes"
                    },
                    {
                              "id": "b",
                              "text": "skin"
                    },
                    {
                              "id": "c",
                              "text": "ears"
                    },
                    {
                              "id": "d",
                              "text": "tongue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Skin = touch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Skin = touch.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**skin**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "spk-u8-review-body-senses-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which helps keep you healthy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eating only candy"
                    },
                    {
                              "id": "b",
                              "text": "getting enough sleep"
                    },
                    {
                              "id": "c",
                              "text": "never exercising"
                    },
                    {
                              "id": "d",
                              "text": "not washing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Sleep is healthy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sleep is healthy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**enough sleep**",
          "commonErrors": [
                    "Picks unhealthy."
          ]
},
        },
        {
          id: "spk-u8-review-body-senses-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two body parts, match a sense to each, and give a healthy habit for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body + senses + health",
                              "statement": "Part + sense + habit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 parts + senses.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Gives health habits.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Eyes=sight, rest them; legs=walking, exercise them.'**",
          "commonErrors": [
                    "Cannot match.",
                    "No health tips."
          ]
},
        },
        {
          id: "spk-u8-review-body-senses-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Organs are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "outside the body"
                    },
                    {
                              "id": "b",
                              "text": "inside body parts with special jobs"
                    },
                    {
                              "id": "c",
                              "text": "toys"
                    },
                    {
                              "id": "d",
                              "text": "clothes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Organs are inside with special jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organs are inside with special jobs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**inside, special jobs**",
          "commonErrors": [
                    "Thinks organs are external."
          ]
},
        },
        {
          id: "spk-u8-review-body-senses-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Make a 'healthy body' poster: draw body parts, label senses, and add three healthy habits. Explain why each habit helps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body + health",
                              "statement": "Poster with parts, senses, habits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Includes all elements.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains health benefits.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Brain=control, eyes=sight, legs=walk; habits: exercise, sleep, eat well.'**",
          "commonErrors": [
                    "Missing elements.",
                    "No explanations."
          ]
},
        },
        {
          id: "spk-u8-review-body-senses-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Body part\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sight, hearing, smell, taste, touch."
                    },
                    {
                              "id": "b",
                              "text": "Head, arm, leg, hand, foot, organ."
                    },
                    {
                              "id": "c",
                              "text": "Controls body."
                    },
                    {
                              "id": "d",
                              "text": "Good habits."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Body part\" means Head, arm, leg, hand, foot, organ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Body part\" means Head, arm, leg, hand, foot, organ.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Body part** = Head, arm, leg, hand, foot, organ.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-body-senses-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sense\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Controls body."
                    },
                    {
                              "id": "b",
                              "text": "Good habits."
                    },
                    {
                              "id": "c",
                              "text": "Move to stay strong."
                    },
                    {
                              "id": "d",
                              "text": "Sight, hearing, smell, taste, touch."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sense\" means Sight, hearing, smell, taste, touch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sense\" means Sight, hearing, smell, taste, touch.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sense** = Sight, hearing, smell, taste, touch.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-body-senses-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Brain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Good habits."
                    },
                    {
                              "id": "b",
                              "text": "Controls body."
                    },
                    {
                              "id": "c",
                              "text": "Move to stay strong."
                    },
                    {
                              "id": "d",
                              "text": "Special body part."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Brain\" means Controls body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Brain\" means Controls body.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Brain** = Controls body.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
