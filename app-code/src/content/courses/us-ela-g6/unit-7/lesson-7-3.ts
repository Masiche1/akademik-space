import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ela6-u7-lesson-7-3",
  code: "7-3",
  title: "Figurative Language",
  goal: "I CAN identify and analyze figurative language.",
  standards: ["L.6.5"],
  vocabulary: [
    { term: "Figurative", definition: "Not literal." },
    { term: "Metaphor", definition: "Is/are comparison." },
    { term: "Simile", definition: "Like/as comparison." },
    { term: "Personification", definition: "Human traits to non-human." },
    { term: "Hyperbole", definition: "Exaggeration." },
    { term: "Alliteration", definition: "Same sound." },
    { term: "Imagery", definition: "Sensory details." },
    { term: "Literal", definition: "Actual meaning." },
  ],
  concepts: [
    {
      id: "ela6-u7-figurative-language",
      title: "Figurative language",
      skill: "Identify and analyze metaphors, similes, personification and other figurative devices.",
      lesson: {
        sections: [
          {
            heading: "Not literal",
            body: "**Figurative language** means something other than the literal meaning — it creates images and emotions.",
          },
          {
            heading: "Types",
            body: "**Metaphor**: 'Life is a journey.' **Simile**: 'as brave as a lion.' **Personification**: 'The wind whispered.' **Hyperbole**: 'I'm so hungry I could eat a horse.'",
          },
        ],
        keyFormulas: [
          { name: "Figurative", statement: "Metaphor + simile + personification + hyperbole = imagery." },
        ],
        workedExample: {
          problem: "Identify the figurative language: 'The stars danced in the sky.'",
          solution: "**Personification** — stars don't literally dance; giving human action to non-human.",
        },
      },
      questions: [
        {
          id: "ela6-u7-figurative-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'metaphor' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "like comparison"
                    },
                    {
                              "id": "b",
                              "text": "direct comparison using is/are"
                    },
                    {
                              "id": "c",
                              "text": "exaggeration"
                    },
                    {
                              "id": "d",
                              "text": "same sound"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Direct comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Direct comparison.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "direct comparison using is/are",
          "commonErrors": [
                    "Confuses with simile."
          ]
},
        },
        {
          id: "ela6-u7-figurative-language-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Simile' uses...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is/are"
                    },
                    {
                              "id": "b",
                              "text": "like or as"
                    },
                    {
                              "id": "c",
                              "text": "exaggeration"
                    },
                    {
                              "id": "d",
                              "text": "personification"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Like or as."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Like or as.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "like or as",
          "commonErrors": [
                    "Confuses with metaphor."
          ]
},
        },
        {
          id: "ela6-u7-figurative-language-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify the figurative language in these: 'Her smile was a sunrise' and 'The thunder grumbled.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Figurative",
                              "statement": "Metaphor + personification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies both.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**'Smile was a sunrise' = metaphor; 'Thunder grumbled' = personification.**",
          "commonErrors": [
                    "Wrong identifications.",
                    "Missing one."
          ]
},
        },
        {
          id: "ela6-u7-figurative-language-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Personification' gives...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "human traits to non-human"
                    },
                    {
                              "id": "b",
                              "text": "animals human traits only"
                    },
                    {
                              "id": "c",
                              "text": "objects animal traits"
                    },
                    {
                              "id": "d",
                              "text": "people object traits"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Human traits to non-human."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Human traits to non-human.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "human traits to non-human",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u7-figurative-language-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify a figurative device in a text and explain its effect on the reader.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Figurative",
                              "statement": "Device + effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies device.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains effect.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Metaphor: 'Time is money' — emphasizes how valuable time is.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No effect explained."
          ]
},
        },
        {
          id: "ela6-u7-figurative-language-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Figurative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Is/are comparison."
                    },
                    {
                              "id": "b",
                              "text": "Not literal."
                    },
                    {
                              "id": "c",
                              "text": "Like/as comparison."
                    },
                    {
                              "id": "d",
                              "text": "Human traits to non-human."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Figurative\" means Not literal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Figurative\" means Not literal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Figurative** = Not literal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-figurative-language-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Metaphor\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Like/as comparison."
                    },
                    {
                              "id": "b",
                              "text": "Human traits to non-human."
                    },
                    {
                              "id": "c",
                              "text": "Exaggeration."
                    },
                    {
                              "id": "d",
                              "text": "Is/are comparison."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Metaphor\" means Is/are comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Metaphor\" means Is/are comparison.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Metaphor** = Is/are comparison.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-figurative-language-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Simile\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Human traits to non-human."
                    },
                    {
                              "id": "b",
                              "text": "Like/as comparison."
                    },
                    {
                              "id": "c",
                              "text": "Exaggeration."
                    },
                    {
                              "id": "d",
                              "text": "Same sound."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Simile\" means Like/as comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Simile\" means Like/as comparison.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Simile** = Like/as comparison.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
