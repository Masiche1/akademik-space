import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apcsa-u3-lesson-3-2",
  code: "3-2",
  title: "ArrayList",
  goal: "I CAN use ArrayList for dynamic collections.",
  standards: ["CSA-4.4"],
  vocabulary: [
    { term: "ArrayList", definition: "Dynamic-size ordered collection." },
    { term: "Generics", definition: "ArrayList<Integer> — typed elements." },
    { term: "add", definition: "Appends element (or inserts at index)." },
    { term: "get", definition: "Retrieves element at index." },
    { term: "size", definition: "Number of elements — method, has ()." },
    { term: "remove", definition: "Removes by index or object." },
  ],
  concepts: [
    {
      id: "apcsa-u3-arraylist",
      title: "ArrayList",
      skill: "Use ArrayList methods for dynamic collections.",
      lesson: {
        sections: [
          {
            heading: "ArrayList vs array",
            body: "ArrayList grows dynamically — `add()` appends, `size()` returns count (METHOD — parentheses!), `get(i)` retrieves, `set(i, x)` replaces, `remove(i)` deletes. Unlike arrays, no fixed size and `size()` is a method call.",
          },
          {
            heading: "Generics and methods",
            body: "`ArrayList<Integer> list = new ArrayList<>()` — diamond operator infers type. Methods: `add(x)` appends, `add(i, x)` inserts at index, `get(i)` retrieves (throws if out of bounds), `remove(i)` removes and shifts left. `contains`, `indexOf` search.",
          },
        ],
        keyFormulas: [
          { name: "size", statement: "$\\text{list.size()}()$ — method, has parentheses" },
          { name: "get", statement: "$\\text{list.get}(i)$ — element at index i" },
        ],
        workedExample: {
          problem: "What does `list.add(5); list.add(0, 3);` produce for `ArrayList<Integer> list`?",
          solution: "`add(5)` appends → {5}; `add(0, 3)` inserts 3 at index 0 → {3, 5}. List now has 3 first, 5 second.",
        },
      },
      questions: [
        {
          id: "apcsa-u3-arraylist-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Unlike arrays, ArrayList ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "has fixed size"
                    },
                    {
                              "id": "b",
                              "text": "grows dynamically"
                    },
                    {
                              "id": "c",
                              "text": "can't store objects"
                    },
                    {
                              "id": "d",
                              "text": "uses 1-based indexing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Dynamic size",
                              "statement": "Grows/shrinks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ArrayList grows dynamically via `add()` — no fixed capacity like arrays.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Dynamic size",
          "commonErrors": [
                    "Thinking ArrayList is fixed-size."
          ]
},
        },
        {
          id: "apcsa-u3-arraylist-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does `list.size()` return vs `list.length`?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Both work the same"
                    },
                    {
                              "id": "b",
                              "text": "size() is method; length doesn't exist for ArrayList"
                    },
                    {
                              "id": "c",
                              "text": "length is faster"
                    },
                    {
                              "id": "d",
                              "text": "size() returns capacity"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Method vs field",
                              "statement": "size() method; no length field."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ArrayList uses `size()` METHOD (with parentheses); `length` field doesn't exist — arrays use `length` field, ArrayList uses `size()` method.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "size() method; no length field",
          "commonErrors": [
                    "Confusing array length with ArrayList size."
          ]
},
        },
        {
          id: "apcsa-u3-arraylist-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "For `ArrayList<Integer> l = new ArrayList<>(); l.add(10); l.add(20); l.add(0, 5);`, what is `l.get(1)`?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Value",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Trace adds",
                              "statement": "{10,20} → insert 5 at 0 → {5,10,20}."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "After adds: {5, 10, 20}; `get(1)` = 10.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 10.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Forgetting add(0,5) shifts indices."
          ]
},
        },
        {
          id: "apcsa-u3-arraylist-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between `list.add(x)` and `list.add(i, x)`, and when you'd use each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "add variants",
                              "statement": "Append vs insert."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`add(x)` appends x at the END; `add(i, x)` INSERTS x at index i, shifting existing elements right — different positions and behaviors.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Use `add(x)` for building lists sequentially; `add(i, x)` for inserting at specific positions (e.g., maintaining sorted order).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Careful: `add(i, x)` throws IndexOutOfBounds if i > size() — valid indices are 0 to size().",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "add(x)=append end; add(i,x)=insert at index",
          "commonErrors": [
                    "Confusing append with insert."
          ]
},
        },
      ],
    },
  ],
};
