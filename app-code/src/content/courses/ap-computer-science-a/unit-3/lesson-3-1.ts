import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apcsa-u3-lesson-3-1",
  code: "3-1",
  title: "Arrays",
  goal: "I CAN declare, initialize, and traverse arrays.",
  standards: ["CSA-4.1"],
  vocabulary: [
    { term: "Array", definition: "Fixed-size ordered collection of same-type elements." },
    { term: "Index", definition: "Zero-based position: 0 to length-1." },
    { term: "array.length", definition: "Number of elements (not method — no parentheses)." },
    { term: "Array declaration", definition: "int[] arr = new int[5]; or {1,2,3}." },
    { term: "ArrayIndexOutOfBounds", definition: "Error accessing index <0 or >=length." },
    { term: "Default values", definition: "0 for int, 0.0 for double, null for objects." },
  ],
  concepts: [
    {
      id: "apcsa-u3-arrays",
      title: "Arrays",
      skill: "Declare, initialize, and iterate over arrays correctly.",
      lesson: {
        sections: [
          {
            heading: "Array basics",
            body: "Arrays have FIXED size — declared once, can't grow. `int[] arr = new int[5]` creates 5 zeros; `int[] arr = {1,2,3}` initializes directly. Indices run 0 to `arr.length - 1` — `arr.length` is a FIELD (no parentheses, unlike String's `length()` method).",
          },
          {
            heading: "Traversal and bounds",
            body: "Access outside [0, length-1] throws `ArrayIndexOutOfBoundsException`. Iterate with `for (int i = 0; i < arr.length; i++)` or for-each `for (int x : arr)`. Default values: 0 for numeric, false for boolean, null for objects.",
          },
        ],
        keyFormulas: [
          { name: "Length", statement: "$\\text{arr.length}$ — field, not method" },
          { name: "Valid indices", statement: "$0 \\le i < \\text{arr.length}$" },
        ],
        workedExample: {
          problem: "What does `int[] a = new int[3]; a[3] = 5;` do?",
          solution: "Throws `ArrayIndexOutOfBoundsException` — valid indices are 0,1,2; index 3 is out of bounds for length-3 array.",
        },
      },
      questions: [
        {
          id: "apcsa-u3-arrays-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Valid indices for `int[] a = new int[5]` are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1-5"
                    },
                    {
                              "id": "b",
                              "text": "0-4"
                    },
                    {
                              "id": "c",
                              "text": "0-5"
                    },
                    {
                              "id": "d",
                              "text": "1-4"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Zero-based indices",
                              "statement": "0 to length-1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Length 5 → indices 0,1,2,3,4 — index 5 is out of bounds.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0-4",
          "commonErrors": [
                    "Using 1-based indexing."
          ]
},
        },
        {
          id: "apcsa-u3-arrays-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the default value of elements in `int[] a = new int[4]`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "null"
                    },
                    {
                              "id": "b",
                              "text": "0"
                    },
                    {
                              "id": "c",
                              "text": "undefined"
                    },
                    {
                              "id": "d",
                              "text": "random"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Default values",
                              "statement": "0 for int."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Java initializes numeric arrays to 0, boolean to false, objects to null — `a` is {0,0,0,0}.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Thinking uninitialized means undefined."
          ]
},
        },
        {
          id: "apcsa-u3-arrays-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does `int[] a = {1,2,3}; int s = a[0] + a[2];` give for s?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "s",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Index access",
                              "statement": "$a[0]=1, a[2]=3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$a[0] + a[2] = 1 + 3 = 4$.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "s = 4.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "4",
          "commonErrors": [
                    "Index confusion — a[2] is third element = 3."
          ]
},
        },
        {
          id: "apcsa-u3-arrays-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why `arr.length` has no parentheses but `s.length()` does, and what error occurs accessing `arr[arr.length]`.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "length vs length()",
                              "statement": "Field vs method."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`arr.length` is a public FIELD (data member) — accessed without parentheses; `s.length()` is a METHOD on String — requires ().",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "`arr[arr.length]` accesses index `length` — one past the last valid index (length-1) → `ArrayIndexOutOfBoundsException`.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP exams test this distinction — fields vs methods is a common trap.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "length=field, length()=method; arr[length] throws",
          "commonErrors": [
                    "Adding () to arr.length or forgetting them on s.length()."
          ]
},
        },
      ],
    },
  ],
};
