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
            { id: "a", text: "$x-2$" },
            { id: "b", text: "$x+2$" },
            { id: "c", text: "$1$" },
            { id: "d", text: "$x^2+2$" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u2-s5-fr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Simplify $\\frac{8x^2}{4x}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4x$" },
            { id: "b", text: "$2x^2$" },
            { id: "c", text: "$\\frac{2}{x}$" },
            { id: "d", text: "$2x$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Cancel", statement: "Common factor $4x$." }], steps: [{ reasoning: "$\\frac{8x^2}{4x}=2x$.", marks: 1, markCode: "A" }], finalAnswer: "$2x$" },
        },
        {
          id: "olm-u2-s5-fr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Given that $\\frac{x^2-9}{x+3}=x-3$ for $x\\neq-3$, find the value of the expression when $x=7$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Simplify then substitute", statement: "Difference of squares." }], steps: [
            { reasoning: "$x-3$ at $x=7$ is $4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u2-s5-fr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Simplify $\\frac{10x^2y}{5xy^2}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2x^2y$" },
            { id: "b", text: "$2xy$" },
            { id: "c", text: "$\\frac{2y}{x}$" },
            { id: "d", text: "$\\frac{2x}{y}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Cancel", statement: "Common factor $5xy$." }], steps: [{ reasoning: "$\\frac{10x^2y}{5xy^2}=\\frac{2x}{y}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{2x}{y}$" },
        },
        {
          id: "olm-u2-s5-fr-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Simplify $\\frac{x^2+2x}{x}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2+2$" },
            { id: "b", text: "$1+2x$" },
            { id: "c", text: "$x+2$" },
            { id: "d", text: "$x+2x$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise-cancel", statement: "Common factor $x$." }], steps: [{ reasoning: "$\\frac{x(x+2)}{x}=x+2$.", marks: 1, markCode: "A" }], finalAnswer: "$x+2$" },
        },
        {
          id: "olm-u2-s5-fr-q9", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\frac{x^2-5x+6}{x^2-9}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise both", statement: "Cancel common factor." }], steps: [
            { reasoning: "$\\frac{(x-2)(x-3)}{(x-3)(x+3)}=\\frac{x-2}{x+3}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown, $x\\neq\\pm3$.", marks: 1, markCode: "M" },
            { reasoning: "Restrictions stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{x-2}{x+3}$" },
        },
        {
          id: "olm-u2-s5-fr-q10", difficulty: "core", totalMarks: 2,
          stem: "Simplify $\\frac{2x+4}{x+2}$ and find its value when $x=6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Factorise-cancel", statement: "Constant result." }], steps: [
            { reasoning: "$\\frac{2(x+2)}{x+2}=2$ for $x\\neq-2$.", marks: 1, markCode: "M" },
            { reasoning: "Value when $x=6$ is 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u2-s5-fr-q11", difficulty: "core", totalMarks: 1,
          stem: "Simplify $\\frac{x^2-16}{x-4}$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1$" },
            { id: "b", text: "$x^2+4$" },
            { id: "c", text: "$x+4$" },
            { id: "d", text: "$x-4$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise-cancel", statement: "Difference of squares." }], steps: [{ reasoning: "$\\frac{(x-4)(x+4)}{x-4}=x+4$.", marks: 1, markCode: "A" }], finalAnswer: "$x+4$" },
        },
        {
          id: "olm-u2-s5-fr-q12", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\frac{1}{x-1}-\\frac{1}{x+1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Common denominator", statement: "$(x-1)(x+1)=x^2-1$." }], steps: [
            { reasoning: "$\\frac{(x+1)-(x-1)}{x^2-1}=\\frac{2}{x^2-1}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Check at $x=2$: $1-\\frac13=\\frac23$; formula: $\\frac{2}{3}$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{2}{x^2-1}$" },
        },
        {
          id: "olm-u2-s5-fr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Simplify $\\frac{3}{x+1}+\\frac{2}{x-1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Common denominator", statement: "$x^2-1$." }], steps: [
            { reasoning: "$\\frac{3(x-1)+2(x+1)}{x^2-1}$.", marks: 1, markCode: "M" },
            { reasoning: "$=\\frac{3x-3+2x+2}{x^2-1}=\\frac{5x-1}{x^2-1}$.", marks: 1, markCode: "M" },
            { reasoning: "Check at $x=2$: $\\frac{3}{3}+\\frac{2}{1}=1+2=3$; formula: $\\frac{10-1}{3}=3$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac{5x-1}{x^2-1}$, $x\\neq\\pm1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{5x-1}{x^2-1}$" },
        },
        {
          id: "olm-u2-s5-fr-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which is equivalent to $\\frac{x^2-4}{x^2+4x+4}$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{x+2}{x-2}$" },
            { id: "b", text: "$\\frac{x-2}{x+2}$" },
            { id: "c", text: "$\\frac{x^2-2}{x+2}$" },
            { id: "d", text: "$\\frac{x-2}{x-2}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise-cancel", statement: "$(x-2)(x+2)/(x+2)^2$." }], steps: [{ reasoning: "$\\frac{(x-2)(x+2)}{(x+2)^2}=\\frac{x-2}{x+2}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{x-2}{x+2}$" },
        },
        {
          id: "olm-u2-s5-fr-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Simplify $\\frac{x^2+3x}{x^2-9}$ and find its value when $x=4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Factorise-cancel", statement: "Cancel $(x+3)$." }], steps: [
            { reasoning: "$\\frac{x(x+3)}{(x-3)(x+3)}=\\frac{x}{x-3}$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=4$: $\\frac{4}{1}=4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u2-s5-fr-q16", difficulty: "challenge", totalMarks: 2,
          stem: "Simplify $\\frac{x^2+4x+4}{x^2-4}$ and find its value when $x=3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Factorise-cancel", statement: "$(x+2)^2/(x-2)(x+2)$." }], steps: [
            { reasoning: "$\\frac{(x+2)^2}{(x-2)(x+2)}=\\frac{x+2}{x-2}$.", marks: 1, markCode: "M" },
            { reasoning: "At $x=3$: $\\frac{5}{1}=5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
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
            { id: "a", text: "$2^{12}$" },
            { id: "b", text: "$2^7$" },
            { id: "c", text: "$2^1$" },
            { id: "d", text: "$4^7$" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u2-s5-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$5^2\\times5^3=$",
          response: { type: "mcq", choices: [
            { id: "a", text: "$25^5$" },
            { id: "b", text: "$5^6$" },
            { id: "c", text: "$5^1$" },
            { id: "d", text: "$5^5$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Add powers." }], steps: [{ reasoning: "$5^{2+3}=5^5$.", marks: 1, markCode: "A" }], finalAnswer: "$5^5$" },
        },
        {
          id: "olm-u2-s5-in-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $16^{3/4}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "formula", name: "Fractional index", statement: "$a^{m/n}=(\\sqrt[n]a)^m$." }], steps: [
            { reasoning: "$16^{3/4}=(\\sqrt[4]{16})^3=2^3=8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olm-u2-s5-in-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Evaluate $8^{-2/3}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "formula", name: "Negative fractional", statement: "Reciprocal then power." }], steps: [
            { reasoning: "$8^{-2/3}=\\frac{1}{8^{2/3}}=\\frac{1}{(\\sqrt[3]{8})^2}=\\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0.25$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac14$" },
        },
        {
          id: "olm-u2-s5-in-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Simplify $x^5\\div x^2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^10$" },
            { id: "b", text: "$x^7$" },
            { id: "c", text: "$x^{2.5}$" },
            { id: "d", text: "$x^3$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Subtract powers." }], steps: [{ reasoning: "$x^{5-2}=x^3$.", marks: 1, markCode: "A" }], finalAnswer: "$x^3$" },
        },
        {
          id: "olm-u2-s5-in-q9", difficulty: "core", totalMarks: 1,
          stem: "Simplify $(2x^3)^2$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4x^9$" },
            { id: "b", text: "$4x^6$" },
            { id: "c", text: "$2x^6$" },
            { id: "d", text: "$8x^6$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Power of a product." }], steps: [{ reasoning: "$4x^6$.", marks: 1, markCode: "A" }], finalAnswer: "$4x^6$" },
        },
        {
          id: "olm-u2-s5-in-q10", difficulty: "core", totalMarks: 3,
          stem: "Simplify $\\frac{a^3b^2}{a^{-2}b}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Subtract powers incl. negative." }], steps: [
            { reasoning: "$=a^{3-(-2)}b^{2-1}=a^5b$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $a^5b$.", marks: 1, markCode: "M" },
            { reasoning: "Check: multiplying by $a^{-2}b$ gives back $a^3b^2$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a^5b$" },
        },
        {
          id: "olm-u2-s5-in-q11", difficulty: "core", totalMarks: 2,
          stem: "Evaluate $\\left(\\frac{27}{8}\\right)^{2/3}$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.25 }] },
          markscheme: { principles: [{ kind: "formula", name: "Fractional index", statement: "Cube root then square." }], steps: [
            { reasoning: "$\\left(\\sqrt[3]{\\frac{27}{8}}\\right)^2=\\left(\\frac32\\right)^2=\\frac94$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2.25$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac94$" },
        },
        {
          id: "olm-u2-s5-in-q12", difficulty: "core", totalMarks: 1,
          stem: "$a^{m-n}$ is equivalent to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{a^m}{a^n}$" },
            { id: "b", text: "$a^m-a^n$" },
            { id: "c", text: "$a^{mn}$" },
            { id: "d", text: "$\\frac{a^n}{a^m}$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Division law." }], steps: [{ reasoning: "$a^m\\div a^n=a^{m-n}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{a^m}{a^n}$" },
        },
        {
          id: "olm-u2-s5-in-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Simplify $\\frac{(2x^2y)^3}{4xy^2}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Power then divide." }], steps: [
            { reasoning: "$(2x^2y)^3=8x^6y^3$.", marks: 1, markCode: "M" },
            { reasoning: "$\\frac{8x^6y^3}{4xy^2}=2x^5y$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2x^5y$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2x^5y\\times4xy^2=8x^6y^3$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2x^5y$" },
        },
        {
          id: "olm-u2-s5-in-q14", difficulty: "challenge", totalMarks: 2,
          stem: "When $x=3$, evaluate $x^{-2}\\times x^5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 27 }] },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Combine powers." }], steps: [
            { reasoning: "$x^{-2}\\times x^5=x^3$; at $x=3$: $27$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 27.", marks: 1, markCode: "A" },
          ], finalAnswer: "27" },
        },
        {
          id: "olm-u2-s5-in-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Simplify $\\frac{x^2y}{x^{-1}y^3}$, giving your answer with positive indices only.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Divide powers." }], steps: [
            { reasoning: "$=x^{2-(-1)}y^{1-3}=x^3y^{-2}$.", marks: 1, markCode: "M" },
            { reasoning: "$y^{-2}=\\frac{1}{y^2}$ → $\\frac{x^3}{y^2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Positive indices only as required.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{x^3}{y^2}$" },
        },
        {
          id: "olm-u2-s5-in-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The value of $8^{2/3}\\times8^{-1/3}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "16" },
            { id: "c", text: "4" },
            { id: "d", text: "8" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Indices", statement: "Add powers." }], steps: [{ reasoning: "$8^{2/3-1/3}=8^{1/3}=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
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
