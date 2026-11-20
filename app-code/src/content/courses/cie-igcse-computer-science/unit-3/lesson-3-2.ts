import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "ciecs-u3-lesson-3-2",
  code: "3-2",
  title: "Searching and Sorting Algorithms",
  goal: "I CAN explain and apply linear/binary search and bubble/merge sort algorithms.",
  standards: ["Cambridge IGCSE Computer Science 0478: algorithm design", "0478 section 7: searching/sorting"],
  
  vocabulary: [
    { term: "Linear search", definition: "Check each item sequentially — O(n)." },
    { term: "Binary search", definition: "Halve sorted list each step — O(log n)." },
    { term: "Bubble sort", definition: "Compare neighbours, swap if out of order — O(n²)." },
    { term: "Merge sort", definition: "Divide and conquer sorting — O(n log n)." },
    { term: "Efficiency", definition: "How few steps/resources algorithm needs." },
    { term: "Sorted", definition: "Data in ascending or descending order." },
  ],
  concepts: [
    {
      id: "ciecs-u3-s2-search",
      title: "Searching and sorting",
      skill: "Apply and evaluate search/sort algorithms at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Searching",
            body: "Linear search checks each item — worst case n checks, works on any data. Binary search on sorted data halves each step — ~log₂n checks. Binary needs sorted data; linear doesn't.",
          },
          {
            heading: "Sorting",
            body: "Bubble sort compares neighbours and swaps — simple but O(n²). Merge sort divides list, sorts halves, merges — O(n log n), efficient on large data. Choice depends on data size.",
          },
        ],
        keyFormulas: [
          { name: "Linear", statement: "O(n) — check each" },
          { name: "Binary", statement: "O(log n) — halve sorted" },
          { name: "Merge sort", statement: "O(n log n) — divide & conquer" },
        ],
        workedExample: {
          problem: "Find 30 in [10,20,30,40,50]. Linear vs binary — count checks.",
          solution: "Linear: 3 checks. Binary: middle=30 → 1 check. Binary faster on large lists.",
        },
      },
      questions: [
        {
          id: "ciecs-u3-ss-q1",
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
                              "reasoning": "Halving requires order.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data must be sorted"
},
        },
        {
          id: "ciecs-u3-ss-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Compare linear and binary search in terms of efficiency.",
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
                              "reasoning": "Linear ~n checks; binary ~log₂n.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Binary much faster on large lists.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "n vs log₂n"
},
        },
        {
          id: "ciecs-u3-ss-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find 70 in [10,20,30,40,50,60,70,80]. Show binary search steps.",
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
                              "reasoning": "Middle=40/50 → compare 70 → search upper half.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Continue halving until found.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "~log₂(8)=3 checks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Binary search steps shown"
},
        },
        {
          id: "ciecs-u3-ss-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define linear search, binary search, bubble sort, merge sort, efficiency, sorted. (b) When is linear better? (c) Find 15 in [5,10,15,20,25] both ways — count checks. (d) Why sort before binary? (e) What is bubble sort? (f) What is merge sort's advantage? (g) Compare O(n) vs O(n²) for 1000 items. (h) Design a search strategy for a library catalogue app.",
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
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Small/unsorted lists — simpler.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Linear 3 checks; binary ~2.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Halving needs order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Compare neighbours, swap if wrong.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) O(n log n) — fast on large data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) 1000 vs 1M — huge difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid search strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Algorithm efficiency: search and sort."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u3-ss-notes",
      title: "Search and sort — notes",
      summary: "Linear=O(n), binary=O(log n) needs sorted. Merge sort O(n log n) for large data.",
      sections: [
        { heading: "Key idea", body: "Algorithm choice depends on data size and order." },
        { heading: "Efficiency", body: "log₂n grows slowly — binary search scales well." },
      ],
    },
  ],
};
