import type { Lesson } from "../../../types.ts";

export const lesson392: Lesson = {
  id: "ciealbus-u3-lesson-3-2",
  code: "3-2",
  title: "International Trade and Exchange Rates",
  goal: "I CAN explain international trade, exchange rates and their business impact.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: global business"],

  vocabulary: [
    {
      term: "Exchange rate",
      definition: "Value of one currency in terms of another.",
    },
    { term: "Appreciation", definition: "Increase in currency value." },
    { term: "Depreciation", definition: "Decrease in currency value." },
    {
      term: "Balance of trade",
      definition: "Difference between exports and imports.",
    },
    { term: "Tariff", definition: "Tax on imported goods." },
    { term: "Quota", definition: "Limit on quantity of imports." },
  ],
  concepts: [
    {
      id: "ciealbus-u3-s2-trade",
      title: "International trade",
      skill: "Understand exchange rates and trade barriers.",
      lesson: {
        sections: [
          {
            heading: "Exchange rates",
            body: "Strong currency: exports expensive, imports cheap. Weak currency: exports cheap, imports expensive. Affects competitiveness and profit margins.",
          },
          {
            heading: "Trade barriers",
            body: "Tariffs: taxes on imports protect domestic industry. Quotas: limit import quantities. Non-tariff barriers: regulations, standards. Free trade agreements reduce barriers.",
          },
        ],
        keyFormulas: [
          { name: "Exchange rate", statement: "currency value" },
          { name: "Appreciation", statement: "currency strengthens" },
          { name: "Depreciation", statement: "currency weakens" },
        ],
        workedExample: {
          problem:
            "A UK exporter sells to US. Pound appreciates 20%. What happens?",
          solution:
            "Exports become more expensive in dollars — US customers buy less. Exporter's revenue may fall unless prices adjusted.",
        },
      },
      questions: [
        {
          id: "ciealbus-u3-tr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an exchange rate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A business objective",
              },
              {
                id: "b",
                text: "Value of one currency in terms of another",
              },
              {
                id: "c",
                text: "A trade barrier",
              },
              {
                id: "d",
                text: "A type of tax",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exchange rate",
                statement: "Currency value.",
              },
            ],
            steps: [
              {
                reasoning: "Exchange rate = currency value ratio.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Currency value",
          },
        },
        {
          id: "ciealbus-u3-tr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a tariff?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tariff",
                statement: "Import tax.",
              },
            ],
            steps: [
              {
                reasoning: "Tax on imported goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Protects domestic industry from competition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Import tax",
          },
        },
        {
          id: "ciealbus-u3-tr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does currency depreciation affect a business?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Depreciation",
                statement: "Business impact.",
              },
            ],
            steps: [
              {
                reasoning: "Exports become cheaper — more competitive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Imports become expensive — higher costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affects profit margins and competitiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Currency depreciation impact",
          },
        },
        {
          id: "ciealbus-u3-tr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define exchange rate, appreciation, depreciation, balance of trade, tariff, quota. (b) What is an exchange rate? (c) What is depreciation? (d) What is a tariff? (e) How does currency appreciation affect exporters? (f) What is balance of trade? (g) What are trade barriers? (h) Evaluate whether tariffs benefit or harm an economy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Trade",
                statement: "Exchange rates, barriers.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Currency value ratio.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Currency weakens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Import tax.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Exports more expensive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Exports minus imports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Tariffs, quotas, regulations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "International trade and exchange rates.",
          },
        },
        {
          id: "ciealbus-u3-tr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Currency appreciation means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "inflation rises",
              },
              {
                id: "b",
                text: "the currency's value falls against other currencies",
              },
              {
                id: "c",
                text: "interest rates increase",
              },
              {
                id: "d",
                text: "the currency's value rises against other currencies",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appreciation",
                statement: "Currency strengthens.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Appreciation is an increase in a currency's exchange rate value relative to other currencies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** the currency's value rises against other currencies",
          },
        },
        {
          id: "ciealbus-u3-tr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "£1 buys $1.50 on the foreign exchange market. A UK exporter prices its goods at £200. (a) Calculate the dollar price of the goods. (b) If the pound appreciates so that £1 buys $1.80, calculate the new dollar price.",
          parts: [
            { label: "a", prompt: "Dollar price at original rate", marks: 1 },
            { label: "b", prompt: "Dollar price after appreciation", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 300, unit: "$" },
              { label: "b", answer: 360, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exchange rate conversion",
                statement: "Multiply domestic price by exchange rate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Dollar price = 200 × 1.50 = $300.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "New dollar price = 200 × 1.80 = $360 — appreciation makes exports more expensive abroad.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $300; b = $360",
          },
        },
        {
          id: "ciealbus-u3-tr-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a quota, and how does it differ from a tariff?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quota vs tariff",
                statement: "Quantity limit vs tax.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A quota is a physical limit on the quantity of a good that may be imported.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A tariff is a tax on each imported unit — quotas restrict quantity directly while tariffs raise price.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Quota limits quantity; tariff taxes imports",
          },
        },
        {
          id: "ciealbus-u3-tr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A depreciation of the domestic currency generally makes the country's exports:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "subject to higher tariffs",
              },
              {
                id: "b",
                text: "more expensive abroad",
              },
              {
                id: "c",
                text: "cheaper and more competitive abroad",
              },
              {
                id: "d",
                text: "unaffected in price",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Depreciation effects",
                statement: "Weak currency boosts export competitiveness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Depreciation lowers the foreign-currency price of exports, making them cheaper and more competitive overseas.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** cheaper and more competitive abroad",
          },
        },
        {
          id: "ciealbus-u3-tr-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A country has exports of $450 million and imports of $520 million. (a) Calculate the balance of trade. (b) If exports rise by 10%, calculate the new export value. (c) Calculate the new balance of trade.",
          parts: [
            { label: "a", prompt: "Balance of trade ($m)", marks: 1 },
            { label: "b", prompt: "New export value ($m)", marks: 1 },
            { label: "c", prompt: "New balance of trade ($m)", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -70, unit: "$m" },
              { label: "b", answer: 495, unit: "$m" },
              { label: "c", answer: -25, unit: "$m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balance of trade",
                statement: "Exports minus imports; negative = deficit.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Balance = 450 - 520 = -70 (a $70m deficit).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "New exports = 450 × 1.10 = 495.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "New balance = 495 - 520 = -25 — deficit narrows but remains.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a = -$70m; b = $495m; c = -$25m",
          },
        },
        {
          id: "ciealbus-u3-tr-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two effects of a depreciation of the domestic currency on a business that imports raw materials.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Depreciation and importers",
                statement: "Weaker currency raises import costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Imported raw materials become more expensive in domestic currency, raising production costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher input costs squeeze profit margins unless the firm can pass costs on through higher prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If the firm also exports, depreciation may partly offset the cost rise by making its exports more competitive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Import costs rise, squeezing margins unless prices rise or exports benefit",
          },
        },
        {
          id: "ciealbus-u3-tr-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A government requires all imported cars to meet strict new safety standards before sale. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "a tariff",
              },
              {
                id: "b",
                text: "a subsidy",
              },
              {
                id: "c",
                text: "a non-tariff barrier",
              },
              {
                id: "d",
                text: "a quota",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-tariff barrier",
                statement: "Regulations, standards and other non-tax barriers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Safety standards are regulatory requirements, not taxes or quantity limits — they are non-tariff barriers that can restrict imports.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** a non-tariff barrier",
          },
        },
        {
          id: "ciealbus-u3-tr-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An importer buys components for $600. The exchange rate moves from £1 = $1.50 to £1 = $1.20. (a) Calculate the cost in pounds at the original rate. (b) Calculate the cost in pounds at the new rate. (c) Calculate the increase in pound cost and state whether the pound has depreciated.",
          parts: [
            { label: "a", prompt: "Cost in pounds at £1 = $1.50", marks: 1 },
            { label: "b", prompt: "Cost in pounds at £1 = $1.20", marks: 1 },
            { label: "c", prompt: "Increase in pound cost (£)", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 400, unit: "£" },
              { label: "b", answer: 500, unit: "£" },
              { label: "c", answer: 100, unit: "£" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exchange rate and import costs",
                statement:
                  "Depreciation raises the domestic-currency cost of imports.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cost in pounds = 600 / 1.50 = £400.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "New cost = 600 / 1.20 = £500.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Increase = 500 - 400 = £100.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "The pound buys fewer dollars (£1 = $1.20 instead of $1.50), so it has depreciated and import costs have risen.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "a = £400; b = £500; c = £100 increase; pound depreciated",
          },
        },
        {
          id: "ciealbus-u3-tr-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A persistent trade deficit means that a country:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "has balanced trade",
              },
              {
                id: "b",
                text: "imports exceed exports",
              },
              {
                id: "c",
                text: "has no trade barriers",
              },
              {
                id: "d",
                text: "exports exceed imports",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trade deficit",
                statement: "Imports > exports.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A deficit occurs when the value of imports exceeds the value of exports over a period.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** imports exceed exports",
          },
        },
        {
          id: "ciealbus-u3-tr-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A country exports $400 million and imports $320 million. (a) Calculate the balance of trade. (b) If imports then rise by 15%, calculate the new balance of trade.",
          parts: [
            { label: "a", prompt: "Initial balance of trade ($m)", marks: 1 },
            {
              label: "b",
              prompt: "New balance after import rise ($m)",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 80, unit: "$m" },
              { label: "b", answer: 32, unit: "$m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balance of trade",
                statement: "Exports - imports.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Balance = 400 - 320 = 80 surplus.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "New imports = 320 × 1.15 = 368; new balance = 400 - 368 = 32.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $80m; b = $32m",
          },
        },
        {
          id: "ciealbus-u3-tr-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is most likely to help reduce a country's trade deficit?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "subsidies to foreign importers",
              },
              {
                id: "b",
                text: "a depreciation of the domestic currency",
              },
              {
                id: "c",
                text: "a quota on domestic exports",
              },
              {
                id: "d",
                text: "higher tariffs on exports",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Trade balance",
                statement: "Weaker currency can improve competitiveness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Depreciation makes exports cheaper and imports dearer, tending to improve the balance of trade — though effects take time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** a depreciation of the domestic currency",
          },
        },
        {
          id: "ciealbus-u3-tr-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain two effects of a significant depreciation of the domestic currency on exporters. (b) Explain two effects on importers. (c) Identify one effect on the wider economy. (d) Evaluate whether depreciation is overall beneficial for an economy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Depreciation evaluation",
                statement: "Currency movements affect trade and inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Exports become cheaper abroad, boosting competitiveness and potentially raising export volumes and revenue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Imports become more expensive, raising costs for importers and domestic consumers of imported goods.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Economy-wide: import prices may fuel inflation; improved competitiveness may reduce unemployment and the trade deficit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Benefit depends on the structure of the economy — export-led gains versus import-driven inflation and higher input costs.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) Overall judgement: depreciation can help a trade-deficit economy but risks inflation; a moderate, managed fall is usually preferable.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Depreciation boosts exports but raises import costs and inflation risk",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u3-tr-notes",
      title: "Trade — notes",
      summary:
        "Exchange rates affect competitiveness. Tariffs/quotas protect domestic industry but may harm economy.",
      sections: [
        {
          heading: "Key idea",
          body: "Currency movements and trade barriers significantly impact international business.",
        },
        {
          heading: "Trade-offs",
          body: "Protectionism vs free trade — complex economic and political debate.",
        },
      ],
    },
  ],
};
