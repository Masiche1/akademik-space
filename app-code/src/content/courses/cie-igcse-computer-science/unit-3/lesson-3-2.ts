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
                              "text": "Data must be numbers"
                    },
                    {
                              "id": "c",
                              "text": "List must be small"
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
        {
          id: "ciecs-u3-ss-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which search algorithm can be used on an unsorted list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Binary search" },
              { id: "b", text: "Bubble sort" },
              { id: "c", text: "Linear search" },
              { id: "d", text: "Merge sort" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear search", statement: "Checks each item and needs no order." },
            ],
            steps: [
              { reasoning: "Linear search checks items one by one, so sorting is not required.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Linear search",
          },
        },
        {
          id: "ciecs-u3-ss-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why must data be sorted before binary search?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Binary search cannot compare numbers" },
              { id: "b", text: "Sorting makes every list smaller" },
              { id: "c", text: "It removes the need for comparisons" },
              { id: "d", text: "Halving the search range only works if order is known" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Binary search", statement: "Requires sorted data for halving." },
            ],
            steps: [
              { reasoning: "Binary search discards half the list based on order, so order must exist.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** Halving requires known order",
          },
        },
        {
          id: "ciecs-u3-ss-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does bubble sort compare during each pass?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every item with every other item" },
              { id: "b", text: "Neighbouring items and swaps them if needed" },
              { id: "c", text: "Items with random positions" },
              { id: "d", text: "The first and last items only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bubble sort", statement: "Compares adjacent items and swaps out-of-order pairs." },
            ],
            steps: [
              { reasoning: "Adjacent comparisons move larger values toward the end over passes.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Neighbouring items",
          },
        },
        {
          id: "ciecs-u3-ss-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main advantage of merge sort over bubble sort for large data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only works on numbers" },
              { id: "b", text: "It never needs extra memory" },
              { id: "c", text: "It requires no comparisons" },
              { id: "d", text: "It has complexity O(n log n) rather than O(n^2)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Merge vs bubble", statement: "Divide-and-conquer scales better." },
            ],
            steps: [
              { reasoning: "Merge sort's O(n log n) grows much more slowly than bubble sort's O(n^2).", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** O(n log n) scaling",
          },
        },
        {
          id: "ciecs-u3-ss-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which algorithm is usually best for searching a very small unsorted list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Merge sort" },
              { id: "b", text: "Bubble sort" },
              { id: "c", text: "Linear search" },
              { id: "d", text: "Binary search" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Algorithm choice", statement: "Simplicity can beat asymptotic efficiency on tiny inputs." },
            ],
            steps: [
              { reasoning: "For a tiny unsorted list, linear search avoids sorting and is simple.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** Linear search",
          },
        },
        {
          id: "ciecs-u3-ss-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the worst-case number of comparisons for linear search on a list of $n$ items when the target is absent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n$" },
              { id: "b", text: "$n^2$" },
              { id: "c", text: "$\\log_2 n$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear search complexity", statement: "O(n): may check every item." },
            ],
            steps: [
              { reasoning: "If the item is absent, linear search checks all n items.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** n",
          },
        },
        {
          id: "ciecs-u3-ss-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Using linear search on [8, 15, 23, 42, 57], how many comparisons are needed to find 42?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linear search trace", statement: "Count items checked until match." },
            ],
            steps: [
              { reasoning: "Checks 8, 15, 23 then 42: 4 comparisons.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "ciecs-u3-ss-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the maximum number of comparisons binary search needs on a sorted list of $8$ items?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Binary search bound", statement: "About log2(n) comparisons." },
            ],
            steps: [
              { reasoning: "log2(8) = 3, so at most 3 comparisons are needed.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciecs-u3-ss-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the worst case, how many passes does bubble sort need on a list of $5$ items?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bubble sort passes", statement: "Worst case needs n - 1 passes." },
            ],
            steps: [
              { reasoning: "5 - 1 = 4 passes.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "ciecs-u3-ss-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "For a list of $20$ items: (a) What is the worst-case number of comparisons for linear search? (b) What is the approximate maximum number of comparisons for binary search?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Search complexity", statement: "Linear O(n); binary about log2(n)." },
            ],
            steps: [
              { reasoning: "Linear search may check all 20 items.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "log2(20) is about 4.3, so about 5 comparisons.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 20; (b) 5",
          },
        },
        {
          id: "ciecs-u3-ss-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A sorted list has $64$ items. (a) What is the maximum number of comparisons for binary search? (b) What is the worst-case number for linear search? (c) How many fewer comparisons does binary search need in the worst case?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 64 },
              { label: "c", answer: 58 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Efficiency comparison", statement: "log2(64) = 6 versus 64 linear checks." },
            ],
            steps: [
              { reasoning: "log2(64) = 6 binary comparisons.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Linear search may check all 64 items.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "64 - 6 = 58 fewer comparisons.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 6; (b) 64; (c) 58",
          },
        },
        {
          id: "ciecs-u3-ss-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A library catalogue stores $10,000$ book titles in sorted order, and a teacher has a list of $5$ unsorted quiz scores. Recommend a search algorithm for each situation and justify your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Algorithm selection", statement: "Match algorithm to data size, order and requirements." },
            ],
            steps: [
              { reasoning: "Binary search suits the large sorted catalogue because it needs about log2(10000) checks.", marks: 1, markCode: "M" },
              { reasoning: "Linear search suits the tiny unsorted score list because sorting would be unnecessary.", marks: 1, markCode: "M" },
              { reasoning: "Justification links efficiency to data size and whether data is sorted.", marks: 1, markCode: "M" },
              { reasoning: "A valid conclusion states which algorithm is preferable in each case.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Binary for large sorted data; linear for small unsorted data",
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
