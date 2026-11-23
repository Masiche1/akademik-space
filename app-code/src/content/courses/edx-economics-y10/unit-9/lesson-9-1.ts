import type { Lesson } from "../../../types.ts";

export const lesson151: Lesson = {
  id: "ecn10-u9-lesson-9-1",
  code: "9-1",
  title: "Functions and Forms of Money",
  goal: "I CAN explain the functions of money, the problems of barter and the main forms of money.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Money and banking"],
  
  vocabulary: [
    { term: "Money", definition: "Anything generally accepted as a medium of exchange." },
    { term: "Barter", definition: "Exchange of goods/services directly without money." },
    { term: "Medium of exchange", definition: "Money's role in making payment for goods and services." },
    { term: "Store of value", definition: "Money's ability to hold purchasing power over time." },
    { term: "Unit of account", definition: "Money's role as a common measure of value." },
    { term: "Fiat money", definition: "Money whose value comes from government decree and acceptance." },
    { term: "Near money", definition: "Assets easily converted into money, such as savings deposits." },
  ],
  concepts: [
    {
      id: "ecn10-u9-money-functions",
      title: "Functions of Money",
      skill: "Explain the functions of money and why barter is inefficient.",
      lesson: {
        sections: [
          {
            heading: "The functions of money",
            body: "Money solves the problems of **barter** — direct exchange of goods. Its key functions are: **medium of exchange** (accepted in payment for goods and services), **store of value** (holds purchasing power over time), **unit of account** (a common measure so prices can be compared) and **standard of deferred payment** (debts can be denominated and repaid later).",
          },
          {
            heading: "When money's functions weaken",
            body: "Barter requires a **double coincidence of wants**, divisibility, portability and durability — hard to achieve with most goods. Money removes these frictions, but its functions can be undermined: **very high inflation** erodes the store of value, so people may spend immediately, hoard foreign currency or return to barter. Even then money often remains the unit of account, though prices become unstable.",
          },
        ],
        keyFormulas: [
          { name: "Functions of money", statement: "Medium of exchange, store of value, unit of account, standard of deferred payment" },
        ],
        workedExample: {
          problem: "A farmer has eggs but wants shoes; the shoemaker wants wheat. Why is barter difficult here?",
          solution: "There is no double coincidence of wants — the shoemaker does not want eggs. With money the farmer can sell the eggs for cash, then buy shoes in two separate transactions.",
        },
      },
      questions: [
        {
          id: "ecn10-u9-functions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is NOT a function of money?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Unit of account"
                    },
                    {
                              "id": "b",
                              "text": "Medium of exchange"
                    },
                    {
                              "id": "c",
                              "text": "Setting interest rates"
                    },
                    {
                              "id": "d",
                              "text": "Store of value"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Functions of money",
                              "statement": "Medium of exchange, store of value, unit of account, standard of deferred payment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interest rates are set by the central bank, not a function of money itself.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Setting interest rates",
          "commonErrors": [
                    "Confusing money with monetary policy tools."
          ]
},
        },
        {
          id: "ecn10-u9-functions-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain two problems of a barter economy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Barter limitations",
                              "statement": "Double coincidence of wants and divisibility problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Double coincidence of wants — each party must want what the other has at the same time.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Divisibility and portability — large or indivisible goods are hard to trade for small items.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Double coincidence of wants; indivisible/immovable goods.",
          "commonErrors": [
                    "Listing money's functions instead of barter's problems."
          ]
},
        },
        {
          id: "ecn10-u9-functions-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how money acts as a store of value and a unit of account.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Store of value",
                              "statement": "Money holds purchasing power over time."
                    },
                    {
                              "kind": "definition",
                              "name": "Unit of account",
                              "statement": "Money is a common measure of value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Store of value: money can be saved and spent later without losing value (unless inflation is high).",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Unit of account: all prices are quoted in money, so values can be compared across goods.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Store of value = keeps purchasing power; unit of account = common price measure.",
          "commonErrors": [
                    "Confusing store of value with medium of exchange."
          ]
},
        },
        {
          id: "ecn10-u9-functions-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how very high inflation can reduce the usefulness of money.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Inflation and money",
                              "statement": "Rising prices erode money's purchasing power."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Store of value weakened — money buys less over time, so saving in money loses value.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "People spend immediately or hoard goods/foreign currency instead of saving in domestic money.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Lending and credit become risky because future repayments lose real value.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Prices become unstable, undermining money as a reliable unit of account.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "High inflation erodes purchasing power, discourages saving/lending and destabilises prices.",
          "commonErrors": [
                    "Saying money stops being used entirely — it often remains the unit of account."
          ]
},
        },
        {
          id: "ecn10-u9-functions-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "In Country X most payments are made by mobile phone using digital balances.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how digital money can still act as a medium of exchange.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Discuss one advantage and one disadvantage of digital money as a store of value.",
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
                              "name": "Digital money",
                              "statement": "E-money performs money's functions electronically."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Digital balances are widely accepted in payment for goods and services — they are a medium of exchange.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) They are transferable between users and settle transactions instantly.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Advantage: balances can be held securely and earn interest, so value is stored over time.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Disadvantage: dependence on technology, fraud risk or system failure can destroy access to stored value.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) digital balances are accepted payment (b) secure storage vs technology/fraud risk",
          "commonErrors": [
                    "Claiming digital money is not money at all without justification."
          ]
},
        },
        {
          id: "ecn10-u9-functions-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess whether money is essential for a modern economy.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the four functions of money.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how each function solves a problem of barter.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the claim that a small community could manage without money.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Functions of money",
                              "statement": "Medium of exchange, store of value, unit of account, standard of deferred payment."
                    },
                    {
                              "kind": "principle",
                              "name": "Money vs barter",
                              "statement": "Money removes barter's frictions and enables specialisation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Medium of exchange.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Store of value.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Unit of account.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Standard of deferred payment.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Medium of exchange removes the double coincidence of wants.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Store of value allows saving and delayed exchange.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Unit of account allows prices to be compared across goods.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Standard of deferred payment enables credit and borrowing.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) A very small, self-sufficient community might barter, but specialisation, trade and investment all require money — so it is effectively essential.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Money is effectively essential — barter cannot support specialisation, credit or large-scale trade.",
          "commonErrors": [
                    "Missing one function in part (a).",
                    "No evaluation in part (c)."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u9-money-types",
      title: "Types and Forms of Money",
      skill: "Distinguish commodity, fiat, deposit and electronic money.",
      lesson: {
        sections: [
          {
            heading: "Commodity, fiat and deposit money",
            body: "**Commodity money** has intrinsic value — gold, silver, salt. **Fiat money** has value by government decree and universal acceptance — banknotes and coins. **Checkable deposits** (current accounts) count as money because they can be spent by card or transfer. **Near money** — savings and time deposits — converts to cash quickly but is not instantly spendable.",
          },
          {
            heading: "E-money and measuring the money supply",
            body: "**E-money** — digital balances on cards, phones and apps — functions like checkable deposits. **Cryptocurrencies** are decentralised digital assets whose status as money is debated. The **money supply** is measured narrowly (cash + checkable deposits) or broadly (plus near money); the classification affects statistics and policy.",
          },
        ],
        keyFormulas: [
          { name: "Money types", statement: "Commodity → fiat → deposit/e-money; near money sits just outside narrow measures" },
        ],
        workedExample: {
          problem: "Is a savings account 'money'?",
          solution: "It is near money — not instantly spendable, but it converts to cash quickly, so it is included in broad money measures but not narrow ones.",
        },
      },
      questions: [
        {
          id: "ecn10-u9-types-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Fiat money gets its value from:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Its intrinsic value as a commodity"
                    },
                    {
                              "id": "b",
                              "text": "Government decree and general acceptance"
                    },
                    {
                              "id": "c",
                              "text": "Its gold backing"
                    },
                    {
                              "id": "d",
                              "text": "Foreign exchange reserves"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fiat money",
                              "statement": "Value by decree and acceptance, not intrinsic worth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fiat money is accepted because the government declares it legal tender and people trust it.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Government decree and acceptance",
          "commonErrors": [
                    "Confusing fiat with commodity money."
          ]
},
        },
        {
          id: "ecn10-u9-types-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between commodity money and fiat money.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Commodity vs fiat",
                              "statement": "Intrinsic value vs decree value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Commodity money has intrinsic value — gold, silver, salt are valuable in themselves.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Fiat money has no intrinsic value; it is accepted by decree and trust.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Commodity = intrinsic value; fiat = decree/acceptance.",
          "commonErrors": [
                    "No example of each type."
          ]
},
        },
        {
          id: "ecn10-u9-types-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why checkable deposits are classed as money.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Checkable deposits",
                              "statement": "Bank deposits usable for immediate payment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Current account balances can be spent immediately by cheque, card or bank transfer.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They are counted in narrow measures of the money supply alongside cash.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Checkable deposits are instantly spendable, so they count as money.",
          "commonErrors": [
                    "Saying all bank deposits are money — savings deposits are only near money."
          ]
},
        },
        {
          id: "ecn10-u9-types-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A small shop accepts only cash. Explain two disadvantages for customers compared with card or mobile payments.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Payment methods",
                              "statement": "Cash vs electronic payment trade-offs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Customers must carry cash, risking loss or theft, and cannot pay when they have no cash on them.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cash payments leave no record — no spending history for credit scores and no easy budgeting.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Cash earns no interest and may be inconvenient for larger purchases or online shopping.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Foreign customers or those paid electronically face exchange and withdrawal hassle.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "No record of spending, security/carrying risk, no interest, inconvenience for large/online payments.",
          "commonErrors": [
                    "Listing advantages of cash instead of disadvantages."
          ]
},
        },
        {
          id: "ecn10-u9-types-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "In a country, people increasingly pay by phone instead of carrying cash.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how this change affects the narrow money supply.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Discuss whether e-money balances should be included in money supply measures.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Narrow money",
                              "statement": "Cash plus instantly spendable deposits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Mobile balances behave like checkable deposits — instantly spendable — so they count in narrow money.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Cash in circulation falls but total narrow money can be unchanged if balances are included.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) For: e-money is widely accepted and spendable, so excluding it would understate the money supply.",
                              "marks": 1,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Against: some balances are savings-like or held on unregulated platforms, so broad measures may be more appropriate — a justified view is needed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) e-money counts in narrow money if instantly spendable (b) include if functions like deposits — judgement required",
          "commonErrors": [
                    "Assuming digital money is automatically excluded from money supply."
          ]
},
        },
        {
          id: "ecn10-u9-types-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Evaluate whether cryptocurrencies should be treated as money.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two functions that money must perform.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two features of cryptocurrencies.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Discuss whether cryptocurrencies perform the functions of money.",
                    "marks": 4
          },
          {
                    "label": "d",
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
                              "kind": "definition",
                              "name": "Money functions",
                              "statement": "Medium of exchange, store of value, unit of account."
                    },
                    {
                              "kind": "principle",
                              "name": "Cryptocurrency",
                              "statement": "Decentralised digital asset with volatile value."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Medium of exchange and store of value (or unit of account).",
                              "marks": 2,
                              "markCode": "AO1",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Decentralised — no central bank control; value is highly volatile.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Limited acceptance as payment — few shops take them.",
                              "marks": 1,
                              "markCode": "AO1",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) As a medium of exchange acceptance is weak compared with fiat money.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(c) As a store of value extreme volatility makes it unreliable; as a unit of account it is rarely used for pricing.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "c"
                    },
                    {
                              "reasoning": "(d) Conclusion: cryptocurrencies are not yet money for most purposes, though they may develop some functions.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "d"
                    }
          ],
          "finalAnswer": "Not yet full money — weak acceptance, volatile value; may evolve.",
          "commonErrors": [
                    "Treating 'crypto' as automatically money without testing the functions."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u9-lesson-9-1-notes",
      title: "Functions and Forms of Money — notes",
      summary: "Money's four functions, barter's problems, and the main types of money from commodity to e-money.",
      sections: [
        { heading: "Key idea", body: "Money is whatever is generally accepted as a medium of exchange; its other functions (store of value, unit of account, standard of deferred payment) make modern economies possible." },
        { heading: "Barter", body: "Barter needs a double coincidence of wants plus divisibility, portability and durability — the main reasons money evolved." },
        { heading: "Types of money", body: "Commodity money has intrinsic value; fiat money has decree value; checkable deposits and e-money are money; savings deposits are near money." },
      ],
    },
  ],
};
