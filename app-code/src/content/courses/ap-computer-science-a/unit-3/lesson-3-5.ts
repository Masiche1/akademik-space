import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "apcsa-u3-lesson-3-5",
  code: "3-5",
  title: "Sorting Algorithms",
  goal: "I CAN implement and analyze basic sorting algorithms.",
  standards: ["CSA-4.6"],
  vocabulary: [
    { term: "Selection sort", definition: "Find min, swap to front — O(n²)." },
    { term: "Insertion sort", definition: "Build sorted prefix — O(n²), fast on nearly-sorted." },
    { term: "Bubble sort", definition: "Swap adjacent out-of-order pairs — O(n²)." },
    { term: "Time complexity", definition: "How runtime scales with n." },
    { term: "In-place", definition: "Sorts without extra memory." },
    { term: "Stability", definition: "Equal elements keep relative order." },
  ],
  concepts: [
    {
      id: "apcsa-u3-sorting",
      title: "Sorting",
      skill: "Implement basic sorting algorithms and analyze efficiency.",
      lesson: {
        sections: [
          {
            heading: "Simple sorts",
            body: "**Selection sort**: find minimum, swap to front, repeat — O(n²) always. **Insertion sort**: build sorted prefix, insert each element — O(n²) worst but O(n) on nearly-sorted. **Bubble sort**: swap adjacent out-of-order pairs, bubble largest to end — O(n²), simple but slow.",
          },
          {
            heading: "Complexity matters",
            body: "All three are O(n²) — for n=1000 that's ~1,000,000 operations vs O(n log n) sorts like merge sort (~10,000). For small n or nearly-sorted data, simple sorts suffice; for large data, efficient sorts matter. AP exams test knowing WHEN each is appropriate.",
          },
        ],
        keyFormulas: [
          { name: "O(n²)", statement: "$n \\times n$ comparisons — quadratic growth" },
          { name: "Nearly-sorted", statement: "Insertion sort approaches O(n) on sorted input" },
        ],
        workedExample: {
          problem: "Sort {5,2,8,1} using selection sort. Trace.",
          solution: "Pass 1: min=1 at idx3, swap with idx0 → {1,2,8,5}. Pass 2: min=2 at idx1 (already), → {1,2,8,5}. Pass 3: min=5 at idx3, swap with idx2 → {1,2,5,8}. Sorted in 3 passes.",
        },
      },
      questions: [
        {
          id: "apcsa-u3-sorting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Selection sort works by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "swapping adjacent elements"
                    },
                    {
                              "id": "b",
                              "text": "finding minimum and swapping to front"
                    },
                    {
                              "id": "c",
                              "text": "inserting into sorted position"
                    },
                    {
                              "id": "d",
                              "text": "dividing and conquering"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Selection sort",
                              "statement": "Min to front each pass."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Selection sort finds the minimum unsorted element and swaps it to the front each pass — builds sorted prefix.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Min to front",
          "commonErrors": [
                    "Confusing with insertion sort."
          ]
},
        },
        {
          id: "apcsa-u3-sorting-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Insertion sort is most efficient when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "data is random"
                    },
                    {
                              "id": "b",
                              "text": "data is nearly sorted"
                    },
                    {
                              "id": "c",
                              "text": "data is reverse-sorted"
                    },
                    {
                              "id": "d",
                              "text": "data is large"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Nearly-sorted advantage",
                              "statement": "Few insertions needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Insertion sort is O(n) on nearly-sorted data — few elements need moving; O(n²) worst case on reverse-sorted.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Nearly sorted",
          "commonErrors": [
                    "Thinking all sorts have same efficiency."
          ]
},
        },
        {
          id: "apcsa-u3-sorting-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the time complexity of selection sort on n elements? Enter as O(?) — e.g., for O(n²) enter 2.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Exponent",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Comparisons count",
                              "statement": "$n + (n-1) + ... + 1 \\approx n^2/2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Selection sort does ~$n^2/2$ comparisons — O(n²).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 2 (for O(n²)).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Thinking it's O(n log n)."
          ]
},
        },
        {
          id: "apcsa-u3-sorting-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare selection sort and insertion sort — same complexity but different strengths. When prefer each?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Sort comparison",
                              "statement": "Same O(n²), different behavior."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Both O(n²) worst-case, but insertion sort is O(n) on nearly-sorted data (few shifts) while selection sort is always ~n²/2 comparisons; insertion sort is STABLE (preserves equal-element order), selection is not.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Prefer insertion for nearly-sorted or small data where stability matters; selection for simplicity when data is random — both teach the same complexity concept.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Neither is used in practice for large data — merge/quick sort (O(n log n)) dominate; these teach algorithmic thinking.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Insertion=nearly-sorted+stable; Selection=simple always-n²",
          "commonErrors": [
                    "Thinking they're interchangeable."
          ]
},
        },
      ],
    },
  ],
};
