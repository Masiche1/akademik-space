import type { Lesson } from "../../../types.ts";

export const lesson373: Lesson = {
  id: "ciealbus-u1-lesson-1-3",
  code: "1-3",
  title: "External Influences on Business",
  goal: "I CAN analyse economic, social, technological, environmental, political and legal influences.",
  standards: [
    "Cambridge A Level Business 9707",
    "Paper 1: external influences",
  ],

  vocabulary: [
    {
      term: "Economic influence",
      definition:
        "GDP, inflation, interest rates, exchange rates affecting business.",
    },
    {
      term: "Social influence",
      definition: "Demographics, lifestyle changes, consumer trends.",
    },
    {
      term: "Technological influence",
      definition: "New technologies, automation, digitalisation.",
    },
    {
      term: "Environmental influence",
      definition: "Climate change, sustainability, regulations.",
    },
    {
      term: "Political/legal influence",
      definition: "Government policies, laws, regulations.",
    },
    {
      term: "PESTLE analysis",
      definition: "Framework for analysing external influences.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u1-s3-ext",
      title: "External influences",
      skill: "Analyse PESTLE factors affecting business.",
      lesson: {
        sections: [
          {
            heading: "PESTLE framework",
            body: "Political: government stability, policies. Economic: growth, inflation, interest rates. Social: demographics, trends. Technological: innovation, automation. Legal: laws, regulations. Environmental: climate, sustainability.",
          },
          {
            heading: "Impact analysis",
            body: "Each factor can create opportunities or threats. Businesses must monitor and adapt. Some factors beyond control — need contingency planning.",
          },
        ],
        keyFormulas: [
          {
            name: "PESTLE",
            statement:
              "Political, Economic, Social, Technological, Legal, Environmental",
          },
          { name: "External", statement: "factors beyond business control" },
        ],
        workedExample: {
          problem: "How does rising interest rate affect a business?",
          solution:
            "Higher borrowing costs, reduced consumer spending, increased mortgage payments → lower demand for discretionary goods.",
        },
      },
      questions: [
        {
          id: "ciealbus-u1-ext-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PESTLE stand for?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Profit, Expense, Sales, Tax, Legal, Economic",
              },
              {
                id: "b",
                text: "Production, Efficiency, Sales, Technology, Logistics, Economics",
              },
              {
                id: "c",
                text: "Political, Economic, Social, Technological, Legal, Environmental",
              },
              {
                id: "d",
                text: "Planning, Execution, Strategy, Tactics, Leadership, Evaluation",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PESTLE",
                statement: "External analysis framework.",
              },
            ],
            steps: [
              {
                reasoning:
                  "PESTLE = Political, Economic, Social, Technological, Legal, Environmental.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "PESTLE framework",
          },
        },
        {
          id: "ciealbus-u1-ext-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are external influences on business?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "External influences",
                statement: "Beyond control.",
              },
            ],
            steps: [
              {
                reasoning: "Factors beyond business control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Economic, social, technological, environmental, political, legal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Beyond control factors",
          },
        },
        {
          id: "ciealbus-u1-ext-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does technology affect business?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technological influence",
                statement: "Innovation impact.",
              },
            ],
            steps: [
              {
                reasoning: "New technologies create opportunities/threats.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Automation, digitalisation, e-commerce.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Must adapt or risk obsolescence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Innovation impact",
          },
        },
        {
          id: "ciealbus-u1-ext-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define PESTLE, economic influence, social influence, technological influence, environmental influence, political/legal influence. (b) What is PESTLE? (c) What are external influences? (d) How does economic influence affect business? (e) How does technology affect business? (f) How does environmental influence affect business? (g) How does legal influence affect business? (h) Evaluate whether businesses can control external influences.",
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
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) PESTLE framework.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Beyond control factors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) GDP, inflation, interest rates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Innovation, automation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Climate, sustainability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Laws, regulations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Limited control — adapt strategy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "External influences analysis.",
          },
        },
        {
          id: "ciealbus-u1-ext-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In PESTLE analysis, government policies, political stability and tax changes are covered by which letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "P — Political" },
              { id: "b", text: "E — Economic" },
              { id: "c", text: "L — Legal" },
              { id: "d", text: "S — Social" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PESTLE",
                statement:
                  "P covers political factors such as government policies and stability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Government policies and political stability fall under the Political (P) factor.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "P — Political",
          },
        },
        {
          id: "ciealbus-u1-ext-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If inflation rises sharply, what is the most likely effect on a business selling non-essential goods?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its costs will automatically fall" },
              {
                id: "b",
                text: "Demand for its products will probably fall as consumers' purchasing power declines",
              },
              {
                id: "c",
                text: "Its market share will rise without any action",
              },
              { id: "d", text: "It will find it easier to borrow money" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflation",
                statement:
                  "Rising prices erode consumers' real purchasing power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "High inflation reduces real incomes, cutting demand especially for discretionary goods.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Demand likely falls as purchasing power declines",
          },
        },
        {
          id: "ciealbus-u1-ext-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "An ageing population in a country is best described as which type of external influence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social" },
              { id: "b", text: "Environmental" },
              { id: "c", text: "Technological" },
              { id: "d", text: "Political" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social influence",
                statement: "Demographics and lifestyle changes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Demographic changes such as an ageing population are social influences.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Social",
          },
        },
        {
          id: "ciealbus-u1-ext-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A factory replaces most of its manual workers with automated machinery. This is primarily an example of...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a technological influence on business" },
              { id: "b", text: "a legal influence on business" },
              { id: "c", text: "an economic influence on business" },
              { id: "d", text: "a social influence on business" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Technological influence",
                statement: "Automation and digitalisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Automation is a technological change, even though it has economic and social knock-on effects.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Technological influence",
          },
        },
        {
          id: "ciealbus-u1-ext-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A business buys materials costing £50,000 and sells output for £80,000. (a) If input costs rise by 6% due to inflation, calculate the new materials cost. (b) If the selling price rises by 4%, calculate the new revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 53000, unit: "£" },
              { label: "b", answer: 83200, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage change",
                statement:
                  "New value = original x (1 + percentage change / 100).",
              },
            ],
            steps: [
              {
                reasoning: "(a) New cost = 50000 x 1.06.",
                working: "50000 \\times 1.06",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) New revenue = 80000 x 1.04.",
                working: "80000 \\times 1.04",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£53,000 and £83,200",
          },
        },
        {
          id: "ciealbus-u1-ext-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A UK exporter earns $100,000 from US sales. (a) Calculate the sterling revenue when the exchange rate is $1.50 per £1. (b) Calculate the sterling revenue when the rate falls to $1.20 per £1.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 66666.67, tolerance: 0.01, unit: "£" },
              { label: "b", answer: 83333.33, tolerance: 0.01, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exchange rate conversion",
                statement:
                  "Sterling value = foreign currency amount / exchange rate.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Divide dollars by the exchange rate.",
                working: "100000 \\div 1.5",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) A weaker pound raises sterling revenue.",
                working: "100000 \\div 1.2",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£66,666.67 and £83,333.33",
          },
        },
        {
          id: "ciealbus-u1-ext-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain how legal influences affect the way a business must operate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Legal influence",
                statement: "Laws and regulations businesses must comply with.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Laws cover employment, consumer protection, health and safety, competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Non-compliance can bring fines or prosecution, so businesses must monitor legislation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Laws dictate compliance requirements; breach risks fines and prosecution.",
          },
        },
        {
          id: "ciealbus-u1-ext-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how environmental factors can create both opportunities and threats for a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Environmental analysis",
                statement:
                  "Climate and sustainability as opportunity and threat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Threats: climate change raises costs, extreme weather disrupts operations, regulation tightens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Opportunities: demand for green products grows, sustainable firms gain reputation and market share.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Businesses that adapt early can turn environmental pressure into competitive advantage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Threats from costs/regulation; opportunities from green demand and reputation.",
          },
        },
        {
          id: "ciealbus-u1-ext-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do businesses monitor external influences using frameworks such as PESTLE?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because PESTLE guarantees accurate forecasts of the future",
              },
              {
                id: "b",
                text: "Because it removes the need for any internal analysis",
              },
              {
                id: "c",
                text: "Because external influences only ever create threats",
              },
              {
                id: "d",
                text: "Because external factors cannot be controlled, monitoring lets businesses anticipate and adapt",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Environmental monitoring",
                statement: "Anticipate external change to adapt strategy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "External factors are beyond control, so monitoring helps businesses respond quickly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Monitoring allows anticipation and adaptation to uncontrollable change",
          },
        },
        {
          id: "ciealbus-u1-ext-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate the view that businesses can do nothing to influence the external factors that affect them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Control vs adaptation in the external environment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Most external factors — interest rates, exchange rates, climate — are genuinely beyond a single firm's control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But large firms and trade bodies can lobby government and shape some policies and standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: direct control is limited, but adaptation and influence are possible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Control is limited but adaptation and some influence (e.g. lobbying) are possible.",
          },
        },
        {
          id: "ciealbus-u1-ext-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A business has borrowed £200,000. (a) Calculate the annual interest cost at an interest rate of 5%. (b) Calculate the annual interest cost if the rate rises to 7%.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10000, unit: "£" },
              { label: "b", answer: 14000, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest",
                statement: "Interest = principal x interest rate.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Interest = principal x rate.",
                working: "200000 \\times 0.05",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "(b) Same formula at the higher rate — shows rising-rate risk.",
                working: "200000 \\times 0.07",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "£10,000 and £14,000",
          },
        },
        {
          id: "ciealbus-u1-ext-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using examples, evaluate the impact of technological change on a traditional high-street retailer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement:
                  "Weigh technological threats and opportunities for a business.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Threats: online competition reduces footfall; e-commerce undercuts prices; some jobs become obsolete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Opportunities: online sales channels, data analytics, self-checkouts and delivery logistics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Retailers that integrate digital and physical ('bricks and clicks') can thrive.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: technology is disruptive but also offers routes to survival and growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Disruptive threat, but digital adaptation offers survival and growth routes.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u1-ext-notes",
      title: "External influences — notes",
      summary:
        "PESTLE=Political, Economic, Social, Technological, Legal, Environmental. Monitor and adapt.",
      sections: [
        {
          heading: "Key idea",
          body: "External factors create opportunities and threats — businesses must monitor and respond.",
        },
        {
          heading: "Adaptation",
          body: "Cannot control external environment but can adapt strategy.",
        },
      ],
    },
  ],
};
