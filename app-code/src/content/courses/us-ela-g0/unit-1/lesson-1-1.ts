import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ela0-u1-lesson-1-1",
  code: "1-1",
  title: "Ask and Answer Questions",
  goal: "I CAN ask and answer questions about stories using key details.",
  standards: ["RL.K.1", "RL.K.2"],
  vocabulary: [
    { term: "Question", definition: "Something we ask to learn more." },
    { term: "Answer", definition: "What we say to a question." },
    { term: "Detail", definition: "A small fact or part of the story." },
    { term: "Key detail", definition: "An important detail that helps us understand." },
    { term: "Picture clue", definition: "A detail we can see in an illustration." },
  ],
  concepts: [
    {
      id: "ela0-u1-ask-answer",
      title: "Questions and key details",
      skill: "Ask questions about a story and answer them using key details and picture clues.",
      lesson: {
        sections: [
          {
            heading: "Ask questions",
            body: "Good readers ask: Who is in the story? What happened? Where? Look at the **words** and **pictures** for clues.",
          },
          {
            heading: "Find key details",
            body: "**Key details** are the important parts. If a story says 'Sam kicked the ball,' the detail 'kicked' tells us what Sam did. Pictures show details too.",
          },
        ],
        keyFormulas: [
          { name: "Ask", statement: "Who? What? Where? When? Why?" },
          { name: "Answer", statement: "Use details from the story and pictures." },
        ],
        workedExample: {
          problem: "Story: 'Ben has a red kite. He flies it at the park.' What color is the kite? Where does he fly it?",
          solution: "The kite is **red** (detail: 'red kite'). He flies it at the **park** (detail: 'at the park').",
        },
      },
      questions: [
        {
          id: "ela0-u1-ask-answer-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Story: 'Mia has a small dog. The dog likes to run.' What does the dog like to do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sleep"
                    },
                    {
                              "id": "b",
                              "text": "Run"
                    },
                    {
                              "id": "c",
                              "text": "Swim"
                    },
                    {
                              "id": "d",
                              "text": "Jump"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "The detail 'likes to run' tells us the answer is run."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The detail 'likes to run' tells us the answer is run.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Run",
          "commonErrors": [
                    "Picks an action not in the story."
          ]
},
        },
        {
          id: "ela0-u1-ask-answer-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Story: 'The class planted seeds. Water helped them grow.' What helped the seeds grow?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sun only"
                    },
                    {
                              "id": "b",
                              "text": "Soil only"
                    },
                    {
                              "id": "c",
                              "text": "Water"
                    },
                    {
                              "id": "d",
                              "text": "Nothing"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "The detail 'Water helped them grow' names the cause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The detail 'Water helped them grow' names the cause.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Water",
          "commonErrors": [
                    "Picks a detail not stated."
          ]
},
        },
        {
          id: "ela0-u1-ask-answer-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a short story. Ask one question about it and answer using a detail from the story.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ask and answer",
                              "statement": "Ask a question, answer with a detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Asks a question about the story.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Answers using a key detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Q: What is Sam doing? A: Sam is kicking a ball.'**",
          "commonErrors": [
                    "Question not about story.",
                    "Answer not from story."
          ]
},
        },
        {
          id: "ela0-u1-ask-answer-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'key detail' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any random word"
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
                              "statement": "Key details are important parts that help us understand the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key details are important parts that help us understand the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**important detail**",
          "commonErrors": [
                    "Thinks any word is a key detail."
          ]
},
        },
        {
          id: "ela0-u1-ask-answer-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read a story. Ask two questions about it (who, what, where). Answer each using a detail.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Ask and answer",
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
                    "Answers not from story."
          ]
},
        },
        {
          id: "ela0-u1-ask-answer-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Question\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we say to a question."
                    },
                    {
                              "id": "b",
                              "text": "Something we ask to learn more."
                    },
                    {
                              "id": "c",
                              "text": "A small fact or part of the story."
                    },
                    {
                              "id": "d",
                              "text": "An important detail that helps us understand."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Question\" means Something we ask to learn more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Question\" means Something we ask to learn more.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Question** = Something we ask to learn more.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-ask-answer-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Answer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A small fact or part of the story."
                    },
                    {
                              "id": "b",
                              "text": "An important detail that helps us understand."
                    },
                    {
                              "id": "c",
                              "text": "A detail we can see in an illustration."
                    },
                    {
                              "id": "d",
                              "text": "What we say to a question."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Answer\" means What we say to a question."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Answer\" means What we say to a question.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Answer** = What we say to a question.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-ask-answer-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An important detail that helps us understand."
                    },
                    {
                              "id": "b",
                              "text": "A small fact or part of the story."
                    },
                    {
                              "id": "c",
                              "text": "A detail we can see in an illustration."
                    },
                    {
                              "id": "d",
                              "text": "Something we ask to learn more."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Detail\" means A small fact or part of the story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means A small fact or part of the story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Detail** = A small fact or part of the story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
