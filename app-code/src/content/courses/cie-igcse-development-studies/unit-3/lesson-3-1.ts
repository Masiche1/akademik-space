import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cieids-u3-lesson-3-1",
  code: "3-1",
  title: "Development indicators, inequality and global goals",
  goal: "I CAN evaluate development indicators, explain inequality and assess global development goals.",
  standards: [
    "Cambridge IGCSE Development Studies 0453",
    "Section 1: Development and underdevelopment",
  ],
  vocabulary: [
    {
      term: "HDI",
      definition:
        "Human Development Index — combines income, education and life expectancy.",
    },
    {
      term: "GDP per capita",
      definition:
        "Gross Domestic Product divided by population — average income measure.",
    },
    {
      term: "Gini coefficient",
      definition:
        "Measure of income inequality — 0 = perfect equality, 1 = perfect inequality.",
    },
    {
      term: "Poverty line",
      definition:
        "Minimum income needed for basic needs — absolute vs relative poverty.",
    },
    {
      term: "Absolute poverty",
      definition:
        "Lacking basic necessities for survival — e.g. under $1.90/day.",
    },
    {
      term: "Relative poverty",
      definition:
        "Lacking the standard of living of the majority in a society.",
    },
    {
      term: "Multidimensional poverty",
      definition:
        "Deprivation across health, education and living standards combined.",
    },
    {
      term: "Inequality",
      definition:
        "Unequal distribution of income, wealth, opportunities or power.",
    },
    {
      term: "MDGs",
      definition: "Millennium Development Goals — 8 goals for 2000-2015.",
    },
    {
      term: "SDGs",
      definition: "Sustainable Development Goals — 17 goals for 2015-2030.",
    },
    {
      term: "Human capital",
      definition:
        "Skills, knowledge and health of a population — key development resource.",
    },
    {
      term: "North-South divide",
      definition:
        "Gap between wealthy developed (North) and poor developing (South) countries.",
    },
  ],
  concepts: [
    {
      id: "cieids-u3-indicators",
      title: "Development indicators and their limits",
      skill:
        "Evaluate measures of development including GDP, HDI, poverty measures and inequality.",
      lesson: {
        sections: [
          {
            heading: "Economic indicators",
            body: "**GDP per capita** divides total economic output by population — measures average income but ignores distribution and wellbeing. A country with high GDP can still have high poverty. **Gini coefficient** measures income inequality — 0 = perfect equality, 1 = perfect inequality. Higher values mean greater inequality.",
          },
          {
            heading: "Social indicators",
            body: "**HDI** combines income, education and life expectancy — broader than GDP but still ignores inequality, environment and freedoms. Other social indicators: literacy rate, infant mortality rate, access to clean water, maternal mortality. **Poverty measures**: absolute poverty (below survival threshold), relative poverty (below majority standard), multidimensional poverty (health + education + living standards combined).",
          },
          {
            heading: "Limits of indicators",
            body: "No single indicator captures development fully. GDP ignores distribution and wellbeing; HDI ignores inequality and sustainability. Development is multidimensional — economic, social, political and environmental. Indicators are useful for comparison but oversimplify complex realities.",
          },
        ],
        keyFormulas: [
          {
            name: "HDI",
            statement: "Income + education + life expectancy",
          },
          {
            name: "Gini coefficient",
            statement: "0 = equality, 1 = inequality",
          },
          {
            name: "Poverty measures",
            statement: "Absolute · relative · multidimensional",
          },
        ],
        workedExample: {
          problem:
            "Country A: high GDP but 40% poverty. Country B: lower GDP but 5% poverty. Which is more developed?",
          solution:
            "Country B — GDP alone is misleading; lower poverty indicates better distribution and living standards.",
        },
      },
      questions: [
        {
          id: "cieids-u3-i-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GDP per capita measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total economic output divided by population" },
              { id: "b", text: "Total income" },
              { id: "c", text: "Population growth" },
              { id: "d", text: "Life expectancy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP per capita",
                statement: "Economic output divided by population.",
              },
            ],
            steps: [
              {
                reasoning: "GDP per capita = output/population.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Total economic output divided by population.",
          },
        },
        {
          id: "cieids-u3-i-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The HDI combines which three measures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Income, education and life expectancy" },
              { id: "b", text: "GDP, population and area" },
              { id: "c", text: "Exports, imports and inflation" },
              { id: "d", text: "Birth rate, death rate and migration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI components",
                statement: "Income, education, life expectancy.",
              },
            ],
            steps: [
              {
                reasoning: "HDI = income + education + life expectancy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Income, education and life expectancy.",
          },
        },
        {
          id: "cieids-u3-i-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Gini coefficient measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Income inequality" },
              { id: "b", text: "Economic growth" },
              { id: "c", text: "Population size" },
              { id: "d", text: "Life expectancy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gini coefficient",
                statement: "Measures income inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Gini = income inequality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Income inequality.",
          },
        },
        {
          id: "cieids-u3-i-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Gini coefficient of 0 means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect equality" },
              { id: "b", text: "Perfect inequality" },
              { id: "c", text: "No income" },
              { id: "d", text: "Maximum poverty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gini = 0",
                statement: "Perfect equality.",
              },
            ],
            steps: [
              {
                reasoning: "Gini 0 = perfect equality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Perfect equality.",
          },
        },
        {
          id: "cieids-u3-i-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Gini coefficient of 1 means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect inequality" },
              { id: "b", text: "Perfect equality" },
              { id: "c", text: "No poverty" },
              { id: "d", text: "Maximum development" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gini = 1",
                statement: "Perfect inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Gini 1 = perfect inequality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Perfect inequality.",
          },
        },
        {
          id: "cieids-u3-i-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Absolute poverty refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lacking basic necessities for survival" },
              { id: "b", text: "Being poorer than average" },
              { id: "c", text: "Having low income" },
              { id: "d", text: "Living in rural areas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Absolute poverty",
                statement: "Lacking survival necessities.",
              },
            ],
            steps: [
              {
                reasoning: "Absolute poverty = survival threshold.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Lacking basic necessities.",
          },
        },
        {
          id: "cieids-u3-i-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Relative poverty refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Lacking the standard of living of the majority",
              },
              { id: "b", text: "Lacking survival necessities" },
              { id: "c", text: "Having no income" },
              { id: "d", text: "Living in cities" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative poverty",
                statement: "Below majority standard of living.",
              },
            ],
            steps: [
              {
                reasoning: "Relative poverty = below majority standard.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Below majority standard.",
          },
        },
        {
          id: "cieids-u3-i-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Multidimensional poverty measures deprivation across:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Health, education and living standards" },
              { id: "b", text: "Income only" },
              { id: "c", text: "GDP only" },
              { id: "d", text: "Population only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multidimensional poverty",
                statement: "Health + education + living standards.",
              },
            ],
            steps: [
              {
                reasoning: "Multidimensional = multiple deprivations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Health, education and living standards.",
          },
        },
        {
          id: "cieids-u3-i-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "The MDGs were targets for which period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2000-2015" },
              { id: "b", text: "2015-2030" },
              { id: "c", text: "1990-2000" },
              { id: "d", text: "2020-2050" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MDGs period",
                statement: "2000-2015.",
              },
            ],
            steps: [
              {
                reasoning: "MDGs = 2000-2015.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 2000-2015.",
          },
        },
        {
          id: "cieids-u3-i-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between absolute and relative poverty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty types",
                statement: "Survival vs majority standard.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Absolute: lacking survival necessities (food, shelter).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Relative: below majority standard of living in society.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Absolute = survival; relative = majority standard.",
          },
        },
        {
          id: "cieids-u3-i-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two limitations of GDP per capita as a development measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limits",
                statement: "Ignores distribution and wellbeing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ignores income distribution — high GDP can coexist with poverty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ignores wellbeing — health, education, freedoms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ignores distribution and wellbeing.",
          },
        },
        {
          id: "cieids-u3-i-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the HDI is a better measure of development than GDP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HDI advantage",
                statement: "Broader than income alone.",
              },
            ],
            steps: [
              {
                reasoning: "GDP measures only economic output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "HDI adds education and health — broader wellbeing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But HDI still ignores inequality and sustainability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "HDI broader (income+education+health) but still incomplete.",
          },
        },
        {
          id: "cieids-u3-i-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Country A has high GDP per capita but high Gini coefficient. Country B has lower GDP but low Gini. Compare their development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Indicator comparison",
                statement: "GDP vs inequality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Country A: high average income but unequal distribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Many in A may be poor despite high GDP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Country B: lower average but more equal distribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "B may have better living standards for majority.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A has inequality; B may have better majority living standards.",
          },
        },
        {
          id: "cieids-u3-i-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The SDGs are targets for which period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2015-2030" },
              { id: "b", text: "2000-2015" },
              { id: "c", text: "2020-2050" },
              { id: "d", text: "1990-2010" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDGs period",
                statement: "2015-2030.",
              },
            ],
            steps: [
              {
                reasoning: "SDGs = 2015-2030.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 2015-2030.",
          },
        },
        {
          id: "cieids-u3-i-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many SDGs are there?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SDG count",
                statement: "17 goals.",
              },
            ],
            steps: [
              {
                reasoning: "There are 17 SDGs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They cover poverty, health, education, environment, etc.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "17 goals covering multiple areas.",
          },
        },
        {
          id: "cieids-u3-i-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Human capital refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skills, knowledge and health of a population" },
              { id: "b", text: "Money and buildings" },
              { id: "c", text: "Natural resources" },
              { id: "d", text: "Government spending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human capital",
                statement: "Skills, knowledge, health.",
              },
            ],
            steps: [
              {
                reasoning: "Human capital = skills/knowledge/health.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Skills, knowledge and health.",
          },
        },
        {
          id: "cieids-u3-i-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the North-South divide?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "North-South divide",
                statement: "Gap between developed and developing countries.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gap between wealthy developed (North) and poor developing (South).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Represents global inequality in development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Gap between developed (North) and developing (South) countries.",
          },
        },
        {
          id: "cieids-u3-i-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why development is considered multidimensional.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multidimensional development",
                statement: "Economic + social + political + environmental.",
              },
            ],
            steps: [
              {
                reasoning: "Includes economic growth, health, education.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Also includes freedoms, equality, sustainability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "No single measure captures all dimensions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Spans economic, social, political and environmental dimensions.",
          },
        },
        {
          id: "cieids-u3-i-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the use of GDP per capita as the sole measure of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP evaluation",
                statement: "Useful but incomplete.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: simple, comparable across countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: correlates with living standards broadly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: ignores distribution — high GDP can coexist with poverty.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: ignores wellbeing, health, education, freedoms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Useful for comparison but incomplete — ignores distribution and wellbeing.",
          },
        },
        {
          id: "cieids-u3-i-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a component of the HDI?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP growth rate" },
              { id: "b", text: "Income" },
              { id: "c", text: "Education" },
              { id: "d", text: "Life expectancy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HDI components",
                statement:
                  "Income, education, life expectancy — not GDP growth.",
              },
            ],
            steps: [
              {
                reasoning: "GDP growth not in HDI.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) GDP growth rate.",
          },
        },
        {
          id: "cieids-u3-i-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'multidimensional poverty'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multidimensional poverty",
                statement: "Combined deprivation across dimensions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deprivation across health, education and living standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More comprehensive than income-only measures.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Combined deprivation across health, education and living standards.",
          },
        },
        {
          id: "cieids-u3-i-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how inequality can persist despite economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth vs inequality",
                statement: "Growth doesn't guarantee equality.",
              },
            ],
            steps: [
              {
                reasoning: "Growth may benefit only those already wealthy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wealth and opportunity concentrate at top.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trickle-down may be too slow or absent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth may benefit only the wealthy; inequality persists.",
          },
        },
        {
          id: "cieids-u3-i-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a development measurement system better than HDI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Indicator design",
                statement: "Broader than HDI.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Include HDI components (income, education, health).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add inequality measure (Gini coefficient).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add environmental sustainability and freedoms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consider distribution not just averages.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "HDI + inequality + sustainability + freedoms; consider distribution.",
          },
        },
        {
          id: "cieids-u3-i-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which measure includes education and health?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "HDI" },
              { id: "b", text: "GDP" },
              { id: "c", text: "Gini" },
              { id: "d", text: "Poverty line" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HDI components",
                statement: "Income + education + health.",
              },
            ],
            steps: [
              {
                reasoning: "HDI includes education and health.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) HDI.",
          },
        },
        {
          id: "cieids-u3-i-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'relative poverty'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relative poverty",
                statement: "Below majority standard.",
              },
            ],
            steps: [
              {
                reasoning: "Lacking the standard of living of the majority.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Varies by society — relative to others.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Below the standard of living of the majority.",
          },
        },
        {
          id: "cieids-u3-i-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why no single indicator can fully measure development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indicator limits",
                statement: "Development is multidimensional.",
              },
            ],
            steps: [
              {
                reasoning: "GDP ignores distribution and wellbeing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "HDI ignores inequality and sustainability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Development spans economic, social, political, environmental.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Each indicator misses dimensions; development is multidimensional.",
          },
        },
        {
          id: "cieids-u3-i-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The MDGs aimed to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reduce poverty and improve development globally",
              },
              { id: "b", text: "Increase military spending" },
              { id: "c", text: "Promote trade only" },
              { id: "d", text: "Increase population" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MDG aim",
                statement: "Reduce poverty, improve development.",
              },
            ],
            steps: [
              {
                reasoning: "MDGs aimed at development.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Reduce poverty and improve development.",
          },
        },
        {
          id: "cieids-u3-i-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a high Gini coefficient indicate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "High Gini",
                statement: "High income inequality.",
              },
            ],
            steps: [
              {
                reasoning: "High Gini = income concentrated at top.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May coexist with high GDP — inequality problem.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High income inequality.",
          },
        },
        {
          id: "cieids-u3-i-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the HDI as a development measure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HDI evaluation",
                statement: "Broader than GDP but still incomplete.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strength: broader than GDP — includes health and education.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: widely used, enables country comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: ignores inequality within countries.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: ignores environment, freedoms, sustainability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Broader than GDP but ignores inequality and sustainability.",
          },
        },
        {
          id: "cieids-u3-i-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'human capital' important for development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human capital importance",
                statement: "Skills drive development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Educated, healthy workforce drives economic growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Investing in education/health builds human capital.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Skilled, healthy workforce drives growth.",
          },
        },
      ],
    },
    {
      id: "cieids-u3-inequality",
      title: "Inequality and its causes",
      skill:
        "Explain causes and consequences of inequality within and between countries.",
      lesson: {
        sections: [
          {
            heading: "Types of inequality",
            body: "**Income inequality**: unequal distribution of earnings. **Wealth inequality**: unequal ownership of assets — often greater than income inequality. **Opportunity inequality**: unequal access to education, healthcare, jobs. **Gender inequality**: women often earn less and have less access to resources. **Regional inequality**: urban vs rural, north vs south within countries.",
          },
          {
            heading: "Causes of inequality",
            body: "**Economic factors**: unequal access to capital, technology, markets; globalisation benefits skilled workers more. **Social factors**: discrimination, unequal education access, social class. **Political factors**: policies favouring elites, weak redistribution, corruption. **Historical factors**: colonial legacies, inherited wealth, structural disadvantages.",
          },
          {
            heading: "Consequences of inequality",
            body: "Inequality slows poverty reduction, reduces social mobility, and can destabilise societies. High inequality correlates with worse health, education and crime outcomes. It can also limit economic growth — the poor can't invest in themselves. Reducing inequality requires progressive taxation, social spending, equal access to services and anti-discrimination laws.",
          },
        ],
        keyFormulas: [
          {
            name: "Inequality types",
            statement: "Income · wealth · opportunity · gender · regional",
          },
          {
            name: "Inequality causes",
            statement: "Economic · social · political · historical",
          },
          {
            name: "Inequality effects",
            statement: "Slower poverty reduction · less mobility · instability",
          },
        ],
        workedExample: {
          problem: "Why might a country have high GDP but persistent poverty?",
          solution:
            "Inequality — wealth concentrated among few; poor lack access to education, healthcare and capital needed to benefit from growth.",
        },
      },
      questions: [
        {
          id: "cieids-u3-ineq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Income inequality refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unequal distribution of earnings" },
              { id: "b", text: "Unequal wealth" },
              { id: "c", text: "Unequal opportunities" },
              { id: "d", text: "Unequal education" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Income inequality",
                statement: "Unequal distribution of earnings.",
              },
            ],
            steps: [
              {
                reasoning: "Income inequality = unequal earnings.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unequal distribution of earnings.",
          },
        },
        {
          id: "cieids-u3-ineq-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Wealth inequality refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unequal ownership of assets" },
              { id: "b", text: "Unequal earnings" },
              { id: "c", text: "Unequal education" },
              { id: "d", text: "Unequal jobs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wealth inequality",
                statement: "Unequal ownership of assets.",
              },
            ],
            steps: [
              {
                reasoning: "Wealth inequality = unequal assets.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unequal ownership of assets.",
          },
        },
        {
          id: "cieids-u3-ineq-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Opportunity inequality refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Unequal access to education, healthcare and jobs",
              },
              { id: "b", text: "Unequal income" },
              { id: "c", text: "Unequal wealth" },
              { id: "d", text: "Unequal voting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity inequality",
                statement: "Unequal access to services/jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Opportunity inequality = access inequality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unequal access to services.",
          },
        },
        {
          id: "cieids-u3-ineq-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "Gender inequality often manifests as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Women earning less and having less access to resources",
              },
              { id: "b", text: "Men having more education" },
              { id: "c", text: "Women having more jobs" },
              { id: "d", text: "Equal outcomes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender inequality",
                statement: "Women earn less, less access.",
              },
            ],
            steps: [
              {
                reasoning: "Gender inequality = women disadvantaged.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Women earning less, less access.",
          },
        },
        {
          id: "cieids-u3-ineq-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "An economic cause of inequality is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unequal access to capital and technology" },
              { id: "b", text: "Discrimination" },
              { id: "c", text: "Corruption" },
              { id: "d", text: "Colonial history" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economic causes",
                statement: "Unequal access to capital/technology.",
              },
            ],
            steps: [
              {
                reasoning: "Economic cause = unequal capital access.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unequal access to capital and technology.",
          },
        },
        {
          id: "cieids-u3-ineq-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A political cause of inequality is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Policies favouring elites" },
              { id: "b", text: "High GDP" },
              { id: "c", text: "Good education" },
              { id: "d", text: "Free trade" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Political causes",
                statement: "Policies favouring elites.",
              },
            ],
            steps: [
              {
                reasoning: "Political cause = elite-favouring policies.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Policies favouring elites.",
          },
        },
        {
          id: "cieids-u3-ineq-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A social cause of inequality is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Discrimination and unequal education access" },
              { id: "b", text: "High GDP" },
              { id: "c", text: "Free markets" },
              { id: "d", text: "Technology" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social causes",
                statement: "Discrimination, unequal access.",
              },
            ],
            steps: [
              {
                reasoning: "Social cause = discrimination/access.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Discrimination and unequal access.",
          },
        },
        {
          id: "cieids-u3-ineq-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A consequence of inequality is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slower poverty reduction" },
              { id: "b", text: "Higher GDP" },
              { id: "c", text: "Better health" },
              { id: "d", text: "More equality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality consequences",
                statement: "Slower poverty reduction.",
              },
            ],
            steps: [
              {
                reasoning: "Inequality slows poverty reduction.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Slower poverty reduction.",
          },
        },
        {
          id: "cieids-u3-ineq-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Wealth inequality is often greater than income inequality because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assets accumulate over generations" },
              { id: "b", text: "Income is equal" },
              { id: "c", text: "Wealth is taxed" },
              { id: "d", text: "Assets don't accumulate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wealth vs income inequality",
                statement: "Assets accumulate over generations.",
              },
            ],
            steps: [
              {
                reasoning: "Wealth accumulates across generations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Assets accumulate over generations.",
          },
        },
        {
          id: "cieids-u3-ineq-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between income and wealth inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Income vs wealth",
                statement: "Earnings vs assets.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Income inequality: unequal earnings from work/capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Wealth inequality: unequal ownership of assets — often greater.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Income = earnings; wealth = assets (often greater inequality).",
          },
        },
        {
          id: "cieids-u3-ineq-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two social consequences of inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality social effects",
                statement: "Health, education, crime.",
              },
            ],
            steps: [
              {
                reasoning: "Worse health outcomes for the poor.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Less social mobility and higher crime rates.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Worse health, less mobility, higher crime.",
          },
        },
        {
          id: "cieids-u3-ineq-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how globalisation can increase inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation and inequality",
                statement: "Benefits skilled workers more.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Globalisation rewards skilled workers and capital owners.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unskilled workers face competition from cheaper labour abroad.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This widens income gaps within and between countries.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Benefits skilled workers more; unskilled face competition.",
          },
        },
        {
          id: "cieids-u3-ineq-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A country has high GDP growth but rising inequality. Evaluate this development pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Growth-inequality evaluation",
                statement: "Growth alone insufficient.",
              },
            ],
            steps: [
              {
                reasoning: "GDP growth positive — economy expanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But rising inequality means benefits not shared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Poverty may persist or worsen for many.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Sustainable development requires both growth and equity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth positive but inequality undermines development benefits.",
          },
        },
        {
          id: "cieids-u3-ineq-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Regional inequality refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Uneven development between urban and rural areas",
              },
              { id: "b", text: "Unequal income" },
              { id: "c", text: "Unequal gender" },
              { id: "d", text: "Unequal education" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Regional inequality",
                statement: "Urban vs rural uneven development.",
              },
            ],
            steps: [
              {
                reasoning: "Regional = urban/rural divide.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Urban-rural uneven development.",
          },
        },
        {
          id: "cieids-u3-ineq-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can discrimination contribute to inequality?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Discrimination and inequality",
                statement: "Limits access to opportunities.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Discrimination limits access to jobs, education, services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This perpetuates inequality across generations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Limits opportunities → perpetuates inequality.",
          },
        },
        {
          id: "cieids-u3-ineq-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Colonial legacies contribute to inequality through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inherited structural disadvantages" },
              { id: "b", text: "Modern technology" },
              { id: "c", text: "Free trade" },
              { id: "d", text: "Good governance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Colonial legacy",
                statement: "Structural disadvantages persist.",
              },
            ],
            steps: [
              {
                reasoning: "Colonial legacy = structural disadvantage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Inherited structural disadvantages.",
          },
        },
        {
          id: "cieids-u3-ineq-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is wealth inequality often greater than income inequality?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wealth accumulation",
                statement: "Assets accumulate over time/generations.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wealth accumulates through investment over generations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Income is flow; wealth is stock — compounds over time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wealth compounds over generations — greater than income inequality.",
          },
        },
        {
          id: "cieids-u3-ineq-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how inequality can limit economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality limits growth",
                statement: "Poor can't invest in themselves.",
              },
            ],
            steps: [
              {
                reasoning: "Poor can't afford education, healthcare, capital.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This limits human capital development.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reduced consumer demand and investment → slower growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Poor can't invest → less human capital → slower growth.",
          },
        },
        {
          id: "cieids-u3-ineq-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design policies to reduce inequality in a developing country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inequality policy",
                statement: "Redistribution + opportunity access.",
              },
            ],
            steps: [
              {
                reasoning: "Progressive taxation to fund social spending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Universal education and healthcare access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anti-discrimination laws and land reform.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Microfinance and skills training for the poor.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Taxation + universal services + anti-discrimination + microfinance.",
          },
        },
        {
          id: "cieids-u3-ineq-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Opportunity inequality means unequal access to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Education, healthcare and jobs" },
              { id: "b", text: "Money only" },
              { id: "c", text: "Land only" },
              { id: "d", text: "Voting only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Opportunity inequality",
                statement: "Unequal access to services/jobs.",
              },
            ],
            steps: [
              {
                reasoning: "Opportunity = access to services.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Education, healthcare and jobs.",
          },
        },
        {
          id: "cieids-u3-ineq-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'social mobility'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social mobility",
                statement: "Ability to move up/down social classes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ability to move between social classes over generations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High inequality often means low mobility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Moving between social classes; high inequality = low mobility.",
          },
        },
        {
          id: "cieids-u3-ineq-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how corruption contributes to inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corruption and inequality",
                statement: "Benefits elites, harms poor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Corruption lets elites capture resources and contracts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Public services diverted — poor lose access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Perpetuates inequality and weakens development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Corruption benefits elites, harms poor services.",
          },
        },
        {
          id: "cieids-u3-ineq-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the claim that 'growth alone will reduce inequality'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth-inequality claim",
                statement: "Growth insufficient alone.",
              },
            ],
            steps: [
              {
                reasoning: "Growth can reduce poverty if benefits shared.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But often benefits concentrate at top.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inequality may actually increase during growth.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Redistribution and policies needed alongside growth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth alone insufficient — needs redistribution policies.",
          },
        },
        {
          id: "cieids-u3-ineq-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of inequality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Climate inequality" },
              { id: "b", text: "Income inequality" },
              { id: "c", text: "Wealth inequality" },
              { id: "d", text: "Gender inequality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality types",
                statement: "Income, wealth, opportunity, gender, regional.",
              },
            ],
            steps: [
              {
                reasoning: "Climate inequality not standard type.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Climate inequality.",
          },
        },
        {
          id: "cieids-u3-ineq-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'land inequality'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Land inequality",
                statement: "Unequal distribution of land ownership.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unequal ownership of land — often concentrated in few hands.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limits access for poor farmers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unequal land ownership — concentrated ownership limits poor farmers.",
          },
        },
        {
          id: "cieids-u3-ineq-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how education inequality affects development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education inequality",
                statement: "Limits human capital.",
              },
            ],
            steps: [
              {
                reasoning: "Unequal education access → unequal skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Poor remain unskilled → low-paying jobs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reduces overall human capital → slower development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unequal education → unequal skills → less human capital.",
          },
        },
        {
          id: "cieids-u3-ineq-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Globalisation tends to benefit which group most?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skilled workers and capital owners" },
              { id: "b", text: "Unskilled workers" },
              { id: "c", text: "The poor" },
              { id: "d", text: "Rural populations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation beneficiaries",
                statement: "Skilled workers and capital owners.",
              },
            ],
            steps: [
              {
                reasoning: "Globalisation benefits skilled/capital.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Skilled workers and capital owners.",
          },
        },
        {
          id: "cieids-u3-ineq-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'redistribution'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Redistribution",
                statement: "Reallocating income/wealth through policy.",
              },
            ],
            steps: [
              {
                reasoning: "Reallocating income through taxation and spending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Aims to reduce inequality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reallocating income through taxation/spending to reduce inequality.",
          },
        },
        {
          id: "cieids-u3-ineq-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate whether inequality is always bad for development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inequality evaluation",
                statement: "Mostly harmful but some argue incentives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "High inequality slows poverty reduction and mobility.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Linked to worse health, education, crime outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Some argue moderate inequality incentivises effort.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "But evidence shows excessive inequality is harmful overall.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mostly harmful — slows poverty reduction; small incentives possible but excessive harmful.",
          },
        },
        {
          id: "cieids-u3-ineq-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does gender inequality matter for development?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender inequality importance",
                statement: "Half population disadvantaged.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Women are ~half population — disadvantage affects half.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gender equality boosts economic growth and development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Women ~half population; gender equality boosts development.",
          },
        },
      ],
    },
  ],
};
