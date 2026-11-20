import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "olcs-u8-lesson-8-3",
  code: "8-3",
  title: "File Handling",
  goal: "I CAN use sequential files to store and retrieve data, and explain text vs binary files.",
  standards: ["2210 8.3.1", "2210 8.3.2"],
  vocabulary: [
    { term: "File", definition: "Named collection of data stored on a secondary storage device." },
    { term: "Sequential file", definition: "Records stored and accessed in order, like a queue." },
    { term: "Text file", definition: "File containing human-readable characters." },
    { term: "Binary file", definition: "File of raw machine-readable bytes." },
    { term: "Record", definition: "One complete entry in a file — e.g. a person's details." },
    { term: "Field", definition: "One piece of data within a record — e.g. name, age." },
    { term: "File handling", definition: "Operations to OPEN, READ/WRITE and CLOSE files." },
  ],
  concepts: [
    {
      id: "olcs-u8-files",
      title: "Sequential file handling",
      skill: "Open, read and write sequential files using OPEN, READ, WRITE, CLOSE.",
      lesson: {
        sections: [
          { heading: "Text vs binary", body: "- **Text file**: human-readable characters — opened in a text editor.\n- **Binary file**: raw bytes only machines read — images, executables, databases." },
          { heading: "Sequential access", body: "Records are stored and accessed **in order** — you must read through earlier records to reach later ones, like a queue. Writing appends or overwrites in sequence.\n\nOperations: OPEN (connect to file) → READ/WRITE records → CLOSE (release file)." },
          { heading: "Records and fields", body: "A file holds **records** (complete entries); each record has **fields** (individual data items). E.g. a student file: record = one student; fields = name, ID, class." },
        ],
        keyFormulas: [
          { name: "File ops", statement: "OPEN → READ/WRITE → CLOSE" },
        ],
        workedExample: {
          problem: "Write pseudocode to append a name to 'names.txt'.",
          solution: "OPEN 'names.txt' FOR APPEND\nWRITE name\nCLOSE 'names.txt'",
        },
      },
      questions: [
        {
          id: "olcs-u8-fh-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A text file contains…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Human-readable characters" }, { id: "b", text: "Only raw bytes" }, { id: "c", text: "Encrypted data only" }, { id: "d", text: "No data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Text file", statement: "Readable characters." }], steps: [{ reasoning: "Text = readable.", working: "\\text{text}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Readable characters" },
        },
        {
          id: "olcs-u8-fh-q2", difficulty: "core", totalMarks: 2,
          stem: "What does sequential file access mean?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Sequential access", statement: "In-order access." }], steps: [
            { reasoning: "Records accessed in stored order.", working: "\\text{in order}", marks: 1, markCode: "M" },
            { reasoning: "Can't jump directly to a record.", marks: 1, markCode: "A" },
          ], finalAnswer: "Records must be read/written in the order they are stored — no direct jumping." },
        },
        {
          id: "olcs-u8-fh-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Distinguish a record from a field in a file.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Record vs field", statement: "Entry vs data item." }], steps: [
            { reasoning: "Record: one complete entry.", working: "\\text{record}", marks: 1, markCode: "M" },
            { reasoning: "Field: one data item within a record.", working: "\\text{field}", marks: 1, markCode: "M" },
            { reasoning: "Example: student record has name/ID/class fields.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Record = whole entry; field = one piece of data inside it." },
        },
        {
          id: "olcs-u8-fh-q4", difficulty: "challenge", totalMarks: 9,
          stem: "File handling review.",
          parts: [
            { label: "a", prompt: "Distinguish text from binary files.", marks: 2 },
            { label: "b", prompt: "Define sequential file access.", marks: 2 },
            { label: "c", prompt: "Define record and field.", marks: 2 },
            { label: "d", prompt: "Write pseudocode to open 'data.txt' for reading, read one record, then close.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "File handling", statement: "Open→read/write→close sequence." },
          ], steps: [
            { part: "a", reasoning: "Text: readable chars; binary: raw bytes.", working: "\\text{text vs binary}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "In-order access only.", working: "\\text{sequential}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Record: entry; field: data item.", working: "\\text{record+field}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "OPEN 'data.txt' FOR READ.", working: "OPEN", marks: 1, markCode: "M" },
            { part: "d", reasoning: "READ record.", working: "READ", marks: 1, markCode: "M" },
            { part: "d", reasoning: "CLOSE file.", working: "CLOSE", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) readable vs bytes (b) in-order (c) entry vs item (d) OPEN→READ→CLOSE" },
        },
      ],
    },
    {
      id: "olcs-u8-procedures-use",
      title: "Using procedures in programs",
      skill: "Write and call procedures to break programs into reusable parts.",
      lesson: {
        sections: [
          { heading: "Why procedures", body: "Breaking a program into named procedures makes it: reusable (call many times), readable (each block does one job) and maintainable (fix once, works everywhere)." },
          { heading: "Defining and calling", body: "```\nPROCEDURE greet(name)\n  OUTPUT 'Hello ' + name\nENDPROCEDURE\n\ngreet('Ali')     // call with actual parameter\ngreet('Sara')    // call again\n```\n\nThe definition creates the routine; each call executes it with new parameters." },
          { heading: "When to use", body: "Use a procedure when: code is repeated, a task is complex enough to name, or you want to test parts separately. Keep procedures focused — one clear job each." },
        ],
        keyFormulas: [
          { name: "Procedure", statement: "PROCEDURE name(params) ... ENDPROCEDURE; call as name(args)" },
        ],
        workedExample: {
          problem: "Write a procedure PRINT_LINE(n) that prints a line of n asterisks.",
          solution: "PROCEDURE PRINT_LINE(n)\n  FOR i ← 1 TO n\n    OUTPUT '*'\n  NEXT i\nENDPROCEDURE",
        },
      },
      questions: [
        {
          id: "olcs-u8-pu-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A procedure is called by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Using its name with arguments" }, { id: "b", text: "Its line number" }, { id: "c", text: "A file name" }, { id: "d", text: "A variable name only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Procedure call", statement: "Name + arguments." }], steps: [{ reasoning: "Call by name.", working: "\\text{call}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Name with arguments" },
        },
        {
          id: "olcs-u8-pu-q2", difficulty: "core", totalMarks: 2,
          stem: "Give two benefits of using procedures.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Procedures", statement: "Reusable and readable." }], steps: [
            { reasoning: "Reusable: call many times.", working: "\\text{reusable}", marks: 1, markCode: "M" },
            { reasoning: "Readable: named tasks.", working: "\\text{readable}", marks: 1, markCode: "A" },
          ], finalAnswer: "Reusability and readability (also maintainability)." },
        },
        {
          id: "olcs-u8-pu-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Write pseudocode for a procedure SQUARE(x) that outputs x squared, and show a call for x=9.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Procedure writing", statement: "Define + call." }], steps: [
            { reasoning: "PROCEDURE SQUARE(x) OUTPUT x*x.", working: "x*x", marks: 1, markCode: "M" },
            { reasoning: "ENDPROCEDURE.", working: "END", marks: 1, markCode: "M" },
            { reasoning: "Call SQUARE(9).", working: "SQUARE(9)", marks: 1, markCode: "M" },
            { reasoning: "Correct structure.", marks: 1, markCode: "A" },
          ], finalAnswer: "PROCEDURE SQUARE(x) OUTPUT x*x ENDPROCEDURE; SQUARE(9) → 81" },
        },
        {
          id: "olcs-u8-pu-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Procedures review.",
          parts: [
            { label: "a", prompt: "Why use procedures? Give two reasons.", marks: 2 },
            { label: "b", prompt: "What is a parameter?", marks: 2 },
            { label: "c", prompt: "Write pseudocode for procedure DISPLAY(n) outputting n stars.", marks: 3 },
            { label: "d", prompt: "How is DISPLAY(5) executed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Procedures", statement: "Reusable named blocks with parameters." },
          ], steps: [
            { part: "a", reasoning: "Reusable + readable.", working: "\\text{reuse+read}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Two reasons.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Value passed into routine.", working: "\\text{param}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "PROCEDURE DISPLAY(n) loop OUTPUT '*'.", working: "OUTPUT '*'", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct loop.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "ENDPROCEDURE.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Runs once with n=5.", working: "n=5", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Outputs 5 stars.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) reuse+readability (b) input value (c) loop outputs stars (d) prints 5 stars" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u8-8-3-notes", title: "File handling and procedures — notes", summary: "Sequential files, records/fields, and reusable procedures.",
      sections: [
        { heading: "Files", body: "Text = readable, binary = raw bytes. Sequential access = in-order. Record = entry, field = data item. OPEN→READ/WRITE→CLOSE." },
        { heading: "Procedures", body: "Named reusable blocks with parameters — make programs readable and maintainable." },
      ] },
  ],
};
