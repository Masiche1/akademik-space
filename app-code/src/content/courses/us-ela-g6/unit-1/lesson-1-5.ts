import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "ela6-u1-lesson-1-5",
  code: "1-5",
  title: "Literature Review",
  goal: "I CAN use all literature skills.",
  standards: ["RL.6.1", "RL.6.2", "RL.6.9"],
  vocabulary: [
    { term: "Theme", definition: "Lesson." },
    { term: "Central idea", definition: "Main point." },
    { term: "Character", definition: "Person in story." },
    { term: "Plot", definition: "What happens." },
    { term: "Setting", definition: "Where/when." },
    { term: "Compare", definition: "Find similarities." },
    { term: "Contrast", definition: "Find differences." },
    { term: "Analyze", definition: "Break down." },
  ],
  concepts: [
    {
      id: "ela6-u1-literature-review",
      title: "Literature review",
      skill: "Combine theme, central idea, character analysis and text comparison.",
      lesson: {
        sections: [
          {
            heading: "All literature skills",
            body: "Identify **themes**, determine **central ideas**, analyze **character development**, and **compare** themes across texts.",
          },
          {
            heading: "Put it together",
            body: "Use all literature skills to analyze stories deeply.",
          },
        ],
        keyFormulas: [
          { name: "Literature", statement: "Theme + central idea + character + comparison = all skills." },
        ],
        workedExample: {
          problem: "Use all literature skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "ela6-u1-literature-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Literature skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only theme"
                    },
                    {
                              "id": "b",
                              "text": "theme, central idea, character, comparison"
                    },
                    {
                              "id": "c",
                              "text": "only character"
                    },
                    {
                              "id": "d",
                              "text": "only plot"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "theme, central idea, character, comparison",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u1-literature-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Identify a theme, determine central idea, analyze a character's growth, and compare two themes.",
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
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Theme: Friendship; Central idea: Friends help us grow; Character: starts lonely, ends with friends; Compare: same theme as other story.'**"
          ]
},
        },
        {
          id: "ela6-u1-literature-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Literature analysis helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only memorize"
                    },
                    {
                              "id": "b",
                              "text": "understand stories deeply and find meaning"
                    },
                    {
                              "id": "c",
                              "text": "only test"
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
                              "statement": "Understand deeply/find meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand deeply/find meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "understand stories deeply and find meaning",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "ela6-u1-literature-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Main point."
                    },
                    {
                              "id": "b",
                              "text": "Lesson."
                    },
                    {
                              "id": "c",
                              "text": "Person in story."
                    },
                    {
                              "id": "d",
                              "text": "What happens."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Theme\" means Lesson."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Lesson.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Lesson.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-literature-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Central idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person in story."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Where/when."
                    },
                    {
                              "id": "d",
                              "text": "Main point."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Central idea\" means Main point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Central idea\" means Main point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Central idea** = Main point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-literature-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "Person in story."
                    },
                    {
                              "id": "c",
                              "text": "Where/when."
                    },
                    {
                              "id": "d",
                              "text": "Find similarities."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-literature-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where/when."
                    },
                    {
                              "id": "b",
                              "text": "Find similarities."
                    },
                    {
                              "id": "c",
                              "text": "Find differences."
                    },
                    {
                              "id": "d",
                              "text": "What happens."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Plot\" means What happens."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Plot\" means What happens.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Plot** = What happens.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u1-literature-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find similarities."
                    },
                    {
                              "id": "b",
                              "text": "Where/when."
                    },
                    {
                              "id": "c",
                              "text": "Find differences."
                    },
                    {
                              "id": "d",
                              "text": "Break down."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Setting\" means Where/when."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Setting\" means Where/when.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Setting** = Where/when.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
