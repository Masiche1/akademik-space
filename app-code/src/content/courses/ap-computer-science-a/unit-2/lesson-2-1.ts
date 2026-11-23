import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apcsa-u2-lesson-2-1",
  code: "2-1",
  title: "If Statements and Conditionals",
  goal: "I CAN write conditional logic using if/else and boolean expressions.",
  standards: ["CSA-3.2"],
  vocabulary: [
    { term: "if statement", definition: "Executes block only if condition is true." },
    { term: "else", definition: "Executes when if-condition is false." },
    { term: "else if", definition: "Chained conditions evaluated in order." },
    { term: "Nested if", definition: "if inside if — check ordering carefully." },
    { term: "Dangling else", definition: "else binds to nearest if." },
    { term: "Boolean condition", definition: "Any expression evaluating to true/false." },
  ],
  concepts: [
    {
      id: "apcsa-u2-if-statements",
      title: "If statements",
      skill: "Write conditional logic with if/else structures.",
      lesson: {
        sections: [
          {
            heading: "If/else basics",
            body: "`if (condition) { ... } else { ... }` — the condition must be boolean. `else if` chains test multiple conditions in order — the FIRST true branch executes, then control jumps past the chain. Order matters when conditions overlap.",
          },
          {
            heading: "The dangling else",
            body: "An `else` binds to the NEAREST unmatched `if` — indentation doesn't matter, only braces. Without braces, `if (a) if (b) x(); else y();` makes the else belong to the inner if. Always use braces for clarity and correctness.",
          },
        ],
        keyFormulas: [
          { name: "Else binding", statement: "else binds to nearest if — braces prevent ambiguity" },
          { name: "Else-if order", statement: "First true condition wins; later conditions skipped" },
        ],
        workedExample: {
          problem: "What prints for `int x = 5; if (x > 3) if (x > 10) System.out.println(\"big\"); else System.out.println(\"small\");`?",
          solution: "The else binds to the INNER if (`x > 10`), which is false (5 ≤ 10), so \"small\" prints. The outer if passed but had no else — counterintuitive without braces.",
        },
      },
      questions: [
        {
          id: "apcsa-u2-if-statements-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An `else` clause binds to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the first if in the program"
                    },
                    {
                              "id": "b",
                              "text": "the nearest unmatched if"
                    },
                    {
                              "id": "c",
                              "text": "the outermost if"
                    },
                    {
                              "id": "d",
                              "text": "whichever if is indented closest"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dangling else",
                              "statement": "Binds to nearest if."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`else` binds to the nearest `if` without its own else — braces and indentation don't change binding, only structure does.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Nearest if",
          "commonErrors": [
                    "Assuming indentation controls binding."
          ]
},
        },
        {
          id: "apcsa-u2-if-statements-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "In `if (a) if (b) x(); else y();`, the else belongs to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "if(a)"
                    },
                    {
                              "id": "b",
                              "text": "if(b)"
                    },
                    {
                              "id": "c",
                              "text": "both"
                    },
                    {
                              "id": "d",
                              "text": "neither — syntax error"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Dangling else",
                              "statement": "Inner if captures else."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Without braces, else binds to the nearest if — `if(b)` — regardless of indentation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "if(b)",
          "commonErrors": [
                    "Matching else to outer if by indentation."
          ]
},
        },
        {
          id: "apcsa-u2-if-statements-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For `int x = 7;` evaluate: `if (x > 5) x += 2; else x -= 2; x *= 3;`. What is x?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "x",
                              "answer": 27
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Branch then continue",
                              "statement": "If-path then next statement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$7 > 5$ true → `x += 2` → `x = 9`; then `x *= 3` → $9 \\times 3 = 27$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Final `x = 27`.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "27",
          "commonErrors": [
                    "Skipping the x *= 3 statement."
          ]
},
        },
        {
          id: "apcsa-u2-if-statements-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why braces matter in nested if statements, using the dangling else problem as your example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Brace necessity",
                              "statement": "Disambiguate binding."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Without braces, `else` binds to the nearest `if` — `if (a) if (b) x(); else y();` puts y() inside if(b)'s else, not if(a)'s — often surprising programmers.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Braces make structure explicit: `if (a) { if (b) { x(); } else { y(); } }` — the else clearly belongs to if(b); adding braces around if(a) with its own else changes semantics entirely.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP principle: always brace — clarity prevents the classic dangling-else bug.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Braces disambiguate else binding — always use them",
          "commonErrors": [
                    "Relying on indentation for binding."
          ]
},
        },
      ],
    },
  ],
};
