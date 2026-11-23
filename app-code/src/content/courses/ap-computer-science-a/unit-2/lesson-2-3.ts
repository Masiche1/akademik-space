import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "apcsa-u2-lesson-2-3",
  code: "2-3",
  title: "For Loops",
  goal: "I CAN write for loops and understand their three parts.",
  standards: ["CSA-3.7"],
  vocabulary: [
    { term: "for loop", definition: "Compact loop with init, condition, update." },
    { term: "Init", definition: "Runs once before loop — declares/initializes variable." },
    { term: "Condition", definition: "Checked before each iteration." },
    { term: "Update", definition: "Runs after each iteration." },
    { term: "For-each", definition: "Iterates over array/collection elements." },
    { term: "Nested loops", definition: "Loop inside loop — inner runs fully per outer iteration." },
  ],
  concepts: [
    {
      id: "apcsa-u2-for-loops",
      title: "For loops",
      skill: "Write for loops with correct init-condition-update structure.",
      lesson: {
        sections: [
          {
            heading: "For loop anatomy",
            body: "`for (init; condition; update) { body }` — init runs once, condition checked before each iteration, update runs after each body execution. Equivalent to a while loop but keeps loop control in one place — preferred for counted iterations.",
          },
          {
            heading: "For-each loops",
            body: "`for (String s : list)` iterates elements directly — cleaner for arrays/collections when you don't need the index. Can't modify the collection structure during iteration, and no index access — use indexed for when you need position.",
          },
        ],
        keyFormulas: [
          { name: "For", statement: "init once → check condition → body → update → repeat" },
          { name: "For-each", statement: "Iterates elements directly — no index needed" },
        ],
        workedExample: {
          problem: "What does `for (int i = 0; i < 3; i++) System.out.print(i);` output?",
          solution: "Prints 0 1 2 — init i=0; check i<3 → print i, i++ → repeat until i=3 exits. Three iterations.",
        },
      },
      questions: [
        {
          id: "apcsa-u2-for-loops-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The three parts of a for loop are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "start, middle, end"
                    },
                    {
                              "id": "b",
                              "text": "init, condition, update"
                    },
                    {
                              "id": "c",
                              "text": "begin, check, finish"
                    },
                    {
                              "id": "d",
                              "text": "declare, loop, exit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "For anatomy",
                              "statement": "init; condition; update."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "`for (init; condition; update)` — init once, condition pre-test, update post-body.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "init, condition, update",
          "commonErrors": [
                    "Mixing up the order — update runs AFTER body."
          ]
},
        },
        {
          id: "apcsa-u2-for-loops-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does `for (int i = 2; i <= 6; i += 2)` iterate over?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "2,3,4,5,6"
                    },
                    {
                              "id": "b",
                              "text": "2,4,6"
                    },
                    {
                              "id": "c",
                              "text": "2,4,6,8"
                    },
                    {
                              "id": "d",
                              "text": "0,2,4,6"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Trace update",
                              "statement": "i += 2 steps by 2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "i starts 2, += 2 each time: 2, 4, 6 — next would be 8 > 6, exits. Iterates {2,4,6}.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "{2,4,6}",
          "commonErrors": [
                    "Thinking += means +1."
          ]
},
        },
        {
          id: "apcsa-u2-for-loops-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate `int count = 0; for (int i = 0; i < 5; i++) count++;`. What is count?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "count",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count iterations",
                              "statement": "5 iterations, count++ each."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Loop runs for i = 0,1,2,3,4 — five iterations; `count` increments each → 5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 5.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Off-by-one — i<5 gives exactly 5 iterations."
          ]
},
        },
        {
          id: "apcsa-u2-for-loops-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain when to use a for-each loop vs an indexed for loop, with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "For-each vs indexed",
                              "statement": "Elements vs positions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For-each (`for (String s : list)`) when you need each element and don't need the index — cleaner, can't modify structure; indexed for when you need position (e.g., `arr[i-1]` access) or modify elements by index.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "For-each can't access neighbors or indices — if you need `arr[i]` and `arr[i+1]` together, use indexed; for-each gives you the element, not its position.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AP preference: for-each for simple iteration, indexed when position matters.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "For-each for elements, indexed for positions",
          "commonErrors": [
                    "Using indexed loop when for-each is cleaner."
          ]
},
        },
      ],
    },
  ],
};
