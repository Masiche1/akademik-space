import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "econ-u1-lesson-1-3",
  code: "1-3",
  title: "Market Structures",
  goal: "I CAN distinguish perfect competition, monopoly, oligopoly and monopolistic competition and compare their efficiency and welfare outcomes.",
  standards: ["Paper 1", "Paper 2", "Topic 1"],
  vocabulary: [
    { term: "Market structure", definition: "The characteristics of a market: number of firms, product type, barriers to entry and degree of competition." },
    { term: "Perfect competition", definition: "Many firms selling identical products with free entry and exit; firms are price takers." },
    { term: "Monopoly", definition: "A single seller of a product with no close substitutes and high barriers to entry; a price maker." },
    { term: "Oligopoly", definition: "A market dominated by a few large firms whose decisions are interdependent." },
    { term: "Monopolistic competition", definition: "Many firms selling differentiated products with some barriers to entry; firms have limited price power." },
    { term: "Barriers to entry", definition: "Obstacles preventing new firms entering a market: economies of scale, patents, licences, brand loyalty." },
  ],
  concepts: [
    {
      id: "econ-u1-perfect-competition-monopoly",
      title: "Perfect Competition and Monopoly",
      skill: "Compare the features and welfare implications of perfect competition and monopoly.",
      lesson: {
        sections: [
          {
            heading: "Perfect competition",
            body: "In **perfect competition** there are many small firms selling an **identical** product. Entry and exit are free, information is perfect, and firms are **price takers** — each must sell at the market price. Long-run equilibrium occurs where price equals both average and marginal cost (allocative and productive efficiency). Supernormal profits are competed away. Real-world examples are rare: agricultural commodities approximate it.",
          },
          {
            heading: "Monopoly",
            body: "A **monopoly** is a single seller of a product with no close substitutes, protected by **barriers to entry**: economies of scale, patents, exclusive licences, control of resources or high sunk costs. The monopolist is a **price maker**, facing a downward-sloping demand curve. It maximises profit where $MR = MC$, producing less output and charging a higher price than a competitive market — creating **deadweight loss**.",
          },
          {
            heading: "Comparing outcomes",
            body: "Monopoly reduces consumer surplus and total welfare compared with perfect competition, but may allow economies of scale and funds innovation (dynamic efficiency). Natural monopolies (utilities) exist where one firm can supply the whole market more cheaply than several. Governments may regulate monopolies or break them up (antitrust).",
          },
        ],
        keyFormulas: [
          { name: "Profit maximisation", statement: "Produce where MR = MC" },
          { name: "Perfect competition", statement: "P = MR = MC = minimum AC in long-run equilibrium" },
          { name: "Monopoly outcome", statement: "MR = MC at lower Q and higher P than competition → deadweight loss" },
        ],
        workedExample: {
          problem: "A monopolist faces demand P = 100 - 2Q and has MC = AC = 20. Find the profit-maximising price and quantity.",
          solution: "TR = P*Q = 100Q - 2Q^2, so MR = 100 - 4Q. Set MR = MC: 100 - 4Q = 20 → Q = 20. Then P = 100 - 2(20) = 60.",
        },
      },
      questions: [
        {
          id: "econ-u1-l13c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In perfect competition, firms are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Protected by patents" },
              { id: "b", text: "Price makers" },
              { id: "c", text: "The only sellers in the market" },
              { id: "d", text: "Price takers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Price taker", statement: "A firm that must accept the market price because it is too small to influence it." },
            ],
            steps: [
              { reasoning: "With many firms and identical products, no single firm can set price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Price takers",
            commonErrors: ["Confusing perfect competition with monopoly, where firms are price makers."],
          },
        },
        {
          id: "econ-u1-l13c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State two barriers to entry that can protect a monopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Barriers to entry", statement: "Obstacles that prevent new firms entering a market." },
            ],
            steps: [
              { reasoning: "Economies of scale: an entrant cannot match the incumbent's low average costs.", marks: 1, markCode: "M" },
              { reasoning: "Patents or exclusive licences give legal protection for a period.", marks: 1, markCode: "M" },
              { reasoning: "Other valid barriers: control of key resources, high sunk costs, brand loyalty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two: economies of scale, patents, licences, resource control, sunk costs, brand loyalty.",
            commonErrors: ["Naming competitive features (many firms) instead of barriers."],
          },
        },
        {
          id: "econ-u1-l13c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A monopoly produces where MR = MC. Explain why this results in a higher price and lower output than under perfect competition, and the welfare consequence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monopoly vs competition", statement: "Monopolist restricts output to raise price; competitive firms produce at P = MC." },
            ],
            steps: [
              { reasoning: "Monopolist faces downward-sloping demand, so MR < P; producing where MR = MC gives Q below the competitive level.", marks: 1, markCode: "M" },
              { reasoning: "With less output, the price on the demand curve is higher than the competitive price.", marks: 1, markCode: "M" },
              { reasoning: "Units between competitive Q and monopoly Q that consumers value above cost are not produced.", marks: 1, markCode: "R" },
              { reasoning: "This creates deadweight loss — a net loss of total surplus.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Monopoly restricts output and raises price below/above competitive levels, creating deadweight loss.",
            commonErrors: ["Claiming monopoly always charges the highest possible price — it maximises profit at MR = MC."],
          },
        },
        {
          id: "econ-u1-l13c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Compare the efficiency and welfare outcomes of perfect competition and monopoly, and evaluate whether monopolies should be permitted.",
          parts: [
            { label: "a", prompt: "Describe the key features of each market structure.", marks: 3 },
            { label: "b", prompt: "Compare their allocative and productive efficiency.", marks: 3 },
            { label: "c", prompt: "Evaluate the case for allowing monopolies.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perfect competition", statement: "Many firms, identical products, free entry, price takers." },
              { kind: "definition", name: "Monopoly", statement: "Single seller, no substitutes, high barriers to entry, price maker." },
            ],
            steps: [
              { part: "a", reasoning: "Perfect competition: many firms, homogeneous product, free entry/exit, price takers.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Monopoly: one firm, unique product, barriers to entry, price maker facing downward demand.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both maximise profit at MR = MC but reach different equilibria.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Competition: P = MC (allocative efficiency) and P = min AC (productive efficiency).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Monopoly: P > MC and higher costs possible — deadweight loss, allocative inefficiency.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Monopoly may achieve economies of scale (lower unit costs) — possible productive efficiency gain.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Monopolies may fund R&D and innovation (dynamic efficiency) and avoid duplication in natural monopolies.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: permit with regulation if scale/innovation gains outweigh deadweight loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Many identical firms vs single firm with barriers. (b) Competition is allocatively/productively efficient; monopoly creates deadweight loss but may gain scale/innovation. (c) Regulate rather than ban.",
            commonErrors: ["Ignoring that monopoly can be more productively efficient via economies of scale."],
          },
        },
        {
          id: "econ-u1-l13c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A monopolist, unlike a perfectly competitive firm, is best described as a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Price taker" },
              { id: "b", text: "Free entrant" },
              { id: "c", text: "Price maker" },
              { id: "d", text: "Wage taker" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Price maker", statement: "A firm with enough market power to set its own price — as a monopolist does." },
            ],
            steps: [
              { reasoning: "As the sole seller facing downward-sloping demand, the monopolist chooses its price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Price maker",
            commonErrors: ["Confusing monopoly with perfect competition."],
          },
        },
        {
          id: "econ-u1-l13c1q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In long-run equilibrium under perfect competition, price equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Average revenue plus a profit margin" },
              { id: "b", text: "Marginal revenue only" },
              { id: "c", text: "Both marginal cost and minimum average cost" },
              { id: "d", text: "Total revenue divided by total cost" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perfect competition equilibrium", statement: "P = MR = MC = minimum AC — allocative and productive efficiency." },
            ],
            steps: [
              { reasoning: "Free entry/exit drive price to minimum average cost and marginal cost simultaneously.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Both marginal cost and minimum average cost",
            commonErrors: ["Saying only P = MC — productive efficiency requires P = min AC too."],
          },
        },
        {
          id: "econ-u1-l13c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of a barrier to entry that protects a monopoly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free entry and exit for all firms" },
              { id: "b", text: "A government patent on a new drug" },
              { id: "c", text: "Perfect information available to all buyers" },
              { id: "d", text: "Many small firms selling identical products" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Barriers to entry", statement: "Obstacles such as patents, economies of scale or resource control that block new firms." },
            ],
            steps: [
              { reasoning: "A patent legally prevents rivals producing the same product for a period.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A government patent on a new drug",
            commonErrors: ["Choosing features of competition rather than barriers."],
          },
        },
        {
          id: "econ-u1-l13c1q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A monopolist faces demand P = 120 - 3Q and has constant marginal cost MC = $30. Total revenue is TR = 120Q - 3Q^2, so MR = 120 - 6Q. Calculate: (a) the profit-maximising quantity, and (b) the price charged.",
          response: {
            type: "numeric",
            parts: [
              { label: "Profit-maximising quantity (units)", answer: 15 },
              { label: "Price charged ($)", answer: 75 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit maximisation", statement: "Produce where MR = MC; price is read off the demand curve." },
            ],
            steps: [
              { reasoning: "Set MR equal to MC to find quantity.", working: "120 - 6Q = 30 \\Rightarrow 6Q = 90 \\Rightarrow Q = 15", marks: 1, markCode: "M" },
              { reasoning: "Profit-maximising quantity = 15 units.", marks: 1, markCode: "A" },
              { reasoning: "Price comes from the demand curve at Q = 15.", working: "P = 120 - 3(15) = 75", marks: 1, markCode: "M" },
              { reasoning: "Price charged = $75.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Q = 15 units; P = $75.",
            commonErrors: ["Setting P = MC instead of MR = MC, or using MR as the price."],
          },
        },
        {
          id: "econ-u1-l13c1q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how a monopoly creates deadweight loss.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deadweight loss", statement: "Lost total surplus when output is restricted below the competitive level." },
            ],
            steps: [
              { reasoning: "The monopolist produces where MR = MC, below the competitive quantity.", marks: 1, markCode: "M" },
              { reasoning: "Between the monopoly and competitive quantities, consumers value the good above its marginal cost.", marks: 1, markCode: "M" },
              { reasoning: "These mutually beneficial trades do not happen — a net loss of consumer plus producer surplus.", marks: 1, markCode: "M" },
              { reasoning: "This lost surplus is deadweight loss — a welfare cost of monopoly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Monopoly restricts output below the competitive level, forfeiting surplus on unproduced units = deadweight loss.",
            commonErrors: ["Confusing deadweight loss with monopoly profit (a transfer, not a net loss)."],
          },
        },
        {
          id: "econ-u1-l13c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why perfect competition achieves both allocative and productive efficiency in the long run.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Efficiency conditions", statement: "Allocative: P = MC; productive: P = minimum AC." },
            ],
            steps: [
              { reasoning: "Price takers produce where P = MC, so resources go to goods valued at least at their cost — allocative efficiency.", marks: 1, markCode: "M" },
              { reasoning: "Free entry/exit drives supernormal profit to zero, so P = minimum average cost — productive efficiency.", marks: 1, markCode: "M" },
              { reasoning: "Both conditions hold simultaneously in long-run equilibrium: P = MR = MC = min AC.", marks: 1, markCode: "M" },
              { reasoning: "Hence perfect competition is the benchmark for efficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "P = MC gives allocative efficiency; P = min AC (zero profit) gives productive efficiency.",
            commonErrors: ["Describing only one type of efficiency."],
          },
        },
        {
          id: "econ-u1-l13c1q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A country has a single electricity supplier that enjoys large economies of scale — a natural monopoly. Examine whether it should remain a private monopoly.",
          parts: [
            { label: "a", prompt: "Explain what a natural monopoly is and why it arises.", marks: 2 },
            { label: "b", prompt: "Explain the welfare effects of leaving it unregulated.", marks: 3 },
            { label: "c", prompt: "Evaluate options for dealing with the natural monopoly.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Natural monopoly", statement: "One firm can supply the whole market at lower cost than several competing firms." },
              { kind: "principle", name: "Regulation", statement: "Options include price regulation, nationalisation or yardstick competition." },
            ],
            steps: [
              { part: "a", reasoning: "Natural monopoly: huge fixed costs and economies of scale mean one firm supplies at lowest average cost.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Breaking it up would duplicate infrastructure and raise costs.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Unregulated monopolist restricts output and raises price above MC — deadweight loss.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consumer surplus falls; monopoly profit is earned at consumers' expense.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "But the single firm may achieve lower unit costs via scale — possible productive efficiency gain.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Option: regulate price at marginal cost or average cost to protect consumers.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Option: nationalise or use yardstick competition to mimic competitive pressure.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: keep monopoly structure but regulate, balancing scale gains against monopoly power.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) One firm supplies cheapest due to scale. (b) Higher P, lower Q, deadweight loss but lower unit costs. (c) Regulate rather than break up.",
            commonErrors: ["Arguing for breaking up a natural monopoly despite duplicated costs."],
          },
        },
        {
          id: "econ-u1-l13c1q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A monopolist with constant MC = AC = $20 sells 20 units at a price of $60. Calculate: (a) the supernormal profit per unit, and (b) the total supernormal profit earned.",
          response: {
            type: "numeric",
            parts: [
              { label: "Supernormal profit per unit ($)", answer: 40 },
              { label: "Total supernormal profit ($)", answer: 800 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Supernormal profit", statement: "Profit = (P - AC) x Q" },
            ],
            steps: [
              { reasoning: "Profit per unit = price minus average cost.", working: "60 - 20 = 40", marks: 1, markCode: "M" },
              { reasoning: "Supernormal profit per unit = $40.", marks: 1, markCode: "A" },
              { reasoning: "Total profit = per-unit profit x quantity.", working: "40 \\times 20 = 800", marks: 1, markCode: "M" },
              { reasoning: "Total supernormal profit = $800.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40 per unit; $800 total.",
            commonErrors: ["Subtracting MC from price but forgetting to multiply by quantity for the total."],
          },
        },
        {
          id: "econ-u1-l13c1q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between a price taker and a price maker.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Price taker vs price maker", statement: "Price takers accept the market price; price makers set their own." },
            ],
            steps: [
              { reasoning: "A price taker is too small to influence price and must sell at the market price — typical of perfect competition.", marks: 1, markCode: "M" },
              { reasoning: "A price maker has market power (e.g. a monopoly) and chooses its price along the demand curve.", marks: 1, markCode: "M" },
              { reasoning: "The distinction reflects market power and the shape of the demand curve faced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Price taker = accepts market price; price maker = sets own price.",
            commonErrors: ["Giving definitions without linking to market structure."],
          },
        },
        {
          id: "econ-u1-l13c1q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which real-world market most closely approximates perfect competition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The market for commercial air travel on a single route" },
              { id: "b", text: "The market for agricultural commodities such as wheat" },
              { id: "c", text: "The market for local hairdressers" },
              { id: "d", text: "The market for smartphone operating systems" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Real-world competition", statement: "Agricultural commodities approximate perfect competition: many sellers, homogeneous product." },
            ],
            steps: [
              { reasoning: "Wheat farmers are numerous, sell an identical product and cannot influence price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The market for agricultural commodities such as wheat",
            commonErrors: ["Choosing markets with differentiated products or few firms."],
          },
        },
        {
          id: "econ-u1-l13c1q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A government is deciding whether to break up a large monopoly into several competing firms.",
          parts: [
            { label: "a", prompt: "Explain how competition would change price and output.", marks: 2 },
            { label: "b", prompt: "Explain the effect on consumer surplus and total welfare.", marks: 3 },
            { label: "c", prompt: "Evaluate one reason the monopoly might be allowed to continue.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monopoly vs competition", statement: "Competition lowers price toward MC and raises output toward the competitive level." },
            ],
            steps: [
              { part: "a", reasoning: "Competition forces price down toward marginal cost and output up toward the competitive quantity.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Supernormal profit is competed away.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Consumer surplus rises as price falls and quantity increases.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Deadweight loss is eliminated — total welfare increases.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Producer surplus may fall as monopoly profit disappears, but the net welfare gain is positive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Valid reason, e.g. economies of scale, natural monopoly, or innovation funding.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation weighing that benefit against the welfare loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Lower P, higher Q. (b) Consumer surplus and total welfare rise. (c) Scale/innovation may justify keeping it.",
            commonErrors: ["Ignoring that monopoly profit is a transfer while deadweight loss is a real loss."],
          },
        },
        {
          id: "econ-u1-l13c1q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why supernormal profits cannot persist in the long run under perfect competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Free entry and exit", statement: "Supernormal profit attracts new firms; losses cause exit." },
            ],
            steps: [
              { reasoning: "Supernormal profit signals above-normal returns, attracting new firms into the industry.", marks: 1, markCode: "M" },
              { reasoning: "More firms increase supply, pushing market price down.", marks: 1, markCode: "M" },
              { reasoning: "Price falls until it equals minimum average cost — profit returns to normal.", marks: 1, markCode: "M" },
              { reasoning: "Conversely, losses drive firms out until price again equals minimum AC.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Free entry/exit drives price to minimum AC, eliminating supernormal profit in the long run.",
            commonErrors: ["Claiming competitive firms can keep supernormal profit long-term."],
          },
        },
      ],
    },
    {
      id: "econ-u1-oligopoly-monopolistic",
      title: "Oligopoly and Monopolistic Competition",
      skill: "Explain the features of oligopoly and monopolistic competition and their pricing behaviour.",
      lesson: {
        sections: [
          {
            heading: "Oligopoly",
            body: "An **oligopoly** is dominated by a few large firms — think car makers, airlines, telecoms, supermarkets. Key features: **interdependence** (each firm's decisions depend on rivals' reactions), **non-price competition** (advertising, branding, product differentiation), and **barriers to entry**. Pricing may follow **kinked demand curve** logic or **collusion/cartels** where firms act as a monopoly. Oligopolies can earn supernormal profits and may achieve economies of scale.",
          },
          {
            heading: "Monopolistic competition",
            body: "**Monopolistic competition** has many firms selling **differentiated** products (restaurants, clothing, hairdressers). Each firm has a small degree of **monopoly power** over its brand, so demand is downward sloping and it can set price above marginal cost. Entry is relatively free, so in the long run supernormal profit is competed away and equilibrium occurs where price exceeds both MC and minimum AC — **excess capacity** and some allocative inefficiency, but with product variety.",
          },
          {
            heading: "Spectrum of competition",
            body: "Market structures form a spectrum: perfect competition (maximum competition) → monopolistic competition → oligopoly → monopoly (minimum competition). Real markets mostly lie in between. Oligopoly combines monopoly power with rivalry; monopolistic competition combines variety with mild inefficiency.",
          },
        ],
        keyFormulas: [
          { name: "Oligopoly", statement: "Few firms, interdependent, differentiated or identical products, high entry barriers" },
          { name: "Monopolistic competition", statement: "Many firms, differentiated products, some price power, free entry" },
          { name: "Long-run MC outcome", statement: "Monopolistic competition: P > MC and P > min AC → excess capacity" },
        ],
        workedExample: {
          problem: "Why might two petrol stations on the same street charge similar prices?",
          solution: "This is an oligopoly: few sellers, interdependent pricing. If one cuts price, rivals match it, so each has little incentive to compete on price — leading to similar prices and non-price competition instead.",
        },
      },
      questions: [
        {
          id: "econ-u1-l13c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The defining feature of an oligopoly is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many firms selling identical products" },
              { id: "b", text: "A single seller with no substitutes" },
              { id: "c", text: "Completely free entry and exit" },
              { id: "d", text: "A few large firms whose decisions are interdependent" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oligopoly", statement: "Market dominated by a few firms whose decisions are interdependent." },
            ],
            steps: [
              { reasoning: "Oligopoly = few sellers, interdependent decisions, barriers to entry.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A few large firms whose decisions are interdependent",
            commonErrors: ["Confusing oligopoly with monopolistic competition (many firms)."],
          },
        },
        {
          id: "econ-u1-l13c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why firms in monopolistic competition engage in non-price competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Product differentiation", statement: "Each firm's product is perceived as unique, giving limited price power." },
            ],
            steps: [
              { reasoning: "Products are differentiated, so each firm faces a downward-sloping demand curve.", marks: 1, markCode: "M" },
              { reasoning: "Firms compete via advertising, branding, quality and design to build customer loyalty.", marks: 1, markCode: "M" },
              { reasoning: "Non-price competition shifts demand for the firm's product and protects its market share.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Differentiation gives limited monopoly power; firms compete on branding/quality rather than price.",
            commonErrors: ["Saying monopolistic competition firms are price takers."],
          },
        },
        {
          id: "econ-u1-l13c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the kinked demand curve model of oligopoly and what it predicts about price rigidity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Kinked demand curve", statement: "If a firm raises price rivals won't follow (lose share); if it cuts price rivals match (little gain) — demand is kinked." },
            ],
            steps: [
              { reasoning: "Assumes rivals match price cuts but ignore price rises.", marks: 1, markCode: "M" },
              { reasoning: "Demand is elastic above the current price and inelastic below — creating a kink.", marks: 1, markCode: "M" },
              { reasoning: "The kink makes MC discontinuous, so MC can change without changing price.", marks: 1, markCode: "R" },
              { reasoning: "Predicts oligopoly prices are 'sticky' or rigid despite cost changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Kinked demand → discontinuous MC → price rigidity in oligopoly.",
            commonErrors: ["Assuming the model predicts frequent price wars — it predicts the opposite."],
          },
        },
        {
          id: "econ-u1-l13c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of collusion among oligopolistic firms for consumers and the economy.",
          parts: [
            { label: "a", prompt: "Define collusion and give an example of an oligopolistic industry.", marks: 2 },
            { label: "b", prompt: "Explain how collusion affects prices, output and welfare.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of competition policy against collusion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collusion", statement: "Firms agreeing to fix prices or share markets, acting like a monopoly." },
            ],
            steps: [
              { part: "a", reasoning: "Collusion = secret or open agreement among firms to restrict competition.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Example industry: airlines, car manufacturers, telecoms, OPEC oil producers.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Colluding firms restrict output and raise prices toward monopoly levels.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consumer surplus falls; deadweight loss is created.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Firms may earn supernormal profits shared among members.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Competition authorities can detect cartels and impose fines — deterrent effect.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But cartels are hard to detect and prove; leniency programmes needed.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: enforcement helps but collusion remains a persistent risk in concentrated markets.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Agreement to restrict competition; e.g. airlines. (b) Higher P, lower Q, deadweight loss. (c) Enforcement deters but detection is difficult.",
            commonErrors: ["Assuming collusion always succeeds — cheating by members often breaks cartels."],
          },
        },
        {
          id: "econ-u1-l13c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Monopolistic competition is best described as a market with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many firms selling differentiated products" },
              { id: "b", text: "A few firms with interdependent decisions" },
              { id: "c", text: "Many firms selling identical products" },
              { id: "d", text: "A single firm with no competitors" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monopolistic competition", statement: "Many firms, differentiated products, limited price power, relatively free entry." },
            ],
            steps: [
              { reasoning: "Each firm's product is perceived as different, giving it a small monopoly over its brand.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Many firms selling differentiated products",
            commonErrors: ["Confusing it with perfect competition (identical products) or oligopoly (few firms)."],
          },
        },
        {
          id: "econ-u1-l13c2q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In an oligopoly, each firm's pricing and output decisions depend on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single dominant buyer" },
              { id: "b", text: "The expected reactions of rival firms" },
              { id: "c", text: "Only government regulation" },
              { id: "d", text: "Fixed prices set by a central bank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interdependence", statement: "In oligopoly each firm's best decision depends on what rivals will do." },
            ],
            steps: [
              { reasoning: "With few large rivals, each firm must anticipate competitors' reactions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The expected reactions of rival firms",
            commonErrors: ["Ignoring interdependence as the key oligopoly feature."],
          },
        },
        {
          id: "econ-u1-l13c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of non-price competition in an oligopoly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cutting production costs to lower price" },
              { id: "b", text: "Reducing the price of the product" },
              { id: "c", text: "Large-scale advertising and brand promotion" },
              { id: "d", text: "Offering a cash discount to retailers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Non-price competition", statement: "Competing via advertising, branding, quality and service rather than price." },
            ],
            steps: [
              { reasoning: "Advertising and branding compete on product image, not price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Large-scale advertising and brand promotion",
            commonErrors: ["Confusing price cuts with non-price competition."],
          },
        },
        {
          id: "econ-u1-l13c2q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In an oligopolistic market, total revenue is initially $8 per unit sold with 500 units sold per week (TR = $4,000). A cartel forms and raises price to $10 per unit while quantity falls to 400 units. Calculate: (a) the cartel's total revenue, and (b) the change in total revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cartel total revenue ($)", answer: 4000 },
              { label: "Change in total revenue ($)", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total revenue", statement: "TR = P x Q" },
            ],
            steps: [
              { reasoning: "Cartel total revenue = new price x new quantity.", working: "10 \\times 400 = 4000", marks: 1, markCode: "M" },
              { reasoning: "Cartel total revenue = $4,000.", marks: 1, markCode: "A" },
              { reasoning: "Change = new TR - old TR.", working: "4000 - 4000 = 0", marks: 1, markCode: "M" },
              { reasoning: "Total revenue is unchanged — higher price offset by lower quantity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "TR = $4,000; change = $0.",
            commonErrors: ["Assuming higher price always raises total revenue — quantity falls too."],
          },
        },
        {
          id: "econ-u1-l13c2q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why oligopolistic firms often prefer non-price competition over aggressive price cutting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interdependence and price wars", statement: "A price cut by one firm is likely to be matched by rivals, sparking a price war." },
            ],
            steps: [
              { reasoning: "Firms are interdependent — a price cut by one invites matching cuts by rivals.", marks: 1, markCode: "M" },
              { reasoning: "A price war erodes everyone's profits for little gain in market share.", marks: 1, markCode: "M" },
              { reasoning: "Advertising and branding can differentiate products and attract customers without triggering retaliation.", marks: 1, markCode: "M" },
              { reasoning: "Hence non-price competition is often the safer, more profitable strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Price cuts provoke matching responses and profit-eroding price wars; branding avoids this.",
            commonErrors: ["Claiming price competition is always better for consumers without noting firm incentives."],
          },
        },
        {
          id: "econ-u1-l13c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain product differentiation and excess capacity in monopolistic competition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monopolistic competition outcome", statement: "P > MC and P > min AC in long run — excess capacity with product variety." },
            ],
            steps: [
              { reasoning: "Firms differentiate products (design, service, location), creating perceived uniqueness.", marks: 1, markCode: "M" },
              { reasoning: "This gives each firm a downward-sloping demand curve and limited price power — P > MC.", marks: 1, markCode: "M" },
              { reasoning: "Free entry means supernormal profit is competed away, but price remains above minimum AC.", marks: 1, markCode: "M" },
              { reasoning: "Firms produce below their minimum efficient scale — excess capacity, but consumers gain variety.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Differentiation gives limited monopoly power; free entry leaves P > min AC — excess capacity offset by variety.",
            commonErrors: ["Claiming monopolistic competition achieves productive efficiency."],
          },
        },
        {
          id: "econ-u1-l13c2q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the view that monopolistic competition benefits consumers despite its inefficiencies.",
          parts: [
            { label: "a", prompt: "Describe the key features of monopolistic competition.", marks: 2 },
            { label: "b", prompt: "Explain its efficiency drawbacks.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the benefits to consumers outweigh the inefficiency.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monopolistic competition", statement: "Many firms, differentiated products, limited price power, free entry." },
              { kind: "principle", name: "MC inefficiency", statement: "P > MC and P > min AC — allocative and productive inefficiency." },
            ],
            steps: [
              { part: "a", reasoning: "Many firms sell differentiated products with some price-setting power and free entry.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Examples: restaurants, clothing brands, hairdressers.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Price exceeds marginal cost — allocative inefficiency (underproduction).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Price exceeds minimum average cost — productive inefficiency and excess capacity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Resources are duplicated across many similar small firms.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Benefit: product variety and choice improve consumer utility; non-price competition raises quality.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Drawback: higher prices and excess capacity represent wasted resources.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: variety may justify mild inefficiency for many consumers, but the trade-off is context-dependent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Many differentiated firms, free entry. (b) P > MC, P > min AC — inefficiency. (c) Variety vs inefficiency trade-off.",
            commonErrors: ["Ignoring the consumer benefit of variety when judging efficiency."],
          },
        },
        {
          id: "econ-u1-l13c2q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Interdependence in an oligopoly means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "New firms can enter freely" },
              { id: "b", text: "Firms always collude legally" },
              { id: "c", text: "All firms earn identical profits" },
              { id: "d", text: "Each firm's best decision depends on rivals' likely reactions" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interdependence", statement: "Each oligopolist's optimal action depends on anticipated rival responses." },
            ],
            steps: [
              { reasoning: "With few dominant rivals, a firm's pricing/output choice must account for competitors' reactions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Each firm's best decision depends on rivals' likely reactions",
            commonErrors: ["Thinking interdependence means automatic collusion."],
          },
        },
        {
          id: "econ-u1-l13c2q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following markets is the best example of monopolistic competition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A country's national railway monopoly" },
              { id: "b", text: "Local restaurants and cafes" },
              { id: "c", text: "Wheat farming" },
              { id: "d", text: "Commercial aircraft manufacturing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Monopolistic competition examples", statement: "Many firms selling differentiated products — restaurants, clothing, hairdressers." },
            ],
            steps: [
              { reasoning: "Restaurants are numerous, differentiated by cuisine/ambience, with relatively free entry.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Local restaurants and cafes",
            commonErrors: ["Choosing an oligopoly (aircraft) or monopoly (railway) example."],
          },
        },
        {
          id: "econ-u1-l13c2q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Three airlines operating on the same routes agree secretly to fix their fares at a high level.",
          parts: [
            { label: "a", prompt: "Define collusion and state its effect on competition.", marks: 2 },
            { label: "b", prompt: "Explain the effects on fares, output and consumer welfare.", marks: 3 },
            { label: "c", prompt: "Evaluate the stability of such an agreement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collusion", statement: "Firms agreeing to restrict competition, acting like a single monopoly." },
            ],
            steps: [
              { part: "a", reasoning: "Collusion = agreement among rivals to fix prices or share markets.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It reduces competition, moving the market toward monopoly outcomes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fares rise above competitive levels while output/seat capacity is restricted.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consumer surplus falls; deadweight loss is created.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The airlines earn supernormal profits if the agreement holds.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Valid point, e.g. each airline has an incentive to cheat by undercutting the agreed fare.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Detection difficulties and punishment mechanisms determine stability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Agreement to restrict competition. (b) Higher fares, lower output, deadweight loss. (c) Unstable — incentive to cheat.",
            commonErrors: ["Assuming the cartel is stable without noting cheating incentives."],
          },
        },
        {
          id: "econ-u1-l13c2q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why entry into monopolistic competition is relatively easy compared with entry into a monopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Barriers to entry", statement: "Monopolistic competition has low barriers; monopoly has high barriers." },
            ],
            steps: [
              { reasoning: "In monopolistic competition, products are differentiated — a new firm can enter with a slightly different product.", marks: 1, markCode: "M" },
              { reasoning: "No single firm dominates and there are no strong economies of scale or patents blocking entry.", marks: 1, markCode: "M" },
              { reasoning: "In a monopoly, high barriers (scale, patents, licences) prevent or deter entrants.", marks: 1, markCode: "M" },
              { reasoning: "Thus entry is easy in MC and hard in monopoly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Low barriers and product differentiation allow easy entry into monopolistic competition; monopolies are protected by high barriers.",
            commonErrors: ["Claiming monopolistic competition has high entry barriers."],
          },
        },
        {
          id: "econ-u1-l13c2q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the incentive for members of a cartel to cheat on the agreed price, and the consequence for the cartel.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cartel instability", statement: "Each member gains by secretly undercutting the cartel price." },
            ],
            steps: [
              { reasoning: "At the cartel price, each member restricts output and shares monopoly profit.", marks: 1, markCode: "M" },
              { reasoning: "A member can secretly charge slightly less, steal rivals' customers and earn extra profit.", marks: 1, markCode: "M" },
              { reasoning: "If all members cheat, the cartel breaks down and prices fall toward competition.", marks: 1, markCode: "M" },
              { reasoning: "This incentive makes cartels inherently unstable without enforcement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cheating is profitable individually but undermines the cartel, causing breakdown toward competitive prices.",
            commonErrors: ["Assuming cartels are stable because they raise joint profit."],
          },
        },
      ],
    },
  ],
};
