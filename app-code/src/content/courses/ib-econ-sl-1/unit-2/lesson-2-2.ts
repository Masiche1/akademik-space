import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "econ-u1-lesson-2-2",
  code: "2-2",
  title: "Supply Theory and Determinants of Supply",
  goal: "I CAN explain the law of supply, distinguish supply from quantity supplied, and analyse the determinants of supply.",
  standards: ["Paper 1", "Paper 2", "Topic 2"],
  vocabulary: [
    { term: "Supply", definition: "The willingness and ability of producers to sell a good at various prices over a period of time." },
    { term: "Law of supply", definition: "Ceteris paribus, as price rises quantity supplied rises, and vice versa." },
    { term: "Quantity supplied", definition: "The amount producers plan to sell at a specific price — a movement along the supply curve." },
    { term: "Determinants of supply", definition: "Factors other than own price that shift the supply curve." },
    { term: "Costs of production", definition: "The expenses of producing a good: wages, raw materials, rent, energy." },
    { term: "Technology", definition: "Methods and equipment used in production; improvements lower costs and raise supply." },
  ],
  concepts: [
    {
      id: "econ-u2-supply-curve",
      title: "The Supply Curve",
      skill: "Explain the law of supply and distinguish movements along from shifts of the supply curve.",
      lesson: {
        sections: [
          {
            heading: "The law of supply",
            body: "**Supply** is willingness *and* ability to sell. The **law of supply** states that ceteris paribus, as price rises, **quantity supplied** rises — shown by an upward-sloping supply curve. Higher prices make production more profitable, encouraging existing firms to produce more and attracting new entrants. Lower prices reduce profitability and quantity supplied falls.",
          },
          {
            heading: "Quantity supplied vs supply",
            body: "A **change in quantity supplied** results only from a change in the good's own price — a **movement along** the supply curve. A **change in supply** results from changes in production costs, technology, prices of other goods, expectations, taxes/subsidies or the number of sellers — a **shift of the whole curve**: right for an increase, left for a decrease.",
          },
          {
            heading: "Supply and demand together",
            body: "The supply curve shows producer behaviour at each price; the demand curve shows consumer behaviour. Where they intersect sets the market price and quantity — covered in the next lesson. Keep the distinction clear: 'a higher price raises quantity supplied (movement up)' versus 'lower costs increase supply (curve shifts right)'.",
          },
        ],
        keyFormulas: [
          { name: "Law of supply", statement: "P up → Qs up; P down → Qs down (ceteris paribus)" },
          { name: "Movement vs shift", statement: "Price change = movement along; other factor = shift of curve" },
          { name: "Shift direction", statement: "Right = increase in supply; left = decrease" },
        ],
        workedExample: {
          problem: "The price of wheat rises. Explain the effect on (a) quantity supplied of wheat, (b) supply of wheat if farmers also expect prices to stay high next year.",
          solution: "(a) Quantity supplied of wheat rises — movement up along the supply curve. (b) Expectations of sustained high prices encourage planting — supply shifts right.",
        },
      },
      questions: [
        {
          id: "econ-u2-l22c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to the law of supply, ceteris paribus:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As price rises, quantity supplied falls" },
              { id: "b", text: "As price rises, quantity supplied rises" },
              { id: "c", text: "As price rises, supply shifts left" },
              { id: "d", text: "As price rises, demand falls" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of supply", statement: "Ceteris paribus, price and quantity supplied are positively related." },
            ],
            steps: [
              { reasoning: "The law of supply shows a direct relationship between price and quantity supplied.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** As price rises, quantity supplied rises",
            commonErrors: ["Confusing the supply curve (upward sloping) with the demand curve (downward sloping)."],
          },
        },
        {
          id: "econ-u2-l22c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between a change in supply and a change in quantity supplied.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supply vs quantity supplied", statement: "Quantity supplied changes only with own price (movement); supply changes with other factors (shift)." },
            ],
            steps: [
              { reasoning: "Change in quantity supplied: caused by own price; movement along the supply curve.", marks: 1, markCode: "M" },
              { reasoning: "Change in supply: caused by costs, technology, related prices, taxes, expectations, number of sellers; shift of curve.", marks: 1, markCode: "M" },
              { reasoning: "Own price never shifts supply; other factors never cause mere movements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quantity supplied = movement along (own price); supply = shift of curve (other determinants).",
            commonErrors: ["Saying a price change 'changes supply' — it changes quantity supplied only."],
          },
        },
        {
          id: "econ-u2-l22c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the supply curve slopes upward, using the concept of costs and profit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Incentive to supply", statement: "Higher prices raise potential profit, inducing more output." },
            ],
            steps: [
              { reasoning: "Producers face rising marginal costs as output expands.", marks: 1, markCode: "M" },
              { reasoning: "A higher market price covers these higher marginal costs, making extra output profitable.", marks: 1, markCode: "M" },
              { reasoning: "At low prices only low-cost output is profitable; at high prices even high-cost output pays.", marks: 1, markCode: "R" },
              { reasoning: "Hence quantity supplied rises with price — upward-sloping curve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Higher prices make additional (higher-cost) output profitable, so quantity supplied rises with price.",
            commonErrors: ["Confusing producer incentives with consumer incentives."],
          },
        },
        {
          id: "econ-u2-l22c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the determinants of supply and their effects on the supply curve for a manufactured good.",
          parts: [
            { label: "a", prompt: "List four determinants of supply other than own price.", marks: 2 },
            { label: "b", prompt: "Explain how a rise in raw material costs and an improvement in technology each affect supply.", marks: 3 },
            { label: "c", prompt: "Evaluate the relative importance of cost changes versus price changes for quantity supplied.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Determinants of supply", statement: "Costs of production, technology, prices of related goods, taxes/subsidies, expectations, number of sellers." },
            ],
            steps: [
              { part: "a", reasoning: "Any four: production costs, technology, related good prices, taxes/subsidies, expectations, number of firms.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Higher raw material costs reduce profitability at each price — supply shifts left.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Better technology lowers costs — supply shifts right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both are shifts of the whole curve, not movements along it.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Own price determines quantity supplied along a given curve.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But cost/technology shifts can change the quantity supplied at every price — often larger effects.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: price is the short-run determinant; supply shifters dominate in the long run.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Costs, technology, related prices, taxes, expectations, sellers. (b) Costs up → supply left; technology up → supply right. (c) Price moves along; shifters change capacity.",
            commonErrors: ["Confusing a subsidy (supply up) with an indirect tax (supply down)."],
          },
        },
        {
          id: "econ-u2-l22c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to the law of supply, ceteris paribus, when the price of a good falls:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quantity supplied rises" },
              { id: "b", text: "Quantity supplied falls" },
              { id: "c", text: "Supply shifts to the right" },
              { id: "d", text: "Demand shifts to the left" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of supply", statement: "Ceteris paribus, price and quantity supplied are positively related." },
            ],
            steps: [
              { reasoning: "A lower price reduces profitability, so producers supply less.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Quantity supplied falls",
            commonErrors: ["Confusing the direction of the supply curve with the demand curve."],
          },
        },
        {
          id: "econ-u2-l22c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A change in quantity supplied is caused only by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A change in production costs" },
              { id: "b", text: "A change in the good's own price" },
              { id: "c", text: "A change in technology" },
              { id: "d", text: "A change in the number of sellers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quantity supplied", statement: "The amount producers plan to sell at a specific price — changes only with own price." },
            ],
            steps: [
              { reasoning: "Only the good's own price moves producers along the supply curve.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A change in the good's own price",
            commonErrors: ["Confusing a movement along the curve with a shift caused by other determinants."],
          },
        },
        {
          id: "econ-u2-l22c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following would NOT cause the supply curve to shift?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rise in raw material costs" },
              { id: "b", text: "An improvement in technology" },
              { id: "c", text: "A change in the good's own price" },
              { id: "d", text: "The entry of new firms into the market" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Movements vs shifts of supply", statement: "Own price causes movement along; other determinants cause shifts." },
            ],
            steps: [
              { reasoning: "A change in own price causes a movement along the supply curve, not a shift.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A change in the good's own price",
            commonErrors: ["Thinking any price change shifts the supply curve."],
          },
        },
        {
          id: "econ-u2-l22c1q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A rise in the price of raw materials used in production will cause the supply curve to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift to the right" },
              { id: "b", text: "Shift to the left" },
              { id: "c", text: "Become steeper" },
              { id: "d", text: "Not change" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Costs of production and supply", statement: "Higher input costs reduce profitability at each price — supply shifts left." },
            ],
            steps: [
              { reasoning: "Higher costs mean less is supplied at every price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift to the left",
            commonErrors: ["Confusing a cost increase (supply down) with a price increase (quantity supplied up)."],
          },
        },
        {
          id: "econ-u2-l22c1q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Producers expect the price of their product to rise sharply next year and decide to withhold output now. The immediate effect on current supply is most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Supply increases as producers rush to sell" },
              { id: "b", text: "Supply decreases as producers wait for higher prices" },
              { id: "c", text: "No effect on supply" },
              { id: "d", text: "Demand shifts to the right" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expectations and supply", statement: "Expected future price rises encourage producers to reduce current supply." },
            ],
            steps: [
              { reasoning: "Waiting for higher prices means less output is offered now — supply shifts left.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Supply decreases as producers wait for higher prices",
            commonErrors: ["Assuming producers always sell immediately rather than responding to expected prices."],
          },
        },
        {
          id: "econ-u2-l22c1q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "The price of a good rises from $8 to $10 and quantity supplied rises from 80 to 100 units. (a) Calculate the percentage change in price. (b) Calculate the percentage change in quantity supplied.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) % change in price", answer: 25, unit: "%" },
              { label: "(b) % change in quantity supplied", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "% change = (new - original)/original × 100." },
            ],
            steps: [
              { reasoning: "% change in price = (10 - 8)/8 × 100 = 25%.", working: "\\%\\Delta P = \\frac{10-8}{8} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "% change in quantity supplied = (100 - 80)/80 × 100 = 25%.", working: "\\%\\Delta Q_s = \\frac{100-80}{80} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "Both changes use the original values as the base.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 25%. (b) 25%.",
            commonErrors: ["Dividing by the new value instead of the original value."],
          },
        },
        {
          id: "econ-u2-l22c1q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "When the price of a good rises from $10 to $12, quantity supplied rises from 200 to 260 units. (a) Calculate the price elasticity of supply (PES). (b) Using the code (1 = elastic, 2 = inelastic, 3 = unit elastic), classify supply.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) PES", answer: 1.5 },
              { label: "(b) Classification (1 = elastic, 2 = inelastic, 3 = unit elastic)", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "PES", statement: "$PES = \\frac{\\%\\Delta Q_s}{\\%\\Delta P}$ — PES > 1 elastic." },
            ],
            steps: [
              { reasoning: "%ΔP = (12-10)/10 = 20%; %ΔQs = (260-200)/200 = 30%.", working: "\\%\\Delta P = 20\\%,\\quad \\%\\Delta Q_s = 30\\%", marks: 1, markCode: "M" },
              { reasoning: "PES = 30/20 = 1.5.", working: "PES = \\frac{30}{20} = 1.5", marks: 1, markCode: "A" },
              { reasoning: "PES > 1 means quantity supplied responds more than proportionally — elastic (code 1).", marks: 1, markCode: "R" },
              { reasoning: "Classification stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) PES = 1.5. (b) Elastic (1).",
            commonErrors: ["Forgetting to take percentage changes before dividing."],
          },
        },
        {
          id: "econ-u2-l22c1q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "At a price of $6, firms supply 150 units. When the price rises to $8, they supply 210 units. (a) Calculate the percentage change in price. (b) Calculate the percentage change in quantity supplied.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) % change in price", answer: 33.33, tolerance: 0.01, unit: "%" },
              { label: "(b) % change in quantity supplied", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "% change = (new - original)/original × 100." },
            ],
            steps: [
              { reasoning: "%ΔP = (8-6)/6 × 100 = 33.33%.", working: "\\%\\Delta P = \\frac{8-6}{6} \\times 100 = 33.33\\%", marks: 1, markCode: "M" },
              { reasoning: "%ΔQs = (210-150)/150 × 100 = 40%.", working: "\\%\\Delta Q_s = \\frac{210-150}{150} \\times 100 = 40\\%", marks: 1, markCode: "M" },
              { reasoning: "Both calculations use the original ($6 price, 150 units) as the base.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 33.33%. (b) 40%.",
            commonErrors: ["Rounding too early — keep full precision until the final answer."],
          },
        },
        {
          id: "econ-u2-l22c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "At a price of $4, four firms in a market each supply 25 units, giving a market supply of 100 units. Two new firms enter, each able to supply 25 units at the same price. (a) Calculate the new market quantity supplied. (b) Calculate the percentage increase in market supply.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) New market quantity supplied", answer: 150, unit: "units" },
              { label: "(b) % increase in market supply", answer: 50, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number of sellers", statement: "Market supply is the sum of individual firms' supply; entry raises supply at every price." },
            ],
            steps: [
              { reasoning: "New total = 6 firms × 25 units = 150 units.", working: "6 \\times 25 = 150", marks: 1, markCode: "M" },
              { reasoning: "% increase = (150 - 100)/100 × 100 = 50%.", working: "\\%\\Delta Q_s = \\frac{150-100}{100} \\times 100 = 50\\%", marks: 1, markCode: "M" },
              { reasoning: "Firm entry shifts the market supply curve rightward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 150 units. (b) 50%.",
            commonErrors: ["Adding only the two new firms' output to the old total without checking the count."],
          },
        },
        {
          id: "econ-u2-l22c1q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The price of a good rises from $4 to $6 (a 50% increase) and quantity supplied rises from 200 to 220 units (a 10% increase). (a) Calculate the price elasticity of supply (PES). (b) Using the code (1 = elastic, 2 = inelastic, 3 = unit elastic), classify supply.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) PES", answer: 0.2 },
              { label: "(b) Classification (1 = elastic, 2 = inelastic, 3 = unit elastic)", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "PES", statement: "$PES = \\frac{\\%\\Delta Q_s}{\\%\\Delta P}$ — 0 < PES < 1 inelastic." },
            ],
            steps: [
              { reasoning: "%ΔP = 50% (given); %ΔQs = (220-200)/200 = 10%.", working: "\\%\\Delta Q_s = \\frac{220-200}{200} \\times 100 = 10\\%", marks: 1, markCode: "M" },
              { reasoning: "PES = 10/50 = 0.2.", working: "PES = \\frac{10}{50} = 0.2", marks: 1, markCode: "A" },
              { reasoning: "PES < 1 means quantity supplied responds less than proportionally — inelastic (code 2).", marks: 1, markCode: "R" },
              { reasoning: "Classification stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) PES = 0.2. (b) Inelastic (2).",
            commonErrors: ["Inverting the formula — PES divides the quantity response by the price change."],
          },
        },
        {
          id: "econ-u2-l22c1q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain why a rise in the price of a good does not shift its supply curve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Movements vs shifts of supply", statement: "Own price changes cause movements along the curve; other factors cause shifts." },
            ],
            steps: [
              { reasoning: "The supply curve already shows the quantity supplied at every possible price.", marks: 1, markCode: "M" },
              { reasoning: "A price rise simply moves producers to a higher point on the same curve — more is supplied.", marks: 1, markCode: "M" },
              { reasoning: "A shift requires a change in another determinant such as costs, technology or taxes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore the curve itself does not move — only the position on it changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Own price causes a movement along the curve, not a shift — shifts need other determinants.",
            commonErrors: ["Saying a higher price 'increases supply' — it increases quantity supplied only."],
          },
        },
        {
          id: "econ-u2-l22c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of a sharp rise in production costs for producers and consumers in a market.",
          parts: [
            { label: "a", prompt: "Explain how higher production costs affect the supply curve.", marks: 2 },
            { label: "b", prompt: "Explain the effect on equilibrium price and quantity.", marks: 3 },
            { label: "c", prompt: "Evaluate who bears the burden of higher production costs.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Costs and supply", statement: "Higher costs reduce supply at every price — a leftward shift." },
            ],
            steps: [
              { part: "a", reasoning: "Higher costs reduce profitability at each price, so less is supplied.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The supply curve shifts to the left.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "At the old price, quantity supplied now falls short of quantity demanded — a shortage.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Price rises until a new equilibrium is reached.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equilibrium price rises and equilibrium quantity falls.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Consumers bear part of the burden through higher prices.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Producers bear part through lower output and possibly lower profit margins.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: the split depends on the price elasticity of demand and supply.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Costs up → supply shifts left. (b) Price rises, quantity falls. (c) Burden shared by consumers and producers depending on elasticities.",
            commonErrors: ["Claiming only consumers bear the cost — producers also produce less."],
          },
        },
      ],
    },
    {
      id: "econ-u2-determinants-supply",
      title: "Determinants of Supply",
      skill: "Analyse how production costs, technology, related good prices, taxes, subsidies, expectations and the number of sellers affect supply.",
      lesson: {
        sections: [
          {
            heading: "Costs and technology",
            body: "**Costs of production** (wages, raw materials, rent, energy) are the biggest determinant: higher costs reduce supply at every price — a leftward shift. **Technology** improves efficiency, lowers costs and shifts supply right. **Productivity** growth has the same effect.",
          },
          {
            heading: "Related goods and government policy",
            body: "If the price of a **substitute in production** rises (e.g. wheat vs barley for a farmer), producers switch toward the more profitable crop — supply of the other falls. An **indirect tax** raises costs and shifts supply left; a **subsidy** lowers costs and shifts supply right.",
          },
          {
            heading: "Expectations and number of sellers",
            body: "If producers expect future prices to rise, they may reduce current supply to sell later — supply shifts left (or they stockpile). **More sellers** entering the market increase total supply (rightward shift); firms leaving reduce it. Natural events (drought, pandemic) also shift supply by affecting costs or output.",
          },
        ],
        keyFormulas: [
          { name: "Costs up → supply left", statement: "Higher production costs reduce supply at every price" },
          { name: "Technology up → supply right", statement: "Efficiency gains increase supply" },
          { name: "Indirect tax vs subsidy", statement: "Tax shifts supply left; subsidy shifts supply right" },
        ],
        workedExample: {
          problem: "A government introduces a subsidy on fertiliser for wheat farmers. What happens to the supply curve for wheat?",
          solution: "The subsidy lowers production costs, making wheat more profitable at every price — the supply curve shifts rightward.",
        },
      },
      questions: [
        {
          id: "econ-u2-l22c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An improvement in production technology will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift the supply curve to the left" },
              { id: "b", text: "Shift the supply curve to the right" },
              { id: "c", text: "Cause a movement up along the supply curve" },
              { id: "d", text: "Shift the demand curve to the right" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Technology and supply", statement: "Better technology lowers costs and increases supply at every price." },
            ],
            steps: [
              { reasoning: "Improved technology lowers costs, so producers supply more at each price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift the supply curve to the right",
            commonErrors: ["Thinking technology affects demand rather than supply."],
          },
        },
        {
          id: "econ-u2-l22c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how an indirect tax affects the supply curve.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Indirect tax and supply", statement: "A tax on producers raises costs, shifting supply left." },
            ],
            steps: [
              { reasoning: "An indirect tax adds to production costs for every unit sold.", marks: 1, markCode: "M" },
              { reasoning: "At each market price, producers now receive less (price minus tax), reducing profitability.", marks: 1, markCode: "M" },
              { reasoning: "Supply shifts left — less is supplied at every price.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Indirect tax raises costs → supply curve shifts left.",
            commonErrors: ["Saying the tax shifts demand — it affects supply (and may affect demand via price)."],
          },
        },
        {
          id: "econ-u2-l22c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Farmers can grow either wheat or barley on the same land. The price of barley rises sharply. Explain the effect on the supply of wheat.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitutes in production", statement: "When the price of an alternative crop rises, resources shift toward it." },
            ],
            steps: [
              { reasoning: "Wheat and barley compete for the same land — they are substitutes in production.", marks: 1, markCode: "M" },
              { reasoning: "Higher barley prices make barley more profitable, so farmers switch land to barley.", marks: 1, markCode: "M" },
              { reasoning: "Less land is available for wheat, reducing wheat supply at every price.", marks: 1, markCode: "R" },
              { reasoning: "The wheat supply curve shifts leftward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Barley price up → farmers switch → wheat supply shifts left.",
            commonErrors: ["Confusing substitutes in consumption with substitutes in production."],
          },
        },
        {
          id: "econ-u2-l22c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the impact of a government subsidy on the market for a good, considering supply, price and quantity.",
          parts: [
            { label: "a", prompt: "Explain how a subsidy shifts the supply curve.", marks: 2 },
            { label: "b", prompt: "Explain the likely effect on equilibrium price and quantity.", marks: 3 },
            { label: "c", prompt: "Evaluate the costs and benefits of using subsidies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subsidy and supply", statement: "Subsidy lowers production costs, shifting supply right." },
            ],
            steps: [
              { part: "a", reasoning: "A subsidy reduces producers' costs per unit.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "At each price, supply is greater — supply curve shifts right.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Greater supply lowers equilibrium price.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lower price raises quantity demanded and supplied — equilibrium quantity rises.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consumers pay less; producers receive price plus subsidy.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Benefits: lower prices for consumers, support for strategic industries, possible positive externalities.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Costs: government expenditure, possible overproduction, inefficiency, regressive if benefiting rich.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: effective for merit goods/infant industries; wasteful if protecting inefficient firms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Subsidy lowers costs → supply right. (b) Price falls, quantity rises. (c) Trade-off between consumer benefit and fiscal cost/inefficiency.",
            commonErrors: ["Drawing the subsidy as a demand shift — it affects supply."],
          },
        },
        {
          id: "econ-u2-l22c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An indirect tax imposed on producers will cause the supply curve to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift to the right" },
              { id: "b", text: "Shift to the left" },
              { id: "c", text: "Remain unchanged" },
              { id: "d", text: "Become flatter" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Indirect tax and supply", statement: "A tax raises production costs, shifting supply left." },
            ],
            steps: [
              { reasoning: "The tax adds to costs, so less is supplied at every price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift to the left",
            commonErrors: ["Confusing an indirect tax (supply down) with a subsidy (supply up)."],
          },
        },
        {
          id: "econ-u2-l22c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A government subsidy paid to producers will cause the supply curve to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift to the left" },
              { id: "b", text: "Shift to the right" },
              { id: "c", text: "Become steeper" },
              { id: "d", text: "Shift the demand curve instead" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subsidy and supply", statement: "A subsidy lowers production costs, shifting supply right." },
            ],
            steps: [
              { reasoning: "The subsidy reduces costs, so more is supplied at every price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift to the right",
            commonErrors: ["Treating a subsidy like a tax — the effects are opposite."],
          },
        },
        {
          id: "econ-u2-l22c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If many new firms enter a market, the market supply curve will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift to the left" },
              { id: "b", text: "Shift to the right" },
              { id: "c", text: "Not change" },
              { id: "d", text: "Become vertical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number of sellers and supply", statement: "More sellers increase total quantity supplied at every price." },
            ],
            steps: [
              { reasoning: "Each new firm adds its output to the market total at every price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift to the right",
            commonErrors: ["Confusing the number of sellers with a change in each firm's supply."],
          },
        },
        {
          id: "econ-u2-l22c2q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Producers expect the price of their product to rise next year and decide to store output for later sale. The immediate effect on current supply is most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Supply increases as producers produce more" },
              { id: "b", text: "Supply decreases as output is withheld" },
              { id: "c", text: "No effect on supply" },
              { id: "d", text: "Demand shifts to the left" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expectations and supply", statement: "Expected future price rises encourage producers to reduce current supply." },
            ],
            steps: [
              { reasoning: "Withholding output for later reduces quantity supplied now — supply shifts left.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Supply decreases as output is withheld",
            commonErrors: ["Assuming production decisions ignore expected future prices."],
          },
        },
        {
          id: "econ-u2-l22c2q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A farmer can grow either wheat or barley on the same land. If the price of barley rises sharply, the supply of wheat will most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase as wheat becomes relatively cheaper to grow" },
              { id: "b", text: "Decrease as resources switch to barley" },
              { id: "c", text: "Not change" },
              { id: "d", text: "Shift to the right" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitutes in production", statement: "When the price of an alternative use of resources rises, supply of the original good falls." },
            ],
            steps: [
              { reasoning: "Land is switched to the more profitable barley crop, reducing wheat output.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Decrease as resources switch to barley",
            commonErrors: ["Confusing substitutes in production with substitutes in consumption."],
          },
        },
        {
          id: "econ-u2-l22c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "At a price of $6, twenty firms in a market each supply 15 units, giving a market supply of 300 units. Five firms then leave the market. (a) Calculate the new market quantity supplied. (b) Calculate the percentage decrease in market supply.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) New market quantity supplied", answer: 225, unit: "units" },
              { label: "(b) % decrease in market supply", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number of sellers", statement: "Market supply is the sum of individual firms' supply; exit reduces supply." },
            ],
            steps: [
              { reasoning: "New total = 15 firms × 15 units = 225 units.", working: "15 \\times 15 = 225", marks: 1, markCode: "M" },
              { reasoning: "% decrease = (300 - 225)/300 × 100 = 25%.", working: "\\%\\Delta Q_s = \\frac{300-225}{300} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "Firm exit shifts the market supply curve leftward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 225 units. (b) 25%.",
            commonErrors: ["Subtracting only the five firms' output incorrectly — recompute the total from remaining firms."],
          },
        },
        {
          id: "econ-u2-l22c2q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Wages, a major cost of production, rise by 10%. At each price, quantity supplied falls from 500 to 450 units. (a) Calculate the percentage change in quantity supplied. (b) Using the code (1 = supply shifts left, 2 = supply shifts right), identify the direction of the supply shift.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) % change in quantity supplied", answer: -10, unit: "%" },
              { label: "(b) Direction of shift (1 = left, 2 = right)", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Costs of production and supply", statement: "Higher costs reduce quantity supplied at every price — supply shifts left." },
            ],
            steps: [
              { reasoning: "%ΔQs = (450 - 500)/500 × 100 = -10%.", working: "\\%\\Delta Q_s = \\frac{450-500}{500} \\times 100 = -10\\%", marks: 1, markCode: "M" },
              { reasoning: "Less is supplied at every price, so the supply curve shifts left (code 1).", marks: 1, markCode: "R" },
              { reasoning: "Direction stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) -10%. (b) Supply shifts left (1).",
            commonErrors: ["Reporting the percentage change as positive — the fall is a decrease."],
          },
        },
        {
          id: "econ-u2-l22c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A good sells at a market price of $5 per unit. The government imposes an indirect tax of $1 per unit on producers. (a) Calculate the effective price received by producers per unit. (b) Calculate the percentage reduction in the net price producers receive.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Effective price received by producers ($)", answer: 4 },
              { label: "(b) % reduction in net price", answer: 20, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Indirect tax and supply", statement: "An indirect tax raises costs, reducing the net price producers receive at each market price." },
            ],
            steps: [
              { reasoning: "Producers receive the market price minus the tax: 5 - 1 = $4.", working: "5 - 1 = 4", marks: 1, markCode: "M" },
              { reasoning: "The net price falls by $1 per unit.", marks: 1, markCode: "M" },
              { reasoning: "% reduction = 1/5 × 100 = 20%.", working: "\\frac{1}{5} \\times 100 = 20\\%", marks: 1, markCode: "M" },
              { reasoning: "Lower net returns shift supply left.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4. (b) 20%.",
            commonErrors: ["Calculating the percentage on $4 instead of the original $5 price."],
          },
        },
        {
          id: "econ-u2-l22c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "A farmer initially devotes 60% of available land to wheat and 40% to barley. After the price of barley doubles, the farmer switches to 40% wheat and 60% barley. (a) Calculate the change in the share of land devoted to wheat. (b) Calculate the change in the share of land devoted to barley.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Change in wheat land share (percentage points)", answer: -20 },
              { label: "(b) Change in barley land share (percentage points)", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitutes in production", statement: "Higher returns on one crop draw resources away from competing crops." },
            ],
            steps: [
              { reasoning: "Wheat share changes from 60% to 40% — a fall of 20 percentage points.", working: "40 - 60 = -20", marks: 1, markCode: "M" },
              { reasoning: "Barley share changes from 40% to 60% — a rise of 20 percentage points.", working: "60 - 40 = 20", marks: 1, markCode: "M" },
              { reasoning: "Resource reallocation reduces wheat supply and raises barley supply.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) -20 percentage points. (b) +20 percentage points.",
            commonErrors: ["Reporting percentage-point changes as percentages of the original shares."],
          },
        },
        {
          id: "econ-u2-l22c2q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "At a price of $7, forty firms in a market each supply an average of 20 units, giving a market supply of 800 units. A new production technology then allows each firm to supply 25 units at the same price. (a) Calculate the new market quantity supplied. (b) Calculate the percentage increase in market supply.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) New market quantity supplied", answer: 1000, unit: "units" },
              { label: "(b) % increase in market supply", answer: 25, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Technology and supply", statement: "Technology that lowers costs or raises productivity increases supply at every price." },
            ],
            steps: [
              { reasoning: "New total = 40 firms × 25 units = 1,000 units.", working: "40 \\times 25 = 1000", marks: 1, markCode: "M" },
              { reasoning: "% increase = (1000 - 800)/800 × 100 = 25%.", working: "\\%\\Delta Q_s = \\frac{1000-800}{800} \\times 100 = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "Each firm supplies 5 more units — a 25% rise per firm, so market supply rises 25%.", marks: 1, markCode: "R" },
              { reasoning: "The market supply curve shifts rightward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 1,000 units. (b) 25%.",
            commonErrors: ["Assuming technology changes the number of firms rather than each firm's output."],
          },
        },
        {
          id: "econ-u2-l22c2q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how rising energy costs affect the supply curve for electricity-intensive goods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Costs of production and supply", statement: "Energy is an input cost; higher costs reduce supply at every price." },
            ],
            steps: [
              { reasoning: "Energy (electricity, fuel) is a key input for electricity-intensive production.", marks: 1, markCode: "M" },
              { reasoning: "Higher energy prices raise total production costs for every unit.", marks: 1, markCode: "M" },
              { reasoning: "At each market price, less output is profitable, so quantity supplied falls.", marks: 1, markCode: "M" },
              { reasoning: "The supply curve therefore shifts to the left.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Energy costs up → production costs up → supply shifts left.",
            commonErrors: ["Confusing higher input costs with a higher output price — they are different variables."],
          },
        },
        {
          id: "econ-u2-l22c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of a severe drought for agricultural markets.",
          parts: [
            { label: "a", prompt: "Explain how a drought affects the supply of crops.", marks: 2 },
            { label: "b", prompt: "Explain the effect on equilibrium price and quantity in crop markets.", marks: 3 },
            { label: "c", prompt: "Evaluate the impact on consumers and farmers.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Natural events and supply", statement: "Adverse weather reduces output and raises costs, shifting supply left." },
            ],
            steps: [
              { part: "a", reasoning: "Drought reduces crop yields and may raise irrigation costs.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Less output is supplied at every price — supply shifts left.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "At the old price, quantity supplied falls below quantity demanded — a shortage.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Price rises until markets clear.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equilibrium price rises and equilibrium quantity falls.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Consumers face higher food prices, which may be regressive for low-income households.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Farmers may gain from higher prices but lose from lower volumes — the net effect depends on elasticity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: impacts vary by crop, stock levels and the extent of the drought.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Drought cuts yields → supply left. (b) Price up, quantity down. (c) Consumers pay more; farmers' gain/loss depends on elasticity.",
            commonErrors: ["Ignoring that farmers may lose revenue if demand is elastic — higher price does not guarantee higher revenue."],
          },
        },
      ],
    },
  ],
};
