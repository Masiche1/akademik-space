import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "olcs-u8-lesson-8-1",
  code: "8-1",
  title: "Programming Concepts",
  goal: "I CAN use variables, data types, input/output, sequence-selection-iteration and procedures/functions.",
  standards: ["2210 8.1.1", "2210 8.1.4", "2210 8.1.6"],
  vocabulary: [
    { term: "Variable", definition: "Named storage location whose value can change during execution." },
    { term: "Constant", definition: "Named value that does not change during execution." },
    { term: "Data type", definition: "The kind of data a variable holds — integer, real, char, string, Boolean." },
    { term: "Selection", definition: "Program choosing between paths using IF/ELSE or CASE." },
    { term: "Iteration", definition: "Repeating instructions — counted (FOR) or conditional (WHILE) loops." },
    { term: "Procedure", definition: "Named block of code that performs a task; called by name." },
    { term: "Function", definition: "Procedure that returns a value." },
    { term: "Parameter", definition: "Value passed into a procedure/function." },
  ],
  concepts: [
    {
      id: "olcs-u8-basics",
      title: "Variables, types and control structures",
      skill: "Use variables, data types, I/O and sequence-selection-iteration correctly.",
      lesson: {
        sections: [
          { heading: "Variables and constants", body: "- **Variable**: named storage that changes — `score = 0` then `score = score + 10`.\n- **Constant**: fixed value — `TAX_RATE = 0.2`.\n\nGood practice: meaningful names (`total`, not `x`), initialise before use." },
          { heading: "Data types", body: "- **Integer**: whole numbers (42, -7).\n- **Real**: decimals (3.14).\n- **Char**: single character ('A').\n- **String**: text ('hello').\n- **Boolean**: TRUE/FALSE." },
          { heading: "Control structures", body: "- **Sequence**: instructions in order.\n- **Selection**: IF condition THEN ... ELSE ... ENDIF (or CASE for multiple options).\n- **Iteration**: FOR counter loops (known count) or WHILE condition loops (until condition false).\n- **Nested**: structures inside structures — e.g. IF inside a FOR loop." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write pseudocode to print 'Pass' if score >= 50 else 'Fail'.",
          solution: "INPUT score\nIF score >= 50 THEN\n  OUTPUT 'Pass'\nELSE\n  OUTPUT 'Fail'\nENDIF",
        },
      },
      questions: [
        {
          id: "olcs-u8-bc-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A variable is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of loop" },
            { id: "b", text: "A file format" },
            { id: "c", text: "A fixed value" },
            { id: "d", text: "A named storage location that can change" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Variable", statement: "Changeable named storage." }], steps: [{ reasoning: "Variable = changeable.", working: "\\text{variable}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Changeable storage" },
        },
        {
          id: "olcs-u8-bc-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish a FOR loop from a WHILE loop.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Loops", statement: "Counted vs conditional." }], steps: [
            { reasoning: "FOR: known number of iterations.", working: "\\text{counted}", marks: 1, markCode: "M" },
            { reasoning: "WHILE: repeats until condition false.", working: "\\text{conditional}", marks: 1, markCode: "A" },
          ], finalAnswer: "FOR loops a set count; WHILE loops until a condition is false." },
        },
        {
          id: "olcs-u8-bc-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between selection and iteration.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Selection vs iteration", statement: "Choose path vs repeat." }], steps: [
            { reasoning: "Selection chooses between alternatives (IF).", working: "\\text{choose}", marks: 1, markCode: "M" },
            { reasoning: "Iteration repeats instructions (loops).", working: "\\text{repeat}", marks: 1, markCode: "M" },
            { reasoning: "Selection runs once; iteration may run many times.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Selection chooses a path based on conditions; iteration repeats code in a loop." },
        },
        {
          id: "olcs-u8-bc-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Programming basics review.",
          parts: [
            { label: "a", prompt: "Define variable and constant.", marks: 2 },
            { label: "b", prompt: "Name three data types.", marks: 3 },
            { label: "c", prompt: "Distinguish sequence, selection, iteration.", marks: 3 },
            { label: "d", prompt: "Give a use for a nested IF inside a FOR loop.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Control structures", statement: "Sequence/selection/iteration." },
          ], steps: [
            { part: "a", reasoning: "Variable: changeable; constant: fixed.", working: "\\text{var vs const}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Integer/real/string.", working: "\\text{types}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Second type.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Third type.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Sequence: in order.", working: "\\text{seq}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Selection: choose; iteration: repeat.", working: "\\text{sel+iter}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "e.g. process each item differently based on a condition.", working: "\\text{nested}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) changeable vs fixed (b) int/real/string (c) order/choose/repeat (d) conditional per item" },
        },
        {
          id: "olcs-u8-bc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which data type should hold the value 'Hello'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Integer" },
            { id: "b", text: "Real" },
            { id: "c", text: "String" },
            { id: "d", text: "Boolean" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "String", statement: "Text data type." }], steps: [{ reasoning: "'Hello' is text → string.", working: "\\text{string}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** String" },
        },
        {
          id: "olcs-u8-bc-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many basic data types are listed: integer, real, char, string, Boolean?",
          response: { type: "numeric", parts: [{ label: "Number of types", answer: 5 }] },
          markscheme: { principles: [{ kind: "definition", name: "Data types", statement: "Integer, real, char, string, Boolean." }], steps: [
            { reasoning: "Five types named.", working: "5", marks: 1, markCode: "B" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u8-bc-q7", difficulty: "core", totalMarks: 1,
          stem: "A constant differs from a variable because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Uses no memory" },
            { id: "b", text: "Cannot change during execution" },
            { id: "c", text: "Is always a string" },
            { id: "d", text: "Is faster" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Constant", statement: "Fixed value." }], steps: [{ reasoning: "Constants don't change.", working: "\\text{fixed}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Cannot change" },
        },
        {
          id: "olcs-u8-bc-q8", difficulty: "core", totalMarks: 1,
          stem: "How many of these values are integers: 3.14, 10, 'A', TRUE, -5?",
          response: { type: "numeric", parts: [{ label: "Number of integers", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "Integer", statement: "Whole numbers." }], steps: [
            { reasoning: "10 and -5 are integers; 3.14 is real, 'A' char, TRUE Boolean.", working: "2", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u8-bc-q9", difficulty: "core", totalMarks: 1,
          stem: "A WHILE loop repeats…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Never" },
            { id: "b", text: "A fixed number of times only" },
            { id: "c", text: "Exactly once" },
            { id: "d", text: "Until its condition becomes false" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "WHILE loop", statement: "Repeats until condition false." }], steps: [{ reasoning: "WHILE = conditional iteration.", working: "\\text{until false}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Until condition false" },
        },
        {
          id: "olcs-u8-bc-q10", difficulty: "core", totalMarks: 2,
          stem: "State two of the three basic control structures.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Control structures", statement: "Sequence, selection, iteration." }], steps: [
            { reasoning: "Any two: sequence, selection, iteration.", working: "\\text{structures}", marks: 1, markCode: "M" },
            { reasoning: "Second valid structure.", marks: 1, markCode: "A" },
          ], finalAnswer: "Sequence, selection, iteration (any two)." },
        },
        {
          id: "olcs-u8-bc-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A 'nested' structure means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One control structure inside another" },
            { id: "b", text: "Faster code" },
            { id: "c", text: "No loops at all" },
            { id: "d", text: "Two separate programs" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Nesting", statement: "Structure inside a structure." }], steps: [{ reasoning: "Nested = inside another structure.", working: "\\text{inside}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** One structure inside another" },
        },
        {
          id: "olcs-u8-bc-q12", difficulty: "core", totalMarks: 1,
          stem: "A FOR loop runs from i = 1 to i = 10 inclusive. How many iterations does it perform?",
          response: { type: "numeric", parts: [{ label: "Number of iterations", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "FOR loop", statement: "Counted iterations." }], steps: [
            { reasoning: "1 to 10 inclusive = 10 iterations.", working: "10", marks: 1, markCode: "B" },
          ], finalAnswer: "10" },
        },
        {
          id: "olcs-u8-bc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain when a programmer should use a FOR loop rather than a WHILE loop.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Loop choice", statement: "Counted vs conditional." }], steps: [
            { reasoning: "FOR when the number of iterations is known.", working: "\\text{known count}", marks: 1, markCode: "M" },
            { reasoning: "WHILE when the condition depends on data.", working: "\\text{condition}", marks: 1, markCode: "M" },
            { reasoning: "Example: FOR for 10 scores; WHILE until input valid.", working: "\\text{example}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Use FOR for a known number of iterations; use WHILE when looping until a condition changes." },
        },
        {
          id: "olcs-u8-bc-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The statement 'IF score >= 50 THEN ... ELSE ... ENDIF' is an example of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A function" },
            { id: "b", text: "Sequence" },
            { id: "c", text: "Selection" },
            { id: "d", text: "Iteration" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Selection", statement: "Choosing between paths." }], steps: [{ reasoning: "IF/ELSE is selection.", working: "\\text{select}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Selection" },
        },
        {
          id: "olcs-u8-bc-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many basic data types are described and how many iterations a FOR loop from 1 to 10 performs.",
          response: { type: "numeric", parts: [
            { label: "Data types", answer: 5 },
            { label: "Iterations", answer: 10 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Types and loops", statement: "5 types; 10 iterations." }], steps: [
            { reasoning: "Integer, real, char, string, Boolean.", working: "5", marks: 1, markCode: "M" },
            { reasoning: "1 to 10 inclusive = 10.", working: "10", marks: 1, markCode: "A" },
          ], finalAnswer: "5 types; 10 iterations" },
        },
        {
          id: "olcs-u8-bc-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Programming basics review.",
          parts: [
            { label: "a", prompt: "Distinguish a variable from a constant.", marks: 2 },
            { label: "b", prompt: "Name three data types.", marks: 3 },
            { label: "c", prompt: "Distinguish sequence, selection and iteration.", marks: 3 },
            { label: "d", prompt: "Give one use for a nested IF inside a FOR loop.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Control structures", statement: "Sequence/selection/iteration." },
          ], steps: [
            { part: "a", reasoning: "Variable: changeable; constant: fixed.", working: "\\text{var vs const}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Integer/real/string.", working: "\\text{types}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Second type.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Third type.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Sequence: order; selection: choose; iteration: repeat.", working: "\\text{3 structures}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "All three correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Conditional processing of each loop item.", working: "\\text{nested}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) changeable vs fixed (b) 3 types (c) order/choose/repeat (d) conditional per item" },
        },
      ],
    },
    {
      id: "olcs-u8-functions",
      title: "Procedures, functions and scope",
      skill: "Use procedures and functions with parameters, and understand variable scope.",
      lesson: {
        sections: [
          { heading: "Procedures vs functions", body: "- **Procedure**: named block performing a task, called by name — no return value.\n- **Function**: like a procedure but **returns a value** — used inside expressions.\n\nExample: `PRINT_TOTAL(x)` procedure vs `AREA(r)` function returning $\\pi r^2$." },
          { heading: "Parameters", body: "**Parameters** pass data into a procedure/function. **Actual parameters** are the values you supply; **formal parameters** are the names in the definition. They let one routine handle many different inputs." },
          { heading: "Scope", body: "**Local variable**: declared inside a procedure — exists only while it runs, invisible outside. **Global variable**: declared at top level — accessible everywhere but risky (accidental changes). Best practice: use local variables and pass data via parameters." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Write a function AREA(radius) returning the area of a circle, then use it.",
          solution: "FUNCTION AREA(r)\n  RETURN 3.14159 * r * r\nENDFUNCTION\nOUTPUT AREA(5)  // returns ≈78.54",
        },
      },
      questions: [
        {
          id: "olcs-u8-fn-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A function differs from a procedure because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Returns a value" },
            { id: "b", text: "Is faster" },
            { id: "c", text: "Cannot be called" },
            { id: "d", text: "Uses no parameters" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Function", statement: "Returns a value." }], steps: [{ reasoning: "Function returns value.", working: "\\text{return}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Returns a value" },
        },
        {
          id: "olcs-u8-fn-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a parameter?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Parameter", statement: "Value passed into a routine." }], steps: [
            { reasoning: "Data passed into procedure/function.", working: "\\text{input}", marks: 1, markCode: "M" },
            { reasoning: "Correct definition.", marks: 1, markCode: "A" },
          ], finalAnswer: "A value passed into a procedure or function when it is called." },
        },
        {
          id: "olcs-u8-fn-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why local variables are safer than global variables.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Scope", statement: "Local = limited visibility." }], steps: [
            { reasoning: "Local vars only exist inside their routine.", working: "\\text{local}", marks: 1, markCode: "M" },
            { reasoning: "Can't be accidentally changed elsewhere.", working: "\\text{no accidental}", marks: 1, markCode: "M" },
            { reasoning: "Makes programs easier to debug/maintain.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Local variables are confined to their routine, preventing accidental changes and easing debugging." },
        },
        {
          id: "olcs-u8-fn-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Procedures, functions and scope review.",
          parts: [
            { label: "a", prompt: "Distinguish procedure from function.", marks: 2 },
            { label: "b", prompt: "Define parameter.", marks: 2 },
            { label: "c", prompt: "Distinguish local from global variable.", marks: 2 },
            { label: "d", prompt: "Write pseudocode for a function DOUBLE(x) returning 2x, then call it for 7.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Scope", statement: "Local vs global visibility." },
          ], steps: [
            { part: "a", reasoning: "Procedure: no return; function: returns value.", working: "\\text{return vs not}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Value passed into routine.", working: "\\text{input}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Local: inside routine only.", working: "\\text{local}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Global: accessible everywhere.", working: "\\text{global}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "FUNCTION DOUBLE(x) RETURN 2*x.", working: "RETURN 2*x", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct function.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Call DOUBLE(7) → 14.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) no-return vs return (b) input value (c) confined vs everywhere (d) DOUBLE(7)=14" },
        },
        {
          id: "olcs-u8-fn-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A parameter is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A value passed into a procedure or function" },
            { id: "b", text: "A loop counter" },
            { id: "c", text: "A global variable" },
            { id: "d", text: "A return value" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Parameter", statement: "Value passed into a routine." }], steps: [{ reasoning: "Parameters pass data in.", working: "\\text{input}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Value passed in" },
        },
        {
          id: "olcs-u8-fn-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many types of variable scope are described: local and global?",
          response: { type: "numeric", parts: [{ label: "Number of scope types", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "Scope", statement: "Local and global." }], steps: [
            { reasoning: "Two scope types.", working: "2", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u8-fn-q7", difficulty: "core", totalMarks: 1,
          stem: "A local variable…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Never changes" },
            { id: "b", text: "Is accessible everywhere" },
            { id: "c", text: "Is always a constant" },
            { id: "d", text: "Exists only inside its routine" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Local variable", statement: "Confined to its routine." }], steps: [{ reasoning: "Local vars exist only inside the routine.", working: "\\text{local}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Exists only inside its routine" },
        },
        {
          id: "olcs-u8-fn-q8", difficulty: "core", totalMarks: 1,
          stem: "A function DOUBLE(x) returns 2 * x. What does DOUBLE(7) return?",
          response: { type: "numeric", parts: [{ label: "DOUBLE(7)", answer: 14 }] },
          markscheme: { principles: [{ kind: "principle", name: "Function call", statement: "Substitute parameter." }], steps: [
            { reasoning: "2 × 7 = 14.", working: "14", marks: 1, markCode: "B" },
          ], finalAnswer: "14" },
        },
        {
          id: "olcs-u8-fn-q9", difficulty: "core", totalMarks: 1,
          stem: "Actual parameters are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Global variables" },
            { id: "b", text: "The values supplied when the routine is called" },
            { id: "c", text: "The names in the definition" },
            { id: "d", text: "Return values" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Actual parameter", statement: "Values at the call site." }], steps: [{ reasoning: "Actual = values passed at call.", working: "\\text{call values}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Values supplied at the call" },
        },
        {
          id: "olcs-u8-fn-q10", difficulty: "core", totalMarks: 2,
          stem: "State two benefits of using procedures and functions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Routines", statement: "Reusable, readable, maintainable." }], steps: [
            { reasoning: "Reusable: call many times.", working: "\\text{reusable}", marks: 1, markCode: "M" },
            { reasoning: "Readable/maintainable: named single jobs.", working: "\\text{readable}", marks: 1, markCode: "A" },
          ], finalAnswer: "Reusability and readability/maintainability." },
        },
        {
          id: "olcs-u8-fn-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A function differs from a procedure because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot contain loops" },
            { id: "b", text: "Uses no parameters" },
            { id: "c", text: "Returns a value" },
            { id: "d", text: "Is always slower" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Function", statement: "Returns a value." }], steps: [{ reasoning: "Functions return values; procedures don't.", working: "\\text{return}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Returns a value" },
        },
        {
          id: "olcs-u8-fn-q12", difficulty: "core", totalMarks: 1,
          stem: "A function TRIPLE(x) returns 3 * x. What does TRIPLE(5) return?",
          response: { type: "numeric", parts: [{ label: "TRIPLE(5)", answer: 15 }] },
          markscheme: { principles: [{ kind: "principle", name: "Function call", statement: "Substitute parameter." }], steps: [
            { reasoning: "3 × 5 = 15.", working: "15", marks: 1, markCode: "B" },
          ], finalAnswer: "15" },
        },
        {
          id: "olcs-u8-fn-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why passing data via parameters is safer than using global variables.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Scope", statement: "Parameters limit visibility." }], steps: [
            { reasoning: "Globals are accessible everywhere — easy to change by accident.", working: "\\text{global risk}", marks: 1, markCode: "M" },
            { reasoning: "Parameters pass only needed data into the routine.", working: "\\text{parameters}", marks: 1, markCode: "M" },
            { reasoning: "Makes routines reusable and easier to debug.", working: "\\text{debug}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Parameters limit data visibility, preventing accidental changes and making routines easier to debug and reuse." },
        },
        {
          id: "olcs-u8-fn-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Formal parameters are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Outputs" },
            { id: "b", text: "The values at the call site" },
            { id: "c", text: "The names used in the routine's definition" },
            { id: "d", text: "Constants" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Formal parameter", statement: "Names in the definition." }], steps: [{ reasoning: "Formal = names in definition.", working: "\\text{names}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Names in the definition" },
        },
        {
          id: "olcs-u8-fn-q15", difficulty: "core", totalMarks: 2,
          stem: "Evaluate DOUBLE(7) and TRIPLE(5) for the functions DOUBLE(x)=2x and TRIPLE(x)=3x.",
          response: { type: "numeric", parts: [
            { label: "DOUBLE(7)", answer: 14 },
            { label: "TRIPLE(5)", answer: 15 },
          ], unordered: true },
          markscheme: { principles: [{ kind: "principle", name: "Function evaluation", statement: "Substitute and compute." }], steps: [
            { reasoning: "DOUBLE(7) = 2 × 7 = 14.", working: "14", marks: 1, markCode: "M" },
            { reasoning: "TRIPLE(5) = 3 × 5 = 15.", working: "15", marks: 1, markCode: "A" },
          ], finalAnswer: "14 and 15" },
        },
        {
          id: "olcs-u8-fn-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Procedures, functions and scope review.",
          parts: [
            { label: "a", prompt: "Distinguish a procedure from a function.", marks: 2 },
            { label: "b", prompt: "Define a parameter.", marks: 2 },
            { label: "c", prompt: "Distinguish a local from a global variable.", marks: 2 },
            { label: "d", prompt: "Write pseudocode for FUNCTION DOUBLE(x) returning 2x, then show DOUBLE(7).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Scope", statement: "Local vs global visibility." },
          ], steps: [
            { part: "a", reasoning: "Procedure: no return; function: returns value.", working: "\\text{return vs not}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Value passed into routine.", working: "\\text{input}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Local: inside routine only.", working: "\\text{local}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Global: accessible everywhere.", working: "\\text{global}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "FUNCTION DOUBLE(x) RETURN 2*x.", working: "RETURN 2*x", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct function.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "DOUBLE(7) = 14.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) no-return vs return (b) input value (c) confined vs everywhere (d) DOUBLE(7)=14" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u8-8-1-notes", title: "Programming concepts — notes", summary: "Variables, types, control structures, procedures/functions, scope.",
      sections: [
        { heading: "Basics", body: "Variable = changeable; constant = fixed. Types: integer, real, char, string, Boolean." },
        { heading: "Structures", body: "Sequence (order), selection (IF/ELSE), iteration (FOR/WHILE). Function returns value; procedure doesn't. Local vars are safer." },
      ] },
  ],
};
