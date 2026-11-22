import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "pypm-u3-lesson-3-3",
  code: "3-3",
  title: "Patterns, Rules and Missing Numbers",
  goal: "I CAN find number pattern rules, continue patterns, and find missing numbers in sequences and simple equations.",
  standards: [
    "PYP Mathematics: Algebra",
    "PYP transdisciplinary theme: How We Express Ourselves",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Pattern", definition: "A sequence that follows a rule, like $4, 8, 12, 16, \\ldots$" },
    { term: "Rule", definition: "What changes each step — add $4$, multiply by $2$, or alternate." },
    { term: "Sequence", definition: "An ordered list of numbers following a pattern." },
    { term: "Term", definition: "One number in a sequence." },
    { term: "Missing number", definition: "A number left out that you must find using the rule." },
    { term: "Function machine", definition: "A rule that changes an input number into an output, like 'add $5$'." },
  ],
  concepts: [
    {
      id: "pypm-u3l3-c1-pattern-rules",
      title: "Finding pattern rules",
      skill: "Identify the rule of a number pattern and continue it.",
      lesson: {
        sections: [
          {
            heading: "Types of rules",
            body: "Patterns follow rules. **Counting patterns**: add the same number each time — $3, 6, 9, 12$ adds $3$ (the $3$ times table). **Growing patterns**: multiply each time — $2, 4, 8, 16$ doubles. **Shrinking patterns**: subtract — $50, 45, 40$ subtracts $5$. **Repeating patterns**: the same block repeats — $1, 2, 3, 1, 2, 3$. To find the rule, compare neighbouring numbers: subtract them, divide them, or look for a repeating block.",
          },
          {
            heading: "Using the rule",
            body: "Once you know the rule, you can continue the pattern and fill gaps. For $5, 10, \\_, 20, 25$: the rule is 'add $5$', so the missing term is $15$. Check your answer by continuing past it — $15+5=20$ matches. Patterns are early algebra: the rule is like an instruction that works every time.",
          },
        ],
        keyFormulas: [
          { name: "Rule finding", statement: "Subtract or divide neighbours; look for repeating blocks" },
          { name: "Common rules", statement: "Add/subtract a constant; multiply by a constant; repeat a block" },
        ],
        workedExample: {
          problem: "What is the rule in $7, 14, 21, 28, \\ldots$ and what comes next?",
          solution: "Rule: add $7$ (the $7$ times table). Next: $28 + 7 = 35$.",
        },
      },
      questions: [
        {
          id: "pypm-q-u3l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the rule in $4, 8, 12, 16, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiply by $4$" },
              { id: "b", text: "Subtract $4$" },
              { id: "c", text: "Add $8$" },
              { id: "d", text: "Add $4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern rules", statement: "Differences between neighbours reveal additive rules." },
            ],
            steps: [
              { reasoning: "$8-4=4$, $12-8=4$ — adds $4$ each time.", working: "8-4=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Add $4$",
            commonErrors: ["Choosing 'multiply by $4$' — the terms do not multiply, they increase by $4$."],
          },
        },
        {
          id: "pypm-q-u3l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the next number in $3, 6, 12, 24, \\ldots$?",
          response: { type: "numeric", parts: [{ label: "Next number", answer: 48 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplicative patterns", statement: "Each term doubles: $3 \\to 6 \\to 12 \\to 24$." },
            ],
            steps: [
              { reasoning: "Each number is double the previous: $24 \\times 2$.", working: "24\\times2", marks: 1, markCode: "M" },
              { reasoning: "Next number is $48$.", working: "24\\times2=48", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$48$",
            commonErrors: ["Adding $24$ or continuing with $+12$ — the rule is doubling."],
          },
        },
        {
          id: "pypm-q-u3l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the missing number: $9, 18, \\_, 36, 45$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 27 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern continuation", statement: "The $9$ times table: rule is add $9$ each time." },
            ],
            steps: [
              { reasoning: "Differences: $18-9=9$, $36-18=18$... check the $9$ times table: $9, 18, 27, 36, 45$ — each term adds $9$.", working: "9\\times3=27", marks: 1, markCode: "M" },
              { reasoning: "After $18$ comes $18+9=27$; check $27+9=36$ matches.", working: "18+9=27", marks: 1, markCode: "M" },
              { reasoning: "Missing number is $27$.", working: "27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$27$",
            commonErrors: ["Choosing $28$ or $30$ — the rule adds exactly $9$."],
          },
        },
        {
          id: "pypm-q-u3l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Look at these patterns: $1, 2, 4, 8, 16, \\ldots$ and $100, 90, 80, 70, \\ldots$ and $3, 5, 4, 6, 5, 7, \\ldots$",
          parts: [
            { label: "a", prompt: "What is the rule for the first pattern?", marks: 1 },
            { label: "b", prompt: "What is the rule for the second pattern?", marks: 1 },
            { label: "c", prompt: "What is the missing number in the third pattern after $7$?", marks: 2 },
            { label: "d", prompt: "Find the next two numbers in the first pattern.", marks: 2 },
            { label: "e", prompt: "Explain how you know the third pattern is different from the first two.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) Next number after 7 in third pattern", answer: 6 },
              { label: "(d) Next two numbers in first pattern", answer: 32 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern types", statement: "Doubling, subtracting, and alternating patterns each follow a different rule." },
            ],
            steps: [
              { part: "a", reasoning: "First pattern doubles each time (multiply by $2$).", working: "\\times2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second pattern subtracts $10$ each time.", working: "-10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Third pattern alternates: $+2, -1, +2, -1$ — after $7$ (which came from $5+2$) comes $7-1=6$.", working: "7-1=6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Missing number is $6$.", working: "6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$16 \\times 2 = 32$, then $32 \\times 2 = 64$.", working: "16\\times2=32", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Next two: $32$ and $64$ (numeric part checks $32$).", working: "32,64", marks: 1, markCode: "A" },
              { part: "e", reasoning: "It alternates between adding and subtracting — not a single constant operation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) double (b) subtract $10$ (c) $6$ (d) $32, 64$ (e) it alternates $+2/-1$",
            commonErrors: ["In (c), continuing $+2$ gives $9$ — the pattern alternates."],
          },
        },
        {
          id: "pypm-q-u3l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the rule in the pattern $6, 12, 18, 24, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add $12$" },
              { id: "b", text: "Subtract $6$" },
              { id: "c", text: "Multiply by $6$" },
              { id: "d", text: "Add $6$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern rules", statement: "Differences between neighbours reveal additive rules." },
            ],
            steps: [
              { reasoning: "$12-6=6$, $18-12=6$, $24-18=6$ — adds $6$ each time.", working: "6,12,18,24", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Add $6$",
            commonErrors: ["Choosing 'multiply by $6$' — the terms do not multiply; they increase by $6$."],
          },
        },
        {
          id: "pypm-q-u3l3c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the next number in $2, 4, 8, 16, \\ldots$?",
          response: { type: "numeric", parts: [{ label: "Next number", answer: 32 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplicative patterns", statement: "Each term doubles: $16 \\times 2 = 32$." },
            ],
            steps: [
              { reasoning: "Each number is double the previous: $16 \\times 2$.", working: "16\\times2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$32$",
            commonErrors: ["Adding $16$ or $8$ — the rule is doubling."],
          },
        },
        {
          id: "pypm-q-u3l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the rule in $90, 80, 70, 60, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subtract $10$" },
              { id: "b", text: "Multiply by $10$" },
              { id: "c", text: "Add $10$" },
              { id: "d", text: "Subtract $20$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shrinking patterns", statement: "The numbers decrease by the same amount each time." },
            ],
            steps: [
              { reasoning: "$90-80=10$, $80-70=10$ — subtracts $10$ each time.", working: "90-80=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Subtract $10$",
            commonErrors: ["Choosing 'add $10$' — the numbers are getting smaller, not bigger."],
          },
        },
        {
          id: "pypm-q-u3l3c1-8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the missing number: $12, \\_, 18, 21, 24$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$17$" },
              { id: "b", text: "$14$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$16$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern continuation", statement: "The rule is 'add $3$': $12, 15, 18, 21, 24$." },
            ],
            steps: [
              { reasoning: "Differences are $3$: $18-12=6$ over two steps $= 3$ each.", working: "18-12=6", marks: 1, markCode: "M" },
              { reasoning: "Missing: $12 + 3 = 15$; check $15 + 3 = 18$ — matches.", working: "12+3=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $15$",
            commonErrors: ["Choosing $16$ — the rule adds $3$, not $4$."],
          },
        },
        {
          id: "pypm-q-u3l3c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What comes next in the repeating pattern $1, 2, 3, 1, 2, 3, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Repeating patterns", statement: "The block $1, 2, 3$ repeats, so after $3$ comes $1$." },
            ],
            steps: [
              { reasoning: "The block is $1, 2, 3$ — it repeats from the start.", marks: 1, markCode: "M" },
              { reasoning: "After $3$ comes $1$ again.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1$",
            commonErrors: ["Choosing $4$ — the pattern repeats, it does not keep counting up."],
          },
        },
        {
          id: "pypm-q-u3l3c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the rule in $3, 6, 12, 24, \\ldots$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add $6$" },
              { id: "b", text: "Add $3$" },
              { id: "c", text: "Double each time (multiply by $2$)" },
              { id: "d", text: "Multiply by $3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplicative patterns", statement: "Each term is double the previous: $3 \\to 6 \\to 12 \\to 24$." },
            ],
            steps: [
              { reasoning: "$6 = 3 \\times 2$, $12 = 6 \\times 2$, $24 = 12 \\times 2$ — doubling.", working: "24=12\\times2", marks: 1, markCode: "M" },
              { reasoning: "Answer: multiply by $2$ each time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Double each time",
            commonErrors: ["Choosing 'add $3$' — differences are $3, 6, 12$, not constant."],
          },
        },
        {
          id: "pypm-q-u3l3c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing number: $7, 14, 21, \\_, 35$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 28 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern continuation", statement: "The $7$ times table: rule is add $7$ each time." },
            ],
            steps: [
              { reasoning: "$21 + 7 = 28$; check $28 + 7 = 35$ — matches.", working: "21+7=28", marks: 1, markCode: "M" },
              { reasoning: "Missing number is $28$.", working: "28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28$",
            commonErrors: ["Answering $26$ — the rule adds $7$, not $5$."],
          },
        },
        {
          id: "pypm-q-u3l3c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would find the rule in a number pattern like $8, 16, 24, 32, \\ldots$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Finding pattern rules", statement: "Subtract neighbouring numbers to check for a constant difference." },
            ],
            steps: [
              { reasoning: "Subtract neighbours: $16-8=8$, $24-16=8$, $32-24=8$.", working: "16-8=8", marks: 1, markCode: "M" },
              { reasoning: "Every difference is $8$, so the rule is 'add $8$' (the $8$ times table).", marks: 1, markCode: "M" },
              { reasoning: "The next number would be $32+8=40$.", working: "32+8=40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rule: add $8$; next $40$.",
            commonErrors: ["Guessing without checking — always verify the difference is constant."],
          },
        },
        {
          id: "pypm-q-u3l3c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pattern goes $40, 35, 30, 25, \\ldots$. Explain the rule and find the next two numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shrinking patterns", statement: "Subtract a constant each time: here subtract $5$." },
            ],
            steps: [
              { reasoning: "Differences: $40-35=5$, $35-30=5$, $30-25=5$ — subtracts $5$.", working: "40-35=5", marks: 1, markCode: "M" },
              { reasoning: "Next: $25 - 5 = 20$, then $20 - 5 = 15$.", working: "25-5=20", marks: 1, markCode: "M" },
              { reasoning: "Answers: $20$ and $15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subtract $5$: next two are $20, 15$.",
            commonErrors: ["Adding $5$ — the pattern is decreasing."],
          },
        },
        {
          id: "pypm-q-u3l3c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which pattern follows the rule 'subtract $5$ each time'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$50, 25, 12, 6$" },
              { id: "b", text: "$50, 45, 40, 35$" },
              { id: "c", text: "$5, 10, 15, 20$" },
              { id: "d", text: "$50, 55, 60, 65$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Shrinking patterns", statement: "Subtract $5$ each step gives a decreasing sequence." },
            ],
            steps: [
              { reasoning: "Check (b): $50-45=5$, $45-40=5$, $40-35=5$ — yes.", working: "50-45=5", marks: 1, markCode: "M" },
              { reasoning: "(c) halves each time, not subtracts $5$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $50, 45, 40, 35$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $50, 45, 40, 35$",
            commonErrors: ["Choosing (c) — $50 \\to 25$ is halving, not subtracting $5$."],
          },
        },
        {
          id: "pypm-q-u3l3c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the next number in $96, 48, 24, 12, \\ldots$?",
          response: { type: "numeric", parts: [{ label: "Next number", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Halving patterns", statement: "Each term is half the previous: $12 \\div 2 = 6$." },
            ],
            steps: [
              { reasoning: "Each number halves: $96 \\to 48 \\to 24 \\to 12 \\to 6$.", working: "12\\div2=6", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $12 \\div 2 = 6$ — halves each time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Subtracting $12$ or continuing $-24$ — the rule is halving."],
          },
        },
        {
          id: "pypm-q-u3l3c1-16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the rule in $2, 5, 8, 11, \\ldots$ and what is the next number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiply by $2$; next is $22$" },
              { id: "b", text: "Subtract $3$; next is $8$" },
              { id: "c", text: "Add $2$; next is $13$" },
              { id: "d", text: "Add $3$; next is $14$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pattern rules", statement: "Differences are $3$: $5-2=3$, $8-5=3$, $11-8=3$." },
            ],
            steps: [
              { reasoning: "Each step adds $3$.", working: "5-2=3", marks: 1, markCode: "M" },
              { reasoning: "Next: $11 + 3 = 14$.", working: "11+3=14", marks: 1, markCode: "M" },
              { reasoning: "Answer: add $3$, next $14$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Add $3$; next $14$",
            commonErrors: ["Choosing (b) — the difference is $3$, not $2$."],
          },
        },
      ],
    },
    {
      id: "pypm-u3l3-c2-missing-numbers",
      title: "Missing numbers and function machines",
      skill: "Find missing numbers in calculations and use inverse operations.",
      lesson: {
        sections: [
          {
            heading: "Missing numbers in calculations",
            body: "A missing number can be anywhere: $\\square + 8 = 15$, $20 - \\square = 13$, $4 \\times \\square = 28$. Use the **inverse operation**: addition ↔ subtraction, multiplication ↔ division. $\\square + 8 = 15$ → $15 - 8 = 7$. $4 \\times \\square = 28$ → $28 \\div 4 = 7$. Always check by putting your answer back in.",
          },
          {
            heading: "Function machines",
            body: "A **function machine** applies a rule to an input to give an output: input $3$, rule 'add $5$' → output $8$. Work backwards with the inverse: output $8$, rule 'add $5$' → input was $8 - 5 = 3$. Machines can chain rules: 'double, then add $1$': input $4$ → $4 \\times 2 = 8$ → $8 + 1 = 9$.",
          },
        ],
        keyFormulas: [
          { name: "Inverse pairs", statement: "$+$ ↔ $-$, $\\times$ ↔ \\div$" },
          { name: "Function machine", statement: "Input $\\to$ rule $\\to$ Output; reverse with inverse rule" },
        ],
        workedExample: {
          problem: "Find the missing number: $\\square \\times 6 = 42$.",
          solution: "Inverse of $\\times 6$ is $\\div 6$: $42 \\div 6 = 7$. Check: $7 \\times 6 = 42$. Correct.",
        },
      },
      questions: [
        {
          id: "pypm-q-u3l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the missing number: $\\square + 6 = 11$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $\\square + 6 = 11$ then $\\square = 11 - 6$." },
            ],
            steps: [
              { reasoning: "$11 - 6 = 5$; check $5 + 6 = 11$.", working: "11-6=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Computing $11 + 6 = 17$ — wrong direction."],
          },
        },
        {
          id: "pypm-q-u3l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A function machine rule is 'multiply by $3$'. What is the output when the input is $7$?",
          response: { type: "numeric", parts: [{ label: "Output", answer: 21 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function machine", statement: "Apply the rule to the input: $7 \\times 3$." },
            ],
            steps: [
              { reasoning: "Multiply input by $3$: $7 \\times 3$.", working: "7\\times3", marks: 1, markCode: "M" },
              { reasoning: "Output is $21$.", working: "7\\times3=21", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21$",
            commonErrors: ["Adding $3$ instead of multiplying: $7+3=10$."],
          },
        },
        {
          id: "pypm-q-u3l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A machine does 'double the input, then subtract $4$'. Input $9$ goes in. What comes out?",
          response: { type: "numeric", parts: [{ label: "Output", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chained rules", statement: "Apply rules in order: first double, then subtract." },
            ],
            steps: [
              { reasoning: "Double $9$: $9 \\times 2 = 18$.", working: "9\\times2=18", marks: 1, markCode: "M" },
              { reasoning: "Subtract $4$: $18 - 4 = 14$.", working: "18-4=14", marks: 1, markCode: "M" },
              { reasoning: "Output is $14$.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Subtracting first: $9-4=5$, then doubling $=10$ — rules must be applied in order."],
          },
        },
        {
          id: "pypm-q-u3l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A function machine has the rule: 'multiply by $4$, then add $2$'.",
          parts: [
            { label: "a", prompt: "What is the output for input $5$?", marks: 2 },
            { label: "b", prompt: "The output is $30$. What was the input?", marks: 2 },
            { label: "c", prompt: "What input gives the smallest possible output that is still greater than $10$?", marks: 2 },
            { label: "d", prompt: "Explain why working backwards uses the inverse operations in reverse order.", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Output for input 5", answer: 22 },
              { label: "(b) Input for output 30", answer: 7 },
              { label: "(c) Input for smallest output > 10", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function machines and inverses", statement: "Forward: apply rules in order; backward: undo in reverse order." },
            ],
            steps: [
              { part: "a", reasoning: "$5 \\times 4 = 20$, then $20 + 2 = 22$.", working: "5\\times4+2=22", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Output is $22$.", working: "22", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Undo: $30 - 2 = 28$, then $28 \\div 4 = 7$.", working: "(30-2)\\div4=7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Input was $7$. Check: $7 \\times 4 + 2 = 30$.", working: "7", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Need output $> 10$: try input $3$: $3 \\times 4 + 2 = 14 > 10$; input $2$ gives $10$, not greater.", working: "3\\times4+2=14", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Smallest input is $3$ (output $14$); input $2$ gives exactly $10$.", working: "3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Inverses must undo in reverse order — like unwrapping a gift backwards.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $22$ (b) $7$ (c) $3$ (d) reverse order of inverse ops",
            commonErrors: ["In (b), dividing first: $30 \\div 4$ — must undo 'add 2' before 'multiply by 4'."],
          },
        },
        {
          id: "pypm-q-u3l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the missing number: $\\square + 4 = 9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$13$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $\\square + 4 = 9$ then $\\square = 9 - 4$." },
            ],
            steps: [
              { reasoning: "$9 - 4 = 5$; check $5 + 4 = 9$.", working: "9-4=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $5$",
            commonErrors: ["Choosing $13$ — that is $9+4$, wrong direction."],
          },
        },
        {
          id: "pypm-q-u3l3c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the missing number: $\\square \\times 5 = 35$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $\\square \\times 5 = 35$ then $\\square = 35 \\div 5$." },
            ],
            steps: [
              { reasoning: "$35 \\div 5 = 7$; check $7 \\times 5 = 35$.", working: "35\\div5=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Computing $35 \\times 5$ — must divide."],
          },
        },
        {
          id: "pypm-q-u3l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What operation undoes addition when finding a missing number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subtraction" },
              { id: "b", text: "Multiplication" },
              { id: "c", text: "Addition" },
              { id: "d", text: "Division" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Addition and subtraction are inverse operations." },
            ],
            steps: [
              { reasoning: "To undo 'add', subtract.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Subtraction",
            commonErrors: ["Choosing division — that undoes multiplication, not addition."],
          },
        },
        {
          id: "pypm-q-u3l3c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the missing number: $20 - \\square = 13$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $20 - \\square = 13$ then $\\square = 20 - 13$." },
            ],
            steps: [
              { reasoning: "$20 - 13 = 7$; check $20 - 7 = 13$.", working: "20-13=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Computing $20+13=33$ — wrong direction."],
          },
        },
        {
          id: "pypm-q-u3l3c2-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the missing number: $\\square \\div 3 = 4$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $\\square \\div 3 = 4$ then $\\square = 4 \\times 3$." },
            ],
            steps: [
              { reasoning: "Use the inverse of $\\div 3$: multiply $4 \\times 3$.", working: "4\\times3", marks: 1, markCode: "M" },
              { reasoning: "$4 \\times 3 = 12$; check $12 \\div 3 = 4$.", working: "4\\times3=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Dividing: $4 \\div 3$ — must multiply to undo division."],
          },
        },
        {
          id: "pypm-q-u3l3c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing number: $\\square + 8 = 20$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$28$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $\\square + 8 = 20$ then $\\square = 20 - 8$." },
            ],
            steps: [
              { reasoning: "$20 - 8 = 12$; check $12 + 8 = 20$.", working: "20-8=12", marks: 1, markCode: "M" },
              { reasoning: "Answer: $12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $12$",
            commonErrors: ["Choosing $28$ — adding instead of subtracting."],
          },
        },
        {
          id: "pypm-q-u3l3c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the missing number: $4 \\times \\square = 36$.",
          response: { type: "numeric", parts: [{ label: "Missing number", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "If $4 \\times \\square = 36$ then $\\square = 36 \\div 4$." },
            ],
            steps: [
              { reasoning: "$36 \\div 4 = 9$; check $4 \\times 9 = 36$.", working: "36\\div4=9", marks: 1, markCode: "M" },
              { reasoning: "Answer: $9$.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
            commonErrors: ["Computing $4 \\times 36$ — must divide."],
          },
        },
        {
          id: "pypm-q-u3l3c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'inverse operations' means and why they help find missing numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations", statement: "Inverse operations undo each other: $+$↔$-$, $\\times$↔$\\div$." },
            ],
            steps: [
              { reasoning: "Each operation has an opposite that undoes it.", marks: 1, markCode: "R" },
              { reasoning: "If $\\square + 8 = 20$, subtracting $8$ from both sides isolates $\\square$.", marks: 1, markCode: "M" },
              { reasoning: "This works because addition and subtraction cancel each other.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inverse ops undo each other, letting us isolate the missing number.",
            commonErrors: ["Saying 'just guess and check' — inverses give the exact method."],
          },
        },
        {
          id: "pypm-q-u3l3c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A function machine has the rule 'multiply by $3$'. The output is $18$. What was the input? Explain how you worked backwards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function machine inverse", statement: "To reverse 'multiply by $3$', divide by $3$." },
            ],
            steps: [
              { reasoning: "Forward rule: input $\\times 3$ = output.", marks: 1, markCode: "R" },
              { reasoning: "Backward: $18 \\div 3 = 6$.", working: "18\\div3=6", marks: 1, markCode: "M" },
              { reasoning: "Check: $6 \\times 3 = 18$ — input was $6$.", working: "6\\times3=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Input $= 6$",
            commonErrors: ["Multiplying $18 \\times 3$ — must divide to undo."],
          },
        },
        {
          id: "pypm-q-u3l3c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A function machine rule is 'add $5$'. What input gives an output of $12$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60$" },
              { id: "b", text: "$17$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function machine inverse", statement: "Reverse 'add $5$' by subtracting $5$: $12 - 5 = 7$." },
            ],
            steps: [
              { reasoning: "Undo add $5$: $12 - 5 = 7$.", working: "12-5=7", marks: 1, markCode: "M" },
              { reasoning: "Check: $7 + 5 = 12$ — correct.", marks: 1, markCode: "M" },
              { reasoning: "Answer: input $7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $7$",
            commonErrors: ["Choosing $17$ — adding $5$ instead of subtracting."],
          },
        },
        {
          id: "pypm-q-u3l3c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A function machine does 'multiply by $4$, then add $2$'. The output is $30$. What was the input?",
          response: { type: "numeric", parts: [{ label: "Input", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations in reverse order", statement: "Undo 'add $2$' first, then undo 'multiply by $4$'." },
            ],
            steps: [
              { reasoning: "Undo add $2$: $30 - 2 = 28$.", working: "30-2=28", marks: 1, markCode: "M" },
              { reasoning: "Undo multiply by $4$: $28 \\div 4 = 7$.", working: "28\\div4=7", marks: 1, markCode: "M" },
              { reasoning: "Check: $7 \\times 4 + 2 = 30$ — input was $7$.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Dividing first: $30 \\div 4$ — undo in REVERSE order."],
          },
        },
        {
          id: "pypm-q-u3l3c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A function machine has the rule: 'multiply by $3$, then subtract $4$'. The output is $20$. What was the input? Explain each step of working backwards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse operations in reverse order", statement: "Undo rules in reverse order: first undo subtract $4$ (add $4$), then undo multiply by $3$ (divide by $3$)." },
            ],
            steps: [
              { reasoning: "Forward: input $\\times 3$, then $-4$ = output $20$.", marks: 1, markCode: "R" },
              { reasoning: "Undo subtract $4$: $20 + 4 = 24$.", working: "20+4=24", marks: 1, markCode: "M" },
              { reasoning: "Undo multiply by $3$: $24 \\div 3 = 8$.", working: "24\\div3=8", marks: 1, markCode: "M" },
              { reasoning: "Check: $8 \\times 3 - 4 = 20$ — input was $8$.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Input $= 8$",
            commonErrors: ["Dividing first — must undo 'subtract 4' before 'multiply by 3'."],
          },
        },
      ],
    },
  ],
};
