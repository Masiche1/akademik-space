import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ela4-u4-lesson-4-2",
  code: "4-2",
  title: "Text Features",
  goal: "I CAN identify and use text features like headings, captions and glossaries.",
  standards: ["RI.4.5"],
  vocabulary: [
    { term: "Text feature", definition: "Part that helps understand." },
    { term: "Heading", definition: "Section title." },
    { term: "Caption", definition: "Explains picture." },
    { term: "Glossary", definition: "Word definitions." },
    { term: "Index", definition: "Page locator." },
    { term: "Bold", definition: "Important words." },
    { term: "Diagram", definition: "Picture with labels." },
    { term: "Table", definition: "Organized data." },
  ],
  concepts: [
    {
      id: "ela4-u4-text-features",
      title: "Text features",
      skill: "Identify and use headings, captions, glossaries, indexes and other features.",
      lesson: {
        sections: [
          {
            heading: "Helpful parts",
            body: "**Text features** help you navigate and understand: **headings** (section titles), **captions** (explain pictures), **glossary** (word definitions), **index** (find topics), **bold** words (key terms).",
          },
          {
            heading: "Why they matter",
            body: "Features let you **preview** content, **find** information quickly, and **define** hard words.",
          },
        ],
        keyFormulas: [
          { name: "Features", statement: "Headings + captions + glossary + index + bold = navigation + understanding." },
        ],
        workedExample: {
          problem: "Where would you find the definition of 'photosynthesis' in a science book?",
          solution: "In the **glossary** at the back.",
        },
      },
      questions: [
        {
          id: "ela4-u4-text-features-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'glossary' contains...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "pictures"
                    },
                    {
                              "id": "b",
                              "text": "definitions of key words"
                    },
                    {
                              "id": "c",
                              "text": "the index"
                    },
                    {
                              "id": "d",
                              "text": "the story"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Glossary = word definitions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glossary = word definitions.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**definitions of key words**",
          "commonErrors": [
                    "Confuses with other features."
          ]
},
        },
        {
          id: "ela4-u4-text-features-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Headings' help you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "count words"
                    },
                    {
                              "id": "b",
                              "text": "see what each section is about"
                    },
                    {
                              "id": "c",
                              "text": "find the end"
                    },
                    {
                              "id": "d",
                              "text": "spell words"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Headings = section topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Headings = section topics.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**see what each section is about**",
          "commonErrors": [
                    "Thinks headings are decoration."
          ]
},
        },
        {
          id: "ela4-u4-text-features-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find three text features in a book. Explain what each one helps you do.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Features",
                              "statement": "Three features + uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Finds three features.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains uses.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**e.g., 'Heading: tells topic; Caption: explains picture; Glossary: defines words.'**",
          "commonErrors": [
                    "Fewer than three.",
                    "No uses."
          ]
},
        },
        {
          id: "ela4-u4-text-features-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'index' helps you...",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read faster"
                    },
                    {
                              "id": "b",
                              "text": "find where topics are in the book"
                    },
                    {
                              "id": "c",
                              "text": "spell words"
                    },
                    {
                              "id": "d",
                              "text": "count pages"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "Index = find topics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Index = find topics.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**find where topics are in the book**",
          "commonErrors": [
                    "Confuses with glossary."
          ]
},
        },
        {
          id: "ela4-u4-text-features-q5",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare two text features (e.g., heading vs caption). How do they help differently?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Features",
                              "statement": "Two features + different uses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Names two features.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Explains different uses.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**e.g., 'Heading: previews section topic; Caption: explains specific picture.'**",
          "commonErrors": [
                    "One feature only.",
                    "No difference."
          ]
},
        },
        {
          id: "ela4-u4-text-features-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Text feature\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Section title."
                    },
                    {
                              "id": "b",
                              "text": "Part that helps understand."
                    },
                    {
                              "id": "c",
                              "text": "Explains picture."
                    },
                    {
                              "id": "d",
                              "text": "Word definitions."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Text feature\" means Part that helps understand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Text feature\" means Part that helps understand.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Text feature** = Part that helps understand.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-text-features-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Heading\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Explains picture."
                    },
                    {
                              "id": "b",
                              "text": "Word definitions."
                    },
                    {
                              "id": "c",
                              "text": "Page locator."
                    },
                    {
                              "id": "d",
                              "text": "Section title."
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Heading\" means Section title."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Heading\" means Section title.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Heading** = Section title.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
        {
          id: "ela4-u4-text-features-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the word \"Caption\" mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Word definitions."
                    },
                    {
                              "id": "b",
                              "text": "Explains picture."
                    },
                    {
                              "id": "c",
                              "text": "Page locator."
                    },
                    {
                              "id": "d",
                              "text": "Important words."
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solve",
                              "statement": "\"Caption\" means Explains picture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "\"Caption\" means Explains picture.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**Caption** = Explains picture.",
          "commonErrors": [
                    "Picks a definition that sounds related but belongs to a different word."
          ]
},
        },
      ],
    },
  ],
};
