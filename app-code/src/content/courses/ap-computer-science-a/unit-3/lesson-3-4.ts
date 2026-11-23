import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "apcsa-u3-lesson-3-4",
  code: "3-4",
  title: "Searching Algorithms",
  goal: "I CAN implement linear and binary search.",
  standards: ["CSA-4.5"],
  vocabulary: [
    { term: "Linear search", definition: "Check each element in order — O(n)." },
    { term: "Binary search", definition: "Halve sorted array each step — O(log n)." },
    { term: "Sorted requirement", definition: "Binary search needs sorted data." },
    { term: "Midpoint", definition: "(low + high) / 2 — index to check." },
    { term: "Time complexity", definition: "How runtime grows with input size." },
    { term: "Best/worst case", definition: "Fastest/slowest scenario for an algorithm." },
  ],
  concepts: [
    {
      id: "apcsa-u3-searching",
      title: "Searching",
      skill: "Implement linear and binary search algorithms.",
      lesson: {
        sections: [
          {
            heading: "Linear search",
            body: "Check each element sequentially until found — works on ANY array (sorted or not), O(n) time. Simple but slow for large data. Returns index or -1 if absent.",
          },
          {
            heading: "Binary search",
            body: "Requires SORTED array. Compare target to MIDDLE element: if equal, found; if target smaller, search left half; if larger, search right half. Each step halves the search space — O(log n), exponentially faster for large arrays. Implementation uses low/high pointers and a while loop.",
          },
        ],
        keyFormulas: [
          { name: "Binary mid", statement: "$\\text{mid} = (\\text{low} + \\text{high}) / 2$" },
          { name: "Complexity", statement: "Linear $O(n)$; Binary $O(\\log n)$ — needs sorted" },
        ],
        workedExample: {
          problem: "Find 7 in {1,3,5,7,9,11} using binary search. Trace.",
          solution: "low=0, high=5, mid=2 → a[2]=5 < 7, search right: low=3. mid=(3+5)/2=4 → a[4]=9 > 7, search left: high=3. mid=3 → a[3]=7 = target. Found at index 3 in 3 steps.",
        },
      },
      questions: [
        {
          id: "apcsa-u3-searching-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Binary search requires the array to be ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any order"
                    },
                    {
                              "id": "b",
                              "text": "sorted"
                    },
                    {
                              "id": "c",
                              "text": "even length"
                    },
                    {
                              "id": "d",
                              "text": "small"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sorted requirement",
                              "statement": "Binary needs order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Binary search relies on ordering to eliminate halves — unsorted data breaks the logic.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sorted",
          "commonErrors": [
                    "Applying binary search to unsorted arrays."
          ]
},
        },
        {
          id: "apcsa-u3-searching-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Binary search on n elements takes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "O(n)"
                    },
                    {
                              "id": "b",
                              "text": "O(log n)"
                    },
                    {
                              "id": "c",
                              "text": "O(n²)"
                    },
                    {
                              "id": "d",
                              "text": "O(1)"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Halving",
                              "statement": "Each step halves search space."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each comparison eliminates half — log₂(n) comparisons max; vastly faster than linear's n.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "O(log n)",
          "commonErrors": [
                    "Confusing with linear search complexity."
          ]
},
        },
        {
          id: "apcsa-u3-searching-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many comparisons does binary search need worst-case on 1024 elements? (log₂1024)",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Comparisons",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Halving count",
                              "statement": "$2^{10} = 1024$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\log_2 1024 = 10$ — each step halves; 10 comparisons max.",
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
                    "Using n instead of log n."
          ]
},
        },
        {
          id: "apcsa-u3-searching-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why binary search is faster than linear search, and when you'd still choose linear.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Halving vs sequential",
                              "statement": "Exponential vs linear reduction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Binary search halves the search space each step — O(log n) vs linear's O(n); for 1 million elements, ~20 vs ~500,000 comparisons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Choose linear when: array unsorted (binary requires sorted), array small (overhead not worth it), or you need EVERY occurrence (binary finds one).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Trade-off: binary needs sorted data — sorting costs O(n log n), so for one-time search on small arrays, linear may be simpler.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Binary=O(log n) needs sorted; linear=O(n) works anywhere",
          "commonErrors": [
                    "Using binary search on unsorted data."
          ]
},
        },
      ],
    },
  ],
};
