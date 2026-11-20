import type { Lesson } from "../../../types.ts";

export const lesson284: Lesson = {
  id: "cieiec-u2-lesson-2-4",
  code: "2-4",
  title: "Macroeconomics: Aggregate Demand and Supply",
  goal: "I CAN explain aggregate demand, aggregate supply and macroeconomic equilibrium.",
  standards: ["Cambridge IGCSE Economics 0455", "Paper 6: macroeconomics"],
  
  vocabulary: [
    { term: "Aggregate demand (AD)", definition: "Total demand for goods/services in economy." },
    { term: "Aggregate supply (AS)", definition: "Total output economy can produce." },
    { term: "Macroeconomic equilibrium", definition: "Where AD=AS." },
    { term: "Inflation", definition: "Sustained rise in general price level." },
    { term: "Unemployment", definition: "People without work seeking employment." },
    { term: "Economic growth", definition: "Increase in real GDP." },
  ],
  concepts: [
    {
      id: "cieiec-u2-s4-ad",
      title: "Aggregate demand and supply",
      skill: "Understand macroeconomic equilibrium.",
      lesson: {
        sections: [
          {
            heading: "Aggregate demand",
            body: "Total spending: consumption + investment + government spending + net exports (C+I+G+X-M). Downward sloping — higher prices reduce purchasing power.",
          },
          {
            heading: "Aggregate supply",
            body: "Total output economy can produce. Short-run AS upward sloping (sticky wages/prices). Long-run AS vertical (full employment).",
          },
          {
            heading: "Macroeconomic equilibrium",
            body: "Where AD=AS determines output and price level. Shifts in AD/AS affect growth, inflation, unemployment.",
          },
        ],
        keyFormulas: [
          { name: "AD", statement: "C+I+G+(X-M)" },
          { name: "Equilibrium", statement: "AD = AS" },
          { name: "Growth", statement: "increase in real GDP" },
        ],
        workedExample: {
          problem: "Government increases spending. What happens to AD and equilibrium?",
          solution: "AD shifts right → higher output and price level (inflationary pressure).",
        },
      },
      questions: [
        {
          id: "cieiec-u2-ad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is aggregate demand?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Total demand for goods/services in economy"
                    },
                    {
                              "id": "b",
                              "text": "Individual demand"
                    },
                    {
                              "id": "c",
                              "text": "Supply of goods"
                    },
                    {
                              "id": "d",
                              "text": "A type of tax"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "AD",
                              "statement": "Total demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AD = total spending in economy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Total demand"
},
        },
        {
          id: "cieiec-u2-ad-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the components of aggregate demand?",
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
                              "reasoning": "Consumption, investment, government spending, net exports.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "C+I+G+(X-M).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "C+I+G+(X-M)"
},
        },
        {
          id: "cieiec-u2-ad-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What happens when AD increases?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "AD shifts",
                              "statement": "Impact on equilibrium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AD shifts right → higher output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Higher price level (inflation pressure).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Depends on AS curve shape.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Higher output and prices"
},
        },
        {
          id: "cieiec-u2-ad-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define aggregate demand, aggregate supply, macroeconomic equilibrium, inflation, unemployment, economic growth. (b) What is AD? (c) What are AD components? (d) What is AS? (e) What is macroeconomic equilibrium? (f) What happens when AD increases? (g) What causes inflation? (h) Draw an AD/AS diagram showing equilibrium.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "AD/AS",
                              "statement": "Macroeconomic equilibrium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Total demand.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) C+I+G+(X-M).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Total output capacity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) AD=AS point.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Higher output/prices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) AD > AS capacity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid AD/AS diagram.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Aggregate demand and supply."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieiec-u2-ad-notes",
      title: "AD/AS — notes",
      summary: "AD=C+I+G+(X-M); AS=total output. Equilibrium=AD=AS. Shifts affect growth/inflation/unemployment.",
      sections: [
        { heading: "Key idea", body: "Macroeconomic equilibrium determines national output and price level." },
        { heading: "Policy", body: "Fiscal/monetary policy shift AD to achieve macro objectives." },
      ],
    },
  ],
};
