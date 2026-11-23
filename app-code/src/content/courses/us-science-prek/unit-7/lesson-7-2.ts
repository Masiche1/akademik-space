import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "spk-u7-lesson-7-2",
  code: "7-2",
  title: "Senses and the Body",
  goal: "I CAN match each sense to its body part.",
  standards: ["ELOF-PK.SCI.BODY.2"],
  vocabulary: [
    { term: "Eye", definition: "Body part for sight." },
    { term: "Ear", definition: "Body part for hearing." },
    { term: "Nose", definition: "Body part for smell." },
    { term: "Tongue", definition: "Body part for taste." },
    { term: "Skin", definition: "Body part for touch." },
    { term: "Sense", definition: "Way we notice the world." },
    { term: "Organ", definition: "Body part with special job." },
  ],
  concepts: [
    {
      id: "spk-u7-senses-body",
      title: "Senses and body parts",
      skill: "Match each sense to its body part.",
      lesson: {
        sections: [
          {
            heading: "Senses live in body parts",
            body: "Each **sense** has a special **body part**: **eyes** for sight, **ears** for hearing, **nose** for smell, **tongue** for taste, **skin** for touch.",
          },
          {
            heading: "Match them",
            body: "Knowing which body part does which sense helps you understand how you experience the world. Your eyes see color; your skin feels texture; your nose smells odors.",
          },
        ],
        keyFormulas: [
          { name: "Senses + body parts", statement: "Eyes=sight, ears=hearing, nose=smell, tongue=taste, skin=touch." },
        ],
        workedExample: {
          problem: "Which body part lets you taste ice cream?",
          solution: "Your **tongue** lets you taste.",
        },
      },
      questions: [
        {
          id: "spk-u7-senses-body-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which body part is for smelling?",
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
                              "text": "nose"
                    },
                    {
                              "id": "d",
                              "text": "tongue"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Nose = smell."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nose = smell.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**nose**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "spk-u7-senses-body-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Your skin helps you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "see"
                    },
                    {
                              "id": "b",
                              "text": "touch and feel"
                    },
                    {
                              "id": "c",
                              "text": "smell"
                    },
                    {
                              "id": "d",
                              "text": "hear"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Skin = touch/feel."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Skin = touch/feel.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**touch**",
          "commonErrors": [
                    "Confuses senses."
          ]
},
        },
        {
          id: "spk-u7-senses-body-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Match these senses to body parts: sight, hearing, taste.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Senses + body",
                              "statement": "Sight=eyes, hearing=ears, taste=tongue."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matches all three.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sight=eyes, hearing=ears, taste=tongue.'**",
          "commonErrors": [
                    "Wrong matches.",
                    "Cannot match."
          ]
},
        },
        {
          id: "spk-u7-senses-body-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you can't hear well, which body part might be affected?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eyes"
                    },
                    {
                              "id": "b",
                              "text": "ears"
                    },
                    {
                              "id": "c",
                              "text": "nose"
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
                              "statement": "Ears = hearing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ears = hearing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**ears**",
          "commonErrors": [
                    "Picks wrong part."
          ]
},
        },
        {
          id: "spk-u7-senses-body-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a chart matching all five senses to their body parts. For each, give an example of what you notice with it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Senses + body",
                              "statement": "Match all 5 + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Matches all 5 senses.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Gives example for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Eyes see colors, ears hear music, nose smells flowers, tongue tastes food, skin feels soft.'**",
          "commonErrors": [
                    "Missing senses.",
                    "No examples."
          ]
},
        },
        {
          id: "spk-u7-senses-body-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Eye\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Body part for hearing."
                    },
                    {
                              "id": "b",
                              "text": "Body part for sight."
                    },
                    {
                              "id": "c",
                              "text": "Body part for smell."
                    },
                    {
                              "id": "d",
                              "text": "Body part for taste."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Eye\" means Body part for sight."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Eye\" means Body part for sight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Eye** = Body part for sight.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u7-senses-body-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ear\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Body part for smell."
                    },
                    {
                              "id": "b",
                              "text": "Body part for taste."
                    },
                    {
                              "id": "c",
                              "text": "Body part for touch."
                    },
                    {
                              "id": "d",
                              "text": "Body part for hearing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ear\" means Body part for hearing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ear\" means Body part for hearing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ear** = Body part for hearing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u7-senses-body-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Nose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Body part for taste."
                    },
                    {
                              "id": "b",
                              "text": "Body part for smell."
                    },
                    {
                              "id": "c",
                              "text": "Body part for touch."
                    },
                    {
                              "id": "d",
                              "text": "Way we notice the world."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Nose\" means Body part for smell."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Nose\" means Body part for smell.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Nose** = Body part for smell.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
