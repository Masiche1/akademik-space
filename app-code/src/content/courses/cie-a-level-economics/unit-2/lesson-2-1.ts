import type { Lesson } from "../../../types.ts";

export const lesson421: Lesson = {
  id: "ciealecon-u2-lesson-2-1",
  code: "2-1",
  title: "National Income and Economic Growth",
  goal: "I CAN explain GDP, national income measures and economic growth.",
  standards: ["Cambridge A Level Economics 9708", "Paper 2: macroeconomics"],
  
  vocabulary: [
    { term: "GDP", definition: "Gross Domestic Product — total output in economy." },
    { term: "Nominal GDP", definition: "GDP at current prices." },
    { term: "Real GDP", definition: "GDP adjusted for inflation." },
    { term: "GDP per capita", definition: "GDP divided by population." },
    { term: "Economic growth", definition: "Increase in real GDP over time." },
    { term: "Circular flow", definition: "Model of income/expenditure flows." },
  ],
  concepts: [
    {
      id: "ciealecon-u2-s1-gdp",
      title: "National income",
      skill: "Understand GDP measurement and growth.",
      lesson: {
        sections: [
          {
            heading: "GDP measures",
            body: "Output method: sum of value added. Income method: sum of factor incomes. Expenditure method: C+I+G+(X-M). Nominal vs real GDP — real adjusts for inflation.",
          },
          {
            heading: "Circular flow",
            body: "Households provide factors of production → firms produce goods → households consume. Leakages (saving, taxes, imports) and injections (investment, government spending, exports).",
          },
          {
            heading: "Growth",
            body: "Sustained increase in real GDP. Benefits: higher living standards, employment. Costs: environmental damage, inequality, resource depletion.",
          },
        ],
        keyFormulas: [
          { name: "GDP", statement: "total output" },
          { name: "Real GDP", statement: "inflation-adjusted" },
          { name: "Growth", statement: "increase in real GDP" },
        ],
        workedExample: {
          problem: "Country A GDP £100bn, population 50m. Country B GDP £200bn, population 200m. Which has higher living standards?",
          solution: "A: £2,000 per capita. B: £1,000 per capita. A has higher GDP per capita → higher living standards.",
        },
      },
      questions: [
        {
          id: "ciealecon-u2-gdp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is GDP?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Total spending"
                    },
                    {
                              "id": "b",
                              "text": "Population"
                    },
                    {
                              "id": "c",
                              "text": "Total income"
                    },
                    {
                              "id": "d",
                              "text": "Gross Domestic Product — total output"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GDP",
                              "statement": "Total output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GDP = total output in economy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Total output"
},
        },
        {
          id: "ciealecon-u2-gdp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between nominal and real GDP?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nominal vs real",
                              "statement": "Current vs adjusted."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nominal: current prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Real: adjusted for inflation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Current vs inflation-adjusted"
},
        },
        {
          id: "ciealecon-u2-gdp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are leakages and injections in circular flow?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Leakages/injections",
                              "statement": "Circular flow."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leakages: saving, taxes, imports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Injections: investment, government, exports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Balance determines income level.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Leakages vs injections"
},
        },
        {
          id: "ciealecon-u2-gdp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define GDP, nominal GDP, real GDP, GDP per capita, economic growth, circular flow. (b) What is GDP? (c) What is real GDP? (d) What is GDP per capita? (e) What are leakages? (f) What are injections? (g) What is economic growth? (h) Evaluate whether GDP is a good measure of living standards.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "National income",
                              "statement": "Measurement, growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Total output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Inflation-adjusted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) GDP/population.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Saving, taxes, imports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Investment, government, exports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Increase in real GDP.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Ignores inequality, environment, wellbeing.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "National income analysis."
},
        },
        {
          id: "ciealecon-u2-gdp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "GDP measures",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "the total output produced within a country's borders in a given period" },
            { "id": "b", "text": "the value of a country's exports only" },
            { "id": "c", "text": "the total population of a country" },
            { "id": "d", "text": "the total income of a country's citizens worldwide" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "GDP", "statement": "Domestic output, not citizen income (that is GNP)." } ],
          "steps": [ { "reasoning": "GDP counts output produced within the country's geographic borders regardless of who owns the factors of production.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** the total output produced within a country's borders in a given period"
},
        },
        {
          id: "ciealecon-u2-gdp-q6", difficulty: "foundation", totalMarks: 1,
          stem: "GDP per capita is calculated as",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "GDP divided by the number of firms" },
            { "id": "b", "text": "total income multiplied by population" },
            { "id": "c", "text": "GDP minus government spending" },
            { "id": "d", "text": "GDP divided by the population" }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "GDP per capita", "statement": "GDP / population." } ],
          "steps": [ { "reasoning": "GDP per capita divides total output by population to give an average measure of output per person.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** GDP divided by the population"
},
        },
        {
          id: "ciealecon-u2-gdp-q7", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is a leakage from the circular flow of income?",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "Government spending on schools" },
            { "id": "b", "text": "Saving by households" },
            { "id": "c", "text": "Investment by firms" },
            { "id": "d", "text": "Exports of manufactured goods" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Leakages", "statement": "Saving, taxes, imports — withdrawals from the flow." } ],
          "steps": [ { "reasoning": "Saving withdraws income from the circular flow; government spending, exports and investment are injections.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** Saving by households"
},
        },
        {
          id: "ciealecon-u2-gdp-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is an injection into the circular flow of income?",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "Payment of income tax by households" },
            { "id": "b", "text": "Investment spending by firms" },
            { "id": "c", "text": "Purchase of imported goods" },
            { "id": "d", "text": "Saving in bank accounts" }
          ],
          "borrectChoiceId": "c"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "Injections", "statement": "Investment, government spending, exports." } ],
          "steps": [ { "reasoning": "Investment adds spending to the circular flow; taxes, imports and saving are leakages.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(c)** Investment spending by firms"
},
        },
        {
          id: "ciealecon-u2-gdp-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Nominal GDP can rise while real GDP falls because",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "real GDP ignores price changes entirely" },
            { "id": "b", "text": "nominal GDP uses current prices while real GDP adjusts for inflation" },
            { "id": "c", "text": "nominal GDP is always measured per capita" },
            { "id": "d", "text": "real GDP only counts exports" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Nominal vs real GDP", "statement": "Real GDP adjusts for inflation." } ],
          "steps": [ { "reasoning": "Rising prices inflate nominal GDP; if output falls by more than prices rise, real GDP declines even though nominal GDP rises.", "marks": 1, "markCode": "A" } ],
          "finalAnswer": "**(a)** nominal GDP uses current prices while real GDP adjusts for inflation"
},
        },
        {
          id: "ciealecon-u2-gdp-q10", difficulty: "foundation", totalMarks: 1,
          stem: "A country's GDP is $500 billion and its population is 50 million. Calculate GDP per capita in dollars.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 10000 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "GDP per capita", "statement": "GDP / population." } ],
          "steps": [ { "reasoning": "500,000,000,000 / 50,000,000 = 10,000.", "working": "500000000000 / 50000000 = 10000", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "$10,000 per capita"
},
        },
        {
          id: "ciealecon-u2-gdp-q11", difficulty: "core", totalMarks: 1,
          stem: "In an economy, consumption is $70bn, investment $25bn, government spending $20bn and net exports -$5bn. Calculate total expenditure (aggregate demand).",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 110 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "AD", "statement": "AD = C + I + G + (X - M)." } ],
          "steps": [ { "reasoning": "70 + 25 + 20 + (-5) = 110.", "working": "70 + 25 + 20 - 5 = 110", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "$110bn"
},
        },
        {
          id: "ciealecon-u2-gdp-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Real GDP rises from 100 index points to 108 index points over one year. Calculate the rate of economic growth.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 8 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Growth rate", "statement": "(New - Old) / Old x 100." } ],
          "steps": [ { "reasoning": "(108 - 100) / 100 x 100 = 8%.", "working": "8 / 100 x 100 = 8", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "8%"
},
        },
        {
          id: "ciealecon-u2-gdp-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Explain the three methods used to measure GDP.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "definition", "name": "GDP methods", "statement": "Output, income, expenditure." } ],
          "steps": [
            { "reasoning": "Output method: sum the value added at each stage of production; income method: sum all factor incomes (wages, profit, rent, interest).", "marks": 1, "markCode": "M" },
            { "reasoning": "Expenditure method: sum total spending on final goods and services, C + I + G + (X - M).", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "Output (value added), income (factor incomes) and expenditure (C+I+G+X-M) methods."
},
        },
        {
          id: "ciealecon-u2-gdp-q14", difficulty: "core", totalMarks: 3,
          stem: "Using the circular flow of income, explain what happens to national income when injections exceed leakages.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Circular flow", "statement": "Injections vs leakages determine income." } ],
          "steps": [
            { "reasoning": "Leakages (saving, taxes, imports) withdraw spending from the circular flow; injections (investment, government spending, exports) add to it.", "marks": 1, "markCode": "M" },
            { "reasoning": "If injections exceed leakages, aggregate spending in the economy rises.", "marks": 1, "markCode": "M" },
            { "reasoning": "Higher spending raises firms' revenues, encouraging more output and factor incomes, so national income increases.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Injections > leakages → AD rises → output and national income rise."
},
        },
        {
          id: "ciealecon-u2-gdp-q15", difficulty: "core", totalMarks: 6,
          stem: "Answer the following on national income.",
          parts: [
            { "label": "a", "prompt": "Distinguish between nominal GDP and real GDP.", "marks": 2 },
            { "label": "b", "prompt": "Define economic growth.", "marks": 2 },
            { "label": "c", "prompt": "Give one benefit and one cost of economic growth.", "marks": 2 }
          ],
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "National income", "statement": "GDP concepts and growth." } ],
          "steps": [
            { "reasoning": "Nominal GDP is measured at current prices; real GDP adjusts for inflation using a price index.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "Only real GDP reflects changes in actual output, so it is the better measure of growth.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "Economic growth is a sustained increase in real GDP over time.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "It is usually measured as the percentage change in real GDP per year.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "Benefit: higher output and living standards, more jobs; cost: environmental damage, resource depletion or rising inequality.", "marks": 1, "markCode": "M", "part": "c" },
            { "reasoning": "One valid benefit and one valid cost identified.", "marks": 1, "markCode": "A", "part": "c" }
          ],
          "finalAnswer": "Nominal = current prices, real = inflation-adjusted; growth = rise in real GDP; benefits vs costs."
},
        },
        {
          id: "ciealecon-u2-gdp-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate GDP per capita as a measure of living standards.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "GDP limitations", "statement": "Living standards vs output." } ],
          "steps": [
            { "reasoning": "GDP per capita gives a simple average of output per person and correlates reasonably with material living standards across countries.", "marks": 1, "markCode": "M" },
            { "reasoning": "It ignores income and wealth inequality — a rise in average output may not reach the poor.", "marks": 1, "markCode": "M" },
            { "reasoning": "It excludes non-market activity such as unpaid care work and the informal economy.", "marks": 1, "markCode": "M" },
            { "reasoning": "It fails to account for environmental degradation and resource depletion — growth may be unsustainable.", "marks": 1, "markCode": "M" },
            { "reasoning": "It says nothing about health, education, leisure or happiness, so other indicators (HDI) are needed.", "marks": 1, "markCode": "M" },
            { "reasoning": "Overall GDP per capita is a useful but incomplete proxy; complementary measures give a fuller picture of wellbeing.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "GDP per capita is useful but ignores inequality, non-market activity, environment and wellbeing."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u2-gdp-notes",
      title: "National income — notes",
      summary: "GDP measures total output. Real GDP adjusts for inflation. Circular flow shows income/expenditure.",
      sections: [
        { heading: "Key idea", body: "GDP is useful but incomplete measure of economic wellbeing." },
        { heading: "Growth", body: "Sustained real GDP growth raises living standards but may have costs." },
      ],
    },
  ],
};
