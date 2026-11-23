import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "apcsa-u3-lesson-3-3",
  code: "3-3",
  title: "2D Arrays",
  goal: "I CAN use two-dimensional arrays for grids and tables.",
  standards: ["CSA-4.3"],
  vocabulary: [
    { term: "2D array", definition: "Array of arrays — rows and columns." },
    { term: "Declaration", definition: "int[][] grid = new int[3][4];" },
    { term: "Row access", definition: "grid[i] gives row i (an array)." },
    { term: "Element access", definition: "grid[i][j] gives element at row i, col j." },
    { term: "Jagged array", definition: "Rows of different lengths — legal in Java." },
    { term: "Traversal", definition: "Nested loops for rows and columns." },
  ],
  concepts: [
    {
      id: "apcsa-u3-2d-arrays",
      title: "2D arrays",
      skill: "Declare and traverse two-dimensional arrays.",
      lesson: {
        sections: [
          {
            heading: "2D array structure",
            body: "`int[][] grid = new int[rows][cols]` — an array of row-arrays. `grid[i]` is row i (itself an array); `grid[i][j]` is the element at row i, column j. Think of it as a grid/table — first index selects row, second selects column.",
          },
          {
            heading: "Traversal",
            body: "Nested loops: outer for rows, inner for columns. `for (int i = 0; i < grid.length; i++) for (int j = 0; j < grid[i].length; j++)` — note `grid.length` is row count, `grid[i].length` is that row's column count (they can differ for jagged arrays).",
          },
        ],
        keyFormulas: [
          { name: "Access", statement: "$\\text{grid}[i][j]$ — row i, column j" },
          { name: "Dimensions", statement: "$\\text{grid.length}$ = rows; $\\text{grid[i].length}$ = cols in row i" },
        ],
        workedExample: {
          problem: "For `int[][] g = {{1,2},{3,4},{5,6}}`, what is `g[1][0]`?",
          solution: "`g[1]` is row 1 = {3,4}; `g[1][0]` = 3 — row index 1, column index 0.",
        },
      },
      questions: [
        {
          id: "apcsa-u3-2d-arrays-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In `int[][] g`, `g[i][j]` accesses ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "column i, row j"
                    },
                    {
                              "id": "b",
                              "text": "row i, column j"
                    },
                    {
                              "id": "c",
                              "text": "element i*j"
                    },
                    {
                              "id": "d",
                              "text": "row j, column i"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Index order",
                              "statement": "First=row, second=col."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First index selects the row (array), second selects element within that row — `g[i][j]` = row i, column j.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Row i, col j",
          "commonErrors": [
                    "Swapping index order."
          ]
},
        },
        {
          id: "apcsa-u3-2d-arrays-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For `int[][] g = new int[3][4]`, `g.length` is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "4"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "12"
                    },
                    {
                              "id": "d",
                              "text": "Compilation error"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "length = rows",
                              "statement": "Outer array size."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`g.length` = number of rows = 3; `g[i].length` = columns per row = 4.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Confusing with total elements."
          ]
},
        },
        {
          id: "apcsa-u3-2d-arrays-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For `int[][] g = {{1,2,3},{4,5,6}}`, what is `g[1][2]`?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Row then column",
                              "statement": "g[1]={4,5,6}, index 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`g[1]` = {4,5,6}; `g[1][2]` = 6.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 6.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Index confusion — second index is column."
          ]
},
        },
        {
          id: "apcsa-u3-2d-arrays-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain jagged arrays in Java and when they might be useful.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Jagged arrays",
                              "statement": "Rows of different lengths."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Java allows `int[][] g = {{1,2},{3,4,5},{6}}` — rows of DIFFERENT lengths; each row is an independent array with its own length.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Useful when rows genuinely differ — e.g., students in different classes, ragged data tables; memory-efficient vs padding all rows to max length.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Traversal must use `g[i].length` per row, not assume rectangular — `g.length` gives row count only.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Jagged = variable row lengths; use g[i].length per row",
          "commonErrors": [
                    "Assuming all 2D arrays are rectangular."
          ]
},
        },
      ],
    },
  ],
};
