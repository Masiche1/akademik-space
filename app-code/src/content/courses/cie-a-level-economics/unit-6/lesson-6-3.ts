import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cieale-u6-lesson-6-3",
  code: "6-3",
  title: "Fiscal and Monetary Policy: Transmission and Evaluation",
  goal: "I CAN analyse how fiscal and monetary policies transmit through the economy and evaluate their effectiveness.",
  standards: ["Cambridge A Level Economics 9708", "Unit 6: demand management"],
  vocabulary: [
    {
      term: "Fiscal policy",
      definition: "Government spending and taxation to manage demand.",
    },
    {
      term: "Monetary policy",
      definition: "Central bank control of money supply/interest rates.",
    },
    {
      term: "Multiplier",
      definition: "Change in income from change in spending.",
    },
    {
      term: "Liquidity trap",
      definition: "Interest rates near zero, monetary policy ineffective.",
    },
    {
      term: "Crowding out",
      definition:
        "Government borrowing raises interest rates, reduces private I.",
    },
    {
      term: "Time lags",
      definition: "Recognition, decision, implementation, impact delays.",
    },
  ],
  concepts: [
    {
      id: "cieale-u6l3-c1-fiscal",
      title: "Fiscal policy deep analysis",
      skill:
        "Analyse fiscal multipliers, automatic stabilisers and crowding-out.",
      lesson: {
        sections: [
          {
            heading: "Fiscal multipliers and stabilisers",
            body: "**Multiplier** = ΔY/ΔG — initial spending creates income → consumption → further spending. Size depends on **marginal propensity to consume** and leakages (taxes, imports, saving). **Automatic stabilisers**: progressive taxes and unemployment benefits automatically dampen cycles — revenues fall in recession, rise in boom.",
          },
          {
            heading: "Crowding out and limits",
            body: "Government borrowing → demand for loanable funds → interest rates rise → private investment falls (**crowding out**) — fiscal stimulus partially self-defeating in full employment. Also: time lags (recognition→decision→implementation→impact) mean policy may arrive too late/wrong phase.",
          },
        ],
        keyFormulas: [
          { name: "Multiplier", statement: "k = 1/(1−MPC)" },
          { name: "Crowding out", statement: "Govt borrowing → I↓" },
          {
            name: "Automatic stabilisers",
            statement: "Taxes + benefits dampen cycles",
          },
        ],
        workedExample: {
          problem:
            "MPC=0.8, government spends $100m. What's the maximum income change?",
          solution:
            "k = 1/(1−0.8) = 5 → ΔY = 5×100 = $500m — but leakages (taxes, imports) reduce actual multiplier.",
        },
      },
      questions: [
        {
          id: "cieale-q-u6l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The fiscal multiplier measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax rate" },
              { id: "b", text: "Interest rate" },
              { id: "c", text: "Government debt" },
              { id: "d", text: "Change in income per change in spending" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiplier",
                statement: "ΔY/Δspending.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Income change",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "cieale-q-u6l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are 'automatic stabilisers'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Automatic stabilisers",
                statement: "Built-in dampeners.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Progressive taxes and unemployment benefits that automatically reduce disposable income swings — tax revenue falls in recession, rises in boom, cushioning AD.",
            commonErrors: ["Discretionary policy confused."],
          },
        },
        {
          id: "cieale-q-u6l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'crowding out' with a diagram-free explanation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crowding out",
                statement: "Interest rate channel.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "When it matters.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Govt borrowing increases demand for loanable funds → interest rates rise → private investment falls → partly offsets stimulus; most binding at full employment.",
            commonErrors: ["Assuming no effect."],
          },
        },
        {
          id: "cieale-q-u6l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "MPC=0.75 with 20% tax rate and 10% import leakage. Estimate the multiplier.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Multiplier calc",
                statement: "k = 1/(1−MPC×(1−tax−import)).",
              },
            ],
            steps: [
              {
                reasoning: "Effective MPC = 0.75×(1−0.2−0.1) = 0.525",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "k = 1/(1−0.525) ≈ 2.1", marks: 1, markCode: "M" },
              { reasoning: "Leakages reduce it.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "k ≈ 2.1 — leakages (taxes, imports, saving) significantly reduce the naive multiplier of 4.",
            commonErrors: ["Ignoring leakages."],
          },
        },
        {
          id: "cieale-q-u6l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate fiscal policy's effectiveness in a deep recession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal policy",
                statement: "Strong in recessions.",
              },
            ],
            steps: [
              { reasoning: "Why effective.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Crowding out context.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Most effective when slack exists — low interest rates, spare capacity, high MPC; crowding out minimal in recession — but lags and debt accumulation are concerns.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u6l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the four 'time lags' in fiscal policy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Policy lags",
                statement: "Recognition to impact.",
              },
            ],
            steps: [
              { reasoning: "Four named.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Recognition (spot problem), decision (legislate), implementation (spend), impact (effect on economy) — total can be years.",
            commonErrors: ["Missing some."],
          },
        },
        {
          id: "cieale-q-u6l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expansionary fiscal policy involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower G and higher T" },
              { id: "b", text: "Higher G and/or lower T" },
              { id: "c", text: "Higher interest rates" },
              { id: "d", text: "Lower money supply" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expansionary fiscal",
                statement: "Stimulus.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Higher G, lower T",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "cieale-q-u6l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does the multiplier matter more in recessions than booms?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplier context",
                statement: "Spare capacity matters.",
              },
            ],
            steps: [
              { reasoning: "Recession mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Boom constraint.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "In recession, extra spending uses idle resources → real output rises. In boom, capacity constraints → mostly inflation — multiplier on output smaller.",
            commonErrors: ["Same multiplier assumed."],
          },
        },
        {
          id: "cieale-q-u6l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do 'balanced budget' rules constrain fiscal policy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balanced budget",
                statement: "G = T limits flexibility.",
              },
            ],
            steps: [
              { reasoning: "Constraint.", marks: 1, markCode: "M" },
              { reasoning: "Pro-cyclical risk.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Forces tax cuts when spending falls (recession) — worsens downturn; pro-cyclical rather than stabilising; many countries use flexible deficit rules instead.",
            commonErrors: ["Thinking it stabilises."],
          },
        },
        {
          id: "cieale-q-u6l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should fiscal rules target debt or deficit? Evaluate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal rules",
                statement: "Stock vs flow.",
              },
            ],
            steps: [
              { reasoning: "Debt targeting.", marks: 1, markCode: "M" },
              { reasoning: "Deficit targeting.", marks: 1, markCode: "M" },
              { reasoning: "Trade-offs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Debt/GDP ratio better captures sustainability; deficit rules too rigid for cycles — but debt rules allow permanent deficits if GDP grows; best combine with escape clauses.",
            commonErrors: ["One rule only."],
          },
        },
        {
          id: "cieale-q-u6l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The fiscal multiplier measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "total tax revenue collected" },
              { id: "b", text: "the change in national income from a change in government spending or another injection" },
              { id: "c", text: "the level of government debt" },
              { id: "d", text: "the central bank's policy rate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fiscal multiplier",
                statement: "ΔY per Δ injection.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** ΔY per change in spending",
            commonErrors: ["Confusing with tax multiplier only."],
          },
        },
        {
          id: "cieale-q-u6l3c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The marginal propensity to consume (MPC) is 0.75. Calculate the simple spending multiplier k = 1/(1 − MPC).",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Multiplier",
                statement: "k = 1/(1−MPC).",
              },
            ],
            steps: [
              {
                reasoning: "k = 1/(1−0.75) = 1/0.25 = 4.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "k = 4",
            commonErrors: ["Using MPC directly as the multiplier."],
          },
        },
        {
          id: "cieale-q-u6l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an automatic stabiliser?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tariffs on imports" },
              { id: "b", text: "Progressive income tax and unemployment benefits" },
              { id: "c", text: "Central bank quantitative easing" },
              { id: "d", text: "Discretionary government spending cuts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Automatic stabiliser",
                statement: "Works without new policy.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Progressive tax + benefits",
            commonErrors: ["Choosing discretionary policy."],
          },
        },
        {
          id: "cieale-q-u6l3c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The MPC is 0.8 and the government increases its spending by $80m.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 400, unit: "million dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Multiplier",
                statement: "k = 1/(1−MPC); ΔY = k × ΔG.",
              },
            ],
            steps: [
              {
                reasoning: "k = 1/(1−0.8) = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ΔY = 5 × 80 = $400m.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "k = 5; maximum ΔY = $400m",
            commonErrors: ["Forgetting leakages reduce the actual multiplier."],
          },
        },
        {
          id: "cieale-q-u6l3c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Crowding out' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "private saving rising during booms" },
              { id: "b", text: "government borrowing raising interest rates and reducing private investment" },
              { id: "c", text: "tax cuts increasing consumption" },
              { id: "d", text: "inflation eroding real wages" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Crowding out",
                statement: "Govt borrowing → I falls.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Borrowing raises rates, cuts private I",
            commonErrors: ["Confusing with automatic stabilisers."],
          },
        },
        {
          id: "cieale-q-u6l3c1-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a recession, tax revenue falls by $50bn while benefit payments rise by $30bn. Calculate the effect on the budget deficit.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "billion dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Budget balance",
                statement: "Deficit widens by Δspending + Δrevenue loss.",
              },
            ],
            steps: [
              {
                reasoning: "Deficit widens by 50 + 30 = $80bn.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Deficit increases by $80bn",
            commonErrors: ["Subtracting the two figures."],
          },
        },
      ],
    },
    {
      id: "cieale-u6l3-c2-monetary",
      title: "Monetary policy transmission and limits",
      skill:
        "Trace interest rate effects through the economy and analyse liquidity traps.",
      lesson: {
        sections: [
          {
            heading: "Transmission mechanism",
            body: "Central bank sets policy rate → affects market interest rates → influences **investment** (cost of capital), **consumption** (mortgage/credit costs), **exchange rate** (capital flows) → net exports, **wealth** (asset prices) → AD. Stronger in financialised economies with variable-rate debt.",
          },
          {
            heading: "Limits: liquidity trap and lags",
            body: "**Liquidity trap**: rates near zero, people hoard cash expecting deflation — monetary policy loses traction (Japan 1990s, post-2008). **Hysteresis**: prolonged low rates may not restore demand if expectations pessimistic. Lags: monetary policy faster than fiscal but still imperfect.",
          },
        ],
        keyFormulas: [
          { name: "Transmission", statement: "Rate → I,C,X → AD" },
          { name: "Liquidity trap", statement: "Rates ≈ 0, policy weak" },
          {
            name: "Taylor rule",
            statement: "Rate responds to inflation + output gap",
          },
        ],
        workedExample: {
          problem: "Central bank raises rates 1%. Trace the transmission.",
          solution:
            "Borrowing costs rise → I and interest-sensitive C fall → AD shifts left → output and inflation ease — takes 12-24 months.",
        },
      },
      questions: [
        {
          id: "cieale-q-u6l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Monetary policy primarily works through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government spending" },
              { id: "b", text: "Tax rates" },
              { id: "c", text: "Wage setting" },
              { id: "d", text: "Interest rates affecting spending" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Monetary",
                statement: "Interest rate channel.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Interest rates",
            commonErrors: ["Confusing with fiscal."],
          },
        },
        {
          id: "cieale-q-u6l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'liquidity trap'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquidity trap",
                statement: "Rates ≈ 0, hoarding.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why policy fails.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Interest rates near zero — people expect deflation/hoard cash rather than spend — further rate cuts can't stimulate AD; monetary policy loses power.",
            commonErrors: ["Confusing with recession."],
          },
        },
        {
          id: "cieale-q-u6l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how interest rate changes affect the exchange rate and net exports.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exchange channel",
                statement: "Rates → capital flows → FX.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Net export effect.", marks: 1, markCode: "M" },
              { reasoning: "AD impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher rates → capital inflows → currency appreciates → exports dearer, imports cheaper → net exports fall → AD decreases.",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "cieale-q-u6l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why might monetary policy be less effective in economies with fixed-rate mortgages?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Transmission limits",
                statement: "Rate pass-through.",
              },
            ],
            steps: [
              { reasoning: "Fixed rates shield C.", marks: 1, markCode: "M" },
              { reasoning: "Weaker I response.", marks: 1, markCode: "M" },
              { reasoning: "Other channels.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fixed-rate debt means interest changes don't affect existing borrowers → weaker consumption response; only new borrowing affected — policy must rely on exchange/wealth channels.",
            commonErrors: ["Assuming same effect."],
          },
        },
        {
          id: "cieale-q-u6l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate quantitative easing as a monetary policy tool.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "QE",
                statement: "Asset purchases at zero rates.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "M" },
              { reasoning: "Risks.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "QE lowers long rates, supports asset prices, signals commitment — effective in liquidity traps but risks asset bubbles, inequality, exit problems; untested in normal times.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u6l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'forward guidance'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forward guidance",
                statement: "Communicating future policy.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Central bank signals likely future rate path — shapes expectations, lowers long rates without actual cuts; powerful but risky if credibility lost.",
            commonErrors: ["Confusing with QE."],
          },
        },
        {
          id: "cieale-q-u6l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Contractionary monetary policy involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower rates / more money" },
              { id: "b", text: "Higher G" },
              { id: "c", text: "Higher interest rates / lower money supply" },
              { id: "d", text: "Lower T" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contractionary",
                statement: "Tightening.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Higher rates",
            commonErrors: ["Reversed."],
          },
        },
        {
          id: "cieale-q-u6l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do 'credit channels' amplify monetary policy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Credit channel",
                statement: "Balance sheet effects.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Bank lending link.", marks: 1, markCode: "M" },
              { reasoning: "Amplification.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rate changes affect borrowers' net worth → creditworthiness → bank lending → investment — financial accelerator amplifies initial policy impulse.",
            commonErrors: ["Only direct rate effect."],
          },
        },
        {
          id: "cieale-q-u6l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do central banks target inflation rather than money supply?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation targeting",
                statement: "Flexible framework.",
              },
            ],
            steps: [
              { reasoning: "Money targeting limits.", marks: 1, markCode: "M" },
              {
                reasoning: "Inflation targeting benefits.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Money supply unstable/unpredictable (velocity varies) — inflation targeting directly anchors expectations while allowing flexibility on intermediate targets.",
            commonErrors: ["Money targeting better claim."],
          },
        },
        {
          id: "cieale-q-u6l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'independence' of central banks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Central bank independence",
                statement: "Credibility vs accountability.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Independent banks resist political pressure → lower inflation credibility — but less democratic accountability; operational independence with government mandate is common compromise.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u6l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The central bank's policy interest rate is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the rate it sets to steer monetary conditions and influence market rates" },
              { id: "b", text: "the current inflation rate" },
              { id: "c", text: "the rate banks always charge each other" },
              { id: "d", text: "the standard mortgage rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Policy rate",
                statement: "Central bank's steering rate.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The central bank's steering rate",
            commonErrors: ["Confusing with market rates."],
          },
        },
        {
          id: "cieale-q-u6l3c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Households owe $2,000bn at an average interest rate. The policy rate and average borrowing rate both rise by 0.75 percentage points. Calculate the extra annual interest paid.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 15, unit: "billion dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Interest cost",
                statement: "Debt × rate change.",
              },
            ],
            steps: [
              {
                reasoning: "Extra interest = 2000 × 0.0075 = $15bn.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Extra interest = $15bn per year",
            commonErrors: ["Using 0.75 instead of 0.0075."],
          },
        },
        {
          id: "cieale-q-u6l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'liquidity trap' occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "banks refuse to lend at any rate" },
              { id: "b", text: "the government runs a budget surplus" },
              { id: "c", text: "interest rates are near zero and people hoard cash, so monetary policy loses traction" },
              { id: "d", text: "inflation is too high for policy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Liquidity trap",
                statement: "Rates ≈ 0, policy weak.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Rates near zero, policy loses traction",
            commonErrors: ["Confusing with high inflation."],
          },
        },
        {
          id: "cieale-q-u6l3c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 1% cut in interest rates raises investment spending by $40bn, consumption by $60bn and net exports by $10bn. Initial aggregate demand is $1,000bn.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 110, unit: "billion dollars" },
              { label: "b", answer: 11, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transmission",
                statement: "Rate → I, C, X → AD.",
              },
            ],
            steps: [
              {
                reasoning: "ΔAD = 40 + 60 + 10 = $110bn.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "As % of initial AD: 110/1000 × 100 = 11%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "AD rises by $110bn (11%)",
            commonErrors: ["Omitting the net exports channel."],
          },
        },
        {
          id: "cieale-q-u6l3c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An increase in domestic interest rates, other things equal, tends to cause the exchange rate to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "remain permanently fixed" },
              { id: "b", text: "appreciate as capital inflows rise" },
              { id: "c", text: "depreciate as exports fall" },
              { id: "d", text: "become irrelevant to AD" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest differential",
                statement: "Higher rates attract capital.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Appreciation via capital inflows",
            commonErrors: ["Reversing the direction."],
          },
        },
        {
          id: "cieale-q-u6l3c2-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "The nominal interest rate is 6% and inflation is 3.5%. Calculate the real interest rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Real interest rate",
                statement: "Nominal − inflation.",
              },
            ],
            steps: [
              {
                reasoning: "Real rate = 6 − 3.5 = 2.5%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Real interest rate = 2.5%",
            commonErrors: ["Adding instead of subtracting inflation."],
          },
        },
      ],
    },
  ],
};
