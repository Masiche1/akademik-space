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
              { id: "a", text: "$x^2+2x+15$" },
              { id: "b", text: "$x^2+8x+8$" },
              { id: "c", text: "$x^2+15$" },
              { id: "d", text: "$x^2+8x+15$" },
            ],
            correctChoiceId: "d",
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
        {
          id: "ciem-u2-expand-factorise-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Expand $(x+4)(x+7)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x+11$" },
              { id: "b", text: "$x^2+28x+11$" },
              { id: "c", text: "$x^2+11x+28$" },
              { id: "d", text: "$x^2+11x+11$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Expanding a binomial product", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$." },
            ],
            steps: [
              { reasoning: "Middle term is $4+7=11$; constant term is $4\\times7=28$.", working: "x^2+11x+28", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x^2+11x+28$",
            commonErrors: ["Writing $x^2+28x+11$ by swapping the middle and constant terms.", "Adding the $x$ terms incorrectly."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Factorise $x^2+9x+20$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+2)(x+10)$" },
              { id: "b", text: "$(x+1)(x+20)$" },
              { id: "c", text: "$(x-4)(x-5)$" },
              { id: "d", text: "$(x+4)(x+5)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Factorising a quadratic", statement: "Find two numbers that multiply to the constant term and add to the $x$ coefficient." },
            ],
            steps: [
              { reasoning: "$4\\times5=20$ and $4+5=9$.", working: "(x+4)(x+5)=x^2+9x+20", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $(x+4)(x+5)$",
            commonErrors: ["Choosing $2$ and $10$, which multiply to 20 but add to 12.", "Using negative signs for a positive constant term."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Factorise $2x^2+7x+3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2x-1)(x-3)$" },
              { id: "b", text: "$(2x+3)(x+1)$" },
              { id: "c", text: "$(2x+1)(x+3)$" },
              { id: "d", text: "$(x+2)(2x+1)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Factorising a quadratic", statement: "For $ax^2+bx+c$ with $a\\ne1$, split the $x$ coefficient across the two brackets." },
            ],
            steps: [
              { reasoning: "Need factors of 6 ($2\\times3$) that combine to give $7x$: $6x+x$.", working: "2x^2+6x+x+3=x(2x+3)+(2x+3)=(2x+1)(x+3)", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $(2x+1)(x+3)$",
            commonErrors: ["Choosing $(2x+3)(x+1)$, which expands to $2x^2+5x+3$.", "Sign error giving negative brackets."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand $(2x-3)(x+4)$ and enter the coefficient of $x$ in the expansion.",
          response: { type: "numeric", parts: [{ label: "Coefficient of x", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Expanding a binomial product", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$, applied term by term." },
            ],
            steps: [
              { reasoning: "Expand all four terms.", working: "2x^2+8x-3x-12", marks: 1, markCode: "M" },
              { reasoning: "Collect the $x$ terms: $8x-3x=5x$.", working: "2x^2+5x-12\\Rightarrow\\text{coefficient}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x^2+5x-12$; coefficient of $x$ is $5$",
            commonErrors: ["Writing $8-3=11$ for the coefficient.", "Forgetting the $-3\\times4=-12$ constant term affects nothing here but sign slips do."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Expand $(3x-2)^2$ and enter the coefficient of $x$ in the expansion.",
          response: { type: "numeric", parts: [{ label: "Coefficient of x", answer: -12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(a+b)^2=a^2+2ab+b^2$." },
            ],
            steps: [
              { reasoning: "Expand using $(a+b)^2$ with $a=3x$, $b=-2$.", working: "9x^2-12x+4", marks: 1, markCode: "M" },
              { reasoning: "Read off the coefficient of $x$.", working: "-12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9x^2-12x+4$; coefficient of $x$ is $-12$",
            commonErrors: ["Writing $(3x-2)^2=9x^2+4$ and losing the middle term.", "Sign error giving $+12x$."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $x^2-5x+6=0$. Enter the smaller root and the larger root.",
          response: { type: "numeric", parts: [{ label: "Smaller root", answer: 2 }, { label: "Larger root", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Factorising a quadratic", statement: "Find two numbers that multiply to the constant term and add to the $x$ coefficient." },
            ],
            steps: [
              { reasoning: "Factorise: $(x-2)(x-3)=0$.", working: "x^2-5x+6=(x-2)(x-3)", marks: 1, markCode: "M" },
              { reasoning: "Set each factor to zero.", working: "x=2\\ \\text{or}\\ x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$ or $x=3$",
            commonErrors: ["Giving only one root.", "Sign error writing $(x+2)(x+3)$, giving $x=-2,-3$."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A rectangular patio has length $(x+5)$ m and width $(x+2)$ m.",
          parts: [
            { label: "a", prompt: "Show that the area of the patio is $(x^2+7x+10)$ m$^2$.", marks: 2 },
            { label: "b", prompt: "Given that the area is $18$ m$^2$, form a quadratic equation in $x$.", marks: 2 },
            { label: "c", prompt: "Solve your equation.", marks: 3 },
            { label: "d", prompt: "Hence find the width of the patio.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) positive x", answer: 1 },
              { label: "(d) width", answer: 3, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Expanding a binomial product", statement: "Area = length $\\times$ width; expand $(x+5)(x+2)$." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply length by width.", working: "(x+5)(x+2)=x^2+2x+5x+10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collect like terms.", working: "=x^2+7x+10\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the area expression equal to 18.", working: "x^2+7x+10=18", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rearrange to standard form.", working: "x^2+7x-8=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Factorise the quadratic.", working: "(x+8)(x-1)=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Set each factor to zero.", working: "x=-8\\ \\text{or}\\ x=1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both solutions.", working: "x=-8,\\ x=1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Width = $x+2$; $x=-8$ gives a negative width, so $x=1$.", working: "1+2=3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the width with units.", working: "3\\text{ m}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x^2+7x+10$ m$^2$ (b) $x^2+7x-8=0$ (c) $x=-8$ or $x=1$ (d) $3$ m",
            commonErrors: ["In (b) writing $x^2+7x+10=18$ without rearranging.", "In (d) accepting $x=-8$, which gives width $-6$ m — reject negative lengths."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between expanding and factorising, using $(x+2)(x+5)$ as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Expanding vs factorising", statement: "Expanding multiplies out to a polynomial; factorising is the reverse process." },
            ],
            steps: [
              { reasoning: "Expanding $(x+2)(x+5)$ multiplies the brackets to give a quadratic.", working: "x^2+7x+10", marks: 1, markCode: "M" },
              { reasoning: "Factorising $x^2+7x+10$ is the reverse: finding two numbers with product 10 and sum 7.", working: "(x+2)(x+5)", marks: 1, markCode: "M" },
              { reasoning: "State that the two processes are inverses of each other.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expanding: $(x+2)(x+5)=x^2+7x+10$; factorising reverses this.",
            commonErrors: ["Describing both as 'multiplying out'."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Show that $(x+3)^2-(x-3)^2=12x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(a+b)^2=a^2+2ab+b^2$." },
              { kind: "formula", name: "Difference of two squares", statement: "$a^2-b^2=(a+b)(a-b)$; here $a=x+3$, $b=x-3$." },
            ],
            steps: [
              { reasoning: "Expand each square.", working: "(x+3)^2=x^2+6x+9,\\quad (x-3)^2=x^2-6x+9", marks: 1, markCode: "M" },
              { reasoning: "Subtract the expansions.", working: "(x^2+6x+9)-(x^2-6x+9)", marks: 1, markCode: "M" },
              { reasoning: "The $x^2$ and constant terms cancel, leaving $12x$.", working: "=12x", marks: 1, markCode: "M" },
              { reasoning: "State the identity.", working: "(x+3)^2-(x-3)^2=12x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x+3)^2-(x-3)^2=12x$",
            commonErrors: ["Sign error when subtracting: writing $6x-6x$ instead of $6x-(-6x)$.", "Using $(x+3)(x-3)$ difference-of-squares directly on the squares."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The product of two consecutive even numbers is $168$.",
          parts: [
            { label: "a", prompt: "Let the smaller number be $n$. Form an equation in $n$.", marks: 2 },
            { label: "b", prompt: "Solve the equation by factorising.", marks: 2 },
            { label: "c", prompt: "State the two even numbers.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Forming equations", statement: "Consecutive even numbers differ by 2." },
            ],
            steps: [
              { part: "a", reasoning: "The next even number is $n+2$.", working: "n(n+2)=168", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand and rearrange.", working: "n^2+2n-168=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise: need two numbers with product $-168$ and sum $2$.", working: "(n+14)(n-12)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "n=-14\\ \\text{or}\\ n=12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reject the negative solution since even numbers here are positive lengths context — state both valid pair.", working: "12\\text{ and }14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $n^2+2n-168=0$ (b) $n=-14$ or $n=12$ (c) $12$ and $14$",
            commonErrors: ["Using $n(n+1)$ for consecutive even numbers instead of $n(n+2)$.", "Forgetting to reject or discuss the negative solution."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the expansion of $(x-6)(x+2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2-8x-12$" },
              { id: "b", text: "$x^2-4x-12$" },
              { id: "c", text: "$x^2-4x+12$" },
              { id: "d", text: "$x^2+4x-12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Expanding a binomial product", statement: "$(x+a)(x+b)=x^2+(a+b)x+ab$." },
            ],
            steps: [
              { reasoning: "Middle term: $-6+2=-4$; constant: $-6\\times2=-12$.", working: "x^2-4x-12", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x^2-4x-12$",
            commonErrors: ["Sign error on the middle term giving $+4x$.", "Sign error on the constant giving $+12$."],
          },
        },
        {
          id: "ciem-u2-expand-factorise-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For which value of $k$ does $x^2+kx+9$ factorise as $(x+3)^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "3" },
              { id: "c", text: "9" },
              { id: "d", text: "-6" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square of a binomial", statement: "$(x+3)^2=x^2+6x+9$." },
            ],
            steps: [
              { reasoning: "Compare $(x+3)^2=x^2+6x+9$ with $x^2+kx+9$.", working: "k=6", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $k=6$",
            commonErrors: ["Writing $k=3$ by forgetting the factor 2 in the middle term."],
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
              { id: "a", text: "$7x^6$" },
              { id: "b", text: "$12x^6$" },
              { id: "c", text: "$7x^5$" },
              { id: "d", text: "$12x^5$" },
            ],
            correctChoiceId: "d",
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
        {
          id: "ciem-u2-index-laws-algebra-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $x^5\\times x^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{15}$" },
              { id: "b", text: "$x^8$" },
              { id: "c", text: "$x^2$" },
              { id: "d", text: "$2x^8$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$x^m\\times x^n=x^{m+n}$ when multiplying powers with the same base." },
            ],
            steps: [
              { reasoning: "Add the indices: $5+3=8$.", working: "x^{5+3}=x^8", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x^8$",
            commonErrors: ["Multiplying the indices to get $x^{15}$.", "Adding the bases to get $2x^8$."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Simplify $\\frac{x^9}{x^4}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{2.25}$" },
              { id: "b", text: "$x^{-5}$" },
              { id: "c", text: "$x^5$" },
              { id: "d", text: "$x^{13}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$\\frac{x^m}{x^n}=x^{m-n}$ when dividing powers with the same base." },
            ],
            steps: [
              { reasoning: "Subtract the indices: $9-4=5$.", working: "x^{9-4}=x^5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x^5$",
            commonErrors: ["Dividing the indices to get $x^{2.25}$.", "Adding the indices to get $x^{13}$."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Simplify $(2x^3)^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x^9$" },
              { id: "b", text: "$2x^6$" },
              { id: "c", text: "$4x^6$" },
              { id: "d", text: "$4x^5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(ab)^n=a^nb^n$ and $(x^m)^n=x^{mn}$." },
            ],
            steps: [
              { reasoning: "Square both the coefficient and the power: $2^2=4$ and $(x^3)^2=x^6$.", working: "(2x^3)^2=4x^6", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $4x^6$",
            commonErrors: ["Writing $2x^6$ — forgetting to square the coefficient.", "Writing $4x^9$ — adding instead of multiplying the indices."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\frac{6x^8}{3x^5}$ when $x=2$. Enter the value.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$\\frac{x^m}{x^n}=x^{m-n}$; simplify before substituting." },
            ],
            steps: [
              { reasoning: "Simplify the algebraic fraction first.", working: "\\frac{6x^8}{3x^5}=2x^3", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=2$.", working: "2\\times2^3=2\\times8=16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$",
            commonErrors: ["Substituting before simplifying and making an arithmetic slip.", "Writing $2x^3$ as $2x^{8-5}=2x^{1.6}$."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify $\\frac{4x^3\\times6x^2}{3x^4}$ and find its value when $x=5$. Enter the value.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$x^m\\times x^n=x^{m+n}$ and $\\frac{x^m}{x^n}=x^{m-n}$." },
            ],
            steps: [
              { reasoning: "Multiply the numerator terms.", working: "4x^3\\times6x^2=24x^5", marks: 1, markCode: "M" },
              { reasoning: "Divide by $3x^4$ and simplify.", working: "\\frac{24x^5}{3x^4}=8x", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=5$.", working: "8\\times5=40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$",
            commonErrors: ["Dividing coefficients and indices inconsistently: $\\frac{24}{3}x^{5-4}$ is correct, $24x^{\\frac{5}{4}}$ is not.", "Simplifying to $8x^9$ by adding instead of subtracting indices."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Given that $\\frac{y^9}{y^n}=y^4$, find the value of $n$.",
          response: { type: "numeric", parts: [{ label: "n", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$\\frac{y^m}{y^n}=y^{m-n}$." },
            ],
            steps: [
              { reasoning: "Equate the indices: $9-n=4$.", working: "9-n=4", marks: 1, markCode: "M" },
              { reasoning: "Solve for $n$.", working: "n=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=5$",
            commonErrors: ["Writing $9-n=4$ as $n-9=4$ and getting $n=13$."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Let $P=\\frac{12x^5}{4x^2}$.",
          parts: [
            { label: "a", prompt: "Simplify $P$, giving your answer in the form $ax^n$.", marks: 2 },
            { label: "b", prompt: "Find the value of $P$ when $x=2$.", marks: 2 },
            { label: "c", prompt: "Find the value of $n$ for which $x^n\\times x^3=x^{10}$.", marks: 2 },
            { label: "d", prompt: "Solve $3^{k+1}=81$ for $k$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) value", answer: 24 },
              { label: "(c) n", answer: 7 },
              { label: "(d) k", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$x^m\\times x^n=x^{m+n}$, $\\frac{x^m}{x^n}=x^{m-n}$, $(x^m)^n=x^{mn}$, and $a^m=a^n \\Rightarrow m=n$ for $a>0$, $a\\ne1$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide coefficients and subtract indices.", working: "P=3x^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State in the required form.", working: "a=3,\\ n=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=2$ into $3x^3$.", working: "3\\times2^3=3\\times8", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=24", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equate indices: $n+3=10$.", working: "n=7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the value.", working: "n=7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write 81 as a power of 3.", working: "81=3^4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Equate the indices.", working: "k+1=4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $k$.", working: "k=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3x^3$ (b) $24$ (c) $n=7$ (d) $k=3$",
            commonErrors: ["In (d) writing $81=3^3$ or $9^2$ without converting to base 3.", "In (c) computing $10-3=6$ instead of $7$."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the index laws you would use to simplify $\\frac{6x^7}{2x^3}$, and state the simplified result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$\\frac{x^m}{x^n}=x^{m-n}$ and divide coefficients separately." },
            ],
            steps: [
              { reasoning: "Divide the coefficients: $6\\div2=3$.", marks: 1, markCode: "M" },
              { reasoning: "Subtract the indices of $x$: $7-3=4$.", marks: 1, markCode: "M" },
              { reasoning: "State the simplified result.", working: "3x^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x^4$",
            commonErrors: ["Dividing the indices instead of subtracting: $x^{7/3}$.", "Simplifying to $3x^{10}$ by adding indices."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Show that $\\frac{x^6}{x^2}\\times\\frac{x^3}{x}=x^6$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$\\frac{x^m}{x^n}=x^{m-n}$ and $x^m\\times x^n=x^{m+n}$." },
            ],
            steps: [
              { reasoning: "Simplify each fraction separately.", working: "\\frac{x^6}{x^2}=x^4,\\quad \\frac{x^3}{x}=x^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply the results, adding indices.", working: "x^4\\times x^2=x^{4+2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the index sum.", working: "=x^6", marks: 1, markCode: "M" },
              { reasoning: "State the identity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{x^6}{x^2}\\times\\frac{x^3}{x}=x^6$",
            commonErrors: ["Combining all indices into one fraction incorrectly.", "Writing $x^{6-2+3-1}=x^6$ — this actually works but must be shown clearly."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Simplify $\\frac{(3x^2)^2\\times2x}{6x^3}$, giving your answer in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$(ab)^n=a^nb^n$, $(x^m)^n=x^{mn}$, $x^m\\times x^n=x^{m+n}$, $\\frac{x^m}{x^n}=x^{m-n}$." },
            ],
            steps: [
              { reasoning: "Expand $(3x^2)^2$.", working: "(3x^2)^2=9x^4", marks: 1, markCode: "M" },
              { reasoning: "Multiply by $2x$.", working: "9x^4\\times2x=18x^5", marks: 1, markCode: "M" },
              { reasoning: "Divide by $6x^3$.", working: "\\frac{18x^5}{6x^3}", marks: 1, markCode: "M" },
              { reasoning: "Simplify coefficients and indices.", working: "=3x^2", marks: 1, markCode: "M" },
              { reasoning: "State the simplest form.", working: "3x^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x^2$",
            commonErrors: ["Writing $(3x^2)^2=3x^4$ — forgetting to square the 3.", "Index slip: $18x^5\\div6x^3=3x^{5-3}=3x^2$ is correct; $3x^8$ is not."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which expression is NOT equal to $x^8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{11}\\div x^2$" },
              { id: "b", text: "$(x^2)^4$" },
              { id: "c", text: "$x^5\\times x^3$" },
              { id: "d", text: "$x^{12}\\div x^4$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "$x^m\\times x^n=x^{m+n}$, $(x^m)^n=x^{mn}$, $\\frac{x^m}{x^n}=x^{m-n}$." },
            ],
            steps: [
              { reasoning: "Evaluate each: (a) $x^8$, (b) $x^8$, (c) $x^9$, (d) $x^8$.", working: "x^{11-2}=x^9\\ne x^8", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $x^{11}\\div x^2=x^9$",
            commonErrors: ["Misreading (c) as $x^{11-2}=x^8$."],
          },
        },
        {
          id: "ciem-u2-index-laws-algebra-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "If $5^x=125$, what is the value of $x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "2" },
              { id: "c", text: "3" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Index laws", statement: "For $a>0$, $a^m=a^n \\Rightarrow m=n$; write both sides with the same base." },
            ],
            steps: [
              { reasoning: "Write $125$ as a power of 5: $125=5^3$, so $x=3$.", working: "5^x=5^3\\Rightarrow x=3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $x=3$",
            commonErrors: ["Writing $125=5^2\\times5$ and mishandling the index.", "Answering $x=25$ by dividing instead of matching bases."],
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
