module.exports = [
  {
    file: "lesson-10-1.ts", exportName: "lesson101",
    lesson: {
      id: "ecs11-u10-lesson-10-1", code: "10-1",
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
          id: "ecs11-u10-db-fund", title: "Database fundamentals",
          skill: "Describe how databases store and organise data at IGCSE level.",
          sections: [
            { heading: "What is a database?", body: "A database is an organised collection of related data, stored so it can be accessed, managed and updated efficiently. A DBMS (database management system) is the software that lets users and applications create, query and maintain the database.\n\nDatabases are preferred to flat files or spreadsheets because they reduce duplication, allow faster searching and sorting, support concurrent access by many users, enforce security and maintain data integrity." },
            { heading: "Tables, records and fields", body: "Relational databases store data in tables. A table is made of rows (records or tuples) and columns (fields or attributes); each field has a data type such as text, integer, date or Boolean. A record is one complete set of field values, e.g. one customer.\n\nKeys identify rows. A primary key uniquely identifies each record — it cannot contain duplicates or null values. A foreign key in one table references the primary key of another table, creating a relationship between them." },
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
          questions: [
            {
              id: "ecs11-u10-dbf-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does DBMS stand for?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Database Management System" },
                { id: "b", text: "Data Memory Storage" },
                { id: "c", text: "Digital Management Server" },
                { id: "d", text: "Database Maintenance Software" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "DBMS", statement: "Software that manages databases." }],
                steps: [{ reasoning: "DBMS = Database Management System.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Database Management System",
                commonErrors: ["Confusing with a database itself — a DBMS is the software."],
              },
            },
            {
              id: "ecs11-u10-dbf-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the difference between a field and a record in a database table.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Field and record", statement: "Column vs row." }],
                steps: [
                  { reasoning: "A field is a column storing one type of data (an attribute).", marks: 1, markCode: "AO1" },
                  { reasoning: "A record is a row holding one complete set of field values for an entity.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Field = column; record = row.",
              },
            },
            {
              id: "ecs11-u10-dbf-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why a primary key is needed in a table.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Primary key", statement: "Unique, non-null identifier." }],
                steps: [
                  { reasoning: "It uniquely identifies each record in the table.", marks: 1, markCode: "AO1" },
                  { reasoning: "It cannot contain duplicates or null values, preventing ambiguous rows.", marks: 1, markCode: "AO1" },
                  { reasoning: "It enables relationships: foreign keys in other tables reference it.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Unique, non-null identifier enabling links between tables.",
              },
            },
            {
              id: "ecs11-u10-dbf-q4", difficulty: "core", totalMarks: 4,
              stem: "A Customers table has fields CustomerID, Name, Email. Explain which field should be the primary key and give two reasons.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Choosing a primary key", statement: "Unique, stable, non-null." }],
                steps: [
                  { reasoning: "CustomerID should be the primary key.", marks: 1, markCode: "AO1" },
                  { reasoning: "It is unique for each customer, unlike Name or Email.", marks: 1, markCode: "AO1" },
                  { reasoning: "Names can repeat; emails can change or be missing.", marks: 1, markCode: "AO2" },
                  { reasoning: "A numeric ID is stable and can be referenced by foreign keys in other tables.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "CustomerID — unique, stable identifier.",
              },
            },
            {
              id: "ecs11-u10-dbf-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A library wants a database for its books and borrowers.",
              parts: [
                { label: "a", prompt: "Name the two tables you would create and suggest two fields for each.", marks: 2 },
                { label: "b", prompt: "Suggest a primary key for each table and explain how the tables would be linked.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Relational design", statement: "One table per entity, linked by keys." }],
                steps: [
                  { reasoning: "(a) Tables named: Books and Borrowers.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Sensible fields, e.g. ISBN, Title for Books; Name, BorrowerID for Borrowers.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Primary keys, e.g. BookID and BorrowerID.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) A Loans table or foreign key links BorrowerID to Books via issue records.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) One borrower can borrow many books — a one-to-many link avoids duplicating borrower data.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Books + Borrowers with fields (b) BookID/BorrowerID linked by foreign key",
              },
            },
            {
              id: "ecs11-u10-dbf-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A company currently stores its 50,000 customer orders in a single spreadsheet.",
              parts: [
                { label: "a", prompt: "Give three advantages of moving to a database management system.", marks: 4 },
                { label: "b", prompt: "Give two disadvantages or limitations of using a DBMS.", marks: 2 },
                { label: "c", prompt: "Explain how primary and foreign keys reduce data duplication.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "DBMS vs flat file", statement: "Structured storage wins at scale." }],
                steps: [
                  { reasoning: "(a) Less data duplication — each fact stored once.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Faster searching, sorting and reporting on large datasets.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Multiple users can access data concurrently and securely.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Integrity rules and backups protect data quality.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Higher cost — software licences and specialist skills needed.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) More complex to set up and maintain than a spreadsheet.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(c) A primary key uniquely identifies a record so it need only be stored once.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) A foreign key links tables by reference instead of copying the data.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Updating a record in one place updates it everywhere it is referenced.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) This avoids update anomalies where copies become inconsistent.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) efficiency, integrity, sharing (b) cost, complexity (c) keys store facts once",
                commonErrors: ["Claiming a spreadsheet is always worse — it is fine for small, simple data."],
              },
            },
          ],
        },
        {
          id: "ecs11-u10-db-relational", title: "The relational model and data integrity",
          skill: "Explain relationships, constraints and integrity in relational databases.",
          sections: [
            { heading: "Entities, attributes and relationships", body: "An entity is a real-world object (Customer, Order) represented as a table; its attributes are the fields. Relationships link tables: one-to-one, one-to-many (most common — e.g. one customer has many orders) and many-to-many (which needs a linking or junction table to avoid duplication). Entity-relationship (ER) diagrams show entities and the relationships between them." },
            { heading: "Integrity constraints and anomalies", body: "Entity integrity: a primary key cannot be null or duplicated. Referential integrity: every foreign key value must match an existing primary key or be null, preventing orphaned records. Domain integrity: field values must be of the correct type and within allowed ranges.\n\nRedundancy — storing the same fact in several places — causes update, insertion and deletion anomalies. Normalisation reduces redundancy (covered in lesson 10-3). Transactions keep data consistent when changes span several tables." },
          ],
          keyFormulas: [
            { name: "One-to-many", statement: "One record on the 'one' side relates to many on the 'many' side" },
            { name: "Referential integrity", statement: "Every foreign key must match an existing primary key or be null" },
          ],
          workedExample: {
            problem: "A foreign key in an Orders table contains a CustomerID that does not exist in the Customers table. What rule is broken?",
            solution: "Referential integrity — the foreign key must reference a valid primary key (or be null).",
          },
          questions: [
            {
              id: "ecs11-u10-dbr-q1", difficulty: "foundation", totalMarks: 2,
              stem: "In a one-to-many relationship, how many records on the 'one' side can relate to records on the 'many' side?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Many" },
                { id: "b", text: "One" },
                { id: "c", text: "Zero" },
                { id: "d", text: "Two" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "One-to-many", statement: "Single parent, multiple children." }],
                steps: [{ reasoning: "One-to-many: one record relates to many.", marks: 2, markCode: "AO1" }],
                finalAnswer: "One",
              },
            },
            {
              id: "ecs11-u10-dbr-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is referential integrity?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Referential integrity", statement: "Valid foreign key references." }],
                steps: [
                  { reasoning: "Every foreign key value must match an existing primary key in the referenced table.", marks: 1, markCode: "AO1" },
                  { reasoning: "Alternatively the foreign key may be null — this prevents orphaned records.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Foreign keys must match a real primary key or be null.",
              },
            },
            {
              id: "ecs11-u10-dbr-q3", difficulty: "core", totalMarks: 3,
              stem: "Give one example each of entity integrity and domain integrity being enforced.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Integrity constraints", statement: "Rules keeping data valid." }],
                steps: [
                  { reasoning: "Entity integrity: a duplicate primary key is rejected, e.g. two rows with the same StudentID.", marks: 1, markCode: "AO1" },
                  { reasoning: "Domain integrity: a field value outside its allowed type/range is rejected, e.g. Age = 'abc' or Marks = 150.", marks: 1, markCode: "AO1" },
                  { reasoning: "Both are enforced automatically by the DBMS at entry.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "PK uniqueness enforced; field type/range enforced.",
              },
            },
            {
              id: "ecs11-u10-dbr-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain how a linking table solves a many-to-many relationship, using Students and Modules as an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Junction table", statement: "Resolves many-to-many." }],
                steps: [
                  { reasoning: "Many students take many modules, so the relationship cannot be stored directly in either table.", marks: 1, markCode: "AO1" },
                  { reasoning: "A linking table such as Enrolments holds StudentID and ModuleID for each pairing.", marks: 1, markCode: "AO1" },
                  { reasoning: "Each row records one student-module enrolment.", marks: 1, markCode: "AO1" },
                  { reasoning: "Foreign keys to both tables preserve referential integrity without duplicating student or module data.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Enrolments(StudentID, ModuleID) links the two tables.",
              },
            },
            {
              id: "ecs11-u10-dbr-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A school is designing a database for students and their exam results.",
              parts: [
                { label: "a", prompt: "State two integrity constraints a DBMS can enforce automatically.", marks: 2 },
                { label: "b", prompt: "Explain what an update anomaly is and how normalisation helps prevent it.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Constraints and anomalies", statement: "Rules vs redundancy." }],
                steps: [
                  { reasoning: "(a) Entity integrity — primary key must be unique and not null.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Referential integrity — foreign keys must match existing primary keys (or be null).", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) An update anomaly occurs when the same fact is stored in several places and only some copies are updated, causing inconsistency.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) It leads to contradictory data, e.g. a student's address updated in one table but not another.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Normalisation removes redundancy so each fact is stored once and updated once.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) PK uniqueness, FK validity (b) inconsistency from duplicated data, fixed by normalising",
              },
            },
            {
              id: "ecs11-u10-dbr-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A hospital database stores patient details and their appointments.",
              parts: [
                { label: "a", prompt: "Describe the relationship between Patients and Appointments and state a suitable primary key for each table.", marks: 3 },
                { label: "b", prompt: "Explain two ways the DBMS can protect data integrity.", marks: 3 },
                { label: "c", prompt: "Explain why storing the patient name and address in every appointment record would be poor design.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Relational design", statement: "Link, don't duplicate." }],
                steps: [
                  { reasoning: "(a) One patient can have many appointments — a one-to-many relationship.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Patients primary key: PatientID.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Appointments primary key: AppointmentID, with PatientID as foreign key.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Constraints such as NOT NULL, UNIQUE and CHECK reject invalid entries automatically.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Referential integrity checks ensure appointment PatientIDs exist in Patients.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Transactions ensure multi-table changes complete fully or not at all.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) The patient's details would be duplicated on every appointment row.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) This wastes storage and creates update anomalies if the address changes.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) A foreign key to a single Patients record keeps one authoritative copy.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Queries can still retrieve the details by joining the tables when needed.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) one-to-many, PatientID/AppointmentID (b) constraints, transactions (c) duplication and anomalies avoided by FK",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u10-databases-intro-notes", title: "Databases — introduction notes",
      summary: "Relational databases store data in linked tables; keys identify records and enforce integrity.",
      sections: [
        { heading: "Key idea", body: "A DBMS manages organised data; tables of records and fields replace flat files at scale." },
        { heading: "Keys", body: "Primary key = unique row identifier; foreign key = link to another table's primary key." },
        { heading: "Integrity", body: "Entity, referential and domain constraints keep data valid and consistent." },
      ],
    },
  },
  {
    file: "lesson-10-2.ts", exportName: "lesson102",
    lesson: {
      id: "ecs11-u10-lesson-10-2", code: "10-2",
      title: "Querying Databases with SQL",
      goal: "I CAN write basic SQL queries to select, filter, sort and summarise database data.",
      standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Databases", "4CP1: SQL — SELECT, WHERE, ORDER BY, aggregates, joins"],
      vocabulary: [
        { term: "SQL", definition: "Structured Query Language — the standard language for querying relational databases." },
        { term: "Query", definition: "A request for data from a database, returning a result set." },
        { term: "SELECT", definition: "SQL keyword listing the fields to be returned." },
        { term: "WHERE", definition: "Clause filtering which rows are returned." },
        { term: "ORDER BY", definition: "Clause sorting results by a field, ASC or DESC." },
        { term: "Aggregate function", definition: "Function summarising many rows, e.g. COUNT, SUM, AVG, MIN, MAX." },
        { term: "GROUP BY", definition: "Clause collecting rows into groups so aggregates run per group." },
      ],
      concepts: [
        {
          id: "ecs11-u10-sql-basics", title: "SELECT, WHERE and ordering",
          skill: "Write basic SQL queries at IGCSE level.",
          sections: [
            { heading: "The SELECT statement", body: "SQL is the standard language for relational databases. The basic form is SELECT field1, field2 FROM TableName; using SELECT * returns all fields.\n\nThe WHERE clause filters rows using operators =, <>, <, >, <=, >=, LIKE (with % matching any sequence of characters) and IS NULL. Conditions combine with AND (both must be true) and OR (either may be true). ORDER BY field ASC or DESC sorts the result set. Queries only read data — they do not change the table." },
            { heading: "Writing correct queries", body: "Always name the correct table in FROM and use exact field names. String values go in single quotes, e.g. WHERE Genre = 'Horror'. LIKE 'A%' finds values starting with A; LIKE '%son' finds values ending in 'son'. Combine filters carefully: AND has higher priority than OR, so use brackets when unsure." },
          ],
          keyFormulas: [
            { name: "SELECT", statement: "SELECT fields FROM table WHERE condition ORDER BY field" },
            { name: "LIKE", statement: "% matches any sequence of characters" },
            { name: "Logical operators", statement: "AND = both true; OR = either true" },
          ],
          workedExample: {
            problem: "Write SQL to list the names of students in Form '11B' sorted by name.",
            solution: "SELECT Name FROM Students WHERE Form = '11B' ORDER BY Name ASC;",
          },
          questions: [
            {
              id: "ecs11-u10-sqb-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which SQL keyword filters which rows are returned?",
              response: { type: "mcq", choices: [
                { id: "a", text: "SELECT" },
                { id: "b", text: "FROM" },
                { id: "c", text: "WHERE" },
                { id: "d", text: "ORDER BY" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "WHERE", statement: "Row filter clause." }],
                steps: [{ reasoning: "WHERE filters rows; SELECT chooses fields; ORDER BY sorts.", marks: 2, markCode: "AO1" }],
                finalAnswer: "WHERE",
              },
            },
            {
              id: "ecs11-u10-sqb-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Write the SQL to select all fields from a table called Products.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "SELECT *", statement: "All fields from a table." }],
                steps: [
                  { reasoning: "SELECT * returns every field.", marks: 1, markCode: "AO1" },
                  { reasoning: "FROM Products names the table.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "SELECT * FROM Products;",
              },
            },
            {
              id: "ecs11-u10-sqb-q3", difficulty: "core", totalMarks: 3,
              stem: "Write SQL to list the titles of books in a Library table where the genre is 'Sci-Fi'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "SELECT with WHERE", statement: "Filter rows by condition." }],
                steps: [
                  { reasoning: "SELECT Title FROM Library chooses the right fields and table.", marks: 1, markCode: "AO1" },
                  { reasoning: "WHERE Genre = 'Sci-Fi' filters to the required rows, string in single quotes.", marks: 1, markCode: "AO1" },
                  { reasoning: "Full statement: SELECT Title FROM Library WHERE Genre = 'Sci-Fi';", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "SELECT Title FROM Library WHERE Genre = 'Sci-Fi';",
              },
            },
            {
              id: "ecs11-u10-sqb-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain the difference between AND and OR in a WHERE clause, with an example for each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "AND / OR", statement: "Boolean row filters." }],
                steps: [
                  { reasoning: "AND requires both conditions to be true for a row to be returned.", marks: 1, markCode: "AO1" },
                  { reasoning: "OR requires at least one condition to be true.", marks: 1, markCode: "AO1" },
                  { reasoning: "AND example: WHERE Price > 5 AND Stock > 0 returns only in-stock items over 5.", marks: 1, markCode: "AO2" },
                  { reasoning: "OR example: WHERE Genre = 'Horror' OR Genre = 'Thriller' returns either genre.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "AND = both true; OR = either true.",
              },
            },
            {
              id: "ecs11-u10-sqb-q5", difficulty: "challenge", totalMarks: 5,
              stem: "An Orders table has fields OrderID, Customer, Total.",
              parts: [
                { label: "a", prompt: "Write SQL to list orders with Total over 100, highest first.", marks: 3 },
                { label: "b", prompt: "Write SQL to list customers whose name begins with 'J'.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Filtering and sorting", statement: "WHERE + ORDER BY." }],
                steps: [
                  { reasoning: "(a) SELECT OrderID, Customer, Total FROM Orders.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) WHERE Total > 100 filters correctly.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) ORDER BY Total DESC puts the highest first.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) SELECT Customer FROM Orders.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) WHERE Customer LIKE 'J%' matches names starting with J.", marks: 1, markCode: "AO1", part: "b" },
                ],
                finalAnswer: "(a) ... WHERE Total > 100 ORDER BY Total DESC (b) ... WHERE Customer LIKE 'J%'",
              },
            },
            {
              id: "ecs11-u10-sqb-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A Movies table has fields Title, Year, Genre, Rating.",
              parts: [
                { label: "a", prompt: "Write SQL to list all movies from 2020 onwards in the Horror genre.", marks: 3 },
                { label: "b", prompt: "Explain what SELECT * FROM Movies WHERE Rating > 4 ORDER BY Year DESC returns.", marks: 3 },
                { label: "c", prompt: "The table is very large. Suggest two ways to make the query in part (a) more efficient or the results more useful.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Complex queries", statement: "Combined clauses and optimisation." }],
                steps: [
                  { reasoning: "(a) SELECT Title, Year, Genre FROM Movies.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) WHERE Year >= 2020 AND Genre = 'Horror' combines both conditions.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) AND applies to both conditions correctly (no OR ambiguity).", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) SELECT * returns all fields for every qualifying row.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Only movies with Rating > 4 are returned.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Results are sorted newest year first due to ORDER BY Year DESC.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Select only the needed fields instead of * to reduce data transferred.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Add indexes on Year and Genre so the DBMS finds rows faster.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Add a secondary sort or LIMIT to control output size.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Ensure data types and values are consistent so filters behave predictably.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) SELECT ... WHERE Year >= 2020 AND Genre = 'Horror' (b) filtered, newest-first all fields (c) indexes, narrow fields",
              },
            },
          ],
        },
        {
          id: "ecs11-u10-sql-aggregate", title: "Aggregates, grouping and joins",
          skill: "Use aggregate functions, GROUP BY and joins to analyse database data.",
          sections: [
            { heading: "Aggregate functions and GROUP BY", body: "Aggregate functions summarise many rows into one value: COUNT counts rows, SUM adds numeric values, AVG gives the mean, MIN and MAX return extremes. COUNT(*) counts all rows; COUNT(field) counts non-null values.\n\nGROUP BY field collects rows sharing a value so aggregates run per group: SELECT Genre, COUNT(*) FROM Movies GROUP BY Genre. HAVING filters the groups themselves, e.g. HAVING COUNT(*) > 5 — it works like WHERE but for grouped results." },
            { heading: "Joins", body: "A join combines rows from two tables using a shared key. INNER JOIN returns only rows with a match in both tables: SELECT ... FROM A INNER JOIN B ON A.key = B.key. LEFT JOIN keeps every row from the left table plus matches from the right, showing NULL where there is no match.\n\nJoins let you query related data without copying it — the key benefit of relational design." },
          ],
          keyFormulas: [
            { name: "COUNT", statement: "COUNT(*) = number of rows; COUNT(field) = non-null values" },
            { name: "GROUP BY", statement: "SELECT field, COUNT(*) FROM table GROUP BY field" },
            { name: "JOIN", statement: "FROM A INNER JOIN B ON A.fk = B.pk" },
          ],
          workedExample: {
            problem: "Write SQL to show each genre and the number of movies in it.",
            solution: "SELECT Genre, COUNT(*) AS Total FROM Movies GROUP BY Genre;",
          },
          questions: [
            {
              id: "ecs11-u10-sqa-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Which SQL function returns the number of rows?",
              response: { type: "mcq", choices: [
                { id: "a", text: "SUM" },
                { id: "b", text: "COUNT" },
                { id: "c", text: "AVG" },
                { id: "d", text: "MAX" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "COUNT", statement: "Counts rows." }],
                steps: [{ reasoning: "COUNT returns the number of rows; SUM adds, AVG averages, MAX finds the largest.", marks: 2, markCode: "AO1" }],
                finalAnswer: "COUNT",
              },
            },
            {
              id: "ecs11-u10-sqa-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What does the GROUP BY clause do in SQL?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "GROUP BY", statement: "Groups rows for aggregation." }],
                steps: [
                  { reasoning: "It groups rows that share the same value in the named field.", marks: 1, markCode: "AO1" },
                  { reasoning: "Aggregate functions are then calculated once per group rather than for the whole table.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Groups rows so aggregates run per group.",
              },
            },
            {
              id: "ecs11-u10-sqa-q3", difficulty: "core", totalMarks: 3,
              stem: "Write SQL to find the average rating of all movies in a Movies table with a Rating field.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "AVG", statement: "Mean of a numeric field." }],
                steps: [
                  { reasoning: "AVG(Rating) computes the mean rating.", marks: 1, markCode: "AO1" },
                  { reasoning: "FROM Movies names the table.", marks: 1, markCode: "AO1" },
                  { reasoning: "Full statement: SELECT AVG(Rating) FROM Movies;", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "SELECT AVG(Rating) FROM Movies;",
              },
            },
            {
              id: "ecs11-u10-sqa-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain the difference between INNER JOIN and LEFT JOIN.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Join types", statement: "Matching rules." }],
                steps: [
                  { reasoning: "INNER JOIN returns only rows that have a match in both tables.", marks: 1, markCode: "AO1" },
                  { reasoning: "LEFT JOIN keeps every row from the left table even without a match.", marks: 1, markCode: "AO1" },
                  { reasoning: "Unmatched rows from the right table appear as NULL in a LEFT JOIN.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: INNER JOIN shows only students who are enrolled; LEFT JOIN shows all students including those with no enrolment.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "INNER = matches only; LEFT = all left rows + matches.",
              },
            },
            {
              id: "ecs11-u10-sqa-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A Movies table has fields Title and Rating.",
              parts: [
                { label: "a", prompt: "Write SQL to find the highest-rated movie's title and rating.", marks: 2 },
                { label: "b", prompt: "Write SQL showing each genre with its movie count, but only for genres with more than 5 movies.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Sorting and grouping", statement: "ORDER BY + GROUP BY/HAVING." }],
                steps: [
                  { reasoning: "(a) SELECT Title, Rating FROM Movies ORDER BY Rating DESC and take the first row (or LIMIT 1).", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) DESC ensures the highest rating is first.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) SELECT Genre, COUNT(*) FROM Movies.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) GROUP BY Genre computes a count per genre.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) HAVING COUNT(*) > 5 filters the groups after aggregation.", marks: 1, markCode: "AO1", part: "b" },
                ],
                finalAnswer: "(a) ORDER BY Rating DESC LIMIT 1 (b) GROUP BY Genre HAVING COUNT(*) > 5",
              },
            },
            {
              id: "ecs11-u10-sqa-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A school database has Students(StudentID, Name) and Enrolments(StudentID, Module).",
              parts: [
                { label: "a", prompt: "Write SQL listing each student's name with their module using a join.", marks: 3 },
                { label: "b", prompt: "Explain why StudentID appears in both tables.", marks: 3 },
                { label: "c", prompt: "The school wants the number of students enrolled per module. Describe the query and one limitation.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Joins and aggregation", statement: "Combine and summarise related tables." }],
                steps: [
                  { reasoning: "(a) SELECT Name, Module FROM Students INNER JOIN Enrolments ON Students.StudentID = Enrolments.StudentID.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(a) INNER JOIN with the correct ON condition linking the keys.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) StudentID is the primary key in Students.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) It is the foreign key in Enrolments linking each enrolment to a student.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) This avoids duplicating student details in every enrolment record.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) SELECT Module, COUNT(*) FROM Enrolments GROUP BY Module.", marks: 2, markCode: "AO1", part: "c" },
                  { reasoning: "(c) HAVING COUNT(*) > n can filter to popular modules.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Limitation: it only counts enrolment records — modules with zero students do not appear, and a student in two modules counts twice for the school total.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) join on StudentID (b) PK/FK link avoids duplication (c) GROUP BY Module with HAVING; zero-enrolment modules hidden",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u10-sql-notes", title: "SQL — notes",
      summary: "SELECT filters fields, WHERE filters rows, ORDER BY sorts; aggregates summarise, GROUP BY groups, joins combine tables.",
      sections: [
        { heading: "Key idea", body: "SQL reads data without changing it — SELECT chooses fields, WHERE chooses rows." },
        { heading: "Aggregates", body: "COUNT, SUM, AVG, MIN, MAX summarise; GROUP BY applies them per group; HAVING filters groups." },
        { heading: "Joins", body: "INNER JOIN = matches only; LEFT JOIN = all left rows plus matches." },
      ],
    },
  },
  {
    file: "lesson-10-3.ts", exportName: "lesson103",
    lesson: {
      id: "ecs11-u10-lesson-10-3", code: "10-3",
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
          id: "ecs11-u10-db-norm", title: "Normalisation",
          skill: "Normalise tables to 1NF, 2NF and 3NF at IGCSE level.",
          sections: [
            { heading: "Why normalise?", body: "Normalisation organises data to minimise redundancy and the anomalies it causes. 1NF (first normal form): each field contains atomic values — no lists, repeating groups or multiple facts in one cell. 2NF: satisfies 1NF and every non-key field depends on the whole primary key — no partial dependency, which matters when the key is a combination of fields. 3NF: satisfies 2NF and no non-key field depends on another non-key field — there is no transitive dependency." },
            { heading: "Example walkthrough", body: "An unnormalised Orders table might hold OrderID, CustomerName, CustomerCity, Product, Qty — customer details repeated on every order (an update anomaly risk) and possibly several products crammed into one field (violating 1NF).\n\nThe normalised design splits entities: Customers(CustomerID, Name, City) and Orders(OrderID, CustomerID, Product, Qty). Each table has one purpose and they link through keys, so each fact is stored once." },
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
          questions: [
            {
              id: "ecs11-u10-nf-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does first normal form (1NF) require?",
              response: { type: "mcq", choices: [
                { id: "a", text: "No duplicate rows anywhere" },
                { id: "b", text: "Atomic values in each field" },
                { id: "c", text: "No foreign keys" },
                { id: "d", text: "Exactly three tables" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "1NF", statement: "Atomic values." }],
                steps: [{ reasoning: "1NF requires each field to hold a single atomic value — no lists or repeating groups.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Atomic values in each field",
              },
            },
            {
              id: "ecs11-u10-nf-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is a transitive dependency?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Transitive dependency", statement: "Non-key depends on non-key." }],
                steps: [
                  { reasoning: "A non-key field depends on another non-key field rather than directly on the primary key.", marks: 1, markCode: "AO1" },
                  { reasoning: "Example: City depends on Postcode, which depends on CustomerID — so City should move to its own table for 3NF.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Non-key field depending on another non-key field.",
              },
            },
            {
              id: "ecs11-u10-nf-q3", difficulty: "core", totalMarks: 3,
              stem: "Give one benefit of normalising a database.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Normalisation", statement: "Less redundancy, fewer anomalies." }],
                steps: [
                  { reasoning: "It reduces data redundancy — each fact is stored only once.", marks: 1, markCode: "AO1" },
                  { reasoning: "This prevents update, insertion and deletion anomalies.", marks: 1, markCode: "AO1" },
                  { reasoning: "It makes the database easier to maintain and keeps data consistent.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Less redundancy and fewer data anomalies.",
              },
            },
            {
              id: "ecs11-u10-nf-q4", difficulty: "core", totalMarks: 4,
              stem: "A table has fields OrderID, Product, Qty, CustomerName, CustomerPostcode. Identify two normalisation problems and how to fix them.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Splitting tables", statement: "One entity per table." }],
                steps: [
                  { reasoning: "Problem: CustomerName and CustomerPostcode are repeated on every order row — redundancy.", marks: 1, markCode: "AO1" },
                  { reasoning: "Fix: move customer details to a Customers table and link via a CustomerID foreign key.", marks: 1, markCode: "AO1" },
                  { reasoning: "Problem: if a field ever holds multiple products or values it would break 1NF.", marks: 1, markCode: "AO1" },
                  { reasoning: "Fix: ensure one product per row and use keys to relate OrderID to each record.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Extract Customers table; keep one atomic value per field.",
              },
            },
            {
              id: "ecs11-u10-nf-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A school database links Students, Courses and Tutors.",
              parts: [
                { label: "a", prompt: "State the three normal forms and what each adds.", marks: 3 },
                { label: "b", prompt: "A table Stores(StudentID, StudentName, CourseID, CourseTutor). Explain why CourseTutor may violate 3NF.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Normal forms", statement: "1NF atomic, 2NF whole key, 3NF no transitive." }],
                steps: [
                  { reasoning: "(a) 1NF: atomic values only, one fact per field.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) 2NF: every non-key field depends on the whole (possibly composite) primary key.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) 3NF: no non-key field depends on another non-key field.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) CourseTutor depends on CourseID, not on the student — a transitive dependency.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Fix: move CourseTutor to a Courses table keyed by CourseID.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) 1NF atomic, 2NF whole-key, 3NF no transitive (b) tutor depends on course, move to Courses table",
              },
            },
            {
              id: "ecs11-u10-nf-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A company stores orders in one table with fields OrderNo, Date, CustomerName, CustomerAddress, ProductCode, ProductName, Qty.",
              parts: [
                { label: "a", prompt: "List three normalisation problems in this design.", marks: 3 },
                { label: "b", prompt: "Describe a normalised structure — list the tables and their key fields.", marks: 4 },
                { label: "c", prompt: "Explain how this design prevents an update anomaly.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Normalisation in practice", statement: "Split entities, link with keys." }],
                steps: [
                  { reasoning: "(a) CustomerName and CustomerAddress repeat on every order — duplication.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) ProductName repeats for every order of the same product.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Orders, Customers and Products are different entities forced into one table.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Customers(CustomerID, CustomerName, CustomerAddress).", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Products(ProductCode, ProductName).", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Orders(OrderNo, Date, CustomerID, ProductCode, Qty) with foreign keys linking to the other tables.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Each table stores one entity with its own primary key.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) A changed address is updated once in Customers, not on hundreds of order rows.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Every order sees the new address through the foreign key — no inconsistent copies.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) This eliminates the update anomaly that the single-table design would suffer.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) duplicated customer/product data, mixed entities (b) Customers, Products, Orders linked by keys (c) single update point prevents inconsistency",
              },
            },
          ],
        },
        {
          id: "ecs11-u10-db-security", title: "Database security and integrity",
          skill: "Describe how databases are protected using users, constraints, transactions and backups.",
          sections: [
            { heading: "Access control and constraints", body: "A DBMS protects data through user accounts with usernames and passwords, and privileges that limit what each user may do — some can only SELECT, others can insert or update, few can delete. Roles and groups make administration easier.\n\nConstraints enforce integrity at the point of entry: NOT NULL, UNIQUE, CHECK (type and range), DEFAULT and foreign key rules. SQL injection is an attack where malicious input alters a query — it is prevented by parameterised queries, input validation and the principle of least privilege." },
            { heading: "Transactions and recovery", body: "A transaction is a logical unit of work treated as all-or-nothing — e.g. a bank transfer debits one account and credits another. The ACID properties guarantee correct behaviour: Atomicity (all steps or none), Consistency (valid state to valid state), Isolation (concurrent transactions do not interfere) and Durability (committed changes survive failure).\n\nBackups and transaction logs allow recovery after crashes or corruption, while locking and concurrency control prevent lost updates when many users work at once." },
          ],
          keyFormulas: [
            { name: "ACID", statement: "Atomicity, Consistency, Isolation, Durability" },
            { name: "Least privilege", statement: "Grant each user only the rights they need" },
          ],
          workedExample: {
            problem: "Two users update the same record at the same time. Which ACID property prevents one update being silently lost?",
            solution: "Isolation — concurrent transactions are kept separate, typically via locking, so each commits in turn.",
          },
          questions: [
            {
              id: "ecs11-u10-dbs-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does a SQL injection attack do?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Steals database backups" },
                { id: "b", text: "Inserts malicious input that alters a query" },
                { id: "c", text: "Guesses user passwords" },
                { id: "d", text: "Overloads the database server" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "SQL injection", statement: "Malicious input alters queries." }],
                steps: [{ reasoning: "SQL injection exploits unsanitised input to change the intended query.", marks: 2, markCode: "AO1" }],
                finalAnswer: "Malicious input altering queries",
                commonErrors: ["Confusing with a denial-of-service attack."],
              },
            },
            {
              id: "ecs11-u10-dbs-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is a database transaction?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Transaction", statement: "All-or-nothing unit of work." }],
                steps: [
                  { reasoning: "A transaction is a logical unit of work on the database, e.g. transferring money between accounts.", marks: 1, markCode: "AO1" },
                  { reasoning: "It is treated as all-or-nothing — every step succeeds or none are applied.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "An all-or-nothing unit of database work.",
              },
            },
            {
              id: "ecs11-u10-dbs-q3", difficulty: "core", totalMarks: 3,
              stem: "Name three ACID properties and state what each guarantees.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "ACID", statement: "Transaction guarantees." }],
                steps: [
                  { reasoning: "Atomicity — all steps of a transaction complete or none do.", marks: 1, markCode: "AO1" },
                  { reasoning: "Consistency — the database moves from one valid state to another.", marks: 1, markCode: "AO1" },
                  { reasoning: "Durability — committed changes survive system failure (Isolation — concurrent transactions do not interfere).", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Atomicity, consistency, durability (and isolation).",
              },
            },
            {
              id: "ecs11-u10-dbs-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain two ways a DBMS restricts who can access data.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Access control", statement: "Authentication + authorisation." }],
                steps: [
                  { reasoning: "Authentication: user accounts with usernames and passwords verify identity before access.", marks: 1, markCode: "AO1" },
                  { reasoning: "Authorisation: privileges and roles limit operations — e.g. read-only for some users, no DELETE for others.", marks: 1, markCode: "AO1" },
                  { reasoning: "Encryption protects sensitive stored data even if files are stolen.", marks: 1, markCode: "AO2" },
                  { reasoning: "Audit logs record who accessed or changed data, deterring misuse.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Accounts/passwords plus privileges/roles; encryption and logs add protection.",
              },
            },
            {
              id: "ecs11-u10-dbs-q5", difficulty: "challenge", totalMarks: 5,
              stem: "A bank database processes account transfers.",
              parts: [
                { label: "a", prompt: "What is a foreign key constraint and what does it prevent?", marks: 2 },
                { label: "b", prompt: "Describe how a transaction keeps a bank transfer consistent.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Constraints and transactions", statement: "Validity + atomicity." }],
                steps: [
                  { reasoning: "(a) A foreign key must match an existing primary key or be null.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) It prevents orphaned records linking to non-existent rows.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) The debit and credit are grouped into a single transaction.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Atomicity means both succeed or neither is applied — money cannot vanish.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Consistency ensures total money is preserved between valid states.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) FK must reference a real PK — prevents orphans (b) debit+credit atomic and consistent",
              },
            },
            {
              id: "ecs11-u10-dbs-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A school database stores confidential exam results accessed by teachers and administrators.",
              parts: [
                { label: "a", prompt: "Give two reasons access should be restricted and explain how.", marks: 4 },
                { label: "b", prompt: "Explain what a CHECK constraint could enforce on a Marks field.", marks: 3 },
                { label: "c", prompt: "A power cut occurs mid-update. Explain how backups, logs and ACID properties allow recovery.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Database protection", statement: "Access, constraints, recovery." }],
                steps: [
                  { reasoning: "(a) Privacy — exam results are personal data that must be protected.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Prevent tampering — results must not be altered without authorisation.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) User accounts with passwords authenticate each person.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Privileges limit teachers to their own classes and stop them deleting records.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) CHECK (Marks >= 0 AND Marks <= 100) restricts values to a valid range.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Invalid entries such as -5 or 250 are rejected automatically at entry.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) This protects data integrity without relying on users checking manually.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Atomicity rolls back the incomplete transaction so no half-updated data remains.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Durability ensures committed work before the cut is not lost.", marks: 1, markCode: "AO1", part: "c" },
                  { reasoning: "(c) Backups restore the last good state and logs replay committed transactions.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) privacy + tampering, via accounts/privileges (b) CHECK enforces 0-100 (c) rollback + backup + logs",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u10-db-design-notes", title: "Database design — notes",
      summary: "Normalise to remove redundancy (1NF atomic, 2NF whole key, 3NF no transitive); protect data with constraints, ACID and backups.",
      sections: [
        { heading: "Key idea", body: "Each fact stored once, linked by keys — no duplication, no anomalies." },
        { heading: "Normal forms", body: "1NF atomic values; 2NF no partial dependency; 3NF no transitive dependency." },
        { heading: "Protection", body: "ACID transactions, access privileges and backups keep data safe and recoverable." },
      ],
    },
  },
];
