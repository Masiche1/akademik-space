import type { Lesson } from "../../../types.ts";

export const lesson123: Lesson = {
  id: "ecn11-u12-lesson-12-3",
  code: "12-3",
  title: "Redistribution and Government Policy",
  goal: "I CAN explain how governments redistribute income and evaluate the effects of redistribution policies.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure", "4EC1: government intervention and redistribution"],
  
  vocabulary: [
    { term: "Progressive tax", definition: "A tax taking a larger percentage of income from higher earners." },
    { term: "Regressive tax", definition: "A tax taking a larger share of income from lower earners." },
    { term: "Direct tax", definition: "A tax on income or wealth, e.g. income tax, corporation tax." },
    { term: "Indirect tax", definition: "A tax on spending, e.g. VAT, excise duties." },
    { term: "Transfer payment", definition: "A payment from government to households with no goods or services received in return." },
    { term: "Targeting", definition: "Designing benefits to reach only those who need them." },
  ],
  concepts: [
    {
      id: "ecn11-u12-redistpol",
      title: "Redistribution policies",
      skill: "Explain progressive taxation, benefits and transfer payments as redistribution tools.",
      lesson: {
        sections: [
          {
            heading: "Progressive taxation",
            body: "**Direct taxes** like income tax can be **progressive**: higher earners pay a larger percentage of their income. The revenue funds public services and transfers, reducing post-tax inequality. Corporation tax and capital gains tax can also be progressive. However, very high rates may create **disincentives** — reducing effort, investment or encouraging tax avoidance.",
          },
          {
            heading: "Benefits and indirect taxes",
            body: "**Transfer payments** (cash benefits such as unemployment benefit, child benefit, pensions) raise the incomes of poorer households directly. **Indirect taxes** like VAT are generally **regressive**: the same rate hits low earners harder because they spend a larger share of income on taxed goods. Governments can reduce regressivity by exempting basic goods or combining indirect taxes with progressive direct taxes and targeted benefits.",
          },
        ],
        keyFormulas: [
          { name: "Progressive tax", statement: "Tax share rises with income" },
          { name: "Regressive tax", statement: "Tax share falls as income rises (e.g. flat indirect taxes)" },
        ],
        workedExample: {
          problem: "Two workers each pay 20% VAT on £100 of spending. Worker A earns £1,000/month; Worker B earns £3,000/month. Who bears the heavier burden?",
          solution: "Each pays £20 VAT. For A it is 2% of income; for B only 0.67% — VAT is regressive.",
        },
      },
      questions: [
        {
          id: "ecn11-u12-redistpol-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a progressive tax?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A tax taking the same percentage from all earners"
                    },
                    {
                              "id": "b",
                              "text": "A tax taking a larger percentage of income from higher earners"
                    },
                    {
                              "id": "c",
                              "text": "A tax on goods and services"
                    },
                    {
                              "id": "d",
                              "text": "A tax paid only by businesses"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Progressive tax",
                              "statement": "Higher earners pay a larger share."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Progressive = tax rate/share rises with income (e.g. income tax bands).",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Larger share from higher earners",
          "commonErrors": [
                    "Confusing with proportional tax."
          ]
},
        },
        {
          id: "ecn11-u12-redistpol-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a transfer payment? Give one example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Transfer payment",
                              "statement": "Government payment with nothing received in return."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Payment from government to households; no goods or services received.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Example: unemployment benefit, state pension, child benefit.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Benefit-type payment, e.g. unemployment benefit.",
          "commonErrors": [
                    "Describing a payment for services (e.g. NHS is a service, not cash transfer)."
          ]
},
        },
        {
          id: "ecn11-u12-redistpol-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why indirect taxes such as VAT are considered regressive.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Regressive taxation",
                              "statement": "Same tax rate hits poorer households harder."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "VAT applies the same percentage rate to all consumers.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Low earners spend a larger share of income on taxed goods.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Therefore VAT takes a larger proportion of poor households' income.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Flat rate on spending hits low incomes proportionally harder.",
          "commonErrors": [
                    "Saying VAT is progressive because rich spend more in absolute terms."
          ]
},
        },
        {
          id: "ecn11-u12-redistpol-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare progressive direct taxes and regressive indirect taxes as methods of raising revenue.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State one advantage of progressive direct taxes for redistribution.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "State one disadvantage of indirect taxes for redistribution.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Direct vs indirect tax",
                              "statement": "Progressive equity vs regressive burden."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Take a larger share from high earners → reduces post-tax inequality; fund services/benefits.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Same rate on all spending → poorer households pay a larger share of income.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Can worsen inequality unless mitigated (e.g. exemptions on essentials).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) reduces post-tax inequality (b) burdens poorer households proportionally more",
          "commonErrors": [
                    "No distributional reasoning."
          ]
},
        },
        {
          id: "ecn11-u12-redistpol-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government wants to reduce poverty using cash benefits. Analyse two problems it might face.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Benefit design problems",
                              "statement": "Targeting, disincentives and cost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Means-testing/targeting is administratively complex and can create poverty traps.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Generous benefits may reduce incentives to work or increase hours — efficiency cost.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Universal benefits are simple but costly and may go to those not in need.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Targeting complexity/poverty traps; work disincentives; cost of universality.",
          "commonErrors": [
                    "Only one problem; no mechanism."
          ]
},
        },
        {
          id: "ecn11-u12-redistpol-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define progressive and regressive taxes.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give one example of each.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain what a transfer payment is and give one example.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "State one way indirect taxes can be made less regressive.",
                    "marks": 1
          },
          {
                    "label": "e",
                    "prompt": "Explain one possible disincentive effect of high income tax.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Redistribution tools",
                              "statement": "Tax types, transfers, disincentives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Progressive = larger share from higher incomes; regressive = larger share from lower incomes.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Progressive e.g. income tax bands; regressive e.g. VAT.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Government payment with nothing received in return; e.g. unemployment benefit.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Exempt basic necessities or combine with progressive taxes/benefits.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) High earners may work less, avoid tax or move abroad.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "e"
                    }
          ],
          "finalAnswer": "(a) definitions (b) income tax/VAT (c) benefit (d) exemptions (e) less effort/avoidance",
          "commonErrors": [
                    "Confusing direct and indirect taxes."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u12-redisteval",
      title: "Evaluating redistribution",
      skill: "Evaluate redistribution policies in terms of equity, efficiency, poverty reduction and incentives.",
      lesson: {
        sections: [
          {
            heading: "Benefits of redistribution",
            body: "Redistribution can **reduce poverty and inequality**, improving living standards for the poorest. It can fund **public services** (health, education) that benefit all, especially the disadvantaged. Lower inequality may improve **social cohesion** and reduce crime. Where benefits are **targeted**, resources reach those most in need.",
          },
          {
            heading: "Costs and limitations",
            body: "High taxes and generous benefits can create **disincentives** — people may work fewer hours, avoid taxes or leave the country. **Targeting** is costly to administer and can create **poverty traps** where earning more loses benefits. **Universal** benefits are simple but expensive. Redistribution funded by borrowing may increase the national debt; funded by indirect taxes may be regressive. Evaluation must weigh equity gains against efficiency losses.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A country raises income tax on top earners from 40% to 50% and spends the revenue on child benefits. Evaluate.",
          solution: "Equity improves (benefits for poor children, less inequality); risk: disincentives for high earners and possible tax avoidance.",
        },
      },
      questions: [
        {
          id: "ecn11-u12-redisteval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main equity argument for redistribution?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It always increases economic growth"
                    },
                    {
                              "id": "b",
                              "text": "It reduces poverty and inequality"
                    },
                    {
                              "id": "c",
                              "text": "It simplifies the tax system"
                    },
                    {
                              "id": "d",
                              "text": "It eliminates the need for markets"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Equity case",
                              "statement": "Fairer distribution of income."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Redistribution narrows income gaps and lifts households above poverty lines.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Reduces poverty and inequality",
          "commonErrors": [
                    "Claiming guaranteed growth."
          ]
},
        },
        {
          id: "ecn11-u12-redisteval-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a disincentive effect of redistribution?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Disincentive",
                              "statement": "Reduced motivation to work, save or invest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "High taxes or benefit withdrawal can reduce the reward for extra effort.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "People may work fewer hours, avoid tax or leave the labour force.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Weakened incentives to work, save or invest.",
          "commonErrors": [
                    "Describing an incentive instead."
          ]
},
        },
        {
          id: "ecn11-u12-redisteval-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by a poverty trap and how it relates to benefit design.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Poverty trap",
                              "statement": "Earning more causes benefit loss, leaving people no better off."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "As income rises, means-tested benefits are withdrawn.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Total income (earnings + benefits) may barely rise or even fall.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "People are trapped near the poverty line — a disincentive to work more.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Benefit withdrawal can leave workers barely better off, discouraging extra work.",
          "commonErrors": [
                    "Confusing with absolute poverty."
          ]
},
        },
        {
          id: "ecn11-u12-redisteval-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate a policy of raising income tax to fund more generous unemployment benefits.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one equity benefit.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one efficiency cost.",
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
                              "name": "Policy evaluation",
                              "statement": "Equity gains vs incentive and cost effects."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Higher benefits protect unemployed households from poverty; funded by progressive tax reduces inequality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Higher taxes may reduce incentives to work and invest; generous benefits may reduce job-search effort.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Cost: higher government spending may require borrowing or higher taxes elsewhere.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) protects poor/unemployed, less inequality (b) weaker incentives, fiscal cost",
          "commonErrors": [
                    "Only listing benefits or only costs."
          ]
},
        },
        {
          id: "ecn11-u12-redisteval-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare targeted benefits with universal benefits for reducing poverty.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Targeted vs universal",
                              "statement": "Efficiency of targeting vs simplicity of universality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Targeted benefits direct resources to those in need — more cost-effective, less waste.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "But targeting needs means-testing — administratively costly and can create poverty traps/stigma.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Universal benefits are simple and avoid stigma but cost more and may reach non-poor.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Targeted = efficient but complex/trappy; universal = simple but costly.",
          "commonErrors": [
                    "No comparison — describing only one type."
          ]
},
        },
        {
          id: "ecn11-u12-redisteval-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two equity benefits of redistribution.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Give two efficiency costs of redistribution.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain what targeting means and one problem with it.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain one way redistribution can affect social cohesion.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Reach a supported judgement: is redistribution worth its costs? Justify.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Evaluating redistribution",
                              "statement": "Equity, efficiency, targeting, judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Less poverty/inequality; better access to services for the poor.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Weaker work/investment incentives; administrative cost and possible avoidance.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Aiming benefits at those in need; problem = poverty traps or admin cost.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Can reduce resentment/raise cohesion if seen as fair; or resentment if seen as rewarding idleness.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Supported judgement weighing equity gains vs incentive costs — either way justified.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "Balanced evaluation: equity gains vs incentive/admin costs; justified judgement.",
          "commonErrors": [
                    "No judgement; one-sided evaluation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u12-redistpol-notes",
      title: "Redistribution — notes",
      summary: "Progressive taxes + benefits redistribute income; evaluate equity gains against incentive, targeting and cost problems.",
      sections: [
        { heading: "Tools", body: "Progressive direct taxes, transfer payments; indirect taxes tend to be regressive." },
        { heading: "Evaluation", body: "Equity gains vs disincentives, poverty traps, admin costs and fiscal burden." },
        { heading: "Judgement", body: "Worth it depends on design — targeting and taper rates matter." },
      ],
    },
  ],
};
