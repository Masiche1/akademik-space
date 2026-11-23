import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apcsa-u1-lesson-1-1",
  code: "1-1",
  title: "Primitive Types and I/O",
  goal: "I CAN use primitive types, operators, and console I/O in Java.",
  standards: ["CSA-1.1", "CSA-1.3"],
  vocabulary: [
    { term: "Primitive type", definition: "A basic data type: int, double, boolean, char." },
    { term: "Variable", definition: "A named storage location for a value." },
    { term: "Declaration", definition: "Specifying a variable's type and name." },
    { term: "Scanner", definition: "Java class for reading user input." },
    { term: "String", definition: "An object (not primitive) representing text." },
    { term: "Type casting", definition: "Converting a value from one type to another." },
  ],
  concepts: [
    {
      id: "apcsa-u1-primitives-io",
      title: "Primitive types and I/O",
      skill: "Declare variables, use operators, and read input in Java.",
      lesson: {
        sections: [
          {
            heading: "Primitive types",
            body: "Java's primitives: **int** (whole numbers), **double** (decimals), **boolean** (true/false), **char** (single character). Each has a fixed size and range — choosing the right type matters for correctness and memory. `String` is NOT primitive — it's an object.",
          },
          {
            heading: "I/O basics",
            body: "`Scanner` reads user input; `System.out.println` prints output. Input must be parsed: `scanner.nextInt()` for ints, `nextDouble()` for decimals, `next()`/`nextLine()` for strings. Mixing `nextInt()` with `nextLine()` requires care — `nextInt()` leaves the newline, which `nextLine()` then reads as empty.",
          },
        ],
        keyFormulas: [
          { name: "Division", statement: "$7 / 2 = 3$ (int) but $7.0 / 2 = 3.5$ (double) — type determines result" },
          { name: "Modulo", statement: "$a \\% b$ = remainder of $a \\div b$" },
        ],
        workedExample: {
          problem: "What does `int x = 7 / 2;` store? And `double y = 7 / 2;`?",
          solution: "`x = 3` — integer division truncates. `y = 3.0` — the division happens in int BEFORE assignment, so it's still 3, then widened to double. To get 3.5, write `7.0 / 2` or `(double) 7 / 2`.",
        },
      },
      questions: [
        {
          id: "apcsa-u1-primitives-io-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Java, `String` is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a primitive type"
                    },
                    {
                              "id": "b",
                              "text": "an object, not a primitive"
                    },
                    {
                              "id": "c",
                              "text": "the same as `char`"
                    },
                    {
                              "id": "d",
                              "text": "a reserved word"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "String",
                              "statement": "Object type, not primitive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`String` is an object (immutable class), not a primitive — it has methods like `.length()` and `.substring()`.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Object, not primitive",
          "commonErrors": [
                    "Listing String with primitives."
          ]
},
        },
        {
          id: "apcsa-u1-primitives-io-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the value of `int x = 7 / 2;`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "3.5"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "4"
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
                              "name": "Integer division",
                              "statement": "int/int truncates toward zero."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integer division discards the remainder: $7 \\div 2 = 3$ remainder $1$, so `x = 3`.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Expecting 3.5 — division happens before assignment."
          ]
},
        },
        {
          id: "apcsa-u1-primitives-io-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate: `double d = 7.0 / 2;` then `int i = (int) d;`. What is `i`? Enter the integer value.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "i",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Evaluate then cast",
                              "statement": "Compute in double, then truncate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$7.0 / 2 = 3.5$ in double; casting to int truncates to $3$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "`i = 3`.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$3$",
          "commonErrors": [
                    "Forgetting the cast truncates rather than rounds — 3.5 becomes 3, not 4."
          ]
},
        },
        {
          id: "apcsa-u1-primitives-io-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why `int x = 7 / 2;` gives 3 but `double y = 7 / 2;` also gives 3.0 (not 3.5). How would you get 3.5?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Type determines operation",
                              "statement": "Operands' types set result type."
                    },
                    {
                              "kind": "skill",
                              "name": "Type casting",
                              "statement": "Force double arithmetic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both operands are `int` literals, so integer division executes first — $7 \\div 2 = 3$ — before assignment; `x` stores 3, `y` stores the widened 3.0.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "To get 3.5, make at least one operand double: `7.0 / 2`, `7 / 2.0`, or `(double) 7 / 2`.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This is a classic AP trap — the assignment type does NOT retroactively change how division was computed.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Integer division happens first; force a double operand for 3.5",
          "commonErrors": [
                    "Thinking the variable's type changes the division."
          ]
},
        },
      ],
    },
  ],
};
