import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "edm11-u3-lesson-3-2",
  code: "3-2",
  title: "Quadratics in Depth",
  goal: "I CAN complete the square to find turning points and solve equations, and solve simultaneous equations where one is linear and one is quadratic or a circle.",
  standards: ["4MA1 2.5", "4MA1 3.6H"],
  vocabulary: [
    { term: "Completing the square", definition: "Writing $x^2 + bx + c$ in the form $(x + p)^2 + q$." },
    { term: "Turning point", definition: "The minimum or maximum point of a quadratic graph. For $y = (x+p)^2 + q$ it is $(-p, q)$." },
    { term: "Line of symmetry", definition: "The vertical line through the turning point of a quadratic graph, $x = -p$." },
    { term: "Substitution", definition: "Replacing one variable in an equation by an expression from another equation." },
    { term: "Circle equation", definition: "A circle with centre $(0, 0)$ and radius $r$ has equation $x^2 + y^2 = r^2$." },
    { term: "Tangent", definition: "A straight line that touches a curve at exactly one point. The tangent to a circle is perpendicular to the radius at that point." },
  ],
  concepts: [
    {
      id: "edm11-u3-complete-square",
      title: "Completing the square and turning points",
      skill: "Write a quadratic in completed-square form and use it to state the turning point and solve the equation.",
      lesson: {
        sections: [
          {
            heading: "The completed-square form",
            body: "For $x^2 + bx + c$, halve the coefficient of $x$: $x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2 + c$. For example $x^2 + 6x + 1 = (x+3)^2 - 9 + 1 = (x+3)^2 - 8$.",
          },
          {
            heading: "When the coefficient of $x^2$ is not 1",
            body: "Take out the common factor of the $x^2$ and $x$ terms first: $2x^2 + 12x + 5 = 2(x^2 + 6x) + 5 = 2[(x+3)^2 - 9] + 5 = 2(x+3)^2 - 13$. Remember to multiply the subtracted square by the factor.",
          },
          {
            heading: "Turning points and solving",
            body: "For $y = a(x+p)^2 + q$ with $a>0$ the minimum point is $(-p, q)$ and the line of symmetry is $x = -p$. To solve $(x+p)^2 = k$ take the square root of both sides, remembering both the positive and negative roots: $x = -p \\pm \\sqrt{k}$.",
          },
        ],
        keyFormulas: [
          { name: "Completed square", statement: "$x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 + c - \\frac{b^2}{4}$" },
          { name: "Turning point", statement: "$y = a(x+p)^2 + q$ has turning point $(-p, q)$" },
        ],
        workedExample: {
          problem: "Write $x^2 - 8x + 3$ in the form $(x + a)^2 + b$ and state the coordinates of the minimum point of $y = x^2 - 8x + 3$.",
          solution: "Half of $-8$ is $-4$, so $x^2 - 8x + 3 = (x-4)^2 - 16 + 3 = (x-4)^2 - 13$. The minimum point is $(4, -13)$.",
        },
      },
      questions: [
        {
          id: "edm11-u3-complete-square-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Write $x^2 + 6x + 1$ in the form $(x + a)^2 + b$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x+3)^2 + 1$" },
              { id: "b", text: "$(x+3)^2 - 8$" },
              { id: "c", text: "$(x+6)^2 - 35$" },
              { id: "d", text: "$(x+3)^2 - 10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2 + bx + c = (x + \\frac b2)^2 + c - \\frac{b^2}{4}$" },
            ],
            steps: [
              { reasoning: "Halve the coefficient of $x$ and square it to compensate.", working: "x^2 + 6x + 1 = (x+3)^2 - 9 + 1", marks: 1, markCode: "M" },
              { reasoning: "Simplify the constant.", working: "(x+3)^2 - 8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(x+3)^2 - 8$",
            commonErrors: ["Forgetting to subtract $9$, leaving $+1$.", "Using $6$ rather than $3$ inside the bracket."],
          },
        },
        {
          id: "edm11-u3-complete-square-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "Write $x^2 - 8x + 3$ in the form $(x + a)^2 + b$.\n\nEnter the values of $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: -4 },
              { label: "$b$", answer: -13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2 + bx + c = (x + \\frac b2)^2 + c - \\frac{b^2}{4}$" },
            ],
            steps: [
              { reasoning: "Half of $-8$ is $-4$, so the bracket is $(x-4)^2$.", working: "(x-4)^2", marks: 1, markCode: "M" },
              { reasoning: "Expanding the bracket gives $+16$, which must be subtracted.", working: "(x-4)^2 - 16 + 3", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "(x-4)^2 - 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a = -4$, $b = -13$",
            commonErrors: ["Writing $(x+4)^2$ with the wrong sign.", "Giving $b = -16 + 3$ incorrectly as $-19$."],
          },
        },
        {
          id: "edm11-u3-complete-square-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Write $2x^2 + 12x + 5$ in the form $a(x + b)^2 + c$.\n\nEnter the values of $a$, $b$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 2 },
              { label: "$b$", answer: 3 },
              { label: "$c$", answer: -13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square with $a \\ne 1$", statement: "$ax^2 + bx + c = a\\left[(x + \\frac{b}{2a})^2 - \\frac{b^2}{4a^2}\\right] + c$" },
            ],
            steps: [
              { reasoning: "Factor $2$ out of the $x^2$ and $x$ terms.", working: "2(x^2 + 6x) + 5", marks: 1, markCode: "M" },
              { reasoning: "Complete the square inside the bracket.", working: "2[(x+3)^2 - 9] + 5", marks: 1, markCode: "M" },
              { reasoning: "Multiply out the $-9$ by the factor $2$.", working: "2(x+3)^2 - 18 + 5", marks: 1, markCode: "M" },
              { reasoning: "Simplify the constant.", working: "2(x+3)^2 - 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2(x+3)^2 - 13$, so $a = 2$, $b = 3$, $c = -13$",
            commonErrors: ["Forgetting to multiply $-9$ by $2$, giving $c = -4$.", "Not factoring out $2$, giving $b = 6$."],
          },
        },
        {
          id: "edm11-u3-complete-square-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A curve has equation $y = x^2 - 6x + 2$.",
          parts: [
            { label: "a", prompt: "Write $x^2 - 6x + 2$ in the form $(x + a)^2 + b$.", marks: 2 },
            { label: "b", prompt: "Write down the coordinates of the turning point of the curve and the equation of its line of symmetry.", marks: 2 },
            { label: "c", prompt: "Use your answer to part (a) to solve $x^2 - 6x + 2 = 0$. Give your solutions correct to $3$ significant figures.", marks: 3 },
            { label: "d", prompt: "The line $y = k$ meets the curve at two distinct points. Write down the range of possible values of $k$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2 - 6x + 2 = (x-3)^2 - 9 + 2$" },
              { kind: "property", name: "Turning point", statement: "$y = (x+p)^2 + q$ has turning point $(-p, q)$, and for a positive $x^2$ coefficient this is a minimum." },
            ],
            steps: [
              { part: "a", reasoning: "Halve $-6$ to get $-3$ and compensate for the extra $9$.", working: "(x-3)^2 - 9 + 2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "(x-3)^2 - 7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Read off the minimum point from the completed-square form.", working: "(3, -7)", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The line of symmetry passes through the turning point.", working: "x = 3", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Rearrange $(x-3)^2 - 7 = 0$.", working: "(x-3)^2 = 7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take both square roots.", working: "x = 3 \\pm \\sqrt{7}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to $3$ significant figures.", working: "x = 5.65 \\text{ or } x = 0.354", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The minimum value of $y$ is $-7$, so a horizontal line cuts the curve twice only if it lies above this.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the range.", working: "k > -7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(x-3)^2 - 7$. (b) $(3, -7)$; $x = 3$. (c) $x = 5.65$ or $x = 0.354$. (d) $k > -7$.",
            commonErrors: ["Giving the turning point as $(-3, -7)$.", "Only giving the positive square root in (c)."],
            examinerNote: "In (d) accept $k > -7$ only; $k \\ge -7$ gives a single point at $k = -7$.",
          },
        },
      ],
    },
    {
      id: "edm11-u3-simultaneous-quadratic",
      title: "Linear and quadratic simultaneous equations",
      skill: "Solve a pair of simultaneous equations where one is linear and the other is a quadratic curve or a circle $x^2 + y^2 = r^2$.",
      lesson: {
        sections: [
          {
            heading: "Substitute the linear into the non-linear",
            body: "Make $y$ (or $x$) the subject of the linear equation, then substitute into the other equation. This produces a quadratic equation in one variable. Use brackets carefully when substituting, for example $(x+3)^2$ not $x^2 + 3^2$.",
          },
          {
            heading: "Find both variables for each solution",
            body: "Solve the quadratic by factorising or the formula. Then substitute each value back into the **linear** equation to find the matching value of the other variable. Present the answers as coordinate pairs; there are usually two.",
          },
          {
            heading: "Circles and tangents",
            body: "A circle centred at the origin has equation $x^2 + y^2 = r^2$. If the quadratic has two solutions the line cuts the circle twice; one repeated solution means the line is a tangent; no real solutions means the line misses the circle.",
          },
        ],
        keyFormulas: [
          { name: "Circle, centre origin", statement: "$x^2 + y^2 = r^2$" },
          { name: "Number of intersections", statement: "Two solutions: cuts. One repeated solution: tangent. None: misses." },
        ],
        workedExample: {
          problem: "Solve $y = x + 3$ and $x^2 + y^2 = 29$.",
          solution: "Substitute: $x^2 + (x+3)^2 = 29$, so $2x^2 + 6x - 20 = 0$, i.e. $x^2 + 3x - 10 = 0$ and $(x+5)(x-2) = 0$. When $x = -5$, $y = -2$. When $x = 2$, $y = 5$.",
        },
      },
      questions: [
        {
          id: "edm11-u3-simultaneous-quadratic-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "Which pair of values of $x$ and $y$ satisfies both $y = x + 2$ and $y = x^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 1,\\ y = 3$" },
              { id: "b", text: "$x = 4,\\ y = 2$" },
              { id: "c", text: "$x = 2,\\ y = 4$" },
              { id: "d", text: "$x = -2,\\ y = 0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Simultaneous solution", statement: "A solution must satisfy both equations at once." },
            ],
            steps: [
              { reasoning: "Test $x = 2$ in both equations.", working: "y = 2 + 2 = 4 \\quad\\text{and}\\quad y = 2^2 = 4", marks: 1, markCode: "M" },
              { reasoning: "The other options each fail one equation: (b) $1^2 = 1 \\ne 3$, (c) $(-2)^2 = 4 \\ne 0$, (d) $4 + 2 = 6 \\ne 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $x = 2$, $y = 4$",
            commonErrors: ["Checking only one of the two equations."],
          },
        },
        {
          id: "edm11-u3-simultaneous-quadratic-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 4,
          stem: "Solve the simultaneous equations\n\n$$y = x + 3$$\n$$x^2 + y^2 = 29$$\n\nEnter the solution with the smaller value of $x$ first.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x_1$", answer: -5 },
              { label: "$y_1$", answer: -2 },
              { label: "$x_2$", answer: 2 },
              { label: "$y_2$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Replace $y$ by $x+3$ to form a quadratic in $x$." },
            ],
            steps: [
              { reasoning: "Substitute $y = x + 3$ into the circle equation.", working: "x^2 + (x+3)^2 = 29", marks: 1, markCode: "M" },
              { reasoning: "Expand and rearrange to a quadratic equal to zero.", working: "2x^2 + 6x - 20 = 0 \\Rightarrow x^2 + 3x - 10 = 0", marks: 1, markCode: "A" },
              { reasoning: "Factorise and solve.", working: "(x+5)(x-2) = 0 \\Rightarrow x = -5, \\ x = 2", marks: 1, markCode: "M" },
              { reasoning: "Use the linear equation to find $y$.", working: "x=-5: y=-2;\\quad x=2: y=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x, y) = (-5, -2)$ and $(2, 5)$",
            commonErrors: ["Expanding $(x+3)^2$ as $x^2 + 9$.", "Giving only the $x$ values."],
          },
        },
        {
          id: "edm11-u3-simultaneous-quadratic-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 5,
          stem: "Solve the simultaneous equations\n\n$$y = 2x + 1$$\n$$x^2 + y^2 = 2$$\n\nEnter the solution with the smaller value of $x$ first. Give $y$ and $x$ as decimals.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x_1$", answer: -1 },
              { label: "$y_1$", answer: -1 },
              { label: "$x_2$", answer: 0.2 },
              { label: "$y_2$", answer: 1.4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Substitution", statement: "Replace $y$ by $2x+1$ to form a quadratic in $x$." },
            ],
            steps: [
              { reasoning: "Substitute into the circle equation, keeping the bracket.", working: "x^2 + (2x+1)^2 = 2", marks: 1, markCode: "M" },
              { reasoning: "Expand and collect.", working: "5x^2 + 4x + 1 = 2 \\Rightarrow 5x^2 + 4x - 1 = 0", marks: 1, markCode: "A" },
              { reasoning: "Factorise the quadratic.", working: "(5x - 1)(x + 1) = 0", marks: 1, markCode: "M" },
              { reasoning: "Solve for $x$.", working: "x = 0.2 \\text{ or } x = -1", marks: 1, markCode: "A" },
              { reasoning: "Find each $y$ using $y = 2x+1$.", working: "x=-1: y=-1;\\quad x=0.2: y=1.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x, y) = (-1, -1)$ and $(0.2, 1.4)$",
            commonErrors: ["Writing $(2x+1)^2 = 4x^2 + 1$.", "Substituting back into the circle equation instead of the line, which produces extra false pairs."],
          },
        },
        {
          id: "edm11-u3-simultaneous-quadratic-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "A circle has equation $x^2 + y^2 = 20$ and centre $O(0, 0)$. A straight line $L$ has equation $y = 2x + 10$.",
          parts: [
            { label: "a", prompt: "Show that the $x$-coordinates of any points where $L$ meets the circle satisfy $x^2 + 8x + 16 = 0$.", marks: 3 },
            { label: "b", prompt: "Solve $x^2 + 8x + 16 = 0$ and find the coordinates of the point $P$ where $L$ meets the circle.", marks: 2 },
            { label: "c", prompt: "Explain why $L$ is a tangent to the circle.", marks: 2 },
            { label: "d", prompt: "Show that $OP$ is perpendicular to $L$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tangent condition", statement: "A line is a tangent to a circle when the equation formed by substitution has one repeated root." },
              { kind: "property", name: "Perpendicular gradients", statement: "Two lines are perpendicular when the product of their gradients is $-1$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute the line into the circle equation.", working: "x^2 + (2x+10)^2 = 20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand the bracket.", working: "x^2 + 4x^2 + 40x + 100 = 20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Collect to $0$ and divide by $5$.", working: "5x^2 + 40x + 80 = 0 \\Rightarrow x^2 + 8x + 16 = 0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise to find the only value of $x$.", working: "(x+4)^2 = 0 \\Rightarrow x = -4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute into the line.", working: "y = 2(-4) + 10 = 2 \\Rightarrow P = (-4, 2)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The equation has exactly one repeated solution.", working: "(x+4)^2 = 0", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So $L$ touches the circle at exactly one point, $P$, and so is a tangent.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Find the gradient of $OP$.", working: "\\frac{2 - 0}{-4 - 0} = -\\frac12", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The gradient of $L$ is $2$. Multiply the gradients.", working: "2 \\times \\left(-\\frac12\\right) = -1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the conclusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) shown. (b) $x = -4$, $P = (-4, 2)$. (c) One repeated root so one point of contact. (d) Gradients $-\\frac12$ and $2$ multiply to $-1$.",
            commonErrors: ["Expanding $(2x+10)^2$ as $4x^2 + 100$.", "Concluding the line misses the circle because the discriminant is zero."],
            examinerNote: "In (a) the answer is given, so each stage of the expansion must be shown.",
          },
        },
      ],
    },
  ],
};
