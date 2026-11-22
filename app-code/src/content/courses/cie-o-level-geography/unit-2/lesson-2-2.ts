import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "oleg-u2-lesson-2-2",
  code: "2-2",
  title: "Development and Inequality",
  goal: "I CAN describe development indicators, development gap and causes of inequality.",
  standards: ["2217: Human geography — development"],
  vocabulary: [
    {
      term: "Development",
      definition:
        "Improvement in living standards, health, education and income.",
    },
    {
      term: "Developed country",
      definition: "High income, high living standards — e.g. USA, Japan.",
    },
    {
      term: "Developing country",
      definition:
        "Low income, lower living standards — e.g. many African nations.",
    },
    {
      term: "Development gap",
      definition: "Difference in development between rich and poor countries.",
    },
    {
      term: "HDI",
      definition:
        "Human Development Index — measures health, education, income.",
    },
    {
      term: "Sustainable development",
      definition:
        "Meeting present needs without compromising future generations.",
    },
  ],
  concepts: [
    {
      id: "oleg-u2-development",
      title: "Measuring development",
      skill: "Explain development indicators and the development gap.",
      lesson: {
        sections: [
          {
            heading: "Development indicators",
            body: "GDP/GNP: economic output per person. HDI: combines life expectancy, education, income — broader than income alone. Other indicators: infant mortality, literacy rate, access to clean water, life expectancy.",
          },
          {
            heading: "Development gap",
            body: "Gap between developed (North/West) and developing (South/East) countries. Rich countries have high HDI, low birth rates, good services. Poor countries have low HDI, high birth rates, poor services. Gap narrowing slowly.",
          },
          {
            heading: "Development stages",
            body: "Low income → middle income → high income. Some countries 'catch up' through industrialisation (e.g. China, India). Least Developed Countries (LDCs) remain poorest — often landlocked or conflict-affected.",
          },
        ],
        keyFormulas: [
          {
            name: "Development",
            statement: "HDI=health+education+income; Gap=N vs S.",
          },
        ],
        workedExample: {
          problem: "Why is HDI better than GDP alone?",
          solution:
            "HDI includes health and education — a country can have high GDP but poor health/education.",
        },
      },
      questions: [
        {
          id: "oleg-u2-dv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does HDI measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Military strength" },
              { id: "b", text: "GDP only" },
              { id: "c", text: "Population size" },
              { id: "d", text: "Health, education and income" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Health+education+income.",
              },
            ],
            steps: [
              {
                reasoning: "HDI = three components.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Health, education, income",
            commonErrors: ["Confusing with GDP."],
          },
        },
        {
          id: "oleg-u2-dv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the development gap?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Development gap",
                statement: "Difference between rich and poor countries.",
              },
            ],
            steps: [
              {
                reasoning: "Rich vs poor countries.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "In living standards/HDI.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Difference in development between rich and poor countries.",
            commonErrors: ["Saying it's within one country."],
          },
        },
        {
          id: "oleg-u2-dv-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is HDI a better measure of development than GDP?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HDI vs GDP",
                statement: "Broader than income alone.",
              },
            ],
            steps: [
              {
                reasoning: "HDI includes health and education.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "GDP only measures economic output.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Country can have high GDP but poor services.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear argument.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "HDI broader — includes health/education not just income.",
            commonErrors: ["Saying GDP is always better."],
          },
        },
        {
          id: "oleg-u2-dv-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Development.",
          parts: [
            { label: "a", prompt: "Define HDI.", marks: 1 },
            { label: "b", prompt: "Define development gap.", marks: 2 },
            { label: "c", prompt: "HDI vs GDP?", marks: 3 },
            {
              label: "d",
              prompt: "Name two development indicators.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Development",
                statement: "Definitions+comparison+indicators.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Health+education+income.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Rich vs poor.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "In living standards.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "HDI broader.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Includes health/education.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "GDP income only.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Any two indicators.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Explained.", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) HDI (b) gap (c) HDI vs GDP (d) indicators",
          },
        },
        { id: "oleg-u2-dv-q5", difficulty: "foundation", totalMarks: 1,
          stem: "HDI stands for...",
          response: { type: "mcq", choices: [ { id: "a", text: "Housing Development Index" }, { id: "b", text: "High Development Income" }, { id: "c", text: "Human Development Index" }, { id: "d", text: "Health Development Index" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "HDI", statement: "Human Development Index combines health, education and income." } ], steps: [ { reasoning: "HDI = Human Development Index.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** Human Development Index", commonErrors: ["Guessing the acronym."] } },
        { id: "oleg-u2-dv-q6", difficulty: "core", totalMarks: 2,
          stem: "A country has GDP of 200 billion dollars and population of 50 million. Calculate GDP per capita in dollars.",
          response: { type: "numeric", parts: [ { label: "GDP per capita", answer: 4000, unit: "dollars" } ] },
          markscheme: { principles: [ { kind: "formula", name: "GDP per capita", statement: "GDP per capita = GDP / population." } ], steps: [ { reasoning: "200 000 000 000 / 50 000 000 = 4000 dollars.", marks: 2, markCode: "AO1" } ], finalAnswer: "4000 dollars", commonErrors: ["Unit or division errors."] } },
        { id: "oleg-u2-dv-q7", difficulty: "core", totalMarks: 1,
          stem: "Which is an example of a development indicator?",
          response: { type: "mcq", choices: [ { id: "a", text: "Latitude only" }, { id: "b", text: "Colour of flag" }, { id: "c", text: "Number of mountains" }, { id: "d", text: "Infant mortality rate" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Development indicators", statement: "Indicators include health, education and income measures." } ], steps: [ { reasoning: "Infant mortality reflects health and development.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** Infant mortality rate", commonErrors: ["Choosing a non-social measure."] } },
        { id: "oleg-u2-dv-q8", difficulty: "core", totalMarks: 2,
          stem: "A country's life expectancies are 60, 70 and 80 years. Calculate the mean life expectancy.",
          response: { type: "numeric", parts: [ { label: "Mean", answer: 70, unit: "years" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Mean", statement: "Average = sum/count." } ], steps: [ { reasoning: "(60 + 70 + 80) / 3 = 70 years.", marks: 2, markCode: "AO1" } ], finalAnswer: "70 years", commonErrors: ["Forgetting to divide."] } },
        { id: "oleg-u2-dv-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain why HDI may give a better picture of development than GDP alone.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "comparison", name: "HDI vs GDP", statement: "HDI is broader than income alone." } ], steps: [ { reasoning: "State that HDI includes health and education.", marks: 1, markCode: "AO1" }, { reasoning: "State that GDP only measures income/output.", marks: 1, markCode: "AO1" }, { reasoning: "Give an example where GDP is high but HDI is low.", marks: 1, markCode: "AO2" }, { reasoning: "Reach a clear judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "HDI includes health and education, so it measures wellbeing more fully than GDP.", commonErrors: ["Claiming GDP is always better."] } },
        { id: "oleg-u2-dv-q10", difficulty: "core", totalMarks: 1,
          stem: "A Least Developed Country (LDC) is likely to have...",
          response: { type: "mcq", choices: [ { id: "a", text: "strong industry only" }, { id: "b", text: "low income and poor services" }, { id: "c", text: "no population growth" }, { id: "d", text: "high HDI" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "LDC", statement: "Least Developed Countries have low income and poor services." } ], steps: [ { reasoning: "LDCs are the poorest countries.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** low income and poor services", commonErrors: ["Confusing LDC with developed country."] } },
        { id: "oleg-u2-dv-q11", difficulty: "core", totalMarks: 2,
          stem: "Literacy rate rises from 60% to 75%. Calculate the percentage increase.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 25, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage change", statement: "(new-old)/old x 100." } ], steps: [ { reasoning: "(75 - 60) / 60 x 100 = 25%.", marks: 2, markCode: "AO1" } ], finalAnswer: "25 %", commonErrors: ["Using 75 as denominator."] } },
        { id: "oleg-u2-dv-q12", difficulty: "challenge", totalMarks: 1,
          stem: "The 'development gap' mainly refers to differences between...",
          response: { type: "mcq", choices: [ { id: "a", text: "young and old people" }, { id: "b", text: "developed and developing countries" }, { id: "c", text: "rural and urban wages only" }, { id: "d", text: "two cities in one country" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Development gap", statement: "Difference in development between rich and poor countries." } ], steps: [ { reasoning: "The gap is between developed and developing countries.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** developed and developing countries", commonErrors: ["Confusing with inequality within a country."] } },
        { id: "oleg-u2-dv-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two reasons why some countries remain at low levels of development.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Underdevelopment", statement: "Economic and political factors limit development." } ], steps: [ { reasoning: "Name two causes such as dependence on primary products or weak governance.", marks: 1, markCode: "AO1" }, { reasoning: "Explain the mechanism for each cause.", marks: 1, markCode: "AO2" }, { reasoning: "Link to low HDI or poor services.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude clearly.", marks: 1, markCode: "AO3" } ], finalAnswer: "Dependence on low-value exports and weak governance reduce investment and services, keeping HDI low.", commonErrors: ["Listing causes without mechanisms."] } },
        { id: "oleg-u2-dv-q14", difficulty: "core", totalMarks: 1,
          stem: "Which indicator would best measure access to health services?",
          response: { type: "mcq", choices: [ { id: "a", text: "Average rainfall" }, { id: "b", text: "Mountain height" }, { id: "c", text: "Life expectancy" }, { id: "d", text: "Number of cars" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Development indicators", statement: "Life expectancy reflects health access." } ], steps: [ { reasoning: "Longer life expectancy suggests better health services.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** Life expectancy", commonErrors: ["Choosing an unrelated measure."] } },
        { id: "oleg-u2-dv-q15", difficulty: "foundation", totalMarks: 2,
          stem: "A country has 40 million people and GDP of 160 billion dollars. Calculate GDP per capita.",
          response: { type: "numeric", parts: [ { label: "GDP per capita", answer: 4000, unit: "dollars" } ] },
          markscheme: { principles: [ { kind: "formula", name: "GDP per capita", statement: "Output per person." } ], steps: [ { reasoning: "160 000 000 000 / 40 000 000 = 4000 dollars.", marks: 2, markCode: "AO1" } ], finalAnswer: "4000 dollars", commonErrors: ["Decimal place errors."] } },
        { id: "oleg-u2-dv-q16", difficulty: "core", totalMarks: 1,
          stem: "Countries that 'catch up' economically often do so through...",
          response: { type: "mcq", choices: [ { id: "a", text: "industrialisation and investment" }, { id: "b", text: "reducing all trade" }, { id: "c", text: "ignoring education" }, { id: "d", text: "increasing birth rate only" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "principle", name: "Development stages", statement: "Industrialisation can raise income and HDI." } ], steps: [ { reasoning: "Industrialisation and investment raise income.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** industrialisation and investment", commonErrors: ["Choosing non-development strategies."] } },
      ],
    },
    {
      id: "oleg-u2-inequality",
      title: "Causes of underdevelopment",
      skill:
        "Explain physical, economic and political causes of underdevelopment.",
      lesson: {
        sections: [
          {
            heading: "Physical causes",
            body: "Landlocked: no sea access — hard to trade. Poor climate: drought/floods reduce agriculture. Few resources: lack minerals/fertile land. Disease burden: malaria/HIV reduce productivity.",
          },
          {
            heading: "Economic causes",
            body: "Dependence on primary products: low prices, volatile markets. Debt: interest payments drain resources. Lack of investment: poor infrastructure, education. Colonial legacy: exploitation and artificial borders.",
          },
          {
            heading: "Political causes",
            body: "Corruption: resources diverted. Conflict: war destroys infrastructure. Poor governance: weak institutions. Colonial borders: artificial divisions cause ethnic conflict.",
          },
        ],
        keyFormulas: [
          {
            name: "Underdevelopment",
            statement: "Physical+economic+political causes.",
          },
        ],
        workedExample: {
          problem: "Why do landlocked countries struggle?",
          solution:
            "No sea access → higher transport costs → less trade → slower economic development.",
        },
      },
      questions: [
        {
          id: "oleg-u2-cd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a landlocked country?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Country with no direct sea access" },
              { id: "b", text: "Country surrounded by desert" },
              { id: "c", text: "Country with no rivers" },
              { id: "d", text: "Island nation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Landlocked",
                statement: "No sea access.",
              },
            ],
            steps: [
              { reasoning: "Landlocked = no sea.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** No sea access",
            commonErrors: ["Confusing with island."],
          },
        },
        {
          id: "oleg-u2-cd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two economic causes of underdevelopment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Economic causes",
                statement: "Dependence, debt, lack of investment.",
              },
            ],
            steps: [
              { reasoning: "Any two causes.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Dependence on primary products, debt, lack of investment.",
            commonErrors: ["Saying 'geography'."],
          },
        },
        {
          id: "oleg-u2-cd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how colonialism affects development today.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Colonial legacy",
                statement: "Exploitation+borders+institutions.",
              },
            ],
            steps: [
              {
                reasoning: "Resources extracted during colonialism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Artificial borders cause conflict.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weak institutions inherited.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Exploitation+borders+weak institutions persist.",
            commonErrors: ["Only historical view."],
          },
        },
        {
          id: "oleg-u2-cd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Underdevelopment.",
          parts: [
            { label: "a", prompt: "Define landlocked.", marks: 1 },
            { label: "b", prompt: "Two economic causes?", marks: 2 },
            { label: "c", prompt: "Colonial legacy?", marks: 3 },
            { label: "d", prompt: "Two political causes?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Underdevelopment",
                statement: "Definitions+causes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "No sea access.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two causes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Explained.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Exploitation/borders.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Weak institutions.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Any two causes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Corruption/conflict/governance.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "(a) landlocked (b) economic (c) colonial (d) political",
          },
        },
        { id: "oleg-u2-cd-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A physical cause of underdevelopment is...",
          response: { type: "mcq", choices: [ { id: "a", text: "high literacy" }, { id: "b", text: "strong ports" }, { id: "c", text: "poor climate or few resources" }, { id: "d", text: "democracy" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Physical causes", statement: "Climate, resources and location affect development." } ], steps: [ { reasoning: "Physical causes are natural/environmental constraints.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** poor climate or few resources", commonErrors: ["Choosing a positive factor."] } },
        { id: "oleg-u2-cd-q6", difficulty: "core", totalMarks: 2,
          stem: "A country's debt interest payments are 5% of a 100 billion dollar GDP. Calculate the amount paid in interest.",
          response: { type: "numeric", parts: [ { label: "Interest", answer: 5, unit: "billion dollars" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Debt burden", statement: "Interest = percentage x GDP." } ], steps: [ { reasoning: "0.05 x 100 = 5 billion dollars.", marks: 2, markCode: "AO1" } ], finalAnswer: "5 billion dollars", commonErrors: ["Using 100% instead of 5%."] } },
        { id: "oleg-u2-cd-q7", difficulty: "core", totalMarks: 1,
          stem: "Dependence on primary products can hinder development because...",
          response: { type: "mcq", choices: [ { id: "a", text: "they always earn high profits" }, { id: "b", text: "prices are low and markets volatile" }, { id: "c", text: "they stop all trade" }, { id: "d", text: "they need no workers" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "principle", name: "Primary dependence", statement: "Low-value, volatile exports limit income." } ], steps: [ { reasoning: "Primary products have low and unstable prices.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** prices are low and markets volatile", commonErrors: ["Assuming primary products are always profitable."] } },
        { id: "oleg-u2-cd-q8", difficulty: "core", totalMarks: 2,
          stem: "A region's population grows from 2 million to 2.4 million. Calculate the percentage increase.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 20, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Population growth", statement: "Change/original x 100." } ], steps: [ { reasoning: "(2.4 - 2.0) / 2.0 x 100 = 20%.", marks: 2, markCode: "AO1" } ], finalAnswer: "20 %", commonErrors: ["Wrong denominator."] } },
        { id: "oleg-u2-cd-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain how colonialism can still affect development today.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Colonial legacy", statement: "Historical exploitation shapes modern inequality." } ], steps: [ { reasoning: "Mention exploitation of resources during colonial rule.", marks: 1, markCode: "AO1" }, { reasoning: "Mention artificial borders causing conflict.", marks: 1, markCode: "AO1" }, { reasoning: "Mention weak institutions inherited.", marks: 1, markCode: "AO2" }, { reasoning: "Give a clear conclusion.", marks: 1, markCode: "AO3" } ], finalAnswer: "Colonial extraction left weak institutions and artificial borders that still hinder development.", commonErrors: ["Treating colonialism as purely historical."] } },
        { id: "oleg-u2-cd-q10", difficulty: "core", totalMarks: 1,
          stem: "Corruption is a political cause of underdevelopment because it...",
          response: { type: "mcq", choices: [ { id: "a", text: "improves governance" }, { id: "b", text: "diverts resources away from public services" }, { id: "c", text: "reduces debt" }, { id: "d", text: "increases investment" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "principle", name: "Corruption", statement: "Misuse of resources reduces development." } ], steps: [ { reasoning: "Corruption diverts money from services and investment.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** diverts resources away from public services", commonErrors: ["Thinking corruption helps development."] } },
        { id: "oleg-u2-cd-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Aid of 500 million dollars is shared equally between 10 countries. Calculate aid per country.",
          response: { type: "numeric", parts: [ { label: "Aid", answer: 50, unit: "million dollars" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Per unit", statement: "Total divided by number of groups." } ], steps: [ { reasoning: "500 / 10 = 50 million dollars.", marks: 2, markCode: "AO1" } ], finalAnswer: "50 million dollars", commonErrors: ["Multiplying instead of dividing."] } },
        { id: "oleg-u2-cd-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which combination best represents economic causes of underdevelopment?",
          response: { type: "mcq", choices: [ { id: "a", text: "corruption and war" }, { id: "b", text: "dependence, debt and lack of investment" }, { id: "c", text: "high literacy and ports" }, { id: "d", text: "deserts and mountains" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Economic causes", statement: "Dependence, debt and investment gaps are economic." } ], steps: [ { reasoning: "These are economic rather than political or physical.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** dependence, debt and lack of investment", commonErrors: ["Mixing economic with political/physical causes."] } },
        { id: "oleg-u2-cd-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the view that physical factors are the main cause of underdevelopment.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "comparison", name: "Causes of underdevelopment", statement: "Physical, economic and political factors interact." } ], steps: [ { reasoning: "Give examples of physical causes.", marks: 1, markCode: "AO1" }, { reasoning: "Give examples of economic/political causes.", marks: 1, markCode: "AO1" }, { reasoning: "Explain why non-physical factors may dominate.", marks: 1, markCode: "AO2" }, { reasoning: "Reach a balanced judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "Physical factors matter, but economic dependence and weak governance often have a larger effect.", commonErrors: ["One-sided argument."] } },
        { id: "oleg-u2-cd-q14", difficulty: "core", totalMarks: 1,
          stem: "A landlocked country faces extra costs mainly because...",
          response: { type: "mcq", choices: [ { id: "a", text: "it has no land" }, { id: "b", text: "it must transport goods through neighbouring countries" }, { id: "c", text: "it cannot grow crops" }, { id: "d", text: "it has no people" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "principle", name: "Landlocked", statement: "No sea access raises transport/trade costs." } ], steps: [ { reasoning: "Landlocked countries rely on neighbours for sea trade.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** it must transport goods through neighbouring countries", commonErrors: ["Misunderstanding 'landlocked'."] } },
        { id: "oleg-u2-cd-q15", difficulty: "core", totalMarks: 2,
          stem: "Unemployment falls from 20% to 16%. Calculate the percentage point change.",
          response: { type: "numeric", parts: [ { label: "Change", answer: 4, unit: "percentage points" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage points", statement: "Difference between two percentages." } ], steps: [ { reasoning: "20 - 16 = 4 percentage points.", marks: 2, markCode: "AO1" } ], finalAnswer: "4 percentage points", commonErrors: ["Calling it a percentage increase."] } },
        { id: "oleg-u2-cd-q16", difficulty: "foundation", totalMarks: 1,
          stem: "A political cause of underdevelopment is...",
          response: { type: "mcq", choices: [ { id: "a", text: "fertile soil" }, { id: "b", text: "good ports" }, { id: "c", text: "high rainfall" }, { id: "d", text: "weak governance or conflict" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "definition", name: "Political causes", statement: "Governance and conflict affect development." } ], steps: [ { reasoning: "Weak governance/conflict are political factors.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** weak governance or conflict", commonErrors: ["Choosing a physical advantage."] } },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u2-2-2-notes",
      title: "Development — notes",
      summary: "HDI, development gap, causes of underdevelopment.",
      sections: [
        {
          heading: "Development",
          body: "HDI=health+education+income; gap=N vs S; indicators=infant mortality, literacy, life expectancy.",
        },
        {
          heading: "Causes",
          body: "Physical=landlocked/climate/resources; economic=dependence/debt/investment; political=corruption/conflict/governance.",
        },
      ],
    },
  ],
};
