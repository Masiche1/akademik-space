import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "cipc-u2-lesson-2-4",
  code: "2-4",
  title: "Stage 4 — Sorting and Searching Algorithms",
  goal: "I CAN describe and apply simple sorting and searching algorithms to data.",
  standards: ["Cambridge Primary Computing 0059 Stage 4: managing data", "Cambridge Primary Computing 0059 framework strands: Managing data"],
  stage: 4,
  vocabulary: [
    { term: "Sort", definition: "Arranging data in order — ascending or descending." },
    { term: "Search", definition: "Finding an item in a collection." },
    { term: "Linear search", definition: "Check items one by one until found." },
    { term: "Binary search", definition: "Halve the search space each step (sorted data only)." },
    { term: "Algorithm efficiency", definition: "How few steps an algorithm needs." },
    { term: "Compare", definition: "Checking which of two items comes first." },
  ],
  concepts: [
    {
      id: "cipc-u2-s4-search",
      title: "Sorting and searching",
      skill: "Apply linear/binary search and basic sorting at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Searching",
            body: "Linear search checks each item in turn — simple but slow for big lists. Binary search needs sorted data: check the middle, discard the half that can't contain the target, repeat — much faster.",
          },
          {
            heading: "Sorting",
            body: "Sorting arranges data for searching and display. Simple methods: bubble sort (compare neighbours, swap if out of order) or selection (find smallest, move to front). Sorted data enables binary search.",
          },
        ],
        keyFormulas: [
          { name: "Linear search", statement: "check each item until found — O(n)" },
          { name: "Binary search", statement: "halve list each step — needs sorted data" },
        ],
        workedExample: {
          problem: "Find 7 in [1,3,5,7,9,11] using binary search. How many checks?",
          solution: "Middle=7 → found in 1 check. If target were 9: middle 7 <9 → search upper half [9,11], middle 9 → found. ~log₂(n) checks.",
        },
      },
      questions: [
        {
          id: "cipc-u2-ss-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What must be true before using binary search?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Data must be sorted"
                    },
                    {
                              "id": "b",
                              "text": "List must be long"
                    },
                    {
                              "id": "c",
                              "text": "Data must be text"
                    },
                    {
                              "id": "d",
                              "text": "No requirements"
                    }
          ],
          "correctChoiceId": "a"
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
                              "reasoning": "Binary search halves a sorted list.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Data must be sorted"
},
        },
        {
          id: "cipc-u2-ss-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Compare linear and binary search in one sentence each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Search types",
                              "statement": "Sequential vs halving."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Linear: check items one by one.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Binary: halve sorted list each step.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Linear=each item; binary=halve sorted"
},
        },
        {
          id: "cipc-u2-ss-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find 8 in [2,4,6,8,10,12,14] by binary search — describe each step.",
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
                              "reasoning": "Middle=8 → found immediately.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If not found: compare, discard half, repeat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "~log₂(7)≈3 checks max for 7 items.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Middle=8 found in 1 step"
},
        },
        {
          id: "cipc-u2-ss-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sorting and searching. (b) Why sort before binary searching? (c) Find 5 in [1,3,5,7,9] linearly — how many checks? (d) Same by binary — how many? (e) Why is binary faster on big lists? (f) What is bubble sort? (g) When is linear search better? (h) Sort [5,2,8,1] by selection method — show steps.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Algorithms",
                              "statement": "Sort/search methods, efficiency."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Sort=order data; search=find item.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Halving needs order to discard halves.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 3 checks (1,3,5).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 2 checks (middle 5 found).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) log₂(n) vs n — much fewer steps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Compare neighbours, swap if out of order.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Unsorted/small lists — simpler, no sort needed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Find min, swap to front repeatedly → [1,2,5,8].",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sorting/searching, binary efficiency, bubble/selection sorts."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-ss-notes",
      title: "Sorting and searching — notes",
      summary: "Linear=each item; binary=halve sorted list (much faster). Sort first to enable binary search.",
      sections: [
        { heading: "Key idea", body: "Sorted data unlocks fast searching." },
        { heading: "Efficiency", body: "Binary ~log₂(n) vs linear ~n checks." },
      ],
    },
  ],
};
