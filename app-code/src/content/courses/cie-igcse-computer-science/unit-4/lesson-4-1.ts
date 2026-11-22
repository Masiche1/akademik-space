import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "ciecs-u4-lesson-4-1",
  code: "4-1",
  title: "Python Practice: Selection and Iteration",
  goal: "I CAN write Python programs using if/else, loops and input/output at IGCSE Paper 2 standard.",
  standards: ["Cambridge IGCSE Computer Science 0478", "Paper 2: programming"],
  vocabulary: [
    { term: "Selection", definition: "Choosing a path using if/elif/else." },
    {
      term: "Iteration",
      definition: "Repeating code with for or while loops.",
    },
    {
      term: "Accumulator",
      definition: "Variable updated each loop to total results.",
    },
    {
      term: "Counter",
      definition: "Variable counting loop iterations or matches.",
    },
    { term: "Indentation", definition: "Python's required block spacing." },
  ],
  concepts: [
    {
      id: "ciecs-u4-s1-python",
      title: "Python selection and iteration",
      skill: "Write and trace Python programs with conditions and loops.",
      lesson: {
        sections: [
          {
            heading: "Core Python patterns",
            body: "Paper 2 tasks typically ask for: input → processing loop → output. Key patterns: counting matches (if inside for), accumulating totals (sum += value), and validating input (while until valid).",
          },
          {
            heading: "Tracing",
            body: "When asked what a program outputs, trace variable values line by line — especially loop counters and accumulators. Write each iteration's values explicitly.",
          },
        ],
        keyFormulas: [
          {
            name: "Count pattern",
            statement: "if condition: count += 1 inside for loop",
          },
          {
            name: "Accumulate pattern",
            statement: "total += value inside for loop",
          },
        ],
        workedExample: {
          problem:
            "Write Python to count how many of 10 entered numbers are greater than 50.",
          solution:
            "count = 0\nfor i in range(10):\n    n = int(input())\n    if n > 50:\n        count += 1\nprint(count)",
        },
      },
      questions: [
        {
          id: "ciecs-u4-py-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: 'What does this Python code output if the user enters 7?\n\nnum = int(input())\nif num > 5:\n    print("big")\nelse:\n    print("small")',
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "small" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "7" },
              { id: "d", text: "big" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Selection",
                statement: "if/else chooses one branch.",
              },
            ],
            steps: [
              {
                reasoning: "7 > 5 is true, so 'big' prints.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "big",
          },
        },
        {
          id: "ciecs-u4-py-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a Python for loop that prints the numbers 1 to 5, one per line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "For loop",
                statement: "range generates the sequence.",
              },
            ],
            steps: [
              { reasoning: "for i in range(1, 6):", marks: 1, markCode: "M" },
              {
                reasoning: "print(i) — indented inside the loop.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "for i in range(1, 6): print(i)",
          },
        },
        {
          id: "ciecs-u4-py-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace this code and state the output:\n\ntotal = 0\nfor i in range(4):\n    total += i\nprint(total)",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Accumulator tracing",
                statement: "total adds i each iteration.",
              },
            ],
            steps: [
              {
                reasoning: "i values: 0,1,2,3 — total becomes 0+0+1+2+3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "total = 6 after the loop.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Output: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "ciecs-u4-py-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a Python program that asks for 5 numbers and prints the largest one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Maximum pattern",
                statement: "Track largest with if comparison.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Initialise largest with first input or a very small value.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Loop 5 times reading input.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "if n > largest: largest = n inside the loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "print(largest) after the loop; correct indentation throughout.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Initialise largest; loop 5 inputs; update on n > largest; print largest",
          },
        },
        {
          id: "ciecs-u4-py-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many times does the body of this loop execute?\n\nfor i in range(4):\n    print(i)",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Once" },
              { id: "b", text: "5 times" },
              { id: "c", text: "3 times" },
              { id: "d", text: "4 times" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "range()",
                statement: "range(n) produces n values starting at 0.",
              },
            ],
            steps: [
              {
                reasoning: "range(4) gives i = 0,1,2,3 — four iterations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 4 times",
          },
        },
        {
          id: "ciecs-u4-py-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does this code print?\n\nn = 1\nwhile n < 5:\n    print(n)\n    n += 2",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "1 3" },
              { id: "c", text: "1 2 3 4" },
              { id: "d", text: "1 3 5" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "While loop tracing",
                statement: "Body repeats while condition stays true.",
              },
            ],
            steps: [
              {
                reasoning: "n = 1 prints, then n = 3; n = 3 prints, then n = 5 stops the loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Output is 1 then 3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 1 3",
          },
        },
        {
          id: "ciecs-u4-py-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does this program print?\n\ncount = 0\nfor i in range(5):\n    if i % 2 == 0:\n        count += 1\nprint(count)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Count pattern",
                statement: "if inside for counts matching iterations.",
              },
            ],
            steps: [
              {
                reasoning: "i = 0,1,2,3,4; the even values are 0, 2 and 4 — three matches.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "count = 3.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciecs-u4-py-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a Python program that asks the user for a number and prints 'positive', 'zero' or 'negative' depending on its value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "If/elif/else",
                statement: "Chain comparisons for three-way selection.",
              },
            ],
            steps: [
              {
                reasoning: "Read input and convert with int(input()).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "if/elif/else comparing n > 0, n == 0, else negative — correct operators.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "print() the matching word inside each branch; correct indentation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "if/elif/else on n>0, n==0, else; print matching word",
          },
        },
        {
          id: "ciecs-u4-py-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an if/else statement, when does the else block run?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When the condition is false" },
              { id: "b", text: "Only in a loop" },
              { id: "c", text: "When the condition is true" },
              { id: "d", text: "Always, after the if block" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "else",
                statement: "Runs when the if condition is false.",
              },
            ],
            steps: [
              {
                reasoning: "else is the alternative branch taken on a false condition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** When the condition is false",
          },
        },
        {
          id: "ciecs-u4-py-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does this program print?\n\ntotal = 0\nfor i in range(1, 6):\n    total += i\nprint(total)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Accumulator tracing",
                statement: "total adds each i value.",
              },
            ],
            steps: [
              {
                reasoning: "i = 1..5, so total = 1+2+3+4+5 = 15.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "15",
          },
        },
        {
          id: "ciecs-u4-py-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a Python program that reads 10 numbers and prints how many of them are divisible by 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Count pattern",
                statement: "if inside for counts matches across inputs.",
              },
            ],
            steps: [
              {
                reasoning: "Initialise count = 0 before the loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Loop 10 times reading an integer input each iteration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "if n % 3 == 0: count += 1 inside the loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "print(count) after the loop with correct indentation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "count=0; loop 10 inputs; if n%3==0 count+=1; print count",
          },
        },
        {
          id: "ciecs-u4-py-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In Python, which statement must be indented to be part of the for loop body?\n\nfor i in range(3):\n    ???",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "print(\"done\")" },
              { id: "b", text: "i = 0" },
              { id: "c", text: "print(i)" },
              { id: "d", text: "None — indentation does not matter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Indentation",
                statement: "Indented lines form the loop body.",
              },
            ],
            steps: [
              {
                reasoning: "Only the indented print(i) belongs to the loop body.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** print(i)",
          },
        },
        {
          id: "ciecs-u4-py-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What does this program print?\n\ntotal = 0\nfor i in range(3):\n    for j in range(2):\n        total += 1\nprint(total)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Nested loops",
                statement: "Inner loop runs fully for each outer iteration.",
              },
            ],
            steps: [
              {
                reasoning: "Outer loop runs 3 times; inner loop adds 1 twice each time → 3 × 2 = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "total = 6.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "ciecs-u4-py-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A while loop repeats its body…",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "until the user presses a key" },
              { id: "b", text: "only once" },
              { id: "c", text: "a fixed number of times only" },
              { id: "d", text: "while its condition is true" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "While loop",
                statement: "Repeats while condition is true.",
              },
            ],
            steps: [
              {
                reasoning: "while checks the condition before each iteration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** while its condition is true",
          },
        },
        {
          id: "ciecs-u4-py-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a Python program that prints the numbers 10 down to 1, one per line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Counting down",
                statement: "Step of -1 or while with decrement.",
              },
            ],
            steps: [
              {
                reasoning: "for i in range(10, 0, -1): — correct start, stop and step.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "print(i) indented inside the loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A while-loop version with n -= 1 also earns full marks if correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "for i in range(10, 0, -1): print(i)",
          },
        },
        {
          id: "ciecs-u4-py-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a Python program that repeatedly asks the user for a password until they enter the correct one, 'secret'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Validation loop",
                statement: "Repeat input until valid using while/flag or break.",
              },
            ],
            steps: [
              {
                reasoning: "Set up a loop that repeats until a valid password is entered (e.g. while True or a flag variable).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Read input inside the loop each iteration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "if password == 'secret': break (or set flag to exit).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Print a success message after the loop; correct indentation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "while True: read password; if == 'secret' break; print success",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u4-py-notes",
      title: "Python selection/iteration — revision notes",
      summary: "if/else, for/while, counters, accumulators, maximum pattern.",
      sections: [
        {
          heading: "Key skills",
          body: "Input → loop → process → output is the standard Paper 2 shape. Master count, sum, max and validate patterns.",
        },
        {
          heading: "Exam tips",
          body: "Indentation is mandatory in Python — check every block. When tracing, write each loop iteration's variable values.",
        },
      ],
    },
  ],
};
