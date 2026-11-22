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
                              "text": "A fast computer"
                    },
                    {
                              "id": "b",
                              "text": "An error in a program"
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
          "correctChoiceId": "b"
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
        {
          id: "cipc-u1-db-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a bug?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A mistake or error in a program" },
            { id: "b", text: "A fast processor" },
            { id: "c", text: "A type of computer" },
            { id: "d", text: "A keyboard key" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Bug", statement: "Error in a program." }],
            steps: [
              { reasoning: "A bug is a mistake in the program that makes it behave wrongly.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** A mistake or error in a program",
          },
        },
        {
          id: "cipc-u1-db-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'debugging' mean?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Debugging", statement: "Finding and fixing bugs." }],
            steps: [
              { reasoning: "Debugging = finding mistakes in a program.", marks: 1, markCode: "M" },
              { reasoning: "And fixing them so the program works correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Finding and fixing program errors.",
          },
        },
        {
          id: "cipc-u1-db-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A program is supposed to say 'hello' 3 times but only says it twice. How many times is the expected output different from the actual output?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Expected vs actual", statement: "Expected 3, actual 2 — differs by 1." }],
            steps: [
              { reasoning: "Expected: 3 'hello's; actual: 2 — one missing.", marks: 1, markCode: "M" },
              { reasoning: "The outputs differ by 1 repetition — there is a bug.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cipc-u1-db-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'expected result' when testing a program?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The number of bugs found" },
            { id: "b", text: "What the program SHOULD do according to the plan" },
            { id: "c", text: "The fastest way to run it" },
            { id: "d", text: "Whatever the program actually does" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Expected result", statement: "Planned correct outcome." }],
            steps: [
              { reasoning: "Expected result = what the program should produce if correct.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** What the program SHOULD do",
          },
        },
        {
          id: "cipc-u1-db-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A game should give 10 points for a correct answer, but gives 5 points. Describe how you would find the bug.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Debugging steps", statement: "Compare expected vs actual, inspect code." }],
            steps: [
              { reasoning: "Note expected (10) vs actual (5) — they differ, so a bug exists.", marks: 1, markCode: "M" },
              { reasoning: "Check the scoring block — the 'change score by' value is probably wrong (5 instead of 10).", marks: 1, markCode: "M" },
              { reasoning: "Fix the value and test again to confirm 10 points.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compare expected/actual, check score block, fix and retest.",
          },
        },
        {
          id: "cipc-u1-db-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is it important to test a program with DIFFERENT inputs, not just one?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Different inputs can reveal bugs that one test case misses" },
            { id: "b", text: "Computers prefer variety" },
            { id: "c", text: "Testing more makes programs run faster" },
            { id: "d", text: "One input is always enough" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Testing coverage", statement: "More cases find more bugs." }],
            steps: [
              { reasoning: "Bugs often appear only for certain inputs (edge cases).", marks: 1, markCode: "M" },
              { reasoning: "Testing different inputs gives confidence the program works in all cases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Different inputs reveal hidden bugs",
          },
        },
        {
          id: "cipc-u1-db-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A program sometimes works and sometimes doesn't. What is the best first debugging step?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Debugging approach", statement: "Reproduce, then isolate." }],
            steps: [
              { reasoning: "Try to make the bug happen again — note what inputs/actions trigger it.", marks: 1, markCode: "M" },
              { reasoning: "Look for patterns: does it happen only after a certain event or value?", marks: 1, markCode: "M" },
              { reasoning: "Narrow down to the block/step that causes it, then fix and retest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reproduce the bug, find the pattern, isolate the bad step.",
          },
        },
        {
          id: "cipc-u1-db-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do programmers test programs before sharing them?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Why test", statement: "Find and fix errors first." }],
            steps: [
              { reasoning: "Testing finds bugs before other people use the program.", marks: 1, markCode: "M" },
              { reasoning: "It makes the program more reliable and trustworthy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "To find and fix errors before users see them.",
          },
        },
        {
          id: "cipc-u1-db-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A program should move a sprite right 50 steps but it moves left instead. What single change would likely fix it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Common bugs", statement: "Wrong direction block." }],
            steps: [
              { reasoning: "Change the direction block from 'move left' to 'move right' (or fix the value).", marks: 1, markCode: "M" },
              { reasoning: "The bug is the wrong direction instruction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Change 'move left' to 'move right'.",
          },
        },
        {
          id: "cipc-u1-db-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a symptom of a bug in a program?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It runs exactly as planned" },
            { id: "b", text: "It crashes or gives wrong output" },
            { id: "c", text: "It loads quickly" },
            { id: "d", text: "It uses colours" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Bug symptoms", statement: "Wrong behaviour = bug." }],
            steps: [
              { reasoning: "Crashing or wrong output shows the program is not working correctly.", marks: 1, markCode: "M" },
              { reasoning: "Correct, fast, colourful behaviour are not symptoms of bugs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It crashes or gives wrong output",
          },
        },
        {
          id: "cipc-u1-db-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write a simple test plan for a 'guess the number' game: what inputs would you try and what would you check?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Test planning", statement: "Try different inputs, check outputs." }],
            steps: [
              { reasoning: "Try correct guess — should say 'correct'.", marks: 1, markCode: "M" },
              { reasoning: "Try wrong guess (higher/lower) — should give a hint.", marks: 1, markCode: "M" },
              { reasoning: "Try edge cases: first try, last try, empty/invalid input.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Test correct, wrong, and edge-case guesses.",
          },
        },
        {
          id: "cipc-u1-db-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define bug. (b) What is debugging? (c) What is the difference between expected and actual results? (d) A sprite should turn right but turns left — what is the likely bug? (e) Why test with different inputs? (f) Give two steps of a debugging process. (g) What is a test plan? (h) Why is fixing bugs important for users?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Testing and debugging", statement: "Bugs, expected vs actual, process, test plans." }],
            steps: [
              { reasoning: "(a) Error/mistake in a program.", marks: 1, markCode: "M" },
              { reasoning: "(b) Finding and fixing program errors.", marks: 1, markCode: "M" },
              { reasoning: "(c) Expected=planned; actual=what happens.", marks: 1, markCode: "M" },
              { reasoning: "(d) Wrong turn direction block (left instead of right).", marks: 1, markCode: "M" },
              { reasoning: "(e) Different inputs reveal hidden bugs.", marks: 1, markCode: "M" },
              { reasoning: "(f) Two steps: reproduce bug, inspect/fix blocks, retest.", marks: 1, markCode: "M" },
              { reasoning: "(g) Plan of inputs to try and outputs to check.", marks: 1, markCode: "M" },
              { reasoning: "(h) Users get reliable programs that work correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bug, debugging, expected vs actual, direction bug, varied testing, steps, test plan, user reliability.",
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
