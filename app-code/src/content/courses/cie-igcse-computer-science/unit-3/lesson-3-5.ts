import type { Lesson } from "../../../types.ts";

export const lesson75: Lesson = {
  id: "ciecs-u3-lesson-3-5",
  code: "3-5",
  title: "Databases and SQL",
  goal: "I CAN design database tables and write SQL queries to retrieve specific data.",
  standards: ["Cambridge IGCSE Computer Science 0478: databases", "0478 section 9: databases"],
  
  vocabulary: [
    { term: "Database", definition: "Organised collection of related data in tables." },
    { term: "Table", definition: "Grid of records (rows) and fields (columns)." },
    { term: "Record", definition: "One complete row of data." },
    { term: "Field", definition: "One column — a specific data attribute." },
    { term: "Primary key", definition: "Unique ID identifying each record." },
    { term: "Query", definition: "Request retrieving specific records." },
  ],
  concepts: [
    {
      id: "ciecs-u3-s5-db",
      title: "Databases and SQL",
      skill: "Design tables and query data at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Database structure",
            body: "Tables hold records (rows) and fields (columns). Each record has a primary key — unique ID. Fields have data types (text, number, date). Relationships link tables — one student has many book loans.",
          },
          {
            heading: "SQL queries",
            body: "SELECT retrieves data: SELECT * FROM students WHERE year=10. ORDER BY sorts, COUNT counts, INSERT adds, UPDATE modifies, DELETE removes. Queries extract exactly the data needed.",
          },
        ],
        keyFormulas: [
          { name: "Table", statement: "records × fields" },
          { name: "SELECT", statement: "retrieve data" },
          { name: "WHERE", statement: "filter conditions" },
        ],
        workedExample: {
          problem: "Students(id, name, year, grade). Find all Year 11 students with grade A*.",
          solution: "SELECT name FROM students WHERE year=11 AND grade='A*' ORDER BY name.",
        },
      },
      questions: [
        {
          id: "ciecs-u3-db-q1",
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
          id: "ciecs-u3-db-q2",
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
          id: "ciecs-u3-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a query: products(id, name, price, stock). Find products costing over $50 with stock > 10.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "SQL queries",
                              "statement": "SELECT...WHERE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SELECT name FROM products WHERE price>50 AND stock>10.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct conditions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid SQL syntax.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "SELECT...WHERE price>50 AND stock>10"
},
        },
        {
          id: "ciecs-u3-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define database, table, record, field, primary key, query. (b) Design a 'library books' table with 5 fields. (c) What type for each field? (d) Write query for books published after 2020. (e) What is a relationship between tables? (f) Why use primary keys? (g) What does ORDER BY do? (h) Design a 2-table school system (students + courses).",
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
          "finalAnswer": "Database design and SQL querying."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u3-db-notes",
      title: "Databases — notes",
      summary: "Tables=records×fields; PK=unique ID; SQL=SELECT/INSERT/UPDATE/DELETE/WHERE/ORDER BY.",
      sections: [
        { heading: "Key idea", body: "Databases organise huge data for fast retrieval." },
        { heading: "SQL", body: "Queries let you extract exactly what you need." },
      ],
    },
  ],
};
