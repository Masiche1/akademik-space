import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "olec-u4-lesson-4-3",
  code: "4-3",
  title: "Inflation and Government Budgets",
  goal: "I CAN explain inflation, its causes and the government budget.",
  standards: ["2281 4.3"],
  vocabulary: [
    { term: "Inflation", definition: "Sustained increase in general price level." },
    { term: "Deflation", definition: "Sustained decrease in general price level." },
    { term: "Consumer Price Index (CPI)", definition: "Measure of average price changes." },
    { term: "Demand-pull inflation", definition: "Inflation from excessive demand." },
    { term: "Cost-push inflation", definition: "Inflation from rising production costs." },
    { term: "Budget deficit", definition: "Government spending exceeds tax revenue." },
    { term: "Budget surplus", definition: "Tax revenue exceeds government spending." },
    { term: "National debt", definition: "Total accumulated government borrowing." },
  ],
  concepts: [
    {
      id: "olec-u4-inflation",
      title: "Inflation",
      skill: "Explain causes and effects of inflation.",
      lesson: {
        sections: [
          { heading: "Measuring inflation", body: "CPI tracks a basket of goods/services. Inflation rate = % change in CPI over a period." },
          { heading: "Causes", body: "- **Demand-pull**: too much money chasing too few goods — strong demand, loose monetary policy.\n- **Cost-push**: rising costs (wages, raw materials, imports) push prices up." },
          { heading: "Effects", body: "Erodes purchasing power, hurts savers on fixed incomes, may help debtors. Moderate inflation (2-3%) is often acceptable; high inflation is harmful." },
        ],
        keyFormulas: [
          { name: "Inflation rate", statement: "(CPI now - CPI before) / CPI before × 100" },
        ],
        workedExample: {
          problem: "CPI rises from 100 to 105. Inflation rate? If wages stay the same, what happens?",
          solution: "Inflation = 5%. Real wages fall — purchasing power decreases.",
        },
      },
      questions: [
        {
          id: "olec-u4-inf-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Inflation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Currency appreciation" },
            { id: "b", text: "Rise in unemployment" },
            { id: "c", text: "Fall in GDP" },
            { id: "d", text: "Sustained rise in general price level" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Inflation", statement: "Price rise." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u4-inf-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish demand-pull and cost-push inflation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Inflation causes", statement: "Demand vs cost." }], steps: [
            { reasoning: "Demand-pull=excess demand; cost-push=rising costs.", marks: 1, markCode: "AO1" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Demand-pull = too much demand; cost-push = rising production costs." },
        },
        {
          id: "olec-u4-inf-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain one effect of high inflation on households.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Inflation effects", statement: "Purchasing power." }], steps: [
            { reasoning: "Erodes purchasing power — same money buys less.", marks: 1, markCode: "AO2" },
            { reasoning: "Hurts those on fixed incomes.", marks: 1, markCode: "AO2" },
            { reasoning: "Creates uncertainty for planning.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "High inflation reduces purchasing power and hurts fixed-income earners." },
        },
        {
          id: "olec-u4-inf-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Inflation review.",
          parts: [
            { label: "a", prompt: "Define inflation.", marks: 1 },
            { label: "b", prompt: "What is CPI?", marks: 1 },
            { label: "c", prompt: "Inflation rate formula?", marks: 1 },
            { label: "d", prompt: "Demand-pull vs cost-push?", marks: 2 },
            { label: "e", prompt: "Two effects of inflation?", marks: 2 },
            { label: "f", prompt: "Why might moderate inflation be acceptable?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Inflation", statement: "Causes, measurement, effects." },
          ], steps: [
            { part: "a", reasoning: "Sustained price rise.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Price index for basket of goods.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "(CPI now - before)/before × 100.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Demand vs cost causes.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Purchasing power falls; uncertainty rises.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Two effects.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "2-3% signals healthy demand without instability.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) CPI (c) formula (d) causes (e) effects (f) moderate ok" },
        },
        {
          id: "olec-u4-inf-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Deflation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A rise in prices" },
            { id: "b", text: "A sustained fall in the general price level" },
            { id: "c", text: "A rise in unemployment only" },
            { id: "d", text: "A fall in GDP only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Deflation", statement: "Falling prices." }], steps: [{ reasoning: "Deflation is the opposite of inflation — sustained price falls.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-inf-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Demand-pull inflation is caused by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rising production costs" },
            { id: "b", text: "Excessive demand relative to supply" },
            { id: "c", text: "Increased imports" },
            { id: "d", text: "Falling wages" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Demand-pull inflation", statement: "Too much demand." }], steps: [{ reasoning: "Strong demand pulls prices up as supply struggles to keep pace.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-inf-q7", difficulty: "core", totalMarks: 1,
          stem: "Cost-push inflation is caused by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Excessive consumer demand" },
            { id: "b", text: "Rising costs of production such as wages or raw materials" },
            { id: "c", text: "Government budget surpluses" },
            { id: "d", text: "Falling interest rates" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Cost-push inflation", statement: "Rising costs." }], steps: [{ reasoning: "Higher input costs are passed on as higher prices.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-inf-q8", difficulty: "core", totalMarks: 1,
          stem: "The Consumer Price Index (CPI) is used to measure…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Total output of the economy" },
            { id: "b", text: "Government revenue" },
            { id: "c", text: "Changes in the average price level" },
            { id: "d", text: "The number of unemployed" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "CPI", statement: "Average price measure." }], steps: [{ reasoning: "CPI tracks a basket of goods to measure inflation.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u4-inf-q9", difficulty: "challenge", totalMarks: 1,
          stem: "High inflation harms people on fixed incomes because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Their incomes automatically rise with inflation" },
            { id: "b", text: "They gain from higher interest rates" },
            { id: "c", text: "Their purchasing power falls as prices rise" },
            { id: "d", text: "Prices of all goods fall" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Inflation effects", statement: "Purchasing power." }], steps: [{ reasoning: "Fixed incomes buy less when prices rise.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u4-inf-q10", difficulty: "foundation", totalMarks: 1,
          stem: "The CPI rises from 100 to 103. Calculate the inflation rate.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Inflation rate", statement: "(CPI now - CPI before)/CPI before × 100." }], steps: [{ reasoning: "(103 - 100)/100 × 100 = 3%.", marks: 1, markCode: "AO2" }], finalAnswer: "3%" },
        },
        {
          id: "olec-u4-inf-q11", difficulty: "core", totalMarks: 2,
          stem: "The CPI rises from 110 to 121. (a) Calculate the inflation rate. (b) State the formula used.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Inflation rate", statement: "Percentage change in CPI." }], steps: [
            { part: "a", reasoning: "(121 - 110)/110 × 100 = 10%.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct formula applied.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "10%" },
        },
        {
          id: "olec-u4-inf-q12", difficulty: "core", totalMarks: 2,
          stem: "The CPI rises from 200 to 206. (a) Calculate the inflation rate. (b) By what percentage must wages rise to maintain real incomes?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }, { label: "b", answer: 3 }] },
          markscheme: { principles: [{ kind: "principle", name: "Inflation and real wages", statement: "Maintain purchasing power." }], steps: [
            { part: "a", reasoning: "(206 - 200)/200 × 100 = 3%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Wages must rise by the same 3% to keep pace.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 3% (b) 3%" },
        },
        {
          id: "olec-u4-inf-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Prices rise by 8% while average incomes rise by only 5%. Calculate the approximate change in real incomes.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2.8, tolerance: 0.5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Real income", statement: "Nominal minus inflation." }], steps: [
            { reasoning: "Real change ≈ 5% - 8% = -3% (more precisely ≈ -2.8%).", marks: 1, markCode: "AO2" },
            { reasoning: "Negative value shows real incomes fell.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "≈ -3% (real incomes fall)" },
        },
        {
          id: "olec-u4-inf-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain two causes of cost-push inflation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Cost-push inflation", statement: "Causes." }], steps: [
            { reasoning: "Any two: rising wages, higher raw material costs, rising import prices, weaker exchange rate.", marks: 1, markCode: "AO1" },
            { reasoning: "Both causes correctly identified.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: wages, raw materials, import prices, exchange rate." },
        },
        {
          id: "olec-u4-inf-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain who gains and who loses from unexpected inflation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Inflation effects", statement: "Winners and losers." }], steps: [
            { reasoning: "Losers: savers, pensioners, those on fixed incomes.", marks: 1, markCode: "AO2" },
            { reasoning: "Gainers: borrowers/debtors whose debts lose real value.", marks: 1, markCode: "AO2" },
            { reasoning: "Workers on fixed wages lose; those with index-linked pay are protected.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Fixed-income groups lose; debtors and some borrowers gain." },
        },
        {
          id: "olec-u4-inf-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Inflation extended review.",
          parts: [
            { label: "a", prompt: "Define inflation.", marks: 1 },
            { label: "b", prompt: "Define deflation.", marks: 1 },
            { label: "c", prompt: "What does the CPI measure?", marks: 1 },
            { label: "d", prompt: "Give the inflation rate formula.", marks: 1 },
            { label: "e", prompt: "Distinguish demand-pull from cost-push inflation.", marks: 2 },
            { label: "f", prompt: "CPI rises 150 → 165. Calculate the inflation rate.", marks: 1 },
            { label: "g", prompt: "Explain two effects of high inflation on an economy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Inflation", statement: "Causes, measurement, effects." },
          ], steps: [
            { part: "a", reasoning: "Sustained rise in general price level.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Sustained fall in general price level.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Average price changes of a basket of goods.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "(CPI now - CPI before)/CPI before × 100.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Demand-pull = excess demand; cost-push = rising costs.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "(165 - 150)/150 × 100 = 10%.", marks: 1, markCode: "AO2" },
            { part: "g", reasoning: "Any two: eroded purchasing power, uncertainty, hurts savers, menu costs.", marks: 1, markCode: "AO1" },
            { part: "g", reasoning: "Two effects explained.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a)-(g) definitions, causes, calculation, effects" },
        },
      ],
    },
    {
      id: "olec-u4-budget",
      title: "Government Budget",
      skill: "Understand budget deficits, surpluses and national debt.",
      lesson: {
        sections: [
          { heading: "Budget balance", body: "- **Deficit**: spending > revenue → borrow.\n- **Surplus**: revenue > spending → repay debt.\n- **Balanced**: revenue = spending." },
          { heading: "National debt", body: "Accumulated borrowing over time. High debt means high interest payments, limiting future spending. Debt/GDP ratio matters more than absolute debt." },
          { heading: "Keynesian vs austerity", body: "Keynesians support deficits during recessions to stimulate demand; austerity supporters argue deficits crowd out private spending and burden future generations." },
        ],
        keyFormulas: [
          { name: "Budget balance", statement: "Tax revenue - Government spending" },
        ],
        workedExample: {
          problem: "Government spends $500 billion, collects $450 billion in taxes. Budget position?",
          solution: "Deficit of $50 billion — must borrow to cover the gap.",
        },
      },
      questions: [
        {
          id: "olec-u4-bud-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A budget deficit occurs when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Spending exceeds tax revenue" },
            { id: "b", text: "Exports rise" },
            { id: "c", text: "GDP grows" },
            { id: "d", text: "Revenue exceeds spending" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Deficit", statement: "G>T." }], steps: [{ reasoning: "Correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-bud-q2", difficulty: "core", totalMarks: 2,
          stem: "Spending $400b, revenue $350b. Budget position?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Budget", statement: "Balance calc." }], steps: [
            { reasoning: "Deficit of $50 billion.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "$50 billion deficit" },
        },
        {
          id: "olec-u4-bud-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why high national debt can be problematic.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "National debt", statement: "Risks." }], steps: [
            { reasoning: "High interest payments crowd out other spending.", marks: 1, markCode: "AO2" },
            { reasoning: "May require future tax rises.", marks: 1, markCode: "AO2" },
            { reasoning: "Risk of debt crisis if lenders lose confidence.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Interest burden, future taxes, and risk of debt crisis." },
        },
        {
          id: "olec-u4-bud-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Budget review.",
          parts: [
            { label: "a", prompt: "Define budget deficit.", marks: 1 },
            { label: "b", prompt: "Define budget surplus.", marks: 1 },
            { label: "c", prompt: "Define national debt.", marks: 1 },
            { label: "d", prompt: "G=$600b, T=$550b. Position?", marks: 1 },
            { label: "e", prompt: "Why is debt/GDP more useful than absolute debt?", marks: 2 },
            { label: "f", prompt: "Keynesian vs austerity view on deficits?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Budget", statement: "Balances and debt." },
          ], steps: [
            { part: "a", reasoning: "G > T.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "T > G.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Accumulated borrowing.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "$50b deficit.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Shows debt relative to ability to repay.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Better comparison across countries.", marks: 1, markCode: "AO3" },
            { part: "f", reasoning: "Keynes=deficits stimulate; austerity=deficits crowd out.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Both views explained.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) deficit (b) surplus (c) debt (d) 50b def (e) ratio (f) Keynes vs aust" },
        },
        {
          id: "olec-u4-bud-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A budget surplus occurs when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tax revenue exceeds government spending" },
            { id: "b", text: "Debt increases" },
            { id: "c", text: "GDP falls" },
            { id: "d", text: "Spending exceeds revenue" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Budget surplus", statement: "T > G." }], steps: [{ reasoning: "Surplus means revenue is greater than spending.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u4-bud-q6", difficulty: "foundation", totalMarks: 1,
          stem: "National debt is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Total tax revenue" },
            { id: "b", text: "This year's budget deficit" },
            { id: "c", text: "The total accumulated government borrowing over time" },
            { id: "d", text: "Government spending this year" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "National debt", statement: "Accumulated borrowing." }], steps: [{ reasoning: "National debt is the stock of past borrowing.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olec-u4-bud-q7", difficulty: "core", totalMarks: 1,
          stem: "A balanced budget occurs when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Revenue exceeds spending" },
            { id: "b", text: "Spending exceeds revenue" },
            { id: "c", text: "Debt is zero" },
            { id: "d", text: "Tax revenue equals government spending" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Balanced budget", statement: "T = G." }], steps: [{ reasoning: "Balanced means revenue and spending are equal.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olec-u4-bud-q8", difficulty: "core", totalMarks: 1,
          stem: "A government budget deficit is typically financed by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Selling foreign reserves only" },
            { id: "b", text: "Borrowing" },
            { id: "c", text: "Reducing taxes" },
            { id: "d", text: "Printing money only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Budget deficit", statement: "Financed by borrowing." }], steps: [{ reasoning: "Governments borrow to cover the gap between spending and revenue.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-bud-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Why is the debt-to-GDP ratio more useful than absolute national debt?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is always smaller" },
            { id: "b", text: "It shows debt relative to the economy's ability to repay it" },
            { id: "c", text: "It never changes" },
            { id: "d", text: "It measures only interest payments" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Debt/GDP", statement: "Relative measure." }], steps: [{ reasoning: "GDP shows the size of the economy that must service the debt.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olec-u4-bud-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Government spending is $700 billion and tax revenue is $650 billion. Calculate the budget deficit.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50, unit: "$ billion" }] },
          markscheme: { principles: [{ kind: "principle", name: "Budget balance", statement: "Deficit = G - T." }], steps: [{ reasoning: "Deficit = 700 - 650 = $50 billion.", marks: 1, markCode: "AO2" }], finalAnswer: "$50 billion deficit" },
        },
        {
          id: "olec-u4-bud-q11", difficulty: "core", totalMarks: 2,
          stem: "Tax revenue is $900 billion and government spending is $850 billion. (a) Calculate the budget balance. (b) If spending rises to $950 billion, what is the new balance?",
          response: { type: "numeric", parts: [{ label: "a", answer: 50, unit: "$ billion surplus" }, { label: "b", answer: 50, unit: "$ billion deficit" }] },
          markscheme: { principles: [{ kind: "principle", name: "Budget balance", statement: "Surplus or deficit." }], steps: [
            { part: "a", reasoning: "Surplus = 900 - 850 = $50 billion surplus.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "New balance = 900 - 950 = -$50 billion, i.e. a $50 billion deficit.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) $50b surplus (b) $50b deficit" },
        },
        {
          id: "olec-u4-bud-q12", difficulty: "core", totalMarks: 2,
          stem: "A country's national debt is $2 trillion and its GDP is $4 trillion. (a) Calculate the debt-to-GDP ratio. (b) Express it as a percentage.",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }] },
          markscheme: { principles: [{ kind: "principle", name: "Debt/GDP", statement: "Debt relative to GDP." }], steps: [
            { part: "a", reasoning: "Ratio = 2/4 = 0.5.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "As a percentage = 50%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "50%" },
        },
        {
          id: "olec-u4-bud-q13", difficulty: "challenge", totalMarks: 2,
          stem: "National debt is $1.5 trillion and GDP is $3 trillion. (a) Calculate the debt-to-GDP ratio. (b) If GDP grows to $3.75 trillion with debt unchanged, what is the new ratio?",
          response: { type: "numeric", parts: [{ label: "a", answer: 50 }, { label: "b", answer: 40 }] },
          markscheme: { principles: [{ kind: "principle", name: "Debt/GDP", statement: "Ratio changes with GDP." }], steps: [
            { part: "a", reasoning: "Ratio = 1.5/3 = 0.5 = 50%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "New ratio = 1.5/3.75 = 0.4 = 40%.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 50% (b) 40%" },
        },
        {
          id: "olec-u4-bud-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain two reasons why a government might run a budget deficit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Budget deficit", statement: "Reasons for borrowing." }], steps: [
            { reasoning: "Any two: economic recession stimulus, infrastructure investment, increased welfare spending, tax cuts to boost demand.", marks: 1, markCode: "AO1" },
            { reasoning: "Both reasons correctly identified.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: stimulus, investment, welfare, tax cuts." },
        },
        {
          id: "olec-u4-bud-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between a budget deficit and national debt.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Deficit vs debt", statement: "Flow vs stock." }], steps: [
            { reasoning: "Budget deficit is a flow — one year's shortfall of spending over revenue.", marks: 1, markCode: "AO1" },
            { reasoning: "National debt is a stock — total accumulated borrowing over time.", marks: 1, markCode: "AO1" },
            { reasoning: "Deficits add to the debt each year they occur.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Deficit = annual flow; debt = accumulated stock." },
        },
        {
          id: "olec-u4-bud-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Government budget extended review.",
          parts: [
            { label: "a", prompt: "Define budget deficit, surplus and balanced budget.", marks: 3 },
            { label: "b", prompt: "Define national debt.", marks: 1 },
            { label: "c", prompt: "G = $500b, T = $450b. Calculate the budget position.", marks: 1 },
            { label: "d", prompt: "Explain why debt-to-GDP is more useful than absolute debt.", marks: 2 },
            { label: "e", prompt: "Outline the Keynesian view on deficits in a recession.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Budget", statement: "Balances and debt." },
          ], steps: [
            { part: "a", reasoning: "Deficit = G > T; surplus = T > G; balanced = T = G.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All three defined.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Clear definitions.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Total accumulated government borrowing.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "$50 billion deficit.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Shows debt relative to ability to repay via GDP.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Better for comparing across countries/time.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Keynesians support deficits to stimulate demand in recessions.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a)-(e) definitions, calculation, debt/GDP, Keynesian view" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u4-4-3-notes", title: "Inflation and budgets — notes", summary: "Inflation causes/effects and government finances.",
      sections: [
        { heading: "Inflation", body: "CPI measures prices; demand-pull vs cost-push; erodes purchasing power." },
        { heading: "Budget", body: "Deficit=G>T; surplus=T>G; debt=accumulated borrowing; Keynes vs austerity debate." },
      ] },
  ],
};
