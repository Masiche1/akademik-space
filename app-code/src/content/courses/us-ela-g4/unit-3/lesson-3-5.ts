import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "ela4-u3-lesson-3-5",
  code: "3-5",
  title: "Integration Skills Review",
  goal: "I CAN make connections, analyze visuals and summarize.",
  standards: ["RL.4.3", "RL.4.7", "RL.4.2"],
  vocabulary: [
    { term: "Connection", definition: "Link text to life." },
    { term: "Visual", definition: "Something you see." },
    { term: "Illustration", definition: "Picture." },
    { term: "Summary", definition: "Short version." },
    { term: "Key events", definition: "Important things." },
    { term: "Mood", definition: "Feeling." },
    { term: "Interpret", definition: "Figure out." },
    { term: "Evidence", definition: "Supporting detail." },
  ],
  concepts: [
    {
      id: "ela4-u3-integration-review",
      title: "Integration skills review",
      skill: "Combine connections, visual analysis and summarizing.",
      lesson: {
        sections: [
          {
            heading: "All integration skills",
            body: "Make **connections** (text-to-self/text/world), **analyze visuals** (illustrations, captions), and **summarize** key events.",
          },
          {
            heading: "Put it together",
            body: "Use all integration skills for deeper story understanding.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Connections + visuals + summary = deep understanding." },
        ],
        workedExample: {
          problem: "Use all integration skills on a story.",
          solution: "All skills = complete analysis.",
        },
      },
      questions: [
        {
          id: "ela4-u3-integration-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Integration skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only connections"
                    },
                    {
                              "id": "b",
                              "text": "connections, visuals, summary"
                    },
                    {
                              "id": "c",
                              "text": "only visuals"
                    },
                    {
                              "id": "d",
                              "text": "only summary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All integration skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All integration skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**connections, visuals, summary**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela4-u3-integration-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Make a connection, analyze one illustration, and write a 2-sentence summary for a story.",
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
                                                  "All integration",
                                                  "All three skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All integration",
                                                  "All three skills."
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
                              "markCode": "AO2"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Connection: I was scared too; Illustration: dark clouds = storm mood; Summary: 2 key events.'**"
          ]
},
        },
        {
          id: "ela4-u3-integration-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deep understanding comes from...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reading once"
                    },
                    {
                              "id": "b",
                              "text": "making connections and analyzing all elements"
                    },
                    {
                              "id": "c",
                              "text": "skipping details"
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
                              "statement": "Connections + analysis = deep understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Connections + analysis = deep understanding.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**making connections and analyzing all elements**",
          "commonErrors": [
                    "Thinks shallow reading is enough."
          ]
},
        },
        {
          id: "ela4-u3-integration-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Connection\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something you see."
                    },
                    {
                              "id": "b",
                              "text": "Link text to life."
                    },
                    {
                              "id": "c",
                              "text": "Picture."
                    },
                    {
                              "id": "d",
                              "text": "Short version."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Connection\" means Link text to life."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Connection\" means Link text to life.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Connection** = Link text to life.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-integration-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Visual\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture."
                    },
                    {
                              "id": "b",
                              "text": "Short version."
                    },
                    {
                              "id": "c",
                              "text": "Important things."
                    },
                    {
                              "id": "d",
                              "text": "Something you see."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Visual\" means Something you see."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Visual\" means Something you see.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Visual** = Something you see.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-integration-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Illustration\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Short version."
                    },
                    {
                              "id": "b",
                              "text": "Picture."
                    },
                    {
                              "id": "c",
                              "text": "Important things."
                    },
                    {
                              "id": "d",
                              "text": "Feeling."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Illustration\" means Picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Illustration\" means Picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Illustration** = Picture.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-integration-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important things."
                    },
                    {
                              "id": "b",
                              "text": "Feeling."
                    },
                    {
                              "id": "c",
                              "text": "Figure out."
                    },
                    {
                              "id": "d",
                              "text": "Short version."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Summary\" means Short version."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Summary\" means Short version.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Summary** = Short version.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u3-integration-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key events\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Feeling."
                    },
                    {
                              "id": "b",
                              "text": "Important things."
                    },
                    {
                              "id": "c",
                              "text": "Figure out."
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
                              "statement": "\"Key events\" means Important things."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key events\" means Important things.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Key events** = Important things.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
