import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "satp-u1-lesson-1-4",
  code: "1-4",
  title: "Exam Preparation and Readiness",
  goal: "I CAN prepare effectively and manage exam-day factors.",
  standards: ["SAT S 2.x"],
  vocabulary: [
    { term: "Preparation", definition: "Study and practice before exam day." },
    { term: "Practice tests", definition: "Full-length timed simulations." },
    { term: "Weakness analysis", definition: "Identifying and targeting problem areas." },
    { term: "Exam-day readiness", definition: "Sleep, nutrition, logistics." },
    { term: "Anxiety management", definition: "Techniques for staying calm." },
    { term: "Test familiarity", definition: "Knowing format and rules beforehand." },
  ],
  concepts: [
    {
      id: "satp-u1-exam-prep",
      title: "Exam preparation",
      skill: "Prepare effectively and manage exam-day factors.",
      lesson: {
        sections: [
          {
            heading: "Effective preparation",
            body: "**Practice tests** under timed conditions are the highest-value prep — they build stamina, reveal weaknesses, and familiarize you with format. After each practice test, analyze errors BY TYPE (content gap vs careless mistake vs time pressure) — different problems need different solutions.",
          },
          {
            heading: "Exam-day factors",
            body: "Sleep matters more than last-minute cramming — fatigue hurts performance more than missing review. Eat before the exam (low sugar, steady energy). Arrive early, know the check-in process. Anxiety is normal — have a reset routine (deep breaths, re-read question) for when you feel stuck.",
          },
        ],
        keyFormulas: [
          { name: "Practice", statement: "Timed full-length tests + error analysis" },
          { name: "Readiness", statement: "Sleep + nutrition + logistics + anxiety plan" },
        ],
        workedExample: {
          problem: "You missed 8 questions on a practice test: 5 math content gaps, 2 careless errors, 1 timeout. How should you prepare?",
          solution: "Prioritize the 5 content gaps (real learning needed); review careless-error patterns (check work); practice pacing for timeouts (two-pass strategy). Don't just 'study more' — target the specific failure types.",
        },
      },
      questions: [
        {
          id: "satp-u1-exam-prep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The most valuable SAT preparation is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "reading SAT books"
                    },
                    {
                              "id": "b",
                              "text": "timed full-length practice tests"
                    },
                    {
                              "id": "c",
                              "text": "memorizing formulas"
                    },
                    {
                              "id": "d",
                              "text": "studying the night before"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Practice testing",
                              "statement": "Timed simulation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Full-length timed practice tests build stamina, reveal weaknesses, and familiarize format — highest-value prep activity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Timed practice tests",
          "commonErrors": [
                    "Passive review without simulation."
          ]
},
        },
        {
          id: "satp-u1-exam-prep-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Analyzing practice test errors by TYPE helps because ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "it's required"
                    },
                    {
                              "id": "b",
                              "text": "different error types need different solutions"
                    },
                    {
                              "id": "c",
                              "text": "it looks thorough"
                    },
                    {
                              "id": "d",
                              "text": "it saves time"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Error analysis",
                              "statement": "Content vs careless vs pacing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Content gaps need learning; careless errors need checking habits; timeouts need pacing strategy — treating all errors the same wastes effort.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Different errors, different fixes",
          "commonErrors": [
                    "Just counting total wrong answers."
          ]
},
        },
        {
          id: "satp-u1-exam-prep-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "On a practice test you got 45/54 RW and 38/44 Math. What's your total correct?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Total",
                              "answer": 83
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add scores",
                              "statement": "45 + 38."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$45 + 38 = 83$ total correct answers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 83.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "83",
          "commonErrors": [
                    "Arithmetic slip in addition."
          ]
},
        },
        {
          id: "satp-u1-exam-prep-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is sleep more important than last-minute cramming the night before the SAT?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Readiness vs fatigue",
                              "statement": "Rest enables performance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sleep deprivation impairs working memory, attention, and processing speed — exactly the cognitive skills the SAT tests; a tired brain underperforms regardless of preparation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cramming has diminishing returns — you won't learn much in one night, but you WILL lose sleep; better to sleep well and rely on prior preparation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The night before: light review only, then sleep — performance depends on being rested, not cramming.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sleep > cramming — fatigue kills performance",
          "commonErrors": [
                    "Sacrificing sleep for last-minute review."
          ]
},
        },
      ],
    },
  ],
};
