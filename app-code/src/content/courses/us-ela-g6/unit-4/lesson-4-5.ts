import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "ela6-u4-lesson-4-5",
  code: "4-5",
  title: "Informational Text Review",
  goal: "I CAN use all informational text skills.",
  standards: ["RI.6.2", "RI.6.5", "RI.6.6", "RI.6.7"],
  vocabulary: [
    { term: "Main idea", definition: "Central point." },
    { term: "Structure", definition: "Organization." },
    { term: "Integrate", definition: "Combine sources." },
    { term: "Purpose", definition: "Why written." },
    { term: "Audience", definition: "Who for." },
    { term: "Details", definition: "Supporting facts." },
    { term: "Analyze", definition: "Break down." },
    { term: "Synthesize", definition: "Combine." },
  ],
  concepts: [
    {
      id: "ela6-u4-informational-review",
      title: "Informational text review",
      skill: "Combine main idea, structure, source integration and author's purpose.",
      lesson: {
        sections: [
          {
            heading: "All informational skills",
            body: "Determine **main ideas**, analyze **structure**, **integrate sources**, and determine **author's purpose**.",
          },
          {
            heading: "Put it together",
            body: "Use all skills to deeply understand informational texts.",
          },
        ],
        keyFormulas: [
          { name: "Informational", statement: "Main idea + structure + sources + purpose = all skills." },
        ],
        workedExample: {
          problem: "Use all informational skills.",
          solution: "All skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "ela6-u4-informational-review-q1",
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
                              "text": "main idea, structure, sources, purpose"
                    },
                    {
                              "id": "c",
                              "text": "only structure"
                    },
                    {
                              "id": "d",
                              "text": "only purpose"
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
          "finalAnswer": "main idea, structure, sources, purpose",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela6-u4-informational-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Determine a main idea, analyze structure, integrate two sources, and identify author's purpose.",
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
                                                  "All info",
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
                                                  "All info",
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
                    "**e.g., 'Main idea: climate change; Structure: cause/effect; Sources: two articles combined; Purpose: inform.'**"
          ]
},
        },
        {
          id: "ela6-u4-informational-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informational text analysis helps us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only memorize"
                    },
                    {
                              "id": "b",
                              "text": "understand facts and how they're presented"
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
                              "statement": "Understand facts/presentation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Understand facts/presentation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "understand facts and how they're presented",
          "commonErrors": [
                    "Thinks it's useless."
          ]
},
        },
        {
          id: "ela6-u4-informational-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Organization."
                    },
                    {
                              "id": "b",
                              "text": "Central point."
                    },
                    {
                              "id": "c",
                              "text": "Combine sources."
                    },
                    {
                              "id": "d",
                              "text": "Why written."
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
        {
          id: "ela6-u4-informational-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Structure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine sources."
                    },
                    {
                              "id": "b",
                              "text": "Why written."
                    },
                    {
                              "id": "c",
                              "text": "Who for."
                    },
                    {
                              "id": "d",
                              "text": "Organization."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Structure\" means Organization."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Structure\" means Organization.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Structure** = Organization.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-informational-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why written."
                    },
                    {
                              "id": "b",
                              "text": "Combine sources."
                    },
                    {
                              "id": "c",
                              "text": "Who for."
                    },
                    {
                              "id": "d",
                              "text": "Supporting facts."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Integrate\" means Combine sources."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integrate\" means Combine sources.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Integrate** = Combine sources.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-informational-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Purpose\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who for."
                    },
                    {
                              "id": "b",
                              "text": "Supporting facts."
                    },
                    {
                              "id": "c",
                              "text": "Break down."
                    },
                    {
                              "id": "d",
                              "text": "Why written."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Purpose\" means Why written."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Purpose\" means Why written.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Purpose** = Why written.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u4-informational-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Audience\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Supporting facts."
                    },
                    {
                              "id": "b",
                              "text": "Who for."
                    },
                    {
                              "id": "c",
                              "text": "Break down."
                    },
                    {
                              "id": "d",
                              "text": "Combine."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Audience\" means Who for."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Audience\" means Who for.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Audience** = Who for.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
