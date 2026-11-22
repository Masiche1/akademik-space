import type { Lesson } from "../../../types.ts";

export const lesson521: Lesson = {
  id: "ciealgeo-u2-lesson-2-1",
  code: "2-1",
  title: "Development and Inequality",
  goal: "I CAN explain development indicators, inequality and development theories.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: human"],

  vocabulary: [
    {
      term: "Development",
      definition: "Improvement in living standards and wellbeing.",
    },
    { term: "HDI", definition: "Human Development Index." },
    { term: "Gini coefficient", definition: "Measure of income inequality." },
    {
      term: "Core-periphery model",
      definition: "Developed core exploits developing periphery.",
    },
    {
      term: "Dependency theory",
      definition: "Developing countries dependent on developed.",
    },
    {
      term: "Modernisation theory",
      definition: "Development through economic growth.",
    },
  ],
  concepts: [
    {
      id: "ciealgeo-u2-s1-dev",
      title: "Development",
      skill: "Analyse development and inequality.",
      lesson: {
        sections: [
          {
            heading: "Development measures",
            body: "GDP per capita, HDI, poverty rates, infant mortality, access to services. Development is multidimensional.",
          },
          {
            heading: "Inequality",
            body: "Gini coefficient measures income distribution. Spatial inequality: urban vs rural, core vs periphery. Within-country inequality increasing.",
          },
          {
            heading: "Development theories",
            body: "Modernisation: linear progression through stages. Dependency: underdevelopment caused by exploitation. World systems: core, semi-periphery, periphery.",
          },
        ],
        keyFormulas: [
          { name: "HDI", statement: "health+education+income" },
          { name: "Gini", statement: "inequality measure" },
          { name: "Core-periphery", statement: "exploitation model" },
        ],
        workedExample: {
          problem: "Why do some countries remain poor despite resources?",
          solution:
            "Dependency theory: colonial exploitation, unequal trade, debt burden → structural underdevelopment.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u2-dev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is HDI?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "GDP measure",
              },
              {
                id: "b",
                text: "Human Development Index",
              },
              {
                id: "c",
                text: "Population",
              },
              {
                id: "d",
                text: "Inequality measure",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement: "Development measure.",
              },
            ],
            steps: [
              {
                reasoning: "HDI = health+education+income.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Development measure",
          },
        },
        {
          id: "ciealgeo-u2-dev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the Gini coefficient?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gini",
                statement: "Inequality measure.",
              },
            ],
            steps: [
              {
                reasoning: "Measures income inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0 = perfect equality, 1 = perfect inequality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Inequality measure",
          },
        },
        {
          id: "ciealgeo-u2-dev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is dependency theory?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dependency",
                statement: "Underdevelopment cause.",
              },
            ],
            steps: [
              {
                reasoning: "Developing countries dependent on developed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unequal trade, debt, exploitation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Structural underdevelopment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dependency model",
          },
        },
        {
          id: "ciealgeo-u2-dev-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define development, HDI, Gini coefficient, core-periphery, dependency theory, modernisation. (b) What is HDI? (c) What is Gini? (d) What is dependency theory? (e) What is core-periphery? (f) What are development indicators? (g) What causes inequality? (h) Evaluate whether development theories explain global inequality.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Development",
                statement: "Inequality, theories.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Health+education+income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Inequality measure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Developing reliance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Exploitation model.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) GDP, HDI, poverty, health.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Colonialism, trade, institutions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Theories partial — multiple factors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Development and inequality.",
          },
        },
        {
          id: "ciealgeo-u2-dev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The HDI combines measures of health, education and:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Military spending" },
              { id: "b", text: "Income" },
              { id: "c", text: "Tourist arrivals" },
              { id: "d", text: "Forest cover" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "HDI", statement: "A composite of health, education and income indicators." },
            ],
            steps: [{ reasoning: "Income is the third HDI dimension.", marks: 1, markCode: "M" }],
            finalAnswer: "Income",
          },
        },
        {
          id: "ciealgeo-u2-dev-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A simplified HDI uses health = 0.80, education = 0.70 and income = 0.60. (a) What is the mean HDI score? (b) What is the difference between the highest and lowest component scores?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.7 },
              { label: "b", answer: 0.2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "HDI calculation", statement: "Average the component scores; HDI runs from 0 to 1." },
            ],
            steps: [
              { part: "a", reasoning: "(0.80 + 0.70 + 0.60) / 3 = 0.70.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "0.80 - 0.60 = 0.20.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 0.70; b) 0.20",
            commonErrors: ["Adding scores without dividing by three."],
          },
        },
        {
          id: "ciealgeo-u2-dev-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Dependency theory mainly argues that underdevelopment is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Structural relationships that disadvantage poorer countries" },
              { id: "b", text: "Equal trade between all countries" },
              { id: "c", text: "Universal rejection of technology" },
              { id: "d", text: "A lack of natural resources only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dependency theory", statement: "Unequal economic relationships reproduce underdevelopment." },
            ],
            steps: [{ reasoning: "Dependency theory emphasises unequal trade, debt and exploitation.", marks: 1, markCode: "M" }],
            finalAnswer: "Structural disadvantage in global economic relationships.",
          },
        },
        {
          id: "ciealgeo-u2-dev-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a Gini coefficient measures and how its values are interpreted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gini coefficient", statement: "An index of income inequality ranging from perfect equality to perfect inequality." },
            ],
            steps: [
              { reasoning: "It measures the distribution of income within a population.", marks: 1, markCode: "M" },
              { reasoning: "0 indicates perfect equality and 1 indicates perfect inequality.", marks: 1, markCode: "M" },
              { reasoning: "Higher values therefore show greater concentration of income.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gini measures income inequality; higher values mean greater inequality.",
            commonErrors: ["Treating a higher Gini as more equality."],
          },
        },
        {
          id: "ciealgeo-u2-dev-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Modernisation theory generally predicts that development occurs through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Permanent dependence on former colonial powers" },
              { id: "b", text: "Avoidance of all technology" },
              { id: "c", text: "A fixed population with no urban growth" },
              { id: "d", text: "Economic growth and progressive structural change" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modernisation theory", statement: "Development follows economic growth and structural transformation." },
            ],
            steps: [{ reasoning: "Modernisation theory sees development as progressive economic change.", marks: 1, markCode: "M" }],
            finalAnswer: "Economic growth and structural change.",
          },
        },
        {
          id: "ciealgeo-u2-dev-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country of 3 million people has 450,000 people below the poverty line. (a) What percentage of the population is poor? (b) How many people are not classified as poor?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15, unit: "%" },
              { label: "b", answer: 2550000, unit: "people" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Poverty calculation", statement: "Divide poor population by total population and subtract from the total." },
            ],
            steps: [
              { part: "a", reasoning: "450000 / 3000000 x 100 = 15%.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "3000000 - 450000 = 2550000 people.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 15%; b) 2550000",
            commonErrors: ["Using 450,000 as the total population."],
          },
        },
        {
          id: "ciealgeo-u2-dev-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare modernisation theory and dependency theory as explanations of global inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Development theories", statement: "Modernisation stresses internal growth; dependency stresses external exploitation." },
            ],
            steps: [
              { reasoning: "Modernisation theory sees all countries progressing through similar stages.", marks: 1, markCode: "M" },
              { reasoning: "Dependency theory sees core countries benefiting from peripheral underdevelopment.", marks: 1, markCode: "M" },
              { reasoning: "Evidence such as unequal trade supports dependency, while successful growth supports modernisation.", marks: 1, markCode: "A" },
              { reasoning: "A balanced conclusion recognises that both explain different contexts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The theories offer contrasting internal-growth and external-exploitation explanations; both have explanatory value.",
            commonErrors: ["Treating the theories as identical."],
          },
        },
        {
          id: "ciealgeo-u2-dev-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the core-periphery model, the 'periphery' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The richest financial district" },
              { id: "b", text: "The most industrialised urban centres" },
              { id: "c", text: "A country with no coastline" },
              { id: "d", text: "Less developed regions dependent on the core" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Core-periphery", statement: "Developed core regions interact unequally with dependent peripheral regions." },
            ],
            steps: [{ reasoning: "The periphery supplies resources and markets while remaining less developed.", marks: 1, markCode: "M" }],
            finalAnswer: "Less developed, dependent regions.",
          },
        },
        {
          id: "ciealgeo-u2-dev-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country has GDP of $360 billion and population of 30 million. What is GDP per capita?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12000, unit: "USD" }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "GDP per capita", statement: "GDP per capita = GDP / population." },
            ],
            steps: [
              { part: "a", reasoning: "360000000000 / 30000000 = 12000 USD.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "12000 USD",
            commonErrors: ["Dividing population by GDP."],
          },
        },
        {
          id: "ciealgeo-u2-dev-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether GDP per capita is a sufficient measure of development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Development measurement", statement: "Development is multidimensional, so single indicators are incomplete." },
            ],
            steps: [
              { reasoning: "GDP per capita provides a simple income comparison.", marks: 1, markCode: "M" },
              { reasoning: "It ignores health, education, inequality and environmental quality.", marks: 1, markCode: "M" },
              { reasoning: "HDI and other indicators provide a broader picture.", marks: 1, markCode: "M" },
              { reasoning: "Context and data quality also affect interpretation.", marks: 1, markCode: "A" },
              { reasoning: "It is useful but insufficient alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GDP per capita is useful but incomplete because development includes wellbeing and inequality.",
            commonErrors: ["Treating income as the only development dimension."],
          },
        },
        {
          id: "ciealgeo-u2-dev-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country has a Gini coefficient of 0.25 and another has 0.68. Which country has greater income inequality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both are equal" },
              { id: "b", text: "The country with 0.68" },
              { id: "c", text: "The country with 0.25" },
              { id: "d", text: "Neither value is meaningful" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gini interpretation", statement: "Higher Gini values indicate greater inequality." },
            ],
            steps: [{ reasoning: "0.68 is much higher than 0.25 on the inequality scale.", marks: 1, markCode: "M" }],
            finalAnswer: "The country with 0.68",
          },
        },
        {
          id: "ciealgeo-u2-dev-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between within-country and between-country inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Inequality scale", statement: "Inequality can occur inside countries or between different countries." },
            ],
            steps: [
              { reasoning: "Within-country inequality compares groups inside one nation.", marks: 1, markCode: "M" },
              { reasoning: "Between-country inequality compares average conditions across nations.", marks: 1, markCode: "M" },
              { reasoning: "Both can coexist and require different policy responses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Within-country inequality is internal; between-country inequality compares nations.",
            commonErrors: ["Using the terms interchangeably."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u2-dev-notes",
      title: "Development — notes",
      summary:
        "HDI, Gini measure development/inequality. Dependency theory explains underdevelopment.",
      sections: [
        {
          heading: "Key idea",
          body: "Development is multidimensional — not just income.",
        },
        {
          heading: "Inequality",
          body: "Spatial and income inequality persist despite global growth.",
        },
      ],
    },
  ],
};
