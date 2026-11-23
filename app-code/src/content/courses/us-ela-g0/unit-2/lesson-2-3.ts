import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ela0-u2-lesson-2-3",
  code: "2-3",
  title: "Story Message",
  goal: "I CAN say what a story is about and what we can learn from it.",
  standards: ["RL.K.2", "RL.K.3"],
  vocabulary: [
    { term: "Message", definition: "What the story teaches us." },
    { term: "Learn", definition: "Gain knowledge or understanding." },
    { term: "About", definition: "The main idea or topic." },
    { term: "Lesson", definition: "Something we learn from a story." },
    { term: "Main idea", definition: "What the story is mostly about." },
    { term: "Theme", definition: "The message or lesson." },
    { term: "Moral", definition: "What we should do differently." },
  ],
  concepts: [
    {
      id: "ela0-u2-story-message",
      title: "Story message",
      skill: "Identify what a story is about and its lesson.",
      lesson: {
        sections: [
          {
            heading: "What is it about?",
            body: "Every story has a **main idea** — what it is mostly about. 'The dog digs a hole' is about a dog digging.",
          },
          {
            heading: "What can we learn?",
            body: "Many stories have a **message** or **lesson** — something we can **learn**. 'Share your toys' teaches us to be kind and share.",
          },
        ],
        keyFormulas: [
          { name: "Message", statement: "Main idea (what it's about) + lesson (what we learn)." },
        ],
        workedExample: {
          problem: "Story: 'The boy shared his snacks with a friend.' What is the message?",
          solution: "The message is **sharing is kind** — we should share with others.",
        },
      },
      questions: [
        {
          id: "ela0-u2-story-message-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story 'message' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "its length"
                    },
                    {
                              "id": "b",
                              "text": "what the story teaches us"
                    },
                    {
                              "id": "c",
                              "text": "its pictures"
                    },
                    {
                              "id": "d",
                              "text": "its author"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Message = what the story teaches us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Message = what the story teaches us.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**what it teaches**",
          "commonErrors": [
                    "Thinks message means length."
          ]
},
        },
        {
          id: "ela0-u2-story-message-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Story: 'The girl told the truth and felt better.' What is the lesson?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "lying is best"
                    },
                    {
                              "id": "b",
                              "text": "telling the truth is good"
                    },
                    {
                              "id": "c",
                              "text": "feelings don't matter"
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
                              "statement": "Lesson = telling the truth is good."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lesson = telling the truth is good.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**truth is good**",
          "commonErrors": [
                    "Picks wrong lesson."
          ]
},
        },
        {
          id: "ela0-u2-story-message-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a story. What is it about? What can we learn from it?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story message",
                              "statement": "Main idea + lesson."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says what it's about.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says the lesson.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'About sharing; we learn to be kind and share.'**",
          "commonErrors": [
                    "Cannot say topic.",
                    "Cannot say lesson."
          ]
},
        },
        {
          id: "ela0-u2-story-message-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Main idea' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a small detail"
                    },
                    {
                              "id": "b",
                              "text": "what the story is mostly about"
                    },
                    {
                              "id": "c",
                              "text": "a picture"
                    },
                    {
                              "id": "d",
                              "text": "the ending only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Main idea = what the story is mostly about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Main idea = what the story is mostly about.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**mostly about**",
          "commonErrors": [
                    "Confuses with detail."
          ]
},
        },
        {
          id: "ela0-u2-story-message-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Tell what a story is about and what lesson it teaches. Explain why.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Story message",
                              "statement": "Topic + lesson + reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Says topic.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Says lesson + why.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'About a lost puppy; lesson: be brave; because the puppy finds its way home.'**",
          "commonErrors": [
                    "No lesson.",
                    "No reason."
          ]
},
        },
        {
          id: "ela0-u2-story-message-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Message\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Gain knowledge or understanding."
                    },
                    {
                              "id": "b",
                              "text": "What the story teaches us."
                    },
                    {
                              "id": "c",
                              "text": "The main idea or topic."
                    },
                    {
                              "id": "d",
                              "text": "Something we learn from a story."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Message\" means What the story teaches us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Message\" means What the story teaches us.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Message** = What the story teaches us.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-story-message-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Learn\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The main idea or topic."
                    },
                    {
                              "id": "b",
                              "text": "Something we learn from a story."
                    },
                    {
                              "id": "c",
                              "text": "What the story is mostly about."
                    },
                    {
                              "id": "d",
                              "text": "Gain knowledge or understanding."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Learn\" means Gain knowledge or understanding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Learn\" means Gain knowledge or understanding.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Learn** = Gain knowledge or understanding.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u2-story-message-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"About\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Something we learn from a story."
                    },
                    {
                              "id": "b",
                              "text": "The main idea or topic."
                    },
                    {
                              "id": "c",
                              "text": "What the story is mostly about."
                    },
                    {
                              "id": "d",
                              "text": "The message or lesson."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"About\" means The main idea or topic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"About\" means The main idea or topic.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**About** = The main idea or topic.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
