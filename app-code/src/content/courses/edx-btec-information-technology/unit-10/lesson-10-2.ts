import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "edxbtecit-u10-lesson-10-2",
  code: "10-2",
  title: "Programming Concepts and Testing",
  goal: "I CAN explain core programming constructs and describe testing and debugging techniques.",
  standards: ["Pearson BTEC Level 3 National Information Technology — Specialist unit: Systems Development and Implementation", "Programming fundamentals, testing and debugging"],
  
  vocabulary: [
    { term: "Variable", definition: "Named storage location holding a value that can change during execution." },
    { term: "Data type", definition: "Classification of data — integer, real, string, Boolean." },
    { term: "Selection", definition: "Program structure choosing between paths using IF/ELSE conditions." },
    { term: "Iteration", definition: "Program structure repeating actions — loops (FOR, WHILE)." },
    { term: "Algorithm", definition: "Step-by-step procedure for solving a problem." },
    { term: "Bug", definition: "Defect in a program causing incorrect behaviour." },
    { term: "Dry run", definition: "Manually tracing algorithm execution to find errors." },
  ],
  concepts: [
    {
      id: "edxbtecit-u10-l2-programming",
      title: "Programming constructs",
      skill: "Explain variables, data types, selection, iteration and basic algorithm design.",
      lesson: {
        sections: [
          {
            heading: "Variables and data types",
            body: "**Variables** store values that change during execution: `total = 0`. **Data types**: integer (whole numbers), real/float (decimals), string (text), Boolean (TRUE/FALSE). Choosing the right type prevents errors and saves memory.\n\n**Constants** hold fixed values (e.g. PI = 3.14159). **Operators**: arithmetic (+, −, ×, ÷), comparison (=, ≠, <, >), logical (AND, OR, NOT).",
          },
          {
            heading: "Selection and iteration",
            body: "**Selection** (IF/ELSE): executes different code paths based on conditions — `IF score >= 50 THEN pass ELSE fail`. **Iteration**: loops repeat actions — **FOR** (known number of times), **WHILE** (until condition false). Nested structures combine both.\n\n**Algorithms**: precise step-by-step procedures — flowcharts, pseudocode. Must be unambiguous, finite, and have clear input/output. Decomposition breaks problems into sub-problems.",
          },
        ],
        keyFormulas: [
          { name: "Selection", statement: "IF condition THEN action ELSE alternative" },
          { name: "Iteration", statement: "FOR n times / WHILE condition do action" },
          { name: "Data types", statement: "integer, real, string, Boolean" },
        ],
        workedExample: {
          problem: "Write pseudocode to input 10 numbers and output their sum.",
          solution: "total ← 0\nFOR i ← 1 TO 10\n  INPUT number\n  total ← total + number\nNEXT i\nOUTPUT total",
        },
      },
      questions: [
        {
          id: "edxbtecit-u10-l2-programming-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which data type stores TRUE or FALSE?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Integer"
                    },
                    {
                              "id": "b",
                              "text": "String"
                    },
                    {
                              "id": "c",
                              "text": "Boolean"
                    },
                    {
                              "id": "d",
                              "text": "Real"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Boolean",
                              "statement": "Data type storing TRUE/FALSE."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Boolean holds logical values.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(c)** Boolean"
},
        },
        {
          id: "edxbtecit-u10-l2-programming-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a variable and a constant?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Variable vs constant",
                              "statement": "Changeable vs fixed value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Variable value can change during execution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Constant value stays fixed.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Variable changes; constant fixed"
},
        },
        {
          id: "edxbtecit-u10-l2-programming-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between selection (IF/ELSE) and iteration (loops).",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Selection vs iteration",
                              "statement": "Choose path vs repeat action."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Selection chooses between paths based on a condition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Iteration repeats actions a set number of times or until a condition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Clear distinction with purpose.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "IF/ELSE selects path; loops repeat"
},
        },
        {
          id: "edxbtecit-u10-l2-programming-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write pseudocode to input a student's mark and output 'Pass' if it is 40 or above, otherwise 'Fail'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Pseudocode",
                              "statement": "Clear sequential instructions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "INPUT mark.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "IF mark >= 40 THEN ...",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "OUTPUT 'Pass' in true branch.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "ELSE OUTPUT 'Fail'.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Correct logic and structure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "INPUT mark; IF mark >= 40 OUTPUT Pass ELSE Fail"
},
        },
        {
          id: "edxbtecit-u10-l2-programming-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Define variable and data type.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Name the four basic data types.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Write pseudocode for a loop that outputs numbers 1 to 5.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Programming basics",
                              "statement": "Variables, types, loop structure."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Variable = named storage; data type = data classification.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Integer, real, string, Boolean.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "FOR i ← 1 TO 5 ... NEXT i structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "OUTPUT i inside loop.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Correct complete pseudocode.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Variable/type defs; 4 types; FOR loop outputs 1-5"
},
        },
        {
          id: "edxbtecit-u10-l2-programming-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Define variable, constant and data type. (b) Name four data types. (c) Explain selection with an example. (d) Explain iteration with an example. (e) What makes a good algorithm? (f) Write pseudocode to find the largest of three input numbers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define variable, constant, data type.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Four data types.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Selection explanation.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Iteration explanation.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Good algorithm traits.",
                    "marks": 1
          },
          {
                    "label": "f",
                    "prompt": "Pseudocode for largest of three.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Programming constructs",
                              "statement": "Variables, types, selection, iteration, algorithms."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Variable changes; constant fixed; type classifies data.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Integer, real, string, Boolean.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "IF/ELSE chooses path by condition (e.g. pass/fail).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Loops repeat (FOR count / WHILE condition).",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Unambiguous, finite, clear input/output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "INPUT a,b,c; IF a>b AND a>c largest=a ... correct comparisons.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Constructs and pseudocode for max of three."
},
        },
      ],
    },
    {
      id: "edxbtecit-u10-l2-testing",
      title: "Testing and debugging",
      skill: "Describe types of testing, test cases and debugging techniques used in software development.",
      lesson: {
        sections: [
          {
            heading: "Types of testing",
            body: "**Unit testing**: individual modules/components in isolation. **Integration testing**: modules tested together to check interfaces. **System testing**: whole system against requirements. **Acceptance testing**: users verify it meets their needs — alpha (developers' site) and beta (real users).\n\n**Test cases** document inputs, expected and actual results. **Black-box** testing checks outputs without seeing code; **white-box** examines internal logic. **Regression testing** re-checks after changes.",
          },
          {
            heading: "Debugging",
            body: "**Debugging** = finding and fixing defects. Techniques: **dry run** (trace by hand), **trace tables** (track variable values), **breakpoints** (pause execution), **print/logging statements**, **stepping** through code line by line.\n\nA **bug** is the defect; an **error** is the human mistake; a **failure** is when the bug manifests. Prevention: code reviews, version control, testing early and often.",
          },
        ],
        keyFormulas: [
          { name: "Testing levels", statement: "Unit → integration → system → acceptance" },
          { name: "Bug vs error vs failure", statement: "Mistake → defect → manifestation" },
          { name: "Dry run", statement: "Manual trace to find errors" },
        ],
        workedExample: {
          problem: "A program outputs the wrong total. Describe how a developer would debug it.",
          solution: "Dry-run the algorithm with known inputs; use a trace table to track variables; add print statements; check the loop bounds and accumulation line; fix and retest.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u10-l2-testing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which testing level checks individual modules in isolation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "System testing"
                    },
                    {
                              "id": "b",
                              "text": "Unit testing"
                    },
                    {
                              "id": "c",
                              "text": "Acceptance testing"
                    },
                    {
                              "id": "d",
                              "text": "Regression testing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unit testing",
                              "statement": "Tests individual components in isolation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unit testing = isolated module testing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(b)** Unit testing"
},
        },
        {
          id: "edxbtecit-u10-l2-testing-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a dry run?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dry run",
                              "statement": "Manual tracing of algorithm execution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Manually trace through code/algorithm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "To find logical errors before running.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Manual trace of execution to find errors"
},
        },
        {
          id: "edxbtecit-u10-l2-testing-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a bug, an error and a failure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bug/error/failure",
                              "statement": "Mistake → defect → manifestation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Error = human mistake during development.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bug = defect introduced into the code.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Failure = when the bug causes wrong behaviour.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Error→bug→failure chain"
},
        },
        {
          id: "edxbtecit-u10-l2-testing-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Describe three debugging techniques a developer could use to locate a bug.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Debugging techniques",
                              "statement": "Trace, breakpoints, logging."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dry run/trace table to trace variable values manually.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Breakpoints/stepping to pause and inspect execution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Print/logging statements to output intermediate values.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each technique explained.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Techniques appropriate to bug hunting.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Trace tables, breakpoints/stepping, logging"
},
        },
        {
          id: "edxbtecit-u10-l2-testing-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: undefined,
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the four levels of testing in order.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State what acceptance testing checks.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Distinguish black-box from white-box testing.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Testing levels",
                              "statement": "Unit to acceptance; box approaches."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Unit, integration, system, acceptance.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Whether system meets user requirements.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Performed by users/end-users.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Black-box = outputs only; white-box = internal logic.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4 levels; acceptance=user validation; black vs white box"
},
        },
        {
          id: "edxbtecit-u10-l2-testing-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts. (a) Name the levels of testing in order. (b) Define black-box testing. (c) Explain what a trace table does. (d) Distinguish bug, error and failure. (e) Name two debugging techniques. (f) Why is regression testing needed?",
          parts: [
          {
                    "label": "a",
                    "prompt": "Testing levels in order.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Black-box testing.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Trace table purpose.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Bug vs error vs failure.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Two debugging techniques.",
                    "marks": 2
          },
          {
                    "label": "f",
                    "prompt": "Why regression testing.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Testing and debugging",
                              "statement": "Levels, trace tables, debugging."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Unit, integration, system, acceptance.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Tests outputs without examining internal code.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Tracks variable values through execution steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Reveals where values go wrong.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Error=mistake, bug=defect, failure=manifestation.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "e",
                              "reasoning": "Breakpoints/stepping or print statements; dry run/trace.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "f",
                              "reasoning": "Ensures changes didn't break existing features.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Testing levels, trace tables, debugging techniques."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtecit-u10-n102-notes",
      title: "Systems dev 10-2 — notes",
      summary: "Variables/types; IF-ELSE selection, FOR/WHILE iteration; unit→integration→system→acceptance testing; dry runs and trace tables debug.",
      sections: [
        { heading: "Key idea", body: "Algorithms = precise steps; selection chooses, iteration repeats." },
        { heading: "Testing", body: "Test small → large: unit, integration, system, acceptance." },
        { heading: "Debugging", body: "Trace tables and breakpoints reveal where values go wrong." },
      ],
    },
  ],
};
