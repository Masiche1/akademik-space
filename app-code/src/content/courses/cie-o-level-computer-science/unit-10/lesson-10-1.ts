import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "olcs-u10-lesson-10-1",
  code: "10-1",
  title: "Database Concepts",
  goal: "I CAN identify tables, fields, records and keys, and explain why databases are used.",
  standards: ["2210 10.1"],
  vocabulary: [
    { term: "Database", definition: "Organised collection of related data stored electronically." },
    { term: "Table", definition: "Grid of data in a database — rows and columns." },
    { term: "Field", definition: "Column defining one type of data — e.g. 'Name'." },
    { term: "Record", definition: "Row containing one complete entry." },
    { term: "Primary key", definition: "Field uniquely identifying each record." },
    { term: "Foreign key", definition: "Field linking to another table's primary key." },
    { term: "Query", definition: "Request to retrieve or manipulate data." },
  ],
  concepts: [
    {
      id: "olcs-u10-concepts",
      title: "Tables, fields, records and keys",
      skill: "Identify database structure components and their roles.",
      lesson: {
        sections: [
          { heading: "Database structure", body: "A database organises data into **tables**. Each table has:\n- **Fields** (columns): define data types — e.g. StudentID, Name, Class.\n- **Records** (rows): one complete entry each." },
          { heading: "Keys", body: "- **Primary key**: unique field identifying each record — e.g. StudentID. Never duplicated.\n- **Foreign key**: field in one table referencing another table's primary key — links related tables." },
          { heading: "Why databases", body: "vs spreadsheets/files: faster searching, less duplication (normalisation), better security, handles large data, multiple users." },
        ],
        keyFormulas: [
          { name: "Table", statement: "fields = columns; records = rows" },
        ],
        workedExample: {
          problem: "In a Students table with fields ID, Name, Class — what is a record?",
          solution: "One row: e.g. (101, 'Ali', '10A') — a complete student's data.",
        },
      },
      questions: [
        {
          id: "olcs-u10-dc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a database table, a record is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A row" }, { id: "b", text: "A column" }, { id: "c", text: "A file" }, { id: "d", text: "A query" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Record", statement: "Row in table." }], steps: [{ reasoning: "Record = row.", working: "\\text{row}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A row" },
        },
        {
          id: "olcs-u10-dc-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a primary key?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Primary key", statement: "Unique identifier." }], steps: [
            { reasoning: "Field uniquely identifying each record.", working: "\\text{unique}", marks: 1, markCode: "M" },
            { reasoning: "Correct definition.", marks: 1, markCode: "A" },
          ], finalAnswer: "A field that uniquely identifies each record in a table." },
        },
        {
          id: "olcs-u10-dc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between a field and a record.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Field vs record", statement: "Column vs row." }], steps: [
            { reasoning: "Field: column defining data type.", working: "\\text{field}", marks: 1, markCode: "M" },
            { reasoning: "Record: row with one entry.", working: "\\text{record}", marks: 1, markCode: "M" },
            { reasoning: "Example given.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Field = column (data type); record = row (one entry)." },
        },
        {
          id: "olcs-u10-dc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Database concepts review.",
          parts: [
            { label: "a", prompt: "Define database, table, field, record.", marks: 4 },
            { label: "b", prompt: "Define primary key.", marks: 2 },
            { label: "c", prompt: "What is a foreign key?", marks: 1 },
            { label: "d", prompt: "Give two advantages of databases over spreadsheets.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Database structure", statement: "Tables/fields/records/keys." },
          ], steps: [
            { part: "a", reasoning: "Database: organised data.", working: "\\text{db}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Table: grid; field: column; record: row.", working: "\\text{table+field+record}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "All four defined.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Unique identifier.", working: "\\text{pk}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Links to another table's PK.", working: "\\text{fk}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Less duplication / faster search.", working: "\\text{adv1}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Second advantage.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) definitions (b) unique ID (c) link field (d) less duplication, faster search" },
        },
      ],
    },
    {
      id: "olcs-u10-relational",
      title: "Relational databases",
      skill: "Explain how tables link via keys and why relational design reduces duplication.",
      lesson: {
        sections: [
          { heading: "Relational model", body: "Multiple tables linked by keys — e.g. Students table and Courses table linked by CourseID. Each table holds one type of entity; relationships connect them." },
          { heading: "Benefits", body: "- **Less duplication**: student details stored once, not repeated per enrolment.\n- **Consistency**: update once, everywhere reflects it.\n- **Flexibility**: add new tables/relationships easily." },
          { heading: "Example", body: "Students(ID, Name) + Enrolments(StudentID, CourseID) + Courses(ID, Title). Enrolments.StudentID is a foreign key → Students.ID." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why store student names in a separate table rather than repeating them in Enrolments?",
          solution: "Avoids duplication — update name once; Enrolments only needs StudentID foreign key.",
        },
      },
      questions: [
        {
          id: "olcs-u10-rd-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A relational database links tables using…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Keys" }, { id: "b", text: "Passwords" }, { id: "c", text: "Files" }, { id: "d", text: "Folders" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Relational link", statement: "Keys connect tables." }], steps: [{ reasoning: "Keys link tables.", working: "\\text{keys}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Keys" },
        },
        {
          id: "olcs-u10-rd-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the main benefit of a relational database over one big table?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Relational", statement: "Reduced duplication." }], steps: [
            { reasoning: "Less data duplication.", working: "\\text{less dup}", marks: 1, markCode: "M" },
            { reasoning: "Easier updates/consistency.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reduces duplication and improves consistency." },
        },
        {
          id: "olcs-u10-rd-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a foreign key links two tables.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Foreign key", statement: "References another table's PK." }], steps: [
            { reasoning: "FK holds value matching another table's PK.", working: "\\text{fk}", marks: 1, markCode: "M" },
            { reasoning: "Creates the relationship between tables.", working: "\\text{link}", marks: 1, markCode: "M" },
            { reasoning: "Example given.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "A foreign key stores a value equal to another table's primary key, linking the records." },
        },
        {
          id: "olcs-u10-rd-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Relational databases review.",
          parts: [
            { label: "a", prompt: "What is a relational database?", marks: 2 },
            { label: "b", prompt: "Define foreign key.", marks: 2 },
            { label: "c", prompt: "Give two benefits of relational design.", marks: 2 },
            { label: "d", prompt: "A school stores students in one table and courses in another. How are they linked?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Relational DB", statement: "Linked tables via keys." },
          ], steps: [
            { part: "a", reasoning: "Tables linked by keys.", working: "\\text{linked}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "References another table's PK.", working: "\\text{fk}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Less duplication.", working: "\\text{less dup}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Consistency/flexibility.", working: "\\text{consistent}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Enrolments table with StudentID+CourseID FKs.", working: "\\text{enrolments}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Links both tables.", working: "\\text{links}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct design.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) linked tables (b) PK reference (c) less dup+consistent (d) junction table with FKs" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u10-10-1-notes", title: "Database concepts — notes", summary: "Tables, fields, records, keys and relational design.",
      sections: [
        { heading: "Structure", body: "Table = fields (columns) + records (rows). Primary key = unique ID; foreign key = link." },
        { heading: "Relational", body: "Multiple linked tables reduce duplication and improve consistency." },
      ] },
  ],
};
