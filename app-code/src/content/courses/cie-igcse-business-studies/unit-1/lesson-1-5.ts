import type { Lesson } from "../../../types.ts";

export const lesson255: Lesson = {
  id: "cieibs-u1-lesson-1-5",
  code: "1-5",
  title: "Revenue, Costs and Profit",
  goal: "I CAN calculate revenue, costs, profit and break-even point.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Paper 1: financial performance",
  ],

  vocabulary: [
    { term: "Revenue", definition: "Total income from sales." },
    { term: "Fixed costs", definition: "Costs that don't change with output." },
    { term: "Variable costs", definition: "Costs that change with output." },
    { term: "Total costs", definition: "Fixed + variable costs." },
    { term: "Profit", definition: "Revenue minus total costs." },
    {
      term: "Break-even",
      definition: "Point where revenue equals total costs.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u1-s5-fin",
      title: "Financial performance",
      skill: "Calculate revenue, costs, profit and break-even.",
      lesson: {
        sections: [
          {
            heading: "Revenue and costs",
            body: "Revenue = price × quantity sold. Fixed costs: rent, salaries, insurance — don't change with output. Variable costs: materials, labour per unit — change with output. Total costs = fixed + variable.",
          },
          {
            heading: "Profit and break-even",
            body: "Profit = revenue - total costs. Loss = total costs - revenue. Break-even point: revenue = total costs (no profit/loss). Formula: BEP (units) = fixed costs / (price - variable cost per unit).",
          },
        ],
        keyFormulas: [
          { name: "Revenue", statement: "price × quantity" },
          { name: "Total costs", statement: "fixed + variable" },
          { name: "Profit", statement: "revenue - total costs" },
          {
            name: "Break-even",
            statement: "fixed costs / (price - variable cost)",
          },
        ],
        workedExample: {
          problem:
            "Fixed costs = $5000, price = $10, variable cost = $6/unit. Find break-even point and profit at 2000 units.",
          solution:
            "BEP = 5000 / (10-6) = 1250 units. At 2000: Revenue = 2000×10 = $20000. Costs = 5000 + (2000×6) = $17000. Profit = $3000.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-fin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is revenue?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Total income from sales",
              },
              {
                id: "b",
                text: "Profit",
              },
              {
                id: "c",
                text: "Total costs",
              },
              {
                id: "d",
                text: "A type of tax",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Revenue",
                statement: "Total sales income.",
              },
            ],
            steps: [
              {
                reasoning: "Revenue = total income from sales.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Total sales income",
          },
        },
        {
          id: "cieibs-u1-fin-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between fixed and variable costs?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fixed vs variable",
                statement: "Constant vs changing.",
              },
            ],
            steps: [
              {
                reasoning: "Fixed costs don't change with output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Variable costs change with output.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Constant vs changing costs",
          },
        },
        {
          id: "cieibs-u1-fin-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Fixed costs = $2000, price = $5, variable cost = $3. Find break-even point.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Break-even",
                statement: "BEP calculation.",
              },
            ],
            steps: [
              {
                reasoning: "BEP = fixed costs / (price - variable cost).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "BEP = 2000 / (5-3) = 1000 units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 1000 units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1000 units",
          },
        },
        {
          id: "cieibs-u1-fin-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define revenue, fixed costs, variable costs, total costs, profit, break-even. (b) What is revenue? (c) What are fixed costs? Give 2 examples. (d) What are variable costs? Give 2 examples. (e) What is profit? (f) What is break-even? (g) Calculate: FC=$3000, P=$8, VC=$5, Q=1000. (h) Find BEP and profit.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Financial performance",
                statement: "Revenue, costs, profit, BEP.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Total sales income.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Rent, insurance; don't change with output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Materials, labour; change with output.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Revenue - total costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Revenue = total costs point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Revenue=8000, costs=8000, profit=0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) BEP=3000/(8-5)=1000 units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Revenue, costs, profit, break-even.",
          },
        },
        {
          id: "cieibs-u1-fin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a fixed cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raw materials" },
              { id: "b", text: "Hourly production wages" },
              { id: "c", text: "Packaging per unit" },
              { id: "d", text: "Factory rent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fixed costs",
                statement: "Costs that do not change with output, e.g. rent.",
              },
            ],
            steps: [
              {
                reasoning: "Rent is paid regardless of output level.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Factory rent",
          },
        },
        {
          id: "cieibs-u1-fin-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business sells 300 units at $7 each. Its total costs are $1,600. (a) Calculate revenue. (b) Calculate profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2100, unit: "$" },
              { label: "b", answer: 500, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Revenue and profit",
                statement:
                  "Revenue = price x quantity; profit = revenue - total costs.",
              },
            ],
            steps: [
              {
                reasoning: "Revenue = 7 x 300 = $2,100.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Profit = 2100 - 1600 = $500.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $2,100, b) $500",
          },
        },
        {
          id: "cieibs-u1-fin-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fixed costs = $4,000, price = $12, variable cost = $8 per unit. (a) Calculate the break-even point in units. (b) Calculate profit at 2,000 units.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1000, unit: "units" },
              { label: "b", answer: 4000, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Break-even",
                statement: "BEP = fixed costs / (price - variable cost).",
              },
            ],
            steps: [
              {
                reasoning: "BEP = 4000 / (12 - 8) = 1,000 units.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "At 2000 units: revenue = 2000 x 12 = $24,000; costs = 4000 + 2000 x 8 = $20,000; profit = $4,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1,000 units, b) $4,000",
          },
        },
        {
          id: "cieibs-u1-fin-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is a variable cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct materials used per unit" },
              { id: "b", text: "Annual insurance premium" },
              { id: "c", text: "Monthly rent" },
              { id: "d", text: "Salaries of managers" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Variable costs",
                statement:
                  "Costs that change with output, e.g. materials per unit.",
              },
            ],
            steps: [
              {
                reasoning: "Materials used rise directly with units produced.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Direct materials used per unit",
          },
        },
        {
          id: "cieibs-u1-fin-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the break-even point is important to a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Break-even",
                statement: "Point where revenue equals total costs.",
              },
            ],
            steps: [
              {
                reasoning: "Shows the minimum output needed to avoid losses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Helps with planning prices, costs and target sales.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Shows minimum sales needed to cover all costs",
          },
        },
        {
          id: "cieibs-u1-fin-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A business sells units at $10 each with variable cost of $6 per unit and fixed costs of $3,000. (a) Calculate the contribution per unit. (b) Calculate the break-even point.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4, unit: "$" },
              { label: "b", answer: 750, unit: "units" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Contribution",
                statement: "Contribution = price - variable cost per unit.",
              },
            ],
            steps: [
              {
                reasoning: "Contribution = 10 - 6 = $4 per unit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "BEP = 3000 / 4 = 750 units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $4, b) 750 units",
          },
        },
        {
          id: "cieibs-u1-fin-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At the break-even point, a business makes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A loss" },
              { id: "b", text: "Maximum profit" },
              { id: "c", text: "Only enough to pay fixed costs" },
              { id: "d", text: "Zero profit and zero loss" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Break-even",
                statement: "Revenue equals total costs — no profit or loss.",
              },
            ],
            steps: [
              {
                reasoning: "At break-even revenue covers all costs exactly.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Zero profit and zero loss",
          },
        },
        {
          id: "cieibs-u1-fin-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Fixed costs = $6,000, price = $15, variable cost = $9 per unit. (a) Calculate the break-even point. (b) Calculate profit at 1,500 units sold. Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "BEP and profit",
                statement:
                  "BEP = FC / (P - VC); profit = revenue - total costs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Contribution = 15 - 9 = $6; BEP = 6000 / 6 = 1,000 units.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Revenue = 1500 x 15 = $22,500; costs = 6000 + 1500 x 9 = $19,500; profit = $3,000.",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "a) 1,000 units, b) $3,000",
          },
        },
        {
          id: "cieibs-u1-fin-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fixed costs are $2,500 and variable cost is $4 per unit. A business produces and sells 800 units at $10 each. (a) Calculate total costs. (b) Calculate profit.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5700, unit: "$" },
              { label: "b", answer: 2300, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total costs",
                statement:
                  "Total costs = fixed costs + (variable cost x quantity).",
              },
            ],
            steps: [
              {
                reasoning: "Total costs = 2500 + 4 x 800 = $5,700.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Revenue = 800 x 10 = $8,000; profit = 8000 - 5700 = $2,300.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $5,700, b) $2,300",
          },
        },
        {
          id: "cieibs-u1-fin-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A business makes a loss when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed costs fall" },
              { id: "b", text: "Total costs exceed revenue" },
              { id: "c", text: "Revenue exceeds total costs" },
              { id: "d", text: "Output equals the break-even point" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Loss",
                statement: "Occurs when total costs exceed revenue.",
              },
            ],
            steps: [
              {
                reasoning: "Costs above revenue produce a loss.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Total costs exceed revenue",
          },
        },
        {
          id: "cieibs-u1-fin-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the effect on the break-even point if a business raises its selling price while keeping costs unchanged.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "BEP sensitivity",
                statement:
                  "BEP = FC / (P - VC); a higher price raises contribution.",
              },
            ],
            steps: [
              {
                reasoning: "Higher price increases contribution per unit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Larger denominator means fewer units needed to cover fixed costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Therefore the break-even point falls — less output is needed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "BEP falls because contribution per unit rises",
          },
        },
        {
          id: "cieibs-u1-fin-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define revenue, fixed costs, variable costs, total costs, profit, break-even. (b) What is revenue? (c) Give two examples of fixed costs. (d) Give two examples of variable costs. (e) What is profit? (f) Fixed costs = $5,000, price = $10, variable cost = $7. Calculate the break-even point. (g) Calculate profit at 3,000 units. (h) Explain why a business might want to know its break-even point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Financial performance",
                statement: "Revenue, costs, profit, BEP.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Total income from sales.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) E.g. rent, insurance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) E.g. materials, direct labour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Revenue minus total costs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) BEP = 5000 / (10 - 7) = 1,667 units (accept 1667).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Revenue = 3000 x 10 = $30,000; costs = 5000 + 3000 x 7 = $26,000; profit = $4,000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Planning and target-setting — avoids losses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Revenue, costs, profit, break-even calculations.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-fin-notes",
      title: "Financial performance — notes",
      summary:
        "Revenue=price×qty; costs=fixed+variable; profit=revenue-costs; BEP=FC/(price-VC).",
      sections: [
        {
          heading: "Key idea",
          body: "Break-even shows minimum sales needed to avoid losses.",
        },
        {
          heading: "Profit",
          body: "Profit = revenue - total costs. Loss when costs exceed revenue.",
        },
      ],
    },
  ],
};
