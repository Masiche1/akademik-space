import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "spk-u8-lesson-8-2",
  code: "8-2",
  title: "Review: Living Things and Earth",
  goal: "I CAN describe plants, animals, habitats and earth/sky.",
  standards: ["ELOF-PK.SCI.REVIEW.2"],
  vocabulary: [
    { term: "Living", definition: "Grows, reproduces, needs." },
    { term: "Plant parts", definition: "Roots, stem, leaves, flowers." },
    { term: "Animal needs", definition: "Food, water, air, shelter." },
    { term: "Habitat", definition: "Where animal lives." },
    { term: "Sun", definition: "Our star." },
    { term: "Moon", definition: "Reflects sunlight." },
    { term: "Day/night", definition: "Earth rotates." },
  ],
  concepts: [
    {
      id: "spk-u8-review-life-earth",
      title: "Living things and earth review",
      skill: "Combine plants, animals, habitats and earth/sky concepts.",
      lesson: {
        sections: [
          {
            heading: "Life + earth",
            body: "Living things grow, reproduce and need food/water/air. Plants have parts (roots/leaves/flowers); animals need food/water/air/shelter and live in habitats. Earth rotates causing day/night; the sun gives light/heat; the moon reflects sunlight.",
          },
          {
            heading: "Connect it",
            body: "Plants make food using sunlight; animals eat plants; the sun powers everything; Earth's rotation gives us day/night.",
          },
        ],
        keyFormulas: [
          { name: "Review", statement: "Living things + habitats + earth/sky = understanding life on Earth." },
        ],
        workedExample: {
          problem: "How do the sun and plants help animals?",
          solution: "Sun gives light for photosynthesis; plants make food; animals eat plants for energy.",
        },
      },
      questions: [
        {
          id: "spk-u8-review-life-earth-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "The sun helps life on Earth by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "making rain only"
                    },
                    {
                              "id": "b",
                              "text": "giving light and heat for plants to make food"
                    },
                    {
                              "id": "c",
                              "text": "being a moon"
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
                              "statement": "Sun gives light/heat for photosynthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sun gives light/heat for photosynthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Light + heat for plants**",
          "commonErrors": [
                    "Thinks sun does nothing for life."
          ]
},
        },
        {
          id: "spk-u8-review-life-earth-q2",
          difficulty: "foundation",
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
                              "statement": "Habitat provides all needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Habitat provides all needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**food/water/shelter/space**",
          "commonErrors": [
                    "Thinks habitat provides little."
          ]
},
        },
        {
          id: "spk-u8-review-life-earth-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe one plant part and one animal need. Then explain how the sun connects them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life + earth",
                              "statement": "Plant part + animal need + sun role."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names plant part + animal need.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains sun's role.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Leaf makes food; animal needs food; sun powers leaf's food-making.'**",
          "commonErrors": [
                    "Cannot connect.",
                    "Wrong info."
          ]
},
        },
        {
          id: "spk-u8-review-life-earth-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Day and night happen because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the sun moves"
                    },
                    {
                              "id": "b",
                              "text": "Earth rotates on its axis"
                    },
                    {
                              "id": "c",
                              "text": "the moon blocks sun"
                    },
                    {
                              "id": "d",
                              "text": "clouds cover sky"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Earth rotates, causing day/night."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth rotates, causing day/night.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Earth rotates**",
          "commonErrors": [
                    "Thinks sun moves."
          ]
},
        },
        {
          id: "spk-u8-review-life-earth-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Create a 'life on Earth' diagram: draw sun, Earth, a plant, and an animal. Show arrows for: sunlight -> plant food -> animal energy. Label everything.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life + earth",
                              "statement": "Diagram energy flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Draws all elements.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shows energy flow correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Sun -> plant (photosynthesis) -> animal (eats plant)'**",
          "commonErrors": [
                    "Missing elements.",
                    "Wrong flow."
          ]
},
        },
        {
          id: "spk-u8-review-life-earth-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Living\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Roots, stem, leaves, flowers."
                    },
                    {
                              "id": "b",
                              "text": "Grows, reproduces, needs."
                    },
                    {
                              "id": "c",
                              "text": "Food, water, air, shelter."
                    },
                    {
                              "id": "d",
                              "text": "Where animal lives."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Living\" means Grows, reproduces, needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Living\" means Grows, reproduces, needs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Living** = Grows, reproduces, needs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-life-earth-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plant parts\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Food, water, air, shelter."
                    },
                    {
                              "id": "b",
                              "text": "Where animal lives."
                    },
                    {
                              "id": "c",
                              "text": "Our star."
                    },
                    {
                              "id": "d",
                              "text": "Roots, stem, leaves, flowers."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Plant parts\" means Roots, stem, leaves, flowers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plant parts\" means Roots, stem, leaves, flowers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Plant parts** = Roots, stem, leaves, flowers.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u8-review-life-earth-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Animal needs\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where animal lives."
                    },
                    {
                              "id": "b",
                              "text": "Food, water, air, shelter."
                    },
                    {
                              "id": "c",
                              "text": "Our star."
                    },
                    {
                              "id": "d",
                              "text": "Reflects sunlight."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Animal needs\" means Food, water, air, shelter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Animal needs\" means Food, water, air, shelter.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Animal needs** = Food, water, air, shelter.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
