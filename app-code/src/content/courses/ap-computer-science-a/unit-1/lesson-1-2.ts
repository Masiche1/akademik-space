import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apcsa-u1-lesson-1-2",
  code: "1-2",
  title: "String Operations",
  goal: "I CAN manipulate strings using methods and concatenation.",
  standards: ["CSA-2.8"],
  vocabulary: [
    { term: "String", definition: "Immutable sequence of characters." },
    { term: "Substring", definition: "A portion of a string extracted by index." },
    { term: "charAt", definition: "Returns the character at an index." },
    { term: "length", definition: "Number of characters in a string." },
    { term: "Index", definition: "Zero-based position of a character." },
    { term: "Immutability", definition: "Strings cannot be changed — methods return new strings." },
  ],
  concepts: [
    {
      id: "apcsa-u1-strings",
      title: "String operations",
      skill: "Use String methods for indexing, substring, and concatenation.",
      lesson: {
        sections: [
          {
            heading: "Strings are indexed",
            body: "Each character has a zero-based index: `s.charAt(0)` is the first character. `s.length()` gives count (indices run 0 to length-1). `s.substring(start, end)` extracts from start inclusive to end EXCLUSIVE — `substring(1, 4)` gives characters at indices 1, 2, 3.",
          },
          {
            heading: "Immutability and concatenation",
            body: "Strings can't be modified — `s.concat(t)` or `s + t` creates a NEW string. `+` concatenates when either operand is a String, but adds numerically otherwise: `\"a\" + 1 + 2` is `\"a12\"` (left-to-right), while `1 + 2 + \"a\"` is `\"3a\"`.",
          },
        ],
        keyFormulas: [
          { name: "charAt", statement: "$s.\\text{charAt}(i)$ — character at index $i$ (0-based)" },
          { name: "substring", statement: "$s.\\text{substring}(a,b)$ — indices $a$ to $b-1$" },
        ],
        workedExample: {
          problem: "What is `\"hello\".substring(1, 4)`? What about `\"a\" + 1 + 2`?",
          solution: "`substring(1,4)` = `\"ell\"` (indices 1,2,3 — end exclusive). `\"a\" + 1 + 2` evaluates left-to-right: `(\"a\" + 1)` = `\"a1\"`, then `+ 2` = `\"a12\"`.",
        },
      },
      questions: [
        {
          id: "apcsa-u1-strings-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Java, the first character of a String has index ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1"
                    },
                    {
                              "id": "b",
                              "text": "0"
                    },
                    {
                              "id": "c",
                              "text": "length()"
                    },
                    {
                              "id": "d",
                              "text": "-1"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Zero-based index",
                              "statement": "First index is 0."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Java uses zero-based indexing — `charAt(0)` returns the first character.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Using 1-based indexing from other languages."
          ]
},
        },
        {
          id: "apcsa-u1-strings-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is `\"hello\".substring(1, 4)`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "\"hell\""
                    },
                    {
                              "id": "b",
                              "text": "\"ello\""
                    },
                    {
                              "id": "c",
                              "text": "\"ell\""
                    },
                    {
                              "id": "d",
                              "text": "\"el\""
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Substring bounds",
                              "statement": "Start inclusive, end exclusive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Indices 1, 2, 3 are included (end 4 excluded): `\"ell\"`.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "\"ell\"",
          "commonErrors": [
                    "Including the end index — substring excludes it."
          ]
},
        },
        {
          id: "apcsa-u1-strings-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the result of `\"a\" + 1 + 2`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "\"a3\""
                    },
                    {
                              "id": "b",
                              "text": "\"a12\""
                    },
                    {
                              "id": "c",
                              "text": "3"
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
                              "name": "Left-to-right evaluation",
                              "statement": "String concat happens before later adds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Left-to-right: `(\"a\" + 1)` = `\"a1\"`, then `+ 2` = `\"a12\"` — the String 'wins' early.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "\"a12\"",
          "commonErrors": [
                    "Expecting numeric addition — once a String is involved, + concatenates."
          ]
},
        },
        {
          id: "apcsa-u1-strings-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why `s.length() - 1` is the last valid index, and what `charAt(s.length())` does. Also explain String immutability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Index bounds",
                              "statement": "Valid indices 0 to length-1."
                    },
                    {
                              "kind": "definition",
                              "name": "Immutability",
                              "statement": "Methods return new Strings."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Indices run 0 through `length()-1` — `charAt(length())` is out of bounds and throws `StringIndexOutOfBoundsException`.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Strings are immutable: methods like `concat`, `substring`, `toUpperCase` return NEW strings; the original is unchanged — `s = s.toUpperCase()` reassigns rather than modifies.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "AP trap: assuming `s.toUpperCase()` changes s — it doesn't; you must assign the result.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Last index = length-1; charAt(length) throws; Strings immutable",
          "commonErrors": [
                    "Thinking toUpperCase modifies in place."
          ]
},
        },
      ],
    },
  ],
};
