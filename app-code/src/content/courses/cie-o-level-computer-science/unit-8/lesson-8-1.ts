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
            { id: "a", text: "A named storage location that can change" }, { id: "b", text: "A fixed value" }, { id: "c", text: "A type of loop" }, { id: "d", text: "A file format" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Variable", statement: "Changeable named storage." }], steps: [{ reasoning: "Variable = changeable.", working: "\\text{variable}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Changeable storage" },
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
            { id: "a", text: "Returns a value" }, { id: "b", text: "Uses no parameters" }, { id: "c", text: "Cannot be called" }, { id: "d", text: "Is faster" },
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
