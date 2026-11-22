import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "eiasbiz-u6-lesson-6-1",
  code: "6-1",
  title: "Economic and Political Influences",
  goal: "I CAN explain how economic conditions and government policy affect business.",
  standards: [
    "Edexcel IAS Business WBP01 Unit 6 — External Influences on Business Activity",
  ],
  vocabulary: [
    {
      term: "Economic environment",
      definition:
        "Conditions affecting business — growth, inflation, interest rates.",
    },
    {
      term: "Inflation",
      definition: "Rising general price level — reduces purchasing power.",
    },
    {
      term: "Interest rate",
      definition: "Cost of borrowing — set by central bank.",
    },
    {
      term: "Fiscal policy",
      definition: "Government spending and taxation decisions.",
    },
    {
      term: "Monetary policy",
      definition: "Central bank control of money supply and interest rates.",
    },
    {
      term: "Exchange rate",
      definition: "Value of one currency relative to another.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u6-economic",
      title: "Economic Environment",
      skill: "Analyse how economic conditions impact business.",
      lesson: {
        sections: [
          {
            heading: "Economic factors",
            body: "**Economic growth**: rising GDP — more demand, hiring. **Recession**: falling GDP — less demand, layoffs. **Inflation**: rising prices — costs up, consumers spend less. **Interest rates**: high = expensive borrowing, low = cheap credit. **Exchange rates**: strong currency = cheaper imports, harder exports; weak = opposite.\n\n**Business cycle**: boom → recession → recovery — businesses must plan for cycles.",
          },
          {
            heading: "Impacts",
            body: "Recession hurts most businesses — discretionary spending falls first. Inflation squeezes margins — can't always pass costs to customers. High interest rates reduce investment — borrowing expensive.\n\n**Example**: rising interest rates → mortgage costs up → housing demand falls → construction slows.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Central bank raises interest rates. Effect on retailers?",
          solution: "Borrowing costs up; customers cut spending.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u6-econ-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unemployment" },
              { id: "b", text: "Rising general price level" },
              { id: "c", text: "Interest rates" },
              { id: "d", text: "Economic growth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflation",
                statement: "Rising prices.",
              },
            ],
            steps: [
              {
                reasoning: "Inflation = rising price level.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Rising prices",
            commonErrors: ["Growth confused."],
          },
        },
        {
          id: "eiasbiz-u6-econ-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways a recession affects businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recession impact",
                statement: "Demand falls.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Falling demand — consumers spend less on non-essentials.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rising unemployment — fewer customers with income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tighter credit — harder to borrow for investment.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Demand falls, unemployment rises, credit tight.",
            commonErrors: ["Only one.", "Positive effect."],
          },
        },
        {
          id: "eiasbiz-u6-econ-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how exchange rates affect exporters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchange rates",
                statement: "Currency strength.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strong currency → exports more expensive abroad — demand falls.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Weak currency → exports cheaper — demand rises.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Imports cheaper with strong currency — input costs fall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Businesses may hedge or price in foreign currency.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Strong=hard exports; weak=easy exports.",
            commonErrors: ["One direction.", "No mechanism."],
          },
        },
        {
          id: "eiasbiz-u6-econ-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An exporter's home currency strengthens significantly.",
          parts: [
            {
              label: "a",
              prompt: "Explain two impacts on the business.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two responses.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchange rate impact",
                statement: "Competitiveness changes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Exports more expensive — lose price competitiveness.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Imports cheaper — input costs may fall.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Cut prices to stay competitive — margin squeeze.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Focus on quality/niche — differentiate from price competition.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) exports harder+imports cheaper (b) price cut+quality",
            commonErrors: ["No impact.", "No response."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u6-political",
      title: "Government Policy and Social Influences",
      skill:
        "Explain how legislation, taxation and social trends affect business.",
      lesson: {
        sections: [
          {
            heading: "Government influence",
            body: "**Fiscal policy**: government spending + taxation — stimulus in recession, restraint in boom. **Monetary policy**: central bank interest rates — control borrowing/inflation. **Legislation**: employment law, consumer protection, environmental rules — compliance costs.\n\n**Regulation**: minimum wage, working hours, health & safety — protects workers but raises costs.",
          },
          {
            heading: "Social influences",
            body: "**Demographics**: ageing population — demand for healthcare/retirement products. **Consumer trends**: ethical consumption, health awareness, convenience. **Technology adoption**: changes how people buy and work.\n\n**Pressure groups**: campaign on issues — environment, workers' rights — influence public opinion and policy.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Government raises minimum wage. Effect on restaurants?",
          solution: "Labour costs up — may raise prices or cut hours.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u6-pol-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is fiscal policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Company budget" },
              { id: "b", text: "Interest rates" },
              { id: "c", text: "Government spending and taxation" },
              { id: "d", text: "Worker pay" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fiscal policy",
                statement: "Gov spending + tax.",
              },
            ],
            steps: [
              {
                reasoning: "Fiscal = government spending/tax.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Spending + taxation",
            commonErrors: ["Monetary confused."],
          },
        },
        {
          id: "eiasbiz-u6-pol-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways government policy affects businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Government influence",
                statement: "Policy + law.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Taxation changes profit margins — corporation tax, VAT.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Legislation sets compliance costs — employment, safety.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Spending/incentives can boost demand — public contracts.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Tax, legislation, spending incentives.",
            commonErrors: ["Only one.", "No mechanism."],
          },
        },
        {
          id: "eiasbiz-u6-pol-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how demographic change creates business opportunities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demographics",
                statement: "Population shifts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ageing population — healthcare, retirement products demand.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Urbanisation — demand for city services, housing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rising incomes — demand for premium/luxury goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Businesses must anticipate shifts — plan product mix.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Ageing, urbanisation, income — new demand.",
            commonErrors: ["Only one.", "No opportunity."],
          },
        },
        {
          id: "eiasbiz-u6-pol-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A country raises corporation tax and tightens environmental rules.",
          parts: [
            {
              label: "a",
              prompt: "Explain two impacts on a manufacturer.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two business responses.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy response",
                statement: "Adapt to regulation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Higher tax — reduced after-tax profit.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Environmental compliance costs — equipment, processes.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Improve efficiency — offset higher costs.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Invest in green technology — comply + gain reputation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) tax+compliance costs (b) efficiency+green tech",
            commonErrors: ["No impact.", "No response."],
          },
        },
      ],
    },
  ],
};
