import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olec-u6-lesson-6-1",
  code: "6-1",
  title: "Economic Development",
  goal: "I CAN explain economic development and how it is measured.",
  standards: ["2281 6.1"],
  vocabulary: [
    { term: "Economic development", definition: "Improvement in living standards and economic well-being." },
    { term: "HDI", definition: "Human Development Index — combines income, education, health." },
    { term: "Developed country", definition: "High-income industrialised economy." },
    { term: "Developing country", definition: "Lower-income economy with less industrialisation." },
    { term: "Poverty", definition: "Living below minimum income needed for basic needs." },
    { term: "Absolute poverty", definition: "Cannot meet basic survival needs." },
    { term: "Relative poverty", definition: "Below the average standard of living in a society." },
  ],
  concepts: [
    {
      id: "olec-u6-development",
      title: "Measuring development",
      skill: "Explain development and HDI vs GDP per capita.",
      lesson: {
        sections: [
          { heading: "Development vs growth", body: "Growth = rising GDP. Development = broader improvement: health, education, living standards, reduced poverty. A country can grow without developing." },
          { heading: "HDI", body: "Human Development Index combines GDP per capita, life expectancy and education. More comprehensive than GDP alone — but still imperfect." },
          { heading: "Poverty", body: "Absolute poverty = below subsistence; relative poverty = below societal average. Development aims to reduce both." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country A has high GDP per capita but low life expectancy and education. Country B has lower GDP but better health/education. Which is more developed?",
          solution: "B — HDI captures broader development beyond income alone.",
        },
      },
      questions: [
        {
          id: "olec-u6-dev-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Economic development is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Improvement in living standards and well-being" },
            { id: "b", text: "Population increase" },
            { id: "c", text: "More exports" },
            { id: "d", text: "Only GDP growth" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Development", statement: "Broad improvement." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-dev-q2", difficulty: "core", totalMarks: 2,
          stem: "What three things does HDI combine?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "HDI", statement: "Components." }], steps: [
            { reasoning: "Income, life expectancy, education.", marks: 1, markCode: "AO1" },
            { reasoning: "All three.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Income (GDP per capita), health (life expectancy), education." },
        },
        {
          id: "olec-u6-dev-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why development is more than GDP growth.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Development", statement: "Beyond growth." }], steps: [
            { reasoning: "Includes health, education, living standards.", marks: 1, markCode: "AO2" },
            { reasoning: "GDP can rise while inequality/poverty persists.", marks: 1, markCode: "AO2" },
            { reasoning: "HDI captures broader picture.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Development includes health, education, equity — not just income." },
        },
        {
          id: "olec-u6-dev-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Development review.",
          parts: [
            { label: "a", prompt: "Development vs growth?", marks: 2 },
            { label: "b", prompt: "What is HDI?", marks: 1 },
            { label: "c", prompt: "HDI components?", marks: 2 },
            { label: "d", prompt: "Absolute vs relative poverty?", marks: 2 },
            { label: "e", prompt: "Why is GDP per capita imperfect for measuring development?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Development", statement: "Measures and concepts." },
          ], steps: [
            { part: "a", reasoning: "Growth=GDP; development=broader well-being.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Human Development Index.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Income, health, education.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "All three.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Absolute=survival; relative=below average.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Ignores inequality, health, education.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) growth/dev (b) HDI (c) components (d) poverty types (e) GDP limits" },
        },
        {
          id: "olec-u6-dev-q5", difficulty: "foundation", totalMarks: 1,
          stem: "HDI stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Health and Disease Index" },
            { id: "b", text: "Household Debt Indicator" },
            { id: "c", text: "Human Development Index" },
            { id: "d", text: "High Development Industry" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "HDI", statement: "Development measure." }], steps: [{ reasoning: "Correct expansion.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u6-dev-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A country has GDP of $400 billion and a population of 20 million. (a) What is GDP per capita in dollars? (b) If the population rises to 25 million while GDP stays at $400 billion, what is the new GDP per capita in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20000, unit: "dollars" },
            { label: "b", answer: 16000, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita", statement: "GDP / population." }], steps: [
            { part: "a", reasoning: "$400b / 20m = $20,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$400b / 25m = $16,000.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $20,000 (b) $16,000" },
        },
        {
          id: "olec-u6-dev-q7", difficulty: "core", totalMarks: 1,
          stem: "A country can have high GDP growth but still be underdeveloped because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Growth alone does not guarantee improvements in health, education and living standards" },
            { id: "b", text: "High growth means high HDI automatically" },
            { id: "c", text: "GDP growth always reduces poverty" },
            { id: "d", text: "Development only depends on population size" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Growth vs development", statement: "Broader than income." }], steps: [{ reasoning: "Growth measures output; development includes health, education and equity.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-dev-q8", difficulty: "core", totalMarks: 2,
          stem: "Explain why the HDI is considered a better measure of development than GDP per capita alone.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "HDI", statement: "Broader measure." }], steps: [
            { reasoning: "HDI combines income with health (life expectancy) and education.", marks: 1, markCode: "AO1" },
            { reasoning: "It therefore captures a wider picture of well-being than income alone.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "HDI includes income, health and education, giving a fuller picture of development." },
        },
        {
          id: "olec-u6-dev-q9", difficulty: "core", totalMarks: 3,
          stem: "Country A has GDP of $600 billion and population of 30 million. Country B has GDP of $500 billion and population of 20 million. (a) What is A's GDP per capita in dollars? (b) What is B's GDP per capita in dollars? (c) By how many dollars does B's GDP per capita exceed A's?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20000, unit: "dollars" },
            { label: "b", answer: 25000, unit: "dollars" },
            { label: "c", answer: 5000, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita comparison", statement: "GDP / population." }], steps: [
            { part: "a", reasoning: "$600b / 30m = $20,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$500b / 20m = $25,000.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$25,000 - $20,000 = $5,000.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $20,000 (b) $25,000 (c) $5,000" },
        },
        {
          id: "olec-u6-dev-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how low literacy can hinder economic development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Literacy barrier", statement: "Skills and productivity." }], steps: [
            { reasoning: "Low literacy limits the pool of skilled workers available to firms.", marks: 1, markCode: "AO2" },
            { reasoning: "Workers struggle to use modern technology, lowering productivity.", marks: 1, markCode: "AO2" },
            { reasoning: "Poor education restricts innovation and adaptation to new industries.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the mechanism.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Low literacy shrinks the skilled workforce and limits productivity and innovation." },
        },
        {
          id: "olec-u6-dev-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Absolute poverty is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Earning below the national average income" },
            { id: "b", text: "Living in a rural area" },
            { id: "c", text: "Having no access to television" },
            { id: "d", text: "Being unable to meet basic survival needs such as food, shelter and clothing" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Absolute poverty", statement: "Subsistence level." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u6-dev-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the use of GDP per capita as a measure of development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita evaluation", statement: "Strengths and limits." }], steps: [
            { reasoning: "Strength: it is simple, measurable and allows easy comparison between countries.", marks: 1, markCode: "AO2" },
            { reasoning: "Weakness: it is an average that ignores income inequality within a country.", marks: 1, markCode: "AO2" },
            { reasoning: "Weakness: it ignores health, education and other dimensions of well-being.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement — useful but incomplete.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "GDP per capita is easy to compare but ignores inequality and non-income factors — incomplete measure of development." },
        },
        {
          id: "olec-u6-dev-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A country has GDP of $800 billion and a population of 40 million. The population grows by 5% to 42 million while GDP stays at $800 billion. (a) What is GDP per capita initially in dollars? (b) What is GDP per capita after population growth in dollars? (c) By what percentage did GDP per capita fall?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20000, unit: "dollars" },
            { label: "b", answer: 19047.62, unit: "dollars", tolerance: 0.01 },
            { label: "c", answer: 4.76, unit: "%", tolerance: 0.01 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita and population", statement: "Population growth effect." }], steps: [
            { part: "a", reasoning: "$800b / 40m = $20,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$800b / 42m = $19,047.62.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "(20000 - 19047.62)/20000 x 100 = 4.76%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $20,000 (b) $19,047.62 (c) 4.76%" },
        },
        {
          id: "olec-u6-dev-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Relative poverty refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Living below the average standard of living in a society" },
            { id: "b", text: "Having no income at all" },
            { id: "c", text: "Living in a developing country" },
            { id: "d", text: "Being unable to afford food" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Relative poverty", statement: "Below societal average." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-dev-q15", difficulty: "core", totalMarks: 1,
          stem: "Economic development differs from economic growth because development…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Means population growth" },
            { id: "b", text: "Only measures GDP" },
            { id: "c", text: "Includes improvements in health, education and living standards, not just output" },
            { id: "d", text: "Only applies to rich countries" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Development", statement: "Broader than growth." }], steps: [{ reasoning: "Correct distinction.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u6-dev-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Development review.",
          parts: [
            { label: "a", prompt: "Distinguish economic growth from economic development.", marks: 2 },
            { label: "b", prompt: "Name the three components of the HDI.", marks: 2 },
            { label: "c", prompt: "Distinguish absolute from relative poverty.", marks: 2 },
            { label: "d", prompt: "Give one reason GDP per capita is an imperfect measure of development.", marks: 1 },
            { label: "e", prompt: "A country has GDP of $750 billion and population of 50 million. Calculate GDP per capita in dollars.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Development", statement: "Measures and concepts." },
          ], steps: [
            { part: "a", reasoning: "Growth = rising GDP; development = broader improvement in well-being.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Income, life expectancy, education.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "All three named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Absolute = below survival needs; relative = below societal average.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Ignores inequality, health and education.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "$750b / 50m = $15,000.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Correct method and answer.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) growth vs dev (b) HDI (c) poverty types (d) GDP limit (e) $15,000" },
        },
      ],
    },
    {
      id: "olec-u6-barriers",
      title: "Barriers to Development",
      skill: "Explain why some countries remain poor.",
      lesson: {
        sections: [
          { heading: "Economic barriers", body: "Low savings/investment, lack of capital, poor infrastructure, dependence on primary products (commodity prices volatile), debt burdens." },
          { heading: "Social barriers", body: "Low literacy, poor health/disease, gender inequality, cultural factors, population growth outpacing resources." },
          { heading: "Political barriers", body: "Corruption, unstable governments, conflict, weak institutions, colonial legacies." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A country relies on exporting coffee. Prices crash. What barrier is this?",
          solution: "Dependence on primary products — volatile commodity prices destabilise the economy.",
        },
      },
      questions: [
        {
          id: "olec-u6-bar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Dependence on primary products is a barrier because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They always rise" },
            { id: "b", text: "They create jobs" },
            { id: "c", text: "Commodity prices are volatile" },
            { id: "d", text: "They attract investment" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Primary dependence", statement: "Volatile prices." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u6-bar-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two social barriers to development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Social barriers", statement: "Factors." }], steps: [
            { reasoning: "Low literacy, poor health, gender inequality — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: low literacy, poor health, gender inequality, population pressure." },
        },
        {
          id: "olec-u6-bar-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how corruption hinders development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Corruption", statement: "Development barrier." }], steps: [
            { reasoning: "Diverts resources from public services.", marks: 1, markCode: "AO2" },
            { reasoning: "Discourages investment and aid.", marks: 1, markCode: "AO2" },
            { reasoning: "Weakens institutions and trust.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Corruption diverts resources, deters investment, weakens institutions." },
        },
        {
          id: "olec-u6-bar-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Barriers to development review.",
          parts: [
            { label: "a", prompt: "Two economic barriers?", marks: 2 },
            { label: "b", prompt: "Two social barriers?", marks: 2 },
            { label: "c", prompt: "Two political barriers?", marks: 2 },
            { label: "d", prompt: "Why is primary product dependence risky?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Barriers", statement: "Categories and causes." },
          ], steps: [
            { part: "a", reasoning: "Low investment, debt, infrastructure.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Literacy, health, gender inequality.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Corruption, conflict, weak institutions.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Volatile prices destabilise income.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Limits investment and growth.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) econ (b) social (c) political (d) primary risk" },
        },
        {
          id: "olec-u6-bar-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Low literacy is a barrier to development because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Raises investment automatically" },
            { id: "b", text: "Increases government revenue" },
            { id: "c", text: "Improves health outcomes" },
            { id: "d", text: "Limits the supply of skilled workers and productivity" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Literacy barrier", statement: "Skills constraint." }], steps: [{ reasoning: "Correct mechanism.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u6-bar-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A developing country has debt of $600 million and GDP of $4 billion. Annual debt repayments are $120 million. (a) What is the debt as a percentage of GDP? (b) What are annual repayments as a percentage of GDP?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 15, unit: "%" },
            { label: "b", answer: 3, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Debt burden", statement: "Debt and repayments vs GDP." }], steps: [
            { part: "a", reasoning: "0.6/4 x 100 = 15%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "0.12/4 x 100 = 3%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 15% (b) 3%" },
        },
        {
          id: "olec-u6-bar-q7", difficulty: "core", totalMarks: 1,
          stem: "Dependence on primary products is risky mainly because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Primary products always earn high prices" },
            { id: "b", text: "They cannot be exported" },
            { id: "c", text: "Commodity prices are volatile and can crash" },
            { id: "d", text: "They require no labour" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Primary dependence", statement: "Price volatility." }], steps: [{ reasoning: "Correct reason.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u6-bar-q8", difficulty: "core", totalMarks: 2,
          stem: "Name two economic barriers to development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Economic barriers", statement: "Factors." }], steps: [
            { reasoning: "Low savings and investment, lack of capital, poor infrastructure, debt.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: low investment, poor infrastructure, debt burdens, low savings." },
        },
        {
          id: "olec-u6-bar-q9", difficulty: "core", totalMarks: 3,
          stem: "A country exports 100 million kg of coffee at $2 per kg, earning $200 million. The world price falls to $1.50 per kg while the quantity exported stays at 100 million kg. (a) What is the new export revenue in millions of dollars? (b) What is the revenue loss in millions of dollars? (c) By what percentage did revenue fall?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 150, unit: "million dollars" },
            { label: "b", answer: 50, unit: "million dollars" },
            { label: "c", answer: 25, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Commodity price shock", statement: "Revenue = price x quantity." }], steps: [
            { part: "a", reasoning: "100m x $1.50 = $150m.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$200m - $150m = $50m.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "50/200 x 100 = 25%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $150m (b) $50m (c) 25%" },
        },
        {
          id: "olec-u6-bar-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how poor health and disease can hinder economic development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Health barrier", statement: "Productivity and costs." }], steps: [
            { reasoning: "Disease reduces workers' productivity and increases absenteeism.", marks: 1, markCode: "AO2" },
            { reasoning: "Governments must spend scarce funds on healthcare instead of investment.", marks: 1, markCode: "AO2" },
            { reasoning: "Poor health shortens working lives and limits human capital formation.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the mechanism.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Poor health lowers productivity and forces spending on healthcare rather than development investment." },
        },
        {
          id: "olec-u6-bar-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Corruption hinders development mainly by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Diverting public resources and deterring investment" },
            { id: "b", text: "Improving infrastructure" },
            { id: "c", text: "Raising export prices" },
            { id: "d", text: "Increasing literacy rates" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Corruption", statement: "Resource drain." }], steps: [{ reasoning: "Correct mechanism.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-bar-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how gender inequality can act as a barrier to economic development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Gender inequality", statement: "Underutilised resources." }], steps: [
            { reasoning: "If half the population is excluded from education and work, human capital is wasted.", marks: 1, markCode: "AO2" },
            { reasoning: "Lower female participation reduces the labour force and potential output.", marks: 1, markCode: "AO2" },
            { reasoning: "Unequal access to land and credit prevents productive investment by women.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Gender inequality wastes half the population's potential, shrinking labour supply and investment." },
        },
        {
          id: "olec-u6-bar-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A country's population is 10 million and growing at 3% per year while real GDP grows at 1% per year. (a) What is the population after one year in millions? (b) What is the population after two years in millions? (c) What happens to GDP per capita?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 10.3, unit: "million" },
            { label: "b", answer: 10.609, unit: "million" },
            { label: "c", answer: -1.94, unit: "%", tolerance: 0.01 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Population vs GDP growth", statement: "Per capita effect." }], steps: [
            { part: "a", reasoning: "10 x 1.03 = 10.3 million.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "10.3 x 1.03 = 10.609 million.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Per capita grows at approx (1.01/1.03 - 1) x 100 = -1.94%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 10.3m (b) 10.609m (c) falls about 1.94%" },
        },
        {
          id: "olec-u6-bar-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A 'poverty trap' refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A cycle where low income prevents the investment needed to escape poverty" },
            { id: "b", text: "A sudden fall in commodity prices" },
            { id: "c", text: "High population density in cities" },
            { id: "d", text: "A government program for the poor" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Poverty trap", statement: "Self-reinforcing poverty." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-bar-q15", difficulty: "core", totalMarks: 1,
          stem: "Armed conflict acts as a barrier to development because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increases export earnings" },
            { id: "b", text: "Destroys infrastructure and deters investment" },
            { id: "c", text: "Improves the rule of law" },
            { id: "d", text: "Raises literacy rates" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Conflict barrier", statement: "Destruction and uncertainty." }], steps: [{ reasoning: "Correct mechanism.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u6-bar-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Barriers to development review.",
          parts: [
            { label: "a", prompt: "Name two economic barriers to development.", marks: 2 },
            { label: "b", prompt: "Name two social barriers to development.", marks: 2 },
            { label: "c", prompt: "Name two political barriers to development.", marks: 2 },
            { label: "d", prompt: "Explain why dependence on primary products is risky.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Barriers", statement: "Categories and causes." },
          ], steps: [
            { part: "a", reasoning: "Low investment/savings, poor infrastructure, debt.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Low literacy, poor health, gender inequality.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Corruption, conflict, weak institutions.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Commodity prices are volatile.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Price crashes destabilise export earnings and investment.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) econ (b) social (c) political (d) primary risk" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u6-6-1-notes", title: "Development — notes", summary: "Measuring development and barriers.",
      sections: [
        { heading: "Development", body: "Broader than GDP — HDI combines income, health, education. Poverty: absolute vs relative." },
        { heading: "Barriers", body: "Economic (investment, debt), social (health, literacy), political (corruption, conflict)." },
      ] },
  ],
};
