import type { Lesson } from "../../../types.ts";

export const lesson45: Lesson = {
  id: "ela5-u4-lesson-4-5",
  code: "4-5",
  title: "Informational Text Review",
  goal: "I CAN use all informational text skills.",
  standards: ["RI.5.2", "RI.5.5", "RI.5.7", "RI.5.9"],
  vocabulary: [
    { term: "Main idea", definition: "Big point." },
    { term: "Text structure", definition: "Organization." },
    { term: "Visual", definition: "Picture/diagram." },
    { term: "Source", definition: "Where info comes from." },
    { term: "Integrate", definition: "Combine info." },
    { term: "Compare", definition: "See similarities/differences." },
    { term: "Detail", definition: "Supporting fact." },
    { term: "Signal words", definition: "Words showing structure." },
  ],
  concepts: [
    {
      id: "ela5-u4-informational-review",
      title: "Informational text review",
      skill: "Combine main idea, text structure, visuals and multiple sources.",
      lesson: {
        sections: [
          {
            heading: "All informational skills",
            body: "Find **main idea**, analyze **text structure**, use **visuals**, and **integrate multiple sources**.",
          },
          {
            heading: "Put it together",
            body: "Use all informational skills for deep understanding.",
          },
        ],
        keyFormulas: [
          { name: "Informational", statement: "Main idea + structure + visuals + sources = all skills." },
        ],
        workedExample: {
          problem: "Use all informational skills.",
          solution: "All skills = complete informational understanding.",
        },
      },
      questions: [
        {
          id: "ela5-u4-informational-review-q1",
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
                              "text": "main idea, structure, visuals, multiple sources"
                    },
                    {
                              "id": "c",
                              "text": "only structure"
                    },
                    {
                              "id": "d",
                              "text": "only visuals"
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
          "finalAnswer": "main idea, structure, visuals, multiple sources",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u4-informational-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the main idea, identify the text structure, interpret a visual, and compare two sources on the same topic.",
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
                                                  "All informational",
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
                    "**e.g., 'Main idea: ...; Structure: cause/effect; Visual: shows X; Sources agree on Y, differ on Z.'**"
          ]
},
        },
        {
          id: "ela5-u4-informational-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Informational texts are important because...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "they're boring"
                    },
                    {
                              "id": "b",
                              "text": "they teach us facts and how the world works"
                    },
                    {
                              "id": "c",
                              "text": "they're only for school"
                    },
                    {
                              "id": "d",
                              "text": "they're fiction"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Teach facts/world."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Teach facts/world.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "they teach us facts and how the world works",
          "commonErrors": [
                    "Thinks they're fiction."
          ]
},
        },
        {
          id: "ela5-u4-informational-review-q4",
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
                              "text": "Big point."
                    },
                    {
                              "id": "c",
                              "text": "Picture/diagram."
                    },
                    {
                              "id": "d",
                              "text": "Where info comes from."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means Big point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means Big point.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = Big point.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-informational-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text structure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Picture/diagram."
                    },
                    {
                              "id": "b",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "c",
                              "text": "Combine info."
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
                              "statement": "\"Text structure\" means Organization."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text structure\" means Organization.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text structure** = Organization.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-informational-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Visual\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Where info comes from."
                    },
                    {
                              "id": "b",
                              "text": "Picture/diagram."
                    },
                    {
                              "id": "c",
                              "text": "Combine info."
                    },
                    {
                              "id": "d",
                              "text": "See similarities/differences."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Visual\" means Picture/diagram."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Visual\" means Picture/diagram.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Visual** = Picture/diagram.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-informational-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Source\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combine info."
                    },
                    {
                              "id": "b",
                              "text": "See similarities/differences."
                    },
                    {
                              "id": "c",
                              "text": "Supporting fact."
                    },
                    {
                              "id": "d",
                              "text": "Where info comes from."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Source\" means Where info comes from."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Source\" means Where info comes from.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Source** = Where info comes from.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u4-informational-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Integrate\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "See similarities/differences."
                    },
                    {
                              "id": "b",
                              "text": "Combine info."
                    },
                    {
                              "id": "c",
                              "text": "Supporting fact."
                    },
                    {
                              "id": "d",
                              "text": "Words showing structure."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Integrate\" means Combine info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Integrate\" means Combine info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Integrate** = Combine info.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
