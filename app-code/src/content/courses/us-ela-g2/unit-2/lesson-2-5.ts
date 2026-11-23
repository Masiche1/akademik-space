import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "ela2-u2-lesson-2-5",
  code: "2-5",
  title: "Characters Review",
  goal: "I CAN describe traits, feelings, changes and choices of characters.",
  standards: ["RL.2.3"],
  vocabulary: [
    { term: "Character", definition: "Person or animal." },
    { term: "Trait", definition: "Quality." },
    { term: "Feeling", definition: "Emotion." },
    { term: "Because", definition: "Gives reason." },
    { term: "Change", definition: "Becomes different." },
    { term: "Choice", definition: "What they decide." },
    { term: "Describe", definition: "Tell what like." },
    { term: "Learn", definition: "Gain knowledge." },
  ],
  concepts: [
    {
      id: "ela2-u2-characters-review",
      title: "Characters review",
      skill: "Combine traits, feelings, changes and choices.",
      lesson: {
        sections: [
          {
            heading: "All character skills",
            body: "Characters have **traits** (qualities), **feelings** (emotions), **changes** (growth), and **choices** (decisions). Describing all four helps us understand characters.",
          },
          {
            heading: "Put it together",
            body: "Describe a character's traits, feelings, changes and choices.",
          },
        ],
        keyFormulas: [
          { name: "Characters", statement: "Traits + feelings + changes + choices = understanding characters." },
        ],
        workedExample: {
          problem: "Describe a character fully: traits, feelings, changes, choices.",
          solution: "Kind (trait); happy (feeling); grew braver (change); shared because kind (choice).",
        },
      },
      questions: [
        {
          id: "ela2-u2-characters-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Character skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only names"
                    },
                    {
                              "id": "b",
                              "text": "traits, feelings, changes, choices"
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
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela2-u2-characters-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose a character. Describe their traits, feelings, how they change, and a choice they make with reason.",
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
                                                  "All characters",
                                                  "Traits + feelings + change + choice."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All characters",
                                                  "Traits + feelings + change + choice."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Describes all four.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Kind; happy; grew braver; shared because kind.'**"
          ]
},
        },
        {
          id: "ela2-u2-characters-review-q3",
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
          id: "ela2-u2-characters-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Quality."
                    },
                    {
                              "id": "b",
                              "text": "Person or animal."
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
                              "statement": "\"Character\" means Person or animal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person or animal.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person or animal.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u2-characters-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
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
                              "text": "Becomes different."
                    },
                    {
                              "id": "d",
                              "text": "Quality."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Trait\" means Quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means Quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Trait** = Quality.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u2-characters-review-q6",
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
                              "text": "Becomes different."
                    },
                    {
                              "id": "d",
                              "text": "What they decide."
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
          id: "ela2-u2-characters-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Because\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Becomes different."
                    },
                    {
                              "id": "b",
                              "text": "What they decide."
                    },
                    {
                              "id": "c",
                              "text": "Tell what like."
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
        {
          id: "ela2-u2-characters-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Change\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What they decide."
                    },
                    {
                              "id": "b",
                              "text": "Becomes different."
                    },
                    {
                              "id": "c",
                              "text": "Tell what like."
                    },
                    {
                              "id": "d",
                              "text": "Gain knowledge."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Change\" means Becomes different."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Change\" means Becomes different.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Change** = Becomes different.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
