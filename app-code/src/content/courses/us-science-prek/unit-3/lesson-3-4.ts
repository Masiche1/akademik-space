import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "spk-u3-lesson-3-4",
  code: "3-4",
  title: "Animal Groups",
  goal: "I CAN sort animals into groups like mammals, birds, fish and insects.",
  standards: ["ELOF-PK.SCI.ANIMAL.2"],
  vocabulary: [
    { term: "Mammal", definition: "Animal with fur/hair that feeds babies milk." },
    { term: "Bird", definition: "Animal with feathers and wings that lays eggs." },
    { term: "Fish", definition: "Animal that lives in water and breathes through gills." },
    { term: "Insect", definition: "Small animal with 6 legs and 3 body parts." },
    { term: "Reptile", definition: "Animal with scales, cold-blooded, lays eggs." },
    { term: "Group", definition: "Animals that share features." },
  ],
  concepts: [
    {
      id: "spk-u3-animal-groups",
      title: "Animal groups",
      skill: "Sort animals into groups by their features.",
      lesson: {
        sections: [
          {
            heading: "Grouping animals",
            body: "Animals can be **grouped** by shared features: **mammals** have fur and feed milk (dogs, cats, whales), **birds** have feathers and lay eggs (eagles, penguins), **fish** live in water (sharks, goldfish), **insects** have 6 legs (ants, butterflies).",
          },
          {
            heading: "Why group?",
            body: "Grouping helps us see patterns — all mammals have fur, all birds have feathers. This helps scientists organize and understand animals.",
          },
        ],
        keyFormulas: [
          { name: "Animal groups", statement: "Mammals=fur+milk, Birds=feathers+eggs, Fish=water+gills, Insects=6 legs." },
        ],
        workedExample: {
          problem: "A penguin has feathers, wings and lays eggs. Which group?",
          solution: "A penguin is a **bird** — it has feathers and lays eggs (even though it can't fly).",
        },
      },
      questions: [
        {
          id: "spk-u3-animal-groups-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which animal is a MAMMAL?",
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
                              "text": "shark"
                    },
                    {
                              "id": "d",
                              "text": "ant"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Dogs are mammals — fur + feed milk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dogs are mammals — fur + feed milk.",
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
          id: "spk-u3-animal-groups-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which group has feathers and lays eggs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "mammals"
                    },
                    {
                              "id": "b",
                              "text": "birds"
                    },
                    {
                              "id": "c",
                              "text": "fish"
                    },
                    {
                              "id": "d",
                              "text": "insects"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Birds have feathers and lay eggs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Birds have feathers and lay eggs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**birds**",
          "commonErrors": [
                    "Picks wrong group."
          ]
},
        },
        {
          id: "spk-u3-animal-groups-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Name one animal from each group: mammal, bird, fish, insect.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal groups",
                              "statement": "Mammal, bird, fish, insect examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 4 animals correctly grouped.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Dog (mammal), eagle (bird), goldfish (fish), ant (insect).'**",
          "commonErrors": [
                    "Wrong groups.",
                    "Cannot name all."
          ]
},
        },
        {
          id: "spk-u3-animal-groups-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "An insect has how many legs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "8"
                    },
                    {
                              "id": "d",
                              "text": "2"
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
          "finalAnswer": "**6**",
          "commonErrors": [
                    "Wrong leg count."
          ]
},
        },
        {
          id: "spk-u3-animal-groups-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Sort these animals into groups: cat, sparrow, goldfish, butterfly, whale, snake. Explain your rule.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Animal groups",
                              "statement": "Sort by features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorts all 6 correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains grouping rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Mammals: cat, whale; Bird: sparrow; Fish: goldfish; Insect: butterfly; Reptile: snake.'**",
          "commonErrors": [
                    "Sorting errors.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "spk-u3-animal-groups-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Mammal\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Animal with feathers and wings that lays eggs."
                    },
                    {
                              "id": "b",
                              "text": "Animal with fur/hair that feeds babies milk."
                    },
                    {
                              "id": "c",
                              "text": "Animal that lives in water and breathes through gills."
                    },
                    {
                              "id": "d",
                              "text": "Small animal with 6 legs and 3 body parts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Mammal\" means Animal with fur/hair that feeds babies milk."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Mammal\" means Animal with fur/hair that feeds babies milk.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Mammal** = Animal with fur/hair that feeds babies milk.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-animal-groups-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Bird\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Animal that lives in water and breathes through gills."
                    },
                    {
                              "id": "b",
                              "text": "Small animal with 6 legs and 3 body parts."
                    },
                    {
                              "id": "c",
                              "text": "Animal with scales, cold-blooded, lays eggs."
                    },
                    {
                              "id": "d",
                              "text": "Animal with feathers and wings that lays eggs."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Bird\" means Animal with feathers and wings that lays eggs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Bird\" means Animal with feathers and wings that lays eggs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Bird** = Animal with feathers and wings that lays eggs.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "spk-u3-animal-groups-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fish\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small animal with 6 legs and 3 body parts."
                    },
                    {
                              "id": "b",
                              "text": "Animal that lives in water and breathes through gills."
                    },
                    {
                              "id": "c",
                              "text": "Animal with scales, cold-blooded, lays eggs."
                    },
                    {
                              "id": "d",
                              "text": "Animals that share features."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Fish\" means Animal that lives in water and breathes through gills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fish\" means Animal that lives in water and breathes through gills.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Fish** = Animal that lives in water and breathes through gills.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
