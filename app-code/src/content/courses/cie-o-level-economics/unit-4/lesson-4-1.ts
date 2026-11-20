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
            { id: "a", text: "Total value of goods/services produced in a country" }, { id: "b", text: "Total population" }, { id: "c", text: "Government spending" }, { id: "d", text: "Exports only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "GDP", statement: "Total output value." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
            { id: "a", text: "Increase in real GDP over time" }, { id: "b", text: "Rising prices" }, { id: "c", text: "More unemployment" }, { id: "d", text: "Government spending" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Growth", statement: "Real GDP increase." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
