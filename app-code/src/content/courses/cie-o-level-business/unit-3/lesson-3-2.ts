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
            { id: "a", text: "Materials arrive only when needed" }, { id: "b", text: "Large stockpiles" }, { id: "c", text: "Ordering monthly" }, { id: "d", text: "Buying in bulk" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "JIT", statement: "On-demand delivery." }], steps: [{ reasoning: "Materials when needed.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
            { id: "a", text: "Output per unit of input" }, { id: "b", text: "Total output" }, { id: "c", text: "Number of workers" }, { id: "d", text: "Total cost" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Productivity", statement: "Output/input." }], steps: [{ reasoning: "Efficiency measure.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
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
