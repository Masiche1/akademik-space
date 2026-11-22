import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "aisl-u2-lesson-2-2",
  code: "2-2",
  title: "Non-linear Models",
  goal: "I CAN model situations with quadratic, exponential, direct and inverse variation and cubic functions, and use technology to answer questions about them.",
  standards: ["SL 2.5", "SL 2.6"],
  vocabulary: [
    { term: "Quadratic function", definition: "A function $f(x) = ax^2 + bx + c$ with $a \\ne 0$, whose graph is a parabola." },
    { term: "Vertex", definition: "The maximum or minimum point of a parabola; it lies on the axis of symmetry $x = -\\dfrac{b}{2a}$." },
    { term: "Exponential model", definition: "A function $f(x) = ka^x$ or $ka^{-x} + c$ in which the quantity changes by a constant factor per unit step." },
    { term: "Direct variation", definition: "A relationship $y = kx^n$ in which $y$ is proportional to a power of $x$." },
    { term: "Inverse variation", definition: "A relationship $y = \\dfrac{k}{x^n}$, in which $y$ decreases as $x$ increases." },
    { term: "Cubic function", definition: "A function $f(x) = ax^3 + bx^2 + cx + d$ with $a \\ne 0$." },
    { term: "Half-life", definition: "The time taken for a decaying quantity to fall to half its value." },
  ],
  concepts: [
    {
      id: "aisl-u2-quadratic-models",
      title: "Quadratic models",
      skill: "Use quadratic functions to model situations, finding the vertex, intercepts and solutions with technology.",
      lesson: {
        sections: [
          {
            heading: "Features of a quadratic model",
            body: "A quadratic $f(x) = ax^2 + bx + c$ has a vertex on the axis of symmetry $x = -\\frac{b}{2a}$. If $a < 0$ the vertex is a maximum, as in the height of a thrown ball; if $a > 0$ it is a minimum. The $y$-intercept is $c$, the starting value in a context.",
          },
          {
            heading: "Solving with technology",
            body: "To find when a quadratic model reaches a given value, solve $f(x) = k$ with the GDC (graph intersection or polynomial solver). For problems where the model is only valid for some inputs, reject solutions outside the domain, for example negative times.",
          },
          {
            heading: "Interpreting results",
            body: "Always connect answers to the context. The vertex gives the best value (maximum height, maximum profit); the roots give when the quantity is zero, such as when a ball lands. Give answers with units and to 3 significant figures unless told otherwise.",
          },
        ],
        keyFormulas: [
          { name: "Axis of symmetry", statement: "$x = -\\dfrac{b}{2a}$" },
          { name: "Quadratic formula", statement: "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
        ],
        workedExample: {
          problem: "The height of a ball is $h = -5t^2 + 20t$ metres after $t$ seconds. Find the maximum height.",
          solution: "The vertex is at $t = -\\frac{20}{2(-5)} = 2$. Then $h = -5(4) + 40 = 20$, so the maximum height is $20$ m.",
        },
      },
      questions: [
        {
          id: "aisl-u2-quadratic-models-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A quadratic function is $f(x) = 2x^2 - 12x + 7$. Write down the equation of the axis of symmetry of its graph.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 3$" },
              { id: "b", text: "$x = 7$" },
              { id: "c", text: "$x = 6$" },
              { id: "d", text: "$x = -3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "$x = -\\frac{b}{2a}$" },
            ],
            steps: [
              { reasoning: "Identify $a = 2$ and $b = -12$ and substitute.", working: "x = -\\frac{-12}{2(2)}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "x = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x = 3$",
            commonErrors: ["Forgetting the sign of $b$, giving $-3$.", "Using $-\\frac{b}{a}$, giving $6$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The height of a ball above the ground is modelled by $h(t) = -4.9t^2 + 19.6t + 2$, where $h$ is in metres and $t$ is the time in seconds after it is thrown. Find the maximum height of the ball.",
          response: { type: "numeric", parts: [{ label: "Maximum height (m)", answer: 21.6, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertex of a parabola", statement: "The maximum occurs at $t = -\\frac{b}{2a}$." },
            ],
            steps: [
              { reasoning: "Find the time at which the maximum occurs.", working: "t = -\\frac{19.6}{2(-4.9)} = 2", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the model.", working: "h(2) = -4.9(4) + 19.6(2) + 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-19.6 + 39.2 + 2 = 21.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21.6$ m",
            commonErrors: ["Giving the time $t = 2$ as the maximum height.", "Omitting the constant $2$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The height of a ball above the ground is modelled by $h(t) = -4.9t^2 + 19.6t + 2$, where $h$ is in metres and $t \\ge 0$ is the time in seconds after it is thrown. Find the time at which the ball hits the ground. Give your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Time (s)", answer: 4.1, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic formula", statement: "$t = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
            ],
            steps: [
              { reasoning: "The ball is on the ground when $h = 0$.", working: "-4.9t^2 + 19.6t + 2 = 0", marks: 1, markCode: "M" },
              { reasoning: "Solve with the GDC or the quadratic formula.", working: "t = -0.0996 \\text{ or } t = 4.0996", marks: 1, markCode: "A" },
              { reasoning: "Time cannot be negative, so reject $t = -0.0996$.", working: "t \\ge 0", marks: 1, markCode: "R" },
              { reasoning: "Round to 3 significant figures.", working: "t = 4.10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = 4.10$ s",
            commonErrors: ["Giving both roots without rejecting the negative one.", "Solving $h = 21.6$ instead of $h = 0$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A company sells phone cases. The weekly profit, $P$ hundred dollars, when the selling price is $x$ dollars is modelled by $P(x) = -0.5x^2 + 20x - 50$, for $0 \\le x \\le 40$.",
          parts: [
            { label: "a", prompt: "Find $P(0)$ and interpret this value.", marks: 2 },
            { label: "b", prompt: "Find the selling price that gives the maximum weekly profit, and find this maximum profit.", marks: 3 },
            { label: "c", prompt: "Find the range of prices for which the company makes a profit. Give your answers to 3 significant figures.", marks: 3 },
            { label: "d", prompt: "The company wants a weekly profit of $\\$12\\,000$. Find the possible selling prices, to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "$x = -\\frac{b}{2a}$" },
              { kind: "formula", name: "Quadratic formula", statement: "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x = 0$.", working: "P(0) = -50", marks: 1, markCode: "A" },
              { part: "a", reasoning: "A price of $\\$0$ gives a loss of $50$ hundred dollars, that is $\\$5000$ (fixed costs).", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Find the axis of symmetry.", working: "x = -\\frac{20}{2(-0.5)} = 20", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute into $P$.", working: "P(20) = -0.5(400) + 400 - 50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State price and profit.", working: "P(20) = 150 \\;(\\$15\\,000)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Profit occurs when $P(x) > 0$; solve $P(x) = 0$.", working: "x^2 - 40x + 100 = 0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve with the GDC or the formula.", working: "x = 20 \\pm \\sqrt{300} = 2.68,\\; 37.3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The parabola opens downward, so profit is positive between the roots.", working: "2.68 < x < 37.3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $P(x) = 120$ and rearrange.", working: "-0.5x^2 + 20x - 170 = 0 \\Rightarrow x^2 - 40x + 340 = 0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve: $x = 20 \\pm \\sqrt{60}$.", working: "x = 12.3 \\text{ or } x = 27.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $-50$: a loss of $\\$5000$ at price zero. (b) Price $\\$20$, profit $\\$15\\,000$. (c) $2.68 < x < 37.3$. (d) $\\$12.3$ or $\\$27.7$.",
            commonErrors: ["Forgetting that $P$ is in hundreds of dollars.", "Giving the interval outside the roots in (c)."],
            examinerNote: "In (d), $12\\,000$ dollars is $120$ in the units of $P$.",
          },
        },
        {
          id: "aisl-u2-quadratic-models-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A quadratic function is $f(x) = 3x^2 - 12x + 5$. Write down the equation of the axis of symmetry of its graph.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = -2$" },
              { id: "b", text: "$x = 4$" },
              { id: "c", text: "$x = 6$" },
              { id: "d", text: "$x = 2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "$x = -\\frac{b}{2a}$" },
            ],
            steps: [
              { reasoning: "Identify $a = 3$ and $b = -12$ and substitute.", working: "x = -\\frac{-12}{2(3)}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "x = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x = 2$",
            commonErrors: ["Forgetting the sign of $b$, giving $x = -2$.", "Using $-\\frac{b}{a}$, giving $x = 4$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For the quadratic function $f(x) = x^2 - 8x + 20$, what is the minimum value of $f(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$20$" },
              { id: "c", text: "$-4$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertex of a parabola", statement: "The minimum occurs at $x = -\\frac{b}{2a}$; substitute to find $f(x)$." },
            ],
            steps: [
              { reasoning: "Find the $x$-coordinate of the vertex.", working: "x = \\frac{8}{2} = 4", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $f$.", working: "f(4) = 16 - 32 + 20 = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: ["Stating the $x$-coordinate $4$ without evaluating $f(4)$.", "Using $x = -4$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many real solutions does the equation $x^2 + 6x + 11 = 0$ have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "None" },
              { id: "b", text: "Two" },
              { id: "c", text: "One" },
              { id: "d", text: "Three" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Discriminant", statement: "$\\Delta = b^2 - 4ac$; if $\\Delta < 0$ there are no real roots." },
            ],
            steps: [
              { reasoning: "Evaluate the discriminant with $a = 1$, $b = 6$, $c = 11$.", working: "\\Delta = 36 - 44 = -8", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta < 0$, so there are no real solutions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** None",
            commonErrors: ["Assuming two roots because it is a quadratic.", "Making an arithmetic error in $b^2 - 4ac$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The height of a ball above the ground is modelled by $h(t) = -5t^2 + 30t + 1$ metres, where $t$ is the time in seconds. At what time does the ball reach its maximum height?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$t = 6$ s" },
              { id: "b", text: "$t = 1$ s" },
              { id: "c", text: "$t = 3$ s" },
              { id: "d", text: "$t = 30$ s" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "The maximum of a downward parabola occurs at $t = -\\frac{b}{2a}$." },
            ],
            steps: [
              { reasoning: "Identify $a = -5$ and $b = 30$ and substitute.", working: "t = -\\frac{30}{2(-5)}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "t = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $t = 3$ s",
            commonErrors: ["Finding the maximum height instead of the time.", "Forgetting the negative sign in $-\\frac{b}{2a}$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Solve $x^2 - 7x + 10 = 0$. Give the smaller solution.",
          response: { type: "numeric", parts: [{ label: "Smaller solution", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic formula", statement: "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
            ],
            steps: [
              { reasoning: "Factorise or apply the formula with $a = 1$, $b = -7$, $c = 10$.", working: "x = \\frac{7 \\pm \\sqrt{49 - 40}}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the two solutions.", working: "x = 2 \\text{ or } x = 5", marks: 1, markCode: "A" },
              { reasoning: "State the smaller solution.", working: "x = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 2$",
            commonErrors: ["Giving both solutions when only the smaller is required.", "Sign error giving $x = -2$ or $-5$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the minimum value of $f(x) = 2x^2 - 8x + 3$.",
          response: { type: "numeric", parts: [{ label: "Minimum value", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertex of a parabola", statement: "The vertex lies at $x = -\\frac{b}{2a}$." },
            ],
            steps: [
              { reasoning: "Find the $x$-coordinate of the vertex.", working: "x = \\frac{8}{4} = 2", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $f$.", working: "f(2) = 2(4) - 8(2) + 3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "8 - 16 + 3 = -5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-5$",
            commonErrors: ["Giving the vertex $x$-coordinate $2$ as the minimum value.", "Forgetting to double $2^2$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The height of a ball above the ground is modelled by $h(t) = -4.9t^2 + 14.7t$ metres, where $t$ is the time in seconds after it is thrown. Find the time at which the ball reaches its maximum height.",
          response: { type: "numeric", parts: [{ label: "Time (s)", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "The maximum occurs at $t = -\\frac{b}{2a}$." },
            ],
            steps: [
              { reasoning: "Identify $a = -4.9$ and $b = 14.7$ and substitute.", working: "t = -\\frac{14.7}{2(-4.9)}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the fraction.", working: "t = \\frac{14.7}{9.8}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "t = 1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = 1.5$ s",
            commonErrors: ["Finding the maximum height instead of the time.", "Using $t = \\frac{b}{2a}$ without the minus sign."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A rectangular garden is to be fenced using exactly $48$ m of fencing. The length of the garden is $x$ m and its width is $(24 - x)$ m, so the area is $A(x) = x(24 - x)$ square metres. Find the maximum possible area, in square metres.",
          response: { type: "numeric", parts: [{ label: "Maximum area (m$^2$)", answer: 144 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Vertex of a parabola", statement: "The maximum of $A(x) = -x^2 + 24x$ occurs at $x = -\\frac{b}{2a}$." },
            ],
            steps: [
              { reasoning: "Expand the area function.", working: "A(x) = -x^2 + 24x", marks: 1, markCode: "M" },
              { reasoning: "Find the value of $x$ at the maximum.", working: "x = \\frac{24}{2} = 12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $A(12)$.", working: "A(12) = 12 \\times 12 = 144", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$144$ m$^2$",
            commonErrors: ["Giving $x = 12$ as the maximum area.", "Using the perimeter $48$ in place of the area formula."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The height of a ball above the ground is modelled by $h(t) = -4.9t^2 + 19.6t + 1$ metres, where $t$ is the time in seconds after it is thrown.",
          parts: [
            { label: "a", prompt: "Find the time at which the ball reaches its maximum height.", marks: 2 },
            { label: "b", prompt: "Find this maximum height.", marks: 2 },
            { label: "c", prompt: "Find the time at which the ball hits the ground, giving your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "The vertex of a downward parabola is at $t = -\\frac{b}{2a}$." },
              { kind: "formula", name: "Quadratic formula", statement: "$t = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
            ],
            steps: [
              { part: "a", reasoning: "Find the axis of symmetry with $a = -4.9$, $b = 19.6$.", working: "t = -\\frac{19.6}{2(-4.9)} = 2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the time.", working: "t = 2 \\text{ s}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $t = 2$ into $h$.", working: "h(2) = -4.9(4) + 19.6(2) + 1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "-19.6 + 39.2 + 1 = 20.6 \\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The ball hits the ground when $h(t) = 0$.", working: "-4.9t^2 + 19.6t + 1 = 0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve with the GDC and reject the negative root.", working: "t = 4.05 \\text{ s (3 s.f.)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $t = 2$ s. (b) $20.6$ m. (c) $t = 4.05$ s.",
            commonErrors: ["Giving the maximum height when asked for the time.", "Including the negative root in (c)."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A farmer has $40$ m of fencing to enclose a rectangular paddock on three sides only, with the fourth side being an existing wall. Let $W$ m be the width of the paddock perpendicular to the wall.",
          parts: [
            { label: "a", prompt: "Show that the area of the paddock is $A(W) = 40W - 2W^2$.", marks: 1 },
            { label: "b", prompt: "Write down the domain of $A$ in context.", marks: 1 },
            { label: "c", prompt: "Find the width that gives the maximum area, and state this maximum area.", marks: 3 },
            { label: "d", prompt: "Find the widths for which the area is $150$ m$^2$. Give your answers to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Area of a rectangle", statement: "$A = \\text{length} \\times \\text{width}$; the length is $40 - 2W$." },
              { kind: "formula", name: "Vertex of a parabola", statement: "The maximum of $A(W) = -2W^2 + 40W$ occurs at $W = -\\frac{b}{2a}$." },
            ],
            steps: [
              { part: "a", reasoning: "The length parallel to the wall is $40 - 2W$, so $A = W(40 - 2W) = 40W - 2W^2$ (AG).", working: "A = W(40 - 2W)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The width must be positive and the length must be positive.", working: "0 < W < 20", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the axis of symmetry with $a = -2$, $b = 40$.", working: "W = \\frac{40}{4} = 10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute into $A$.", working: "A(10) = 400 - 200 = 200", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State width and maximum area.", working: "W = 10 \\text{ m}, \\; A_{\\max} = 200 \\text{ m}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $A(W) = 150$ and solve with the GDC.", working: "40W - 2W^2 = 150 \\Rightarrow W^2 - 20W + 75 = 0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "W = 5.00 \\text{ or } W = 15.0 \\text{ (3 s.f.)}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) AG. (b) $0 < W < 20$. (c) $W = 10$ m, $A_{\\max} = 200$ m$^2$. (d) $W = 5.00$ m or $15.0$ m.",
            commonErrors: ["Using $40 - W$ for the length instead of $40 - 2W$.", "Including a negative or zero width in (d)."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement about the quadratic function $f(x) = -2x^2 + 8x - 3$ is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no turning point" },
              { id: "b", text: "It has a minimum value" },
              { id: "c", text: "Its graph opens upwards" },
              { id: "d", text: "It has a maximum value" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sign of $a$", statement: "If $a < 0$ the parabola opens downwards and the vertex is a maximum." },
            ],
            steps: [
              { reasoning: "Identify the coefficient of $x^2$.", working: "a = -2 < 0", marks: 1, markCode: "M" },
              { reasoning: "A downward parabola has a maximum at its vertex.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It has a maximum value",
            commonErrors: ["Assuming every quadratic has a minimum.", "Ignoring the negative coefficient of $x^2$."],
          },
        },
        {
          id: "aisl-u2-quadratic-models-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The height of a ball above the ground is modelled by $h(t) = -4.9t^2 + 19.6t + 1.5$, where $h$ is in metres and $t$ is the time in seconds. What does the value $1.5$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The horizontal distance travelled" },
              { id: "b", text: "The time at which the ball lands" },
              { id: "c", text: "The maximum height of the ball" },
              { id: "d", text: "The initial height of the ball above the ground" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretation of parameters", statement: "The constant term $c$ gives the value of $h$ when $t = 0$." },
            ],
            steps: [
              { reasoning: "The constant term is the value of $h$ at $t = 0$.", working: "h(0) = 1.5", marks: 1, markCode: "M" },
              { reasoning: "In context this is the height when the ball is released.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The initial height above the ground",
            commonErrors: ["Confusing the constant term with the vertex height.", "Interpreting $1.5$ as a time."],
          },
        },
      ],
    },
    {
      id: "aisl-u2-power-exp-cubic",
      title: "Exponential, variation and cubic models",
      skill: "Use exponential, direct and inverse variation and cubic models, solving with technology and interpreting parameters.",
      lesson: {
        sections: [
          {
            heading: "Exponential models",
            body: "Growth or decay by a constant factor is modelled by $f(t) = ka^t$ (or $ke^{rt}$). For $A = A_0(1.05)^t$ the quantity grows $5\\%$ per unit time; for $M = M_0 e^{-\\lambda t}$ it decays. The half-life $T$ satisfies $e^{-\\lambda T} = 0.5$, so $T = \\frac{\\ln 2}{\\lambda}$. Solve for the exponent using logarithms or the GDC.",
          },
          {
            heading: "Direct and inverse variation",
            body: "If $y$ varies directly with $x^n$ then $y = kx^n$; if inversely then $y = \\frac{k}{x^n}$. Find $k$ from one pair of values, then use the model. For example if $y$ is inversely proportional to $x$ and $y = 12$ when $x = 3$, then $k = 36$ and $y = \\frac{36}{x}$.",
          },
          {
            heading: "Cubic models",
            body: "Volumes and some cost models are cubic. Use the GDC to find maximum and minimum points and to solve $f(x) = k$. Always check which solutions lie in the valid domain, since a cubic can have up to three roots.",
          },
        ],
        keyFormulas: [
          { name: "Half-life", statement: "$M = M_0 e^{-\\lambda t}$, half-life $T = \\dfrac{\\ln 2}{\\lambda}$" },
          { name: "Inverse variation", statement: "$y = \\dfrac{k}{x}$, so $xy = k$" },
        ],
        workedExample: {
          problem: "A sum of $\\$500$ grows by $6\\%$ per year. Find its value after 10 years.",
          solution: "$A = 500(1.06)^{10} = 500 \\times 1.790848 = \\$895.42$.",
        },
      },
      questions: [
        {
          id: "aisl-u2-power-exp-cubic-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The time $y$ taken to complete a task is inversely proportional to the number of workers $x$. When $x = 3$, $y = 12$ hours. Find $y$ when $x = 9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$108$ hours" },
              { id: "b", text: "$4$ hours" },
              { id: "c", text: "$36$ hours" },
              { id: "d", text: "$3$ hours" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse variation", statement: "$y = \\frac{k}{x}$, so $xy = k$ is constant." },
            ],
            steps: [
              { reasoning: "Find the constant of variation.", working: "k = 3 \\times 12 = 36", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 9$.", working: "y = \\frac{36}{9} = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $4$ hours",
            commonErrors: ["Treating the relationship as direct variation, giving $36$.", "Multiplying $12 \\times 9$, giving $108$."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A savings account is modelled by $A = 1200(1.05)^t$, where $A$ is the value in dollars after $t$ years. Find the value of the account after 8 years, to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Value ($\\$$)", answer: 1772.95, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential model", statement: "$A = A_0 r^t$ with growth factor $r = 1.05$." },
            ],
            steps: [
              { reasoning: "Substitute $t = 8$.", working: "A = 1200(1.05)^8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $1.05^8 = 1.477455\\ldots$.", working: "1200 \\times 1.477455", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest cent.", working: "1772.95", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$1772.95$",
            commonErrors: ["Using $1200 \\times 1.05 \\times 8$.", "Using $1.5$ as the growth factor."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The mass $M$ grams of a radioactive sample after $t$ years is modelled by $M = 80e^{-0.03t}$. Find the half-life of the sample, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Half-life (years)", answer: 23.1, tolerance: 0.05 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "The time at which the mass has halved." },
              { kind: "definition", name: "Natural logarithm", statement: "$e^y = c \\Leftrightarrow y = \\ln c$." },
            ],
            steps: [
              { reasoning: "The mass halves from 80 to 40.", working: "80e^{-0.03t} = 40", marks: 1, markCode: "M" },
              { reasoning: "Divide by 80.", working: "e^{-0.03t} = 0.5", marks: 1, markCode: "A" },
              { reasoning: "Take natural logarithms.", working: "-0.03t = \\ln 0.5 = -0.6931", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-0.03$.", working: "t = 23.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$23.1$ years",
            commonErrors: ["Setting $M = 80$ instead of $40$.", "Forgetting the negative sign and obtaining $t = -23.1$."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "An open box is made from a square sheet of card of side $30$ cm by cutting a square of side $x$ cm from each corner and folding up the sides. The volume of the box is $V$ cm$^3$.",
          parts: [
            { label: "a", prompt: "Show that $V = 4x^3 - 120x^2 + 900x$.", marks: 2 },
            { label: "b", prompt: "Write down the domain of $V$ in context, and find $V$ when $x = 4$.", marks: 3 },
            { label: "c", prompt: "Use your GDC to find the value of $x$ that gives the maximum volume, and state this maximum volume.", marks: 3 },
            { label: "d", prompt: "Find the values of $x$ for which the volume is $1500$ cm$^3$. Give your answers to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Volume of a cuboid", statement: "$V = \\text{length} \\times \\text{width} \\times \\text{height}$." },
              { kind: "principle", name: "Maximum with technology", statement: "The maximum point of the graph of $V$ is found with the GDC maximum function." },
            ],
            steps: [
              { part: "a", reasoning: "The base is a square of side $30 - 2x$ and the height is $x$.", working: "V = x(30 - 2x)^2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Expand $(30-2x)^2 = 900 - 120x + 4x^2$ and multiply by $x$ (AG).", working: "V = 4x^3 - 120x^2 + 900x", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The cut must be positive and leave a base of positive side, so $30 - 2x > 0$.", working: "0 < x < 15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x = 4$.", working: "V = 4(64) - 120(16) + 900(4) = 256 - 1920 + 3600", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate (check: $4 \\times 22^2$).", working: "V = 1936", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Graph $V$ on $0 < x < 15$ and use the GDC maximum function.", working: "\\text{Maximum at } (5, 2000)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the value of $x$.", working: "x = 5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "State the maximum volume.", working: "V_{\\max} = 2000 \\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Find the intersections of $y = V$ and $y = 1500$ with the GDC. A third intersection at $x = 19.4$ lies outside the domain and is rejected.", working: "4x^3 - 120x^2 + 900x = 1500", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the two solutions in the domain.", working: "x = 2.34 \\text{ or } x = 8.26", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) AG. (b) $0 < x < 15$; $V(4) = 1936$ cm$^3$. (c) $x = 5$, $V_{\\max} = 2000$ cm$^3$. (d) $x = 2.34$ or $8.26$.",
            commonErrors: ["Using $30 - x$ for the base side.", "Including the root $x = 19.4$ that lies outside the domain."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$y$ varies directly with $x^2$. When $x = 3$, $y = 18$. Find the value of $y$ when $x = 5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$" },
              { id: "b", text: "$50$" },
              { id: "c", text: "$90$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct variation", statement: "$y = kx^2$ for direct variation with $x^2$." },
            ],
            steps: [
              { reasoning: "Find the constant of variation using $x = 3$, $y = 18$.", working: "18 = 9k \\Rightarrow k = 2", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 5$.", working: "y = 2(25) = 50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $50$",
            commonErrors: ["Treating the variation as $y = kx$, giving $y = 30$.", "Halving instead of squaring $x$."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The value of an investment is modelled by $A(t) = 5000(0.9)^t$, where $t$ is the number of years. By what percentage does the investment decrease each year?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.9\\%$" },
              { id: "b", text: "$9\\%$" },
              { id: "c", text: "$10\\%$" },
              { id: "d", text: "$90\\%$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Decay factor", statement: "A factor of $0.9$ means the quantity keeps $90\\%$ of its value, losing $10\\%$." },
            ],
            steps: [
              { reasoning: "The decay factor $0.9$ corresponds to keeping $90\\%$ each year.", working: "1 - 0.9 = 0.1", marks: 1, markCode: "M" },
              { reasoning: "Convert to a percentage decrease.", working: "10\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $10\\%$",
            commonErrors: ["Reporting $90\\%$ as the decrease instead of the remaining proportion.", "Reading $0.9$ as $0.9\\%$."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$y$ is inversely proportional to $x^2$. When $x = 2$, $y = 5$. Find the value of $y$ when $x = 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.625$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$2.5$" },
              { id: "d", text: "$1.25$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse variation", statement: "$y = \\frac{k}{x^2}$, so $yx^2 = k$ is constant." },
            ],
            steps: [
              { reasoning: "Find the constant of variation.", working: "k = 5 \\times 4 = 20", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 4$.", working: "y = \\frac{20}{16} = 1.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1.25$",
            commonErrors: ["Using $y = \\frac{k}{x}$ instead of $\\frac{k}{x^2}$, giving $2.5$.", "Multiplying $y$ by $4$ instead of dividing by $4^2$."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many $x$-intercepts does the graph of $f(x) = x^3 - 3x$ have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Roots of a cubic", statement: "$x$-intercepts occur where $f(x) = 0$; a cubic can have up to three real roots." },
            ],
            steps: [
              { reasoning: "Set $f(x) = 0$ and factorise.", working: "x(x^2 - 3) = 0 \\Rightarrow x = 0,\\; x = \\pm\\sqrt{3}", marks: 1, markCode: "M" },
              { reasoning: "Count the three distinct real roots.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Assuming a cubic has only one or two $x$-intercepts.", "Missing the root $x = 0$."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "An investment grows according to $A(t) = 2500(1.06)^t$, where $A$ is in dollars and $t$ is the number of years. Find the value of the investment after 5 years, to the nearest cent.",
          response: { type: "numeric", parts: [{ label: "Value ($\\$$)", answer: 3345.56, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential model", statement: "$A = A_0 r^t$ with growth factor $r = 1.06$." },
            ],
            steps: [
              { reasoning: "Substitute $t = 5$.", working: "A = 2500(1.06)^5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $1.06^5 = 1.338225\\ldots$.", working: "2500 \\times 1.338225", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest cent.", working: "3345.56", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$3345.56$",
            commonErrors: ["Using $2500 \\times 1.06 \\times 5$.", "Using $1.6$ as the growth factor."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The mass $M$ grams of a radioactive sample after $t$ years is modelled by $M = 200e^{-0.25t}$. Find the half-life of the sample, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Half-life (years)", answer: 2.77, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "$T = \\dfrac{\\ln 2}{\\lambda}$ for $M = M_0 e^{-\\lambda t}$." },
            ],
            steps: [
              { reasoning: "Apply the half-life formula with $\\lambda = 0.25$.", working: "T = \\frac{\\ln 2}{0.25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $\\ln 2 = 0.6931$.", working: "0.6931 \\div 0.25", marks: 1, markCode: "M" },
              { reasoning: "Divide and round to 3 significant figures.", working: "T = 2.77", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.77$ years",
            commonErrors: ["Setting $M = 200$ instead of halving the mass.", "Using $\\log_{10}$ instead of $\\ln$."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$y$ varies directly with $x^3$. When $x = 3$, $y = 54$. Find the value of $y$ when $x = 2$.",
          response: { type: "numeric", parts: [{ label: "$y$", answer: 16 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Direct variation", statement: "$y = kx^3$ for direct variation with $x^3$." },
            ],
            steps: [
              { reasoning: "Find the constant of variation.", working: "54 = 27k \\Rightarrow k = 2", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 2$.", working: "y = 2(8)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "y = 16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$",
            commonErrors: ["Using $y = kx$ instead of $kx^3$, giving $y = 12$.", "Cubing incorrectly, e.g. $2^3 = 6$."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Solve $5(1.5)^t = 60$ for $t$, giving your answer to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "$t$", answer: 6.13, tolerance: 0.005 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithms", statement: "$a^x = c \\Leftrightarrow x = \\frac{\\ln c}{\\ln a}$." },
            ],
            steps: [
              { reasoning: "Divide both sides by $5$.", working: "1.5^t = 12", marks: 1, markCode: "M" },
              { reasoning: "Take logarithms of both sides.", working: "t = \\frac{\\ln 12}{\\ln 1.5} = \\frac{2.4849}{0.4055}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to 3 significant figures.", working: "t = 6.13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$t = 6.13$",
            commonErrors: ["Taking logarithms before isolating the exponential.", "Using $\\ln 1.5$ in the numerator."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The number $N$ of bacteria in a culture after $t$ hours is modelled by $N(t) = 400(1.15)^t$.",
          parts: [
            { label: "a", prompt: "Find the number of bacteria after 3 hours.", marks: 2 },
            { label: "b", prompt: "Find the time at which the culture reaches 2000 bacteria, giving your answer to 3 significant figures.", marks: 3 },
            { label: "c", prompt: "State what the value $1.15$ represents in this context.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential model", statement: "$N = N_0 r^t$ with growth factor $r = 1.15$." },
              { kind: "definition", name: "Logarithms", statement: "$a^t = c \\Leftrightarrow t = \\frac{\\ln c}{\\ln a}$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $t = 3$.", working: "N(3) = 400(1.15)^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate $1.15^3 = 1.520875$.", working: "400 \\times 1.520875 = 608.35 \\approx 608", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set $N(t) = 2000$.", working: "400(1.15)^t = 2000 \\Rightarrow 1.15^t = 5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Take logarithms.", working: "t = \\frac{\\ln 5}{\\ln 1.15}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round.", working: "t = 11.5 \\text{ hours (3 s.f.)}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The growth factor: the population is multiplied by $1.15$ each hour, a $15\\%$ increase per hour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $608$ bacteria. (b) $t = 11.5$ hours. (c) The hourly growth factor, a $15\\%$ increase per hour.",
            commonErrors: ["Computing $400 \\times 1.15 \\times 3$.", "Forgetting to divide by $400$ before taking logarithms."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "The pressure $P$ units of a gas is inversely proportional to its volume $V$ units when the temperature is constant. When $V = 4$, $P = 300$.",
          parts: [
            { label: "a", prompt: "Find the constant of variation $k$.", marks: 1 },
            { label: "b", prompt: "Find the pressure when the volume is $10$ units.", marks: 2 },
            { label: "c", prompt: "Find the volume when the pressure is $150$ units.", marks: 2 },
            { label: "d", prompt: "State, with a reason, what happens to the pressure as the volume becomes very large.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse variation", statement: "$P = \\frac{k}{V}$, so $PV = k$ is constant." },
            ],
            steps: [
              { part: "a", reasoning: "Use $PV = k$ with the given values.", working: "k = 300 \\times 4 = 1200", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Substitute $V = 10$ into $P = \\frac{1200}{V}$.", working: "P = \\frac{1200}{10}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "P = 120", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $P = 150$ and solve for $V$.", working: "150 = \\frac{1200}{V} \\Rightarrow V = \\frac{1200}{150}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "V = 8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "As $V \\to \\infty$, $P = \\frac{1200}{V} \\to 0$: the pressure decreases towards zero but never becomes negative.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the limiting behaviour in context.", working: "P \\to 0 \\text{ as } V \\to \\infty", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $k = 1200$. (b) $P = 120$. (c) $V = 8$. (d) $P$ decreases towards $0$ as $V$ increases.",
            commonErrors: ["Rearranging incorrectly in (c).", "Claiming the pressure becomes negative for large volumes."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which equation represents a relationship in which $y$ is inversely proportional to $x^3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = \\dfrac{k}{x^3}$" },
              { id: "b", text: "$y = kx$" },
              { id: "c", text: "$y = \\dfrac{k}{x}$" },
              { id: "d", text: "$y = kx^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse variation", statement: "Inverse variation with $x^n$ has the form $y = \\frac{k}{x^n}$." },
            ],
            steps: [
              { reasoning: "Identify the form for inverse variation with cube.", working: "y = \\frac{k}{x^3}", marks: 1, markCode: "M" },
              { reasoning: "Match to the choices.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y = \\frac{k}{x^3}$",
            commonErrors: ["Confusing direct and inverse variation.", "Using $x$ instead of $x^3$ in the denominator."],
          },
        },
        {
          id: "aisl-u2-power-exp-cubic-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The mass of a substance is modelled by $M(t) = M_0 e^{-0.02t}$, where $t$ is in years. What does the value $-0.02$ represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The half-life of the substance in years" },
              { id: "b", text: "The initial mass of the substance" },
              { id: "c", text: "A decay of exactly $2\\%$ of the original mass each year" },
              { id: "d", text: "A continuous decay rate of $2\\%$ per year" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exponential decay", statement: "In $M = M_0 e^{-\\lambda t}$, $\\lambda$ is the continuous decay rate per unit time." },
            ],
            steps: [
              { reasoning: "Identify $\\lambda = 0.02$ in the model.", working: "\\lambda = 0.02", marks: 1, markCode: "M" },
              { reasoning: "Interpret as a continuous rate of $2\\%$ per year.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A continuous decay rate of $2\\%$ per year",
            commonErrors: ["Confusing the continuous rate with the discrete annual decay factor.", "Identifying $-0.02$ as the half-life."],
          },
        },
      ],
    },
  ],
};
