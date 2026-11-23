import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "satp-u1-lesson-1-5",
  code: "1-5",
  title: "Score Strategy and Priorities",
  goal: "I CAN prioritize preparation based on score goals.",
  standards: ["SAT S 2.x"],
  vocabulary: [
    { term: "Score goal", definition: "Target score for college admissions." },
    { term: "Section scores", definition: "RW and Math each 200-800." },
    { term: "Superscore", definition: "Best section scores across test dates." },
    { term: "Improvement potential", definition: "Where gains are most achievable." },
    { term: "Diminishing returns", definition: "Harder to gain points at high scores." },
    { term: "Preparation priority", definition: "Focus on highest-impact areas." },
  ],
  concepts: [
    {
      id: "satp-u1-score-strategy",
      title: "Score strategy",
      skill: "Prioritize preparation for maximum score improvement.",
      lesson: {
        sections: [
          {
            heading: "Understanding scores",
            body: "Total score = RW (200-800) + Math (200-800) = 400-1600. Each section has its own score; colleges see section scores separately. **Superscoring**: many colleges take your BEST section scores across multiple test dates — retaking to improve one section while keeping the other is a valid strategy.",
          },
          {
            heading: "Improvement strategy",
            body: "Focus on highest-impact areas: if RW is much weaker than Math, prioritize RW (bigger potential gain); if both similar, work on whichever has more 'easy points' — careless errors, time management, question-type weaknesses. At high scores, gains are harder (diminishing returns) — at lower scores, basic content gaps offer big improvements.",
          },
        ],
        keyFormulas: [
          { name: "Total", statement: "RW + Math = 400-1600" },
          { name: "Superscore", statement: "Best section scores across dates" },
        ],
        workedExample: {
          problem: "Your scores: RW 600, Math 700 (total 1300). Should you retake?",
          solution: "Depends on goal — if target is 1400+, yes; focus on RW (bigger gap to improve). Superscoring means you keep Math 700 even if it drops to 680 — only need RW improvement.",
        },
      },
      questions: [
        {
          id: "satp-u1-score-strategy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Superscoring means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "averaging all attempts"
                    },
                    {
                              "id": "b",
                              "text": "taking best section scores across test dates"
                    },
                    {
                              "id": "c",
                              "text": "canceling low scores"
                    },
                    {
                              "id": "d",
                              "text": "doubling scores"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Superscore",
                              "statement": "Best sections combined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Superscoring combines your BEST RW and BEST Math scores from different test dates — retakes can improve total without risking previous scores.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Best sections combined",
          "commonErrors": [
                    "Thinking all scores average or count."
          ]
},
        },
        {
          id: "satp-u1-score-strategy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If RW=550 and Math=720, where should you focus prep?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Math — already high"
                    },
                    {
                              "id": "b",
                              "text": "RW — bigger improvement potential"
                    },
                    {
                              "id": "c",
                              "text": "Both equally"
                    },
                    {
                              "id": "d",
                              "text": "Neither — retake blindly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Prioritization",
                              "statement": "Focus weakest section."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RW at 550 has more room to improve than Math at 720 — focus on the weaker section for biggest score gain.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "RW",
          "commonErrors": [
                    "Studying the already-strong section."
          ]
},
        },
        {
          id: "satp-u1-score-strategy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your best scores: RW 620 (attempt 1), Math 680 (attempt 2). What's your superscore?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Superscore",
                              "answer": 1300
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Add best sections",
                              "statement": "620 + 680."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Superscore = best RW (620) + best Math (680) = 1300.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 1300.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1300",
          "commonErrors": [
                    "Averaging or picking one date only."
          ]
},
        },
        {
          id: "satp-u1-score-strategy-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain 'diminishing returns' in SAT score improvement.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Diminishing returns",
                              "statement": "Harder gains at high scores."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "At lower scores, basic gaps (content knowledge, pacing) offer big improvements — fixing fundamentals gains many points; at high scores, remaining errors are subtle and hard-won — each additional point requires more effort.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: going from 1000→1100 is easier than 1400→1450 — the first fixes big gaps, the second requires perfection on hardest questions.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Strategy implication: if far below target, broad prep helps; if near target, targeted work on specific question types matters more.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Easy gains at low scores; harder at high scores",
          "commonErrors": [
                    "Expecting linear improvement effort."
          ]
},
        },
      ],
    },
  ],
};
