import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypme4-u1-lesson-1-2",
  code: "1-2",
  title: "Bounds and Error Intervals",
  goal: "I CAN use upper and lower bounds for approximations, express answers to a given degree of accuracy, and work with error intervals.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Upper bound", definition: "The largest possible value consistent with a measurement or approximation." },
    { term: "Lower bound", definition: "The smallest possible value consistent with a measurement or approximation." },
    { term: "Bound", definition: "A limit value; for a measurement rounded to a unit, the bounds are half a unit either side." },
    { term: "Degree of accuracy", definition: "The precision to which an answer is given, e.g. nearest 10, 3 s.f., or 2 decimal places." },
    { term: "Error interval", definition: "The range of values between the lower and upper bounds." },
  ],
  concepts: [
    {
      id: "mypme4-u1-bounds",
      title: "Upper and lower bounds",
      skill: "Find bounds of measurements and calculations, and round answers to a specified accuracy.",
      lesson: {
        sections: [
          {
            heading: "Bounds of a measurement",
            body: "If a length is measured as 24 cm to the nearest cm, the true value lies between 23.5 cm and 24.5 cm. The **lower bound** is 23.5, the **upper bound** is 24.5. For nearest 10, bounds are half a unit either side.",
          },
          {
            heading: "Bounds of a calculation",
            body: "For $a+b$, use upper bounds of both for the maximum and lower bounds for the minimum. For $a\\times b$ or $\\frac{a}{b}$, the same logic applies but check whether the operation is increasing or decreasing. For $\\frac{1}{x}$, larger $x$ gives smaller result — so upper bound of $x$ gives lower bound of $\\frac{1}{x}$.",
          },
          {
            heading: "Rounding and accuracy",
            body: "Round answers to the requested accuracy: 3 significant figures, 2 decimal places, or nearest whole number. Always check whether rounding up or down is needed and state the final answer with correct units.",
          },
        ],
        keyFormulas: [
          { name: "Measurement bounds", statement: "Value $\\pm$ half the rounding unit" },
          { name: "Addition bounds", statement: "Max = upper + upper; min = lower + lower" },
          { name: "Reciprocal bounds", statement: "$\\frac{1}{x}$ reverses bounds" },
        ],
        workedExample: {
          problem: "A rectangle has length 12.4 cm (3 s.f.) and width 5.6 cm (2 s.f.). Find the upper and lower bounds of its area.",
          solution: "Length bounds: 12.35–12.45; width bounds: 5.55–5.65. Max area $=12.45\\times5.65=70.3$ cm²; min area $=12.35\\times5.55=68.5$ cm².",
        },
      },
      questions: [
        {
          id: "mypme4-u1-bounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mass is recorded as 3.7 kg to 1 decimal place. What are its lower and upper bounds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3.0 kg and 4.0 kg" },
              { id: "b", text: "3.69 kg and 3.71 kg" },
              { id: "c", text: "3.65 kg and 3.75 kg" },
              { id: "d", text: "3.6 kg and 3.8 kg" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "Nearest 0.1 → bounds are $\\pm0.05$." },
            ],
            steps: [
              { reasoning: "$3.7\\pm0.05$: lower 3.65, upper 3.75.", working: "3.65\\text{ and }3.75", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 3.65 kg and 3.75 kg",
            commonErrors: ["Using $\\pm0.1$ instead of $\\pm0.05$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-bounds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A length is 8.4 m (2 s.f.) and a width is 3.6 m (2 s.f.). Find the upper bound of the perimeter.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "23.8 m" },
              { id: "b", text: "24.4 m" },
              { id: "c", text: "24.2 m" },
              { id: "d", text: "24.0 m" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of sum", statement: "Upper bound = sum of upper bounds." },
            ],
            steps: [
              { reasoning: "Length UB = 8.45, width UB = 3.65; perimeter UB = $2(8.45+3.65)=24.2$ m.", working: "2(8.45+3.65)=24.2", marks: 1, markCode: "M" },
              { reasoning: "State the upper bound.", working: "24.2\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$24.2$ m",
            commonErrors: ["Using the given values instead of bounds."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-bounds-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$x=2.5$ (2 s.f.) and $y=1.8$ (2 s.f.). Find the lower bound of $\\frac{x}{y}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.39" },
              { id: "b", text: "1.32" },
              { id: "c", text: "1.28" },
              { id: "d", text: "1.45" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Division bounds", statement: "Lower bound of $\\frac{x}{y}$ = lower bound of $x$ ÷ upper bound of $y$." },
            ],
            steps: [
              { reasoning: "$x$ LB = 2.45, $y$ UB = 1.85.", working: "2.45\\div1.85", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{2.45}{1.85}=1.324\\approx1.32$.", working: "1.32", marks: 1, markCode: "M" },
              { reasoning: "State the lower bound.", working: "1.32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.32$",
            commonErrors: ["Dividing lower by lower instead of lower by upper."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-bounds-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A metal rod has length $L=50.0$ cm (3 s.f.) and radius $r=2.00$ cm (3 s.f.). Volume of a cylinder $V=\\pi r^2 L$.",
          parts: [
            { label: "a", prompt: "State the bounds of $L$ and $r$.", marks: 2 },
            { label: "b", prompt: "Find the upper bound of $V$ (take $\\pi=3.1416$).", marks: 3 },
            { label: "c", prompt: "Find the lower bound of $V$.", marks: 2 },
            { label: "d", prompt: "Calculate the percentage error in $V$ using the upper bound.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of product", statement: "Upper bound uses upper bounds of all factors." },
            ],
            steps: [
              { part: "a", reasoning: "$L$: 49.95–50.05 cm; $r$: 1.995–2.005 cm.", working: "49.95-50.05,\\ 1.995-2.005", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both bounds correct.", working: "\\text{bounds stated}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Max $V=3.1416\\times2.005^2\\times50.05=3.1416\\times4.0200\\times50.05\\approx632.1$ cm³.", working: "V_{max}\\approx632.1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply formula with upper bounds.", working: "\\pi r^2 L", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the upper bound.", working: "632.1\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Min $V=3.1416\\times1.995^2\\times49.95\\approx624.4$ cm³.", working: "V_{min}\\approx624.4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the lower bound.", working: "624.4\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Nominal $V=3.1416\\times4\\times50=628.3$; error $=\\frac{632.1-628.3}{628.3}\\times100\\%\\approx0.60\\%$.", working: "0.60\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $L$: 49.95–50.05, $r$: 1.995–2.005 (b) ≈632.1 cm³ (c) ≈624.4 cm³ (d) ≈0.60%",
            commonErrors: ["Using same bounds for all factors."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypme4-u1-bounds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A time is recorded as 2.5 s to 1 decimal place. What are its lower and upper bounds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2.0 s and 3.0 s" },
              { id: "b", text: "2.45 s and 2.55 s" },
              { id: "c", text: "2.49 s and 2.51 s" },
              { id: "d", text: "2.4 s and 2.6 s" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "Nearest 0.1 → bounds are $\\pm0.05$." },
            ],
            steps: [
              { reasoning: "$2.5\\pm0.05$: lower 2.45, upper 2.55 s.", working: "2.45\\text{ and }2.55", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 2.45 s and 2.55 s",
            commonErrors: ["Using $\\pm0.1$ instead of $\\pm0.05$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-bounds-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A length is measured as 15 m to the nearest metre. Write down its lower and upper bounds.",
          response: { type: "numeric", parts: [
            { label: "Lower bound (m)", answer: 14.5 },
            { label: "Upper bound (m)", answer: 15.5 },
          ] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "Nearest 1 m → bounds are $\\pm0.5$ m." },
            ],
            steps: [
              { reasoning: "$15\\pm0.5$: lower 14.5 m, upper 15.5 m.", working: "14.5\\text{ and }15.5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Lower bound 14.5 m, upper bound 15.5 m",
            commonErrors: ["Using $\\pm1$ instead of $\\pm0.5$."],
          },
        },
        {
          id: "mypme4-u1-bounds-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "$x=4.0$ and $y=2.5$, each correct to 2 significant figures. Find the upper bound of $x+y$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7.00" },
              { id: "b", text: "6.50" },
              { id: "c", text: "6.70" },
              { id: "d", text: "6.60" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of sum", statement: "Upper bound = upper bound of $x$ + upper bound of $y$." },
            ],
            steps: [
              { reasoning: "UB of $x$ = 4.05, UB of $y$ = 2.55; sum $=4.05+2.55=6.60$.", working: "6.60", marks: 1, markCode: "M" },
              { reasoning: "State the upper bound.", working: "6.60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.60$",
            commonErrors: ["Adding the given values 4.0+2.5=6.5 instead of the bounds."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-bounds-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "$a=3.6$ correct to 2 significant figures. Find the lower bound of $a^2$.",
          response: { type: "numeric", parts: [{ label: "Lower bound of $a^2$", answer: 12.6, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of product", statement: "Squaring is increasing for positive values: LB of $a^2$ = (LB of $a$)²." },
            ],
            steps: [
              { reasoning: "LB of $a$ = 3.55 (bounds 3.55–3.65).", working: "3.55", marks: 1, markCode: "M" },
              { reasoning: "$3.55^2=12.6025\\approx12.6$.", working: "12.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.6$",
            commonErrors: ["Using $3.6^2=12.96$ — forgetting to use the bound."],
          },
        },
        {
          id: "mypme4-u1-bounds-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A price is £8.99 to the nearest penny. Write down its lower and upper bounds.",
          response: { type: "numeric", parts: [
            { label: "Lower bound (£)", answer: 8.985 },
            { label: "Upper bound (£)", answer: 8.995 },
          ] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "Nearest 0.01 → bounds are $\\pm0.005$." },
            ],
            steps: [
              { reasoning: "$8.99\\pm0.005$: lower 8.985, upper 8.995.", working: "8.985\\text{ and }8.995", marks: 1, markCode: "B" },
            ],
            finalAnswer: "£8.985 and £8.995",
            commonErrors: ["Using $\\pm0.01$ instead of $\\pm0.005$."],
          },
        },
        {
          id: "mypme4-u1-bounds-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "$x=10$ correct to 2 significant figures. Find the lower bound of $\\frac{100}{x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9.52" },
              { id: "b", text: "11.76" },
              { id: "c", text: "10.53" },
              { id: "d", text: "10.0" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocal bounds", statement: "For $\\frac{1}{x}$, bounds reverse: LB uses the UB of $x$." },
            ],
            steps: [
              { reasoning: "$x$ bounds: 9.5–10.5; LB of $\\frac{100}{x}$ = $\\frac{100}{10.5}=9.523\\approx9.52$.", working: "\\frac{100}{10.5}\\approx9.52", marks: 1, markCode: "M" },
              { reasoning: "State the lower bound.", working: "9.52", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9.52$",
            commonErrors: ["Dividing by the lower bound of $x$ instead of the upper bound."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-bounds-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "$p=2.4$ and $q=1.6$, each correct to 2 significant figures. Find the lower bound of $\\frac{p}{q}$.",
          response: { type: "numeric", parts: [{ label: "Lower bound of $\\frac{p}{q}$", answer: 1.42, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Division bounds", statement: "LB of $\\frac{p}{q}$ = LB of $p$ ÷ UB of $q$." },
            ],
            steps: [
              { reasoning: "LB of $p$ = 2.35, UB of $q$ = 1.65.", working: "2.35\\div1.65", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{2.35}{1.65}=1.4242\\approx1.42$.", working: "1.42", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.42$",
            commonErrors: ["Dividing lower by lower instead of lower by upper."],
          },
        },
        {
          id: "mypme4-u1-bounds-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "$x=5.0$ and $y=3.0$, each correct to 2 significant figures. Find the upper bound of $\\frac{x}{y}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.71" },
              { id: "b", text: "1.80" },
              { id: "c", text: "1.50" },
              { id: "d", text: "1.67" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Division bounds", statement: "UB of $\\frac{x}{y}$ = UB of $x$ ÷ LB of $y$." },
            ],
            steps: [
              { reasoning: "UB of $x$ = 5.05, LB of $y$ = 2.95.", working: "5.05\\div2.95", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{5.05}{2.95}=1.7119\\approx1.71$.", working: "1.71", marks: 1, markCode: "M" },
              { reasoning: "State the upper bound.", working: "1.71", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.71$",
            commonErrors: ["Dividing upper by upper — bounds of a quotient cross over."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-bounds-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Bounds of measurements and a rectangle.",
          parts: [
            { label: "a", prompt: "A mass is 7.3 kg to 1 decimal place. State its lower and upper bounds.", marks: 2 },
            { label: "b", prompt: "A length is 12 cm to the nearest cm. State its lower and upper bounds.", marks: 2 },
            { label: "c", prompt: "A rectangle has length 6.2 cm and width 4.8 cm, each to 2 s.f. Find the upper bound of its area.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "Measurement bounds = value $\\pm$ half the rounding unit." },
            ],
            steps: [
              { part: "a", reasoning: "$7.3\\pm0.05$: lower 7.25 kg, upper 7.35 kg.", working: "7.25\\text{ and }7.35", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both bounds stated with units.", working: "\\text{kg}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$12\\pm0.5$: lower 11.5 cm, upper 12.5 cm.", working: "11.5\\text{ and }12.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both bounds stated with units.", working: "\\text{cm}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "UBs: 6.25 and 4.85; max area $=6.25\\times4.85=30.3125\\approx30.3$ cm².", working: "30.3\\text{ cm}^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the upper bound.", working: "30.3\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 7.25–7.35 kg (b) 11.5–12.5 cm (c) ≈30.3 cm²",
            commonErrors: ["In (c), using the given values instead of their upper bounds."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-bounds-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A journey and its speed.",
          parts: [
            { label: "a", prompt: "A time is 45 s to the nearest 5 s. State its lower and upper bounds.", marks: 2 },
            { label: "b", prompt: "A distance is 320 km to 2 s.f. State its lower and upper bounds.", marks: 2 },
            { label: "c", prompt: "If distance $D$ has bounds 315–325 km and time $T$ has bounds 3.95–4.05 h, find the upper bound of the speed $\\frac{D}{T}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds of quotient", statement: "UB of $\\frac{D}{T}$ = UB of $D$ ÷ LB of $T$." },
            ],
            steps: [
              { part: "a", reasoning: "$45\\pm2.5$: lower 42.5 s, upper 47.5 s.", working: "42.5\\text{ and }47.5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both bounds stated.", working: "42.5-47.5\\text{ s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "2 s.f. → bounds $\\pm5$: lower 315 km, upper 325 km.", working: "315\\text{ and }325", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both bounds stated.", working: "315-325\\text{ km}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "UB of speed $=\\frac{325}{3.95}=82.278\\approx82.3$ km/h.", working: "82.3\\text{ km/h}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use upper bound of distance and lower bound of time.", working: "\\frac{325}{3.95}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the upper bound.", working: "82.3\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 42.5–47.5 s (b) 315–325 km (c) ≈82.3 km/h",
            commonErrors: ["In (c), dividing by the upper bound of time."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-bounds-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "$x=6.4$ and $y=0.8$, each correct to the number of significant figures shown.",
          parts: [
            { label: "a", prompt: "State the bounds of $x$.", marks: 2 },
            { label: "b", prompt: "State the bounds of $y$.", marks: 2 },
            { label: "c", prompt: "Find the upper bound of $x+y$.", marks: 2 },
            { label: "d", prompt: "Find the lower bound of $\\frac{x}{y}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds", statement: "2 s.f. → $\\pm$ half unit in last place; 1 s.f. → $\\pm0.05$." },
            ],
            steps: [
              { part: "a", reasoning: "$x$ bounds: 6.35–6.45.", working: "6.35-6.45", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both bounds.", working: "6.35\\text{ and }6.45", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$y$ bounds: 0.75–0.85.", working: "0.75-0.85", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both bounds.", working: "0.75\\text{ and }0.85", marks: 1, markCode: "A" },
              { part: "c", reasoning: "UB $=6.45+0.85=7.30$.", working: "7.30", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the upper bound.", working: "7.30", marks: 1, markCode: "A" },
              { part: "d", reasoning: "LB $=\\frac{6.35}{0.85}=7.4706\\approx7.47$.", working: "7.47", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the lower bound.", working: "7.47", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 6.35–6.45 (b) 0.75–0.85 (c) 7.30 (d) ≈7.47",
            commonErrors: ["Using $\\pm0.1$ for $y$ — 1 s.f. needs $\\pm0.05$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u1-bounds-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A measurement is recorded as 45 to 2 significant figures. Find the maximum possible percentage error.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2.22%" },
              { id: "b", text: "1.11%" },
              { id: "c", text: "1.00%" },
              { id: "d", text: "0.50%" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Percentage error", statement: "$\\text{error}=\\frac{\\text{max deviation}}{\\text{value}}\\times100\\%$." },
            ],
            steps: [
              { reasoning: "Bounds 44.5–45.5; max deviation $=0.5$.", working: "0.5", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{0.5}{45}\\times100\\%=1.111\\%\\approx1.11\\%$.", working: "1.11\\%", marks: 1, markCode: "M" },
              { reasoning: "State the percentage error.", working: "1.11\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.11\\%$",
            commonErrors: ["Dividing by the bound 45.5 or 44.5 instead of the recorded value 45."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u1-systems",
      title: "Number systems and sequences",
      skill: "Work with different number systems notation and extend sequence work to quadratic and geometric sequences.",
      lesson: {
        sections: [
          {
            heading: "Number systems",
            body: "Numbers can be written in different **bases**: binary (base 2), denary/decimal (base 10), hexadecimal (base 16). The notation $1101_2$ means $1\\times2^3+1\\times2^2+0\\times2+1=13$. Converting between bases uses place value.",
          },
          {
            heading: "Quadratic sequences",
            body: "If second differences are constant, the sequence is quadratic. Find the $n$th term by fitting $an^2+bn+c$: the coefficient of $n^2$ is half the second difference. Example: 2, 5, 10, 17, 26 → first diffs 3,5,7,9; second diffs 2,2,2 → $n^2+1$.",
          },
          {
            heading: "Geometric sequences extended",
            body: "For geometric sequences, nth term $=ar^{n-1}$. Sum of first $n$ terms: $S_n=\\frac{a(r^n-1)}{r-1}$ for $r\\ne1$. Example: sum of first 5 terms of 3, 6, 12, 24, 48 is $3+6+12+24+48=93$, or $\\frac{3(2^5-1)}{2-1}=93$.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic nth term", statement: "Second difference $d_2$ → coefficient $\\frac{d_2}{2}$" },
          { name: "Geometric sum", statement: "$S_n=\\frac{a(r^n-1)}{r-1}$" },
          { name: "Binary to denary", statement: "Sum of digits × powers of 2" },
        ],
        workedExample: {
          problem: "Convert $1011_2$ to denary.",
          solution: "$1\\times8+0\\times4+1\\times2+1\\times1=8+0+2+1=11$.",
        },
      },
      questions: [
        {
          id: "mypme4-u1-sys-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert $1010_2$ to denary.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "12" },
              { id: "c", text: "8" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Binary", statement: "$1010_2=1\\times8+0\\times4+1\\times2+0\\times1=10$." },
            ],
            steps: [
              { reasoning: "Place values: 8, 4, 2, 1; digits give 8+0+2+0=10.", working: "10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 10",
            commonErrors: ["Reading binary digits as decimal digits."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-sys-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the nth term of 3, 6, 11, 18, 27, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2n^2+1$" },
              { id: "b", text: "$n^2+2$" },
              { id: "c", text: "$n^2+3$" },
              { id: "d", text: "$n^2+n$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic sequence", statement: "Second difference = 2 → coefficient of $n^2$ is 1." },
            ],
            steps: [
              { reasoning: "First diffs: 3,5,7,9; second diffs: 2,2,2. Try $n^2+2$: $n=1$→3, $n=2$→6, $n=3$→11. ✓", working: "n^2+2", marks: 1, markCode: "M" },
              { reasoning: "Verify with $n=4$: $16+2=18$. ✓", working: "n^2+2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n^2+2$",
            commonErrors: ["Using first difference instead of second."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sys-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the sum of the first 6 terms of the geometric sequence 2, 6, 18, 54, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "728" },
              { id: "b", text: "243" },
              { id: "c", text: "1458" },
              { id: "d", text: "486" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric sum", statement: "$S_n=\\frac{a(r^n-1)}{r-1}$." },
            ],
            steps: [
              { reasoning: "$a=2$, $r=3$, $n=6$; $S_6=\\frac{2(3^6-1)}{3-1}=3^6-1=729-1=728$.", working: "S_6=728", marks: 1, markCode: "M" },
              { reasoning: "Check by addition: $2+6+18+54+162+486=728$. ✓", working: "2+6+18+54+162+486=728", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "728", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$728$",
            commonErrors: ["Using $r=2$ instead of $r=3$, or computing $3^6$ incorrectly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sys-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A geometric sequence has first term 5 and common ratio 2.",
          parts: [
            { label: "a", prompt: "Write down the first four terms.", marks: 1 },
            { label: "b", prompt: "Find the 10th term.", marks: 2 },
            { label: "c", prompt: "Find the sum of the first 10 terms.", marks: 3 },
            { label: "d", prompt: "Find the smallest $n$ for which the $n$th term exceeds 10000.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric", statement: "nth term $=ar^{n-1}$; sum $=\\frac{a(r^n-1)}{r-1}$." },
            ],
            steps: [
              { part: "a", reasoning: "5, 10, 20, 40.", working: "5,10,20,40", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$5\\times2^9=5\\times512=2560$.", working: "2560", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the 10th term.", working: "2560", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$S_{10}=\\frac{5(2^{10}-1)}{2-1}=5(1024-1)=5\\times1023=5115$.", working: "5115", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Apply the sum formula.", working: "5\\times1023", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the sum.", working: "5115", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Need $5\\times2^{n-1}>10000$, i.e. $2^{n-1}>2000$.", working: "2^{n-1}>2000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$2^{10}=1024$, $2^{11}=2048>2000$, so $n-1=11$, $n=12$. Check: $5\\times2^{11}=10240>10000$. ✓", working: "n=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5, 10, 20, 40 (b) 2560 (c) 5115 (d) $n=12$",
            commonErrors: ["Using $2^n$ instead of $2^{n-1}$ for the nth term."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u1-sys-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert $1100_2$ to denary.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "1100" },
              { id: "c", text: "12" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Binary", statement: "$1100_2=1\\times8+1\\times4+0\\times2+0\\times1=12$." },
            ],
            steps: [
              { reasoning: "Place values 8,4,2,1: $8+4+0+0=12$.", working: "12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 12",
            commonErrors: ["Reading the digits as a decimal number."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-sys-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert $10111_2$ to denary.",
          response: { type: "numeric", parts: [{ label: "Denary value", answer: 23 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Binary", statement: "Sum of digits $\\times$ powers of 2." },
            ],
            steps: [
              { reasoning: "$16+0+4+2+1=23$.", working: "23", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$23$",
            commonErrors: ["Forgetting the leading 16 (place value $2^4$)."],
          },
        },
        {
          id: "mypme4-u1-sys-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the nth term of 5, 9, 15, 23, 33, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2n^2+1$" },
              { id: "b", text: "$n^2+n+2$" },
              { id: "c", text: "$n^2+3$" },
              { id: "d", text: "$n^2+n+3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic sequence", statement: "Second difference = 2 → coefficient of $n^2$ is 1." },
            ],
            steps: [
              { reasoning: "First diffs 4,6,8,10; second diffs 2,2,2. Try $n^2+n+3$: $n=1$→5, $n=2$→9, $n=3$→15. ✓", working: "n^2+n+3", marks: 1, markCode: "M" },
              { reasoning: "Verify with $n=4$: $16+4+3=23$. ✓", working: "n^2+n+3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n^2+n+3$",
            commonErrors: ["Missing the linear term — check first differences, not just second."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sys-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The sequence 2, 6, 12, 20, 30, ... has nth term $n^2+n$. Find its 10th term.",
          response: { type: "numeric", parts: [{ label: "10th term", answer: 110 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "nth term", statement: "Substitute $n=10$ into $n^2+n$." },
            ],
            steps: [
              { reasoning: "$10^2+10=100+10=110$.", working: "110", marks: 1, markCode: "M" },
              { reasoning: "State the term.", working: "110", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$110$",
            commonErrors: ["Computing $10^2=20$ or using $n=9$."],
          },
        },
        {
          id: "mypme4-u1-sys-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the denary number 13 in binary.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1001_2$" },
              { id: "b", text: "$1101_2$" },
              { id: "c", text: "$1011_2$" },
              { id: "d", text: "$1110_2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Binary", statement: "13 = 8+4+0+1 → digits 1101." },
            ],
            steps: [
              { reasoning: "$13=8+4+1=1\\times8+1\\times4+0\\times2+1\\times1$.", working: "1101_2", marks: 1, markCode: "M" },
              { reasoning: "State the binary form.", working: "1101_2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1101_2$",
            commonErrors: ["Writing $1011_2$ (=11) — miscounting the powers."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sys-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the sum of the first 4 terms of the geometric sequence 3, 6, 12, 24, ...",
          response: { type: "numeric", parts: [{ label: "$S_4$", answer: 45 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric sum", statement: "$S_n=\\frac{a(r^n-1)}{r-1}$ with $a=3$, $r=2$." },
            ],
            steps: [
              { reasoning: "$S_4=\\frac{3(2^4-1)}{2-1}=3\\times15=45$.", working: "45", marks: 1, markCode: "M" },
              { reasoning: "Check by addition: $3+6+12+24=45$. ✓", working: "45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45$",
            commonErrors: ["Using $n=4$ terms as 3,6,12,24 but forgetting the 4th term is 24 not 48."],
          },
        },
        {
          id: "mypme4-u1-sys-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A geometric sequence has first term 4 and common ratio 3. Find its 5th term.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "256" },
              { id: "b", text: "324" },
              { id: "c", text: "972" },
              { id: "d", text: "108" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric nth term", statement: "nth term $=ar^{n-1}=4\\times3^{n-1}$." },
            ],
            steps: [
              { reasoning: "5th term $=4\\times3^4=4\\times81=324$.", working: "4\\times81=324", marks: 1, markCode: "M" },
              { reasoning: "Check: terms are 4,12,36,108,324. ✓", working: "4,12,36,108,324", marks: 1, markCode: "M" },
              { reasoning: "State the term.", working: "324", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$324$",
            commonErrors: ["Using $3^5$ instead of $3^{5-1}=3^4$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sys-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the sum of the first 5 terms of the geometric sequence 5, 15, 45, 135, 405, ...",
          response: { type: "numeric", parts: [{ label: "$S_5$", answer: 605 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric sum", statement: "$S_n=\\frac{a(r^n-1)}{r-1}$ with $a=5$, $r=3$." },
            ],
            steps: [
              { reasoning: "$S_5=\\frac{5(3^5-1)}{3-1}=\\frac{5\\times242}{2}=5\\times121=605$.", working: "605", marks: 1, markCode: "M" },
              { reasoning: "Check by addition: $5+15+45+135+405=605$. ✓", working: "605", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "605", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$605$",
            commonErrors: ["Using $r=5$ or computing $3^5=243$ incorrectly."],
          },
        },
        {
          id: "mypme4-u1-sys-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Number bases and sequences.",
          parts: [
            { label: "a", prompt: "Convert $11011_2$ to denary.", marks: 2 },
            { label: "b", prompt: "Write the denary number 19 in binary.", marks: 2 },
            { label: "c", prompt: "Find the nth term of 4, 7, 12, 19, 28, ...", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Binary", statement: "Digits $\\times$ powers of 2." },
              { kind: "principle", name: "Quadratic sequence", statement: "Constant second difference → quadratic nth term." },
            ],
            steps: [
              { part: "a", reasoning: "$16+8+0+2+1=27$.", working: "27", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the value.", working: "27", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$19=16+2+1=1\\times16+0\\times8+0\\times4+1\\times2+1\\times1$.", working: "10011_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the binary form.", working: "10011_2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First diffs 3,5,7,9; second diffs 2,2,2 → coefficient 1. Try $n^2+3$: $n=1$→4, $n=2$→7, $n=3$→12. ✓", working: "n^2+3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verify $n=4$: $16+3=19$. ✓", working: "n^2+3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 27 (b) $10011_2$ (c) $n^2+3$",
            commonErrors: ["In (b), writing $11011_2$ back instead of converting 19."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypme4-u1-sys-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A geometric sequence has first term 2 and common ratio 5.",
          parts: [
            { label: "a", prompt: "Find the 4th term.", marks: 2 },
            { label: "b", prompt: "Find the sum of the first 4 terms.", marks: 3 },
            { label: "c", prompt: "Find the smallest $n$ for which the nth term exceeds 1000.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric", statement: "nth term $=ar^{n-1}$; sum $=\\frac{a(r^n-1)}{r-1}$." },
            ],
            steps: [
              { part: "a", reasoning: "4th term $=2\\times5^3=2\\times125=250$.", working: "250", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the term.", working: "250", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$S_4=\\frac{2(5^4-1)}{5-1}=\\frac{2\\times624}{4}=312$.", working: "312", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply the sum formula correctly.", working: "\\frac{2\\times624}{4}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the sum.", working: "312", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Need $2\\times5^{n-1}>1000$, i.e. $5^{n-1}>500$.", working: "5^{n-1}>500", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$5^4=625>500$ but $5^3=125<500$, so $n-1=4$, $n=5$. Check: $2\\times5^4=1250>1000$. ✓", working: "n=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 250 (b) 312 (c) $n=5$",
            commonErrors: ["In (c), forgetting that the nth term uses $5^{n-1}$."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-sys-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the nth term of 3, 8, 15, 24, 35, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n^2+2n$" },
              { id: "b", text: "$2n^2+1$" },
              { id: "c", text: "$n^2+n+1$" },
              { id: "d", text: "$n^2+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic sequence", statement: "Second difference = 2 → coefficient 1; fit $n^2+bn+c$." },
            ],
            steps: [
              { reasoning: "First diffs 5,7,9,11; second diffs 2,2,2. Try $n^2+2n$: $n=1$→3, $n=2$→8, $n=3$→15. ✓", working: "n^2+2n", marks: 1, markCode: "M" },
              { reasoning: "Verify $n=4$: $16+8=24$. ✓", working: "n^2+2n", marks: 1, markCode: "M" },
              { reasoning: "State the nth term.", working: "n^2+2n", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n^2+2n$",
            commonErrors: ["Stopping at $n^2+3$ which fails at $n=2$ ($4+3=7\\ne8$)."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sys-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "The second differences of a quadratic sequence are all 4. What is the coefficient of $n^2$ in its nth term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "2" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic sequences", statement: "Coefficient of $n^2$ = half the second difference." },
            ],
            steps: [
              { reasoning: "Coefficient $=\\frac{4}{2}=2$.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State the coefficient.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Using the second difference 4 directly as the coefficient."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
