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
              { id: "a", text: "$x=12$" },
              { id: "b", text: "$x=2$" },
              { id: "c", text: "$x=-12$" },
              { id: "d", text: "$x=6$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$x>2$" },
              { id: "b", text: "$x>5$" },
              { id: "c", text: "$x<2$" },
              { id: "d", text: "$x>4$" },
            ],
            correctChoiceId: "a",
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
