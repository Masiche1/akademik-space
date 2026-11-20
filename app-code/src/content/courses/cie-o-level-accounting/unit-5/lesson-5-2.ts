import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olacc-u5-lesson-5-2",
  code: "5-2",
  title: "Calculating Missing Figures",
  goal: "I CAN find missing sales, purchases, stock and profit figures from incomplete records.",
  standards: ["7706 5.2"],
  vocabulary: [
    { term: "Gross profit", definition: "Sales - cost of sales." },
    { term: "Cost of sales", definition: "Opening stock + purchases - closing stock." },
    { term: "Net profit", definition: "Gross profit - expenses." },
    { term: "Stock adjustments", definition: "Changes in inventory affecting cost of sales." },
    { term: "Credit transactions", definition: "Sales/purchases not yet paid." },
  ],
  concepts: [
    {
      id: "olacc-u5-missing",
      title: "Finding missing figures",
      skill: "Use relationships between figures to find unknowns.",
      lesson: {
        sections: [
          { heading: "Key relationships", body: "- Sales = cost of sales + gross profit\n- Cost of sales = opening stock + purchases - closing stock\n- Net profit = gross profit - expenses\n- Closing stock = opening stock + purchases - cost of sales" },
          { heading: "Strategy", body: "List what you know, identify what's missing, use the relationship equations to solve. Work backwards from profit or forwards from sales." },
          { heading: "Example", body: "Sales $20,000, GP $6,000 → CoS = $14,000. If opening stock $2,000 and purchases $15,000 → closing stock = 2000+15000-14000 = $3,000." },
        ],
        keyFormulas: [
          { name: "Relationships", statement: "Sales = CoS + GP; CoS = OS + P - CS" },
        ],
        workedExample: {
          problem: "Gross profit $5000, cost of sales $12000. Find sales.",
          solution: "Sales = CoS + GP = 12000 + 5000 = $17,000.",
        },
      },
      questions: [
        {
          id: "olacc-u5-mf-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Sales equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cost of sales + gross profit" }, { id: "b", text: "Cost of sales - gross profit" }, { id: "c", text: "Gross profit - expenses" }, { id: "d", text: "Purchases - stock" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Relationships", statement: "Sales = CoS + GP." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** CoS + GP" },
        },
        {
          id: "olacc-u5-mf-q2", difficulty: "core", totalMarks: 2,
          stem: "CoS $8000, GP $3000. Find sales.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Sales", statement: "CoS + GP." }], steps: [
            { reasoning: "$8000 + $3000 = $11,000.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$11,000" },
        },
        {
          id: "olacc-u5-mf-q3", difficulty: "challenge", totalMarks: 4,
          stem: "OS $1000, purchases $9000, CoS $7000. Find closing stock.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Closing stock", statement: "OS+P-CoS." }], steps: [
            { reasoning: "CS = OS + P - CoS.", marks: 1, markCode: "M" },
            { reasoning: "$1000 + $9000 - $7000 = $3000.", marks: 1, markCode: "M" },
            { reasoning: "Correct formula.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,000" },
        },
        {
          id: "olacc-u5-mf-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Missing figures review.",
          parts: [
            { label: "a", prompt: "Sales = ?", marks: 1 },
            { label: "b", prompt: "CoS = ?", marks: 1 },
            { label: "c", prompt: "Sales $25k, CoS $15k. GP?", marks: 1 },
            { label: "d", prompt: "GP $5k, expenses $2k. NP?", marks: 1 },
            { label: "e", prompt: "OS $2k, P $12k, CS $4k. CoS?", marks: 2 },
            { label: "f", prompt: "CoS $9k, GP $4k. Sales?", marks: 1 },
            { label: "g", prompt: "OS $1k, purchases $7k, CoS $6k. CS?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Missing figures", statement: "Relationship equations." },
          ], steps: [
            { part: "a", reasoning: "CoS + GP.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "OS + P - CS.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$10,000.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$3,000.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$10,000.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "$13,000.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "$2,000.", marks: 1, markCode: "M" },
            { part: "g", reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) CoS+GP (b) OS+P-CS (c) 10k (d) 3k (e) 10k (f) 13k (g) 2k" },
        },
      ],
    },
    {
      id: "olacc-u5-gpnp",
      title: "Gross and net profit calculations",
      skill: "Calculate gross profit and net profit for incomplete records.",
      lesson: {
        sections: [
          { heading: "Gross profit", body: "GP = sales - cost of sales. Cost of sales from stock/purchases or given directly." },
          { heading: "Net profit", body: "NP = GP - expenses. Expenses may be given or calculated from capital changes." },
          { heading: "Combining", body: "Often both needed: find GP from sales/CoS, then NP from GP minus expenses — or reverse: find NP from capital accounts then work to GP." },
        ],
        keyFormulas: [
          { name: "GP/NP", statement: "GP = Sales - CoS; NP = GP - Expenses" },
        ],
        workedExample: {
          problem: "Sales $30,000, CoS $18,000, expenses $7,000. Find GP and NP.",
          solution: "GP = 30000-18000 = $12,000. NP = 12000-7000 = $5,000.",
        },
      },
      questions: [
        {
          id: "olacc-u5-gn-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Net profit equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gross profit - expenses" }, { id: "b", text: "Sales - cost of sales" }, { id: "c", text: "Revenue - tax" }, { id: "d", text: "Assets - liabilities" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Net profit", statement: "GP - expenses." }], steps: [{ reasoning: "GP minus expenses.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** GP - expenses" },
        },
        {
          id: "olacc-u5-gn-q2", difficulty: "core", totalMarks: 2,
          stem: "Sales $20,000, CoS $12,000, expenses $5,000. Find NP.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "NP", statement: "GP - expenses." }], steps: [
            { reasoning: "GP = 8000; NP = 8000-5000 = $3000.", marks: 1, markCode: "M" },
            { reasoning: "Correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,000" },
        },
        {
          id: "olacc-u5-gn-q3", difficulty: "challenge", totalMarks: 4,
          stem: "NP from capital = $4000, expenses = $6000. Find GP.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reverse calc", statement: "GP = NP + expenses." }], steps: [
            { reasoning: "GP = NP + expenses.", marks: 1, markCode: "M" },
            { reasoning: "$4000 + $6000 = $10,000.", marks: 1, markCode: "M" },
            { reasoning: "Correct formula.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "$10,000" },
        },
        {
          id: "olacc-u5-gn-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Profit calculations review.",
          parts: [
            { label: "a", prompt: "GP formula?", marks: 1 },
            { label: "b", prompt: "NP formula?", marks: 1 },
            { label: "c", prompt: "Sales $40k, CoS $25k. GP?", marks: 1 },
            { label: "d", prompt: "GP $10k, exp $4k. NP?", marks: 1 },
            { label: "e", prompt: "NP $5k, exp $3k. GP?", marks: 2 },
            { label: "f", prompt: "GP $8k, sales $20k. CoS?", marks: 2 },
            { label: "g", prompt: "CoS $15k, GP $6k. Sales?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Profit calcs", statement: "GP/NP relationships." },
          ], steps: [
            { part: "a", reasoning: "Sales - CoS.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "GP - expenses.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$15,000.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$6,000.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$8,000.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "$12,000.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "$21,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) S-CoS (b) GP-E (c) 15k (d) 6k (e) 8k (f) 12k (g) 21k" },
        },
      ],
    },
  ],
  notes: [
    { id: "olacc-u5-5-2-notes", title: "Missing figures — notes", summary: "Using relationships to find unknown sales, stock, profit figures.",
      sections: [
        { heading: "Relationships", body: "Sales = CoS + GP; CoS = OS + P - CS; NP = GP - expenses." },
        { heading: "Strategy", body: "List knowns, identify missing, apply equations forwards or backwards." },
      ] },
  ],
};
