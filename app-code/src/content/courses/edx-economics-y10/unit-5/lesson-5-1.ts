import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ecn10-u5-lesson-5-1",
  code: "5-1",
  title: "Measuring Poverty and Inequality",
  goal: "I CAN define and measure poverty and inequality and explain their causes.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Government and the Economy: poverty and inequality"],
  
  vocabulary: [
    { term: "Absolute poverty", definition: "Lacking the basic necessities needed to survive — food, shelter, clean water." },
    { term: "Relative poverty", definition: "Living below a chosen standard of living relative to the average in society." },
    { term: "Poverty line", definition: "The minimum income level set as the threshold for poverty." },
    { term: "Income inequality", definition: "Unequal distribution of income across households." },
    { term: "Wealth inequality", definition: "Unequal distribution of assets such as property and savings." },
    { term: "Gini coefficient", definition: "A measure of inequality ranging from 0 (perfect equality) to 1 (perfect inequality)." },
  ],
  concepts: [
    {
      id: "ecn10-u5-pov",
      title: "Poverty",
      skill: "Distinguish absolute from relative poverty and explain how poverty is measured.",
      lesson: {
        sections: [
          {
            heading: "Absolute poverty",
            body: "**Absolute poverty** means lacking the minimum resources needed for basic survival — food, clean water, shelter, clothing. It is measured against a fixed **poverty line**, often set near the World Bank's $2.15 per day international line. Absolute poverty can be compared across countries and over time.",
          },
          {
            heading: "Relative poverty",
            body: "**Relative poverty** means living below the standard of living considered normal in a particular society — e.g. below 60% of median household income. It exists even in rich countries and falls as average incomes rise. Relative poverty measures inequality as much as deprivation.",
          },
          {
            heading: "Measuring poverty",
            body: "Poverty is measured by **headcount ratio** (percentage below the line), **poverty gap** (how far below the line people are), and **Poverty and Social Exclusion index** in the EU. In developing countries, lack of access to services and assets is also measured alongside income.",
          },
        ],
        keyFormulas: [
          { name: "Absolute poverty", statement: "Below fixed survival minimum (e.g. $2.15/day)" },
          { name: "Relative poverty", statement: "Below a share of median income (e.g. 60%)" },
          { name: "Headcount ratio", statement: "Percentage of population below the poverty line" },
        ],
        workedExample: {
          problem: "Country A has 20% of its population below $2.15/day; Country B has 5% below 60% of median income. Which has more absolute poverty?",
          solution: "Cannot compare directly — different measures. Country A's figure is absolute; B's is relative. Both indicate significant poverty.",
        },
      },
      questions: [
        {
          id: "ecn10-u5-pov-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is absolute poverty?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Living below 60% of median income"
                    },
                    {
                              "id": "b",
                              "text": "Lacking the basic necessities needed to survive"
                    },
                    {
                              "id": "c",
                              "text": "Earning less than the average worker"
                    },
                    {
                              "id": "d",
                              "text": "Being unemployed for one year"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Absolute poverty",
                              "statement": "Below fixed survival minimum."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Absolute = fixed survival standard, not relative to others.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Lacking basic necessities",
          "commonErrors": [
                    "Confusing with relative poverty."
          ]
},
        },
        {
          id: "ecn10-u5-pov-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between absolute and relative poverty.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Absolute vs relative poverty",
                              "statement": "Absolute = survival minimum; relative = below society's standard."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Absolute poverty uses a fixed minimum for survival.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Relative poverty uses a share of average/median income.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Relative poverty can exist in rich countries; absolute is about survival.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Absolute = survival minimum; relative = below societal standard.",
          "commonErrors": [
                    "Treating them as the same thing."
          ]
},
        },
        {
          id: "ecn10-u5-pov-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways poverty can be measured.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Poverty measurement",
                              "statement": "Headcount, poverty gap, income thresholds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Headcount ratio — percentage of population below the poverty line.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Poverty gap — average shortfall below the line.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Income thresholds — absolute ($/day) or relative (% of median).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Non-income measures — access to services, assets, nutrition.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Headcount, poverty gap, income thresholds, non-income indicators.",
          "commonErrors": [
                    "Listing only one measure."
          ]
},
        },
        {
          id: "ecn10-u5-pov-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country's average income rises by 10% but inequality also rises.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what happens to absolute poverty.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain what happens to relative poverty.",
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
                              "name": "Poverty types",
                              "statement": "Absolute depends on the fixed line; relative depends on distribution."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Absolute poverty likely falls — incomes rise above the fixed line.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Unless gains go only to the already-rich.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Relative poverty may rise — the median rises faster than the poor.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) More households fall below the relative threshold.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) absolute likely falls (b) relative may rise with inequality",
          "commonErrors": [
                    "Assuming both move together."
          ]
},
        },
        {
          id: "ecn10-u5-pov-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A developing country has 40% of its population in absolute poverty.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two consequences of such high absolute poverty for the economy.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why measuring poverty matters for policy.",
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
                              "name": "Poverty consequences",
                              "statement": "Poverty reduces productivity, human capital and demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Malnutrition and illness reduce worker productivity.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Poor households cannot invest in education or assets — low human capital.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Measurement shows where poverty is concentrated and how deep it is.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It allows targeting of aid and evaluation of policy success.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) low productivity, low human capital (b) targeting and evaluation",
          "commonErrors": [
                    "No link between measurement and policy."
          ]
},
        },
        {
          id: "ecn10-u5-pov-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two countries both report 15% poverty — one using absolute, one using relative measures.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the difference between the two measures.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why the same percentage can hide very different realities.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate which measure is more useful for a rich country.",
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
                              "name": "Poverty measures",
                              "statement": "Absolute measures survival; relative measures inequality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Absolute = below a fixed survival minimum.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Relative = below a share of median income in that society.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) The thresholds are completely different.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) In a rich country, relative poverty may mean decent living standards.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) In a poor country, absolute poverty means survival deprivation.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Relative is more useful for rich countries — it captures social exclusion.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) But absolute still matters for the most deprived — use both.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) fixed vs relative threshold (b) context differs (c) relative for rich countries, but use both",
          "commonErrors": [
                    "Treating the percentages as comparable."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u5-ineq",
      title: "Inequality",
      skill: "Explain income and wealth inequality and how they are measured.",
      lesson: {
        sections: [
          {
            heading: "Income vs wealth inequality",
            body: "**Income inequality** = unequal flows of earnings per period. **Wealth inequality** = unequal stocks of assets — property, savings, investments. Wealth inequality is typically much greater than income inequality because assets accumulate over time and are inherited.",
          },
          {
            heading: "Measuring inequality",
            body: "The **Gini coefficient** summarises inequality in one number: 0 = perfect equality, 1 = perfect inequality. The **Lorenz curve** plots cumulative income share against cumulative population share — further from the line of equality means more inequality. **Income shares** (top 10% earn X%) are also used.",
          },
          {
            heading: "Causes of inequality",
            body: "Differences in **education and skills**, **inheritance of wealth**, **discrimination**, **market power** (ceo pay, monopoly profits), **globalisation** (skilled wages rise, unskilled fall), and **tax and benefit systems** which can reduce or reinforce inequality.",
          },
        ],
        keyFormulas: [
          { name: "Gini coefficient", statement: "0 = perfect equality, 1 = perfect inequality" },
          { name: "Lorenz curve", statement: "Cumulative income share vs cumulative population share" },
        ],
        workedExample: {
          problem: "Country X has a Gini of 0.25; Country Y has 0.45. Which is more unequal and why does it matter?",
          solution: "Y is more unequal. Higher inequality can reduce social mobility and, at extremes, social cohesion and demand.",
        },
      },
      questions: [
        {
          id: "ecn10-u5-ineq-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does the Gini coefficient measure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Average income"
                    },
                    {
                              "id": "b",
                              "text": "The poverty rate"
                    },
                    {
                              "id": "c",
                              "text": "The degree of income inequality"
                    },
                    {
                              "id": "d",
                              "text": "Government spending"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gini coefficient",
                              "statement": "Measure of inequality, 0 to 1."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gini summarises income distribution inequality.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Degree of income inequality",
          "commonErrors": [
                    "Confusing with GDP or poverty rate."
          ]
},
        },
        {
          id: "ecn10-u5-ineq-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between income inequality and wealth inequality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Income vs wealth",
                              "statement": "Income = flow; wealth = stock of assets."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Income inequality = unequal earnings per period.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Wealth inequality = unequal assets — property, savings, investments.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Wealth inequality is usually greater because assets accumulate and are inherited.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Income = flow; wealth = stock; wealth inequality typically larger.",
          "commonErrors": [
                    "Treating income and wealth as identical."
          ]
},
        },
        {
          id: "ecn10-u5-ineq-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the Lorenz curve is used to show inequality.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Lorenz curve",
                              "statement": "Plots cumulative income share vs cumulative population."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "X-axis = cumulative share of population, poorest to richest.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Y-axis = cumulative share of income.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The line of equality shows what perfect equality would look like.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The further the curve bows below the line, the greater the inequality.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Curve further from equality line = more inequality.",
          "commonErrors": [
                    "Reversing the axes or the meaning of distance."
          ]
},
        },
        {
          id: "ecn10-u5-ineq-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country's Gini coefficient rises from 0.30 to 0.38 over a decade.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what the change means.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give two possible causes of the rise.",
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
                              "name": "Inequality trend",
                              "statement": "Higher Gini = greater inequality."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Inequality has increased — income is more concentrated at the top.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Still below 1, so not extreme, but worsening.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Skill-biased technical change raises wages for the skilled.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Weaker redistribution — lower progressive taxes or benefits.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Globalisation and declining union power also contribute.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) inequality rose (b) skills, weaker redistribution, globalisation",
          "commonErrors": [
                    "Saying Gini of 0.38 means perfect inequality."
          ]
},
        },
        {
          id: "ecn10-u5-ineq-q5",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Wealth inequality is much higher than income inequality in most countries.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why wealth inequality tends to exceed income inequality.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one consequence of high wealth inequality.",
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
                              "name": "Wealth accumulation",
                              "statement": "Assets compound and are inherited."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Wealth accumulates over a lifetime — savings and property grow.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Wealth is inherited, giving some a head start.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) High wealth inequality can limit social mobility.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) It can concentrate economic and political power.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) accumulation and inheritance (b) limited mobility, concentrated power",
          "commonErrors": [
                    "Confusing stocks and flows."
          ]
},
        },
        {
          id: "ecn10-u5-ineq-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A government wants to reduce income inequality.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two policies that could reduce income inequality.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain one reason reducing inequality might be difficult.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether reducing inequality should be a priority.",
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
                              "name": "Redistribution",
                              "statement": "Taxes and benefits can reduce inequality but may affect incentives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) More progressive taxation takes proportionally more from high earners.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Higher benefits and tax credits raise incomes at the bottom.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) High earners may work less or move abroad if taxed heavily.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Wealth inequality is harder to reduce than income inequality.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Some inequality rewards effort and enterprise — zero inequality is not the goal.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) But extreme inequality harms cohesion and opportunity — balance needed.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "(a) progressive tax, benefits (b) incentives, wealth (c) reduce extremes but keep incentives",
          "commonErrors": [
                    "No evaluation of trade-offs."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u5-pov-notes",
      title: "Poverty and inequality — notes",
      summary: "Absolute poverty = survival minimum; relative poverty = below societal standard; Gini measures inequality.",
      sections: [
        { heading: "Key idea", body: "Absolute poverty is fixed; relative poverty rises with average incomes — they measure different things." },
        { heading: "Measurement", body: "Headcount, poverty gap, Gini coefficient and Lorenz curve are the main tools." },
        { heading: "Causes", body: "Skills, inheritance, discrimination, market power, globalisation and tax/benefit systems." },
      ],
    },
  ],
};
