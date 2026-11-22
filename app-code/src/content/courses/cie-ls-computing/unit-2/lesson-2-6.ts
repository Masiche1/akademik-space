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
                              "text": "A type of query"
                    },
                    {
                              "id": "c",
                              "text": "A password"
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
        {
          id: "cils-c-u2-db-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a database table, what is a 'record'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of query"
                    },
                    {
                              "id": "b",
                              "text": "One complete row of data"
                    },
                    {
                              "id": "c",
                              "text": "The table name"
                    },
                    {
                              "id": "d",
                              "text": "One column of data"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Record",
                              "statement": "One complete row."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Records are rows; fields are columns.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "One complete row"
},
        },
        {
          id: "cils-c-u2-db-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A table has 4 fields and 3 records. How many individual data values does it contain?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Table structure",
                              "statement": "fields × records."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 × 3 = 12 values.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12"
},
        },
        {
          id: "cils-c-u2-db-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A students table has 30 records. A query filtering grade 'A' returns 12 records. How many records does the query return?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 12 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Queries",
                              "statement": "WHERE filters records."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Query returns only matching records: 12.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "12"
},
        },
        {
          id: "cils-c-u2-db-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a query for a books(id, title, genre, available) table that returns titles of available fiction books, sorted by title.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Queries",
                              "statement": "SELECT...WHERE...ORDER BY."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SELECT title FROM books",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WHERE genre = 'fiction' AND available = true",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ORDER BY title.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "SELECT title FROM books WHERE genre='fiction' AND available=true ORDER BY title"
},
        },
        {
          id: "cils-c-u2-db-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the WHERE clause in a query do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sorts the results"
                    },
                    {
                              "id": "b",
                              "text": "Counts the records"
                    },
                    {
                              "id": "c",
                              "text": "Deletes the table"
                    },
                    {
                              "id": "d",
                              "text": "Filters which records are returned"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "WHERE",
                              "statement": "Filtering condition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WHERE selects only records meeting the condition.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Filters records"
},
        },
        {
          id: "cils-c-u2-db-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A database table has 5 fields and 100 records. How many individual data values does it hold?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 500 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Table structure",
                              "statement": "fields × records."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "5 × 100 = 500.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "500"
},
        },
        {
          id: "cils-c-u2-db-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why does each record need a primary key?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To encrypt the data"
                    },
                    {
                              "id": "b",
                              "text": "To sort the records"
                    },
                    {
                              "id": "c",
                              "text": "To make queries faster always"
                    },
                    {
                              "id": "d",
                              "text": "To uniquely identify each record and link tables"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary key",
                              "statement": "Unique ID per record."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary keys give unique IDs and enable relationships.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Unique identification"
},
        },
        {
          id: "cils-c-u2-db-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define database, table, record, field, query, primary key. (b) Design a 'team members' table with 5 fields and give a data type for each. (c) Write a query returning names of members who joined after 2021. (d) What is a relationship between two tables? (e) Why shouldn't two records share the same primary key?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Databases",
                              "statement": "Tables, queries, keys."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid 5-field table with types e.g. id(number), name(text), joined(date), role(text), active(Boolean).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) SELECT name FROM members WHERE joined > '2021-12-31'.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Links tables via primary/foreign keys, e.g. one member many loans.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Primary key must be unique — duplicates break identification.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Database design and queries."
},
        },
        {
          id: "cils-c-u2-db-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'field' in a database table?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of key"
                    },
                    {
                              "id": "b",
                              "text": "One complete row"
                    },
                    {
                              "id": "c",
                              "text": "The whole table"
                    },
                    {
                              "id": "d",
                              "text": "One column — a specific data attribute"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Field",
                              "statement": "One column/attribute."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fields are columns like 'name' or 'grade'.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "One column"
},
        },
        {
          id: "cils-c-u2-db-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A table has 3 fields and 8 records. How many individual data values does it hold?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 24 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Table structure",
                              "statement": "fields × records."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "3 × 8 = 24.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "24"
},
        },
        {
          id: "cils-c-u2-db-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does ORDER BY do in a query?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Adds new records"
                    },
                    {
                              "id": "b",
                              "text": "Filters the records"
                    },
                    {
                              "id": "c",
                              "text": "Sorts the results by a field"
                    },
                    {
                              "id": "d",
                              "text": "Counts the records"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ORDER BY",
                              "statement": "Sorts query results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ORDER BY arranges returned records.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sorts results"
},
        },
        {
          id: "cils-c-u2-db-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define database, record, field, query, primary key, foreign key. (b) Design a 2-table school library: books and loans. (c) Write a query listing all books on loan. (d) How does the loans table link to books? (e) What does COUNT do in a query? (f) Why is a database better than a spreadsheet for a large school?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Databases",
                              "statement": "Tables, relationships, queries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) books(id,title,author) + loans(id,book_id,member_id,date) linked by keys.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) SELECT * FROM loans — or joined query.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Foreign key book_id references books.id.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Returns number of matching records.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Handles huge data, relationships, integrity, multi-user access.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Database design, relationships, queries."
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
