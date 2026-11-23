import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ecn10-u5-lesson-5-3",
  code: "5-3",
  title: "Redistribution and Government Policy",
  goal: "I CAN explain methods of redistribution and evaluate their effectiveness and trade-offs.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Government and the Economy: redistribution"],
  
  vocabulary: [
    { term: "Redistribution", definition: "The transfer of income or wealth from richer to poorer households." },
    { term: "Progressive tax", definition: "Tax where the rate rises as income rises." },
    { term: "Regressive tax", definition: "Tax that takes a larger share of poorer households' income." },
    { term: "Transfer payment", definition: "Government payment to individuals — benefits, pensions, tax credits." },
    { term: "Minimum wage", definition: "The lowest legal hourly wage employers may pay." },
    { term: "Poverty trap", definition: "A situation where earning more causes loss of benefits, leaving people no better off." },
  ],
  concepts: [
    {
      id: "ecn10-u5-red",
      title: "Methods of Redistribution",
      skill: "Identify and explain the main tools governments use to redistribute income.",
      lesson: {
        sections: [
          {
            heading: "Taxation",
            body: "**Progressive taxes** — income tax and corporation tax rise with income, taking proportionally more from the rich. **Regressive taxes** — VAT and excise duties take the same percentage from all, hitting the poor harder as they spend a larger share of income. **Indirect taxes** can also discourage harmful consumption.",
          },
          {
            heading: "Benefits and transfers",
            body: "**Transfer payments** move income directly: unemployment benefits, pensions, disability benefits, tax credits, housing benefit. They support those unable to work or on low incomes. Means-tested benefits target the poorest but can create **poverty traps** if benefits are withdrawn too quickly as earnings rise.",
          },
          {
            heading: "Wage and price policies",
            body: "**Minimum wage** sets a floor on pay — raises incomes for low-paid workers but may reduce employment if set too high. **Price controls** and subsidies on essentials (food, energy) can help the poor but may distort markets. **In-kind transfers** (free healthcare, education) redistribute without cash.",
          },
        ],
        keyFormulas: [
          { name: "Progressive tax", statement: "Rate rises with income → reduces inequality" },
          { name: "Transfer payment", statement: "Direct income support — benefits, pensions, credits" },
          { name: "Minimum wage", statement: "Legal floor on wages" },
        ],
        workedExample: {
          problem: "A worker earns £100/week and receives £50/week in benefits. If they earn £150, benefits fall to £10. Is the worker better off?",
          solution: "Total income was £150, now £160 — only £10 better off despite £50 more earnings. This is a poverty trap effect.",
        },
      },
      questions: [
        {
          id: "ecn10-u5-red-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is redistribution of income?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sharing a company's profits among workers"
                    },
                    {
                              "id": "b",
                              "text": "Transferring income from richer to poorer households"
                    },
                    {
                              "id": "c",
                              "text": "Printing more money"
                    },
                    {
                              "id": "d",
                              "text": "Raising all taxes equally"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Redistribution",
                              "statement": "Income transferred from rich to poor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Redistribution shifts income via taxes and benefits.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Transferring income from richer to poorer",
          "commonErrors": [
                    "Confusing with economic growth."
          ]
},
        },
        {
          id: "ecn10-u5-red-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give three methods governments use to redistribute income.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Redistribution tools",
                              "statement": "Progressive tax, benefits, minimum wage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Progressive taxation — higher rates on higher incomes.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Transfer payments — benefits, pensions, tax credits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Minimum wage and price/subsidy policies.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Progressive tax, benefits/transfers, minimum wage.",
          "commonErrors": [
                    "Listing only one method."
          ]
},
        },
        {
          id: "ecn10-u5-red-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how progressive taxation redistributes income.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Progressive tax",
                              "statement": "Higher earners pay a higher percentage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tax rates rise as income rises — e.g. 20% then 40% bands.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "High earners pay proportionally more of their income in tax.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Revenue funds benefits and services for poorer households.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Net effect: disposable income becomes more equal.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "High earners pay more % → revenue funds transfers → less inequality.",
          "commonErrors": [
                    "Confusing progressive with regressive."
          ]
},
        },
        {
          id: "ecn10-u5-red-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government raises the minimum wage by 10%.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two groups that gain from the rise.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one group that may lose.",
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
                              "name": "Minimum wage",
                              "statement": "Raises pay for low-wage workers; may cost jobs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Low-paid workers earn more — reduced poverty.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Workers near the minimum wage also benefit via pay spillovers.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Employers facing higher labour costs may cut jobs or hours.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Some low-skilled workers priced out of employment entirely.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) low-paid workers gain (b) employers/jobs at risk",
          "commonErrors": [
                    "One-sided analysis."
          ]
},
        },
        {
          id: "ecn10-u5-red-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A means-tested benefit is withdrawn at 50p for every £1 earned above a threshold.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how this creates a poverty trap.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how the trap could be reduced.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Poverty trap",
                              "statement": "Benefit withdrawal can leave workers no better off."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) For every extra £1 earned, benefits fall by 50p.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Net gain from working is only 50p per £1 — a high marginal tax rate.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Reduce the withdrawal rate so work pays more.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Raise the threshold or taper benefits more gradually.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) 50% withdrawal → weak incentive to work (b) lower taper or raise threshold",
          "commonErrors": [
                    "Not quantifying the withdrawal rate."
          ]
},
        },
        {
          id: "ecn10-u5-red-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government wants to reduce poverty and inequality using redistribution.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two taxes that could raise revenue for redistribution.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits that could be funded by that revenue.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the trade-off between equity and incentives.",
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
                              "name": "Redistribution policy",
                              "statement": "Taxes fund benefits; generosity must balance incentives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Progressive income tax raises revenue from high earners.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Taxes on wealth, inheritance or land also redistribute.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Income support benefits for the unemployed and low-paid.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) In-kind support — healthcare, education, housing subsidies.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Too generous benefits weaken work incentives; too little leaves poverty — a balance is needed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) income/wealth tax (b) income benefits, in-kind support (c) balance equity vs incentives",
          "commonErrors": [
                    "No evaluation of the incentive trade-off."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u5-rede",
      title: "Evaluating Redistribution Policies",
      skill: "Analyse the effectiveness and trade-offs of redistribution policies.",
      lesson: {
        sections: [
          {
            heading: "Effectiveness",
            body: "Redistribution **works** when benefits reach the target group, poverty and inequality measurably fall, and work incentives are preserved. It **fails** when benefits are captured by the non-poor, poverty traps discourage work, or high taxes shrink the economy.",
          },
          {
            heading: "The equity-efficiency trade-off",
            body: "More redistribution improves **equity** but can reduce **efficiency**: high taxes may reduce work effort, saving and investment; generous benefits may create dependency. The optimal level balances fairness against incentives — a central policy dilemma.",
          },
          {
            heading: "Design features that help",
            body: "**Tapered benefits** withdraw gradually to avoid poverty traps. **Tax credits** top up low incomes while rewarding work. **Universal services** (health, education) avoid stigma and targeting errors. **Conditionality** (benefits linked to training or work) can preserve incentives.",
          },
        ],
        keyFormulas: [
          { name: "Equity-efficiency trade-off", statement: "More redistribution = more equity, possibly less efficiency" },
          { name: "Poverty trap", statement: "Benefit withdrawal can make work pay little" },
        ],
        workedExample: {
          problem: "Country A gives generous flat benefits; Country B uses tapered tax credits. Which better preserves work incentives?",
          solution: "B — tapered credits keep benefits as earnings rise, so work always pays; flat benefits may trap recipients.",
        },
      },
      questions: [
        {
          id: "ecn10-u5-rede-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the equity-efficiency trade-off in redistribution?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Choosing between two equal options"
                    },
                    {
                              "id": "b",
                              "text": "More fairness may reduce work incentives and efficiency"
                    },
                    {
                              "id": "c",
                              "text": "Efficiency always requires inequality"
                    },
                    {
                              "id": "d",
                              "text": "A tax on efficient firms"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equity-efficiency",
                              "statement": "Fairness vs incentives trade-off."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Redistribution improves equity but can weaken incentives.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Fairness may reduce incentives",
          "commonErrors": [
                    "Thinking there is no trade-off."
          ]
},
        },
        {
          id: "ecn10-u5-rede-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give two features of a well-designed benefit system.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Benefit design",
                              "statement": "Taper, target, preserve incentives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tapered withdrawal — benefits fall gradually as earnings rise.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Means-testing — targets those most in need.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Incentive-compatible — work always leaves the household better off.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Tapered withdrawal, targeting, preserves incentives.",
          "commonErrors": [
                    "Listing features that create poverty traps."
          ]
},
        },
        {
          id: "ecn10-u5-rede-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why high progressive taxes might reduce economic efficiency.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Incentive effect",
                              "statement": "High marginal rates reduce the reward for extra effort."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High earners keep less of each extra pound earned.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "May work fewer hours or retire earlier.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "May reduce saving, investment and enterprise.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Skilled workers may move to lower-tax countries.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Weaker incentives → less effort, saving, investment, possible emigration.",
          "commonErrors": [
                    "Only listing equity benefits, not efficiency costs."
          ]
},
        },
        {
          id: "ecn10-u5-rede-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country introduces a generous universal basic income (UBI).",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two advantages of a UBI for poverty reduction.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two disadvantages of a UBI.",
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
                              "name": "UBI",
                              "statement": "Universal cash payment — simple but costly."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Simple to administer — no means-testing or stigma.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Guarantees a minimum income — directly reduces poverty.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) No poverty trap — payment does not fall as earnings rise.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Very expensive — paid to everyone including the rich.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) May reduce work incentives if set too high.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Requires very high taxes to fund.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) simple, no trap, guaranteed income (b) costly, incentive risk, high taxes",
          "commonErrors": [
                    "One-sided evaluation."
          ]
},
        },
        {
          id: "ecn10-u5-rede-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two countries spend the same on redistribution: Country X uses cash benefits, Country Y uses free healthcare and education.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two advantages of in-kind provision over cash benefits.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one disadvantage of in-kind provision.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Cash vs in-kind",
                              "statement": "Services guarantee provision; cash gives choice but can be misused."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Guarantees the service is received — cannot be spent on other things.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Builds long-term human capital — healthier, better-educated workers.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) No choice — recipients cannot spend the value on other needs.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) May be less efficient than cash if some recipients do not value the service.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) guaranteed provision, human capital (b) no choice, possible inefficiency",
          "commonErrors": [
                    "Assuming in-kind is always better."
          ]
},
        },
        {
          id: "ecn10-u5-rede-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government must choose how much to redistribute income.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two arguments for more redistribution.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two arguments against more redistribution.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate where the balance should lie.",
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
                              "name": "Redistribution balance",
                              "statement": "Equity vs efficiency — no single right answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Reduces poverty and inequality — fairer society.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Improves health, education and opportunities for the poor.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) High taxes weaken work, saving and investment incentives.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Generous benefits can create dependency and poverty traps.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Balance depends on values and context — enough to prevent deprivation, not so much it kills incentives.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) equity, opportunity (b) incentives, dependency (c) balance — prevent deprivation without killing incentives",
          "commonErrors": [
                    "No balanced evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u5-rede-notes",
      title: "Redistribution policy — notes",
      summary: "Progressive tax, benefits and minimum wage redistribute income; the equity-efficiency trade-off is the key dilemma.",
      sections: [
        { heading: "Key idea", body: "Redistribution shifts income via taxes and transfers — effective design preserves work incentives." },
        { heading: "Tools", body: "Progressive tax, means-tested benefits, tax credits, minimum wage, in-kind services." },
        { heading: "Trade-off", body: "More equity may mean weaker incentives — taper benefits and use tax credits to balance." },
      ],
    },
  ],
};
