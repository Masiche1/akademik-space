import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ela0-u4-lesson-4-2",
  code: "4-2",
  title: "State Your Opinion",
  goal: "I CAN write a sentence that states what I like or think.",
  standards: ["W.K.1"],
  vocabulary: [
    { term: "State", definition: "Say clearly." },
    { term: "Opinion", definition: "What we think or like." },
    { term: "Sentence", definition: "A complete thought." },
    { term: "I like", definition: "States a preference." },
    { term: "I think", definition: "States a belief." },
    { term: "My favorite", definition: "States a top choice." },
    { term: "Clear", definition: "Easy to understand." },
  ],
  concepts: [
    {
      id: "ela0-u4-state-opinion",
      title: "Stating an opinion",
      skill: "Write a clear sentence stating a preference or belief.",
      lesson: {
        sections: [
          {
            heading: "Say what you think",
            body: "To **state** an opinion, use words like 'I like', 'I think', 'my favorite is'. 'I like dogs because they are friendly' states your opinion clearly.",
          },
          {
            heading: "Make it clear",
            body: "A good opinion sentence is **clear** — anyone can understand what you like or think. 'Dogs are nice' is clear; 'They are good' is not (who is 'they'?).",
          },
        ],
        keyFormulas: [
          { name: "State opinion", statement: "Use 'I like', 'I think', 'my favorite is' + clear subject." },
        ],
        workedExample: {
          problem: "Write an opinion sentence about your favorite animal.",
          solution: "'My favorite animal is the **dog** because it is friendly and playful.'",
        },
      },
      questions: [
        {
          id: "ela0-u4-state-opinion-q1",
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
                              "text": "Water boils at 100 degrees"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'I like dogs' states an opinion/preference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I like dogs' states an opinion/preference.",
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
          id: "ela0-u4-state-opinion-q2",
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
          id: "ela0-u4-state-opinion-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write an opinion sentence about something you like (food, animal, activity, book).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "State opinion",
                              "statement": "Use 'I like/think/favorite' + clear subject."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes a clear opinion sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'My favorite food is pizza.'**",
          "commonErrors": [
                    "States a fact.",
                    "Unclear subject."
          ]
},
        },
        {
          id: "ela0-u4-state-opinion-q4",
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
                              "statement": "Clear = names what you like/think."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear = names what you like/think.",
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
          id: "ela0-u4-state-opinion-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write two opinion sentences: one about food and one about an animal. Use 'I like' or 'my favorite'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "State opinion",
                              "statement": "Two clear opinion sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes two opinion sentences.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Both are clear and about different topics.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like pizza. My favorite animal is the dog.'**",
          "commonErrors": [
                    "Only one sentence.",
                    "States facts."
          ]
},
        },
        {
          id: "ela0-u4-state-opinion-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"State\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What we think or like."
                    },
                    {
                              "id": "b",
                              "text": "Say clearly."
                    },
                    {
                              "id": "c",
                              "text": "A complete thought."
                    },
                    {
                              "id": "d",
                              "text": "States a preference."
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
          id: "ela0-u4-state-opinion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Opinion\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A complete thought."
                    },
                    {
                              "id": "b",
                              "text": "States a preference."
                    },
                    {
                              "id": "c",
                              "text": "States a belief."
                    },
                    {
                              "id": "d",
                              "text": "What we think or like."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Opinion\" means What we think or like."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Opinion\" means What we think or like.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Opinion** = What we think or like.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u4-state-opinion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sentence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "States a preference."
                    },
                    {
                              "id": "b",
                              "text": "A complete thought."
                    },
                    {
                              "id": "c",
                              "text": "States a belief."
                    },
                    {
                              "id": "d",
                              "text": "States a top choice."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sentence\" means A complete thought."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sentence\" means A complete thought.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sentence** = A complete thought.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
