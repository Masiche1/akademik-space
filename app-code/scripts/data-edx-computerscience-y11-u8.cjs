module.exports = [
  {
    file: "lesson-8-1.ts",
    exportName: "lesson341",
    lesson: {
      id: "ecs11-u8-lesson-8-1",
      code: "8-1",
      title: "Software Tools and Translators",
      goal: "I CAN explain how translators work and describe development tools used to build programs.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — Translators and program development tools",
      ],
      vocabulary: [
        { term: "Compiler", definition: "Translates the whole source code into machine code before execution." },
        { term: "Interpreter", definition: "Translates and executes source code line by line." },
        { term: "Assembler", definition: "Translates assembly language into machine code." },
        { term: "Machine code", definition: "The binary instructions a processor executes directly." },
        { term: "Integrated development environment (IDE)", definition: "Software combining editor, compiler/interpreter, debugger and other tools." },
        { term: "Library", definition: "A collection of pre-written routines that can be reused in programs." },
        { term: "API", definition: "Application programming interface — a defined way for programs to use a service or library." },
      ],
      concepts: [
        {
          id: "ecs11-u8-translators",
          title: "Translators",
          skill: "Compare compilers, interpreters and assemblers and their effects on programs.",
          sections: [
            {
              heading: "Types of translator",
              body: "Computers execute **machine code**, but programmers write **source code** in high-level languages. A **compiler** translates the entire program into machine code before it runs; the result is a standalone executable that runs fast but must be recompiled for errors to be fixed.\n\nAn **interpreter** translates and runs the code line by line, so errors appear immediately and no separate executable is produced — but the program runs more slowly. An **assembler** translates assembly language (a low-level language using mnemonics like ADD and MOV) into machine code.",
            },
            {
              heading: "Compiler vs interpreter",
              body: "| Feature | Compiler | Interpreter |\n|---|---|---|\n| Translation | Whole program, once, before running | Line by line, during running |\n| Output | Standalone executable | No separate file |\n| Speed | Fast execution | Slower execution |\n| Error detection | All errors found before running | Errors found as lines are reached |\n| Portability | Machine code is CPU-specific | Source can run anywhere the interpreter exists |\n\nMany modern languages (e.g. Python) use interpreters; others (e.g. C) use compilers. Some use both (Java compiles to bytecode, then a virtual machine interprets it).",
            },
          ],
          keyFormulas: [
            { name: "Compiler", statement: "Whole source -> machine code before execution." },
            { name: "Interpreter", statement: "Line-by-line translation during execution." },
            { name: "Assembler", statement: "Assembly language -> machine code." },
          ],
          workedExample: {
            problem: "A Python program runs slowly but shows errors immediately. Why?",
            solution: "Python uses an interpreter: it translates line by line during execution, so syntax errors are caught as they are reached, at the cost of slower speed.",
          },
          questions: [
            {
              id: "ecs11-u8-translators-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which translator converts an entire program into machine code before it is run?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Interpreter" },
                  { id: "b", text: "Compiler" },
                  { id: "c", text: "Loader" },
                  { id: "d", text: "Linker" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Compiler", statement: "Translates the whole program before execution." },
                ],
                steps: [
                  { reasoning: "Only the compiler translates the entire program up front.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Compiler",
                commonErrors: ["Confusing the interpreter, which works line by line."],
              },
            },
            {
              id: "ecs11-u8-translators-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "How many times is each line of source code translated by an interpreter?",
              response: { type: "numeric", parts: [{ label: "Times", answer: 1 }] },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Interpreter", statement: "Translates each line as it is executed." },
                ],
                steps: [
                  { reasoning: "An interpreter translates each line once, when it is reached during execution.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "Once per execution",
                commonErrors: ["Answering 'once total' like a compiler."],
              },
            },
            {
              id: "ecs11-u8-translators-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "State two advantages of using an interpreter rather than a compiler.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Interpreter advantages", statement: "Errors found immediately; no separate executable needed." },
                ],
                steps: [
                  { reasoning: "Errors are reported as soon as the bad line is reached, aiding debugging.", marks: 1, markCode: "AO1" },
                  { reasoning: "No separate executable file is produced — source runs directly.", marks: 1, markCode: "AO1" },
                  { reasoning: "Source code is portable across platforms that have the interpreter.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Immediate error reporting; no separate executable needed; portable source.",
                commonErrors: ["Claiming interpreters produce faster programs — they do not."],
              },
            },
            {
              id: "ecs11-u8-translators-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "A software team must ship a program to thousands of users on different computers. Compare compiling and interpreting for this scenario.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Distribution trade-off", statement: "Compiled code is fast but machine-specific; interpreted code is portable but needs the interpreter." },
                ],
                steps: [
                  { reasoning: "Compiled machine code runs fast, suiting many users.", marks: 1, markCode: "AO2" },
                  { reasoning: "But machine code is CPU-specific, so separate builds may be needed per platform.", marks: 1, markCode: "AO2" },
                  { reasoning: "Interpreted source is portable — the interpreter handles each platform.", marks: 1, markCode: "AO2" },
                  { reasoning: "Slower execution may be unacceptable for heavy use.", marks: 1, markCode: "AO3" },
                  { reasoning: "Reasoned recommendation, e.g. compile for speed or interpret for portability.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Compile for speed but rebuild per platform; interpret for portability at cost of speed.",
                commonErrors: ["Ignoring the portability issue entirely."],
              },
            },
            {
              id: "ecs11-u8-translators-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A language uses a two-stage process: source code is compiled to bytecode, which is then interpreted by a virtual machine.",
              parts: [
                { label: "a", prompt: "Explain what problem this hybrid approach solves.", marks: 3 },
                { label: "b", prompt: "Give one advantage the hybrid keeps from each stage.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Hybrid translation", statement: "Compile once to portable bytecode; interpret on any machine." },
                ],
                steps: [
                  { reasoning: "(a) Bytecode is platform-independent, solving the portability problem of raw machine code.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Compilation still catches errors before execution.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The VM can optimise bytecode at runtime.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) From compiling: early error detection / faster than pure interpretation.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) From interpreting: runs on any platform with a VM.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Both advantages correctly attributed to the stages.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "Portable bytecode + early error checking; fast-ish and platform-independent.",
                commonErrors: ["Claiming bytecode is machine code for a specific CPU."],
              },
            },
            {
              id: "ecs11-u8-translators-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "Three programs P1, P2 and P3 are being developed.",
              parts: [
                { label: "a", prompt: "P1 is written in a language with a compiler. Explain what must happen before users can run it.", marks: 4 },
                { label: "b", prompt: "P2 uses an interpreter. State two ways errors in P2 will behave differently from P1.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Translation timing", statement: "Compiler translates fully before running; interpreter translates during running." },
                ],
                steps: [
                  { reasoning: "(a) The whole source file must be compiled into machine code first.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Any syntax errors prevent compilation entirely — nothing runs.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The output is a standalone executable needing no translator at run time.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The executable only runs on machines matching the target architecture.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) In P2 the program starts running and errors appear when their line is reached.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Earlier lines may already have produced effects before the error is found.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) P2 has no separate executable file; P1 does.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) P2 runs more slowly because translation happens continuously.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Full compilation to machine code required first.  (b) Late error discovery; slower; no executable.",
                commonErrors: ["Saying compiled programs still need the compiler installed to run."],
              },
            },
          ],
        },
        {
          id: "ecs11-u8-dev-tools",
          title: "Development Tools",
          skill: "Describe IDEs, debuggers, libraries and APIs used in program development.",
          sections: [
            {
              heading: "IDEs and support tools",
              body: "An **integrated development environment (IDE)** bundles the code editor, compiler or interpreter, debugger and often build tools into one application (e.g. IDLE for Python, Eclipse for Java). Features include syntax highlighting, auto-completion, error messages and one-click running.\n\nA **debugger** lets programmers set breakpoints, inspect variable values and step through code line by line to find faults. **Code libraries** provide ready-made routines (e.g. sorting, file handling) so developers do not rewrite common code. An **API** defines how programs can request services from other software or the operating system.",
            },
            {
              heading: "Libraries and APIs",
              body: "**Libraries** are collections of pre-written, tested routines that are imported into a program — they save time and reduce errors.\n\nAn **API** (application programming interface) specifies the functions, inputs and outputs a service offers; for example a weather API lets a program request current temperatures without knowing how the data is gathered. Using APIs promotes **modularity**: complex systems are built by combining smaller, independent services.",
            },
          ],
          keyFormulas: [
            { name: "IDE", statement: "Editor + translator + debugger in one tool." },
            { name: "Library", statement: "Reusable pre-written routines." },
            { name: "API", statement: "Defined interface for using a service." },
          ],
          workedExample: {
            problem: "Why would a programmer import a sorting library instead of writing their own sort?",
            solution: "The library routine is pre-written and tested, saving development time and reducing the chance of bugs.",
          },
          questions: [
            {
              id: "ecs11-u8-devtools-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which tool allows a programmer to pause execution and inspect variable values?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Compiler" },
                  { id: "b", text: "Debugger" },
                  { id: "c", text: "Interpreter" },
                  { id: "d", text: "Assembler" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Debugger", statement: "Tool for stepping through code and inspecting variables." },
                ],
                steps: [
                  { reasoning: "Pausing execution and inspecting variables is the debugger's job.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Debugger",
                commonErrors: ["Confusing the debugger with the compiler."],
              },
            },
            {
              id: "ecs11-u8-devtools-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What does IDE stand for?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Integrated development environment" },
                  { id: "b", text: "Internal data engine" },
                  { id: "c", text: "Instant debugging editor" },
                  { id: "d", text: "Independent development executable" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "IDE", statement: "Integrated development environment." },
                ],
                steps: [
                  { reasoning: "IDE = integrated development environment.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(a)** Integrated development environment",
                commonErrors: ["Choosing a plausible-sounding but wrong expansion."],
              },
            },
            {
              id: "ecs11-u8-devtools-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "State two benefits of using a code library in a project.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Reuse", statement: "Libraries provide tested, ready-made routines." },
                ],
                steps: [
                  { reasoning: "Saves development time — routines are already written.", marks: 1, markCode: "AO1" },
                  { reasoning: "Reduces errors because the routines are pre-tested.", marks: 1, markCode: "AO1" },
                  { reasoning: "Keeps the main program shorter and easier to maintain.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Time saving and reliability; shorter, more maintainable code.",
                commonErrors: ["Saying libraries make programs run faster — the benefit is development efficiency."],
              },
            },
            {
              id: "ecs11-u8-devtools-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain how an API allows two separate systems to work together, using an example.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "API", statement: "Defined interface specifying functions a service offers." },
                ],
                steps: [
                  { reasoning: "An API defines the requests a program can make and the responses it receives.", marks: 1, markCode: "AO1" },
                  { reasoning: "The provider controls implementation; the user only needs the interface.", marks: 1, markCode: "AO2" },
                  { reasoning: "Example: a weather app calls a weather API to fetch temperature data.", marks: 1, markCode: "AO2" },
                  { reasoning: "Systems stay decoupled — either side can change internals without breaking the other.", marks: 1, markCode: "AO3" },
                  { reasoning: "Clear, correct example supporting the explanation.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "API = defined interface; e.g. weather API lets an app request data without knowing internals.",
                commonErrors: ["Describing an API as a physical connector or cable."],
              },
            },
            {
              id: "ecs11-u8-devtools-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A student is choosing tools to write a Python program for a school project.",
              parts: [
                { label: "a", prompt: "Explain two ways an IDE helps compared with a plain text editor.", marks: 3 },
                { label: "b", prompt: "Describe how the debugger would be used when the program gives wrong results.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "IDE features", statement: "Editor, translator, debugger combined with assistance features." },
                ],
                steps: [
                  { reasoning: "(a) Syntax highlighting and error messages catch mistakes early.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(a) Auto-completion speeds up coding and reduces typos.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) One-click running and integrated translator/debugger streamline workflow.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Set breakpoints at suspicious lines to pause execution.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Inspect variable values to find where they become wrong.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Step through line by line to trace the fault.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) Highlighting/auto-complete/integrated tools.  (b) Breakpoints + variable inspection.",
                commonErrors: ["Listing IDE features without explaining the benefit."],
              },
            },
            {
              id: "ecs11-u8-devtools-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A company wants to build a program that displays live train times.",
              parts: [
                { label: "a", prompt: "Explain how a transport API could be used, including what the program sends and receives.", marks: 4 },
                { label: "b", prompt: "Give two reasons the company should reuse an existing mapping or data library rather than writing everything from scratch.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "API usage", statement: "Program sends a defined request; service returns structured data." },
                ],
                steps: [
                  { reasoning: "(a) The program sends a request to the API, e.g. station code and time.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The API returns structured data such as departure times and destinations.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The program parses the response and displays it to the user.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The company does not need to collect or maintain live data itself.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Saves development time — routines already written and tested.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Reduces bugs because library code is maintained by specialists.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Allows the team to focus on unique features of their app.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Two distinct, justified reasons given.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Request station/time -> API returns times -> display.  (b) Time saving; reliability.",
                commonErrors: ["Vague answer: 'the API gives the times' with no request/response detail."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u8-lesson-8-1-notes",
      title: "Translators and Development Tools Notes",
      summary: "Compilers, interpreters, assemblers, IDEs, debuggers, libraries and APIs.",
      sections: [
        {
          heading: "Translators compared",
          body: "Compiler: whole program -> machine code before running; fast; standalone executable; machine-specific. Interpreter: line by line during running; slow; immediate errors; portable source. Assembler: assembly -> machine code.",
        },
        {
          heading: "Development tools",
          body: "IDE = editor + translator + debugger in one. Debugger: breakpoints, stepping, variable inspection. Libraries: reusable tested routines. API: defined interface for using a service — request in, structured data out.",
        },
        {
          heading: "Exam technique",
          body: "Comparison questions reward a table-like answer covering speed, error timing, portability and output. Always link each tool to its purpose.",
        },
      ],
    },
  },
  {
    file: "lesson-8-2.ts",
    exportName: "lesson342",
    lesson: {
      id: "ecs11-u8-lesson-8-2",
      code: "8-2",
      title: "Program Design and Documentation",
      goal: "I CAN describe the program development process, design modular programs and document them.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — Program design and documentation",
      ],
      vocabulary: [
        { term: "Problem statement", definition: "A clear description of what the program must achieve." },
        { term: "Design", definition: "Planning the structure of the solution before coding, including inputs, outputs and processing." },
        { term: "Modular programming", definition: "Breaking a program into separate subroutines or modules that each do one task." },
        { term: "Dry run", definition: "Manually tracing an algorithm or program on paper to check its logic." },
        { term: "Technical documentation", definition: "Notes for programmers: comments, design notes, test plans." },
        { term: "User documentation", definition: "Instructions for end users: manuals, help files, tutorials." },
        { term: "Maintenance", definition: "Updating a program after release to fix faults or add features." },
      ],
      concepts: [
        {
          id: "ecs11-u8-design-process",
          title: "Design and Development Process",
          skill: "Describe the stages from problem statement to finished program.",
          sections: [
            {
              heading: "Stages of development",
              body: "A structured approach follows recognisable stages:\n\n1. **Analysis** — understand the problem; write a problem statement covering inputs, outputs and processing.\n2. **Design** — plan the solution: algorithms, data structures, flowcharts, modular breakdown.\n3. **Implementation** — write the actual code.\n4. **Testing** — check the program against its requirements.\n5. **Evaluation and maintenance** — review whether it meets the need; fix faults and update it over time.\n\nSkipping design is a common cause of failure: code written without a plan usually contains more errors and is harder to fix.",
            },
            {
              heading: "Modular programming",
              body: "**Modularity** means splitting a program into self-contained modules or subroutines, each responsible for one task (e.g. get input, validate data, calculate result, display output).\n\nBenefits: easier to write and test each part separately; modules can be reused in other programs; faults are easier to locate; different programmers can work on different modules. The main program coordinates the modules by calling them in the right order.",
            },
          ],
          keyFormulas: [
            { name: "Development stages", statement: "Analysis -> Design -> Implementation -> Testing -> Evaluation/Maintenance." },
            { name: "Modularity", statement: "One module = one task; main program coordinates calls." },
          ],
          workedExample: {
            problem: "A program crashes when run. The developer skipped the design stage. Explain one consequence.",
            solution: "Without a design, errors are likely to be structural; modules cannot be tested independently, so faults are harder to find and fix.",
          },
          questions: [
            {
              id: "ecs11-u8-design-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which stage comes first in a structured program development process?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Testing" },
                  { id: "b", text: "Implementation" },
                  { id: "c", text: "Analysis" },
                  { id: "d", text: "Maintenance" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Development order", statement: "Analysis precedes design, coding, testing and maintenance." },
                ],
                steps: [
                  { reasoning: "The process starts by analysing the problem before any coding.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** Analysis",
                commonErrors: ["Putting implementation first because 'you just start coding'."],
              },
            },
            {
              id: "ecs11-u8-design-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is a problem statement?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "A list of bugs in the program" },
                  { id: "b", text: "A description of what the program must do" },
                  { id: "c", text: "The final machine code" },
                  { id: "d", text: "A type of compiler error" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Problem statement", statement: "Describes required inputs, outputs and processing." },
                ],
                steps: [
                  { reasoning: "A problem statement describes what the program must achieve.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** A description of what the program must do",
                commonErrors: ["Confusing it with a bug report or error message."],
              },
            },
            {
              id: "ecs11-u8-design-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "State two benefits of writing a program in modules.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Modularity", statement: "Separate modules are easier to develop, test and reuse." },
                ],
                steps: [
                  { reasoning: "Each module can be written and tested independently.", marks: 1, markCode: "AO1" },
                  { reasoning: "Faults are easier to locate because each module has one task.", marks: 1, markCode: "AO2" },
                  { reasoning: "Modules can be reused in other programs.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Independent testing, easier fault-finding, reusability.",
                commonErrors: ["Only giving one benefit."],
              },
            },
            {
              id: "ecs11-u8-design-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why the design stage is important, even though it takes time before any code is written.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Design payoff", statement: "Planning reduces errors and rework later." },
                ],
                steps: [
                  { reasoning: "Design forces the programmer to clarify inputs, outputs and processing first.", marks: 1, markCode: "AO2" },
                  { reasoning: "A plan (algorithm/flowchart) exposes logic errors before coding.", marks: 1, markCode: "AO2" },
                  { reasoning: "Modular design makes testing and debugging far easier.", marks: 1, markCode: "AO2" },
                  { reasoning: "Time spent designing is usually less than time spent fixing badly structured code.", marks: 1, markCode: "AO3" },
                  { reasoning: "Clear, reasoned conclusion.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Design clarifies requirements, catches errors early and eases testing — saving time overall.",
                commonErrors: ["Arguing design is unnecessary because 'coding is faster'."],
              },
            },
            {
              id: "ecs11-u8-design-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A school wants a program that records student names and test scores.",
              parts: [
                { label: "a", prompt: "Describe what the analysis stage should produce for this program.", marks: 3 },
                { label: "b", prompt: "Suggest a modular breakdown for the program.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Analysis output", statement: "Problem statement covering inputs, outputs and processing." },
                ],
                steps: [
                  { reasoning: "(a) Identify inputs: student names and test scores.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Identify outputs: stored records, maybe averages or reports.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Describe processing: storing, retrieving, maybe calculating statistics.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Sensible modules, e.g. input module, storage module, report module.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Each module has a single clear task.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Modules are plausible and cover the requirements.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Inputs/outputs/processing identified.  (b) e.g. input, store, report modules.",
                commonErrors: ["Modules that overlap or do several unrelated tasks."],
              },
            },
            {
              id: "ecs11-u8-design-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A programmer writes a 500-line program as one block of code with no plan.",
              parts: [
                { label: "a", prompt: "Identify three problems this approach is likely to cause.", marks: 4 },
                { label: "b", prompt: "Describe how a modular design would improve the situation.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Unstructured code risks", statement: "No plan -> errors, poor testing, hard maintenance." },
                ],
                steps: [
                  { reasoning: "(a) Errors are likely because logic was never planned or checked.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(a) Testing is hard — the whole program must run to test any part.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(a) Maintenance is difficult — changes may break unrelated parts.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(a) Reuse is impossible — no self-contained modules exist.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Modules can be tested independently before integration.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Each module has one clear task, making faults easier to isolate.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Modules can be reused or replaced without rewriting everything.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Clear contrast drawn between the two approaches.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Likely errors, hard testing, hard maintenance.  (b) Independent testing, isolation, reuse.",
                commonErrors: ["Generic complaints like 'it's messy' without technical reasons."],
              },
            },
          ],
        },
        {
          id: "ecs11-u8-documentation",
          title: "Documentation and Maintenance",
          skill: "Distinguish technical and user documentation and explain program maintenance.",
          sections: [
            {
              heading: "Types of documentation",
              body: "**Technical documentation** is written for programmers and maintainers: comments inside the code explaining variables and logic, design notes, algorithms, test plans and version histories. Good comments explain *why* code does something, not just *what* it does.\n\n**User documentation** is written for the people who will use the program: user manuals, on-screen help, tutorials and quick-reference cards. It assumes no programming knowledge and focuses on tasks the user wants to perform.",
            },
            {
              heading: "Maintenance",
              body: "**Corrective maintenance** fixes faults found after release. **Adaptive maintenance** updates the program when the environment changes (new hardware, new file formats, changed regulations). **Perfective maintenance** adds improvements or new features. **Preventive maintenance** makes the code easier to maintain, e.g. refactoring.\n\nMaintenance is often the longest phase of a program's life — well-documented code is far cheaper to maintain than undocumented code.",
            },
          ],
          keyFormulas: [
            { name: "Technical docs", statement: "For programmers: comments, design notes, test plans." },
            { name: "User docs", statement: "For users: manuals, help, tutorials." },
            { name: "Maintenance types", statement: "Corrective, adaptive, perfective, preventive." },
          ],
          workedExample: {
            problem: "A manual explaining how to print a report is which type of documentation?",
            solution: "User documentation — it instructs end users, not programmers.",
          },
          questions: [
            {
              id: "ecs11-u8-docs-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Who is technical documentation primarily written for?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "End users" },
                  { id: "b", text: "Programmers and maintainers" },
                  { id: "c", text: "Customers only" },
                  { id: "d", text: "Hardware manufacturers" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Technical documentation", statement: "Written for programmers and maintainers." },
                ],
                steps: [
                  { reasoning: "Technical documentation targets people who maintain the code.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Programmers and maintainers",
                commonErrors: ["Confusing it with user documentation."],
              },
            },
            {
              id: "ecs11-u8-docs-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is corrective maintenance?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Adding new features" },
                  { id: "b", text: "Fixing faults found after release" },
                  { id: "c", text: "Updating for new hardware" },
                  { id: "d", text: "Writing user manuals" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Corrective maintenance", statement: "Fixing faults discovered after release." },
                ],
                steps: [
                  { reasoning: "Corrective maintenance specifically fixes bugs after release.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Fixing faults found after release",
                commonErrors: ["Confusing it with perfective maintenance (new features)."],
              },
            },
            {
              id: "ecs11-u8-docs-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "Give one example of user documentation and one of technical documentation for the same program.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "comparison", name: "Doc audiences", statement: "User docs for end users; technical docs for programmers." },
                ],
                steps: [
                  { reasoning: "User documentation example: a manual or on-screen help explaining how to use features.", marks: 1, markCode: "AO1" },
                  { reasoning: "Technical documentation example: code comments, design notes or a test plan.", marks: 1, markCode: "AO1" },
                  { reasoning: "Both examples clearly matched to their audience.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "e.g. user guide vs code comments/design notes",
                commonErrors: ["Giving two examples of the same type."],
              },
            },
            {
              id: "ecs11-u8-docs-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why good technical documentation reduces the cost of maintaining a program.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Documentation value", statement: "Docs let maintainers understand code without the original author." },
                ],
                steps: [
                  { reasoning: "Comments and design notes explain why the code works as it does.", marks: 1, markCode: "AO2" },
                  { reasoning: "New maintainers do not need to reverse-engineer the program.", marks: 1, markCode: "AO2" },
                  { reasoning: "Faults are found faster, reducing debugging time.", marks: 1, markCode: "AO2" },
                  { reasoning: "Changes are safer because dependencies and structure are recorded.", marks: 1, markCode: "AO3" },
                  { reasoning: "Clear conclusion linking documentation to lower cost.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Docs preserve understanding, speeding fault-finding and safe changes.",
                commonErrors: ["Claiming documentation makes the code run faster."],
              },
            },
            {
              id: "ecs11-u8-docs-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A shop's till software was written five years ago by a programmer who has left.",
              parts: [
                { label: "a", prompt: "Identify the maintenance problem the shop now faces.", marks: 3 },
                { label: "b", prompt: "Describe two features of good documentation that would have helped.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "context", name: "Knowledge loss", statement: "Undocumented systems lose understanding when staff leave." },
                ],
                steps: [
                  { reasoning: "(a) Nobody fully understands how the system works — 'knowledge walkout'.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Any change or fault fix is risky and slow.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) The shop may be forced to replace the system entirely.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Code comments explaining the logic of each module.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Design notes or a system overview showing structure and data flow.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Either feature clearly explained as reducing the burden on new staff.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Loss of system knowledge makes changes risky/slow.  (b) Comments; design notes.",
                commonErrors: ["Saying the problem is 'old software' rather than missing documentation."],
              },
            },
            {
              id: "ecs11-u8-docs-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A program must be updated because payment card rules have changed.",
              parts: [
                { label: "a", prompt: "Identify the type of maintenance required and justify your choice.", marks: 4 },
                { label: "b", prompt: "Describe two pieces of documentation that would help a new developer make the update safely.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Adaptive maintenance", statement: "Updates needed because the external environment changed." },
                ],
                steps: [
                  { reasoning: "(a) This is adaptive maintenance — the environment (regulations) changed.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Not corrective, because no fault in the code was reported.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Not perfective, because the change is required, not optional.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Justification clearly distinguishes adaptive from other types.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Technical documentation: comments/design notes on the payment module.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Documentation shows where card data is validated and stored.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) A test plan helps verify the update does not break existing functions.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Two relevant, distinct documentation items described.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Adaptive maintenance — external rules changed.  (b) Code comments/design notes; test plan.",
                commonErrors: ["Calling it corrective maintenance because 'something needs fixing'."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u8-lesson-8-2-notes",
      title: "Design, Documentation and Maintenance Notes",
      summary: "Development stages, modular design, technical vs user documentation, maintenance types.",
      sections: [
        {
          heading: "Development stages",
          body: "Analysis (problem statement: inputs, outputs, processing) -> Design (algorithms, modules) -> Implementation (code) -> Testing -> Evaluation and maintenance. Skipping stages causes rework.",
        },
        {
          heading: "Modularity",
          body: "One module = one task. Benefits: independent testing, easier fault isolation, reusability, parallel development. The main program coordinates module calls.",
        },
        {
          heading: "Documentation and maintenance",
          body: "Technical docs (comments, design notes, test plans) serve programmers; user docs (manuals, help) serve end users. Maintenance types: corrective (fix faults), adaptive (environment changed), perfective (improvements), preventive (easier future maintenance).",
        },
      ],
    },
  },
  {
    file: "lesson-8-3.ts",
    exportName: "lesson343",
    lesson: {
      id: "ecs11-u8-lesson-8-3",
      code: "8-3",
      title: "Testing Techniques",
      goal: "I CAN choose appropriate test data, build trace tables and describe levels of testing.",
      standards: [
        "Pearson Edexcel IGCSE Computer Science 4CP1 — Testing programs",
      ],
      vocabulary: [
        { term: "Test plan", definition: "A document listing what will be tested, the test data and the expected results." },
        { term: "Normal test data", definition: "Valid input within the expected range, testing typical use." },
        { term: "Boundary test data", definition: "Values at the edge of the acceptable range, e.g. minimum and maximum." },
        { term: "Erroneous test data", definition: "Invalid input used to check the program rejects it correctly." },
        { term: "Trace table", definition: "A table tracking variable values through each step of an algorithm." },
        { term: "Dry run", definition: "Manually stepping through code or an algorithm to check its logic." },
        { term: "Alpha testing", definition: "Testing by the developer's own team before wider release." },
      ],
      concepts: [
        {
          id: "ecs11-u8-test-levels",
          title: "Levels of Testing",
          skill: "Distinguish unit, integration, system and acceptance testing.",
          sections: [
            {
              heading: "Testing levels",
              body: "**Unit testing** checks each module or subroutine on its own, using test data designed for that module's task.\n\n**Integration testing** checks that modules work correctly together — interfaces and data passing between them.\n\n**System testing** checks the complete program in its intended environment, including performance and usability.\n\n**Acceptance testing** is done by the client or end users to confirm the program meets the original requirements before sign-off.",
            },
            {
              heading: "Alpha and beta testing",
              body: "**Alpha testing** is carried out by the developer's own team in a controlled environment before release. **Beta testing** releases the program to a limited group of real users who report faults in real-world conditions.\n\nTesting at every level catches different classes of fault: unit tests catch local logic errors, integration tests catch interface problems, and acceptance testing catches mismatches with user needs.",
            },
          ],
          keyFormulas: [
            { name: "Test levels", statement: "Unit -> Integration -> System -> Acceptance." },
            { name: "Alpha vs beta", statement: "Developer team vs limited real users." },
          ],
          workedExample: {
            problem: "A calculation module works alone but produces wrong totals when the main program calls it. Which test level should have caught this?",
            solution: "Integration testing — the fault is in how modules interact, not in either module alone.",
          },
          questions: [
            {
              id: "ecs11-u8-testlevels-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Which level of testing checks each module on its own?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "System testing" },
                  { id: "b", text: "Unit testing" },
                  { id: "c", text: "Acceptance testing" },
                  { id: "d", text: "Beta testing" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Unit testing", statement: "Tests individual modules in isolation." },
                ],
                steps: [
                  { reasoning: "Testing modules individually is unit testing.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Unit testing",
                commonErrors: ["Confusing unit with system testing."],
              },
            },
            {
              id: "ecs11-u8-testlevels-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "Who typically carries out acceptance testing?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The programmer" },
                  { id: "b", text: "The client's end users" },
                  { id: "c", text: "The hardware supplier" },
                  { id: "d", text: "The compiler" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Acceptance testing", statement: "Performed by the client or end users to confirm requirements are met." },
                ],
                steps: [
                  { reasoning: "Acceptance testing is done by those who will use the system.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** The client's end users",
                commonErrors: ["Thinking the developer does acceptance testing — that is alpha testing."],
              },
            },
            {
              id: "ecs11-u8-testlevels-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "State the purpose of integration testing.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Integration testing", statement: "Checks that modules work correctly together." },
                ],
                steps: [
                  { reasoning: "It verifies modules interact correctly when combined.", marks: 1, markCode: "AO1" },
                  { reasoning: "It checks data passed between modules is correct.", marks: 1, markCode: "AO2" },
                  { reasoning: "It catches interface faults that unit tests cannot find.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Checks that combined modules pass data and control correctly.",
                commonErrors: ["Saying it tests modules individually — that is unit testing."],
              },
            },
            {
              id: "ecs11-u8-testlevels-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why a program should be tested at several levels rather than only tested once at the end.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Layered testing", statement: "Each level catches different fault types at different costs." },
                ],
                steps: [
                  { reasoning: "Unit tests catch local faults while modules are small and easy to fix.", marks: 1, markCode: "AO2" },
                  { reasoning: "Integration tests catch interface faults between modules.", marks: 1, markCode: "AO2" },
                  { reasoning: "System testing checks the whole program in its real environment.", marks: 1, markCode: "AO2" },
                  { reasoning: "Finding faults early is cheaper than finding them in a finished product.", marks: 1, markCode: "AO3" },
                  { reasoning: "Reasoned conclusion.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Layered testing finds different faults early and cheaply.",
                commonErrors: ["Claiming one final test is enough because 'the program is finished'."],
              },
            },
            {
              id: "ecs11-u8-testlevels-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "A company releases version 1.0 of an app to 50 selected users before the public launch.",
              parts: [
                { label: "a", prompt: "Identify the type of testing this describes.", marks: 3 },
                { label: "b", prompt: "Give two benefits of this approach compared with releasing to everyone at once.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Beta testing", statement: "Limited release to real users before full launch." },
                ],
                steps: [
                  { reasoning: "(a) This is beta testing — real users, limited group, pre-launch.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Distinguished from alpha (developer's own team).", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Correctly named.", marks: 1, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Real-world faults are found before full release.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Problems affect only 50 users, not the whole market.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Feedback improves the final product.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Beta testing.  (b) Finds real faults early; limits exposure; gathers feedback.",
                commonErrors: ["Calling it alpha testing — alpha is done by the developer's team."],
              },
            },
            {
              id: "ecs11-u8-testlevels-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A school develops a program to calculate exam grades.",
              parts: [
                { label: "a", prompt: "Describe what should happen at the unit, integration and system testing stages for this program.", marks: 4 },
                { label: "b", prompt: "Explain who should carry out acceptance testing and what they would check.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Testing pyramid", statement: "Unit -> integration -> system -> acceptance, each broader in scope." },
                ],
                steps: [
                  { reasoning: "(a) Unit: test the grade-calculation function alone with known scores.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Integration: test input module feeding the calculator and results module.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) System: test the whole program on school computers with real data.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Each stage described with a relevant example.", marks: 1, markCode: "AO3", part: "a" },
                  { reasoning: "(b) Acceptance testing is done by the school (the client/users).", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) They check grades match official results for sample students.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) They confirm the program meets the original requirements.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Sign-off or rejection decision based on results.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) Unit: calc function; Integration: modules together; System: whole app.  (b) School checks against real grades.",
                commonErrors: ["Describing testing stages without concrete examples for the scenario."],
              },
            },
          ],
        },
        {
          id: "ecs11-u8-test-data",
          title: "Test Data and Trace Tables",
          skill: "Choose normal, boundary and erroneous test data and complete trace tables.",
          sections: [
            {
              heading: "Types of test data",
              body: "A good **test plan** uses three kinds of data:\n\n- **Normal data** — valid values inside the expected range, e.g. age = 16 for a program expecting 11-18.\n- **Boundary data** — values at the edges of the range: the minimum, the maximum, and just outside them (10, 11, 18, 19). Boundary bugs are very common.\n- **Erroneous data** — invalid values that must be rejected, e.g. age = -5, age = 'abc', or an empty field.\n\nA program should accept normal and boundary values, and reject erroneous data with a suitable message.",
            },
            {
              heading: "Trace tables and dry runs",
              body: "A **trace table** records the value of each variable after every step of an algorithm, letting you verify the logic by hand. Columns are variables; rows are steps or loop iterations.\n\nA **dry run** is tracing the algorithm manually — the same idea applied to pseudocode. Tracing is especially useful for loops, where variables change repeatedly and it is easy to miscount iterations.",
            },
          ],
          keyFormulas: [
            { name: "Test data types", statement: "Normal (valid), boundary (edges), erroneous (invalid)." },
            { name: "Trace table", statement: "Rows = steps/iterations; columns = variables." },
          ],
          workedExample: {
            problem: "A program accepts ages 11 to 18. Give one example of each test data type.",
            solution: "Normal: 15. Boundary: 11, 18, also 10 and 19 to test rejection. Erroneous: -3 or 'abc'.",
          },
          questions: [
            {
              id: "ecs11-u8-testdata-q1",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is boundary test data?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Any valid input" },
                  { id: "b", text: "Values at the edge of the acceptable range" },
                  { id: "c", text: "Input that crashes the program" },
                  { id: "d", text: "Random numbers" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Boundary data", statement: "Values at the edges of the acceptable range." },
                ],
                steps: [
                  { reasoning: "Boundary data tests the limits of valid input.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Values at the edge of the acceptable range",
                commonErrors: ["Confusing boundary data with normal data."],
              },
            },
            {
              id: "ecs11-u8-testdata-q2",
              difficulty: "foundation",
              totalMarks: 2,
              stem: "What is a trace table used for?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Recording variable values at each step" },
                  { id: "b", text: "Measuring program speed" },
                  { id: "c", text: "Storing user passwords" },
                  { id: "d", text: "Printing the final result" },
                ],
                correctChoiceId: "a",
              },
              markscheme: {
                principles: [
                  { kind: "definition", name: "Trace table", statement: "Tracks variable values through each algorithm step." },
                ],
                steps: [
                  { reasoning: "A trace table records variable values step by step.", marks: 2, markCode: "AO1" },
                ],
                finalAnswer: "**(a)** Recording variable values at each step",
                commonErrors: ["Thinking it measures performance rather than logic."],
              },
            },
            {
              id: "ecs11-u8-testdata-q3",
              difficulty: "core",
              totalMarks: 3,
              stem: "A program requires a password between 8 and 12 characters. Give one example each of normal, boundary and erroneous test data.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Test data selection", statement: "Normal inside range; boundary at edges; erroneous outside or wrong type." },
                ],
                steps: [
                  { reasoning: "Normal: e.g. 'password1' (9 characters, valid).", marks: 1, markCode: "AO1" },
                  { reasoning: "Boundary: exactly 8 or exactly 12 characters (edges of the range).", marks: 1, markCode: "AO2" },
                  { reasoning: "Erroneous: 7 characters, 13 characters, or a number instead of text.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "e.g. 'password1' / 8 or 12 chars / 7 chars or numeric input",
                commonErrors: ["Giving three normal values and no boundary or erroneous data."],
              },
            },
            {
              id: "ecs11-u8-testdata-q4",
              difficulty: "challenge",
              totalMarks: 5,
              stem: "Explain why boundary test data is especially important, using an example.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "principle", name: "Boundary faults", statement: "Off-by-one errors cluster at range edges." },
                ],
                steps: [
                  { reasoning: "Programmers often confuse < with <= at range limits.", marks: 1, markCode: "AO3" },
                  { reasoning: "Example: age limit 18 — should 18 be accepted? Tests at 17, 18, 19 reveal the rule.", marks: 1, markCode: "AO2" },
                  { reasoning: "Boundary data also tests just-outside values that must be rejected.", marks: 1, markCode: "AO2" },
                  { reasoning: "Many real-world faults are off-by-one errors found only at boundaries.", marks: 1, markCode: "AO3" },
                  { reasoning: "Example and explanation clearly linked.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Boundary tests expose off-by-one errors, e.g. whether 18 is accepted at an 18 limit.",
                commonErrors: ["Generic answer without a concrete example."],
              },
            },
            {
              id: "ecs11-u8-testdata-q5",
              difficulty: "challenge",
              totalMarks: 6,
              stem: "An algorithm counts how many of the numbers 3, 7, 12 and 20 are greater than 10.",
              parts: [
                { label: "a", prompt: "Complete a trace table showing a counter c starting at 0, processing each number in turn.", marks: 3 },
                { label: "b", prompt: "State the final value of c and verify it is correct.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Tracing a counter", statement: "Increment c only when the condition number > 10 is true." },
                ],
                steps: [
                  { reasoning: "(a) Trace: c=0; 3 not >10 -> c=0; 7 not >10 -> c=0.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) 12 > 10 -> c=1; 20 > 10 -> c=2.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Table shows c = 0, 0, 0, 1, 2 across the five rows.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Final c = 2.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Check: only 12 and 20 exceed 10 — two numbers.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Verification confirms the trace.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) c ends at 2.  (b) Correct — 12 and 20 are the only values > 10.",
                commonErrors: ["Counting 3 or 7 as greater than 10."],
              },
            },
            {
              id: "ecs11-u8-testdata-q6",
              difficulty: "challenge",
              totalMarks: 8,
              stem: "A program asks for an exam score 0-100 and prints 'Pass' if score >= 40, otherwise 'Fail'.",
              parts: [
                { label: "a", prompt: "Design a test plan with at least four test cases covering normal, boundary and erroneous data.", marks: 4 },
                { label: "b", prompt: "For one boundary case, explain what the program should output and why.", marks: 4 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "method", name: "Test plan design", statement: "Cover valid, boundary and invalid inputs with expected outputs." },
                ],
                steps: [
                  { reasoning: "(a) Normal case e.g. score 75 -> Pass.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Boundary cases e.g. 40 -> Pass and 39 -> Fail (the >= edge).", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Outer boundaries e.g. 0 -> Fail and 100 -> Pass.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Erroneous case e.g. -5 or 105 or 'abc' -> rejected with error message.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Chosen boundary: score = 40 is the minimum pass mark.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Since the rule is >= 40, output must be 'Pass'.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Justification: 40 satisfies the condition; this tests the <= vs < boundary.", marks: 1, markCode: "AO3", part: "b" },
                  { reasoning: "(b) Clear link between test data, rule and expected output.", marks: 1, markCode: "AO3", part: "b" },
                ],
                finalAnswer: "(a) e.g. 75->Pass, 40->Pass, 39->Fail, -5->error.  (b) 40 -> Pass (>= rule).",
                commonErrors: ["Missing the critical 39/40 boundary pair."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ecs11-u8-lesson-8-3-notes",
      title: "Testing Techniques Notes",
      summary: "Test levels, test data types, trace tables and dry runs.",
      sections: [
        {
          heading: "Levels of testing",
          body: "Unit: individual modules. Integration: modules together. System: whole program in its environment. Acceptance: client/end users confirm requirements. Alpha = developer team; beta = limited real users before launch.",
        },
        {
          heading: "Test data",
          body: "Normal: typical valid input. Boundary: min, max and just-outside values — catches off-by-one errors. Erroneous: invalid input that must be rejected. Always state expected outputs in a test plan.",
        },
        {
          heading: "Trace tables",
          body: "Columns = variables, rows = steps or loop iterations. Fill in values after each operation to verify logic manually. Essential for checking loops and counters.",
        },
      ],
    },
  },
];
