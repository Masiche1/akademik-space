import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "spk-u7-lesson-7-4",
  code: "7-4",
  title: "Body and Senses Review",
  goal: "I CAN name body parts, match senses and describe healthy habits.",
  standards: ["ELOF-PK.SCI.BODY.4"],
  vocabulary: [
    { term: "Body part", definition: "Head, arm, leg, hand, foot, organ." },
    { term: "Sense", definition: "Sight, hearing, smell, taste, touch." },
    { term: "Brain", definition: "Controls body." },
    { term: "Healthy", definition: "Good habits for body." },
    { term: "Exercise", definition: "Move to stay strong." },
    { term: "Organ", definition: "Special body part." },
  ],
  concepts: [
    {
      id: "spk-u7-body-review",
      title: "Body and senses review",
      skill: "Combine body parts, senses and healthy habits.",
      lesson: {
        sections: [
          {
            heading: "Body + senses + health",
            body: "Our body has parts (head, arms, legs, organs) that each do a job. Our senses (sight, hearing, smell, taste, touch) let us explore. Healthy habits (exercise, sleep, good food) keep us strong.",
          },
          {
            heading: "Put it together",
            body: "Name a body part, match a sense to it, and explain how to keep it healthy.",
          },
        ],
        keyFormulas: [
          { name: "Body review", statement: "Body parts + senses + health = understanding ourselves." },
        ],
        workedExample: {
          problem: "Match: eyes, ears, legs. Then name a healthy habit for each.",
          solution: "Eyes=sight (rest them), ears=hearing (protect from loud noise), legs=walking (exercise them).",
        },
      },
      questions: [
        {
          id: "spk-u7-body-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "The body part for taste is the...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eye"
                    },
                    {
                              "id": "b",
                              "text": "ear"
                    },
                    {
                              "id": "c",
                              "text": "tongue"
                    },
                    {
                              "id": "d",
                              "text": "nose"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Tongue = taste."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tongue = taste.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**tongue**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "spk-u7-body-review-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a healthy habit?",
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
                              "text": "not washing hands"
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
          id: "spk-u7-body-review-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name a body part, the sense it controls, and one way to keep it healthy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body review",
                              "statement": "Part + sense + health."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names part, sense, health habit.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Eyes=sight; rest them by not watching screens too long.'**",
          "commonErrors": [
                    "Missing parts.",
                    "Wrong info."
          ]
},
        },
        {
          id: "spk-u7-body-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Organs are body parts that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are only outside"
                    },
                    {
                              "id": "b",
                              "text": "do special jobs inside the body"
                    },
                    {
                              "id": "c",
                              "text": "are toys"
                    },
                    {
                              "id": "d",
                              "text": "don't exist"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Organs do special jobs inside (heart pumps, brain thinks)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Organs do special jobs inside (heart pumps, brain thinks).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Special jobs inside**",
          "commonErrors": [
                    "Thinks organs are external."
          ]
},
        },
        {
          id: "spk-u7-body-review-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a 'my body' diagram: label head, arms, legs, and one organ. Match each sense to its body part. Add one healthy habit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Body review",
                              "statement": "Diagram + senses + health."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Labels body parts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Matches senses + adds habit.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Head(brain), arms, legs, heart; eyes=sight, ears=hearing; exercise daily.'**",
          "commonErrors": [
                    "Missing labels.",
                    "No senses/health."
          ]
},
        },
        {
          id: "spk-u7-body-review-q6",
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
                              "text": "Good habits for body."
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
          id: "spk-u7-body-review-q7",
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
                              "text": "Good habits for body."
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
          id: "spk-u7-body-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Brain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Good habits for body."
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
