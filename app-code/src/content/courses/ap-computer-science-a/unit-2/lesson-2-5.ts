import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "apcsa-u2-lesson-2-5",
  code: "2-5",
  title: "Recursion",
  goal: "I CAN write and trace recursive methods.",
  standards: ["CSA-3.11"],
  vocabulary: [
    { term: "Recursion", definition: "Method calling itself." },
    { term: "Base case", definition: "Condition that stops recursion." },
    { term: "Recursive case", definition: "Method calls itself with smaller input." },
    { term: "Call stack", definition: "Tracks active method calls." },
    { term: "Stack overflow", definition: "Infinite recursion exhausts memory." },
    { term: "Factorial/fibonacci", definition: "Classic recursive examples." },
  ],
  concepts: [
    {
      id: "apcsa-u2-recursion",
      title: "Recursion",
      skill: "Write recursive methods with correct base cases.",
      lesson: {
        sections: [
          {
            heading: "Recursion structure",
            body: "Every recursive method needs a **base case** (condition that returns without recursing) and a **recursive case** (calls itself with a smaller/different input). Missing base case = infinite recursion = stack overflow. The call stack tracks each call until the base case unwinds.",
          },
          {
            heading: "Tracing recursion",
            body: "To trace: expand the calls mentally — `fact(4)` calls `fact(3)` calls `fact(2)` calls `fact(1)` which returns 1, then unwinds multiplying. Each level's return depends on deeper levels — think 'on the way down' vs 'on the way up'.",
          },
        ],
        keyFormulas: [
          { name: "Factorial", statement: "$n! = n \\times (n-1)!$, base $0! = 1$" },
          { name: "Base case", statement: "Must exist and be reachable — else stack overflow" },
        ],
        workedExample: {
          problem: "Trace `int fact(int n) { if (n <= 1) return 1; return n * fact(n-1); }` for n=3.",
          solution: "fact(3) = 3 * fact(2) = 3 * (2 * fact(1)) = 3 * (2 * 1) = 6. Base case n<=1 returns 1; recursion unwinds multiplying.",
        },
      },
      questions: [
        {
          id: "apcsa-u2-recursion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Every recursive method needs ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a loop"
                    },
                    {
                              "id": "b",
                              "text": "a base case that stops recursion"
                    },
                    {
                              "id": "c",
                              "text": "two methods"
                    },
                    {
                              "id": "d",
                              "text": "an array"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Base case",
                              "statement": "Termination condition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Without a base case, recursion never stops — stack overflow; base case is essential.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Base case",
          "commonErrors": [
                    "Writing recursion without termination."
          ]
},
        },
        {
          id: "apcsa-u2-recursion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does `fact(3)` return for `fact(n) = n * fact(n-1)` with `fact(1)=1`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3"
                    },
                    {
                              "id": "b",
                              "text": "6"
                    },
                    {
                              "id": "c",
                              "text": "9"
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
                              "name": "Unwind",
                              "statement": "$3 \\times 2 \\times 1$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "fact(3) = 3 × fact(2) = 3 × 2 × fact(1) = 3 × 2 × 1 = 6.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Forgetting the base case value."
          ]
},
        },
        {
          id: "apcsa-u2-recursion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For `int sum(int n) { if (n == 0) return 0; return n + sum(n-1); }`, what does `sum(4)` return?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Result",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Unwind",
                              "statement": "$4+3+2+1+0$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "sum(4) = 4 + sum(3) = 4+3+2+1+0 = 10.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: 10.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Missing the base case contribution."
          ]
},
        },
        {
          id: "apcsa-u2-recursion-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain what happens without a base case in recursion, and how the call stack relates.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Infinite recursion",
                              "statement": "No termination = crash."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Without a base case, the method calls itself forever — each call adds a frame to the call stack; eventually memory exhausts → `StackOverflowError`.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The call stack tracks active calls: each recursive call pushes a new frame with its own parameters; the base case triggers unwinding — returns propagate back up.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP exams test base-case identification — the base case is what makes recursion finite and correct.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "No base case → infinite recursion → StackOverflowError",
          "commonErrors": [
                    "Not recognizing missing base cases."
          ]
},
        },
      ],
    },
  ],
};
