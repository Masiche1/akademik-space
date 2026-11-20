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
                              "text": "Sustained increase in general price level"
                    },
                    {
                              "id": "b",
                              "text": "Decrease in prices"
                    },
                    {
                              "id": "c",
                              "text": "Increase in wages"
                    },
                    {
                              "id": "d",
                              "text": "Economic growth"
                    }
          ],
          "correctChoiceId": "a"
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
