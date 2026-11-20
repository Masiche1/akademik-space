module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson421",
    lesson: {
      id: "ciealecon-u2-lesson-2-1", code: "2-1",
      title: "National Income and Economic Growth",
      goal: "I CAN explain GDP, national income measures and economic growth.",
      standards: ["Cambridge A Level Economics 9708", "Paper 2: macroeconomics"],
      vocabulary: [
        { term: "GDP", definition: "Gross Domestic Product — total output in economy." },
        { term: "Nominal GDP", definition: "GDP at current prices." },
        { term: "Real GDP", definition: "GDP adjusted for inflation." },
        { term: "GDP per capita", definition: "GDP divided by population." },
        { term: "Economic growth", definition: "Increase in real GDP over time." },
        { term: "Circular flow", definition: "Model of income/expenditure flows." },
      ],
      concept: {
        id: "ciealecon-u2-s1-gdp", title: "National income",
        skill: "Understand GDP measurement and growth.",
        sections: [
          { heading: "GDP measures", body: "Output method: sum of value added. Income method: sum of factor incomes. Expenditure method: C+I+G+(X-M). Nominal vs real GDP — real adjusts for inflation." },
          { heading: "Circular flow", body: "Households provide factors of production → firms produce goods → households consume. Leakages (saving, taxes, imports) and injections (investment, government spending, exports)." },
          { heading: "Growth", body: "Sustained increase in real GDP. Benefits: higher living standards, employment. Costs: environmental damage, inequality, resource depletion." },
        ],
        keyFormulas: [
          { name: "GDP", statement: "total output" },
          { name: "Real GDP", statement: "inflation-adjusted" },
          { name: "Growth", statement: "increase in real GDP" },
        ],
        workedExample: {
          problem: "Country A GDP £100bn, population 50m. Country B GDP £200bn, population 200m. Which has higher living standards?",
          solution: "A: £2,000 per capita. B: £1,000 per capita. A has higher GDP per capita → higher living standards.",
        },
        questions: [
          {
            id: "ciealecon-u2-gdp-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is GDP?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Gross Domestic Product — total output" }, { id: "b", text: "Total income" }, { id: "c", text: "Total spending" }, { id: "d", text: "Population" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "GDP", statement: "Total output." }],
              steps: [{ reasoning: "GDP = total output in economy.", marks: 1, markCode: "M" }],
              finalAnswer: "Total output",
            },
          },
          {
            id: "ciealecon-u2-gdp-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between nominal and real GDP?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Nominal vs real", statement: "Current vs adjusted." }],
              steps: [
                { reasoning: "Nominal: current prices.", marks: 1, markCode: "M" },
                { reasoning: "Real: adjusted for inflation.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Current vs inflation-adjusted",
            },
          },
          {
            id: "ciealecon-u2-gdp-q3", difficulty: "core", totalMarks: 3,
            stem: "What are leakages and injections in circular flow?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Leakages/injections", statement: "Circular flow." }],
              steps: [
                { reasoning: "Leakages: saving, taxes, imports.", marks: 1, markCode: "M" },
                { reasoning: "Injections: investment, government, exports.", marks: 1, markCode: "M" },
                { reasoning: "Balance determines income level.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Leakages vs injections",
            },
          },
          {
            id: "ciealecon-u2-gdp-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define GDP, nominal GDP, real GDP, GDP per capita, economic growth, circular flow. (b) What is GDP? (c) What is real GDP? (d) What is GDP per capita? (e) What are leakages? (f) What are injections? (g) What is economic growth? (h) Evaluate whether GDP is a good measure of living standards.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "National income", statement: "Measurement, growth." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Total output.", marks: 1, markCode: "M" },
                { reasoning: "(c) Inflation-adjusted.", marks: 1, markCode: "M" },
                { reasoning: "(d) GDP/population.", marks: 1, markCode: "M" },
                { reasoning: "(e) Saving, taxes, imports.", marks: 1, markCode: "M" },
                { reasoning: "(f) Investment, government, exports.", marks: 1, markCode: "M" },
                { reasoning: "(g) Increase in real GDP.", marks: 1, markCode: "M" },
                { reasoning: "(h) Ignores inequality, environment, wellbeing.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "National income analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u2-gdp-notes", title: "National income — notes",
      summary: "GDP measures total output. Real GDP adjusts for inflation. Circular flow shows income/expenditure.",
      sections: [
        { heading: "Key idea", body: "GDP is useful but incomplete measure of economic wellbeing." },
        { heading: "Growth", body: "Sustained real GDP growth raises living standards but may have costs." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson422",
    lesson: {
      id: "ciealecon-u2-lesson-2-2", code: "2-2",
      title: "Inflation and Unemployment",
      goal: "I CAN explain inflation types, causes and unemployment types.",
      standards: ["Cambridge A Level Economics 9708", "Paper 2: macroeconomics"],
      vocabulary: [
        { term: "Inflation", definition: "Sustained increase in general price level." },
        { term: "Demand-pull inflation", definition: "Inflation from excess demand." },
        { term: "Cost-push inflation", definition: "Inflation from rising costs." },
        { term: "CPI", definition: "Consumer Price Index — inflation measure." },
        { term: "Unemployment", definition: "People seeking work but unable to find it." },
        { term: "Natural rate of unemployment", definition: "Unemployment at full employment." },
      ],
      concept: {
        id: "ciealecon-u2-s2-infl", title: "Inflation and unemployment",
        skill: "Analyse macroeconomic problems.",
        sections: [
          { heading: "Inflation types", body: "Demand-pull: AD > AS → demand exceeds supply. Cost-push: rising input costs → prices rise. Built-in: wage-price spiral." },
          { heading: "Unemployment types", body: "Frictional: between jobs. Structural: skills mismatch/industry decline. Cyclical: recession-related. Seasonal: seasonal work patterns." },
          { heading: "Phillips curve", body: "Inverse relationship between inflation and unemployment in short run. Long-run: vertical at natural rate — no trade-off." },
        ],
        keyFormulas: [
          { name: "Inflation", statement: "price level increase" },
          { name: "Unemployment", statement: "seeking work, no job" },
          { name: "Phillips curve", statement: "inflation-unemployment trade-off" },
        ],
        workedExample: {
          problem: "Oil prices rise sharply. What type of inflation results?",
          solution: "Cost-push inflation — higher input costs raise prices. May also reduce AD (negative demand shock) → stagflation.",
        },
        questions: [
          {
            id: "ciealecon-u2-in-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is inflation?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Sustained increase in general price level" }, { id: "b", text: "Decrease in prices" }, { id: "c", text: "Increase in wages" }, { id: "d", text: "Economic growth" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Inflation", statement: "Price increase." }],
              steps: [{ reasoning: "Inflation = sustained price level increase.", marks: 1, markCode: "M" }],
              finalAnswer: "Sustained price increase",
            },
          },
          {
            id: "ciealecon-u2-in-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between demand-pull and cost-push inflation?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Inflation types", statement: "Causes." }],
              steps: [
                { reasoning: "Demand-pull: excess demand.", marks: 1, markCode: "M" },
                { reasoning: "Cost-push: rising input costs.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Demand vs cost causes",
            },
          },
          {
            id: "ciealecon-u2-in-q3", difficulty: "core", totalMarks: 3,
            stem: "What are the types of unemployment?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Unemployment types", statement: "Categories." }],
              steps: [
                { reasoning: "Frictional, structural, cyclical, seasonal.", marks: 1, markCode: "M" },
                { reasoning: "Different causes for each type.", marks: 1, markCode: "M" },
                { reasoning: "Natural rate excludes cyclical.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Unemployment types",
            },
          },
          {
            id: "ciealecon-u2-in-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define inflation, demand-pull, cost-push, CPI, unemployment, natural rate. (b) What is inflation? (c) What is demand-pull inflation? (d) What is cost-push? (e) What are unemployment types? (f) What is natural rate? (g) What is Phillips curve? (h) Evaluate whether governments should prioritise low inflation or low unemployment.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Inflation/unemployment", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Price increase.", marks: 1, markCode: "M" },
                { reasoning: "(c) Excess demand.", marks: 1, markCode: "M" },
                { reasoning: "(d) Rising costs.", marks: 1, markCode: "M" },
                { reasoning: "(e) Frictional, structural, cyclical, seasonal.", marks: 1, markCode: "M" },
                { reasoning: "(f) Full employment level.", marks: 1, markCode: "M" },
                { reasoning: "(g) Inflation-unemployment trade-off.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Inflation and unemployment.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u2-in-notes", title: "Inflation/unemployment — notes",
      summary: "Demand-pull vs cost-push inflation. Unemployment types: frictional, structural, cyclical.",
      sections: [
        { heading: "Key idea", body: "Inflation and unemployment are key macroeconomic problems." },
        { heading: "Phillips curve", body: "Short-run trade-off but long-run vertical — no permanent trade-off." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson423",
    lesson: {
      id: "ciealecon-u2-lesson-2-3", code: "2-3",
      title: "Aggregate Demand and Aggregate Supply",
      goal: "I CAN explain AD/AS curves, shifts and macroeconomic equilibrium.",
      standards: ["Cambridge A Level Economics 9708", "Paper 2: AD/AS"],
      vocabulary: [
        { term: "Aggregate demand (AD)", definition: "Total spending on goods/services in economy." },
        { term: "Aggregate supply (AS)", definition: "Total output economy can produce." },
        { term: "Short-run AS", definition: "AS with fixed wages/prices." },
        { term: "Long-run AS", definition: "AS at full employment." },
        { term: "Multiplier effect", definition: "Initial spending change → larger income change." },
        { term: "Stagflation", definition: "High inflation + high unemployment." },
      ],
      concept: {
        id: "ciealecon-u2-s3-ad", title: "AD/AS model",
        skill: "Analyse macroeconomic equilibrium.",
        sections: [
          { heading: "AD components", body: "C (consumption), I (investment), G (government spending), X-M (net exports). AD shifts: monetary/fiscal policy, consumer confidence, exchange rates." },
          { heading: "AS curves", body: "SRAS: upward sloping — prices/wages sticky. LRAS: vertical at full employment. Shifts: technology, labour, capital, resources." },
          { heading: "Equilibrium", body: "AD = AS determines output and price level. AD increase → output↑ + prices↑. LRAS determines long-run growth." },
        ],
        keyFormulas: [
          { name: "AD", statement: "C+I+G+(X-M)" },
          { name: "AS", statement: "total output" },
          { name: "Equilibrium", statement: "AD = AS" },
        ],
        workedExample: {
          problem: "Government increases spending. Show AD/AS effect.",
          solution: "AD shifts right → output increases, price level rises. If near full employment, mainly inflationary.",
        },
        questions: [
          {
            id: "ciealecon-u2-ad-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is aggregate demand?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Total spending on goods/services" }, { id: "b", text: "Total output" }, { id: "c", text: "Total income" }, { id: "d", text: "Total employment" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "AD", statement: "Total spending." }],
              steps: [{ reasoning: "AD = total spending in economy.", marks: 1, markCode: "M" }],
              finalAnswer: "Total spending",
            },
          },
          {
            id: "ciealecon-u2-ad-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are the components of AD?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "AD components", statement: "C+I+G+X-M." }],
              steps: [
                { reasoning: "Consumption, investment, government, net exports.", marks: 1, markCode: "M" },
                { reasoning: "C+I+G+(X-M) formula.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "C+I+G+(X-M)",
            },
          },
          {
            id: "ciealecon-u2-ad-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the multiplier effect?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Multiplier", statement: "Spending amplification." }],
              steps: [
                { reasoning: "Initial spending → income → more spending → larger effect.", marks: 1, markCode: "M" },
                { reasoning: "Multiplier > 1 amplifies impact.", marks: 1, markCode: "M" },
                { reasoning: "Depends on marginal propensity to consume.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Spending amplification",
            },
          },
          {
            id: "ciealecon-u2-ad-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define AD, AS, SRAS, LRAS, multiplier, stagflation. (b) What is AD? (c) What are AD components? (d) What is SRAS vs LRAS? (e) What causes AD shifts? (f) What causes AS shifts? (g) What is multiplier? (h) Evaluate effectiveness of demand management policies.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "AD/AS", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Total spending.", marks: 1, markCode: "M" },
                { reasoning: "(c) C+I+G+(X-M).", marks: 1, markCode: "M" },
                { reasoning: "(d) Sticky vs full employment.", marks: 1, markCode: "M" },
                { reasoning: "(e) Policy, confidence, exchange rates.", marks: 1, markCode: "M" },
                { reasoning: "(f) Technology, labour, resources.", marks: 1, markCode: "M" },
                { reasoning: "(g) Spending amplification.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "AD/AS analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u2-ad-notes", title: "AD/AS — notes",
      summary: "AD=C+I+G+(X-M). SRAS upward sloping, LRAS vertical at full employment.",
      sections: [
        { heading: "Key idea", body: "AD/AS determines short-run output and prices; LRAS determines long-run growth." },
        { heading: "Multiplier", body: "Initial spending change amplified through circular flow." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson424",
    lesson: {
      id: "ciealecon-u2-lesson-2-4", code: "2-4",
      title: "Macroeconomic Policies",
      goal: "I CAN explain fiscal, monetary and supply-side policies.",
      standards: ["Cambridge A Level Economics 9708", "Paper 2: policy"],
      vocabulary: [
        { term: "Fiscal policy", definition: "Government spending and taxation." },
        { term: "Monetary policy", definition: "Central bank interest rates and money supply." },
        { term: "Supply-side policy", definition: "Policies to increase productive capacity." },
        { term: "Expansionary policy", definition: "Policy to increase AD/growth." },
        { term: "Contractionary policy", definition: "Policy to reduce AD/inflation." },
        { term: "Policy conflict", definition: "When objectives cannot all be achieved." },
      ],
      concept: {
        id: "ciealecon-u2-s4-pol", title: "Macroeconomic policies",
        skill: "Evaluate policy effectiveness.",
        sections: [
          { heading: "Fiscal policy", body: "Expansionary: increase G, cut T → AD↑. Contractionary: reduce G, raise T → AD↓. Affects budget deficit/surplus. Crowding out possible." },
          { heading: "Monetary policy", body: "Interest rates: ↑ reduces borrowing/spending → AD↓, controls inflation. ↓ stimulates economy. Quantitative easing in extreme cases." },
          { heading: "Supply-side", body: "Increase LRAS: education/training, deregulation, privatisation, tax incentives, infrastructure. Long-term growth but slow effects." },
        ],
        keyFormulas: [
          { name: "Fiscal", statement: "G and T" },
          { name: "Monetary", statement: "interest rates" },
          { name: "Supply-side", statement: "LRAS increase" },
        ],
        workedExample: {
          problem: "High inflation + recession. Which policies conflict?",
          solution: "Contractionary fiscal/monetary reduces inflation but worsens recession. Supply-side can help long-term but slow. Policy conflict exists.",
        },
        questions: [
          {
            id: "ciealecon-u2-pol-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is fiscal policy?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Government spending and taxation" }, { id: "b", text: "Interest rates" }, { id: "c", text: "Money supply" }, { id: "d", text: "Trade policy" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Fiscal policy", statement: "G and T." }],
              steps: [{ reasoning: "Fiscal = government spending + taxation.", marks: 1, markCode: "M" }],
              finalAnswer: "Government spending/taxation",
            },
          },
          {
            id: "ciealecon-u2-pol-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is monetary policy?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Monetary policy", statement: "Interest rates." }],
              steps: [
                { reasoning: "Central bank interest rates and money supply.", marks: 1, markCode: "M" },
                { reasoning: "Used to control inflation and growth.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Interest rates/money supply",
            },
          },
          {
            id: "ciealecon-u2-pol-q3", difficulty: "core", totalMarks: 3,
            stem: "What is supply-side policy? Give examples.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Supply-side", statement: "LRAS increase." }],
              steps: [
                { reasoning: "Policies to increase productive capacity.", marks: 1, markCode: "M" },
                { reasoning: "Education, deregulation, privatisation, infrastructure.", marks: 1, markCode: "M" },
                { reasoning: "Long-term growth focus.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "LRAS increase examples",
            },
          },
          {
            id: "ciealecon-u2-pol-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define fiscal policy, monetary policy, supply-side policy, expansionary, contractionary, policy conflict. (b) What is fiscal policy? (c) What is monetary policy? (d) What is supply-side? (e) What is expansionary policy? (f) What is contractionary? (g) What is policy conflict? (h) Evaluate which policy is most effective for long-term growth.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Policies", statement: "Evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) G and T.", marks: 1, markCode: "M" },
                { reasoning: "(c) Interest rates.", marks: 1, markCode: "M" },
                { reasoning: "(d) LRAS increase.", marks: 1, markCode: "M" },
                { reasoning: "(e) Increase AD.", marks: 1, markCode: "M" },
                { reasoning: "(f) Reduce AD.", marks: 1, markCode: "M" },
                { reasoning: "(g) Conflicting objectives.", marks: 1, markCode: "M" },
                { reasoning: "(h) Supply-side best for long-term.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Macroeconomic policies.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u2-pol-notes", title: "Policies — notes",
      summary: "Fiscal=G+T. Monetary=interest rates. Supply-side=LRAS. Conflicts common.",
      sections: [
        { heading: "Key idea", body: "Demand policies affect short-run; supply-side affects long-run growth." },
        { heading: "Trade-offs", body: "Inflation vs unemployment, growth vs stability conflicts." },
      ],
    },
  },
];
