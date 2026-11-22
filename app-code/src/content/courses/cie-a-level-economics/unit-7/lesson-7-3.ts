import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "cieale-u7-lesson-7-3",
  code: "7-3",
  title: "Development Economics: Growth, Poverty and Inequality",
  goal: "I CAN analyse development indicators, growth strategies and the poverty-inequality relationship.",
  standards: [
    "Cambridge A Level Economics 9708",
    "Unit 7: development economics",
  ],
  vocabulary: [
    {
      term: "Developing country",
      definition: "Low income, structural transformation needed.",
    },
    {
      term: "HDI",
      definition: "Human Development Index — health, education, income.",
    },
    { term: "Poverty line", definition: "Minimum income for basic needs." },
    {
      term: "Absolute vs relative poverty",
      definition: "Basic needs vs social comparison.",
    },
    { term: "Gini coefficient", definition: "Inequality measure 0-1." },
    {
      term: "Take-off",
      definition: "Stage where growth becomes self-sustaining.",
    },
  ],
  concepts: [
    {
      id: "cieale-u7l3-c1-indicators",
      title: "Measuring development",
      skill:
        "Use HDI, poverty lines and inequality measures to assess development.",
      lesson: {
        sections: [
          {
            heading: "Beyond GDP",
            body: "GDP per capita ignores distribution, health, education, environment. **HDI** combines life expectancy, education, income — broader welfare measure. **Poverty line** ($1.90/day absolute, or national relative) identifies deprivation. **Gini coefficient** (0=perfect equality, 1=perfect inequality) measures distribution.",
          },
          {
            heading: "Development stages",
            body: "Rostow's stages: traditional society → preconditions → take-off → drive to maturity → high mass consumption. Lewis dual-sector model: surplus labour moves from subsistence agriculture to modern industry — wages rise as labour drains.",
          },
        ],
        keyFormulas: [
          { name: "HDI", statement: "Health + education + income" },
          { name: "Gini", statement: "0 equal, 1 unequal" },
          { name: "Poverty line", statement: "Minimum basic needs" },
        ],
        workedExample: {
          problem:
            "Country A: GDP/capita $5,000, HDI 0.45. Country B: $4,000, HDI 0.72. Which is 'more developed'?",
          solution:
            "B — HDI shows better health/education despite lower income; development is multidimensional, not just income.",
        },
      },
      questions: [
        {
          id: "cieale-q-u7l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "HDI measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only GDP" },
              { id: "b", text: "Only trade" },
              { id: "c", text: "Health, education and income" },
              { id: "d", text: "Only income" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Three dimensions.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Three dimensions",
            commonErrors: ["Income only."],
          },
        },
        {
          id: "cieale-q-u7l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish absolute from relative poverty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Poverty types",
                statement: "Basic needs vs comparison.",
              },
            ],
            steps: [
              { reasoning: "Absolute defined.", marks: 1, markCode: "M" },
              { reasoning: "Relative defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Absolute: below minimum for basic needs (survival). Relative: below society's average standard — exists even in rich countries.",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "cieale-q-u7l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is GDP per capita insufficient for measuring development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limits",
                statement: "Distribution + wellbeing.",
              },
            ],
            steps: [
              { reasoning: "What it misses.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Better measure.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ignores inequality (rich country average hides poverty), health, education, environment, informal economy — HDI and other measures supplement it.",
            commonErrors: ["GDP sufficient."],
          },
        },
        {
          id: "cieale-q-u7l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the Lewis 'dual-sector' model of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lewis model",
                statement: "Surplus labour transfer.",
              },
            ],
            steps: [
              { reasoning: "Two sectors.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Wage dynamics.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Surplus labour moves from subsistence agriculture to modern industry at constant wage until surplus exhausted → industrial profits fund growth; assumes unlimited labour supply.",
            commonErrors: ["Single sector."],
          },
        },
        {
          id: "cieale-q-u7l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate Rostow's 'stages of growth' theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rostow",
                statement: "Linear development path.",
              },
            ],
            steps: [
              { reasoning: "Theory stated.", marks: 1, markCode: "M" },
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Useful historical description but oversimplified — assumes all countries follow same path, ignores institutions, global context, alternative development models; Eurocentric.",
            commonErrors: ["Universal path."],
          },
        },
        {
          id: "cieale-q-u7l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a Gini coefficient of 0.6 indicate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Gini", statement: "High inequality." },
            ],
            steps: [
              { reasoning: "Interpretation.", marks: 1, markCode: "M" },
              { reasoning: "Range context.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High inequality — 0.6 is near maximum (1=perfect inequality); typical developing countries 0.4-0.6, developed 0.25-0.35.",
            commonErrors: ["Low inequality."],
          },
        },
        {
          id: "cieale-q-u7l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'take-off' stage in Rostow's model is when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth becomes self-sustaining" },
              { id: "b", text: "Population peaks" },
              { id: "c", text: "Trade begins" },
              { id: "d", text: "Country is poorest" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Take-off",
                statement: "Self-sustaining growth.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Self-sustaining",
            commonErrors: ["Wrong stage."],
          },
        },
        {
          id: "cieale-q-u7l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why HDI might rank countries differently from GDP per capita.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HDI vs GDP",
                statement: "Multidimensional.",
              },
            ],
            steps: [
              { reasoning: "Two reasons.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. high income but poor health/education (oil states) → lower HDI rank; or modest income but good social services → higher HDI rank.",
            commonErrors: ["Same ranking."],
          },
        },
        {
          id: "cieale-q-u7l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'absolute poverty' persist even in growing economies?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty persistence",
                statement: "Distribution + growth type.",
              },
            ],
            steps: [
              { reasoning: "Reasons.", marks: 1, markCode: "M" },
              { reasoning: "Growth without equity.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth may be concentrated in enclaves or capital-intensive (few jobs); inequality rises → absolute poverty persists despite aggregate growth — 'growth with poverty'.",
            commonErrors: ["Growth eliminates poverty."],
          },
        },
        {
          id: "cieale-q-u7l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether 'development' should be measured by outcome or process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development measurement",
                statement: "Indicators vs capabilities.",
              },
            ],
            steps: [
              { reasoning: "Outcome measures.", marks: 1, markCode: "M" },
              {
                reasoning: "Process/capability view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sen's capability approach.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Outcome indicators (HDI, GDP) measurable but static; capability approach (Sen) focuses on freedoms/opportunities — development is expanding what people can do, not just what they have.",
            commonErrors: ["One approach only."],
          },
        },
        {
          id: "cieale-q-u7l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The HDI combines indicators of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "exports and inflation" },
              { id: "b", text: "health, education and income" },
              { id: "c", text: "population and land area" },
              { id: "d", text: "GDP only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Health + education + income.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Health, education, income",
            commonErrors: ["Thinking HDI is income-only."],
          },
        },
        {
          id: "cieale-q-u7l3c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country's health index is 0.8, education index is 0.7 and income index is 0.9. Using the simple average of the three, calculate the HDI.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "HDI",
                statement: "Average of health, education, income indices.",
              },
            ],
            steps: [
              {
                reasoning: "HDI = (0.8 + 0.7 + 0.9)/3 = 2.4/3 = 0.8.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "HDI = 0.8",
            commonErrors: ["Adding without dividing by three."],
          },
        },
        {
          id: "cieale-q-u7l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Gini coefficient of 0 represents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "perfect inequality" },
              { id: "b", text: "perfect equality of income" },
              { id: "c", text: "average national income" },
              { id: "d", text: "high economic growth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gini coefficient",
                statement: "0 = equal, 1 = unequal.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Perfect equality",
            commonErrors: ["Reversing the scale."],
          },
        },
        {
          id: "cieale-q-u7l3c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A country has a population of 10 million and 25% of people live below the $1.90-a-day poverty line. The population later rises to 12 million with the same share in poverty.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.5, unit: "million people" },
              { label: "b", answer: 3, unit: "million people" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Poverty headcount",
                statement: "Population × poverty share.",
              },
            ],
            steps: [
              {
                reasoning: "Initially: 10m × 0.25 = 2.5m people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Later: 12m × 0.25 = 3m people.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2.5m → 3m people in poverty",
            commonErrors: ["Reporting percentages instead of numbers of people."],
          },
        },
        {
          id: "cieale-q-u7l3c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The '$1.90 a day' international poverty line is a measure of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP per capita" },
              { id: "b", text: "absolute poverty based on minimum basic needs" },
              { id: "c", text: "relative poverty within a society" },
              { id: "d", text: "income inequality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Absolute poverty",
                statement: "Minimum basic needs.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Absolute poverty",
            commonErrors: ["Confusing with relative poverty."],
          },
        },
        {
          id: "cieale-q-u7l3c1-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "GDP is $800bn and the population is 40 million. Calculate GDP per capita.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20000, unit: "dollars" }],
          },
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
                reasoning: "800bn/40m = $20,000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "GDP per capita = $20,000",
            commonErrors: ["Dividing in the wrong order."],
          },
        },
      ],
    },
    {
      id: "cieale-u7l3-c2-growth-ineq",
      title: "Growth strategies and inequality",
      skill:
        "Evaluate development strategies and analyse the growth-inequality relationship.",
      lesson: {
        sections: [
          {
            heading: "Growth strategies",
            body: "**Export-led**: focus on manufactured exports (East Asia) — fast growth but dependent on world demand, vulnerability to shocks. **Import substitution**: protect domestic industry (Latin America) — initially works, later inefficient. **Microfinance/NGOs**: targeted poverty reduction. **Washington Consensus**: liberalisation, privatisation, stabilisation — mixed results.",
          },
          {
            heading: "Growth and inequality",
            body: "**Kuznets curve**: inequality rises during early development (sectoral shifts), then falls at higher income — but may not hold. **Trickle-down**: growth eventually benefits poor via jobs/wages — slow, uncertain. **Redistribution**: taxes/transfers reduce inequality but may reduce incentives. **Pro-poor growth**: growth specifically benefiting poor (land reform, education).",
          },
        ],
        keyFormulas: [
          {
            name: "Kuznets",
            statement: "Inequality ↑ then ↓ with development",
          },
          { name: "Export-led", statement: "Manufacturing exports focus" },
          { name: "Pro-poor", statement: "Growth benefiting poor" },
        ],
        workedExample: {
          problem: "Why might growth increase inequality in early development?",
          solution:
            "Kuznets: workers move from equal subsistence farming to unequal industrial wages; capital owners gain disproportionately; sectoral shifts concentrate income — inequality rises before falling.",
        },
      },
      questions: [
        {
          id: "cieale-q-u7l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Export-led growth strategy focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agriculture only" },
              { id: "b", text: "Manufactured exports" },
              { id: "c", text: "Aid dependence" },
              { id: "d", text: "Import substitution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Export-led",
                statement: "Exports focus.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Manufactured exports",
            commonErrors: ["Wrong strategy."],
          },
        },
        {
          id: "cieale-q-u7l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'Kuznets curve'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kuznets",
                statement: "Inequality path.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Shape.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hypothesis that inequality rises during early development (sectoral shifts) then falls at higher income — inverted-U relationship.",
            commonErrors: ["Linear assumed."],
          },
        },
        {
          id: "cieale-q-u7l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'import substitution industrialisation' (ISI) and its problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ISI",
                statement: "Protect domestic industry.",
              },
            ],
            steps: [
              { reasoning: "Strategy.", marks: 1, markCode: "M" },
              { reasoning: "Problems.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Protect infant industries via tariffs/subsidies to reduce imports — initially works but creates inefficient protected firms, debt, and dependency; many Latin American countries stagnated.",
            commonErrors: ["Guaranteed success."],
          },
        },
        {
          id: "cieale-q-u7l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate 'trickle-down' theory of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trickle-down",
                statement: "Growth benefits all eventually.",
              },
            ],
            steps: [
              { reasoning: "Theory.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Problems.", marks: 1, markCode: "A" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth may not reach poor quickly — inequality can rise for decades; jobs may not match skills; 'trickle-down' too slow/uncertain — pro-poor policies needed.",
            commonErrors: ["Guaranteed."],
          },
        },
        {
          id: "cieale-q-u7l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'Washington Consensus' policies for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Washington Consensus",
                statement: "Liberalisation package.",
              },
            ],
            steps: [
              { reasoning: "Policies.", marks: 1, markCode: "M" },
              { reasoning: "Success cases.", marks: 1, markCode: "M" },
              { reasoning: "Failures.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stabilisation, liberalisation, privatisation — helped some (East Asia) but caused inequality, financial crises, lost industrial policy in others — 'one-size-fits-all' criticised.",
            commonErrors: ["Universal success."],
          },
        },
        {
          id: "cieale-q-u7l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'pro-poor growth'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pro-poor growth",
                statement: "Benefits poor disproportionately.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growth that reduces poverty faster than average income — e.g. labour-intensive growth, land reform, education for poor, targeted transfers.",
            commonErrors: ["Any growth."],
          },
        },
        {
          id: "cieale-q-u7l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Kuznets curve predicts inequality:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always rises" },
              { id: "b", text: "Stays constant" },
              { id: "c", text: "Always falls" },
              { id: "d", text: "Rises then falls with development" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Kuznets", statement: "Inverted-U." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Rises then falls",
            commonErrors: ["Wrong shape."],
          },
        },
        {
          id: "cieale-q-u7l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might export-led growth be vulnerable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Export-led risks",
                statement: "Dependence + shocks.",
              },
            ],
            steps: [
              { reasoning: "Vulnerabilities.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Mitigation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dependent on world demand — recessions collapse exports; terms of trade volatility; limited diversification → need domestic demand, reserves, diversification.",
            commonErrors: ["Always stable."],
          },
        },
        {
          id: "cieale-q-u7l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do 'conditional cash transfers' reduce poverty?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CCTs",
                statement: "Targeted transfers.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cash to poor families conditional on school attendance/health checks — reduces poverty directly, builds human capital, breaks intergenerational poverty (e.g. Bolsa Família).",
            commonErrors: ["Unconditional only."],
          },
        },
        {
          id: "cieale-q-u7l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether inequality is a necessary stage of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality & development",
                statement: "Kuznets debate.",
              },
            ],
            steps: [
              { reasoning: "Kuznets argument.", marks: 1, markCode: "M" },
              { reasoning: "Counter-evidence.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Kuznets suggests yes temporarily, but evidence mixed — some countries grew with equity (East Asia); high inequality may itself hinder growth via poverty traps — not strictly necessary.",
            commonErrors: ["Always necessary."],
          },
        },
        {
          id: "cieale-q-u7l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Kuznets curve suggests that as a country develops:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "growth must stop" },
              { id: "b", text: "inequality first rises and then may fall" },
              { id: "c", text: "inequality always falls" },
              { id: "d", text: "inequality remains constant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kuznets curve",
                statement: "Inequality ↑ then ↓.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Rises then may fall",
            commonErrors: ["Assuming it always holds."],
          },
        },
        {
          id: "cieale-q-u7l3c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a pro-poor growth episode, GDP grows by 6% while the income of the poorest 20% grows by 8%. Calculate how much faster their income grows.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pro-poor growth",
                statement: "Poor income growth − GDP growth.",
              },
            ],
            steps: [
              {
                reasoning: "8 − 6 = 2% faster.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Income grows 2% faster than GDP",
            commonErrors: ["Dividing the growth rates."],
          },
        },
        {
          id: "cieale-q-u7l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Import substitution industrialisation (ISI) is a strategy of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "focusing on manufactured exports" },
              { id: "b", text: "protecting domestic industry to produce goods previously imported" },
              { id: "c", text: "relying on foreign aid" },
              { id: "d", text: "unrestricted free trade" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ISI",
                statement: "Replace imports with domestic output.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Replace imports domestically",
            commonErrors: ["Confusing with export-led growth."],
          },
        },
        {
          id: "cieale-q-u7l3c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A country's manufactured exports grow by 10% per year for three years, starting from an initial value of $100bn.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 133.1, unit: "billion dollars" },
              { label: "b", answer: 33.1, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Compound growth",
                statement: "X = X0 × (1+g)^t.",
              },
            ],
            steps: [
              {
                reasoning: "Exports = 100 × 1.10³ = 100 × 1.331 = $133.1bn.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total growth = (133.1−100)/100 = 33.1%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$133.1bn (33.1% total growth)",
            commonErrors: ["Using 10×3=30% simple growth instead of compounding."],
          },
        },
        {
          id: "cieale-q-u7l3c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'trickle-down' theory argues that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "growth benefits eventually reach the poor through jobs and higher wages" },
              { id: "b", text: "redistribution is always harmful" },
              { id: "c", text: "poverty is inevitable" },
              { id: "d", text: "growth only helps the rich" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trickle-down",
                statement: "Growth reaches poor eventually.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Benefits reach poor via jobs/wages",
            commonErrors: ["Thinking it denies inequality."],
          },
        },
        {
          id: "cieale-q-u7l3c2-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cash transfer programme pays $200 per month to 100,000 poor families for one year. Calculate the total annual cost.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 240, unit: "million dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transfer cost",
                statement: "Payment × 12 × number of families.",
              },
            ],
            steps: [
              {
                reasoning: "Cost = 200 × 12 × 100,000 = $240m.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Total annual cost = $240m",
            commonErrors: ["Forgetting to annualise the monthly payment."],
          },
        },
      ],
    },
  ],
};
