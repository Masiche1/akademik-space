import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "edm8-u1-lesson-1-3",
  code: "1-3",
  title: "Ratio and Proportion",
  goal: "I CAN simplify ratios, share amounts in a ratio, solve direct proportion problems and find the best buy.",
  standards: ["Y8 Number"],
  vocabulary: [
    { term: "Ratio", definition: "A way of comparing quantities of the same kind, written with a colon, such as $3:5$." },
    { term: "Simplest form", definition: "A ratio in which the numbers have no common factor other than 1." },
    { term: "Direct proportion", definition: "Two quantities are in direct proportion if one is multiplied by a number and the other is multiplied by the same number." },
    { term: "Unitary method", definition: "Finding the value of one unit first, then multiplying to find the value required." },
    { term: "Best buy", definition: "The option that gives the lowest cost per unit, or the most for your money." },
  ],
  concepts: [
    {
      id: "edm8-u1-ratio-sharing",
      title: "Simplifying ratios and sharing in a ratio",
      skill: "Write ratios in simplest form and divide an amount in a given ratio.",
      lesson: {
        sections: [
          {
            heading: "Simplifying ratios",
            body: "Divide every part of the ratio by the highest common factor (HCF). For $12:18$ the HCF is 6, so the ratio simplifies to $2:3$. Both quantities must be in the same units first.",
          },
          {
            heading: "Sharing in a ratio",
            body: "Add the parts to find the total number of shares. Divide the amount by the total shares to find the value of one share, then multiply by each part. Check that your shares add up to the original amount.",
          },
        ],
        keyFormulas: [
          { name: "Value of one share", statement: "$\\text{amount}\\div\\text{total number of parts}$" },
        ],
        workedExample: {
          problem: "Share £60 in the ratio $2:3$.",
          solution: "Total parts $=2+3=5$. One part $=60\\div5=12$. Shares: $2\\times12=24$ and $3\\times12=36$. Check: $24+36=60$.",
        },
      },
      questions: [
        {
          id: "edm8-u1-ratio-sharing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write the ratio $12:18$ in its simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6:9$" },
              { id: "b", text: "$3:2$" },
              { id: "c", text: "$4:6$" },
              { id: "d", text: "$2:3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Simplifying a ratio", statement: "Divide both parts by their highest common factor." },
            ],
            steps: [
              { reasoning: "The HCF of 12 and 18 is 6, so divide both parts by 6.", working: "12:18=2:3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2:3$",
            commonErrors: ["Dividing by a common factor that is not the highest, e.g. $6:9$ or $4:6$.", "Writing the ratio the wrong way round."],
          },
        },
        {
          id: "edm8-u1-ratio-sharing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Share £60 in the ratio $2:3$. Work out the larger share, in pounds.",
          response: { type: "numeric", parts: [{ label: "Larger share (£)", answer: 36 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "Divide by the total number of parts, then multiply by each part." },
            ],
            steps: [
              { reasoning: "Total parts are $2+3=5$, so one part is worth £12.", working: "60\\div5=12", marks: 1, markCode: "M" },
              { reasoning: "The larger share is 3 parts.", working: "3\\times12=36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£36",
            commonErrors: ["Dividing by 2 or 3 instead of 5.", "Giving the smaller share, £24."],
          },
        },
        {
          id: "edm8-u1-ratio-sharing-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "£420 is shared between Ali, Ben and Cara in the ratio $3:4:5$. Work out how much more Cara receives than Ali, in pounds.",
          response: { type: "numeric", parts: [{ label: "Difference (£)", answer: 70 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "One part $=$ amount $\\div$ total number of parts." },
            ],
            steps: [
              { reasoning: "Total parts $=3+4+5=12$, so one part is £35.", working: "420\\div12=35", marks: 1, markCode: "M" },
              { reasoning: "Cara receives 5 parts and Ali 3 parts, a difference of 2 parts.", working: "5\\times35=175,\\quad 3\\times35=105", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "175-105=70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£70",
            commonErrors: ["Dividing by 3 parts only.", "Giving Cara's share (£175) instead of the difference."],
            examinerNote: "Accept $2\\times35=70$ (oe).",
          },
        },
        {
          id: "edm8-u1-ratio-sharing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Mia makes green paint by mixing blue paint and yellow paint in the ratio $3:5$.",
          parts: [
            { label: "a", prompt: "Mia makes 40 litres of green paint. Work out how many litres of blue paint she uses.", marks: 2 },
            { label: "b", prompt: "Work out how many litres of yellow paint she uses for the 40 litres.", marks: 2 },
            { label: "c", prompt: "Mia has 21 litres of blue paint. Work out how many litres of yellow paint she needs to use all of the blue paint.", marks: 2 },
            { label: "d", prompt: "Work out the total number of litres of green paint she can make in part (c).", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Blue (litres)", answer: 15 },
              { label: "(b) Yellow (litres)", answer: 25 },
              { label: "(c) Yellow needed (litres)", answer: 35 },
              { label: "(d) Total green paint (litres)", answer: 56 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sharing in a ratio", statement: "Divide by the total parts to find one part." },
              { kind: "principle", name: "Equivalent ratios", statement: "Multiplying every part of a ratio by the same number gives an equivalent ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Total parts $=3+5=8$. One part is 5 litres.", working: "40\\div8=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Blue is 3 parts.", working: "3\\times5=15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Yellow is 5 parts.", working: "5\\times5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate. Check: $15+25=40$.", working: "25", marks: 1, markCode: "A" },
              { part: "c", reasoning: "21 litres of blue is 3 parts, so one part is 7 litres.", working: "21\\div3=7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Yellow is 5 parts.", working: "5\\times7=35", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add the blue and yellow amounts (or use 8 parts).", working: "21+35", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "56", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15 litres (b) 25 litres (c) 35 litres (d) 56 litres",
            commonErrors: ["Dividing 40 by 3 or 5.", "Using 21 as one part in (c)."],
            examinerNote: "(d) ft from (c). Accept $8\\times7=56$ (oe).",
          },
        },
      ],
    },
    {
      id: "edm8-u1-proportion-best-buys",
      title: "Direct proportion, unitary method and best buys",
      skill: "Solve direct proportion problems with the unitary method and compare value for money.",
      lesson: {
        sections: [
          {
            heading: "Direct proportion",
            body: "Two quantities are in direct proportion when their ratio stays the same. If 5 pens cost £3, then 10 pens cost £6. The unitary method finds the cost of **one** first: $3\\div5=0.60$, then multiplies by the number needed.",
          },
          {
            heading: "Best buys",
            body: "To compare, find the cost per unit (for example per 100 g) or the amount per pound for each option. The lower cost per unit, or the greater quantity per pound, is the better value. Make sure units are the same before comparing.",
          },
        ],
        keyFormulas: [
          { name: "Unit cost", statement: "$\\text{cost per unit}=\\text{total cost}\\div\\text{quantity}$" },
        ],
        workedExample: {
          problem: "6 apples cost £2.40. Work out the cost of 9 apples.",
          solution: "One apple costs $2.40\\div6=0.40$. Nine apples cost $9\\times0.40=3.60$, which is £3.60.",
        },
      },
      questions: [
        {
          id: "edm8-u1-proportion-best-buys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "5 pens cost £3. How much do 10 pens cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "£5" },
              { id: "b", text: "£6" },
              { id: "c", text: "£30" },
              { id: "d", text: "£8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct proportion", statement: "Doubling the quantity doubles the cost." },
            ],
            steps: [
              { reasoning: "10 pens is twice 5 pens, so the cost doubles.", working: "2\\times3=6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** £6",
            commonErrors: ["Adding 5 to the cost: £3 + £5 = £8."],
          },
        },
        {
          id: "edm8-u1-proportion-best-buys-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "6 apples cost £2.40. Work out the cost of 9 apples, in pounds.",
          response: { type: "numeric", parts: [{ label: "Cost (£)", answer: 3.6, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unitary method", statement: "Find the cost of one item, then multiply." },
            ],
            steps: [
              { reasoning: "Find the cost of one apple.", working: "2.40\\div6=0.40", marks: 1, markCode: "M" },
              { reasoning: "Multiply by 9.", working: "9\\times0.40=3.60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "£3.60",
            commonErrors: ["Adding £0.90 per extra apple.", "Dividing 2.40 by 9."],
          },
        },
        {
          id: "edm8-u1-proportion-best-buys-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 500 g jar of jam costs £1.60. A 750 g jar of the same jam costs £2.28. Work out how many pence cheaper per 100 g the better value jar is.",
          response: { type: "numeric", parts: [{ label: "Difference per 100 g (pence)", answer: 1.6, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Best buy", statement: "Compare the cost per unit using the same unit for each option." },
            ],
            steps: [
              { reasoning: "Cost per 100 g of the 500 g jar: £1.60 is 160p for 5 lots of 100 g.", working: "160\\div5=32\\text{p}", marks: 1, markCode: "M" },
              { reasoning: "Cost per 100 g of the 750 g jar: 228p for 7.5 lots of 100 g.", working: "228\\div7.5=30.4\\text{p}", marks: 1, markCode: "M" },
              { reasoning: "Subtract; the 750 g jar is cheaper per 100 g.", working: "32-30.4=1.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1.6 pence cheaper per 100 g (the 750 g jar is the better value)",
            commonErrors: ["Comparing the total prices instead of the unit prices.", "Dividing 228 by 7 or 75."],
          },
        },
        {
          id: "edm8-u1-proportion-best-buys-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A recipe for 4 people uses 300 g of flour, 120 g of butter and 2 eggs.",
          parts: [
            { label: "a", prompt: "Work out the amount of flour, in grams, needed for 6 people.", marks: 2 },
            { label: "b", prompt: "Work out the amount of butter, in grams, needed for 10 people.", marks: 2 },
            { label: "c", prompt: "Work out the number of eggs needed for 10 people.", marks: 2 },
            { label: "d", prompt: "Flour is sold in two packs: 500 g for £0.45 or 1.5 kg for £1.20. Which pack is the better value? You must show your working.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Flour (g)", answer: 450 },
              { label: "(b) Butter (g)", answer: 300 },
              { label: "(c) Eggs", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unitary method", statement: "Find the amount for one person, then multiply." },
              { kind: "principle", name: "Best buy", statement: "Compare the cost per unit using the same unit." },
            ],
            steps: [
              { part: "a", reasoning: "Flour for one person.", working: "300\\div4=75", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiply by 6.", working: "75\\times6=450", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Butter for one person.", working: "120\\div4=30", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiply by 10.", working: "30\\times10=300", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Eggs for one person.", working: "2\\div4=0.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiply by 10.", working: "0.5\\times10=5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert to a price per kilogram: 500 g for 45p is 90p per kg; 1.5 kg for 120p is 80p per kg.", working: "0.45\\times2=0.90,\\quad 1.20\\div1.5=0.80", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The 1.5 kg pack is cheaper per kilogram, so it is the better value.", working: "\\text{1.5 kg pack}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 450 g (b) 300 g (c) 5 eggs (d) The 1.5 kg pack (80p per kg compared with 90p per kg)",
            commonErrors: ["Adding a fixed amount for each extra person instead of using the unitary method.", "Comparing the prices £0.45 and £1.20 without allowing for the different masses."],
            examinerNote: "(d) accept any correct comparison using a common unit, such as the mass per pound (oe).",
          },
        },
      ],
    },
  ],
};
