import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "cipc-u2-lesson-2-6",
  code: "2-6",
  title: "Stage 5 — Managing Data: Spreadsheets and Databases",
  goal: "I CAN use spreadsheets for calculations and describe how databases store and query data.",
  standards: ["Cambridge Primary Computing 0059 Stage 5: managing data", "Cambridge Primary Computing 0059 framework strands: Managing data"],
  stage: 5,
  vocabulary: [
    { term: "Spreadsheet", definition: "A grid of cells for numbers, text and formulas." },
    { term: "Cell", definition: "One box in a spreadsheet, named like B3." },
    { term: "Formula", definition: "A calculation like =A1+B1 or =SUM(A1:A10)." },
    { term: "Database", definition: "An organised collection of related data." },
    { term: "Query", definition: "A request that retrieves specific data from a database." },
    { term: "Record", definition: "One complete entry in a database." },
  ],
  concepts: [
    {
      id: "cipc-u2-s5-data",
      title: "Spreadsheets and databases",
      skill: "Use spreadsheet formulas and describe database queries at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Spreadsheets",
            body: "Spreadsheets organise data in rows and columns. Cells can hold numbers, text or formulas. Formulas like =A1*B1 calculate automatically — change an input and all dependent results update. Useful for budgets, marks, statistics.",
          },
          {
            heading: "Databases",
            body: "A database stores records in tables — like a digital filing cabinet. Each record has fields (name, date, score). Queries ask questions: 'show all students who scored above 80'. Databases handle huge amounts of data efficiently.",
          },
        ],
        keyFormulas: [
          { name: "=A1+B1", statement: "cell formula calculates automatically" },
          { name: "Query", statement: "retrieves matching records from a database" },
        ],
        workedExample: {
          problem: "Cells A1=5, B1=3, C1==A1*B1. What is C1? If A1 changes to 10, what happens?",
          solution: "C1=15. When A1→10, C1 auto-updates to 30.",
        },
      },
      questions: [
        {
          id: "cipc-u2-db-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a spreadsheet formula starting with '=' do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Calculates using other cells"
                    },
                    {
                              "id": "b",
                              "text": "Changes text colour"
                    },
                    {
                              "id": "c",
                              "text": "Deletes the cell"
                    },
                    {
                              "id": "d",
                              "text": "Sorts alphabetically"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Formula",
                              "statement": "Auto-calculation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'=' marks a formula that computes from cells.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Calculates from cells"
},
        },
        {
          id: "cipc-u2-db-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a database record and what is a query?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Database",
                              "statement": "Records and queries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Record = one complete entry/row.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Query = request for specific data.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Entry vs data request"
},
        },
        {
          id: "cipc-u2-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A=8, B=4, C==A1+B1, D==C1*2. What are C1 and D1? If B1 changes to 10, update them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Spreadsheet formulas",
                              "statement": "Auto-recalculation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "C1=12, D1=24.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "B1→10: C1=18, D1=36.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Formulas auto-update.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "C=12,D=24 → then 18,36"
},
        },
        {
          id: "cipc-u2-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define spreadsheet, cell, formula. (b) What is =SUM(A1:A5)? (c) Why do formulas auto-update? (d) Define database, record, field, query. (e) Give a query example for a student database. (f) When is a database better than a spreadsheet? (g) Design a spreadsheet for tracking pocket money (income, spending, balance). (h) Design a database table for library books.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Data management",
                              "statement": "Spreadsheets, databases, queries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Grid/cell/formula definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Adds A1 through A5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Cells reference each other — recalcs on change.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Database/record/field/query definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) e.g. 'WHERE score > 80'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Large structured data, multiple users, queries.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid budget spreadsheet design.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid table: title, author, borrower, due date.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Spreadsheets, formulas, databases, queries, designs."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-db-notes",
      title: "Spreadsheets and databases — notes",
      summary: "Formulas auto-calculate. Databases store records; queries retrieve specific data.",
      sections: [
        { heading: "Key idea", body: "Spreadsheets for calculations; databases for large structured data." },
        { heading: "Formulas", body: "'=' triggers calculation; references update automatically." },
      ],
    },
  ],
};
