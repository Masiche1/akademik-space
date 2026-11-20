import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "econ-u1-lesson-3-2",
  code: "3-2",
  title: "Government Intervention",
  goal: "I CAN explain how governments correct market failure through indirect and direct taxes, subsidies, regulation and tradable permits, and evaluate their effectiveness.",
  standards: ["Paper 1", "Paper 2", "Topic 3"],
  vocabulary: [
    { term: "Indirect tax", definition: "A tax on production or consumption (e.g. VAT, excise duty) that shifts supply left and raises price." },
    { term: "Direct tax", definition: "A tax on income or wealth (e.g. income tax, corporation tax) levied directly on the taxpayer." },
    { term: "Subsidy", definition: "A government payment to producers that lowers costs, shifts supply right and reduces price." },
    { term: "Regulation", definition: "Rules imposing maximum quantities or minimum standards on production or consumption." },
    { term: "Tradable permits", definition: "Government-issued allowances to emit pollution that can be bought and sold between firms." },
    { term: "Price ceiling / floor", definition: "Legal maximum / minimum prices (e.g. rent control, minimum wage)." },
  ],
  concepts: [
    {
      id: "econ-u3-taxes-subsidies",
      title: "Taxes and Subsidies",
      skill: "Explain how indirect taxes and subsidies correct externalities and evaluate their effectiveness.",
      lesson: {
        sections: [
          {
            heading: "Indirect taxes on negative externalities",
            body: "An **indirect tax** (excise duty, VAT) on a good with negative externalities raises producers' costs — the supply curve shifts **left**. Price rises and quantity falls toward the social optimum where MSC = MSB. The tax ideally equals the **marginal external cost** at the optimal output (a Pigouvian tax). Example: fuel duty, tobacco tax.",
          },
          {
            heading: "Subsidies on positive externalities",
            body: "A **subsidy** to producers of goods with positive externalities (education, vaccination, renewable energy) lowers costs — supply shifts **right**, price falls and quantity rises toward the social optimum. The subsidy should equal the **marginal external benefit**. Subsidies also support merit goods and infant industries.",
          },
          {
            heading: "Evaluation of taxes and subsidies",
            body: "**Advantages**: correct externalities efficiently, raise revenue (taxes), target specific goods. **Disadvantages**: government must know the correct tax/subsidy size; taxes may be regressive (hit the poor harder); subsidies cost money and may create dependency; black markets can emerge. Direct taxes (income tax) redistribute income but do not directly correct externalities.",
          },
        ],
        keyFormulas: [
          { name: "Indirect tax", statement: "Supply shifts left; P up, Q down; ideal tax = marginal external cost" },
          { name: "Subsidy", statement: "Supply shifts right; P down, Q up; ideal subsidy = marginal external benefit" },
          { name: "Pigouvian tax", statement: "Tax set equal to marginal external cost at social optimum" },
        ],
        workedExample: {
          problem: "A carbon tax is introduced to reduce emissions. Explain its effect on the market for fossil fuels.",
          solution: "The tax raises production costs, shifting supply left. Price rises and quantity demanded falls, reducing emissions toward the social optimum. Revenue can fund green alternatives.",
        },
      },
      questions: [
        {
          id: "econ-u3-l32c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An indirect tax on a good with negative externalities will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift supply right and lower price" },
              { id: "b", text: "Shift supply left and raise price" },
              { id: "c", text: "Shift demand right and raise quantity" },
              { id: "d", text: "Have no effect on the market" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Indirect tax effect", statement: "Tax raises costs → supply shifts left → price up, quantity down." },
            ],
            steps: [
              { reasoning: "An indirect tax increases production costs, shifting supply left.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift supply left and raise price",
            commonErrors: ["Confusing indirect tax (supply left) with subsidy (supply right)."],
          },
        },
        {
          id: "econ-u3-l32c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why a Pigouvian tax is considered an efficient way to correct a negative externality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pigouvian tax", statement: "Tax equal to marginal external cost shifts output to the social optimum." },
            ],
            steps: [
              { reasoning: "A Pigouvian tax equals the marginal external cost at the socially optimal output.", marks: 1, markCode: "M" },
              { reasoning: "It internalises the externality — producers now face the full social cost.", marks: 1, markCode: "M" },
              { reasoning: "Output falls to where MSC = MSB — the efficient level — while raising government revenue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tax = marginal external cost → internalises externality → efficient output + revenue.",
            commonErrors: ["Saying any tax works — it must be set at the correct level."],
          },
        },
        {
          id: "econ-u3-l32c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A government gives a subsidy to solar panel producers. Explain the effect on the market for solar panels and on pollution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subsidy and positive externality", statement: "Subsidy lowers costs → supply right → lower price, higher quantity of clean energy." },
            ],
            steps: [
              { reasoning: "Subsidy reduces production costs of solar panels.", marks: 1, markCode: "M" },
              { reasoning: "Supply shifts right; price falls and quantity rises — solar panels become cheaper.", marks: 1, markCode: "M" },
              { reasoning: "Consumers substitute toward solar, reducing fossil fuel use.", marks: 1, markCode: "R" },
              { reasoning: "Result: positive externality (less pollution) is internalised — less negative externality from energy production.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subsidy → cheaper solar → substitution away from fossil fuels → less pollution.",
            commonErrors: ["Ignoring the substitution effect on fossil fuels."],
          },
        },
        {
          id: "econ-u3-l32c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of indirect taxes to correct the market failure caused by smoking.",
          parts: [
            { label: "a", prompt: "Explain why smoking is a market failure.", marks: 2 },
            { label: "b", prompt: "Explain how an indirect tax on cigarettes corrects this failure.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of this policy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Smoking market failure", statement: "Negative externalities (health costs, second-hand smoke) + demerit good (underestimated costs)." },
            ],
            steps: [
              { part: "a", reasoning: "Smoking creates negative externalities — healthcare costs borne by society, second-hand smoke.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Also a demerit good — consumers underestimate health costs (myopia/addiction).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Indirect tax raises cigarette prices, reducing quantity demanded.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The tax can be set to reflect external costs — a Pigouvian tax.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lower consumption reduces external costs and raises government revenue for health programmes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefits: reduced smoking, revenue, clear price signal.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Costs: regressive (hits poor smokers), black market/illicit trade, may not change addicted behaviour much.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: effective if part of a broader strategy (education, bans); alone may be insufficient.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Negative externalities + demerit good. (b) Tax raises price → less smoking → less external cost. (c) Effective but regressive; combine with other measures.",
            commonErrors: ["Ignoring regressivity or the addiction element that makes demand inelastic."],
          },
        },
        {
          id: "econ-u3-l32c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An indirect tax differs from a direct tax because it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paid for by the government" },
              { id: "b", text: "Levied on production or consumption rather than directly on income or wealth" },
              { id: "c", text: "Always progressive" },
              { id: "d", text: "A payment to producers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Indirect vs direct tax", statement: "Indirect taxes are levied on goods/services; direct taxes on income and wealth." },
            ],
            steps: [
              { reasoning: "Indirect taxes (VAT, excise) fall on production/consumption; direct taxes (income tax) fall on the taxpayer's income.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Levied on production or consumption rather than directly on income or wealth",
            commonErrors: ["Confusing indirect taxes with subsidies."],
          },
        },
        {
          id: "econ-u3-l32c1q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A subsidy paid to producers causes the supply curve to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift left and price to rise" },
              { id: "b", text: "Shift right and price to fall" },
              { id: "c", text: "Remain unchanged" },
              { id: "d", text: "Shift left and quantity to rise" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subsidy effect", statement: "Subsidy lowers costs → supply shifts right → price down, quantity up." },
            ],
            steps: [
              { reasoning: "A subsidy reduces production costs, shifting supply to the right.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift right and price to fall",
            commonErrors: ["Confusing subsidy (supply right) with indirect tax (supply left)."],
          },
        },
        {
          id: "econ-u3-l32c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A Pigouvian tax is set equal to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The total external cost of production" },
              { id: "b", text: "The marginal external cost at the socially optimal output" },
              { id: "c", text: "The firm's average revenue" },
              { id: "d", text: "The rate of a subsidy on clean goods" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pigouvian tax", statement: "A tax equal to the marginal external cost at the social optimum." },
            ],
            steps: [
              { reasoning: "The Pigouvian tax equals marginal external cost so that MSC aligns with MSB at the optimum.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The marginal external cost at the socially optimal output",
            commonErrors: ["Using total rather than marginal external cost."],
          },
        },
        {
          id: "econ-u3-l32c1q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "An indirect tax on a good with negative externalities aims to move output to where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MPC = MPB" },
              { id: "b", text: "MSC = MSB" },
              { id: "c", text: "P = minimum ATC" },
              { id: "d", text: "MR = MC for the government" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social optimum", statement: "MSC = MSB defines the socially efficient output." },
            ],
            steps: [
              { reasoning: "The tax raises private cost toward social cost, moving output to MSC = MSB.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** MSC = MSB",
            commonErrors: ["Choosing MPC = MPB, the private (inefficient) equilibrium."],
          },
        },
        {
          id: "econ-u3-l32c1q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which of the following is a recognised disadvantage of using indirect taxes to correct externalities?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They always increase the quantity consumed" },
              { id: "b", text: "The government may not know the correct tax level and the tax may be regressive" },
              { id: "c", text: "They eliminate all forms of market failure" },
              { id: "d", text: "They subsidise the producers of the taxed good" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limitations of indirect taxes", statement: "Requires accurate external-cost measurement; may be regressive." },
            ],
            steps: [
              { reasoning: "Setting the tax correctly is difficult and flat taxes on goods fall more heavily on low-income households.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The government may not know the correct tax level and the tax may be regressive",
            commonErrors: ["Claiming taxes always work regardless of size."],
          },
        },
        {
          id: "econ-u3-l32c1q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A $2 per unit indirect tax is imposed on a good that previously sold at $10 per unit. If the tax is fully passed on to consumers and 5,000 units are sold: (i) Calculate the new consumer price. (ii) Calculate the government's tax revenue.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 12, unit: "$ per unit" },
              { label: "ii", answer: 10000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tax pass-through and revenue", statement: "New price = old price + tax; revenue = tax × quantity sold" },
            ],
            steps: [
              { reasoning: "With full pass-through, consumer price rises by the tax: 10 + 2 = $12.", marks: 1, markCode: "M" },
              { reasoning: "Tax revenue = tax per unit × quantity = 2 × 5,000 = $10,000.", marks: 1, markCode: "M" },
              { reasoning: "New price $12; revenue $10,000.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $12 per unit; (ii) $10,000.",
            commonErrors: ["Forgetting that revenue = tax × quantity, not tax × price."],
          },
        },
        {
          id: "econ-u3-l32c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A $3 per unit subsidy lowers the market price from $8 to $5 and raises quantity sold to 2,200 units. The government's total subsidy cost is closest to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3,000" },
              { id: "b", text: "$6,000" },
              { id: "c", text: "$6,600" },
              { id: "d", text: "$2,200" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Subsidy cost", statement: "Total cost = subsidy per unit × quantity supplied" },
            ],
            steps: [
              { reasoning: "Subsidy cost = 3 × 2,200 = $6,600.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $6,600",
            commonErrors: ["Multiplying the subsidy by the old quantity instead of the new, higher quantity."],
          },
        },
        {
          id: "econ-u3-l32c1q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how an indirect tax on a good with negative externalities moves the market toward the social optimum.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Indirect tax and externality", statement: "Tax raises private cost toward social cost, reducing output to MSC = MSB." },
            ],
            steps: [
              { reasoning: "The tax raises producers' costs, shifting the supply curve left.", marks: 1, markCode: "M" },
              { reasoning: "Price rises and quantity demanded falls.", marks: 1, markCode: "M" },
              { reasoning: "If set at the marginal external cost, the new equilibrium is where MSC = MSB.", marks: 1, markCode: "R" },
              { reasoning: "Result: output falls to the social optimum and external costs fall — though revenue is raised for government.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tax → supply left → P up, Q down → output approaches MSC = MSB optimum.",
            commonErrors: ["Saying the tax shifts demand — it shifts supply."],
          },
        },
        {
          id: "econ-u3-l32c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the use of indirect taxes as a way of reducing inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regressive taxes", statement: "Indirect taxes take a larger share of income from the poor, who spend a higher proportion on taxed goods." },
            ],
            steps: [
              { reasoning: "Indirect taxes on goods (VAT, fuel, tobacco) are typically regressive — poor households spend a larger share of income on them.", marks: 1, markCode: "M" },
              { reasoning: "They therefore tend to increase, not reduce, income inequality.", marks: 1, markCode: "M" },
              { reasoning: "However, 'sin taxes' on demerit goods can improve health outcomes for the poor if consumption falls.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: indirect taxes are poor redistribution tools; progressive direct taxes and transfers are more effective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Indirect taxes are regressive → generally worsen inequality; not an effective redistribution policy.",
            commonErrors: ["Assuming all taxes reduce inequality."],
          },
        },
        {
          id: "econ-u3-l32c1q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Distinguish between direct and indirect taxes, giving two examples of each and explaining one economic effect of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Direct vs indirect tax", statement: "Direct taxes fall on income/wealth; indirect taxes on production/consumption." },
            ],
            steps: [
              { reasoning: "Direct taxes: income tax, corporation tax — levied directly on the taxpayer.", marks: 1, markCode: "M" },
              { reasoning: "Effect: can be progressive to redistribute income from rich to poor.", marks: 1, markCode: "M" },
              { reasoning: "Indirect taxes: VAT, excise duties — levied on goods and services.", marks: 1, markCode: "M" },
              { reasoning: "Effect: raise price and reduce quantity of the taxed good; can correct negative externalities.", marks: 1, markCode: "M" },
              { reasoning: "Indirect taxes are often regressive while well-designed direct taxes can be progressive.", marks: 1, markCode: "R" },
              { reasoning: "Both raise government revenue but work through different channels.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Direct = income/corporation tax (redistribution); indirect = VAT/excise (price/quantity effects, externality correction).",
            commonErrors: ["Giving only one example of each or no economic effect."],
          },
        },
        {
          id: "econ-u3-l32c1q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the effectiveness of indirect taxes as a policy to reduce the consumption of demerit goods.",
          parts: [
            { label: "a", prompt: "Explain why demerit goods are over-consumed in a free market.", marks: 2 },
            { label: "b", prompt: "Explain how an indirect tax reduces consumption of a demerit good.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of this policy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Demerit good policy", statement: "Indirect taxes raise price to reduce consumption of goods whose costs are underestimated." },
            ],
            steps: [
              { part: "a", reasoning: "Consumers underestimate long-term costs (myopia) and face addiction/advertising.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Negative externalities mean social cost exceeds private cost — over-consumption.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The tax raises the price, moving along the demand curve to lower quantity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "If set equal to external cost it is a Pigouvian tax achieving the social optimum.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lower consumption reduces external costs and raises revenue for health programmes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strengths: clear price signal, revenue, reduces harm.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weaknesses: regressive, inelastic demand for addictive goods, black markets.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: useful but best combined with education, advertising bans and treatment programmes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Myopia + externalities → overconsumption. (b) Tax raises price → less consumption. (c) Effective but regressive; combine policies.",
            commonErrors: ["Ignoring that demand for addictive demerit goods is price inelastic."],
          },
        },
        {
          id: "econ-u3-l32c1q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how a subsidy to producers of a merit good such as vaccinations can correct market failure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subsidy for positive externality", statement: "Subsidy lowers cost → supply right → higher output toward social optimum." },
            ],
            steps: [
              { reasoning: "Vaccination has positive externalities (herd immunity), so MSB exceeds MPB.", marks: 1, markCode: "M" },
              { reasoning: "The subsidy reduces producers' costs, shifting supply right.", marks: 1, markCode: "M" },
              { reasoning: "Price falls and quantity rises toward the MSC = MSB optimum.", marks: 1, markCode: "R" },
              { reasoning: "Result: under-provision corrected, at a fiscal cost to government.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subsidy → cheaper vaccines → higher uptake → closer to social optimum.",
            commonErrors: ["Confusing subsidies with taxes — subsidies increase output."],
          },
        },
        {
          id: "econ-u3-l32c1q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A firm has MPC = $6 and MPB = MSB = $6 per unit, with a marginal external cost of $4 per unit. (i) Calculate MSC per unit. (ii) Calculate MSC − MSB at the free-market output.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 10, unit: "$ per unit" },
              { label: "ii", answer: 4, unit: "$ per unit" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "MSC and welfare gap", statement: "MSC = MPC + MEC; at free-market output MSC − MSB measures the per-unit welfare loss" },
            ],
            steps: [
              { reasoning: "MSC = MPC + MEC = 6 + 4 = $10 per unit.", marks: 1, markCode: "M" },
              { reasoning: "MSC = $10 per unit.", marks: 1, markCode: "A" },
              { reasoning: "MSC − MSB = 10 − 6 = $4 per unit at the free-market output.", marks: 1, markCode: "M" },
              { reasoning: "Gap = $4 per unit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) MSC = $10; (ii) MSC − MSB = $4 per unit.",
            commonErrors: ["Using MSB = MPB + external benefit when there is no external benefit on the consumption side."],
          },
        },
      ],
    },
    {
      id: "econ-u3-regulation-permits",
      title: "Regulation and Tradable Permits",
      skill: "Explain how quantity controls, regulation and tradable permits address market failure and evaluate their strengths and weaknesses.",
      lesson: {
        sections: [
          {
            heading: "Regulation and quantity controls",
            body: "**Regulation** imposes rules: maximum quantities (e.g. fishing quotas, emission limits), minimum standards (safety, pollution controls) or outright bans (certain chemicals). A **price ceiling** (rent control) sets a maximum price — can cause shortages; a **price floor** (minimum wage) sets a minimum — can cause surpluses (unemployment). Regulation directly controls outcomes but may be costly to enforce.",
          },
          {
            heading: "Tradable permits",
            body: "**Tradable permits** (cap-and-trade) set a total allowable quantity of pollution and issue permits to firms. Firms that reduce emissions can sell surplus permits; firms that pollute more must buy them. This combines **certainty of quantity** (the cap) with **market efficiency** (permits flow to lowest-cost abaters). Example: EU Emissions Trading System (ETS).",
          },
          {
            heading: "Evaluation",
            body: "Regulation is simple and direct but may be inflexible and create compliance costs without innovation. Permits are cost-effective and reward efficiency but depend on the cap being set correctly and monitoring/enforcement being strong. Price controls can cause shortages or surpluses — often worse than the original problem.",
          },
        ],
        keyFormulas: [
          { name: "Tradable permits", statement: "Cap on total emissions + permits tradable → lowest-cost reduction" },
          { name: "Price ceiling", statement: "Maximum price → shortage if below equilibrium" },
          { name: "Price floor", statement: "Minimum price → surplus if above equilibrium" },
        ],
        workedExample: {
          problem: "A government sets a cap of 100 tonnes of carbon emissions and issues 100 permits. Explain how the market for permits works.",
          solution: "Firms needing more than their permit must buy from firms with surplus. The permit price reflects scarcity; firms that cut emissions cheaply profit by selling permits — total emissions stay at the cap.",
        },
      },
      questions: [
        {
          id: "econ-u3-l32c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Tradable pollution permits work by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Setting a tax on each unit of pollution" },
              { id: "b", text: "Capping total emissions and allowing firms to trade permits" },
              { id: "c", text: "Banning all pollution outright" },
              { id: "d", text: "Subsidising clean technology only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tradable permits", statement: "A cap on total emissions with permits that firms can buy and sell." },
            ],
            steps: [
              { reasoning: "Tradable permits combine a quantity cap with a market for permits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Capping total emissions and allowing firms to trade permits",
            commonErrors: ["Confusing cap-and-trade with a carbon tax — different mechanisms."],
          },
        },
        {
          id: "econ-u3-l32c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain why a price ceiling set below the equilibrium price causes a shortage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Price ceiling", statement: "Maximum price below equilibrium → quantity demanded exceeds quantity supplied." },
            ],
            steps: [
              { reasoning: "At the ceiling price, quantity demanded is high (consumers want more at low price).", marks: 1, markCode: "M" },
              { reasoning: "Quantity supplied is low (producers receive less, so supply less).", marks: 1, markCode: "M" },
              { reasoning: "Qd > Qs → shortage; non-price rationing (queues, black markets) emerges.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Price ceiling below equilibrium → Qd > Qs → shortage.",
            commonErrors: ["Saying price ceilings always help consumers — they cause shortages."],
          },
        },
        {
          id: "econ-u3-l32c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how tradable permits achieve pollution reduction at minimum cost to firms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cost-effectiveness of permits", statement: "Permits flow to firms with lowest abatement costs." },
            ],
            steps: [
              { reasoning: "The cap fixes total emissions — certainty about the environmental outcome.", marks: 1, markCode: "M" },
              { reasoning: "Firms with low abatement costs reduce emissions and sell surplus permits.", marks: 1, markCode: "M" },
              { reasoning: "Firms with high abatement costs buy permits rather than reduce — efficient allocation.", marks: 1, markCode: "R" },
              { reasoning: "Result: total abatement achieved at minimum aggregate cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cap ensures quantity; trading ensures lowest-cost firms abate most — cost-effective.",
            commonErrors: ["Ignoring that the cap must be set at the correct level."],
          },
        },
        {
          id: "econ-u3-l32c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of regulation versus tradable permits to reduce industrial pollution.",
          parts: [
            { label: "a", prompt: "Explain how each policy reduces pollution.", marks: 3 },
            { label: "b", prompt: "Compare their cost-effectiveness and flexibility.", marks: 3 },
            { label: "c", prompt: "Evaluate which approach is likely to be more successful.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regulation vs permits", statement: "Regulation commands outcomes; permits use market incentives within a cap." },
            ],
            steps: [
              { part: "a", reasoning: "Regulation: sets emission limits or technology standards — direct control of pollution.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tradable permits: cap total emissions; firms trade permits to pollute.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both reduce pollution but via different mechanisms.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Regulation may force uniform costly standards — not cost-effective.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Permits let low-cost firms abate more — economically efficient allocation.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Permits are flexible (price adjusts) but depend on accurate cap-setting and enforcement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reasoned judgement: permits more cost-effective for priceable externalities; regulation better for safety/merit issues.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Often used together — cap via permits plus minimum standards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Regulation = rules/limits; permits = cap + trading. (b) Permits more cost-effective; regulation more direct. (c) Complementary; choice depends on context.",
            commonErrors: ["Claiming one is always superior — context matters."],
          },
        },
        {
          id: "econ-u3-l32c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Tradable permits differ from an indirect tax on pollution because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Set a price for each unit of pollution" },
              { id: "b", text: "Fix the total quantity of pollution and let firms trade allowances" },
              { id: "c", text: "Ban pollution outright" },
              { id: "d", text: "Subsidise firms that pollute less" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Permits vs tax", statement: "Permits cap quantity; taxes set a price per unit." },
            ],
            steps: [
              { reasoning: "A tax sets price and lets quantity adjust; permits fix quantity and let price adjust through trading.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Fix the total quantity of pollution and let firms trade allowances",
            commonErrors: ["Confusing cap-and-trade with a carbon tax."],
          },
        },
        {
          id: "econ-u3-l32c2q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A price floor set above the equilibrium price is likely to cause:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A shortage of the good" },
              { id: "b", text: "A surplus of the good" },
              { id: "c", text: "No change in the market" },
              { id: "d", text: "A fall in the equilibrium price" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Price floor", statement: "Minimum price above equilibrium → quantity supplied exceeds quantity demanded → surplus." },
            ],
            steps: [
              { reasoning: "At the floor price, producers supply more and consumers demand less, creating a surplus.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A surplus of the good",
            commonErrors: ["Confusing price floors (surplus) with price ceilings (shortage)."],
          },
        },
        {
          id: "econ-u3-l32c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "In a cap-and-trade system, a firm that reduces its emissions below its allowance can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pay a lower tax rate" },
              { id: "b", text: "Sell its surplus permits to other firms" },
              { id: "c", text: "Increase its output without limit" },
              { id: "d", text: "Receive a subsidy from consumers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Permit trading", statement: "Firms with surplus permits can sell them to firms that need more." },
            ],
            steps: [
              { reasoning: "Permits are tradable assets — abating firms profit by selling surplus allowances.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sell its surplus permits to other firms",
            commonErrors: ["Thinking permits are a tax rather than a tradable allowance."],
          },
        },
        {
          id: "econ-u3-l32c2q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The main economic advantage of tradable permits over uniform emission standards is that permits:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guarantee zero pollution" },
              { id: "b", text: "Achieve the emission cap at the lowest aggregate abatement cost" },
              { id: "c", text: "Require no monitoring or enforcement" },
              { id: "d", text: "Always raise consumer prices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cost-effectiveness", statement: "Trading lets low-cost abaters do more, minimising total cost for a given cap." },
            ],
            steps: [
              { reasoning: "Permits flow to firms with the lowest abatement costs, minimising the total cost of hitting the cap.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Achieve the emission cap at the lowest aggregate abatement cost",
            commonErrors: ["Claiming permits guarantee zero pollution — the cap sets the level."],
          },
        },
        {
          id: "econ-u3-l32c2q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A government-imposed limit on the total fish catch in a fishery is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A price ceiling" },
              { id: "b", text: "A quantity-control regulation" },
              { id: "c", text: "A subsidy to fishers" },
              { id: "d", text: "A tradable permit system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quantity control", statement: "Regulation that fixes the maximum quantity of a good or resource that may be produced or caught." },
            ],
            steps: [
              { reasoning: "A catch quota directly limits quantity — a form of regulation, not a price control.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A quantity-control regulation",
            commonErrors: ["Confusing quotas with price ceilings — they control quantity, not price."],
          },
        },
        {
          id: "econ-u3-l32c2q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "A rent ceiling of $400 per month is imposed where the equilibrium rent is $600. At the ceiling, quantity demanded rises 20% and quantity supplied falls 30% from an equilibrium quantity of 1,000 units. (i) Calculate quantity demanded. (ii) Calculate quantity supplied. (iii) Calculate the shortage.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 1200, unit: "units" },
              { label: "ii", answer: 700, unit: "units" },
              { label: "iii", answer: 500, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Price ceiling shortage", statement: "Qd rises and Qs falls at a below-equilibrium price, creating a shortage." },
            ],
            steps: [
              { reasoning: "Quantity demanded = 1,000 × 1.20 = 1,200 units.", marks: 1, markCode: "M" },
              { reasoning: "Quantity supplied = 1,000 × 0.70 = 700 units.", marks: 1, markCode: "M" },
              { reasoning: "Shortage = Qd − Qs = 1,200 − 700 = 500 units.", marks: 1, markCode: "M" },
              { reasoning: "All three values correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Qd = 1,200; Qs = 700; shortage = 500 units.",
            commonErrors: ["Adding the shortage to demand instead of subtracting supply."],
          },
        },
        {
          id: "econ-u3-l32c2q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Two firms must each reduce emissions by 100 tonnes in total. Firm X can abate at $30 per tonne and Firm Y at $90 per tonne; each can abate up to 100 tonnes. (i) Calculate the minimum total abatement cost. (ii) Calculate the total cost if each firm abates 50 tonnes.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 3000, unit: "$" },
              { label: "ii", answer: 6000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cost-effective abatement", statement: "Minimum cost is achieved when the lowest-cost abater does as much as possible." },
            ],
            steps: [
              { reasoning: "Minimum cost: Firm X abates all 100 tonnes at $30 = $3,000.", marks: 1, markCode: "M" },
              { reasoning: "Minimum total cost = $3,000.", marks: 1, markCode: "A" },
              { reasoning: "Equal split: 50 × $30 + 50 × $90 = $1,500 + $4,500 = $6,000.", marks: 1, markCode: "M" },
              { reasoning: "Equal-split cost = $6,000 — double the minimum.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $3,000; (ii) $6,000.",
            commonErrors: ["Assuming abatement must be split equally — trading permits avoids this."],
          },
        },
        {
          id: "econ-u3-l32c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how a cap-and-trade (tradable permit) system reduces pollution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cap-and-trade", statement: "A cap fixes total emissions; trading allocates abatement to lowest-cost firms." },
            ],
            steps: [
              { reasoning: "The government sets a cap on total emissions and issues permits accordingly.", marks: 1, markCode: "M" },
              { reasoning: "Firms emitting more than their permits must buy them; firms emitting less can sell surplus.", marks: 1, markCode: "M" },
              { reasoning: "The permit price creates an incentive to abate — the scarcer permits are, the higher the price.", marks: 1, markCode: "R" },
              { reasoning: "Result: emissions stay at the cap while abatement is achieved at minimum cost.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cap limits quantity; permit price incentivises abatement; trading minimises cost.",
            commonErrors: ["Saying the cap alone reduces pollution without explaining the trading incentive."],
          },
        },
        {
          id: "econ-u3-l32c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a minimum wage set above the equilibrium wage can cause unemployment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Minimum wage as price floor", statement: "Wage floor above equilibrium → quantity of labour supplied exceeds quantity demanded." },
            ],
            steps: [
              { reasoning: "At the higher wage, more workers want jobs (labour supplied rises).", marks: 1, markCode: "M" },
              { reasoning: "Employers hire fewer workers because labour is more expensive (labour demanded falls).", marks: 1, markCode: "M" },
              { reasoning: "Qs > Qd → surplus of labour = unemployment.", marks: 1, markCode: "R" },
              { reasoning: "Those still employed earn more, but some workers lose their jobs entirely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wage floor above equilibrium → labour surplus → unemployment.",
            commonErrors: ["Ignoring that quantity demanded falls when the wage rises."],
          },
        },
        {
          id: "econ-u3-l32c2q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Compare the use of regulation and tradable permits as methods of reducing pollution, referring to cost-effectiveness, flexibility and enforcement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regulation vs permits", statement: "Regulation commands outcomes directly; permits use market incentives within a cap." },
            ],
            steps: [
              { reasoning: "Regulation sets rules/limits directly — simple and certain in outcome.", marks: 1, markCode: "M" },
              { reasoning: "Tradable permits cap total quantity while allowing firms to trade — cost-effective allocation.", marks: 1, markCode: "M" },
              { reasoning: "Cost-effectiveness: permits achieve the cap at lower aggregate cost than uniform standards.", marks: 1, markCode: "M" },
              { reasoning: "Flexibility: permit prices adjust automatically to scarcity; regulation is rigid.", marks: 1, markCode: "R" },
              { reasoning: "Enforcement: both need monitoring, but permits add a market layer that is self-policing via prices.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: permits are economically superior for measurable externalities; regulation suits safety/merit issues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Permits = cost-effective + flexible; regulation = direct + simple. Context determines choice.",
            commonErrors: ["One-sided comparison without acknowledging trade-offs."],
          },
        },
        {
          id: "econ-u3-l32c2q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the use of cap-and-trade systems such as the EU Emissions Trading System (ETS) for reducing carbon emissions.",
          parts: [
            { label: "a", prompt: "Explain how cap-and-trade reduces emissions.", marks: 2 },
            { label: "b", prompt: "Explain why it is economically efficient.", marks: 3 },
            { label: "c", prompt: "Evaluate its weaknesses.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cap-and-trade", statement: "Cap fixes total emissions; tradable permits allocate abatement efficiently." },
            ],
            steps: [
              { part: "a", reasoning: "A cap on total emissions is set and permits issued to firms.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Firms exceeding permits must buy them; surplus permit holders sell — total stays at cap.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Low-cost abaters reduce emissions and sell permits, profiting from trading.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "High-cost abaters buy permits — total abatement at minimum cost.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The permit price provides a continuous incentive for green innovation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weakness: effectiveness depends entirely on the cap being set at the right level.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Permit price volatility and windfall profits for incumbent polluters are concerns.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: cost-effective if cap is stringent and enforced; weak if cap too loose or permits over-allocated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cap + trading holds emissions at limit. (b) Lowest-cost abatement + innovation incentive. (c) Depends on cap design and enforcement.",
            commonErrors: ["Ignoring that the cap level determines environmental effectiveness."],
          },
        },
        {
          id: "econ-u3-l32c2q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why quotas are used to manage common access resources such as fisheries, and one drawback of this approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quota for common access resource", statement: "Limits total catch to a sustainable level, addressing the tragedy of the commons." },
            ],
            steps: [
              { reasoning: "Open-access fisheries are overexploited because each fisher ignores costs imposed on others.", marks: 1, markCode: "M" },
              { reasoning: "A quota caps total catch, preserving the stock for future generations.", marks: 1, markCode: "M" },
              { reasoning: "Drawback: quotas are hard to monitor and enforce, especially across borders; may be exceeded illegally.", marks: 1, markCode: "R" },
              { reasoning: "Alternative: individual transferable quotas combine the cap with market efficiency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quotas prevent overexploitation but are costly to enforce; ITQs improve efficiency.",
            commonErrors: ["Saying quotas eliminate the problem — enforcement is the key difficulty."],
          },
        },
        {
          id: "econ-u3-l32c2q17",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "In a permit market, Firm A needs 60 permits but holds 40; Firm C needs 50 permits but holds 30; Firm B holds 50 but needs only 30. How many permits must Firm A buy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "20" },
              { id: "c", text: "30" },
              { id: "d", text: "40" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Permit balance", statement: "Permits needed = required emissions allowance − permits held." },
            ],
            steps: [
              { reasoning: "Firm A needs 60 − 40 = 20 permits; Firm C needs 50 − 30 = 20; Firm B sells 50 − 30 = 20 — the market balances.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 20",
            commonErrors: ["Adding held and needed permits instead of subtracting."],
          },
        },
      ],
    },
  ],
};
