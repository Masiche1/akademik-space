import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "ecn11-u12-lesson-12-2",
  code: "12-2",
  title: "Causes of Inequality",
  goal: "I CAN explain the economic and social causes of income and wealth inequality.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure", "4EC1: distribution of income and poverty"],
  
  vocabulary: [
    { term: "Factor incomes", definition: "Payments to factors of production: wages, profit, rent, interest." },
    { term: "Human capital", definition: "Skills, qualifications and health that raise a worker's earning power." },
    { term: "Inherited wealth", definition: "Assets passed down through generations, widening wealth gaps." },
    { term: "Social mobility", definition: "Movement of individuals or families between income or social groups." },
    { term: "Discrimination", definition: "Unfair treatment in pay or employment based on characteristics such as gender or ethnicity." },
    { term: "Equity-efficiency trade-off", definition: "The tension between reducing inequality and maintaining incentives for effort." },
  ],
  concepts: [
    {
      id: "ecn11-u12-factors",
      title: "Factor incomes and human capital",
      skill: "Explain how factor incomes, skills and inheritance create income and wealth differences.",
      lesson: {
        sections: [
          {
            heading: "Sources of factor income",
            body: "People earn **factor incomes**: wages for labour, profit for entrepreneurship, rent for land and interest for capital. Earnings differ because people own different quantities and qualities of factors. A surgeon's labour commands high wages because of scarce, high-value skills; a landlord's land earns rent; a shareholder earns dividends.",
          },
          {
            heading: "Human capital, discrimination and inheritance",
            body: "**Human capital** — education, training, health and experience — raises labour productivity and wages. Those who can invest in human capital earn more over their lives. **Discrimination** in pay and employment (by gender, ethnicity, disability) creates unjustified pay gaps. **Inherited wealth** — property, savings, businesses passed down — means some start life with assets that generate income, compounding inequality across generations.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "Two graduates start work: one has a degree and family savings, the other left school at 16. Explain likely income differences after 10 years.",
          solution: "The graduate has higher human capital (degree) → higher-paying job; family savings may fund further training or a deposit → compounding advantage.",
        },
      },
      questions: [
        {
          id: "ecn11-u12-factors-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a factor income?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A gift from a relative"
                    },
                    {
                              "id": "b",
                              "text": "Wages from employment"
                    },
                    {
                              "id": "c",
                              "text": "A lottery win"
                    },
                    {
                              "id": "d",
                              "text": "A benefit payment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Factor incomes",
                              "statement": "Wages, profit, rent, interest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Factor incomes pay for factors of production: wages, profit, rent, interest.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Wages from employment",
          "commonErrors": [
                    "Including transfers like benefits as factor income."
          ]
},
        },
        {
          id: "ecn11-u12-factors-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is human capital?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Human capital",
                              "statement": "Skills, qualifications and health that raise earning power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Skills, qualifications, training, experience and health embodied in a worker.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Raises productivity and therefore wages.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Workers' skills, qualifications and health that raise earnings.",
          "commonErrors": [
                    "Confusing with physical capital (machinery)."
          ]
},
        },
        {
          id: "ecn11-u12-factors-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how inherited wealth can widen the gap between rich and poor households.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Inherited wealth",
                              "statement": "Assets passed down generate income and opportunity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wealthy families pass on assets: property, savings, businesses.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Assets generate income (rent, interest, dividends) without work.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Assets fund education and deposits, giving children a head start — compounding over generations.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Inherited assets earn income and fund opportunities, compounding advantage across generations.",
          "commonErrors": [
                    "Treating inheritance as a one-off payment only."
          ]
},
        },
        {
          id: "ecn11-u12-factors-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain three causes of income inequality in a modern economy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Cause 1: differences in human capital.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Cause 2: discrimination in the labour market.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Cause 3: ownership of wealth-generating assets.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Causes of inequality",
                              "statement": "Human capital, discrimination, asset ownership."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Education/training differences raise productivity and wages for some.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Unequal pay or hiring by gender/ethnicity creates unjustified gaps.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Owning property, shares or businesses generates rent, interest, dividends.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) human capital (b) discrimination (c) asset ownership",
          "commonErrors": [
                    "Listing causes without explaining the income mechanism."
          ]
},
        },
        {
          id: "ecn11-u12-factors-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country introduces free university education. Analyse how this might affect income inequality over time.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Human capital investment",
                              "statement": "Wider access to education can reduce inequality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More people gain qualifications → higher human capital.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Wider access especially helps lower-income groups who previously could not afford degrees.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Over time, earnings of poorer households may rise faster → inequality may fall.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Caveat: benefits may take years and depend on job availability.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Raises human capital for poorer groups; inequality may fall over time, though with a lag.",
          "commonErrors": [
                    "Ignoring the time lag or funding cost."
          ]
},
        },
        {
          id: "ecn11-u12-factors-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the four factors of production and the factor income paid for each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Define human capital and give two examples.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Explain why two workers with the same job title might earn different wages.",
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
                              "name": "Factor incomes",
                              "statement": "FOF incomes, human capital, wage differentials."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Land→rent, labour→wages, capital→interest, enterprise→profit.",
                              "marks": 4,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Skills/qualifications/health; examples: degree, apprenticeships, experience.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Differences in skills, experience, location, discrimination or bargaining power.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) land/rent, labour/wages, capital/interest, enterprise/profit (b) skills (c) skill/experience/location gaps",
          "commonErrors": [
                    "Mismatching factors and incomes."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u12-outcomes",
      title: "Inequality and economic outcomes",
      skill: "Evaluate the relationship between inequality, growth, efficiency and social mobility.",
      lesson: {
        sections: [
          {
            heading: "The equity-efficiency trade-off",
            body: "Policies that reduce inequality (higher taxes on the rich, generous benefits) may reduce incentives to work, save and invest — potentially lowering **efficiency** and growth. This is the **equity-efficiency trade-off**. Conversely, high inequality may also harm growth: the poor spend a larger share of income, inequality can fuel social unrest and crime, and talented people from poor backgrounds may lack opportunities. Economists disagree on which effect dominates.",
          },
          {
            heading: "Inequality and social mobility",
            body: "**Social mobility** is movement between income groups across generations. High inequality can lower mobility: wealthy families buy better schooling and connections, while poor children lack networks and finance. Low mobility entrenches inequality ('the poor stay poor'). Policies that widen access to education and finance aim to raise mobility, breaking the link between parents' and children's incomes.",
          },
        ],
        keyFormulas: [

        ],
        workedExample: {
          problem: "A country cuts top tax rates to reward effort. Evaluate the likely effect on growth and inequality.",
          solution: "Inequality may rise (higher after-tax incomes for the rich); incentives and possibly investment/growth may rise — an equity-efficiency trade-off.",
        },
      },
      questions: [
        {
          id: "ecn11-u12-outcomes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the equity-efficiency trade-off?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A choice between two efficient firms"
                    },
                    {
                              "id": "b",
                              "text": "The tension between reducing inequality and maintaining incentives"
                    },
                    {
                              "id": "c",
                              "text": "A trade deal between two countries"
                    },
                    {
                              "id": "d",
                              "text": "Balancing exports and imports"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Equity-efficiency trade-off",
                              "statement": "Equality aims vs incentive/efficiency aims."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reducing inequality (equity) can weaken work/investment incentives (efficiency).",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Equity vs incentives tension",
          "commonErrors": [
                    "Confusing with international trade."
          ]
},
        },
        {
          id: "ecn11-u12-outcomes-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is social mobility?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Social mobility",
                              "statement": "Movement between income/social groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Movement of individuals/families up or down the income or social scale.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Often measured across generations (e.g. children's income vs parents').",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Movement between income or social groups, often across generations.",
          "commonErrors": [
                    "Confusing with physical mobility."
          ]
},
        },
        {
          id: "ecn11-u12-outcomes-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how high inequality can reduce social mobility.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Inequality and mobility",
                              "statement": "Wealth and opportunity entrench income groups."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Wealthy families can buy better education, healthcare and networks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Poorer children lack finance for further education or business start-up.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Children tend to stay in their parents' income group — low mobility entrenches inequality.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Unequal access to opportunity keeps children in their parents' income group.",
          "commonErrors": [
                    "No mechanism linking inequality to mobility."
          ]
},
        },
        {
          id: "ecn11-u12-outcomes-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A government raises taxes on high earners to fund education for low-income students. Evaluate this policy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain one benefit for equity.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one possible cost for efficiency.",
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
                              "name": "Redistribution trade-off",
                              "statement": "Equity gains vs incentive costs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Transfers resources to poorer groups; funds education that raises their future earnings — reduces inequality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Higher taxes may reduce incentives for high earners to work, save or invest.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Could reduce tax revenue if avoidance rises or effort falls — efficiency cost.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) equity up via funded education (b) possible incentive/efficiency cost",
          "commonErrors": [
                    "One-sided evaluation with no trade-off."
          ]
},
        },
        {
          id: "ecn11-u12-outcomes-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Some economists argue that inequality slows economic growth; others argue it rewards effort and encourages growth. Discuss both views.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Inequality and growth",
                              "statement": "Two opposing views on the inequality-growth link."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "View 1 (inequality harms growth): poor households spend more of income → demand; inequality may cause unrest/crime and block talent.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "View 2 (inequality helps growth): rewards effort and enterprise; high savers can invest; incentives boost productivity.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Evidence is mixed — the relationship depends on how inequality is measured and the context.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Conclusion: both mechanisms exist; policy must balance equity and incentives.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Inequality can harm demand/mobility or reward incentives — evidence is mixed.",
          "commonErrors": [
                    "One-sided answer; no evaluation."
          ]
},
        },
        {
          id: "ecn11-u12-outcomes-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define social mobility and state why it matters for inequality.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the equity-efficiency trade-off.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Give one way inequality might reduce economic growth.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Give one way inequality might increase economic growth.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Suggest one policy that could raise social mobility.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Inequality and outcomes",
                              "statement": "Mobility, trade-offs, growth links."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Movement between income groups; low mobility entrenches inequality.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Equality policies may weaken incentives needed for efficient allocation.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) e.g. poor spend less on investment; unrest/crime; wasted talent.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) e.g. rewards effort/enterprise; high savers invest more.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) e.g. subsidised education, apprenticeships, childcare support.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "(a) movement/groups (b) equity vs incentives (c)-(d) growth links (e) education policy",
          "commonErrors": [
                    "Mixing up equity and efficiency arguments."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u12-factors-notes",
      title: "Causes of inequality — notes",
      summary: "Factor incomes, human capital, discrimination and inheritance drive inequality; it interacts with growth, mobility and the equity-efficiency trade-off.",
      sections: [
        { heading: "Factor incomes", body: "Wages, profit, rent, interest — people earn differently because they own different factors and skills." },
        { heading: "Key drivers", body: "Human capital (education/health), discrimination, inherited wealth and assets compound over time." },
        { heading: "Trade-offs", body: "Inequality can harm demand and mobility, or reward incentives — the equity-efficiency trade-off." },
      ],
    },
  ],
};
