import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cilc-u3-lesson-3-3",
  code: "3-3",
  title: "Stage 9 Checkpoint — Databases, Security and Projects",
  goal: "I CAN apply databases, cyber security and project lifecycle skills at Stage 9 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Computing 0860 Checkpoint Stage 9: databases, security",
  ],
  stage: 9,
  vocabulary: [
    { term: "Database", definition: "Organised collection of related data." },
    { term: "Query", definition: "Request to retrieve or manipulate data." },
    {
      term: "Phishing",
      definition: "Fraudulent attempt to steal credentials.",
    },
    {
      term: "Encryption",
      definition: "Scrambling data so only authorised parties can read it.",
    },
    {
      term: "Digital footprint",
      definition: "Permanent record of online activity.",
    },
  ],
  concepts: [
    {
      id: "cilc-u3-s9-databases",
      title: "Stage 9 databases checkpoint",
      skill: "Understand tables, fields, records and simple queries.",
      lesson: {
        sections: [
          {
            heading: "Databases",
            body: "A database stores data in tables: fields are columns (attributes), records are rows (entries). Queries like SELECT filter and sort data — understanding this structure underpins real database use.",
          },
        ],
        keyFormulas: [
          {
            name: "Table structure",
            statement: "Fields = columns; Records = rows",
          },
          {
            name: "Query",
            statement: "SELECT fields FROM table WHERE condition",
          },
        ],
        workedExample: {
          problem:
            "Table 'students' has fields name, year, house. How many records if there are 120 students?",
          solution: "120 records — each student is one row.",
        },
      },
      questions: [
        {
          id: "cilc-u3-s9-d-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a database table, what is a record?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A column heading" },
              { id: "b", text: "A query" },
              { id: "c", text: "The whole table" },
              { id: "d", text: "A single row of data" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Record",
                statement: "One complete set of field values — a row.",
              },
            ],
            steps: [
              {
                reasoning: "Records are rows; fields are columns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A single row of data",
          },
        },
        {
          id: "cilc-u3-s9-d-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'books' table has fields: title, author, year. Write a query to find all books published after 2000.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Query",
                statement: "SELECT ... FROM ... WHERE condition.",
              },
            ],
            steps: [
              {
                reasoning: "SELECT * FROM books WHERE year > 2000.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "SELECT * FROM books WHERE year > 2000",
          },
        },
        {
          id: "cilc-u3-s9-d-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why databases use separate fields for name and date of birth instead of one combined field 'name and DOB'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Normalisation",
                statement:
                  "Atomic fields allow sorting, searching and validation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Separate fields can be sorted and searched independently.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Validation rules can check formats, e.g. valid dates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Updates don't require editing combined text.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Atomic fields enable sorting, searching, validation and easier updates",
          },
        },
        {
          id: "cilc-u3-s9-d-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school stores student data in a spreadsheet that three teachers edit simultaneously. Give two problems with this and explain how a database system would help.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Data integrity",
                statement:
                  "Central control prevents conflicting edits and data loss.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Simultaneous edits can overwrite each other — last save wins.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "No central validation: typos and inconsistent formats spread.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A database enforces permissions, validation and transaction control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiple users can query safely while data stays consistent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Spreadsheet edits conflict and lack validation; databases add permissions, constraints and consistency",
          },
        },
        {
          id: "cilc-u3-s9-d-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a database table, what is a field?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A saved query" },
              { id: "b", text: "A complete database" },
              { id: "c", text: "A column heading" },
              { id: "d", text: "A single row of data" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Field",
                statement: "A column describing one attribute of the data.",
              },
            ],
            steps: [
              {
                reasoning: "Fields are columns; records are rows.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A column heading",
          },
        },
        {
          id: "cilc-u3-s9-d-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A students table has fields name, year and house. Give (a) the number of fields and (b) the number of records if there are 120 students.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 120 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Table structure",
                statement: "Fields are columns; each student is one record.",
              },
            ],
            steps: [
              {
                reasoning: "There are three field names: name, year and house.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Each of the 120 students is stored as one row.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "3 fields; 120 records",
          },
        },
        {
          id: "cilc-u3-s9-d-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a database query do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It creates a new computer" },
              { id: "b", text: "It replaces the need for tables" },
              { id: "c", text: "It stores every field as one value" },
              {
                id: "d",
                text: "It retrieves, filters or updates selected data",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Query",
                statement:
                  "A request to retrieve or manipulate data in a database.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Queries select or change records according to conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "It retrieves, filters or updates selected data",
          },
        },
        {
          id: "cilc-u3-s9-d-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of SELECT * FROM books WHERE year > 2000 filters the records?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SELECT" },
              { id: "b", text: "books" },
              { id: "c", text: "FROM books" },
              { id: "d", text: "WHERE year > 2000" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Query",
                statement: "WHERE supplies the condition for filtering.",
              },
            ],
            steps: [
              {
                reasoning: "The WHERE clause selects only matching records.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "WHERE year > 2000",
          },
        },
        {
          id: "cilc-u3-s9-d-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A books table has 4 fields and 80 records. A query returns 25 records. Give (a) the number of fields, (b) the number of records returned and (c) the number of records in the table.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 25 },
              { label: "c", answer: 80 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Query result",
                statement:
                  "A query can return fewer records than the table contains.",
              },
            ],
            steps: [
              {
                reasoning: "The table has 4 fields.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "The query returns 25 records.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "The whole table still contains 80 records.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "4 fields; 25 returned; 80 records in table",
          },
        },
        {
          id: "cilc-u3-s9-d-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is a primary key useful in a database table?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stores the whole table as one value" },
              { id: "b", text: "It makes every field a number" },
              {
                id: "c",
                text: "It uniquely identifies each record"
              },
              { id: "d", text: "It removes the need for queries" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary key",
                statement: "A unique identifier for each record.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A unique key lets the database identify and link records reliably.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "It uniquely identifies each record",
          },
        },
        {
          id: "cilc-u3-s9-d-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write a query to select only the name and email fields from a members table for members whose active field is TRUE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Query",
                statement: "SELECT fields FROM table WHERE condition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SELECT name, email FROM members identifies the required fields and table.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "WHERE active = TRUE limits the result to active members.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The complete query is logically correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "SELECT name, email FROM members WHERE active = TRUE",
          },
        },
        {
          id: "cilc-u3-s9-d-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A members table has fields name, email, joinDate and active. Give (a) the number of fields, (b) the number of records after 3 records are deleted from 50, and (c) the number of fields returned by SELECT name, email FROM members.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 47 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Table structure",
                statement:
                  "Count fields from column names; deleting records reduces rows.",
              },
            ],
            steps: [
              {
                reasoning: "There are four fields.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "50 - 3 = 47 records remain.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "The query selects two fields.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "4 fields; 47 records; 2 fields returned",
          },
        },
        {
          id: "cilc-u3-s9-d-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the WHERE clause in a query do?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Filters records using a condition"
              },
              { id: "b", text: "Deletes all fields" },
              { id: "c", text: "Sorts alphabetically every time" },
              { id: "d", text: "Creates a new table" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Query",
                statement: "WHERE filters records by condition.",
              },
            ],
            steps: [
              {
                reasoning: "WHERE limits which records are selected.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Filters records using a condition",
          },
        },
        {
          id: "cilc-u3-s9-d-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design fields for a library loans table that records which member borrowed which book and when it is due. Choose sensible field names and explain why each is needed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Database design",
                statement: "Use atomic fields that identify each required attribute.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Include memberID or memberName to identify the borrower.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Include bookID or bookTitle to identify the borrowed item.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Include dueDate to record when the book must be returned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Separate fields allow searching, sorting and validation of each value.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "memberID, bookID and dueDate as separate fields support identification and searching",
          },
        },
        {
          id: "cilc-u3-s9-d-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A products table has 6 fields and 45 records. A query returns 12 records and selects 3 fields. Give (a) the number of fields in the table, (b) the number of records in the table and (c) the number of records returned.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 45 },
              { label: "c", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Table structure",
                statement: "Fields describe columns; records are rows.",
              },
            ],
            steps: [
              {
                reasoning: "The table has 6 fields.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "The table has 45 records.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "The query returns 12 records.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "6 fields; 45 records; 12 returned",
          },
        },
        {
          id: "cilc-u3-s9-d-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which data type is most appropriate for storing a student's date of birth in a database?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number only" },
              { id: "b", text: "Boolean" },
              { id: "c", text: "Text only" },
              { id: "d", text: "Date" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data type",
                statement: "Choose a type matching the kind of value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A date type preserves calendar meaning and allows date operations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Date",
          },
        },
      ],
    },
    {
      id: "cilc-u3-s9-security",
      title: "Stage 9 cyber security and projects checkpoint",
      skill:
        "Identify threats and describe responsible digital behaviour and project stages.",
      lesson: {
        sections: [
          {
            heading: "Security and projects",
            body: "Threats include malware, phishing and weak passwords; defences include strong passwords, updates, encryption and caution. Programming projects follow a lifecycle: plan, design, code, test, evaluate.",
          },
        ],
        keyFormulas: [
          {
            name: "Project lifecycle",
            statement: "Plan → design → code → test → evaluate",
          },
          {
            name: "Strong password",
            statement: "Long, mixed characters, unique per account",
          },
        ],
        workedExample: {
          problem:
            "Which is safer: 'password123' or 'Tr0ub4dor&3xtraLong'? Why?",
          solution:
            "The second — length, mixed character types and no dictionary words make it far harder to guess or crack.",
        },
      },
      questions: [
        {
          id: "cilc-u3-s9-s-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is phishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A network protocol" },
              { id: "b", text: "A database query" },
              {
                id: "c",
                text: "Fraudulent messages tricking users into revealing credentials",
              },
              { id: "d", text: "A type of computer virus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phishing",
                statement: "Social-engineering fraud stealing credentials.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Phishing uses fake emails/messages to steal information.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fraudulent messages tricking users into revealing credentials",
          },
        },
        {
          id: "cilc-u3-s9-s-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ways encryption protects data sent over a network.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encryption",
                statement: "Data scrambled so only the key holder can read it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intercepted data appears scrambled without the decryption key.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only the intended recipient with the key can read the original data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Scrambles data in transit; only key holders can decrypt",
          },
        },
        {
          id: "cilc-u3-s9-s-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the stages of the programming project lifecycle in order and state the purpose of the test stage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project lifecycle",
                statement: "Plan, design, code, test, evaluate.",
              },
            ],
            steps: [
              {
                reasoning: "Plan → design → code → test → evaluate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Test stage checks the program against requirements and finds errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Purpose stated: verify correctness before release.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Plan, design, code, test, evaluate; testing verifies the program works correctly",
          },
        },
        {
          id: "cilc-u3-s9-s-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student posts their home address and daily routine on a public profile. Identify two risks and explain two habits that would reduce them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Digital footprint",
                statement: "Online activity is permanent and can be exploited.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Risk: strangers could locate or target the student.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk: permanent digital footprint usable for identity theft or grooming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Habit: keep personal details private and limit audience settings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Habit: think before posting — assume everything is permanent and public.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Risks: being located/targeted and permanent exploitable footprint; habits: privacy settings and cautious posting",
          },
        },
        {
          id: "cilc-u3-s9-s-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is malware?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A network cable" },
              { id: "b", text: "A type of strong password" },
              { id: "c", text: "Software designed to harm or disrupt a system" },
              { id: "d", text: "A database field" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Malware",
                statement: "Malicious software that can damage or steal data.",
              },
            ],
            steps: [
              {
                reasoning: "Malware includes viruses, worms and other harmful programs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Software designed to harm or disrupt a system",
          },
        },
        {
          id: "cilc-u3-s9-s-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A password contains 6 lowercase letters, 4 uppercase letters, 3 digits and 2 symbols. Give (a) the total number of characters and (b) the number of different character types used.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Password strength",
                statement:
                  "Length and mixed character types improve security.",
              },
            ],
            steps: [
              {
                reasoning: "6 + 4 + 3 + 2 = 15 characters.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Lowercase, uppercase, digits and symbols are four types.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "15 characters; 4 types",
          },
        },
        {
          id: "cilc-u3-s9-s-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which password is the strongest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amina2024" },
              { id: "b", text: "Tr0ub4dor&3xtraLong!9" },
              { id: "c", text: "password" },
              { id: "d", text: "12345678" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Strong password",
                statement: "Long, unique and mixed-character credential.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The correct choice is long, mixes character types and avoids obvious details.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tr0ub4dor&3xtraLong!9",
          },
        },
        {
          id: "cilc-u3-s9-s-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which action best protects a user from phishing?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Verify the sender and avoid entering credentials on suspicious pages"
              },
              { id: "b", text: "Disable all updates permanently" },
              { id: "c", text: "Share the password with friends" },
              {
                id: "d",
                text: "Click every link quickly before it expires"
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Phishing defence",
                statement: "Check legitimacy before trusting requests.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Careful verification prevents fake messages from stealing credentials.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Verify the sender and avoid entering credentials on suspicious pages",
          },
        },
        {
          id: "cilc-u3-s9-s-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student posts 3 photos each day for 30 days, and each photo includes 2 personal details. Give (a) the total number of photos posted and (b) the total number of personal details exposed.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 90 },
              { label: "b", answer: 180 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Digital footprint",
                statement:
                  "Repeated posts accumulate into a large permanent record.",
              },
            ],
            steps: [
              {
                reasoning: "3 photos × 30 days = 90 photos.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "90 photos × 2 details = 180 details.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "90 photos; 180 personal details",
          },
        },
        {
          id: "cilc-u3-s9-s-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why does encryption protect data intercepted on a network?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It deletes the sender's account" },
              {
                id: "b",
                text: "The intercepted data appears scrambled without the decryption key"
              },
              { id: "c", text: "It stops packets from being sent" },
              { id: "d", text: "It makes passwords unnecessary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encryption",
                statement: "Data is scrambled so only authorised parties can read it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without the key, intercepted ciphertext is not useful to an attacker.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The intercepted data appears scrambled without the decryption key",
          },
        },
        {
          id: "cilc-u3-s9-s-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how using a different strong password for each account and enabling two-factor authentication reduces the risk of account takeover.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Account security",
                statement:
                  "Unique credentials and extra verification limit damage from one breach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A unique password means one leaked password does not unlock other accounts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Two-factor authentication requires a second proof beyond the password.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An attacker therefore needs both the password and the second factor.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unique passwords contain breaches; two-factor authentication adds another required proof",
          },
        },
        {
          id: "cilc-u3-s9-s-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A project spends 2 days planning, 3 days designing, 4 days coding, 2 days testing and 1 day evaluating. Give (a) the total project time in days, (b) the average time per stage in days, and (c) the number of lifecycle stages used.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 2.4 },
              { label: "c", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project lifecycle",
                statement: "Plan, design, code, test, evaluate.",
              },
            ],
            steps: [
              {
                reasoning: "2 + 3 + 4 + 2 + 1 = 12 days.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "12 / 5 = 2.4 days per stage.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "There are five lifecycle stages.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "12 days; 2.4 days per stage; 5 stages",
          },
        },
        {
          id: "cilc-u3-s9-s-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a digital footprint?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A database table" },
              { id: "b", text: "A network protocol" },
              {
                id: "c",
                text: "The permanent record of a person's online activity"
              },
              { id: "d", text: "A type of computer virus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital footprint",
                statement: "The permanent record of online activity.",
              },
            ],
            steps: [
              {
                reasoning: "Posts, messages and uploads can remain available online.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The permanent record of a person's online activity",
          },
        },
        {
          id: "cilc-u3-s9-s-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student receives an unexpected email claiming their account will be closed unless they enter their password immediately. Describe two risks and explain two responsible actions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Cyber security",
                statement:
                  "Verify requests and protect credentials before acting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Risk: the email may be phishing designed to steal the password.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk: entering credentials could allow account takeover.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Action: do not click links or enter the password; verify through the official website.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Action: report the suspicious message to the service provider or school.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Risks: credential theft and account takeover; actions: verify officially and report the message",
          },
        },
        {
          id: "cilc-u3-s9-s-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A backup password has 14 characters using lowercase letters, uppercase letters, digits and symbols. Daily backups run for 14 days. Give (a) the password length, (b) the number of character types and (c) the number of backups made.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 14 },
              { label: "b", answer: 4 },
              { label: "c", answer: 14 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Security practice",
                statement:
                  "Strong passwords mix character types; backups should be regular.",
              },
            ],
            steps: [
              {
                reasoning: "The password has 14 characters.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "Four character types are used.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "One backup per day for 14 days gives 14 backups.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "14 characters; 4 types; 14 backups",
          },
        },
        {
          id: "cilc-u3-s9-s-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the safest response to an unexpected message asking for a password?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Post the password publicly so others can check it" },
              {
                id: "b",
                text: "Do not share it; verify through an official channel and report the message"
              },
              {
                id: "c",
                text: "Use the same password for every account",
              },
              {
                id: "d",
                text: "Reply immediately with the password"
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Responsible behaviour",
                statement:
                  "Protect credentials and verify unexpected requests.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Legitimate services should not ask for passwords by unexpected message.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Do not share it; verify through an official channel and report the message",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilc-u3-stage9-security-notes",
      title: "Stage 9 computing checkpoint — revision notes",
      summary:
        "Tables/fields/records, queries, encryption, phishing, project lifecycle.",
      sections: [
        {
          heading: "Key skills",
          body: "Distinguish fields from records; write simple SELECT queries; explain encryption and common threats; order the project lifecycle correctly.",
        },
        {
          heading: "Exam tips",
          body: "For queries, include WHERE for filtering. For security, link each threat to a specific defence.",
        },
      ],
    },
  ],
};
