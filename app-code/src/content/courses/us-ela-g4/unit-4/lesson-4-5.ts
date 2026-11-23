import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "ela4-u4-lesson-4-5",
  code: "4-5",
  title: "Informational Text Review",
  goal: "I CAN use all informational text skills.",
  standards: ["RI.4.1", "RI.4.2", "RI.4.5", "RI.4.7"],
  vocabulary: [
    { term: "Main idea", definition: "Big idea." },
    { term: "Detail", definition: "Small fact." },
    { term: "Text feature", definition: "Helpful part." },
    { term: "Heading", definition: "Section title." },
    { term: "Glossary", definition: "Definitions." },
    { term: "Diagram", definition: "Labeled picture." },
    { term: "Integrate", definition: "Combine sources." },
    { term: "Evidence", definition: "Supporting detail." },
  ],
  concepts: [
    {
      id: "ela4-u4-informational-review",
      title: "Informational text review",
      skill: "Combine main idea, text features and integration.",
      lesson: {
        sections: [
          {
            heading: "All informational skills",
            body: "Identify **main idea** and **details**, use **text features** (headings, glossary, diagrams), and **integrate** text with visuals.",
          },
          {
            heading: "Put it together",
            body: "Use all skills for complete informational text understanding.",
          },
        ],
        keyFormulas: [
          { name: "Informational", statement: "Main idea + features + integrate = full understanding." },
        ],
        workedExample: {
          problem: "Use all informational text skills.",
          solution: "All skills = complete analysis.",
        },
      },
      questions: [
        {
          id: "ela4-u4-informational-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Informational text skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only main idea"
                    },
                    {
                              "id": "b",
                              "text": "main idea, features, integrate"
                    },
                    {
                              "id": "c",
                              "text": "only features"
                    },
                    {
                              "id": "d",
                              "text": "only integrate"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All informational skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All informational skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**main idea, features, integrate**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela4-u4-informational-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For an informational text, state the main idea, identify two text features, and explain how a diagram adds information.",
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
                                                  "All informational",
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
                                                  "All informational",
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
                    "**e.g., 'Main idea: X; Features: heading + glossary; Diagram: shows process steps.'**"
          ]
},
        },
        {
          id: "ela4-u4-informational-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informational texts are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're stories"
                    },
                    {
                              "id": "b",
                              "text": "they teach real facts"
                    },
                    {
                              "id": "c",
                              "text": "they're easier"
                    },
                    {
                              "id": "d",
                              "text": "they're shorter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "They teach real facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They teach real facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**they teach real facts**",
          "commonErrors": [
                    "Thinks they're fiction."
          ]
},
        },
        {
          id: "ela4-u4-informational-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "Big idea."
                    },
                    {
                              "id": "c",
                              "text": "Helpful part."
                    },
                    {
                              "id": "d",
                              "text": "Section title."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means Big idea."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means Big idea.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = Big idea.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-informational-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Helpful part."
                    },
                    {
                              "id": "b",
                              "text": "Section title."
                    },
                    {
                              "id": "c",
                              "text": "Definitions."
                    },
                    {
                              "id": "d",
                              "text": "Small fact."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela4-u4-informational-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text feature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Section title."
                    },
                    {
                              "id": "b",
                              "text": "Helpful part."
                    },
                    {
                              "id": "c",
                              "text": "Definitions."
                    },
                    {
                              "id": "d",
                              "text": "Labeled picture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text feature\" means Helpful part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text feature\" means Helpful part.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text feature** = Helpful part.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-informational-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heading\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Definitions."
                    },
                    {
                              "id": "b",
                              "text": "Labeled picture."
                    },
                    {
                              "id": "c",
                              "text": "Combine sources."
                    },
                    {
                              "id": "d",
                              "text": "Section title."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Heading\" means Section title."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heading\" means Section title.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Heading** = Section title.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-informational-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Glossary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Labeled picture."
                    },
                    {
                              "id": "b",
                              "text": "Definitions."
                    },
                    {
                              "id": "c",
                              "text": "Combine sources."
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
                              "statement": "\"Glossary\" means Definitions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Glossary\" means Definitions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Glossary** = Definitions.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
