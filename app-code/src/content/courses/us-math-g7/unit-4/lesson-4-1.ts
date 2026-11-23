import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "m7-u4-lesson-4-1",
  code: "4-1",
  title: "Capstone: Multi-Step Proportional Reasoning",
  goal: "I CAN solve multi-step problems involving ratios, rates, percents, and proportional relationships in real contexts.",
  standards: ["7.RP.A.3", "7.RP.A.2", "7.NS.A.2"],
  vocabulary: [
    { term: "Proportion", definition: "An equation stating that two ratios are equal." },
    { term: "Unit rate", definition: "The rate per one unit of the second quantity." },
    { term: "Scale factor", definition: "The constant ratio between corresponding measurements in similar figures or maps." },
    { term: "Percent change", definition: "The amount of increase or decrease as a percent of the original." },
    { term: "Markup", definition: "The amount added to a cost price to get the selling price." },
    { term: "Discount", definition: "A reduction from the original price, usually a percent." },
    { term: "Simple interest", definition: "Interest calculated only on the original principal: $I = Prt$." },
    { term: "Constant of proportionality", definition: "The fixed ratio $k$ in $y = kx$." },
  ],
  concepts: [
    {
      id: "m7-u4-proportional",
      title: "Chaining proportional relationships",
      skill: "Solve problems that combine rates, ratios, and percents across multiple steps.",
      lesson: {
        sections: [
          {
            heading: "Multi-step problems",
            body: "Real problems often chain proportions: a recipe scales ingredients (ratio), then a discount applies to the total (percent), then tax is added (percent). Work step by step, keeping track of what each number represents.",
          },
          {
            heading: "Percent of a percent",
            body: "Successive percent changes multiply, they don't add. A $20\\%$ discount followed by $10\\%$ tax: $0.8 \\times 1.1 = 0.88$ — net $12\\%$ reduction, not $10\\%$.",
          },
          {
            heading: "Checking reasonableness",
            body: "Estimate first: is the answer bigger or smaller than the start? Does it match the units? A $50\\%$ increase should roughly double the value. If not, recheck the steps.",
          },
        ],
        keyFormulas: [
          { name: "Percent change", statement: "$\\frac{\\text{new}-\\text{old}}{\\text{old}} \\times 100$" },
          { name: "Successive changes", statement: "Multiply the factors: $1.2 \\times 0.9 = 1.08$" },
        ],
        workedExample: {
          problem: "A $\\$40$ shirt is discounted $25\\%$, then $8\\%$ tax is added. Find the final price.",
          solution: "Discount: $40 \\times 0.75 = 30$. Tax: $30 \\times 1.08 = 32.40$. Final price $\\$32.40$.",
        },
      },
      questions: [
        {
          id: "m7-u4-proportional-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A price increases by $20\\%$, then decreases by $20\\%$. What is the net change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "$4\\%$ decrease" },
              { id: "c", text: "$4\\%$ increase" },
              { id: "d", text: "$40\\%$ decrease" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Successive percents", statement: "$1.2 \\times 0.8 = 0.96$ — net $4\\%$ decrease." }],
            steps: [{ reasoning: "$1.2 \\times 0.8 = 0.96$, a $4\\%$ decrease.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 4% decrease",
            commonErrors: ["Assuming +20% and -20% cancel — they don't."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m7-u4-proportional-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels $180$ miles on $6$ gallons of gas. How many miles per gallon?",
          response: { type: "numeric", parts: [{ label: "Miles per gallon", answer: 30 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Unit rate", statement: "Miles per gallon $= $ miles $\\div$ gallons." }],
            steps: [
              { reasoning: "$180 \\div 6 = 30$ miles per gallon.", working: "180/6", marks: 1, markCode: "M" },
              { reasoning: "Answer: $30$ mpg.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ miles per gallon",
            commonErrors: ["Dividing gallons by miles."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m7-u4-proportional-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A map scale is $1$ inch $= 25$ miles. Two cities are $3.5$ inches apart on the map. The actual distance is $\\$x$. If gas costs $\\$3.50$/gallon and the car gets $25$ mpg, estimate the fuel cost for the round trip.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scale", statement: "Map distance $\\times$ scale = actual distance." },
              { kind: "formula", name: "Fuel cost", statement: "$(\\text{distance}/\\text{mpg}) \\times \\text{price}$" },
            ],
            steps: [
              { reasoning: "Distance one way: $3.5 \\times 25 = 87.5$ miles.", marks: 1, markCode: "M" },
              { reasoning: "Round trip: $87.5 \\times 2 = 175$ miles.", marks: 1, markCode: "M" },
              { reasoning: "Gallons needed: $175/25 = 7$ gallons.", marks: 1, markCode: "M" },
              { reasoning: "Cost: $7 \\times 3.50 = \\text{\\$}24.50$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$24.50$",
            commonErrors: ["Forgetting round trip doubles distance."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "m7-u4-proportional-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A store sells a jacket for $\\$80$ after a $20\\%$ discount. Sales tax is $7\\%$.",
          parts: [
            { label: "a", prompt: "Find the original price before discount.", marks: 3 },
            { label: "b", prompt: "Find the discount amount in dollars.", marks: 2 },
            { label: "c", prompt: "Calculate the final price with tax.", marks: 2 },
            { label: "d", prompt: "If the customer has a $\\$20$ gift card, how much cash is needed?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reverse percent", statement: "Discounted price $= 0.8 \\times$ original." },
              { kind: "principle", name: "Successive changes", statement: "Discount then tax multiply." },
            ],
            steps: [
              { reasoning: "$80 = 0.8 \\times$ original, so original $= 80/0.8 = \\text{\\$}100$.", working: "80/0.8", marks: 2, markCode: "M", part: "a" },
              { reasoning: "Original price: $\\$100$.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Discount amount: $100 - 80 = \\text{\\$}20$.", working: "100-80", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer: $\\$20$ discount.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Tax: $80 \\times 0.07 = 5.60$; final $= 80 + 5.60 = \\text{\\$}85.60$.", working: "80*1.07", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Cash needed: $85.60 - 20 = \\text{\\$}65.60$.", marks: 2, markCode: "M", part: "d" },
              { reasoning: "Answer: $\\$65.60$.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) $100 (b) $20 discount (c) $85.60 (d) $65.60",
            commonErrors: ["Adding discount to price instead of finding original; applying tax to original."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "m7-u4-numbers",
      title: "Rational numbers in real contexts",
      skill: "Apply integer and rational number operations to practical problems including temperature, elevation, and money.",
      lesson: {
        sections: [
          {
            heading: "Signed quantities",
            body: "Temperature below zero, debt, elevation below sea level — all use negative numbers. Subtracting a negative adds: $-5 - (-3) = -5 + 3 = -2$. Dividing two negatives gives positive: $-12 \\div -3 = 4$.",
          },
          {
            heading: "Money and decimals",
            body: "Money uses decimals to the hundredths. $\\$3.50 \\times 4 = \\text{\\$}14.00$. Rounding to cents: $\\$1.005$ rounds to $\\$1.01$ or $\\$1.00$ depending on convention — know your rounding rule.",
          },
          {
            heading: "Fractions in context",
            body: "Recipes, measurements, and ratios often use fractions. $\\frac{3}{4}$ cup $+ \\frac{1}{2}$ cup $= \\frac{5}{4} = 1\\frac{1}{4}$ cups. Convert to common denominators before adding.",
          },
        ],
        keyFormulas: [
          { name: "Subtracting negatives", statement: "$a - (-b) = a + b$" },
          { name: "Sign rules", statement: "Neg $\\times$ Neg = Pos; Neg $\\times$ Pos = Neg" },
        ],
        workedExample: {
          problem: "Temperature drops from $-3^\\circ$C to $-11^\\circ$C. What is the change?",
          solution: "$-11 - (-3) = -11 + 3 = -8^\\circ$C — an 8-degree drop.",
        },
      },
      questions: [
        {
          id: "m7-u4-numbers-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $-8 - (-3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-11$" },
              { id: "b", text: "$-5$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$11$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Subtracting negatives", statement: "$-8 - (-3) = -8 + 3 = -5$." }],
            steps: [{ reasoning: "$-8 - (-3) = -8 + 3 = -5$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** -5",
            commonErrors: ["Subtracting instead of adding the negative."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m7-u4-numbers-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A submarine at $-120$ m dives $45$ m deeper, then rises $80$ m. What is its final depth?",
          response: { type: "numeric", parts: [{ label: "Final depth (m)", answer: -85 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Signed numbers", statement: "Depth below sea level is negative." }],
            steps: [
              { reasoning: "$-120 - 45 = -165$ m after diving.", marks: 1, markCode: "M" },
              { reasoning: "$-165 + 80 = -85$ m final depth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-85$ m (85 m below sea level)",
            commonErrors: ["Treating depth as positive."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m7-u4-numbers-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You have $\\$50$ in your account. You spend $\\$75$ on groceries, then receive $\\$120$ as a gift, then pay a $\\$15$ bill. What is your final balance?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Signed money", statement: "Spending is negative, income positive." }],
            steps: [
              { reasoning: "$50 - 75 = -25$ (overdrawn).", marks: 1, markCode: "M" },
              { reasoning: "$-25 + 120 = 95$.", marks: 1, markCode: "M" },
              { reasoning: "$95 - 15 = 80$.", marks: 1, markCode: "M" },
              { reasoning: "Final balance: $\\$80$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$80$",
            commonErrors: ["Stopping after negative balance; wrong operation order."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "m7-u4-numbers-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A weather balloon records temperatures at different altitudes: surface $12^\\circ$C, 500 m $8^\\circ$C, 1000 m $2^\\circ$C, 1500 m $-4^\\circ$C.",
          parts: [
            { label: "a", prompt: "Calculate the temperature change from surface to 1000 m.", marks: 2 },
            { label: "b", prompt: "Calculate the change from 1000 m to 1500 m.", marks: 2 },
            { label: "c", prompt: "Is the rate of cooling constant? Justify.", marks: 3 },
            { label: "d", prompt: "Predict temperature at 2000 m if the trend continues.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Temperature change", statement: "$\\Delta T = T_{final} - T_{initial}$" },
              { kind: "principle", name: "Rate", statement: "Change per unit distance." },
            ],
            steps: [
              { reasoning: "$2 - 12 = -10^\\circ$C change.", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$-4 - 2 = -6^\\circ$C change.", marks: 2, markCode: "M", part: "b" },
              { reasoning: "From 0-500m: $-4^\\circ$C per 500m; 500-1000m: $-6^\\circ$C per 500m; 1000-1500m: $-6^\\circ$C per 500m.", marks: 1, markCode: "B", part: "c" },
              { reasoning: "Not constant — first interval differs from later ones.", marks: 1, markCode: "R", part: "c" },
              { reasoning: "Last two intervals show consistent $-6^\\circ$C per 500m.", marks: 1, markCode: "A", part: "c" },
              { reasoning: "Extrapolate: $-4 - 6 = -10^\\circ$C at 2000 m.", marks: 2, markCode: "M", part: "d" },
              { reasoning: "Answer: $-10^\\circ$C.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) -10°C (b) -6°C (c) not constant, later intervals -6°C/500m (d) -10°C.",
            commonErrors: ["Using absolute values; not checking interval consistency."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "m7-u4-applications",
      title: "Expressions and equations in context",
      skill: "Write and solve expressions and equations representing real situations.",
      lesson: {
        sections: [
          {
            heading: "Modeling with variables",
            body: "Let $x$ represent an unknown quantity. 'Three more than twice a number' = $2x + 3$. 'The cost of $x$ tickets at $\\$15$ each plus $\\$5$ parking' = $15x + 5$. Define variables clearly.",
          },
          {
            heading: "Solving contextual equations",
            body: "Write the equation from the situation, solve for $x$, then check: does the answer make sense? 'I have $\\$100$, spend $\\$25$ on food and $\\$15$ on gas, how much is left?' → $100 - 25 - 15 = 60$ or $25 + 15 + x = 100$ → $x = 60$.",
          },
          {
            heading: "Multi-step reasoning",
            body: "Some problems need several equations: 'A rectangle's length is twice its width; perimeter is $36$ m. Find dimensions.' → $2l + 2w = 36$, $l = 2w$ → solve system by substitution.",
          },
        ],
        keyFormulas: [
          { name: "Translate to algebra", statement: "Words → variables → equation" },
          { name: "Check solution", statement: "Does it satisfy original situation?" },
        ],
        workedExample: {
          problem: "Three friends split a $\\$87$ bill equally. How much does each pay?",
          solution: "$3x = 87$ → $x = 29$. Each pays $\\$29$.",
        },
      },
      questions: [
        {
          id: "m7-u4-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which expression represents 'five less than three times a number'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x - 5$" },
              { id: "b", text: "$5 - 3x$" },
              { id: "c", text: "$3(x - 5)$" },
              { id: "d", text: "$5x - 3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Translate", statement: "'Three times a number' = $3x$; 'five less than' subtracts 5." }],
            steps: [{ reasoning: "$3x - 5$ is correct order.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $3x - 5$",
            commonErrors: ["Reversing order: $5 - 3x$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "m7-u4-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A taxi charges $\\$3$ base plus $\\$2$ per mile. The fare is $\\$15$. How many miles?",
          response: { type: "numeric", parts: [{ label: "Miles", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Model", statement: "$3 + 2m = 15$." }],
            steps: [
              { reasoning: "$2m = 15 - 3 = 12$.", marks: 1, markCode: "M" },
              { reasoning: "$m = 6$ miles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ miles",
            commonErrors: ["Dividing 15 by 2 instead of subtracting base first."],
            examinerNote: "M1, A1.",
          },
        },
        {
          id: "m7-u4-applications-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangle's length is $4$ cm more than its width. The perimeter is $36$ cm. Find the width and length.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Perimeter", statement: "$2l + 2w = 36$" },
              { kind: "principle", name: "Substitution", statement: "$l = w + 4$." },
            ],
            steps: [
              { reasoning: "Let $w$ = width; $l = w + 4$.", marks: 1, markCode: "M" },
              { reasoning: "$2(w+4) + 2w = 36$ → $4w + 8 = 36$ → $4w = 28$ → $w = 7$.", marks: 1, markCode: "M" },
              { reasoning: "$l = 7 + 4 = 11$ cm.", marks: 1, markCode: "M" },
              { reasoning: "Check: $2(11) + 2(7) = 22 + 14 = 36$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Width $7$ cm, length $11$ cm",
            commonErrors: ["Forgetting to double both dimensions in perimeter."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "m7-u4-applications-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A phone plan costs $\\$30$/month plus $\\$0.10$/text. Another plan costs $\\$45$/month with unlimited texts. You send $x$ texts per month.",
          parts: [
            { label: "a", prompt: "Write expressions for each plan's monthly cost.", marks: 2 },
            { label: "b", prompt: "For how many texts are the plans equal?", marks: 3 },
            { label: "c", prompt: "Which plan is cheaper for 200 texts?", marks: 2 },
            { label: "d", prompt: "For what usage range is Plan 1 cheaper?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Linear model", statement: "Cost = fixed + rate $\\times$ usage." },
              { kind: "principle", name: "Break-even", statement: "Set expressions equal and solve." },
            ],
            steps: [
              { reasoning: "Plan 1: $30 + 0.10x$; Plan 2: $45$.", marks: 2, markCode: "M", part: "a" },
              { reasoning: "$30 + 0.10x = 45$ → $0.10x = 15$ → $x = 150$ texts.", working: "0.1x=15", marks: 2, markCode: "M", part: "b" },
              { reasoning: "Plans equal at $150$ texts.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "Plan 1 at 200: $30 + 20 = 50$; Plan 2: $45$. Plan 2 cheaper.", marks: 2, markCode: "M", part: "c" },
              { reasoning: "Plan 1 is cheaper when $30 + 0.10x < 45$ → $x < 150$.", marks: 2, markCode: "R", part: "d" },
              { reasoning: "So for fewer than $150$ texts per month.", marks: 1, markCode: "A", part: "d" },
            ],
            finalAnswer: "(a) $30+0.1x$ vs $45$ (b) 150 texts (c) Plan 2 (d) x < 150.",
            commonErrors: ["Not checking which plan is cheaper in each range."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
