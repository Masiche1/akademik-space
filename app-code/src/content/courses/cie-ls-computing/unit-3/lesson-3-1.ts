import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cilc-u3-lesson-3-1",
  code: "3-1",
  title: "Stage 7 Checkpoint — Algorithms and Programming Basics",
  goal: "I CAN apply decomposition, programming constructs and variables at Stage 7 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Computing 0860 Checkpoint Stage 7: programming",
  ],
  stage: 7,
  vocabulary: [
    {
      term: "Decomposition",
      definition: "Breaking a problem into smaller sub-problems.",
    },
    { term: "Sequence", definition: "Instructions executed in order." },
    { term: "Selection", definition: "Choosing a path based on a condition." },
    { term: "Iteration", definition: "Repeating instructions." },
    { term: "Variable", definition: "Named storage location for data." },
  ],
  concepts: [
    {
      id: "cilc-u3-s7-constructs",
      title: "Stage 7 programming constructs checkpoint",
      skill: "Identify and apply sequence, selection and iteration.",
      lesson: {
        sections: [
          {
            heading: "Core constructs",
            body: "Stage 7 programming uses three constructs: sequence (steps in order), selection (IF/ELSE branches) and iteration (loops that repeat). Checkpoint questions test recognising and tracing each one.",
          },
        ],
        keyFormulas: [
          {
            name: "Constructs",
            statement:
              "Sequence = order; Selection = choice; Iteration = repetition",
          },
        ],
        workedExample: {
          problem:
            "Trace: score = 45; IF score >= 40 THEN print 'Pass' ELSE print 'Fail'.",
          solution: "45 >= 40 is true, so the program prints 'Pass'.",
        },
      },
      questions: [
        {
          id: "cilc-u3-s7-c-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which construct repeats a block of instructions until a condition is met?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sequence" },
              { id: "b", text: "Selection" },
              { id: "c", text: "Iteration" },
              { id: "d", text: "Decomposition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iteration",
                statement: "Repetition of instructions.",
              },
            ],
            steps: [
              {
                reasoning: "Iteration is the repeating construct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Iteration",
          },
        },
        {
          id: "cilc-u3-s7-c-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A program asks for a number and prints 'Even' if it divides by 2 with no remainder, otherwise 'Odd'. What construct is this? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selection",
                statement: "Choosing between branches based on a condition.",
              },
            ],
            steps: [
              {
                reasoning: "The program chooses between two outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This is selection (IF/ELSE).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Selection — the condition decides which branch runs",
          },
        },
        {
          id: "cilc-u3-s7-c-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace this algorithm: x = 3; y = x * 4; x = y - 2; print x. What is printed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tracing",
                statement:
                  "Follow each step in sequence, updating variable values.",
              },
            ],
            steps: [
              { reasoning: "x = 3.", marks: 1, markCode: "M" },
              {
                reasoning: "y = 3 * 4 = 12; then x = 12 - 2 = 10.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Prints 10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cilc-u3-s7-c-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a pseudocode algorithm that asks for a score out of 100 and prints 'Distinction' if score >= 70, 'Pass' if score >= 40, otherwise 'Fail'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Selection",
                statement:
                  "Nested or ordered IF statements handle multiple conditions.",
              },
            ],
            steps: [
              { reasoning: "Input score.", marks: 1, markCode: "M" },
              {
                reasoning: "IF score >= 70 THEN print 'Distinction'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "ELSE IF score >= 40 THEN print 'Pass' ELSE print 'Fail'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complete, logically ordered pseudocode.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Input; IF >= 70 'Distinction'; ELSE IF >= 40 'Pass'; ELSE 'Fail'",
          },
        },
      ],
    },
    {
      id: "cilc-u3-s7-vars",
      title: "Stage 7 variables and data types checkpoint",
      skill: "Choose appropriate data types and use variables correctly.",
      lesson: {
        sections: [
          {
            heading: "Data types",
            body: "Variables store data of a specific type: integer (whole numbers), real/float (decimals), string (text), Boolean (true/false), character. Choosing the right type prevents errors.",
          },
        ],
        keyFormulas: [
          {
            name: "Data types",
            statement: "Integer, real, string, Boolean, character",
          },
        ],
        workedExample: {
          problem: "Which data type for a student's exam score of 87.5?",
          solution:
            "Real (decimal) — or rounded to integer if whole marks only.",
        },
      },
      questions: [
        {
          id: "cilc-u3-s7-v-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which data type stores the value TRUE or FALSE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Integer" },
              { id: "b", text: "String" },
              { id: "c", text: "Boolean" },
              { id: "d", text: "Real" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Boolean",
                statement: "Stores true/false values.",
              },
            ],
            steps: [
              {
                reasoning: "Boolean type holds TRUE or FALSE.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Boolean",
          },
        },
        {
          id: "cilc-u3-s7-v-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A variable stores a person's name, e.g. 'Amina'. Which data type is most appropriate and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "String",
                statement: "Text data type.",
              },
            ],
            steps: [
              { reasoning: "A name is text.", marks: 1, markCode: "M" },
              {
                reasoning: "String type stores text characters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "String — names are text",
          },
        },
        {
          id: "cilc-u3-s7-v-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the algorithm 'count = count + 1' inside a loop, what happens to the variable count each iteration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Accumulator",
                statement:
                  "A variable updated each iteration to count or total.",
              },
            ],
            steps: [
              {
                reasoning: "Each pass reads the current value of count.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adds 1 and stores the new value back.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Count increases by 1 per iteration — it accumulates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "count increases by 1 on every iteration",
          },
        },
        {
          id: "cilc-u3-s7-v-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A program stores a shoe size as integer and a price as real. Explain one problem if the shoe size were stored as a string, and one problem if the price were stored as an integer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data typing",
                statement: "Wrong types break calculations and comparisons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "String '9' cannot be compared numerically or used in arithmetic without conversion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ordering or range checks on shoe sizes would fail or give wrong results.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Integer price would truncate decimals, e.g. $19.99 becomes $19 or $20.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Money totals would be inaccurate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "String size breaks numeric comparison; integer price loses decimal accuracy",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilc-u3-stage7-basics-notes",
      title: "Stage 7 computing checkpoint — revision notes",
      summary: "Sequence, selection, iteration, tracing, data types.",
      sections: [
        {
          heading: "Key skills",
          body: "Trace variables step by step; recognise IF/ELSE as selection and loops as iteration; match data types to the kind of data stored.",
        },
        {
          heading: "Exam tips",
          body: "Write pseudocode with clear keywords (INPUT, OUTPUT, IF...THEN...ELSE, FOR/WHILE); check boundary conditions like >= vs >.",
        },
      ],
    },
  ],
};
