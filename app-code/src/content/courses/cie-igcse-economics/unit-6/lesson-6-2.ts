import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cieige-u6-lesson-6-2",
  code: "6-2",
  title: "Inflation, Deflation and Price Stability",
  goal: "I CAN explain causes, effects and policy responses to inflation and deflation.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 6: macroeconomics"],
  vocabulary: [
    {
      term: "Inflation",
      definition: "Sustained rise in the general price level.",
    },
    {
      term: "CPI",
      definition: "Consumer Price Index — measures average price changes.",
    },
    {
      term: "Demand-pull inflation",
      definition: "Inflation from excessive aggregate demand.",
    },
    {
      term: "Cost-push inflation",
      definition: "Inflation from rising production costs.",
    },
    {
      term: "Deflation",
      definition: "Sustained fall in the general price level.",
    },
    {
      term: "Hyperinflation",
      definition: "Extremely rapid inflation destroying currency value.",
    },
  ],
  concepts: [
    {
      id: "cieige-u6l2-c1-inflation",
      title: "Causes and effects of inflation",
      skill:
        "Explain demand-pull and cost-push inflation and their consequences.",
      lesson: {
        sections: [
          {
            heading: "Types of inflation",
            body: "**Demand-pull** — aggregate demand exceeds productive capacity → prices bid up (boom, loose monetary/fiscal policy). **Cost-push** — rising costs (wages, raw materials, imported energy) push prices up. Both measured by CPI inflation rate. **Hyperinflation** — extreme demand-pull or money printing → currency collapse.",
          },
          {
            heading: "Effects",
            body: "Moderate inflation erodes purchasing power, distorts saving/investment decisions, creates menu costs, and harms fixed-income groups. High inflation causes uncertainty, reduces investment, and can spiral (wage-price spiral). Deflation is worse — falling prices → delayed spending → recession (Japan 1990s).",
          },
        ],
        keyFormulas: [
          {
            name: "Inflation rate",
            statement: "(CPI_now − CPI_prev) ÷ CPI_prev × 100",
          },
          { name: "Demand-pull", statement: "AD > AS → prices rise" },
          { name: "Cost-push", statement: "Costs rise → prices rise" },
        ],
        workedExample: {
          problem: "CPI rises from 100 to 103. Calculate inflation rate.",
          solution: "(103 − 100) ÷ 100 × 100 = 3% inflation.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Inflation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One-off price rise" },
              { id: "b", text: "Rising wages" },
              { id: "c", text: "Sustained rise in general price level" },
              { id: "d", text: "Falling prices" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflation",
                statement: "Sustained price rise.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sustained price rise",
            commonErrors: ["Confusing with deflation."],
          },
        },
        {
          id: "cieige-q-u6l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish demand-pull from cost-push inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inflation types",
                statement: "Demand vs cost driven.",
              },
            ],
            steps: [
              { reasoning: "Demand-pull defined.", marks: 1, markCode: "M" },
              { reasoning: "Cost-push defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Demand-pull: excessive aggregate demand bids up prices. Cost-push: rising production costs (wages, materials) push prices up — different causes, same symptom.",
            commonErrors: ["Conflating causes."],
          },
        },
        {
          id: "cieige-q-u6l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "CPI = 105 last year, 108 this year. Calculate inflation rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Inflation calc",
                statement: "(New−Old)/Old ×100.",
              },
            ],
            steps: [
              { reasoning: "Formula correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Calculation: (108−105)/105 ×100 ≈ 2.86%.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inflation = (108 − 105) ÷ 105 × 100 ≈ 2.86%.",
            commonErrors: ["Dividing by new CPI."],
          },
        },
        {
          id: "cieige-q-u6l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the 'wage-price spiral'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wage-price spiral",
                statement: "Inflation → wage demands → more inflation.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Feedback loop.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Inflation erodes real wages → workers demand higher pay → higher labour costs → firms raise prices → more inflation — self-reinforcing spiral needing tight policy to break.",
            commonErrors: ["One-directional."],
          },
        },
        {
          id: "cieige-q-u6l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether moderate inflation is harmful.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation debate",
                statement: "Costs vs benefits of low inflation.",
              },
            ],
            steps: [
              {
                reasoning: "Costs: purchasing power, uncertainty.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Possible benefits: debt erosion, stimulus.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Distribution effects.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Moderate inflation erodes purchasing power and creates uncertainty, but very low inflation risks deflation — most central banks target ~2% as balancing both risks.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'hyperinflation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hyperinflation",
                statement: "Extreme rapid inflation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Cause/effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Extremely rapid inflation (e.g. >50%/month) where currency loses value daily — caused by money printing or loss of confidence; destroys savings and economy.",
            commonErrors: ["Confusing with normal inflation."],
          },
        },
        {
          id: "cieige-q-u6l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "CPI measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Export prices" },
              { id: "b", text: "Producer costs" },
              { id: "c", text: "Wage rates" },
              { id: "d", text: "Average price changes of consumer goods" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "CPI", statement: "Consumer price index." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Average consumer prices",
            commonErrors: ["Confusing with RPI/producer prices."],
          },
        },
        {
          id: "cieige-q-u6l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is deflation often worse than moderate inflation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deflation",
                statement: "Delays spending → recession.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Debt burden worsens.", marks: 1, markCode: "M" },
              { reasoning: "Japan example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Falling prices make consumers delay spending (expecting cheaper later), worsening recession; debt burdens rise in real terms — Japan's 1990s deflation illustrates the trap.",
            commonErrors: ["Thinking cheaper is always better."],
          },
        },
        {
          id: "cieige-q-u6l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two groups harmed by unexpected inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation distribution",
                statement: "Fixed incomes and savers lose.",
              },
            ],
            steps: [
              { reasoning: "Two valid groups.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism each.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. pensioners on fixed incomes (purchasing power falls) and savers (real returns eroded) — while borrowers with fixed-rate debt gain.",
            commonErrors: ["Groups that actually gain."],
          },
        },
        {
          id: "cieige-q-u6l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A country has 8% inflation. Analyse demand-side and supply-side policy responses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation policy",
                statement: "Depends on cause.",
              },
            ],
            steps: [
              {
                reasoning: "Demand-side: tighten policy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supply-side: if cost-push, address costs.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Trade-off with growth.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If demand-pull: tighten monetary/fiscal policy. If cost-push: wage restraint, supply-side reform — choosing depends on diagnosing the cause; tightening demand may sacrifice growth.",
            commonErrors: ["One policy for all causes."],
          },
        },
        {
          id: "cieige-q-u6l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cost-push inflation is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government budget surpluses" },
              { id: "b", text: "Falling interest rates only" },
              { id: "c", text: "Excessive consumer spending only" },
              { id: "d", text: "Rising production costs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cost-push",
                statement: "Rising costs push prices up.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Rising production costs",
            commonErrors: ["Confusing with demand-pull."],
          },
        },
        {
          id: "cieige-q-u6l2c1-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hyperinflation is most likely caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slightly higher demand" },
              { id: "b", text: "Rapid money printing or loss of confidence" },
              { id: "c", text: "Normal wage growth" },
              { id: "d", text: "Modest tax increases" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Hyperinflation",
                statement: "Money supply explosion or confidence collapse.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Money printing / lost confidence",
            commonErrors: ["Confusing with normal inflation."],
          },
        },
        {
          id: "cieige-q-u6l2c1-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "The CPI rises from 100 to 108 in one year. (a) Calculate the inflation rate. (b) If prices then rise by a further 4%, calculate the new CPI.",
          response: {
            type: "numeric",
            parts: [
              { label: "Inflation rate", answer: 8, unit: "%" },
              { label: "New CPI", answer: 112.32 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Inflation calculation",
                statement: "(New − old) ÷ old × 100; CPI × 1.04.",
              },
            ],
            steps: [
              {
                reasoning: "(108 − 100) ÷ 100 × 100 = 8%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "108 × 1.04 = 112.32.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 8% (b) 112.32",
            commonErrors: ["Dividing by the new CPI."],
          },
        },
        {
          id: "cieige-q-u6l2c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who gains from unexpected inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Workers with fixed nominal wages" },
              { id: "b", text: "Pensioners on fixed incomes" },
              { id: "c", text: "Borrowers with fixed-rate debt" },
              { id: "d", text: "Savers with fixed returns" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation distribution",
                statement: "Debtors gain; creditors, savers, pensioners lose.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Fixed-rate borrowers",
            commonErrors: ["Naming groups that lose."],
          },
        },
        {
          id: "cieige-q-u6l2c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how imported inflation occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imported inflation",
                statement: "Higher import prices raise domestic prices.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Causes identified.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When import prices rise — e.g. an oil price shock or currency depreciation — the cost of imported goods and inputs rises, pushing up domestic prices; this inflation originates abroad and is harder for domestic policy to control.",
            commonErrors: ["Thinking only domestic causes."],
          },
        },
        {
          id: "cieige-q-u6l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A country faces 8% cost-push inflation caused by a sharp rise in imported energy prices. Evaluate possible policy responses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost-push policy",
                statement: "Tightening demand vs addressing costs.",
              },
            ],
            steps: [
              {
                reasoning: "Demand-side tightening option.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supply-side/cost options.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Trade-off with output/growth.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tightening demand reduces inflation but worsens the supply shock's output loss; better options include energy efficiency, fuel subsidies targeted at vulnerable groups, and wage restraint — a mix depends on how much inflation versus unemployment the government prioritises.",
            commonErrors: ["One policy for all causes."],
          },
        },
      ],
    },
    {
      id: "cieige-u6l2-c2-stability",
      title: "Price stability and measurement",
      skill: "Evaluate inflation targeting and price index limitations.",
      lesson: {
        sections: [
          {
            heading: "Inflation targeting",
            body: "Most central banks target ~2% inflation — low enough to avoid harm, high enough to avoid deflation. Tools: interest rates (monetary policy), quantitative easing. Credibility of commitment matters — anchored expectations prevent wage-price spirals.",
          },
          {
            heading: "Measurement issues",
            body: "CPI may overstate inflation (substitution bias — consumers switch to cheaper goods; new goods not captured; quality improvements ignored). Different indices (CPI vs RPI vs GDP deflator) give different measures.",
          },
        ],
        keyFormulas: [
          { name: "Inflation target", statement: "Typically ~2% annually" },
          { name: "CPI bias", statement: "Tends to overstate true inflation" },
        ],
        workedExample: {
          problem: "Why target 2% inflation rather than 0%?",
          solution:
            "Provides buffer against deflation, allows real wage flexibility, and avoids the zero lower bound on interest rates — 2% is a compromise between harms.",
        },
      },
      questions: [
        {
          id: "cieige-q-u6l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Most central banks target inflation of about:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0%" },
              { id: "b", text: "2%" },
              { id: "c", text: "50%" },
              { id: "d", text: "10%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Inflation target", statement: "~2%." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 2%",
            commonErrors: ["Wrong figure."],
          },
        },
        {
          id: "cieige-q-u6l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'zero lower bound' problem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Zero lower bound",
                statement: "Interest rates can't go below ~0%.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Nominal interest rates can't fall below zero — limits monetary stimulus in deep recession; low inflation targeting preserves room to cut rates.",
            commonErrors: ["Confusing with deflation."],
          },
        },
        {
          id: "cieige-q-u6l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might CPI overstate true inflation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CPI bias",
                statement: "Substitution, new goods, quality.",
              },
            ],
            steps: [
              { reasoning: "Substitution bias.", marks: 1, markCode: "M" },
              { reasoning: "New goods/quality.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "CPI uses fixed basket — ignores consumer substitution to cheaper goods, new products, and quality improvements, so it tends to overstate inflation.",
            commonErrors: ["Thinking CPI is perfect."],
          },
        },
        {
          id: "cieige-q-u6l2c2-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does central bank credibility matter for inflation control?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Credibility",
                statement: "Anchored expectations prevent spirals.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "If credible.", marks: 1, markCode: "M" },
              { reasoning: "If not.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If people believe the central bank will hit target, they don't build inflation into wage/price demands — prevents self-fulfilling spirals and reduces needed policy tightening.",
            commonErrors: ["Thinking only policy matters."],
          },
        },
        {
          id: "cieige-q-u6l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate inflation targeting as a monetary policy framework.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation targeting",
                statement: "Clarity vs narrow focus.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: clarity, accountability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limitations: ignores growth, financial stability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternatives: monetary aggregates.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Inflation targeting provides clarity and accountability but may neglect growth and asset bubbles — most central banks now combine it with macroprudential tools.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u6l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'anchored expectations'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anchored expectations",
                statement: "Beliefs stable around target.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why it matters.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When households/firms expect inflation near target, they don't demand inflation-indexed wages — stabilises the economy and makes policy more effective.",
            commonErrors: ["Confusing with actual inflation."],
          },
        },
        {
          id: "cieige-q-u6l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fixed-basket price index ignores:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inflation" },
              { id: "b", text: "Consumer substitution to cheaper goods" },
              { id: "c", text: "Quantity changes" },
              { id: "d", text: "Price changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "CPI bias",
                statement: "Substitution bias.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Substitution",
            commonErrors: ["Wrong bias."],
          },
        },
        {
          id: "cieige-q-u6l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is 'price stability' preferred to 'zero inflation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price stability",
                statement: "Low positive inflation safer.",
              },
            ],
            steps: [
              { reasoning: "Deflation risk.", marks: 1, markCode: "M" },
              { reasoning: "Wage flexibility.", marks: 1, markCode: "M" },
              { reasoning: "Policy room.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Zero inflation risks slipping into deflation (worse); small positive inflation allows nominal wage cuts via relative-price adjustments and keeps interest rates above zero.",
            commonErrors: ["Thinking 0% is safest."],
          },
        },
        {
          id: "cieige-q-u6l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How can imported inflation occur?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imported inflation",
                statement: "Higher import prices.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When import prices rise (e.g. oil shock, currency depreciation), domestic prices rise — inflation imported from abroad, harder for domestic policy to control.",
            commonErrors: ["Thinking only domestic causes."],
          },
        },
        {
          id: "cieige-q-u6l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare CPI and GDP deflator as inflation measures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price indices",
                statement: "CPI consumer basket vs GDP all output.",
              },
            ],
            steps: [
              { reasoning: "CPI features.", marks: 1, markCode: "M" },
              { reasoning: "GDP deflator features.", marks: 1, markCode: "M" },
              { reasoning: "When each used.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "CPI measures consumer prices (fixed basket, imports included); GDP deflator covers all domestically produced output (current basket, excludes imports) — different purposes give different readings.",
            commonErrors: ["Treating as interchangeable."],
          },
        },
        {
          id: "cieige-q-u6l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Most central banks target an inflation rate of about:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8%" },
              { id: "b", text: "20%" },
              { id: "c", text: "0%" },
              { id: "d", text: "2%" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Inflation target", statement: "~2%." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 2%",
            commonErrors: ["Wrong figure."],
          },
        },
        {
          id: "cieige-q-u6l2c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Central banks prefer ~2% inflation to 0% mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher inflation always helps growth" },
              {
                id: "b",
                text: "It provides a buffer against deflation and keeps interest rates above zero",
              },
              { id: "c", text: "Consumers prefer higher prices" },
              { id: "d", text: "0% is impossible to measure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price stability",
                statement: "Low positive inflation safer than zero.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Buffer against deflation / policy room",
            commonErrors: ["Thinking 0% is safest."],
          },
        },
        {
          id: "cieige-q-u6l2c2-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A price index has a base-year value of 120 and a current value of 126. (a) Calculate the inflation rate. (b) Express the current index with the base year = 100.",
          response: {
            type: "numeric",
            parts: [
              { label: "Inflation rate", answer: 5, unit: "%" },
              { label: "Index (base = 100)", answer: 105 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Index calculation",
                statement: "Inflation = (new − old) ÷ old × 100; rebase × 100/120.",
              },
            ],
            steps: [
              {
                reasoning: "(126 − 120) ÷ 120 × 100 = 5%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "126 × 100 ÷ 120 = 105.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 5% (b) 105",
            commonErrors: ["Dividing by the wrong base."],
          },
        },
        {
          id: "cieige-q-u6l2c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Substitution bias' in the CPI refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prices substitute for quantities" },
              {
                id: "b",
                text: "Consumers switch to cheaper goods but the fixed basket ignores this",
              },
              { id: "c", text: "The basket is updated monthly" },
              { id: "d", text: "Consumers substitute imports for domestic goods" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "CPI bias",
                statement: "Fixed basket ignores substitution.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Fixed basket ignores substitution",
            commonErrors: ["Wrong bias type."],
          },
        },
        {
          id: "cieige-q-u6l2c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'anchored expectations' and why they help a central bank control inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anchored expectations",
                statement: "Inflation expectations stable near target.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Prevents inflation being built into wages/prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduces needed tightening.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "When households and firms expect inflation near target, they don't demand inflation-indexed wages or pre-emptively raise prices — breaking the wage-price spiral and making monetary policy more effective.",
            commonErrors: ["Confusing with actual inflation."],
          },
        },
        {
          id: "cieige-q-u6l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate inflation targeting as a framework when the main inflation cause is a supply-side shock (e.g. energy prices).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Targeting limits",
                statement: "Strict target vs supply shock.",
              },
            ],
            steps: [
              {
                reasoning: "Problem: tightening demand worsens output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Benefit: keeps expectations anchored.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Flexibility options: look-through, tolerance.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Strict inflation targeting forces contractionary policy during supply shocks, deepening recession; credible central banks 'look through' temporary shocks while anchoring expectations — flexibility within the framework works better than abandoning it.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
