import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypm2-u1-lesson-1-2",
  code: "1-2",
  title: "Percentages and Finance",
  goal: "I CAN calculate percentage change and reverse percentages, and solve problems with interest, discounts, tax, profit and loss.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Percentage change", definition: "The change in a quantity written as a percentage of the original: $\\dfrac{\\text{change}}{\\text{original}}\\times100\\%$." },
    { term: "Multiplier", definition: "The number you multiply by to apply a percentage change. An increase of 15% has multiplier 1.15; a decrease of 15% has multiplier 0.85." },
    { term: "Reverse percentage", definition: "Finding the original amount when you know the amount after a percentage change." },
    { term: "Simple interest", definition: "Interest calculated only on the original amount, so it is the same every year: $I=\\dfrac{PRT}{100}$." },
    { term: "Compound growth", definition: "Growth where each year's percentage is calculated on the amount at the end of the previous year." },
    { term: "Profit and loss", definition: "Profit is selling price minus cost price when this is positive; loss is the amount by which the selling price is less than the cost price." },
  ],
  concepts: [
    {
      id: "mypm2-u1-percentage-change",
      title: "Percentage change and reverse percentages",
      skill: "Find percentage change, work back to an original amount and express one quantity as a percentage of another.",
      lesson: {
        sections: [
          {
            heading: "One quantity as a percentage of another",
            body: "Write a fraction and multiply by 100. For example 18 out of 24 is $\\dfrac{18}{24}\\times100\\%=75\\%$. Both quantities must be in the same units.",
          },
          {
            heading: "Percentage change with multipliers",
            body: "To increase by $p\\%$ multiply by $1+\\dfrac{p}{100}$. To decrease by $p\\%$ multiply by $1-\\dfrac{p}{100}$. To find a percentage change, divide the change by the **original** value:\n\n$$\\text{percentage change}=\\dfrac{\\text{new}-\\text{original}}{\\text{original}}\\times100\\%$$",
          },
          {
            heading: "Reverse percentages",
            body: "If an amount is the result of a percentage change, the original is found by **dividing** by the multiplier, not by adding or subtracting a percentage. If a price after a 20% discount is 56, the price is 80% of the original, so the original is $56\\div0.8=70$.",
          },
        ],
        keyFormulas: [
          { name: "Percentage change", statement: "$\\dfrac{\\text{new}-\\text{original}}{\\text{original}}\\times100\\%$" },
          { name: "Reverse percentage", statement: "$\\text{original}=\\text{new}\\div\\text{multiplier}$" },
        ],
        workedExample: {
          problem: "After a 12% increase, a salary is 3360 euros a month. Find the original salary.",
          solution: "The multiplier is 1.12. Original $=3360\\div1.12=3000$ euros.",
        },
      },
      questions: [
        {
          id: "mypm2-u1-percentage-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Increase 80 by 25%.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$" },
              { id: "b", text: "$85$" },
              { id: "c", text: "$105$" },
              { id: "d", text: "$100$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "An increase of $p\\%$ has multiplier $1+\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "The multiplier for a 25% increase is 1.25.", working: "80\\times1.25=100", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $100$",
            commonErrors: ["Adding 25 to get 105.", "Giving only the increase, 20.", "Adding 5 to get 85."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pair of trainers costs 250 euros. In a sale the price falls to 190 euros. Work out the percentage decrease in the price.",
          response: { type: "numeric", parts: [{ label: "Percentage decrease", answer: 24, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\dfrac{\\text{change}}{\\text{original}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Find the change, and divide by the original price.", working: "\\dfrac{250-190}{250}=\\dfrac{60}{250}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 100.", working: "0.24\\times100=24\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24\\%$",
            commonErrors: ["Dividing by the new price: $60\\div190\\approx31.6\\%$.", "Giving the change, 60, without converting to a percentage."],
            examinerNote: "M1 for $\\frac{60}{250}$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "After a price rise of 15%, a games console costs 345 euros. Work out the price before the rise.",
          response: { type: "numeric", parts: [{ label: "Original price", answer: 300, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reverse percentage", statement: "Original $=$ new $\\div$ multiplier." },
            ],
            steps: [
              { reasoning: "The new price is 115% of the original, so the multiplier is 1.15.", working: "\\text{original}\\times1.15=345", marks: 1, markCode: "M" },
              { reasoning: "Divide by the multiplier.", working: "345\\div1.15", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "300", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ euros",
            commonErrors: ["Finding 15% of 345 and subtracting it, giving 293.25.", "Subtracting 15 from 345, giving 330."],
            examinerNote: "M1 for 115% or 1.15 identified. M1 for dividing 345 by 1.15. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Amira is comparing some prices and results. She wants to check her work using percentages.",
          parts: [
            { label: "a", prompt: "Amira scored 18 out of 24 in a test. Write her score as a percentage.", marks: 2 },
            { label: "b", prompt: "The population of her town rose from 8000 to 9200. Work out the percentage increase.", marks: 2 },
            { label: "c", prompt: "A jacket costs 56 euros after a 20% discount. Work out its original price.", marks: 2 },
            { label: "d", prompt: "A different item costing 100 euros is increased by 20% and then the new price is decreased by 20%. Amira says the price returns to 100 euros. Work out the final price and explain what is wrong with her claim.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percentage score", answer: 75, unit: "%" },
              { label: "(b) Percentage increase", answer: 15, unit: "%" },
              { label: "(c) Original price", answer: 70, unit: "euros" },
              { label: "(d) Final price", answer: 96, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\dfrac{\\text{change}}{\\text{original}}\\times100\\%$" },
              { kind: "principle", name: "Reverse percentage", statement: "Original $=$ new $\\div$ multiplier." },
              { kind: "principle", name: "Percentages of different amounts", statement: "A percentage is always of a specific amount, so 20% of the larger price is more than 20% of the smaller price." },
            ],
            steps: [
              { part: "a", reasoning: "Write as a fraction of the total.", working: "\\dfrac{18}{24}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Convert to a percentage.", working: "0.75\\times100=75\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Change divided by the original population.", working: "\\dfrac{9200-8000}{8000}=\\dfrac{1200}{8000}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to a percentage.", working: "0.15\\times100=15\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "After a 20% discount the price is 80% of the original, so divide by 0.8.", working: "56\\div0.8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "70", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Apply the multipliers in turn: 120 after the increase, then 80% of 120.", working: "100\\times1.2\\times0.8=96", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The 20% decrease is taken from the larger price, 120, so it removes 24 and not 20. The final price is 96 euros, a 4% fall overall.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $75\\%$ (b) $15\\%$ (c) $70$ euros (d) $96$ euros; the second percentage is of a different, larger amount.",
            commonErrors: ["In (b), dividing by 9200.", "In (c), adding 20% of 56 to 56 to get 67.20.", "In (d), assuming that +20% and -20% cancel."],
            examinerNote: "In (d) the R mark needs a reference to the percentage being of a different amount (oe).",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Increase 60 by 15%.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$75$" },
              { id: "b", text: "$69$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$65$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "An increase of $p\\%$ has multiplier $1+\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "The multiplier for 15% is 1.15, and $15\\%$ of 60 is 9.", working: "60\\times1.15=69", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $69$",
            commonErrors: ["Adding 15 to get 75.", "Giving only the increase, 9."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Decrease 200 by 10%.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$180$" },
              { id: "b", text: "$190$" },
              { id: "c", text: "$210$" },
              { id: "d", text: "$20$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "A decrease of $p\\%$ has multiplier $1-\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "The multiplier for a 10% decrease is 0.9, and $10\\%$ of 200 is 20.", working: "200\\times0.9=180", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $180$",
            commonErrors: ["Subtracting 10 instead of 10% (giving 190).", "Adding 20 instead of subtracting."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out 35% of 240.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 84 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage of an amount", statement: "To find $p\\%$ of an amount, multiply by $\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "Find 10% first, then scale, or multiply directly by 0.35.", working: "0.35\\times240", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "84", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$84$",
            commonErrors: ["Finding 35% of the wrong amount or adding 35 to 240."],
            examinerNote: "M1 for $0.35\\times240$ or $24\\times35$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A toy's price rises from 50 euros to 65 euros. Work out the percentage increase.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 30, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\dfrac{\\text{new}-\\text{original}}{\\text{original}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "The change is 15 euros, divided by the original price 50.", working: "\\dfrac{65-50}{50}=\\dfrac{15}{50}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage.", working: "0.3\\times100=30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Dividing by the new price 65.", "Writing 15 as the percentage instead of the change."],
            examinerNote: "M1 for $\\frac{15}{50}$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the multiplier for a decrease of 12%?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.88$" },
              { id: "b", text: "$0.12$" },
              { id: "c", text: "$1.12$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "A decrease of $p\\%$ has multiplier $1-\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "A 12% decrease keeps 88% of the amount.", working: "1-\\frac{12}{100}=0.88", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.88$",
            commonErrors: ["Using $1+\\frac{12}{100}=1.12$, the multiplier for an increase.", "Using 0.12, which is the fraction decreased rather than the fraction remaining."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A price is reduced by 25%. Which multiplier finds the new price from the old price?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.75$" },
              { id: "b", text: "$0.25$" },
              { id: "c", text: "$1.25$" },
              { id: "d", text: "$75$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "A decrease of $p\\%$ has multiplier $1-\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "A 25% discount leaves 75% of the price.", working: "1-\\frac{25}{100}=0.75", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.75$",
            commonErrors: ["Using the increase multiplier 1.25.", "Using 0.25, which would remove 75% of the price."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why, to find the original price of an item after a 25% discount, you divide the sale price by 0.75 rather than subtracting 25% of the sale price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reverse percentage", statement: "Original $=$ new $\\div$ multiplier." },
            ],
            steps: [
              { reasoning: "After a 25% discount the sale price is 75% of the original, so it is the result of multiplying by 0.75.", marks: 1, markCode: "M" },
              { reasoning: "To undo a multiplication you divide by the same multiplier.", working: "\\text{original}=\\text{sale}\\div0.75", marks: 1, markCode: "M" },
              { reasoning: "Subtracting 25% of the sale price would only remove 25% of a smaller amount; the discount was 25% of the larger original price.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The sale price is 75% of the original, so the original is found by dividing by 0.75; subtracting 25% of the sale price uses the wrong base.",
            commonErrors: ["Dividing by 0.25 or multiplying by 0.75 instead of dividing."],
            examinerNote: "The R mark needs the idea that the percentage was taken of the original (larger) amount.",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "After a 30% increase, a bicycle costs 260 euros. Work out the price before the increase.",
          response: { type: "numeric", parts: [{ label: "Original price", answer: 200, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reverse percentage", statement: "Original $=$ new $\\div$ multiplier." },
            ],
            steps: [
              { reasoning: "The new price is 130% of the original, so the multiplier is 1.3.", working: "\\text{original}\\times1.3=260", marks: 1, markCode: "M" },
              { reasoning: "Divide by the multiplier.", working: "260\\div1.3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and check: $200\\times1.3=260$.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$ euros",
            commonErrors: ["Subtracting 30% of 260, giving 182.", "Dividing by 0.3 instead of 1.3."],
            examinerNote: "M1 for 1.3 or 130%. M1 for division. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A quantity is increased by 50% and then the new quantity is decreased by 50%. Compared with the original quantity, the final quantity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less than the original" },
              { id: "b", text: "Zero" },
              { id: "c", text: "The same as the original" },
              { id: "d", text: "Greater than the original" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentages of different amounts", statement: "A percentage is always of a specific amount, so the 50% decrease is taken from a larger amount than the 50% increase." },
            ],
            steps: [
              { reasoning: "Start with 100: $100\\times1.5=150$, then $150\\times0.5=75$, which is less than 100.", working: "100\\times1.5\\times0.5=75", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Less than the original",
            commonErrors: ["Assuming +50% and -50% cancel, giving answer (a)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Show that increasing an amount by 20% and then decreasing the result by 20% gives a net decrease of 4%.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "An increase of $p\\%$ has multiplier $1+\\dfrac{p}{100}$; a decrease has multiplier $1-\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "Apply the two multipliers in turn, starting from 100.", working: "100\\times1.2\\times0.8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "120\\times0.8=96", marks: 1, markCode: "M" },
              { reasoning: "Compare with the original: $100-96=4$, so the net change is a decrease of 4%.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$100\\times1.2\\times0.8=96$, a decrease of $4\\%$.",
            commonErrors: ["Assuming the two percentages cancel to give 100.", "Multiplying 1.2 by 0.8 incorrectly."],
            examinerNote: "The R mark is for the comparison with the original amount showing a net decrease.",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The population of a town was 40 000 before a rise. After the rise it is 55 000. A student claims the population rose by 15 000, so the increase is $\\frac{15\\,000}{55\\,000}\\times100\\%=27.3\\%$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\dfrac{\\text{change}}{\\text{original}}\\times100\\%$ — the original, not the new value, is the denominator." },
            ],
            steps: [
              { reasoning: "Identify the change and the original population.", working: "55\\,000-40\\,000=15\\,000,\\quad\\text{original}=40\\,000", marks: 1, markCode: "M" },
              { reasoning: "Divide by the original population.", working: "\\frac{15\\,000}{40\\,000}=0.375", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage.", working: "37.5\\%", marks: 1, markCode: "A" },
              { reasoning: "The student divided by the new population 55 000 instead of the original 40 000, so the percentage is wrong.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$37.5\\%$; the denominator must be the original population, 40 000.",
            commonErrors: ["Accepting 27.3% because the working looks plausible."],
            examinerNote: "The R mark is for identifying the wrong denominator.",
          },
        },
        {
          id: "mypm2-u1-percentage-change-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A shop is running a promotion on a jacket.",
          parts: [
            { label: "a", prompt: "The jacket originally costs 120 euros. Work out its price after a 15% discount, in euros.", marks: 2 },
            { label: "b", prompt: "In the sale the jacket costs 85 euros. Work out the percentage discount from the original price of 120 euros.", marks: 2 },
            { label: "c", prompt: "After the sale, the price of the jacket is increased by 20% from 85 euros. Work out the new price, in euros.", marks: 2 },
            { label: "d", prompt: "Is the new price in part (c) the same as the original price? Explain why or why not.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Price after discount", answer: 102, unit: "euros" },
              { label: "(b) Percentage discount", answer: 29.17, tolerance: 0.01, unit: "%" },
              { label: "(c) New price", answer: 102, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "An increase of $p\\%$ has multiplier $1+\\dfrac{p}{100}$; a decrease has multiplier $1-\\dfrac{p}{100}$." },
              { kind: "formula", name: "Percentage change", statement: "$\\dfrac{\\text{change}}{\\text{original}}\\times100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply by the decrease multiplier 0.85.", working: "120\\times0.85=102", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the price.", working: "102\\text{ euros}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Change divided by the original price.", working: "\\frac{120-85}{120}=\\frac{35}{120}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to a percentage (accept 29.2% or 29.17%).", working: "0.2917\\times100\\approx29.2\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Increase 85 by 20% using multiplier 1.2.", working: "85\\times1.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "102", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The new price is 102 euros, which is not 120 euros, so it is not the same as the original.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The 20% increase is taken from 85, a smaller amount than 120, so it adds back less than was removed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $102$ euros (b) about $29.2\\%$ (c) $102$ euros (d) No — the price is still 18 euros below the original because the percentages are of different amounts.",
            commonErrors: ["In (b) dividing by 85 instead of 120.", "In (d) saying the price returns to 120 because +20% and the discount cancel."],
            examinerNote: "In (b) accept 29.1%, 29.2% or 29.17%. In (d) the reason must mention different base amounts.",
          },
        },
      ],
    },
    {
      id: "mypm2-u1-interest-finance",
      title: "Interest, discounts, tax and profit",
      skill: "Calculate simple interest, compound growth year by year, discounts, tax, profit and loss in money problems.",
      lesson: {
        sections: [
          {
            heading: "Simple interest",
            body: "Simple interest is the same every year because it is calculated only on the original amount (the principal).\n\n$$I=\\dfrac{P\\times R\\times T}{100}$$\n\nwhere $P$ is the principal, $R$ the yearly rate in percent and $T$ the time in years. 500 euros at 4% for 3 years earns $\\dfrac{500\\times4\\times3}{100}=60$ euros.",
          },
          {
            heading: "Compound growth",
            body: "With compound growth the interest of each year is added, so the next year's interest is larger. Multiply by the multiplier once for each year. After 2 years at 5%: $\\text{amount}=P\\times1.05\\times1.05=P\\times1.05^2$. Work year by year to see the pattern, and use the power for many years.",
          },
          {
            heading: "Discounts, tax and profit",
            body: "A discount of $p\\%$ has multiplier $1-\\dfrac{p}{100}$. Tax added to a price has multiplier $1+\\dfrac{\\text{rate}}{100}$. Profit or loss as a percentage is based on the **cost price**:\n\n$$\\text{profit or loss}\\%=\\dfrac{\\text{selling price}-\\text{cost price}}{\\text{cost price}}\\times100\\%$$\n\nA negative answer means a loss.",
          },
        ],
        keyFormulas: [
          { name: "Simple interest", statement: "$I=\\dfrac{PRT}{100}$" },
          { name: "Compound growth", statement: "$\\text{amount}=P\\times\\left(1+\\dfrac{R}{100}\\right)^T$" },
        ],
        workedExample: {
          problem: "Invest 1000 USD at 10% compound growth per year. Find the amount after 2 years.",
          solution: "Year 1: $1000\\times1.1=1100$. Year 2: $1100\\times1.1=1210$ USD.",
        },
      },
      questions: [
        {
          id: "mypm2-u1-interest-finance-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hana invests 500 euros at 4% simple interest per year. How much interest does she earn in 3 years?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2000 euros" },
              { id: "b", text: "60 euros" },
              { id: "c", text: "20 euros" },
              { id: "d", text: "560 euros" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=\\dfrac{PRT}{100}$" },
            ],
            steps: [
              { reasoning: "4% of 500 is 20 each year, and simple interest is the same every year.", working: "20\\times3=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 60 euros",
            commonErrors: ["Giving one year's interest, 20.", "Giving the total amount, 560, not the interest."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the value of 2000 CHF invested for 2 years at 5% compound growth per year.",
          response: { type: "numeric", parts: [{ label: "Value after 2 years", answer: 2205, unit: "CHF" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound growth", statement: "Multiply by $1+\\dfrac{R}{100}$ once for each year." },
            ],
            steps: [
              { reasoning: "Multiply by 1.05 for each year.", working: "2000\\times1.05=2100,\\quad 2100\\times1.05", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2205", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2205$ CHF",
            commonErrors: ["Using simple interest, giving 2200.", "Using multiplier 0.05, giving 100."],
            examinerNote: "M1 for $2000\\times1.05^2$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A phone accessory has 8% sales tax added to its price. The total price paid is 162 euros. Work out the price before tax was added.",
          response: { type: "numeric", parts: [{ label: "Price before tax", answer: 150, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reverse percentage", statement: "Original $=$ new $\\div$ multiplier." },
            ],
            steps: [
              { reasoning: "The total is 108% of the price before tax, so the multiplier is 1.08.", working: "\\text{price}\\times1.08=162", marks: 1, markCode: "M" },
              { reasoning: "Divide by the multiplier.", working: "162\\div1.08", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ euros",
            commonErrors: ["Subtracting 8% of 162, giving 149.04.", "Subtracting 8, giving 154."],
            examinerNote: "M1 for 1.08 or 108%. M1 for division. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Leo has 1000 GBP to save. A bank offers 3% per year. He compares simple interest with compound growth over 5 years.",
          parts: [
            { label: "a", prompt: "Work out the total simple interest after 5 years, in GBP.", marks: 2 },
            { label: "b", prompt: "Work out the value of the account after 5 years with compound growth, giving your answer to the nearest penny (2 decimal places). Show the amount at the end of each year.", marks: 2 },
            { label: "c", prompt: "Work out how much more Leo has with compound growth than with simple interest after 5 years, in GBP (2 decimal places).", marks: 2 },
            { label: "d", prompt: "Separately, a shop buys a coat for 80 GBP and sells it for 68 GBP. Work out the percentage loss.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Simple interest", answer: 150, unit: "GBP" },
              { label: "(b) Value with compound growth", answer: 1159.27, tolerance: 0.01, unit: "GBP" },
              { label: "(c) Difference", answer: 9.27, tolerance: 0.01, unit: "GBP" },
              { label: "(d) Percentage loss", answer: 15, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=\\dfrac{PRT}{100}$" },
              { kind: "formula", name: "Compound growth", statement: "Multiply by $1+\\dfrac{R}{100}$ once for each year." },
              { kind: "formula", name: "Profit and loss", statement: "Percentage loss $=\\dfrac{\\text{cost}-\\text{selling}}{\\text{cost}}\\times100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Interest each year is 3% of 1000.", working: "\\dfrac{1000\\times3\\times5}{100}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "150", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply by 1.03 for each year: 1030, 1060.90, 1092.73, 1125.51, ...", working: "1000\\times1.03^5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round.", working: "1159.27", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Simple interest gives a total of 1150. Subtract.", working: "1159.27-1150", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate. The extra comes from earning interest on interest.", working: "9.27", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Loss divided by the cost price.", working: "\\dfrac{80-68}{80}=\\dfrac{12}{80}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert to a percentage.", working: "0.15\\times100=15\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $150$ GBP (b) $1159.27$ GBP (c) $9.27$ GBP (d) $15\\%$ loss",
            commonErrors: ["In (b), using $1000\\times1.03\\times5$.", "In (d), dividing the loss by the selling price, giving 17.6%."],
            examinerNote: "In (c) follow through from (a) and (b). Accept 1159.27 or 1159.3 in (b).",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Sara invests 200 euros at 5% simple interest per year. How much interest does she earn in one year?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "205 euros" },
              { id: "b", text: "10 euros" },
              { id: "c", text: "1000 euros" },
              { id: "d", text: "5 euros" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=\\dfrac{PRT}{100}$" },
            ],
            steps: [
              { reasoning: "5% of 200 is $\\frac{200\\times5}{100}=10$ euros.", working: "\\frac{200\\times5\\times1}{100}=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 10 euros",
            commonErrors: ["Giving the total amount 205 or 210 instead of the interest.", "Using 5 euros (5% of 100)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A jacket has a 20% discount. Its original price is 80 euros. What is the sale price?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "64 euros" },
              { id: "b", text: "16 euros" },
              { id: "c", text: "100 euros" },
              { id: "d", text: "60 euros" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "A decrease of $p\\%$ has multiplier $1-\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "The multiplier is 0.8, and $20\\%$ of 80 is 16.", working: "80\\times0.8=64", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 64 euros",
            commonErrors: ["Subtracting 20 euros instead of 20% (giving 60).", "Giving the discount, 16."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the simple interest earned on 800 CHF invested for 4 years at 3% per year.",
          response: { type: "numeric", parts: [{ label: "Interest", answer: 96, unit: "CHF" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=\\dfrac{PRT}{100}$" },
            ],
            steps: [
              { reasoning: "Substitute into the simple interest formula.", working: "\\frac{800\\times3\\times4}{100}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "96", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$96$ CHF",
            commonErrors: ["Finding only one year's interest, 24.", "Giving the total 896 instead of the interest."],
            examinerNote: "M1 for $\\frac{800\\times3\\times4}{100}$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the value of 1500 USD after 2 years at 4% compound growth per year.",
          response: { type: "numeric", parts: [{ label: "Value after 2 years", answer: 1622.4, tolerance: 0.01, unit: "USD" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound growth", statement: "Multiply by $1+\\dfrac{R}{100}$ once for each year." },
            ],
            steps: [
              { reasoning: "Multiply by 1.04 for each year.", working: "1500\\times1.04=1560,\\quad1560\\times1.04", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "1622.40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1622.40$ USD",
            commonErrors: ["Using simple interest: $1500+2\\times60=1620$.", "Using multiplier 0.04 instead of 1.04."],
            examinerNote: "M1 for $1500\\times1.04^2$ oe. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An item costing 40 euros is sold for 50 euros. What is the profit as a percentage of the cost price?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20\\%$" },
              { id: "b", text: "$10\\%$" },
              { id: "c", text: "$25\\%$" },
              { id: "d", text: "$125\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit and loss", statement: "Profit $\\%=\\dfrac{\\text{selling}-\\text{cost}}{\\text{cost}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Profit is 10 euros; divide by the cost price 40.", working: "\\frac{10}{40}=0.25=25\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $25\\%$",
            commonErrors: ["Dividing the profit by the selling price, giving 20%.", "Giving the profit, 10 euros."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Sales tax of 10% is added to a price of 60 euros. What is the total price paid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "54 euros" },
              { id: "b", text: "60.10 euros" },
              { id: "c", text: "66 euros" },
              { id: "d", text: "70 euros" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "Adding tax of $p\\%$ has multiplier $1+\\dfrac{p}{100}$." },
            ],
            steps: [
              { reasoning: "The multiplier is 1.1, and $10\\%$ of 60 is 6.", working: "60\\times1.1=66", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 66 euros",
            commonErrors: ["Adding 10 euros instead of 10% (giving 70).", "Subtracting the tax."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between simple interest and compound growth, using an example of 1000 euros invested for 2 years at 10% per year.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=\\dfrac{PRT}{100}$: interest is the same every year." },
              { kind: "formula", name: "Compound growth", statement: "Each year's interest is calculated on the new total, so it grows." },
            ],
            steps: [
              { reasoning: "Simple interest: 10% of 1000 is 100 each year, so 200 after 2 years and a total of 1200.", working: "100\\times2=200", marks: 1, markCode: "M" },
              { reasoning: "Compound growth: year 1 gives 1100, year 2 gives $1100\\times1.1=1210$.", working: "1000\\times1.1^2=1210", marks: 1, markCode: "M" },
              { reasoning: "With compound growth the second year's interest is calculated on 1100, not 1000, so it earns interest on interest and the total is larger.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Simple interest gives 1200; compound growth gives 1210, because interest is earned on the growing total.",
            commonErrors: ["Computing compound interest as $1000\\times1.1\\times2$."],
            examinerNote: "The R mark needs the idea that the base for each year's interest changes.",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A shop buys a keyboard for 45 euros and sells it for 54 euros. Work out the percentage profit.",
          response: { type: "numeric", parts: [{ label: "Percentage profit", answer: 20, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit and loss", statement: "Percentage profit $=\\dfrac{\\text{selling}-\\text{cost}}{\\text{cost}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Find the profit, then divide by the cost price.", working: "\\frac{54-45}{45}=\\frac{9}{45}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage.", working: "0.2\\times100=20\\%", marks: 1, markCode: "A" },
              { reasoning: "Check: $20\\%$ of 45 is 9, and $45+9=54$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$20\\%$",
            commonErrors: ["Dividing 9 by 54 (the selling price), giving 16.7%."],
            examinerNote: "M1 for $\\frac{9}{45}$. A1 for 20%. R1 for the check or a correct statement that profit is a percentage of cost.",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A dealer buys a scooter for 600 euros and sells it for 540 euros. The percentage loss is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6.7\\%$" },
              { id: "b", text: "$10\\%$" },
              { id: "c", text: "$60\\%$" },
              { id: "d", text: "$90\\%$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit and loss", statement: "Percentage loss $=\\dfrac{\\text{cost}-\\text{selling}}{\\text{cost}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "The loss is 60 euros; divide by the cost price 600.", working: "\\frac{60}{600}=0.1=10\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $10\\%$",
            commonErrors: ["Dividing by the selling price 540, giving 11.1% (close to b).", "Giving the loss 60 euros."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "After tax of 8% is added, a meal costs 32.40 euros. Work out the price of the meal before tax.",
          response: { type: "numeric", parts: [{ label: "Price before tax", answer: 30, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reverse percentage", statement: "Original $=$ new $\\div$ multiplier." },
            ],
            steps: [
              { reasoning: "The total is 108% of the price before tax, so the multiplier is 1.08.", working: "\\text{price}\\times1.08=32.40", marks: 1, markCode: "M" },
              { reasoning: "Divide by the multiplier.", working: "32.40\\div1.08", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and check: $30\\times1.08=32.40$.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ euros",
            commonErrors: ["Subtracting 8% of 32.40, giving 29.81.", "Dividing by 0.08 instead of 1.08."],
            examinerNote: "M1 for 1.08 or 108%. M1 for division. A1 cao.",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Nadia invests 2000 euros for 3 years. A bank offers 4% simple interest per year. Another bank offers 4% compound growth per year.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=\\dfrac{PRT}{100}$" },
              { kind: "formula", name: "Compound growth", statement: "Multiply by $1.04$ once for each year." },
            ],
            steps: [
              { reasoning: "Simple interest: $\\frac{2000\\times4\\times3}{100}=240$, total 2240.", working: "2000+240=2240", marks: 1, markCode: "M" },
              { reasoning: "Compound: $2000\\times1.04=2080$, $2080\\times1.04=2163.20$, $2163.20\\times1.04=2249.73$ (to 2 d.p.).", working: "2000\\times1.04^3=2249.73", marks: 1, markCode: "M" },
              { reasoning: "The compound total 2249.73 is greater than the simple total 2240.", working: "2249.73-2240=9.73", marks: 1, markCode: "M" },
              { reasoning: "Compound growth earns interest on the interest from earlier years, so it is always at least as good when the rate is positive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Simple: $2240$ euros; compound: about $2249.73$ euros. Compound is better by about $9.73$ euros.",
            commonErrors: ["Using $2000\\times1.04\\times3$ for compound.", "Rounding too early and losing accuracy."],
            examinerNote: "Accept 2249.7 or 2249.73 for the compound total. The R mark needs the interest-on-interest explanation.",
          },
        },
        {
          id: "mypm2-u1-interest-finance-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A market stall sells handmade candles. The stallholder buys each candle for 6 euros and sells it for 10 euros. She also pays a stall fee of 30 euros for the day. Let $n$ be the number of candles she sells in a day.",
          parts: [
            { label: "a", prompt: "Write an expression for her total profit, in euros, for the day.", marks: 2 },
            { label: "b", prompt: "Work out her profit, in euros, on a day when she sells 15 candles.", marks: 2 },
            { label: "c", prompt: "Work out the percentage profit on each candle sold.", marks: 2 },
            { label: "d", prompt: "How many candles must she sell for her total profit to be at least 150 euros? Show your working.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Profit on 15 candles", answer: 30, unit: "euros" },
              { label: "(c) Percentage profit per candle", answer: 66.67, tolerance: 0.01, unit: "%" },
              { label: "(d) Number of candles for profit of at least 150 euros", answer: 45 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$\\text{profit}=(\\text{selling}-\\text{cost})\\times n-\\text{stall fee}$" },
              { kind: "formula", name: "Profit and loss", statement: "Percentage profit $=\\dfrac{\\text{selling}-\\text{cost}}{\\text{cost}}\\times100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Each candle earns $10-6=4$ euros; multiply by $n$ and subtract the stall fee.", working: "4n-30", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the expression.", working: "4n-30", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $n=15$.", working: "4\\times15-30", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "30", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Profit per candle divided by cost price.", working: "\\frac{10-6}{6}=\\frac{4}{6}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to a percentage (accept 66.7%).", working: "0.6667\\times100\\approx66.7\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set the profit expression to be at least 150 and solve.", working: "4n-30\\ge150\\Rightarrow4n\\ge180", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by 4 and check: $4\\times45-30=150$.", working: "n\\ge45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4n-30$ euros (b) $30$ euros (c) about $66.7\\%$ (d) $n\\ge45$, so at least 45 candles",
            commonErrors: ["Forgetting to subtract the stall fee.", "Using 10 euros as the cost in part (c)."],
            examinerNote: "In (d) accept n >= 45 or 'at least 45 candles'.",
          },
        },
      ],
    },
  ],
};
