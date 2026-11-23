import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "apcsa-u1-lesson-1-6",
  code: "1-6",
  title: "Type Conversion and Casting",
  goal: "I CAN convert between numeric types appropriately.",
  standards: ["CSA-2.10"],
  vocabulary: [
    { term: "Widening", definition: "int → double: automatic, no data loss." },
    { term: "Narrowing", definition: "double → int: needs explicit cast, may lose data." },
    { term: "Cast", definition: "(int) x forces conversion." },
    { term: "Truncation", definition: "double→int drops decimal, doesn't round." },
    { term: "Char arithmetic", definition: "char + int → int (char promotes)." },
    { term: "String.valueOf", definition: "Converts numbers to strings." },
  ],
  concepts: [
    {
      id: "apcsa-u1-type-conversion",
      title: "Type conversion",
      skill: "Convert between int and double correctly, including casting.",
      lesson: {
        sections: [
          {
            heading: "Widening vs narrowing",
            body: "**Widening** (int → double) happens automatically — no data loss, the int is exactly representable. **Narrowing** (double → int) requires an explicit cast `(int)` and TRUNCATES toward zero — `3.9` becomes `3`, `-3.9` becomes `-3`. Casting never rounds.",
          },
          {
            heading: "Char arithmetic",
            body: "`char` promotes to int in arithmetic: `'A' + 1` = `66` (int), not a char. To get the character, cast back: `(char)('A' + 1)` = `'B'`. String concatenation with `+` keeps things as strings — `'A' + \"1\"` = `\"A1\"`.",
          },
        ],
        keyFormulas: [
          { name: "Cast", statement: "$(int)\\, 3.9 = 3$ — truncates toward zero" },
          { name: "Char promote", statement: "$'A' + 1 = 66$ (int), $(char)('A'+1) = 'B'$" },
        ],
        workedExample: {
          problem: "What are `(int) 3.9`, `(int) -3.9`, and `'A' + 1`?",
          solution: "`(int) 3.9 = 3` (truncates toward zero), `(int) -3.9 = -3` (toward zero, not floor). `'A' + 1 = 66` — char promotes to int (ASCII 65 + 1).",
        },
      },
      questions: [
        {
          id: "apcsa-u1-type-conversion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Widening conversion in Java is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "double → int"
                    },
                    {
                              "id": "b",
                              "text": "int → double — automatic, no data loss"
                    },
                    {
                              "id": "c",
                              "text": "int → String"
                    },
                    {
                              "id": "d",
                              "text": "always requires cast"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Widening",
                              "statement": "Safe automatic conversion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Widening (int→double, float→double) is automatic; narrowing (double→int) needs a cast.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "int → double automatic",
          "commonErrors": [
                    "Thinking all conversions need casts."
          ]
},
        },
        {
          id: "apcsa-u1-type-conversion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is `(int) -3.9`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "-4"
                    },
                    {
                              "id": "b",
                              "text": "-3"
                    },
                    {
                              "id": "c",
                              "text": "-3.9"
                    },
                    {
                              "id": "d",
                              "text": "Compilation error"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Truncation toward zero",
                              "statement": "Cast drops decimal toward 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cast truncates toward zero — `-3.9` becomes `-3`, not `-4` (that's floor).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "-3",
          "commonErrors": [
                    "Rounding or flooring instead of truncating."
          ]
},
        },
        {
          id: "apcsa-u1-type-conversion-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate `'B' + 1`. Enter the numeric result.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 67
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Char promotes to int",
                              "statement": "ASCII arithmetic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`'B'` is ASCII 66; `+ 1` promotes to int: $66 + 1 = 67$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: 67.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "67",
          "commonErrors": [
                    "Expecting 'C' — arithmetic yields int, not char."
          ]
},
        },
        {
          id: "apcsa-u1-type-conversion-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why `double d = 3.9; int i = d;` fails to compile but `int i = (int) d;` works — and what value i gets.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Narrowing cast",
                              "statement": "Explicit conversion required."
                    },
                    {
                              "kind": "skill",
                              "name": "Type safety",
                              "statement": "Prevent silent data loss."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Narrowing conversion (double→int) loses the decimal part — Java requires explicit cast to acknowledge the data loss; without `(int)`, it won't compile.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "`(int) d` truncates toward zero: `i = 3` (not 4 — no rounding).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP principle: casts are explicit acknowledgments that you're discarding information.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Cast required; (int)3.9 = 3 truncates",
          "commonErrors": [
                    "Expecting automatic narrowing or rounding."
          ]
},
        },
      ],
    },
  ],
};
