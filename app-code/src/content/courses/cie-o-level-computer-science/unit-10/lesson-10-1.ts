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
            { id: "a", text: "A row" },
            { id: "b", text: "A column" },
            { id: "c", text: "A query" },
            { id: "d", text: "A file" },
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
        {
          id: "olcs-u10-dc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a database table, fields are represented by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Columns" },
            { id: "b", text: "Rows" },
            { id: "c", text: "Reports" },
            { id: "d", text: "Files" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Field", statement: "Column in table." }], steps: [{ reasoning: "Field = column.", working: "\\text{column}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Columns" },
        },
        {
          id: "olcs-u10-dc-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A Students table has the fields ID, Name, Class and Age. How many fields does the table have?",
          response: { type: "numeric", parts: [{ label: "Number of fields", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Field", statement: "Column defining data type." }], steps: [
            { reasoning: "Count the fields: ID, Name, Class, Age.", working: "\\text{4 fields}", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u10-dc-q7", difficulty: "core", totalMarks: 1,
          stem: "Which field is most suitable as a primary key for a Customers table?",
          response: { type: "mcq", choices: [
            { id: "a", text: "CustomerName" },
            { id: "b", text: "City" },
            { id: "c", text: "PhoneNumber" },
            { id: "d", text: "CustomerID" },
          ], dorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Primary key", statement: "Unique identifier." }], steps: [{ reasoning: "CustomerID uniquely identifies each customer.", working: "\\text{unique id}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** CustomerID" },
        },
        {
          id: "olcs-u10-dc-q8", difficulty: "core", totalMarks: 1,
          stem: "A foreign key in one table…",
          response: { type: "mcq", choices: [
            { id: "a", text: "References a primary key in another table" },
            { id: "b", text: "Deletes old records" },
            { id: "c", text: "Stores passwords" },
            { id: "d", text: "Must be unique within its own table" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Foreign key", statement: "References another table's PK." }], steps: [{ reasoning: "FK links to another table's primary key.", working: "\\text{fk link}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** References a primary key in another table" },
        },
        {
          id: "olcs-u10-dc-q9", difficulty: "core", totalMarks: 2,
          stem: "A Students table contains 60 records. A query with WHERE Class = '10A' matches 25 records. How many records does the query return?",
          response: { type: "numeric", parts: [{ label: "Number of records returned", answer: 25 }] },
          markscheme: { principles: [{ kind: "principle", name: "Query", statement: "WHERE filters matching records." }], steps: [
            { reasoning: "WHERE returns only matching records.", working: "\\text{filter}", marks: 1, markCode: "M" },
            { reasoning: "25 records match.", working: "25", marks: 1, markCode: "A" },
          ], finalAnswer: "25" },
        },
        {
          id: "olcs-u10-dc-q10", difficulty: "core", totalMarks: 1,
          stem: "Which is NOT an advantage of using a database instead of a spreadsheet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Faster searching of large amounts of data" },
            { id: "b", text: "Less data duplication" },
            { id: "c", text: "Better security for stored data" },
            { id: "d", text: "Data is only stored on paper" },
          ], dorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Databases vs spreadsheets", statement: "Databases offer search, less duplication, security." }], steps: [{ reasoning: "Paper storage is not an advantage of databases.", working: "\\text{not adv}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Data is only stored on paper" },
        },
        {
          id: "olcs-u10-dc-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Explain two reasons why a school would use a database rather than a spreadsheet to store student records.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Database advantages", statement: "Fast search, less duplication, security, many users." }], steps: [
            { reasoning: "Databases search large data quickly.", working: "\\text{fast search}", marks: 1, markCode: "M" },
            { reasoning: "Less duplication / better consistency.", working: "\\text{less dup}", marks: 1, markCode: "M" },
            { reasoning: "Clear, exam-style explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Faster searching of student records and less duplication of data than a spreadsheet." },
        },
        {
          id: "olcs-u10-dc-q12", difficulty: "challenge", totalMarks: 1,
          stem: "In an Enrolments table, StudentID is a foreign key. This means StudentID…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot be used in queries" },
            { id: "b", text: "Identifies each enrolment uniquely" },
            { id: "c", text: "Is always left blank" },
            { id: "d", text: "Stores a value matching a primary key in the Students table" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Foreign key", statement: "References another table's PK." }], steps: [{ reasoning: "FK value matches another table's primary key.", working: "\\text{fk=pk}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Stores a value matching a primary key in the Students table" },
        },
        {
          id: "olcs-u10-dc-q13", difficulty: "foundation", totalMarks: 1,
          stem: "A database table has 5 fields and 120 records. How many records are there in the table?",
          response: { type: "numeric", parts: [{ label: "Number of records", answer: 120 }] },
          markscheme: { principles: [{ kind: "definition", name: "Record", statement: "Row in table." }], steps: [
            { reasoning: "Records are the rows of the table.", working: "\\text{rows}", marks: 1, markCode: "B" },
          ], finalAnswer: "120" },
        },
        {
          id: "olcs-u10-dc-q14", difficulty: "core", totalMarks: 1,
          stem: "Which is a valid example of a record in a Students table with fields ID, Name, Class?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The row (101, 'Sara', '10B')" },
            { id: "b", text: "The field 'Name'" },
            { id: "c", text: "A query" },
            { id: "d", text: "The whole database" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Record", statement: "Row with one complete entry." }], steps: [{ reasoning: "A record is one complete row of data.", working: "\\text{row}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** The row (101, 'Sara', '10B')" },
        },
        {
          id: "olcs-u10-dc-q15", difficulty: "core", totalMarks: 2,
          stem: "The Enrolments table links each enrolment to one student and one course using foreign keys. How many foreign keys does the Enrolments table contain?",
          response: { type: "numeric", parts: [{ label: "Number of foreign keys", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Foreign keys", statement: "Each link needs a foreign key." }], steps: [
            { reasoning: "One foreign key links to Students.", working: "\\text{StudentID}", marks: 1, markCode: "M" },
            { reasoning: "One foreign key links to Courses.", working: "\\text{CourseID}", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u10-dc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Database concepts review.",
          parts: [
            { label: "a", prompt: "Define table, field and record.", marks: 3 },
            { label: "b", prompt: "Explain the difference between a primary key and a foreign key.", marks: 2 },
            { label: "c", prompt: "Give two advantages of databases over spreadsheets.", marks: 2 },
            { label: "d", prompt: "A Students table has fields ID, Name, Class. Which field should be the primary key and why?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Database structure", statement: "Tables, fields, records, keys." },
          ], steps: [
            { part: "a", reasoning: "Table: grid of data.", working: "\\text{table}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Field: column; record: row.", working: "\\text{field+record}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All three defined correctly.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "PK uniquely identifies a record in its own table.", working: "\\text{pk}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "FK references another table's PK.", working: "\\text{fk}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Less duplication / faster search.", working: "\\text{adv1}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Better security / consistency.", working: "\\text{adv2}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "ID should be the primary key.", working: "\\text{ID}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Because it uniquely identifies each student.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) table=grid, field=column, record=row (b) PK unique vs FK link (c) less duplication, faster search (d) ID, unique" },
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
            { id: "a", text: "Keys" },
            { id: "b", text: "Files" },
            { id: "c", text: "Folders" },
            { id: "d", text: "Passwords" },
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
        {
          id: "olcs-u10-rd-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a relational database, each table typically stores…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All data mixed together" },
            { id: "b", text: "One type of entity" },
            { id: "c", text: "Only passwords" },
            { id: "d", text: "Only queries" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Relational model", statement: "Each table holds one entity type." }], steps: [{ reasoning: "Each table stores one type of entity.", working: "\\text{entity}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** One type of entity" },
        },
        {
          id: "olcs-u10-rd-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A library database has three tables: Books, Members and Loans. How many tables does it contain?",
          response: { type: "numeric", parts: [{ label: "Number of tables", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Table", statement: "Grid of data in a database." }], steps: [
            { reasoning: "Count the named tables: Books, Members, Loans.", working: "\\text{3 tables}", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u10-rd-q7", difficulty: "core", totalMarks: 1,
          stem: "Which best describes a foreign key?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A unique ID within its own table" },
            { id: "b", text: "A field referencing a primary key in another table" },
            { id: "c", text: "A backup copy of data" },
            { id: "d", text: "A type of report" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Foreign key", statement: "References another table's PK." }], steps: [{ reasoning: "FK references another table's primary key.", working: "\\text{fk}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** A field referencing a primary key in another table" },
        },
        {
          id: "olcs-u10-rd-q8", difficulty: "core", totalMarks: 1,
          stem: "Storing student names once in a Students table instead of repeating them in every Enrolments record is called…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reducing duplication" },
            { id: "b", text: "Data duplication" },
            { id: "c", text: "Random access" },
            { id: "d", text: "Data corruption" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Relational benefit", statement: "Reduced duplication." }], steps: [{ reasoning: "Relational design stores data once, reducing duplication.", working: "\\text{less dup}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Reducing duplication" },
        },
        {
          id: "olcs-u10-rd-q9", difficulty: "core", totalMarks: 2,
          stem: "The Enrolments table must link each enrolment to one student and one course. How many foreign keys does it need?",
          response: { type: "numeric", parts: [{ label: "Number of foreign keys", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Foreign keys", statement: "Each table link needs a foreign key." }], steps: [
            { reasoning: "One FK links to Students.", working: "\\text{StudentID}", marks: 1, markCode: "M" },
            { reasoning: "One FK links to Courses.", working: "\\text{CourseID}", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u10-rd-q10", difficulty: "core", totalMarks: 1,
          stem: "Which is a benefit of splitting data into multiple linked tables?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Harder to query" },
            { id: "b", text: "Easier updates and better consistency" },
            { id: "c", text: "Slower searches" },
            { id: "d", text: "More data duplication" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Relational", statement: "Consistency and flexibility." }], steps: [{ reasoning: "Linked tables reduce duplication and ease updates.", working: "\\text{consistent}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Easier updates and better consistency" },
        },
        {
          id: "olcs-u10-rd-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Explain why updating a student's name in one Students table is better than updating it in many Enrolments records.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Relational", statement: "Single source of truth." }], steps: [
            { reasoning: "Name stored once — update in one place only.", working: "\\text{once}", marks: 1, markCode: "M" },
            { reasoning: "Avoids inconsistent/duplicate data.", working: "\\text{consistent}", marks: 1, markCode: "M" },
            { reasoning: "Clear exam-style explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "The name is stored once, so updating it in one place keeps all linked records consistent." },
        },
        {
          id: "olcs-u10-rd-q12", difficulty: "challenge", totalMarks: 1,
          stem: "In the design Students(ID, Name), Enrolments(StudentID, CourseID), Courses(ID, Title) — which field is a primary key?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Enrolments.StudentID" },
            { id: "b", text: "Courses.Title" },
            { id: "c", text: "Enrolments.CourseID" },
            { id: "d", text: "Students.ID" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Primary key", statement: "Unique identifier in its table." }], steps: [{ reasoning: "Students.ID uniquely identifies each student.", working: "\\text{pk}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Students.ID" },
        },
        {
          id: "olcs-u10-rd-q13", difficulty: "foundation", totalMarks: 1,
          stem: "A database has 4 tables. Each table needs one primary key. How many primary keys are needed in total?",
          response: { type: "numeric", parts: [{ label: "Number of primary keys", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Primary key", statement: "Unique identifier per table." }], steps: [
            { reasoning: "One primary key per table: 4 tables, 4 keys.", working: "\\text{4}", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u10-rd-q14", difficulty: "core", totalMarks: 1,
          stem: "A junction table such as Enrolments is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypt stored data" },
            { id: "b", text: "Sort query results" },
            { id: "c", text: "Store duplicate data" },
            { id: "d", text: "Link two tables in a many-to-many relationship" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Junction table", statement: "Links two tables via foreign keys." }], steps: [{ reasoning: "Enrolments links Students and Courses with FKs.", working: "\\text{junction}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Link two tables in a many-to-many relationship" },
        },
        {
          id: "olcs-u10-rd-q15", difficulty: "core", totalMarks: 2,
          stem: "An Enrolments table has 200 records, each containing a StudentID foreign key and a CourseID foreign key. How many foreign key values are stored per record?",
          response: { type: "numeric", parts: [{ label: "Foreign key values per record", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Foreign keys", statement: "Each link field holds one FK value." }], steps: [
            { reasoning: "StudentID is one foreign key value.", working: "\\text{StudentID}", marks: 1, markCode: "M" },
            { reasoning: "CourseID is the second foreign key value.", working: "\\text{CourseID}", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u10-rd-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Relational databases review.",
          parts: [
            { label: "a", prompt: "What is a relational database?", marks: 2 },
            { label: "b", prompt: "What is a foreign key?", marks: 2 },
            { label: "c", prompt: "Give two benefits of relational design.", marks: 2 },
            { label: "d", prompt: "A library wants to link Books and Members through a Loans table. Name the tables needed and the key fields in Loans.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Relational DB", statement: "Linked tables via keys." },
          ], steps: [
            { part: "a", reasoning: "Multiple tables linked by keys.", working: "\\text{linked}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "References another table's PK.", working: "\\text{fk}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Less duplication.", working: "\\text{less dup}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Consistency / flexibility.", working: "\\text{consistent}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Books, Members, Loans tables named.", working: "\\text{tables}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Loans has BookID and MemberID foreign keys.", working: "\\text{fks}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct relational design.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) linked tables (b) PK reference (c) less dup, consistency (d) Books, Members, Loans with BookID+MemberID FKs" },
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
