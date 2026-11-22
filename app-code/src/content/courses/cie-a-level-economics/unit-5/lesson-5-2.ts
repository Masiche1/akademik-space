import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "cieale-u5-lesson-5-2",
  code: "5-2",
  title: "Information Economics and Welfare",
  goal: "I CAN analyse asymmetric information, moral hazard, adverse selection and welfare economics.",
  standards: [
    "Cambridge A Level Economics 9708",
    "Unit 5: advanced microeconomics",
  ],
  vocabulary: [
    {
      term: "Asymmetric information",
      definition: "One party knows more than the other in a transaction.",
    },
    {
      term: "Adverse selection",
      definition: "Hidden information before transaction → bad outcomes.",
    },
    {
      term: "Moral hazard",
      definition: "Hidden action after transaction → risk-taking changes.",
    },
    {
      term: "Signalling",
      definition: "One party reveals private info via credible action.",
    },
    {
      term: "Screening",
      definition: "One party elicits info via contract design.",
    },
    {
      term: "Welfare economics",
      definition: "Analysis of economic efficiency and social welfare.",
    },
  ],
  concepts: [
    {
      id: "cieale-u5l2-c1-information",
      title: "Asymmetric information and market failure",
      skill:
        "Explain adverse selection, moral hazard, signalling and screening.",
      lesson: {
        sections: [
          {
            heading: "Adverse selection",
            body: "**Adverse selection** — hidden information BEFORE transaction causes wrong people to self-select. Example: insurance attracts high-risk customers; used-car 'lemons' market — buyers can't distinguish quality, so only low-quality cars sell. Market may collapse or shrink inefficiently.",
          },
          {
            heading: "Moral hazard and solutions",
            body: "**Moral hazard** — hidden ACTION after transaction: insured people take more risks; banks take more risks knowing bailout likely. Solutions: **signalling** (seller proves quality — warranties, degrees), **screening** (buyer designs contracts to reveal type — deductibles, tiers).",
          },
        ],
        keyFormulas: [
          {
            name: "Adverse selection",
            statement: "Hidden info before → wrong self-selection",
          },
          {
            name: "Moral hazard",
            statement: "Hidden action after → risk-taking",
          },
          {
            name: "Signalling/screening",
            statement: "Reveal/elicit private info",
          },
        ],
        workedExample: {
          problem:
            "Why do insurance companies charge high-risk customers more?",
          solution:
            "Adverse selection: without risk-based pricing, high-risk customers (who know their risk) buy more insurance than low-risk — insurer loses unless it screens via premiums.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Adverse selection occurs due to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hidden action after transaction" },
              { id: "b", text: "Hidden information before transaction" },
              { id: "c", text: "Monopoly power" },
              { id: "d", text: "Externalities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adverse selection",
                statement: "Hidden info before.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Hidden info before",
            commonErrors: ["Confusing with moral hazard."],
          },
        },
        {
          id: "cieale-q-u5l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Distinguish adverse selection from moral hazard.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "AS vs MH",
                statement: "Before vs after transaction.",
              },
            ],
            steps: [
              { reasoning: "AS defined.", marks: 1, markCode: "M" },
              { reasoning: "MH defined.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Adverse selection: hidden information BEFORE deal (buyer knows more). Moral hazard: hidden ACTION AFTER deal (insured takes more risk).",
            commonErrors: ["Conflating."],
          },
        },
        {
          id: "cieale-q-u5l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'lemons' problem in used-car markets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lemons",
                statement: "Asymmetric info → market failure.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              {
                reasoning: "Result: only lemons sold.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Buyers can't distinguish quality → won't pay for good cars → sellers of good cars leave → only 'lemons' remain → market shrinks/fails; solved by warranties, certifications, reputation.",
            commonErrors: ["No mechanism."],
          },
        },
        {
          id: "cieale-q-u5l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How does 'signalling' solve asymmetric information? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Signalling",
                statement: "Credible action reveals private info.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Why credible.", marks: 1, markCode: "M" },
              { reasoning: "Costly signal point.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Seller reveals quality via costly-to-fake signal — e.g. warranty, degree, brand reputation; credible because low-quality sellers can't afford to mimic.",
            commonErrors: ["Signal not credible."],
          },
        },
        {
          id: "cieale-q-u5l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether government should intervene in markets with asymmetric information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Info intervention",
                statement: "Disclosure vs market solutions.",
              },
            ],
            steps: [
              { reasoning: "Case for intervention.", marks: 1, markCode: "M" },
              { reasoning: "Case against.", marks: 1, markCode: "M" },
              {
                reasoning: "Alternatives: signalling/screening.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Intervention (disclosure rules, regulation) can help but market solutions (signalling, reputation, screening) often work — government needed when private solutions fail or are too costly.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'screening'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Screening",
                statement: "Design contracts to reveal type.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Buyer designs contract menu so different types self-select — e.g. insurance with different deductibles reveals risk type; used-car warranties screen quality.",
            commonErrors: ["Confusing with signalling."],
          },
        },
        {
          id: "cieale-q-u5l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Moral hazard is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monopoly" },
              { id: "b", text: "Hidden info before deal" },
              {
                id: "c",
                text: "Risk-taking changes after insurance/protection",
              },
              { id: "d", text: "External cost" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moral hazard",
                statement: "Post-transaction risk.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Post-transaction risk",
            commonErrors: ["Confusing with AS."],
          },
        },
        {
          id: "cieale-q-u5l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of moral hazard in banking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Banking moral hazard",
                statement: "Bailout expectation → risk-taking.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Policy response.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Banks take excessive risks expecting government bailout if they fail ('too big to fail') — leads to regulation (capital requirements) or resolution regimes.",
            commonErrors: ["Generic example."],
          },
        },
        {
          id: "cieale-q-u5l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do warranties solve the lemons problem?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Warranty as signal",
                statement: "Costly signal of quality.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Credibility.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Warranty is costly signal — only confident sellers of good cars offer it; lemons sellers can't afford → buyers trust warranty as quality indicator.",
            commonErrors: ["Thinking free signal."],
          },
        },
        {
          id: "cieale-q-u5l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether asymmetric information can cause complete market failure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Market collapse",
                statement: "Lemons → no trade.",
              },
            ],
            steps: [
              { reasoning: "Collapse mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Conditions needed.", marks: 1, markCode: "M" },
              { reasoning: "Solutions exist.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If information asymmetry is extreme, market can collapse entirely (no trade occurs); but signalling, reputation, guarantees usually prevent complete failure — partial failure more common.",
            commonErrors: ["All-or-nothing."],
          },
        },
        {
          id: "cieale-q-u5l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Adverse selection is most likely to occur in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Perfectly competitive markets" },
              { id: "b", text: "Insurance markets" },
              { id: "c", text: "Markets with full information" },
              { id: "d", text: "Public goods provision" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Adverse selection",
                statement: "Hidden info → wrong self-selection.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Insurance markets",
            commonErrors: ["Confusing with moral hazard."],
          },
        },
        {
          id: "cieale-q-u5l2c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What problems arise from asymmetric information in credit markets?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Credit market info",
                statement: "Lenders can't observe borrower risk.",
              },
            ],
            steps: [
              { reasoning: "Adverse selection: risky borrowers more likely to apply.", marks: 1, markCode: "M" },
              { reasoning: "Moral hazard: borrowers may misuse funds after lending.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Lenders face adverse selection (high-risk borrowers self-select) and moral hazard (borrowers change behaviour) → higher interest rates or credit rationing.",
            commonErrors: ["Generic answer."],
          },
        },
        {
          id: "cieale-q-u5l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A used-car market where only low-quality cars ('lemons') are sold illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moral hazard" },
              { id: "b", text: "Market failure from adverse selection" },
              { id: "c", text: "Economies of scale" },
              { id: "d", text: "A positive externality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lemons",
                statement: "Adverse selection → market failure.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Adverse selection market failure",
            commonErrors: ["Confusing with moral hazard."],
          },
        },
        {
          id: "cieale-q-u5l2c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse why asymmetric information can cause market failure even when both parties would benefit from trade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Info market failure",
                statement: "Hidden info blocks efficient trades.",
              },
            ],
            steps: [
              { reasoning: "Buyers can't distinguish quality → won't pay full price.", marks: 1, markCode: "M" },
              { reasoning: "Sellers of good products exit → only low-quality remain.", marks: 1, markCode: "M" },
              { reasoning: "Trades that would benefit both parties don't occur → allocative inefficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Asymmetric information prevents mutually beneficial trades — good sellers leave, market shrinks or collapses → market failure.",
            commonErrors: ["No mechanism."],
          },
        },
        {
          id: "cieale-q-u5l2c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which policy is most likely to reduce moral hazard in banking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed interest rates" },
              { id: "b", text: "Removing all banking regulation" },
              { id: "c", text: "Unlimited government bailouts" },
              { id: "d", text: "Capital requirements and deposit insurance limits" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Banking moral hazard",
                statement: "Regulation reduces risk-taking.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Capital requirements and deposit limits",
            commonErrors: ["Bailouts worsen moral hazard."],
          },
        },
        {
          id: "cieale-q-u5l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Discuss the role of reputation as a private solution to asymmetric information.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reputation",
                statement: "Repeated interaction signals quality.",
              },
            ],
            steps: [
              { reasoning: "Reputation signals quality over repeated transactions.", marks: 1, markCode: "M" },
              { reasoning: "Long-term relationships and repeat purchase make cheating costly.", marks: 1, markCode: "M" },
              { reasoning: "Limits: one-off transactions, new entrants, short horizons.", marks: 1, markCode: "A" },
              { reasoning: "Interaction with formal signalling.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reputation solves information problems in repeated markets but fails for one-off transactions and new firms — complements rather than replaces other solutions.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieale-u5l2-c2-welfare",
      title: "Welfare economics",
      skill:
        "Apply Pareto efficiency, social welfare functions and cost-benefit analysis.",
      lesson: {
        sections: [
          {
            heading: "Efficiency concepts",
            body: "**Pareto efficiency** — no one can be made better off without making someone worse off. **Allocative efficiency** — P=MC. **Productive efficiency** — minimum AC. **Pareto improvement** — change making some better off, none worse. **Kaldor-Hicks** — gainers could compensate losers.",
          },
          {
            heading: "Social welfare and CBA",
            body: "**Social welfare function** aggregates individual utilities — utilitarian (sum), Rawlsian (maximize minimum). **Cost-benefit analysis** compares total social costs vs benefits — problems: distribution ignored, intangible values hard to measure, discount rate choice.",
          },
        ],
        keyFormulas: [
          { name: "Pareto efficiency", statement: "No gain without loss" },
          { name: "Pareto improvement", statement: "Some better, none worse" },
          {
            name: "Kaldor-Hicks",
            statement: "Gain > loss, compensation possible",
          },
        ],
        workedExample: {
          problem: "Is a tax cut a Pareto improvement?",
          solution:
            "Not necessarily — rich benefit more (better off) but government loses revenue for services (others worse off) → not Pareto improvement, but may be Kaldor-Hicks if gains exceed losses.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Pareto efficiency means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Everyone is equal" },
              {
                id: "b",
                text: "No one can be better off without someone worse off",
              },
              { id: "c", text: "Minimum cost" },
              { id: "d", text: "Maximum output" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pareto efficiency",
                statement: "No free gains.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** No free gains",
            commonErrors: ["Confusing with equality."],
          },
        },
        {
          id: "cieale-q-u5l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'Pareto improvement'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pareto improvement",
                statement: "Some better, none worse.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A change making at least one person better off without making anyone worse off — e.g. eliminating a market distortion that benefits all.",
            commonErrors: ["Confusing with efficiency."],
          },
        },
        {
          id: "cieale-q-u5l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish Pareto efficiency from allocative efficiency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pareto vs allocative",
                statement: "General vs market-specific.",
              },
            ],
            steps: [
              { reasoning: "Pareto defined.", marks: 1, markCode: "M" },
              { reasoning: "Allocative defined.", marks: 1, markCode: "M" },
              { reasoning: "Relationship.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Pareto efficiency is broader (whole economy, no possible improvement); allocative efficiency is market-specific (P=MC in one market) — allocative efficiency is a condition for Pareto efficiency.",
            commonErrors: ["Treating same."],
          },
        },
        {
          id: "cieale-q-u5l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the Kaldor-Hicks criterion with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kaldor-Hicks",
                statement: "Gainers could compensate losers.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "vs Pareto.", marks: 1, markCode: "M" },
              { reasoning: "Critique.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Policy is Kaldor-Hicks efficient if total gains exceed total losses — gainers COULD compensate losers even if they don't; broader than Pareto but ignores actual distribution.",
            commonErrors: ["Confusing with Pareto."],
          },
        },
        {
          id: "cieale-q-u5l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate cost-benefit analysis as a tool for public policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CBA critique",
                statement: "Systematic vs measurement problems.",
              },
            ],
            steps: [
              {
                reasoning: "Strengths: systematic comparison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weaknesses: intangibles, distribution.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Discount rate issue.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "CBA brings rigor but struggles with intangible values, distribution and discount-rate choice — useful framework but not definitive verdict.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'social welfare function'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SWF",
                statement: "Aggregates individual utilities.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Types.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A function aggregating individual utilities into social welfare — utilitarian (sum), Rawlsian (maximize minimum), or other ethical criteria.",
            commonErrors: ["Confusing with GDP."],
          },
        },
        {
          id: "cieale-q-u5l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A Pareto improvement requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Maximum efficiency" },
              { id: "b", text: "Everyone better off" },
              { id: "c", text: "Government approval" },
              { id: "d", text: "Some better off, none worse off" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pareto improvement",
                statement: "Some better, none worse.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Some better, none worse",
            commonErrors: ["Requiring all better."],
          },
        },
        {
          id: "cieale-q-u5l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is the 'discount rate' controversial in CBA?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Discount rate",
                statement: "Determines future vs present value.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              {
                reasoning: "Intergenerational issue.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Discount rate converts future costs/benefits to present value — high rate favours present, low rate favours future; choice embeds ethical judgment about future generations.",
            commonErrors: ["Treating as neutral."],
          },
        },
        {
          id: "cieale-q-u5l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare utilitarian and Rawlsian social welfare functions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SWF types",
                statement: "Sum vs max-min.",
              },
            ],
            steps: [
              { reasoning: "Utilitarian defined.", marks: 1, markCode: "M" },
              { reasoning: "Rawlsian defined.", marks: 1, markCode: "M" },
              { reasoning: "Different verdicts.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Utilitarian sums utilities (majority wins, may sacrifice minority); Rawlsian maximizes the worst-off (prioritizes equity) — same policy may differ in verdict.",
            commonErrors: ["Treating same."],
          },
        },
        {
          id: "cieale-q-u5l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Can a policy be economically efficient but socially undesirable? Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency vs welfare",
                statement: "Kaldor-Hicks vs distribution.",
              },
            ],
            steps: [
              { reasoning: "Efficiency ≠ equity.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Distribution matters.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Yes — Kaldor-Hicks efficient policy may benefit majority while harming minority severely; efficiency ignores distribution, so 'efficient' outcomes can be unjust.",
            commonErrors: ["Equating efficiency with goodness."],
          },
        },
        {
          id: "cieale-q-u5l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Allocative efficiency in a market requires that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Average cost is minimised" },
              { id: "b", text: "Price equals marginal cost" },
              { id: "c", text: "All firms earn supernormal profit" },
              { id: "d", text: "Output is maximised" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allocative efficiency",
                statement: "P = MC.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** P = MC",
            commonErrors: ["Confusing with productive efficiency."],
          },
        },
        {
          id: "cieale-q-u5l2c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'productive efficiency'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Productive efficiency",
                statement: "Minimum average cost.",
              },
            ],
            steps: [
              {
                reasoning: "Definition correct.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Contrast with allocative.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Producing at the lowest possible average cost — distinct from allocative efficiency (P = MC).",
            commonErrors: ["Confusing with allocative efficiency."],
          },
        },
        {
          id: "cieale-q-u5l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Kaldor-Hicks criterion states that a change is efficient if:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Everyone is better off" },
              {
                id: "b",
                text: "The gainers could in principle compensate the losers",
              },
              { id: "c", text: "No one is worse off" },
              { id: "d", text: "Total output rises" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kaldor-Hicks",
                statement: "Gainers could compensate losers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Gain could compensate loss",
            commonErrors: ["Confusing with Pareto."],
          },
        },
        {
          id: "cieale-q-u5l2c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a Pareto improvement may be difficult to achieve in practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pareto difficulty",
                statement: "Requires no loser.",
              },
            ],
            steps: [
              {
                reasoning: "Most real policies create winners AND losers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identifying all affected parties is hard.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Hence Kaldor-Hicks used instead.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Pareto improvements are rare because policies almost always make someone worse off — hence the need for weaker criteria like Kaldor-Hicks.",
            commonErrors: ["Thinking Pareto is common."],
          },
        },
        {
          id: "cieale-q-u5l2c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A Rawlsian social welfare function prioritises:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sum of all utilities" },
              {
                id: "b",
                text: "The welfare of the worst-off individual",
              },
              { id: "c", text: "Equal incomes for all" },
              { id: "d", text: "Maximising GDP" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rawlsian SWF",
                statement: "Maximise the minimum.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Worst-off individual",
            commonErrors: ["Confusing with utilitarian."],
          },
        },
        {
          id: "cieale-q-u5l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Discuss the problems of constructing a social welfare function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SWF problems",
                statement: "Aggregation and ethics.",
              },
            ],
            steps: [
              { reasoning: "Requires interpersonal utility comparisons.", marks: 1, markCode: "M" },
              { reasoning: "Choice of ethical criterion is subjective (utilitarian vs Rawlsian).", marks: 1, markCode: "M" },
              { reasoning: "Measuring individual utilities is practically impossible.", marks: 1, markCode: "A" },
              { reasoning: "Arrow's impossibility-type problems in aggregation.", marks: 1, markCode: "A" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Social welfare functions face insurmountable measurement and ethical problems — they are useful conceptual tools but cannot give definitive policy verdicts.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
