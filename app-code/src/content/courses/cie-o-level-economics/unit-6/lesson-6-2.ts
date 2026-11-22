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
            { id: "a", text: "Removing all tariffs" },
            { id: "b", text: "Borrowing from abroad" },
            { id: "c", text: "Exporting more goods" },
            { id: "d", text: "Producing domestically what was imported" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Import substitution", statement: "Domestic replacement." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
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
        {
          id: "olec-u6-st-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Export-led growth means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Replacing imports with domestic production" },
            { id: "b", text: "Borrowing from abroad" },
            { id: "c", text: "Development driven by expanding exports" },
            { id: "d", text: "Nationalising industries" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Export-led growth", statement: "Exports drive development." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u6-st-q6", difficulty: "core", totalMarks: 1,
          stem: "Microfinance provides…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Large loans to multinational companies" },
            { id: "b", text: "Free goods to the poor" },
            { id: "c", text: "Government grants for infrastructure" },
            { id: "d", text: "Small loans to poor entrepreneurs who lack access to banks" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Microfinance", statement: "Small loans." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u6-st-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A microfinance scheme lends $200 to each of 500 borrowers. (a) What is the total amount lent in dollars? (b) If borrowers repay 95% of the total, how much is repaid in dollars?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 100000, unit: "dollars" },
            { label: "b", answer: 95000, unit: "dollars" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Microfinance", statement: "Small loans, high repayment." }], steps: [
            { part: "a", reasoning: "$200 x 500 = $100,000.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "95% of $100,000 = $95,000.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $100,000 (b) $95,000" },
        },
        {
          id: "olec-u6-st-q8", difficulty: "core", totalMarks: 2,
          stem: "Name two development strategies that are not based on international trade.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Non-trade strategies", statement: "Domestic approaches." }], steps: [
            { reasoning: "Investment in education, health or infrastructure.", marks: 1, markCode: "AO1" },
            { reasoning: "Microfinance or population policy.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: education, health, infrastructure, microfinance, population policy." },
        },
        {
          id: "olec-u6-st-q9", difficulty: "core", totalMarks: 3,
          stem: "A domestically produced good costs $10 while the imported equivalent costs $8. A tariff of 25% is imposed on imports. (a) What is the amount of the tariff in dollars? (b) What is the new price of the import in dollars? (c) By what percentage has the import price risen?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 2, unit: "dollars" },
            { label: "b", answer: 10, unit: "dollars" },
            { label: "c", answer: 25, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Tariff and import substitution", statement: "Price comparison." }], steps: [
            { part: "a", reasoning: "25% of $8 = $2.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$8 + $2 = $10.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "The tariff itself is 25% of the import price.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $2 (b) $10 (c) 25%" },
        },
        {
          id: "olec-u6-st-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one drawback of import substitution as a development strategy.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Import substitution drawback", statement: "Protection costs." }], steps: [
            { reasoning: "Protected industries face no foreign competition and become inefficient.", marks: 1, markCode: "AO2" },
            { reasoning: "Consumers pay higher prices for domestically produced goods.", marks: 1, markCode: "AO2" },
            { reasoning: "Tariff revenue and retaliation costs may offset any industrial gains.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the drawback.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Import substitution protects inefficient industries and raises prices for consumers." },
        },
        {
          id: "olec-u6-st-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Export-led growth is often more successful than import substitution because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Forces firms to become efficient to compete internationally and earns foreign exchange" },
            { id: "b", text: "Guarantees high profits for all firms" },
            { id: "c", text: "Requires no government support" },
            { id: "d", text: "Eliminates the need for imports" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Export-led advantage", statement: "Efficiency and forex." }], steps: [{ reasoning: "Correct reason.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-st-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate fair trade as a strategy for promoting development.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Fair trade evaluation", statement: "Pros and cons." }], steps: [
            { reasoning: "Benefit: guarantees producers in poor countries fair prices above market rates.", marks: 1, markCode: "AO2" },
            { reasoning: "Benefit: premiums fund community projects such as schools and clinics.", marks: 1, markCode: "AO2" },
            { reasoning: "Drawback: volumes are small and it may not reach the poorest producers.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement on its development impact.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Fair trade raises incomes for participating producers but reaches limited volumes — helpful but not a complete solution." },
        },
        {
          id: "olec-u6-st-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A country earns $300 million from coffee exports (60% of total exports) and $200 million from other exports. After diversification, coffee earns $200 million and manufactures earn $400 million. (a) What were total exports before in millions of dollars? (b) What are total exports after in millions of dollars? (c) By what percentage did total exports grow?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 500, unit: "million dollars" },
            { label: "b", answer: 600, unit: "million dollars" },
            { label: "c", answer: 20, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Export diversification", statement: "Total and growth." }], steps: [
            { part: "a", reasoning: "$300m + $200m = $500m.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "$200m + $400m = $600m.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "(600 - 500)/500 x 100 = 20%.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) $500m (b) $600m (c) 20%" },
        },
        {
          id: "olec-u6-st-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Diversifying away from primary products helps development because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Manufacturing requires no skills" },
            { id: "b", text: "Manufactured goods earn higher and more stable prices than raw materials" },
            { id: "c", text: "Primary products cannot be sold abroad" },
            { id: "d", text: "It eliminates the need for investment" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Diversification", statement: "Higher value exports." }], steps: [{ reasoning: "Correct reason.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u6-st-q15", difficulty: "core", totalMarks: 1,
          stem: "Investment in education promotes development mainly by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Reducing the need for healthcare" },
            { id: "b", text: "Lowering export prices" },
            { id: "c", text: "Increasing population growth" },
            { id: "d", text: "Building human capital that raises productivity" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Education and development", statement: "Human capital." }], steps: [{ reasoning: "Correct mechanism.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u6-st-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Development strategies review.",
          parts: [
            { label: "a", prompt: "Define import substitution.", marks: 1 },
            { label: "b", prompt: "Define export-led growth.", marks: 1 },
            { label: "c", prompt: "Give one drawback of import substitution.", marks: 2 },
            { label: "d", prompt: "What is microfinance?", marks: 1 },
            { label: "e", prompt: "Explain why countries should diversify away from primary products.", marks: 2 },
            { label: "f", prompt: "Explain what fair trade means.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Strategies", statement: "Approaches and evaluation." },
          ], steps: [
            { part: "a", reasoning: "Domestic production replaces imports.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Growth driven by expanding exports.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Protected industries become inefficient; consumers pay higher prices.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear drawback.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Small loans to poor entrepreneurs.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Primary prices are volatile; manufactures earn more.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
            { part: "f", reasoning: "Ensures fair prices for producers in poor countries.", marks: 1, markCode: "AO1" },
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
            { id: "a", text: "Income inequality" },
            { id: "b", text: "Unemployment" },
            { id: "c", text: "Inflation" },
            { id: "d", text: "GDP growth" },
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
        {
          id: "olec-u6-ineq-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The Gini coefficient ranges from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1 to 10" },
            { id: "b", text: "-1 to +1" },
            { id: "c", text: "0 (perfect equality) to 1 (perfect inequality)" },
            { id: "d", text: "0 to 100" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Gini range", statement: "0 to 1." }], steps: [{ reasoning: "Correct range.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u6-ineq-q6", difficulty: "foundation", totalMarks: 2,
          stem: "In a country, the poorest 50% of people earn 20% of total income and the richest 10% earn 40% of total income. (a) What percentage of income is earned by the remaining 40% of people? (b) How many times larger is the average income of a person in the richest 10% compared to a person in the poorest 50%?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 40, unit: "%" },
            { label: "b", answer: 10, unit: "times" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Income distribution", statement: "Shares and averages." }], steps: [
            { part: "a", reasoning: "100% - 20% - 40% = 40%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Richest 10% avg = 40/10 = 4% each; poorest 50% avg = 20/50 = 0.4% each; ratio = 10.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 40% (b) 10 times" },
        },
        {
          id: "olec-u6-ineq-q7", difficulty: "core", totalMarks: 1,
          stem: "A Gini coefficient of 0.2 indicates…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No economic growth" },
            { id: "b", text: "A relatively equal distribution of income" },
            { id: "c", text: "Extreme inequality" },
            { id: "d", text: "Perfect inequality" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Gini interpretation", statement: "Low = equal." }], steps: [{ reasoning: "Values near 0 indicate more equal distribution.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u6-ineq-q8", difficulty: "core", totalMarks: 2,
          stem: "Name two causes of income inequality.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Inequality causes", statement: "Factors." }], steps: [
            { reasoning: "Differences in education, skills, inheritance or discrimination.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: education, inheritance, discrimination, market power, globalisation." },
        },
        {
          id: "olec-u6-ineq-q9", difficulty: "core", totalMarks: 3,
          stem: "Country A has a Gini coefficient of 0.25 and Country B has a Gini coefficient of 0.55. (a) What is the difference between the two coefficients? (b) Country B's coefficient is what multiple of Country A's? (c) If Country A's coefficient falls to 0.20, what is the new difference?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.3 },
            { label: "b", answer: 2.2 },
            { label: "c", answer: 0.35 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Gini comparison", statement: "Difference and ratio." }], steps: [
            { part: "a", reasoning: "0.55 - 0.25 = 0.30.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "0.55 / 0.25 = 2.2.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "0.55 - 0.20 = 0.35.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 0.30 (b) 2.2 (c) 0.35" },
        },
        {
          id: "olec-u6-ineq-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how high income inequality can create a poverty trap.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Inequality and poverty traps", statement: "Self-reinforcing cycle." }], steps: [
            { reasoning: "Poor households cannot afford education, healthcare or investment.", marks: 1, markCode: "AO2" },
            { reasoning: "Low investment keeps productivity and incomes low across generations.", marks: 1, markCode: "AO2" },
            { reasoning: "Wealthy households capture most of the economy's gains, widening the gap.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation of the cycle.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Inequality leaves the poor unable to invest, trapping them in low income while the rich accumulate wealth." },
        },
        {
          id: "olec-u6-ineq-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Progressive taxation reduces income inequality by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Taxing higher incomes at higher rates to fund redistribution" },
            { id: "b", text: "Charging everyone the same flat rate" },
            { id: "c", text: "Taxing only the poor" },
            { id: "d", text: "Eliminating all taxes" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Progressive taxation", statement: "Redistribution." }], steps: [{ reasoning: "Correct mechanism.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u6-ineq-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate policies governments can use to reduce income inequality.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Inequality policies", statement: "Tools and trade-offs." }], steps: [
            { reasoning: "Progressive taxation and cash transfers directly redistribute income.", marks: 1, markCode: "AO2" },
            { reasoning: "Spending on education and health improves earning potential of the poor.", marks: 1, markCode: "AO2" },
            { reasoning: "Drawback: high taxes may reduce incentives to work and invest.", marks: 1, markCode: "AO2" },
            { reasoning: "Balanced judgement on effectiveness.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Taxation, transfers and education spending reduce inequality but may weaken work incentives — a policy trade-off." },
        },
        {
          id: "olec-u6-ineq-q13", difficulty: "challenge", totalMarks: 3,
          stem: "In a country, the poorest 40% of people earn 12% of total income, the middle 40% earn 28%, and the richest 20% earn 60%. (a) What is the average income share per person in the poorest 40% as a percentage? (b) What is the average income share per person in the richest 20% as a percentage? (c) How many times larger is the richest group's per-person share than the poorest group's?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.3, unit: "%" },
            { label: "b", answer: 3, unit: "%" },
            { label: "c", answer: 10, unit: "times" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Income shares", statement: "Per-capita comparison." }], steps: [
            { part: "a", reasoning: "12% / 40 = 0.3% per person.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "60% / 20 = 3% per person.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "3 / 0.3 = 10 times.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 0.3% (b) 3% (c) 10 times" },
        },
        {
          id: "olec-u6-ineq-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Wealth inequality differs from income inequality because wealth…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only measures annual earnings" },
            { id: "b", text: "Is the stock of assets accumulated over time, while income is a flow" },
            { id: "c", text: "Is always equal to income" },
            { id: "d", text: "Cannot be measured" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Wealth vs income", statement: "Stock vs flow." }], steps: [{ reasoning: "Correct distinction.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u6-ineq-q15", difficulty: "core", totalMarks: 1,
          stem: "Which policy most directly reduces income inequality?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Privatising all public services" },
            { id: "b", text: "Progressive taxation combined with transfers to low-income households" },
            { id: "c", text: "Removing all taxes" },
            { id: "d", text: "Reducing education spending" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Reducing inequality", statement: "Redistribution." }], steps: [{ reasoning: "Correct policy.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u6-ineq-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Inequality review.",
          parts: [
            { label: "a", prompt: "What does the Gini coefficient measure?", marks: 1 },
            { label: "b", prompt: "Explain what a Gini coefficient of 0 and of 1 each mean.", marks: 2 },
            { label: "c", prompt: "Name two causes of income inequality.", marks: 2 },
            { label: "d", prompt: "Name two consequences of high inequality.", marks: 2 },
            { label: "e", prompt: "Name two policies governments can use to reduce inequality.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Inequality", statement: "Measurement, causes, effects, policies." },
          ], steps: [
            { part: "a", reasoning: "Income (or wealth) distribution.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "0 = perfect equality; 1 = perfect inequality.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Range explained.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Education, inheritance, discrimination, market power.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Poverty traps; social unrest; slower growth.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Progressive taxation, welfare transfers, education spending.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two named.", marks: 1, markCode: "AO2" },
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
