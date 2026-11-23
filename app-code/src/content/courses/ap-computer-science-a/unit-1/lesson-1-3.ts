import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "apcsa-u1-lesson-1-3",
  code: "1-3",
  title: "Boolean Expressions and Operators",
  goal: "I CAN write boolean expressions using comparison and logical operators.",
  standards: ["CSA-2.5"],
  vocabulary: [
    { term: "Boolean", definition: "true/false value type." },
    { term: "Comparison operator", definition: "==, !=, <, >, <=, >= — yields boolean." },
    { term: "Logical operator", definition: "&& (and), || (or), ! (not)." },
    { term: "Short-circuit", definition: "&& and || may skip evaluating the right side." },
    { term: "Truth table", definition: "All combinations of inputs and outputs." },
    { term: "De Morgan's laws", definition: "!(a && b) = !a || !b; !(a || b) = !a && !b." },
  ],
  concepts: [
    {
      id: "apcsa-u1-boolean-ops",
      title: "Boolean expressions",
      skill: "Write and evaluate boolean expressions with logical operators.",
      lesson: {
        sections: [
          {
            heading: "Comparison and logic",
            body: "Comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) yield booleans. Logical operators combine them: `&&` requires both true, `||` requires at least one, `!` negates. **Equality is `==`, not `=`** — `=` is assignment and won't compile in a condition.",
          },
          {
            heading: "Short-circuit evaluation",
            body: "`&&` stops at the first false; `||` stops at the first true — the right side may never evaluate. This matters when the right side could error (e.g., `i < arr.length && arr[i] == 0` avoids out-of-bounds). De Morgan's laws let you rewrite negations: `!(a && b)` equals `!a || !b`.",
          },
        ],
        keyFormulas: [
          { name: "Truth table", statement: "$a \\mathbin{\\&\\&} b$: true only if both true" },
          { name: "De Morgan", statement: "$!(a \\mathbin{\\&\\&} b) = !a \\mathbin{||} !b$" },
        ],
        workedExample: {
          problem: "Evaluate `!(2 < 3 || 4 == 5)`.",
          solution: "Inside: `2 < 3` is true, `4 == 5` is false; `true || false` = true; `!true` = **false**.",
        },
      },
      questions: [
        {
          id: "apcsa-u1-boolean-ops-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Java, the equality comparison operator is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "="
                    },
                    {
                              "id": "b",
                              "text": "=="
                    },
                    {
                              "id": "c",
                              "text": "equals"
                    },
                    {
                              "id": "d",
                              "text": "==="
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "== vs =",
                              "statement": "== compares; = assigns."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`==` compares values for equality; `=` assigns — using `=` in a condition is a compile error.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "==",
          "commonErrors": [
                    "Using = for comparison."
          ]
},
        },
        {
          id: "apcsa-u1-boolean-ops-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is `!(2 < 3 || 4 == 5)`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "true"
                    },
                    {
                              "id": "b",
                              "text": "false"
                    },
                    {
                              "id": "c",
                              "text": "Compilation error"
                    },
                    {
                              "id": "d",
                              "text": "0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Evaluate inside-out",
                              "statement": "Parentheses first, then !."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2<3$ true, $4==5$ false → `true || false` = true → `!true` = false.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "false",
          "commonErrors": [
                    "Forgetting the outer negation."
          ]
},
        },
        {
          id: "apcsa-u1-boolean-ops-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate `true && false || true`. Enter 1 for true, 0 for false.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Precedence: && before ||",
                              "statement": "Compute && first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`true && false` = false; `false || true` = true → 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 1.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Evaluating left-to-right ignoring precedence."
          ]
},
        },
        {
          id: "apcsa-u1-boolean-ops-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain short-circuit evaluation and why `i < arr.length && arr[i] == 0` is safer than `arr[i] == 0 && i < arr.length`.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Short-circuit",
                              "statement": "&& stops at first false."
                    },
                    {
                              "kind": "skill",
                              "name": "Defensive programming",
                              "statement": "Guard before access."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`&&` evaluates left-to-right and stops at the first false — the right side may never run; this is short-circuit evaluation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "In the safe version, `i < arr.length` is checked FIRST — if false, `arr[i]` never evaluates, avoiding `ArrayIndexOutOfBoundsException`; reversed, `arr[i]` runs first and may crash.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP principle: always put the bounds check before the array access in a compound condition.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Check bounds first — && short-circuits to protect arr[i]",
          "commonErrors": [
                    "Putting array access before the bounds check."
          ]
},
        },
      ],
    },
  ],
};
