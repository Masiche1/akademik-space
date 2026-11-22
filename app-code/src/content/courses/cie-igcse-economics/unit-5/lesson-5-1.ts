import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cieige-u5-lesson-5-1",
  code: "5-1",
  title: "Costs of Production, Revenue and Profit",
  goal: "I CAN calculate and interpret total, average and marginal cost, revenue and profit for IGCSE Economics.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 5: costs and revenue"],
  vocabulary: [
    {
      term: "Total cost (TC)",
      definition:
        "Total expenditure on producing output = fixed + variable costs.",
    },
    { term: "Average cost (AC)", definition: "Cost per unit = TC ÷ output." },
    {
      term: "Marginal cost (MC)",
      definition: "Extra cost of producing one more unit = ΔTC ÷ ΔQ.",
    },
    {
      term: "Total revenue (TR)",
      definition: "Total income from sales = price × quantity.",
    },
    {
      term: "Marginal revenue (MR)",
      definition: "Extra revenue from selling one more unit = ΔTR ÷ ΔQ.",
    },
    {
      term: "Profit",
      definition:
        "TR − TC; normal profit is the minimum needed to keep factors in use.",
    },
  ],
  concepts: [
    {
      id: "cieige-u5l1-c1-costs",
      title: "Costs of production",
      skill: "Distinguish fixed, variable, average and marginal cost.",
      lesson: {
        sections: [
          {
            heading: "Fixed vs variable costs",
            body: "**Fixed costs (FC)** do not change with output in the short run — rent, insurance, salaries. **Variable costs (VC)** change with output — raw materials, wages, energy. **Total cost** TC = FC + VC. **Average cost** AC = TC/Q falls then rises (economies then diseconomies of scale). **Marginal cost** MC = ΔTC/ΔQ — typically falls then rises.",
          },
          {
            heading: "Law of diminishing returns",
            body: "Adding more variable inputs to fixed inputs eventually yields smaller output gains — MC rises. This explains the U-shaped AC curve.",
          },
        ],
        keyFormulas: [
          { name: "TC", statement: "FC + VC" },
          { name: "AC", statement: "TC ÷ Q" },
          { name: "MC", statement: "ΔTC ÷ ΔQ" },
          {
            name: "Diminishing returns",
            statement: "Extra variable input → smaller output gain",
          },
        ],
        workedExample: {
          problem: "FC = $500, VC = $10 per unit. Find TC and AC at Q = 100.",
          solution:
            "TC = 500 + 10×100 = $1,500. AC = 1,500 ÷ 100 = $15 per unit.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a fixed cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electricity used in production" },
              { id: "b", text: "Raw materials" },
              { id: "c", text: "Hourly wages" },
              { id: "d", text: "Factory rent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fixed cost",
                statement: "Unchanged with output in short run.",
              },
            ],
            steps: [
              {
                reasoning: "Rent doesn't vary with output.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Factory rent",
            commonErrors: ["Confusing fixed with variable."],
          },
        },
        {
          id: "cieige-q-u5l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define marginal cost.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marginal cost",
                statement: "Extra cost of one more unit.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Formula given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The extra cost of producing one additional unit of output = ΔTC ÷ ΔQ.",
            commonErrors: ["Confusing with average cost."],
          },
        },
        {
          id: "cieige-q-u5l1c1-3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A firm has FC = $2,000 and VC = $20 per unit. Calculate TC and AC at 100 and 200 units.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Cost calculation",
                statement: "TC = FC + VC×Q; AC = TC/Q.",
              },
            ],
            steps: [
              {
                reasoning: "TC at 100 = 2000 + 2000 = $4,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "AC at 100 = 4000/100 = $40.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "TC at 200 = 2000 + 4000 = $6,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "AC at 200 = 6000/200 = $30.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Q=100: TC=$4,000, AC=$40. Q=200: TC=$6,000, AC=$30.",
            commonErrors: ["Forgetting FC in TC."],
          },
        },
        {
          id: "cieige-q-u5l1c1-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the law of diminishing returns and its effect on marginal cost.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diminishing returns",
                statement:
                  "Extra variable input → smaller output gain → rising MC.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "MC rises after minimum.", marks: 1, markCode: "M" },
              { reasoning: "U-shaped AC link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Adding variable inputs to fixed factors eventually yields smaller output gains, so MC rises — contributing to the rising part of the U-shaped AC curve.",
            commonErrors: ["Thinking returns always diminish."],
          },
        },
        {
          id: "cieige-q-u5l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why average cost typically falls then rises as output increases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "U-shaped AC",
                statement: "Spread of FC + diminishing returns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Falling AC: FC spread over more units + economies of scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rising AC: diminishing returns / diseconomies of scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimum efficient scale noted.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "A" },
              {
                reasoning: "Diagram reference optional.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "AC falls as fixed costs spread and economies of scale operate; it rises when diminishing returns or diseconomies of scale dominate — the minimum point is minimum efficient scale.",
            commonErrors: ["Only one side explained."],
          },
        },
        {
          id: "cieige-q-u5l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'normal profit'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal profit",
                statement: "Minimum return keeping factors in current use.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Contrast with abnormal profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The minimum profit needed to keep factors of production in their current use — earns zero economic profit; above it is abnormal (supernormal) profit.",
            commonErrors: ["Confusing with accounting profit."],
          },
        },
        {
          id: "cieige-q-u5l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Marginal cost equals the change in total cost divided by the change in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed cost" },
              { id: "b", text: "Price" },
              { id: "c", text: "Revenue" },
              { id: "d", text: "Output" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MC formula",
                statement: "ΔTC ÷ ΔQ.",
              },
            ],
            steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Output",
            commonErrors: ["Confusing with average cost."],
          },
        },
        {
          id: "cieige-q-u5l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a firm's marginal cost initially fall as output rises?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Increasing returns",
                statement:
                  "Specialisation and indivisibilities lower MC initially.",
              },
            ],
            steps: [
              { reasoning: "Specialisation effect.", marks: 1, markCode: "M" },
              {
                reasoning: "Indivisible fixed inputs spread.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Then diminishing returns reverse it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Specialisation and spreading indivisible fixed costs initially raise efficiency, so MC falls; later diminishing returns dominate and MC rises.",
            commonErrors: ["Assuming MC always falls or always rises."],
          },
        },
        {
          id: "cieige-q-u5l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A table shows Q=10 TC=$500, Q=11 TC=$560. Calculate MC of the 11th unit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "MC calculation",
                statement: "MC = ΔTC/ΔQ.",
              },
            ],
            steps: [
              { reasoning: "ΔTC = 560−500 = $60.", marks: 1, markCode: "M" },
              { reasoning: "ΔQ = 1.", marks: 1, markCode: "M" },
              { reasoning: "MC = $60.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MC = (560 − 500) ÷ (11 − 10) = $60 per unit.",
            commonErrors: ["Dividing TC by Q instead of ΔTC by ΔQ."],
          },
        },
        {
          id: "cieige-q-u5l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether a firm should always produce where MC = AC.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MC=AC point",
                statement: "Minimum of AC curve, not necessarily profit-max.",
              },
            ],
            steps: [
              { reasoning: "MC=AC gives lowest AC.", marks: 1, markCode: "M" },
              {
                reasoning: "Profit maximisation is MR=MC instead.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distinguishes cost-min from profit-max.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs contexts.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "MC=AC minimises unit cost but profit maximisation requires MR=MC — a firm should produce where MR=MC, which may not coincide with minimum AC.",
            commonErrors: [
              "Conflating cost-minimisation with profit-maximisation.",
            ],
          },
        },
        {
          id: "cieige-q-u5l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Average cost (AC) equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed cost + variable cost" },
              { id: "b", text: "Change in TC ÷ change in Q" },
              { id: "c", text: "Total cost ÷ output" },
              { id: "d", text: "Price × quantity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "AC", statement: "TC ÷ Q." },
            ],
            steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** TC ÷ Q",
            commonErrors: ["Confusing AC with MC."],
          },
        },
        {
          id: "cieige-q-u5l1c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A firm has FC = $1,000 and VC = $5 per unit. Calculate TC and AC at an output of 200 units.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Cost calculation",
                statement: "TC = FC + VC×Q; AC = TC/Q.",
              },
            ],
            steps: [
              {
                reasoning: "TC = 1000 + 5×200 = $2,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "AC = 2000/200 = $10.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both answers stated correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "TC = $2,000; AC = $10 per unit.",
            commonErrors: ["Omitting fixed cost from TC."],
          },
        },
        {
          id: "cieige-q-u5l1c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Total cost rises from $800 at Q = 40 to $900 at Q = 50. Calculate marginal cost for units 41–50.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "MC calculation",
                statement: "MC = ΔTC ÷ ΔQ.",
              },
            ],
            steps: [
              { reasoning: "ΔTC = 900 − 800 = $100.", marks: 1, markCode: "M" },
              { reasoning: "ΔQ = 50 − 40 = 10.", marks: 1, markCode: "M" },
              { reasoning: "MC = 100/10 = $10 per unit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MC = (900 − 800) ÷ (50 − 40) = $10 per unit.",
            commonErrors: ["Dividing TC by Q instead of ΔTC by ΔQ."],
          },
        },
        {
          id: "cieige-q-u5l1c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between fixed costs and variable costs, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FC vs VC",
                statement: "Fixed unchanged with output; variable changes.",
              },
            ],
            steps: [
              {
                reasoning: "Fixed: unchanged with output, e.g. rent; variable: changes, e.g. raw materials.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid examples for both given.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Fixed (rent, insurance) vs variable (materials, hourly wages)",
            commonErrors: ["Classifying electricity/rent incorrectly."],
          },
        },
        {
          id: "cieige-q-u5l1c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are 'economies of scale', and how can they cause average cost to fall as output rises?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Economies of scale",
                statement: "Falling unit costs as output rises.",
              },
            ],
            steps: [
              {
                reasoning: "Specialisation, bulk buying and spreading fixed costs lower unit costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Falling AC as output rises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contrasts with diseconomies at very high output.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Cost advantages of large-scale production lower AC",
            commonErrors: ["Confusing with diseconomies of scale."],
          },
        },
        {
          id: "cieige-q-u5l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that a firm should always try to minimise its average cost.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost minimisation",
                statement: "Low AC helps but is not the only objective.",
              },
            ],
            steps: [
              { reasoning: "Low AC improves competitiveness and profit margins.", marks: 1, markCode: "M" },
              {
                reasoning: "But profit maximisation requires producing where MR = MC, not minimum AC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Minimum AC may be at an output inconsistent with demand.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Quality, market share and long-run strategy may matter more.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Cost control matters, but profit maximisation is MR = MC — minimum AC is not always optimal",
            commonErrors: ["Equating minimum AC with maximum profit."],
          },
        },
      ],
    },
    {
      id: "cieige-u5l1-c2-revenue",
      title: "Revenue and profit",
      skill: "Calculate TR, AR, MR and profit; distinguish profit types.",
      lesson: {
        sections: [
          {
            heading: "Revenue measures",
            body: "**Total revenue** TR = P × Q. **Average revenue** AR = TR/Q = price. **Marginal revenue** MR = ΔTR/ΔQ. In perfect competition MR = AR = price (firm is price-taker); in monopoly MR < AR because selling more requires lowering price on all units.",
          },
          {
            heading: "Profit types",
            body: "**Total profit** = TR − TC. **Supernormal (abnormal) profit** = revenue above normal profit — possible only with market power or barriers to entry. **Normal profit** keeps factors in current use (zero economic profit). Losses occur when TR < TC; a firm shuts down in short run if it can't cover variable costs.",
          },
        ],
        keyFormulas: [
          { name: "TR", statement: "P × Q" },
          { name: "AR", statement: "TR ÷ Q = price" },
          { name: "MR", statement: "ΔTR ÷ ΔQ" },
          { name: "Profit", statement: "TR − TC" },
          {
            name: "Shut-down rule",
            statement: "Shut down if P < AVC in short run",
          },
        ],
        workedExample: {
          problem: "Price = $8, Q = 50, TC = $300. Find TR, profit and AR.",
          solution:
            "TR = 8 × 50 = $400. AR = 400/50 = $8. Profit = 400 − 300 = $100 (supernormal).",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Total revenue equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Price × quantity" },
              { id: "b", text: "Quantity ÷ price" },
              { id: "c", text: "Cost × quantity" },
              { id: "d", text: "Price ÷ quantity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "TR", statement: "P × Q." },
            ],
            steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** P × Q",
            commonErrors: ["Confusing with average revenue."],
          },
        },
        {
          id: "cieige-q-u5l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is MR less than AR for a monopoly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopoly MR<AR",
                statement: "Lower price on all units to sell more.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              {
                reasoning: "Contrast with perfect competition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "To sell an extra unit a monopolist must cut price on ALL units, so the revenue lost on previous units makes MR < AR = price.",
            commonErrors: ["Assuming MR = price always."],
          },
        },
        {
          id: "cieige-q-u5l1c2-3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A firm sells 100 units at $10 each; TC = $800. Calculate TR, AR, profit and state if profit is supernormal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Revenue/profit calc",
                statement: "TR=P×Q; profit=TR−TC.",
              },
            ],
            steps: [
              { reasoning: "TR = 10×100 = $1,000.", marks: 1, markCode: "M" },
              { reasoning: "AR = 1000/100 = $10.", marks: 1, markCode: "M" },
              {
                reasoning: "Profit = 1000−800 = $200.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Positive profit above normal = supernormal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "TR=$1,000, AR=$10, profit=$200 — supernormal since revenue exceeds normal profit.",
            commonErrors: ["Forgetting AR=price."],
          },
        },
        {
          id: "cieige-q-u5l1c2-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a perfectly competitive firm is a 'price taker'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price taker",
                statement:
                  "Many firms, identical product, no power to set price.",
              },
            ],
            steps: [
              { reasoning: "Conditions named.", marks: 1, markCode: "M" },
              { reasoning: "Consequence: P=AR=MR.", marks: 1, markCode: "M" },
              {
                reasoning: "Firm accepts market price.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "With many firms selling identical products, each is too small to affect price — the market sets P, so AR = MR = price.",
            commonErrors: ["Confusing with price maker."],
          },
        },
        {
          id: "cieige-q-u5l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A firm faces losses but continues producing in the short run. Explain when this is rational.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shut-down rule",
                statement: "Produce if P > AVC; shut down if P < AVC.",
              },
            ],
            steps: [
              {
                reasoning: "Loss vs shut-down distinction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fixed costs unavoidable short run.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Condition: P covers AVC.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Long run differs — exit if losses persist.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Coherent conclusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "If P > AVC, producing covers variable costs and part of fixed costs — shutting down loses the same fixed costs anyway; only shut down if P < AVC.",
            commonErrors: ["Shutting down whenever loss-making."],
          },
        },
        {
          id: "cieige-q-u5l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'supernormal profit'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Supernormal profit",
                statement:
                  "Profit above normal — requires market power/barriers.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Source noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Profit above the normal (minimum) level — possible only with market power or barriers to entry, e.g. monopoly.",
            commonErrors: ["Confusing with total profit."],
          },
        },
        {
          id: "cieige-q-u5l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In perfect competition, the firm's demand curve is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinked" },
              { id: "b", text: "Downward sloping" },
              { id: "c", text: "Perfectly elastic at market price" },
              { id: "d", text: "Vertical" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "PC demand",
                statement: "Perfectly elastic at market price.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Perfectly elastic",
            commonErrors: ["Confusing with monopoly demand."],
          },
        },
        {
          id: "cieige-q-u5l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "If TR = $500 at Q=50 and TR = $600 at Q=60, calculate MR for units 51–60.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "MR calculation",
                statement: "MR = ΔTR/ΔQ.",
              },
            ],
            steps: [
              { reasoning: "ΔTR = 600−500 = $100.", marks: 1, markCode: "M" },
              { reasoning: "ΔQ = 10.", marks: 1, markCode: "M" },
              { reasoning: "MR = $10.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MR = (600 − 500) ÷ (60 − 50) = $10 per unit.",
            commonErrors: ["Using average TR instead of change."],
          },
        },
        {
          id: "cieige-q-u5l1c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might a firm earn only normal profit in the long run under perfect competition?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long-run equilibrium",
                statement: "Free entry erodes supernormal profit.",
              },
            ],
            steps: [
              { reasoning: "Entry mechanism.", marks: 1, markCode: "M" },
              {
                reasoning: "Result: P=AC at minimum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Supernormal profit attracts new entrants; increased supply lowers price until P = minimum AC, leaving only normal profit.",
            commonErrors: ["Thinking supernormal profit persists."],
          },
        },
        {
          id: "cieige-q-u5l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim: 'Profit maximisation is always the firm's best objective.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Profit maximisation",
                statement: "Standard assumption but has limits.",
              },
            ],
            steps: [
              {
                reasoning: "Standard economic assumption.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternatives: satisficing, stakeholder objectives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Behavioural/evidence limits.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Profit maximisation is the standard model and a reasonable approximation, but real firms may pursue growth, market share or stakeholder goals — context matters.",
            commonErrors: ["One-sided or ignoring alternatives."],
          },
        },
        {
          id: "cieige-q-u5l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Average revenue (AR) equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total revenue ÷ quantity (= price)" },
              { id: "b", text: "Price × quantity" },
              { id: "c", text: "TR − TC" },
              { id: "d", text: "Change in TR ÷ change in Q" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "AR", statement: "TR ÷ Q = price." },
            ],
            steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** TR ÷ Q = price",
            commonErrors: ["Confusing AR with MR."],
          },
        },
        {
          id: "cieige-q-u5l1c2-12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A firm sells 80 units at $12 each; TC = $700. Calculate TR, AR, profit and state whether the profit is supernormal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Revenue/profit calc",
                statement: "TR=P×Q; AR=TR/Q; profit=TR−TC.",
              },
            ],
            steps: [
              { reasoning: "TR = 12×80 = $960.", marks: 1, markCode: "M" },
              { reasoning: "AR = 960/80 = $12.", marks: 1, markCode: "M" },
              { reasoning: "Profit = 960−700 = $260.", marks: 1, markCode: "M" },
              {
                reasoning: "Positive profit above normal = supernormal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "TR=$960, AR=$12, profit=$260 — supernormal.",
            commonErrors: ["Forgetting AR equals price."],
          },
        },
        {
          id: "cieige-q-u5l1c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "TR is $450 at Q = 30 and $560 at Q = 40. Calculate marginal revenue for units 31–40.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "MR calculation",
                statement: "MR = ΔTR ÷ ΔQ.",
              },
            ],
            steps: [
              { reasoning: "ΔTR = 560 − 450 = $110.", marks: 1, markCode: "M" },
              { reasoning: "ΔQ = 40 − 30 = 10.", marks: 1, markCode: "M" },
              { reasoning: "MR = 110/10 = $11 per unit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MR = (560 − 450) ÷ (40 − 30) = $11 per unit.",
            commonErrors: ["Using AR instead of ΔTR ÷ ΔQ."],
          },
        },
        {
          id: "cieige-q-u5l1c2-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between total profit and normal profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Profit types",
                statement: "TR−TC vs minimum return.",
              },
            ],
            steps: [
              {
                reasoning: "Total profit = TR − TC (accounting measure).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Normal profit = minimum needed to keep factors in current use (zero economic profit).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Total = TR−TC; normal = minimum to keep factors in use",
            commonErrors: ["Treating normal profit as a fixed amount."],
          },
        },
        {
          id: "cieige-q-u5l1c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why marginal revenue is less than price for a firm facing a downward-sloping demand curve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MR < price",
                statement: "Lower price on all units to sell more.",
              },
            ],
            steps: [
              {
                reasoning: "To sell one more unit the firm must cut price on all units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revenue lost on previous units reduces the gain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore MR < AR = price; contrast with perfect competition where MR = price.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Price cut applies to all units, so MR < price",
            commonErrors: ["Assuming MR always equals price."],
          },
        },
        {
          id: "cieige-q-u5l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim: 'A firm should shut down whenever it makes a loss.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shut-down rule",
                statement: "Shut down only if P < AVC in short run.",
              },
            ],
            steps: [
              {
                reasoning: "Loss-making is not the same as should-shut-down.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fixed costs are unavoidable in the short run.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If P > AVC, producing covers variable costs and part of fixed costs — smaller loss than shutting down.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Long run differs: persistent losses mean exit.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Only shut down if P < AVC — losses alone do not justify closure",
            commonErrors: ["Shutting down whenever loss-making."],
          },
        },
      ],
    },
  ],
};
