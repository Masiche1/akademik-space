import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ebz11-u6-lesson-6-1",
  code: "6-1",
  title: "External Influences: Economic and Government",
  goal: "I CAN explain how economic conditions and government affect business.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences"],
  vocabulary: [
    {
      term: "Inflation",
      definition: "Rising prices reducing purchasing power.",
    },
    {
      term: "Recession",
      definition: "Two consecutive quarters of negative economic growth.",
    },
    {
      term: "Interest rate",
      definition: "Cost of borrowing money — set by central bank.",
    },
    {
      term: "Taxation",
      definition: "Government revenue from businesses and individuals.",
    },
    {
      term: "Exchange rate",
      definition: "Value of one currency relative to another.",
    },
  ],
  concepts: [
    {
      id: "ebz11-u6-economic",
      title: "Economic Influences",
      skill:
        "Understand how inflation, recession and interest rates affect business.",
      lesson: {
        sections: [
          {
            heading: "Inflation and recession",
            body: "**Inflation**: rising prices — costs increase, consumers buy less, wages may not keep up. Businesses struggle with higher costs and reduced demand.\n**Recession**: economic decline — falling demand, job losses, business failures. Businesses must cut costs, focus on essentials, may need loans.\n**Boom**: strong economy — high demand, easy borrowing, but inflation risk and competition.",
          },
          {
            heading: "Interest rates and exchange rates",
            body: "**Interest rates**: cost of borrowing — high rates discourage borrowing/investment, increase mortgage costs; low rates encourage spending/investment. **Central bank** sets rates to control inflation/growth.\n**Exchange rates**: strong currency = cheaper imports, more expensive exports; weak currency = vice versa. Affects competitiveness and profit margins.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Interest rates rise from 2% to 5%. How does this affect a business planning expansion?",
          solution:
            "Borrowing costs increase — expansion may be delayed or cancelled.",
        },
      },
      questions: [
        {
          id: "ebz11-u6-economic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Falling prices" },
              { id: "b", text: "Economic growth" },
              { id: "c", text: "Low unemployment" },
              { id: "d", text: "Rising prices reducing purchasing power" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflation",
                statement: "Rising prices — less purchasing power.",
              },
            ],
            steps: [
              {
                reasoning: "Inflation = rising prices.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Rising prices",
            commonErrors: ["Deflation confused."],
          },
        },
        {
          id: "ebz11-u6-economic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a recession affect businesses?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recession impact",
                statement: "Falling demand, cost pressures, failures.",
              },
            ],
            steps: [
              {
                reasoning: "Demand falls — fewer sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Competition increases as businesses fight for customers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "More business failures — survival becomes priority.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Falling demand, more competition, business failures.",
            commonErrors: ["Boom effects.", "Only one impact."],
          },
        },
        {
          id: "ebz11-u6-economic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how high interest rates affect a business with a large loan.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rate impact",
                statement: "Higher rates = higher borrowing costs.",
              },
            ],
            steps: [
              {
                reasoning: "Interest payments increase — costs rise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less profit available for investment/dividends.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "May need to cut costs or raise prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Expansion plans may be postponed.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Higher costs, less profit, may cut costs/delay expansion.",
            commonErrors: ["No cost link.", "Only one effect."],
          },
        },
        {
          id: "ebz11-u6-economic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A UK exporter sells goods to the EU.",
          parts: [
            {
              label: "a",
              prompt: "Explain how a stronger pound affects exports.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Explain how inflation affects this business.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "External influences",
                statement: "Exchange rates + inflation affect competitiveness.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Strong pound = UK goods more expensive abroad.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) EU customers buy less → exports fall.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Rising costs squeeze margins.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) May need to raise prices → less competitive.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) strong pound=expensive exports (b) inflation=squeeze margins",
            commonErrors: ["Wrong direction.", "No mechanism."],
          },
        },
      ],
    },
    {
      id: "ebz11-u6-government",
      title: "Government and Legal Influences",
      skill: "Understand how government policy and law affect business.",
      lesson: {
        sections: [
          {
            heading: "Government influence",
            body: "**Taxation**: corporation tax on profits, VAT on sales, income tax on wages — affects costs and pricing. **Grants/subsidies**: government support for specific industries — reduces costs. **Regulation**: laws on employment, environment, competition, consumer protection.\n\n**Trade policies**: tariffs on imports, free trade agreements — affects competitiveness. **Privatisation/nationalisation**: government selling/taking over industries.",
          },
          {
            heading: "Legal environment",
            body: "**Consumer protection**: product safety, accurate advertising, refunds rights. **Competition law**: prevent monopolies, cartels, unfair practices. **Employment law**: contracts, dismissal, discrimination, minimum wage. **Environmental law**: emissions, waste disposal, sustainability.\n\n**Compliance**: businesses must follow laws — non-compliance = fines, prosecution, reputation damage. **Lobbying**: businesses influence government policy through trade associations and pressure groups.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Government raises corporation tax from 19% to 25%. Effect on business?",
          solution:
            "Higher tax on profits — less retained profit, may reduce investment.",
        },
      },
      questions: [
        {
          id: "ebz11-u6-government-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is corporation tax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax on imports" },
              { id: "b", text: "Tax on company profits" },
              { id: "c", text: "Tax on goods sold" },
              { id: "d", text: "Tax on employee wages" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corporation tax",
                statement: "Tax on company profits.",
              },
            ],
            steps: [
              {
                reasoning: "Corporation tax = profit tax.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Company profits",
            commonErrors: ["VAT confused."],
          },
        },
        {
          id: "ebz11-u6-government-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways government can support businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Government support",
                statement: "Grants, subsidies, training, infrastructure.",
              },
            ],
            steps: [
              {
                reasoning: "Grants/subsidies for specific industries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Training programmes and skills support.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Infrastructure investment — transport, broadband.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Grants, training, infrastructure.",
            commonErrors: ["Only restrictions listed.", "Only one."],
          },
        },
        {
          id: "ebz11-u6-government-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how competition law affects businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Competition law",
                statement: "Prevents monopolies, ensures fair competition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prevents monopolies — can't dominate market unfairly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stops cartels — companies can't fix prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Ensures fair competition — level playing field.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Protects consumers — prevents exploitation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Prevents monopolies/cartels, ensures fair competition, protects consumers.",
            commonErrors: ["Only penalties.", "No purpose."],
          },
        },
        {
          id: "ebz11-u6-government-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A business is accused of polluting a river.",
          parts: [
            { label: "a", prompt: "Identify two legal issues.", marks: 4 },
            { label: "b", prompt: "Explain possible consequences.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Environmental law",
                statement: "Pollution = legal breach.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Environmental law breach — pollution illegal.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Consumer/community health impact.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Fines and prosecution.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Reputation damage, boycotts, closure possible.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) env law breach/health impact (b) fines+reputation damage",
            commonErrors: ["No legal issue.", "No consequence."],
          },
        },
      ],
    },
  ],
};
