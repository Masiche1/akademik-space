import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "alg2-u4-lesson-4-2",
  code: "4-2",
  title: "Solving Quadratic Equations",
  goal: "I CAN solve quadratic equations by factoring or using the quadratic formula, and use the discriminant to determine the number and type of solutions.",
  standards: ["HSA-REI.B.4"],
  vocabulary: [
    { term: "Zero product property", definition: "If a product of real numbers is zero, then at least one factor is zero: if $AB=0$, then $A=0$ or $B=0$." },
    { term: "Root / solution", definition: "A value of the variable that makes an equation true; for $f(x)=0$, it is also an $x$-intercept of the graph when real." },
    { term: "Factored form", definition: "A product form such as $a(x-r_1)(x-r_2)$, which reveals the zeros by setting each factor equal to zero." },
    { term: "Quadratic formula", definition: "The formula $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ for solving $ax^2+bx+c=0$, where $a\\ne0$." },
    { term: "Discriminant", definition: "The quantity $b^2-4ac$ under the radical in the quadratic formula; its sign determines the number and type of roots." },
    { term: "Repeated root", definition: "A root of multiplicity two; it occurs when the discriminant is zero and the parabola touches the $x$-axis at one point." },
  ],
  concepts: [
    {
      id: "alg2-u4-factoring-solutions",
      title: "Solving by factoring",
      skill: "Set a quadratic equal to zero, factor it, and apply the zero product property to find every solution.",
      lesson: {
        sections: [
          {
            heading: "Put the equation in zero form",
            body: "Before factoring to solve, write the equation as $ax^2+bx+c=0$. Subtract or add terms on both sides as needed. The zero product property applies to a product equal to zero, not to a product equal to a nonzero number.",
          },
          {
            heading: "Factor and use zero product",
            body: "Factor the left side completely. If $(x-r_1)(x-r_2)=0$, then $x-r_1=0$ or $x-r_2=0$, giving $x=r_1$ or $x=r_2$. For a leading coefficient other than $1$, include it in the factorization and solve each factor equation. Check solutions in the original equation, especially when transformations might have introduced restrictions.",
          },
          {
            heading: "Interpret the solutions",
            body: "A quadratic can have two distinct real solutions, one repeated real solution, or no real solutions. Factoring over the real numbers makes real roots visible; if an expression does not factor conveniently, the quadratic formula provides a general method. A solution set should include both roots when there are two.",
          },
        ],
        keyFormulas: [
          { name: "Zero product property", statement: "$AB=0 \\iff A=0$ or $B=0$." },
          { name: "Difference of squares", statement: "$u^2-v^2=(u-v)(u+v)$." },
        ],
        workedExample: {
          problem: "Solve $2x^2+x-6=0$ by factoring.",
          solution: "Find two factors whose product gives $2x^2+x-6$: $(2x-3)(x+2)=0$. By the zero product property, $2x-3=0$ or $x+2=0$. Thus $x=\\frac32$ or $x=-2$. Substitution confirms both values satisfy the original equation.",
        },
      },
      questions: [
        {
          id: "alg2-u4-fact-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $x^2-5x+6=0$. Which pair gives all solutions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=1$ or $x=6$" },
            { id: "b", text: "$x=2$ only" },
            { id: "c", text: "$x=2$ or $x=3$" },
            { id: "d", text: "$x=-2$ or $x=-3$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [
              { kind: "law", name: "Factoring a monic quadratic", statement: "$x^2-(r_1+r_2)x+r_1r_2=(x-r_1)(x-r_2)$." },
              { kind: "theorem", name: "Zero product property", statement: "If $AB=0$, then $A=0$ or $B=0$." },
            ],
            steps: [
              { reasoning: "Factor the trinomial into two binomials whose product is $6$ and whose sum is $-5$.", working: "x^2-5x+6=(x-2)(x-3)", marks: 1, markCode: "M" },
              { reasoning: "Set each factor equal to zero and solve both linear equations.", working: "x-2=0 \\quad\\text{or}\\quad x-3=0 \\implies x=2 \\text{ or } x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=2$ or $x=3$.",
            commonErrors: ["Giving the factor constants with the wrong signs as roots.", "Reporting only one of the two solutions."],
          },
        },
        {
          id: "alg2-u4-fact-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $2x^2+x-6=0$. Enter both roots; either order is accepted.",
          response: { type: "numeric", parts: [{ label: "Root 1", answer: -2 }, { label: "Root 2", answer: 1.5 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Zero product property", statement: "A product is zero only if at least one of its factors is zero." },
              { kind: "property", name: "Equivalent equation", statement: "A factorization equal to zero has the same solutions as the original equation when it is algebraically equivalent." },
            ],
            steps: [
              { reasoning: "Factor the quadratic into binomials.", working: "2x^2+x-6=(2x-3)(x+2)=0", marks: 1, markCode: "M" },
              { reasoning: "Set each factor equal to zero.", working: "2x-3=0 \\implies x=\\frac32 \\qquad x+2=0 \\implies x=-2", marks: 1, markCode: "M" },
              { reasoning: "State both solutions in exact form; $\\frac32=1.5$.", working: "x=-2,\\;\\frac32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2$ and $x=\\frac32$.",
            commonErrors: ["Solving $2x-3=0$ as $x=3$ without dividing by $2$.", "Forgetting the negative solution from $x+2=0$."],
          },
        },
        {
          id: "alg2-u4-fact-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims that $x^2=9$ has only the solution $x=3$. Explain the error and give the complete solution set, showing how the zero product property applies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Square roots of positive numbers", statement: "If $x^2=r$ for $r>0$, then $x=\\sqrt r$ or $x=-\\sqrt r$." },
              { kind: "theorem", name: "Zero product property", statement: "If a product equals zero, at least one factor equals zero." },
              { kind: "law", name: "Difference of squares", statement: "$x^2-r^2=(x-r)(x+r)$." },
            ],
            steps: [
              { reasoning: "Move all terms to one side to place the equation in zero form.", working: "x^2-9=0", marks: 1, markCode: "M" },
              { reasoning: "Factor as a difference of squares.", working: "(x-3)(x+3)=0", marks: 1, markCode: "M" },
              { reasoning: "Apply the zero product property to both factors.", working: "x-3=0 \\quad\\text{or}\\quad x+3=0", marks: 1, markCode: "A" },
              { reasoning: "Solve both equations and identify that taking only the positive square root omits a valid solution.", working: "x=3 \\quad\\text{or}\\quad x=-3", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The complete solution set is $\\{-3,3\\}$. The claim omits $x=-3$, since $(-3)^2=9$ as well.",
            commonErrors: ["Taking only the principal square root and assuming it is the only solution."],
            examinerNote: "An explanation that $(-3)^2=9$ may earn the reasoning mark when paired with the complete solution set.",
          },
        },
        {
          id: "alg2-u4-fact-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A framer mounts a rectangular photo that is $12$ in by $8$ in. The frame adds a border of uniform width $x$ inches on all four sides. The outer dimensions of the framed picture are therefore $(12+2x)$ in by $(8+2x)$ in.",
          parts: [
            { label: "a", prompt: "The framed picture must have a total area of $140$ in$^2$. Show that this leads to the equation $x^2+10x-11=0$.", marks: 2 },
            { label: "b", prompt: "Solve $x^2+10x-11=0$ by factoring.", marks: 2 },
            { label: "c", prompt: "State the border width and the outer dimensions, rejecting the other solution.", marks: 2 },
            { label: "d", prompt: "A second order requires a total area of $252$ in$^2$. Write the equation in the form $x^2+10x+c=0$, solve it by factoring, and state the border width.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Smaller root", answer: -11 },
              { label: "(b) Larger root", answer: 1 },
              { label: "(d) Border width for 252 in$^2$", answer: 3, unit: "in" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "Area $=$ length $\\times$ width." },
              { kind: "theorem", name: "Zero product property", statement: "If $AB=0$, then $A=0$ or $B=0$." },
              { kind: "principle", name: "Contextual domain", statement: "A border width is a length, so only positive solutions are valid." },
            ],
            steps: [
              { part: "a", reasoning: "Set the product of the outer dimensions equal to the area and expand.", working: "(12+2x)(8+2x)=140 \\implies 4x^2+40x+96=140", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Move all terms to one side, then divide by $4$.", working: "4x^2+40x-44=0 \\implies x^2+10x-11=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find two numbers with product $-11$ and sum $10$: $11$ and $-1$.", working: "(x+11)(x-1)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply the zero product property.", working: "x=-11 \\text{ or } x=1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A width cannot be negative, so reject $x=-11$ and keep $x=1$.", working: "x=1 \\text{ in}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Compute the outer dimensions and verify the area.", working: "14 \\times 10 = 140", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set up the new area equation and simplify by dividing by $4$.", working: "(12+2x)(8+2x)=252 \\implies 4x^2+40x-156=0 \\implies x^2+10x-39=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Find two numbers with product $-39$ and sum $10$: $13$ and $-3$.", working: "(x+13)(x-3)=0 \\implies x=-13 \\text{ or } x=3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reject the negative root. Check: $18 \\times 14 = 252$.", working: "x=3 \\text{ in}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x^2+10x-11=0$. (b) $x=-11$ or $x=1$. (c) Border $1$ in; outer size $14$ in by $10$ in. (d) $x^2+10x-39=0$, border $3$ in (outer size $18$ in by $14$ in).",
            commonErrors: [
              "Expanding $(12+2x)(8+2x)$ as $96+4x^2$ and missing the middle term.",
              "Forgetting to subtract the area $140$ to reach zero form before factoring.",
              "Reporting both roots as valid widths.",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-u4-formula-discriminant",
      title: "Quadratic formula and discriminant",
      skill: "Apply the quadratic formula accurately and use the discriminant to classify real and complex roots.",
      lesson: {
        sections: [
          {
            heading: "Identify the coefficients first",
            body: "Write the equation in the form $ax^2+bx+c=0$, then identify $a$, $b$, and $c$, including their signs. Substitute into $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$. Parentheses around negative coefficients help prevent sign errors. Simplify the radical and fraction only after substitution.",
          },
          {
            heading: "Read the discriminant",
            body: "The discriminant is $D=b^2-4ac$. If $D>0$, there are two distinct real roots; if $D=0$, one repeated real root; if $D<0$, two nonreal complex conjugate roots and no real roots. The discriminant predicts the nature and number of roots before the equation is solved.",
          },
          {
            heading: "Check and interpret roots",
            body: "The $\\pm$ symbol creates two candidate roots when the radicand is positive or negative (over the complex numbers). Keep the denominator $2a$ intact across the entire numerator. A result of $D<0$ means the graph has no real $x$-intercepts, not that the equation has no solutions in the complex number system.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ for $ax^2+bx+c=0$, $a\\ne0$." },
          { name: "Discriminant", statement: "$D=b^2-4ac$: $D>0$ gives two real roots; $D=0$ gives one repeated real root; $D<0$ gives two nonreal complex roots." },
        ],
        workedExample: {
          problem: "Use the quadratic formula to solve $x^2+2x-7=0$.",
          solution: "Here $a=1$, $b=2$, and $c=-7$. The discriminant is $D=2^2-4(1)(-7)=32$. Thus $x=\\frac{-2\\pm\\sqrt{32}}{2}=\\frac{-2\\pm4\\sqrt2}{2}=-1\\pm2\\sqrt2$. The two roots are $-1+2\\sqrt2$ and $-1-2\\sqrt2$.",
        },
      },
      questions: [
        {
          id: "alg2-u4-disc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Without solving, classify the roots of $2x^2-4x+5=0$ over the real numbers.",
          response: { type: "mcq", choices: [
            { id: "a", text: "No real roots; two nonreal complex roots" },
            { id: "b", text: "No roots in any number system" },
            { id: "c", text: "Two distinct real roots" },
            { id: "d", text: "One repeated real root" },
          ], aorrectChoiceId: "c" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discriminant", statement: "$D=b^2-4ac$." },
              { kind: "theorem", name: "Discriminant classification", statement: "$D<0$ means no real roots and two nonreal complex conjugate roots." },
            ],
            steps: [
              { reasoning: "Identify the coefficients and calculate the discriminant.", working: "a=2,\\;b=-4,\\;c=5;\\qquad D=(-4)^2-4(2)(5)=16-40=-24", marks: 1, markCode: "M" },
              { reasoning: "Since the discriminant is negative, the equation has no real roots, although it does have two complex roots.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** No real roots; two nonreal complex roots.",
            commonErrors: ["Calling the equation rootless in every number system.", "Treating a negative discriminant as one repeated root."],
          },
        },
        {
          id: "alg2-u4-disc-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Use the quadratic formula to solve $3x^2+2x-1=0$. Enter both roots in either order.",
          response: { type: "numeric", parts: [{ label: "Root 1", answer: -1 }, { label: "Root 2", answer: 1 / 3 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$." },
              { kind: "property", name: "Discriminant", statement: "The radicand $b^2-4ac$ determines whether the formula has real roots." },
            ],
            steps: [
              { reasoning: "Identify the coefficients and substitute them into the discriminant.", working: "a=3,\\;b=2,\\;c=-1;\\qquad D=2^2-4(3)(-1)=16", marks: 1, markCode: "M" },
              { reasoning: "Substitute all coefficients, keeping the full numerator over $2a$.", working: "x=\\frac{-2\\pm\\sqrt{16}}{6}=\\frac{-2\\pm4}{6}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the plus case.", working: "x=\\frac{-2+4}{6}=\\frac13", marks: 1, markCode: "A" },
              { reasoning: "Evaluate the minus case and state both roots.", working: "x=\\frac{-2-4}{6}=-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-1$ and $x=\\frac13$.",
            commonErrors: ["Using $2$ rather than $6$ as the denominator.", "Omitting one of the values generated by $\\pm$."],
          },
        },
        {
          id: "alg2-u4-disc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the equation $x^2+kx+9=0$, find every real value of $k$ for which the equation has exactly one real solution. Justify your answer using the discriminant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discriminant", statement: "For $ax^2+bx+c=0$, $D=b^2-4ac$." },
              { kind: "theorem", name: "Repeated-root condition", statement: "A quadratic has exactly one real solution when its discriminant is zero." },
            ],
            steps: [
              { reasoning: "Identify the coefficients in terms of $k$ and write the discriminant.", working: "a=1,\\;b=k,\\;c=9;\\qquad D=k^2-36", marks: 1, markCode: "M" },
              { reasoning: "Set the discriminant equal to zero for exactly one real root.", working: "k^2-36=0", marks: 1, markCode: "M" },
              { reasoning: "Factor the difference of squares and solve both linear equations.", working: "(k-6)(k+6)=0 \\implies k=6 \\text{ or } k=-6", marks: 1, markCode: "A" },
              { reasoning: "Confirm that each value makes the discriminant zero and therefore gives a repeated real root.", working: "D=0 \\text{ for } k=\\pm6", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$k=-6$ or $k=6$.",
            commonErrors: ["Setting $k^2-36>0$; that gives two real roots rather than exactly one."],
            examinerNote: "Both parameter values and the repeated-root justification are required for full credit.",
          },
        },
        {
          id: "alg2-u4-disc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A gardener has $28$ m of fencing to enclose a rectangular bed. If one side has length $x$ m, the adjacent side has length $(14-x)$ m, so the area of the bed is $A=x(14-x)$ square meters.",
          parts: [
            { label: "a", prompt: "The gardener wants an area of $40$ m$^2$. Write the equation in the form $x^2-14x+c=0$ and find its discriminant.", marks: 2 },
            { label: "b", prompt: "Use the quadratic formula to find both possible values of $x$.", marks: 2 },
            { label: "c", prompt: "Show using the discriminant that an area of $50$ m$^2$ cannot be enclosed, and state the discriminant.", marks: 2 },
            { label: "d", prompt: "Find the value of $k$ for which $x^2-14x+k=0$ has exactly one real solution, and interpret $k$ and the solution in this context.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Discriminant for area 40", answer: 36 },
              { label: "(b) Smaller side length", answer: 4, unit: "m" },
              { label: "(b) Larger side length", answer: 10, unit: "m" },
              { label: "(c) Discriminant for area 50", answer: -4 },
              { label: "(d) Value of $k$", answer: 49 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic formula", statement: "$x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ for $ax^2+bx+c=0$." },
              { kind: "theorem", name: "Discriminant classification", statement: "$D=b^2-4ac$: $D>0$ gives two real roots, $D=0$ one repeated real root, $D<0$ no real roots." },
              { kind: "principle", name: "Contextual domain", statement: "A real rectangle needs a real, positive side length." },
            ],
            steps: [
              { part: "a", reasoning: "Set $x(14-x)=40$ and rearrange to zero form with a positive leading coefficient.", working: "14x-x^2=40 \\implies x^2-14x+40=0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate the discriminant.", working: "D=(-14)^2-4(1)(40)=196-160=36", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into the quadratic formula.", working: "x=\\frac{14\\pm\\sqrt{36}}{2}=\\frac{14\\pm6}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate both values; they are the two side lengths of the same $4$ m by $10$ m rectangle.", working: "x=10 \\text{ or } x=4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set up $x^2-14x+50=0$ and compute the discriminant.", working: "D=196-4(50)=-4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Since $D<0$ there is no real $x$, so no rectangle has area $50$ m$^2$ with this perimeter.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Set the discriminant equal to zero for exactly one real solution.", working: "196-4k=0 \\implies k=49", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The repeated solution is $x=\\frac{14}{2}=7$.", working: "x=7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The area $49$ m$^2$ is the greatest possible, attained by a square of side $7$ m; any larger area (such as $50$) has $D<0$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x^2-14x+40=0$, $D=36$. (b) $x=4$ or $x=10$. (c) $D=-4<0$: impossible. (d) $k=49$; the maximum area is $49$ m$^2$ from a $7$ m by $7$ m square.",
            commonErrors: [
              "Writing $D=b^2+4ac$ or squaring $-14$ as $-196$.",
              "Believing that $D<0$ means the equation has no solutions in any number system rather than no real (physical) solution.",
              "Treating the two roots $4$ and $10$ as different rectangles.",
            ],
          },
        },
      ],
    },
  ],
};
