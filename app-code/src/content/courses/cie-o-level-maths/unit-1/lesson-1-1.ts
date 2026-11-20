import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olm-u1-lesson-1-1",
  code: "1-1",
  title: "Types of Number and Operations",
  goal: "I CAN classify numbers and apply the four operations accurately.",
  standards: ["4024: number"],
  vocabulary: [
    { term: "Natural numbers", definition: "Counting numbers 1, 2, 3, …" },
    { term: "Integers", definition: "Whole numbers including negatives and zero." },
    { term: "Rational numbers", definition: "Numbers expressible as $\\frac{p}{q}$ with integer $q\\neq0$." },
    { term: "Irrational numbers", definition: "Numbers that cannot be written as a fraction, e.g. $\\sqrt2$, $\\pi$." },
  ],
  concepts: [
    {
      id: "olm-u1-s1-classify",
      title: "Classifying numbers",
      skill: "Identify types of numbers at O Level.",
      lesson: {
        sections: [
          { heading: "The number sets", body: "Numbers nest inside each other: natural numbers $\\subset$ integers $\\subset$ rational numbers $\\subset$ real numbers. Rational numbers are fractions $\\frac{p}{q}$ — their decimals either terminate (like $0.75=\\frac34$) or recur (like $0.333\\ldots=\\frac13$). Irrational numbers have non-terminating, non-recurring decimals: $\\sqrt2$, $\\pi$, $e$. Prime numbers have exactly two factors; prime factorisation breaks any integer into primes uniquely." },
          { heading: "Operations order", body: "BIDMAS (or PEMDAS) governs evaluation: Brackets, Indices, Division and Multiplication (left to right), Addition and Subtraction (left to right). A common error is doing addition before multiplication. With fractions, find a common denominator before adding or subtracting; multiply fractions straight across and cancel before multiplying for efficiency." },
        ],
        keyFormulas: [
          { name: "Order of operations", statement: "BIDMAS: brackets → indices → ×÷ → +−" },
        ],
        workedExample: { problem: "Evaluate $3+4\\times(10-2^3)", solution: "Brackets first: $2^3=8$, so $10-8=2$. Then $4\\times2=8$. Then $3+8=11$. Answer: 11. (Doing $3+4$ first would wrongly give 15.)" },
      },
      questions: [
        {
          id: "olm-u1-s1-cl-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is irrational?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\sqrt2$" }, { id: "b", text: "$0.75$" }, { id: "c", text: "$\\frac{22}{7}$" }, { id: "d", text: "$-5$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Irrational", statement: "Non-terminating non-recurring." }], steps: [{ reasoning: "$\\sqrt2=1.414\\ldots$ never repeats; others are rational.", marks: 1, markCode: "A" }], finalAnswer: "$\\sqrt2$" },
        },
        {
          id: "olm-u1-s1-cl-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Write $0.\\dot{3}$ as a fraction.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Recurring decimal", statement: "Standard conversion." }], steps: [
            { reasoning: "Let $x=0.333\\ldots$; $10x=3.333\\ldots$; subtract: $9x=3$ → $x=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac13$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olm-u1-s1-cl-q3", difficulty: "core", totalMarks: 3,
          stem: "Evaluate $2^3\\times3-\\frac{18}{3}+5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 23 }] },
          markscheme: { principles: [{ kind: "technique", name: "BIDMAS", statement: "Indices first." }], steps: [
            { reasoning: "$2^3=8$; $8\\times3=24$; $\\frac{18}{3}=6$.", marks: 1, markCode: "M" },
            { reasoning: "$24-6+5=23$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 23.", marks: 1, markCode: "A" },
          ], finalAnswer: "23" },
        },
        {
          id: "olm-u1-s1-cl-q4", difficulty: "core", totalMarks: 4,
          stem: "Simplify $\\frac{2}{3}+\\frac{5}{6}-\\frac14$, giving your answer as a fraction in lowest terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fraction arithmetic", statement: "Common denominator 12." }], steps: [
            { reasoning: "$\\frac{8}{12}+\\frac{10}{12}-\\frac{3}{12}=\\frac{15}{12}$.", marks: 1, markCode: "M" },
            { reasoning: "$=\\frac54$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $0.667+0.833-0.25=1.25=\\frac54$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac54$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac54$" },
        },
      ],
    },
    {
      id: "olm-u1-s1-negative",
      title: "Negative numbers",
      skill: "Apply rules for negative numbers at O Level.",
      lesson: {
        sections: [
          { heading: "The rules", body: "Two negatives make a positive when multiplying or dividing: $(-3)\\times(-4)=12$. A negative times a positive is negative. For addition and subtraction, think of a number line: $-3+5=2$ (move right), $-3-5=-8$ (move left). Subtracting a negative is the same as adding: $5-(-3)=8$." },
          { heading: "Common pitfalls", body: "Students often write $-3^2=-9$ correctly but then misread $(-3)^2=9$ — brackets matter. Also $\\sqrt{-4}$ is not real (undefined in real numbers), and the 'negative of a square' differs from 'square of a negative'. Temperature and money problems are classic contexts: a drop of $5°$ from $-2°$ gives $-7°$." },
        ],
        keyFormulas: [
          { name: "Signs", statement: "$(-)(-)=+$; $(-)(+)=-$" },
        ],
        workedExample: { problem: "Evaluate $(-2)^2-(-3)\\times4$.", solution: "$(-2)^2=4$; $(-3)\\times4=-12$; $4-(-12)=4+12=16$. Answer: 16." },
      },
      questions: [
        {
          id: "olm-u1-s1-ne-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$(-4)\\times(-5)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "20" }, { id: "b", text: "-20" }, { id: "c", text: "-1" }, { id: "d", text: "9" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Sign rule", statement: "Neg × neg = pos." }], steps: [{ reasoning: "$(-4)(-5)=+20$.", marks: 1, markCode: "A" }], finalAnswer: "20" },
        },
        {
          id: "olm-u1-s1-ne-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $-3-(-7)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Subtract negative", statement: "Add instead." }], steps: [
            { reasoning: "$-3-(-7)=-3+7=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u1-s1-ne-q3", difficulty: "core", totalMarks: 3,
          stem: "Evaluate $(-2)^3+(-3)^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Powers of negatives", statement: "Brackets matter." }], steps: [
            { reasoning: "$(-2)^3=-8$ (odd power stays negative); $(-3)^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "$-8+9=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olm-u1-s1-ne-q4", difficulty: "core", totalMarks: 4,
          stem: "The temperature was $-5°$C and dropped by $8°$C, then rose by $12°$C. Find the final temperature.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Context", statement: "Model with negatives." }], steps: [
            { reasoning: "Start $-5$; drop 8 → $-13$.", marks: 1, markCode: "M" },
            { reasoning: "Rise 12 → $-13+12=-1$.", marks: 1, markCode: "M" },
            { reasoning: "Final temperature $-1°$C.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-1°$C.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-1°$C" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u1-s1-num-notes", title: "Number — notes", summary: "Number sets, BIDMAS, negatives.",
      sections: [
        { heading: "Sets", body: "Natural ⊂ integers ⊂ rational ⊂ real; irrationals like $\\sqrt2$, $\\pi$ sit outside rationals." },
        { heading: "Operations", body: "BIDMAS order; neg × neg = pos; subtracting a negative adds." },
      ] },
  ],
};
