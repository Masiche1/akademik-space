import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olbus-u6-lesson-6-1",
  code: "6-1",
  title: "Economic Influences",
  goal: "I CAN explain how economic factors affect business activity.",
  standards: ["7100 6.1"],
  vocabulary: [
    { term: "Inflation", definition: "General rise in prices over time." },
    { term: "Interest rate", definition: "Cost of borrowing money, set by central bank." },
    { term: "Exchange rate", definition: "Value of one currency relative to another." },
    { term: "Recession", definition: "Period of economic decline with falling output and jobs." },
    { term: "Economic growth", definition: "Increase in a country's output and income." },
    { term: "Business cycle", definition: "Fluctuations between growth and recession." },
  ],
  concepts: [
    {
      id: "olbus-u6-economic",
      title: "Economic factors",
      skill: "Explain how inflation, interest rates and exchange rates affect business.",
      lesson: {
        sections: [
          { heading: "Inflation", body: "Rising prices erode purchasing power. Businesses face higher costs (wages, materials) and may need to raise prices — can reduce demand." },
          { heading: "Interest rates", body: "Higher rates increase borrowing costs and reduce consumer spending — hurts businesses with loans and those selling big-ticket items. Lower rates stimulate spending." },
          { heading: "Exchange rates", body: "Strong currency makes imports cheaper but exports more expensive. Weak currency does the opposite. Affects businesses trading internationally." },
          { heading: "Business cycle", body: "Growth phase: rising demand, hiring, investment. Recession: falling demand, layoffs, closures. Businesses must adapt." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Interest rates rise sharply. How does this affect a car dealership?",
          solution: "Car loans become more expensive, reducing demand for cars; the dealership may see fewer sales.",
        },
      },
      questions: [
        {
          id: "olbus-u6-ec-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Inflation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "General rise in prices" }, { id: "b", text: "Falling prices" }, { id: "c", text: "Economic growth" }, { id: "d", text: "Higher wages" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Inflation", statement: "Rising prices." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-ec-q2", difficulty: "core", totalMarks: 2,
          stem: "How do higher interest rates affect a business with a bank loan?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Interest rates", statement: "Borrowing cost." }], steps: [
            { reasoning: "Higher interest payments increase costs.", marks: 1, markCode: "AO2" },
            { reasoning: "Reduces profit.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Higher interest payments increase costs and reduce profit." },
        },
        {
          id: "olbus-u6-ec-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a strong currency affects an exporting business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rates", statement: "Export impact." }], steps: [
            { reasoning: "Exports become more expensive for foreign buyers.", marks: 1, markCode: "AO2" },
            { reasoning: "Demand for exports may fall.", marks: 1, markCode: "AO2" },
            { reasoning: "May lose competitiveness to rivals.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Strong currency makes exports expensive, reducing demand and competitiveness." },
        },
        {
          id: "olbus-u6-ec-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Economic influences review.",
          parts: [
            { label: "a", prompt: "Define inflation.", marks: 1 },
            { label: "b", prompt: "Define recession.", marks: 1 },
            { label: "c", prompt: "How do interest rates affect borrowing?", marks: 2 },
            { label: "d", prompt: "Strong vs weak currency for exporters?", marks: 2 },
            { label: "e", prompt: "How should businesses respond to recession?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Economic factors", statement: "Definitions and impacts." },
          ], steps: [
            { part: "a", reasoning: "Rising prices.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Economic decline.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Higher rates = higher borrowing costs.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Strong = expensive exports; weak = cheaper exports.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Cut costs, focus on essentials, protect cash.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Second strategy.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear response.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) inflation (b) recession (c) higher cost (d) strong/weak (e) cut costs+cash" },
        },
      ],
    },
    {
      id: "olbus-u6-social",
      title: "Social Influences",
      skill: "Explain how social and demographic changes affect business.",
      lesson: {
        sections: [
          { heading: "Demographics", body: "Aging population → demand for healthcare, retirement products. Younger population → education, entertainment, tech." },
          { heading: "Lifestyle changes", body: "Health consciousness → organic food, gyms. Remote work → home office products, video conferencing. Environmental awareness → sustainable products." },
          { heading: "Consumer expectations", body: "Customers expect convenience, quality, ethical practices, digital access. Businesses must adapt or lose customers." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An aging population creates opportunity for which businesses?",
          solution: "Healthcare, mobility aids, retirement communities, home care services.",
        },
      },
      questions: [
        {
          id: "olbus-u6-so-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An aging population creates demand for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Healthcare and retirement products" }, { id: "b", text: "Baby products" }, { id: "c", text: "School supplies" }, { id: "d", text: "Video games" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Social influences", statement: "Demographic impact." }], steps: [{ reasoning: "Health/retirement needs.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-so-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two social trends affecting business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Social trends", statement: "Consumer changes." }], steps: [
            { reasoning: "Health consciousness, environmental awareness, remote work, aging — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: health, environment, remote work, demographics." },
        },
        {
          id: "olbus-u6-so-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how environmental awareness affects businesses.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Environmental awareness", statement: "Consumer pressure." }], steps: [
            { reasoning: "Customers demand sustainable products.", marks: 1, markCode: "AO2" },
            { reasoning: "Businesses must reduce waste and emissions.", marks: 1, markCode: "AO2" },
            { reasoning: "Creates opportunities for green products.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Consumer demand for sustainability forces green practices and creates opportunities." },
        },
        {
          id: "olbus-u6-so-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Social influences review.",
          parts: [
            { label: "a", prompt: "How does aging affect business?", marks: 2 },
            { label: "b", prompt: "Name two lifestyle trends.", marks: 2 },
            { label: "c", prompt: "How has remote work changed demand?", marks: 2 },
            { label: "d", prompt: "Why must businesses adapt to social change?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Social influences", statement: "Demographics and trends." },
          ], steps: [
            { part: "a", reasoning: "Demand for healthcare/retirement products.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Health, environment, remote work — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Home office products, video conferencing, remote services.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear examples.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Customer needs change; must stay relevant.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Competitive survival.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) aging→healthcare (b) 2 trends (c) remote demand (d) stay relevant" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u6-6-1-notes", title: "Economic and social influences — notes", summary: "How economic and social factors affect business.",
      sections: [
        { heading: "Economic", body: "Inflation, interest rates, exchange rates, business cycle — affect costs, demand and competitiveness." },
        { heading: "Social", body: "Demographics and lifestyle trends (aging, health, environment, remote work) create new opportunities and demands." },
      ] },
  ],
};
