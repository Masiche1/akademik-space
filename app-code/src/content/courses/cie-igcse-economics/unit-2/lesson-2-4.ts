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
                              "text": "Individual demand"
                    },
                    {
                              "id": "b",
                              "text": "Total demand for goods/services in economy"
                    },
                    {
                              "id": "c",
                              "text": "A type of tax"
                    },
                    {
                              "id": "d",
                              "text": "Supply of goods"
                    }
          ],
          "correctChoiceId": "b"
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
        {
          id: "cieiec-u2-ad-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Aggregate demand is made up of consumption, investment, government spending and:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Net exports"
                    },
                    {
                              "id": "b",
                              "text": "Imports only"
                    },
                    {
                              "id": "c",
                              "text": "Total savings"
                    },
                    {
                              "id": "d",
                              "text": "Taxes only"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aggregate demand",
                              "statement": "C + I + G + (X - M)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AD components: C, I, G and net exports (X - M).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Net exports"
},
        },
        {
          id: "cieiec-u2-ad-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The aggregate demand curve slopes downward mainly because:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Producers always cut output when prices rise"
                    },
                    {
                              "id": "b",
                              "text": "Imports always increase with the price level"
                    },
                    {
                              "id": "c",
                              "text": "Wages always fall when prices rise"
                    },
                    {
                              "id": "d",
                              "text": "A higher general price level reduces the real value of spending"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aggregate demand",
                              "statement": "Downward sloping AD."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher prices reduce purchasing power -> lower real AD.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Higher prices reduce real spending"
},
        },
        {
          id: "cieiec-u2-ad-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A rise in interest rates is most likely to reduce which component of aggregate demand?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Government spending"
                    },
                    {
                              "id": "b",
                              "text": "Investment"
                    },
                    {
                              "id": "c",
                              "text": "Aggregate supply only"
                    },
                    {
                              "id": "d",
                              "text": "Net exports"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "AD components",
                              "statement": "Interest rates affect I (and C)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Higher interest rates raise borrowing costs -> investment falls.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Investment"
},
        },
        {
          id: "cieiec-u2-ad-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "If aggregate demand increases while aggregate supply stays unchanged, the short-run result is typically:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Lower output with higher prices"
                    },
                    {
                              "id": "b",
                              "text": "Lower output and a lower price level"
                    },
                    {
                              "id": "c",
                              "text": "Higher output and a higher price level"
                    },
                    {
                              "id": "d",
                              "text": "Higher output with no change in prices"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Macroeconomic equilibrium",
                              "statement": "AD shift effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AD right -> new equilibrium with higher output and prices.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Higher output and price level"
},
        },
        {
          id: "cieiec-u2-ad-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Consumption = $300 billion, investment = $120 billion, government spending = $90 billion, exports = $70 billion, imports = $50 billion. Calculate aggregate demand.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 530,
                              "unit": "$ billion"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aggregate demand",
                              "statement": "C + I + G + (X - M)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Net exports = 70 - 50 = 20.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AD = 300 + 120 + 90 + 20.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AD = $530 billion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$530 billion"
},
        },
        {
          id: "cieiec-u2-ad-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "If consumption is $400 billion, investment $150 billion, government spending $200 billion, exports $80 billion and imports $60 billion, calculate aggregate demand.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 770,
                              "unit": "$ billion"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aggregate demand",
                              "statement": "C + I + G + (X - M)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AD = 400 + 150 + 200 + (80 - 60) = 770.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "AD = $770 billion.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$770 billion"
},
        },
        {
          id: "cieiec-u2-ad-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many components make up aggregate demand (C, I, G and net exports count as four)?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aggregate demand",
                              "statement": "Four components."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "C, I, G, (X - M) = 4 components.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "cieiec-u2-ad-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define aggregate demand and list its four components.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Aggregate demand",
                              "statement": "Total spending in economy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Total demand for goods/services in the economy.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "C + I + G + (X - M).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "C+I+G+(X-M)"
},
        },
        {
          id: "cieiec-u2-ad-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the short-run aggregate supply curve slopes upward.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Aggregate supply",
                              "statement": "Short-run AS."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wages and some prices are sticky in the short run.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Higher prices raise firms' revenue, encouraging more output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "In long run, wages/prices adjust -> AS becomes vertical.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Sticky prices/wages -> upward sloping"
},
        },
        {
          id: "cieiec-u2-ad-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what happens to national output and the price level if aggregate demand increases while aggregate supply is unchanged.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Macroeconomic equilibrium",
                              "statement": "AD shift effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AD shifts right along unchanged AS.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Output rises (economic growth).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Price level rises (inflationary pressure).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Output and price level both rise"
},
        },
        {
          id: "cieiec-u2-ad-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between economic growth and inflation as outcomes of AD/AS equilibrium.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Growth vs inflation",
                              "statement": "Output vs price outcomes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Growth = increase in real GDP / output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Inflation = sustained rise in general price level.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both can result from rising AD, but inflation dominates near full capacity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Growth=output up; inflation=prices up"
},
        },
        {
          id: "cieiec-u2-ad-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that governments should always use demand-side policies to reduce unemployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Macroeconomic policy",
                              "statement": "Demand-side evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit: boosting AD can raise output and jobs in a recession.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cost: if economy is near full capacity, AD rise causes inflation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Supply-side causes of unemployment need supply-side policies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Timing and lags make demand management unreliable.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Judgement: useful in recessions but not a universal solution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Useful in recession, not always"
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
