import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "ciem-u2-lesson-2-1",
  code: "2-1",
  title: "Expanding and Factorising",
  goal: "I CAN expand double brackets, factorise quadratics and expressions, and apply index laws to algebraic expressions.",
  standards: ["0580 2.1", "0580 2.2"],
  vocabulary: [
    { term: "Double brackets", definition: "Two sets of brackets multiplied together, e.g. $(x+3)(x+5)$, expanded by multiplying each term in the first by each term in the second." },
    { term: "Factorisation", definition: "Writing an expression as a product of simpler factors, e.g. $x^2+7x+12=(x+3)(x+4)$." },
    { term: "Quadratic expression", definition: "An expression of degree 2 in one variable, of the form $ax^2+bx+c$." },
    { term: "Difference of two squares", definition: "The identity $a^2-b^2=(a+b)(a-b)$, used to factorise expressions like $x^2-9$." },
    { term: "Common factor", definition: "A factor shared by every term of an expression; extracting it is the first step of factorising." },
    { term: "Coefficient", definition: "The numerical factor of a term, e.g. the 5 in $5x^3$." },
  ],
  concepts: [
    {
      id: "ciem-u2-expand-factorise",
      title: "Expanding and factorising expressions",
      skill: "Expand double brackets, extract common factors and factorise quadratic expressions.",
      lesson: {
        sections: [
          {
            heading: "Expanding double brackets",
            body: "Multiply each term in the first bracket by each term in the second: $(x+3)(x+5)=x^2+5x+3x+15=x^2+8x+15$. The middle terms combine because they are like terms.\n\nSpecial cases worth memorising:\n\n- $(x+a)(x-a)=x^2-a^2$ — the middle terms cancel\n- $(x+a)^2=x^2+2ax+a^2$ — do not write $x^2+a^2$",
          },
          {
            heading: "Factorising quadratics",
            body: "For $x^2+bx+c$, find two numbers that multiply to $c$ and add to $b$. For $x^2+7x+12$, the numbers 3 and 4 work: $(x+3)(x+4)$.\n\nAlways check by expanding back. If no integer pair works, the quadratic may not factorise over the integers — the quadratic formula is the fallback (next lesson).",
          },
          {
            heading: "Common factors and the difference of two squares",
            body: "Take out any factor shared by every term first: $6x^2+9x=3x(2x+3)$. Then look for structure: $x^2-9=(x+3)(x-3)$, $4x^2-25=(2x+5)(2x-5)$, and $x^2+6x+9=(x+3)^2$.",
          },
        ],
        keyFormulas: [
          { name: "Double brackets", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$" },
          { name: "Difference of squares", statement: "$a^2-b^2=(a+b)(a-b)$" },
          { name: "Perfect square", statement: "$(x+a)^2=x^2+2ax+a^2$" },
        ],
        workedExample: {
          problem: "Factorise $x^2-5x+6$.",
          solution: "Need two numbers multiplying to $6$ and adding to $-5$: $-2$ and $-3$. So $x^2-5x+6=(x-2)(x-3)$. Check: $(x-2)(x-3)=x^2-3x-2x+6=x^2-5x+6$ ✓",
        },
      },
      questions: [
        {
          id: "ciem-u2-expand-factorise-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $(x+3)(x+5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2+8x+15$" },
              { id: "b", text: "$x^2+15$" },
              { id: "c", text: "$x^2+2x+15$" },
              { id: "d", text: "$x^2+8x+8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Double bracket expansion", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$; the cross terms are like terms and must be collected." },
            ],
            steps: [
              { reasoning: "Multiply each term: $x^2+5x+3x+15$, then collect the middle terms.", working: "x^2+8x+15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x^2+8x+15$",
            commonErrors: ["Dropping the cross terms to get $x^2+15$.", "Adding the constants incorrectly to get $+8$."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The quadratic $x^2+bx+12$ factorises as $(x+3)(x+c)$. Find the value of $c$.",
          response: { type: "numeric", parts: [{ label: "c", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Factorised form", statement: "In $(x+p)(x+q)=x^2+(p+q)x+pq$, the constants multiply to give the constant term." },
            ],
            steps: [
              { reasoning: "The product of the constants must be 12, and one of them is 3.", working: "3c=12", marks: 1, markCode: "M" },
              { reasoning: "Solve for $c$.", working: "c=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$c=4$",
            commonErrors: ["Adding instead of multiplying: $c=9$."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $x^2+5x+6=0$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: -2 },
              { label: "x", answer: -3 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Zero product property", statement: "If $(x+p)(x+q)=0$ then $x=-p$ or $x=-q$." },
            ],
            steps: [
              { reasoning: "Factorise: need two numbers multiplying to 6 and adding to 5.", working: "x^2+5x+6=(x+2)(x+3)", marks: 1, markCode: "M" },
              { reasoning: "Set each factor to zero.", working: "x+2=0\\Rightarrow x=-2;\\quad x+3=0\\Rightarrow x=-3", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2$ or $x=-3$",
            commonErrors: ["Sign error: writing $x=2$ or $x=3$.", "Only finding one root."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangle has width $w$ cm and length $(w+3)$ cm.",
          parts: [
            { label: "a", prompt: "Write down an expression for the area of the rectangle in terms of $w$.", marks: 2 },
            { label: "b", prompt: "Given that the area is 28 cm$^2$, form an equation in $w$ and solve it.", marks: 4 },
            { label: "c", prompt: "Hence write down the length and the perimeter of the rectangle.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) w", answer: 4, unit: "cm" },
              { label: "(c) length", answer: 7, unit: "cm" },
              { label: "(c) perimeter", answer: 22, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Area of rectangle", statement: "Area = length $\\times$ width." },
              { kind: "property", name: "Zero product property", statement: "Factorised equations are solved by setting each factor to zero." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply length by width and expand.", working: "A=w(w+3)=w^2+3w", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the expression.", working: "w^2+3w\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the area expression equal to 28.", working: "w^2+3w=28\\Rightarrow w^2+3w-28=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorise: need two numbers multiplying to $-28$ and adding to 3.", working: "(w+7)(w-4)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reject $w=-7$ (a length cannot be negative) and state $w=4$.", working: "w=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verify: $4\\times7=28$ ✓.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Length = width + 3.", working: "l=4+3=7\\text{ cm}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Perimeter = 2(length + width).", working: "P=2(7+4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute the perimeter.", working: "P=22\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $w^2+3w$ (b) $w=4$ cm (c) length $=7$ cm, perimeter $=22$ cm",
            commonErrors: ["Keeping the negative root $w=-7$ as a valid length.", "Writing the area as $w^2+3$ instead of $w^2+3w$."],
            examinerNote: "In (b) the negative root must be explicitly rejected — a common lost mark.",
          },
        },
      ],
    },
    {
      id: "ciem-u2-index-laws-algebra",
      title: "Index laws with algebraic expressions",
      skill: "Simplify algebraic expressions using the laws of indices, including negative and fractional indices.",
      lesson: {
        sections: [
          {
            heading: "Combining like terms",
            body: "When multiplying powers of the same variable, add the indices: $x^a\\times x^b=x^{a+b}$. When dividing, subtract: $\\frac{x^a}{x^b}=x^{a-b}$. Coefficients multiply or divide normally: $3x^2\\times4x^3=12x^5$.",
          },
          {
            heading: "Negative and fractional indices in algebra",
            body: "The same laws apply: $x^{-2}=\\frac{1}{x^2}$, $x^{\\frac{1}{2}}=\\sqrt{x}$, and $x^{\\frac{3}{2}}=(\\sqrt{x})^3=x\\sqrt{x}$. Answers are usually required with **positive indices only**, so $\\frac{x^5}{x^2}=x^3$ but $x^2\\div x^5=x^{-3}=\\frac{1}{x^3}$.",
          },
          {
            heading: "Index equations with algebra",
            body: "Equations like $2^{2x}=8^{x-1}$ are solved by rewriting both sides with the same base: $8=2^3$, so $2^{2x}=2^{3x-3}$, giving $2x=3x-3$ and $x=3$. Equating indices only works when the bases match.",
          },
        ],
        keyFormulas: [
          { name: "Product", statement: "$x^a\\times x^b=x^{a+b}$" },
          { name: "Quotient", statement: "$\\frac{x^a}{x^b}=x^{a-b}$" },
          { name: "Power", statement: "$(x^a)^b=x^{ab}$" },
          { name: "Negative index", statement: "$x^{-n}=\\frac{1}{x^n}$" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{12x^5y^2}{4x^2y}$, giving your answer with positive indices only.",
          solution: "Divide coefficients: $12\\div4=3$. Divide $x$ powers: $x^{5-2}=x^3$. Divide $y$ powers: $y^{2-1}=y$. Answer: $3x^3y$.",
        },
      },
      questions: [
        {
          id: "ciem-u2-index-laws-algebra-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $3x^2\\times4x^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12x^5$" },
              { id: "b", text: "$7x^5$" },
              { id: "c", text: "$12x^6$" },
              { id: "d", text: "$7x^6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$x^a\\times x^b=x^{a+b}$; coefficients multiply separately." },
            ],
            steps: [
              { reasoning: "Multiply coefficients and add indices.", working: "3\\times4=12,\\quad x^{2+3}=x^5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $12x^5$",
            commonErrors: ["Adding coefficients to get 7.", "Multiplying indices to get $x^6$."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $\\frac{8x^6}{2x^2}$ and hence find its value when $x=3$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 324 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Quotient law", statement: "$\\frac{x^a}{x^b}=x^{a-b}$; coefficients divide normally." },
            ],
            steps: [
              { reasoning: "Divide coefficients and subtract indices.", working: "\\frac{8x^6}{2x^2}=4x^4", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=3$.", working: "4\\times3^4=4\\times81=324", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$324$",
            commonErrors: ["Leaving the answer as $4x^4$ when a value is required.", "Computing $3^4$ as 27 instead of 81."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given that $3^a\\times3^b=3^7$ and $a-b=1$, find the values of $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$3^a\\times3^b=3^{a+b}$, so $a+b=7$." },
            ],
            steps: [
              { reasoning: "Equate indices to get a linear equation.", working: "a+b=7", marks: 1, markCode: "M" },
              { reasoning: "Solve the pair $a+b=7$, $a-b=1$ by adding.", working: "2a=8\\Rightarrow a=4,\\ b=3", marks: 1, markCode: "M" },
              { reasoning: "State both values.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a=4$, $b=3$",
            commonErrors: ["Equating $a+b$ to 7 but then solving $a-b=1$ incorrectly.", "Giving $a=3$, $b=4$ (swapped)."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Let $E=\\frac{8x^6}{2x^2}$.",
          parts: [
            { label: "a", prompt: "Simplify $E$, giving your answer with a positive index of $x$.", marks: 2 },
            { label: "b", prompt: "Find the value of $E$ when $x=-2$.", marks: 2 },
            { label: "c", prompt: "Solve $2^{2x}=8^{x-1}$ for $x$.", marks: 3 },
            { label: "d", prompt: "Write $16^x$ as a power of 2.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b)", answer: 64 },
              { label: "(c) x", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Quotient law", statement: "$\\frac{x^a}{x^b}=x^{a-b}$" },
              { kind: "law", name: "Matching bases", statement: "If $a^m=a^n$ with $a>0$, $a\\ne1$, then $m=n$; rewrite all bases as powers of one number." },
            ],
            steps: [
              { part: "a", reasoning: "Divide coefficients and subtract indices.", working: "E=4x^{6-2}=4x^4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the simplified expression.", working: "4x^4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=-2$; note $x^4$ is positive.", working: "4(-2)^4=4\\times16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute.", working: "=64", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write 8 as a power of 2.", working: "8=2^3\\Rightarrow 8^{x-1}=2^{3(x-1)}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equate the indices.", working: "2x=3x-3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve.", working: "x=3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write 16 as a power of 2 and apply the power law.", working: "16=2^4\\Rightarrow 16^x=(2^4)^x=2^{4x}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the result.", working: "2^{4x}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4x^4$ (b) $64$ (c) $x=3$ (d) $2^{4x}$",
            commonErrors: ["In (b) computing $(-2)^4$ as $-16$.", "In (c) equating $2x$ to $x-1$ without converting base 8.", "In (d) writing $16^x=2^{x+4}$ instead of $2^{4x}$."],
            examinerNote: "Part (a) requires positive indices; $4x^4$ only.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u2-expand-factorise-notes",
      title: "Expanding, factorising and index laws — revision notes",
      summary: "Double brackets, factorising quadratics, common factors, and algebraic index laws with worked examples.",
      sections: [
        {
          heading: "Expanding double brackets",
          body: "FOIL-style: multiply each term in the first bracket by each term in the second, then collect like terms.\n\n$(x+a)(x+b)=x^2+(a+b)x+ab$\n\nMemorise the two specials:\n\n- $(x+a)(x-a)=x^2-a^2$ (difference of two squares — middle terms cancel)\n- $(x+a)^2=x^2+2ax+a^2$ (the middle term $2ax$ is the most-forgotten term)\n\n**Worked example.** Expand $(x+3)(x+5)$.\n\n$x^2+5x+3x+15=x^2+8x+15$.",
        },
        {
          heading: "Factorising quadratics",
          body: "For $x^2+bx+c$, hunt for two numbers that **multiply to $c$** and **add to $b$**.\n\n- $x^2+7x+12$: 3 and 4 → $(x+3)(x+4)$\n- $x^2-5x+6$: $-2$ and $-3$ → $(x-2)(x-3)$\n- $x^2-9$: difference of squares → $(x+3)(x-3)$\n\nAlways verify by expanding back — it takes 5 seconds and catches sign errors.",
        },
        {
          heading: "Common factors first",
          body: "Before anything else, extract any factor shared by every term.\n\n$6x^2+9x=3x(2x+3)$\n$4x^3-8x^2=4x^2(x-2)$\n\nThen apply the quadratic methods. Some questions need both steps.",
        },
        {
          heading: "Index laws in algebra",
          body: "Same laws as numbers, applied to variables:\n\n- $x^a\\times x^b=x^{a+b}$; $\\frac{x^a}{x^b}=x^{a-b}$; $(x^a)^b=x^{ab}$\n- $x^{-n}=\\frac{1}{x^n}$ — rewrite with positive indices if asked\n- $x^{\\frac{m}{n}}=(\\sqrt[n]{x})^m$\n\n**Worked example.** Simplify $\\frac{12x^5y^2}{4x^2y}$.\n\nCoefficients: $12\\div4=3$. $x$: $x^{5-2}=x^3$. $y$: $y^{2-1}=y$. Answer: $3x^3y$.",
        },
        {
          heading: "Index equations",
          body: "Match bases first, then equate indices.\n\n**Worked example.** Solve $2^{2x}=8^{x-1}$.\n\n$8=2^3$, so $2^{2x}=2^{3x-3}$, giving $2x=3x-3$, so $x=3$.\n\nTrap: equating $2x$ to $x-1$ without converting 8 to a power of 2 loses all method marks.",
        },
        {
          heading: "Exam technique",
          body: "- Word problems: define the variable clearly, form the equation, solve, then **reject impossible solutions** (negative lengths, fractions of people).\n- 'Hence' questions must use the previous answer — don't restart with a different method.\n- When asked for positive indices only, $x^{-3}$ must be written $\\frac{1}{x^3}$.",
        },
      ],
    },
  ],
};
