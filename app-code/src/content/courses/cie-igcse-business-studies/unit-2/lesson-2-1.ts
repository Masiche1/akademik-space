import type { Lesson } from "../../../types.ts";

export const lesson261: Lesson = {
  id: "cieibs-u2-lesson-2-1",
  code: "2-1",
  title: "External Influences on Business Activity",
  goal: "I CAN identify external influences: economic, social, technological, political, legal, environmental.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 2: external influences",
  ],

  vocabulary: [
    {
      term: "External influence",
      definition: "Factor outside business affecting operations.",
    },
    {
      term: "Economic environment",
      definition: "Economic conditions affecting business.",
    },
    {
      term: "Social trends",
      definition: "Changing societal attitudes/behaviour.",
    },
    {
      term: "Technological change",
      definition: "New technologies affecting business.",
    },
    { term: "Political/legal", definition: "Government policies and laws." },
    {
      term: "Environmental factors",
      definition: "Natural/physical conditions affecting business.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u2-s1-ext",
      title: "External influences",
      skill: "Identify and analyse external influences on business.",
      lesson: {
        sections: [
          {
            heading: "External influences",
            body: "Economic: inflation, interest rates, exchange rates, economic growth. Social: demographics, lifestyle changes, consumer attitudes. Technological: internet, automation, digitalisation. Political/legal: government policies, regulations, taxes. Environmental: climate change, resource availability.",
          },
          {
            heading: "Impact analysis",
            body: "Businesses must monitor external environment and adapt. Positive influences create opportunities; negative create threats. PESTLE analysis framework helps organise analysis.",
          },
        ],
        keyFormulas: [
          {
            name: "PESTLE",
            statement:
              "Political, Economic, Social, Technological, Legal, Environmental",
          },
        ],
        workedExample: {
          problem: "How does rising interest rates affect a small business?",
          solution:
            "Higher borrowing costs, reduced consumer spending, slower growth — negative economic influence requiring adaptation.",
        },
      },
      questions: [
        {
          id: "cieibs-u2-ex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is PESTLE analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Framework for analysing external influences",
              },
              {
                id: "b",
                text: "A financial calculation",
              },
              {
                id: "c",
                text: "A marketing strategy",
              },
              {
                id: "d",
                text: "A type of market research",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PESTLE",
                statement: "External influence framework.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PESTLE analyses political, economic, social, technological, legal, environmental factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "External influence framework",
          },
        },
        {
          id: "cieibs-u2-ex-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does PESTLE stand for?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PESTLE",
                statement: "Six external factors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Political, Economic, Social, Technological, Legal, Environmental.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All six correctly identified.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Political, Economic, Social, Technological, Legal, Environmental",
          },
        },
        {
          id: "cieibs-u2-ex-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a technological influence on business.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technological influence",
                statement: "Tech impact on business.",
              },
            ],
            steps: [
              {
                reasoning: "Valid example (e.g. internet, automation, AI).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains impact on business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear connection.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Valid technological influence example",
          },
        },
        {
          id: "cieibs-u2-ex-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define external influence, economic environment, social trends, technological change, political/legal, environmental factors, PESTLE. (b) What is PESTLE? (c) What is an external influence? (d) Give an economic influence example. (e) Give a social influence example. (f) Give a technological influence example. (g) Give a political/legal influence example. (h) Analyse how a small business can respond to external influences.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "External influences",
                statement: "PESTLE analysis.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All seven definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Six-factor framework.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Factor outside business affecting operations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Valid economic example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid social example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Valid technological example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Valid political/legal example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid response strategy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "External influences and PESTLE.",
          },
        },
        {
          id: "cieibs-u2-ex-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an economic influence on business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A government health and safety law" },
              { id: "b", text: "A drought affecting crops" },
              { id: "c", text: "Rising interest rates" },
              { id: "d", text: "A new social media trend" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economic environment",
                statement:
                  "Economic conditions: inflation, interest rates, growth, exchange rates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Interest rates are an economic indicator affecting borrowing costs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Rising interest rates",
          },
        },
        {
          id: "cieibs-u2-ex-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a social influence on business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An ageing population" },
              { id: "b", text: "A rise in corporation tax" },
              { id: "c", text: "New automation technology" },
              { id: "d", text: "Flooding of a factory site" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social trends",
                statement: "Changing societal attitudes and demographics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Demographic change is a social factor affecting demand.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "An ageing population",
          },
        },
        {
          id: "cieibs-u2-ex-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Inflation is 4%. A basket of goods costs $250 this year. (a) Calculate the cost next year if inflation stays at 4%. (b) If a worker's wage rises from $2,000 to $2,080, calculate the percentage wage increase.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 260, unit: "$" },
              { label: "b", answer: 4, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inflation maths",
                statement: "New price = old price x (1 + inflation rate).",
              },
            ],
            steps: [
              { reasoning: "250 x 1.04 = $260.", marks: 1, markCode: "M" },
              {
                reasoning: "Wage increase = (2080 - 2000)/2000 x 100 = 4%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $260, b) 4%",
          },
        },
        {
          id: "cieibs-u2-ex-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two ways technological change can affect a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Technological change",
                statement: "New technologies affecting how business operates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Can improve efficiency and reduce costs through automation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Creates new products/markets but can make existing products obsolete.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Efficiency gains or new markets; possible obsolescence",
          },
        },
        {
          id: "cieibs-u2-ex-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PESTLE stand for?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Production, Employment, Sales, Tax, Location, Export",
              },
              {
                id: "b",
                text: "Political, Economic, Social, Technological, Legal, Environmental",
              },
              {
                id: "c",
                text: "People, Energy, Sales, Technology, Law, Environment",
              },
              {
                id: "d",
                text: "Price, Exchange, Supply, Trade, Labour, Energy",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PESTLE",
                statement:
                  "Political, Economic, Social, Technological, Legal, Environmental.",
              },
            ],
            steps: [
              {
                reasoning: "PESTLE is the framework for external analysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Political, Economic, Social, Technological, Legal, Environmental",
          },
        },
        {
          id: "cieibs-u2-ex-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "VAT is 20%. A restaurant bill before VAT is $150. (a) Calculate the VAT amount. (b) Calculate the total bill including VAT.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30, unit: "$" },
              { label: "b", answer: 180, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tax calculation",
                statement: "Tax = price x rate; total = price + tax.",
              },
            ],
            steps: [
              { reasoning: "VAT = 0.20 x 150 = $30.", marks: 1, markCode: "M" },
              {
                reasoning: "Total = 150 + 30 = $180.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $30, b) $180",
          },
        },
        {
          id: "cieibs-u2-ex-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how an external influence can create both an opportunity and a threat for the same business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dual impact",
                statement:
                  "External factors can help or harm depending on the business.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify an influence, e.g. rising interest rates or new technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explain the opportunity side, e.g. competitors struggle while you adapt.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explain the threat side, e.g. higher costs or new competition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Same factor can help or harm — explain both sides",
          },
        },
        {
          id: "cieibs-u2-ex-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is an environmental influence on business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing fashion trends" },
              { id: "b", text: "A cut in income tax" },
              { id: "c", text: "Climate change and extreme weather" },
              { id: "d", text: "A new smartphone launch" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Environmental factors",
                statement:
                  "Natural and physical conditions affecting business.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Climate and weather are physical/environmental factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Climate change and extreme weather",
          },
        },
        {
          id: "cieibs-u2-ex-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business imports goods priced at $10,000 when the exchange rate is $1 = 1.25 euros. (a) Calculate the cost in euros. (b) If the exchange rate changes to $1 = 1.10 euros, recalculate the euro cost.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12500, unit: "euros" },
              { label: "b", answer: 11000, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exchange rates",
                statement: "Cost in foreign currency = price x exchange rate.",
              },
            ],
            steps: [
              {
                reasoning: "10000 x 1.25 = 12,500 euros.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "10000 x 1.10 = 11,000 euros — cheaper imports.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 12,500 euros, b) 11,000 euros",
          },
        },
        {
          id: "cieibs-u2-ex-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A local bakery faces a new competitor opening nearby, rising ingredient prices and a social trend toward healthy eating. Using PESTLE categories, analyse how the business could respond to each influence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PESTLE response",
                statement: "Classify influence then propose adaptation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New competitor = economic/competitive; respond via differentiation or quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rising ingredient prices = economic; respond via cost control or price rise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Healthy eating trend = social; respond with new product range.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Coherent adaptation strategy linking each factor to an action.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Classified PESTLE analysis with matching responses",
          },
        },
        {
          id: "cieibs-u2-ex-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a legal/political influence on business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rising sea levels" },
              { id: "b", text: "A new manufacturing robot" },
              { id: "c", text: "Consumer preference for online shopping" },
              { id: "d", text: "A minimum wage law" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Political/legal",
                statement: "Government policies, laws and regulations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Minimum wage is a legal requirement imposed by government.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A minimum wage law",
          },
        },
        {
          id: "cieibs-u2-ex-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define external influence, economic environment, social trends, technological change, political/legal factors, environmental factors. (b) What is PESTLE? List its six categories. (c) Give one example of an economic influence. (d) Give one example of a social influence. (e) Give one example of a technological influence. (f) Inflation is 5% and a product costs $80. Calculate its price next year. (g) Explain one opportunity an external influence can create. (h) Explain why businesses must monitor the external environment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "External influences",
                statement: "PESTLE framework and impacts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) PESTLE = Political, Economic, Social, Technological, Legal, Environmental.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) E.g. interest rates, inflation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) E.g. ageing population, lifestyle changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) E.g. internet, automation.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "(f) 80 x 1.05 = $84.", marks: 1, markCode: "M" },
              {
                reasoning:
                  "(g) E.g. new technology opens export markets — valid example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) To spot opportunities and threats early and adapt — reasoned answer.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "External influences, PESTLE and calculation.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u2-ex-notes",
      title: "External influences — notes",
      summary:
        "PESTLE: Political, Economic, Social, Technological, Legal, Environmental. Businesses must adapt to external changes.",
      sections: [
        {
          heading: "Key idea",
          body: "External environment creates both opportunities and threats.",
        },
        {
          heading: "PESTLE",
          body: "Framework for systematic external analysis.",
        },
      ],
    },
  ],
};
