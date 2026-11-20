import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "cieict-u1-lesson-1-3",
  code: "1-3",
  title: "Databases and Queries",
  goal: "I CAN design database tables and write queries to retrieve and manipulate data.",
  standards: ["Cambridge IGCSE ICT 0417: databases", "0417 section 4: databases"],
  
  vocabulary: [
    { term: "Database", definition: "Organised collection of related data." },
    { term: "Table", definition: "Grid of records (rows) and fields (columns)." },
    { term: "Record", definition: "One complete row of data." },
    { term: "Field", definition: "One column — a specific attribute." },
    { term: "Query", definition: "Request retrieving/manipulating specific records." },
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
          problem: "Library DB: books(id, title, genre, available). Find available fiction books sorted by title.",
          solution: "SELECT title FROM books WHERE genre='fiction' AND available=true ORDER BY title.",
        },
      },
      questions: [
        {
          id: "cieict-u1-db-q1",
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
          id: "cieict-u1-db-q2",
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
          id: "cieict-u1-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a query: employees(id, name, dept, salary). Find employees in 'Sales' earning over 50000.",
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
                              "reasoning": "SELECT name FROM employees WHERE dept='Sales' AND salary>50000.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid query syntax.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "SELECT...WHERE dept='Sales' AND salary>50000"
},
        },
        {
          id: "cieict-u1-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define database, table, record, field, primary key, query. (b) Design a 'club members' table with 5 fields. (c) What type for each field? (d) Write query for members who joined after 2020. (e) What is a relationship between tables? (f) Why use primary keys? (g) What does ORDER BY do? (h) Design a 2-table school system (students + courses).",
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
      id: "cieict-u1-db-notes",
      title: "Databases — notes",
      summary: "Tables=records×fields; PK=unique ID; queries=SELECT/WHERE/ORDER BY to extract data.",
      sections: [
        { heading: "Key idea", body: "Databases organise huge data for fast retrieval." },
        { heading: "Queries", body: "WHERE filters, ORDER BY sorts, COUNT totals." },
      ],
    },
  ],
};
