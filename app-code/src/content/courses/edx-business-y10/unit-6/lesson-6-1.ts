import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ebz10-u6-lesson-6-1",
  code: "6-1",
  title: "The Economic Environment",
  goal: "I CAN explain key economic indicators and their effects on business.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences"],
  
  vocabulary: [
    { term: "Gross domestic product (GDP)", definition: "Total value of goods and services produced in an economy." },
    { term: "Economic growth", definition: "Increase in real GDP over time." },
    { term: "Recession", definition: "Period of falling output and economic activity." },
    { term: "Inflation", definition: "General rise in prices over time." },
    { term: "Unemployment", definition: "People able and willing to work but without jobs." },
    { term: "Interest rate", definition: "Cost of borrowing or return on saving money." },
    { term: "Exchange rate", definition: "Value of one currency in terms of another." },
  ],
  concepts: [
    {
      id: "ebz10-u6-economic-indicators",
      title: "Key Economic Indicators",
      skill: "Interpret GDP, inflation, unemployment, interest rates and exchange rates.",
      lesson: {
        sections: [
          {
            heading: "Output and employment",
            body: "**GDP** measures total economic output. Rising GDP indicates growth; falling GDP may signal recession. **Unemployment** affects demand, labour costs and consumer confidence. Low unemployment can make recruitment harder and wages rise; high unemployment can reduce spending.",
          },
          {
            heading: "Prices, borrowing and currency",
            body: "**Inflation** erodes purchasing power and raises costs. **Interest rates** influence borrowing, saving, investment and mortgage costs. **Exchange rates** affect export competitiveness and import costs: a weaker currency can help exporters but make imports dearer.",
          },
          {
            heading: "Interconnections",
            body: "Economic indicators are linked. Higher inflation may lead to higher interest rates; stronger growth may increase employment but also inflationary pressure. Businesses must monitor several indicators together rather than one in isolation.",
          },
        ],
        keyFormulas: [
          { name: "Inflation", statement: "General rise in the price level over time" },
          { name: "Exchange rate effect", statement: "Weaker currency → cheaper exports, dearer imports" },
        ],
        workedExample: {
          problem: "A country's currency weakens against the euro. How might this affect a car exporter?",
          solution: "Exports may become cheaper for European buyers, potentially increasing demand, while imported components become more expensive.",
        },
      },
      questions: [
        {
          id: "ebz10-u6-econ-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is inflation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A fall in the unemployment rate"
                    },
                    {
                              "id": "b",
                              "text": "A general rise in prices over time"
                    },
                    {
                              "id": "c",
                              "text": "An increase in exports"
                    },
                    {
                              "id": "d",
                              "text": "A rise in interest rates only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inflation",
                              "statement": "Sustained increase in the general price level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inflation means prices rise across the economy, reducing purchasing power.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A general rise in prices over time",
          "commonErrors": [
                    "Confusing inflation with interest rates or unemployment."
          ]
},
        },
        {
          id: "ebz10-u6-econ-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain what GDP measures and why businesses monitor it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GDP",
                              "statement": "Total value of output produced in an economy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GDP measures total goods and services produced in a country.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Rising GDP suggests economic growth and stronger demand.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Falling GDP may signal recession, affecting sales and investment.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "GDP measures total output; businesses use it to judge demand and economic conditions.",
          "commonErrors": [
                    "Only definition.",
                    "No business link."
          ]
},
        },
        {
          id: "ebz10-u6-econ-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways rising inflation can affect a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Inflation effects",
                              "statement": "Higher prices increase costs and may reduce demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Input costs such as materials, energy and wages may rise.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The business may need to raise prices, risking lower sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Borrowing costs may rise if interest rates increase to control inflation.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Inflation raises costs, pressures prices and may increase borrowing costs.",
          "commonErrors": [
                    "Only one effect.",
                    "No link to business decisions."
          ]
},
        },
        {
          id: "ebz10-u6-econ-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A central bank raises interest rates to control inflation.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two effects on consumers.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two effects on a business that relies on borrowing.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Interest rate effects",
                              "statement": "Higher rates reduce borrowing and spending."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mortgages and loan repayments become more expensive.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Consumers may spend less, reducing demand for goods and services.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "New borrowing becomes more costly and existing variable-rate debt costs more.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The business may delay investment or expansion because financing is expensive.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Higher rates reduce consumer spending and make business borrowing and investment more expensive.",
          "commonErrors": [
                    "Only consumer or only business effect.",
                    "No demand link."
          ]
},
        },
        {
          id: "ebz10-u6-econ-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A country's currency appreciates against its main trading partners.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two effects on exporters.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one effect on importers and one on consumers.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Exchange rate effects",
                              "statement": "A stronger currency makes exports dearer and imports cheaper."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Exports become more expensive for foreign buyers.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Demand for exports may fall, reducing sales and revenue.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Imports become cheaper, lowering input costs for importers.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Consumers may benefit from lower prices on imported goods.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "A stronger currency hurts exporters but can lower import and consumer prices.",
          "commonErrors": [
                    "Opposite exchange-rate effect.",
                    "No consumer or importer link."
          ]
},
        },
        {
          id: "ebz10-u6-econ-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An economy experiences rising GDP, low unemployment, high inflation and rising interest rates.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe what each indicator suggests.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two opportunities for businesses.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain two challenges for businesses.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Recommend how a retailer should respond.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Economic indicator analysis",
                              "statement": "Strong growth can bring demand but also cost and borrowing pressures."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rising GDP and low unemployment suggest strong demand.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "High inflation and interest rates signal rising costs and tighter credit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Higher employment may increase customer spending.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Growth may support expansion and new investment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Wages and input costs may rise, squeezing margins.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Higher interest rates make borrowing and stock financing more expensive.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "d",
                              "reasoning": "Control costs, review pricing and avoid unnecessary borrowing while demand is strong.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Strong demand but higher costs and borrowing; manage margins and finance carefully.",
          "commonErrors": [
                    "Only positive or only negative effects.",
                    "No retailer recommendation."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u6-business-cycle",
      title: "The Business Cycle",
      skill: "Explain how economic cycles affect business activity and responses.",
      lesson: {
        sections: [
          {
            heading: "Stages of the cycle",
            body: "The business cycle moves through **boom**, **slowdown**, **recession** and **recovery**. In a boom, demand, output and employment rise; in a recession, output, demand and confidence fall. Recovery follows when activity begins to improve.",
          },
          {
            heading: "Effects on businesses",
            body: "During growth, businesses may expand and hire. During recession, sales may fall, credit tighten and unemployment rise. Cyclical industries such as cars and construction are often more affected than essential goods and services.",
          },
          {
            heading: "Business responses",
            body: "Businesses can build cash reserves in good times, diversify markets, control costs, improve efficiency and adjust product ranges. Flexible staffing and careful inventory planning help them respond to changing demand.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A furniture retailer faces falling orders during a recession. What should it consider?",
          solution: "Reduce discretionary spending, control stock, offer promotions carefully and protect cash reserves until demand recovers.",
        },
      },
      questions: [
        {
          id: "ebz10-u6-cycle-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a recession?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A period of rapid economic growth"
                    },
                    {
                              "id": "b",
                              "text": "A period of falling output and economic activity"
                    },
                    {
                              "id": "c",
                              "text": "A rise in the exchange rate"
                    },
                    {
                              "id": "d",
                              "text": "A government budget surplus"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Recession",
                              "statement": "Period of declining economic activity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A recession involves falling output, demand and often rising unemployment.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** A period of falling output and economic activity",
          "commonErrors": [
                    "Confusing recession with inflation or growth."
          ]
},
        },
        {
          id: "ebz10-u6-cycle-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name the main stages of the business cycle.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Business cycle",
                              "statement": "Fluctuating stages of economic activity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Boom or expansion.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Slowdown or peak.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Recession and recovery.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Boom, slowdown, recession and recovery.",
          "commonErrors": [
                    "Missing recovery or slowdown.",
                    "Only two stages."
          ]
},
        },
        {
          id: "ebz10-u6-cycle-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two differences between a boom and a recession for businesses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Boom vs recession",
                              "statement": "High demand and confidence versus falling demand and uncertainty."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "During a boom, sales and demand are usually strong; during recession they fall.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Employment and investment are easier in a boom but harder in a recession.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Boom = high demand and investment; recession = weak demand and cautious spending.",
          "commonErrors": [
                    "No comparison.",
                    "Only one difference."
          ]
},
        },
        {
          id: "ebz10-u6-cycle-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A construction company expects a recession next year.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two likely effects on the company.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two responses it could make.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cyclical business response",
                              "statement": "Prepare for downturns before they arrive."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Demand for construction projects may fall as clients delay spending.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Credit may tighten and materials or labour costs may become harder to manage.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Build cash reserves and reduce unnecessary costs now.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Seek maintenance or smaller contracts and review staffing flexibly.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Expect weaker demand and tighter credit; build reserves, cut costs and diversify work.",
          "commonErrors": [
                    "No recession effect.",
                    "Response not suited to downturn."
          ]
},
        },
        {
          id: "ebz10-u6-cycle-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Consumer confidence falls sharply during an economic slowdown.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons confidence may fall.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two effects on different types of business.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Consumer confidence",
                              "statement": "Expectations about the future influence spending."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "People may fear job losses or falling income.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Negative news about the economy can make consumers cautious.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Luxury goods and big-ticket purchases are usually hit hardest.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Essential goods and discount retailers may be more resilient.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Falling confidence reduces discretionary spending; essential and value businesses may cope better.",
          "commonErrors": [
                    "All businesses affected equally.",
                    "No cause of confidence fall."
          ]
},
        },
        {
          id: "ebz10-u6-cycle-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bicycle manufacturer has record sales in a boom but expects a recession.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two opportunities during the boom.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two risks during the recession.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Suggest two preparations the firm should make now.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Evaluate whether diversification would help.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cycle management",
                              "statement": "Use good times to prepare for downturns."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Strong demand may allow higher output and prices.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The firm may invest in capacity or new products.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Bicycle sales may fall as consumers delay discretionary purchases.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Inventory and debt could become burdens if demand drops.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Build cash reserves and reduce stock levels before the downturn.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Review costs, contracts and staffing to improve flexibility.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Diversification into repairs or accessories may reduce reliance on new-bike sales.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use boom profits to prepare reserves and flexibility; diversify cautiously for recession resilience.",
          "commonErrors": [
                    "Only boom benefits.",
                    "No preparation or evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u6-economic-environment-notes",
      title: "The economic environment — notes",
      summary: "Monitor GDP, inflation, unemployment, interest and exchange rates; understand how the business cycle changes demand and risk.",
      sections: [
        { heading: "Indicators", body: "GDP shows output; inflation affects prices; unemployment affects demand; rates and currencies affect costs and trade." },
        { heading: "Cycle", body: "Boom → slowdown → recession → recovery changes business opportunities." },
        { heading: "Response", body: "Prepare with reserves, cost control, flexible staffing and diversification." },
      ],
    },
  ],
};
