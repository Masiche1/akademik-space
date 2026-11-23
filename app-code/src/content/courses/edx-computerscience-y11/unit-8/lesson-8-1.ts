import type { Lesson } from "../../../types.ts";

export const lesson341: Lesson = {
  id: "ecs11-u8-lesson-8-1",
  code: "8-1",
  title: "Software Tools and Translators",
  goal: "I CAN explain how translators work and describe development tools used to build programs.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Translators and program development tools"],
  
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
      lesson: {
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
      },
      questions: [
        {
          id: "ecs11-u8-translators-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which translator converts an entire program into machine code before it is run?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Interpreter"
                    },
                    {
                              "id": "b",
                              "text": "Compiler"
                    },
                    {
                              "id": "c",
                              "text": "Loader"
                    },
                    {
                              "id": "d",
                              "text": "Linker"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Compiler",
                              "statement": "Translates the whole program before execution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Only the compiler translates the entire program up front.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Compiler",
          "commonErrors": [
                    "Confusing the interpreter, which works line by line."
          ]
},
        },
        {
          id: "ecs11-u8-translators-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many times is each line of source code translated by an interpreter?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Times",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Interpreter",
                              "statement": "Translates each line as it is executed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An interpreter translates each line once, when it is reached during execution.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Once per execution",
          "commonErrors": [
                    "Answering 'once total' like a compiler."
          ]
},
        },
        {
          id: "ecs11-u8-translators-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two advantages of using an interpreter rather than a compiler.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Interpreter advantages",
                              "statement": "Errors found immediately; no separate executable needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Errors are reported as soon as the bad line is reached, aiding debugging.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "No separate executable file is produced — source runs directly.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Source code is portable across platforms that have the interpreter.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Immediate error reporting; no separate executable needed; portable source.",
          "commonErrors": [
                    "Claiming interpreters produce faster programs — they do not."
          ]
},
        },
        {
          id: "ecs11-u8-translators-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A software team must ship a program to thousands of users on different computers. Compare compiling and interpreting for this scenario.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Distribution trade-off",
                              "statement": "Compiled code is fast but machine-specific; interpreted code is portable but needs the interpreter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compiled machine code runs fast, suiting many users.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "But machine code is CPU-specific, so separate builds may be needed per platform.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Interpreted source is portable — the interpreter handles each platform.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Slower execution may be unacceptable for heavy use.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Reasoned recommendation, e.g. compile for speed or interpret for portability.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Compile for speed but rebuild per platform; interpret for portability at cost of speed.",
          "commonErrors": [
                    "Ignoring the portability issue entirely."
          ]
},
        },
        {
          id: "ecs11-u8-translators-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A language uses a two-stage process: source code is compiled to bytecode, which is then interpreted by a virtual machine.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what problem this hybrid approach solves.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give one advantage the hybrid keeps from each stage.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Hybrid translation",
                              "statement": "Compile once to portable bytecode; interpret on any machine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Bytecode is platform-independent, solving the portability problem of raw machine code.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Compilation still catches errors before execution.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The VM can optimise bytecode at runtime.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) From compiling: early error detection / faster than pure interpretation.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) From interpreting: runs on any platform with a VM.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Both advantages correctly attributed to the stages.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "Portable bytecode + early error checking; fast-ish and platform-independent.",
          "commonErrors": [
                    "Claiming bytecode is machine code for a specific CPU."
          ]
},
        },
        {
          id: "ecs11-u8-translators-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three programs P1, P2 and P3 are being developed.",
          parts: [
          {
                    "label": "a",
                    "prompt": "P1 is written in a language with a compiler. Explain what must happen before users can run it.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "P2 uses an interpreter. State two ways errors in P2 will behave differently from P1.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Translation timing",
                              "statement": "Compiler translates fully before running; interpreter translates during running."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The whole source file must be compiled into machine code first.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Any syntax errors prevent compilation entirely — nothing runs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The output is a standalone executable needing no translator at run time.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The executable only runs on machines matching the target architecture.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) In P2 the program starts running and errors appear when their line is reached.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Earlier lines may already have produced effects before the error is found.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) P2 has no separate executable file; P1 does.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) P2 runs more slowly because translation happens continuously.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Full compilation to machine code required first.  (b) Late error discovery; slower; no executable.",
          "commonErrors": [
                    "Saying compiled programs still need the compiler installed to run."
          ]
},
        },
      ],
    },
    {
      id: "ecs11-u8-dev-tools",
      title: "Development Tools",
      skill: "Describe IDEs, debuggers, libraries and APIs used in program development.",
      lesson: {
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
      },
      questions: [
        {
          id: "ecs11-u8-devtools-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which tool allows a programmer to pause execution and inspect variable values?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Compiler"
                    },
                    {
                              "id": "b",
                              "text": "Debugger"
                    },
                    {
                              "id": "c",
                              "text": "Interpreter"
                    },
                    {
                              "id": "d",
                              "text": "Assembler"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Debugger",
                              "statement": "Tool for stepping through code and inspecting variables."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pausing execution and inspecting variables is the debugger's job.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Debugger",
          "commonErrors": [
                    "Confusing the debugger with the compiler."
          ]
},
        },
        {
          id: "ecs11-u8-devtools-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does IDE stand for?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Integrated development environment"
                    },
                    {
                              "id": "b",
                              "text": "Internal data engine"
                    },
                    {
                              "id": "c",
                              "text": "Instant debugging editor"
                    },
                    {
                              "id": "d",
                              "text": "Independent development executable"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IDE",
                              "statement": "Integrated development environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IDE = integrated development environment.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Integrated development environment",
          "commonErrors": [
                    "Choosing a plausible-sounding but wrong expansion."
          ]
},
        },
        {
          id: "ecs11-u8-devtools-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two benefits of using a code library in a project.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reuse",
                              "statement": "Libraries provide tested, ready-made routines."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Saves development time — routines are already written.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Reduces errors because the routines are pre-tested.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Keeps the main program shorter and easier to maintain.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Time saving and reliability; shorter, more maintainable code.",
          "commonErrors": [
                    "Saying libraries make programs run faster — the benefit is development efficiency."
          ]
},
        },
        {
          id: "ecs11-u8-devtools-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how an API allows two separate systems to work together, using an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "API",
                              "statement": "Defined interface specifying functions a service offers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "An API defines the requests a program can make and the responses it receives.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The provider controls implementation; the user only needs the interface.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: a weather app calls a weather API to fetch temperature data.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Systems stay decoupled — either side can change internals without breaking the other.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Clear, correct example supporting the explanation.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "API = defined interface; e.g. weather API lets an app request data without knowing internals.",
          "commonErrors": [
                    "Describing an API as a physical connector or cable."
          ]
},
        },
        {
          id: "ecs11-u8-devtools-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student is choosing tools to write a Python program for a school project.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways an IDE helps compared with a plain text editor.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe how the debugger would be used when the program gives wrong results.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IDE features",
                              "statement": "Editor, translator, debugger combined with assistance features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Syntax highlighting and error messages catch mistakes early.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Auto-completion speeds up coding and reduces typos.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) One-click running and integrated translator/debugger streamline workflow.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Set breakpoints at suspicious lines to pause execution.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Inspect variable values to find where they become wrong.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Step through line by line to trace the fault.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Highlighting/auto-complete/integrated tools.  (b) Breakpoints + variable inspection.",
          "commonErrors": [
                    "Listing IDE features without explaining the benefit."
          ]
},
        },
        {
          id: "ecs11-u8-devtools-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company wants to build a program that displays live train times.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how a transport API could be used, including what the program sends and receives.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Give two reasons the company should reuse an existing mapping or data library rather than writing everything from scratch.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "API usage",
                              "statement": "Program sends a defined request; service returns structured data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) The program sends a request to the API, e.g. station code and time.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The API returns structured data such as departure times and destinations.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The program parses the response and displays it to the user.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The company does not need to collect or maintain live data itself.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Saves development time — routines already written and tested.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Reduces bugs because library code is maintained by specialists.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Allows the team to focus on unique features of their app.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Two distinct, justified reasons given.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) Request station/time -> API returns times -> display.  (b) Time saving; reliability.",
          "commonErrors": [
                    "Vague answer: 'the API gives the times' with no request/response detail."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u8-lesson-8-1-notes",
      title: "Translators and Development Tools Notes",
      summary: "Compilers, interpreters, assemblers, IDEs, debuggers, libraries and APIs.",
      sections: [
        { heading: "Translators compared", body: "Compiler: whole program -> machine code before running; fast; standalone executable; machine-specific. Interpreter: line by line during running; slow; immediate errors; portable source. Assembler: assembly -> machine code." },
        { heading: "Development tools", body: "IDE = editor + translator + debugger in one. Debugger: breakpoints, stepping, variable inspection. Libraries: reusable tested routines. API: defined interface for using a service — request in, structured data out." },
        { heading: "Exam technique", body: "Comparison questions reward a table-like answer covering speed, error timing, portability and output. Always link each tool to its purpose." },
      ],
    },
  ],
};
