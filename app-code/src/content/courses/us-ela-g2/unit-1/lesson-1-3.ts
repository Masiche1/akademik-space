import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ela2-u1-lesson-1-3",
  code: "1-3",
  title: "Compare Stories",
  goal: "I CAN compare and contrast stories.",
  standards: ["RL.2.9"],
  vocabulary: [
    { term: "Compare", definition: "Look at same and different." },
    { term: "Contrast", definition: "Look at differences." },
    { term: "Same", definition: "Alike." },
    { term: "Different", definition: "Not alike." },
    { term: "Character", definition: "Who is in story." },
    { term: "Event", definition: "Something that happens." },
    { term: "Setting", definition: "Where it happens." },
    { term: "Story", definition: "A tale." },
  ],
  concepts: [
    {
      id: "ela2-u1-compare-stories",
      title: "Comparing stories",
      skill: "Compare and contrast two stories by characters, events and settings.",
      lesson: {
        sections: [
          {
            heading: "Same and different",
            body: "When you **compare** stories, look at how they are **the same** and **different** — characters, events, settings.",
          },
          {
            heading: "Compare by parts",
            body: "Compare by **characters** (who), **events** (what happens), and **setting** (where). Two stories might both have animals but different settings.",
          },
        ],
        keyFormulas: [
          { name: "Compare stories", statement: "Characters + events + setting = same/different." },
        ],
        workedExample: {
          problem: "Compare 'The Three Little Pigs' and 'The Big Bad Wolf'. How are they the same? Different?",
          solution: "Same: pigs and wolf. Different: one is pigs' story, one is wolf's perspective.",
        },
      },
      questions: [
        {
          id: "ela2-u1-compare-stories-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When comparing stories, you look for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only differences"
                    },
                    {
                              "id": "b",
                              "text": "same and different"
                    },
                    {
                              "id": "c",
                              "text": "only similarities"
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
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Compare = same AND different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare = same AND different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**same and different**",
          "commonErrors": [
                    "Thinks compare means only differences."
          ]
},
        },
        {
          id: "ela2-u1-compare-stories-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To compare stories, you can look at...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only titles"
                    },
                    {
                              "id": "b",
                              "text": "characters, events and settings"
                    },
                    {
                              "id": "c",
                              "text": "only pictures"
                    },
                    {
                              "id": "d",
                              "text": "only length"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Compare by characters, events, settings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare by characters, events, settings.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**characters, events, settings**",
          "commonErrors": [
                    "Picks wrong parts."
          ]
},
        },
        {
          id: "ela2-u1-compare-stories-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Compare two stories you know. How are they the same? How are they different?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare stories",
                              "statement": "Same + different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names same and different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Both have animals; one is set in forest, one in city.'**",
          "commonErrors": [
                    "Only same.",
                    "Only different."
          ]
},
        },
        {
          id: "ela2-u1-compare-stories-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Contrast' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "find similarities"
                    },
                    {
                              "id": "b",
                              "text": "find differences"
                    },
                    {
                              "id": "c",
                              "text": "read again"
                    },
                    {
                              "id": "d",
                              "text": "write a story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Contrast = differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Contrast = differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**differences**",
          "commonErrors": [
                    "Confuses with compare."
          ]
},
        },
        {
          id: "ela2-u1-compare-stories-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two stories. Name two ways they are the same and two ways they are different.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Compare stories",
                              "statement": "2 same + 2 different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names 2 similarities.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Names 2 differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Same: animals, happy ending. Different: setting, characters.'**",
          "commonErrors": [
                    "Cannot compare.",
                    "Only one side."
          ]
},
        },
        {
          id: "ela2-u1-compare-stories-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Look at differences."
                    },
                    {
                              "id": "b",
                              "text": "Look at same and different."
                    },
                    {
                              "id": "c",
                              "text": "Alike."
                    },
                    {
                              "id": "d",
                              "text": "Not alike."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means Look at same and different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Look at same and different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = Look at same and different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u1-compare-stories-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Alike."
                    },
                    {
                              "id": "b",
                              "text": "Not alike."
                    },
                    {
                              "id": "c",
                              "text": "Who is in story."
                    },
                    {
                              "id": "d",
                              "text": "Look at differences."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Contrast\" means Look at differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Contrast\" means Look at differences.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Contrast** = Look at differences.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u1-compare-stories-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Same\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Not alike."
                    },
                    {
                              "id": "b",
                              "text": "Alike."
                    },
                    {
                              "id": "c",
                              "text": "Who is in story."
                    },
                    {
                              "id": "d",
                              "text": "Something that happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Same\" means Alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Same\" means Alike.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Same** = Alike.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
