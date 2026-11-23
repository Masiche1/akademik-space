import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "ela0-u2-lesson-2-5",
  code: "2-5",
  title: "Characters and Stories Review",
  goal: "I CAN compare characters, identify feelings and say story messages.",
  standards: ["RL.K.2", "RL.K.3", "RL.K.9"],
  vocabulary: [
    { term: "Character", definition: "Person or animal in story." },
    { term: "Compare", definition: "Same and different." },
    { term: "Feeling", definition: "Emotion." },
    { term: "Because", definition: "Gives reason." },
    { term: "Message", definition: "What story teaches." },
    { term: "Lesson", definition: "What we learn." },
    { term: "Trait", definition: "Character quality." },
  ],
  concepts: [
    {
      id: "ela0-u2-characters-review",
      title: "Characters and stories review",
      skill: "Combine comparing characters, feelings and messages.",
      lesson: {
        sections: [
          {
            heading: "All about characters",
            body: "Characters have **traits** (qualities), **feelings** (emotions), and stories have **messages** (lessons). Comparing characters helps us see how they are alike and different.",
          },
          {
            heading: "Put it together",
            body: "Identify a character's feelings, compare two characters, and say what the story teaches.",
          },
        ],
        keyFormulas: [
          { name: "Characters", statement: "Traits + feelings + compare + message = understanding characters and stories." },
        ],
        workedExample: {
          problem: "Compare two characters' feelings and say the story's message.",
          solution: "Character A feels happy (because X); Character B feels sad (because Y); message: be kind.",
        },
      },
      questions: [
        {
          id: "ela0-u2-characters-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Understanding characters includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only names"
                    },
                    {
                              "id": "b",
                              "text": "traits, feelings, comparing, messages"
                    },
                    {
                              "id": "c",
                              "text": "only sizes"
                    },
                    {
                              "id": "d",
                              "text": "only colors"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All character skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All character skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all character skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela0-u2-characters-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pick a story. Tell how the main character feels (with 'because'), compare them to another character, and say the message.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "Characters",
                                                  "Feeling + compare + message."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Characters",
                                                  "Feeling + compare + message."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Feels happy because X; different from Y because Z; message: share.'**"
          ]
},
        },
        {
          id: "ela0-u2-characters-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'trait' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a feeling"
                    },
                    {
                              "id": "b",
                              "text": "a quality of a character"
                    },
                    {
                              "id": "c",
                              "text": "a place"
                    },
                    {
                              "id": "d",
                              "text": "a thing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Trait = character quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trait = character quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**character quality**",
          "commonErrors": [
                    "Confuses with feeling."
          ]
},
        },
        {
          id: "ela0-u2-characters-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "To explain a character's feeling, use...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "'and'"
                    },
                    {
                              "id": "b",
                              "text": "'because' + reason"
                    },
                    {
                              "id": "c",
                              "text": "'but' only"
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
                              "statement": "'Because' introduces the reason for a feeling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Because' introduces the reason for a feeling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**because + reason**",
          "commonErrors": [
                    "No reason given."
          ]
},
        },
        {
          id: "ela0-u2-characters-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same and different."
                    },
                    {
                              "id": "b",
                              "text": "Person or animal in story."
                    },
                    {
                              "id": "c",
                              "text": "Emotion."
                    },
                    {
                              "id": "d",
                              "text": "Gives reason."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person or animal in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person or animal in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person or animal in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-characters-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Emotion."
                    },
                    {
                              "id": "b",
                              "text": "Gives reason."
                    },
                    {
                              "id": "c",
                              "text": "What story teaches."
                    },
                    {
                              "id": "d",
                              "text": "Same and different."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means Same and different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Same and different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = Same and different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-characters-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Feeling\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gives reason."
                    },
                    {
                              "id": "b",
                              "text": "Emotion."
                    },
                    {
                              "id": "c",
                              "text": "What story teaches."
                    },
                    {
                              "id": "d",
                              "text": "What we learn."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Feeling\" means Emotion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Feeling\" means Emotion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Feeling** = Emotion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-characters-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Because\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What story teaches."
                    },
                    {
                              "id": "b",
                              "text": "What we learn."
                    },
                    {
                              "id": "c",
                              "text": "Character quality."
                    },
                    {
                              "id": "d",
                              "text": "Gives reason."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Because\" means Gives reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Because\" means Gives reason.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Because** = Gives reason.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
