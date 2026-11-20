import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "ciealc-u3-lesson-3-2",
  code: "3-2",
  title: "Searching and Sorting Algorithms",
  goal: "I CAN describe linear/binary search and bubble/selection/merge sort, and analyse complexity.",
  standards: ["Cambridge A Level Computer Science 9618: algorithms", "9618: searching/sorting"],
  
  vocabulary: [
    { term: "Linear search", definition: "Check each item in turn until found." },
    { term: "Binary search", definition: "Divide sorted list in half, eliminate half each step." },
    { term: "Bubble sort", definition: "Compare adjacent pairs, swap if out of order." },
    { term: "Selection sort", definition: "Find minimum, place at front, repeat." },
    { term: "Merge sort", definition: "Divide list in half, sort each, merge." },
    { term: "Complexity", definition: "Time/space efficiency measure — O(n), O(n²), O(n log n)." },
  ],
  concepts: [
    {
      id: "ciealc-u3-s2-search",
      title: "Searching and sorting",
      skill: "Describe and analyse search/sort algorithms.",
      lesson: {
        sections: [
          {
            heading: "Searching",
            body: "Linear: O(n) — check each item. Binary: O(log n) — requires sorted list, halve each step. Binary much faster for large sorted data.",
          },
          {
            heading: "Sorting",
            body: "Bubble: O(n²) — simple but slow. Selection: O(n²) — finds minimum each pass. Merge: O(n log n) — divide and conquer, efficient but needs memory. Choose based on data size and requirements.",
          },
        ],
        keyFormulas: [
          { name: "Linear", statement: "O(n)" },
          { name: "Binary", statement: "O(log n) — sorted only" },
          { name: "Bubble/selection", statement: "O(n²)" },
          { name: "Merge", statement: "O(n log n)" },
        ],
        workedExample: {
          problem: "Sort [5,2,8,1] using bubble sort — show passes.",
          solution: "Pass1: [2,5,1,8]→[2,1,5,8]→[2,1,5,8]. Pass2: [1,2,5,8]. Pass3: no swaps—done. Sorted: [1,2,5,8].",
        },
      },
      questions: [
        {
          id: "ciealc-u3-ss-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is linear search?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Check each item in turn until found"
                    },
                    {
                              "id": "b",
                              "text": "Halve the list each step"
                    },
                    {
                              "id": "c",
                              "text": "Sort the list first"
                    },
                    {
                              "id": "d",
                              "text": "Use a hash table"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Linear search",
                              "statement": "Sequential check."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear search checks items one by one.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Check each item in turn"
},
        },
        {
          id: "ciealc-u3-ss-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why does binary search require sorted data?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Binary search",
                              "statement": "Requires sorting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Binary search eliminates half based on comparison.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Requires sorted order to know which half to discard.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Needs sorted data to eliminate halves"
},
        },
        {
          id: "ciealc-u3-ss-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare bubble sort and merge sort in terms of complexity and efficiency.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sorting comparison",
                              "statement": "Complexity analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bubble O(n²) — simple but slow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Merge O(n log n) — faster for large data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Merge needs more memory.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "O(n²) vs O(n log n)"
},
        },
        {
          id: "ciealc-u3-ss-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define linear search, binary search, bubble sort, selection sort, merge sort, complexity. (b) What's the complexity of linear search? (c) What's the complexity of binary search? (d) What's the complexity of bubble sort? (e) Why is binary search faster? (f) Sort [3,7,1] using bubble sort — show passes. (g) When would you choose selection over bubble? (h) Design a search strategy for a library catalogue.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Search/sort",
                              "statement": "Algorithms and complexity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) O(n).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) O(log n).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) O(n²).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Halves search space each step.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Correct bubble sort trace.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Fewer swaps; more efficient for some data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid search strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Search and sort algorithms."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-ss-notes",
      title: "Search/sort — notes",
      summary: "Linear=O(n), binary=O(log n), bubble/selection=O(n²), merge=O(n log n). Choose by data size.",
      sections: [
        { heading: "Key idea", body: "Complexity notation measures efficiency — critical for large datasets." },
        { heading: "Binary search", body: "Requires sorted data — worth sorting upfront for repeated searches." },
      ],
    },
  ],
};
