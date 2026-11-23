import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "ela5-u1-lesson-1-5",
  code: "1-5",
  title: "Literature Review",
  goal: "I CAN use all literature reading skills.",
  standards: ["RL.5.1", "RL.5.2", "RL.5.9"],
  vocabulary: [
    { term: "Quote", definition: "Exact words." },
    { term: "Theme", definition: "Main message." },
    { term: "Summary", definition: "Short version." },
    { term: "Character", definition: "Person in story." },
    { term: "Compare", definition: "Find similarities." },
    { term: "Contrast", definition: "Find differences." },
    { term: "Evidence", definition: "Supporting details." },
    { term: "Detail", definition: "Specific fact." },
  ],
  concepts: [
    {
      id: "ela5-u1-literature-review",
      title: "Literature review",
      skill: "Combine quoting, theme, summarizing and comparing characters.",
      lesson: {
        sections: [
          {
            heading: "All literature skills",
            body: "**Quote accurately**, determine **theme**, **summarize** stories, and **compare characters** across texts.",
          },
          {
            heading: "Put it together",
            body: "Use all literature skills for deep analysis.",
          },
        ],
        keyFormulas: [
          { name: "Literature", statement: "Quote + theme + summary + compare = all skills." },
        ],
        workedExample: {
          problem: "Use all literature skills on a story.",
          solution: "All skills = complete literature understanding.",
        },
      },
      questions: [
        {
          id: "ela5-u1-literature-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Literature skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only quoting"
                    },
                    {
                              "id": "b",
                              "text": "quoting, theme, summary, comparing"
                    },
                    {
                              "id": "c",
                              "text": "only theme"
                    },
                    {
                              "id": "d",
                              "text": "only summarizing"
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
          "finalAnswer": "quoting, theme, summary, comparing",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u1-literature-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Quote from a story, state its theme, summarize it, and compare a character to one from another story.",
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
                    "**e.g., 'Quote: ...; Theme: honesty; Summary: ...; Character comparison: ...'**"
          ]
},
        },
        {
          id: "ela5-u1-literature-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deep literature analysis requires...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only reading"
                    },
                    {
                              "id": "b",
                              "text": "quoting, themes, summaries and comparisons"
                    },
                    {
                              "id": "c",
                              "text": "only opinions"
                    },
                    {
                              "id": "d",
                              "text": "only pictures"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All analysis skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All analysis skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "quoting, themes, summaries and comparisons",
          "commonErrors": [
                    "Thinks reading alone is enough."
          ]
},
        },
        {
          id: "ela5-u1-literature-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Quote\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Main message."
                    },
                    {
                              "id": "b",
                              "text": "Exact words."
                    },
                    {
                              "id": "c",
                              "text": "Short version."
                    },
                    {
                              "id": "d",
                              "text": "Person in story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Quote\" means Exact words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Quote\" means Exact words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Quote** = Exact words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u1-literature-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Theme\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Short version."
                    },
                    {
                              "id": "b",
                              "text": "Person in story."
                    },
                    {
                              "id": "c",
                              "text": "Find similarities."
                    },
                    {
                              "id": "d",
                              "text": "Main message."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ela5-u1-literature-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Summary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Person in story."
                    },
                    {
                              "id": "b",
                              "text": "Short version."
                    },
                    {
                              "id": "c",
                              "text": "Find similarities."
                    },
                    {
                              "id": "d",
                              "text": "Find differences."
                    }
          ],
          "correctChoiceId": "b"
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
          id: "ela5-u1-literature-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find similarities."
                    },
                    {
                              "id": "b",
                              "text": "Find differences."
                    },
                    {
                              "id": "c",
                              "text": "Supporting details."
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
          id: "ela5-u1-literature-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Compare\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Find differences."
                    },
                    {
                              "id": "b",
                              "text": "Find similarities."
                    },
                    {
                              "id": "c",
                              "text": "Supporting details."
                    },
                    {
                              "id": "d",
                              "text": "Specific fact."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Compare\" means Find similarities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Compare\" means Find similarities.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Compare** = Find similarities.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
