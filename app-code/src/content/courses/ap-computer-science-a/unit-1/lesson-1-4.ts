import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "apcsa-u1-lesson-1-4",
  code: "1-4",
  title: "Arithmetic and Assignment Operators",
  goal: "I CAN use arithmetic operators, compound assignment, and increments.",
  standards: ["CSA-2.4"],
  vocabulary: [
    { term: "Compound assignment", definition: "+=, -=, *=, /=, %= — shorthand for op-assign." },
    { term: "Increment", definition: "++ adds 1; -- subtracts 1." },
    { term: "Prefix vs postfix", definition: "++i vs i++ — timing of increment." },
    { term: "Operator precedence", definition: "Order operations evaluate: *, /, % before +, -." },
    { term: "Type conversion", definition: "int to double widens automatically; double to int needs cast." },
    { term: "Modulo", definition: "% gives remainder." },
  ],
  concepts: [
    {
      id: "apcsa-u1-operators",
      title: "Operators",
      skill: "Apply arithmetic, compound assignment, and increment operators correctly.",
      lesson: {
        sections: [
          {
            heading: "Compound assignment",
            body: "`x += 3` means `x = x + 3` — same for `-=`, `*=`, `/=`, `%=`. These evaluate the right side ONCE: `x += x++` behaves differently than `x = x + x++` in subtle ways. Increment `++` and decrement `--` add/subtract 1.",
          },
          {
            heading: "Prefix vs postfix",
            body: "`++i` increments BEFORE the value is used; `i++` uses the value THEN increments. `int a = i++;` stores old i in a, then increments; `int a = ++i;` increments first, stores new value. AP exams test this distinction.",
          },
        ],
        keyFormulas: [
          { name: "Compound", statement: "$x \\mathbin{\\texttt{+=}} e \\equiv x = x + e$" },
          { name: "Modulo", statement: "$a \\mathbin{\\%} b$ — remainder of $a \\div b$" },
        ],
        workedExample: {
          problem: "What are the values of `a` and `i` after `int i = 5; int a = i++;`?",
          solution: "Postfix: `a` gets the OLD value 5, then `i` becomes 6. So `a = 5`, `i = 6`. With `++i`, `i` would become 6 first, then `a = 6`.",
        },
      },
      questions: [
        {
          id: "apcsa-u1-operators-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "`x += 5` is equivalent to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "x = 5"
                    },
                    {
                              "id": "b",
                              "text": "x = x + 5"
                    },
                    {
                              "id": "c",
                              "text": "x++"
                    },
                    {
                              "id": "d",
                              "text": "x == 5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Compound assignment",
                              "statement": "Shorthand for op-assign."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`+=` means 'add to current value' — `x += 5` is `x = x + 5`.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "x = x + 5",
          "commonErrors": [
                    "Reading += as assignment of 5."
          ]
},
        },
        {
          id: "apcsa-u1-operators-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "After `int i = 5; int a = i++;`, what are `a` and `i`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a=6, i=6"
                    },
                    {
                              "id": "b",
                              "text": "a=5, i=6"
                    },
                    {
                              "id": "c",
                              "text": "a=5, i=5"
                    },
                    {
                              "id": "d",
                              "text": "a=6, i=5"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Postfix increment",
                              "statement": "Old value used, then increment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Postfix `i++` yields old value 5 for `a`, then increments `i` to 6.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "a=5, i=6",
          "commonErrors": [
                    "Thinking ++i semantics — it's i then increment."
          ]
},
        },
        {
          id: "apcsa-u1-operators-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate `int x = 10; x %= 3; x *= 2;`. What is the final value of x?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "x",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Step through compound ops",
                              "statement": "Left-to-right sequential."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$10 \\mathbin{\\%} 3 = 1$ → `x = 1`; $1 \\times 2 = 2$ → `x = 2`.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Final `x = 2`.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Applying operations in wrong order."
          ]
},
        },
        {
          id: "apcsa-u1-operators-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between `int a = i++` and `int a = ++i` when `i = 5`, including the final values of both variables.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Prefix vs postfix",
                              "statement": "When increment happens."
                    },
                    {
                              "kind": "skill",
                              "name": "Precise semantics",
                              "statement": "Value used vs value stored."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`int a = i++` (postfix): `a` receives 5, THEN `i` becomes 6 — result: a=5, i=6.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "`int a = ++i` (prefix): `i` becomes 6 FIRST, then `a` receives 6 — result: a=6, i=6.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "AP exams test this distinction — postfix uses old value, prefix uses new value.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Postfix: a=5,i=6; prefix: a=6,i=6",
          "commonErrors": [
                    "Confusing which value gets stored."
          ]
},
        },
      ],
    },
  ],
};
