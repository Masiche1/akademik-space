import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ciem-u2-lesson-2-2",
  code: "2-2",
  title: "Equations and Inequalities",
  goal: "I CAN solve linear, quadratic and simultaneous equations, and solve and represent linear inequalities.",
  standards: ["0580 2.3", "0580 2.4"],
  vocabulary: [
    { term: "Linear equation", definition: "An equation in which the highest power of the variable is 1, e.g. $3x-7=2x+5$." },
    { term: "Simultaneous equations", definition: "A pair of equations in the same two variables that must be satisfied at the same time." },
    { term: "Quadratic equation", definition: "An equation of the form $ax^2+bx+c=0$ with $a\\ne0$, solved by factorising or the quadratic formula." },
    { term: "Inequality", definition: "A relationship showing that one expression is greater than, less than or not equal to another, e.g. $2x+3>7$." },
    { term: "Boundary value", definition: "The value at which an inequality changes from true to false; for $x>2$ the boundary is 2, shown open on a number line." },
    { term: "Elimination", definition: "A method for solving simultaneous equations by adding or subtracting equations to remove one variable." },
  ],
  concepts: [
    {
      id: "ciem-u2-solving-equations",
      title: "Solving linear, quadratic and simultaneous equations",
      skill: "Solve equations by balancing, factorising, using the quadratic formula, and eliminating variables in simultaneous equations.",
      lesson: {
        sections: [
          {
            heading: "Linear equations",
            body: "Keep the equation balanced: whatever you do to one side, do to the other. Collect variable terms on one side and constants on the other.\n\n$3x-7=2x+5 \\Rightarrow x=12$. Always check by substituting back.",
          },
          {
            heading: "Quadratic equations",
            body: "Try factorising first. If that fails, use the quadratic formula:\n\n$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$\n\nFor $2x^2+3x-2=0$: $x=\\frac{-3\\pm\\sqrt{9+16}}{4}=\\frac{-3\\pm5}{4}$, giving $x=\\frac{1}{2}$ or $x=-2$.",
          },
          {
            heading: "Simultaneous equations",
            body: "Two methods:\n\n- **Substitution**: rearrange one equation for a variable and substitute into the other — best when a coefficient is 1.\n- **Elimination**: scale the equations so one variable has the same coefficient, then add or subtract to remove it.\n\nFor $x+y=7$ and $2x-y=8$: adding gives $3x=15$, so $x=5$ and $y=2$.",
          },
        ],
        keyFormulas: [
          { name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$" },
          { name: "Discriminant", statement: "$b^2-4ac$: positive = two real roots, zero = one repeated root, negative = no real roots." },
        ],
        workedExample: {
          problem: "Solve $x+y=10$ and $x-y=4$ simultaneously.",
          solution: "Add the equations: $2x=14$, so $x=7$. Substitute into $x+y=10$: $y=3$. Check: $7-3=4$ ✓",
        },
      },
      questions: [
        {
          id: "ciem-u2-solving-equations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x-7=2x+5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=-12$" },
              { id: "b", text: "$x=6$" },
              { id: "c", text: "$x=2$" },
              { id: "d", text: "$x=12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle", statement: "The same operation applied to both sides keeps an equation true." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ and add 7 to both sides.", working: "x=5+7=12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x=12$",
            commonErrors: ["Moving $2x$ across without changing its sign, getting $x=2$."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $2(x+3)=x+10$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expanding brackets", statement: "Distribute before collecting like terms." },
            ],
            steps: [
              { reasoning: "Expand the left side and collect $x$ terms.", working: "2x+6=x+10\\Rightarrow x=4", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
            commonErrors: ["Expanding as $2x+3$ instead of $2x+6$."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $x^2+5x+6=0$ using factorisation.",
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
              { reasoning: "Factorise: two numbers multiplying to 6, adding to 5.", working: "(x+2)(x+3)=0", marks: 1, markCode: "M" },
              { reasoning: "Set each factor to zero.", working: "x=-2,\\ x=-3", marks: 1, markCode: "M" },
              { reasoning: "State both roots.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2$ or $x=-3$",
            commonErrors: ["Sign error giving positive roots."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Three consecutive integers are added together and the total is 48.",
          parts: [
            { label: "a", prompt: "Let $n$ be the middle integer. Write down an expression for the sum of the three integers.", marks: 2 },
            { label: "b", prompt: "Form an equation and solve it to find $n$.", marks: 3 },
            { label: "c", prompt: "Write down the three integers.", marks: 2 },
            { label: "d", prompt: "Find the sum of the squares of the three integers.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) n", answer: 16 },
              { label: "(d) sum of squares", answer: 770 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Consecutive integers", statement: "Integers differing by 1; if the middle is $n$ the others are $n-1$ and $n+1$." },
            ],
            steps: [
              { part: "a", reasoning: "Write the three integers in terms of $n$.", working: "(n-1)+n+(n+1)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "=3n", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set the expression equal to 48.", working: "3n=48", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 3.", working: "n=16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The integers are $n-1$, $n$, $n+1$.", working: "15,\\ 16,\\ 17", marks: 1, markCode: "M" },
              { part: "c", reasoning: "List all three.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Square each integer and add.", working: "15^2+16^2+17^2=225+256+289", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compute the total.", working: "=770", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3n$ (b) $n=16$ (c) $15, 16, 17$ (d) $770$",
            commonErrors: ["Writing the sum as $3n+3$ by misplacing the middle term.", "In (d) adding the integers again instead of their squares."],
            examinerNote: "Part (a) accepts any correct expression such as $(n-1)+n+(n+1)$ before simplifying.",
          },
        },
        {
          id: "ciem-u2-solving-equations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $5x+2=3x+10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4$" },
              { id: "b", text: "$x=2$" },
              { id: "c", text: "$x=3$" },
              { id: "d", text: "$x=6$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear equations", statement: "Collect like terms on each side, then isolate $x$." },
            ],
            steps: [
              { reasoning: "Subtract $3x$ and 2 from both sides: $2x=8$, so $x=4$.", working: "5x-3x=10-2\\Rightarrow 2x=8\\Rightarrow x=4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $x=4$",
            commonErrors: ["Moving terms without changing signs: $5x+3x=10-2$."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $\\frac{x}{3}=6$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=9$" },
              { id: "b", text: "$x=24$" },
              { id: "c", text: "$x=2$" },
              { id: "d", text: "$x=18$" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear equations", statement: "Multiply or divide both sides by the same number to isolate $x$." },
            ],
            steps: [
              { reasoning: "Multiply both sides by 3.", working: "x=6\\times3=18", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $x=18$",
            commonErrors: ["Dividing by 3 instead of multiplying, giving $x=2$."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve $x^2=49$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=\\pm7$" },
              { id: "b", text: "$x=\\pm49$" },
              { id: "c", text: "$x=7$ only" },
              { id: "d", text: "$x=24.5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Square roots", statement: "If $x^2=a$ then $x=\\pm\\sqrt{a}$ — both positive and negative roots." },
            ],
            steps: [
              { reasoning: "Take the square root of both sides, remembering both signs.", working: "x=\\pm\\sqrt{49}=\\pm7", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $x=\\pm7$",
            commonErrors: ["Giving only $x=7$ and missing the negative root."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $4x-5=3x+8$. Enter the value of $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear equations", statement: "Collect like terms on each side, then isolate $x$." },
            ],
            steps: [
              { reasoning: "Subtract $3x$ from both sides.", working: "x-5=8", marks: 1, markCode: "M" },
              { reasoning: "Add 5 to both sides.", working: "x=13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=13$",
            commonErrors: ["Sign error: $x-5=8$ becoming $x=3$."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $\\frac{2x+1}{3}=5$. Enter the value of $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear equations", statement: "Clear fractions first by multiplying both sides by the denominator." },
            ],
            steps: [
              { reasoning: "Multiply both sides by 3.", working: "2x+1=15", marks: 1, markCode: "M" },
              { reasoning: "Subtract 1 from both sides.", working: "2x=14", marks: 1, markCode: "M" },
              { reasoning: "Divide by 2.", working: "x=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7$",
            commonErrors: ["Multiplying only the left side by 3.", "Writing $2x+1=8$ by adding instead of multiplying."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $x^2-9=0$. Enter the smaller root and the larger root.",
          response: { type: "numeric", parts: [{ label: "Smaller root", answer: -3 }, { label: "Larger root", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Square roots", statement: "If $x^2=a$ then $x=\\pm\\sqrt{a}$." },
            ],
            steps: [
              { reasoning: "Rearrange to $x^2=9$ and take square roots.", working: "x=\\pm3", marks: 1, markCode: "M" },
              { reasoning: "State both roots.", working: "x=-3\\ \\text{and}\\ x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-3$ or $x=3$",
            commonErrors: ["Giving only the positive root.", "Writing $x=\\pm\\sqrt{9}=\\pm4.5$."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A positive number multiplied by the number that is $3$ more than it gives $40$.",
          parts: [
            { label: "a", prompt: "Let the number be $n$. Form an equation in $n$.", marks: 2 },
            { label: "b", prompt: "Factorise your equation.", marks: 2 },
            { label: "c", prompt: "Solve the equation.", marks: 3 },
            { label: "d", prompt: "State the value of the number.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Forming equations", statement: "Translate the words into an algebraic equation before solving." },
            ],
            steps: [
              { part: "a", reasoning: "The number that is 3 more is $n+3$; their product is 40.", working: "n(n+3)=40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand and rearrange to standard form.", working: "n^2+3n-40=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise: need two numbers with product $-40$ and sum $3$.", working: "(n+8)(n-5)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Confirm the expansion.", working: "n^2+3n-40", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set each factor to zero.", working: "n=-8\\ \\text{or}\\ n=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both solutions.", working: "n=-8,\\ n=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Confirm both satisfy the equation.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Reject $n=-8$ since the number is positive.", working: "n=5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the number.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $n^2+3n-40=0$ (b) $(n+8)(n-5)=0$ (c) $n=-8$ or $n=5$ (d) $5$",
            commonErrors: ["In (a) writing $n+3n=40$ instead of $n(n+3)=40$.", "In (d) accepting $n=-8$, which is not positive."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the bracket in $2(x+3)=x+10$ must be expanded before the equation can be solved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear equations", statement: "Brackets must be expanded (or the equation divided) before collecting like terms." },
            ],
            steps: [
              { reasoning: "The left side is a product $2\\times(x+3)$, not a sum of separate terms yet.", marks: 1, markCode: "M" },
              { reasoning: "Expanding gives $2x+6$, which can then be combined with $x$ terms on the right.", working: "2x+6=x+10", marks: 1, markCode: "M" },
              { reasoning: "Only after collecting like terms can $x$ be isolated.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Expanding gives $2x+6=x+10$, hence $x=4$.",
            commonErrors: ["Dividing only part of the bracket by 2."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $\\frac{3x-1}{2}=x+3$, showing all steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear equations", statement: "Clear the fraction by multiplying both sides by the denominator." },
            ],
            steps: [
              { reasoning: "Multiply both sides by 2.", working: "3x-1=2(x+3)", marks: 1, markCode: "M" },
              { reasoning: "Expand the right side.", working: "3x-1=2x+6", marks: 1, markCode: "M" },
              { reasoning: "Subtract $2x$ and add 1.", working: "x=7", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7$",
            commonErrors: ["Multiplying only the left side by 2.", "Expanding $2(x+3)$ as $2x+3$."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The perimeter of a rectangle is $34$ cm and its length is $3$ cm more than its width.",
          parts: [
            { label: "a", prompt: "Let the width be $w$ cm. Write down two equations involving $w$.", marks: 2 },
            { label: "b", prompt: "Form a single equation in $w$ and solve it.", marks: 2 },
            { label: "c", prompt: "State the length and width of the rectangle.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Forming equations", statement: "Perimeter $=2(\\text{length}+\\text{width})$; express length in terms of width." },
            ],
            steps: [
              { part: "a", reasoning: "Length is $w+3$; perimeter equation.", working: "2(w+(w+3))=34", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the length relation.", working: "\\text{length}=w+3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Simplify and solve.", working: "2(2w+3)=34\\Rightarrow 4w+6=34\\Rightarrow w=7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Confirm the solution.", working: "w=7", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Length = $7+3=10$; state both dimensions.", working: "7\\text{ cm and }10\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2(w+(w+3))=34$, length $=w+3$ (b) $w=7$ (c) width $7$ cm, length $10$ cm",
            commonErrors: ["Writing perimeter as $w+(w+3)=34$ without the factor 2.", "Solving for length first and forgetting to convert back to width."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which value of $x$ satisfies $3x-2=2x+5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "9" },
              { id: "c", text: "5" },
              { id: "d", text: "7" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear equations", statement: "Collect like terms, then isolate $x$." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ and add 2: $x=7$.", working: "3x-2x=5+2\\Rightarrow x=7", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $x=7$",
            commonErrors: ["Sign error giving $x=3$."],
          },
        },
        {
          id: "ciem-u2-solving-equations-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve $x^2-5x+4=0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5$ only" },
              { id: "b", text: "$x=2$ or $x=3$" },
              { id: "c", text: "$x=1$ or $x=4$" },
              { id: "d", text: "$x=-1$ or $x=-4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Factorising a quadratic", statement: "Find two numbers that multiply to the constant term and add to the $x$ coefficient." },
            ],
            steps: [
              { reasoning: "$1\\times4=4$ and $1+4=5$, so $(x-1)(x-4)=0$.", working: "x=1\\ \\text{or}\\ x=4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x=1$ or $x=4$",
            commonErrors: ["Sign error writing $(x+1)(x+4)$.", "Choosing $2$ and $3$ — they sum to 5 but multiply to 6, not 4."],
          },
        },
      ],
    },
    {
      id: "ciem-u2-inequalities",
      title: "Linear inequalities",
      skill: "Solve linear inequalities, including compound inequalities, and represent solutions on a number line.",
      lesson: {
        sections: [
          {
            heading: "Solving linear inequalities",
            body: "Solve exactly like a linear equation — with **one critical exception**: multiplying or dividing by a **negative** number reverses the inequality sign.\n\n$2x+3>7 \\Rightarrow 2x>4 \\Rightarrow x>2$.\n\n$-3x<12 \\Rightarrow x>-4$ (the sign flipped when dividing by $-3$).",
          },
          {
            heading: "Compound inequalities",
            body: "For $a \\le mx+c \\le b$, solve both parts and keep the values that satisfy **both**. For $5 \\le 2x+1 \\le 11$: $4 \\le 2x \\le 10$, so $2 \\le x \\le 5$.",
          },
          {
            heading: "Number line representation",
            body: "Open circle ($\\circ$) for strict inequalities $<$ and $>$; closed circle ($\\bullet$) for $\\le$ and $\\ge$. Shade the region containing the solutions.\n\nFor $x>2$: open circle at 2, shading to the right. For $2 \\le x \\le 5$: closed circles at 2 and 5, shading between.",
          },
        ],
        keyFormulas: [
          { name: "Sign reversal", statement: "Multiplying or dividing an inequality by a negative reverses $<$ and $>$ (and $\\le$ and $\\ge$)." },
          { name: "Boundary", statement: "The value where the inequality changes truth; strict inequalities exclude it." },
        ],
        workedExample: {
          problem: "Solve $3x-4 \\le 2x+5$ and state the greatest integer value of $x$.",
          solution: "$3x-4 \\le 2x+5 \\Rightarrow x \\le 9$. The greatest integer value is 9.",
        },
      },
      questions: [
        {
          id: "ciem-u2-inequalities-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $2x+3>7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<2$" },
              { id: "b", text: "$x>2$" },
              { id: "c", text: "$x>5$" },
              { id: "d", text: "$x>4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance principle for inequalities", statement: "Add/subtract freely; multiply/divide by positives freely; negatives reverse the sign." },
            ],
            steps: [
              { reasoning: "Subtract 3 and divide by 2 (positive, so sign unchanged).", working: "2x>4\\Rightarrow x>2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x>2$",
            commonErrors: ["Writing $x<2$ by wrongly reversing the sign for a positive divisor."],
          },
        },
        {
          id: "ciem-u2-inequalities-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-3x<12$. Enter the boundary value of $x$.",
          response: { type: "numeric", parts: [{ label: "Boundary", answer: -4 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Dividing by $-3$ reverses the inequality." },
            ],
            steps: [
              { reasoning: "Divide both sides by $-3$ and reverse the sign.", working: "x>-4", marks: 1, markCode: "M" },
              { reasoning: "State the boundary value.", working: "-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>-4$; boundary $=-4$",
            commonErrors: ["Keeping $x<-4$ by forgetting to reverse the sign."],
          },
        },
        {
          id: "ciem-u2-inequalities-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve the compound inequality $5 \\le 2x+1 \\le 11$. Enter the lower and upper bounds of the solution.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lower bound", answer: 2 },
              { label: "Upper bound", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound inequality", statement: "Solve both parts and keep values satisfying both simultaneously." },
            ],
            steps: [
              { reasoning: "Subtract 1 from all three parts.", working: "4 \\le 2x \\le 10", marks: 1, markCode: "M" },
              { reasoning: "Divide all parts by 2 (positive — no reversal).", working: "2 \\le x \\le 5", marks: 1, markCode: "M" },
              { reasoning: "State both bounds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2 \\le x \\le 5$",
            commonErrors: ["Reversing the signs when dividing — only negatives reverse.", "Solving only one side of the compound inequality."],
          },
        },
        {
          id: "ciem-u2-inequalities-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The value of $x$ satisfies $3x-4 \\le 2x+5$ and $x>-2$.",
          parts: [
            { label: "a", prompt: "Solve $3x-4 \\le 2x+5$.", marks: 3 },
            { label: "b", prompt: "Write down the greatest integer value of $x$ that satisfies both inequalities.", marks: 2 },
            { label: "c", prompt: "Find how many integer values of $x$ satisfy both inequalities.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b)", answer: 9 },
              { label: "(c)", answer: 11 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sign reversal", statement: "Negative divisors reverse inequality signs." },
              { kind: "principle", name: "Simultaneous inequalities", statement: "The solution must satisfy every inequality given." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract $2x$ and add 4 to both sides.", working: "x \\le 9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the inequality.", working: "x \\le 9", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Note the boundary 9 is included ($\\le$).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Combine $x \\le 9$ with $x>-2$: integers run from $-1$ to $9$ inclusive.", working: "-1 \\le x \\le 9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Greatest integer is the upper bound.", working: "9", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Count integers from $-1$ to $9$ inclusive.", working: "9-(-1)+1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compute.", working: "=11", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the count.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "List to verify: $-1,0,1,\\ldots,9$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $x \\le 9$ (b) $9$ (c) $11$ integers",
            commonErrors: ["Including $x=-2$ even though $x>-2$ is strict.", "Counting 10 integers by forgetting the endpoints."],
            examinerNote: "Part (c) requires explicit recognition that both endpoints are included.",
          },
        },
        {
          id: "ciem-u2-inequalities-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $x+5>9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<4$" },
              { id: "b", text: "$x>14$" },
              { id: "c", text: "$x>4$" },
              { id: "d", text: "$x>\\frac{9}{5}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Isolate $x$ as for an equation; the inequality direction is preserved when adding or subtracting." },
            ],
            steps: [
              { reasoning: "Subtract 5 from both sides.", working: "x>9-5=4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x>4$",
            commonErrors: ["Flipping the sign unnecessarily to get $x<4$.", "Dividing both sides by 5 to get $\\frac{9}{5}$."],
          },
        },
        {
          id: "ciem-u2-inequalities-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Solve $4x\\le20$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\ge5$" },
              { id: "b", text: "$x\\le5$" },
              { id: "c", text: "$x\\le80$" },
              { id: "d", text: "$x<5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Dividing by a positive number keeps the inequality direction; $\\le$ includes the boundary." },
            ],
            steps: [
              { reasoning: "Divide both sides by 4 (positive, so direction unchanged).", working: "x\\le5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x\\le5$",
            commonErrors: ["Writing $x<5$ and losing the boundary value.", "Multiplying by 4 instead of dividing."],
          },
        },
        {
          id: "ciem-u2-inequalities-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve $-2x>8$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>-4$" },
              { id: "b", text: "$x<-4$" },
              { id: "c", text: "$x<4$" },
              { id: "d", text: "$x>-16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Multiplying or dividing by a negative number reverses the inequality direction." },
            ],
            steps: [
              { reasoning: "Divide by $-2$, reversing the sign.", working: "x<-4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x<-4$",
            commonErrors: ["Forgetting to reverse the inequality to get $x>-4$.", "Dividing by 2 instead of $-2$."],
          },
        },
        {
          id: "ciem-u2-inequalities-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x-2\\ge7$. Enter the boundary value of $x$.",
          response: { type: "numeric", parts: [{ label: "Boundary", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Isolate $x$ as for an equation; the boundary is where equality holds." },
            ],
            steps: [
              { reasoning: "Add 2 and divide by 3.", working: "3x\\ge9\\Rightarrow x\\ge3", marks: 1, markCode: "M" },
              { reasoning: "State the boundary value.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\ge3$; boundary $x=3$",
            commonErrors: ["Writing $x>3$ instead of $x\\ge3$ — the boundary is included."],
          },
        },
        {
          id: "ciem-u2-inequalities-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $5-2x<11$. Enter the lower bound of the solution set.",
          response: { type: "numeric", parts: [{ label: "Lower bound", answer: -3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Subtracting terms keeps the direction; dividing by a negative reverses it." },
            ],
            steps: [
              { reasoning: "Subtract 5 from both sides.", working: "-2x<6", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-2$ and reverse the inequality.", working: "x>-3", marks: 1, markCode: "M" },
              { reasoning: "State the lower bound.", working: "x>-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>-3$; lower bound $-3$ (not included)",
            commonErrors: ["Forgetting to reverse the sign to get $x<-3$.", "Writing the bound as included when the inequality is strict."],
          },
        },
        {
          id: "ciem-u2-inequalities-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve the compound inequality $2\\le3x-1\\le8$. Enter the lower and upper bounds of the solution.",
          response: { type: "numeric", parts: [{ label: "Lower bound", answer: 1 }, { label: "Upper bound", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Compound inequalities", statement: "Apply the same operation to all three parts; reverse both signs if dividing by a negative." },
            ],
            steps: [
              { reasoning: "Add 1 to all three parts.", working: "3\\le3x\\le9", marks: 1, markCode: "M" },
              { reasoning: "Divide all parts by 3.", working: "1\\le x\\le3", marks: 1, markCode: "M" },
              { reasoning: "State both bounds.", working: "1\\le x\\le3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\le x\\le3$",
            commonErrors: ["Only solving one side of the compound inequality.", "Reversing the signs unnecessarily when dividing by positive 3."],
          },
        },
        {
          id: "ciem-u2-inequalities-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A taxi charges a fixed fare of $\\pounds3$ plus $\\pounds2$ per kilometre. A passenger's fare must be at most $\\pounds15$.",
          parts: [
            { label: "a", prompt: "Let the journey be $d$ km. Form an inequality in $d$.", marks: 2 },
            { label: "b", prompt: "Solve the inequality.", marks: 2 },
            { label: "c", prompt: "Find the greatest whole number of kilometres the passenger can travel.", marks: 2 },
            { label: "d", prompt: "Find the fare for that journey.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Forming inequalities", statement: "Total cost = fixed fare + rate $\\times$ distance; 'at most' means $\\le$." },
            ],
            steps: [
              { part: "a", reasoning: "Fare = $3+2d$; at most 15 means $\\le15$.", working: "3+2d\\le15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the inequality.", working: "2d\\le12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract 3 and divide by 2.", working: "d\\le6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution.", working: "d\\le6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Greatest whole number not exceeding 6.", working: "d=6\\text{ km}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Confirm it satisfies the inequality.", working: "3+2(6)=15\\le15", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compute the fare at $d=6$.", working: "3+2\\times6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "=15", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State with units.", working: "\\pounds15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3+2d\\le15$ (b) $d\\le6$ (c) $6$ km (d) $\\pounds15$",
            commonErrors: ["Using $<$ instead of $\\le$ for 'at most'.", "Forgetting the fixed $\\pounds3$ in the fare."],
          },
        },
        {
          id: "ciem-u2-inequalities-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the inequality sign reverses when solving $-3x<12$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Multiplying or dividing by a negative number reverses the inequality direction." },
            ],
            steps: [
              { reasoning: "Dividing by $-3$ means dividing by a negative number.", marks: 1, markCode: "M" },
              { reasoning: "Test with a value: if $-3x<12$ then $x>-4$; e.g. $x=0$ satisfies the original and $0>-4$.", working: "x>-4", marks: 1, markCode: "M" },
              { reasoning: "Conclude the sign must reverse to keep the inequality true.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x>-4$; the sign reverses because division by a negative flips the order.",
            commonErrors: ["Saying the sign 'always' reverses — it only reverses for negative multipliers."],
          },
        },
        {
          id: "ciem-u2-inequalities-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Solve $4-3x\\ge x-12$, showing all steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Collect $x$ terms on one side and constants on the other." },
            ],
            steps: [
              { reasoning: "Add $3x$ to both sides.", working: "4\\ge4x-12", marks: 1, markCode: "M" },
              { reasoning: "Add 12 to both sides.", working: "16\\ge4x", marks: 1, markCode: "M" },
              { reasoning: "Divide by 4 (positive — direction unchanged).", working: "x\\le4", marks: 1, markCode: "M" },
              { reasoning: "State the solution including the boundary.", working: "x\\le4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\le4$",
            commonErrors: ["Reversing the sign when dividing by positive 4.", "Sign error collecting terms to get $x\\ge4$."],
          },
        },
        {
          id: "ciem-u2-inequalities-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Find all integer values of $x$ that satisfy $-2<2x+1\\le5$.",
          parts: [
            { label: "a", prompt: "Solve the inequality for $x$.", marks: 2 },
            { label: "b", prompt: "List all integer values in the solution set.", marks: 2 },
            { label: "c", prompt: "State how many integer values there are.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Compound inequalities", statement: "Apply the same operations to all three parts; note strict vs inclusive bounds." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract 1 from all parts.", working: "-3<2x\\le4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide all parts by 2.", working: "-1.5<x\\le2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "List integers strictly greater than $-1.5$ and at most $2$.", working: "-1,0,1,2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Confirm each satisfies the original inequality.", working: "2(-1)+1=-1>-2\\ \\text{and}\\ \\le5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Count the listed integers.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $-1.5<x\\le2$ (b) $-1,0,1,2$ (c) $4$ values",
            commonErrors: ["Including $-2$ — it fails the strict lower bound.", "Missing that $2$ is included because the upper bound is $\\le$."],
          },
        },
        {
          id: "ciem-u2-inequalities-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which inequality has the solution $x\\ge3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x>6$" },
              { id: "b", text: "$x+1>4$" },
              { id: "c", text: "$3x<9$" },
              { id: "d", text: "$x-2\\ge1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Isolate $x$ and check whether the boundary is included." },
            ],
            steps: [
              { reasoning: "(a) gives $x\\ge3$; (b) and (c) give strict $x>3$; (d) gives $x<3$.", working: "x-2\\ge1\\Rightarrow x\\ge3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x-2\\ge1$",
            commonErrors: ["Choosing (b) — it gives $x>3$, which excludes the boundary."],
          },
        },
        {
          id: "ciem-u2-inequalities-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Solve $\\frac{x+2}{3}>2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>4$" },
              { id: "b", text: "$x<4$" },
              { id: "c", text: "$x>2$" },
              { id: "d", text: "$x>6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Solving linear inequalities", statement: "Clear the fraction by multiplying both sides by the denominator (positive, so direction unchanged)." },
            ],
            steps: [
              { reasoning: "Multiply both sides by 3, then subtract 2.", working: "x+2>6\\Rightarrow x>4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x>4$",
            commonErrors: ["Multiplying only the left side by 3.", "Subtracting 2 before multiplying, getting $\\frac{x}{3}>0$."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u2-equations-inequalities-notes",
      title: "Equations and inequalities — revision notes",
      summary: "Solving linear, quadratic and simultaneous equations, plus linear and compound inequalities.",
      sections: [
        {
          heading: "Linear equations",
          body: "Balance both sides: collect variable terms on one side, constants on the other, then divide.\n\n$3x-7=2x+5 \\Rightarrow x-7=5 \\Rightarrow x=12$.\n\nAlways substitute back to check — it takes seconds and catches sign slips.",
        },
        {
          heading: "Quadratic equations",
          body: "Try factorising first — it's faster and earns method marks more reliably.\n\n$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$\n\n**Worked example.** $2x^2+3x-2=0$: discriminant $=9-4(2)(-2)=25$, so $x=\\frac{-3\\pm5}{4}$, giving $x=\\frac12$ or $x=-2$.",
        },
        {
          heading: "Simultaneous equations",
          body: "- **Substitution**: best when a coefficient is 1 — rearrange and substitute.\n- **Elimination**: scale equations so one variable matches, then add or subtract.\n\n**Worked example.** $x+y=10$, $x-y=4$. Adding: $2x=14$, $x=7$, then $y=3$.",
        },
        {
          heading: "Inequalities — the sign rule",
          body: "Solve like equations, **except**: multiplying or dividing by a **negative** reverses the sign.\n\n$-3x<12 \\Rightarrow x>-4$ — the flip is mandatory.\n\nCompound form $a\\le mx+c\\le b$: solve all three parts at once; dividing by a positive keeps all signs.",
        },
        {
          heading: "Number lines",
          body: "Open circle for $<$ or $>$ (boundary excluded); closed circle for $\\le$ or $\\ge$ (boundary included). Shade toward the solutions.\n\nFor $2\\le x\\le5$: closed circles at 2 and 5, shading between. For $x>-2$: open circle at $-2$, shading right.",
        },
        {
          heading: "Exam technique",
          body: "- Word problems: define variables, form the equation/inequality, solve, interpret, reject impossible answers.\n- In 'hence' questions, reuse the previous result.\n- When counting integer solutions, write the full set or count carefully: $-1$ to $9$ inclusive is $9-(-1)+1=11$, not 10.",
        },
      ],
    },
  ],
};
