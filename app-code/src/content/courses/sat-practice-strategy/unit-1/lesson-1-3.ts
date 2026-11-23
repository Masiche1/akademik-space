import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "satp-u1-lesson-1-3",
  code: "1-3",
  title: "Strategic Guessing Techniques",
  goal: "I CAN improve guess accuracy through elimination.",
  standards: ["SAT S 1.x"],
  vocabulary: [
    { term: "Elimination", definition: "Ruling out wrong answers to narrow choices." },
    { term: "Plausible distractors", definition: "Wrong answers designed to trap." },
    { term: "Extreme answers", definition: "Often incorrect — 'always', 'never'." },
    { term: "Unit analysis", definition: "Checking if answer has right units." },
    { term: "Reasonableness", definition: "Does the answer make sense?" },
    { term: "Process of elimination", definition: "Systematic removal of wrong options." },
  ],
  concepts: [
    {
      id: "satp-u1-guessing-strategy",
      title: "Guessing strategy",
      skill: "Use elimination and reasonableness checks to improve guesses.",
      lesson: {
        sections: [
          {
            heading: "Elimination tactics",
            body: "Even without solving, you can often eliminate 1-2 choices: **extreme answers** ('always', 'never', '0', 'infinity') are rarely correct; **unit mismatches** (answer in wrong units); **implausible values** (negative when context requires positive). Each elimination improves odds.",
          },
          {
            heading: "Reasonableness check",
            body: "Before guessing, sanity-check: does the magnitude make sense? If solving for a probability, answers must be 0-1; if solving for a count, must be non-negative integer; if solving for time, must be positive. Eliminating impossible answers is powerful.",
          },
        ],
        keyFormulas: [
          { name: "Elimination", statement: "Remove extremes, wrong units, implausible values" },
          { name: "Reasonableness", statement: "Check answer makes sense in context" },
        ],
        workedExample: {
          problem: "Math question: probability of event. Choices: -0.5, 0, 0.3, 1.5. Which can you eliminate?",
          solution: "Probability must be 0-1: eliminate -0.5 (negative) and 1.5 (>1). Remaining: 0 and 0.3 — 50% guess, better than 25%.",
        },
      },
      questions: [
        {
          id: "satp-u1-guessing-strategy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Extreme answers like 'always' or 'never' are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "usually correct"
                    },
                    {
                              "id": "b",
                              "text": "often incorrect — good elimination targets"
                    },
                    {
                              "id": "c",
                              "text": "always wrong"
                    },
                    {
                              "id": "d",
                              "text": "the safest guesses"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Extreme distractors",
                              "statement": "Absolutes usually wrong."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Absolute claims ('always', 'never', 'all', 'none') are frequently incorrect — good candidates for elimination, though not guaranteed.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Often wrong",
          "commonErrors": [
                    "Choosing extremes as safe guesses."
          ]
},
        },
        {
          id: "satp-u1-guessing-strategy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For a probability question, which answer can you ALWAYS eliminate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "0.5"
                    },
                    {
                              "id": "b",
                              "text": "-0.3"
                    },
                    {
                              "id": "c",
                              "text": "0.8"
                    },
                    {
                              "id": "d",
                              "text": "1.0"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Probability range",
                              "statement": "Must be 0-1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Probability is always 0-1 — negative values and values >1 are impossible; $-0.3$ can always be eliminated.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$-0.3$",
          "commonErrors": [
                    "Not knowing probability bounds."
          ]
},
        },
        {
          id: "satp-u1-guessing-strategy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A question asks for number of students. Choices: 12.5, -3, 0, 27. How many can you eliminate?",
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
                              "name": "Count constraint",
                              "statement": "Must be non-negative integer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Student count must be non-negative integer: eliminate 12.5 (not integer) and -3 (negative) → 2 eliminated, leaving 0 and 27.",
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
                    "Forgetting non-negative constraint."
          ]
},
        },
        {
          id: "satp-u1-guessing-strategy-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how 'reasonableness checking' improves guessing accuracy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Sanity check",
                              "statement": "Does answer make sense?"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reasonableness eliminates impossible answers — probability can't be negative, counts can't be fractional, time can't be negative; each constraint removes wrong options.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: solving for 'number of apples' with choices 3.7, -2, 5, 12.5 — only 5 is a plausible count; eliminate 3 others → certain answer.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "This works because SAT distractors are designed to be plausible-sounding but often violate basic constraints — checking feasibility catches them.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Eliminate impossible answers via context constraints",
          "commonErrors": [
                    "Guessing without checking plausibility."
          ]
},
        },
      ],
    },
  ],
};
