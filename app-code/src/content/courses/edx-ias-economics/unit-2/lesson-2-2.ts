import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "eias-econ-u2-lesson-2-2",
  code: "2-2",
  title: "Correcting Market Failure",
  goal: "I CAN evaluate government policies to correct market failure.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 2 — Market Failure"],
  vocabulary: [
    {
      term: "Pigouvian tax",
      definition: "Tax equal to external cost — internalises externality.",
    },
    {
      term: "Tradable permits",
      definition: "Cap-and-trade system for pollution rights.",
    },
    { term: "Subsidy", definition: "Payment to producers of merit goods." },
    { term: "Provision", definition: "Government directly supplies the good." },
    {
      term: "Regulation",
      definition: "Legal rules governing production/consumption.",
    },
    {
      term: "Information provision",
      definition: "Government campaigns to correct information failure.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u2-correct",
      title: "Policies for Externalities",
      skill: "Evaluate taxes, subsidies, permits and regulation.",
      lesson: {
        sections: [
          {
            heading: "Negative externality policies",
            body: "**Pigouvian tax**: tax = external cost — shifts MSC to MPC, price rises to social optimum. **Tradable permits**: government caps total pollution, firms buy/sell permits — market finds cheapest abatement. **Regulation**: ban/limit harmful activity — e.g., emissions standards.\n\n**Evaluation**: taxes/permits flexible and cost-effective but need accurate externality measurement; regulation simple but rigid.",
          },
          {
            heading: "Positive externality policies",
            body: "**Subsidy**: lowers cost of merit goods — education, healthcare. **Provision**: government supplies directly — public goods like defence. **Information campaigns**: correct information failure — anti-smoking ads.\n\n**Evaluation**: subsidies may benefit producers not consumers; provision costly but ensures universal access; information campaigns cheap but may not change behaviour.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Carbon emissions need capping. Which policy is most market-based?",
          solution: "Tradable permits.",
        },
      },
      questions: [
        {
          id: "eias-econ-u2-corr-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a Pigouvian tax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax equal to the external cost" },
              { id: "b", text: "Any indirect tax" },
              { id: "c", text: "Tax on income" },
              { id: "d", text: "Tax rebate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pigouvian tax",
                statement: "Tax = external cost.",
              },
            ],
            steps: [
              {
                reasoning: "Pigouvian = tax equals externality.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Tax = external cost",
            commonErrors: ["Any tax confused."],
          },
        },
        {
          id: "eias-econ-u2-corr-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of tradable pollution permits over a tax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Permits vs tax",
                statement: "Certainty vs price.",
              },
            ],
            steps: [
              {
                reasoning: "Guarantees emissions cap — quantity certainty.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Firms that abate cheaply sell permits — cost-effective.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Tax doesn't guarantee quantity — only price effect.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Emissions certainty + cost-effectiveness.",
            commonErrors: ["Tax better always.", "Only one."],
          },
        },
        {
          id: "eias-econ-u2-corr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why government provision may be necessary for public goods.",
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
                reasoning: "Non-excludable — can't charge users.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Non-rival — marginal cost zero, efficient to supply freely.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Free-rider problem → no private incentive to supply.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Government funds via taxation — provides at zero/low price.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Free-riders → private under-supply → govt provides.",
            commonErrors: ["Private works.", "No reason."],
          },
        },
        {
          id: "eias-econ-u2-corr-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government must reduce traffic congestion in a city centre.",
          parts: [
            { label: "a", prompt: "Identify the market failure.", marks: 3 },
            {
              label: "b",
              prompt: "Evaluate congestion charging vs road building.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Congestion policy",
                statement: "Demand management.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Negative externality — congestion imposes costs on others.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Drivers don't pay for delays they cause.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Congestion charge: reduces demand directly, revenue raised — but regressive, may displace traffic.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Road building: increases supply — but induces more demand (rebound effect), costly.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Best: combine — charge + invest revenue in public transport.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) neg externality (b) charge vs build trade-off",
            commonErrors: ["No failure.", "One option only."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u2-eval",
      title: "Evaluating Government Intervention",
      skill: "Critically assess when intervention helps or harms.",
      lesson: {
        sections: [
          {
            heading: "Case for intervention",
            body: "Corrects market failure — externalities, public goods, inequality. Protects vulnerable groups — consumers, workers. Provides merit goods — education, health. Ensures stability — competition policy, regulation.\n\n**Costs of intervention**: government failure — poor information, bureaucracy, regulatory capture, unintended consequences.",
          },
          {
            heading: "Government failure",
            body: "**Regulatory capture**: regulators serve industry not public. **Unintended consequences**: minimum wage → unemployment; rent control → shortage. **Information problems**: government lacks market knowledge. **Bureaucracy**: slow, costly, distorting.\n\n**Evaluation**: intervention justified when market failure severe and government can correct effectively; harmful when costs exceed benefits.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Rent control creates housing shortage. Failure type?",
          solution: "Government failure — unintended consequence.",
        },
      },
      questions: [
        {
          id: "eias-econ-u2-eval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is government failure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government bankruptcy" },
              { id: "b", text: "Policy success" },
              { id: "c", text: "Market failure" },
              { id: "d", text: "Intervention making outcomes worse" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Government failure",
                statement: "Worse outcomes.",
              },
            ],
            steps: [
              {
                reasoning: "Gov failure = intervention worsens.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Worse outcomes",
            commonErrors: ["Market failure confused."],
          },
        },
        {
          id: "eias-econ-u2-eval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of government failure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gov failure",
                statement: "Unintended consequences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Minimum wage → unemployment if set above equilibrium.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rent control → housing shortage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Agricultural subsidies → surplus production, waste.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Min wage, rent control, farm subsidies.",
            commonErrors: ["Market failure.", "Only one."],
          },
        },
        {
          id: "eias-econ-u2-eval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain regulatory capture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Regulatory capture",
                statement: "Industry influence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Regulators develop close ties with regulated industry.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Industry provides expertise, jobs, revolving door.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Regulator serves industry interests not public.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Result: weak enforcement, industry-friendly rules.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Regulator captured by industry → weak rules.",
            commonErrors: ["Strong regulation.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u2-eval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A government proposes banning all sugary drinks.",
          parts: [
            { label: "a", prompt: "Evaluate this intervention.", marks: 4 },
            { label: "b", prompt: "Suggest a better alternative.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Policy evaluation",
                statement: "Ban vs nudge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Ban: reduces consumption but paternalistic, black market, enforcement cost.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) May violate consumer choice — government failure risk.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Sugar tax — raises price, reduces demand, raises revenue.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Information campaigns — nudge without banning.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) ban too harsh (b) tax/campaigns better",
            commonErrors: ["Ban good.", "No alternative."],
          },
        },
      ],
    },
  ],
};
