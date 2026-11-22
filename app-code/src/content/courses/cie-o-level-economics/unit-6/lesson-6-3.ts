import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olec-u6-lesson-6-3",
  code: "6-3",
  title: "Role of Government and Institutions",
  goal: "I CAN explain the role of government and institutions in development.",
  standards: ["2281 6.3"],
  vocabulary: [
    { term: "Institution", definition: "Organised structure governing behaviour (legal, political, social)." },
    { term: "Property rights", definition: "Legal ownership of assets — essential for investment." },
    { term: "Rule of law", definition: "All subject to law — predictable, fair enforcement." },
    { term: "Governance", definition: "Quality of government decision-making and institutions." },
    { term: "Public goods", definition: "Goods available to all (roads, education, health)." },
    { term: "Market failure", definition: "Inefficient allocation of resources by markets." },
  ],
  concepts: [
    {
      id: "olec-u6-institutions",
      title: "Institutions and development",
      skill: "Explain how institutions enable or hinder development.",
      lesson: {
        sections: [
          { heading: "Institutions matter", body: "Strong institutions (property rights, rule of law, stable government) enable investment and growth. Weak/corrupt institutions deter development." },
          { heading: "Government's role", body: "Provide public goods (roads, schools, health), correct market failures, redistribute income, maintain stability." },
          { heading: "Market failure", body: "Markets fail to provide public goods, control externalities (pollution), or address inequality. Government intervention needed." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A country has no property rights and frequent expropriation. What happens to investment?",
          solution: "Investment falls — investors fear losing assets; development is hindered.",
        },
      },
      questions: [
        {
          id: "olec-u6-inst-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Property rights are important because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They create debt" },
            { id: "b", text: "They encourage investment" },
            { id: "c", text: "They reduce trade" },
            { id: "d", text: "They raise taxes" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Property rights", statement: "Enable investment." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-inst-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two public goods provided by government.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Public goods", statement: "Examples." }], steps: [
            { reasoning: "Roads, education, health, defence — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: roads, education, health services, defence." },
        },
        {
          id: "olec-u6-inst-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain market failure with an example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Market failure", statement: "Inefficiency." }], steps: [
            { reasoning: "Markets fail to provide public goods or control externalities.", marks: 1, markCode: "AO2" },
            { reasoning: "Example: pollution — firms don't pay full social cost.", marks: 1, markCode: "AO2" },
            { reasoning: "Government intervention needed.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Markets underprovide public goods/ignore externalities like pollution — government intervenes." },
        },
        {
          id: "olec-u6-inst-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Institutions review.",
          parts: [
            { label: "a", prompt: "Define institutions.", marks: 1 },
            { label: "b", prompt: "Why do property rights matter?", marks: 2 },
            { label: "c", prompt: "What is the rule of law?", marks: 1 },
            { label: "d", prompt: "Two public goods?", marks: 2 },
            { label: "e", prompt: "Explain market failure with example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Institutions", statement: "Role in development." },
          ], steps: [
            { part: "a", reasoning: "Organised structures governing behaviour.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Encourage investment; secure ownership.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Without them, development fails.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "All subject to law — fair enforcement.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Roads, education, health.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Markets fail on public goods/externalities.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Example: pollution or education underprovided.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) property rights (c) rule of law (d) public goods (e) market failure" },
        },
        {
          id: "olec-u6-inst-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The rule of law means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Courts always favour the state" },
            { id: "b", text: "Laws never change" },
            { id: "c", text: "All people are subject to the law with fair and predictable enforcement" },
            { id: "d", text: "Only the government is bound by laws" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Rule of law", statement: "Equal enforcement." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-inst-q6", difficulty: "foundation", totalMarks: 3,
          stem: "A government spends $50 million on roads, $30 million on health services and $120 million on other spending out of a total budget of $200 million. (a) What percentage of the budget goes to roads? (b) What percentage goes to health? (c) What percentage goes to roads and health combined?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 25, unit: "%" },
            { label: "b", answer: 15, unit: "%" },
            { label: "c", answer: 40, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Public spending", statement: "Share of budget." }], steps: [
            { part: "a", reasoning: "50/200 x 100 = 25%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "30/200 x 100 = 15%.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "(50 + 30)/200 x 100 = 40%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 25% (b) 15% (c) 40%" },
        },
        {
          id: "olec-u6-inst-q7", difficulty: "core", totalMarks: 1,
          stem: "Strong property rights encourage development by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Raising taxes on businesses" },
            { id: "b", text: "Reducing the rule of law" },
            { id: "c", text: "Nationalising land" },
            { id: "d", text: "Giving investors security that their assets will not be seized" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Property rights", statement: "Investment security." }], steps: [{ reasoning: "Correct mechanism.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-inst-q8", difficulty: "core", totalMarks: 2,
          stem: "Name two examples of market failure.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Market failure", statement: "Examples." }], steps: [
            { reasoning: "Underprovision of public goods such as education or defence.", marks: 1, markCode: "AO1" },
            { reasoning: "Negative externalities such as pollution.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: public goods underprovided, pollution, monopoly power, inequality." },
        },
        {
          id: "olec-u6-inst-q9", difficulty: "core", totalMarks: 3,
          stem: "A factory produces goods at a private cost of $8 per unit, but causes $4 per unit of pollution damage. It produces 1 million units. (a) What is the external cost per unit in dollars? (b) What is the total external cost in dollars? (c) What is the full social cost per unit in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 4, unit: "dollars" },
            { label: "b", answer: 4000000, unit: "dollars" },
            { label: "c", answer: 12, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Externalities", statement: "Social vs private cost." }], steps: [
            { part: "a", reasoning: "Social cost $12 - private cost $8 = $4.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$4 x 1,000,000 = $4,000,000.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$8 + $4 = $12 per unit.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $4 (b) $4,000,000 (c) $12" },
        },
        {
          id: "olec-u6-inst-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how weak institutions can deter foreign direct investment.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Weak institutions", statement: "Investment deterrence." }], steps: [
            { reasoning: "Without secure property rights, investors fear assets will be seized.", marks: 1, markCode: "AO2" },
            { reasoning: "Corruption raises costs and creates uncertainty about rules.", marks: 1, markCode: "AO2" },
            { reasoning: "Political instability and weak contract enforcement raise risk premiums.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Weak property rights, corruption and instability raise the risk of investing, deterring FDI." },
        },
        {
          id: "olec-u6-inst-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Governance refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The quality of government decision-making and institutions" },
            { id: "b", text: "The level of taxation" },
            { id: "c", text: "The number of political parties" },
            { id: "d", text: "The size of the civil service" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Governance", statement: "Quality of institutions." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-inst-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why markets tend to underprovide public goods such as education.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Public goods", statement: "Free-rider problem." }], steps: [
            { reasoning: "Public goods are non-excludable — people can benefit without paying.", marks: 1, markCode: "AO2" },
            { reasoning: "They are also non-rival — one person's use does not reduce another's.", marks: 1, markCode: "AO2" },
            { reasoning: "The free-rider problem means private firms cannot charge users, so supply is underprovided.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Non-excludability and non-rivalry create free-riding, so markets underprovide public goods — government must step in." },
        },
        {
          id: "olec-u6-inst-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A country with GDP of $50 billion spends 2% of GDP on education and 3% of GDP on health. (a) How much is spent on education in billions of dollars? (b) How much is spent on health in billions of dollars? (c) What is total social spending in billions of dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1, unit: "billion dollars" },
            { label: "b", answer: 1.5, unit: "billion dollars" },
            { label: "c", answer: 2.5, unit: "billion dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Social spending", statement: "Percentage of GDP." }], steps: [
            { part: "a", reasoning: "2% of $50b = $1b.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "3% of $50b = $1.5b.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "$1b + $1.5b = $2.5b.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $1b (b) $1.5b (c) $2.5b" },
        },
        {
          id: "olec-u6-inst-q14", difficulty: "challenge", totalMarks: 1,
          stem: "A possible consequence of weak property rights is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Greater political stability" },
            { id: "b", text: "Reduced investment and slower economic growth" },
            { id: "c", text: "Increased savings" },
            { id: "d", text: "Higher foreign investment" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Weak property rights", statement: "Investment effect." }], steps: [{ reasoning: "Investors fear losing assets, so investment falls.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-inst-q15", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is an example of government correcting market failure?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Removing all regulations" },
            { id: "b", text: "Privatising defence" },
            { id: "c", text: "Providing public goods such as roads and schools" },
            { id: "d", text: "Letting markets set all prices" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Government role", statement: "Market failure correction." }], steps: [{ reasoning: "Correct example.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-inst-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Institutions review.",
          parts: [
            { label: "a", prompt: "Define institutions.", marks: 1 },
            { label: "b", prompt: "Explain why property rights matter for development.", marks: 2 },
            { label: "c", prompt: "What is the rule of law?", marks: 1 },
            { label: "d", prompt: "Name two public goods provided by government.", marks: 2 },
            { label: "e", prompt: "Explain market failure with an example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Institutions", statement: "Role in development." },
          ], steps: [
            { part: "a", reasoning: "Organised structures governing behaviour.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Secure ownership encourages investment and saving.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Without them development is hindered.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "All people subject to law — fair enforcement.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Roads, education, health, defence.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Markets fail to provide public goods or control externalities.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Example: pollution — firms ignore social costs.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) property rights (c) rule of law (d) public goods (e) market failure" },
        },
      ],
    },
    {
      id: "olec-u6-conclusion",
      title: "Development Economics Summary",
      skill: "Synthesize development concepts for exam application.",
      lesson: {
        sections: [
          { heading: "Key concepts", body: "Development = broader than growth (HDI). Barriers = economic, social, political. Strategies = import substitution, export-led, microfinance, fair trade. Institutions = property rights, rule of law, public goods." },
          { heading: "Exam approach", body: "For development questions: identify the concept (growth vs development, barrier vs strategy), explain mechanism, evaluate with example. Always link back to living standards." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "'Evaluate the role of MNCs in promoting development.' Approach?",
          solution: "Define MNCs → benefits (investment, jobs, technology) → criticisms (repatriation, exploitation) → balanced judgement with example.",
        },
      },
      questions: [
        {
          id: "olec-u6-sum-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Development differs from growth because it includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Population growth" },
            { id: "b", text: "Only GDP" },
            { id: "c", text: "Only exports" },
            { id: "d", text: "Health, education and living standards" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Development", statement: "Broader than growth." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-sum-q2", difficulty: "core", totalMarks: 2,
          stem: "List the three categories of development barriers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Barriers", statement: "Categories." }], steps: [
            { reasoning: "Economic, social, political.", marks: 1, markCode: "AO1" },
            { reasoning: "All three.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Economic, social, political." },
        },
        {
          id: "olec-u6-sum-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how weak institutions hinder development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Institutions", statement: "Development link." }], steps: [
            { reasoning: "No property rights → no investment.", marks: 1, markCode: "AO2" },
            { reasoning: "Corruption → resources diverted.", marks: 1, markCode: "AO2" },
            { reasoning: "Instability → uncertainty deters growth.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Weak institutions deter investment, divert resources, create uncertainty." },
        },
        {
          id: "olec-u6-sum-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Development economics summary review.",
          parts: [
            { label: "a", prompt: "Development vs growth?", marks: 2 },
            { label: "b", prompt: "HDI components?", marks: 2 },
            { label: "c", prompt: "Three barrier categories?", marks: 1 },
            { label: "d", prompt: "Two development strategies?", marks: 2 },
            { label: "e", prompt: "Why do institutions matter?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Development summary", statement: "All key concepts." },
          ], steps: [
            { part: "a", reasoning: "Growth=GDP; development=broader well-being.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Income, health, education.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "All three.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Economic, social, political.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Import substitution, export-led, microfinance.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Property rights, rule of law enable investment.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) dev vs growth (b) HDI (c) barriers (d) strategies (e) institutions" },
        },
        {
          id: "olec-u6-sum-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which indicator best captures overall economic development?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The exchange rate" },
            { id: "b", text: "The unemployment rate alone" },
            { id: "c", text: "The Human Development Index (HDI)" },
            { id: "d", text: "The money supply" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "HDI", statement: "Composite development measure." }], steps: [{ reasoning: "HDI combines income, health and education.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-sum-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A country has GDP of $900 billion. (a) What is GDP per capita in dollars if the population is 60 million? (b) What is it if the population is 45 million?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 15000, unit: "dollars" },
            { label: "b", answer: 20000, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "GDP per capita", statement: "GDP / population." }], steps: [
            { part: "a", reasoning: "$900b / 60m = $15,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$900b / 45m = $20,000.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $15,000 (b) $20,000" },
        },
        {
          id: "olec-u6-sum-q7", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is a social barrier to development?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Weak infrastructure" },
            { id: "b", text: "High foreign debt" },
            { id: "c", text: "Low literacy and poor health" },
            { id: "d", text: "Corruption" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Social barriers", statement: "Health, education, gender." }], steps: [{ reasoning: "Correct category.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-sum-q8", difficulty: "core", totalMarks: 2,
          stem: "Name two strategies countries use to promote economic development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Development strategies", statement: "Approaches." }], steps: [
            { reasoning: "Import substitution, export-led growth, microfinance, fair trade.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: import substitution, export-led growth, microfinance, fair trade." },
        },
        {
          id: "olec-u6-sum-q9", difficulty: "core", totalMarks: 3,
          stem: "A country has debt of $1.5 billion, GDP of $15 billion, annual debt repayments of $450 million and receives $200 million in aid. (a) What is the debt as a percentage of GDP? (b) What are annual repayments as a percentage of GDP? (c) What is net debt service (repayments minus aid) as a percentage of GDP?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 10, unit: "%" },
            { label: "b", answer: 3, unit: "%" },
            { label: "c", answer: 1.67, unit: "%", tolerance: 0.01 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Debt burden", statement: "Debt service vs GDP." }], steps: [
            { part: "a", reasoning: "1.5/15 x 100 = 10%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "0.45/15 x 100 = 3%.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "(450 - 200)/15000 x 100 = 1.67%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 10% (b) 3% (c) 1.67%" },
        },
        {
          id: "olec-u6-sum-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how strong institutions support economic development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Institutions and development", statement: "Enabling environment." }], steps: [
            { reasoning: "Secure property rights and rule of law give investors confidence.", marks: 1, markCode: "AO2" },
            { reasoning: "Stable government reduces uncertainty and encourages long-term investment.", marks: 1, markCode: "AO2" },
            { reasoning: "Effective institutions deliver public goods and correct market failures.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Strong institutions secure property, provide stability and deliver public services — enabling investment and growth." },
        },
        {
          id: "olec-u6-sum-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is a political barrier to development?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Poor health" },
            { id: "b", text: "Corruption and political instability" },
            { id: "c", text: "Gender inequality" },
            { id: "d", text: "Low literacy" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Political barriers", statement: "Governance failures." }], steps: [{ reasoning: "Correct category.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-sum-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate the role of multinational corporations in promoting development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "MNCs evaluation", statement: "Benefits vs criticisms." }], steps: [
            { reasoning: "Benefit: MNCs bring investment, jobs, technology and export earnings.", marks: 1, markCode: "AO2" },
            { reasoning: "Benefit: they can upgrade local skills and supply chains.", marks: 1, markCode: "AO2" },
            { reasoning: "Criticism: profit repatriation, tax avoidance and exploitative labour reduce local gains.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement on net impact.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "MNCs bring investment and jobs but repatriate profits and may exploit labour — mixed impact on development." },
        },
        {
          id: "olec-u6-sum-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A country has exports of $700 million and imports of $900 million. A depreciation makes exports 10% more competitive, raising export revenue by 10% while imports are unchanged. (a) What is the initial trade balance in millions of dollars? (b) What is the trade balance after the rise in exports in millions of dollars? (c) By what percentage did the deficit shrink?",
          response: { type: "numeric", parts: [
            { label: "a", answer: -200, unit: "million dollars" },
            { label: "b", answer: -130, unit: "million dollars" },
            { label: "c", answer: 35, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Trade balance", statement: "Exports - imports." }], steps: [
            { part: "a", reasoning: "$700m - $900m = -$200m.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Exports $770m - $900m = -$130m.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "(200 - 130)/200 x 100 = 35%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) -$200m (b) -$130m (c) 35%" },
        },
        {
          id: "olec-u6-sum-q14", difficulty: "challenge", totalMarks: 1,
          stem: "In a development economics exam question, the strongest answers typically…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only list definitions" },
            { id: "b", text: "Link concepts to living standards and include evaluation" },
            { id: "c", text: "Ignore the question asked" },
            { id: "d", text: "Avoid using examples" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Exam technique", statement: "Application and evaluation." }], steps: [{ reasoning: "Correct approach.", marks: 1, markCode: "AO3" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-sum-q15", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is an example of an economic barrier to development?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Political instability" },
            { id: "b", text: "Gender inequality" },
            { id: "c", text: "Low literacy" },
            { id: "d", text: "High levels of foreign debt" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Economic barriers", statement: "Finance and resources." }], steps: [{ reasoning: "Correct category.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-sum-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Development economics summary review.",
          parts: [
            { label: "a", prompt: "Distinguish economic growth from economic development.", marks: 2 },
            { label: "b", prompt: "Name the three components of the HDI.", marks: 2 },
            { label: "c", prompt: "Name the three categories of development barriers with one example of each.", marks: 3 },
            { label: "d", prompt: "Name two institutions that are important for development.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Development summary", statement: "All key concepts." },
          ], steps: [
            { part: "a", reasoning: "Growth = rising GDP; development = broader well-being.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Income, health, education.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "All three named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Economic (debt), social (health), political (corruption).", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Categories correct with examples.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Property rights, rule of law, stable government.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) growth vs dev (b) HDI (c) barriers + examples (d) institutions" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u6-6-3-notes", title: "Institutions — notes", summary: "Role of government and institutions in development.",
      sections: [
        { heading: "Institutions", body: "Property rights, rule of law, stable government enable development; corruption/weakness hinder it." },
        { heading: "Government role", body: "Public goods, market failure correction, redistribution; market failure examples = pollution, education." },
      ] },
  ],
};
