import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "ela3-u3-lesson-3-5",
  code: "3-5",
  title: "Informational Text Review",
  goal: "I CAN use all informational text skills.",
  standards: ["RI.3.1", "RI.3.2", "RI.3.5", "RI.3.6", "RI.3.8"],
  vocabulary: [
    { term: "Informational", definition: "Teaches facts." },
    { term: "Main idea", definition: "What it's about." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Text feature", definition: "Part that helps." },
    { term: "Heading", definition: "Section title." },
    { term: "Caption", definition: "Explains picture." },
    { term: "Glossary", definition: "Word meanings." },
    { term: "Question", definition: "Ask to learn." },
  ],
  concepts: [
    {
      id: "ela3-u3-info-review",
      title: "Informational text review",
      skill: "Combine questions, main idea, details, features and info vs story.",
      lesson: {
        sections: [
          {
            heading: "All info text skills",
            body: "Informational texts teach **facts**. We find **main idea**, **key details**, ask questions, use **text features**, and distinguish them from **stories**.",
          },
          {
            heading: "Put it together",
            body: "Read info text, find idea, answer questions, use features.",
          },
        ],
        keyFormulas: [
          { name: "Info texts", statement: "Idea + details + questions + features + vs story = all skills." },
        ],
        workedExample: {
          problem: "Read info text: find idea, answer question, use feature, distinguish from story.",
          solution: "All info skills = complete understanding.",
        },
      },
      questions: [
        {
          id: "ela3-u3-info-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Informational text skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only stories"
                    },
                    {
                              "id": "b",
                              "text": "idea, details, questions, features, vs story"
                    },
                    {
                              "id": "c",
                              "text": "only pictures"
                    },
                    {
                              "id": "d",
                              "text": "only words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All info skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All info skills.",
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
          id: "ela3-u3-info-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read an informational text. Find main idea, answer one question with detail, name one text feature, and tell how it differs from a story.",
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
                                                  "Idea + question + feature + vs story."
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
                                                  "Idea + question + feature + vs story."
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
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Idea: bees; Q: What? A: nectar. Feature: caption. vs story: teaches facts.'**"
          ]
},
        },
        {
          id: "ela3-u3-info-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text features help us...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "count"
                    },
                    {
                              "id": "b",
                              "text": "find information quickly"
                    },
                    {
                              "id": "c",
                              "text": "spell"
                    },
                    {
                              "id": "d",
                              "text": "add"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Features help find info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Features help find info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**find info**",
          "commonErrors": [
                    "Thinks unrelated."
          ]
},
        },
        {
          id: "ela3-u3-info-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's about."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "Important detail."
                    },
                    {
                              "id": "d",
                              "text": "Part that helps."
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
          id: "ela3-u3-info-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main idea\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important detail."
                    },
                    {
                              "id": "b",
                              "text": "Part that helps."
                    },
                    {
                              "id": "c",
                              "text": "Section title."
                    },
                    {
                              "id": "d",
                              "text": "What it's about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main idea\" means What it's about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main idea\" means What it's about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main idea** = What it's about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u3-info-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part that helps."
                    },
                    {
                              "id": "b",
                              "text": "Important detail."
                    },
                    {
                              "id": "c",
                              "text": "Section title."
                    },
                    {
                              "id": "d",
                              "text": "Explains picture."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Key detail\" means Important detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key detail\" means Important detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Key detail** = Important detail.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u3-info-review-q7",
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
                              "text": "Explains picture."
                    },
                    {
                              "id": "c",
                              "text": "Word meanings."
                    },
                    {
                              "id": "d",
                              "text": "Part that helps."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text feature\" means Part that helps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text feature\" means Part that helps.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text feature** = Part that helps.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u3-info-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heading\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Explains picture."
                    },
                    {
                              "id": "b",
                              "text": "Section title."
                    },
                    {
                              "id": "c",
                              "text": "Word meanings."
                    },
                    {
                              "id": "d",
                              "text": "Ask to learn."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
