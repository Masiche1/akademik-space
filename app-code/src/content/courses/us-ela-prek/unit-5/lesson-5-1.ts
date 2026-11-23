import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "epk-u5-lesson-5-1",
  code: "5-1",
  title: "Sight Words",
  goal: "I CAN read some common words by sight.",
  standards: ["ELOF-PK.LL.READ.1"],
  vocabulary: [
    { term: "Sight word", definition: "A word you recognize instantly without sounding it out." },
    { term: "I", definition: "The word for yourself." },
    { term: "The", definition: "A very common word." },
    { term: "And", definition: "A word that joins things." },
    { term: "Is", definition: "A word that tells what something is." },
  ],
  concepts: [
    {
      id: "epk-u5-sight-words",
      title: "Sight words",
      skill: "Recognize and read common sight words.",
      lesson: {
        sections: [
          {
            heading: "Words you just know",
            body: "Some words you learn to read **by sight** — instantly, without sounding out: 'I', 'the', 'and', 'is', 'a'. These are called **sight words** or **high-frequency words**.",
          },
          {
            heading: "Practice makes permanent",
            body: "Read sight words many times so they become automatic. Flashcards, pointing at words in books, and saying them aloud all help.",
          },
        ],
        keyFormulas: [
          { name: "Sight words", statement: "Common words recognized instantly: I, the, and, is, a, to, in." },
        ],
        workedExample: {
          problem: "Read the sight word 'the'.",
          solution: "'the' is a sight word — you recognize it **instantly** as 'the'.",
        },
      },
      questions: [
        {
          id: "epk-u5-sight-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'sight word'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word you sound out slowly"
                    },
                    {
                              "id": "b",
                              "text": "A word you recognize instantly"
                    },
                    {
                              "id": "c",
                              "text": "A picture"
                    },
                    {
                              "id": "d",
                              "text": "A long word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Sight words are recognized instantly without sounding out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sight words are recognized instantly without sounding out.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Recognize instantly**",
          "commonErrors": [
                    "Thinks sight words are sounded out."
          ]
},
        },
        {
          id: "epk-u5-sight-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a common sight word?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "elephant"
                    },
                    {
                              "id": "b",
                              "text": "the"
                    },
                    {
                              "id": "c",
                              "text": "butterfly"
                    },
                    {
                              "id": "d",
                              "text": "dinosaur"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'the' is a high-frequency sight word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'the' is a high-frequency sight word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the**",
          "commonErrors": [
                    "Picks a long content word."
          ]
},
        },
        {
          id: "epk-u5-sight-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read this sentence and point to the sight words: 'The dog is in the box.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sight words",
                              "statement": "Recognize 'the', 'is', 'in'."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Points to 'the', 'is', 'in' correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the, is, in**",
          "commonErrors": [
                    "Cannot identify sight words.",
                    "Points to wrong words."
          ]
},
        },
        {
          id: "epk-u5-sight-words-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why do we learn sight words?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They are hard"
                    },
                    {
                              "id": "b",
                              "text": "They appear very often and speed up reading"
                    },
                    {
                              "id": "c",
                              "text": "They are pretty"
                    },
                    {
                              "id": "d",
                              "text": "We don't need them"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Sight words are frequent; knowing them makes reading faster."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sight words are frequent; knowing them makes reading faster.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**They appear often, speed up reading**",
          "commonErrors": [
                    "Thinks sight words are optional."
          ]
},
        },
        {
          id: "epk-u5-sight-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Read these sight words aloud: I, the, and, is, a. Then use 'the' and 'and' in a sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sight words",
                              "statement": "Recognize common words instantly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reads all 5 sight words.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Uses 'the' and 'and' in a sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The cat and the dog.'**",
          "commonErrors": [
                    "Cannot read words.",
                    "No sentence."
          ]
},
        },
        {
          id: "epk-u5-sight-words-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Sight word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The word for yourself."
                    },
                    {
                              "id": "b",
                              "text": "A word you recognize instantly without sounding it out."
                    },
                    {
                              "id": "c",
                              "text": "A very common word."
                    },
                    {
                              "id": "d",
                              "text": "A word that joins things."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Sight word\" means A word you recognize instantly without sounding it out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Sight word\" means A word you recognize instantly without sounding it out.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Sight word** = A word you recognize instantly without sounding it out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-sight-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"I\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A very common word."
                    },
                    {
                              "id": "b",
                              "text": "A word that joins things."
                    },
                    {
                              "id": "c",
                              "text": "A word that tells what something is."
                    },
                    {
                              "id": "d",
                              "text": "The word for yourself."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"I\" means The word for yourself."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"I\" means The word for yourself.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**I** = The word for yourself.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u5-sight-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"The\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word that joins things."
                    },
                    {
                              "id": "b",
                              "text": "A very common word."
                    },
                    {
                              "id": "c",
                              "text": "A word that tells what something is."
                    },
                    {
                              "id": "d",
                              "text": "A word you recognize instantly without sounding it out."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"The\" means A very common word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"The\" means A very common word.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**The** = A very common word.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
