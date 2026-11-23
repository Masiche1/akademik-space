import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ela3-u1-lesson-1-1",
  code: "1-1",
  title: "Ask and Answer Questions",
  goal: "I CAN ask and answer questions about stories using key details.",
  standards: ["RL.3.1"],
  vocabulary: [
    { term: "Question", definition: "Ask to learn." },
    { term: "Answer", definition: "What we say back." },
    { term: "Detail", definition: "Small fact." },
    { term: "Key detail", definition: "Important detail." },
    { term: "Evidence", definition: "Detail supporting answer." },
    { term: "Point to", definition: "Show where." },
    { term: "Story", definition: "A tale." },
    { term: "Character", definition: "Who is in story." },
  ],
  concepts: [
    {
      id: "ela3-u1-ask-questions",
      title: "Questions and key details",
      skill: "Ask questions about stories and answer using key details.",
      lesson: {
        sections: [
          {
            heading: "Ask and answer",
            body: "Good readers **ask questions** (who, what, where, when, why, how) and **answer** them using **key details** from the story.",
          },
          {
            heading: "Point to evidence",
            body: "When you answer, **point to** the detail that proves it: 'Sam is sad **because** the story says he cried.'",
          },
        ],
        keyFormulas: [
          { name: "Ask/answer", statement: "Question + answer with key detail = understanding." },
        ],
        workedExample: {
          problem: "Story: 'The dog ran to the park.' Question: 'Where did the dog run?'",
          solution: "The dog ran to the **park** — that's the key detail.",
        },
      },
      questions: [
        {
          id: "ela3-u1-ask-questions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'key detail' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any word"
                    },
                    {
                              "id": "b",
                              "text": "an important detail that helps us understand"
                    },
                    {
                              "id": "c",
                              "text": "a picture only"
                    },
                    {
                              "id": "d",
                              "text": "the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Key detail = important detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key detail = important detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**important detail**",
          "commonErrors": [
                    "Thinks any word qualifies."
          ]
},
        },
        {
          id: "ela3-u1-ask-questions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To support your answer, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "point to a detail from the story"
                    },
                    {
                              "id": "c",
                              "text": "make something up"
                    },
                    {
                              "id": "d",
                              "text": "ignore the story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Point to a detail as evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point to a detail as evidence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**point to detail**",
          "commonErrors": [
                    "Does not use evidence."
          ]
},
        },
        {
          id: "ela3-u1-ask-questions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Ask one question and answer it using a key detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ask/answer",
                              "statement": "Question + answer with detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asks question + answers with detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Q: Where? A: The park (detail: ran to park).'**",
          "commonErrors": [
                    "Not about story.",
                    "No detail."
          ]
},
        },
        {
          id: "ela3-u1-ask-questions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Evidence' in a story is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a guess"
                    },
                    {
                              "id": "b",
                              "text": "details that support an answer"
                    },
                    {
                              "id": "c",
                              "text": "a picture"
                    },
                    {
                              "id": "d",
                              "text": "the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Evidence = supporting details."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence = supporting details.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**supporting details**",
          "commonErrors": [
                    "Confuses with guess."
          ]
},
        },
        {
          id: "ela3-u1-ask-questions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read a story. Ask two questions (who, what, where) and answer each with a detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ask/answer",
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
          "finalAnswer": "**e.g., 'Q: Who? A: Mia. Q: What? A: She has a dog.'**",
          "commonErrors": [
                    "Only one question.",
                    "No details."
          ]
},
        },
        {
          id: "ela3-u1-ask-questions-q6",
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
                              "text": "Small fact."
                    },
                    {
                              "id": "d",
                              "text": "Important detail."
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
        {
          id: "ela3-u1-ask-questions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Answer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Small fact."
                    },
                    {
                              "id": "b",
                              "text": "Important detail."
                    },
                    {
                              "id": "c",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "d",
                              "text": "What we say back."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Answer\" means What we say back."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Answer\" means What we say back.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Answer** = What we say back.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela3-u1-ask-questions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Important detail."
                    },
                    {
                              "id": "b",
                              "text": "Small fact."
                    },
                    {
                              "id": "c",
                              "text": "Detail supporting answer."
                    },
                    {
                              "id": "d",
                              "text": "Show where."
                    }
          ],
          "correctChoiceId": "b"
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
      ],
    },
  ],
};
