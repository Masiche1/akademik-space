import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "ecs11-u12-lesson-12-3",
  code: "12-3",
  title: "Advanced Queries, Transactions and Security",
  goal: "I CAN use joins, grouping and aggregates, explain transactions and apply database security measures.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Database queries and security", "SQL joins, aggregation, transactions and access control"],
  
  vocabulary: [
    { term: "Join", definition: "An SQL operation combining rows from two tables using a related key." },
    { term: "Aggregate function", definition: "A function summarising many rows, e.g. COUNT, SUM, AVG, MAX, MIN." },
    { term: "GROUP BY", definition: "SQL clause grouping rows so aggregates are calculated per group." },
    { term: "Transaction", definition: "A logical unit of database work that must complete fully or not at all." },
    { term: "ACID", definition: "Properties ensuring transactions are Atomic, Consistent, Isolated and Durable." },
    { term: "Access control", definition: "Restricting which users can view or change which data." },
  ],
  concepts: [
    {
      id: "ecs11-u12-advancedsql",
      title: "Joins, Grouping and Aggregates",
      skill: "Combine tables with joins and summarise data with GROUP BY and aggregate functions.",
      lesson: {
        sections: [
          {
            heading: "Joining tables",
            body: "A **join** combines rows from two tables where a related key matches. `SELECT * FROM Students JOIN Enrolments ON Students.StudentID = Enrolments.StudentID;` lists each student with their enrolments.\n\nAn **inner join** returns only matching rows; a **left join** keeps all rows from the first table even without a match. Joins let you answer questions spanning multiple tables without duplicating data.",
          },
          {
            heading: "Aggregates and GROUP BY",
            body: "Aggregate functions summarise: `COUNT(*)` counts rows, `SUM(field)` totals values, `AVG(field)` averages, `MAX`/`MIN` find extremes. `GROUP BY field` applies aggregates per group: `SELECT Department, COUNT(*) FROM Employees GROUP BY Department;` gives headcounts per department.\n\n`HAVING` filters groups after aggregation, e.g. departments with more than 5 staff — WHERE cannot be used on aggregates.",
          },
        ],
        keyFormulas: [
          { name: "Join", statement: "JOIN ... ON table1.key = table2.key" },
          { name: "Aggregates", statement: "COUNT, SUM, AVG, MAX, MIN" },
          { name: "GROUP BY", statement: "one result row per group value" },
        ],
        workedExample: {
          problem: "List each department and the average salary of its employees.",
          solution: "SELECT Department, AVG(Salary) FROM Employees GROUP BY Department;",
        },
      },
      questions: [
        {
          id: "ecs11-u12-advancedsql-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does an SQL JOIN do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Deletes duplicate rows"
                    },
                    {
                              "id": "b",
                              "text": "Combines rows from two tables on a matching key"
                    },
                    {
                              "id": "c",
                              "text": "Sorts a table alphabetically"
                    },
                    {
                              "id": "d",
                              "text": "Encrypts stored data"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Join",
                              "statement": "Combines rows from tables on related keys."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "JOIN merges tables via ON key equality.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Combines rows from two tables on a matching key",
          "commonErrors": [
                    "Thinking JOIN sorts or deletes."
          ]
},
        },
        {
          id: "ecs11-u12-advancedsql-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name the five common aggregate functions and what each returns.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aggregate functions",
                              "statement": "COUNT, SUM, AVG, MAX, MIN summarise rows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "COUNT counts rows; SUM totals numeric values.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "AVG averages; MAX and MIN find extremes.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "All five named correctly.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "COUNT, SUM, AVG, MAX, MIN.",
          "commonErrors": [
                    "Omitting AVG or confusing SUM with COUNT."
          ]
},
        },
        {
          id: "ecs11-u12-advancedsql-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between WHERE and HAVING in an SQL query that uses GROUP BY.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "WHERE vs HAVING",
                              "statement": "WHERE filters rows before grouping; HAVING filters groups after aggregation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WHERE filters individual rows before grouping.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "HAVING filters the aggregated group results.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: WHERE Salary > 20000 keeps rows; HAVING COUNT(*) > 5 keeps big groups.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Aggregates cannot appear in WHERE, only in HAVING.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "WHERE filters rows pre-grouping; HAVING filters groups post-aggregation.",
          "commonErrors": [
                    "Using WHERE with an aggregate function."
          ]
},
        },
        {
          id: "ecs11-u12-advancedsql-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write SQL to show each customer's name and total order value, for customers who spent over 500, highest total first.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Grouped join query",
                              "statement": "JOIN + GROUP BY + HAVING + ORDER BY."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Join Customers and Orders on CustomerID.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "GROUP BY customer with SUM of order values.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "HAVING SUM(...) > 500 filters groups.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "ORDER BY the total DESC for ranking.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Complete syntactically valid statement.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "SELECT Name, SUM(Total) FROM Customers JOIN Orders ON ... GROUP BY Name HAVING SUM(Total) > 500 ORDER BY SUM(Total) DESC;",
          "commonErrors": [
                    "Using WHERE instead of HAVING for the aggregate filter."
          ]
},
        },
        {
          id: "ecs11-u12-advancedsql-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Tables: Authors(AuthorID, Name), Books(BookID, AuthorID, Title).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write a join query listing each author's name with their book titles.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what an INNER JOIN returns here and what happens to an author with no books.",
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
                              "name": "JOIN usage",
                              "statement": "ON matches related keys; inner join needs a match."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "SELECT Authors.Name, Books.Title ...",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "FROM Authors JOIN Books ON Authors.AuthorID = Books.AuthorID",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Complete valid statement.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "INNER JOIN returns only rows with matching AuthorID.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each result row pairs an author with one of their books.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "An author with no books produces no rows — LEFT JOIN would keep them.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) SELECT Name, Title FROM Authors JOIN Books ON Authors.AuthorID = Books.AuthorID; (b) only matched pairs; bookless authors excluded",
          "commonErrors": [
                    "Joining on non-key fields."
          ]
},
        },
        {
          id: "ecs11-u12-advancedsql-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Tables: Students(StudentID, Name, YearGroup), Grades(StudentID, Subject, Score).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Write SQL to find the average score per subject.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write SQL to list students (name, year group) with their average score, only for averages above 60.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why GROUP BY is needed in both queries.",
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
                              "name": "Aggregation queries",
                              "statement": "GROUP BY defines aggregation units; HAVING filters them."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "SELECT Subject, AVG(Score) FROM Grades",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "GROUP BY Subject",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Complete valid statement.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Join Students to Grades on StudentID.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Select Name, YearGroup, AVG(Score).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "GROUP BY StudentID (and name fields).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "HAVING AVG(Score) > 60.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Without GROUP BY, AVG collapses all rows into one value.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "GROUP BY Subject gives one average per subject.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "GROUP BY student gives one average per student for the filter.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) SELECT Subject, AVG(Score) FROM Grades GROUP BY Subject; (b) join + GROUP BY student + HAVING AVG > 60 (c) GROUP BY sets aggregation units",
          "commonErrors": [
                    "Filtering average with WHERE instead of HAVING."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u12-integrity",
      title: "Transactions, Integrity and Security",
      skill: "Explain transactions and ACID, enforce integrity and protect database data.",
      lesson: {
        sections: [
          {
            heading: "Transactions and ACID",
            body: "A **transaction** is a set of operations treated as one unit — e.g. transferring money debits one account and credits another. **ACID** guarantees correctness: **Atomic** (all or nothing), **Consistent** (valid state before and after), **Isolated** (concurrent transactions don't interfere), **Durable** (committed changes survive crashes).\n\n`BEGIN`, `COMMIT` and `ROLLBACK` control transactions: ROLLBACK undoes partial work if a step fails.",
          },
          {
            heading: "Integrity and security",
            body: "**Integrity** keeps data correct: validation rules, data types, **constraints** (NOT NULL, UNIQUE, CHECK, foreign key rules), and referential integrity so foreign keys always point to real records.\n\n**Security** protects data via access control (users see only what they need), authentication, encryption of sensitive fields, regular **backups**, and audit logs. Data protection laws (e.g. GDPR) require lawful, secure handling of personal data.",
          },
        ],
        keyFormulas: [
          { name: "ACID", statement: "Atomic, Consistent, Isolated, Durable" },
          { name: "Transaction", statement: "all steps succeed or all are rolled back" },
          { name: "Referential integrity", statement: "foreign keys always reference existing records" },
        ],
        workedExample: {
          problem: "A bank transfer debits Account A then crashes before crediting Account B. How does ACID help?",
          solution: "The transfer is one atomic transaction. On failure the system rolls back, restoring Account A's balance — money is never lost or created.",
        },
      },
      questions: [
        {
          id: "ecs11-u12-integrity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does ACID stand for in database transactions?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Atomic, Consistent, Isolated, Durable"
                    },
                    {
                              "id": "b",
                              "text": "Automatic, Copied, Indexed, Deleted"
                    },
                    {
                              "id": "c",
                              "text": "Access, Control, Integrity, Data"
                    },
                    {
                              "id": "d",
                              "text": "Analyse, Create, Insert, Drop"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ACID",
                              "statement": "Atomic, Consistent, Isolated, Durable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ACID = Atomic, Consistent, Isolated, Durable.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Atomic, Consistent, Isolated, Durable",
          "commonErrors": [
                    "Guessing other expansions."
          ]
},
        },
        {
          id: "ecs11-u12-integrity-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define transaction and referential integrity.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transaction and integrity",
                              "statement": "All-or-nothing work unit; foreign keys must reference real records."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Transaction = set of operations treated as one unit.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It must complete fully or be rolled back.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Referential integrity = foreign keys always point to existing primary keys.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Transaction=atomic unit of work; referential integrity=valid foreign key references.",
          "commonErrors": [
                    "Omitting the rollback behaviour."
          ]
},
        },
        {
          id: "ecs11-u12-integrity-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two database constraints that protect data integrity, with an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Constraints",
                              "statement": "Rules enforced by the DBMS to keep data valid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "NOT NULL stops empty required fields, e.g. Name cannot be blank.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "UNIQUE stops duplicate values, e.g. email used once.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "CHECK limits ranges, e.g. Age between 0 and 120.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Foreign key constraint enforces valid references.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "NOT NULL, UNIQUE, CHECK, foreign key constraints with examples.",
          "commonErrors": [
                    "Naming constraints without explaining their effect."
          ]
},
        },
        {
          id: "ecs11-u12-integrity-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An online shop processes orders: check stock, reserve items, take payment, update stock. Explain why this should be a single transaction.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Atomicity in practice",
                              "statement": "Partial order processing corrupts business data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If payment fails after stock is reserved, items are stuck.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "If stock updates but payment fails, inventory is wrong.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Atomicity means all steps succeed or none do.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "ROLLBACK restores the pre-order state on failure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Customers never pay for unreserved stock or lose stock without payment.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "One transaction ensures order steps are all-or-nothing, preventing inconsistent states.",
          "commonErrors": [
                    "Treating each step as independent."
          ]
},
        },
        {
          id: "ecs11-u12-integrity-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A hospital database stores patient records.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two integrity measures and two security measures.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why access control should be role-based here.",
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
                              "name": "Data protection",
                              "statement": "Integrity keeps data correct; access control limits exposure."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Integrity: validation rules and foreign key constraints.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Integrity: transactions for appointments/billing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Security: access control, encryption, backups.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Doctors need full records; receptionists need limited fields.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Least privilege reduces breach impact.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Audit logs trace who accessed which records.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) integrity constraints + transactions; access control, encryption, backups (b) least privilege per role",
          "commonErrors": [
                    "Giving only security or only integrity measures."
          ]
},
        },
        {
          id: "ecs11-u12-integrity-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school results database must be accurate and private.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Design three integrity rules and justify each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Design an access-control policy for students, teachers and admins.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain the role of backups and one legal obligation for student data.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Database governance",
                              "statement": "Integrity rules + least-privilege access + recovery + law."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Scores CHECK between 0 and 100 — valid range.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "StudentID NOT NULL/foreign key — every grade belongs to a real student.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "UNIQUE on (StudentID, Subject) — one grade per subject.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Justifications link each rule to a data-quality risk.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Students see only their own results.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Teachers enter/edit marks for their classes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Admins manage accounts and can correct errors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Least privilege limits who can change published results.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Backups allow recovery from corruption or attack.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Data protection law requires lawful, secure handling of personal data.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) CHECK range, FK, UNIQUE constraints (b) per-role least privilege (c) backups for recovery; GDPR-style legal duty",
          "commonErrors": [
                    "Letting students edit their own grades."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u12-l3-notes",
      title: "Advanced queries, transactions and security — notes",
      summary: "JOIN combines tables; GROUP BY + aggregates summarise; HAVING filters groups. Transactions are ACID; integrity via constraints; security via access control, encryption, backups.",
      sections: [
        { heading: "Key idea", body: "Queries extract insight; transactions and controls keep the data trustworthy." },
        { heading: "Safety", body: "Preview UPDATE/DELETE with SELECT; wrap multi-step changes in transactions." },
      ],
    },
  ],
};
