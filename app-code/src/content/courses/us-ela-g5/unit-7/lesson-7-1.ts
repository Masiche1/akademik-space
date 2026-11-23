import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "ela5-u7-lesson-7-1",
  code: "7-1",
  title: "Punctuation and Conventions",
  goal: "I CAN use correct punctuation, capitalization and spelling.",
  standards: ["L.5.2"],
  vocabulary: [
    { term: "Punctuation", definition: "Marks like . , ! ?" },
    { term: "Capitalization", definition: "Capital letters." },
    { term: "Spelling", definition: "Correct spelling." },
    { term: "Comma", definition: "," },
    { term: "Period", definition: "." },
    { term: "Question mark", definition: "?" },
    { term: "Exclamation", definition: "!" },
    { term: "Quotation marks", definition: "\"\"" },
  ],
  concepts: [
    {
      id: "ela5-u7-punctuation-conventions",
      title: "Punctuation and conventions",
      skill: "Use correct punctuation, capitalization and spelling in writing.",
      lesson: {
        sections: [
          {
            heading: "The rules",
            body: "**Punctuation** marks show meaning: periods end sentences, commas separate items, question marks show questions, quotation marks show speech.",
          },
          {
            heading: "Capitalization",
            body: "Capitalize **first word of sentence**, **proper nouns** (names, places), and **I**. Don't capitalize random words.",
          },
        ],
        keyFormulas: [
          { name: "Conventions", statement: "Correct punctuation + capitalization + spelling = clear writing." },
        ],
        workedExample: {
          problem: "Fix: 'i went to the store and bought milk bread and eggs'",
          solution: "'**I** went to the store and bought **milk, bread, and eggs**.' — capitalize I, add commas.",
        },
      },
      questions: [
        {
          id: "ela5-u7-punctuation-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You should capitalize...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "every word"
                    },
                    {
                              "id": "b",
                              "text": "first word of sentence and proper nouns"
                    },
                    {
                              "id": "c",
                              "text": "only names"
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
                              "statement": "First word + proper nouns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First word + proper nouns.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "first word of sentence and proper nouns",
          "commonErrors": [
                    "Over or under capitalizes."
          ]
},
        },
        {
          id: "ela5-u7-punctuation-conventions-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Commas are used to...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "end sentences"
                    },
                    {
                              "id": "b",
                              "text": "separate items in a list"
                    },
                    {
                              "id": "c",
                              "text": "show questions"
                    },
                    {
                              "id": "d",
                              "text": "show excitement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Separate list items."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Separate list items.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "separate items in a list",
          "commonErrors": [
                    "Wrong use."
          ]
},
        },
        {
          id: "ela5-u7-punctuation-conventions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite a sentence with correct punctuation, capitalization and spelling. Identify what you fixed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conventions",
                              "statement": "Corrected + identified."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixes errors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Identifies fixes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**e.g., 'i like apples bananas and oranges' -> 'I like apples, bananas, and oranges.' Fixed: capitalize I, add commas.**",
          "commonErrors": [
                    "Cannot fix.",
                    "No identification."
          ]
},
        },
        {
          id: "ela5-u7-punctuation-conventions-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Quotation marks are used for...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "emphasis"
                    },
                    {
                              "id": "b",
                              "text": "showing speech or exact words"
                    },
                    {
                              "id": "c",
                              "text": "questions"
                    },
                    {
                              "id": "d",
                              "text": "lists"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Speech/exact words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Speech/exact words.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "showing speech or exact words",
          "commonErrors": [
                    "Wrong use."
          ]
},
        },
        {
          id: "ela5-u7-punctuation-conventions-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Write a paragraph and check it for punctuation, capitalization and spelling errors. Explain your corrections.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Conventions",
                              "statement": "Paragraph + corrections."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Writes paragraph.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains corrections.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**Paragraph with correct conventions; Corrections: periods, commas, capitals, spelling.**",
          "commonErrors": [
                    "Cannot write.",
                    "No corrections."
          ]
},
        },
        {
          id: "ela5-u7-punctuation-conventions-q6",
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
                              "text": "Marks like . , ! ?"
                    },
                    {
                              "id": "c",
                              "text": "Correct spelling."
                    },
                    {
                              "id": "d",
                              "text": ","
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Punctuation\" means Marks like . , ! ?"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Punctuation\" means Marks like . , ! ?",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Punctuation** = Marks like . , ! ?",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela5-u7-punctuation-conventions-q7",
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
                              "text": ","
                    },
                    {
                              "id": "c",
                              "text": "."
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
          id: "ela5-u7-punctuation-conventions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Spelling\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": ","
                    },
                    {
                              "id": "b",
                              "text": "Correct spelling."
                    },
                    {
                              "id": "c",
                              "text": "."
                    },
                    {
                              "id": "d",
                              "text": "?"
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
      ],
    },
  ],
};
