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
            { id: "a", text: "Encrypted data only" },
            { id: "b", text: "Human-readable characters" },
            { id: "c", text: "No data" },
            { id: "d", text: "Only raw bytes" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Text file", statement: "Readable characters." }], steps: [{ reasoning: "Text = readable.", working: "\\text{text}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Readable characters" },
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
        {
          id: "olcs-u8-fh-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A binary file contains…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only numbers as text" },
            { id: "b", text: "Raw machine-readable bytes" },
            { id: "c", text: "No data" },
            { id: "d", text: "Human-readable text" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Binary file", statement: "Raw bytes." }], steps: [{ reasoning: "Binary = raw machine-readable bytes.", working: "\\text{bytes}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Raw bytes" },
        },
        {
          id: "olcs-u8-fh-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many file operations are named: OPEN, READ, WRITE, CLOSE?",
          response: { type: "numeric", parts: [{ label: "Number of operations", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "File handling", statement: "Open, read, write, close." }], steps: [
            { reasoning: "Four operations named.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u8-fh-q7", difficulty: "core", totalMarks: 1,
          stem: "Sequential file access means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Records are accessed in the order they are stored" },
            { id: "b", text: "Access is always fastest" },
            { id: "c", text: "You can jump to any record instantly" },
            { id: "d", text: "There is no order" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Sequential access", statement: "In-order access." }], steps: [{ reasoning: "Sequential = must read in order.", working: "\\text{in order}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** In stored order" },
        },
        {
          id: "olcs-u8-fh-q8", difficulty: "core", totalMarks: 1,
          stem: "A file has 3 records, each containing 4 fields. How many field values are stored in total?",
          response: { type: "numeric", parts: [{ label: "Total field values", answer: 12 }] },
          markscheme: { principles: [{ kind: "principle", name: "Records and fields", statement: "Records × fields." }], steps: [
            { reasoning: "3 × 4 = 12 values.", working: "12", marks: 1, markCode: "B" },
          ], finalAnswer: "12" },
        },
        {
          id: "olcs-u8-fh-q9", difficulty: "core", totalMarks: 1,
          stem: "A record in a file is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A program" },
            { id: "b", text: "A single character" },
            { id: "c", text: "One complete entry" },
            { id: "d", text: "A folder" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Record", statement: "One complete entry." }], steps: [{ reasoning: "Record = complete entry.", working: "\\text{entry}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** One complete entry" },
        },
        {
          id: "olcs-u8-fh-q10", difficulty: "core", totalMarks: 2,
          stem: "State two differences between a text file and a binary file.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Text vs binary", statement: "Readable chars vs raw bytes." }], steps: [
            { reasoning: "Text is human-readable; binary is raw bytes.", working: "\\text{readable vs bytes}", marks: 1, markCode: "M" },
            { reasoning: "Text opens in an editor; binary needs a program.", working: "\\text{editor vs program}", marks: 1, markCode: "A" },
          ], finalAnswer: "Text files are human-readable characters; binary files are raw machine bytes." },
        },
        {
          id: "olcs-u8-fh-q11", difficulty: "challenge", totalMarks: 1,
          stem: "In which type of file must you read through earlier records to reach a later one?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Any file" },
            { id: "b", text: "A web page" },
            { id: "c", text: "An array" },
            { id: "d", text: "Sequential file" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Sequential access", statement: "In-order only." }], steps: [{ reasoning: "Sequential files require reading in order.", working: "\\text{sequential}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Sequential file" },
        },
        {
          id: "olcs-u8-fh-q12", difficulty: "core", totalMarks: 1,
          stem: "The file operations OPEN → WRITE → CLOSE involve how many steps?",
          response: { type: "numeric", parts: [{ label: "Number of steps", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "File handling", statement: "Open → write → close." }], steps: [
            { reasoning: "Three steps listed.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u8-fh-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a sequential file is suitable for storing an activity log.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sequential files", statement: "In-order append suits logs." }], steps: [
            { reasoning: "Records are added in time order.", working: "\\text{order}", marks: 1, markCode: "M" },
            { reasoning: "Appending new entries is simple.", working: "\\text{append}", marks: 1, markCode: "M" },
            { reasoning: "Reading the log back follows the same order.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Log entries are chronological, so in-order append and read match sequential file access perfectly." },
        },
        {
          id: "olcs-u8-fh-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A photograph saved as a .jpg file would be stored as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A binary file" },
            { id: "b", text: "No file at all" },
            { id: "c", text: "A text file" },
            { id: "d", text: "Either type equally" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Binary file", statement: "Images are binary." }], steps: [{ reasoning: "Images are raw bytes → binary.", working: "\\text{binary}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A binary file" },
        },
        {
          id: "olcs-u8-fh-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many file operations are named and how many fields a student record with name, ID, class and age has.",
          response: { type: "numeric", parts: [
            { label: "File operations", answer: 4 },
            { label: "Fields in record", answer: 4 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Files", statement: "4 operations; 4 fields." }], steps: [
            { reasoning: "OPEN, READ, WRITE, CLOSE.", working: "4", marks: 1, markCode: "M" },
            { reasoning: "Name, ID, class, age = 4 fields.", working: "4", marks: 1, markCode: "A" },
          ], finalAnswer: "4 operations; 4 fields" },
        },
        {
          id: "olcs-u8-fh-q16", difficulty: "challenge", totalMarks: 9,
          stem: "File handling review.",
          parts: [
            { label: "a", prompt: "Which file type stores a photograph and why?", marks: 2 },
            { label: "b", prompt: "Define sequential file access.", marks: 2 },
            { label: "c", prompt: "Define record and field.", marks: 2 },
            { label: "d", prompt: "Write pseudocode to append the name 'Ali' to 'names.txt'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "File handling", statement: "Open→read/write→close sequence." },
          ], steps: [
            { part: "a", reasoning: "Binary — images are raw bytes.", working: "\\text{binary}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct type and reason.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Records accessed in stored order.", working: "\\text{in order}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "No direct jumping.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Record: entry; field: data item.", working: "\\text{record+field}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct definitions.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "OPEN 'names.txt' FOR APPEND.", working: "OPEN", marks: 1, markCode: "M" },
            { part: "d", reasoning: "WRITE 'Ali'.", working: "WRITE", marks: 1, markCode: "M" },
            { part: "d", reasoning: "CLOSE file.", working: "CLOSE", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) binary/bytes (b) in-order (c) entry vs item (d) OPEN→WRITE→CLOSE" },
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
            { id: "a", text: "Its line number" },
            { id: "b", text: "A file name" },
            { id: "c", text: "Using its name with arguments" },
            { id: "d", text: "A variable name only" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Procedure call", statement: "Name + arguments." }], steps: [{ reasoning: "Call by name.", working: "\\text{call}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Name with arguments" },
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
        {
          id: "olcs-u8-pu-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A procedure is called by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A variable name only" },
            { id: "b", text: "A file name" },
            { id: "c", text: "Using its name with arguments" },
            { id: "d", text: "Its line number" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Procedure call", statement: "Name + arguments." }], steps: [{ reasoning: "Call uses the routine's name.", working: "\\text{call}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Name with arguments" },
        },
        {
          id: "olcs-u8-pu-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many benefits of using procedures are listed: reusable, readable, maintainable?",
          response: { type: "numeric", parts: [{ label: "Number of benefits", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Procedures", statement: "Reusable, readable, maintainable." }], steps: [
            { reasoning: "Three benefits named.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u8-pu-q7", difficulty: "core", totalMarks: 1,
          stem: "A well-designed procedure should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Do one clear job" },
            { id: "b", text: "Never be called" },
            { id: "c", text: "Do everything at once" },
            { id: "d", text: "Use only global variables" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Procedure design", statement: "One clear job each." }], steps: [{ reasoning: "Keep procedures focused.", working: "\\text{one job}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Do one clear job" },
        },
        {
          id: "olcs-u8-pu-q8", difficulty: "core", totalMarks: 1,
          stem: "A procedure DOUBLE(x) outputs x * 2. What is output when DOUBLE(6) is called?",
          response: { type: "numeric", parts: [{ label: "Output", answer: 12 }] },
          markscheme: { principles: [{ kind: "principle", name: "Procedure call", statement: "Substitute parameter." }], steps: [
            { reasoning: "6 × 2 = 12.", working: "12", marks: 1, markCode: "B" },
          ], finalAnswer: "12" },
        },
        {
          id: "olcs-u8-pu-q9", difficulty: "core", totalMarks: 1,
          stem: "Using procedures improves a program mainly by making it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Private" },
            { id: "b", text: "Slower" },
            { id: "c", text: "Reusable and readable" },
            { id: "d", text: "Longer" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Procedures", statement: "Reusable, readable, maintainable." }], steps: [{ reasoning: "Procedures make code reusable and readable.", working: "\\text{reuse}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Reusable and readable" },
        },
        {
          id: "olcs-u8-pu-q10", difficulty: "core", totalMarks: 2,
          stem: "Give two reasons to create a procedure in a program.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Procedures", statement: "Reuse and readability." }], steps: [
            { reasoning: "Reusable: call the same code many times.", working: "\\text{reusable}", marks: 1, markCode: "M" },
            { reasoning: "Readable: named blocks each do one job.", working: "\\text{readable}", marks: 1, markCode: "A" },
          ], finalAnswer: "Reusability and readability (also maintainability/testing parts separately)." },
        },
        {
          id: "olcs-u8-pu-q11", difficulty: "challenge", totalMarks: 1,
          stem: "You should create a procedure when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Code is repeated or a task is complex enough to name" },
            { id: "b", text: "Only to fix errors" },
            { id: "c", text: "Never" },
            { id: "d", text: "Always, for every line" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "When to use", statement: "Repeated or named tasks." }], steps: [{ reasoning: "Procedures suit repeated/complex tasks.", working: "\\text{reuse}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Repeated code or nameable task" },
        },
        {
          id: "olcs-u8-pu-q12", difficulty: "core", totalMarks: 1,
          stem: "A function CUBE(x) returns x cubed. What does CUBE(2) return?",
          response: { type: "numeric", parts: [{ label: "CUBE(2)", answer: 8 }] },
          markscheme: { principles: [{ kind: "principle", name: "Function evaluation", statement: "2³ = 8." }], steps: [
            { reasoning: "2 × 2 × 2 = 8.", working: "8", marks: 1, markCode: "B" },
          ], finalAnswer: "8" },
        },
        {
          id: "olcs-u8-pu-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how parameters let one procedure handle many different inputs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Parameters", statement: "Different arguments per call." }], steps: [
            { reasoning: "The routine is defined once with formal parameters.", working: "\\text{define once}", marks: 1, markCode: "M" },
            { reasoning: "Each call supplies different actual parameters.", working: "\\text{arguments}", marks: 1, markCode: "M" },
            { reasoning: "Same code, different results — reusable.", working: "\\text{reusable}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "One definition with parameters can be called with different arguments, producing different results each time." },
        },
        {
          id: "olcs-u8-pu-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Each time a procedure is called with new parameters…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The name changes" },
            { id: "b", text: "The routine runs again using those values" },
            { id: "c", text: "The procedure is deleted" },
            { id: "d", text: "The loop is skipped" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Procedure calls", statement: "Re-executes with new args." }], steps: [{ reasoning: "Each call runs the routine with the given arguments.", working: "\\text{run}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Runs again with those values" },
        },
        {
          id: "olcs-u8-pu-q15", difficulty: "core", totalMarks: 2,
          stem: "Evaluate DOUBLE(6) and CUBE(2) for procedures that output x*2 and x cubed respectively.",
          response: { type: "numeric", parts: [
            { label: "DOUBLE(6)", answer: 12 },
            { label: "CUBE(2)", answer: 8 },
          ], unordered: true },
          markscheme: { principles: [{ kind: "principle", name: "Procedure evaluation", statement: "Substitute and compute." }], steps: [
            { reasoning: "DOUBLE(6) = 6 × 2 = 12.", working: "12", marks: 1, markCode: "M" },
            { reasoning: "CUBE(2) = 2³ = 8.", working: "8", marks: 1, markCode: "A" },
          ], finalAnswer: "12 and 8" },
        },
        {
          id: "olcs-u8-pu-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Procedures review.",
          parts: [
            { label: "a", prompt: "Give two reasons to use procedures.", marks: 2 },
            { label: "b", prompt: "What is a parameter?", marks: 2 },
            { label: "c", prompt: "Write pseudocode for a procedure PRINT_STAR(n) that outputs n asterisks.", marks: 3 },
            { label: "d", prompt: "How is PRINT_STAR(3) executed?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Procedures", statement: "Reusable named blocks with parameters." },
          ], steps: [
            { part: "a", reasoning: "Reusable + readable.", working: "\\text{reuse+read}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Two reasons.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Value passed into routine.", working: "\\text{param}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "PROCEDURE PRINT_STAR(n) with FOR i←1 TO n OUTPUT '*'.", working: "OUTPUT '*'", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct loop.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "ENDPROCEDURE.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Runs once with n=3.", working: "n=3", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Outputs 3 stars.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) reuse+readability (b) input value (c) loop outputs stars (d) prints 3 stars" },
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
