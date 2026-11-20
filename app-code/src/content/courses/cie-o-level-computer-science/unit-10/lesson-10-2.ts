import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "olcs-u10-lesson-10-2",
  code: "10-2",
  title: "Queries and Reports",
  goal: "I CAN write simple queries using SELECT, WHERE, AND, OR, sorting and counting.",
  standards: ["2210 10.2"],
  vocabulary: [
    { term: "Query", definition: "Request to retrieve or manipulate data from a database." },
    { term: "SELECT", definition: "SQL keyword choosing which fields/records to return." },
    { term: "WHERE", definition: "Condition filtering which records are returned." },
    { term: "ORDER BY", definition: "Sorts results by a field." },
    { term: "COUNT", definition: "Function counting matching records." },
    { term: "Report", definition: "Formatted output of query results for reading/printing." },
  ],
  concepts: [
    {
      id: "olcs-u10-queries",
      title: "Writing simple queries",
      skill: "Use SELECT, WHERE, AND/OR and ORDER BY to extract data.",
      lesson: {
        sections: [
          { heading: "SELECT basics", body: "```\nSELECT Name, Class FROM Students\n```\nReturns those fields for every record." },
          { heading: "WHERE filtering", body: "```\nSELECT Name FROM Students WHERE Class = '10A'\nSELECT Name FROM Students WHERE Age >= 15 AND Class = '10A'\nSELECT Name FROM Students WHERE Class = '10A' OR Class = '11B'\n```" },
          { heading: "Sorting and counting", body: "```\nSELECT Name FROM Students ORDER BY Name ASC\nSELECT COUNT(*) FROM Students WHERE Class = '10A'\n```" },
          { heading: "Reports", body: "Query results can be formatted into a **report** — grouped, sorted, totals added — for presentation." },
        ],
        keyFormulas: [
          { name: "Query", statement: "SELECT fields FROM table WHERE condition ORDER BY field" },
        ],
        workedExample: {
          problem: "Write a query listing names of students in class '10A' aged 15 or over.",
          solution: "SELECT Name FROM Students WHERE Class = '10A' AND Age >= 15",
        },
      },
      questions: [
        {
          id: "olcs-u10-qr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In SQL, SELECT is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Choose which data to return" }, { id: "b", text: "Delete records" }, { id: "c", text: "Create tables" }, { id: "d", text: "Sort files" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "SELECT", statement: "Chooses returned data." }], steps: [{ reasoning: "SELECT retrieves.", working: "\\text{select}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Choose data" },
        },
        {
          id: "olcs-u10-qr-q2", difficulty: "core", totalMarks: 2,
          stem: "Write SQL to select all fields from Students where Age > 14.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "SQL", statement: "SELECT...WHERE syntax." }], steps: [
            { reasoning: "SELECT * FROM Students WHERE Age > 14.", working: "SELECT *", marks: 1, markCode: "M" },
            { reasoning: "Correct syntax.", marks: 1, markCode: "A" },
          ], finalAnswer: "SELECT * FROM Students WHERE Age > 14" },
        },
        {
          id: "olcs-u10-qr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Write SQL to count students in class '10A' and list names sorted alphabetically.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "SQL", statement: "COUNT + ORDER BY." }], steps: [
            { reasoning: "SELECT COUNT(*) ... WHERE Class='10A'.", working: "COUNT", marks: 1, markCode: "M" },
            { reasoning: "SELECT Name ... ORDER BY Name.", working: "ORDER BY", marks: 1, markCode: "M" },
            { reasoning: "Correct queries.", marks: 1, markCode: "M" },
            { reasoning: "Both correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "SELECT COUNT(*) FROM Students WHERE Class='10A'; SELECT Name FROM Students ORDER BY Name" },
        },
        {
          id: "olcs-u10-qr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Queries review.",
          parts: [
            { label: "a", prompt: "Write SQL selecting Name and Age from Students.", marks: 2 },
            { label: "b", prompt: "Add a WHERE clause for Age >= 15.", marks: 2 },
            { label: "c", prompt: "What does ORDER BY do?", marks: 2 },
            { label: "d", prompt: "Write SQL counting students in '10B'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "SQL queries", statement: "SELECT/WHERE/ORDER BY/COUNT." },
          ], steps: [
            { part: "a", reasoning: "SELECT Name, Age FROM Students.", working: "SELECT", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "WHERE Age >= 15.", working: "WHERE", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Sorts results by field.", working: "\\text{sort}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "SELECT COUNT(*) ...", working: "COUNT(*)", marks: 1, markCode: "M" },
            { part: "d", reasoning: "WHERE Class='10B'.", working: "WHERE", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) SELECT fields (b) WHERE age (c) sorts results (d) COUNT with WHERE" },
        },
      ],
    },
    {
      id: "olcs-u10-reports",
      title: "Reports and database uses",
      skill: "Explain how query results become reports and where databases are used.",
      lesson: {
        sections: [
          { heading: "Reports", body: "A **report** formats query results for humans — headings, grouping, subtotals, sorted layout. E.g. 'Students by Class' report groups records and counts per class." },
          { heading: "Database uses", body: "Libraries (catalogue), hospitals (patient records), schools (student data), shops (stock/inventory), banks (accounts). Databases replace paper filing with searchable, secure storage." },
          { heading: "Data integrity", body: "**Validation rules** (data type, range, required) and **primary keys** keep data accurate. **Backup** protects against loss; **security** (passwords, permissions) controls access." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why would a library use a database instead of card files?",
          solution: "Instant search by title/author, no lost cards, multiple staff access simultaneously, easy stock updates.",
        },
      },
      questions: [
        {
          id: "olcs-u10-rp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A report is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Formatted output of query results" }, { id: "b", text: "A type of table" }, { id: "c", text: "A backup file" }, { id: "d", text: "A network cable" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Report", statement: "Formatted query output." }], steps: [{ reasoning: "Report = formatted results.", working: "\\text{report}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Formatted query output" },
        },
        {
          id: "olcs-u10-rp-q2", difficulty: "core", totalMarks: 2,
          stem: "Give two uses of databases in everyday life.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "DB uses", statement: "Real-world applications." }], steps: [
            { reasoning: "Library catalogue / hospital records.", working: "\\text{use1}", marks: 1, markCode: "M" },
            { reasoning: "Second valid use.", working: "\\text{use2}", marks: 1, markCode: "A" },
          ], finalAnswer: "Libraries, hospitals, schools, shops, banks — any two." },
        },
        {
          id: "olcs-u10-rp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two ways databases protect data integrity.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Integrity", statement: "Validation + security." }], steps: [
            { reasoning: "Validation rules restrict invalid data.", working: "\\text{validate}", marks: 1, markCode: "M" },
            { reasoning: "Primary keys ensure uniqueness.", working: "\\text{pk}", marks: 1, markCode: "M" },
            { reasoning: "Security controls access.", working: "\\text{security}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Validation rules, primary keys, access control protect data accuracy and security." },
        },
        {
          id: "olcs-u10-rp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Databases review.",
          parts: [
            { label: "a", prompt: "Define report.", marks: 2 },
            { label: "b", prompt: "Give two database uses.", marks: 2 },
            { label: "c", prompt: "What is data validation?", marks: 2 },
            { label: "d", prompt: "Why are backups important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "DB uses", statement: "Reports, uses, validation, backup." },
          ], steps: [
            { part: "a", reasoning: "Formatted query output.", working: "\\text{report}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Library/hospital/etc.", working: "\\text{use}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Two uses.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Checks data meets rules.", working: "\\text{validate}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Protects against loss/corruption.", working: "\\text{backup}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Allows recovery.", working: "\\text{recover}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) formatted output (b) any two uses (c) rule checking (d) prevents data loss" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u10-10-2-notes", title: "Queries and databases — notes", summary: "SQL basics, reports and real-world database uses.",
      sections: [
        { heading: "Queries", body: "SELECT fields FROM table WHERE condition ORDER BY field; COUNT for totals." },
        { heading: "Uses", body: "Reports format results; databases used in libraries, hospitals, schools. Validation + backups protect data." },
      ] },
  ],
};
