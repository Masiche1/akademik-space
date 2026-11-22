import type { Lesson } from "../../../types.ts";

export const lesson314: Lesson = {
  id: "cieigeo-u2-lesson-2-4",
  code: "2-4",
  title: "Globalisation and TNCs",
  goal: "I CAN explain globalisation and the role of transnational corporations.",
  standards: ["Cambridge IGCSE Geography 0460", "Paper 2: globalisation"],

  vocabulary: [
    {
      term: "Globalisation",
      definition: "Increasing interconnectedness of world economies/societies.",
    },
    {
      term: "Transnational corporation (TNC)",
      definition: "Company operating in multiple countries.",
    },
    {
      term: "Outsourcing",
      definition: "Contracting production/services to external providers.",
    },
    {
      term: "Free trade",
      definition: "Trade without government restrictions.",
    },
    {
      term: "Cultural diffusion",
      definition: "Spread of cultural practices between societies.",
    },
    {
      term: "Economic integration",
      definition: "Countries linking economies through trade/investment.",
    },
  ],
  concepts: [
    {
      id: "cieigeo-u2-s4-glob",
      title: "Globalisation",
      skill: "Understand globalisation and TNC impacts.",
      lesson: {
        sections: [
          {
            heading: "Globalisation",
            body: "Increased international trade, investment, communication, migration. Driven by technology, transport, trade agreements. Creates opportunities and challenges.",
          },
          {
            heading: "TNCs",
            body: "Large companies operating globally: Apple, Nike, Coca-Cola. Benefits: jobs, investment, technology transfer. Concerns: exploitation, environmental damage, tax avoidance, cultural homogenisation.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation", statement: "world economic integration" },
          { name: "TNC", statement: "multi-country company" },
        ],
        workedExample: {
          problem:
            "A TNC builds a factory in a developing country. What are the impacts?",
          solution:
            "Positive: jobs, investment, skills. Negative: exploitation, environmental damage, profit repatriation.",
        },
      },
      questions: [
        {
          id: "cieigeo-u2-gb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is globalisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A weather pattern",
              },
              {
                id: "b",
                text: "A landform",
              },
              {
                id: "c",
                text: "Increasing interconnectedness of world economies",
              },
              {
                id: "d",
                text: "A type of migration",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "World integration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Globalisation = increasing world interconnectedness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "World economic integration",
          },
        },
        {
          id: "cieigeo-u2-gb-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a transnational corporation?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TNC",
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
                reasoning: "e.g. Apple, Nike, Coca-Cola.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Multi-country company",
          },
        },
        {
          id: "cieigeo-u2-gb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are benefits of TNCs for developing countries?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "TNC benefits",
                statement: "Positive impacts.",
              },
            ],
            steps: [
              {
                reasoning: "Jobs, investment, technology transfer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Skills development, infrastructure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Economic growth stimulation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Jobs, investment, technology",
          },
        },
        {
          id: "cieigeo-u2-gb-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define globalisation, TNC, outsourcing, free trade, cultural diffusion, economic integration. (b) What is globalisation? (c) What is a TNC? Give an example. (d) What are benefits of TNCs? (e) What are drawbacks of TNCs? (f) What is outsourcing? (g) What drives globalisation? (h) Evaluate whether globalisation benefits all countries equally.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Globalisation",
                statement: "TNCs, impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) World integration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Multi-country company; valid example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Jobs, investment, technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Exploitation, environmental damage, profit repatriation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Contracting to external providers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Technology, transport, trade agreements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Globalisation and TNCs.",
          },
        },
        {
          id: "cieigeo-u2-gb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A transnational corporation is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A business owned by one family" },
              { id: "b", text: "A company operating in more than one country" },
              { id: "c", text: "A government department" },
              { id: "d", text: "A small local shop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TNC",
                statement: "Company operating across national borders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The key feature is operation in multiple countries.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Company operating in multiple countries",
          },
        },
        {
          id: "cieigeo-u2-gb-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A TNC has 25 factories, of which 15 are located abroad. Calculate the percentage of factories overseas.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 60, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "Part ÷ whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "15 ÷ 25 x 100 = 60%.",
                working: "15 / 25 \\times 100 = 60",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "60%",
          },
        },
        {
          id: "cieigeo-u2-gb-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is outsourcing? Give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Outsourcing",
                statement: "Work contracted to another provider.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Outsourcing means hiring an external company to produce goods or services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valid example, e.g. call centres or garment production abroad.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Contracting production or services externally",
          },
        },
        {
          id: "cieigeo-u2-gb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Free trade is most likely to encourage:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A ban on foreign companies" },
              { id: "b", text: "Increased international trade and investment" },
              { id: "c", text: "Complete isolation of economies" },
              { id: "d", text: "Higher transport costs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free trade",
                statement: "Trade without government restrictions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Removing barriers makes cross-border trade and investment easier.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Increased trade and investment",
          },
        },
        {
          id: "cieigeo-u2-gb-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A product costs $9 to make domestically and $6 to make overseas. (a) Calculate the saving per unit. (b) Calculate the percentage saving.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Saving per unit (USD)", answer: 3, unit: "USD" },
              {
                label: "(b) Percentage saving (%)",
                answer: 33.3,
                unit: "%",
                tolerance: 0.1,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost saving",
                statement:
                  "Saving = old cost - new cost; % = saving ÷ old cost x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 9 - 6 = $3 per unit.",
                working: "9 - 6 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 3 ÷ 9 x 100 = 33.3%.",
                working: "3 / 9 \\times 100 = 33.3",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $3 (b) 33.3%",
          },
        },
        {
          id: "cieigeo-u2-gb-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three benefits a TNC can bring to a developing country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "TNC benefits",
                statement:
                  "Investment, jobs and technology can support development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "TNCs create employment in factories, services and supply chains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They bring capital investment, infrastructure and export earnings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Workers may gain skills and technology can transfer to local firms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Jobs, investment and technology transfer",
          },
        },
        {
          id: "cieigeo-u2-gb-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a common criticism of TNCs in developing countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They operate only within one country" },
              {
                id: "b",
                text: "They may exploit workers, damage the environment or avoid taxes",
              },
              {
                id: "c",
                text: "They always pay all profits to local communities",
              },
              { id: "d", text: "They never create jobs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "TNC drawbacks",
                statement:
                  "Global firms can create ethical and environmental concerns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criticisms include low wages, pollution and profit repatriation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Exploitation, environmental damage and tax avoidance",
          },
        },
        {
          id: "cieigeo-u2-gb-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how globalisation can spread culture and create both opportunities and challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cultural diffusion",
                statement:
                  "Ideas, products and practices spread between societies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Communication and transport spread music, food, fashion and technology internationally.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Opportunities include wider markets, cultural exchange and new services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Challenges include cultural homogenisation and pressure on local traditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: diffusion connects societies but may weaken local identity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Globalisation spreads culture but may reduce local diversity",
          },
        },
        {
          id: "cieigeo-u2-gb-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A country's exports rise from $2 billion to $3.2 billion and imports rise from $1.5 billion to $2.25 billion. (a) Calculate the percentage increase in exports. (b) Calculate the percentage increase in imports.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Export increase (%)", answer: 60, unit: "%" },
              { label: "(b) Import increase (%)", answer: 50, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage change",
                statement: "Change ÷ original x 100.",
              },
            ],
            steps: [
              {
                reasoning: "(a) (3.2 - 2) ÷ 2 x 100 = 60%.",
                working: "1.2 / 2 \\times 100 = 60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) (2.25 - 1.5) ÷ 1.5 x 100 = 50%.",
                working: "0.75 / 1.5 \\times 100 = 50",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 60% (b) 50%",
          },
        },
        {
          id: "cieigeo-u2-gb-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the view that globalisation benefits all countries equally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Globalisation impacts",
                statement: "Benefits and costs are unevenly distributed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Benefits include trade, investment, jobs and access to goods for many countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Wealthy countries and skilled workers may gain more than poor regions or workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some industries may decline and local cultures or environments may be harmed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: benefits are real but unequal; governance and regulation matter.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Globalisation benefits are uneven",
          },
        },
        {
          id: "cieigeo-u2-gb-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'profit repatriation' mean for a developing country hosting a TNC?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Profits are sent back to the TNC's home country rather than reinvested locally",
              },
              { id: "b", text: "The host country sets all prices" },
              { id: "c", text: "Workers receive every profit immediately" },
              { id: "d", text: "All profits are donated to local charities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Profit repatriation",
                statement: "Profits transferred to the company's home country.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Repatriation can limit local reinvestment and economic benefit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Profits sent to the home country",
          },
        },
        {
          id: "cieigeo-u2-gb-q16",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define globalisation and TNC. (b) Give one example of a TNC. (c) Define outsourcing and free trade. (d) Give two benefits of TNCs. (e) Give two drawbacks of TNCs. (f) Explain cultural diffusion. (g) Explain one driver of globalisation. (h) Evaluate whether globalisation benefits all countries equally.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Globalisation",
                statement: "TNCs, impacts and evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Globalisation = world economic integration; TNC = multi-country company.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) e.g. Apple, Nike or Coca-Cola.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Outsourcing = external production; free trade = trade without restrictions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) e.g. jobs and technology transfer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) e.g. exploitation and environmental damage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Spread of cultural practices through trade, media and migration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) e.g. technology, cheaper transport or trade agreements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced judgement that gains are uneven and depend on regulation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Globalisation and TNC impacts.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieigeo-u2-gb-notes",
      title: "Globalisation — notes",
      summary:
        "Globalisation=world integration. TNCs bring investment/jobs but also exploitation/environmental concerns.",
      sections: [
        {
          heading: "Key idea",
          body: "Globalisation creates winners and losers — benefits unevenly distributed.",
        },
        {
          heading: "TNCs",
          body: "Large companies drive globalisation but raise ethical concerns.",
        },
      ],
    },
  ],
};
