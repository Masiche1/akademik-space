import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "ecn11-u12-lesson-12-1",
  code: "12-1",
  title: "Income, Wealth and Poverty",
  goal: "I CAN distinguish income from wealth and apply absolute and relative poverty measures.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Understanding markets and market failure", "4EC1: distribution of income, poverty and inequality"],
  
  vocabulary: [
    { term: "Income", definition: "A flow of earnings received over a period of time, e.g. wages per month." },
    { term: "Wealth", definition: "A stock of assets owned at a point in time, e.g. property, savings." },
    { term: "Disposable income", definition: "Income remaining after direct taxes, plus any benefits received." },
    { term: "Absolute poverty", definition: "Living below a fixed minimum standard needed for basic survival." },
    { term: "Relative poverty", definition: "Living below a level considered acceptable by the standards of that society." },
    { term: "Poverty line", definition: "An income threshold below which a person or household is classed as poor." },
  ],
  concepts: [
    {
      id: "ecn11-u12-earnpov",
      title: "Income, wealth and poverty",
      skill: "Distinguish income from wealth and apply absolute and relative poverty measures.",
      lesson: {
        sections: [
          {
            heading: "Income and wealth",
            body: "**Income** is a flow — money received over time (wages, salaries, profits, rent, interest, benefits). **Wealth** is a stock — assets owned at one moment (houses, savings, shares, land). A person can have high wealth but low income (e.g. a pensioner owning a house) or high income but low wealth (e.g. a high earner spending everything). **Disposable income** = gross income − direct taxes + cash benefits; it measures what households can actually spend.\n\nIncome inequality and wealth inequality are related but different: wealth is more unequally distributed than income because assets accumulate and are passed on.",
          },
          {
            heading: "Absolute and relative poverty",
            body: "**Absolute poverty** is measured against a fixed minimum standard — the income needed for food, shelter, clothing and basic needs (e.g. the World Bank poverty line). It can be reduced as living standards rise. **Relative poverty** is measured against the general standard of living — typically households earning below a set percentage (often 60%) of median income. As average incomes rise, the relative poverty line rises too, so relative poverty can persist even when absolute poverty falls.",
          },
        ],
        keyFormulas: [
          { name: "Disposable income", statement: "Gross income − direct taxes + benefits" },
          { name: "Relative poverty line", statement: "Often set at 60% of median household income" },
        ],
        workedExample: {
          problem: "A household earns £30,000 gross, pays £4,500 in income tax, and receives £1,500 in child benefit. What is its disposable income?",
          solution: "Disposable income = 30,000 − 4,500 + 1,500 = £27,000.",
        },
      },
      questions: [
        {
          id: "ecn11-u12-earnpov-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a flow measure of economic well-being?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Wealth"
                    },
                    {
                              "id": "b",
                              "text": "Income"
                    },
                    {
                              "id": "c",
                              "text": "Assets"
                    },
                    {
                              "id": "d",
                              "text": "Property"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Income vs wealth",
                              "statement": "Income is a flow; wealth is a stock."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Income is received over time (a flow); wealth is owned at a point (a stock).",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Income",
          "commonErrors": [
                    "Confusing stock and flow."
          ]
},
        },
        {
          id: "ecn11-u12-earnpov-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define absolute poverty and state how it is measured.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Absolute poverty",
                              "statement": "Below a fixed minimum standard for basic needs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Definition: living below the minimum income needed for basic survival.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Measured against a fixed poverty line (e.g. World Bank line), independent of average incomes.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Below a fixed minimum standard; measured against a fixed poverty line.",
          "commonErrors": [
                    "Describing relative poverty instead."
          ]
},
        },
        {
          id: "ecn11-u12-earnpov-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why relative poverty can persist even when average incomes rise.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Relative poverty",
                              "statement": "Measured against the society's general standard of living."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Relative poverty line is set as a percentage of median income.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "When average incomes rise, the line rises too.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Households whose incomes do not keep pace remain relatively poor.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "The poverty line rises with median income, so lagging households stay relatively poor.",
          "commonErrors": [
                    "Claiming rising incomes eliminate relative poverty."
          ]
},
        },
        {
          id: "ecn11-u12-earnpov-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare income and wealth, and explain how taxes and benefits affect disposable income.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two differences between income and wealth.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how disposable income is calculated.",
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
                              "name": "Income vs wealth",
                              "statement": "Flow vs stock; income less unequally distributed."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Income is a flow over time; wealth is a stock of assets at a point.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Wealth is more unequally distributed than income.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Start with gross income.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Subtract direct taxes (income tax, NIC).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Add cash benefits (e.g. child benefit, housing benefit).",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) flow vs stock; wealth more unequal (b) gross − tax + benefits",
          "commonErrors": [
                    "Ignoring benefits in disposable income."
          ]
},
        },
        {
          id: "ecn11-u12-earnpov-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country's average income rises by 8%, but the incomes of the poorest 20% are unchanged. Analyse the likely effect on absolute and relative poverty.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Poverty measurement",
                              "statement": "Absolute vs relative poverty respond differently to growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Absolute poverty is measured against a fixed line — unchanged incomes for the poorest mean absolute poverty is likely unchanged.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Relative poverty likely rises: the median income rises while the poorest stay flat.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The gap between rich and poor widens — inequality increases.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Conclusion: growth without distribution can worsen relative poverty.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Absolute poverty roughly unchanged; relative poverty rises as the median pulls away.",
          "commonErrors": [
                    "Assuming rising average income helps the poorest automatically."
          ]
},
        },
        {
          id: "ecn11-u12-earnpov-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define income and wealth, giving one example of each.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Distinguish between absolute and relative poverty.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "A worker earns £24,000, pays £3,000 tax and receives £2,400 in benefits. Calculate disposable income.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why wealth is more unequally distributed than income.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Suggest one reason why relative poverty is harder to eliminate than absolute poverty.",
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
                              "name": "Poverty and inequality",
                              "statement": "Definitions, calculation and evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Income = flow e.g. wages; wealth = stock e.g. house/savings.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Absolute = fixed minimum standard; relative = below a share of median income.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) 24,000 − 3,000 + 2,400 = £23,400.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Assets accumulate and are inherited; income is earned each period.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) The relative line rises with median income, so it moves with growth.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "(a) flow/stock (b) fixed vs relative line (c) £23,400 (d) accumulation/inheritance (e) moving target",
          "commonErrors": [
                    "Wrong disposable income calculation; confusing absolute and relative."
          ]
},
        },
      ],
    },
    {
      id: "ecn11-u12-measure",
      title: "Measuring inequality",
      skill: "Use income quintiles, the Lorenz curve and the Gini coefficient to describe inequality.",
      lesson: {
        sections: [
          {
            heading: "Income distribution and quintiles",
            body: "Households can be ranked by income and divided into **quintiles** — five equal groups each containing 20% of households. Comparing quintile incomes shows how income is shared: if the top quintile earns far more than the bottom, inequality is high. **Median** income (the middle value) is often used instead of mean because it is less distorted by very high earners.",
          },
          {
            heading: "Lorenz curve and Gini coefficient",
            body: "The **Lorenz curve** plots cumulative share of income against cumulative share of households, ranked poorest to richest. The **line of equality** (45° line) shows perfect equality. The further the Lorenz curve bows below the line, the more unequal the distribution. The **Gini coefficient** measures this gap: it ranges from 0 (perfect equality) to 1 (perfect inequality). A rising Gini means inequality is increasing; a falling Gini means it is decreasing.",
          },
        ],
        keyFormulas: [
          { name: "Gini coefficient", statement: "0 = perfect equality; 1 = perfect inequality" },
          { name: "Lorenz curve", statement: "Cumulative income share vs cumulative population share" },
        ],
        workedExample: {
          problem: "Country A has a Gini of 0.25; Country B has 0.55. Which is more equal, and what does the Lorenz curve look like?",
          solution: "Country A is more equal (lower Gini). Its Lorenz curve lies closer to the 45° line of equality.",
        },
      },
      questions: [
        {
          id: "ecn11-u12-measure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does a Gini coefficient of 0 represent?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Perfect inequality"
                    },
                    {
                              "id": "b",
                              "text": "Perfect equality"
                    },
                    {
                              "id": "c",
                              "text": "Average income"
                    },
                    {
                              "id": "d",
                              "text": "Total wealth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gini coefficient",
                              "statement": "0 = equality, 1 = inequality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gini ranges 0 (perfect equality) to 1 (perfect inequality).",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Perfect equality",
          "commonErrors": [
                    "Reversing the scale."
          ]
},
        },
        {
          id: "ecn11-u12-measure-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an income quintile?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Quintile",
                              "statement": "One-fifth (20%) of households ranked by income."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Households ranked by income and split into five equal groups.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Each quintile contains 20% of households.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "One of five equal groups (20% each) ranked by income.",
          "commonErrors": [
                    "Confusing with quartiles (four groups)."
          ]
},
        },
        {
          id: "ecn11-u12-measure-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the Lorenz curve is used to show income inequality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Lorenz curve",
                              "statement": "Cumulative income vs cumulative households."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plots cumulative share of income against cumulative share of households (poorest to richest).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Compared with the 45° line of equality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Greater bow below the line = greater inequality.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Distance below the line of equality shows the degree of inequality.",
          "commonErrors": [
                    "Describing axes incorrectly."
          ]
},
        },
        {
          id: "ecn11-u12-measure-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A country's Gini coefficient rises from 0.30 to 0.42 over a decade.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State what a rising Gini coefficient indicates.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what would happen to the Lorenz curve.",
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
                              "name": "Gini and Lorenz",
                              "statement": "Gini measures the gap the Lorenz curve shows."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Inequality has increased — income is less equally distributed.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Lorenz curve bows further below the 45° line of equality.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The gap between the curve and the line of equality widens, matching the higher Gini.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) inequality rose (b) Lorenz curve bows further from equality line",
          "commonErrors": [
                    "Thinking a higher Gini means more equality."
          ]
},
        },
        {
          id: "ecn11-u12-measure-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two countries have identical mean incomes, but Country X has a Gini of 0.30 and Country Y has a Gini of 0.50. Compare the likely living standards of households in the two countries.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Gini comparison",
                              "statement": "Same mean, different distribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same mean income means the same total/average income.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Country X's lower Gini means income is spread more evenly.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Poorer households in X likely earn more than poorer households in Y.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Richer households in Y likely earn much more than in X — greater inequality.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "X is more equal: its poorest households are better off; Y's richest are much richer.",
          "commonErrors": [
                    "Assuming mean income tells the whole story."
          ]
},
        },
        {
          id: "ecn11-u12-measure-q6",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Answer all parts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define the Gini coefficient and state its range.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain what the Lorenz curve shows.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Country P has Gini 0.28; Country Q has Gini 0.61. Which is more unequal?",
                    "marks": 1
          },
          {
                    "label": "d",
                    "prompt": "Suggest two reasons why a government might want to reduce the Gini coefficient.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Give one limitation of using the Gini coefficient alone.",
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
                              "name": "Measuring inequality",
                              "statement": "Gini, Lorenz curve, quintiles, evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Measure of income inequality; ranges 0 (equality) to 1 (inequality).",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Cumulative income share vs cumulative population share; bow below equality line shows inequality.",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Country Q — higher Gini.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Reduce poverty/social exclusion; promote social cohesion and fairness.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "d"
                    },
                    {
                              "reasoning": "(e) Ignores wealth inequality and non-income factors (health, education).",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "e"
                    }
          ],
          "finalAnswer": "(a) 0-1 inequality measure (b) cumulative income vs population (c) Q (d) poverty/cohesion (e) ignores wealth",
          "commonErrors": [
                    "Reversing Gini scale; ignoring distribution vs level."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn11-u12-earnpov-notes",
      title: "Income, wealth and poverty — notes",
      summary: "Income = flow, wealth = stock. Absolute poverty = fixed line; relative = share of median. Gini 0-1 measures inequality.",
      sections: [
        { heading: "Key distinction", body: "Income and wealth are different: flows vs stocks, and wealth is more unequally distributed." },
        { heading: "Poverty types", body: "Absolute poverty uses a fixed minimum; relative poverty uses a share (often 60%) of median income." },
        { heading: "Measuring inequality", body: "Lorenz curve + Gini coefficient (0 = equality, 1 = inequality); quintiles split households into fifths." },
      ],
    },
  ],
};
