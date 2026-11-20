import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypm3-u1-lesson-1-3",
  code: "1-3",
  title: "Percentages, Finance and Proportion",
  goal: "I CAN calculate successive percentage changes, reverse percentages, and solve direct and inverse proportion problems.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Successive percentage change", definition: "Two or more percentage changes applied one after another; they cannot simply be added." },
    { term: "Reverse percentage", definition: "Finding the original amount when the final amount and the percentage change are known." },
    { term: "Direct proportion", definition: "Two quantities where one is a constant multiple of the other: $y=kx$." },
    { term: "Inverse proportion", definition: "Two quantities where one is a constant divided by the other: $y=\\frac{k}{x}$, so as one increases the other decreases." },
    { term: "Compound measure", definition: "A quantity formed by combining two measures, such as speed $=\\frac{\\text{distance}}{\\text{time}}$ or density $=\\frac{\\text{mass}}{\\text{volume}}$." },
  ],
  concepts: [
    {
      id: "mypm3-u1-percentages",
      title: "Successive and reverse percentages",
      skill: "Calculate successive percentage changes, reverse percentages and percentage of a percentage.",
      lesson: {
        sections: [
          {
            heading: "Successive percentage change",
            body: `A rise of $10\\%$ followed by a fall of $10\\%$ does **not** return to the start. Each change acts on the new amount.

A price of 200 euros rises 10%: $200\\times1.1=220$. It then falls 10%: $220\\times0.9=198$. The final price is 198 euros — a net fall of 2%.`,
          },
          {
            heading: "Reverse percentages",
            body: `If a price after a discount is known, work backwards. A coat costs 84 euros after a 30% discount. The discount was $30\\%$ of the original, so 84 euros is $70\\%$ of the original:

$\\text{original}=\\frac{84}{0.7}=120$ euros.`,
          },
          {
            heading: "Percentage of a percentage",
            body: "Find percentages one at a time, left to right. $15\\%$ of $40\\%$ of 250 $=0.15\\times0.4\\times250=15$. Equivalently, $15\\%$ of $40\\%=6\\%$, and $6\\%$ of 250 $=15$.",
          },
        ],
        keyFormulas: [
          { name: "Successive change", statement: "Multiply by $1+\\frac{r}{100}$ for each change in turn" },
          { name: "Reverse percentage", statement: "$\\text{original}=\\frac{\\text{final}}{1+r/100}$ where $r$ is the percentage change" },
        ],
        workedExample: {
          problem: "A phone costs 600 euros. Its price rises by 12% in January and then falls by 8% in February. Find the price in February.",
          solution: "January: $600\\times1.12=672$. February: $672\\times0.92=618.24$. The price is 618.24 euros.",
        },
      },
      questions: [
        {
          id: "mypm3-u1-percentages-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A price rises by 20% and then falls by 20%. Compared with the original price, the final price is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the same" },
              { id: "b", text: "4% lower" },
              { id: "c", text: "4% higher" },
              { id: "d", text: "2% lower" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "Each change acts on the new amount; they do not cancel." },
            ],
            steps: [
              { reasoning: "Take 100 as the start: $100\\times1.2=120$, then $120\\times0.8=96$. Final is 96, which is 4% lower.", working: "120\\times0.8=96", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 4% lower",
            commonErrors: ["Assuming +20% and −20% cancel to give the original price."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-percentages-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "After a 25% discount a jacket costs 54 euros. Work out the original price.",
          response: { type: "numeric", parts: [{ label: "Original price", answer: 72, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reverse percentage", statement: "The final price is $(100-25)\\%=75\\%$ of the original." },
            ],
            steps: [
              { reasoning: "54 euros is 75% of the original price.", working: "0.75\\times\\text{original}=54", marks: 1, markCode: "M" },
              { reasoning: "Divide by 0.75.", working: "\\text{original}=\\frac{54}{0.75}=72\\text{ euros}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "72 euros",
            commonErrors: ["Adding 25% of 54 to get 67.5 — percentages must be reversed against the original, not the final."],
            examinerNote: "M1 for recognising 75%, A1 for 72.",
          },
        },
        {
          id: "mypm3-u1-percentages-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A population of deer grows by 8% in year 1 and shrinks by 5% in year 2. Work out the overall percentage change over the two years, giving your answer correct to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Overall change", answer: 2.6, tolerance: 0.05, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "Multiply by $1.08$ then by $0.95$; do not add the percentages." },
            ],
            steps: [
              { reasoning: "Apply both changes to a starting value of 1 (or 100).", working: "1\\times1.08\\times0.95=1.026", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage change.", working: "1.026-1=0.026=2.6\\%", marks: 1, markCode: "M" },
              { reasoning: "State the change.", working: "2.6\\%\\text{ increase}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.6\\%$ increase",
            commonErrors: ["Adding $8-5=3\\%$.", "Multiplying $1.08\\times1.05$ instead of $0.95$."],
            examinerNote: "M1 for the multiplier product, M1 for converting to %, A1 for 2.6.",
          },
        },
        {
          id: "mypm3-u1-percentages-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A tablet originally cost P euros. In 2023 the price increased by 15%. In 2024 it increased by a further 10%. The final price was 303.05 euros.",
          parts: [
            { label: "a", prompt: "Write down the multiplier for the 15% increase.", marks: 1 },
            { label: "b", prompt: "Write down the multiplier for the 10% increase.", marks: 1 },
            { label: "c", prompt: "Find the combined multiplier for the two increases.", marks: 2 },
            { label: "d", prompt: "Work backwards to find the original price P.", marks: 2 },
            { label: "e", prompt: "A student says the total increase was 25%. Explain why this is wrong and give the correct overall percentage increase.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage multiplier", statement: "An increase of $r\\%$ multiplies by $1+\\frac{r}{100}$; a decrease multiplies by $1-\\frac{r}{100}$." },
              { kind: "principle", name: "Reverse percentages", statement: "Work backwards by dividing by the combined multiplier." },
            ],
            steps: [
              { part: "a", reasoning: "Increase of 15% multiplies by $1+0.15$.", working: "1.15", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Increase of 10% multiplies by $1+0.10$.", working: "1.10", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Combined multiplier is the product.", working: "1.15\\times1.10=1.265", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the combined multiplier.", working: "1.265", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set up the reverse calculation.", working: "1.265P=303.05", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "P=\\frac{303.05}{1.265}=239.5\\text{ euros}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The second increase acts on the already-increased price, so the percentages cannot be added.", working: "15\\%\\text{ of }100=15,\\ 10\\%\\text{ of }115=11.5", marks: 1, markCode: "R" },
              { part: "e", reasoning: "The combined multiplier 1.265 corresponds to a 26.5% increase.", working: "1.265-1=0.265=26.5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.15$ (b) $1.10$ (c) $1.265$ (d) $P=239.5$ euros (e) not 25%; the correct overall increase is $26.5\\%$",
            commonErrors: ["Adding the multipliers' percentages to get 25%.", "In (d), multiplying 303.05 by 1.265 instead of dividing.", "In (e), computing $15\\%+10\\%=25\\%$ without checking."],
            examinerNote: "B1 each for multipliers, M1 A1 for combined, M1 A1 for P, R1 A1 for part (e).",
          },
        },
        {
          id: "mypm3-u1-percentages-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A price rises by 10% and then falls by 10%. Compared with the original price, the final price is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the same" },
              { id: "b", text: "1% lower" },
              { id: "c", text: "1% higher" },
              { id: "d", text: "10% lower" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "Each change acts on the new amount; equal rise and fall do not cancel." },
            ],
            steps: [
              { reasoning: "Use 100: $100 \\times 1.1 = 110$, then $110 \\times 0.9 = 99$.", working: "99 is 1% below 100", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 1% lower",
            commonErrors: ["Assuming +10% and -10% cancel exactly."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-percentages-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "After a 20% discount a game costs 48 euros. What was the original price?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "38.4 euros" },
              { id: "b", text: "50 euros" },
              { id: "c", text: "60 euros" },
              { id: "d", text: "72 euros" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reverse percentage", statement: "The final price is 80% of the original after a 20% discount." },
            ],
            steps: [
              { reasoning: "48 euros is 80% of the original, so original = 48 / 0.8.", working: "48 \\div 0.8 = 60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 60 euros",
            commonErrors: ["Adding 20% of 48 to get 57.6."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypm3-u1-percentages-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find 10% of 50% of 80.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$40$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage of a percentage", statement: "Find percentages one at a time, or multiply the percentages." },
            ],
            steps: [
              { reasoning: "50% of 80 = 40, then 10% of 40 = 4.", working: "0.5 \\times 80 = 40,\\ 0.1 \\times 40 = 4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: ["Adding the percentages to get 60% of 80."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-percentages-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "An investment rises by 5% in year 1 and by another 5% in year 2. The overall percentage increase is closest to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10%" },
              { id: "b", text: "10.25%" },
              { id: "c", text: "5%" },
              { id: "d", text: "25%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "Multiply by 1.05 twice; do not add the percentages." },
            ],
            steps: [
              { reasoning: "Overall multiplier is $1.05 \\times 1.05 = 1.1025$, a 10.25% increase.", working: "1.1025 - 1 = 0.1025", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 10.25% increase",
            commonErrors: ["Answering 10% by adding the yearly increases."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-percentages-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "After a 15% increase a bill is 92 euros. Find the original bill.",
          response: { type: "numeric", parts: [{ label: "Original bill", answer: 80, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reverse percentage", statement: "The final amount is 115% of the original." },
            ],
            steps: [
              { reasoning: "92 euros represents 115% of the original bill.", working: "1.15 \\times \\text{original} = 92", marks: 1, markCode: "M" },
              { reasoning: "Divide by 1.15.", working: "92 \\div 1.15 = 80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80$ euros",
            commonErrors: ["Subtracting 15% of 92 instead of reversing against the original."],
            examinerNote: "M1 for 115% relation, A1 for 80.",
          },
        },
        {
          id: "mypm3-u1-percentages-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A coat costs 200 euros. Its price rises by 12% in January and then falls by 8% in February. Find the February price.",
          response: { type: "numeric", parts: [{ label: "February price", answer: 206.08, tolerance: 0.01, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "Apply each multiplier in turn." },
            ],
            steps: [
              { reasoning: "January: $200 \\times 1.12 = 224$; February: $224 \\times 0.92$.", working: "224 \\times 0.92 = 206.08", marks: 1, markCode: "M" },
              { reasoning: "State the final price.", working: "206.08 euros", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$206.08$ euros",
            commonErrors: ["Adding 12% and -8% to get a net 4% rise, giving 208."],
            examinerNote: "M1 for the two multipliers, A1 for 206.08.",
          },
        },
        {
          id: "mypm3-u1-percentages-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A deer population increases by 6% in year 1 and decreases by 4% in year 2. Find the overall percentage change, correct to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Overall change", answer: 1.76, tolerance: 0.01, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "Use multipliers 1.06 and 0.96." },
            ],
            steps: [
              { reasoning: "Combined multiplier: $1.06 \\times 0.96 = 1.0176$.", working: "1.0176", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage change.", working: "1.0176 - 1 = 0.0176 = 1.76% increase", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.76% increase",
            commonErrors: ["Adding 6 - 4 = 2%."],
            examinerNote: "M1 for multiplier product, A1 for 1.76.",
          },
        },
        {
          id: "mypm3-u1-percentages-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement about successive percentage changes is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A 20% rise followed by a 20% fall returns to the original value." },
              { id: "b", text: "Each percentage acts on the amount after the previous change." },
              { id: "c", text: "Successive percentages can always be added." },
              { id: "d", text: "The order of the changes never matters." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "Percentage multipliers are applied one after another to the current value." },
            ],
            steps: [
              { reasoning: "The second change is calculated on the new amount, so the percentages cannot simply be added or cancelled.", working: "multipliers apply in turn", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Each percentage acts on the amount after the previous change.",
            commonErrors: ["Assuming equal percentage rise and fall cancel."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-percentages-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the multiplier for a decrease of 18%?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.18$" },
              { id: "b", text: "$0.82$" },
              { id: "c", text: "$0.18$" },
              { id: "d", text: "$-0.18$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage multiplier", statement: "A decrease of r% multiplies by $1 - r/100$." },
            ],
            steps: [
              { reasoning: "A decrease of 18% leaves 82% of the original.", working: "1 - 0.18 = 0.82", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0.82$",
            commonErrors: ["Using 0.18 as the multiplier."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-percentages-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A phone price increases by 10% and then decreases by 5%. The final price is 209 euros. Find the original price.",
          response: { type: "numeric", parts: [{ label: "Original price", answer: 200, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Reverse percentage", statement: "Divide by the combined multiplier." },
            ],
            steps: [
              { reasoning: "Combined multiplier: $1.10 \\times 0.95 = 1.045$.", working: "1.045P = 209", marks: 1, markCode: "M" },
              { reasoning: "Divide to reverse the changes.", working: "P = 209 \\div 1.045 = 200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$ euros",
            commonErrors: ["Reversing only the last change and ignoring the first."],
            examinerNote: "M1 for combined multiplier, A1 for 200.",
          },
        },
        {
          id: "mypm3-u1-percentages-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student says a 20% rise followed by a 20% fall returns a price of 250 euros to 250 euros. Check this claim and find the actual final price.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "Multipliers 1.20 and 0.80 must be applied in turn." },
            ],
            steps: [
              { reasoning: "After the rise: $250 \\times 1.20 = 300$.", working: "300", marks: 1, markCode: "M" },
              { reasoning: "After the fall: $300 \\times 0.80 = 240$.", working: "240", marks: 1, markCode: "M" },
              { reasoning: "The claim is false; the final price is 4% lower.", working: "240 is 4% below 250", marks: 1, markCode: "R" },
            ],
            finalAnswer: "False; final price is $240$ euros, which is 4% lower.",
            commonErrors: ["Assuming the percentages cancel."],
            examinerNote: "M1 for each step, R1 for conclusion.",
          },
        },
        {
          id: "mypm3-u1-percentages-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Savings grow by 4% in year 1 and 6% in year 2. A student claims the total growth is 10%. Explain why this is incorrect and find the correct overall percentage growth for an initial saving of 1000 euros.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Successive percentage change", statement: "The second percentage acts on the increased amount." },
            ],
            steps: [
              { reasoning: "Year 1: $1000 \\times 1.04 = 1040$; year 2: $1040 \\times 1.06$.", working: "1102.4", marks: 1, markCode: "M" },
              { reasoning: "Overall multiplier is $1.04 \\times 1.06 = 1.1024$, so growth is 10.24%, not 10%.", working: "10.24%", marks: 1, markCode: "M" },
              { reasoning: "Explain that the 6% in year 2 is calculated on 1040, not on 1000.", working: "second change on new amount", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Overall growth is 10.24%; final saving is $1102.4$ euros.",
            commonErrors: ["Adding 4% and 6% to get 10%."],
            examinerNote: "M1 for year-by-year or combined multiplier, M1 for 10.24%, R1 for explanation.",
          },
        },
      ],
    },
    {
      id: "mypm3-u1-proportion",
      title: "Direct and inverse proportion",
      skill: "Solve problems involving direct and inverse proportion, compound measures and unit rates.",
      lesson: {
        sections: [
          {
            heading: "Direct proportion",
            body: "Two quantities are in **direct proportion** when their ratio is constant: $y=kx$. Double one and the other doubles. For example, cost is directly proportional to mass bought: $\\text{cost}=k\\times\\text{mass}$.",
          },
          {
            heading: "Inverse proportion",
            body: "Two quantities are in **inverse proportion** when their product is constant: $xy=k$, or $y=\\frac{k}{x}$. Double one and the other halves. For example, for a fixed journey distance, time is inversely proportional to speed.",
          },
          {
            heading: "Compound measures and unit rates",
            body: "A **compound measure** combines two quantities: speed $=\\frac{\\text{distance}}{\\text{time}}$, density $=\\frac{\\text{mass}}{\\text{volume}}$, pressure $=\\frac{\\text{force}}{\\text{area}}$. A **unit rate** tells the amount per one unit of another quantity — best buys compare price per kilogram or per litre. Convert units before comparing.",
          },
        ],
        keyFormulas: [
          { name: "Direct proportion", statement: "$y=kx$ — constant ratio $\\frac{y}{x}$" },
          { name: "Inverse proportion", statement: "$xy=k$ — constant product" },
          { name: "Compound measures", statement: "$\\text{speed}=\\frac{d}{t}$, $\\text{density}=\\frac{m}{V}$, $\\text{pressure}=\\frac{F}{A}$" },
        ],
        workedExample: {
          problem: "A map scale is 1 cm to 5 km. Two towns are 7.5 cm apart on the map. Find the real distance between them.",
          solution: "Real distance is directly proportional to map distance: $7.5\\times5=37.5$ km.",
        },
      },
      questions: [
        {
          id: "mypm3-u1-proportion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cost of apples is directly proportional to their mass. 3 kg costs 6 euros. What is the cost of 5 kg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8 euros" },
              { id: "b", text: "10 euros" },
              { id: "c", text: "11 euros" },
              { id: "d", text: "12 euros" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "$y=kx$ with constant ratio." },
            ],
            steps: [
              { reasoning: "Find the unit price: $6\\div3=2$ euros per kg, then $5\\times2=10$ euros.", working: "k=2,\\quad 5\\times2=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 10 euros",
            commonErrors: ["Adding instead of scaling: $6+5=11$ euros."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-proportion-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A journey of 240 km takes 3 hours at a steady speed. How long would the same journey take at twice the speed?",
          response: { type: "numeric", parts: [{ label: "Time", answer: 1.5, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse proportion", statement: "For fixed distance, time $\\times$ speed is constant." },
            ],
            steps: [
              { reasoning: "Double the speed halves the time.", working: "t\\propto\\frac{1}{v}\\Rightarrow t_{\\text{new}}=\\frac{3}{2}", marks: 1, markCode: "M" },
              { reasoning: "State the time.", working: "1.5\\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.5 hours",
            commonErrors: ["Doubling the time to 6 hours.", "Using direct proportion and halving incorrectly."],
            examinerNote: "M1 for inverse reasoning, A1 for 1.5.",
          },
        },
        {
          id: "mypm3-u1-proportion-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car travels 180 km on 15 litres of fuel. Another car travels 300 km on 25 litres of fuel. Which car is more fuel-efficient? Show your reasoning using unit rates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate comparison", statement: "Compare distance per litre (or litres per km) for each car." },
            ],
            steps: [
              { reasoning: "Compute km per litre for each car.", working: "\\frac{180}{15}=12\\text{ km/litre},\\quad \\frac{300}{25}=12\\text{ km/litre}", marks: 1, markCode: "M" },
              { reasoning: "Compare the rates.", working: "12=12", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", working: "\\text{equal fuel efficiency}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Both cars are equally fuel-efficient at 12 km per litre",
            commonErrors: ["Comparing total distances without normalising (300 > 180 does not mean more efficient).", "Comparing litres used without the distances."],
            examinerNote: "M1 for both unit rates, M1 for comparison, R1 for conclusion.",
          },
        },
        {
          id: "mypm3-u1-proportion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A builder needs to mix concrete. The ratio of cement to sand to gravel is $1:2:3$ by volume. A mix uses 0.5 cubic metres of cement.",
          parts: [
            { label: "a", prompt: "Find the volume of sand needed.", marks: 2 },
            { label: "b", prompt: "Find the volume of gravel needed.", marks: 1 },
            { label: "c", prompt: "Find the total volume of the mix.", marks: 1 },
            { label: "d", prompt: "The builder only has 2 cubic metres of sand. What is the maximum volume of cement that can be used while keeping the ratio?", marks: 2 },
            { label: "e", prompt: "Concrete costs 180 euros per cubic metre of cement and sand is free. Work out the cost of the cement for the mix in part (a)-(c).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "Each part is a fraction of the total: cement $=\\frac{1}{6}$, sand $=\\frac{2}{6}$, gravel $=\\frac{3}{6}$ of the total." },
              { kind: "principle", name: "Unit rate cost", statement: "Cost $=$ rate $\\times$ quantity." },
            ],
            steps: [
              { part: "a", reasoning: "Sand is 2 parts to cement's 1 part, so double the cement volume.", working: "2\\times0.5=1.0\\text{ m}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the volume.", working: "1.0\\text{ cubic metres}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gravel is 3 parts to cement's 1 part.", working: "3\\times0.5=1.5\\text{ m}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total is 6 parts; cement is 1 part = 0.5 m³ so total is 6×0.5.", working: "0.5+1.0+1.5=3.0\\text{ m}^3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Sand is 2 parts; with 2 m³ of sand, each part is 1 m³, so cement (1 part) is 1 m³.", working: "2\\text{ m}^3\\text{ sand}=2\\text{ parts}\\Rightarrow1\\text{ part}=1\\text{ m}^3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Cement is 1 part.", working: "1.0\\text{ m}^3", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Cement used is 0.5 m³ at 180 euros per m³.", working: "0.5\\times180=90", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State the cost; sand is free.", working: "90\\text{ euros}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.0\\text{ m}^3$ sand (b) $1.5\\text{ m}^3$ gravel (c) $3.0\\text{ m}^3$ total (d) $1.0\\text{ m}^3$ cement (e) 90 euros",
            commonErrors: ["Treating the ratio parts as percentages of 100% without finding the total first.", "In (d), forgetting that sand is 2 parts, not 1."],
            examinerNote: "Accept equivalent working; M1 for correct part-to-volume link in each part.",
          },
        },
        {
          id: "mypm3-u1-proportion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The cost of apples is directly proportional to mass. 4 kg costs 10 euros. What is the cost of 7 kg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15 euros" },
              { id: "b", text: "17.5 euros" },
              { id: "c", text: "20 euros" },
              { id: "d", text: "24 euros" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "$y = kx$; the ratio $y/x$ is constant." },
            ],
            steps: [
              { reasoning: "Unit price is $10 \\div 4 = 2.5$ euros per kg, so 7 kg costs $7 \\times 2.5$.", working: "17.5 euros", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 17.5 euros",
            commonErrors: ["Adding masses and costs instead of scaling."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-proportion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A journey of 180 km takes 3 hours at a steady speed. How long would the same journey take at 90 km/h?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.5 hours" },
              { id: "b", text: "2 hours" },
              { id: "c", text: "4 hours" },
              { id: "d", text: "6 hours" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse proportion", statement: "For fixed distance, time × speed is constant." },
            ],
            steps: [
              { reasoning: "Time = distance ÷ speed = 180 ÷ 90.", working: "2 hours", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 2 hours",
            commonErrors: ["Doubling the time because the speed is higher."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-proportion-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best buy? A: 500 g for 1.10 euros; B: 750 g for 1.80 euros; C: 1 kg for 2.50 euros.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A" },
              { id: "b", text: "B" },
              { id: "c", text: "C" },
              { id: "d", text: "They are all equal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate comparison", statement: "Compare price per kilogram, not price per packet." },
            ],
            steps: [
              { reasoning: "Per kg: A = 2.20, B = 2.40, C = 2.50 euros.", working: "A is cheapest per kg", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A",
            commonErrors: ["Choosing the largest packet without comparing unit prices."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u1-proportion-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A material has density 2.5 g/cm³. What is the mass of 8 cm³ of the material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.2$ g" },
              { id: "b", text: "$10.5$ g" },
              { id: "c", text: "$20$ g" },
              { id: "d", text: "$200$ g" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "density = mass ÷ volume, so mass = density × volume." },
            ],
            steps: [
              { reasoning: "Mass = 2.5 × 8.", working: "20 g", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $20$ g",
            commonErrors: ["Dividing density by volume instead of multiplying."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mypm3-u1-proportion-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "6 identical notebooks cost 15 euros. Find the cost of 10 notebooks.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 25, unit: "euros" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "Cost per notebook is constant." },
            ],
            steps: [
              { reasoning: "Find the unit cost: $15 \\div 6 = 2.5$ euros per notebook.", working: "2.5 euros", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 10.", working: "25 euros", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25$ euros",
            commonErrors: ["Adding 4 notebooks worth $10$ to $15$ incorrectly."],
            examinerNote: "M1 for unit cost, A1 for 25.",
          },
        },
        {
          id: "mypm3-u1-proportion-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "8 workers can complete a job in 12 days. How long would 6 workers take to complete the same job, assuming the same rate of work?",
          response: { type: "numeric", parts: [{ label: "Time", answer: 16, unit: "days" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse proportion", statement: "Workers × days is constant for the same job." },
            ],
            steps: [
              { reasoning: "Total work is $8 \\times 12 = 96$ worker-days.", working: "96 worker-days", marks: 1, markCode: "M" },
              { reasoning: "Divide by 6 workers.", working: "96 \\div 6 = 16 days", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$ days",
            commonErrors: ["Using direct proportion and reducing the time."],
            examinerNote: "M1 for constant product, A1 for 16.",
          },
        },
        {
          id: "mypm3-u1-proportion-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels at a steady 60 km/h for 2.5 hours. How far does it travel?",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 150, unit: "km" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "speed = distance ÷ time, so distance = speed × time." },
            ],
            steps: [
              { reasoning: "Distance = speed × time.", working: "60 \\times 2.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "150 km", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$150$ km",
            commonErrors: ["Dividing 60 by 2.5 instead of multiplying."],
            examinerNote: "M1 for formula, A1 for 150.",
          },
        },
        {
          id: "mypm3-u1-proportion-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A prize of 120 euros is shared in the ratio 2:3:5. What is the largest share?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$48$ euros" },
              { id: "b", text: "$60$ euros" },
              { id: "c", text: "$72$ euros" },
              { id: "d", text: "$84$ euros" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "Total parts = 10; each part is worth 120 ÷ 10." },
            ],
            steps: [
              { reasoning: "Largest share has 5 parts: $5 \\times (120 \\div 10) = 60$.", working: "60 euros", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $60$ euros",
            commonErrors: ["Sharing equally or using only one part."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u1-proportion-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "On a map, 1 cm represents 8 km. Two towns are 12.5 cm apart on the map. Find the real distance between them.",
          response: { type: "numeric", parts: [{ label: "Distance", answer: 100, unit: "km" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scale as direct proportion", statement: "Real distance is directly proportional to map distance." },
            ],
            steps: [
              { reasoning: "Multiply map distance by the scale.", working: "12.5 \\times 8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "100 km", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ km",
            commonErrors: ["Dividing by 8 instead of multiplying."],
            examinerNote: "M1 for scale multiplication, A1 for 100.",
          },
        },
        {
          id: "mypm3-u1-proportion-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Car A travels 220 km on 20 litres of fuel. Car B travels 300 km on 25 litres of fuel. Compare their fuel efficiency using km per litre and state which is better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate comparison", statement: "Fuel efficiency is distance per litre." },
            ],
            steps: [
              { reasoning: "Compute km per litre for each car.", working: "A: 220 \\div 20 = 11; B: 300 \\div 25 = 12", marks: 1, markCode: "M" },
              { reasoning: "Compare the rates.", working: "12 > 11", marks: 1, markCode: "M" },
              { reasoning: "Conclude that Car B is more fuel-efficient.", working: "Car B better", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Car B is more fuel-efficient: 12 km/litre compared with 11 km/litre.",
            commonErrors: ["Comparing total distances without unit rates."],
            examinerNote: "M1 for both rates, M1 for comparison, R1 for conclusion.",
          },
        },
        {
          id: "mypm3-u1-proportion-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Concrete is mixed in the ratio cement:sand:gravel = 1:2:3 by volume. A builder has only 4 cubic metres of sand. Find the volumes of cement and gravel needed to keep the ratio, and the total volume of mix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "Sand is 2 parts, so each part is 4 ÷ 2 = 2 cubic metres." },
            ],
            steps: [
              { reasoning: "Find the value of one part from the sand.", working: "4 \\div 2 = 2 m³ per part", marks: 1, markCode: "M" },
              { reasoning: "Cement is 1 part and gravel is 3 parts.", working: "cement = 2 m³, gravel = 6 m³", marks: 1, markCode: "M" },
              { reasoning: "Total volume is 1 + 2 + 3 = 6 parts.", working: "10 m³", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cement $2$ m³, gravel $6$ m³, total mix $10$ m³.",
            commonErrors: ["Treating 4 m³ as the total mix rather than the sand only."],
            examinerNote: "M1 for part value, M1 for volumes, A1 for total.",
          },
        },
        {
          id: "mypm3-u1-proportion-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A tank is filled by taps at a constant total rate. Explain whether the time to fill the tank is directly or inversely proportional to the flow rate, and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse proportion", statement: "For a fixed volume, rate × time is constant." },
            ],
            steps: [
              { reasoning: "The tank volume is fixed, so flow rate × time = constant volume.", working: "rate × time = constant", marks: 1, markCode: "R" },
              { reasoning: "If the rate doubles, the time must halve to deliver the same volume.", working: "double rate → half time", marks: 1, markCode: "M" },
              { reasoning: "Therefore time is inversely proportional to flow rate.", working: "inverse proportion", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Time is inversely proportional to flow rate because the product rate × time is fixed.",
            commonErrors: ["Saying time doubles when the rate doubles."],
            examinerNote: "R1 for fixed-volume reasoning, M1 for inverse behaviour, A1 for conclusion.",
          },
        },
      ],
    },
  ],
};
