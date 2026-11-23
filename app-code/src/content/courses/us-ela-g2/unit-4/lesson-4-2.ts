import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ela2-u4-lesson-4-2",
  code: "4-2",
  title: "State Your Opinion",
  goal: "I CAN write a sentence stating my opinion.",
  standards: ["W.2.1"],
  vocabulary: [
    { term: "State", definition: "Say clearly." },
    { term: "Opinion", definition: "What we think." },
    { term: "Sentence", definition: "Complete thought." },
    { term: "I like", definition: "States preference." },
    { term: "I think", definition: "States belief." },
    { term: "My favorite", definition: "States top choice." },
    { term: "Clear", definition: "Easy to understand." },
    { term: "Subject", definition: "Who/what." },
  ],
  concepts: [
    {
      id: "ela2-u4-state-opinion",
      title: "Stating an opinion",
      skill: "Write a clear sentence stating a preference or belief.",
      lesson: {
        sections: [
          {
            heading: "Say what you think",
            body: "To **state** an opinion, use 'I like', 'I think', 'my favorite is'. 'I like dogs because they are friendly' states your opinion clearly.",
          },
          {
            heading: "Make it clear",
            body: "A good opinion sentence is **clear** — anyone can understand what you like or think.",
          },
        ],
        keyFormulas: [
          { name: "State opinion", statement: "Use 'I like/think/favorite' + clear subject." },
        ],
        workedExample: {
          problem: "Write an opinion sentence about your favorite animal.",
          solution: "'My favorite animal is the **dog** because it is friendly.'",
        },
      },
      questions: [
        {
          id: "ela2-u4-state-opinion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence states an opinion?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Dogs have four legs"
                    },
                    {
                              "id": "b",
                              "text": "I like dogs because they are friendly"
                    },
                    {
                              "id": "c",
                              "text": "The sky is blue"
                    },
                    {
                              "id": "d",
                              "text": "Water boils at 100"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'I like dogs' states opinion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I like dogs' states opinion.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**I like dogs**",
          "commonErrors": [
                    "Picks a fact."
          ]
},
        },
        {
          id: "ela2-u4-state-opinion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Words like 'I like', 'I think', 'my favorite' are used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "state facts"
                    },
                    {
                              "id": "b",
                              "text": "state opinions"
                    },
                    {
                              "id": "c",
                              "text": "ask questions"
                    },
                    {
                              "id": "d",
                              "text": "describe things"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "These words signal opinions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "These words signal opinions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**state opinions**",
          "commonErrors": [
                    "Confuses with facts."
          ]
},
        },
        {
          id: "ela2-u4-state-opinion-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write an opinion sentence about something you like.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "State opinion",
                              "statement": "Use 'I like/think/favorite'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes clear opinion sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'My favorite food is pizza.'**",
          "commonErrors": [
                    "States a fact.",
                    "Unclear."
          ]
},
        },
        {
          id: "ela2-u4-state-opinion-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A clear opinion sentence should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "be confusing"
                    },
                    {
                              "id": "b",
                              "text": "name what you like or think clearly"
                    },
                    {
                              "id": "c",
                              "text": "be very long"
                    },
                    {
                              "id": "d",
                              "text": "have no subject"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Clear = names what you like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear = names what you like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**clear subject**",
          "commonErrors": [
                    "Thinks vague is fine."
          ]
},
        },
        {
          id: "ela2-u4-state-opinion-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write two opinion sentences: one about food, one about an animal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "State opinion",
                              "statement": "Two opinion sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes two opinion sentences.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both clear and different topics.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like pizza. My favorite animal is the dog.'**",
          "commonErrors": [
                    "Only one.",
                    "States facts."
          ]
},
        },
        {
          id: "ela2-u4-state-opinion-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"State\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we think."
                    },
                    {
                              "id": "b",
                              "text": "Say clearly."
                    },
                    {
                              "id": "c",
                              "text": "Complete thought."
                    },
                    {
                              "id": "d",
                              "text": "States preference."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"State\" means Say clearly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"State\" means Say clearly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**State** = Say clearly.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u4-state-opinion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Complete thought."
                    },
                    {
                              "id": "b",
                              "text": "States preference."
                    },
                    {
                              "id": "c",
                              "text": "States belief."
                    },
                    {
                              "id": "d",
                              "text": "What we think."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Opinion\" means What we think."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opinion\" means What we think.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Opinion** = What we think.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u4-state-opinion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sentence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "States preference."
                    },
                    {
                              "id": "b",
                              "text": "Complete thought."
                    },
                    {
                              "id": "c",
                              "text": "States belief."
                    },
                    {
                              "id": "d",
                              "text": "States top choice."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sentence\" means Complete thought."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sentence\" means Complete thought.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sentence** = Complete thought.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
