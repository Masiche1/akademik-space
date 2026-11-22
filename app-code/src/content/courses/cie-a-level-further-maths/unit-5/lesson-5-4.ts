import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "cialfm-u5-lesson-5-4",
  code: "5-4",
  title: "Reduction Formulae",
  goal: "I CAN derive and apply reduction formulae for integrals.",
  standards: ["Cambridge A Level Further Mathematics 9231: further calculus"],
  vocabulary: [
    { term: "Reduction formula", definition: "Recurrence relating $I_n$ to $I_{n-1}$ or $I_{n-2}$." },
    { term: "Integration by parts", definition: "Method behind most reduction formulae." },
    { term: "Reduction", definition: "Expressing a harder integral in terms of an easier one." },
  ],
  concepts: [
    {
      id: "cialfm-u5-s4-reduction",
      title: "Reduction formulae",
      skill: "Derive and use reduction formulae for definite and indefinite integrals.",
      lesson: {
        sections: [
          {
            heading: "Deriving a reduction formula",
            body: "For $I_n = \\int x^n e^{x}\\,dx$, integrate by parts with $u = x^n$, $dv = e^x dx$: $I_n = x^n e^x - n\\int x^{n-1}e^x dx = x^n e^x - nI_{n-1}$. The key step is choosing parts so the remaining integral has a LOWER power of n.",
          },
          {
            heading: "Using the formula",
            body: "Start from the known base case $I_0$ (or $I_1$) and apply the recurrence repeatedly. For definite integrals, evaluate the boundary term at each step. Always check n is a positive integer and state the base case explicitly.",
          },
        ],
        keyFormulas: [
          { name: "Example reduction", statement: "$I_n = x^n e^x - n I_{n-1}$" },
          { name: "Base case", statement: "$I_0 = \\int e^x dx = e^x + c$" },
        ],
        workedExample: {
          problem: "Given $I_n = \\int_0^1 x^n e^x\\,dx$ satisfies $I_n = e - nI_{n-1}$, find $I_2$ given $I_0 = e - 1$.",
          solution: "$I_1 = e - 1( e-1) = 1$; $I_2 = e - 2(1) = e - 2$.",
        },
      },
      questions: [
        {
          id: "cialfm-u5-rr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a reduction formula?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A matrix reduction" },
            { id: "b", text: "The chain rule" },
            { id: "c", text: "A recurrence expressing $I_n$ in terms of $I_{n-1}$" },
            { id: "d", text: "A formula for reducing fractions" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reduction formula", statement: "Recurrence for $I_n$." }],
            steps: [{ reasoning: "It relates $I_n$ to easier integrals $I_{n-1}$, $I_{n-2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "Recurrence for $I_n$",
          },
        },
        {
          id: "cialfm-u5-rr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $I_n = \\int x^n e^x dx$, what substitution pattern gives the reduction?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Integration by parts", statement: "$u = x^n$, $dv = e^x dx$." }],
            steps: [
              { reasoning: "Choose $u = x^n$ so differentiation lowers the power.", marks: 1, markCode: "M" },
              { reasoning: "Result: $I_n = x^ne^x - nI_{n-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$I_n = x^ne^x - nI_{n-1}$",
          },
        },
        {
          id: "cialfm-u5-rr-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Given $I_n = \\int_0^{\\pi/2} \\sin^n x\\,dx$ satisfies $I_n = \\frac{n-1}{n}I_{n-2}$ with $I_0 = \\frac{\\pi}{2}$, $I_1 = 1$, find $I_3$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reduction", statement: "Apply recurrence from base case." }],
            steps: [
              { reasoning: "$I_3 = \\frac{2}{3}I_1 = \\frac{2}{3}(1)$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{2}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "Correct use of $I_1$ base case.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{2}{3}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{3}$",
          },
        },
        {
          id: "cialfm-u5-rr-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Derive the reduction formula for $I_n = \\int x^n \\cos x\\,dx$ and state the base case needed.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivation", statement: "Parts with $u=x^n$, $dv=\\cos x\\,dx$." }],
            steps: [
              { reasoning: "$I_n = x^n\\sin x - n\\int x^{n-1}\\sin x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "Second integral needs parts again with $u=x^{n-1}$, $dv=\\sin x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "$\\int x^{n-1}\\sin x\\,dx = -x^{n-1}\\cos x + (n-1)\\int x^{n-2}\\cos x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "$I_n = x^n\\sin x + nx^{n-1}\\cos x - n(n-1)I_{n-2}$.", marks: 1, markCode: "M" },
              { reasoning: "Base case: $I_0 = \\sin x + c$ (and $I_1$ if needed).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$I_n = x^n\\sin x + nx^{n-1}\\cos x - n(n-1)I_{n-2}$",
          },
        },
        {
          id: "cialfm-u5-rr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A reduction formula expresses…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The derivative of $I_n$" },
            { id: "b", text: "A matrix inverse" },
            { id: "c", text: "$I_n$ in terms of $I_{n-1}$ or $I_{n-2}$" },
            { id: "d", text: "A closed form for all $n$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Reduction formula", statement: "Recurrence for $I_n$." }],
            steps: [{ reasoning: "It relates $I_n$ to easier integrals with lower $n$.", marks: 1, markCode: "A" }],
            finalAnswer: "Recurrence for $I_n$",
          },
        },
        {
          id: "cialfm-u5-rr-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Let $I_n = \\int_0^1 x^n e^x\\,dx$ satisfy $I_n = e - nI_{n-1}$ with $I_0 = e-1$. Find $I_1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Apply recurrence", statement: "Use base case $I_0$." }],
            steps: [
              { reasoning: "$I_1 = e - 1\\cdot I_0 = e - (e-1)$.", marks: 1, markCode: "M" },
              { reasoning: "$= e - e + 1 = 1$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1.", marks: 1, markCode: "A" }],
            finalAnswer: "1",
          },
        },
        {
          id: "cialfm-u5-rr-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "With $I_n = \\int_0^1 x^n e^x\\,dx$ and $I_n = e - nI_{n-1}$, $I_0 = e-1$, $I_1 = 1$, the value of $I_2$ is approximately…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-0.282$" },
            { id: "b", text: "$2.718$" },
            { id: "c", text: "$1.718$" },
            { id: "d", text: "$0.718$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Apply recurrence", statement: "Iterate from base case." }],
            steps: [
              { reasoning: "$I_2 = e - 2I_1 = e - 2 \\approx 0.718$.", marks: 1, markCode: "M" },
              { reasoning: "Correct choice.", marks: 1, markCode: "A" }],
            finalAnswer: "$e-2 \\approx 0.718$",
          },
        },
        {
          id: "cialfm-u5-rr-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $I_n = \\int_0^{\\pi/2}\\sin^n x\\,dx$ with $I_n = \\frac{n-1}{n}I_{n-2}$, $I_0 = \\frac{\\pi}{2}$, $I_1 = 1$, find $I_4$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reduction", statement: "Steps down by 2." }],
            steps: [
              { reasoning: "$I_2 = \\frac{1}{2}I_0 = \\frac{\\pi}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$I_4 = \\frac{3}{4}I_2 = \\frac{3}{4}\\cdot\\frac{\\pi}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{3\\pi}{16}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3\\pi}{16}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{3\\pi}{16}$",
          },
        },
        {
          id: "cialfm-u5-rr-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the indefinite integral $I_n = \\int x^n e^x\\,dx$, the base case $I_0$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x$" },
            { id: "b", text: "$e^x + c$" },
            { id: "c", text: "$nx^{n-1}e^x$" },
            { id: "d", text: "Undefined" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "formula", name: "Base case", statement: "Lowest case is elementary." }],
            steps: [{ reasoning: "$I_0 = \\int e^x\\,dx = e^x + c$.", marks: 1, markCode: "A" }],
            finalAnswer: "$e^x + c$",
          },
        },
        {
          id: "cialfm-u5-rr-q10",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "For $I_n = \\int_0^{\\pi/2}\\sin^n x\\,dx$ with $I_n = \\frac{n-1}{n}I_{n-2}$, find $I_2$ given $I_0 = \\frac{\\pi}{2}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.785, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Apply recurrence", statement: "One step down." }],
            steps: [
              { reasoning: "$I_2 = \\frac{1}{2}I_0 = \\frac{\\pi}{4}$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx 0.785$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{\\pi}{4}$",
          },
        },
        {
          id: "cialfm-u5-rr-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Derive the reduction formula for $I_n = \\int_0^1 x^n e^x\\,dx$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derivation", statement: "Parts with $u=x^n$, $dv=e^x dx$." }],
            steps: [
              { reasoning: "Integrate by parts: $I_n = \\left[x^n e^x\\right]_0^1 - n\\int_0^1 x^{n-1}e^x\\,dx$.", marks: 1, markCode: "M" },
              { reasoning: "Boundary term: $1^n e^1 - 0 = e$.", marks: 1, markCode: "M" },
              { reasoning: "$\\int_0^1 x^{n-1}e^x dx = I_{n-1}$.", marks: 1, markCode: "M" },
              { reasoning: "$I_n = e - nI_{n-1}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$I_n = e - nI_{n-1}$",
          },
        },
        {
          id: "cialfm-u5-rr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $I_n = \\int_0^{\\pi/2}\\sin^n x\\,dx$, each application of the reduction formula lowers $n$ by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "1" },
            { id: "c", text: "3" },
            { id: "d", text: "Depends on $n$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reduction step", statement: "$I_n$ relates to $I_{n-2}$." }],
            steps: [{ reasoning: "The recurrence is $I_n = \\frac{n-1}{n}I_{n-2}$ — a drop of 2.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cialfm-u5-rr-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $I_n = \\int_0^1 x^n e^x\\,dx$ with $I_n = e - nI_{n-1}$, $I_0 = e-1$, find $I_3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.563, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Iterate recurrence", statement: "Three steps from base." }],
            steps: [
              { reasoning: "$I_1 = 1$, $I_2 = e-2$.", marks: 1, markCode: "M" },
              { reasoning: "$I_3 = e - 3(e-2) = e - 3e + 6 = 6 - 2e$.", marks: 1, markCode: "M" },
              { reasoning: "$6 - 2e \\approx 6 - 5.437 = 0.563$.", marks: 1, markCode: "M" },
              { reasoning: "Answer shown.", marks: 1, markCode: "A" }],
            finalAnswer: "$6-2e \\approx 0.563$",
          },
        },
        {
          id: "cialfm-u5-rr-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "For $I_n = \\int_0^{\\pi/2}\\sin^n x\\,dx$, use $I_n = \\frac{n-1}{n}I_{n-2}$ with $I_0 = \\frac{\\pi}{2}$, $I_1 = 1$ to find $I_5$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reduce to base", statement: "Odd $n$ uses $I_1$." }],
            steps: [
              { reasoning: "$I_3 = \\frac{2}{3}I_1 = \\frac{2}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$I_5 = \\frac{4}{5}I_3 = \\frac{4}{5}\\cdot\\frac{2}{3}$.", marks: 1, markCode: "M" },
              { reasoning: "$= \\frac{8}{15}$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{8}{15}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{8}{15}$",
          },
        },
        {
          id: "cialfm-u5-rr-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Deriving $I_n = \\int x^n\\sin x\\,dx$ requires integration by parts applied…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Twice, giving $I_n$ in terms of $I_{n-2}$" },
            { id: "b", text: "Once" },
            { id: "c", text: "Three times" },
            { id: "d", text: "Never" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Two rounds", statement: "Trig changes sign each round." }],
            steps: [{ reasoning: "One round gives a $\\sin$ integral with $n-1$; a second returns to $\\cos$ form with $n-2$.", marks: 1, markCode: "A" }],
            finalAnswer: "Twice",
          },
        },
        {
          id: "cialfm-u5-rr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $I_n = \\int_0^1 x^n e^x\\,dx$.",
          parts: [
            { label: "a", prompt: "Show that $I_n = e - nI_{n-1}$ for $n \\geq 1$.", marks: 2 },
            { label: "b", prompt: "Given $I_0 = e-1$, find $I_1$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Derive + apply", statement: "Parts then iterate." }],
            steps: [
              { reasoning: "Parts with $u=x^n$, $dv=e^x dx$: $I_n = [x^ne^x]_0^1 - nI_{n-1} = e - nI_{n-1}$.", marks: 1, markCode: "M", part: "a" },
              { reasoning: "Derivation complete.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "$I_1 = e - 1(e-1) = 1$.", marks: 1, markCode: "M", part: "b" },
              { reasoning: "Answer for (b): 1.", marks: 1, markCode: "A", part: "b" }],
            finalAnswer: "$I_n = e - nI_{n-1}$; $I_1 = 1$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cialfm-u5-reduction-notes",
      title: "Reduction formulae — revision notes",
      summary: "Derive via parts; iterate from base case.",
      sections: [
        { heading: "Derive", body: "Parts with $u = x^n$ lowers the power; may need two rounds for trig." },
        { heading: "Apply", body: "Start at $I_0$ or $I_1$; definite integrals evaluate boundary terms each step." },
      ],
    },
  ],
};
