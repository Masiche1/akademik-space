import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cieale-u5-lesson-5-1",
  code: "5-1",
  title: "Game Theory and Strategic Behaviour",
  goal: "I CAN analyse oligopoly behaviour using game theory concepts: dominant strategies, Nash equilibrium, collusion and contestable markets.",
  standards: [
    "Cambridge A Level Economics 9708",
    "Unit 5: advanced microeconomics",
  ],
  vocabulary: [
    {
      term: "Game theory",
      definition:
        "Study of strategic interaction between rational decision-makers.",
    },
    {
      term: "Dominant strategy",
      definition: "Best strategy regardless of rivals' actions.",
    },
    {
      term: "Nash equilibrium",
      definition:
        "Outcome where no player can gain by unilaterally changing strategy.",
    },
    {
      term: "Prisoner's dilemma",
      definition:
        "Game where rational individual choices produce worse collective outcome.",
    },
    {
      term: "Contestable market",
      definition: "Market with free entry/exit disciplines even monopolists.",
    },
    {
      term: "Kinked demand curve",
      definition: "Oligopoly demand model explaining price rigidity.",
    },
  ],
  concepts: [
    {
      id: "cieale-u5l1-c1-gametheory",
      title: "Game theory basics",
      skill:
        "Apply dominant strategies, Nash equilibrium and prisoner's dilemma to oligopoly.",
      lesson: {
        sections: [
          {
            heading: "Strategic games",
            body: "In oligopoly, each firm's optimal action depends on rivals' actions — **strategic interdependence**. A **dominant strategy** is best regardless of what rivals do. **Nash equilibrium**: each player's strategy is best response to others' — no one gains by deviating alone. **Prisoner's dilemma**: individually rational choices (defect) produce collectively worse outcome (both defect).",
          },
          {
            heading: "Collusion and tacit agreement",
            body: "Firms may **collude** (explicit cartel — often illegal) or reach **tacit collusion** (follow price leader without agreement). Game theory explains why collusion is unstable: each firm gains by secretly undercutting — the prisoner's dilemma of oligopoly.",
          },
        ],
        keyFormulas: [
          {
            name: "Nash equilibrium",
            statement: "No player gains by unilateral deviation",
          },
          { name: "Dominant strategy", statement: "Best regardless of rivals" },
          {
            name: "Prisoner's dilemma",
            statement: "Individual rationality → collective loss",
          },
        ],
        workedExample: {
          problem:
            "Two firms choose High/Low price. Both High → profit 10 each; both Low → 4 each; if one Low while other High → Low gets 12, High gets 2. Find Nash equilibrium.",
          solution:
            "Low is dominant strategy for each (12>10 if rival High, 4>2? wait — check: if rival High, Low gets 12 > High's 10 → deviate; if rival Low, High gets 2 < Low's 4... equilibrium: both Low = (4,4). Both would prefer (10,10) but can't sustain it — prisoner's dilemma.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Nash equilibrium occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Payoffs are equal" },
              { id: "b", text: "One player dominates" },
              { id: "c", text: "All players cooperate" },
              {
                id: "d",
                text: "No player can gain by unilaterally changing strategy",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nash equilibrium",
                statement: "No unilateral gain.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** No unilateral gain",
            commonErrors: ["Confusing with cooperation."],
          },
        },
        {
          id: "cieale-q-u5l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'dominant strategy'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dominant strategy",
                statement: "Best regardless of rivals.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A strategy that yields the best outcome for a player no matter what rivals do — e.g. in prisoner's dilemma, 'defect' is dominant.",
            commonErrors: ["Confusing with Nash equilibrium."],
          },
        },
        {
          id: "cieale-q-u5l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the prisoner's dilemma and its relevance to oligopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prisoner's dilemma",
                statement: "Individual rationality → collective loss.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Oligopoly application.", marks: 1, markCode: "M" },
              { reasoning: "Collusion instability.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Each firm benefits by undercutting a cartel, so both undercut — individually rational but collectively worse (price war); explains why collusion is unstable without enforcement.",
            commonErrors: ["Missing oligopoly link."],
          },
        },
        {
          id: "cieale-q-u5l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Two firms: if both charge high, profit $10m each; if one cuts, cutter gets $12m, other $2m; if both cut, $4m each. Find the Nash equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Nash equilibrium",
                statement: "Best response analysis.",
              },
            ],
            steps: [
              {
                reasoning: "If rival High: Low gives 12>10 → deviate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If rival Low: High gives 2<4 → also prefer Low? check.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both Low = Nash (4,4).", marks: 1, markCode: "M" },
              {
                reasoning: "Note prisoner's dilemma.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Nash equilibrium: both charge Low (4,4) — each prefers to undercut; both would prefer (10,10) but can't sustain it.",
            commonErrors: ["Choosing cooperative outcome."],
          },
        },
        {
          id: "cieale-q-u5l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why tacit collusion may be sustainable in some oligopolies but not others.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collusion stability",
                statement: "Conditions for tacit agreement.",
              },
            ],
            steps: [
              { reasoning: "Stability factors.", marks: 1, markCode: "M" },
              { reasoning: "Few firms helps.", marks: 1, markCode: "M" },
              { reasoning: "Punishment/reputation.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tacit collusion sustainable with few firms, symmetric costs, frequent interaction (reputation/punishment) and high entry barriers — unstable with many firms or asymmetric costs.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'contestable market'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Contestable market",
                statement: "Free entry/exit disciplines monopolists.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Key condition.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A market where entry/exit is costless and instant — even a monopolist is disciplined by threat of entry, behaving competitively.",
            commonErrors: ["Confusing with monopoly."],
          },
        },
        {
          id: "cieale-q-u5l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In game theory, 'strategic interdependence' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prices are fixed" },
              { id: "b", text: "Firms act independently" },
              {
                id: "c",
                text: "Each firm's best action depends on rivals' actions",
              },
              { id: "d", text: "Government controls firms" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Strategic interdependence",
                statement: "Rivals' actions matter.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Depends on rivals",
            commonErrors: ["Opposite meaning."],
          },
        },
        {
          id: "cieale-q-u5l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'kinked demand curve' model of oligopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Kinked demand",
                statement: "Price rigidity from asymmetric rival response.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Kink at current price.", marks: 1, markCode: "M" },
              { reasoning: "Result: price rigidity.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If a firm raises price, rivals don't follow (demand elastic); if it cuts, rivals match (demand inelastic) — creates kinked demand, making MR discontinuous → price rigidity.",
            commonErrors: ["No kink explained."],
          },
        },
        {
          id: "cieale-q-u5l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might firms prefer non-price competition in oligopoly?",
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
              { reasoning: "Price war risk.", marks: 1, markCode: "M" },
              { reasoning: "Alternatives.", marks: 1, markCode: "M" },
              { reasoning: "Game theory link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Price cuts trigger retaliation (prisoner's dilemma) — non-price competition (advertising, quality, service) avoids destructive price wars while maintaining market share.",
            commonErrors: ["Only citing advertising."],
          },
        },
        {
          id: "cieale-q-u5l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate game theory's usefulness for analysing real-world oligopolies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Game theory limits",
                statement: "Simplified but insightful.",
              },
            ],
            steps: [
              {
                reasoning: "Strengths: explains interdependence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Limitations: assumes rationality, complete info.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Real-world complexity.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Game theory illuminates strategic interdependence and collusion instability but simplifies — real firms have bounded rationality, incomplete information and dynamic strategies.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the prisoner's dilemma, the Nash equilibrium outcome is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One cooperates, one defects" },
              { id: "b", text: "No trade occurs" },
              { id: "c", text: "Both players defect" },
              { id: "d", text: "Both players cooperate" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prisoner's dilemma",
                statement: "Individual rationality → collective loss.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Both players defect",
            commonErrors: ["Confusing equilibrium with cooperative optimum."],
          },
        },
        {
          id: "cieale-q-u5l1c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'tacit collusion' and how does it differ from an explicit cartel?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tacit collusion",
                statement: "Coordination without explicit agreement.",
              },
            ],
            steps: [
              {
                reasoning: "Tacit collusion: firms follow a price leader without formal agreement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explicit cartel: formal agreement on price/output — usually illegal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Tacit collusion coordinates behaviour without an agreement (e.g. price leadership); a cartel is an explicit agreement, often illegal.",
            commonErrors: ["Treating tacit collusion as legal cartel."],
          },
        },
        {
          id: "cieale-q-u5l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Collusion between oligopolists is unstable mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All firms have identical costs" },
              { id: "b", text: "Firms cannot communicate" },
              { id: "c", text: "Demand is perfectly elastic" },
              {
                id: "d",
                text: "Each firm can gain by secretly undercutting the agreed price",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collusion instability",
                statement: "Secret undercutting incentive.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Secret undercutting incentive",
            commonErrors: ["Missing incentive to cheat."],
          },
        },
        {
          id: "cieale-q-u5l1c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a dominant strategy may not lead to the best collective outcome for firms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dominant strategy limits",
                statement: "Individual best ≠ collective best.",
              },
            ],
            steps: [
              {
                reasoning: "A dominant strategy is optimal for each firm regardless of rivals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When all firms choose it, the collective outcome can be worse — prisoner's dilemma logic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example: both cutting price lowers profit below the collusive level.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Dominant strategies are individually rational but can produce a collectively worse equilibrium (e.g. price war).",
            commonErrors: ["Assuming dominant strategy is always efficient."],
          },
        },
        {
          id: "cieale-q-u5l1c1-15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If neither firm can improve its payoff by changing strategy, given what the rival does, the outcome is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Nash equilibrium" },
              { id: "b", text: "A dominant strategy" },
              { id: "c", text: "Allocative efficiency" },
              { id: "d", text: "Perfect competition" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nash equilibrium",
                statement: "No unilateral gain.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Nash equilibrium",
            commonErrors: ["Confusing with dominant strategy."],
          },
        },
        {
          id: "cieale-q-u5l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how repeated interaction between firms can make collusion more sustainable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Repeated games",
                statement: "Future interaction enables punishment.",
              },
            ],
            steps: [
              { reasoning: "Repeated interaction enables punishment for cheating.", marks: 1, markCode: "M" },
              { reasoning: "Trigger strategies (e.g. grim trigger) deter defection.", marks: 1, markCode: "M" },
              { reasoning: "Conditions: few firms, symmetric information, frequent contact.", marks: 1, markCode: "M" },
              { reasoning: "Still unstable with many firms or asymmetric costs.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Repeated interaction sustains collusion via reputation and punishment strategies, but only under favourable conditions (few firms, symmetry, frequent contact).",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieale-u5l1-c2-labour",
      title: "Labour economics: monopsony and wage determination",
      skill:
        "Analyse labour markets, MRP, monopsony power and minimum wage effects.",
      lesson: {
        sections: [
          {
            heading: "Labour market theory",
            body: "Firms hire where **MRP = wage rate**. Labour demand slopes down (diminishing MRP). Labour supply slopes up (higher wage attracts more workers). Equilibrium wage where D=S. **Monopsony** — single employer faces upward-sloping supply, sets wage below competitive level by hiring where MRP = MCL (marginal cost of labour).",
          },
          {
            heading: "Minimum wage and unions",
            body: "**Minimum wage** above equilibrium creates labour surplus (unemployment) — but monopsony counter-argument: can raise wages AND employment by moving toward competitive level. **Trade unions** shift labour supply left, raising wages but possibly reducing employment.",
          },
        ],
        keyFormulas: [
          { name: "MRP", statement: "Marginal product × MR" },
          {
            name: "Monopsony",
            statement: "Hires where MRP = MCL < competitive wage",
          },
          {
            name: "Minimum wage",
            statement: "Above eq → unemployment; monopsony may differ",
          },
        ],
        workedExample: {
          problem: "Why does a monopsonist pay below competitive wage?",
          solution:
            "It faces upward-sloping labour supply — hiring more raises wage on ALL workers, so MCL > wage. It equates MRP = MCL, paying less and hiring less than competitive outcome.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A monopsonist is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single seller" },
              { id: "b", text: "A price taker" },
              { id: "c", text: "A single buyer of labour" },
              { id: "d", text: "A competitive firm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monopsony",
                statement: "Single labour buyer.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Single labour buyer",
            commonErrors: ["Confusing with monopoly."],
          },
        },
        {
          id: "cieale-q-u5l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'marginal cost of labour' (MCL)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MCL",
                statement: "Extra cost of hiring one more worker.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Why > wage for monopsony.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The extra cost of employing one more worker — for monopsonist, includes raising wage on ALL workers, so MCL > wage rate.",
            commonErrors: ["Confusing with wage."],
          },
        },
        {
          id: "cieale-q-u5l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a monopsonist hires fewer workers and pays less than competitive equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopsony outcome",
                statement: "MRP=MCL → lower wage, lower employment.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Compare to competitive.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Monopsonist equates MRP = MCL (not wage); since MCL > wage, it hires where MRP lower and pays less than competitive D=S — fewer workers, lower wage.",
            commonErrors: ["Thinking it pays more."],
          },
        },
        {
          id: "cieale-q-u5l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Evaluate the minimum wage in a monopsony labour market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minimum wage monopsony",
                statement: "Can raise wage AND employment.",
              },
            ],
            steps: [
              {
                reasoning: "Competitive case: unemployment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Monopsony case: may help.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "In competitive markets minimum wage above equilibrium causes unemployment; in monopsony it can raise wages AND employment by moving toward competitive level — context matters.",
            commonErrors: ["One-size-fits-all."],
          },
        },
        {
          id: "cieale-q-u5l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how trade unions affect wages and employment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Union effects",
                statement: "Wage↑, employment ambiguous.",
              },
            ],
            steps: [
              { reasoning: "Wage mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Employment effect.", marks: 1, markCode: "M" },
              { reasoning: "Countervailing factors.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unions shift labour supply left → higher wages; employment effect ambiguous — may fall (higher wage cost) or rise (productivity gains, monopsony countervailing power).",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What determines labour demand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Labour demand",
                statement: "MRP and wage rate.",
              },
            ],
            steps: [
              { reasoning: "Demand determinants.", marks: 1, markCode: "M" },
              { reasoning: "Slope reason.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Derived demand: product demand, productivity (MRP), technology, and wage rate — firms hire where MRP = wage.",
            commonErrors: ["Thinking independent."],
          },
        },
        {
          id: "cieale-q-u5l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A firm hires workers up to where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MRP = 0" },
              { id: "b", text: "MRP = wage rate" },
              { id: "c", text: "Wage = 0" },
              { id: "d", text: "AP = MP" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Hiring rule", statement: "MRP = wage." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** MRP = wage",
            commonErrors: ["Wrong condition."],
          },
        },
        {
          id: "cieale-q-u5l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'derived demand' for labour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Derived demand",
                statement: "Depends on product demand.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Labour demand derives from demand for the product — if product demand falls, firms need fewer workers → labour demand falls; not independent of product market.",
            commonErrors: ["Thinking it's exogenous."],
          },
        },
        {
          id: "cieale-q-u5l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does technological change affect labour demand?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology and labour",
                statement: "Substitute or complement.",
              },
            ],
            steps: [
              { reasoning: "Two effects.", marks: 1, markCode: "M" },
              { reasoning: "Substitution case.", marks: 1, markCode: "M" },
              { reasoning: "Complement case.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ambiguous: automation substitutes for routine labour (demand↓) but complements skilled labour (demand↑) — net effect depends on skill level and task type.",
            commonErrors: ["One-directional."],
          },
        },
        {
          id: "cieale-q-u5l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether minimum wage laws help or harm workers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minimum wage debate",
                statement: "Empirical context-dependent.",
              },
            ],
            steps: [
              { reasoning: "Benefits: higher wages.", marks: 1, markCode: "M" },
              { reasoning: "Costs: unemployment.", marks: 1, markCode: "M" },
              { reasoning: "Monopsony caveat.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Effects depend on labour market structure: helps in monopsony/low-wage contexts, harms via unemployment in competitive markets — empirical evidence is mixed and context-dependent.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The labour supply curve facing a competitive firm slopes upward because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Workers become less productive" },
              {
                id: "b",
                text: "A higher wage attracts more workers to that firm",
              },
              { id: "c", text: "The firm has monopsony power" },
              { id: "d", text: "Product demand automatically rises" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Firm labour supply",
                statement: "Higher wage attracts more workers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Higher wage attracts workers",
            commonErrors: ["Confusing with market supply."],
          },
        },
        {
          id: "cieale-q-u5l1c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'marginal revenue product' (MRP)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MRP",
                statement: "Extra revenue from one more worker.",
              },
            ],
            steps: [
              {
                reasoning: "Definition correct.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Formula.", marks: 1, markCode: "M" },
            ],
            finalAnswer:
              "MRP is the additional revenue generated by employing one more worker — MRP = MP × MR.",
            commonErrors: ["Confusing with AP or MP."],
          },
        },
        {
          id: "cieale-q-u5l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A profit-maximising monopsonist hires labour up to where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "wage = MCL" },
              { id: "b", text: "MRP = MCL" },
              { id: "c", text: "MRP = wage rate" },
              { id: "d", text: "MP = AP" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Monopsony rule",
                statement: "MRP = MCL.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** MRP = MCL",
            commonErrors: ["Using competitive rule."],
          },
        },
        {
          id: "cieale-q-u5l1c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a fall in demand for a product affects the derived demand for labour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Derived demand chain",
                statement: "Product demand → output → labour demand.",
              },
            ],
            steps: [
              {
                reasoning: "Product demand falls → firms cut output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fewer workers needed → labour demand shifts left.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wages may fall if labour supply unchanged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Weaker product demand reduces output and MRP → labour demand falls → wages and employment may decline.",
            commonErrors: ["Ignoring derived demand chain."],
          },
        },
        {
          id: "cieale-q-u5l1c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In a monopsony labour market, a minimum wage set above the monopsony wage but below the competitive wage is most likely to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eliminate all unemployment" },
              {
                id: "b",
                text: "Raise both the wage and employment",
              },
              { id: "c", text: "Reduce employment" },
              { id: "d", text: "Have no effect on employment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopsony minimum wage",
                statement: "Can raise wage AND employment.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Raise wage and employment",
            commonErrors: ["Applying competitive-market logic."],
          },
        },
        {
          id: "cieale-q-u5l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the policies available to governments to correct exploitative monopsony power in labour markets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopsony policy",
                statement: "Legislation vs market solutions.",
              },
            ],
            steps: [
              {
                reasoning: "Minimum wage legislation can raise wages toward competitive level.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Support for collective bargaining/unions.", marks: 1, markCode: "M" },
              { reasoning: "Competition policy for labour markets.", marks: 1, markCode: "A" },
              { reasoning: "Limits: enforcement, informal markets, job losses.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Minimum wages, union rights and labour market competition policy can counter monopsony power, but effectiveness varies with enforcement and market structure.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
