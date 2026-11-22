import type { Lesson } from "../../../types.ts";

export const lesson323: Lesson = {
  id: "ecs11-u6-lesson-6-3",
  code: "6-3",
  title: "Advanced Programming Concepts",
  goal: "I CAN use advanced techniques: recursion, error handling, optimisation.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Programming"],
  vocabulary: [
    { term: "Recursion", definition: "Function calling itself." },
    { term: "Base case", definition: "Condition stopping recursion." },
    { term: "Exception handling", definition: "Catching and handling errors." },
    {
      term: "Algorithm efficiency",
      definition: "How fast/space-efficient an algorithm is.",
    },
    { term: "Dry run", definition: "Manually tracing algorithm execution." },
  ],
  concepts: [
    {
      id: "ecs11-u6-recursion",
      title: "Recursion",
      skill: "Understand recursive functions and base cases.",
      lesson: {
        sections: [
          {
            heading: "What is recursion?",
            body: "**Recursion**: function calls itself to solve smaller version of same problem. **Requires**: base case (stops recursion) + recursive case (calls itself with smaller input).\n\n**Example — factorial**: `factorial(n) = n × factorial(n-1)`, base case `factorial(0) = 1`.\n\n**Danger**: missing base case → infinite recursion → stack overflow.",
          },
          {
            heading: "When to use",
            body: "**Good for**: problems with self-similar structure — tree traversal, divide-and-conquer, mathematical sequences. **Iterative alternative**: loops often simpler/faster — recursion uses more memory (call stack).\n\n**Fibonacci**: `fib(n) = fib(n-1) + fib(n-2)` — classic but inefficient without memoization.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "factorial(4) using recursion?",
          solution: "4×3×2×1 = 24 — recursion unwinds to base case 1.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-recursion-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is recursion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Network protocol" },
              { id: "b", text: "Function calling itself" },
              { id: "c", text: "Loop in code" },
              { id: "d", text: "Data type" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recursion",
                statement: "Self-calling function.",
              },
            ],
            steps: [
              {
                reasoning: "Recursion = self-call.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Self-calling",
            commonErrors: ["Loop confused."],
          },
        },
        {
          id: "ecs11-u6-recursion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a base case in recursion?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Base case",
                statement: "Stops recursion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Condition where function returns without calling itself.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Essential — prevents infinite recursion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: factorial(0) = 1.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Stopping condition — returns directly.",
            commonErrors: ["Recursive case.", "No example."],
          },
        },
        {
          id: "ecs11-u6-recursion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what happens if a recursive function has no base case.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infinite recursion",
                statement: "Stack overflow.",
              },
            ],
            steps: [
              {
                reasoning: "Function calls itself endlessly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each call adds to call stack — memory fills.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stack overflow error — program crashes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Must always have reachable base case.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Infinite calls → stack overflow → crash.",
            commonErrors: ["Works fine.", "No consequence."],
          },
        },
        {
          id: "ecs11-u6-recursion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write pseudocode for recursive factorial function.",
          parts: [
            { label: "a", prompt: "Write the function.", marks: 4 },
            { label: "b", prompt: "Trace factorial(3).", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Factorial recursion",
                statement: "n × factorial(n-1).",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) FUNCTION factorial(n): IF n<=1 RETURN 1 ELSE RETURN n×factorial(n-1).",
                marks: 3,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Base case n<=1 returns 1.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) factorial(3) = 3×factorial(2) = 3×2×factorial(1) = 3×2×1 = 6.",
                marks: 3,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Correct unwinding to base case.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) IF base ELSE recursive (b) = 6",
            commonErrors: ["No base case.", "Wrong trace."],
          },
        },
      ],
    },
    {
      id: "ecs11-u6-errors",
      title: "Error Handling and Debugging",
      skill: "Identify error types and use debugging techniques.",
      lesson: {
        sections: [
          {
            heading: "Error types",
            body: "**Syntax error**: code doesn't follow rules — won't compile/run. **Logic error**: code runs but wrong result — e.g., `>` instead of `<`. **Runtime error**: crashes during execution — division by zero, file not found. **Semantic error**: valid syntax but wrong meaning.\n\n**Debugging**: find and fix errors. **Dry run**: trace manually. **Breakpoints**: pause at specific lines. **Print statements**: output variable values.",
          },
          {
            heading: "Exception handling",
            body: "**Try-catch**: attempt risky code, handle failure gracefully. **Example**: try to open file — if fails, show error message instead of crashing.\n\n**Validation**: prevent errors before they occur — check inputs, file existence. **Logging**: record errors for analysis.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Program crashes when file missing. Error type?",
          solution: "Runtime error — handle with try-catch or existence check.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-errors-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a syntax error?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slow program" },
              { id: "b", text: "Wrong result" },
              { id: "c", text: "Crash during execution" },
              { id: "d", text: "Code violates language rules — won't run" },
            ],
            correctChoiceId: "d",
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
              {
                reasoning: "Syntax = grammar rules.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Rule violation",
            commonErrors: ["Logic error confused."],
          },
        },
        {
          id: "ecs11-u6-errors-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a logic error.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logic error",
                statement: "Runs but wrong result.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Code executes without error but gives wrong output.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: using `>` when `<` needed in condition.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: `total = a - b` instead of `a + b`.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Wrong operator/calculation — runs but incorrect.",
            commonErrors: ["Crash.", "Syntax error."],
          },
        },
        {
          id: "ecs11-u6-errors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how try-catch exception handling works.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Try-catch",
                statement: "Handle failures gracefully.",
              },
            ],
            steps: [
              {
                reasoning: "TRY block: risky code that might fail.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "CATCH block: runs if error occurs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Program continues instead of crashing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: try open file → catch shows 'file not found'.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "TRY risky code → CATCH handles error.",
            commonErrors: ["No mechanism.", "No example."],
          },
        },
        {
          id: "ecs11-u6-errors-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A program gives wrong average but doesn't crash.",
          parts: [
            { label: "a", prompt: "Identify likely error type.", marks: 3 },
            {
              label: "b",
              prompt: "Suggest two debugging techniques.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Debugging",
                statement: "Isolate and trace.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Logic error — runs but wrong calculation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Maybe wrong formula or data type.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Dry run — trace values manually.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Print statements — output intermediate values.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Check formula, types, input parsing.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) logic error (b) dry run+print statements",
            commonErrors: ["Runtime error.", "No techniques."],
          },
        },
      ],
    },
    {
      id: "ecs11-u6-efficiency",
      title: "Algorithm Efficiency",
      skill: "Evaluate algorithm efficiency using Big O notation.",
      lesson: {
        sections: [
          {
            heading: "Big O notation",
            body: "Measures how algorithm performance scales with input size n. **O(1)**: constant — hash lookup. **O(log n)**: binary search — very efficient. **O(n)**: linear search — scales linearly. **O(n²)**: bubble sort — poor for large data. **O(2ⁿ)**: exponential — unusable for large n.\n\n**Time complexity**: number of operations. **Space complexity**: memory used.",
          },
          {
            heading: "Choosing algorithms",
            body: "**Trade-offs**: faster algorithm may use more memory. **Context matters**: small data → simple algorithm fine; large data → need efficient. **Practical vs theoretical**: Big O ignores constants — O(n) with small constant may beat O(log n) with large constant.\n\n**Example**: sorting 10 items — bubble sort fine; 1 million — need merge sort/quick sort.",
          },
        ],
        keyFormulas: [
          {
            name: "Big O classes",
            statement: "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).",
          },
        ],
        workedExample: {
          problem: "Which is better: O(n) or O(n²) for 1000 items?",
          solution: "O(n) — 1000 vs 1,000,000 operations.",
        },
      },
      questions: [
        {
          id: "ecs11-u6-efficiency-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does Big O notation measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memory price" },
              { id: "b", text: "File size" },
              { id: "c", text: "Algorithm performance as input grows" },
              { id: "d", text: "Network speed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Big O",
                statement: "Scalability measure.",
              },
            ],
            steps: [
              {
                reasoning: "Big O = performance scaling.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Performance scaling",
            commonErrors: ["Time only."],
          },
        },
        {
          id: "ecs11-u6-efficiency-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these from fastest to slowest: O(n²), O(log n), O(n).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Big O ordering",
                statement: "Lower growth = faster.",
              },
            ],
            steps: [
              {
                reasoning: "O(log n) fastest — grows slowly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "O(n) middle — linear growth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "O(n²) slowest — quadratic growth.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "O(log n) < O(n) < O(n²)",
            commonErrors: ["Reversed.", "Wrong order."],
          },
        },
        {
          id: "ecs11-u6-efficiency-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why O(n²) algorithms are problematic for large datasets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quadratic growth",
                statement: "n² explodes.",
              },
            ],
            steps: [
              {
                reasoning: "Operations grow with square of input.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "n=1000 → 1,000,000 operations; n=10000 → 100,000,000.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Becomes impractically slow.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better algorithm needed for large data.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "n² growth → billions of ops for large n.",
            commonErrors: ["Fine for all sizes.", "No growth rate."],
          },
        },
        {
          id: "ecs11-u6-efficiency-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare linear search O(n) and binary search O(log n).",
          parts: [
            { label: "a", prompt: "Compare for n=1000 elements.", marks: 3 },
            {
              label: "b",
              prompt: "When is linear search acceptable?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What's the prerequisite for binary?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Search efficiency",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Linear ~500 avg; binary ~10 comparisons.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Binary dramatically faster.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Small arrays or unsorted data.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Simplicity worth it for small n.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Array must be sorted.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer: "(a) 500 vs 10 (b) small/unsorted (c) sorted",
            commonErrors: ["Same speed.", "No prerequisite."],
          },
        },
      ],
    },
  ],
};
