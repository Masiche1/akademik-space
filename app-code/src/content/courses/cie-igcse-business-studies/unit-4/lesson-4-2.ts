import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "cieibs-u4-lesson-4-2",
  code: "4-2",
  title: "Finance in Depth: Sources, Cash Flow and Break-even",
  goal: "I CAN evaluate sources of finance, interpret cash flow and calculate break-even.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Finance section"],
  vocabulary: [
    {
      term: "Internal finance",
      definition:
        "Funds from within the business — retained profit, owner's capital.",
    },
    {
      term: "External finance",
      definition: "Funds from outside — loans, shares, overdrafts.",
    },
    {
      term: "Cash flow",
      definition: "The movement of money in and out of a business over time.",
    },
    {
      term: "Break-even",
      definition: "The level of output where total revenue equals total cost.",
    },
    {
      term: "Retained profit",
      definition: "Profit kept in the business rather than distributed.",
    },
    {
      term: "Overdraft",
      definition: "Short-term borrowing from a bank up to an agreed limit.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u4-s2-finance",
      title: "Sources of finance and cash management",
      skill: "Choose appropriate finance and manage cash flow.",
      lesson: {
        sections: [
          {
            heading: "Sources of finance",
            body: "Internal sources include retained profit, owner's capital and selling assets — they avoid interest but are limited. External sources include bank loans (long-term, interest-bearing), overdrafts (short-term, flexible), shares (selling ownership, no repayment), hire purchase and leasing (pay over time for assets). The choice depends on purpose, amount needed, time horizon and whether the owner wants to give up control.",
          },
          {
            heading: "Cash flow versus profit",
            body: "Profit is revenue minus costs over a period; cash flow is actual money movement. A business can be profitable yet fail from poor cash flow — e.g., credit sales raise profit but delay cash. Cash flow forecasts project inflows and outflows to spot shortfalls early. Managing cash involves speeding up receipts (prompt payment, discounts), delaying payments, and keeping a cash reserve.",
          },
          {
            heading: "Break-even analysis",
            body: "Break-even output = fixed costs / (price per unit − variable cost per unit). Below break-even the firm makes a loss; above it, profit grows. Break-even analysis helps set prices, decide output and assess risk. Contribution per unit = selling price − variable cost per unit.",
          },
        ],
      },
      questions: [
    {
      id: "cieibs-u4-fi-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the difference between internal and external finance?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Internal finance",
            statement: "From within the business.",
          },
          {
            kind: "definition",
            name: "External finance",
            statement: "From outside sources.",
          },
        ],
        steps: [
          {
            reasoning:
              "Internal finance comes from within (retained profit, owner's capital); external finance comes from outside (loans, shares, overdrafts).",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Internal = own funds; external = borrowed/investor funds.",
      },
    },
    {
      id: "cieibs-u4-fi-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a bank overdraft?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Buying an asset on credit" },
          { id: "b", text: "Selling shares to the public" },
          { id: "c", text: "A long-term loan with fixed repayments" },
          {
            id: "d",
            text: "Short-term borrowing up to an agreed limit, charged interest",
          },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Overdraft",
            statement: "Short-term flexible borrowing.",
          },
        ],
        steps: [
          {
            reasoning:
              "An overdraft lets a business borrow up to an agreed limit short-term, paying interest only on the amount used.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** Short-term borrowing up to an agreed limit, charged interest",
      },
    },
    {
      id: "cieibs-u4-fi-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'retained profit'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Revenue minus wages only" },
          { id: "b", text: "Profit paid out to shareholders" },
          { id: "c", text: "Profit kept in the business for reinvestment" },
          { id: "d", text: "Profit borrowed from a bank" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Retained profit",
            statement: "Profit kept for reinvestment.",
          },
        ],
        steps: [
          {
            reasoning:
              "Retained profit is profit kept in the business rather than distributed, available for internal finance.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Profit kept in the business for reinvestment",
      },
    },
    {
      id: "cieibs-u4-fi-q4",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Define 'cash flow' and 'break-even'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Cash flow",
            statement: "Money movement over time.",
          },
          {
            kind: "definition",
            name: "Break-even",
            statement: "Revenue equals cost.",
          },
        ],
        steps: [
          {
            reasoning:
              "Cash flow is the movement of money into and out of a business over a period.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Break-even is the output level where total revenue equals total cost, producing neither profit nor loss.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "Cash flow: money in/out; break-even: TR = TC.",
      },
    },
    {
      id: "cieibs-u4-fi-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which source of finance does NOT require repayment?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Retained profit" },
          { id: "b", text: "Bank loan" },
          { id: "c", text: "Hire purchase" },
          { id: "d", text: "Overdraft" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Internal finance",
            statement: "No repayment needed.",
          },
        ],
        steps: [
          {
            reasoning:
              "Retained profit is internal finance — it requires no repayment or interest, unlike loans and overdrafts.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Retained profit",
      },
    },
    {
      id: "cieibs-u4-fi-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why a profitable business can still fail.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Profit vs cash flow",
            statement: "Profit ≠ cash.",
          },
        ],
        steps: [
          {
            reasoning:
              "Profit counts credit sales as revenue, but cash may not arrive until later.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "If debts pile up faster than cash arrives, the business cannot pay suppliers, wages or loans despite showing profit.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Poor cash flow management — e.g., overstocking or late customer payments — causes liquidity failure even in profitable firms.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Profitability does not guarantee cash availability; liquidity failure kills businesses.",
        commonErrors: ["Claiming profitable businesses cannot fail."],
      },
    },
    {
      id: "cieibs-u4-fi-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Compare bank loans and shares as sources of finance.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Bank loan",
            statement: "Repayable with interest.",
          },
          {
            kind: "definition",
            name: "Shares",
            statement: "Ownership sold, no repayment.",
          },
        ],
        steps: [
          {
            reasoning:
              "Bank loans must be repaid with interest but do not dilute ownership; suitable for short/medium-term needs.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Selling shares raises capital with no repayment but dilutes control and profit rights; suitable for long-term growth.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The choice depends on amount needed, time horizon and willingness to share control.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Loans = repayable, keep control; shares = no repayment, lose some control.",
        commonErrors: ["Claiming shares must be repaid."],
      },
    },
    {
      id: "cieibs-u4-fi-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "A business has fixed costs of $20,000, sells at $10 per unit and variable cost is $6 per unit. Calculate break-even output.",
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "formula", name: "Break-even", statement: "FC / (P − VC)." },
        ],
        steps: [
          {
            reasoning:
              "Contribution per unit = price − variable cost = $10 − $6 = $4.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Break-even output = fixed costs / contribution = $20,000 / $4 = 5,000 units.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The business breaks even at 5,000 units and profits above that.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "5,000 units",
      },
    },
    {
      id: "cieibs-u4-fi-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain two ways a business can improve its cash flow.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Cash flow management",
            statement: "Speed receipts, delay payments.",
          },
        ],
        steps: [
          {
            reasoning:
              "Speed up receipts: offer early-payment discounts, tighten credit terms, or chase overdue debtors.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Delay payments where possible: negotiate longer supplier credit, stagger payments, or use overdrafts for short-term gaps.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Maintaining accurate cash flow forecasts lets the business anticipate and plan for shortfalls.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Accelerate inflows and delay outflows; forecast to anticipate gaps.",
        commonErrors: ["Equating cash flow improvement with profit increase."],
      },
    },
    {
      id: "cieibs-u4-fi-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "What does a cash flow forecast show?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Projected money inflows and outflows over time" },
          { id: "b", text: "Annual profit only" },
          { id: "c", text: "Tax owed to government" },
          { id: "d", text: "The number of employees" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Cash flow forecast",
            statement: "Projected inflows/outflows.",
          },
        ],
        steps: [
          {
            reasoning:
              "A cash flow forecast projects expected money inflows and outflows to identify potential shortfalls.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Projected money inflows and outflows over time",
      },
    },
    {
      id: "cieibs-u4-fi-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) What is contribution per unit? (b) How is it calculated?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Contribution",
            statement: "Price minus variable cost.",
          },
        ],
        steps: [
          {
            reasoning:
              "Contribution per unit is the amount each unit sold contributes toward covering fixed costs and profit.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It is calculated as selling price minus variable cost per unit.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "Contribution = price − variable cost per unit.",
      },
    },
    {
      id: "cieibs-u4-fi-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why a business might choose hire purchase over a bank loan for equipment.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Hire purchase",
            statement: "Pay for asset over time.",
          },
        ],
        steps: [
          {
            reasoning:
              "Hire purchase spreads payments over time, preserving cash for other needs rather than paying the full price upfront.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The business can use the equipment to generate revenue while paying for it.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Ownership passes to the business after the final payment, unlike leasing.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Spread payments, use asset while paying, gain ownership.",
        commonErrors: ["Confusing hire purchase with leasing."],
      },
    },
    {
      id: "cieibs-u4-fi-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A business forecasts cash inflows of $50,000 and outflows of $65,000 next month. Assess its cash position and recommend action.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Cash flow analysis",
            statement: "Identify shortfall and remedies.",
          },
        ],
        steps: [
          {
            reasoning:
              "The forecast shows a $15,000 cash shortfall — outflows exceed inflows.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Without action the business cannot meet its obligations; it faces liquidity failure.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Options: arrange an overdraft, delay payments to suppliers, speed up customer receipts, or reduce spending.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Recommendation: secure short-term finance (overdraft) and renegotiate payment terms to close the gap.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "$15,000 shortfall — use overdraft and payment management.",
        commonErrors: [
          "Ignoring the forecast and assuming profit covers cash needs.",
        ],
      },
    },
    {
      id: "cieibs-u4-fi-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether retained profit is the best source of finance for a growing business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Internal vs external.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: retained profit is attractive but limited by how much profit the business makes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages: no interest, no repayment, no loss of control, no dilution of ownership.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Limitations: may be too small for major expansion; retaining all profit limits dividends to owners; slow accumulation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: retained profit suits steady growth, but large expansion may require external finance.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Good for control but limited in scale; combine with external finance for growth.",
        commonErrors: ["Treating retained profit as unlimited."],
      },
    },
    {
      id: "cieibs-u4-fi-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess the view that break-even analysis is of limited use to a business.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Break-even utility.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: break-even analysis is a useful planning tool but has limitations.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Usefulness: shows minimum output needed, aids pricing and production decisions, reveals how changes in costs or price affect the break-even point.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Limitations: assumes costs behave simply (fixed/variable), ignores demand uncertainty, and real businesses face more complex cost structures.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: it is a valuable simplification for planning, not a precise predictor.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Valuable for planning despite simplifying assumptions.",
        commonErrors: ["Dismissing or praising break-even without balance."],
      },
    },
    {
      id: "cieibs-u4-fi-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether selling shares is better than borrowing for a business seeking expansion.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Shares vs loans.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: the better option depends on the business's priorities — control versus cost.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Shares: no repayment or interest, but dilute ownership and profit; may attract investors who share risk.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Loans: retain full control and keep all profit, but require repayment with interest regardless of performance.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: borrowing suits established firms wanting control; shares suit businesses needing large capital without repayment pressure.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Depends on control priorities and repayment capacity.",
        commonErrors: ["Choosing one option without weighing trade-offs."],
      },
    },
    {
      id: "cieibs-u4-fi-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the main risk of relying heavily on overdrafts?",
      response: {
        type: "mcq",
        choices: [
          {
            id: "a",
            text: "Interest costs and the bank can demand repayment at short notice",
          },
          { id: "b", text: "Losing ownership of the business" },
          { id: "c", text: "Paying a fixed monthly fee" },
          { id: "d", text: "Having to share profits" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Overdraft risk",
            statement: "Short-term, recallable.",
          },
        ],
        steps: [
          {
            reasoning:
              "Overdrafts are short-term and the bank can demand repayment or reduce the limit, making them risky for long-term needs.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** Interest costs and the bank can demand repayment at short notice",
      },
    },
    {
      id: "cieibs-u4-fi-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the relationship between fixed costs, variable costs and total cost.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Cost structure",
            statement: "TC = FC + VC.",
          },
        ],
        steps: [
          {
            reasoning:
              "Fixed costs do not change with output — rent, salaries, insurance.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Variable costs change with output — raw materials, packaging, hourly labour.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Total cost = fixed costs + variable costs; it rises with output only through variable costs.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "TC = FC + VC; fixed costs constant, variable costs rise with output.",
      },
    },
    {
      id: "cieibs-u4-fi-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how a business could use a cash flow forecast to plan.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "skill",
            name: "Forecasting",
            statement: "Plan for cash gaps.",
          },
        ],
        steps: [
          {
            reasoning:
              "Project expected inflows (sales, loans) and outflows (wages, rent, purchases) month by month.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Identify months where outflows exceed inflows — the cash gap.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Arrange finance or adjust spending to cover the gap before it occurs.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Forecast identifies cash gaps so finance can be arranged in advance.",
      },
    },
    {
      id: "cieibs-u4-fi-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the statement: 'A business with strong profits will always survive.'",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Profit vs survival.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: strong profits help survival but do not guarantee it.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Supporting evidence: profits provide internal funds, creditworthiness and resilience against shocks.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Counter-argument: businesses fail from illiquidity (cash timing), sudden market changes, or mismanagement despite historical profit.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: profit is necessary but not sufficient — cash flow, markets and management determine survival.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Profits help but do not guarantee survival; cash flow and management matter.",
        commonErrors: ["Equating profit with survival."],
      },
    },
      ],
    },
  ],
};
