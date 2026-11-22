import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "econ-u1-lesson-3-1",
  code: "3-1",
  title: "Market Failure",
  goal: "I CAN identify and explain the sources of market failure: externalities, public goods, information asymmetry and merit/demerit goods.",
  standards: ["Paper 1", "Paper 2", "Topic 3"],
  vocabulary: [
    { term: "Market failure", definition: "A situation where the free market fails to allocate resources efficiently, leaving social welfare below the optimum." },
    { term: "Externality", definition: "A cost or benefit of production/consumption affecting third parties who are not involved in the transaction." },
    { term: "Negative externality", definition: "A cost imposed on third parties (e.g. pollution from a factory)." },
    { term: "Positive externality", definition: "A benefit conferred on third parties (e.g. vaccination protecting others)." },
    { term: "Public good", definition: "A good that is non-rivalrous and non-excludable — typically underprovided by markets." },
    { term: "Information asymmetry", definition: "When one party in a transaction knows more than the other, leading to inefficient outcomes." },
  ],
  concepts: [
    {
      id: "econ-u3-externalities-public-goods",
      title: "Externalities and Public Goods",
      skill: "Explain negative and positive externalities using MSC/MSB and social cost/benefit, and why public goods are underprovided.",
      lesson: {
        sections: [
          {
            heading: "Externalities",
            body: "An **externality** affects third parties not involved in the transaction. **Negative externalities** (pollution, noise, second-hand smoke) mean social cost exceeds private cost — the market produces **too much** of the good. **Positive externalities** (vaccination, education, beekeeping) mean social benefit exceeds private benefit — the market produces **too little**. The efficient output is where **MSC = MSB** (social optimum), not where MPC = MPB.",
          },
          {
            heading: "Public goods",
            body: "**Public goods** are **non-rivalrous** (one person's consumption does not reduce availability) and **non-excludable** (impossible to prevent non-payers from consuming). Examples: national defence, street lighting, lighthouses. Because non-payers cannot be excluded, no one has an incentive to pay — the free-rider problem means markets provide **zero or too little**. Government usually provides public goods financed by taxation.",
          },
          {
            heading: "Common access resources",
            body: "**Common access resources** (fisheries, forests, atmosphere) are rivalrous but non-excludable. Each user ignores the cost imposed on others, leading to **overexploitation** — the 'tragedy of the commons'. This is another source of market failure requiring regulation, quotas or property rights.",
          },
        ],
        keyFormulas: [
          { name: "Social vs private", statement: "MSC = MPC + external cost; MSB = MPB + external benefit" },
          { name: "Efficiency condition", statement: "MSC = MSB for social optimum" },
          { name: "Public good", statement: "Non-rivalrous + non-excludable → free-rider problem" },
        ],
        workedExample: {
          problem: "A factory pollutes a river. Draw/explain the gap between private and social cost.",
          solution: "MSC = MPC + external pollution cost. The market produces where MPC = MPB (Q_market), but the social optimum is at MSC = MSB (Q_optimal < Q_market) — the market overproduces and over-pollutes.",
        },
      },
      questions: [
        {
          id: "econ-u3-l31c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A negative externality of production occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consumers pay a higher price" },
              { id: "b", text: "The government taxes the output" },
              { id: "c", text: "A producer receives a subsidy" },
              { id: "d", text: "A third party bears a cost from the production" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Negative externality", statement: "A cost imposed on third parties not involved in the transaction." },
            ],
            steps: [
              { reasoning: "A negative externality is an uncompensated cost borne by outsiders (e.g. pollution).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A third party bears a cost from the production",
            commonErrors: ["Confusing external cost with the producer's own private cost."],
          },
        },
        {
          id: "econ-u3-l31c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain the free-rider problem in the provision of public goods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Free-rider problem", statement: "Non-excludability means people can consume without paying, so private provision fails." },
            ],
            steps: [
              { reasoning: "Public goods are non-excludable — once provided, everyone benefits.", marks: 1, markCode: "M" },
              { reasoning: "Individuals can consume without paying, so no one wants to be the first to pay.", marks: 1, markCode: "M" },
              { reasoning: "Result: markets underprovide or fail to provide the good entirely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Non-excludability → free-riding → underprovision by markets.",
            commonErrors: ["Confusing public goods with merit goods — public goods are defined by non-rivalry and non-excludability."],
          },
        },
        {
          id: "econ-u3-l31c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Vaccination against a contagious disease provides benefits to people who are not vaccinated. Using social benefit, explain why the free market underprovides vaccinations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Positive externality", statement: "MSB > MPB — the market produces less than the social optimum." },
            ],
            steps: [
              { reasoning: "Vaccination protects others (herd immunity) — a positive externality.", marks: 1, markCode: "M" },
              { reasoning: "Social benefit (MSB) exceeds the private benefit (MPB) to the vaccinated individual.", marks: 1, markCode: "M" },
              { reasoning: "Consumers only consider private benefit, so they buy less than the socially optimal quantity.", marks: 1, markCode: "R" },
              { reasoning: "Result: market underprovides vaccinations — a positive externality market failure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MSB > MPB → consumers under-consume → market fails to reach social optimum.",
            commonErrors: ["Describing negative externality instead of positive."],
          },
        },
        {
          id: "econ-u3-l31c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of common access resources being left to the free market, using fisheries as an example.",
          parts: [
            { label: "a", prompt: "Define common access resources and the 'tragedy of the commons'.", marks: 2 },
            { label: "b", prompt: "Explain why free markets lead to overexploitation of fisheries.", marks: 3 },
            { label: "c", prompt: "Evaluate possible solutions to overfishing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common access resource", statement: "Rivalrous but non-excludable — e.g. open-access fisheries." },
            ],
            steps: [
              { part: "a", reasoning: "Common access resources are rivalrous (one user's catch reduces others') but non-excludable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tragedy of the commons: individual incentives lead to collective overexploitation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each fisher ignores the cost of depleting the stock imposed on others.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Private benefit of catching one more fish exceeds private cost — but social cost is higher.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Result: overfishing, stock collapse — a market failure.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Quotas, licences, taxes or tradeable permits can limit catch to sustainable levels.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Property rights or community management can align incentives.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: effective if enforced and scientifically based, but hard to police internationally.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Rivalrous + non-excludable → tragedy of commons. (b) Individual incentives ignore social cost → overfishing. (c) Quotas/permits/property rights can help if enforced.",
            commonErrors: ["Treating fisheries as public goods — they are rivalrous, unlike public goods."],
          },
        },
        {
          id: "econ-u3-l31c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of a positive externality of consumption?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Noise from a building site" },
              { id: "b", text: "Vaccination protecting unvaccinated people through herd immunity" },
              { id: "c", text: "Second-hand smoke affecting non-smokers" },
              { id: "d", text: "Pollution from a coal-fired power station" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive externality", statement: "A benefit conferred on third parties not involved in the transaction." },
            ],
            steps: [
              { reasoning: "A positive externality is an uncompensated benefit to outsiders — vaccination reduces disease risk for people who are not vaccinated.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Vaccination protecting unvaccinated people through herd immunity",
            commonErrors: ["Confusing positive externalities with negative externalities."],
          },
        },
        {
          id: "econ-u3-l31c1q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For a product with a negative production externality, the marginal social cost (MSC) is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal to the marginal private cost (MPC)" },
              { id: "b", text: "Always equal to the marginal social benefit" },
              { id: "c", text: "Less than the marginal private cost (MPC)" },
              { id: "d", text: "Greater than the marginal private cost because it includes the external cost" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "MSC", statement: "MSC = MPC + marginal external cost" },
            ],
            steps: [
              { reasoning: "Social cost adds the external cost borne by third parties to the private cost, so MSC exceeds MPC.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Greater than the marginal private cost because it includes the external cost",
            commonErrors: ["Thinking MSC equals MPC — the external cost must be added."],
          },
        },
        {
          id: "econ-u3-l31c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which pair of characteristics defines a public good?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-rivalrous and excludable" },
              { id: "b", text: "Non-rivalrous and non-excludable" },
              { id: "c", text: "Rivalrous and excludable" },
              { id: "d", text: "Rivalrous and non-excludable" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Public good", statement: "Non-rivalrous (one person's use does not reduce availability) and non-excludable (non-payers cannot be prevented)." },
            ],
            steps: [
              { reasoning: "A public good must be both non-rivalrous and non-excludable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Non-rivalrous and non-excludable",
            commonErrors: ["Confusing public goods with common access resources, which are rivalrous."],
          },
        },
        {
          id: "econ-u3-l31c1q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Compared with the social optimum, a free market producing a good that creates a negative externality of production will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce exactly the socially optimal quantity" },
              { id: "b", text: "Produce too much only when demand is price inelastic" },
              { id: "c", text: "Produce too much of the good" },
              { id: "d", text: "Produce too little of the good" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative externality outcome", statement: "MSC > MPC so the market quantity exceeds the social optimum." },
            ],
            steps: [
              { reasoning: "Producers respond to MPC, not MSC; since MSC > MPC, the market quantity is greater than the social optimum.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Produce too much of the good",
            commonErrors: ["Reversing the result — negative externalities cause overproduction, positive externalities underproduction."],
          },
        },
        {
          id: "econ-u3-l31c1q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The socially efficient (optimal) level of output of a good is achieved where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "MSC = MSB" },
              { id: "b", text: "MPC = MPB" },
              { id: "c", text: "P = minimum ATC" },
              { id: "d", text: "MR = MC" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Social efficiency condition", statement: "MSC = MSB gives the socially optimal output." },
            ],
            steps: [
              { reasoning: "MPC = MPB gives only the private market equilibrium; the social optimum requires social cost to equal social benefit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** MSC = MSB",
            commonErrors: ["Choosing MPC = MPB, which ignores external costs and benefits."],
          },
        },
        {
          id: "econ-u3-l31c1q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "At the free-market output of a polluting industry, MSC is $12 per unit and MSB is $8 per unit. The market quantity exceeds the socially optimal quantity by 4,000 units. Estimate the deadweight welfare loss.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 4, unit: "$ per unit" },
              { label: "ii", answer: 8000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Deadweight loss", statement: "DWL = 1/2 × quantity gap × per-unit gap between MSC and MSB" },
            ],
            steps: [
              { reasoning: "The per-unit welfare gap is MSC − MSB = 12 − 8 = $4.", marks: 1, markCode: "M" },
              { reasoning: "DWL = 0.5 × 4,000 units × $4 per unit.", marks: 1, markCode: "M" },
              { reasoning: "DWL = $8,000.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Per-unit gap = $4; deadweight loss ≈ $8,000.",
            commonErrors: ["Forgetting the 1/2 factor in the welfare-loss triangle."],
          },
        },
        {
          id: "econ-u3-l31c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For vaccinations, MPB = $10 per dose and the marginal external benefit is $3 per dose. MSB is closest to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3 per dose" },
              { id: "b", text: "$10 per dose" },
              { id: "c", text: "$7 per dose" },
              { id: "d", text: "$13 per dose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "MSB", statement: "MSB = MPB + marginal external benefit" },
            ],
            steps: [
              { reasoning: "MSB = MPB + marginal external benefit = 10 + 3 = $13 per dose.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $13 per dose",
            commonErrors: ["Subtracting the external benefit instead of adding it."],
          },
        },
        {
          id: "econ-u3-l31c1q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why a free market tends to overproduce a good that creates a negative externality of production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative externality of production", statement: "MSC > MPC, so the market quantity exceeds the social optimum." },
            ],
            steps: [
              { reasoning: "The external cost (e.g. pollution) is borne by third parties, not by the producer.", marks: 1, markCode: "M" },
              { reasoning: "Producers equate MPC with MPB, ignoring the external cost, so private output is too high.", marks: 1, markCode: "M" },
              { reasoning: "The social optimum requires MSC = MSB, which occurs at a lower quantity.", marks: 1, markCode: "R" },
              { reasoning: "Result: overproduction and a deadweight welfare loss — market failure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MSC > MPC → market produces where MPC = MPB, above the MSC = MSB optimum → overproduction.",
            commonErrors: ["Saying consumers cause the overproduction — producers ignore external costs."],
          },
        },
        {
          id: "econ-u3-l31c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Using MSB and MPB, explain why the free market underprovides education.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Positive externality of consumption", statement: "MSB > MPB, so the market quantity is below the social optimum." },
            ],
            steps: [
              { reasoning: "Education creates positive externalities — e.g. higher productivity and lower crime benefiting society.", marks: 1, markCode: "M" },
              { reasoning: "Therefore MSB exceeds MPB for each unit of education.", marks: 1, markCode: "M" },
              { reasoning: "Individuals decide on the basis of private benefit, so they consume less than the social optimum.", marks: 1, markCode: "R" },
              { reasoning: "Result: underprovision of education — a market failure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MSB > MPB → individuals under-consume → market output below social optimum.",
            commonErrors: ["Confusing positive externality with negative externality."],
          },
        },
        {
          id: "econ-u3-l31c1q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Classify each of the following as rivalrous or non-rivalrous, and excludable or non-excludable: (i) national defence, (ii) commercial fish stocks in open access, (iii) cinema tickets, (iv) street lighting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rivalry and excludability", statement: "Rivalrous: one person's consumption reduces availability; excludable: non-payers can be prevented." },
            ],
            steps: [
              { reasoning: "National defence is non-rivalrous and non-excludable — a public good.", marks: 1, markCode: "M" },
              { reasoning: "Open-access fish stocks are rivalrous but non-excludable — a common access resource.", marks: 1, markCode: "M" },
              { reasoning: "Cinema tickets are rivalrous (one seat, one viewer) and excludable (pay to enter).", marks: 1, markCode: "M" },
              { reasoning: "Street lighting is non-rivalrous and non-excludable — a public good.", marks: 1, markCode: "M" },
              { reasoning: "Rivalry concerns whether consumption reduces availability for others; excludability concerns whether non-payers can be excluded.", marks: 1, markCode: "R" },
              { reasoning: "All four goods correctly classified using both criteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Defence and street lighting: public goods; fish stocks: common access resource; cinema tickets: private good.",
            commonErrors: ["Classifying fish stocks as public goods — they are rivalrous."],
          },
        },
        {
          id: "econ-u3-l31c1q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Beekeepers produce honey while their bees pollinate neighbouring orchards.",
          parts: [
            { label: "a", prompt: "Define a positive externality and identify it in this example.", marks: 2 },
            { label: "b", prompt: "Explain why honey production by the free market is below the social optimum.", marks: 3 },
            { label: "c", prompt: "Evaluate a government subsidy paid to beekeepers.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Positive externality", statement: "A benefit conferred on third parties not involved in the transaction." },
            ],
            steps: [
              { part: "a", reasoning: "A positive externality is an uncompensated benefit to third parties.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Pollination of orchards benefits neighbouring farmers who do not pay for it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Pollination raises the social benefit of beekeeping above the private benefit (honey sales).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Beekeepers equate private benefit with private cost, so they keep fewer hives than socially optimal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Result: honey and pollination services are underprovided relative to the MSC = MSB optimum.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A subsidy lowers beekeepers' costs, raising output toward the social optimum.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It is most efficient if set equal to the marginal external benefit, but the value of pollination is hard to measure.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: effective in principle but costly to administer and uncertain in size.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Uncompensated benefit to third parties — pollination. (b) MSB > MPB → underproduction. (c) Subsidy helps but sizing and administration are difficult.",
            commonErrors: ["Ignoring that the external benefit accrues to orchard owners, not honey consumers."],
          },
        },
        {
          id: "econ-u3-l31c1q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the free-rider problem and why it leads governments to provide public goods such as lighthouses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Free-rider problem", statement: "Non-excludability lets people consume without paying, so private provision fails." },
            ],
            steps: [
              { reasoning: "A lighthouse is non-excludable — ships cannot be prevented from using its light.", marks: 1, markCode: "M" },
              { reasoning: "Each ship can benefit without paying, so no private firm can charge for the service.", marks: 1, markCode: "M" },
              { reasoning: "With no revenue, the private market provides zero or too little of the good.", marks: 1, markCode: "R" },
              { reasoning: "Government provides it financed by taxation because the social benefit exceeds any private return.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Non-excludability → free-riding → market failure → government provision.",
            commonErrors: ["Saying the lighthouse is rivalrous — it is non-rivalrous."],
          },
        },
        {
          id: "econ-u3-l31c1q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A polluting firm has MPC = $5 and a marginal external cost of $3 per unit. (i) Calculate MSC per unit. (ii) Calculate the Pigouvian tax per unit that would internalise the externality.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 8, unit: "$ per unit" },
              { label: "ii", answer: 3, unit: "$ per unit" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "MSC and Pigouvian tax", statement: "MSC = MPC + MEC; Pigouvian tax = MEC at the social optimum" },
            ],
            steps: [
              { reasoning: "MSC = MPC + MEC = 5 + 3 = $8 per unit.", marks: 1, markCode: "M" },
              { reasoning: "MSC per unit = $8.", marks: 1, markCode: "A" },
              { reasoning: "The internalising tax equals the marginal external cost = $3 per unit.", marks: 1, markCode: "M" },
              { reasoning: "Pigouvian tax per unit = $3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) MSC = $8 per unit; (ii) tax = $3 per unit.",
            commonErrors: ["Setting the tax equal to total external cost rather than the marginal external cost."],
          },
        },
      ],
    },
    {
      id: "econ-u3-information-merit-demerit",
      title: "Information Asymmetry and Merit/Demerit Goods",
      skill: "Explain how information asymmetry causes market failure and classify merit and demerit goods.",
      lesson: {
        sections: [
          {
            heading: "Information asymmetry",
            body: "**Information asymmetry** occurs when one party knows more than the other. **Adverse selection**: before a transaction, hidden information leads to bad outcomes — e.g. insurance attracts high-risk customers who know their risk better than the insurer. **Moral hazard**: after a transaction, behaviour changes because risk is shifted — e.g. insured drivers drive more carelessly. Markets can fail because prices cannot reflect true quality or risk.",
          },
          {
            heading: "Merit goods",
            body: "**Merit goods** are under-consumed by free markets because consumers underestimate their benefits — education, healthcare, vaccinations. Individuals may not appreciate long-term gains or cannot afford them. Society benefits when consumption rises above the free-market level, so government may subsidise or provide them directly.",
          },
          {
            heading: "Demerit goods",
            body: "**Demerit goods** are over-consumed because consumers underestimate their costs — cigarettes, alcohol, junk food. They often have **negative externalities**. Consumers may be myopic (short-sighted) or influenced by addiction and advertising. Government may tax them (sin taxes), ban advertising or restrict sales.",
          },
        ],
        keyFormulas: [
          { name: "Adverse selection vs moral hazard", statement: "Before transaction = adverse selection; after = moral hazard" },
          { name: "Merit good", statement: "Under-consumed; benefits underestimated" },
          { name: "Demerit good", statement: "Over-consumed; costs underestimated, often negative externalities" },
        ],
        workedExample: {
          problem: "Explain why a used-car market may suffer from adverse selection.",
          solution: "Sellers know the car's true condition; buyers do not. Good cars are withdrawn (sellers won't sell cheap), leaving mostly lemons — the market unravels because buyers price for average quality.",
        },
      },
      questions: [
        {
          id: "econ-u3-l31c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Moral hazard occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A good has negative externalities" },
              { id: "b", text: "Consumers underestimate benefits" },
              { id: "c", text: "Behaviour changes after insurance because risk is covered" },
              { id: "d", text: "Buyers hide information before a transaction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moral hazard", statement: "Post-transaction behaviour change because risk is shifted to another party." },
            ],
            steps: [
              { reasoning: "Moral hazard is about behaviour after the transaction — e.g. insured people take more risks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Behaviour changes after insurance because risk is covered",
            commonErrors: ["Confusing moral hazard with adverse selection (pre-transaction)."],
          },
        },
        {
          id: "econ-u3-l31c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between a merit good and a demerit good, with one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Merit vs demerit goods", statement: "Merit = under-consumed (benefits underestimated); demerit = over-consumed (costs underestimated)." },
            ],
            steps: [
              { reasoning: "Merit good: e.g. education or healthcare — under-consumed because individuals undervalue benefits; merit good example given.", marks: 1, markCode: "M" },
              { reasoning: "Demerit good: e.g. cigarettes or alcohol — over-consumed because individuals undervalue costs; demerit good example given.", marks: 1, markCode: "M" },
              { reasoning: "Both may involve information problems; merit goods often get subsidies, demerit goods get taxes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Merit = education/health (under-consumed); demerit = cigarettes/alcohol (over-consumed).",
            commonErrors: ["Confusing merit/demerit goods with public goods — different definitions."],
          },
        },
        {
          id: "econ-u3-l31c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how adverse selection can cause the market for health insurance to fail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Adverse selection", statement: "Hidden information before a transaction leads to a pool of high-risk customers." },
            ],
            steps: [
              { reasoning: "Individuals know their own health risks better than insurers.", marks: 1, markCode: "M" },
              { reasoning: "High-risk individuals are most willing to buy insurance at the average premium.", marks: 1, markCode: "M" },
              { reasoning: "The insured pool becomes disproportionately risky, raising premiums for everyone.", marks: 1, markCode: "R" },
              { reasoning: "Healthy people drop out, premiums rise further — the market can unravel (adverse selection death spiral).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Asymmetric information → high-risk pool → rising premiums → market failure.",
            commonErrors: ["Describing moral hazard (post-purchase behaviour) instead of adverse selection."],
          },
        },
        {
          id: "econ-u3-l31c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of information asymmetry in markets, using one real-world example.",
          parts: [
            { label: "a", prompt: "Define information asymmetry and distinguish adverse selection from moral hazard.", marks: 2 },
            { label: "b", prompt: "Explain how information asymmetry leads to market failure in your chosen example.", marks: 3 },
            { label: "c", prompt: "Evaluate possible remedies for information problems.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Information asymmetry", statement: "One party knows more than the other in a transaction." },
            ],
            steps: [
              { part: "a", reasoning: "Adverse selection = hidden information before the transaction; moral hazard = behaviour change after it.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Example: used cars, insurance, or financial markets — one party has better information.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Prices cannot reflect true quality/risk, so good products may be withdrawn or overpriced.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Market shrinks or fails — e.g. 'lemons' problem in used-car markets.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Remedies: warranties, guarantees, regulation, certification, reputation/signalling.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Information provision (labelling, disclosure) can reduce the asymmetry.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: remedies help but may be costly or incomplete — some asymmetry persists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Adverse selection (pre) vs moral hazard (post). (b) Asymmetric info → mispricing → market failure. (c) Warranties/regulation/signalling mitigate but imperfectly.",
            commonErrors: ["Not distinguishing adverse selection from moral hazard in the example."],
          },
        },
        {
          id: "econ-u3-l31c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Adverse selection refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Over-consumption of a demerit good" },
              { id: "b", text: "Free-riding on a public good" },
              { id: "c", text: "Behaviour changing after a contract is signed" },
              { id: "d", text: "Hidden information affecting a transaction before it occurs" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adverse selection", statement: "Hidden information before a transaction leads to inefficient outcomes." },
            ],
            steps: [
              { reasoning: "Adverse selection is about information hidden before the transaction takes place.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Hidden information affecting a transaction before it occurs",
            commonErrors: ["Confusing adverse selection (pre-transaction) with moral hazard (post-transaction)."],
          },
        },
        {
          id: "econ-u3-l31c2q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A demerit good is best described as a good that is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always provided free by the government" },
              { id: "b", text: "Non-excludable and non-rivalrous" },
              { id: "c", text: "Under-consumed because its benefits are underestimated" },
              { id: "d", text: "Over-consumed because its costs are underestimated" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Demerit good", statement: "Over-consumed because consumers underestimate its costs; often has negative externalities." },
            ],
            steps: [
              { reasoning: "Demerit goods (e.g. cigarettes, alcohol) are over-consumed as consumers undervalue the costs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Over-consumed because its costs are underestimated",
            commonErrors: ["Confusing demerit goods with merit goods."],
          },
        },
        {
          id: "econ-u3-l31c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of moral hazard?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A used-car seller hiding the vehicle's defects" },
              { id: "b", text: "An insured driver taking greater risks because the insurer pays for accidents" },
              { id: "c", text: "Consumers ignoring health warnings on cigarette packets" },
              { id: "d", text: "A factory concealing its pollution from regulators" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moral hazard", statement: "Behaviour changes after the transaction because risk is shifted to another party." },
            ],
            steps: [
              { reasoning: "Moral hazard is post-transaction risk-taking — e.g. insured drivers becoming less careful.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An insured driver taking greater risks because the insurer pays for accidents",
            commonErrors: ["Choosing a pre-transaction information problem (adverse selection) instead."],
          },
        },
        {
          id: "econ-u3-l31c2q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The 'lemons' problem in used-car markets is primarily caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moral hazard" },
              { id: "b", text: "A positive consumption externality" },
              { id: "c", text: "Adverse selection" },
              { id: "d", text: "The free-rider problem" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Lemons problem", statement: "Buyers cannot distinguish quality, so good cars exit and only 'lemons' remain." },
            ],
            steps: [
              { reasoning: "Sellers know car quality; buyers do not — hidden information before sale is adverse selection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Adverse selection",
            commonErrors: ["Confusing it with moral hazard, which occurs after purchase."],
          },
        },
        {
          id: "econ-u3-l31c2q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Merit goods such as education and healthcare are under-consumed by free markets mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consumers underestimate their private and social benefits" },
              { id: "b", text: "They are non-excludable" },
              { id: "c", text: "They always create negative externalities" },
              { id: "d", text: "Producers charge the monopoly price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Merit good under-consumption", statement: "Individuals undervalue long-term benefits, so demand is below the social optimum." },
            ],
            steps: [
              { reasoning: "Consumers underestimate the benefits (myopia, inability to pay), so they consume less than society would choose.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Consumers underestimate their private and social benefits",
            commonErrors: ["Confusing merit goods with public goods — merit goods are excludable."],
          },
        },
        {
          id: "econ-u3-l31c2q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a merit good, MPB = $20 per unit and the marginal external benefit is $5 per unit. MSB is closest to:",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 25, unit: "$ per unit" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "MSB", statement: "MSB = MPB + marginal external benefit" },
            ],
            steps: [
              { reasoning: "MSB = MPB + MEB = 20 + 5 = $25 per unit.", marks: 1, markCode: "M" },
              { reasoning: "MSB = $25 per unit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MSB = $25 per unit.",
            commonErrors: ["Adding costs instead of benefits, or forgetting the external benefit."],
          },
        },
        {
          id: "econ-u3-l31c2q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The price of a demerit good rises by 10% and quantity demanded falls by 15%. The price elasticity of demand (PED) is closest to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15" },
              { id: "b", text: "0.67" },
              { id: "c", text: "1.0" },
              { id: "d", text: "1.5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Price elasticity of demand", statement: "PED = % change in quantity demanded / % change in price" },
            ],
            steps: [
              { reasoning: "PED = 15 / 10 = 1.5 — demand is relatively elastic.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 1.5",
            commonErrors: ["Inverting the ratio (10/15 = 0.67)."],
          },
        },
        {
          id: "econ-u3-l31c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how moral hazard can arise in a market for health insurance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Moral hazard", statement: "Post-transaction behaviour change because risk is shifted to another party." },
            ],
            steps: [
              { reasoning: "Once insured, individuals no longer bear the full cost of risky behaviour.", marks: 1, markCode: "M" },
              { reasoning: "They may take less care of their health or over-use services because the insurer pays.", marks: 1, markCode: "M" },
              { reasoning: "Higher claims raise premiums for all insured people.", marks: 1, markCode: "R" },
              { reasoning: "Result: inefficient allocation of risk — a consequence of asymmetric information.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Insurance removes personal risk → riskier behaviour → higher claims and premiums.",
            commonErrors: ["Describing adverse selection (pre-contract information) instead of moral hazard."],
          },
        },
        {
          id: "econ-u3-l31c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why healthcare is classified as a merit good and why the free market underprovides it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Merit good", statement: "Under-consumed because individuals underestimate benefits; positive externalities exist." },
            ],
            steps: [
              { reasoning: "Healthcare has large long-term benefits — healthier people are more productive — that individuals may not fully appreciate.", marks: 1, markCode: "M" },
              { reasoning: "Positive externalities (e.g. reduced disease transmission) mean MSB exceeds MPB.", marks: 1, markCode: "M" },
              { reasoning: "High prices also exclude poorer households who cannot afford treatment.", marks: 1, markCode: "R" },
              { reasoning: "Result: consumption below the social optimum — market failure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "MSB > MPB + affordability problems → underconsumption → merit good market failure.",
            commonErrors: ["Confusing merit goods with public goods — healthcare is excludable."],
          },
        },
        {
          id: "econ-u3-l31c2q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 6,
          stem: "Distinguish between adverse selection and moral hazard, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adverse selection vs moral hazard", statement: "Adverse selection = hidden information before the transaction; moral hazard = behaviour change after it." },
            ],
            steps: [
              { reasoning: "Adverse selection occurs before the transaction when one party has hidden information.", marks: 1, markCode: "M" },
              { reasoning: "Example: used-car market — sellers know defects buyers cannot see.", marks: 1, markCode: "M" },
              { reasoning: "Moral hazard occurs after the transaction when risk is shifted and behaviour changes.", marks: 1, markCode: "M" },
              { reasoning: "Example: insured drivers take more risks because the insurer bears accident costs.", marks: 1, markCode: "M" },
              { reasoning: "Both arise from asymmetric information but at different stages.", marks: 1, markCode: "R" },
              { reasoning: "Both can cause market failure through mispricing or excessive risk-taking.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adverse selection = pre-transaction hidden info (lemons); moral hazard = post-transaction risk-taking (insurance).",
            commonErrors: ["Swapping the two definitions or giving examples of the wrong type."],
          },
        },
        {
          id: "econ-u3-l31c2q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Consider the market for private health insurance.",
          parts: [
            { label: "a", prompt: "Define information asymmetry and adverse selection.", marks: 2 },
            { label: "b", prompt: "Explain how adverse selection can cause an insurance 'death spiral'.", marks: 3 },
            { label: "c", prompt: "Evaluate policies that could make insurance markets work better.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Adverse selection", statement: "High-risk individuals are most willing to buy insurance at average premiums." },
            ],
            steps: [
              { part: "a", reasoning: "Information asymmetry: one party knows more than the other.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Adverse selection: hidden information before the transaction leads to a pool of high-risk customers.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Healthy people drop out as premiums reflect average risk, leaving mostly high-risk enrollees.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Insurer raises premiums to cover higher claims, pushing out more low-risk people.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The market unravels — a death spiral.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Community rating or risk equalisation pools risk across all enrollees.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Mandatory coverage or subsidies can widen the risk pool.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: helps but may raise costs for low-risk groups; regulation needed to enforce.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Asymmetric info → adverse selection. (b) Low-risk exit → premiums rise → death spiral. (c) Pooling/mandates help but cost trade-offs.",
            commonErrors: ["Confusing adverse selection with moral hazard in part (b)."],
          },
        },
        {
          id: "econ-u3-l31c2q16",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why demerit goods such as cigarettes are over-consumed by free markets.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Demerit good over-consumption", statement: "Consumers underestimate costs; negative externalities and addiction reinforce over-consumption." },
            ],
            steps: [
              { reasoning: "Consumers are myopic — they undervalue long-term health costs.", marks: 1, markCode: "M" },
              { reasoning: "Addiction and advertising make demand less responsive to price.", marks: 1, markCode: "M" },
              { reasoning: "Negative externalities (health system costs, second-hand smoke) are not borne by smokers.", marks: 1, markCode: "R" },
              { reasoning: "Result: consumption above the social optimum — market failure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Myopia + addiction + negative externalities → over-consumption of demerit goods.",
            commonErrors: ["Treating demerit goods as public goods."],
          },
        },
        {
          id: "econ-u3-l31c2q17",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "For a vaccine, MPB = $8 per dose and the marginal external benefit is $4 per dose. (i) Calculate MSB. (ii) Calculate the subsidy per dose that would align private incentives with the social optimum.",
          response: {
            type: "numeric",
            parts: [
              { label: "i", answer: 12, unit: "$ per dose" },
              { label: "ii", answer: 4, unit: "$ per dose" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "MSB and optimal subsidy", statement: "MSB = MPB + MEB; optimal subsidy = marginal external benefit" },
            ],
            steps: [
              { reasoning: "MSB = MPB + MEB = 8 + 4 = $12 per dose.", marks: 1, markCode: "M" },
              { reasoning: "MSB = $12 per dose.", marks: 1, markCode: "A" },
              { reasoning: "The subsidy that closes the private–social gap equals the marginal external benefit = $4 per dose.", marks: 1, markCode: "M" },
              { reasoning: "Subsidy = $4 per dose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) MSB = $12; (ii) subsidy = $4 per dose.",
            commonErrors: ["Setting the subsidy equal to MSB rather than the marginal external benefit."],
          },
        },
      ],
    },
  ],
};
