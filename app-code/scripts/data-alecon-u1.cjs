module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson411",
    lesson: {
      id: "ciealecon-u1-lesson-1-1", code: "1-1",
      title: "Demand and Supply",
      goal: "I CAN explain demand/supply curves, shifts and market equilibrium.",
      standards: ["Cambridge A Level Economics 9708", "Paper 1: microeconomics"],
      vocabulary: [
        { term: "Demand", definition: "Quantity of good consumers willing/able to buy at each price." },
        { term: "Supply", definition: "Quantity producers willing/able to sell at each price." },
        { term: "Market equilibrium", definition: "Price where demand equals supply." },
        { term: "Shift in demand", definition: "Change in quantity demanded at all prices." },
        { term: "Extension/contraction", definition: "Movement along demand curve due to price." },
        { term: "Consumer surplus", definition: "Difference between willingness to pay and actual price." },
      ],
      concept: {
        id: "ciealecon-u1-s1-ds", title: "Demand and supply",
        skill: "Analyse market equilibrium and shifts.",
        sections: [
          { heading: "Demand curve", body: "Downward sloping — law of demand. Price ↑ → quantity demanded ↓. Shifts caused by non-price factors: income, preferences, prices of substitutes/complements, expectations." },
          { heading: "Supply curve", body: "Upward sloping — law of supply. Price ↑ → quantity supplied ↑. Shifts caused by: costs of production, technology, number of sellers, expectations, taxes/subsidies." },
          { heading: "Equilibrium", body: "Where demand = supply. Price adjusts to clear market. Surplus: supply > demand → price falls. Shortage: demand > supply → price rises." },
        ],
        keyFormulas: [
          { name: "Law of demand", statement: "P↑ → Qd↓" },
          { name: "Law of supply", statement: "P↑ → Qs↑" },
          { name: "Equilibrium", statement: "Qd = Qs" },
        ],
        workedExample: {
          problem: "Demand increases (shift right) but supply unchanged. What happens to price and quantity?",
          solution: "New equilibrium: higher price, higher quantity. Both consumers and producers benefit from increased trade.",
        },
        questions: [
          {
            id: "ciealecon-u1-ds-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is the law of demand?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Price ↑ → quantity demanded ↓" }, { id: "b", text: "Price ↑ → quantity demanded ↑" }, { id: "c", text: "Price ↓ → quantity supplied ↓" }, { id: "d", text: "Price and quantity always move together" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "law", name: "Law of demand", statement: "Inverse relationship." }],
              steps: [{ reasoning: "As price rises, quantity demanded falls.", marks: 1, markCode: "M" }],
              finalAnswer: "P↑ → Qd↓",
            },
          },
          {
            id: "ciealecon-u1-ds-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What causes a shift in demand (not movement along)?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Shift in demand", statement: "Non-price factors." }],
              steps: [
                { reasoning: "Changes at all price levels.", marks: 1, markCode: "M" },
                { reasoning: "Income, preferences, substitute/complement prices, expectations.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Non-price factors",
            },
          },
          {
            id: "ciealecon-u1-ds-q3", difficulty: "core", totalMarks: 3,
            stem: "What is market equilibrium? What happens if price is above equilibrium?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Equilibrium", statement: "Qd = Qs." }],
              steps: [
                { reasoning: "Price where demand = supply.", marks: 1, markCode: "M" },
                { reasoning: "Above equilibrium: surplus, price falls.", marks: 1, markCode: "M" },
                { reasoning: "Below equilibrium: shortage, price rises.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Qd = Qs equilibrium",
            },
          },
          {
            id: "ciealecon-u1-ds-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define demand, supply, equilibrium, shift, extension/contraction, consumer surplus. (b) What is law of demand? (c) What is law of supply? (d) What causes demand shifts? (e) What causes supply shifts? (f) What is market equilibrium? (g) What happens if price above/below equilibrium? (h) Evaluate whether price mechanism efficiently allocates resources.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Demand/supply", statement: "Analysis, equilibrium." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) P↑ Qd↓.", marks: 1, markCode: "M" },
                { reasoning: "(c) P↑ Qs↑.", marks: 1, markCode: "M" },
                { reasoning: "(d) Income, preferences, etc.", marks: 1, markCode: "M" },
                { reasoning: "(e) Costs, technology, taxes.", marks: 1, markCode: "M" },
                { reasoning: "(f) Qd = Qs.", marks: 1, markCode: "M" },
                { reasoning: "(g) Surplus/shortage adjustments.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Demand and supply analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u1-ds-notes", title: "Demand/supply — notes",
      summary: "Law of demand: P↑Qd↓. Law of supply: P↑Qs↑. Equilibrium where Qd=Qs.",
      sections: [
        { heading: "Key idea", body: "Price mechanism allocates resources through supply/demand equilibrium." },
        { heading: "Shifts vs movements", body: "Shifts = non-price factors; movements = price changes." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson412",
    lesson: {
      id: "ciealecon-u1-lesson-1-2", code: "1-2",
      title: "Elasticity of Demand and Supply",
      goal: "I CAN calculate and interpret price, income and cross elasticity.",
      standards: ["Cambridge A Level Economics 9708", "Paper 1: elasticity"],
      vocabulary: [
        { term: "Price elasticity of demand (PED)", definition: "% change in quantity demanded / % change in price." },
        { term: "Income elasticity of demand (YED)", definition: "% change in quantity demanded / % change in income." },
        { term: "Cross elasticity of demand (XED)", definition: "% change in Qd of good A / % change in price of good B." },
        { term: "Price elasticity of supply (PES)", definition: "% change in quantity supplied / % change in price." },
        { term: "Elastic demand", definition: "PED > 1 — quantity changes more than price." },
        { term: "Inelastic demand", definition: "PED < 1 — quantity changes less than price." },
      ],
      concept: {
        id: "ciealecon-u1-s2-elast", title: "Elasticity",
        skill: "Calculate and interpret elasticity measures.",
        sections: [
          { heading: "PED", body: "PED = (%ΔQd)/(%ΔP). Elastic (>1): luxury goods, many substitutes. Inelastic (<1): necessities, few substitutes, habit. Unit elastic (=1)." },
          { heading: "YED", body: "YED = (%ΔQd)/(%ΔY). Normal good (>0): demand rises with income. Inferior good (<0): demand falls with income. Necessity (0<YED<1), luxury (>1)." },
          { heading: "XED", body: "XED = (%ΔQd A)/(%ΔP B). Substitute (>0): price of B up → demand for A up. Complement (<0): price of B up → demand for A down." },
        ],
        keyFormulas: [
          { name: "PED", statement: "%ΔQd/%ΔP" },
          { name: "YED", statement: "%ΔQd/%ΔY" },
          { name: "XED", statement: "%ΔQdA/%ΔPB" },
        ],
        workedExample: {
          problem: "Price rises 10%, quantity demanded falls 20%. Calculate PED.",
          solution: "PED = 20/10 = 2. Elastic demand — quantity responds strongly to price.",
        },
        questions: [
          {
            id: "ciealecon-u1-el-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What does PED = 2 mean?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Elastic demand — quantity changes twice as much as price" }, { id: "b", text: "Inelastic demand" }, { id: "c", text: "Unit elastic" }, { id: "d", text: "No demand response" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "PED", statement: "Elasticity measure." }],
              steps: [{ reasoning: "PED=2 means elastic — Q responds 2× price change.", marks: 1, markCode: "M" }],
              finalAnswer: "Elastic demand",
            },
          },
          {
            id: "ciealecon-u1-el-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the difference between normal and inferior goods?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Normal vs inferior", statement: "YED sign." }],
              steps: [
                { reasoning: "Normal: YED > 0, demand rises with income.", marks: 1, markCode: "M" },
                { reasoning: "Inferior: YED < 0, demand falls with income.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Normal vs inferior",
            },
          },
          {
            id: "ciealecon-u1-el-q3", difficulty: "core", totalMarks: 3,
            stem: "What do positive and negative XED values indicate?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "XED", statement: "Cross elasticity." }],
              steps: [
                { reasoning: "Positive XED: substitutes.", marks: 1, markCode: "M" },
                { reasoning: "Negative XED: complements.", marks: 1, markCode: "M" },
                { reasoning: "Determines relationship between goods.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Substitutes vs complements",
            },
          },
          {
            id: "ciealecon-u1-el-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define PED, YED, XED, PES, elastic, inelastic. (b) What is PED formula? (c) What is YED? (d) What is XED? (e) What does PED>1 mean? (f) What does YED<0 mean? (g) What does positive XED indicate? (h) Evaluate how elasticity affects pricing decisions.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Elasticity", statement: "Calculation, interpretation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) %ΔQd/%ΔP.", marks: 1, markCode: "M" },
                { reasoning: "(c) %ΔQd/%ΔY.", marks: 1, markCode: "M" },
                { reasoning: "(d) %ΔQdA/%ΔPB.", marks: 1, markCode: "M" },
                { reasoning: "(e) Elastic demand.", marks: 1, markCode: "M" },
                { reasoning: "(f) Inferior good.", marks: 1, markCode: "M" },
                { reasoning: "(g) Substitutes.", marks: 1, markCode: "M" },
                { reasoning: "(h) Elasticity informs pricing strategy.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Elasticity analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u1-el-notes", title: "Elasticity — notes",
      summary: "PED=%ΔQd/%ΔP. YED=%ΔQd/%ΔY. XED=%ΔQdA/%ΔPB. Interpret signs and magnitudes.",
      sections: [
        { heading: "Key idea", body: "Elasticity measures responsiveness — crucial for pricing and tax policy." },
        { heading: "Applications", body: "PED informs tax incidence, revenue maximisation; YED for income effects; XED for product relationships." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson413",
    lesson: {
      id: "ciealecon-u1-lesson-1-3", code: "1-3",
      title: "Market Failure",
      goal: "I CAN explain externalities, public goods, information asymmetry and market failure.",
      standards: ["Cambridge A Level Economics 9708", "Paper 1: market failure"],
      vocabulary: [
        { term: "Market failure", definition: "Free market fails to allocate resources efficiently." },
        { term: "Externality", definition: "Cost/benefit affecting third parties." },
        { term: "Negative externality", definition: "Harmful spillover (pollution)." },
        { term: "Positive externality", definition: "Beneficial spillover (vaccination)." },
        { term: "Public good", definition: "Non-rival, non-excludable good." },
        { term: "Information asymmetry", definition: "Unequal information between parties." },
      ],
      concept: {
        id: "ciealecon-u1-s3-mf", title: "Market failure",
        skill: "Analyse sources of market failure.",
        sections: [
          { heading: "Externalities", body: "Negative: MSC > MPC → overproduction (pollution). Positive: MSB > MPB → underproduction (education). Social optimum where MSC=MSB." },
          { heading: "Public goods", body: "Non-rival (one person's use doesn't reduce others') and non-excludable (can't prevent use). Free rider problem → underprovided by market. Examples: defence, street lighting." },
          { heading: "Information asymmetry", body: "Adverse selection (hidden info before contract) and moral hazard (hidden action after contract). Can lead to market collapse (lemons problem)." },
        ],
        keyFormulas: [
          { name: "Externality", statement: "third-party effects" },
          { name: "Public good", statement: "non-rival, non-excludable" },
          { name: "Market failure", statement: "inefficient allocation" },
        ],
        workedExample: {
          problem: "Why does the market underprovide vaccination?",
          solution: "Positive externality — benefits others (herd immunity) not captured by individual. MSB > MPB → underproduction.",
        },
        questions: [
          {
            id: "ciealecon-u1-mf-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is market failure?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Free market fails to allocate resources efficiently" }, { id: "b", text: "Market always works perfectly" }, { id: "c", text: "Government failure" }, { id: "d", text: "A type of monopoly" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Market failure", statement: "Inefficiency." }],
              steps: [{ reasoning: "Market failure = inefficient allocation.", marks: 1, markCode: "M" }],
              finalAnswer: "Inefficient allocation",
            },
          },
          {
            id: "ciealecon-u1-mf-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a negative externality? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Negative externality", statement: "Harmful spillover." }],
              steps: [
                { reasoning: "Cost affecting third parties.", marks: 1, markCode: "M" },
                { reasoning: "Example: pollution from production.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Harmful spillover example",
            },
          },
          {
            id: "ciealecon-u1-mf-q3", difficulty: "core", totalMarks: 3,
            stem: "Why are public goods underprovided by markets?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Public good", statement: "Non-rival/excludable." }],
              steps: [
                { reasoning: "Non-excludable → free rider problem.", marks: 1, markCode: "M" },
                { reasoning: "Non-rival → marginal cost zero.", marks: 1, markCode: "M" },
                { reasoning: "No incentive for private provision.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Free rider problem",
            },
          },
          {
            id: "ciealecon-u1-mf-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define market failure, externality, negative externality, positive externality, public good, information asymmetry. (b) What is market failure? (c) What is a negative externality? (d) What is a positive externality? (e) Why are public goods underprovided? (f) What is information asymmetry? (g) How does externality cause over/underproduction? (h) Evaluate government intervention to correct market failure.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Market failure", statement: "Sources, solutions." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Inefficient allocation.", marks: 1, markCode: "M" },
                { reasoning: "(c) Harmful spillover.", marks: 1, markCode: "M" },
                { reasoning: "(d) Beneficial spillover.", marks: 1, markCode: "M" },
                { reasoning: "(e) Free rider problem.", marks: 1, markCode: "M" },
                { reasoning: "(f) Unequal information.", marks: 1, markCode: "M" },
                { reasoning: "(g) MSC/MSB divergence.", marks: 1, markCode: "M" },
                { reasoning: "(h) Taxes/subsidies can help but imperfect.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Market failure analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u1-mf-notes", title: "Market failure — notes",
      summary: "Externalities, public goods, information asymmetry → market inefficiency.",
      sections: [
        { heading: "Key idea", body: "Free markets can fail to allocate resources efficiently." },
        { heading: "Solutions", body: "Taxes (negative ext), subsidies (positive ext), provision (public goods), regulation (information)." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson414",
    lesson: {
      id: "ciealecon-u1-lesson-1-4", code: "1-4",
      title: "Government Intervention",
      goal: "I CAN evaluate taxes, subsidies, price controls and other interventions.",
      standards: ["Cambridge A Level Economics 9708", "Paper 1: intervention"],
      vocabulary: [
        { term: "Indirect tax", definition: "Tax on goods/services (VAT, excise)." },
        { term: "Subsidy", definition: "Government payment to producers/consumers." },
        { term: "Price ceiling", definition: "Maximum price set by government." },
        { term: "Price floor", definition: "Minimum price set by government." },
        { term: "Deadweight loss", definition: "Loss of economic welfare from market distortion." },
        { term: "Incidence", definition: "Who bears the burden of tax/subsidy." },
      ],
      concept: {
        id: "ciealecon-u1-s4-int", title: "Government intervention",
        skill: "Evaluate intervention effects.",
        sections: [
          { heading: "Taxes and subsidies", body: "Indirect tax raises price, reduces quantity → deadweight loss. Subsidy lowers price, increases quantity → also creates deadweight loss but may correct externality." },
          { heading: "Price controls", body: "Ceiling (max price): below equilibrium → shortage. Floor (min price): above equilibrium → surplus. Both create inefficiency." },
          { heading: "Evaluation", body: "Intervention can correct market failure but creates government failure — unintended consequences, inefficiency, lobbying." },
        ],
        keyFormulas: [
          { name: "Indirect tax", statement: "tax on goods" },
          { name: "Subsidy", statement: "producer support" },
          { name: "Deadweight loss", statement: "welfare loss" },
        ],
        workedExample: {
          problem: "A £2 tax is placed on cigarettes. Who bears the burden?",
          solution: "Depends on PED/PES. Inelastic demand → consumers bear most. Elastic demand → producers bear more.",
        },
        questions: [
          {
            id: "ciealecon-u1-int-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is an indirect tax?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Tax on goods/services" }, { id: "b", text: "Tax on income" }, { id: "c", text: "A subsidy" }, { id: "d", text: "A price control" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Indirect tax", statement: "Goods tax." }],
              steps: [{ reasoning: "Indirect tax = tax on goods/services.", marks: 1, markCode: "M" }],
              finalAnswer: "Goods/services tax",
            },
          },
          {
            id: "ciealecon-u1-int-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a price ceiling? What problem does it cause?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Price ceiling", statement: "Max price." }],
              steps: [
                { reasoning: "Maximum price set by government.", marks: 1, markCode: "M" },
                { reasoning: "Below equilibrium → shortage.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Max price causes shortage",
            },
          },
          {
            id: "ciealecon-u1-int-q3", difficulty: "core", totalMarks: 3,
            stem: "What determines who bears the burden of a tax?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Tax incidence", statement: "Burden distribution." }],
              steps: [
                { reasoning: "PED and PES determine incidence.", marks: 1, markCode: "M" },
                { reasoning: "Less elastic side bears more.", marks: 1, markCode: "M" },
                { reasoning: "Consumers vs producers split depends on elasticities.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Elasticity determines incidence",
            },
          },
          {
            id: "ciealecon-u1-int-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define indirect tax, subsidy, price ceiling, price floor, deadweight loss, incidence. (b) What is indirect tax? (c) What is a subsidy? (d) What is price ceiling? (e) What is deadweight loss? (f) How does tax incidence work? (g) Why might government intervention fail? (h) Evaluate whether government should intervene in markets.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Intervention", statement: "Evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Goods/services tax.", marks: 1, markCode: "M" },
                { reasoning: "(c) Producer support.", marks: 1, markCode: "M" },
                { reasoning: "(d) Max price.", marks: 1, markCode: "M" },
                { reasoning: "(e) Welfare loss.", marks: 1, markCode: "M" },
                { reasoning: "(f) Elasticity determines burden.", marks: 1, markCode: "M" },
                { reasoning: "(g) Government failure, unintended consequences.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Government intervention analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealecon-u1-int-notes", title: "Intervention — notes",
      summary: "Taxes/subsidies/price controls distort markets. Incidence depends on elasticity.",
      sections: [
        { heading: "Key idea", body: "Intervention can correct market failure but creates inefficiency." },
        { heading: "Government failure", body: "Intervention may create worse problems than it solves." },
      ],
    },
  },
];
