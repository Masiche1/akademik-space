import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "cils-c-u2-lesson-2-6",
  code: "2-6",
  title: "Stage 9 — Databases and Queries",
  goal: "I CAN design database tables and write queries to retrieve specific data.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 9: managing data", "Cambridge Lower Secondary Computing 0860 strand: Managing data"],
  stage: 9,
  vocabulary: [
    { term: "Database", definition: "Organised collection of related data in tables." },
    { term: "Table", definition: "Grid of records (rows) and fields (columns)." },
    { term: "Record", definition: "One complete row of data." },
    { term: "Field", definition: "One column — a specific data attribute." },
    { term: "Query", definition: "Request retrieving specific records." },
    { term: "Primary key", definition: "Unique ID identifying each record." },
  ],
  concepts: [
    {
      id: "cils-c-u2-s6-db",
      title: "Databases and queries",
      skill: "Design tables and query data at Stage 9 level.",
      lesson: {
        sections: [
          {
            heading: "Database structure",
            body: "Tables hold records (rows) and fields (columns). Each record has a primary key — unique ID. Fields have data types (text, number, date). Relationships link tables — one student has many book loans.",
          },
          {
            heading: "Queries",
            body: "Queries ask questions: SELECT * FROM books WHERE genre='fiction'. Filtering (WHERE), sorting (ORDER BY), counting (COUNT). Queries let you extract exactly the data needed from millions of records.",
          },
        ],
        keyFormulas: [
          { name: "Table", statement: "records × fields" },
          { name: "Query", statement: "SELECT...FROM...WHERE" },
          { name: "Primary key", statement: "unique record ID" },
        ],
        workedExample: {
          problem: "Library DB: books(id, title, genre, available). Write query for available fiction books.",
          solution: "SELECT title FROM books WHERE genre='fiction' AND available=true ORDER BY title.",
        },
      },
      questions: [
        {
          id: "cils-c-u2-db-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary key?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unique ID identifying each record"
                    },
                    {
                              "id": "b",
                              "text": "A password"
                    },
                    {
                              "id": "c",
                              "text": "A type of query"
                    },
                    {
                              "id": "d",
                              "text": "A table column"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary key",
                              "statement": "Unique record ID."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "PK uniquely identifies each row.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Unique record identifier"
},
        },
        {
          id: "cils-c-u2-db-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a record and a field?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Record vs field",
                              "statement": "Row vs column."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Record = one complete row.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Field = one column/attribute.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Row vs column"
},
        },
        {
          id: "cils-c-u2-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a query: students(id, name, year, grade). Find all Year 10 students with grade A.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Queries",
                              "statement": "SELECT...WHERE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SELECT name FROM students WHERE year=10 AND grade='A'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct table and conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid SQL-like syntax.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "SELECT...WHERE year=10 AND grade='A'"
},
        },
        {
          id: "cils-c-u2-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define database, table, record, field, query, primary key. (b) Design a 'club members' table with 5 fields. (c) What type for each field? (d) Write query for members who joined after 2020. (e) What is a relationship between tables? (f) Why use primary keys? (g) What does ORDER BY do? (h) Design a 2-table library system (books + loans).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Databases",
                              "statement": "Tables, queries, relationships."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid table with 5 fields.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Appropriate data types.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid date query.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Links between tables via keys.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Unique identification, relationships.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Sorts results.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid 2-table design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Database design and querying."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u2-db-notes",
      title: "Databases — notes",
      summary: "Tables=records×fields. Primary key=unique ID. Queries=SELECT...WHERE to extract data.",
      sections: [
        { heading: "Key idea", body: "Databases organise huge data for fast retrieval." },
        { heading: "Queries", body: "WHERE filters, ORDER BY sorts, COUNT totals." },
      ],
    },
  ],
};
