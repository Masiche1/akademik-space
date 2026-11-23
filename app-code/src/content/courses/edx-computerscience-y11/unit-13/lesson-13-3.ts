import type { Lesson } from "../../../types.ts";

export const lesson133: Lesson = {
  id: "ecs11-u13-lesson-13-3",
  code: "13-3",
  title: "Searching, Sorting and Efficiency",
  goal: "I CAN compare linear and binary search, describe sorting algorithms and explain efficiency using Big-O ideas.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Algorithms: searching, sorting and efficiency"],
  
  vocabulary: [
    { term: "Linear search", definition: "Checking each item in turn until the target is found or the list ends." },
    { term: "Binary search", definition: "Repeatedly halving a sorted list to locate a target." },
    { term: "Bubble sort", definition: "Repeatedly swapping adjacent out-of-order items until sorted." },
    { term: "Merge sort", definition: "Dividing a list in half, sorting each half, then merging." },
    { term: "Efficiency", definition: "How much time and resources an algorithm needs as input grows." },
    { term: "Big-O notation", definition: "A way of describing how an algorithm's cost grows with input size." },
    { term: "Worst case", definition: "The largest number of steps an algorithm may need." },
  ],
  concepts: [
    {
      id: "ecs11-u13-searching",
      title: "Linear and binary search",
      skill: "Compare linear and binary search and trace binary search on sorted data.",
      lesson: {
        sections: [
          {
            heading: "Linear search",
            body: "Linear search checks each item in order until it finds the target or reaches the end. It works on any list — sorted or not. Worst case: n comparisons for n items (target last or absent). Average case: about n/2.\n\nSimple to implement and fine for small lists, but slow for large data.",
          },
          {
            heading: "Binary search",
            body: "Binary search requires a sorted list. It compares the target with the middle item: if equal, done; if target is smaller, search the lower half; if larger, search the upper half. Each step halves the remaining items.\n\nWorst case is about log2(n) comparisons — for 1,000,000 items roughly 20 comparisons instead of 1,000,000. The trade-off: the list must be sorted first, and the halving logic is more complex.",
          },
        ],
        keyFormulas: [
          { name: "Linear search", statement: "Worst case n comparisons; works on any list" },
          { name: "Binary search", statement: "Worst case ~log2(n); requires sorted data" },
        ],
        workedExample: {
          problem: "Find 23 in the sorted list [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] using binary search.",
          solution: "Middle (position 5) = 16 < 23, search right half. Middle of [23,38,56,72,91] region = 56 > 23, search left. Middle = 23 — found in 3 comparisons.",
        },
      },
      questions: [
        {
          id: "ecs11-u13-search-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is linear search?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Searching only the middle of a list"
                    },
                    {
                              "id": "b",
                              "text": "Checking each item in turn until the target is found or the list ends"
                    },
                    {
                              "id": "c",
                              "text": "Sorting items before searching"
                    },
                    {
                              "id": "d",
                              "text": "A type of encryption"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Linear search",
                              "statement": "Item-by-item scan."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear search checks items one at a time in order.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Checking each item in turn until found or list ends"
},
        },
        {
          id: "ecs11-u13-search-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe the steps of binary search.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Binary search",
                              "statement": "Compare middle, discard half."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The list must be sorted first.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Compare the target with the middle item of the remaining range.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "If equal, stop; if smaller, keep the lower half; if larger, keep the upper half; repeat.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Sorted list → compare middle → discard half → repeat."
},
        },
        {
          id: "ecs11-u13-search-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why does binary search require the list to be sorted? Explain what would go wrong otherwise.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Binary search precondition",
                              "statement": "Halving only works on ordered data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Binary search discards half the list based on the middle item's value.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "This logic assumes all items in the lower half are smaller and all in the upper half larger.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "On an unsorted list the target could be in the discarded half — the search would fail or give wrong results.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Sorting must happen first, adding a cost that must be weighed against search savings.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Halving assumes order; unsorted data could hide the target in the discarded half."
},
        },
        {
          id: "ecs11-u13-search-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A library catalogue has 500,000 books.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare linear and binary search for finding one book in this catalogue.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain when linear search would still be the better choice.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Search choice",
                              "statement": "Binary for large sorted data; linear for small or unsorted."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Binary search needs ~log2(500000) ≈ 19 comparisons after sorting; linear needs up to 500,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Binary is far faster for this size if the catalogue can be kept sorted.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Linear is better for small lists where sorting overhead exceeds search savings.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is better when the list cannot be sorted or changes too often to maintain order.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "It is simpler to implement and has no precondition.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "(a) binary ~19 vs linear up to 500k comparisons (b) linear for small/unsorted/volatile lists"
},
        },
        {
          id: "ecs11-u13-search-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Binary search is used to find 29 in the sorted list [3, 7, 12, 18, 22, 29, 31, 40].",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Binary search trace",
                              "statement": "Mid = floor((low+high)/2); discard half."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "low=1, high=8, mid=4 → value 18 < 29, so low becomes 5.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "low=5, high=8, mid=6 → value 29 equals target — found.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "29 was found in 2 comparisons; linear search could need up to 8.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "If the target were absent, the range would shrink until low > high.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Each step halves the remaining range, giving logarithmic growth.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "For n items the worst case is about log2(n) comparisons.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Found at position 6 after 2 comparisons (18<29 then 29)."
},
        },
        {
          id: "ecs11-u13-search-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company must search a sorted customer database of 1,000,000 records many times per second.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the binary search procedure for this database.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Estimate the worst-case number of comparisons binary search needs for 1,000,000 records, showing your reasoning.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Explain why the database being sorted is essential and what happens if new records arrive unsorted.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Search at scale",
                              "statement": "Logarithmic comparisons need ordered data."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Set low to first record and high to last.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Compare target with the middle record; discard the half that cannot contain it.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Repeat until found or low exceeds high.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each comparison halves the search range.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "log2(1,000,000) is about 20 (2^20 ≈ 1,048,576).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "So roughly 20 comparisons worst case versus up to 1,000,000 linearly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "This makes many searches per second feasible.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sorting is essential because binary search discards halves assuming order.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Unsorted arrivals must be inserted in the correct position to maintain order.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Otherwise searches could miss records entirely.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) halve range each step (b) ~log2(10^6) ≈ 20 comparisons (c) order required; insert new records in position"
},
        },
      ],
    },
    {
      id: "ecs11-u13-sorting-efficiency",
      title: "Sorting algorithms and efficiency",
      skill: "Describe bubble sort and merge sort, compare their efficiency and explain Big-O growth.",
      lesson: {
        sections: [
          {
            heading: "Sorting algorithms",
            body: "Bubble sort compares adjacent pairs and swaps them if out of order, repeating passes until no swaps occur. It is simple and uses little extra memory, but slow — worst case n(n-1)/2 comparisons.\n\nMerge sort divides the list into halves, sorts each half recursively, then merges them in order. It is much faster — about n log2(n) comparisons — but needs extra space for merging and is harder to implement.",
          },
          {
            heading: "Efficiency and Big-O",
            body: "Efficiency measures how an algorithm's cost grows with input size n. Big-O notation describes the growth class: O(n) grows linearly, O(n log n) slightly faster than quadratic, O(n^2) grows fast.\n\nFor bubble sort, doubling n roughly quadruples the work. For merge sort it only slightly more than doubles. Choosing the right algorithm matters most for large inputs — a slow algorithm on small data is harmless.",
          },
        ],
        keyFormulas: [
          { name: "Bubble sort", statement: "Adjacent swaps per pass; worst case n(n-1)/2 comparisons" },
          { name: "Merge sort", statement: "Divide, sort halves, merge; ~n log2(n) comparisons" },
          { name: "Big-O", statement: "Describes growth: O(n), O(n log n), O(n^2)" },
        ],
        workedExample: {
          problem: "Bubble-sort one pass of [5, 2, 8, 1]. What is the array afterwards?",
          solution: "Compare 5,2 → swap → [2,5,8,1]; compare 5,8 → ok; compare 8,1 → swap → [2,5,1,8]. After one pass: [2,5,1,8].",
        },
      },
      questions: [
        {
          id: "ecs11-u13-sort-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does bubble sort do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Divides the list in half and merges sorted halves"
                    },
                    {
                              "id": "b",
                              "text": "Repeatedly swaps adjacent out-of-order items until sorted"
                    },
                    {
                              "id": "c",
                              "text": "Checks each item against every other item"
                    },
                    {
                              "id": "d",
                              "text": "Randomly shuffles items into order"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bubble sort",
                              "statement": "Adjacent-swap passes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bubble sort swaps adjacent out-of-order pairs over repeated passes.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Repeatedly swaps adjacent out-of-order items"
},
        },
        {
          id: "ecs11-u13-sort-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe one pass of bubble sort on [4, 1, 3].",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Bubble sort pass",
                              "statement": "Compare adjacent, swap if needed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare 4 and 1: out of order, swap → [1, 4, 3].",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Compare 4 and 3: out of order, swap → [1, 3, 4].",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "End of pass: [1, 3, 4] — the largest item (4) bubbled to the end.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "[4,1,3] → swap 4,1 → swap 4,3 → [1,3,4]"
},
        },
        {
          id: "ecs11-u13-sort-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how merge sort works on the list [8, 3, 9, 1].",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Merge sort",
                              "statement": "Divide, sort, merge."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Split into halves: [8, 3] and [9, 1].",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Sort each half recursively: [3, 8] and [1, 9].",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Merge by comparing heads: take 1, then 3, then 8, then 9.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Result: [1, 3, 8, 9].",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Split [8,3]|[9,1] → sort to [3,8],[1,9] → merge to [1,3,8,9]"
},
        },
        {
          id: "ecs11-u13-sort-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Bubble sort is applied to [5, 2, 8, 1].",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the array after the first complete pass.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why bubble sort becomes inefficient for large lists.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Bubble sort analysis",
                              "statement": "One pass places largest at end; cost grows quadratically."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pass 1: swap 5,2 → [2,5,8,1]; 5,8 ok; swap 8,1 → [2,5,1,8].",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "After first pass: [2, 5, 1, 8].",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Worst case needs n(n-1)/2 comparisons — for 100 items that is 4,950.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cost grows roughly with n squared, so doubling n quadruples the work.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Merge sort's n log n growth is far cheaper at large sizes.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) [2,5,1,8] (b) O(n^2) growth — thousands of comparisons for large n"
},
        },
        {
          id: "ecs11-u13-sort-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "In the worst case, bubble sort on n items needs n(n-1)/2 comparisons. Calculate the worst-case comparisons for n = 100 items.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "comparisons",
                              "answer": 4950
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Bubble sort worst case",
                              "statement": "n(n-1)/2 comparisons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute n = 100 into n(n-1)/2.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "100 * 99 = 9,900.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "9,900 / 2 = 4,950 comparisons.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This shows why bubble sort is impractical for large datasets.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Answer checked: 100*99/2 = 4,950.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "For contrast, merge sort needs roughly n log2(n) ≈ 664 comparisons.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "4,950 comparisons"
},
        },
        {
          id: "ecs11-u13-sort-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school must sort exam results for 5,000 students before analysis.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why sorting is often needed before searching a list.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe how merge sort would sort the results and why it suits 5,000 items.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Compare the efficiency of bubble sort and merge sort using Big-O growth, and recommend one.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sorting for search",
                              "statement": "Order enables fast search; algorithm choice depends on scale."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Binary search only works on sorted data.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sorted data also makes range queries and reporting easier.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sorting once enables many fast searches afterwards.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Split the 5,000 results in half recursively until single items remain.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Sort each half and merge them back in order.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "n log n growth keeps it fast at 5,000 items; extra space is acceptable.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bubble sort is O(n^2) — about 12.5 million comparisons worst case for 5,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Merge sort is O(n log n) — roughly 5,000 × 12 ≈ 60,000 comparisons.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Big-O describes how cost grows with n, not exact times.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "c",
                              "reasoning": "Recommend merge sort — vastly fewer comparisons at this scale.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) sorted data enables binary search (b) divide-sort-merge suits large n (c) O(n^2) vs O(n log n) — choose merge sort"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs11-u13-efficiency-notes",
      title: "Searching, Sorting and Efficiency — notes",
      summary: "Linear works anywhere but scans all; binary halves a sorted list; merge sort scales better than bubble sort.",
      sections: [
        { heading: "Search", body: "Linear = n worst case, any list. Binary = ~log2(n), sorted only." },
        { heading: "Sort", body: "Bubble = simple, O(n^2). Merge = divide-and-conquer, O(n log n), needs space." },
        { heading: "Efficiency", body: "Big-O describes growth with n — choose algorithms by input size, not just correctness." },
      ],
    },
  ],
};
