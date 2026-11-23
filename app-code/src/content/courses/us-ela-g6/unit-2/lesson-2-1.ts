import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ela6-u2-lesson-2-1",
  code: "2-1",
  title: "Character Traits",
  goal: "I CAN analyze character traits using evidence.",
  standards: ["RL.6.3"],
  vocabulary: [
    { term: "Character", definition: "Person in story." },
    { term: "Trait", definition: "Personality quality." },
    { term: "Motivation", definition: "Why they act." },
    { term: "Evidence", definition: "Details proving." },
    { term: "Infer", definition: "Read between lines." },
    { term: "Actions", definition: "What they do." },
    { term: "Dialogue", definition: "What they say." },
    { term: "Development", definition: "How they change." },
  ],
  concepts: [
    {
      id: "ela6-u2-character-traits",
      title: "Character traits",
      skill: "Analyze character traits using evidence from actions, dialogue and thoughts.",
      lesson: {
        sections: [
          {
            heading: "What are traits?",
            body: "**Character traits** are personality qualities: brave, kind, selfish, curious. They're revealed through **actions**, **dialogue**, and **thoughts**.",
          },
          {
            heading: "Evidence",
            body: "Don't just guess — **cite evidence** from the text that shows the trait.",
          },
        ],
        keyFormulas: [
          { name: "Character traits", statement: "Personality qualities revealed through evidence." },
        ],
        workedExample: {
          problem: "A character shares her lunch with a hungry friend every day. What trait does this show?",
          solution: "**Kindness/generosity** — she gives to others.",
        },
      },
      questions: [
        {
          id: "ela6-u2-character-traits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Character traits' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what they look like"
                    },
                    {
                              "id": "b",
                              "text": "personality qualities"
                    },
                    {
                              "id": "c",
                              "text": "where they live"
                    },
                    {
                              "id": "d",
                              "text": "what they say"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Personality qualities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Personality qualities.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "personality qualities",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u2-character-traits-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To prove a character trait, you should...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "guess"
                    },
                    {
                              "id": "b",
                              "text": "cite evidence from the text"
                    },
                    {
                              "id": "c",
                              "text": "look at cover"
                    },
                    {
                              "id": "d",
                              "text": "count words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Cite evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cite evidence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "cite evidence from the text",
          "commonErrors": [
                    "No evidence."
          ]
},
        },
        {
          id: "ela6-u2-character-traits-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read this: 'Jake always helps his little sister with homework, even when he doesn't want to. He says 'It's the right thing to do.' What trait does this show? Cite evidence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Traits",
                              "statement": "Kind/responsible."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies trait.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites evidence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Kind/responsible; Evidence: helps sister even when he doesn't want to, believes it's right.**",
          "commonErrors": [
                    "Wrong trait.",
                    "No evidence."
          ]
},
        },
        {
          id: "ela6-u2-character-traits-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Motivation' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "what they look like"
                    },
                    {
                              "id": "b",
                              "text": "why they act the way they do"
                    },
                    {
                              "id": "c",
                              "text": "where they live"
                    },
                    {
                              "id": "d",
                              "text": "what they say"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Why they act."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Why they act.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "why they act the way they do",
          "commonErrors": [
                    "Confuses with other elements."
          ]
},
        },
        {
          id: "ela6-u2-character-traits-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Identify two character traits and cite specific evidence for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Traits",
                              "statement": "Two traits + evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identifies traits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cites evidence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Brave: faces fear to save friend; Kind: shares lunch with hungry classmate.'**",
          "commonErrors": [
                    "Cannot identify.",
                    "No evidence."
          ]
},
        },
        {
          id: "ela6-u2-character-traits-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Character\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Personality quality."
                    },
                    {
                              "id": "b",
                              "text": "Person in story."
                    },
                    {
                              "id": "c",
                              "text": "Why they act."
                    },
                    {
                              "id": "d",
                              "text": "Details proving."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Character\" means Person in story."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Character\" means Person in story.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Character** = Person in story.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-traits-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Trait\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Why they act."
                    },
                    {
                              "id": "b",
                              "text": "Details proving."
                    },
                    {
                              "id": "c",
                              "text": "Read between lines."
                    },
                    {
                              "id": "d",
                              "text": "Personality quality."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Trait\" means Personality quality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Trait\" means Personality quality.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Trait** = Personality quality.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u2-character-traits-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Motivation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Details proving."
                    },
                    {
                              "id": "b",
                              "text": "Why they act."
                    },
                    {
                              "id": "c",
                              "text": "Read between lines."
                    },
                    {
                              "id": "d",
                              "text": "What they do."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Motivation\" means Why they act."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Motivation\" means Why they act.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Motivation** = Why they act.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
