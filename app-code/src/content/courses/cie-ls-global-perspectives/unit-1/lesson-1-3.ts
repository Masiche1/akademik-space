import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cilgp-u1-lesson-1-3",
  code: "1-3",
  title: "Evaluating Arguments and Solutions",
  goal: "I CAN evaluate arguments and judge which solutions best address an issue.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Evaluation",
    "Cambridge Global Perspectives skills: evaluation",
  ],

  vocabulary: [
    {
      term: "Evaluation",
      definition: "Judging quality, effectiveness or worth.",
    },
    { term: "Criteria", definition: "Standards used to judge options." },
    { term: "Trade-off", definition: "Giving up one benefit for another." },
    {
      term: "Feasibility",
      definition: "Whether something can realistically be done.",
    },
    {
      term: "Impact",
      definition: "Effect a solution has on the issue/stakeholders.",
    },
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
          {
            name: "Criteria",
            statement:
              "effectiveness, feasibility, cost, equity, sustainability",
          },
          { name: "Trade-off", statement: "benefit A vs benefit B" },
        ],
        workedExample: {
          problem:
            "Evaluate solutions to plastic pollution: bans vs recycling vs cleanup.",
          solution:
            "Bans: effective at source, costly enforcement. Recycling: feasible, limited by contamination. Cleanup: treats symptoms. Best: combination — ban single-use + improve recycling.",
        },
      },
      questions: [
        {
          id: "cilgp-u1-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a trade-off?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of argument",
              },
              {
                id: "b",
                text: "Giving up one benefit for another",
              },
              {
                id: "c",
                text: "A voting system",
              },
              {
                id: "d",
                text: "A research method",
              },
            ],
            correctChoiceId: "b",
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
          id: "cilgp-u1-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List three criteria for evaluating a solution to a global issue.",
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
                reasoning: "e.g. effectiveness, cost, equity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Three valid criteria.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. effectiveness/cost/equity",
          },
        },
        {
          id: "cilgp-u1-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate 'solar panels for all homes' as a solution to climate change. One strength, one weakness, one trade-off.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: reduces emissions long-term.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: high upfront cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trade-off: cost vs environmental benefit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Balanced evaluation",
          },
        },
        {
          id: "cilgp-u1-ev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define evaluation, criteria, trade-off, feasibility, impact, cost-benefit. (b) List 5 evaluation criteria. (c) Why is 'effectiveness' key? (d) What is feasibility? (e) Give an example of equity in a solution. (f) Why consider unintended consequences? (g) Evaluate 'compulsory voting' — strengths and weaknesses. (h) Design criteria to choose a school recycling programme.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Criteria-based judgement.",
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
                reasoning: "(c) Must actually solve the problem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Realistically achievable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Fair distribution of benefits/harms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Solutions can backfire.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Balanced compulsory voting analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid criteria design.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Solution evaluation methodology.",
          },
        },
        {
          id: "cilgp-u1-ev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'feasibility' mean when evaluating a solution?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "How effective it is",
              },
              {
                id: "b",
                text: "How popular it is",
              },
              {
                id: "c",
                text: "How quickly it works",
              },
              {
                id: "d",
                text: "Whether it can realistically be carried out",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feasibility",
                statement: "Realistically achievable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Feasibility asks if resources, time and skills allow it.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Whether it can realistically be done",
          },
        },
        {
          id: "cilgp-u1-ev-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A proposed solution costs £500 but the available budget is £400. What is the shortfall in pounds?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 100,
                unit: "£",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Budget shortfall",
                statement: "Cost minus budget.",
              },
            ],
            steps: [
              {
                reasoning: "500 - 400 = 100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: £100 shortfall.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£100",
          },
        },
        {
          id: "cilgp-u1-ev-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two evaluation criteria for judging solutions to a global issue, and explain one of them.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Criteria",
                statement: "Standards for judging.",
              },
            ],
            steps: [
              {
                reasoning: "Two valid criteria, e.g. cost and equity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valid explanation of one, e.g. equity = fair distribution of benefits and harms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. cost + equity, with explanation",
          },
        },
        {
          id: "cilgp-u1-ev-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which evaluation criterion asks 'who benefits and who loses?'",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Speed",
              },
              {
                id: "b",
                text: "Effectiveness",
              },
              {
                id: "c",
                text: "Equity",
              },
              {
                id: "d",
                text: "Feasibility",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Equity",
                statement: "Fair distribution of impacts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Equity/fairness examines distribution of benefits and harms.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Equity",
          },
        },
        {
          id: "cilgp-u1-ev-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three solutions to a problem are scored out of 10: A = 7, B = 4, C = 9. How many points higher is the best solution than the worst?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
                unit: "points",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Range",
                statement: "Highest minus lowest score.",
              },
            ],
            steps: [
              {
                reasoning: "Best = 9 (C), worst = 4 (B).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "9 - 4 = 5 points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 points",
          },
        },
        {
          id: "cilgp-u1-ev-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate 'free school meals for all students' as a solution to child hunger. Give one strength, one weakness and one trade-off.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Balanced judgement with criteria.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: guarantees nutrition for all, reduces stigma of means-testing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: high ongoing cost for schools/councils.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trade-off: universal benefit vs cost; or equity vs efficiency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Balanced evaluation with trade-off",
          },
        },
        {
          id: "cilgp-u1-ev-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should evaluation consider unintended consequences?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They are always positive",
              },
              {
                id: "b",
                text: "They are required by law only",
              },
              {
                id: "c",
                text: "They make evaluations longer",
              },
              {
                id: "d",
                text: "Solutions can create new problems nobody planned for",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unintended consequences",
                statement: "Solutions can backfire.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Every solution has ripple effects; ignoring them risks failure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Solutions can create unplanned problems",
          },
        },
        {
          id: "cilgp-u1-ev-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A school produces 200 kg of waste per week. A new recycling programme aims to cut this by 30%. What is the target weekly waste in kg?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 140,
                unit: "kg",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage reduction",
                statement: "Original minus reduction.",
              },
            ],
            steps: [
              {
                reasoning: "30% of 200 = 60 kg cut; 200 - 60 = 140.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 140 kg.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "140 kg",
          },
        },
        {
          id: "cilgp-u1-ev-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate 'build a new airport to boost the economy' using three criteria: cost, equity and sustainability.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Criteria-based judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cost: very expensive build plus ongoing maintenance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Equity: benefits businesses/tourists but nearby residents bear noise and pollution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sustainability: increased flights raise emissions — questionable long-term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Costly, inequitable locally, environmentally unsustainable",
          },
        },
        {
          id: "cilgp-u1-ev-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In evaluation, what does 'sustainability' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Being the fastest option",
              },
              {
                id: "b",
                text: "Being the most popular option",
              },
              {
                id: "c",
                text: "Being the cheapest option",
              },
              {
                id: "d",
                text: "Meeting needs without harming future generations",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sustainability",
                statement: "Long-term viability without harm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sustainability asks if benefits last without damaging the future.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Meeting needs without harming the future",
          },
        },
        {
          id: "cilgp-u1-ev-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A solution to plastic pollution benefits 8 of 10 stakeholder groups but harms 2. How many stakeholder groups are affected in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 10,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Stakeholder total",
                statement: "Gainers plus losers.",
              },
            ],
            steps: [
              {
                reasoning: "8 + 2 = 10 groups affected.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "10",
          },
        },
        {
          id: "cilgp-u1-ev-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "(a) Define evaluation and criterion. (b) Name three evaluation criteria. (c) Give one example of an unintended consequence of a solution. (d) Evaluate 'car-free Sundays' — one strength, one weakness, and your overall judgement.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement: "Criteria + judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Evaluation = judging quality; criterion = standard for judging.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Three valid criteria, e.g. cost, effectiveness, equity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid unintended consequence, e.g. congestion on other days or lost trade for shops.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Balanced judgement, e.g. effective for air quality but inconvenient — better as one part of a wider plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Definitions, criteria, consequence and balanced judgement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-ev-notes",
      title: "Evaluation — notes",
      summary:
        "Judge solutions by effectiveness, feasibility, cost, equity, sustainability; acknowledge trade-offs.",
      sections: [
        {
          heading: "Key idea",
          body: "No perfect solution — evaluation means weighing trade-offs.",
        },
        {
          heading: "Criteria",
          body: "Match criteria to the issue being addressed.",
        },
      ],
    },
  ],
};
