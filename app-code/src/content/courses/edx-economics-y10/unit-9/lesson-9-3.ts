import type { Lesson } from "../../../types.ts";

export const lesson153: Lesson = {
  id: "ecn10-u9-lesson-9-3",
  code: "9-3",
  title: "Financial Markets and Saving",
  goal: "I CAN explain financial markets, shares and bonds, and the role of saving in the economy.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Money and banking"],
  
  vocabulary: [
    { term: "Money market", definition: "Market for short-term borrowing and lending." },
    { term: "Capital market", definition: "Market for long-term finance — shares, bonds, mortgages." },
    { term: "Stock exchange", definition: "Organised market where company shares are bought and sold." },
    { term: "Share", definition: "Part-ownership of a company with variable dividends." },
    { term: "Bond", definition: "Loan to a government or company paying fixed interest." },
    { term: "Financial inclusion", definition: "Access to bank accounts, credit and insurance." },
    { term: "Financial exclusion", definition: "Lack of access to mainstream financial services." },
  ],
  concepts: [
    {
      id: "ecn10-u9-financial-markets",
      title: "Financial Markets and Institutions",
      skill: "Explain money and capital markets, shares, bonds and financial intermediaries.",
      lesson: {
        sections: [
          {
            heading: "Types of financial market",
            body: "The **money market** handles short-term borrowing and lending — Treasury bills, commercial paper, interbank loans. The **capital market** provides long-term finance — shares, bonds, mortgages. The **stock exchange** is the organised market where shares change hands; prices reflect expected company performance. **Financial intermediaries** — banks, pension funds, insurance companies — channel savers' money to borrowers.",
          },
          {
            heading: "Shares versus bonds",
            body: "**Shares** give part-ownership: dividends vary with profit and the share price can rise or fall — higher risk, higher potential return. **Bonds** are loans: fixed interest (coupon) and repayment of face value; lower risk, lower return. Government bonds are called **gilts**. When interest rates rise, existing bond prices fall because new bonds offer better returns.",
          },
        ],
        keyFormulas: [
          { name: "Share vs bond", statement: "Share = ownership + variable dividend; bond = loan + fixed interest" },
        ],
        workedExample: {
          problem: "Why might a pension fund prefer government bonds to shares?",
          solution: "Bonds pay fixed interest and are lower risk — suitable for retirement savings that need certainty of income.",
        },
      },
      questions: [
        {
          id: "ecn10-u9-markets-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A share represents:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A loan to the company"
                    },
                    {
                              "id": "b",
                              "text": "Part-ownership of the company"
                    },
                    {
                              "id": "c",
                              "text": "A fixed-interest investment"
                    },
                    {
                              "id": "d",
                              "text": "A savings account"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Share",
                              "statement": "Part-ownership with variable dividends."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shares confer ownership rights — voting and dividends — unlike bonds which are loans.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Part-ownership",
          "commonErrors": [
                    "Confusing shares with bonds."
          ]
},
        },
        {
          id: "ecn10-u9-markets-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between the money market and the capital market.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Money vs capital market",
                              "statement": "Short-term vs long-term finance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Money market: short-term borrowing and lending — Treasury bills, interbank loans.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Capital market: long-term finance — shares, bonds, mortgages.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Money market = short-term; capital market = long-term.",
          "commonErrors": [
                    "Reversing the time horizons."
          ]
},
        },
        {
          id: "ecn10-u9-markets-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the role of financial intermediaries in the economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Financial intermediaries",
                              "statement": "Channel saving into investment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "They collect savings from households and channel them to firms and governments that need finance.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They reduce risk and information problems — savers lack the knowledge to assess borrowers directly.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Intermediaries channel saving to investment and reduce risk/information gaps.",
          "commonErrors": [
                    "Saying intermediaries create money — that is banks' lending function, a related but distinct point."
          ]
},
        },
        {
          id: "ecn10-u9-markets-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why the prices of existing bonds fall when interest rates rise.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bond prices and interest rates",
                              "statement": "Inverse relationship between bond prices and rates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Newly issued bonds now offer higher coupons, making existing bonds with lower fixed interest less attractive.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "To offer the same yield as new bonds, the price of existing bonds must fall.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Bond prices therefore move inversely to interest rates.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Higher rates make old low-coupon bonds less attractive, so their prices fall.",
          "commonErrors": [
                    "Asserting prices rise with rates — the relationship is inverse."
          ]
},
        },
        {
          id: "ecn10-u9-markets-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A growing company wants to raise £10 million for expansion.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Compare raising funds through issuing shares versus issuing bonds.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain one advantage of each method to the company.",
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
                              "name": "Shares vs bonds for raising finance",
                              "statement": "Ownership/dividends vs loan/fixed interest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Shares: investors gain part-ownership; dividends vary with profit; no repayment obligation.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Bonds: investors are lenders; the company pays fixed interest and must repay the loan.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Shares advantage: no fixed repayment — interest/dividends depend on performance.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Bonds advantage: no loss of ownership or control for existing shareholders.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) shares=ownership+variable dividends; bonds=loan+fixed interest (b) no repayment vs no dilution of control",
          "commonErrors": [
                    "Ignoring that bondholders must be repaid regardless of profit."
          ]
},
        },
        {
          id: "ecn10-u9-markets-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess the importance of stock markets to an economy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two functions of the stock exchange.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits to businesses of being listed on the stock exchange.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate one drawback of relying on share prices as a measure of company performance.",
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
                              "name": "Stock exchange",
                              "statement": "Market for buying and selling company shares."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Function 1: enables companies to raise capital by selling shares to the public.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Function 2: provides a market where investors can buy and sell shares, giving liquidity.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit 1: access to large-scale finance for expansion.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit 2: raised profile and prestige; shares can be used for acquisitions.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Drawback: share prices reflect expectations and sentiment, not just current performance — they can be volatile and misleading.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Stock markets raise capital and provide liquidity, though prices can be volatile.",
          "commonErrors": [
                    "Listing functions without explaining them."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u9-saving-investment",
      title: "Saving, Investment and Financial Inclusion",
      skill: "Explain saving, investment, financial intermediaries and inclusion.",
      lesson: {
        sections: [
          {
            heading: "Saving and investment",
            body: "**Saving** is income not spent — by households, firms and government. **Investment** is spending on capital goods — factories, machinery, technology. Financial markets and intermediaries channel saving into investment; investment raises productivity and long-run growth. Interest rates influence the saving–spending balance.",
          },
          {
            heading: "Financial inclusion and exclusion",
            body: "**Financial inclusion** means access to bank accounts, credit, insurance and payments. **Financial exclusion** leaves people relying on cash and high-cost credit (payday loans), vulnerable to shocks. Causes include low income, poor financial literacy and geographic isolation. Policies include basic bank accounts, financial education and community credit unions.",
          },
        ],
        keyFormulas: [
          { name: "Saving vs investment", statement: "Saving = unspent income; investment = spending on capital goods" },
        ],
        workedExample: {
          problem: "Why do banks matter for economic growth?",
          solution: "They collect savings and lend or invest them in capital, raising productivity and output — channeling saving into investment.",
        },
      },
      questions: [
        {
          id: "ecn10-u9-saving-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In economics, investment means:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Putting money in a savings account"
                    },
                    {
                              "id": "b",
                              "text": "Buying shares for personal gain"
                    },
                    {
                              "id": "c",
                              "text": "Spending on capital goods such as machinery"
                    },
                    {
                              "id": "d",
                              "text": "Paying taxes to the government"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Investment",
                              "statement": "Spending on capital goods that raise future output."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Investment is capital spending — factories, machinery, technology — not personal saving or tax payments.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Spending on capital goods",
          "commonErrors": [
                    "Confusing everyday 'investing' (shares) with economic investment."
          ]
},
        },
        {
          id: "ecn10-u9-saving-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define saving and investment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Saving and investment",
                              "statement": "Unspent income vs capital spending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Saving: income that is not spent on consumption.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Investment: spending on capital goods that increase future productive capacity.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "The difference between the two concepts — saving is a flow of unspent income, investment is capital expenditure.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Saving = unspent income; investment = spending on capital goods.",
          "commonErrors": [
                    "Using 'investment' to mean buying shares — that is financial investment."
          ]
},
        },
        {
          id: "ecn10-u9-saving-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how financial markets channel saving into investment.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Saving-investment channel",
                              "statement": "Savers' deposits fund borrowers' capital spending."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Households deposit savings with banks and pension funds — financial intermediaries.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Intermediaries lend the funds or buy shares and bonds issued by firms and governments.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Firms use the finance to buy capital goods, raising productivity and output — economic growth.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Saving → intermediaries → finance for capital spending → growth.",
          "commonErrors": [
                    "Stopping at 'banks lend money' without linking to capital and growth."
          ]
},
        },
        {
          id: "ecn10-u9-saving-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain two reasons why some people remain financially excluded.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Financial exclusion",
                              "statement": "Barriers to accessing mainstream finance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Low or irregular income and no credit history make banks unwilling to offer accounts or loans.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lack of financial literacy, language barriers or geographic isolation prevent people using services.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Consequence: reliance on cash and high-cost credit such as payday loans, leaving people vulnerable.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Low income/no credit history; literacy and access barriers — leading to costly credit.",
          "commonErrors": [
                    "Describing consequences without explaining causes."
          ]
},
        },
        {
          id: "ecn10-u9-saving-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government wants to increase financial inclusion in its country.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Suggest two policies the government could use.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Discuss one benefit and one limitation of these policies.",
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
                              "name": "Financial inclusion policy",
                              "statement": "Expanding access to banking and credit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Require banks to offer basic bank accounts with no or low fees.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Fund financial education programmes or support community credit unions.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Use mobile/agent banking to reach remote areas.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit: wider access to safe saving, credit and insurance reduces vulnerability.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Limitation: costs for banks may be passed on, and excluded groups may still lack income or literacy to use services.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) basic accounts, financial education, agent banking (b) inclusion benefit vs cost/usage limits",
          "commonErrors": [
                    "Suggesting policies without any evaluation."
          ]
},
        },
        {
          id: "ecn10-u9-saving-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess the view that saving is always good for the economy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of high saving.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two drawbacks of high saving.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Reach a justified conclusion.",
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
                              "name": "Saving and the economy",
                              "statement": "Saving funds investment but may reduce demand."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Benefit 1: provides funds for investment in capital, raising long-run growth.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Benefit 2: finances government and corporate borrowing through bond markets.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Drawback 1: high saving means low consumption — aggregate demand falls, risking unemployment.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Drawback 2: if saving exceeds investment, spare funds may sit idle or flow abroad.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Conclusion: saving is beneficial when it funds productive investment, but harmful if it simply reduces demand — balance is needed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Saving funds investment but can reduce demand — beneficial only when matched by investment.",
          "commonErrors": [
                    "One-sided argument; no conclusion linking to investment."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u9-lesson-9-3-notes",
      title: "Financial Markets and Saving — notes",
      summary: "Money vs capital markets, shares vs bonds, intermediaries channelling saving into investment, and financial inclusion.",
      sections: [
        { heading: "Key idea", body: "Financial intermediaries channel household saving into business and government investment — a key driver of growth." },
        { heading: "Shares vs bonds", body: "Shares = ownership with variable returns and higher risk; bonds = loans with fixed interest and lower risk." },
        { heading: "Inclusion", body: "Financial exclusion leaves people dependent on cash and high-cost credit; policy can widen access." },
      ],
    },
  ],
};
