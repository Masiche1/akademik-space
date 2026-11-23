import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "ebz10-u8-lesson-8-1",
  code: "8-1",
  title: "Economic Influences on Business",
  goal: "I CAN explain how economic conditions and government economic policy affect business decisions.",
  standards: ["Edexcel IGCSE Business 4BS0 — External Influences on Business Activity"],
  
  vocabulary: [
    { term: "Economic growth", definition: "Increase in total output of an economy over time." },
    { term: "Inflation", definition: "General rise in the price level of goods and services." },
    { term: "Unemployment", definition: "Proportion of the workforce without work but seeking it." },
    { term: "Interest rate", definition: "Price of borrowing money, set by the central bank." },
    { term: "Exchange rate", definition: "Value of one currency in terms of another." },
    { term: "Fiscal policy", definition: "Government spending and taxation decisions." },
    { term: "Monetary policy", definition: "Central bank control of interest rates and money supply." },
  ],
  concepts: [
    {
      id: "ebz10-u8-economic",
      title: "Economic Conditions",
      skill: "Explain how growth, inflation, unemployment, interest and exchange rates affect business.",
      lesson: {
        sections: [
          {
            heading: "Key indicators",
            body: "**Economic growth** raises demand — good for sales but can push up wages and costs. **Inflation** erodes purchasing power: businesses must raise prices or margins shrink; lenders dislike uncertainty. **Unemployment** means weaker demand for normal goods but cheaper, available labour. **Interest rates** affect borrowing costs and consumer spending on credit. **Exchange rates** matter for importers/exporters — a weaker domestic currency makes exports cheaper abroad but imports dearer.",
          },
          {
            heading: "Business responses",
            body: "Managers monitor these indicators to plan. Rising interest rates → postpone borrowing for expansion. High inflation → review pricing, index wages, lock in supplier contracts. Strong exchange rate → importers gain, exporters struggle — exporters may cut costs or find new markets.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A country's currency weakens against the euro. How does this affect a domestic exporter and an importer?",
          solution: "Exporter: goods cheaper for euro buyers → likely higher demand. Importer: euro goods cost more in domestic currency → higher input costs or prices.",
        },
      },
      questions: [
        {
          id: "ebz10-u8-econ-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is inflation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A general rise in the price level"
                    },
                    {
                              "id": "b",
                              "text": "A fall in economic output"
                    },
                    {
                              "id": "c",
                              "text": "An increase in unemployment"
                    },
                    {
                              "id": "d",
                              "text": "A rise in interest rates"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Inflation",
                              "statement": "General rise in prices over time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inflation is measured by price indices such as the consumer price index.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** General rise in prices"
},
        },
        {
          id: "ebz10-u8-econ-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two ways rising interest rates affect a business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Interest rate effects",
                              "statement": "Costlier borrowing, weaker credit demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Borrowing becomes more expensive — loans and overdrafts cost more.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Consumers cut spending on credit purchases, reducing sales.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Returns on savings rise, encouraging saving over spending.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Higher borrowing costs and weaker consumer demand."
},
        },
        {
          id: "ebz10-u8-econ-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how high inflation can affect a business's pricing decisions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Inflation and pricing",
                              "statement": "Costs rise; prices must follow or margins fall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Input costs rise during inflation — raw materials, wages, energy.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fixed contracts may delay the impact, but eventually costs feed through.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "If prices are not raised, profit margins shrink.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Raising prices risks losing customers to competitors — a pricing dilemma.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Inflation pushes costs up; prices must rise to protect margins, but demand may fall.",
          "commonErrors": [
                    "Only one side of the dilemma explained."
          ]
},
        },
        {
          id: "ebz10-u8-econ-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "An economy enters recession: GDP falls, unemployment rises and consumer confidence drops.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways this affects a car manufacturer.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two responses the manufacturer could make.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Recession effects",
                              "statement": "Falling demand, cheaper labour, cautious spending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Car sales fall as consumers postpone big purchases.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Unemployment rises — both demand for cars and labour supply change.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Credit becomes harder to get, further reducing purchases.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Cut output, reduce workforce or offer redundancies; focus on essential models.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Strengthen marketing to value-conscious buyers; manage cash carefully.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) falling demand, credit tightening (b) cut output, target value buyers, manage cash."
},
        },
        {
          id: "ebz10-u8-econ-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country's exchange rate against the dollar strengthens by 20%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the effect on an exporter of electronics and an importer of components.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest two strategies each business could use.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Exchange rate effects",
                              "statement": "Strong currency = dearer exports, cheaper imports."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Exporter: goods cost more in dollars — demand may fall.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Importer: dollar components cheaper — input costs fall.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Importer gains margin or can cut prices.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Exporter: cut costs, find new markets, differentiate on quality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Importer: lock in favourable rates, renegotiate contracts, pass savings to customers.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) exporter hurt, importer helped (b) exporter: efficiency/new markets; importer: lock in gains."
},
        },
        {
          id: "ebz10-u8-econ-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The government raises interest rates to control inflation. A furniture business has a large loan and sells mostly on credit to consumers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two ways the rate rise affects this business directly.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways it affects the business indirectly through customers.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate how the business should respond.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Interest rate transmission",
                              "statement": "Direct cost effects plus demand effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Loan repayments become more expensive — interest costs rise.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Any new borrowing for stock or expansion costs more.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Customers' credit costs rise, reducing demand for big-ticket furniture.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Mortgages cost more, leaving households less to spend.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Consumers postpone furniture purchases — discretionary spending falls first.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Demand shifts to cheaper products or second-hand goods.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Business may need promotions or financing offers to sustain sales.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Responses: renegotiate loan terms, cut costs, promote value lines, manage cash tightly; monitor demand before investing.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Rates may fall later — avoid over-reacting with permanent cuts.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Direct: higher loan and borrowing costs. Indirect: weaker consumer demand. Respond with cost control, value products and careful investment."
},
        },
      ],
    },
    {
      id: "ebz10-u8-govpolicy",
      title: "Government Economic Policy",
      skill: "Explain fiscal and monetary policy and their effects on business.",
      lesson: {
        sections: [
          {
            heading: "Fiscal policy",
            body: "Government uses **taxation** and **government spending** to steer the economy. Raising taxes or cutting spending cools demand (used against inflation); cutting taxes or increasing spending stimulates demand (used in recession). Businesses feel this through consumer spending power, contracts and grants.",
          },
          {
            heading: "Monetary policy",
            body: "The **central bank** sets **interest rates** and controls the **money supply**. Raising rates reduces borrowing and spending (fights inflation); lowering rates encourages borrowing and investment (boosts growth). Businesses must track rate decisions because they affect loan costs, customer demand and exchange rates.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "Inflation is rising. What should the central bank do and how does it reach businesses?",
          solution: "Raise interest rates — borrowing becomes costly, spending and demand fall, easing price pressure. Businesses face higher loan costs and weaker sales.",
        },
      },
      questions: [
        {
          id: "ebz10-u8-pol-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is fiscal policy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Government decisions on taxation and spending"
                    },
                    {
                              "id": "b",
                              "text": "Central bank interest rate decisions"
                    },
                    {
                              "id": "c",
                              "text": "Company budget setting"
                    },
                    {
                              "id": "d",
                              "text": "Import and export rules"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fiscal policy",
                              "statement": "Taxation and government spending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fiscal policy is run by government, not the central bank.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(a)** Taxation and spending"
},
        },
        {
          id: "ebz10-u8-pol-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two tools of monetary policy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Monetary policy",
                              "statement": "Interest rates and money supply."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Setting interest rates.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Controlling the money supply / quantitative easing.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Both are used to control inflation and growth.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Interest rates and money supply control."
},
        },
        {
          id: "ebz10-u8-pol-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a government could use fiscal policy to reduce unemployment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Expansionary fiscal policy",
                              "statement": "More spending or lower taxes to boost demand and jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Increase government spending on infrastructure or services.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This creates jobs directly and raises demand for business output.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cutting taxes leaves households more to spend, lifting demand.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Firms hire more workers to meet higher demand — unemployment falls.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Higher spending or lower taxes boost demand, output and employment."
},
        },
        {
          id: "ebz10-u8-pol-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Inflation in the economy has reached 8% and the government wants it below 3%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe one fiscal and one monetary measure the authorities could use.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the likely short-term effect of each on a small business.",
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
                              "name": "Contractionary policy",
                              "statement": "Higher taxes/spending cuts and higher interest rates cool demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Fiscal: raise taxes or cut government spending to reduce demand.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Monetary: raise interest rates to make borrowing and spending costlier.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Both aim to reduce aggregate demand and price pressure.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Higher taxes cut customer spending power; higher rates raise loan costs.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Small business may see weaker sales and must control costs.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) tax rises/spending cuts + higher interest rates (b) weaker demand, costlier borrowing."
},
        },
        {
          id: "ebz10-u8-pol-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An economy is in recession with rising unemployment. The government is debating policy responses.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two demand-side measures government could take.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one supply-side measure and why it might help.",
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
                              "name": "Policy mix",
                              "statement": "Demand stimulus plus supply-side reform."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Cut interest rates to encourage borrowing and spending.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Increase government spending on projects to create jobs directly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Cut taxes to raise household disposable income and demand.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Supply-side: invest in education/training to raise workforce skills.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Or reduce business regulation to lower costs and encourage hiring.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Supply-side measures improve long-run competitiveness and employment.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) lower rates, more spending, tax cuts (b) training/regulation reform for long-run jobs."
},
        },
        {
          id: "ebz10-u8-pol-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The central bank raises interest rates from 2% to 5% to fight inflation. A construction company relies heavily on bank loans and employs many workers.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two direct effects of the rate rise on the company.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two indirect effects through the wider economy.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the company's options and recommend a course of action.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Monetary tightening",
                              "statement": "Costlier credit reduces investment and demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Loan interest payments rise sharply — costs increase.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) New borrowing for projects becomes expensive or unavailable.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Mortgage costs rise for households — fewer people buy homes.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Construction demand falls as projects are postponed.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Consumers cut spending — less demand for commercial building work.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Firms delay investment, reducing demand for the company's services.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Unemployment may rise as demand contracts across the economy.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Options: renegotiate loans, focus on essential/maintenance work, cut costs, seek fixed-rate finance.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) Recommendation: protect cash, avoid new debt, diversify into repair/maintenance contracts.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Direct: higher loan costs, less new borrowing. Indirect: weaker construction demand. Act by controlling debt and costs, diversifying into maintenance work."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u8-env1-notes",
      title: "Economic influences — notes",
      summary: "Growth, inflation, unemployment, interest and exchange rates shape demand and costs. Government uses fiscal and monetary policy to steer the economy.",
      sections: [
        { heading: "Indicators", body: "Growth = more demand; inflation = rising prices/costs; unemployment = weaker demand; interest rates = borrowing cost; exchange rates = trade competitiveness." },
        { heading: "Fiscal policy", body: "Taxes and government spending — stimulate in recession, cool in inflation." },
        { heading: "Monetary policy", body: "Central bank sets interest rates and money supply — main tool against inflation and for growth." },
      ],
    },
  ],
};
