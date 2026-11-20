import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edm9-u1-lesson-1-3",
  code: "1-3",
  title: "Percentages and Finance",
  goal: "I CAN work out reverse percentages and percentage change, and solve problems on simple interest, compound interest and depreciation.",
  standards: ["Y9 Number"],
  vocabulary: [
    { term: "Multiplier", definition: "The number you multiply by to apply a percentage change in one step. A 15% increase has multiplier $1.15$ and a 15% decrease has multiplier $0.85$." },
    { term: "Reverse percentage", definition: "A problem where you are given the amount after a percentage change and must find the original amount." },
    { term: "Percentage change", definition: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$." },
    { term: "Simple interest", definition: "Interest calculated only on the original amount, so the same amount is added each year." },
    { term: "Compound interest", definition: "Interest calculated on the original amount plus any interest already added." },
    { term: "Depreciation", definition: "The fall in the value of an item over time." },
  ],
  concepts: [
    {
      id: "edm9-u1-reverse-percentages",
      title: "Reverse percentages and percentage change",
      skill: "Find an original amount after a percentage change and calculate a percentage change.",
      lesson: {
        sections: [
          {
            heading: "Multipliers",
            body: "A percentage change can be done in one step with a multiplier. To increase by 20%, multiply by $1 + 0.20 = 1.2$. To decrease by 20%, multiply by $1 - 0.20 = 0.8$. The multiplier always represents the new amount as a fraction of the original (100%).",
          },
          {
            heading: "Reverse percentages",
            body: "If you know the amount **after** a change, divide by the multiplier to get back to the original. For example, a price after a 20% increase is 120% of the original, so original = new price $\\div 1.2$. A common error is to take 20% off the new price: this does not work, because the 20% was of the original, not the new price.",
          },
          {
            heading: "Percentage change",
            body: "To find a percentage change use $\\frac{\\text{actual change}}{\\text{original}} \\times 100$. Always divide by the **original** value. A positive result is an increase and a negative one is a decrease.",
          },
        ],
        keyFormulas: [
          { name: "New amount", statement: "$\\text{new} = \\text{original} \\times \\text{multiplier}$" },
          { name: "Reverse percentage", statement: "$\\text{original} = \\text{new} \\div \\text{multiplier}$" },
          { name: "Percentage change", statement: "$\\dfrac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$" },
        ],
        workedExample: {
          problem: "In a sale, all prices are reduced by 25%. A jacket costs £60 in the sale. Work out the original price.",
          solution: "The sale price is 75% of the original, so the multiplier is $0.75$. Original = $60 \\div 0.75 = 80$. The original price was £80.",
        },
      },
      questions: [
        {
          id: "edm9-u1-reverse-percentages-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the multiplier for a 15% decrease?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.15$" },
              { id: "b", text: "$1.15$" },
              { id: "c", text: "$0.85$" },
              { id: "d", text: "$0.115$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Multiplier", statement: "A decrease of $p\\%$ has multiplier $1 - \\frac{p}{100}$." }],
            steps: [
              { reasoning: "After a 15% decrease, 85% of the original remains.", working: "1 - 0.15 = 0.85", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $0.85$",
            commonErrors: ["Choosing $1.15$, which is the multiplier for an increase.", "Choosing $0.15$, which finds only the amount taken off."],
          },
        },
        {
          id: "edm9-u1-reverse-percentages-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The price of a printer, including VAT at 20%, is £144. Work out the price before VAT is added. Give your answer in pounds.",
          response: { type: "numeric", parts: [{ label: "Price before VAT (£)", answer: 120, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Reverse percentage", statement: "original = new $\\div$ multiplier" }],
            steps: [
              { reasoning: "The price with VAT is 120% of the original, so divide by $1.2$.", working: "144 \\div 1.2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 120", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£120",
            commonErrors: ["Finding 20% of £144 and subtracting it, which gives £115.20.", "Dividing by $0.8$."],
            examinerNote: "M1 for 144 ÷ 1.2 oe or 144 ÷ 120 × 100. A1 cao.",
          },
        },
        {
          id: "edm9-u1-reverse-percentages-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The value of a van fell by 8% in one year. At the end of the year its value was £2300. Work out its value at the start of the year. Give your answer in pounds.",
          response: { type: "numeric", parts: [{ label: "Value at the start (£)", answer: 2500, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Reverse percentage", statement: "original = new $\\div$ multiplier" }],
            steps: [
              { reasoning: "A decrease of 8% leaves 92% of the original, so the multiplier is $0.92$.", working: "1 - 0.08 = 0.92", marks: 1, markCode: "B" },
              { reasoning: "Divide the new value by the multiplier.", working: "2300 \\div 0.92", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. Check: $2500 \\times 0.92 = 2300$.", working: "= 2500", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£2500",
            commonErrors: ["Finding 8% of 2300 and adding it, which gives £2484.", "Multiplying by $0.92$ instead of dividing."],
            examinerNote: "Answer of £2484 scores 0 marks.",
          },
        },
        {
          id: "edm9-u1-reverse-percentages-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "In a sale, a laptop is reduced by 15%. The sale price is £714. A shop owner bought the laptop for £600.",
          parts: [
            { label: "a", prompt: "Write down the multiplier for a decrease of 15%.", marks: 1 },
            { label: "b", prompt: "Work out the original price of the laptop, in pounds.", marks: 2 },
            { label: "c", prompt: "Work out the percentage profit the owner makes if the laptop is sold at the original price.", marks: 2 },
            { label: "d", prompt: "After the sale, the price of £714 is increased by 10%. Gina says, 'A 15% decrease followed by a 10% increase is an overall decrease of 5%.' Is she correct? You must show your working.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) multiplier", answer: 0.85, tolerance: 0.001 },
              { label: "(b) original price (£)", answer: 840 },
              { label: "(c) percentage profit (%)", answer: 40 },
              { label: "(d) overall percentage decrease (%)", answer: 6.5, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplier", statement: "A decrease of $p\\%$ has multiplier $1 - \\frac{p}{100}$." },
              { kind: "formula", name: "Percentage profit", statement: "$\\dfrac{\\text{profit}}{\\text{cost price}} \\times 100\\%$" },
              { kind: "principle", name: "Reverse percentage", statement: "original = new $\\div$ multiplier" },
            ],
            steps: [
              { part: "a", reasoning: "85% of the price remains after the sale.", working: "1 - 0.15 = 0.85", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the sale price by the multiplier.", working: "714 \\div 0.85", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. Check: $840 \\times 0.85 = 714$.", working: "= 840", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Profit is selling price minus cost price; divide by the cost price, which is the original amount.", working: "\\frac{840 - 600}{600} \\times 100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\frac{240}{600} \\times 100 = 40", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Apply the 10% increase to £714.", working: "714 \\times 1.1 = 785.4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Find the overall percentage change from the original price of 840.", working: "\\frac{840 - 785.4}{840} \\times 100 = \\frac{54.6}{840} \\times 100 = 6.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The overall decrease is 6.5%, not 5%. The 10% increase is of the smaller sale price, so it does not cancel the 15% decrease of the larger original price.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $0.85$. (b) £840. (c) $40\\%$. (d) No. The final price is £785.40, an overall decrease of $6.5\\%$.",
            commonErrors: ["Taking 15% of £714 and adding it for part (b).", "Dividing by the selling price rather than the cost price in part (c).", "Adding or subtracting percentages with different starting amounts in part (d)."],
            examinerNote: "Part (d) A1 ft only for a correct method from a correct 785.4. Allow the multiplier method $0.85 \\times 1.1 = 0.935$.",
          },
        },
      ],
    },
    {
      id: "edm9-u1-interest-depreciation",
      title: "Simple interest, compound interest and depreciation",
      skill: "Calculate simple and compound interest and the value of an item that loses value each year.",
      lesson: {
        sections: [
          {
            heading: "Simple interest",
            body: "With simple interest the same amount is added every year, because the interest is only worked out on the original sum. Simple interest $= P \\times \\frac{r}{100} \\times n$ for $P$ pounds invested at $r\\%$ per year for $n$ years. For example £400 at 5% for 3 years earns $400 \\times 0.05 \\times 3 = £60$.",
          },
          {
            heading: "Compound interest and depreciation",
            body: "With compound interest the interest each year is added to the account, so next year's interest is calculated on a bigger amount. Use the multiplier once for each year: final amount $= P \\times \\left(1 + \\frac{r}{100}\\right)^n$. Depreciation works the same way with a decrease multiplier: a car losing 15% a year has multiplier $0.85$, so after $n$ years its value is $P \\times 0.85^n$.",
          },
        ],
        keyFormulas: [
          { name: "Simple interest", statement: "$I = P \\times \\frac{r}{100} \\times n$" },
          { name: "Compound growth", statement: "$\\text{final} = P \\times \\left(1 + \\frac{r}{100}\\right)^{n}$" },
          { name: "Depreciation", statement: "$\\text{final} = P \\times \\left(1 - \\frac{r}{100}\\right)^{n}$" },
        ],
        workedExample: {
          problem: "£1000 is invested at 4% compound interest per year. Work out the value after 2 years.",
          solution: "The multiplier is $1.04$. After 2 years: $1000 \\times 1.04^2 = 1000 \\times 1.0816 = 1081.60$. The value is £1081.60.",
        },
      },
      questions: [
        {
          id: "edm9-u1-interest-depreciation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Gareth invests £400 at 5% simple interest per year. How much interest does he earn in 3 years?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£20" },
              { id: "b", text: "£60" },
              { id: "c", text: "£63.05" },
              { id: "d", text: "£460" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Simple interest", statement: "$I = P \\times \\frac{r}{100} \\times n$" }],
            steps: [
              { reasoning: "5% of £400 is £20 each year; multiply by 3 years.", working: "20 \\times 3 = 60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** £60",
            commonErrors: ["Stopping at one year's interest, £20.", "Using compound interest, £63.05.", "Giving the total amount £460 instead of the interest."],
          },
        },
        {
          id: "edm9-u1-interest-depreciation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Amira invests £2000 at 3% compound interest per year. Work out the total amount in the account after 2 years. Give your answer in pounds to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Total amount (£)", answer: 2121.8, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Compound growth", statement: "final $= P \\times \\left(1 + \\frac{r}{100}\\right)^n$" }],
            steps: [
              { reasoning: "A 3% increase has multiplier $1.03$, applied once per year for 2 years.", working: "2000 \\times 1.03^{2}", marks: 1, markCode: "M" },
              { reasoning: "Square the multiplier: $1.03^2 = 1.0609$.", working: "2000 \\times 1.0609", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 2121.80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£2121.80",
            commonErrors: ["Using simple interest, which gives £2120.", "Using $1.03 \\times 2$ instead of $1.03^2$."],
            examinerNote: "Year-by-year method (2060 then 2121.80) is acceptable for full marks.",
          },
        },
        {
          id: "edm9-u1-interest-depreciation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car is bought for £12 000. Its value falls by 15% each year. Work out the value of the car after 3 years. Give your answer in pounds to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Value after 3 years (£)", answer: 7369.5, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Depreciation", statement: "final $= P \\times \\left(1 - \\frac{r}{100}\\right)^n$" }],
            steps: [
              { reasoning: "A 15% decrease has multiplier $0.85$, applied once per year.", working: "12000 \\times 0.85^{3}", marks: 1, markCode: "M" },
              { reasoning: "Cube the multiplier: $0.85^2 = 0.7225$ and $0.7225 \\times 0.85 = 0.614125$.", working: "12000 \\times 0.614125", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 7369.50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£7369.50",
            commonErrors: ["Subtracting 45% (3 × 15%) in one step, which gives £6600.", "Using $1.15^3$ instead of $0.85^3$."],
            examinerNote: "Year-by-year working (10200, 8670, 7369.50) is acceptable.",
          },
        },
        {
          id: "edm9-u1-interest-depreciation-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Hamid has £5000 to invest for several years. Option A pays 4% simple interest per year. Option B pays 3.5% compound interest per year.",
          parts: [
            { label: "a", prompt: "Work out the total amount in Option A after 5 years, in pounds.", marks: 2 },
            { label: "b", prompt: "Work out the total amount in Option B after 5 years. Give your answer in pounds to 2 decimal places.", marks: 3 },
            { label: "c", prompt: "Work out how much more money Hamid has after 5 years with the better option, in pounds to 2 decimal places.", marks: 2 },
            { label: "d", prompt: "Hamid says, 'Option B will always be worse.' Show that he is wrong by working out the total amount in Option B after 10 years and comparing it with Option A after 10 years. Give your answer for Option B to 2 decimal places.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Option A after 5 years (£)", answer: 6000 },
              { label: "(b) Option B after 5 years (£)", answer: 5938.43, tolerance: 0.01 },
              { label: "(c) difference (£)", answer: 61.57, tolerance: 0.01 },
              { label: "(d) Option B after 10 years (£)", answer: 7052.99, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I = P \\times \\frac{r}{100} \\times n$" },
              { kind: "formula", name: "Compound growth", statement: "final $= P \\times \\left(1 + \\frac{r}{100}\\right)^n$" },
            ],
            steps: [
              { part: "a", reasoning: "Interest each year is 4% of £5000 = £200, so over 5 years the interest is the following.", working: "5000 \\times 0.04 \\times 5 = 1000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add the interest to the original £5000.", working: "5000 + 1000 = 6000", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A 3.5% increase has multiplier $1.035$, applied for 5 years.", working: "5000 \\times 1.035^{5}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate $1.035^5 = 1.187686\\ldots$", working: "5000 \\times 1.187686\\ldots", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Round to 2 decimal places.", working: "= 5938.43", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Option A is better after 5 years. Subtract the two totals.", working: "6000 - 5938.43", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "= 61.57", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Option A after 10 years: $5000 + 5000 \\times 0.04 \\times 10 = 7000$. Option B after 10 years uses the multiplier for 10 years.", working: "5000 \\times 1.035^{10}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate Option B.", working: "= 7052.99", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compare: $7052.99 > 7000$, so Option B is worth more after 10 years and Hamid is wrong.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) £6000. (b) £5938.43. (c) £61.57 (Option A is better). (d) Option B = £7052.99, Option A = £7000, so Option B is better after 10 years and Hamid is wrong.",
            commonErrors: ["Using $1.035 \\times 5$ instead of $1.035^5$.", "Rounding the multiplier too early, which changes the final pence.", "Not stating the comparison in part (d)."],
            examinerNote: "Accept answers within 1p of those shown from correct methods. Year-by-year compound working is acceptable.",
          },
        },
      ],
    },
  ],
};
