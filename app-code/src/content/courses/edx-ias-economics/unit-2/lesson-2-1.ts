import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "eias-econ-u2-lesson-2-1",
  code: "2-1",
  title: "Externalities",
  goal: "I CAN explain positive and negative externalities and their correction.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 2 — Market Failure"],
  vocabulary: [
    {
      term: "Externality",
      definition:
        "Cost or benefit affecting third parties not involved in transaction.",
    },
    {
      term: "Negative externality",
      definition: "External cost — e.g., pollution from production.",
    },
    {
      term: "Positive externality",
      definition: "External benefit — e.g., vaccination protecting others.",
    },
    { term: "Social cost", definition: "Private cost + external cost." },
    {
      term: "Social benefit",
      definition: "Private benefit + external benefit.",
    },
    {
      term: "Deadweight loss",
      definition: "Welfare lost when market output ≠ socially optimal.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u2-ext",
      title: "Externalities and Market Failure",
      skill: "Explain how externalities cause market failure.",
      lesson: {
        sections: [
          {
            heading: "Negative externalities",
            body: "Production/consumption imposes costs on third parties — pollution, noise, congestion. **Social cost > private cost** → market produces MORE than socially optimal → over-consumption of polluting goods.\n\n**Example**: factory pollution — firm pays private cost only, society bears health/environmental costs.",
          },
          {
            heading: "Positive externalities",
            body: "Consumption/production benefits third parties — vaccination (herd immunity), education (informed citizens), beekeeping (pollination). **Social benefit > private benefit** → market produces LESS than optimal → under-consumption.\n\n**Example**: student education benefits employer/society, but student only considers own benefit.",
          },
        ],
        keyFormulas: [
          { name: "Social cost", statement: "Private cost + external cost." },
          {
            name: "Social benefit",
            statement: "Private benefit + external benefit.",
          },
        ],
        workedExample: {
          problem: "Smoking causes health costs to NHS. Externality type?",
          solution: "Negative consumption externality.",
        },
      },
      questions: [
        {
          id: "eias-econ-u2-ext-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a negative externality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Internal cost" },
              { id: "b", text: "External cost on third parties" },
              { id: "c", text: "Profit loss" },
              { id: "d", text: "External benefit" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative externality",
                statement: "External cost.",
              },
            ],
            steps: [
              {
                reasoning: "Negative externality = cost to third parties.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** External cost",
            commonErrors: ["Positive confused."],
          },
        },
        {
          id: "eias-econ-u2-ext-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of positive externalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Positive externalities",
                statement: "Third-party benefits.",
              },
            ],
            steps: [
              {
                reasoning: "Vaccination — herd immunity protects unvaccinated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Education — benefits employer, society, economy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Beekeeping — pollination benefits nearby farms.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Vaccination, education, pollination.",
            commonErrors: ["Negative.", "Only one."],
          },
        },
        {
          id: "eias-econ-u2-ext-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why negative externalities lead to over-production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Externality and output",
                statement: "MSC > MPC.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Firms consider private cost only — ignore external cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social marginal cost > private marginal cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Market produces where MPC=MPB — beyond socially optimal point.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Result: too much polluting output — deadweight loss.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Private cost < social cost → over-production.",
            commonErrors: ["Under-production.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u2-ext-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A factory pollutes a river affecting downstream farms.",
          parts: [
            { label: "a", prompt: "Identify the externality.", marks: 3 },
            {
              label: "b",
              prompt: "Explain market failure and suggest correction.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Externality correction",
                statement: "Internalise cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Negative production externality — third parties bear cost.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Downstream farms suffer — not compensated.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Market over-produces — social cost exceeds private.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Pigouvian tax — tax equals external cost, internalises it.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Or tradable pollution permits — cap total emissions.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) neg externality (b) tax/permits",
            commonErrors: ["Positive.", "No correction."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u2-public",
      title: "Public Goods and Merit/Demerit Goods",
      skill: "Explain public goods, merit goods and demerit goods.",
      lesson: {
        sections: [
          {
            heading: "Public goods",
            body: "**Non-rival**: one person's consumption doesn't reduce others'. **Non-excludable**: can't prevent free-riders. Examples: national defence, street lighting, flood defences.\n\n**Free-rider problem**: people benefit without paying → private firms won't supply → government must provide or under-provision occurs.",
          },
          {
            heading: "Merit and demerit goods",
            body: "**Merit goods**: under-consumed due to information failure — education, healthcare. Government intervenes via subsidies/provision. **Demerit goods**: over-consumed — tobacco, alcohol, junk food. Intervene via taxes/regulation.\n\n**Information failure**: consumers don't fully understand consequences — under/over-consume relative to optimum.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Everyone can use a lighthouse whether they pay or not. Issue?",
          solution: "Non-excludable — free-rider problem.",
        },
      },
      questions: [
        {
          id: "eias-econ-u2-pg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What makes a good a public good?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-rival and non-excludable" },
              { id: "b", text: "Government owned" },
              { id: "c", text: "Free" },
              { id: "d", text: "Expensive" },
            ],
            correctChoiceId: "a",
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
              {
                reasoning: "Public good = both characteristics.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Non-rival + non-excludable",
            commonErrors: ["Free confused."],
          },
        },
        {
          id: "eias-econ-u2-pg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of merit goods and why they're under-consumed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merit goods",
                statement: "Information failure.",
              },
            ],
            steps: [
              {
                reasoning: "Education, healthcare — benefits underestimated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumers don't see long-term benefits — myopia.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Positive externalities — social benefit > private benefit.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Education, healthcare — info failure + externality.",
            commonErrors: ["Demerit.", "Only one."],
          },
        },
        {
          id: "eias-econ-u2-pg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the free-rider problem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Free-rider",
                statement: "Non-excludable.",
              },
            ],
            steps: [
              {
                reasoning: "Can't exclude non-payers from public goods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Rational individuals won't pay — benefit without paying.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "If everyone free-rides, no revenue → no private supply.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Government must provide — funded by taxation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Non-payment → under-provision → govt provides.",
            commonErrors: ["No problem.", "Excludable."],
          },
        },
        {
          id: "eias-econ-u2-pg-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government considers making university education free.",
          parts: [
            {
              label: "a",
              prompt: "Classify education as merit or demerit and justify.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Suggest an alternative intervention.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Merit good policy",
                statement: "Under-consumption.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Merit good — positive externalities, under-consumed.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Education benefits society — skilled workforce, innovation.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Subsidise tuition — lower cost, increase demand.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Or income-contingent loans — students pay when earning.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) merit+externalities (b) subsidy/loans",
            commonErrors: ["Demerit.", "Free only."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u2-info",
      title: "Information Failure and Asymmetric Information",
      skill: "Explain how imperfect information causes market failure.",
      lesson: {
        sections: [
          {
            heading: "Asymmetric information",
            body: "One party knows more than the other — **adverse selection** (hidden characteristics) and **moral hazard** (hidden actions).\n\n**Example**: used car market — seller knows defects, buyer doesn't → buyer fears lemons → market shrinks. Insurance — insured takes more risks after buying (moral hazard).",
          },
          {
            heading: "Other information problems",
            body: "**Merit goods**: consumers underestimate benefits (education). **Demerit goods**: underestimate harms (smoking). **Search goods**: quality known before purchase (clothes). **Experience goods**: known after use (restaurant). **Credence goods**: quality hard to assess even after (medical care).\n\n**Solutions**: regulation, warranties, certification, government provision, advertising.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Patient can't judge doctor's competence. Good type?",
          solution: "Credence good.",
        },
      },
      questions: [
        {
          id: "eias-econ-u2-info-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is asymmetric information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Public information" },
              { id: "b", text: "One party knows more than the other" },
              { id: "c", text: "Equal knowledge" },
              { id: "d", text: "No information" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Asymmetric info",
                statement: "Unequal knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Asymmetric = unequal information.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Unequal knowledge",
            commonErrors: ["Symmetric confused."],
          },
        },
        {
          id: "eias-econ-u2-info-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish adverse selection from moral hazard.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Info problems",
                statement: "Before vs after.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adverse selection: hidden characteristics before contract — bad risks select insurance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Moral hazard: hidden actions after contract — insured takes more risks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Both arise from asymmetric information.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Adverse=before, moral=after.",
            commonErrors: ["Same thing.", "Reversed."],
          },
        },
        {
          id: "eias-econ-u2-info-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how asymmetric information causes the used car market to shrink.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lemons problem",
                statement: "Info asymmetry.",
              },
            ],
            steps: [
              {
                reasoning: "Seller knows car quality; buyer doesn't.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Buyer can't distinguish good from bad cars — assumes average.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Good car sellers withdraw — can't get fair price.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Market shrinks to only lemons — adverse selection.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Info asymmetry → good cars leave → lemons remain.",
            commonErrors: ["Market grows.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u2-info-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Insurance companies face moral hazard.",
          parts: [
            {
              label: "a",
              prompt: "Explain moral hazard in insurance.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Moral hazard",
                statement: "Hidden actions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Insured takes more risks — insured against losses.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Company can't observe behaviour — hidden action.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Excess/deductible — insured bears first costs.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Monitoring/conditions — no-claims bonuses, safety requirements.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) risk-taking hidden (b) excess+monitoring",
            commonErrors: ["Adverse selection.", "No solution."],
          },
        },
      ],
    },
  ],
};
