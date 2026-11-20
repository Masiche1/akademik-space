import type { Lesson } from "../../../types.ts";

export const lesson25: Lesson = {
  id: "olm-u2-lesson-2-5",
  code: "2-5",
  title: "Algebraic Fractions and Indices",
  goal: "I CAN manipulate algebraic fractions and apply indices laws.",
  standards: ["4024: algebra"],
  vocabulary: [
    { term: "Algebraic fraction", definition: "Fraction with algebraic numerator/denominator." },
    { term: "Indices", definition: "Powers/exponents of a number or variable." },
    { term: "Laws of indices", definition: "Rules for combining powers." },
    { term: "Negative index", definition: "$a^{-n}=\\frac1{a^n}$." },
  ],
  concepts: [
    {
      id: "olm-u2-s5-fractions",
      title: "Algebraic fractions",
      skill: "Simplify and operate on algebraic fractions at O Level.",
      lesson: {
        sections: [
          { heading: "Simplifying", body: "Factorise numerator and denominator first, then cancel common factors. E.g. $\\frac{x^2-4}{x^2+4x+4}=\\frac{(x-2)(x+2)}{(x+2)^2}=\\frac{x-2}{x+2}$. Never cancel terms — only factors. State restrictions: denominator can't be zero, so $x\\neq-2$ here." },
          { heading: "Adding/subtracting", body: "Find a common denominator (LCM of denominators), rewrite each fraction, combine numerators. For $\\frac{1}{x}+\\frac{2}{x-1}$: common denominator $x(x-1)$ → $\\frac{(x-1)+2x}{x(x-1)}=\\frac{3x-1}{x(x-1)}$. Always factorise the result to check for further cancellation." },
        ],
        keyFormulas: [
          { name: "Cancel", statement: "Only factors, never terms" },
        ],
        workedExample: { problem: "Simplify $\\frac{x^2-9}{x^2+6x+9}$.", solution: "$\\frac{(x-3)(x+3)}{(x+3)^2}=\\frac{x-3}{x+3}$, $x\\neq-3$." },
      },
      questions: [
        {
          id: "olm-u2-s5-fr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Simplify $\\frac{x^2-4}{x-2}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x+2$" }, { id: "b", text: "$x-2$" }, { id: "c", text: "$x^2+2$" }, { id: "d", text: "$1$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise-cancel", statement: "Difference of squares." }], steps: [{ reasoning: "$\\frac{(x-2)(x+2)}{x-2}=x+2$.", marks: 1, markCode: "A" }], finalAnswer: "$x+2$" },
        },
        {
          id: "olm-u2-s5-fr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Simplify $\\frac{6x}{9x^2}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Cancel", statement: "Common factor." }], steps: [
            { reasoning: "$\\frac{6x}{9x^2}=\\frac{2}{3x}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{2}{3x}$" },
        },
        {
          id: "olm-u2-s5-fr-q3", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\frac{x^2+5x+6}{x^2-4}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise both", statement: "Cancel common." }], steps: [
            { reasoning: "$\\frac{(x+2)(x+3)}{(x-2)(x+2)}=\\frac{x+3}{x-2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{x+3}{x-2}$, $x\\neq\\pm2$.", marks: 1, markCode: "M" },
            { reasoning: "Restrictions stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{x+3}{x-2}$" },
        },
        {
          id: "olm-u2-s5-fr-q4", difficulty: "core", totalMarks: 4,
          stem: "Simplify $\\frac{1}{x}+\\frac{1}{x+1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Common denominator", statement: "$x(x+1)$." }], steps: [
            { reasoning: "$\\frac{(x+1)+x}{x(x+1)}=\\frac{2x+1}{x(x+1)}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Check at x=1: $1+\\frac12=\\frac32$; formula: $\\frac{3}{2}$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{2x+1}{x(x+1)}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{2x+1}{x(x+1)}$" },
        },
      ],
    },
    {
      id: "olm-u2-s5-indices",
      title: "Laws of indices",
      skill: "Apply indices laws at O Level.",
      lesson: {
        sections: [
          { heading: "The laws", body: "$a^m\\times a^n=a^{m+n}$; $a^m\\div a^n=a^{m-n}$; $(a^m)^n=a^{mn}$; $a^0=1$; $a^{-n}=\\frac1{a^n}$; $a^{1/n}=\\sqrt[n]{a}$; $a^{m/n}=\\sqrt[n]{a^m}$. These work for any base — positive, negative, fractional or algebraic." },
          { heading: "Negative and fractional", body: "Negative indices mean reciprocal: $2^{-3}=\\frac18$. Fractional indices mean roots: $8^{1/3}=2$, $4^{3/2}=(\\sqrt4)^3=8$. For algebraic expressions, apply laws term by term: $x^2y^3\\div xy^2=xy$. Simplify fully before substituting values." },
        ],
        keyFormulas: [
          { name: "Laws", statement: "$a^{m+n}=a^ma^n$; $a^{-n}=1/a^n$; $a^{1/n}=\\sqrt[n]a$" },
        ],
        workedExample: { problem: "Simplify $\\frac{x^3y^2}{x^{-1}y}$.", solution: "$=x^{3-(-1)}y^{2-1}=x^4y$." },
      },
      questions: [
        {
          id: "olm-u2-s5-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$2^3\\times2^4=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2^7$" }, { id: "b", text: "$2^{12}$" }, { id: "c", text: "$4^7$" }, { id: "d", text: "$2^1$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Add powers." }], steps: [{ reasoning: "$2^{3+4}=2^7$.", marks: 1, markCode: "A" }], finalAnswer: "$2^7$" },
        },
        {
          id: "olm-u2-s5-in-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $27^{1/3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Fractional index", statement: "Cube root." }], steps: [
            { reasoning: "$27^{1/3}=\\sqrt[3]{27}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u2-s5-in-q3", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\frac{a^4b^3}{a^2b}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Subtract powers." }], steps: [
            { reasoning: "$=a^{4-2}b^{3-1}=a^2b^2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $a^2b^2$.", marks: 1, markCode: "M" },
            { reasoning: "Could also write $(ab)^2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a^2b^2$" },
        },
        {
          id: "olm-u2-s5-in-q4", difficulty: "core", totalMarks: 4,
          stem: "Evaluate $\\left(\\frac{8}{27}\\right)^{-2/3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Negative fractional", statement: "Reciprocal then power." }], steps: [
            { reasoning: "$\\left(\\frac{27}{8}\\right)^{2/3}=\\left(\\sqrt[3]{\\frac{27}{8}}\\right)^2=\\left(\\frac32\\right)^2=\\frac94$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac94$.", marks: 1, markCode: "M" },
            { reasoning: "Or $\\left(\\frac{8}{27}\\right)^{1/3}=\\frac23$ → $\\left(\\frac23\\right)^{-2}=\\frac94$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac94$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u2-s5-algfrac-notes", title: "Algebraic fractions & indices — notes", summary: "Simplifying fractions and powers.",
      sections: [
        { heading: "Fractions", body: "Factorise then cancel factors only; common denominator for add/subtract." },
        { heading: "Indices", body: "$a^{m+n}$, $a^{-n}=1/a^n$, $a^{1/n}=\\sqrt[n]a$, $a^{m/n}=(\\sqrt[n]a)^m$." },
      ] },
  ],
};
