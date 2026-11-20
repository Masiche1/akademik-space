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
              { id: "a", text: "The easiest test to run" },
              {
                id: "b",
                text: "A boundary input like 0, empty string or maximum value",
              },
              { id: "c", text: "A test that always fails" },
              { id: "d", text: "The first test written" },
            ],
            correctChoiceId: "b",
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
