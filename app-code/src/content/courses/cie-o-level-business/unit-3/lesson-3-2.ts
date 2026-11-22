import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olbus-u3-lesson-3-2",
  code: "3-2",
  title: "Inventory and Stock Control",
  goal: "I CAN explain inventory management and stock control methods.",
  standards: ["7100 3.2"],
  vocabulary: [
    { term: "Inventory", definition: "Stock of raw materials, work in progress and finished goods." },
    { term: "Stock control", definition: "Managing inventory levels to balance costs and availability." },
    { term: "Just-in-time (JIT)", definition: "Receiving materials only when needed in production." },
    { term: "Economic order quantity", definition: "Optimal order size balancing ordering and holding costs." },
    { term: "Stock holding cost", definition: "Cost of storing inventory (space, insurance, obsolescence)." },
    { term: "Stockout", definition: "Running out of stock, halting production or sales." },
  ],
  concepts: [
    {
      id: "olbus-u3-inventory",
      title: "Inventory management",
      skill: "Explain the trade-off between holding too much and too little stock.",
      lesson: {
        sections: [
          { heading: "The problem", body: "Too much stock = high holding costs (storage, insurance, waste). Too little = stockouts (production stops, lost sales). Inventory management finds the balance." },
          { heading: "Just-in-time", body: "JIT delivers materials exactly when needed — reduces holding costs but risks stockouts if suppliers fail." },
          { heading: "Reorder level", body: "The stock level at which a new order is placed — set above minimum stock to allow for delivery time." },
        ],
        keyFormulas: [
          { name: "Reorder level", statement: "Average daily usage × lead time + safety stock" },
        ],
        workedExample: {
          problem: "A factory uses 50 units/day, lead time is 4 days, safety stock is 100. Find reorder level.",
          solution: "Reorder level = (50 × 4) + 100 = 300 units.",
        },
      },
      questions: [
        {
          id: "olbus-u3-inv-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Just-in-time inventory means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ordering monthly" },
            { id: "b", text: "Large stockpiles" },
            { id: "c", text: "Materials arrive only when needed" },
            { id: "d", text: "Buying in bulk" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "JIT", statement: "On-demand delivery." }], steps: [{ reasoning: "Materials when needed.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u3-inv-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a stockout?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Stockout", statement: "Out of stock." }], steps: [
            { reasoning: "Running out of stock — halts production or sales.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Running out of stock, stopping production or sales." },
        },
        {
          id: "olbus-u3-inv-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the trade-off in inventory management.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Inventory trade-off", statement: "Too much vs too little." }], steps: [
            { reasoning: "Too much stock → high holding costs.", marks: 1, markCode: "AO2" },
            { reasoning: "Too little → stockouts and lost sales.", marks: 1, markCode: "AO2" },
            { reasoning: "Must balance both.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Balance holding costs against stockout risk." },
        },
        {
          id: "olbus-u3-inv-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Inventory review.",
          parts: [
            { label: "a", prompt: "Define inventory.", marks: 1 },
            { label: "b", prompt: "What is JIT?", marks: 1 },
            { label: "c", prompt: "Advantage and disadvantage of JIT?", marks: 2 },
            { label: "d", prompt: "Daily usage 30, lead time 5 days, safety 50. Reorder level?", marks: 2 },
            { label: "e", prompt: "Why is reorder level important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Inventory", statement: "JIT, reorder, trade-offs." },
          ], steps: [
            { part: "a", reasoning: "Stock of materials/WIP/finished goods.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Materials when needed.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Adv: low holding cost. Disadv: stockout risk.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "(30×5)+50 = 200.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Ensures stock arrives before running out.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Accounts for lead time.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) stock def (b) JIT def (c) adv/disadv (d) 200 (e) prevents stockout" },
        },
        {
          id: "olbus-u3-inv-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Inventory includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Raw materials, work in progress and finished goods" },
            { id: "b", text: "Only finished goods" },
            { id: "c", text: "Only machinery" },
            { id: "d", text: "Only cash" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Inventory", statement: "All stock types." }], steps: [{ reasoning: "Inventory covers materials, WIP and finished goods.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-inv-q6", difficulty: "core", totalMarks: 1,
          stem: "A reorder level is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The stock level at which a new order is placed" },
            { id: "b", text: "The delivery date of an order" },
            { id: "c", text: "The maximum stock the firm can hold" },
            { id: "d", text: "The cheapest available supplier" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Reorder level", statement: "Order trigger." }], steps: [{ reasoning: "Reorder level triggers a new order.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-inv-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Holding too much stock leads to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "High storage and insurance costs" },
            { id: "b", text: "Lower overall costs" },
            { id: "c", text: "Faster production" },
            { id: "d", text: "Guaranteed sales" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Holding costs", statement: "Cost of stock." }], steps: [{ reasoning: "Excess stock raises storage/insurance costs.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u3-inv-q8", difficulty: "core", totalMarks: 2,
          stem: "Daily usage is 40 units, lead time is 5 days and safety stock is 60 units. What is the reorder level?",
          response: { type: "numeric", parts: [{ label: "a", answer: 260, unit: "units" }] },
          markscheme: { principles: [{ kind: "formula", name: "Reorder level", statement: "Usage × lead time + safety." }], steps: [
            { part: "a", reasoning: "(40 × 5) + 60 = 200 + 60.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Reorder level = 260 units.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 260 units" },
        },
        {
          id: "olbus-u3-inv-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Daily usage is 25 units, lead time is 6 days and safety stock is 30 units. (a) What is the reorder level? (b) For how many days does the safety stock alone provide cover?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 180, unit: "units" },
            { label: "b", answer: 1.2, unit: "days" },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Reorder level", statement: "Usage × lead time + safety." }], steps: [
            { part: "a", reasoning: "(25 × 6) + 30 = 150 + 30 = 180.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "30 ÷ 25 = 1.2 days.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Safety stock covers 1.2 days.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 180 units; **(b)** 1.2 days" },
        },
        {
          id: "olbus-u3-inv-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage and one disadvantage of just-in-time (JIT) inventory.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "JIT", statement: "Trade-offs." }], steps: [
            { reasoning: "Advantage: low holding costs — materials arrive when needed.", marks: 1, markCode: "AO1" },
            { reasoning: "Disadvantage: risk of stockouts if suppliers fail.", marks: 1, markCode: "AO1" },
          ], finalAnswer: "Low holding costs but vulnerable to supplier failure/stockouts." },
        },
        {
          id: "olbus-u3-inv-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a business using JIT might still keep a small amount of safety stock.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Safety stock", statement: "JIT buffer." }], steps: [
            { reasoning: "Protects against supplier delays or failures.", marks: 1, markCode: "AO2" },
            { reasoning: "Prevents production stoppages and stockouts.", marks: 1, markCode: "AO2" },
            { reasoning: "Covers unexpected demand spikes.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Safety stock buffers JIT against delays, failures and demand spikes." },
        },
        {
          id: "olbus-u3-inv-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Running out of stock and halting production or sales is called a…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Batch" },
            { id: "b", text: "Stockout" },
            { id: "c", text: "Flow" },
            { id: "d", text: "Reorder level" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Stockout", statement: "Out of stock." }], steps: [{ reasoning: "Stockout = running out of stock.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Stockout" },
        },
        {
          id: "olbus-u3-inv-q13", difficulty: "core", totalMarks: 2,
          stem: "A firm places 10 orders per year and each order costs $50 to process. What is its total annual ordering cost?",
          response: { type: "numeric", parts: [{ label: "a", answer: 500, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Ordering cost", statement: "Orders × cost per order." }], steps: [
            { part: "a", reasoning: "10 × 50 = 500.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Annual ordering cost = $500.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $500" },
        },
        {
          id: "olbus-u3-inv-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Stock holding costs include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only wages" },
            { id: "b", text: "Tax on profit" },
            { id: "c", text: "Sales revenue" },
            { id: "d", text: "Storage space, insurance and obsolescence" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Holding cost", statement: "Cost of storing." }], steps: [{ reasoning: "Holding costs = storage, insurance, obsolescence.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u3-inv-q15", difficulty: "core", totalMarks: 2,
          stem: "Average stock on hand is valued at $8,000 and the annual holding cost rate is 20% of stock value. What is the annual holding cost?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1600, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Holding cost", statement: "Rate × stock value." }], steps: [
            { part: "a", reasoning: "20% × 8000 = 1600.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Holding cost = $1,600.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $1,600" },
        },
        {
          id: "olbus-u3-inv-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Inventory extended review.",
          parts: [
            { label: "a", prompt: "Define inventory.", marks: 1 },
            { label: "b", prompt: "What is just-in-time (JIT)?", marks: 1 },
            { label: "c", prompt: "Give one advantage and one disadvantage of JIT.", marks: 2 },
            { label: "d", prompt: "Daily usage 20 units, lead time 4 days, safety stock 40 units. Calculate the reorder level.", marks: 2 },
            { label: "e", prompt: "Why is the reorder level important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Inventory", statement: "JIT, reorder, trade-offs." },
          ], steps: [
            { part: "a", reasoning: "Stock of materials/WIP/finished goods.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Materials arrive when needed.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Adv: low holding cost. Disadv: stockout risk.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "(20 × 4) + 40 = 120.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Reorder level = 120.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Ensures orders placed before stock runs out.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Accounts for lead time.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) stock def (b) JIT def (c) adv/disadv (d) 120 (e) prevents stockout" },
        },
      ],
    },
    {
      id: "olbus-u3-productivity",
      title: "Productivity",
      skill: "Explain productivity and methods to improve it.",
      lesson: {
        sections: [
          { heading: "What is productivity?", body: "Output per unit of input — how efficiently resources are used. Higher productivity = more output for same input." },
          { heading: "Improving productivity", body: "- **Training**: better skilled workers.\n- **Technology**: automation, machinery.\n- **Motivation**: incentives, good management.\n- **Lean methods**: reduce waste, improve processes." },
          { heading: "Measuring", body: "Productivity = output / input. E.g. units produced per worker per hour." },
        ],
        keyFormulas: [
          { name: "Productivity", statement: "Output / Input" },
        ],
        workedExample: {
          problem: "A factory produces 1000 units with 10 workers in 8 hours. Productivity per worker-hour?",
          solution: "Productivity = 1000 / (10 × 8) = 12.5 units per worker-hour.",
        },
      },
      questions: [
        {
          id: "olbus-u3-prod-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Productivity is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Total output" },
            { id: "b", text: "Number of workers" },
            { id: "c", text: "Output per unit of input" },
            { id: "d", text: "Total cost" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Productivity", statement: "Output/input." }], steps: [{ reasoning: "Efficiency measure.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u3-prod-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two ways to improve productivity.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Improving productivity", statement: "Methods." }], steps: [
            { reasoning: "Training, technology, motivation, lean methods — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: training, technology, motivation, lean methods." },
        },
        {
          id: "olbus-u3-prod-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why improving productivity benefits a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Productivity benefits", statement: "Efficiency gains." }], steps: [
            { reasoning: "Lower unit costs → higher profit margins.", marks: 1, markCode: "AO2" },
            { reasoning: "More competitive pricing.", marks: 1, markCode: "AO2" },
            { reasoning: "Better resource utilisation.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Higher productivity lowers costs and improves competitiveness." },
        },
        {
          id: "olbus-u3-prod-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Productivity review.",
          parts: [
            { label: "a", prompt: "Define productivity.", marks: 1 },
            { label: "b", prompt: "Formula?", marks: 1 },
            { label: "c", prompt: "Name three improvement methods.", marks: 2 },
            { label: "d", prompt: "500 units, 5 workers, 10 hours. Productivity?", marks: 2 },
            { label: "e", prompt: "Why does productivity matter for competitiveness?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Productivity", statement: "Definition, formula, benefits." },
          ], steps: [
            { part: "a", reasoning: "Output per input.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Output / Input.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Three methods.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "500/(5×10) = 10 units/worker-hour.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Lower costs → lower prices.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Higher efficiency → competitiveness.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) output/input (b) formula (c) 3 methods (d) 10 (e) cost+competitiveness" },
        },
        {
          id: "olbus-u3-prod-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Productivity measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Number of employees" },
            { id: "b", text: "Total revenue" },
            { id: "c", text: "Total cost only" },
            { id: "d", text: "Output per unit of input" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Productivity", statement: "Output/input." }], steps: [{ reasoning: "Productivity = output per input.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u3-prod-q6", difficulty: "core", totalMarks: 1,
          stem: "Which of the following would improve productivity?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Increasing waste in the process" },
            { id: "b", text: "Training workers and investing in technology" },
            { id: "c", text: "Buying more raw materials only" },
            { id: "d", text: "Reducing output deliberately" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Improving productivity", statement: "Methods." }], steps: [{ reasoning: "Training and technology raise efficiency.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u3-prod-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Higher productivity typically leads to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Higher prices always" },
            { id: "b", text: "Lower unit costs and greater competitiveness" },
            { id: "c", text: "More waste" },
            { id: "d", text: "Lower quality" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Productivity benefits", statement: "Efficiency gains." }], steps: [{ reasoning: "Higher productivity lowers costs, boosting competitiveness.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Correct" },
        },
        {
          id: "olbus-u3-prod-q8", difficulty: "core", totalMarks: 2,
          stem: "A team produces 600 units in 8 hours using 5 workers. What is the output per worker-hour?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Productivity", statement: "Output / (workers × hours)." }], steps: [
            { part: "a", reasoning: "600 ÷ (5 × 8) = 600 ÷ 40.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "15 units per worker-hour.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 15 units" },
        },
        {
          id: "olbus-u3-prod-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A factory's output rises from 400 units to 500 units with the same input. (a) What is the absolute increase? (b) What is the percentage increase?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 100, unit: "units" },
            { label: "b", answer: 25, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Output growth", statement: "Increase and % change." }], steps: [
            { part: "a", reasoning: "500 - 400 = 100 units.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "100 ÷ 400 × 100 = 25%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "25% increase.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 100 units; **(b)** 25%" },
        },
        {
          id: "olbus-u3-prod-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain how motivating employees can improve productivity.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Motivation", statement: "Productivity link." }], steps: [
            { reasoning: "Motivated workers work faster and with fewer errors.", marks: 1, markCode: "AO2" },
            { reasoning: "Higher effort raises output per unit of input.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Motivation raises effort and efficiency, increasing output per input." },
        },
        {
          id: "olbus-u3-prod-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why a business might invest in labour-saving technology despite the high initial cost.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Technology", statement: "Productivity investment." }], steps: [
            { reasoning: "Machines produce more output per hour than labour.", marks: 1, markCode: "AO2" },
            { reasoning: "Reduces unit costs in the long run.", marks: 1, markCode: "AO2" },
            { reasoning: "Improves consistency and quality.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Technology raises output and lowers long-run unit costs despite upfront cost." },
        },
        {
          id: "olbus-u3-prod-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Productivity is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Output times input" },
            { id: "b", text: "Output plus input" },
            { id: "c", text: "Output divided by input" },
            { id: "d", text: "Input divided by output" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Productivity", statement: "Output / input." }], steps: [{ reasoning: "Productivity = output / input.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Correct" },
        },
        {
          id: "olbus-u3-prod-q13", difficulty: "core", totalMarks: 2,
          stem: "A worker produces 48 units in 6 hours. What is the output per hour?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Output rate", statement: "Output / time." }], steps: [
            { part: "a", reasoning: "48 ÷ 6 = 8.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "8 units per hour.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 8 units" },
        },
        {
          id: "olbus-u3-prod-q14", difficulty: "foundation", totalMarks: 1,
          stem: "One way to improve productivity is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Ignore quality checks" },
            { id: "b", text: "Store more stock" },
            { id: "c", text: "Slow down the production line" },
            { id: "d", text: "Use lean production methods that reduce waste" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Lean methods", statement: "Waste reduction." }], steps: [{ reasoning: "Lean methods cut waste, raising productivity.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Correct" },
        },
        {
          id: "olbus-u3-prod-q15", difficulty: "core", totalMarks: 2,
          stem: "Productivity rises from 10 units per worker-hour to 12 units per worker-hour. By how much does it increase?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2, unit: "units" }] },
          markscheme: { principles: [{ kind: "principle", name: "Productivity change", statement: "New - old." }], steps: [
            { part: "a", reasoning: "12 - 10 = 2.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Increase = 2 units per worker-hour.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 2 units" },
        },
        {
          id: "olbus-u3-prod-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Productivity extended review.",
          parts: [
            { label: "a", prompt: "Define productivity.", marks: 1 },
            { label: "b", prompt: "State the productivity formula.", marks: 1 },
            { label: "c", prompt: "Name three methods of improving productivity.", marks: 2 },
            { label: "d", prompt: "A team produces 300 units with 3 workers in 10 hours. Calculate productivity per worker-hour.", marks: 2 },
            { label: "e", prompt: "Why does productivity matter for competitiveness?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Productivity", statement: "Definition, formula, benefits." },
          ], steps: [
            { part: "a", reasoning: "Output per unit of input.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Output / Input.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Three methods.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "300 ÷ (3 × 10) = 10.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "10 units per worker-hour.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Lower costs → lower prices.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Higher efficiency → competitiveness.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) output/input (b) formula (c) 3 methods (d) 10 (e) cost+competitiveness" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u3-3-2-notes", title: "Inventory and productivity — notes", summary: "Stock control, JIT and productivity measurement.",
      sections: [
        { heading: "Inventory", body: "Balance holding costs vs stockout risk; JIT reduces storage but risks delays; reorder level prevents stockouts." },
        { heading: "Productivity", body: "Output/input; improve via training, technology, motivation, lean methods." },
      ] },
  ],
};
