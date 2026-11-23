import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ela2-u3-lesson-3-1",
  code: "3-1",
  title: "Questions About Informational Text",
  goal: "I CAN ask and answer questions about informational texts.",
  standards: ["RI.2.1", "RI.2.2"],
  vocabulary: [
    { term: "Informational", definition: "Teaches facts." },
    { term: "Fact", definition: "Something true." },
    { term: "Question", definition: "Ask to learn." },
    { term: "Answer", definition: "What we say." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Topic", definition: "What it's about." },
    { term: "Learn", definition: "Gain knowledge." },
    { term: "Text", definition: "Something to read." },
  ],
  concepts: [
    {
      id: "ela2-u3-info-questions",
      title: "Questions about informational text",
      skill: "Ask and answer questions about factual texts.",
      lesson: {
        sections: [
          {
            heading: "Informational text",
            body: "An **informational text** teaches us **facts** — real information about the world.",
          },
          {
            heading: "Ask and answer",
            body: "Ask questions and answer them using **key details**. 'What do bees need?' — find the detail that tells us.",
          },
        ],
        keyFormulas: [
          { name: "Info questions", statement: "Ask + answer with key detail = understanding info text." },
        ],
        workedExample: {
          problem: "Text: 'Bees need flowers for nectar.' Question: 'What do bees need?'",
          solution: "Bees need **flowers for nectar**.",
        },
      },
      questions: [
        {
          id: "ela2-u3-info-questions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'informational text' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a fairy tale"
                    },
                    {
                              "id": "b",
                              "text": "a text that teaches facts"
                    },
                    {
                              "id": "c",
                              "text": "a poem"
                    },
                    {
                              "id": "d",
                              "text": "a joke"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Info text teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Info text teaches facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**teaches facts**",
          "commonErrors": [
                    "Thinks it's a story."
          ]
},
        },
        {
          id: "ela2-u3-info-questions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Fact' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "made-up"
                    },
                    {
                              "id": "b",
                              "text": "something true"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "a picture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Fact = something true."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fact = something true.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**something true**",
          "commonErrors": [
                    "Confuses with fiction."
          ]
},
        },
        {
          id: "ela2-u3-info-questions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read an informational text. Ask one question and answer it with a detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Info questions",
                              "statement": "Question + answer with detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asks + answers with detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Q: What? A: Flowers (detail).'**",
          "commonErrors": [
                    "Not about text.",
                    "No detail."
          ]
},
        },
        {
          id: "ela2-u3-info-questions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To answer a question about info text, use...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "imagination"
                    },
                    {
                              "id": "b",
                              "text": "key details from the text"
                    },
                    {
                              "id": "c",
                              "text": "a guess"
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
                              "statement": "Use key details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Use key details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**key details**",
          "commonErrors": [
                    "Thinks we can guess."
          ]
},
        },
        {
          id: "ela2-u3-info-questions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read an informational text. Ask two questions and answer each with a detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Info questions",
                              "statement": "Two questions + two detail answers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asks two questions.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Answers both with details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Q: What? A: X. Q: Why? A: Y.'**",
          "commonErrors": [
                    "Only one question.",
                    "No details."
          ]
},
        },
        {
          id: "ela2-u3-info-questions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true."
                    },
                    {
                              "id": "b",
                              "text": "Teaches facts."
                    },
                    {
                              "id": "c",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "d",
                              "text": "What we say."
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
          id: "ela2-u3-info-questions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Fact\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "b",
                              "text": "What we say."
                    },
                    {
                              "id": "c",
                              "text": "Important detail."
                    },
                    {
                              "id": "d",
                              "text": "Something true."
                    }
          ],
          "correctChoiceId": "d"
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
          id: "ela2-u3-info-questions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we say."
                    },
                    {
                              "id": "b",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "c",
                              "text": "Important detail."
                    },
                    {
                              "id": "d",
                              "text": "What it's about."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Question\" means Ask to learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question\" means Ask to learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Question** = Ask to learn.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
