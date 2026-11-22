import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "cieige-u6-lesson-6-4",
  code: "6-4",
  title: "Monetary Policy and Interest Rates",
  goal: "I CAN explain monetary policy tools, transmission mechanisms and effects on the economy.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 6: macroeconomic policy"],
  vocabulary: [
    {
      term: "Monetary policy",
      definition: "Central bank control of money supply and interest rates.",
    },
    {
      term: "Base rate",
      definition:
        "Interest rate set by central bank — benchmark for all rates.",
    },
    {
      term: "Contractionary policy",
      definition: "Raising rates/reducing money supply to slow economy.",
    },
    {
      term: "Expansionary policy",
      definition:
        "Lowering rates/increasing money supply to stimulate economy.",
    },
    {
      term: "Quantitative easing",
      definition: "Central bank buys assets to inject money into economy.",
    },
    {
      term: "Liquidity trap",
      definition:
        "Interest rates near zero, monetary policy loses effectiveness.",
    },
  ],
  concepts: [
    {
      id: "cieige-u6l4-c1-tools",
      title: "Monetary policy tools",
      skill:
        "Explain interest rate changes and quantitative easing mechanisms.",
      lesson: {
        sections: [
          {
            heading: "Interest rate mechanism",
            body: "Central bank sets **base rate** → affects all borrowing/lending rates → changes spending and saving incentives → affects aggregate demand. **Contractionary** (raise rates): reduces borrowing, increases saving → AD↓, inflation↓, growth slows. **Expansionary** (cut rates): stimulates borrowing/spending → AD↑, growth↑, inflation risk↑.",
          },
          {
            heading: "Quantitative easing",
            body: "When rates hit zero (liquidity trap), central bank **buys government bonds/assets** from banks — injects money, lowers long-term rates, encourages lending and asset prices. Used in 2008 crisis and COVID-19.",
          },
        ],
        keyFormulas: [
          { name: "Contractionary", statement: "Rates↑ → borrowing↓ → AD↓" },
          { name: "Expansionary", statement: "Rates↓ → borrowing↑ → AD↑" },
          {
            name: "QE",
            statement: "Buy assets → inject money → lower long rates",
          },
        ],
        workedExample: {
          problem: "Inflation is 6%, target 2%. What should central bank do?",
          solution:
            "Raise interest rates — contractionary policy reduces borrowing and spending, cooling aggregate demand and inflation.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Monetary policy is controlled by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The central bank" },
              { id: "b", text: "Firms" },
              { id: "c", text: "Consumers" },
              { id: "d", text: "The government" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Monetary policy",
                statement: "Central bank.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Central bank",
            commonErrors: ["Confusing with fiscal policy."],
          },
        },
        {
          id: "cieige-q-u6l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'base rate'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Base rate",
                statement: "Central bank's benchmark rate.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Role explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The interest rate set by the central bank — benchmark for all other rates; changes transmit through the economy via borrowing costs.",
            commonErrors: ["Confusing with market rates."],
          },
        },
        {
          id: "cieige-q-u6l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how raising interest rates reduces inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Contractionary transmission",
                statement: "Rates↑ → borrowing↓ → AD↓ → inflation↓.",
              },
            ],
            steps: [
              { reasoning: "Mechanism chain.", marks: 1, markCode: "M" },
              {
                reasoning: "Spending components affected.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher rates raise borrowing costs and reward saving → consumption and investment fall → aggregate demand falls → price pressure eases → inflation falls.",
            commonErrors: ["No transmission chain."],
          },
        },
        {
          id: "cieige-q-u6l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Inflation 5%, growth slowing. Should central bank raise or cut rates? Explain trade-off.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Policy dilemma",
                statement: "Inflation vs growth trade-off.",
              },
            ],
            steps: [
              {
                reasoning: "Raising rates: inflation↓ but growth↓.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cutting rates: growth↑ but inflation↑.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Diagnosis needed.", marks: 1, markCode: "M" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trade-off: cutting rates helps growth but worsens inflation; raising rates does opposite — need to diagnose whether inflation or stagnation is the bigger problem.",
            commonErrors: ["One-sided recommendation."],
          },
        },
        {
          id: "cieige-q-u6l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain quantitative easing and when it's used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "QE",
                statement: "Asset purchases when rates at zero.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "When used.", marks: 1, markCode: "M" },
              { reasoning: "Risks/effects.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Coherent answer.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "QE: central bank buys bonds/assets, injecting money and lowering long-term rates — used when rates hit zero (liquidity trap); risks asset bubbles and future inflation.",
            commonErrors: ["Confusing with rate cuts."],
          },
        },
        {
          id: "cieige-q-u6l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'liquidity trap'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquidity trap",
                statement: "Rates near zero; monetary policy ineffective.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When interest rates approach zero, further cuts can't stimulate — people hoard cash expecting deflation; monetary policy loses traction, needing fiscal or QE.",
            commonErrors: ["Confusing with deflation."],
          },
        },
        {
          id: "cieige-q-u6l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Contractionary monetary policy aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raise employment" },
              { id: "b", text: "Reduce inflation by slowing the economy" },
              { id: "c", text: "Increase exports" },
              { id: "d", text: "Stimulate growth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contractionary",
                statement: "Slow economy to cut inflation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Reduce inflation",
            commonErrors: ["Reversing policy."],
          },
        },
        {
          id: "cieige-q-u6l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do interest rate changes affect exchange rates?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest-exchange link",
                statement:
                  "Higher rates attract capital → currency appreciates.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Effect on trade.", marks: 1, markCode: "M" },
              { reasoning: "Trade-off noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher rates attract foreign capital seeking returns → currency appreciates → exports less competitive, imports cheaper — trade-off between inflation control and export competitiveness.",
            commonErrors: ["Thinking no link."],
          },
        },
        {
          id: "cieige-q-u6l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is monetary policy often preferred for short-term stabilisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monetary flexibility",
                statement: "Central bank independent, fast-acting.",
              },
            ],
            steps: [
              { reasoning: "Speed advantage.", marks: 1, markCode: "M" },
              { reasoning: "Independence advantage.", marks: 1, markCode: "M" },
              { reasoning: "Fiscal comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Central banks can act quickly and independently (no legislative delay), making monetary policy more nimble for short-term demand management than fiscal policy.",
            commonErrors: ["Thinking fiscal is faster."],
          },
        },
        {
          id: "cieige-q-u6l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether central bank independence improves monetary policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CB independence",
                statement: "Credibility vs accountability.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: credible, depoliticised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: less democratic accountability.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Independent central banks are more credible (lower inflation bias) but less democratically accountable — most evidence supports independence for price stability.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the central bank raises the base rate, the immediate effect is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Investment automatically rises" },
              { id: "b", text: "Saving becomes less rewarding" },
              { id: "c", text: "Money supply increases" },
              { id: "d", text: "Borrowing becomes more expensive" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Base rate",
                statement: "Benchmark for all borrowing/lending rates.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Borrowing more expensive",
            commonErrors: ["Reversing effect."],
          },
        },
        {
          id: "cieige-q-u6l4c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Quantitative easing involves the central bank:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buying government bonds/assets to inject money" },
              { id: "b", text: "Cutting government spending" },
              { id: "c", text: "Printing physical cash for households" },
              { id: "d", text: "Raising interest rates" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "QE",
                statement: "Asset purchases to inject money.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Buying bonds/assets",
            commonErrors: ["Confusing with rate cuts."],
          },
        },
        {
          id: "cieige-q-u6l4c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'liquidity trap' is best described as:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Interest rates near zero where monetary policy loses effectiveness",
              },
              { id: "b", text: "Falling stock prices" },
              { id: "c", text: "A shortage of physical cash" },
              { id: "d", text: "High inflation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquidity trap",
                statement: "Rates ≈ 0; policy ineffective.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Rates near zero",
            commonErrors: ["Confusing with deflation."],
          },
        },
        {
          id: "cieige-q-u6l4c1-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is expansionary monetary policy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expansionary",
                statement: "Lower rates / more money to stimulate.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Policy to stimulate the economy — lowering interest rates or increasing money supply — raising aggregate demand, growth and employment but risking inflation.",
            commonErrors: ["Reversing definition."],
          },
        },
        {
          id: "cieige-q-u6l4c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how cutting interest rates can help an economy in recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Expansionary transmission",
                statement: "Rates↓ → borrowing↑ → AD↑.",
              },
            ],
            steps: [
              { reasoning: "Mechanism chain.", marks: 1, markCode: "M" },
              {
                reasoning: "Spending components affected.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lower rates cut borrowing costs and reward spending over saving → consumption and investment rise → aggregate demand increases → output and jobs recover; risk is inflation if overdone.",
            commonErrors: ["No transmission chain."],
          },
        },
        {
          id: "cieige-q-u6l4c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the use of interest rate policy versus quantitative easing when rates are near zero.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Zero lower bound",
                statement: "Rate cuts exhausted; QE as alternative.",
              },
            ],
            steps: [
              { reasoning: "Why rate policy fails.", marks: 1, markCode: "M" },
              { reasoning: "QE mechanism.", marks: 1, markCode: "M" },
              { reasoning: "QE risks.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "At the zero lower bound, rate cuts are exhausted — QE buys assets to lower long rates and inject money; effective in crises but risks asset bubbles and difficult exit, so used as last resort alongside fiscal policy.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l4-c2-transmission",
      title: "Transmission mechanisms and limits",
      skill:
        "Trace how monetary policy affects the real economy and its limitations.",
      lesson: {
        sections: [
          {
            heading: "Transmission channels",
            body: "Interest rates affect economy via: **borrowing costs** (consumption, investment), **saving incentives** (higher rates reward saving), **asset prices** (lower rates → higher house/share prices → wealth effect), **exchange rate** (capital flows), and **expectations**. Multiple channels amplify or dampen effects.",
          },
          {
            heading: "Limitations",
            body: "Monetary policy may fail when: **liquidity trap** (rates at zero), **banking crisis** (banks won't lend regardless), **balance sheet recession** (debt overhang), or **inflexible prices/wages**. Time lags (6-18 months) make timing difficult.",
          },
        ],
        keyFormulas: [
          {
            name: "Transmission",
            statement: "Rates → spending/saving → AD → output/inflation",
          },
          { name: "Time lag", statement: "Policy effects take 6-18 months" },
        ],
        workedExample: {
          problem: "Why might rate cuts fail to stimulate?",
          solution:
            "If banks won't lend (credit crunch), households repay debt instead of borrowing, or rates already at zero (liquidity trap) — transmission breaks down.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'wealth effect' channel works via:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Lower rates → higher asset prices → more spending",
              },
              { id: "b", text: "More taxes" },
              { id: "c", text: "Higher rates → more saving" },
              { id: "d", text: "Fewer exports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wealth effect",
                statement: "Asset prices → spending.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Lower rates → asset prices → spending",
            commonErrors: ["Wrong channel."],
          },
        },
        {
          id: "cieige-q-u6l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two channels through which interest rates affect the economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Transmission channels",
                statement: "Borrowing, saving, assets, exchange.",
              },
            ],
            steps: [
              { reasoning: "Two valid channels.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. borrowing costs (investment ↓ when rates↑) and asset prices (house prices rise when rates fall → wealth effect → spending↑).",
            commonErrors: ["Listing without mechanism."],
          },
        },
        {
          id: "cieige-q-u6l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do monetary policy effects have long time lags?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy lags",
                statement: "6-18 months for full effect.",
              },
            ],
            steps: [
              { reasoning: "Reasons.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rate changes take time to affect borrowing decisions, spending, production and prices — by the time effects appear, conditions may have changed, making timing difficult.",
            commonErrors: ["Expecting instant effects."],
          },
        },
        {
          id: "cieige-q-u6l4c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why monetary policy may fail during a banking crisis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Banking crisis",
                statement: "Banks won't lend regardless of rates.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Transmission break.", marks: 1, markCode: "M" },
              { reasoning: "Alternative needed.", marks: 1, markCode: "A" },
              { reasoning: "Coherent answer.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "If banks are insolvent or risk-averse, they won't lend even at low rates — the credit channel breaks; need bank recapitalisation or fiscal policy instead.",
            commonErrors: ["Assuming rates alone work."],
          },
        },
        {
          id: "cieige-q-u6l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate quantitative easing as a policy tool.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "QE evaluation",
                statement: "Stimulus vs asset bubbles/inflation.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: stimulus when rates zero.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: bubbles, inequality, exit difficulty.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Evidence mixed.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "QE prevented deeper recessions but may inflate asset bubbles and worsen inequality — effective as crisis tool, uncertain for normal times; exit strategy is challenging.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'balance sheet recession'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balance sheet recession",
                statement: "Debt overhang → deleveraging.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When private sector debt is too high, firms/houses prioritise repayment over spending — monetary stimulus fails; needs fiscal policy or debt restructuring.",
            commonErrors: ["Confusing with normal recession."],
          },
        },
        {
          id: "cieige-q-u6l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Lower interest rates typically cause house prices to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Become volatile" },
              { id: "b", text: "Fall" },
              { id: "c", text: "Rise (cheaper mortgages)" },
              { id: "d", text: "Stay same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Asset prices",
                statement: "Lower rates → higher prices.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Rise",
            commonErrors: ["Reversing."],
          },
        },
        {
          id: "cieige-q-u6l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does the exchange rate channel transmit monetary policy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchange channel",
                statement: "Rates → capital flows → currency → trade.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              {
                reasoning: "Effect on exports/imports.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Net effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lower rates → capital outflow → currency depreciates → exports cheaper, imports dearer → net exports rise → AD increases — adds to domestic stimulus.",
            commonErrors: ["Missing trade link."],
          },
        },
        {
          id: "cieige-q-u6l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is timing monetary policy difficult?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy timing",
                statement: "Long lags + uncertain data.",
              },
            ],
            steps: [
              { reasoning: "Lag problem.", marks: 1, markCode: "M" },
              { reasoning: "Data uncertainty.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Effects take 6-18 months and economic data is revised — by the time policy works, conditions may have changed, risking over/under-shooting.",
            commonErrors: ["Thinking it's easy."],
          },
        },
        {
          id: "cieige-q-u6l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare monetary and fiscal policy for stimulating a recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy comparison",
                statement: "Speed vs targeting vs politics.",
              },
            ],
            steps: [
              { reasoning: "Monetary advantages.", marks: 1, markCode: "M" },
              { reasoning: "Fiscal advantages.", marks: 1, markCode: "M" },
              { reasoning: "Limitations each.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Monetary is faster and independent but limited at zero rates; fiscal can target specific sectors but is slower and politically constrained — often used together.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'saving channel' works when higher interest rates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reward saving, so households spend less" },
              { id: "b", text: "Force firms to borrow more" },
              { id: "c", text: "Increase imports" },
              { id: "d", text: "Raise wages automatically" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Saving channel",
                statement: "Higher rates → less consumption.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Reward saving → less spending",
            commonErrors: ["Wrong channel."],
          },
        },
        {
          id: "cieige-q-u6l4c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'credit crunch' most directly means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The currency depreciates" },
              {
                id: "b",
                text: "Banks become reluctant to lend even at low rates",
              },
              { id: "c", text: "Government debt falls" },
              { id: "d", text: "Interest rates rise sharply" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Credit crunch",
                statement: "Banks won't lend regardless of rates.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Banks reluctant to lend",
            commonErrors: ["Confusing with rate rises."],
          },
        },
        {
          id: "cieige-q-u6l4c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The full effects of a change in interest rates typically take:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No time — effects are instant" },
              { id: "b", text: "6–18 months" },
              { id: "c", text: "5 years" },
              { id: "d", text: "1 day" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Time lag",
                statement: "6–18 months for full effect.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 6–18 months",
            commonErrors: ["Expecting instant effects."],
          },
        },
        {
          id: "cieige-q-u6l4c2-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two reasons why monetary policy might fail to stimulate a recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Policy limits",
                statement: "Liquidity trap, credit crunch, debt overhang.",
              },
            ],
            steps: [
              { reasoning: "Two valid reasons.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. rates already at zero (liquidity trap) so cuts impossible, and banks unwilling to lend (credit crunch) so lower rates don't reach borrowers.",
            commonErrors: ["Listing without explanation."],
          },
        },
        {
          id: "cieige-q-u6l4c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the exchange rate channel amplifies a cut in interest rates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchange channel",
                statement: "Rates → capital flows → currency → trade.",
              },
            ],
            steps: [
              { reasoning: "Capital flow mechanism.", marks: 1, markCode: "M" },
              {
                reasoning: "Trade effect (X−M).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Amplification result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rate cuts reduce returns on domestic assets → capital outflow → currency depreciates → exports cheaper and imports dearer → net exports rise → AD increases, reinforcing domestic stimulus.",
            commonErrors: ["Missing trade link."],
          },
        },
        {
          id: "cieige-q-u6l4c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether monetary policy alone can end a deep recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy limits",
                statement: "Transmission can break down in deep crises.",
              },
            ],
            steps: [
              { reasoning: "Case for monetary policy.", marks: 1, markCode: "M" },
              { reasoning: "Limits in deep recession.", marks: 1, markCode: "M" },
              { reasoning: "Role of fiscal/QE.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Monetary policy works when transmission channels function, but in deep recessions (zero rates, credit crunch, debt overhang) it loses traction — fiscal stimulus and QE may be needed alongside.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
