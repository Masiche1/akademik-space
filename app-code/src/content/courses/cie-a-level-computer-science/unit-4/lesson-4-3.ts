import type { Lesson } from "../../../types.ts";

export const lesson153: Lesson = {
  id: "ciealc-u4-lesson-4-3",
  code: "4-3",
  title: "Databases and SQL",
  goal: "I CAN design relational databases and write SQL queries.",
  standards: ["Cambridge A Level Computer Science 9618: databases", "9618: SQL"],
  
  vocabulary: [
    { term: "Database", definition: "Organised collection of related data." },
    { term: "Table", definition: "Data organised in rows and columns." },
    { term: "Record", definition: "Single row of data." },
    { term: "Field", definition: "Single column of data." },
    { term: "Primary key", definition: "Unique identifier for each record." },
    { term: "Foreign key", definition: "Links to primary key in another table." },
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
          problem: "Write SQL to find all students with grade 'A' in table 'students'.",
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
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unique identifier for each record"
                    },
                    {
                              "id": "b",
                              "text": "A type of table"
                    },
                    {
                              "id": "c",
                              "text": "A SQL command"
                    },
                    {
                              "id": "d",
                              "text": "A network protocol"
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
                              "reasoning": "Primary key uniquely identifies each record.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Unique record identifier"
},
        },
        {
          id: "ciealc-u4-db-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a foreign key?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Foreign key",
                              "statement": "Links tables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Foreign key links to primary key in another table.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Enables table relationships.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Links between tables"
},
        },
        {
          id: "ciealc-u4-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write SQL to select all fields from table 'students' where age > 18.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "SQL SELECT",
                              "statement": "Query syntax."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SELECT * FROM students WHERE age > 18.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Correct syntax.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid SQL statement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "SELECT * FROM students WHERE age > 18"
},
        },
        {
          id: "ciealc-u4-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define database, table, record, field, primary key, foreign key, SQL, normalisation. (b) What is a record? (c) What is a field? (d) What is a primary key? (e) Write SQL to insert a record. (f) Write SQL to update a record. (g) Write SQL to join two tables. (h) Design a database for a library with books and members.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Databases",
                              "statement": "Design, keys, SQL."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All eight definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Single row of data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Single column of data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Unique record identifier.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid INSERT statement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid UPDATE statement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid JOIN query.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid library database design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Database design and SQL."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-db-notes",
      title: "Databases — notes",
      summary: "Tables=records+fields; primary key=unique ID; foreign key=links tables. SQL=SELECT/INSERT/UPDATE/DELETE/JOIN.",
      sections: [
        { heading: "Key idea", body: "Normalisation reduces redundancy — design tables carefully." },
        { heading: "SQL", body: "SELECT retrieves, INSERT adds, UPDATE modifies, DELETE removes, JOIN combines." },
      ],
    },
  ],
};
