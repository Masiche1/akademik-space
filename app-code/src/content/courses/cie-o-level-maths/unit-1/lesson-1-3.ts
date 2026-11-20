import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olm-u1-lesson-1-3",
  code: "1-3",
  title: "Indices and Standard Form",
  goal: "I CAN apply index laws and use standard form for very large and small numbers.",
  standards: ["4024: number"],
  vocabulary: [
    { term: "Index (power)", definition: "Number of times a base is multiplied by itself." },
    { term: "Standard form", definition: "$a\\times10^n$ with $1\\leq a<10$ and $n$ an integer." },
    { term: "Zero index", definition: "$a^0=1$ for $a\\neq0$." },
    { term: "Negative index", definition: "$a^{-n}=\\frac{1}{a^n}$." },
  ],
  concepts: [
    {
      id: "olm-u1-s3-indices",
      title: "Laws of indices",
      skill: "Apply index laws at O Level.",
      lesson: {
        sections: [
          { heading: "The laws", body: "Indices (powers) compress repeated multiplication. The laws: $a^m\\times a^n=a^{m+n}$ (add when multiplying); $a^m\\div a^n=a^{m-n}$ (subtract when dividing); $(a^m)^n=a^{mn}$ (multiply when raising a power); $(ab)^n=a^nb^n$; $a^0=1$; $a^{-n}=\\frac{1}{a^n}$. Fractional indices: $a^{1/n}=\\sqrt[n]{a}$, so $8^{2/3}=(\\sqrt[3]8)^2=4$." },
          { heading: "Common errors", body: "Students often write $(a+b)^n=a^n+b^n$ — false unless $n=1$. Also $a^m+a^n\\neq a^{m+n}$ — you can only add indices when multiplying same bases, not when adding terms. Negative indices mean reciprocal, not negative result: $2^{-3}=\\frac18$, not $-8$." },
        ],
        keyFormulas: [
          { name: "Product", statement: "$a^m\\times a^n=a^{m+n}$" },
          { name: "Power", statement: "$(a^m)^n=a^{mn}$" },
          { name: "Fractional", statement: "$a^{1/n}=\\sqrt[n]{a}$" },
        ],
        workedExample: { problem: "Simplify $\\frac{(2x^3)^2}{4x^4}$.", solution: "$(2x^3)^2=4x^6$; $\\frac{4x^6}{4x^4}=x^2$. Answer: $x^2$." },
      },
      questions: [
        {
          id: "olm-u1-s3-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$3^2\\times3^4$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3^6$" }, { id: "b", text: "$3^8$" }, { id: "c", text: "$9^6$" }, { id: "d", text: "$3^{10}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Product law", statement: "Add indices." }], steps: [{ reasoning: "$3^{2+4}=3^6=729$.", marks: 1, markCode: "A" }], finalAnswer: "$3^6$" },
        },
        {
          id: "olm-u1-s3-in-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $27^{2/3}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fractional index", statement: "Root then power." }], steps: [
            { reasoning: "$27^{1/3}=3$; $3^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
          ], finalAnswer: "9" },
        },
        {
          id: "olm-u1-s3-in-q3", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\frac{x^5\\times x^{-2}}{x^3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Index laws", statement: "Combine powers." }], steps: [
            { reasoning: "$x^{5-2}=x^3$; $\\frac{x^3}{x^3}=x^0=1$.", marks: 1, markCode: "M" },
            { reasoning: "Alternative: $x^{5-2-3}=x^0=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u1-s3-in-q4", difficulty: "core", totalMarks: 4,
          stem: "Simplify $\\left(\\frac{8a^6}{b^3}\\right)^{2/3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fractional power of fraction", statement: "Apply to each part." }], steps: [
            { reasoning: "$8^{2/3}=(\\sqrt[3]8)^2=2^2=4$; $(a^6)^{2/3}=a^4$; $(b^3)^{2/3}=b^2$ in denominator.", marks: 1, markCode: "M" },
            { reasoning: "Result: $\\frac{4a^4}{b^2}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\left(\\frac{8a^6}{b^3}\\right)^{2/3}=\\frac{8^{2/3}a^4}{b^2}=\\frac{4a^4}{b^2}$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{4a^4}{b^2}$" },
        },
      ],
    },
    {
      id: "olm-u1-s3-standard",
      title: "Standard form",
      skill: "Use standard form for very large and small numbers at O Level.",
      lesson: {
        sections: [
          { heading: "What it is", body: "Standard form writes a number as $a\\times10^n$ where $1\\leq a<10$ and $n$ is an integer. The power of 10 tells you the size: positive $n$ for large numbers ($3.2\\times10^6=3{,}200{,}000$), negative for small ($4.5\\times10^{-3}=0.0045$). It's essential for astronomy, physics and chemistry where numbers span many orders of magnitude." },
          { heading: "Arithmetic in standard form", body: "To multiply, multiply the mantissas and add the powers: $(2\\times10^3)(3\\times10^4)=6\\times10^7$. To divide, divide mantissas and subtract powers: $\\frac{8\\times10^6}{2\\times10^2}=4\\times10^4$. For addition/subtraction, first rewrite both numbers with the same power of 10, add the mantissas, then renormalise if needed. Always give final answers in standard form with $1\\leq a<10$." },
        ],
        keyFormulas: [
          { name: "Standard form", statement: "$a\\times10^n$, $1\\leq a<10$" },
          { name: "Multiply", statement: "Add powers; divide: subtract powers" },
        ],
        workedExample: { problem: "Calculate $\\frac{3.6\\times10^7}{1.2\\times10^4}$.", solution: "$\\frac{3.6}{1.2}\\times10^{7-4}=3\\times10^3=3000$. Answer: $3\\times10^3$." },
      },
      questions: [
        {
          id: "olm-u1-s3-st-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$45{,}000$ in standard form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4.5\\times10^4$" }, { id: "b", text: "$45\\times10^3$" }, { id: "c", text: "$4.5\\times10^5$" }, { id: "d", text: "$0.45\\times10^5$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form", statement: "$1\\leq a<10$." }], steps: [{ reasoning: "$45{,}000=4.5\\times10^4$.", marks: 1, markCode: "A" }], finalAnswer: "$4.5\\times10^4$" },
        },
        {
          id: "olm-u1-s3-st-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Write $0.00072$ in standard form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form", statement: "Negative power." }], steps: [
            { reasoning: "$0.00072=7.2\\times10^{-4}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$7.2\\times10^{-4}$" },
        },
        {
          id: "olm-u1-s3-st-q3", difficulty: "core", totalMarks: 3,
          stem: "Calculate $(2.5\\times10^4)\\times(4\\times10^{-2})$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form multiply", statement: "Multiply mantissas, add powers." }], steps: [
            { reasoning: "$2.5\\times4=10$; $10^{4+(-2)}=10^2$ → $10\\times10^2=1\\times10^3$.", marks: 1, markCode: "M" },
            { reasoning: "Renormalise: $10\\times10^2=1000=1\\times10^3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $1\\times10^3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1\\times10^3$" },
        },
        {
          id: "olm-u1-s3-st-q4", difficulty: "core", totalMarks: 4,
          stem: "The distance from Earth to the Sun is $1.5\\times10^8$ km and light travels $3\\times10^5$ km/s. How long does light take?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form divide", statement: "Time = distance/speed." }], steps: [
            { reasoning: "$t=\\frac{1.5\\times10^8}{3\\times10^5}=\\frac{1.5}{3}\\times10^3=0.5\\times10^3=500$ s.", marks: 1, markCode: "M" },
            { reasoning: "$=500$ seconds $\\approx8.33$ minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer in standard form: $5\\times10^2$ s.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$5\\times10^2$ s (≈8.3 min)" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u1-s3-idx-notes", title: "Indices and standard form — notes", summary: "Index laws and $a\\times10^n$.",
      sections: [
        { heading: "Indices", body: "Multiply→add, divide→subtract, power→multiply; $a^0=1$, $a^{-n}=1/a^n$, $a^{1/n}=\\sqrt[n]a$." },
        { heading: "Standard form", body: "$a\\times10^n$ with $1\\leq a<10$; multiply add powers, divide subtract powers." },
      ] },
  ],
};
