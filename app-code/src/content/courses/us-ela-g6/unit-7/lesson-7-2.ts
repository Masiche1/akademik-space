import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ela6-u7-lesson-7-2",
  code: "7-2",
  title: "Vocabulary in Context",
  goal: "I CAN determine word meanings using context clues.",
  standards: ["L.6.4"],
  vocabulary: [
    { term: "Context", definition: "Surrounding words." },
    { term: "Clue", definition: "Hint." },
    { term: "Infer", definition: "Deduce." },
    { term: "Definition", definition: "Meaning." },
    { term: "Synonym", definition: "Same meaning." },
    { term: "Antonym", definition: "Opposite." },
    { term: "Root", definition: "Base word." },
    { term: "Prefix", definition: "Beginning." },
    { term: "Suffix", definition: "End." },
  ],
  concepts: [
    {
      id: "ela6-u7-vocabulary-in-context",
      title: "Vocabulary in context",
      skill: "Use context clues to determine word meanings.",
      lesson: {
        sections: [
          {
            heading: "Clues",
            body: "**Context clues** are hints in surrounding words that help you figure out a word's meaning.",
          },
          {
            heading: "Types",
            body: "Look for **definitions**, **examples**, **synonyms**, **antonyms**, or general context.",
          },
        ],
        keyFormulas: [
          { name: "Context clues", statement: "Surrounding words + word parts = meaning." },
        ],
        workedExample: {
          problem: "'The arduous journey took weeks to complete.' What does 'arduous' mean?",
          solution: "**Difficult/strenuous** — 'took weeks' suggests it was hard.",
        },
      },
      questions: [
        {
          id: "ela6-u7-vocabulary-in-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Context clues' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the dictionary"
                    },
                    {
                              "id": "b",
                              "text": "hints in surrounding words"
                    },
                    {
                              "id": "c",
                              "text": "the title"
                    },
                    {
                              "id": "d",
                              "text": "the pictures"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Hints in words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hints in words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "hints in surrounding words",
          "commonErrors": [
                    "Confuses with dictionary."
          ]
},
        },
        {
          id: "ela6-u7-vocabulary-in-context-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To find a word's meaning, you should look at...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only the word"
                    },
                    {
                              "id": "b",
                              "text": "surrounding words for clues"
                    },
                    {
                              "id": "c",
                              "text": "only the title"
                    },
                    {
                              "id": "d",
                              "text": "only the first line"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Surrounding words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Surrounding words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "surrounding words for clues",
          "commonErrors": [
                    "Too narrow."
          ]
},
        },
        {
          id: "ela6-u7-vocabulary-in-context-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Read this sentence and use context clues: 'The timid rabbit hid behind the bush when it heard the loud noise.' What does 'timid' mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vocabulary",
                              "statement": "Timid = shy/cowardly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Infers meaning.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**'Timid' means shy or easily frightened — 'hid behind bush' shows fear.**",
          "commonErrors": [
                    "Wrong meaning.",
                    "Cannot infer."
          ]
},
        },
        {
          id: "ela6-u7-vocabulary-in-context-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'synonym' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "opposite meaning"
                    },
                    {
                              "id": "b",
                              "text": "same meaning"
                    },
                    {
                              "id": "c",
                              "text": "part of word"
                    },
                    {
                              "id": "d",
                              "text": "example"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Same meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "same meaning",
          "commonErrors": [
                    "Confuses with antonym."
          ]
},
        },
        {
          id: "ela6-u7-vocabulary-in-context-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Use context clues to determine the meaning of an unfamiliar word and explain your reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vocabulary",
                              "statement": "Meaning + reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Infers meaning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains reasoning.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'The frigid water made my teeth chatter' — 'frigid' = extremely cold; 'teeth chatter' suggests cold.'**",
          "commonErrors": [
                    "Cannot infer.",
                    "No reasoning."
          ]
},
        },
        {
          id: "ela6-u7-vocabulary-in-context-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Context\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hint."
                    },
                    {
                              "id": "b",
                              "text": "Surrounding words."
                    },
                    {
                              "id": "c",
                              "text": "Deduce."
                    },
                    {
                              "id": "d",
                              "text": "Meaning."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Context\" means Surrounding words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Context\" means Surrounding words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Context** = Surrounding words.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-vocabulary-in-context-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Clue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Deduce."
                    },
                    {
                              "id": "b",
                              "text": "Meaning."
                    },
                    {
                              "id": "c",
                              "text": "Same meaning."
                    },
                    {
                              "id": "d",
                              "text": "Hint."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Clue\" means Hint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Clue\" means Hint.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Clue** = Hint.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela6-u7-vocabulary-in-context-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Infer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Meaning."
                    },
                    {
                              "id": "b",
                              "text": "Deduce."
                    },
                    {
                              "id": "c",
                              "text": "Same meaning."
                    },
                    {
                              "id": "d",
                              "text": "Opposite."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Infer\" means Deduce."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Infer\" means Deduce.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Infer** = Deduce.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
