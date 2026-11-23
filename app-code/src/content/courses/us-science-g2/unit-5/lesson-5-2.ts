import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "sci2-u5-lesson-5-2",
  code: "5-2",
  title: "Animal Groups",
  goal: "I CAN describe how animals are grouped by traits.",
  standards: ["NGSS 2-LS4-1"],
  vocabulary: [
    { term: "Group", definition: "Put together by traits." },
    { term: "Mammal", definition: "Has fur, feeds babies milk." },
    { term: "Bird", definition: "Has feathers, lays eggs." },
    { term: "Reptile", definition: "Has scales, cold-blooded." },
    { term: "Amphibian", definition: "Lives in water and land." },
    { term: "Fish", definition: "Lives in water, has fins." },
    { term: "Insect", definition: "Six legs, three body parts." },
    { term: "Trait", definition: "Characteristic." },
    { term: "Classify", definition: "Sort into groups." },
    { term: "Vertebrate", definition: "Has backbone." },
  ],
  concepts: [
    {
      id: "sci2-u5-animal-groups",
      title: "Animal groups",
      skill: "Describe how animals are grouped by traits: mammals, birds, reptiles, amphibians, fish, insects.",
      lesson: {
        sections: [
          {
            heading: "Grouping by traits",
            body: "Animals are **grouped** by **traits** (characteristics): **mammals** (fur, milk), **birds** (feathers, eggs), **reptiles** (scales), **amphibians** (water+land), **fish** (fins, water), **insects** (6 legs).",
          },
          {
            heading: "Why group?",
            body: "Grouping helps us **classify** animals and understand how they are **similar** or **different**.",
          },
        ],
        keyFormulas: [
          { name: "Animal groups", statement: "Mammal + bird + reptile + amphibian + fish + insect = classification." },
        ],
        workedExample: {
          problem: "Is a frog a mammal, bird, reptile, amphibian or fish?",
          solution: "It's an **amphibian** — lives in water and on land.",
        },
      },
      questions: [
        {
          id: "sci2-u5-animal-groups-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which animal is a mammal?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "eagle"
                    },
                    {
                              "id": "b",
                              "text": "dog"
                    },
                    {
                              "id": "c",
                              "text": "snake"
                    },
                    {
                              "id": "d",
                              "text": "frog"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Dog = mammal (fur, milk)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dog = mammal (fur, milk).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**dog**",
          "commonErrors": [
                    "Picks non-mammal."
          ]
},
        },
        {
          id: "sci2-u5-animal-groups-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Birds are characterized by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "fur"
                    },
                    {
                              "id": "b",
                              "text": "feathers and laying eggs"
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
                              "statement": "Birds have feathers + eggs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Birds have feathers + eggs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**feathers + eggs**",
          "commonErrors": [
                    "Picks wrong traits."
          ]
},
        },
        {
          id: "sci2-u5-animal-groups-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Classify these animals: dog, eagle, snake, frog, goldfish, ant.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal groups",
                              "statement": "Classify by traits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Classifies all six correctly.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog: mammal. Eagle: bird. Snake: reptile. Frog: amphibian. Fish: fish. Ant: insect.'**",
          "commonErrors": [
                    "Wrong classifications.",
                    "Cannot classify."
          ]
},
        },
        {
          id: "sci2-u5-animal-groups-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'amphibian' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only in water"
                    },
                    {
                              "id": "b",
                              "text": "lives in water and on land"
                    },
                    {
                              "id": "c",
                              "text": "has feathers"
                    },
                    {
                              "id": "d",
                              "text": "has fur"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Amphibian = water + land."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Amphibian = water + land.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**water + land**",
          "commonErrors": [
                    "Confuses with fish."
          ]
},
        },
        {
          id: "sci2-u5-animal-groups-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Pick two animals from different groups. Describe how their traits differ.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal groups",
                              "statement": "Different groups + traits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names two animals.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Describes trait differences.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog (mammal): fur. Eagle (bird): feathers.'**",
          "commonErrors": [
                    "Same group.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "sci2-u5-animal-groups-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Has fur, feeds babies milk."
                    },
                    {
                              "id": "b",
                              "text": "Put together by traits."
                    },
                    {
                              "id": "c",
                              "text": "Has feathers, lays eggs."
                    },
                    {
                              "id": "d",
                              "text": "Has scales, cold-blooded."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Group\" means Put together by traits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means Put together by traits.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group** = Put together by traits.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animal-groups-q7",
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
                              "text": "Has scales, cold-blooded."
                    },
                    {
                              "id": "c",
                              "text": "Lives in water and land."
                    },
                    {
                              "id": "d",
                              "text": "Has fur, feeds babies milk."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mammal\" means Has fur, feeds babies milk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mammal\" means Has fur, feeds babies milk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mammal** = Has fur, feeds babies milk.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animal-groups-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bird\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Has scales, cold-blooded."
                    },
                    {
                              "id": "b",
                              "text": "Has feathers, lays eggs."
                    },
                    {
                              "id": "c",
                              "text": "Lives in water and land."
                    },
                    {
                              "id": "d",
                              "text": "Lives in water, has fins."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
