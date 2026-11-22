import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cieige-u5-lesson-5-2",
  code: "5-2",
  title: "Perfect Competition",
  goal: "I CAN analyse price determination, firm behaviour and efficiency in perfect competition.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 5: market structures"],
  vocabulary: [
    {
      term: "Perfect competition",
      definition:
        "Market with many firms, identical products, free entry/exit, perfect information.",
    },
    {
      term: "Price taker",
      definition: "Firm that must accept the market price.",
    },
    {
      term: "Allocative efficiency",
      definition:
        "Resources allocated to produce the quantity consumers want — P = MC.",
    },
    {
      term: "Productive efficiency",
      definition:
        "Lowest possible cost of production — producing at minimum AC.",
    },
    { term: "Short-run supply", definition: "Firm's MC curve above AVC." },
    {
      term: "Long-run equilibrium",
      definition: "P = minimum AC = MC; only normal profit.",
    },
  ],
  concepts: [
    {
      id: "cieige-u5l2-c1-features",
      title: "Features and price determination",
      skill:
        "Explain how price and output are determined in perfect competition.",
      lesson: {
        sections: [
          {
            heading: "Features",
            body: "Perfect competition requires: **many buyers and sellers** (each too small to influence price), **homogeneous products** (identical), **free entry and exit**, **perfect information**, and firms are **price takers**. Examples: agricultural markets, foreign exchange.",
          },
          {
            heading: "Price determination",
            body: "Market price is set where market demand = market supply. Individual firms face a **perfectly elastic demand curve** at that price — sell any quantity at P. The firm's output decision: produce where **MR = MC** (profit max). Since P = MR, produce where P = MC.",
          },
        ],
        keyFormulas: [
          { name: "Profit max", statement: "Produce where MR = MC" },
          { name: "Firm demand", statement: "Perfectly elastic at market P" },
          { name: "Efficiency", statement: "P = MC = minimum AC (long run)" },
        ],
        workedExample: {
          problem:
            "Market price is $10. Firm's MC = $10 at Q=50, AC = $8. Find profit per unit and total.",
          solution:
            "AR = MR = $10. Profit per unit = 10 − 8 = $2. Total profit = 2 × 50 = $100 (supernormal in short run).",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a feature of perfect competition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free entry and exit" },
              { id: "b", text: "Many buyers and sellers" },
              { id: "c", text: "Firms can set their own price" },
              { id: "d", text: "Identical products" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "PC features",
                statement: "Price takers, not price setters.",
              },
            ],
            steps: [
              {
                reasoning: "Firms must accept price.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Setting own price",
            commonErrors: ["Confusing with monopoly."],
          },
        },
        {
          id: "cieige-q-u5l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'price taker' mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Price taker",
                statement: "Accepts market price.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why it happens.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A firm that must accept the price determined by the market — too small to influence it, so it can only choose how much to produce.",
            commonErrors: ["Confusing with price maker."],
          },
        },
        {
          id: "cieige-q-u5l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how market price is determined in perfect competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Price determination",
                statement: "Market D = market S sets price; firms take it.",
              },
            ],
            steps: [
              { reasoning: "Market equilibrium.", marks: 1, markCode: "M" },
              {
                role: "x",
                reasoning: "Firm is price taker.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Individual supply = MC above AVC.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Price is set where market demand equals market supply; each firm then produces where P = MC, taking the market price as given.",
            commonErrors: ["Thinking each firm sets price."],
          },
        },
        {
          id: "cieige-q-u5l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A perfectly competitive firm has P = $12, AC = $9 at current output, MC = $12. Is it profit-maximising? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Profit max check",
                statement: "Produce where MR=MC; here MR=P=$12=MC.",
              },
            ],
            steps: [
              { reasoning: "MR = P = $12 in PC.", marks: 1, markCode: "M" },
              {
                reasoning: "MC = $12 = MR → profit-max output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit per unit = 12−9 = $3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supernormal profit in short run.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Yes — MR = P = MC = $12 means it's at profit-max output; earns $3/unit supernormal profit (short run).",
            commonErrors: ["Thinking P=AC needed for profit max."],
          },
        },
        {
          id: "cieige-q-u5l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Draw/explain the short-run supply curve of a perfectly competitive firm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Short-run supply",
                statement: "MC curve above AVC is supply.",
              },
            ],
            steps: [
              { reasoning: "Supply = MC above AVC.", marks: 1, markCode: "M" },
              { reasoning: "Below AVC, shut down.", marks: 1, markCode: "M" },
              {
                reasoning: "Between AVC and AC, loss but produce.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Above AC, supernormal profit.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "The firm's short-run supply curve is its MC curve above the AVC minimum — produce where P = MC; shut down if P < AVC.",
            commonErrors: ["Using AC as supply curve."],
          },
        },
        {
          id: "cieige-q-u5l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is the perfectly competitive firm's demand curve horizontal?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elastic demand",
                statement: "Price taker can sell any quantity at market price.",
              },
            ],
            steps: [
              { reasoning: "Reason explained.", marks: 1, markCode: "M" },
              { reasoning: "Consequence for MR.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "As a price taker the firm can sell any quantity at the market price — no incentive to cut price and no ability to raise it, so demand is perfectly elastic (horizontal) and MR = P.",
            commonErrors: ["Confusing with market demand curve."],
          },
        },
        {
          id: "cieige-q-u5l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In perfect competition, a profit-maximising firm produces where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "P = AC" },
              { id: "b", text: "MR = MC" },
              { id: "c", text: "AR = AC" },
              { id: "d", text: "TR = TC" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Profit max", statement: "MR = MC." },
            ],
            steps: [{ reasoning: "Correct rule.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** MR = MC",
            commonErrors: ["Confusing with revenue=cost."],
          },
        },
        {
          id: "cieige-q-u5l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two real-world examples approximating perfect competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "PC examples",
                statement: "Agriculture, FX markets.",
              },
            ],
            steps: [
              { reasoning: "Two valid examples.", marks: 1, markCode: "M" },
              {
                reasoning: "Why they approximate it.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. agricultural commodity markets (many farmers, identical wheat) and foreign exchange markets (many traders, standardised currency) — though never perfectly.",
            commonErrors: ["Examples of monopoly instead."],
          },
        },
        {
          id: "cieige-q-u5l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "If market price falls below a PC firm's minimum AVC, what should it do and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Shut-down",
                statement: "P < AVC → cannot cover variable costs.",
              },
            ],
            steps: [
              { reasoning: "Decision correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Reasoning: fixed costs sunk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Short run only; exit in long run.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shut down — price can't cover variable costs, so producing loses more than shutting down (fixed costs are unavoidable in the short run anyway).",
            commonErrors: ["Producing anyway 'to cover fixed costs'."],
          },
        },
        {
          id: "cieige-q-u5l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a rise in market demand affects a PC firm's price and output in the short run vs long run.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand increase",
                statement:
                  "Short-run supernormal profit → entry → long-run normal profit.",
              },
            ],
            steps: [
              {
                reasoning: "Short run: price rises, firm expands along MC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supernormal profit appears.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Long run: entry increases supply, price falls.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Back to P=min AC, normal profit.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Coherent two-period analysis.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Short run: demand↑ → price↑ → firm produces more where P=MC, earning supernormal profit. Long run: entry increases supply → price falls back to minimum AC → normal profit only.",
            commonErrors: ["Ignoring long-run entry."],
          },
        },
        {
          id: "cieige-q-u5l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In perfect competition, the individual firm's demand curve is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vertical" },
              { id: "b", text: "Downward sloping" },
              { id: "c", text: "Perfectly elastic (horizontal)" },
              { id: "d", text: "Kinked at the market price" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Firm demand",
                statement: "Perfectly elastic at market price.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Perfectly elastic",
            commonErrors: ["Confusing with the market demand curve."],
          },
        },
        {
          id: "cieige-q-u5l2c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A perfectly competitive firm sells 40 units at the market price of $10. Its average cost is $7 per unit. (a) Find the profit per unit. (b) Find total profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Profit per unit", answer: 3, unit: "$" },
              { label: "Total profit", answer: 120, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Profit calculation",
                statement: "Profit = (P − AC) × Q.",
              },
            ],
            steps: [
              {
                reasoning: "Profit per unit = P − AC = 10 − 7 = $3.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total profit = $3 × 40 = $120.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $3 (b) $120",
            commonErrors: ["Using revenue instead of profit."],
          },
        },
        {
          id: "cieige-q-u5l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In perfect competition, 'homogeneous products' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Products are free of charge" },
              { id: "b", text: "Only one product is sold" },
              { id: "c", text: "Products are very different" },
              { id: "d", text: "All firms sell identical products" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homogeneous",
                statement: "Identical products.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Identical products",
            commonErrors: ["Confusing with product differentiation."],
          },
        },
        {
          id: "cieige-q-u5l2c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A perfectly competitive firm's marginal cost is MC = 2Q. If the market price is $10, find (a) the profit-maximising output and (b) total revenue at that output.",
          response: {
            type: "numeric",
            parts: [
              { label: "Profit-maximising output", answer: 5, unit: "units" },
              { label: "Total revenue", answer: 50, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Profit max",
                statement: "Produce where P = MC; TR = P × Q.",
              },
            ],
            steps: [
              {
                reasoning: "P = MR = $10, so set MC = 10: 2Q = 10 → Q = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "TR = P × Q = 10 × 5 = $50.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 5 units (b) $50",
            commonErrors: ["Setting P = AC instead of P = MC."],
          },
        },
        {
          id: "cieige-q-u5l2c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of free entry and exit in achieving long-run equilibrium in perfect competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Entry and exit",
                statement: "Frees supernormal profit, removes losses.",
              },
            ],
            steps: [
              {
                reasoning: "Supernormal profit attracts entrants.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supply rises, price falls to minimum AC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Losses cause exit until normal profit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Free entry lets new firms join when supernormal profit exists, increasing supply and driving price down to minimum AC; free exit removes firms making losses — together ensuring only normal profit in long-run equilibrium.",
            commonErrors: ["Ignoring exit."],
          },
        },
        {
          id: "cieige-q-u5l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a fall in market demand affects a perfectly competitive firm's price, output and profit in the short run and the long run.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Demand decrease",
                statement: "Short-run losses → exit → long-run normal profit.",
              },
            ],
            steps: [
              {
                reasoning: "Short run: price falls, firm contracts along MC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May make losses; shuts down if P < AVC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Long run: exit reduces supply, price recovers.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Returns to P = minimum AC, normal profit.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Coherent two-period analysis.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Short run: demand↓ → price↓ → firm produces less where P = MC, possibly incurring losses. Long run: unprofitable firms exit, supply falls, price rises back to minimum AC → normal profit only.",
            commonErrors: ["Ignoring long-run exit."],
          },
        },
      ],
    },
    {
      id: "cieige-u5l2-c2-efficiency",
      title: "Efficiency and evaluation",
      skill:
        "Assess allocative and productive efficiency; evaluate perfect competition.",
      lesson: {
        sections: [
          {
            heading: "Efficiency outcomes",
            body: "Long-run perfect competition achieves **allocative efficiency** (P = MC — output matches consumer valuation) and **productive efficiency** (P = minimum AC — lowest cost). This is why it's the benchmark 'ideal' market. But real markets rarely meet all conditions.",
          },
          {
            heading: "Evaluation",
            body: "Strengths: efficient outcomes, consumer sovereignty, no supernormal profit. Weaknesses: assumes perfect information (rare), homogeneous products (limits choice), no innovation incentive (no supernormal profit to fund R&D), and ignores externalities and equity. Real-world approximations are imperfect.",
          },
        ],
        keyFormulas: [
          { name: "Allocative efficiency", statement: "P = MC" },
          { name: "Productive efficiency", statement: "P = minimum AC" },
        ],
        workedExample: {
          problem:
            "Why is perfect competition called 'allocatively efficient'?",
          solution:
            "Because P = MC — the price consumers pay equals the marginal cost of the last unit, so resources go to what consumers value most.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Allocative efficiency occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "TR = TC" },
              { id: "b", text: "Q = max" },
              { id: "c", text: "P = AC" },
              { id: "d", text: "P = MC" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allocative efficiency",
                statement: "P = MC.",
              },
            ],
            steps: [
              { reasoning: "Correct condition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** P = MC",
            commonErrors: ["Confusing with productive efficiency."],
          },
        },
        {
          id: "cieige-q-u5l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'productive efficiency'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Productive efficiency",
                statement: "Lowest cost production — at minimum AC.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Condition stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Producing at the lowest possible average cost — in long-run PC, P = minimum AC.",
            commonErrors: ["Confusing with allocative efficiency."],
          },
        },
        {
          id: "cieige-q-u5l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why long-run perfect competition is both allocatively and productively efficient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dual efficiency",
                statement: "P=MC and P=min AC simultaneously.",
              },
            ],
            steps: [
              {
                reasoning: "Allocative: P=MC mechanism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Productive: P=min AC mechanism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both achieved in LR equilibrium.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "In long-run equilibrium P = MC (allocative — right quantity produced) AND P = minimum AC (productive — lowest cost), because entry/exit drives profit to normal at minimum AC.",
            commonErrors: ["Only one efficiency type."],
          },
        },
        {
          id: "cieige-q-u5l2c2-4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that perfect competition is the 'ideal' market structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PC as ideal",
                statement: "Efficient but unrealistic assumptions.",
              },
            ],
            steps: [
              { reasoning: "Efficiency strengths.", marks: 1, markCode: "M" },
              {
                reasoning: "Unrealistic assumptions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other goals: innovation, equity, choice.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "PC delivers static efficiency but assumes perfect information and identical products — real markets need innovation incentives and product variety that PC lacks; 'ideal' only for the narrow efficiency criterion.",
            commonErrors: ["One-sided praise or dismissal."],
          },
        },
        {
          id: "cieige-q-u5l2c2-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might perfect competition fail to provide incentives for innovation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Innovation incentive",
                statement: "No supernormal profit to fund R&D.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Contrast with monopoly.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Firms earn only normal profit, so no surplus to fund risky R&D; any innovation is quickly imitated — dynamic efficiency suffers despite static efficiency.",
            commonErrors: ["Thinking efficiency = innovation."],
          },
        },
        {
          id: "cieige-q-u5l2c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why real markets rarely achieve perfect competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PC unrealistic",
                statement: "Information, homogeneity, entry barriers.",
              },
            ],
            steps: [
              { reasoning: "Two valid reasons.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. consumers lack perfect information about prices/quality; products differ (branding); entry barriers exist (patents, capital, regulation).",
            commonErrors: ["Only one reason or vague."],
          },
        },
        {
          id: "cieige-q-u5l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which market structure is the benchmark for efficiency?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oligopoly" },
              { id: "b", text: "Monopoly" },
              { id: "c", text: "Perfect competition" },
              { id: "d", text: "Monopolistic competition" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Efficiency benchmark",
                statement: "Perfect competition.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Perfect competition",
            commonErrors: ["Confusing with monopoly."],
          },
        },
        {
          id: "cieige-q-u5l2c2-8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether allocative efficiency guarantees the best outcome for society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency limits",
                statement:
                  "P=MC ignores equity, externalities, dynamic effects.",
              },
            ],
            steps: [
              { reasoning: "Efficiency ≠ equity.", marks: 1, markCode: "M" },
              {
                reasoning: "Externalities ignored by P=MC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dynamic/innovation ignored.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Allocative efficiency maximises current consumer satisfaction given resources but ignores equity, externalities and future innovation — necessary but not sufficient for 'best' societal outcome.",
            commonErrors: ["Equating efficiency with welfare."],
          },
        },
        {
          id: "cieige-q-u5l2c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'consumer sovereignty' in perfect competition?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consumer sovereignty",
                statement: "Consumers' demands determine what is produced.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "How PC achieves it.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Consumers' spending decisions determine what firms produce — in PC, firms must produce what consumers want or go out of business.",
            commonErrors: ["Confusing with producer sovereignty."],
          },
        },
        {
          id: "cieige-q-u5l2c2-10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'identical products' is both a strength and weakness of perfect competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homogeneity",
                statement: "Ensures price competition but limits choice.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: pure price competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: no variety/branding.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Real-world relevance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identical products force pure price competition (efficiency) but deny consumers variety — real markets offer differentiated products consumers often prefer.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Productive efficiency requires producing at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum output" },
              { id: "b", text: "Minimum average cost" },
              { id: "c", text: "TR = TC" },
              { id: "d", text: "P = MC only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Productive efficiency",
                statement: "Lowest cost — at minimum AC.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Minimum average cost",
            commonErrors: ["Confusing with allocative efficiency."],
          },
        },
        {
          id: "cieige-q-u5l2c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In long-run perfect competition, P = minimum AC = $10 and the firm produces 60 units. (a) Find total revenue. (b) Find total cost.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total revenue", answer: 600, unit: "$" },
              { label: "Total cost", answer: 600, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Revenue and cost",
                statement: "TR = P × Q; TC = AC × Q.",
              },
            ],
            steps: [
              {
                reasoning: "TR = 10 × 60 = $600.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "TC = 10 × 60 = $600 — equals TR, so normal profit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $600 (b) $600",
            commonErrors: ["Forgetting P = AC implies zero profit."],
          },
        },
        {
          id: "cieige-q-u5l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Allocative efficiency means resources are allocated so that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Firms earn maximum profit" },
              {
                id: "b",
                text: "Output matches what consumers value most (P = MC)",
              },
              { id: "c", text: "Costs per unit are lowest" },
              { id: "d", text: "Prices are as high as possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allocative efficiency",
                statement: "P = MC — right quantity produced.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Output matches consumer valuation",
            commonErrors: ["Confusing with productive efficiency."],
          },
        },
        {
          id: "cieige-q-u5l2c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why long-run perfect competition achieves both allocative and productive efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dual efficiency",
                statement: "P = MC and P = minimum AC together.",
              },
            ],
            steps: [
              {
                reasoning: "Allocative: P = MC — right quantity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Productive: P = minimum AC via entry/exit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both hold in long-run equilibrium.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Entry drives price to minimum AC (productive efficiency) while firms produce where P = MC (allocative efficiency), so long-run perfect competition achieves both simultaneously.",
            commonErrors: ["Explaining only one efficiency type."],
          },
        },
        {
          id: "cieige-q-u5l2c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the assumption of perfect information in the model of perfect competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Information assumption",
                statement: "Rarely holds in real markets.",
              },
            ],
            steps: [
              {
                reasoning: "Perfect information underpins price-taking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reality: consumers lack full price/quality data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consequences: search costs, asymmetric info.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Perfect information is unrealistic — consumers rarely know all prices and qualities, so real markets involve search costs and asymmetric information; the model remains a useful benchmark but its efficiency results are overstated in practice.",
            commonErrors: ["One-sided dismissal."],
          },
        },
        {
          id: "cieige-q-u5l2c2-16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Even in perfect competition, market outcomes can still be inefficient when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Entry is free" },
              { id: "b", text: "Products are identical" },
              { id: "c", text: "There are many firms" },
              { id: "d", text: "Externalities exist" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency limits",
                statement: "P = MC ignores external costs/benefits.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Externalities exist",
            commonErrors: ["Thinking PC is always efficient."],
          },
        },
      ],
    },
  ],
};
