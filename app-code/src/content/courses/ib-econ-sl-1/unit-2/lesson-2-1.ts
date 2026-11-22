import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "econ-u1-lesson-2-1",
  code: "2-1",
  title: "Demand Theory and Determinants of Demand",
  goal: "I CAN explain the law of demand, distinguish movements along from shifts of the demand curve, and analyse the determinants of demand.",
  standards: ["Paper 1", "Paper 2", "Topic 2"],
  vocabulary: [
    { term: "Demand", definition: "The willingness and ability to buy a good at various prices over a period of time." },
    { term: "Law of demand", definition: "Ceteris paribus, as price rises quantity demanded falls, and vice versa." },
    { term: "Quantity demanded", definition: "The amount consumers plan to buy at a specific price — shown by movement along the demand curve." },
    { term: "Market demand", definition: "The sum of all individual consumers' demand for a good at each price." },
    { term: "Ceteris paribus", definition: "'All other things being equal' — the assumption holding other variables constant." },
    { term: "Normal good", definition: "A good whose demand rises when income rises (e.g. restaurant meals)." },
  ],
  concepts: [
    {
      id: "econ-u2-demand-curve",
      title: "The Demand Curve",
      skill: "Explain the law of demand, the difference between demand and quantity demanded, and movements versus shifts of the demand curve.",
      lesson: {
        sections: [
          {
            heading: "The law of demand",
            body: "**Demand** is willingness *and* ability to pay. The **law of demand** states that ceteris paribus, as price rises, **quantity demanded** falls — shown by a downward-sloping demand curve from left to right. The explanation: the **substitution effect** (consumers switch to cheaper alternatives) and the **income effect** (a higher price lowers real purchasing power).",
          },
          {
            heading: "Demand vs quantity demanded",
            body: "A **change in quantity demanded** is caused only by a change in the good's own price — it is a **movement along** the same demand curve. A **change in demand** is caused by changes in other factors — it is a **shift of the whole curve**: right for an increase, left for a decrease. Price changes never shift the curve; other determinants do.",
          },
          {
            heading: "Interpreting shifts",
            body: "A **rightward shift** means more is demanded at every price (increased demand); a **leftward shift** means less. Exam answers must distinguish: 'a rise in price reduces quantity demanded (movement up along the curve)' versus 'rising incomes increase demand (curve shifts right)'.",
          },
        ],
        keyFormulas: [
          { name: "Law of demand", statement: "P up → Qd down; P down → Qd up (ceteris paribus)" },
          { name: "Movement vs shift", statement: "Price change = movement along; other factor = shift of curve" },
          { name: "Shift direction", statement: "Right = increase in demand; left = decrease" },
        ],
        workedExample: {
          problem: "The price of coffee rises. Explain the effect on (a) quantity demanded of coffee, (b) demand for tea.",
          solution: "(a) Quantity demanded of coffee falls — a movement up along the coffee demand curve. (b) Demand for tea rises — consumers switch to a substitute, shifting the tea demand curve rightward.",
        },
      },
      questions: [
        {
          id: "econ-u2-l21c1q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to the law of demand, ceteris paribus:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As price rises, quantity demanded rises" },
              { id: "b", text: "As price rises, supply falls" },
              { id: "c", text: "As price rises, quantity demanded falls" },
              { id: "d", text: "As price rises, demand shifts right" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Law of demand", statement: "Ceteris paribus, price and quantity demanded are inversely related." },
            ],
            steps: [
              { reasoning: "The law of demand shows an inverse relationship between price and quantity demanded.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** As price rises, quantity demanded falls",
            commonErrors: ["Confusing quantity demanded with demand — only quantity demanded changes with own price."],
          },
        },
        {
          id: "econ-u2-l21c1q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between a change in demand and a change in quantity demanded.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Demand vs quantity demanded", statement: "Quantity demanded changes only with own price (movement); demand changes with other factors (shift)." },
            ],
            steps: [
              { reasoning: "Change in quantity demanded: caused by the good's own price; shown as movement along the demand curve.", marks: 1, markCode: "M" },
              { reasoning: "Change in demand: caused by income, tastes, prices of related goods, expectations, number of buyers; shown as a shift of the curve.", marks: 1, markCode: "M" },
              { reasoning: "Price never shifts demand; other determinants never cause mere movements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quantity demanded = movement along (own price); demand = shift of curve (other determinants).",
            commonErrors: ["Saying a price rise 'increases demand' — it reduces quantity demanded only."],
          },
        },
        {
          id: "econ-u2-l21c1q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the substitution effect and the income effect in the law of demand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Why demand slopes down", statement: "Substitution effect + income effect." },
            ],
            steps: [
              { reasoning: "Substitution effect: as a good's price rises relative to substitutes, consumers switch to cheaper alternatives.", marks: 1, markCode: "M" },
              { reasoning: "Income effect: a higher price reduces real income, so consumers buy less of the good (for normal goods).", marks: 1, markCode: "M" },
              { reasoning: "For inferior goods the income effect may work in the opposite direction but substitution still dominates for normal cases.", marks: 1, markCode: "R" },
              { reasoning: "Together both effects explain why quantity demanded falls as price rises.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Substitution (switch to alternatives) and income (lower real purchasing power) effects both reduce quantity demanded when price rises.",
            commonErrors: ["Describing only one effect or confusing them with supply-side explanations."],
          },
        },
        {
          id: "econ-u2-l21c1q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the determinants of demand for a normal good and their effects on the demand curve.",
          parts: [
            { label: "a", prompt: "List four determinants of demand other than the good's own price.", marks: 2 },
            { label: "b", prompt: "Explain how a rise in consumer income and a rise in the price of a substitute each affect demand.", marks: 3 },
            { label: "c", prompt: "Evaluate the importance of non-price determinants compared with price in determining quantity demanded.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Determinants of demand", statement: "Income, prices of related goods, tastes, expectations, number of buyers." },
            ],
            steps: [
              { part: "a", reasoning: "Any four: income, substitute prices, complement prices, tastes/preferences, expectations, number of buyers.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "For a normal good, higher income raises demand — curve shifts right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Higher substitute price makes this good relatively cheaper — demand shifts right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both are shifts of the whole curve, not movements along it.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Own price is the most direct determinant of quantity demanded along the curve.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But non-price determinants can cause large shifts — e.g. recession reduces demand regardless of price.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: both matter; non-price factors often dominate in the long run.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Income, related prices, tastes, expectations, buyers. (b) Income up → demand up; substitute price up → demand up (both right shifts). (c) Both important; non-price factors shift the curve.",
            commonErrors: ["Listing price as a determinant in part (a) — the question excludes it."],
          },
        },
        {
          id: "econ-u2-l21c1q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A movement along the demand curve is caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A change in the population" },
              { id: "b", text: "A change in the good's own price" },
              { id: "c", text: "A change in consumer income" },
              { id: "d", text: "A change in consumer tastes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quantity demanded", statement: "The amount consumers plan to buy at a specific price — changes only with own price." },
            ],
            steps: [
              { reasoning: "Only a change in the good's own price causes a movement along the demand curve.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A change in the good's own price",
            commonErrors: ["Confusing a movement along the curve with a shift caused by other determinants."],
          },
        },
        {
          id: "econ-u2-l21c1q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If the price of a substitute good rises, the demand curve for this good will:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift to the left" },
              { id: "b", text: "Shift to the right" },
              { id: "c", text: "Become steeper" },
              { id: "d", text: "Not change at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitutes in consumption", statement: "A rise in a substitute's price makes this good relatively cheaper, increasing its demand." },
            ],
            steps: [
              { reasoning: "Substitutes compete, so a higher substitute price shifts demand for this good rightward.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift to the right",
            commonErrors: ["Treating substitutes like complements — the effect is opposite."],
          },
        },
        {
          id: "econ-u2-l21c1q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A leftward shift of the demand curve means that at every price:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quantity demanded has decreased" },
              { id: "b", text: "Supply has increased" },
              { id: "c", text: "Quantity demanded has increased" },
              { id: "d", text: "Price has fallen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shift of demand", statement: "Right = increase in demand; left = decrease in demand at every price." },
            ],
            steps: [
              { reasoning: "A leftward shift means less is demanded at each price — a decrease in demand.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Quantity demanded has decreased",
            commonErrors: ["Confusing a shift with a movement along the curve."],
          },
        },
        {
          id: "econ-u2-l21c1q8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Which of the following would NOT cause the demand curve to shift?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An increase in the population" },
              { id: "b", text: "A rise in consumer income" },
              { id: "c", text: "A rise in the price of a substitute" },
              { id: "d", text: "A change in the good's own price" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Movements vs shifts", statement: "Own price causes movement along; other determinants cause shifts." },
            ],
            steps: [
              { reasoning: "A change in own price causes a movement along the curve, not a shift.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A change in the good's own price",
            commonErrors: ["Thinking any price change shifts the curve."],
          },
        },
        {
          id: "econ-u2-l21c1q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Consumers expect the price of a good to fall next month. The immediate effect on current demand is most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand decreases as consumers delay purchases" },
              { id: "b", text: "Demand increases as consumers buy now" },
              { id: "c", text: "No effect on demand" },
              { id: "d", text: "Supply increases immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expectations and demand", statement: "Expected future price falls make consumers delay buying, reducing current demand." },
            ],
            steps: [
              { reasoning: "If prices are expected to fall, rational consumers postpone purchases, so current demand falls.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Demand decreases as consumers delay purchases",
            commonErrors: ["Ignoring the timing — expected future prices affect current decisions."],
          },
        },
        {
          id: "econ-u2-l21c1q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "A rise in consumer income will cause the demand curve for an inferior good to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slope downward more steeply" },
              { id: "b", text: "Shift to the right" },
              { id: "c", text: "Stay unchanged" },
              { id: "d", text: "Shift to the left" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inferior good", statement: "Demand falls when income rises — income effect is negative." },
            ],
            steps: [
              { reasoning: "For inferior goods, higher income reduces demand — the curve shifts left.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift to the left",
            commonErrors: ["Applying the normal-good rule to inferior goods."],
          },
        },
        {
          id: "econ-u2-l21c1q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Distinguish between a change in demand and a change in quantity demanded.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Demand vs quantity demanded", statement: "Quantity demanded changes with own price (movement); demand changes with other factors (shift)." },
            ],
            steps: [
              { reasoning: "A change in quantity demanded is caused only by a change in the good's own price.", marks: 1, markCode: "M" },
              { reasoning: "It is shown as a movement along the same demand curve.", marks: 1, markCode: "M" },
              { reasoning: "A change in demand is caused by other determinants and shifts the whole curve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quantity demanded = movement along (own price); demand = shift of curve (other factors).",
            commonErrors: ["Saying a price change 'changes demand' — it changes quantity demanded only."],
          },
        },
        {
          id: "econ-u2-l21c1q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the substitution effect and the income effect that lie behind the law of demand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Why demand slopes down", statement: "Substitution and income effects make consumers buy less when price rises." },
            ],
            steps: [
              { reasoning: "Substitution effect: a higher price makes the good relatively less attractive, so consumers switch to substitutes.", marks: 1, markCode: "M" },
              { reasoning: "This reduces quantity demanded at the higher price.", marks: 1, markCode: "M" },
              { reasoning: "Income effect: a higher price lowers real purchasing power, so consumers can afford less.", marks: 1, markCode: "M" },
              { reasoning: "Both effects reinforce the downward-sloping demand curve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Substitution effect (switch to alternatives) and income effect (lower real income) both reduce quantity demanded as price rises.",
            commonErrors: ["Describing only one effect — both are needed for a full explanation."],
          },
        },
        {
          id: "econ-u2-l21c1q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how market demand is derived from individual demand and what a rightward shift of market demand implies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Market demand", statement: "The sum of all individual consumers' demand at each price." },
            ],
            steps: [
              { reasoning: "Market demand is found by adding all individual quantities demanded at each price.", marks: 1, markCode: "M" },
              { reasoning: "A rightward shift of market demand means the total quantity demanded rises at every price.", marks: 1, markCode: "M" },
              { reasoning: "This can result from more buyers, higher incomes, or other determinants acting across consumers.", marks: 1, markCode: "R" },
              { reasoning: "The whole market demand curve shifts right.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Market demand = sum of individual demands; right shift = more demanded at every price.",
            commonErrors: ["Thinking market demand is just one consumer's demand scaled up without explaining the aggregation."],
          },
        },
        {
          id: "econ-u2-l21c1q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine how an economic recession might affect the demand curves for normal goods and inferior goods.",
          parts: [
            { label: "a", prompt: "Identify two ways a recession changes consumer circumstances.", marks: 2 },
            { label: "b", prompt: "Explain the effect on the demand curves for normal and inferior goods.", marks: 3 },
            { label: "c", prompt: "Evaluate the likely consequences for prices and quantities in these markets.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Income and demand", statement: "Recession lowers income: normal goods lose demand, inferior goods gain demand." },
            ],
            steps: [
              { part: "a", reasoning: "Any two: falling incomes, rising unemployment, falling confidence, reduced credit.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Normal goods: lower income reduces demand — curve shifts left.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Inferior goods: lower income raises demand — curve shifts right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both are shifts of the whole curve, not movements along it.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For normal goods, lower demand tends to reduce equilibrium price and quantity (depends on supply).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "For inferior goods, higher demand tends to raise price and quantity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: the income effect dominates, but supply conditions determine final prices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Falling income, unemployment, confidence. (b) Normal demand shifts left; inferior demand shifts right. (c) Opposite price/quantity effects depending on supply.",
            commonErrors: ["Assuming all demand falls in a recession — inferior goods behave differently."],
          },
        },
        {
          id: "econ-u2-l21c1q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "At a price of $4, consumer A demands 5 units and consumer B demands 15 units of a good. When the price rises to $6, total quantity demanded falls to 12 units. (a) Calculate the market quantity demanded at $4. (b) Calculate the percentage change in quantity demanded.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Market quantity demanded at $4", answer: 20, unit: "units" },
              { label: "(b) % change in quantity demanded", answer: -40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Market demand", statement: "Market quantity demanded is the sum of individual quantities demanded." },
            ],
            steps: [
              { reasoning: "Market quantity demanded = 5 + 15 = 20 units.", working: "Q_d = 5 + 15 = 20", marks: 1, markCode: "M" },
              { reasoning: "% change in quantity demanded = (12 - 20)/20 × 100 = -40%.", working: "\\%\\Delta Q_d = \\frac{12-20}{20} \\times 100 = -40\\%", marks: 1, markCode: "A" },
              { reasoning: "Negative sign correctly indicates a fall in quantity demanded.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20 units. (b) -40%.",
            commonErrors: ["Using $6 as the base for the percentage change instead of the original quantity 20."],
          },
        },
        {
          id: "econ-u2-l21c1q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The price of a good falls from $10 to $8 and quantity demanded rises from 100 to 140 units. Using percentage changes from the original values, (a) calculate the percentage change in price, and (b) calculate the percentage change in quantity demanded.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) % change in price", answer: -20, unit: "%" },
              { label: "(b) % change in quantity demanded", answer: 40, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "% change = (new - original)/original × 100." },
            ],
            steps: [
              { reasoning: "% change in price = (8 - 10)/10 × 100 = -20%.", working: "\\%\\Delta P = \\frac{8-10}{10} \\times 100 = -20\\%", marks: 1, markCode: "M" },
              { reasoning: "% change in quantity demanded = (140 - 100)/100 × 100 = 40%.", working: "\\%\\Delta Q_d = \\frac{140-100}{100} \\times 100 = 40\\%", marks: 1, markCode: "M" },
              { reasoning: "Negative sign for price correctly shows a price fall.", marks: 1, markCode: "A" },
              { reasoning: "Both calculations use original values as the base.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) -20%. (b) +40%.",
            commonErrors: ["Dividing by the new value instead of the original value."],
          },
        },
      ],
    },
    {
      id: "econ-u2-determinants-demand",
      title: "Determinants of Demand",
      skill: "Analyse how income, related goods' prices, tastes, expectations and population affect demand for different types of goods.",
      lesson: {
        sections: [
          {
            heading: "Income effects",
            body: "**Normal goods**: demand rises with income (most goods). **Inferior goods**: demand falls as income rises (e.g. cheap noodles, second-hand goods) — the income effect is negative. **Luxury goods**: demand rises proportionally more than income. A fall in income (recession) shifts demand for normal goods leftward.",
          },
          {
            heading: "Related goods",
            body: "**Substitutes** (tea and coffee): a rise in the price of one increases demand for the other. **Complements** (cars and petrol): a rise in the price of one decreases demand for the other. Cross-price effects show how markets are interlinked.",
          },
          {
            heading: "Tastes, expectations and buyers",
            body: "Changing **tastes and preferences** (health trends, advertising) shift demand. **Expectations** matter: if consumers expect prices to rise, they buy now, shifting demand right; expected future income or price falls can delay purchases. A **larger population or new market** increases the number of buyers and shifts demand right.",
          },
        ],
        keyFormulas: [
          { name: "Normal good", statement: "Income up → demand up" },
          { name: "Inferior good", statement: "Income up → demand down" },
          { name: "Substitutes vs complements", statement: "Substitute price up → demand up; complement price up → demand down" },
        ],
        workedExample: {
          problem: "The price of smartphones rises sharply. What happens to demand for phone cases (a complement) and for landline phones (a substitute)?",
          solution: "Demand for phone cases falls (fewer phones bought → less need for cases). Demand for landline phones rises as consumers switch to substitutes.",
        },
      },
      questions: [
        {
          id: "econ-u2-l21c2q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An inferior good is one for which:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand falls when income rises" },
              { id: "b", text: "Demand rises when income rises" },
              { id: "c", text: "Supply exceeds demand" },
              { id: "d", text: "Demand is unaffected by price" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inferior good", statement: "A good whose demand decreases as consumer income rises." },
            ],
            steps: [
              { reasoning: "Inferior goods see demand fall as income rises — consumers switch to better alternatives.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Demand falls when income rises",
            commonErrors: ["Reversing normal and inferior good definitions."],
          },
        },
        {
          id: "econ-u2-l21c2q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Explain how a rise in the price of a complement affects demand for a good, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary goods", statement: "Goods consumed together; a rise in one's price reduces demand for both." },
            ],
            steps: [
              { reasoning: "Complements are consumed together, so demand for one depends on the price of the other.", marks: 1, markCode: "M" },
              { reasoning: "Example: if the price of printers rises, fewer printers are bought, so demand for ink cartridges falls.", marks: 1, markCode: "M" },
              { reasoning: "The demand curve for the complement shifts leftward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Complement price up → demand for the good falls (leftward shift).",
            commonErrors: ["Treating complements like substitutes — the effect is opposite."],
          },
        },
        {
          id: "econ-u2-l21c2q3",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "A government announces a subsidy for electric cars starting next year. Using expectations, explain the likely short-term effect on demand for electric cars this year.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expectations and demand", statement: "Expected future price changes shift current demand." },
            ],
            steps: [
              { reasoning: "Consumers expect electric car prices to fall (or become relatively cheaper) when the subsidy arrives.", marks: 1, markCode: "M" },
              { reasoning: "Rational buyers delay purchases, reducing current quantity demanded.", marks: 1, markCode: "M" },
              { reasoning: "Demand for electric cars shifts left in the short term.", marks: 1, markCode: "R" },
              { reasoning: "When the subsidy takes effect, demand shifts right — possibly sharply.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expected cheaper prices → consumers delay buying → current demand falls, then rises when subsidy arrives.",
            commonErrors: ["Ignoring the timing element — the short-term effect is opposite to the long-term effect."],
          },
        },
        {
          id: "econ-u2-l21c2q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the factors that could cause a sustained increase in the demand for a country's housing market.",
          parts: [
            { label: "a", prompt: "Identify three factors that could increase demand for housing.", marks: 2 },
            { label: "b", prompt: "Explain how each factor shifts the demand curve.", marks: 3 },
            { label: "c", prompt: "Evaluate the likely consequences of such a demand increase for house prices and the economy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Housing demand determinants", statement: "Income, population growth, credit availability, expectations, substitute costs." },
            ],
            steps: [
              { part: "a", reasoning: "Any three: rising incomes, population growth, easier credit/low interest rates, rising rents, speculation.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Higher income/population increases number of buyers — demand shifts right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cheaper credit lowers the effective cost of buying — demand shifts right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rising expectations of price gains encourage speculative buying — further right shift.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "With inelastic short-run supply, prices rise sharply.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Affordability falls; may fuel inequality and financial instability if a bubble forms.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: depends on supply response — more building can moderate prices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Income, population, credit, expectations. (b) All shift demand right. (c) Prices rise; risk of bubbles and affordability problems.",
            commonErrors: ["Ignoring supply-side response — price effect depends on supply elasticity."],
          },
        },
        {
          id: "econ-u2-l21c2q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A normal good is best defined as a good for which:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand rises when income rises" },
              { id: "b", text: "Demand falls when income rises" },
              { id: "c", text: "Price and quantity demanded move together" },
              { id: "d", text: "Demand is unaffected by income changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Normal good", statement: "A good whose demand increases when consumer income increases." },
            ],
            steps: [
              { reasoning: "Normal goods have a positive income effect — higher income raises demand.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Demand rises when income rises",
            commonErrors: ["Reversing normal and inferior good definitions."],
          },
        },
        {
          id: "econ-u2-l21c2q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If the price of a complement to good X rises, the demand curve for good X will most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift to the right" },
              { id: "b", text: "Remain unchanged" },
              { id: "c", text: "Become vertical" },
              { id: "d", text: "Shift to the left" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary goods", statement: "Complements are consumed together; a rise in one's price reduces demand for the other." },
            ],
            steps: [
              { reasoning: "Goods consumed together see demand for one fall when the other's price rises.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift to the left",
            commonErrors: ["Treating complements like substitutes — the effect is opposite."],
          },
        },
        {
          id: "econ-u2-l21c2q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A positive value for the cross-price elasticity of demand between two goods indicates that the goods are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Substitutes" },
              { id: "b", text: "Inferior goods" },
              { id: "c", text: "Unrelated products" },
              { id: "d", text: "Complements" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cross-price elasticity (XED)", statement: "Positive XED = substitutes; negative XED = complements." },
            ],
            steps: [
              { reasoning: "Positive XED means a rise in one good's price raises demand for the other — the signature of substitutes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Substitutes",
            commonErrors: ["Reversing the sign convention — positive XED means substitutes, not complements."],
          },
        },
        {
          id: "econ-u2-l21c2q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Consumers expect their incomes to rise significantly next year. The likely immediate effect on current demand for normal goods is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Demand rises as consumers bring purchases forward" },
              { id: "b", text: "No effect until incomes actually rise" },
              { id: "c", text: "Demand falls as consumers delay spending" },
              { id: "d", text: "Supply shifts to the left" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expectations and demand", statement: "Expected future income gains encourage current spending, shifting demand right." },
            ],
            steps: [
              { reasoning: "Expected higher future income makes consumers feel able to spend more now.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Demand rises as consumers bring purchases forward",
            commonErrors: ["Assuming expectations have no effect until they are realised."],
          },
        },
        {
          id: "econ-u2-l21c2q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An increase in the number of buyers in a market will cause the demand curve to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shift to the left" },
              { id: "b", text: "Remain unchanged" },
              { id: "c", text: "Become steeper" },
              { id: "d", text: "Shift to the right" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number of buyers", statement: "More buyers means greater quantity demanded at every price — demand shifts right." },
            ],
            steps: [
              { reasoning: "Each additional buyer adds to quantity demanded at every price.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shift to the right",
            commonErrors: ["Confusing a larger number of buyers with a change in each buyer's demand."],
          },
        },
        {
          id: "econ-u2-l21c2q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Consumer income rises from $2,000 to $2,200 per month and quantity demanded of a good rises from 50 to 54 units. (a) Calculate the percentage change in income. (b) Calculate the income elasticity of demand (YED).",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) % change in income", answer: 10, unit: "%" },
              { label: "(b) YED", answer: 0.8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "YED", statement: "$YED = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}$" },
            ],
            steps: [
              { reasoning: "% change in income = (2200 - 2000)/2000 × 100 = 10%.", working: "\\%\\Delta Y = \\frac{2200-2000}{2000} \\times 100 = 10\\%", marks: 1, markCode: "M" },
              { reasoning: "% change in quantity demanded = (54 - 50)/50 × 100 = 8%.", working: "\\%\\Delta Q_d = \\frac{54-50}{50} \\times 100 = 8\\%", marks: 1, markCode: "M" },
              { reasoning: "YED = 8/10 = 0.8 — a normal good with income-inelastic demand.", working: "YED = \\frac{8}{10} = 0.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 10%. (b) YED = 0.8.",
            commonErrors: ["Dividing quantity demanded by income levels instead of using percentage changes."],
          },
        },
        {
          id: "econ-u2-l21c2q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "When the price of good B rises by 10%, quantity demanded of good A falls by 15%. (a) Calculate the cross-price elasticity of demand (XED). (b) Using the code (1 = complements, 2 = substitutes), classify the relationship between the goods.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) XED", answer: -1.5 },
              { label: "(b) Relationship (1 = complements, 2 = substitutes)", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "XED", statement: "$XED = \\frac{\\%\\Delta Q_d \\text{ of A}}{\\%\\Delta P \\text{ of B}}$ — negative = complements." },
            ],
            steps: [
              { reasoning: "XED = %ΔQd of A / %ΔP of B = -15/10 = -1.5.", working: "XED = \\frac{-15}{10} = -1.5", marks: 1, markCode: "M" },
              { reasoning: "A negative XED means the goods are complements.", marks: 1, markCode: "R" },
              { reasoning: "The goods are consumed together, so a price rise in B reduces demand for A.", marks: 1, markCode: "M" },
              { reasoning: "Relationship code: complements = 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) XED = -1.5. (b) Complements (1).",
            commonErrors: ["Reporting XED as positive — the sign determines whether goods are substitutes or complements."],
          },
        },
        {
          id: "econ-u2-l21c2q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Consumer income rises by 10% and quantity demanded of an inferior good falls by 4%. (a) Calculate the income elasticity of demand (YED). (b) State whether demand for the good is income elastic or inelastic in absolute terms.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) YED", answer: -0.4 },
              { label: "(b) Elasticity in absolute terms (1 = elastic, 2 = inelastic)", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "YED", statement: "$YED = \\frac{\\%\\Delta Q_d}{\\%\\Delta Y}$ — negative for inferior goods." },
            ],
            steps: [
              { reasoning: "YED = -4/10 = -0.4.", working: "YED = \\frac{-4}{10} = -0.4", marks: 1, markCode: "M" },
              { reasoning: "The negative sign confirms an inferior good.", marks: 1, markCode: "R" },
              { reasoning: "|YED| = 0.4 < 1, so demand responds less than proportionally — inelastic (code 2).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) YED = -0.4. (b) Inelastic in absolute terms.",
            commonErrors: ["Dropping the negative sign — it is what identifies the good as inferior."],
          },
        },
        {
          id: "econ-u2-l21c2q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "At a price of $5, total quantity demanded is 300 units from 3,000 consumers. A successful advertising campaign raises the number of consumers in the market to 4,000, with each consumer's demand unchanged. (a) Calculate the new market quantity demanded. (b) Calculate the percentage increase in market demand.",
          response: {
            type: "numeric",
            parts: [
              { label: "(a) New market quantity demanded", answer: 400, unit: "units" },
              { label: "(b) % increase in market demand", answer: 33.33, tolerance: 0.01, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Number of buyers", statement: "Market demand is the sum of individual demands; more buyers raise demand at every price." },
            ],
            steps: [
              { reasoning: "Demand per consumer = 300/3000 = 0.1 units; new total = 4000 × 0.1 = 400 units.", working: "\\frac{300}{3000} \\times 4000 = 400", marks: 1, markCode: "M" },
              { reasoning: "% increase = (400 - 300)/300 × 100 = 33.33%.", working: "\\%\\Delta Q_d = \\frac{400-300}{300} \\times 100 = 33.33\\%", marks: 1, markCode: "M" },
              { reasoning: "A larger buyer base shifts market demand rightward.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 400 units. (b) 33.33%.",
            commonErrors: ["Assuming each consumer's demand rises instead of the number of consumers rising."],
          },
        },
        {
          id: "econ-u2-l21c2q14",
          difficulty: "challenge",
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
              { reasoning: "%ΔY = (1100-1000)/1000 × 100 = 10%; %ΔQd = (50-40)/40 × 100 = 25%.", working: "\\%\\Delta Y = 10\\%,\\quad \\%\\Delta Q_d = 25\\%", marks: 1, markCode: "M" },
              { reasoning: "YED = 25/10 = 2.5.", working: "YED = \\frac{25}{10} = 2.5", marks: 1, markCode: "A" },
              { reasoning: "YED > 1 means demand rises more than proportionally with income — a luxury good (code 3).", marks: 1, markCode: "R" },
              { reasoning: "Classification stated correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) YED = 2.5. (b) Luxury good (3).",
            commonErrors: ["Using the new income as the base for the percentage change."],
          },
        },
        {
          id: "econ-u2-l21c2q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Explain how a successful advertising campaign can shift the demand curve for a product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tastes and preferences", statement: "Advertising changes consumer tastes and preferences, a non-price determinant of demand." },
            ],
            steps: [
              { reasoning: "Advertising persuades consumers that the product is more desirable or fashionable.", marks: 1, markCode: "M" },
              { reasoning: "This changes tastes and preferences — a determinant of demand other than price.", marks: 1, markCode: "M" },
              { reasoning: "At every price, more consumers are willing and able to buy, so quantity demanded rises.", marks: 1, markCode: "M" },
              { reasoning: "The demand curve therefore shifts to the right.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Advertising shifts tastes → more demand at every price → demand curve shifts right.",
            commonErrors: ["Describing a movement along the curve instead of a shift caused by changing tastes."],
          },
        },
        {
          id: "econ-u2-l21c2q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine how changes in consumer expectations about future prices affect current demand.",
          parts: [
            { label: "a", prompt: "Define the role of expectations as a determinant of demand.", marks: 2 },
            { label: "b", prompt: "Explain the effect on current demand of expected future price rises versus expected future price falls.", marks: 3 },
            { label: "c", prompt: "Evaluate how reliable expectations are as a predictor of future demand.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expectations and demand", statement: "Anticipated future prices and incomes shift current demand before changes occur." },
            ],
            steps: [
              { part: "a", reasoning: "Expectations are consumers' forecasts of future prices, incomes or availability.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They act as a non-price determinant, shifting demand before the expected change happens.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expected price rises: consumers buy now to avoid paying more later — current demand shifts right.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expected price falls: consumers delay purchases — current demand shifts left.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both effects occur at unchanged current prices — they are curve shifts, not movements.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Expectations can be self-fulfilling or wrong — e.g. panic buying can itself raise prices.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Uncertainty means observed demand may reverse quickly once expectations change.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement: expectations are powerful short-run determinants but volatile and hard to forecast.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Expectations shift demand ahead of realised changes. (b) Expected rises → buy now; expected falls → delay. (c) Powerful but volatile and uncertain.",
            commonErrors: ["Ignoring that expected future changes affect current demand at unchanged prices."],
          },
        },
      ],
    },
  ],
};
