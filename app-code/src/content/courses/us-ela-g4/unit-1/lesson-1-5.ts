import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "ela4-u1-lesson-1-5",
  code: "1-5",
  title: "Literature Skills Review",
  goal: "I CAN use all literature skills: details, themes, characters, comparisons.",
  standards: ["RL.4.1", "RL.4.2", "RL.4.3", "RL.4.9"],
  vocabulary: [
    { term: "Detail", definition: "Small fact." },
    { term: "Theme", definition: "Central message." },
    { term: "Character", definition: "Who is in story." },
    { term: "Compare", definition: "See how alike." },
    { term: "Contrast", definition: "See how differ." },
    { term: "Evidence", definition: "Supporting detail." },
    { term: "Cite", definition: "Name where it says it." },
    { term: "Trait", definition: "Personality quality." },
  ],
  concepts: [
    {
      id: "ela4-u1-literature-review",
      title: "Literature skills review",
      skill: "Combine citing details, themes, characters and comparisons.",
      lesson: {
        sections: [
          {
            heading: "All literature skills",
            body: "**Cite details**, identify **themes**, describe **characters** with evidence, and **compare** stories.",
          },
          {
            heading: "Put it together",
            body: "Use all literature skills together for deeper understanding.",
          },
        ],
        keyFormulas: [
          { name: "Literature", statement: "Details + themes + characters + compare = full understanding." },
        ],
        workedExample: {
          problem: "Use all literature skills on a story.",
          solution: "All skills = complete literature analysis.",
        },
      },
      questions: [
        {
          id: "ela4-u1-literature-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Literature skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only details"
                    },
                    {
                              "id": "b",
                              "text": "details, themes, characters, compare"
                    },
                    {
                              "id": "c",
                              "text": "only themes"
                    },
                    {
                              "id": "d",
                              "text": "only characters"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All literature skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All literature skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**details, themes, characters, compare**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela4-u1-literature-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a story, find a key detail, state the theme, describe a character with evidence, and compare it to another story.",
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
                                                  "All literature",
                                                  "All four skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All literature",
                                                  "All four skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all four.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Detail: missed bus; Theme: being late matters; Character: anxious (bit nails); Compare: both about consequences.'**"
          ]
},
        },
        {
          id: "ela4-u1-literature-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Strong literature analysis always includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "opinion only"
                    },
                    {
                              "id": "b",
                              "text": "text evidence"
                    },
                    {
                              "id": "c",
                              "text": "no details"
                    },
                    {
                              "id": "d",
                              "text": "just the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Text evidence is essential."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Text evidence is essential.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**text evidence**",
          "commonErrors": [
                    "Relies on opinion."
          ]
},
        },
        {
          id: "ela4-u1-literature-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Central message."
                    },
                    {
                              "id": "b",
                              "text": "Small fact."
                    },
                    {
                              "id": "c",
                              "text": "Who is in story."
                    },
                    {
                              "id": "d",
                              "text": "See how alike."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Detail\" means Small fact."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means Small fact.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Detail** = Small fact.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-literature-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is in story."
                    },
                    {
                              "id": "b",
                              "text": "See how alike."
                    },
                    {
                              "id": "c",
                              "text": "See how differ."
                    },
                    {
                              "id": "d",
                              "text": "Central message."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Central message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Central message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Central message.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-literature-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See how alike."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "See how differ."
                    },
                    {
                              "id": "d",
                              "text": "Supporting detail."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Who is in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Who is in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Who is in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-literature-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See how differ."
                    },
                    {
                              "id": "b",
                              "text": "Supporting detail."
                    },
                    {
                              "id": "c",
                              "text": "Name where it says it."
                    },
                    {
                              "id": "d",
                              "text": "See how alike."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means See how alike."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means See how alike.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = See how alike.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u1-literature-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Contrast\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supporting detail."
                    },
                    {
                              "id": "b",
                              "text": "See how differ."
                    },
                    {
                              "id": "c",
                              "text": "Name where it says it."
                    },
                    {
                              "id": "d",
                              "text": "Personality quality."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Contrast\" means See how differ."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Contrast\" means See how differ.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Contrast** = See how differ.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
