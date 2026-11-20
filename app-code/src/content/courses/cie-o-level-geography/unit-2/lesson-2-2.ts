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
              { id: "a", text: "Health, education and income" },
              { id: "b", text: "GDP only" },
              { id: "c", text: "Population size" },
              { id: "d", text: "Military strength" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Health, education, income",
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
              { id: "c", text: "Island nation" },
              { id: "d", text: "Country with no rivers" },
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
