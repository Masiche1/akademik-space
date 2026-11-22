import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "cieict-u1-lesson-1-1",
  code: "1-1",
  title: "Document Production",
  goal: "I CAN create and format professional documents using word processing software.",
  standards: [
    "Cambridge IGCSE ICT 0417: documents",
    "0417 section 2: word processing",
  ],

  vocabulary: [
    {
      term: "Word processor",
      definition: "Software for creating/editing text documents.",
    },
    { term: "Template", definition: "Pre-designed document layout for reuse." },
    {
      term: "Mail merge",
      definition:
        "Combining template with data to produce personalised documents.",
    },
    {
      term: "Header/footer",
      definition: "Text appearing at top/bottom of every page.",
    },
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
          {
            name: "Mail merge",
            statement: "template + data source → personalised docs",
          },
          { name: "Styles", statement: "consistent formatting" },
        ],
        workedExample: {
          problem:
            "Create personalised invitation letters for 50 guests from a spreadsheet.",
          solution:
            "Template letter with <<Name>> placeholders + spreadsheet of names → mail merge → 50 personalised letters.",
        },
      },
      questions: [
        {
          id: "cieict-u1-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is mail merge?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A spreadsheet function",
              },
              {
                id: "b",
                text: "A network protocol",
              },
              {
                id: "c",
                text: "Combining template with data for personalised documents",
              },
              {
                id: "d",
                text: "A type of printer",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mail merge",
                statement: "Template + data → personalised.",
              },
            ],
            steps: [
              {
                reasoning: "Mail merge automates personalised documents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Template+data→personalised docs",
          },
        },
        {
          id: "cieict-u1-dp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are styles in a word processor and why use them?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Styles",
                statement: "Predefined formatting.",
              },
            ],
            steps: [
              {
                reasoning: "Styles = predefined formatting (headings, body).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consistent formatting, easy updates.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consistent formatting",
          },
        },
        {
          id: "cieict-u1-dp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between a header and a footer? Give uses for each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Header/footer",
                statement: "Top vs bottom page text.",
              },
            ],
            steps: [
              {
                reasoning: "Header=top of page; footer=bottom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Uses: title/page numbers/date.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Top vs bottom page text",
          },
        },
        {
          id: "cieict-u1-dp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define word processor, template, mail merge, header/footer, styles, track changes. (b) When use mail merge? (c) What is a template for? (d) How do styles improve documents? (e) What is track changes for? (f) List 5 word processor features. (g) How would you create personalised certificates? (h) Design a letter template for a school newsletter.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Documents",
                statement: "Word processing features.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Mass personalised documents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Consistent professional layout.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Consistency + easy updates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Review edits before accepting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Five valid features.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Mail merge with data source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid newsletter template.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Document production techniques.",
          },
        },
        {
          id: "cieict-u1-dp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word processor feature applies the same formatting to every heading automatically?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Styles" },
              { id: "b", text: "Track changes" },
              { id: "c", text: "Mail merge" },
              { id: "d", text: "Find and replace" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Styles",
                statement: "Predefined consistent formatting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Styles = predefined formatting applied consistently.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Styles",
          },
        },
        {
          id: "cieict-u1-dp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a mail merge, what is the 'data source'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The records containing personalised details" },
              { id: "b", text: "The printer settings" },
              { id: "c", text: "The page layout" },
              { id: "d", text: "The spell checker" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data source",
                statement: "Records merged into template placeholders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Data source holds records (e.g. names) that fill placeholders.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Records merged into the template",
          },
        },
        {
          id: "cieict-u1-dp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where should page numbers be placed so they appear on every page automatically?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In a separate document" },
              { id: "b", text: "As a watermark" },
              { id: "c", text: "In the header or footer" },
              { id: "d", text: "In the body text of page 1 only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Header/footer",
                statement: "Repeating top/bottom page content.",
              },
            ],
            steps: [
              {
                reasoning: "Header/footer repeats on every page automatically.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Header or footer",
          },
        },
        {
          id: "cieict-u1-dp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the 'track changes' feature record?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "File sizes over time" },
              { id: "b", text: "Internet browsing history" },
              { id: "c", text: "Who printed the document" },
              {
                id: "d",
                text: "Edits made so they can be reviewed and accepted or rejected",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Track changes",
                statement: "Recording edits for review.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Track changes logs edits for review before acceptance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Edits recorded for review",
          },
        },
        {
          id: "cieict-u1-dp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A class list in column A has names in rows 2 to 51. How many names are listed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Row count",
                statement: "Inclusive count of rows.",
              },
            ],
            steps: [
              {
                reasoning: "Rows 2 to 51 inclusive = 50 names.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "50 names",
          },
        },
        {
          id: "cieict-u1-dp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A newsletter has 4 sections and each section must contain 250 words. What is the total word count required?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word count",
                statement: "Sections x words per section.",
              },
            ],
            steps: [
              {
                reasoning: "4 sections x 250 words = 1000 words.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1000 words",
          },
        },
        {
          id: "cieict-u1-dp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A certificate template contains 3 merge fields. Mail merge is run for 40 recipients. How many field values are inserted in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 120 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Merge fields",
                statement: "Fields x records.",
              },
            ],
            steps: [
              {
                reasoning: "3 fields x 40 recipients = 120 insertions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "120 insertions",
          },
        },
        {
          id: "cieict-u1-dp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A report has 30 pages and is printed in 2 copies. How many sheets of paper are needed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Print run",
                statement: "Pages x copies.",
              },
            ],
            steps: [
              { reasoning: "Pages per copy = 30.", marks: 1, markCode: "M" },
              {
                reasoning: "30 x 2 copies = 60 sheets.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "60 sheets",
          },
        },
        {
          id: "cieict-u1-dp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it better to create a template once and reuse it rather than formatting each document from scratch?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Template reuse",
                statement: "Templates give consistency and efficiency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consistency of layout and formatting across documents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Saves time and reduces errors when producing many documents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consistency + time saving",
          },
        },
        {
          id: "cieict-u1-dp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the steps you would follow to produce personalised invitation letters for 200 parents using a spreadsheet of names.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mail merge steps",
                statement: "Template, data source, merge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Design the letter template with merge fields (e.g. <<Name>>).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Prepare the data source: one record per parent with matching field names.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Run the mail merge to generate 200 personalised letters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Template + data source + mail merge",
          },
        },
        {
          id: "cieict-u1-dp-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which combination is most appropriate for producing 500 personalised certificates efficiently?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A database with no output" },
              { id: "b", text: "Presentation software only" },
              { id: "c", text: "Manually typing each certificate" },
              { id: "d", text: "Word processor + mail merge" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Mail merge",
                statement: "Mass personalised documents.",
              },
            ],
            steps: [
              {
                reasoning: "Mail merge automates personalised mass documents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Word processor + mail merge",
          },
        },
        {
          id: "cieict-u1-dp-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main advantage of putting information in a header or footer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It repeats automatically on every page" },
              { id: "b", text: "It cannot be edited" },
              { id: "c", text: "It increases file size" },
              { id: "d", text: "It only prints once" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Header/footer",
                statement: "Automatic repetition per page.",
              },
            ],
            steps: [
              {
                reasoning: "Header/footer repeats content on all pages.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Repeats on every page",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-dp-notes",
      title: "Document production — notes",
      summary:
        "Styles for consistency; headers/footers for page info; mail merge for personalised mass documents.",
      sections: [
        {
          heading: "Key idea",
          body: "Templates + styles = professional consistent documents.",
        },
        {
          heading: "Mail merge",
          body: "Template + data source = personalised letters/labels/certificates.",
        },
      ],
    },
  ],
};
