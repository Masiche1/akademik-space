import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "sci3-u2-lesson-2-2",
  code: "2-2",
  title: "Groups of Animals",
  goal: "I CAN describe how animals are grouped by their traits.",
  standards: ["LS1.A", "LS1.B"],
  vocabulary: [
    { term: "Mammal", definition: "Warm-blooded, has fur, milk." },
    { term: "Bird", definition: "Has feathers, lays eggs." },
    { term: "Reptile", definition: "Cold-blooded, scales." },
    { term: "Amphibian", definition: "Lives water and land." },
    { term: "Fish", definition: "Lives in water, scales." },
    { term: "Insect", definition: "Six legs, three body parts." },
    { term: "Vertebrate", definition: "Has backbone." },
    { term: "Invertebrate", definition: "No backbone." },
  ],
  concepts: [
    {
      id: "sci3-u2-animal-groups",
      title: "Groups of animals",
      skill: "Describe how animals are grouped: mammals, birds, reptiles, amphibians, fish, insects.",
      lesson: {
        sections: [
          {
            heading: "Animals come in groups",
            body: "Animals are grouped by shared traits: **mammals** (fur, milk), **birds** (feathers, eggs), **reptiles** (scales), **amphibians** (water+land), **fish** (water, scales), **insects** (6 legs).",
          },
          {
            heading: "Backbone or not",
            body: "**Vertebrates** have a backbone (most animals); **invertebrates** don't (insects, worms).",
          },
        ],
        keyFormulas: [
          { name: "Animal groups", statement: "Mammals + birds + reptiles + amphibians + fish + insects = animal groups." },
        ],
        workedExample: {
          problem: "Is a frog a mammal, bird, reptile or amphibian?",
          solution: "A frog is an **amphibian** — it lives both in water and on land.",
        },
      },
      questions: [
        {
          id: "sci3-u2-animal-groups-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mammal is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a bird"
                    },
                    {
                              "id": "b",
                              "text": "warm-blooded with fur and milk"
                    },
                    {
                              "id": "c",
                              "text": "a reptile"
                    },
                    {
                              "id": "d",
                              "text": "a fish"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Mammal = fur + milk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mammal = fur + milk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "warm-blooded with fur and milk",
          "commonErrors": [
                    "Thinks birds are mammals."
          ]
},
        },
        {
          id: "sci3-u2-animal-groups-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which animal is an amphibian?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dog"
                    },
                    {
                              "id": "b",
                              "text": "frog"
                    },
                    {
                              "id": "c",
                              "text": "eagle"
                    },
                    {
                              "id": "d",
                              "text": "snake"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Frog = amphibian."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Frog = amphibian.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "frog",
          "commonErrors": [
                    "Thinks snake is amphibian."
          ]
},
        },
        {
          id: "sci3-u2-animal-groups-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name two animal groups and give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal groups",
                              "statement": "2 groups + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 groups + examples.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'Mammals: dog; birds: eagle.'**",
          "commonErrors": [
                    "Cannot name groups.",
                    "No examples."
          ]
},
        },
        {
          id: "sci3-u2-animal-groups-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'insect' has...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "four legs"
                    },
                    {
                              "id": "b",
                              "text": "six legs and three body parts"
                    },
                    {
                              "id": "c",
                              "text": "a backbone"
                    },
                    {
                              "id": "d",
                              "text": "feathers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Insects have 6 legs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insects have 6 legs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "six legs and three body parts",
          "commonErrors": [
                    "Thinks all animals have backbones."
          ]
},
        },
        {
          id: "sci3-u2-animal-groups-q5",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Classify these animals into groups: dog, eagle, snake, frog.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal groups",
                              "statement": "Mammal, bird, reptile, amphibian."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all 4.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Dog=mammal, eagle=bird, snake=reptile, frog=amphibian**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Cannot classify."
          ]
},
        },
        {
          id: "sci3-u2-animal-groups-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mammal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Has feathers, lays eggs."
                    },
                    {
                              "id": "b",
                              "text": "Warm-blooded, has fur, milk."
                    },
                    {
                              "id": "c",
                              "text": "Cold-blooded, scales."
                    },
                    {
                              "id": "d",
                              "text": "Lives water and land."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mammal\" means Warm-blooded, has fur, milk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mammal\" means Warm-blooded, has fur, milk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mammal** = Warm-blooded, has fur, milk.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animal-groups-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bird\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Cold-blooded, scales."
                    },
                    {
                              "id": "b",
                              "text": "Lives water and land."
                    },
                    {
                              "id": "c",
                              "text": "Lives in water, scales."
                    },
                    {
                              "id": "d",
                              "text": "Has feathers, lays eggs."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bird\" means Has feathers, lays eggs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bird\" means Has feathers, lays eggs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bird** = Has feathers, lays eggs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u2-animal-groups-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reptile\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lives water and land."
                    },
                    {
                              "id": "b",
                              "text": "Cold-blooded, scales."
                    },
                    {
                              "id": "c",
                              "text": "Lives in water, scales."
                    },
                    {
                              "id": "d",
                              "text": "Six legs, three body parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Reptile\" means Cold-blooded, scales."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reptile\" means Cold-blooded, scales.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Reptile** = Cold-blooded, scales.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
