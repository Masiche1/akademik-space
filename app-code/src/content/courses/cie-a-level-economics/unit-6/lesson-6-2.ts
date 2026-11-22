import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cieale-u6-lesson-6-2",
  code: "6-2",
  title: "Inflation Theories and Unemployment",
  goal: "I CAN distinguish inflation types and explain causes, plus analyse unemployment types and the Phillips curve.",
  standards: ["Cambridge A Level Economics 9708", "Unit 6: macroeconomics"],
  vocabulary: [
    {
      term: "Demand-pull inflation",
      definition: "AD exceeds productive capacity.",
    },
    {
      term: "Cost-push inflation",
      definition: "Rising input costs shift SRAS left.",
    },
    {
      term: "Wage-price spiral",
      definition: "Wages↑ → prices↑ → wages↑ cycle.",
    },
    {
      term: "Demand-deficient unemployment",
      definition: "Insufficient AD for full employment.",
    },
    {
      term: "Structural unemployment",
      definition: "Skills/locations mismatch.",
    },
    {
      term: "Phillips curve",
      definition: "Inverse relationship between inflation and unemployment.",
    },
  ],
  concepts: [
    {
      id: "cieale-u6l2-c1-inflation",
      title: "Inflation: types and causes",
      skill:
        "Distinguish demand-pull, cost-push and monetary inflation and evaluate policies.",
      lesson: {
        sections: [
          {
            heading: "Demand-pull inflation",
            body: "When **AD exceeds** the economy's productive capacity, excess demand bids up prices — 'too much money chasing too few goods'. Caused by: expansionary fiscal/monetary policy, rising confidence/wealth, export boom. Typically accompanied by low unemployment.",
          },
          {
            heading: "Cost-push and monetary inflation",
            body: "**Cost-push**: input costs (oil, wages, imported goods) rise → SRAS shifts left → prices↑ + output↓ (stagflation). **Monetary**: money supply grows faster than output → sustained inflation (quantity theory: MV=PY). **Wage-price spiral**: cost-push can become self-reinforcing.",
          },
        ],
        keyFormulas: [
          { name: "Demand-pull", statement: "AD > capacity → P↑" },
          { name: "Cost-push", statement: "Input costs↑ → SRAS← → P↑" },
          { name: "Quantity theory", statement: "MV = PY" },
        ],
        workedExample: {
          problem:
            "Oil prices double. What type of inflation and its macro effect?",
          solution:
            "Cost-push: SRAS shifts left → prices rise AND output falls (stagflation) — demand management can't fix without worsening unemployment.",
        },
      },
      questions: [
        {
          id: "cieale-q-u6l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Demand-pull inflation occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exports fall" },
              { id: "b", text: "AD exceeds productive capacity" },
              { id: "c", text: "Costs rise" },
              { id: "d", text: "Money supply falls" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demand-pull",
                statement: "Excess demand.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** AD > capacity",
            commonErrors: ["Confusing with cost-push."],
          },
        },
        {
          id: "cieale-q-u6l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish demand-pull from cost-push inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Inflation types",
                statement: "Demand vs cost side.",
              },
            ],
            steps: [
              { reasoning: "Demand-pull defined.", marks: 1, markCode: "M" },
              { reasoning: "Cost-push defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Demand-pull: excess AD bids prices up (AD→, SRAS→). Cost-push: input costs rise shifting SRAS left (SRAS←) — causes differ and policy response differs.",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "cieale-q-u6l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'wage-price spiral'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wage-price spiral",
                statement: "Self-reinforcing cycle.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Cycle shown.", marks: 1, markCode: "M" },
              { reasoning: "Breaking it.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher prices → workers demand higher wages → costs rise → prices rise further → repeat — requires credible incomes policy to break.",
            commonErrors: ["One-direction only."],
          },
        },
        {
          id: "cieale-q-u6l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why is cost-push inflation harder to control than demand-pull?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy dilemma",
                statement: "Stagflation problem.",
              },
            ],
            steps: [
              { reasoning: "Demand-pull fix.", marks: 1, markCode: "M" },
              { reasoning: "Cost-push dilemma.", marks: 1, markCode: "M" },
              { reasoning: "Trade-off.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Demand-pull: contractionary policy reduces AD → P↓ (costs some output). Cost-push: same policy deepens recession without fixing supply shock — policy faces worse trade-off (Phillips curve shift).",
            commonErrors: ["Same response assumed."],
          },
        },
        {
          id: "cieale-q-u6l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate monetarist vs Keynesian explanations of inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation theories",
                statement: "Money vs demand.",
              },
            ],
            steps: [
              { reasoning: "Monetarist view.", marks: 1, markCode: "M" },
              { reasoning: "Keynesian view.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Monetarists: sustained inflation only from excessive money growth (MV=PY). Keynesians: demand-pull or cost-push can cause it — money matters but isn't sole cause; both explain different episodes.",
            commonErrors: ["One theory only."],
          },
        },
        {
          id: "cieale-q-u6l2c1-6",
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
              { reasoning: "Cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Inflation >50% per month — usually caused by money supply collapse/government financing deficits by printing money; destroys currency value.",
            commonErrors: ["Confusing with high inflation."],
          },
        },
        {
          id: "cieale-q-u6l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Stagflation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deflation" },
              { id: "b", text: "Full employment" },
              { id: "c", text: "High growth and low inflation" },
              { id: "d", text: "Rising prices with falling output" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stagflation",
                statement: "P↑ + Y↓.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** P↑ + Y↓",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "cieale-q-u6l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does imported inflation arise?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imported inflation",
                statement: "Foreign price rises.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Policy limit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Depreciation or world price rises (oil) increase import costs → SRAS left → domestic prices rise — can't fix via demand management without hurting growth.",
            commonErrors: ["Thinking domestic cause."],
          },
        },
        {
          id: "cieale-q-u6l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might moderate inflation be tolerated?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation trade-off",
                statement: "Some benefits.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Costs.", marks: 1, markCode: "M" },
              { reasoning: "Target choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Low inflation (2%) lubricates economy — avoids deflation, allows real wage flexibility — but high inflation erodes savings and distorts decisions; target balances.",
            commonErrors: ["Inflation always bad."],
          },
        },
        {
          id: "cieale-q-u6l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the costs of inflation for different groups.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation incidence",
                statement: "Redistributes.",
              },
            ],
            steps: [
              { reasoning: "Savers/pensioners hurt.", marks: 1, markCode: "M" },
              { reasoning: "Borrowers helped.", marks: 1, markCode: "M" },
              { reasoning: "Menu/search costs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs distribution.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Inflation redistributes: hurts savers, creditors, fixed-income groups; helps borrowers; plus menu costs, shoe-leather costs — unpredictable inflation worse than predictable.",
            commonErrors: ["Uniform effect assumed."],
          },
        },
        {
          id: "cieale-q-u6l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Demand-pull inflation occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the money supply shrinks" },
              { id: "b", text: "wages and prices are falling" },
              { id: "c", text: "aggregate demand exceeds productive capacity" },
              { id: "d", text: "input costs suddenly rise" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demand-pull inflation",
                statement: "AD > capacity.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** AD exceeds capacity",
            commonErrors: ["Confusing with cost-push."],
          },
        },
        {
          id: "cieale-q-u6l2c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The consumer price index rose from 120 to 126 in one year. Calculate the inflation rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation",
                statement: "% change in CPI.",
              },
            ],
            steps: [
              {
                reasoning: "Inflation = (126−120)/120 × 100 = 5%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Inflation = 5%",
            commonErrors: ["Dividing by the new index 126."],
          },
        },
        {
          id: "cieale-q-u6l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sharp rise in world oil prices that raises prices while reducing output is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "demand-pull inflation" },
              { id: "b", text: "disinflation" },
              { id: "c", text: "cost-push inflation" },
              { id: "d", text: "deflation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cost-push",
                statement: "Input costs → SRAS left.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Cost-push (stagflation)",
            commonErrors: ["Calling it demand-pull."],
          },
        },
        {
          id: "cieale-q-u6l2c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The money supply grows by 5%, real output grows by 2% and the velocity of circulation is constant. Using the quantity theory MV = PY:",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "%" },
              { label: "b", answer: 103 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Quantity theory",
                statement: "MV = PY → %ΔP = %ΔM − %ΔY.",
              },
            ],
            steps: [
              {
                reasoning: "%ΔP = 5 − 2 = 3%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New price index = 100 × 1.03 = 103.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Inflation ≈ 3%; price index = 103",
            commonErrors: ["Adding output growth instead of subtracting."],
          },
        },
        {
          id: "cieale-q-u6l2c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'wage-price spiral' describes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "government budget deficits only" },
              { id: "b", text: "a self-reinforcing cycle of rising wages and prices" },
              { id: "c", text: "a fall in consumer demand" },
              { id: "d", text: "stable prices over time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wage-price spiral",
                statement: "Wages↑ → P↑ → wages↑.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Self-reinforcing wage-price cycle",
            commonErrors: ["Describing it as one-off cost-push only."],
          },
        },
        {
          id: "cieale-q-u6l2c1-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "A worker's nominal wage is $12 per hour and the price level is 20% above the base year. Calculate the real wage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "dollars per hour" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Real wage",
                statement: "Nominal wage ÷ price index.",
              },
            ],
            steps: [
              {
                reasoning: "Real wage = 12 ÷ 1.2 = 10.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Real wage = $10 per hour",
            commonErrors: ["Not adjusting for the price level."],
          },
        },
      ],
    },
    {
      id: "cieale-u6l2-c2-unemployment",
      title: "Unemployment types and the Phillips curve",
      skill:
        "Classify unemployment, explain causes and analyse the inflation-unemployment trade-off.",
      lesson: {
        sections: [
          {
            heading: "Types of unemployment",
            body: "**Demand-deficient** (cyclical): insufficient AD. **Frictional**: normal job-search time. **Structural**: skills/location mismatch — needs retraining, not just AD stimulus. **Classical**: real wages above equilibrium. **Seasonal**: predictable patterns.",
          },
          {
            heading: "Phillips curve",
            body: "Short-run Phillips curve: inverse inflation-unemployment relation — low unemployment → high inflation (demand pressures + wage-price spiral). **NAIRU** (non-accelerating inflation rate of unemployment): below it, inflation accelerates. Long-run Phillips curve vertical at NAIRU — no permanent trade-off.",
          },
        ],
        keyFormulas: [
          { name: "NAIRU", statement: "Unemployment where inflation stable" },
          { name: "SR Phillips", statement: "Inverse U–P relation" },
          { name: "LR Phillips", statement: "Vertical at NAIRU" },
        ],
        workedExample: {
          problem: "Why can't unemployment be permanently reduced below NAIRU?",
          solution:
            "Below NAIRU, labour shortages → wages rise → costs up → inflation accelerates; economy returns to NAIRU with higher inflation — only supply-side policies lower NAIRU itself.",
        },
      },
      questions: [
        {
          id: "cieale-q-u6l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Structural unemployment is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skills or location mismatch" },
              { id: "b", text: "High wages only" },
              { id: "c", text: "Seasonal patterns" },
              { id: "d", text: "Low AD" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural",
                statement: "Mismatch.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Mismatch",
            commonErrors: ["Confusing with cyclical."],
          },
        },
        {
          id: "cieale-q-u6l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish frictional from structural unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Unemployment types",
                statement: "Search vs mismatch.",
              },
            ],
            steps: [
              { reasoning: "Frictional defined.", marks: 1, markCode: "M" },
              { reasoning: "Structural defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Frictional: normal job-search time between jobs. Structural: skills/technology/location changes make workers unsuitable — persistent, needs retraining.",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "cieale-q-u6l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why structural unemployment needs different policy than demand-deficient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy targeting",
                statement: "AD stimulus fails structural.",
              },
            ],
            steps: [
              { reasoning: "Demand-deficient fix.", marks: 1, markCode: "M" },
              { reasoning: "Structural needs.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Demand-deficient: AD stimulus works. Structural: workers lack skills/are in wrong region — needs retraining, relocation, labour market reform, not just spending.",
            commonErrors: ["Same policy assumed."],
          },
        },
        {
          id: "cieale-q-u6l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the short-run Phillips curve and NAIRU.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phillips curve",
                statement: "Trade-off then limit.",
              },
            ],
            steps: [
              { reasoning: "SRPC mechanism.", marks: 1, markCode: "M" },
              { reasoning: "NAIRU defined.", marks: 1, markCode: "M" },
              { reasoning: "Below NAIRU.", marks: 1, markCode: "M" },
              { reasoning: "LR implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "SRPC: lower unemployment → wage pressures → inflation rises. Below NAIRU inflation accelerates; expectations adjust → SRPC shifts right → LRPC vertical at NAIRU.",
            commonErrors: ["Permanent trade-off believed."],
          },
        },
        {
          id: "cieale-q-u6l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether governments should target low unemployment or low inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy priorities",
                statement: "Dual mandate debate.",
              },
            ],
            steps: [
              { reasoning: "Unemployment costs.", marks: 1, markCode: "M" },
              { reasoning: "Inflation costs.", marks: 1, markCode: "M" },
              { reasoning: "Trade-off.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both matter — unemployment has severe social costs, high inflation erodes welfare; optimal policy targets NAIRU with stable low inflation rather than either extreme.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u6l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'hysteresis' in unemployment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hysteresis",
                statement: "Unemployment persists after shock.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Long unemployment raises NAIRU permanently — skills deteriorate, motivation falls, employers discriminate — recession can leave higher structural unemployment.",
            commonErrors: ["Confusing with frictional."],
          },
        },
        {
          id: "cieale-q-u6l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "NAIRU is the unemployment rate where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unemployment is zero" },
              { id: "b", text: "Inflation is stable" },
              { id: "c", text: "Output is max" },
              { id: "d", text: "Wages are highest" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NAIRU",
                statement: "Stable inflation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Inflation stable",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "cieale-q-u6l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does 'natural rate' of unemployment differ from NAIRU?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Natural rate",
                statement: "Frictional+structural floor.",
              },
            ],
            steps: [
              { reasoning: "Natural rate defined.", marks: 1, markCode: "M" },
              { reasoning: "NAIRU relation.", marks: 1, markCode: "M" },
              { reasoning: "Practical use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Natural rate = frictional+structural unemployment floor; NAIRU ≈ natural rate — both mark lowest sustainable unemployment; NAIRU emphasises inflation link.",
            commonErrors: ["Treating as different concepts."],
          },
        },
        {
          id: "cieale-q-u6l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two supply-side policies to reduce structural unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Supply-side",
                statement: "Retraining, mobility, flexibility.",
              },
            ],
            steps: [
              { reasoning: "Two valid policies.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. vocational retraining/education and labour mobility support (relocation, information) — plus labour market deregulation for flexibility.",
            commonErrors: ["Demand-side policies."],
          },
        },
        {
          id: "cieale-q-u6l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why inflation targeting replaced full-employment targeting in many economies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy framework",
                statement: "Credibility shift.",
              },
            ],
            steps: [
              { reasoning: "Phillips curve lessons.", marks: 1, markCode: "M" },
              {
                reasoning: "Inflation targeting benefits.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Phillips curve showed unemployment-inflation trade-off temporary; inflation targeting anchors expectations → price stability enables growth — but may neglect unemployment (dual mandate debate).",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u6l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Frictional unemployment is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a permanent skills mismatch" },
              { id: "b", text: "job losses caused by factory closures" },
              { id: "c", text: "unemployment that only occurs in winter" },
              { id: "d", text: "the normal time spent searching for a job between jobs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Frictional unemployment",
                statement: "Normal job-search time.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Normal job-search time",
            commonErrors: ["Confusing with structural."],
          },
        },
        {
          id: "cieale-q-u6l2c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The labour force is 30 million and 1.2 million people are unemployed. Calculate the unemployment rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unemployment rate",
                statement: "Unemployed ÷ labour force × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Rate = 1.2/30 × 100 = 4%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Unemployment rate = 4%",
            commonErrors: ["Dividing by total population."],
          },
        },
        {
          id: "cieale-q-u6l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If unemployment falls below the NAIRU:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "inflation tends to fall" },
              { id: "b", text: "wages become permanently sticky" },
              { id: "c", text: "inflation tends to accelerate" },
              { id: "d", text: "output must fall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NAIRU",
                statement: "Below it inflation accelerates.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Inflation accelerates",
            commonErrors: ["Thinking lower unemployment always helps."],
          },
        },
        {
          id: "cieale-q-u6l2c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A country's labour force is 25 million. Initially 23.5 million people are employed; later employment rises to 24 million.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6, unit: "%" },
              { label: "b", answer: 4, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unemployment rate",
                statement: "(Labour force − employment) ÷ labour force.",
              },
            ],
            steps: [
              {
                reasoning: "Unemployed = 25 − 23.5 = 1.5m; rate = 1.5/25 = 6%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unemployed = 25 − 24 = 1m; rate = 1/25 = 4%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "6% initially, then 4%",
            commonErrors: ["Dividing by population instead of labour force."],
          },
        },
        {
          id: "cieale-q-u6l2c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Structural unemployment results from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "predictable seasonal demand patterns" },
              { id: "b", text: "a general fall in aggregate demand" },
              { id: "c", text: "a mismatch between workers' skills or locations and available jobs" },
              { id: "d", text: "the normal time taken to find a job" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural unemployment",
                statement: "Skills/location mismatch.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Skills/location mismatch",
            commonErrors: ["Confusing with cyclical."],
          },
        },
        {
          id: "cieale-q-u6l2c2-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "The NAIRU is 5% and the actual unemployment rate is 8%. Calculate cyclical (demand-deficient) unemployment.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cyclical unemployment",
                statement: "Actual − NAIRU.",
              },
            ],
            steps: [
              {
                reasoning: "Cyclical = 8 − 5 = 3%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Cyclical unemployment = 3%",
            commonErrors: ["Reporting 8% as cyclical."],
          },
        },
      ],
    },
  ],
};
