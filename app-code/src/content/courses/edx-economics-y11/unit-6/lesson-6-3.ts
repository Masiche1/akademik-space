import type { Lesson } from "../../../types.ts";

export const lesson116: Lesson = {
  id: "ecn11-u3-lesson-6-3",
  code: "6-3",
  title: "Trade, Aid and Globalisation",
  goal: "I CAN evaluate how trade, aid and globalisation affect development.",
  standards: ["Edexcel IGCSE Economics 4EC1 — The Global Economy"],
  vocabulary: [
    {
      term: "Export-led growth",
      definition: "Development driven by increasing exports.",
    },
    {
      term: "Fair trade",
      definition: "Trade giving producers fair prices and conditions.",
    },
    {
      term: "Commodity dependence",
      definition: "Reliance on few raw material exports.",
    },
    {
      term: "Volatile prices",
      definition: "Prices fluctuating unpredictably.",
    },
    {
      term: "Development strategy",
      definition: "Plan to achieve economic development.",
    },
  ],
  concepts: [
    {
      id: "ecn11-u3-tradedev",
      title: "Trade and Development",
      skill: "Evaluate trade as a development strategy and its risks.",
      lesson: {
        sections: [
          {
            heading: "Trade-led development",
            body: "**Export-led growth**: countries develop by exporting — manufacturing, services, agriculture. **Benefits**: foreign currency earnings, jobs, technology, growth. **Risks**: commodity dependence — few exports, volatile prices, terms of trade deterioration.\n\n**Diversification**: move from primary to secondary/tertiary exports — more stable income. **Value addition**: process raw materials before export — higher prices.",
          },
          {
            heading: "Fair trade and preferences",
            body: "**Fair trade**: guarantees minimum prices to producers — helps farmers in developing countries. **Trade preferences**: developed countries give tariff reductions to developing exports (e.g., Everything But Arms). **Criticism**: preferences may be small, rules complex.\n\n**Supply-side constraints**: poor infrastructure, skills gaps, corruption limit export potential.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country exports only coffee. Risk?",
          solution: "Commodity dependence — price falls hurt whole economy.",
        },
      },
      questions: [
        {
          id: "ecn11-u3-tradedev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is export-led growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Development driven by increasing exports" },
              { id: "b", text: "Growth from tourism only" },
              { id: "c", text: "Growth from imports" },
              { id: "d", text: "Growth from aid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Export-led growth",
                statement: "Exports drive development.",
              },
            ],
            steps: [
              {
                reasoning: "Exports → foreign currency → development.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Exports drive development",
            commonErrors: ["Aid confused."],
          },
        },
        {
          id: "ecn11-u3-tradedev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of export-led development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Export benefits",
                statement: "Foreign currency, jobs, technology.",
              },
            ],
            steps: [
              {
                reasoning: "Foreign currency earnings — pay for imports.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Jobs created in export industries.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technology/skills transfer.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Foreign currency, jobs, technology.",
            commonErrors: ["Only risks.", "Only one."],
          },
        },
        {
          id: "ecn11-u3-tradedev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the risks of commodity dependence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Commodity dependence",
                statement: "Few exports, volatile prices.",
              },
            ],
            steps: [
              {
                reasoning: "Few export products — economy vulnerable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prices fluctuate — income unstable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Terms of trade may deteriorate over time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Diversification needed for stability.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Few products + volatile prices → unstable income.",
            commonErrors: ["No risk.", "No diversification."],
          },
        },
        {
          id: "ecn11-u3-tradedev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Developing country relies heavily on coffee exports.",
          parts: [
            {
              label: "a",
              prompt: "Explain two benefits of this strategy.",
              marks: 3,
            },
            { label: "b", prompt: "Explain two risks.", marks: 3 },
            {
              label: "c",
              prompt: "Suggest one diversification strategy.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Commodity strategy",
                statement: "Simple but risky.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Foreign currency earnings.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Jobs in agriculture/processing.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Coffee price falls → income collapses.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Climate/disease can destroy crop.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Diversify into other crops/manufacturing.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) currency+jobs (b) price risk+climate (c) diversify",
            commonErrors: ["No risks.", "No diversification."],
          },
        },
      ],
    },
    {
      id: "ecn11-u3-globaldev",
      title: "Globalisation and Development",
      skill: "Evaluate globalisation's impact on developing countries.",
      lesson: {
        sections: [
          {
            heading: "Globalisation opportunities",
            body: "**Market access**: developing countries can export globally. **Investment**: MNCs bring capital, jobs, technology. **Knowledge**: internet, education, best practices. **Remittances**: workers abroad send money home.\n\n**Catch-up potential**: developing countries can adopt existing technology — faster growth than pioneers.",
          },
          {
            heading: "Globalisation risks",
            body: "**Unequal gains**: benefits may go to elites/MNCs, not poor. **Dependency**: reliance on foreign capital/markets. **Environmental damage**: pollution, resource extraction. **Cultural loss**: local traditions eroded. **Job losses**: competition from imports.\n\n**Evaluation**: globalisation can help or harm — depends on policies, governance, how benefits are distributed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "MNC builds factory in poor country. Who benefits most?",
          solution:
            "Depends — jobs help workers, but profits go to MNC shareholders.",
        },
      },
      questions: [
        {
          id: "ecn11-u3-globaldev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a possible benefit of globalisation for developing countries?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Access to larger markets and investment" },
              { id: "b", text: "Only job losses" },
              { id: "c", text: "Only environmental damage" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation benefits",
                statement: "Markets, investment, knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Market access + investment = benefits.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Markets and investment",
            commonErrors: ["Only costs."],
          },
        },
        {
          id: "ecn11-u3-globaldev-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two risks of globalisation for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation risks",
                statement: "Dependency, inequality, environment.",
              },
            ],
            steps: [
              {
                reasoning: "Dependency on foreign capital/markets.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unequal gains — benefits to elites not poor.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Environmental damage from resource extraction.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Dependency, inequality, environmental damage.",
            commonErrors: ["Only benefits.", "Only one."],
          },
        },
        {
          id: "ecn11-u3-globaldev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how remittances help developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Remittances",
                statement: "Money sent home by migrant workers.",
              },
            ],
            steps: [
              {
                reasoning: "Workers abroad send earnings home.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Families spend on food, education, health.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stable source of foreign currency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can exceed aid/exports for some countries.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Migrant earnings → household spending → development.",
            commonErrors: ["No mechanism.", "Aid confused."],
          },
        },
        {
          id: "ecn11-u3-globaldev-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate whether globalisation helps or harms developing countries.",
          parts: [
            { label: "a", prompt: "Give two ways it can help.", marks: 4 },
            { label: "b", prompt: "Give two ways it can harm.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation evaluation",
                statement: "Depends on policies and distribution.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Market access → exports → growth.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Investment/technology transfer → jobs, skills.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Dependency → vulnerable to shocks.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Unequal gains → inequality worsens.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) markets+investment (b) dependency+inequality",
            commonErrors: ["One-sided.", "No evaluation."],
          },
        },
      ],
    },
  ],
};
