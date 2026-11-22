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
            { id: "a", text: "Python" },
            { id: "b", text: "Machine code" },
            { id: "c", text: "Assembly" },
            { id: "d", text: "HTML" },
          ], correctChoiceId: "b" },
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
        {
          id: "olcs-u4-lang-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Assembly language uses…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Pictures" },
            { id: "b", text: "Mnemonics like MOV and ADD" },
            { id: "c", text: "Only binary digits" },
            { id: "d", text: "English sentences" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Assembly", statement: "Mnemonic codes, one step from machine code." }], steps: [{ reasoning: "Assembly uses mnemonics.", working: "\\text{mnemonics}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Mnemonics" },
        },
        {
          id: "olcs-u4-lang-q6", difficulty: "core", totalMarks: 2,
          stem: "A program of 10 000 lines is run 5 times on an interpreter that translates every line on every run. How many line-translations occur in total?",
          response: { type: "numeric", parts: [{ label: "Translations", answer: 50000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Interpreter", statement: "Translates every line every run." }], steps: [
            { reasoning: "$10000\\times5=50000$.", working: "50000", marks: 1, markCode: "M" },
            { reasoning: "Correct total.", working: "50000", marks: 1, markCode: "A" },
          ], finalAnswer: "50 000" },
        },
        {
          id: "olcs-u4-lang-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The main advantage of high-level languages over low-level languages is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They need no translator" },
            { id: "b", text: "They run directly on the CPU" },
            { id: "c", text: "They use only binary" },
            { id: "d", text: "They are easier to read, write and portable" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "High-level", statement: "Readable and portable." }], steps: [{ reasoning: "High-level = human-readable, portable.", working: "\\text{readable}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Easier and portable" },
        },
        {
          id: "olcs-u4-lang-q8", difficulty: "core", totalMarks: 2,
          stem: "A program is compiled once (taking 2 s) and then runs 100 times at 0.1 s per run. What is the total time? Compare with interpreting at 0.5 s per run.",
          response: { type: "numeric", parts: [
            { label: "Compiled (s)", answer: 12 },
            { label: "Interpreted (s)", answer: 50 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Total time", statement: "compile once + run time vs interpret every run." }], steps: [
            { reasoning: "Compiled: $2+100\\times0.1=12$ s.", working: "12", marks: 1, markCode: "M" },
            { reasoning: "Interpreted: $100\\times0.5=50$ s.", working: "50", marks: 1, markCode: "A" },
          ], finalAnswer: "12 s compiled; 50 s interpreted" },
        },
        {
          id: "olcs-u4-lang-q9", difficulty: "core", totalMarks: 2,
          stem: "Why do low-level languages generally produce faster programs than high-level languages?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Low-level speed", statement: "Closer to hardware → less translation overhead." }], steps: [
            { reasoning: "Machine code runs directly on the CPU.", working: "\\text{direct}", marks: 1, markCode: "M" },
            { reasoning: "Gives the programmer precise hardware control.", marks: 1, markCode: "A" },
          ], finalAnswer: "Low-level code runs directly on hardware with minimal translation, giving more control and speed." },
        },
        {
          id: "olcs-u4-lang-q10", difficulty: "core", totalMarks: 1,
          stem: "Machine code consists of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Pictures" },
            { id: "b", text: "Binary digits (0s and 1s)" },
            { id: "c", text: "Mnemonics" },
            { id: "d", text: "English words" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Machine code", statement: "Binary instructions." }], steps: [{ reasoning: "Machine code = binary.", working: "\\text{binary}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Binary digits" },
        },
        {
          id: "olcs-u4-lang-q11", difficulty: "core", totalMarks: 2,
          stem: "Java source code is compiled to bytecode, which a Java Virtual Machine then interprets. How many translation stages are there from source code to execution?",
          response: { type: "numeric", parts: [{ label: "Stages", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Java", statement: "Compile to bytecode, then interpret." }], steps: [
            { reasoning: "Source → bytecode (compile), bytecode → run (interpret).", working: "2", marks: 1, markCode: "M" },
            { reasoning: "Two stages.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u4-lang-q12", difficulty: "core", totalMarks: 2,
          stem: "Portability — the ability to run on different computers — is a feature of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Machine code only" },
            { id: "b", text: "Assembly only" },
            { id: "c", text: "Firmware" },
            { id: "d", text: "High-level languages" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Portability", statement: "High-level code is machine-independent." }], steps: [{ reasoning: "High-level runs anywhere with a translator.", working: "\\text{portable}", marks: 1, markCode: "M" }, { reasoning: "Machine/assembly are machine-specific.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** High-level languages" },
        },
        {
          id: "olcs-u4-lang-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A games company must choose between compiling and interpreting for its new game engine. Discuss the trade-offs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Compiler vs interpreter", statement: "Speed vs development ease." }], steps: [
            { reasoning: "Compiled = faster execution — good for a game engine.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { reasoning: "Compiled = standalone executable for distribution.", working: "\\text{executable}", marks: 1, markCode: "M" },
            { reasoning: "Interpreted = easier debugging but slower runtime.", working: "\\text{slow}", marks: 1, markCode: "M" },
            { reasoning: "Reasoned recommendation (likely compile).", marks: 1, markCode: "A" },
          ], finalAnswer: "Compilation gives the speed and standalone executable a game needs; interpretation would be too slow at runtime." },
        },
        {
          id: "olcs-u4-lang-q14", difficulty: "challenge", totalMarks: 1,
          stem: "An assembler translates…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Python into Java" },
            { id: "b", text: "Assembly language into machine code" },
            { id: "c", text: "Text into images" },
            { id: "d", text: "Machine code into assembly" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Assembler", statement: "Assembly → machine code." }], steps: [{ reasoning: "Assembler handles mnemonics.", working: "\\text{asm→machine}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Assembly to machine code" },
        },
        {
          id: "olcs-u4-lang-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Option A compiles (30 s compile + 0.05 s per run); Option B interprets (0.3 s per run). For 100 runs, calculate the total time for each option.",
          response: { type: "numeric", parts: [
            { label: "Compiled (s)", answer: 35 },
            { label: "Interpreted (s)", answer: 30 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Total time", statement: "compile + runs vs interpret every run." }], steps: [
            { reasoning: "Compiled: $30+100\\times0.05=35$ s.", working: "35", marks: 1, markCode: "M" },
            { reasoning: "Interpreted: $100\\times0.3=30$ s.", working: "30", marks: 1, markCode: "M" },
            { reasoning: "Both values correct.", working: "35,30", marks: 1, markCode: "A" },
          ], finalAnswer: "35 s compiled; 30 s interpreted" },
        },
        {
          id: "olcs-u4-lang-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is a low-level language?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Assembly" },
            { id: "b", text: "Java" },
            { id: "c", text: "Scratch" },
            { id: "d", text: "Python" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Low-level", statement: "Machine/assembly — close to hardware." }], steps: [{ reasoning: "Assembly is low-level.", working: "\\text{assembly}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Assembly" },
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
            { id: "a", text: "An operating system" },
            { id: "b", text: "Only a text editor" },
            { id: "c", text: "Editor, translator and debugger" },
            { id: "d", text: "A web browser" },
          ], correctChoiceId: "c" },
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
        {
          id: "olcs-u4-ide-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A debugger in an IDE is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Connect to the internet" },
            { id: "b", text: "Store files" },
            { id: "c", text: "Find and fix errors by stepping through code" },
            { id: "d", text: "Print documents" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Debugger", statement: "Steps through code to find errors." }], steps: [{ reasoning: "Debugger traces execution.", working: "\\text{debugger}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Find/fix errors" },
        },
        {
          id: "olcs-u4-ide-q6", difficulty: "core", totalMarks: 2,
          stem: "Of these — code editor, debugger, compiler, spreadsheet — how many are typical IDE components?",
          response: { type: "numeric", parts: [{ label: "Components", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "IDE", statement: "Editor + translator + debugger." }], steps: [
            { reasoning: "Editor, debugger, compiler = 3; spreadsheet is not.", working: "3", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "3", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u4-ide-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Syntax highlighting in an IDE…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Prints the code" },
            { id: "b", text: "Fixes all errors automatically" },
            { id: "c", text: "Colours different parts of the code for readability" },
            { id: "d", text: "Encrypts the file" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Syntax highlighting", statement: "Colours code elements." }], steps: [{ reasoning: "Highlighting improves readability.", working: "\\text{highlight}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Colours code parts" },
        },
        {
          id: "olcs-u4-ide-q8", difficulty: "core", totalMarks: 2,
          stem: "An interpreted program shows one error per run. If a program has 10 errors and the student fixes one per run, how many runs are needed to reach a working program?",
          response: { type: "numeric", parts: [{ label: "Runs", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Interpreted errors", statement: "Errors revealed one at a time." }], steps: [
            { reasoning: "$10$ errors → $10$ fix runs.", working: "10", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "10", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olcs-u4-ide-q9", difficulty: "core", totalMarks: 2,
          stem: "Give one benefit of using an IDE rather than a plain text editor for a beginner programmer.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "IDE benefit", statement: "All-in-one: editor, translator, debugger." }], steps: [
            { reasoning: "Built-in compiler/interpreter to run code easily.", working: "\\text{run}", marks: 1, markCode: "M" },
            { reasoning: "Debugger and error messages help fix mistakes.", marks: 1, markCode: "A" },
          ], finalAnswer: "An IDE provides an editor, built-in translator and debugger — making writing, running and fixing code much easier." },
        },
        {
          id: "olcs-u4-ide-q10", difficulty: "core", totalMarks: 1,
          stem: "IDLE is an example of an IDE for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "HTML" },
            { id: "b", text: "Python" },
            { id: "c", text: "Fortran only" },
            { id: "d", text: "Assembly" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "IDLE", statement: "Python's IDE." }], steps: [{ reasoning: "IDLE is for Python.", working: "\\text{Python}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Python" },
        },
        {
          id: "olcs-u4-ide-q11", difficulty: "core", totalMarks: 2,
          stem: "A debugger stops at a breakpoint on line 25 of a 100-line program. What percentage through the program is this?",
          response: { type: "numeric", parts: [{ label: "Percent", answer: 25 }] },
          markscheme: { principles: [{ kind: "formula", name: "Percent", statement: "$25/100\\times100=25\\%$." }], steps: [
            { reasoning: "$25/100=0.25$ → $25\\%$.", working: "25", marks: 1, markCode: "M" },
            { reasoning: "Correct percentage.", working: "25", marks: 1, markCode: "A" },
          ], finalAnswer: "25%" },
        },
        {
          id: "olcs-u4-ide-q12", difficulty: "core", totalMarks: 2,
          stem: "'Stepping through' code in a debugger means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deleting the program" },
            { id: "b", text: "Printing it" },
            { id: "c", text: "Executing one line at a time to watch variables" },
            { id: "d", text: "Running it at full speed" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Step through", statement: "Line-by-line execution." }], steps: [{ reasoning: "Step = one line at a time.", working: "\\text{line-by-line}", marks: 1, markCode: "M" }, { reasoning: "Allows inspecting variables.", marks: 1, markCode: "A" }], finalAnswer: "**(a)** One line at a time" },
        },
        {
          id: "olcs-u4-ide-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a debugger helps a programmer find a logic error (a program that runs but gives wrong results).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Debugging", statement: "Step through, inspect variables, set breakpoints." }], steps: [
            { reasoning: "Set breakpoints to pause at key lines.", working: "\\text{breakpoints}", marks: 1, markCode: "M" },
            { reasoning: "Step through to watch variable values change.", working: "\\text{step}", marks: 1, markCode: "M" },
            { reasoning: "Spot where a value first becomes wrong.", working: "\\text{wrong value}", marks: 1, markCode: "M" },
            { reasoning: "Fix the faulty line.", marks: 1, markCode: "A" },
          ], finalAnswer: "Breakpoints and step-through let the programmer inspect variables line by line to find where the wrong value first appears." },
        },
        {
          id: "olcs-u4-ide-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A syntax error is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A slow program" },
            { id: "b", text: "A virus" },
            { id: "c", text: "A type of printer" },
            { id: "d", text: "A mistake in the code's grammar that stops it running" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Syntax error", statement: "Code grammar mistake." }], steps: [{ reasoning: "Syntax errors prevent execution.", working: "\\text{syntax}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Grammar mistake" },
        },
        {
          id: "olcs-u4-ide-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A compiler reports 3 syntax errors per compilation attempt. If a program has 9 syntax errors, how many compilation attempts are needed to fix them all (assuming the programmer fixes all reported errors each time)?",
          response: { type: "numeric", parts: [{ label: "Attempts", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Compile errors", statement: "All syntax errors found together." }], steps: [
            { reasoning: "$9/3=3$ attempts.", working: "3", marks: 1, markCode: "M" },
            { reasoning: "Correct division.", working: "3", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "3", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u4-ide-q16", difficulty: "foundation", totalMarks: 1,
          stem: "The compiler within an IDE…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only highlights text" },
            { id: "b", text: "Connects to the internet" },
            { id: "c", text: "Translates the whole program before it runs" },
            { id: "d", text: "Prints the program" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Compiler", statement: "Whole program → machine code." }], steps: [{ reasoning: "Compiler translates everything at once.", working: "\\text{whole}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Translates whole program" },
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
