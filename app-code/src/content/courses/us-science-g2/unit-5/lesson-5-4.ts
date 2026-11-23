import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "sci2-u5-lesson-5-4",
  code: "5-4",
  title: "Animal Habitats",
  goal: "I CAN describe different habitats and how animals adapt.",
  standards: ["NGSS 2-LS4-1"],
  vocabulary: [
    { term: "Habitat", definition: "Where animal lives." },
    { term: "Forest", definition: "Trees and plants." },
    { term: "Ocean", definition: "Water habitat." },
    { term: "Desert", definition: "Dry, hot habitat." },
    { term: "Arctic", definition: "Cold habitat." },
    { term: "Adapt", definition: "Change to survive." },
    { term: "Camouflage", definition: "Blend in." },
    { term: "Fur", definition: "Keeps warm." },
    { term: "Blubber", definition: "Fat for warmth." },
    { term: "Migration", definition: "Move to better habitat." },
  ],
  concepts: [
    {
      id: "sci2-u5-animal-habitats",
      title: "Animal habitats",
      skill: "Describe different habitats and how animals adapt to survive.",
      lesson: {
        sections: [
          {
            heading: "Different habitats",
            body: "Animals live in different **habitats**: **forests**, **oceans**, **deserts**, **arctic** regions. Each habitat has different conditions.",
          },
          {
            heading: "Adaptations",
            body: "Animals **adapt** to their habitat: polar bears have **fur** and **blubber** for cold; camels store water for deserts; fish have **gills** for water.",
          },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "Conditions -> adaptations = survival." },
        ],
        workedExample: {
          problem: "How does a polar bear survive in cold habitats?",
          solution: "It has thick **fur** and **blubber** (fat) to stay warm.",
        },
      },
      questions: [
        {
          id: "sci2-u5-animal-habitats-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'habitat' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a cage"
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
                              "text": "water"
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
          "finalAnswer": "**where it lives**",
          "commonErrors": [
                    "Confuses with needs."
          ]
},
        },
        {
          id: "sci2-u5-animal-habitats-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Polar bears survive in cold places because they have...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "feathers"
                    },
                    {
                              "id": "b",
                              "text": "fur and blubber"
                    },
                    {
                              "id": "c",
                              "text": "scales"
                    },
                    {
                              "id": "d",
                              "text": "gills"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fur + blubber = warmth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fur + blubber = warmth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fur + blubber**",
          "commonErrors": [
                    "Picks wrong adaptation."
          ]
},
        },
        {
          id: "sci2-u5-animal-habitats-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe one animal's habitat and one adaptation that helps it survive.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat",
                              "statement": "Habitat + adaptation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes habitat + adaptation.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Fish: ocean; gills for breathing underwater.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "No adaptation."
          ]
},
        },
        {
          id: "sci2-u5-animal-habitats-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Camouflage' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a color"
                    },
                    {
                              "id": "b",
                              "text": "blending in with surroundings"
                    },
                    {
                              "id": "c",
                              "text": "a sound"
                    },
                    {
                              "id": "d",
                              "text": "a size"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Camouflage = blend in."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Camouflage = blend in.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**blend in**",
          "commonErrors": [
                    "Confuses with color."
          ]
},
        },
        {
          id: "sci2-u5-animal-habitats-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two animals in different habitats. How do their adaptations differ?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat",
                              "statement": "Two habitats + adaptations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes first animal.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes second animal.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Fish: fins for swimming. Camel: humps for water storage.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Same habitat."
          ]
},
        },
        {
          id: "sci2-u5-animal-habitats-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Habitat\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Trees and plants."
                    },
                    {
                              "id": "b",
                              "text": "Where animal lives."
                    },
                    {
                              "id": "c",
                              "text": "Water habitat."
                    },
                    {
                              "id": "d",
                              "text": "Dry, hot habitat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Habitat\" means Where animal lives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Habitat\" means Where animal lives.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Habitat** = Where animal lives.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animal-habitats-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Forest\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water habitat."
                    },
                    {
                              "id": "b",
                              "text": "Dry, hot habitat."
                    },
                    {
                              "id": "c",
                              "text": "Cold habitat."
                    },
                    {
                              "id": "d",
                              "text": "Trees and plants."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Forest\" means Trees and plants."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Forest\" means Trees and plants.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Forest** = Trees and plants.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animal-habitats-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ocean\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dry, hot habitat."
                    },
                    {
                              "id": "b",
                              "text": "Water habitat."
                    },
                    {
                              "id": "c",
                              "text": "Cold habitat."
                    },
                    {
                              "id": "d",
                              "text": "Change to survive."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ocean\" means Water habitat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ocean\" means Water habitat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ocean** = Water habitat.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
