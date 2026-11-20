module.exports = [
  {
    file: "lesson-2-1.ts", exportName: "lesson281",
    lesson: {
      id: "cieiec-u2-lesson-2-1", code: "2-1",
      title: "Price Elasticity of Demand",
      goal: "I CAN calculate and interpret price elasticity of demand.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 4: elasticity"],
      vocabulary: [
        { term: "Price elasticity of demand (PED)", definition: "Responsiveness of quantity demanded to price changes." },
        { term: "Elastic demand", definition: "PED > 1 — quantity changes more than price." },
        { term: "Inelastic demand", definition: "PED < 1 — quantity changes less than price." },
        { term: "Unit elastic", definition: "PED = 1 — proportional changes." },
        { term: "Perfectly elastic", definition: "PED = ∞ — any price change causes infinite response." },
        { term: "Perfectly inelastic", definition: "PED = 0 — quantity doesn't change with price." },
      ],
      concept: {
        id: "cieiec-u2-s1-ped", title: "Price elasticity of demand",
        skill: "Calculate and interpret PED.",
        sections: [
          { heading: "PED calculation", body: "PED = % change in quantity demanded / % change in price. Use midpoint formula: (ΔQ/Q_avg) / (ΔP/P_avg)." },
          { heading: "Elasticity types", body: "Elastic (>1): luxury goods, many substitutes. Inelastic (<1): necessities, few substitutes, habit-forming. Perfectly inelastic (0): life-saving drugs. Perfectly elastic (∞): rare." },
          { heading: "Factors affecting PED", body: "Substitutes availability, necessity vs luxury, proportion of income, time period, brand loyalty." },
        ],
        keyFormulas: [
          { name: "PED", statement: "%ΔQ / %ΔP" },
          { name: "Elastic", statement: "PED > 1" },
          { name: "Inelastic", statement: "PED < 1" },
        ],
        workedExample: {
          problem: "Price rises from $10 to $12, quantity falls from 100 to 80. Calculate PED.",
          solution: "%ΔQ = -20/90 = -22.2%, %ΔP = 2/11 = 18.2%. PED = 22.2/18.2 = 1.22 — elastic.",
        },
        questions: [
          {
            id: "cieiec-u2-pe-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is price elasticity of demand?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Responsiveness of quantity demanded to price changes" }, { id: "b", text: "Total revenue" }, { id: "c", text: "Market share" }, { id: "d", text: "Production cost" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "PED", statement: "Price responsiveness." }],
              steps: [{ reasoning: "PED measures how quantity responds to price.", marks: 1, markCode: "M" }],
              finalAnswer: "Price responsiveness",
            },
          },
          {
            id: "cieiec-u2-pe-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What does PED > 1 mean?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Elastic demand", statement: "PED > 1." }],
              steps: [
                { reasoning: "Elastic — quantity changes more than price.", marks: 1, markCode: "M" },
                { reasoning: "Consumers are price sensitive.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Quantity changes more than price",
            },
          },
          {
            id: "cieiec-u2-pe-q3", difficulty: "core", totalMarks: 3,
            stem: "Price rises from $5 to $6, quantity falls from 200 to 160. Calculate PED using midpoint formula.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "PED calculation", statement: "Midpoint formula." }],
              steps: [
                { reasoning: "%ΔQ = -40/180 = -22.2%, %ΔP = 1/5.5 = 18.2%.", marks: 1, markCode: "M" },
                { reasoning: "PED = 22.2/18.2 = 1.22.", marks: 1, markCode: "M" },
                { reasoning: "Elastic demand.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "PED = 1.22, elastic",
            },
          },
          {
            id: "cieiec-u2-pe-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define PED, elastic, inelastic, unit elastic, perfectly elastic, perfectly inelastic. (b) What is PED? (c) What does PED > 1 mean? (d) What does PED < 1 mean? (e) What factors affect PED? (f) Give an example of elastic demand. (g) Give an example of inelastic demand. (h) Why does a firm need to know PED?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "PED", statement: "Calculation, interpretation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Price responsiveness measure.", marks: 1, markCode: "M" },
                { reasoning: "(c) Quantity changes more than price.", marks: 1, markCode: "M" },
                { reasoning: "(d) Quantity changes less than price.", marks: 1, markCode: "M" },
                { reasoning: "(e) Substitutes, necessity, income share, time.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid elastic example.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid inelastic example.", marks: 1, markCode: "M" },
                { reasoning: "(h) Pricing decisions, revenue maximisation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Price elasticity of demand.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u2-pe-notes", title: "PED — notes",
      summary: "PED=%ΔQ/%ΔP. Elastic>1, inelastic<1, unit=1. Factors: substitutes, necessity, income share.",
      sections: [
        { heading: "Key idea", body: "PED determines whether price increases raise or lower total revenue." },
        { heading: "Application", body: "Firms use PED for pricing strategy — elastic goods can't raise prices." },
      ],
    },
  },
  {
    file: "lesson-2-2.ts", exportName: "lesson282",
    lesson: {
      id: "cieiec-u2-lesson-2-2", code: "2-2",
      title: "Market Structures",
      goal: "I CAN compare perfect competition, monopoly, oligopoly and monopolistic competition.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 4: market structures"],
      vocabulary: [
        { term: "Perfect competition", definition: "Many firms, identical products, free entry." },
        { term: "Monopoly", definition: "Single seller of unique product." },
        { term: "Oligopoly", definition: "Few large firms dominate market." },
        { term: "Monopolistic competition", definition: "Many firms, differentiated products." },
        { term: "Barriers to entry", definition: "Obstacles preventing new firms entering market." },
        { term: "Price maker", definition: "Firm that can set its own price." },
      ],
      concept: {
        id: "cieiec-u2-s2-mkt", title: "Market structures",
        skill: "Compare different market structures.",
        sections: [
          { heading: "Perfect competition", body: "Many firms, identical products, free entry/exit. Firms are price takers — no market power. Efficient but unrealistic." },
          { heading: "Monopoly", body: "Single seller, unique product, high barriers to entry. Price maker — can set prices. May exploit consumers but may invest in R&D." },
          { heading: "Oligopoly", body: "Few large firms (e.g. airlines, telecoms). Interdependent — one firm's actions affect others. Collusion possible. Kinked demand curve." },
          { heading: "Monopolistic competition", body: "Many firms, differentiated products (e.g. restaurants, clothing). Some market power through differentiation. Free entry/exit." },
        ],
        keyFormulas: [
          { name: "Perfect competition", statement: "many firms, identical products" },
          { name: "Monopoly", statement: "single seller, barriers" },
          { name: "Oligopoly", statement: "few firms, interdependent" },
          { name: "Monopolistic", statement: "many firms, differentiated" },
        ],
        workedExample: {
          problem: "A market has 5 large firms controlling 90% of sales. What structure is this?",
          solution: "Oligopoly — few firms dominate, interdependent pricing.",
        },
        questions: [
          {
            id: "cieiec-u2-ms-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a monopoly?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Single seller of unique product" }, { id: "b", text: "Many sellers" }, { id: "c", text: "Free market" }, { id: "d", text: "Perfect competition" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Monopoly", statement: "Single seller." }],
              steps: [{ reasoning: "Monopoly = single seller of unique product.", marks: 1, markCode: "M" }],
              finalAnswer: "Single seller",
            },
          },
          {
            id: "cieiec-u2-ms-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an oligopoly?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Oligopoly", statement: "Few dominant firms." }],
              steps: [
                { reasoning: "Few large firms dominate market.", marks: 1, markCode: "M" },
                { reasoning: "e.g. airlines, telecoms — interdependent.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Few dominant firms",
            },
          },
          {
            id: "cieiec-u2-ms-q3", difficulty: "core", totalMarks: 3,
            stem: "Compare perfect competition and monopoly.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Market comparison", statement: "Structure comparison." }],
              steps: [
                { reasoning: "Perfect: many firms, identical products, price takers.", marks: 1, markCode: "M" },
                { reasoning: "Monopoly: single firm, unique product, price maker.", marks: 1, markCode: "M" },
                { reasoning: "Monopoly has barriers to entry; perfect has free entry.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Many vs single seller",
            },
          },
          {
            id: "cieiec-u2-ms-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define perfect competition, monopoly, oligopoly, monopolistic competition, barriers to entry, price maker. (b) What is perfect competition? (c) What is monopoly? (d) What is oligopoly? (e) What is monopolistic competition? (f) What are barriers to entry? (g) Give an example of each structure. (h) Evaluate whether monopoly is always bad for consumers.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Market structures", statement: "Comparison and evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Many firms, identical products.", marks: 1, markCode: "M" },
                { reasoning: "(c) Single seller, unique product.", marks: 1, markCode: "M" },
                { reasoning: "(d) Few dominant firms.", marks: 1, markCode: "M" },
                { reasoning: "(e) Many firms, differentiated products.", marks: 1, markCode: "M" },
                { reasoning: "(f) Obstacles to entry.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid examples for each.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Market structures comparison.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u2-ms-notes", title: "Market structures — notes",
      summary: "Perfect=many identical; monopoly=single unique; oligopoly=few dominant; monopolistic=many differentiated.",
      sections: [
        { heading: "Key idea", body: "Market structure determines firm behaviour, pricing power and efficiency." },
        { heading: "Barriers", body: "High barriers protect monopolies/oligopolies from competition." },
      ],
    },
  },
  {
    file: "lesson-2-3.ts", exportName: "lesson283",
    lesson: {
      id: "cieiec-u2-lesson-2-3", code: "2-3",
      title: "Market Failure and Government Intervention",
      goal: "I CAN explain market failure and evaluate government intervention.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 4: market failure"],
      vocabulary: [
        { term: "Market failure", definition: "Free market fails to allocate resources efficiently." },
        { term: "Externality", definition: "Third-party effect of production/consumption." },
        { term: "Public good", definition: "Non-excludable, non-rivalrous good." },
        { term: "Merit good", definition: "Good under-consumed due to information asymmetry." },
        { term: "Government intervention", definition: "Government action to correct market failure." },
        { term: "Subsidy", definition: "Government payment to producers/consumers." },
      ],
      concept: {
        id: "cieiec-u2-s3-mf", title: "Market failure",
        skill: "Understand market failure and government responses.",
        sections: [
          { heading: "Market failure types", body: "Externalities: pollution (negative), education (positive). Public goods: national defence, street lighting — non-excludable, underprovided by market. Merit goods: healthcare, education — under-consumed due to information gaps. Inequality: market may produce unequal outcomes." },
          { heading: "Government intervention", body: "Taxes on negative externalities; subsidies for positive externalities/merit goods; provision of public goods; regulation; information provision." },
        ],
        keyFormulas: [
          { name: "Market failure", statement: "inefficient allocation" },
          { name: "Externality", statement: "third-party effect" },
          { name: "Public good", statement: "non-excludable, non-rivalrous" },
        ],
        workedExample: {
          problem: "Why does the market underprovide national defence?",
          solution: "Public good — non-excludable, non-rivalrous. Free riders benefit without paying. Market can't charge → underprovided.",
        },
        questions: [
          {
            id: "cieiec-u2-mf-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is market failure?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Free market fails to allocate resources efficiently" }, { id: "b", text: "Market is too efficient" }, { id: "c", text: "Government failure" }, { id: "d", text: "Perfect competition" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Market failure", statement: "Inefficient allocation." }],
              steps: [{ reasoning: "Market failure = inefficient resource allocation.", marks: 1, markCode: "M" }],
              finalAnswer: "Inefficient allocation",
            },
          },
          {
            id: "cieiec-u2-mf-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is an externality?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Externality", statement: "Third-party effect." }],
              steps: [
                { reasoning: "Third-party effect of production/consumption.", marks: 1, markCode: "M" },
                { reasoning: "e.g. pollution (negative), education (positive).", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Third-party effect",
            },
          },
          {
            id: "cieiec-u2-mf-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a public good? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Public good", statement: "Non-excludable, non-rivalrous." }],
              steps: [
                { reasoning: "Non-excludable, non-rivalrous good.", marks: 1, markCode: "M" },
                { reasoning: "Example: national defence, street lighting.", marks: 1, markCode: "M" },
                { reasoning: "Market underprovides due to free riders.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Non-excludable, non-rivalrous",
            },
          },
          {
            id: "cieiec-u2-mf-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define market failure, externality, public good, merit good, government intervention, subsidy. (b) What is market failure? (c) What is an externality? (d) What is a public good? Give an example. (e) What is a merit good? (f) How does government correct negative externalities? (g) How does government correct public goods? (h) Evaluate government intervention vs free markets.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Market failure", statement: "Types, intervention." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Inefficient allocation.", marks: 1, markCode: "M" },
                { reasoning: "(c) Third-party effect.", marks: 1, markCode: "M" },
                { reasoning: "(d) Non-excludable; e.g. defence.", marks: 1, markCode: "M" },
                { reasoning: "(e) Under-consumed due to info gaps.", marks: 1, markCode: "M" },
                { reasoning: "(f) Taxes, regulation.", marks: 1, markCode: "M" },
                { reasoning: "(g) Direct provision.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Market failure and intervention.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u2-mf-notes", title: "Market failure — notes",
      summary: "Market failure=inefficiency. Causes: externalities, public goods, merit goods, inequality. Government intervenes via taxes, subsidies, provision.",
      sections: [
        { heading: "Key idea", body: "Free markets don't always allocate resources efficiently — government may need to intervene." },
        { heading: "Externalities", body: "Negative=tax; positive=subsidy. Public goods=direct provision." },
      ],
    },
  },
  {
    file: "lesson-2-4.ts", exportName: "lesson284",
    lesson: {
      id: "cieiec-u2-lesson-2-4", code: "2-4",
      title: "Macroeconomics: Aggregate Demand and Supply",
      goal: "I CAN explain aggregate demand, aggregate supply and macroeconomic equilibrium.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 6: macroeconomics"],
      vocabulary: [
        { term: "Aggregate demand (AD)", definition: "Total demand for goods/services in economy." },
        { term: "Aggregate supply (AS)", definition: "Total output economy can produce." },
        { term: "Macroeconomic equilibrium", definition: "Where AD=AS." },
        { term: "Inflation", definition: "Sustained rise in general price level." },
        { term: "Unemployment", definition: "People without work seeking employment." },
        { term: "Economic growth", definition: "Increase in real GDP." },
      ],
      concept: {
        id: "cieiec-u2-s4-ad", title: "Aggregate demand and supply",
        skill: "Understand macroeconomic equilibrium.",
        sections: [
          { heading: "Aggregate demand", body: "Total spending: consumption + investment + government spending + net exports (C+I+G+X-M). Downward sloping — higher prices reduce purchasing power." },
          { heading: "Aggregate supply", body: "Total output economy can produce. Short-run AS upward sloping (sticky wages/prices). Long-run AS vertical (full employment)." },
          { heading: "Macroeconomic equilibrium", body: "Where AD=AS determines output and price level. Shifts in AD/AS affect growth, inflation, unemployment." },
        ],
        keyFormulas: [
          { name: "AD", statement: "C+I+G+(X-M)" },
          { name: "Equilibrium", statement: "AD = AS" },
          { name: "Growth", statement: "increase in real GDP" },
        ],
        workedExample: {
          problem: "Government increases spending. What happens to AD and equilibrium?",
          solution: "AD shifts right → higher output and price level (inflationary pressure).",
        },
        questions: [
          {
            id: "cieiec-u2-ad-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is aggregate demand?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Total demand for goods/services in economy" }, { id: "b", text: "Individual demand" }, { id: "c", text: "Supply of goods" }, { id: "d", text: "A type of tax" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "AD", statement: "Total demand." }],
              steps: [{ reasoning: "AD = total spending in economy.", marks: 1, markCode: "M" }],
              finalAnswer: "Total demand",
            },
          },
          {
            id: "cieiec-u2-ad-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are the components of aggregate demand?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "AD components", statement: "C+I+G+X-M." }],
              steps: [
                { reasoning: "Consumption, investment, government spending, net exports.", marks: 1, markCode: "M" },
                { reasoning: "C+I+G+(X-M).", marks: 1, markCode: "M" },
              ],
              finalAnswer: "C+I+G+(X-M)",
            },
          },
          {
            id: "cieiec-u2-ad-q3", difficulty: "core", totalMarks: 3,
            stem: "What happens when AD increases?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "AD shifts", statement: "Impact on equilibrium." }],
              steps: [
                { reasoning: "AD shifts right → higher output.", marks: 1, markCode: "M" },
                { reasoning: "Higher price level (inflation pressure).", marks: 1, markCode: "M" },
                { reasoning: "Depends on AS curve shape.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Higher output and prices",
            },
          },
          {
            id: "cieiec-u2-ad-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define aggregate demand, aggregate supply, macroeconomic equilibrium, inflation, unemployment, economic growth. (b) What is AD? (c) What are AD components? (d) What is AS? (e) What is macroeconomic equilibrium? (f) What happens when AD increases? (g) What causes inflation? (h) Draw an AD/AS diagram showing equilibrium.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "AD/AS", statement: "Macroeconomic equilibrium." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Total demand.", marks: 1, markCode: "M" },
                { reasoning: "(c) C+I+G+(X-M).", marks: 1, markCode: "M" },
                { reasoning: "(d) Total output capacity.", marks: 1, markCode: "M" },
                { reasoning: "(e) AD=AS point.", marks: 1, markCode: "M" },
                { reasoning: "(f) Higher output/prices.", marks: 1, markCode: "M" },
                { reasoning: "(g) AD > AS capacity.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid AD/AS diagram.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Aggregate demand and supply.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u2-ad-notes", title: "AD/AS — notes",
      summary: "AD=C+I+G+(X-M); AS=total output. Equilibrium=AD=AS. Shifts affect growth/inflation/unemployment.",
      sections: [
        { heading: "Key idea", body: "Macroeconomic equilibrium determines national output and price level." },
        { heading: "Policy", body: "Fiscal/monetary policy shift AD to achieve macro objectives." },
      ],
    },
  },
  {
    file: "lesson-2-5.ts", exportName: "lesson285",
    lesson: {
      id: "cieiec-u2-lesson-2-5", code: "2-5",
      title: "Macroeconomic Objectives and Policies",
      goal: "I CAN explain macroeconomic objectives and fiscal/monetary policy.",
      standards: ["Cambridge IGCSE Economics 0455", "Paper 6: macroeconomic policy"],
      vocabulary: [
        { term: "Macroeconomic objectives", definition: "Economic goals: growth, low unemployment, low inflation, balance of payments." },
        { term: "Fiscal policy", definition: "Government spending and taxation." },
        { term: "Monetary policy", definition: "Central bank control of money supply/interest rates." },
        { term: "Contractionary policy", definition: "Policy reducing AD." },
        { term: "Expansionary policy", definition: "Policy increasing AD." },
        { term: "Interest rate", definition: "Cost of borrowing — monetary policy tool." },
      ],
      concept: {
        id: "cieiec-u2-s5-pol", title: "Macroeconomic policy",
        skill: "Understand policy tools and objectives.",
        sections: [
          { heading: "Macroeconomic objectives", body: "Sustainable economic growth, low unemployment, low and stable inflation, balance of payments equilibrium, equitable distribution." },
          { heading: "Fiscal policy", body: "Government spending ↑ or taxes ↓ = expansionary (boost AD). Government spending ↓ or taxes ↑ = contractionary (reduce AD)." },
          { heading: "Monetary policy", body: "Interest rates ↑ = contractionary (reduce borrowing/spending). Interest rates ↓ = expansionary (encourage borrowing/spending). Quantitative easing = increase money supply." },
        ],
        keyFormulas: [
          { name: "Fiscal expansionary", statement: "spending↑ or taxes↓" },
          { name: "Monetary expansionary", statement: "interest rates↓" },
          { name: "Objectives", statement: "growth, employment, inflation, BOP" },
        ],
        workedExample: {
          problem: "Economy in recession with high unemployment. What policies could help?",
          solution: "Expansionary fiscal (increase spending, cut taxes) + expansionary monetary (lower interest rates) to boost AD.",
        },
        questions: [
          {
            id: "cieiec-u2-pol-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is fiscal policy?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Government spending and taxation" }, { id: "b", text: "Central bank policy" }, { id: "c", text: "A type of tax" }, { id: "d", text: "A market structure" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Fiscal policy", statement: "Spending/taxation." }],
              steps: [{ reasoning: "Fiscal = government spending and taxation.", marks: 1, markCode: "M" }],
              finalAnswer: "Government spending and taxation",
            },
          },
          {
            id: "cieiec-u2-pol-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is monetary policy?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Monetary policy", statement: "Money supply/interest rates." }],
              steps: [
                { reasoning: "Central bank control of money supply/interest rates.", marks: 1, markCode: "M" },
                { reasoning: "Main tool: interest rates.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Money supply/interest rates",
            },
          },
          {
            id: "cieiec-u2-pol-q3", difficulty: "core", totalMarks: 3,
            stem: "How does expansionary monetary policy work?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Expansionary monetary", statement: "Lower interest rates." }],
              steps: [
                { reasoning: "Lower interest rates encourage borrowing.", marks: 1, markCode: "M" },
                { reasoning: "Increases consumption and investment.", marks: 1, markCode: "M" },
                { reasoning: "Boosts aggregate demand.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Lower rates → more borrowing → higher AD",
            },
          },
          {
            id: "cieiec-u2-pol-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define macroeconomic objectives, fiscal policy, monetary policy, contractionary, expansionary, interest rate. (b) What are macroeconomic objectives? (c) What is fiscal policy? (d) What is monetary policy? (e) What is expansionary fiscal policy? (f) What is contractionary monetary policy? (g) How do policies affect AD? (h) Evaluate fiscal vs monetary policy effectiveness.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Macroeconomic policy", statement: "Objectives, tools." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Growth, employment, inflation, BOP.", marks: 1, markCode: "M" },
                { reasoning: "(c) Government spending/taxation.", marks: 1, markCode: "M" },
                { reasoning: "(d) Money supply/interest rates.", marks: 1, markCode: "M" },
                { reasoning: "(e) Spending↑ or taxes↓.", marks: 1, markCode: "M" },
                { reasoning: "(f) Interest rates↑.", marks: 1, markCode: "M" },
                { reasoning: "(g) Shift AD right/left.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Macroeconomic policy.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieiec-u2-pol-notes", title: "Macroeconomic policy — notes",
      summary: "Objectives: growth, employment, low inflation, BOP. Fiscal=spending/taxes; monetary=interest rates/money supply.",
      sections: [
        { heading: "Key idea", body: "Policies shift AD to achieve macroeconomic objectives." },
        { heading: "Trade-offs", body: "Policies may achieve one objective but worsen another (e.g. growth vs inflation)." },
      ],
    },
  },
];
