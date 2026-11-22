import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "edm10-u2-lesson-2-1",
  code: "2-1",
  title: "Algebraic Manipulation",
  goal: "I CAN expand brackets, factorise quadratics including $ax^2+bx+c$, and simplify and combine algebraic fractions.",
  standards: ["4MA1 2.1", "4MA1 2.2", "4MA1 2.3H", "4MA1 2.5H"],
  vocabulary: [
    { term: "Expand", definition: "Multiply out brackets so that every term inside is multiplied by every term outside." },
    { term: "Factorise", definition: "Write an expression as a product of two or more factors, usually with brackets." },
    { term: "Quadratic expression", definition: "An expression whose highest power of the variable is 2, such as $2x^2+5x-12$." },
    { term: "Difference of two squares", definition: "An expression $a^2-b^2$, which factorises as $(a-b)(a+b)$." },
    { term: "Algebraic fraction", definition: "A fraction whose numerator and denominator are algebraic expressions." },
    { term: "Common denominator", definition: "A shared denominator used to add or subtract fractions." },
  ],
  concepts: [
    {
      id: "edm10-u2-expand-factorise",
      title: "Expanding brackets and factorising quadratics",
      skill: "Expand double brackets and factorise quadratics of the form $x^2+bx+c$ and $ax^2+bx+c$.",
      lesson: {
        sections: [
          {
            heading: "Expanding double brackets",
            body: "Multiply each term in the first bracket by each term in the second, then collect like terms: $(x+3)(x+5)=x^2+5x+3x+15=x^2+8x+15$.",
          },
          {
            heading: "Factorising $x^2+bx+c$",
            body: "Find two numbers that multiply to $c$ and add to $b$. For $x^2-5x-14$ the numbers are $-7$ and $2$, so it factorises as $(x-7)(x+2)$. Always check by expanding.",
          },
          {
            heading: "Factorising $ax^2+bx+c$",
            body: "Multiply $a\\times c$, find two numbers with that product that add to $b$, split the middle term, and factorise in pairs. For $6x^2+7x-3$: $ac=-18$, numbers $9$ and $-2$, so $6x^2+9x-2x-3=3x(2x+3)-1(2x+3)=(3x-1)(2x+3)$.",
          },
        ],
        keyFormulas: [
          { name: "Difference of two squares", statement: "$a^2-b^2=(a-b)(a+b)$" },
          { name: "Split the middle term", statement: "Find $p,q$ with $pq=ac$ and $p+q=b$." },
        ],
        workedExample: {
          problem: "Factorise $2x^2+5x-12$.",
          solution: "$ac=-24$, and $8+(-3)=5$ with $8\\times(-3)=-24$. So $2x^2+8x-3x-12=2x(x+4)-3(x+4)=(2x-3)(x+4)$.",
        },
      },
      questions: [
        {
          id: "edm10-u2-expand-factorise-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Expand and simplify $(x+3)(x+5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2+15$" },
              { id: "b", text: "$x^2+8x+15$" },
              { id: "c", text: "$x^2+15x+8$" },
              { id: "d", text: "$x^2+8x+8$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Distributive law", statement: "$(a+b)(c+d)=ac+ad+bc+bd$." },
            ],
            steps: [
              { reasoning: "Multiply every term in the first bracket by every term in the second.", working: "x^2+5x+3x+15", marks: 1, markCode: "M" },
              { reasoning: "Collect like terms.", working: "x^2+8x+15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $x^2+8x+15$",
            commonErrors: ["Missing the middle terms: $x^2+15$.", "Adding the constants instead of multiplying: $x^2+8x+8$."],
          },
        },
        {
          id: "edm10-u2-expand-factorise-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 2,
          stem: "Factorise $x^2-5x-14$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising a quadratic", statement: "For $x^2+bx+c$ find numbers with product $c$ and sum $b$." },
            ],
            steps: [
              { reasoning: "Two numbers multiply to $-14$ and add to $-5$: $-7$ and $2$.", working: "(x\\,\\_\\,)(x\\,\\_\\,)\\ \\text{with}\\ -7,\\ 2", marks: 1, markCode: "M" },
              { reasoning: "Write the factorised form and check by expanding: $x^2+2x-7x-14$.", working: "(x-7)(x+2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x-7)(x+2)$",
            commonErrors: ["Using $(x+7)(x-2)$, which gives $+5x$.", "Sign errors with the two numbers."],
          },
        },
        {
          id: "edm10-u2-expand-factorise-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "Factorise $6x^2+7x-3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Splitting the middle term", statement: "For $ax^2+bx+c$ find $p,q$ with $pq=ac$ and $p+q=b$, then factorise in pairs." },
            ],
            steps: [
              { reasoning: "$ac=-18$. The numbers $9$ and $-2$ multiply to $-18$ and add to $7$.", working: "6x^2+9x-2x-3", marks: 1, markCode: "M" },
              { reasoning: "Factorise each pair to expose the common bracket.", working: "3x(2x+3)-1(2x+3)", marks: 1, markCode: "M" },
              { reasoning: "Take out the common bracket.", working: "(3x-1)(2x+3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3x-1)(2x+3)$",
            commonErrors: ["Writing $(6x-1)(x+3)$, whose middle term is $17x$.", "Sign error in the second pair."],
            examinerNote: "Accept the factors in either order. Full marks for correct answer from trial and improvement.",
          },
        },
        {
          id: "edm10-u2-expand-factorise-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A rectangle has area $(2x^2+5x-12)$ cm$^2$ and width $(x+4)$ cm, where $x>2$.",
          parts: [
            { label: "a", prompt: "Factorise $2x^2+5x-12$.", marks: 2 },
            { label: "b", prompt: "Write down an expression for the length of the rectangle, and show that its perimeter is $(6x+2)$ cm.", marks: 2 },
            { label: "c", prompt: "The perimeter is $38$ cm. Work out the value of $x$ and the area of the rectangle.", marks: 3 },
            { label: "d", prompt: "Show that the length of the rectangle is greater than its width only when $x>7$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "Area $=$ length $\\times$ width, so length $=$ area $\\div$ width." },
              { kind: "formula", name: "Perimeter", statement: "Perimeter $=2(\\text{length}+\\text{width})$." },
            ],
            steps: [
              { part: "a", reasoning: "$ac=-24$; the numbers $8$ and $-3$ give $2x^2+8x-3x-12$.", working: "2x(x+4)-3(x+4)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take out the common bracket.", working: "(2x-3)(x+4)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The width is $(x+4)$, so the length is the other factor, $(2x-3)$.", working: "\\text{length}=2x-3", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add length and width and double.", working: "2[(2x-3)+(x+4)]=2(3x+1)=6x+2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set the perimeter equal to 38.", working: "6x+2=38", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve.", working: "x=6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Length $=2(6)-3=9$, width $=10$, so area $=90$ cm$^2$ (check: $2(36)+30-12=90$).", working: "9\\times10=90", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Length greater than width means $2x-3>x+4$.", working: "2x-3>x+4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtract $x$ and add 3.", working: "x>7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(2x-3)(x+4)$ (b) length $2x-3$, perimeter $6x+2$ (c) $x=6$, area $90$ cm$^2$ (d) $2x-3>x+4\\Rightarrow x>7$",
            commonErrors: ["Adding length and width but forgetting to double.", "Reversing the inequality in part (d)."],
          },
        },
      ],
    },
    {
      id: "edm10-u2-algebraic-fractions",
      title: "Algebraic fractions",
      skill: "Simplify, add and subtract algebraic fractions by factorising and using a common denominator.",
      lesson: {
        sections: [
          {
            heading: "Simplifying",
            body: "Factorise the numerator and the denominator completely, then cancel **common factors** (not common terms). For example $\\frac{x^2-9}{x+3}=\\frac{(x-3)(x+3)}{x+3}=x-3$.",
          },
          {
            heading: "Adding and subtracting",
            body: "Write each fraction over a common denominator, usually the product of the denominators, then combine the numerators: $\\frac{3}{x+1}+\\frac{2}{x-2}=\\frac{3(x-2)+2(x+1)}{(x+1)(x-2)}$.",
          },
          {
            heading: "Solving equations with fractions",
            body: "To solve an equation such as $\\frac{2x+3}{x+2}=\\frac{5}{3}$, cross-multiply to remove the denominators, then solve the resulting linear or quadratic equation. Check that no solution makes a denominator zero.",
          },
        ],
        keyFormulas: [
          { name: "Cancelling", statement: "Cancel common **factors**, never common terms." },
          { name: "Adding fractions", statement: "$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{x^2+5x+6}{x^2-4}$.",
          solution: "Numerator $(x+2)(x+3)$, denominator $(x-2)(x+2)$. Cancel $(x+2)$ to get $\\frac{x+3}{x-2}$.",
        },
      },
      questions: [
        {
          id: "edm10-u2-algebraic-fractions-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "Simplify $\\dfrac{x^2-9}{x+3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+3$" },
              { id: "b", text: "$x-9$" },
              { id: "c", text: "$x-3$" },
              { id: "d", text: "$x^2-3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Difference of two squares", statement: "$x^2-9=(x-3)(x+3)$." },
            ],
            steps: [
              { reasoning: "Factorise the numerator.", working: "\\frac{(x-3)(x+3)}{x+3}", marks: 1, markCode: "M" },
              { reasoning: "Cancel the common factor.", working: "x-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $x-3$",
            commonErrors: ["Cancelling $x^2$ with $x$ and $9$ with $3$ to get $x-3$ without factorising, or writing $x-9$."],
          },
        },
        {
          id: "edm10-u2-algebraic-fractions-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Simplify fully $\\dfrac{x^2+5x+6}{x^2-4}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cancelling factors", statement: "Only common factors of the whole numerator and whole denominator can be cancelled." },
            ],
            steps: [
              { reasoning: "Factorise the numerator.", working: "x^2+5x+6=(x+2)(x+3)", marks: 1, markCode: "M" },
              { reasoning: "Factorise the denominator as a difference of two squares.", working: "x^2-4=(x-2)(x+2)", marks: 1, markCode: "M" },
              { reasoning: "Cancel $(x+2)$.", working: "\\frac{x+3}{x-2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\dfrac{x+3}{x-2}$",
            commonErrors: ["Cancelling $x^2$ terms to leave $\\frac{5x+6}{-4}$."],
          },
        },
        {
          id: "edm10-u2-algebraic-fractions-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Write $\\dfrac{3}{x+1}+\\dfrac{2}{x-2}$ as a single fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Common denominator", statement: "$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}$." },
            ],
            steps: [
              { reasoning: "Use the common denominator $(x+1)(x-2)$.", working: "\\frac{3(x-2)}{(x+1)(x-2)}+\\frac{2(x+1)}{(x+1)(x-2)}", marks: 1, markCode: "M" },
              { reasoning: "Combine the numerators.", working: "\\frac{3(x-2)+2(x+1)}{(x+1)(x-2)}", marks: 1, markCode: "M" },
              { reasoning: "Expand the numerator.", working: "3x-6+2x+2", marks: 1, markCode: "A" },
              { reasoning: "Simplify.", working: "\\frac{5x-4}{(x+1)(x-2)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\dfrac{5x-4}{(x+1)(x-2)}$",
            commonErrors: ["Adding the denominators.", "Failing to multiply both parts of the numerator: $3x-2$ instead of $3x-6$."],
          },
        },
        {
          id: "edm10-u2-algebraic-fractions-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "$f=\\dfrac{2x^2-x-6}{x^2-4}$ for $x\\ne\\pm2$.",
          parts: [
            { label: "a", prompt: "Factorise $2x^2-x-6$.", marks: 2 },
            { label: "b", prompt: "Hence show that $f$ simplifies to $\\dfrac{2x+3}{x+2}$.", marks: 2 },
            { label: "c", prompt: "Solve $f=\\dfrac{5}{3}$.", marks: 3 },
            { label: "d", prompt: "Show that $f-2$ can be written as $-\\dfrac{1}{x+2}$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Factorising", statement: "$ax^2+bx+c$: split the middle term using numbers with product $ac$ and sum $b$." },
              { kind: "principle", name: "Cancelling factors", statement: "Cancel only common factors." },
            ],
            steps: [
              { part: "a", reasoning: "$ac=-12$; the numbers $-4$ and $3$ give $2x^2-4x+3x-6$.", working: "2x(x-2)+3(x-2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Take out the common bracket.", working: "(2x+3)(x-2)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise the denominator.", working: "x^2-4=(x-2)(x+2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cancel the common factor $(x-2)$.", working: "\\frac{(2x+3)(x-2)}{(x-2)(x+2)}=\\frac{2x+3}{x+2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cross-multiply.", working: "3(2x+3)=5(x+2)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Expand.", working: "6x+9=5x+10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve; $x=1$ is allowed because it is not $\\pm2$.", working: "x=1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write 2 over the denominator $(x+2)$.", working: "\\frac{2x+3}{x+2}-\\frac{2(x+2)}{x+2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Expand the bracket in the numerator.", working: "\\frac{2x+3-2x-4}{x+2}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Simplify to the required form.", working: "\\frac{-1}{x+2}=-\\frac{1}{x+2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(2x+3)(x-2)$ (b) shown (c) $x=1$ (d) shown",
            commonErrors: ["Not changing the sign of $+4$ when subtracting in part (d).", "Cancelling $x$ terms across the fraction."],
          },
        },
      ],
    },
  ],
};
