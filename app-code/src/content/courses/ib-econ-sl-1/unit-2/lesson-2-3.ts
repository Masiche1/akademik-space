import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "econ-u1-lesson-2-3",
  code: "2-3",
  title: "Elasticity and Market Equilibrium",
  goal: "I CAN calculate and interpret price, income and cross-price elasticities, and explain how markets reach equilibrium.",
  standards: ["Paper 1", "Paper 2", "Topic 2"],
  vocabulary: [
    { term: "Price elasticity of demand (PED)", definition: "The responsiveness of quantity demanded to a change in price." },
    { term: "Price elasticity of supply (PES)", definition: "The responsiveness of quantity supplied to a change in price." },
    { term: "Income elasticity of demand (YED)", definition: "The responsiveness of demand to a change in consumer income." },
    { term: "Cross-price elasticity of demand (XED)", definition: "The responsiveness of demand for one good to a change in the price of another." },
    { term: "Market equilibrium", definition: "The price and quantity where quantity demanded equals quantity supplied." },
    { term: "Equilibrium price", definition: "The price at which the quantity demanded equals the quantity supplied." },
  ],
  concepts: [
    {
      id: "econ-u2-elasticity",
      title: "Price, Income and Cross-Price Elasticity",
      skill: "Calculate PED, PES, YED and XED and interpret what elastic, inelastic, unit elastic, normal, inferior, substitute and complement values mean.",
      lesson: {
        sections: [
          {
            heading: "Price elasticity of demand",
            body: "**PED** measures how responsive quantity demanded is to price: $PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$. Values: **elastic** (PED > 1), **inelastic** (0 < PED < 1), **unit elastic** (= 1), **perfectly inelastic** (= 0), **perfectly elastic** (infinite). PED depends on availability of substitutes, necessity vs luxury, proportion of income spent, and time. Inelastic goods (insulin, petrol short-run) let firms raise revenue by raising price; elastic goods lose revenue.",
          },
          {
            heading: "Price elasticity of supply",
            body: "**PES** = $\\frac{\\%\\Delta Q_s}{\\%\\Delta P}$. Supply is usually more elastic in the **long run** (firms can adjust capacity) than the **short run**. Goods with easily available inputs and spare capacity have elastic supply; perishable goods and capacity-constrained industries have inelastic supply. High PES means price changes cause big quantity responses; low PES means prices adjust instead.",
          },
          {
            heading: "Income and cross-price elasticity",
            body: "**YED** = $\\frac{\\%\\Delta Q_d}{\\%\\Delta Y}$. Positive YED = normal good; negative = inferior good; YED > 1 = luxury. **XED** = $\\frac{\\%\\Delta Q_d \\text{ of good A}}{\\%\\Delta P \\text{ of good B}}$. Positive XED = substitutes; negative = complements. These elasticities classify goods and predict how demand responds to income or related price changes.",
          },
        ],
        keyFormulas: [
          { name: "PED", statement: "$PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$ — elastic >1, inelastic <1" },
          { name: "PES", statement: "$PES = \\frac{\\%\\Delta Q_s}{\\%\\Delta P}$" },
          { name: "YED and XED", statement: "$YED = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}$; $XED = \\frac{\\%\\Delta Q_d(A)}{\\%\\Delta P(B)}$" },
        ],
        workedExample: {
          problem: "When price rises from $10 to $12, quantity demanded falls from 100 to 80. Calculate PED and state whether demand is elastic or inelastic.",
          solution: "%ΔP = 2/10 = 20%; %ΔQd = -20/100 = -20%. PED = -20/20 = -1 → unit elastic (take absolute value: 1).",
        },
      },
      questions: [
        {
          id: "econ-u2-l23c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If PED = 0.4, demand is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elastic" },
              { id: "b", text: "Inelastic" },
              { id: "c", text: "Perfectly elastic" },
              { id: "d", text: "Unit elastic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PED interpretation", statement: "PED > 1 elastic; 0 < PED < 1 inelastic; = 1 unit elastic." },
            ],
            steps: [
              { reasoning: "PED = 0.4 is between 0 and 1, so demand is inelastic.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Inelastic",
            commonErrors: ["Reversing elastic and inelastic ranges."],
          },
        },
        {
          id: "econ-u2-l23c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain two factors that make demand for a good price inelastic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Determinants of PED", statement: "Few substitutes, necessity, small income share, short time period → inelastic." },
            ],
            steps: [
              { reasoning: "Few or poor substitutes — consumers cannot easily switch away.", marks: 1, markCode: "M" },
              { reasoning: "Necessity — the good is essential so consumers buy it regardless of price.", marks: 1, markCode: "M" },
              { reasoning: "Also valid: small proportion of income spent, or very short time period to adjust.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two: few substitutes, necessity, small income share, short run.",
            commonErrors: ["Listing elastic determinants — must be inelastic ones."],
          },
        },
        {
          id: "econ-u2-l23c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "The price of coffee rises from $10 to $12 per cup, and quantity demanded falls from 100 to 80 cups per day. Calculate PED using percentage changes from the original values and state whether demand is elastic or inelastic.",
          response: {
            type: "numeric",
            parts: [
              { label: "PED", answer: 1 },
              { label: "Elastic? (1 = elastic, 2 = inelastic, 3 = unit elastic)", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "PED", statement: "$PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$" },
            ],
            steps: [
              { reasoning: "%ΔP = (12-10)/10 = 20%; %ΔQd = (80-100)/100 = -20%.", working: "\\%\\Delta P = 20\\%,\\quad \\%\\Delta Q_d = -20\\%", marks: 1, markCode: "M" },
              { reasoning: "PED = -20/20 = -1; take absolute value → PED = 1.", working: "PED = \\frac{-20}{20} = -1 \\Rightarrow |PED| = 1", marks: 1, markCode: "A" },
              { reasoning: "PED = 1 means demand is unit elastic.", marks: 1, markCode: "R" },
              { reasoning: "Answer stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "PED = 1 — demand is unit elastic.",
            commonErrors: ["Using midpoint averages, which would give a different figure.", "Forgetting the absolute value — PED is quoted positive."],
          },
        },
        {
          id: "econ-u2-l23c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the usefulness of PED, YED and XED for a business deciding whether to raise the price of its product.",
          parts: [
            { label: "a", prompt: "Define PED and explain how it is calculated.", marks: 2 },
            { label: "b", prompt: "Explain what YED and XED would tell the business.", marks: 3 },
            { label: "c", prompt: "Evaluate how useful elasticity measures are for pricing decisions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "PED", statement: "% change in quantity demanded / % change in price." },
            ],
            steps: [
              { part: "a", reasoning: "PED measures responsiveness of quantity demanded to price.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Calculated as %ΔQd / %ΔP (arc or point method).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "YED shows how demand responds to income changes — normal/inferior/luxury classification.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "XED shows whether the product is a substitute or complement to rivals' products.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Together they predict demand shifts beyond own-price changes.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "PED directly tells whether a price rise raises or lowers revenue — highly useful.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But elasticities are estimates, vary over time, and ignore competitive reactions.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: essential inputs to pricing but must be combined with other analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) %ΔQd/%ΔP. (b) YED → income sensitivity; XED → substitute/complement. (c) Very useful but estimates with limits.",
            commonErrors: ["Ignoring that elasticities change with the price range and time period."],
          },
        },
        {
          id: "econ-u2-l23c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A price elasticity of demand (PED) greater than 1 indicates that demand is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Elastic" },
              { id: "b", text: "Perfectly inelastic" },
              { id: "c", text: "Unit elastic" },
              { id: "d", text: "Inelastic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PED interpretation", statement: "PED > 1 elastic; 0 < PED < 1 inelastic; = 1 unit elastic." },
            ],
            steps: [
              { reasoning: "A PED above 1 means quantity demanded responds more than proportionally to price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Elastic",
            commonErrors: ["Reversing the elastic and inelastic ranges."],
          },
        },
        {
          id: "econ-u2-l23c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A good with a price elasticity of demand of zero (perfectly inelastic) means that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quantity demanded rises whenever price rises" },
              { id: "b", text: "Demand is infinitely responsive to price" },
              { id: "c", text: "The good has no substitutes" },
              { id: "d", text: "Quantity demanded does not respond to changes in price" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perfectly inelastic demand", statement: "PED = 0 — quantity demanded is fixed regardless of price." },
            ],
            steps: [
              { reasoning: "PED = 0 means a price change produces no change in quantity demanded.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Quantity demanded does not respond to changes in price",
            commonErrors: ["Confusing perfectly inelastic (PED = 0) with perfectly elastic demand."],
          },
        },
        {
          id: "econ-u2-l23c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A negative value for the income elasticity of demand (YED) indicates that the good is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A complement" },
              { id: "b", text: "A normal good" },
              { id: "c", text: "A luxury good" },
              { id: "d", text: "An inferior good" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "YED interpretation", statement: "Positive YED = normal good; negative YED = inferior good; YED > 1 = luxury." },
            ],
            steps: [
              { reasoning: "A negative YED means demand falls when income rises — the definition of an inferior good.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** An inferior good",
            commonErrors: ["Assuming all YED values are positive — inferior goods have negative YED."],
          },
        },
        {
          id: "econ-u2-l23c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A positive value for the cross-price elasticity of demand (XED) between two goods indicates that they are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Substitutes" },
              { id: "b", text: "Unrelated goods" },
              { id: "c", text: "Complements" },
              { id: "d", text: "Inferior goods" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "XED interpretation", statement: "Positive XED = substitutes; negative XED = complements." },
            ],
            steps: [
              { reasoning: "Positive XED means a rise in the other good's price raises demand for this good — substitutes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Substitutes",
            commonErrors: ["Reversing the sign convention for XED."],
          },
        },
        {
          id: "econ-u2-l23c1q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Compared with the short run, the price elasticity of supply of most goods is usually:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero in the long run" },
              { id: "b", text: "Lower in the long run" },
              { id: "c", text: "The same in both periods" },
              { id: "d", text: "Higher in the long run" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "PES and time period", statement: "Supply is more elastic in the long run as firms can adjust capacity and inputs." },
            ],
            steps: [
              { reasoning: "In the long run firms can change capacity, technology and input use, making quantity supplied more responsive.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Higher in the long run",
            commonErrors: ["Assuming supply elasticity is constant across time periods."],
          },
        },
        {
          id: "econ-u2-l23c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The price of a good rises from $20 to $24 and quantity demanded falls from 50 to 40 units. (a) Calculate PED using percentage changes from the original values. (b) Using the code (1 = elastic, 2 = inelastic, 3 = unit elastic), classify demand.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) PED", answer: 1 },
              { label: "(b) Classification (1 = elastic, 2 = inelastic, 3 = unit elastic)", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "PED", statement: "$PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$ — quote the absolute value." },
            ],
            steps: [
              { reasoning: "%ΔP = (24-20)/20 = 20%; %ΔQd = (40-50)/50 = -20%.", working: "\\%\\Delta P = 20\\%,\\quad \\%\\Delta Q_d = -20\\%", marks: 1, markCode: "M" },
              { reasoning: "PED = -20/20 = -1; absolute value = 1.", working: "PED = \\frac{-20}{20} = -1 \\Rightarrow |PED| = 1", marks: 1, markCode: "A" },
              { reasoning: "PED = 1 → unit elastic (code 3).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) PED = 1. (b) Unit elastic (3).",
            commonErrors: ["Reporting PED as -1 — elasticity is conventionally quoted as a positive number."],
          },
        },
        {
          id: "econ-u2-l23c1q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "When the price of a good rises from $5 to $10, quantity demanded falls from 100 to 60 units. (a) Calculate PED. (b) Using the code (1 = elastic, 2 = inelastic, 3 = unit elastic), classify demand and state the revenue implication for the firm.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) PED", answer: 0.4 },
              { label: "(b) Classification (1 = elastic, 2 = inelastic, 3 = unit elastic)", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "PED", statement: "$PED = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$ — PED < 1 inelastic." },
            ],
            steps: [
              { reasoning: "%ΔP = (10-5)/5 = 100%; %ΔQd = (60-100)/100 = -40%.", working: "\\%\\Delta P = 100\\%,\\quad \\%\\Delta Q_d = -40\\%", marks: 1, markCode: "M" },
              { reasoning: "PED = -40/100 = -0.4; absolute value = 0.4.", working: "PED = \\frac{-40}{100} = -0.4 \\Rightarrow |PED| = 0.4", marks: 1, markCode: "A" },
              { reasoning: "PED < 1 → inelastic (code 2); a price rise would increase total revenue.", marks: 1, markCode: "R" },
              { reasoning: "Classification stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) PED = 0.4. (b) Inelastic (2) — price rises raise revenue.",
            commonErrors: ["Using the new price $10 as the base for the percentage change."],
          },
        },
        {
          id: "econ-u2-l23c1q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Consumer income rises from $1,000 to $1,100 per month and quantity demanded of a good rises from 40 to 50 units. (a) Calculate the income elasticity of demand (YED). (b) Using the code (1 = normal necessity, 2 = inferior, 3 = luxury), classify the good.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) YED", answer: 2.5 },
              { label: "(b) Classification (1 = normal necessity, 2 = inferior, 3 = luxury)", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "YED", statement: "$YED = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}$ — YED > 1 indicates a luxury good." },
            ],
            steps: [
              { reasoning: "%ΔY = (1100-1000)/1000 = 10%; %ΔQd = (50-40)/40 = 25%.", working: "\\%\\Delta Y = 10\\%,\\quad \\%\\Delta Q_d = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "YED = 25/10 = 2.5.", working: "YED = \\frac{25}{10} = 2.5", marks: 1, markCode: "A" },
              { reasoning: "YED > 1 → demand rises more than proportionally — luxury good (code 3).", marks: 1, markCode: "R" },
              { reasoning: "Classification stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) YED = 2.5. (b) Luxury good (3).",
            commonErrors: ["Confusing a high positive YED with an inferior good — only negative YED signals inferior."],
          },
        },
        {
          id: "econ-u2-l23c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "When the price of good B rises by 10%, quantity demanded of good A rises by 15%. (a) Calculate the cross-price elasticity of demand (XED). (b) Using the code (1 = substitutes, 2 = complements), classify the relationship.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) XED", answer: 1.5 },
              { label: "(b) Relationship (1 = substitutes, 2 = complements)", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "XED", statement: "$XED = \\frac{\\%\\Delta Q_d \\text{ of A}}{\\%\\Delta P \\text{ of B}}$ — positive = substitutes." },
            ],
            steps: [
              { reasoning: "XED = 15/10 = 1.5.", working: "XED = \\frac{15}{10} = 1.5", marks: 1, markCode: "M" },
              { reasoning: "A positive XED means the goods are substitutes.", marks: 1, markCode: "R" },
              { reasoning: "Consumers switch to good A when good B becomes more expensive.", marks: 1, markCode: "M" },
              { reasoning: "Relationship code: substitutes = 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) XED = 1.5. (b) Substitutes (1).",
            commonErrors: ["Forgetting that XED uses the price change of the *other* good in the denominator."],
          },
        },
        {
          id: "econ-u2-l23c1q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The price of a good rises from $20 to $23 and quantity supplied rises from 100 to 130 units. (a) Calculate the price elasticity of supply (PES). (b) Using the code (1 = elastic, 2 = inelastic, 3 = unit elastic), classify supply.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) PES", answer: 2 },
              { label: "(b) Classification (1 = elastic, 2 = inelastic, 3 = unit elastic)", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "PES", statement: "$PES = \\frac{\\%\\Delta Q_s}{\\%\\Delta P}$ — PES > 1 elastic." },
            ],
            steps: [
              { reasoning: "%ΔP = (23-20)/20 = 15%; %ΔQs = (130-100)/100 = 30%.", working: "\\%\\Delta P = 15\\%,\\quad \\%\\Delta Q_s = 30\\%", marks: 1, markCode: "M" },
              { reasoning: "PES = 30/15 = 2.", working: "PES = \\frac{30}{15} = 2", marks: 1, markCode: "A" },
              { reasoning: "PES > 1 → quantity supplied responds more than proportionally — elastic (code 1).", marks: 1, markCode: "R" },
              { reasoning: "Classification stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) PES = 2. (b) Elastic (1).",
            commonErrors: ["Using quantity demanded data instead of quantity supplied."],
          },
        },
        {
          id: "econ-u2-l23c1q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain four factors that make the demand for a good price elastic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Determinants of PED", statement: "Many substitutes, luxury status, large income share and long time period make demand elastic." },
            ],
            steps: [
              { reasoning: "Many close substitutes — consumers can easily switch away when price rises.", marks: 1, markCode: "M" },
              { reasoning: "The good is a luxury rather than a necessity — spending can be postponed or cut.", marks: 1, markCode: "M" },
              { reasoning: "The good absorbs a large proportion of consumer income, so price changes matter.", marks: 1, markCode: "M" },
              { reasoning: "A long time period allows consumers to find alternatives or adjust habits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any four: many substitutes, luxury, large income share, long time period.",
            commonErrors: ["Listing determinants of inelastic demand — the question asks for elastic ones."],
          },
        },
        {
          id: "econ-u2-l23c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine why the price elasticity of supply of a good tends to be higher in the long run than in the short run.",
          parts: [
            { label: "a", prompt: "Define the price elasticity of supply (PES).", marks: 2 },
            { label: "b", prompt: "Explain the short-run constraints that keep supply inelastic.", marks: 3 },
            { label: "c", prompt: "Evaluate how firms adjust in the long run to make supply more elastic.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "PES", statement: "% change in quantity supplied / % change in price." },
              { kind: "principle", name: "Time and elasticity", statement: "Supply is less elastic in the short run because capacity and inputs are fixed." },
            ],
            steps: [
              { part: "a", reasoning: "PES measures the responsiveness of quantity supplied to a change in price.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Calculated as %ΔQs / %ΔP.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "In the short run, capital, plant size and technology are fixed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Firms can only vary variable inputs, limiting extra output.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perishable or capacity-constrained goods therefore have inelastic short-run supply.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "In the long run firms can build capacity, adopt new technology and change input mixes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "New firms can also enter, adding to total supply.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: long-run supply is therefore more elastic, so price changes cause bigger quantity responses.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) %ΔQs/%ΔP. (b) Fixed capital and inputs limit short-run supply. (c) Capacity, technology and entry make long-run supply elastic.",
            commonErrors: ["Claiming supply elasticity never changes — it rises as the time horizon lengthens."],
          },
        },
      ],
    },
    {
      id: "econ-u2-market-equilibrium",
      title: "Market Equilibrium",
      skill: "Explain how demand and supply determine equilibrium price and quantity, and analyse shifts and disequilibrium.",
      lesson: {
        sections: [
          {
            heading: "Equilibrium",
            body: "**Market equilibrium** occurs where quantity demanded equals quantity supplied — the intersection of the demand and supply curves. The price is the **equilibrium price** and quantity the **equilibrium quantity**. At this price there is neither shortage nor surplus, so no tendency for price to change. Markets tend toward equilibrium through price adjustments.",
          },
          {
            heading: "Disequilibrium",
            body: "If price is **above** equilibrium, quantity supplied exceeds quantity demanded — a **surplus** — and price falls as sellers compete. If price is **below** equilibrium, quantity demanded exceeds quantity supplied — a **shortage** — and price rises as buyers bid against each other. These adjustments are the market's 'invisible hand'.",
          },
          {
            heading: "Shifts and new equilibrium",
            body: "A shift of demand or supply changes equilibrium. Demand up (supply unchanged) → higher price and quantity. Supply up → lower price, higher quantity. When both shift, the effect on price depends on relative magnitudes. Elasticity determines how price vs quantity adjust: inelastic demand → bigger price change, smaller quantity change; elastic supply → bigger quantity change, smaller price change.",
          },
        ],
        keyFormulas: [
          { name: "Equilibrium", statement: "Qd = Qs at equilibrium price and quantity" },
          { name: "Surplus / shortage", statement: "P > Pe → surplus (price falls); P < Pe → shortage (price rises)" },
          { name: "Shift outcomes", statement: "D up → P up, Q up; S up → P down, Q up" },
        ],
        workedExample: {
          problem: "Demand for coffee increases while supply stays constant. What happens to equilibrium price and quantity?",
          solution: "Demand shifts right. At the old price, quantity demanded exceeds quantity supplied (shortage). Price rises until a new equilibrium is reached with higher price and higher quantity.",
        },
      },
      questions: [
        {
          id: "econ-u2-l23c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Market equilibrium occurs where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Price is at its maximum" },
              { id: "b", text: "Supply equals zero" },
              { id: "c", text: "Quantity demanded equals quantity supplied" },
              { id: "d", text: "Quantity demanded exceeds quantity supplied" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Market equilibrium", statement: "Qd = Qs — no shortage or surplus." },
            ],
            steps: [
              { reasoning: "Equilibrium is where demand and supply curves intersect, Qd = Qs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Quantity demanded equals quantity supplied",
            commonErrors: ["Confusing equilibrium with maximum price or minimum cost."],
          },
        },
        {
          id: "econ-u2-l23c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain what happens when the market price is set below equilibrium.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Disequilibrium adjustment", statement: "P < Pe → shortage → price rises." },
            ],
            steps: [
              { reasoning: "Below equilibrium price, quantity demanded exceeds quantity supplied — a shortage.", marks: 1, markCode: "M" },
              { reasoning: "Buyers compete for limited supply, bidding the price upward.", marks: 1, markCode: "M" },
              { reasoning: "Price rises until quantity demanded equals quantity supplied again.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shortage → upward price pressure → return to equilibrium.",
            commonErrors: ["Saying the shortage causes price to fall — the opposite happens."],
          },
        },
        {
          id: "econ-u2-l23c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In a market for fresh strawberries, supply is very price inelastic in the short run (perishable, limited storage). If demand increases, explain the likely effect on equilibrium price and quantity compared with a market where supply is elastic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elasticity and adjustment", statement: "Inelastic supply → large price change, small quantity change; elastic supply → large quantity change, small price change." },
            ],
            steps: [
              { reasoning: "Demand increase creates a shortage at the old price in both cases.", marks: 1, markCode: "M" },
              { reasoning: "With inelastic supply, quantity cannot rise much, so price must rise sharply to clear the market.", marks: 1, markCode: "M" },
              { reasoning: "With elastic supply, quantity can expand easily, so price rises less.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: inelastic supply → bigger price increase, smaller quantity increase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inelastic supply → large price rise, small quantity rise; elastic supply → small price rise, large quantity rise.",
            commonErrors: ["Ignoring supply elasticity — the price-quantity split depends on it."],
          },
        },
        {
          id: "econ-u2-l23c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of a simultaneous increase in demand and decrease in supply for equilibrium price and quantity.",
          parts: [
            { label: "a", prompt: "Describe the initial disequilibrium when demand rises and supply falls.", marks: 2 },
            { label: "b", prompt: "Explain the effect on equilibrium price and why the effect on quantity is uncertain.", marks: 3 },
            { label: "c", prompt: "Evaluate how elasticity determines the final price and quantity outcome.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Simultaneous shifts", statement: "D up + S down → price definitely rises; quantity change depends on relative magnitudes." },
            ],
            steps: [
              { part: "a", reasoning: "Demand up increases quantity demanded; supply down reduces quantity supplied.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "At the old price there is a shortage — both shifts push price up.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Equilibrium price unambiguously rises — both shifts reinforce upward pressure.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equilibrium quantity is ambiguous: demand up pushes Q up, supply down pushes Q down.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The larger shift dominates the quantity outcome.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "PED and PES determine how much price vs quantity adjust to restore equilibrium.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Inelastic curves → bigger price changes; elastic curves → bigger quantity changes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: both shifts reinforce price rise; quantity outcome needs elasticity/magnitude analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shortage at old price. (b) Price definitely rises; quantity uncertain. (c) Elasticity governs the price-quantity split.",
            commonErrors: ["Claiming quantity definitely rises or falls — it depends on relative shift sizes."],
          },
        },
        {
          id: "econ-u2-l23c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If the market price is set above the equilibrium price, the market experiences a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surplus" },
              { id: "b", text: "Increase in demand" },
              { id: "c", text: "Shortage" },
              { id: "d", text: "New equilibrium immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Disequilibrium", statement: "P > Pe → quantity supplied exceeds quantity demanded → surplus." },
            ],
            steps: [
              { reasoning: "A high price makes producers supply more than consumers demand — a surplus.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Surplus",
            commonErrors: ["Reversing surplus and shortage — high price gives surplus, low price gives shortage."],
          },
        },
        {
          id: "econ-u2-l23c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A shortage in a competitive market will lead to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Upward pressure on the price" },
              { id: "b", text: "A permanent surplus" },
              { id: "c", text: "Downward pressure on the price" },
              { id: "d", text: "No change in price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Disequilibrium adjustment", statement: "P < Pe → shortage → buyers bid price up." },
            ],
            steps: [
              { reasoning: "Buyers compete for scarce supply, bidding the price upward.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Upward pressure on the price",
            commonErrors: ["Saying shortages cause prices to fall — the opposite occurs."],
          },
        },
        {
          id: "econ-u2-l23c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An increase in demand, with supply unchanged, causes the equilibrium price and equilibrium quantity to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both rise" },
              { id: "b", text: "Price falls, quantity rises" },
              { id: "c", text: "Neither changes" },
              { id: "d", text: "Both fall" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shift outcomes", statement: "Demand up → higher equilibrium price and higher equilibrium quantity." },
            ],
            steps: [
              { reasoning: "Greater demand at each price creates a shortage, pushing price up; higher price induces more supply and quantity rises.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Both rise",
            commonErrors: ["Confusing the demand shift with a movement along the curve."],
          },
        },
        {
          id: "econ-u2-l23c2q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "An increase in supply, with demand unchanged, causes the equilibrium price and equilibrium quantity to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Price rises, quantity falls" },
              { id: "b", text: "Neither changes" },
              { id: "c", text: "Both rise" },
              { id: "d", text: "Price falls, quantity rises" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shift outcomes", statement: "Supply up → lower equilibrium price and higher equilibrium quantity." },
            ],
            steps: [
              { reasoning: "Greater supply at each price creates a surplus, pushing price down; lower price raises quantity demanded.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Price falls, quantity rises",
            commonErrors: ["Assuming more supply means higher prices — it lowers them."],
          },
        },
        {
          id: "econ-u2-l23c2q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "If both demand and supply increase at the same time, the effect on equilibrium quantity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quantity definitely stays the same" },
              { id: "b", text: "Quantity definitely rises" },
              { id: "c", text: "Quantity definitely falls" },
              { id: "d", text: "Quantity cannot be determined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Simultaneous shifts", statement: "D up + S up → quantity definitely rises; price effect is ambiguous." },
            ],
            steps: [
              { reasoning: "Both shifts push quantity in the same direction — up — so equilibrium quantity rises.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Quantity definitely rises",
            commonErrors: ["Thinking the price effect is certain — only quantity is unambiguous here."],
          },
        },
        {
          id: "econ-u2-l23c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In a market, demand is given by Qd = 120 - 10P and supply by Qs = 20 + 10P, where P is price in dollars and Q is quantity in units. (a) Find the equilibrium price. (b) Find the equilibrium quantity.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Equilibrium price ($)", answer: 5 },
              { label: "(b) Equilibrium quantity (units)", answer: 70 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Market equilibrium", statement: "Equilibrium occurs where Qd = Qs." },
            ],
            steps: [
              { reasoning: "Set demand equal to supply: 120 - 10P = 20 + 10P.", working: "120 - 10P = 20 + 10P", marks: 1, markCode: "M" },
              { reasoning: "Solve: 100 = 20P → P = $5.", working: "P = \\frac{100}{20} = 5", marks: 1, markCode: "M" },
              { reasoning: "Substitute into demand: Q = 120 - 10(5) = 70 units.", working: "Q = 120 - 50 = 70", marks: 1, markCode: "A" },
              { reasoning: "Check with supply: Qs = 20 + 10(5) = 70 — consistent.", working: "Q_s = 20 + 50 = 70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5. (b) 70 units.",
            commonErrors: ["Setting Qd = Qs incorrectly or forgetting to substitute back to find quantity."],
          },
        },
        {
          id: "econ-u2-l23c2q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In a market, at a price of $4 quantity demanded is 90 units and quantity supplied is 60 units. (a) Calculate the size of the shortage. (b) Using the code (1 = price rises, 2 = price falls), state the direction of the price adjustment.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Shortage (units)", answer: 30 },
              { label: "(b) Price adjustment (1 = rises, 2 = falls)", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shortage", statement: "Quantity demanded exceeds quantity supplied when price is below equilibrium." },
            ],
            steps: [
              { reasoning: "Shortage = Qd - Qs = 90 - 60 = 30 units.", working: "90 - 60 = 30", marks: 1, markCode: "M" },
              { reasoning: "Buyers compete for the short supply, bidding the price upward.", marks: 1, markCode: "M" },
              { reasoning: "Price rises until Qd = Qs again.", marks: 1, markCode: "R" },
              { reasoning: "Direction code: price rises = 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30 units. (b) Price rises (1).",
            commonErrors: ["Reporting the surplus instead of the shortage — check which quantity is larger."],
          },
        },
        {
          id: "econ-u2-l23c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "In a market, at a price of $9 (above the equilibrium price of $7) quantity supplied is 110 units and quantity demanded is 70 units. (a) Calculate the size of the surplus. (b) Using the code (1 = price falls, 2 = price rises), state the direction of the price adjustment.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Surplus (units)", answer: 40 },
              { label: "(b) Price adjustment (1 = falls, 2 = rises)", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Surplus", statement: "Quantity supplied exceeds quantity demanded when price is above equilibrium." },
            ],
            steps: [
              { reasoning: "Surplus = Qs - Qd = 110 - 70 = 40 units.", working: "110 - 70 = 40", marks: 1, markCode: "M" },
              { reasoning: "Unsold stock forces sellers to cut prices to compete.", marks: 1, markCode: "M" },
              { reasoning: "Price falls until Qd = Qs again.", marks: 1, markCode: "R" },
              { reasoning: "Direction code: price falls = 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40 units. (b) Price falls (1).",
            commonErrors: ["Reporting the shortage — surplus means supply exceeds demand."],
          },
        },
        {
          id: "econ-u2-l23c2q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The equilibrium price in a market is $6. A government imposes a minimum price of $9, at which quantity demanded is 60 units and quantity supplied is 95 units. (a) Calculate the resulting surplus. (b) Calculate the surplus as a percentage of quantity demanded.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Surplus (units)", answer: 35 },
              { label: "(b) Surplus as % of quantity demanded", answer: 58.33, tolerance: 0.01, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Price floor and disequilibrium", statement: "A binding minimum price above equilibrium creates a surplus." },
            ],
            steps: [
              { reasoning: "Surplus = Qs - Qd = 95 - 60 = 35 units.", working: "95 - 60 = 35", marks: 1, markCode: "M" },
              { reasoning: "Surplus as % of Qd = 35/60 × 100 = 58.33%.", working: "\\frac{35}{60} \\times 100 = 58.33\\%", marks: 1, markCode: "M" },
              { reasoning: "The minimum price is binding because it exceeds the equilibrium price.", marks: 1, markCode: "R" },
              { reasoning: "The surplus persists because the price cannot fall to clear the market.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 35 units. (b) 58.33%.",
            commonErrors: ["Assuming the minimum price changes equilibrium — it creates a persistent surplus instead."],
          },
        },
        {
          id: "econ-u2-l23c2q14",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "In a market, equilibrium price rises from $6 to $7.50 and equilibrium quantity rises from 80 to 100 units following a demand increase. (a) Calculate the percentage change in equilibrium price. (b) Calculate the percentage change in equilibrium quantity.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) % change in equilibrium price", answer: 25, unit: "%" },
              { label: "(b) % change in equilibrium quantity", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "% change = (new - original)/original × 100." },
            ],
            steps: [
              { reasoning: "%ΔPe = (7.50 - 6)/6 × 100 = 25%.", working: "\\%\\Delta P_e = \\frac{7.5-6}{6} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "%ΔQe = (100 - 80)/80 × 100 = 25%.", working: "\\%\\Delta Q_e = \\frac{100-80}{80} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "Both use the original equilibrium values as the base.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 25%. (b) 25%.",
            commonErrors: ["Dividing by the new equilibrium value instead of the original."],
          },
        },
        {
          id: "econ-u2-l23c2q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how a change in demand and a change in supply each affect equilibrium price and quantity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shifts and equilibrium", statement: "Demand shifts move price and quantity the same direction; supply shifts move them in opposite directions." },
            ],
            steps: [
              { reasoning: "Demand increase: both equilibrium price and quantity rise.", marks: 1, markCode: "M" },
              { reasoning: "Demand decrease: both equilibrium price and quantity fall.", marks: 1, markCode: "M" },
              { reasoning: "Supply increase: equilibrium price falls and quantity rises.", marks: 1, markCode: "M" },
              { reasoning: "Supply decrease: equilibrium price rises and quantity falls.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "D up → P↑Q↑; D down → P↓Q↓; S up → P↓Q↑; S down → P↑Q↓.",
            commonErrors: ["Reversing the supply-shift outcomes — more supply lowers price."],
          },
        },
        {
          id: "econ-u2-l23c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of a simultaneous increase in demand and increase in supply for equilibrium price and quantity.",
          parts: [
            { label: "a", prompt: "Describe the initial disequilibrium when both demand and supply increase.", marks: 2 },
            { label: "b", prompt: "Explain why equilibrium quantity definitely rises but the effect on price is ambiguous.", marks: 3 },
            { label: "c", prompt: "Evaluate how the relative size of the shifts and elasticity determine the outcome.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Simultaneous shifts", statement: "D up + S up → quantity definitely rises; price change depends on relative magnitudes." },
            ],
            steps: [
              { part: "a", reasoning: "Demand up raises quantity demanded; supply up raises quantity supplied at each price.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "At the old price the two effects partly offset — the net disequilibrium depends on shift sizes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both shifts push equilibrium quantity upward, so it definitely rises.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Demand up pushes price up; supply up pushes price down — the net effect is uncertain.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Price rises if the demand shift dominates; falls if the supply shift dominates.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The larger shift determines whether price rises or falls.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "PED and PES determine how much of the adjustment falls on price versus quantity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: quantity is certain to rise; price needs magnitude and elasticity analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Partly offsetting shifts. (b) Quantity definitely rises; price ambiguous. (c) Larger shift and elasticities decide the price outcome.",
            commonErrors: ["Claiming price definitely rises or falls — the two shifts work in opposite directions on price."],
          },
        },
      ],
    },
  ],
};
