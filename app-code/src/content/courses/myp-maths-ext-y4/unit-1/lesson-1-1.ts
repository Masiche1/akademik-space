import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypme4-u1-lesson-1-1",
  code: "1-1",
  title: "Fractional and Rational Indices",
  goal: "I CAN apply fractional and rational indices, simplify expressions with them, and solve equations involving indices.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Fractional index", definition: "An index that is a fraction, e.g. $a^{\\frac{1}{2}}=\\sqrt{a}$ and $a^{\\frac{1}{n}}=\\sqrt[n]{a}$." },
    { term: "Rational index", definition: "An index that is a rational number (fraction of integers), e.g. $a^{\\frac{3}{2}}=a\\sqrt{a}$." },
    { term: "Root as power", definition: "$\\sqrt[n]{a}=a^{\\frac{1}{n}}$; the denominator gives the root, the numerator gives the power." },
    { term: "Index equation", definition: "An equation where the unknown appears in an index, e.g. $2^x=32$." },
  ],
  concepts: [
    {
      id: "mypme4-u1-fractional",
      title: "Fractional indices",
      skill: "Convert between roots and fractional powers and simplify expressions with fractional indices.",
      lesson: {
        sections: [
          {
            heading: "Roots as powers",
            body: "A fractional index combines a root and a power: $a^{\\frac{m}{n}}=\\left(\\sqrt[n]{a}\\right)^m=\\sqrt[n]{a^m}$. Examples: $8^{\\frac{1}{3}}=\\sqrt[3]{8}=2$; $16^{\\frac{3}{4}}=\\left(\\sqrt[4]{16}\\right)^3=2^3=8$.",
          },
          {
            heading: "Simplifying expressions",
            body: "The index laws still apply: $x^{\\frac{1}{2}}\\times x^{\\frac{1}{3}}=x^{\\frac{5}{6}}$. To simplify $\\left(\\frac{x^2}{y}\\right)^{\\frac{1}{2}}$, take the root of each part: $\\frac{x}{\\sqrt{y}}$ (for $x>0$).",
          },
          {
            heading: "Solving index equations",
            body: "Write both sides with the same base: $9^x=27 \\Rightarrow (3^2)^x=3^3 \\Rightarrow 3^{2x}=3^3 \\Rightarrow 2x=3 \\Rightarrow x=\\frac{3}{2}$. If bases can't match, take logarithms (next lesson).",
          },
        ],
        keyFormulas: [
          { name: "Fractional index", statement: "$a^{\\frac{m}{n}}=\\left(\\sqrt[n]{a}\\right)^m$" },
          { name: "Square root", statement: "$a^{\\frac{1}{2}}=\\sqrt{a}$" },
          { name: "Cube root", statement: "$a^{\\frac{1}{3}}=\\sqrt[3]{a}$" },
        ],
        workedExample: {
          problem: "Evaluate $27^{\\frac{2}{3}}$.",
          solution: "$27^{\\frac{2}{3}}=\\left(\\sqrt[3]{27}\\right)^2=3^2=9$.",
        },
      },
      questions: [
        {
          id: "mypme4-u1-fidx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $16^{\\frac{1}{2}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "8" },
              { id: "c", text: "$\\sqrt{16}$ only" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fractional index", statement: "$a^{\\frac{1}{2}}=\\sqrt{a}$." },
            ],
            steps: [
              { reasoning: "$16^{\\frac{1}{2}}=\\sqrt{16}=4$.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 4",
            commonErrors: ["Leaving the answer as $\\sqrt{16}$ without evaluating."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-fidx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $8^{\\frac{2}{3}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "2" },
              { id: "c", text: "16" },
              { id: "d", text: "$\\frac{16}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$." },
            ],
            steps: [
              { reasoning: "$\\sqrt[3]{8}=2$; $2^2=4$.", working: "2^2=4", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Computing $8^{\\frac{1}{3}}\\times2$ incorrectly or squaring 8 first."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-fidx-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $4^x=32$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=\\frac{3}{2}$" },
              { id: "b", text: "$x=\\frac{5}{2}$" },
              { id: "c", text: "$x=3$" },
              { id: "d", text: "$x=5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same base", statement: "Write both sides as powers of 2: $2^{2x}=2^5$." },
            ],
            steps: [
              { reasoning: "$4^x=(2^2)^x=2^{2x}$; $32=2^5$.", working: "2^{2x}=2^5", marks: 1, markCode: "M" },
              { reasoning: "$2x=5$, so $x=\\frac{5}{2}$.", working: "x=\\frac{5}{2}", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac{5}{2}$",
            commonErrors: ["Trying $x=\\frac{32}{4}=8$ — indices don't work like that."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-fidx-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify expressions involving fractional indices.",
          parts: [
            { label: "a", prompt: "Evaluate $25^{\\frac{3}{2}}$.", marks: 2 },
            { label: "b", prompt: "Simplify $x^{\\frac{1}{2}}\\times x^{\\frac{1}{3}}$.", marks: 2 },
            { label: "c", prompt: "Simplify $\\left(\\frac{8x^6}{y^3}\\right)^{\\frac{1}{3}}$ for $x,y>0$.", marks: 3 },
            { label: "d", prompt: "Solve $9^x=\\frac{1}{27}$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$; index laws apply." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sqrt{25}=5$; $5^3=125$.", working: "125", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the value.", working: "125", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add indices: $\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}$.", working: "x^{\\frac{5}{6}}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", working: "x^{\\frac{5}{6}}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cube root of each part: $\\sqrt[3]{8}=2$, $\\sqrt[3]{x^6}=x^2$, $\\sqrt[3]{y^3}=y$ in denominator.", working: "2x^2y^{-1}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write as fraction: $\\frac{2x^2}{y}$.", working: "\\frac{2x^2}{y}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the simplified form.", working: "\\frac{2x^2}{y}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$9^x=(3^2)^x=3^{2x}$; $\\frac{1}{27}=3^{-3}$; $2x=-3$, $x=-\\frac{3}{2}$.", working: "x=-\\frac{3}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 125 (b) $x^{\\frac{5}{6}}$ (c) $\\frac{2x^2}{y}$ (d) $x=-\\frac{3}{2}$",
            commonErrors: ["In (d), forgetting negative indices for fractions."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypme4-u1-fidx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $81^{\\frac{1}{2}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "40.5" },
              { id: "b", text: "3" },
              { id: "c", text: "81" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fractional index", statement: "$a^{\\frac{1}{2}}=\\sqrt{a}$." },
            ],
            steps: [
              { reasoning: "$81^{\\frac{1}{2}}=\\sqrt{81}=9$.", working: "9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 9",
            commonErrors: ["Dividing 81 by 2 instead of taking the square root."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-fidx-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $32^{\\frac{1}{5}}$.",
          response: { type: "numeric", parts: [{ label: "$32^{\\frac{1}{5}}$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$a^{\\frac{1}{n}}=\\sqrt[n]{a}$." },
            ],
            steps: [
              { reasoning: "$32^{\\frac{1}{5}}=\\sqrt[5]{32}=2$ since $2^5=32$.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Writing $32\\div5$ or $\\sqrt{32}$ instead of the fifth root."],
          },
        },
        {
          id: "mypme4-u1-fidx-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $49^{\\frac{3}{2}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "343" },
              { id: "b", text: "24.5" },
              { id: "c", text: "21" },
              { id: "d", text: "147" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{49}=7$; $7^3=343$.", working: "7^3=343", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "343", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$343$",
            commonErrors: ["Squaring 49 before taking the root, or computing $\\frac{49\\times3}{2}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-fidx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $64^{\\frac{2}{3}}$.",
          response: { type: "numeric", parts: [{ label: "$64^{\\frac{2}{3}}$", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$." },
            ],
            steps: [
              { reasoning: "$\\sqrt[3]{64}=4$; $4^2=16$.", working: "4^2=16", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$",
            commonErrors: ["Computing $64^{\\frac{1}{3}}\\times2$ incorrectly or cubing first."],
          },
        },
        {
          id: "mypme4-u1-fidx-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2^x=32$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Index equation", statement: "Write both sides with the same base: $2^x=2^5$." },
            ],
            steps: [
              { reasoning: "$32=2^5$, so $x=5$.", working: "x=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$x=5$",
            commonErrors: ["Computing $x=\\frac{32}{2}=16$."],
          },
        },
        {
          id: "mypme4-u1-fidx-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $x^{\\frac{1}{2}}\\times x^{\\frac{1}{4}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{\\frac{1}{8}}$" },
              { id: "b", text: "$x^{\\frac{3}{4}}$" },
              { id: "c", text: "$x^2$" },
              { id: "d", text: "$x^{\\frac{5}{4}}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index law", statement: "$a^m\\times a^n=a^{m+n}$; add the indices." },
            ],
            steps: [
              { reasoning: "$\\frac{1}{2}+\\frac{1}{4}=\\frac{3}{4}$, so the result is $x^{\\frac{3}{4}}$.", working: "x^{\\frac{3}{4}}", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "x^{\\frac{3}{4}}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^{\\frac{3}{4}}$",
            commonErrors: ["Multiplying the fractions: $\\frac{1}{2}\\times\\frac{1}{4}=\\frac{1}{8}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-fidx-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $9^x=27$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same base", statement: "Write both sides as powers of 3: $3^{2x}=3^3$." },
            ],
            steps: [
              { reasoning: "$9^x=(3^2)^x=3^{2x}$ and $27=3^3$, so $2x=3$.", working: "2x=3", marks: 1, markCode: "M" },
              { reasoning: "$x=\\frac{3}{2}=1.5$.", working: "x=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1.5$",
            commonErrors: ["Writing $9^x=3^{x}$ and equating $x=3$."],
          },
        },
        {
          id: "mypme4-u1-fidx-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $27^x=9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=\\frac{1}{3}$" },
              { id: "b", text: "$x=\\frac{2}{3}$" },
              { id: "c", text: "$x=\\frac{3}{2}$" },
              { id: "d", text: "$x=2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same base", statement: "Write both sides as powers of 3: $3^{3x}=3^2$." },
            ],
            steps: [
              { reasoning: "$27^x=(3^3)^x=3^{3x}$; $9=3^2$.", working: "3^{3x}=3^2", marks: 1, markCode: "M" },
              { reasoning: "$3x=2$, so $x=\\frac{2}{3}$.", working: "x=\\frac{2}{3}", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=\\frac{2}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac{2}{3}$",
            commonErrors: ["Writing $27^x=3^{27x}$ or dividing 9 by 27."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-fidx-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Work with fractional indices.",
          parts: [
            { label: "a", prompt: "Evaluate $125^{\\frac{2}{3}}$.", marks: 2 },
            { label: "b", prompt: "Simplify $(8x^3)^{\\frac{1}{3}}$ for $x>0$.", marks: 2 },
            { label: "c", prompt: "Solve $4^x=8$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$; index laws apply." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sqrt[3]{125}=5$; $5^2=25$.", working: "25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the value.", working: "25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cube root of each part: $\\sqrt[3]{8}=2$, $\\sqrt[3]{x^3}=x$.", working: "2x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", working: "2x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$4^x=(2^2)^x=2^{2x}$; $8=2^3$; $2x=3$.", working: "2x=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$x=\\frac{3}{2}$.", working: "x=\\frac{3}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 25 (b) $2x$ (c) $x=\\frac{3}{2}$",
            commonErrors: ["In (b), writing $2x^3$ or $8x$ instead of applying the root to each factor."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-fidx-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "More fractional index work.",
          parts: [
            { label: "a", prompt: "Evaluate $(-8)^{\\frac{1}{3}}$.", marks: 2 },
            { label: "b", prompt: "Solve $25^x=\\frac{1}{5}$.", marks: 2 },
            { label: "c", prompt: "Simplify $\\left(\\frac{x^6}{y^4}\\right)^{\\frac{1}{2}}$ for $x>0$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$; $a^{-1}=\\frac{1}{a}$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sqrt[3]{-8}=-2$ since $(-2)^3=-8$.", working: "-2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the value.", working: "-2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$25^x=5^{2x}$; $\\frac{1}{5}=5^{-1}$; $2x=-1$.", working: "2x=-1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$x=-\\frac{1}{2}$.", working: "x=-\\frac{1}{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Square root of each part: $\\sqrt{x^6}=x^3$, $\\sqrt{y^4}=y^2$ in the denominator.", working: "\\frac{x^3}{y^2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Write as a fraction with positive powers.", working: "x^3y^{-2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the simplified form.", working: "\\frac{x^3}{y^2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $-2$ (b) $x=-\\frac{1}{2}$ (c) $\\frac{x^3}{y^2}$",
            commonErrors: ["In (a), saying the cube root of a negative is undefined — odd roots of negatives exist."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-fidx-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Mixed fractional indices and index equations.",
          parts: [
            { label: "a", prompt: "Evaluate $32^{\\frac{2}{5}}$.", marks: 2 },
            { label: "b", prompt: "Solve $3^{2x}=27$.", marks: 2 },
            { label: "c", prompt: "Simplify $x^{\\frac{5}{6}}\\div x^{\\frac{1}{3}}$.", marks: 2 },
            { label: "d", prompt: "Solve $5^{x+1}=25$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$; $a^m\\div a^n=a^{m-n}$." },
            ],
            steps: [
              { part: "a", reasoning: "$32=2^5$, so $32^{\\frac{2}{5}}=(2^5)^{\\frac{2}{5}}=2^2=4$.", working: "4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the value.", working: "4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$3^{2x}=3^3$, so $2x=3$.", working: "2x=3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$x=\\frac{3}{2}$.", working: "x=\\frac{3}{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract indices: $\\frac{5}{6}-\\frac{1}{3}=\\frac{5}{6}-\\frac{2}{6}=\\frac{3}{6}=\\frac{1}{2}$.", working: "x^{\\frac{1}{2}}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the result.", working: "x^{\\frac{1}{2}}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$5^{x+1}=5^2$, so $x+1=2$.", working: "x+1=2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$x=1$.", working: "x=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 (b) $x=\\frac{3}{2}$ (c) $x^{\\frac{1}{2}}$ (d) $x=1$",
            commonErrors: ["In (c), dividing the fractions instead of subtracting indices."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypme4-u1-fidx-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Simplify $(9x^4)^{\\frac{1}{2}}$ for $x>0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x^4$" },
              { id: "b", text: "$9x^2$" },
              { id: "c", text: "$\\frac{9x^4}{2}$" },
              { id: "d", text: "$3x^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Fractional index", statement: "$(ab)^n=a^nb^n$; $\\sqrt{x^4}=x^2$." },
            ],
            steps: [
              { reasoning: "$(9x^4)^{\\frac{1}{2}}=\\sqrt{9}\\times\\sqrt{x^4}=3\\times x^2=3x^2$.", working: "3x^2", marks: 1, markCode: "M" },
              { reasoning: "Check exponent: $(x^4)^{\\frac{1}{2}}=x^{4\\times\\frac{1}{2}}=x^2$.", working: "x^2", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "3x^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x^2$",
            commonErrors: ["Writing $9x^2$ — forgetting to take the root of 9."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u1-logintro",
      title: "Introduction to logarithms",
      skill: "Define logarithms as inverse functions of exponentials, apply log laws, and solve simple exponential equations.",
      lesson: {
        sections: [
          {
            heading: "What is a logarithm?",
            body: "A **logarithm** answers the question 'what power?' $\\log_a x = n$ means $a^n=x$. For example, $\\log_2 8=3$ because $2^3=8$. The base $a$ must be positive and not equal to 1.",
          },
          {
            heading: "Laws of logarithms",
            body: "Three key laws:\n\n- $\\log_a(xy)=\\log_a x+\\log_a y$\n- $\\log_a\\left(\\frac{x}{y}\\right)=\\log_a x-\\log_a y$\n- $\\log_a(x^n)=n\\log_a x$\n\nAlso $\\log_a a=1$ and $\\log_a 1=0$.",
          },
          {
            heading: "Solving exponential equations",
            body: "To solve $a^x=b$, take logs: $x\\log a=\\log b$, so $x=\\frac{\\log b}{\\log a}$. For $2^x=10$: $x=\\frac{\\log 10}{\\log 2}\\approx3.32$. When bases match, equate exponents directly.",
          },
        ],
        keyFormulas: [
          { name: "Definition", statement: "$\\log_a x=n \\iff a^n=x$" },
          { name: "Product law", statement: "$\\log_a(xy)=\\log_a x+\\log_a y$" },
          { name: "Quotient law", statement: "$\\log_a\\left(\\frac{x}{y}\\right)=\\log_a x-\\log_a y$" },
          { name: "Power law", statement: "$\\log_a(x^n)=n\\log_a x$" },
        ],
        workedExample: {
          problem: "Solve $3^x=20$.",
          solution: "$x\\log 3=\\log 20$, so $x=\\frac{\\log 20}{\\log 3}\\approx\\frac{1.301}{0.477}\\approx2.73$.",
        },
      },
      questions: [
        {
          id: "mypme4-u1-log-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\log_2 16$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "4" },
              { id: "c", text: "8" },
              { id: "d", text: "32" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_a x=n$ means $a^n=x$; $2^4=16$." },
            ],
            steps: [
              { reasoning: "$2^4=16$, so $\\log_2 16=4$.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Confusing log with the power itself."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-log-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\log_3 27+\\log_3 9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\log_3(27+9)$" },
              { id: "b", text: "$\\log_3 36$" },
              { id: "c", text: "6" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product law", statement: "$\\log_a x+\\log_a y=\\log_a(xy)$; evaluate each term." },
            ],
            steps: [
              { reasoning: "$\\log_3 27=3$ since $3^3=27$; $\\log_3 9=2$ since $3^2=9$.", working: "3+2=5", marks: 1, markCode: "M" },
              { reasoning: "Sum = 5 (equivalently $\\log_3 243=5$).", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Writing $\\log_3(27+9)=\\log_3 36$ — arguments multiply, not add."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-log-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $5^x=100$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2$" },
              { id: "b", text: "$x=\\log_5 100$ only" },
              { id: "c", text: "$x=\\frac{\\log 100}{\\log 5}\\approx2.86$" },
              { id: "d", text: "$x=20$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Log solving", statement: "$x=\\frac{\\log b}{\\log a}$." },
            ],
            steps: [
              { reasoning: "$x=\\frac{\\log 100}{\\log 5}$.", working: "x=\\frac{\\log 100}{\\log 5}", marks: 1, markCode: "M" },
              { reasoning: "$=\\frac{2}{0.699}\\approx2.86$.", working: "x\\approx2.86", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x\\approx2.86", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx2.86$",
            commonErrors: ["Writing $x=\\log_5 100$ without evaluating."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-log-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Given $\\log_2 3 \\approx 1.585$.",
          parts: [
            { label: "a", prompt: "Use log laws to express $\\log_2 12$ in terms of $\\log_2 3$.", marks: 2 },
            { label: "b", prompt: "Hence find $\\log_2 12$ to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Express $\\log_2\\left(\\frac{9}{8}\\right)$ in terms of $\\log_2 3$.", marks: 2 },
            { label: "d", prompt: "Explain why $\\log_2 1=0$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log laws", statement: "$\\log(xy)=\\log x+\\log y$; $\\log(x^n)=n\\log x$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\log_2 12=\\log_2(4\\times3)=\\log_2 4+\\log_2 3=2+\\log_2 3$.", working: "2+\\log_2 3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the expression.", working: "2+\\log_2 3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\log_2 12=2+1.585=3.585\\approx3.59$.", working: "3.59", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State to 3 s.f.", working: "3.59", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\log_2\\left(\\frac{9}{8}\\right)=\\log_2 9-\\log_2 8=2\\log_2 3-3$.", working: "2\\log_2 3-3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the expression.", working: "2\\log_2 3-3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$2^0=1$, so $\\log_2 1=0$.", working: "2^0=1", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Explain via definition.", working: "\\log_a 1=0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2+\\log_2 3$ (b) 3.59 (c) $2\\log_2 3-3$ (d) $2^0=1$ so $\\log_2 1=0$",
            commonErrors: ["In (c), writing $\\log_2 9=3\\log_2 3$ — should be $2\\log_2 3$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u1-log-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\log_5 25$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "10" },
              { id: "c", text: "5" },
              { id: "d", text: "20" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_a x=n$ means $a^n=x$; $5^2=25$." },
            ],
            steps: [
              { reasoning: "$5^2=25$, so $\\log_5 25=2$.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 2",
            commonErrors: ["Writing 5 — confusing the base with the answer."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-log-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\log_2 32$.",
          response: { type: "numeric", parts: [{ label: "$\\log_2 32$", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_a x=n$ means $a^n=x$." },
            ],
            steps: [
              { reasoning: "$2^5=32$, so $\\log_2 32=5$.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Giving 32 or 16 instead of the exponent."],
          },
        },
        {
          id: "mypme4-u1-log-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\log_3 81$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "27" },
              { id: "b", text: "3" },
              { id: "c", text: "5" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_a x=n$ means $a^n=x$; $3^4=81$." },
            ],
            steps: [
              { reasoning: "Write 81 as a power of 3: $81=3^4$.", working: "3^4=81", marks: 1, markCode: "M" },
              { reasoning: "State the logarithm.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Using base 10: $\\log_{10}81$ is not an integer."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-log-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\log_{10} 1000$.",
          response: { type: "numeric", parts: [{ label: "$\\log_{10} 1000$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common logarithm", statement: "$\\log_{10}x$ counts powers of 10." },
            ],
            steps: [
              { reasoning: "$10^3=1000$.", working: "10^3=1000", marks: 1, markCode: "M" },
              { reasoning: "So $\\log_{10}1000=3$.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Counting decimal places as 4 instead of 3."],
          },
        },
        {
          id: "mypme4-u1-log-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\log_2 8+\\log_2 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "$\\log_2 12$" },
              { id: "c", text: "$\\log_2(8+4)$" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Product law", statement: "$\\log_a x+\\log_a y=\\log_a(xy)$; evaluate each term." },
            ],
            steps: [
              { reasoning: "$\\log_2 8=3$ and $\\log_2 4=2$; sum $=3+2=5$.", working: "3+2=5", marks: 1, markCode: "M" },
              { reasoning: "State the value (equivalently $\\log_2 32=5$).", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Combining arguments by addition: $\\log_2(8+4)$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-log-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $10^x=1000$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same base", statement: "Write both sides as powers of 10: $10^x=10^3$." },
            ],
            steps: [
              { reasoning: "$1000=10^3$, so $x=3$.", working: "x=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$x=3$",
            commonErrors: ["Computing $x=\\frac{1000}{10}=100$."],
          },
        },
        {
          id: "mypme4-u1-log-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2^x=48$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=24$" },
              { id: "b", text: "$x=16$" },
              { id: "c", text: "$x\\approx5.58$" },
              { id: "d", text: "$x\\approx4.58$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Log solving", statement: "$x=\\frac{\\log b}{\\log a}$." },
            ],
            steps: [
              { reasoning: "$x=\\frac{\\log 48}{\\log 2}=\\frac{1.681}{0.301}\\approx5.58$.", working: "x\\approx5.58", marks: 1, markCode: "M" },
              { reasoning: "Check: $2^{5.58}\\approx48$. ✓", working: "2^{5.58}\\approx48", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x\\approx5.58", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx5.58$",
            commonErrors: ["Computing $\\frac{\\log 2}{\\log 48}$ — inverted ratio."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-log-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $10^x=500$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 2.7, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Log solving", statement: "$x=\\frac{\\log b}{\\log a}=\\log_{10}500$." },
            ],
            steps: [
              { reasoning: "$x=\\log_{10}500=\\log_{10}5+2=0.699+2=2.699\\approx2.70$.", working: "x\\approx2.70", marks: 1, markCode: "M" },
              { reasoning: "State the solution to 3 s.f.", working: "x=2.70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx2.70$",
            commonErrors: ["Writing $x=\\frac{500}{10}=50$."],
          },
        },
        {
          id: "mypme4-u1-log-q13",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Given $\\log_2 5\\approx2.322$.",
          parts: [
            { label: "a", prompt: "Use log laws to express $\\log_2 50$ in terms of $\\log_2 5$.", marks: 2 },
            { label: "b", prompt: "Hence find $\\log_2 50$ to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Express $\\log_2\\left(\\frac{25}{8}\\right)$ in terms of $\\log_2 5$.", marks: 2 },
            { label: "d", prompt: "Solve $2^x=40$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log laws", statement: "$\\log(xy)=\\log x+\\log y$; $\\log(x^n)=n\\log x$; $\\log\\frac{x}{y}=\\log x-\\log y$." },
            ],
            steps: [
              { part: "a", reasoning: "$\\log_2 50=\\log_2(2\\times25)=\\log_2 2+\\log_2 25=1+2\\log_2 5$.", working: "1+2\\log_2 5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the expression.", working: "1+2\\log_2 5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\log_2 50=1+2(2.322)=1+4.644=5.644\\approx5.64$.", working: "5.64", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State to 3 s.f.", working: "5.64", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\log_2\\left(\\frac{25}{8}\\right)=\\log_2 25-\\log_2 8=2\\log_2 5-3$.", working: "2\\log_2 5-3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the expression.", working: "2\\log_2 5-3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$x=\\frac{\\log 40}{\\log 2}\\approx5.32$.", working: "x\\approx5.32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1+2\\log_2 5$ (b) 5.64 (c) $2\\log_2 5-3$ (d) $x\\approx5.32$",
            commonErrors: ["In (a), writing $\\log_2 50=\\log_2 5+\\log_2 10$ without simplifying to the requested form."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), A1 for (d).",
          },
        },
        {
          id: "mypme4-u1-log-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Logarithms in various bases.",
          parts: [
            { label: "a", prompt: "Evaluate $\\log_{10} 0.001$.", marks: 1 },
            { label: "b", prompt: "Express $\\log_3(9x)$ in terms of $\\log_3 x$.", marks: 2 },
            { label: "c", prompt: "Solve $9^x=27$.", marks: 2 },
            { label: "d", prompt: "Solve $\\log_2 x=5$.", marks: 2 },
            { label: "e", prompt: "Explain why $\\log_2(-8)$ is undefined.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log laws", statement: "$\\log_a(xy)=\\log_a x+\\log_a y$; $\\log_a a^n=n$." },
              { kind: "definition", name: "Log domain", statement: "Logarithms are only defined for positive arguments." },
            ],
            steps: [
              { part: "a", reasoning: "$0.001=10^{-3}$, so $\\log_{10}0.001=-3$.", working: "-3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\log_3(9x)=\\log_3 9+\\log_3 x=2+\\log_3 x$.", working: "2+\\log_3 x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the expression.", working: "2+\\log_3 x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$9^x=(3^2)^x=3^{2x}$; $27=3^3$; $2x=3$.", working: "2x=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$x=\\frac{3}{2}$.", working: "x=\\frac{3}{2}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Convert to exponential form: $x=2^5=32$.", working: "x=32", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the solution.", working: "x=32", marks: 1, markCode: "A" },
              { part: "e", reasoning: "No power of 2 equals $-8$, so $\\log_2(-8)$ has no real value.", working: "\\text{undefined}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $-3$ (b) $2+\\log_3 x$ (c) $x=\\frac{3}{2}$ (d) $x=32$ (e) no power of 2 is negative",
            commonErrors: ["In (d), writing $x=5\\times2=10$ instead of $2^5$."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d), R1 for (e).",
          },
        },
        {
          id: "mypme4-u1-log-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $\\log_3 2\\approx0.631$, which expression gives the exact value of $\\log_3 8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\log_3 2+3$" },
              { id: "b", text: "$3\\log_3 2$" },
              { id: "c", text: "$\\frac{\\log_3 8}{3}$" },
              { id: "d", text: "$2\\log_3 3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power law", statement: "$\\log_a(x^n)=n\\log_a x$; $8=2^3$." },
            ],
            steps: [
              { reasoning: "$\\log_3 8=\\log_3(2^3)=3\\log_3 2$.", working: "3\\log_3 2", marks: 1, markCode: "M" },
              { reasoning: "State the expression.", working: "3\\log_3 2", marks: 1, markCode: "A" },
              { reasoning: "Numerically $\\approx3(0.631)=1.893$.", working: "1.893", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\log_3 2$",
            commonErrors: ["Writing $\\log_3 8=\\log_3 2+\\log_3 3$ — arguments don't add like that."],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "mypme4-u1-log-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $10^x=0.01$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=0.01$" },
              { id: "b", text: "$x=-0.2$" },
              { id: "c", text: "$x=-2$" },
              { id: "d", text: "$x=2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative powers", statement: "$10^{-2}=\\frac{1}{100}=0.01$." },
            ],
            steps: [
              { reasoning: "$0.01=10^{-2}$, so $x=-2$.", working: "x=-2", marks: 1, markCode: "M" },
              { reasoning: "Check: $10^{-2}=0.01$. ✓", working: "10^{-2}=0.01", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2$",
            commonErrors: ["Writing $x=2$ — forgetting fractions give negative powers."],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
