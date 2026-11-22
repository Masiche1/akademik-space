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
              { id: "a", text: "Iteration" },
              { id: "b", text: "Selection" },
              { id: "c", text: "Decomposition" },
              { id: "d", text: "Sequence" },
            ],
            correctChoiceId: "a",
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
        {
          id: "cilc-u3-s7-c-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which construct performs instructions one after another in the written order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sequence" },
              { id: "b", text: "Decomposition" },
              { id: "c", text: "Iteration" },
              { id: "d", text: "Selection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sequence",
                statement: "Instructions carried out in order.",
              },
            ],
            steps: [
              {
                reasoning: "One instruction follows the previous one without branching or repeating.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sequence",
          },
        },
        {
          id: "cilc-u3-s7-c-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trace this algorithm: a = 5; b = a + 3; a = b - 2. Give (a) the final value of b and (b) the final value of a.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tracing",
                statement:
                  "Follow each statement in order and update variable values.",
              },
            ],
            steps: [
              {
                reasoning: "b = 5 + 3 = 8.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "a = 8 - 2 = 6.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "b = 8; a = 6",
          },
        },
        {
          id: "cilc-u3-s7-c-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A program uses IF score >= 40 THEN print 'Pass' ELSE print 'Fail'. Which construct is this and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sequence — the instructions simply run in order" },
              { id: "b", text: "Decomposition — the problem is split into parts" },
              {
                id: "c",
                text: "Selection — the condition chooses which branch runs",
              },
              {
                id: "d",
                text: "Iteration — the message repeats until the score changes",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selection",
                statement: "Choosing between paths using a condition.",
              },
            ],
            steps: [
              {
                reasoning: "The IF condition selects one of two output branches.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Selection — the condition chooses which branch runs",
          },
        },
        {
          id: "cilc-u3-s7-c-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many times does the body of FOR i FROM 1 TO 5 run?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "4" },
              { id: "c", text: "6" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counted loop",
                statement: "FOR ... FROM start TO end runs once for each value.",
              },
            ],
            steps: [
              {
                reasoning: "The loop runs for i = 1, 2, 3, 4 and 5.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cilc-u3-s7-c-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Trace: n = 2; WHILE n < 8 DO n = n * 2; OUTPUT n. What is output?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Loop tracing",
                statement:
                  "Repeat the body while the condition remains true, then stop.",
              },
            ],
            steps: [
              {
                reasoning: "n becomes 4, then 8; 8 < 8 is false, so output is 8.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "cilc-u3-s7-c-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A program asks for a PIN. IF the PIN is correct THEN it prints 'Welcome' ELSE it prints 'Try again'. Which construct decides which message is printed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sequence" },
              { id: "b", text: "Decomposition" },
              { id: "c", text: "Iteration" },
              { id: "d", text: "Selection" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selection",
                statement: "Choosing between paths using a condition.",
              },
            ],
            steps: [
              {
                reasoning: "The IF condition chooses between two output messages.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Selection",
          },
        },
        {
          id: "cilc-u3-s7-c-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how selection can assign grades A for score >= 80, B for score >= 60 and C otherwise, and why the checks must be made in that order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ordered selection",
                statement:
                  "Higher boundaries are tested first so lower conditions do not catch them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check score >= 80 first and print A if true.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Otherwise check score >= 60 and print B; otherwise print C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A score of 85 also satisfies >= 60, so testing A first prevents the wrong grade.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Test A first, then B, then default C; otherwise higher scores are caught by lower boundaries",
          },
        },
        {
          id: "cilc-u3-s7-c-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trace this algorithm: a = 2; b = a * 3; a = b + 1; print a. Give (a) the value of b and (b) the value printed.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Tracing",
                statement:
                  "Use the current values at the moment each instruction runs.",
              },
            ],
            steps: [
              {
                reasoning: "b = 2 * 3 = 6.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "a = 6 + 1 = 7, so 7 is printed.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "b = 6; printed value = 7",
          },
        },
        {
          id: "cilc-u3-s7-c-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which pseudocode statement uses selection?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "INPUT name" },
              { id: "b", text: "FOR i FROM 1 TO 10" },
              {
                id: "c",
                text: "IF mark >= 50 THEN print 'Pass' ELSE print 'Fail'",
              },
              { id: "d", text: "x = x + 1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Selection",
                statement: "IF ... THEN ... ELSE chooses between actions.",
              },
            ],
            steps: [
              {
                reasoning: "The IF statement chooses a branch using mark >= 50.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "IF mark >= 50 THEN print 'Pass' ELSE print 'Fail'",
          },
        },
        {
          id: "cilc-u3-s7-c-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write pseudocode that adds the numbers 1 to 10 together and outputs the total.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Accumulator loop",
                statement:
                  "Initialise a total, repeat an update inside a loop, then output it.",
              },
            ],
            steps: [
              {
                reasoning: "Initialise total = 0 before the loop.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use FOR i FROM 1 TO 10 to repeat the update.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inside the loop use total = total + i.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Output total after the loop finishes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "total = 0; FOR i FROM 1 TO 10 total = total + i; OUTPUT total",
          },
        },
        {
          id: "cilc-u3-s7-c-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three answers: (a) the final value of x after x = 4; x = x + 2, (b) the final value of y after y = 10; y = y - 3, and (c) the number of times the body of FOR i FROM 1 TO 4 runs.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 7 },
              { label: "c", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Variable update",
                statement: "An assignment replaces the old stored value.",
              },
            ],
            steps: [
              {
                reasoning: "x = 4 + 2 = 6.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "y = 10 - 3 = 7.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "The loop runs for i = 1, 2, 3 and 4.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "x = 6; y = 7; 4 iterations",
          },
        },
        {
          id: "cilc-u3-s7-c-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A login program keeps asking for a password until the correct one is entered. Which construct is mainly needed for the repeated asking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Decomposition" },
              { id: "b", text: "Selection" },
              { id: "c", text: "Sequence" },
              { id: "d", text: "Iteration" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iteration",
                statement: "Repeats instructions until a condition is met.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Repeating the prompt until success is iteration; the IF inside still checks correctness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Iteration",
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
              { id: "a", text: "Real" },
              { id: "b", text: "String" },
              { id: "c", text: "Integer" },
              { id: "d", text: "Boolean" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cilc-u3-s7-v-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which data type is most appropriate for storing an exam score of 87.5?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boolean" },
              { id: "b", text: "Integer" },
              { id: "c", text: "Character" },
              { id: "d", text: "Real" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real",
                statement: "Stores decimal numbers.",
              },
            ],
            steps: [
              {
                reasoning: "87.5 has a decimal part, so it needs a real type.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Real",
          },
        },
        {
          id: "cilc-u3-s7-v-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trace this algorithm: score = 20; score = score + 15; bonus = 5; score = score + bonus. Give (a) the final value of score and (b) the final value of bonus.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Variable trace",
                statement:
                  "Each assignment uses the latest stored value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "score becomes 20 + 15 = 35, then 35 + 5 = 40.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "bonus is assigned 5 and is not changed again.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "score = 40; bonus = 5",
          },
        },
        {
          id: "cilc-u3-s7-v-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which data type is most appropriate for storing the number of siblings a student has?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boolean" },
              { id: "b", text: "Integer" },
              { id: "c", text: "String" },
              { id: "d", text: "Real" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integer",
                statement: "Stores whole numbers.",
              },
            ],
            steps: [
              {
                reasoning: "A sibling count is a whole number, so integer is appropriate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Integer",
          },
        },
        {
          id: "cilc-u3-s7-v-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which data type is most appropriate for storing a single letter grade such as A, B or C?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boolean" },
              { id: "b", text: "Real" },
              { id: "c", text: "Integer" },
              { id: "d", text: "Character" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Character",
                statement: "Stores a single text character.",
              },
            ],
            steps: [
              {
                reasoning: "A, B and C are single characters, not whole numbers or true/false.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Character",
          },
        },
        {
          id: "cilc-u3-s7-v-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trace this algorithm: x = 3; y = x * 2; x = y + 1. Give (a) the final value of x and (b) the final value of y.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Variable trace",
                statement:
                  "Substitute current values when each assignment executes.",
              },
            ],
            steps: [
              {
                reasoning: "y = 3 * 2 = 6.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "x = 6 + 1 = 7.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
            ],
            finalAnswer: "x = 7; y = 6",
          },
        },
        {
          id: "cilc-u3-s7-v-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best variable name for storing a student's total score?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "totalScore" },
              { id: "b", text: "class" },
              { id: "c", text: "2ndScore" },
              { id: "d", text: "score$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Variable naming",
                statement:
                  "Names should be meaningful and follow programming rules.",
              },
            ],
            steps: [
              {
                reasoning:
                  "totalScore is meaningful, starts with a letter and avoids reserved or invalid characters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "totalScore",
          },
        },
        {
          id: "cilc-u3-s7-v-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A program stores a telephone number as an integer. Explain two problems this can cause.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data typing",
                statement:
                  "Values used only as text should not be treated as numbers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Leading zeros can be lost because integers do not preserve formatting.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Symbols such as +, brackets or spaces cannot be stored correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The number could be used in arithmetic by mistake, producing an invalid telephone number.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Leading zeros and formatting are lost; the value may be incorrectly used in calculations",
          },
        },
        {
          id: "cilc-u3-s7-v-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three answers: (a) the value of total after total = 0; FOR i FROM 1 TO 4 total = total + i, (b) the value of n after n = 5; n = n * 2, and (c) the number of characters in the string 'Amina'.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 10 },
              { label: "c", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data values",
                statement:
                  "Trace loops and assignments using the current stored values.",
              },
            ],
            steps: [
              {
                reasoning: "total = 1 + 2 + 3 + 4 = 10.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "n = 5 * 2 = 10.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "'Amina' has five characters.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "total = 10; n = 10; 5 characters",
          },
        },
        {
          id: "cilc-u3-s7-v-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which data type should store whether a student is a library member, TRUE or FALSE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Integer" },
              { id: "b", text: "Real" },
              { id: "c", text: "String" },
              { id: "d", text: "Boolean" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Boolean",
                statement: "Stores TRUE or FALSE values.",
              },
            ],
            steps: [
              {
                reasoning: "Membership is a true/false condition, so Boolean is appropriate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Boolean",
          },
        },
        {
          id: "cilc-u3-s7-v-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A program stores a student's name, age, average mark and whether they passed. Choose a suitable data type for each value and justify the choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data typing",
                statement: "Match each type to the kind of value stored.",
              },
            ],
            steps: [
              {
                reasoning: "Name is text, so use string.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Age is a whole number, so use integer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Average mark may be decimal, so use real.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Passed is TRUE or FALSE, so use Boolean.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Name: string; age: integer; average: real; passed: Boolean",
          },
        },
        {
          id: "cilc-u3-s7-v-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two answers: (a) the value of count after count = 7; count = count + 3, and (b) the value of average after average = (80 + 90) / 2.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 85 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Variable update",
                statement:
                  "Assignments replace a variable's stored value.",
              },
            ],
            steps: [
              {
                reasoning: "count = 7 + 3 = 10.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "average = 170 / 2 = 85.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
            ],
            finalAnswer: "count = 10; average = 85",
          },
        },
        {
          id: "cilc-u3-s7-v-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A login program stores status as the strings 'yes' and 'no' instead of TRUE and FALSE. What is the main drawback?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strings always use less memory than Boolean values" },
              { id: "b", text: "The program cannot ask the user for input" },
              {
                id: "c",
                text: "Conditions such as IF status = TRUE cannot be checked directly",
              },
              { id: "d", text: "The status cannot be displayed on screen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Data typing",
                statement:
                  "Boolean values support direct true/false logic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Using text forces comparisons against strings and loses the simple TRUE/FALSE logic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Boolean checks become indirect string comparisons",
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
