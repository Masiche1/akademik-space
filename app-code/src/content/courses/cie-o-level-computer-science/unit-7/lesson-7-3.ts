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
            { id: "a", text: "Edge cases of valid ranges" }, { id: "b", text: "Only correct inputs" }, { id: "c", text: "Network speed" }, { id: "d", text: "File sizes" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Track variable values through algorithm steps" }, { id: "b", text: "Encrypt data" }, { id: "c", text: "Speed up code" }, { id: "d", text: "Store files" },
          ], correctChoiceId: "a" },
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
