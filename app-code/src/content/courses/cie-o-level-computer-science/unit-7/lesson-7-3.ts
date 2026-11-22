import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "olcs-u7-lesson-7-3",
  code: "7-3",
  title: "Testing Algorithms",
  goal: "I CAN choose test data, use trace tables and dry runs, and find and fix errors in algorithms.",
  standards: ["2210 7.6", "2210 7.7", "2210 7.8"],
  vocabulary: [
    { term: "Test data", definition: "Inputs chosen to check an algorithm works correctly." },
    { term: "Normal data", definition: "Typical valid input the program is designed for." },
    { term: "Boundary data", definition: "Input at the edge of valid ranges — catches off-by-one errors." },
    { term: "Abnormal data", definition: "Invalid input the program should reject or handle safely." },
    { term: "Trace table", definition: "Table tracking variable values through each algorithm step." },
    { term: "Dry run", definition: "Manually stepping through an algorithm on paper to check logic." },
    { term: "Logic error", definition: "Algorithm produces wrong results despite running without crashing." },
    { term: "Syntax error", definition: "Code violates language rules — won't compile/run." },
  ],
  concepts: [
    {
      id: "olcs-u7-testdata",
      title: "Choosing test data",
      skill: "Select normal, boundary and abnormal test data to verify algorithms.",
      lesson: {
        sections: [
          { heading: "Types of test data", body: "- **Normal data**: typical valid input — does it work for the usual case?\n- **Boundary data**: values at the limits — e.g. age 0 or 120, empty list, single item. Catches off-by-one errors.\n- **Abnormal data**: invalid input — letters where numbers expected, negative values, oversized input. Tests error handling." },
          { heading: "Why test", body: "Testing with varied data reveals bugs that normal use might miss. Boundary data is especially important — most errors hide at edges." },
          { heading: "Example", body: "For 'enter exam mark 0-100': normal = 65; boundary = 0 and 100; abnormal = -5, 'abc', 150." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Suggest test data for a program validating passwords of 8-20 characters.",
          solution: "Normal: 'password123' (12 chars). Boundary: exactly 8 and exactly 20 chars. Abnormal: 7 chars, 21 chars, empty, symbols-only.",
        },
      },
      questions: [
        {
          id: "olcs-u7-td-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Boundary data is used to test…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Network speed" },
            { id: "b", text: "Edge cases of valid ranges" },
            { id: "c", text: "File sizes" },
            { id: "d", text: "Only correct inputs" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Boundary data", statement: "Limits of valid range." }], steps: [{ reasoning: "Boundary = edges.", working: "\\text{edges}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Edge cases" },
        },
        {
          id: "olcs-u7-td-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish normal from abnormal test data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Test data types", statement: "Valid typical vs invalid." }], steps: [
            { reasoning: "Normal: valid typical input.", working: "\\text{valid}", marks: 1, markCode: "M" },
            { reasoning: "Abnormal: invalid input to reject.", working: "\\text{invalid}", marks: 1, markCode: "A" },
          ], finalAnswer: "Normal = typical valid input; abnormal = invalid input that should be rejected." },
        },
        {
          id: "olcs-u7-td-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A program accepts exam marks from 0 to 100. Suggest one piece of each type of test data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Test data", statement: "Normal, boundary, abnormal." }], steps: [
            { reasoning: "Normal: e.g. 65.", working: "65", marks: 1, markCode: "M" },
            { reasoning: "Boundary: 0 and 100.", working: "0,100", marks: 1, markCode: "M" },
            { reasoning: "Abnormal: -1, 101, 'abc'.", working: "-1,101", marks: 1, markCode: "M" },
            { reasoning: "All three types given.", marks: 1, markCode: "A" },
          ], finalAnswer: "Normal 65; boundary 0/100; abnormal -1/101/'abc'." },
        },
        {
          id: "olcs-u7-td-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Test data review.",
          parts: [
            { label: "a", prompt: "Define normal test data.", marks: 2 },
            { label: "b", prompt: "Define boundary test data.", marks: 2 },
            { label: "c", prompt: "Define abnormal test data.", marks: 2 },
            { label: "d", prompt: "Suggest test data for a field requiring a 4-digit PIN.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Test data", statement: "Normal/boundary/abnormal coverage." },
          ], steps: [
            { part: "a", reasoning: "Typical valid input.", working: "\\text{typical}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Edge of valid range.", working: "\\text{edge}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Invalid input to reject.", working: "\\text{invalid}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Normal: '1234'.", working: "1234", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Boundary: '0000'/'9999'.", working: "0000", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Abnormal: '123'/'12a4'/empty.", working: "123", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) typical (b) edge (c) invalid (d) 1234/0000-9999/123" },
        },
        {
          id: "olcs-u7-td-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Abnormal test data is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Correct output" },
            { id: "b", text: "Data at the range edge" },
            { id: "c", text: "Typical valid input" },
            { id: "d", text: "Invalid input the program should reject" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Abnormal data", statement: "Invalid input to reject." }], steps: [{ reasoning: "Abnormal = invalid input.", working: "\\text{invalid}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Invalid input to reject" },
        },
        {
          id: "olcs-u7-td-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many types of test data are there: normal, boundary, abnormal?",
          response: { type: "numeric", parts: [{ label: "Number of types", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Test data", statement: "Normal, boundary, abnormal." }], steps: [
            { reasoning: "Three types named.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u7-td-q7", difficulty: "core", totalMarks: 1,
          stem: "For a program accepting exam marks from 0 to 100, which is boundary data?",
          response: { type: "mcq", choices: [
            { id: "a", text: "-5" },
            { id: "b", text: "50 only" },
            { id: "c", text: "0 and 100" },
            { id: "d", text: "'abc'" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Boundary data", statement: "Limits of the valid range." }], steps: [{ reasoning: "0 and 100 are the edges.", working: "0,100", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 0 and 100" },
        },
        {
          id: "olcs-u7-td-q8", difficulty: "core", totalMarks: 1,
          stem: "A password must be 8 to 20 characters long. How many boundary lengths are there?",
          response: { type: "numeric", parts: [{ label: "Boundary lengths", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "Boundary data", statement: "Edges of valid range." }], steps: [
            { reasoning: "8 and 20 characters = 2 boundaries.", working: "2", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u7-td-q9", difficulty: "core", totalMarks: 1,
          stem: "Which of these is abnormal data for an age field?",
          response: { type: "mcq", choices: [
            { id: "a", text: "65" },
            { id: "b", text: "18" },
            { id: "c", text: "'abc'" },
            { id: "d", text: "30" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Abnormal data", statement: "Invalid input type." }], steps: [{ reasoning: "Letters are invalid for a numeric age field.", working: "\\text{'abc'}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 'abc'" },
        },
        {
          id: "olcs-u7-td-q10", difficulty: "core", totalMarks: 2,
          stem: "Give one example of boundary test data for exam marks entered as 0-100.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Boundary data", statement: "Edge of valid range." }], steps: [
            { reasoning: "0 or 100.", working: "0", marks: 1, markCode: "M" },
            { reasoning: "Correct boundary value.", marks: 1, markCode: "A" },
          ], finalAnswer: "0 or 100." },
        },
        {
          id: "olcs-u7-td-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Boundary test data is especially important because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It needs no typing" },
            { id: "b", text: "Most errors hide at the edges of valid ranges" },
            { id: "c", text: "It tests presentation" },
            { id: "d", text: "It is quicker to enter" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Boundary testing", statement: "Errors cluster at edges." }], steps: [{ reasoning: "Off-by-one errors appear at boundaries.", working: "\\text{edges}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Errors hide at range edges" },
        },
        {
          id: "olcs-u7-td-q12", difficulty: "core", totalMarks: 1,
          stem: "For a field requiring exactly a 4-digit PIN, how many boundary PINs are there (shortest and longest valid)?",
          response: { type: "numeric", parts: [{ label: "Number of boundary PINs", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Boundary", statement: "Two ends of the valid range." }], steps: [
            { reasoning: "'0000' and '9999' are the two boundaries.", working: "2", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u7-td-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why abnormal test data is necessary when testing an algorithm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Abnormal data", statement: "Tests error handling." }], steps: [
            { reasoning: "Checks the program rejects invalid input safely.", working: "\\text{reject}", marks: 1, markCode: "M" },
            { reasoning: "Prevents crashes or corrupted processing.", working: "\\text{crash}", marks: 1, markCode: "M" },
            { reasoning: "Tests security against bad input.", working: "\\text{security}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Abnormal data verifies the program safely rejects invalid input, preventing crashes and exploits." },
        },
        {
          id: "olcs-u7-td-q14", difficulty: "challenge", totalMarks: 1,
          stem: "For a field requiring a value from 1 to 50, which pair is boundary data?",
          response: { type: "mcq", choices: [
            { id: "a", text: "'a' and 'b'" },
            { id: "b", text: "1 and 50" },
            { id: "c", text: "25 and 30" },
            { id: "d", text: "0 and 51" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Boundary data", statement: "Edges of valid range." }], steps: [{ reasoning: "1 and 50 are the limits.", working: "1,50", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 1 and 50" },
        },
        {
          id: "olcs-u7-td-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many types of test data exist and how many boundary values exist for a 0-100 mark range.",
          response: { type: "numeric", parts: [
            { label: "Test data types", answer: 3 },
            { label: "Boundary values", answer: 2 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Test data", statement: "3 types; 2 boundaries." }], steps: [
            { reasoning: "Normal, boundary, abnormal.", working: "3", marks: 1, markCode: "M" },
            { reasoning: "0 and 100.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "3 types; 2 boundaries" },
        },
        {
          id: "olcs-u7-td-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Test data review.",
          parts: [
            { label: "a", prompt: "Define normal test data.", marks: 2 },
            { label: "b", prompt: "Define boundary test data.", marks: 2 },
            { label: "c", prompt: "Define abnormal test data.", marks: 2 },
            { label: "d", prompt: "Suggest normal, boundary and abnormal data for a field requiring a 4-digit PIN.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Test data", statement: "Normal/boundary/abnormal coverage." },
          ], steps: [
            { part: "a", reasoning: "Typical valid input.", working: "\\text{typical}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Edge of valid range.", working: "\\text{edge}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Invalid input to reject.", working: "\\text{invalid}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Normal: '1234'.", working: "1234", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Boundary: '0000'/'9999'.", working: "0000", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Abnormal: '123'/'12a4'/empty.", working: "123", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) typical (b) edge (c) invalid (d) 1234/0000-9999/123" },
        },
      ],
    },
    {
      id: "olcs-u7-tracing",
      title: "Trace tables and dry runs",
      skill: "Use trace tables and dry runs to check algorithm logic and find errors.",
      lesson: {
        sections: [
          { heading: "Dry run", body: "Manually execute the algorithm on paper with sample inputs, recording each step's result. Catches logic errors before coding." },
          { heading: "Trace table", body: "A table with columns for each variable, plus a row for each loop iteration/step. You fill in values as the algorithm runs — revealing exactly where values go wrong.\n\nExample for `total = total + x` in a loop: track `total` and `x` each iteration." },
          { heading: "Finding errors", body: "- **Syntax error**: won't run — fix language rules.\n- **Logic error**: runs but wrong result — use trace tables/dry runs to find where reasoning breaks.\n- **Runtime error**: crashes during execution (e.g. divide by zero)." },
        ],
        keyFormulas: [
          { name: "Trace table", statement: "Rows = steps; columns = variables" },
        ],
        workedExample: {
          problem: "An algorithm totals numbers but forgets to initialise `total=0`. What happens in a trace?",
          solution: "First iteration tries total+first with undefined total → error or wrong result; trace table shows `total` never initialised.",
        },
      },
      questions: [
        {
          id: "olcs-u7-tr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A trace table is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Store files" },
            { id: "b", text: "Speed up code" },
            { id: "c", text: "Track variable values through algorithm steps" },
            { id: "d", text: "Encrypt data" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Trace table", statement: "Track variables per step." }], steps: [{ reasoning: "Trace = track values.", working: "\\text{track}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Track variables" },
        },
        {
          id: "olcs-u7-tr-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a dry run?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Dry run", statement: "Manual step-through on paper." }], steps: [
            { reasoning: "Manually execute on paper.", working: "\\text{manual}", marks: 1, markCode: "M" },
            { reasoning: "To check logic before coding.", marks: 1, markCode: "A" },
          ], finalAnswer: "Manually stepping through an algorithm on paper to verify its logic." },
        },
        {
          id: "olcs-u7-tr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Distinguish a syntax error from a logic error.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Error types", statement: "Rules violation vs wrong reasoning." }], steps: [
            { reasoning: "Syntax: violates language rules — won't run.", working: "\\text{syntax}", marks: 1, markCode: "M" },
            { reasoning: "Logic: runs but wrong results.", working: "\\text{logic}", marks: 1, markCode: "M" },
            { reasoning: "Logic found by trace tables/dry runs.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Syntax = language rule violation (won't run); logic = wrong results despite running." },
        },
        {
          id: "olcs-u7-tr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Testing and tracing review.",
          parts: [
            { label: "a", prompt: "Define dry run.", marks: 2 },
            { label: "b", prompt: "Define trace table.", marks: 2 },
            { label: "c", prompt: "Distinguish syntax from logic errors.", marks: 2 },
            { label: "d", prompt: "Explain how a trace table helps find a logic error.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Trace debugging", statement: "Values reveal where reasoning breaks." },
          ], steps: [
            { part: "a", reasoning: "Manual step-through on paper.", working: "\\text{manual}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Tracks variable values per step.", working: "\\text{table}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Syntax: rule violation.", working: "\\text{syntax}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Logic: wrong results.", working: "\\text{logic}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Shows value at each step.", working: "\\text{values}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Pinpoints where value goes wrong.", working: "\\text{pinpoint}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Allows fixing the faulty step.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) manual run (b) variable tracker (c) rules vs results (d) reveals wrong step" },
        },
        {
          id: "olcs-u7-tr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A dry run is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Manually stepping through an algorithm on paper" },
            { id: "b", text: "Making a backup" },
            { id: "c", text: "Testing hardware" },
            { id: "d", text: "Compiling code" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Dry run", statement: "Manual step-through." }], steps: [{ reasoning: "Dry run = manual execution on paper.", working: "\\text{manual}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Manual step-through" },
        },
        {
          id: "olcs-u7-tr-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many error types are named: syntax error, logic error, runtime error?",
          response: { type: "numeric", parts: [{ label: "Number of error types", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Error types", statement: "Syntax, logic, runtime." }], steps: [
            { reasoning: "Three types named.", working: "3", marks: 1, markCode: "B" },
          ], finalAnswer: "3" },
        },
        {
          id: "olcs-u7-tr-q7", difficulty: "core", totalMarks: 1,
          stem: "A logic error means the program…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always crashes" },
            { id: "b", text: "Will not compile" },
            { id: "c", text: "Runs faster" },
            { id: "d", text: "Runs but produces wrong results" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Logic error", statement: "Runs but wrong output." }], steps: [{ reasoning: "Logic error = wrong results despite running.", working: "\\text{wrong}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Runs but wrong results" },
        },
        {
          id: "olcs-u7-tr-q8", difficulty: "core", totalMarks: 1,
          stem: "A trace table has one row per step and one column per variable. An algorithm has 5 steps and 2 variables. How many variable-value cells are filled?",
          response: { type: "numeric", parts: [{ label: "Number of cells", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Trace table", statement: "Rows = steps; columns = variables." }], steps: [
            { reasoning: "5 × 2 = 10 cells.", working: "10", marks: 1, markCode: "B" },
          ], finalAnswer: "10" },
        },
        {
          id: "olcs-u7-tr-q9", difficulty: "core", totalMarks: 1,
          stem: "A runtime error occurs…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Never" },
            { id: "b", text: "During design" },
            { id: "c", text: "At compile time" },
            { id: "d", text: "During execution, e.g. dividing by zero" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Runtime error", statement: "Crash during execution." }], steps: [{ reasoning: "Runtime errors happen while running.", working: "\\text{crash}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** During execution" },
        },
        {
          id: "olcs-u7-tr-q10", difficulty: "core", totalMarks: 2,
          stem: "State two uses of a trace table when checking an algorithm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trace table", statement: "Tracks variable values per step." }], steps: [
            { reasoning: "Shows each variable's value at every step.", working: "\\text{values}", marks: 1, markCode: "M" },
            { reasoning: "Reveals where a value first goes wrong / verifies loop behaviour.", working: "\\text{pinpoint}", marks: 1, markCode: "A" },
          ], finalAnswer: "Tracks variable values per step and pinpoints where logic goes wrong." },
        },
        {
          id: "olcs-u7-tr-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which type of error is most likely to be found using a trace table?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Hardware fault" },
            { id: "b", text: "Network error" },
            { id: "c", text: "Logic error" },
            { id: "d", text: "Syntax error" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Tracing", statement: "Finds wrong-value reasoning." }], steps: [{ reasoning: "Trace tables reveal logic errors.", working: "\\text{logic}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Logic error" },
        },
        {
          id: "olcs-u7-tr-q12", difficulty: "core", totalMarks: 1,
          stem: "A loop runs 4 iterations and a trace table records 3 variables each iteration. How many variable values are recorded in total?",
          response: { type: "numeric", parts: [{ label: "Values recorded", answer: 12 }] },
          markscheme: { principles: [{ kind: "principle", name: "Trace table", statement: "Iterations × variables." }], steps: [
            { reasoning: "4 × 3 = 12 values.", working: "12", marks: 1, markCode: "B" },
          ], finalAnswer: "12" },
        },
        {
          id: "olcs-u7-tr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a trace table helps pinpoint a logic error.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Trace debugging", statement: "Values reveal the wrong step." }], steps: [
            { reasoning: "Records each variable's value at every step.", working: "\\text{values}", marks: 1, markCode: "M" },
            { reasoning: "Compare with expected values.", working: "\\text{expected}", marks: 1, markCode: "M" },
            { reasoning: "First wrong value reveals the faulty step.", working: "\\text{pinpoint}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "By showing values at each step, a trace table reveals exactly where the algorithm's reasoning first goes wrong." },
        },
        {
          id: "olcs-u7-tr-q14", difficulty: "challenge", totalMarks: 1,
          stem: "An algorithm forgets to initialise total = 0 before a loop. This most likely causes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No error at all" },
            { id: "b", text: "A logic error / wrong results" },
            { id: "c", text: "Faster execution" },
            { id: "d", text: "A syntax error" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Initialisation", statement: "Missing init → wrong results." }], steps: [{ reasoning: "Undefined starting value gives wrong output.", working: "\\text{wrong}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A logic error" },
        },
        {
          id: "olcs-u7-tr-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many error types are described and how many cells a trace table fills for an algorithm with 5 steps and 2 variables.",
          response: { type: "numeric", parts: [
            { label: "Error types", answer: 3 },
            { label: "Trace cells", answer: 10 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Errors and tracing", statement: "3 error types; 5×2 cells." }], steps: [
            { reasoning: "Syntax, logic, runtime.", working: "3", marks: 1, markCode: "M" },
            { reasoning: "5 × 2 = 10.", working: "10", marks: 1, markCode: "A" },
          ], finalAnswer: "3 types; 10 cells" },
        },
        {
          id: "olcs-u7-tr-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Tracing and error review.",
          parts: [
            { label: "a", prompt: "Define a dry run.", marks: 2 },
            { label: "b", prompt: "Define a trace table.", marks: 2 },
            { label: "c", prompt: "Distinguish a syntax error from a logic error.", marks: 2 },
            { label: "d", prompt: "Explain how a trace table reveals a logic error.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Trace debugging", statement: "Values reveal where reasoning breaks." },
          ], steps: [
            { part: "a", reasoning: "Manual step-through on paper.", working: "\\text{manual}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Tracks variable values per step.", working: "\\text{table}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Syntax: rule violation, won't run.", working: "\\text{syntax}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Logic: runs but wrong results.", working: "\\text{logic}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Shows value at each step.", working: "\\text{values}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Pinpoints where value goes wrong.", working: "\\text{pinpoint}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Allows fixing the faulty step.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) manual run (b) variable tracker (c) rules vs results (d) reveals wrong step" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u7-7-3-notes", title: "Testing algorithms — notes", summary: "Test data types, dry runs, trace tables, error types.",
      sections: [
        { heading: "Test data", body: "Normal (typical), boundary (edges), abnormal (invalid) — cover all three." },
        { heading: "Debugging", body: "Dry run = manual check; trace table = variable values per step. Syntax = rule break; logic = wrong result; runtime = crash." },
      ] },
  ],
};
