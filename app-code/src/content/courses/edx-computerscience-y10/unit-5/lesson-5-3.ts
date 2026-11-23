import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ecs10-u5-lesson-5-3",
  code: "5-3",
  title: "Searching and Sorting Arrays",
  goal: "I CAN perform linear searches and simple sorts on arrays and explain their steps and efficiency.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — programming", "4CP1 array algorithms: linear search and sorting"],
  
  vocabulary: [
    { term: "Linear search", definition: "A search that checks each element in order until the target is found or the array ends." },
    { term: "Target value", definition: "The value being searched for." },
    { term: "Found flag", definition: "A Boolean variable used to stop searching once the target is found." },
    { term: "Bubble sort", definition: "A sorting algorithm that repeatedly compares neighbouring elements and swaps them if needed." },
    { term: "Pass", definition: "One complete traversal of the array during a sorting algorithm." },
    { term: "Sorted order", definition: "Elements arranged from smallest to largest or largest to smallest." },
  ],
  concepts: [
    {
      id: "ecs10-u5-linear-search",
      title: "Linear search",
      skill: "Implement a linear search with a found flag and state its worst-case comparisons.",
      lesson: {
        sections: [
          {
            heading: "How linear search works",
            body: "A **linear search** starts at the first element and checks each value in order. If the value equals the target, store the index and stop. If the loop finishes without a match, the target is not present.\n\nA `found` flag or an early exit prevents unnecessary comparisons. Pseudocode often uses `found ← FALSE`, then sets it TRUE when a match is found.",
          },
          {
            heading: "Comparisons and efficiency",
            body: "For an array of length n, linear search may need up to n comparisons in the worst case, when the target is last or absent. On average it checks about half the elements for random data.\n\nLinear search is simple and works on any order, but it becomes slow for very large arrays. Sorting plus binary search is faster for repeated searches, though binary search is beyond this lesson's scope.",
          },
        ],
        keyFormulas: [
          { name: "Worst-case comparisons", statement: "n comparisons for length n" },
          { name: "Found flag", statement: "found ← FALSE; set TRUE when array[i] = target" },
          { name: "Early exit", statement: "stop searching once found = TRUE" },
        ],
        workedExample: {
          problem: "Search for 7 in [3, 8, 5, 7, 2]. How many comparisons are needed?",
          solution: "Compare 3, 8, 5 then 7; 7 is found at index 3 after 4 comparisons.",
        },
      },
      questions: [
        {
          id: "ecs10-u5-linear-search-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step of a linear search?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sort the array"
                    },
                    {
                              "id": "b",
                              "text": "Check the first element"
                    },
                    {
                              "id": "c",
                              "text": "Check the last element"
                    },
                    {
                              "id": "d",
                              "text": "Calculate the average"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Linear search",
                              "statement": "Checks elements in order from first to last."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear search begins at index 0 and moves forward.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) Check the first element"
},
        },
        {
          id: "ecs10-u5-linear-search-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Search for 6 in [2, 4, 6, 8]. State the index where it is found using zero-based indexing.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "index",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Linear search",
                              "statement": "Compare each element until target is found."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2≠6, 4≠6, 6=6 at position 3.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Zero-based index = 2.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ecs10-u5-linear-search-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write pseudocode for a linear search that stores the index in position when the target is found.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Linear search algorithm",
                              "statement": "Loop, compare, store index and stop when found."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "found ← FALSE; position ← -1; FOR i ← 0 TO length - 1.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "IF array[i] = target THEN position ← i; found ← TRUE; EXIT LOOP ENDIF.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "After loop, if found = FALSE the target is absent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "found/position variables; loop compares array[i] to target and exits on match"
},
        },
        {
          id: "ecs10-u5-linear-search-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A linear search is run on an array of 20 elements.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the maximum number of comparisons in the worst case.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain when the worst case occurs.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Linear search cost",
                              "statement": "Cost grows with array length."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Worst case = 20 comparisons.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It occurs when the target is the last element or is absent.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "20 comparisons; target last or absent"
},
        },
        {
          id: "ecs10-u5-linear-search-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Search for 15 in [4, 9, 15, 22, 7, 30].",
          parts: [
          {
                    "label": "a",
                    "prompt": "List the comparisons made until the target is found.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State the index found and number of comparisons.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain how a found flag can stop unnecessary comparisons.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Search tracing",
                              "statement": "Record each comparison until match or end."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Compare 4, 9, then 15.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "15 is at zero-based index 2 after 3 comparisons.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Once found = TRUE the loop can exit, so elements after index 2 are not checked.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Index 2 after 3 comparisons; found flag allows early exit"
},
        },
        {
          id: "ecs10-u5-linear-search-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A program must repeatedly search a large unsorted array of product codes for exact matches.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe the linear search method in pseudocode terms.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State the worst-case number of comparisons for n elements and justify it.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest one improvement for repeated searches and explain the trade-off.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Search strategy",
                              "statement": "Choose simple linear search for small/unsorted data; consider sorting/indexing for repeated searches."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Initialise found FALSE; loop i from 0 to n-1; if array[i]=target store i and set found TRUE; exit when found.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Worst case is n comparisons when target is last or absent.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Sort once and use binary search, or build an index; sorting costs time upfront but speeds repeated lookups.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Linear search checks in order; worst case n; sorting/indexing improves repeated search at setup cost"
},
        },
      ],
    },
    {
      id: "ecs10-u5-sorting",
      title: "Sorting arrays",
      skill: "Explain and trace simple sorting algorithms such as bubble sort on small arrays.",
      lesson: {
        sections: [
          {
            heading: "Why sort?",
            body: "Sorting arranges values in ascending or descending order. Sorted data makes searching, reporting and comparison easier. For example, a sorted class list can be scanned until the target name is passed, and min/max values are at the ends.\n\nSorting changes the order of elements, so the original positions are lost unless indices or records are stored separately.",
          },
          {
            heading: "Bubble sort idea",
            body: "**Bubble sort** repeatedly compares neighbouring elements. If they are in the wrong order, swap them. Each pass moves the largest unsorted value towards the end, so after enough passes the array is sorted.\n\nA pass with no swaps means the array is already sorted and the algorithm can stop early. Bubble sort is simple but can be slow for large arrays.",
          },
        ],
        keyFormulas: [
          { name: "Bubble sort rule", statement: "compare neighbours; swap if left > right for ascending order" },
          { name: "Pass effect", statement: "each pass places the largest remaining value nearer the end" },
          { name: "Early stop", statement: "stop when a pass makes no swaps" },
        ],
        workedExample: {
          problem: "Bubble sort [5, 2, 8, 1] for one pass starting at index 0.",
          solution: "Compare 5,2 swap → [2,5,8,1]; compare 5,8 no swap; compare 8,1 swap → [2,5,1,8]. After one pass largest value 8 is at the end.",
        },
      },
      questions: [
        {
          id: "ecs10-u5-sorting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In ascending bubble sort, when are two neighbouring elements swapped?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When the left value is smaller"
                    },
                    {
                              "id": "b",
                              "text": "When the left value is larger"
                    },
                    {
                              "id": "c",
                              "text": "When both values are equal"
                    },
                    {
                              "id": "d",
                              "text": "Never"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bubble sort",
                              "statement": "Swap neighbours when out of order for ascending sort."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For ascending order, a larger left value must move right, so swap when left > right.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(b) When the left value is larger"
},
        },
        {
          id: "ecs10-u5-sorting-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "After the first bubble-sort pass on [9, 3, 7, 1], which value is guaranteed to be at the end?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "value",
                              "answer": 9
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Bubble pass",
                              "statement": "The largest value bubbles to the end."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The largest value is 9.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It will reach the last position after the pass.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "9"
},
        },
        {
          id: "ecs10-u5-sorting-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Trace one bubble-sort pass for [6, 4, 8, 2] comparing neighbours from left to right. Give the array after the pass.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Bubble pass",
                              "statement": "Swap adjacent out-of-order pairs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Compare 6,4 swap → [4,6,8,2]; compare 6,8 no swap; compare 8,2 swap → [4,6,2,8].",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Array after one pass: [4,6,2,8].",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "[4,6,2,8]"
},
        },
        {
          id: "ecs10-u5-sorting-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An array is already sorted in ascending order.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State how many swaps bubble sort needs on the first pass if early stopping is used.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain why early stopping saves time.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Early termination",
                              "statement": "No swaps in a pass means sorted order."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Zero swaps are needed.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The algorithm can stop after the pass instead of continuing unnecessary passes.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "0 swaps; early stop avoids extra passes"
},
        },
        {
          id: "ecs10-u5-sorting-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Bubble sort is applied to [5, 1, 4, 2] until sorted.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give the array after pass 1.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give the array after pass 2.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State the final sorted array.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Bubble sort tracing",
                              "statement": "Repeat neighbour comparisons until no swaps remain."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Pass1: [1,4,2,5] after swaps move 5 to the end.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Pass2 compares first three active elements: [1,2,4,5].",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Final sorted array: [1,2,4,5].",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Pass1 [1,4,2,5]; pass2 [1,2,4,5]; final [1,2,4,5]"
},
        },
        {
          id: "ecs10-u5-sorting-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A program stores 1000 exam scores and must repeatedly find the highest and lowest scores.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why sorting the array once can make later max/min searches easier.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "State where the minimum and maximum are found in ascending sorted order.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss one drawback of using bubble sort for 1000 elements.",
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
                              "name": "Sort then search",
                              "statement": "Sorted data exposes extremes and supports efficient ordered access."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "After sorting, extremes are at known ends, so later searches need not scan all elements.",
                              "marks": 3,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Minimum is first and maximum is last in ascending order.",
                              "marks": 3,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Bubble sort can require many comparisons and swaps, so it may be slow for large arrays.",
                              "marks": 3,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sorted array puts min first and max last; bubble sort may be too slow for 1000 items"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u5-lesson-5-3-notes",
      title: "Searching and sorting arrays — notes",
      summary: "Linear search checks elements in order; bubble sort swaps neighbours until the array is ordered.",
      sections: [
        { heading: "Linear search", body: "Use a found flag and stop at the first match; worst case is n comparisons." },
        { heading: "Bubble sort", body: "Each pass bubbles the largest unsorted value towards the end; stop early if no swaps occur." },
        { heading: "Trade-offs", body: "Sorting costs time but makes repeated searches and extremes easier." },
      ],
    },
  ],
};
