import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "satp-u2-lesson-2-2",
  code: "2-2",
  title: "Math Section Strategy",
  goal: "I CAN apply effective tactics for the SAT Math section.",
  standards: ["SAT S 3.x"],
  vocabulary: [
    { term: "Calculator use", definition: "When and how to use calculator effectively." },
    { term: "Backsolving", definition: "Testing answer choices by plugging in." },
    { term: "Estimation", definition: "Approximate answers to eliminate choices." },
    { term: "Unit analysis", definition: "Checking answer units match question." },
    { term: "Desmos", definition: "Graphing calculator for visual solutions." },
    { term: "Common traps", definition: "Sign errors, careless mistakes, misreading." },
  ],
  concepts: [
    {
      id: "satp-u2-math-strategy",
      title: "Math section strategy",
      skill: "Apply calculator tactics, backsolving, and estimation for Math questions.",
      lesson: {
        sections: [
          {
            heading: "Calculator strategy",
            body: "The SAT allows calculator throughout Math — use it for arithmetic, graphing (Desmos), and checking. But DON'T rely on it for setup — you still need to know what to calculate. Calculator is a tool, not a substitute for understanding.",
          },
          {
            heading: "Backsolving and estimation",
            body: "**Backsolving**: plug answer choices into the equation — fastest for 'what is x?' questions when algebra is messy. **Estimation**: approximate to eliminate wrong choices — if answer is ~50, eliminate 5 and 500. These tactics save time on hard questions.",
          },
        ],
        keyFormulas: [
          { name: "Backsolve", statement: "Plug choices into equation" },
          { name: "Estimate", statement: "Approximate to eliminate extremes" },
        ],
        workedExample: {
          problem: "Solve $x^2 - 5x + 6 = 0$ with choices 1, 2, 3, 6. Backsolve.",
          solution: "Test x=2: $4 - 10 + 6 = 0$ ✓ — found it faster than factoring. Or test each: x=1: $1-5+6=2$✗; x=2: 0✓.",
        },
      },
      questions: [
        {
          id: "satp-u2-math-strategy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Backsolving means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "working backwards through problem"
                    },
                    {
                              "id": "b",
                              "text": "testing answer choices in the equation"
                    },
                    {
                              "id": "c",
                              "text": "guessing randomly"
                    },
                    {
                              "id": "d",
                              "text": "using calculator backwards"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Backsolving",
                              "statement": "Test choices."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backsolving plugs answer choices into the equation — works when algebra is messy but choices are clean numbers.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Test choices",
          "commonErrors": [
                    "Thinking it means reverse engineering."
          ]
},
        },
        {
          id: "satp-u2-math-strategy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Estimation helps by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "exact answers"
                    },
                    {
                              "id": "b",
                              "text": "eliminating implausible choices"
                    },
                    {
                              "id": "c",
                              "text": "avoiding calculation"
                    },
                    {
                              "id": "d",
                              "text": "proving answers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Estimation",
                              "statement": "Approximate to eliminate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Estimation approximates the answer to eliminate extremes — if answer ~50, eliminate 5 and 500; narrows choices for better guessing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Eliminate extremes",
          "commonErrors": [
                    "Thinking estimation gives exact answers."
          ]
},
        },
        {
          id: "satp-u2-math-strategy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "You estimate an answer is about 200. Choices: 2, 20, 200, 2000. How many can you eliminate?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Eliminated",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Magnitude check",
                              "statement": "2 and 2000 off by 10x+."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Estimate ~200: eliminate 2 (100x too small) and 2000 (10x too big) → leaves 20 and 200; better than 1/4 guess.",
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
                    "Keeping wildly different magnitudes."
          ]
},
        },
        {
          id: "satp-u2-math-strategy-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain when backsolving beats algebraic solving on SAT Math.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Method selection",
                              "statement": "When to backsolve."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Backsolving wins when: algebra is messy (quadratics, systems), choices are clean numbers, or you're stuck — testing 4 choices is often faster than solving.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Algebra wins when: equation is simple, choices are expressions not numbers, or you need the value for a follow-up part — solving once gives you the answer for multiple questions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Strategy: try algebra first for 30 seconds; if stuck, backsolve — don't waste 5 minutes on one approach.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Backsolve when algebra is messy or you're stuck",
          "commonErrors": [
                    "Insisting on algebraic method always."
          ]
},
        },
      ],
    },
  ],
};
