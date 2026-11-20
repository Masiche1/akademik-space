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
              { id: "b", text: "A single row of data" },
              { id: "c", text: "The whole table" },
              { id: "d", text: "A query" },
            ],
            correctChoiceId: "b",
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
              { id: "a", text: "A type of computer virus" },
              {
                id: "b",
                text: "Fraudulent messages tricking users into revealing credentials",
              },
              { id: "c", text: "A network protocol" },
              { id: "d", text: "A database query" },
            ],
            correctChoiceId: "b",
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
