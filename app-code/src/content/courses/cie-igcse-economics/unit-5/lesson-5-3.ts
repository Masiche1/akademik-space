import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cieige-u5-lesson-5-3",
  code: "5-3",
  title: "Monopoly and Imperfect Competition",
  goal: "I CAN analyse monopoly power, barriers to entry and compare market structures.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 5: market structures"],
  vocabulary: [
    {
      term: "Monopoly",
      definition: "Single seller of a product with no close substitutes.",
    },
    {
      term: "Barriers to entry",
      definition: "Obstacles preventing new firms entering a market.",
    },
    {
      term: "Price maker",
      definition: "Firm that can influence price by choosing output.",
    },
    {
      term: "Monopolistic competition",
      definition:
        "Many firms selling differentiated products with some pricing power.",
    },
    {
      term: "Oligopoly",
      definition:
        "Few large firms dominating a market, often with interdependence.",
    },
    {
      term: "Allocative inefficiency",
      definition: "P > MC — output below socially optimal level.",
    },
  ],
  concepts: [
    {
      id: "cieige-u5l3-c1-monopoly",
      title: "Monopoly power and barriers",
      skill:
        "Explain monopoly pricing, barriers to entry and efficiency losses.",
      lesson: {
        sections: [
          {
            heading: "Monopoly characteristics",
            body: "A monopolist is the **single seller** facing the market demand curve (downward sloping). It is a **price maker** — chooses output where **MR = MC**, then charges the price on the demand curve (higher than MC). Result: **P > MC** — allocative inefficiency, deadweight loss. May earn **supernormal profit** sustained by barriers to entry.",
          },
          {
            heading: "Barriers to entry",
            body: "Monopoly persists via: **patents** (legal protection), **economies of scale** (natural monopoly — one firm lowest cost), **ownership of resources**, **high setup costs**, and **government licences/franchises**. Without barriers, supernormal profit attracts entrants.",
          },
        ],
        keyFormulas: [
          {
            name: "Monopoly output",
            statement: "MR = MC, price from demand curve",
          },
          {
            name: "Inefficiency",
            statement: "P > MC → underproduction vs social optimum",
          },
          {
            name: "Barriers",
            statement: "Patents, scale economies, resource ownership, licences",
          },
        ],
        workedExample: {
          problem:
            "Why does a monopolist produce less than the competitive output?",
          solution:
            "It equates MR (not P) to MC; since MR < P, the profit-max output is lower, and it charges a higher price — creating deadweight loss.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A monopoly is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many sellers" },
              { id: "b", text: "Free entry" },
              { id: "c", text: "Identical products only" },
              { id: "d", text: "A single seller with no close substitutes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monopoly",
                statement: "Single seller, no close substitutes.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Single seller, no substitutes",
            commonErrors: ["Confusing with oligopoly."],
          },
        },
        {
          id: "cieige-q-u5l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is MR < P for a monopolist?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MR<P",
                statement: "Lower price on all units to sell more.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Contrast with PC.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "To sell an extra unit the monopolist must lower price on ALL units, so revenue lost on previous sales makes MR < AR = price.",
            commonErrors: ["Assuming MR = price."],
          },
        },
        {
          id: "cieige-q-u5l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three barriers to entry that protect monopolies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Barriers",
                statement: "Patents, scale, resources, licences, costs.",
              },
            ],
            steps: [
              { reasoning: "Three valid barriers.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. patents (legal protection), economies of scale (natural monopoly), government licences/franchises — each prevents new entrants.",
            commonErrors: ["Listing without explanation."],
          },
        },
        {
          id: "cieige-q-u5l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why monopoly leads to allocative inefficiency (deadweight loss).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deadweight loss",
                statement: "P>MC → underproduction; lost gains from trade.",
              },
            ],
            steps: [
              { reasoning: "P>MC condition.", marks: 1, markCode: "M" },
              {
                reasoning: "Underproduction vs social optimum.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lost consumer+producer surplus.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Diagram/clear explanation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Monopolist produces where MR=MC, charging P>MC — units between monopoly Q and competitive Q would benefit society (P>MC means value exceeds cost) but aren't produced → deadweight loss.",
            commonErrors: ["Only citing high prices."],
          },
        },
        {
          id: "cieige-q-u5l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether monopolies can ever benefit society.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopoly debate",
                statement: "Inefficiency vs scale economies/innovation.",
              },
            ],
            steps: [
              {
                reasoning: "Costs: deadweight loss, high prices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Benefits: economies of scale, R&D funding, natural monopoly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Regulation can capture benefits.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Monopolies cause deadweight loss but may achieve lower costs via scale economies or fund innovation through supernormal profit — net benefit depends on regulation and whether barriers are contestable.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'natural monopoly'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural monopoly",
                statement: "One firm has lowest cost due to scale economies.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A market where economies of scale are so large that one firm supplies at lower cost than two or more — e.g. utilities, railways.",
            commonErrors: ["Confusing with any monopoly."],
          },
        },
        {
          id: "cieige-q-u5l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A monopolist is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfect competitor" },
              { id: "b", text: "Price taker" },
              { id: "c", text: "Price maker" },
              { id: "d", text: "Small firm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Price maker",
                statement: "Influences price via output choice.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Price maker",
            commonErrors: ["Confusing with PC."],
          },
        },
        {
          id: "cieige-q-u5l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a patent create a monopoly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Patent barrier",
                statement: "Legal exclusion of competitors for a period.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Purpose/incentive.", marks: 1, markCode: "M" },
              { reasoning: "Limit noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A patent grants exclusive rights to an invention for a period, legally preventing competitors — incentivising R&D but creating temporary monopoly pricing power.",
            commonErrors: ["Thinking patents are permanent."],
          },
        },
        {
          id: "cieige-q-u5l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a monopolist NOT produce at minimum AC?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopoly output",
                statement: "MR=MC ≠ min AC; restricted output.",
              },
            ],
            steps: [
              {
                reasoning: "MR=MC determines output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May differ from min AC point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Result: productive inefficiency possible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Monopolist produces where MR=MC, which typically isn't minimum AC — so it may be productively inefficient too, not just allocatively.",
            commonErrors: ["Assuming monopolist is efficient."],
          },
        },
        {
          id: "cieige-q-u5l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the long-run outcomes of perfect competition vs monopoly.",
          parts: [
            { label: "a", prompt: "Price and output", marks: 1 },
            { label: "b", prompt: "Profit", marks: 1 },
            { label: "c", prompt: "Efficiency", marks: 1 },
            { label: "d", prompt: "Overall judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Market comparison",
                statement:
                  "PC efficient/normal profit; monopoly inefficient/supernormal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "PC: P=MC=min AC; monopoly: P>MC, lower Q.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "PC: normal; monopoly: supernormal sustained.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "PC: alloc+prod efficient; monopoly: DWL.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "PC superior on static efficiency.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Caveats noted (innovation, scale).",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) PC: lower P, higher Q (b) PC: normal; monopoly: supernormal (c) PC efficient; monopoly DWL (d) PC superior statically; monopoly may fund innovation/scale",
            commonErrors: ["One-sided comparison."],
          },
        },
        {
          id: "cieige-q-u5l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A monopolist faces which demand curve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The downward-sloping market demand curve" },
              { id: "b", text: "A horizontal demand curve" },
              { id: "c", text: "A perfectly elastic demand curve" },
              { id: "d", text: "No demand curve" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Monopoly demand",
                statement: "Faces market demand — downward sloping.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Market demand curve",
            commonErrors: ["Confusing with PC firm's demand."],
          },
        },
        {
          id: "cieige-q-u5l3c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A monopolist produces where MR = MC. At that output Q = 30, the demand curve gives price $15 and average cost is $10. (a) Find profit per unit. (b) Find total profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Profit per unit", answer: 5, unit: "$" },
              { label: "Total profit", answer: 150, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Monopoly profit",
                statement: "Profit = (P − AC) × Q at MR = MC output.",
              },
            ],
            steps: [
              {
                reasoning: "Profit per unit = P − AC = 15 − 10 = $5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total profit = $5 × 30 = $150.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $5 (b) $150",
            commonErrors: ["Using MR instead of P for revenue."],
          },
        },
        {
          id: "cieige-q-u5l3c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A monopolist's supernormal profit persists in the long run because of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free entry" },
              { id: "b", text: "Low prices" },
              { id: "c", text: "Many competitors" },
              { id: "d", text: "Barriers to entry" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopoly persistence",
                statement: "Barriers prevent entry eroding profit.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Barriers to entry",
            commonErrors: ["Confusing with PC."],
          },
        },
        {
          id: "cieige-q-u5l3c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how economies of scale can create a 'natural monopoly'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Natural monopoly",
                statement: "One firm has lowest cost via scale economies.",
              },
            ],
            steps: [
              { reasoning: "Scale economies explained.", marks: 1, markCode: "M" },
              {
                reasoning: "One firm supplies at lower cost than two.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When average cost keeps falling over the whole market output, a single firm produces more cheaply than any two firms sharing the market — competition would raise costs, so one firm naturally dominates (e.g. utilities, railways).",
            commonErrors: ["Confusing with any monopoly."],
          },
        },
        {
          id: "cieige-q-u5l3c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A monopolist faces demand P = $20 − 0.4Q with constant MC = AC = $8. Find (a) profit-maximising output, (b) price, and (c) profit per unit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Profit-maximising output", answer: 15, unit: "units" },
              { label: "Price", answer: 14, unit: "$" },
              { label: "Profit per unit", answer: 6, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Monopoly calculation",
                statement: "MR = MC; price from demand curve.",
              },
            ],
            steps: [
              {
                reasoning: "MR = 20 − 0.8Q = 8 → Q = 15.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P = 20 − 0.4 × 15 = $14.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit per unit = P − AC = 14 − 8 = $6.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 15 units (b) $14 (c) $6",
            commonErrors: ["Using P = MC instead of MR = MC."],
          },
        },
        {
          id: "cieige-q-u5l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A market has a single firm but very low barriers to entry — potential entrants could enter quickly and cheaply. Analyse the likely long-run outcome for prices and profits.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contestable monopoly",
                statement: "Low entry barriers discipline the monopolist.",
              },
            ],
            steps: [
              {
                reasoning: "Threat of entry limits pricing power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Supernormal profit cannot persist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Outcome resembles competition.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "With low entry barriers the monopoly is 'contestable' — the threat of entry forces the firm to price near competitive levels and earn only normal profit, so monopoly power is constrained despite a single seller.",
            commonErrors: ["Assuming single seller = monopoly outcome."],
          },
        },
      ],
    },
    {
      id: "cieige-u5l3-c2-imperfect",
      title: "Monopolistic competition and oligopoly",
      skill:
        "Distinguish imperfectly competitive market structures and their outcomes.",
      lesson: {
        sections: [
          {
            heading: "Monopolistic competition",
            body: "**Many firms**, **differentiated products** (branding, quality, location), **some price power**, **free entry/exit**. Each faces downward-sloping demand but earns only **normal profit in long run** (entry erodes supernormal profit). Achieves **productive but not allocative efficiency** (P > MC). Examples: restaurants, clothing, hairdressers.",
          },
          {
            heading: "Oligopoly",
            body: "**Few large firms** dominate (e.g. airlines, telecoms, petrol). Key feature: **interdependence** — each firm's decisions affect rivals, leading to **non-price competition** (advertising, branding) and possible **collusion/cartels**. Can be contestable or concentrated. Long-run outcomes vary — may earn supernormal profit if barriers exist.",
          },
        ],
        keyFormulas: [
          {
            name: "Monopolistic comp",
            statement:
              "Many firms, differentiated, free entry → normal profit LR",
          },
          {
            name: "Oligopoly",
            statement: "Few firms, interdependence, non-price competition",
          },
        ],
        workedExample: {
          problem:
            "Why does monopolistic competition yield only normal profit long-run despite product differentiation?",
          solution:
            "Free entry: supernormal profit attracts entrants, increasing competition until each firm's demand falls to tangent with AC — only normal profit.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Monopolistic competition features:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Single seller" },
              { id: "b", text: "No entry barriers" },
              { id: "c", text: "Many firms with differentiated products" },
              { id: "d", text: "Identical products" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Monopolistic comp",
                statement: "Many + differentiated.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Many firms, differentiated",
            commonErrors: ["Confusing with PC or monopoly."],
          },
        },
        {
          id: "cieige-q-u5l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'interdependence' in oligopoly?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interdependence",
                statement: "Firms' decisions affect rivals.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Consequence noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Each firm's pricing/output decisions affect competitors' sales and profits — they must anticipate rivals' reactions, unlike in other structures.",
            commonErrors: ["Confusing with independence."],
          },
        },
        {
          id: "cieige-q-u5l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does monopolistic competition earn only normal profit in the long run?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free entry",
                statement: "Supernormal profit → entry → eroded to normal.",
              },
            ],
            steps: [
              { reasoning: "Entry mechanism.", marks: 1, markCode: "M" },
              {
                reasoning: "Demand falls to tangent AC.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Result: normal profit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Despite product differentiation giving short-run supernormal profit, free entry attracts rivals; each firm's demand curve shifts left until tangent to AC — only normal profit remains.",
            commonErrors: ["Thinking differentiation preserves profit."],
          },
        },
        {
          id: "cieige-q-u5l3c2-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'non-price competition' in oligopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-price competition",
                statement:
                  "Competing via advertising, quality, service not price.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why it occurs.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Firms compete on advertising, branding, quality and service rather than price — avoids destructive price wars and builds loyalty; e.g. airlines' frequent-flyer programmes.",
            commonErrors: ["Confusing with price competition."],
          },
        },
        {
          id: "cieige-q-u5l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether oligopoly is better or worse for consumers than monopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oligopoly vs monopoly",
                statement: "Competition between few vs single.",
              },
            ],
            steps: [
              {
                reasoning: "Oligopoly has some competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But interdependence may mean collusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contestable markets discipline.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oligopoly generally beats monopoly (some competition, non-price rivalry) but collusion can replicate monopoly outcomes; contestable markets with low entry barriers keep firms disciplined.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'monopolistic competition' allocative efficiency status?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopolistic comp efficiency",
                statement: "P > MC → allocative inefficiency.",
              },
            ],
            steps: [
              { reasoning: "Condition stated.", marks: 1, markCode: "M" },
              { reasoning: "Why it occurs.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Firms have some market power (P > MC), so there's allocative inefficiency/deadweight loss — though smaller than monopoly's because competition is greater.",
            commonErrors: ["Claiming it's efficient like PC."],
          },
        },
        {
          id: "cieige-q-u5l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An oligopoly is dominated by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many small firms" },
              { id: "b", text: "A few large firms" },
              { id: "c", text: "One firm" },
              { id: "d", text: "The government" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oligopoly",
                statement: "Few large firms.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** A few large firms",
            commonErrors: ["Confusing with PC."],
          },
        },
        {
          id: "cieige-q-u5l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of non-price competition and explain its purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-price comp",
                statement: "Advertising/branding builds loyalty.",
              },
            ],
            steps: [
              { reasoning: "Valid example.", marks: 1, markCode: "M" },
              { reasoning: "Purpose explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. smartphone branding — differentiates products, builds loyalty, avoids price wars; protects margins in oligopoly.",
            commonErrors: ["Example without purpose."],
          },
        },
        {
          id: "cieige-q-u5l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a 'cartel' and why is it anti-competitive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cartel",
                statement: "Firms collude to fix prices/output.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why anti-competitive.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "An agreement between oligopolists to fix prices or share markets — eliminates competition, raises prices, creates monopoly-like outcomes; e.g. OPEC oil quotas.",
            commonErrors: ["Thinking cartels are legal competition."],
          },
        },
        {
          id: "cieige-q-u5l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare monopolistic competition and oligopoly on price flexibility and long-run profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure comparison",
                statement:
                  "Monopolistic comp: normal profit LR; oligopoly: variable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monopolistic comp: many firms, free entry → normal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Oligopoly: few firms, barriers → may sustain supernormal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Price flexibility differs.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Monopolistic competition: free entry → normal profit LR, some price flexibility via differentiation. Oligopoly: barriers may sustain supernormal profit, but interdependence makes price changes risky.",
            commonErrors: ["Treating them as identical."],
          },
        },
        {
          id: "cieige-q-u5l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Monopolistic competition is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many firms selling identical products" },
              { id: "b", text: "A few dominant firms" },
              { id: "c", text: "A single seller" },
              {
                id: "d",
                text: "Many firms selling differentiated products",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monopolistic competition",
                statement: "Many firms + differentiated products.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Many firms, differentiated products",
            commonErrors: ["Confusing with perfect competition."],
          },
        },
        {
          id: "cieige-q-u5l3c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A monopolistically competitive firm earns $4 per unit supernormal profit on 50 units in the short run. (a) Find total supernormal profit. (b) State its long-run profit per unit.",
          response: {
            type: "numeric",
            parts: [
              { label: "Short-run total supernormal profit", answer: 200, unit: "$" },
              { label: "Long-run profit per unit", answer: 0, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free entry",
                statement: "Supernormal profit is competed away in LR.",
              },
            ],
            steps: [
              {
                reasoning: "Total supernormal profit = $4 × 50 = $200.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Free entry drives long-run profit to zero (normal profit).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $200 (b) $0",
            commonErrors: ["Thinking supernormal profit persists."],
          },
        },
        {
          id: "cieige-q-u5l3c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Monopolistic competition is allocatively inefficient because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Products are identical" },
              { id: "b", text: "There are too many firms" },
              { id: "c", text: "P > MC" },
              { id: "d", text: "P = MC" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Allocative inefficiency",
                statement: "P > MC → deadweight loss.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** P > MC",
            commonErrors: ["Claiming it is efficient like PC."],
          },
        },
        {
          id: "cieige-q-u5l3c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why oligopolistic firms may choose to collude.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collusion",
                statement: "Joint action to raise prices/restrict output.",
              },
            ],
            steps: [
              { reasoning: "Avoid price wars.", marks: 1, markCode: "M" },
              {
                reasoning: "Share monopoly-like profits.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Instability noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Interdependent firms collude (cartels) to fix prices or share markets — avoiding destructive price competition and earning joint supernormal profit; but agreements are unstable as members gain by cheating.",
            commonErrors: ["Thinking collusion is stable."],
          },
        },
        {
          id: "cieige-q-u5l3c2-15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A monopolistically competitive firm charges P = $10, has MC = $7, AC = $8 and sells 1000 units. (a) Find its supernormal profit. (b) Find the gap between price and marginal cost.",
          response: {
            type: "numeric",
            parts: [
              { label: "Supernormal profit", answer: 2000, unit: "$" },
              { label: "P − MC", answer: 3, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Profit and efficiency gap",
                statement: "Profit = (P − AC) × Q; gap = P − MC.",
              },
            ],
            steps: [
              {
                reasoning: "Supernormal profit = (10 − 8) × 1000 = $2000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P − MC = 10 − 7 = $3 — measures allocative inefficiency.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $2000 (b) $3",
            commonErrors: ["Using MC instead of AC for profit."],
          },
        },
        {
          id: "cieige-q-u5l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether product differentiation in monopolistic competition benefits consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Differentiation",
                statement: "Variety vs higher prices/inefficiency.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: variety, choice, quality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: P > MC, excess capacity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Innovation incentive from differentiation.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Differentiation gives consumers variety and can drive innovation, but firms charge P > MC creating deadweight loss and often operate with excess capacity — net benefit depends on how much consumers value variety versus lower prices.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
