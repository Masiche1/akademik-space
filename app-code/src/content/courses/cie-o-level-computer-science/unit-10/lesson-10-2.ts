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
            { id: "a", text: "Sort files" },
            { id: "b", text: "Create tables" },
            { id: "c", text: "Choose which data to return" },
            { id: "d", text: "Delete records" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "SELECT", statement: "Chooses returned data." }], steps: [{ reasoning: "SELECT retrieves.", working: "\\text{select}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Choose data" },
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
        {
          id: "olcs-u10-qr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In SQL, the WHERE clause is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Count the records" },
            { id: "b", text: "Sort the results" },
            { id: "c", text: "Filter which records are returned" },
            { id: "d", text: "Create a new table" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "WHERE", statement: "Condition filtering records." }], steps: [{ reasoning: "WHERE filters matching records.", working: "\\text{where}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Filter which records are returned" },
        },
        {
          id: "olcs-u10-qr-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The query SELECT Name, Age FROM Students returns one row per matching record. How many fields does each returned row contain?",
          response: { type: "numeric", parts: [{ label: "Fields per row", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "SELECT", statement: "Chooses which fields are returned." }], steps: [
            { reasoning: "SELECT lists two fields: Name and Age.", working: "\\text{2 fields}", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u10-qr-q7", difficulty: "core", totalMarks: 1,
          stem: "Which SQL keyword sorts query results?",
          response: { type: "mcq", choices: [
            { id: "a", text: "ORDER BY" },
            { id: "b", text: "SELECT" },
            { id: "c", text: "FROM" },
            { id: "d", text: "WHERE" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "ORDER BY", statement: "Sorts results by a field." }], steps: [{ reasoning: "ORDER BY sorts the output.", working: "\\text{order by}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** ORDER BY" },
        },
        {
          id: "olcs-u10-qr-q8", difficulty: "core", totalMarks: 1,
          stem: "SELECT COUNT(*) FROM Students counts…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tables" },
            { id: "b", text: "Queries" },
            { id: "c", text: "Fields" },
            { id: "d", text: "Matching records" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "COUNT", statement: "Counts matching records." }], steps: [{ reasoning: "COUNT(*) counts records.", working: "\\text{count}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Matching records" },
        },
        {
          id: "olcs-u10-qr-q9", difficulty: "core", totalMarks: 2,
          stem: "A Students table has 80 records. A query with WHERE Class = '11A' matches 30 records. How many rows does the query return?",
          response: { type: "numeric", parts: [{ label: "Rows returned", answer: 30 }] },
          markscheme: { principles: [{ kind: "principle", name: "Query", statement: "WHERE returns only matching records." }], steps: [
            { reasoning: "WHERE filters to matching records only.", working: "\\text{filter}", marks: 1, markCode: "M" },
            { reasoning: "30 records match.", working: "30", marks: 1, markCode: "A" },
          ], finalAnswer: "30" },
        },
        {
          id: "olcs-u10-qr-q10", difficulty: "core", totalMarks: 1,
          stem: "Which query returns only students aged 15 or over who are in class '10A'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "SELECT * FROM Students" },
            { id: "b", text: "SELECT * FROM Students WHERE Age >= 15 AND Class = '10A'" },
            { id: "c", text: "SELECT COUNT(*) FROM Students" },
            { id: "d", text: "SELECT * FROM Students WHERE Age >= 15 OR Class = '10A'" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "SQL", statement: "AND requires both conditions." }], steps: [{ reasoning: "Both conditions must hold — use AND.", working: "\\text{and}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** SELECT * FROM Students WHERE Age >= 15 AND Class = '10A'" },
        },
        {
          id: "olcs-u10-qr-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Explain the difference between AND and OR in a WHERE clause.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "SQL logic", statement: "AND narrows, OR broadens." }], steps: [
            { reasoning: "AND requires both conditions to be true.", working: "\\text{and}", marks: 1, markCode: "M" },
            { reasoning: "OR requires at least one condition to be true.", working: "\\text{or}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation, possibly with example.", marks: 1, markCode: "A" },
          ], finalAnswer: "AND returns records matching both conditions; OR returns records matching either condition." },
        },
        {
          id: "olcs-u10-qr-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which SQL clause limits results to records where Class = '10B'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "WHERE" },
            { id: "b", text: "SELECT" },
            { id: "c", text: "GROUP BY" },
            { id: "d", text: "ORDER BY" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "WHERE", statement: "Filters records by condition." }], steps: [{ reasoning: "WHERE applies the condition.", working: "\\text{where}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** WHERE" },
        },
        {
          id: "olcs-u10-qr-q13", difficulty: "foundation", totalMarks: 1,
          stem: "SELECT COUNT(*) FROM Books returns 145. How many records are in the Books table?",
          response: { type: "numeric", parts: [{ label: "Number of records", answer: 145 }] },
          markscheme: { principles: [{ kind: "definition", name: "COUNT", statement: "Counts matching records." }], steps: [
            { reasoning: "COUNT(*) counts all records returned.", working: "\\text{count}", marks: 1, markCode: "B" },
          ], finalAnswer: "145" },
        },
        {
          id: "olcs-u10-qr-q14", difficulty: "core", totalMarks: 1,
          stem: "To list student names in alphabetical order, which clause is added to the query?",
          response: { type: "mcq", choices: [
            { id: "a", text: "COUNT(Name)" },
            { id: "b", text: "ORDER BY Name ASC" },
            { id: "c", text: "SELECT Name DESC only" },
            { id: "d", text: "WHERE Name" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "ORDER BY", statement: "Sorts results ascending or descending." }], steps: [{ reasoning: "ORDER BY Name ASC sorts alphabetically.", working: "\\text{order by}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** ORDER BY Name ASC" },
        },
        {
          id: "olcs-u10-qr-q15", difficulty: "core", totalMarks: 2,
          stem: "A query returns 12 rows. Each row shows the fields Name and Class. How many field values appear in the result in total?",
          response: { type: "numeric", parts: [{ label: "Total field values", answer: 24 }] },
          markscheme: { principles: [{ kind: "principle", name: "Query result", statement: "Rows x fields = total values." }], steps: [
            { reasoning: "Each row has 2 field values.", working: "\\text{2 per row}", marks: 1, markCode: "M" },
            { reasoning: "12 rows x 2 = 24 values.", working: "24", marks: 1, markCode: "A" },
          ], finalAnswer: "24" },
        },
        {
          id: "olcs-u10-qr-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Queries review.",
          parts: [
            { label: "a", prompt: "Write SQL to select Name and Class from a table Students.", marks: 2 },
            { label: "b", prompt: "Add a WHERE clause so only class '10A' records are returned.", marks: 2 },
            { label: "c", prompt: "What does ORDER BY Name DESC do?", marks: 2 },
            { label: "d", prompt: "Write SQL counting students older than 14.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "SQL queries", statement: "SELECT/WHERE/ORDER BY/COUNT." },
          ], steps: [
            { part: "a", reasoning: "SELECT Name, Class FROM Students.", working: "SELECT", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct syntax.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "WHERE Class = '10A'.", working: "WHERE", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct condition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Sorts names Z to A.", working: "\\text{desc}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "SELECT COUNT(*) FROM Students.", working: "COUNT(*)", marks: 1, markCode: "M" },
            { part: "d", reasoning: "WHERE Age > 14.", working: "WHERE", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid SQL.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) SELECT Name, Class (b) WHERE Class='10A' (c) sorts Z-A (d) COUNT with WHERE Age>14" },
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
            { id: "a", text: "A backup file" },
            { id: "b", text: "A network cable" },
            { id: "c", text: "Formatted output of query results" },
            { id: "d", text: "A type of table" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Report", statement: "Formatted query output." }], steps: [{ reasoning: "Report = formatted results.", working: "\\text{report}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Formatted query output" },
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
        {
          id: "olcs-u10-rp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Reports are mainly used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Present query results in a readable format" },
            { id: "b", text: "Delete old records" },
            { id: "c", text: "Store raw data permanently" },
            { id: "d", text: "Encrypt database tables" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Report", statement: "Formatted query output." }], steps: [{ reasoning: "Reports format results for reading.", working: "\\text{report}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Present query results in a readable format" },
        },
        {
          id: "olcs-u10-rp-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A school report shows a subtotal for each of its 5 classes. How many subtotals appear in the report?",
          response: { type: "numeric", parts: [{ label: "Number of subtotals", answer: 5 }] },
          markscheme: { principles: [{ kind: "definition", name: "Report", statement: "Formatted output with grouping and totals." }], steps: [
            { reasoning: "One subtotal per class: 5 classes, 5 subtotals.", working: "\\text{5}", marks: 1, markCode: "B" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u10-rp-q7", difficulty: "core", totalMarks: 1,
          stem: "Which is a real-world use of a database?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Typing a letter" },
            { id: "b", text: "Drawing a picture" },
            { id: "c", text: "Playing a game" },
            { id: "d", text: "A hospital storing patient records" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "DB uses", statement: "Real-world applications." }], steps: [{ reasoning: "Hospitals store patient records in databases.", working: "\\text{hospital}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** A hospital storing patient records" },
        },
        {
          id: "olcs-u10-rp-q8", difficulty: "core", totalMarks: 1,
          stem: "Data validation helps a database by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rejecting data that breaks the rules" },
            { id: "b", text: "Creating backups" },
            { id: "c", text: "Printing reports" },
            { id: "d", text: "Speeding up the processor" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Validation", statement: "Checks data meets rules." }], steps: [{ reasoning: "Validation rejects invalid data.", working: "\\text{validate}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Rejecting data that breaks the rules" },
        },
        {
          id: "olcs-u10-rp-q9", difficulty: "core", totalMarks: 2,
          stem: "A shop's database contains 600 products. A report prints 20 products per page. How many pages are needed to print the whole report?",
          response: { type: "numeric", parts: [{ label: "Number of pages", answer: 30 }] },
          markscheme: { principles: [{ kind: "principle", name: "Report", statement: "Formatted output split into pages." }], steps: [
            { reasoning: "Divide products by products per page.", working: "600 \\div 20", marks: 1, markCode: "M" },
            { reasoning: "600 / 20 = 30 pages.", working: "30", marks: 1, markCode: "A" },
          ], finalAnswer: "30" },
        },
        {
          id: "olcs-u10-rp-q10", difficulty: "core", totalMarks: 1,
          stem: "Backups protect a database against…",
          response: { type: "mcq", choices: [
            { id: "a", text: "More users" },
            { id: "b", text: "Larger tables" },
            { id: "c", text: "Faster queries" },
            { id: "d", text: "Data loss or corruption" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Backup", statement: "Copy of data for recovery." }], steps: [{ reasoning: "Backups allow recovery after loss.", working: "\\text{backup}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Data loss or corruption" },
        },
        {
          id: "olcs-u10-rp-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Explain why a report is more useful than raw query output for a manager.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reports", statement: "Formatted, readable presentation." }], steps: [
            { reasoning: "Reports add headings, grouping and totals.", working: "\\text{formatted}", marks: 1, markCode: "M" },
            { reasoning: "Easier for non-technical users to read.", working: "\\text{readable}", marks: 1, markCode: "M" },
            { reasoning: "Clear exam-style explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reports present query results in a formatted, readable way with headings, grouping and totals." },
        },
        {
          id: "olcs-u10-rp-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A school wants a printed summary of students per class with totals. They should use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A foreign key" },
            { id: "b", text: "A report generated from a query" },
            { id: "c", text: "A spreadsheet only" },
            { id: "d", text: "A backup file" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Reports", statement: "Formatted query output for presentation." }], steps: [{ reasoning: "Reports format query results for printing.", working: "\\text{report}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** A report generated from a query" },
        },
        {
          id: "olcs-u10-rp-q13", difficulty: "foundation", totalMarks: 1,
          stem: "A bank's report lists totals for 12 branches. How many branch totals appear in the report?",
          response: { type: "numeric", parts: [{ label: "Number of totals", answer: 12 }] },
          markscheme: { principles: [{ kind: "definition", name: "Report", statement: "Formatted output with subtotals." }], steps: [
            { reasoning: "One total per branch: 12 branches, 12 totals.", working: "\\text{12}", marks: 1, markCode: "B" },
          ], finalAnswer: "12" },
        },
        {
          id: "olcs-u10-rp-q14", difficulty: "core", totalMarks: 1,
          stem: "Which helps keep data accurate in a database?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Adding more fields" },
            { id: "b", text: "Deleting backups" },
            { id: "c", text: "Larger fonts" },
            { id: "d", text: "Validation rules" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Data integrity", statement: "Validation rules restrict invalid data." }], steps: [{ reasoning: "Validation rules check data meets requirements.", working: "\\text{validate}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Validation rules" },
        },
        {
          id: "olcs-u10-rp-q15", difficulty: "core", totalMarks: 2,
          stem: "A hospital makes a backup of its patient database every day for one week. How many backups are made in 7 days?",
          response: { type: "numeric", parts: [{ label: "Number of backups", answer: 7 }] },
          markscheme: { principles: [{ kind: "principle", name: "Backup", statement: "Copy of data for recovery." }], steps: [
            { reasoning: "One backup per day.", working: "\\text{daily}", marks: 1, markCode: "M" },
            { reasoning: "7 days x 1 backup = 7 backups.", working: "7", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olcs-u10-rp-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Databases and reports review.",
          parts: [
            { label: "a", prompt: "Define a report.", marks: 2 },
            { label: "b", prompt: "Give two real-world uses of databases.", marks: 2 },
            { label: "c", prompt: "What is data validation?", marks: 2 },
            { label: "d", prompt: "Why are backups and security important for databases?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "DB uses", statement: "Reports, uses, validation, backup, security." },
          ], steps: [
            { part: "a", reasoning: "Formatted query output.", working: "\\text{report}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Library / hospital / school etc.", working: "\\text{use}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Two uses given.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Checks data meets rules.", working: "\\text{validate}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Backups protect against data loss.", working: "\\text{backup}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Security controls who can access data.", working: "\\text{security}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reasons given.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) formatted output (b) any two uses (c) rule checking (d) prevent loss, control access" },
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
