import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "ecn11-u1-lesson-1-1",
  code: "1-1",
  title: "National Income and Economic Growth",
  goal: "I CAN measure national income and explain economic growth.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Macroeconomics"],
  vocabulary: [
    { term: "GDP", definition: "Gross Domestic Product — total output." },
    {
      term: "GNP",
      definition: "Gross National Product — output by nationals.",
    },
    {
      term: "Nominal GDP",
      definition: "GDP at current prices — includes inflation.",
    },
    {
      term: "Real GDP",
      definition: "GDP adjusted for inflation — true growth.",
    },
    { term: "Economic growth", definition: "Increase in real GDP over time." },
  ],
  concepts: [
    {
      id: "ecn11-u1-gdp",
      title: "Measuring National Income",
      skill: "Distinguish GDP, GNP, nominal and real measures.",
      lesson: {
        sections: [
          {
            heading: "GDP and GNP",
            body: "**GDP**: total value of goods/services produced within a country — regardless of who owns factors. **GNP**: output by a country's nationals — wherever they are. **Difference**: foreign-owned firms in country (GDP includes, GNP excludes); citizens working abroad (GNP includes, GDP excludes).\n\n**Three approaches**: output (sum of value added), income (sum of factor incomes), expenditure (C+I+G+X−M). All should give same result.",
          },
          {
            heading: "Nominal vs real",
            body: "**Nominal GDP**: at current prices — rises with inflation even if output unchanged. **Real GDP**: adjusted for inflation — shows true output change. **GDP deflator**: (Nominal/Real) × 100 — measures price changes.\n\n**Per capita**: GDP ÷ population — average income. **Limitations**: doesn't measure wellbeing, inequality, informal economy, environmental costs.",
          },
        ],
        keyFormulas: [
          {
            name: "GDP deflator",
            statement: "(Nominal GDP ÷ Real GDP) × 100.",
          },
          { name: "GDP per capita", statement: "GDP ÷ population." },
        ],
        workedExample: {
          problem: "Nominal GDP £2tn, Real GDP £1.6tn. GDP deflator?",
          solution: "(2/1.6) × 100 = 125 — prices rose 25%.",
        },
      },
      questions: [
        {
          id: "ecn11-u1-gdp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between GDP and GNP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP = within country; GNP = by nationals" },
              { id: "b", text: "No difference" },
              { id: "c", text: "GDP includes inflation; GNP doesn't" },
              { id: "d", text: "GDP is monthly; GNP is annual" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP vs GNP",
                statement: "Location vs ownership.",
              },
            ],
            steps: [
              {
                reasoning: "GDP = within borders; GNP = nationals anywhere.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Location vs ownership",
            commonErrors: ["Same thing."],
          },
        },
        {
          id: "ecn11-u1-gdp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is real GDP better than nominal GDP for measuring growth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Real vs nominal",
                statement: "Inflation-adjusted = true output.",
              },
            ],
            steps: [
              {
                reasoning: "Nominal includes price rises — not real growth.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Real adjusts for inflation — shows true output.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Example: 5% nominal growth with 3% inflation = 2% real.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Real removes inflation effect — shows true output change.",
            commonErrors: ["Nominal better.", "No inflation link."],
          },
        },
        {
          id: "ecn11-u1-gdp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two limitations of using GDP to measure living standards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limitations",
                statement: "Doesn't measure wellbeing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Doesn't measure inequality — average hides distribution.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Doesn't measure non-market activities — housework, volunteering.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Doesn't measure environmental costs or health.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Alternative: HDI, GNH, wellbeing measures.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Inequality, non-market activity, environment — GDP incomplete.",
            commonErrors: ["GDP perfect.", "No alternatives."],
          },
        },
        {
          id: "ecn11-u1-gdp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Country A: GDP £500bn, population 50m. Country B: GDP £800bn, population 100m.",
          parts: [
            {
              label: "a",
              prompt: "Calculate GDP per capita for each.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Which has higher living standards?",
              marks: 3,
            },
            { label: "c", prompt: "Explain why per capita matters.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "GDP per capita",
                statement: "GDP ÷ population.",
              },
            ],
            steps: [
              {
                reasoning: "(a) A: 500/50 = £10,000. B: 800/100 = £8,000.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(a) Correct calculations.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "(b) Country A — higher per capita.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Despite lower total GDP.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Per capita = average income — better living standard measure.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer: "(a) A=£10k, B=£8k (b) A higher (c) average income",
            commonErrors: ["Total GDP used.", "Wrong calc."],
          },
        },
      ],
    },
    {
      id: "ecn11-u1-growth2",
      title: "Economic Growth",
      skill: "Analyse causes, benefits and costs of economic growth.",
      lesson: {
        sections: [
          {
            heading: "Causes of growth",
            body: "**Demand-side**: increase C, I, G, X — AD rises. **Supply-side**: increase productive capacity — capital, labour, technology, institutions. **Both needed**: demand without supply = inflation; supply without demand = unemployment.\n\n**Policies**: fiscal stimulus, monetary easing, supply-side reforms (education, deregulation, infrastructure).",
          },
          {
            heading: "Benefits and costs",
            body: "**Benefits**: higher living standards, more jobs, poverty reduction, better public services, innovation. **Costs**: environmental damage, resource depletion, inequality, inflation risk, social problems.\n\n**Sustainable growth**: meets present needs without compromising future — balance economic, social, environmental.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country grows 5% but pollution doubles. Sustainable?",
          solution: "No — environmental cost too high, not sustainable.",
        },
      },
      questions: [
        {
          id: "ecn11-u1-growth2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is economic growth?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More government spending" },
              { id: "b", text: "Higher exports" },
              { id: "c", text: "Rising prices" },
              { id: "d", text: "Increase in real GDP" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economic growth",
                statement: "Increase in real GDP.",
              },
            ],
            steps: [
              {
                reasoning: "Growth = real GDP increase.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Real GDP increase",
            commonErrors: ["Nominal confused."],
          },
        },
        {
          id: "ecn11-u1-growth2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth benefits",
                statement: "Living standards, jobs, services.",
              },
            ],
            steps: [
              {
                reasoning: "Higher living standards — more income.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More jobs and lower unemployment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Better public services — more tax revenue.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Living standards, jobs, public services.",
            commonErrors: ["Only one.", "Costs listed."],
          },
        },
        {
          id: "ecn11-u1-growth2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain one cost of rapid economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth costs",
                statement: "Environment, inequality, inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Environmental damage — pollution, resource depletion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inequality — benefits may not be shared.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Inflation risk — demand outpaces supply.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social problems — stress, congestion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Environment, inequality, inflation, social problems.",
            commonErrors: ["No cost.", "Only one."],
          },
        },
        {
          id: "ecn11-u1-growth2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Country wants growth but worries about environment.",
          parts: [
            { label: "a", prompt: "Suggest two growth policies.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two environmental protections.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainable growth",
                statement: "Balance growth vs environment.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Invest in green technology/renewables.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Infrastructure investment — efficient transport.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Carbon tax/emissions trading.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Environmental regulations — pollution limits.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) green tech/infrastructure (b) carbon tax/regulations",
            commonErrors: ["Only growth.", "No balance."],
          },
        },
      ],
    },
  ],
};
