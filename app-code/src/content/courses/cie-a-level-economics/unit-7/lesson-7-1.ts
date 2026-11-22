import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "cieale-u7-lesson-7-1",
  code: "7-1",
  title: "Exchange Rates and the Balance of Payments",
  goal: "I CAN analyse exchange rate determination, the Marshall-Lerner condition and BoP adjustment mechanisms.",
  standards: [
    "Cambridge A Level Economics 9708",
    "Unit 7: international economics",
  ],
  vocabulary: [
    {
      term: "Exchange rate",
      definition: "Price of one currency in terms of another.",
    },
    {
      term: "Appreciation/depreciation",
      definition: "Currency value rises/falls.",
    },
    {
      term: "Balance of payments",
      definition: "Record of all international transactions.",
    },
    {
      term: "Marshall-Lerner condition",
      definition: "Devaluation improves BoP if PED(X)+PED(M)>1.",
    },
    {
      term: "J-curve",
      definition: "BoP worsens before improving after devaluation.",
    },
    {
      term: "Purchasing power parity",
      definition: "Exchange rates reflect price level differences.",
    },
  ],
  concepts: [
    {
      id: "cieale-u7l1-c1-fx",
      title: "Exchange rate determination",
      skill:
        "Explain demand/supply for currency and factors shifting exchange rates.",
      lesson: {
        sections: [
          {
            heading: "Currency demand and supply",
            body: "Exchange rate determined by demand for and supply of currency. **Demand for currency**: exports (foreigners buy domestic goods → need domestic currency), capital inflows (foreigners invest → need currency). **Supply of currency**: imports, capital outflows. Higher demand → appreciation; higher supply → depreciation.",
          },
          {
            heading: "Factors shifting exchange rates",
            body: "**Interest rates** (higher rates → capital inflows → appreciation). **Inflation** (higher domestic inflation → competitiveness falls → depreciation). **Current account** (trade deficit → depreciation). **Speculation/expectations** can amplify moves. **Terms of trade** and government intervention also matter.",
          },
        ],
        keyFormulas: [
          { name: "Appreciation", statement: "Demand for currency > supply" },
          { name: "Depreciation", statement: "Supply > demand" },
          {
            name: "Interest differential",
            statement: "Higher rates attract capital",
          },
        ],
        workedExample: {
          problem:
            "Central bank raises interest rates from 2% to 5%. Effect on exchange rate?",
          solution:
            "Higher rates attract foreign capital inflows → demand for domestic currency rises → appreciation — assuming no offsetting factors.",
        },
      },
      questions: [
        {
          id: "cieale-q-u7l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Exchange rate appreciation means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Value falls" },
              { id: "b", text: "Currency value rises" },
              { id: "c", text: "Fixed rate" },
              { id: "d", text: "Pegged rate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Appreciation",
                statement: "Value up.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Value rises",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "cieale-q-u7l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What creates demand for a country's currency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Currency demand",
                statement: "Exports + capital inflows.",
              },
            ],
            steps: [
              { reasoning: "Two sources.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Exports (foreigners need currency to buy goods) and capital inflows (foreigners need currency to invest).",
            commonErrors: ["Only one source."],
          },
        },
        {
          id: "cieale-q-u7l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how higher domestic inflation affects the exchange rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation & FX",
                statement: "Competitiveness.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Trade effect.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher inflation → domestic goods less competitive → exports fall, imports rise → demand for currency falls → depreciation.",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "cieale-q-u7l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why might an interest rate rise NOT strengthen the currency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rate limits",
                statement: "Other factors dominate.",
              },
            ],
            steps: [
              { reasoning: "Countervailing factors.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If accompanied by higher inflation expectations, large trade deficit, or currency already overvalued — capital inflows may not offset other pressures.",
            commonErrors: ["Guaranteed appreciation."],
          },
        },
        {
          id: "cieale-q-u7l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate purchasing power parity as an exchange rate theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PPP",
                statement: "Long-run equilibrium.",
              },
            ],
            steps: [
              { reasoning: "Theory stated.", marks: 1, markCode: "M" },
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "PPP explains long-run trends (inflation differentials → depreciation) but fails short-run — capital flows, speculation, non-tradables break it down.",
            commonErrors: ["Universal validity."],
          },
        },
        {
          id: "cieale-q-u7l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'speculative' demand for currency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speculation",
                statement: "Expectations-driven flows.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Buying/selling currency expecting future price changes — can amplify trends or trigger crises; 'self-fulfilling' expectations possible.",
            commonErrors: ["Confusing with trade."],
          },
        },
        {
          id: "cieale-q-u7l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A trade deficit tends to cause currency:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pegging" },
              { id: "b", text: "Depreciation" },
              { id: "c", text: "No change" },
              { id: "d", text: "Appreciation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trade & FX",
                statement: "Deficit → supply ↑.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Depreciation",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "cieale-q-u7l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does 'capital flight' affect the exchange rate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Capital flight",
                statement: "Outflows → depreciation.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Triggers.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Investors sell domestic assets → supply of currency rises → depreciation → can spiral into currency crisis if confidence collapses.",
            commonErrors: ["Thinking it strengthens."],
          },
        },
        {
          id: "cieale-q-u7l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'terms of trade' and its effect on the exchange rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Terms of trade",
                statement: "Export/import price ratio.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect on currency.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ratio of export prices to import prices — improvement (exports dearer) → more currency demand → appreciation; deterioration → depreciation.",
            commonErrors: ["Confusing with trade balance."],
          },
        },
        {
          id: "cieale-q-u7l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the 'impossible trinity' in exchange rate regimes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Impossible trinity",
                statement: "Choose two of three.",
              },
            ],
            steps: [
              { reasoning: "Three options.", marks: 1, markCode: "M" },
              { reasoning: "Why can't have all.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs regimes.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Can't have fixed rate + free capital movement + independent monetary policy — countries choose two: fixed+independent (capital controls), floating+independent (most common), fixed+open (currency board).",
            commonErrors: ["All three possible."],
          },
        },
        {
          id: "cieale-q-u7l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country's currency appreciates when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the central bank prints more notes" },
              { id: "b", text: "demand for it exceeds supply at the current exchange rate" },
              { id: "c", text: "its supply exceeds demand" },
              { id: "d", text: "imports rise sharply" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchange rate",
                statement: "Demand > supply → appreciation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Demand exceeds supply",
            commonErrors: ["Reversing demand and supply."],
          },
        },
        {
          id: "cieale-q-u7l1c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The exchange rate rises from 2.0 to 2.2 units of currency B per unit of currency A. Calculate the percentage appreciation of currency A.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage change",
                statement: "(New − old)/old × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Appreciation = (2.2−2.0)/2.0 × 100 = 10%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Appreciation = 10%",
            commonErrors: ["Dividing by the new rate 2.2."],
          },
        },
        {
          id: "cieale-q-u7l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If domestic inflation is persistently higher than in trading partners, the exchange rate tends to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "depreciate as competitiveness falls" },
              { id: "b", text: "appreciate as exports become dearer" },
              { id: "c", text: "double in value" },
              { id: "d", text: "remain unchanged" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation and FX",
                statement: "Higher inflation → depreciation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Depreciation",
            commonErrors: ["Reversing the direction."],
          },
        },
        {
          id: "cieale-q-u7l1c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A country's currency depreciates by 20%. An exporter previously charged $10 per unit in foreign currency.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, unit: "dollars" },
              { label: "b", answer: -20, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Depreciation effect",
                statement: "Foreign price falls by depreciation %.",
              },
            ],
            steps: [
              {
                reasoning: "New price = 10 × (1 − 0.20) = $8.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "% change = (8−10)/10 × 100 = −20%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "New price = $8 (−20%)",
            commonErrors: ["Assuming the foreign price is unchanged."],
          },
        },
        {
          id: "cieale-q-u7l1c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Widespread speculation that a currency will fall tends to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cause it to appreciate" },
              { id: "b", text: "raise demand for it" },
              { id: "c", text: "have no effect on the rate" },
              { id: "d", text: "increase its supply and push the exchange rate down" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Speculation",
                statement: "Expected fall → sell → depreciation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Supply rises, rate falls",
            commonErrors: ["Reversing the speculation effect."],
          },
        },
        {
          id: "cieale-q-u7l1c1-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "The exchange rate is $1 = €0.90. Calculate the euro value of $200.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 180, unit: "euros" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exchange rate conversion",
                statement: "Value × rate.",
              },
            ],
            steps: [
              {
                reasoning: "€ value = 200 × 0.90 = €180.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "€180",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
      ],
    },
    {
      id: "cieale-u7l1-c2-bop",
      title: "Balance of payments and adjustment",
      skill:
        "Analyse BoP components, the Marshall-Lerner condition and J-curve.",
      lesson: {
        sections: [
          {
            heading: "BoP structure",
            body: "**Current account**: trade in goods (visible), services (invisible), income (interest/dividends), transfers (remittances). **Capital account**: asset transactions. **Financial account**: investment flows. Current account deficit financed by capital/financial account surplus.",
          },
          {
            heading: "Adjustment mechanisms",
            body: "**Price mechanism**: depreciation makes exports cheaper, imports dearer → improves trade balance if **Marshall-Lerner condition** met (PED_X + PED_M > 1). **Income mechanism**: recession reduces import demand. **J-curve**: devaluation initially worsens BoP (contracts inelastic) before improving. **Policy**: expenditure-reducing (contraction) or expenditure-switching (devaluation, tariffs).",
          },
        ],
        keyFormulas: [
          { name: "Marshall-Lerner", statement: "η_X + η_M > 1" },
          { name: "J-curve", statement: "Short-run worsen, long-run improve" },
          { name: "Current account", statement: "Trade + income + transfers" },
        ],
        workedExample: {
          problem:
            "Currency depreciates 20%. Imports cost more in domestic currency. Why might BoP initially worsen?",
          solution:
            "J-curve: import contracts inelastic in short run → import bill rises before quantities adjust → BoP worsens, then improves as demand shifts to domestic goods.",
        },
      },
      questions: [
        {
          id: "cieale-q-u7l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The current account includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only goods" },
              { id: "b", text: "Only investment" },
              { id: "c", text: "Trade, income and transfers" },
              { id: "d", text: "Government spending" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Current account",
                statement: "Trade+income+transfers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Trade+income+transfers",
            commonErrors: ["Missing invisibles."],
          },
        },
        {
          id: "cieale-q-u7l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State the Marshall-Lerner condition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marshall-Lerner",
                statement: "Sum of PEDs > 1.",
              },
            ],
            steps: [
              { reasoning: "Condition stated.", marks: 1, markCode: "M" },
              { reasoning: "Meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "PED of exports + PED of imports > 1 — devaluation improves trade balance only if demand is sufficiently price-responsive.",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "cieale-q-u7l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'J-curve' effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "J-curve",
                statement: "Short-run worsening.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Why it happens.", marks: 1, markCode: "M" },
              { reasoning: "Long-run.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "After devaluation, import contracts (inelastic) → import bill rises → BoP worsens; over time quantities adjust → exports rise, imports fall → BoP improves — J-shape.",
            commonErrors: ["Immediate improvement assumed."],
          },
        },
        {
          id: "cieale-q-u7l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why might a current account deficit be unsustainable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deficit sustainability",
                statement: "Financing limits.",
              },
            ],
            steps: [
              { reasoning: "Financing need.", marks: 1, markCode: "M" },
              { reasoning: "Debt accumulation.", marks: 1, markCode: "M" },
              { reasoning: "Confidence risk.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Must be financed by borrowing/asset sales → accumulating liabilities; if lenders lose confidence → sudden stop, currency crisis, forced adjustment.",
            commonErrors: ["Always sustainable."],
          },
        },
        {
          id: "cieale-q-u7l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate expenditure-switching vs expenditure-reducing policies for BoP adjustment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BoP policies",
                statement: "Switching vs reducing.",
              },
            ],
            steps: [
              { reasoning: "Expenditure-switching.", marks: 1, markCode: "M" },
              { reasoning: "Expenditure-reducing.", marks: 1, markCode: "M" },
              { reasoning: "Trade-offs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Switching (devaluation, tariffs) targets trade directly but may raise inflation; reducing (contraction) cuts all spending → recession — often combined.",
            commonErrors: ["One policy only."],
          },
        },
        {
          id: "cieale-q-u7l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'capital account' transaction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capital account",
                statement: "Asset transfers.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Purchase/sale of assets abroad — e.g. buying foreign shares, property; recorded in financial account in modern BoP.",
            commonErrors: ["Confusing with current."],
          },
        },
        {
          id: "cieale-q-u7l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A current account surplus means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spending exceeds income" },
              { id: "b", text: "Earnings from abroad exceed payments" },
              { id: "c", text: "Imports > exports" },
              { id: "d", text: "Debt is rising" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Surplus", statement: "Net inflow." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Net inflow",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "cieale-q-u7l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'income effects' adjust the BoP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Income mechanism",
                statement: "Recession reduces imports.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Automatic nature.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Depreciation → lower export demand → output falls → incomes fall → import demand falls → trade balance improves automatically — but at cost of recession.",
            commonErrors: ["No cost acknowledged."],
          },
        },
        {
          id: "cieale-q-u7l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might exchange rate changes NOT improve the trade balance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ML failure",
                statement: "Low elasticity.",
              },
            ],
            steps: [
              { reasoning: "Elasticity condition.", marks: 1, markCode: "M" },
              { reasoning: "Examples of inelastic.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If PED_X + PED_M < 1 (inelastic demand) — e.g. essential imports — depreciation raises import bill without reducing quantity → balance worsens.",
            commonErrors: ["Always improves."],
          },
        },
        {
          id: "cieale-q-u7l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether a current account deficit always indicates economic weakness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deficit interpretation",
                statement: "Context matters.",
              },
            ],
            steps: [
              { reasoning: "Weakness case.", marks: 1, markCode: "M" },
              { reasoning: "Investment case.", marks: 1, markCode: "M" },
              { reasoning: "Sustainability factor.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Not always — deficit financing productive investment can be sustainable (like US); deficit financing consumption or with low confidence is risky — depends on composition and financing.",
            commonErrors: ["Deficit = bad."],
          },
        },
        {
          id: "cieale-q-u7l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The current account of the balance of payments records:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "capital investment flows only" },
              { id: "b", text: "government budget balances" },
              { id: "c", text: "trade in goods and services, income flows and transfers" },
              { id: "d", text: "only trade in merchandise" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Current account",
                statement: "Trade + income + transfers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Trade, income and transfers",
            commonErrors: ["Confusing with financial account."],
          },
        },
        {
          id: "cieale-q-u7l1c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Exports of goods and services = $500bn, imports = $620bn, income received = $50bn, income paid = $40bn and net transfers = +$10bn. Calculate the current account balance.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -90, unit: "billion dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Current account",
                statement: "Trade balance + net income + net transfers.",
              },
            ],
            steps: [
              {
                reasoning: "Balance = (500−620) + (50−40) + 10 = −90.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Current account = −$90bn",
            commonErrors: ["Ignoring income and transfer flows."],
          },
        },
        {
          id: "cieale-q-u7l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Marshall-Lerner condition requires that a depreciation improves the trade balance only if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the exchange rate is floating" },
              { id: "b", text: "exports already exceed imports" },
              { id: "c", text: "tariffs are imposed on imports" },
              { id: "d", text: "PED of exports plus PED of imports exceeds 1" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Marshall-Lerner",
                statement: "η_X + η_M > 1.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** PED_X + PED_M > 1",
            commonErrors: ["Testing each PED against 1 separately."],
          },
        },
        {
          id: "cieale-q-u7l1c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The PED for exports is 1.2 and for imports is 0.9. A depreciation lowers export prices by 10% in foreign currency.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2.1 },
              { label: "b", answer: 12, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Marshall-Lerner",
                statement: "η_X + η_M vs 1; %ΔQ = PED × %ΔP.",
              },
            ],
            steps: [
              {
                reasoning: "η_X + η_M = 1.2 + 0.9 = 2.1 > 1 — condition satisfied.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Export volume rises by 1.2 × 10 = 12%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Sum = 2.1; export volume +12%",
            commonErrors: ["Comparing each elasticity to 1 separately."],
          },
        },
        {
          id: "cieale-q-u7l1c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'J-curve' describes how the balance of payments:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "is unaffected by exchange rates" },
              { id: "b", text: "improves immediately after depreciation" },
              { id: "c", text: "only applies to trade in services" },
              { id: "d", text: "initially worsens after a depreciation before improving" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "J-curve",
                statement: "Worsen then improve.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Worsens then improves",
            commonErrors: ["Expecting instant improvement."],
          },
        },
        {
          id: "cieale-q-u7l1c2-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "The trade balance is −$50bn. After a depreciation, exports rise by $40bn and imports fall by $15bn. Calculate the new trade balance.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "billion dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Trade balance",
                statement: "Exports − imports.",
              },
            ],
            steps: [
              {
                reasoning: "New balance = −50 + 40 + 15 = $5bn.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Trade balance = +$5bn",
            commonErrors: ["Forgetting that falling imports also improves the balance."],
          },
        },
      ],
    },
  ],
};
