import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "epk-u4-lesson-4-1",
  code: "4-1",
  title: "Learning New Words",
  goal: "I CAN learn and use new words I hear.",
  standards: ["ELOF-PK.LL.VOCAB.1"],
  vocabulary: [
    { term: "Vocabulary", definition: "The words we know and use." },
    { term: "New word", definition: "A word we just learned." },
    { term: "Meaning", definition: "What a word tells us." },
    { term: "Use", definition: "Say the word in a sentence." },
    { term: "Learn", definition: "Find out what a word means." },
  ],
  concepts: [
    {
      id: "epk-u4-new-words",
      title: "Learning new words",
      skill: "Hear a new word, learn its meaning, and use it.",
      lesson: {
        sections: [
          {
            heading: "Hear and learn",
            body: "When you hear a **new word**, ask 'What does it mean?' Adults can tell you. Then try to **use** it: 'The dog is **huge**!'",
          },
          {
            heading: "Words are tools",
            body: "The more words you know, the better you can tell people what you think and feel. 'Happy', 'sad', 'big', 'small' — each word gives you a precise idea.",
          },
        ],
        keyFormulas: [
          { name: "Vocabulary", statement: "Learn a word's meaning, then use it in a sentence." },
        ],
        workedExample: {
          problem: "Learn the word 'enormous'. What does it mean?",
          solution: "'Enormous' means **very big** — 'The elephant is enormous.'",
        },
      },
      questions: [
        {
          id: "epk-u4-new-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'enormous' mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "tiny"
                    },
                    {
                              "id": "b",
                              "text": "very big"
                    },
                    {
                              "id": "c",
                              "text": "fast"
                    },
                    {
                              "id": "d",
                              "text": "sad"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Enormous' means very big."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Enormous' means very big.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Very big**",
          "commonErrors": [
                    "Confuses with 'tiny'."
          ]
},
        },
        {
          id: "epk-u4-new-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is it good to learn new words?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To sound smart only"
                    },
                    {
                              "id": "b",
                              "text": "To say exactly what we mean"
                    },
                    {
                              "id": "c",
                              "text": "It is not good"
                    },
                    {
                              "id": "d",
                              "text": "To confuse people"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "More words = better expression of ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More words = better expression of ideas.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Say exactly what we mean**",
          "commonErrors": [
                    "Thinks vocabulary is pointless."
          ]
},
        },
        {
          id: "epk-u4-new-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Use the word 'tiny' in a sentence about something small.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Use vocabulary",
                              "statement": "'Tiny' = very small."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses 'tiny' correctly in a sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The ant is tiny.'**",
          "commonErrors": [
                    "Wrong meaning.",
                    "Cannot make sentence."
          ]
},
        },
        {
          id: "epk-u4-new-words-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'delicious' mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "smelly"
                    },
                    {
                              "id": "b",
                              "text": "tasting very good"
                    },
                    {
                              "id": "c",
                              "text": "cold"
                    },
                    {
                              "id": "d",
                              "text": "loud"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "'Delicious' means tasting very good."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Delicious' means tasting very good.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Tasting very good**",
          "commonErrors": [
                    "Confuses with 'smelly'."
          ]
},
        },
        {
          id: "epk-u4-new-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Learn a new word today. Say what it means and use it in a sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vocabulary",
                              "statement": "Learn meaning, then use word."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines the word correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Uses it in a correct sentence.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "**e.g., 'Brave' = not afraid; 'The firefighter is brave.'**",
          "commonErrors": [
                    "Wrong meaning.",
                    "No sentence."
          ]
},
        },
        {
          id: "epk-u4-new-words-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vocabulary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A word we just learned."
                    },
                    {
                              "id": "b",
                              "text": "The words we know and use."
                    },
                    {
                              "id": "c",
                              "text": "What a word tells us."
                    },
                    {
                              "id": "d",
                              "text": "Say the word in a sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Vocabulary\" means The words we know and use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vocabulary\" means The words we know and use.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Vocabulary** = The words we know and use.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-new-words-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"New word\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What a word tells us."
                    },
                    {
                              "id": "b",
                              "text": "Say the word in a sentence."
                    },
                    {
                              "id": "c",
                              "text": "Find out what a word means."
                    },
                    {
                              "id": "d",
                              "text": "A word we just learned."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"New word\" means A word we just learned."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"New word\" means A word we just learned.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**New word** = A word we just learned.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "epk-u4-new-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Meaning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say the word in a sentence."
                    },
                    {
                              "id": "b",
                              "text": "What a word tells us."
                    },
                    {
                              "id": "c",
                              "text": "Find out what a word means."
                    },
                    {
                              "id": "d",
                              "text": "The words we know and use."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Meaning\" means What a word tells us."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Meaning\" means What a word tells us.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Meaning** = What a word tells us.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
