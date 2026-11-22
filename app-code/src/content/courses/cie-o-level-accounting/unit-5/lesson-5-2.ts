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
            { id: "a", text: "Cost of sales + gross profit" },
            { id: "b", text: "Purchases - stock" },
            { id: "c", text: "Cost of sales - gross profit" },
            { id: "d", text: "Gross profit - expenses" },
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
        {
          id: "olacc-u5-mf-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Closing stock equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opening stock + purchases - cost of sales" },
            { id: "b", text: "Cost of sales - opening stock - purchases" },
            { id: "c", text: "Opening stock - purchases + cost of sales" },
            { id: "d", text: "Sales - gross profit" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Cost of sales", statement: "CoS = OS + P - CS." }], steps: [{ reasoning: "Rearranged for closing stock.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** OS + P - CoS" },
        },
        {
          id: "olacc-u5-mf-q6", difficulty: "core", totalMarks: 2,
          stem: "Cost of sales $14,000, gross profit $6,000. Enter the sales figure.",
          response: { type: "numeric", parts: [{ label: "Sales ($)", answer: 20000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Sales", statement: "Sales = CoS + GP." }], steps: [
            { reasoning: "$14000 + $6000 = $20000$.", working: "14000+6000", marks: 1, markCode: "M" },
            { reasoning: "Sales is $20,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "$20,000" },
        },
        {
          id: "olacc-u5-mf-q7", difficulty: "core", totalMarks: 2,
          stem: "Opening stock $2,000, purchases $15,000, cost of sales $14,000. Enter the closing stock.",
          response: { type: "numeric", parts: [{ label: "Closing stock ($)", answer: 3000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Closing stock", statement: "CS = OS + P - CoS." }], steps: [
            { reasoning: "$2000 + $15000 - $14000 = $3000$.", working: "2000+15000-14000", marks: 1, markCode: "M" },
            { reasoning: "Closing stock is $3,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3,000" },
        },
        {
          id: "olacc-u5-mf-q8", difficulty: "core", totalMarks: 1,
          stem: "Gross profit is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cost of sales - sales" },
            { id: "b", text: "Sales - cost of sales" },
            { id: "c", text: "Purchases - closing stock" },
            { id: "d", text: "Net profit + expenses" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Gross profit", statement: "GP = sales - CoS." }], steps: [{ reasoning: "GP is the margin on sales.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sales - CoS" },
        },
        {
          id: "olacc-u5-mf-q9", difficulty: "core", totalMarks: 2,
          stem: "Sales $25,000, cost of sales $15,000, expenses $4,000. Enter (a) gross profit and (b) net profit.",
          response: { type: "numeric", parts: [
            { label: "(a) Gross profit ($)", answer: 10000 },
            { label: "(b) Net profit ($)", answer: 6000 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "GP/NP", statement: "GP = S - CoS; NP = GP - E." }], steps: [
            { reasoning: "GP = $25000 - $15000 = $10000$.", working: "25000-15000", marks: 1, markCode: "M" },
            { reasoning: "NP = $10000 - $4000 = $6000$.", working: "10000-4000", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $10,000 (b) $6,000" },
        },
        {
          id: "olacc-u5-mf-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain the strategy for finding missing figures in incomplete records.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "method", name: "Strategy", statement: "List knowns, apply relationships." }], steps: [
            { reasoning: "List known figures and identify the missing one.", marks: 1, markCode: "M" },
            { reasoning: "Apply the relevant relationship equation forwards or backwards.", marks: 1, markCode: "A" },
          ], finalAnswer: "List knowns, identify missing, use relationship equations." },
        },
        {
          id: "olacc-u5-mf-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Sales $30,000, gross profit $9,000, opening stock $1,500, purchases $20,000. Enter (a) cost of sales and (b) closing stock.",
          response: { type: "numeric", parts: [
            { label: "(a) Cost of sales ($)", answer: 21000 },
            { label: "(b) Closing stock ($)", answer: 500 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Relationships", statement: "CoS = S - GP; CS = OS + P - CoS." }], steps: [
            { reasoning: "CoS = $30000 - $9000 = $21000$.", working: "30000-9000", marks: 1, markCode: "M" },
            { reasoning: "CS = $1500 + $20000 - $21000 = $500$.", working: "1500+20000-21000", marks: 1, markCode: "M" },
            { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $21,000 (b) $500" },
        },
        {
          id: "olacc-u5-mf-q12", difficulty: "challenge", totalMarks: 1,
          stem: "If purchases increase while sales, opening stock and closing stock stay the same, cost of sales will…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cannot be determined" },
            { id: "b", text: "Increase" },
            { id: "c", text: "Stay unchanged" },
            { id: "d", text: "Decrease" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Cost of sales", statement: "CoS = OS + P - CS." }], steps: [{ reasoning: "Higher purchases raise cost of sales.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Increase" },
        },
        {
          id: "olacc-u5-mf-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Cost of sales $18,000, net profit $5,000, expenses $7,000. Enter (a) sales and (b) gross profit.",
          response: { type: "numeric", parts: [
            { label: "(a) Sales ($)", answer: 30000 },
            { label: "(b) Gross profit ($)", answer: 12000 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Reverse calc", statement: "GP = NP + E; S = CoS + GP." }], steps: [
            { reasoning: "GP = $5000 + $7000 = $12000$.", working: "5000+7000", marks: 1, markCode: "M" },
            { reasoning: "Sales = $18000 + $12000 = $30000$.", working: "18000+12000", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $30,000 (b) $12,000" },
        },
        {
          id: "olacc-u5-mf-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Sales are $40,000 and cost of sales is 60% of sales. Expenses are $9,000. Find gross profit and net profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "GP/NP", statement: "GP = S - CoS; NP = GP - E." }], steps: [
            { reasoning: "CoS = 60% × $40000 = $24000$.", marks: 1, markCode: "M" },
            { reasoning: "GP = $40000 - $24000 = $16000$.", marks: 1, markCode: "M" },
            { reasoning: "NP = $16000 - $9000 = $7000$.", marks: 1, markCode: "M" },
            { reasoning: "Both figures correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "GP $16,000; NP $7,000" },
        },
        {
          id: "olacc-u5-mf-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Which equation is used to find purchases?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cost of sales + opening stock - closing stock" },
            { id: "b", text: "Sales - gross profit" },
            { id: "c", text: "Cost of sales - opening stock + closing stock" },
            { id: "d", text: "Net profit + expenses" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Purchases", statement: "P = CoS - OS + CS." }], steps: [{ reasoning: "Rearranged cost of sales formula.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** CoS - OS + CS" },
        },
        {
          id: "olacc-u5-mf-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Missing figures — extended review.",
          parts: [
            { label: "a", prompt: "State the cost of sales formula.", marks: 1 },
            { label: "b", prompt: "State the sales formula.", marks: 1 },
            { label: "c", prompt: "OS $1,000, P $8,000, CoS $6,000. Closing stock?", marks: 2 },
            { label: "d", prompt: "CoS $10,000, GP $5,000. Sales?", marks: 1 },
            { label: "e", prompt: "GP $9,000, expenses $3,000. NP?", marks: 1 },
            { label: "f", prompt: "Sales $20,000, CoS $12,000, P $10,000, CS $3,000. OS?", marks: 2 },
            { label: "g", prompt: "Which figure links GP and NP?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "formula", name: "Missing figures", statement: "All relationships." },
          ], steps: [
            { part: "a", reasoning: "CoS = OS + P - CS.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Sales = CoS + GP.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$3000.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$15000.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$6000.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "OS = CoS - P + CS = $5000$.", marks: 1, markCode: "M" },
            { part: "f", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "Expenses.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) OS+P-CS (b) CoS+GP (c) 3000 (d) 15000 (e) 6000 (f) 5000 (g) expenses" },
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
            { id: "a", text: "Gross profit - expenses" },
            { id: "b", text: "Revenue - tax" },
            { id: "c", text: "Sales - cost of sales" },
            { id: "d", text: "Assets - liabilities" },
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
        {
          id: "olacc-u5-gn-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Gross profit margin is expressed as a percentage of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sales" },
            { id: "b", text: "Net profit" },
            { id: "c", text: "Expenses" },
            { id: "d", text: "Cost of sales" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "GP margin", statement: "GP/sales × 100." }], steps: [{ reasoning: "Margin uses sales as base.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Sales" },
        },
        {
          id: "olacc-u5-gn-q6", difficulty: "core", totalMarks: 2,
          stem: "Sales $30,000, cost of sales $18,000, expenses $7,000. Enter (a) gross profit and (b) net profit.",
          response: { type: "numeric", parts: [
            { label: "(a) Gross profit ($)", answer: 12000 },
            { label: "(b) Net profit ($)", answer: 5000 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "GP/NP", statement: "GP = S - CoS; NP = GP - E." }], steps: [
            { reasoning: "GP = $30000 - $18000 = $12000$.", working: "30000-18000", marks: 1, markCode: "M" },
            { reasoning: "NP = $12000 - $7000 = $5000$.", working: "12000-7000", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $12,000 (b) $5,000" },
        },
        {
          id: "olacc-u5-gn-q7", difficulty: "core", totalMarks: 2,
          stem: "Gross profit $8,000, expenses $3,000. Enter the net profit.",
          response: { type: "numeric", parts: [{ label: "Net profit ($)", answer: 5000 }] },
          markscheme: { principles: [{ kind: "formula", name: "Net profit", statement: "NP = GP - expenses." }], steps: [
            { reasoning: "$8000 - $3000 = $5000$.", working: "8000-3000", marks: 1, markCode: "M" },
            { reasoning: "Net profit is $5,000.", marks: 1, markCode: "A" },
          ], finalAnswer: "$5,000" },
        },
        {
          id: "olacc-u5-gn-q8", difficulty: "core", totalMarks: 1,
          stem: "If expenses increase while gross profit stays the same, net profit will…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Decrease" },
            { id: "b", text: "Double" },
            { id: "c", text: "Stay unchanged" },
            { id: "d", text: "Increase" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Net profit", statement: "NP = GP - E." }], steps: [{ reasoning: "Higher expenses reduce net profit.", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Decrease" },
        },
        {
          id: "olacc-u5-gn-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Net profit $6,000, expenses $4,000, cost of sales $15,000. Enter (a) gross profit and (b) sales.",
          response: { type: "numeric", parts: [
            { label: "(a) Gross profit ($)", answer: 10000 },
            { label: "(b) Sales ($)", answer: 25000 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Reverse calc", statement: "GP = NP + E; S = GP + CoS." }], steps: [
            { reasoning: "GP = $6000 + $4000 = $10000$.", working: "6000+4000", marks: 1, markCode: "M" },
            { reasoning: "Sales = $10000 + $15000 = $25000$.", working: "10000+15000", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $10,000 (b) $25,000" },
        },
        {
          id: "olacc-u5-gn-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain the relationship between gross profit and net profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "GP to NP", statement: "NP = GP - expenses." }], steps: [
            { reasoning: "Gross profit is before expenses; net profit is after.", marks: 1, markCode: "M" },
            { reasoning: "Deduct expenses from GP to reach NP.", marks: 1, markCode: "A" },
          ], finalAnswer: "Net profit = gross profit minus expenses." },
        },
        {
          id: "olacc-u5-gn-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Sales $50,000, cost of sales $30,000, expenses $12,000. Enter (a) gross profit, (b) net profit and (c) total expenses as a percentage of sales.",
          response: { type: "numeric", parts: [
            { label: "(a) Gross profit ($)", answer: 20000 },
            { label: "(b) Net profit ($)", answer: 8000 },
            { label: "(c) Expenses (% of sales)", answer: 24 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "GP/NP/ratio", statement: "GP = S - CoS; NP = GP - E." }], steps: [
            { reasoning: "GP = $20000$; NP = $8000$.", working: "50000-30000; 20000-12000", marks: 1, markCode: "M" },
            { reasoning: "$12000/$50000 × 100 = 24%$.", working: "12000/50000*100", marks: 1, markCode: "M" },
            { reasoning: "All three correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $20,000 (b) $8,000 (c) 24%" },
        },
        {
          id: "olacc-u5-gn-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which item is deducted to move from gross profit to net profit?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Opening stock" },
            { id: "b", text: "Sales" },
            { id: "c", text: "Purchases" },
            { id: "d", text: "Expenses" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Net profit", statement: "NP = GP - expenses." }], steps: [{ reasoning: "Only expenses separate GP from NP.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Expenses" },
        },
        {
          id: "olacc-u5-gn-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Sales $45,000, cost of sales $27,000, expenses $8,000. Enter (a) gross profit and (b) net profit.",
          response: { type: "numeric", parts: [
            { label: "(a) Gross profit ($)", answer: 18000 },
            { label: "(b) Net profit ($)", answer: 10000 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "GP/NP", statement: "GP = S - CoS; NP = GP - E." }], steps: [
            { reasoning: "GP = $45000 - $27000 = $18000$.", working: "45000-27000", marks: 1, markCode: "M" },
            { reasoning: "NP = $18000 - $8000 = $10000$.", working: "18000-8000", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) $18,000 (b) $10,000" },
        },
        {
          id: "olacc-u5-gn-q14", difficulty: "challenge", totalMarks: 4,
          stem: "A business has sales $60,000 and cost of sales $36,000. Expenses recorded were $15,000, but this included $2,000 of the owner's private expenses. Find gross profit and adjusted net profit.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Adjustments", statement: "Private expenses added back." }], steps: [
            { reasoning: "GP = $60000 - $36000 = $24000$.", marks: 1, markCode: "M" },
            { reasoning: "Adjusted expenses = $15000 - $2000 = $13000$.", marks: 1, markCode: "M" },
            { reasoning: "NP = $24000 - $13000 = $11000$.", marks: 1, markCode: "M" },
            { reasoning: "Both figures correct.", marks: 1, markCode: "A" },
          ], finalAnswer: "GP $24,000; adjusted NP $11,000" },
        },
        {
          id: "olacc-u5-gn-q15", difficulty: "foundation", totalMarks: 1,
          stem: "The net profit margin is calculated using which figures?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gross profit and cost of sales" },
            { id: "b", text: "Sales and capital" },
            { id: "c", text: "Net profit and sales" },
            { id: "d", text: "Expenses and purchases" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "NP margin", statement: "NP/sales × 100." }], steps: [{ reasoning: "NP margin compares NP to sales.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** NP and sales" },
        },
        {
          id: "olacc-u5-gn-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Gross and net profit — extended review.",
          parts: [
            { label: "a", prompt: "State the GP formula.", marks: 1 },
            { label: "b", prompt: "State the NP formula.", marks: 1 },
            { label: "c", prompt: "Sales $35,000, CoS $20,000. GP?", marks: 1 },
            { label: "d", prompt: "GP $12,000, expenses $5,000. NP?", marks: 1 },
            { label: "e", prompt: "NP $4,000, expenses $6,000. GP?", marks: 1 },
            { label: "f", prompt: "GP $10,000, sales $25,000. CoS?", marks: 1 },
            { label: "g", prompt: "Sales $80,000, GP $32,000. GP margin?", marks: 2 },
            { label: "h", prompt: "Why is NP more useful than GP for assessing performance?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "formula", name: "Profit calcs", statement: "GP/NP relationships and margins." },
          ], steps: [
            { part: "a", reasoning: "GP = sales - CoS.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "NP = GP - expenses.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$15000.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "$7000.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "$10000.", marks: 1, markCode: "A" },
            { part: "f", reasoning: "$15000.", marks: 1, markCode: "A" },
            { part: "g", reasoning: "$32000/$80000 × 100 = 40%$.", marks: 1, markCode: "M" },
            { part: "g", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "h", reasoning: "Includes all expenses — true profit.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) S-CoS (b) GP-E (c) 15k (d) 7k (e) 10k (f) 15k (g) 40% (h) after all costs" },
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
