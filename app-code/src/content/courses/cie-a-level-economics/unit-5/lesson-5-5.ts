import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "cieale-u5-lesson-5-5",
  code: "5-5",
  title: "Long-Run Costs, Economies of Scale and Contestability",
  goal: "I CAN analyse long-run cost curves, economies/diseconomies of scale and their competitive implications.",
  standards: [
    "Cambridge A Level Economics 9708",
    "Unit 5: costs and market structures",
  ],
  vocabulary: [
    {
      term: "Long-run average cost (LRAC)",
      definition: "Lowest possible average cost for each output level.",
    },
    {
      term: "Economies of scale",
      definition: "Falling LRAC as output increases.",
    },
    {
      term: "Diseconomies of scale",
      definition: "Rising LRAC as output increases.",
    },
    {
      term: "Minimum efficient scale (MES)",
      definition: "Lowest output at which LRAC is minimised.",
    },
    {
      term: "Natural monopoly",
      definition: "One firm can supply market at lowest LRAC.",
    },
    {
      term: "LRAC envelope",
      definition: "Lower boundary of all short-run AC curves.",
    },
  ],
  concepts: [
    {
      id: "cieale-u5l5-c1-lrac",
      title: "Long-run average cost curve",
      skill: "Explain LRAC shape, envelope relationship and MES.",
      lesson: {
        sections: [
          {
            heading: "LRAC and short-run curves",
            body: "In the long run all factors are variable — firm chooses optimal plant size for each output. **LRAC** = lower envelope of all **short-run average cost (SRAC)** curves — each SRAC represents one fixed plant size. LRAC typically U-shaped or L-shaped (economies then diseconomies).",
          },
          {
            heading: "Economies and diseconomies",
            body: "**Economies of scale** (LRAC falls): internal (specialisation, bulk buying, indivisible tech) and external (skilled labour pool, supplier networks, infrastructure). **Diseconomies** (LRAC rises): communication breakdown, management complexity, worker alienation. **MES** = output where LRAC minimised.",
          },
        ],
        keyFormulas: [
          { name: "LRAC", statement: "Envelope of SRAC curves" },
          { name: "Economies", statement: "Falling LRAC with output" },
          { name: "MES", statement: "Min LRAC output level" },
        ],
        workedExample: {
          problem: "Why is LRAC the 'envelope' of SRAC curves?",
          solution:
            "For each output, firm picks the plant size (SRAC) giving lowest cost — LRAC traces the lowest points across all SRACs, forming the lower boundary.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l5c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "LRAC represents:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Lowest average cost for each output in long run",
              },
              { id: "b", text: "Fixed cost curve" },
              { id: "c", text: "Average of all SRACs" },
              { id: "d", text: "Marginal cost" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LRAC",
                statement: "Minimum cost per output.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Minimum LRAC",
            commonErrors: ["Confusing with SRAC."],
          },
        },
        {
          id: "cieale-q-u5l5c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'minimum efficient scale' (MES)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MES",
                statement: "Lowest output at min LRAC.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The lowest output level at which LRAC is minimised — determines how many firms market can support efficiently.",
            commonErrors: ["Confusing with capacity."],
          },
        },
        {
          id: "cieale-q-u5l5c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two internal and two external economies of scale.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Scale economies",
                statement: "Internal vs external.",
              },
            ],
            steps: [
              { reasoning: "Two internal.", marks: 1, markCode: "M" },
              { reasoning: "Two external.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Internal: specialisation, bulk-buying discounts, indivisible technology. External: skilled labour pool, supplier networks — both lower LRAC.",
            commonErrors: ["Only one type."],
          },
        },
        {
          id: "cieale-q-u5l5c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why LRAC is the lower envelope of SRAC curves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Envelope",
                statement: "Optimal plant per output.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "SRAC = plant size.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "M" },
              { reasoning: "Diagram understanding.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Each SRAC represents one fixed plant size; for any output, firm chooses the plant giving lowest AC — LRAC traces these minimum points, forming lower boundary of all SRACs.",
            commonErrors: ["Thinking LRAC is average of SRACs."],
          },
        },
        {
          id: "cieale-q-u5l5c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how economies of scale affect market structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Scale and structure",
                statement: "MES determines firm numbers.",
              },
            ],
            steps: [
              { reasoning: "Large MES → few firms.", marks: 1, markCode: "M" },
              { reasoning: "Small MES → many firms.", marks: 1, markCode: "M" },
              { reasoning: "Natural monopoly case.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Large economies of scale → MES high relative to market → natural monopoly or oligopoly; small scale economies → many firms, perfect competition viable.",
            commonErrors: ["One-directional."],
          },
        },
        {
          id: "cieale-q-u5l5c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'natural monopoly'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural monopoly",
                statement: "One firm lowest LRAC.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Market where economies of scale so large that one firm supplies entire market at lowest LRAC — e.g. utilities, water, rail.",
            commonErrors: ["Confusing with any monopoly."],
          },
        },
        {
          id: "cieale-q-u5l5c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Diseconomies of scale cause LRAC to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stay constant" },
              { id: "b", text: "Disappear" },
              { id: "c", text: "Fall" },
              { id: "d", text: "Rise with output" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Diseconomies", statement: "Rising LRAC." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Rise",
            commonErrors: ["Reversing."],
          },
        },
        {
          id: "cieale-q-u5l5c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two causes of diseconomies of scale.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Diseconomies",
                statement: "Communication, management.",
              },
            ],
            steps: [
              { reasoning: "Two valid causes.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. communication breakdown in large organisations and management complexity/loss of control — coordination costs exceed scale benefits.",
            commonErrors: ["Causes of economies instead."],
          },
        },
        {
          id: "cieale-q-u5l5c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a firm not produce at MES?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MES deviation",
                statement: "Demand limits, strategy, capacity.",
              },
            ],
            steps: [
              { reasoning: "Reasons.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Market demand may be smaller than MES (can't achieve scale), or firm may choose differentiation/niche strategy over cost-minimisation.",
            commonErrors: ["MES always optimal."],
          },
        },
        {
          id: "cieale-q-u5l5c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether economies of scale justify natural monopolies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Natural monopoly",
                statement: "Efficiency vs monopoly power.",
              },
            ],
            steps: [
              { reasoning: "Efficiency case.", marks: 1, markCode: "M" },
              { reasoning: "Monopoly power risk.", marks: 1, markCode: "M" },
              { reasoning: "Regulation need.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Scale economies make single-firm supply most efficient, but unregulated monopoly exploits power — natural monopoly needs regulation to capture efficiency without monopoly pricing.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l5c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The long-run average cost (LRAC) curve is derived by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Plotting the lowest SRAC achievable at each output level",
              },
              { id: "b", text: "Observing market price" },
              { id: "c", text: "Averaging all SRAC curves vertically" },
              { id: "d", text: "Measuring short-run marginal cost" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LRAC",
                statement: "Lower envelope of SRACs.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Lowest SRAC at each output",
            commonErrors: ["Confusing with SRAC."],
          },
        },
        {
          id: "cieale-q-u5l5c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between internal and external economies of scale.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal vs external",
                statement: "Within firm vs industry-wide.",
              },
            ],
            steps: [
              {
                reasoning: "Internal: within the firm (bulk buying, specialisation).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "External: industry-wide (labour pool, infrastructure).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Internal economies arise within a single firm; external economies arise for all firms in an industry/location as it expands.",
            commonErrors: ["Conflating the two."],
          },
        },
        {
          id: "cieale-q-u5l5c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'natural monopoly' arises when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There are many small firms" },
              {
                id: "b",
                text: "LRAC keeps falling over the whole market demand so one firm supplies at lowest cost",
              },
              { id: "c", text: "The government grants a licence" },
              { id: "d", text: "Demand is perfectly elastic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural monopoly",
                statement: "Scale economies over whole market.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Falling LRAC over market demand",
            commonErrors: ["Confusing with legal monopoly."],
          },
        },
        {
          id: "cieale-q-u5l5c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how external economies of scale can lead to the agglomeration of an industry in one location.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Agglomeration",
                statement: "External economies attract firms.",
              },
            ],
            steps: [
              {
                reasoning: "External economies (labour pool, suppliers, infrastructure) lower costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lower costs attract more firms → reinforcing cluster.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examples: Silicon Valley, financial districts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "External economies lower costs for all local firms → attract more firms → self-reinforcing agglomeration (e.g. Silicon Valley).",
            commonErrors: ["No mechanism."],
          },
        },
        {
          id: "cieale-q-u5l5c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Diseconomies of scale are most likely to arise from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Access to cheaper finance" },
              {
                id: "b",
                text: "Breakdown in communication and managerial control in very large organisations",
              },
              { id: "c", text: "Specialisation of labour" },
              { id: "d", text: "Bulk-buying discounts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diseconomies",
                statement: "Management/communication breakdown.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Communication/management breakdown",
            commonErrors: ["Confusing with economies."],
          },
        },
        {
          id: "cieale-q-u5l5c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that the largest firms are always the most efficient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Size vs efficiency",
                statement: "Scale economies vs diseconomies.",
              },
            ],
            steps: [
              {
                reasoning: "Economies of scale can lower LRAC for larger firms.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Beyond MES, diseconomies may raise costs.", marks: 1, markCode: "M" },
              {
                reasoning: "X-inefficiency: large firms may lack competitive pressure.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Contestability and innovation arguments.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Size alone doesn't guarantee efficiency — economies of scale help up to MES but diseconomies and X-inefficiency can dominate in very large firms.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieale-u5l5-c2-structure",
      title: "Market structure comparison and policy",
      skill:
        "Compare market structures' efficiency and evaluate competition policy.",
      lesson: {
        sections: [
          {
            heading: "Market structure spectrum",
            body: "**Perfect competition** → efficient, normal profit, many firms. **Monopolistic competition** → differentiated, some inefficiency, normal profit LR. **Oligopoly** → interdependent, possible supernormal, non-price comp. **Monopoly** → max inefficiency, supernormal sustained by barriers. Contestable markets blur boundaries.",
          },
          {
            heading: "Competition policy",
            body: "Policy aims: prevent anti-competitive agreements (cartels), abuse of dominance, harmful mergers; reduce entry barriers. Trade-off: competition vs efficiency (some concentration needed for scale). Regulators: competition authorities, sector regulators.",
          },
        ],
        keyFormulas: [
          {
            name: "Efficiency ranking",
            statement: "PC > monopolistic comp > oligopoly > monopoly",
          },
          {
            name: "Policy tools",
            statement: "Anti-trust, merger control, deregulation",
          },
        ],
        workedExample: {
          problem: "Why regulate natural monopolies?",
          solution:
            "Scale economies justify single firm but monopoly power leads to high prices/deadweight loss — regulation (price caps, access rules) captures efficiency while preventing exploitation.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l5c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which market structure is most efficient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monopolistic competition" },
              { id: "b", text: "Perfect competition" },
              { id: "c", text: "Oligopoly" },
              { id: "d", text: "Monopoly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Efficiency",
                statement: "PC most efficient.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Perfect competition",
            commonErrors: ["Wrong ranking."],
          },
        },
        {
          id: "cieale-q-u5l5c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'anti-trust' (competition) law?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anti-trust",
                statement: "Prevents anti-competitive behaviour.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Laws prohibiting cartels, abuse of dominance, harmful mergers — e.g. EU competition law, US antitrust — to protect competition and consumers.",
            commonErrors: ["Confusing with regulation generally."],
          },
        },
        {
          id: "cieale-q-u5l5c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rank market structures by allocative efficiency and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency ranking",
                statement: "PC best, monopoly worst.",
              },
            ],
            steps: [
              { reasoning: "Ranking correct.", marks: 1, markCode: "M" },
              { reasoning: "Reason: P vs MC.", marks: 1, markCode: "M" },
              { reasoning: "Nuance: contestability.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "PC (P=MC) > monopolistic comp (small DWL) > oligopoly > monopoly (largest DWL) — closer P to MC means more efficient; contestable markets may behave efficiently despite concentration.",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "cieale-q-u5l5c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "When might a merger improve efficiency despite reducing competition?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merger efficiency",
                statement: "Scale economies vs market power.",
              },
            ],
            steps: [
              { reasoning: "Efficiency case.", marks: 1, markCode: "M" },
              { reasoning: "Competition loss.", marks: 1, markCode: "M" },
              { reasoning: "Assessment test.", marks: 1, markCode: "M" },
              { reasoning: "Balanced view.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If merged firm gains scale economies lowering costs below competitive level, consumers may benefit despite less competition — regulators weigh efficiency gains vs market power.",
            commonErrors: ["All mergers bad."],
          },
        },
        {
          id: "cieale-q-u5l5c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether competition policy should prioritise consumer welfare or market structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Competition policy",
                statement: "Welfare vs structure.",
              },
            ],
            steps: [
              { reasoning: "Welfare approach.", marks: 1, markCode: "M" },
              { reasoning: "Structure approach.", marks: 1, markCode: "M" },
              { reasoning: "Trade-offs.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Consumer welfare standard is more flexible (allows efficient concentration) but harder to measure; structural approach (market share thresholds) is simpler but may block beneficial mergers — most regimes combine both.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l5c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'cartel'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cartel",
                statement: "Firms colluding on price/output.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Why illegal.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Agreement between firms to fix prices, limit output or share markets — eliminates competition, raises prices; illegal under anti-trust law.",
            commonErrors: ["Thinking it's legal."],
          },
        },
        {
          id: "cieale-q-u5l5c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Predatory pricing is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pricing below cost to drive out competitors" },
              { id: "b", text: "Dumping" },
              { id: "c", text: "Competitive pricing" },
              { id: "d", text: "Monopoly pricing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Predatory pricing",
                statement: "Below-cost to exclude.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Below-cost exclusion",
            commonErrors: ["Confusing with dumping."],
          },
        },
        {
          id: "cieale-q-u5l5c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might oligopolies engage in non-price competition?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-price comp",
                statement: "Avoids price wars.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Game theory link.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Price cuts trigger retaliation (prisoner's dilemma) — non-price competition (advertising, quality, service) avoids destructive price wars while maintaining share.",
            commonErrors: ["Only advertising."],
          },
        },
        {
          id: "cieale-q-u5l5c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does contestability affect competition policy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Contestability",
                statement: "Focus on barriers not numbers.",
              },
            ],
            steps: [
              { reasoning: "Implication.", marks: 1, markCode: "M" },
              { reasoning: "Policy focus.", marks: 1, markCode: "M" },
              { reasoning: "Limit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If market contestable, even concentrated markets behave competitively — policy should target entry barriers rather than firm numbers; but real markets rarely fully contestable.",
            commonErrors: ["Counting firms only."],
          },
        },
        {
          id: "cieale-q-u5l5c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should competition authorities break up all monopolies? Evaluate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Break-up debate",
                statement: "Efficiency vs market power.",
              },
            ],
            steps: [
              { reasoning: "Case for.", marks: 1, markCode: "M" },
              { reasoning: "Case against.", marks: 1, markCode: "M" },
              {
                reasoning: "Natural monopoly exception.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Not always — natural monopolies may be more efficient as single firms; breaking up without addressing barriers or scale may reduce efficiency; case-by-case assessment needed.",
            commonErrors: ["One-size-fits-all."],
          },
        },
        {
          id: "cieale-q-u5l5c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Perfect competition is best described as a market with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single buyer" },
              { id: "b", text: "One dominant firm" },
              {
                id: "c",
                text: "Many small firms, a homogeneous product and free entry and exit",
              },
              { id: "d", text: "Government-set prices" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perfect competition",
                statement: "Many firms, homogeneous product, free entry.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Many firms, homogeneous product, free entry",
            commonErrors: ["Confusing with monopoly."],
          },
        },
        {
          id: "cieale-q-u5l5c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'barrier to entry'? Give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Barrier to entry",
                statement: "Obstacle preventing new firms.",
              },
            ],
            steps: [
              {
                reasoning: "Definition correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Examples: economies of scale, patents, brand loyalty.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "An obstacle that prevents or deters new firms entering a market — e.g. economies of scale, patents, strong brand loyalty, high sunk costs.",
            commonErrors: ["Vague examples."],
          },
        },
        {
          id: "cieale-q-u5l5c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cartel is likely to be illegal under competition law because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduces firms' profits" },
              {
                id: "b",
                text: "Involves firms agreeing to restrict output or fix prices",
              },
              { id: "c", text: "Lowers prices for consumers" },
              { id: "d", text: "Increases competition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cartel",
                statement: "Agreement to restrict competition.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Restricts competition",
            commonErrors: ["Thinking cartels help consumers."],
          },
        },
        {
          id: "cieale-q-u5l5c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how monopoly power leads to allocative inefficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopoly inefficiency",
                statement: "P > MC → underproduction.",
              },
            ],
            steps: [
              {
                reasoning: "Monopolist restricts output to raise price.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit-max output has P > MC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deadweight loss — resources underallocated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Monopolist sets P > MC and restricts output → deadweight loss and allocative inefficiency.",
            commonErrors: ["No P > MC link."],
          },
        },
        {
          id: "cieale-q-u5l5c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A merger is most likely to be blocked by competition authorities when it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lowers production costs" },
              {
                id: "b",
                text: "Creates or strengthens a dominant position, reducing competition",
              },
              { id: "c", text: "Benefits consumers through lower prices" },
              { id: "d", text: "Involves only small firms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merger control",
                statement: "Block anti-competitive mergers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Creates dominant position",
            commonErrors: ["Blocking efficient mergers."],
          },
        },
        {
          id: "cieale-q-u5l5c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the costs and benefits to an economy of allowing a firm to hold a dominant market position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dominance trade-off",
                statement: "Scale benefits vs market power.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: economies of scale, R&D capacity, global competitiveness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: higher prices, reduced choice, X-inefficiency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contestability may discipline the firm.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Regulation/remedies may be needed.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Dominance brings scale and innovation benefits but risks monopoly pricing — outcome depends on contestability and regulation.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
