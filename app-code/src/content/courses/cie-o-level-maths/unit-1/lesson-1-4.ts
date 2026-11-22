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
            { id: "a", text: "16" },
            { id: "b", text: "400" },
            { id: "c", text: "160" },
            { id: "d", text: "1600" },
          ], correctChoiceId: "c" },
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
        {
          id: "olm-u1-s4-es-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A good estimate for $198+312$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "600" },
            { id: "b", text: "400" },
            { id: "c", text: "550" },
            { id: "d", text: "500" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round to convenient values." }], steps: [{ reasoning: "$200+300=500$ (exact is 510).", marks: 1, markCode: "A" }], finalAnswer: "500" },
        },
        {
          id: "olm-u1-s4-es-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Estimate $9.8\\times11.2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 100 }] },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round each number first." }], steps: [
            { reasoning: "$9.8\\approx10$ and $11.2\\approx10$, so estimate $10\\times10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ~100.", marks: 1, markCode: "A" },
          ], finalAnswer: "100" },
        },
        {
          id: "olm-u1-s4-es-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Estimate $\\frac{48.6}{5.1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round both numbers." }], steps: [
            { reasoning: "$\\approx\\frac{50}{5}=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ~10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u1-s4-es-q8", difficulty: "core", totalMarks: 1,
          stem: "Which is the best estimate for $0.49\\times10.2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "50" },
            { id: "b", text: "0.05" },
            { id: "c", text: "5" },
            { id: "d", text: "0.5" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round then multiply." }], steps: [{ reasoning: "$0.5\\times10=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olm-u1-s4-es-q9", difficulty: "core", totalMarks: 3,
          stem: "Estimate $\\sqrt{48}$ to the nearest integer.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Compare with nearby perfect squares." }], steps: [
            { reasoning: "$48$ is just below $49=7^2$, so $\\sqrt{48}\\approx7$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $6^2=36$ and $7^2=49$; 48 is much closer to 49.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u1-s4-es-q10", difficulty: "core", totalMarks: 3,
          stem: "A student estimates $49\\times31\\approx1500$. Explain whether this is reasonable and find the exact value.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Reasonableness", statement: "Estimate first, compare." }], steps: [
            { reasoning: "Estimate: $50\\times30=1500$ — same as the student's estimate.", marks: 1, markCode: "M" },
            { reasoning: "Exact: $49\\times31=1519$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: reasonable — estimate 1500 is very close to 1519.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reasonable; exact value 1519" },
        },
        {
          id: "olm-u1-s4-es-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Estimate $(19.8)^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 400 }] },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round to a convenient value." }], steps: [
            { reasoning: "$19.8\\approx20$.", marks: 1, markCode: "M" },
            { reasoning: "$20^2=400$.", marks: 1, markCode: "M" },
            { reasoning: "Since 19.8 is very close to 20, the estimate is tight.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ~400 (exact 392.04).", marks: 1, markCode: "A" },
          ], finalAnswer: "400" },
        },
        {
          id: "olm-u1-s4-es-q12", difficulty: "challenge", totalMarks: 4,
          stem: "The exact value of $\\frac{397\\times8.04}{0.201}$ is 15876. Use estimation to check that this is reasonable.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round each number, then compute." }], steps: [
            { reasoning: "$397\\approx400$, $8.04\\approx8$, $0.201\\approx0.2$.", marks: 1, markCode: "M" },
            { reasoning: "Estimate: $\\frac{400\\times8}{0.2}=\\frac{3200}{0.2}=16000$.", marks: 1, markCode: "M" },
            { reasoning: "Exact value 15876 is close to 16000 (same order of magnitude).", marks: 1, markCode: "M" },
            { reasoning: "Answer: reasonable — the exact answer is plausible.", marks: 1, markCode: "A" },
          ], finalAnswer: "Estimate ≈16000; 15876 is reasonable" },
        },
        {
          id: "olm-u1-s4-es-q13", difficulty: "challenge", totalMarks: 1,
          stem: "A good estimate for $3.97\\times4.03$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "16" },
            { id: "b", text: "20" },
            { id: "c", text: "8" },
            { id: "d", text: "12" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round to 4 and 4." }], steps: [{ reasoning: "$4\\times4=16$.", marks: 1, markCode: "A" }], finalAnswer: "16" },
        },
        {
          id: "olm-u1-s4-es-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Estimate $205+198-97$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 300 }] },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round each term." }], steps: [
            { reasoning: "$205\\approx200$, $198\\approx200$, $97\\approx100$.", marks: 1, markCode: "M" },
            { reasoning: "$200+200-100=300$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ~300.", marks: 1, markCode: "A" },
          ], finalAnswer: "300" },
        },
        {
          id: "olm-u1-s4-es-q15", difficulty: "core", totalMarks: 4,
          stem: "Estimate $\\frac{0.48\\times2.04}{0.097}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round each number." }], steps: [
            { reasoning: "Numerator: $0.48\\approx0.5$, $2.04\\approx2$ → $0.5\\times2=1$.", marks: 1, markCode: "M" },
            { reasoning: "Denominator: $0.097\\approx0.1$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{1}{0.1}=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ~10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u1-s4-es-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A cylinder has radius 4.9 cm and height 10.1 cm. Using $V=\\pi r^2 h$, estimate the volume.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Estimation", statement: "Round, then use $\\pi\\approx3$ or $3.14$." }], steps: [
            { reasoning: "$r\\approx5$, $h\\approx10$; $r^2\\approx25$.", marks: 1, markCode: "M" },
            { reasoning: "$25\\times10=250$; $250\\pi\\approx250\\times3.14=785$.", marks: 1, markCode: "M" },
            { reasoning: "Answer in cm³: ~785 cm³.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈785 cm³" },
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
            { id: "a", text: "3.455" },
            { id: "b", text: "3.454" },
            { id: "c", text: "3.5" },
            { id: "d", text: "3.46" },
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
        {
          id: "olm-u1-s4-bo-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The lower bound of 0.73 (to 2 d.p.) is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0.72" },
            { id: "b", text: "0.735" },
            { id: "c", text: "0.7" },
            { id: "d", text: "0.725" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Lower bound", statement: "Value − half unit of last digit." }], steps: [{ reasoning: "Half of 0.01 is 0.005 → LB $=0.73-0.005=0.725$.", marks: 1, markCode: "A" }], finalAnswer: "0.725" },
        },
        {
          id: "olm-u1-s4-bo-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the upper bound of 250 (to the nearest 10).",
          response: { type: "numeric", parts: [{ label: "a", answer: 255 }] },
          markscheme: { principles: [{ kind: "property", name: "Upper bound", statement: "Value + half unit." }], steps: [
            { reasoning: "Half of 10 is 5 → UB $=250+5=255$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 255.", marks: 1, markCode: "A" },
          ], finalAnswer: "255" },
        },
        {
          id: "olm-u1-s4-bo-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Write down the upper and lower bounds of 4.6 (to 1 d.p.).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Bounds", statement: "UB/LB = value ± half unit." }], steps: [
            { reasoning: "Half of 0.1 is 0.05.", marks: 1, markCode: "M" },
            { reasoning: "Bounds: $4.6-0.05=4.55$ to $4.6+0.05=4.65$.", marks: 1, markCode: "A" },
          ], finalAnswer: "4.55 to 4.65" },
        },
        {
          id: "olm-u1-s4-bo-q8", difficulty: "core", totalMarks: 1,
          stem: "A mass is recorded as 1.25 kg (to 2 d.p.). The maximum possible error is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\pm0.005$ kg" },
            { id: "b", text: "$\\pm0.0005$ kg" },
            { id: "c", text: "$\\pm0.05$ kg" },
            { id: "d", text: "$\\pm0.5$ kg" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Error bound", statement: "Half the unit of the last digit." }], steps: [{ reasoning: "Last digit is hundredths; half of 0.01 is 0.005 kg.", marks: 1, markCode: "A" }], finalAnswer: "$\\pm0.005$ kg" },
        },
        {
          id: "olm-u1-s4-bo-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the lower bound of 67 (to the nearest 5).",
          response: { type: "numeric", parts: [{ label: "a", answer: 64.5 }] },
          markscheme: { principles: [{ kind: "property", name: "Lower bound", statement: "Value − half unit." }], steps: [
            { reasoning: "Half of 5 is 2.5 → LB $=67-2.5$.", marks: 1, markCode: "M" },
            { reasoning: "$=64.5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 64.5.", marks: 1, markCode: "A" },
          ], finalAnswer: "64.5" },
        },
        {
          id: "olm-u1-s4-bo-q10", difficulty: "core", totalMarks: 3,
          stem: "A rectangle has length 8.4 cm and width 3.2 cm (both to 1 d.p.). Find the bounds of its area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Bounds in calculation", statement: "Min area uses both lower bounds; max both upper." }], steps: [
            { reasoning: "Bounds: length 8.35–8.45, width 3.15–3.25.", marks: 1, markCode: "M" },
            { reasoning: "Min area: $8.35\\times3.15=26.3025$; max: $8.45\\times3.25=27.4625$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 26.3025 to 27.4625 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "26.3025 to 27.4625 cm²" },
        },
        {
          id: "olm-u1-s4-bo-q11", difficulty: "challenge", totalMarks: 4,
          stem: "If $x=3.4$ and $y=2.6$ (both to 1 d.p.), find the maximum possible value of $x-y$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.9 }] },
          markscheme: { principles: [{ kind: "technique", name: "Bounds in calculation", statement: "Max difference uses UB of $x$ and LB of $y$." }], steps: [
            { reasoning: "Bounds: $x$ is 3.35–3.45; $y$ is 2.55–2.65.", marks: 1, markCode: "M" },
            { reasoning: "Maximum $x-y=3.45-2.55$.", marks: 1, markCode: "M" },
            { reasoning: "$3.45-2.55=0.90$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.9.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.9" },
        },
        {
          id: "olm-u1-s4-bo-q12", difficulty: "challenge", totalMarks: 4,
          stem: "A bag contains 100 coins, each of mass 7.85 g (to 2 d.p.). Find the bounds of the total mass.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Bounds in calculation", statement: "Scale bounds by count." }], steps: [
            { reasoning: "Each coin: LB $7.845$ g, UB $7.855$ g.", marks: 1, markCode: "M" },
            { reasoning: "Total LB: $100\\times7.845=784.5$ g; total UB: $100\\times7.855=785.5$ g.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 784.5 g to 785.5 g.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "784.5 to 785.5 g" },
        },
        {
          id: "olm-u1-s4-bo-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Which measurement has the greatest percentage error?",
          response: { type: "mcq", choices: [
            { id: "a", text: "1000 g (to the nearest 100 g)" },
            { id: "b", text: "0.50 m (to 2 d.p.)" },
            { id: "c", text: "5.0 cm (to 1 d.p.)" },
            { id: "d", text: "20 cm (to the nearest 10 cm)" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Percentage error", statement: "Max error ÷ value." }], steps: [{ reasoning: "b: $\\pm5$ on 20 gives 25%; a gives $\\pm0.05$ on 5 = 1%; c gives 1%; d gives $\\pm50$ on 1000 = 5%.", marks: 1, markCode: "A" }], finalAnswer: "20 cm (nearest 10)" },
        },
        {
          id: "olm-u1-s4-bo-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Find the lower bound of 0.045 (to 2 d.p.).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.04 }] },
          markscheme: { principles: [{ kind: "property", name: "Lower bound", statement: "Value − half unit." }], steps: [
            { reasoning: "Half of 0.01 is 0.005 → LB $=0.045-0.005$.", marks: 1, markCode: "M" },
            { reasoning: "$=0.040$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.04.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.04" },
        },
        {
          id: "olm-u1-s4-bo-q15", difficulty: "core", totalMarks: 3,
          stem: "The sides of a square are each 6.7 cm (to 1 d.p.). Find the bounds of its area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Bounds in calculation", statement: "Min area uses lower bounds, max uses upper." }], steps: [
            { reasoning: "Side bounds: $6.65$ to $6.75$ cm.", marks: 1, markCode: "M" },
            { reasoning: "Min area: $6.65^2=44.2225$; max: $6.75^2=45.5625$ cm².", marks: 1, markCode: "M" },
            { reasoning: "Answer: 44.2225 to 45.5625 cm².", marks: 1, markCode: "A" },
          ], finalAnswer: "44.2225 to 45.5625 cm²" },
        },
        {
          id: "olm-u1-s4-bo-q16", difficulty: "core", totalMarks: 4,
          stem: "A journey is 250 km (to the nearest 50 km) and the car drives at 60 km/h. Find the maximum possible time in hours.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.583333 }] },
          markscheme: { principles: [{ kind: "technique", name: "Bounds in calculation", statement: "Max time uses max distance." }], steps: [
            { reasoning: "Distance bounds: $250\\pm25$ → UB $=275$ km.", marks: 1, markCode: "M" },
            { reasoning: "Max time $=\\frac{275}{60}$ h.", marks: 1, markCode: "M" },
            { reasoning: "$=4.5833\ldots$ h.", marks: 1, markCode: "M" },
            { reasoning: "Answer: ≈4.58 h.", marks: 1, markCode: "A" },
          ], finalAnswer: "≈4.58 h" },
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
