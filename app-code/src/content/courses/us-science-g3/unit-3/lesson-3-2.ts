import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "sci3-u3-lesson-3-2",
  code: "3-2",
  title: "Animal Life Cycles",
  goal: "I CAN describe animal life cycles: birth, growth, adult, babies.",
  standards: ["LS1.B"],
  vocabulary: [
    { term: "Baby", definition: "Young animal." },
    { term: "Adult", definition: "Fully grown animal." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Egg", definition: "Where some animals start." },
    { term: "Pup", definition: "Baby dog." },
    { term: "Kitten", definition: "Baby cat." },
    { term: "Chick", definition: "Baby bird." },
    { term: "Larva", definition: "Early insect stage." },
  ],
  concepts: [
    {
      id: "sci3-u3-animal-cycles",
      title: "Animal life cycles",
      skill: "Describe how animals are born, grow to adults, and have babies.",
      lesson: {
        sections: [
          {
            heading: "Born, grow, reproduce",
            body: "Animals are **born** (some from **eggs**, some live birth), **grow** to **adults**, then **reproduce** (have babies) — like dogs have **pups**, cats have **kittens**, birds have **chicks**.",
          },
          {
            heading: "Different starts",
            body: "Some animals start as **eggs** (birds, fish, insects); others are born live (mammals like dogs, cats).",
          },
        ],
        keyFormulas: [
          { name: "Animal cycle", statement: "Born/egg -> baby -> grow -> adult -> babies -> repeat." },
        ],
        workedExample: {
          problem: "How does a dog life cycle start?",
          solution: "A dog is **born** (live birth) as a **pup**, grows to adult, then has pups.",
        },
      },
      questions: [
        {
          id: "sci3-u3-animal-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A baby dog is called a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "kitten"
                    },
                    {
                              "id": "b",
                              "text": "pup"
                    },
                    {
                              "id": "c",
                              "text": "chick"
                    },
                    {
                              "id": "d",
                              "text": "cub"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Baby dog = pup."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Baby dog = pup.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "pup",
          "commonErrors": [
                    "Thinks it's a kitten."
          ]
},
        },
        {
          id: "sci3-u3-animal-cycles-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which animals start as eggs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dogs"
                    },
                    {
                              "id": "b",
                              "text": "birds"
                    },
                    {
                              "id": "c",
                              "text": "cats"
                    },
                    {
                              "id": "d",
                              "text": "cows"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Birds lay eggs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Birds lay eggs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "birds",
          "commonErrors": [
                    "Thinks mammals lay eggs."
          ]
},
        },
        {
          id: "sci3-u3-animal-cycles-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe how a specific animal is born and grows. Include baby name and adult name.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal cycle",
                              "statement": "Born -> baby -> adult -> babies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes birth + growth.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**e.g., 'A bird hatches from an egg as a chick, grows to adult bird, lays eggs.'**",
          "commonErrors": [
                    "Cannot describe.",
                    "Wrong animal."
          ]
},
        },
        {
          id: "sci3-u3-animal-cycles-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'adult' animal is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a baby"
                    },
                    {
                              "id": "b",
                              "text": "a fully grown animal"
                    },
                    {
                              "id": "c",
                              "text": "an egg"
                    },
                    {
                              "id": "d",
                              "text": "a larva"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Adult = fully grown."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adult = fully grown.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "a fully grown animal",
          "commonErrors": [
                    "Thinks adult is baby."
          ]
},
        },
        {
          id: "sci3-u3-animal-cycles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two animal life cycles: one that starts as egg, one that is born live.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal cycles",
                              "statement": "Egg-start + live-birth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes egg-start animal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes live-birth animal.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Bird: egg->chick->adult. Dog: born->pup->adult->pups.'**",
          "commonErrors": [
                    "Only one type.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "sci3-u3-animal-cycles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Baby\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Fully grown animal."
                    },
                    {
                              "id": "b",
                              "text": "Young animal."
                    },
                    {
                              "id": "c",
                              "text": "Get bigger."
                    },
                    {
                              "id": "d",
                              "text": "Where some animals start."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Baby\" means Young animal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Baby\" means Young animal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Baby** = Young animal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-animal-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adult\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Get bigger."
                    },
                    {
                              "id": "b",
                              "text": "Where some animals start."
                    },
                    {
                              "id": "c",
                              "text": "Baby dog."
                    },
                    {
                              "id": "d",
                              "text": "Fully grown animal."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Adult\" means Fully grown animal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adult\" means Fully grown animal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adult** = Fully grown animal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-animal-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Grow\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where some animals start."
                    },
                    {
                              "id": "b",
                              "text": "Get bigger."
                    },
                    {
                              "id": "c",
                              "text": "Baby dog."
                    },
                    {
                              "id": "d",
                              "text": "Baby cat."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Grow\" means Get bigger."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Grow\" means Get bigger.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Grow** = Get bigger.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
