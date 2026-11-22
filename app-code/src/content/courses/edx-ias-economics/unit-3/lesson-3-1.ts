import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "eias-econ-u3-lesson-3-1",
  code: "3-1",
  title: "Economic Growth and Development",
  goal: "I CAN explain economic growth, its measurement and its costs.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 3 — Macroeconomic Performance"],
  vocabulary: [
    { term: "Economic growth", definition: "Increase in real GDP over time." },
    {
      term: "Real GDP",
      definition: "GDP adjusted for inflation — constant prices.",
    },
    {
      term: "Nominal GDP",
      definition: "GDP at current prices — includes inflation.",
    },
    {
      term: "Sustainable growth",
      definition: "Growth that doesn't compromise future resources.",
    },
    {
      term: "Business cycle",
      definition: "Fluctuations between boom and recession.",
    },
    {
      term: "Potential GDP",
      definition: "Maximum sustainable output at full employment.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u3-growth",
      title: "Measuring and Explaining Growth",
      skill: "Calculate and interpret GDP growth.",
      lesson: {
        sections: [
          {
            heading: "GDP and growth",
            body: "**GDP**: total value of output in economy. **Real GDP** adjusts for inflation — measures actual output change. **Growth rate** = % change in real GDP year-on-year.\n\n**Causes of growth**: increased labour, capital investment, technology, productivity improvements, natural resources. **Sources**: AD growth (demand-side) or LRAS growth (supply-side).",
          },
          {
            heading: "Business cycle",
            body: "**Boom**: high growth, low unemployment, rising prices. **Recession**: two consecutive quarters of negative growth. **Recovery**: growth resumes. **Peak/trough**: cycle turning points.\n\n**Sustainable growth**: growth within productive capacity — avoids inflation. **Unsustainable**: demand grows faster than supply → inflation.",
          },
        ],
        keyFormulas: [
          {
            name: "Growth rate",
            statement:
              "(Current real GDP − previous real GDP) ÷ previous × 100.",
          },
        ],
        workedExample: {
          problem: "Real GDP £500bn → £520bn. Growth rate?",
          solution: "(520−500) ÷ 500 × 100 = 4%.",
        },
      },
      questions: [
        {
          id: "eias-econ-u3-gr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is real GDP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total spending" },
              { id: "b", text: "GDP at current prices" },
              { id: "c", text: "GDP per person" },
              { id: "d", text: "GDP adjusted for inflation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real GDP",
                statement: "Constant prices.",
              },
            ],
            steps: [
              {
                reasoning: "Real = inflation-adjusted.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Inflation-adjusted",
            commonErrors: ["Nominal confused."],
          },
        },
        {
          id: "eias-econ-u3-gr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of economic growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth causes",
                statement: "Factors of production.",
              },
            ],
            steps: [
              {
                reasoning: "Increased capital investment — more machinery.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technological progress — productivity gains.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "More labour or better skills — workforce growth.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Capital, technology, labour.",
            commonErrors: ["Only one.", "Inflation."],
          },
        },
        {
          id: "eias-econ-u3-gr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between sustainable and unsustainable growth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Growth types",
                statement: "Capacity vs demand.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sustainable: growth within productive capacity — supply keeps pace.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Unsustainable: demand outstrips supply — inflation rises.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Unsustainable growth overheats economy — asset bubbles, inflation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Sustainable growth lasts longer — no boom-bust cycle.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Sustainable=supply-led; unsustainable=demand-led.",
            commonErrors: ["Same thing.", "No distinction."],
          },
        },
        {
          id: "eias-econ-u3-gr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Real GDP grew 5% but inflation hit 8%.",
          parts: [
            { label: "a", prompt: "Is this growth sustainable?", marks: 3 },
            { label: "b", prompt: "Explain the risk.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Growth sustainability",
                statement: "Demand vs supply.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Probably unsustainable — inflation 8% suggests demand overheating.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Nominal growth 5% but prices rose 8% — real output may fall.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Inflation erodes purchasing power — living standards fall.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Central bank may raise rates — slowing economy sharply.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Asset bubbles — house prices unsustainable.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) unsustainable (b) inflation+bubble risk",
            commonErrors: ["Sustainable.", "No risk."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u3-unemployment",
      title: "Unemployment",
      skill: "Explain unemployment types, causes and consequences.",
      lesson: {
        sections: [
          {
            heading: "Unemployment types",
            body: "**Frictional**: between jobs — search time. **Structural**: skills mismatch — industry decline. **Cyclical**: recession — demand falls. **Seasonal**: weather/tourism patterns. **Classical**: wages too high — labour market rigidities.\n\n**Natural rate**: frictional + structural — unavoidable. **Actual rate**: includes cyclical — varies with economy.",
          },
          {
            heading: "Consequences",
            body: "**Individual**: lost income, skills decay, health effects. **Social**: poverty, crime, inequality. **Economic**: wasted resources, lower output, higher benefit costs.\n\n**Okun's law**: ~2% GDP growth needed to keep unemployment stable — faster growth reduces unemployment.",
          },
        ],
        keyFormulas: [
          {
            name: "Unemployment rate",
            statement: "Unemployed ÷ labour force × 100.",
          },
        ],
        workedExample: {
          problem: "Unemployed 2m, labour force 30m. Rate?",
          solution: "2 ÷ 30 × 100 = 6.7%.",
        },
      },
      questions: [
        {
          id: "eias-econ-u3-un-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is structural unemployment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Between jobs" },
              { id: "b", text: "Seasonal" },
              { id: "c", text: "Recession" },
              { id: "d", text: "Skills mismatch with job vacancies" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural",
                statement: "Skills mismatch.",
              },
            ],
            steps: [
              {
                reasoning: "Structural = mismatch of skills/jobs.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Skills mismatch",
            commonErrors: ["Frictional confused."],
          },
        },
        {
          id: "eias-econ-u3-un-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two consequences of high unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unemployment costs",
                statement: "Individual + economic.",
              },
            ],
            steps: [
              {
                reasoning: "Lost output — economy produces less.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Government costs — higher benefit payments.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social costs — poverty, crime, health issues.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Output loss, benefit costs, social harm.",
            commonErrors: ["Only one.", "Positive."],
          },
        },
        {
          id: "eias-econ-u3-un-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why frictional unemployment can be beneficial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Frictional unemployment",
                statement: "Job matching.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Workers search for better-matched jobs — improves allocation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Firms find better-suited employees — productivity rises.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Short-term — workers move between jobs voluntarily.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Some frictional unemployment is natural and healthy.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Better job matching → efficiency gains.",
            commonErrors: ["Always bad.", "Cyclical."],
          },
        },
        {
          id: "eias-econ-u3-un-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A region's main industry closes, causing mass unemployment.",
          parts: [
            { label: "a", prompt: "Identify the unemployment type.", marks: 3 },
            { label: "b", prompt: "Suggest two policies to help.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural unemployment",
                statement: "Retraining needed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Structural — industry decline, skills no longer needed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Workers' skills don't match new job opportunities.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Retraining programmes — teach new skills for growing sectors.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Attract new industries — incentives, infrastructure investment.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Relocation support — help workers move to job-rich areas.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) structural (b) retrain+attract+relocate",
            commonErrors: ["Cyclical.", "No policy."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u3-inflation",
      title: "Inflation",
      skill: "Distinguish inflation types and explain causes and effects.",
      lesson: {
        sections: [
          {
            heading: "Inflation types",
            body: "**Demand-pull**: AD exceeds LRAS — too much demand chasing goods. **Cost-push**: costs rise (wages, imports, oil) — firms pass on. **Built-in**: wage-price spiral — higher wages → higher prices → higher wage demands.\n\n**CPI**: consumer price index — basket of goods price change. **Inflation rate** = % change in CPI.",
          },
          {
            heading: "Effects",
            body: "**Menu costs**: changing prices frequently. **Shoe-leather costs**: reducing cash holdings. **Uncertainty**: discourages investment. **Redistribution**: borrowers gain (repay cheaper), savers lose, fixed-income earners lose.\n\n**Hyperinflation**: extreme inflation — money loses value rapidly (Weimar 1923, Zimbabwe 2008).",
          },
        ],
        keyFormulas: [
          {
            name: "Inflation rate",
            statement: "(Current CPI − previous CPI) ÷ previous CPI × 100.",
          },
        ],
        workedExample: {
          problem: "CPI rises from 100 to 103. Inflation?",
          solution: "3%.",
        },
      },
      questions: [
        {
          id: "eias-econ-u3-inf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What causes demand-pull inflation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wage cuts" },
              { id: "b", text: "Recession" },
              { id: "c", text: "Rising costs" },
              { id: "d", text: "Excess aggregate demand" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demand-pull",
                statement: "AD > LRAS.",
              },
            ],
            steps: [
              {
                reasoning: "Demand-pull = too much demand.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Excess AD",
            commonErrors: ["Cost-push confused."],
          },
        },
        {
          id: "eias-econ-u3-inf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two costs of inflation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation costs",
                statement: "Efficiency + uncertainty.",
              },
            ],
            steps: [
              {
                reasoning: "Menu costs — firms must change prices frequently.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Uncertainty — discourages investment and planning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Redistribution — savers lose, borrowers gain.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Menu costs, uncertainty, redistribution.",
            commonErrors: ["Only one.", "Positive."],
          },
        },
        {
          id: "eias-econ-u3-inf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how cost-push inflation can be self-perpetuating.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wage-price spiral",
                statement: "Feedback loop.",
              },
            ],
            steps: [
              {
                reasoning: "Initial cost shock — oil, wages, imports rise.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Firms raise prices to cover costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Workers demand higher wages to maintain living standards.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Higher wages → higher costs → higher prices → spiral continues.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Costs→prices→wages→costs spiral.",
            commonErrors: ["Demand-pull.", "No feedback."],
          },
        },
        {
          id: "eias-econ-u3-inf-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Inflation is 10% and rising. Government must act.",
          parts: [
            { label: "a", prompt: "Identify likely inflation type.", marks: 3 },
            {
              label: "b",
              prompt: "Suggest two policies to reduce it.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inflation control",
                statement: "AD or costs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Likely demand-pull — AD exceeds capacity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Or cost-push — imported inflation, wage pressures.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Tight monetary policy — raise interest rates, reduce AD.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Fiscal contraction — cut government spending, raise taxes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Supply-side policies — increase LRAS capacity.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) demand/cost-push (b) monetary+fiscal+supply",
            commonErrors: ["No type.", "No policy."],
          },
        },
      ],
    },
  ],
};
