import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "econ-u4-lesson-5-3",
  code: "5-3",
  title: "Policy Conflicts and Supply-Side Policies",
  goal: "I CAN explain conflicts between policy objectives, distinguish demand-side from supply-side policies, and evaluate supply-side measures.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "Policy conflict", definition: "When achieving one macroeconomic objective makes another harder (e.g. low inflation vs low unemployment)." },
    { term: "Demand-side policies", definition: "Fiscal and monetary policies that manage aggregate demand." },
    { term: "Supply-side policies", definition: "Policies that increase the economy's productive capacity — shift AS right." },
    { term: "Deregulation", definition: "Removing government rules to make markets more flexible and competitive." },
    { term: "Labour market flexibility", definition: "Making hiring/firing and wage-setting easier — e.g. weaker unions, flexible contracts." },
    { term: "Supply-side shock", definition: "A sudden event shifting aggregate supply — e.g. oil price spike, pandemic." },
  ],
  concepts: [
    {
      id: "econ-u5-policy-conflicts",
      title: "Policy Conflicts",
      skill: "Explain the conflicts between macroeconomic objectives — inflation vs unemployment, growth vs inequality, and internal vs external balance.",
      lesson: {
        sections: [
          {
            heading: "Inflation vs unemployment",
            body: "The **Phillips curve** trade-off: reducing unemployment below the natural rate raises inflation (short run). Governments must choose: fight inflation (tight policy → higher unemployment) or fight unemployment (loose policy → higher inflation). This is the central macroeconomic dilemma.",
          },
          {
            heading: "Growth vs inequality vs environment",
            body: "Pursuing **economic growth** may worsen **income inequality** (growth benefits may concentrate at the top) or **environmental degradation** (pollution from production). Reducing inequality may require taxes/benefits that reduce incentives for growth. **Environmental goals** may conflict with short-term growth. Trade-offs are unavoidable — policy priorities matter.",
          },
          {
            heading: "Internal vs external balance",
            body: "**Internal balance** = low unemployment + stable prices. **External balance** = sustainable current account (trade balance). Policies may conflict: expansionary policy boosts growth but may worsen the trade deficit (higher incomes → more imports). The **impossible trinity** means countries can't have all three of: free capital flows, fixed exchange rate, independent monetary policy.",
          },
        ],
        keyFormulas: [
          { name: "Core conflict", statement: "Low inflation vs low unemployment (Phillips curve)" },
          { name: "Other conflicts", statement: "Growth vs inequality; growth vs environment; internal vs external balance" },
          { name: "Impossible trinity", statement: "Free capital + fixed FX + independent monetary policy — pick two" },
        ],
        workedExample: {
          problem: "A government cuts taxes to boost growth, but this worsens the budget deficit and may increase inequality. Explain the conflict.",
          solution: "Tax cuts boost AD and growth (objective 1) but reduce government revenue → deficit (fiscal objective conflict) and may benefit high earners more → inequality (distributional conflict).",
        },
      },
      questions: [
        {
          id: "econ-u5-l53c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The main conflict between macroeconomic objectives is between:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low inflation and low unemployment" },
              { id: "b", text: "Government spending and taxation" },
              { id: "c", text: "Growth and employment" },
              { id: "d", text: "Exports and imports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Policy conflict", statement: "Phillips curve: low inflation vs low unemployment trade-off." },
            ],
            steps: [
              { reasoning: "The Phillips curve trade-off between inflation and unemployment is the central conflict.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Low inflation and low unemployment",
            commonErrors: ["Thinking all objectives can be achieved simultaneously."],
          },
        },
        {
          id: "econ-u5-l53c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why pursuing economic growth may conflict with reducing income inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth-inequality conflict", statement: "Growth benefits may concentrate at the top; redistribution may reduce incentives." },
            ],
            steps: [
              { reasoning: "Growth driven by capital/technology may reward asset owners more than workers.", marks: 1, markCode: "M" },
              { reasoning: "Trickle-down is not automatic — growth can widen gaps.", marks: 1, markCode: "M" },
              { reasoning: "Redistribution (progressive taxes, benefits) may reduce work/investment incentives — trade-off.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth may benefit the rich disproportionately; redistribution may reduce incentives — a genuine trade-off.",
            commonErrors: ["Assuming growth automatically reduces inequality — evidence is mixed."],
          },
        },
        {
          id: "econ-u5-l53c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how expansionary fiscal policy can conflict with external balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Internal vs external balance", statement: "Expansion boosts growth but may worsen trade deficit." },
            ],
            steps: [
              { reasoning: "Expansionary policy (more G or less T) raises incomes and AD.", marks: 1, markCode: "M" },
              { reasoning: "Higher incomes → more consumption → more imports.", marks: 1, markCode: "M" },
              { reasoning: "Also higher AD may appreciate the currency → exports less competitive.", marks: 1, markCode: "R" },
              { reasoning: "Result: trade deficit worsens — internal balance achieved at cost of external balance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expansion → higher incomes → more imports → worse trade deficit → internal/external conflict.",
            commonErrors: ["Ignoring the exchange rate and import channels."],
          },
        },
        {
          id: "econ-u5-l53c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the conflicts between a government's macroeconomic objectives and how they might be managed.",
          parts: [
            { label: "a", prompt: "Identify two pairs of conflicting objectives.", marks: 2 },
            { label: "b", prompt: "Explain why each conflict arises.", marks: 3 },
            { label: "c", prompt: "Evaluate how governments can balance competing objectives.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Objective conflicts", statement: "Inflation vs unemployment; growth vs inequality; internal vs external balance." },
            ],
            steps: [
              { part: "a", reasoning: "Any two: inflation vs unemployment; growth vs inequality; internal vs external balance; growth vs environment.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Inflation vs unemployment: Phillips curve — tight policy fights one, worsens other.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Growth vs inequality: growth benefits may concentrate; redistribution may reduce incentives.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Internal vs external: expansion raises incomes → more imports → worse trade balance.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Policy mix: combine demand-side (AD management) with supply-side (capacity growth).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Supply-side policies can reduce inflation AND unemployment simultaneously — win-win.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: conflicts can't be eliminated but can be managed through policy sequencing and supply-side reform.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Inflation/unemployment, growth/inequality, internal/external. (b) Phillips curve, distributional effects, import leakage. (c) Policy mix + supply-side can ease conflicts.",
            commonErrors: ["Claiming all objectives can be met at once — trade-offs are inherent."],
          },
        },
        {
          id: "econ-u5-l53c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Phillips curve shows a trade-off between:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saving and investment" },
              { id: "b", text: "Economic growth and inflation" },
              { id: "c", text: "Inflation and unemployment" },
              { id: "d", text: "Exports and imports" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phillips curve", statement: "Short-run trade-off between inflation and unemployment." },
            ],
            steps: [
              { reasoning: "The Phillips curve relates the inflation rate to the unemployment rate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Inflation and unemployment",
            commonErrors: ["Confusing the Phillips curve with the AD-AS trade-off."],
          },
        },
        {
          id: "econ-u5-l53c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Internal balance' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High GDP growth at any cost" },
              { id: "b", text: "Low unemployment and stable prices" },
              { id: "c", text: "A trade surplus" },
              { id: "d", text: "A balanced government budget" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Internal balance", statement: "Low unemployment plus stable prices — full employment without inflation." },
            ],
            steps: [
              { reasoning: "Internal balance means the domestic economy is at full employment with stable prices.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Low unemployment and stable prices",
            commonErrors: ["Confusing internal balance with external balance (trade)."],
          },
        },
        {
          id: "econ-u5-l53c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A conflict between economic growth and environmental goals arises because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increased production may cause pollution and resource depletion" },
              { id: "b", text: "Environmental policy has no costs" },
              { id: "c", text: "Growth always reduces pollution" },
              { id: "d", text: "Growth is impossible to achieve" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth-environment conflict", statement: "Production and consumption generate external costs such as pollution." },
            ],
            steps: [
              { reasoning: "More output means more production and consumption, which can degrade the environment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Increased production may cause pollution and resource depletion",
            commonErrors: ["Assuming growth and environment are always compatible."],
          },
        },
        {
          id: "econ-u5-l53c1q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "In the long run, the Phillips curve is vertical, which implies:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand management policy is always effective" },
              { id: "b", text: "Low inflation always means high unemployment" },
              { id: "c", text: "Any inflation rate is possible at the natural rate of unemployment" },
              { id: "d", text: "Economic growth must stop" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Long-run Phillips curve", statement: "Vertical at the natural rate — no permanent inflation-unemployment trade-off." },
            ],
            steps: [
              { reasoning: "Once expectations adjust, unemployment returns to the natural rate regardless of inflation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Any inflation rate is possible at the natural rate of unemployment",
            commonErrors: ["Thinking the inflation-unemployment trade-off persists in the long run."],
          },
        },
        {
          id: "econ-u5-l53c1q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The consumer price index rises from 100 to 104 in one year. Calculate the rate of inflation.",
          response: {
            type: "numeric",
            parts: [{ label: "Inflation rate (%)", answer: 4, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inflation rate", statement: "$\\text{Inflation} = \\frac{CPI_{new} - CPI_{old}}{CPI_{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Inflation = (104 − 100)/100 × 100.", working: "\\frac{104-100}{100} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "= 4/100 × 100 = 4%.", marks: 1, markCode: "M" },
              { reasoning: "Inflation rate = 4%.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4%",
            commonErrors: ["Using 104 as the denominator instead of 100."],
          },
        },
        {
          id: "econ-u5-l53c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The consumer price index rises from 120 to 126. Calculate the rate of inflation.",
          response: {
            type: "numeric",
            parts: [{ label: "Inflation rate (%)", answer: 5, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inflation rate", statement: "$\\text{Inflation} = \\frac{CPI_{new} - CPI_{old}}{CPI_{old}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Inflation = (126 − 120)/120 × 100 = 6/120 × 100.", working: "\\frac{126-120}{120} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "= 5%.", marks: 1, markCode: "M" },
              { reasoning: "Inflation rate = 5%.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5%",
            commonErrors: ["Using 126 as the denominator instead of 120."],
          },
        },
        {
          id: "econ-u5-l53c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why low unemployment and low inflation can conflict with each other in the short run.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phillips curve trade-off", statement: "Pushing unemployment below the natural rate raises inflation in the short run." },
            ],
            steps: [
              { reasoning: "Expansionary policy raises AD to reduce unemployment.", marks: 1, markCode: "M" },
              { reasoning: "Higher AD bids up wages and prices as firms compete for workers and output.", marks: 1, markCode: "M" },
              { reasoning: "Rising wages increase costs; rising demand increases prices — inflation rises.", marks: 1, markCode: "M" },
              { reasoning: "So lowering unemployment below the natural rate trades higher inflation for lower unemployment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expansion → lower unemployment but higher wages/prices → inflation rises (Phillips trade-off).",
            commonErrors: ["Ignoring the wage-price spiral mechanism."],
          },
        },
        {
          id: "econ-u5-l53c1q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain what is meant by 'external balance' and why achieving it may conflict with internal balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "External balance", statement: "A sustainable current account — trade flows that do not build up debt or reserves." },
            ],
            steps: [
              { reasoning: "External balance means a sustainable current account position.", marks: 1, markCode: "M" },
              { reasoning: "Expansionary policy raises incomes → higher consumption → more imports.", marks: 1, markCode: "M" },
              { reasoning: "Higher AD may also appreciate the currency, weakening export competitiveness.", marks: 1, markCode: "M" },
              { reasoning: "Result: internal balance achieved at the cost of a worse trade balance — the two conflict.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "External balance = sustainable current account; expansion helps internal balance but worsens the trade balance.",
            commonErrors: ["Ignoring the import and exchange-rate channels."],
          },
        },
        {
          id: "econ-u5-l53c1q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain the conflict between environmental goals and economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth-environment trade-off", statement: "Production generates pollution and resource use; green policies may cost output." },
            ],
            steps: [
              { reasoning: "Higher output requires more production and consumption.", marks: 1, markCode: "M" },
              { reasoning: "This increases emissions, waste and resource depletion — environmental costs.", marks: 1, markCode: "M" },
              { reasoning: "Conversely, strict environmental regulation may raise business costs and slow growth.", marks: 1, markCode: "M" },
              { reasoning: "So short-run growth and environmental protection can conflict — though green growth may reconcile them long-run.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth raises output but also pollution/resource use; environmental rules may slow growth — a genuine trade-off.",
            commonErrors: ["Claiming there is no conflict — external costs are real."],
          },
        },
        {
          id: "econ-u5-l53c1q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the trade-off between inflation and unemployment.",
          parts: [
            { label: "a", prompt: "Explain the Phillips curve trade-off in the short run.", marks: 3 },
            { label: "b", prompt: "Explain why the trade-off may disappear in the long run.", marks: 2 },
            { label: "c", prompt: "Evaluate how a government should respond when both inflation and unemployment are high.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inflation-unemployment trade-off", statement: "Short-run Phillips trade-off; long-run vertical at the natural rate; supply shocks create stagflation." },
            ],
            steps: [
              { part: "a", reasoning: "Expansionary policy cuts unemployment but bids up wages and prices → inflation rises.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Contractionary policy cuts inflation but raises unemployment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The short-run Phillips curve slopes downward — a genuine trade-off.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Wage and price expectations adjust over time.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Unemployment returns to the natural rate — the long-run Phillips curve is vertical.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "High inflation + high unemployment (stagflation) suggests a supply-side problem.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Demand-side policy cannot fix both — supply-side policies or supply shocks must be addressed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: policy must identify the cause — demand-pull needs AD management; cost-push needs supply-side action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Short-run trade-off via AD. (b) Expectations adjust — long-run vertical. (c) Stagflation needs supply-side response.",
            commonErrors: ["Applying demand-side policy to cost-push inflation."],
          },
        },
        {
          id: "econ-u5-l53c1q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'External balance' is achieved when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The current account position is sustainable" },
              { id: "b", text: "Unemployment equals the natural rate" },
              { id: "c", text: "Inflation is exactly zero" },
              { id: "d", text: "The budget is balanced" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "External balance", statement: "A sustainable current account — no growing debt or reserve imbalances." },
            ],
            steps: [
              { reasoning: "External balance concerns the trade/current account sustainability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The current account position is sustainable",
            commonErrors: ["Confusing external balance with internal balance."],
          },
        },
        {
          id: "econ-u5-l53c1q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "According to the impossible trinity, a country with free capital flows and a fixed exchange rate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Must abandon all international trade" },
              { id: "b", text: "Cannot conduct fully independent monetary policy" },
              { id: "c", text: "Can have all three simultaneously" },
              { id: "d", text: "Can still set interest rates freely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Impossible trinity", statement: "Free capital flow + fixed FX + independent monetary policy — pick two." },
            ],
            steps: [
              { reasoning: "Fixing two elements forces giving up the third — monetary independence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cannot conduct fully independent monetary policy",
            commonErrors: ["Thinking the trinity can be fully satisfied."],
          },
        },
      ],
    },
    {
      id: "econ-u5-supply-side",
      title: "Supply-Side Policies",
      skill: "Distinguish demand-side from supply-side policies and evaluate labour market, product market and incentive-based supply-side measures.",
      lesson: {
        sections: [
          {
            heading: "Demand-side vs supply-side",
            body: "**Demand-side policies** (fiscal + monetary) manage AD — shift the AD curve. **Supply-side policies** increase the economy's **productive capacity** — shift AS right, allowing more output without inflation. Supply-side policies aim for **non-inflationary growth**: more output at the same or lower price level.",
          },
          {
            heading: "Labour market policies",
            body: "**Deregulation** of labour markets (easier hiring/firing, weaker union power, flexible contracts) increases flexibility. **Education and training** raise skills/human capital. **Reducing unemployment benefits or welfare** may increase work incentives (controversial). **Reducing income tax** (especially for low earners) can boost labour supply — the **Laffer curve** suggests there may be an optimal tax rate.",
          },
          {
            heading: "Product market and incentives",
            body: "**Privatisation** (selling state assets to private firms) aims for efficiency. **Deregulation** of product markets increases competition. **Lower corporation tax** encourages investment. **Reducing red tape** lowers business costs. **Infrastructure investment** (transport, digital) raises capacity. Critics argue supply-side policies take time, may worsen inequality, and benefits are uncertain.",
          },
        ],
        keyFormulas: [
          { name: "Supply-side aim", statement: "Shift AS right → more output without inflation" },
          { name: "Key policies", statement: "Deregulation + education + tax incentives + privatisation + infrastructure" },
        ],
        workedExample: {
          problem: "A government cuts corporation tax to encourage investment. How does this differ from cutting income tax?",
          solution: "Corporation tax cut → lower business costs → more investment → AS shifts right (supply-side). Income tax cut → higher disposable income → more consumption → AD shifts right (demand-side). Different mechanisms and effects.",
        },
      },
      questions: [
        {
          id: "econ-u5-l53c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Supply-side policies aim to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower interest rates" },
              { id: "b", text: "Increase aggregate demand" },
              { id: "c", text: "Reduce the money supply" },
              { id: "d", text: "Increase productive capacity (shift AS right)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Supply-side policies", statement: "Policies that increase productive capacity — shift AS right." },
            ],
            steps: [
              { reasoning: "Supply-side policies increase AS capacity, allowing more output without inflation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Increase productive capacity (shift AS right)",
            commonErrors: ["Confusing supply-side (AS) with demand-side (AD) policies."],
          },
        },
        {
          id: "econ-u5-l53c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how education and training act as a supply-side policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Human capital and supply-side", statement: "Skills raise productivity → AS shifts right." },
            ],
            steps: [
              { reasoning: "Education/training raise workers' skills and human capital.", marks: 1, markCode: "M" },
              { reasoning: "Higher-skilled workers are more productive — output per hour rises.", marks: 1, markCode: "M" },
              { reasoning: "Greater productivity increases productive capacity — AS shifts right, enabling non-inflationary growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Education → skills → productivity → AS right → non-inflationary growth.",
            commonErrors: ["Treating education as only a demand-side policy — it primarily affects supply."],
          },
        },
        {
          id: "econ-u5-l53c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A government deregulates the labour market, making it easier for firms to hire and fire workers. Explain the intended supply-side effects and potential problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Labour market deregulation", statement: "Flexibility increases employment and productivity but may reduce job security." },
            ],
            steps: [
              { reasoning: "Easier hiring → firms more willing to expand → employment rises.", marks: 1, markCode: "M" },
              { reasoning: "Easier firing → firms can adjust quickly to changing demand → efficiency rises.", marks: 1, markCode: "M" },
              { reasoning: "Lower labour costs and greater flexibility → AS shifts right.", marks: 1, markCode: "R" },
              { reasoning: "Potential problems: job insecurity, lower wages, reduced worker bargaining power, inequality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flexibility → more hiring/firing → efficiency up, AS right; but job insecurity and inequality risks.",
            commonErrors: ["Ignoring the distributional costs of deregulation."],
          },
        },
        {
          id: "econ-u5-l53c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate supply-side policies as a means of achieving non-inflationary economic growth.",
          parts: [
            { label: "a", prompt: "Explain how supply-side policies differ from demand-side policies.", marks: 2 },
            { label: "b", prompt: "Describe two supply-side policies and how they increase capacity.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness and limitations of supply-side policies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supply-side vs demand-side", statement: "Demand-side manages AD; supply-side increases productive capacity (AS)." },
            ],
            steps: [
              { part: "a", reasoning: "Demand-side (fiscal/monetary) shifts AD; supply-side shifts AS right.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Supply-side enables more output without inflationary pressure.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Education/training: raises human capital → productivity → AS right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Deregulation/privatisation: increases competition and efficiency → AS right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Tax incentives for investment: lower costs → more capital → AS right.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefits: sustainable growth, lower inflation, improved competitiveness.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Limitations: long time lags, uncertain effects, may worsen inequality, costly to implement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: essential for long-run growth but slow and uncertain — combine with demand management.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Demand-side = AD; supply-side = AS capacity. (b) Education, deregulation, tax incentives. (c) Sustainable but slow/uncertain.",
            commonErrors: ["Expecting immediate results — supply-side policies take years."],
          },
        },
        {
          id: "econ-u5-l53c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Supply-side policies primarily aim to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase productive capacity — shift AS to the right" },
              { id: "b", text: "Set interest rates" },
              { id: "c", text: "Shift aggregate demand to the left" },
              { id: "d", text: "Reduce the money supply" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Supply-side policies", statement: "Policies increasing productive capacity — shift AS right." },
            ],
            steps: [
              { reasoning: "Supply-side policies expand the economy's capacity to produce.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Increase productive capacity — shift AS to the right",
            commonErrors: ["Confusing supply-side (AS) with demand-side (AD) policies."],
          },
        },
        {
          id: "econ-u5-l53c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of a supply-side policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing government transfers" },
              { id: "b", text: "Investing in education and training" },
              { id: "c", text: "Raising interest rates" },
              { id: "d", text: "Cutting corporation tax to boost consumption" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supply-side policies", statement: "Education, deregulation, tax incentives, privatisation, infrastructure." },
            ],
            steps: [
              { reasoning: "Education raises skills and productivity — expanding capacity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Investing in education and training",
            commonErrors: ["Choosing demand-side measures like transfers or rate changes."],
          },
        },
        {
          id: "econ-u5-l53c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Labour market deregulation as a supply-side policy involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introducing more employment protection rules" },
              { id: "b", text: "Removing barriers so markets are more flexible and competitive" },
              { id: "c", text: "Raising corporation tax" },
              { id: "d", text: "Nationalising private firms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Deregulation", statement: "Removing government rules to make markets more flexible and competitive." },
            ],
            steps: [
              { reasoning: "Deregulation removes restrictions on hiring, firing and entry.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Removing barriers so markets are more flexible and competitive",
            commonErrors: ["Thinking deregulation adds rules — it removes them."],
          },
        },
        {
          id: "econ-u5-l53c2q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The Laffer curve suggests that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There may be an optimal tax rate beyond which higher taxes reduce revenue via weaker incentives" },
              { id: "b", text: "Taxes do not affect behaviour" },
              { id: "c", text: "Government revenue is fixed regardless of tax rates" },
              { id: "d", text: "Tax cuts always reduce government revenue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Laffer curve", statement: "Tax revenue rises with rates up to a point, then falls as incentives weaken." },
            ],
            steps: [
              { reasoning: "Very high tax rates can reduce work and investment effort, shrinking the tax base.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** There may be an optimal tax rate beyond which higher taxes reduce revenue via weaker incentives",
            commonErrors: ["Thinking tax cuts always raise or always lower revenue."],
          },
        },
        {
          id: "econ-u5-l53c2q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "After a supply-side reform, output per worker rises from 40 units to 50 units. Calculate the percentage increase in productivity.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage increase (%)", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\Delta = \\frac{new - old}{old} \\times 100$" },
            ],
            steps: [
              { reasoning: "% increase = (50 − 40)/40 × 100.", working: "\\frac{50-40}{40} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "= 10/40 × 100 = 25%.", marks: 1, markCode: "M" },
              { reasoning: "Productivity rises by 25%.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Dividing by 50 instead of 40."],
          },
        },
        {
          id: "econ-u5-l53c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A firm's output rises from $800m to $920m following labour market deregulation. Calculate the percentage increase in output.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage increase (%)", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\%\\Delta = \\frac{new - old}{old} \\times 100$" },
            ],
            steps: [
              { reasoning: "% increase = (920 − 800)/800 × 100 = 120/800 × 100.", working: "\\frac{920-800}{800} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "= 15%.", marks: 1, markCode: "M" },
              { reasoning: "Output rises by 15%.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15%",
            commonErrors: ["Dividing by 920 instead of 800."],
          },
        },
        {
          id: "econ-u5-l53c2q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how privatisation can act as a supply-side policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Privatisation", statement: "Selling state assets to private firms aims to improve efficiency and productive capacity." },
            ],
            steps: [
              { reasoning: "Privatisation transfers state-owned enterprises to private ownership.", marks: 1, markCode: "M" },
              { reasoning: "Private firms face profit incentives and competition — improving efficiency.", marks: 1, markCode: "M" },
              { reasoning: "Higher efficiency lowers costs and raises output per worker.", marks: 1, markCode: "M" },
              { reasoning: "Greater productive capacity shifts AS right — enabling non-inflationary growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Privatisation → profit incentives/competition → efficiency → AS right → non-inflationary growth.",
            commonErrors: ["Ignoring that privatisation may reduce competition if it creates monopolies."],
          },
        },
        {
          id: "econ-u5-l53c2q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how a cut in corporation tax can increase an economy's productive capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Corporate tax incentives", statement: "Lower corporation tax raises after-tax profits → more investment → greater capacity." },
            ],
            steps: [
              { reasoning: "Lower corporation tax raises firms' after-tax profits.", marks: 1, markCode: "M" },
              { reasoning: "Higher retained profits encourage more investment in capital and technology.", marks: 1, markCode: "M" },
              { reasoning: "More capital per worker raises labour productivity.", marks: 1, markCode: "M" },
              { reasoning: "Greater capacity shifts AS right — more output without inflation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Corporation tax cut → higher profits → more investment → productivity up → AS right.",
            commonErrors: ["Confusing it with income tax cuts (which mainly affect AD)."],
          },
        },
        {
          id: "econ-u5-l53c2q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why supply-side policies may worsen income inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supply-side distributional effects", statement: "Deregulation and tax cuts can benefit capital/owners more than workers." },
            ],
            steps: [
              { reasoning: "Lower corporation tax and deregulation mainly benefit firms and asset owners.", marks: 1, markCode: "M" },
              { reasoning: "Labour market flexibility may weaken unions and bargaining power.", marks: 1, markCode: "M" },
              { reasoning: "Weaker job security and lower wages for unskilled workers can widen gaps.", marks: 1, markCode: "M" },
              { reasoning: "Wealth from privatisation and asset gains may concentrate at the top.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Supply-side gains often flow to capital owners; weaker labour protections can worsen inequality.",
            commonErrors: ["Assuming supply-side policies are distributionally neutral."],
          },
        },
        {
          id: "econ-u5-l53c2q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of supply-side policies to achieve non-inflationary growth.",
          parts: [
            { label: "a", prompt: "Explain how a rightward shift in aggregate supply enables non-inflationary growth.", marks: 3 },
            { label: "b", prompt: "Describe two supply-side policies and how each increases capacity.", marks: 2 },
            { label: "c", prompt: "Evaluate the limitations of relying on supply-side policies for growth.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supply-side growth", statement: "AS right → more output at same/lower prices; but policies are slow and uncertain." },
            ],
            steps: [
              { part: "a", reasoning: "Supply-side policies increase productive capacity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "AS shifts right — more output can be produced at each price level.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Output rises without demand exceeding supply — so growth without inflation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Any two: education/training (human capital), deregulation/privatisation (efficiency), tax incentives (investment), infrastructure (capacity).", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Long time lags — benefits take years to materialise.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Effects are uncertain — may not raise capacity as expected; may worsen inequality.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: essential for long-run sustainable growth but slow and uncertain — best combined with demand management.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) AS right → more output without inflation. (b) Education, deregulation, tax incentives, infrastructure. (c) Slow, uncertain, may worsen inequality.",
            commonErrors: ["Expecting immediate results from supply-side policies."],
          },
        },
        {
          id: "econ-u5-l53c2q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'Non-inflationary growth' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Growth funded entirely by government borrowing" },
              { id: "b", text: "Rising output without a rising price level" },
              { id: "c", text: "Falling unemployment with no output change" },
              { id: "d", text: "Growth with permanently zero inflation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-inflationary growth", statement: "More output without increasing the price level — enabled by supply-side policies." },
            ],
            steps: [
              { reasoning: "Non-inflationary growth means output rises while prices stay stable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rising output without a rising price level",
            commonErrors: ["Thinking it requires literally zero inflation."],
          },
        },
        {
          id: "econ-u5-l53c2q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how investment in infrastructure (transport, digital networks) acts as a supply-side policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Infrastructure and capacity", statement: "Better infrastructure lowers business costs and raises productivity." },
            ],
            steps: [
              { reasoning: "Infrastructure investment improves transport and communications.", marks: 1, markCode: "M" },
              { reasoning: "This lowers firms' costs and reduces delays in production and distribution.", marks: 1, markCode: "M" },
              { reasoning: "Higher efficiency raises output per worker — productivity increases.", marks: 1, markCode: "M" },
              { reasoning: "Greater productive capacity shifts AS right — supporting non-inflationary growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Infrastructure → lower costs/higher efficiency → productivity up → AS right → non-inflationary growth.",
            commonErrors: ["Treating infrastructure as only a demand-side injection."],
          },
        },
      ],
    },
  ],
};
