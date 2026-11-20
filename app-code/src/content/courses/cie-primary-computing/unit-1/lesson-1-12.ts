import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "cipc-u1-lesson-1-12",
  code: "1-12",
  title: "Stage 3 — Debugging and Testing Programs",
  goal: "I CAN test programs systematically, find errors and fix them.",
  standards: ["Cambridge Primary Computing 0059 Stage 3: programming", "Cambridge Primary Computing 0059 framework strands: Programming"],
  stage: 3,
  vocabulary: [
    { term: "Test", definition: "Running a program to check it works correctly." },
    { term: "Bug", definition: "An error or mistake in a program." },
    { term: "Debug", definition: "Finding and fixing bugs." },
    { term: "Test case", definition: "A specific input used to check a program." },
    { term: "Expected result", definition: "What the program should output if correct." },
    { term: "Actual result", definition: "What the program really outputs." },
  ],
  concepts: [
    {
      id: "cipc-u1-s3-debug",
      title: "Testing and debugging",
      skill: "Plan tests, identify bugs and fix programs at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Why test?",
            body: "Programs rarely work perfectly first time. Testing means running the program with different inputs and checking the output matches what you expected. Comparing expected vs actual results reveals bugs.",
          },
          {
            heading: "Debugging systematically",
            body: "When a bug appears: check the logic step by step, look for typos or wrong blocks, test one change at a time. Fixing one bug may reveal another — keep testing until all cases pass.",
          },
        ],
        keyFormulas: [
          { name: "Test", statement: "input → run → compare expected vs actual" },
          { name: "Debug", statement: "find bug → fix → retest" },
        ],
        workedExample: {
          problem: "A 'add two numbers' program outputs 7 for inputs 3 and 4. What should you check first?",
          solution: "Check the maths block — it may be subtracting instead of adding, or reading inputs in wrong order. Test with 10 and 5 to confirm.",
        },
      },
      questions: [
        {
          id: "cipc-u1-db-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a bug?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An error in a program"
                    },
                    {
                              "id": "b",
                              "text": "A fast computer"
                    },
                    {
                              "id": "c",
                              "text": "A type of file"
                    },
                    {
                              "id": "d",
                              "text": "A network device"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bug",
                              "statement": "Program error."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bug = mistake causing wrong behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "An error in a program"
},
        },
        {
          id: "cipc-u1-db-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between expected and actual results when testing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Testing",
                              "statement": "Compare results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Expected = what should happen.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Actual = what really happens; mismatch reveals bug.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Should vs actually happens"
},
        },
        {
          id: "cipc-u1-db-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A program should say 'even' for even numbers but says 'odd' for 4. List three things to check when debugging.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Debugging",
                              "statement": "Systematic checks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Check the condition uses correct comparison (÷2 remainder).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check IF/ELSE branches aren't swapped.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check input is being read correctly.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Condition, branches, input checks"
},
        },
        {
          id: "cipc-u1-db-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define bug, test and debug. (b) Why test with different inputs? (c) What is a test case? (d) Program outputs 12 for 3×4 — is it correct? (e) Describe a systematic debugging approach. (f) Why retest after each fix? (g) What is an edge case? (h) Design two test cases for a 'double the number' program.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Testing and debugging",
                              "statement": "Definitions, cases, process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Bug=error; test=check run; debug=find+fix.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Different inputs expose different bugs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Specific input for checking.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Yes — 12 is correct for 3×4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Trace logic, check blocks, fix one thing, retest.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Fix may break other parts; verify all still work.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Unusual/extreme input testing limits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) e.g. input 5→10, input 0→0.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bug/test/debug, test cases, systematic fixes, edge cases."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u1-db-notes",
      title: "Debugging — notes",
      summary: "Test = input → compare expected vs actual. Debug = find bug, fix one thing, retest.",
      sections: [
        { heading: "Key idea", body: "Good programmers test early and often with varied inputs." },
        { heading: "Process", body: "Reproduce bug → trace logic → fix → retest everything." },
      ],
    },
  ],
};
