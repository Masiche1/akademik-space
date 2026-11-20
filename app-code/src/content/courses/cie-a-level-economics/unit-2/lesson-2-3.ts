import type { Lesson } from "../../../types.ts";

export const lesson423: Lesson = {
  id: "ciealecon-u2-lesson-2-3",
  code: "2-3",
  title: "Aggregate Demand and Aggregate Supply",
  goal: "I CAN explain AD/AS curves, shifts and macroeconomic equilibrium.",
  standards: ["Cambridge A Level Economics 9708", "Paper 2: AD/AS"],
  
  vocabulary: [
    { term: "Aggregate demand (AD)", definition: "Total spending on goods/services in economy." },
    { term: "Aggregate supply (AS)", definition: "Total output economy can produce." },
    { term: "Short-run AS", definition: "AS with fixed wages/prices." },
    { term: "Long-run AS", definition: "AS at full employment." },
    { term: "Multiplier effect", definition: "Initial spending change → larger income change." },
    { term: "Stagflation", definition: "High inflation + high unemployment." },
  ],
  concepts: [
    {
      id: "ciealecon-u2-s3-ad",
      title: "AD/AS model",
      skill: "Analyse macroeconomic equilibrium.",
      lesson: {
        sections: [
          {
            heading: "AD components",
            body: "C (consumption), I (investment), G (government spending), X-M (net exports). AD shifts: monetary/fiscal policy, consumer confidence, exchange rates.",
          },
          {
            heading: "AS curves",
            body: "SRAS: upward sloping — prices/wages sticky. LRAS: vertical at full employment. Shifts: technology, labour, capital, resources.",
          },
          {
            heading: "Equilibrium",
            body: "AD = AS determines output and price level. AD increase → output↑ + prices↑. LRAS determines long-run growth.",
          },
        ],
        keyFormulas: [
          { name: "AD", statement: "C+I+G+(X-M)" },
          { name: "AS", statement: "total output" },
          { name: "Equilibrium", statement: "AD = AS" },
        ],
        workedExample: {
          problem: "Government increases spending. Show AD/AS effect.",
          solution: "AD shifts right → output increases, price level rises. If near full employment, mainly inflationary.",
        },
      },
      questions: [
        {
          id: "ciealecon-u2-ad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is aggregate demand?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Total spending on goods/services"
                    },
                    {
                              "id": "b",
                              "text": "Total output"
                    },
                    {
                              "id": "c",
                              "text": "Total income"
                    },
                    {
                              "id": "d",
                              "text": "Total employment"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AD",
                              "statement": "Total spending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AD = total spending in economy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Total spending"
},
        },
        {
          id: "ciealecon-u2-ad-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the components of AD?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AD components",
                              "statement": "C+I+G+X-M."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Consumption, investment, government, net exports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "C+I+G+(X-M) formula.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "C+I+G+(X-M)"
},
        },
        {
          id: "ciealecon-u2-ad-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the multiplier effect?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Multiplier",
                              "statement": "Spending amplification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Initial spending → income → more spending → larger effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Multiplier > 1 amplifies impact.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Depends on marginal propensity to consume.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Spending amplification"
},
        },
        {
          id: "ciealecon-u2-ad-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define AD, AS, SRAS, LRAS, multiplier, stagflation. (b) What is AD? (c) What are AD components? (d) What is SRAS vs LRAS? (e) What causes AD shifts? (f) What causes AS shifts? (g) What is multiplier? (h) Evaluate effectiveness of demand management policies.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "AD/AS",
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
                              "reasoning": "(b) Total spending.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) C+I+G+(X-M).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Sticky vs full employment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Policy, confidence, exchange rates.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Technology, labour, resources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Spending amplification.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "AD/AS analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealecon-u2-ad-notes",
      title: "AD/AS — notes",
      summary: "AD=C+I+G+(X-M). SRAS upward sloping, LRAS vertical at full employment.",
      sections: [
        { heading: "Key idea", body: "AD/AS determines short-run output and prices; LRAS determines long-run growth." },
        { heading: "Multiplier", body: "Initial spending change amplified through circular flow." },
      ],
    },
  ],
};
