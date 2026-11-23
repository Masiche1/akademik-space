import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "ela5-u7-lesson-7-5",
  code: "7-5",
  title: "Language Review",
  goal: "I CAN use all language conventions and vocabulary skills.",
  standards: ["L.5.2", "L.5.4"],
  vocabulary: [
    { term: "Punctuation", definition: "Marks." },
    { term: "Capitalization", definition: "Capital letters." },
    { term: "Spelling", definition: "Correct spelling." },
    { term: "Context clue", definition: "Hint in text." },
    { term: "Dictionary", definition: "Word meanings." },
    { term: "Thesaurus", definition: "Synonyms/antonyms." },
    { term: "Synonym", definition: "Same meaning." },
    { term: "Antonym", definition: "Opposite meaning." },
  ],
  concepts: [
    {
      id: "ela5-u7-language-review",
      title: "Language review",
      skill: "Combine conventions and vocabulary skills.",
      lesson: {
        sections: [
          {
            heading: "All language skills",
            body: "Use **conventions** (punctuation, capitalization, spelling) and **vocabulary** (context clues, dictionaries, thesauruses).",
          },
          {
            heading: "Put it together",
            body: "Use all language skills for clear, precise writing.",
          },
        ],
        keyFormulas: [
          { name: "Language", statement: "Conventions + vocabulary = all skills." },
        ],
        workedExample: {
          problem: "Use all language skills.",
          solution: "All skills = complete language understanding.",
        },
      },
      questions: [
        {
          id: "ela5-u7-language-review-q1",
          difficulty: "core",
          totalMarks: 1,
          stem: "Language skills include...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only punctuation"
                    },
                    {
                              "id": "b",
                              "text": "conventions and vocabulary"
                    },
                    {
                              "id": "c",
                              "text": "only vocabulary"
                    },
                    {
                              "id": "d",
                              "text": "only spelling"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "All language skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "All language skills.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "conventions and vocabulary",
          "commonErrors": [
                    "Lists one skill."
          ]
},
        },
        {
          id: "ela5-u7-language-review-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write a paragraph with correct conventions, use a context clue to define a word, and look up a synonym in a thesaurus.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": [
                                        [
                                                  "skill",
                                                  "All language",
                                                  "All three skills."
                                        ]
                              ]
                    }
          ],
          "steps": [
                    {
                              "reasoning": [
                                        [
                                                  "skill",
                                                  "All language",
                                                  "All three skills."
                                        ]
                              ],
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": [
                    {
                              "reasoning": "Does all three.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "commonErrors": [
                    "**e.g., 'Paragraph with correct punctuation/caps; context clue: ...; thesaurus: synonym.'**"
          ]
},
        },
        {
          id: "ela5-u7-language-review-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Good language skills help you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "write faster"
                    },
                    {
                              "id": "b",
                              "text": "communicate clearly and precisely"
                    },
                    {
                              "id": "c",
                              "text": "read less"
                    },
                    {
                              "id": "d",
                              "text": "spell perfectly only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Communicate clearly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Communicate clearly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "communicate clearly and precisely",
          "commonErrors": [
                    "Thinks it's just spelling."
          ]
},
        },
        {
          id: "ela5-u7-language-review-q4",
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
                              "text": "Marks."
                    },
                    {
                              "id": "c",
                              "text": "Correct spelling."
                    },
                    {
                              "id": "d",
                              "text": "Hint in text."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Punctuation\" means Marks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Punctuation\" means Marks.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Punctuation** = Marks.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u7-language-review-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Capitalization\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Correct spelling."
                    },
                    {
                              "id": "b",
                              "text": "Hint in text."
                    },
                    {
                              "id": "c",
                              "text": "Word meanings."
                    },
                    {
                              "id": "d",
                              "text": "Capital letters."
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ela5-u7-language-review-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spelling\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hint in text."
                    },
                    {
                              "id": "b",
                              "text": "Correct spelling."
                    },
                    {
                              "id": "c",
                              "text": "Word meanings."
                    },
                    {
                              "id": "d",
                              "text": "Synonyms/antonyms."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Spelling\" means Correct spelling."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Spelling\" means Correct spelling.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Spelling** = Correct spelling.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u7-language-review-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Context clue\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word meanings."
                    },
                    {
                              "id": "b",
                              "text": "Synonyms/antonyms."
                    },
                    {
                              "id": "c",
                              "text": "Same meaning."
                    },
                    {
                              "id": "d",
                              "text": "Hint in text."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Context clue\" means Hint in text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Context clue\" means Hint in text.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Context clue** = Hint in text.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u7-language-review-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Dictionary\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Synonyms/antonyms."
                    },
                    {
                              "id": "b",
                              "text": "Word meanings."
                    },
                    {
                              "id": "c",
                              "text": "Same meaning."
                    },
                    {
                              "id": "d",
                              "text": "Opposite meaning."
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
      ],
    },
  ],
};
