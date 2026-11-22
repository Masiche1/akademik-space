import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "ciegp-u2-lesson-2-3",
  code: "2-3",
  title: "Solution Evaluation at Depth",
  goal: "I CAN evaluate complex solutions considering stakeholders, costs and long-term effects.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457: deep evaluation",
    "0457: solutions",
  ],

  vocabulary: [
    {
      term: "Stakeholder analysis",
      definition: "Mapping who is affected and how.",
    },
    {
      term: "Unintended consequence",
      definition: "Unexpected effect of solution.",
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
      id: "ciegp-u2-s3-deepeval",
      title: "Deep solution evaluation",
      skill: "Evaluate solutions comprehensively at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive evaluation",
            body: "Map all stakeholders: who gains, loses, excluded? Assess costs (financial, social, environmental) and benefits. Consider unintended consequences — solutions often create new problems.",
          },
          {
            heading: "Long-term thinking",
            body: "Short-term fixes may worsen long-term problems. Evaluate sustainability: will this work in 20 years? Combined approaches often outperform single solutions.",
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
          id: "ciegp-u2-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an unintended consequence?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of cost",
              },
              {
                id: "b",
                text: "A planned outcome",
              },
              {
                id: "c",
                text: "Unexpected effect of a solution",
              },
              {
                id: "d",
                text: "A voting result",
              },
            ],
            correctChoiceId: "c",
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
          id: "ciegp-u2-de-q2",
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
          id: "ciegp-u2-de-q3",
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
                  "e.g. cheap plastic bans → black market alternatives.",
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
          id: "ciegp-u2-de-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define stakeholder analysis, unintended consequence, opportunity cost, long-term impact, risk assessment, synergy. (b) Map stakeholders for 'build more roads to reduce traffic'. (c) What unintended consequence might roads cause? (d) What is opportunity cost of roads over public transport? (e) Evaluate long-term sustainability of road-building. (f) Give an example of solution synergy. (g) How does risk assessment work? (h) Design a combined solution to traffic congestion.",
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
                reasoning: "(c) e.g. more cars → more emissions.",
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
                reasoning: "(f) e.g. roads+transit+pricing.",
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
          id: "ciegp-u2-de-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is opportunity cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The price paid for goods" },
              { id: "b", text: "The total financial cost of a project" },
              {
                id: "c",
                text: "The best alternative forgone when choosing an option",
              },
              { id: "d", text: "A penalty for late delivery" },
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
                reasoning: "Opportunity cost = next-best option lost.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Best alternative forgone",
          },
        },
        {
          id: "ciegp-u2-de-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group is most often excluded from stakeholder analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government ministers" },
              { id: "b", text: "Future generations" },
              { id: "c", text: "Media organisations" },
              { id: "d", text: "Local businesses" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder inclusion",
                statement: "Silent/vulnerable groups must be mapped.",
              },
            ],
            steps: [
              {
                reasoning: "Future generations have no voice.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Future generations",
          },
        },
        {
          id: "ciegp-u2-de-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give an example of an unintended consequence of a congestion charge in a city centre.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unintended consequence",
                statement: "Unplanned side effects of solutions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. drivers reroute through residential streets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New problem created by the solution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. rerouting through residential areas",
          },
        },
        {
          id: "ciegp-u2-de-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A carbon tax of $20 per tonne applies to 2 million tonnes of emissions. What is the total revenue?",
          response: {
            type: "numeric",
            parts: [{ label: "Revenue ($)", answer: 40000000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cost calculation",
                statement: "Rate x quantity.",
              },
            ],
            steps: [
              {
                reasoning: "20 x 2,000,000 = $40,000,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$40,000,000",
          },
        },
        {
          id: "ciegp-u2-de-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A project costs $4 million and generates $9 million of benefits. What is the net benefit?",
          response: {
            type: "numeric",
            parts: [{ label: "Net benefit ($m)", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cost-benefit",
                statement: "Benefits minus costs.",
              },
            ],
            steps: [
              {
                reasoning: "9 - 4 = $5m net benefit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5 million",
          },
        },
        {
          id: "ciegp-u2-de-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a stakeholder analysis miss future generations, and why does that weaken the evaluation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intergenerational equity",
                statement: "Future stakeholders lack voice.",
              },
            ],
            steps: [
              {
                reasoning: "Future people cannot be surveyed or consulted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyst must infer their interests.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Omission biases towards short-term gains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "No voice → must infer; omission biases to short-term",
          },
        },
        {
          id: "ciegp-u2-de-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of solution synergy in education and explain why combined approaches beat single ones.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synergy",
                statement: "Solutions working better together.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. scholarships + tutoring + school meals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each addresses a different barrier.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combined effect exceeds sum of parts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. scholarships+tutoring+meals; combined > separate",
          },
        },
        {
          id: "ciegp-u2-de-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main purpose of risk assessment in solution evaluation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Identify and weigh potential harms before choosing",
              },
              { id: "b", text: "Calculate exact profits" },
              { id: "c", text: "Eliminate all risk" },
              { id: "d", text: "Choose the cheapest option" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Risk assessment",
                statement: "Weigh potential harms.",
              },
            ],
            steps: [
              {
                reasoning: "Risk assessment weighs harms vs benefits.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Identify and weigh potential harms",
          },
        },
        {
          id: "ciegp-u2-de-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey of 250 households, 80% support a congestion charge. How many support it, and how many oppose it?",
          response: {
            type: "numeric",
            parts: [
              { label: "Support", answer: 200 },
              { label: "Oppose", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Survey calculation",
                statement: "Percentage of sample.",
              },
            ],
            steps: [
              {
                reasoning: "0.80 x 250 = 200 support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "250 - 200 = 50 oppose.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "200 support; 50 oppose",
          },
        },
        {
          id: "ciegp-u2-de-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a cost-benefit analysis still recommend against a very popular solution?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Hidden or external costs and distributional harms outweigh visible benefits",
              },
              { id: "b", text: "Costs and benefits are the same thing" },
              { id: "c", text: "Analysts dislike popularity" },
              { id: "d", text: "Popular solutions are always cheap" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hidden costs",
                statement: "Externalities and distribution matter.",
              },
            ],
            steps: [
              {
                reasoning: "External/hidden costs can dominate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct option identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "Hidden/external costs and harms",
          },
        },
        {
          id: "ciegp-u2-de-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate 'universal basic income' as a solution for a developing country: stakeholders, costs, long-term sustainability.",
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
                reasoning: "Stakeholders: poor households, taxpayers, informal workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: fiscal burden vs reduced poverty/services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Long-term: inflation risk, labour supply effects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Balanced judgement on feasibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Stakeholders + fiscal costs + long-term risks + judgement",
          },
        },
        {
          id: "ciegp-u2-de-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solution A costs $3m and gives $10m benefits; solution B costs $1m and gives $5m benefits. Calculate the net benefit of each.",
          response: {
            type: "numeric",
            parts: [
              { label: "Net benefit A ($m)", answer: 7 },
              { label: "Net benefit B ($m)", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cost-benefit",
                statement: "Benefits minus costs.",
              },
            ],
            steps: [
              {
                reasoning: "A: 10 - 3 = 7; B: 5 - 1 = 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "A = $7m; B = $4m net benefit",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u2-de-notes",
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
