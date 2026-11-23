import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "ela1-u6-lesson-6-5",
  code: "6-5",
  title: "Informational Writing Review",
  goal: "I CAN write an informational text with facts and explanations.",
  standards: ["W.1.2"],
  vocabulary: [
    { term: "Informational", definition: "Teaches facts." },
    { term: "Topic", definition: "What we write about." },
    { term: "Fact", definition: "Something true." },
    { term: "Explain", definition: "Tell how/why." },
    { term: "Structure", definition: "Intro, facts, conclusion." },
    { term: "Nonfiction", definition: "Real info." },
    { term: "Audience", definition: "Who reads it." },
    { term: "Clear", definition: "Easy to understand." },
  ],
  concepts: [
    {
      id: "ela1-u6-info-review",
      title: "Informational writing review",
      skill: "Combine topic, facts, structure and explanation.",
      lesson: {
        sections: [
          {
            heading: "All informational writing",
            body: "Informational writing teaches **facts** about a **topic**, uses **structure** (intro, facts, conclusion), and **explains** how or why things happen.",
          },
          {
            heading: "Put it together",
            body: "Choose topic, gather facts, organize, explain.",
          },
        ],
        keyFormulas: [
          { name: "Info review", statement: "Topic + facts + structure + explanation = complete info text." },
        ],
        workedExample: {
          problem: "Write complete informational text about an animal.",
          solution: "Topic + facts + structure + explanation = complete info text.",
        },
      },
      questions: [
        {
          id: "ela1-u6-info-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Informational writing includes...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only stories"
                    },
                    {
                              "id": "b",
                              "text": "topic, facts, structure, explanation"
                    },
                    {
                              "id": "c",
                              "text": "only opinions"
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
                              "statement": "All info writing skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All info writing skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela1-u6-info-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a complete informational text. Include intro, three facts, explanation, conclusion.",
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
                                                  "Info text",
                                                  "All parts."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Info text",
                                                  "All parts."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Writes complete info text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Penguins are birds. They live in cold places, have feathers, swim well. They stay warm with fat. Penguins are amazing.'**"
          ]
},
        },
        {
          id: "ela1-u6-info-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Nonfiction means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "made up"
                    },
                    {
                              "id": "b",
                              "text": "real information"
                    },
                    {
                              "id": "c",
                              "text": "a story"
                    },
                    {
                              "id": "d",
                              "text": "a poem"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Nonfiction = real info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nonfiction = real info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**real info**",
          "commonErrors": [
                    "Confuses with fiction."
          ]
},
        },
        {
          id: "ela1-u6-info-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we write about."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "Something true."
                    },
                    {
                              "id": "d",
                              "text": "Tell how/why."
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
          id: "ela1-u6-info-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Topic\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true."
                    },
                    {
                              "id": "b",
                              "text": "Tell how/why."
                    },
                    {
                              "id": "c",
                              "text": "Intro, facts, conclusion."
                    },
                    {
                              "id": "d",
                              "text": "What we write about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Topic\" means What we write about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Topic\" means What we write about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Topic** = What we write about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u6-info-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell how/why."
                    },
                    {
                              "id": "b",
                              "text": "Something true."
                    },
                    {
                              "id": "c",
                              "text": "Intro, facts, conclusion."
                    },
                    {
                              "id": "d",
                              "text": "Real info."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means Something true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Something true.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = Something true.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u6-info-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Explain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Intro, facts, conclusion."
                    },
                    {
                              "id": "b",
                              "text": "Real info."
                    },
                    {
                              "id": "c",
                              "text": "Who reads it."
                    },
                    {
                              "id": "d",
                              "text": "Tell how/why."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Explain\" means Tell how/why."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Explain\" means Tell how/why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Explain** = Tell how/why.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela1-u6-info-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Structure\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Real info."
                    },
                    {
                              "id": "b",
                              "text": "Intro, facts, conclusion."
                    },
                    {
                              "id": "c",
                              "text": "Who reads it."
                    },
                    {
                              "id": "d",
                              "text": "Easy to understand."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Structure\" means Intro, facts, conclusion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Structure\" means Intro, facts, conclusion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Structure** = Intro, facts, conclusion.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
