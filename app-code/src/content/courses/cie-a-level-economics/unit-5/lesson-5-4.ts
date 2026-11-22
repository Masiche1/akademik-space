import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "cieale-u5-lesson-5-4",
  code: "5-4",
  title: "Advanced Externalities, Public Goods and Merit Goods",
  goal: "I CAN analyse externality welfare economics, public good provision and merit/demerit good theory.",
  standards: ["Cambridge A Level Economics 9708", "Unit 5: market failure"],
  vocabulary: [
    {
      term: "Marginal external cost (MEC)",
      definition: "Extra external cost per unit of output.",
    },
    { term: "Marginal social cost (MSC)", definition: "MPC + MEC." },
    { term: "Marginal social benefit (MSB)", definition: "MPB + MEB." },
    {
      term: "Free rider problem",
      definition: "Non-payers benefit from public goods.",
    },
    {
      term: "Merit good",
      definition: "Underprovided due to undervaluation/positive externalities.",
    },
    {
      term: "Demerit good",
      definition: "Overprovided due to overvaluation/negative externalities.",
    },
  ],
  concepts: [
    {
      id: "cieale-u5l4-c1-externality",
      title: "Externality welfare analysis",
      skill: "Apply MSC/MSB framework to negative and positive externalities.",
      lesson: {
        sections: [
          {
            heading: "MSC and MSB framework",
            body: "**Negative externality**: MSC = MPC + MEC > MPC → market produces where MPC=MPB, but social optimum where MSC=MSB → **overproduction**, deadweight loss. **Positive externality**: MSB = MPB + MEB > MPB → market underproduces where MPB=MPC, optimum where MSB=MSC → **underproduction**, deadweight loss.",
          },
          {
            heading: "Policy responses",
            body: "Pigouvian tax/subsidy = MEC/MEB to internalise. Regulation (standards, bans). Tradable permits (cap-and-trade). Property rights (Coase). Each has trade-offs: taxes efficient but political; regulation rigid; permits complex.",
          },
        ],
        keyFormulas: [
          { name: "MSC", statement: "MPC + MEC" },
          { name: "MSB", statement: "MPB + MEB" },
          { name: "Optimum", statement: "MSC = MSB" },
        ],
        workedExample: {
          problem:
            "Pollution: MPC=$8, MEC=$4, MPB=$12. Market vs social optimum?",
          solution:
            "Market: produce where MPC=MPB=$12 → Q where MPC=12. Social: MSC=8+4=$12=MEC... wait MSC=$12, MSB=$12 → produce where MSC=MSB → different Q. Market overproduces since MSC>MPC.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "MSC equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MPC only" },
              { id: "b", text: "MPB + MEB" },
              { id: "c", text: "MEC only" },
              { id: "d", text: "MPC + MEC" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "MSC", statement: "MPC + MEC." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** MPC + MEC",
            commonErrors: ["Wrong formula."],
          },
        },
        {
          id: "cieale-q-u5l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why does negative externality cause overproduction?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative externality",
                statement: "MSC > MPC → overproduce.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Producers respond to MPC, not MSC=MPC+MEC — they produce where MPC=MPB, beyond social optimum where MSC=MSB → overproduction + deadweight loss.",
            commonErrors: ["Underproduction claim."],
          },
        },
        {
          id: "cieale-q-u5l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why positive externalities cause underproduction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positive externality",
                statement: "MSB > MPB → underproduce.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Consumers/producers respond to MPB, ignoring MEB — MSB=MPB+MEB>MPB, so social optimum exceeds market output → underproduction (e.g. vaccination, education).",
            commonErrors: ["Overproduction claim."],
          },
        },
        {
          id: "cieale-q-u5l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "MPC=$5, MEC=$3, MPB=$10. Find market and social optimal prices/quantities conceptually.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Externality calc",
                statement: "MSC=MPC+MEC, MSB=MPB+MEB.",
              },
            ],
            steps: [
              { reasoning: "MSC = 5+3 = $8.", marks: 1, markCode: "M" },
              { reasoning: "MSB = 10 (no MEB).", marks: 1, markCode: "M" },
              {
                reasoning: "Market: MPC=MPB → produce more.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social: MSC=MSB → less output.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "MSC=$8, MSB=$10. Market produces where MPC=MPB (more than optimum); social optimum where MSC=MSB (less) — overproduction of $2/unit external cost.",
            commonErrors: ["Arithmetic or wrong curves."],
          },
        },
        {
          id: "cieale-q-u5l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare Pigouvian taxes, regulation and tradable permits for controlling pollution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Externality policy",
                statement: "Tax vs command vs market.",
              },
            ],
            steps: [
              { reasoning: "Pigouvian tax.", marks: 1, markCode: "M" },
              { reasoning: "Regulation.", marks: 1, markCode: "M" },
              { reasoning: "Tradable permits.", marks: 1, markCode: "M" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tax: efficient price signal but needs accurate MEC estimate. Regulation: certain outcome but inflexible. Permits: market-efficient quantity but complex to design — choice depends on context.",
            commonErrors: ["One option only."],
          },
        },
        {
          id: "cieale-q-u5l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'deadweight loss' from externality?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DWL",
                statement: "Lost gains from trade.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Externality link.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The lost surplus from producing too much (negative externality) or too little (positive) — units that would benefit society aren't produced at right quantity.",
            commonErrors: ["Confusing with tax revenue."],
          },
        },
        {
          id: "cieale-q-u5l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Social optimum occurs where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MPC = MPB" },
              { id: "b", text: "MSC = MSB" },
              { id: "c", text: "P = MC" },
              { id: "d", text: "TR = TC" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Social optimum",
                statement: "MSC = MSB.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** MSC = MSB",
            commonErrors: ["Using market condition."],
          },
        },
        {
          id: "cieale-q-u5l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is a Pigouvian tax set equal to MEC?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pigouvian tax",
                statement: "Internalises externality.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "M" },
              { reasoning: "Limitation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tax=MEC shifts MPC up to MSC → producers face true social cost → produce at social optimum; hard to estimate MEC accurately in practice.",
            commonErrors: ["Arbitrary tax."],
          },
        },
        {
          id: "cieale-q-u5l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'tradable permits' as externality policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tradable permits",
                statement: "Cap + trade pollution rights.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Efficiency.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Government sets pollution cap, issues permits firms can trade — polluters with low abatement cost buy permits, high-cost reduce emissions; achieves cap at least cost (EU ETS).",
            commonErrors: ["Confusing with tax."],
          },
        },
        {
          id: "cieale-q-u5l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the Coase theorem's applicability to real-world externalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coase",
                statement: "Property rights + low transaction costs.",
              },
            ],
            steps: [
              { reasoning: "Theorem stated.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "M" },
              { reasoning: "Real-world limits.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Coase works when property rights clear and transaction costs low — but real externalities (pollution affecting many) have high transaction costs and unclear rights → government intervention often needed.",
            commonErrors: ["Universal applicability assumed."],
          },
        },
        {
          id: "cieale-q-u5l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the presence of a negative production externality:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MPC = 0" },
              { id: "b", text: "MSC < MPC" },
              { id: "c", text: "MSC > MPC" },
              { id: "d", text: "MSC = MPC" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative externality",
                statement: "MSC > MPC.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** MSC > MPC",
            commonErrors: ["Reversing inequality."],
          },
        },
        {
          id: "cieale-q-u5l4c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'marginal external cost' (MEC)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MEC",
                statement: "Extra external cost per unit.",
              },
            ],
            steps: [
              {
                reasoning: "Definition correct.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "MSC relation.", marks: 1, markCode: "M" },
            ],
            finalAnswer:
              "The extra cost imposed on third parties per extra unit of output — MSC = MPC + MEC.",
            commonErrors: ["Confusing with MPC."],
          },
        },
        {
          id: "cieale-q-u5l4c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A Pigouvian tax is designed to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raise revenue only" },
              { id: "b", text: "Subsidise consumers" },
              {
                id: "c",
                text: "Internalise an externality by making the producer pay the external cost",
              },
              { id: "d", text: "Ban production of the good" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pigouvian tax",
                statement: "Tax = marginal external cost.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Internalise external cost",
            commonErrors: ["Thinking it's just revenue."],
          },
        },
        {
          id: "cieale-q-u5l4c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between private and social costs and benefits in the context of externalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Private vs social",
                statement: "Producer vs society view.",
              },
            ],
            steps: [
              {
                reasoning: "Private costs/benefits accrue to producer/consumer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social = private + external costs/benefits on third parties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divergence between them causes market failure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Private costs/benefits fall on the transacting parties; social costs/benefits add external effects on third parties — the gap causes market failure.",
            commonErrors: ["Conflating private and social."],
          },
        },
        {
          id: "cieale-q-u5l4c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The Coase theorem suggests that externalities can be resolved through bargaining when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand is perfectly inelastic" },
              { id: "b", text: "Firms merge into a monopoly" },
              { id: "c", text: "Government bans the activity" },
              {
                id: "d",
                text: "Property rights are well defined and transaction costs are low",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Coase theorem",
                statement: "Bargaining if rights clear, costs low.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Clear rights + low transaction costs",
            commonErrors: ["Missing conditions."],
          },
        },
        {
          id: "cieale-q-u5l4c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why government intervention may be necessary even though the Coase theorem offers a private solution to externalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coase limits",
                statement: "Transaction costs and rights problems.",
              },
            ],
            steps: [
              {
                reasoning: "Coase requires clearly defined, enforceable property rights.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Transaction costs are often prohibitive (many affected parties).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Free-rider and information problems in bargaining.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Cases for taxes, permits and regulation remain strong.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Coase bargaining fails when rights are unclear, parties are numerous, or transaction costs are high — hence government intervention is often still required.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieale-u5l4-c2-goods",
      title: "Public, merit and demerit goods",
      skill: "Analyse provision problems and policy for different good types.",
      lesson: {
        sections: [
          {
            heading: "Public goods",
            body: "**Non-rival** (my use doesn't reduce yours) + **non-excludable** (can't prevent non-payers) → **free-rider problem** → market provides none. Examples: national defence, street lighting, flood defences. Government must provide/fund — often via taxation (collective provision).",
          },
          {
            heading: "Merit and demerit goods",
            body: "**Merit goods** (education, healthcare) — underprovided because consumers undervalue benefits (positive externalities + information problems). **Demerit goods** (tobacco, alcohol, gambling) — overprovided because consumers overvalue or underestimate harms (negative externalities). Policy: subsidies for merit, taxes/regulation for demerit.",
          },
        ],
        keyFormulas: [
          {
            name: "Public good",
            statement: "Non-rival + non-excludable → free-rider",
          },
          { name: "Merit good", statement: "Underprovided — undervalued" },
          { name: "Demerit good", statement: "Overprovided — overvalued" },
        ],
        workedExample: {
          problem: "Why does market underprovide merit goods?",
          solution:
            "Consumers undervalue long-term benefits and ignore positive externalities (MSB>MPB) → private demand too low → market output below social optimum → justify subsidy.",
        },
      },
      questions: [
        {
          id: "cieale-q-u5l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A public good is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only non-rival" },
              { id: "b", text: "Non-rival and non-excludable" },
              { id: "c", text: "Only non-excludable" },
              { id: "d", text: "Rival and excludable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Public good",
                statement: "Both characteristics.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Both",
            commonErrors: ["Missing one."],
          },
        },
        {
          id: "cieale-q-u5l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why does the free-rider problem prevent market provision of public goods?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free-rider",
                statement: "Non-payers benefit → no incentive.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Result.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Non-excludability means people consume without paying — no one has incentive to pay → demand zero → market provides none.",
            commonErrors: ["Thinking market works."],
          },
        },
        {
          id: "cieale-q-u5l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why merit goods are underprovided.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merit good",
                statement: "Undervaluation + externalities.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Policy.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Consumers undervalue long-term benefits (myopia, information) and ignore positive externalities → demand too low → underprovided; justify subsidies/compulsion (education).",
            commonErrors: ["Only cost cited."],
          },
        },
        {
          id: "cieale-q-u5l4c2-4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a demerit good and explain overconsumption.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Demerit good",
                statement: "Overvalued + negative externalities.",
              },
            ],
            steps: [
              { reasoning: "Valid example.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. tobacco — consumers underestimate health harms (information failure) and ignore negative externalities → overconsume → justify taxation/regulation.",
            commonErrors: ["Merit good example."],
          },
        },
        {
          id: "cieale-q-u5l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Should government provide all public goods directly? Evaluate alternatives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Public provision",
                statement: "Direct vs vouchers/PPP.",
              },
            ],
            steps: [
              { reasoning: "Direct provision.", marks: 1, markCode: "M" },
              { reasoning: "Alternatives.", marks: 1, markCode: "M" },
              {
                reasoning: "Government failure risk.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Public goods need public funding but delivery can be via vouchers, subsidies, PPPs — direct provision not always most efficient; depends on good's nature and accountability.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What makes a good 'non-excludable'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-excludable",
                statement: "Can't prevent non-payers.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Cannot prevent non-payers from consuming — e.g. national defence benefits everyone whether they pay or not.",
            commonErrors: ["Confusing with non-rival."],
          },
        },
        {
          id: "cieale-q-u5l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a merit good?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "National defence" },
              { id: "b", text: "Education" },
              { id: "c", text: "Petrol" },
              { id: "d", text: "Cigarettes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Merit good", statement: "Education." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Education",
            commonErrors: ["Demerit or public good."],
          },
        },
        {
          id: "cieale-q-u5l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'non-rivalry' with an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-rival",
                statement: "My use doesn't reduce yours.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Contrast rival.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "One person's consumption doesn't reduce availability for others — e.g. street lighting, broadcast TV; contrast rival goods (food) where consumption reduces supply.",
            commonErrors: ["Confusing with non-excludable."],
          },
        },
        {
          id: "cieale-q-u5l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might government subsidise merit goods rather than provide them?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subsidy vs provision",
                statement: "Preserves choice, market efficiency.",
              },
            ],
            steps: [
              { reasoning: "Subsidy mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Advantages.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Subsidy lowers price → increases quantity while preserving consumer choice and market allocation — but may not reach those who need it most (vs direct provision).",
            commonErrors: ["Thinking provision always better."],
          },
        },
        {
          id: "cieale-q-u5l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'paternalism' in merit/demerit good policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paternalism",
                statement: "State overrides individual choice.",
              },
            ],
            steps: [
              { reasoning: "Justification.", marks: 1, markCode: "M" },
              { reasoning: "Liberty concern.", marks: 1, markCode: "M" },
              { reasoning: "When justified.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Paternalism justified when individuals systematically harm themselves (addiction, myopia) but risks government overreach — soft paternalism (nudges, information) preferable to hard bans.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieale-q-u5l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Non-excludability means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is impossible to prevent non-payers from consuming the good",
              },
              { id: "b", text: "Only government can produce it" },
              { id: "c", text: "The good is always free" },
              { id: "d", text: "One person's consumption reduces availability" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-excludable",
                statement: "Cannot exclude non-payers.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Cannot exclude non-payers",
            commonErrors: ["Confusing with non-rival."],
          },
        },
        {
          id: "cieale-q-u5l4c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'demerit good'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Demerit good",
                statement: "Overconsumed due to info failure/externalities.",
              },
            ],
            steps: [
              {
                reasoning: "Definition correct.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A good consumers overconsume because they underestimate its harms — e.g. tobacco, alcohol, gambling.",
            commonErrors: ["Confusing with merit good."],
          },
        },
        {
          id: "cieale-q-u5l4c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Merit goods are underprovided in a free market mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Firms cannot produce them" },
              { id: "b", text: "They are non-excludable" },
              { id: "c", text: "Demand is perfectly elastic" },
              {
                id: "d",
                text: "Consumers underestimate their benefits and there are positive externalities",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merit good underprovision",
                statement: "Info failure + positive externalities.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Info failure + externalities",
            commonErrors: ["Confusing with public goods."],
          },
        },
        {
          id: "cieale-q-u5l4c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why public goods are usually provided by the government rather than the market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Public good provision",
                statement: "Free-rider problem.",
              },
            ],
            steps: [
              {
                reasoning: "Non-excludability → free-rider problem → no private provision.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Non-rivalry → marginal cost of extra user is zero.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Government provides via taxation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Free-rider problem and zero marginal cost mean markets underprovide public goods → government supplies them funded by taxation.",
            commonErrors: ["No free-rider link."],
          },
        },
        {
          id: "cieale-q-u5l4c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Street lighting is an example of a public good because it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Excludable and rival" },
              {
                id: "b",
                text: "Non-excludable and non-rival",
              },
              { id: "c", text: "Only produced by government" },
              { id: "d", text: "Always profitable to sell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Public good",
                statement: "Non-excludable + non-rival.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Non-excludable and non-rival",
            commonErrors: ["Confusing characteristics."],
          },
        },
        {
          id: "cieale-q-u5l4c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether all merit goods should be provided free of charge by the state.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merit good provision",
                statement: "Equity vs efficiency/paternalism.",
              },
            ],
            steps: [
              {
                reasoning: "Case for: positive externalities, equity, information failure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Case against: paternalism, fiscal cost, targeting problems.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternatives: subsidies, vouchers, information campaigns.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Free provision ensures access but is costly and paternalistic — targeted subsidies or vouchers may be more efficient for many merit goods.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
