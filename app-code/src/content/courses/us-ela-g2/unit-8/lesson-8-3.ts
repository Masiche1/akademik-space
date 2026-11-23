import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ela2-u8-lesson-8-3",
  code: "8-3",
  title: "Review: Writing",
  goal: "I CAN write opinion, narrative and informational pieces.",
  standards: ["W.2.1", "W.2.2", "W.2.3", "W.2.4"],
  vocabulary: [
    { term: "Opinion", definition: "What we think." },
    { term: "Narrative", definition: "A story." },
    { term: "Informational", definition: "Teaches facts." },
    { term: "Reason", definition: "Why we think it." },
    { term: "Character", definition: "Who is in story." },
    { term: "Fact", definition: "Something true." },
    { term: "Structure", definition: "How organized." },
    { term: "Conclusion", definition: "Wraps up." },
  ],
  concepts: [
    {
      id: "ela2-u8-review-writing",
      title: "Writing review",
      skill: "Combine opinion, narrative and informational writing.",
      lesson: {
        sections: [
          {
            heading: "Three kinds of writing",
            body: "**Opinion** (what you think + reasons), **narrative** (a story with beginning-middle-end), **informational** (teaches facts). Each has its own structure.",
          },
          {
            heading: "Choose the right kind",
            body: "Ask: am I sharing an opinion, telling a story, or teaching facts? Then use the right structure.",
          },
        ],
        keyFormulas: [
          { name: "Writing review", statement: "Opinion + narrative + informational = all writing types." },
        ],
        workedExample: {
          problem: "Write one sentence for each type: opinion, narrative, informational.",
          solution: "Opinion: 'I like dogs.' Narrative: 'The dog ran.' Info: 'Dogs have four legs.'",
        },
      },
      questions: [
        {
          id: "ela2-u8-review-writing-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "The three kinds of Grade 2 writing are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only stories"
                    },
                    {
                              "id": "b",
                              "text": "opinion, narrative, informational"
                    },
                    {
                              "id": "c",
                              "text": "only facts"
                    },
                    {
                              "id": "d",
                              "text": "only poems"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Opinion + narrative + informational."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opinion + narrative + informational.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all three**",
          "commonErrors": [
                    "Lists one type."
          ]
},
        },
        {
          id: "ela2-u8-review-writing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write one sentence for each type: opinion, narrative event, informational fact.",
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
                                                  "All writing",
                                                  "Opinion + narrative + info."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All writing",
                                                  "Opinion + narrative + info."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes all three types.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'I like cats (opinion). The cat slept (narrative). Cats have fur (info).'**"
          ]
},
        },
        {
          id: "ela2-u8-review-writing-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An opinion piece needs...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only facts"
                    },
                    {
                              "id": "b",
                              "text": "an opinion + reasons"
                    },
                    {
                              "id": "c",
                              "text": "only characters"
                    },
                    {
                              "id": "d",
                              "text": "only a topic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Opinion + reasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opinion + reasons.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**opinion + reasons**",
          "commonErrors": [
                    "Thinks opinion needs only facts."
          ]
},
        },
        {
          id: "ela2-u8-review-writing-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A story."
                    },
                    {
                              "id": "b",
                              "text": "What we think."
                    },
                    {
                              "id": "c",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "d",
                              "text": "Why we think it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Opinion\" means What we think."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opinion\" means What we think.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Opinion** = What we think.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u8-review-writing-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Narrative\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "b",
                              "text": "Why we think it."
                    },
                    {
                              "id": "c",
                              "text": "Who is in story."
                    },
                    {
                              "id": "d",
                              "text": "A story."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Narrative\" means A story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Narrative\" means A story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Narrative** = A story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u8-review-writing-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why we think it."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "Who is in story."
                    },
                    {
                              "id": "d",
                              "text": "Something true."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informational\" means Teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informational\" means Teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informational** = Teaches facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u8-review-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Reason\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who is in story."
                    },
                    {
                              "id": "b",
                              "text": "Something true."
                    },
                    {
                              "id": "c",
                              "text": "How organized."
                    },
                    {
                              "id": "d",
                              "text": "Why we think it."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Reason\" means Why we think it."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Reason\" means Why we think it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Reason** = Why we think it.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u8-review-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true."
                    },
                    {
                              "id": "b",
                              "text": "Who is in story."
                    },
                    {
                              "id": "c",
                              "text": "How organized."
                    },
                    {
                              "id": "d",
                              "text": "Wraps up."
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
      ],
    },
  ],
};
