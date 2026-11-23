import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "satp-u2-lesson-2-5",
  code: "2-5",
  title: "Adaptive Testing Strategy",
  goal: "I CAN optimize performance on the adaptive digital SAT.",
  standards: ["SAT S 4.x"],
  vocabulary: [
    { term: "Adaptive testing", definition: "Module 2 difficulty depends on module 1." },
    { term: "Module 1 importance", definition: "Strong start = harder (but higher-scoring) module 2." },
    { term: "Pacing per module", definition: "Each module is independent — pace separately." },
    { term: "No carryover", definition: "Module 1 time doesn't transfer to module 2." },
    { term: "Strategic approach", definition: "Consistency across modules matters." },
    { term: "Score ceiling", definition: "Harder module 2 = higher potential score." },
  ],
  concepts: [
    {
      id: "satp-u2-adaptive-strategy",
      title: "Adaptive strategy",
      skill: "Optimize performance across adaptive modules.",
      lesson: {
        sections: [
          {
            heading: "How adaptation works",
            body: "Module 1 is medium difficulty for everyone; module 2 adjusts — strong module 1 → HARDER module 2 (higher score ceiling), weak module 1 → easier module 2 (lower ceiling). This means module 1 performance sets your trajectory — don't bomb it.",
          },
          {
            heading: "Module independence",
            body: "Each module is separately timed — leftover time in module 1 does NOT carry to module 2. Pace each module independently; don't rush module 1 thinking you can 'save time' — you can't.",
          },
        ],
        keyFormulas: [
          { name: "Adaptation", statement: "Strong M1 → harder M2 → higher ceiling" },
          { name: "Independence", statement: "Each module timed separately — no carryover" },
        ],
        workedExample: {
          problem: "You finish module 1 with 5 minutes left. Should you rush to 'save time' for module 2?",
          solution: "No — module 2 is separately timed; use module 1's extra time to review flagged questions and catch errors. There's no time carryover.",
        },
      },
      questions: [
        {
          id: "satp-u2-adaptive-strategy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Strong performance on module 1 leads to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "easier module 2"
                    },
                    {
                              "id": "b",
                              "text": "harder module 2 with higher score ceiling"
                    },
                    {
                              "id": "c",
                              "text": "same module 2"
                    },
                    {
                              "id": "d",
                              "text": "test ending early"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Adaptive ceiling",
                              "statement": "Harder = higher potential."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strong M1 → harder M2 → higher score ceiling; weak M1 → easier M2 → lower ceiling. Module 1 sets trajectory.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Harder M2, higher ceiling",
          "commonErrors": [
                    "Thinking easier M2 is better."
          ]
},
        },
        {
          id: "satp-u2-adaptive-strategy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Leftover time in module 1 ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "carries to module 2"
                    },
                    {
                              "id": "b",
                              "text": "does NOT carry — use it to review"
                    },
                    {
                              "id": "c",
                              "text": "is wasted"
                    },
                    {
                              "id": "d",
                              "text": "ends the test"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Module independence",
                              "statement": "No time carryover."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Modules are independently timed — leftover module 1 time doesn't transfer; use it to review flagged questions and catch errors.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "No carryover — review instead",
          "commonErrors": [
                    "Thinking time carries over."
          ]
},
        },
        {
          id: "satp-u2-adaptive-strategy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Module 1 has 20 questions in 25 minutes. Module 2 has 22 questions in 28 minutes. Which has more seconds per question? 1=M1, 2=M2.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Module",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Compare rates",
                              "statement": "M1: 1500/20=75s; M2: 1680/22≈76s."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "M1: $1500 \\div 20 = 75$ sec/question; M2: $1680 \\div 22 \\approx 76$ sec/question — nearly identical.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 1 (M1 slightly higher at 75 vs 76).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Not calculating per-question rates."
          ]
},
        },
        {
          id: "satp-u2-adaptive-strategy-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'don't bomb module 1' is critical advice for adaptive testing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Trajectory setting",
                              "statement": "M1 determines M2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Module 1 performance determines module 2 difficulty — bomb M1 and you get easier M2 but LOWER score ceiling; strong M1 gives harder M2 with HIGHER ceiling.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The counterintuitive truth: harder questions in M2 aren't bad — they mean you earned access to higher scores; easy M2 caps your score lower.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Strategy: treat M1 seriously — it's not just 20 questions, it sets up your entire section's scoring potential.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "M1 sets trajectory — strong start = higher ceiling",
          "commonErrors": [
                    "Treating M1 as throwaway."
          ]
},
        },
      ],
    },
  ],
};
