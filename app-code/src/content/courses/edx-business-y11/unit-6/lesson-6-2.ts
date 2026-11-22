import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ebz11-u6-lesson-6-2",
  code: "6-2",
  title: "Market and Competitive Influences",
  goal: "I CAN analyse market conditions and competitive pressures.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences"],
  vocabulary: [
    {
      term: "Market share",
      definition: "Percentage of total market sales a business holds.",
    },
    { term: "Monopoly", definition: "Single seller dominating a market." },
    { term: "Oligopoly", definition: "Few large firms dominate a market." },
    {
      term: "Perfect competition",
      definition: "Many small firms, identical products.",
    },
    {
      term: "Competitive advantage",
      definition: "What makes a business better than rivals.",
    },
  ],
  concepts: [
    {
      id: "ebz11-u6-market",
      title: "Market Structures",
      skill: "Understand monopoly, oligopoly and competition.",
      lesson: {
        sections: [
          {
            heading: "Market structures",
            body: "**Perfect competition**: many small firms, identical products, easy entry — e.g., local farmers markets. Low profits, price takers.\n**Monopoly**: one firm dominates — e.g., utilities, Microsoft historically. Can set prices, high barriers to entry, may exploit customers.\n**Oligopoly**: few large firms dominate — e.g., airlines, supermarkets, telecoms. Interdependent — watch each other, non-price competition (advertising, quality).",
          },
          {
            heading: "Competitive pressures",
            body: "**New entrants**: lower barriers = more competition. **Substitutes**: alternative products satisfy same need — e.g., streaming vs cinema. **Supplier power**: few suppliers = they can charge more. **Buyer power**: large customers can negotiate better prices.\n\n**Competitive advantage**: cost leadership (cheapest), differentiation (unique product), focus (niche). Porter's five forces framework analyses these pressures.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Four companies control 90% of the mobile phone market. What structure?",
          solution: "Oligopoly — few firms dominate.",
        },
      },
      questions: [
        {
          id: "ebz11-u6-market-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a monopoly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One firm dominating the market" },
              { id: "b", text: "Perfect competition" },
              { id: "c", text: "Many small firms" },
              { id: "d", text: "Two firms competing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monopoly",
                statement: "Single seller dominates market.",
              },
            ],
            steps: [
              {
                reasoning: "Monopoly = one dominant firm.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** One dominant firm",
            commonErrors: ["Oligopoly confused."],
          },
        },
        {
          id: "ebz11-u6-market-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two characteristics of an oligopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oligopoly",
                statement: "Few firms dominate, interdependent.",
              },
            ],
            steps: [
              {
                reasoning: "Few large firms control most market share.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Firms watch each other — interdependent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Non-price competition — advertising, quality.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Few firms dominate, interdependent, non-price competition.",
            commonErrors: ["Monopoly confused.", "Only one."],
          },
        },
        {
          id: "ebz11-u6-market-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a monopoly might be bad for consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopoly problems",
                statement: "No competition = high prices, poor service.",
              },
            ],
            steps: [
              {
                reasoning: "No competition — can charge high prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No incentive to improve quality/service.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can restrict output to keep prices high.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumers have no alternative.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "No competition = high prices, poor quality, no choice.",
            commonErrors: ["Only benefits.", "No consumer impact."],
          },
        },
        {
          id: "ebz11-u6-market-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A new streaming service enters a market dominated by two giants.",
          parts: [
            { label: "a", prompt: "What market structure exists?", marks: 2 },
            {
              label: "b",
              prompt: "Explain two challenges for the new entrant.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Suggest one competitive advantage the new service could build.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Market entry",
                statement: "Oligopoly barriers — scale, brand, content.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Oligopoly — two dominant firms.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Incumbents have huge content libraries/capital.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Brand loyalty and subscriber base.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Niche content or lower price.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
              {
                reasoning: "(c) Better user experience or original content.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) oligopoly (b) capital/brand barriers (c) niche content/price",
            commonErrors: ["Wrong structure.", "No advantage."],
          },
        },
      ],
    },
    {
      id: "ebz11-u6-stakeholders2",
      title: "Pressure Groups and Ethics",
      skill:
        "Understand pressure groups, ethical issues and consumer protection.",
      lesson: {
        sections: [
          {
            heading: "Pressure groups",
            body: "**Cause groups**: campaign for specific issues — environmental, animal welfare, health. **Sectional groups**: represent specific interests — trade unions, business associations. **Methods**: lobbying, protests, media campaigns, boycotts, legal action.\n\n**Impact**: can force businesses to change — e.g., plastic ban campaigns, fair trade pressure, sweatshop exposés. **Success depends on**: public support, media attention, legal action.",
          },
          {
            heading: "Ethical business and consumer protection",
            body: "**Ethical issues**: child labour, environmental damage, animal testing, unfair pay, misleading advertising. **Consumer protection**: product safety standards, accurate labelling, refund rights, cooling-off periods.\n\n**Reputation management**: bad press → boycotts, lost sales. **Ethical branding**: businesses increasingly market on ethics — fair trade, sustainable, cruelty-free.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A fashion brand is accused of using sweatshop labour. What could happen?",
          solution:
            "Pressure groups campaign, media coverage, consumer boycotts, government investigation.",
        },
      },
      questions: [
        {
          id: "ebz11-u6-stakeholders2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a pressure group?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group campaigning for specific causes" },
              { id: "b", text: "Government department" },
              { id: "c", text: "A business association" },
              { id: "d", text: "Trade union" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pressure group",
                statement: "Campaigns for causes — environmental, ethical.",
              },
            ],
            steps: [
              {
                reasoning: "Pressure group = cause campaigner.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Cause campaigner",
            commonErrors: ["Business association confused."],
          },
        },
        {
          id: "ebz11-u6-stakeholders2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two methods pressure groups use to influence businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pressure tactics",
                statement: "Lobbying, protests, media, boycotts.",
              },
            ],
            steps: [
              {
                reasoning: "Media campaigns and public protests.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Consumer boycotts.", marks: 1, markCode: "AO2" },
              {
                reasoning: "Legal action and lobbying government.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Media, boycotts, legal action, lobbying.",
            commonErrors: ["Only one method.", "Vague."],
          },
        },
        {
          id: "ebz11-u6-stakeholders2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why consumer protection laws are important for businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consumer protection",
                statement: "Fairness, safety, trust.",
              },
            ],
            steps: [
              {
                reasoning: "Ensures product safety — prevents harm.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Requires honest advertising — builds trust.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Gives consumers redress — refunds/complaints.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Level playing field — prevents unfair competition.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Safety, honesty, redress, fair competition — trust in market.",
            commonErrors: ["Only consumer view.", "No business benefit."],
          },
        },
        {
          id: "ebz11-u6-stakeholders2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A supermarket is criticised for selling products with palm oil linked to deforestation.",
          parts: [
            { label: "a", prompt: "Identify the ethical issue.", marks: 3 },
            {
              label: "b",
              prompt: "Explain the impact on stakeholders.",
              marks: 3,
            },
            { label: "c", prompt: "Suggest two responses.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical sourcing",
                statement: "Supply chain responsibility.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Deforestation — environmental damage.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Unethical sourcing — harming environment/wildlife.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Customers lose trust — sales may fall.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Pressure groups campaign, media coverage.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Shareholders lose value.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Source sustainable palm oil / remove products.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) deforestation/unethical sourcing (b) customers/pressure groups/shareholders (c) sustainable sourcing",
            commonErrors: ["No issue.", "No response."],
          },
        },
      ],
    },
  ],
};
