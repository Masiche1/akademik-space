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
            { id: "a", text: "Sustained rise in general price level" }, { id: "b", text: "Fall in GDP" }, { id: "c", text: "Rise in unemployment" }, { id: "d", text: "Currency appreciation" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Inflation", statement: "Price rise." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
            { id: "a", text: "Spending exceeds tax revenue" }, { id: "b", text: "Revenue exceeds spending" }, { id: "c", text: "GDP grows" }, { id: "d", text: "Exports rise" },
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
