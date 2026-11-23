import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ecs11-u10-lesson-10-1",
  code: "10-1",
  title: "Introduction to Databases",
  goal: "I CAN describe how databases organise data and why they are used.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Databases", "4CP1: database concepts, tables, keys and relationships"],
  
  vocabulary: [
    { term: "Database", definition: "An organised collection of related data stored for efficient access and management." },
    { term: "DBMS", definition: "Database Management System — software used to create, query and maintain databases." },
    { term: "Table", definition: "A grid of rows (records) and columns (fields) storing one entity type." },
    { term: "Record", definition: "One complete row of a table holding all field values for a single item." },
    { term: "Field", definition: "A column of a table storing one type of data (attribute)." },
    { term: "Primary key", definition: "A field or combination that uniquely identifies each record in a table." },
    { term: "Foreign key", definition: "A field in one table that references the primary key of another table." },
  ],
  concepts: [
    {
      id: "ecs11-u10-db-fund",
      title: "Database fundamentals",
      skill: "Describe how databases store and organise data at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "What is a database?",
            body: "A database is an organised collection of related data, stored so it can be accessed, managed and updated efficiently. A DBMS (database management system) is the software that lets users and applications create, query and maintain the database.\n\nDatabases are preferred to flat files or spreadsheets because they reduce duplication, allow faster searching and sorting, support concurrent access by many users, enforce security and maintain data integrity.",
          },
          {
            heading: "Tables, records and fields",
            body: "Relational databases store data in tables. A table is made of rows (records or tuples) and columns (fields or attributes); each field has a data type such as text, integer, date or Boolean. A record is one complete set of field values, e.g. one customer.\n\nKeys identify rows. A primary key uniquely identifies each record — it cannot contain duplicates or null values. A foreign key in one table references the primary key of another table, creating a relationship between them.",
          },
        ],
        keyFormulas: [
          { name: "Table structure", statement: "Table = records (rows) × fields (columns)" },
          { name: "Primary key", statement: "Unique identifier for each record — no duplicates or nulls" },
          { name: "Foreign key", statement: "Field linking to another table's primary key" },
        ],
        workedExample: {
          problem: "A school stores students in a table with fields StudentID, Name, Form. Which field should be the primary key?",
          solution: "StudentID — Name is not guaranteed to be unique and Form is shared by many students; StudentID uniquely identifies each student.",
        },
      },
      questions: [
        {
          id: "ecs11-u10-dbf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does DBMS stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Database Management System"
                    },
                    {
                              "id": "b",
                              "text": "Data Memory Storage"
                    },
                    {
                              "id": "c",
                              "text": "Digital Management Server"
                    },
                    {
                              "id": "d",
                              "text": "Database Maintenance Software"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DBMS",
                              "statement": "Software that manages databases."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DBMS = Database Management System.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Database Management System",
          "commonErrors": [
                    "Confusing with a database itself — a DBMS is the software."
          ]
},
        },
        {
          id: "ecs11-u10-dbf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the difference between a field and a record in a database table.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Field and record",
                              "statement": "Column vs row."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A field is a column storing one type of data (an attribute).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A record is a row holding one complete set of field values for an entity.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Field = column; record = row."
},
        },
        {
          id: "ecs11-u10-dbf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a primary key is needed in a table.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Primary key",
                              "statement": "Unique, non-null identifier."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It uniquely identifies each record in the table.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It cannot contain duplicates or null values, preventing ambiguous rows.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It enables relationships: foreign keys in other tables reference it.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Unique, non-null identifier enabling links between tables."
},
        },
        {
          id: "ecs11-u10-dbf-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A Customers table has fields CustomerID, Name, Email. Explain which field should be the primary key and give two reasons.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Choosing a primary key",
                              "statement": "Unique, stable, non-null."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CustomerID should be the primary key.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It is unique for each customer, unlike Name or Email.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Names can repeat; emails can change or be missing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A numeric ID is stable and can be referenced by foreign keys in other tables.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "CustomerID — unique, stable identifier."
},
        },
        {
          id: "ecs11-u10-dbf-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A library wants a database for its books and borrowers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the two tables you would create and suggest two fields for each.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest a primary key for each table and explain how the tables would be linked.",
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
                              "name": "Relational design",
                              "statement": "One table per entity, linked by keys."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Tables named: Books and Borrowers.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Sensible fields, e.g. ISBN, Title for Books; Name, BorrowerID for Borrowers.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Primary keys, e.g. BookID and BorrowerID.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) A Loans table or foreign key links BorrowerID to Books via issue records.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) One borrower can borrow many books — a one-to-many link avoids duplicating borrower data.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Books + Borrowers with fields (b) BookID/BorrowerID linked by foreign key"
},
        },
        {
          id: "ecs11-u10-dbf-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company currently stores its 50,000 customer orders in a single spreadsheet.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give three advantages of moving to a database management system.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Give two disadvantages or limitations of using a DBMS.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how primary and foreign keys reduce data duplication.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "DBMS vs flat file",
                              "statement": "Structured storage wins at scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Less data duplication — each fact stored once.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Faster searching, sorting and reporting on large datasets.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Multiple users can access data concurrently and securely.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Integrity rules and backups protect data quality.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Higher cost — software licences and specialist skills needed.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) More complex to set up and maintain than a spreadsheet.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) A primary key uniquely identifies a record so it need only be stored once.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) A foreign key links tables by reference instead of copying the data.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Updating a record in one place updates it everywhere it is referenced.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) This avoids update anomalies where copies become inconsistent.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) efficiency, integrity, sharing (b) cost, complexity (c) keys store facts once",
          "commonErrors": [
                    "Claiming a spreadsheet is always worse — it is fine for small, simple data."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u10-db-relational",
      title: "The relational model and data integrity",
      skill: "Explain relationships, constraints and integrity in relational databases.",
      lesson: {
        sections: [
          {
            heading: "Entities, attributes and relationships",
            body: "An entity is a real-world object (Customer, Order) represented as a table; its attributes are the fields. Relationships link tables: one-to-one, one-to-many (most common — e.g. one customer has many orders) and many-to-many (which needs a linking or junction table to avoid duplication). Entity-relationship (ER) diagrams show entities and the relationships between them.",
          },
          {
            heading: "Integrity constraints and anomalies",
            body: "Entity integrity: a primary key cannot be null or duplicated. Referential integrity: every foreign key value must match an existing primary key or be null, preventing orphaned records. Domain integrity: field values must be of the correct type and within allowed ranges.\n\nRedundancy — storing the same fact in several places — causes update, insertion and deletion anomalies. Normalisation reduces redundancy (covered in lesson 10-3). Transactions keep data consistent when changes span several tables.",
          },
        ],
        keyFormulas: [
          { name: "One-to-many", statement: "One record on the 'one' side relates to many on the 'many' side" },
          { name: "Referential integrity", statement: "Every foreign key must match an existing primary key or be null" },
        ],
        workedExample: {
          problem: "A foreign key in an Orders table contains a CustomerID that does not exist in the Customers table. What rule is broken?",
          solution: "Referential integrity — the foreign key must reference a valid primary key (or be null).",
        },
      },
      questions: [
        {
          id: "ecs11-u10-dbr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a one-to-many relationship, how many records on the 'one' side can relate to records on the 'many' side?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Many"
                    },
                    {
                              "id": "b",
                              "text": "One"
                    },
                    {
                              "id": "c",
                              "text": "Zero"
                    },
                    {
                              "id": "d",
                              "text": "Two"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "One-to-many",
                              "statement": "Single parent, multiple children."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One-to-many: one record relates to many.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "One"
},
        },
        {
          id: "ecs11-u10-dbr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is referential integrity?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Referential integrity",
                              "statement": "Valid foreign key references."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Every foreign key value must match an existing primary key in the referenced table.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Alternatively the foreign key may be null — this prevents orphaned records.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Foreign keys must match a real primary key or be null."
},
        },
        {
          id: "ecs11-u10-dbr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example each of entity integrity and domain integrity being enforced.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Integrity constraints",
                              "statement": "Rules keeping data valid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Entity integrity: a duplicate primary key is rejected, e.g. two rows with the same StudentID.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Domain integrity: a field value outside its allowed type/range is rejected, e.g. Age = 'abc' or Marks = 150.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both are enforced automatically by the DBMS at entry.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "PK uniqueness enforced; field type/range enforced."
},
        },
        {
          id: "ecs11-u10-dbr-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a linking table solves a many-to-many relationship, using Students and Modules as an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Junction table",
                              "statement": "Resolves many-to-many."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Many students take many modules, so the relationship cannot be stored directly in either table.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "A linking table such as Enrolments holds StudentID and ModuleID for each pairing.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Each row records one student-module enrolment.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Foreign keys to both tables preserve referential integrity without duplicating student or module data.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Enrolments(StudentID, ModuleID) links the two tables."
},
        },
        {
          id: "ecs11-u10-dbr-q5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A school is designing a database for students and their exam results.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two integrity constraints a DBMS can enforce automatically.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what an update anomaly is and how normalisation helps prevent it.",
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
                              "name": "Constraints and anomalies",
                              "statement": "Rules vs redundancy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Entity integrity — primary key must be unique and not null.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Referential integrity — foreign keys must match existing primary keys (or be null).",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) An update anomaly occurs when the same fact is stored in several places and only some copies are updated, causing inconsistency.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It leads to contradictory data, e.g. a student's address updated in one table but not another.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Normalisation removes redundancy so each fact is stored once and updated once.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) PK uniqueness, FK validity (b) inconsistency from duplicated data, fixed by normalising"
},
        },
        {
          id: "ecs11-u10-dbr-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A hospital database stores patient details and their appointments.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the relationship between Patients and Appointments and state a suitable primary key for each table.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways the DBMS can protect data integrity.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why storing the patient name and address in every appointment record would be poor design.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Relational design",
                              "statement": "Link, don't duplicate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) One patient can have many appointments — a one-to-many relationship.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Patients primary key: PatientID.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Appointments primary key: AppointmentID, with PatientID as foreign key.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Constraints such as NOT NULL, UNIQUE and CHECK reject invalid entries automatically.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Referential integrity checks ensure appointment PatientIDs exist in Patients.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Transactions ensure multi-table changes complete fully or not at all.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) The patient's details would be duplicated on every appointment row.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) This wastes storage and creates update anomalies if the address changes.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) A foreign key to a single Patients record keeps one authoritative copy.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Queries can still retrieve the details by joining the tables when needed.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) one-to-many, PatientID/AppointmentID (b) constraints, transactions (c) duplication and anomalies avoided by FK"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u10-databases-intro-notes",
      title: "Databases — introduction notes",
      summary: "Relational databases store data in linked tables; keys identify records and enforce integrity.",
      sections: [
        { heading: "Key idea", body: "A DBMS manages organised data; tables of records and fields replace flat files at scale." },
        { heading: "Keys", body: "Primary key = unique row identifier; foreign key = link to another table's primary key." },
        { heading: "Integrity", body: "Entity, referential and domain constraints keep data valid and consistent." },
      ],
    },
  ],
};
