import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "satp-u2-lesson-2-3",
  code: "2-3",
  title: "Common SAT Traps and How to Avoid Them",
  goal: "I CAN recognize and avoid common SAT mistakes.",
  standards: ["SAT S 3.x"],
  vocabulary: [
    { term: "Sign errors", definition: "Dropping negative signs — most common math error." },
    { term: "Misreading", definition: "Answering different question than asked." },
    { term: "Careless mistakes", definition: "Arithmetic slips despite knowing method." },
    { term: "Plausible distractors", definition: "Wrong answers designed to trap." },
    { term: "Unit confusion", definition: "Answering in wrong units." },
    { term: "Time pressure", definition: "Rushing causing errors on easy questions." },
  ],
  concepts: [
    {
      id: "satp-u2-common-traps",
      title: "Common traps",
      skill: "Recognize and avoid frequent SAT mistakes.",
      lesson: {
        sections: [
          {
            heading: "Sign errors",
            body: "The #1 math mistake: dropping negatives, flipping inequality signs incorrectly, mishandling negative exponents. Prevention: write out each step, circle negative signs, check sign of final answer before choosing.",
          },
          {
            heading: "Plausible distractors",
            body: "SAT distractors are DESIGNED to trap: answers that result from common errors (sign flip, wrong operation, off-by-one). If your answer matches a distractor pattern, recheck — the 'trap answer' is often the result of the mistake they're testing for.",
          },
        ],
        keyFormulas: [
          { name: "Sign check", statement: "Circle negatives; verify final sign" },
          { name: "Trap awareness", statement: "If answer = common error result, recheck" },
        ],
        workedExample: {
          problem: "Solving $-2x < 6$: you get $x < -3$. Is this right?",
          solution: "WRONG — dividing by -2 (negative) requires FLIPPING: $x > -3$. Check: test x=0: $-2(0) = 0 < 6$ ✓, and 0 > -3 ✓. The unflipped answer fails the test.",
        },
      },
      questions: [
        {
          id: "satp-u2-common-traps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The most common SAT Math error is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "not knowing formulas"
                    },
                    {
                              "id": "b",
                              "text": "sign errors"
                    },
                    {
                              "id": "c",
                              "text": "misreading questions"
                    },
                    {
                              "id": "d",
                              "text": "time management"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Sign errors",
                              "statement": "Most frequent mistake."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sign errors — dropped negatives, unflipped inequalities — are the most common math mistake; prevention: write steps, check signs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sign errors",
          "commonErrors": [
                    "Underestimating sign mistakes."
          ]
},
        },
        {
          id: "satp-u2-common-traps-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Plausible distractors work by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "being obviously wrong"
                    },
                    {
                              "id": "b",
                              "text": "matching common error results"
                    },
                    {
                              "id": "c",
                              "text": "using big numbers"
                    },
                    {
                              "id": "d",
                              "text": "being random"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Trap design",
                              "statement": "Distractors = error results."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Distractors are often the result of common mistakes — if your answer matches a 'trap', you may have made the error they're testing for.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Match error results",
          "commonErrors": [
                    "Not recognizing trap patterns."
          ]
},
        },
        {
          id: "satp-u2-common-traps-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-3x > 12$. Enter the inequality direction: 1 for >, 0 for <.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Direction",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Negative division flips",
                              "statement": "$x < -4$ becomes... wait."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Divide by -3 (negative) → FLIP $>$ to $<$: $x < -4$. Direction is $<$ → 0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Check: x=-5: $-3(-5) = 15 > 12$ ✓ and -5 < -4 ✓. Answer: 0.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Forgetting to flip — would give wrong direction."
          ]
},
        },
        {
          id: "satp-u2-common-traps-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how to use 'checking your work' to catch sign errors specifically.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Verification",
                              "statement": "Substitute back to check."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Substitute your answer back into the original equation — if it doesn't satisfy, you made an error (often sign-related); checking takes 10 seconds and catches most mistakes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "For inequalities, test a value in your solution range — if it fails, your inequality direction is wrong (likely sign error).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Make checking habitual — SAT questions are designed so sign errors produce answers matching distractors; verification catches them before you choose.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Substitute back — catches sign errors in 10 seconds",
          "commonErrors": [
                    "Skipping verification on 'easy' questions."
          ]
},
        },
      ],
    },
  ],
};
