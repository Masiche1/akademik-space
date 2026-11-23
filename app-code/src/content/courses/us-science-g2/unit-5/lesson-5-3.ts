import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "sci2-u5-lesson-5-3",
  code: "5-3",
  title: "Animal Life Cycles",
  goal: "I CAN describe how animals grow and change.",
  standards: ["NGSS 2-LS2-2"],
  vocabulary: [
    { term: "Life cycle", definition: "Stages of growth." },
    { term: "Baby", definition: "Young animal." },
    { term: "Adult", definition: "Grown animal." },
    { term: "Egg", definition: "Where some animals start." },
    { term: "Larva", definition: "Early stage of some animals." },
    { term: "Pupa", definition: "Stage before adult." },
    { term: "Grow", definition: "Get bigger." },
    { term: "Change", definition: "Different stages." },
    { term: "Reproduce", definition: "Make more animals." },
    { term: "Stage", definition: "Step in cycle." },
  ],
  concepts: [
    {
      id: "sci2-u5-animal-life-cycles",
      title: "Animal life cycles",
      skill: "Describe how animals grow through different life cycle stages.",
      lesson: {
        sections: [
          {
            heading: "Animals grow and change",
            body: "Animals go through **life cycles** with different **stages**. Some start as **eggs**, become **babies**, grow into **adults**. Some insects have **larva** and **pupa** stages.",
          },
          {
            heading: "Different cycles",
            body: "A **butterfly** goes: egg -> caterpillar (larva) -> chrysalis (pupa) -> butterfly. A **dog** goes: puppy -> adult dog. A **frog** goes: egg -> tadpole -> froglet -> adult frog.",
          },
        ],
        keyFormulas: [
          { name: "Life cycle", statement: "Egg/baby -> young -> adult -> reproduce = cycle." },
        ],
        workedExample: {
          problem: "What are the stages of a butterfly's life cycle?",
          solution: "**Egg -> caterpillar (larva) -> chrysalis (pupa) -> butterfly (adult).**",
        },
      },
      questions: [
        {
          id: "sci2-u5-animal-life-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The stages of a butterfly's life cycle are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "egg -> adult"
                    },
                    {
                              "id": "b",
                              "text": "egg -> caterpillar -> chrysalis -> butterfly"
                    },
                    {
                              "id": "c",
                              "text": "baby -> adult"
                    },
                    {
                              "id": "d",
                              "text": "seed -> flower"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Egg -> larva -> pupa -> adult."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Egg -> larva -> pupa -> adult.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**all four stages**",
          "commonErrors": [
                    "Picks incomplete cycle."
          ]
},
        },
        {
          id: "sci2-u5-animal-life-cycles-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'pupa' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an egg"
                    },
                    {
                              "id": "b",
                              "text": "a stage before becoming adult"
                    },
                    {
                              "id": "c",
                              "text": "an adult"
                    },
                    {
                              "id": "d",
                              "text": "a baby"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pupa = stage before adult."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pupa = stage before adult.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**before adult**",
          "commonErrors": [
                    "Confuses with egg."
          ]
},
        },
        {
          id: "sci2-u5-animal-life-cycles-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Describe the life cycle of a frog or a dog.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Stages in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes cycle in order.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Frog: egg -> tadpole -> froglet -> adult frog.'**",
          "commonErrors": [
                    "Wrong order.",
                    "Missing stages."
          ]
},
        },
        {
          id: "sci2-u5-animal-life-cycles-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Larva' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an adult"
                    },
                    {
                              "id": "b",
                              "text": "an early stage of some animals"
                    },
                    {
                              "id": "c",
                              "text": "an egg"
                    },
                    {
                              "id": "d",
                              "text": "a pupa"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Larva = early stage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Larva = early stage.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**early stage**",
          "commonErrors": [
                    "Confuses with pupa."
          ]
},
        },
        {
          id: "sci2-u5-animal-life-cycles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare the life cycles of two different animals. How are they similar? Different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Life cycle",
                              "statement": "Two animals + comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes both cycles.",
                              "marks": 1,
                              "markCode": "M1"
                    },
                    {
                              "reasoning": "Compares similar/different.",
                              "marks": 1,
                              "markCode": "M1"
                    }
          ],
          "finalAnswer": "**e.g., 'Both: egg->baby->adult. Different: butterfly has pupa, dog doesn't.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one animal."
          ]
},
        },
        {
          id: "sci2-u5-animal-life-cycles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Life cycle\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Young animal."
                    },
                    {
                              "id": "b",
                              "text": "Stages of growth."
                    },
                    {
                              "id": "c",
                              "text": "Grown animal."
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
                              "statement": "\"Life cycle\" means Stages of growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Life cycle\" means Stages of growth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Life cycle** = Stages of growth.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci2-u5-animal-life-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Baby\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grown animal."
                    },
                    {
                              "id": "b",
                              "text": "Where some animals start."
                    },
                    {
                              "id": "c",
                              "text": "Early stage of some animals."
                    },
                    {
                              "id": "d",
                              "text": "Young animal."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "sci2-u5-animal-life-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Adult\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where some animals start."
                    },
                    {
                              "id": "b",
                              "text": "Grown animal."
                    },
                    {
                              "id": "c",
                              "text": "Early stage of some animals."
                    },
                    {
                              "id": "d",
                              "text": "Stage before adult."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Adult\" means Grown animal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Adult\" means Grown animal.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Adult** = Grown animal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
