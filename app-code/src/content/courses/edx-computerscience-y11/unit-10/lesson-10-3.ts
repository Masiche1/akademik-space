import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "ecs11-u10-lesson-10-3",
  code: "10-3",
  title: "Database Design",
  goal: "I CAN apply normalisation and design principles to reduce redundancy and protect data.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Databases", "4CP1: database design, normalisation, security and integrity"],
  
  vocabulary: [
    { term: "Normalisation", definition: "Organising tables to minimise redundancy and data anomalies." },
    { term: "1NF", definition: "First normal form — each field contains atomic (single) values only." },
    { term: "2NF", definition: "Second normal form — 1NF plus no partial dependency on part of a composite key." },
    { term: "3NF", definition: "Third normal form — 2NF plus no transitive dependency between non-key fields." },
    { term: "Atomic value", definition: "A single, indivisible value in a field — no lists or repeating groups." },
    { term: "Transitive dependency", definition: "When a non-key field depends on another non-key field rather than the key." },
    { term: "Data anomaly", definition: "Inconsistency caused by inserting, updating or deleting data in a redundant design." },
  ],
  concepts: [
    {
      id: "ecs11-u10-db-norm",
      title: "Normalisation",
      skill: "Normalise tables to 1NF, 2NF and 3NF at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Why normalise?",
            body: "Normalisation organises data to minimise redundancy and the anomalies it causes. 1NF (first normal form): each field contains atomic values — no lists, repeating groups or multiple facts in one cell. 2NF: satisfies 1NF and every non-key field depends on the whole primary key — no partial dependency, which matters when the key is a combination of fields. 3NF: satisfies 2NF and no non-key field depends on another non-key field — there is no transitive dependency.",
          },
          {
            heading: "Example walkthrough",
            body: "An unnormalised Orders table might hold OrderID, CustomerName, CustomerCity, Product, Qty — customer details repeated on every order (an update anomaly risk) and possibly several products crammed into one field (violating 1NF).\n\nThe normalised design splits entities: Customers(CustomerID, Name, City) and Orders(OrderID, CustomerID, Product, Qty). Each table has one purpose and they link through keys, so each fact is stored once.",
          },
        ],
        keyFormulas: [
          { name: "1NF", statement: "Atomic values only — one fact per field" },
          { name: "2NF", statement: "No partial dependency on part of a composite key" },
          { name: "3NF", statement: "No transitive dependency between non-key fields" },
        ],
        workedExample: {
          problem: "A field contains 'Maths, Physics, Chemistry'. Which normal form does this violate and how is it fixed?",
          solution: "It violates 1NF because the value is not atomic. Fix: store each subject in a separate row, or in a linked Subjects table with a foreign key.",
        },
      },
      questions: [
        {
          id: "ecs11-u10-nf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does first normal form (1NF) require?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "No duplicate rows anywhere"
                    },
                    {
                              "id": "b",
                              "text": "Atomic values in each field"
                    },
                    {
                              "id": "c",
                              "text": "No foreign keys"
                    },
                    {
                              "id": "d",
                              "text": "Exactly three tables"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "1NF",
                              "statement": "Atomic values."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1NF requires each field to hold a single atomic value — no lists or repeating groups.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Atomic values in each field"
},
        },
        {
          id: "ecs11-u10-nf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a transitive dependency?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transitive dependency",
                              "statement": "Non-key depends on non-key."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A non-key field depends on another non-key field rather than directly on the primary key.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: City depends on Postcode, which depends on CustomerID — so City should move to its own table for 3NF.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Non-key field depending on another non-key field."
},
        },
        {
          id: "ecs11-u10-nf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one benefit of normalising a database.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Normalisation",
                              "statement": "Less redundancy, fewer anomalies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It reduces data redundancy — each fact is stored only once.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "This prevents update, insertion and deletion anomalies.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It makes the database easier to maintain and keeps data consistent.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Less redundancy and fewer data anomalies."
},
        },
        {
          id: "ecs11-u10-nf-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A table has fields OrderID, Product, Qty, CustomerName, CustomerPostcode. Identify two normalisation problems and how to fix them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Splitting tables",
                              "statement": "One entity per table."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Problem: CustomerName and CustomerPostcode are repeated on every order row — redundancy.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Fix: move customer details to a Customers table and link via a CustomerID foreign key.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Problem: if a field ever holds multiple products or values it would break 1NF.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Fix: ensure one product per row and use keys to relate OrderID to each record.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Extract Customers table; keep one atomic value per field."
},
        },
        {
          id: "ecs11-u10-nf-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A school database links Students, Courses and Tutors.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the three normal forms and what each adds.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "A table Stores(StudentID, StudentName, CourseID, CourseTutor). Explain why CourseTutor may violate 3NF.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Normal forms",
                              "statement": "1NF atomic, 2NF whole key, 3NF no transitive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) 1NF: atomic values only, one fact per field.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 2NF: every non-key field depends on the whole (possibly composite) primary key.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) 3NF: no non-key field depends on another non-key field.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) CourseTutor depends on CourseID, not on the student — a transitive dependency.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Fix: move CourseTutor to a Courses table keyed by CourseID.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 1NF atomic, 2NF whole-key, 3NF no transitive (b) tutor depends on course, move to Courses table"
},
        },
        {
          id: "ecs11-u10-nf-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company stores orders in one table with fields OrderNo, Date, CustomerName, CustomerAddress, ProductCode, ProductName, Qty.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List three normalisation problems in this design.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe a normalised structure — list the tables and their key fields.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain how this design prevents an update anomaly.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Normalisation in practice",
                              "statement": "Split entities, link with keys."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) CustomerName and CustomerAddress repeat on every order — duplication.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) ProductName repeats for every order of the same product.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Orders, Customers and Products are different entities forced into one table.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Customers(CustomerID, CustomerName, CustomerAddress).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Products(ProductCode, ProductName).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Orders(OrderNo, Date, CustomerID, ProductCode, Qty) with foreign keys linking to the other tables.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Each table stores one entity with its own primary key.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) A changed address is updated once in Customers, not on hundreds of order rows.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Every order sees the new address through the foreign key — no inconsistent copies.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) This eliminates the update anomaly that the single-table design would suffer.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) duplicated customer/product data, mixed entities (b) Customers, Products, Orders linked by keys (c) single update point prevents inconsistency"
},
        },
      ],
    },
    {
      id: "ecs11-u10-db-security",
      title: "Database security and integrity",
      skill: "Describe how databases are protected using users, constraints, transactions and backups.",
      lesson: {
        sections: [
          {
            heading: "Access control and constraints",
            body: "A DBMS protects data through user accounts with usernames and passwords, and privileges that limit what each user may do — some can only SELECT, others can insert or update, few can delete. Roles and groups make administration easier.\n\nConstraints enforce integrity at the point of entry: NOT NULL, UNIQUE, CHECK (type and range), DEFAULT and foreign key rules. SQL injection is an attack where malicious input alters a query — it is prevented by parameterised queries, input validation and the principle of least privilege.",
          },
          {
            heading: "Transactions and recovery",
            body: "A transaction is a logical unit of work treated as all-or-nothing — e.g. a bank transfer debits one account and credits another. The ACID properties guarantee correct behaviour: Atomicity (all steps or none), Consistency (valid state to valid state), Isolation (concurrent transactions do not interfere) and Durability (committed changes survive failure).\n\nBackups and transaction logs allow recovery after crashes or corruption, while locking and concurrency control prevent lost updates when many users work at once.",
          },
        ],
        keyFormulas: [
          { name: "ACID", statement: "Atomicity, Consistency, Isolation, Durability" },
          { name: "Least privilege", statement: "Grant each user only the rights they need" },
        ],
        workedExample: {
          problem: "Two users update the same record at the same time. Which ACID property prevents one update being silently lost?",
          solution: "Isolation — concurrent transactions are kept separate, typically via locking, so each commits in turn.",
        },
      },
      questions: [
        {
          id: "ecs11-u10-dbs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a SQL injection attack do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Steals database backups"
                    },
                    {
                              "id": "b",
                              "text": "Inserts malicious input that alters a query"
                    },
                    {
                              "id": "c",
                              "text": "Guesses user passwords"
                    },
                    {
                              "id": "d",
                              "text": "Overloads the database server"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SQL injection",
                              "statement": "Malicious input alters queries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SQL injection exploits unsanitised input to change the intended query.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Malicious input altering queries",
          "commonErrors": [
                    "Confusing with a denial-of-service attack."
          ]
},
        },
        {
          id: "ecs11-u10-dbs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a database transaction?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transaction",
                              "statement": "All-or-nothing unit of work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A transaction is a logical unit of work on the database, e.g. transferring money between accounts.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It is treated as all-or-nothing — every step succeeds or none are applied.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "An all-or-nothing unit of database work."
},
        },
        {
          id: "ecs11-u10-dbs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three ACID properties and state what each guarantees.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "ACID",
                              "statement": "Transaction guarantees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Atomicity — all steps of a transaction complete or none do.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Consistency — the database moves from one valid state to another.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Durability — committed changes survive system failure (Isolation — concurrent transactions do not interfere).",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Atomicity, consistency, durability (and isolation)."
},
        },
        {
          id: "ecs11-u10-dbs-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a DBMS restricts who can access data.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Access control",
                              "statement": "Authentication + authorisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Authentication: user accounts with usernames and passwords verify identity before access.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Authorisation: privileges and roles limit operations — e.g. read-only for some users, no DELETE for others.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Encryption protects sensitive stored data even if files are stolen.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Audit logs record who accessed or changed data, deterring misuse.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Accounts/passwords plus privileges/roles; encryption and logs add protection."
},
        },
        {
          id: "ecs11-u10-dbs-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A bank database processes account transfers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "What is a foreign key constraint and what does it prevent?",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how a transaction keeps a bank transfer consistent.",
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
                              "name": "Constraints and transactions",
                              "statement": "Validity + atomicity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) A foreign key must match an existing primary key or be null.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) It prevents orphaned records linking to non-existent rows.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) The debit and credit are grouped into a single transaction.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Atomicity means both succeed or neither is applied — money cannot vanish.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Consistency ensures total money is preserved between valid states.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) FK must reference a real PK — prevents orphans (b) debit+credit atomic and consistent"
},
        },
        {
          id: "ecs11-u10-dbs-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school database stores confidential exam results accessed by teachers and administrators.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two reasons access should be restricted and explain how.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain what a CHECK constraint could enforce on a Marks field.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "A power cut occurs mid-update. Explain how backups, logs and ACID properties allow recovery.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Database protection",
                              "statement": "Access, constraints, recovery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Privacy — exam results are personal data that must be protected.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Prevent tampering — results must not be altered without authorisation.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) User accounts with passwords authenticate each person.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Privileges limit teachers to their own classes and stop them deleting records.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) CHECK (Marks >= 0 AND Marks <= 100) restricts values to a valid range.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Invalid entries such as -5 or 250 are rejected automatically at entry.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) This protects data integrity without relying on users checking manually.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Atomicity rolls back the incomplete transaction so no half-updated data remains.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Durability ensures committed work before the cut is not lost.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Backups restore the last good state and logs replay committed transactions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) privacy + tampering, via accounts/privileges (b) CHECK enforces 0-100 (c) rollback + backup + logs"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u10-db-design-notes",
      title: "Database design — notes",
      summary: "Normalise to remove redundancy (1NF atomic, 2NF whole key, 3NF no transitive); protect data with constraints, ACID and backups.",
      sections: [
        { heading: "Key idea", body: "Each fact stored once, linked by keys — no duplication, no anomalies." },
        { heading: "Normal forms", body: "1NF atomic values; 2NF no partial dependency; 3NF no transitive dependency." },
        { heading: "Protection", body: "ACID transactions, access privileges and backups keep data safe and recoverable." },
      ],
    },
  ],
};
