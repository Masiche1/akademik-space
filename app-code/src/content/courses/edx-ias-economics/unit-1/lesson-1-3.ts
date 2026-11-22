import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "eias-econ-u1-lesson-1-3",
  code: "1-3",
  title: "Government Intervention in Markets",
  goal: "I CAN explain why and how governments intervene in markets.",
  standards: ["Edexcel IAS Economics 9EC01 Unit 1 — Introduction to Markets"],
  vocabulary: [
    {
      term: "Government intervention",
      definition: "State action to correct market outcomes.",
    },
    {
      term: "Subsidy",
      definition: "Government payment to producers to lower prices.",
    },
    {
      term: "Indirect tax",
      definition: "Tax on goods/services raising consumer prices.",
    },
    {
      term: "Price control",
      definition: "Government-set maximum or minimum prices.",
    },
    {
      term: "Maximum price",
      definition: "Legal price ceiling — e.g., rent control.",
    },
    {
      term: "Minimum price",
      definition: "Legal price floor — e.g., minimum wage.",
    },
  ],
  concepts: [
    {
      id: "eias-econ-u1-intervention",
      title: "Forms of Government Intervention",
      skill: "Explain subsidies, taxes and price controls.",
      lesson: {
        sections: [
          {
            heading: "Fiscal intervention",
            body: "**Subsidy**: government pays producer — supply shifts right, price falls, quantity rises. Used for merit goods (education, renewables). Cost: taxpayer burden, may overproduce.\n\n**Indirect tax**: tax on goods — price rises, quantity falls. Used to reduce consumption of demerit goods (tobacco, alcohol) — internalises externalities. **Ad valorem** (% of price) vs **specific** (per unit).",
          },
          {
            heading: "Price controls",
            body: "**Maximum price**: below equilibrium — aims to help consumers (rent control) but causes shortage if too low. **Minimum price**: above equilibrium — aims to help producers (minimum wage, agricultural support) but causes surplus.\n\n**Evaluation**: well-designed controls can help vulnerable groups; badly set ones create shortages/surpluses and black markets.",
          },
        ],
        keyFormulas: [
          {
            name: "Subsidy effect",
            statement: "Supply shifts right → price ↓, quantity ↑.",
          },
          { name: "Indirect tax effect", statement: "Price ↑, quantity ↓." },
        ],
        workedExample: {
          problem:
            "Government subsidises solar panels. Effect on price and quantity?",
          solution: "Price falls, quantity supplied increases.",
        },
      },
      questions: [
        {
          id: "eias-econ-u1-int-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a subsidy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Import ban" },
              { id: "b", text: "Government payment to producers" },
              { id: "c", text: "Tax on goods" },
              { id: "d", text: "Price ceiling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subsidy",
                statement: "Producer payment.",
              },
            ],
            steps: [
              {
                reasoning: "Subsidy = payment to producers.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Producer payment",
            commonErrors: ["Tax confused."],
          },
        },
        {
          id: "eias-econ-u1-int-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons governments use indirect taxes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indirect tax",
                statement: "Reduce harmful consumption.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reduce consumption of demerit goods — tobacco, alcohol.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Internalise externalities — price reflects social cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Raise government revenue.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Demerit reduction, externality correction, revenue.",
            commonErrors: ["Only one.", "Subsidy."],
          },
        },
        {
          id: "eias-econ-u1-int-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a maximum price below equilibrium causes a shortage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price ceiling",
                statement: "Qd > Qs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Price below equilibrium → quantity demanded exceeds supplied.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Producers have less incentive to supply at low price.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consumers want more but can't get it — shortage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "May create black market — goods sold illegally at higher price.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Qd>Qs → shortage + possible black market.",
            commonErrors: ["Surplus.", "No mechanism."],
          },
        },
        {
          id: "eias-econ-u1-int-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Government considers subsidising electric vehicles to cut pollution.",
          parts: [
            { label: "a", prompt: "Explain how the subsidy works.", marks: 4 },
            { label: "b", prompt: "Evaluate one drawback.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subsidy evaluation",
                statement: "Benefit vs cost.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Subsidy lowers producer cost → supply shifts right.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Price falls → quantity demanded and supplied rise.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Taxpayer cost — government must fund subsidy.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) May over-subsidise — firms profit without passing savings.",
                marks: 2,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer: "(a) S→right, P↓ Q↑ (b) taxpayer cost",
            commonErrors: ["Price rises.", "No drawback."],
          },
        },
      ],
    },
    {
      id: "eias-econ-u1-policy",
      title: "Competition Policy and Regulation",
      skill: "Explain why governments regulate markets and firms.",
      lesson: {
        sections: [
          {
            heading: "Why regulate",
            body: "Markets can fail: monopolies exploit consumers (high prices, low quality), negative externalities harm third parties, information asymmetry disadvantages buyers, natural monopolies need oversight.\n\n**Competition policy**: prevent anti-competitive behaviour — cartels, abuse of dominance, mergers that reduce competition.",
          },
          {
            heading: "Regulation types",
            body: "**Price regulation**: cap prices (utilities). **Quality regulation**: safety standards (food, drugs). **Conduct regulation**: rules on behaviour (advertising, data). **Structural regulation**: break up monopolies.\n\n**Example**: telecoms regulator caps prices, ensures network access for competitors.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Single company controls 95% of water supply. Problem?",
          solution: "Natural monopoly — needs price regulation.",
        },
      },
      questions: [
        {
          id: "eias-econ-u1-reg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a natural monopoly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Temporary monopoly" },
              {
                id: "b",
                text: "Monopoly due to high fixed costs — one firm most efficient",
              },
              { id: "c", text: "Illegal monopoly" },
              { id: "d", text: "Government monopoly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Natural monopoly",
                statement: "Cost structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Natural monopoly = economies of scale make one firm efficient.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Cost structure",
            commonErrors: ["Illegal confused."],
          },
        },
        {
          id: "eias-econ-u1-reg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons governments regulate monopolies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Monopoly regulation",
                statement: "Protect consumers.",
              },
            ],
            steps: [
              {
                reasoning: "Prevent exploitation — monopoly sets high prices.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Ensure quality — no competitive pressure to improve.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Promote efficiency — force cost reductions.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Price, quality, efficiency.",
            commonErrors: ["Only one.", "Wrong reason."],
          },
        },
        {
          id: "eias-econ-u1-reg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the trade-off in regulating a natural monopoly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Regulation trade-off",
                statement: "Efficiency vs competition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Breaking up natural monopoly loses economies of scale — higher costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Keeping monopoly needs regulation — prevents abuse but adds bureaucracy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Price caps may reduce investment incentive.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Best approach: regulate prices while allowing scale economies.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Scale economies vs consumer protection.",
            commonErrors: ["Break up always.", "No trade-off."],
          },
        },
        {
          id: "eias-econ-u1-reg-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three firms control 90% of a market and agree to fix prices.",
          parts: [
            {
              label: "a",
              prompt: "Identify the anti-competitive behaviour.",
              marks: 3,
            },
            { label: "b", prompt: "Explain two harms to consumers.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Collusion",
                statement: "Anti-competitive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Collusion/cartel — firms agree prices instead of competing.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Illegal in most jurisdictions — competition law breach.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Higher prices — no competition to drive them down.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Lower quality — no incentive to improve.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Reduced choice — consumers can't switch to cheaper alternatives.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) collusion (b) prices+quality+choice",
            commonErrors: ["Legal.", "No harm."],
          },
        },
      ],
    },
  ],
};
