import type { Lesson } from "../../../types.ts";

export const lesson422: Lesson = {
  id: "ciealecon-u2-lesson-2-2",
  code: "2-2",
  title: "Inflation and Unemployment",
  goal: "I CAN explain inflation types, causes and unemployment types.",
  standards: ["Cambridge A Level Economics 9708", "Paper 2: macroeconomics"],
  
  vocabulary: [
    { term: "Inflation", definition: "Sustained increase in general price level." },
    { term: "Demand-pull inflation", definition: "Inflation from excess demand." },
    { term: "Cost-push inflation", definition: "Inflation from rising costs." },
    { term: "CPI", definition: "Consumer Price Index — inflation measure." },
    { term: "Unemployment", definition: "People seeking work but unable to find it." },
    { term: "Natural rate of unemployment", definition: "Unemployment at full employment." },
  ],
  concepts: [
    {
      id: "ciealecon-u2-s2-infl",
      title: "Inflation and unemployment",
      skill: "Analyse macroeconomic problems.",
      lesson: {
        sections: [
          {
            heading: "Inflation types",
            body: "Demand-pull: AD > AS → demand exceeds supply. Cost-push: rising input costs → prices rise. Built-in: wage-price spiral.",
          },
          {
            heading: "Unemployment types",
            body: "Frictional: between jobs. Structural: skills mismatch/industry decline. Cyclical: recession-related. Seasonal: seasonal work patterns.",
          },
          {
            heading: "Phillips curve",
            body: "Inverse relationship between inflation and unemployment in short run. Long-run: vertical at natural rate — no trade-off.",
          },
        ],
        keyFormulas: [
          { name: "Inflation", statement: "price level increase" },
          { name: "Unemployment", statement: "seeking work, no job" },
          { name: "Phillips curve", statement: "inflation-unemployment trade-off" },
        ],
        workedExample: {
          problem: "Oil prices rise sharply. What type of inflation results?",
          solution: "Cost-push inflation — higher input costs raise prices. May also reduce AD (negative demand shock) → stagflation.",
        },
      },
      questions: [
        {
          id: "ciealecon-u2-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is inflation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Economic growth"
                    },
                    {
                              "id": "b",
                              "text": "Sustained increase in general price level"
                    },
                    {
                              "id": "c",
                              "text": "Decrease in prices"
                    },
                    {
                              "id": "d",
                              "text": "Increase in wages"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inflation",
                              "statement": "Price increase."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inflation = sustained price level increase.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sustained price increase"
},
        },
        {
          id: "ciealecon-u2-in-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between demand-pull and cost-push inflation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inflation types",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Demand-pull: excess demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cost-push: rising input costs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Demand vs cost causes"
},
        },
        {
          id: "ciealecon-u2-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are the types of unemployment?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Unemployment types",
                              "statement": "Categories."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Frictional, structural, cyclical, seasonal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different causes for each type.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Natural rate excludes cyclical.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Unemployment types"
},
        },
        {
          id: "ciealecon-u2-in-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define inflation, demand-pull, cost-push, CPI, unemployment, natural rate. (b) What is inflation? (c) What is demand-pull inflation? (d) What is cost-push? (e) What are unemployment types? (f) What is natural rate? (g) What is Phillips curve? (h) Evaluate whether governments should prioritise low inflation or low unemployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Inflation/unemployment",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Price increase.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Excess demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Rising costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Frictional, structural, cyclical, seasonal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Full employment level.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Inflation-unemployment trade-off.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Inflation and unemployment."
},
        },
        {
          id: "ciealecon-u2-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Demand-pull inflation occurs when",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "the government reduces spending" },
            { "id": "b", "text": "aggregate demand exceeds aggregate supply at the full-employment output" },
            { "id": "c", "text": "the cost of imported raw materials rises" },
            { "id": "d", "text": "wages fall across the economy" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Demand-pull inflation", "statement": "AD > AS at full employment." } ],
          "steps": [ { "reasoning": "When demand outruns the economy's capacity to supply, prices are bid up — demand-pull inflation.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** aggregate demand exceeds aggregate supply at the full-employment output"
},
        },
        {
          id: "ciealecon-u2-in-q6", difficulty: "foundation", totalMarks: 1,
          stem: "A sharp rise in world oil prices is most likely to cause",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "cost-push inflation" },
            { "id": "b", "text": "no change in the price level" },
            { "id": "c", "text": "demand-pull inflation" },
            { "id": "d", "text": "deflation" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Cost-push inflation", "statement": "Rising input costs push prices up." } ],
          "steps": [ { "reasoning": "Higher oil prices raise production costs across the economy, shifting AS left and pushing prices up.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** cost-push inflation"
},
        },
        {
          id: "ciealecon-u2-in-q7", difficulty: "core", totalMarks: 1,
          stem: "Frictional unemployment is",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "unemployment caused by a recession" },
            { "id": "b", "text": "unemployment caused by people moving between jobs or entering the labour force" },
            { "id": "c", "text": "unemployment that only occurs in summer" },
            { "id": "d", "text": "unemployment caused by skills mismatch" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Frictional unemployment", "statement": "Short-term job search between jobs." } ],
          "steps": [ { "reasoning": "Frictional unemployment reflects normal job search and matching delays in a dynamic labour market.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** unemployment caused by people moving between jobs or entering the labour force"
},
        },
        {
          id: "ciealecon-u2-in-q8", difficulty: "core", totalMarks: 1,
          stem: "Cyclical (demand-deficient) unemployment is most likely to occur during",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "a period of rapid economic growth" },
            { "id": "b", "text": "the summer harvest season" },
            { "id": "c", "text": "a recession or economic downturn" },
            { "id": "d", "text": "a technological boom" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Cyclical unemployment", "statement": "Rises when AD falls in a downturn." } ],
          "steps": [ { "reasoning": "When aggregate demand falls, firms cut output and lay off workers — cyclical unemployment rises with the business cycle.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** a recession or economic downturn"
},
        },
        {
          id: "ciealecon-u2-in-q9", difficulty: "challenge", totalMarks: 1,
          stem: "In the long run, the Phillips curve is",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "downward sloping" },
            { "id": "b", "text": "horizontal" },
            { "id": "c", "text": "vertical at the natural rate of unemployment" },
            { "id": "d", "text": "upward sloping" }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Phillips curve", "statement": "SR trade-off; LR vertical at natural rate." } ],
          "steps": [ { "reasoning": "Once expectations adjust, there is no permanent trade-off — unemployment returns to the natural rate whatever the inflation rate.", "marks": 1, "markCode": "A" } ],
          "finalAnswer": "**(a)** vertical at the natural rate of unemployment"
},
        },
        {
          id: "ciealecon-u2-in-q10", difficulty: "foundation", totalMarks: 1,
          stem: "The CPI rises from an index of 100 to 105 over one year. Calculate the inflation rate.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 5 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Inflation rate", "statement": "(CPI_new - CPI_old) / CPI_old x 100." } ],
          "steps": [ { "reasoning": "(105 - 100) / 100 x 100 = 5%.", "working": "5 / 100 x 100 = 5", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "5%"
},
        },
        {
          id: "ciealecon-u2-in-q11", difficulty: "core", totalMarks: 1,
          stem: "The labour force is 25 million and 1.5 million people are unemployed. Calculate the unemployment rate.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 6 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Unemployment rate", "statement": "Unemployed / labour force x 100." } ],
          "steps": [ { "reasoning": "1.5 / 25 x 100 = 6%.", "working": "1.5 / 25 x 100 = 6", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "6%"
},
        },
        {
          id: "ciealecon-u2-in-q12", difficulty: "challenge", totalMarks: 1,
          stem: "The price level rises from 200 to 210 index points. Calculate the inflation rate.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 5 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Inflation rate", "statement": "% change in general price level." } ],
          "steps": [ { "reasoning": "(210 - 200) / 200 x 100 = 5%.", "working": "10 / 200 x 100 = 5", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "5%"
},
        },
        {
          id: "ciealecon-u2-in-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Explain what is meant by the wage-price spiral (built-in inflation).",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Built-in inflation", "statement": "Self-reinforcing wage-price cycle." } ],
          "steps": [
            { "reasoning": "Workers demand higher wages to keep up with expected inflation, raising firms' costs.", "marks": 1, "markCode": "M" },
            { "reasoning": "Firms pass the higher costs on as higher prices, which in turn fuels further wage demands — a self-perpetuating spiral.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "Rising prices → wage demands → higher costs → higher prices, reinforcing inflation."
},
        },
        {
          id: "ciealecon-u2-in-q14", difficulty: "core", totalMarks: 3,
          stem: "Distinguish between structural and frictional unemployment, giving an example of each.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Unemployment types", "statement": "Structural vs frictional." } ],
          "steps": [
            { "reasoning": "Structural unemployment arises when workers' skills or locations no longer match job vacancies — e.g. miners after a mine closes.", "marks": 1, "markCode": "M" },
            { "reasoning": "Frictional unemployment is short-term job search between jobs — e.g. a graduate looking for first work.", "marks": 1, "markCode": "M" },
            { "reasoning": "Structural unemployment is longer-lasting and needs retraining or relocation; frictional is voluntary and resolves itself.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Structural = skills/industry mismatch (long-term); frictional = job search between jobs (short-term)."
},
        },
        {
          id: "ciealecon-u2-in-q15", difficulty: "core", totalMarks: 6,
          stem: "Answer the following on inflation and unemployment.",
          parts: [
            { "label": "a", "prompt": "Explain the difference between demand-pull and cost-push inflation.", "marks": 2 },
            { "label": "b", "prompt": "Define the natural rate of unemployment.", "marks": 2 },
            { "label": "c", "prompt": "Explain why unemployment is a problem for an economy.", "marks": 2 }
          ],
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Inflation and unemployment", "statement": "Causes, natural rate, consequences." } ],
          "steps": [
            { "reasoning": "Demand-pull inflation results from AD exceeding AS; cost-push results from rising input costs shifting AS left.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "Demand-pull is demand-driven while cost-push is supply-side, and cost-push may coincide with falling output.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "The natural rate is the unemployment existing at full employment — frictional and structural unemployment only.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "It excludes cyclical unemployment and represents the lowest sustainable rate in the long run.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "Unemployment wastes resources, lowers output and incomes, and creates social costs such as poverty and inequality.", "marks": 1, "markCode": "M", "part": "c" },
            { "reasoning": "It also reduces tax revenue and increases government spending on benefits.", "marks": 1, "markCode": "A", "part": "c" }
          ],
          "finalAnswer": "Demand-pull = AD>AS; cost-push = rising costs; natural rate = full-employment unemployment; unemployment wastes output and resources."
},
        },
        {
          id: "ciealecon-u2-in-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate whether a government should prioritise low inflation over low unemployment.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Policy priorities", "statement": "Inflation vs unemployment trade-off." } ],
          "steps": [
            { "reasoning": "Low inflation protects purchasing power, encourages saving and investment, and supports long-run growth — a strong case for prioritising it.", "marks": 1, "markCode": "M" },
            { "reasoning": "However, high unemployment imposes heavy costs on individuals and society, so ignoring it is also damaging.", "marks": 1, "markCode": "M" },
            { "reasoning": "In the short run a trade-off exists via the Phillips curve, but in the long run unemployment returns to the natural rate.", "marks": 1, "markCode": "M" },
            { "reasoning": "Supply-side policies can reduce structural unemployment without fuelling inflation, reducing the conflict.", "marks": 1, "markCode": "M" },
            { "reasoning": "Priorities depend on circumstances — a wage-price spiral may make inflation control urgent, while a deep recession may make jobs the priority.", "marks": 1, "markCode": "M" },
            { "reasoning": "A balanced approach using both demand management and supply-side reform is usually most appropriate.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Both matter; the Phillips curve trade-off is short-run only, and context determines which should be prioritised."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u2-in-notes",
      title: "Inflation/unemployment — notes",
      summary: "Demand-pull vs cost-push inflation. Unemployment types: frictional, structural, cyclical.",
      sections: [
        { heading: "Key idea", body: "Inflation and unemployment are key macroeconomic problems." },
        { heading: "Phillips curve", body: "Short-run trade-off but long-run vertical — no permanent trade-off." },
      ],
    },
  ],
};
