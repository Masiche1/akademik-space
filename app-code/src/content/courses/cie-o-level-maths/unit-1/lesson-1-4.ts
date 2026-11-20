import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "olm-u1-lesson-1-4",
  code: "1-4",
  title: "Estimation and Bounds",
  goal: "I CAN estimate calculations and use upper/lower bounds.",
  standards: ["4024: number"],
  vocabulary: [
    { term: "Estimation", definition: "Approximate calculation using rounded values." },
    { term: "Upper bound", definition: "Largest possible value consistent with measurement." },
    { term: "Lower bound", definition: "Smallest possible value consistent with measurement." },
    { term: "Significant figures", definition: "Digits that carry meaning in a measurement." },
  ],
  concepts: [
    {
      id: "olm-u1-s4-estimate",
      title: "Estimation",
      skill: "Estimate calculations at O Level.",
      lesson: {
        sections: [
          { heading: "Why estimate", body: "Estimation checks whether a calculator answer is reasonable — a vital skill in exams. Round each number to 1 significant figure (or convenient values), then compute mentally. For $487\\times23.6$: estimate $500\\times24=12{,}000$. If the calculator gives 11,489, the estimate confirms it's plausible. Big discrepancies signal a keying error." },
          { heading: "Rounding strategy", body: "Round to values that make arithmetic easy: $487\\to500$, $23.6\\to25$ or $20$. For division $\\frac{819}{39.7}\\approx\\frac{800}{40}=20$. Don't over-round — $9.8\\times11.2$ estimated as $10\\times10=100$ is fine for a check but loses too much precision for an answer. Estimation is for sanity-checking, not final answers." },
        ],
        keyFormulas: [],
        workedExample: { problem: "Estimate $\\frac{3.87\\times48.2}{0.195}$.", solution: "$\\approx\\frac{4\\times50}{0.2}=\\frac{200}{0.2}=1000$. Check with calculator: $\\frac{186.534}{0.195}\\approx956$ — same order of magnitude ✓." },
      },
      questions: [
        {
          id: "olm-u1-s4-es-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A good estimate for $39.8\\times4.12$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "160" }, { id: "b", text: "400" }, { id: "c", text: "16" }, { id: "d", text: "1600" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round then compute." }], steps: [{ reasoning: "$40\\times4=160$.", marks: 1, markCode: "A" }], finalAnswer: "160" },
        },
        {
          id: "olm-u1-s4-es-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Estimate $\\frac{812}{39.4}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round both." }], steps: [
            { reasoning: "$\\approx\\frac{800}{40}=20$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ~20.", marks: 1, markCode: "A" },
          ], finalAnswer: "20" },
        },
        {
          id: "olm-u1-s4-es-q3", difficulty: "core", totalMarks: 3,
          stem: "A student calculates $7.89\\times12.3=9.68$. Without a calculator, explain whether this is reasonable.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reasonableness", statement: "Estimate first." }], steps: [
            { reasoning: "Estimate: $8\\times12=96$ or $8\\times10=80$.", marks: 1, markCode: "M" },
            { reasoning: "Actual: $7.89\\times12.3\\approx97$ — so 9.68 is far too small.", marks: 1, markCode: "M" },
            { reasoning: "Answer: not reasonable — likely misplaced decimal point.", marks: 1, markCode: "A" },
          ], finalAnswer: "Unreasonable — answer should be ~97" },
        },
        {
          id: "olm-u1-s4-es-q4", difficulty: "core", totalMarks: 4,
          stem: "Estimate $\\frac{0.046\\times3.9}{0.012}$ and compare with the exact value $14.95$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round each." }], steps: [
            { reasoning: "$\\approx\\frac{0.05\\times4}{0.01}=\\frac{0.2}{0.01}=20$.", marks: 1, markCode: "M" },
            { reasoning: "Exact $14.95$ is same order of magnitude as estimate 20 ✓.", marks: 1, markCode: "M" },
            { reasoning: "Estimate within ~25% — reasonable check.", marks: 1, markCode: "M" },
            { reasoning: "Answer: estimate ≈20, exact 14.95 — plausible.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈20 vs 14.95 — reasonable" },
        },
      ],
    },
    {
      id: "olm-u1-s4-bounds",
      title: "Upper and lower bounds",
      skill: "Apply error bounds to measurements at O Level.",
      lesson: {
        sections: [
          { heading: "What bounds mean", body: "A measurement like 12.5 cm (to 1 d.p.) could be anywhere from 12.45 to 12.55 — the bounds are half a unit either side of the last significant figure. Upper bound = measurement + half unit; lower bound = measurement − half unit. For 3 s.f. like 2.40, bounds are 2.395 to 2.405. These bounds are crucial for 'maximum/minimum possible' questions." },
          { heading: "Bounds in calculations", body: "For sums/differences, add/subtract the bounds directly. For products/quotients, the maximum possible result uses the largest values of positive quantities and the smallest of negative ones — work out each combination and take the extreme. For a rectangle with sides bounded, max area uses both upper bounds, min area both lower bounds. Always state units and check your bounds make sense." },
        ],
        keyFormulas: [
          { name: "Bounds", statement: "UB = value + half unit; LB = value − half unit" },
          { name: "Max product", statement: "Largest × largest for positive quantities" },
        ],
        workedExample: { problem: "A rectangle has length 8.2 cm and width 5.1 cm, each to 1 d.p. Find the bounds of its area.", solution: "Length bounds: 8.15–8.25; width: 5.05–5.15. Max area: $8.25\\times5.15=42.4875$ cm²; min: $8.15\\times5.05=41.1575$ cm². Bounds: 41.1575 to 42.4875 cm²." },
      },
      questions: [
        {
          id: "olm-u1-s4-bo-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The upper bound of 3.45 (to 2 d.p.) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3.455" }, { id: "b", text: "3.5" }, { id: "c", text: "3.46" }, { id: "d", text: "3.454" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Upper bound", statement: "+ half unit." }], steps: [{ reasoning: "Half of 0.01 is 0.005 → UB $=3.455$.", marks: 1, markCode: "A" }], finalAnswer: "3.455" },
        },
        {
          id: "olm-u1-s4-bo-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the lower bound of 127 kg (to nearest kg).",
          response: { type: "numeric", parts: [{ label: "a", answer: 126.5 }] },
          markscheme: { principles: [{ kind: "property", name: "Lower bound", statement: "− half unit." }], steps: [
            { reasoning: "Half of 1 kg is 0.5 → LB $=126.5$ kg.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 126.5 kg.", marks: 1, markCode: "A" },
          ], finalAnswer: "126.5 kg" },
        },
        {
          id: "olm-u1-s4-bo-q3", difficulty: "core", totalMarks: 3,
          stem: "A length is measured as 15.6 m (to 1 d.p.). What is the maximum possible error?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Error bound", statement: "Half unit." }], steps: [
            { reasoning: "Max error = half of 0.1 = 0.05 m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\pm0.05$ m.", marks: 1, markCode: "M" },
            { reasoning: "Check: bounds 15.55 to 15.65, both round to 15.6 ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\pm0.05$ m" },
        },
        {
          id: "olm-u1-s4-bo-q4", difficulty: "core", totalMarks: 4,
          stem: "The sides of a square are each 7.3 cm to 1 d.p. Find the upper and lower bounds of its perimeter.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Bounds in calculation", statement: "Add bounds." }], steps: [
            { reasoning: "Side bounds: 7.25 to 7.35 cm.", marks: 1, markCode: "M" },
            { reasoning: "Max perimeter: $4\\times7.35=29.4$ cm; min: $4\\times7.25=29.0$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Bounds: 29.0 to 29.4 cm.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "29.0 to 29.4 cm" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u1-s4-est-notes", title: "Estimation and bounds — notes", summary: "Sanity checks and error intervals.",
      sections: [
        { heading: "Estimation", body: "Round to 1 s.f. and compute mentally; use to check calculator answers." },
        { heading: "Bounds", body: "UB/LB = value ± half unit of last digit; combine bounds for max/min results." },
      ] },
  ],
};
