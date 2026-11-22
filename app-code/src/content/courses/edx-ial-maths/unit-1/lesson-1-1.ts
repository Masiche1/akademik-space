import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "edial-maths-u1-lesson-1-1",
  code: "1-1",
  title: "Completing the Square and the Vertex Form",
  goal: "I CAN rewrite a quadratic in completed-square form, find its vertex and turning point, and solve quadratic equations.",
  standards: ["WMA11 P1", "Algebra and functions"],
  vocabulary: [
    { term: "Quadratic function", definition: "A function of the form $f(x)=ax^2+bx+c$ with $a\\neq0$. Its graph is a parabola." },
    { term: "Completed square form", definition: "The form $a(x-h)^2+k$. The vertex of the parabola is $(h,k)$." },
    { term: "Vertex", definition: "The turning point of a parabola — the maximum point when $a<0$ and the minimum point when $a>0$." },
    { term: "Discriminant", definition: "For $ax^2+bx+c=0$ the discriminant is $\\Delta=b^2-4ac$. It determines the number of real roots." },
    { term: "Roots", definition: "The values of $x$ for which $f(x)=0$; the $x$-intercepts of the graph." },
  ],
  concepts: [
    {
      id: "edial-maths-u1-completing-square",
      title: "Completing the square and the vertex",
      skill: "Rewrite quadratics in the form $a(x-h)^2+k$, identify the vertex and use it to find maximum or minimum values.",
      lesson: {
        sections: [
          {
            heading: "Completing the square",
            body: "For $x^2+bx+c$, take half of $b$ and square it: $x^2+bx=\\left(x+\\frac{b}{2}\\right)^2-\\frac{b^2}{4}$. So $x^2+bx+c=\\left(x+\\frac{b}{2}\\right)^2+\\left(c-\\frac{b^2}{4}\\right)$.\n\nWhen $a\\neq1$, factor out $a$ first: $ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2+\\left(c-\\frac{b^2}{4a}\\right)$.",
          },
          {
            heading: "Vertex and turning point",
            body: "In the form $a(x-h)^2+k$ the **vertex** is $(h,k)$. If $a>0$ the parabola opens upwards and $(h,k)$ is a minimum; if $a<0$ it opens downwards and $(h,k)$ is a maximum. This gives the range of the function: for $a>0$, $f(x)\\ge k$; for $a<0$, $f(x)\\le k$.",
          },
          {
            heading: "Using the vertex in context",
            body: "Projectile height, profit and other quantities often follow a quadratic model. Completing the square finds the greatest or least value quickly — far faster than trial and error.",
          },
        ],
        keyFormulas: [
          { name: "Completed square", statement: "$ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2+\\left(c-\\frac{b^2}{4a}\\right)$" },
          { name: "Vertex", statement: "$(h,k)$ where $h=-\\frac{b}{2a}$, $k=c-\\frac{b^2}{4a}$" },
        ],
        workedExample: {
          problem: "Express $y=x^2-6x+11$ in the form $(x+a)^2+b$ and state the coordinates of the vertex.",
          solution: "$x^2-6x+11=(x-3)^2-9+11=(x-3)^2+2$. The vertex is $(3,2)$, a minimum since the coefficient of $x^2$ is positive.",
        },
      },
      questions: [
        {
          id: "edial-maths-u1-cs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The quadratic $y=x^2-8x+3$ is written in completed-square form $y=(x+a)^2+b$. What is the value of $a$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-8$" },
              { id: "b", text: "$-4$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$x^2+bx+c=\\left(x+\\frac{b}{2}\\right)^2+\\left(c-\\frac{b^2}{4}\\right)$." },
            ],
            steps: [
              { reasoning: "Half of $-8$ is $-4$, so the bracket is $(x-4)^2$ and $a=-4$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $a=-4$",
            commonErrors: ["Giving $a=4$ by dropping the sign of $b$.", "Using $b$ instead of $\\frac{b}{2}$."],
          },
        },
        {
          id: "edial-maths-u1-cs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Express $y=2x^2+8x+3$ in the form $y=a(x+h)^2+k$, where $a$, $h$ and $k$ are integers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "h", answer: 2 },
              { label: "k", answer: -5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square with coefficient", statement: "$ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2+\\left(c-\\frac{b^2}{4a}\\right)$." },
            ],
            steps: [
              { reasoning: "Factor out $2$ and complete the square inside.", working: "2\\left(x^2+4x\\right)+3=2\\left[(x+2)^2-4\\right]+3", marks: 1, markCode: "M" },
              { reasoning: "Expand and collect the constant terms.", working: "2(x+2)^2-8+3=2(x+2)^2-5", marks: 1, markCode: "M" },
              { reasoning: "Read off $a=2$, $h=2$, $k=-5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2(x+2)^2-5$, so $a=2$, $h=2$, $k=-5$",
            commonErrors: ["Forgetting to multiply the $-4$ back by the factor $2$.", "Writing $h=-2$ — the form $(x+h)^2$ needs $h=2$."],
            examinerNote: "cao for each coefficient; accept equivalent forms such as $2(x+2)^2-5$ written out fully.",
          },
        },
        {
          id: "edial-maths-u1-cs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The height $h$ metres of a ball above the ground $t$ seconds after being thrown is modelled by $h=-5t^2+20t+1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2+\\left(c-\\frac{b^2}{4a}\\right)$; maximum value is $k$ when $a<0$." },
            ],
            steps: [
              { reasoning: "Factor out $-5$ and complete the square.", working: "h=-5\\left(t^2-4t\\right)+1=-5\\left[(t-2)^2-4\\right]+1", marks: 1, markCode: "M" },
              { reasoning: "Simplify to vertex form.", working: "h=-5(t-2)^2+21", marks: 1, markCode: "M" },
              { reasoning: "Since $a=-5<0$ the vertex is a maximum.", marks: 1, markCode: "R" },
              { reasoning: "State the maximum height and the time it occurs.", working: "\\text{max }h=21\\text{ m at }t=2\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Maximum height $21$ m, reached after $2$ seconds.",
            commonErrors: ["Completing the square but misplacing the sign of the constant.", "Stating the vertex $(2,21)$ without saying it is a maximum."],
          },
        },
        {
          id: "edial-maths-u1-cs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A company models its weekly profit $P$ pounds from selling $x$ thousand items by $P=-2x^2+24x-40$, where $0\\le x\\le 12$.",
          parts: [
            { label: "a", prompt: "Express $P$ in the form $a(x+h)^2+k$.", marks: 3 },
            { label: "b", prompt: "State the coordinates of the vertex of the graph of $P$ against $x$.", marks: 1 },
            { label: "c", prompt: "State the maximum weekly profit and the number of items that gives it.", marks: 2 },
            { label: "d", prompt: "Find the values of $x$ for which the profit is zero.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Completing the square", statement: "$ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2+\\left(c-\\frac{b^2}{4a}\\right)$." },
              { kind: "definition", name: "Roots of a quadratic", statement: "The values of $x$ where $P=0$; solve by factorising or the quadratic formula." },
            ],
            steps: [
              { part: "a", reasoning: "Factor out $-2$ and complete the square on the bracket.", working: "P=-2\\left(x^2-12x\\right)-40=-2\\left[(x-6)^2-36\\right]-40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand and simplify.", working: "P=-2(x-6)^2+72-40=-2(x-6)^2+32", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the completed form.", working: "P=-2(x-6)^2+32", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Read off the vertex from $(x-h)^2$ form.", working: "h=6,\\ k=32", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Since $a=-2<0$ the vertex is a maximum.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "State the maximum profit and the corresponding sales.", working: "P_{\\max}=32\\text{ pounds at }x=6\\text{ (thousand items)}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $P=0$ and factorise using the difference of two squares.", working: "-2(x-6)^2+32=0\\Rightarrow(x-6)^2=16", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve the two square roots.", working: "x-6=\\pm4\\Rightarrow x=2\\text{ or }x=10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Both values lie in the domain $0\\le x\\le12$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P=-2(x-6)^2+32$ (b) vertex $(6,32)$ (c) maximum profit £32 at 6 thousand items (d) $x=2$ and $x=10$",
            commonErrors: ["Sign error completing the square, e.g. $-2(x+6)^2$.", "Forgetting to convert $x$ back to items in (c).", "Missing one root in (d)."],
            examinerNote: "In (a) a correct unsimplified expansion of $-2[(x-6)^2-36]-40$ earns M1M1; the final form earns A1.",
          },
        },
      ],
    },
    {
      id: "edial-maths-u1-discriminant",
      title: "The discriminant and solving quadratics",
      skill: "Use the discriminant to determine the number of real roots and solve quadratic equations by factorising and the formula.",
      lesson: {
        sections: [
          {
            heading: "The discriminant",
            body: "For $ax^2+bx+c=0$ with real coefficients, the **discriminant** $\\Delta=b^2-4ac$ tells us about the roots without solving: $\\Delta>0$ gives two distinct real roots, $\\Delta=0$ gives one repeated real root, and $\\Delta<0$ gives no real roots (the graph does not cross the $x$-axis).",
          },
          {
            heading: "Solving quadratics",
            body: "Factorise first when possible: look for two numbers multiplying to $ac$ and adding to $b$. Otherwise use the quadratic formula $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$. For $ax^2+bx+c=0$, exact answers often involve surds; give them in simplest form.",
          },
          {
            heading: "Discriminant in context",
            body: "A quadratic model has real solutions only when $\\Delta\\ge0$. Setting $\\Delta=0$ finds the boundary values — for example the price or size at which two solutions merge into one.",
          },
        ],
        keyFormulas: [
          { name: "Discriminant", statement: "$\\Delta=b^2-4ac$" },
          { name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{\\Delta}}{2a}$" },
        ],
        workedExample: {
          problem: "Find the values of $k$ for which $x^2+kx+16=0$ has two equal roots.",
          solution: "Two equal roots means $\\Delta=0$: $k^2-4(1)(16)=0$, so $k^2=64$ and $k=\\pm8$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u1-disc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the equation $2x^2-3x-2=0$, what is the value of the discriminant $b^2-4ac$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-7$" },
              { id: "b", text: "$25$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$17$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discriminant", statement: "$\\Delta=b^2-4ac$ for $ax^2+bx+c=0$." },
            ],
            steps: [
              { reasoning: "Here $a=2$, $b=-3$, $c=-2$, so $\\Delta=(-3)^2-4(2)(-2)$.", working: "9+16=25", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $25$",
            commonErrors: ["Computing $b^2+4ac$ instead of $b^2-4ac$.", "Using $c=2$ and getting $-7$."],
          },
        },
        {
          id: "edial-maths-u1-disc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Show that the equation $x^2+4x+5=0$ has no real roots.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Discriminant criterion", statement: "$\\Delta<0$ implies no real roots; $\\Delta=b^2-4ac$." },
            ],
            steps: [
              { reasoning: "Identify $a=1$, $b=4$, $c=5$ and compute the discriminant.", working: "\\Delta=4^2-4(1)(5)=16-20=-4", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta<0$ means the quadratic has no real roots.", marks: 1, markCode: "M" },
              { reasoning: "Conclude that the equation has no real roots.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\Delta=-4<0$, so the equation has no real roots.",
            commonErrors: ["Evaluating $4ac$ as $4\\times1\\times5=20$ incorrectly as 16.", "Claiming no roots because the parabola opens upwards — the discriminant is what matters."],
          },
        },
        {
          id: "edial-maths-u1-disc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Find the set of values of $k$ for which the equation $x^2+kx+9=0$ has two distinct real roots.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Discriminant criterion", statement: "Two distinct real roots requires $\\Delta>0$." },
            ],
            steps: [
              { reasoning: "Write the discriminant in terms of $k$.", working: "\\Delta=k^2-4(1)(9)=k^2-36", marks: 1, markCode: "M" },
              { reasoning: "Set up the inequality for two distinct real roots.", working: "k^2-36>0", marks: 1, markCode: "M" },
              { reasoning: "Solve the quadratic inequality.", working: "k^2>36\\Rightarrow k<-6\\text{ or }k>6", marks: 1, markCode: "A" },
              { reasoning: "State the answer as a set.", working: "k\\in(-\\infty,-6)\\cup(6,\\infty)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k<-6$ or $k>6$",
            commonErrors: ["Including $k=\\pm6$ — those give a repeated root, not two distinct roots.", "Writing $-6<k<6$, which is the no-real-roots region."],
          },
        },
        {
          id: "edial-maths-u1-disc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The equation $x^2-2(k+1)x+k+7=0$ has two distinct real roots.",
          parts: [
            { label: "a", prompt: "Show that the discriminant is $4(k^2+k-6)$.", marks: 2 },
            { label: "b", prompt: "Find the set of values of $k$ for which the equation has two distinct real roots.", marks: 4 },
            { label: "c", prompt: "Find the value of $k$ for which the equation has two equal roots, and state the repeated root in each case.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discriminant", statement: "$\\Delta=b^2-4ac$ for $ax^2+bx+c=0$." },
              { kind: "theorem", name: "Root criteria", statement: "$\\Delta>0$ two distinct roots; $\\Delta=0$ one repeated root." },
            ],
            steps: [
              { part: "a", reasoning: "Identify $a=1$, $b=-2(k+1)$, $c=k+7$ and substitute into $b^2-4ac$.", working: "\\Delta=4(k+1)^2-4(k+7)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand and simplify to the required form.", working: "4(k^2+2k+1)-4k-28=4k^2+4k-24=4(k^2+k-6)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two distinct real roots requires $\\Delta>0$.", working: "4(k^2+k-6)>0\\Rightarrow k^2+k-6>0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorise the quadratic.", working: "(k+3)(k-2)>0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve the inequality.", working: "k<-3\\text{ or }k>2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State the set.", working: "k\\in(-\\infty,-3)\\cup(2,\\infty)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equal roots requires $\\Delta=0$.", working: "k^2+k-6=0\\Rightarrow(k+3)(k-2)=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $k$.", working: "k=-3\\text{ or }k=2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For $k=-3$ the equation is $x^2+4x+4=0$, repeated root $x=-2$.", working: "x=-\\frac{4}{2}=-2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "For $k=2$ the equation is $x^2-6x+9=0$, repeated root $x=3$.", working: "x=\\frac{6}{2}=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\Delta=4(k^2+k-6)$ (b) $k<-3$ or $k>2$ (c) $k=-3$ gives repeated root $x=-2$; $k=2$ gives repeated root $x=3$",
            commonErrors: ["Forgetting the factor 4 when solving $\\Delta>0$ — it does not affect the inequality but must be handled correctly.", "Finding $k$ but not the repeated root.", "Sign errors in expanding $(k+1)^2$."],
            examinerNote: "In (c) accept the repeated root found from $x=-\\frac{b}{2a}$ or by solving the perfect square.",
          },
        },
      ],
    },
  ],
};
