import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "satp-u3-lesson-3-3",
  code: "3-3",
  title: "Tracking Progress and Setting Goals",
  goal: "I CAN measure improvement and set effective goals.",
  standards: ["SAT S 4.x"],
  vocabulary: [
    { term: "Baseline score", definition: "Initial practice test score." },
    { term: "Target score", definition: "Goal score for admissions." },
    { term: "Score gap", definition: "Difference between current and target." },
    { term: "Milestone", definition: "Intermediate goal marking progress." },
    { term: "Score report", definition: "Official SAT score with section breakdown." },
    { term: "Improvement rate", definition: "Points gained per study hour/test." },
  ],
  concepts: [
    {
      id: "satp-u3-progress-tracking",
      title: "Progress tracking",
      skill: "Measure improvement and set effective goals.",
      lesson: {
        sections: [
          {
            heading: "Setting realistic goals",
            body: "Know your target (check college requirements — many are 1200+, competitive schools 1400+). Take a baseline practice test to see where you are; calculate the gap. Set milestones — e.g., +50 points in 2 weeks, +100 in 4 weeks. Track improvement rate to adjust expectations.",
          },
          {
            heading: "Measuring progress",
            body: "Take full practice tests every 1-2 weeks under timed conditions — scores from casual practice don't reflect exam performance. Compare scores over time; analyze whether improvement is happening. If plateauing, change strategy — different error types need different solutions.",
          },
        ],
        keyFormulas: [
          { name: "Gap", statement: "Target - baseline = improvement needed" },
          { name: "Milestones", statement: "Break goal into achievable steps" },
        ],
        workedExample: {
          problem: "Baseline: 1150. Target: 1350. Time: 6 weeks. How to track progress?",
          solution: "Goal: +200 points in 6 weeks (~33/week). Set milestones: 1200 by week 2, 1275 by week 4, 1350 by week 6. Take practice test every 2 weeks to measure; adjust study focus based on error analysis.",
        },
      },
      questions: [
        {
          id: "satp-u3-progress-tracking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A baseline score is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "your final SAT score"
                    },
                    {
                              "id": "b",
                              "text": "your initial practice test score"
                    },
                    {
                              "id": "c",
                              "text": "the average score"
                    },
                    {
                              "id": "d",
                              "text": "your target"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Baseline",
                              "statement": "Starting point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Baseline = initial practice test score — establishes where you start to measure improvement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Starting score",
          "commonErrors": [
                    "Confusing with target or final."
          ]
},
        },
        {
          id: "satp-u3-progress-tracking-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The best way to measure SAT progress is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "counting study hours"
                    },
                    {
                              "id": "b",
                              "text": "taking timed practice tests periodically"
                    },
                    {
                              "id": "c",
                              "text": "asking friends"
                    },
                    {
                              "id": "d",
                              "text": "checking answers immediately"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Progress measurement",
                              "statement": "Timed simulations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Timed full-length practice tests every 1-2 weeks measure actual exam readiness — study hours don't correlate directly with score improvement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Timed practice tests",
          "commonErrors": [
                    "Measuring effort instead of results."
          ]
},
        },
        {
          id: "satp-u3-progress-tracking-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Baseline 1100, target 1300. What's the score gap?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Gap",
                              "answer": 200
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "1300 - 1100."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$1300 - 1100 = 200$ point gap to close.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 200.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "200",
          "commonErrors": [
                    "Adding instead of subtracting."
          ]
},
        },
        {
          id: "satp-u3-progress-tracking-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'milestones' help more than just a final goal.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Milestone motivation",
                              "statement": "Progress visibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A final goal (1350) feels distant and discouraging; milestones (1200 by week 2, 1275 by week 4) make progress visible and provide checkpoints to adjust strategy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Milestones also reveal problems early — if you're at 1150 after 2 weeks (not 1200), you know to change approach rather than discovering failure at week 6.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Psychological benefit: each milestone achieved builds confidence and momentum — small wins sustain long-term effort.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Milestones = visible progress + early warning",
          "commonErrors": [
                    "Only focusing on distant final goal."
          ]
},
        },
      ],
    },
  ],
};
