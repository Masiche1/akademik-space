import type { Lesson } from "../../../types.ts";

export const lesson221: Lesson = {
  id: "ecs10-u3-lesson-3-1",
  code: "3-1",
  title: "Files and File Formats",
  goal: "I CAN explain file types and when to use each format.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Data Handling"],
  vocabulary: [
    {
      term: "File",
      definition: "Named collection of data stored on storage device.",
    },
    { term: "Text file", definition: "Plain text — unformatted characters." },
    { term: "Binary file", definition: "Non-text data — images, executables." },
    {
      term: "Compression",
      definition: "Reducing file size for storage/transmission.",
    },
    {
      term: "File extension",
      definition: "Suffix indicating file type (.txt, .jpg).",
    },
  ],
  concepts: [
    {
      id: "ecs10-u3-files",
      title: "File Types",
      skill: "Distinguish text/binary files and common formats.",
      lesson: {
        sections: [
          {
            heading: "Text vs binary",
            body: "**Text files**: plain characters — .txt, .csv, .html, .json. Readable in any text editor. **Binary files**: encoded non-text — .jpg, .mp3, .exe, .docx. Need specific software to interpret.\n\n**Why binary?**: images/audio/programs need exact byte representation — compression, metadata, complex structure.",
          },
          {
            heading: "Common formats",
            body: "**Documents**: .docx (Word), .pdf (portable, fixed layout). **Images**: .jpg (compressed, lossy), .png (lossless, transparency), .gif (animated). **Audio**: .mp3 (compressed), .wav (uncompressed). **Data**: .csv (spreadsheet-friendly).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which format for a photo that needs small size?",
          solution: ".jpg — compressed, smaller than .png/.bmp.",
        },
      },
      questions: [
        {
          id: "ecs10-u3-files-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a text and binary file?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Text can't be stored" },
              { id: "b", text: "Same thing" },
              {
                id: "c",
                text: "Text = readable characters; binary = encoded data",
              },
              { id: "d", text: "Binary is smaller" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Text vs binary",
                statement: "Readable vs encoded.",
              },
            ],
            steps: [
              {
                reasoning: "Text readable; binary encoded.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Readable vs encoded",
            commonErrors: ["Same confused."],
          },
        },
        {
          id: "ecs10-u3-files-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why use .jpg instead of .png for photographs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "JPG vs PNG",
                statement: "Compression trade-off.",
              },
            ],
            steps: [
              {
                reasoning: ".jpg uses lossy compression — much smaller files.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Good for photos where slight quality loss acceptable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  ".png lossless — larger but exact; better for graphics/logos.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "JPG smaller for photos; PNG better for graphics.",
            commonErrors: ["No trade-off.", "Same quality."],
          },
        },
        {
          id: "ecs10-u3-files-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what file compression does and why it's useful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compression",
                statement: "Reduce size, faster transfer.",
              },
            ],
            steps: [
              {
                reasoning: "Removes redundant data to reduce file size.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Smaller files → faster download/upload.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Less storage needed.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Lossy loses some quality; lossless doesn't.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Reduces size → faster transfer, less storage.",
            commonErrors: ["No benefit.", "No types."],
          },
        },
        {
          id: "ecs10-u3-files-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A photographer needs to share 100 photos online.",
          parts: [
            {
              label: "a",
              prompt: "Recommend a file format with justification.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain why not the alternatives.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Format choice",
                statement: "Balance size vs quality.",
              },
            ],
            steps: [
              {
                reasoning: "(a) .jpg — compressed, small files for web.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Good quality sufficient for online viewing.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) .png too large for 100 photos; .bmp uncompressed huge.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) .tiff too large; .gif limited colours.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) jpg (b) others too large/limited",
            commonErrors: ["png chosen.", "No justification."],
          },
        },
      ],
    },
    {
      id: "ecs10-u3-databases",
      title: "Databases and Tables",
      skill: "Understand database structure: tables, fields, records, keys.",
      lesson: {
        sections: [
          {
            heading: "Database structure",
            body: "**Database**: organised collection of data. **Table**: rows and columns. **Field/column**: attribute — e.g., 'Name', 'Age'. **Record/row**: single entry — one person's data. **Primary key**: unique field identifying each record.\n\n**Example**: Students table — fields: ID, Name, Class; records: each student.",
          },
          {
            heading: "Why databases?",
            body: "**Advantages**: organised data, fast search, data integrity (validation rules), multiple users, reports. **Flat files**: simple but limited — no relationships, redundant data.\n\n**Relational databases**: multiple linked tables — e.g., Students linked to Courses via foreign keys.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Table has duplicate student names. How to distinguish?",
          solution: "Add unique ID field as primary key.",
        },
      },
      questions: [
        {
          id: "ecs10-u3-databases-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a primary key?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Password" },
              { id: "b", text: "Table name" },
              { id: "c", text: "Unique field identifying each record" },
              { id: "d", text: "Any field" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary key",
                statement: "Unique record identifier.",
              },
            ],
            steps: [
              {
                reasoning: "PK = unique ID per record.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Unique identifier",
            commonErrors: ["Any field."],
          },
        },
        {
          id: "ecs10-u3-databases-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a field and a record.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Field vs record",
                statement: "Column vs row.",
              },
            ],
            steps: [
              {
                reasoning: "Field = column — attribute like 'Name'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Record = row — one complete entry.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Table has fields (columns) and records (rows).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Field = column; record = row.",
            commonErrors: ["Reversed.", "Same thing."],
          },
        },
        {
          id: "ecs10-u3-databases-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two advantages of a database over a spreadsheet.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Database advantages",
                statement: "Integrity, relationships, scale.",
              },
            ],
            steps: [
              {
                reasoning: "Data integrity — validation rules prevent errors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Relationships — link tables, avoid redundancy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better for large datasets and multiple users.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More powerful queries and security.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Integrity, relationships, scalability, security.",
            commonErrors: ["Spreadsheet better.", "Only one."],
          },
        },
        {
          id: "ecs10-u3-databases-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Design a table for a library's book loans.",
          parts: [
            { label: "a", prompt: "List the fields needed.", marks: 3 },
            { label: "b", prompt: "Identify the primary key.", marks: 3 },
            { label: "c", prompt: "Explain why it's needed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Database design",
                statement: "Fields + unique key.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) LoanID, BookID, MemberID, DateBorrowed, DateDue, Returned.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Sensible fields covering loan data.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) LoanID as primary key — unique per loan.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Could use composite key (BookID+MemberID).",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Unique ID prevents duplicate/confused records.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer: "(a) loan fields (b) LoanID key (c) uniqueness",
            commonErrors: ["No key.", "Duplicate fields."],
          },
        },
      ],
    },
    {
      id: "ecs10-u3-queries",
      title: "Queries and Searching",
      skill: "Use queries to search, sort and filter database data.",
      lesson: {
        sections: [
          {
            heading: "Queries",
            body: "**Query**: request to retrieve/manipulate data. **Search**: find records matching criteria — `WHERE age > 18`. **Sort**: order results — `ORDER BY name`. **Filter**: select subset — `WHERE class = '10A'`.",
          },
          {
            heading: "Query types",
            body: "**Select**: retrieve data. **Update**: change records. **Insert**: add records. **Delete**: remove records. **Aggregate**: count, sum, average — `COUNT(*)`, `SUM(salary)`.\n\n**SQL example**: `SELECT name FROM students WHERE class='10A' ORDER BY name`.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Find all students in class 10A sorted by name.",
          solution: "SELECT name FROM students WHERE class='10A' ORDER BY name",
        },
      },
      questions: [
        {
          id: "ecs10-u3-queries-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a database query do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Creates tables" },
              { id: "b", text: "Deletes all data" },
              { id: "c", text: "Prints documents" },
              { id: "d", text: "Retrieves or manipulates data" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Query",
                statement: "Retrieve/manipulate data.",
              },
            ],
            steps: [
              { reasoning: "Query = data request.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Retrieve/manipulate",
            commonErrors: ["Delete only."],
          },
        },
        {
          id: "ecs10-u3-queries-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write SQL to find students older than 16.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "SQL WHERE",
                statement: "SELECT...WHERE condition.",
              },
            ],
            steps: [
              {
                reasoning: "SELECT * FROM students WHERE age > 16.",
                marks: 2,
                markCode: "AO2",
              },
              { reasoning: "Correct WHERE clause.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "SELECT * FROM students WHERE age > 16",
            commonErrors: ["Wrong syntax.", "No WHERE."],
          },
        },
        {
          id: "ecs10-u3-queries-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between filtering and sorting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Filter vs sort",
                statement: "Select subset vs order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Filtering: selects records matching criteria — reduces rows.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Sorting: orders records — doesn't change which appear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can combine: filter then sort.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: WHERE class='10A' then ORDER BY name.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Filter = subset; sort = order — can combine.",
            commonErrors: ["Same thing.", "No example."],
          },
        },
        {
          id: "ecs10-u3-queries-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Library database has Books table: BookID, Title, Author, Genre, Year.",
          parts: [
            {
              label: "a",
              prompt: "Write query for all fiction books after 2000.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Write query for average publication year.",
              marks: 3,
            },
            { label: "c", prompt: "Explain what each returns.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "SQL queries",
                statement: "WHERE + ORDER/aggregate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) SELECT * FROM Books WHERE Genre='Fiction' AND Year>2000.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct conditions.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) SELECT AVG(Year) FROM Books.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Aggregate function correct.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) (a) returns matching rows; (b) returns single average value.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) WHERE+AND query (b) AVG(Year) (c) rows vs single value",
            commonErrors: ["Wrong SQL.", "No aggregate."],
          },
        },
      ],
    },
  ],
};
