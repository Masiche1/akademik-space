import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "apcsa-u1-lesson-1-5",
  code: "1-5",
  title: "Input and Output",
  goal: "I CAN read input with Scanner and format output.",
  standards: ["CSA-1.3"],
  vocabulary: [
    { term: "Scanner", definition: "Java class for reading keyboard input." },
    { term: "nextInt/nextDouble", definition: "Reads numeric input." },
    { term: "next/nextLine", definition: "Reads string input." },
    { term: "println vs print", definition: "println adds newline; print doesn't." },
    { term: "hasNext", definition: "Checks if more input exists." },
    { term: "Input pitfall", definition: "nextInt leaves newline that nextLine reads as empty." },
  ],
  concepts: [
    {
      id: "apcsa-u1-io-scanner",
      title: "Input and output",
      skill: "Read various input types and produce formatted output.",
      lesson: {
        sections: [
          {
            heading: "Scanner methods",
            body: "`scanner.nextInt()` reads an int, `nextDouble()` a decimal, `next()` a word (stops at whitespace), `nextLine()` a full line. Each consumes input differently — `next()`/`nextInt()` stop at the delimiter but leave it; `nextLine()` consumes through the newline.",
          },
          {
            heading: "The classic pitfall",
            body: "After `nextInt()`, the newline remains in the buffer — a following `nextLine()` reads that leftover newline as an empty string. Fix: add a `scanner.nextLine()` after numeric reads to consume the leftover newline, or use `next()` consistently.",
          },
        ],
        keyFormulas: [
          { name: "Pitfall fix", statement: "`nextInt(); nextLine();` — consume leftover newline" },
          { name: "Output", statement: "`System.out.println(x)` — newline; `print(x)` — no newline" },
        ],
        workedExample: {
          problem: "Code reads `nextInt()` then `nextLine()` for a name. The name comes out empty. Why?",
          solution: "`nextInt()` leaves the newline in the buffer; `nextLine()` immediately reads that leftover newline as an empty string. Fix: call `scanner.nextLine()` once after `nextInt()` to consume the newline before reading the name.",
        },
      },
      questions: [
        {
          id: "apcsa-u1-io-scanner-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "`scanner.nextLine()` reads ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a single word"
                    },
                    {
                              "id": "b",
                              "text": "an entire line including spaces"
                    },
                    {
                              "id": "c",
                              "text": "only numbers"
                    },
                    {
                              "id": "d",
                              "text": "one character"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "nextLine",
                              "statement": "Reads through newline."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`nextLine()` consumes everything through the newline — spaces included; `next()` stops at whitespace.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Entire line",
          "commonErrors": [
                    "Confusing next() and nextLine()."
          ]
},
        },
        {
          id: "apcsa-u1-io-scanner-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "After `nextInt()`, a `nextLine()` returns empty. Why?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Scanner is broken"
                    },
                    {
                              "id": "b",
                              "text": "nextInt leaves the newline; nextLine reads it as empty"
                    },
                    {
                              "id": "c",
                              "text": "nextLine can't follow nextInt"
                    },
                    {
                              "id": "d",
                              "text": "need nextDouble instead"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Input pitfall",
                              "statement": "Leftover newline consumed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`nextInt()` stops before the newline but doesn't consume it; `nextLine()` reads that leftover newline as an empty line.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Leftover newline",
          "commonErrors": [
                    "Not knowing input methods consume differently."
          ]
},
        },
        {
          id: "apcsa-u1-io-scanner-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the fix for reading an int followed by a name on the next line.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Input handling",
                              "statement": "Consume newline between reads."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After `nextInt()`, add `scanner.nextLine()` to consume the leftover newline BEFORE calling `nextLine()` for the name — otherwise the name reads as empty.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Code: `int n = scanner.nextInt(); scanner.nextLine(); String name = scanner.nextLine();`",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Add nextLine() after nextInt() to consume newline",
          "commonErrors": [
                    "Forgetting the delimiter remains."
          ]
},
        },
        {
          id: "apcsa-u1-io-scanner-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between `next()` and `nextLine()`, and when each is appropriate.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Input methods",
                              "statement": "Word vs line granularity."
                    },
                    {
                              "kind": "skill",
                              "name": "Method selection",
                              "statement": "Match method to need."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`next()` reads one whitespace-delimited word — appropriate for single tokens like names or numbers-as-strings; `nextLine()` reads everything through the newline — appropriate for full lines with spaces.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Neither consumes the trailing newline automatically — `next()` leaves the delimiter, `nextLine()` consumes it; mixing requires care.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP exams test the newline pitfall — knowing which methods leave delimiters is essential.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "next()=word, nextLine()=line; mind the leftover newline",
          "commonErrors": [
                    "Using next() when spaces matter, or vice versa."
          ]
},
        },
      ],
    },
  ],
};
