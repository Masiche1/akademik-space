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
                              "text": "Total output"
                    },
                    {
                              "id": "b",
                              "text": "Total spending on goods/services"
                    },
                    {
                              "id": "c",
                              "text": "Total employment"
                    },
                    {
                              "id": "d",
                              "text": "Total income"
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "ciealecon-u2-ad-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Aggregate demand is equal to",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "C + I + G + (X - M)" },
            { "id": "b", "text": "C + S + T + M" },
            { "id": "c", "text": "Exports - imports only" },
            { "id": "d", "text": "Wages + profit + rent + interest" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [ { "kind": "formula", "name": "AD", "statement": "AD = C + I + G + (X - M)." } ],
          "steps": [ { "reasoning": "Aggregate demand is total planned expenditure: consumption, investment, government spending and net exports.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** C + I + G + (X - M)"
},
        },
        {
          id: "ciealecon-u2-ad-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The short-run aggregate supply curve slopes upwards because",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "wages and prices are sticky in the short run" },
            { "id": "b", "text": "all resources are perfectly mobile" },
            { "id": "c", "text": "the economy is always at full employment" },
            { "id": "d", "text": "technology changes instantly" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "SRAS", "statement": "Upward sloping — sticky wages and prices." } ],
          "steps": [ { "reasoning": "With sticky prices and wages, a higher price level makes production more profitable, so firms raise output.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** wages and prices are sticky in the short run"
},
        },
        {
          id: "ciealecon-u2-ad-q7", difficulty: "core", totalMarks: 1,
          stem: "The long-run aggregate supply curve is",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "upward sloping" },
            { "id": "b", "text": "vertical at the full-employment level of output" },
            { "id": "c", "text": "downward sloping" },
            { "id": "d", "text": "horizontal" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "definition", "name": "LRAS", "statement": "Vertical at full employment output." } ],
          "steps": [ { "reasoning": "In the long run all prices and wages adjust, so output is determined by the economy's productive capacity, not the price level.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(b)** vertical at the full-employment level of output"
},
        },
        {
          id: "ciealecon-u2-ad-q8", difficulty: "core", totalMarks: 1,
          stem: "An increase in aggregate demand will",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "raise both real output and the price level in the short run" },
            { "id": "b", "text": "only raise the price level with no change in output" },
            { "id": "c", "text": "shift the LRAS curve to the right" },
            { "id": "d", "text": "lower the price level and raise output" }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "AD increase", "statement": "Shifts AD right — output and prices rise in SR." } ],
          "steps": [ { "reasoning": "Along an upward-sloping SRAS, higher AD raises both output and the price level; only LRAS shifts change long-run output.", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "**(a)** raise both real output and the price level in the short run"
},
        },
        {
          id: "ciealecon-u2-ad-q9", difficulty: "challenge", totalMarks: 1,
          stem: "An increase in AD when the economy is already at full employment is likely to cause",
          response: {
          "type": "mcq",
          "choices": [
            { "id": "a", "text": "an outward shift of LRAS" },
            { "id": "b", "text": "mainly demand-pull inflation rather than extra output" },
            { "id": "c", "text": "a fall in the price level" },
            { "id": "d", "text": "a large rise in real output" }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [ { "kind": "principle", "name": "AD near full employment", "statement": "Extra demand is inflationary." } ],
          "steps": [ { "reasoning": "At full employment output cannot rise much, so extra AD bids up prices — demand-pull inflation.", "marks": 1, "markCode": "A" } ],
          "finalAnswer": "**(b)** mainly demand-pull inflation rather than extra output"
},
        },
        {
          id: "ciealecon-u2-ad-q10", difficulty: "foundation", totalMarks: 1,
          stem: "If the marginal propensity to consume (MPC) is 0.8, the multiplier is",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 5 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Multiplier", "statement": "1 / (1 - MPC)." } ],
          "steps": [ { "reasoning": "Multiplier = 1 / (1 - 0.8) = 5.", "working": "1 / 0.2 = 5", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "5"
},
        },
        {
          id: "ciealecon-u2-ad-q11", difficulty: "core", totalMarks: 1,
          stem: "An initial injection of $100m is made and the MPC is 0.75. Calculate the total eventual change in national income.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 400 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "Multiplier effect", "statement": "Total change = injection x multiplier." } ],
          "steps": [ { "reasoning": "Multiplier = 1/(1-0.75) = 4; total change = 100 x 4 = 400.", "working": "100 / (1 - 0.75) = 400", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "$400m"
},
        },
        {
          id: "ciealecon-u2-ad-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Consumption is $70bn, investment $25bn, government spending $20bn and net exports -$5bn. Calculate aggregate demand.",
          response: { "type": "numeric", "parts": [ { "label": "a", "answer": 110 } ] },
          markscheme: {
          "principles": [ { "kind": "formula", "name": "AD", "statement": "AD = C + I + G + (X - M)." } ],
          "steps": [ { "reasoning": "70 + 25 + 20 - 5 = 110.", "working": "70 + 25 + 20 - 5 = 110", "marks": 1, "markCode": "M" } ],
          "finalAnswer": "$110bn"
},
        },
        {
          id: "ciealecon-u2-ad-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Explain why the short-run aggregate supply curve slopes upwards.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "principle", "name": "SRAS", "statement": "Sticky wages and prices." } ],
          "steps": [
            { "reasoning": "In the short run wages and input prices are sticky — contracts and menus adjust slowly.", "marks": 1, "markCode": "M" },
            { "reasoning": "So when the general price level rises, firms' output prices rise faster than their costs, making extra production profitable and raising output.", "marks": 1, "markCode": "M" }
          ],
          "finalAnswer": "Sticky wages/prices mean higher prices raise profits, so firms increase output."
},
        },
        {
          id: "ciealecon-u2-ad-q14", difficulty: "core", totalMarks: 3,
          stem: "Explain how a rise in interest rates affects aggregate demand and the price level.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "principle", "name": "Interest rates and AD", "statement": "Higher rates reduce C and I." } ],
          "steps": [
            { "reasoning": "Higher interest rates raise the cost of borrowing and reward saving, so consumption and investment spending fall.", "marks": 1, "markCode": "M" },
            { "reasoning": "Lower C and I reduce aggregate demand, shifting the AD curve to the left.", "marks": 1, "markCode": "M" },
            { "reasoning": "With lower AD, both real output and the price level fall in the short run — useful for controlling inflation but risking unemployment.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Higher rates cut C and I → AD shifts left → lower output and price level."
},
        },
        {
          id: "ciealecon-u2-ad-q15", difficulty: "core", totalMarks: 6,
          stem: "Answer the following on the AD/AS model.",
          parts: [
            { "label": "a", "prompt": "List the four components of aggregate demand.", "marks": 2 },
            { "label": "b", "prompt": "Explain one determinant that can shift the AD curve.", "marks": 2 },
            { "label": "c", "prompt": "Explain one determinant that can shift the LRAS curve.", "marks": 2 }
          ],
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "AD/AS", "statement": "Components and determinants." } ],
          "steps": [
            { "reasoning": "Consumption (C), investment (I), government spending (G) and net exports (X - M).", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "All four components correctly listed.", "marks": 1, "markCode": "M", "part": "a" },
            { "reasoning": "E.g. a fall in interest rates, higher consumer confidence, or a depreciation of the exchange rate raises AD.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "Explanation linking the factor to a change in total spending.", "marks": 1, "markCode": "M", "part": "b" },
            { "reasoning": "E.g. improved technology, more labour or capital, or better education raises productive capacity.", "marks": 1, "markCode": "M", "part": "c" },
            { "reasoning": "Explanation linking the factor to a shift of LRAS right and higher potential output.", "marks": 1, "markCode": "A", "part": "c" }
          ],
          "finalAnswer": "AD = C+I+G+(X-M); AD shifts with confidence, rates, exchange rates; LRAS shifts with technology and resources."
},
        },
        {
          id: "ciealecon-u2-ad-q16", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate demand-side and supply-side policies for reducing cyclical unemployment in a recession.",
          response: { "type": "open" },
          markscheme: {
          "principles": [ { "kind": "technique", "name": "Policy evaluation", "statement": "Demand vs supply-side in recession." } ],
          "steps": [
            { "reasoning": "Expansionary fiscal and monetary policy raise AD, increasing output and hiring — directly tackling demand-deficient unemployment.", "marks": 1, "markCode": "M" },
            { "reasoning": "However, if the economy is near full capacity, extra AD mainly causes inflation rather than extra jobs.", "marks": 1, "markCode": "M" },
            { "reasoning": "Expansionary policy may widen the budget deficit or build up debt, creating future problems.", "marks": 1, "markCode": "M" },
            { "reasoning": "Supply-side policies (training, deregulation) improve labour market flexibility but work slowly and do not fix a shortfall in demand.", "marks": 1, "markCode": "M" },
            { "reasoning": "Automatic stabilisers such as unemployment benefits partly cushion the fall in income during a recession.", "marks": 1, "markCode": "M" },
            { "reasoning": "Best results come from combining short-run demand stimulus with long-run supply-side reform, depending on spare capacity.", "marks": 1, "markCode": "A" }
          ],
          "finalAnswer": "Demand-side policy directly reduces cyclical unemployment but risks inflation; supply-side helps long-term but is slow."
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
