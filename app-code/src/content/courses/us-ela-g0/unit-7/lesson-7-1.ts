import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ela0-u7-lesson-7-1",
  code: "7-1",
  title: "Capitalization",
  goal: "I CAN use capital letters for names, sentences and the word I.",
  standards: ["L.K.1", "L.K.2"],
  vocabulary: [
    { term: "Capital letter", definition: "A big letter used at the start." },
    { term: "Uppercase", definition: "Big letters: A, B, C." },
    { term: "Sentence", definition: "A complete thought." },
    { term: "Name", definition: "A person's or place's name." },
    { term: "I", definition: "The word for yourself — always capital." },
    { term: "Start", definition: "The beginning of a sentence." },
  ],
  concepts: [
    {
      id: "ela0-u7-capitalization",
      title: "Capitalization",
      skill: "Use capital letters correctly at sentence starts, for names, and for 'I'.",
      lesson: {
        sections: [
          {
            heading: "When to capitalize",
            body: "Use a **capital letter** at the **start** of every **sentence**, for **names** (Sam, Monday, Main Street), and for the word **I**.",
          },
          {
            heading: "Why it matters",
            body: "Capital letters help readers know where sentences start and which words are names. 'i like sam' should be 'I like Sam.'",
          },
        ],
        keyFormulas: [
          { name: "Capitalize", statement: "Sentence start + names + 'I' = capital letter." },
        ],
        workedExample: {
          problem: "Fix: 'i went to the park with sam on monday.'",
          solution: "'**I** went to the park with **Sam** on **Monday**.' — capitalize I, names.",
        },
      },
      questions: [
        {
          id: "ela0-u7-capitalization-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which needs a capital letter?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the word 'the'"
                    },
                    {
                              "id": "b",
                              "text": "the word 'I'"
                    },
                    {
                              "id": "c",
                              "text": "the word 'and'"
                    },
                    {
                              "id": "d",
                              "text": "a lowercase letter mid-sentence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'I' is always capitalized."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'I' is always capitalized.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**I**",
          "commonErrors": [
                    "Picks a word that doesn't need it."
          ]
},
        },
        {
          id: "ela0-u7-capitalization-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "We capitalize names like...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dog"
                    },
                    {
                              "id": "b",
                              "text": "Sam and Monday"
                    },
                    {
                              "id": "c",
                              "text": "run"
                    },
                    {
                              "id": "d",
                              "text": "the"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Names (people, days, places) are capitalized."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names (people, days, places) are capitalized.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sam, Monday**",
          "commonErrors": [
                    "Picks common nouns."
          ]
},
        },
        {
          id: "ela0-u7-capitalization-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a sentence and capitalize it correctly (start, names, 'I').",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Capitalize",
                              "statement": "Sentence start + names + I."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Capitalizes correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I went to the park with Sam on Monday.'**",
          "commonErrors": [
                    "Missing capitals.",
                    "Cannot write sentence."
          ]
},
        },
        {
          id: "ela0-u7-capitalization-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A capital letter is used...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only for names"
                    },
                    {
                              "id": "b",
                              "text": "at sentence start, for names, and for 'I'"
                    },
                    {
                              "id": "c",
                              "text": "only at the end"
                    },
                    {
                              "id": "d",
                              "text": "never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Start + names + I."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Start + names + I.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**start + names + I**",
          "commonErrors": [
                    "Thinks only names."
          ]
},
        },
        {
          id: "ela0-u7-capitalization-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write two sentences. Capitalize the first letter of each, any names, and the word 'I'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Capitalize",
                              "statement": "2 sentences + all capitals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Capitalizes sentence starts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Capitalizes names and 'I'.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'I like dogs. Sam and I played at the park.'**",
          "commonErrors": [
                    "Missing capitals.",
                    "Only one sentence."
          ]
},
        },
        {
          id: "ela0-u7-capitalization-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Capital letter\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Big letters: A, B, C."
                    },
                    {
                              "id": "b",
                              "text": "A big letter used at the start."
                    },
                    {
                              "id": "c",
                              "text": "A complete thought."
                    },
                    {
                              "id": "d",
                              "text": "A person's or place's name."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Capital letter\" means A big letter used at the start."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Capital letter\" means A big letter used at the start.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Capital letter** = A big letter used at the start.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u7-capitalization-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Uppercase\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A complete thought."
                    },
                    {
                              "id": "b",
                              "text": "A person's or place's name."
                    },
                    {
                              "id": "c",
                              "text": "The word for yourself — always capital."
                    },
                    {
                              "id": "d",
                              "text": "Big letters: A, B, C."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Uppercase\" means Big letters: A, B, C."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Uppercase\" means Big letters: A, B, C.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Uppercase** = Big letters: A, B, C.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela0-u7-capitalization-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sentence\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A person's or place's name."
                    },
                    {
                              "id": "b",
                              "text": "A complete thought."
                    },
                    {
                              "id": "c",
                              "text": "The word for yourself — always capital."
                    },
                    {
                              "id": "d",
                              "text": "The beginning of a sentence."
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
