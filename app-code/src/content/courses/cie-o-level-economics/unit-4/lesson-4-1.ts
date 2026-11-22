import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olec-u4-lesson-4-1",
  code: "4-1",
  title: "National Income",
  goal: "I CAN explain national income measures and their importance.",
  standards: ["2281 4.1"],
  vocabulary: [
    { term: "National income", definition: "Total income earned by a country's residents." },
    { term: "Gross Domestic Product (GDP)", definition: "Total value of goods/services produced in a country." },
    { term: "Gross National Product (GNP)", definition: "GDP plus income from abroad minus income paid abroad." },
    { term: "GDP per capita", definition: "GDP divided by population — measures living standards." },
    { term: "Real GDP", definition: "GDP adjusted for inflation." },
    { term: "Nominal GDP", definition: "GDP at current prices." },
  ],
  concepts: [
    {
      id: "olec-u4-national",
      title: "Measuring national income",
      skill: "Understand GDP, GNP and GDP per capita.",
      lesson: {
        sections: [
          { heading: "GDP", body: "Total value of all final goods and services produced within a country's borders in a period. Three approaches: output, income, expenditure — all should give same result." },
          { heading: "GDP vs GNP", body: "GDP counts production within borders; GNP counts income of residents regardless of location. Difference = net income from abroad." },
          { heading: "GDP per capita", body: "GDP / population. Better measure of living standards than total GDP — a large poor country may have higher GDP but lower per capita than a small rich one." },
        ],
        keyFormulas: [
          { name: "GDP per capita", statement: "GDP / Population" },
          { name: "Real vs nominal", statement: "Real adjusts for inflation" },
        ],
        workedExample: {
          problem: "Country A: GDP $1 trillion, population 50 million. Country B: GDP $500 billion, population 10 million. Which has higher living standards?",
          solution: "A: $20,000 per capita. B: $50,000 per capita. B has higher living standards despite lower total GDP.",
        },
      },
      questions: [
        {
          id: "olec-u4-ni-q1", difficulty: "foundation", totalMarks: 1,
          stem: "GDP measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Government spending" },
            { id: "b", text: "Total population" },
            { id: "c", text: "Exports only" },
            { id: "d", text: "Total value of goods/services produced in a country" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "GDP", statement: "Total output value." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u4-ni-q2", difficulty: "core", totalMarks: 2,
          stem: "GDP $800 billion, population 40 million. GDP per capita?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita", statement: "GDP/pop." }], steps: [
            { reasoning: "$800b/40m = $20,000.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "$20,000" },
        },
        {
          id: "olec-u4-ni-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why GDP per capita is better than total GDP for comparing living standards.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita", statement: "Living standards." }], steps: [
            { reasoning: "Accounts for population size.", marks: 1, markCode: "AO2" },
            { reasoning: "Shows average income per person.", marks: 1, markCode: "AO2" },
            { reasoning: "Better comparison across countries.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Per capita accounts for population — shows average living standard." },
        },
        {
          id: "olec-u4-ni-q4", difficulty: "challenge", totalMarks: 9,
          stem: "National income review.",
          parts: [
            { label: "a", prompt: "Define GDP.", marks: 1 },
            { label: "b", prompt: "GDP vs GNP?", marks: 2 },
            { label: "c", prompt: "Define GDP per capita.", marks: 1 },
            { label: "d", prompt: "GDP $2T, pop 100m. Per capita?", marks: 1 },
            { label: "e", prompt: "Real vs nominal GDP?", marks: 2 },
            { label: "f", prompt: "Why is GDP per capita imperfect?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "National income", statement: "Measures and limitations." },
          ], steps: [
            { part: "a", reasoning: "Total output value.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "GDP=within borders; GNP=residents' income.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "GDP/population.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "$20,000.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Real=inflation-adjusted; nominal=current prices.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Ignores inequality, informal economy, non-market activities.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear limitations.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) GDP/GNP (c) per capita (d) 20000 (e) real/nominal (f) limitations" },
        },
        {
          id: "olec-u4-ni-q5", difficulty: "foundation", totalMarks: 1,
          stem: "GDP per capita is calculated by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Population divided by GDP" },
            { id: "b", text: "GDP divided by population" },
            { id: "c", text: "GNP minus GDP" },
            { id: "d", text: "GDP multiplied by population" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "GDP per capita", statement: "GDP / population." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-ni-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Country X has GDP of $500 billion and a population of 25 million. GDP rises to $550 billion while population stays the same. (a) What is GDP per capita initially? (b) What is GDP per capita after the rise?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20000, unit: "dollars" },
            { label: "b", answer: 22000, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita", statement: "GDP / population." }], steps: [
            { part: "a", reasoning: "$500b / 25m = $20,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$550b / 25m = $22,000.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $20,000 (b) $22,000" },
        },
        {
          id: "olec-u4-ni-q7", difficulty: "core", totalMarks: 1,
          stem: "Real GDP differs from nominal GDP because real GDP…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Excludes government spending" },
            { id: "b", text: "Is adjusted for inflation" },
            { id: "c", text: "Includes only exports" },
            { id: "d", text: "Is measured at current prices" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Real vs nominal GDP", statement: "Inflation adjustment." }], steps: [{ reasoning: "Real GDP removes price changes.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-ni-q8", difficulty: "core", totalMarks: 3,
          stem: "GDP is $1 trillion and grows by 4%. Population is 50 million. (a) What is the increase in GDP in billions of dollars? (b) What is the new GDP in billions of dollars? (c) What is the new GDP per capita in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 40, unit: "billion dollars" },
            { label: "b", answer: 1040, unit: "billion dollars" },
            { label: "c", answer: 20800, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "GDP and growth", statement: "Growth and per capita." }], steps: [
            { part: "a", reasoning: "4% of $1,000b = $40b increase.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$1,000b + $40b = $1,040b.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$1,040b / 50m = $20,800.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $40b (b) $1,040b (c) $20,800" },
        },
        {
          id: "olec-u4-ni-q9", difficulty: "core", totalMarks: 2,
          stem: "Distinguish between GDP and GNP.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "GDP vs GNP", statement: "Location vs residence." }], steps: [
            { reasoning: "GDP measures output produced within a country's borders.", marks: 1, markCode: "AO1" },
            { reasoning: "GNP measures income of a country's residents, including net income from abroad.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "GDP = output within borders; GNP = residents' income including net income from abroad." },
        },
        {
          id: "olec-u4-ni-q10", difficulty: "core", totalMarks: 3,
          stem: "A country has GDP of $800 billion, net income from abroad of $20 billion and a population of 40 million. (a) What is its GNP in billions of dollars? (b) What is GNP per capita in dollars? (c) What is GDP per capita in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 820, unit: "billion dollars" },
            { label: "b", answer: 20500, unit: "dollars" },
            { label: "c", answer: 20000, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "GNP", statement: "GDP plus net income from abroad." }], steps: [
            { part: "a", reasoning: "GNP = $800b + $20b = $820b.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$820b / 40m = $20,500.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$800b / 40m = $20,000.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $820b (b) $20,500 (c) $20,000" },
        },
        {
          id: "olec-u4-ni-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two limitations of using GDP per capita to compare living standards between countries.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita limits", statement: "What it misses." }], steps: [
            { reasoning: "It is an average — ignores how income is distributed (inequality).", marks: 1, markCode: "AO2" },
            { reasoning: "It ignores non-market activities, informal economy and quality of life factors like health and education.", marks: 1, markCode: "AO2" },
            { reasoning: "Does not account for cost of living differences between countries.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of at least two limitations.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "GDP per capita is an average that ignores inequality and non-income factors such as health, education and the cost of living." },
        },
        {
          id: "olec-u4-ni-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Country A has GDP of $2 trillion and population of 100 million. Country B has GDP of $600 billion and population of 20 million. (a) What is A's GDP per capita in dollars? (b) What is B's GDP per capita in dollars? (c) By how many dollars does B's per capita exceed A's? (d) What is B's per capita as a multiple of A's?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 20000, unit: "dollars" },
            { label: "b", answer: 30000, unit: "dollars" },
            { label: "c", answer: 10000, unit: "dollars" },
            { label: "d", answer: 1.5 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita", statement: "Comparing countries." }], steps: [
            { part: "a", reasoning: "$2,000b / 100m = $20,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$600b / 20m = $30,000.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$30,000 - $20,000 = $10,000.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "$30,000 / $20,000 = 1.5.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $20,000 (b) $30,000 (c) $10,000 (d) 1.5" },
        },
        {
          id: "olec-u4-ni-q13", difficulty: "challenge", totalMarks: 5,
          stem: "Evaluate the use of GDP as a measure of a country's economic performance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "GDP evaluation", statement: "Strengths and weaknesses." }], steps: [
            { reasoning: "GDP is widely used because it is measurable and comparable across countries.", marks: 1, markCode: "AO2" },
            { reasoning: "It captures total output and income in an economy.", marks: 1, markCode: "AO1" },
            { reasoning: "Weakness: ignores inequality — growth may benefit only a few.", marks: 1, markCode: "AO2" },
            { reasoning: "Weakness: ignores non-market activity, environmental costs and quality of life.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement — useful but incomplete measure.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "GDP is measurable and comparable but ignores distribution, non-market activity and environmental/social costs — a useful but incomplete measure." },
        },
        {
          id: "olec-u4-ni-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is NOT included in GDP?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Services provided by the government" },
            { id: "b", text: "Goods produced by domestic firms" },
            { id: "c", text: "Exports of manufactured goods" },
            { id: "d", text: "Transfer payments such as unemployment benefits" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "GDP scope", statement: "Final output only." }], steps: [{ reasoning: "Transfer payments are not payment for production.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u4-ni-q15", difficulty: "foundation", totalMarks: 1,
          stem: "GNP equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "GDP minus exports" },
            { id: "b", text: "GDP plus government spending" },
            { id: "c", text: "GDP divided by population" },
            { id: "d", text: "GDP plus net income from abroad" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "GNP", statement: "GDP + net income from abroad." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u4-ni-q16", difficulty: "challenge", totalMarks: 9,
          stem: "National income review.",
          parts: [
            { label: "a", prompt: "Define real GDP.", marks: 1 },
            { label: "b", prompt: "Why is nominal GDP misleading when prices are rising?", marks: 2 },
            { label: "c", prompt: "GDP is $1.5 trillion and population is 60 million. Calculate GDP per capita.", marks: 1 },
            { label: "d", prompt: "Give two limitations of GDP per capita.", marks: 2 },
            { label: "e", prompt: "Explain why a small rich country may have higher living standards than a large poor country.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "National income", statement: "Measures and evaluation." },
          ], steps: [
            { part: "a", reasoning: "GDP adjusted for inflation.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Nominal GDP rises with prices even if output is unchanged.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Overstates real growth.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$1,500b / 60m = $25,000.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Ignores inequality and non-income factors (health, education).", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two limitations named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "GDP per capita accounts for population size.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Shows average income per person.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) real GDP def (b) nominal misleading (c) 25000 (d) 2 limits (e) per capita comparison" },
        },
      ],
    },
    {
      id: "olec-u4-growth",
      title: "Economic Growth",
      skill: "Explain economic growth, its causes and measurement.",
      lesson: {
        sections: [
          { heading: "What is growth?", body: "Increase in real GDP over time — more goods and services produced. Measured by GDP growth rate." },
          { heading: "Causes", body: "Investment in capital, technological progress, education/training, improved productivity, favourable institutions." },
          { heading: "Benefits and costs", body: "Benefits: higher living standards, more jobs, better services. Costs: environmental damage, inequality, resource depletion." },
        ],
        keyFormulas: [
          { name: "Growth rate", statement: "(Current GDP - Previous GDP) / Previous GDP × 100" },
        ],
        workedExample: {
          problem: "GDP grows from $100 billion to $105 billion. Growth rate?",
          solution: "Growth = (105-100)/100 × 100 = 5%.",
        },
      },
      questions: [
        {
          id: "olec-u4-eg-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Economic growth is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "More unemployment" },
            { id: "b", text: "Rising prices" },
            { id: "c", text: "Government spending" },
            { id: "d", text: "Increase in real GDP over time" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Growth", statement: "Real GDP increase." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u4-eg-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two causes of economic growth.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Growth causes", statement: "Drivers." }], steps: [
            { reasoning: "Investment, technology, education, productivity — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: investment, technology, education, productivity." },
        },
        {
          id: "olec-u4-eg-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one benefit and one cost of economic growth.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Growth trade-offs", statement: "Pros and cons." }], steps: [
            { reasoning: "Benefit: higher living standards/more jobs.", marks: 1, markCode: "AO2" },
            { reasoning: "Cost: environmental damage/inequality.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Growth raises living standards but may damage environment or worsen inequality." },
        },
        {
          id: "olec-u4-eg-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Economic growth review.",
          parts: [
            { label: "a", prompt: "Define economic growth.", marks: 1 },
            { label: "b", prompt: "How is it measured?", marks: 2 },
            { label: "c", prompt: "Name three causes.", marks: 2 },
            { label: "d", prompt: "Two benefits?", marks: 2 },
            { label: "e", prompt: "Two costs?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Growth", statement: "Definition, causes, trade-offs." },
          ], steps: [
            { part: "a", reasoning: "Increase in real GDP.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "GDP growth rate.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Clear measure.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Investment, technology, education.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Three named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Higher living standards, more jobs.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Environmental damage, inequality.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two costs.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) def (b) GDP rate (c) 3 causes (d) 2 benefits (e) 2 costs" },
        },
        {
          id: "olec-u4-eg-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The main measure of economic growth is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The growth in population" },
            { id: "b", text: "The rise in the price level" },
            { id: "c", text: "The increase in government spending" },
            { id: "d", text: "The increase in real GDP over time" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Growth measure", statement: "Real GDP." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u4-eg-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A country's GDP rises from $200 billion to $210 billion in one year. (a) What is the absolute increase in GDP in billions of dollars? (b) What is the growth rate in percent?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 10, unit: "billion dollars" },
            { label: "b", answer: 5, unit: "percent" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Growth rate", statement: "(Current - Previous) / Previous x 100." }], steps: [
            { part: "a", reasoning: "$210b - $200b = $10b.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "10/200 x 100 = 5%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $10b (b) 5%" },
        },
        {
          id: "olec-u4-eg-q7", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is most likely to cause economic growth?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fall in investment" },
            { id: "b", text: "Investment in education and training" },
            { id: "c", text: "A reduction in the labour force" },
            { id: "d", text: "A decrease in productivity" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Growth causes", statement: "Human capital." }], steps: [{ reasoning: "Education raises productivity and output.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-eg-q8", difficulty: "core", totalMarks: 3,
          stem: "GDP is $400 billion and grows by 2.5%. Population is 20 million. (a) What is the increase in GDP in billions of dollars? (b) What is the new GDP in billions of dollars? (c) What is the new GDP per capita in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 10, unit: "billion dollars" },
            { label: "b", answer: 410, unit: "billion dollars" },
            { label: "c", answer: 20500, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Growth calculation", statement: "Apply growth rate." }], steps: [
            { part: "a", reasoning: "2.5% of $400b = $10b.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$400b + $10b = $410b.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$410b / 20m = $20,500.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $10b (b) $410b (c) $20,500" },
        },
        {
          id: "olec-u4-eg-q9", difficulty: "core", totalMarks: 2,
          stem: "Name two benefits of economic growth.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Growth benefits", statement: "Advantages." }], steps: [
            { reasoning: "Higher living standards, more jobs, better public services — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: higher living standards, more jobs, better services, higher incomes." },
        },
        {
          id: "olec-u4-eg-q10", difficulty: "core", totalMarks: 3,
          stem: "GDP is $100 billion. It grows by 4% in year one and then by 2% in year two. (a) What is GDP at the end of year one in billions of dollars? (b) What is GDP at the end of year two in billions of dollars? (c) What is the total percentage growth over the two years?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 104, unit: "billion dollars" },
            { label: "b", answer: 106.08, unit: "billion dollars" },
            { label: "c", answer: 6.08, unit: "percent" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Compounding growth", statement: "Successive growth rates." }], steps: [
            { part: "a", reasoning: "$100b x 1.04 = $104b.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$104b x 1.02 = $106.08b.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "(106.08 - 100)/100 x 100 = 6.08%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $104b (b) $106.08b (c) 6.08%" },
        },
        {
          id: "olec-u4-eg-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how investment in education and training can cause economic growth.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Human capital", statement: "Growth driver." }], steps: [
            { reasoning: "Education improves workers' skills and productivity.", marks: 1, markCode: "AO2" },
            { reasoning: "Higher productivity means more output from the same resources.", marks: 1, markCode: "AO2" },
            { reasoning: "Better-skilled workers support innovation and new industries.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the mechanism.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Education raises skills and productivity, increasing output and enabling innovation." },
        },
        {
          id: "olec-u4-eg-q12", difficulty: "challenge", totalMarks: 4,
          stem: "GDP is $500 billion and grows by 3%. Population is 25 million. (a) What is the increase in GDP in billions of dollars? (b) What is the new GDP in billions of dollars? (c) What is the new GDP per capita in dollars? (d) What is the percentage growth in GDP per capita?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 15, unit: "billion dollars" },
            { label: "b", answer: 515, unit: "billion dollars" },
            { label: "c", answer: 20600, unit: "dollars" },
            { label: "d", answer: 3, unit: "percent" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Per capita growth", statement: "Growth with fixed population." }], steps: [
            { part: "a", reasoning: "3% of $500b = $15b.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$500b + $15b = $515b.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$515b / 25m = $20,600.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Per capita rises from $20,000 to $20,600 = 3%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $15b (b) $515b (c) $20,600 (d) 3%" },
        },
        {
          id: "olec-u4-eg-q13", difficulty: "challenge", totalMarks: 5,
          stem: "Discuss whether economic growth always improves living standards.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Growth evaluation", statement: "Benefits vs costs." }], steps: [
            { reasoning: "Growth can raise incomes, create jobs and fund better services.", marks: 1, markCode: "AO2" },
            { reasoning: "But benefits may be unevenly distributed — inequality can rise.", marks: 1, markCode: "AO2" },
            { reasoning: "Growth may cause environmental damage and resource depletion.", marks: 1, markCode: "AO2" },
            { reasoning: "Some growth (e.g. pollution) can reduce quality of life.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement — growth helps but is not sufficient alone.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Growth often raises living standards but benefits may be uneven and environmental/social costs can offset gains." },
        },
        {
          id: "olec-u4-eg-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Economic growth is most accurately measured by the change in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nominal GDP" },
            { id: "b", text: "Government revenue" },
            { id: "c", text: "Real GDP" },
            { id: "d", text: "The price level" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Growth measure", statement: "Real GDP." }], steps: [{ reasoning: "Real GDP removes inflation effects.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u4-eg-q15", difficulty: "foundation", totalMarks: 1,
          stem: "A clear benefit of economic growth is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Falling investment" },
            { id: "b", text: "Higher average incomes and living standards" },
            { id: "c", text: "Rising unemployment" },
            { id: "d", text: "Lower output" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Growth benefit", statement: "Living standards." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-eg-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Economic growth review.",
          parts: [
            { label: "a", prompt: "Define economic growth.", marks: 1 },
            { label: "b", prompt: "Write the formula for the growth rate.", marks: 1 },
            { label: "c", prompt: "GDP rises from $250 billion to $260 billion. Calculate the growth rate.", marks: 2 },
            { label: "d", prompt: "Explain two causes of economic growth.", marks: 2 },
            { label: "e", prompt: "Explain one benefit and one cost of growth.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Growth", statement: "Definition, calculation, evaluation." },
          ], steps: [
            { part: "a", reasoning: "Increase in real GDP over time.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "(Current - Previous)/Previous x 100.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "(260-250)/250 x 100 = 4%.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct calculation shown.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Investment and technology/education named.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two causes explained.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Benefit: higher living standards/more jobs.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Cost: environmental damage/inequality.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear evaluation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) formula (c) 4% (d) 2 causes (e) benefit+cost" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u4-4-1-notes", title: "Macroeconomics — notes", summary: "National income and economic growth.",
      sections: [
        { heading: "National income", body: "GDP = total output; GDP per capita = living standards; real vs nominal." },
        { heading: "Growth", body: "Real GDP increase; caused by investment, technology, education; benefits vs environmental/social costs." },
      ] },
  ],
};
