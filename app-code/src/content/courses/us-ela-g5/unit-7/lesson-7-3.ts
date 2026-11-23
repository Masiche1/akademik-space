import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "ela5-u7-lesson-7-3",
  code: "7-3",
  title: "Using Reference Materials",
  goal: "I CAN use dictionaries, glossaries and thesauruses.",
  standards: ["L.5.4"],
  vocabulary: [
    { term: "Dictionary", definition: "Word meanings." },
    { term: "Glossary", definition: "Mini dictionary in book." },
    { term: "Thesaurus", definition: "Synonyms/antonyms." },
    { term: "Entry", definition: "Word listing." },
    { term: "Part of speech", definition: "Noun, verb, etc." },
    { term: "Pronunciation", definition: "How to say it." },
    { term: "Example sentence", definition: "Shows usage." },
    { term: "Alphabetical", definition: "A to Z order." },
  ],
  concepts: [
    {
      id: "ela5-u7-reference-materials",
      title: "Using reference materials",
      skill: "Use dictionaries, glossaries and thesauruses to find word meanings.",
      lesson: {
        sections: [
          {
            heading: "Tools",
            body: "A **dictionary** gives **definitions**; a **glossary** is a mini-dictionary at the back of a book; a **thesaurus** gives **synonyms** (similar words) and **antonyms** (opposites).",
          },
          {
            heading: "How to use",
            body: "Look up words **alphabetically**. Read the **part of speech** (noun, verb, adjective) and the **example sentence** to understand usage.",
          },
        ],
        keyFormulas: [
          { name: "Reference", statement: "Dictionary + glossary + thesaurus = word tools." },
        ],
        workedExample: {
          problem: "Look up 'enormous' in a thesaurus. What synonyms do you find?",
          solution: "**Huge, gigantic, immense, vast** — all mean very large.",
        },
      },
      questions: [
        {
          id: "ela5-u7-reference-materials-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'glossary' is...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a full dictionary"
                    },
                    {
                              "id": "b",
                              "text": "a mini-dictionary at the back of a book"
                    },
                    {
                              "id": "c",
                              "text": "a thesaurus"
                    },
                    {
                              "id": "d",
                              "text": "an encyclopedia"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Mini dictionary in book."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mini dictionary in book.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "a mini-dictionary at the back of a book",
          "commonErrors": [
                    "Confuses with dictionary."
          ]
},
        },
        {
          id: "ela5-u7-reference-materials-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'thesaurus' gives you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "definitions only"
                    },
                    {
                              "id": "b",
                              "text": "synonyms and antonyms"
                    },
                    {
                              "id": "c",
                              "text": "pronunciations"
                    },
                    {
                              "id": "d",
                              "text": "examples"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Synonyms and antonyms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Synonyms and antonyms.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "synonyms and antonyms",
          "commonErrors": [
                    "Confuses with dictionary."
          ]
},
        },
        {
          id: "ela5-u7-reference-materials-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Use a dictionary or glossary to find the meaning of a word. Write the definition and use it in a sentence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reference",
                              "statement": "Definition + sentence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds definition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uses in sentence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'Enormous: very large. The enormous elephant towered over us.'**",
          "commonErrors": [
                    "Cannot find.",
                    "No sentence."
          ]
},
        },
        {
          id: "ela5-u7-reference-materials-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Reference materials are arranged...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "randomly"
                    },
                    {
                              "id": "b",
                              "text": "alphabetically"
                    },
                    {
                              "id": "c",
                              "text": "by length"
                    },
                    {
                              "id": "d",
                              "text": "by difficulty"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Alphabetically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Alphabetically.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "alphabetically",
          "commonErrors": [
                    "Wrong order."
          ]
},
        },
        {
          id: "ela5-u7-reference-materials-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain when you would use a dictionary vs a thesaurus. Give examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reference",
                              "statement": "When to use each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Explains dictionary use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains thesaurus use.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Dictionary: find meaning/definition; Thesaurus: find synonyms/antonyms to improve writing.**",
          "commonErrors": [
                    "Cannot explain.",
                    "No examples."
          ]
},
        },
        {
          id: "ela5-u7-reference-materials-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dictionary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mini dictionary in book."
                    },
                    {
                              "id": "b",
                              "text": "Word meanings."
                    },
                    {
                              "id": "c",
                              "text": "Synonyms/antonyms."
                    },
                    {
                              "id": "d",
                              "text": "Word listing."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Dictionary\" means Word meanings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Dictionary\" means Word meanings.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Dictionary** = Word meanings.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u7-reference-materials-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Glossary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Synonyms/antonyms."
                    },
                    {
                              "id": "b",
                              "text": "Word listing."
                    },
                    {
                              "id": "c",
                              "text": "Noun, verb, etc."
                    },
                    {
                              "id": "d",
                              "text": "Mini dictionary in book."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Glossary\" means Mini dictionary in book."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Glossary\" means Mini dictionary in book.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Glossary** = Mini dictionary in book.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u7-reference-materials-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Thesaurus\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word listing."
                    },
                    {
                              "id": "b",
                              "text": "Synonyms/antonyms."
                    },
                    {
                              "id": "c",
                              "text": "Noun, verb, etc."
                    },
                    {
                              "id": "d",
                              "text": "How to say it."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Thesaurus\" means Synonyms/antonyms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Thesaurus\" means Synonyms/antonyms.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Thesaurus** = Synonyms/antonyms.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
