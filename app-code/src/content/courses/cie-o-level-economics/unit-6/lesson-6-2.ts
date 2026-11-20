import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "olec-u6-lesson-6-2",
  code: "6-2",
  title: "Development Strategies",
  goal: "I CAN explain strategies used to promote economic development.",
  standards: ["2281 6.2"],
  vocabulary: [
    { term: "Import substitution", definition: "Producing domestically what was previously imported." },
    { term: "Export-led growth", definition: "Development driven by expanding exports." },
    { term: "Microfinance", definition: "Small loans to poor entrepreneurs." },
    { term: "Fair trade", definition: "Trading ensuring fair prices for producers in poor countries." },
    { term: "Primary product dependency", definition: "Over-reliance on exporting raw materials." },
    { term: "Industrialisation", definition: "Growth of manufacturing industries." },
  ],
  concepts: [
    {
      id: "olec-u6-strategies",
      title: "Development strategies",
      skill: "Compare import substitution, export-led growth and other strategies.",
      lesson: {
        sections: [
          { heading: "Import substitution", body: "Develop domestic industries to replace imports. Protects jobs but may create inefficient industries protected from competition." },
          { heading: "Export-led growth", body: "Focus on producing goods for export markets. Often more successful — forces efficiency and earns foreign exchange. Requires competitive advantage." },
          { heading: "Other strategies", body: "Microfinance (small loans), fair trade, diversification away from primary products, investment in education/health." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A country stops importing shoes and builds its own shoe factories. Which strategy?",
          solution: "Import substitution — replacing imports with domestic production.",
        },
      },
      questions: [
        {
          id: "olec-u6-st-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Import substitution means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Producing domestically what was imported" }, { id: "b", text: "Exporting more goods" }, { id: "c", text: "Removing all tariffs" }, { id: "d", text: "Borrowing from abroad" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Import substitution", statement: "Domestic replacement." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-st-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two development strategies.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Strategies", statement: "Approaches." }], steps: [
            { reasoning: "Import substitution, export-led, microfinance, fair trade — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: import substitution, export-led growth, microfinance, fair trade." },
        },
        {
          id: "olec-u6-st-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one advantage of export-led growth over import substitution.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Export-led", statement: "Advantage." }], steps: [
            { reasoning: "Forces efficiency to compete internationally.", marks: 1, markCode: "AO2" },
            { reasoning: "Earns foreign exchange for imports/investment.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct advantage.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Export-led forces efficiency and earns foreign exchange — often more successful." },
        },
        {
          id: "olec-u6-st-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Development strategies review.",
          parts: [
            { label: "a", prompt: "Define import substitution.", marks: 1 },
            { label: "b", prompt: "Define export-led growth.", marks: 1 },
            { label: "c", prompt: "One drawback of import substitution?", marks: 2 },
            { label: "d", prompt: "What is microfinance?", marks: 1 },
            { label: "e", prompt: "Why diversify away from primary products?", marks: 2 },
            { label: "f", prompt: "Fair trade explained?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Strategies", statement: "Approaches and evaluation." },
          ], steps: [
            { part: "a", reasoning: "Domestic production replaces imports.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Growth driven by exports.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Protected inefficient industries; higher prices.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear drawback.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Small loans to poor entrepreneurs.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Primary prices volatile; manufactures earn more.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "f", reasoning: "Fair prices for producers in poor countries.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Clear definition.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) IS (b) export-led (c) drawback (d) microfinance (e) diversify (f) fair trade" },
        },
      ],
    },
    {
      id: "olec-u6-inequality",
      title: "Inequality and Poverty",
      skill: "Explain income inequality and its measurement.",
      lesson: {
        sections: [
          { heading: "Inequality", body: "Unequal distribution of income/wealth. Measured by Gini coefficient (0 = perfect equality, 1 = perfect inequality) or income shares." },
          { heading: "Causes", body: "Differences in education, skills, inheritance, discrimination, market power, globalization." },
          { heading: "Consequences", body: "Poverty traps, social unrest, slower growth (if poor can't invest), health disparities." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Country X has Gini coefficient 0.45. What does this mean?",
          solution: "Moderate-high inequality — income is unevenly distributed.",
        },
      },
      questions: [
        {
          id: "olec-u6-ineq-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The Gini coefficient measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Income inequality" }, { id: "b", text: "GDP growth" }, { id: "c", text: "Inflation" }, { id: "d", text: "Unemployment" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Gini", statement: "Inequality measure." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-ineq-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two causes of income inequality.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Inequality causes", statement: "Factors." }], steps: [
            { reasoning: "Education differences, inheritance, discrimination — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: education, inheritance, discrimination, market power." },
        },
        {
          id: "olec-u6-ineq-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one consequence of high inequality.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Inequality effects", statement: "Consequences." }], steps: [
            { reasoning: "Poverty traps — poor can't invest in education/health.", marks: 1, markCode: "AO2" },
            { reasoning: "Social unrest or slower growth.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct consequence.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Poverty traps, social unrest, or slower growth from inequality." },
        },
        {
          id: "olec-u6-ineq-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Inequality review.",
          parts: [
            { label: "a", prompt: "What does Gini measure?", marks: 1 },
            { label: "b", prompt: "Gini range meaning?", marks: 2 },
            { label: "c", prompt: "Two causes of inequality?", marks: 2 },
            { label: "d", prompt: "Two consequences?", marks: 2 },
            { label: "e", prompt: "How might governments reduce inequality?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Inequality", statement: "Measurement, causes, effects." },
          ], steps: [
            { part: "a", reasoning: "Income distribution.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "0=equality; 1=perfect inequality.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Range explained.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Education, inheritance, discrimination.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Poverty traps; social unrest.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Progressive taxation, welfare, education spending.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear policies.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) Gini (b) range (c) causes (d) effects (e) policies" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u6-6-2-notes", title: "Development strategies — notes", summary: "Strategies, inequality and poverty.",
      sections: [
        { heading: "Strategies", body: "Import substitution vs export-led growth; microfinance, fair trade, diversification." },
        { heading: "Inequality", body: "Gini coefficient measures distribution; causes include education/inheritance; consequences include poverty traps." },
      ] },
  ],
};
