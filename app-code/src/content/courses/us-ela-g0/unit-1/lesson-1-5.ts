import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "ela0-u1-lesson-1-5",
  code: "1-5",
  title: "Story Details",
  goal: "I CAN find and explain key details in stories.",
  standards: ["RL.K.1", "RL.K.2"],
  vocabulary: [
    { term: "Detail", definition: "A small fact or part." },
    { term: "Key detail", definition: "An important detail." },
    { term: "Explain", definition: "Tell what something means." },
    { term: "Evidence", definition: "Details that support an answer." },
    { term: "Important", definition: "Something that matters." },
    { term: "Support", definition: "Back up with details." },
    { term: "Point to", definition: "Show where in the story." },
  ],
  concepts: [
    {
      id: "ela0-u1-story-details",
      title: "Finding story details",
      skill: "Identify and explain key details that support understanding.",
      lesson: {
        sections: [
          {
            heading: "Details matter",
            body: "**Key details** are the important parts of a story. They tell us who, what, where and why things happen.",
          },
          {
            heading: "Point to evidence",
            body: "When you answer a question, **point to** the detail that supports your answer. 'Sam is sad because the story says he cried.'",
          },
        ],
        keyFormulas: [
          { name: "Key details", statement: "Important story parts that support answers; point to them as evidence." },
        ],
        workedExample: {
          problem: "Story: 'The ice cream melted in the sun.' What detail tells us why?",
          solution: "The detail **'in the sun'** tells us the sun caused it to melt.",
        },
      },
      questions: [
        {
          id: "ela0-u1-story-details-q1",
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
                              "statement": "Key details are important parts that help us understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Key details are important parts that help us understand.",
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
          id: "ela0-u1-story-details-q2",
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
          "finalAnswer": "**point to a detail**",
          "commonErrors": [
                    "Does not use evidence."
          ]
},
        },
        {
          id: "ela0-u1-story-details-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read a story. Find one key detail and explain what it tells us.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Key details",
                              "statement": "Find detail + explain."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds a detail and explains it.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Detail: it rained; tells us the ground got wet.'**",
          "commonErrors": [
                    "Cannot find detail.",
                    "Cannot explain."
          ]
},
        },
        {
          id: "ela0-u1-story-details-q4",
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
                              "statement": "Evidence = details supporting an answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evidence = details supporting an answer.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**details supporting**",
          "commonErrors": [
                    "Confuses with guess."
          ]
},
        },
        {
          id: "ela0-u1-story-details-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Answer a question about a story and point to the detail that proves your answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evidence",
                              "statement": "Answer + supporting detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Answers the question.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Points to supporting detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Q: Is Sam happy? A: Yes — the story says he smiled.'**",
          "commonErrors": [
                    "No evidence.",
                    "Wrong answer."
          ]
},
        },
        {
          id: "ela0-u1-story-details-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An important detail."
                    },
                    {
                              "id": "b",
                              "text": "A small fact or part."
                    },
                    {
                              "id": "c",
                              "text": "Tell what something means."
                    },
                    {
                              "id": "d",
                              "text": "Details that support an answer."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Detail\" means A small fact or part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Detail\" means A small fact or part.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Detail** = A small fact or part.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-story-details-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Key detail\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Tell what something means."
                    },
                    {
                              "id": "b",
                              "text": "Details that support an answer."
                    },
                    {
                              "id": "c",
                              "text": "Something that matters."
                    },
                    {
                              "id": "d",
                              "text": "An important detail."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Key detail\" means An important detail."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Key detail\" means An important detail.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Key detail** = An important detail.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u1-story-details-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Explain\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Details that support an answer."
                    },
                    {
                              "id": "b",
                              "text": "Tell what something means."
                    },
                    {
                              "id": "c",
                              "text": "Something that matters."
                    },
                    {
                              "id": "d",
                              "text": "Back up with details."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Explain\" means Tell what something means."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Explain\" means Tell what something means.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Explain** = Tell what something means.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
