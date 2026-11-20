import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edm10-u2-lesson-2-2",
  code: "2-2",
  title: "Equations",
  goal: "I CAN solve quadratic equations by factorising, the formula and completing the square, and solve simultaneous linear equations.",
  standards: ["4MA1 2.7", "4MA1 2.8", "4MA1 2.9", "4MA1 2.10"],
  vocabulary: [
    { term: "Quadratic equation", definition: "An equation that can be written as $ax^2+bx+c=0$ with $a\\ne0$." },
    { term: "Root", definition: "A value of the variable that satisfies an equation." },
    { term: "Quadratic formula", definition: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$, which solves $ax^2+bx+c=0$." },
    { term: "Completing the square", definition: "Rewriting $x^2+bx+c$ as $(x+\\frac b2)^2+c-\\frac{b^2}{4}$." },
    { term: "Simultaneous equations", definition: "Two or more equations that must be true at the same time for the same unknowns." },
    { term: "Elimination", definition: "Adding or subtracting equations to remove one unknown." },
  ],
  concepts: [
    {
      id: "edm10-u2-quadratic-equations",
      title: "Solving quadratic equations",
      skill: "Solve quadratics by factorising, using the formula and completing the square.",
      lesson: {
        sections: [
          {
            heading: "Factorising",
            body: "Rearrange to $ax^2+bx+c=0$, factorise, and set each bracket to zero. For $x^2-5x+6=0$: $(x-2)(x-3)=0$, so $x=2$ or $x=3$.",
          },
          {
            heading: "The quadratic formula",
            body: "When a quadratic does not factorise, use $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$. Write the substitution with brackets, especially when $b$ is negative. Give answers to the accuracy asked for (usually 3 significant figures).",
          },
          {
            heading: "Completing the square",
            body: "$x^2+bx+c=(x+\\frac b2)^2+c-\\frac{b^2}{4}$. For $x^2+6x-4=0$: $(x+3)^2-13=0$, so $x=-3\\pm\\sqrt{13}$.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic formula", statement: "$x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$" },
          { name: "Completed square", statement: "$x^2+bx+c=\\left(x+\\frac b2\\right)^2+c-\\frac{b^2}{4}$" },
        ],
        workedExample: {
          problem: "Solve $x^2-5x-3=0$, giving answers to 3 significant figures.",
          solution: "$a=1,b=-5,c=-3$: $x=\\frac{5\\pm\\sqrt{25+12}}{2}=\\frac{5\\pm\\sqrt{37}}{2}$. $\\sqrt{37}=6.0828$, so $x=5.54$ or $x=-0.541$.",
        },
      },
      questions: [
        {
          id: "edm10-u2-quadratic-equations-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 3,
          stem: "Solve $x^2-5x+6=0$. Enter both solutions.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 2 },
              { label: "x", answer: 3 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Zero-product property", statement: "If $AB=0$ then $A=0$ or $B=0$." },
            ],
            steps: [
              { reasoning: "Find numbers with product 6 and sum $-5$: $-2$ and $-3$.", working: "(x-2)(x-3)=0", marks: 1, markCode: "M" },
              { reasoning: "Set each factor to zero.", working: "x-2=0\\ \\text{or}\\ x-3=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "x=2,\\ x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=2$ or $x=3$",
            commonErrors: ["Giving $x=-2$ and $x=-3$ by copying the signs from the brackets."],
          },
        },
        {
          id: "edm10-u2-quadratic-equations-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 4,
          stem: "Solve $2x^2+3x-5=0$. Enter both solutions.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 1 },
              { label: "x", answer: -2.5 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Zero-product property", statement: "If $AB=0$ then $A=0$ or $B=0$." },
            ],
            steps: [
              { reasoning: "$ac=-10$; the numbers $5$ and $-2$ give $2x^2+5x-2x-5$.", working: "x(2x+5)-1(2x+5)", marks: 1, markCode: "M" },
              { reasoning: "Take out the common bracket.", working: "(2x+5)(x-1)=0", marks: 1, markCode: "A" },
              { reasoning: "Set each factor to zero.", working: "2x+5=0\\ \\text{or}\\ x-1=0", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "x=-\\tfrac52,\\ x=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$ or $x=-2.5$",
            commonErrors: ["Giving $x=\\frac52$ instead of $-\\frac52$.", "Failing to divide by 2."],
          },
        },
        {
          id: "edm10-u2-quadratic-equations-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 3,
          stem: "Solve $x^2-5x-3=0$. Give your solutions correct to 3 significant figures. Enter both solutions.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 5.54, tolerance: 0.005 },
              { label: "x", answer: -0.541, tolerance: 0.0005 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$." },
            ],
            steps: [
              { reasoning: "Substitute $a=1$, $b=-5$, $c=-3$.", working: "x=\\frac{5\\pm\\sqrt{(-5)^2-4(1)(-3)}}{2}=\\frac{5\\pm\\sqrt{37}}{2}", marks: 1, markCode: "M" },
              { reasoning: "$\\sqrt{37}=6.0828\\ldots$ so $x=\\frac{5+6.0828}{2}=5.5414$.", working: "x=5.54", marks: 1, markCode: "A" },
              { reasoning: "The other root is $\\frac{5-6.0828}{2}=-0.5414$.", working: "x=-0.541", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5.54$ or $x=-0.541$",
            commonErrors: ["Using $-5$ instead of $5$ for $-b$.", "Writing $b^2$ as $-25$.", "Dividing only part of the numerator by 2."],
            examinerNote: "Award M1 for correct substitution into the formula even with an arithmetic slip.",
          },
        },
        {
          id: "edm10-u2-quadratic-equations-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A rectangular garden has a length that is 4 m more than its width. The width is $x$ metres and the area is $60$ m$^2$.",
          parts: [
            { label: "a", prompt: "Show that $x^2+4x-60=0$.", marks: 2 },
            { label: "b", prompt: "Solve $x^2+4x-60=0$ and hence state the width of the garden.", marks: 3 },
            { label: "c", prompt: "Write $x^2+4x-60$ in the form $(x+p)^2+q$.", marks: 2 },
            { label: "d", prompt: "A second garden has a width $y$ m and length $(y+4)$ m, with area $50$ m$^2$. Work out the width $y$ correct to 3 significant figures.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) width (m)", answer: 6 },
              { label: "(c) p", answer: 2 },
              { label: "(c) q", answer: -64 },
              { label: "(d) y (m)", answer: 5.35, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Area of a rectangle", statement: "Area $=$ length $\\times$ width." },
              { kind: "formula", name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$." },
            ],
            steps: [
              { part: "a", reasoning: "The length is $x+4$, so the area is $x(x+4)=60$.", working: "x(x+4)=60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand and rearrange to equal zero.", working: "x^2+4x-60=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Numbers with product $-60$ and sum 4: $10$ and $-6$.", working: "(x+10)(x-6)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "x=-10\\ \\text{or}\\ x=6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A width cannot be negative, so the width is 6 m (length 10 m).", working: "x=6", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Halve the coefficient of $x$.", working: "(x+2)^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract the extra 4 from the constant: $-60-4=-64$.", working: "(x+2)^2-64", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$y^2+4y-50=0$. Use the formula with $a=1,b=4,c=-50$.", working: "y=\\frac{-4\\pm\\sqrt{16+200}}{2}=\\frac{-4\\pm\\sqrt{216}}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$\\sqrt{216}=14.6969\\ldots$ so the positive root is $\\frac{-4+14.6969}{2}=5.348$.", working: "y=5.348\\ldots", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Round to 3 s.f. and reject the negative root.", working: "y=5.35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) width $6$ m (c) $(x+2)^2-64$ (d) $5.35$ m",
            commonErrors: ["Not rejecting the negative solution.", "Writing $(x+4)^2-64$ in part (c).", "Using $y(y+4)=50$ but writing $c=+50$."],
          },
        },
      ],
    },
    {
      id: "edm10-u2-simultaneous-linear",
      title: "Simultaneous linear equations",
      skill: "Solve pairs of linear equations by elimination or substitution, including in context.",
      lesson: {
        sections: [
          {
            heading: "Elimination",
            body: "Multiply one or both equations so that the coefficients of one unknown match. Subtract the equations if the signs are the same, add them if the signs are opposite. Then solve for one unknown and substitute back.",
          },
          {
            heading: "Substitution",
            body: "Make one unknown the subject of one equation, then substitute into the other. This is useful when one equation has a coefficient of 1.",
          },
          {
            heading: "Forming equations from context",
            body: "Define two unknowns, translate each statement into an equation, solve, then give the answer in context with units. Check the solution in both original equations.",
          },
        ],
        keyFormulas: [
          { name: "Elimination", statement: "Match coefficients, then add or subtract." },
        ],
        workedExample: {
          problem: "Solve $3x+2y=16$ and $5x-2y=8$.",
          solution: "Add the equations: $8x=24$, so $x=3$. Substitute: $9+2y=16$, so $y=3.5$. Check: $15-7=8$. ✓.",
        },
      },
      questions: [
        {
          id: "edm10-u2-simultaneous-linear-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 3,
          stem: "Solve the simultaneous equations $3x+2y=16$ and $5x-2y=8$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 3 },
              { label: "y", answer: 3.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Adding equations with opposite coefficients of $y$ removes $y$." },
            ],
            steps: [
              { reasoning: "The $y$ coefficients are $+2$ and $-2$, so add.", working: "8x=24", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x=3", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $3x+2y=16$: $9+2y=16$.", working: "y=3.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3,\\ y=3.5$",
            commonErrors: ["Subtracting instead of adding, which does not eliminate $y$."],
          },
        },
        {
          id: "edm10-u2-simultaneous-linear-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 4,
          stem: "Solve the simultaneous equations $2x+3y=7$ and $5x-2y=27$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 5 },
              { label: "y", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Multiply equations to match coefficients, then add or subtract." },
            ],
            steps: [
              { reasoning: "Multiply the first by 2 and the second by 3 to make the $y$ coefficients $6$ and $-6$.", working: "4x+6y=14,\\quad 15x-6y=81", marks: 1, markCode: "M" },
              { reasoning: "Add the equations and solve for $x$.", working: "19x=95\\Rightarrow x=5", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $2x+3y=7$: $10+3y=7$.", working: "y=-1", marks: 1, markCode: "M" },
              { reasoning: "Check in the second equation: $25+2=27$.", working: "5(5)-2(-1)=27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5,\\ y=-1$",
            commonErrors: ["Multiplying only one side of an equation.", "Sign errors when subtracting."],
          },
        },
        {
          id: "edm10-u2-simultaneous-linear-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Solve $4x+3y=13$ and $3x-5y=-12$.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 1 },
              { label: "y", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Elimination", statement: "Scale the equations so one unknown has equal coefficients." },
            ],
            steps: [
              { reasoning: "Multiply the first by 5 and the second by 3 to match the $y$ coefficients ($15y$ and $-15y$).", working: "20x+15y=65,\\quad 9x-15y=-36", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "29x=29", marks: 1, markCode: "A" },
              { reasoning: "Solve for $x$.", working: "x=1", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $4x+3y=13$: $4+3y=13$.", working: "y=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1,\\ y=3$",
            commonErrors: ["Adding when the signs are the same, or arithmetic slips with the multipliers."],
          },
        },
        {
          id: "edm10-u2-simultaneous-linear-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "At a cafe, 3 coffees and 2 teas cost £13.10. 5 coffees and 4 teas cost £22.50.",
          parts: [
            { label: "a", prompt: "Write down two simultaneous equations to represent this information, using $c$ for the price of a coffee and $t$ for the price of a tea, both in pounds.", marks: 2 },
            { label: "b", prompt: "Solve your equations to find the price of a coffee and the price of a tea.", marks: 4 },
            { label: "c", prompt: "Work out the cost of 4 coffees and 3 teas.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) coffee (£)", answer: 3.7 },
              { label: "(b) tea (£)", answer: 1 },
              { label: "(c) cost (£)", answer: 17.8 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Forming equations", statement: "Total cost $=$ (number of coffees)$\\times c$ + (number of teas)$\\times t$." },
            ],
            steps: [
              { part: "a", reasoning: "First order.", working: "3c+2t=13.10", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Second order.", working: "5c+4t=22.50", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply the first by 2 to match the $t$ coefficients.", working: "6c+4t=26.20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract the second equation.", working: "c=26.20-22.50=3.70", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into $3c+2t=13.10$: $11.10+2t=13.10$.", working: "2t=2.00", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve.", working: "t=1.00", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the prices found.", working: "4(3.70)+3(1.00)=14.80+3.00", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add.", working: "\\text{£}17.80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3c+2t=13.10$, $5c+4t=22.50$ (b) coffee £3.70, tea £1.00 (c) £17.80",
            commonErrors: ["Interchanging the prices.", "Not checking the second equation: $18.50+4.00=22.50$ ✓."],
          },
        },
      ],
    },
  ],
};
