import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "eiascs-u2-lesson-2-3",
  code: "2-3",
  title: "Functions and Programming Practice",
  goal: "I CAN use functions, procedures and modular programming.",
  standards: [
    "Edexcel IAS Computer Science 9CP01 Unit 2 — Algorithms and Programming",
  ],
  vocabulary: [
    { term: "Function", definition: "Reusable code that returns a value." },
    { term: "Procedure", definition: "Reusable code that performs action." },
    { term: "Parameter", definition: "Input value passed to function." },
    { term: "Return value", definition: "Output from function." },
    {
      term: "Modularity",
      definition: "Breaking program into independent parts.",
    },
    { term: "Scope", definition: "Where variable is accessible." },
  ],
  concepts: [
    {
      id: "eiascs-u2-functions",
      title: "Functions and Procedures",
      skill: "Use functions and procedures to modularise code.",
      lesson: {
        sections: [
          {
            heading: "Functions vs procedures",
            body: "**Function**: returns a value — `FUNCTION add(a,b) RETURN a+b`. **Procedure**: performs action, no return — `PROCEDURE printMenu()`. **Parameter**: input to function — `add(5,3)`. **Local vs global**: local inside function, global accessible everywhere.\n\n**Benefits**: reuse code, test independently, easier maintenance, abstraction.",
          },
          {
            heading: "Modular programming",
            body: "**Modularity**: break program into modules — each does one thing. **Abstraction**: hide complexity — user calls function, doesn't need internals. **Interface**: how function is called — parameters, return type.\n\n**Example**: `FUNCTION areaOfCircle(radius)` — user provides radius, gets area — doesn't need formula details.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Code returns value vs performs action. Difference?",
          solution: "Function returns; procedure acts.",
        },
      },
      questions: [
        {
          id: "eiascs-u2-func-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Performs action only" },
              { id: "b", text: "Returns a value" },
              { id: "c", text: "Stores data" },
              { id: "d", text: "Loops" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function",
                statement: "Returns value.",
              },
            ],
            steps: [
              {
                reasoning: "Function = returns value.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Returns value",
            commonErrors: ["Procedure confused."],
          },
        },
        {
          id: "eiascs-u2-func-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish function and procedure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Function vs procedure",
                statement: "Return vs action.",
              },
            ],
            steps: [
              {
                reasoning: "Function returns value — used in expressions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Procedure performs action — no return value.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: function=calculate, procedure=print.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Function=return, procedure=action.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiascs-u2-func-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain benefits of modular programming.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Modularity",
                statement: "Reuse + maintain.",
              },
            ],
            steps: [
              {
                reasoning: "Reuse code — write once, use many times.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Test independently — easier debugging.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easier maintenance — change one module.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Abstraction — hide complexity.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Reuse, test, maintain, abstract.",
            commonErrors: ["No benefit.", "One benefit."],
          },
        },
        {
          id: "eiascs-u2-func-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write function to calculate average of two numbers.",
          parts: [
            { label: "a", prompt: "Write pseudocode.", marks: 4 },
            { label: "b", prompt: "Explain parameters and return.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Function writing",
                statement: "Params + return.",
              },
            ],
            steps: [
              {
                reasoning: "(a) FUNCTION average(a, b) RETURN (a + b) / 2.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct syntax, logic.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Parameters: a, b — inputs.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Return: (a+b)/2 — output value.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) FUNCTION avg(a,b) RETURN (a+b)/2 (b) params+return",
            commonErrors: ["No return.", "No params."],
          },
        },
      ],
    },
    {
      id: "eiascs-u2-debugging",
      title: "Debugging and Testing",
      skill: "Identify and fix programming errors, test code.",
      lesson: {
        sections: [
          {
            heading: "Error types",
            body: "**Syntax error**: code doesn't follow rules — missing bracket, typo. **Runtime error**: crashes during execution — division by zero, invalid input. **Logic error**: runs but wrong result — incorrect algorithm.\n\n**Debugging**: find and fix errors — trace execution, check values, test cases.",
          },
          {
            heading: "Testing",
            body: "**Test cases**: inputs to verify output — normal, edge, invalid. **Dry run**: trace through code manually — find logic errors. **Print statements**: debug output — check variable values.\n\n**Prevention**: write clear code, test early/often, use comments, modular design.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Program crashes on division by zero. Error type?",
          solution: "Runtime error.",
        },
      },
      questions: [
        {
          id: "eiascs-u2-debug-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a syntax error?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wrong result" },
              { id: "b", text: "Code doesn't follow rules" },
              { id: "c", text: "Crash during run" },
              { id: "d", text: "Logic bug" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Syntax error",
                statement: "Rule violation.",
              },
            ],
            steps: [
              { reasoning: "Syntax = code rules.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Rule violation",
            commonErrors: ["Logic confused."],
          },
        },
        {
          id: "eiascs-u2-debug-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of programming errors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Error types",
                statement: "Syntax, runtime, logic.",
              },
            ],
            steps: [
              {
                reasoning: "Syntax — code doesn't follow rules.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Runtime — crashes during execution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Logic — runs but wrong result.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Syntax, runtime, logic.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eiascs-u2-debug-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain debugging process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debugging",
                statement: "Find + fix.",
              },
            ],
            steps: [
              {
                reasoning: "Identify error — syntax, runtime, logic.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Trace execution — follow code line by line.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Check values — variables, intermediate results.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Fix and test — verify solution works.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Identify→trace→check→fix→test.",
            commonErrors: ["Guess and check.", "No process."],
          },
        },
        {
          id: "eiascs-u2-debug-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Program gives wrong answer for some inputs.",
          parts: [
            { label: "a", prompt: "Identify likely error type.", marks: 4 },
            { label: "b", prompt: "Suggest debugging steps.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Debugging practice",
                statement: "Logic error + process.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Logic error — runs but wrong result.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Works for some inputs — edge case issue.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Test edge cases — boundary values.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Trace execution — find where logic fails.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) logic error (b) test+trace",
            commonErrors: ["Syntax error.", "No steps."],
          },
        },
      ],
    },
    {
      id: "eiascs-u2-evaluation",
      title: "Evaluating Programming Approaches",
      skill: "Evaluate programming languages, paradigms and code quality.",
      lesson: {
        sections: [
          {
            heading: "Programming paradigms",
            body: "**Procedural**: step-by-step — C, Python. **Object-oriented**: objects with methods — Java, C++. **Functional**: functions as main building blocks — Haskell, Lisp. **Declarative**: state what, not how — SQL, HTML.\n\n**Choosing**: procedural for simple tasks; OOP for complex systems; functional for data processing.",
          },
          {
            heading: "Code quality",
            body: "**Readability**: clear names, comments, indentation. **Efficiency**: fast, low memory — algorithms matter. **Maintainability**: modular, documented — easy to change. **Reusability**: functions, libraries — don't reinvent wheel.\n\n**Evaluation**: good code = correct, efficient, readable, maintainable — balance all.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Program uses objects with methods, classes. Paradigm?",
          solution: "Object-oriented.",
        },
      },
      questions: [
        {
          id: "eiascs-u2-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is object-oriented programming?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Step-by-step" },
              { id: "b", text: "Objects with methods and properties" },
              { id: "c", text: "Functions only" },
              { id: "d", text: "SQL queries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "OOP", statement: "Objects." },
            ],
            steps: [
              {
                reasoning: "OOP = objects + methods.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Objects",
            commonErrors: ["Procedural confused."],
          },
        },
        {
          id: "eiascs-u2-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two code quality criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Code quality",
                statement: "Readable + efficient.",
              },
            ],
            steps: [
              {
                reasoning: "Readability — clear names, comments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Efficiency — fast, low memory.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Maintainability — easy to change.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Readable, efficient, maintainable.",
            commonErrors: ["Only one.", "Wrong criterion."],
          },
        },
        {
          id: "eiascs-u2-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why code readability matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Readability",
                statement: "Understanding + maintenance.",
              },
            ],
            steps: [
              {
                reasoning: "Others can understand — collaboration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easier debugging — see logic clearly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easier maintenance — modify without breaking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reduces errors — clear code = fewer bugs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Understand+debug+maintain+fewer errors.",
            commonErrors: ["Not important.", "One reason."],
          },
        },
        {
          id: "eiascs-u2-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two programs solve same problem — one fast but unreadable, one slow but clear.",
          parts: [
            { label: "a", prompt: "Identify trade-off.", marks: 4 },
            { label: "b", prompt: "Suggest best approach.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Code trade-offs",
                statement: "Speed vs clarity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Efficiency vs readability — can't have both perfectly.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Fast code may be complex — hard to maintain.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Balance — optimise critical parts, keep rest clear.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Context matters — real-time needs speed, maintenance needs clarity.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) speed vs clarity (b) balance by context",
            commonErrors: ["One always better.", "No trade-off."],
          },
        },
      ],
    },
  ],
};
