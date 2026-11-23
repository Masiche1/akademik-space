import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ela5-u7-lesson-7-2",
  code: "7-2",
  title: "Determining Word Meanings",
  goal: "I CAN determine word meanings using context clues.",
  standards: ["L.5.4"],
  vocabulary: [
    { term: "Context clue", definition: "Hint in surrounding text." },
    { term: "Meaning", definition: "What word means." },
    { term: "Definition", definition: "What it is." },
    { term: "Synonym", definition: "Same meaning." },
    { term: "Antonym", definition: "Opposite meaning." },
    { term: "Infer", definition: "Figure out." },
    { term: "Vocabulary", definition: "Word knowledge." },
    { term: "Root", definition: "Base of word." },
  ],
  concepts: [
    {
      id: "ela5-u7-word-meanings",
      title: "Determining word meanings",
      skill: "Use context clues to figure out word meanings.",
      lesson: {
        sections: [
          {
            heading: "Clues in context",
            body: "You don't always need a dictionary. **Context clues** — hints in the **surrounding words** — help you figure out meaning.",
          },
          {
            heading: "Types of clues",
            body: "**Definition** (word is defined), **example** (examples given), **synonym** (similar word), **antonym** (opposite word), **inference** (figure it out).",
          },
        ],
        keyFormulas: [
          { name: "Context clues", statement: "Definition + example + synonym + antonym = clues to meaning." },
        ],
        workedExample: {
          problem: "'The arid desert had no water for miles.' What does 'arid' mean?",
          solution: "**Dry** — 'no water for miles' is a clue that arid = dry.",
        },
      },
      questions: [
        {
          id: "ela5-u7-word-meanings-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Context clues' are...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "dictionary definitions"
                    },
                    {
                              "id": "b",
                              "text": "hints in surrounding words"
                    },
                    {
                              "id": "c",
                              "text": "pictures"
                    },
                    {
                              "id": "d",
                              "text": "guesses"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Hints in surrounding words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hints in surrounding words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "hints in surrounding words",
          "commonErrors": [
                    "Thinks it's dictionary."
          ]
},
        },
        {
          id: "ela5-u7-word-meanings-q2",
          difficulty: "core",
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
                              "text": "definition"
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
          id: "ela5-u7-word-meanings-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read a sentence with an unfamiliar word. Use context clues to guess its meaning, then explain your reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word meanings",
                              "statement": "Guess + reasoning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Guesses meaning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains clue.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'The voracious eater finished everything' — voracious = very hungry (clue: 'finished everything').**",
          "commonErrors": [
                    "Cannot guess.",
                    "No reasoning."
          ]
},
        },
        {
          id: "ela5-u7-word-meanings-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'antonym' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "same meaning"
                    },
                    {
                              "id": "b",
                              "text": "opposite meaning"
                    },
                    {
                              "id": "c",
                              "text": "definition"
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
                              "statement": "Opposite meaning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Opposite meaning.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "opposite meaning",
          "commonErrors": [
                    "Confuses with synonym."
          ]
},
        },
        {
          id: "ela5-u7-word-meanings-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how you would use context clues to determine a word's meaning. Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Word meanings",
                              "statement": "Method + example."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains method.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Look at surrounding words for definition/example/synonym/antonym clues.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No example."
          ]
},
        },
        {
          id: "ela5-u7-word-meanings-q6",
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
                              "text": "Hint in surrounding text."
                    },
                    {
                              "id": "c",
                              "text": "What it is."
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
                              "statement": "\"Context clue\" means Hint in surrounding text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Context clue\" means Hint in surrounding text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Context clue** = Hint in surrounding text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u7-word-meanings-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Meaning\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What it is."
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
          id: "ela5-u7-word-meanings-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Definition\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Same meaning."
                    },
                    {
                              "id": "b",
                              "text": "What it is."
                    },
                    {
                              "id": "c",
                              "text": "Opposite meaning."
                    },
                    {
                              "id": "d",
                              "text": "Figure out."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Definition\" means What it is."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Definition\" means What it is.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Definition** = What it is.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
