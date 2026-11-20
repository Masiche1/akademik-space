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
              { id: "a", text: "big" },
              { id: "b", text: "small" },
              { id: "c", text: "7" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "a",
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
