import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "econ-u4-lesson-5-2",
  code: "5-2",
  title: "Monetary Policy",
  goal: "I CAN explain how central banks use interest rates, money supply and quantitative easing to influence aggregate demand, and evaluate monetary policy.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "Monetary policy", definition: "Central bank actions to control interest rates and the money supply to influence AD and inflation." },
    { term: "Interest rate", definition: "The price of borrowing money — the main tool of monetary policy." },
    { term: "Base rate / policy rate", definition: "The interest rate set by the central bank that anchors all other interest rates." },
    { term: "Quantitative easing (QE)", definition: "Central bank purchases of government bonds/assets to inject money into the economy when rates are near zero." },
    { term: "Money supply", definition: "The total quantity of money in the economy." },
    { term: "Inflation targeting", definition: "A monetary policy framework where the central bank aims to keep inflation at a set rate (e.g. 2%)." },
  ],
  concepts: [
    {
      id: "econ-u5-monetary-tools",
      title: "Monetary Policy Tools",
      skill: "Explain how interest rates, money supply and quantitative easing affect aggregate demand and inflation.",
      lesson: {
        sections: [
          {
            heading: "Interest rates",
            body: "The central bank sets the **base rate** — the rate at which it lends to commercial banks. This anchors all other interest rates. **Higher rates**: borrowing becomes expensive, saving more attractive → C and I fall → AD decreases → inflation falls but unemployment may rise. **Lower rates**: cheaper borrowing, less saving incentive → C and I rise → AD increases → growth and jobs, but inflation risk.",
          },
          {
            heading: "Money supply",
            body: "The central bank can influence the **money supply** through open market operations (buying/selling government bonds). Buying bonds injects money → more lending → higher AD. The **quantity theory of money** ($MV = PY$) suggests that if money supply (M) grows faster than output (Y), prices (P) must rise — the monetarist view linking money growth to inflation.",
          },
          {
            heading: "Quantitative easing",
            body: "When interest rates reach near zero (the **zero lower bound**), conventional policy loses effectiveness. **QE** involves the central bank creating money to buy government bonds and other assets — lowering long-term interest rates, boosting asset prices and encouraging lending and spending. Used after the 2008 crisis and COVID-19. Risks: asset bubbles, inequality (rich gain from asset prices), future inflation.",
          },
        ],
        keyFormulas: [
          { name: "Interest rate effect", statement: "Rates up → AD down (less C, I); rates down → AD up" },
          { name: "Quantity theory", statement: "$MV = PY$ — money growth → inflation if output unchanged" },
          { name: "QE", statement: "Central bank buys assets → injects money → lowers long-term rates" },
        ],
        workedExample: {
          problem: "The central bank raises the base rate from 0.5% to 5%. Explain the effect on a household considering a mortgage.",
          solution: "Higher rates make mortgage repayments more expensive → fewer people buy homes → consumption falls → AD decreases → inflationary pressure eases but growth may slow.",
        },
      },
      questions: [
        {
          id: "econ-u5-l52c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If the central bank raises interest rates, the likely effect on aggregate demand is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "AD decreases" },
              { id: "b", text: "AD increases" },
              { id: "c", text: "AD is unchanged" },
              { id: "d", text: "Only investment increases" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interest rate and AD", statement: "Higher rates reduce borrowing and encourage saving → lower C and I → lower AD." },
            ],
            steps: [
              { reasoning: "Higher rates reduce consumption and investment, lowering AD.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** AD decreases",
            commonErrors: ["Thinking higher rates stimulate the economy — they contract it."],
          },
        },
        {
          id: "econ-u5-l52c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what quantitative easing is and when it is used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quantitative easing", statement: "Central bank purchases of assets to inject money when rates are near zero." },
            ],
            steps: [
              { reasoning: "QE = central bank creates money to buy government bonds and assets.", marks: 1, markCode: "M" },
              { reasoning: "Used when interest rates hit the zero lower bound and conventional policy fails.", marks: 1, markCode: "M" },
              { reasoning: "Lowers long-term rates, boosts asset prices and lending — stimulates AD.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "QE = asset purchases to inject money; used when rates near zero to stimulate AD.",
            commonErrors: ["Confusing QE with normal interest rate cuts — QE is for when rates can't go lower."],
          },
        },
        {
          id: "econ-u5-l52c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Using the quantity theory of money (MV = PY), explain why rapid money supply growth can cause inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quantity theory of money", statement: "$MV = PY$ — money × velocity = price × output." },
            ],
            steps: [
              { reasoning: "M = money supply, V = velocity, P = price level, Y = real output.", marks: 1, markCode: "M" },
              { reasoning: "If M grows faster than Y (output), and V is stable, P must rise to balance the equation.", marks: 1, markCode: "M" },
              { reasoning: "More money chasing the same output → demand-pull inflation.", marks: 1, markCode: "R" },
              { reasoning: "This is the monetarist argument for controlling money supply growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "If M grows faster than Y, prices must rise — money growth causes inflation (ceteris paribus).",
            commonErrors: ["Ignoring that V and Y can also change — the theory assumes they're stable."],
          },
        },
        {
          id: "econ-u5-l52c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of interest rate policy by a central bank targeting 2% inflation.",
          parts: [
            { label: "a", prompt: "Explain how interest rates are used to control inflation.", marks: 3 },
            { label: "b", prompt: "Explain the limitations of interest rate policy.", marks: 2 },
            { label: "c", prompt: "Evaluate whether 2% is an appropriate inflation target.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inflation targeting", statement: "Central bank adjusts rates to keep inflation at target." },
            ],
            steps: [
              { part: "a", reasoning: "Above target: raise rates → less C/I → lower AD → less inflation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Below target: cut rates → more C/I → higher AD → more inflation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear, rules-based framework anchors expectations.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zero lower bound: can't cut rates below zero — need QE instead.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Time lags: policy takes 1-2 years to affect inflation fully.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "2% gives buffer against deflation and allows real rate cuts in recessions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But may be too low for some economies or ignore asset price inflation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: 2% is a reasonable compromise — low enough to avoid inflation costs, high enough to avoid deflation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Rates adjust to steer AD toward inflation target. (b) Zero bound + lags. (c) 2% balances deflation buffer vs inflation costs.",
            commonErrors: ["Ignoring the zero lower bound constraint."],
          },
        },
        {
          id: "econ-u5-l52c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'base rate' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rate of corporation tax" },
              { id: "b", text: "The rate of inflation" },
              { id: "c", text: "The rate at which the central bank lends to commercial banks" },
              { id: "d", text: "The exchange rate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Base rate", statement: "The interest rate set by the central bank that anchors all other interest rates." },
            ],
            steps: [
              { reasoning: "The base rate is the central bank's lending rate to commercial banks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The rate at which the central bank lends to commercial banks",
            commonErrors: ["Confusing the base rate with inflation or the exchange rate."],
          },
        },
        {
          id: "econ-u5-l52c1q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If the central bank cuts interest rates, the likely effect on aggregate demand is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only exports increase" },
              { id: "b", text: "AD increases as consumption and investment rise" },
              { id: "c", text: "AD is unchanged" },
              { id: "d", text: "AD decreases as borrowing falls" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interest rates and AD", statement: "Lower rates → cheaper borrowing → higher C and I → higher AD." },
            ],
            steps: [
              { reasoning: "Lower rates make borrowing cheaper and saving less attractive, raising C and I.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** AD increases as consumption and investment rise",
            commonErrors: ["Thinking lower rates reduce AD — they stimulate it."],
          },
        },
        {
          id: "econ-u5-l52c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Quantitative easing is most likely to be used when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The government wants to run a budget surplus" },
              { id: "b", text: "Interest rates are near zero and conventional policy is ineffective" },
              { id: "c", text: "Exports are falling sharply" },
              { id: "d", text: "Inflation is very high" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quantitative easing", statement: "Asset purchases to inject money when rates hit the zero lower bound." },
            ],
            steps: [
              { reasoning: "QE is an unconventional tool for when rates cannot be cut further.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Interest rates are near zero and conventional policy is ineffective",
            commonErrors: ["Using QE as a response to high inflation — it is a stimulus tool."],
          },
        },
        {
          id: "econ-u5-l52c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "According to the quantity theory of money ($MV = PY$), if the money supply grows faster than real output while velocity is constant, then:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The price level falls" },
              { id: "b", text: "The price level rises — demand-pull inflation" },
              { id: "c", text: "Velocity of money rises" },
              { id: "d", text: "Real output must fall" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quantity theory of money", statement: "$MV = PY$ — faster M growth than Y growth causes inflation." },
            ],
            steps: [
              { reasoning: "With V and Y stable, P must rise to balance MV = PY when M grows faster.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The price level rises — demand-pull inflation",
            commonErrors: ["Forgetting that P adjusts to keep the equation balanced."],
          },
        },
        {
          id: "econ-u5-l52c1q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Using the quantity theory of money ($MV = PY$), calculate the price level when the money supply is $500bn, the velocity of money is 4, and real output is $1,000bn.",
          response: {
            type: "numeric",
            parts: [{ label: "Price level", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quantity theory of money", statement: "$P = \\frac{MV}{Y}$" },
            ],
            steps: [
              { reasoning: "P = MV/Y = (500 × 4)/1000.", working: "P = \\frac{500 \\times 4}{1000}", marks: 1, markCode: "M" },
              { reasoning: "P = 2000/1000 = 2.", working: "P = \\frac{2000}{1000} = 2", marks: 1, markCode: "M" },
              { reasoning: "Price level = 2 (i.e. twice the base-year level).", marks: 1, markCode: "A" },
              { reasoning: "Answer stated as a price index level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P = 2",
            commonErrors: ["Dividing Y by MV instead of MV by Y."],
          },
        },
        {
          id: "econ-u5-l52c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "If the money supply grows by 10% and real output grows by 4%, while the velocity of money is constant, estimate the resulting inflation rate.",
          response: {
            type: "numeric",
            parts: [{ label: "Inflation rate (%)", answer: 6, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quantity theory approximation", statement: "Inflation ≈ money supply growth − output growth (when V is constant)." },
            ],
            steps: [
              { reasoning: "With V constant, %ΔP ≈ %ΔM − %ΔY.", marks: 1, markCode: "M" },
              { reasoning: "Inflation ≈ 10% − 4% = 6%.", working: "10 - 4 = 6", marks: 1, markCode: "M" },
              { reasoning: "Estimated inflation = 6%.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6%",
            commonErrors: ["Adding the growth rates instead of subtracting."],
          },
        },
        {
          id: "econ-u5-l52c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how an increase in interest rates reduces aggregate demand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interest rates and AD", statement: "Higher rates reduce borrowing and encourage saving → lower C and I → lower AD." },
            ],
            steps: [
              { reasoning: "Higher rates make borrowing more expensive for households and firms.", marks: 1, markCode: "M" },
              { reasoning: "Saving becomes more attractive relative to spending.", marks: 1, markCode: "M" },
              { reasoning: "Consumption (C) and investment (I) both fall.", marks: 1, markCode: "M" },
              { reasoning: "Lower C and I reduce AD — cooling the economy and reducing inflation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher rates → less borrowing/more saving → lower C and I → lower AD.",
            commonErrors: ["Ignoring the saving incentive effect of higher rates."],
          },
        },
        {
          id: "econ-u5-l52c1q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain the mechanism by which quantitative easing stimulates aggregate demand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "QE transmission", statement: "Central bank buys assets → injects money → lowers long-term rates → raises asset prices and lending." },
            ],
            steps: [
              { reasoning: "The central bank creates money and buys government bonds/assets.", marks: 1, markCode: "M" },
              { reasoning: "This injects liquidity into the banking system.", marks: 1, markCode: "M" },
              { reasoning: "Bond purchases push up bond prices and push down long-term interest rates.", marks: 1, markCode: "M" },
              { reasoning: "Lower long-term rates and higher asset prices encourage borrowing, spending and investment → higher AD.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "QE: asset purchases inject money → lower long-term rates → more lending/spending → higher AD.",
            commonErrors: ["Describing QE as simply 'printing money' without the transmission channels."],
          },
        },
        {
          id: "econ-u5-l52c1q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain the quantity theory of money and state its main policy implication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quantity theory of money", statement: "$MV = PY$ — money × velocity = price × output." },
            ],
            steps: [
              { reasoning: "M = money supply, V = velocity of money, P = price level, Y = real output.", marks: 1, markCode: "M" },
              { reasoning: "If V and Y are stable, faster growth in M must be matched by faster growth in P.", marks: 1, markCode: "M" },
              { reasoning: "So rapid money supply growth causes inflation — the monetarist view.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication: central banks should control money supply growth to control inflation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MV = PY links money growth to inflation; implies central banks should control money growth.",
            commonErrors: ["Ignoring that V and Y can change — the theory assumes stability."],
          },
        },
        {
          id: "econ-u5-l52c1q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate quantitative easing as a tool of monetary policy.",
          parts: [
            { label: "a", prompt: "Explain how quantitative easing works to stimulate the economy.", marks: 3 },
            { label: "b", prompt: "Explain two risks or limitations of quantitative easing.", marks: 2 },
            { label: "c", prompt: "Evaluate whether QE is appropriate when interest rates are near zero.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "QE evaluation", statement: "Stimulates AD at the zero lower bound but risks bubbles, inequality and future inflation." },
            ],
            steps: [
              { part: "a", reasoning: "Central bank creates money to buy government bonds and other assets.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This lowers long-term interest rates and raises asset prices.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cheaper credit and wealth effects encourage spending and investment → higher AD.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Risk: asset price bubbles in housing/stocks as money flows into assets.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Risk: inequality — asset owners gain while savers earn little; also future inflation risk.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "When rates are near zero, conventional cuts are exhausted — QE is the remaining option.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But its effects may be weaker than rate cuts — banks may hoard liquidity; exit is difficult.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: QE is a necessary but imperfect tool — better than doing nothing in a liquidity trap, but with real side-effects.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Asset purchases lower long rates and boost AD. (b) Bubbles, inequality, future inflation. (c) Imperfect but necessary at the zero bound.",
            commonErrors: ["Ignoring distributional and exit risks of QE."],
          },
        },
        {
          id: "econ-u5-l52c1q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A potential drawback of quantitative easing is that it may:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inflate asset bubbles and worsen wealth inequality" },
              { id: "b", text: "Directly increase tax revenue" },
              { id: "c", text: "Reduce the money supply" },
              { id: "d", text: "Raise interest rates sharply" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "QE risks", statement: "Asset bubbles, inequality (asset owners gain), future inflation." },
            ],
            steps: [
              { reasoning: "QE boosts asset prices — benefiting those who own assets and risking bubbles.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Inflate asset bubbles and worsen wealth inequality",
            commonErrors: ["Thinking QE reduces the money supply — it increases it."],
          },
        },
        {
          id: "econ-u5-l52c1q16",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "Using $MV = PY$, calculate the price level when M = $300bn, V = 5 and Y = $750bn.",
          response: {
            type: "numeric",
            parts: [{ label: "Price level", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quantity theory of money", statement: "$P = \\frac{MV}{Y}$" },
            ],
            steps: [
              { reasoning: "P = (300 × 5)/750 = 1500/750.", working: "P = \\frac{300 \\times 5}{750}", marks: 1, markCode: "M" },
              { reasoning: "P = 2.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated as a price index level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P = 2",
            commonErrors: ["Rearranging the formula incorrectly."],
          },
        },
      ],
    },
    {
      id: "econ-u5-monetary-evaluation",
      title: "Evaluation of Monetary Policy",
      skill: "Evaluate the strengths and weaknesses of monetary policy and its interaction with fiscal policy and the exchange rate.",
      lesson: {
        sections: [
          {
            heading: "Strengths of monetary policy",
            body: "Monetary policy is **fast and flexible** — the central bank can change rates quickly without legislation. It is **independent** from political pressure (in many countries). It has **clear transmission** — rate changes quickly affect borrowing, spending and AD. Inflation targeting provides **credibility and anchors expectations**.",
          },
          {
            heading: "Weaknesses",
            body: "**Zero lower bound** limits conventional policy in deep recessions. **Distributional effects**: higher rates hurt mortgage holders and the poor disproportionately. **Asset price effects**: QE may inflate housing/stock bubbles, worsening inequality. **Exchange rate volatility**: rate changes cause sharp currency movements affecting exporters/importers. **Time lags** still apply — policy affects the economy with delay.",
          },
          {
            heading: "Monetary-fiscal interaction",
            body: "Monetary and fiscal policy should be **complementary**: monetary policy manages AD/inflation; fiscal policy can target specific sectors and redistribute. Conflicts arise when fiscal expansion fights monetary tightening. **Impossible trinity**: a country cannot have free capital movement, fixed exchange rate and independent monetary policy simultaneously — must give up one.",
          },
        ],
        keyFormulas: [
          { name: "Strengths", statement: "Fast + flexible + independent + clear transmission" },
          { name: "Weaknesses", statement: "Zero bound + distributional effects + asset bubbles + lags" },
          { name: "Impossible trinity", statement: "Free capital flow + fixed FX + independent monetary policy — pick two" },
        ],
        workedExample: {
          problem: "A central bank raises rates while the government runs expansionary fiscal policy. Explain the conflict.",
          solution: "Fiscal expansion boosts AD (higher spending/tax cuts), while monetary tightening reduces AD (higher rates). They work against each other — the net effect depends on relative magnitudes.",
        },
      },
      questions: [
        {
          id: "econ-u5-l52c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'impossible trinity' states that a country cannot simultaneously have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free capital movement, fixed exchange rate and independent monetary policy" },
              { id: "b", text: "Free trade, stable prices and low unemployment" },
              { id: "c", text: "Budget surplus, trade surplus and low debt" },
              { id: "d", text: "Low inflation, high growth and full employment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Impossible trinity", statement: "Free capital flow + fixed exchange rate + independent monetary policy — choose two." },
            ],
            steps: [
              { reasoning: "The impossible trinity limits the combination of capital mobility, fixed FX and monetary independence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Free capital movement, fixed exchange rate and independent monetary policy",
            commonErrors: ["Confusing the impossible trinity with other macroeconomic trade-offs."],
          },
        },
        {
          id: "econ-u5-l52c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain one advantage and one disadvantage of quantitative easing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "QE evaluation", statement: "Stimulates economy when rates at zero; risks bubbles and inequality." },
            ],
            steps: [
              { reasoning: "Advantage: injects money and lowers long-term rates when conventional policy is exhausted.", marks: 1, markCode: "M" },
              { reasoning: "Disadvantage: may inflate asset bubbles (housing/stocks) and worsen wealth inequality.", marks: 1, markCode: "M" },
              { reasoning: "Also risks: future inflation if money supply isn't withdrawn in time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Advantage = stimulus at zero bound; disadvantage = asset bubbles, inequality, future inflation risk.",
            commonErrors: ["Listing only benefits or only costs."],
          },
        },
        {
          id: "econ-u5-l52c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how monetary policy affects the exchange rate and what consequences this has for an open economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interest rates and exchange rate", statement: "Higher rates attract capital inflows → currency appreciates." },
            ],
            steps: [
              { reasoning: "Higher interest rates attract foreign capital seeking better returns.", marks: 1, markCode: "M" },
              { reasoning: "Capital inflows increase demand for the domestic currency → appreciation.", marks: 1, markCode: "M" },
              { reasoning: "Appreciation makes exports more expensive and imports cheaper → trade balance may worsen.", marks: 1, markCode: "R" },
              { reasoning: "Lower rates do the opposite — depreciation boosts exports but raises import prices (inflation).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rates up → capital inflows → appreciation → weaker exports/stronger imports.",
            commonErrors: ["Ignoring the exchange rate channel — a key effect in open economies."],
          },
        },
        {
          id: "econ-u5-l52c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the effectiveness of monetary policy compared with fiscal policy in responding to a recession.",
          parts: [
            { label: "a", prompt: "Explain how each policy stimulates AD in a recession.", marks: 3 },
            { label: "b", prompt: "Compare the speed and flexibility of each policy.", marks: 2 },
            { label: "c", prompt: "Evaluate which is more appropriate for different types of recession.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monetary vs fiscal", statement: "Monetary = fast rate changes; fiscal = targeted spending but slower." },
            ],
            steps: [
              { part: "a", reasoning: "Monetary: cut rates → cheaper borrowing → more C and I → higher AD.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fiscal: increase G or cut T → direct AD boost via multiplier.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both aim to close the recessionary gap.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Monetary policy is faster — central bank can act immediately.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fiscal policy is slower — legislative process and implementation lags.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Monetary better for quick, broad stimulus; fiscal better for targeted/regional needs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "In deep recession with zero rates, fiscal may be more effective (monetary exhausted).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: use both together — monetary for speed, fiscal for targeting; depends on recession type.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Both boost AD via different channels. (b) Monetary faster; fiscal more targeted. (c) Complementary — use both; fiscal key at zero bound.",
            commonErrors: ["Arguing one is always better — they have different strengths."],
          },
        },
        {
          id: "econ-u5-l52c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A key strength of monetary policy is that it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slow and requires new legislation" },
              { id: "b", text: "Fast, flexible and largely independent of political pressure" },
              { id: "c", text: "Only usable during booms" },
              { id: "d", text: "Unable to affect aggregate demand" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strengths of monetary policy", statement: "Fast, flexible, independent, clear transmission to AD." },
            ],
            steps: [
              { reasoning: "Central banks can change rates quickly without legislation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Fast, flexible and largely independent of political pressure",
            commonErrors: ["Thinking monetary policy is slow like fiscal policy."],
          },
        },
        {
          id: "econ-u5-l52c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If a central bank raises interest rates, the likely effect on the exchange rate is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Appreciation, as capital flows in seeking higher returns" },
              { id: "b", text: "Depreciation, as capital leaves" },
              { id: "c", text: "A move to a fixed exchange rate" },
              { id: "d", text: "No change, as rates are unrelated to capital flows" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interest rates and exchange rate", statement: "Higher rates attract capital inflows → currency appreciates." },
            ],
            steps: [
              { reasoning: "Higher rates attract foreign capital, increasing demand for the currency.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Appreciation, as capital flows in seeking higher returns",
            commonErrors: ["Reversing the direction — higher rates attract capital in."],
          },
        },
        {
          id: "econ-u5-l52c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Under the impossible trinity, a country with free capital movement and a fixed exchange rate must:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give up monetary policy independence" },
              { id: "b", text: "Abandon international trade" },
              { id: "c", text: "Adopt a common currency automatically" },
              { id: "d", text: "Retain fully independent monetary policy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Impossible trinity", statement: "Free capital flow + fixed FX + independent monetary policy — pick two." },
            ],
            steps: [
              { reasoning: "With two of the three chosen, the third must be sacrificed — here monetary independence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Give up monetary policy independence",
            commonErrors: ["Thinking all three can coexist."],
          },
        },
        {
          id: "econ-u5-l52c2q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A disadvantage of raising interest rates is that it may:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eliminate the budget deficit directly" },
              { id: "b", text: "Hurt mortgage holders and low-income borrowers disproportionately" },
              { id: "c", text: "Have no effect on aggregate demand" },
              { id: "d", text: "Reduce income inequality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Distributional effects of rates", statement: "Higher rates burden borrowers — especially the poor and mortgage holders." },
            ],
            steps: [
              { reasoning: "Higher repayments hit indebted, often lower-income, households hardest.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hurt mortgage holders and low-income borrowers disproportionately",
            commonErrors: ["Thinking rate rises are distributionally neutral."],
          },
        },
        {
          id: "econ-u5-l52c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how monetary policy can affect income inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monetary policy and inequality", statement: "Rate changes and QE have distributional effects through borrowing costs and asset prices." },
            ],
            steps: [
              { reasoning: "Higher interest rates raise repayments for mortgage holders and other borrowers.", marks: 1, markCode: "M" },
              { reasoning: "Borrowers are disproportionately lower-income — inequality may worsen.", marks: 1, markCode: "M" },
              { reasoning: "QE raises asset prices (housing, stocks) — benefiting asset owners, often the wealthy.", marks: 1, markCode: "M" },
              { reasoning: "Conversely, low rates help indebted households and can support employment for the poor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rate rises burden the poor; QE inflates asset prices benefiting the rich — monetary policy affects inequality.",
            commonErrors: ["Assuming monetary policy is distributionally neutral."],
          },
        },
        {
          id: "econ-u5-l52c2q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain the possible conflict between expansionary fiscal policy and contractionary monetary policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Policy conflict", statement: "Fiscal expansion boosts AD while monetary tightening reduces it — the policies work against each other." },
            ],
            steps: [
              { reasoning: "Expansionary fiscal policy (more G or less T) raises AD.", marks: 1, markCode: "M" },
              { reasoning: "Contractionary monetary policy (higher rates) reduces C and I, lowering AD.", marks: 1, markCode: "M" },
              { reasoning: "The net effect on AD depends on the relative magnitudes of each policy.", marks: 1, markCode: "M" },
              { reasoning: "The conflict can also raise interest rates, increasing government debt-servicing costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fiscal expansion vs monetary tightening pull AD in opposite directions — net effect is ambiguous.",
            commonErrors: ["Assuming the two policies always reinforce each other."],
          },
        },
        {
          id: "econ-u5-l52c2q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 5,
          stem: "Explain the 'zero lower bound' problem and why it may force central banks to use quantitative easing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Zero lower bound", statement: "Interest rates cannot be cut much below zero — conventional stimulus is exhausted." },
            ],
            steps: [
              { reasoning: "In deep recession, the central bank cuts rates to stimulate borrowing and spending.", marks: 1, markCode: "M" },
              { reasoning: "Rates approach zero — they cannot go much lower (the zero lower bound).", marks: 1, markCode: "M" },
              { reasoning: "Conventional rate cuts are no longer available.", marks: 1, markCode: "M" },
              { reasoning: "QE is used instead — buying assets to inject money and lower long-term rates.", marks: 1, markCode: "M" },
              { reasoning: "Without QE, the economy could remain stuck in stagnation (liquidity trap).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "At the zero lower bound, rate cuts are exhausted — QE injects money to stimulate AD.",
            commonErrors: ["Forgetting that rates cannot fall far below zero."],
          },
        },
        {
          id: "econ-u5-l52c2q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate monetary policy as a tool for achieving price stability.",
          parts: [
            { label: "a", prompt: "Explain how inflation targeting works in practice.", marks: 3 },
            { label: "b", prompt: "Explain two limitations of monetary policy for price stability.", marks: 2 },
            { label: "c", prompt: "Evaluate whether central bank independence improves monetary policy outcomes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inflation targeting and independence", statement: "Central banks adjust rates to hit an inflation target; independence reduces political pressure." },
            ],
            steps: [
              { part: "a", reasoning: "Central bank sets a target (e.g. 2%) and adjusts the base rate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Above target: raise rates to cool AD; below: cut rates to stimulate.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear rules anchor inflation expectations, improving credibility.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Zero lower bound limits stimulus in deep recessions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Long and variable lags mean policy may be mistimed; supply shocks are hard to control.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Independent central banks are insulated from election cycles and short-term politics.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evidence suggests independence is associated with lower inflation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: independence improves credibility and price stability, though it reduces democratic accountability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Rate adjustments steer AD toward the inflation target. (b) Zero bound + lags. (c) Independence improves credibility at the cost of accountability.",
            commonErrors: ["Ignoring accountability trade-offs of independence."],
          },
        },
        {
          id: "econ-u5-l52c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Using $MV = PY$, calculate the price level when M = $400bn, V = 5 and Y = $1,250bn.",
          response: {
            type: "numeric",
            parts: [{ label: "Price level", answer: 1.6 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quantity theory of money", statement: "$P = \\frac{MV}{Y}$" },
            ],
            steps: [
              { reasoning: "P = (400 × 5)/1250 = 2000/1250.", working: "P = \\frac{400 \\times 5}{1250}", marks: 1, markCode: "M" },
              { reasoning: "P = 1.6.", working: "P = \\frac{2000}{1250} = 1.6", marks: 1, markCode: "M" },
              { reasoning: "Price level = 1.6.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated as a price index level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P = 1.6",
            commonErrors: ["Arithmetic errors in the division."],
          },
        },
        {
          id: "econ-u5-l52c2q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why very low interest rates might fail to stimulate the economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monetary policy limits", statement: "Pessimism, debt overhang and liquidity traps can blunt rate cuts." },
            ],
            steps: [
              { reasoning: "In a liquidity trap, households and firms prefer hoarding cash over borrowing regardless of rates.", marks: 1, markCode: "M" },
              { reasoning: "If consumers are pessimistic about future income, cheap credit may not raise spending.", marks: 1, markCode: "M" },
              { reasoning: "Heavily indebted borrowers cannot borrow more even at low rates.", marks: 1, markCode: "M" },
              { reasoning: "Banks may not pass on rate cuts or may tighten lending standards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pessimism, debt overhang, liquidity traps and cautious banks can blunt the stimulus from low rates.",
            commonErrors: ["Assuming lower rates always raise AD."],
          },
        },
        {
          id: "econ-u5-l52c2q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A cut in interest rates that causes the currency to depreciate is likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Have no effect on the trade balance" },
              { id: "b", text: "Directly cause deflation" },
              { id: "c", text: "Increase export competitiveness but raise import prices" },
              { id: "d", text: "Reduce export competitiveness" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Depreciation effects", statement: "Weaker currency → cheaper exports, dearer imports → inflationary pressure." },
            ],
            steps: [
              { reasoning: "Depreciation makes exports cheaper abroad and imports dearer at home.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Increase export competitiveness but raise import prices",
            commonErrors: ["Thinking depreciation helps exporters only without import costs."],
          },
        },
        {
          id: "econ-u5-l52c2q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Using $MV = PY$, calculate the price level when M = $200bn, V = 6 and Y = $800bn.",
          response: {
            type: "numeric",
            parts: [{ label: "Price level", answer: 1.5 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quantity theory of money", statement: "$P = \\frac{MV}{Y}$" },
            ],
            steps: [
              { reasoning: "P = (200 × 6)/800 = 1200/800.", working: "P = \\frac{200 \\times 6}{800}", marks: 1, markCode: "M" },
              { reasoning: "P = 1.5.", working: "P = \\frac{1200}{800} = 1.5", marks: 1, markCode: "M" },
              { reasoning: "Price level = 1.5.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated as a price index level.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P = 1.5",
            commonErrors: ["Rearranging the formula incorrectly."],
          },
        },
      ],
    },
  ],
};
