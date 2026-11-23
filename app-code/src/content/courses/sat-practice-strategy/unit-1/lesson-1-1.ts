import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "satp-u1-lesson-1-1",
  code: "1-1",
  title: "Time Management on the SAT",
  goal: "I CAN allocate time effectively across SAT sections.",
  standards: ["SAT S 1.x"],
  vocabulary: [
    { term: "Time allocation", definition: "Dividing available minutes across questions." },
    { term: "Pacing", definition: "Maintaining consistent speed throughout." },
    { term: "Skip and return", definition: "Moving past hard questions to easier ones." },
    { term: "Time check", definition: "Monitoring progress at intervals." },
    { term: "Buffer time", definition: "Reserving minutes for review." },
    { term: "Digital SAT timing", definition: "Section-based timing — fixed time per module." },
  ],
  concepts: [
    {
      id: "satp-u1-time-management",
      title: "Time management",
      skill: "Allocate and monitor time effectively during the exam.",
      lesson: {
        sections: [
          {
            heading: "The digital SAT structure",
            body: "The digital SAT has two sections (Reading & Writing, Math) each split into two modules of equal length — adaptive difficulty adjusts in module 2 based on module 1 performance. Each module has fixed time; pace yourself per module, not the whole section.",
          },
          {
            heading: "Pacing strategy",
            body: "Calculate seconds-per-question at the start: Reading & Writing ~71 seconds/question, Math ~95 seconds/question (varies by module). Check the clock every 10 questions — if behind, speed up; if ahead, maintain accuracy. Never let one hard question eat 3 minutes — skip and return.",
          },
        ],
        keyFormulas: [
          { name: "Pacing", statement: "Seconds/question = total time ÷ question count" },
          { name: "Checkpoints", statement: "Every 10 questions, verify pace" },
        ],
        workedExample: {
          problem: "RW module has 27 questions in 32 minutes. How many seconds per question?",
          solution: "32 minutes = 1920 seconds; 1920 ÷ 27 ≈ 71 seconds per question. Check pace every ~10 questions (about every 12 minutes).",
        },
      },
      questions: [
        {
          id: "satp-u1-time-management-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The digital SAT adapts ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "question order randomly"
                    },
                    {
                              "id": "b",
                              "text": "module 2 difficulty based on module 1 performance"
                    },
                    {
                              "id": "c",
                              "text": "time limits per question"
                    },
                    {
                              "id": "d",
                              "text": "the subject"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Adaptive testing",
                              "statement": "Module 2 adjusts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The digital SAT is adaptive — module 2 difficulty depends on module 1 performance; strong module 1 → harder module 2.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Module 2 adapts",
          "commonErrors": [
                    "Thinking it's fixed-form like paper SAT."
          ]
},
        },
        {
          id: "satp-u1-time-management-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you're spending 3 minutes on one question, you should ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "keep working — it's important"
                    },
                    {
                              "id": "b",
                              "text": "skip and return later"
                    },
                    {
                              "id": "c",
                              "text": "guess randomly"
                    },
                    {
                              "id": "d",
                              "text": "move to next section"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Time discipline",
                              "statement": "Hard questions cost time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "3 minutes on one question threatens pacing for all others — skip, mark it, return if time permits; most questions are solvable in under 90 seconds.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Skip and return",
          "commonErrors": [
                    "Letting one question consume disproportionate time."
          ]
},
        },
        {
          id: "satp-u1-time-management-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A Math module has 22 questions in 35 minutes. How many seconds per question (round to nearest whole)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Seconds",
                              "answer": 95
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Convert and divide",
                              "statement": "35 min = 2100 sec; ÷ 22."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2100 \\div 22 \\approx 95.5$ → about 95 seconds per question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 95.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "95",
          "commonErrors": [
                    "Forgetting to convert minutes to seconds."
          ]
},
        },
        {
          id: "satp-u1-time-management-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'checking the clock every 10 questions' matters more than checking constantly.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Checkpoint pacing",
                              "statement": "Periodic monitoring."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Constant clock-watching causes anxiety and distraction; checkpoints every ~10 questions give enough data to adjust pacing without obsessing — if behind at checkpoint, you have time to speed up.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The checkpoint system works because pacing errors compound — catching a 2-question deficit early prevents a 10-question crisis later.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Practical: know your per-question pace at start, then verify at intervals rather than every question.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Periodic checks balance awareness vs distraction",
          "commonErrors": [
                    "Obsessing over clock every question."
          ]
},
        },
      ],
    },
  ],
};
