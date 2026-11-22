import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypme4-u2-lesson-2-3",
  code: "2-3",
  title: "Functions in Context",
  goal: "I CAN model real situations with functions, interpret function notation in context, and use composite functions to solve multi-step problems.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Cost function", definition: "A function modelling the cost of producing or buying items, e.g. $C(x)=2x+50$." },
    { term: "Revenue function", definition: "A function modelling income from sales, e.g. $R(x)=5x$." },
    { term: "Profit function", definition: "Revenue minus cost: $P(x)=R(x)-C(x)$." },
    { term: "Break-even point", definition: "Where revenue equals cost: $P(x)=0$; no profit or loss." },
    { term: "Rate of change", definition: "How quickly a function's output changes with input — for linear functions, the gradient." },
  ],
  concepts: [
    {
      id: "mypme4-u2-cost",
      title: "Cost, revenue and profit functions",
      skill: "Model business scenarios with linear functions and find break-even points.",
      lesson: {
        sections: [
          {
            heading: "Cost functions",
            body: "A **cost function** has the form $C(x)=mx+c$ where $m$ is the cost per unit and $c$ is the fixed cost. For a café: $C(x)=3x+200$ means each coffee costs 3 to make and there are 200 fixed daily costs.",
          },
          {
            heading: "Revenue and profit",
            body: "**Revenue** $R(x)=px$ where $p$ is the selling price per unit. **Profit** $P(x)=R(x)-C(x)=(p-m)x-c$. For the café selling at 5: $P(x)=5x-(3x+200)=2x-200$.",
          },
          {
            heading: "Break-even analysis",
            body: "Break-even occurs when $P(x)=0$: $2x-200=0$, so $x=100$ cups. Below 100 cups the café loses money; above 100 it profits. This is a practical application of solving equations.",
          },
        ],
        keyFormulas: [
          { name: "Cost", statement: "$C(x)=mx+c$" },
          { name: "Revenue", statement: "$R(x)=px$" },
          { name: "Profit", statement: "$P(x)=R(x)-C(x)$" },
          { name: "Break-even", statement: "$P(x)=0$" },
        ],
        workedExample: {
          problem: "A baker spends 150 on fixed costs daily. Each cake costs 4 to make and sells for 9. Find the break-even point.",
          solution: "$C(x)=4x+150$, $R(x)=9x$, $P(x)=5x-150=0$, so $x=30$ cakes.",
        },
      },
      questions: [
        {
          id: "mypme4-u2-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A phone plan costs 20 per month plus 0.10 per MB. Write the cost function $C(x)$ where $x$ is MB used.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C(x)=0.10x$" },
              { id: "b", text: "$C(x)=20x+0.10$" },
              { id: "c", text: "$C(x)=0.10x+20$" },
              { id: "d", text: "$C(x)=20x+0.10x$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cost function", statement: "$C(x)=mx+c$: variable cost + fixed cost." },
            ],
            steps: [
              { reasoning: "$0.10 per MB + 20 fixed: $C(x)=0.10x+20$.", working: "0.10x+20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $C(x)=0.10x+20$",
            commonErrors: ["Swapping fixed and variable costs."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-context-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using $C(x)=3x+200$ and $R(x)=5x$, find the profit function $P(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P(x)=8x-200$" },
              { id: "b", text: "$P(x)=5x-3x-200$ only" },
              { id: "c", text: "$P(x)=2x+200$" },
              { id: "d", text: "$P(x)=2x-200$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$P(x)=R(x)-C(x)$." },
            ],
            steps: [
              { reasoning: "$P(x)=5x-(3x+200)=5x-3x-200=2x-200$.", working: "2x-200", marks: 1, markCode: "M" },
              { reasoning: "State the profit function.", working: "P(x)=2x-200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P(x)=2x-200$",
            commonErrors: ["Forgetting to subtract the fixed cost 200."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-context-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For the café with $P(x)=2x-200$, find the break-even point.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "200 cups" },
              { id: "b", text: "400 cups" },
              { id: "c", text: "50 cups" },
              { id: "d", text: "100 cups" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Break-even", statement: "$P(x)=0$ gives the break-even point." },
            ],
            steps: [
              { reasoning: "$2x-200=0 \\Rightarrow 2x=200 \\Rightarrow x=100$.", working: "x=100", marks: 1, markCode: "M" },
              { reasoning: "Check: $P(100)=200-200=0$. ✓", working: "P(100)=0", marks: 1, markCode: "M" },
              { reasoning: "State the break-even point.", working: "100\\text{ cups}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ cups",
            commonErrors: ["Setting $P(x)=200$ instead of 0."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-context-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company makes widgets. Fixed costs are 500 per week. Each widget costs 8 to produce and sells for 15.",
          parts: [
            { label: "a", prompt: "Write the cost function $C(x)$.", marks: 1 },
            { label: "b", prompt: "Write the revenue function $R(x)$.", marks: 1 },
            { label: "c", prompt: "Find the profit function $P(x)$.", marks: 2 },
            { label: "d", prompt: "Find the break-even point.", marks: 2 },
            { label: "e", prompt: "Calculate the profit if 150 widgets are sold.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$P(x)=R(x)-C(x)$; break-even at $P(x)=0$." },
            ],
            steps: [
              { part: "a", reasoning: "$C(x)=8x+500$.", working: "C(x)=8x+500", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$R(x)=15x$.", working: "R(x)=15x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(x)=15x-(8x+500)=7x-500$.", working: "P(x)=7x-500", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the profit function.", working: "7x-500", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$7x-500=0 \\Rightarrow x=\\frac{500}{7}\\approx71.4$ widgets.", working: "x\\approx71.4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the break-even point (≈72 widgets needed in practice).", working: "71.4\\text{ widgets}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "$P(150)=7(150)-500=1050-500=550$.", working: "550", marks: 1, markCode: "M" },
              { part: "e", reasoning: "State the profit.", working: "550", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $C(x)=8x+500$ (b) $R(x)=15x$ (c) $P(x)=7x-500$ (d) $x\\approx71.4$ (e) 550",
            commonErrors: ["In (d), not noting that partial widgets aren't possible."],
            examinerNote: "A1 for (a), A1 for (b), M1 A1 for (c), M1 A1 for (d), M1 A1 for (e).",
          },
        },
        {
          id: "mypme4-u2-context-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cost function is $C(x)=4x+100$. What does the 100 represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of units" },
              { id: "b", text: "The fixed cost" },
              { id: "c", text: "The cost per unit" },
              { id: "d", text: "The revenue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cost function", statement: "$C(x)=mx+c$: $c$ is fixed cost, $m$ is cost per unit." },
            ],
            steps: [
              { reasoning: "The constant term 100 is the fixed cost.", working: "\\text{fixed cost}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The fixed cost",
            commonErrors: ["Confusing it with the per-unit cost 4."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-context-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Given $C(x)=2x+50$ and $R(x)=6x$, find $P(20)$.",
          response: { type: "numeric", parts: [{ label: "$P(20)$", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$P(x)=R(x)-C(x)=(6-2)x-50=4x-50$." },
            ],
            steps: [
              { reasoning: "$P(20)=4(20)-50=80-50=30$.", working: "30", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$30$",
            commonErrors: ["Computing $R(20)-C(20)=120-90=30$ — same answer, but forgetting to subtract fixed cost."],
          },
        },
        {
          id: "mypme4-u2-context-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business has $C(x)=3x+150$ and sells each unit for 8. Find the break-even point.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50 units" },
              { id: "b", text: "30 units" },
              { id: "c", text: "150 units" },
              { id: "d", text: "18.75 units" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Break-even", statement: "$P(x)=R(x)-C(x)=8x-(3x+150)=5x-150=0$." },
            ],
            steps: [
              { reasoning: "$5x-150=0 \\Rightarrow x=30$.", working: "x=30", marks: 1, markCode: "M" },
              { reasoning: "Check: $P(30)=150-150=0$. ✓", working: "P(30)=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ units",
            commonErrors: ["Setting $3x+150=8$ instead of $P(x)=0$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-context-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $C(x)=5x+200$ and $R(x)=9x$, find the profit when 100 units are sold.",
          response: { type: "numeric", parts: [{ label: "Profit", answer: 200 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$P(x)=(9-5)x-200=4x-200$." },
            ],
            steps: [
              { reasoning: "$P(100)=4(100)-200=400-200=200$.", working: "200", marks: 1, markCode: "M" },
              { reasoning: "State the profit.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$200$",
            commonErrors: ["Forgetting the fixed cost: $4(100)=400$."],
          },
        },
        {
          id: "mypme4-u2-context-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "In $C(x)=2.5x+80$, which value is the fixed cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2.5" },
              { id: "b", text: "80" },
              { id: "c", text: "$x$" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cost function", statement: "$C(x)=mx+c$; $c$ is fixed regardless of $x$." },
            ],
            steps: [
              { reasoning: "Fixed cost is the constant term: 80.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80$",
            commonErrors: ["Choosing 2.5 — that's the variable cost per unit."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-context-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A stall has $C(x)=4x+300$ and revenue $R(x)=10x$. Find the break-even number of sales.",
          response: { type: "numeric", parts: [{ label: "Break-even sales", answer: 50 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Break-even", statement: "$P(x)=(10-4)x-300=6x-300=0$." },
            ],
            steps: [
              { reasoning: "$6x=300 \\Rightarrow x=50$.", working: "x=50", marks: 1, markCode: "M" },
              { reasoning: "State the break-even point.", working: "50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50$ sales",
            commonErrors: ["Dividing 300 by 10 or 4 instead of the margin 6."],
          },
        },
        {
          id: "mypme4-u2-context-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A business has $C(x)=3x+120$ and $R(x)=5x$. Find the profit when 80 units are produced and sold.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-40" },
              { id: "b", text: "40" },
              { id: "c", text: "280" },
              { id: "d", text: "520" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$P(x)=R(x)-C(x)=2x-120$." },
            ],
            steps: [
              { reasoning: "$P(x)=5x-(3x+120)=2x-120$.", working: "P(x)=2x-120", marks: 1, markCode: "M" },
              { reasoning: "$P(80)=2(80)-120=160-120=40$.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "State the profit.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$",
            commonErrors: ["Using $R(x)=C(x)$ or forgetting the fixed cost."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-context-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A manufacturer has $C(x)=6.5x+450$ and revenue $R(x)=10x$. Find the profit when 200 units are sold.",
          response: { type: "numeric", parts: [{ label: "Profit", answer: 250 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$P(x)=(10-6.5)x-450=3.5x-450$." },
            ],
            steps: [
              { reasoning: "$P(x)=10x-(6.5x+450)=3.5x-450$.", working: "P(x)=3.5x-450", marks: 1, markCode: "M" },
              { reasoning: "$P(200)=3.5(200)-450=700-450=250$.", working: "250", marks: 1, markCode: "M" },
              { reasoning: "State the profit.", working: "250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$250$",
            commonErrors: ["Decimal error in $10-6.5=3.5$."],
          },
        },
        {
          id: "mypme4-u2-context-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A café has fixed costs of 300 and each drink costs 2 to make. Drinks sell for 7 each.",
          parts: [
            { label: "a", prompt: "Write the profit function $P(x)$.", marks: 2 },
            { label: "b", prompt: "Find the break-even number of drinks.", marks: 2 },
            { label: "c", prompt: "Find the profit if 100 drinks are sold.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$P(x)=R(x)-C(x)$; break-even at $P(x)=0$." },
            ],
            steps: [
              { part: "a", reasoning: "$C(x)=2x+300$, $R(x)=7x$, so $P(x)=7x-(2x+300)=5x-300$.", working: "P(x)=5x-300", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the profit function.", working: "5x-300", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$5x-300=0 \\Rightarrow x=60$.", working: "x=60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the break-even point.", working: "60\\text{ drinks}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(100)=5(100)-300=500-300=200$.", working: "200", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the profit.", working: "200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P(x)=5x-300$ (b) 60 drinks (c) 200",
            commonErrors: ["In (a), writing $P(x)=5x+300$ — fixed cost is subtracted."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u2-context-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A craftsman has fixed costs of 250 and each item costs 4 to make. Items sell for 9 each.",
          parts: [
            { label: "a", prompt: "Write the cost, revenue and profit functions.", marks: 3 },
            { label: "b", prompt: "Find the break-even number of items.", marks: 2 },
            { label: "c", prompt: "Find the profit when 80 items are sold.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Profit", statement: "$C(x)=mx+c$, $R(x)=px$, $P(x)=R(x)-C(x)$." },
            ],
            steps: [
              { part: "a", reasoning: "$C(x)=4x+250$; $R(x)=9x$; $P(x)=9x-(4x+250)=5x-250$.", working: "C=4x+250,\\ R=9x,\\ P=5x-250", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three functions correct.", working: "\\text{functions}", marks: 2, markCode: "A" },
              { part: "b", reasoning: "$5x-250=0 \\Rightarrow x=50$.", working: "x=50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the break-even point.", working: "50\\text{ items}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(80)=5(80)-250=400-250=150$.", working: "150", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the profit.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $C(x)=4x+250$, $R(x)=9x$, $P(x)=5x-250$ (b) 50 items (c) 150",
            commonErrors: ["Swapping cost per unit and selling price."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u2-context-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A gym charges a joining fee of 120 plus 6 per month. A rival charges 15 per month with no joining fee.",
          parts: [
            { label: "a", prompt: "Write the cost function $C(x)$ for the first gym, where $x$ is months.", marks: 2 },
            { label: "b", prompt: "Write the cost function $G(x)$ for the rival.", marks: 1 },
            { label: "c", prompt: "Find when the first gym becomes cheaper than the rival.", marks: 2 },
            { label: "d", prompt: "Calculate the total cost at each gym after 24 months.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Linear cost: fixed fee + rate × time; compare with inequality." },
            ],
            steps: [
              { part: "a", reasoning: "$C(x)=6x+120$.", working: "C(x)=6x+120", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the function.", working: "6x+120", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$G(x)=15x$.", working: "G(x)=15x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$6x+120<15x \\Rightarrow 120<9x \\Rightarrow x>\\frac{40}{3}\\approx13.3$ months.", working: "x>13.3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the condition (first cheaper after ~14 months).", working: "x>13.3\\text{ months}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$C(24)=6(24)+120=264$.", working: "264", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$G(24)=15(24)=360$.", working: "360", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State both totals.", working: "264\\text{ and }360", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $C(x)=6x+120$ (b) $G(x)=15x$ (c) first cheaper for $x>13.3$ months (d) £264 and £360",
            commonErrors: ["In (c), dividing by 6 instead of the difference 9."],
            examinerNote: "M1 A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u2-context-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A company has $C(x)=5x+800$ and $R(x)=12x$. What is the minimum whole number of units needed to break even?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "114" },
              { id: "b", text: "115" },
              { id: "c", text: "800" },
              { id: "d", text: "57" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Break-even", statement: "$P(x)=7x-800\\ge0$; round up to whole units." },
            ],
            steps: [
              { reasoning: "$7x-800\\ge0 \\Rightarrow x\\ge\\frac{800}{7}\\approx114.3$.", working: "x\\ge114.3", marks: 1, markCode: "M" },
              { reasoning: "Must round up: 115 units (114 gives a small loss).", working: "115", marks: 1, markCode: "M" },
              { reasoning: "State the minimum.", working: "115", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$115$ units",
            commonErrors: ["Rounding 114.3 down to 114 — that still loses money."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u2-model",
      title: "Functions and modelling",
      skill: "Interpret function notation in real contexts and use composite functions for multi-step problems.",
      lesson: {
        sections: [
          {
            heading: "Functions in context",
            body: "Functions model real relationships: $C(x)$ for cost, $d(t)$ for distance, $T(x)$ for temperature. Function notation tells us exactly what the input and output represent. $f(5)=12$ means 'when input is 5, output is 12'.",
          },
          {
            heading: "Composite functions in context",
            body: "Composites model chained processes: if $f$ converts Celsius to Fahrenheit and $g$ adds a correction, then $fg$ applies both. In science, composite functions appear in conversion chains and multi-stage calculations.",
          },
          {
            heading: "Interpreting results",
            body: "Always interpret function outputs in context with correct units. A negative profit means a loss; a distance of 0 means the object returned to start. Check that answers are physically reasonable.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "$f(a)=b$ means 'input $a$ gives output $b$'" },
          { name: "Composite in context", statement: "Chain functions for multi-step processes" },
        ],
        workedExample: {
          problem: "A car's fuel consumption is $F(d)=0.08d$ litres for distance $d$ km. The cost per litre is $C(l)=1.45l$. Find the total cost function $CF(d)$.",
          solution: "$CF(d)=C(F(d))=C(0.08d)=1.45\\times0.08d=0.116d$ — cost is 0.116 per km.",
        },
      },
      questions: [
        {
          id: "mypme4-u2-model-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=3x$ models distance in metres after $x$ seconds, what does $f(4)=12$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After 4 seconds, distance is 12 metres" },
              { id: "b", text: "Speed is 12 m/s" },
              { id: "c", text: "Distance is 4 metres" },
              { id: "d", text: "After 12 seconds, distance is 4 metres" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretation", statement: "$f(a)=b$ means input $a$ → output $b$." },
            ],
            steps: [
              { reasoning: "Input 4 seconds → output 12 metres.", working: "\\text{4 s}\\to\\text{12 m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** After 4 seconds, distance is 12 metres",
            commonErrors: ["Swapping input and output."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-model-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fuel use is $F(d)=0.08d$ litres for $d$ km. Cost per litre is $C(l)=1.45l$. Find $CF(d)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CF(d)=0.08\\times1.45d$ only" },
              { id: "b", text: "$CF(d)=0.08d+1.45$" },
              { id: "c", text: "$CF(d)=0.116d$" },
              { id: "d", text: "$CF(d)=1.45d$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$CF(d)=C(F(d))=1.45\\times0.08d=0.116d$." },
            ],
            steps: [
              { reasoning: "$C(F(d))=C(0.08d)=1.45(0.08d)=0.116d$.", working: "0.116d", marks: 1, markCode: "M" },
              { reasoning: "State the composite.", working: "CF(d)=0.116d", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$CF(d)=0.116d$",
            commonErrors: ["Adding functions instead of composing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-model-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Using $CF(d)=0.116d$, find the cost of a 250 km journey.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "290" },
              { id: "b", text: "0.29" },
              { id: "c", text: "29" },
              { id: "d", text: "2.9" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation", statement: "$CF(250)=0.116\\times250=29$." },
            ],
            steps: [
              { reasoning: "Substitute $d=250$.", working: "0.116\\times250", marks: 1, markCode: "M" },
              { reasoning: "$=29$ (currency units).", working: "29", marks: 1, markCode: "M" },
              { reasoning: "State the cost.", working: "29", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$29$",
            commonErrors: ["Decimal place errors."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-model-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A taxi company charges a flagfall of 3 plus 2 per km. Let $F(d)$ be the fare function.",
          parts: [
            { label: "a", prompt: "Write $F(d)$.", marks: 1 },
            { label: "b", prompt: "Find the fare for an 8 km journey.", marks: 2 },
            { label: "c", prompt: "If a journey costs 15, find the distance travelled.", marks: 2 },
            { label: "d", prompt: "A second company charges 4 per km with no flagfall. Write its fare function $G(d)$ and find when the first company is cheaper.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Linear functions model cost with fixed + variable components." },
            ],
            steps: [
              { part: "a", reasoning: "$F(d)=2d+3$.", working: "F(d)=2d+3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$F(8)=2(8)+3=19$.", working: "19", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the fare.", working: "19", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2d+3=15 \\Rightarrow 2d=12 \\Rightarrow d=6$ km.", working: "d=6\\text{ km}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for distance.", working: "d=6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$G(d)=4d$.", working: "G(d)=4d", marks: 1, markCode: "M" },
              { part: "d", reasoning: "First cheaper: $2d+3<4d \\Rightarrow 3<2d \\Rightarrow d>1.5$ km.", working: "d>1.5\\text{ km}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the condition.", working: "d>1.5\\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $F(d)=2d+3$ (b) 19 (c) 6 km (d) $G(d)=4d$; first company cheaper for $d>1.5$ km",
            commonErrors: ["In (d), not setting up the inequality correctly."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u2-model-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The function $d(t)=3t$ models distance in metres after $t$ seconds. What does $d(4)=12$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After 4 seconds the distance is 12 metres" },
              { id: "b", text: "The distance is 4 metres" },
              { id: "c", text: "After 12 seconds the distance is 4 metres" },
              { id: "d", text: "The speed is 12 m/s" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretation", statement: "$f(a)=b$ means input $a$ gives output $b$." },
            ],
            steps: [
              { reasoning: "Input 4 seconds → output 12 metres.", working: "4\\text{ s}\\to12\\text{ m}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** After 4 seconds the distance is 12 metres",
            commonErrors: ["Swapping input and output."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-model-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A taxi charges $F(d)=3d+2$ for a journey of $d$ km. Find the fare for a 5 km journey.",
          response: { type: "numeric", parts: [{ label: "Fare", answer: 17 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation", statement: "Substitute $d=5$: $F(5)=3(5)+2=17$." },
            ],
            steps: [
              { reasoning: "$F(5)=15+2=17$.", working: "17", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$17$",
            commonErrors: ["Computing $3+2=5$ without the distance term."],
          },
        },
        {
          id: "mypme4-u2-model-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car uses $F(d)=0.1d$ litres of fuel for $d$ km. Fuel costs $C(l)=1.6l$ per litre. Find the composite cost function $CF(d)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$CF(d)=1.6d$" },
              { id: "b", text: "$CF(d)=0.1d+1.6$" },
              { id: "c", text: "$CF(d)=0.26d$" },
              { id: "d", text: "$CF(d)=0.16d$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$CF(d)=C(F(d))=1.6(0.1d)=0.16d$." },
            ],
            steps: [
              { reasoning: "$C(F(d))=C(0.1d)=1.6\\times0.1d=0.16d$.", working: "0.16d", marks: 1, markCode: "M" },
              { reasoning: "State the composite.", working: "CF(d)=0.16d", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$CF(d)=0.16d$",
            commonErrors: ["Adding the functions instead of composing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-model-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using $CF(d)=0.16d$, find the fuel cost of a 120 km journey.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 19.2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation", statement: "$CF(120)=0.16\\times120=19.2$." },
            ],
            steps: [
              { reasoning: "$0.16\\times120=19.2$.", working: "19.2", marks: 1, markCode: "M" },
              { reasoning: "State the cost.", working: "19.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$19.2$",
            commonErrors: ["Decimal place error."],
          },
        },
        {
          id: "mypme4-u2-model-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fuel use is $F(d)=0.1d$ litres and the cost function is $C(l)=1.5l+0.5$ (including a fixed fee). Which expression gives the total cost of a $d$ km journey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$C(d)=1.5(0.1d)$ only" },
              { id: "b", text: "$FC(d)=1.5d+0.5$" },
              { id: "c", text: "$CF(d)=0.1d+2.0$" },
              { id: "d", text: "$CF(d)=0.15d+0.5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite order", statement: "$CF(d)=C(F(d))$ applies the fuel function first, then cost." },
            ],
            steps: [
              { reasoning: "$C(F(d))=1.5(0.1d)+0.5=0.15d+0.5$." , working: "0.15d+0.5", marks: 1, markCode: "M" },
              { reasoning: "State the composite.", working: "CF(d)=0.15d+0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$CF(d)=0.15d+0.5$",
            commonErrors: ["Dropping the fixed fee or composing in the wrong order."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-model-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A car uses $F(d)=0.08d$ litres for $d$ km. The cost function is $C(l)=1.45l+0.5$. Find the total cost of a 200 km journey.",
          response: { type: "numeric", parts: [{ label: "Cost", answer: 23.7 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite evaluation", statement: "$CF(d)=C(F(d))=1.45(0.08d)+0.5$; evaluate at $d=200$." },
            ],
            steps: [
              { reasoning: "$F(200)=16$ litres; $C(16)=1.45(16)+0.5=23.2+0.5=23.7$.", working: "23.7", marks: 1, markCode: "M" },
              { reasoning: "State the cost.", working: "23.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$23.7$",
            commonErrors: ["Forgetting the fixed fee 0.5."],
          },
        },
        {
          id: "mypme4-u2-model-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A profit function gives $P(30)=-50$. What does this mean in context?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The break-even point is 30" },
              { id: "b", text: "A profit of 50 when producing 30 units" },
              { id: "c", text: "A loss of 50 when producing 30 units" },
              { id: "d", text: "A loss of 30 when producing 50 units" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretation", statement: "Negative profit = loss; input 30 units → output -50." },
            ],
            steps: [
              { reasoning: "Input 30 units, output $-50$: a loss of 50.", working: "\\text{loss of }50", marks: 1, markCode: "M" },
              { reasoning: "Negative sign indicates loss, not profit.", working: "\\text{loss}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct interpretation.", working: "\\text{loss of 50}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A loss of 50 when producing 30 units",
            commonErrors: ["Ignoring the negative sign."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-model-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A phone battery modelled by $B(t)=100-8t$ gives the percentage charge after $t$ hours. Find the charge after 7.5 hours.",
          response: { type: "numeric", parts: [{ label: "Charge (%)", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation", statement: "$B(7.5)=100-8(7.5)=100-60=40$." },
            ],
            steps: [
              { reasoning: "$8\\times7.5=60$.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "$100-60=40$%.", working: "40", marks: 1, markCode: "M" },
              { reasoning: "State the charge.", working: "40\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\%$",
            commonErrors: ["Decimal error in $8\\times7.5$."],
          },
        },
        {
          id: "mypme4-u2-model-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A car uses $F(d)=0.07d$ litres for $d$ km; fuel costs $C(l)=1.4l$ per litre.",
          parts: [
            { label: "a", prompt: "Find the composite function $CF(d)$.", marks: 2 },
            { label: "b", prompt: "Find the fuel cost of a 300 km journey.", marks: 2 },
            { label: "c", prompt: "Find the distance for which the fuel cost is 49.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$CF(d)=C(F(d))$ chains the two processes." },
            ],
            steps: [
              { part: "a", reasoning: "$CF(d)=1.4(0.07d)=0.098d$.", working: "CF(d)=0.098d", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the composite.", working: "0.098d", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$CF(300)=0.098\\times300=29.4$.", working: "29.4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the cost.", working: "29.4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$0.098d=49 \\Rightarrow d=\\frac{49}{0.098}=500$ km.", working: "d=500\\text{ km}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the distance.", working: "500\\text{ km}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $CF(d)=0.098d$ (b) 29.4 (c) 500 km",
            commonErrors: ["In (c), solving $F(d)=49$ instead of $CF(d)=49$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u2-model-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "An item costs £$x$ pounds. A 5% tax is added, then the total is converted to dollars at $E(y)=1.4y$.",
          parts: [
            { label: "a", prompt: "Write the cost function $C(x)$ in pounds including tax.", marks: 2 },
            { label: "b", prompt: "Find the composite $EC(x)$ giving the cost in dollars.", marks: 2 },
            { label: "c", prompt: "Find the dollar cost of an item priced at £200.", marks: 2 },
            { label: "d", prompt: "Interpret $EC(100)=147$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite in context", statement: "Chain functions: tax first, then currency conversion." },
            ],
            steps: [
              { part: "a", reasoning: "$C(x)=1.05x$ (5% tax multiplies by 1.05).", working: "C(x)=1.05x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the function.", working: "1.05x", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$EC(x)=1.4(1.05x)=1.47x$.", working: "EC(x)=1.47x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the composite.", working: "1.47x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$EC(200)=1.47(200)=294$ dollars.", working: "294", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the cost.", working: "294", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A £100 item costs $147 after tax and conversion.", working: "\\text{£100}\\to147", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $C(x)=1.05x$ (b) $EC(x)=1.47x$ (c) $294 (d) £100 item costs 147 dollars",
            commonErrors: ["In (b), composing in the wrong order or adding tax after conversion."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypme4-u2-model-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Hiring a bike costs $H(t)=10+4t$ pounds for $t$ hours. A 10% tip is added, giving total $T(t)=1.1H(t)$. Another option is pay-per-use $G(t)=15t$. For what values of $t$ is the hire cheaper?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$t>\\frac{11}{10.6}\\approx1.04$ hours" },
              { id: "b", text: "Never" },
              { id: "c", text: "$t<1.04$ hours" },
              { id: "d", text: "For all $t>0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Hire cheaper when $T(t)<G(t)$: $11+4.4t<15t$." },
            ],
            steps: [
              { reasoning: "$T(t)=1.1(10+4t)=11+4.4t$; solve $11+4.4t<15t \\Rightarrow 11<10.6t \\Rightarrow t>1.038$." , working: "t>1.038", marks: 1, markCode: "M" },
              { reasoning: "Check at $t=2$: $T=19.8<30=G$. ✓", working: "19.8<30", marks: 1, markCode: "M" },
              { reasoning: "State the condition.", working: "t>1.04\\text{ h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hire is cheaper for $t>\\frac{11}{10.6}\\approx1.04$ hours",
            commonErrors: ["Using $H(t)$ without the 10% tip, or reversing the inequality."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-model-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A phone battery drains according to $B(t)=100-8t$ percent after $t$ hours. After how many hours is 20% charge remaining?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 hours" },
              { id: "b", text: "10 hours" },
              { id: "c", text: "8 hours" },
              { id: "d", text: "15 hours" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving in context", statement: "Set $B(t)=20$ and solve." },
            ],
            steps: [
              { reasoning: "$100-8t=20 \\Rightarrow 8t=80 \\Rightarrow t=10$." , working: "t=10", marks: 1, markCode: "M" },
              { reasoning: "Check: $B(10)=100-80=20$. ✓", working: "B(10)=20", marks: 1, markCode: "M" },
              { reasoning: "State the time.", working: "10\\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ hours",
            commonErrors: ["Solving $100-8t=0$ instead of 20."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
