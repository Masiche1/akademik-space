import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "ela4-u8-lesson-8-5",
  code: "8-5",
  title: "Grade 4 ELA Final Review",
  goal: "I CAN use all Grade 4 ELA skills: literature, informational text, writing and language.",
  standards: ["RL.4.1", "RI.4.2", "W.4.1", "W.4.2", "W.4.3", "L.4.1", "SL.4.1"],
  vocabulary: [
    { term: "Literature", definition: "Stories." },
    { term: "Informational", definition: "Facts." },
    { term: "Argument", definition: "Persuade." },
    { term: "Narrative", definition: "Story writing." },
    { term: "Informative", definition: "Teach." },
    { term: "Language", definition: "Grammar/words." },
    { term: "Speaking", definition: "Talk clearly." },
    { term: "Review", definition: "All skills." },
  ],
  concepts: [
    {
      id: "ela4-u8-grade4-final",
      title: "Grade 4 ELA final review",
      skill: "Combine all Grade 4 ELA skills: literature, informational text, writing and language.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 4 ELA",
            body: "Grade 4 covers **literature** (details, themes, characters, craft), **informational text** (main idea, features), **writing** (argument, narrative, informative), **language** (vocabulary, grammar), and **speaking/listening**.",
          },
          {
            heading: "You are a Grade 4 reader and writer!",
            body: "You can analyze stories deeply, understand informational texts, write in three genres, use correct grammar, and communicate clearly. These are the foundations for Grade 5!",
          },
        ],
        keyFormulas: [
          { name: "Grade 4 ELA", statement: "Literature + informational + writing + language + speaking = Grade 4 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: analyze a story, identify main idea, write an argument, use grammar correctly, participate in discussion.",
          solution: "All skills demonstrated = Grade 4 ELA mastery.",
        },
      },
      questions: [
        {
          id: "ela4-u8-grade4-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 4 ELA includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only reading"
                    },
                    {
                              "id": "b",
                              "text": "literature, informational, writing, language, speaking"
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
                              "statement": "All Grade 4 ELA skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 4 ELA skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**literature, informational, writing, language, speaking**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela4-u8-grade4-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: analyze a story element, identify a main idea, write a claim, use a linking word, and describe a discussion skill.",
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
                              "markCode": "AO2"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Theme: kindness; Main idea: bees pollinate; Claim: reading helps; Linker: because; Discussion: take turns.'**"
          ]
},
        },
        {
          id: "ela4-u8-grade4-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 5 ELA because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "write novels"
                    },
                    {
                              "id": "b",
                              "text": "analyze texts deeply, write in three genres, use correct grammar, communicate clearly"
                    },
                    {
                              "id": "c",
                              "text": "read chapter books"
                    },
                    {
                              "id": "d",
                              "text": "do calculus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Grade 4 skills prepare you for Grade 5."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 4 skills prepare you for Grade 5.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "G4 skills prepare for G5",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "ela4-u8-grade4-final-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Literature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Facts."
                    },
                    {
                              "id": "b",
                              "text": "Stories."
                    },
                    {
                              "id": "c",
                              "text": "Persuade."
                    },
                    {
                              "id": "d",
                              "text": "Story writing."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Literature\" means Stories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Literature\" means Stories.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Literature** = Stories.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-grade4-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Persuade."
                    },
                    {
                              "id": "b",
                              "text": "Story writing."
                    },
                    {
                              "id": "c",
                              "text": "Teach."
                    },
                    {
                              "id": "d",
                              "text": "Facts."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informational\" means Facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informational\" means Facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informational** = Facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-grade4-final-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Argument\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Story writing."
                    },
                    {
                              "id": "b",
                              "text": "Persuade."
                    },
                    {
                              "id": "c",
                              "text": "Teach."
                    },
                    {
                              "id": "d",
                              "text": "Grammar/words."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Argument\" means Persuade."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Argument\" means Persuade.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Argument** = Persuade.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-grade4-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Narrative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teach."
                    },
                    {
                              "id": "b",
                              "text": "Grammar/words."
                    },
                    {
                              "id": "c",
                              "text": "Talk clearly."
                    },
                    {
                              "id": "d",
                              "text": "Story writing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Narrative\" means Story writing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Narrative\" means Story writing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Narrative** = Story writing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-grade4-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Grammar/words."
                    },
                    {
                              "id": "b",
                              "text": "Teach."
                    },
                    {
                              "id": "c",
                              "text": "Talk clearly."
                    },
                    {
                              "id": "d",
                              "text": "All skills."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informative\" means Teach."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informative\" means Teach.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informative** = Teach.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
