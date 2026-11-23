import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "s1-u2-lesson-2-4",
  code: "2-4",
  title: "Animal Habitats",
  goal: "I CAN describe where animals live and why.",
  standards: ["1-LS1-2"],
  vocabulary: [
    { term: "Habitat", definition: "Where an animal lives." },
    { term: "Environment", definition: "Surroundings of habitat." },
    { term: "Land", definition: "Terrestrial habitat." },
    { term: "Water", definition: "Aquatic habitat." },
    { term: "Forest", definition: "Trees habitat." },
    { term: "Desert", definition: "Dry habitat." },
    { term: "Needs", definition: "What habitat provides." },
    { term: "Adapt", definition: "Fit the environment." },
  ],
  concepts: [
    {
      id: "s1-u2-animal-habitats",
      title: "Animal habitats",
      skill: "Animals live in habitats that provide their needs — food, water, shelter, air.",
      lesson: {
        sections: [
          {
            heading: "Where animals live",
            body: "A **habitat** is where an animal lives. It provides the animal's **needs**: food, water, shelter, air. Different animals live in different **environments**.",
          },
          {
            heading: "Habitat fits needs",
            body: "An animal's habitat **fits** its needs — a fish lives in **water** (needs water), a camel lives in the **desert** (can go long without water).",
          },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "Environment that provides animal's needs." },
        ],
        workedExample: {
          problem: "Why does a fish live in water?",
          solution: "Fish live in water because they need water to breathe and swim — it's their habitat.",
        },
      },
      questions: [
        {
          id: "s1-u2-animal-habitats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'habitat' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an animal"
                    },
                    {
                              "id": "b",
                              "text": "where an animal lives"
                    },
                    {
                              "id": "c",
                              "text": "food"
                    },
                    {
                              "id": "d",
                              "text": "a body part"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Habitat = where animal lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat = where animal lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**where animal lives**",
          "commonErrors": [
                    "Confuses with animal/food."
          ]
},
        },
        {
          id: "s1-u2-animal-habitats-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A habitat provides...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nothing"
                    },
                    {
                              "id": "b",
                              "text": "the animal's needs like food, water, shelter"
                    },
                    {
                              "id": "c",
                              "text": "only toys"
                    },
                    {
                              "id": "d",
                              "text": "only pictures"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Habitat provides needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat provides needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**provides needs**",
          "commonErrors": [
                    "Thinks habitat is empty."
          ]
},
        },
        {
          id: "s1-u2-animal-habitats-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose an animal. Describe its habitat and explain why it lives there.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat",
                              "statement": "Habitat + why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes habitat + reason.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Fish lives in water because it needs water to breathe.'**",
          "commonErrors": [
                    "Wrong habitat.",
                    "No reason."
          ]
},
        },
        {
          id: "s1-u2-animal-habitats-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which animal lives in a desert habitat?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fish"
                    },
                    {
                              "id": "b",
                              "text": "camel"
                    },
                    {
                              "id": "c",
                              "text": "polar bear"
                    },
                    {
                              "id": "d",
                              "text": "penguin"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Camels live in deserts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Camels live in deserts.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**camel**",
          "commonErrors": [
                    "Picks water/cold animal."
          ]
},
        },
        {
          id: "s1-u2-animal-habitats-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the habitats of two different animals. How does each habitat meet the animal's needs?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitats",
                              "statement": "Two habitats + needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes two habitats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains how each meets needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**e.g., 'Fish in water (breathes water); bird in nest (shelter).'**",
          "commonErrors": [
                    "Same habitat for both.",
                    "No needs explained."
          ]
},
        },
        {
          id: "s1-u2-animal-habitats-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Habitat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Surroundings of habitat."
                    },
                    {
                              "id": "b",
                              "text": "Where an animal lives."
                    },
                    {
                              "id": "c",
                              "text": "Terrestrial habitat."
                    },
                    {
                              "id": "d",
                              "text": "Aquatic habitat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Habitat\" means Where an animal lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Habitat\" means Where an animal lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Habitat** = Where an animal lives.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animal-habitats-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Environment\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Terrestrial habitat."
                    },
                    {
                              "id": "b",
                              "text": "Aquatic habitat."
                    },
                    {
                              "id": "c",
                              "text": "Trees habitat."
                    },
                    {
                              "id": "d",
                              "text": "Surroundings of habitat."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Environment\" means Surroundings of habitat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Environment\" means Surroundings of habitat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Environment** = Surroundings of habitat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s1-u2-animal-habitats-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Land\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Aquatic habitat."
                    },
                    {
                              "id": "b",
                              "text": "Terrestrial habitat."
                    },
                    {
                              "id": "c",
                              "text": "Trees habitat."
                    },
                    {
                              "id": "d",
                              "text": "Dry habitat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Land\" means Terrestrial habitat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Land\" means Terrestrial habitat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Land** = Terrestrial habitat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
