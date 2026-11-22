import type { Lesson } from "../../../types.ts";

export const lesson65: Lesson = {
  id: "cieige-u6-lesson-6-5",
  code: "6-5",
  title: "Balance of Payments and Exchange Rates",
  goal: "I CAN explain the balance of payments, exchange rate determination and their economic effects.",
  standards: [
    "Cambridge IGCSE Economics 0455",
    "Unit 6: international economics",
  ],
  vocabulary: [
    {
      term: "Balance of payments",
      definition:
        "Record of all transactions between a country and the rest of the world.",
    },
    {
      term: "Current account",
      definition: "Trade in goods/services plus income and transfers.",
    },
    {
      term: "Capital account",
      definition: "Investment flows — FDI, portfolio investment.",
    },
    {
      term: "Exchange rate",
      definition: "Price of one currency in terms of another.",
    },
    {
      term: "Appreciation",
      definition: "Currency value rises against others.",
    },
    {
      term: "Depreciation",
      definition: "Currency value falls against others.",
    },
  ],
  concepts: [
    {
      id: "cieige-u6l5-c1-bop",
      title: "Balance of payments",
      skill: "Explain current/capital accounts and BoP imbalances.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "**Current account** — trade in goods (visible) and services (invisible), plus income (dividends, wages) and transfers (aid, remittances). **Capital/financial account** — investment flows (FDI, shares, loans). BoP must balance: current account deficit is financed by capital account surplus (borrowing/investment inflows).",
          },
          {
            heading: "Imbalances",
            body: "**Current account deficit** — imports > exports + net income; financed by capital inflows (foreign borrowing/investment). **Surplus** — exports > imports; exports capital. Persistent deficits raise debt; persistent surpluses may indicate weak domestic demand.",
          },
        ],
        keyFormulas: [
          { name: "Current account", statement: "Trade + income + transfers" },
          { name: "BoP balance", statement: "Current + capital accounts = 0" },
          { name: "Deficit", statement: "Imports > exports + income" },
        ],
        workedExample: {
          problem:
            "Country imports $600bn, exports $500bn, net income +$20bn. Current account balance?",
          solution:
            "Balance = exports − imports + net income = 500 − 600 + 20 = −$80bn deficit.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l5c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The balance of payments records:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government budget" },
              {
                id: "b",
                text: "Transactions between a country and rest of world",
              },
              { id: "c", text: "Only exports" },
              { id: "d", text: "Bank reserves" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "BoP",
                statement: "International transactions record.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** International transactions",
            commonErrors: ["Confusing with budget."],
          },
        },
        {
          id: "cieige-q-u6l5c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'current account'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Current account",
                statement: "Trade + income + transfers.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Components.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Records trade in goods/services, income flows (dividends, wages) and transfers (aid, remittances) — the 'real' economy transactions.",
            commonErrors: ["Confusing with capital account."],
          },
        },
        {
          id: "cieige-q-u6l5c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How is a current account deficit financed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deficit financing",
                statement: "Capital inflows.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Sources.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "By capital account surplus — foreign investment, borrowing, asset sales; builds up liabilities/debt that must eventually be repaid.",
            commonErrors: ["Thinking it's 'free'."],
          },
        },
        {
          id: "cieige-q-u6l5c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Exports $400bn, imports $450bn, net income +$10bn, net transfers −$20bn. Calculate current account balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "CA calculation",
                statement: "X−M+income+transfers.",
              },
            ],
            steps: [
              { reasoning: "X−M = −50.", marks: 1, markCode: "M" },
              { reasoning: "+10 income = −40.", marks: 1, markCode: "M" },
              { reasoning: "−20 transfers = −60.", marks: 1, markCode: "M" },
              { reasoning: "$60bn deficit stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance = 400−450+10−20 = −$60bn (deficit).",
            commonErrors: ["Sign errors."],
          },
        },
        {
          id: "cieige-q-u6l5c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether a current account deficit is harmful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CAD debate",
                statement: "Borrowing vs development.",
              },
            ],
            steps: [
              {
                reasoning: "Case against: debt, vulnerability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Case for: investment, growth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Depends on use of funds.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deficit financed by productive investment can boost growth; financed by consumption builds unsustainable debt — depends on what the borrowed funds are used for.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l5c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'visible trade'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Visible trade",
                statement: "Trade in physical goods.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Contrast invisible.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trade in physical goods (exports/imports of tangible products) — contrasted with invisible trade (services).",
            commonErrors: ["Confusing with services."],
          },
        },
        {
          id: "cieige-q-u6l5c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A current account deficit means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capital surplus" },
              {
                id: "b",
                text: "Imports + net payments exceed exports + net receipts",
              },
              { id: "c", text: "Government deficit" },
              { id: "d", text: "Exports exceed imports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CAD", statement: "Net outflow." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Net outflow",
            commonErrors: ["Reversing."],
          },
        },
        {
          id: "cieige-q-u6l5c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a country run a persistent current account surplus?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CAS causes",
                statement: "Export competitiveness, weak demand.",
              },
            ],
            steps: [
              { reasoning: "Possible causes.", marks: 1, markCode: "M" },
              { reasoning: "Implications.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Persistent surplus may reflect export competitiveness (Germany) or weak domestic demand saving too much — exports capital, building foreign assets.",
            commonErrors: ["Thinking surplus is always good."],
          },
        },
        {
          id: "cieige-q-u6l5c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 'invisible trade'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Invisible trade",
                statement: "Trade in services.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "UK example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trade in services — tourism, banking, insurance, education; UK runs invisible surplus (financial services) offsetting visible deficit.",
            commonErrors: ["Confusing with visible."],
          },
        },
        {
          id: "cieige-q-u6l5c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the consequences of a large and growing current account deficit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CAD consequences",
                statement: "Debt, vulnerability, possible crisis.",
              },
            ],
            steps: [
              { reasoning: "Debt accumulation.", marks: 1, markCode: "M" },
              {
                reasoning: "Vulnerability to capital flows.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Possible crisis.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Growing CAD builds foreign liabilities — if capital flows reverse, currency collapses and crisis follows (e.g. Asian crisis 1997); sustainability depends on growth and investor confidence.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l5c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The capital (financial) account of the balance of payments records:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade in physical goods" },
              { id: "b", text: "Worker remittances" },
              { id: "c", text: "Government tax revenue" },
              {
                id: "d",
                text: "Investment flows such as FDI and portfolio investment",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Capital account",
                statement: "Investment flows.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Investment flows",
            commonErrors: ["Confusing with current account."],
          },
        },
        {
          id: "cieige-q-u6l5c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A current account deficit is typically financed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower interest rates" },
              {
                id: "b",
                text: "A capital account surplus (inflows of foreign capital)",
              },
              { id: "c", text: "Higher export prices" },
              { id: "d", text: "A trade surplus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "BoP financing",
                statement: "CAD financed by capital inflows.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Capital account surplus",
            commonErrors: ["Thinking deficits are self-financing."],
          },
        },
        {
          id: "cieige-q-u6l5c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Imports $700bn, exports $600bn, net income +$30bn, net transfers −$10bn. The current account balance is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60bn deficit" },
              { id: "b", text: "Balanced" },
              { id: "c", text: "$80bn deficit" },
              { id: "d", text: "$80bn surplus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "CA calculation",
                statement: "X−M+income+transfers.",
              },
            ],
            steps: [{ reasoning: "600−700+30−10 = −80.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $80bn deficit",
            commonErrors: ["Sign errors."],
          },
        },
        {
          id: "cieige-q-u6l5c1-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are 'transfers' in the current account? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transfers",
                statement: "One-way payments, no quid pro quo.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "One-way payments between countries with nothing received in return — e.g. foreign aid, remittances sent home by migrant workers, or gifts.",
            commonErrors: ["Confusing with trade."],
          },
        },
        {
          id: "cieige-q-u6l5c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why persistent current account deficits may eventually become unsustainable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CAD sustainability",
                statement: "Debt accumulation vs repayment ability.",
              },
            ],
            steps: [
              { reasoning: "Debt accumulation.", marks: 1, markCode: "M" },
              {
                reasoning: "Repayment depends on growth/confidence.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Crisis risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Persistent deficits build foreign liabilities; if the country cannot generate enough export earnings or attract continued inflows, debt servicing becomes impossible — risking a sudden stop or currency crisis.",
            commonErrors: ["Thinking deficits are harmless."],
          },
        },
        {
          id: "cieige-q-u6l5c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that a current account surplus is always beneficial for a country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CAS debate",
                statement: "Export strength vs weak domestic demand.",
              },
            ],
            steps: [
              { reasoning: "Benefits of surplus.", marks: 1, markCode: "M" },
              { reasoning: "Possible drawbacks.", marks: 1, markCode: "M" },
              { reasoning: "Context matters.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A surplus builds foreign assets and signals competitiveness, but may reflect weak domestic demand saving too much (e.g. Germany) — benefits depend on whether exports or domestic spending drive it.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l5-c2-forex",
      title: "Exchange rate determination",
      skill:
        "Explain how exchange rates are determined and effects of changes.",
      lesson: {
        sections: [
          {
            heading: "Determination",
            body: "Exchange rate = price of currency in foreign currency. Determined by **demand and supply** of currency — demand from exports, capital inflows; supply from imports, capital outflows. **Appreciation** (value↑): exports dearer, imports cheaper — may worsen CAD. **Depreciation** (value↓): exports cheaper, imports dearer — may improve CAD but raises import prices (inflation).",
          },
          {
            heading: "Fixed vs floating",
            body: "**Floating** — market determines (most countries). **Fixed/managed** — central bank intervenes to maintain rate — requires reserves, limits monetary policy. **Devaluation/revaluation** — official changes to fixed rate.",
          },
        ],
        keyFormulas: [
          {
            name: "Appreciation",
            statement: "Currency value↑ → exports↓, imports↓",
          },
          {
            name: "Depreciation",
            statement: "Currency value↓ → exports↑, imports↑",
          },
          { name: "Floating rate", statement: "Market-determined" },
        ],
        workedExample: {
          problem: "Currency depreciates 20%. Effect on exports?",
          solution:
            "Exports become 20% cheaper in foreign currency — more competitive, quantity demanded rises; but import prices rise → possible imported inflation.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l5c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Exchange rate is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trade balance" },
              { id: "b", text: "Government tax" },
              { id: "c", text: "Price of one currency in terms of another" },
              { id: "d", text: "Interest rate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exchange rate",
                statement: "Currency price.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Currency price",
            commonErrors: ["Confusing with interest rate."],
          },
        },
        {
          id: "cieige-q-u6l5c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes a currency to appreciate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Appreciation",
                statement: "Demand for currency exceeds supply.",
              },
            ],
            steps: [
              { reasoning: "Demand factors.", marks: 1, markCode: "M" },
              { reasoning: "Supply factors.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When demand for currency exceeds supply — e.g. strong exports, high interest rates attracting capital — currency value rises.",
            commonErrors: ["Thinking appreciation is bad always."],
          },
        },
        {
          id: "cieige-q-u6l5c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how depreciation affects exports and imports.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Depreciation effects",
                statement: "Exports cheaper, imports dearer.",
              },
            ],
            steps: [
              { reasoning: "Export effect.", marks: 1, markCode: "M" },
              { reasoning: "Import effect.", marks: 1, markCode: "M" },
              { reasoning: "Net effect on CAD.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Depreciation makes exports cheaper abroad (quantity↑) and imports dearer at home (quantity↓) — improves trade balance but raises import prices (inflation risk).",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "cieige-q-u6l5c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A country wants to boost exports. Should it pursue a strong or weak currency? Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Currency policy",
                statement: "Weak currency helps exports but has costs.",
              },
            ],
            steps: [
              { reasoning: "Weak currency benefits.", marks: 1, markCode: "M" },
              { reasoning: "Weak currency costs.", marks: 1, markCode: "M" },
              {
                reasoning: "Strong currency benefits.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Weak currency makes exports cheaper (competitive) but raises import prices (inflation, input costs); strong currency does opposite — depends on whether export-led growth or price stability is priority.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l5c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare floating and fixed exchange rate systems.",
          parts: [
            { label: "a", prompt: "Floating advantages", marks: 1 },
            { label: "b", prompt: "Floating disadvantages", marks: 1 },
            { label: "c", prompt: "Fixed advantages", marks: 1 },
            { label: "d", prompt: "Fixed disadvantages", marks: 1 },
            { label: "e", prompt: "Verdict", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchange regimes",
                statement: "Flexibility vs stability.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Auto-adjusts, no reserve need.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Volatility, uncertainty.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Stability, discipline.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Requires reserves, limits policy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Depends on country circumstances.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) auto-adjust, flexibility (b) volatility (c) stability, credibility (d) reserves needed, limits monetary policy (e) floating suits most; fixed suits small open economies or credibility needs",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l5c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'managed float'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Managed float",
                statement: "Central bank intervenes occasionally.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Mostly market-determined rate but central bank intervenes to smooth excessive volatility or guide trend — compromise between fixed and floating.",
            commonErrors: ["Confusing with fixed."],
          },
        },
        {
          id: "cieige-q-u6l5c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Depreciation of a currency makes its exports:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Illegal" },
              { id: "b", text: "Dearer" },
              { id: "c", text: "Cheaper and more competitive" },
              { id: "d", text: "Unchanged" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Depreciation",
                statement: "Exports cheaper.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Cheaper",
            commonErrors: ["Reversing."],
          },
        },
        {
          id: "cieige-q-u6l5c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a central bank want to weaken its currency?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weak currency policy",
                statement: "Boost exports, reduce CAD.",
              },
            ],
            steps: [
              { reasoning: "Export benefit.", marks: 1, markCode: "M" },
              { reasoning: "CAD benefit.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Weak currency boosts export competitiveness and improves current account — but costs include imported inflation and higher import prices for consumers.",
            commonErrors: ["No costs mentioned."],
          },
        },
        {
          id: "cieige-q-u6l5c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'sterilisation' in exchange rate intervention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sterilisation",
                statement:
                  "Offsetting money supply effects of FX intervention.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why needed.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When central bank buys foreign currency to support exchange rate, it must sell domestic currency — sterilisation offsets the money supply increase to prevent inflation.",
            commonErrors: ["Confusing with intervention itself."],
          },
        },
        {
          id: "cieige-q-u6l5c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the impact of a sudden currency crisis on an economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Currency crisis",
                statement: "Rapid depreciation → inflation, debt burden.",
              },
            ],
            steps: [
              { reasoning: "Immediate effects.", marks: 1, markCode: "M" },
              { reasoning: "Debt effects.", marks: 1, markCode: "M" },
              { reasoning: "Recovery path.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sudden depreciation raises import prices (inflation), increases foreign debt burden, and can trigger capital flight — recovery needs credibility and export competitiveness.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l5c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under a floating exchange rate system, the rate is determined by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Demand and supply in foreign exchange markets",
              },
              { id: "b", text: "Government decree" },
              { id: "c", text: "Export prices only" },
              { id: "d", text: "The central bank alone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Floating rate",
                statement: "Market-determined.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Demand and supply",
            commonErrors: ["Confusing with fixed rate."],
          },
        },
        {
          id: "cieige-q-u6l5c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "If a country's interest rates rise above those abroad, its currency is likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Appreciate as capital inflows increase" },
              { id: "b", text: "Be pegged to gold" },
              { id: "c", text: "Depreciate" },
              { id: "d", text: "Remain unchanged" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest-exchange link",
                statement: "Higher rates attract capital → appreciation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Appreciate",
            commonErrors: ["Reversing direction."],
          },
        },
        {
          id: "cieige-q-u6l5c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'devaluation' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rise in interest rates" },
              { id: "b", text: "A market-driven fall in currency value" },
              {
                id: "c",
                text: "An official reduction in a fixed exchange rate",
              },
              { id: "d", text: "An increase in exports" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Devaluation",
                statement: "Official lowering of fixed rate.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Official reduction in fixed rate",
            commonErrors: ["Confusing with depreciation."],
          },
        },
        {
          id: "cieige-q-u6l5c2-14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define 'fixed exchange rate' and give one advantage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fixed rate",
                statement: "Officially pegged currency value.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Advantage given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Currency value officially pegged by central bank — advantage: stability and certainty for trade and investment, though it requires reserves and limits monetary policy.",
            commonErrors: ["Confusing with floating."],
          },
        },
        {
          id: "cieige-q-u6l5c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a currency depreciation can cause imported inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imported inflation",
                statement: "Cheaper currency → dearer imports.",
              },
            ],
            steps: [
              { reasoning: "Price mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Pass-through to consumers.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Depreciation makes foreign goods dearer in domestic currency → import prices rise → if firms pass costs on, consumer prices rise → imported inflation, especially for countries reliant on imported inputs.",
            commonErrors: ["Only export side."],
          },
        },
        {
          id: "cieige-q-u6l5c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the costs and benefits of using foreign exchange reserves to defend a currency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FX intervention",
                statement: "Defence vs reserve depletion.",
              },
            ],
            steps: [
              { reasoning: "How defence works.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs/limits.", marks: 1, markCode: "M" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Buying domestic currency with reserves supports the exchange rate and calms markets, but reserves are finite — sustained defence can fail (speculative attack) and divert funds from other uses; credibility matters more than reserves.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
