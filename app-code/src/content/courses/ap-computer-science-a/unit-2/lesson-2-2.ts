import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apcsa-u2-lesson-2-2",
  code: "2-2",
  title: "While Loops",
  goal: "I CAN write and trace while loops with proper termination.",
  standards: ["CSA-3.6"],
  vocabulary: [
    { term: "while loop", definition: "Repeats while condition is true." },
    { term: "Loop condition", definition: "Boolean tested before each iteration." },
    { term: "Infinite loop", definition: "Condition never becomes false." },
    { term: "Loop variable", definition: "Variable controlling iteration count." },
    { term: "Off-by-one", definition: "Loop runs one too many/few times." },
    { term: "Sentinel value", definition: "Special input value ending the loop." },
  ],
  concepts: [
    {
      id: "apcsa-u2-while-loops",
      title: "While loops",
      skill: "Write while loops with correct conditions and termination.",
      lesson: {
        sections: [
          {
            heading: "While mechanics",
            body: "`while (condition) { body }` — condition checked BEFORE each iteration; if false initially, body never runs (zero-trip loop). The body must eventually make the condition false or the loop is infinite. Trace loops by tracking the loop variable each iteration.",
          },
          {
            heading: "Common loop bugs",
            body: "**Off-by-one**: `i <= n` vs `i < n` runs n vs n-1 times. **Infinite loop**: forgetting to update the loop variable inside the body. **Wrong condition**: using the loop variable's final value instead of current. Always verify: does the loop variable CHANGE toward termination?",
          },
        ],
        keyFormulas: [
          { name: "While", statement: "Check condition → execute body → recheck → repeat" },
          { name: "Termination", statement: "Loop variable must approach the exit condition" },
        ],
        workedExample: {
          problem: "Trace `int i = 0; while (i < 5) { System.out.print(i); i++; }` — what prints?",
          solution: "Prints 0 1 2 3 4 — condition `i < 5` checked before each iteration; i increments inside body; loop exits when i = 5. Five iterations, values 0-4.",
        },
      },
      questions: [
        {
          id: "apcsa-u2-while-loops-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A while loop checks its condition ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "after each iteration only"
                    },
                    {
                              "id": "b",
                              "text": "before each iteration"
                    },
                    {
                              "id": "c",
                              "text": "once at the start"
                    },
                    {
                              "id": "d",
                              "text": "never — it always runs once"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "While semantics",
                              "statement": "Pre-test loop."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`while` is a pre-test loop — condition checked before EVERY iteration including the first; can run zero times.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Before each iteration",
          "commonErrors": [
                    "Thinking it always runs at least once."
          ]
},
        },
        {
          id: "apcsa-u2-while-loops-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does `int i=0; while (i<3) { i++; }` leave i as?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "2"
                    },
                    {
                              "id": "d",
                              "text": "Infinite loop"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Trace iterations",
                              "statement": "i: 0→1→2→3, then exit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iterations: check 0<3 (run, i=1), 1<3 (run, i=2), 2<3 (run, i=3), 3<3 false → exit. `i = 3`.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "3",
          "commonErrors": [
                    "Off-by-one in counting iterations."
          ]
},
        },
        {
          id: "apcsa-u2-while-loops-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Trace `int sum = 0; int i = 1; while (i <= 4) { sum += i; i++; }`. What is sum?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "sum",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Accumulate",
                              "statement": "sum = 1+2+3+4."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Iterations add i = 1, 2, 3, 4 → `sum = 10`.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 10.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Using i < 4 instead of i <= 4 — would give 6."
          ]
},
        },
        {
          id: "apcsa-u2-while-loops-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the three most common while-loop bugs and how to avoid each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Loop bugs",
                              "statement": "Off-by-one, infinite, wrong condition."
                    },
                    {
                              "kind": "skill",
                              "name": "Debugging",
                              "statement": "Verify termination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "**Off-by-one**: `<=` vs `<` boundary error — count expected iterations and verify the condition matches; fix by testing edge cases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Infinite loop**: forgetting to update loop variable — verify the body modifies the condition variable toward exit; add the update inside the body.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "**Wrong condition**: testing final value instead of current, or inverting logic — trace one iteration manually to verify.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Universal fix: trace the loop by hand with concrete values before trusting it.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Off-by-one, infinite loop, wrong condition — trace to verify",
          "commonErrors": [
                    "Assuming loops work without tracing."
          ]
},
        },
      ],
    },
  ],
};
