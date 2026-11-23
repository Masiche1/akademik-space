import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "sci3-u3-lesson-3-3",
  code: "3-3",
  title: "Insect Life Cycles",
  goal: "I CAN describe complete and incomplete metamorphosis.",
  standards: ["LS1.B"],
  vocabulary: [
    { term: "Metamorphosis", definition: "Big change in body." },
    { term: "Complete", definition: "Egg->larva->pupa->adult." },
    { term: "Incomplete", definition: "Egg->nymph->adult." },
    { term: "Larva", definition: "Caterpillar stage." },
    { term: "Pupa", definition: "Cocoon/chrysalis stage." },
    { term: "Nymph", definition: "Young insect stage." },
    { term: "Cocoon", definition: "Silk covering." },
    { term: "Chrysalis", definition: "Pupa covering." },
  ],
  concepts: [
    {
      id: "sci3-u3-insect-cycles",
      title: "Insect life cycles",
      skill: "Describe complete metamorphosis (egg-larva-pupa-adult) and incomplete (egg-nymph-adult).",
      lesson: {
        sections: [
          {
            heading: "Complete metamorphosis",
            body: "Some insects have **complete metamorphosis**: **egg -> larva -> pupa -> adult**. Butterflies: egg -> caterpillar (larva) -> chrysalis (pupa) -> butterfly.",
          },
          {
            heading: "Incomplete metamorphosis",
            body: "Other insects have **incomplete metamorphosis**: **egg -> nymph -> adult**. Grasshoppers: egg -> nymph -> adult.",
          },
        ],
        keyFormulas: [
          { name: "Complete", statement: "Egg -> larva -> pupa -> adult." },
          { name: "Incomplete", statement: "Egg -> nymph -> adult." },
        ],
        workedExample: {
          problem: "Is a butterfly's life cycle complete or incomplete metamorphosis?",
          solution: "**Complete** — egg -> caterpillar -> chrysalis -> butterfly.",
        },
      },
      questions: [
        {
          id: "sci3-u3-insect-cycles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Complete metamorphosis is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "egg -> adult"
                    },
                    {
                              "id": "b",
                              "text": "egg -> larva -> pupa -> adult"
                    },
                    {
                              "id": "c",
                              "text": "egg -> nymph -> adult"
                    },
                    {
                              "id": "d",
                              "text": "birth -> adult"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Complete = egg-larva-pupa-adult."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Complete = egg-larva-pupa-adult.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "egg -> larva -> pupa -> adult",
          "commonErrors": [
                    "Thinks incomplete is complete."
          ]
},
        },
        {
          id: "sci3-u3-insect-cycles-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A butterfly's stages are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "egg -> nymph -> adult"
                    },
                    {
                              "id": "b",
                              "text": "egg -> caterpillar -> chrysalis -> butterfly"
                    },
                    {
                              "id": "c",
                              "text": "egg -> adult"
                    },
                    {
                              "id": "d",
                              "text": "larva -> adult"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Butterfly = complete metamorphosis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Butterfly = complete metamorphosis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "egg -> caterpillar -> chrysalis -> butterfly",
          "commonErrors": [
                    "Thinks it's incomplete."
          ]
},
        },
        {
          id: "sci3-u3-insect-cycles-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Put butterfly life cycle in order: butterfly, egg, chrysalis, caterpillar.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Insect cycle",
                              "statement": "Egg->larva->pupa->adult."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Orders stages correctly.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**Egg -> caterpillar -> chrysalis -> butterfly**",
          "commonErrors": [
                    "Wrong order.",
                    "Cannot order."
          ]
},
        },
        {
          id: "sci3-u3-insect-cycles-q4",
          difficulty: "foundation",
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
                              "text": "the stage where insect transforms"
                    },
                    {
                              "id": "c",
                              "text": "a nymph"
                    },
                    {
                              "id": "d",
                              "text": "an adult"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "Pupa = transforming stage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pupa = transforming stage.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "the stage where insect transforms",
          "commonErrors": [
                    "Thinks it's a nymph."
          ]
},
        },
        {
          id: "sci3-u3-insect-cycles-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Describe the difference between complete and incomplete metamorphosis. Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Insect cycles",
                              "statement": "Complete vs incomplete + examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Describes complete.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Describes incomplete + examples.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Complete: butterfly (egg->caterpillar->chrysalis->butterfly). Incomplete: grasshopper (egg->nymph->adult).'**",
          "commonErrors": [
                    "Cannot distinguish.",
                    "No examples."
          ]
},
        },
        {
          id: "sci3-u3-insect-cycles-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Metamorphosis\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Egg->larva->pupa->adult."
                    },
                    {
                              "id": "b",
                              "text": "Big change in body."
                    },
                    {
                              "id": "c",
                              "text": "Egg->nymph->adult."
                    },
                    {
                              "id": "d",
                              "text": "Caterpillar stage."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Metamorphosis\" means Big change in body."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Metamorphosis\" means Big change in body.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Metamorphosis** = Big change in body.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-insect-cycles-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Complete\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Egg->nymph->adult."
                    },
                    {
                              "id": "b",
                              "text": "Caterpillar stage."
                    },
                    {
                              "id": "c",
                              "text": "Cocoon/chrysalis stage."
                    },
                    {
                              "id": "d",
                              "text": "Egg->larva->pupa->adult."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Complete\" means Egg->larva->pupa->adult."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Complete\" means Egg->larva->pupa->adult.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Complete** = Egg->larva->pupa->adult.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "sci3-u3-insect-cycles-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Incomplete\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Caterpillar stage."
                    },
                    {
                              "id": "b",
                              "text": "Egg->nymph->adult."
                    },
                    {
                              "id": "c",
                              "text": "Cocoon/chrysalis stage."
                    },
                    {
                              "id": "d",
                              "text": "Young insect stage."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Solve",
                              "statement": "\"Incomplete\" means Egg->nymph->adult."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Incomplete\" means Egg->nymph->adult.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Incomplete** = Egg->nymph->adult.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
