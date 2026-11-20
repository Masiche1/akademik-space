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
            { id: "a", text: "Improvement in living standards and well-being" }, { id: "b", text: "Only GDP growth" }, { id: "c", text: "Population increase" }, { id: "d", text: "More exports" },
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
            { id: "a", text: "Commodity prices are volatile" }, { id: "b", text: "They always rise" }, { id: "c", text: "They create jobs" }, { id: "d", text: "They attract investment" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Primary dependence", statement: "Volatile prices." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
