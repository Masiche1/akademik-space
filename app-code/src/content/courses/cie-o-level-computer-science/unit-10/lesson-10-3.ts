import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "olcs-u10-lesson-10-3",
  code: "10-3",
  title: "Databases Revision",
  goal: "I CAN review database concepts, queries and uses for exam-style questions.",
  standards: ["2210 10.1", "2210 10.2"],
  vocabulary: [
    { term: "Primary key", definition: "Unique record identifier." },
    { term: "Foreign key", definition: "Link to another table's primary key." },
    { term: "Query", definition: "Data retrieval request." },
    { term: "Normalization", definition: "Structuring data to reduce duplication." },
    { term: "Backup", definition: "Copy of data for recovery." },
  ],
  concepts: [
    {
      id: "olcs-u10-revision",
      title: "Databases revision",
      skill: "Apply database concepts and SQL to exam questions.",
      lesson: {
        sections: [
          { heading: "Key terms", body: "Table (fields=columns, records=rows); primary key (unique ID); foreign key (links tables); query (retrieval); report (formatted output)." },
          { heading: "SQL quick reference", body: "SELECT fields FROM table WHERE condition AND/OR condition ORDER BY field ASC/DESC; COUNT(*) for totals." },
          { heading: "Common questions", body: "- 'What is a primary key?' → unique identifier.\n- 'Why relational?' → less duplication, consistency.\n- 'Write a query...' → SELECT/WHERE/ORDER BY.\n- 'Advantage of databases?' → fast search, security, no duplication." },
        ],
        keyFormulas: [
          { name: "SQL", statement: "SELECT ... FROM ... WHERE ... ORDER BY ..." },
        ],
        workedExample: {
          problem: "Students(ID, Name, Class). Write SQL for all names in '10A'.",
          solution: "SELECT Name FROM Students WHERE Class = '10A'",
        },
      },
      questions: [
        {
          id: "olcs-u10-rv-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A field in a database table is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A key only" },
            { id: "b", text: "A file" },
            { id: "c", text: "A row" },
            { id: "d", text: "A column" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Field", statement: "Column." }], steps: [{ reasoning: "Field = column.", working: "\\text{column}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** A column" },
        },
        {
          id: "olcs-u10-rv-q2", difficulty: "core", totalMarks: 2,
          stem: "Write SQL to select all records from a table called Books.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "SQL", statement: "SELECT * syntax." }], steps: [
            { reasoning: "SELECT * FROM Books.", working: "SELECT *", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "SELECT * FROM Books" },
        },
        {
          id: "olcs-u10-rv-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a primary key is needed in a database table.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Primary key", statement: "Uniqueness + linking." }], steps: [
            { reasoning: "Uniquely identifies each record.", working: "\\text{unique}", marks: 1, markCode: "M" },
            { reasoning: "Enables foreign key links.", working: "\\text{link}", marks: 1, markCode: "M" },
            { reasoning: "Prevents duplicate/confused records.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Primary key uniquely identifies records and enables links to other tables." },
        },
        {
          id: "olcs-u10-rv-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Databases exam review.",
          parts: [
            { label: "a", prompt: "Define primary key and foreign key.", marks: 2 },
            { label: "b", prompt: "Write SQL: names of students aged over 15.", marks: 3 },
            { label: "c", prompt: "Why are relational databases better than flat files?", marks: 2 },
            { label: "d", prompt: "Give two real-world database uses.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Databases", statement: "Keys, SQL, relational benefits, uses." },
          ], steps: [
            { part: "a", reasoning: "PK: unique ID; FK: links tables.", working: "\\text{pk+fk}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "SELECT Name FROM Students WHERE Age > 15.", working: "SELECT", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct WHERE.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Valid SQL.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Less duplication + consistency.", working: "\\text{relational}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Library/hospital/etc.", working: "\\text{use}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Two uses.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) unique ID vs link (b) SELECT...WHERE (c) less duplication (d) any two uses" },
        },
        {
          id: "olcs-u10-rv-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A record in a database table is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A query" },
            { id: "b", text: "A file" },
            { id: "c", text: "A column" },
            { id: "d", text: "A row" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Record", statement: "Row in table." }], steps: [{ reasoning: "Record = row.", working: "\\text{row}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** A row" },
        },
        {
          id: "olcs-u10-rv-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A Students table has the fields ID, Name, Class, Age and Email. How many fields does it have?",
          response: { type: "numeric", parts: [{ label: "Number of fields", answer: 5 }] },
          markscheme: { principles: [{ kind: "definition", name: "Field", statement: "Column in table." }], steps: [
            { reasoning: "Count the fields: ID, Name, Class, Age, Email.", working: "\\text{5 fields}", marks: 1, markCode: "B" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u10-rv-q7", difficulty: "core", totalMarks: 1,
          stem: "In SQL, ORDER BY is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Count rows" },
            { id: "b", text: "Filter records" },
            { id: "c", text: "Join tables" },
            { id: "d", text: "Sort results" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "ORDER BY", statement: "Sorts results by a field." }], steps: [{ reasoning: "ORDER BY sorts the output.", working: "\\text{order by}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Sort results" },
        },
        {
          id: "olcs-u10-rv-q8", difficulty: "core", totalMarks: 1,
          stem: "A foreign key is needed to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Speed up printing" },
            { id: "b", text: "Encrypt passwords" },
            { id: "c", text: "Link records between tables" },
            { id: "d", text: "Make data look neat" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Foreign key", statement: "References another table's PK." }], steps: [{ reasoning: "FK links records across tables.", working: "\\text{fk}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Link records between tables" },
        },
        {
          id: "olcs-u10-rv-q9", difficulty: "core", totalMarks: 2,
          stem: "A Students table has 90 records. A query with WHERE Age > 15 matches 40 records. How many rows does it return?",
          response: { type: "numeric", parts: [{ label: "Rows returned", answer: 40 }] },
          markscheme: { principles: [{ kind: "principle", name: "Query", statement: "WHERE filters matching records." }], steps: [
            { reasoning: "WHERE returns only matching records.", working: "\\text{filter}", marks: 1, markCode: "M" },
            { reasoning: "40 records match.", working: "40", marks: 1, markCode: "A" },
          ], finalAnswer: "40" },
        },
        {
          id: "olcs-u10-rv-q10", difficulty: "core", totalMarks: 1,
          stem: "Which SQL statement counts all records in a table?",
          response: { type: "mcq", choices: [
            { id: "a", text: "SELECT * FROM table" },
            { id: "b", text: "ORDER BY COUNT" },
            { id: "c", text: "SELECT COUNT(*) FROM table" },
            { id: "d", text: "WHERE COUNT table" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "COUNT", statement: "Counts matching records." }], steps: [{ reasoning: "COUNT(*) counts records.", working: "\\text{count}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** SELECT COUNT(*) FROM table" },
        },
        {
          id: "olcs-u10-rv-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Explain what normalization means and why it is useful in a database.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Normalization", statement: "Structuring data to reduce duplication." }], steps: [
            { reasoning: "Organises data into related tables to remove duplication.", working: "\\text{organise}", marks: 1, markCode: "M" },
            { reasoning: "Reduces redundancy and inconsistency.", working: "\\text{less dup}", marks: 1, markCode: "M" },
            { reasoning: "Clear exam-style explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Normalization structures data into related tables to reduce duplication and keep data consistent." },
        },
        {
          id: "olcs-u10-rv-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which is the best primary key for a Students table with fields ID, Name, Class, Age?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Name" },
            { id: "b", text: "StudentID" },
            { id: "c", text: "Age" },
            { id: "d", text: "Class" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Primary key", statement: "Unique identifier." }], steps: [{ reasoning: "StudentID uniquely identifies each student.", working: "\\text{unique}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** StudentID" },
        },
        {
          id: "olcs-u10-rv-q13", difficulty: "foundation", totalMarks: 1,
          stem: "SELECT COUNT(*) FROM Orders returns 320. How many records are in the Orders table?",
          response: { type: "numeric", parts: [{ label: "Number of records", answer: 320 }] },
          markscheme: { principles: [{ kind: "definition", name: "COUNT", statement: "Counts matching records." }], steps: [
            { reasoning: "COUNT(*) counts all records returned.", working: "\\text{count}", marks: 1, markCode: "B" },
          ], finalAnswer: "320" },
        },
        {
          id: "olcs-u10-rv-q14", difficulty: "core", totalMarks: 1,
          stem: "To select only students in class '10A', the query needs…",
          response: { type: "mcq", choices: [
            { id: "a", text: "COUNT(Class)" },
            { id: "b", text: "FROM Class" },
            { id: "c", text: "ORDER BY Class" },
            { id: "d", text: "WHERE Class = '10A'" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "WHERE", statement: "Filters records by condition." }], steps: [{ reasoning: "WHERE applies the class condition.", working: "\\text{where}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** WHERE Class = '10A'" },
        },
        {
          id: "olcs-u10-rv-q15", difficulty: "core", totalMarks: 2,
          stem: "A query selects the fields Name and Age for 25 students. How many field values appear in the result?",
          response: { type: "numeric", parts: [{ label: "Total field values", answer: 50 }] },
          markscheme: { principles: [{ kind: "principle", name: "Query result", statement: "Rows x fields = total values." }], steps: [
            { reasoning: "Each row has 2 field values.", working: "\\text{2 per row}", marks: 1, markCode: "M" },
            { reasoning: "25 rows x 2 = 50 values.", working: "50", marks: 1, markCode: "A" },
          ], finalAnswer: "50" },
        },
        {
          id: "olcs-u10-rv-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Databases final review.",
          parts: [
            { label: "a", prompt: "Define primary key.", marks: 2 },
            { label: "b", prompt: "Write SQL selecting all fields from a table Products.", marks: 2 },
            { label: "c", prompt: "Explain one benefit of a relational database.", marks: 2 },
            { label: "d", prompt: "A school database has Students and Courses linked by an Enrolments table. Explain the role of the foreign keys in Enrolments.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Databases", statement: "Keys, SQL, relational benefits." },
          ], steps: [
            { part: "a", reasoning: "Uniquely identifies each record.", working: "\\text{unique}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "SELECT * FROM Products.", working: "SELECT *", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct syntax.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Less duplication / consistency.", working: "\\text{relational}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "StudentID FK links to Students table.", working: "\\text{StudentID}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "CourseID FK links to Courses table.", working: "\\text{CourseID}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct explanation of linking.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) unique ID (b) SELECT * FROM Products (c) less duplication (d) FKs link to Students and Courses" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u10-10-3-notes", title: "Databases revision — notes", summary: "Key terms, SQL syntax and exam strategy.",
      sections: [
        { heading: "Terms", body: "PK=unique ID, FK=link, query=retrieval, report=formatted output." },
        { heading: "SQL", body: "SELECT...FROM...WHERE...ORDER BY; COUNT(*) for totals. Practise writing queries." },
      ] },
  ],
};
