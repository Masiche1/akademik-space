import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "s0-u6-lesson-6-4",
  code: "6-4",
  title: "Animal Groups",
  goal: "I CAN sort animals into groups by how they are alike.",
  standards: ["K-LS1-1"],
  vocabulary: [
    { term: "Group", definition: "Things that are alike." },
    { term: "Sort", definition: "Put into groups." },
    { term: "Mammal", definition: "Animal with fur/hair that drinks milk." },
    { term: "Bird", definition: "Animal with feathers and wings." },
    { term: "Reptile", definition: "Animal with scales (snake, lizard)." },
    { term: "Fish", definition: "Animal that lives in water with fins." },
    { term: "Insect", definition: "Small animal with six legs." },
    { term: "Alike", definition: "Similar in some way." },
  ],
  concepts: [
    {
      id: "s0-u6-animal-groups",
      title: "Animal groups",
      skill: "Sort animals into groups (mammals, birds, reptiles, fish, insects) by features.",
      lesson: {
        sections: [
          {
            heading: "Group animals",
            body: "We can **group** animals by how they are **alike**. **Mammals** have fur/hair and drink milk (dogs, cats). **Birds** have feathers and wings. **Reptiles** have scales (snakes). **Fish** live in water with fins. **Insects** have six legs.",
          },
          {
            heading: "Sort by features",
            body: "To **sort**, look at features — fur? feathers? scales? fins? six legs? Each feature helps place the animal in a group.",
          },
        ],
        keyFormulas: [
          { name: "Animal groups", statement: "Mammals (fur/milk), Birds (feathers), Reptiles (scales), Fish (fins/water), Insects (6 legs)." },
        ],
        workedExample: {
          problem: "Is a dog a mammal, bird, reptile, fish or insect? Why?",
          solution: "**Mammal** — dogs have fur/hair and drink milk as puppies.",
        },
      },
      questions: [
        {
          id: "s0-u6-animal-groups-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Mammals are animals that...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "have feathers"
                    },
                    {
                              "id": "b",
                              "text": "have fur/hair and drink milk"
                    },
                    {
                              "id": "c",
                              "text": "have scales"
                    },
                    {
                              "id": "d",
                              "text": "have six legs"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Mammals = fur + milk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mammals = fur + milk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**fur + milk**",
          "commonErrors": [
                    "Picks wrong group."
          ]
},
        },
        {
          id: "s0-u6-animal-groups-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A snake is a...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mammal"
                    },
                    {
                              "id": "b",
                              "text": "reptile"
                    },
                    {
                              "id": "c",
                              "text": "bird"
                    },
                    {
                              "id": "d",
                              "text": "fish"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Snakes are reptiles (scales)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Snakes are reptiles (scales).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**reptile**",
          "commonErrors": [
                    "Picks wrong group."
          ]
},
        },
        {
          id: "s0-u6-animal-groups-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sort five animals into groups: mammal, bird, reptile, fish, insect. Name the feature that puts each in its group.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal groups",
                              "statement": "5 animals + groups + features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts all 5 correctly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names features.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog=mammal (fur); Eagle=bird (feathers); Snake=reptile (scales).'**",
          "commonErrors": [
                    "Wrong groups.",
                    "No features."
          ]
},
        },
        {
          id: "s0-u6-animal-groups-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Insects have...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "two legs"
                    },
                    {
                              "id": "b",
                              "text": "six legs"
                    },
                    {
                              "id": "c",
                              "text": "wings only"
                    },
                    {
                              "id": "d",
                              "text": "fins"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Insects = six legs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insects = six legs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**six legs**",
          "commonErrors": [
                    "Picks wrong number."
          ]
},
        },
        {
          id: "s0-u6-animal-groups-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Choose two animals from different groups. How are they alike? How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal groups",
                              "statement": "Two groups + alike/different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names groups.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Names alike + different.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog (mammal) and Eagle (bird): both animals, breathe air; different covering (fur vs feathers).'**",
          "commonErrors": [
                    "Same group.",
                    "Cannot compare."
          ]
},
        },
        {
          id: "s0-u6-animal-groups-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Put into groups."
                    },
                    {
                              "id": "b",
                              "text": "Things that are alike."
                    },
                    {
                              "id": "c",
                              "text": "Animal with fur/hair that drinks milk."
                    },
                    {
                              "id": "d",
                              "text": "Animal with feathers and wings."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Group\" means Things that are alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means Things that are alike.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Group** = Things that are alike.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u6-animal-groups-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sort\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Animal with fur/hair that drinks milk."
                    },
                    {
                              "id": "b",
                              "text": "Animal with feathers and wings."
                    },
                    {
                              "id": "c",
                              "text": "Animal with scales (snake, lizard)."
                    },
                    {
                              "id": "d",
                              "text": "Put into groups."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Sort\" means Put into groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sort\" means Put into groups.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Sort** = Put into groups.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "s0-u6-animal-groups-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mammal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Animal with feathers and wings."
                    },
                    {
                              "id": "b",
                              "text": "Animal with fur/hair that drinks milk."
                    },
                    {
                              "id": "c",
                              "text": "Animal with scales (snake, lizard)."
                    },
                    {
                              "id": "d",
                              "text": "Animal that lives in water with fins."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mammal\" means Animal with fur/hair that drinks milk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mammal\" means Animal with fur/hair that drinks milk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mammal** = Animal with fur/hair that drinks milk.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
