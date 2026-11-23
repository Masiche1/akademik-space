import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "sci3-u2-lesson-2-3",
  code: "2-3",
  title: "Where Animals Live",
  goal: "I CAN describe where animals live and what they need there.",
  standards: ["LS1.A"],
  vocabulary: [
    { term: "Habitat", definition: "Where animal lives." },
    { term: "Forest", definition: "Trees and plants." },
    { term: "Ocean", definition: "Salt water." },
    { term: "Desert", definition: "Dry and hot." },
    { term: "Arctic", definition: "Cold and icy." },
    { term: "Wetland", definition: "Marshy area." },
    { term: "Burrow", definition: "Hole in ground." },
    { term: "Nest", definition: "Bird's home." },
  ],
  concepts: [
    {
      id: "sci3-u2-animal-homes",
      title: "Where animals live",
      skill: "Describe habitats: forest, ocean, desert, arctic, wetland.",
      lesson: {
        sections: [
          {
            heading: "Animals live in habitats",
            body: "Every animal has a **habitat** — a place where it gets food, water, shelter and air. **Forests**, **oceans**, **deserts**, **arctic**, **wetlands** are habitats.",
          },
          {
            heading: "Adapted to home",
            body: "Animals are **adapted** to their habitat — polar bears have thick fur for cold, camels store water for desert.",
          },
        ],
        keyFormulas: [
          { name: "Habitat", statement: "Place with food + water + shelter + air = animal's home." },
        ],
        workedExample: {
          problem: "Where does a polar bear live? Why is it adapted there?",
          solution: "Polar bears live in the **arctic** — they have thick fur and fat for cold.",
        },
      },
      questions: [
        {
          id: "sci3-u2-animal-homes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'habitat' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a food"
                    },
                    {
                              "id": "b",
                              "text": "where an animal lives"
                    },
                    {
                              "id": "c",
                              "text": "a toy"
                    },
                    {
                              "id": "d",
                              "text": "a cage"
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
          "finalAnswer": "where an animal lives",
          "commonErrors": [
                    "Thinks it's a cage."
          ]
},
        },
        {
          id: "sci3-u2-animal-homes-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which animal lives in the ocean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "polar bear"
                    },
                    {
                              "id": "b",
                              "text": "fish"
                    },
                    {
                              "id": "c",
                              "text": "camel"
                    },
                    {
                              "id": "d",
                              "text": "eagle"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Fish live in ocean/water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fish live in ocean/water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "fish",
          "commonErrors": [
                    "Thinks polar bear lives in ocean."
          ]
},
        },
        {
          id: "sci3-u2-animal-homes-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name a habitat and an animal that lives there. Explain why it is adapted.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat",
                              "statement": "Habitat + animal + adaptation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names habitat + animal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains adaptation.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Desert: camel — stores water, has hump for fat.'**",
          "commonErrors": [
                    "Cannot name habitat.",
                    "No adaptation."
          ]
},
        },
        {
          id: "sci3-u2-animal-homes-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Adapted' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "changed randomly"
                    },
                    {
                              "id": "b",
                              "text": "suited to its habitat"
                    },
                    {
                              "id": "c",
                              "text": "moved away"
                    },
                    {
                              "id": "d",
                              "text": "eaten"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Adapted = suited to habitat."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adapted = suited to habitat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "suited to its habitat",
          "commonErrors": [
                    "Thinks it means moved."
          ]
},
        },
        {
          id: "sci3-u2-animal-homes-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe two different habitats and one animal adapted to each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Habitat",
                              "statement": "2 habitats + 2 animals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes 2 habitats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names adapted animal for each.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Ocean: fish (gills). Desert: camel (stores water).'**",
          "commonErrors": [
                    "Cannot describe habitats.",
                    "No adaptations."
          ]
},
        },
        {
          id: "sci3-u2-animal-homes-q6",
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
                              "text": "Salt water."
                    },
                    {
                              "id": "d",
                              "text": "Dry and hot."
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
          id: "sci3-u2-animal-homes-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Forest\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Salt water."
                    },
                    {
                              "id": "b",
                              "text": "Dry and hot."
                    },
                    {
                              "id": "c",
                              "text": "Cold and icy."
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
          id: "sci3-u2-animal-homes-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Ocean\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dry and hot."
                    },
                    {
                              "id": "b",
                              "text": "Salt water."
                    },
                    {
                              "id": "c",
                              "text": "Cold and icy."
                    },
                    {
                              "id": "d",
                              "text": "Marshy area."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Ocean\" means Salt water."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Ocean\" means Salt water.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Ocean** = Salt water.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
