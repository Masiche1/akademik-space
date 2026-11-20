import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olec-u3-lesson-3-1",
  code: "3-1",
  title: "Production and Productivity",
  goal: "I CAN explain production, productivity and the law of diminishing returns.",
  standards: ["2281 3.1"],
  vocabulary: [
    { term: "Production", definition: "Transforming inputs into outputs." },
    { term: "Productivity", definition: "Output per unit of input." },
    { term: "Total product", definition: "Total output produced." },
    { term: "Marginal product", definition: "Additional output from one more unit of input." },
    { term: "Diminishing returns", definition: "Each additional input adds less output." },
    { term: "Fixed factor", definition: "Input that doesn't change with output (factory size)." },
    { term: "Variable factor", definition: "Input that changes with output (labour, materials)." },
  ],
  concepts: [
    {
      id: "olec-u3-production",
      title: "Production and productivity",
      skill: "Explain production, productivity and diminishing returns.",
      lesson: {
        sections: [
          { heading: "Production", body: "Combining factors of production (land, labour, capital) to create goods/services. Total product = total output." },
          { heading: "Productivity", body: "Output per unit input. Higher productivity = more efficient. Improved by better technology, training, organisation." },
          { heading: "Diminishing returns", body: "With fixed factors (e.g. factory size), adding more variable factors (workers) eventually yields smaller increases in output — marginal product declines." },
        ],
        keyFormulas: [
          { name: "Productivity", statement: "Total output / Total input" },
          { name: "Marginal product", statement: "Change in output / Change in input" },
        ],
        workedExample: {
          problem: "A factory produces 1000 units with 10 workers. Productivity? If workers increase to 20 but output only reaches 1500, what happens?",
          solution: "Initial productivity = 100/unit. New = 75/unit — productivity fell, showing diminishing returns.",
        },
      },
      questions: [
        {
          id: "olec-u3-prod-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Productivity is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Output per unit of input" }, { id: "b", text: "Total output" }, { id: "c", text: "Number of workers" }, { id: "d", text: "Total cost" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Productivity", statement: "Output/input." }], steps: [{ reasoning: "Efficiency measure.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u3-prod-q2", difficulty: "core", totalMarks: 2,
          stem: "Define diminishing returns.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Diminishing returns", statement: "Declining marginal product." }], steps: [
            { reasoning: "Each additional input adds less output.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Each extra unit of variable input adds less output when fixed factors are constant." },
        },
        {
          id: "olec-u3-prod-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why diminishing returns occurs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Diminishing returns", statement: "Fixed factors." }], steps: [
            { reasoning: "Fixed factors (space, machinery) become crowded.", marks: 1, markCode: "AO2" },
            { reasoning: "Extra workers have less to work with.", marks: 1, markCode: "AO2" },
            { reasoning: "Each additional worker adds less output.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Fixed factors become crowded — extra inputs yield less additional output." },
        },
        {
          id: "olec-u3-prod-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Production review.",
          parts: [
            { label: "a", prompt: "Define production.", marks: 1 },
            { label: "b", prompt: "Define productivity.", marks: 1 },
            { label: "c", prompt: "Formula for productivity?", marks: 1 },
            { label: "d", prompt: "Fixed vs variable factors?", marks: 2 },
            { label: "e", prompt: "Explain diminishing returns.", marks: 2 },
            { label: "f", prompt: "How to improve productivity?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Production", statement: "Concepts and applications." },
          ], steps: [
            { part: "a", reasoning: "Transforming inputs to outputs.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Output per input.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Output / Input.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Fixed=constant; variable=changes.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Extra inputs add less output.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            { part: "f", reasoning: "Training, technology, better organisation.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Clear methods.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) def (b) def (c) formula (d) fixed/var (e) dim returns (f) methods" },
        },
      ],
    },
    {
      id: "olec-u3-costs",
      title: "Costs of Production",
      skill: "Distinguish between fixed, variable and total costs.",
      lesson: {
        sections: [
          { heading: "Fixed costs", body: "Don't change with output: rent, insurance, salaried managers. Total fixed cost stays constant regardless of production level." },
          { heading: "Variable costs", body: "Change with output: raw materials, hourly wages, packaging. Total variable cost increases with production." },
          { heading: "Total cost", body: "Total cost = fixed costs + variable costs. Average cost = total cost / output." },
        ],
        keyFormulas: [
          { name: "Total cost", statement: "Fixed costs + Variable costs" },
          { name: "Average cost", statement: "Total cost / Quantity produced" },
        ],
        workedExample: {
          problem: "Fixed costs $1000, variable cost $5/unit, produce 200 units. Total cost? Average cost?",
          solution: "TC = 1000 + (5×200) = $2000. AC = 2000/200 = $10/unit.",
        },
      },
      questions: [
        {
          id: "olec-u3-co-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Fixed costs are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Costs that don't change with output" }, { id: "b", text: "Costs per unit" }, { id: "c", text: "Costs that increase with output" }, { id: "d", text: "Total costs" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Fixed costs", statement: "Constant." }], steps: [{ reasoning: "Don't vary with output.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olec-u3-co-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two examples of variable costs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Variable costs", statement: "Output-dependent." }], steps: [
            { reasoning: "Raw materials, hourly wages, packaging — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: raw materials, hourly wages, packaging, energy." },
        },
        {
          id: "olec-u3-co-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Fixed costs $5000, variable cost $10/unit, produce 500 units. Calculate total and average cost.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cost calc", statement: "TC and AC." }], steps: [
            { reasoning: "TC = 5000 + (10×500) = $10,000.", marks: 1, markCode: "AO2" },
            { reasoning: "AC = 10000/500 = $20/unit.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct method.", marks: 1, markCode: "AO2" },
            { reasoning: "Both correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "TC $10,000; AC $20/unit" },
        },
        {
          id: "olec-u3-co-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Costs review.",
          parts: [
            { label: "a", prompt: "Define fixed costs.", marks: 1 },
            { label: "b", prompt: "Define variable costs.", marks: 1 },
            { label: "c", prompt: "Two examples of each?", marks: 2 },
            { label: "d", prompt: "Total cost formula?", marks: 1 },
            { label: "e", prompt: "FC $2000, VC $8/unit, 300 units. TC & AC?", marks: 2 },
            { label: "f", prompt: "Why does average cost fall with more output?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Costs", statement: "Types and calculation." },
          ], steps: [
            { part: "a", reasoning: "Constant regardless of output.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Change with output.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Fixed: rent/insurance; variable: materials/wages.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both pairs.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "FC + VC.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "TC=4400, AC=14.67.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "f", reasoning: "Fixed costs spread over more units.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) fixed (b) variable (c) examples (d) TC=FC+VC (e) 4400/14.67 (f) spread fixed" },
        },
      ],
    },
  ],
  notes: [
    { id: "olec-u3-3-1-notes", title: "Production and costs — notes", summary: "Productivity, diminishing returns, fixed/variable costs.",
      sections: [
        { heading: "Production", body: "Output/input = productivity; diminishing returns when fixed factors crowd." },
        { heading: "Costs", body: "Fixed = constant; variable = per unit; TC = FC + VC; AC = TC/output." },
      ] },
  ],
};
