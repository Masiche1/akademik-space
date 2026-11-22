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
            { id: "a", text: "$3^6$" },
            { id: "b", text: "$9^6$" },
            { id: "c", text: "$3^{10}$" },
            { id: "d", text: "$3^8$" },
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
        {
          id: "olm-u1-s3-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$5^3\\div5^1$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$5^4$" },
            { id: "b", text: "$5^2$" },
            { id: "c", text: "$25^2$" },
            { id: "d", text: "$1$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Quotient law", statement: "Subtract indices when dividing." }], steps: [{ reasoning: "$5^{3-1}=5^2$.", marks: 1, markCode: "A" }], finalAnswer: "$5^2$" },
        },
        {
          id: "olm-u1-s3-in-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $2^{-3}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.125 }] },
          markscheme: { principles: [{ kind: "formula", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$." }], steps: [
            { reasoning: "$2^{-3}=\\frac{1}{2^3}=\\frac18$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.125.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac18$" },
        },
        {
          id: "olm-u1-s3-in-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Simplify $x^7\\div x^3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Quotient law", statement: "$a^m\\div a^n=a^{m-n}$." }], steps: [
            { reasoning: "$x^{7-3}=x^4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x^4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^4$" },
        },
        {
          id: "olm-u1-s3-in-q8", difficulty: "core", totalMarks: 1,
          stem: "Which is equal to $(3x)^2$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3x^2$" },
            { id: "b", text: "$9x^2$" },
            { id: "c", text: "$6x$" },
            { id: "d", text: "$9x$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Power of a product", statement: "$(ab)^n=a^nb^n$." }], steps: [{ reasoning: "$(3x)^2=3^2\\times x^2=9x^2$.", marks: 1, markCode: "A" }], finalAnswer: "$9x^2$" },
        },
        {
          id: "olm-u1-s3-in-q9", difficulty: "core", totalMarks: 3,
          stem: "Evaluate $16^{3/4}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Fractional index", statement: "Root then power." }], steps: [
            { reasoning: "$16^{1/4}=\\sqrt[4]{16}=2$.", marks: 1, markCode: "M" },
            { reasoning: "$2^3=8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olm-u1-s3-in-q10", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\frac{y^4\\times y^2}{y^3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Index laws", statement: "Multiply→add, divide→subtract." }], steps: [
            { reasoning: "Numerator: $y^{4+2}=y^6$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{y^6}{y^3}=y^{6-3}=y^3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $y^3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y^3$" },
        },
        {
          id: "olm-u1-s3-in-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate $125^{-2/3}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.04 }] },
          markscheme: { principles: [{ kind: "formula", name: "Fractional and negative indices", statement: "$a^{-n}=\\frac{1}{a^n}$; $a^{1/n}=\\sqrt[n]{a}$." }], steps: [
            { reasoning: "$125^{1/3}=\\sqrt[3]{125}=5$.", marks: 1, markCode: "M" },
            { reasoning: "$125^{2/3}=5^2=25$, so $125^{-2/3}=\\frac{1}{25}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{1}{25}=0.04$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.04.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac1{25}$" },
        },
        {
          id: "olm-u1-s3-in-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which is equal to $a^2\\times a^3\\div a^4$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1$" },
            { id: "b", text: "$a^{11}$" },
            { id: "c", text: "$a^5$" },
            { id: "d", text: "$a$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Index laws", statement: "Combine powers of the same base." }], steps: [{ reasoning: "$a^{2+3-4}=a^1=a$.", marks: 1, markCode: "A" }], finalAnswer: "$a$" },
        },
        {
          id: "olm-u1-s3-in-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Simplify $\\left(\\frac{27x^6}{y^3}\\right)^{1/3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fractional power of fraction", statement: "Apply the index to each part." }], steps: [
            { reasoning: "Apply $\\frac13$ to numerator and denominator: $\\frac{27^{1/3}x^{6\\times\\frac13}}{y^{3\\times\\frac13}}$.", marks: 1, markCode: "M" },
            { reasoning: "$27^{1/3}=3$; $x^2$; $y^1$ in the denominator.", marks: 1, markCode: "M" },
            { reasoning: "Result: $\\frac{3x^2}{y}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{3x^2}{y}$" },
        },
        {
          id: "olm-u1-s3-in-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Evaluate $4^{-2}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.0625 }] },
          markscheme: { principles: [{ kind: "formula", name: "Negative index", statement: "$a^{-n}=\\frac{1}{a^n}$." }], steps: [
            { reasoning: "$4^{-2}=\\frac{1}{4^2}=\\frac{1}{16}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{1}{16}=0.0625$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.0625.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac1{16}$" },
        },
        {
          id: "olm-u1-s3-in-q15", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\frac{6a^2b}{9ab^2}\\times\\frac{3b}{2a}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Index laws", statement: "Combine coefficients and powers separately." }], steps: [
            { reasoning: "Coefficients: $\\frac{6}{9}\\times\\frac{3}{2}=\\frac{18}{18}=1$.", marks: 1, markCode: "M" },
            { reasoning: "Powers: $a^{2-1-1}=a^0=1$; $b^{1-2+1}=b^0=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u1-s3-in-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Simplify $\\frac{x^{2n+1}}{x^{n-1}}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^{3n}$" },
            { id: "b", text: "$x^{n+2}$" },
            { id: "c", text: "$x^{n}$" },
            { id: "d", text: "$x^{2n+2}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Quotient law", statement: "Subtract indices." }], steps: [{ reasoning: "$x^{(2n+1)-(n-1)}=x^{n+2}$.", marks: 1, markCode: "A" }], finalAnswer: "$x^{n+2}$" },
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
            { id: "a", text: "$45\\times10^3$" },
            { id: "b", text: "$4.5\\times10^5$" },
            { id: "c", text: "$0.45\\times10^5$" },
            { id: "d", text: "$4.5\\times10^4$" },
          ], correctChoiceId: "d" },
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
        {
          id: "olm-u1-s3-st-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$0.0034$ in standard form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.34\\times10^{-2}$" },
            { id: "b", text: "$3.4\\times10^3$" },
            { id: "c", text: "$3.4\\times10^{-3}$" },
            { id: "d", text: "$34\\times10^{-4}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form", statement: "$1\\leq a<10$, integer power of 10." }], steps: [{ reasoning: "$0.0034=3.4\\times10^{-3}$.", marks: 1, markCode: "A" }], finalAnswer: "$3.4\\times10^{-3}$" },
        },
        {
          id: "olm-u1-s3-st-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Write $6.2\\times10^3$ as an ordinary number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6200 }] },
          markscheme: { principles: [{ kind: "technique", name: "Standard form", statement: "Positive power shifts decimal right." }], steps: [
            { reasoning: "$6.2\\times10^3=6.2\\times1000=6200$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6200.", marks: 1, markCode: "A" },
          ], finalAnswer: "6200" },
        },
        {
          id: "olm-u1-s3-st-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Write 580 000 in standard form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form", statement: "$a\\times10^n$ with $1\\leq a<10$." }], steps: [
            { reasoning: "Move the decimal point 5 places: $580000=5.8\\times10^5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $5.8\\times10^5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$5.8\\times10^5$" },
        },
        {
          id: "olm-u1-s3-st-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these is correctly written in standard form?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$0.8\\times10^4$" },
            { id: "b", text: "$12\\times10^2$" },
            { id: "c", text: "$45\\times10^3$" },
            { id: "d", text: "$7.2\\times10^{-2}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form", statement: "Need $1\\leq a<10$." }], steps: [{ reasoning: "Only $7.2\\times10^{-2}$ has $1\\leq a<10$.", marks: 1, markCode: "A" }], finalAnswer: "$7.2\\times10^{-2}$" },
        },
        {
          id: "olm-u1-s3-st-q9", difficulty: "core", totalMarks: 3,
          stem: "Calculate $(3\\times10^5)\\times(2\\times10^{-2})$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6000 }] },
          markscheme: { principles: [{ kind: "technique", name: "Standard form multiply", statement: "Multiply mantissas, add powers." }], steps: [
            { reasoning: "$3\\times2=6$ and $10^{5+(-2)}=10^3$.", marks: 1, markCode: "M" },
            { reasoning: "$6\\times10^3=6000$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6000.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6\\times10^3$" },
        },
        {
          id: "olm-u1-s3-st-q10", difficulty: "core", totalMarks: 3,
          stem: "Write $4.5\\times10^3+2.3\\times10^4$ in standard form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form addition", statement: "Use the same power of 10 first." }], steps: [
            { reasoning: "$4.5\\times10^3=0.45\\times10^4$; add mantissas: $0.45+2.3=2.75$.", marks: 1, markCode: "M" },
            { reasoning: "Sum $=2.75\\times10^4$ (= 27 500).", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2.75\\times10^4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2.75\\times10^4$" },
        },
        {
          id: "olm-u1-s3-st-q11", difficulty: "challenge", totalMarks: 4,
          stem: "A colony of $10^6$ bacteria each has mass $3\\times10^{-9}$ g. Find the total mass in grams.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.003 }] },
          markscheme: { principles: [{ kind: "technique", name: "Standard form multiply", statement: "Multiply mantissas, add powers." }], steps: [
            { reasoning: "Mantissas: $3\\times1=3$.", marks: 1, markCode: "M" },
            { reasoning: "Powers: $10^{6+(-9)}=10^{-3}$, so total $=3\\times10^{-3}$ g.", marks: 1, markCode: "M" },
            { reasoning: "$3\\times10^{-3}=0.003$ g.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.003 g.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3\\times10^{-3}$ g" },
        },
        {
          id: "olm-u1-s3-st-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate $\\frac{(6\\times10^8)(4\\times10^3)}{8\\times10^5}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form arithmetic", statement: "Multiply then divide." }], steps: [
            { reasoning: "Numerator: $24\\times10^{11}$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{24}{8}=3$; powers: $10^{11-5}=10^6$.", marks: 1, markCode: "M" },
            { reasoning: "Result: $3\\times10^6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3\\times10^6$" },
        },
        {
          id: "olm-u1-s3-st-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these numbers is the largest?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1.5\\times10^4$" },
            { id: "b", text: "$2\\times10^3$" },
            { id: "c", text: "$9\\times10^2$" },
            { id: "d", text: "$7\\times10^1$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form", statement: "Compare powers of 10 first." }], steps: [{ reasoning: "$1.5\\times10^4=15000$ is larger than 2000, 900 and 70.", marks: 1, markCode: "A" }], finalAnswer: "$1.5\\times10^4$" },
        },
        {
          id: "olm-u1-s3-st-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Write $3.05\\times10^4$ as an ordinary number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 30500 }] },
          markscheme: { principles: [{ kind: "technique", name: "Standard form", statement: "Positive power shifts decimal right." }], steps: [
            { reasoning: "$3.05\\times10^4=3.05\\times10000$.", marks: 1, markCode: "M" },
            { reasoning: "$=30500$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 30500.", marks: 1, markCode: "A" },
          ], finalAnswer: "30500" },
        },
        {
          id: "olm-u1-s3-st-q15", difficulty: "core", totalMarks: 3,
          stem: "The population of a city is $2.4\\times10^6$ and of its country is $8.5\\times10^7$. Find the difference in standard form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form subtraction", statement: "Use the same power of 10." }], steps: [
            { reasoning: "$2.4\\times10^6=0.24\\times10^7$; subtract: $8.5-0.24=8.26$.", marks: 1, markCode: "M" },
            { reasoning: "Difference $=8.26\\times10^7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $8.26\\times10^7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$8.26\\times10^7$" },
        },
        {
          id: "olm-u1-s3-st-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate $\\frac{8\\times10^5}{2\\times10^{-2}}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Standard form divide", statement: "Divide mantissas, subtract powers." }], steps: [
            { reasoning: "$\\frac{8}{2}=4$.", marks: 1, markCode: "M" },
            { reasoning: "Powers: $10^{5-(-2)}=10^7$.", marks: 1, markCode: "M" },
            { reasoning: "Result: $4\\times10^7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4\\times10^7$" },
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
