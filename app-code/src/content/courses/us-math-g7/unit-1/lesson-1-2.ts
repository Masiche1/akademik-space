import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "m7-u1-lesson-1-2",
  code: "1-2",
  title: "Percent Problems",
  goal: "I CAN solve multi-step percent problems involving tax, tips, markups, discounts, percent change and percent error.",
  standards: ["7.RP.A.3"],
  vocabulary: [
    { term: "Percent", definition: "A ratio that compares a number to $100$. For example $35\\%$ means $\\frac{35}{100} = 0.35$." },
    { term: "Markup", definition: "The amount a store adds to the price it paid for an item to get the selling price." },
    { term: "Discount", definition: "The amount subtracted from the original price of an item, often given as a percent of that price." },
    { term: "Sales tax", definition: "A percent of the purchase price that is added to the cost of an item and paid to the government." },
    { term: "Percent change", definition: "The change in a quantity as a percent of the original amount: $\\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$." },
    { term: "Percent error", definition: "The size of the error as a percent of the actual value: $\\frac{|\\text{estimate} - \\text{actual}|}{\\text{actual}} \\times 100\\%$." },
  ],
  concepts: [
    {
      id: "m7-u1-tax-tips-markups-discounts",
      title: "Tax, tips, markups and discounts",
      skill: "Find a percent of a quantity and add or subtract it, or use a single multiplier, to solve real-world problems.",
      lesson: {
        sections: [
          {
            heading: "Percent of a quantity",
            body: "To find a percent of a number, change the percent to a decimal and multiply. A $15\\%$ tip on a $\\$40$ meal is $0.15 \\times 40 = \\$6$. Tax, tips and markups are **added** to an amount. Discounts are **subtracted** from it.",
          },
          {
            heading: "Single multiplier method",
            body: "You can do both steps at once. Adding $r\\%$ means multiplying by $1 + r$ (as a decimal). Subtracting $r\\%$ means multiplying by $1 - r$. A $20\\%$ discount means paying $80\\%$, so multiply by $0.80$. A $7\\%$ tax means multiply by $1.07$.",
          },
          {
            heading: "Multi-step problems",
            body: "When there are several steps, do them in the order described in the problem. A discount followed by tax uses the **discounted** price for the tax. Percents of different bases cannot simply be added: a $10\\%$ discount after a $35\\%$ markup is not a $25\\%$ markup.",
          },
        ],
        keyFormulas: [
          { name: "Increase by r%", statement: "$\\text{new} = \\text{original} \\times (1 + r)$" },
          { name: "Decrease by r%", statement: "$\\text{new} = \\text{original} \\times (1 - r)$" },
        ],
        workedExample: {
          problem: "A backpack costs $\\$50$. It is on sale for $30\\%$ off, and then $6\\%$ sales tax is added. What is the final price?",
          solution: "Sale price $= 50 \\times 0.70 = \\$35$. With tax: $35 \\times 1.06 = \\$37.10$. The final price is $\\$37.10$.",
        },
      },
      questions: [
        {
          id: "m7-u1-tax-tips-markups-discounts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You leave a $15\\%$ tip on a restaurant meal that costs $\\$40$. How much is the tip?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$6.00$" },
              { id: "b", text: "$\\$4.00$" },
              { id: "c", text: "$\\$46.00$" },
              { id: "d", text: "$\\$15.00$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Percent of a quantity", statement: "$r\\%$ of $A$ is $\\frac{r}{100} \\times A$." },
            ],
            steps: [
              { reasoning: "Convert $15\\%$ to $0.15$ and multiply by the meal cost.", working: "0.15 \\times 40 = 6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\$6.00$",
            commonErrors: ["Choosing $\\$46.00$, which is the meal plus tip, not the tip alone.", "Calculating $10\\%$ of $40$ and stopping."],
          },
        },
        {
          id: "m7-u1-tax-tips-markups-discounts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pair of sneakers costs $\\$60$. It is on sale for $20\\%$ off. Then $7\\%$ sales tax is added to the sale price. What is the final price, in dollars? Round to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Final price", answer: 51.36, tolerance: 0.01, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Single multiplier", statement: "A $20\\%$ decrease multiplies by $0.80$. A $7\\%$ increase multiplies by $1.07$." },
            ],
            steps: [
              { reasoning: "Apply the discount first: pay $80\\%$ of $\\$60$.", working: "60 \\times 0.80 = 48", marks: 1, markCode: "M" },
              { reasoning: "Add tax on the sale price.", working: "48 \\times 1.07 = 51.36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$51.36$",
            commonErrors: ["Taking tax on the original $\\$60$.", "Adding $20\\%$ and $7\\%$ to get a net change of $13\\%$ off."],
          },
        },
        {
          id: "m7-u1-tax-tips-markups-discounts-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A store buys a jacket for $\\$40$ and marks up the price by $35\\%$. Later the store sells the jacket at a $10\\%$ discount off the marked-up price. What is the sale price, in dollars?",
          response: { type: "numeric", parts: [{ label: "Sale price", answer: 48.6, tolerance: 0.01, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Markup", statement: "$\\text{selling price} = \\text{cost} \\times (1 + \\text{markup rate})$" },
              { kind: "formula", name: "Discount", statement: "$\\text{sale price} = \\text{price} \\times (1 - \\text{discount rate})$" },
            ],
            steps: [
              { reasoning: "Apply the markup to the cost.", working: "40 \\times 1.35 = 54", marks: 1, markCode: "M" },
              { reasoning: "Apply the discount to the marked-up price, not to the cost.", working: "54 \\times 0.90", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "48.60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$48.60$",
            commonErrors: ["Using a net markup of $25\\%$, which gives $\\$50$.", "Applying the $10\\%$ discount to the $\\$40$ cost."],
            examinerNote: "The store still makes a profit: $48.60 > 40$. Percents of different bases cannot be combined by adding.",
          },
        },
        {
          id: "m7-u1-tax-tips-markups-discounts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A family's restaurant meal costs $\\$64$ before tax and tip. The sales tax rate is $8\\%$. The family leaves a $20\\%$ tip, calculated on the $\\$64$ meal price before tax.",
          parts: [
            { label: "a", prompt: "Find the sales tax, in dollars.", marks: 2 },
            { label: "b", prompt: "Find the tip, in dollars.", marks: 2 },
            { label: "c", prompt: "Find the total amount the family pays, in dollars.", marks: 1 },
            { label: "d", prompt: "The total can also be found by multiplying $64$ by a single number. Find this number and use it to check your answer to (c).", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Sales tax (dollars)", answer: 5.12, tolerance: 0.01 },
              { label: "(b) Tip (dollars)", answer: 12.8, tolerance: 0.01 },
              { label: "(c) Total (dollars)", answer: 81.92, tolerance: 0.01 },
              { label: "(d) Single multiplier", answer: 1.28, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Percent of a quantity", statement: "$r\\%$ of $A$ is $\\frac{r}{100} \\times A$." },
              { kind: "property", name: "Single multiplier", statement: "Adding several percents of the same base multiplies by $1 + r_1 + r_2$ (as decimals)." },
            ],
            steps: [
              { part: "a", reasoning: "Convert $8\\%$ to a decimal and multiply by the meal price.", working: "0.08 \\times 64", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "5.12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The tip is $20\\%$ of the pre-tax price.", working: "0.20 \\times 64", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "12.80", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add the meal, tax and tip.", working: "64 + 5.12 + 12.80 = 81.92", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Both percents are of the same $\\$64$, so the multiplier is $1$ plus both decimals.", working: "1 + 0.08 + 0.20", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate the multiplier.", working: "1.28", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check that it matches part (c).", working: "64 \\times 1.28 = 81.92", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\$5.12$ (b) $\\$12.80$ (c) $\\$81.92$ (d) $1.28$, and $64 \\times 1.28 = 81.92$",
            commonErrors: ["Calculating the tip on the after-tax amount ($\\$69.12$), which gives a different total.", "Using $1.08 \\times 1.20$ in (d), which compounds the percents."],
            examinerNote: "In (b) a tip calculated on the after-tax amount is not correct here because the stem says before tax.",
          },
        },
      ],
    },
    {
      id: "m7-u1-percent-change-error",
      title: "Percent increase, decrease and percent error",
      skill: "Calculate percent change and percent error relative to the original or actual value.",
      lesson: {
        sections: [
          {
            heading: "Percent change",
            body: "Percent change compares the change to the **original** amount: $\\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$. A positive result is a percent increase; a negative result is a percent decrease. A price rising from $\\$40$ to $\\$50$ is a change of $\\$10$, and $\\frac{10}{40} = 0.25$, so it is a $25\\%$ increase.",
          },
          {
            heading: "Percent increase is not the reverse of percent decrease",
            body: "Always divide by the starting value. Going from $50$ back down to $40$ is a change of $10$ out of $50$, a $20\\%$ decrease, not $25\\%$. The base is different, so the percents are different.",
          },
          {
            heading: "Percent error",
            body: "When you measure or estimate something, the **percent error** compares your mistake with the **actual** (true) value: $\\frac{|\\text{estimate} - \\text{actual}|}{\\text{actual}} \\times 100\\%$. The absolute value bars mean percent error is never negative.",
          },
        ],
        keyFormulas: [
          { name: "Percent change", statement: "$\\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$" },
          { name: "Percent error", statement: "$\\frac{|\\text{estimate} - \\text{actual}|}{\\text{actual}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "A student estimates that a rope is $9$ meters long. Its actual length is $8$ meters. Find the percent error.",
          solution: "Error $= |9 - 8| = 1$ meter. Percent error $= \\frac{1}{8} \\times 100\\% = 12.5\\%$.",
        },
      },
      questions: [
        {
          id: "m7-u1-percent-change-error-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The price of a video game increases from $\\$40$ to $\\$50$. What is the percent increase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50\\%$" },
              { id: "b", text: "$20\\%$" },
              { id: "c", text: "$10\\%$" },
              { id: "d", text: "$25\\%$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent change", statement: "$\\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "The change is $50 - 40 = 10$. Divide by the original price $40$.", working: "\\frac{10}{40} \\times 100\\% = 25\\%", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $25\\%$",
            commonErrors: ["Dividing by the new price: $\\frac{10}{50} = 20\\%$.", "Giving the dollar change, $10$, as a percent."],
          },
        },
        {
          id: "m7-u1-percent-change-error-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A jacket's price drops from $\\$80$ to $\\$68$. What is the percent decrease?",
          response: { type: "numeric", parts: [{ label: "Percent decrease", answer: 15, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent change", statement: "$\\frac{|\\text{new} - \\text{original}|}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the decrease and divide by the original price.", working: "\\frac{80 - 68}{80} = \\frac{12}{80}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percent.", working: "0.15 = 15\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\%$ decrease",
            commonErrors: ["Dividing by the new price: $\\frac{12}{68} \\approx 17.6\\%$.", "Reporting the $\\$12$ change as $12\\%$."],
          },
        },
        {
          id: "m7-u1-percent-change-error-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student measures the length of a table as $12.6$ feet. The actual length is $12$ feet. Find the percent error.",
          response: { type: "numeric", parts: [{ label: "Percent error", answer: 5, tolerance: 0.01, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent error", statement: "$\\frac{|\\text{estimate} - \\text{actual}|}{\\text{actual}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the size of the error.", working: "|12.6 - 12| = 0.6", marks: 1, markCode: "M" },
              { reasoning: "Divide by the actual value, not the measured value.", working: "\\frac{0.6}{12}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percent.", working: "0.05 = 5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\%$",
            commonErrors: ["Dividing by $12.6$ to get about $4.76\\%$.", "Forgetting to multiply by $100$ and answering $0.05$."],
          },
        },
        {
          id: "m7-u1-percent-change-error-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The population of a town was $25{,}000$ in 2015 and $28{,}000$ in 2020. A planner predicts that the population will grow by the same percent over the next five years. In 2025 the actual population is found to be $31{,}000$.",
          parts: [
            { label: "a", prompt: "Find the increase in population from 2015 to 2020.", marks: 1 },
            { label: "b", prompt: "Find the percent increase from 2015 to 2020.", marks: 2 },
            { label: "c", prompt: "Find the planner's predicted population for 2025.", marks: 2 },
            { label: "d", prompt: "Find the percent error of the planner's prediction, compared with the actual 2025 population. Round to the nearest tenth of a percent.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Increase in population", answer: 3000 },
              { label: "(b) Percent increase", answer: 12, unit: "%" },
              { label: "(c) Predicted 2025 population", answer: 31360 },
              { label: "(d) Percent error", answer: 1.2, tolerance: 0.05, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent change", statement: "$\\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$" },
              { kind: "formula", name: "Percent error", statement: "$\\frac{|\\text{estimate} - \\text{actual}|}{\\text{actual}} \\times 100\\%$" },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the populations.", working: "28000 - 25000 = 3000", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the increase by the 2015 (original) population.", working: "\\frac{3000}{25000}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to a percent.", working: "0.12 = 12\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A $12\\%$ increase on the 2020 population multiplies by $1.12$.", working: "28000 \\times 1.12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "31360", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the size of the error.", working: "|31360 - 31000| = 360", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by the actual population and convert to a percent.", working: "\\frac{360}{31000} \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Round to the nearest tenth.", working: "1.16\\ldots \\approx 1.2\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3000$ (b) $12\\%$ (c) $31{,}360$ (d) about $1.2\\%$",
            commonErrors: ["Dividing by $28{,}000$ in (b).", "Dividing by the predicted value $31{,}360$ in (d), giving about $1.15\\%$."],
            examinerNote: "In (c) and (d) follow through from an incorrect percent in (b).",
          },
        },
      ],
    },
  ],
};
