import type { Lesson } from "../../../types.ts";

export const lesson404: Lesson = {
  id: "ciealbus-u4-lesson-4-4",
  code: "4-4",
  title: "Global Business Strategy and Evaluation",
  goal: "I CAN evaluate global business strategies and their implications.",
  standards: ["Cambridge A Level Business 9707", "Paper 4: global strategy"],

  vocabulary: [
    {
      term: "Global strategy",
      definition: "Standardised approach across markets.",
    },
    {
      term: "Multi-domestic strategy",
      definition: "Adapted approach per market.",
    },
    {
      term: "Transnational strategy",
      definition: "Balance global efficiency and local responsiveness.",
    },
    { term: "Economies of scale", definition: "Cost advantages from size." },
    {
      term: "Cultural distance",
      definition: "Differences between home and host cultures.",
    },
    {
      term: "Political risk",
      definition: "Risk from government actions/political instability.",
    },
  ],
  concepts: [
    {
      id: "ciealbus-u4-s4-gbs",
      title: "Global business strategy",
      skill: "Evaluate international strategy choices.",
      lesson: {
        sections: [
          {
            heading: "Strategy spectrum",
            body: "Global: standardised everywhere — economies of scale but ignores local needs. Multi-domestic: fully adapted — responsive but loses scale. Transnational: balance both — complex but flexible.",
          },
          {
            heading: "Entry and risk",
            body: "Entry modes: exporting→licensing→franchising→joint venture→wholly-owned. Risks: political, currency, cultural, operational.",
          },
        ],
        keyFormulas: [
          { name: "Global", statement: "standardised" },
          { name: "Multi-domestic", statement: "adapted" },
          { name: "Transnational", statement: "balanced" },
        ],
        workedExample: {
          problem: "A fast-food chain wants to enter India. Which strategy?",
          solution:
            "Multi-domestic or transnational — adapt menu to local tastes (vegetarian options), respect cultural norms, balance with global brand consistency.",
        },
      },
      questions: [
        {
          id: "ciealbus-u4-gs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a global strategy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Adapted per market",
              },
              {
                id: "b",
                text: "Standardised approach across markets",
              },
              {
                id: "c",
                text: "A type of tax",
              },
              {
                id: "d",
                text: "A trade barrier",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Global strategy",
                statement: "Standardised.",
              },
            ],
            steps: [
              {
                reasoning: "Global = standardised across markets.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Standardised approach",
          },
        },
        {
          id: "ciealbus-u4-gs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a multi-domestic strategy?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multi-domestic",
                statement: "Adapted.",
              },
            ],
            steps: [
              {
                reasoning: "Adapted approach per market.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Responsive to local needs but loses scale.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Adapted per market",
          },
        },
        {
          id: "ciealbus-u4-gs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare global and multi-domestic strategies.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Strategy comparison",
                statement: "Global vs multi-domestic.",
              },
            ],
            steps: [
              {
                reasoning: "Global: standardised, economies of scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multi-domestic: adapted, local responsiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trade-off between efficiency and responsiveness.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Global vs multi-domestic",
          },
        },
        {
          id: "ciealbus-u4-gs-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define global strategy, multi-domestic strategy, transnational strategy, economies of scale, cultural distance, political risk. (b) What is global strategy? (c) What is multi-domestic? (d) What is transnational? (e) What are entry modes? (f) What is cultural distance? (g) What is political risk? (h) Evaluate which strategy suits a company entering emerging markets.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Global strategy",
                statement: "Evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Standardised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Adapted.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Balanced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Exporting→licensing→JV→wholly-owned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Cultural differences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Government/political instability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Context-dependent evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Global business strategy.",
          },
        },
        {
          id: "ciealbus-u4-gs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a transnational strategy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A standardised approach applied identically in every market",
              },
              {
                id: "b",
                text: "A strategy of only exporting goods abroad",
              },
              {
                id: "c",
                text: "A balance between global efficiency and local responsiveness",
              },
              {
                id: "d",
                text: "A fully adapted approach in each market with no global coordination",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transnational strategy",
                statement: "Balance global/local.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transnational strategy balances global efficiency with local responsiveness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(c)** A balance between global efficiency and local responsiveness",
          },
        },
        {
          id: "ciealbus-u4-gs-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A firm exports 5,000 units abroad at $40 each, with transport and distribution costs of $5 per unit. (a) Calculate the total transport and distribution cost. (b) Calculate the net revenue from the exports.",
          parts: [
            {
              label: "a",
              prompt: "Total transport and distribution cost",
              marks: 1,
            },
            { label: "b", prompt: "Net revenue", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25000, unit: "$" },
              { label: "b", answer: 175000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Export calculation",
                statement: "Net revenue = gross revenue minus export costs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cost = 5000 × 5 = 25000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Gross revenue = 5000 × 40 = 200000; net = 200000 - 25000 = 175000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "a = $25000; b = $175000",
          },
        },
        {
          id: "ciealbus-u4-gs-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List the main entry modes for international markets in order of increasing commitment and risk.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Entry modes",
                statement: "Increasing commitment spectrum.",
              },
            ],
            steps: [
              {
                reasoning: "Low commitment: exporting, licensing, franchising.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "High commitment: joint venture, wholly-owned subsidiary — greater control but more risk.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Exporting → licensing → franchising → joint venture → wholly-owned",
          },
        },
        {
          id: "ciealbus-u4-gs-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which international strategy is most likely to achieve economies of scale?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Multi-domestic strategy",
              },
              {
                id: "b",
                text: "Global strategy",
              },
              {
                id: "c",
                text: "Licensing",
              },
              {
                id: "d",
                text: "Franchising",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Global strategy",
                statement: "Standardisation yields scale economies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Standardised global production and marketing create economies of scale.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** Global strategy",
          },
        },
        {
          id: "ciealbus-u4-gs-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A UK exporter sells products priced at $100 each to the US. The exchange rate moves against the firm by 8%. It sells 20,000 units a year. (a) Calculate the exchange rate loss per unit. (b) Calculate the total annual exchange rate loss in dollar terms. (c) State one way the firm could reduce this currency risk.",
          parts: [
            { label: "a", prompt: "Loss per unit", marks: 1 },
            { label: "b", prompt: "Total annual loss", marks: 1 },
            { label: "c", prompt: "One way to reduce currency risk", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "$" },
              { label: "b", answer: 160000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Currency risk",
                statement: "Exchange rate movements affect export revenues.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Loss per unit = 8% of 100 = 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Total loss = 8 × 20000 = 160000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Hedging (forward contracts), invoicing in home currency, or natural hedging.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "a = $8; b = $160000; c = e.g. hedging/forward contracts",
          },
        },
        {
          id: "ciealbus-u4-gs-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the transnational and multi-domestic strategies, identifying one advantage and one disadvantage of each.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transnational vs multi-domestic",
                statement: "Balance vs full local adaptation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transnational: balances global scale with local adaptation — efficient but complex to manage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multi-domestic: fully responsive to local needs but loses economies of scale and global brand consistency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Choice depends on market similarity, firm resources and cost pressures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Transnational balances efficiency/responsiveness; multi-domestic maximises local fit but loses scale",
          },
        },
        {
          id: "ciealbus-u4-gs-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A fast-food chain wants to enter a new country with minimal investment but limited control over quality and branding. Which entry mode best fits this trade-off?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Greenfield investment",
              },
              {
                id: "b",
                text: "Joint venture",
              },
              {
                id: "c",
                text: "Licensing or franchising",
              },
              {
                id: "d",
                text: "Wholly-owned subsidiary",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Entry modes",
                statement: "Low commitment vs control trade-off.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Licensing/franchising needs little capital but gives limited control — matching the stated trade-off.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Licensing or franchising",
          },
        },
        {
          id: "ciealbus-u4-gs-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A firm forms a joint venture in a foreign market. The venture earns a profit of $600,000 and the firm owns a 40% share. (a) Calculate the firm's share of the profit. (b) The firm contributed $2 million of the venture's $5 million capital. Calculate its percentage share of capital contributed. (c) State one benefit of a joint venture over a wholly-owned subsidiary. (d) State one drawback of a joint venture.",
          parts: [
            { label: "a", prompt: "Firm's share of profit", marks: 1 },
            {
              label: "b",
              prompt: "Percentage share of capital contributed",
              marks: 1,
            },
            { label: "c", prompt: "One benefit of a joint venture", marks: 1 },
            { label: "d", prompt: "One drawback of a joint venture", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 240000, unit: "$" },
              { label: "b", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Joint venture analysis",
                statement: "Shared ownership, shared risk and shared control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Profit share = 40% of 600000 = 240000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Capital share = 2 / 5 × 100 = 40%.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Shares risk and capital cost; gains local partner's knowledge, contacts and distribution.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Less control over decisions; profit must be shared; potential conflict with partner.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "a = $240000; b = 40%; c/d = risk-sharing vs reduced control",
          },
        },
        {
          id: "ciealbus-u4-gs-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cultural distance refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The number of languages spoken in a country",
              },
              {
                id: "b",
                text: "The differences in values, norms and practices between home and host cultures",
              },
              {
                id: "c",
                text: "The physical distance between home and host countries",
              },
              {
                id: "d",
                text: "The cost of transporting goods internationally",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural distance",
                statement: "Cultural differences between markets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cultural distance = differences in values, norms and business practices between cultures.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** The differences in values, norms and practices between home and host cultures",
          },
        },
        {
          id: "ciealbus-u4-gs-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A franchisee generates $2 million in revenue and pays the franchisor a 5% royalty. (a) Calculate the annual royalty payment. (b) State one advantage franchising offers the franchisor.",
          parts: [
            { label: "a", prompt: "Annual royalty payment", marks: 1 },
            { label: "b", prompt: "One advantage to the franchisor", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Franchising",
                statement:
                  "Royalties give franchisor income with limited investment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Royalty = 5% of 2000000 = 100000.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Expands quickly with franchisee capital and local knowledge; earns royalties without full ownership risk.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "a = $100000; b = e.g. rapid expansion with limited capital",
          },
        },
        {
          id: "ciealbus-u4-gs-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A small firm with limited capital wants to test demand in a culturally distant market before committing significant resources. Which entry mode is most appropriate?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Wholly-owned subsidiary",
              },
              {
                id: "b",
                text: "Exporting or licensing",
              },
              {
                id: "c",
                text: "Greenfield investment",
              },
              {
                id: "d",
                text: "Acquisition of a local firm",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Entry mode choice",
                statement:
                  "Low-resource firms start with low-commitment modes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Exporting/licensing requires little capital and allows market testing before bigger commitments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Exporting or licensing",
          },
        },
        {
          id: "ciealbus-u4-gs-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A multinational food company plans to enter an emerging market with different tastes and strong government influence over business. (a) Identify two political risks it may face. (b) Identify two cultural challenges. (c) Recommend a suitable international strategy and justify your choice. (d) Evaluate whether the recommended strategy balances the company's global and local objectives.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Global strategy evaluation",
                statement:
                  "Risk assessment and strategy recommendation for market entry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Political risks: sudden policy changes, nationalisation/expropriation, corruption, unstable government, currency controls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Cultural challenges: different tastes/dietary requirements, language, religious practices, consumer behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Recommendation: multi-domestic or transnational — adapts product/menu to local tastes while retaining some global brand consistency; justification required.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Evaluation: transnational balances global efficiency and local fit; multi-domestic maximises responsiveness but sacrifices scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Overall judgement: choice depends on cultural distance, market size, resources and risk tolerance — supported conclusion.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Recommend multi-domestic/transnational for culturally distant, politically risky markets — balances local fit with global brand",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealbus-u4-gs-notes",
      title: "Global strategy — notes",
      summary:
        "Global=standardised, multi-domestic=adapted, transnational=balanced. Entry modes and risks vary.",
      sections: [
        {
          heading: "Key idea",
          body: "Strategy depends on market similarity, resources, risk tolerance.",
        },
        {
          heading: "Entry modes",
          body: "Exporting→licensing→franchising→JV→wholly-owned — increasing commitment/risk.",
        },
      ],
    },
  ],
};
