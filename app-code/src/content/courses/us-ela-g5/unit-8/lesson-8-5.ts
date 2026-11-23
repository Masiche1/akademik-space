import type { Lesson } from "../../../types.ts";

export const lesson85: Lesson = {
  id: "ela5-u8-lesson-8-5",
  code: "8-5",
  title: "Grade 5 ELA Final Review",
  goal: "I CAN use all Grade 5 ELA skills together.",
  standards: ["RL.5.1", "RL.5.2", "RL.5.4", "RL.5.5", "RL.5.9", "RI.5.2", "RI.5.5", "W.5.1", "W.5.2", "W.5.3", "L.5.2", "L.5.4", "SL.5.1"],
  vocabulary: [
    { term: "Reading", definition: "Analyze literature + informational." },
    { term: "Writing", definition: "Opinion, argument, narrative, informative." },
    { term: "Language", definition: "Conventions, vocabulary." },
    { term: "Speaking", definition: "Present + listen." },
    { term: "Theme", definition: "Main message." },
    { term: "Evidence", definition: "Supporting details." },
    { term: "Structure", definition: "Organization." },
    { term: "Review", definition: "All skills." },
  ],
  concepts: [
    {
      id: "ela5-u8-grade5-ela-final",
      title: "Grade 5 ELA final review",
      skill: "Combine all Grade 5 ELA skills.",
      lesson: {
        sections: [
          {
            heading: "All of Grade 5 ELA",
            body: "Grade 5 covers **reading literature** (quote, theme, summarize, compare, analyze craft), **reading informational** (main idea, structure, visuals, sources), **writing** (opinion, argument, narrative, informative), **language** (conventions, vocabulary), and **speaking/listening**.",
          },
          {
            heading: "You are a Grade 5 reader and writer!",
            body: "You can analyze texts deeply, write in multiple genres, use language conventions, and communicate effectively. These skills prepare you for Grade 6!",
          },
        ],
        keyFormulas: [
          { name: "Grade 5 ELA", statement: "Reading + writing + language + speaking = Grade 5 mastery." },
        ],
        workedExample: {
          problem: "Show all skills: analyze a text, write an argument, use conventions, and present.",
          solution: "All skills demonstrated = Grade 5 ELA mastery.",
        },
      },
      questions: [
        {
          id: "ela5-u8-grade5-ela-final-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Grade 5 ELA includes which skills?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only reading"
                    },
                    {
                              "id": "b",
                              "text": "reading, writing, language, speaking/listening"
                    },
                    {
                              "id": "c",
                              "text": "only writing"
                    },
                    {
                              "id": "d",
                              "text": "only language"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All Grade 5 ELA skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All Grade 5 ELA skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "reading, writing, language, speaking/listening",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u8-grade5-ela-final-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Show all your skills: analyze a story's theme, write an argument, use correct punctuation, define a word with context clues, and give a short presentation.",
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
                    "**e.g., 'Theme analysis; Argument with evidence; Correct punctuation; Context clue definition; Presentation.'**"
          ]
},
        },
        {
          id: "ela5-u8-grade5-ela-final-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You are ready for Grade 6 ELA because you can...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only read"
                    },
                    {
                              "id": "b",
                              "text": "analyze texts deeply, write in multiple genres, use conventions, and communicate effectively"
                    },
                    {
                              "id": "c",
                              "text": "only write"
                    },
                    {
                              "id": "d",
                              "text": "only speak"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Grade 5 skills prepare for Grade 6."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grade 5 skills prepare for Grade 6.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "G5 skills prepare for G6",
          "commonErrors": [
                    "Thinks you need advanced skills."
          ]
},
        },
        {
          id: "ela5-u8-grade5-ela-final-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reading\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Opinion, argument, narrative, informative."
                    },
                    {
                              "id": "b",
                              "text": "Analyze literature + informational."
                    },
                    {
                              "id": "c",
                              "text": "Conventions, vocabulary."
                    },
                    {
                              "id": "d",
                              "text": "Present + listen."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reading\" means Analyze literature + informational."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reading\" means Analyze literature + informational.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reading** = Analyze literature + informational.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-grade5-ela-final-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Writing\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Conventions, vocabulary."
                    },
                    {
                              "id": "b",
                              "text": "Present + listen."
                    },
                    {
                              "id": "c",
                              "text": "Main message."
                    },
                    {
                              "id": "d",
                              "text": "Opinion, argument, narrative, informative."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Writing\" means Opinion, argument, narrative, informative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Writing\" means Opinion, argument, narrative, informative.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Writing** = Opinion, argument, narrative, informative.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-grade5-ela-final-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Language\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Present + listen."
                    },
                    {
                              "id": "b",
                              "text": "Conventions, vocabulary."
                    },
                    {
                              "id": "c",
                              "text": "Main message."
                    },
                    {
                              "id": "d",
                              "text": "Supporting details."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Language\" means Conventions, vocabulary."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Language\" means Conventions, vocabulary.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Language** = Conventions, vocabulary.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-grade5-ela-final-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Speaking\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Main message."
                    },
                    {
                              "id": "b",
                              "text": "Supporting details."
                    },
                    {
                              "id": "c",
                              "text": "Organization."
                    },
                    {
                              "id": "d",
                              "text": "Present + listen."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Speaking\" means Present + listen."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Speaking\" means Present + listen.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Speaking** = Present + listen.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u8-grade5-ela-final-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supporting details."
                    },
                    {
                              "id": "b",
                              "text": "Main message."
                    },
                    {
                              "id": "c",
                              "text": "Organization."
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
                              "statement": "\"Theme\" means Main message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Theme\" means Main message.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Theme** = Main message.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
