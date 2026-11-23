import type { Lesson } from "../../../types.ts";

export const lesson16: Lesson = {
  id: "satp-u1-lesson-1-6",
  code: "1-6",
  title: "Test-Day Logistics and Mindset",
  goal: "I CAN manage the practical and psychological aspects of test day.",
  standards: ["SAT S 2.x"],
  vocabulary: [
    { term: "Check-in", definition: "Arrival, ID, seating process." },
    { term: "Materials", definition: "What's allowed — calculator, scratch paper." },
    { term: "Breaks", definition: "Scheduled breaks between sections." },
    { term: "Reset routine", definition: "Technique for managing stress mid-test." },
    { term: "First question", definition: "Starting strong — don't rush." },
    { term: "Final review", definition: "Using last minutes wisely." },
  ],
  concepts: [
    {
      id: "satp-u1-test-day",
      title: "Test-day logistics",
      skill: "Manage practical and psychological aspects of exam day.",
      lesson: {
        sections: [
          {
            heading: "Before the test",
            body: "Arrive early — check-in takes time; know what ID is required. Bring approved calculator (SAT allows calculator throughout Math — bring a familiar one, not a new one to learn). Get good sleep the night before; eat a real meal (not just sugar).",
          },
          {
            heading: "During the test",
            body: "Use breaks to reset — walk, breathe, don't review answers (worrying wastes mental energy). If stuck on a question, use a reset routine: mark it, take 3 deep breaths, move on — return later with fresh eyes. The first question of each module sets your pace — don't rush it.",
          },
        ],
        keyFormulas: [
          { name: "Reset", statement: "Mark → breathe → move on → return later" },
          { name: "First question", statement: "Don't rush — sets pace" },
        ],
        workedExample: {
          problem: "You're stuck on question 8 of 27 in RW. What do you do?",
          solution: "Mark it, take a breath, move to question 9 — don't let one question derail your pace; return to #8 if time permits with remaining time.",
        },
      },
      questions: [
        {
          id: "satp-u1-test-day-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The best use of scheduled breaks is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reviewing answers"
                    },
                    {
                              "id": "b",
                              "text": "resetting mentally — walk, breathe"
                    },
                    {
                              "id": "c",
                              "text": "studying formulas"
                    },
                    {
                              "id": "d",
                              "text": "checking phone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Break purpose",
                              "statement": "Mental reset."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Breaks are for resetting — walking, breathing, clearing your mind; reviewing answers creates anxiety, studying wastes the break's purpose.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mental reset",
          "commonErrors": [
                    "Using breaks to keep working."
          ]
},
        },
        {
          id: "satp-u1-test-day-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "When stuck on a question, the best immediate action is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "keep trying"
                    },
                    {
                              "id": "b",
                              "text": "mark it, reset, move on"
                    },
                    {
                              "id": "c",
                              "text": "leave it blank"
                    },
                    {
                              "id": "d",
                              "text": "ask for help"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reset routine",
                              "statement": "Mark-breathe-move."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mark, take a breath, move to next question — don't let one hard question consume time or anxiety; return later if time permits.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mark and move on",
          "commonErrors": [
                    "Obsessing over one question."
          ]
},
        },
        {
          id: "satp-u1-test-day-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "You arrive 15 minutes early for check-in. Check-in takes ~10 minutes. How many minutes before testing starts do you have to relax?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Minutes",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "15 - 10."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$15 - 10 = 5$ minutes to relax before testing begins.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 5.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Forgetting check-in time."
          ]
},
        },
        {
          id: "satp-u1-test-day-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'don't rush the first question of each module' is good pacing advice.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Pace setting",
                              "statement": "First question calibrates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The first question sets your tempo — rushing it creates anxiety that carries through the module; taking appropriate time establishes sustainable pace.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conversely, spending too long on Q1 signals it's harder than average — adjust after, but the point is not to panic-rush or obsess.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Each module is independent — a bad module 1 doesn't doom module 2; start each fresh with appropriate pace.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "First question sets pace — don't rush or obsess",
          "commonErrors": [
                    "Treating every question with equal urgency."
          ]
},
        },
      ],
    },
  ],
};
