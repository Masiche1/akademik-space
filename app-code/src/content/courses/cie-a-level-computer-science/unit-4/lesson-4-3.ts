import type { Lesson } from "../../../types.ts";

export const lesson153: Lesson = {
  id: "ciealc-u4-lesson-4-3",
  code: "4-3",
  title: "Databases and SQL",
  goal: "I CAN design relational databases and write SQL queries.",
  standards: [
    "Cambridge A Level Computer Science 9618: databases",
    "9618: SQL",
  ],

  vocabulary: [
    { term: "Database", definition: "Organised collection of related data." },
    { term: "Table", definition: "Data organised in rows and columns." },
    { term: "Record", definition: "Single row of data." },
    { term: "Field", definition: "Single column of data." },
    { term: "Primary key", definition: "Unique identifier for each record." },
    {
      term: "Foreign key",
      definition: "Links to primary key in another table.",
    },
    { term: "SQL", definition: "Structured query language for databases." },
  ],
  concepts: [
    {
      id: "ciealc-u4-s3-db",
      title: "Databases and SQL",
      skill: "Design databases and write SQL at A Level.",
      lesson: {
        sections: [
          {
            heading: "Relational databases",
            body: "Tables with rows (records) and columns (fields). Primary key uniquely identifies records. Foreign key links tables. Normalisation reduces redundancy. Relationships: one-to-one, one-to-many, many-to-many.",
          },
          {
            heading: "SQL",
            body: "SELECT — retrieve data. FROM — specify table. WHERE — filter. INSERT — add records. UPDATE — modify. DELETE — remove. JOIN — combine tables. ORDER BY — sort results.",
          },
        ],
        keyFormulas: [
          { name: "Primary key", statement: "unique record identifier" },
          { name: "Foreign key", statement: "links between tables" },
          { name: "SQL", statement: "SELECT/FROM/WHERE/INSERT/UPDATE/DELETE" },
        ],
        workedExample: {
          problem:
            "Write SQL to find all students with grade 'A' in table 'students'.",
          solution: "SELECT * FROM students WHERE grade = 'A';",
        },
      },
      questions: [
        {
          id: "ciealc-u4-db-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary key?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Unique identifier for each record",
              },
              {
                id: "b",
                text: "A network protocol",
              },
              {
                id: "c",
                text: "A type of table",
              },
              {
                id: "d",
                text: "A SQL command",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary key",
                statement: "Unique record ID.",
              },
            ],
            steps: [
              {
                reasoning: "Primary key uniquely identifies each record.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unique record identifier",
          },
        },
        {
          id: "ciealc-u4-db-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a foreign key?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Foreign key",
                statement: "Links tables.",
              },
            ],
            steps: [
              {
                reasoning: "Foreign key links to primary key in another table.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables table relationships.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Links between tables",
          },
        },
        {
          id: "ciealc-u4-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write SQL to select all fields from table 'students' where age > 18.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "SQL SELECT",
                statement: "Query syntax.",
              },
            ],
            steps: [
              {
                reasoning: "SELECT * FROM students WHERE age > 18.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct syntax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid SQL statement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "SELECT * FROM students WHERE age > 18",
          },
        },
        {
          id: "ciealc-u4-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define database, table, record, field, primary key, foreign key, SQL, normalisation. (b) What is a record? (c) What is a field? (d) What is a primary key? (e) Write SQL to insert a record. (f) Write SQL to update a record. (g) Write SQL to join two tables. (h) Design a database for a library with books and members.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Databases",
                statement: "Design, keys, SQL.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All eight definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Single row of data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Single column of data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Unique record identifier.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid INSERT statement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Valid UPDATE statement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid JOIN query.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid library database design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Database design and SQL.",
          },
        },
        {
          id: "ciealc-u4-db-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of a primary key in a database table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To delete duplicate records automatically" },
              { id: "b", text: "To encrypt the table data" },
              { id: "c", text: "To sort the records alphabetically" },
              {
                id: "d",
                text: "To uniquely identify each record in the table",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary key",
                statement: "Unique record identifier.",
              },
            ],
            steps: [
              {
                reasoning: "Every record must have a unique primary key value.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Uniquely identifies records",
          },
        },
        {
          id: "ciealc-u4-db-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A table contains 50 records. A query with WHERE age > 18 matches 32 of them. How many records does the query return? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 32 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "WHERE filtering",
                statement: "Only matching records are returned.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "32 records satisfy the condition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "32",
          },
        },
        {
          id: "ciealc-u4-db-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a foreign key do in a relational database?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It encrypts sensitive data" },
              { id: "b", text: "It sorts records by value" },
              {
                id: "c",
                text: "It links a record in one table to a record in another table",
              },
              { id: "d", text: "It backs up the database" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Foreign key",
                statement: "Links between tables.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A foreign key references the primary key of a related table, creating relationships.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Links records between tables",
          },
        },
        {
          id: "ciealc-u4-db-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A table contains 18 records. An INSERT statement adds 2 new records. How many records does the table contain afterwards? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "INSERT operation",
                statement: "Adds new records to a table.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "18 + 2 = 20 records.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "20",
          },
        },
        {
          id: "ciealc-u4-db-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is normalisation in database design and why is it used?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normalisation",
                statement: "Structuring tables to reduce redundancy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Normalisation organises data into tables to eliminate duplication.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It reduces data redundancy and prevents update anomalies, improving integrity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Reduces redundancy and improves integrity",
          },
        },
        {
          id: "ciealc-u4-db-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which SQL keyword is used to retrieve data from a table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "UPDATE" },
              { id: "b", text: "DELETE" },
              { id: "c", text: "SELECT" },
              { id: "d", text: "INSERT" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SQL SELECT",
                statement: "Retrieves data from tables.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SELECT ... FROM ... WHERE retrieves matching records.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** SELECT",
          },
        },
        {
          id: "ciealc-u4-db-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Two tables each contain 10 records. A JOIN matches every record in the first table to exactly one record in the second. How many rows does the joined result contain? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "JOIN result size",
                statement: "One-to-one join keeps the row count.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each of the 10 records pairs with one record, giving 10 result rows.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "ciealc-u4-db-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the difference between the SQL UPDATE and DELETE statements.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UPDATE vs DELETE",
                statement: "Modify vs remove records.",
              },
            ],
            steps: [
              {
                reasoning: "UPDATE modifies the values of existing records.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "DELETE removes entire records from the table.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "UPDATE changes; DELETE removes",
          },
        },
        {
          id: "ciealc-u4-db-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the SQL ORDER BY clause do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It encrypts the results" },
              { id: "b", text: "It sorts the query results" },
              { id: "c", text: "It deletes unwanted records" },
              { id: "d", text: "It creates a new table" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ORDER BY",
                statement: "Sorts query results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ORDER BY arranges returned rows in ascending or descending order.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Sorts the results",
          },
        },
        {
          id: "ciealc-u4-db-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many relationship types are named for relational databases: one-to-one, one-to-many and many-to-many? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Table relationships",
                statement: "Three cardinality types.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "One-to-one, one-to-many and many-to-many = 3 types.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciealc-u4-db-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A school database has tables Students(studentID, name, class) and Grades(studentID, subject, grade). Write an SQL query that returns the names of all students in class '10B' who achieved grade 'A' in any subject.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "SQL JOIN query",
                statement:
                  "Join tables on studentID and filter both conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SELECT name FROM Students ... requires joining with Grades on studentID.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "WHERE Students.class = '10B' AND Grades.grade = 'A' (or equivalent JOIN ... ON syntax).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Correct overall structure: SELECT ... FROM ... JOIN ... ON ... WHERE ...;.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "SELECT name FROM Students JOIN Grades ON Students.studentID = Grades.studentID WHERE class = '10B' AND grade = 'A'",
          },
        },
        {
          id: "ciealc-u4-db-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an example of a many-to-many relationship?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A customer and their single account number" },
              { id: "b", text: "Students and the courses they take" },
              { id: "c", text: "An employee and their unique staff ID" },
              { id: "d", text: "A book and its single ISBN" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Many-to-many",
                statement: "Multiple records on both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A student takes many courses and a course has many students — many-to-many.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Students and courses",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-db-notes",
      title: "Databases — notes",
      summary:
        "Tables=records+fields; primary key=unique ID; foreign key=links tables. SQL=SELECT/INSERT/UPDATE/DELETE/JOIN.",
      sections: [
        {
          heading: "Key idea",
          body: "Normalisation reduces redundancy — design tables carefully.",
        },
        {
          heading: "SQL",
          body: "SELECT retrieves, INSERT adds, UPDATE modifies, DELETE removes, JOIN combines.",
        },
      ],
    },
  ],
};
