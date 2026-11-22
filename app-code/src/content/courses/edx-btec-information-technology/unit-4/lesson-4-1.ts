import type { Lesson } from "../../../types.ts";

export const lesson401: Lesson = {
  id: "edxbtecit-u4-lesson-4-1",
  code: "4-1",
  title: "Relational Database Concepts",
  goal: "I CAN explain relational database structure — tables, keys, relationships and normalisation.",
  standards: [
    "BTEC L3 National Information Technology — Unit 4: Relational Database Development",
  ],
  vocabulary: [
    {
      term: "Database",
      definition:
        "An organised collection of related data stored electronically.",
    },
    {
      term: "Table",
      definition:
        "A collection of related records — rows are records, columns are fields.",
    },
    {
      term: "Primary key",
      definition:
        "A unique identifier for each record in a table — cannot be null or duplicated.",
    },
    {
      term: "Foreign key",
      definition:
        "A field in one table referencing the primary key of another table — creates relationships.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u4-l1-structure",
      title: "Tables, Keys and Relationships",
      skill:
        "Describe database structure — tables, records, fields, keys and relationships.",
      lesson: {
        sections: [
          {
            heading: "Database structure",
            body: "A **relational database** organises data into **tables** (relations). Each table has **fields** (columns — attributes like name, date) and **records** (rows — individual entries). **Primary key** uniquely identifies each record — e.g. StudentID in a Students table.\n\n**Relationships** link tables: **one-to-many** (one customer → many orders), **many-to-many** (students ↔ courses, via junction table), **one-to-one** (rare — employee ↔ employee details). **Foreign key** in the 'many' table references the 'one' table's primary key.",
          },
          {
            heading: "Data integrity",
            body: "**Entity integrity**: primary keys must be unique and not null. **Referential integrity**: foreign keys must reference existing primary keys — prevents orphaned records. **Domain integrity**: fields must contain valid data types/ranges.\n\n**Constraints** enforce rules: NOT NULL, UNIQUE, CHECK (value ranges), DEFAULT. **Indexes** speed up queries on frequently searched fields — like a book index. Normalisation reduces redundancy and improves integrity.",
          },
        ],
        keyFormulas: [
          {
            name: "Primary key",
            statement: "Unique identifier — no nulls, no duplicates.",
          },
          {
            name: "Relationships",
            statement: "1:1, 1:M, M:M — via foreign keys.",
          },
        ],
        workedExample: {
          problem: "A Students table and Courses table need linking. How?",
          solution:
            "Create Enrolments junction table with StudentID (FK) + CourseID (FK) — many-to-many relationship.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u4-l1-structure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What uniquely identifies each record in a table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Primary key" },
              { id: "b", text: "Field" },
              { id: "c", text: "Index" },
              { id: "d", text: "Foreign key" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary key",
                statement: "Unique identifier for each record.",
              },
            ],
            steps: [
              {
                reasoning: "Primary key = unique identifier.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Primary key",
            commonErrors: ["Confusing with foreign key."],
          },
        },
        {
          id: "edxbtecit-u4-l1-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a primary key and a foreign key.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PK vs FK",
                statement:
                  "PK uniquely identifies records; FK references another table's PK.",
              },
            ],
            steps: [
              { reasoning: "Primary key defined.", marks: 1, markCode: "M" },
              { reasoning: "Foreign key defined.", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Primary key uniquely identifies records in own table; foreign key references another table's primary key.",
            commonErrors: ["Conflated.", "No relationship purpose."],
          },
        },
        {
          id: "edxbtecit-u4-l1-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse why referential integrity is important in databases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Referential integrity",
                statement:
                  "Foreign keys must reference existing records — prevents orphaned data.",
              },
            ],
            steps: [
              {
                reasoning: "Prevents orphaned records.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Maintains data consistency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enables reliable joins/queries.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Referential integrity prevents orphaned records and maintains consistency — essential for reliable queries and data integrity.",
            commonErrors: ["No purpose.", "Only definition."],
          },
        },
        {
          id: "edxbtecit-u4-l1-structure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design tables for a library system tracking books and borrowers.",
          parts: [
            {
              label: "a",
              prompt: "Identify two tables needed and their fields.",
              marks: 3,
            },
            { label: "b", prompt: "Explain how the tables relate.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest one constraint to enforce data quality.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Database design",
                statement:
                  "Separate entities into tables, link via keys, enforce constraints.",
              },
            ],
            steps: [
              {
                reasoning: "Table 1: Books (BookID PK, Title, Author).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Table 2: Borrowers (BorrowerID PK, Name).",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Fields appropriate for purpose.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Relationship: one borrower → many loans.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Loans table with FKs to both.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Relationship type correct.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Constraint: NOT NULL on required fields.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Constraint justified for data quality.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) Books+Borrowers tables (b) Loans links via FKs (c) NOT NULL constraint",
            commonErrors: ["Single table design.", "No relationships."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u4-l1-normalisation",
      title: "Normalisation",
      skill: "Explain normalisation and identify data redundancy problems.",
      lesson: {
        sections: [
          {
            heading: "The problem of redundancy",
            body: "Unnormalised data repeats information — e.g. a single table storing student details + course details means student name/address repeated for every course enrolment. **Update anomalies** occur: changing an address requires updating multiple rows; **insert anomalies**: can't add a student without a course; **delete anomalies**: deleting last course loses student record.\n\n**Normalisation** organises data into tables to eliminate redundancy — each fact stored once, in the right place.",
          },
          {
            heading: "Normal forms",
            body: "**First Normal Form (1NF)**: each field contains atomic (single) values — no repeating groups. **Second Normal Form (2NF)**: 1NF + no partial dependencies (non-key fields depend on whole primary key, not part). **Third Normal Form (3NF)**: 2NF + no transitive dependencies (non-key fields depend only on primary key, not other non-key fields).\n\nMost practical databases aim for 3NF. Normalisation improves data integrity but can require more joins — balance normalisation against query performance needs.",
          },
        ],
        keyFormulas: [
          { name: "1NF", statement: "Atomic values — no repeating groups." },
          {
            name: "3NF",
            statement:
              "No transitive dependencies — non-key fields depend only on PK.",
          },
        ],
        workedExample: {
          problem: "Why normalise a database?",
          solution:
            "Eliminate redundancy → prevent update/insert/delete anomalies → improve data integrity and save storage.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u4-l1-normalisation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does normalisation primarily aim to achieve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simpler backups" },
              { id: "b", text: "Eliminate data redundancy" },
              { id: "c", text: "More storage" },
              { id: "d", text: "Faster queries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normalisation",
                statement:
                  "Organises data to eliminate redundancy and anomalies.",
              },
            ],
            steps: [
              {
                reasoning: "Normalisation = remove redundancy.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Eliminate redundancy",
            commonErrors: ["Thinking it speeds queries."],
          },
        },
        {
          id: "edxbtecit-u4-l1-normalisation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain an 'update anomaly' caused by data redundancy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Update anomaly",
                statement:
                  "Changing data requires updating multiple rows — risk of inconsistency.",
              },
            ],
            steps: [
              {
                reasoning: "Redundant data stored in multiple places.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Update must change all copies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Missing one copy creates inconsistency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Update anomaly: redundant data must be updated everywhere — missing one creates inconsistent data.",
            commonErrors: ["No redundancy link.", "Vague explanation."],
          },
        },
        {
          id: "edxbtecit-u4-l1-normalisation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the trade-off between normalisation and query performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Normalisation trade-off",
                statement:
                  "Normalisation improves integrity but requires more joins — slower queries.",
              },
            ],
            steps: [
              {
                reasoning: "Benefit: data integrity, less redundancy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost: more tables = more joins = slower queries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balance needed based on requirements.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Normalisation improves integrity but adds joins — balance against query performance needs; 3NF is common compromise.",
            commonErrors: ["Always normalise view.", "No trade-off."],
          },
        },
        {
          id: "edxbtecit-u4-l1-normalisation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A table stores student details repeated for every course enrolment.",
          parts: [
            {
              label: "a",
              prompt: "Identify two problems with this design.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how normalisation solves them.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "Describe the resulting table structure.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Normalisation",
                statement:
                  "Split data into related tables — each fact stored once.",
              },
            ],
            steps: [
              {
                reasoning: "Problem 1: data redundancy.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Problem 2: update anomalies.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Solution: separate Students table.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Solution: separate Courses table.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Solution: Enrolments junction table.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Result: no redundancy, integrity maintained.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Students: StudentID PK + details.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Enrolments: StudentID FK + CourseID FK.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Courses: CourseID PK + details.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) redundancy+anomalies (b) split tables (c) Students/Courses/Enrolments",
            commonErrors: ["No redundancy identified.", "Single table kept."],
          },
        },
      ],
    },
  ],
};
