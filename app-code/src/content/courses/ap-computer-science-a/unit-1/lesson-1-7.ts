import type { Lesson } from "../../../types.ts";

export const lesson17: Lesson = {
  id: "apcsa-u1-lesson-1-7",
  code: "1-7",
  title: "Math Class and Random",
  goal: "I CAN use Math methods and generate random numbers.",
  standards: ["CSA-2.9"],
  vocabulary: [
    { term: "Math class", definition: "Java's built-in math utilities — static methods." },
    { term: "Math.random()", definition: "Returns double in [0, 1)." },
    { term: "Math.abs", definition: "Absolute value." },
    { term: "Math.pow", definition: "Exponentiation." },
    { term: "Math.sqrt", definition: "Square root." },
    { term: "Random range", definition: "(int)(Math.random() * n) gives 0 to n-1." },
  ],
  concepts: [
    {
      id: "apcsa-u1-math-lib",
      title: "Math class",
      skill: "Use Math methods for common operations and random numbers.",
      lesson: {
        sections: [
          {
            heading: "Math methods",
            body: "`Math.random()` returns a double in $[0, 1)$ — never 1.0. `Math.abs`, `Math.pow(base, exp)`, `Math.sqrt`, `Math.max`, `Math.min` are static — call as `Math.method()`, no object needed. All return doubles except where noted.",
          },
          {
            heading: "Random ranges",
            body: "To get a random int in $[0, n)$: `(int)(Math.random() * n)` — multiply by range, truncate. For $[1, n]$: `(int)(Math.random() * n) + 1`. The cast truncates — Math.random() never returns exactly 1.0, so the max is n-1.",
          },
        ],
        keyFormulas: [
          { name: "Random int", statement: "$(int)(\\text{Math.random()} \\times n) \\in [0, n-1]$" },
          { name: "Random 1-n", statement: "$(int)(\\text{Math.random()} \\times n) + 1 \\in [1, n]$" },
        ],
        workedExample: {
          problem: "How do you generate a random integer from 1 to 6 (simulating a die)?",
          solution: "`(int)(Math.random() * 6) + 1` — Math.random()*6 gives [0,6), cast truncates to {0,1,2,3,4,5}, +1 shifts to {1,...,6}.",
        },
      },
      questions: [
        {
          id: "apcsa-u1-math-lib-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "`Math.random()` returns ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "an int 0-9"
                    },
                    {
                              "id": "b",
                              "text": "a double in [0, 1)"
                    },
                    {
                              "id": "c",
                              "text": "a boolean"
                    },
                    {
                              "id": "d",
                              "text": "a String"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Math.random",
                              "statement": "Double in [0,1)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`Math.random()` returns a double $\\ge 0$ and $< 1$ — never exactly 1.0.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "[0,1) double",
          "commonErrors": [
                    "Thinking it returns integers."
          ]
},
        },
        {
          id: "apcsa-u1-math-lib-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "To get a random int in 0-9 inclusive, use ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "(int) Math.random()"
                    },
                    {
                              "id": "b",
                              "text": "(int)(Math.random() * 10)"
                    },
                    {
                              "id": "c",
                              "text": "Math.random() * 10"
                    },
                    {
                              "id": "d",
                              "text": "(int)(Math.random() + 10)"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Scale and truncate",
                              "statement": "Multiply by range, cast."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`Math.random()` ∈ [0,1); `* 10` → [0,10); `(int)` truncates to {0,...,9} — 0 to 9 inclusive.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(int)(Math.random()*10)",
          "commonErrors": [
                    "Forgetting to scale — (int)Math.random() always gives 0."
          ]
},
        },
        {
          id: "apcsa-u1-math-lib-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does `Math.max(3, Math.min(7, 5))` evaluate to?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Result",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Inner first",
                              "statement": "Evaluate innermost call."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`Math.min(7, 5) = 5`; `Math.max(3, 5) = 5`.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: 5.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Evaluating outer before inner."
          ]
},
        },
        {
          id: "apcsa-u1-math-lib-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how to generate a random integer from 5 to 15 inclusive, and why the formula works.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Range formula",
                              "statement": "(int)(random * range) + min."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Range size = 15 - 5 + 1 = 11 values; formula: `(int)(Math.random() * 11) + 5` — gives {0,...,10} + 5 = {5,...,15}.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Why it works: Math.random()*11 yields [0,11), truncation gives integers 0-10 (11 values), +5 shifts to 5-15.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Common error: using *10 (excludes 15) or forgetting +5 (wrong range).",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(int)(Math.random()*11)+5 for 5-15",
          "commonErrors": [
                    "Off-by-one in range size or forgetting offset."
          ]
},
        },
      ],
    },
  ],
};
