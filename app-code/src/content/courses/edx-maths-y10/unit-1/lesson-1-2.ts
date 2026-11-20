import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edm10-u1-lesson-1-2",
  code: "1-2",
  title: "Percentages and Ratio",
  goal: "I CAN solve percentage change, reverse percentage and compound interest problems, and solve ratio and proportion problems.",
  standards: ["4MA1 1.7", "4MA1 1.10", "4MA1 1.11", "4MA1 1.12"],
  vocabulary: [
    { term: "Multiplier", definition: "The number you multiply by to apply a percentage change. An increase of $15\\%$ has multiplier $1.15$; a decrease of $15\\%$ has multiplier $0.85$." },
    { term: "Reverse percentage", definition: "A problem where you know the amount after a percentage change and must find the original amount." },
    { term: "Compound interest", definition: "Interest calculated on the original amount plus any interest already added." },
    { term: "Depreciation", definition: "A fall in value over time, often by a fixed percentage each year." },
    { term: "Ratio", definition: "A comparison of quantities showing how many parts of one there are for each part of another, e.g. $2:3$." },
    { term: "Direct proportion", definition: "Two quantities are in direct proportion if their ratio stays constant, so doubling one doubles the other." },
  ],
  concepts: [
    {
      id: "edm10-u1-percentage-change",
      title: "Percentage change, reverse percentages and compound interest",
      skill: "Use multipliers for percentage change, reverse percentages, compound growth and depreciation.",
      lesson: {
        sections: [
          {
            heading: "Multipliers",
            body: "To increase by $p\\%$ multiply by $1+\\frac{p}{100}$. To decrease by $p\\%$ multiply by $1-\\frac{p}{100}$. A $12\\%$ decrease uses the multiplier $0.88$.\n\nPercentage change is $\\frac{\\text{change}}{\\text{original}}\\times100$.",
          },
          {
            heading: "Reverse percentages",
            body: "If the amount after a change is known, **divide** by the multiplier to find the original. A price of £68 after a $15\\%$ reduction is $85\\%$ of the original, so the original is $68\\div0.85$.",
          },
          {
            heading: "Compound change",
            body: "For repeated percentage changes use the multiplier raised to a power: final value $=\\text{original}\\times(\\text{multiplier})^n$. This applies to compound interest (growth) and depreciation (decay).",
          },
        ],
        keyFormulas: [
          { name: "Percentage change", statement: "$\\frac{\\text{new}-\\text{original}}{\\text{original}}\\times100$" },
          { name: "Compound change", statement: "$\\text{final}=\\text{original}\\times\\left(1\\pm\\frac{r}{100}\\right)^n$" },
        ],
        workedExample: {
          problem: "£2000 is invested at $4\\%$ compound interest per year. Work out the value after 3 years.",
          solution: "Multiplier $1.04$. $2000\\times1.04^3=2000\\times1.124864=\\text{£}2249.73$ (to the nearest penny).",
        },
      },
      questions: [
        {
          id: "edm10-u1-percentage-change-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A shop reduces the price of a jacket that costs £250 by $12\\%$. Work out the new price.",
          response: { type: "numeric", parts: [{ label: "New price", answer: 220, unit: "£" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage decrease", statement: "A decrease of $p\\%$ leaves $(100-p)\\%$ of the original." },
            ],
            steps: [
              { reasoning: "Find $12\\%$ of £250 or use the multiplier $0.88$.", working: "0.12\\times250=30\\quad\\text{or}\\quad 0.88\\times250", marks: 1, markCode: "M" },
              { reasoning: "Subtract the reduction (or multiply).", working: "250-30=220", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£220",
            commonErrors: ["Adding the 12% instead of subtracting.", "Giving the reduction (£30) as the new price."],
          },
        },
        {
          id: "edm10-u1-percentage-change-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "In a sale, all prices are reduced by $15\\%$. A coat costs £68 in the sale. Work out the original price of the coat.",
          response: { type: "numeric", parts: [{ label: "Original price", answer: 80, unit: "£" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reverse percentage", statement: "New value $=$ original $\\times$ multiplier, so original $=$ new value $\\div$ multiplier." },
            ],
            steps: [
              { reasoning: "After a $15\\%$ reduction the sale price is $85\\%$ of the original.", working: "85\\%\\ \\text{of original}=68", marks: 1, markCode: "B" },
              { reasoning: "Divide by the multiplier $0.85$.", working: "68\\div0.85", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£80",
            commonErrors: ["Finding $15\\%$ of 68 and adding it, giving £78.20."],
            examinerNote: "£78.20 (68 × 1.15) scores B1 only for the idea of 85%.",
          },
        },
        {
          id: "edm10-u1-percentage-change-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "Anita invests £4000 in an account paying $3\\%$ compound interest per year. Work out the value of her investment after 5 years. Give your answer to the nearest penny.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 4637.1, tolerance: 0.01, unit: "£" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "Final value $=P\\left(1+\\frac{r}{100}\\right)^n$." },
            ],
            steps: [
              { reasoning: "The multiplier for a $3\\%$ increase is $1.03$, applied 5 times.", working: "4000\\times1.03^5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $1.03^5=1.1592740743$.", working: "4000\\times1.1592740743=4637.096\\ldots", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest penny.", working: "\\text{£}4637.10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£4637.10",
            commonErrors: ["Using simple interest: $4000\\times1.15=4600$.", "Using $1.3^5$ instead of $1.03^5$."],
          },
        },
        {
          id: "edm10-u1-percentage-change-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A new car costs £15 000. Its value falls by $18\\%$ each year. Give money answers to the nearest penny.",
          parts: [
            { label: "a", prompt: "Work out the value of the car after 1 year.", marks: 2 },
            { label: "b", prompt: "Work out the value of the car after 3 years.", marks: 3 },
            { label: "c", prompt: "Work out the total percentage loss in value over the 3 years. Give your answer to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "Find the smallest whole number of years after which the car is worth less than £5000.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) value after 1 year (£)", answer: 12300, tolerance: 0.01 },
              { label: "(b) value after 3 years (£)", answer: 8270.52, tolerance: 0.01 },
              { label: "(c) percentage loss (%)", answer: 44.9, tolerance: 0.05 },
              { label: "(d) years", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Depreciation", statement: "Value after $n$ years $=P\\times(1-\\frac{r}{100})^n$." },
              { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}}\\times100$." },
            ],
            steps: [
              { part: "a", reasoning: "The multiplier for an $18\\%$ decrease is $0.82$.", working: "15000\\times0.82", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "12300", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the multiplier three times.", working: "15000\\times0.82^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$0.82^3=0.551368$.", working: "15000\\times0.551368=8270.52", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the value in pounds.", working: "\\text{£}8270.52", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compare the loss with the original value.", working: "\\frac{15000-8270.52}{15000}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$(1-0.551368)\\times100=44.8632$.", working: "44.9\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the first $n$ with $15000\\times0.82^n<5000$, i.e. $0.82^n<0.3333$. Try $n=5$: $0.82^5=0.3707$, value £5561.10, still too high.", working: "15000\\times0.82^5=5561.1\\ldots", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Try $n=6$.", working: "15000\\times0.82^6=4560.1\\ldots<5000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the conclusion.", working: "6\\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) £12 300 (b) £8270.52 (c) $44.9\\%$ (d) 6 years",
            commonErrors: ["Taking $3\\times18=54\\%$ as the total loss.", "Using $0.18$ as the multiplier."],
            examinerNote: "In (c), $54\\%$ is a common wrong answer scoring 0.",
          },
        },
      ],
    },
    {
      id: "edm10-u1-ratio-proportion",
      title: "Ratio and proportion problems",
      skill: "Share quantities in a ratio, combine ratios and solve proportion problems.",
      lesson: {
        sections: [
          {
            heading: "Sharing in a ratio",
            body: "To share in the ratio $a:b:c$, add the parts to get the total number of parts, divide the amount by this total to get the value of one part, then multiply.",
          },
          {
            heading: "Combining ratios",
            body: "If $a:b=3:4$ and $b:c=6:5$, make the common term equal. Multiply the first ratio by 3 and the second by 2 so that $b=12$ in both: $a:b=9:12$ and $b:c=12:10$, so $a:b:c=9:12:10$.",
          },
          {
            heading: "Proportion",
            body: "In direct proportion, find the value of one unit (the unitary method) then scale up. Always check that the answer is sensible: more items should cost more.",
          },
        ],
        keyFormulas: [
          { name: "One part", statement: "$\\text{amount}\\div\\text{total parts}$" },
          { name: "Common term", statement: "Scale each ratio so the shared quantity is the same." },
        ],
        workedExample: {
          problem: "Share £420 in the ratio $2:3:7$.",
          solution: "Total parts $=12$. One part $=420\\div12=35$. Shares: $2\\times35=70$, $3\\times35=105$, $7\\times35=245$. Check: $70+105+245=420$.",
        },
      },
      questions: [
        {
          id: "edm10-u1-ratio-proportion-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Sam and Jo share £60 in the ratio $2:3$. How much does Sam get?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£24" },
              { id: "b", text: "£36" },
              { id: "c", text: "£20" },
              { id: "d", text: "£30" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "Divide by the total number of parts, then multiply by each part." },
            ],
            steps: [
              { reasoning: "There are $2+3=5$ parts, so one part is £12.", working: "60\\div5=12", marks: 1, markCode: "M" },
              { reasoning: "Sam has 2 parts.", working: "2\\times12=24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** £24",
            commonErrors: ["Giving Jo's share of £36.", "Dividing by 2 and 3 separately to get £30 or £20."],
          },
        },
        {
          id: "edm10-u1-ratio-proportion-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "Work out the largest share when £420 is divided in the ratio $2:3:7$.",
          response: { type: "numeric", parts: [{ label: "Largest share", answer: 245, unit: "£" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=$ total $\\div$ number of parts." },
            ],
            steps: [
              { reasoning: "Add the parts of the ratio.", working: "2+3+7=12", marks: 1, markCode: "B" },
              { reasoning: "Find the value of one part.", working: "420\\div12=35", marks: 1, markCode: "M" },
              { reasoning: "The largest share is 7 parts.", working: "7\\times35=245", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£245",
            commonErrors: ["Dividing by 3 (number of shares) instead of 12.", "Finding the smallest share (£70)."],
            examinerNote: "Check that the three shares add to £420: 70 + 105 + 245.",
          },
        },
        {
          id: "edm10-u1-ratio-proportion-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "$a:b=3:4$ and $b:c=6:5$. Work out the ratio $a:b:c$ in whole numbers. Enter the three numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 9 },
              { label: "b", answer: 12 },
              { label: "c", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Equivalent ratios", statement: "Multiplying every part of a ratio by the same number gives an equivalent ratio." },
            ],
            steps: [
              { reasoning: "Make the value of $b$ the same in both ratios (the LCM of 4 and 6 is 12).", working: "a:b=9:12,\\quad b:c=12:10", marks: 1, markCode: "M" },
              { reasoning: "Combine through the common term.", working: "a:b:c=9:12:10", marks: 1, markCode: "A" },
              { reasoning: "Check that the ratio has no common factor.", working: "\\gcd(9,12,10)=1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$9:12:10$",
            commonErrors: ["Writing $3:4:6:5$.", "Multiplying the first ratio by 4 and the second by 6."],
          },
        },
        {
          id: "edm10-u1-ratio-proportion-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A club has 96 members. The ratio of men to women is $5:7$. Each man pays a subscription of £18 per month and each woman pays £24 per month.",
          parts: [
            { label: "a", prompt: "Work out the number of women in the club.", marks: 2 },
            { label: "b", prompt: "12 more women join the club. Write the new ratio of men to women in its simplest form.", marks: 2 },
            { label: "c", prompt: "Before the 12 women join, work out the total subscription paid in one month.", marks: 2 },
            { label: "d", prompt: "Work out the percentage of the total in part (c) that is paid by women. Give your answer to 1 decimal place.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) women", answer: 56 },
              { label: "(b) men part", answer: 10 },
              { label: "(b) women part", answer: 17 },
              { label: "(c) total (£)", answer: 2064 },
              { label: "(d) percentage (%)", answer: 65.1, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=$ total $\\div$ number of parts." },
              { kind: "formula", name: "Percentage of a total", statement: "$\\frac{\\text{part}}{\\text{total}}\\times100$." },
            ],
            steps: [
              { part: "a", reasoning: "$5+7=12$ parts, so one part is $96\\div12=8$ members.", working: "96\\div12=8", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Women are 7 parts.", working: "7\\times8=56", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Men $=5\\times8=40$. New number of women is $56+12=68$.", working: "40:68", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by the HCF, 4.", working: "10:17", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply each group by its subscription and add.", working: "40\\times18+56\\times24=720+1344", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add.", working: "\\text{£}2064", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Women pay £1344 of the total.", working: "\\frac{1344}{2064}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply by 100.", working: "0.65116\\ldots\\times100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Round to 1 d.p.", working: "65.1\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 56 (b) $10:17$ (c) £2064 (d) $65.1\\%$",
            commonErrors: ["Using 7 parts out of 96 in (a).", "Forgetting to simplify the ratio in (b)."],
          },
        },
      ],
    },
  ],
};
