import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "epk-u4-lesson-4-2",
  code: "4-2",
  title: "Describe Things",
  goal: "I CAN use describing words (adjectives) to say what things are like.",
  standards: ["ELOF-PK.LL.VOCAB.2"],
  vocabulary: [
    { term: "Describe", definition: "Say what something is like." },
    { term: "Adjective", definition: "A describing word: big, red, soft." },
    { term: "Big", definition: "Large in size." },
    { term: "Soft", definition: "Not hard; gentle to touch." },
    { term: "Color", definition: "Red, blue, green... what color something is." },
  ],
  concepts: [
    {
      id: "epk-u4-describe-things",
      title: "Describing things",
      skill: "Use describing words to tell what things are like.",
      lesson: {
        sections: [
          {
            heading: "Describing words",
            body: "**Adjectives** describe things: big, small, red, soft, bumpy, smooth. 'The **red** ball is **bouncy**.' Describing words make our words clearer.",
          },
          {
            heading: "Use your senses",
            body: "Describe by how things look, feel, sound, taste and smell. 'The ice cream is **cold** and **sweet**.'",
          },
        ],
        keyFormulas: [
          { name: "Describe", statement: "Use adjectives: big, red, soft, bumpy, cold, sweet." },
        ],
        workedExample: {
          problem: "Describe a fluffy pillow.",
          solution: "The pillow is **soft**, **white**, and **fluffy**.",
        },
      },
      questions: [
        {
          id: "epk-u4-describe-things-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word describes a pillow that is gentle to touch?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "rough"
                    },
                    {
                              "id": "b",
                              "text": "soft"
                    },
                    {
                              "id": "c",
                              "text": "hard"
                    },
                    {
                              "id": "d",
                              "text": "loud"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Soft' means gentle to touch."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Soft' means gentle to touch.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**soft**",
          "commonErrors": [
                    "Picks 'rough'."
          ]
},
        },
        {
          id: "epk-u4-describe-things-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a describing word (adjective)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "run"
                    },
                    {
                              "id": "b",
                              "text": "red"
                    },
                    {
                              "id": "c",
                              "text": "jump"
                    },
                    {
                              "id": "d",
                              "text": "the"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'red' describes a color — an adjective."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'red' describes a color — an adjective.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**red**",
          "commonErrors": [
                    "Picks an action word."
          ]
},
        },
        {
          id: "epk-u4-describe-things-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe your favorite toy using two describing words.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Describe",
                              "statement": "Use 2 adjectives about the toy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses 2 correct describing words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'My teddy is soft and brown.'**",
          "commonErrors": [
                    "Only 1 word.",
                    "Words do not describe."
          ]
},
        },
        {
          id: "epk-u4-describe-things-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Bumpy' describes something that is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "smooth"
                    },
                    {
                              "id": "b",
                              "text": "covered in small bumps"
                    },
                    {
                              "id": "c",
                              "text": "flat"
                    },
                    {
                              "id": "d",
                              "text": "wet"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Bumpy' = covered in small bumps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Bumpy' = covered in small bumps.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Covered in bumps**",
          "commonErrors": [
                    "Confuses with 'smooth'."
          ]
},
        },
        {
          id: "epk-u4-describe-things-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe a banana using at least three describing words (color, shape, taste).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Describe",
                              "statement": "Use adjectives for color, shape, taste."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses 3 describing words.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Words correctly describe a banana.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'yellow, curved, sweet'**",
          "commonErrors": [
                    "Fewer than 3 words.",
                    "Wrong descriptions."
          ]
},
        },
        {
          id: "epk-u4-describe-things-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Describe\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A describing word: big, red, soft."
                    },
                    {
                              "id": "b",
                              "text": "Say what something is like."
                    },
                    {
                              "id": "c",
                              "text": "Large in size."
                    },
                    {
                              "id": "d",
                              "text": "Not hard; gentle to touch."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Describe\" means Say what something is like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Describe\" means Say what something is like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Describe** = Say what something is like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-describe-things-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adjective\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Large in size."
                    },
                    {
                              "id": "b",
                              "text": "Not hard; gentle to touch."
                    },
                    {
                              "id": "c",
                              "text": "Red, blue, green... what color something is."
                    },
                    {
                              "id": "d",
                              "text": "A describing word: big, red, soft."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Adjective\" means A describing word: big, red, soft."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adjective\" means A describing word: big, red, soft.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Adjective** = A describing word: big, red, soft.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-describe-things-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Big\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not hard; gentle to touch."
                    },
                    {
                              "id": "b",
                              "text": "Large in size."
                    },
                    {
                              "id": "c",
                              "text": "Red, blue, green... what color something is."
                    },
                    {
                              "id": "d",
                              "text": "Say what something is like."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Big\" means Large in size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Big\" means Large in size.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Big** = Large in size.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
