import type { Lesson } from "../../../types.ts";

export const lesson28: Lesson = {
  id: "cipg-u2-lesson-2-8",
  code: "2-8",
  title: "Stage 5 — Evaluating Solutions to Global Problems",
  goal: "I CAN evaluate proposed solutions to global issues for feasibility, impact and fairness.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 5: evaluation", "Cambridge Primary Global Perspectives 0838 strand: Evaluation"],
  stage: 5,
  vocabulary: [
    { term: "Feasible", definition: "Possible to actually do." },
    { term: "Sustainable", definition: "Can continue long-term without harm." },
    { term: "Trade-off", definition: "Giving up one thing to get another." },
    { term: "Unintended consequence", definition: "An unexpected result of a solution." },
    { term: "Cost-benefit", definition: "Weighing what a solution costs vs gains." },
    { term: "Equity", definition: "Fairness — does everyone benefit equally?" },
  ],
  concepts: [
    {
      id: "cipg-u2-s5-eval",
      title: "Evaluating solutions",
      skill: "Assess solutions for feasibility, impact, fairness at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Good solutions",
            body: "Evaluate solutions on: Is it feasible (can we actually do it)? Is it sustainable (long-term)? Is it fair (does everyone benefit)? What are the trade-offs and unintended consequences?",
          },
          {
            heading: "Trade-offs",
            body: "Every solution has costs: banning cars reduces pollution but limits travel; organic food is healthier but expensive. Good evaluation weighs costs vs benefits honestly.",
          },
        ],
        keyFormulas: [
          { name: "Feasible", statement: "can actually be done" },
          { name: "Trade-off", statement: "cost given for benefit" },
          { name: "Equity", statement: "fairness across all affected" },
        ],
        workedExample: {
          problem: "Evaluate 'ban all plastic bags' as a solution to plastic pollution.",
          solution: "Pros: reduces waste. Cons: cost to alternatives, affects small businesses, may shift problem. Feasible if alternatives exist; needs phased rollout.",
        },
      },
      questions: [
        {
          id: "cipg-u2-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a solution feasible?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It can actually be done with available resources"
                    },
                    {
                              "id": "b",
                              "text": "It sounds exciting"
                    },
                    {
                              "id": "c",
                              "text": "It's free"
                    },
                    {
                              "id": "d",
                              "text": "Everyone agrees"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Feasible",
                              "statement": "Practical to implement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Feasible = realistically achievable.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Can actually be done"
},
        },
        {
          id: "cipg-u2-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a trade-off? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trade-off",
                              "statement": "Cost for benefit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Giving up one thing to gain another.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. cycling saves money but takes longer.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cost for benefit; e.g. cycling"
},
        },
        {
          id: "cipg-u2-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate 'plant more trees to fight climate change' — one benefit, one limitation, one unintended consequence.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Solution evaluation",
                              "statement": "Pros, cons, unintended."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit: absorbs CO₂, cools areas.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limitation: takes time, needs land/water.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unintended: wrong species could harm ecosystems.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Benefit+limitation+unintended"
},
        },
        {
          id: "cipg-u2-ev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define feasible, sustainable, trade-off, unintended consequence, cost-benefit, equity. (b) Evaluate 'ban homework' for student wellbeing. (c) What is a trade-off here? (d) Who might be disadvantaged? (e) What unintended consequence could arise? (f) Is it feasible? (g) Compare two solutions to plastic pollution. (h) Design an evaluation framework for any solution.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Solution evaluation",
                              "statement": "Feasibility, trade-offs, equity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Balanced evaluation of homework ban.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Wellbeing vs learning/revision.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Students needing practice, parents wanting structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Less practice, parent frustration.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Politically difficult but possible.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Two solutions compared fairly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Reusable evaluation framework.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Evaluating solutions: feasibility, trade-offs, equity."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-ev-notes",
      title: "Evaluating solutions — notes",
      summary: "Check feasibility, sustainability, equity. Weigh trade-offs and unintended consequences.",
      sections: [
        { heading: "Key idea", body: "Good solutions balance benefits and costs across all stakeholders." },
        { heading: "Watch", body: "Unintended consequences can undo good intentions." },
      ],
    },
  ],
};
