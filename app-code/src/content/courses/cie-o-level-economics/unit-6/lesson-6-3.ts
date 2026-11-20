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
            { id: "a", text: "They encourage investment" }, { id: "b", text: "They raise taxes" }, { id: "c", text: "They reduce trade" }, { id: "d", text: "They create debt" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Health, education and living standards" }, { id: "b", text: "Only GDP" }, { id: "c", text: "Only exports" }, { id: "d", text: "Population growth" },
          ], correctChoiceId: "a" },
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
