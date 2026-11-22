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
                              "text": "No requirement"
                    },
                    {
                              "id": "b",
                              "text": "Data must be numbers"
                    },
                    {
                              "id": "c",
                              "text": "Data must be sorted"
                    },
                    {
                              "id": "d",
                              "text": "List must be small"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cils-c-u2-ss-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a linear search do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Checks each item one by one"
                    },
                    {
                              "id": "b",
                              "text": "Sorts the list first"
                    },
                    {
                              "id": "c",
                              "text": "Halves the list each step"
                    },
                    {
                              "id": "d",
                              "text": "Uses a hash table"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Linear search",
                              "statement": "Item-by-item check."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear search scans sequentially — up to n checks.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Checks each item"
},
        },
        {
          id: "cils-c-u2-ss-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of checks for binary search on a sorted list of 1024 items? (log2 1024 = 10)",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 10 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Binary search",
                              "statement": "~log2 n checks."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "log2(1024) = 10 — halving 10 times reaches 1 item.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "10"
},
        },
        {
          id: "cils-c-u2-ss-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the worst-case number of checks for a linear search on a list of 50 items?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 50 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Worst case",
                              "statement": "Item last in list."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Worst case checks all 50 items.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "50"
},
        },
        {
          id: "cils-c-u2-ss-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find 25 in the sorted list [5, 15, 25, 35, 45] using binary search. Show each step.",
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
                              "reasoning": "Middle item = 25 → found immediately.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Method: check middle, discard half each step.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Found in 1 check; max ~log2(5) ≈ 3.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Found in 1 step"
},
        },
        {
          id: "cils-c-u2-ss-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main advantage of merge sort over bubble sort?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It needs no comparisons"
                    },
                    {
                              "id": "b",
                              "text": "It is much faster on large data — O(n log n) vs O(n²)"
                    },
                    {
                              "id": "c",
                              "text": "It only works on numbers"
                    },
                    {
                              "id": "d",
                              "text": "It uses less memory always"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Merge sort",
                              "statement": "Divide and conquer, O(n log n)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Merge sort scales far better on large datasets.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Faster on large data"
},
        },
        {
          id: "cils-c-u2-ss-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the maximum number of checks for binary search on a sorted list of 256 items?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 8 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Binary search",
                              "statement": "log2 n checks."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "log2(256) = 8.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "8"
},
        },
        {
          id: "cils-c-u2-ss-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "When is a linear search a better choice than binary search?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "When the list is small or not sorted"
                    },
                    {
                              "id": "b",
                              "text": "When speed is critical"
                    },
                    {
                              "id": "c",
                              "text": "When the list has a million items"
                    },
                    {
                              "id": "d",
                              "text": "Never — binary is always better"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Algorithm choice",
                              "statement": "Match algorithm to data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Binary needs sorted data and has setup cost; linear is fine for small/unsorted lists.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Small or unsorted lists"
},
        },
        {
          id: "cils-c-u2-ss-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define sort and search. (b) Compare O(n) and O(n²) for 1000 items. (c) Why must data be sorted for binary search? (d) Describe bubble sort in one sentence. (e) A contacts app has 5000 names — which search should it use and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Algorithms",
                              "statement": "Sort/search efficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sort = arrange in order; search = find an item.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 1000 vs 1,000,000 operations — huge difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Halving only works if order is known.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Compare neighbours and swap if out of order, repeat passes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Binary search — sorted names, ~log2(5000) ≈ 12 checks vs up to 5000.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Efficiency, ordering, algorithm choice."
},
        },
        {
          id: "cils-c-u2-ss-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to 'sort' a list of data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Arrange the data in order — ascending or descending"
                    },
                    {
                              "id": "b",
                              "text": "Randomise the order"
                    },
                    {
                              "id": "c",
                              "text": "Delete duplicate items"
                    },
                    {
                              "id": "d",
                              "text": "Count the items"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sort",
                              "statement": "Arrange in order."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sorting puts items into a defined sequence.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Arrange in order"
},
        },
        {
          id: "cils-c-u2-ss-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the worst-case number of checks for a linear search on a list of 8 items?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 8 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Worst case",
                              "statement": "All items checked."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Target last → 8 checks.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "8"
},
        },
        {
          id: "cils-c-u2-ss-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which condition must be true before using binary search?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The list must contain only numbers"
                    },
                    {
                              "id": "b",
                              "text": "The data must be sorted"
                    },
                    {
                              "id": "c",
                              "text": "The list must be very long"
                    },
                    {
                              "id": "d",
                              "text": "The computer must be fast"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Binary search",
                              "statement": "Requires sorted data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Halving relies on known ordering.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data must be sorted"
},
        },
        {
          id: "cils-c-u2-ss-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define linear search, binary search, efficiency, worst case. (b) How many checks worst case for linear search on 200 items? (c) Approximate binary search checks on 200 items. (d) Why is sorting useful before searching? (e) Compare bubble sort and merge sort for a list of 10,000 items. (f) A school stores 800 student IDs sorted — which search and why?",
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
                              "reasoning": "(a) All four definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 200.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) ~log2(200) ≈ 8.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Enables binary search halving.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Bubble ~100M comparisons vs merge ~n log n — merge far faster.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Binary search — sorted data, ~10 checks.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Search/sort efficiency and choice."
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
