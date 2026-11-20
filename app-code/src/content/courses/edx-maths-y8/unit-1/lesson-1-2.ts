import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edm8-u1-lesson-1-2",
  code: "1-2",
  title: "Fractions, Decimals and Percentages",
  goal: "I CAN calculate with fractions and mixed numbers, and find percentages of amounts and percentage changes.",
  standards: ["Y8 Number"],
  vocabulary: [
    { term: "Mixed number", definition: "A number made of a whole number and a proper fraction, such as $2\\frac{1}{3}$." },
    { term: "Improper fraction", definition: "A fraction whose numerator is greater than or equal to its denominator, such as $\\frac{7}{3}$." },
    { term: "Reciprocal", definition: "The fraction turned upside down. The reciprocal of $\\frac{2}{5}$ is $\\frac{5}{2}$." },
    { term: "Common denominator", definition: "A shared multiple of the denominators of two or more fractions." },
    { term: "Percentage", definition: "A number of parts per hundred, written with the symbol $\\%$." },
    { term: "Multiplier", definition: "The number you multiply by to apply a percentage change, such as $1.2$ for a $20\\%$ increase." },
  ],
  concepts: [
    {
      id: "edm8-u1-fraction-operations",
      title: "Operations with fractions and mixed numbers",
      skill: "Add, subtract, multiply and divide fractions and mixed numbers.",
      lesson: {
        sections: [
          {
            heading: "Adding and subtracting",
            body: "Fractions must have the same denominator before you add or subtract. Find a common denominator, convert each fraction, then add or subtract the numerators: $\\frac{1}{2}+\\frac{1}{3}=\\frac{3}{6}+\\frac{2}{6}=\\frac{5}{6}$. For mixed numbers, convert to improper fractions first.",
          },
          {
            heading: "Multiplying and dividing",
            body: "To multiply, multiply the numerators and multiply the denominators, cancelling where possible. To divide, multiply by the reciprocal of the second fraction: $\\frac{2}{3}\\div\\frac{4}{5}=\\frac{2}{3}\\times\\frac{5}{4}=\\frac{10}{12}=\\frac{5}{6}$. Always convert mixed numbers to improper fractions first.",
          },
        ],
        keyFormulas: [
          { name: "Multiplying fractions", statement: "$\\frac{a}{b}\\times\\frac{c}{d}=\\frac{ac}{bd}$" },
          { name: "Dividing fractions", statement: "$\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\times\\frac{d}{c}$" },
        ],
        workedExample: {
          problem: "Work out $1\\frac{1}{2}\\times2\\frac{2}{3}$.",
          solution: "Convert: $\\frac{3}{2}\\times\\frac{8}{3}$. Cancel the 3s and divide 8 and 2 by 2: $\\frac{1}{1}\\times\\frac{4}{1}=4$.",
        },
      },
      questions: [
        {
          id: "edm8-u1-fraction-operations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $\\frac{1}{2}+\\frac{1}{3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{5}$" },
              { id: "b", text: "$\\frac{1}{6}$" },
              { id: "c", text: "$\\frac{5}{6}$" },
              { id: "d", text: "$\\frac{2}{6}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "Fractions can only be added when they have the same denominator." },
            ],
            steps: [
              { reasoning: "Write both fractions with denominator 6, then add the numerators.", working: "\\frac{3}{6}+\\frac{2}{6}=\\frac{5}{6}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\frac{5}{6}$",
            commonErrors: ["Adding numerators and denominators to get $\\frac{2}{5}$."],
          },
        },
        {
          id: "edm8-u1-fraction-operations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out $3\\frac{1}{2}-1\\frac{3}{4}$. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 1.75 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mixed numbers", statement: "Convert mixed numbers to improper fractions, or subtract the whole numbers and fractions separately." },
            ],
            steps: [
              { reasoning: "Convert to fractions with a common denominator of 4.", working: "\\frac{14}{4}-\\frac{7}{4}", marks: 1, markCode: "M" },
              { reasoning: "Subtract the numerators.", working: "\\frac{7}{4}=1\\frac{3}{4}", marks: 1, markCode: "A" },
              { reasoning: "Convert to a decimal.", working: "1.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.75$ (that is $1\\frac{3}{4}$)",
            commonErrors: ["Subtracting the fractions the wrong way round: $\\frac{3}{4}-\\frac{1}{2}$ without a borrow."],
            examinerNote: "M1 for converting both to a common denominator. A1 for $\\frac{7}{4}$ (oe). A1 cao.",
          },
        },
        {
          id: "edm8-u1-fraction-operations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $2\\frac{2}{5}\\div1\\frac{1}{5}$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Dividing fractions", statement: "Dividing by a fraction is the same as multiplying by its reciprocal." },
            ],
            steps: [
              { reasoning: "Convert both mixed numbers to improper fractions.", working: "\\frac{12}{5}\\div\\frac{6}{5}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the reciprocal of the second fraction.", working: "\\frac{12}{5}\\times\\frac{5}{6}", marks: 1, markCode: "M" },
              { reasoning: "Cancel and evaluate.", working: "\\frac{60}{30}=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Dividing the whole numbers and fractions separately.", "Inverting the first fraction instead of the second."],
          },
        },
        {
          id: "edm8-u1-fraction-operations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Sam receives £240 each month. He spends $\\frac{1}{3}$ of it on rent and $\\frac{3}{8}$ of it on food.",
          parts: [
            { label: "a", prompt: "Work out the fraction of the £240 that Sam spends on rent and food together. Give your answer as a fraction in its simplest form.", marks: 2 },
            { label: "b", prompt: "Write down the fraction of the £240 that Sam has left.", marks: 1 },
            { label: "c", prompt: "Work out how much money, in pounds, Sam has left.", marks: 2 },
            { label: "d", prompt: "Sam spends $\\frac{2}{5}$ of the money he has left on a present. Work out how much he spends on the present, in pounds.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) Money left (£)", answer: 70 },
              { label: "(d) Cost of present (£)", answer: 28 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "Convert to a common denominator before adding." },
              { kind: "principle", name: "Fraction of an amount", statement: "To find $\\frac{a}{b}$ of an amount, divide by $b$ and multiply by $a$." },
            ],
            steps: [
              { part: "a", reasoning: "Use a common denominator of 24.", working: "\\frac{1}{3}+\\frac{3}{8}=\\frac{8}{24}+\\frac{9}{24}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add. The fraction is already in its simplest form.", working: "\\frac{17}{24}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The whole is $\\frac{24}{24}$, so subtract the spent fraction.", working: "1-\\frac{17}{24}=\\frac{7}{24}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Find $\\frac{7}{24}$ of 240: divide by 24 first.", working: "240\\div24=10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by 7.", working: "10\\times7=70", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find $\\frac{2}{5}$ of £70: divide by 5.", working: "70\\div5=14", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply by 2.", working: "14\\times2=28", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the answer with units.", working: "\\text{£}28", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $\\frac{17}{24}$ (b) $\\frac{7}{24}$ (c) £70 (d) £28",
            commonErrors: ["Adding the denominators to get $\\frac{4}{11}$.", "Taking $\\frac{2}{5}$ of £240 instead of the amount left."],
            examinerNote: "Part (c) ft from an incorrect fraction in (b). Part (d) ft from (c).",
          },
        },
      ],
    },
    {
      id: "edm8-u1-percentage-change",
      title: "Percentages of amounts, increase and decrease",
      skill: "Find a percentage of an amount and calculate percentage increases, decreases and changes.",
      lesson: {
        sections: [
          {
            heading: "Percentage of an amount",
            body: "Find $10\\%$ by dividing by 10 and $1\\%$ by dividing by 100, then build up. For example, $15\\%$ of 80 is $10\\%+5\\%=8+4=12$. Alternatively write the percentage as a decimal and multiply: $0.15\\times80=12$.",
          },
          {
            heading: "Increase and decrease",
            body: "To increase by $p\\%$, multiply by $1+\\frac{p}{100}$. To decrease by $p\\%$, multiply by $1-\\frac{p}{100}$. A $20\\%$ increase uses the multiplier $1.2$; a $12\\%$ decrease uses $0.88$.",
          },
          {
            heading: "Percentage change",
            body: "$$\\text{percentage change}=\\frac{\\text{actual change}}{\\text{original value}}\\times100\\%$$ Always divide by the **original** value.",
          },
        ],
        keyFormulas: [
          { name: "Percentage change", statement: "$\\dfrac{\\text{change}}{\\text{original}}\\times100\\%$" },
          { name: "Multipliers", statement: "Increase by $p\\%$: $1+\\frac{p}{100}$. Decrease by $p\\%$: $1-\\frac{p}{100}$." },
        ],
        workedExample: {
          problem: "A phone costs £200. The price increases by $15\\%$. Work out the new price.",
          solution: "Multiplier $=1.15$. New price $=200\\times1.15=230$. The new price is £230.",
        },
      },
      questions: [
        {
          id: "edm8-u1-percentage-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $15\\%$ of 80?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage of an amount", statement: "$10\\%$ is one tenth and $5\\%$ is half of that." },
            ],
            steps: [
              { reasoning: "$10\\%$ of 80 is 8 and $5\\%$ is 4, so add them.", working: "8+4=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $12$",
            commonErrors: ["Finding only $10\\%$ and choosing 8."],
          },
        },
        {
          id: "edm8-u1-percentage-change-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bike costs £250. In a sale the price is reduced by $12\\%$. Work out the sale price, in pounds.",
          response: { type: "numeric", parts: [{ label: "Sale price (£)", answer: 220 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "Multiply by $1-\\frac{p}{100}$." },
            ],
            steps: [
              { reasoning: "Find the reduction, $12\\%$ of 250 ($10\\%=25$, $2\\%=5$, so $12\\%=30$).", working: "250\\times0.12=30", marks: 1, markCode: "M" },
              { reasoning: "Subtract from the original price.", working: "250-30=220", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£220",
            commonErrors: ["Giving the reduction, £30, as the sale price.", "Adding the 12% instead of subtracting."],
            examinerNote: "Accept $250\\times0.88$ (oe) for M1.",
          },
        },
        {
          id: "edm8-u1-percentage-change-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The price of a ticket rises from £40 to £46. Work out the percentage increase.",
          response: { type: "numeric", parts: [{ label: "Percentage increase (%)", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}}\\times100\\%$" },
            ],
            steps: [
              { reasoning: "Find the actual increase.", working: "46-40=6", marks: 1, markCode: "B" },
              { reasoning: "Divide by the original price and multiply by 100.", working: "\\frac{6}{40}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15\\%$",
            commonErrors: ["Dividing by the new price: $\\frac{6}{46}$.", "Giving the change, 6, as the percentage."],
          },
        },
        {
          id: "edm8-u1-percentage-change-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A jacket costs £80. In a sale the price is reduced by $25\\%$. After the sale the sale price is increased by $10\\%$.",
          parts: [
            { label: "a", prompt: "Work out the sale price of the jacket, in pounds.", marks: 2 },
            { label: "b", prompt: "Work out the price after the $10\\%$ increase, in pounds.", marks: 2 },
            { label: "c", prompt: "Work out the overall percentage decrease from the original price of £80 to the final price.", marks: 3 },
            { label: "d", prompt: "Explain why the overall change is not a $15\\%$ decrease.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Sale price (£)", answer: 60 },
              { label: "(b) Final price (£)", answer: 66 },
              { label: "(c) Overall decrease (%)", answer: 17.5, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Multipliers", statement: "Decrease by $25\\%$: $\\times0.75$. Increase by $10\\%$: $\\times1.1$." },
              { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}}\\times100\\%$" },
              { kind: "principle", name: "Different bases", statement: "Successive percentage changes apply to different amounts, so they cannot simply be added." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply by 0.75 for a $25\\%$ decrease.", working: "80\\times0.75", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "60", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply the sale price by 1.1.", working: "60\\times1.1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "66", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the overall decrease in pounds.", working: "80-66=14", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide by the original price (£80) and multiply by 100.", working: "\\frac{14}{80}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "17.5\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The $10\\%$ increase is applied to the lower sale price (£60), not to £80, so it is worth less than the $25\\%$ already taken off; percentages of different amounts cannot be combined by adding or subtracting.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) £60 (b) £66 (c) $17.5\\%$ (d) The $10\\%$ is a percentage of a different (smaller) amount, so $-25\\%+10\\%$ does not give the overall change.",
            commonErrors: ["Calculating $25\\%-10\\%=15\\%$.", "Dividing the change by £66 in (c)."],
            examinerNote: "(c) ft from (b). (d) Accept any correct reference to different original values (oe).",
          },
        },
      ],
    },
  ],
};
