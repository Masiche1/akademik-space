import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cilgp-u1-lesson-1-3",
  code: "1-3",
  title: "Evaluating Arguments and Solutions",
  goal: "I CAN evaluate arguments and judge which solutions best address an issue.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Evaluation", "Cambridge Global Perspectives skills: evaluation"],
  
  vocabulary: [
    { term: "Evaluation", definition: "Judging quality, effectiveness or worth." },
    { term: "Criteria", definition: "Standards used to judge options." },
    { term: "Trade-off", definition: "Giving up one benefit for another." },
    { term: "Feasibility", definition: "Whether something can realistically be done." },
    { term: "Impact", definition: "Effect a solution has on the issue/stakeholders." },
    { term: "Cost-benefit", definition: "Weighing costs against benefits." },
  ],
  concepts: [
    {
      id: "cilgp-u1-s3-eval",
      title: "Evaluating arguments and solutions",
      skill: "Apply criteria to judge solutions at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Evaluation criteria",
            body: "Judge solutions by: effectiveness (does it solve the problem?), feasibility (can it be done?), cost, equity (who benefits/loses?), sustainability (long-term?), and unintended consequences.",
          },
          {
            heading: "Trade-offs",
            body: "Most solutions involve trade-offs: cheap vs effective, fast vs thorough, local vs global benefit. Good evaluation acknowledges these rather than pretending one option is perfect.",
          },
        ],
        keyFormulas: [
          { name: "Criteria", statement: "effectiveness, feasibility, cost, equity, sustainability" },
          { name: "Trade-off", statement: "benefit A vs benefit B" },
        ],
        workedExample: {
          problem: "Evaluate solutions to plastic pollution: bans vs recycling vs cleanup.",
          solution: "Bans: effective at source, costly enforcement. Recycling: feasible, limited by contamination. Cleanup: treats symptoms. Best: combination — ban single-use + improve recycling.",
        },
      },
      questions: [
        {
          id: "cilgp-u1-ev-q1",
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
          id: "cilgp-u1-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List three criteria for evaluating a solution to a global issue.",
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
                              "reasoning": "e.g. effectiveness, cost, equity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Three valid criteria.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. effectiveness/cost/equity"
},
        },
        {
          id: "cilgp-u1-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate 'solar panels for all homes' as a solution to climate change. One strength, one weakness, one trade-off.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Balanced judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strength: reduces emissions long-term.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weakness: high upfront cost.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Trade-off: cost vs environmental benefit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Balanced evaluation"
},
        },
        {
          id: "cilgp-u1-ev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define evaluation, criteria, trade-off, feasibility, impact, cost-benefit. (b) List 5 evaluation criteria. (c) Why is 'effectiveness' key? (d) What is feasibility? (e) Give an example of equity in a solution. (f) Why consider unintended consequences? (g) Evaluate 'compulsory voting' — strengths and weaknesses. (h) Design criteria to choose a school recycling programme.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Evaluation",
                              "statement": "Criteria-based judgement."
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
                              "reasoning": "(c) Must actually solve the problem.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Realistically achievable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Fair distribution of benefits/harms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Solutions can backfire.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Balanced compulsory voting analysis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid criteria design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Solution evaluation methodology."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-ev-notes",
      title: "Evaluation — notes",
      summary: "Judge solutions by effectiveness, feasibility, cost, equity, sustainability; acknowledge trade-offs.",
      sections: [
        { heading: "Key idea", body: "No perfect solution — evaluation means weighing trade-offs." },
        { heading: "Criteria", body: "Match criteria to the issue being addressed." },
      ],
    },
  ],
};
