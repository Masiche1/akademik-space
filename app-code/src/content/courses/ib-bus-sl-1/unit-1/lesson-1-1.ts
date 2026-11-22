import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "bus-u1-lesson-1-1",
  code: "1-1",
  title: "Business aims and stakeholders",
  goal: "I CAN explain the main business objectives, identify internal and external stakeholders and evaluate conflicts between their interests.",
  standards: ["Paper 1", "Paper 2", "Topic 1.1"],
  vocabulary: [
    {
      term: "Business objective",
      definition:
        "A specific target a business sets, such as profit, growth, market share or survival.",
    },
    {
      term: "Profit maximisation",
      definition:
        "The traditional objective of producing at the output level where marginal revenue equals marginal cost.",
    },
    {
      term: "Growth objective",
      definition:
        "Increasing the size of the business through higher sales, more branches or acquisitions.",
    },
    {
      term: "Market share",
      definition:
        "The proportion of total sales in a market held by one business.",
    },
    {
      term: "Stakeholder",
      definition:
        "Any individual or group with an interest in the activities and outcomes of a business.",
    },
    {
      term: "Internal stakeholder",
      definition:
        "Stakeholders inside the business: owners, managers and employees.",
    },
    {
      term: "External stakeholder",
      definition:
        "Stakeholders outside the business: customers, suppliers, the government and the local community.",
    },
  ],
  concepts: [
    {
      id: "bus-u1-objectives",
      title: "Business objectives",
      skill:
        "Explain and evaluate the objectives of profit, growth, market share, survival and social aims.",
      lesson: {
        sections: [
          {
            heading: "The profit motive and economic objectives",
            body: "Traditional **profit maximisation** assumes firms produce where marginal revenue equals marginal cost. In practice most businesses pursue **satisficing**: earning adequate profit while balancing other goals. Key economic objectives include **profit growth** (rising profitability), **growth** (larger scale through sales, branches or acquisitions), **market share** (dominating a market can bring economies of scale) and **survival** (the priority of small firms facing intense competition).",
          },
          {
            heading: "Social and personal objectives",
            body: "Many businesses adopt **social objectives**: environmental sustainability, charitable giving or ethical sourcing. Small owner-managed firms often maximise the owner's **personal objectives** — work-life balance, independence, status — rather than pure profit. Public companies answer to shareholders expecting dividends, while government-owned firms may pursue social aims instead.",
          },
          {
            heading: "Conflicts between objectives",
            body: "Objectives can conflict: short-term profit may be sacrificed for long-term growth investment; maximising market share can mean low prices and thin margins; survival may mean accepting lower returns. Exam questions often ask you to **evaluate** which objective matters most depending on business size, stage of the business cycle and stakeholder pressures.",
          },
        ],
        keyFormulas: [
          {
            name: "Profit maximisation",
            statement:
              "Produce where marginal revenue (MR) = marginal cost (MC)",
          },
          {
            name: "Market share",
            statement: "Market share = (firm sales / total market sales) x 100",
          },
        ],
        workedExample: {
          problem:
            "Explain why a new small business might prioritise survival over profit maximisation.",
          solution:
            "In the early stages a firm competes against established rivals. Low prices, heavy promotion and reinvesting all cash into the business build customer loyalty and market position. Profits are deferred until the firm is secure — survival secures the long-term ability to earn profit.",
        },
      },
      questions: [
        {
          id: "bus-u1-obj-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A business that aims to become the largest seller in its market is pursuing which objective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social objectives" },
              { id: "b", text: "Market share growth" },
              { id: "c", text: "Survival" },
              { id: "d", text: "Profit maximisation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Market share objective",
                statement:
                  "Increasing the proportion of total market sales held by the firm.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Becoming the largest seller means capturing the biggest share of total sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Market share growth",
            commonErrors: [
              "Confusing market share with growth — growth is size, market share is proportion of the market.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's sales are $12$ million and total market sales are $80$ million. Calculate its market share.",
          response: {
            type: "numeric",
            parts: [{ label: "Market share (%)", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Market share",
                statement:
                  "Market share = (firm sales / total market sales) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Apply the market share formula.",
                working: "\\frac{12}{80} \\times 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide the figures.",
                working: "0.15 \\times 100",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the percentage.",
                working: "15\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15\\%$",
            commonErrors: [
              "Reporting 0.15 instead of 15% — forgetting to multiply by 100.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the pursuit of growth can conflict with the objective of profit maximisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objective conflict",
                statement:
                  "Growth often requires short-term costs that reduce current profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Growth needs investment in new capacity, marketing, research or acquisitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This spending reduces current profits even though it may raise future profits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low introductory prices used to win market share also cut profit margins.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: the firm trades current profit for future position.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth spending and low prices sacrifice present profit for future gains.",
            commonErrors: ["Assuming growth and profit always move together."],
          },
        },
        {
          id: "bus-u1-obj-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A small family restaurant has survived for 20 years. Its owner states that the main objective is to keep the business going for her children, not to maximise profit.",
          parts: [
            {
              label: "a",
              prompt: "Define the term business objective.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain two reasons why survival might be the most important objective for a small business.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the owner's decision to prioritise survival over profit maximisation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Business objective",
                statement:
                  "A specific target a business sets, such as profit, growth, market share or survival.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A target or aim the business sets for itself.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Examples: profit, growth, market share, survival, social aims.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Small firms face intense competition and limited finance; failure means losing everything.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Survival protects jobs and the owner's investment and livelihood.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "A secure position enables long-term profit later.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Justified: survival protects the asset the children will inherit.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Balanced judgement: reasonable if adequate profit is still earned.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) A target set by the business. (b) Competition, limited finance, protecting investment and jobs. (c) Justified if adequate returns continue.",
            commonErrors: [
              "Treating survival and profit as always opposed — survival enables future profit.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: '"Satisficing" as a business objective means:',
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Maximising profit at every possible output level",
              },
              {
                id: "b",
                text: "Earning adequate profit while pursuing other goals",
              },
              { id: "c", text: "Maximising revenue regardless of costs" },
              { id: "d", text: "Avoiding all business risk" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Satisficing",
                statement:
                  "Earning satisfactory profit while balancing other objectives such as growth, security and social aims.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Satisficing accepts adequate rather than maximum profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Earning adequate profit while pursuing other goals",
            commonErrors: [
              "Confusing satisficing with profit maximisation — satisficing accepts 'good enough' profit.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A newly launched business with no established customers or reputation is most likely to prioritise which objective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Profit maximisation" },
              { id: "b", text: "Social objectives" },
              { id: "c", text: "Survival" },
              { id: "d", text: "Market share growth" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stage of business",
                statement:
                  "New and small firms typically prioritise survival before growth or profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without customers or cash reserves, failure is the biggest risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Survival",
            commonErrors: [
              "Assuming every business starts by maximising profit — survival usually comes first.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm spends heavily on research and development and accepts lower profits this year. This best illustrates pursuit of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dividend maximisation" },
              { id: "b", text: "Long-term growth and competitiveness" },
              { id: "c", text: "Short-term profit maximisation" },
              { id: "d", text: "Survival" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Investment for growth",
                statement:
                  "Spending on R&D sacrifices current profit to build future competitiveness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "R&D builds new products and markets for the future.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Accepting lower current profit signals a long-term growth objective.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Long-term growth and competitiveness",
            commonErrors: [
              "Reading lower profit as a sign of failure — it may be deliberate investment.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A company donates to charity and insists that its suppliers meet ethical labour standards. These are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Survival objectives" },
              { id: "b", text: "Social objectives" },
              { id: "c", text: "Personal objectives of the owner" },
              { id: "d", text: "Economic objectives" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social objectives",
                statement:
                  "Aims such as environmental sustainability, charitable giving and ethical behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Charity and ethical sourcing benefit society, not directly the firm's profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Social objectives",
            commonErrors: [
              "Classifying any spending as economic — social objectives may reduce short-term profit.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's sales rise by 10% while total market sales rise by 25%. The firm's market share will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rise" },
              { id: "b", text: "Fall" },
              { id: "c", text: "Cannot be determined" },
              { id: "d", text: "Remain unchanged" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Market share",
                statement:
                  "Market share = (firm sales / total market sales) x 100",
              },
            ],
            steps: [
              {
                reasoning:
                  "Market share depends on the firm's sales relative to the whole market.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The market grew faster than the firm, so its proportion of the market falls.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Fall",
            commonErrors: [
              "Assuming rising sales always mean rising market share — the market may grow faster.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "Professional managers in a public limited company may prefer growth over paying higher dividends because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dividends are not permitted for PLCs" },
              { id: "b", text: "Shareholders never want dividends" },
              { id: "c", text: "It always increases profit in the short term" },
              {
                id: "d",
                text: "Growth can raise their status, job security and career prospects",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Manager objectives",
                statement:
                  "Managers may pursue growth, status and security, which can conflict with shareholders' dividend demands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Growth projects raise the scale and prestige of the manager's role.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reinvesting profit can secure jobs and careers better than dividends.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Growth can raise their status, job security and career prospects",
            commonErrors: [
              "Assuming managers always act for shareholders — separation of ownership and control creates divergence.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain what is meant by satisficing and why most real businesses follow it rather than pure profit maximisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Satisficing",
                statement:
                  "Pursuing adequate profit while balancing competing objectives and stakeholder pressures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Satisficing means earning satisfactory profit rather than the theoretical maximum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pure profit maximisation ignores other goals like growth, staff welfare and community relations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stakeholders and owners often hold personal or social objectives that compete with profit.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: balancing objectives is more realistic than single-minded profit maximisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Satisficing = adequate profit plus other aims; realistic because objectives and stakeholders conflict.",
            commonErrors: [
              "Defining satisficing without explaining why it is more realistic than profit maximisation.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain two reasons why a business might accept lower profits in the short term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Short-term vs long-term trade-off",
                statement:
                  "Current profit can be sacrificed for future position, security or objectives.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Investment in growth — new machinery, premises or marketing — costs money now but can raise future profits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low prices or heavy promotion may be used to win market share and loyal customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Social or ethical choices — fair wages, sustainable sourcing — raise costs but build reputation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Survival may require absorbing losses temporarily to keep trading.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: lower short-term profit is a deliberate trade for a better long-term position.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Growth investment, market-share building, social/ethical aims and survival can all justify short-term lower profit.",
            commonErrors: [
              "Listing reasons without explaining the benefit being bought with the profit sacrifice.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A tech start-up must choose between rapid growth to dominate a new market and steady profitability to satisfy its investors.",
          parts: [
            {
              label: "a",
              prompt:
                "Define the terms growth objective and profit maximisation.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how these two objectives conflict for the start-up.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate which objective the start-up should prioritise and why.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objective conflict",
                statement:
                  "Growth spending and low prices reduce current profit but may raise future returns.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Growth objective: expanding sales, output or market position.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Profit maximisation: producing where MR = MC to earn maximum profit.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Rapid growth needs heavy spending on marketing, staff and technology — cutting current profit.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Dominating a market may require low prices, thin margins and losses early on.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Investors wanting steady profit may resist this risk and prefer dividends or retained earnings.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Growth can be justified if the market is contestable and first-mover advantage matters.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement balancing investor expectations against market opportunity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Growth = expand size/position; profit max = MR = MC. (b) Growth spending and low prices cut current profit. (c) Prioritise growth if market opportunity justifies the risk.",
            commonErrors: [
              "Describing the objectives without explaining the mechanism of conflict.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why increasing market share can be an important business objective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Market share benefits",
                statement:
                  "Large market share can bring economies of scale, pricing power and survival security.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A larger share usually means higher sales and revenue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Dominance can bring economies of scale, bargaining power with suppliers and customers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A strong market position makes the firm more secure against competitors.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: market share supports long-run profitability and survival.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Market share raises sales, enables scale economies and secures competitive position.",
            commonErrors: [
              "Confusing market share with growth — share is a proportion of the market.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's sales are $45$ million and total market sales are $300$ million. Calculate its market share.",
          response: {
            type: "numeric",
            parts: [{ label: "Market share (%)", answer: 15, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Market share",
                statement:
                  "Market share = (firm sales / total market sales) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Apply the market share formula.",
                working: "45 / 300",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide to get the proportion.",
                working: "0.15",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.15 x 100 = 15%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$15\\%$",
            commonErrors: [
              "Reporting 0.15 rather than 15% — forgetting to multiply by 100.",
            ],
          },
        },
        {
          id: "bus-u1-obj-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A firm's sales rise from $50$ million to $65$ million in one year. Calculate the percentage growth in sales.",
          response: {
            type: "numeric",
            parts: [{ label: "Sales growth (%)", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage growth",
                statement:
                  "Growth % = ((new value - old value) / old value) x 100",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the increase in sales.",
                working: "65 - 50 = 15",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide the increase by the original sales.",
                working: "15 / 50 = 0.30",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "0.30 x 100 = 30%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: [
              "Dividing by the new value instead of the original — use the old value as the base.",
            ],
          },
        },
      ],
    },
    {
      id: "bus-u1-stakeholders",
      title: "Stakeholders and their interests",
      skill:
        "Identify internal and external stakeholders, describe their objectives and explain conflicts between stakeholder groups.",
      lesson: {
        sections: [
          {
            heading: "Internal stakeholders",
            body: "**Owners/shareholders** want dividends and capital growth; **managers** want performance targets, status and job security; **employees** want pay, job security and safe working conditions. Their interests usually align on profit but diverge on how it is achieved — e.g. employees may resist cost-cutting that raises shareholder returns.",
          },
          {
            heading: "External stakeholders",
            body: "**Customers** want quality, value and fair treatment; **suppliers** want reliable payment and long-term contracts; the **government** wants tax revenue, jobs and legal compliance; the **local community** wants jobs and minimal pollution; **lenders** want interest and repayment. Each group pressures the business in different directions.",
          },
          {
            heading: "Stakeholder conflict",
            body: "Exam questions frequently ask you to **explain a conflict**: paying higher wages pleases employees but reduces profit for owners; relocating abroad cuts costs but harms the local community; aggressive marketing raises sales but may anger customers. Businesses must balance stakeholders through **corporate social responsibility** and negotiation.",
          },
        ],
        keyFormulas: [
          {
            name: "Stakeholder groups",
            statement:
              "Internal: owners, managers, employees. External: customers, suppliers, government, community, lenders.",
          },
          {
            name: "Typical conflict",
            statement:
              "Higher wages vs higher profit; community jobs vs cost reduction",
          },
        ],
        workedExample: {
          problem:
            "A factory plans to automate, cutting 200 jobs. Identify two stakeholder groups affected and one conflict for each.",
          solution:
            "Employees lose jobs and income (conflict with owners who gain higher profits from lower costs). The local community loses employment and may suffer economic decline. Customers may benefit from lower prices if costs fall.",
        },
      },
      questions: [
        {
          id: "bus-u1-stake-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an external stakeholder of a business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A supplier" },
              { id: "b", text: "A shareholder" },
              { id: "c", text: "A manager" },
              { id: "d", text: "An employee" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "External stakeholder",
                statement:
                  "A person or group outside the business with an interest in it, such as suppliers, customers and government.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shareholders, managers and employees are inside the business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Suppliers are outside — therefore choice (c).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** A supplier",
            commonErrors: [
              "Listing shareholders as external — they own the business.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State three objectives that employees typically want from their employer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Employee objectives",
                statement:
                  "Pay, job security, safe conditions, career development, recognition.",
              },
            ],
            steps: [
              { reasoning: "Fair pay and benefits.", marks: 1, markCode: "M" },
              {
                reasoning: "Job security and safe working conditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Career development or recognition — any three valid objectives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Pay, job security, safe conditions, development, recognition.",
            commonErrors: [
              "Listing shareholder objectives (dividends) instead of employee objectives.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a conflict of interest can arise between shareholders and employees.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder conflict",
                statement:
                  "Shareholders want profit maximised; employees want pay, security and conditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shareholders gain when profit rises; employees gain from higher wages and benefits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cost-cutting (wage freezes, redundancies, outsourcing) raises profit but harms employees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Automation can raise shareholder returns while destroying jobs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: the same decision benefits one group and hurts the other.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cost-cutting raises profit for shareholders but reduces pay and security for employees.",
            commonErrors: [
              "Describing the two groups' aims without explaining the conflict.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A multinational corporation decides to close its factory in a small town and move production abroad.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two internal and two external stakeholders affected.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain one objective each of the shareholders and the local community in this situation.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate how the business might balance the conflicting interests of these stakeholders.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder balance",
                statement:
                  "Businesses can negotiate, compensate or act responsibly to reconcile conflicting interests.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Internal: employees, managers/owners. External: local community, government, suppliers.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Two of each correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Shareholders want lower costs and higher profit from cheaper foreign production.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The community wants jobs, income and local services protected.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Direct conflict between the two groups.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Options: redundancy payments, retraining, phased closure, local investment fund.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evaluated judgement on feasibility and limits of balancing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Employees/managers; community/government. (b) Profit vs jobs/income. (c) Compensation, retraining or community investment.",
            commonErrors: [
              "Identifying stakeholders without linking to their objectives or conflicts.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an internal stakeholder of a business?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A shareholder" },
              { id: "b", text: "A supplier" },
              { id: "c", text: "A customer" },
              { id: "d", text: "The government" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal stakeholder",
                statement:
                  "A stakeholder inside the business: owners/shareholders, managers and employees.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Customers, suppliers and government are outside the business.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shareholders own the business — therefore choice (b).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** A shareholder",
            commonErrors: [
              "Treating customers as internal — they buy from the business but are external.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Customers typically want a business to provide:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Low staff wages" },
              { id: "b", text: "Quality products at fair prices" },
              { id: "c", text: "Maximum dividends" },
              { id: "d", text: "Higher taxes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Customer objectives",
                statement:
                  "Quality, value for money, fair treatment and reliable service.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Customers benefit when products are good value and fairly priced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Quality products at fair prices",
            commonErrors: [
              "Confusing customer aims with shareholder aims such as dividends.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The government is mainly interested in businesses because it wants:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher dividends for its shares" },
              { id: "b", text: "Free advertising for the state" },
              { id: "c", text: "Lower business taxes for itself" },
              { id: "d", text: "Tax revenue, employment and legal compliance" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Government objectives",
                statement:
                  "Tax revenue, job creation, economic growth and enforcement of laws.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Government gains through taxes paid by profitable, employing businesses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It also wants businesses to obey laws protecting workers, consumers and the environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Tax revenue, employment and legal compliance",
            commonErrors: [
              "Thinking government wants businesses to fail — it needs their taxes and jobs.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Suppliers are most likely to want from a business they supply:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less competition for their products" },
              { id: "b", text: "Delayed or cancelled orders" },
              { id: "c", text: "Higher interest rates" },
              { id: "d", text: "Reliable payment and long-term contracts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Supplier objectives",
                statement:
                  "Predictable orders, prompt payment and secure long-term relationships.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Suppliers depend on being paid on time and on steady demand.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Reliable payment and long-term contracts",
            commonErrors: [
              "Assuming suppliers want the business to fail — they rely on its orders.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A chemical plant pollutes a local river. The stakeholder group most directly in conflict with the firm is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Its shareholders" },
              { id: "b", text: "The local community" },
              { id: "c", text: "Its suppliers" },
              { id: "d", text: "Its managers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Community stakeholder",
                statement:
                  "The local community wants jobs but also a clean, safe environment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pollution harms residents' health and environment — a direct community interest.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The local community",
            commonErrors: [
              "Choosing shareholders — pollution may raise their profit while harming the community.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain two objectives that the local community typically has of a nearby business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Community objectives",
                statement:
                  "Employment, income, local services and a clean, safe environment.",
              },
            ],
            steps: [
              {
                reasoning: "Jobs and income for local residents.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Minimal pollution, noise and disruption to the local environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Support for local services or community projects.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Any two objectives clearly stated and explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Jobs/income, a clean environment, and support for the local community.",
            commonErrors: [
              "Listing objectives of the business itself rather than of the community.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the conflict of interest that can arise between customers and shareholders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder conflict",
                statement:
                  "Lower prices and better service please customers but can reduce profit for shareholders.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Customers want low prices, high quality and good service.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Delivering these raises costs or requires price cuts, reducing profit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Shareholders prefer higher prices and lower costs to maximise returns.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: pleasing customers can directly reduce shareholder returns.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Customer benefits (low prices, quality) raise costs and cut profits wanted by shareholders.",
            commonErrors: [
              "Describing both groups' aims without explaining the direct conflict.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain why lenders such as banks are stakeholders of a business and what they want from it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lender stakeholder",
                statement:
                  "Lenders supply finance and depend on the business's ability to repay.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Banks lend money to the business, so its survival and profitability affect repayment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lenders want interest paid on time and the loan repaid at maturity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They also want security — collateral or guarantees — against default.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If the business fails, lenders lose their money, so they monitor performance closely.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: lenders are external stakeholders with a financial interest in the firm's success.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Lenders provide finance; they want interest, repayment and security against default.",
            commonErrors: [
              "Omitting that lenders' interest is repayment — not profit or jobs.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A supermarket chain replaces checkout staff with self-service machines, cutting 300 jobs but reducing prices for shoppers.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two internal and two external stakeholders affected.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain one objective each of the employees and the customers in this situation.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate how the business could respond to the stakeholder conflict.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder conflict",
                statement:
                  "Automation pleases shareholders and customers but harms employees.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Internal: employees, managers. External: customers, local community, government.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Two of each correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Employees want job security and fair treatment — both threatened by redundancies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Customers want lower prices and faster service — both delivered by automation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Clear conflict between the two groups' interests.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Options: redundancy pay, retraining for other roles, phased introduction, retaining some staffed checkouts.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: balance depends on how many jobs are lost versus customer benefits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Employees/managers; customers/community. (b) Job security vs lower prices/service. (c) Compensation, retraining or phased change.",
            commonErrors: [
              "Identifying stakeholders without linking them to their specific objectives.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Explain how corporate social responsibility (CSR) can help a business balance the interests of conflicting stakeholders.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corporate social responsibility",
                statement:
                  "Voluntary actions that consider social and environmental impacts alongside profit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CSR means the firm accepts some cost to benefit society — e.g. fair wages, pollution control, community investment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reduces conflict with employees, the community and customers who value ethical behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A good reputation can attract customers and staff, partially offsetting the costs.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: CSR does not remove conflict but gives the firm a framework for balancing it.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "It must be genuine — 'greenwashing' can anger stakeholders further.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "CSR spends to satisfy social/environmental stakeholders, building reputation that can offset the cost.",
            commonErrors: [
              "Treating CSR as purely charitable — it is a stakeholder-management tool.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A business earns an annual profit of $120,000. It gives all staff a pay rise costing $45,000. Calculate the new profit.",
          response: {
            type: "numeric",
            parts: [{ label: "New profit ($)", answer: 75000, unit: "$" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stakeholder trade-off",
                statement:
                  "Higher wages for employees reduce profit available to owners.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher staff costs reduce profit by the same amount.",
                working: "120000 - 45000",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the pay rise cost from profit.",
                working: "= 75000",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the new profit.",
                working: "75,000",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$75,000$",
            commonErrors: [
              "Adding the pay rise to profit instead of subtracting it — wages are a cost.",
            ],
          },
        },
        {
          id: "bus-u1-stake-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A firm plans to make 50 workers redundant at a severance cost of $8,000 each. Its annual wage bill is $2,000,000.",
          parts: [
            {
              label: "a",
              prompt: "Calculate the total severance cost.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Express the total severance cost as a percentage of the annual wage bill.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "Total severance cost ($)", answer: 400000, unit: "$" },
              { label: "Severance as % of wage bill", answer: 20, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Cost and percentage",
                statement:
                  "Total cost = number x cost each; percentage = (part / whole) x 100",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Multiply the number of redundancies by the cost each.",
                working: "50 x 8000",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Calculate the total.",
                working: "= 400000",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Divide severance cost by the wage bill and multiply by 100.",
                working: "400000 / 2000000 x 100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the percentage.",
                working: "= 20%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Total severance $400,000; 20% of the annual wage bill.",
            commonErrors: [
              "Using 50 as a percentage directly — convert the fraction to a percentage.",
            ],
          },
        },
      ],
    },
  ],
};
