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
                              "text": "Deletes the cell"
                    },
                    {
                              "id": "b",
                              "text": "Calculates using other cells"
                    },
                    {
                              "id": "c",
                              "text": "Sorts alphabetically"
                    },
                    {
                              "id": "d",
                              "text": "Changes text colour"
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "cipc-u2-db-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the formula '=A1+B1' do in a spreadsheet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deletes cells A1 and B1" },
            { id: "b", text: "Formats the cells" },
            { id: "c", text: "Adds the values in cells A1 and B1" },
            { id: "d", text: "Prints the text 'A1+B1'" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Formula", statement: "= calculates from cell references." }],
            steps: [
              { reasoning: "Formulas starting with = compute using cell values.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Adds values in A1 and B1",
          },
        },
        {
          id: "cipc-u2-db-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a database record? What is a query?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Record and query", statement: "Row of data vs search request." }],
            steps: [
              { reasoning: "Record = one complete set of related data (one row).", marks: 1, markCode: "M" },
              { reasoning: "Query = a request to find/extract specific data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Record = one data row; query = data request.",
          },
        },
        {
          id: "cipc-u2-db-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A1 = 5, B1 = 7, C1 = '=A1*B1'. What is C1?",
          response: { type: "numeric", parts: [{ label: "a", answer: 35 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Spreadsheet formula", statement: "A1 × B1." }],
            steps: [
              { reasoning: "5 × 7 = 35.", marks: 1, markCode: "M" },
              { reasoning: "C1 = 35.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "35",
          },
        },
        {
          id: "cipc-u2-db-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does '=SUM(A1:A5)' calculate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The average of A1:A5" },
            { id: "b", text: "The count of cells" },
            { id: "c", text: "The total of cells A1 through A5" },
            { id: "d", text: "The largest value" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "SUM", statement: "Adds a range of cells." }],
            steps: [
              { reasoning: "SUM adds all values in the range A1:A5.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Total of A1 through A5",
          },
        },
        {
          id: "cipc-u2-db-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "C1 = '=A1+B1' where A1 = 4, B1 = 6. C1 shows 10. Now B1 changes to 10. What does C1 show and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Auto-update", statement: "Formulas recalculate on change." }],
            steps: [
              { reasoning: "C1 recalculates: 4 + 10 = 14.", marks: 1, markCode: "M" },
              { reasoning: "C1 now shows 14.", marks: 1, markCode: "M" },
              { reasoning: "Formulas auto-update when referenced cells change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14 — formulas recalculate automatically.",
          },
        },
        {
          id: "cipc-u2-db-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When is a DATABASE better than a spreadsheet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "When managing large amounts of related data with queries" },
            { id: "b", text: "Never — spreadsheets are always better" },
            { id: "c", text: "For simple one-off calculations" },
            { id: "d", text: "Only for drawing charts" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "DB vs spreadsheet", statement: "Databases handle large structured data." }],
            steps: [
              { reasoning: "Databases organise large structured data and answer queries efficiently.", marks: 1, markCode: "M" },
              { reasoning: "Spreadsheets suit smaller calculations and simple tables.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Large related data with queries",
          },
        },
        {
          id: "cipc-u2-db-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design a spreadsheet to track weekly pocket money: income £5, spending £3 on Monday; income £5, spending £4 on Tuesday. What formula gives the balance after Tuesday?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Budget spreadsheet", statement: "Income - spending = balance." }],
            steps: [
              { reasoning: "Total income = 5 + 5 = 10; total spending = 3 + 4 = 7.", marks: 1, markCode: "M" },
              { reasoning: "Balance = 10 - 7 = 3.", marks: 1, markCode: "M" },
              { reasoning: "Formula like '=SUM(income)-SUM(spending)' gives £3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance £3 via income minus spending formulas.",
          },
        },
        {
          id: "cipc-u2-db-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a database 'field'? Give an example for a student database.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Field", statement: "A column/category of data." }],
            steps: [
              { reasoning: "Field = one type of data stored for every record (a column).", marks: 1, markCode: "M" },
              { reasoning: "Example fields: name, class, date of birth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A data category/column; e.g. name, class.",
          },
        },
        {
          id: "cipc-u2-db-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student database has fields: Name, Class, House. Write a query to find all students in 'House' = 'Red'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Writing queries", statement: "Select where field = value." }],
            steps: [
              { reasoning: "Query: SELECT Name FROM Students WHERE House = 'Red'.", marks: 1, markCode: "M" },
              { reasoning: "Finds all records where House field equals 'Red'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SELECT ... WHERE House = 'Red'.",
          },
        },
        {
          id: "cipc-u2-db-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A1=2, A2=4, A3=6, A4=8. C1='=SUM(A1:A4)'. What is C1? If A2 changes to 10, what is C1 then?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "SUM and updates", statement: "Add range; recalc on change." }],
            steps: [
              { reasoning: "2+4+6+8 = 20 → C1 = 20.", marks: 1, markCode: "M" },
              { reasoning: "After A2=10: 2+10+6+8 = 26.", marks: 1, markCode: "M" },
              { reasoning: "C1 updates automatically to 26.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20 then 26.",
          },
        },
        {
          id: "cipc-u2-db-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Design a database table for a school library: name the fields needed to track each book and one query a librarian might run.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Database design", statement: "Fields per item + useful query." }],
            steps: [
              { reasoning: "Fields: title, author, ISBN, shelf location, available (yes/no).", marks: 1, markCode: "M" },
              { reasoning: "Query e.g. find all books by one author, or all books currently out.", marks: 1, markCode: "M" },
              { reasoning: "Sensible fields and a realistic query.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. title/author/ISBN/location + 'books by author X'.",
          },
        },
        {
          id: "cipc-u2-db-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define spreadsheet, cell, formula. (b) What is =SUM(A1:A5)? (c) Why do formulas auto-update? (d) Define database, record, field, query. (e) Give a query example for a student database. (f) When is a database better than a spreadsheet? (g) Design a spreadsheet for tracking pocket money (income, spending, balance). (h) Design a database table for library books.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Spreadsheets and databases", statement: "Definitions, formulas, queries, design." }],
            steps: [
              { reasoning: "(a) Spreadsheet=grid app; cell=box; formula== calculation.", marks: 1, markCode: "M" },
              { reasoning: "(b) Adds A1 through A5.", marks: 1, markCode: "M" },
              { reasoning: "(c) Formulas store references, not fixed values.", marks: 1, markCode: "M" },
              { reasoning: "(d) DB=organised data store; record=row; field=column; query=request.", marks: 1, markCode: "M" },
              { reasoning: "(e) e.g. WHERE Class='5B'.", marks: 1, markCode: "M" },
              { reasoning: "(f) Large structured data needing queries.", marks: 1, markCode: "M" },
              { reasoning: "(g) Columns income/spending; balance = SUM diff.", marks: 1, markCode: "M" },
              { reasoning: "(h) Fields: title, author, ISBN, location, status.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Spreadsheet/DB terms, SUM, auto-update, query example, DB advantage, budget sheet, library table.",
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
