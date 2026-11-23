import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "satp-u3-lesson-3-1",
  code: "3-1",
  title: "Error Analysis and Review",
  goal: "I CAN analyze mistakes systematically to improve.",
  standards: ["SAT S 4.x"],
  vocabulary: [
    { term: "Error log", definition: "Record of mistakes with categories." },
    { term: "Error types", definition: "Content gap, careless, time pressure, misread." },
    { term: "Pattern recognition", definition: "Identifying recurring mistake types." },
    { term: "Targeted review", definition: "Focusing on weakest areas." },
    { term: "Spaced repetition", definition: "Reviewing at increasing intervals." },
    { term: "Progress tracking", definition: "Measuring improvement over time." },
  ],
  concepts: [
    {
      id: "satp-u3-error-analysis",
      title: "Error analysis",
      skill: "Analyze mistakes systematically to target improvement.",
      lesson: {
        sections: [
          {
            heading: "Categorize every error",
            body: "After each practice test, categorize EVERY mistake: **content gap** (don't know the concept), **careless error** (knew it but slipped), **misread** (answered different question), **time pressure** (ran out of time). Different categories need different solutions — don't treat all errors the same.",
          },
          {
            heading: "Pattern recognition",
            body: "Look for patterns across errors: same question type? same topic? same careless mistake (sign errors, arithmetic)? Patterns reveal systematic weaknesses — fix the pattern, not just individual questions. An error log makes patterns visible.",
          },
        ],
        keyFormulas: [
          { name: "Error types", statement: "Content / careless / misread / time" },
          { name: "Fix the pattern", statement: "Systematic weakness > individual question" },
        ],
        workedExample: {
          problem: "You missed 10 questions: 4 content gaps, 3 sign errors, 2 misreads, 1 timeout. How should you prepare?",
          solution: "Prioritize 4 content gaps (real learning); review sign-error pattern (check work habit); practice careful reading (misreads); work on pacing (timeout). Don't just 'study more' — target each error type specifically.",
        },
      },
      questions: [
        {
          id: "satp-u3-error-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The most important step after a practice test is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "checking score only"
                    },
                    {
                              "id": "b",
                              "text": "analyzing every error by type"
                    },
                    {
                              "id": "c",
                              "text": "moving to next test"
                    },
                    {
                              "id": "d",
                              "text": "memorizing answers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Error analysis",
                              "statement": "Categorize mistakes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Analyzing every error by type reveals what to fix — content gaps need learning, careless errors need habits, timeouts need pacing.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Analyze errors",
          "commonErrors": [
                    "Just checking the score."
          ]
},
        },
        {
          id: "satp-u3-error-analysis-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sign errors across multiple questions indicate ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "bad luck"
                    },
                    {
                              "id": "b",
                              "text": "a systematic habit problem"
                    },
                    {
                              "id": "c",
                              "text": "content gap"
                    },
                    {
                              "id": "d",
                              "text": "time pressure"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Pattern recognition",
                              "statement": "Recurring = systematic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Repeated sign errors = systematic habit problem — fix by writing steps, checking signs, substituting back; it's a process issue, not knowledge gap.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Systematic habit",
          "commonErrors": [
                    "Treating as random mistakes."
          ]
},
        },
        {
          id: "satp-u3-error-analysis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "You got 40/44 Math correct, missing 4 questions. If 3 of the missed were careless errors (not content gaps), how many were true content gaps?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Content gaps",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract careless",
                              "statement": "4 missed - 3 careless."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$4 \\text{ missed} - 3 \\text{ careless} = 1$ true content gap.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 1.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Confusing correct vs incorrect counts."
          ]
},
        },
        {
          id: "satp-u3-error-analysis-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'fixing the pattern' beats 'reviewing individual questions'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Systematic improvement",
                              "statement": "Pattern > instance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Individual question review fixes that question; pattern fixing solves the SYSTEMATIC issue — if you make sign errors on 5 questions, reviewing 5 questions doesn't help; developing a sign-checking habit fixes all future sign errors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Patterns reveal the ROOT cause — careless errors need process changes (check work), content gaps need learning, timeouts need pacing; treating symptoms (questions) not causes (patterns) wastes effort.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example: 5 sign errors → fix by 'always circle negatives and check final sign' — one habit fixes all future cases.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Fix patterns (habits) not just instances",
          "commonErrors": [
                    "Reviewing questions without finding patterns."
          ]
},
        },
      ],
    },
  ],
};
