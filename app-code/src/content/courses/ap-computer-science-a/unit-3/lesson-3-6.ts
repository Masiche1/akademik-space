import type { Lesson } from "../../../types.ts";

export const lesson36: Lesson = {
  id: "apcsa-u3-lesson-3-6",
  code: "3-6",
  title: "Algorithm Analysis",
  goal: "I CAN analyze time/space complexity and algorithm correctness.",
  standards: ["CSA-4.7"],
  vocabulary: [
    { term: "Time complexity", definition: "How runtime grows with input size." },
    { term: "Space complexity", definition: "How memory grows with input." },
    { term: "Big O", definition: "Upper bound on growth rate." },
    { term: "Best/average/worst case", definition: "Performance in different scenarios." },
    { term: "Correctness", definition: "Algorithm produces right answer always." },
    { term: "Trade-off", definition: "Time vs space vs simplicity." },
  ],
  concepts: [
    {
      id: "apcsa-u3-algorithms-analysis",
      title: "Algorithm analysis",
      skill: "Analyze complexity and correctness of algorithms.",
      lesson: {
        sections: [
          {
            heading: "Big O notation",
            body: "Describes growth RATE ignoring constants: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic. For large n, lower-order terms and constants don't matter — O(n² + n) is O(n²). Binary search O(log n) vs linear O(n) matters enormously at scale.",
          },
          {
            heading: "Correctness and trade-offs",
            body: "An algorithm must be CORRECT (always produces right answer) before efficient. Time-space trade-off: binary search uses O(1) extra space; some algorithms trade memory for speed. AP exams test recognizing complexity classes and when trade-offs are acceptable.",
          },
        ],
        keyFormulas: [
          { name: "Big O classes", statement: "O(1) < O(log n) < O(n) < O(n log n) < O(n²)" },
          { name: "Ignore constants", statement: "O(2n + 5) = O(n) — only growth rate matters" },
        ],
        workedExample: {
          problem: "Is O(n²) always worse than O(n log n)? For what n?",
          solution: "Asymptotically yes — n² grows faster than n log n; crossover point depends on constants, but for large n, O(n log n) wins. For small n, constants may make O(n²) faster in practice.",
        },
      },
      questions: [
        {
          id: "apcsa-u3-algorithms-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Big O notation describes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "exact runtime in seconds"
                    },
                    {
                              "id": "b",
                              "text": "how runtime grows with input size"
                    },
                    {
                              "id": "c",
                              "text": "memory usage only"
                    },
                    {
                              "id": "d",
                              "text": "code readability"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Big O",
                              "statement": "Growth rate, not exact time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Big O describes asymptotic growth — how runtime scales, ignoring constants and lower-order terms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Growth rate",
          "commonErrors": [
                    "Confusing with exact timing."
          ]
},
        },
        {
          id: "apcsa-u3-algorithms-analysis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "O(n²) vs O(n log n) for large n: ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "n² is faster"
                    },
                    {
                              "id": "b",
                              "text": "n log n is faster"
                    },
                    {
                              "id": "c",
                              "text": "same"
                    },
                    {
                              "id": "d",
                              "text": "depends on language"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Asymptotic comparison",
                              "statement": "Lower growth wins at scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "n log n grows slower than n² — for large n, O(n log n) algorithms are dramatically faster.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "n log n faster",
          "commonErrors": [
                    "Thinking quadratic beats linearithmic."
          ]
},
        },
        {
          id: "apcsa-u3-algorithms-analysis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify O(3n² + 2n + 100) to its dominant term class. Enter the exponent of n (e.g., 2 for O(n²)).",
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
                              "name": "Drop lower terms",
                              "statement": "n² dominates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "n² term dominates for large n → O(n²); constants and lower terms irrelevant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 2.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Keeping lower-order terms."
          ]
},
        },
        {
          id: "apcsa-u3-algorithms-analysis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the time-space trade-off in algorithms with a concrete example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Trade-off",
                              "statement": "Memory for speed or vice versa."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Some algorithms trade memory for speed — e.g., caching/fibonacci memoization stores computed values (more space) to avoid recomputation (less time); binary search uses O(1) space but requires sorted input (which costs time to achieve).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The trade-off is contextual — when memory is cheap and time scarce, use more space; when memory constrained, accept slower algorithms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "AP exams test recognizing that 'efficient' depends on which resource you're optimizing.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Trade space for time (memoization) or time for space (sorting)",
          "commonErrors": [
                    "Thinking efficiency is one-dimensional."
          ]
},
        },
      ],
    },
  ],
};
