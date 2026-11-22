import type { Lesson } from "../../../types.ts";

export const lesson264: Lesson = {
  id: "cieibs-u2-lesson-2-4",
  code: "2-4",
  title: "Government Influence on Business",
  goal: "I CAN explain how government policies affect business activity.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 2: government influence",
  ],

  vocabulary: [
    {
      term: "Government policy",
      definition: "Government decisions affecting business.",
    },
    {
      term: "Taxation",
      definition: "Government revenue from businesses/individuals.",
    },
    {
      term: "Subsidy",
      definition: "Government financial support to businesses.",
    },
    {
      term: "Regulation",
      definition: "Government rules controlling business.",
    },
    { term: "Minimum wage", definition: "Legal minimum hourly pay." },
    {
      term: "Competition policy",
      definition: "Rules preventing unfair business practices.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u2-s4-gov",
      title: "Government influence",
      skill: "Understand government-business relationships.",
      lesson: {
        sections: [
          {
            heading: "Government tools",
            body: "Taxation: income tax, corporation tax, VAT — raises revenue, affects behaviour. Subsidies: support specific industries. Regulation: health/safety, employment, environmental rules. Competition policy: prevent monopolies.",
          },
          {
            heading: "Impact on business",
            body: "Government policies create opportunities (subsidies, infrastructure) and constraints (taxes, regulations). Businesses must comply with legal requirements.",
          },
        ],
        keyFormulas: [
          { name: "Taxation", statement: "government revenue" },
          { name: "Subsidy", statement: "government support" },
          { name: "Regulation", statement: "government rules" },
        ],
        workedExample: {
          problem: "How does a minimum wage affect a restaurant business?",
          solution:
            "Increases labour costs but may improve employee retention/motivation. Business must comply with legal requirement.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-gov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a subsidy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of tax",
              },
              {
                id: "b",
                text: "A marketing strategy",
              },
              {
                id: "c",
                text: "A legal requirement",
              },
              {
                id: "d",
                text: "Government financial support to businesses",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subsidy",
                statement: "Government support.",
              },
            ],
            steps: [
              {
                reasoning: "Subsidy = government financial support.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Government support",
          },
        },
        {
          id: "cieibs-u2-gov-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is regulation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Regulation",
                statement: "Government rules.",
              },
            ],
            steps: [
              {
                reasoning: "Government rules controlling business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. health/safety, employment, environmental.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Government rules",
          },
        },
        {
          id: "cieibs-u2-gov-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does taxation affect business?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Taxation",
                statement: "Tax impact on business.",
              },
            ],
            steps: [
              {
                reasoning: "Reduces profit/income available to business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May affect pricing and investment decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different taxes have different impacts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Tax impact on business",
          },
        },
        {
          id: "cieibs-u2-gov-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define government policy, taxation, subsidy, regulation, minimum wage, competition policy. (b) What is a subsidy? (c) What is regulation? (d) What is taxation? (e) Give 3 examples of government tools. (f) How does taxation affect business? (g) How does regulation affect business? (h) Evaluate whether government should support small businesses.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Government influence",
                statement: "Policies, tools, impact.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Government financial support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Government rules.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Government revenue tool.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Three valid tools.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Reduces profit, affects decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Adds compliance costs, protects stakeholders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Government influence on business.",
          },
        },
        {
          id: "cieibs-u2-gov-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a subsidy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fine for breaking rules" },
              { id: "b", text: "A tax businesses must pay" },
              { id: "c", text: "A loan that must be repaid with interest" },
              {
                id: "d",
                text: "Government financial support given to businesses",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subsidy",
                statement: "Government financial support to businesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subsidies support specific industries or activities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Government financial support",
          },
        },
        {
          id: "cieibs-u2-gov-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the most likely effect of a minimum wage on a business's costs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Labour costs increase" },
              { id: "b", text: "No effect on costs" },
              { id: "c", text: "Only affects profits, not costs" },
              { id: "d", text: "Labour costs decrease" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Minimum wage",
                statement: "Legal minimum hourly pay — raises labour costs.",
              },
            ],
            steps: [
              {
                reasoning: "Pay must rise to at least the legal minimum.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Labour costs increase",
          },
        },
        {
          id: "cieibs-u2-gov-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Corporation tax is 25% and VAT is 10%. (a) Calculate the corporation tax on a profit of $80,000. (b) Calculate the VAT on a $400 sale.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20000, unit: "$" },
              { label: "b", answer: 40, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tax calculation",
                statement: "Tax = base x rate.",
              },
            ],
            steps: [
              {
                reasoning: "Corporation tax = 0.25 x 80000 = $20,000.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "VAT = 0.10 x 400 = $40.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "a) $20,000, b) $40",
          },
        },
        {
          id: "cieibs-u2-gov-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two ways the government can support businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Government support",
                statement:
                  "Subsidies, grants, training schemes, infrastructure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Financial support: subsidies or grants to reduce costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Non-financial: training schemes, infrastructure, export promotion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Subsidies/grants; training or infrastructure",
          },
        },
        {
          id: "cieibs-u2-gov-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of competition policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To help monopolies grow" },
              { id: "b", text: "To raise all prices" },
              { id: "c", text: "To reduce employment" },
              {
                id: "d",
                text: "To prevent unfair business practices and monopolies",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Competition policy",
                statement: "Rules preventing unfair practices and monopolies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It protects consumers and small firms from domination.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Prevent unfair practices and monopolies",
          },
        },
        {
          id: "cieibs-u2-gov-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business receives a $1,500 subsidy against costs of $10,000. (a) Calculate its net cost after the subsidy. (b) If government raises corporation tax from 20% to 25% on a $40,000 profit, calculate the extra tax paid.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8500, unit: "$" },
              { label: "b", answer: 2000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Subsidy and tax",
                statement:
                  "Net cost = cost - subsidy; extra tax = profit x rate change.",
              },
            ],
            steps: [
              {
                reasoning: "Net cost = 10000 - 1500 = $8,500.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Extra tax = 40000 x 0.05 = $2,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $8,500, b) $2,000",
          },
        },
        {
          id: "cieibs-u2-gov-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two ways government regulation can affect a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Regulation",
                statement: "Government rules controlling business conduct.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Raises costs — e.g. health and safety equipment requirements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Limits behaviour — e.g. pollution limits, hiring rules — but can also protect consumers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Higher costs; restricted conduct (with possible benefits)",
          },
        },
        {
          id: "cieibs-u2-gov-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an indirect tax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Income tax" },
              { id: "b", text: "VAT" },
              { id: "c", text: "Inheritance tax" },
              { id: "d", text: "National insurance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indirect tax",
                statement:
                  "Tax on spending, e.g. VAT — collected at point of sale.",
              },
            ],
            steps: [
              {
                reasoning: "VAT is added to the price of goods and services.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "VAT",
          },
        },
        {
          id: "cieibs-u2-gov-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cafe employs 15 staff at $9/hour for 35 hours per week. The minimum wage rises to $10/hour. (a) Calculate the current weekly wage bill. (b) Calculate the new weekly wage bill.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4725, unit: "$" },
              { label: "b", answer: 5250, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Wage bill",
                statement: "Wage bill = staff x rate x hours.",
              },
            ],
            steps: [
              {
                reasoning: "Current = 15 x 9 x 35 = $4,725.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "New = 15 x 10 x 35 = $5,250 — an increase of $525/week.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $4,725, b) $5,250",
          },
        },
        {
          id: "cieibs-u2-gov-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether government intervention in the form of subsidies is beneficial for small businesses, considering both costs to taxpayers and benefits to firms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Government intervention",
                statement: "Weigh taxpayer cost vs business benefit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subsidies reduce costs and help survival/growth of small firms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost to taxpayers and risk of inefficiency/dependency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May distort competition if poorly targeted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justified conclusion on net benefit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Balanced evaluation of subsidies",
          },
        },
        {
          id: "cieibs-u2-gov-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an example of government regulation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Health and safety rules businesses must follow",
              },
              { id: "b", text: "A business cutting prices" },
              { id: "c", text: "A firm launching a new product" },
              { id: "d", text: "A company giving staff a bonus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Regulation",
                statement: "Government rules businesses must comply with.",
              },
            ],
            steps: [
              {
                reasoning: "Health and safety rules are legally imposed.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Health and safety rules",
          },
        },
        {
          id: "cieibs-u2-gov-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define government policy, taxation, subsidy, regulation, minimum wage, competition policy. (b) What is a subsidy? (c) What is regulation? Give one example. (d) What is the minimum wage? (e) Corporation tax is 20% on a profit of $50,000 — calculate the tax. (f) A firm gets a $2,000 subsidy on $15,000 of costs — calculate net costs. (g) Explain two ways regulation affects business. (h) Evaluate the impact of government intervention on a small business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Government influence",
                statement: "Tools and impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Government financial support to businesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Government rules; e.g. health and safety, environmental limits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Legal minimum hourly pay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) 0.20 x 50000 = $10,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) 15000 - 2000 = $13,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Raises costs and restricts conduct, but can protect consumers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced evaluation of opportunities and constraints.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Government tools and impact evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-gov-notes",
      title: "Government influence — notes",
      summary:
        "Government tools: taxation, subsidies, regulation, competition policy. Policies create opportunities and constraints.",
      sections: [
        {
          heading: "Key idea",
          body: "Government balances economic growth with social/environmental protection.",
        },
        {
          heading: "Regulation",
          body: "Rules protect workers, consumers, environment but add compliance costs.",
        },
      ],
    },
  ],
};
