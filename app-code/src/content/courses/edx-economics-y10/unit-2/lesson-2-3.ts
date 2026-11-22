import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ecn10-u2-lesson-2-3",
  code: "2-3",
  title: "Market Failure and Government Intervention",
  goal: "I CAN explain market failure and government intervention methods.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Market Failure"],
  vocabulary: [
    {
      term: "Market failure",
      definition: "Markets fail to allocate resources efficiently.",
    },
    {
      term: "Externality",
      definition: "Cost/benefit affecting third parties.",
    },
    {
      term: "Public good",
      definition: "Non-rival, non-excludable good — defence, streetlights.",
    },
    {
      term: "Merit good",
      definition: "Underprovided good — education, healthcare.",
    },
    {
      term: "De-merit good",
      definition: "Overprovided good — cigarettes, alcohol.",
    },
  ],
  concepts: [
    {
      id: "ecn10-u2-failure",
      title: "Types of Market Failure",
      skill: "Identify externalities, public goods and information problems.",
      lesson: {
        sections: [
          {
            heading: "Externalities",
            body: "**Negative externality**: cost to third party — pollution, noise. Market produces too much. **Positive externality**: benefit to third party — vaccination, education. Market produces too little.\n\n**Public goods**: non-rival (one person's use doesn't reduce others'), non-excludable (can't prevent use) — defence, street lighting. Markets won't provide (free-rider problem).\n\n**Merit/demerit goods**: consumers under/overestimate benefits — information failure. Education underprovided, cigarettes overprovided.",
          },
          {
            heading: "Inequality and monopoly",
            body: "**Income inequality**: market may produce unfair distribution — rich get more. **Monopoly power**: single seller sets high prices, restricts output — allocative inefficiency. **Government failure**: intervention can also fail — bureaucracy, unintended consequences.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Factory pollutes river affecting downstream farms. What type of market failure?",
          solution:
            "Negative externality — cost to third party not reflected in price.",
        },
      },
      questions: [
        {
          id: "ecn10-u2-failure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a negative externality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cost to third party not reflected in price" },
              { id: "b", text: "Benefit to third party" },
              { id: "c", text: "Consumer surplus" },
              { id: "d", text: "Government tax" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative externality",
                statement: "Cost to third party — e.g., pollution.",
              },
            ],
            steps: [
              {
                reasoning: "Negative externality = cost to third party.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Cost to third party",
            commonErrors: ["Positive confused."],
          },
        },
        {
          id: "ecn10-u2-failure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are public goods not provided by markets?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Public goods",
                statement: "Non-rival, non-excludable — free-rider problem.",
              },
            ],
            steps: [
              {
                reasoning: "Non-excludable — can't charge users.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Free-rider problem — people use without paying.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No profit incentive — firms won't provide.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Non-excludable + free-rider = no profit = markets won't provide.",
            commonErrors: ["Provided assumed.", "No free-rider."],
          },
        },
        {
          id: "ecn10-u2-failure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why vaccination is a positive externality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positive externality",
                statement: "Benefit to third parties — herd immunity.",
              },
            ],
            steps: [
              {
                reasoning: "Vaccination protects others — herd immunity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Benefit to third parties not paid for.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Market underprovides — consumers only consider own benefit.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Government may subsidise/provide.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Herd immunity benefits others — underprovided, government may subsidise.",
            commonErrors: ["Negative confused.", "No underprovision."],
          },
        },
        {
          id: "ecn10-u2-failure-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A factory dumps waste into a river.",
          parts: [
            { label: "a", prompt: "Identify the market failure.", marks: 3 },
            { label: "b", prompt: "Explain the external cost.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest two government interventions.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Externality correction",
                statement: "Internalise external cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Negative externality — pollution cost to third parties.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Market produces too much — doesn't count pollution cost.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Fish death, water contamination, health costs.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Cost borne by community, not factory.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Tax on pollution / fines / regulation.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) negative externality (b) fish/health costs borne by others (c) tax/regulation",
            commonErrors: ["No externality.", "No intervention."],
          },
        },
      ],
    },
    {
      id: "ecn10-u2-intervention",
      title: "Government Intervention",
      skill: "Evaluate methods of correcting market failure.",
      lesson: {
        sections: [
          {
            heading: "Intervention methods",
            body: "**Taxes**: on pollution — internalise external cost, reduce quantity. **Subsidies**: for merit goods/vaccines — lower price, increase quantity. **Regulation**: laws banning harmful products, setting standards. **Provision**: government provides public goods directly.\n\n**Price controls**: maximum price (rent control) — helps consumers but may cause shortages. Minimum price (minimum wage) — helps producers but may cause unemployment.",
          },
          {
            heading: "Evaluation",
            body: "**Benefits**: corrects market failure, provides public goods, protects consumers, promotes equity. **Drawbacks**: government failure, bureaucracy, unintended consequences, cost to taxpayers, may reduce incentives.\n\n**Key question**: does intervention improve on market outcome? Compare costs/benefits.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Government taxes cigarettes to reduce smoking. How does this work?",
          solution:
            "Tax raises price → quantity demanded falls → less smoking (de-merit good).",
        },
      },
      questions: [
        {
          id: "ecn10-u2-intervention-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a subsidy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government payment to lower production costs" },
              { id: "b", text: "Government tax on goods" },
              { id: "c", text: "Price ceiling" },
              { id: "d", text: "Import tariff" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subsidy",
                statement: "Government payment to reduce costs.",
              },
            ],
            steps: [
              {
                reasoning: "Subsidy = government payment to producer.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Government payment",
            commonErrors: ["Tax confused."],
          },
        },
        {
          id: "ecn10-u2-intervention-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a tax on pollution correct market failure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pigouvian tax",
                statement: "Internalise external cost.",
              },
            ],
            steps: [
              {
                reasoning: "Tax raises production cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Higher cost → higher price → less quantity demanded.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Pollution reduced to efficient level.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Tax internalises external cost — reduces pollution to efficient level.",
            commonErrors: ["No mechanism.", "Wrong direction."],
          },
        },
        {
          id: "ecn10-u2-intervention-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one drawback of government intervention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Government failure",
                statement: "Intervention can also fail.",
              },
            ],
            steps: [
              {
                reasoning: "Government failure — poor decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bureaucracy — slow, costly administration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unintended consequences — perverse incentives.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Cost to taxpayers.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Government failure, bureaucracy, unintended consequences, cost.",
            commonErrors: ["Only benefits.", "No drawback."],
          },
        },
        {
          id: "ecn10-u2-intervention-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government wants to reduce obesity but likes free market principles.",
          parts: [
            {
              label: "a",
              prompt: "Explain why obesity is a market failure.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Suggest two market-based interventions.",
              marks: 3,
            },
            { label: "c", prompt: "Evaluate one intervention.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Market-based solutions",
                statement: "Use price signals rather than bans.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) De-merit good — consumers underestimate health costs.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) External costs — healthcare burden on society.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Tax on unhealthy food — internalise cost.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Subsidise healthy food — encourage better choices.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Tax: raises price → less consumption but regressive.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) de-merit+external costs (b) tax unhealthy/subsidise healthy (c) tax works but regressive",
            commonErrors: ["No failure.", "No evaluation."],
          },
        },
      ],
    },
  ],
};
