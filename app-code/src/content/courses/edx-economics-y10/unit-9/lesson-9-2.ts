import type { Lesson } from "../../../types.ts";

export const lesson152: Lesson = {
  id: "ecn10-u9-lesson-9-2",
  code: "9-2",
  title: "Banks and the Money Supply",
  goal: "I CAN explain the role of commercial banks and the central bank, and how money is created.",
  standards: ["Edexcel IGCSE Economics 4EC1 — Money and banking"],
  
  vocabulary: [
    { term: "Commercial bank", definition: "Bank providing deposit and lending services to the public." },
    { term: "Current account", definition: "Instant-access bank account for everyday payments." },
    { term: "Interest margin", definition: "Difference between lending and deposit interest rates." },
    { term: "Reserve ratio", definition: "Proportion of deposits banks must keep as cash." },
    { term: "Lender of last resort", definition: "Central bank support for banks facing liquidity crises." },
    { term: "Narrow money", definition: "Cash plus instantly spendable deposits." },
    { term: "Broad money", definition: "Narrow money plus near-money assets such as savings deposits." },
  ],
  concepts: [
    {
      id: "ecn10-u9-commercial-banks",
      title: "Commercial Banks",
      skill: "Explain how banks take deposits, make loans and create money.",
      lesson: {
        sections: [
          {
            heading: "What commercial banks do",
            body: "Banks accept **deposits** — **current accounts** for instant payments and **savings accounts** that pay interest. They make **loans**, overdrafts and mortgages to households and businesses, earning profit from the **interest margin** (lending rate minus deposit rate) plus fees for payment services.",
          },
          {
            heading: "Money creation and bank runs",
            body: "Bank lending **creates money**: a loan appears as a new deposit in the borrower's account, which can be spent and re-lent — expanding the money supply by roughly 1/reserve ratio. Banks keep **reserves** to meet withdrawals. If confidence collapses, a **bank run** can make an illiquid bank fail; deposit insurance and the central bank as lender of last resort reduce this risk.",
          },
        ],
        keyFormulas: [
          { name: "Interest margin", statement: "Lending rate − deposit rate = bank profit per unit lent" },
          { name: "Money creation", statement: "Loans create deposits — each lending round expands the money supply" },
        ],
        workedExample: {
          problem: "A bank receives a £100 deposit, keeps 10% as reserve and lends the rest. How much new money is created in one round?",
          solution: "It lends £90, creating a £90 deposit — £90 of new money. With repeated lending the money supply can expand by up to 1/0.10 = 10 times the initial deposit.",
        },
      },
      questions: [
        {
          id: "ecn10-u9-banks-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is a liability of a commercial bank?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Loans made to customers"
                    },
                    {
                              "id": "b",
                              "text": "Cash reserves held"
                    },
                    {
                              "id": "c",
                              "text": "Customer deposits"
                    },
                    {
                              "id": "d",
                              "text": "Bank buildings and equipment"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bank liability",
                              "statement": "What the bank owes — deposits are liabilities."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Customer deposits are money the bank owes back — a liability. Loans and buildings are assets.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(c)** Customer deposits",
          "commonErrors": [
                    "Confusing assets with liabilities."
          ]
},
        },
        {
          id: "ecn10-u9-banks-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain two ways in which commercial banks make profit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bank profit",
                              "statement": "Interest margin plus service fees."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interest margin — banks charge more interest on loans than they pay on deposits.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Fees and charges for payment services, overdrafts, foreign exchange and other services.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Interest margin and service fees.",
          "commonErrors": [
                    "Saying banks profit only from interest — fees also count."
          ]
},
        },
        {
          id: "ecn10-u9-banks-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how bank lending creates money.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Money creation",
                              "statement": "Loans create deposits in borrowers' accounts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When a bank makes a loan it credits the borrower's account — a new deposit that did not exist before.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The borrower spends the deposit, and the recipient's bank can lend it out again, expanding the money supply.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Loans create new deposits; repeated lending expands the money supply.",
          "commonErrors": [
                    "Thinking banks only lend out existing deposits — lending itself creates money."
          ]
},
        },
        {
          id: "ecn10-u9-banks-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why banks keep cash reserves and what can happen if reserves are too low.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bank reserves",
                              "statement": "Cash kept to meet withdrawal demands and regulation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Banks keep reserves to meet everyday withdrawal and payment demands from depositors.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Central banks set minimum reserve requirements as a regulatory rule.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "If reserves are too low the bank may be unable to meet withdrawals, triggering a bank run, illiquidity or failure.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Reserves meet withdrawals and satisfy rules; too few cause illiquidity and possible failure.",
          "commonErrors": [
                    "Confusing reserves with profit — reserves are cash backing deposits."
          ]
},
        },
        {
          id: "ecn10-u9-banks-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A bank has £1,000 in deposits and must keep 10% of deposits as reserves.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate the maximum amount the bank can lend.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain one limitation of using the simple money multiplier to predict money supply growth.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Reserve requirement",
                              "statement": "Lendable funds = deposits × (1 − reserve ratio)"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Reserves required: 10% of £1,000 = £100; maximum lending = £1,000 − £100 = £900.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) In reality people may hold more cash, banks may hold excess reserves, and borrowers may repay loans early.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) The multiplier assumes every deposit is re-lent, which rarely happens perfectly.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) £900 (b) real-world leaks — cash holdings, excess reserves, early repayment",
          "commonErrors": [
                    "Lending the full £1,000 — forgetting the reserve must be kept."
          ]
},
        },
        {
          id: "ecn10-u9-banks-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess the view that commercial banks should be tightly regulated.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two risks that commercial banks face.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two benefits of regulating banks.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Evaluate whether regulation eliminates banking risk.",
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
                              "name": "Bank regulation",
                              "statement": "Rules protecting depositors and the financial system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Risk 1: bank runs and illiquidity if withdrawals exceed reserves.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Risk 2: bad debts when borrowers default on loans.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Benefit 1: deposit insurance protects savers and maintains confidence.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Benefit 2: capital and liquidity rules prevent excessive risk-taking.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) Regulation reduces but cannot eliminate risk — risks can migrate or rules can be gamed; a justified balanced conclusion is needed.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Regulation protects depositors and stability but cannot remove all risk.",
          "commonErrors": [
                    "Only describing benefits without evaluating."
          ]
},
        },
      ],
    },
    {
      id: "ecn10-u9-central-bank",
      title: "The Central Bank and the Money Supply",
      skill: "Explain the functions of the central bank and money supply measures.",
      lesson: {
        sections: [
          {
            heading: "Functions of the central bank",
            body: "The **central bank** (e.g., Bank of England) performs key roles: **banker to the government** (manages public accounts), **note and coin issuer** (monopoly on currency), **lender of last resort** (supports banks in liquidity crises), **bank supervisor** (sets rules on capital and liquidity) and **manager of foreign exchange reserves**.",
          },
          {
            heading: "Measuring the money supply",
            body: "**Narrow money** (M0/M1) = cash plus checkable deposits — the most liquid assets. **Broad money** adds near money such as savings and time deposits. The central bank influences money growth through reserve requirements and open market operations; interest-rate policy is covered separately. Too rapid money growth relative to output tends to cause inflation; too slow growth can cause recession.",
          },
        ],
        keyFormulas: [
          { name: "Money supply", statement: "Narrow = cash + checkable deposits; broad = + near money" },
        ],
        workedExample: {
          problem: "Why is a savings account included in broad money but not narrow money?",
          solution: "It is near money — easily converted to cash but not instantly spendable, so it counts in broad but not narrow measures.",
        },
      },
      questions: [
        {
          id: "ecn10-u9-central-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Who acts as the lender of last resort?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Commercial banks"
                    },
                    {
                              "id": "b",
                              "text": "The central bank"
                    },
                    {
                              "id": "c",
                              "text": "Insurance companies"
                    },
                    {
                              "id": "d",
                              "text": "The stock exchange"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Lender of last resort",
                              "statement": "Central bank support for banks in liquidity crises."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The central bank provides emergency lending to banks that cannot meet withdrawal demands.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** The central bank",
          "commonErrors": [
                    "Confusing lender of last resort with deposit insurance."
          ]
},
        },
        {
          id: "ecn10-u9-central-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State three functions of the central bank.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Central bank functions",
                              "statement": "Banker to government, note issuer, lender of last resort, supervisor, reserve manager."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Banker to the government — manages government accounts and payments.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Note and coin issuer — has the monopoly on producing currency.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Lender of last resort — supports banks facing liquidity crises.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Any three: banker to government, note issuer, lender of last resort, bank supervisor, reserve manager.",
          "commonErrors": [
                    "Listing commercial bank functions instead of central bank functions."
          ]
},
        },
        {
          id: "ecn10-u9-central-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Distinguish between narrow and broad measures of the money supply.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Narrow vs broad money",
                              "statement": "Most liquid assets vs plus near money."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Narrow money = cash plus checkable deposits — instantly spendable.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Broad money = narrow money plus near money such as savings and time deposits.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Narrow = most liquid; broad = narrow + savings/time deposits.",
          "commonErrors": [
                    "Including savings accounts in narrow money."
          ]
},
        },
        {
          id: "ecn10-u9-central-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a sharp fall in bank reserves could lead to a credit crunch.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Credit crunch",
                              "statement": "Falling reserves reduce lending capacity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Banks must hold reserves against deposits, so falling reserves directly limit how much they can lend.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Less lending means households and firms find it harder or more expensive to borrow.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Falling consumption and investment can slow or push the economy into recession.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Fewer reserves → less lending → less spending/investment → slowdown.",
          "commonErrors": [
                    "Stopping at 'banks lend less' without the knock-on effects."
          ]
},
        },
        {
          id: "ecn10-u9-central-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A country's broad money supply is growing rapidly while real output grows only slowly.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what this pattern suggests about inflation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Discuss the effects on borrowers and savers.",
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
                              "name": "Money growth and inflation",
                              "statement": "Money growing faster than output → demand-pull inflation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) More money chasing relatively few goods pushes up aggregate demand faster than supply can respond.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) This is demand-pull inflation — prices rise, especially if wages and expectations adjust.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Borrowers gain — they repay debts in money that buys less, reducing the real burden of fixed repayments.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Savers lose — the real value of deposits and fixed incomes falls with rising prices.",
                              "marks": 1,
                              "markCode": "AO2",
                              "part": "b"
                    }
          ],
          "finalAnswer": "(a) demand-pull inflation risk (b) borrowers gain, savers lose",
          "commonErrors": [
                    "Assuming money growth is always bad — it depends on output growth."
          ]
},
        },
        {
          id: "ecn10-u9-central-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Assess whether the central bank should be independent of government.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons for central bank independence.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two arguments against independence.",
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
                              "name": "Central bank independence",
                              "statement": "Insulation from short-term political pressure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Independence lets the bank keep inflation low without pressure to cut rates before elections.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(a) Credibility — markets trust an independent bank to act against inflation.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "a"
                    },
                    {
                              "reasoning": "(b) Against: an unelected body makes powerful decisions without democratic accountability.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(b) Against: governments may prefer growth or employment over low inflation, so a democratic mandate matters.",
                              "marks": 2,
                              "markCode": "AO2",
                              "part": "b"
                    },
                    {
                              "reasoning": "(c) A justified conclusion — e.g., independence is generally valued for credibility, though some democratic oversight may be appropriate.",
                              "marks": 2,
                              "markCode": "AO3",
                              "part": "c"
                    }
          ],
          "finalAnswer": "Independence supports price stability and credibility but raises accountability concerns.",
          "commonErrors": [
                    "One-sided argument with no conclusion."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecn10-u9-lesson-9-2-notes",
      title: "Banks and the Money Supply — notes",
      summary: "Commercial banks create money through lending; the central bank issues currency, supports banks and manages reserves.",
      sections: [
        { heading: "Key idea", body: "Bank lending creates new deposits — the money supply grows through the banking system, not just through the central bank." },
        { heading: "Reserves", body: "Banks keep cash reserves to meet withdrawals and satisfy reserve requirements; too few reserves cause illiquidity." },
        { heading: "Money measures", body: "Narrow money = cash + checkable deposits; broad money adds savings and time deposits." },
      ],
    },
  ],
};
