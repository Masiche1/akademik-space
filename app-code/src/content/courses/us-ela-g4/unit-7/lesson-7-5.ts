import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "ela4-u7-lesson-7-5",
  code: "7-5",
  title: "Informative Writing Review",
  goal: "I CAN write complete informative pieces with intro, grouped info and developed details.",
  standards: ["W.4.2a", "W.4.2b", "W.4.2c"],
  vocabulary: [
    { term: "Introduce", definition: "Start clearly." },
    { term: "Group", definition: "Organize related." },
    { term: "Develop", definition: "Expand with details." },
    { term: "Fact", definition: "True thing." },
    { term: "Topic", definition: "What it's about." },
    { term: "Structure", definition: "How organized." },
    { term: "Detail", definition: "Small fact." },
    { term: "Purpose", definition: "Why write." },
  ],
  concepts: [
    {
      id: "ela4-u7-informative-review",
      title: "Informative writing review",
      skill: "Combine introduction, grouping and development into complete informative writing.",
      lesson: {
        sections: [
          {
            heading: "All informative skills",
            body: "**Introduce** topic clearly, **group** related information logically, and **develop** with facts, definitions and details.",
          },
          {
            heading: "Put it together",
            body: "All parts = complete, informative piece.",
          },
        ],
        keyFormulas: [
          { name: "Informative", statement: "Intro + grouping + development = complete piece." },
        ],
        workedExample: {
          problem: "Write a complete informative piece.",
          solution: "All parts = informative report.",
        },
      },
      questions: [
        {
          id: "ela4-u7-informative-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Informative writing skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only intro"
                    },
                    {
                              "id": "b",
                              "text": "intro, grouping, development"
                    },
                    {
                              "id": "c",
                              "text": "only grouping"
                    },
                    {
                              "id": "d",
                              "text": "only development"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All informative skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All informative skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**intro, grouping, development**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela4-u7-informative-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a complete informative piece: introduce topic, group related info, and develop with facts and details.",
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
                                                  "All informative",
                                                  "All parts present."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All informative",
                                                  "All parts present."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes complete piece.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Intro: names topic + preview; Groups: 2-3 categories; Develops: facts + examples.'**"
          ]
},
        },
        {
          id: "ela4-u7-informative-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informative writing's purpose is to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "entertain"
                    },
                    {
                              "id": "b",
                              "text": "inform or explain"
                    },
                    {
                              "id": "c",
                              "text": "persuade"
                    },
                    {
                              "id": "d",
                              "text": "tell a story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Purpose = inform/explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Purpose = inform/explain.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**inform or explain**",
          "commonErrors": [
                    "Wrong purpose."
          ]
},
        },
        {
          id: "ela4-u7-informative-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Introduce\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Organize related."
                    },
                    {
                              "id": "b",
                              "text": "Start clearly."
                    },
                    {
                              "id": "c",
                              "text": "Expand with details."
                    },
                    {
                              "id": "d",
                              "text": "True thing."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Introduce\" means Start clearly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Introduce\" means Start clearly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Introduce** = Start clearly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-informative-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Group\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Expand with details."
                    },
                    {
                              "id": "b",
                              "text": "True thing."
                    },
                    {
                              "id": "c",
                              "text": "What it's about."
                    },
                    {
                              "id": "d",
                              "text": "Organize related."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Group\" means Organize related."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Group\" means Organize related.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Group** = Organize related.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-informative-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Develop\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "True thing."
                    },
                    {
                              "id": "b",
                              "text": "Expand with details."
                    },
                    {
                              "id": "c",
                              "text": "What it's about."
                    },
                    {
                              "id": "d",
                              "text": "How organized."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Develop\" means Expand with details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Develop\" means Expand with details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Develop** = Expand with details.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-informative-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's about."
                    },
                    {
                              "id": "b",
                              "text": "How organized."
                    },
                    {
                              "id": "c",
                              "text": "Small fact."
                    },
                    {
                              "id": "d",
                              "text": "True thing."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means True thing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means True thing.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = True thing.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u7-informative-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "How organized."
                    },
                    {
                              "id": "b",
                              "text": "What it's about."
                    },
                    {
                              "id": "c",
                              "text": "Small fact."
                    },
                    {
                              "id": "d",
                              "text": "Why write."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means What it's about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means What it's about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = What it's about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
