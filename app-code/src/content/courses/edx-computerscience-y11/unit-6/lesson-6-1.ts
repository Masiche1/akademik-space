import type { Lesson } from "../../../types.ts";

export const lesson321: Lesson = {
  id: "ecs11-u6-lesson-6-1",
  code: "6-1",
  title: "Data Structures",
  goal: "I CAN use arrays and understand data structure concepts.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  vocabulary: [
    { term: "Array", definition: "Ordered collection of same-type elements." },
    { term: "Index", definition: "Position of element in array." },
    { term: "2D array", definition: "Array of arrays — grid/table." },
    { term: "List", definition: "Dynamic collection of elements." },
    { term: "Record", definition: "Collection of related fields." },
  ],
  concepts: [
    {
      id: "ecs11-u6-arrays",
      title: "Arrays",
      skill: "Declare, access and manipulate arrays.",
      lesson: {
        sections: [
          {
            heading: "Arrays",
            body: "**Array**: ordered collection — `scores = [85, 92, 78, 95]`. **Index**: position — `scores[0]` = 85 (0-indexed). **Size**: fixed or dynamic depending on language. **Access**: direct by index — O(1).\n\n**Operations**: read `scores[i]`, write `scores[i] = x`, iterate with FOR loop.",
          },
          {
            heading: "2D arrays",
            body: "**2D array**: table/grid — `grid[row][col]`. **Use**: matrices, game boards, spreadsheets. **Example**: chess board 8×8, multiplication tables.\n\n`grid[1][2]` = row 1, column 2.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Find largest in array [3,7,2,9].",
          solution: "Loop through, track max: max=9.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-arrays-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an array?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Network device" },
              { id: "b", text: "File type" },
              { id: "c", text: "Ordered collection of elements" },
              { id: "d", text: "Single value" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Array",
                statement: "Ordered collection.",
              },
            ],
            steps: [
              {
                reasoning: "Array = collection with indices.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Ordered collection",
            commonErrors: ["Variable confused."],
          },
        },
        {
          id: "ecs11-u6-arrays-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In array `[10, 20, 30]`, what is `arr[1]`?",
          response: {
            type: "numeric",
            parts: [{ label: "answer", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Array indexing",
                statement: "0-indexed.",
              },
            ],
            steps: [
              {
                reasoning: "arr[1] = second element = 20.",
                marks: 3,
                markCode: "M",
              },
            ],
            finalAnswer: "20",
            commonErrors: ["arr[1]=10 (1-indexed).", "arr[1]=30."],
          },
        },
        {
          id: "ecs11-u6-arrays-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why arrays are useful for storing multiple values.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Arrays",
                statement: "Organised access, loops.",
              },
            ],
            steps: [
              {
                reasoning: "Store many values in one structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Direct access by index — fast.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Easy to loop through for processing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: test scores, sensor readings.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Organised storage, fast access, loopable.",
            commonErrors: ["No benefit.", "No example."],
          },
        },
        {
          id: "ecs11-u6-arrays-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode to find the largest value in an array.",
          parts: [
            { label: "a", prompt: "Write the pseudocode.", marks: 4 },
            { label: "b", prompt: "Explain the logic.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Max algorithm",
                statement: "Track largest.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) DECLARE max = arr[0]; FOR i=1 TO LENGTH(arr)-1 IF arr[i]>max THEN max=arr[i]; OUTPUT max.",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Correct loop and comparison.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Start with first element as max.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Update max whenever larger found.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) loop comparing max (b) track largest",
            commonErrors: ["Wrong init.", "No comparison."],
          },
        },
      ],
    },
    {
      id: "ecs11-u6-sorting",
      title: "Sorting Algorithms",
      skill: "Understand and implement basic sorting.",
      lesson: {
        sections: [
          {
            heading: "Why sort?",
            body: "Sorted data easier to search, analyse, present. **Applications**: leaderboards, search results, database queries.\n\n**Bubble sort**: repeatedly swap adjacent if out of order — simple but slow O(n²). **Insertion sort**: build sorted list by inserting elements — good for small/partially sorted. **Merge sort**: divide and conquer — efficient O(n log n).",
          },
          {
            heading: "Bubble sort example",
            body: "Array [5,3,8,1]: compare 5&3 → swap → [3,5,8,1]; compare 5&8 → ok; compare 8&1 → swap → [3,5,1,8]; repeat passes until sorted.\n\n**Efficiency**: bubble sort worst case n² comparisons — fine for small data, poor for large.",
          },
        ],
        keyFormulas: [
          { name: "Bubble sort complexity", statement: "O(n²) — quadratic." },
        ],
        workedExample: {
          problem: "Sort [3,1,2] with bubble sort.",
          solution: "Pass1: [1,3,2]→[1,2,3] after swaps.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-sorting-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does sorting an array achieve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Arranges elements in order" },
              { id: "b", text: "Encrypts data" },
              { id: "c", text: "Makes array larger" },
              { id: "d", text: "Deletes duplicates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sorting",
                statement: "Arranges in order.",
              },
            ],
            steps: [
              {
                reasoning: "Sorting = ordered elements.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Arranges in order",
            commonErrors: ["Searching confused."],
          },
        },
        {
          id: "ecs11-u6-sorting-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does bubble sort work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Bubble sort",
                statement: "Adjacent swaps.",
              },
            ],
            steps: [
              {
                reasoning: "Compare adjacent elements.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Swap if out of order.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Repeat passes until no swaps needed.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Adjacent compare+swap, repeat passes.",
            commonErrors: ["Merge sort.", "No passes."],
          },
        },
        {
          id: "ecs11-u6-sorting-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why bubble sort is inefficient for large arrays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bubble sort efficiency",
                statement: "O(n²) comparisons.",
              },
            ],
            steps: [
              {
                reasoning: "May need n passes through array.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each pass n comparisons — total n².",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "For 1000 elements = ~1 million comparisons.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better algorithms exist for large data.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "n² comparisons — too slow for large data.",
            commonErrors: ["Efficient.", "No complexity."],
          },
        },
        {
          id: "ecs11-u6-sorting-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace bubble sort on [4, 1, 3].",
          parts: [
            { label: "a", prompt: "Show each pass.", marks: 4 },
            { label: "b", prompt: "Explain when it stops.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Bubble sort trace",
                statement: "Compare adjacent.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Pass1: [4,1,3]→[1,4,3]→[1,3,4].",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Pass2: [1,3,4] no swaps — sorted.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Stops when pass completes with no swaps.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Largest elements 'bubble' to end each pass.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) two passes shown (b) stops on no-swap pass",
            commonErrors: ["Wrong swaps.", "No stop condition."],
          },
        },
      ],
    },
    {
      id: "ecs11-u6-search",
      title: "Searching Algorithms",
      skill: "Compare linear and binary search.",
      lesson: {
        sections: [
          {
            heading: "Linear search",
            body: "Check each element in order until found — O(n). **Works on**: any array, sorted or not. **Simple** but slow for large data.\n\n**Binary search**: requires **sorted** array. Compare middle element — if target smaller, search left half; if larger, right half. O(log n) — very fast.\n\n**Example**: searching 1M items — linear ~500k comparisons avg; binary ~20 comparisons.",
          },
          {
            heading: "Choosing search",
            body: "**Small/unsorted**: linear — simple. **Large/sorted**: binary — fast but requires sorting first. **Trade-off**: sorting cost vs search speed — many searches justify sorting.\n\n**Hash tables**: O(1) average — but complex, memory heavy.",
          },
        ],
        keyFormulas: [
          { name: "Binary search", statement: "O(log n) — halves each step." },
          { name: "Linear search", statement: "O(n) — checks each element." },
        ],
        workedExample: {
          problem: "Find 7 in [1,3,5,7,9,11]. Binary search steps?",
          solution: "Mid=5<7→right; mid=9>7→left; mid=7→found.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-search-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is required for binary search?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sorted array" },
              { id: "b", text: "Small array" },
              { id: "c", text: "String data" },
              { id: "d", text: "Any array" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binary search",
                statement: "Requires sorted data.",
              },
            ],
            steps: [
              {
                reasoning: "Binary = sorted required.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sorted array",
            commonErrors: ["Any array."],
          },
        },
        {
          id: "ecs11-u6-search-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare linear and binary search efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Linear vs binary",
                statement: "O(n) vs O(log n).",
              },
            ],
            steps: [
              {
                reasoning: "Linear: O(n) — checks each element.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Binary: O(log n) — halves each step.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Binary much faster for large sorted data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Linear=O(n), binary=O(log n).",
            commonErrors: ["Same speed.", "Wrong complexity."],
          },
        },
        {
          id: "ecs11-u6-search-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain binary search step by step for finding 25 in [10,20,30,40,50].",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Binary search",
                statement: "Compare middle, halve.",
              },
            ],
            steps: [
              {
                reasoning: "Mid=30>25 → search left [10,20].",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mid=20<25 → search right [30].",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Wait—correct: mid of [10,20,30] = 20<25 → right [30,40,50]...",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "25 not in array — binary search determines absence.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Halve repeatedly; 25 absent.",
            commonErrors: ["Linear method.", "Wrong halving."],
          },
        },
        {
          id: "ecs11-u6-search-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A program searches a sorted list of 1 million names daily.",
          parts: [
            {
              label: "a",
              prompt: "Why is binary search better than linear?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate approximate comparisons for each.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "When would linear be acceptable?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Search efficiency",
                statement: "Scale matters.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Binary halves each step — much faster.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Linear checks every element worst case.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Linear: ~500,000 avg comparisons.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Binary: ~20 comparisons (log2 of 1M).",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Small lists or unsorted data — linear simpler.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) faster (b) 500k vs 20 (c) small/unsorted",
            commonErrors: ["Same speed.", "No numbers."],
          },
        },
      ],
    },
  ],
};
