import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olacc-u3-lesson-3-3",
  code: "3-3",
  title: "Interpreting Financial Statements",
  goal: "I CAN use ratios to analyse profitability and liquidity from financial statements.",
  standards: ["7706 3.3"],
  vocabulary: [
    { term: "Gross profit margin", definition: "Gross profit as % of sales — trading efficiency." },
    { term: "Net profit margin", definition: "Net profit as % of sales — overall profitability." },
    { term: "Current ratio", definition: "Current assets / current liabilities — liquidity measure." },
    { term: "Return on capital employed (ROCE)", definition: "Net profit as % of capital employed — returns to owners." },
    { term: "Gearing", definition: "Proportion of business financed by debt vs capital." },
    { term: "Liquidity", definition: "Ability to meet short-term debts." },
  ],
  concepts: [
    {
      id: "olacc-u3-ratios",
      title: "Key accounting ratios",
      skill: "Calculate and interpret profitability and liquidity ratios.",
      lesson: {
        sections: [
          { heading: "Profitability ratios", body: "- **Gross profit margin** = GP ÷ sales × 100 — how much profit per dollar of sales before expenses.\n- **Net profit margin** = NP ÷ sales × 100 — final profit per dollar.\n- **ROCE** = NP ÷ capital employed × 100 — return on owners' investment." },
          { heading: "Liquidity ratios", body: "- **Current ratio** = current assets ÷ current liabilities. Above 1 means assets exceed short-term debts; 1.5-2 is healthy.\n- **Acid test** = (current assets - stock) ÷ current liabilities — stricter liquidity check." },
          { heading: "Interpreting", body: "Compare ratios to previous years, competitors, industry averages. A falling margin may mean rising costs or price pressure." },
        ],
        keyFormulas: [
          { name: "GP margin", statement: "Gross profit / Sales × 100" },
          { name: "NP margin", statement: "Net profit / Sales × 100" },
          { name: "Current ratio", statement: "Current assets / Current liabilities" },
        ],
        workedExample: {
          problem: "Sales $20,000, GP $8,000, NP $4,000, current assets $9,000, current liabilities $6,000. Calculate margins and current ratio.",
          solution: "GP margin = 8000/20000 = 40%. NP margin = 4000/20000 = 20%. Current ratio = 9000/6000 = 1.5.",
        },
      },
      questions: [
        {
          id: "olacc-u3-rt-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The current ratio measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Liquidity" },
            { id: "b", text: "Profitability" },
            { id: "c", text: "Growth" },
            { id: "d", text: "Gearing" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Current ratio", statement: "Liquidity measure." }], steps: [{ reasoning: "Liquidity.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Liquidity" },
        },
        {
          id: "olacc-u3-rt-q2", difficulty: "core", totalMarks: 2,
          stem: "Calculate net profit margin: sales $15,000, net profit $3,000.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "NP margin", statement: "NP/Sales ×100." }], steps: [
            { reasoning: "$3,000/$15,000 × 100 = 20%.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "20%" },
        },
        {
          id: "olacc-u3-rt-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what a current ratio of 0.8 tells you about a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "Below 1 = risk." }], steps: [
            { reasoning: "Current assets < current liabilities.", marks: 1, markCode: "M" },
            { reasoning: "May struggle to pay short-term debts.", marks: 1, markCode: "M" },
            { reasoning: "Liquidity risk — needs attention.", marks: 1, markCode: "M" },
            { reasoning: "Clear interpretation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Below 1 — the business may not have enough short-term assets to cover its debts." },
        },
        {
          id: "olacc-u3-rt-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Ratios review.",
          parts: [
            { label: "a", prompt: "Gross profit margin formula?", marks: 1 },
            { label: "b", prompt: "Current ratio formula?", marks: 1 },
            { label: "c", prompt: "Sales $10k, GP $4k. GP margin?", marks: 2 },
            { label: "d", prompt: "CA $12k, CL $8k. Current ratio?", marks: 1 },
            { label: "e", prompt: "What does ROCE measure?", marks: 2 },
            { label: "f", prompt: "Why compare ratios over time?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Ratios", statement: "Formulas, calculation, interpretation." },
          ], steps: [
            { part: "a", reasoning: "GP/Sales ×100.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "CA/CL.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "40%.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "1.5.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Return on capital employed.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Owner's return %.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Shows trends/improvement.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Identifies problems early.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) GP/S (b) CA/CL (c) 40% (d) 1.5 (e) owner return (f) trends" },
        },
        {
          id: "olacc-u3-rt-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The gross profit margin measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Trading efficiency — gross profit as a percentage of sales" },
            { id: "b", text: "Working capital" },
            { id: "c", text: "Gearing" },
            { id: "d", text: "Liquidity" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "GP margin", statement: "GP/Sales %." }], steps: [{ reasoning: "It shows gross profit per dollar of sales before expenses.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Trading efficiency" },
        },
        {
          id: "olacc-u3-rt-q6", difficulty: "core", totalMarks: 1,
          stem: "The current ratio is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Current assets / current liabilities" },
            { id: "b", text: "Sales / current assets" },
            { id: "c", text: "Current liabilities / current assets" },
            { id: "d", text: "Net profit / capital" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "CA/CL." }], steps: [{ reasoning: "Current assets divided by current liabilities.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Current assets / current liabilities" },
        },
        {
          id: "olacc-u3-rt-q7", difficulty: "challenge", totalMarks: 3,
          stem: "Sales $40,000, gross profit $12,000, net profit $6,000, current assets $15,000, current liabilities $10,000. Enter (a) the gross profit margin (%), (b) the net profit margin (%), (c) the current ratio.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 30 }, { label: "(b)", answer: 15 }, { label: "(c)", answer: 1.5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Ratios", statement: "Margins and current ratio." }], steps: [
            { reasoning: "GP margin = $12,000/$40,000 × 100 = 30%.", marks: 1, markCode: "M" },
            { reasoning: "NP margin = $6,000/$40,000 × 100 = 15%.", marks: 1, markCode: "M" },
            { reasoning: "Current ratio = $15,000/$10,000 = 1.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 30% (b) 15% (c) 1.5" },
        },
        {
          id: "olacc-u3-rt-q8", difficulty: "core", totalMarks: 2,
          stem: "What does the acid test ratio measure, and how does it differ from the current ratio?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Acid test", statement: "Stricter liquidity." }], steps: [
            { reasoning: "It is (current assets - stock) / current liabilities — a stricter liquidity check.", marks: 1, markCode: "M" },
            { reasoning: "It excludes stock because stock may not convert to cash quickly.", marks: 1, markCode: "A" },
          ], finalAnswer: "Acid test = (current assets - stock)/current liabilities; it is stricter because stock is excluded." },
        },
        {
          id: "olacc-u3-rt-q9", difficulty: "core", totalMarks: 1,
          stem: "A current ratio of 2.5 suggests the business…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Has more than enough short-term assets — liquidity may be excessive" },
            { id: "b", text: "Has no liabilities" },
            { id: "c", text: "Cannot pay its debts" },
            { id: "d", text: "Is making a loss" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Current ratio", statement: "Above ~2 may be excessive." }], steps: [{ reasoning: "A high ratio means assets comfortably exceed short-term debts — possibly too much cash tied up.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Liquidity may be excessive" },
        },
        {
          id: "olacc-u3-rt-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why financial ratios should be compared with previous years and with competitors.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Ratio interpretation", statement: "Context matters." }], steps: [
            { reasoning: "Comparing with previous years shows trends — improvement or deterioration.", marks: 1, markCode: "M" },
            { reasoning: "Comparing with competitors shows whether performance is above or below the industry.", marks: 1, markCode: "M" },
            { reasoning: "A ratio alone means little without a benchmark.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Ratios need context — trends over time and comparison with competitors reveal true performance." },
        },
        {
          id: "olacc-u3-rt-q11", difficulty: "core", totalMarks: 2,
          stem: "Current assets are $20,000 (including stock of $8,000) and current liabilities are $8,000. Enter (a) the current ratio, (b) the acid test ratio.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2.5 }, { label: "(b)", answer: 1.5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Liquidity ratios", statement: "Current vs acid test." }], steps: [
            { reasoning: "Current ratio = $20,000/$8,000 = 2.5.", marks: 1, markCode: "M" },
            { reasoning: "Acid test = ($20,000 - $8,000)/$8,000 = 1.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 2.5 (b) 1.5" },
        },
        {
          id: "olacc-u3-rt-q12", difficulty: "core", totalMarks: 2,
          stem: "What does ROCE (return on capital employed) measure?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "ROCE", statement: "NP/capital employed %." }], steps: [
            { reasoning: "ROCE = net profit / capital employed × 100.", marks: 1, markCode: "M" },
            { reasoning: "It shows the return earned on the owners' investment — a key profitability measure.", marks: 1, markCode: "A" },
          ], finalAnswer: "ROCE measures net profit as a percentage of capital employed — the return on the owners' investment." },
        },
        {
          id: "olacc-u3-rt-q13", difficulty: "foundation", totalMarks: 1,
          stem: "Which ratio best indicates a business's ability to pay its short-term debts?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Net profit margin" },
            { id: "b", text: "ROCE" },
            { id: "c", text: "Gross profit margin" },
            { id: "d", text: "Current ratio" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Liquidity", statement: "Current ratio." }], steps: [{ reasoning: "The current ratio compares short-term assets with short-term debts.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Current ratio" },
        },
        {
          id: "olacc-u3-rt-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A business's gross profit margin fell from 35% to 28% over two years. Suggest two possible causes.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Margin analysis", statement: "Causes of change." }], steps: [
            { reasoning: "Selling prices may have been reduced to stay competitive.", marks: 1, markCode: "M" },
            { reasoning: "Cost of sales may have risen — e.g. higher purchase prices or supplier charges.", marks: 1, markCode: "M" },
            { reasoning: "Sales mix may have changed toward lower-margin products.", marks: 1, markCode: "M" },
            { reasoning: "Two or more valid causes given.", marks: 1, markCode: "A" },
          ], finalAnswer: "Possible causes: lower selling prices, higher cost of sales, or a shift to lower-margin products." },
        },
        {
          id: "olacc-u3-rt-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Sales are $30,000, gross profit is $12,000, net profit is $9,000 and capital employed is $45,000. Enter (a) the gross profit margin (%), (b) the net profit margin (%), (c) ROCE (%).",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 40 }, { label: "(b)", answer: 30 }, { label: "(c)", answer: 20 }] },
          markscheme: { principles: [{ kind: "principle", name: "Profitability ratios", statement: "Margins and ROCE." }], steps: [
            { reasoning: "GP margin = $12,000/$30,000 × 100 = 40%.", marks: 1, markCode: "M" },
            { reasoning: "NP margin = $9,000/$30,000 × 100 = 30%.", marks: 1, markCode: "M" },
            { reasoning: "ROCE = $9,000/$45,000 × 100 = 20%.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 40% (b) 30% (c) 20%" },
        },
        {
          id: "olacc-u3-rt-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Key ratios review.",
          parts: [
            { label: "a", prompt: "Give the formula for gross profit margin and state what it measures.", marks: 2 },
            { label: "b", prompt: "Give the formula for the current ratio.", marks: 1 },
            { label: "c", prompt: "Give the formula for the acid test ratio.", marks: 1 },
            { label: "d", prompt: "Sales $25,000, GP $10,000. GP margin?", marks: 2 },
            { label: "e", prompt: "Interpret a current ratio of 1.5.", marks: 2 },
            { label: "f", prompt: "What does ROCE measure?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Ratios", statement: "Formulas, calculation, interpretation." },
          ], steps: [
            { part: "a", reasoning: "GP/Sales × 100 — trading efficiency.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "CA/CL.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "(CA - stock)/CL.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "40%.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Current assets exceed current liabilities by a comfortable margin — healthy liquidity.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Clear interpretation.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "Return on capital employed — owner's return %.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) GP/S% (b) CA/CL (c) (CA-stock)/CL (d) 40% (e) healthy (f) owner return" },
        },
      ],
    },
    {
      id: "olacc-u3-users",
      title: "Users of financial statements",
      skill: "Explain who uses financial statements and what they look for.",
      lesson: {
        sections: [
          { heading: "Internal users", body: "- **Owner**: profit, return on investment, business health.\n- **Manager**: performance, costs, efficiency, planning." },
          { heading: "External users", body: "- **Lenders/banks**: ability to repay — liquidity and gearing.\n- **Suppliers**: creditworthiness — will they pay?\n- **Government/tax**: taxable profit.\n- **Investors**: future returns and risk." },
          { heading: "Different needs", body: "Each user extracts different info: owner wants profit; bank wants security; supplier wants payment likelihood." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a bank manager study a company's balance sheet before lending?",
          solution: "To check liquidity (can it pay debts?) and gearing (how much is borrowed?) — assessing repayment risk.",
        },
      },
      questions: [
        {
          id: "olacc-u3-us-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A bank lending to a business mainly examines…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only sales" },
            { id: "b", text: "Liquidity and gearing" },
            { id: "c", text: "Only stock levels" },
            { id: "d", text: "Only drawings" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Bank: repayment ability." }], steps: [{ reasoning: "Liquidity+gearing.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Liquidity and gearing" },
        },
        {
          id: "olacc-u3-us-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two internal and two external users of financial statements.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Users", statement: "Internal vs external." }], steps: [
            { reasoning: "Internal: owner/manager.", marks: 1, markCode: "M" },
            { reasoning: "External: bank/supplier/tax.", marks: 1, markCode: "A" },
          ], finalAnswer: "Internal: owner, manager. External: bank, supplier, government, investors." },
        },
        {
          id: "olacc-u3-us-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why different users need different information from financial statements.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Different needs." }], steps: [
            { reasoning: "Owner wants profit/returns.", marks: 1, markCode: "M" },
            { reasoning: "Bank wants repayment security.", marks: 1, markCode: "M" },
            { reasoning: "Supplier wants payment likelihood.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Each user has different goals — profit, security, payment — so they extract different figures." },
        },
        {
          id: "olacc-u3-us-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Users of statements review.",
          parts: [
            { label: "a", prompt: "Two internal users?", marks: 2 },
            { label: "b", prompt: "Two external users?", marks: 2 },
            { label: "c", prompt: "What does an owner look for?", marks: 2 },
            { label: "d", prompt: "What does a supplier look for?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Users", statement: "Internal/external needs." },
          ], steps: [
            { part: "a", reasoning: "Owner/manager.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bank/supplier/tax.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Profit and return.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Creditworthiness — will they pay?", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Liquidity/profitability checks.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) owner+manager (b) bank+supplier (c) profit+return (d) payment ability" },
        },
        {
          id: "olacc-u3-us-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A potential investor considering buying shares in a business mainly wants to assess…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Future returns and the risk involved" },
            { id: "b", text: "The daily cash position only" },
            { id: "c", text: "Only last week's sales" },
            { id: "d", text: "The number of employees" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Investor: returns and risk." }], steps: [{ reasoning: "Investors want to know expected returns and the risk of the business.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Future returns and risk" },
        },
        {
          id: "olacc-u3-us-q6", difficulty: "core", totalMarks: 1,
          stem: "The government and tax authority use financial statements mainly to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Decide daily pricing" },
            { id: "b", text: "Choose suppliers" },
            { id: "c", text: "Set staff wages" },
            { id: "d", text: "Calculate the business's taxable profit" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Government: tax." }], steps: [{ reasoning: "The tax authority needs reported profit to assess tax.", marks: 1, markCode: "M" }], finalAnswer: "**(d)** Calculate taxable profit" },
        },
        {
          id: "olacc-u3-us-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Six interested parties: the owner, a manager, a bank, two suppliers and the tax office. Enter (a) the number of internal users, (b) the number of external users.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2 }, { label: "(b)", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Internal vs external", statement: "Inside vs outside." }], steps: [
            { reasoning: "Owner and manager are internal — 2.", marks: 1, markCode: "M" },
            { reasoning: "Bank, two suppliers and tax office are external — 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 2 (b) 4" },
        },
        {
          id: "olacc-u3-us-q8", difficulty: "core", totalMarks: 2,
          stem: "Why does a supplier study a customer's financial statements before granting credit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Supplier: creditworthiness." }], steps: [
            { reasoning: "The supplier wants to know whether the customer will be able to pay.", marks: 1, markCode: "M" },
            { reasoning: "Liquidity and profitability figures help assess that risk.", marks: 1, markCode: "A" },
          ], finalAnswer: "To assess the customer's creditworthiness — whether it is likely to pay its debts." },
        },
        {
          id: "olacc-u3-us-q9", difficulty: "core", totalMarks: 1,
          stem: "Which user relies most heavily on the accuracy of reported profit for tax assessment?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The government/tax authority" },
            { id: "b", text: "A passing customer" },
            { id: "c", text: "A supplier" },
            { id: "d", text: "The owner" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Government: tax." }], steps: [{ reasoning: "Tax is calculated on reported profit.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Government/tax authority" },
        },
        {
          id: "olacc-u3-us-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the same financial statements can be useful to different users for different purposes.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Different needs." }], steps: [
            { reasoning: "The owner uses them to judge profit and business health.", marks: 1, markCode: "M" },
            { reasoning: "A bank uses them to assess whether loans can be repaid.", marks: 1, markCode: "M" },
            { reasoning: "A supplier uses them to judge payment reliability; the government for tax.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Each user extracts different figures — profit, liquidity, gearing — matching their own decisions." },
        },
        {
          id: "olacc-u3-us-q11", difficulty: "core", totalMarks: 2,
          stem: "Consider these users: bank, owner, manager, tax office, supplier, investor. Enter (a) the number of internal users, (b) the number of external users.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 2 }, { label: "(b)", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Internal vs external", statement: "Inside vs outside." }], steps: [
            { reasoning: "Owner and manager are internal — 2.", marks: 1, markCode: "M" },
            { reasoning: "Bank, tax office, supplier and investor are external — 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 2 (b) 4" },
        },
        {
          id: "olacc-u3-us-q12", difficulty: "core", totalMarks: 2,
          stem: "What does a business manager typically look for in the financial statements?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Manager: performance." }], steps: [
            { reasoning: "Performance measures — costs, efficiency and profitability.", marks: 1, markCode: "M" },
            { reasoning: "Information for planning and controlling the business.", marks: 1, markCode: "A" },
          ], finalAnswer: "Managers look at costs, efficiency and profitability to monitor performance and plan." },
        },
        {
          id: "olacc-u3-us-q13", difficulty: "challenge", totalMarks: 1,
          stem: "A bank manager deciding whether to lend to a business is most likely to focus on…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the owner's drawings" },
            { id: "b", text: "Only last month's takings" },
            { id: "c", text: "Liquidity and gearing — the ability to repay" },
            { id: "d", text: "The number of suppliers" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Bank: repayment ability." }], steps: [{ reasoning: "The bank assesses whether the business can service and repay the loan.", marks: 1, markCode: "M" }], finalAnswer: "**(c)** Liquidity and gearing" },
        },
        {
          id: "olacc-u3-us-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Compare what the owner and the bank would each look for in the same set of accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Users", statement: "Owner vs bank." }], steps: [
            { reasoning: "The owner focuses on profit, return on investment and overall health.", marks: 1, markCode: "M" },
            { reasoning: "The bank focuses on liquidity and gearing — can the loan be repaid?", marks: 1, markCode: "M" },
            { reasoning: "Both may look at profitability but for different decisions.", marks: 1, markCode: "M" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Owner seeks profit and returns; bank seeks security — liquidity and gearing for repayment." },
        },
        {
          id: "olacc-u3-us-q15", difficulty: "foundation", totalMarks: 2,
          stem: "A business has these users: the owner, two managers, a bank, two suppliers and the government. Enter (a) the number of internal users, (b) the number of external users.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 3 }, { label: "(b)", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Internal vs external", statement: "Inside vs outside." }], steps: [
            { reasoning: "Owner plus two managers = 3 internal users.", marks: 1, markCode: "M" },
            { reasoning: "Bank, two suppliers and government = 4 external users.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 3 (b) 4" },
        },
        {
          id: "olacc-u3-us-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Users of financial statements review.",
          parts: [
            { label: "a", prompt: "Name two internal users and what each looks for.", marks: 2 },
            { label: "b", prompt: "Name two external users and what each looks for.", marks: 2 },
            { label: "c", prompt: "What does a supplier look for?", marks: 2 },
            { label: "d", prompt: "What does a potential investor look for?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Users", statement: "Internal/external needs." },
          ], steps: [
            { part: "a", reasoning: "Owner → profit; manager → performance.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct with needs.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Bank → repayment; government → tax (or supplier/investor).", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct with needs.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Creditworthiness — will they pay?", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Liquidity/profitability checks.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Future returns and risk.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Profitability and growth prospects.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) owner+manager (b) bank+govt (c) payment ability (d) returns+risk" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u3-3-3-notes", title: "Interpreting statements — notes", summary: "Profitability/liquidity ratios and users of financial statements.",
      sections: [
        { heading: "Ratios", body: "GP/NP margins = profitability; current ratio = liquidity; ROCE = owner return." },
        { heading: "Users", body: "Owner→profit; manager→performance; bank→repayment; supplier→payment; government→tax." },
      ] },
  ],
};
