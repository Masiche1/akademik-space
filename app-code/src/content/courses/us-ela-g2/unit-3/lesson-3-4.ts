import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ela2-u3-lesson-3-4",
  code: "3-4",
  title: "Informational Text Review",
  goal: "I CAN ask questions, find topic, details and use features.",
  standards: ["RI.2.1", "RI.2.2", "RI.2.5", "RI.2.6"],
  vocabulary: [
    { term: "Informational", definition: "Teaches facts." },
    { term: "Main topic", definition: "What it's about." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Text feature", definition: "Part that helps." },
    { term: "Heading", definition: "Section title." },
    { term: "Caption", definition: "Explains picture." },
    { term: "Glossary", definition: "Word meanings." },
    { term: "Question", definition: "Ask to learn." },
  ],
  concepts: [
    {
      id: "ela2-u3-info-review",
      title: "Informational text review",
      skill: "Combine questions, topic, details and text features.",
      lesson: {
        sections: [
          {
            heading: "All info text skills",
            body: "Informational texts teach **facts**. We find **main topic**, **key details**, ask questions, and use **text features**.",
          },
          {
            heading: "Put it together",
            body: "Read info text, find topic, answer questions, use features.",
          },
        ],
        keyFormulas: [
          { name: "Info texts", statement: "Topic + details + questions + features = understanding nonfiction." },
        ],
        workedExample: {
          problem: "Read info text: find topic, answer question, use feature.",
          solution: "Topic + question + feature = all info skills.",
        },
      },
      questions: [
        {
          id: "ela2-u3-info-review-q1",
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
                              "text": "topic, details, questions, features"
                    },
                    {
                              "id": "c",
                              "text": "only poems"
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
          id: "ela2-u3-info-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read an informational text. Find topic, answer one question with detail, name one text feature used.",
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
                                                  "Info texts",
                                                  "Topic + question + feature."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "Info texts",
                                                  "Topic + question + feature."
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
                              "markCode": "AO1"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Topic: ocean; Q: What lives? A: Fish. Feature: caption.'**"
          ]
},
        },
        {
          id: "ela2-u3-info-review-q3",
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
          id: "ela2-u3-info-review-q4",
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
          id: "ela2-u3-info-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Main topic\" mean?",
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
                              "statement": "\"Main topic\" means What it's about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main topic\" means What it's about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main topic** = What it's about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u3-info-review-q6",
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
          id: "ela2-u3-info-review-q7",
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
          id: "ela2-u3-info-review-q8",
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
