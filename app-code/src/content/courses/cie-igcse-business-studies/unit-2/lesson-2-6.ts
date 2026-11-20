import type { Lesson } from "../../../types.ts";

export const lesson266: Lesson = {
  id: "cieibs-u2-lesson-2-6",
  code: "2-6",
  title: "Business Failure and Decline",
  goal: "I CAN identify causes of business failure and strategies for turnaround.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 2: business failure"],
  
  vocabulary: [
    { term: "Business failure", definition: "Business ceasing operations." },
    { term: "Insolvency", definition: "Inability to pay debts." },
    { term: "Liquidation", definition: "Closing business and selling assets." },
    { term: "Administration", definition: "Protection from creditors while restructuring." },
    { term: "Turnaround", definition: "Actions to rescue failing business." },
    { term: "Failure rate", definition: "Proportion of businesses that fail." },
  ],
  concepts: [
    {
      id: "cieibs-u2-s6-fail",
      title: "Business failure",
      skill: "Understand causes and responses to failure.",
      lesson: {
        sections: [
          {
            heading: "Causes of failure",
            body: "Internal: poor management, inadequate capital, bad products, cash flow problems. External: competition, economic downturn, changing consumer preferences, regulation changes. Most failures in first 5 years.",
          },
          {
            heading: "Failure responses",
            body: "Liquidation: close and sell assets. Administration: protect while restructuring. Turnaround: cost cutting, new management, product changes. Prevention: planning, cash flow management, market research.",
          },
        ],
        keyFormulas: [
          { name: "Insolvency", statement: "can't pay debts" },
          { name: "Liquidation", statement: "close and sell assets" },
          { name: "Turnaround", statement: "rescue failing business" },
        ],
        workedExample: {
          problem: "A restaurant fails after 2 years. What are likely causes and what could have prevented it?",
          solution: "Causes: poor location, insufficient capital, competition, cash flow. Prevention: market research, better planning, adequate funding.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-fl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is business failure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Business ceasing operations"
                    },
                    {
                              "id": "b",
                              "text": "Business expanding"
                    },
                    {
                              "id": "c",
                              "text": "Business merging"
                    },
                    {
                              "id": "d",
                              "text": "Business growing"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Business failure",
                              "statement": "Ceasing operations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Failure = business stops operating.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Ceasing operations"
},
        },
        {
          id: "cieibs-u2-fl-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is insolvency?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Insolvency",
                              "statement": "Can't pay debts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inability to pay debts as they fall due.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Often leads to failure/liquidation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Can't pay debts"
},
        },
        {
          id: "cieibs-u2-fl-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are internal causes of business failure?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Failure causes",
                              "statement": "Internal vs external."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Internal: poor management, inadequate capital, bad products.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cash flow problems, lack of planning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "All internal factors identified.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internal failure causes"
},
        },
        {
          id: "cieibs-u2-fl-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define business failure, insolvency, liquidation, administration, turnaround, failure rate. (b) What is business failure? (c) What is insolvency? (d) What is liquidation? (e) Give 3 internal causes of failure. (f) Give 3 external causes of failure. (g) What is turnaround? (h) Design a prevention strategy for a new business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Business failure",
                              "statement": "Causes, responses, prevention."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Ceasing operations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Can't pay debts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Close and sell assets.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Three valid internal causes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three valid external causes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Actions to rescue business.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid prevention strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Business failure causes and prevention."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-fl-notes",
      title: "Business failure — notes",
      summary: "Failure causes: internal (management, capital) + external (competition, economy). Prevention: planning, cash flow, research.",
      sections: [
        { heading: "Key idea", body: "Most failures occur in first 5 years — planning and cash management critical." },
        { heading: "Turnaround", body: "Rescue strategies: cost cutting, new management, product changes." },
      ],
    },
  ],
};
