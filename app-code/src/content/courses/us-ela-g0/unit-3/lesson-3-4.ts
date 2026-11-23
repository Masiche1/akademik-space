import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "ela0-u3-lesson-3-4",
  code: "3-4",
  title: "Informational Texts Review",
  goal: "I CAN ask questions, find main topic, key details and use text features.",
  standards: ["RI.K.1", "RI.K.2", "RI.K.5", "RI.K.6"],
  vocabulary: [
    { term: "Informational", definition: "Teaches facts." },
    { term: "Main topic", definition: "What it's mostly about." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Text feature", definition: "Part that helps find info." },
    { term: "Heading", definition: "Section title." },
    { term: "Caption", definition: "Explains picture." },
    { term: "Glossary", definition: "Word meanings." },
  ],
  concepts: [
    {
      id: "ela0-u3-info-texts-review",
      title: "Informational texts review",
      skill: "Combine questions, topic, details and text features.",
      lesson: {
        sections: [
          {
            heading: "All about info texts",
            body: "Informational texts teach **facts**. We find the **main topic**, identify **key details**, ask and answer questions, and use **text features** (headings, captions, glossaries) to navigate.",
          },
          {
            heading: "Put it together",
            body: "Read an info text, find the topic, answer questions with details, and use features to locate information.",
          },
        ],
        keyFormulas: [
          { name: "Info texts", statement: "Topic + details + questions + features = understanding nonfiction." },
        ],
        workedExample: {
          problem: "Read an info text: find topic, answer a question, use a feature.",
          solution: "Topic: X; Q: answered with detail Y; used heading/caption to find info.",
        },
      },
      questions: [
        {
          id: "ela0-u3-info-texts-review-q1",
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
                              "text": "topic, details, questions, text features"
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
                              "statement": "All info text skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All info text skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**all info skills**",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela0-u3-info-texts-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read an informational text. Find the main topic, answer one question with a detail, and name one text feature you used.",
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
                    "**e.g., 'Topic: ocean; Q: What lives there? A: Fish. Feature: caption.'**"
          ]
},
        },
        {
          id: "ela0-u3-info-texts-review-q3",
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
                    "Thinks features are unrelated."
          ]
},
        },
        {
          id: "ela0-u3-info-texts-review-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it's mostly about."
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
                              "text": "Part that helps find info."
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
          id: "ela0-u3-info-texts-review-q5",
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
                              "text": "Part that helps find info."
                    },
                    {
                              "id": "c",
                              "text": "Section title."
                    },
                    {
                              "id": "d",
                              "text": "What it's mostly about."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Main topic\" means What it's mostly about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Main topic\" means What it's mostly about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Main topic** = What it's mostly about.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u3-info-texts-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Part that helps find info."
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
          id: "ela0-u3-info-texts-review-q7",
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
                              "text": "Part that helps find info."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text feature\" means Part that helps find info."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text feature\" means Part that helps find info.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text feature** = Part that helps find info.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u3-info-texts-review-q8",
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
                              "text": "Teaches facts."
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
