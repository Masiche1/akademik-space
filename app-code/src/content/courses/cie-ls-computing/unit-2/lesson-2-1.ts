import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cils-c-u2-lesson-2-1",
  code: "2-1",
  title: "Stage 7 — Managing Data: Sorting and Searching",
  goal: "I CAN apply and evaluate sorting and searching algorithms on data collections.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 7: managing data", "Cambridge Lower Secondary Computing 0860 strand: Managing data"],
  stage: 7,
  vocabulary: [
    { term: "Sort", definition: "Arrange data in order — ascending or descending." },
    { term: "Search", definition: "Find whether/where an item exists in data." },
    { term: "Linear search", definition: "Check items one by one — O(n)." },
    { term: "Binary search", definition: "Halve sorted list each step — O(log n)." },
    { term: "Efficiency", definition: "How few steps/resources an algorithm needs." },
    { term: "Worst case", definition: "Maximum steps an algorithm might take." },
  ],
  concepts: [
    {
      id: "cils-c-u2-s1-sort",
      title: "Sorting and searching algorithms",
      skill: "Compare linear vs binary search and basic sorts at Stage 7 level.",
      lesson: {
        sections: [
          {
            heading: "Search efficiency",
            body: "Linear search checks each item — worst case n checks. Binary search on sorted data halves the list each step — ~log₂n checks. For 1 million items: linear ~1M, binary ~20. Sorting enables fast searching.",
          },
          {
            heading: "Sorting methods",
            body: "Bubble sort compares neighbours and swaps (simple, O(n²)). Selection sort finds minimum and swaps to front. Merge sort divides and merges (efficient O(n log n)). Choice depends on data size and existing order.",
          },
        ],
        keyFormulas: [
          { name: "Linear", statement: "O(n) — check each item" },
          { name: "Binary", statement: "O(log n) — halve sorted list" },
          { name: "Merge sort", statement: "O(n log n) — divide and conquer" },
        ],
        workedExample: {
          problem: "Find 42 in sorted list of 1024 items. Max checks for linear vs binary?",
          solution: "Linear: 1024 checks. Binary: log₂(1024)=10 checks. Binary is ~100× faster.",
        },
      },
      questions: [
        {
          id: "cils-c-u2-ss-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What must be true for binary search?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Data must be sorted"
                    },
                    {
                              "id": "b",
                              "text": "List must be small"
                    },
                    {
                              "id": "c",
                              "text": "Data must be numbers"
                    },
                    {
                              "id": "d",
                              "text": "No requirement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Binary search",
                              "statement": "Needs sorted data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Halving requires order to discard halves.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data must be sorted"
},
        },
        {
          id: "cils-c-u2-ss-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Compare linear and binary search in terms of steps needed.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Search efficiency",
                              "statement": "n vs log n."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear ~n checks worst case.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Binary ~log₂n — much fewer on big lists.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "n vs log₂n"
},
        },
        {
          id: "cils-c-u2-ss-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find 30 in [10,20,30,40,50] by binary search. Show each step.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Binary search",
                              "statement": "Middle-out halving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Middle=30 → found in 1 step.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If not: compare, discard half, repeat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Max ~log₂(5)≈3 checks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Found in 1 step"
},
        },
        {
          id: "cils-c-u2-ss-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sort, search, linear/binary search, efficiency, worst case. (b) When is linear better? (c) Find 7 in [3,5,7,9,11] both ways — count checks. (d) Why sort before binary? (e) What is bubble sort? (f) What is merge sort's advantage? (g) Compare O(n) vs O(n²) for 1000 items. (h) Design a search strategy for a phone book app.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Algorithms",
                              "statement": "Search/sort efficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Small/unsorted lists — simpler.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Linear 3 checks; binary ~2-3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Halving needs order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Compare neighbours, swap if out of order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) O(n log n) — fast on large data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) n=1000 vs n²=1M — huge difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid strategy design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Algorithm efficiency: linear vs binary, sort methods."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u2-ss-notes",
      title: "Sorting and searching — notes",
      summary: "Linear=O(n), binary=O(log n) needs sorted. Merge sort O(n log n) for large data.",
      sections: [
        { heading: "Key idea", body: "Algorithm choice depends on data size and order." },
        { heading: "Efficiency", body: "log₂n grows slowly — binary search scales well." },
      ],
    },
  ],
};
