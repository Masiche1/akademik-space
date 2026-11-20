import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "olcs-u4-lesson-4-2",
  code: "4-2",
  title: "Programming Languages and Translators",
  goal: "I CAN distinguish low-level and high-level languages and compare compilers and interpreters.",
  standards: ["2210 4.2.1", "2210 4.2.3", "2210 4.2.5"],
  vocabulary: [
    { term: "Low-level language", definition: "Machine-dependent code close to hardware — machine code and assembly." },
    { term: "High-level language", definition: "Human-readable language using words like IF, FOR, PRINT (Python, Java)." },
    { term: "Machine code", definition: "Binary instructions (0s and 1s) executed directly by the CPU." },
    { term: "Assembly language", definition: "Low-level language using mnemonics like MOV, ADD; one step from machine code." },
    { term: "Compiler", definition: "Translates the whole program to machine code before execution." },
    { term: "Interpreter", definition: "Translates and executes line by line at run time." },
    { term: "IDE", definition: "Integrated Development Environment — editor + compiler/interpreter + debugger in one tool." },
  ],
  concepts: [
    {
      id: "olcs-u4-languages",
      title: "Low-level vs high-level languages",
      skill: "Classify languages by level and explain the translation chain.",
      lesson: {
        sections: [
          { heading: "Levels", body: "- **Machine code**: binary — the only language the CPU runs directly. Fast but unreadable.\n- **Assembly**: mnemonics (MOV, ADD, JMP) — still machine-specific, needs an assembler.\n- **High-level**: words and structures (IF, WHILE, PRINT) — portable across computers, needs a translator.\n\nHigh-level is easier to write and debug; low-level gives more control and speed." },
          { heading: "Translation chain", body: "High-level source → translator → machine code → CPU executes.\n\n**Compiler**: translates the ENTIRE program once, producing an executable. Result runs fast, but errors are found all at once and recompiling is needed after changes.\n\n**Interpreter**: translates and runs line-by-line. Easier to test/debug, but slower at run time." },
          { heading: "Choosing", body: "Compiled: games, large applications (speed). Interpreted: scripts, rapid development, learning (Python, JavaScript often use interpreters/JIT)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A developer wants fast execution of a large program. Compiler or interpreter?",
          solution: "Compiler — translates once to machine code, producing a fast executable.",
        },
      },
      questions: [
        {
          id: "olcs-u4-lang-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which language does the CPU execute directly?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Machine code" }, { id: "b", text: "Python" }, { id: "c", text: "Assembly" }, { id: "d", text: "HTML" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Machine code", statement: "Binary, CPU-native." }], steps: [{ reasoning: "Machine code runs directly.", working: "\\text{machine code}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Machine code" },
        },
        {
          id: "olcs-u4-lang-q2", difficulty: "core", totalMarks: 2,
          stem: "State the main difference between a compiler and an interpreter.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Compiler vs interpreter", statement: "Whole program vs line-by-line." }], steps: [
            { reasoning: "Compiler: whole program at once.", working: "\\text{whole}", marks: 1, markCode: "M" },
            { reasoning: "Interpreter: line by line at run time.", working: "\\text{line-by-line}", marks: 1, markCode: "A" },
          ], finalAnswer: "Compiler translates the whole program first; interpreter translates and runs line by line." },
        },
        {
          id: "olcs-u4-lang-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why high-level languages are easier for beginners than assembly.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "High-level", statement: "Readable words vs mnemonics." }], steps: [
            { reasoning: "Uses English-like words (IF, PRINT).", working: "\\text{readable}", marks: 1, markCode: "M" },
            { reasoning: "Hides hardware details/addresses.", working: "\\text{abstraction}", marks: 1, markCode: "M" },
            { reasoning: "Portable across different computers.", marks: 1, markCode: "M" },
            { reasoning: "Easier to learn and debug.", marks: 1, markCode: "A" },
          ], finalAnswer: "High-level uses readable words, hides hardware details, and is portable — easier to learn." },
        },
        {
          id: "olcs-u4-lang-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Languages and translators review.",
          parts: [
            { label: "a", prompt: "Order these from lowest to highest level: Python, assembly, machine code.", marks: 2 },
            { label: "b", prompt: "Define an interpreter.", marks: 2 },
            { label: "c", prompt: "Give one advantage of a compiler over an interpreter.", marks: 2 },
            { label: "d", prompt: "Explain what an IDE provides.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "IDE", statement: "Editor + translator + debugger." },
          ], steps: [
            { part: "a", reasoning: "Machine → assembly → Python.", working: "\\text{machine-asm-Python}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct order.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Translates line by line at run time.", working: "\\text{line-by-line}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Faster execution (pre-translated).", working: "\\text{speed}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct advantage.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Code editor for writing.", working: "\\text{editor}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Built-in compiler/interpreter.", working: "\\text{translator}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Debugger for finding errors.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) machine→asm→Python (b) line-by-line (c) faster (d) editor+translator+debugger" },
        },
      ],
    },
    {
      id: "olcs-u4-ides",
      title: "Translators and IDEs",
      skill: "Compare compilers and interpreters in detail and describe IDE features.",
      lesson: {
        sections: [
          { heading: "Compiler vs interpreter", body: "**Compiler**: translates whole source to machine code once → fast execution, errors reported together, produces standalone executable. Needs recompile after edits.\n\n**Interpreter**: translates each line as it runs → slower, but immediate feedback, easy debugging, no separate executable.\n\nSome languages use both (Java compiles to bytecode, then a JVM interprets it)." },
          { heading: "Assembly", body: "Assembly uses mnemonics (MOV, ADD, SUB, JMP) — still machine-specific. An **assembler** converts it to machine code in one pass. Very close to hardware: fast but hard to read and non-portable." },
          { heading: "IDEs", body: "An **Integrated Development Environment** bundles:\n\n- code editor with syntax highlighting\n- compiler/interpreter\n- debugger (step through, inspect variables)\n- error messages and often version control\n\nExamples: IDLE (Python), BlueJ/Greenfoot, Eclipse, Visual Studio Code." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why would a student learning Python benefit from an IDE?",
          solution: "Editor with highlighting, run button, and debugger make writing and fixing code much easier than a plain text editor.",
        },
      },
      questions: [
        {
          id: "olcs-u4-ide-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An IDE typically includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Editor, translator and debugger" }, { id: "b", text: "Only a text editor" }, { id: "c", text: "A web browser" }, { id: "d", text: "An operating system" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "IDE", statement: "All-in-one dev tool." }], steps: [{ reasoning: "IDE = editor+translator+debugger.", working: "\\text{IDE}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Editor+translator+debugger" },
        },
        {
          id: "olcs-u4-ide-q2", difficulty: "core", totalMarks: 2,
          stem: "Give one advantage of an interpreter over a compiler for a beginner.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Interpreter", statement: "Immediate feedback, easy debugging." }], steps: [
            { reasoning: "Line-by-line → instant error feedback.", working: "\\text{feedback}", marks: 1, markCode: "M" },
            { reasoning: "Easier to debug/test.", marks: 1, markCode: "A" },
          ], finalAnswer: "Immediate error feedback and easier debugging." },
        },
        {
          id: "olcs-u4-ide-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A company ships a large application to millions of users. Should it compile or interpret? Justify.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Compiled apps", statement: "Speed and standalone executable." }], steps: [
            { reasoning: "Compiled = faster execution for end users.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { reasoning: "Produces standalone executable — no interpreter needed.", working: "\\text{executable}", marks: 1, markCode: "M" },
            { reasoning: "Better for large-scale distribution.", marks: 1, markCode: "M" },
            { reasoning: "Justified choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "Compile — faster execution and a standalone executable for distribution." },
        },
        {
          id: "olcs-u4-ide-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Translators and IDEs review.",
          parts: [
            { label: "a", prompt: "State the tool that translates assembly to machine code.", marks: 1 },
            { label: "b", prompt: "Give two advantages of compilation.", marks: 2 },
            { label: "c", prompt: "Give two advantages of interpretation.", marks: 2 },
            { label: "d", prompt: "List three features of an IDE and explain one.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Assembler", statement: "Assembly → machine code." },
          ], steps: [
            { part: "a", reasoning: "Assembler.", working: "\\text{assembler}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fast execution.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Standalone executable / errors found together.", working: "\\text{executable}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Immediate feedback.", working: "\\text{feedback}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Easier debugging / no compile step.", working: "\\text{debug}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Editor/translator/debugger.", working: "\\text{features}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Three listed.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Explain one (e.g. debugger steps through code).", working: "\\text{debugger}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Explanation clear.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) assembler (b) speed/executable (c) feedback/debug (d) editor+translator+debugger" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u4-4-2-notes", title: "Languages and translators — notes", summary: "Language levels, compilers, interpreters, IDEs.",
      sections: [
        { heading: "Levels", body: "Machine code (binary) → assembly (mnemonics) → high-level (words). CPU only runs machine code." },
        { heading: "Translators", body: "Compiler: whole program → fast executable. Interpreter: line-by-line → easy debugging. IDE: editor + translator + debugger." },
      ] },
  ],
};
