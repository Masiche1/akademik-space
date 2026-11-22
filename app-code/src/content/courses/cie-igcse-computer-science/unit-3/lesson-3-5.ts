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
                              "text": "A password"
                    },
                    {
                              "id": "b",
                              "text": "Unique ID identifying each record"
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
          "correctChoiceId": "b"
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
        {
          id: "ciecs-u3-db-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a database table, what is a record?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of query" },
              { id: "b", text: "One complete row of data" },
              { id: "c", text: "A password" },
              { id: "d", text: "One column heading" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Record", statement: "One complete row in a table." },
            ],
            steps: [
              { reasoning: "A record stores all field values for one item.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** One complete row",
          },
        },
        {
          id: "ciecs-u3-db-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a database table, what is a field?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The whole database" },
              { id: "b", text: "A backup file" },
              { id: "c", text: "A single row" },
              { id: "d", text: "A column representing one attribute" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Field", statement: "One column/attribute in a table." },
            ],
            steps: [
              { reasoning: "A field stores the same type of data for every record.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** One column/attribute",
          },
        },
        {
          id: "ciecs-u3-db-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which SQL keyword is used to retrieve data from a table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "INSERT" },
              { id: "b", text: "SELECT" },
              { id: "c", text: "UPDATE" },
              { id: "d", text: "DELETE" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SELECT", statement: "Retrieves records from a table." },
            ],
            steps: [
              { reasoning: "SELECT queries return data matching the specified fields and conditions.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** SELECT",
          },
        },
        {
          id: "ciecs-u3-db-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the WHERE clause do in an SQL query?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It deletes the whole table" },
              { id: "b", text: "It sorts the results" },
              { id: "c", text: "It adds new records" },
              { id: "d", text: "It filters records using conditions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "WHERE", statement: "Filters rows by condition." },
            ],
            steps: [
              { reasoning: "WHERE limits returned records to those satisfying the condition.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Filters records",
          },
        },
        {
          id: "ciecs-u3-db-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does ORDER BY do in SQL?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It sorts the query results" },
              { id: "b", text: "It deletes duplicate records" },
              { id: "c", text: "It encrypts the table" },
              { id: "d", text: "It creates a primary key" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ORDER BY", statement: "Sorts query output." },
            ],
            steps: [
              { reasoning: "ORDER BY arranges returned records by the chosen field.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Sorts results",
          },
        },
        {
          id: "ciecs-u3-db-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should each record have a unique primary key?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes every field a number" },
              { id: "b", text: "It encrypts all data automatically" },
              { id: "c", text: "It identifies the record and supports relationships between tables" },
              { id: "d", text: "It removes the need for queries" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Primary key purpose", statement: "Unique ID supports identification and relationships." },
            ],
            steps: [
              { reasoning: "Primary keys uniquely identify records and link related tables.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Unique identification and relationships",
          },
        },
        {
          id: "ciecs-u3-db-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A database table has $5$ fields and $8$ records. How many individual field values are stored in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 40 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Table size", statement: "Total values = fields × records." },
            ],
            steps: [
              { reasoning: "5 * 8 = 40 field values.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "40",
          },
        },
        {
          id: "ciecs-u3-db-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The query SELECT name, grade FROM students returns how many fields per record?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "SELECT fields", statement: "Count the fields listed after SELECT." },
            ],
            steps: [
              { reasoning: "Two fields are selected: name and grade.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciecs-u3-db-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A students table has $30$ records. A query for year 10 returns $12$ records. (a) How many records match the query? (b) How many records do not match?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 18 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Query result count", statement: "Non-matching = total - matching." },
            ],
            steps: [
              { reasoning: "The query returns 12 records.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Non-matching = 30 - 12 = 18.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 12; (b) 18",
          },
        },
        {
          id: "ciecs-u3-db-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A library books table has $6$ fields and $25$ records. (a) How many field values are stored in the whole table? (b) How many field values would a query selecting $3$ fields for all records return?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 150 },
              { label: "b", answer: 75 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Query projection", statement: "Returned values = selected fields × matching records." },
            ],
            steps: [
              { reasoning: "Whole table = 6 * 25 = 150 values.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Selected values = 3 * 25 = 75.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 150; (b) 75",
          },
        },
        {
          id: "ciecs-u3-db-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A students table has $40$ records: $15$ in year 10, $20$ in year 11 and $5$ in year 12. (a) How many students are in years 10 or 11? (b) How many are not in year 12? (c) What percentage of students are in year 12?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 35 },
              { label: "b", answer: 35 },
              { label: "c", answer: 12.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Database aggregation", statement: "Combine counts and percentages from table data." },
            ],
            steps: [
              { reasoning: "Years 10 and 11 = 15 + 20 = 35 students.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Not year 12 = 40 - 5 = 35 students.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Year 12 percentage = 5 / 40 * 100 = 12.5%.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 35; (b) 35; (c) 12.5",
          },
        },
        {
          id: "ciecs-u3-db-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a two-table database for a school library with books and borrowers. Name key fields, explain the relationship, and write one SQL query to find books borrowed by a named student.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Database design", statement: "Relational tables link through keys; SQL retrieves joined data." },
            ],
            steps: [
              { reasoning: "Valid book fields such as book_id, title, author and a borrower table with borrower_id are designed.", marks: 1, markCode: "M" },
              { reasoning: "Primary keys and a foreign key relationship are identified.", marks: 1, markCode: "M" },
              { reasoning: "The relationship (one borrower can borrow many books) is explained.", marks: 1, markCode: "M" },
              { reasoning: "A valid SQL query using SELECT, FROM, WHERE and appropriate conditions is written.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two related tables plus valid SQL query",
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
