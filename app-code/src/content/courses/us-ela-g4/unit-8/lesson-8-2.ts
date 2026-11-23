import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ela4-u8-lesson-8-2",
  code: "8-2",
  title: "Grammar and Conventions",
  goal: "I CAN use correct grammar: punctuation, capitalization and subject-verb agreement.",
  standards: ["L.4.1", "L.4.2"],
  vocabulary: [
    { term: "Grammar", definition: "Language rules." },
    { term: "Punctuation", definition: "Marks like .,!?." },
    { term: "Capitalization", definition: "Capital letters." },
    { term: "Subject-verb", definition: "They must agree." },
    { term: "Sentence", definition: "Complete thought." },
    { term: "Fragment", definition: "Incomplete sentence." },
    { term: "Run-on", definition: "Too many ideas." },
    { term: "Comma", definition: "Pause mark." },
  ],
  concepts: [
    {
      id: "ela4-u8-grammar-conventions",
      title: "Grammar and conventions",
      skill: "Use correct punctuation, capitalization and subject-verb agreement.",
      lesson: {
        sections: [
          {
            heading: "Language rules",
            body: "**Grammar** = rules for language. Use correct **punctuation** (.,!?), **capitalization** (names, starts), and **subject-verb agreement** ('The dog runs' not 'The dog run').",
          },
          {
            heading: "Complete sentences",
            body: "Every sentence needs a **subject** and **verb** and must be a **complete thought** — not a **fragment** or **run-on**.",
          },
        ],
        keyFormulas: [
          { name: "Grammar", statement: "Punctuation + capitalization + agreement = correct sentences." },
        ],
        workedExample: {
          problem: "Fix: 'the dog run fast'",
          solution: "'**The** dog **runs** fast.' — capitalize 'The', change 'run' to 'runs' (singular subject).",
        },
      },
      questions: [
        {
          id: "ela4-u8-grammar-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Subject-verb agreement means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any verb works"
                    },
                    {
                              "id": "b",
                              "text": "singular subject + singular verb"
                    },
                    {
                              "id": "c",
                              "text": "plural always"
                    },
                    {
                              "id": "d",
                              "text": "no agreement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Singular + singular."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Singular + singular.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**singular subject + singular verb**",
          "commonErrors": [
                    "Wrong agreement."
          ]
},
        },
        {
          id: "ela4-u8-grammar-conventions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'fragment' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a complete sentence"
                    },
                    {
                              "id": "b",
                              "text": "an incomplete sentence"
                    },
                    {
                              "id": "c",
                              "text": "a question"
                    },
                    {
                              "id": "d",
                              "text": "a command"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Fragment = incomplete."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fragment = incomplete.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**an incomplete sentence**",
          "commonErrors": [
                    "Thinks it's complete."
          ]
},
        },
        {
          id: "ela4-u8-grammar-conventions-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fix this sentence: 'me and him goes to school'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Grammar",
                              "statement": "'He and I go to school.'"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixes all errors.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**'He and I go to school.' — subject order + 'goes'->'go'**",
          "commonErrors": [
                    "Still wrong.",
                    "Misses errors."
          ]
},
        },
        {
          id: "ela4-u8-grammar-conventions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Run-on sentence' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a question"
                    },
                    {
                              "id": "b",
                              "text": "two complete thoughts joined without punctuation"
                    },
                    {
                              "id": "c",
                              "text": "a fragment"
                    },
                    {
                              "id": "d",
                              "text": "a command"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Run-on = joined without punctuation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Run-on = joined without punctuation.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**two complete thoughts joined without punctuation**",
          "commonErrors": [
                    "Confuses with fragment."
          ]
},
        },
        {
          id: "ela4-u8-grammar-conventions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write three sentences: one with correct subject-verb agreement, one fragment to fix, and one run-on to fix.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Grammar",
                              "statement": "Three examples."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes all three.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Correctly identifies/fixes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Correct: The cat sleeps. Fragment: 'Running fast.' -> 'He is running fast.' Run-on: 'I like dogs I have one.' -> 'I like dogs. I have one.'**",
          "commonErrors": [
                    "Cannot do all.",
                    "Wrong fixes."
          ]
},
        },
        {
          id: "ela4-u8-grammar-conventions-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Grammar\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Marks like .,!?."
                    },
                    {
                              "id": "b",
                              "text": "Language rules."
                    },
                    {
                              "id": "c",
                              "text": "Capital letters."
                    },
                    {
                              "id": "d",
                              "text": "They must agree."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Grammar\" means Language rules."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Grammar\" means Language rules.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Grammar** = Language rules.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-grammar-conventions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Punctuation\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Capital letters."
                    },
                    {
                              "id": "b",
                              "text": "They must agree."
                    },
                    {
                              "id": "c",
                              "text": "Complete thought."
                    },
                    {
                              "id": "d",
                              "text": "Marks like .,!?."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Punctuation\" means Marks like .,!?."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Punctuation\" means Marks like .,!?.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Punctuation** = Marks like .,!?.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-grammar-conventions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Capitalization\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They must agree."
                    },
                    {
                              "id": "b",
                              "text": "Capital letters."
                    },
                    {
                              "id": "c",
                              "text": "Complete thought."
                    },
                    {
                              "id": "d",
                              "text": "Incomplete sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Capitalization\" means Capital letters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Capitalization\" means Capital letters.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Capitalization** = Capital letters.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
