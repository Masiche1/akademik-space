import type { Lesson } from "../../../types.ts";

export const lesson64: Lesson = {
  id: "cieale-u6-lesson-6-4",
  code: "6-4",
  title: "Supply-Side Policies, Growth and the Business Cycle",
  goal: "I CAN evaluate supply-side policies, distinguish growth types and analyse business cycle phases.",
  standards: [
    "Cambridge A Level Economics 9708",
    "Unit 6: growth and supply-side",
  ],
  vocabulary: [
    {
      term: "Supply-side policies",
      definition: "Measures to increase productive capacity.",
    },
    { term: "Actual growth", definition: "Increase in real GDP in a period." },
    {
      term: "Potential growth",
      definition: "Increase in productive capacity/LRAS.",
    },
    {
      term: "Business cycle",
      definition: "Fluctuations between boom and recession.",
    },
    { term: "Peak/trough", definition: "High/low points of the cycle." },
    {
      term: "Supply-side shock",
      definition: "Sudden change in costs or capacity.",
    },
  ],
  concepts: [
    {
      id: "cieale-u6l4-c1-supply",
      title: "Supply-side policies",
      skill: "Evaluate market-based vs interventionist supply-side approaches.",
      lesson: {
        sections: [
          {
            heading: "Market-based supply-side",
            body: "**Privatisation** (efficiency gains, but natural monopoly risk), **deregulation** (competition, lower prices), **tax cuts** (incentives, but may worsen inequality/debt), **flexible labour markets** (lower unemployment, but insecurity). Aim: shift LRAS right → non-inflationary growth.",
          },
          {
            heading: "Interventionist supply-side",
            body: "**Education/training** (human capital), **R&D subsidies** (innovation), **infrastructure** (public goods enabling production), **regional policy** (reduce structural unemployment). Slower but addresses market failures and inequality.",
          },
        ],
        keyFormulas: [
          { name: "Supply-side", statement: "LRAS right → growth" },
          {
            name: "Market vs interventionist",
            statement: "Incentives vs capacity building",
          },
          { name: "Non-inflationary growth", statement: "AD ≤ LRAS growth" },
        ],
        workedExample: {
          problem:
            "Why might tax cuts be 'supply-side' rather than just demand stimulus?",
          solution:
            "If lower marginal tax rates increase work incentives → labour supply rises → LRAS shifts right → capacity grows, not just demand.",
        },
      },
      questions: [
        {
          id: "cieale-q-u6l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Supply-side policies aim to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase productive capacity" },
              { id: "b", text: "Reduce inflation directly" },
              { id: "c", text: "Raise AD" },
              { id: "d", text: "Increase imports" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Supply-side",
                statement: "Capacity.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Capacity",
            commonErrors: ["Demand-side confused."],
          },
        },
        {
          id: "cieale-q-u6l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish market-based from interventionist supply-side policies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Supply-side types",
                statement: "Market vs state.",
              },
            ],
            steps: [
              { reasoning: "Market-based defined.", marks: 1, markCode: "M" },
              {
                reasoning: "Interventionist defined.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Market-based: privatisation, deregulation, tax cuts, flexible labour. Interventionist: education, R&D, infrastructure — former rely on incentives, latter on state investment.",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "cieale-q-u6l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how privatisation can improve efficiency and its risks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Privatisation",
                statement: "Efficiency vs monopoly.",
              },
            ],
            steps: [
              { reasoning: "Efficiency case.", marks: 1, markCode: "M" },
              { reasoning: "Risk.", marks: 1, markCode: "M" },
              { reasoning: "Condition.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Private firms face profit incentive → efficiency; but natural monopolies (utilities) may just become private monopolies → need regulation/competition.",
            commonErrors: ["Always good or always bad."],
          },
        },
        {
          id: "cieale-q-u6l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why might lower marginal tax rates increase labour supply?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tax incentives",
                statement: "Substitution vs income effect.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "When it works.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher net wage → substitution effect (work more vs leisure) dominates income effect at high rates — but at low rates effect weak; may worsen inequality.",
            commonErrors: ["Guaranteed effect."],
          },
        },
        {
          id: "cieale-q-u6l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate supply-side policies for reducing structural unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural unemployment",
                statement: "Supply-side is key.",
              },
            ],
            steps: [
              { reasoning: "Market-based policies.", marks: 1, markCode: "M" },
              {
                reasoning: "Interventionist policies.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both approaches needed — flexible labour markets + training/education; market-based faster but may increase insecurity; interventionist slower but addresses skills gaps sustainably.",
            commonErrors: ["One approach only."],
          },
        },
        {
          id: "cieale-q-u6l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'human capital'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Human capital",
                statement: "Skills/knowledge.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Policy link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Workers' skills, education and health that determine productivity — investment in human capital is key supply-side policy.",
            commonErrors: ["Confusing with physical capital."],
          },
        },
        {
          id: "cieale-q-u6l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deregulation aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase competition and efficiency" },
              { id: "b", text: "Raise prices" },
              { id: "c", text: "Increase government control" },
              { id: "d", text: "Reduce entry" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deregulation",
                statement: "Less restriction.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Competition",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "cieale-q-u6l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two limitations of market-based supply-side policies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "SSP limits",
                statement: "Inequality, time, monopoly.",
              },
            ],
            steps: [
              { reasoning: "Two valid limits.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. tax cuts may worsen inequality and debt; privatisation of natural monopolies needs regulation; benefits take time to materialise.",
            commonErrors: ["Only benefits cited."],
          },
        },
        {
          id: "cieale-q-u6l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does infrastructure investment affect LRAS?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Infrastructure",
                statement: "Enables production.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Limit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Better transport/energy/communications lower business costs, expand markets, enable agglomeration → LRAS right; but fiscal cost and possible inefficiency.",
            commonErrors: ["No effect claimed."],
          },
        },
        {
          id: "cieale-q-u6l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'flexible labour markets' as a supply-side strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flexible labour",
                statement: "Efficiency vs security.",
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
              "Flexibility lowers structural unemployment and adapts to shocks, but insecure work, inequality and low demand risk — 'flexicurity' models balance.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u6l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Privatisation is best described as a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "protectionist measure" },
              { id: "b", text: "market-based supply-side policy" },
              { id: "c", text: "demand-management tool" },
              { id: "d", text: "monetary policy instrument" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Privatisation",
                statement: "Transfer to private sector.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Market-based supply-side",
            commonErrors: ["Confusing with fiscal stimulus."],
          },
        },
        {
          id: "cieale-q-u6l4c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Potential output grows by 2.5% per year while aggregate demand grows by 5% per year. Calculate the annual widening of the output gap.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Output gap",
                statement: "Growth of AD − growth of LRAS.",
              },
            ],
            steps: [
              {
                reasoning: "Gap widens by 5 − 2.5 = 2.5% of potential output per year.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Output gap widens by 2.5% per year",
            commonErrors: ["Comparing levels instead of growth rates."],
          },
        },
        {
          id: "cieale-q-u6l4c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an interventionist supply-side policy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government-funded vocational training and R&D subsidies" },
              { id: "b", text: "Deregulation of markets" },
              { id: "c", text: "Lower income tax rates" },
              { id: "d", text: "Privatisation of state enterprises" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Market vs interventionist",
                statement: "Incentives vs capacity building.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Training and R&D subsidies",
            commonErrors: ["Confusing the two approaches."],
          },
        },
        {
          id: "cieale-q-u6l4c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Before a training programme, 50 workers produce 500 units per week. After training, the same 50 workers produce 600 units.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10, unit: "units per worker" },
              { label: "b", answer: 20, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Labour productivity",
                statement: "Output ÷ workers.",
              },
            ],
            steps: [
              {
                reasoning: "Initial productivity = 500/50 = 10 units per worker.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New productivity = 600/50 = 12; % rise = (12−10)/10 = 20%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "10 → 12 units per worker (+20%)",
            commonErrors: ["Comparing total output without per-worker basis."],
          },
        },
        {
          id: "cieale-q-u6l4c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deregulation is intended to raise efficiency mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "fixing prices administratively" },
              { id: "b", text: "increasing competition in markets" },
              { id: "c", text: "nationalising key industries" },
              { id: "d", text: "raising taxes on firms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deregulation",
                statement: "Removing market restrictions.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** More competition",
            commonErrors: ["Confusing with regulation."],
          },
        },
        {
          id: "cieale-q-u6l4c1-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Real GDP rises from $800bn to $832bn in one year. Calculate the actual growth rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Actual growth",
                statement: "%Δ real GDP.",
              },
            ],
            steps: [
              {
                reasoning: "Growth = (832−800)/800 × 100 = 4%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Actual growth = 4%",
            commonErrors: ["Dividing by the new GDP."],
          },
        },
      ],
    },
    {
      id: "cieale-u6l4-c2-growth-cycle",
      title: "Economic growth and the business cycle",
      skill:
        "Distinguish actual vs potential growth, analyse cycle phases and supply shocks.",
      lesson: {
        sections: [
          {
            heading: "Types of growth",
            body: "**Actual growth** = % increase in real GDP (short-run, uses spare capacity). **Potential growth** = % increase in LRAS/capacity (long-run, resources+technology). Actual can exceed potential temporarily (overheating → inflation); sustained growth requires potential growth.",
          },
          {
            heading: "Business cycle and shocks",
            body: "Cycle phases: **recovery → peak → recession → trough → recovery**. Driven by AD fluctuations and supply shocks. Policy aims: **dampen** cycle via automatic stabilisers and counter-cyclical fiscal/monetary policy — smooth growth, avoid extremes.",
          },
        ],
        keyFormulas: [
          { name: "Actual growth", statement: "%Δ real GDP" },
          { name: "Potential growth", statement: "%Δ LRAS" },
          { name: "Output gap", statement: "Actual − potential" },
        ],
        workedExample: {
          problem:
            "Economy grows 4% but potential growth is 2%. What's happening?",
          solution:
            "Actual > potential → economy above capacity → output gap positive → inflationary pressure; unsustainable without capacity expansion.",
        },
      },
      questions: [
        {
          id: "cieale-q-u6l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Potential growth is the growth of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Current output" },
              { id: "b", text: "Productive capacity (LRAS)" },
              { id: "c", text: "Government spending" },
              { id: "d", text: "Exports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Potential growth",
                statement: "Capacity.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** LRAS",
            commonErrors: ["Confusing actual."],
          },
        },
        {
          id: "cieale-q-u6l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the phases of the business cycle in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cycle phases",
                statement: "Recovery to recovery.",
              },
            ],
            steps: [
              { reasoning: "Phases listed.", marks: 1, markCode: "M" },
              { reasoning: "Order correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Recovery → peak → recession → trough → recovery (or expansion, peak, contraction, trough).",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "cieale-q-u6l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why can't actual growth exceed potential growth sustainably?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth limits",
                statement: "Capacity constraint.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "M" },
              { reasoning: "Policy link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Output can't exceed capacity — actual > potential → overheating → inflation; sustained growth requires potential growth via supply-side policies.",
            commonErrors: ["Any growth sustainable."],
          },
        },
        {
          id: "cieale-q-u6l4c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How do 'supply shocks' differ from demand shocks in the business cycle?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shocks", statement: "AD vs AS." },
            ],
            steps: [
              { reasoning: "Demand shock defined.", marks: 1, markCode: "M" },
              { reasoning: "Supply shock defined.", marks: 1, markCode: "M" },
              { reasoning: "Policy difference.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Demand shock: AD shifts → output+prices move together. Supply shock: AS shifts → stagflation (prices↑, output↓) — policy can't fix both without trade-off.",
            commonErrors: ["Same treatment assumed."],
          },
        },
        {
          id: "cieale-q-u6l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'counter-cyclical' fiscal policy in smoothing the business cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counter-cyclical",
                statement: "Opposite to cycle.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Automatic stabilisers.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deficits in recession, surpluses in boom — smooths cycle but requires accurate forecasting (hard), may worsen debt, and automatic stabilisers alone may be insufficient.",
            commonErrors: ["Guaranteed success."],
          },
        },
        {
          id: "cieale-q-u6l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'overheating'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Overheating",
                statement: "Output above potential.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Economy growing faster than capacity allows — output gap positive → inflation accelerates, bottlenecks emerge; needs contractionary policy.",
            commonErrors: ["Confusing with boom."],
          },
        },
        {
          id: "cieale-q-u6l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'trough' of the business cycle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High inflation" },
              { id: "b", text: "The lowest point of output" },
              { id: "c", text: "Full employment" },
              { id: "d", text: "Peak growth" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trough", statement: "Low point." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Lowest output",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "cieale-q-u6l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of business cycle fluctuations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cycle causes",
                statement: "AD shocks + confidence.",
              },
            ],
            steps: [
              { reasoning: "Two valid causes.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. changes in investment confidence and external demand shocks (export collapse, commodity prices) — plus monetary/fiscal policy swings.",
            commonErrors: ["Only one cause."],
          },
        },
        {
          id: "cieale-q-u6l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'fine-tuning' the economy fail?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fine-tuning",
                statement: "Forecasting limits.",
              },
            ],
            steps: [
              { reasoning: "Problem.", marks: 1, markCode: "M" },
              { reasoning: "Time lags.", marks: 1, markCode: "M" },
              { reasoning: "Alternative.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Policy lags mean stimulus arrives after recovery → pro-cyclical mistakes; plus forecasting uncertainty — rules-based approaches may be safer.",
            commonErrors: ["Perfect control assumed."],
          },
        },
        {
          id: "cieale-q-u6l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether governments should aim for steady growth or maximum growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth strategy",
                statement: "Steady vs max.",
              },
            ],
            steps: [
              { reasoning: "Maximum growth risks.", marks: 1, markCode: "M" },
              { reasoning: "Steady growth benefits.", marks: 1, markCode: "M" },
              { reasoning: "Sustainability.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Steady, sustainable growth better — maximum growth causes overheating, inflation, environmental damage; potential growth sets sustainable ceiling.",
            commonErrors: ["More always better."],
          },
        },
        {
          id: "cieale-q-u6l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'peak' of the business cycle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a period of steady growth" },
              { id: "b", text: "the point of full employment always" },
              { id: "c", text: "the point of highest output before a downturn" },
              { id: "d", text: "the lowest point of the cycle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Peak",
                statement: "High point of the cycle.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Highest output before downturn",
            commonErrors: ["Confusing peak with trough."],
          },
        },
        {
          id: "cieale-q-u6l4c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Real GDP rises from $1,000bn to $1,040bn in one year. Calculate actual growth.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Actual growth",
                statement: "%Δ real GDP.",
              },
            ],
            steps: [
              {
                reasoning: "Growth = (1040−1000)/1000 × 100 = 4%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Actual growth = 4%",
            commonErrors: ["Dividing by the new GDP."],
          },
        },
        {
          id: "cieale-q-u6l4c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If actual growth exceeds potential growth for several years:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "unemployment must fall permanently to zero" },
              { id: "b", text: "a positive output gap and inflationary pressure emerge" },
              { id: "c", text: "the price level must fall" },
              { id: "d", text: "LRAS shifts left automatically" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Output gap",
                statement: "Actual > potential → inflation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Positive gap, inflationary pressure",
            commonErrors: ["Thinking growth is always sustainable."],
          },
        },
        {
          id: "cieale-q-u6l4c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An economy grows at 5% per year for two consecutive years, starting from output of $1,000bn.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1102.5, unit: "billion dollars" },
              { label: "b", answer: 10.25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Compound growth",
                statement: "Y = Y0 × (1+g)^t.",
              },
            ],
            steps: [
              {
                reasoning: "Output = 1000 × 1.05² = 1000 × 1.1025 = $1,102.5bn.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total growth = (1102.5−1000)/1000 = 10.25%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "$1,102.5bn (10.25% total growth)",
            commonErrors: ["Using 5+5=10% instead of compounding."],
          },
        },
        {
          id: "cieale-q-u6l4c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'supply-side shock' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a sudden change in production costs or productive capacity" },
              { id: "b", text: "a currency appreciation" },
              { id: "c", text: "a cut in income tax" },
              { id: "d", text: "a rise in consumer spending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Supply-side shock",
                statement: "Sudden cost/capacity change.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sudden change in costs/capacity",
            commonErrors: ["Confusing with demand shock."],
          },
        },
        {
          id: "cieale-q-u6l4c2-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Potential output is $1,000bn and actual output is $940bn. Calculate the output gap.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: -60, unit: "billion dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Output gap",
                statement: "Actual − potential.",
              },
            ],
            steps: [
              {
                reasoning: "Output gap = 940 − 1000 = −60.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Output gap = −$60bn (recessionary)",
            commonErrors: ["Wrong sign — this is a negative gap."],
          },
        },
      ],
    },
  ],
};
