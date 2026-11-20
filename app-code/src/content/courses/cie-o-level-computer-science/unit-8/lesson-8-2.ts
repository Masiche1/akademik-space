import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "olcs-u8-lesson-8-2",
  code: "8-2",
  title: "Arrays",
  goal: "I CAN declare and use 1D and 2D arrays, and process them with iteration.",
  standards: ["2210 8.2.1", "2210 8.2.3"],
  vocabulary: [
    { term: "Array", definition: "A collection of elements stored under one name, accessed by index." },
    { term: "Index", definition: "Position number of an array element, usually starting at 0 or 1." },
    { term: "1D array", definition: "Single list of values — e.g. `scores[0..9]`." },
    { term: "2D array", definition: "Array of arrays — rows and columns, like a table or grid." },
    { term: "Iteration over array", definition: "Looping through each element using an index counter." },
  ],
  concepts: [
    {
      id: "olcs-u8-arrays",
      title: "One- and two-dimensional arrays",
      skill: "Declare arrays, access elements by index and store related data.",
      lesson: {
        sections: [
          { heading: "1D arrays", body: "An array stores many values under one name, each accessed by an **index**.\n\n```\nDECLARE scores[10]        // indices 0-9 or 1-10\nscores[0] = 85\nscores[1] = 72\nOUTPUT scores[0]      // 85\n```\n\nUseful for lists: test scores, names, sensor readings." },
          { heading: "2D arrays", body: "A 2D array stores rows and columns — like a grid or table.\n\n```\nDECLARE grid[3][3]        // 3 rows × 3 columns\ngrid[0][0] = 1\ngrid[1][2] = 7\n```\n\nFirst index = row, second = column. Used for matrices, game boards, spreadsheets." },
          { heading: "Choosing arrays", body: "Use an array when you need many related values handled together — especially with loops. Indexing starts at 0 in most languages (check yours)." },
        ],
        keyFormulas: [
          { name: "Index", statement: "array[row][col] for 2D; array[i] for 1D" },
        ],
        workedExample: {
          problem: "Store 5 test scores in an array and output the third one.",
          solution: "DECLARE scores[5]\nscores[0]=70; scores[1]=85; scores[2]=90; scores[3]=78; scores[4]=92\nOUTPUT scores[2]  // 90",
        },
      },
      questions: [
        {
          id: "olcs-u8-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An array element is accessed by its…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Index" }, { id: "b", text: "Password" }, { id: "c", text: "File name" }, { id: "d", text: "Colour" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Index", statement: "Position number." }], steps: [{ reasoning: "Index = position.", working: "\\text{index}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Index" },
        },
        {
          id: "olcs-u8-ar-q2", difficulty: "core", totalMarks: 2,
          stem: "What does `grid[1][2]` refer to in a 2D array?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "2D indexing", statement: "row then column." }], steps: [
            { reasoning: "Row 1, column 2.", working: "\\text{row 1, col 2}", marks: 1, markCode: "M" },
            { reasoning: "Correct interpretation.", marks: 1, markCode: "A" },
          ], finalAnswer: "The element in row 1, column 2." },
        },
        {
          id: "olcs-u8-ar-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why arrays are useful for storing a list of test scores.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Arrays", statement: "Many values under one name, loopable." }], steps: [
            { reasoning: "All scores under one name.", working: "\\text{one name}", marks: 1, markCode: "M" },
            { reasoning: "Accessed by index — easy to loop over.", working: "\\text{index+loop}", marks: 1, markCode: "M" },
            { reasoning: "Enables totals, averages, searches.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Arrays hold all scores together and can be looped through for totals/averages/searches." },
        },
        {
          id: "olcs-u8-ar-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Arrays review.",
          parts: [
            { label: "a", prompt: "Define array and index.", marks: 2 },
            { label: "b", prompt: "Distinguish 1D from 2D arrays.", marks: 2 },
            { label: "c", prompt: "In `data[4]`, what does 4 represent?", marks: 1 },
            { label: "d", prompt: "Write pseudocode to declare an array `temps[7]` and store 21.5 in the third position.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Array", statement: "Indexed collection under one name." },
          ], steps: [
            { part: "a", reasoning: "Array: collection under one name.", working: "\\text{array}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Index: position number.", working: "\\text{index}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "1D: single list.", working: "\\text{1D}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "2D: rows and columns.", working: "\\text{2D}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Index/position 4.", working: "4", marks: 1, markCode: "A" },
            { part: "d", reasoning: "DECLARE temps[7].", working: "DECLARE", marks: 1, markCode: "M" },
            { part: "d", reasoning: "temps[2]=21.5 (if 0-indexed).", working: "temps[2]=21.5", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct index.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid pseudocode.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) collection+index (b) list vs grid (c) position 4 (d) DECLARE temps[7]; temps[2]=21.5" },
        },
      ],
    },
    {
      id: "olcs-u8-array-loops",
      title: "Processing arrays with iteration",
      skill: "Use loops to read into, process and output array elements.",
      lesson: {
        sections: [
          { heading: "Filling an array", body: "Use a counted loop to read values into each index:\n\n```\nFOR i ← 0 TO 9\n  INPUT scores[i]\nNEXT i\n```" },
          { heading: "Processing", body: "Loop through indices to compute totals, averages, find max/min, search:\n\n```\ntotal ← 0\nFOR i ← 0 TO 9\n  total ← total + scores[i]\nNEXT i\naverage ← total / 10\n```" },
          { heading: "Searching arrays", body: "Linear search through an array checks each element until found. Arrays pair naturally with iteration — the index counter drives access." },
        ],
        keyFormulas: [
          { name: "Array loop", statement: "FOR i ← start TO end ... array[i] ... NEXT" },
        ],
        workedExample: {
          problem: "Write pseudocode to find the highest score in scores[0..9].",
          solution: "max ← scores[0]\nFOR i ← 1 TO 9\n  IF scores[i] > max THEN\n    max ← scores[i]\n  ENDIF\nNEXT i\nOUTPUT max",
        },
      },
      questions: [
        {
          id: "olcs-u8-al-q1", difficulty: "foundation", totalMarks: 1,
          stem: "To fill an array with 10 values, you typically use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A counted loop" }, { id: "b", text: "A single INPUT" }, { id: "c", text: "No loop" }, { id: "d", text: "A procedure call" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Array fill", statement: "Loop over indices." }], steps: [{ reasoning: "Loop fills array.", working: "\\text{loop}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Counted loop" },
        },
        {
          id: "olcs-u8-al-q2", difficulty: "core", totalMarks: 2,
          stem: "Write pseudocode to total all elements of scores[0..9].",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Array total", statement: "Accumulate in a loop." }], steps: [
            { reasoning: "Initialise total=0, loop adding scores[i].", working: "total+scores[i]", marks: 1, markCode: "M" },
            { reasoning: "Correct pseudocode.", marks: 1, markCode: "A" },
          ], finalAnswer: "total←0; FOR i←0 TO 9: total←total+scores[i]; NEXT" },
        },
        {
          id: "olcs-u8-al-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to find the maximum value in an array using a loop.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Max search", statement: "Track best so far, compare each." }], steps: [
            { reasoning: "Start with first element as max.", working: "\\text{init}", marks: 1, markCode: "M" },
            { reasoning: "Loop comparing each element to max.", working: "\\text{compare}", marks: 1, markCode: "M" },
            { reasoning: "Update max when larger found.", working: "\\text{update}", marks: 1, markCode: "M" },
            { reasoning: "Output max at end.", marks: 1, markCode: "A" },
          ], finalAnswer: "Initialise max, loop comparing each element, update when larger, output max." },
        },
        {
          id: "olcs-u8-al-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Array processing review.",
          parts: [
            { label: "a", prompt: "Write pseudocode to declare and fill temps[5] from user input.", marks: 3 },
            { label: "b", prompt: "Write pseudocode to compute the average of temps[0..4].", marks: 3 },
            { label: "c", prompt: "Explain why a loop is needed rather than separate variables.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Array processing", statement: "Index-driven loops handle collections." },
          ], steps: [
            { part: "a", reasoning: "DECLARE temps[5].", working: "DECLARE", marks: 1, markCode: "M" },
            { part: "a", reasoning: "FOR i←0 TO 4 INPUT temps[i].", working: "INPUT temps[i]", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct loop.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "total loop then divide by 5.", working: "total/5", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct accumulation.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct average.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "One name + index vs many variables.", working: "\\text{one name}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Loop handles any size.", working: "\\text{any size}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Easier to process/search.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) declare+input loop (b) total/5 (c) scalable single name" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u8-8-2-notes", title: "Arrays — notes", summary: "1D/2D arrays, indexing, filling and processing with loops.",
      sections: [
        { heading: "Arrays", body: "Indexed collection under one name. 1D = list; 2D = grid. Access: array[i] or array[row][col]." },
        { heading: "Processing", body: "Use counted loops to fill, total, average, search. Index counter drives access." },
      ] },
  ],
};
