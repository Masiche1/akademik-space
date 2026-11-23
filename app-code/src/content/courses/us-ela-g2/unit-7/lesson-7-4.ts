import type { Lesson } from "../../../types.ts";

export const lesson74: Lesson = {
  id: "ela2-u7-lesson-7-4",
  code: "7-4",
  title: "New Words",
  goal: "I CAN learn and use new words I hear or read.",
  standards: ["L.2.4", "L.2.5", "L.2.6"],
  vocabulary: [
    { term: "Vocabulary", definition: "The words we know." },
    { term: "New word", definition: "Word we just learned." },
    { term: "Meaning", definition: "What a word tells us." },
    { term: "Use", definition: "Say word in sentence." },
    { term: "Context", definition: "Words around a word that help." },
    { term: "Picture", definition: "Image that shows meaning." },
    { term: "Synonym", definition: "Word that means same." },
    { term: "Antonym", definition: "Word that means opposite." },
  ],
  concepts: [
    {
      id: "ela2-u7-vocabulary-words",
      title: "Learning new words",
      skill: "Learn new words from context and pictures and use them.",
      lesson: {
        sections: [
          {
            heading: "Words have meanings",
            body: "Each word has a **meaning**. When you hear a **new word**, look at **context** (words around it) and **pictures** to figure out what it means.",
          },
          {
            heading: "Use new words",
            body: "Once you learn a word, **use** it in a sentence. 'The dog was **enormous** — it was as big as a horse!'",
          },
        ],
        keyFormulas: [
          { name: "New words", statement: "Use context + pictures to learn meaning; then use the word." },
        ],
        workedExample: {
          problem: "Learn the word 'delicious'. What does it mean?",
          solution: "'Delicious' means **tasting very good** — 'The cake is delicious.'",
        },
      },
      questions: [
        {
          id: "ela2-u7-vocabulary-words-q1",
          difficulty: "foundation",
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
                              "statement": "'Delicious' = tasting very good."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Delicious' = tasting very good.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**tasting very good**",
          "commonErrors": [
                    "Confuses with smelly."
          ]
},
        },
        {
          id: "ela2-u7-vocabulary-words-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Context' helps us learn new words by...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "ignoring them"
                    },
                    {
                              "id": "b",
                              "text": "the words around them that give clues"
                    },
                    {
                              "id": "c",
                              "text": "making them longer"
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
                              "statement": "Context = surrounding words giving clues."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Context = surrounding words giving clues.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**surrounding words**",
          "commonErrors": [
                    "Thinks context is unrelated."
          ]
},
        },
        {
          id: "ela2-u7-vocabulary-words-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Use a new word in a sentence. What does it mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "New words",
                              "statement": "Use word + meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses new word + gives meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Brave means not afraid; The firefighter is brave.'**",
          "commonErrors": [
                    "Wrong meaning.",
                    "No sentence."
          ]
},
        },
        {
          id: "ela2-u7-vocabulary-words-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'synonym' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an opposite"
                    },
                    {
                              "id": "b",
                              "text": "a word that means the same"
                    },
                    {
                              "id": "c",
                              "text": "a picture"
                    },
                    {
                              "id": "d",
                              "text": "a question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Synonym = same meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Synonym = same meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**same meaning**",
          "commonErrors": [
                    "Confuses with antonym."
          ]
},
        },
        {
          id: "ela2-u7-vocabulary-words-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Learn a new word today. Say what it means, then use it in a sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "New words",
                              "statement": "Meaning + use in sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Defines word correctly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Uses it in a correct sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Brave = not afraid; The firefighter is brave.'**",
          "commonErrors": [
                    "Wrong meaning.",
                    "No sentence."
          ]
},
        },
        {
          id: "ela2-u7-vocabulary-words-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Vocabulary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word we just learned."
                    },
                    {
                              "id": "b",
                              "text": "The words we know."
                    },
                    {
                              "id": "c",
                              "text": "What a word tells us."
                    },
                    {
                              "id": "d",
                              "text": "Say word in sentence."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Vocabulary\" means The words we know."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Vocabulary\" means The words we know.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Vocabulary** = The words we know.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u7-vocabulary-words-q7",
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
                              "text": "Say word in sentence."
                    },
                    {
                              "id": "c",
                              "text": "Words around a word that help."
                    },
                    {
                              "id": "d",
                              "text": "Word we just learned."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"New word\" means Word we just learned."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"New word\" means Word we just learned.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**New word** = Word we just learned.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela2-u7-vocabulary-words-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Meaning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Say word in sentence."
                    },
                    {
                              "id": "b",
                              "text": "What a word tells us."
                    },
                    {
                              "id": "c",
                              "text": "Words around a word that help."
                    },
                    {
                              "id": "d",
                              "text": "Image that shows meaning."
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
