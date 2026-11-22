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
            { id: "a", text: "File name" },
            { id: "b", text: "Password" },
            { id: "c", text: "Colour" },
            { id: "d", text: "Index" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Index", statement: "Position number." }], steps: [{ reasoning: "Index = position.", working: "\\text{index}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Index" },
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
        {
          id: "olcs-u8-ar-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An array declared as scores[0..9] contains how many elements?",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" },
            { id: "b", text: "9" },
            { id: "c", text: "11" },
            { id: "d", text: "0" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Array size", statement: "Indices 0-9 = 10 elements." }], steps: [{ reasoning: "0 through 9 inclusive = 10.", working: "10", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 10" },
        },
        {
          id: "olcs-u8-ar-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many elements does a 2D array grid[3][3] contain?",
          response: { type: "numeric", parts: [{ label: "Number of elements", answer: 9 }] },
          markscheme: { principles: [{ kind: "principle", name: "2D array", statement: "rows × columns." }], steps: [
            { reasoning: "3 × 3 = 9 elements.", working: "9", marks: 1, markCode: "B" },
          ], finalAnswer: "9" },
        },
        {
          id: "olcs-u8-ar-q7", difficulty: "core", totalMarks: 1,
          stem: "In a 2D array, grid[1][2] refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Page 1, item 2" },
            { id: "b", text: "Row 2, column 1" },
            { id: "c", text: "Index 12" },
            { id: "d", text: "Row 1, column 2" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "2D indexing", statement: "row then column." }], steps: [{ reasoning: "First index = row, second = column.", working: "\\text{row,col}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Row 1, column 2" },
        },
        {
          id: "olcs-u8-ar-q8", difficulty: "core", totalMarks: 1,
          stem: "An array temps[7] uses indices 0 to 6. What is the last valid index?",
          response: { type: "numeric", parts: [{ label: "Last index", answer: 6 }] },
          markscheme: { principles: [{ kind: "definition", name: "Index", statement: "0-based positions." }], steps: [
            { reasoning: "7 elements, indices 0-6; last is 6.", working: "6", marks: 1, markCode: "B" },
          ], finalAnswer: "6" },
        },
        {
          id: "olcs-u8-ar-q9", difficulty: "core", totalMarks: 1,
          stem: "In the declaration grid[3][4], the first index represents the…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Value" },
            { id: "b", text: "Size" },
            { id: "c", text: "Row" },
            { id: "d", text: "Column" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "2D indexing", statement: "First index = row." }], steps: [{ reasoning: "First index selects the row.", working: "\\text{row}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Row" },
        },
        {
          id: "olcs-u8-ar-q10", difficulty: "core", totalMarks: 2,
          stem: "State two situations where an array is a useful data structure.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Arrays", statement: "Collections processed together." }], steps: [
            { reasoning: "Any valid use: lists of scores, names, sensor readings, grids.", working: "\\text{lists}", marks: 1, markCode: "M" },
            { reasoning: "Second valid use.", marks: 1, markCode: "A" },
          ], finalAnswer: "Storing lists (scores, names) or grids/tables (2D)." },
        },
        {
          id: "olcs-u8-ar-q11", difficulty: "challenge", totalMarks: 1,
          stem: "In most programming languages, array indices start at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A random number" },
            { id: "b", text: "0" },
            { id: "c", text: "-1" },
            { id: "d", text: "Always 1" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Indexing", statement: "Usually 0-based." }], steps: [{ reasoning: "Most languages index from 0.", working: "0", marks: 1, markCode: "B" }], finalAnswer: "**(b)** 0" },
        },
        {
          id: "olcs-u8-ar-q12", difficulty: "core", totalMarks: 1,
          stem: "If scores[2] = 90, what value is stored at index 2?",
          response: { type: "numeric", parts: [{ label: "Value at index 2", answer: 90 }] },
          markscheme: { principles: [{ kind: "definition", name: "Indexing", statement: "array[i] gives the element." }], steps: [
            { reasoning: "Index 2 holds 90.", working: "90", marks: 1, markCode: "B" },
          ], finalAnswer: "90" },
        },
        {
          id: "olcs-u8-ar-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a 2D array is suitable for representing a spreadsheet or game board.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "2D arrays", statement: "Rows and columns like a grid." }], steps: [
            { reasoning: "Rows and columns map directly to the grid structure.", working: "\\text{grid}", marks: 1, markCode: "M" },
            { reasoning: "Each cell accessed by [row][column].", working: "\\text{row,col}", marks: 1, markCode: "M" },
            { reasoning: "Loops can iterate over rows and columns.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "A 2D array's row/column structure mirrors a spreadsheet or board, with each cell accessed by two indices." },
        },
        {
          id: "olcs-u8-ar-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which declaration creates a 1D array of 5 elements?",
          response: { type: "mcq", choices: [
            { id: "a", text: "DECLARE 5" },
            { id: "b", text: "DECLARE a[5]" },
            { id: "c", text: "DECLARE a" },
            { id: "d", text: "DECLARE a[5][5]" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Array declaration", statement: "name[size] for 1D." }], steps: [{ reasoning: "Single index = 1D array of 5.", working: "\\text{a[5]}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** DECLARE a[5]" },
        },
        {
          id: "olcs-u8-ar-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many elements are in a 1D array a[10] and in a 2D array g[4][5].",
          response: { type: "numeric", parts: [
            { label: "Elements in a[10]", answer: 10 },
            { label: "Elements in g[4][5]", answer: 20 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Array size", statement: "1D = n; 2D = rows × cols." }], steps: [
            { reasoning: "a[10] has 10 elements.", working: "10", marks: 1, markCode: "M" },
            { reasoning: "g[4][5] has 4 × 5 = 20 elements.", working: "20", marks: 1, markCode: "A" },
          ], finalAnswer: "10 and 20" },
        },
        {
          id: "olcs-u8-ar-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Arrays review.",
          parts: [
            { label: "a", prompt: "Define array and index.", marks: 2 },
            { label: "b", prompt: "Distinguish a 1D from a 2D array.", marks: 2 },
            { label: "c", prompt: "In data[4], what does 4 represent?", marks: 1 },
            { label: "d", prompt: "Write pseudocode to declare an array marks[10] and store 88 in the first position.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Array", statement: "Indexed collection under one name." },
          ], steps: [
            { part: "a", reasoning: "Array: collection under one name.", working: "\\text{array}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Index: position number.", working: "\\text{index}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "1D: single list; 2D: rows and columns.", working: "\\text{1D vs 2D}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "The index/position 4.", working: "4", marks: 1, markCode: "A" },
            { part: "d", reasoning: "DECLARE marks[10].", working: "DECLARE", marks: 1, markCode: "M" },
            { part: "d", reasoning: "marks[0]=88 (0-indexed).", working: "marks[0]=88", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct index.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid pseudocode.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) collection+index (b) list vs grid (c) index 4 (d) DECLARE marks[10]; marks[0]=88" },
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
            { id: "a", text: "No loop" },
            { id: "b", text: "A procedure call" },
            { id: "c", text: "A single INPUT" },
            { id: "d", text: "A counted loop" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Array fill", statement: "Loop over indices." }], steps: [{ reasoning: "Loop fills array.", working: "\\text{loop}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Counted loop" },
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
        {
          id: "olcs-u8-al-q5", difficulty: "foundation", totalMarks: 1,
          stem: "To fill an array with 10 values entered by the user, you typically use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No loop" },
            { id: "b", text: "A recursive function" },
            { id: "c", text: "A single INPUT" },
            { id: "d", text: "A counted loop" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Array fill", statement: "Loop over indices." }], steps: [{ reasoning: "A loop inputs each element.", working: "\\text{loop}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** A counted loop" },
        },
        {
          id: "olcs-u8-al-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A loop FOR i ← 0 TO 9 runs how many iterations?",
          response: { type: "numeric", parts: [{ label: "Number of iterations", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "FOR loop", statement: "Counted iterations." }], steps: [
            { reasoning: "0 through 9 inclusive = 10.", working: "10", marks: 1, markCode: "B" },
          ], finalAnswer: "10" },
        },
        {
          id: "olcs-u8-al-q7", difficulty: "core", totalMarks: 1,
          stem: "The statement total ← total + scores[i] inside a loop computes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The maximum value" },
            { id: "b", text: "The sum of all elements" },
            { id: "c", text: "The count of elements" },
            { id: "d", text: "Nothing useful" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Accumulation", statement: "Adds each element to total." }], steps: [{ reasoning: "Accumulating scores[i] gives the sum.", working: "\\text{sum}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** The sum" },
        },
        {
          id: "olcs-u8-al-q8", difficulty: "core", totalMarks: 1,
          stem: "An array holds the values 10, 20 and 30. If total starts at 0 and a loop adds every element, what is total at the end?",
          response: { type: "numeric", parts: [{ label: "Total", answer: 60 }] },
          markscheme: { principles: [{ kind: "principle", name: "Array total", statement: "Sum of elements." }], steps: [
            { reasoning: "10 + 20 + 30 = 60.", working: "60", marks: 1, markCode: "B" },
          ], finalAnswer: "60" },
        },
        {
          id: "olcs-u8-al-q9", difficulty: "core", totalMarks: 1,
          stem: "A linear search through an array…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deletes elements" },
            { id: "b", text: "Checks each element in turn until the target is found" },
            { id: "c", text: "Jumps straight to the middle" },
            { id: "d", text: "Sorts the array first" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Linear search", statement: "Check each element in order." }], steps: [{ reasoning: "Linear search checks elements one by one.", working: "\\text{each}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Checks each element in turn" },
        },
        {
          id: "olcs-u8-al-q10", difficulty: "core", totalMarks: 2,
          stem: "State two different calculations a loop can perform over an array.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Array processing", statement: "Total, average, max, min, count, search." }], steps: [
            { reasoning: "Any valid: total, average, max, min, count, search.", working: "\\text{calc}", marks: 1, markCode: "M" },
            { reasoning: "Second valid calculation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Total, average, maximum, minimum, count or search (any two)." },
        },
        {
          id: "olcs-u8-al-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Finding the maximum value in an array requires…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Comparing each element against the current maximum" },
            { id: "b", text: "Two loops always" },
            { id: "c", text: "Sorting the array first" },
            { id: "d", text: "Recursion" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Max search", statement: "Track best, compare each." }], steps: [{ reasoning: "Compare each element to current max.", working: "\\text{compare}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Comparing each element to current max" },
        },
        {
          id: "olcs-u8-al-q12", difficulty: "core", totalMarks: 1,
          stem: "A loop adds i for i = 1 to 5. What is the total?",
          response: { type: "numeric", parts: [{ label: "Total", answer: 15 }] },
          markscheme: { principles: [{ kind: "principle", name: "Loop sum", statement: "1+2+3+4+5." }], steps: [
            { reasoning: "1+2+3+4+5 = 15.", working: "15", marks: 1, markCode: "B" },
          ], finalAnswer: "15" },
        },
        {
          id: "olcs-u8-al-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why arrays are processed with loops rather than separate variables.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Array loops", statement: "Index-driven, scalable." }], steps: [
            { reasoning: "One name plus index vs many separate variables.", working: "\\text{one name}", marks: 1, markCode: "M" },
            { reasoning: "The same loop works for any array size.", working: "\\text{any size}", marks: 1, markCode: "M" },
            { reasoning: "Much easier to process, search and compute totals.", working: "\\text{easier}", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Loops drive access by index, so one piece of code handles any number of elements — separate variables don't scale." },
        },
        {
          id: "olcs-u8-al-q14", difficulty: "challenge", totalMarks: 1,
          stem: "To compute the average of an array, you must…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sort the array" },
            { id: "b", text: "Total all elements then divide by the count" },
            { id: "c", text: "Multiply all elements" },
            { id: "d", text: "Add each element once" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Average", statement: "Total ÷ count." }], steps: [{ reasoning: "Average = sum / number of elements.", working: "\\text{total/count}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Total then divide by count" },
        },
        {
          id: "olcs-u8-al-q15", difficulty: "core", totalMarks: 2,
          stem: "Compute the total of [5, 10, 15] and the average of [10, 20, 30, 40].",
          response: { type: "numeric", parts: [
            { label: "Total", answer: 30 },
            { label: "Average", answer: 25 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Array stats", statement: "Sum and mean." }], steps: [
            { reasoning: "5 + 10 + 15 = 30.", working: "30", marks: 1, markCode: "M" },
            { reasoning: "(10+20+30+40)/4 = 100/4 = 25.", working: "25", marks: 1, markCode: "A" },
          ], finalAnswer: "30 and 25" },
        },
        {
          id: "olcs-u8-al-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Array processing review.",
          parts: [
            { label: "a", prompt: "Write pseudocode to output every element of names[0..4].", marks: 3 },
            { label: "b", prompt: "Explain how to find the minimum value in scores[0..9].", marks: 3 },
            { label: "c", prompt: "State two operations a loop can perform on an array.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Array processing", statement: "Index-driven loops handle collections." },
          ], steps: [
            { part: "a", reasoning: "FOR i ← 0 TO 4.", working: "FOR i", marks: 1, markCode: "M" },
            { part: "a", reasoning: "OUTPUT names[i].", working: "OUTPUT names[i]", marks: 1, markCode: "M" },
            { part: "a", reasoning: "NEXT i.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Initialise min to first element.", working: "\\text{init}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Loop comparing each element to min.", working: "\\text{compare}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Update min when smaller; output at end.", working: "\\text{update}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Any two: total, average, max, min, count, search.", working: "\\text{ops}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Second valid operation.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Valid operations.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) output loop (b) min search (c) 2 operations" },
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
