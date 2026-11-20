import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cieict-u1-lesson-1-1",
  code: "1-1",
  title: "Document Production",
  goal: "I CAN create and format professional documents using word processing software.",
  standards: ["Cambridge IGCSE ICT 0417: documents", "0417 section 2: word processing"],
  
  vocabulary: [
    { term: "Word processor", definition: "Software for creating/editing text documents." },
    { term: "Template", definition: "Pre-designed document layout for reuse." },
    { term: "Mail merge", definition: "Combining template with data to produce personalised documents." },
    { term: "Header/footer", definition: "Text appearing at top/bottom of every page." },
    { term: "Styles", definition: "Predefined formatting applied to text." },
    { term: "Track changes", definition: "Recording edits for review." },
  ],
  concepts: [
    {
      id: "cieict-u1-s1-docs",
      title: "Document production",
      skill: "Create formatted documents with word processors at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Document features",
            body: "Word processors offer styles (headings, body), headers/footers, page numbers, tables, images, mail merge. Templates provide consistent professional layouts. Track changes enables collaborative editing.",
          },
          {
            heading: "Mail merge",
            body: "Mail merge combines a template letter with a data source (spreadsheet) to produce personalised documents — letters, labels, certificates. Each record fills placeholders.",
          },
        ],
        keyFormulas: [
          { name: "Mail merge", statement: "template + data source → personalised docs" },
          { name: "Styles", statement: "consistent formatting" },
        ],
        workedExample: {
          problem: "Create personalised invitation letters for 50 guests from a spreadsheet.",
          solution: "Template letter with <<Name>> placeholders + spreadsheet of names → mail merge → 50 personalised letters.",
        },
      },
      questions: [
        {
          id: "cieict-u1-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is mail merge?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Combining template with data for personalised documents"
                    },
                    {
                              "id": "b",
                              "text": "A type of printer"
                    },
                    {
                              "id": "c",
                              "text": "A network protocol"
                    },
                    {
                              "id": "d",
                              "text": "A spreadsheet function"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mail merge",
                              "statement": "Template + data → personalised."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mail merge automates personalised documents.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Template+data→personalised docs"
},
        },
        {
          id: "cieict-u1-dp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are styles in a word processor and why use them?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Styles",
                              "statement": "Predefined formatting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Styles = predefined formatting (headings, body).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consistent formatting, easy updates.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Consistent formatting"
},
        },
        {
          id: "cieict-u1-dp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a header and a footer? Give uses for each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Header/footer",
                              "statement": "Top vs bottom page text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Header=top of page; footer=bottom.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Uses: title/page numbers/date.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both described.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Top vs bottom page text"
},
        },
        {
          id: "cieict-u1-dp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define word processor, template, mail merge, header/footer, styles, track changes. (b) When use mail merge? (c) What is a template for? (d) How do styles improve documents? (e) What is track changes for? (f) List 5 word processor features. (g) How would you create personalised certificates? (h) Design a letter template for a school newsletter.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Documents",
                              "statement": "Word processing features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Mass personalised documents.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Consistent professional layout.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Consistency + easy updates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Review edits before accepting.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Five valid features.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Mail merge with data source.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid newsletter template.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Document production techniques."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-dp-notes",
      title: "Document production — notes",
      summary: "Styles for consistency; headers/footers for page info; mail merge for personalised mass documents.",
      sections: [
        { heading: "Key idea", body: "Templates + styles = professional consistent documents." },
        { heading: "Mail merge", body: "Template + data source = personalised letters/labels/certificates." },
      ],
    },
  ],
};
