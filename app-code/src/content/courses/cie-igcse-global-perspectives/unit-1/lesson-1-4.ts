import type { Lesson } from "../../../types.ts";

export const lesson104: Lesson = {
  id: "ciegp-u1-lesson-1-4",
  code: "1-4",
  title: "Evaluation and Recommendations",
  goal: "I CAN evaluate solutions and develop evidence-based recommendations for global issues.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: evaluation",
    "0457: recommendations",
  ],

  vocabulary: [
    {
      term: "Evaluation",
      definition: "Judging quality/effectiveness of solutions.",
    },
    { term: "Criteria", definition: "Standards for judging options." },
    { term: "Trade-off", definition: "Giving up one benefit for another." },
    {
      term: "Feasibility",
      definition: "Whether solution can realistically be implemented.",
    },
    {
      term: "Recommendation",
      definition: "Suggested action based on findings.",
    },
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
          {
            name: "Criteria",
            statement: "effective, feasible, fair, sustainable",
          },
          { name: "Recommendation", statement: "evidence-based + realistic" },
        ],
        workedExample: {
          problem: "Evaluate solutions to plastic pollution and recommend one.",
          solution:
            "Bans: effective but costly enforcement. Recycling: feasible but contamination issues. Best: combined approach — ban single-use plastics + improve recycling infrastructure.",
        },
      },
      questions: [
        {
          id: "ciegp-u1-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a trade-off?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A research method",
              },
              {
                id: "b",
                text: "A voting system",
              },
              {
                id: "c",
                text: "A type of argument",
              },
              {
                id: "d",
                text: "Giving up one benefit for another",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade-off",
                statement: "Benefit vs benefit.",
              },
            ],
            steps: [
              {
                reasoning: "Trade-offs sacrifice one gain for another.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Giving up one benefit for another",
          },
        },
        {
          id: "ciegp-u1-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List three criteria for evaluating solutions to a global issue.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Criteria",
                statement: "Evaluation standards.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. effectiveness, feasibility, cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Three valid criteria.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. effective/feasible/cost",
          },
        },
        {
          id: "ciegp-u1-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a good recommendation? Give two features.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Recommendations",
                statement: "Evidence-based, realistic.",
              },
            ],
            steps: [
              {
                reasoning: "Based on evidence/findings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Realistic and specific.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Considers stakeholders/context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Evidence-based + realistic + contextual",
          },
        },
        {
          id: "ciegp-u1-ev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define evaluation, criteria, trade-off, feasibility, recommendation, cost-benefit. (b) List 5 evaluation criteria. (c) Why is 'effectiveness' key? (d) What is feasibility? (e) Give an example of equity in a solution. (f) Why consider unintended consequences? (g) Evaluate 'carbon tax' — strengths and weaknesses. (h) Design criteria and a recommendation for 'reducing school food waste'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Criteria, trade-offs, recommendations.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Five valid criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Must actually solve problem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Realistically achievable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Fair distribution of benefits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Solutions can backfire.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Balanced carbon tax analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid criteria + recommendation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Solution evaluation and recommendations.",
          },
        },
        {
          id: "ciegp-u1-ev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Feasibility means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Whether a solution can realistically be implemented",
              },
              {
                id: "b",
                text: "Whether a solution is cheap",
              },
              {
                id: "c",
                text: "Whether a solution is new",
              },
              {
                id: "d",
                text: "Whether a solution is popular",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feasibility",
                statement: "Realistically implementable.",
              },
            ],
            steps: [
              {
                reasoning: "Feasibility = can it realistically be done.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Can realistically be implemented",
          },
        },
        {
          id: "ciegp-u1-ev-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is it important to consider equity when evaluating a solution?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equity",
                statement: "Fair distribution of benefits and costs.",
              },
            ],
            steps: [
              {
                reasoning: "Solutions that only help the wealthy or powerful widen inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fairness affects whether the solution will be accepted and last.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Avoid widening inequality; affects acceptance and durability",
          },
        },
        {
          id: "ciegp-u1-ev-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which evaluation criterion asks 'will this still work in 20 years?'",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cost",
              },
              {
                id: "b",
                text: "Popularity",
              },
              {
                id: "c",
                text: "Sustainability",
              },
              {
                id: "d",
                text: "Speed",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability",
                statement: "Long-term viability.",
              },
            ],
            steps: [
              {
                reasoning: "Sustainability = long-term effectiveness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sustainability",
          },
        },
        {
          id: "ciegp-u1-ev-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate 'banning all cars from city centres' using three evaluation criteria.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Apply criteria to a solution.",
              },
            ],
            steps: [
              {
                reasoning: "Effectiveness: cuts emissions and congestion but may displace traffic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Feasibility/equity: hard to enforce; hurts disabled and low-income commuters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unintended consequences/sustainability: needs public transport alternatives first.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Effective but needs enforcement + equity + alternatives",
          },
        },
        {
          id: "ciegp-u1-ev-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recommendation should be:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Evidence-based, specific and realistic",
              },
              {
                id: "b",
                text: "Identical for every issue",
              },
              {
                id: "c",
                text: "As ambitious as possible",
              },
              {
                id: "d",
                text: "Unrelated to the findings",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Recommendations",
                statement: "Evidence-based + realistic.",
              },
            ],
            steps: [
              {
                reasoning: "Good recommendations follow from findings and are achievable.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Evidence-based, specific and realistic",
          },
        },
        {
          id: "ciegp-u1-ev-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might the 'best' solution on paper fail in practice? Give two reasons with an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Feasibility",
                statement: "Paper solutions vs real-world constraints.",
              },
            ],
            steps: [
              {
                reasoning: "Costs or resources may be unavailable in the context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Stakeholders may resist or game the solution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. recycling schemes fail where no collection infrastructure exists.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Resource limits + stakeholder resistance — example given",
          },
        },
        {
          id: "ciegp-u1-ev-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cost-benefit analysis in simple terms?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cost-benefit",
                statement: "Weighing costs against benefits.",
              },
            ],
            steps: [
              {
                reasoning: "List the costs and the benefits of each option.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judge whether benefits outweigh costs overall.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Weigh costs against benefits",
          },
        },
        {
          id: "ciegp-u1-ev-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate 'offering cash incentives for organ donation' as a solution to organ shortage, considering at least three criteria.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Deep evaluation",
                statement: "Multiple criteria applied.",
              },
            ],
            steps: [
              {
                reasoning: "Effectiveness: may raise donations but could distort motivations or exploit poor donors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equity: targets likely the poor, raising ethical concerns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Feasibility/legality: banned in many countries; hard to regulate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: ethically contested; alternatives like opt-out systems may be fairer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Effective but ethically/legally problematic; alternatives exist",
          },
        },
        {
          id: "ciegp-u1-ev-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An unintended consequence is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "An unexpected negative effect of a solution",
              },
              {
                id: "b",
                text: "The main cost of a solution",
              },
              {
                id: "c",
                text: "A planned benefit of a solution",
              },
              {
                id: "d",
                text: "A type of recommendation",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unintended consequence",
                statement: "Unexpected effect of solution.",
              },
            ],
            steps: [
              {
                reasoning: "Unintended consequences are unplanned effects, often harmful.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unexpected negative effect",
          },
        },
        {
          id: "ciegp-u1-ev-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should recommendations be specific rather than vague? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Recommendations",
                statement: "Specific and actionable.",
              },
            ],
            steps: [
              {
                reasoning: "Specific actions can actually be implemented and checked.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. 'schools should improve recycling' vs 'install labelled bins in all canteens by September'.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Actionable and checkable — example given",
          },
        },
        {
          id: "ciegp-u1-ev-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the strongest evaluation criterion set for comparing solutions?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Newness, novelty and trendiness",
              },
              {
                id: "b",
                text: "Size, weight and location",
              },
              {
                id: "c",
                text: "Popularity, speed and colour",
              },
              {
                id: "d",
                text: "Effectiveness, feasibility, cost, equity, sustainability",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation criteria",
                statement: "Effective, feasible, fair, sustainable.",
              },
            ],
            steps: [
              {
                reasoning: "The five standard criteria cover the key dimensions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Effectiveness, feasibility, cost, equity, sustainability",
          },
        },
        {
          id: "ciegp-u1-ev-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare two solutions to traffic congestion — 'build more roads' and 'invest in public transport' — using at least four evaluation criteria, then recommend one.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative evaluation",
                statement: "Weigh options across criteria.",
              },
            ],
            steps: [
              {
                reasoning: "Effectiveness: roads induce more traffic; transit reduces cars directly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cost: roads cheaper upfront; transit costly but long-term savings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equity/environment: roads favour car owners; transit serves more people, cuts emissions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sustainability: transit investment lasts; road capacity fills again.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recommendation justified — e.g. prioritise transit with road pricing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Transit wins on equity/sustainability; recommend combined approach",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-ev-notes",
      title: "Evaluation — notes",
      summary:
        "Judge by effectiveness, feasibility, cost, equity, sustainability; recommendations must be evidence-based.",
      sections: [
        {
          heading: "Key idea",
          body: "No perfect solution — evaluation means weighing trade-offs.",
        },
        {
          heading: "Recommendations",
          body: "Specific, realistic, justified by research findings.",
        },
      ],
    },
  ],
};
