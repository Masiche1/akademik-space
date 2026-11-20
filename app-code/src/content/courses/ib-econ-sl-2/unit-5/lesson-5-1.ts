import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "econ-u4-lesson-5-1",
  code: "5-1",
  title: "Fiscal Policy",
  goal: "I CAN explain how governments use spending and taxation to manage aggregate demand, and evaluate the effectiveness of fiscal policy.",
  standards: ["Paper 1", "Paper 2", "Topic 5"],
  vocabulary: [
    { term: "Fiscal policy", definition: "Government use of taxation and spending to influence aggregate demand and the economy." },
    { term: "Discretionary fiscal policy", definition: "Deliberate changes in government spending or tax rates to stimulate or cool the economy." },
    { term: "Automatic stabilisers", definition: "Tax and benefit systems that automatically cushion economic fluctuations (e.g. progressive tax, unemployment benefit)." },
    { term: "Expansionary fiscal policy", definition: "Increased government spending or tax cuts to boost AD — used in recessions." },
    { term: "Contractionary fiscal policy", definition: "Reduced government spending or tax rises to lower AD — used to fight inflation." },
    { term: "Budget deficit", definition: "When government spending exceeds tax revenue in a period." },
  ],
  concepts: [
    {
      id: "econ-u5-fiscal-tools",
      title: "Fiscal Policy Tools",
      skill: "Explain how government spending and taxation affect aggregate demand and the budget balance.",
      lesson: {
        sections: [
          {
            heading: "Government spending",
            body: "Government spending (G) is a direct component of AD. **Discretionary** increases (infrastructure, healthcare, education) directly raise AD through the **multiplier effect** — initial spending raises incomes, which are re-spent, raising AD further. The multiplier = $1/(1-MPC)$ where MPC is marginal propensity to consume. Government spending also provides public goods and merit goods.",
          },
          {
            heading: "Taxation",
            body: "Taxes affect AD indirectly: **direct taxes** (income tax) reduce disposable income → lower consumption; **indirect taxes** raise prices → lower consumption. **Tax cuts** increase disposable income → higher C → higher AD. **Progressive taxes** redistribute income; **regressive taxes** (VAT, excise) hit poorer households proportionally harder.",
          },
          {
            heading: "Budget balance",
            body: "When G > T, the government runs a **budget deficit** — financed by borrowing. A **budget surplus** (T > G) allows debt repayment. **Automatic stabilisers** work without new policy: in recessions, tax revenues fall and benefit payments rise automatically, cushioning AD; in booms, the reverse — helping smooth the cycle.",
          },
        ],
        keyFormulas: [
          { name: "AD and fiscal policy", statement: "G ↑ or T ↓ → AD ↑ (expansionary); G ↓ or T ↑ → AD ↓ (contractionary)" },
          { name: "Multiplier", statement: "$k = \\frac{1}{1-MPC}$" },
          { name: "Budget balance", statement: "Deficit = G > T; Surplus = T > G" },
        ],
        workedExample: {
          problem: "The government spends $10bn on infrastructure. If MPC = 0.8, what is the maximum increase in AD?",
          solution: "Multiplier = 1/(1−0.8) = 5. Max increase in AD = 10 × 5 = $50bn (before leakages).",
        },
      },
      questions: [
        {
          id: "econ-u5-l51c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Expansionary fiscal policy involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raising taxes and cutting spending" },
              { id: "b", text: "Cutting taxes and increasing spending" },
              { id: "c", text: "Only raising interest rates" },
              { id: "d", text: "Selling government assets" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Expansionary fiscal policy", statement: "Tax cuts or increased spending to boost AD." },
            ],
            steps: [
              { reasoning: "Expansionary = tax cuts + spending increases → higher AD.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cutting taxes and increasing spending",
            commonErrors: ["Confusing expansionary (boost AD) with contractionary (reduce AD)."],
          },
        },
        {
          id: "econ-u5-l51c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what is meant by automatic stabilisers, with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Automatic stabilisers", statement: "Tax and benefit systems that automatically cushion economic fluctuations." },
            ],
            steps: [
              { reasoning: "Automatic stabilisers operate without new government action.", marks: 1, markCode: "M" },
              { reasoning: "Example: in recession, tax revenues fall and unemployment benefit payments rise automatically.", marks: 1, markCode: "M" },
              { reasoning: "This cushions the fall in AD — stabilising the economy without discretionary policy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Automatic stabilisers = tax/benefit systems cushioning AD fluctuations automatically (e.g. progressive tax, unemployment benefit).",
            commonErrors: ["Confusing automatic stabilisers with discretionary fiscal policy."],
          },
        },
        {
          id: "econ-u5-l51c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The government increases spending by $20bn. If the marginal propensity to consume is 0.75, calculate the maximum increase in aggregate demand.",
          response: {
            type: "numeric",
            parts: [{ label: "Increase in AD ($bn)", answer: 80 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fiscal multiplier", statement: "$k = \\frac{1}{1-MPC}$" },
            ],
            steps: [
              { reasoning: "Multiplier = 1/(1 − 0.75) = 1/0.25 = 4.", working: "k = \\frac{1}{1-0.75} = 4", marks: 1, markCode: "M" },
              { reasoning: "Increase in AD = initial injection × multiplier = 20 × 4.", working: "20 \\times 4 = 80", marks: 1, markCode: "M" },
              { reasoning: "Maximum increase in AD = $80bn.", working: "AD_{\\text{increase}} = 80", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80bn",
            commonErrors: ["Using MPC as the multiplier instead of 1/(1−MPC)."],
          },
        },
        {
          id: "econ-u5-l51c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the use of government spending as a tool of expansionary fiscal policy.",
          parts: [
            { label: "a", prompt: "Explain how increased government spending raises AD.", marks: 3 },
            { label: "b", prompt: "Explain the multiplier effect.", marks: 2 },
            { label: "c", prompt: "Evaluate the limitations of using spending to stimulate the economy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Government spending and AD", statement: "G is a direct AD component; spending creates incomes and demand." },
            ],
            steps: [
              { part: "a", reasoning: "G is a direct component of AD = C + I + G + (X−M).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Government hires workers and buys goods — direct injection of demand.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Spending on infrastructure/health also raises long-run productive capacity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Initial spending becomes income for households and firms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "They re-spend part (MPC), generating further rounds of income and AD.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Crowding out: government borrowing may raise interest rates, reducing private investment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Timing lags — spending may arrive after the recession ends.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: effective in deep recessions but risks deficits and inefficiency if misallocated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) G directly adds to AD. (b) Multiplier amplifies via re-spending. (c) Crowding out, lags, deficit risks.",
            commonErrors: ["Ignoring crowding out or timing lags."],
          },
        },
        {
          id: "econ-u5-l51c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A budget deficit occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government revenue exceeds government spending" },
              { id: "b", text: "Government spending exceeds government revenue" },
              { id: "c", text: "Exports exceed imports" },
              { id: "d", text: "The price level is falling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Budget deficit", statement: "Government spending (G) exceeds tax revenue (T) in a period." },
            ],
            steps: [
              { reasoning: "A deficit means spending is greater than revenue.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Government spending exceeds government revenue",
            commonErrors: ["Confusing a deficit (G > T) with a surplus (T > G)."],
          },
        },
        {
          id: "econ-u5-l51c1q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Discretionary fiscal policy refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Automatic changes in tax and benefit payments" },
              { id: "b", text: "Deliberate changes in government spending or tax rates" },
              { id: "c", text: "Changes in interest rates set by the central bank" },
              { id: "d", text: "Changes in the exchange rate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Discretionary fiscal policy", statement: "Deliberate changes in government spending or tax rates to manage the economy." },
            ],
            steps: [
              { reasoning: "Discretionary means deliberate policy decisions by government.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Deliberate changes in government spending or tax rates",
            commonErrors: ["Confusing discretionary policy with automatic stabilisers."],
          },
        },
        {
          id: "econ-u5-l51c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If the marginal propensity to consume rises from 0.6 to 0.8, the fiscal multiplier will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fall from 2.5 to 1.25" },
              { id: "b", text: "Rise from 2.5 to 5" },
              { id: "c", text: "Remain at 2.5" },
              { id: "d", text: "Fall from 5 to 2.5" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fiscal multiplier", statement: "$k = \\frac{1}{1-MPC}$ — a higher MPC gives a larger multiplier." },
            ],
            steps: [
              { reasoning: "At MPC = 0.6, k = 1/0.4 = 2.5; at MPC = 0.8, k = 1/0.2 = 5.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rise from 2.5 to 5",
            commonErrors: ["Thinking a higher MPC reduces the multiplier — it increases it."],
          },
        },
        {
          id: "econ-u5-l51c1q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The government announces a $40bn increase in infrastructure spending. If the marginal propensity to consume is 0.6, calculate the maximum increase in aggregate demand.",
          response: {
            type: "numeric",
            parts: [{ label: "Increase in AD ($bn)", answer: 100 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fiscal multiplier", statement: "$k = \\frac{1}{1-MPC}$" },
            ],
            steps: [
              { reasoning: "Multiplier = 1/(1 − 0.6) = 2.5.", working: "k = \\frac{1}{1-0.6} = 2.5", marks: 1, markCode: "M" },
              { reasoning: "Increase in AD = initial injection × multiplier = 40 × 2.5.", working: "40 \\times 2.5 = 100", marks: 1, markCode: "M" },
              { reasoning: "Maximum increase in AD = $100bn.", working: "AD_{\\text{increase}} = 100", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100bn",
            commonErrors: ["Forgetting to multiply the injection by the multiplier."],
          },
        },
        {
          id: "econ-u5-l51c1q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The government cuts direct taxes by $20bn. If the marginal propensity to consume is 0.9, calculate the maximum possible increase in aggregate demand.",
          response: {
            type: "numeric",
            parts: [{ label: "Increase in AD ($bn)", answer: 200 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fiscal multiplier", statement: "$k = \\frac{1}{1-MPC}$" },
            ],
            steps: [
              { reasoning: "Multiplier = 1/(1 − 0.9) = 10.", working: "k = \\frac{1}{1-0.9} = 10", marks: 1, markCode: "M" },
              { reasoning: "Increase in AD = tax cut × multiplier = 20 × 10.", working: "20 \\times 10 = 200", marks: 1, markCode: "M" },
              { reasoning: "Maximum increase in AD = $200bn.", working: "AD_{\\text{increase}} = 200", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200bn",
            commonErrors: ["Using 1/(1−MPC) incorrectly when MPC is very high."],
          },
        },
        {
          id: "econ-u5-l51c1q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how a cut in direct taxes can lead to an increase in aggregate demand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tax cuts and AD", statement: "Lower direct taxes raise disposable income → higher consumption → higher AD." },
            ],
            steps: [
              { reasoning: "Direct taxes (e.g. income tax) reduce disposable income.", marks: 1, markCode: "M" },
              { reasoning: "A tax cut increases households' disposable income.", marks: 1, markCode: "M" },
              { reasoning: "Higher disposable income raises consumption (C) via the MPC.", marks: 1, markCode: "M" },
              { reasoning: "Higher C raises AD, amplified by the multiplier effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tax cut → higher disposable income → higher consumption → higher AD (multiplier).",
            commonErrors: ["Ignoring the multiplier — consumption rise is amplified."],
          },
        },
        {
          id: "econ-u5-l51c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Distinguish between a progressive tax and a regressive tax, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Progressive tax", statement: "Tax rate rises as income rises — takes a larger share of high earners' income." },
              { kind: "definition", name: "Regressive tax", statement: "Takes a larger share of low-income households' income." },
            ],
            steps: [
              { reasoning: "Progressive tax: rate increases with income — e.g. income tax bands.", marks: 1, markCode: "M" },
              { reasoning: "Effect: redistributes income from rich to poor via the tax system.", marks: 1, markCode: "M" },
              { reasoning: "Regressive tax: same rate for all — e.g. VAT or excise duties.", marks: 1, markCode: "M" },
              { reasoning: "Effect: poorer households spend a larger share of income, so VAT hits them proportionally harder.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Progressive = rate rises with income (income tax); regressive = hits low earners proportionally harder (VAT).",
            commonErrors: ["Confusing progressive (rate rises with income) with proportional."],
          },
        },
        {
          id: "econ-u5-l51c1q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 5,
          stem: "Explain how automatic stabilisers reduce the amplitude of economic fluctuations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Automatic stabilisers", statement: "Tax and benefit systems automatically cushion AD in booms and recessions." },
            ],
            steps: [
              { reasoning: "In a recession, incomes and profits fall.", marks: 1, markCode: "M" },
              { reasoning: "Tax revenues fall automatically (less income tax, corporation tax).", marks: 1, markCode: "M" },
              { reasoning: "Benefit payments (unemployment benefit, welfare) rise automatically.", marks: 1, markCode: "M" },
              { reasoning: "Net effect: disposable income and AD are cushioned — the fall is smaller.", marks: 1, markCode: "M" },
              { reasoning: "In a boom the reverse happens — taxes rise and benefits fall, dampening overheating.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Automatic stabilisers cushion AD automatically — revenues fall/benefits rise in recessions, and vice versa in booms.",
            commonErrors: ["Describing discretionary policy instead of automatic responses."],
          },
        },
        {
          id: "econ-u5-l51c1q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the use of taxation as a tool of fiscal policy.",
          parts: [
            { label: "a", prompt: "Explain how changes in taxation affect aggregate demand.", marks: 3 },
            { label: "b", prompt: "Explain how progressive taxation can redistribute income.", marks: 2 },
            { label: "c", prompt: "Evaluate the limitations of using taxes to manage aggregate demand.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Taxation as fiscal policy", statement: "Tax changes affect disposable income and AD; progressive taxes redistribute income." },
            ],
            steps: [
              { part: "a", reasoning: "Direct tax cuts raise disposable income → higher consumption → higher AD.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Indirect tax rises increase prices → lower consumption → lower AD.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Changes are amplified by the multiplier effect.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Higher earners pay a larger proportion of income in tax.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Revenue funds transfers/benefits for lower-income groups → reduces inequality.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tax changes may distort incentives — e.g. high tax rates reduce work/enterprise effort.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Political constraints: governments find tax rises unpopular; indirect taxes are regressive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: taxes are a blunt demand-management tool compared with targeted spending; useful mainly for redistribution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Tax cuts raise C and AD via disposable income; tax rises do the opposite. (b) Progressive rates take more from high earners. (c) Distortion, politics, regressivity limit effectiveness.",
            commonErrors: ["Ignoring the difference between direct and indirect tax effects on AD."],
          },
        },
        {
          id: "econ-u5-l51c1q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of an automatic stabiliser?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new government infrastructure programme" },
              { id: "b", text: "A cut in income tax announced by the finance minister" },
              { id: "c", text: "Unemployment benefit payments that rise automatically in a recession" },
              { id: "d", text: "Central bank purchases of government bonds" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Automatic stabiliser", statement: "Tax/benefit responses that operate without new government action." },
            ],
            steps: [
              { reasoning: "Unemployment benefit rises automatically when jobs are lost — no new policy needed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Unemployment benefit payments that rise automatically in a recession",
            commonErrors: ["Confusing discretionary spending/tax changes with automatic stabilisers."],
          },
        },
        {
          id: "econ-u5-l51c1q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Contractionary fiscal policy is most appropriate when the economy is experiencing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A deep recession with falling output" },
              { id: "b", text: "Demand-pull inflation and an overheating economy" },
              { id: "c", text: "A trade deficit with no inflation" },
              { id: "d", text: "Deflation and rising unemployment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contractionary fiscal policy", statement: "Reduced G or higher T to lower AD — used against inflation." },
            ],
            steps: [
              { reasoning: "Contractionary policy reduces AD, which is appropriate when AD is excessive (overheating/inflation).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Demand-pull inflation and an overheating economy",
            commonErrors: ["Using contractionary policy in a recession — it would deepen the slump."],
          },
        },
        {
          id: "econ-u5-l51c1q16",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "If the fiscal multiplier is 4 and the government increases spending by $15bn, calculate the maximum increase in aggregate demand.",
          response: {
            type: "numeric",
            parts: [{ label: "Increase in AD ($bn)", answer: 60 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Multiplier effect", statement: "Increase in AD = initial injection × multiplier." },
            ],
            steps: [
              { reasoning: "Multiply the injection by the multiplier: 15 × 4.", working: "15 \\times 4 = 60", marks: 1, markCode: "M" },
              { reasoning: "Maximum increase in AD = $60bn.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60bn",
            commonErrors: ["Adding the injection to the multiplier instead of multiplying."],
          },
        },
      ],
    },
    {
      id: "econ-u5-fiscal-objectives-evaluation",
      title: "Fiscal Policy Objectives and Evaluation",
      skill: "Explain the objectives of fiscal policy and evaluate its strengths and weaknesses as a demand-management tool.",
      lesson: {
        sections: [
          {
            heading: "Objectives of fiscal policy",
            body: "Fiscal policy aims to: **promote economic growth** (higher AD → more output), **reduce unemployment** (higher AD → more jobs), **control inflation** (lower AD if overheating), and **redistribute income** (progressive taxes + benefits). It also aims for **fiscal sustainability** — keeping debt at manageable levels.",
          },
          {
            heading: "Strengths",
            body: "Fiscal policy can be **targeted** — spending on specific regions, sectors or groups. It has a **direct** effect on AD via the multiplier. It can address **distributional** goals simultaneously (tax/benefit system). It can fund **public goods and merit goods** that markets underprovide.",
          },
          {
            heading: "Weaknesses",
            body: "**Time lags**: recognition, decision and impact lags mean policy may be mistimed. **Crowding out**: government borrowing may raise interest rates, reducing private investment. **Deficits and debt**: sustained deficits accumulate debt and interest payments. **Political constraints**: governments may avoid unpopular tax rises or spending cuts. **Leakages**: multiplier is reduced by imports, saving and taxes.",
          },
        ],
        keyFormulas: [
          { name: "Fiscal objectives", statement: "Growth + low unemployment + low inflation + redistribution + sustainability" },
          { name: "Key weaknesses", statement: "Time lags + crowding out + deficits/debt + political constraints" },
        ],
        workedExample: {
          problem: "Explain why expansionary fiscal policy might fail to reduce unemployment.",
          solution: "If the economy is at full capacity, extra AD causes inflation not output. If multipliers are low (high MPC leakage), the effect is weak. If policy arrives late (lags), the recession may be over. Crowding out may reduce private investment.",
        },
      },
      questions: [
        {
          id: "econ-u5-l51c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The main objectives of fiscal policy include all EXCEPT:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Promoting economic growth" },
              { id: "b", text: "Reducing unemployment" },
              { id: "c", text: "Setting the exchange rate directly" },
              { id: "d", text: "Redistributing income" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fiscal policy objectives", statement: "Growth, unemployment, inflation, redistribution, sustainability." },
            ],
            steps: [
              { reasoning: "Fiscal policy manages AD — it does not directly set the exchange rate (that's monetary policy/external).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Setting the exchange rate directly",
            commonErrors: ["Thinking fiscal policy directly controls the exchange rate — that's monetary policy."],
          },
        },
        {
          id: "econ-u5-l51c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what is meant by 'crowding out' in the context of fiscal policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crowding out", statement: "Government borrowing raises interest rates, reducing private investment." },
            ],
            steps: [
              { reasoning: "When government borrows to fund spending, demand for loanable funds rises.", marks: 1, markCode: "M" },
              { reasoning: "This pushes up interest rates, making private borrowing more expensive.", marks: 1, markCode: "M" },
              { reasoning: "Private investment (I) falls — partially offsetting the fiscal stimulus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Government borrowing → higher interest rates → lower private investment → offsets stimulus.",
            commonErrors: ["Confusing crowding out with the multiplier — opposite effects on AD."],
          },
        },
        {
          id: "econ-u5-l51c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two reasons why fiscal policy may be ineffective at reducing cyclical unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fiscal policy limitations", statement: "Lags, crowding out, leakages, political constraints." },
            ],
            steps: [
              { reasoning: "Time lags: by the time spending takes effect, the recession may be over.", marks: 1, markCode: "M" },
              { reasoning: "Crowding out: government borrowing raises interest rates, reducing private investment.", marks: 1, markCode: "M" },
              { reasoning: "Low multiplier: high taxes and import leakage reduce the AD impact.", marks: 1, markCode: "R" },
              { reasoning: "If the economy is at capacity, extra AD causes inflation not jobs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lags, crowding out, low multiplier, or capacity constraints can make fiscal policy ineffective.",
            commonErrors: ["Ignoring timing lags — a major real-world problem."],
          },
        },
        {
          id: "econ-u5-l51c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the effectiveness of fiscal policy as a tool for managing aggregate demand.",
          parts: [
            { label: "a", prompt: "Explain how fiscal policy influences AD.", marks: 2 },
            { label: "b", prompt: "Explain two strengths of using fiscal policy.", marks: 3 },
            { label: "c", prompt: "Evaluate the weaknesses of fiscal policy compared with monetary policy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fiscal policy evaluation", statement: "Direct AD impact but subject to lags, deficits and crowding out." },
            ],
            steps: [
              { part: "a", reasoning: "G directly adds to AD; taxes affect disposable income and consumption.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expansionary = more G/less T; contractionary = less G/more T.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Targeted: can direct spending to regions/sectors/groups.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Direct effect via multiplier; can fund public/merit goods.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Addresses distributional goals simultaneously.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Monetary policy is faster and more flexible — no legislative delays.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Fiscal policy creates deficits/debt; monetary policy does not directly.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: fiscal policy better for targeted/distributional goals; monetary better for quick AD adjustment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) G and T affect AD directly. (b) Targeted, multiplier, distributional. (c) Slower, deficit-creating vs monetary's speed/flexibility.",
            commonErrors: ["Comparing without acknowledging complementary roles."],
          },
        },
        {
          id: "econ-u5-l51c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is NOT an objective of fiscal policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Promoting economic growth" },
              { id: "b", text: "Reducing unemployment" },
              { id: "c", text: "Maintaining price stability" },
              { id: "d", text: "Setting interest rates directly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fiscal policy objectives", statement: "Growth, unemployment, inflation, redistribution, sustainability — interest rates are monetary policy." },
            ],
            steps: [
              { reasoning: "Interest rates are set by the central bank (monetary policy), not by fiscal policy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Setting interest rates directly",
            commonErrors: ["Confusing fiscal policy with monetary policy tools."],
          },
        },
        {
          id: "econ-u5-l51c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'Crowding out' in the context of fiscal policy means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government spending directly displacing private spending" },
              { id: "b", text: "Government borrowing raising interest rates and reducing private investment" },
              { id: "c", text: "Higher taxes reducing consumption" },
              { id: "d", text: "Imports rising as incomes rise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crowding out", statement: "Government borrowing → higher interest rates → lower private investment." },
            ],
            steps: [
              { reasoning: "Crowding out works through the interest rate channel, not directly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Government borrowing raising interest rates and reducing private investment",
            commonErrors: ["Describing direct displacement rather than the interest-rate mechanism."],
          },
        },
        {
          id: "econ-u5-l51c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a weakness of using fiscal policy to manage aggregate demand?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is too fast to implement" },
              { id: "b", text: "It requires no political decisions" },
              { id: "c", text: "It can create budget deficits and suffers from time lags" },
              { id: "d", text: "It cannot be used to target specific sectors" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fiscal policy weaknesses", statement: "Deficits/debt, time lags, crowding out, political constraints." },
            ],
            steps: [
              { reasoning: "Expansionary fiscal policy typically runs deficits and takes time to have effect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** It can create budget deficits and suffers from time lags",
            commonErrors: ["Thinking fiscal policy is fast — it is slower than monetary policy."],
          },
        },
        {
          id: "econ-u5-l51c2q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Compared with monetary policy, fiscal policy is generally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faster and more flexible" },
              { id: "b", text: "Slower, but able to target spending and address distribution" },
              { id: "c", text: "Identical in its effects" },
              { id: "d", text: "Unable to affect aggregate demand" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Fiscal vs monetary policy", statement: "Monetary is faster; fiscal is targeted but slower and deficit-creating." },
            ],
            steps: [
              { reasoning: "Fiscal policy requires legislation and implementation — slower but more targeted.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Slower, but able to target spending and address distribution",
            commonErrors: ["Claiming fiscal policy is faster than monetary policy."],
          },
        },
        {
          id: "econ-u5-l51c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain what is meant by the 'recognition, decision and impact lags' of fiscal policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Policy time lags", statement: "Delay between identifying a problem, deciding policy and policy affecting the economy." },
            ],
            steps: [
              { reasoning: "Recognition lag: time to identify that the economy needs policy.", marks: 1, markCode: "M" },
              { reasoning: "Decision lag: time for government/parliament to agree and legislate.", marks: 1, markCode: "M" },
              { reasoning: "Implementation lag: time for spending/tax changes to take effect.", marks: 1, markCode: "M" },
              { reasoning: "Impact lag: time for the policy to feed through to AD, output and prices — policy may arrive too late.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recognition + decision + implementation + impact lags mean fiscal policy may be mistimed.",
            commonErrors: ["Listing only one type of lag."],
          },
        },
        {
          id: "econ-u5-l51c2q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how the tax and benefit system can be used to redistribute income.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Redistribution", statement: "Progressive taxes take proportionally more from high earners; benefits support low earners." },
            ],
            steps: [
              { reasoning: "Progressive direct taxes take a larger share of high incomes.", marks: 1, markCode: "M" },
              { reasoning: "This revenue funds welfare payments and transfers to low-income groups.", marks: 1, markCode: "M" },
              { reasoning: "Benefits such as unemployment benefit support those out of work.", marks: 1, markCode: "M" },
              { reasoning: "Net effect: post-tax income distribution is more equal — reducing inequality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Progressive taxes + benefits transfer income from rich to poor, reducing inequality.",
            commonErrors: ["Forgetting that regressive indirect taxes can undo redistribution."],
          },
        },
        {
          id: "econ-u5-l51c2q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 5,
          stem: "Explain why a government might deliberately run a budget deficit during a recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deficit-financed stimulus", statement: "Borrowing to fund spending/tax cuts raises AD when private demand is weak." },
            ],
            steps: [
              { reasoning: "In recession, private C and I fall — AD is too low.", marks: 1, markCode: "M" },
              { reasoning: "The government can borrow (run a deficit) to fund extra spending or tax cuts.", marks: 1, markCode: "M" },
              { reasoning: "This injects demand directly into the economy.", marks: 1, markCode: "M" },
              { reasoning: "The multiplier amplifies the stimulus, closing the recessionary gap.", marks: 1, markCode: "M" },
              { reasoning: "Risk: deficits accumulate debt — justified only if growth returns to stabilise the debt ratio.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deficit financing boosts AD via the multiplier when private demand is weak — at the cost of rising debt.",
            commonErrors: ["Ignoring the debt sustainability trade-off."],
          },
        },
        {
          id: "econ-u5-l51c2q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of contractionary fiscal policy to reduce inflation.",
          parts: [
            { label: "a", prompt: "Explain how contractionary fiscal policy reduces aggregate demand.", marks: 3 },
            { label: "b", prompt: "Explain two limitations of contractionary fiscal policy.", marks: 2 },
            { label: "c", prompt: "Evaluate whether contractionary fiscal policy is appropriate when inflation is caused by a supply-side shock.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contractionary fiscal policy", statement: "Lower G or higher T reduces AD — effective against demand-pull inflation, harmful in supply shocks." },
            ],
            steps: [
              { part: "a", reasoning: "Reduced government spending or higher taxes lower AD directly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lower AD reduces demand-pull pressure on prices.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Lower AD also reduces output and employment — a cost.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It reduces output and raises unemployment — may cause a recession.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It is politically unpopular — governments face resistance to tax rises/spending cuts.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "With a supply shock (e.g. oil prices), AS has fallen — inflation is cost-push.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Contractionary policy would reduce AD further, worsening unemployment without fixing supply.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: appropriate only for demand-pull inflation; wrong tool for cost-push — supply-side policy or monetary tightening may be better.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cuts AD to fight demand-pull inflation but costs output/jobs. (b) Recession risk, unpopularity. (c) Wrong tool for cost-push inflation.",
            commonErrors: ["Applying contractionary policy to cost-push inflation."],
          },
        },
        {
          id: "econ-u5-l51c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In a given year, government spending is $800bn and tax revenue is $720bn. Calculate the budget balance.",
          response: {
            type: "numeric",
            parts: [{ label: "Budget deficit ($bn)", answer: 80 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Budget balance", statement: "Deficit = G − T; Surplus = T − G." },
            ],
            steps: [
              { reasoning: "G ($800bn) exceeds T ($720bn), so the government runs a deficit.", marks: 1, markCode: "M" },
              { reasoning: "Deficit = 800 − 720 = $80bn.", working: "800 - 720 = 80", marks: 1, markCode: "M" },
              { reasoning: "Budget deficit = $80bn.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80bn deficit",
            commonErrors: ["Reporting a surplus by subtracting in the wrong direction."],
          },
        },
        {
          id: "econ-u5-l51c2q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain two reasons why governments may be reluctant to raise taxes or cut spending, even when a budget deficit is growing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fiscal constraints", statement: "Political unpopularity and economic harm constrain deficit reduction." },
            ],
            steps: [
              { reasoning: "Political constraint: tax rises and spending cuts are unpopular — governments fear losing elections.", marks: 1, markCode: "M" },
              { reasoning: "Spending cuts may hit vulnerable groups (health, welfare) and worsen inequality.", marks: 1, markCode: "M" },
              { reasoning: "Tax rises may reduce incentives to work and invest, slowing growth.", marks: 1, markCode: "M" },
              { reasoning: "Higher taxes/cuts during a downturn can deepen recession — timing matters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Politics (unpopularity, inequality) and economics (incentives, recession risk) make deficit reduction difficult.",
            commonErrors: ["Listing only political reasons without economic ones."],
          },
        },
        {
          id: "econ-u5-l51c2q15",
          difficulty: "foundation",
          paper: "2",
          totalMarks: 3,
          stem: "If the fiscal multiplier is 2 and the government cuts spending by $25bn, calculate the maximum change in aggregate demand.",
          response: {
            type: "numeric",
            parts: [{ label: "Change in AD ($bn)", answer: 50 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Multiplier effect", statement: "Change in AD = injection × multiplier." },
            ],
            steps: [
              { reasoning: "Change in AD = 25 × 2 = 50, a decrease.", working: "25 \\times 2 = 50", marks: 1, markCode: "M" },
              { reasoning: "Aggregate demand falls by $50bn.", marks: 1, markCode: "A" },
              { reasoning: "Answer stated with units and direction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AD decreases by $50bn",
            commonErrors: ["Reporting a positive change when spending is cut."],
          },
        },
        {
          id: "econ-u5-l51c2q16",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A budget surplus occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government spending exceeds tax revenue" },
              { id: "b", text: "Tax revenue exceeds government spending" },
              { id: "c", text: "Exports exceed imports" },
              { id: "d", text: "The government borrows from the central bank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Budget surplus", statement: "Tax revenue (T) exceeds government spending (G)." },
            ],
            steps: [
              { reasoning: "A surplus means revenue is greater than spending.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tax revenue exceeds government spending",
            commonErrors: ["Confusing surplus with deficit."],
          },
        },
      ],
    },
  ],
};
