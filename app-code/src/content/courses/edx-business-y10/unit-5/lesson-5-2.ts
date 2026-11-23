import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ebz10-u5-lesson-5-2",
  code: "5-2",
  title: "Bookkeeping and Financial Statements",
  goal: "I CAN explain bookkeeping records and interpret income statements and balance sheets.",
  standards: ["Edexcel IGCSE Business 4BS0 — Finance and Accounting"],
  
  vocabulary: [
    { term: "Bookkeeping", definition: "Recording financial transactions systematically." },
    { term: "Source document", definition: "Evidence of a transaction such as an invoice or receipt." },
    { term: "Trial balance", definition: "Check that total debits equal total credits." },
    { term: "Income statement", definition: "Statement showing revenue, costs and profit over a period." },
    { term: "Balance sheet", definition: "Statement of assets, liabilities and equity at a point in time." },
    { term: "Gross profit", definition: "Revenue minus cost of sales." },
    { term: "Net profit", definition: "Profit remaining after all expenses, interest and tax." },
  ],
  concepts: [
    {
      id: "ebz10-u5-bookkeeping-records",
      title: "Bookkeeping and Financial Records",
      skill: "Use source documents and double-entry principles to maintain accurate records.",
      lesson: {
        sections: [
          {
            heading: "Source documents",
            body: "Transactions are supported by documents such as invoices, receipts, cheques and bank statements. Accurate records begin by recording each transaction in the correct book, such as a sales day book, purchases day book or cash book.",
          },
          {
            heading: "Double-entry bookkeeping",
            body: "Double entry records each transaction twice: a debit and a credit. Assets and expenses increase with debits; liabilities, equity and income increase with credits. Ledgers collect transactions for each account.",
          },
          {
            heading: "Trial balance",
            body: "A trial balance lists all ledger balances to check that debits equal credits. It can reveal errors but does not prove accounts are completely correct because some errors, such as omissions or compensating mistakes, may still occur.",
          },
        ],
        keyFormulas: [
          { name: "Double entry", statement: "Every transaction has equal debit and credit entries" },
          { name: "Trial balance", statement: "Total debits = total credits" },
        ],
        workedExample: {
          problem: "A business buys £500 of stock on credit. What is the double-entry effect?",
          solution: "Debit stock/purchases £500 and credit trade payables £500, because the business gains stock and owes the supplier.",
        },
      },
      questions: [
        {
          id: "ebz10-u5-book-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In double-entry bookkeeping, what must be true for every transaction?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only one account is affected"
                    },
                    {
                              "id": "b",
                              "text": "Total debits equal total credits"
                    },
                    {
                              "id": "c",
                              "text": "Every entry is a credit"
                    },
                    {
                              "id": "d",
                              "text": "The transaction is recorded monthly"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Double entry",
                              "statement": "Every transaction has equal debit and credit entries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Double-entry bookkeeping requires debits and credits to balance.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Total debits equal total credits",
          "commonErrors": [
                    "Confusing double entry with single entry or trial balance."
          ]
},
        },
        {
          id: "ebz10-u5-book-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the purpose of a trial balance.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trial balance",
                              "statement": "Check that ledger debits and credits agree."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "It lists all ledger account balances.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It checks that total debits equal total credits.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It helps detect errors, though it does not guarantee all records are correct.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "A trial balance checks that debits equal credits and helps find errors.",
          "commonErrors": [
                    "Saying it proves all accounts are correct.",
                    "Only one function given."
          ]
},
        },
        {
          id: "ebz10-u5-book-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why businesses keep source documents for transactions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Source documents",
                              "statement": "Documents provide evidence for bookkeeping and disputes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Source documents prove that a transaction occurred.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They provide details needed to record amount, date and parties.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They support VAT or tax records and audits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They help resolve disputes with customers or suppliers.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Source documents provide evidence, details and legal support for transactions.",
          "commonErrors": [
                    "Only saying records are needed.",
                    "No audit or dispute link."
          ]
},
        },
        {
          id: "ebz10-u5-book-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A shop receives an invoice for stock, pays a supplier by cheque and sells goods for cash.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify the source document for each transaction.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Suggest which book or account should record each transaction.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Recording transactions",
                              "statement": "Use documents as evidence and record in appropriate books."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Invoice for the stock purchase.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Cheque or bank statement for the supplier payment.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Till roll or cash receipt for the cash sale.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Record purchases in purchases book and payment in cash book or bank account.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Record the sale in sales day book and cash received in cash book.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Invoice, cheque and till roll evidence purchases, payment and sales respectively.",
          "commonErrors": [
                    "Documents mismatched.",
                    "No book or account identified."
          ]
},
        },
        {
          id: "ebz10-u5-book-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A business finds that its trial balance does not balance.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two possible causes.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest two ways to locate the error.",
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
                              "name": "Trial balance errors",
                              "statement": "Unequal totals reveal recording or calculation errors."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A transaction may have been omitted or entered twice.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "An amount may have been entered on the wrong side or transposed digits.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Check recent entries against source documents and ledger totals.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use suspense account or halve the difference to test likely errors.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Errors may be omissions, wrong sides or transpositions; check documents, ledgers and totals.",
          "commonErrors": [
                    "Assuming trial balance proves no errors.",
                    "No method to find the error."
          ]
},
        },
        {
          id: "ebz10-u5-book-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A café records cash sales, pays rent and buys coffee beans on credit.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List the source document likely used for each event.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain the double-entry effect of buying coffee beans on credit.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain what the trial balance would check at month end.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why the café still needs an income statement after bookkeeping.",
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
                              "name": "Complete bookkeeping cycle",
                              "statement": "Documents → books → ledger → trial balance → financial statements."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Till roll for cash sales.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Receipt or bank statement for rent payment.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Supplier invoice for coffee beans bought on credit.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Debit purchases/stock because the café receives beans.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Credit trade payables because it owes the supplier.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "It checks total debits equal total credits across all ledger accounts.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "d",
                              "reasoning": "Bookkeeping records transactions; the income statement summarises revenue, costs and profit.",
                              "marks": 2,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Documents support entries; double entry records credit purchases; trial balance checks totals; income statement shows performance.",
          "commonErrors": [
                    "Only bookkeeping described.",
                    "No link to financial statements."
          ]
},
        },
      ],
    },
    {
      id: "ebz10-u5-financial-statements",
      title: "Income Statement and Balance Sheet",
      skill: "Calculate and interpret basic financial statements.",
      lesson: {
        sections: [
          {
            heading: "Income statement",
            body: "An income statement covers a period and shows revenue, cost of sales, gross profit, operating expenses, operating profit, interest, tax and net profit. Gross profit = revenue − cost of sales; operating profit = gross profit − operating expenses.",
          },
          {
            heading: "Balance sheet",
            body: "A balance sheet shows the financial position at a point in time. It lists assets, liabilities and owner's equity. Assets = liabilities + equity. Current assets include cash and stock; fixed assets include premises and equipment; liabilities include loans and payables.",
          },
          {
            heading: "Interpreting statements",
            body: "A strong gross profit margin suggests good control of production costs. A healthy current ratio suggests short-term liquidity. Rising liabilities or falling equity may signal financial risk. Statements should be compared over time or with competitors.",
          },
        ],
        keyFormulas: [
          { name: "Gross profit", statement: "Revenue − cost of sales" },
          { name: "Operating profit", statement: "Gross profit − operating expenses" },
          { name: "Balance sheet equation", statement: "Assets = liabilities + equity" },
        ],
        workedExample: {
          problem: "Revenue £120,000, cost of sales £70,000, expenses £25,000. Calculate gross and operating profit.",
          solution: "Gross profit = £120,000 − £70,000 = £50,000. Operating profit = £50,000 − £25,000 = £25,000.",
        },
      },
      questions: [
        {
          id: "ebz10-u5-statement-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does an income statement show?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Assets and liabilities at one date"
                    },
                    {
                              "id": "b",
                              "text": "Revenue, costs and profit over a period"
                    },
                    {
                              "id": "c",
                              "text": "Cash paid to suppliers only"
                    },
                    {
                              "id": "d",
                              "text": "Employee attendance records"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Income statement",
                              "statement": "Shows financial performance over a period."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The income statement summarises revenue, expenses and profit for a period.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Revenue, costs and profit over a period",
          "commonErrors": [
                    "Confusing income statement with balance sheet."
          ]
},
        },
        {
          id: "ebz10-u5-statement-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Revenue is £120,000, cost of sales is £70,000 and expenses are £25,000. Calculate gross profit and operating profit.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Gross profit",
                              "answer": 50000,
                              "unit": "£"
                    },
                    {
                              "label": "Operating profit",
                              "answer": 25000,
                              "unit": "£"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Profit calculation",
                              "statement": "Gross profit = revenue − cost of sales; operating profit = gross profit − expenses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Calculate gross profit: £120,000 − £70,000 = £50,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Subtract operating expenses: £50,000 − £25,000 = £25,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "State both results: gross profit £50,000 and operating profit £25,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Gross profit £50,000; operating profit £25,000.",
          "commonErrors": [
                    "Subtracting expenses from revenue for gross profit.",
                    "Using cost of sales as operating expenses."
          ]
},
        },
        {
          id: "ebz10-u5-statement-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between gross profit and net profit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Gross vs net profit",
                              "statement": "Gross profit is before operating expenses; net profit is after all deductions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gross profit = revenue − cost of sales only.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It shows profit before overheads such as rent and wages.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Net profit deducts all expenses, interest and tax.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "It shows the final profit available to owners or shareholders.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Gross profit is sales margin; net profit is after all costs and deductions.",
          "commonErrors": [
                    "Same figure assumed.",
                    "Operating expenses omitted."
          ]
},
        },
        {
          id: "ebz10-u5-statement-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A business lists the following items: cash, stock, delivery van, bank loan, owner's capital, rent expense and sales revenue.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Classify each item as an asset, liability, equity, income or expense.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain which items appear on the balance sheet.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Statement classification",
                              "statement": "Separate performance items from financial position items."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cash, stock and van are assets; bank loan is a liability; owner's capital is equity.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Rent is an expense and sales revenue is income.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Assets, liabilities and equity appear on the balance sheet.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Revenue and expenses appear on the income statement.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Assets/liabilities/equity on balance sheet; income/expenses on income statement.",
          "commonErrors": [
                    "Revenue treated as an asset.",
                    "Liability confused with equity."
          ]
},
        },
        {
          id: "ebz10-u5-statement-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A company's income statement shows falling gross profit margin but rising net profit margin.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two possible reasons for this pattern.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Suggest two actions management could take.",
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
                              "name": "Statement interpretation",
                              "statement": "Margins reveal different cost and pricing pressures."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Cost of sales may have risen faster than revenue.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Overheads or other expenses may have fallen, improving net margin.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Review suppliers, production efficiency or pricing to improve gross margin.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Continue controlling overheads but check they do not harm quality or growth.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Rising costs may hurt gross margin while lower overheads help net margin; review costs and efficiency.",
          "commonErrors": [
                    "Only one margin explained.",
                    "No action suggested."
          ]
},
        },
        {
          id: "ebz10-u5-statement-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A business has assets of £180,000 and liabilities of £70,000 at the start of the year. During the year it earns a net profit of £25,000 and distributes £5,000 to owners.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate owner's equity at the start of the year.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate owner's equity after profit and distribution.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain the balance-sheet equation.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain one limitation of using only one year's figures.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Equity calculation",
                              "statement": "Equity = assets − liabilities; retained profit increases equity."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Use assets − liabilities: £180,000 − £70,000 = £110,000.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "This is equity before current-year profit and distribution.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Profit retained in the business increases owner's equity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Add net profit and subtract drawings: £110,000 + £25,000 − £5,000 = £130,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "State final equity: £130,000.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Assets must equal liabilities plus equity at any date.",
                              "marks": 2,
                              "markCode": "AO1"
                    },
                    {
                              "part": "d",
                              "reasoning": "One year may be unusual; trends and comparison improve interpretation.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Equity at the start £110,000; equity at year end £130,000; compare over time for better judgement.",
          "commonErrors": [
                    "Forgetting to subtract drawings.",
                    "Treating liabilities as reducing assets directly."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz10-u5-accounting-notes",
      title: "Bookkeeping and financial statements — notes",
      summary: "Source documents support double-entry records; the trial balance checks totals; income statements show performance and balance sheets show position.",
      sections: [
        { heading: "Records", body: "Documents → day books → ledgers → trial balance." },
        { heading: "Income statement", body: "Revenue − cost of sales = gross profit; minus expenses = operating profit; minus interest/tax = net profit." },
        { heading: "Balance sheet", body: "Assets = liabilities + equity at a point in time." },
        { heading: "Interpretation", body: "Compare margins, liquidity and equity over time." },
      ],
    },
  ],
};
