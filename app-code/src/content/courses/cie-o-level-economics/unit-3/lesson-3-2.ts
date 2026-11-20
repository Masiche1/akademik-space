import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olec-u3-lesson-3-2",
  code: "3-2",
  title: "Revenue and Profit",
  goal: "I CAN calculate total revenue, average revenue and profit.",
  standards: ["2281 3.2"],
  vocabulary: [
    { term: "Total revenue (TR)", definition: "Total income from sales." },
    { term: "Average revenue (AR)", definition: "Revenue per unit sold." },
    { term: "Marginal revenue (MR)", definition: "Additional revenue from one more unit." },
    { term: "Profit", definition: "Total revenue minus total cost." },
    { term: "Normal profit", definition: "Minimum profit needed to keep resources in current use." },
    { term: "Supernormal profit", definition: "Profit above normal profit." },
    { term: "Loss", definition: "When total cost exceeds total revenue." },
  ],
  concepts: [
    {
      id: "olec-u3-revenue",
      title: "Revenue and profit",
      skill: "Calculate TR, AR, MR and profit for a firm.",
      lesson: {
        sections: [
          { heading: "Revenue types", body: "- **Total revenue** = price × quantity.\n- **Average revenue** = TR / quantity (= price).\n- **Marginal revenue** = change in TR / change in quantity." },
          { heading: "Profit", body: "Profit = TR - TC. Normal profit = minimum to keep resources employed. Supernormal = above normal. Loss = TC > TR." },
          { heading: "Maximising profit", body: "Firms maximise profit where marginal revenue = marginal cost (MR = MC)." },
        ],
        keyFormulas: [
          { name: "TR", statement: "Price × Quantity" },
          { name: "Profit", statement: "TR - TC" },
          { name: "MR=MC", statement: "Profit maximisation condition" },
        ],
        workedExample: {
          problem: "Price $10, sell 500 units. TR? Profit if TC = $4000?",
          solution: "TR = 10×500 = $5000. Profit = 5000-4000 = $1000.",
        },
      },
      questions: [
        {
          id: "olec-u3-rv-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Total revenue equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Price × quantity" }, { id: "b", text: "Price + quantity" }, { id: "c", text: "Cost × quantity" }, { id: "d", text: "Profit × quantity" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "TR", statement: "P×Q." }], steps: [{ reasoning: "Correct formula.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u3-rv-q2", difficulty: "core", totalMarks: 2,
          stem: "Price $20, sell 300 units, TC $5000. Profit?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit", statement: "TR - TC." }], steps: [
            { reasoning: "TR = 6000; profit = 6000-5000 = $1000.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "$1,000" },
        },
        {
          id: "olec-u3-rv-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why firms maximise profit where MR = MC.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Profit max", statement: "MR=MC." }], steps: [
            { reasoning: "If MR > MC, produce more (adds profit).", marks: 1, markCode: "AO2" },
            { reasoning: "If MR < MC, produce less (saves money).", marks: 1, markCode: "AO2" },
            { reasoning: "MR = MC is optimal point.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "MR=MC maximises profit — produce until marginal benefit equals marginal cost." },
        },
        {
          id: "olec-u3-rv-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Revenue and profit review.",
          parts: [
            { label: "a", prompt: "TR formula?", marks: 1 },
            { label: "b", prompt: "AR vs MR?", marks: 2 },
            { label: "c", prompt: "Profit formula?", marks: 1 },
            { label: "d", prompt: "P=$15, Q=400, TC=$4500. TR & profit?", marks: 2 },
            { label: "e", prompt: "Normal vs supernormal profit?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Revenue/profit", statement: "Concepts and calculation." },
          ], steps: [
            { part: "a", reasoning: "P × Q.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "AR=price; MR=change in TR.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "TR - TC.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "TR=6000, profit=1500.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Normal=minimum to stay; supernormal=above normal.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Both defined.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) TR=P×Q (b) AR vs MR (c) TR-TC (d) 6000/1500 (e) normal vs supernormal" },
        },
      ],
    },
    {
      id: "olec-u3-mc",
      title: "Marginal Cost and Revenue",
      skill: "Understand marginal concepts and their role in decision-making.",
      lesson: {
        sections: [
          { heading: "Marginal cost", body: "MC = change in total cost / change in quantity. The cost of producing one more unit." },
          { heading: "Marginal revenue", body: "MR = change in total revenue / change in quantity. The revenue from selling one more unit." },
          { heading: "Decision rule", body: "Produce more while MR > MC. Stop when MR = MC. This maximises profit." },
        ],
        keyFormulas: [
          { name: "MC", statement: "ΔTC / ΔQ" },
          { name: "MR", statement: "ΔTR / ΔQ" },
        ],
        workedExample: {
          problem: "TC rises from $5000 to $5500 when output increases 100→110. MC? If MR = $60, should output increase?",
          solution: "MC = 500/10 = $50. MR ($60) > MC ($50) → yes, produce more.",
        },
      },
      questions: [
        {
          id: "olec-u3-mcr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Marginal cost is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cost of producing one more unit" }, { id: "b", text: "Total cost" }, { id: "c", text: "Average cost" }, { id: "d", text: "Fixed cost" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "MC", statement: "Extra unit cost." }], steps: [{ reasoning: "Marginal = extra.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u3-mcr-q2", difficulty: "core", totalMarks: 2,
          stem: "TC rises $200 when output increases 20 units. MC?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "MC calc", statement: "ΔTC/ΔQ." }], steps: [
            { reasoning: "MC = 200/20 = $10.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "$10" },
        },
        {
          id: "olec-u3-mcr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the decision rule MR = MC.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "MR=MC", statement: "Profit max." }], steps: [
            { reasoning: "Produce while MR > MC (adds profit).", marks: 1, markCode: "AO2" },
            { reasoning: "Stop when MR = MC (optimal).", marks: 1, markCode: "AO2" },
            { reasoning: "If MR < MC, reduce output.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Produce until marginal revenue equals marginal cost — maximises profit." },
        },
        {
          id: "olec-u3-mcr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Marginal concepts review.",
          parts: [
            { label: "a", prompt: "Define MC.", marks: 1 },
            { label: "b", prompt: "Define MR.", marks: 1 },
            { label: "c", prompt: "MC formula?", marks: 1 },
            { label: "d", prompt: "MR formula?", marks: 1 },
            { label: "e", prompt: "TC +$300, Q +30. MC?", marks: 1 },
            { label: "f", prompt: "If MR=$15, MC=$10, produce more?", marks: 2 },
            { label: "g", prompt: "Why MR=MC maximises profit?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Marginal", statement: "MC, MR, decision rule." },
          ], steps: [
            { part: "a", reasoning: "Cost of extra unit.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Revenue from extra unit.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "ΔTC/ΔQ.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "ΔTR/ΔQ.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "$10.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Yes — MR>MC adds profit.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Correct decision.", marks: 1, markCode: "AO3" },
            { part: "g", reasoning: "Produce until marginal benefit = marginal cost.", marks: 1, markCode: "AO2" },
            { part: "g", reasoning: "Clear reasoning.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) MC def (b) MR def (c) ΔTC/ΔQ (d) ΔTR/ΔQ (e) 10 (f) yes (g) optimal" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u3-3-2-notes", title: "Revenue and profit — notes", summary: "TR, AR, MR and profit maximisation.",
      sections: [
        { heading: "Revenue", body: "TR=P×Q; AR=price; MR=ΔTR/ΔQ. Profit=TR-TC." },
        { heading: "Decision", body: "Produce while MR>MC; stop at MR=MC — maximises profit." },
      ] },
  ],
};
