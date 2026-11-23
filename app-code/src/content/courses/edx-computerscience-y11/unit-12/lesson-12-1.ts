import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "ecs11-u12-lesson-12-1",
  code: "12-1",
  title: "The Relational Model and SQL Basics",
  goal: "I CAN explain tables, fields, records, keys and relationships, and use basic SQL statements.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Databases", "Relational database structure and SQL"],
  
  vocabulary: [
    { term: "Database", definition: "An organised collection of related data stored so it can be accessed and managed." },
    { term: "Table", definition: "A grid of rows and columns storing records about one entity." },
    { term: "Field", definition: "A column in a table representing one attribute of an entity." },
    { term: "Record", definition: "A row in a table representing one instance of an entity." },
    { term: "Primary key", definition: "A field that uniquely identifies each record in a table." },
    { term: "Foreign key", definition: "A field in one table that references the primary key of another table." },
    { term: "SQL", definition: "Structured Query Language used to create, query and manage relational databases." },
  ],
  concepts: [
    {
      id: "ecs11-u12-relational",
      title: "The Relational Model",
      skill: "Explain tables, fields, records, keys and relationships between tables.",
      lesson: {
        sections: [
          {
            heading: "Tables, fields and records",
            body: "A **relational database** organises data into **tables**, each describing one entity type (e.g. Students, Courses). A **field** (column) is an attribute such as StudentID or Name. A **record** (row) is one instance, e.g. one student.\n\nData is atomic: each field holds a single value. Field names are unique within a table, and every field has a **data type** such as text, integer or date.",
          },
          {
            heading: "Keys and relationships",
            body: "The **primary key** uniquely identifies each record — e.g. StudentID. A **foreign key** in one table links to the primary key of another, creating a **relationship**. A one-to-many relationship (one student enrols in many courses; one course has many students) is the most common.\n\nRelationships reduce duplication: student details are stored once in the Students table and referenced elsewhere by StudentID rather than copied into every table.",
          },
        ],
        keyFormulas: [
          { name: "Primary key", statement: "unique identifier for each record" },
          { name: "Foreign key", statement: "references a primary key in another table" },
          { name: "One-to-many", statement: "one record relates to many records" },
        ],
        workedExample: {
          problem: "A school database has Students(StudentID, Name) and Enrolments(StudentID, CourseCode). Explain how the tables are linked.",
          solution: "StudentID is the primary key of Students. The same StudentID appears as a foreign key in Enrolments, creating a one-to-many relationship: one student can enrol in many courses, and each enrolment refers to exactly one student.",
        },
      },
      questions: [
        {
          id: "ecs11-u12-relational-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which field uniquely identifies each record in a table?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Foreign key"
                    },
                    {
                              "id": "b",
                              "text": "Primary key"
                    },
                    {
                              "id": "c",
                              "text": "Index"
                    },
                    {
                              "id": "d",
                              "text": "Attribute"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary key",
                              "statement": "A field that uniquely identifies each record."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary key uniquely identifies records; foreign key links tables.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Primary key",
          "commonErrors": [
                    "Choosing foreign key, which links rather than identifies."
          ]
},
        },
        {
          id: "ecs11-u12-relational-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define the terms table, field, record and primary key.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Relational terms",
                              "statement": "Table = entity, field = attribute, record = instance, key = identifier."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Table stores data about one entity type.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Field is a column/attribute; record is a row/instance.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Primary key uniquely identifies each record.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Table=entity, field=attribute, record=instance, primary key=unique identifier.",
          "commonErrors": [
                    "Confusing fields with records."
          ]
},
        },
        {
          id: "ecs11-u12-relational-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A Students table has fields StudentID, Forename, Surname, TutorGroup. Explain why StudentID should be the primary key rather than Surname.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Primary key choice",
                              "statement": "A primary key must be unique and not change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "StudentID is unique for every student.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Surname is not unique — two students can share it.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "StudentID does not change and contains no personal data that could be corrected.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A non-unique key would break record identification and relationships.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "StudentID is unique and stable; Surname can repeat.",
          "commonErrors": [
                    "Saying any field can be a key."
          ]
},
        },
        {
          id: "ecs11-u12-relational-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how foreign keys reduce data duplication in a school database storing Students and Enrolments.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Data redundancy",
                              "statement": "Storing data once reduces inconsistency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Student details are stored once in the Students table.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Enrolments reference students only by StudentID.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Without this, name and address would repeat on every enrolment row.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A name change would need updating many copies.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Single storage keeps data consistent and saves space.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Foreign keys link to one copy of student data, avoiding repeated copies and update errors.",
          "commonErrors": [
                    "Describing duplication without explaining the fix."
          ]
},
        },
        {
          id: "ecs11-u12-relational-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Customers and Orders tables are linked by CustomerID.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the primary and foreign keys.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the relationship type and justify it.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Keys and relationships",
                              "statement": "Primary key identifies; foreign key links."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "CustomerID is the primary key of Customers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "CustomerID in Orders is a foreign key referencing Customers.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Orders may also have its own primary key, e.g. OrderID.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "One-to-many: one customer can place many orders.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each order belongs to exactly one customer.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Justified by CustomerID repeating across order records.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) CustomerID primary in Customers, foreign in Orders (b) one-to-many",
          "commonErrors": [
                    "Calling both keys primary keys."
          ]
},
        },
        {
          id: "ecs11-u12-relational-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A library database has Books(BookID, Title, AuthorID) and Authors(AuthorID, Name, Country).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify entities, attributes and keys in both tables.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain the relationship and why it is one-to-many.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two benefits of this design over storing author details inside Books.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Database design",
                              "statement": "Entities, keys and relationships organise data without duplication."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Entities: Books and Authors; attributes listed for each.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "BookID is primary key of Books; AuthorID primary key of Authors.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "AuthorID in Books is a foreign key.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Title, Name and Country are descriptive attributes.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "One author can write many books; each book has one author.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "AuthorID links each book to its author.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Many books may share the same AuthorID value.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Author details stored once — no repetition across books.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Updating an author's name changes one record only.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Consistency is maintained and storage space is saved.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) Books/Authors entities with keys (b) one-to-many via AuthorID (c) less duplication, easier updates",
          "commonErrors": [
                    "Missing the foreign key in part (a)."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u12-sql",
      title: "SQL Fundamentals",
      skill: "Use SELECT, WHERE, INSERT, UPDATE and DELETE to query and modify a database.",
      lesson: {
        sections: [
          {
            heading: "Retrieving data with SELECT",
            body: "`SELECT` retrieves data. `SELECT * FROM Students;` returns all fields of all records. `SELECT Name, TutorGroup FROM Students;` returns only named fields. `SELECT DISTINCT Town FROM Students;` removes duplicate values.\n\n`WHERE` filters rows: `SELECT * FROM Students WHERE TutorGroup = '10A';`. Conditions combine with `AND`, `OR` and `NOT`. `ORDER BY Name ASC` sorts results; `LIMIT`-style clauses restrict row counts in some systems.",
          },
          {
            heading: "Modifying data",
            body: "`INSERT INTO Students (StudentID, Name) VALUES (101, 'Ali');` adds a record. `UPDATE Students SET TutorGroup = '11B' WHERE StudentID = 101;` changes existing data — the WHERE clause is essential. `DELETE FROM Students WHERE StudentID = 101;` removes records.\n\n**Warning**: `UPDATE` or `DELETE` without `WHERE` changes or removes every row — always confirm the filter before executing.",
          },
        ],
        keyFormulas: [
          { name: "SELECT", statement: "SELECT fields FROM table WHERE condition ORDER BY field" },
          { name: "INSERT", statement: "INSERT INTO table (fields) VALUES (values)" },
          { name: "UPDATE", statement: "UPDATE table SET field = value WHERE condition" },
          { name: "DELETE", statement: "DELETE FROM table WHERE condition" },
        ],
        workedExample: {
          problem: "Write SQL to list the names of students in TutorGroup 10A, in alphabetical order.",
          solution: "SELECT Name FROM Students WHERE TutorGroup = '10A' ORDER BY Name ASC;",
        },
      },
      questions: [
        {
          id: "ecs11-u12-sql-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which SQL keyword retrieves data from a table?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "INSERT"
                    },
                    {
                              "id": "b",
                              "text": "UPDATE"
                    },
                    {
                              "id": "c",
                              "text": "DELETE"
                    },
                    {
                              "id": "d",
                              "text": "SELECT"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SELECT",
                              "statement": "Retrieves data from tables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SELECT queries; INSERT/UPDATE/DELETE modify data.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(d)** SELECT",
          "commonErrors": [
                    "Confusing SELECT with UPDATE."
          ]
},
        },
        {
          id: "ecs11-u12-sql-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write an SQL statement to display all records from a table named Products.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "SELECT *",
                              "statement": "SELECT * FROM table returns all fields and rows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Uses SELECT keyword to retrieve data.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "* selects all fields; FROM names the table.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Correct syntax: SELECT * FROM Products;",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "SELECT * FROM Products;",
          "commonErrors": [
                    "Missing semicolon or table name."
          ]
},
        },
        {
          id: "ecs11-u12-sql-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write SQL to select the Name and Price fields from a table Orders where Quantity is greater than 5, sorted by Price descending.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Filtered SELECT",
                              "statement": "Field list, WHERE filter and ORDER BY."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SELECT Name, Price names the required fields only.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "FROM Orders identifies the table.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "WHERE Quantity > 5 applies the filter.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "ORDER BY Price DESC sorts highest first.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "SELECT Name, Price FROM Orders WHERE Quantity > 5 ORDER BY Price DESC;",
          "commonErrors": [
                    "Using >= instead of >, or omitting DESC."
          ]
},
        },
        {
          id: "ecs11-u12-sql-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A teacher wants to add a new student and later change their tutor group.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "INSERT and UPDATE",
                              "statement": "INSERT adds rows; UPDATE modifies them with WHERE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "INSERT INTO Students (...) VALUES (...); adds the new record.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Field list and values must match in order and type.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "UPDATE Students SET TutorGroup = '12C' WHERE StudentID = ...;",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The WHERE clause targets only the intended student.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Without WHERE, every student's group would change.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "INSERT to add; UPDATE ... WHERE to change one record.",
          "commonErrors": [
                    "UPDATE without WHERE affecting all rows."
          ]
},
        },
        {
          id: "ecs11-u12-sql-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Given: SELECT * FROM Books WHERE Year > 2000 AND Genre = 'Sci-Fi' ORDER BY Title;",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what this query returns.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Rewrite it to return only Title and Author for books before 1990.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Interpreting SQL",
                              "statement": "Read clauses left to right: select, filter, sort."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Returns all fields of Books records.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Only rows with Year > 2000 AND Genre 'Sci-Fi'.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sorted alphabetically by Title.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "SELECT Title, Author FROM Books ...",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "WHERE Year < 1990 replaces the old filter.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Correct full statement with semicolon.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) all fields of post-2000 sci-fi books sorted by title (b) SELECT Title, Author FROM Books WHERE Year < 1990;",
          "commonErrors": [
                    "Keeping the old WHERE conditions."
          ]
},
        },
        {
          id: "ecs11-u12-sql-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Table Employees(EmployeeID, Name, Department, Salary).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write SQL to list Name and Salary for employees in 'Sales', highest salary first.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Write SQL to give every 'Support' employee a 5% pay rise (Salary × 1.05).",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain the danger of omitting WHERE in part (b) and how to verify safety.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "SQL query writing",
                              "statement": "Correct clause order and safe filtering."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "SELECT Name, Salary FROM Employees",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "WHERE Department = 'Sales'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "ORDER BY Salary DESC",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Correct punctuation and complete statement.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "UPDATE Employees SET Salary = Salary * 1.05",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "WHERE Department = 'Support'",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Complete statement with semicolon.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Without WHERE every employee's salary is multiplied.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Run a SELECT first to preview affected rows.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Backups or transactions allow recovery from mistakes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) SELECT Name, Salary FROM Employees WHERE Department = 'Sales' ORDER BY Salary DESC; (b) UPDATE Employees SET Salary = Salary * 1.05 WHERE Department = 'Support'; (c) WHERE prevents mass update; preview and backup",
          "commonErrors": [
                    "Writing Salary = 1.05 instead of Salary * 1.05."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u12-l1-notes",
      title: "Relational model and SQL — notes",
      summary: "Tables hold entities; fields hold attributes; records hold instances. Primary keys identify, foreign keys link. SQL SELECT queries; INSERT/UPDATE/DELETE modify — always use WHERE.",
      sections: [
        { heading: "Key idea", body: "Relational design stores each fact once and links tables with keys." },
        { heading: "SQL safety", body: "UPDATE and DELETE without WHERE affect every record — preview with SELECT first." },
      ],
    },
  ],
};
