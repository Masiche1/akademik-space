import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cieige-u6-lesson-6-3",
  code: "6-3",
  title: "Fiscal Policy",
  goal: "I CAN analyse government spending, taxation, budget balances and fiscal policy objectives.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 6: macroeconomic policy"],
  vocabulary: [
    {
      term: "Fiscal policy",
      definition:
        "Government use of spending and taxation to manage the economy.",
    },
    {
      term: "Budget deficit",
      definition: "Government spending exceeds tax revenue.",
    },
    {
      term: "Budget surplus",
      definition: "Tax revenue exceeds government spending.",
    },
    {
      term: "Progressive tax",
      definition: "Tax rate rises with income — redistributive.",
    },
    {
      term: "Regressive tax",
      definition: "Takes larger share of poor's income — e.g. VAT.",
    },
    {
      term: "Multiplier effect",
      definition: "Initial spending generates larger total income increase.",
    },
  ],
  concepts: [
    {
      id: "cieige-u6l3-c1-budget",
      title: "Government budget and taxation",
      skill: "Explain budget balances, tax types and their economic effects.",
      lesson: {
        sections: [
          {
            heading: "Budget balances",
            body: "**Budget deficit** = G > T (borrowing needed). **Budget surplus** = T > G (repayment/debt reduction). **Balanced budget** = G = T. Deficits financed by borrowing (national debt) or money creation (inflationary). Surpluses may indicate over-taxation or under-spending.",
          },
          {
            heading: "Tax types",
            body: "**Direct taxes** on income/profits (income tax, corporation tax) — progressive if rate rises with income. **Indirect taxes** on goods (VAT, excise) — regressive as they take larger share of poor's income. Taxation affects incentives, redistribution and revenue.",
          },
        ],
        keyFormulas: [
          {
            name: "Budget balance",
            statement: "G − T: deficit if positive, surplus if negative",
          },
          { name: "Progressive tax", statement: "Rate rises with income" },
          { name: "Regressive tax", statement: "Larger burden on poor" },
        ],
        workedExample: {
          problem:
            "Government spends $900bn, collects $800bn tax. Budget position?",
          solution:
            "Deficit of $100bn — government must borrow or print money to finance the gap.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A budget deficit occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spending equals revenue" },
              { id: "b", text: "Government spending exceeds tax revenue" },
              { id: "c", text: "Exports exceed imports" },
              { id: "d", text: "Tax revenue exceeds spending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Budget deficit",
                statement: "G > T.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** G > T",
            commonErrors: ["Reversing definition."],
          },
        },
        {
          id: "cieige-q-u6l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish progressive from regressive taxation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tax types",
                statement:
                  "Progressive: rate rises with income; regressive: burden on poor.",
              },
            ],
            steps: [
              { reasoning: "Progressive defined.", marks: 1, markCode: "M" },
              { reasoning: "Regressive defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Progressive: tax rate rises with income (income tax) — redistributive. Regressive: takes larger share of poor's income (VAT) — burdens low earners.",
            commonErrors: ["Reversing them."],
          },
        },
        {
          id: "cieige-q-u6l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How is a budget deficit financed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deficit financing",
                statement: "Borrowing or money creation.",
              },
            ],
            steps: [
              { reasoning: "Borrowing method.", marks: 1, markCode: "M" },
              { reasoning: "Money creation method.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "By government borrowing (increasing national debt) or printing money (inflationary) — borrowing is sustainable short-term but accumulates debt; money creation risks inflation.",
            commonErrors: ["Thinking deficits are self-financing."],
          },
        },
        {
          id: "cieige-q-u6l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "G = $500bn, T = $450bn. Calculate deficit and explain two financing options.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Budget calculation",
                statement: "G−T = deficit.",
              },
            ],
            steps: [
              { reasoning: "Deficit = $50bn.", marks: 1, markCode: "M" },
              { reasoning: "Option 1: borrow.", marks: 1, markCode: "M" },
              { reasoning: "Option 2: print money.", marks: 1, markCode: "M" },
              { reasoning: "Consequences of each.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deficit = $50bn. Options: borrow (adds to national debt, interest costs) or print money (inflationary) — borrowing preferred if debt sustainable.",
            commonErrors: ["Forgetting consequences."],
          },
        },
        {
          id: "cieige-q-u6l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether governments should aim for budget surpluses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Surplus debate",
                statement: "Debt reduction vs under-spending.",
              },
            ],
            steps: [
              { reasoning: "Case for surpluses.", marks: 1, markCode: "M" },
              { reasoning: "Case against.", marks: 1, markCode: "M" },
              { reasoning: "Context matters.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Surpluses reduce debt but may mean under-provision of public services or over-taxation — appropriate in booms, harmful in recessions; balanced budgets aren't always optimal.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is VAT considered regressive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "VAT regressive",
                statement: "Same rate → larger share of poor's income.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "VAT applies same rate to all — poor spend larger share of income on consumption, so VAT takes larger proportion of their income than rich's.",
            commonErrors: ["Thinking same rate = equal burden."],
          },
        },
        {
          id: "cieige-q-u6l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "National debt refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Annual deficit" },
              { id: "b", text: "Accumulated government borrowing" },
              { id: "c", text: "Tax revenue" },
              { id: "d", text: "Export earnings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "National debt",
                statement: "Accumulated borrowing.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Accumulated borrowing",
            commonErrors: ["Confusing with deficit."],
          },
        },
        {
          id: "cieige-q-u6l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'multiplier effect' of government spending.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiplier",
                statement: "Spending → income → more spending.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Leakages noted.", marks: 1, markCode: "M" },
              { reasoning: "Size depends on MPC.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Initial spending becomes income for others who spend part of it — total income rises by more than initial injection; size depends on marginal propensity to consume and leakages.",
            commonErrors: ["Thinking spending = income once."],
          },
        },
        {
          id: "cieige-q-u6l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might high taxes reduce economic growth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tax disincentive",
                statement: "Higher taxes → less work/invest.",
              },
            ],
            steps: [
              { reasoning: "Disincentive mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Laffer curve idea.", marks: 1, markCode: "M" },
              { reasoning: "Nuance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "High taxes reduce incentives to work, save and invest — beyond a point, higher tax rates reduce revenue (Laffer curve); but moderate taxes fund growth-enhancing services.",
            commonErrors: ["All taxes harmful."],
          },
        },
        {
          id: "cieige-q-u6l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should governments borrow to fund current spending? Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Borrowing debate",
                statement: "Intergenerational fairness vs stimulus.",
              },
            ],
            steps: [
              { reasoning: "Case for borrowing.", marks: 1, markCode: "M" },
              { reasoning: "Case against.", marks: 1, markCode: "M" },
              { reasoning: "When appropriate.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Borrowing for investment may pay off; borrowing for current consumption shifts costs to future generations — appropriate in recessions, questionable in booms; depends on use and debt sustainability.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A budget surplus occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spending exceeds tax revenue" },
              { id: "b", text: "Tax revenue exceeds government spending" },
              { id: "c", text: "Exports exceed imports" },
              { id: "d", text: "Spending equals revenue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Budget surplus",
                statement: "T > G.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** T > G",
            commonErrors: ["Reversing definition."],
          },
        },
        {
          id: "cieige-q-u6l3c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these taxes is most likely to be progressive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excise duty" },
              { id: "b", text: "Income tax" },
              { id: "c", text: "Customs tariff" },
              { id: "d", text: "VAT" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Progressive tax",
                statement: "Rate rises with income.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Income tax",
            commonErrors: ["Choosing indirect tax."],
          },
        },
        {
          id: "cieige-q-u6l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The multiplier effect means an initial $1bn of government spending leads to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prices falling" },
              { id: "b", text: "Total income rising by exactly $1bn" },
              { id: "c", text: "Total income rising by more than $1bn" },
              { id: "d", text: "No change in income" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiplier",
                statement: "Spending → income → more spending.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Total income rises by more than $1bn",
            commonErrors: ["Thinking income rises only once."],
          },
        },
        {
          id: "cieige-q-u6l3c1-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain why a budget surplus is not always desirable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Surplus critique",
                statement: "May signal under-spending or over-taxation.",
              },
            ],
            steps: [
              { reasoning: "Possible cause explained.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A surplus may mean government under-provides services or over-taxes — it can coincide with weak demand or unmet needs, so it is not automatically good policy.",
            commonErrors: ["Assuming surplus is always good."],
          },
        },
        {
          id: "cieige-q-u6l3c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "G = $450bn, T = $500bn. State the budget position and explain one implication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Budget calculation",
                statement: "G−T determines balance.",
              },
            ],
            steps: [
              { reasoning: "Surplus = $50bn.", marks: 1, markCode: "M" },
              { reasoning: "T > G stated.", marks: 1, markCode: "M" },
              { reasoning: "Implication explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Budget surplus of $50bn (T exceeds G by $50bn) — government can reduce debt, cut taxes or raise spending; may also signal over-taxation or under-provision.",
            commonErrors: ["Sign errors."],
          },
        },
        {
          id: "cieige-q-u6l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the economic effects of a large and persistent budget deficit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deficit effects",
                statement: "Stimulus now vs debt/crowding out later.",
              },
            ],
            steps: [
              { reasoning: "Short-term stimulus effect.", marks: 1, markCode: "M" },
              { reasoning: "Debt accumulation.", marks: 1, markCode: "M" },
              { reasoning: "Crowding out / interest burden.", marks: 1, markCode: "M" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Persistent deficits boost demand short-term but accumulate national debt and interest payments; may crowd out private investment and raise future tax burdens — sustainable only if growth outpaces debt.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l3-c2-policy",
      title: "Fiscal policy objectives and tools",
      skill:
        "Analyse discretionary vs automatic stabilisers and policy trade-offs.",
      lesson: {
        sections: [
          {
            heading: "Fiscal policy tools",
            body: "**Discretionary policy** — deliberate changes in G or T (infrastructure spending, tax cuts). **Automatic stabilisers** — taxes and benefits that adjust automatically (progressive taxes fall in recession, unemployment benefits rise) — dampen cycles without new legislation.",
          },
          {
            heading: "Objectives and trade-offs",
            body: "Fiscal policy aims: manage aggregate demand (full employment), redistribute income, fund public goods, stabilise economy. Trade-offs: stimulus vs inflation, equity vs incentives, short-term vs long-term sustainability. **Crowding out**: government borrowing raises interest rates, reducing private investment.",
          },
        ],
        keyFormulas: [
          {
            name: "Automatic stabiliser",
            statement: "Progressive taxes + benefits adjust automatically",
          },
          {
            name: "Crowding out",
            statement:
              "Govt borrowing → higher rates → less private investment",
          },
        ],
        workedExample: {
          problem: "How do automatic stabilisers work in a recession?",
          solution:
            "Income falls → tax revenue falls automatically while unemployment benefits rise — government deficit widens without new legislation, cushioning the downturn.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Automatic stabilisers include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government borrowing" },
              { id: "b", text: "Progressive taxes and unemployment benefits" },
              { id: "c", text: "Only tax cuts" },
              { id: "d", text: "Only infrastructure spending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Automatic stabilisers",
                statement: "Taxes + benefits adjust automatically.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Progressive taxes + benefits",
            commonErrors: ["Confusing with discretionary policy."],
          },
        },
        {
          id: "cieige-q-u6l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'crowding out'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crowding out",
                statement: "Govt borrowing reduces private investment.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When government borrowing raises interest rates, private firms borrow less — government spending 'crowds out' private investment.",
            commonErrors: ["Confusing with stimulus."],
          },
        },
        {
          id: "cieige-q-u6l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish discretionary from automatic fiscal stabilisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discretionary vs automatic",
                statement: "Deliberate vs built-in.",
              },
            ],
            steps: [
              { reasoning: "Discretionary defined.", marks: 1, markCode: "M" },
              { reasoning: "Automatic defined.", marks: 1, markCode: "M" },
              { reasoning: "Comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Discretionary: deliberate policy changes (stimulus packages). Automatic: built-in stabilisers (progressive taxes, benefits) that adjust without new legislation.",
            commonErrors: ["Treating them as same."],
          },
        },
        {
          id: "cieige-q-u6l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how fiscal policy can reduce unemployment in a recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Fiscal stimulus",
                statement: "G↑ or T↓ → AD↑ → jobs↑.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Multiplier effect.", marks: 1, markCode: "M" },
              { reasoning: "Risk: inflation.", marks: 1, markCode: "A" },
              { reasoning: "Coherent answer.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Increase G or cut T → aggregate demand rises → output and jobs increase via multiplier; risk is inflation if economy near capacity.",
            commonErrors: ["No mechanism."],
          },
        },
        {
          id: "cieige-q-u6l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate fiscal stimulus during a recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal stimulus",
                statement: "Short-term boost vs debt/inflation.",
              },
            ],
            steps: [
              { reasoning: "Benefits: jobs, output.", marks: 1, markCode: "M" },
              {
                reasoning: "Costs: debt, inflation, crowding out.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Timing issues.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stimulus can prevent deep recession but adds debt and risks inflation if mistimed — effectiveness depends on economy's spare capacity and policy timing.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are automatic stabilisers 'automatic'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automatic stabilisers",
                statement: "Built into system — no new law needed.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "They operate without new legislation — tax revenues automatically fall and benefits automatically rise in recession, cushioning demand.",
            commonErrors: ["Thinking they need policy action."],
          },
        },
        {
          id: "cieige-q-u6l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fiscal policy uses which two tools?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wages and prices" },
              { id: "b", text: "Interest rates and money supply" },
              { id: "c", text: "Government spending and taxation" },
              { id: "d", text: "Exchange rates and trade" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fiscal policy",
                statement: "G and T.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** G and T",
            commonErrors: ["Confusing with monetary policy."],
          },
        },
        {
          id: "cieige-q-u6l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the trade-off between equity and incentives in taxation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Equity vs incentives",
                statement: "Progressive = fair but may disincentivise.",
              },
            ],
            steps: [
              { reasoning: "Equity argument.", marks: 1, markCode: "M" },
              { reasoning: "Incentive argument.", marks: 1, markCode: "M" },
              { reasoning: "Balanced view.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Progressive taxes redistribute (equity) but high marginal rates may reduce work/investment incentives — design seeks balance via moderate rates and allowances.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might government spending crowd out private investment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crowding out",
                statement: "Borrowing → higher rates.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "When it matters.", marks: 1, markCode: "M" },
              { reasoning: "Counter-argument.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Government borrowing increases demand for loanable funds → higher interest rates → private firms borrow less; matters most when economy near full capacity.",
            commonErrors: ["Thinking G always crowds out."],
          },
        },
        {
          id: "cieige-q-u6l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should fiscal policy be used for long-term growth or only short-term stabilisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal role",
                statement: "Both uses have trade-offs.",
              },
            ],
            steps: [
              { reasoning: "Short-term role.", marks: 1, markCode: "M" },
              { reasoning: "Long-term role.", marks: 1, markCode: "M" },
              { reasoning: "Constraints.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fiscal policy stabilises demand short-term but also funds growth (infrastructure, education) — sustainable long-term use requires balancing deficits and investment returns.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "During a recession, automatic stabilisers typically cause the budget to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Remain unchanged" },
              {
                id: "b",
                text: "Move towards deficit without new legislation",
              },
              { id: "c", text: "Move into surplus" },
              { id: "d", text: "Require parliamentary approval" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Automatic stabilisers",
                statement: "Tax revenue falls, benefits rise automatically.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Move towards deficit",
            commonErrors: ["Thinking new laws are needed."],
          },
        },
        {
          id: "cieige-q-u6l3c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Crowding out' occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Private firms borrow more than the government" },
              {
                id: "b",
                text: "Government borrowing raises interest rates, cutting private investment",
              },
              { id: "c", text: "Government reduces taxes" },
              { id: "d", text: "Consumers save more" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crowding out",
                statement: "Govt borrowing → higher rates → less private investment.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Higher rates reduce private investment",
            commonErrors: ["Confusing with stimulus."],
          },
        },
        {
          id: "cieige-q-u6l3c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Discretionary fiscal policy refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Automatic tax changes" },
              { id: "b", text: "Central bank rate decisions" },
              {
                id: "c",
                text: "Deliberate changes in government spending or taxation",
              },
              { id: "d", text: "Exchange rate movements" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discretionary policy",
                statement: "Deliberate G or T changes.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Deliberate changes in G or T",
            commonErrors: ["Confusing with automatic stabilisers."],
          },
        },
        {
          id: "cieige-q-u6l3c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why progressive taxation acts as an automatic stabiliser.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Progressive stabiliser",
                statement: "Tax take falls automatically in downturns.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Recession effect.", marks: 1, markCode: "M" },
              { reasoning: "Boom effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "As incomes fall in a recession, tax revenue drops automatically while benefit spending rises — cushioning demand; in a boom, revenues rise faster than incomes, cooling demand without new legislation.",
            commonErrors: ["Thinking it needs policy action."],
          },
        },
        {
          id: "cieige-q-u6l3c2-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "The government raises spending by $10bn during a recession. Explain how the multiplier effect and crowding out might interact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Stimulus interaction",
                statement: "Multiplier boosts; crowding out may offset.",
              },
            ],
            steps: [
              { reasoning: "Multiplier mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Crowding out mechanism.", marks: 1, markCode: "M" },
              { reasoning: "When each dominates.", marks: 1, markCode: "M" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Spending raises AD directly and via multiplier; if financed by borrowing, higher interest rates may reduce private investment — net stimulus depends on spare capacity and how borrowing is financed.",
            commonErrors: ["Ignoring one mechanism."],
          },
        },
        {
          id: "cieige-q-u6l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of fiscal policy to reduce income inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal redistribution",
                statement: "Progressive taxes + transfers vs incentives.",
              },
            ],
            steps: [
              { reasoning: "Redistribution mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Incentive costs.", marks: 1, markCode: "M" },
              { reasoning: "Effectiveness conditions.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Progressive taxation and benefits reduce inequality but very high rates may weaken work incentives — effectiveness depends on tax design (allowances, moderate rates) and targeting of transfers.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
