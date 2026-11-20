import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "pypm-u1-lesson-1-3",
  code: "1-3",
  title: "Money, Decimals and Number Patterns",
  goal: "I CAN count and make amounts of money, recognise simple decimals, and continue number patterns and find missing numbers.",
  standards: [
    "PYP Mathematics: Number",
    "PYP Mathematics: Algebra",
    "PYP transdisciplinary theme: How the World Works",
    "PYP transdisciplinary theme: Who We Are",
  ],
  vocabulary: [
    { term: "Coin", definition: "A small round piece of metal money, like a $1$ or $5$ coin." },
    { term: "Note", definition: "A piece of paper money, like a $10$ or $20$ note." },
    { term: "Decimal", definition: "A number with a point separating whole numbers from parts of a whole, like $2.5$ meaning $2$ and a half." },
    { term: "Number pattern", definition: "A sequence of numbers that follows a rule, like $2, 4, 6, 8, \\ldots$ (counting in $2$s)." },
    { term: "Rule", definition: "What a pattern does each time — add $2$, multiply by $3$, or alternate." },
    { term: "Missing number", definition: "A number left out of a pattern or calculation that you must find." },
  ],
  concepts: [
    {
      id: "pypm-u1l3-c1-money-decimals",
      title: "Money and decimals",
      skill: "Count coins and notes to make amounts and understand simple decimals like $2.5$.",
      lesson: {
        sections: [
          {
            heading: "Making amounts of money",
            body: "Money comes in coins and notes of different values. To make an amount like $37$, use the fewest notes and coins you can: $20 + 10 + 5 + 2 = 37$. When buying something, count **up** from the price to the money you give — 'The pencil costs $3$ and I have $5$, so $2$ change.' Change = money given − price.",
          },
          {
            heading: "Simple decimals",
            body: "A **decimal point** separates whole numbers from parts of a whole. $2.5$ means $2$ and a half ($2$ and $5$ tenths). Money uses decimals: $2.50$ means two dollars and fifty cents. On a ruler, $3.5$ cm is halfway between $3$ cm and $4$ cm — half a centimetre.",
          },
        ],
        keyFormulas: [
          { name: "Change rule", statement: "Change = money given − price" },
          { name: "Decimal meaning", statement: "$2.5 = 2 + \\frac{1}{2}$; $0.5 = \\frac{1}{2}$" },
        ],
        workedExample: {
          problem: "A book costs $4.50$ and you pay with a $10$ note. How much change?",
          solution: "Count up from $4.50$ to $10$: $0.50$ makes $5$, then $5$ more makes $10$. Change is $5.50$. Or $10 - 4.50 = 5.50$.",
        },
      },
      questions: [
        {
          id: "pypm-q-u1l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set of coins makes exactly $20$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four $5$ coins" },
              { id: "b", text: "Two $10$ coins" },
              { id: "c", text: "Ten $2$ coins" },
              { id: "d", text: "All of the above" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Money values", statement: "Different combinations of coins can make the same amount." },
            ],
            steps: [
              { reasoning: "$4 \\times 5 = 20$, $2 \\times 10 = 20$, $10 \\times 2 = 20$ — all make $20$.", working: "5\\times4=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** All of the above",
            commonErrors: ["Thinking only one combination is correct — many combinations make the same amount."],
          },
        },
        {
          id: "pypm-q-u1l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pencil costs $3$ and you pay with a $5$ note. How much change do you get?",
          response: { type: "numeric", parts: [{ label: "Change", answer: 2, unit: "$" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Change rule", statement: "Change = money given − price." },
            ],
            steps: [
              { reasoning: "Subtract the price from the money given: $5 - 3$.", working: "5-3", marks: 1, markCode: "M" },
              { reasoning: "Change is $2$.", working: "5-3=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Adding instead of subtracting: $5+3=8$."],
          },
        },
        {
          id: "pypm-q-u1l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Lena buys a drink for $2.50$ and a sandwich for $3.50$. How much does she spend in total?",
          response: { type: "numeric", parts: [{ label: "Total", answer: 6, unit: "$" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Adding decimals", statement: "Add whole parts and decimal parts: $2.50 + 3.50$." },
            ],
            steps: [
              { reasoning: "Add the whole numbers: $2 + 3 = 5$.", working: "2+3=5", marks: 1, markCode: "M" },
              { reasoning: "Add the decimals: $0.50 + 0.50 = 1.00$, so total whole part becomes $6$.", working: "0.50+0.50=1.00", marks: 1, markCode: "M" },
              { reasoning: "Total spent is $6.00$, or $6$.", working: "2.50+3.50=6.00", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Getting $5.00$ — forgetting the two halves make another whole dollar."],
          },
        },
        {
          id: "pypm-q-u1l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Sam has these coins: two $2$ coins, three $1$ coins, and four $0.50$ coins.",
          parts: [
            { label: "a", prompt: "How much money does Sam have in total?", marks: 2 },
            { label: "b", prompt: "A toy costs $7$. How much change does Sam get if he pays with all his money?", marks: 2 },
            { label: "c", prompt: "Which single coin could replace the four $0.50$ coins? Give its value.", marks: 1 },
            { label: "d", prompt: "Explain why $2.50$ and $2.5$ mean the same amount.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total money Sam has", answer: 9, unit: "$" },
              { label: "(b) Change from $7 toy", answer: 2, unit: "$" },
              { label: "(c) Value of coin replacing four $0.50$ coins", answer: 2, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Money calculation", statement: "Total = sum of all coins; change = total − price." },
              { kind: "definition", name: "Decimal equivalence", statement: "Trailing zeros after a decimal do not change the value: $2.50 = 2.5$." },
            ],
            steps: [
              { part: "a", reasoning: "Two $2$ coins $= 4$; three $1$ coins $= 3$; four $0.50$ coins $= 2.00$.", working: "4+3+2=9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Total money is $9.00$.", working: "9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Change = total − price: $9 - 7$.", working: "9-7=2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sam gets $2$ change.", working: "2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A $2$ coin equals four $0.50$ coins since $4 \\times 0.50 = 2.00$.", working: "4\\times0.5=2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2.50$ and $2.5$ both mean $2$ and a half.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The trailing zero only shows the cents place; it does not change the value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $9$ (b) $2$ change (c) $2$ coin (d) trailing zero does not change value.",
            commonErrors: ["In (a), forgetting the four $0.50$ coins add $2.00$."],
          },
        },
        {
          id: "pypm-q-u1l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set of coins makes exactly $15$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Three $5$ coins" },
              { id: "b", text: "One $10$ coin and one $5$ coin" },
              { id: "c", text: "A $10$ coin and five $1$ coins" },
              { id: "d", text: "All of the above" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Money values", statement: "Different combinations of coins can make the same amount." },
            ],
            steps: [
              { reasoning: "$3 \\times 5 = 15$, $10+5=15$, $10+5 \\times 1=15$ — all make $15$.", working: "3\\times5=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** All of the above",
            commonErrors: ["Thinking only one combination works — many combinations make the same amount."],
          },
        },
        {
          id: "pypm-q-u1l3c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sticker costs $6$ and you pay with a $10$ coin. How much change do you get?",
          response: { type: "numeric", parts: [{ label: "Change", answer: 4, unit: "$" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Change rule", statement: "Change = money given − price." },
            ],
            steps: [
              { reasoning: "$10 - 6 = 4$.", working: "10-6=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Answering $16$ — adding instead of subtracting."],
          },
        },
        {
          id: "pypm-q-u1l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the decimal number $2.5$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$ and $5$ tenths — two and a half" },
              { id: "b", text: "$25$" },
              { id: "c", text: "$2$ multiplied by $5$" },
              { id: "d", text: "$2.05$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decimal", statement: "The decimal point separates whole numbers from parts of a whole." },
            ],
            steps: [
              { reasoning: "$2.5 = 2 + \\frac{1}{2}$ — two and a half.", working: "2.5=2+0.5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2$ and a half",
            commonErrors: ["Choosing $25$ — the decimal point is not a times sign."],
          },
        },
        {
          id: "pypm-q-u1l3c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does $0.5$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Five" },
              { id: "b", text: "One half" },
              { id: "c", text: "Two and a half" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decimal", statement: "$0.5$ is five tenths, which equals $\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "$0.5 = \\frac{5}{10} = \\frac{1}{2}$ — one half.", working: "0.5=\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** One half",
            commonErrors: ["Choosing 'five' — $0.5$ is less than $1$."],
          },
        },
        {
          id: "pypm-q-u1l3c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which amount of money is bigger: $3.5$ or $3.25$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3.25$" },
              { id: "b", text: "$3.5$" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing decimals", statement: "Compare whole parts first, then decimal parts: $0.5 > 0.25$." },
            ],
            steps: [
              { reasoning: "Both have $3$ whole; compare decimals: $0.5$ vs $0.25$ — $0.5$ is bigger.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3.5 > 3.25$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $3.5$",
            commonErrors: ["Comparing $5$ and $25$ as whole numbers — $0.5$ means five tenths, bigger than twenty-five hundredths."],
          },
        },
        {
          id: "pypm-q-u1l3c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pencil costs $4.25$ and a rubber costs $1.75$. What is the total cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5.00$" },
              { id: "b", text: "$6.00$" },
              { id: "c", text: "$5.90$" },
              { id: "d", text: "$6.25$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adding decimals", statement: "Add whole parts and decimal parts: $4.25 + 1.75$." },
            ],
            steps: [
              { reasoning: "Whole parts: $4+1=5$; decimals: $0.25+0.75=1.00$, making $6.00$.", working: "4.25+1.75=6.00", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6.00$ (or $6$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $6.00$",
            commonErrors: ["Choosing $5.90$ — adding digits without carrying the whole dollar from $0.25+0.75$."],
          },
        },
        {
          id: "pypm-q-u1l3c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A book costs $2.75$ and you pay with a $5$ note. How much change do you get?",
          response: { type: "numeric", parts: [{ label: "Change", answer: 2.25, unit: "$" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Change rule", statement: "Change = money given − price: $5 - 2.75$." },
            ],
            steps: [
              { reasoning: "Count up from $2.75$ to $5$: $0.25$ makes $3$, then $2$ more makes $5$ — change $2.25$.", working: "5-2.75=2.25", marks: 1, markCode: "M" },
              { reasoning: "Change is $2.25$.", working: "2.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.25$",
            commonErrors: ["Answering $2.35$ or $3.25$ — subtract carefully digit by digit."],
          },
        },
        {
          id: "pypm-q-u1l3c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why $2.50$ and $2.5$ mean the same amount of money.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decimal equivalence", statement: "Trailing zeros after a decimal point do not change the value." },
            ],
            steps: [
              { reasoning: "Both mean $2$ whole dollars and $50$ cents — two and a half.", marks: 1, markCode: "R" },
              { reasoning: "The $0$ in $2.50$ is in the hundredths place: $50$ hundredths $= 5$ tenths.", marks: 1, markCode: "M" },
              { reasoning: "So $2.50 = 2.5$; the extra zero only shows the cents place.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.50 = 2.5$ — trailing zero does not change the value.",
            commonErrors: ["Saying $2.50$ is bigger — trailing zeros after a decimal do not add value."],
          },
        },
        {
          id: "pypm-q-u1l3c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A juice costs $3.5$. Is this the same as $3.05$ or $3.50$? Explain using what the decimal parts mean.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Decimal place value", statement: "$3.5$ has $5$ tenths; $3.50$ has $50$ hundredths — equal; $3.05$ has $5$ hundredths — smaller." },
            ],
            steps: [
              { reasoning: "$3.5 = 3 + 0.5$ — five tenths.", marks: 1, markCode: "M" },
              { reasoning: "$3.50 = 3 + 0.50$ — fifty hundredths $=$ five tenths, so it matches.", marks: 1, markCode: "M" },
              { reasoning: "$3.05$ is only five hundredths — much less than half a dollar, so it does not match.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.5 = 3.50$, not $3.05$.",
            commonErrors: ["Reading $3.5$ as 'three dollars five cents' — it is three dollars fifty cents."],
          },
        },
        {
          id: "pypm-q-u1l3c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which is the fewest coins/notes that makes exactly $50$ cents?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ten $5$-cent coins" },
              { id: "b", text: "Five $10$-cent coins" },
              { id: "c", text: "Two $25$-cent coins" },
              { id: "d", text: "One $50$-cent coin" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Making amounts", statement: "Use the largest coins possible to make an amount with fewest coins." },
            ],
            steps: [
              { reasoning: "A single $50$-cent coin makes $50$ cents with just $1$ coin — fewer than any combination.", marks: 1, markCode: "M" },
              { reasoning: "All other options need at least two coins.", marks: 1, markCode: "M" },
              { reasoning: "Answer: one $50$-cent coin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** One $50$-cent coin",
            commonErrors: ["Choosing (b) — five coins is more than one coin."],
          },
        },
        {
          id: "pypm-q-u1l3c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $6.50 - 2.25$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 4.25, unit: "$" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtracting decimals", statement: "Subtract whole parts and decimal parts: $6.50 - 2.25$." },
            ],
            steps: [
              { reasoning: "Whole parts: $6-2=4$; decimals: $0.50-0.25=0.25$.", working: "0.50-0.25=0.25", marks: 1, markCode: "M" },
              { reasoning: "Combine: $4.25$.", working: "6.50-2.25=4.25", marks: 1, markCode: "M" },
              { reasoning: "Answer: $4.25$.", working: "4.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.25$",
            commonErrors: ["Answering $4.35$ — subtracting $0.50-0.25$ incorrectly as $0.35$."],
          },
        },
        {
          id: "pypm-q-u1l3c1-16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A toy costs $3.75$. You pay with a $5$ note. What is the change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.25$" },
              { id: "b", text: "$2.25$" },
              { id: "c", text: "$1.35$" },
              { id: "d", text: "$8.75$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Change rule", statement: "Change = money given − price: $5 - 3.75$." },
            ],
            steps: [
              { reasoning: "Count up: $0.25$ makes $4$, then $1$ more makes $5$ — total change $1.25$.", working: "5-3.75=1.25", marks: 1, markCode: "M" },
              { reasoning: "Or subtract: $5.00 - 3.75 = 1.25$.", working: "1.25", marks: 1, markCode: "M" },
              { reasoning: "Answer: $1.25$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1.25$",
            commonErrors: ["Choosing $8.75$ — adding price and payment instead of subtracting."],
          },
        },
      ],
    },
    {
      id: "pypm-u1l3-c2-patterns-missing",
      title: "Number patterns and missing numbers",
      skill: "Continue number patterns, find the rule, and find missing numbers in sequences and calculations.",
      lesson: {
        sections: [
          {
            heading: "Finding the rule",
            body: "A **number pattern** follows a **rule**. Look at how each number changes: $3, 6, 9, 12, \\ldots$ adds $3$ each time (the $3$ times table). $80, 70, 60, \\ldots$ subtracts $10$. Some patterns alternate: $1, 2, 4, 1, 2, 4, \\ldots$ repeats. To find the rule, subtract or divide neighbouring numbers and look for the pattern.",
          },
          {
            heading: "Missing numbers",
            body: "A **missing number** is one left out. In $5, 10, \\_, 20$ the rule is 'add $5$', so the missing number is $15$. In calculations, missing numbers work both ways: $\\square + 7 = 12$ means $12 - 7 = 5$; $3 \\times \\square = 18$ means $18 \\div 3 = 6$. Use the **inverse** operation to find them.",
          },
        ],
        keyFormulas: [
          { name: "Pattern rule", statement: "Find the rule by checking what is added, subtracted or multiplied each step" },
          { name: "Missing number rule", statement: "Use the inverse operation: $a + \\square = b \\Rightarrow \\square = b - a$" },
        ],
        workedExample: {
          problem: "Find the missing number: $4, 8, \\_, 16, 20$.",
          solution: "The rule is 'add $4$'. After $8$ comes $12$, then $16$. Missing number is $12$.",
        },
      },
      questions: [
        {
          id: "pypm-q-u1l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the rule in the pattern $5, 10, 15, 20, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add $5$" },
              { id: "b", text: "Add $10$" },
              { id: "c", text: "Multiply by $5$" },
              { id: "d", text: "Subtract $5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern rules", statement: "Each step adds the same amount — check the difference between neighbours." },
            ],
            steps: [
              { reasoning: "$10-5=5$, $15-10=5$ — the rule is add $5$.", working: "5,10,15,20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Add $5$",
            commonErrors: ["Choosing 'multiply by $5$' — the numbers are not multiplied, just increased by $5$."],
          },
        },
        {
          id: "pypm-q-u1l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing number: $7, 14, \\_, 28, 35$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 21 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern continuation", statement: "The rule is 'add $7$' (the $7$ times table)." },
            ],
            steps: [
              { reasoning: "$14+7=21$; check $21+7=28$ — matches.", working: "14+7=21", marks: 1, markCode: "M" },
              { reasoning: "Missing number is $21$.", working: "21", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21$",
            commonErrors: ["Giving $18$ or $24$ — the rule adds $7$ each time."],
          },
        },
        {
          id: "pypm-q-u1l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the missing number: $\\square + 9 = 20$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $\\square + 9 = 20$, then $\\square = 20 - 9$." },
            ],
            steps: [
              { reasoning: "Use the inverse: subtract $9$ from $20$.", working: "20-9", marks: 1, markCode: "M" },
              { reasoning: "$20-9=11$.", working: "20-9=11", marks: 1, markCode: "M" },
              { reasoning: "Check: $11+9=20$ — correct.", working: "11+9=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Computing $20+9=29$ — the missing number is found by subtracting."],
          },
        },
        {
          id: "pypm-q-u1l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Look at these patterns: $2, 4, 8, 16, \\ldots$ and $50, 45, 40, \\ldots$",
          parts: [
            { label: "a", prompt: "What is the rule for the first pattern?", marks: 1 },
            { label: "b", prompt: "What is the next number in the first pattern?", marks: 1 },
            { label: "c", prompt: "What is the missing number: $50, 45, \\_, 35$?", marks: 2 },
            { label: "d", prompt: "Find the missing number: $3 \\times \\square = 24$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Next number in first pattern", answer: 32 },
              { label: "(c) Missing number in 50,45,_,35", answer: 40 },
              { label: "(d) Missing number in $3 \\times \\square = 24$", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern rules", statement: "First pattern doubles each time; second subtracts $5$." },
              { kind: "principle", name: "Inverse operations", statement: "$3 \\times \\square = 24$ means $\\square = 24 \\div 3$." },
            ],
            steps: [
              { part: "a", reasoning: "Each number doubles: $2 \\to 4 \\to 8 \\to 16$ (multiply by $2$).", working: "\\times2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Next: $16 \\times 2 = 32$.", working: "16\\times2=32", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rule is 'subtract $5$': $50, 45, 40, 35$.", working: "45-5=40", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Missing number is $40$.", working: "40", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use inverse: $24 \\div 3$.", working: "24\\div3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$24 \\div 3 = 8$.", working: "24\\div3=8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Check: $3 \\times 8 = 24$ — correct, $\\square = 8$.", working: "3\\times8=24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Multiply by $2$ (b) $32$ (c) $40$ (d) $8$",
            commonErrors: ["In (d), computing $3 \\times 24$ instead of dividing."],
          },
        },
        {
          id: "pypm-q-u1l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the rule in the pattern $2, 4, 6, 8, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add $2$" },
              { id: "b", text: "Add $4$" },
              { id: "c", text: "Multiply by $2$" },
              { id: "d", text: "Subtract $2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern rules", statement: "Each step adds the same amount — check differences between neighbours." },
            ],
            steps: [
              { reasoning: "$4-2=2$, $6-4=2$ — the rule is add $2$.", working: "2,4,6,8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Add $2$",
            commonErrors: ["Choosing 'multiply by $2$' — the numbers increase by $2$, not double."],
          },
        },
        {
          id: "pypm-q-u1l3c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the missing number: $10, 20, 30, \\_, 50$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern continuation", statement: "The rule is 'add $10$' (counting in tens)." },
            ],
            steps: [
              { reasoning: "$30 + 10 = 40$; check $40 + 10 = 50$ — matches.", working: "30+10=40", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$40$",
            commonErrors: ["Answering $35$ — the rule adds $10$, not $5$."],
          },
        },
        {
          id: "pypm-q-u1l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes next in the pattern $5, 10, 20, 40, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$45$" },
              { id: "b", text: "$60$" },
              { id: "c", text: "$80$" },
              { id: "d", text: "$50$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplicative patterns", statement: "Each number doubles: $5 \\to 10 \\to 20 \\to 40$." },
            ],
            steps: [
              { reasoning: "Each term is double the previous: $40 \\times 2 = 80$.", working: "40\\times2=80", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $80$",
            commonErrors: ["Choosing $45$ — adding $5$ each time is wrong; the rule is doubling."],
          },
        },
        {
          id: "pypm-q-u1l3c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the next number in $100, 90, 80, \\ldots$?",
          response: { type: "numeric", parts: [{ label: "Next number", answer: 70 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shrinking patterns", statement: "The rule is 'subtract $10$' each time." },
            ],
            steps: [
              { reasoning: "$80 - 10 = 70$.", working: "80-10=70", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$70$",
            commonErrors: ["Answering $60$ — that skips a term."],
          },
        },
        {
          id: "pypm-q-u1l3c2-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the missing number: $\\square + 5 = 12$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $\\square + 5 = 12$ then $\\square = 12 - 5$." },
            ],
            steps: [
              { reasoning: "Use the inverse: subtract $5$ from $12$.", working: "12-5", marks: 1, markCode: "M" },
              { reasoning: "$12 - 5 = 7$; check $7 + 5 = 12$ — correct.", working: "12-5=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Computing $12 + 5 = 17$ — wrong direction."],
          },
        },
        {
          id: "pypm-q-u1l3c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the rule in the pattern $3, 6, 9, 12, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add $6$" },
              { id: "b", text: "Add $3$ — it is the $3$ times table" },
              { id: "c", text: "Multiply by $3$" },
              { id: "d", text: "Subtract $3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern rules", statement: "Differences between neighbours reveal additive rules." },
            ],
            steps: [
              { reasoning: "$6-3=3$, $9-6=3$, $12-9=3$ — adds $3$ each time (the $3$ times table).", working: "3,6,9,12", marks: 1, markCode: "M" },
              { reasoning: "Answer: add $3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Add $3$",
            commonErrors: ["Choosing 'multiply by $3$' — $3 \\times 2 = 6$ is coincidence here; the rule is adding $3$."],
          },
        },
        {
          id: "pypm-q-u1l3c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing number: $4, 8, \\_, 16, 20$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern continuation", statement: "The rule is 'add $4$'." },
            ],
            steps: [
              { reasoning: "$8 + 4 = 12$; check $12 + 4 = 16$ — matches.", working: "8+4=12", marks: 1, markCode: "M" },
              { reasoning: "Missing number is $12$.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Answering $14$ — the pattern adds $4$ each step, not $6$."],
          },
        },
        {
          id: "pypm-q-u1l3c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would find the rule in the pattern $6, 12, 18, 24, \\ldots$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Finding pattern rules", statement: "Subtract neighbouring numbers to find the step." },
            ],
            steps: [
              { reasoning: "Subtract neighbours: $12-6=6$, $18-12=6$, $24-18=6$.", working: "12-6=6", marks: 1, markCode: "M" },
              { reasoning: "Every difference is $6$, so the rule is 'add $6$' (the $6$ times table).", marks: 1, markCode: "M" },
              { reasoning: "The next number would be $24+6=30$.", working: "24+6=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rule: add $6$; next number $30$.",
            commonErrors: ["Guessing 'multiply' without checking differences first."],
          },
        },
        {
          id: "pypm-q-u1l3c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to find the missing number in $\\square \\times 4 = 28$, including how to check your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Multiplication is undone by division: $\\square = 28 \\div 4$." },
            ],
            steps: [
              { reasoning: "Use the inverse of $\\times 4$: divide $28 \\div 4$.", working: "28\\div4", marks: 1, markCode: "M" },
              { reasoning: "$28 \\div 4 = 7$, so $\\square = 7$.", working: "28\\div4=7", marks: 1, markCode: "M" },
              { reasoning: "Check: $7 \\times 4 = 28$ — correct.", working: "7\\times4=28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\square = 7$",
            commonErrors: ["Computing $28 \\times 4$ — must divide by $4$."],
          },
        },
        {
          id: "pypm-q-u1l3c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of these patterns follows the rule 'subtract $5$ each time'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20, 25, 30, 35$" },
              { id: "b", text: "$20, 15, 10, 5$" },
              { id: "c", text: "$5, 10, 15, 20$" },
              { id: "d", text: "$20, 22, 24, 26$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shrinking patterns", statement: "Subtracting a constant gives a decreasing sequence." },
            ],
            steps: [
              { reasoning: "Check each difference: (b) gives $20-15=5$, $15-10=5$, $10-5=5$.", working: "20-15=5", marks: 1, markCode: "M" },
              { reasoning: "Only (b) subtracts $5$ every step.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $20, 15, 10, 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $20, 15, 10, 5$",
            commonErrors: ["Choosing (a) — that adds $5$, it does not subtract."],
          },
        },
        {
          id: "pypm-q-u1l3c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the missing number: $3 \\times \\square = 21$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $3 \\times \\square = 21$ then $\\square = 21 \\div 3$." },
            ],
            steps: [
              { reasoning: "Use the inverse: $21 \\div 3$.", working: "21\\div3", marks: 1, markCode: "M" },
              { reasoning: "$21 \\div 3 = 7$ (from the $3$ times table).", working: "21\\div3=7", marks: 1, markCode: "M" },
              { reasoning: "Check: $3 \\times 7 = 21$ — correct, $\\square = 7$.", working: "3\\times7=21", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Computing $3 \\times 21$ instead of dividing."],
          },
        },
        {
          id: "pypm-q-u1l3c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Look at two patterns: $4, 8, 12, 16, \\ldots$ and $30, 25, 20, \\_, 10$. For each, state the rule and find the next or missing number. Explain how you checked.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern rules", statement: "Subtract neighbours to find additive rules; check by continuing the pattern." },
            ],
            steps: [
              { reasoning: "First pattern: differences are $4$ each time — rule 'add $4$'; next is $16+4=20$.", working: "16+4=20", marks: 1, markCode: "M" },
              { reasoning: "Second pattern: rule 'subtract $5$'; missing number is $20-5=15$, then $15-5=10$ matches.", working: "20-5=15", marks: 1, markCode: "M" },
              { reasoning: "Both rules were confirmed by checking the next term fits.", marks: 1, markCode: "R" },
              { reasoning: "Answers: next $20$; missing $15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "First: add $4$, next $20$. Second: subtract $5$, missing $15$.",
            commonErrors: ["For the second pattern, adding $5$ instead of subtracting."],
          },
        },
      ],
    },
  ],
};
