import type { Lesson } from "../../../types.ts";

export const lesson142: Lesson = {
  id: "ciealc-u3-lesson-3-2",
  code: "3-2",
  title: "Searching and Sorting Algorithms",
  goal: "I CAN describe linear/binary search and bubble/selection/merge sort, and analyse complexity.",
  standards: [
    "Cambridge A Level Computer Science 9618: algorithms",
    "9618: searching/sorting",
  ],

  vocabulary: [
    {
      term: "Linear search",
      definition: "Check each item in turn until found.",
    },
    {
      term: "Binary search",
      definition: "Divide sorted list in half, eliminate half each step.",
    },
    {
      term: "Bubble sort",
      definition: "Compare adjacent pairs, swap if out of order.",
    },
    {
      term: "Selection sort",
      definition: "Find minimum, place at front, repeat.",
    },
    {
      term: "Merge sort",
      definition: "Divide list in half, sort each, merge.",
    },
    {
      term: "Complexity",
      definition: "Time/space efficiency measure — O(n), O(n²), O(n log n).",
    },
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
          solution:
            "Pass1: [2,5,1,8]→[2,1,5,8]→[2,1,5,8]. Pass2: [1,2,5,8]. Pass3: no swaps—done. Sorted: [1,2,5,8].",
        },
      },
      questions: [
        {
          id: "ciealc-u3-ss-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is linear search?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Halve the list each step",
              },
              {
                id: "b",
                text: "Sort the list first",
              },
              {
                id: "c",
                text: "Use a hash table",
              },
              {
                id: "d",
                text: "Check each item in turn until found",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Linear search",
                statement: "Sequential check.",
              },
            ],
            steps: [
              {
                reasoning: "Linear search checks items one by one.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Check each item in turn",
          },
        },
        {
          id: "ciealc-u3-ss-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why does binary search require sorted data?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Binary search",
                statement: "Requires sorting.",
              },
            ],
            steps: [
              {
                reasoning: "Binary search eliminates half based on comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Requires sorted order to know which half to discard.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Needs sorted data to eliminate halves",
          },
        },
        {
          id: "ciealc-u3-ss-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare bubble sort and merge sort in terms of complexity and efficiency.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sorting comparison",
                statement: "Complexity analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Bubble O(n²) — simple but slow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Merge O(n log n) — faster for large data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Merge needs more memory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "O(n²) vs O(n log n)",
          },
        },
        {
          id: "ciealc-u3-ss-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define linear search, binary search, bubble sort, selection sort, merge sort, complexity. (b) What's the complexity of linear search? (c) What's the complexity of binary search? (d) What's the complexity of bubble sort? (e) Why is binary search faster? (f) Sort [3,7,1] using bubble sort — show passes. (g) When would you choose selection over bubble? (h) Design a search strategy for a library catalogue.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Search/sort",
                statement: "Algorithms and complexity.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) O(n).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) O(log n).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) O(n²).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Halves search space each step.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Correct bubble sort trace.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Fewer swaps; more efficient for some data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid search strategy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Search and sort algorithms.",
          },
        },
        {
          id: "ciealc-u3-ss-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What must be true of a list before binary search can be used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It must contain only numbers" },
              { id: "b", text: "It must be stored on a hard disk" },
              { id: "c", text: "It must be sorted" },
              { id: "d", text: "It must have exactly 100 items" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binary search",
                statement: "Requires sorted data; halves the search space.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Binary search eliminates half the list each step, which only works on sorted data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(c)** It must be sorted",
          },
        },
        {
          id: "ciealc-u3-ss-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A linear search is performed on a list of 100 items and the target is the last item checked. How many items are examined in the worst case? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Linear search worst case",
                statement: "O(n) — every item may be checked.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Worst case examines all 100 items.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "100",
          },
        },
        {
          id: "ciealc-u3-ss-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sorting algorithm has a time complexity of O(n log n)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selection sort" },
              { id: "b", text: "Merge sort" },
              { id: "c", text: "Linear search" },
              { id: "d", text: "Bubble sort" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Merge sort",
                statement: "Divide-and-conquer, O(n log n).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Merge sort divides the list and merges sorted halves, giving O(n log n).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Merge sort",
          },
        },
        {
          id: "ciealc-u3-ss-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Binary search is used on a sorted list of 1024 items. What is the maximum number of comparisons needed? (log2(1024) = 10). Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Binary search steps",
                statement: "Comparisons ≈ log2(n).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "log2(1024) = 10 comparisons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "ciealc-u3-ss-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why bubble sort has a time complexity of O(n²).",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bubble sort complexity",
                statement: "Compares all pairs across passes.",
              },
            ],
            steps: [
              {
                reasoning: "Bubble sort makes up to n passes over the list.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each pass compares up to n items, giving roughly n × n = n² comparisons.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "n passes × n comparisons each = O(n²)",
          },
        },
        {
          id: "ciealc-u3-ss-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In bubble sort, which items are compared and possibly swapped during each pass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first and last items only" },
              { id: "b", text: "Adjacent items" },
              { id: "c", text: "Random pairs of items" },
              { id: "d", text: "Items at prime-numbered positions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bubble sort",
                statement: "Adjacent items are compared and swapped.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adjacent out-of-order pairs are swapped, letting larger values bubble to the end.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Adjacent items",
          },
        },
        {
          id: "ciealc-u3-ss-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Bubble sort is applied to the list [3, 1, 2]. In the first pass, how many swaps are performed? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bubble sort trace",
                statement: "Swap adjacent out-of-order pairs left to right.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Pass 1: 3>1 swap → [1,3,2]; 3>2 swap → [1,2,3]. Two swaps.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciealc-u3-ss-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the steps of binary search when looking for a value in a sorted list.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Binary search",
                statement: "Compare middle element; eliminate half.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Find the middle element of the current search range.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compare it with the target: if equal, stop; if target is smaller, search the left half; if larger, search the right half.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeat on the remaining half until the item is found or the range is empty.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Halve the sorted range each comparison",
          },
        },
        {
          id: "ciealc-u3-ss-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a disadvantage of merge sort compared with bubble sort?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It cannot sort numbers" },
              { id: "b", text: "It requires sorted input data" },
              { id: "c", text: "It is always slower for small lists" },
              {
                id: "d",
                text: "It requires additional memory for the merge process",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merge sort drawback",
                statement: "Needs extra memory for merging.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Merge sort's divide-and-conquer merging requires additional storage space.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(d)** Requires additional memory",
          },
        },
        {
          id: "ciealc-u3-ss-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Selection sort is applied to a list of 5 items. How many passes through the list are needed in the worst case? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Selection sort passes",
                statement: "n items need n − 1 passes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "5 − 1 = 4 passes (the last item is already in place).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "ciealc-u3-ss-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A company needs to sort 1 million customer records by name every night. Recommend a sorting algorithm and justify your choice with reference to time complexity and practicality.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Algorithm choice",
                statement: "Match complexity and resources to data size.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bubble or selection sort are O(n²) and would be far too slow for 1 million records.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Merge sort is O(n log n), efficient for large datasets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justification must weigh merge sort's extra memory requirement against speed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Merge sort — O(n log n) suits large data",
          },
        },
        {
          id: "ciealc-u3-ss-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the best-case number of comparisons for a linear search that finds the target immediately? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Linear search best case",
                statement: "Target found on first check.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "If the target is the first item, only 1 comparison is needed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u3-ss-notes",
      title: "Search/sort — notes",
      summary:
        "Linear=O(n), binary=O(log n), bubble/selection=O(n²), merge=O(n log n). Choose by data size.",
      sections: [
        {
          heading: "Key idea",
          body: "Complexity notation measures efficiency — critical for large datasets.",
        },
        {
          heading: "Binary search",
          body: "Requires sorted data — worth sorting upfront for repeated searches.",
        },
      ],
    },
  ],
};
