import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "cieict-u1-lesson-1-3",
  code: "1-3",
  title: "Databases and Queries",
  goal: "I CAN design database tables and write queries to retrieve and manipulate data.",
  standards: [
    "Cambridge IGCSE ICT 0417: databases",
    "0417 section 4: databases",
  ],

  vocabulary: [
    { term: "Database", definition: "Organised collection of related data." },
    {
      term: "Table",
      definition: "Grid of records (rows) and fields (columns).",
    },
    { term: "Record", definition: "One complete row of data." },
    { term: "Field", definition: "One column — a specific attribute." },
    {
      term: "Query",
      definition: "Request retrieving/manipulating specific records.",
    },
    { term: "Primary key", definition: "Unique ID identifying each record." },
  ],
  concepts: [
    {
      id: "cieict-u1-s3-db",
      title: "Databases",
      skill: "Design tables and query data at IGCSE ICT level.",
      lesson: {
        sections: [
          {
            heading: "Database structure",
            body: "Tables hold records (rows) and fields (columns). Primary key uniquely identifies each record. Data types: text, number, date, Boolean. Relationships link tables — one customer has many orders.",
          },
          {
            heading: "Queries",
            body: "Queries ask questions: SELECT specific fields, WHERE conditions filter, ORDER BY sorts, COUNT totals. INSERT adds records, UPDATE modifies, DELETE removes. Queries extract exactly what's needed.",
          },
        ],
        keyFormulas: [
          { name: "Table", statement: "records × fields" },
          { name: "SELECT...WHERE", statement: "retrieve filtered data" },
          { name: "Primary key", statement: "unique record ID" },
        ],
        workedExample: {
          problem:
            "Library DB: books(id, title, genre, available). Find available fiction books sorted by title.",
          solution:
            "SELECT title FROM books WHERE genre='fiction' AND available=true ORDER BY title.",
        },
      },
      questions: [
        {
          id: "cieict-u1-db-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary key?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A password",
              },
              {
                id: "b",
                text: "Unique ID identifying each record",
              },
              {
                id: "c",
                text: "A type of query",
              },
              {
                id: "d",
                text: "A table column",
              },
            ],
            correctChoiceId: "b",
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
                reasoning: "PK uniquely identifies each row.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unique record identifier",
          },
        },
        {
          id: "cieict-u1-db-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a record and a field?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Record vs field",
                statement: "Row vs column.",
              },
            ],
            steps: [
              {
                reasoning: "Record = one complete row.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Field = one column/attribute.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Row vs column",
          },
        },
        {
          id: "cieict-u1-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a query: employees(id, name, dept, salary). Find employees in 'Sales' earning over 50000.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Queries",
                statement: "SELECT...WHERE.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SELECT name FROM employees WHERE dept='Sales' AND salary>50000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid query syntax.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "SELECT...WHERE dept='Sales' AND salary>50000",
          },
        },
        {
          id: "cieict-u1-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define database, table, record, field, primary key, query. (b) Design a 'club members' table with 5 fields. (c) What type for each field? (d) Write query for members who joined after 2020. (e) What is a relationship between tables? (f) Why use primary keys? (g) What does ORDER BY do? (h) Design a 2-table school system (students + courses).",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Databases",
                statement: "Tables, queries, relationships.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Valid table with 5 fields.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Appropriate data types.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Valid date query.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Links between tables via keys.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Unique identification, relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Sorts results.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid 2-table design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Database design and querying.",
          },
        },
        {
          id: "cieict-u1-db-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a database table, what is a 'record'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One complete row of data" },
              { id: "b", text: "A formula" },
              { id: "c", text: "A backup" },
              { id: "d", text: "A column" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Record", statement: "Row of data." },
            ],
            steps: [
              {
                reasoning: "A record is one complete row.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "One complete row",
          },
        },
        {
          id: "cieict-u1-db-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which data type is most appropriate for a 'date of birth' field?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boolean" },
              { id: "b", text: "Text" },
              { id: "c", text: "Number" },
              { id: "d", text: "Date" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data types",
                statement: "Choose type matching the data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dates need the date data type for sorting/calculation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Date",
          },
        },
        {
          id: "cieict-u1-db-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the WHERE clause in a query do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adds new records" },
              { id: "b", text: "Filters records that meet a condition" },
              { id: "c", text: "Deletes the table" },
              { id: "d", text: "Sorts the results" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "WHERE clause",
                statement: "Condition-based filtering.",
              },
            ],
            steps: [
              {
                reasoning: "WHERE filters records by condition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Filters records by condition",
          },
        },
        {
          id: "cieict-u1-db-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A library has customers and orders tables. What relationship best describes it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One-to-one" },
              { id: "b", text: "Many-to-many only" },
              {
                id: "c",
                text: "One-to-many: one customer can place many orders",
              },
              { id: "d", text: "No relationship" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relationships",
                statement: "One-to-many links tables.",
              },
            ],
            steps: [
              {
                reasoning: "One customer can place many orders = one-to-many.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "One-to-many",
          },
        },
        {
          id: "cieict-u1-db-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A table has 5 fields and 120 records. How many individual data cells does it contain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 600 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Table size",
                statement: "Fields x records.",
              },
            ],
            steps: [
              {
                reasoning: "5 fields x 120 records = 600 cells.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "600 cells",
          },
        },
        {
          id: "cieict-u1-db-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A query on 50 employee records returns 18 records. What percentage of records did the query return?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 36 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Query selectivity",
                statement: "Returned / total x 100.",
              },
            ],
            steps: [
              { reasoning: "18 / 50 x 100 = 36%.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "36%",
          },
        },
        {
          id: "cieict-u1-db-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An orders table holds 40 records. The shop takes 15 new orders. How many records are there now?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 55 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "INSERT", statement: "Adding records." },
            ],
            steps: [
              { reasoning: "40 + 15 = 55 records.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "55 records",
          },
        },
        {
          id: "cieict-u1-db-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A shop has 200 orders shared among 40 customers. What is the average number of orders per customer?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Aggregation",
                statement: "Total / groups.",
              },
            ],
            steps: [
              {
                reasoning: "200 / 40 = 5 orders per customer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5 orders",
          },
        },
        {
          id: "cieict-u1-db-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does every table in a well-designed database need a primary key?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary keys",
                statement: "Unique identification of records.",
              },
            ],
            steps: [
              {
                reasoning: "It uniquely identifies each record.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It prevents duplicate/confused records and enables relationships between tables.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Unique ID + integrity + relationships",
          },
        },
        {
          id: "cieict-u1-db-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a query for a 'products' table (name, price, stock) that lists products costing over 100, highest price first.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Query writing",
                statement: "Filter then sort descending.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SELECT name, price FROM products WHERE price > 100 ORDER BY price DESC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct table/fields and > condition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid ORDER BY descending syntax.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "SELECT...WHERE price>100 ORDER BY price DESC",
          },
        },
        {
          id: "cieict-u1-db-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between UPDATE and DELETE in a query?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "UPDATE modifies existing records; DELETE removes them",
              },
              { id: "b", text: "UPDATE adds rows; DELETE sorts them" },
              { id: "c", text: "They are identical" },
              { id: "d", text: "UPDATE deletes tables; DELETE updates fields" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data manipulation",
                statement: "Modify vs remove records.",
              },
            ],
            steps: [
              {
                reasoning: "UPDATE changes records; DELETE removes them.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Update modifies, delete removes",
          },
        },
        {
          id: "cieict-u1-db-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is a database better than a spreadsheet for large amounts of shared data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses fewer cells" },
              { id: "b", text: "It cannot be edited" },
              { id: "c", text: "It is always free" },
              {
                id: "d",
                text: "It supports multi-user access, data integrity and powerful queries",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Database advantages",
                statement: "Multi-user + integrity + queries.",
              },
            ],
            steps: [
              {
                reasoning: "Databases handle scale, sharing and integrity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multi-user access, integrity, queries",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieict-u1-db-notes",
      title: "Databases — notes",
      summary:
        "Tables=records×fields; PK=unique ID; queries=SELECT/WHERE/ORDER BY to extract data.",
      sections: [
        {
          heading: "Key idea",
          body: "Databases organise huge data for fast retrieval.",
        },
        {
          heading: "Queries",
          body: "WHERE filters, ORDER BY sorts, COUNT totals.",
        },
      ],
    },
  ],
};
