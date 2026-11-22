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
                              "text": "No requirements"
                    },
                    {
                              "id": "b",
                              "text": "Data must be text"
                    },
                    {
                              "id": "c",
                              "text": "Data must be sorted"
                    },
                    {
                              "id": "d",
                              "text": "List must be long"
                    }
          ],
          "correctChoiceId": "c"
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
        {
          id: "cipc-u2-ss-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why must a list be sorted before using binary search?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Binary search halves the list by comparing the middle value" },
            { id: "b", text: "Sorting adds more items" },
            { id: "c", text: "Sorting makes the list shorter" },
            { id: "d", text: "It is not required" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Binary search requirement", statement: "Needs sorted data." }],
            steps: [
              { reasoning: "Binary search relies on order to decide which half to keep.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** It halves the list using the middle value",
          },
        },
        {
          id: "cipc-u2-ss-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two main searching algorithms and when each is best.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Search algorithms", statement: "Linear vs binary." }],
            steps: [
              { reasoning: "Linear search — checks each item; good for small/unsorted lists.", marks: 1, markCode: "M" },
              { reasoning: "Binary search — halves sorted list; good for large sorted lists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Linear (small/unsorted) and binary (large sorted).",
          },
        },
        {
          id: "cipc-u2-ss-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find 6 in [1, 3, 5, 7, 9] using linear search — how many items are checked before finding it (or failing)?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Linear search", statement: "Checks items in order until found." }],
            steps: [
              { reasoning: "6 is not in the list — linear search checks all 5 items.", marks: 1, markCode: "M" },
              { reasoning: "5 items checked.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipc-u2-ss-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In binary search on [10, 20, 30, 40, 50], which value is checked FIRST?",
          response: { type: "mcq", choices: [
            { id: "a", text: "30 (the middle)" },
            { id: "b", text: "50 (the last)" },
            { id: "c", text: "10 (the first)" },
            { id: "d", text: "20" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Binary search", statement: "Start at the middle." }],
            steps: [
              { reasoning: "Binary search always checks the middle value first.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** 30 (the middle)",
          },
        },
        {
          id: "cipc-u2-ss-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find 7 in [1, 3, 5, 7, 9] by binary search. List each value checked and how many checks it takes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Binary search trace", statement: "Middle, compare, halve." }],
            steps: [
              { reasoning: "Check middle 5: 7 > 5 → search upper half [7, 9].", marks: 1, markCode: "M" },
              { reasoning: "Check middle 7: found.", marks: 1, markCode: "M" },
              { reasoning: "2 checks total.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Checks 5 then 7 — 2 checks.",
          },
        },
        {
          id: "cipc-u2-ss-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When is LINEAR search better than binary search?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Never" },
            { id: "b", text: "Only for numbers" },
            { id: "c", text: "When the list is small or not sorted" },
            { id: "d", text: "Always on huge lists" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Choosing search", statement: "Linear for small/unsorted." }],
            steps: [
              { reasoning: "Binary needs sorted data and overhead; linear is simpler for small lists.", marks: 1, markCode: "M" },
              { reasoning: "Unsorted lists can't use binary search at all.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Small or unsorted lists",
          },
        },
        {
          id: "cipc-u2-ss-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Sort [5, 2, 8, 1] using selection sort. Show the first swap and the final sorted list.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Selection sort", statement: "Find smallest, swap into place." }],
            steps: [
              { reasoning: "Smallest is 1 at index 4 → swap with first: [1, 2, 8, 5].", marks: 1, markCode: "M" },
              { reasoning: "Continue: smallest of rest is 2 (already), then 5 vs 8 → swap.", marks: 1, markCode: "M" },
              { reasoning: "Final sorted list: [1, 2, 5, 8].", marks: 1, markCode: "A" },
            ],
            finalAnswer: "[1, 2, 5, 8]; first swap puts 1 first.",
          },
        },
        {
          id: "cipc-u2-ss-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why sort a list before binary searching it?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sort then search", statement: "Binary needs order." }],
            steps: [
              { reasoning: "Binary search compares the middle to decide which half contains the target.", marks: 1, markCode: "M" },
              { reasoning: "Without sorting, 'smaller goes left' is not true, so halves cannot be ruled out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Binary search needs sorted order to rule out halves.",
          },
        },
        {
          id: "cipc-u2-ss-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In [2, 4, 6, 8, 10, 12, 14, 16], how many items does binary search check to find 8? (Compare with linear worst case.)",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Binary efficiency", statement: "Halves each time." }],
            steps: [
              { reasoning: "Middle = 8 (index 4) — found on first check.", marks: 1, markCode: "M" },
              { reasoning: "1 check vs up to 8 checks linearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1 check — 8 is the middle.",
          },
        },
        {
          id: "cipc-u2-ss-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A library has 1000 books sorted by ISBN. Which search finds a book fastest and why?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Binary search — about 10 checks instead of up to 1000" },
            { id: "b", text: "They are the same speed" },
            { id: "c", text: "Linear search — it checks every book" },
            { id: "d", text: "Random guessing" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Binary efficiency", statement: "O(log n) vs O(n)." }],
            steps: [
              { reasoning: "Sorted large list → binary search applies.", marks: 1, markCode: "M" },
              { reasoning: "Halving 1000 needs only ~10 checks vs up to 1000 linear.", marks: 1, markCode: "M" },
              { reasoning: "Correct choice identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Binary — ~10 checks",
          },
        },
        {
          id: "cipc-u2-ss-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Bubble sort on [4, 1, 3, 2]: after the FIRST full pass (comparing neighbours), what does the list look like? Show one swap.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Bubble sort", statement: "Swap adjacent out-of-order pairs." }],
            steps: [
              { reasoning: "Pass: 4>1 swap → [1,4,3,2]; 4>3 swap → [1,3,4,2]; 4>2 swap → [1,3,2,4].", marks: 1, markCode: "M" },
              { reasoning: "Largest (4) bubbles to the end.", marks: 1, markCode: "M" },
              { reasoning: "After pass 1: [1, 3, 2, 4].", marks: 1, markCode: "A" },
            ],
            finalAnswer: "[1, 3, 2, 4] after first pass.",
          },
        },
        {
          id: "cipc-u2-ss-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define sorting and searching. (b) Why sort before binary searching? (c) Find 5 in [1,3,5,7,9] linearly — how many checks? (d) Same by binary — how many? (e) Why is binary faster on big lists? (f) What is bubble sort? (g) When is linear search better? (h) Sort [5,2,8,1] by selection method — show steps.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sorting and searching", statement: "Definitions, algorithms, traces, efficiency." }],
            steps: [
              { reasoning: "(a) Sorting=arrange order; searching=find an item.", marks: 1, markCode: "M" },
              { reasoning: "(b) Binary needs sorted order to rule out halves.", marks: 1, markCode: "M" },
              { reasoning: "(c) 3 checks (1,3,5).", marks: 1, markCode: "M" },
              { reasoning: "(d) 1 check — 5 is middle.", marks: 1, markCode: "M" },
              { reasoning: "(e) Halves list each step — far fewer comparisons.", marks: 1, markCode: "M" },
              { reasoning: "(f) Repeatedly swap adjacent out-of-order pairs.", marks: 1, markCode: "M" },
              { reasoning: "(g) Small or unsorted lists.", marks: 1, markCode: "M" },
              { reasoning: "(h) Swap smallest forward → [1,2,5,8].", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sorting/searching, binary precondition, linear 3 vs binary 1, efficiency, bubble sort, linear cases, selection sort.",
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
