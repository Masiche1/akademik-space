import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ela4-u8-lesson-8-1",
  code: "8-1",
  title: "Vocabulary in Context",
  goal: "I CAN determine word meanings using context clues.",
  standards: ["L.4.4a"],
  vocabulary: [
    { term: "Context clue", definition: "Hint in sentence." },
    { term: "Meaning", definition: "What word means." },
    { term: "Infer", definition: "Figure out." },
    { term: "Synonym", definition: "Same meaning." },
    { term: "Antonym", definition: "Opposite meaning." },
    { term: "Root word", definition: "Base of word." },
    { term: "Prefix", definition: "Beginning of word." },
    { term: "Suffix", definition: "End of word." },
  ],
  concepts: [
    {
      id: "ela4-u8-vocabulary-context",
      title: "Vocabulary in context",
      skill: "Determine word meanings using context clues, roots and affixes.",
      lesson: {
        sections: [
          {
            heading: "Clues around words",
            body: "Use **context clues** — the words around an unknown word — to **infer** its meaning. Also use **roots** and **affixes** (prefixes/suffixes).",
          },
          {
            heading: "Example",
            body: "'The **enormous** elephant couldn't fit through the door.' Context: elephant + door = too big = **enormous means very large**.",
          },
        ],
        keyFormulas: [
          { name: "Context", statement: "Clues + root + prefix/suffix = meaning." },
        ],
        workedExample: {
          problem: "What does 'unhappy' mean? Use the prefix 'un-'.",
          solution: "'Un-' means not; 'happy' = happy; so 'unhappy' = **not happy**.",
        },
      },
      questions: [
        {
          id: "ela4-u8-vocabulary-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'context clue' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a dictionary"
                    },
                    {
                              "id": "b",
                              "text": "a hint in the sentence"
                    },
                    {
                              "id": "c",
                              "text": "a picture"
                    },
                    {
                              "id": "d",
                              "text": "the title"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Context clue = hint."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Context clue = hint.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**a hint in the sentence**",
          "commonErrors": [
                    "Confuses with dictionary."
          ]
},
        },
        {
          id: "ela4-u8-vocabulary-context-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The prefix 'un-' means...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "again"
                    },
                    {
                              "id": "b",
                              "text": "not"
                    },
                    {
                              "id": "c",
                              "text": "before"
                    },
                    {
                              "id": "d",
                              "text": "after"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Un- = not."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Un- = not.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**not**",
          "commonErrors": [
                    "Wrong meaning."
          ]
},
        },
        {
          id: "ela4-u8-vocabulary-context-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find an unknown word in a sentence. Use context clues to guess its meaning, then verify with a dictionary or root analysis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Context",
                              "statement": "Guess + verify."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Guesses from context.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Verifies.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'The timid rabbit hid' - timid = shy; context: hid = scared.'**",
          "commonErrors": [
                    "Guesses randomly.",
                    "No verification."
          ]
},
        },
        {
          id: "ela4-u8-vocabulary-context-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'root word' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the whole word"
                    },
                    {
                              "id": "b",
                              "text": "the base part of a word"
                    },
                    {
                              "id": "c",
                              "text": "a prefix"
                    },
                    {
                              "id": "d",
                              "text": "a suffix"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Root = base part."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Root = base part.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**the base part of a word**",
          "commonErrors": [
                    "Confuses with affix."
          ]
},
        },
        {
          id: "ela4-u8-vocabulary-context-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Analyze a word with a prefix and suffix (e.g., 'unhappiness'). Break it down and explain the meaning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Context",
                              "statement": "Break down + meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breaks down parts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'un- (not) + happy + -ness (state) = state of not being happy.'**",
          "commonErrors": [
                    "Cannot break down.",
                    "No meaning."
          ]
},
        },
        {
          id: "ela4-u8-vocabulary-context-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Context clue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What word means."
                    },
                    {
                              "id": "b",
                              "text": "Hint in sentence."
                    },
                    {
                              "id": "c",
                              "text": "Figure out."
                    },
                    {
                              "id": "d",
                              "text": "Same meaning."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Context clue\" means Hint in sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Context clue\" means Hint in sentence.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Context clue** = Hint in sentence.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-vocabulary-context-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Meaning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Figure out."
                    },
                    {
                              "id": "b",
                              "text": "Same meaning."
                    },
                    {
                              "id": "c",
                              "text": "Opposite meaning."
                    },
                    {
                              "id": "d",
                              "text": "What word means."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Meaning\" means What word means."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Meaning\" means What word means.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Meaning** = What word means.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u8-vocabulary-context-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Infer\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same meaning."
                    },
                    {
                              "id": "b",
                              "text": "Figure out."
                    },
                    {
                              "id": "c",
                              "text": "Opposite meaning."
                    },
                    {
                              "id": "d",
                              "text": "Base of word."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Infer\" means Figure out."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Infer\" means Figure out.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Infer** = Figure out.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
