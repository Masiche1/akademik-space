import type { Lesson } from "../../../types.ts";

export const lesson55: Lesson = {
  id: "cieige-u5-lesson-5-5",
  code: "5-5",
  title: "Government Intervention in Markets",
  goal: "I CAN analyse taxes, subsidies, price controls and regulation as responses to market failure.",
  standards: [
    "Cambridge IGCSE Economics 0455",
    "Unit 5: government intervention",
  ],
  vocabulary: [
    {
      term: "Indirect tax",
      definition: "Tax on goods/services raising price — e.g. VAT, excise.",
    },
    {
      term: "Subsidy",
      definition: "Government payment lowering cost/price of production.",
    },
    {
      term: "Price ceiling",
      definition: "Maximum legal price — e.g. rent control.",
    },
    {
      term: "Price floor",
      definition: "Minimum legal price — e.g. minimum wage.",
    },
    {
      term: "Pigouvian tax",
      definition: "Tax equal to marginal external cost.",
    },
    {
      term: "Government failure",
      definition: "Intervention making outcomes worse than market.",
    },
  ],
  concepts: [
    {
      id: "cieige-u5l5-c1-taxes-sub",
      title: "Taxes and subsidies",
      skill:
        "Analyse how indirect taxes and subsidies affect price, quantity and welfare.",
      lesson: {
        sections: [
          {
            heading: "Indirect taxes",
            body: "An **indirect tax** raises the supply price (shifts supply left/up). Effects: price rises, quantity falls, government revenue gained. **Incidence** depends on elasticity — the less elastic side bears more tax. Used to correct negative externalities (Pigouvian tax = MEC) and raise revenue.",
          },
          {
            heading: "Subsidies",
            body: "A **subsidy** lowers production cost (shifts supply right/down). Effects: price falls, quantity rises, government pays. Used to encourage positive-externality goods (education, renewables) or support producers. Costs government revenue; may create dependency.",
          },
        ],
        keyFormulas: [
          {
            name: "Tax incidence",
            statement: "Less elastic side bears more tax",
          },
          { name: "Pigouvian tax", statement: "Tax = marginal external cost" },
          {
            name: "Subsidy effect",
            statement: "Price↓, quantity↑, government pays",
          },
        ],
        workedExample: {
          problem: "A $2/unit tax shifts supply up by $2. Who bears it?",
          solution:
            "Depends on elasticity — if demand is inelastic, consumers bear most (price rises nearly $2); if elastic, producers bear more (price rises less, they absorb the rest).",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l5c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An indirect tax is levied on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only profits" },
              { id: "b", text: "Only imports" },
              { id: "c", text: "Goods and services, raising their price" },
              { id: "d", text: "Only income" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indirect tax",
                statement: "On goods/services.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Goods and services",
            commonErrors: ["Confusing with direct tax."],
          },
        },
        {
          id: "cieige-q-u5l5c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'Pigouvian tax'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pigouvian tax",
                statement: "Tax = marginal external cost.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A tax set equal to the marginal external cost of pollution/damage — internalises the externality, moving output to social optimum.",
            commonErrors: ["Confusing with any tax."],
          },
        },
        {
          id: "cieige-q-u5l5c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how tax incidence depends on elasticity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tax incidence",
                statement: "Less elastic side bears more tax.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "M" },
              {
                reasoning: "Both directions covered.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The less price-elastic side bears more of the tax — e.g. inelastic demand → consumers pay most; inelastic supply → producers pay most.",
            commonErrors: ["Assuming consumers always pay."],
          },
        },
        {
          id: "cieige-q-u5l5c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A subsidy of $3/unit is given to solar panel producers. Analyse effects on price, quantity and government.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Subsidy analysis",
                statement: "Supply shifts down; price falls, Q rises.",
              },
            ],
            steps: [
              {
                reasoning: "Price falls by less than subsidy.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Quantity increases.", marks: 1, markCode: "M" },
              {
                reasoning: "Government cost = subsidy × Q.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Possible overconsumption if not needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Supply shifts down $3 → price falls (by less than $3), quantity rises, government pays subsidy×new Q — may overcorrect if private benefit was already adequate.",
            commonErrors: ["Saying price falls by full $3."],
          },
        },
        {
          id: "cieige-q-u5l5c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether indirect taxes or subsidies are better for correcting positive externalities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tax vs subsidy",
                statement: "Pigouvian subsidy vs alternatives.",
              },
            ],
            steps: [
              {
                reasoning: "Subsidy lowers cost/price.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs government revenue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tax on harm may be cleaner.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Subsidies encourage positive-externality goods but cost revenue and may overshoot; alternatives include vouchers or direct provision — choice depends on good's nature and fiscal capacity.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l5c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does an indirect tax affect supply?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Tax effect",
                statement: "Shifts supply left/up by tax amount.",
              },
            ],
            steps: [
              { reasoning: "Correct effect.", marks: 1, markCode: "M" },
              {
                reasoning: "Result on price/quantity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Raises producers' costs, shifting supply left/up — price rises, quantity falls, government gains revenue.",
            commonErrors: ["Shifting demand instead."],
          },
        },
        {
          id: "cieige-q-u5l5c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A subsidy shifts the supply curve:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand only" },
              { id: "b", text: "Downward/rightward (lower cost)" },
              { id: "c", text: "Upward/leftward" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Subsidy effect",
                statement: "Supply shifts down.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Downward",
            commonErrors: ["Confusing with tax."],
          },
        },
        {
          id: "cieige-q-u5l5c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a government subsidise renewable energy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Renewable subsidy",
                statement: "Positive externality — reduces emissions.",
              },
            ],
            steps: [
              { reasoning: "Externality identified.", marks: 1, markCode: "M" },
              { reasoning: "Market underprovides.", marks: 1, markCode: "M" },
              { reasoning: "Subsidy rationale.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Renewables have positive externalities (less pollution, climate benefits) the market ignores — subsidy increases production toward social optimum while costs fall via learning-by-doing.",
            commonErrors: ["Only citing jobs."],
          },
        },
        {
          id: "cieige-q-u5l5c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'deadweight loss' from an indirect tax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tax DWL",
                statement: "Tax reduces Q below optimum → lost gains.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "When justified.", marks: 1, markCode: "M" },
              { reasoning: "When not.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Tax raises price and cuts quantity below optimum — units that would benefit consumers/producers aren't produced (DWL); justified if correcting externality or funding valued services.",
            commonErrors: ["Thinking all tax is DWL."],
          },
        },
        {
          id: "cieige-q-u5l5c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare a carbon tax with a cap-and-trade system for reducing emissions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Carbon pricing",
                statement: "Price vs quantity instruments.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon tax: price certainty, qty uncertain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cap-and-trade: qty certainty, price uncertain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both internalise externality.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Carbon tax sets price, lets quantity adjust — simpler but emission outcome uncertain; cap-and-trade caps quantity, price floats — both internalise externality; choice depends on certainty needed.",
            commonErrors: ["Treating them as identical."],
          },
        },
        {
          id: "cieige-q-u5l5c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A subsidy to producers typically causes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher price and higher quantity" },
              { id: "b", text: "Lower price and higher quantity" },
              { id: "c", text: "No change in price" },
              { id: "d", text: "Higher price and lower quantity" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Subsidy effect",
                statement: "Price↓, quantity↑.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Lower price, higher quantity",
            commonErrors: ["Confusing with tax."],
          },
        },
        {
          id: "cieige-q-u5l5c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A government pays a subsidy of $2 per unit on a good, and output rises to 25,000 units. The consumer price falls by $1.20 per unit. (a) Find the government's total subsidy cost. (b) Find the total saving to consumers.",
          response: {
            type: "numeric",
            parts: [
              { label: "Total subsidy cost", answer: 50000, unit: "$" },
              { label: "Total consumer saving", answer: 30000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Subsidy calculation",
                statement: "Cost = subsidy × Q; saving = price fall × Q.",
              },
            ],
            steps: [
              {
                reasoning: "Cost = 2 × 25,000 = $50,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Saving = 1.20 × 25,000 = $30,000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $50,000 (b) $30,000",
            commonErrors: ["Using the pre-subsidy quantity."],
          },
        },
        {
          id: "cieige-q-u5l5c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'Pigouvian tax' is set equal to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The market price" },
              { id: "b", text: "The firm's profit" },
              { id: "c", text: "The government's revenue target" },
              { id: "d", text: "The marginal external cost" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Marginal external cost",
            commonErrors: ["Confusing with any indirect tax."],
          },
        },
        {
          id: "cieige-q-u5l5c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a Pigouvian tax internalises a negative externality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internalisation",
                statement: "Tax makes producer bear external cost.",
              },
            ],
            steps: [
              {
                reasoning: "Tax = MEC added to private cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Price rises, quantity falls.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Output moves to social optimum.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The tax makes producers pay the marginal external cost they previously ignored — private cost rises to social cost, output falls to the social optimum where MSC = MSB.",
            commonErrors: ["Thinking tax just raises revenue."],
          },
        },
        {
          id: "cieige-q-u5l5c1-15",
          difficulty: "core",
          totalMarks: 2,
          stem: "An indirect tax of $1.50 per unit is imposed on a good selling 40,000 units. After the tax, quantity falls to 36,000 units. (a) Find government revenue before the quantity change. (b) Find revenue after the quantity change.",
          response: {
            type: "numeric",
            parts: [
              { label: "Revenue at 40,000 units", answer: 60000, unit: "$" },
              { label: "Revenue at 36,000 units", answer: 54000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Tax revenue",
                statement: "Revenue = tax per unit × quantity sold.",
              },
            ],
            steps: [
              {
                reasoning: "Revenue = 1.50 × 40,000 = $60,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Revenue = 1.50 × 36,000 = $54,000.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $60,000 (b) $54,000",
            commonErrors: ["Ignoring the fall in quantity."],
          },
        },
        {
          id: "cieige-q-u5l5c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether governments should subsidise agricultural production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Farm subsidies",
                statement: "Food security vs inefficiency and cost.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: food security, rural incomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: revenue, inefficiency, trade distortion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alternatives: targeted support.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Farm subsidies can secure food supply and support rural incomes but are costly, may prop up inefficient producers and distort trade — targeted income support may achieve goals more efficiently than blanket subsidies.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "cieige-u5l5-c2-controls",
      title: "Price controls and regulation",
      skill:
        "Analyse price ceilings, floors and government regulation effects and pitfalls.",
      lesson: {
        sections: [
          {
            heading: "Price ceilings and floors",
            body: "**Price ceiling** (max price, e.g. rent control): creates **shortage** — demand exceeds supply at capped price; may cause black markets and reduced quality/supply. **Price floor** (min price, e.g. minimum wage): creates **surplus** — supply exceeds demand; e.g. unemployment if wage floor above equilibrium. Both cause **deadweight loss**.",
          },
          {
            heading: "Regulation and government failure",
            body: "**Regulation** (standards, licensing) can correct market failure but risks **government failure**: regulatory capture, high compliance costs, unintended consequences. **Rent control** example: below-market rents → landlords exit → housing shortage worsens.",
          },
        ],
        keyFormulas: [
          { name: "Price ceiling", statement: "Max price → shortage" },
          { name: "Price floor", statement: "Min price → surplus" },
          {
            name: "Government failure",
            statement: "Intervention worsens outcome",
          },
        ],
        workedExample: {
          problem: "Why does a minimum wage create unemployment?",
          solution:
            "If set above equilibrium wage, quantity of labour supplied exceeds demanded — workers willing to work at the higher wage exceed jobs available → surplus = unemployment.",
        },
      },
      questions: [
        {
          id: "cieige-q-u5l5c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A price ceiling is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A subsidy" },
              { id: "b", text: "A market price" },
              { id: "c", text: "A maximum legal price" },
              { id: "d", text: "A minimum legal price" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Price ceiling",
                statement: "Maximum legal price.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Maximum legal price",
            commonErrors: ["Confusing with floor."],
          },
        },
        {
          id: "cieige-q-u5l5c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'government failure'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Government failure",
                statement: "Intervention worsens outcome.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When government intervention produces worse outcomes than the market would have — e.g. rent control causing housing shortages, or capture by vested interests.",
            commonErrors: ["Confusing with market failure."],
          },
        },
        {
          id: "cieige-q-u5l5c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why rent control causes housing shortages.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rent control",
                statement: "Ceiling below equilibrium → shortage.",
              },
            ],
            steps: [
              { reasoning: "Mechanism explained.", marks: 1, markCode: "M" },
              { reasoning: "Supply response.", marks: 1, markCode: "M" },
              { reasoning: "Secondary effects.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Capping rent below equilibrium makes quantity demanded exceed quantity supplied — landlords convert/neglect properties, reducing supply further; may create black markets.",
            commonErrors: ["Thinking it helps renters."],
          },
        },
        {
          id: "cieige-q-u5l5c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "A minimum wage is set above the equilibrium wage. Analyse effects on employment and inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minimum wage",
                statement:
                  "Surplus labour = unemployment; helps those employed.",
              },
            ],
            steps: [
              { reasoning: "Unemployment mechanism.", marks: 1, markCode: "M" },
              {
                reasoning: "Who gains (employed workers).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Who loses (unemployed, some firms).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Above-equilibrium minimum wage creates labour surplus (unemployment) but raises wages for those employed — net effect on inequality depends on employment losses vs wage gains.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l5c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether price controls are ever justified.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price control debate",
                statement: "Short-term relief vs long-term distortion.",
              },
            ],
            steps: [
              { reasoning: "Justification cases.", marks: 1, markCode: "M" },
              { reasoning: "Costs/distortions.", marks: 1, markCode: "M" },
              { reasoning: "Alternatives.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Price controls can provide short-term relief in crises (essentials) but create shortages/surpluses and black markets long-run — targeted transfers or subsidies often achieve goals without distortion.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieige-q-u5l5c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'regulatory capture'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Regulatory capture",
                statement: "Regulator serves industry not public.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "When regulators are influenced by the industry they oversee — via revolving doors, lobbying, or shared interests — serving industry rather than public interest.",
            commonErrors: ["Confusing with normal regulation."],
          },
        },
        {
          id: "cieige-q-u5l5c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A price floor creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilibrium" },
              { id: "b", text: "Shortage" },
              { id: "c", text: "Surplus" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price floor",
                statement: "Min price → surplus.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Surplus",
            commonErrors: ["Reversing ceiling/floor."],
          },
        },
        {
          id: "cieige-q-u5l5c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of government regulation correcting market failure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Regulation examples",
                statement: "Safety standards, pollution limits, licensing.",
              },
            ],
            steps: [
              { reasoning: "Two valid examples.", marks: 1, markCode: "M" },
              { reasoning: "Each linked to failure.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. pollution emission limits (negative externality) and food safety standards (information failure/health protection).",
            commonErrors: ["Examples not linked to failure."],
          },
        },
        {
          id: "cieige-q-u5l5c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do price ceilings often lead to black markets?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Black market",
                statement: "Shortage + price incentive.",
              },
            ],
            steps: [
              {
                reasoning: "Shortage creates incentive.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Illegal trade emerges.", marks: 1, markCode: "M" },
              {
                reasoning: "Quality/safety unregulated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Capped prices create shortage; sellers can profit by charging above ceiling illegally — black markets emerge with unregulated quality and safety.",
            commonErrors: ["Thinking black markets are legal."],
          },
        },
        {
          id: "cieige-q-u5l5c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether a government should intervene in housing markets with rent control or subsidies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Housing policy",
                statement: "Rent control vs targeted support.",
              },
            ],
            steps: [
              { reasoning: "Rent control effects.", marks: 1, markCode: "M" },
              { reasoning: "Subsidy effects.", marks: 1, markCode: "M" },
              { reasoning: "Equity considerations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Rent control helps tenants short-term but shrinks supply; subsidies to landlords or vouchers preserve supply incentives while helping poor renters — usually more sustainable.",
            commonErrors: ["One-sided or no comparison."],
          },
        },
        {
          id: "cieige-q-u5l5c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Rent control is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A price ceiling" },
              { id: "b", text: "A subsidy" },
              { id: "c", text: "A price floor" },
              { id: "d", text: "A direct tax" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Rent control",
                statement: "Maximum legal rent — a ceiling.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** A price ceiling",
            commonErrors: ["Confusing with floor."],
          },
        },
        {
          id: "cieige-q-u5l5c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A price floor set above the equilibrium price creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lower prices" },
              { id: "b", text: "A shortage" },
              { id: "c", text: "No change" },
              { id: "d", text: "A surplus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Price floor",
                statement: "Min price → surplus.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** A surplus",
            commonErrors: ["Reversing ceiling/floor."],
          },
        },
        {
          id: "cieige-q-u5l5c2-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "At a minimum wage of $12 per hour, 500,000 workers want jobs but only 420,000 are hired. The total labour force is 2 million. (a) Find the labour surplus. (b) Find the surplus as a percentage of the labour force.",
          response: {
            type: "numeric",
            parts: [
              { label: "Labour surplus", answer: 80000, unit: "workers" },
              { label: "Surplus as % of labour force", answer: 4, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Labour surplus",
                statement: "Supply − demand; ÷ labour force × 100.",
              },
            ],
            steps: [
              {
                reasoning: "Surplus = 500,000 − 420,000 = 80,000 workers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "80,000 ÷ 2,000,000 × 100 = 4%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 80,000 workers (b) 4%",
            commonErrors: ["Using supply only, not the gap."],
          },
        },
        {
          id: "cieige-q-u5l5c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Price ceilings often lead to black markets because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prices become too low to sell" },
              { id: "b", text: "Government bans all trade" },
              {
                id: "c",
                text: "Shortage plus sellers' incentive to charge more illegally",
              },
              { id: "d", text: "Demand disappears" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Black market",
                statement: "Shortage + illegal price incentive.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Shortage + incentive to charge above ceiling",
            commonErrors: ["Thinking ceilings are enforced perfectly."],
          },
        },
        {
          id: "cieige-q-u5l5c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two unintended consequences of a minimum wage set above the equilibrium wage, other than unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Minimum wage costs",
                statement: "Hours, informal work, prices.",
              },
            ],
            steps: [
              { reasoning: "Two valid consequences.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. employers reduce workers' hours to cut costs, and some employment shifts into the informal/unregulated economy where the wage floor doesn't apply.",
            commonErrors: ["Repeating unemployment only."],
          },
        },
        {
          id: "cieige-q-u5l5c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the case for deregulating markets (e.g. removing price controls and licensing requirements).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deregulation",
                statement: "Efficiency gains vs protection loss.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: lower prices, more competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Costs: less protection, possible failure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Depends on market type.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Deregulation can lower prices and increase competition but removes protections against market failure — sensible where markets are competitive, risky where externalities or information problems are severe; case-by-case judgement needed.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
  ],
};
