import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "satp-u3-lesson-3-4",
  code: "3-4",
  title: "Final Preparation Checklist",
  goal: "I CAN complete final preparations and arrive ready on test day.",
  standards: ["SAT S 4.x"],
  vocabulary: [
    { term: "Materials checklist", definition: "ID, calculator, snacks, layers." },
    { term: "Logistics", definition: "Route, arrival time, parking." },
    { term: "Mental prep", definition: "Sleep, mindset, expectations." },
    { term: "Last review", definition: "Light review only — no cramming." },
    { term: "Day-of routine", definition: "Morning routine, arrival, check-in." },
    { term: "Post-test", definition: "What to do after — rest, scores." },
  ],
  concepts: [
    {
      id: "satp-u3-final-checklist",
      title: "Final preparation",
      skill: "Complete final preparations and arrive ready on test day.",
      lesson: {
        sections: [
          {
            heading: "Week before checklist",
            body: "Take one final full practice test to confirm readiness; review error log for any remaining patterns; prepare materials (approved calculator charged/batteries, ID, snacks, layers for variable room temperature). Plan route and arrival time — arrive 30+ minutes early.",
          },
          {
            heading: "Day before and day of",
            body: "Day before: light review only (formula sheet, error patterns), NO new content — then sleep 8+ hours. Day of: eat a real breakfast (protein + complex carbs, not just sugar), arrive early, use the wait time to relax not study. During breaks: walk, breathe, don't review answers.",
          },
        ],
        keyFormulas: [
          { name: "Week before", statement: "Final practice test + materials + logistics" },
          { name: "Day of", statement: "Sleep + real meal + arrive early + relax" },
        ],
        workedExample: {
          problem: "It's the night before the SAT. What should you do?",
          solution: "Light review of formula sheet and error patterns only; NO new practice problems or content; pack materials; set alarm; sleep 8+ hours. The goal is readiness, not last-minute learning.",
        },
      },
      questions: [
        {
          id: "satp-u3-final-checklist-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The night before the SAT, you should ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "study all night"
                    },
                    {
                              "id": "b",
                              "text": "light review then sleep 8+ hours"
                    },
                    {
                              "id": "c",
                              "text": "take another practice test"
                    },
                    {
                              "id": "d",
                              "text": "memorize formulas"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Rest priority",
                              "statement": "Sleep > cramming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Light review + full sleep — fatigue hurts performance more than missing last-minute review; sleep consolidates learning.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Light review + sleep",
          "commonErrors": [
                    "Cramming and losing sleep."
          ]
},
        },
        {
          id: "satp-u3-final-checklist-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should you bring to the SAT?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "everything you own"
                    },
                    {
                              "id": "b",
                              "text": "approved calculator, ID, snacks, layers"
                    },
                    {
                              "id": "c",
                              "text": "only ID"
                    },
                    {
                              "id": "d",
                              "text": "phone for breaks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Materials",
                              "statement": "Essentials only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Approved calculator (familiar one), government ID, snacks/water for break, layers (test center temps vary) — nothing else needed.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Calculator, ID, snacks, layers",
          "commonErrors": [
                    "Bringing unnecessary items or forgetting calculator."
          ]
},
        },
        {
          id: "satp-u3-final-checklist-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Check-in takes 15 minutes and testing starts at 8:00 AM. What time should you arrive?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Arrival",
                              "answer": 7.5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract + buffer",
                              "statement": "8:00 - 15min - buffer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Arrive by 7:30-7:45 for 15-min check-in plus buffer — answer ~7.5 (7:30 AM).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 7.5.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "7.5",
          "commonErrors": [
                    "Arriving exactly at start time."
          ]
},
        },
        {
          id: "satp-u3-final-checklist-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'arrive early' matters beyond just check-in time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Buffer + mindset",
                              "statement": "Time + calm."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Early arrival provides buffer for unexpected delays (traffic, check-in lines) AND mental preparation time — rushing creates anxiety that carries into the test.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The wait time before testing is valuable — use it to relax, review formula sheet mentally, set your mindset; starting flustered hurts first-module performance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Practical: arriving 30+ minutes early means you choose your mental state going in, not reacting to stress.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Buffer for delays + mental prep time",
          "commonErrors": [
                    "Arriving just-in-time and starting stressed."
          ]
},
        },
      ],
    },
  ],
};
