import type { Lesson } from "../../../types.ts";

export const lesson255: Lesson = {
  id: "cieibs-u1-lesson-1-5",
  code: "1-5",
  title: "Revenue, Costs and Profit",
  goal: "I CAN calculate revenue, costs, profit and break-even point.",
  standards: ["Cambridge IGCSE Business Studies 0450", "Paper 1: financial performance"],
  
  vocabulary: [
    { term: "Revenue", definition: "Total income from sales." },
    { term: "Fixed costs", definition: "Costs that don't change with output." },
    { term: "Variable costs", definition: "Costs that change with output." },
    { term: "Total costs", definition: "Fixed + variable costs." },
    { term: "Profit", definition: "Revenue minus total costs." },
    { term: "Break-even", definition: "Point where revenue equals total costs." },
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
          { name: "Break-even", statement: "fixed costs / (price - variable cost)" },
        ],
        workedExample: {
          problem: "Fixed costs = $5000, price = $10, variable cost = $6/unit. Find break-even point and profit at 2000 units.",
          solution: "BEP = 5000 / (10-6) = 1250 units. At 2000: Revenue = 2000×10 = $20000. Costs = 5000 + (2000×6) = $17000. Profit = $3000.",
        },
      },
      questions: [
        {
          id: "cieibs-u1-fin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is revenue?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Total income from sales"
                    },
                    {
                              "id": "b",
                              "text": "Total costs"
                    },
                    {
                              "id": "c",
                              "text": "Profit"
                    },
                    {
                              "id": "d",
                              "text": "A type of tax"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Revenue",
                              "statement": "Total sales income."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Revenue = total income from sales.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Total sales income"
},
        },
        {
          id: "cieibs-u1-fin-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between fixed and variable costs?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fixed vs variable",
                              "statement": "Constant vs changing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fixed costs don't change with output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Variable costs change with output.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Constant vs changing costs"
},
        },
        {
          id: "cieibs-u1-fin-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Fixed costs = $2000, price = $5, variable cost = $3. Find break-even point.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Break-even",
                              "statement": "BEP calculation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "BEP = fixed costs / (price - variable cost).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "BEP = 2000 / (5-3) = 1000 units.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 1000 units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1000 units"
},
        },
        {
          id: "cieibs-u1-fin-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define revenue, fixed costs, variable costs, total costs, profit, break-even. (b) What is revenue? (c) What are fixed costs? Give 2 examples. (d) What are variable costs? Give 2 examples. (e) What is profit? (f) What is break-even? (g) Calculate: FC=$3000, P=$8, VC=$5, Q=1000. (h) Find BEP and profit.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Financial performance",
                              "statement": "Revenue, costs, profit, BEP."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Total sales income.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Rent, insurance; don't change with output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Materials, labour; change with output.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Revenue - total costs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Revenue = total costs point.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Revenue=8000, costs=8000, profit=0.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) BEP=3000/(8-5)=1000 units.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Revenue, costs, profit, break-even."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u1-fin-notes",
      title: "Financial performance — notes",
      summary: "Revenue=price×qty; costs=fixed+variable; profit=revenue-costs; BEP=FC/(price-VC).",
      sections: [
        { heading: "Key idea", body: "Break-even shows minimum sales needed to avoid losses." },
        { heading: "Profit", body: "Profit = revenue - total costs. Loss when costs exceed revenue." },
      ],
    },
  ],
};
