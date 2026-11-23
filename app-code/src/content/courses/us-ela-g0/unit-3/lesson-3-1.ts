import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ela0-u3-lesson-3-1",
  code: "3-1",
  title: "Questions About Informational Text",
  goal: "I CAN ask and answer questions about informational texts.",
  standards: ["RI.K.1", "RI.K.2"],
  vocabulary: [
    { term: "Informational text", definition: "A text that teaches us facts." },
    { term: "Fact", definition: "Something true we can learn." },
    { term: "Question", definition: "Ask to learn." },
    { term: "Answer", definition: "What we say back." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Topic", definition: "What the text is about." },
    { term: "Learn", definition: "Gain knowledge." },
  ],
  concepts: [
    {
      id: "ela0-u3-info-questions",
      title: "Questions about informational text",
      skill: "Ask and answer questions about factual texts.",
      lesson: {
        sections: [
          {
            heading: "Informational text",
            body: "An **informational text** teaches us **facts** — real information about the world, like how plants grow or what animals need.",
          },
          {
            heading: "Ask and answer",
            body: "Ask questions about the text and answer them using **key details**. 'What do bees need?' — find the detail that tells us.",
          },
        ],
        keyFormulas: [
          { name: "Informational text", statement: "Teaches facts; ask questions, answer with key details." },
        ],
        workedExample: {
          problem: "Text: 'Bees need flowers for nectar.' Question: 'What do bees need?'",
          solution: "Bees need **flowers for nectar** — that's the key detail.",
        },
      },
      questions: [
        {
          id: "ela0-u3-info-questions-q1",
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
                              "text": "a text that teaches us facts"
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
                              "statement": "Informational text teaches facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Informational text teaches facts.",
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
          id: "ela0-u3-info-questions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Fact' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a made-up story"
                    },
                    {
                              "id": "b",
                              "text": "something true we can learn"
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
                    "Confuses fact with fiction."
          ]
},
        },
        {
          id: "ela0-u3-info-questions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read an informational text. Ask one question and answer it using a detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Info questions",
                              "statement": "Ask + answer with detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asks question + answers with detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Q: What do bees need? A: Flowers for nectar.'**",
          "commonErrors": [
                    "Not about text.",
                    "No detail."
          ]
},
        },
        {
          id: "ela0-u3-info-questions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To answer a question about informational text, use...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "your imagination"
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
                              "statement": "Answer with key details from the text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answer with key details from the text.",
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
          id: "ela0-u3-info-questions-q5",
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
          id: "ela0-u3-info-questions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Informational text\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something true we can learn."
                    },
                    {
                              "id": "b",
                              "text": "A text that teaches us facts."
                    },
                    {
                              "id": "c",
                              "text": "Ask to learn."
                    },
                    {
                              "id": "d",
                              "text": "What we say back."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Informational text\" means A text that teaches us facts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Informational text\" means A text that teaches us facts.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Informational text** = A text that teaches us facts.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u3-info-questions-q7",
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
                              "text": "What we say back."
                    },
                    {
                              "id": "c",
                              "text": "Important detail."
                    },
                    {
                              "id": "d",
                              "text": "Something true we can learn."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Fact\" means Something true we can learn."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Fact\" means Something true we can learn.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Fact** = Something true we can learn.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u3-info-questions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we say back."
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
                              "text": "What the text is about."
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
