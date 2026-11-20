import type { Lesson } from "../../../types.ts";

export const lesson103: Lesson = {
  id: "olcs-u10-lesson-10-3",
  code: "10-3",
  title: "Databases Revision",
  goal: "I CAN review database concepts, queries and uses for exam-style questions.",
  standards: ["2210 10.1", "2210 10.2"],
  vocabulary: [
    { term: "Primary key", definition: "Unique record identifier." },
    { term: "Foreign key", definition: "Link to another table's primary key." },
    { term: "Query", definition: "Data retrieval request." },
    { term: "Normalization", definition: "Structuring data to reduce duplication." },
    { term: "Backup", definition: "Copy of data for recovery." },
  ],
  concepts: [
    {
      id: "olcs-u10-revision",
      title: "Databases revision",
      skill: "Apply database concepts and SQL to exam questions.",
      lesson: {
        sections: [
          { heading: "Key terms", body: "Table (fields=columns, records=rows); primary key (unique ID); foreign key (links tables); query (retrieval); report (formatted output)." },
          { heading: "SQL quick reference", body: "SELECT fields FROM table WHERE condition AND/OR condition ORDER BY field ASC/DESC; COUNT(*) for totals." },
          { heading: "Common questions", body: "- 'What is a primary key?' → unique identifier.\n- 'Why relational?' → less duplication, consistency.\n- 'Write a query...' → SELECT/WHERE/ORDER BY.\n- 'Advantage of databases?' → fast search, security, no duplication." },
        ],
        keyFormulas: [
          { name: "SQL", statement: "SELECT ... FROM ... WHERE ... ORDER BY ..." },
        ],
        workedExample: {
          problem: "Students(ID, Name, Class). Write SQL for all names in '10A'.",
          solution: "SELECT Name FROM Students WHERE Class = '10A'",
        },
      },
      questions: [
        {
          id: "olcs-u10-rv-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A field in a database table is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A column" }, { id: "b", text: "A row" }, { id: "c", text: "A file" }, { id: "d", text: "A key only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Field", statement: "Column." }], steps: [{ reasoning: "Field = column.", working: "\\text{column}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A column" },
        },
        {
          id: "olcs-u10-rv-q2", difficulty: "core", totalMarks: 2,
          stem: "Write SQL to select all records from a table called Books.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "SQL", statement: "SELECT * syntax." }], steps: [
            { reasoning: "SELECT * FROM Books.", working: "SELECT *", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "SELECT * FROM Books" },
        },
        {
          id: "olcs-u10-rv-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a primary key is needed in a database table.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Primary key", statement: "Uniqueness + linking." }], steps: [
            { reasoning: "Uniquely identifies each record.", working: "\\text{unique}", marks: 1, markCode: "M" },
            { reasoning: "Enables foreign key links.", working: "\\text{link}", marks: 1, markCode: "M" },
            { reasoning: "Prevents duplicate/confused records.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Primary key uniquely identifies records and enables links to other tables." },
        },
        {
          id: "olcs-u10-rv-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Databases exam review.",
          parts: [
            { label: "a", prompt: "Define primary key and foreign key.", marks: 2 },
            { label: "b", prompt: "Write SQL: names of students aged over 15.", marks: 3 },
            { label: "c", prompt: "Why are relational databases better than flat files?", marks: 2 },
            { label: "d", prompt: "Give two real-world database uses.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Databases", statement: "Keys, SQL, relational benefits, uses." },
          ], steps: [
            { part: "a", reasoning: "PK: unique ID; FK: links tables.", working: "\\text{pk+fk}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "SELECT Name FROM Students WHERE Age > 15.", working: "SELECT", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct WHERE.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Valid SQL.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Less duplication + consistency.", working: "\\text{relational}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Clear reason.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Library/hospital/etc.", working: "\\text{use}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Two uses.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) unique ID vs link (b) SELECT...WHERE (c) less duplication (d) any two uses" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u10-10-3-notes", title: "Databases revision — notes", summary: "Key terms, SQL syntax and exam strategy.",
      sections: [
        { heading: "Terms", body: "PK=unique ID, FK=link, query=retrieval, report=formatted output." },
        { heading: "SQL", body: "SELECT...FROM...WHERE...ORDER BY; COUNT(*) for totals. Practise writing queries." },
      ] },
  ],
};
