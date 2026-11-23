import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "apcsa-u2-lesson-2-6",
  code: "2-6",
  title: "String Methods and Loops",
  goal: "I CAN manipulate strings with methods and loops.",
  standards: ["CSA-2.8", "CSA-3.10"],
  vocabulary: [
    { term: "String methods", definition: "length, charAt, substring, indexOf, equals." },
    { term: "equals vs ==", definition: "equals() compares content; == compares references." },
    { term: "indexOf", definition: "Finds first occurrence of substring/char." },
    { term: "String comparison", definition: "compareTo for ordering." },
    { term: "Loop over string", definition: "for loop with charAt(i)." },
    { term: "StringBuilder", definition: "Mutable alternative for many concatenations." },
  ],
  concepts: [
    {
      id: "apcsa-u2-string-methods",
      title: "String methods",
      skill: "Use String methods for searching, comparing, and manipulation.",
      lesson: {
        sections: [
          {
            heading: "Key methods",
            body: "`equals()` compares CONTENT (strings are objects — `==` compares references, often wrong); `indexOf()` finds first occurrence (-1 if absent); `substring(start,end)` extracts; `charAt(i)` gets character; `length()` gives count. `compareTo()` returns negative/zero/positive for ordering.",
          },
          {
            heading: "Looping over strings",
            body: "Strings aren't arrays but support `charAt(i)` in a for loop: `for (int i = 0; i < s.length(); i++) { char c = s.charAt(i); }` — iterate indices 0 to length-1. For building strings in loops, `StringBuilder` is more efficient than repeated `+`.",
          },
        ],
        keyFormulas: [
          { name: "equals", statement: "$s.\\text{equals}(t)$ — content comparison, not reference" },
          { name: "indexOf", statement: "$s.\\text{indexOf}(t)$ — first index or -1" },
        ],
        workedExample: {
          problem: "Why does `\"hi\" == \"hi\"` sometimes return false while `\"hi\".equals(\"hi\")` is always true?",
          solution: "`==` compares object REFERENCES (memory addresses), not content — two different String objects with same content may have different addresses. `equals()` compares character-by-character content — always correct for value comparison.",
        },
      },
      questions: [
        {
          id: "apcsa-u2-string-methods-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To compare String content in Java, use ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "=="
                    },
                    {
                              "id": "b",
                              "text": ".equals()"
                    },
                    {
                              "id": "c",
                              "text": "= "
                    },
                    {
                              "id": "d",
                              "text": ".compare()"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "equals vs ==",
                              "statement": "Content vs reference."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`.equals()` compares content character-by-character; `==` compares object references — use equals for Strings.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": ".equals()",
          "commonErrors": [
                    "Using == for String comparison."
          ]
},
        },
        {
          id: "apcsa-u2-string-methods-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does `\"hello\".indexOf(\"ll\")` return?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2"
                    },
                    {
                              "id": "b",
                              "text": "3"
                    },
                    {
                              "id": "c",
                              "text": "-1"
                    },
                    {
                              "id": "d",
                              "text": "5"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "indexOf",
                              "statement": "First occurrence index."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`\"ll\"` first occurs at index 2 (h-e-l-l-o: positions 0,1,2...).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Off-by-one — index starts at 0."
          ]
},
        },
        {
          id: "apcsa-u2-string-methods-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does `\"abc\".compareTo(\"abd\")` return — negative, zero, or positive? Enter -1, 0, or 1.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sign",
                              "answer": -1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Lexicographic compare",
                              "statement": "First difference decides."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare char-by-char: 'a'='a', 'b'='b', 'c'<'d' → first string is less → negative (-1).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Result: -1.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "-1",
          "commonErrors": [
                    "Thinking compareTo returns length difference."
          ]
},
        },
        {
          id: "apcsa-u2-string-methods-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why `StringBuilder` is preferred over `+` concatenation in loops, and when it matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "String immutability",
                              "statement": "Each + creates new object."
                    },
                    {
                              "kind": "skill",
                              "name": "Efficiency awareness",
                              "statement": "When performance matters."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strings are immutable — `s += x` in a loop creates a NEW String object each iteration, copying all previous content: O(n²) time for n concatenations.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "`StringBuilder` is mutable — `append()` modifies in place, O(1) per append: O(n) total — dramatically faster for many concatenations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "For a few concatenations, `+` is fine; for loops building large strings, StringBuilder is essential — AP exams test this awareness.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "StringBuilder avoids O(n²) copying in loops",
          "commonErrors": [
                    "Using + concatenation in loops without concern."
          ]
},
        },
      ],
    },
  ],
};
