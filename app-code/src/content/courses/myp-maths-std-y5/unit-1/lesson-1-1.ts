import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypms5-u1-lesson-1-1",
  code: "1-1",
  title: "Number Systems and Surds",
  goal: "I CAN work with rational and irrational numbers, simplify complex surd expressions, and apply index laws with negative and fractional powers.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Surd", definition: "An exact expression for an irrational root, e.g. $\\sqrt{12}=2\\sqrt{3}$." },
    { term: "Rationalising the denominator", definition: "Removing a surd from a denominator by multiplying by a conjugate or the surd itself." },
    { term: "Conjugate", definition: "For $a+\\sqrt{b}$, the conjugate is $a-\\sqrt{b}$; their product is rational." },
    { term: "Index laws", definition: "Rules for combining powers: $a^m\\times a^n=a^{m+n}$, $a^m\\div a^n=a^{m-n}$, $(a^m)^n=a^{mn}$, $a^{-n}=\\frac{1}{a^n}$, $a^0=1$." },
    { term: "Standard index form", definition: "Writing numbers as $a\\times10^n$ with $1\\le a<10$." },
  ],
  concepts: [
    {
      id: "mypms5-u1-surds",
      title: "Advanced surd manipulation",
      skill: "Simplify, multiply, divide and rationalise surd expressions including conjugates.",
      lesson: {
        sections: [
          {
            heading: "Multiplying and dividing surds",
            body: "Multiply surds by multiplying radicands: $\\sqrt{6}\\times\\sqrt{8}=\\sqrt{48}=4\\sqrt{3}$. For division, rationalise: $\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2}$; $\\frac{3}{\\sqrt{5}-\\sqrt{2}}=\\frac{3(\\sqrt{5}+\\sqrt{2})}{5-2}=\\sqrt{5}+\\sqrt{2}$.",
          },
          {
            heading: "Conjugates",
            body: "The **conjugate** of $a+\\sqrt{b}$ is $a-\\sqrt{b}$. Multiplying by the conjugate eliminates the surd: $(\\sqrt{3}+\\sqrt{2})(\\sqrt{3}-\\sqrt{2})=3-2=1$. This is the key to rationalising denominators with two surds.",
          },
          {
            heading: "Mixed expressions",
            body: "For expressions like $(\\sqrt{5}+\\sqrt{3})^2$, expand: $5+2\\sqrt{15}+3=8+2\\sqrt{15}$. Always simplify each surd first, then combine like terms.",
          },
        ],
        keyFormulas: [
          { name: "Conjugate product", statement: "$(a+\\sqrt{b})(a-\\sqrt{b})=a^2-b$" },
          { name: "Rationalising", statement: "Multiply numerator and denominator by the conjugate" },
          { name: "Surd multiplication", statement: "$\\sqrt{a}\\times\\sqrt{b}=\\sqrt{ab}$" },
        ],
        workedExample: {
          problem: "Rationalise $\\frac{4}{\\sqrt{6}+\\sqrt{2}}$.",
          solution: "Multiply by conjugate $\\sqrt{6}-\\sqrt{2}$: $\\frac{4(\\sqrt{6}-\\sqrt{2})}{6-2}=\\frac{4(\\sqrt{6}-\\sqrt{2})}{4}=\\sqrt{6}-\\sqrt{2}$.",
        },
      },
      questions: [
        {
          id: "mypms5-u1-surd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\sqrt{45}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\sqrt{3}$" },
              { id: "b", text: "$3\\sqrt{5}$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$9\\sqrt{5}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surd simplification", statement: "Extract largest square factor: $\\sqrt{45}=\\sqrt{9\\times5}=3\\sqrt{5}$." },
            ],
            steps: [
              { reasoning: "$\\sqrt{45}=\\sqrt{9}\\times\\sqrt{5}=3\\sqrt{5}$.", working: "3\\sqrt{5}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3\\sqrt{5}$",
            commonErrors: ["Extracting 5 instead of 9."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u1-surd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rationalise $\\frac{6}{\\sqrt{3}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt{3}}{2}$" },
              { id: "b", text: "$3\\sqrt{2}$" },
              { id: "c", text: "$2\\sqrt{3}$" },
              { id: "d", text: "$\\sqrt{18}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rationalising", statement: "Multiply top and bottom by $\\sqrt{3}$." },
            ],
            steps: [
              { reasoning: "$\\frac{6\\sqrt{3}}{3}=2\\sqrt{3}$.", working: "2\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "2\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\sqrt{3}$",
            commonErrors: ["Dividing 6 by 3 without multiplying numerator."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u1-surd-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Rationalise $\\frac{2}{\\sqrt{5}+1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt{5}+1}{3}$" },
              { id: "b", text: "$\\frac{1}{\\sqrt{5}-1}$" },
              { id: "c", text: "$\\frac{\\sqrt{5}-1}{2}$" },
              { id: "d", text: "$2\\sqrt{5}-2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conjugate", statement: "Multiply by conjugate $\\sqrt{5}-1$: denominator $=5-1=4$." },
            ],
            steps: [
              { reasoning: "$\\frac{2(\\sqrt{5}-1)}{(\\sqrt{5}+1)(\\sqrt{5}-1)}=\\frac{2(\\sqrt{5}-1)}{4}$.", working: "\\frac{2(\\sqrt{5}-1)}{4}", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\frac{\\sqrt{5}-1}{2}$.", working: "\\frac{\\sqrt{5}-1}{2}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "\\frac{\\sqrt{5}-1}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{\\sqrt{5}-1}{2}$",
            commonErrors: ["Using the wrong conjugate or sign."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u1-surd-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify the following expressions.",
          parts: [
            { label: "a", prompt: "Simplify $\\sqrt{72}-\\sqrt{18}$.", marks: 2 },
            { label: "b", prompt: "Expand $(\\sqrt{7}+\\sqrt{3})(\\sqrt{7}-\\sqrt{3})$.", marks: 2 },
            { label: "c", prompt: "Rationalise $\\frac{1}{\\sqrt{8}-\\sqrt{2}}$.", marks: 3 },
            { label: "d", prompt: "Show that $\\frac{\\sqrt{6}+\\sqrt{2}}{\\sqrt{6}-\\sqrt{2}}=2+\\sqrt{3}$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Surds", statement: "Simplify first; use conjugates for denominators." },
            ],
            steps: [
              { part: "a", reasoning: "$\\sqrt{72}=6\\sqrt{2}$, $\\sqrt{18}=3\\sqrt{2}$; difference $=3\\sqrt{2}$.", working: "3\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the result.", working: "3\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Difference of squares: $7-3=4$.", working: "4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", working: "4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conjugate: multiply by $\\sqrt{8}+\\sqrt{2}$; denominator $=8-2=6$.", working: "\\text{denominator}=6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Numerator: $\\sqrt{8}+\\sqrt{2}=2\\sqrt{2}+\\sqrt{2}=3\\sqrt{2}$.", working: "3\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Result: $\\frac{3\\sqrt{2}}{6}=\\frac{\\sqrt{2}}{2}$.", working: "\\frac{\\sqrt{2}}{2}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiply by conjugate: $\\frac{(\\sqrt{6}+\\sqrt{2})^2}{6-2}=\\frac{8+2\\sqrt{12}}{4}=\\frac{8+4\\sqrt{3}}{4}=2+\\sqrt{3}$. ✓", working: "2+\\sqrt{3}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $3\\sqrt{2}$ (b) 4 (c) $\\frac{\\sqrt{2}}{2}$ (d) shown",
            commonErrors: ["In (d), forgetting to rationalise before expanding."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypms5-u1-surd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\sqrt{200}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\sqrt{8}$" },
              { id: "b", text: "$20\\sqrt{5}$" },
              { id: "c", text: "$100\\sqrt{2}$" },
              { id: "d", text: "$10\\sqrt{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Surd simplification", statement: "Extract the largest square factor: $\\sqrt{200}=\\sqrt{100\\times2}=10\\sqrt{2}$." }],
            steps: [{ reasoning: "$\\sqrt{200}=10\\sqrt{2}$.", working: "10\\sqrt{2}", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $10\\sqrt{2}$",
          },
        },
        {
          id: "mypms5-u1-surd-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\sqrt{9}+\\sqrt{16}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Square root", statement: "Use perfect squares before adding." }],
            steps: [{ reasoning: "$3+4=7$.", working: "7", marks: 1, markCode: "B" }],
            finalAnswer: "$7$",
          },
        },
        {
          id: "mypms5-u1-surd-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $\\sqrt{6}\\times\\sqrt{24}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$" },
              { id: "b", text: "$6\\sqrt{2}$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$\\sqrt{144}$ only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Surd multiplication", statement: "$\\sqrt{a}\\times\\sqrt{b}=\\sqrt{ab}$." }],
            steps: [
              { reasoning: "$\\sqrt{6\\times24}=\\sqrt{144}=12$.", working: "\\sqrt{144}", marks: 1, markCode: "M" },
              { reasoning: "State the simplified value.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
          },
        },
        {
          id: "mypms5-u1-surd-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $3\\sqrt{3}\\times\\sqrt{3}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 9 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Surd multiplication", statement: "Combine the radicands: $\\sqrt{3}\\times\\sqrt{3}=3$." }],
            steps: [
              { reasoning: "$3\\times(\\sqrt{3}\\times\\sqrt{3})=3\\times3$.", working: "3\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $9$.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
          },
        },
        {
          id: "mypms5-u1-surd-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand $(\\sqrt{5}+\\sqrt{5})^2$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 20 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Expand first", statement: "Combine like surds before squaring." }],
            steps: [
              { reasoning: "$\\sqrt{5}+\\sqrt{5}=2\\sqrt{5}$; $(2\\sqrt{5})^2=4\\times5$.", working: "4\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $20$.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$",
          },
        },
        {
          id: "mypms5-u1-surd-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Rationalise $\\frac{1}{\\sqrt{7}-\\sqrt{3}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt{7}-\\sqrt{3}}{4}$" },
              { id: "b", text: "$\\frac{\\sqrt{7}+\\sqrt{3}}{4}$" },
              { id: "c", text: "$\\frac{1}{4}$" },
              { id: "d", text: "$\\sqrt{7}+\\sqrt{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Conjugate", statement: "Multiply by $\\sqrt{7}+\\sqrt{3}$; denominator $=7-3=4$." }],
            steps: [
              { reasoning: "Multiply numerator and denominator by the conjugate $\\sqrt{7}+\\sqrt{3}$.", working: "\\frac{\\sqrt{7}+\\sqrt{3}}{(\\sqrt{7}-\\sqrt{3})(\\sqrt{7}+\\sqrt{3})}", marks: 1, markCode: "M" },
              { reasoning: "Denominator $=4$ and numerator $=\\sqrt{7}+\\sqrt{3}$.", working: "\\frac{\\sqrt{7}+\\sqrt{3}}{4}", marks: 1, markCode: "M" },
              { reasoning: "State the rationalised form.", working: "\\frac{\\sqrt{7}+\\sqrt{3}}{4}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{\\sqrt{7}+\\sqrt{3}}{4}$",
          },
        },
        {
          id: "mypms5-u1-surd-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $(\\sqrt{8}+1)(\\sqrt{8}-1)$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Difference of squares", statement: "Use $(a+b)(a-b)=a^2-b^2$ after simplifying $\\sqrt{8}=2\\sqrt{2}$." }],
            steps: [
              { reasoning: "Simplify first: $(2\\sqrt{2}+1)(2\\sqrt{2}-1)=8-1$.", working: "8-1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the product.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
          },
        },
        {
          id: "mypms5-u1-surd-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Work with surds.",
          parts: [
            { label: "a", prompt: "Simplify $\\sqrt{48}+\\sqrt{27}$.", marks: 2 },
            { label: "b", prompt: "Rationalise $\\frac{2}{\\sqrt{5}}$.", marks: 1 },
            { label: "c", prompt: "Expand $(\\sqrt{3}+1)^2$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Surd methods", statement: "Simplify radicands, rationalise denominators, then expand carefully." }],
            steps: [
              { part: "a", reasoning: "$\\sqrt{48}=4\\sqrt{3}$ and $\\sqrt{27}=3\\sqrt{3}$, so the sum is $7\\sqrt{3}$.", working: "7\\sqrt{3}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the simplified sum.", working: "7\\sqrt{3}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\frac{2}{\\sqrt{5}}\\times\\frac{\\sqrt{5}}{\\sqrt{5}}=\\frac{2\\sqrt{5}}{5}$.", working: "\\frac{2\\sqrt{5}}{5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$(\\sqrt{3}+1)^2=3+2\\sqrt{3}+1$.", working: "4+2\\sqrt{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collect constants: $4+2\\sqrt{3}$.", working: "4+2\\sqrt{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $7\\sqrt{3}$ (b) $\\frac{2\\sqrt{5}}{5}$ (c) $4+2\\sqrt{3}$",
          },
        },
        {
          id: "mypms5-u1-surd-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\frac{\\sqrt{75}}{\\sqrt{3}}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Surd division", statement: "$\\frac{\\sqrt{a}}{\\sqrt{b}}=\\sqrt{\\frac{a}{b}}$." }],
            steps: [{ reasoning: "$\\sqrt{\\frac{75}{3}}=\\sqrt{25}=5$.", working: "5", marks: 1, markCode: "B" }],
            finalAnswer: "$5$",
          },
        },
        {
          id: "mypms5-u1-surd-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which expression is the rationalised form of $\\frac{2}{\\sqrt{5}+1}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\sqrt{5}+1}{2}$" },
              { id: "b", text: "$\\frac{\\sqrt{5}-1}{2}$" },
              { id: "c", text: "$2\\sqrt{5}-2$" },
              { id: "d", text: "$\\frac{2}{\\sqrt{5}-1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Conjugate", statement: "Multiply by $\\sqrt{5}-1$; denominator $=5-1=4$." }],
            steps: [
              { reasoning: "$\\frac{2(\\sqrt{5}-1)}{4}=\\frac{\\sqrt{5}-1}{2}$.", working: "\\frac{\\sqrt{5}-1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Select the matching option.", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{\\sqrt{5}-1}{2}$",
          },
        },
        {
          id: "mypms5-u1-surd-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $(\\sqrt{2}+\\sqrt{6})(\\sqrt{2}-\\sqrt{6})$.",
          response: { type: "numeric", parts: [{ label: "value", answer: -4 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Difference of squares", statement: "$(a+b)(a-b)=a^2-b^2$ with $a^2=2$, $b^2=6$." }],
            steps: [
              { reasoning: "$2-6=-4$.", working: "2-6", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-4$",
          },
        },
        {
          id: "mypms5-u1-surd-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Use surd techniques to compare and simplify.",
          parts: [
            { label: "a", prompt: "Simplify $\\sqrt{72}-\\sqrt{8}$.", marks: 2 },
            { label: "b", prompt: "Rationalise $\\frac{3}{\\sqrt{6}+\\sqrt{3}}$.", marks: 2 },
            { label: "c", prompt: "Show that $(\\sqrt{5}-\\sqrt{2})^2=7-2\\sqrt{10}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Advanced surds", statement: "Use conjugates for rationalising and expand squares carefully." }],
            steps: [
              { part: "a", reasoning: "$\\sqrt{72}=6\\sqrt{2}$, $\\sqrt{8}=2\\sqrt{2}$; difference $=4\\sqrt{2}$.", working: "4\\sqrt{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the result.", working: "4\\sqrt{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply by conjugate $\\sqrt{6}-\\sqrt{3}$; denominator $=6-3=3$.", working: "3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Numerator $3(\\sqrt{6}-\\sqrt{3})$ over 3 gives $\\sqrt{6}-\\sqrt{3}$.", working: "\\sqrt{6}-\\sqrt{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Expand: $5-2\\sqrt{10}+2=7-2\\sqrt{10}$. ✓", working: "7-2\\sqrt{10}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the shown identity.", working: "7-2\\sqrt{10}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4\\sqrt{2}$ (b) $\\sqrt{6}-\\sqrt{3}$ (c) shown",
          },
        },
      ],
    },
    {
      id: "mypms5-u1-indices",
      title: "Indices and Standard Form",
      skill: "Apply all index laws including fractional and negative powers, and perform multi-step calculations in standard form.",
      lesson: {
        sections: [
          {
            heading: "Complete index laws",
            body: "The full set: $a^m\\times a^n=a^{m+n}$; $a^m\\div a^n=a^{m-n}$; $(a^m)^n=a^{mn}$; $a^0=1$; $a^{-n}=\\frac{1}{a^n}$; $a^{\\frac{1}{n}}=\\sqrt[n]{a}$; $a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$. These work for fractional and negative indices too.",
          },
          {
            heading: "Complex index expressions",
            body: "Simplify step by step: $\\frac{x^3\\times x^{-1}}{x^{\\frac{1}{2}}}=x^{3-1-\\frac{1}{2}}=x^{\\frac{3}{2}}$. For expressions with different bases, evaluate each part separately.",
          },
          {
            heading: "Standard form calculations",
            body: "For multi-step problems: multiply/divide mantissas and powers separately, then renormalise. For addition/subtraction, match powers of 10 first. Always give final answers in proper standard form.",
          },
        ],
        keyFormulas: [
          { name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$" },
          { name: "Standard form ops", statement: "Multiply mantissas, add powers; divide mantissas, subtract powers" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{8^{\\frac{2}{3}}\\times 27^{\\frac{1}{3}}}{4}$.",
          solution: "$8^{\\frac{2}{3}}=4$, $27^{\\frac{1}{3}}=3$; $\\frac{4\\times3}{4}=3$.",
        },
      },
      questions: [
        {
          id: "mypms5-u1-idx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $27^{\\frac{1}{3}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "$\\frac{1}{9}$" },
              { id: "c", text: "9" },
              { id: "d", text: "81" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fractional index", statement: "$a^{\\frac{1}{n}}=\\sqrt[n]{a}$; $\\sqrt[3]{27}=3$." },
            ],
            steps: [
              { reasoning: "$27^{\\frac{1}{3}}=\\sqrt[3]{27}=3$.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 3",
            commonErrors: ["Computing $27^{\\frac{1}{3}}=9$ — that's $27^{\\frac{2}{3}}$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u1-idx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $\\frac{x^5}{x^2\\times x^{-1}}$, giving a positive index.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2$" },
              { id: "b", text: "$x^4$" },
              { id: "c", text: "$x^8$" },
              { id: "d", text: "$x^{-2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Index laws", statement: "Combine all indices: $5-2-(-1)=4$." },
            ],
            steps: [
              { reasoning: "Denominator: $x^{2+(-1)}=x^1=x$; then $\\frac{x^5}{x}=x^4$.", working: "x^4", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "x^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^4$",
            commonErrors: ["Forgetting $x^{-1}$ in denominator adds 1 to exponent."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u1-idx-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $8^x=32$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4$" },
              { id: "b", text: "$x=\\frac{3}{5}$" },
              { id: "c", text: "$x=\\frac{5}{3}$" },
              { id: "d", text: "$x=\\frac{5}{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same base", statement: "Write as powers of 2: $2^{3x}=2^5$." },
            ],
            steps: [
              { reasoning: "$8^x=(2^3)^x=2^{3x}$; $32=2^5$.", working: "2^{3x}=2^5", marks: 1, markCode: "M" },
              { reasoning: "$3x=5$, $x=\\frac{5}{3}$.", working: "x=\\frac{5}{3}", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=\\frac{5}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac{5}{3}$",
            commonErrors: ["Writing $x=\\frac{32}{8}=4$ — wrong operation."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u1-idx-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Simplify and evaluate the following.",
          parts: [
            { label: "a", prompt: "Simplify $\\left(\\frac{x^4}{y^2}\\right)^{\\frac{1}{2}}$ for $x>0$.", marks: 2 },
            { label: "b", prompt: "Evaluate $\\frac{16^{\\frac{3}{4}}\\times 8^{\\frac{2}{3}}}{4}$.", marks: 3 },
            { label: "c", prompt: "Solve $4^{x+1}=8^{x-1}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Index laws", statement: "Apply fractional powers and index rules." },
            ],
            steps: [
              { part: "a", reasoning: "$\\left(\\frac{x^4}{y^2}\\right)^{\\frac{1}{2}}=\\frac{x^2}{y}$ (for $x>0$, $y>0$).", working: "\\frac{x^2}{y}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the result.", working: "\\frac{x^2}{y}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$16^{\\frac{3}{4}}=(\\sqrt[4]{16})^3=2^3=8$; $8^{\\frac{2}{3}}=(\\sqrt[3]{8})^2=2^2=4$.", working: "8\\times4=32", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$\\frac{8\\times4}{4}=8$.", working: "8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$4^{x+1}=(2^2)^{x+1}=2^{2x+2}$; $8^{x-1}=(2^3)^{x-1}=2^{3x-3}$.", working: "2^{2x+2}=2^{3x-3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$2x+2=3x-3 \\Rightarrow x=5$.", working: "x=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the solution.", working: "x=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{x^2}{y}$ (b) 8 (c) $x=5$",
            commonErrors: ["In (c), equating bases incorrectly or forgetting to convert to base 2."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypms5-u1-idx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $16^{\\frac{3}{4}}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "8" },
              { id: "c", text: "64" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Fractional index", statement: "$a^{\\frac{m}{n}}=(\\sqrt[n]{a})^m$; $16^{\\frac{3}{4}}=(\\sqrt[4]{16})^3=2^3=8$." }],
            steps: [{ reasoning: "Fourth root of 16 is 2; cube gives 8.", working: "8", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 8",
          },
        },
        {
          id: "mypms5-u1-idx-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $2^5\\times2^{-2}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Index law", statement: "$a^m\\times a^n=a^{m+n}$; $5+(-2)=3$." }],
            steps: [{ reasoning: "$2^{5-2}=2^3=8$.", working: "8", marks: 1, markCode: "B" }],
            finalAnswer: "$8$",
          },
        },
        {
          id: "mypms5-u1-idx-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $\\frac{x^7}{x^3}$ for $x\\ne0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^3$" },
              { id: "b", text: "$x^{10}$" },
              { id: "c", text: "$x^4$" },
              { id: "d", text: "$x^{-4}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Index law", statement: "$a^m\\div a^n=a^{m-n}$; $7-3=4$." }],
            steps: [
              { reasoning: "Subtract indices: $x^{7-3}=x^4$.", working: "x^4", marks: 1, markCode: "M" },
              { reasoning: "State the simplified expression.", working: "x^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^4$",
          },
        },
        {
          id: "mypms5-u1-idx-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3^x=81$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Same base", statement: "Write $81=3^4$, so $x=4$." }],
            steps: [
              { reasoning: "$81=3^4$; equate exponents.", working: "3^x=3^4", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
          },
        },
        {
          id: "mypms5-u1-idx-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\frac{8^{\\frac{2}{3}}}{4}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 1 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Fractional index", statement: "$8^{\\frac{2}{3}}=(\\sqrt[3]{8})^2=2^2=4$." }],
            steps: [
              { reasoning: "Evaluate numerator: $4$.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{4}{4}=1$.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
          },
        },
        {
          id: "mypms5-u1-idx-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $5^{x+1}=125$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3$" },
              { id: "b", text: "$x=2$" },
              { id: "c", text: "$x=4$" },
              { id: "d", text: "$x=\\frac{1}{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Same base", statement: "$125=5^3$, so $x+1=3$." }],
            steps: [
              { reasoning: "Write $5^{x+1}=5^3$.", working: "x+1=3", marks: 1, markCode: "M" },
              { reasoning: "Solve: $x=2$.", working: "x=2", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$",
          },
        },
        {
          id: "mypms5-u1-idx-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate $4^{\\frac{3}{2}}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 8 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Fractional index", statement: "$4^{\\frac{3}{2}}=(\\sqrt{4})^3=2^3=8$." }],
            steps: [
              { reasoning: "Square root of 4 is 2.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Cube: $2^3=8$.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$",
          },
        },
        {
          id: "mypms5-u1-idx-q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Apply index laws and solve equations.",
          parts: [
            { label: "a", prompt: "Simplify $\\frac{x^5\\times x^{-2}}{x^{\\frac{1}{2}}}$.", marks: 2 },
            { label: "b", prompt: "Evaluate $27^{\\frac{1}{3}}\\times9^{-\\frac{1}{2}}$.", marks: 2 },
            { label: "c", prompt: "Solve $9^x=27$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Combine indices; use same-base equations." }],
            steps: [
              { part: "a", reasoning: "Exponent $=5-2-\\frac12=\\frac52$, so result is $x^{\\frac52}$.", working: "x^{\\frac52}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the simplified expression.", working: "x^{\\frac52}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$27^{\\frac13}=3$ and $9^{-\\frac12}=\\frac13$, product $=1$.", working: "1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$9^x=(3^2)^x=3^{2x}$ and $27=3^3$, so $2x=3$.", working: "2x=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$x=\\frac32$.", working: "x=\\frac32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x^{\\frac52}$ (b) 1 (c) $x=\\frac32$",
          },
        },
        {
          id: "mypms5-u1-idx-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $7^0\\times5^{-1}$.",
          response: { type: "numeric", parts: [{ label: "value", answer: 0.2 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "$a^0=1$ and $a^{-n}=\\frac1{a^n}$." }],
            steps: [{ reasoning: "$1\\times\\frac15=0.2$.", working: "0.2", marks: 1, markCode: "B" }],
            finalAnswer: "$0.2$",
          },
        },
        {
          id: "mypms5-u1-idx-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $x^{\\frac12}\\times x^{\\frac34}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{\\frac74}$" },
              { id: "b", text: "$x^2$" },
              { id: "c", text: "$x^{\\frac54}$" },
              { id: "d", text: "$x^{\\frac38}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Index law", statement: "Add indices: $\\frac12+\\frac34=\\frac54$." }],
            steps: [
              { reasoning: "Add the fractional indices.", working: "\\frac12+\\frac34=\\frac54", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "x^{\\frac54}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x^{\\frac54}$",
          },
        },
        {
          id: "mypms5-u1-idx-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2^{2x}=64$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Same base", statement: "$64=2^6$, so $2x=6$." }],
            steps: [
              { reasoning: "Equate exponents: $2x=6$.", working: "2x=6", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$",
          },
        },
        {
          id: "mypms5-u1-idx-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Combine index laws and standard-form thinking.",
          parts: [
            { label: "a", prompt: "Simplify $(x^6y^{-2})^{\\frac12}$ for $x>0$, $y>0$.", marks: 2 },
            { label: "b", prompt: "Evaluate $\\frac{32^{\\frac15}\\times8^{\\frac23}}{2}$.", marks: 2 },
            { label: "c", prompt: "Solve $4^{x}=8^{x-1}$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "law", name: "Index laws", statement: "Apply fractional powers, products and same-base equations." }],
            steps: [
              { part: "a", reasoning: "$(x^6y^{-2})^{\\frac12}=x^3y^{-1}=\\frac{x^3}{y}$.", working: "\\frac{x^3}{y}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the simplified expression.", working: "\\frac{x^3}{y}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$32^{\\frac15}=2$, $8^{\\frac23}=4$; $\\frac{2\\times4}{2}=4$.", working: "4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2^{2x}=2^{3x-3}$, so $2x=3x-3$.", working: "2x=3x-3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$x=3$.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{x^3}{y}$ (b) 4 (c) $x=3$",
          },
        },
      ],
    },
  ],
};
