import type { Lesson } from "../../../types.ts";

export const lesson104: Lesson = {
  id: "ciegp-u1-lesson-1-4",
  code: "1-4",
  title: "Evaluation and Recommendations",
  goal: "I CAN evaluate solutions and develop evidence-based recommendations for global issues.",
  standards: ["Cambridge IGCSE Global Perspectives 0457: evaluation", "0457: recommendations"],
  
  vocabulary: [
    { term: "Evaluation", definition: "Judging quality/effectiveness of solutions." },
    { term: "Criteria", definition: "Standards for judging options." },
    { term: "Trade-off", definition: "Giving up one benefit for another." },
    { term: "Feasibility", definition: "Whether solution can realistically be implemented." },
    { term: "Recommendation", definition: "Suggested action based on findings." },
    { term: "Cost-benefit", definition: "Weighing costs against benefits." },
  ],
  concepts: [
    {
      id: "ciegp-u1-s4-eval",
      title: "Evaluation and recommendations",
      skill: "Evaluate solutions and recommend actions at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Evaluation framework",
            body: "Judge solutions by: effectiveness (solves problem?), feasibility (can be done?), cost, equity (fair distribution?), sustainability (long-term?), unintended consequences. Acknowledge trade-offs.",
          },
          {
            heading: "Recommendations",
            body: "Base recommendations on evidence: what does research show works? Consider stakeholders, resources, context. Recommendations should be specific, realistic, and justified by findings.",
          },
        ],
        keyFormulas: [
          { name: "Criteria", statement: "effective, feasible, fair, sustainable" },
          { name: "Recommendation", statement: "evidence-based + realistic" },
        ],
        workedExample: {
          problem: "Evaluate solutions to plastic pollution and recommend one.",
          solution: "Bans: effective but costly enforcement. Recycling: feasible but contamination issues. Best: combined approach — ban single-use plastics + improve recycling infrastructure.",
        },
      },
      questions: [
        {
          id: "ciegp-u1-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a trade-off?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Giving up one benefit for another"
                    },
                    {
                              "id": "b",
                              "text": "A type of argument"
                    },
                    {
                              "id": "c",
                              "text": "A research method"
                    },
                    {
                              "id": "d",
                              "text": "A voting system"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trade-off",
                              "statement": "Benefit vs benefit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Trade-offs sacrifice one gain for another.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Giving up one benefit for another"
},
        },
        {
          id: "ciegp-u1-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List three criteria for evaluating solutions to a global issue.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Criteria",
                              "statement": "Evaluation standards."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. effectiveness, feasibility, cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Three valid criteria.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. effective/feasible/cost"
},
        },
        {
          id: "ciegp-u1-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a good recommendation? Give two features.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Recommendations",
                              "statement": "Evidence-based, realistic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Based on evidence/findings.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Realistic and specific.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Considers stakeholders/context.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Evidence-based + realistic + contextual"
},
        },
        {
          id: "ciegp-u1-ev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define evaluation, criteria, trade-off, feasibility, recommendation, cost-benefit. (b) List 5 evaluation criteria. (c) Why is 'effectiveness' key? (d) What is feasibility? (e) Give an example of equity in a solution. (f) Why consider unintended consequences? (g) Evaluate 'carbon tax' — strengths and weaknesses. (h) Design criteria and a recommendation for 'reducing school food waste'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Evaluation",
                              "statement": "Criteria, trade-offs, recommendations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Five valid criteria.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Must actually solve problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Realistically achievable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Fair distribution of benefits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Solutions can backfire.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Balanced carbon tax analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid criteria + recommendation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Solution evaluation and recommendations."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-ev-notes",
      title: "Evaluation — notes",
      summary: "Judge by effectiveness, feasibility, cost, equity, sustainability; recommendations must be evidence-based.",
      sections: [
        { heading: "Key idea", body: "No perfect solution — evaluation means weighing trade-offs." },
        { heading: "Recommendations", body: "Specific, realistic, justified by research findings." },
      ],
    },
  ],
};
