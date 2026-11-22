import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "econ-u4-lesson-4-1",
  code: "4-1",
  title: "National Income Accounting",
  goal: "I CAN distinguish GDP, GNP and NDP, calculate aggregate demand from its components, and evaluate the limitations of national income measures.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    {
      term: "GDP",
      definition:
        "Gross Domestic Product — total value of final goods and services produced within a country's borders in a period.",
    },
    {
      term: "GNP",
      definition:
        "Gross National Product — total output produced by a country's residents, regardless of location.",
    },
    {
      term: "NDP",
      definition:
        "Net Domestic Product — GDP minus depreciation of capital stock.",
    },
    {
      term: "Aggregate demand (AD)",
      definition:
        "Total planned spending on domestically produced goods and services: AD = C + I + G + (X − M).",
    },
    {
      term: "Depreciation",
      definition:
        "Wear and tear on capital goods; the portion of investment needed just to maintain the capital stock.",
    },
    {
      term: "Nominal vs real GDP",
      definition:
        "Nominal GDP uses current prices; real GDP adjusts for inflation to measure actual output.",
    },
  ],
  concepts: [
    {
      id: "econ-u4-gdp-measures",
      title: "GDP, GNP and National Income",
      skill:
        "Distinguish GDP, GNP and NDP and explain what each measures and its limitations.",
      lesson: {
        sections: [
          {
            heading: "GDP and its variants",
            body: "**GDP** measures output produced *within* a country's borders — includes foreign firms' output there, excludes citizens' output abroad. **GNP** measures output produced by a country's *residents* — includes citizens abroad, excludes foreigners at home. **NDP** = GDP − **depreciation** (capital consumption), showing output net of wear and tear. **Nominal GDP** uses current prices; **real GDP** adjusts for inflation to measure actual volume of output.",
          },
          {
            heading: "Methods of measurement",
            body: "GDP can be measured three ways, which should give the same answer: the **expenditure approach** (sum of C + I + G + X − M), the **income approach** (sum of factor incomes: wages, rent, interest, profit + indirect taxes − subsidies), and the **output approach** (sum of value added at each stage of production).",
          },
          {
            heading: "Limitations of GDP",
            body: "GDP counts only market transactions — excludes unpaid work, the informal economy, leisure and environmental costs. It ignores income distribution and doesn't measure wellbeing. Two countries with equal GDP can have very different living standards. Alternatives like the **HDI** combine income with health and education.",
          },
        ],
        keyFormulas: [
          {
            name: "GDP vs GNP",
            statement: "GDP = output within borders; GNP = output by residents",
          },
          { name: "NDP", statement: "NDP = GDP − depreciation" },
          {
            name: "Three approaches",
            statement: "Expenditure = Income = Output",
          },
        ],
        workedExample: {
          problem:
            "A country has GDP of $500bn and depreciation is $50bn. What is NDP?",
          solution: "NDP = GDP − depreciation = $500bn − $50bn = $450bn.",
        },
      },
      questions: [
        {
          id: "econ-u4-l41c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "GDP measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "National income after tax" },
              { id: "b", text: "Total government spending" },
              {
                id: "c",
                text: "Output produced by a country's citizens anywhere",
              },
              { id: "d", text: "Output produced within a country's borders" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP",
                statement:
                  "Total value of final output produced within a country's borders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GDP is territory-based — output within borders regardless of who produces it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Output produced within a country's borders",
            commonErrors: ["Confusing GDP (territory) with GNP (residency)."],
          },
        },
        {
          id: "econ-u4-l41c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the difference between nominal GDP and real GDP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nominal vs real GDP",
                statement:
                  "Nominal uses current prices; real adjusts for inflation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nominal GDP values output at current market prices — includes price changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Real GDP adjusts for inflation using a price index, showing actual output volume.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Real GDP is the better measure of economic growth and living standards.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Nominal = current prices; real = inflation-adjusted output volume.",
            commonErrors: [
              "Saying nominal GDP is 'better' — real GDP is preferred for growth analysis.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country's GDP is $800bn, depreciation is $80bn, and net income from abroad is $20bn. Calculate GNP and NDP.",
          response: {
            type: "numeric",
            parts: [
              { label: "GNP ($bn)", answer: 820 },
              { label: "NDP ($bn)", answer: 720 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "GNP",
                statement: "GNP = GDP + net income from abroad",
              },
              {
                kind: "formula",
                name: "NDP",
                statement: "NDP = GDP − depreciation",
              },
            ],
            steps: [
              {
                reasoning: "GNP = GDP + net income from abroad = 800 + 20.",
                working: "GNP = 800 + 20 = 820",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "GNP answer correct.", marks: 1, markCode: "A" },
              {
                reasoning: "NDP = GDP − depreciation = 800 − 80.",
                working: "NDP = 800 - 80 = 720",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "NDP answer correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GNP = $820bn; NDP = $720bn",
            commonErrors: [
              "Subtracting net income from abroad instead of adding it.",
              "Using GNP instead of GDP for NDP calculation.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate GDP as a measure of economic performance and living standards.",
          parts: [
            { label: "a", prompt: "Explain what GDP measures.", marks: 2 },
            {
              label: "b",
              prompt:
                "Explain two limitations of GDP as a measure of wellbeing.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether alternative measures are better than GDP.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP",
                statement:
                  "Total value of final goods and services produced within a country.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "GDP measures total market output within a country's borders in a period.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It can be measured by expenditure, income or output approaches.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Ignores non-market activity (unpaid work, informal economy) and income distribution.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Doesn't account for environmental costs or leisure — a country can grow GDP while degrading welfare.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Equal GDP per capita can hide very different living standards.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Alternatives like HDI, GPI or happiness indices capture broader wellbeing.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But they are harder to measure, less comparable internationally, and GDP remains useful for output/income analysis.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: use GDP alongside complementary measures rather than replacing it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Total market output within borders. (b) Ignores distribution, environment, non-market activity. (c) Complementary measures better for wellbeing; GDP still useful for output.",
            commonErrors: [
              "Claiming GDP measures everything about living standards — it only measures output.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Net Domestic Product (NDP) is calculated as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "GDP minus depreciation" },
              { id: "b", text: "GDP plus depreciation" },
              { id: "c", text: "GDP minus net income from abroad" },
              { id: "d", text: "GDP plus indirect taxes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "NDP",
                statement: "NDP = GDP − depreciation",
              },
            ],
            steps: [
              {
                reasoning:
                  "Depreciation is the wear and tear on capital that must be replaced just to maintain output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** GDP minus depreciation",
            commonErrors: ["Adding depreciation instead of subtracting it."],
          },
        },
        {
          id: "econ-u4-l41c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A statistician calculates GDP by summing wages, rent, interest, profit, indirect taxes minus subsidies, and depreciation. Which approach is being used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The balance of payments approach" },
              { id: "b", text: "The expenditure approach" },
              { id: "c", text: "The income approach" },
              { id: "d", text: "The output (value added) approach" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Income approach",
                statement:
                  "GDP measured by summing all factor incomes plus indirect taxes minus subsidies and depreciation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wages, rent, interest and profit are payments to the factors of production — factor incomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adding indirect taxes, subtracting subsidies and depreciation converts factor incomes into GDP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore choice (c), the income approach, is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** The income approach",
            commonErrors: [
              "Confusing factor incomes with components of expenditure.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "GNP differs from GDP in that GNP measures:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Total government spending on goods and services",
              },
              {
                id: "b",
                text: "Output produced by a country's residents, wherever they are located",
              },
              { id: "c", text: "Output produced within a country's borders" },
              { id: "d", text: "Output after subtracting depreciation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GNP",
                statement:
                  "GNP = output produced by a country's residents, regardless of location.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GNP uses residency rather than territory as the basis of measurement.",
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
              "**(b)** Output produced by a country's residents, wherever located",
            commonErrors: ["Reversing the GDP/GNP distinction."],
          },
        },
        {
          id: "econ-u4-l41c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following would NOT be included in a country's GDP?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Unpaid childcare provided by a parent at home",
              },
              { id: "b", text: "A haircut purchased at a local salon" },
              { id: "c", text: "Government spending on road construction" },
              { id: "d", text: "A car manufactured in the country for export" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limitations",
                statement:
                  "GDP only counts market transactions — non-market activity is excluded.",
              },
            ],
            steps: [
              {
                reasoning:
                  "GDP measures market transactions; unpaid household services have no market price.",
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
              "**(b)** Unpaid childcare provided by a parent at home",
            commonErrors: [
              "Forgetting that GDP counts output, not just income.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Nominal GDP rose by 8% in a year while the general price level rose by 5%. What happened to real GDP?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It rose by less than the 8% nominal rise" },
              { id: "b", text: "It fell by approximately 3%" },
              { id: "c", text: "It rose by exactly 8%" },
              { id: "d", text: "It was unchanged" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real GDP",
                statement:
                  "Real GDP adjusts nominal GDP for inflation to measure actual output volume.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Part of the nominal rise reflects higher prices, not more output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Real GDP growth ≈ nominal growth − inflation ≈ 8% − 5% ≈ 3%, so it rose but by less than nominal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** It rose by less than the 8% nominal rise",
            commonErrors: [
              "Forgetting to strip out inflation when comparing nominal and real growth.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain the three approaches used to measure GDP.",
          parts: [
            {
              label: "a",
              prompt: "Name and describe the expenditure approach.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Name and describe the income approach.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Name and describe the output (value added) approach.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Three approaches",
                statement:
                  "Expenditure = Income = Output — three ways to measure the same GDP.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sums total spending on final output: C + I + G + (X − M).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Measures GDP from the demand side.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Sums all factor incomes (wages, rent, interest, profit) plus indirect taxes minus subsidies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Measures GDP from the income generated in production.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Sums the value added at each stage of production to avoid double counting.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Measures GDP from the production side.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Sum of spending C + I + G + (X − M). (b) Sum of factor incomes plus adjustments. (c) Sum of value added at each production stage.",
            commonErrors: [
              "Adding value at every stage of production rather than only value added.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why GDP per capita is generally considered a better measure of average living standards than total GDP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP per capita",
                statement:
                  "GDP divided by population shows average output/income per person.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total GDP rises with population size — a large poor country can have higher GDP than a small rich one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "GDP per capita adjusts for population, allowing meaningful comparisons between countries.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It approximates average income available to each resident.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But it still ignores distribution — average income may not reflect the typical person's living standard.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Per capita adjusts for population, enabling comparison; but it still hides inequality.",
            commonErrors: [
              "Claiming GDP per capita fully measures living standards — it ignores distribution and non-market activity.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the Human Development Index (HDI) as an alternative to GDP for measuring development.",
          parts: [
            { label: "a", prompt: "Explain what the HDI measures.", marks: 2 },
            {
              label: "b",
              prompt:
                "Explain two ways in which HDI improves on GDP as a welfare measure.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether HDI should replace GDP as the main measure of development.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDI",
                statement:
                  "A composite index combining income per capita, life expectancy and education.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "HDI combines three dimensions: health (life expectancy), education and income (GNI per capita).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It produces a single index between 0 and 1 ranking countries by human development.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Captures health and education outcomes, not just income.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Better reflects wellbeing rather than only market output.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Reduces the misleading impression that high GDP alone means high development.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "HDI is better for welfare but loses information by compressing three dimensions into one number.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Its components are harder to measure and update annually than GDP.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: HDI complements rather than replaces GDP — use both for a fuller picture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Income + health + education composite. (b) Captures broader wellbeing. (c) Complementary measure — better for development, weaker for output analysis.",
            commonErrors: [
              "Claiming HDI is always superior — it sacrifices detail and timeliness.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country has GDP of $900bn, depreciation of $90bn and net income from abroad of −$20bn. Calculate NDP and GNP.",
          response: {
            type: "numeric",
            parts: [
              { label: "NDP ($bn)", answer: 810 },
              { label: "GNP ($bn)", answer: 880 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "NDP",
                statement: "NDP = GDP − depreciation",
              },
              {
                kind: "formula",
                name: "GNP",
                statement: "GNP = GDP + net income from abroad",
              },
            ],
            steps: [
              {
                reasoning: "NDP = 900 − 90.",
                working: "NDP = 900 - 90 = 810",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "NDP answer correct.", marks: 1, markCode: "A" },
              {
                reasoning: "GNP = 900 + (−20).",
                working: "GNP = 900 - 20 = 880",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "GNP answer correct — negative net income reduces GNP below GDP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "NDP = $810bn; GNP = $880bn",
            commonErrors: [
              "Adding 20 instead of subtracting the negative net income from abroad.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Nominal GDP is $1,200bn and the price level rose by 4% during the year. Calculate real GDP.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real GDP ($bn)", answer: 1153.8, tolerance: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Real GDP",
                statement: "Real GDP = Nominal GDP / price index (×100)",
              },
            ],
            steps: [
              {
                reasoning:
                  "A 4% price rise means prices are 1.04 times the base level.",
                working: "price index = 104",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deflate nominal GDP by the price index.",
                working: "Real GDP = 1200 / 1.04",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Real GDP ≈ $1,153.8bn.",
                working: "1200 / 1.04 = 1153.85",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer stated in $bn.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Real GDP ≈ $1,153.8bn",
            commonErrors: [
              "Subtracting 4% of nominal GDP instead of dividing by the price index.",
            ],
          },
        },
        {
          id: "econ-u4-l41c1q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an economy, consumption is $55bn, investment is $18bn, government spending is $12bn, exports are $25bn and imports are $20bn. Calculate AD and the trade balance.",
          response: {
            type: "numeric",
            parts: [
              { label: "AD ($bn)", answer: 90 },
              { label: "Trade balance X − M ($bn)", answer: 5 },
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
                reasoning: "X − M = 25 − 20 = 5 — a trade surplus.",
                working: "25 - 20 = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "AD = 55 + 18 + 12 + 5.",
                working: "55 + 18 + 12 + 5 = 90",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "AD = $90bn; trade balance = +$5bn.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AD = $90bn; trade balance = +$5bn (surplus)",
            commonErrors: ["Adding imports to AD instead of subtracting them."],
          },
        },
        {
          id: "econ-u4-l41c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Two countries have identical GDP per capita but very different living standards. Explain why this can happen and evaluate whether GDP can be improved as a welfare measure.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain two reasons identical GDP per capita can hide different living standards.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Evaluate whether adjusting GDP (e.g. for inequality or environment) would make it a better welfare measure.",
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
                  "GDP ignores distribution, non-market activity, leisure and environmental costs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Income distribution may differ — one country may have high inequality so the average hides poverty.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "One country may provide more public goods (health, education) financed by taxes, improving welfare without raising GDP.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Different levels of environmental degradation or leisure time affect wellbeing independently of GDP.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Non-market activity (unpaid care, informal economy) differs between countries.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Adjustments like the GPI or ISEW attempt to capture welfare more fully.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "But they require subjective valuations (e.g. cost of pollution) that are hard to measure consistently.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "GDP remains useful for measuring output and income; adjustments improve welfare measurement but reduce comparability.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Reasoned judgement: keep GDP for output analysis, supplement with distributional and environmental indicators for welfare.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Distribution, public goods, environment, non-market activity differ. (b) Adjustments help welfare but are subjective — use GDP plus complementary measures.",
            commonErrors: [
              "Assuming equal GDP per capita means equal living standards.",
            ],
          },
        },
      ],
    },
    {
      id: "econ-u4-aggregate-demand",
      title: "Components of Aggregate Demand",
      skill:
        "Identify and analyse the components of AD = C + I + G + (X − M) and their determinants.",
      lesson: {
        sections: [
          {
            heading: "The AD equation",
            body: "**Aggregate demand** is total planned spending on domestically produced goods and services: $AD = C + I + G + (X - M)$. **C** = consumption by households; **I** = investment by firms (capital goods); **G** = government spending; **X − M** = net exports (exports minus imports). AD is measured in real terms over a period (usually a year).",
          },
          {
            heading: "Determinants of each component",
            body: "**C** depends on disposable income, interest rates, confidence, wealth and expectations. **I** depends on interest rates, business confidence, expected demand, technology and capacity utilisation. **G** is set by fiscal policy and automatic stabilisers. **X − M** depends on exchange rates, relative incomes abroad, trade policies and global demand.",
          },
          {
            heading: "AD and the economy",
            body: "AD determines total output and employment in the short run. If AD rises faster than productive capacity, inflation results; if it falls, recession and unemployment may follow. Policies aim to keep AD growing steadily — neither too fast (inflation) nor too slow (unemployment).",
          },
        ],
        keyFormulas: [
          { name: "AD equation", statement: "$AD = C + I + G + (X - M)$" },
          {
            name: "Components",
            statement:
              "C = consumption; I = investment; G = government; X−M = net exports",
          },
        ],
        workedExample: {
          problem:
            "In an economy, C = 60, I = 20, G = 15, X = 30, M = 25. Calculate AD.",
          solution:
            "AD = C + I + G + (X − M) = 60 + 20 + 15 + (30 − 25) = 60 + 20 + 15 + 5 = 100.",
        },
      },
      questions: [
        {
          id: "econ-u4-l41c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Aggregate demand equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wages + Rent + Interest + Profit" },
              { id: "b", text: "C + S + T + I" },
              { id: "c", text: "C + I + G + (X + M)" },
              { id: "d", text: "C + I + G + (X − M)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AD equation",
                statement: "AD = C + I + G + (X − M)",
              },
            ],
            steps: [
              {
                reasoning:
                  "AD includes net exports (X − M), not total exports plus imports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** C + I + G + (X − M)",
            commonErrors: ["Adding imports instead of subtracting them."],
          },
        },
        {
          id: "econ-u4-l41c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what is meant by 'net exports' in the AD equation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Net exports",
                statement:
                  "Exports minus imports — the foreign sector's contribution to AD.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Exports (X) are spending by foreigners on domestic output — adds to AD.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Imports (M) are spending by domestic residents on foreign output — subtracted from AD.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Net exports = X − M; positive = trade surplus, negative = trade deficit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Net exports = exports − imports; positive adds to AD, negative subtracts.",
            commonErrors: [
              "Forgetting that imports reduce AD because the spending leaks abroad.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an economy, C = 70, I = 25, G = 20, X = 40, M = 35. Calculate AD and state whether there is a trade surplus or deficit.",
          response: {
            type: "numeric",
            parts: [
              { label: "AD", answer: 120 },
              { label: "Trade balance (X − M)", answer: 5 },
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
                reasoning: "X − M = 40 − 35 = 5.",
                working: "X - M = 40 - 35 = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "AD = 70 + 25 + 20 + 5.",
                working: "AD = 70 + 25 + 20 + 5 = 120",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "AD = 120, and X − M = 5 > 0 means a trade surplus.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AD = 120; trade surplus of 5.",
            commonErrors: [
              "Adding M instead of subtracting it in the AD calculation.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the determinants of consumption (C) and investment (I) and their importance in AD.",
          parts: [
            {
              label: "a",
              prompt: "List three determinants of consumption.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how interest rates affect both C and I.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the relative importance of C versus I in determining AD.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AD components",
                statement:
                  "C = consumption; I = investment — both respond to income and interest rates.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Any three: disposable income, interest rates, confidence/expectations, wealth, tax rates.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Higher interest rates encourage saving and discourage borrowing — C falls.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Higher rates raise the cost of borrowing for investment — I falls.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Lower rates do the opposite — both C and I rise.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "C is typically the largest component of AD in developed economies.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "But I is more volatile and drives long-run growth — small changes have big effects.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: C dominates level of AD; I is crucial for growth and stability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Income, interest rates, confidence, wealth. (b) Higher rates reduce both C and I. (c) C largest; I most volatile/important for growth.",
            commonErrors: [
              "Ignoring that interest rates affect both components simultaneously.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a 'withdrawal' (leakage) from the circular flow of income?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Investment by firms" },
              { id: "b", text: "Exports of goods abroad" },
              { id: "c", text: "Government spending" },
              { id: "d", text: "Saving by households" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Withdrawals",
                statement:
                  "Saving, taxes and imports leak out of the circular flow of income.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Saving is income not spent on consumption — it leaves the flow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Saving by households",
            commonErrors: [
              "Confusing injections (entering the flow) with withdrawals (leaving it).",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A central bank raises interest rates. What is the most likely effect on consumption (C) and investment (I)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C increases but I decreases" },
              { id: "b", text: "Both C and I increase" },
              { id: "c", text: "Both C and I decrease" },
              { id: "d", text: "Neither is affected" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest rate transmission",
                statement:
                  "Higher rates encourage saving and discourage borrowing, reducing both C and I.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher rates reward saving and make borrowing more expensive — consumption falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher rates raise the cost of finance for firms — investment falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c), both decrease, is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Both C and I decrease",
            commonErrors: [
              "Forgetting that interest rates affect both C and I simultaneously.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which component of aggregate demand is the most volatile?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government spending" },
              { id: "b", text: "Investment" },
              { id: "c", text: "Imports" },
              { id: "d", text: "Consumption" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD components",
                statement: "Investment is the most volatile component of AD.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Investment depends on business expectations which change rapidly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Investment",
            commonErrors: [
              "Confusing largest component (consumption) with most volatile (investment).",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If the government raises taxes on households, the most likely effect on AD is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only investment is affected" },
              { id: "b", text: "AD increases" },
              { id: "c", text: "AD is unaffected" },
              { id: "d", text: "AD decreases" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fiscal policy and AD",
                statement:
                  "Higher taxes reduce disposable income → lower consumption → AD falls.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Taxes reduce disposable income, cutting consumption spending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** AD decreases",
            commonErrors: [
              "Forgetting that higher taxes reduce disposable income and hence consumption.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what determines the level of net exports (X − M) in an economy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Net export determinants",
                statement:
                  "Exchange rates, relative incomes, competitiveness and trade policies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A stronger exchange rate makes exports expensive and imports cheap — reducing net exports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Higher domestic incomes raise demand for imports — reducing net exports.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Trade policy (tariffs, quotas) and relative prices/competitiveness also matter.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exchange rates, relative incomes, competitiveness and trade policy.",
            commonErrors: [
              "Saying only exchange rates matter — income levels and policy also matter.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "A country's consumption rises by $40bn and investment falls by $10bn, with other components unchanged. Calculate the change in AD.",
          response: {
            type: "numeric",
            parts: [{ label: "Change in AD ($bn)", answer: 30 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD components",
                statement:
                  "AD = C + I + G + (X − M) — changes in components change AD.",
              },
            ],
            steps: [
              {
                reasoning: "ΔC = +40 and ΔI = −10.",
                working: "+40 - 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other components unchanged — only C and I change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ΔAD = +40 − 10 = +30.",
                working: "40 - 10 = 30",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "AD rises by $30bn.", marks: 1, markCode: "A" },
              { reasoning: "Answer correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AD increases by $30bn",
            commonErrors: [
              "Subtracting the full $10bn from $40bn incorrectly — net change is +30.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Explain three determinants of investment (I) and how each affects the level of investment.",
          parts: [
            {
              label: "a",
              prompt: "Explain two determinants of investment.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how business confidence affects investment.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Investment determinants",
                statement:
                  "Interest rates, business confidence, expected demand, technology.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Interest rates: higher rates raise borrowing costs — I falls.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Expected demand/profitability: optimistic firms invest more.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Technology and capacity utilisation also drive investment decisions.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "High confidence → firms expect future demand → invest in capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Low confidence → firms delay investment → I falls, AD weakens.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Confidence is thus a key driver of the volatility of I.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Interest rates, expected demand, technology. (b) Confidence ↑ → I ↑; confidence ↓ → I ↓.",
            commonErrors: [
              "Listing determinants without explaining their effect on investment.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the role of government spending (G) in determining aggregate demand.",
          parts: [
            {
              label: "a",
              prompt: "Explain what government spending includes in AD.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how fiscal policy can change G and hence AD.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the effectiveness of using G to manage the economy.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Government spending and AD",
                statement:
                  "G is a direct component of AD — set by fiscal policy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "G includes spending on public services, infrastructure and transfers that fund consumption.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It is a direct injection into the circular flow of income.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Expansionary fiscal policy raises G → AD increases.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Contractionary policy cuts G or raises T → AD decreases.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Automatic stabilisers (progressive taxes, benefits) also moderate AD changes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "G is powerful and direct but politically constrained — cuts are unpopular.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Timing lags mean fiscal policy may arrive too late to smooth the cycle.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: effective for demand management but slow and politically difficult.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Public services, infrastructure, transfers. (b) Fiscal policy sets G → AD. (c) Powerful but slow and politically constrained.",
            commonErrors: [
              "Ignoring implementation lags and political constraints on fiscal policy.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an economy, C = 45, I = 15, G = 10, X = 30, M = 25. Calculate AD.",
          response: {
            type: "numeric",
            parts: [{ label: "AD", answer: 75 }],
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
                reasoning: "X − M = 30 − 25 = 5.",
                working: "30 - 25 = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "AD = 45 + 15 + 10 + 5.",
                working: "45 + 15 + 10 + 5 = 75",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "AD = 75.", marks: 1, markCode: "A" },
              { reasoning: "Answer correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AD = 75",
            commonErrors: [
              "Adding M instead of subtracting — would give 125 instead of 75.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A country's exports rise by $20bn while imports stay constant. If other components are unchanged, calculate the change in AD.",
          response: {
            type: "numeric",
            parts: [{ label: "Change in AD ($bn)", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Net exports",
                statement:
                  "X − M is part of AD — higher exports raise net exports and AD.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Exports rise by 20, imports unchanged → net exports rise by 20.",
                working: "+20 - 0 = 20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ΔAD = Δ(X − M) = +20.",
                working: "20",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "AD increases by $20bn.", marks: 1, markCode: "A" },
              { reasoning: "Answer correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AD increases by $20bn",
            commonErrors: ["Subtracting the export rise — exports ADD to AD."],
          },
        },
        {
          id: "econ-u4-l41c2q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "In an economy, AD = C + I + G + (X − M) = 400 with C = 200, I = 80, G = 100, X = 30. Calculate imports M.",
          response: {
            type: "numeric",
            parts: [{ label: "Imports M", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AD equation",
                statement: "AD = C + I + G + (X − M)",
              },
            ],
            steps: [
              {
                reasoning: "400 = 200 + 80 + 100 + (30 − M).",
                working: "200 + 80 + 100 = 380",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So 30 − M = 20.",
                working: "400 - 380 = 20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "M = 30 − 20 = 10.",
                working: "30 - 20 = 10",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Imports = 10.", marks: 1, markCode: "A" },
              {
                reasoning:
                  "Answer correct — rearranged the AD equation to solve for M.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "M = 10",
            commonErrors: [
              "Adding M instead of subtracting — imports reduce AD.",
            ],
          },
        },
        {
          id: "econ-u4-l41c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A government faces a recession with falling output and rising unemployment. Evaluate whether expansionary fiscal policy is the best response.",
          parts: [
            {
              label: "a",
              prompt: "Explain how expansionary fiscal policy raises AD.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain two limitations of using fiscal policy in a recession.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate fiscal policy versus monetary policy for fighting a recession.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expansionary fiscal policy",
                statement:
                  "Higher G or lower T raises AD → output and employment rise.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Higher government spending directly raises the G component of AD.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Tax cuts raise disposable income → consumption rises.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The multiplier amplifies the initial injection into larger income gains.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Implementation lags — budgets take time to design and pass.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Political constraints and budget deficits limit how much governments can spend.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Monetary policy is faster and independent — central banks can cut rates quickly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Fiscal policy is more direct but slower and politically constrained.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: both can work; monetary is faster, fiscal more targeted — often used together.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Higher G/lower T → AD up via multiplier. (b) Lags, deficits, politics. (c) Monetary faster; fiscal targeted — complementary tools.",
            commonErrors: [
              "Treating fiscal and monetary policy as interchangeable — they differ in speed and constraints.",
            ],
          },
        },
      ],
    },
  ],
};
