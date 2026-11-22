import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "cieige-u5-lesson-5-4",
  code: "5-4",
  title: "Market Failure: Externalities and Public Goods",
  goal: "I CAN explain externalities, public goods and why markets fail to allocate resources efficiently.",
  standards: ["Cambridge IGCSE Economics 0455", "Unit 5: market failure"],
  vocabulary: [
    {
      term: "Market failure",
      definition: "Free markets fail to allocate resources efficiently.",
    },
    {
      term: "Externality",
      definition:
        "Cost or benefit affecting third parties outside the transaction.",
    },
    {
      term: "Negative externality",
      definition: "External cost — e.g. pollution from production.",
    },
    {
      term: "Positive externality",
      definition: "External benefit — e.g. vaccination reducing disease.",
    },
    {
      term: "Public good",
      definition: "Non-rival and non-excludable — e.g. national defence.",
    },
    {
      term: "Merit good",
      definition:
        "Underprovided by market due to information/positive externalities — e.g. education.",
    },
  ],
  concepts: [
    {
      id: "cieige-u5l4-c1-externalities",
      title: "Externalities",
      skill:
        "Explain negative and positive externalities and their welfare effects.",
      lesson: {
        sections: [
          {
            heading: "Externalities defined",
            body: "An **externality** is a cost or benefit affecting third parties not involved in the transaction. **Negative externalities** (external costs) — pollution, noise, congestion — lead to **overproduction**: market price ignores external costs, so MSC > MPC and output exceeds social optimum. **Positive externalities** (external benefits) — education, vaccination, research — lead to **underproduction**: MSB > MPB.",
          },
          {
            heading: "Welfare analysis",
            body: "With negative externalities, MSC = MPC + MEC. Social optimum is where MSC = MSB (lower Q, higher P than market). With positive externalities, MSB = MPB + MEB — optimum Q is higher than market output. **Deadweight loss** arises in both cases.",
          },
        ],
        keyFormulas: [
          {
            name: "Negative externality",
            statement: "MSC = MPC + MEC; overproduction",
          },
          {
            name: "Positive externality",
            statement: "MSB = MPB + MEB; underproduction",
          },
          { name: "Social optimum", statement: "MSC = MSB" },
        ],
        workedExample: {
          problem: "Why is output too high with negative externalities?",
          solution:
            "Producers consider only private costs (MPC), ignoring external costs (MEC). True social cost MSC = MPC + MEC, so the market produces where MPC=MPB but beyond the social optimum where MSC=MSB.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An externality is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A market price" },
              { id: "b", text: "A government tax" },
              { id: "c", text: "A firm's profit" },
              { id: "d", text: "A cost or benefit affecting third parties" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Externality",
                statement: "Third-party effect.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Third-party cost/benefit",
            commonErrors: ["Confusing with internal cost."],
          },
        },
        {
          id: "cieige-q-u5l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give an example of a negative externality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Negative externality",
                statement: "External cost — pollution, congestion.",
              },
            ],
            steps: [
              { reasoning: "Valid example.", marks: 1, markCode: "M" },
              { reasoning: "Third party identified.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. factory pollution harming nearby residents' health — a cost borne by third parties not paid for by producer or consumer.",
            commonErrors: ["Example where cost is internal."],
          },
        },
        {
          id: "cieige-q-u5l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why negative externalities cause overproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative externality",
                statement: "MSC > MPC → output exceeds optimum.",
              },
            ],
            steps: [
              {
                reasoning: "MPC ignores external cost.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "MSC = MPC + MEC.", marks: 1, markCode: "M" },
              {
                reasoning: "Market Q > social optimum Q.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Producers respond to private cost MPC, not social cost MSC = MPC + MEC. They produce where MPC = MSB, which exceeds the social optimum where MSC = MSB — overproduction.",
            commonErrors: ["Claiming underproduction."],
          },
        },
        {
          id: "cieige-q-u5l4c1-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why positive externalities cause underproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positive externality",
                statement: "MSB > MPB → output below optimum.",
              },
            ],
            steps: [
              {
                reasoning: "MPB ignores external benefit.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "MSB = MPB + MEB.", marks: 1, markCode: "M" },
              {
                reasoning: "Market Q < social optimum Q.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Consumers/producers respond to private benefit MPB, ignoring external benefit MEB. MSB = MPB + MEB > MPB, so the social optimum output exceeds the market output — underproduction.",
            commonErrors: ["Claiming overproduction."],
          },
        },
        {
          id: "cieige-q-u5l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether negative externalities always require government intervention.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intervention debate",
                statement: "DWL vs government failure.",
              },
            ],
            steps: [
              {
                reasoning: "Case for: DWL exists, market won't self-correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Case against: government failure risk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternatives: Coase theorem, tradable permits.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Externalities create DWL markets won't fix, but intervention risks government failure — Coase solutions (property rights, bargaining) or market-based instruments may be preferable where feasible.",
            commonErrors: ["Assuming government always works."],
          },
        },
        {
          id: "cieige-q-u5l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'Coase theorem'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coase theorem",
                statement:
                  "Clear property rights → bargaining fixes externality.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Conditions noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "If property rights are clear and transaction costs are zero, parties can bargain to an efficient outcome regardless of initial allocation — government intervention isn't always needed.",
            commonErrors: ["Confusing with Pigouvian taxes."],
          },
        },
        {
          id: "cieige-q-u5l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Positive externalities lead to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Underproduction" },
              { id: "b", text: "No market failure" },
              { id: "c", text: "Higher prices only" },
              { id: "d", text: "Overproduction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positive externality",
                statement: "Underproduction.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Underproduction",
            commonErrors: ["Reversing direction."],
          },
        },
        {
          id: "cieige-q-u5l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is education often cited as having positive externalities?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Education externality",
                statement: "Benefits spill to society.",
              },
            ],
            steps: [
              {
                reasoning: "External benefits identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Policy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Educated individuals benefit themselves (MPB) plus society via higher productivity, lower crime, better health (MEB) — so market underprovides it, justifying subsidies.",
            commonErrors: ["Only private benefits."],
          },
        },
        {
          id: "cieige-q-u5l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish MSC from MPC.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MSC vs MPC",
                statement: "Social vs private marginal cost.",
              },
            ],
            steps: [
              { reasoning: "Definitions correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Relationship: MSC = MPC + MEC.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Implication noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "MPC is the producer's private marginal cost; MSC includes external costs (MEC) borne by third parties — MSC = MPC + MEC, and the gap measures the externality.",
            commonErrors: ["Using them interchangeably."],
          },
        },
        {
          id: "cieige-q-u5l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A factory's pollution costs neighbours $2m/year; production is $50m. Should the government intervene? Analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy analysis",
                statement: "External cost vs intervention options.",
              },
            ],
            steps: [
              { reasoning: "Externality quantified.", marks: 1, markCode: "M" },
              {
                reasoning: "Options: tax, regulation, Coase.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weighs efficiency vs cost.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both sides.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A $2m external cost suggests underpricing — a Pigouvian tax equal to marginal external cost or regulation could restore efficiency; but check transaction costs for Coase solutions first.",
            commonErrors: ["One-sided or no options."],
          },
        },
        {
          id: "cieige-q-u5l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a negative externality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A firm paying its workers" },
              { id: "b", text: "A consumer enjoying a free concert" },
              { id: "c", text: "Factory smoke harming nearby residents" },
              { id: "d", text: "A shopper buying bread" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Negative externality",
                statement: "External cost borne by third parties.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Factory smoke",
            commonErrors: ["Choosing internal costs."],
          },
        },
        {
          id: "cieige-q-u5l4c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A factory's marginal external cost of pollution is $4 per unit and its marginal private cost is $9 per unit. (a) Find the marginal social cost. (b) Find the Pigouvian tax that would correct the externality.",
          response: {
            type: "numeric",
            parts: [
              { label: "Marginal social cost", answer: 11, unit: "$" },
              { label: "Pigouvian tax", answer: 4, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Social cost",
                statement: "MSC = MPC + MEC; tax = MEC.",
              },
            ],
            steps: [
              {
                reasoning: "MSC = MPC + MEC = 9 + 4 = $11.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pigouvian tax = MEC = $4 per unit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $11 (b) $4",
            commonErrors: ["Taxing the full social cost."],
          },
        },
        {
          id: "cieige-q-u5l4c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Marginal social cost (MSC) equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MPB + MEB" },
              { id: "b", text: "MPC − MEC" },
              { id: "c", text: "MPC only" },
              { id: "d", text: "MPC + MEC" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MSC",
                statement: "Private + external cost.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** MPC + MEC",
            commonErrors: ["Confusing with MSB."],
          },
        },
        {
          id: "cieige-q-u5l4c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why positive externalities justify government subsidies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positive externality policy",
                statement: "Subsidy raises output toward social optimum.",
              },
            ],
            steps: [
              {
                reasoning: "Market underprovides the good.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subsidy lowers cost/price, raises Q.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Moves output toward MSC = MSB optimum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Positive externalities mean MSB > MPB so the market produces below the social optimum; a subsidy lowers producers' costs, increases output and moves the market toward the efficient quantity.",
            commonErrors: ["Suggesting a tax instead."],
          },
        },
        {
          id: "cieige-q-u5l4c1-15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A firm's marginal private cost is $8 per unit and the marginal external cost is $3 per unit. (a) Find the marginal social cost. (b) Find the per-unit tax that would internalise the externality.",
          response: {
            type: "numeric",
            parts: [
              { label: "Marginal social cost", answer: 11, unit: "$" },
              { label: "Per-unit tax", answer: 3, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "MSC and tax",
                statement: "MSC = MPC + MEC; tax = MEC.",
              },
            ],
            steps: [
              {
                reasoning: "MSC = 8 + 3 = $11.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tax = MEC = $3 per unit.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $11 (b) $3",
            commonErrors: ["Adding tax to price instead of cost."],
          },
        },
        {
          id: "cieige-q-u5l4c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the realism of the Coase theorem as a solution to externality problems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coase limits",
                statement: "Requires clear rights and zero transaction costs.",
              },
            ],
            steps: [
              {
                reasoning: "Theorem's conditions stated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transaction costs often non-zero.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Property rights may be unclear.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The Coase theorem shows bargaining can fix externalities but only with clear property rights and negligible transaction costs — in reality, rights are often unclear and bargaining is costly, so government intervention is frequently necessary.",
            commonErrors: ["Treating Coase as always applicable."],
          },
        },
      ],
    },
    {
      id: "cieige-u5l4-c2-publicgoods",
      title: "Public goods, merit goods and information failure",
      skill:
        "Explain why markets underprovide public goods, merit goods and where information is imperfect.",
      lesson: {
        sections: [
          {
            heading: "Public goods",
            body: "**Non-rival** (one person's use doesn't reduce another's) and **non-excludable** (can't prevent non-payers). Free-rider problem: nobody pays → market provides none. Examples: national defence, street lighting, lighthouses. Government must provide or fund them.",
          },
          {
            heading: "Merit goods and information failure",
            body: "**Merit goods** are underprovided because consumers undervalue them (education, healthcare) — positive externalities + information problems. **Information failure**: asymmetric information (seller knows more than buyer — used cars) causes adverse selection and moral hazard, distorting markets.",
          },
        ],
        keyFormulas: [
          {
            name: "Public good",
            statement: "Non-rival + non-excludable → free-rider problem",
          },
          {
            name: "Merit good",
            statement: "Underprovided due to undervaluation",
          },
          {
            name: "Asymmetric info",
            statement: "One party knows more → adverse selection/moral hazard",
          },
        ],
        workedExample: {
          problem: "Why won't the market provide national defence?",
          solution:
            "It's non-excludable — everyone benefits whether they pay or not (free-rider), so no one has incentive to pay; market demand is zero.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A public good is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only non-rival" },
              { id: "b", text: "Only non-excludable" },
              { id: "c", text: "Non-rival and non-excludable" },
              { id: "d", text: "Rival and excludable" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Public good",
                statement: "Non-rival + non-excludable.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Both non-rival and non-excludable",
            commonErrors: ["Missing one characteristic."],
          },
        },
        {
          id: "cieige-q-u5l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'free-rider problem'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free-rider",
                statement: "Benefit without paying.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "People consume a public good without paying because they can't be excluded — so no one has incentive to pay and the market provides none.",
            commonErrors: ["Confusing with charity."],
          },
        },
        {
          id: "cieige-q-u5l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why markets underprovide merit goods like education.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merit good",
                statement: "Consumers undervalue; positive externalities.",
              },
            ],
            steps: [
              {
                reasoning: "Undervaluation mechanism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "External benefit ignored.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Result: Q < optimum.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Consumers undervalue education's long-term benefits and ignore positive externalities (MSB > MPB), so market demand — and output — falls below the social optimum.",
            commonErrors: ["Only citing cost."],
          },
        },
        {
          id: "cieige-q-u5l4c2-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is 'asymmetric information' and give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asymmetric information",
                statement: "One party knows more than the other.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "M" },
              { reasoning: "Consequence noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "One party has more information than the other — e.g. used-car seller knows defects buyer doesn't; causes adverse selection (lemons) and moral hazard.",
            commonErrors: ["Confusing with perfect information."],
          },
        },
        {
          id: "cieige-q-u5l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether government should provide all public goods directly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Public provision",
                statement: "Necessity vs efficiency of alternatives.",
              },
            ],
            steps: [
              {
                reasoning: "Case for direct provision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternatives: vouchers, subsidies, PPPs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Government failure risk.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Public goods need public funding, but delivery can be via vouchers, subsidies or contracting — direct government provision isn't always most efficient; depends on good design and accountability.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'adverse selection'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adverse selection",
                statement: "Hidden info before transaction → bad outcomes.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When hidden information before a deal means the wrong people self-select — e.g. insurance attracting high-risk customers, or 'lemons' dominating used-car markets.",
            commonErrors: ["Confusing with moral hazard."],
          },
        },
        {
          id: "cieige-q-u5l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a public good?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A cinema ticket" },
              { id: "b", text: "A private garden" },
              { id: "c", text: "National defence" },
              { id: "d", text: "A restaurant meal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Public good example",
                statement: "National defence.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** National defence",
            commonErrors: ["Choosing rival goods."],
          },
        },
        {
          id: "cieige-q-u5l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'moral hazard' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Moral hazard",
                statement: "Insurance changes behaviour → more risk-taking.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "M" },
              {
                reasoning: "Link to information failure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "When insurance/protection changes behaviour, increasing risk — e.g. insured drivers take more risks; arises because one party's hidden action affects another's outcome.",
            commonErrors: ["Confusing with adverse selection."],
          },
        },
        {
          id: "cieige-q-u5l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might markets fail even without externalities or public goods?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Other failures",
                statement: "Inequality, instability, information.",
              },
            ],
            steps: [
              {
                reasoning: "Valid failure identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              {
                reasoning: "Second failure or nuance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Markets can fail via inequality (unfair distribution even if efficient), business-cycle instability, or information failure — efficiency ≠ equity or stability.",
            commonErrors: ["Listing without mechanism."],
          },
        },
        {
          id: "cieige-q-u5l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that 'government failure is worse than market failure.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Government vs market failure",
                statement: "Both exist; context-dependent.",
              },
            ],
            steps: [
              { reasoning: "Market failure cases.", marks: 1, markCode: "M" },
              {
                reasoning: "Government failure cases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Depends on context/design.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Neither is universally worse — markets fail via externalities and public goods; governments fail via poor information, rent-seeking and capture; the question is which failure is more correctable in context.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a public good?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A private gym membership" },
              { id: "b", text: "Street lighting" },
              { id: "c", text: "A loaf of bread" },
              { id: "d", text: "A cinema ticket" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Public good example",
                statement: "Non-rival and non-excludable.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Street lighting",
            commonErrors: ["Choosing rival goods."],
          },
        },
        {
          id: "cieige-q-u5l4c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'merit good' is underprovided by the market mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always free" },
              {
                id: "b",
                text: "Consumers undervalue its benefits",
              },
              { id: "c", text: "It is non-excludable" },
              { id: "d", text: "It has no demand" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Merit good",
                statement: "Undervalued by consumers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Consumers undervalue it",
            commonErrors: ["Confusing with public good."],
          },
        },
        {
          id: "cieige-q-u5l4c2-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Education has a market output of 5000 students per year, but the social optimum is 8000. A subsidy raises enrolment by 500 students per year. (a) Find the initial underprovision. (b) Find how many years to close the gap at that rate.",
          response: {
            type: "numeric",
            parts: [
              { label: "Underprovision", answer: 3000, unit: "students" },
              { label: "Years to close gap", answer: 6, unit: "years" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Underprovision",
                statement: "Optimum − market output; divide by annual gain.",
              },
            ],
            steps: [
              {
                reasoning: "Underprovision = 8000 − 5000 = 3000 students.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Years = 3000 ÷ 500 = 6 years.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 3000 students (b) 6 years",
            commonErrors: ["Dividing by the wrong figure."],
          },
        },
        {
          id: "cieige-q-u5l4c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Asymmetric information' occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both parties have perfect information" },
              { id: "b", text: "Prices are fixed by government" },
              {
                id: "c",
                text: "One party to a transaction knows more than the other",
              },
              { id: "d", text: "Nobody knows anything" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asymmetric information",
                statement: "Unequal knowledge between parties.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** One party knows more",
            commonErrors: ["Confusing with perfect information."],
          },
        },
        {
          id: "cieige-q-u5l4c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how asymmetric information causes the 'market for lemons' problem in used cars.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Adverse selection",
                statement: "Hidden defects → bad cars drive out good.",
              },
            ],
            steps: [
              {
                reasoning: "Sellers know quality, buyers don't.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Buyers pay average price → good cars exit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Market shrinks/collapses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sellers know each car's true quality but buyers don't, so buyers offer an average price; owners of good cars won't sell at that price, leaving mostly 'lemons' — the market for used cars deteriorates or collapses (adverse selection).",
            commonErrors: ["Ignoring the information asymmetry."],
          },
        },
        {
          id: "cieige-q-u5l4c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether merit goods like education should be provided via vouchers rather than directly by the government.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vouchers vs provision",
                statement: "Choice and competition vs equity and control.",
              },
            ],
            steps: [
              {
                reasoning: "Voucher benefits: consumer choice, competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Direct provision benefits: equity, standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Risks: capture, inequality of access.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Vouchers preserve consumer choice and introduce competition but may worsen inequality if schools select students; direct provision guarantees access and standards but can be inefficient — the best design depends on the good and regulatory capacity.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
