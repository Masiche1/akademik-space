import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "econ-u4-lesson-4-4",
  code: "4-4",
  title: "Aggregate Demand, Aggregate Supply and the Circular Flow",
  goal: "I CAN explain the circular flow of income, injections and withdrawals, use the AD/AS model to analyse output and price level changes, and evaluate growth versus fluctuations.",
  standards: ["Paper 1", "Paper 2", "Topic 4.4"],
  vocabulary: [
    {
      term: "Circular flow of income",
      definition:
        "The continuous flow of spending and income between households, firms and government in an economy.",
    },
    {
      term: "Injection",
      definition:
        "Spending entering the circular flow: investment (I), government spending (G) and exports (X).",
    },
    {
      term: "Withdrawal (leakage)",
      definition:
        "Spending leaving the circular flow: saving (S), taxes (T) and imports (M).",
    },
    {
      term: "Aggregate demand (AD)",
      definition:
        "Total planned spending on domestically produced output: AD = C + I + G + (X − M).",
    },
    {
      term: "Short-run aggregate supply (SRAS)",
      definition:
        "Total output firms are willing to supply at each price level in the short run, when input prices are sticky.",
    },
    {
      term: "Long-run aggregate supply (LRAS)",
      definition:
        "The economy's productive capacity — output supplied when all resources are fully employed at stable prices.",
    },
    {
      term: "Multiplier effect",
      definition:
        "The process by which an initial injection raises income by more than the injection itself through repeated rounds of spending.",
    },
    {
      term: "Output gap",
      definition:
        "The difference between actual output and potential output — positive in booms, negative in recessions.",
    },
  ],
  concepts: [
    {
      id: "econ-u4-circular-flow",
      title: "The circular flow and measuring economic activity",
      skill:
        "Explain the circular flow of income, injections and withdrawals, and how GDP is measured.",
      lesson: {
        sections: [
          {
            heading: "The circular flow",
            body: "In a simple economy, **households** supply factors of production (labour, land, capital) to **firms** and receive income (wages, rent, profit). Households then spend that income on **consumption** — firms sell output back to households. This is the real and money flow of the circular flow. **Government** collects taxes and spends on public services; **foreign** trade adds exports and imports.",
          },
          {
            heading: "Injections and withdrawals",
            body: "Not all income returns to firms as spending. **Withdrawals (leakages)** are saving, taxes and imports — income that leaves the circular flow. **Injections** are investment, government spending and exports — spending that enters the flow from outside. If injections exceed withdrawals, national income **rises**; if withdrawals exceed injections, it **falls**. The **multiplier** amplifies injections: a $1 injection can raise income by several dollars as it is re-spent.",
          },
          {
            heading: "Measuring economic activity: GDP",
            body: "National income is measured by **GDP** — total value of final output in a period. The **expenditure approach** sums total spending: $GDP = C + I + G + (X - M)$. Consumption (C) is the largest component in most economies; investment (I) is the most volatile. GDP measures the level of activity but has limits — it ignores non-market activity, income distribution and environmental costs.",
          },
        ],
        keyFormulas: [
          {
            name: "Injections vs withdrawals",
            statement: "Injections = I + G + X; Withdrawals = S + T + M",
          },
          { name: "GDP expenditure", statement: "$GDP = C + I + G + (X - M)$" },
          {
            name: "Multiplier",
            statement: "$multiplier = \\frac{1}{1 - MPC}$",
          },
        ],
        workedExample: {
          problem:
            "An economy has C = 400, I = 120, G = 150, X = 200, M = 180. Calculate GDP.",
          solution:
            "GDP = C + I + G + (X − M) = 400 + 120 + 150 + (200 − 180) = 400 + 120 + 150 + 20 = 690.",
        },
      },
      questions: [
        {
          id: "econ-u4-cfq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the circular flow of income, 'injections' are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saving, taxes and imports" },
              { id: "b", text: "Wages, rent and profit" },
              { id: "c", text: "Consumption, saving and investment" },
              { id: "d", text: "Investment, government spending and exports" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Injections",
                statement: "Spending entering the circular flow: I + G + X.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Injections are spending from outside the household-firm flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Investment, government spending and exports are the three injections.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Investment, government spending and exports",
            commonErrors: [
              "Confusing injections (entering) with withdrawals (leaving).",
            ],
          },
        },
        {
          id: "econ-u4-cfq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In an economy, consumption is $500bn, investment is $150bn, government spending is $180bn, exports are $120bn and imports are $140bn. Calculate GDP.",
          response: {
            type: "numeric",
            parts: [{ label: "GDP ($bn)", answer: 810, unit: "$bn" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "GDP",
                statement: "GDP = C + I + G + (X − M)",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply the expenditure formula, subtracting imports.",
                working: "X - M = 120 - 140 = -20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add all components.",
                working: "GDP = 500 + 150 + 180 + (-20)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GDP = 810.",
                working: "500 + 150 + 180 - 20 = 810",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "GDP = $810bn",
            commonErrors: ["Adding imports instead of subtracting them."],
          },
        },
        {
          id: "econ-u4-cfq3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an economy the marginal propensity to consume (MPC) is 0.75. The government increases investment spending by $200 million.",
          response: {
            type: "numeric",
            parts: [
              { label: "Multiplier", answer: 4 },
              {
                label: "Total increase in national income ($m)",
                answer: 800,
                unit: "$m",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Multiplier",
                statement: "Multiplier = 1 / (1 − MPC)",
              },
            ],
            steps: [
              {
                reasoning: "Multiplier = 1 / (1 − 0.75).",
                working: "1 \\div (1 - 0.75) = 1 \\div 0.25",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Multiplier = 4.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Total income increase = injection × multiplier = 200 × 4.",
                working: "200 \\times 4 = 800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Income rises by $800 million.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Multiplier = 4; income increases by $800m",
            commonErrors: ["Using MPC as the multiplier instead of 1/(1−MPC)."],
          },
        },
        {
          id: "econ-u4-cfq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A country's households save more of their income and pay higher taxes, while the government cuts its own spending.",
          parts: [
            {
              label: "a",
              prompt: "Define injections and withdrawals in the circular flow.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the described changes affect the level of national income.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether GDP is a reliable measure of economic activity in this situation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Injections and withdrawals",
                statement:
                  "Injections = I + G + X enter the flow; withdrawals = S + T + M leave it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Injections are spending entering the circular flow: investment, government spending, exports.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Withdrawals are leakages: saving, taxes, imports.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Higher saving and taxes are larger withdrawals; lower government spending is a smaller injection.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "All three changes reduce the net flow of spending into the economy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "National income will fall unless offset by other injections or lower withdrawals.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "GDP will capture the fall in spending and output, so it signals the contraction.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But GDP ignores distribution, non-market activity and whether the decline hurts vulnerable groups most.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: GDP is useful for the level of activity but should be supplemented.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Injections enter, withdrawals leave the flow. (b) All changes reduce net spending → income falls. (c) GDP signals the fall but misses distributional and non-market effects.",
            commonErrors: [
              "Treating saving as an injection rather than a withdrawal.",
            ],
          },
        },
        {
          id: "econ-u4-cfq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'Withdrawals' (leakages) in the circular flow are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wages, rent, interest and profit" },
              { id: "b", text: "Investment, government spending and exports" },
              {
                id: "c",
                text: "Consumption, investment and government spending",
              },
              { id: "d", text: "Saving, taxes and imports" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Withdrawals",
                statement:
                  "Saving, taxes and imports leak out of the circular flow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Withdrawals are income that leaves the flow rather than being re-spent domestically.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Saving, taxes and imports",
            commonErrors: [
              "Confusing withdrawals (leaving) with injections (entering).",
            ],
          },
        },
        {
          id: "econ-u4-cfq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In the circular flow, the 'real flow' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Money payments for goods and services" },
              {
                id: "b",
                text: "The flow of goods, services and factor services between households and firms",
              },
              { id: "c", text: "International trade flows" },
              { id: "d", text: "Government tax revenue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real vs money flow",
                statement:
                  "Real flow = physical goods/services/factors; money flow = payments.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The real flow is the physical exchange of output for factor services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The flow of goods, services and factor services between households and firms",
            commonErrors: [
              "Confusing the real flow (physical) with the money flow (payments).",
            ],
          },
        },
        {
          id: "econ-u4-cfq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The largest component of aggregate demand in most developed economies is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Net exports (X − M)" },
              { id: "b", text: "Government spending (G)" },
              { id: "c", text: "Consumption (C)" },
              { id: "d", text: "Investment (I)" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD composition",
                statement:
                  "Consumption is typically the largest component of AD.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Households spend most of their income on consumption — the largest AD component.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Consumption (C)",
            commonErrors: [
              "Thinking investment is largest — it is the most volatile, not the largest.",
            ],
          },
        },
        {
          id: "econ-u4-cfq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The multiplier is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1 / MPC" },
              { id: "b", text: "MPC" },
              { id: "c", text: "1 − MPC" },
              { id: "d", text: "1 / (1 − MPC)" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Multiplier",
                statement: "Multiplier = 1 / (1 − MPC)",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each round of spending leaks via saving/taxes/imports — the multiplier captures total income change per injection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 1 / (1 − MPC)",
            commonErrors: [
              "Using MPC directly as the multiplier — the formula is 1/(1−MPC).",
            ],
          },
        },
        {
          id: "econ-u4-cfq9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "If withdrawals exceed injections in an economy, national income will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rise only if the multiplier is large" },
              { id: "b", text: "Rise" },
              { id: "c", text: "Fall" },
              { id: "d", text: "Remain unchanged" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Injections vs withdrawals",
                statement:
                  "Injections > withdrawals → income rises; withdrawals > injections → income falls.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Withdrawals leak spending out of the circular flow faster than injections add it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Net outflow reduces total spending and income — choice (b).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Fall",
            commonErrors: [
              "Reversing the relationship — more withdrawals than injections means contraction.",
            ],
          },
        },
        {
          id: "econ-u4-cfq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the multiplier effect works in the circular flow of income.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplier",
                statement:
                  "An initial injection raises income by more than the injection through repeated rounds of spending.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An injection (e.g. government spending) becomes income for households.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Households spend part of that income (MPC) on domestic goods — becoming firms' income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Firms pay it as factor incomes, households spend again — the process repeats.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each round leaks via saving/taxes/imports until the total income gain = injection × multiplier.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Injection → income → spending → income → ... amplified by MPC each round → total effect = injection × multiplier.",
            commonErrors: [
              "Ignoring the leakages — the multiplier works because each round leaks some income.",
            ],
          },
        },
        {
          id: "econ-u4-cfq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why GDP ignores non-market economic activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limitation",
                statement:
                  "GDP only counts market transactions with observable prices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GDP measures transactions where money changes hands — it needs a market price.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unpaid work (childcare, volunteering, DIY) and informal/barter activity have no market price.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These activities are valuable but invisible to GDP — understating true economic activity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GDP needs market prices — unpaid and informal activity is excluded despite its value.",
            commonErrors: [
              "Saying GDP measures 'everything' — it only measures market transactions.",
            ],
          },
        },
        {
          id: "econ-u4-cfq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "An economy experiences a fall in injections (lower investment and exports) while withdrawals (saving and taxes) stay constant.",
          parts: [
            {
              label: "a",
              prompt: "Explain the direct effect on national income.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how the multiplier amplifies this change.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether GDP will accurately reflect this contraction.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Injections and multiplier",
                statement:
                  "Falling injections with constant withdrawals → income falls, amplified by multiplier.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Lower I and X reduce total injections into the circular flow.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "With withdrawals unchanged, injections < withdrawals → national income falls.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The initial fall in spending reduces firms' income and output.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The income fall reduces consumption, which further reduces income — repeated rounds.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each round leaks via S, T, M — the multiplier determines total income loss.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Total effect = initial injection change × multiplier — larger than the initial change.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "GDP (expenditure approach) will capture the fall in C, I, G, X − M — so it signals the contraction.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: GDP is reliable for measuring the output fall but misses welfare/distribution effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Injections fall below withdrawals → income falls. (b) Multiplier amplifies via repeated spending rounds. (c) GDP captures the contraction but misses distributional effects.",
            commonErrors: [
              "Ignoring the multiplier — the income fall is larger than the initial injection change.",
            ],
          },
        },
        {
          id: "econ-u4-cfq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an economy, MPC = 0.8 and the government increases spending by $150 million. Calculate the multiplier and the total increase in national income.",
          response: {
            type: "numeric",
            parts: [
              { label: "Multiplier", answer: 5 },
              { label: "Income increase ($m)", answer: 750, unit: "$m" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Multiplier",
                statement: "Multiplier = 1 / (1 − MPC)",
              },
            ],
            steps: [
              {
                reasoning: "Multiplier = 1 / (1 − 0.8) = 1 / 0.2.",
                working: "1 / (1 - 0.8) = 1 / 0.2",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Multiplier = 5.", marks: 1, markCode: "A" },
              {
                reasoning: "Income increase = 150 × 5.",
                working: "150 x 5 = 750",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Income rises by $750 million.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Multiplier = 5; income +$750m",
            commonErrors: [
              "Using MPC (0.8) as the multiplier instead of 1/(1−MPC).",
            ],
          },
        },
        {
          id: "econ-u4-cfq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an economy, C = 300, I = 80, G = 100, X = 60, M = 50. Calculate GDP.",
          response: {
            type: "numeric",
            parts: [{ label: "GDP", answer: 490 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "GDP",
                statement: "GDP = C + I + G + (X − M)",
              },
            ],
            steps: [
              {
                reasoning: "X − M = 60 − 50 = 10.",
                working: "60 - 50 = 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "GDP = 300 + 80 + 100 + 10.",
                working: "300 + 80 + 100 + 10 = 490",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "GDP = 490.", marks: 1, markCode: "A" },
              { reasoning: "Answer correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GDP = 490",
            commonErrors: [
              "Adding M instead of subtracting — would give 590 instead of 490.",
            ],
          },
        },
        {
          id: "econ-u4-cfq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "In an economy, injections total $400bn and withdrawals total $450bn. Explain the effect on national income and calculate the net leakage if the multiplier is 3.",
          response: {
            type: "numeric",
            parts: [{ label: "Net withdrawal ($bn)", answer: -50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Injections vs withdrawals",
                statement:
                  "Withdrawals > injections → income falls; net leakage = W − I.",
              },
              {
                kind: "formula",
                name: "Multiplier",
                statement: "Total income change = net injection × multiplier",
              },
            ],
            steps: [
              {
                reasoning:
                  "Net position = injections − withdrawals = 400 − 450 = −50.",
                working: "400 - 450 = -50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Withdrawals exceed injections by $50bn → income falls.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "With multiplier 3, total income falls by approximately 3 × 50 = $150bn.",
                working: "50 x 3 = 150",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer correct.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "The multiplier amplifies the net leakage into a larger income contraction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Net withdrawal = −$50bn (income falls ~$150bn with multiplier 3)",
            commonErrors: [
              "Ignoring the multiplier — the income effect is larger than the raw net leakage.",
            ],
          },
        },
        {
          id: "econ-u4-cfq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A country's GDP grows by 3% but surveys show rising poverty and falling life satisfaction.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain why GDP growth might not translate into improved wellbeing.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Evaluate whether GDP is a reliable measure of economic welfare.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limitations",
                statement:
                  "GDP measures output, not wellbeing — ignores distribution, environment, non-market activity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GDP growth may be concentrated among the wealthy — average hides inequality.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Growth may come with environmental degradation or longer working hours.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Non-market activities (family care, community) may decline as market activity grows.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "GDP ignores income distribution, health, education and leisure — key welfare dimensions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "GDP is useful for measuring output and income but a poor proxy for welfare.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Alternative measures (HDI, GPI, happiness indices) capture broader wellbeing.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "But they are harder to measure and less comparable internationally.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Reasoned judgement: use GDP for output but supplement with welfare indicators for living standards.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) GDP ignores distribution, environment, non-market activity. (b) Useful for output but poor welfare measure — supplement with HDI etc.",
            commonErrors: [
              "Assuming GDP growth always means better living standards.",
            ],
          },
        },
      ],
    },
    {
      id: "econ-u4-ad-as-model",
      title: "AD, AS and economic fluctuations",
      skill:
        "Use the AD/AS model to analyse growth and fluctuations, explain the multiplier, and evaluate output gaps.",
      lesson: {
        sections: [
          {
            heading: "The AD/AS model",
            body: "The **AD/AS model** shows how total demand and total supply determine the equilibrium **price level** and **real output**. The **AD curve** slopes downward: at higher prices, consumption, investment and net exports fall. The **SRAS curve** slopes upward: at higher prices, firms expand output. Their intersection sets short-run equilibrium. The **LRAS curve** is vertical at full-employment output.",
          },
          {
            heading: "Determinants and shifts",
            body: "**AD shifts** with changes in consumption, investment, government spending and net exports — e.g. a tax cut or interest rate fall raises AD (shift right). **SRAS shifts** with input costs: higher wages or oil prices shift it left (stagflation). **LRAS shifts** with productive capacity: education, technology and capital accumulation shift it right — economic growth.",
          },
          {
            heading: "Growth, fluctuations and output gaps",
            body: "If AD rises faster than LRAS, the economy overheats — inflation rises. If AD falls below potential output, a **recessionary output gap** opens — unemployment rises. A **positive output gap** occurs when demand exceeds capacity — inflationary pressure. The **multiplier** means an initial spending change has amplified effects through successive rounds of income and consumption. Policymakers use fiscal and monetary policy to manage AD around potential output.",
          },
        ],
        keyFormulas: [
          { name: "AD equation", statement: "$AD = C + I + G + (X - M)$" },
          {
            name: "Equilibrium",
            statement:
              "AD = SRAS determines price level and output; LRAS sets capacity",
          },
          {
            name: "Output gap",
            statement: "Gap = actual output − potential output",
          },
        ],
        workedExample: {
          problem:
            "Potential output is $500bn but actual output is $460bn. What is the output gap and what does it indicate?",
          solution:
            "Output gap = 460 − 500 = −$40bn. A negative gap means the economy is producing below capacity — a recessionary gap with spare capacity and likely unemployment.",
        },
      },
      questions: [
        {
          id: "econ-u4-afq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A rise in consumer confidence will most likely cause:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A leftward shift of the LRAS curve" },
              { id: "b", text: "A rightward shift of the AD curve" },
              { id: "c", text: "A rightward shift of the SRAS curve" },
              { id: "d", text: "A leftward shift of the AD curve" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD determinants",
                statement:
                  "Higher consumer confidence raises consumption, shifting AD right.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Confidence increases consumption spending, a component of AD.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher AD shifts the AD curve rightward — choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A rightward shift of the AD curve",
            commonErrors: ["Confusing a demand shift with a supply shift."],
          },
        },
        {
          id: "econ-u4-afq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between short-run aggregate supply (SRAS) and long-run aggregate supply (LRAS).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SRAS vs LRAS",
                statement:
                  "SRAS slopes up with sticky input prices; LRAS is vertical at full-employment output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SRAS shows output supplied at each price level in the short run when wages and input prices adjust slowly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "LRAS represents the economy's productive capacity — output when all resources are fully employed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only LRAS shifts with changes in productive capacity (technology, capital, labour); SRAS also responds to input costs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "SRAS = short-run, price-responsive supply; LRAS = full productive capacity.",
            commonErrors: ["Saying SRAS is horizontal or LRAS slopes upward."],
          },
        },
        {
          id: "econ-u4-afq3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "An economy's potential output is $800bn. Actual output is $760bn and the price level is stable.",
          response: {
            type: "numeric",
            parts: [{ label: "Output gap ($bn)", answer: -40, unit: "$bn" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Output gap",
                statement: "Gap = actual output − potential output",
              },
            ],
            steps: [
              {
                reasoning: "Output gap = actual − potential = 760 − 800.",
                working: "760 - 800",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A negative result means output is below capacity.",
                working: "-40",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This is a recessionary gap — spare capacity exists.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stable prices confirm demand is below capacity, not overheating.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Output gap = −$40bn (recessionary gap)",
            commonErrors: [
              "Reporting +40 instead of −40 — gap is actual minus potential.",
            ],
          },
        },
        {
          id: "econ-u4-afq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A country's economy is growing steadily but unemployment remains high and inflation is rising slowly.",
          parts: [
            {
              label: "a",
              prompt: "Explain two determinants of aggregate demand.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how a leftward shift of SRAS would affect output and the price level.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether demand-side or supply-side policies are more appropriate to raise employment without worsening inflation.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AD determinants",
                statement:
                  "C, I, G and (X − M) each respond to income, interest rates, confidence and policy.",
              },
              {
                kind: "principle",
                name: "SRAS shift",
                statement:
                  "Leftward SRAS = higher costs → lower output, higher prices (stagflation).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any two: consumption (income, confidence, interest rates), investment (expectations, rates), government spending, net exports (exchange rates).",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "A leftward SRAS shift means firms supply less at every price level.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Equilibrium output falls and the price level rises — stagflation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Unemployment likely rises as output contracts.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Demand-side stimulus would raise AD and output but worsen already-rising inflation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Supply-side policies (education, competition, deregulation) raise capacity and cut costs — better for jobs without inflation.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: supply-side policies are preferable in this scenario; demand stimulus risks stagflation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Any two AD determinants. (b) Lower output, higher prices, more unemployment. (c) Supply-side better — demand stimulus would worsen inflation.",
            commonErrors: [
              "Recommending demand stimulus without recognising the inflationary risk.",
            ],
          },
        },
        {
          id: "econ-u4-afq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The AD curve slopes downward because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wages always fall when prices rise" },
              { id: "b", text: "Government spending decreases as prices rise" },
              {
                id: "c",
                text: "At higher prices, consumption, investment and net exports fall",
              },
              {
                id: "d",
                text: "Higher prices increase the quantity of goods supplied",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD curve",
                statement:
                  "Higher price level reduces real purchasing power → C, I, X−M fall → AD slopes down.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A higher price level erodes real incomes and makes exports less competitive — reducing AD components.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** At higher prices, consumption, investment and net exports fall",
            commonErrors: [
              "Confusing the downward-sloping AD with the upward-sloping SRAS.",
            ],
          },
        },
        {
          id: "econ-u4-afq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A sharp rise in oil prices will most likely shift which curve and in which direction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "SRAS left" },
              { id: "b", text: "LRAS right" },
              { id: "c", text: "AD right" },
              { id: "d", text: "AD left" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SRAS determinants",
                statement:
                  "Higher input costs (oil) shift SRAS left → higher prices, lower output.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Oil is a key input — higher prices raise production costs, shifting SRAS left.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** SRAS left",
            commonErrors: [
              "Confusing a supply-side cost shock with a demand shift.",
            ],
          },
        },
        {
          id: "econ-u4-afq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The LRAS curve shifts to the right when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Interest rates fall" },
              { id: "b", text: "Consumer confidence rises" },
              { id: "c", text: "The price level falls" },
              {
                id: "d",
                text: "Productive capacity increases (e.g. technology, education)",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LRAS determinants",
                statement:
                  "LRAS shifts right with increased productive capacity — technology, capital, labour quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "LRAS represents productive capacity — only improvements in resources/technology shift it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Productive capacity increases (e.g. technology, education)",
            commonErrors: [
              "Confusing demand-side changes (AD shifts) with capacity changes (LRAS shifts).",
            ],
          },
        },
        {
          id: "econ-u4-afq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A positive output gap (actual output > potential output) is most likely to cause:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inflationary pressure" },
              { id: "b", text: "Rising unemployment" },
              { id: "c", text: "Deflation" },
              { id: "d", text: "A recession" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Output gap",
                statement:
                  "Positive gap = demand exceeds capacity → inflationary pressure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When AD exceeds productive capacity, firms raise prices — overheating.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Inflationary pressure",
            commonErrors: [
              "Confusing positive (inflationary) and negative (recessionary) output gaps.",
            ],
          },
        },
        {
          id: "econ-u4-afq9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "An increase in government spending will, in the short run, most likely cause:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower output and lower prices" },
              { id: "b", text: "No change in output or prices" },
              { id: "c", text: "Higher output and higher prices" },
              { id: "d", text: "Higher output and lower prices" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD shift",
                statement:
                  "Higher G raises AD → AD shifts right → higher output and price level (short run).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Government spending is a component of AD — increasing it shifts AD right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rightward AD shift raises both output and the price level in the short run — choice (b).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Higher output and higher prices",
            commonErrors: [
              "Forgetting that AD shifts affect both output AND the price level.",
            ],
          },
        },
        {
          id: "econ-u4-afq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain three determinants of aggregate demand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AD determinants",
                statement:
                  "AD = C + I + G + (X − M) — each component responds to income, rates, confidence, policy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Consumption (C): disposable income, interest rates, confidence, wealth.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Investment (I): interest rates, business confidence, expected demand, technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Government spending (G) and net exports (X − M): fiscal policy, exchange rates, relative incomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Changes in any component shift the AD curve.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "C (income, rates, confidence), I (expectations, rates), G (policy), X−M (exchange rates, incomes).",
            commonErrors: [
              "Listing components without explaining what drives them.",
            ],
          },
        },
        {
          id: "econ-u4-afq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how the multiplier effect amplifies a change in aggregate demand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multiplier",
                statement:
                  "An initial AD change raises income by more than the change through repeated spending rounds.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An initial injection (e.g. higher G) becomes income for households.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Households spend MPC of that income — becoming firms' income again.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The process repeats with shrinking amounts — total AD effect exceeds the initial change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Injection → income → consumption → income → ... → total effect = initial change × multiplier.",
            commonErrors: [
              "Ignoring leakages — the multiplier works because each round leaks some income.",
            ],
          },
        },
        {
          id: "econ-u4-afq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of demand-side versus supply-side policies to increase economic growth.",
          parts: [
            {
              label: "a",
              prompt: "Explain how demand-side policies affect AD and output.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how supply-side policies affect LRAS and output.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate which is more sustainable for long-run growth.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand vs supply growth",
                statement:
                  "Demand-side raises AD (short-run output); supply-side raises LRAS (long-run capacity).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Fiscal/monetary stimulus raises AD → higher output and possibly inflation in the short run.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "But if AD exceeds LRAS, inflation results — demand growth is limited by capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Demand-side policies cannot raise output beyond productive capacity sustainably.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Education, infrastructure, deregulation and competition raise productive capacity → LRAS shifts right.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This increases potential output — sustainable long-run growth without inflation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Supply-side policies are slower but address the economy's productive limits.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Long-run growth requires LRAS growth — supply-side policies are essential.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: supply-side is more sustainable; demand-side helps close output gaps but can't expand capacity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Demand-side → AD up, limited by capacity. (b) Supply-side → LRAS up, sustainable. (c) Supply-side essential for long-run growth.",
            commonErrors: [
              "Thinking demand stimulus alone creates sustainable growth — capacity limits bind.",
            ],
          },
        },
        {
          id: "econ-u4-afq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Potential output is $900bn and actual output is $870bn. Calculate the output gap and state whether it is recessionary or inflationary.",
          response: {
            type: "numeric",
            parts: [{ label: "Output gap ($bn)", answer: -30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Output gap",
                statement: "Gap = actual output − potential output",
              },
            ],
            steps: [
              {
                reasoning: "Gap = 870 − 900 = −30.",
                working: "870 - 900 = -30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Negative gap = output below capacity.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This is a recessionary gap — spare capacity and likely unemployment.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Output gap = −$30bn (recessionary)",
            commonErrors: [
              "Reversing the sign — gap is actual minus potential.",
            ],
          },
        },
        {
          id: "econ-u4-afq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an economy, C = 200, I = 60, G = 80, X = 40, M = 30. Calculate AD. Then government spending rises by 20 with no other changes — calculate the new AD.",
          response: {
            type: "numeric",
            parts: [
              { label: "Initial AD", answer: 350 },
              { label: "New AD", answer: 370 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AD",
                statement: "AD = C + I + G + (X − M)",
              },
            ],
            steps: [
              {
                reasoning: "Initial AD = 200 + 60 + 80 + (40 − 30) = 350.",
                working: "200 + 60 + 80 + 10 = 350",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New G = 80 + 20 = 100.",
                working: "80 + 20 = 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New AD = 200 + 60 + 100 + 10 = 370.",
                working: "200 + 60 + 100 + 10 = 370",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Both answers correct — AD rises by 20 (before multiplier).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Initial AD = 350; new AD = 370",
            commonErrors: ["Forgetting to update G before recalculating AD."],
          },
        },
        {
          id: "econ-u4-afq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Potential output is $1,000bn. Actual output is $1,050bn and the price level is rising. Calculate the output gap and explain what it indicates.",
          response: {
            type: "numeric",
            parts: [{ label: "Output gap ($bn)", answer: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Output gap",
                statement: "Gap = actual output − potential output",
              },
            ],
            steps: [
              {
                reasoning: "Gap = 1050 − 1000 = +50.",
                working: "1050 - 1000 = 50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive gap = output above capacity.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "This is an inflationary gap — demand exceeds productive capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rising prices confirm the overheating — answer correct.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The economy cannot sustain output above potential without inflation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Output gap = +$50bn (inflationary gap)",
            commonErrors: [
              "Reporting −50 — positive gap means actual exceeds potential.",
            ],
          },
        },
        {
          id: "econ-u4-afq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A country's economy is stuck below potential output with persistent unemployment, but inflation is also above target.",
          parts: [
            {
              label: "a",
              prompt: "Explain what this combination suggests about AD and AS.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how a leftward SRAS shift could produce this outcome.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether demand-side or supply-side policies are more appropriate.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stagflation",
                statement:
                  "Below-potential output + above-target inflation = stagflation — supply-side problem.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Output below potential with high inflation suggests stagflation — not a simple demand shortfall.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "AD may be adequate or even excessive while AS has shifted adversely.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The problem is on the supply side — costs have risen reducing productive capacity.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Leftward SRAS shift (higher input costs) reduces output at every price level.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "New equilibrium: lower output (unemployment rises) and higher price level (inflation rises).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "This is the classic stagflation outcome — both problems worsen together.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Demand stimulus would worsen inflation; supply-side policies address root causes.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: supply-side policies (productivity, flexibility) are appropriate; demand restraint alone can't fix supply problems.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Stagflation — supply-side problem. (b) SRAS left → lower output + higher prices. (c) Supply-side policies appropriate.",
            commonErrors: [
              "Recommending demand stimulus — it would worsen already-high inflation.",
            ],
          },
        },
      ],
    },
  ],
};
