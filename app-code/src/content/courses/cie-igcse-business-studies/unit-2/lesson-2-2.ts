import type { Lesson } from "../../../types.ts";

export const lesson262: Lesson = {
  id: "cieibs-u2-lesson-2-2",
  code: "2-2",
  title: "Globalisation and Multinational Corporations",
  goal: "I CAN explain globalisation and the role of multinational corporations.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 2: globalisation",
  ],

  vocabulary: [
    {
      term: "Globalisation",
      definition: "Increasing interconnectedness of world economies.",
    },
    {
      term: "Multinational corporation (MNC)",
      definition: "Company operating in multiple countries.",
    },
    {
      term: "Offshoring",
      definition: "Moving production to lower-cost countries.",
    },
    {
      term: "Outsourcing",
      definition: "Contracting work to external providers.",
    },
    {
      term: "Free trade",
      definition: "Trade without tariffs/quotas between countries.",
    },
    {
      term: "Trade bloc",
      definition: "Group of countries with trade agreements.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u2-s2-glob",
      title: "Globalisation",
      skill: "Understand globalisation and MNCs.",
      lesson: {
        sections: [
          {
            heading: "Globalisation",
            body: "Increased international trade, investment, communication. Driven by technology, transport improvements, trade agreements. Creates opportunities (new markets, cheaper inputs) and challenges (competition, cultural impact).",
          },
          {
            heading: "MNCs",
            body: "Large companies operating globally: Apple, Samsung, Coca-Cola. Benefits: jobs, investment, technology transfer. Concerns: tax avoidance, exploitation, environmental impact, cultural homogenisation.",
          },
        ],
        keyFormulas: [
          {
            name: "Globalisation",
            statement: "world economic interconnectedness",
          },
          { name: "MNC", statement: "multi-country operations" },
        ],
        workedExample: {
          problem:
            "A factory moves production from UK to Vietnam. What is this and what are implications?",
          solution:
            "Offshoring — lower labour costs but job losses in UK, potential exploitation concerns, cheaper products for consumers.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-gq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is globalisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A legal requirement",
              },
              {
                id: "b",
                text: "A marketing strategy",
              },
              {
                id: "c",
                text: "A type of tax",
              },
              {
                id: "d",
                text: "Increasing interconnectedness of world economies",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "World economic integration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Globalisation = increasing world economic interconnectedness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "World economic integration",
          },
        },
        {
          id: "cieibs-u2-gq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a multinational corporation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MNC",
                statement: "Multi-country company.",
              },
            ],
            steps: [
              {
                reasoning: "Company operating in multiple countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. Apple, Samsung, Coca-Cola.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multi-country company",
          },
        },
        {
          id: "cieibs-u2-gq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is offshoring? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Offshoring",
                statement: "Production relocation.",
              },
            ],
            steps: [
              {
                reasoning: "Moving production to lower-cost countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: manufacturing moved to Asia.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Driven by lower labour costs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Production relocation",
          },
        },
        {
          id: "cieibs-u2-gq-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define globalisation, MNC, offshoring, outsourcing, free trade, trade bloc. (b) What is globalisation? (c) What is an MNC? Give an example. (d) What is offshoring? (e) What is outsourcing? (f) What is free trade? (g) What is a trade bloc? (h) Evaluate benefits and drawbacks of globalisation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Globalisation",
                statement: "MNCs, trade, impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) World economic integration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Multi-country company; valid example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Production relocation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Contracting to external providers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Trade without tariffs/quotas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Country group with trade agreements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Globalisation and MNCs.",
          },
        },
        {
          id: "cieibs-u2-gq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a multinational corporation (MNC)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A company operating in only one country" },
              { id: "b", text: "A government-owned enterprise" },
              { id: "c", text: "A small local business" },
              { id: "d", text: "A company operating in multiple countries" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MNC",
                statement: "Company with operations in multiple countries.",
              },
            ],
            steps: [
              {
                reasoning: "MNCs operate across national borders.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Company operating in multiple countries",
          },
        },
        {
          id: "cieibs-u2-gq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between offshoring and outsourcing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Outsourcing only applies to farming" },
              { id: "b", text: "They mean exactly the same thing" },
              {
                id: "c",
                text: "Offshoring moves production abroad; outsourcing contracts work to an external provider",
              },
              { id: "d", text: "Offshoring means hiring more staff" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Offshoring vs outsourcing",
                statement:
                  "Offshore = move production abroad; outsource = contract to external provider.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Offshoring relocates production; outsourcing contracts out tasks.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Offshoring = move abroad; outsourcing = contract out",
          },
        },
        {
          id: "cieibs-u2-gq-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm exports goods worth $5,000 and a 10% tariff is applied. (a) Calculate the tariff amount. (b) Calculate the total cost to the importer.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500, unit: "$" },
              { label: "b", answer: 5500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tariff calculation",
                statement:
                  "Tariff = price x rate; landed cost = price + tariff.",
              },
            ],
            steps: [
              {
                reasoning: "Tariff = 0.10 x 5000 = $500.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total = 5000 + 500 = $5,500.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $500, b) $5,500",
          },
        },
        {
          id: "cieibs-u2-gq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two benefits of globalisation for businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "Increasing world economic interconnectedness.",
              },
            ],
            steps: [
              {
                reasoning: "Access to new markets and customers worldwide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cheaper inputs and labour through offshoring, plus technology transfer.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "New markets; cheaper inputs/labour",
          },
        },
        {
          id: "cieibs-u2-gq-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is free trade?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade of goods without payment" },
              {
                id: "b",
                text: "Trade with no tariffs or quotas between countries",
              },
              { id: "c", text: "A single country's export policy" },
              { id: "d", text: "Trade only within one country" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free trade",
                statement: "Trade without tariffs or quotas between countries.",
              },
            ],
            steps: [
              {
                reasoning: "Free trade removes barriers between nations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Trade without tariffs or quotas",
          },
        },
        {
          id: "cieibs-u2-gq-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A factory moves 2,000 worker-hours per year from the UK ($20/hour) to Vietnam ($3/hour). (a) Calculate the annual UK labour cost. (b) Calculate the annual Vietnam labour cost. (c) Calculate the annual saving.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40000, unit: "$" },
              { label: "b", answer: 6000, unit: "$" },
              { label: "c", answer: 34000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Offshoring cost",
                statement: "Labour cost = hours x hourly rate.",
              },
            ],
            steps: [
              {
                reasoning: "UK cost = 2000 x 20 = $40,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vietnam cost = 2000 x 3 = $6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Saving = 40000 - 6000 = $34,000 per year.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $40,000, b) $6,000, c) $34,000",
          },
        },
        {
          id: "cieibs-u2-gq-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the decision of a UK clothing company to move all production to Bangladesh. Consider costs, jobs and ethics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Offshoring evaluation",
                statement:
                  "Weigh cost savings against job losses and ethical risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lower labour costs improve competitiveness and profits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "UK job losses and social impact.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk of poor working conditions damaging reputation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justified conclusion weighing all factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cost benefits vs job losses and ethical risks — balanced judgement",
          },
        },
        {
          id: "cieibs-u2-gq-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a trade bloc?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A group of countries with trade agreements" },
              { id: "b", text: "A shipping route between ports" },
              { id: "c", text: "An international bank" },
              { id: "d", text: "A single country's customs union" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade bloc",
                statement: "Group of countries with trade agreements.",
              },
            ],
            steps: [
              {
                reasoning: "Blocs like the EU reduce barriers between members.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Group of countries with trade agreements",
          },
        },
        {
          id: "cieibs-u2-gq-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A company exports $2 million to each of 3 countries. (a) Calculate total exports. (b) If exports grow by 10% next year, calculate the new total.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6, unit: "million $" },
              { label: "b", answer: 6.6, unit: "million $" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Export growth",
                statement: "Total = sum of markets; growth = x 1.10.",
              },
            ],
            steps: [
              {
                reasoning: "Total = 3 x 2 = $6 million.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New total = 6 x 1.10 = $6.6 million.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $6 million, b) $6.6 million",
          },
        },
        {
          id: "cieibs-u2-gq-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two benefits and two concerns about the role of multinational corporations in host countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "MNC impact",
                statement: "Jobs/investment vs exploitation/environment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits: create jobs and bring investment and technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second benefit: skills transfer and infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Concerns: tax avoidance, exploitation, environmental damage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Jobs/investment vs exploitation/environment",
          },
        },
        {
          id: "cieibs-u2-gq-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is outsourcing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selling shares publicly" },
              { id: "b", text: "Buying another company" },
              { id: "c", text: "Moving production to another country" },
              { id: "d", text: "Contracting work to an external provider" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Outsourcing",
                statement: "Contracting work to external providers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Outsourcing uses third parties for functions like IT or cleaning.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Contracting work to external providers",
          },
        },
        {
          id: "cieibs-u2-gq-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define globalisation, MNC, offshoring, outsourcing, free trade, trade bloc. (b) What is an MNC? Give an example. (c) What is offshoring? (d) What is free trade? (e) A firm moves 1,000 hours of work from $15/hour to $4/hour. Calculate the annual saving. (f) Explain two benefits of globalisation. (g) Explain two concerns about MNCs. (h) Evaluate whether globalisation is overall beneficial for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Globalisation",
                statement: "Concepts, calculations and evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Multi-country company; e.g. Apple, Samsung.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Moving production to lower-cost countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Trade without tariffs/quotas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Saving = (15 - 4) x 1000 = $11,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) New markets, cheaper inputs, technology transfer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Exploitation, environmental impact, tax avoidance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced judgement on benefits vs risks for developing countries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Globalisation concepts and evaluation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-gq-notes",
      title: "Globalisation — notes",
      summary:
        "Globalisation=world economic integration. MNCs=multi-country companies. Offshoring=production relocation.",
      sections: [
        {
          heading: "Key idea",
          body: "Globalisation creates opportunities (markets, cheap inputs) and challenges (competition, exploitation).",
        },
        {
          heading: "MNCs",
          body: "Large global companies — bring investment but also concerns about power and ethics.",
        },
      ],
    },
  ],
};
