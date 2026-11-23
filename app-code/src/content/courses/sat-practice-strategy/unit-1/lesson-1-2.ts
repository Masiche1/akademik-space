import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "satp-u1-lesson-1-2",
  code: "1-2",
  title: "Question Order Strategy",
  goal: "I CAN prioritize questions for maximum score.",
  standards: ["SAT S 1.x"],
  vocabulary: [
    { term: "Easy/medium/hard", definition: "Question difficulty levels — not labeled on SAT." },
    { term: "Two-pass approach", definition: "Answer easy first, return to hard." },
    { term: "Mark and return", definition: "Flagging questions for later review." },
    { term: "Strategic guessing", definition: "Eliminating wrong answers to improve odds." },
    { term: "Question triage", definition: "Deciding which questions to attempt first." },
    { term: "Score maximization", definition: "Getting the most correct answers in available time." },
  ],
  concepts: [
    {
      id: "satp-u1-question-order",
      title: "Question order",
      skill: "Prioritize questions to maximize correct answers.",
      lesson: {
        sections: [
          {
            heading: "Two-pass strategy",
            body: "Pass 1: answer questions you can solve quickly and confidently — bank the easy points. Pass 2: return to flagged questions with remaining time. This ensures you don't run out of time on hard questions while easy ones go unanswered.",
          },
          {
            heading: "Strategic guessing",
            body: "No penalty for wrong answers on digital SAT — ALWAYS guess if unsure. Eliminate clearly wrong options first to improve odds: 4 choices → eliminate 2 → 50% guess vs 25% random. Even a guess has positive expected value when time runs out.",
          },
        ],
        keyFormulas: [
          { name: "Guessing", statement: "No penalty — always guess; eliminate first" },
          { name: "Two-pass", statement: "Easy first → return to hard" },
        ],
        workedExample: {
          problem: "You have 5 minutes left and 3 unanswered questions. What do you do?",
          solution: "Quickly attempt each — even if unsure, eliminate wrong answers and guess; never leave blank (no penalty). A 25-50% chance beats 0% for blank.",
        },
      },
      questions: [
        {
          id: "satp-u1-question-order-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On the digital SAT, wrong answers ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "subtract points"
                    },
                    {
                              "id": "b",
                              "text": "have no penalty — same as blank"
                    },
                    {
                              "id": "c",
                              "text": "give half credit"
                    },
                    {
                              "id": "d",
                              "text": "are worse than blank"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "No penalty",
                              "statement": "Guess freely."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Digital SAT has NO wrong-answer penalty — blank and wrong both score 0; always guess rather than leave blank.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "No penalty",
          "commonErrors": [
                    "Thinking old SAT -0.25 penalty applies."
          ]
},
        },
        {
          id: "satp-u1-question-order-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The two-pass strategy means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read all questions first"
                    },
                    {
                              "id": "b",
                              "text": "answer easy questions first, return to hard ones"
                    },
                    {
                              "id": "c",
                              "text": "do math before reading"
                    },
                    {
                              "id": "d",
                              "text": "skip every other question"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Two-pass",
                              "statement": "Bank easy points first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pass 1: solve what you can quickly; Pass 2: return to flagged hard questions — ensures easy points aren't lost to time pressure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Easy first, return later",
          "commonErrors": [
                    "Attempting questions strictly in order."
          ]
},
        },
        {
          id: "satp-u1-question-order-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "You eliminate 2 of 4 answer choices on a guess. What's your probability of guessing correctly? Enter as decimal (0.5 = 50%).",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Probability",
                              "answer": 0.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Remaining choices",
                              "statement": "2 of 4 remain → 1/2."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Eliminating 2 of 4 leaves 2 choices → $1/2 = 0.5$ chance of correct guess.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 0.5.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0.5",
          "commonErrors": [
                    "Thinking it's still 1/4 — elimination improves odds."
          ]
},
        },
        {
          id: "satp-u1-question-order-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'always guess' is correct strategy even when completely unsure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Expected value",
                              "statement": "Any chance > 0%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "With no penalty, a guess has positive expected value — even 25% chance of +1 point beats 0% for blank; there's no downside to guessing.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compare: blank = guaranteed 0; random guess = 25% chance of 1 point, 75% chance of 0 — expected value is +0.25 points vs 0 for blank.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "With elimination, odds improve further — guessing is strictly dominant strategy when no penalty exists.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Guess always — positive expected value, no downside",
          "commonErrors": [
                    "Leaving blanks 'to be safe'."
          ]
},
        },
      ],
    },
  ],
};
