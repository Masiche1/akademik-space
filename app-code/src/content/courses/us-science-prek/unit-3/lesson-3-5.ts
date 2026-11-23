import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "spk-u3-lesson-3-5",
  code: "3-5",
  title: "Habitats",
  goal: "I CAN describe where animals live and why.",
  standards: ["ELOF-PK.SCI.HABITAT.1"],
  vocabulary: [
    { term: "Habitat", definition: "The place where an animal lives." },
    { term: "Forest", definition: "Habitat with many trees." },
    { term: "Ocean", definition: "Habitat with salt water." },
    { term: "Desert", definition: "Dry, sandy habitat." },
    { term: "Pond", definition: "Fresh water habitat." },
    { term: "Adapt", definition: "Change to fit habitat." },
  ],
  concepts: [
    {
      id: "spk-u3-habitats",
      title: "Habitats",
      skill: "Describe different habitats and why animals live there.",
      lesson: {
        sections: [
          {
            heading: "What is a habitat?",
            body: "A **habitat** is the place where an animal lives — its home. Different animals live in different habitats: fish in water, birds in trees, bears in forests.",
          },
          {
            heading: "Habitat provides needs",
            body: "A habitat provides what an animal **needs**: food, water, shelter, space. A desert has little water, so desert animals are adapted to save water.",
          },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "The place an animal lives; provides food, water, shelter, space." },
        ],
        workedExample: {
          problem: "Where does a fish live? Why?",
          solution: "A fish lives in **water** — its habitat provides the water it needs to breathe and swim.",
        },
      },
      questions: [
        {
          id: "spk-u3-habitats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'habitat' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a toy"
                    },
                    {
                              "id": "b",
                              "text": "the place where an animal lives"
                    },
                    {
                              "id": "c",
                              "text": "a food"
                    },
                    {
                              "id": "d",
                              "text": "a disease"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Habitat = the place where an animal lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat = the place where an animal lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Where animal lives**",
          "commonErrors": [
                    "Confuses habitat with food."
          ]
},
        },
        {
          id: "spk-u3-habitats-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which habitat has the least water?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ocean"
                    },
                    {
                              "id": "b",
                              "text": "pond"
                    },
                    {
                              "id": "c",
                              "text": "desert"
                    },
                    {
                              "id": "d",
                              "text": "river"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Desert is the driest habitat — least water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Desert is the driest habitat — least water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**desert**",
          "commonErrors": [
                    "Picks a water habitat."
          ]
},
        },
        {
          id: "spk-u3-habitats-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name an animal and its habitat. Why does it live there?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat",
                              "statement": "Animal + habitat + reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names animal, habitat and reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Fish live in water because they need it to breathe.'**",
          "commonErrors": [
                    "Cannot name habitat.",
                    "No reason."
          ]
},
        },
        {
          id: "spk-u3-habitats-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A habitat provides animals with...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only toys"
                    },
                    {
                              "id": "b",
                              "text": "food, water, shelter and space"
                    },
                    {
                              "id": "c",
                              "text": "only air"
                    },
                    {
                              "id": "d",
                              "text": "nothing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Habitat provides all basic needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat provides all basic needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Food, water, shelter, space**",
          "commonErrors": [
                    "Thinks habitat provides little."
          ]
},
        },
        {
          id: "spk-u3-habitats-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two habitats (forest vs desert, ocean vs pond). What is the same? What is different? Which animals live in each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitats",
                              "statement": "Compare habitats + animals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compares two habitats.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names animals for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Both provide shelter/food; forest has trees/moisture, desert is dry; deer vs camel.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "No animals named."
          ]
},
        },
        {
          id: "spk-u3-habitats-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Habitat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Habitat with many trees."
                    },
                    {
                              "id": "b",
                              "text": "The place where an animal lives."
                    },
                    {
                              "id": "c",
                              "text": "Habitat with salt water."
                    },
                    {
                              "id": "d",
                              "text": "Dry, sandy habitat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Habitat\" means The place where an animal lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Habitat\" means The place where an animal lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Habitat** = The place where an animal lives.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-habitats-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Forest\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Habitat with salt water."
                    },
                    {
                              "id": "b",
                              "text": "Dry, sandy habitat."
                    },
                    {
                              "id": "c",
                              "text": "Fresh water habitat."
                    },
                    {
                              "id": "d",
                              "text": "Habitat with many trees."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Forest\" means Habitat with many trees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Forest\" means Habitat with many trees.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Forest** = Habitat with many trees.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-habitats-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ocean\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dry, sandy habitat."
                    },
                    {
                              "id": "b",
                              "text": "Habitat with salt water."
                    },
                    {
                              "id": "c",
                              "text": "Fresh water habitat."
                    },
                    {
                              "id": "d",
                              "text": "Change to fit habitat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ocean\" means Habitat with salt water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ocean\" means Habitat with salt water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ocean** = Habitat with salt water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
