import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ecs10-u6-lesson-6-2",
  code: "6-2",
  title: "Debugging and Error Handling",
  goal: "I CAN identify syntax, logic and runtime errors and use debugging techniques to locate faults.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — programming", "4CP1 debugging: error types, trace tables and error handling"],
  
  vocabulary: [
    { term: "Syntax error", definition: "An error in the program's structure or rules, preventing it from running." },
    { term: "Logic error", definition: "An error where the program runs but produces wrong results." },
    { term: "Runtime error", definition: "An error that occurs while the program is running, such as division by zero." },
    { term: "Dry run", definition: "Manually tracing an algorithm or program with sample data without running it." },
    { term: "Trace table", definition: "A table recording variable values at each step to find where logic goes wrong." },
    { term: "Breakpoint", definition: "A marked point where execution pauses so variables can be inspected." },
    { term: "Exception handling", definition: "Code that responds safely when an error occurs during execution." },
  ],
  concepts: [
    {
      id: "ecs10-u6-error-types",
      title: "Types of program errors",
      skill: "Distinguish syntax, logic and runtime errors using examples.",
      lesson: {
        sections: [
          {
            heading: "Syntax errors",
            body: "A **syntax error** breaks the language rules, such as a missing bracket, misspelt keyword or incorrect punctuation. The program usually will not compile or run until the syntax error is fixed.\n\nExample: `IF score > 50` without THEN/ENDIF in pseudocode, or `prin('Hello')` instead of `print('Hello')`.",
          },
          {
            heading: "Logic and runtime errors",
            body: "A **logic error** lets the program run but gives wrong results, such as using `>` instead of `>=`. A **runtime error** happens during execution, such as dividing by zero or reading input of the wrong type.\n\nLogic errors are often harder to find because there is no crash; tests with known expected results are essential.",
          },
        ],
        keyFormulas: [
          { name: "Syntax error", statement: "program cannot run because rules are broken" },
          { name: "Logic error", statement: "program runs but output is wrong" },
          { name: "Runtime error", statement: "program fails during execution" },
        ],
        workedExample: {
          problem: "A program should pass scores >= 50 but uses >. Classify the error.",
          solution: "It is a logic error: a score of exactly 50 is wrongly failed even though the program runs.",
        },
      },
      questions: [
        {
          id: "ecs10-u6-error-types-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which error prevents a program from compiling or starting?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Logic error"
                    },
                    {
                              "id": "b",
                              "text": "Runtime error"
                    },
                    {
                              "id": "c",
                              "text": "Syntax error"
                    },
                    {
                              "id": "d",
                              "text": "Design error"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Syntax error",
                              "statement": "Breaks language rules before execution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Syntax errors stop the program from being parsed or run.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Syntax error"
},
        },
        {
          id: "ecs10-u6-error-types-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give one example of a runtime error.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Runtime error",
                              "statement": "Occurs during execution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Division by zero is a common runtime error.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Other valid examples include invalid memory access or wrong input type causing a crash.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Division by zero (or similar execution-time failure)"
},
        },
        {
          id: "ecs10-u6-error-types-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program runs without crashing but gives the wrong average. Classify the error and explain how it could be found.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Logic error",
                              "statement": "Runs but produces incorrect results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "This is a logic error because execution continues.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It could be found by testing with known inputs and comparing to expected results.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "A trace table or dry run can reveal where variables become wrong.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Logic error; found by testing/tracing against expected results"
},
        },
        {
          id: "ecs10-u6-error-types-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify each described fault.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Missing ENDIF in an IF block.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Using >= where the requirement is >.",
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
                              "name": "Error classification",
                              "statement": "Syntax breaks rules; logic changes results."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Missing ENDIF is a syntax/structure error.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Wrong comparison operator is a logic error.",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) syntax error (b) logic error"
},
        },
        {
          id: "ecs10-u6-error-types-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A program calculates tax = income * 0.2 but the requirement is tax = income * 0.25. It only crashes when income is negative.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the logic error.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Identify the possible runtime error.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why tests should include negative income.",
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
                              "name": "Error types",
                              "statement": "Wrong formula is logic; execution failure is runtime."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Using 0.2 instead of 0.25 gives wrong tax for all incomes.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Negative income may trigger a crash or invalid calculation at runtime.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Erroneous/boundary data can expose crashes that normal positive inputs miss.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Logic: wrong rate; runtime: negative income crash; test invalid inputs"
},
        },
        {
          id: "ecs10-u6-error-types-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student program should output the larger of two numbers but sometimes outputs the smaller.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State whether this is a syntax, logic or runtime error and justify.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two input pairs that would reveal the fault.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how a trace table would help locate the fault.",
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
                              "name": "Logic error",
                              "statement": "Program runs but selection of larger value is wrong."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "It is a logic error because the program runs but chooses the wrong result.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Examples: 5 and 2 should output 5; 3 and 9 should output 9.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "A trace table records variable values each step, showing where the comparison or assignment fails.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Logic error; test pairs like (5,2) and (3,9); trace variables to find wrong comparison"
},
        },
      ],
    },
    {
      id: "ecs10-u6-debugging-techniques",
      title: "Debugging techniques",
      skill: "Use dry runs, trace tables, breakpoints and validation to locate and fix faults.",
      lesson: {
        sections: [
          {
            heading: "Manual techniques",
            body: "A **dry run** means tracing the algorithm or code by hand with sample data. A **trace table** records variable values after each step, making it easy to see where a value first becomes wrong. These techniques are especially useful for logic errors.\n\nBreakpoints pause execution at chosen lines so the programmer can inspect variables. Stepping executes one line at a time, helping identify the exact instruction that changes state unexpectedly.",
          },
          {
            heading: "Preventing faults",
            body: "**Input validation** checks data before use, reducing runtime errors. Clear variable names, comments and modular subroutines make faults easier to isolate. Testing each module separately limits the search area.\n\nWhen a fault is found, reproduce it with the smallest possible input, fix it, then retest the same input and related boundary cases.",
          },
        ],
        keyFormulas: [
          { name: "Dry run", statement: "trace algorithm manually with sample data" },
          { name: "Trace table", statement: "record variable values at each step" },
          { name: "Breakpoint", statement: "pause execution to inspect state" },
          { name: "Validation", statement: "check input before processing" },
        ],
        workedExample: {
          problem: "A loop adds 1 to total but starts total at 1. Use a trace table to show the error.",
          solution: "For values [2,3], expected total 5; traced total becomes 6 because it started at 1 instead of 0.",
        },
      },
      questions: [
        {
          id: "ecs10-u6-debugging-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a dry run?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Running the program at high speed"
                    },
                    {
                              "id": "b",
                              "text": "Tracing the algorithm manually with sample data"
                    },
                    {
                              "id": "c",
                              "text": "Deleting all errors automatically"
                    },
                    {
                              "id": "d",
                              "text": "Printing the source code"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dry run",
                              "statement": "Manual trace with sample data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A dry run follows the steps by hand to check logic without executing code.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Manual trace with sample data"
},
        },
        {
          id: "ecs10-u6-debugging-techniques-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a breakpoint do in a debugger?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Breakpoint",
                              "statement": "Pauses execution at a chosen point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It stops the program at a selected line.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The programmer can then inspect variables and step through later lines.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Pauses execution so variables/state can be inspected"
},
        },
        {
          id: "ecs10-u6-debugging-techniques-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a trace table helps find a logic error in a loop.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Trace table",
                              "statement": "Records variable values step by step."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It shows the value of each variable after every iteration.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The first row where a value differs from expected identifies the faulty step.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This is especially useful when the program runs but gives wrong results.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Records variables each step; first wrong value reveals faulty instruction"
},
        },
        {
          id: "ecs10-u6-debugging-techniques-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A program crashes when the user enters text for a numeric field.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Classify the error type.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Suggest one way to prevent the crash.",
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
                              "name": "Input validation",
                              "statement": "Check input type/range before processing."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Runtime error caused by invalid input type.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Validate that input is numeric before converting or calculating; reject invalid input safely.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Runtime error; validate input type before use"
},
        },
        {
          id: "ecs10-u6-debugging-techniques-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A loop should print numbers 1 to 5 but prints 1 to 4. The code uses FOR i ← 1 TO 5 but the body is inside the loop incorrectly.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two possible causes for the missing 5.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Describe how stepping through the code would help.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one preventive coding practice.",
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
                              "name": "Debugging loop bounds",
                              "statement": "Check loop limits and body placement."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Possible causes: loop ends at 4, output uses i-1, or last iteration is skipped by an EXIT/IF error.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Stepping shows i values and whether the body executes for i=5.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use clear bounds, test boundary values and keep loop body inside ENDFOR.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Check loop bound/body placement; step to see i=5 execution; test boundaries"
},
        },
        {
          id: "ecs10-u6-debugging-techniques-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A program calculates average = total / count but sometimes returns a huge negative number instead of crashing.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest why a huge negative result might occur instead of a clear crash.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe how a trace table would investigate count and total values.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two safeguards to prevent the problem.",
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
                              "name": "Debugging numeric faults",
                              "statement": "Inspect accumulator values and guard invalid states."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Integer overflow, uninitialised count or wrong sign could produce a large negative value without an immediate crash.",
                              "marks": 3,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Record total and count after each addition; find where count becomes 0 or negative or total becomes wrong.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Initialise variables, validate count > 0 before division, and handle division-by-zero safely.",
                              "marks": 3,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inspect total/count; initialise and validate before division; handle zero safely"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u6-lesson-6-2-notes",
      title: "Debugging and error handling — notes",
      summary: "Syntax errors stop execution, logic errors give wrong results and runtime errors occur during execution.",
      sections: [
        { heading: "Error types", body: "Syntax breaks rules; logic changes output; runtime fails during execution." },
        { heading: "Techniques", body: "Dry runs, trace tables, breakpoints and stepping locate where values go wrong." },
        { heading: "Prevention", body: "Validate input, initialise variables and test boundary cases." },
      ],
    },
  ],
};
