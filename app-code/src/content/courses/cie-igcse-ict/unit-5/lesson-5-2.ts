import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cieigcseict-u5-lesson-5-2",
  code: "5-2",
  title: "Database Design: Tables, Keys and Normalisation",
  goal: "I CAN design relational database tables, apply keys and normalise data.",
  standards: ["Cambridge IGCSE ICT 0417", "Unit 5: ICT applications in depth"],
  vocabulary: [
    { term: "Primary key", definition: "Unique identifier for each record." },
    {
      term: "Foreign key",
      definition: "Field linking to another table's primary key.",
    },
    {
      term: "Relationship",
      definition: "Link between tables (1:1, 1:M, M:N).",
    },
    {
      term: "Normalisation",
      definition: "Organising data to reduce redundancy.",
    },
    { term: "Entity", definition: "Real-world object represented as table." },
    { term: "Query", definition: "Request to retrieve/manipulate data." },
  ],
  concepts: [
    {
      id: "cieigcseict-u5l2-c1-design",
      title: "Relational database design",
      skill: "Design tables, keys and relationships for a given scenario.",
      lesson: {
        sections: [
          {
            heading: "Tables, keys and relationships",
            body: "Each **entity** (student, course) becomes a table. **Primary key** uniquely identifies each record (e.g. StudentID). **Foreign key** links tables — e.g. Enrollment table has StudentID and CourseID foreign keys. **Relationships**: one-to-many (one teacher → many classes), many-to-many via junction table, one-to-one rare. Reduces redundancy vs flat files.",
          },
          {
            heading: "Design process",
            body: "1. Identify entities and attributes. 2. Choose primary keys. 3. Define relationships. 4. Create junction tables for M:N. 5. Normalise to remove redundancy. Good design: no duplicated data, referential integrity, easy to extend — supports efficient queries and updates.",
          },
        ],
        keyFormulas: [
          { name: "PK", statement: "Unique record ID" },
          { name: "FK", statement: "Link to other table" },
          { name: "1:M", statement: "One to many" },
        ],
        workedExample: {
          problem: "Design tables for students enrolled in courses.",
          solution:
            "Students(StudentID PK, Name, DOB); Courses(CourseID PK, Title); Enrollments(StudentID FK, CourseID FK, Grade) — junction table resolves M:N, each student can take many courses, each course has many students.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u5l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A primary key must be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A foreign key" },
              { id: "b", text: "The same for all records" },
              { id: "c", text: "Optional" },
              { id: "d", text: "Unique for each record" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "PK", statement: "Unique." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Unique",
            commonErrors: ["Not unique."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'foreign key'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "FK", statement: "Link." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Field in one table referencing another table's primary key — establishes relationship between tables; maintains referential integrity.",
            commonErrors: ["PK confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a junction table resolves a many-to-many relationship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Junction table",
                statement: "M:N → 1:M.",
              },
            ],
            steps: [
              { reasoning: "Problem.", marks: 1, markCode: "M" },
              { reasoning: "Solution.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "M:N can't be stored directly — junction table with two foreign keys (e.g. Enrollments: StudentID + CourseID) splits into two 1:M relationships; each record links one student to one course.",
            commonErrors: ["Direct link."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give three advantages of relational databases over flat files.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Relational adv",
                statement: "Structured.",
              },
            ],
            steps: [
              { reasoning: "Three valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. reduced data redundancy (no duplication), referential integrity (consistent links), complex queries across tables — vs flat files with repeated data and limited querying.",
            commonErrors: ["No advantages."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Design a database for a library (members, books, loans).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Library DB",
                statement: "Entity design.",
              },
            ],
            steps: [
              { reasoning: "Entities.", marks: 2, markCode: "M" },
              { reasoning: "Keys.", marks: 1, markCode: "M" },
              { reasoning: "Relationships.", marks: 1, markCode: "M" },
              { reasoning: "Justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Members(MemberID PK, Name, Address); Books(BookID PK, Title, Author); Loans(LoanID PK, MemberID FK, BookID FK, DueDate) — 1:M relationships; Loans as junction tracks which member borrowed which book.",
            commonErrors: ["One table only."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'referential integrity'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ref integrity",
                statement: "Valid links.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ensures foreign keys always reference valid primary keys — prevents orphan records (e.g. can't have loan for non-existent member); enforced by database.",
            commonErrors: ["Any data."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A junction table is needed for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many-to-many relationships" },
              { id: "b", text: "Sorting data" },
              { id: "c", text: "No relationships" },
              { id: "d", text: "One-to-one only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Junction", statement: "M:N." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** M:N",
            commonErrors: ["Wrong relationship."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two disadvantages of storing all data in one flat table.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Flat file issues",
                statement: "Redundancy.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. data redundancy (same info repeated many times, wastes space) and update anomalies (change in one place must be changed everywhere, risk of inconsistency).",
            commonErrors: ["No issues."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a one-to-many and many-to-many relationship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "1:M vs M:N", statement: "Direction." },
            ],
            steps: [
              { reasoning: "1:M.", marks: 1, markCode: "M" },
              { reasoning: "M:N.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "1:M: one teacher → many classes (direct FK). M:N: students ↔ courses — needs junction table (Enrollments) because both sides have many.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether normalisation is always necessary in database design.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Normalisation eval",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "When needed.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reduces redundancy, prevents anomalies — but adds complexity, more joins, may hurt performance; needed for transactional systems, less critical for simple/ read-only data or small datasets.",
            commonErrors: ["Always/never."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a relational database, an 'entity' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A backup file" },
              { id: "b", text: "A real-world object represented as a table" },
              { id: "c", text: "A query result" },
              { id: "d", text: "A single field value" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entity",
                statement: "Object → table.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Object represented as table",
            commonErrors: ["Field confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two properties a field should have to be suitable as a primary key.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "PK properties",
                statement: "Unique, stable.",
              },
            ],
            steps: [
              { reasoning: "Two valid properties.", marks: 1, markCode: "M" },
              { reasoning: "Each justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Must be unique for every record (no duplicates) and should be stable/not change over time (e.g. a numeric ID rather than a surname that could change).",
            commonErrors: ["Vague answers."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a 'Students–Courses' system, the Enrollments table containing StudentID and CourseID is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A primary table" },
              { id: "b", text: "A junction table" },
              { id: "c", text: "A query result" },
              { id: "d", text: "A backup table" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Junction", statement: "Links M:N." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Junction table",
            commonErrors: ["Entity table."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the main steps involved in designing a relational database for a given scenario.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Design process",
                statement: "Entities → keys → relationships.",
              },
            ],
            steps: [
              { reasoning: "Identify entities/attributes.", marks: 1, markCode: "M" },
              { reasoning: "Choose primary keys.", marks: 1, markCode: "M" },
              { reasoning: "Define relationships/FKs.", marks: 1, markCode: "M" },
              { reasoning: "Normalise/justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identify entities and their attributes, choose a primary key for each, define relationships and add foreign keys (junction table for M:N), then normalise to remove redundancy.",
            commonErrors: ["No process order."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'Courses' table has CourseID as its primary key. In the 'Enrollments' table, the CourseID field is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unique field" },
              { id: "b", text: "Foreign key" },
              { id: "c", text: "Primary key" },
              { id: "d", text: "Calculated field" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "FK", statement: "References PK." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Foreign key",
            commonErrors: ["Primary key confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the statement: 'A well-designed relational database eliminates all data duplication.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Duplication eval",
                statement: "Redundancy vs necessity.",
              },
            ],
            steps: [
              { reasoning: "Where true.", marks: 1, markCode: "M" },
              { reasoning: "Where false.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Normalisation removes unnecessary duplication (single source of truth) — but some repetition is unavoidable/intentional: junction tables repeat keys, and controlled denormalisation may copy data for performance; 'all' duplication is therefore too strong.",
            commonErrors: ["Statement fully true."],
          },
        },
      ],
    },
    {
      id: "cieigcseict-u5l2-c2-normalisation",
      title: "Normalisation: reducing redundancy",
      skill: "Apply first, second and third normal forms to data.",
      lesson: {
        sections: [
          {
            heading: "First normal form (1NF)",
            body: "Each field contains **atomic** (single) values — no repeating groups, no lists in one cell. E.g. 'Subjects: Maths, English' must be split into separate rows. Each record unique (PK defined).",
          },
          {
            heading: "Second and third normal forms (2NF, 3NF)",
            body: "**2NF**: no partial dependency — non-key fields depend on whole PK, not part of it (relevant for composite keys). **3NF**: no transitive dependency — non-key fields depend only on PK, not on other non-key fields. E.g. storing 'City' and 'Postcode' when City can be derived from Postcode violates 3NF.",
          },
        ],
        keyFormulas: [
          { name: "1NF", statement: "Atomic values" },
          { name: "2NF", statement: "No partial dependency" },
          { name: "3NF", statement: "No transitive dependency" },
        ],
        workedExample: {
          problem:
            "A table has OrderID, Product, Quantity, ProductPrice. Is this 3NF?",
          solution:
            "No — ProductPrice depends on Product (non-key), not OrderID — transitive dependency. Split: Orders(OrderID, Product, Quantity) and Products(Product, Price); join on Product.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u5l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "First normal form (1NF) requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple values per cell" },
              { id: "b", text: "Atomic values in each field" },
              { id: "c", text: "No primary key" },
              { id: "d", text: "No tables" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "1NF", statement: "Atomic." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Atomic values",
            commonErrors: ["Multi-value."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'transitive dependency'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transitive dep",
                statement: "Indirect.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Non-key field depends on another non-key field, not directly on primary key — e.g. Postcode → City; violates 3NF; fix by splitting tables.",
            commonErrors: ["Direct dependency."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 2NF and 3NF.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "2NF vs 3NF",
                statement: "Partial vs transitive.",
              },
            ],
            steps: [
              { reasoning: "2NF.", marks: 1, markCode: "M" },
              { reasoning: "3NF.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "2NF: no partial dependency on part of composite key. 3NF: no transitive dependency — non-key depends only on PK, not other non-key fields; 3NF builds on 2NF.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Normalise this table to 3NF: OrderID, Customer, Product, Price, Quantity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "3NF example",
                statement: "Split tables.",
              },
            ],
            steps: [
              { reasoning: "Identify dependency.", marks: 1, markCode: "M" },
              { reasoning: "Split correctly.", marks: 2, markCode: "M" },
              { reasoning: "Justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Orders(OrderID PK, Customer, Product FK, Quantity); Products(Product PK, Price) — Price depends on Product not OrderID (transitive); removes redundancy, single source for price.",
            commonErrors: ["Keep all in one."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether over-normalisation can hurt database performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Over-normalisation",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "More tables = more joins = slower queries; sometimes denormalisation (controlled redundancy) improves read performance — balance integrity vs performance based on workload.",
            commonErrors: ["More normal always better."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might 'City' and 'Postcode' in same table violate 3NF?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "3NF example", statement: "Derivable." },
            ],
            steps: [
              { reasoning: "Dependency identified.", marks: 1, markCode: "M" },
              { reasoning: "Fix.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "City can be derived from Postcode — City depends on Postcode (non-key), not primary key; transitive dependency → store City in separate table or remove if derivable.",
            commonErrors: ["Fine as is."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "1NF requires each field to contain:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple values" },
              { id: "b", text: "A single atomic value" },
              { id: "c", text: "No values" },
              { id: "d", text: "Only numbers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "1NF", statement: "Atomic." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Atomic",
            commonErrors: ["Lists."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of normalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Norm benefits",
                statement: "Reduce redundancy.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. eliminates data redundancy (saves storage, single source of truth) and prevents update/insert/delete anomalies — changes made once propagate correctly.",
            commonErrors: ["No benefits."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'partial dependency' in the context of 2NF.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Partial dep",
                statement: "Part of key.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Fix.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Non-key field depends on only part of composite primary key — e.g. (OrderID, ProductID) PK but ProductName depends only on ProductID; split into separate table.",
            commonErrors: ["Full dependency."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse when denormalisation might be the better choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Denormalisation",
                statement: "Performance vs integrity.",
              },
            ],
            steps: [
              { reasoning: "When.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Risks.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Read-heavy systems (data warehouses, reporting) — controlled redundancy reduces joins, speeds queries; but introduces update anomalies — acceptable when writes rare and integrity managed by ETL.",
            commonErrors: ["Always normalise."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A table where one field contains a list such as 'Maths, English, Science' violates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First normal form (1NF)" },
              { id: "b", text: "Third normal form (3NF)" },
              { id: "c", text: "No normal form" },
              { id: "d", text: "Second normal form (2NF)" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "1NF", statement: "Atomic values." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 1NF",
            commonErrors: ["3NF confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is meant by an 'atomic' value in database normalisation? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atomic value",
                statement: "Single indivisible value.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A single, indivisible value that cannot be broken down further — e.g. one subject per field ('Maths') rather than a list ('Maths, English'); required for 1NF.",
            commonErrors: ["Multi-value example."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A table has a composite primary key (StudentID, ModuleID) and also stores ModuleName. Because ModuleName depends only on ModuleID, this most likely violates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No normal form" },
              { id: "b", text: "Third normal form (3NF)" },
              { id: "c", text: "First normal form (1NF)" },
              { id: "d", text: "Second normal form (2NF)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Partial dep",
                statement: "Part of composite key.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 2NF",
            commonErrors: ["3NF confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Normalise the following table to 3NF: EmployeeID, Name, Department, DepartmentHead.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "3NF split",
                statement: "Remove transitive dependency.",
              },
            ],
            steps: [
              { reasoning: "Identify dependency.", marks: 1, markCode: "M" },
              { reasoning: "Split correctly.", marks: 2, markCode: "M" },
              { reasoning: "Justified.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Employees(EmployeeID PK, Name, Department FK); Departments(Department PK, DepartmentHead) — DepartmentHead depends on Department (non-key), a transitive dependency; removes redundancy and single-sources department data.",
            commonErrors: ["Keep all in one."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement best describes third normal form (3NF)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fields may contain lists of values" },
              { id: "b", text: "No primary key is needed" },
              { id: "c", text: "Non-key fields depend only on the primary key" },
              { id: "d", text: "Duplicate data is allowed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "3NF", statement: "No transitive dep." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Non-key depends only on PK",
            commonErrors: ["2NF confused."],
          },
        },
        {
          id: "cieigcseict-q-u5l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether a small club's single-table membership list (name, address, membership type) needs to be fully normalised to 3NF.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Norm necessity",
                statement: "Fit for purpose.",
              },
            ],
            steps: [
              { reasoning: "Benefits of normalising.", marks: 1, markCode: "M" },
              { reasoning: "Costs/irrelevance.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If the table already has atomic values, a primary key and no repeating or derivable fields, it may already satisfy 3NF — splitting further adds joins and complexity for little gain; normalise only to remove actual redundancy/dependencies.",
            commonErrors: ["Always split."],
          },
        },
      ],
    },
  ],
};
