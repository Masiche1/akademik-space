import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "cilgp-u2-lesson-2-3",
  code: "2-3",
  title: "Solution Evaluation at Depth",
  goal: "I CAN evaluate complex solutions considering all stakeholders, costs and long-term effects.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 strand: Evaluation",
    "Cambridge Global Perspectives skills: evaluation",
  ],
  stage: 9,
  vocabulary: [
    {
      term: "Stakeholder analysis",
      definition: "Mapping who is affected and how.",
    },
    {
      term: "Unintended consequence",
      definition: "Unexpected negative/positive effect.",
    },
    {
      term: "Opportunity cost",
      definition: "What you give up choosing one option.",
    },
    { term: "Long-term impact", definition: "Effects over years/decades." },
    {
      term: "Risk assessment",
      definition: "Identifying and weighing potential harms.",
    },
    {
      term: "Synergy",
      definition: "Combined solutions working better together.",
    },
  ],
  concepts: [
    {
      id: "cilgp-u2-s3-deepeval",
      title: "Deep solution evaluation",
      skill:
        "Evaluate solutions with stakeholder, cost and long-term analysis at Stage 9.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive evaluation",
            body: "Map all stakeholders: who gains, who loses, who's excluded? Assess costs (financial, social, environmental) and benefits. Consider unintended consequences — solutions often create new problems.",
          },
          {
            heading: "Long-term thinking",
            body: "Short-term fixes may worsen long-term problems. Evaluate sustainability: will this still work in 20 years? Often, combined approaches (synergy) outperform single solutions.",
          },
        ],
        keyFormulas: [
          { name: "Stakeholder map", statement: "who gains/loses/is excluded" },
          { name: "Opportunity cost", statement: "best alternative forgone" },
        ],
        workedExample: {
          problem:
            "Evaluate 'carbon tax' for climate change — stakeholders, costs, long-term.",
          solution:
            "Gains: emission reduction, green investment. Loses: low-income households, fossil industries. Long-term: effective if revenue recycled to vulnerable groups.",
        },
      },
      questions: [
        {
          id: "cilgp-u2-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an unintended consequence?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A planned outcome",
              },
              {
                id: "b",
                text: "A voting result",
              },
              {
                id: "c",
                text: "A type of cost",
              },
              {
                id: "d",
                text: "Unexpected effect of a solution",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unintended consequence",
                statement: "Unexpected effect.",
              },
            ],
            steps: [
              {
                reasoning: "Solutions can have unplanned effects.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unexpected effect",
          },
        },
        {
          id: "cilgp-u2-de-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is stakeholder analysis and why do it before choosing a solution?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stakeholder analysis",
                statement: "Map affected parties.",
              },
            ],
            steps: [
              {
                reasoning: "Identify who gains/loses/is excluded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ensures equitable, informed choice.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Map affected parties for equity",
          },
        },
        {
          id: "cilgp-u2-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a short-term solution worsen a long-term problem? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Long-term thinking",
                statement: "Short vs long term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. cheap plastic bans → black market alternatives worse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Quick fixes ignore systemic causes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Long-term evaluation needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Short-term fixes can backfire",
          },
        },
        {
          id: "cilgp-u2-de-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define stakeholder analysis, unintended consequence, opportunity cost, long-term impact, risk assessment, synergy. (b) Map stakeholders for 'build more roads to reduce traffic'. (c) What unintended consequence might roads cause? (d) What is opportunity cost of choosing roads over public transport? (e) Evaluate long-term sustainability of road-building. (f) Give an example of solution synergy. (g) How does risk assessment work? (h) Design a combined solution to traffic congestion.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Deep evaluation",
                statement: "Stakeholders, costs, long-term.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Valid stakeholder map.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) e.g. more cars → more emissions/pollution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Lost opportunity for better transit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Induced demand — roads fill up again.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) e.g. roads+transit+pricing together.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Identify+weigh potential harms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid combined solution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Comprehensive solution evaluation.",
          },
        },
        {
          id: "cilgp-u2-de-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is opportunity cost?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of tax",
              },
              {
                id: "b",
                text: "A research method",
              },
              {
                id: "c",
                text: "The best alternative you give up when choosing an option",
              },
              {
                id: "d",
                text: "The upfront price of a solution",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity cost",
                statement: "Best alternative forgone.",
              },
            ],
            steps: [
              {
                reasoning: "Every choice sacrifices the next-best option.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Best alternative forgone",
          },
        },
        {
          id: "cilgp-u2-de-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A budget is $300,000. Solution A costs $200,000 and Solution B costs $350,000. How many of the two solutions are affordable?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Affordability",
                statement: "Cost must not exceed budget.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only A ($200k) fits the $300k budget; B ($350k) does not.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cilgp-u2-de-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two types of cost of a solution beyond money, with an example of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-financial costs",
                statement: "Social and environmental costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. social cost: disruption to communities during construction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. environmental cost: habitat loss or emissions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. social disruption + environmental damage",
          },
        },
        {
          id: "cilgp-u2-de-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is synergy when evaluating solutions?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A budget category",
              },
              {
                id: "b",
                text: "A single perfect fix",
              },
              {
                id: "c",
                text: "Combined solutions working better together than separately",
              },
              {
                id: "d",
                text: "A type of conflict",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synergy",
                statement: "1+1 > 2 effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Synergy means combined approaches outperform single ones.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Solutions working better together",
          },
        },
        {
          id: "cilgp-u2-de-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A proposed carbon tax benefits 3 stakeholder groups and harms 2. How many stakeholder groups are affected in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Stakeholder total",
                statement: "Gainers + losers.",
              },
            ],
            steps: [
              {
                reasoning: "3 + 2 = 5 groups.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 5.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cilgp-u2-de-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one unintended consequence of banning single-use plastic bags and suggest a way to mitigate it.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unintended consequences",
                statement: "Solutions create new problems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Valid consequence, e.g. people buy more thicker plastic bags, or hygiene issues if reusable bags not washed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains mechanism of the backfire.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valid mitigation, e.g. provide cheap reusable bags or public education.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. thicker bag sales rise; mitigate with cheap reusables",
          },
        },
        {
          id: "cilgp-u2-de-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should you map all stakeholders before choosing a solution?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To see who gains, who loses and who is excluded",
              },
              {
                id: "b",
                text: "It is only needed for business projects",
              },
              {
                id: "c",
                text: "To make the project longer",
              },
              {
                id: "d",
                text: "To avoid making any decision",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Stakeholder analysis",
                statement: "Map affected parties.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mapping reveals distribution of costs and benefits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "To see who gains, loses and is excluded",
          },
        },
        {
          id: "cilgp-u2-de-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A risk assessment scores Solution X at risk level 3 out of 5 and Solution Y at 4 out of 5. What is the difference in risk level?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1,
                unit: "points",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Risk difference",
                statement: "Higher minus lower risk score.",
              },
            ],
            steps: [
              {
                reasoning: "4 - 3 = 1 point difference.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 1 point.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1 point",
          },
        },
        {
          id: "cilgp-u2-de-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate 'universal free internet for all citizens' as a solution to the digital divide. Consider cost, equity and one long-term or unintended effect.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deep evaluation",
                statement: "Cost, equity, long-term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cost: very expensive infrastructure and maintenance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equity: powerful equaliser for poor/rural users.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Long-term/unintended: may widen inequality further if quality differs, or strain public budgets.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "High cost, high equity benefit, sustainability concerns",
          },
        },
        {
          id: "cilgp-u2-de-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best shows long-term thinking in evaluation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "'Is this cheap this month?'",
              },
              {
                id: "b",
                text: "'Will this still work in 20 years?'",
              },
              {
                id: "c",
                text: "'Did it work yesterday?'",
              },
              {
                id: "d",
                text: "'Is this popular right now?'",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Long-term thinking",
                statement: "20-year test.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Long-term evaluation asks about durability over decades.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "'Will this still work in 20 years?'",
          },
        },
        {
          id: "cilgp-u2-de-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two transport measures are tested separately and together: Measure A alone cuts emissions 10%, Measure B alone cuts 15%, and together they cut 30%. By how many percentage points does the combination beat the sum of the separate effects?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
                unit: "percentage points",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Synergy calculation",
                statement: "Combined minus sum of separate.",
              },
            ],
            steps: [
              {
                reasoning: "Sum of separate: 10 + 15 = 25%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combined = 30%; difference = 30 - 25.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 5 percentage points of synergy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5 percentage points",
          },
        },
        {
          id: "cilgp-u2-de-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate 'congestion charging for city centres' comprehensively: (a) two stakeholder groups who gain and one who loses, (b) one unintended consequence, (c) one opportunity cost, (d) your overall judgement.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Deep evaluation",
                statement: "Stakeholders, consequences, costs, judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Valid stakeholders, e.g. gains: bus users, city air quality; loses: low-income drivers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid unintended consequence, e.g. traffic displaced to residential streets or black-market avoidance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid opportunity cost, e.g. money not spent on public transport expansion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Balanced judgement, e.g. effective if revenue funds alternatives and exemptions protect vulnerable groups.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stakeholder map, consequence, opportunity cost, judgement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u2-de-notes",
      title: "Deep evaluation — notes",
      summary:
        "Map stakeholders, weigh costs/benefits, anticipate unintended consequences, think long-term.",
      sections: [
        {
          heading: "Key idea",
          body: "Solutions interact — evaluate combined approaches.",
        },
        {
          heading: "Long-term",
          body: "Ask: will this still work in 20 years?",
        },
      ],
    },
  ],
};
