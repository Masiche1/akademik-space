import type { Lesson } from "../../../types.ts";

export const lesson84: Lesson = {
  id: "ela6-u8-lesson-8-4",
  code: "8-4",
  title: "Grade 6 ELA Review",
  goal: "I CAN use all Grade 6 ELA skills together.",
  standards: ["RL.6.1", "RL.6.2", "RL.6.3", "RI.6.2", "W.6.1", "W.6.3", "L.6.1", "SL.6.1"],
  vocabulary: [
    { term: "Theme", definition: "Lesson." },
    { term: "Character", definition: "Person in story." },
    { term: "Setting", definition: "Where/when." },
    { term: "Plot", definition: "What happens." },
    { term: "Main idea", definition: "Central point." },
    { term: "Argument", definition: "Claim + evidence." },
    { term: "Narrative", definition: "Story." },
    { term: "Grammar", definition: "Conventions." },
  ],
  concepts: [
    {
      id: "ela6-u8-grade6-ela-review",
      title: "Grade 6 ELA review",
      skill: "Combine all Grade 6 ELA skills.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 6 ELA",
            body: "Grade 6 covers **literature** (theme, character, point of view, setting, plot), **informational text** (main idea, structure, sources, purpose), **writing** (argument, narrative, informative), **language** (grammar, vocabulary, figurative), and **speaking/listening**.",
          },
          {
            heading: "You are a Grade 6 reader and writer!",
            body: "You can analyze stories deeply, understand informational texts, write arguments and narratives, use language effectively, and communicate clearly. These skills prepare you for Grade 7!",
          },
        ],
        keyFormulas: [
          { name: "Grade 6 ELA", statement: "Literature + informational + writing + language + speaking/listening = Grade 6 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: identify a theme, analyze a character, determine main idea, write a claim, identify figurative language, and plan a presentation.",
          solution: "All skills demonstrated = Grade 6 ELA mastery.",
        },
      },
      questions: [
        {
          id: "ela6-u8-grade6-ela-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 6 ELA includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only reading"
                    },
                    {
                              "id": "b",
                              "text": "literature, informational text, writing, language, speaking/listening"
                    },
                    {
                              "id": "c",
                              "text": "only writing"
                    },
                    {
                              "id": "d",
                              "text": "only grammar"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All Grade 6 ELA skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 6 ELA skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "literature, informational text, writing, language, speaking/listening",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u8-grade6-ela-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: identify a theme, analyze a character, determine main idea, write a claim, identify figurative language, and plan a presentation.",
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
                                                  "All ELA",
                                                  "All skills demonstrated."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All ELA",
                                                  "All skills demonstrated."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Demonstrates all skills.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Theme: friendship; Character: kind; Main idea: recycling benefits; Claim: schools should recycle; Figurative: metaphor; Presentation: clear, organized.'**"
          ]
},
        },
        {
          id: "ela6-u8-grade6-ela-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 7 ELA because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "write novels"
                    },
                    {
                              "id": "b",
                              "text": "analyze texts deeply, write effectively, and communicate clearly"
                    },
                    {
                              "id": "c",
                              "text": "do calculus"
                    },
                    {
                              "id": "d",
                              "text": "do physics"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Grade 6 ELA skills prepare for Grade 7."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 6 ELA skills prepare for Grade 7.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "G6 ELA skills prepare for G7",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "ela6-u8-grade6-ela-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person in story."
                    },
                    {
                              "id": "b",
                              "text": "Lesson."
                    },
                    {
                              "id": "c",
                              "text": "Where/when."
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
          id: "ela6-u8-grade6-ela-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where/when."
                    },
                    {
                              "id": "b",
                              "text": "What happens."
                    },
                    {
                              "id": "c",
                              "text": "Central point."
                    },
                    {
                              "id": "d",
                              "text": "Person in story."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela6-u8-grade6-ela-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Setting\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What happens."
                    },
                    {
                              "id": "b",
                              "text": "Where/when."
                    },
                    {
                              "id": "c",
                              "text": "Central point."
                    },
                    {
                              "id": "d",
                              "text": "Claim + evidence."
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
        {
          id: "ela6-u8-grade6-ela-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Plot\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Central point."
                    },
                    {
                              "id": "b",
                              "text": "Claim + evidence."
                    },
                    {
                              "id": "c",
                              "text": "Story."
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
          id: "ela6-u8-grade6-ela-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Claim + evidence."
                    },
                    {
                              "id": "b",
                              "text": "Central point."
                    },
                    {
                              "id": "c",
                              "text": "Story."
                    },
                    {
                              "id": "d",
                              "text": "Conventions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means Central point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means Central point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = Central point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
