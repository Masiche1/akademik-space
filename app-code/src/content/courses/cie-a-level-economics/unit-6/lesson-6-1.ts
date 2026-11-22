import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cieale-u6-lesson-6-1",
  code: "6-1",
  title: "National Income Measurement and the AD/AS Model",
  goal: "I CAN measure national income, explain its components and use the AD/AS model to analyse short-run fluctuations.",
  standards: ["Cambridge A Level Economics 9708", "Unit 6: macroeconomics"],
  vocabulary: [
    {
      term: "GDP",
      definition: "Total output produced within a country in a period.",
    },
    {
      term: "GNP/GNI",
      definition: "Output of a nation's residents (incl. overseas).",
    },
    {
      term: "Nominal vs real GDP",
      definition: "Current prices vs constant prices.",
    },
    {
      term: "GDP deflator",
      definition: "Price index measuring average price level.",
    },
    {
      term: "Aggregate demand (AD)",
      definition: "Total spending on domestic output.",
    },
    {
      term: "Aggregate supply (AS)",
      definition: "Total output firms are willing/able to supply.",
    },
  ],
  concepts: [
    {
      id: "cieale-u6l1-c1-income",
      title: "Measuring national income",
      skill:
        "Calculate GDP via income, expenditure and output approaches and adjust for inflation.",
      lesson: {
        sections: [
          {
            heading: "Three approaches",
            body: "National income can be measured three ways — all should give same result: **Income approach** (sum of factor incomes: wages, profit, rent, interest), **Expenditure approach** (C+I+G+(X-M)), **Output approach** (sum of value added by industry).",
          },
          {
            heading: "Nominal vs real",
            body: "**Nominal GDP** uses current prices — rises with inflation even if output unchanged. **Real GDP** uses constant base-year prices — measures true output change. **GDP deflator** = (Nominal/Real)×100 — measures average price level; inflation = % change in deflator.",
          },
        ],
        keyFormulas: [
          { name: "GDP(E)", statement: "C + I + G + (X − M)" },
          { name: "Real GDP", statement: "Nominal GDP ÷ (GDP deflator/100)" },
          { name: "Inflation", statement: "%Δ GDP deflator" },
        ],
        workedExample: {
          problem:
            "Nominal GDP=$1,200bn, real GDP=$1,000bn. Find deflator and inflation if last year's deflator was 115.",
          solution:
            "Deflator = (1200/1000)×100 = 120. Inflation = (120−115)/115 ×100 ≈ 4.3%.",
        },
      },
      questions: [
        {
          id: "cieale-q-u6l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GDP measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Residents' income only" },
              { id: "b", text: "Output produced within a country" },
              { id: "c", text: "Government revenue" },
              { id: "d", text: "Exports minus imports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP",
                statement: "Domestic output.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Domestic output",
            commonErrors: ["Confusing with GNP."],
          },
        },
        {
          id: "cieale-q-u6l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "List the three approaches to measuring national income.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Income approaches",
                statement: "Income, expenditure, output.",
              },
            ],
            steps: [
              { reasoning: "Three named.", marks: 1, markCode: "M" },
              { reasoning: "Each defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Income (factor incomes), expenditure (C+I+G+X−M), output (value added by industry) — all should yield same GDP.",
            commonErrors: ["Missing one."],
          },
        },
        {
          id: "cieale-q-u6l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "C=$600bn, I=$200bn, G=$250bn, X=$150bn, M=$180bn. Calculate GDP.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Expenditure GDP",
                statement: "C+I+G+(X−M).",
              },
            ],
            steps: [
              {
                reasoning: "GDP = 600+200+250+(150−180)",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 1020", marks: 1, markCode: "M" },
              { reasoning: "Units stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GDP = $1,020bn",
            commonErrors: ["Forgetting net exports."],
          },
        },
        {
          id: "cieale-q-u6l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Why does nominal GDP overstate growth during inflation? How is real GDP calculated?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Real vs nominal",
                statement: "Inflation distorts.",
              },
            ],
            steps: [
              {
                reasoning: "Nominal uses current prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Real uses base-year prices.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Formula.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Nominal GDP rises with prices even if output flat — real GDP = nominal ÷ GDP deflator removes price effect to show true output change.",
            commonErrors: ["Confusing them."],
          },
        },
        {
          id: "cieale-q-u6l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate GDP as a measure of economic welfare and living standards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP limits",
                statement: "Output ≠ welfare.",
              },
            ],
            steps: [
              { reasoning: "What GDP captures.", marks: 1, markCode: "M" },
              { reasoning: "What it misses.", marks: 1, markCode: "M" },
              { reasoning: "Alternative measures.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GDP tracks output but ignores distribution, leisure, environment, informal economy and wellbeing — useful but incomplete; HDI/GPI attempt broader measures.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u6l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'GDP deflator'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP deflator",
                statement: "Average price level index.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Price index = (Nominal GDP/Real GDP)×100 — measures average price level of all domestically produced goods/services; used to derive real GDP and inflation.",
            commonErrors: ["Confusing with CPI."],
          },
        },
        {
          id: "cieale-q-u6l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Real GDP differs from nominal GDP by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Population size" },
              { id: "b", text: "Adjusting for price changes" },
              { id: "c", text: "Government spending" },
              { id: "d", text: "Including imports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Real GDP", statement: "Price-adjusted." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Price adjustment",
            commonErrors: ["Wrong."],
          },
        },
        {
          id: "cieale-q-u6l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might the three income approaches give different results?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Measurement error",
                statement: "Informal, timing, quality.",
              },
            ],
            steps: [
              { reasoning: "Reasons.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Informal economy unmeasured, timing differences (income vs expenditure), data quality — estimates approximate, revisions common.",
            commonErrors: ["Assuming exact equality."],
          },
        },
        {
          id: "cieale-q-u6l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does 'per capita GDP' tell you and what does it miss?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Per capita",
                statement: "Average, hides distribution.",
              },
            ],
            steps: [
              { reasoning: "What it shows.", marks: 1, markCode: "M" },
              { reasoning: "What it misses.", marks: 1, markCode: "M" },
              { reasoning: "Better measure.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GDP/population — average income proxy but ignores inequality, informal economy, non-market production; HDI supplements with health/education.",
            commonErrors: ["Thinking it measures poverty directly."],
          },
        },
        {
          id: "cieale-q-u6l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the difference between GDP and GNP/GNI.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDP vs GNI",
                statement: "Location vs nationality.",
              },
            ],
            steps: [
              { reasoning: "GDP defined.", marks: 1, markCode: "M" },
              { reasoning: "GNI defined.", marks: 1, markCode: "M" },
              { reasoning: "When they diverge.", marks: 1, markCode: "A" },
              { reasoning: "Weighs relevance.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GDP = output within borders; GNI = income of residents (incl. overseas minus foreign income). Diverges with large foreign investment/remittances — matters for development comparisons.",
            commonErrors: ["Treating as same."],
          },
        },
        {
          id: "cieale-q-u6l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which approach to measuring national income sums factor incomes such as wages, profit, rent and interest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The income approach" },
              { id: "b", text: "The balance of payments approach" },
              { id: "c", text: "The expenditure approach" },
              { id: "d", text: "The output approach" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Income approach",
                statement: "Sum of factor incomes.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Income approach",
            commonErrors: ["Confusing with expenditure approach."],
          },
        },
        {
          id: "cieale-q-u6l1c1-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Nominal GDP is $1,500bn and the GDP deflator is 120. Calculate real GDP.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1250, unit: "billion dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Real GDP",
                statement: "Nominal GDP ÷ (deflator/100).",
              },
            ],
            steps: [
              {
                reasoning: "Real GDP = 1500 ÷ 1.2 = 1250.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Real GDP = $1,250bn",
            commonErrors: ["Multiplying by 1.2 instead of dividing."],
          },
        },
        {
          id: "cieale-q-u6l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Nominal GDP is $1,100bn and real GDP is $1,000bn. What is the GDP deflator?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "110" },
              { id: "c", text: "1.1" },
              { id: "d", text: "90" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "GDP deflator",
                statement: "(Nominal/Real) × 100.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 110",
            commonErrors: ["Forgetting to multiply by 100."],
          },
        },
        {
          id: "cieale-q-u6l1c1-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In a year, C=$800bn, I=$250bn, G=$300bn, X=$200bn and M=$220bn.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1330, unit: "billion dollars" },
              { label: "b", answer: -20, unit: "billion dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Expenditure GDP",
                statement: "C+I+G+(X−M).",
              },
            ],
            steps: [
              {
                reasoning: "GDP = 800+250+300+(200−220) = 1330.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Net exports = 200−220 = −20.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "GDP = $1,330bn; net exports = −$20bn",
            commonErrors: ["Adding imports instead of subtracting."],
          },
        },
        {
          id: "cieale-q-u6l1c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Real GDP differs from nominal GDP because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "uses current-year prices" },
              { id: "b", text: "includes government spending only" },
              { id: "c", text: "is adjusted for changes in the price level" },
              { id: "d", text: "measures only exports" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Real GDP",
                statement: "Output at constant prices.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Price-level adjusted",
            commonErrors: ["Confusing real with nominal."],
          },
        },
        {
          id: "cieale-q-u6l1c1-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "The GDP deflator rose from 110 to 115.5 in one year. Calculate the inflation rate.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Inflation",
                statement: "% change in GDP deflator.",
              },
            ],
            steps: [
              {
                reasoning: "Inflation = (115.5−110)/110 × 100 = 5%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Inflation = 5%",
            commonErrors: ["Dividing by the new deflator 115.5."],
          },
        },
      ],
    },
    {
      id: "cieale-u6l1-c2-adas",
      title: "The AD/AS model",
      skill: "Use AD/AS to analyse short-run output and price level changes.",
      lesson: {
        sections: [
          {
            heading: "Aggregate demand",
            body: "**AD** = C+I+G+(X−M), downward sloping: **wealth effect** (higher P → lower real wealth → less C), **interest rate effect** (higher P → higher interest → less I), **exchange rate effect** (higher P → depreciation → X falls). Shifts: fiscal/monetary policy, confidence, world income.",
          },
          {
            heading: "Aggregate supply",
            body: "**Short-run AS** upward sloping (sticky wages/prices — firms raise output as prices rise). **Long-run AS** vertical at full employment (output determined by resources/technology). Shifts: input costs, technology, labour supply, expectations.",
          },
        ],
        keyFormulas: [
          {
            name: "AD slopes down",
            statement: "Wealth, interest, exchange rate effects",
          },
          { name: "SRAS up", statement: "Sticky prices/wages" },
          { name: "LRAS vertical", statement: "Full employment output" },
        ],
        workedExample: {
          problem: "Government raises G by $50bn. Trace AD/AS effect.",
          solution:
            "AD shifts right → higher real output and price level (movement along SRAS) — short-run growth with inflation; if at LRAS, only prices rise (inflationary gap).",
        },
      },
      questions: [
        {
          id: "cieale-q-u6l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "AD slopes downward because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Law of demand only" },
              { id: "b", text: "Sticky wages" },
              { id: "c", text: "Technology" },
              { id: "d", text: "Wealth, interest and exchange rate effects" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "AD slopes", statement: "Three effects." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Three effects",
            commonErrors: ["Only demand law."],
          },
        },
        {
          id: "cieale-q-u6l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is LRAS vertical?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LRAS",
                statement: "Full employment output.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "In long run all prices/wages flexible — output determined by resources and technology (full employment), independent of price level → vertical at potential output.",
            commonErrors: ["Thinking it slopes."],
          },
        },
        {
          id: "cieale-q-u6l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'interest rate effect' on AD.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interest effect",
                statement: "P↑ → interest↑ → I↓.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "AD impact.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Higher price level → demand for money rises → interest rates rise → investment and interest-sensitive consumption fall → AD decreases.",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "cieale-q-u6l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "SRAS is upward sloping while LRAS is vertical — explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SRAS vs LRAS",
                statement: "Sticky vs flexible prices.",
              },
            ],
            steps: [
              { reasoning: "SRAS mechanism.", marks: 1, markCode: "M" },
              { reasoning: "LRAS mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Adjustment.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Short run: sticky wages/prices → higher P raises real output. Long run: flexible prices → output returns to potential; only price level adjusts.",
            commonErrors: ["Same curve assumed."],
          },
        },
        {
          id: "cieale-q-u6l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how an increase in AD affects output and prices at different points on LRAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD shifts",
                statement: "Depends on starting point.",
              },
            ],
            steps: [
              { reasoning: "Below potential.", marks: 1, markCode: "M" },
              { reasoning: "At potential.", marks: 1, markCode: "M" },
              { reasoning: "Above potential.", marks: 1, markCode: "A" },
              { reasoning: "Weighs scenarios.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Below LRAS: output and prices rise (recession recovery). At LRAS: only prices rise (inflationary). Above: output constrained, inflation accelerates — depends on spare capacity.",
            commonErrors: ["One scenario only."],
          },
        },
        {
          id: "cieale-q-u6l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What causes SRAS to shift?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "SRAS shifts",
                statement: "Input costs, technology.",
              },
            ],
            steps: [
              { reasoning: "Causes listed.", marks: 1, markCode: "M" },
              { reasoning: "Direction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Changes in input prices (wages, raw materials), productivity, taxes/subsidies on production, expectations — shifts SRAS left (cost↑) or right (cost↓).",
            commonErrors: ["Only AD factors."],
          },
        },
        {
          id: "cieale-q-u6l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'wealth effect' explains AD slope via:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher prices increase exports" },
              { id: "b", text: "Higher prices reduce interest rates" },
              { id: "c", text: "Higher prices raise wages" },
              {
                id: "d",
                text: "Higher prices reduce real wealth and consumption",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wealth effect",
                statement: "P↑ → real wealth↓.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Real wealth falls",
            commonErrors: ["Wrong mechanism."],
          },
        },
        {
          id: "cieale-q-u6l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do 'expectations' affect SRAS?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Expectations",
                statement: "Self-fulfilling inflation.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Policy link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If workers expect inflation, they demand higher wages → costs rise → SRAS shifts left → actual inflation — credibility of low-inflation policy crucial.",
            commonErrors: ["Expectations irrelevant claim."],
          },
        },
        {
          id: "cieale-q-u6l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the 'output gap'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Output gap",
                statement: "Actual − potential output.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Positive vs negative.", marks: 1, markCode: "M" },
              { reasoning: "Policy use.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Difference between actual and potential (full-employment) output — negative gap = recession, positive = inflationary pressure; guides demand management.",
            commonErrors: ["Confusing with trade gap."],
          },
        },
        {
          id: "cieale-q-u6l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the AD/AS model's usefulness for analysing recessions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD/AS",
                statement: "Useful but simplified.",
              },
            ],
            steps: [
              { reasoning: "Strengths.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Alternative views.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "AD/AS captures demand/supply shocks and policy effects simply, but ignores financial markets, distribution, expectations dynamics — useful framework, incomplete explanation.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u6l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An increase in aggregate demand, with aggregate supply unchanged in the short run, causes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "higher output but unchanged prices" },
              { id: "b", text: "higher output and a higher price level" },
              { id: "c", text: "no change in equilibrium" },
              { id: "d", text: "lower output and a lower price level" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AD/AS equilibrium",
                statement: "AD right → P and Y up.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Output and price level rise",
            commonErrors: ["Thinking only prices change."],
          },
        },
        {
          id: "cieale-q-u6l1c2-12",
          difficulty: "core",
          totalMarks: 1,
          stem: "C=$700bn, I=$220bn, G=$280bn, X=$140bn and M=$160bn. Calculate aggregate demand.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1180, unit: "billion dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Aggregate demand",
                statement: "C+I+G+(X−M).",
              },
            ],
            steps: [
              {
                reasoning: "AD = 700+220+280+140−160 = 1180.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "AD = $1,180bn",
            commonErrors: ["Adding imports instead of subtracting."],
          },
        },
        {
          id: "cieale-q-u6l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "If the economy is producing at full employment (on the LRAS curve) and aggregate demand increases:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only the price level rises" },
              { id: "b", text: "output rises permanently" },
              { id: "c", text: "nothing changes" },
              { id: "d", text: "output falls" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LRAS",
                statement: "Vertical at potential output.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Only prices rise",
            commonErrors: ["Forgetting LRAS is vertical."],
          },
        },
        {
          id: "cieale-q-u6l1c2-14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Potential output is $1,000bn and actual output is $960bn.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: -40, unit: "billion dollars" },
              { label: "b", answer: -4, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Output gap",
                statement: "Actual − potential output.",
              },
            ],
            steps: [
              {
                reasoning: "Output gap = 960 − 1000 = −40.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "As % of potential: −40/1000 × 100 = −4%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Output gap = −$40bn (−4% of potential)",
            commonErrors: ["Wrong sign or dividing by actual output."],
          },
        },
        {
          id: "cieale-q-u6l1c2-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "SRAS slopes upward in the short run mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "demand is perfectly elastic" },
              { id: "b", text: "technology is fixed forever" },
              { id: "c", text: "wages and prices are sticky" },
              { id: "d", text: "all prices adjust instantly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SRAS",
                statement: "Sticky prices/wages.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Sticky wages and prices",
            commonErrors: ["Confusing with LRAS."],
          },
        },
        {
          id: "cieale-q-u6l1c2-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Exports rise by $20bn following a currency depreciation, with all other components of AD unchanged. Calculate the change in aggregate demand.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "billion dollars" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "AD components",
                statement: "ΔAD = Δ(X−M) here.",
              },
            ],
            steps: [
              {
                reasoning: "ΔAD = Δ(X−M) = +20.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "AD rises by $20bn",
            commonErrors: ["Thinking depreciation lowers AD."],
          },
        },
      ],
    },
  ],
};
