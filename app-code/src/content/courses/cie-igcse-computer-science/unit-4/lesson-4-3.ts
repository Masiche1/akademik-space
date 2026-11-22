import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ciecs-u4-lesson-4-3",
  code: "4-3",
  title: "Problem-Solving and Testing Strategy",
  goal: "I CAN decompose problems, design test cases and debug programs at IGCSE standard.",
  standards: [
    "Cambridge IGCSE Computer Science 0478",
    "Paper 2: problem-solving, testing",
  ],
  vocabulary: [
    {
      term: "Decomposition",
      definition: "Breaking a problem into smaller sub-problems.",
    },
    {
      term: "Abstraction",
      definition: "Focusing on essential details, ignoring the rest.",
    },
    {
      term: "Test plan",
      definition: "Planned set of inputs covering normal and edge cases.",
    },
    {
      term: "Edge case",
      definition: "Boundary input, e.g. 0, empty string, maximum value.",
    },
    {
      term: "Logic error",
      definition: "Program runs but produces wrong results.",
    },
  ],
  concepts: [
    {
      id: "ciecs-u4-s3-testing",
      title: "Problem-solving and testing",
      skill: "Decompose problems and design effective test cases.",
      lesson: {
        sections: [
          {
            heading: "Problem-solving",
            body: "Paper 2 rewards a method: understand the requirement → decompose into steps → design the algorithm → translate to code → test. Write pseudocode first if the task is complex — it earns method marks even if code has slips.",
          },
          {
            heading: "Testing",
            body: "A good test plan covers: normal cases (typical input), boundary cases (0, empty, max), and invalid cases where relevant. Each test should state input AND expected output. Bugs hide at boundaries — test them deliberately.",
          },
        ],
        keyFormulas: [
          { name: "Test plan", statement: "normal + boundary + invalid cases" },
          {
            name: "Decompose",
            statement: "big problem → small solvable steps",
          },
        ],
        workedExample: {
          problem:
            "Design a test plan for a function that returns 'pass' if score >= 40 else 'fail'.",
          solution:
            "Normal: 50 → pass; 30 → fail. Boundary: 40 → pass; 39 → fail. Edge: 0 → fail; 100 → pass.",
        },
      },
      questions: [
        {
          id: "ciecs-u4-ts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an edge case in testing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A test that always fails" },
              { id: "b", text: "The easiest test to run" },
              {
                id: "c",
                text: "A boundary input like 0, empty string or maximum value",
              },
              { id: "d", text: "The first test written" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Edge case",
                statement: "Boundary input.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Edge cases sit at input boundaries where bugs hide.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A boundary input like 0, empty string or maximum value",
          },
        },
        {
          id: "ciecs-u4-ts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a test plan include both normal and boundary cases? Give one reason for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test coverage",
                statement: "Normal + boundary inputs.",
              },
            ],
            steps: [
              {
                reasoning: "Normal cases verify typical use works correctly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Boundary cases expose off-by-one and comparison errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Normal checks typical behaviour; boundary catches edge bugs",
          },
        },
        {
          id: "ciecs-u4-ts-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program should output 'Adult' if age >= 18 else 'Child'. The developer tested only age = 30 (got 'Adult'). Explain why this testing is insufficient and what to add.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test coverage",
                statement: "Test both branches and boundaries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only one branch tested — the 'Child' path is unverified.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Boundary 18 and just-below 18 untested — off-by-one errors possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add: 17 → Child; 18 → Adult; 0 → Child.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Both branches and boundary values needed — add 17, 18, 0",
          },
        },
        {
          id: "ciecs-u4-ts-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A program crashes when the user enters an empty string for a name. Describe how you would identify whether this is a syntax error or a logic error, and outline your fix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Debugging",
                statement: "Syntax = won't run; logic = wrong results.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If it won't compile/run at all → syntax error; if it runs but crashes on empty input → logic/validation error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check the code compiles with normal input first.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  'Add validation: if name == "": print error or reprompt.',
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Retest with empty, normal and whitespace-only inputs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Distinguish compile failure vs runtime crash; add empty-input validation; retest edge cases",
          },
        },
        {
          id: "ciecs-u4-ts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should every test case in a test plan state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the input" },
              { id: "b", text: "Only the expected output" },
              { id: "c", text: "The input and the expected output" },
              { id: "d", text: "The programmer's name" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Test case",
                statement: "Input plus expected result.",
              },
            ],
            steps: [
              {
                reasoning: "A test case is only useful if it states both input and expected output.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The input and the expected output",
          },
        },
        {
          id: "ciecs-u4-ts-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A program applies a discount when total >= 50. What is the boundary input value you should test?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Boundary value",
                statement: "Test the exact threshold of a comparison.",
              },
            ],
            steps: [
              {
                reasoning: "The comparison changes at 50, so 50 (and just below it) are the boundary inputs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "50",
          },
        },
        {
          id: "ciecs-u4-ts-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A function prints 'Leap' if year % 4 == 0 else 'Common'. List three test cases (input and expected output) that cover normal and boundary behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test plan",
                statement: "Normal + boundary inputs with expected outputs.",
              },
            ],
            steps: [
              {
                reasoning: "Normal case, e.g. 2023 → 'Common' (non-multiple of 4).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Normal/boundary case, e.g. 2024 → 'Leap' (multiple of 4).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Edge case such as 0 → 'Leap' or a large year, with expected output stated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. 2023→Common; 2024→Leap; 0→Leap",
          },
        },
        {
          id: "ciecs-u4-ts-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A test plan contains 4 normal cases, 3 boundary cases and 2 invalid cases. How many test cases are there in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test coverage",
                statement: "Normal + boundary + invalid cases.",
              },
            ],
            steps: [
              {
                reasoning: "Total = 4 + 3 + 2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total = 9 test cases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "9",
          },
        },
        {
          id: "ciecs-u4-ts-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is decomposition in problem-solving?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing all comments from code" },
              { id: "b", text: "Writing the program as quickly as possible" },
              { id: "c", text: "Breaking a large problem into smaller sub-problems" },
              { id: "d", text: "Testing only the finished program" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decomposition",
                statement: "Split problem into solvable steps.",
              },
            ],
            steps: [
              {
                reasoning: "Decomposition means dividing a complex task into smaller parts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Breaking a large problem into smaller sub-problems",
          },
        },
        {
          id: "ciecs-u4-ts-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student says: 'My program works correctly, so it doesn't need any more testing.' Give two reasons why this is wrong.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test coverage",
                statement: "Passing tests may only cover some inputs.",
              },
            ],
            steps: [
              {
                reasoning: "'Works' usually means only the inputs tried so far were tested.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Boundary and unusual inputs may still trigger hidden bugs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Testing also verifies requirements are fully met, not just the cases seen.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Only some inputs tested; boundary cases may hide bugs; requirements may be unmet",
          },
        },
        {
          id: "ciecs-u4-ts-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a test plan for a function that returns a grade: 'A' if score >= 70, 'B' if score >= 50, 'C' if score >= 30, otherwise 'F'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test plan",
                statement: "Cover each branch plus boundaries.",
              },
            ],
            steps: [
              {
                reasoning: "Normal cases for each grade, e.g. 80→A, 60→B, 40→C, 10→F.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Boundary cases at each threshold: 69→B, 70→A, 49→C, 50→B, 29→F, 30→C.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Edge cases such as 0→F and 100→A.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each test states input AND expected output.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Normal per grade; boundaries 29/30, 49/50, 69/70; edges 0 and 100",
          },
        },
        {
          id: "ciecs-u4-ts-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A program expects a positive whole number. Which of these is an INVALID test case?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "25" },
              { id: "b", text: "-4" },
              { id: "c", text: "7" },
              { id: "d", text: "100" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Invalid input",
                statement: "Input outside the accepted range.",
              },
            ],
            steps: [
              {
                reasoning: "-4 is negative, so it violates the 'positive' requirement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** -4",
          },
        },
        {
          id: "ciecs-u4-ts-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bug in a program only appears when the input list is empty, but all of the developer's tests passed. Explain how this could happen and how it should have been prevented.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Edge case testing",
                statement: "Boundary inputs hide bugs.",
              },
            ],
            steps: [
              {
                reasoning: "The empty list is a boundary/edge case that was never tested — only non-empty inputs were used.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The test plan lacked coverage of minimum/empty inputs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add boundary tests: empty list, single item, maximum size.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Retest after the fix and confirm the edge case now behaves correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Empty input untested; add boundary cases and retest",
          },
        },
        {
          id: "ciecs-u4-ts-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a logic error?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A missing semicolon" },
              { id: "b", text: "A hardware fault" },
              { id: "c", text: "A program that will not run at all" },
              { id: "d", text: "A program that runs but produces wrong results" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logic error",
                statement: "Runs but wrong output.",
              },
            ],
            steps: [
              {
                reasoning: "Logic errors are mistakes in the algorithm — the program runs but gives wrong answers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A program that runs but produces wrong results",
          },
        },
        {
          id: "ciecs-u4-ts-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A test plan rule requires at least 2 normal cases, 2 boundary cases and 1 invalid case. What is the minimum number of test cases?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Test plan",
                statement: "Minimum coverage = normal + boundary + invalid.",
              },
            ],
            steps: [
              {
                reasoning: "Minimum total = 2 + 2 + 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimum total = 5 test cases.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "ciecs-u4-ts-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A program prints 'Pass' if score >= 40 else 'Fail'. A developer tested 50 → Pass and 30 → Fail. Which additional test is MOST valuable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100 → Pass" },
              { id: "b", text: "40 → Pass" },
              { id: "c", text: "20 → Fail" },
              { id: "d", text: "0 → Fail" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Boundary testing",
                statement: "Test exact thresholds first.",
              },
            ],
            steps: [
              {
                reasoning: "The threshold 40 is untested — an off-by-one error would be caught by testing 40 (and 39).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 40 → Pass",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u4-ts-notes",
      title: "Problem-solving/testing — revision notes",
      summary:
        "Decomposition, test plans, boundary cases, syntax vs logic errors.",
      sections: [
        {
          heading: "Key skills",
          body: "Decompose before coding; test normal + boundary + invalid inputs; distinguish syntax errors (won't run) from logic errors (wrong output).",
        },
        {
          heading: "Exam tips",
          body: "In Paper 2, pseudocode earns marks before code — always sketch the algorithm for complex tasks.",
        },
      ],
    },
  ],
};
