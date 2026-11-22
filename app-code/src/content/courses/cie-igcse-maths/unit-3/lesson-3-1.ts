import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ciem-u3-lesson-3-1",
  code: "3-1",
  title: "Straight Lines",
  goal: "I CAN find gradients, write equations of straight lines, and use parallel and perpendicular line relationships.",
  standards: ["0580 3.1", "0580 3.2"],
  vocabulary: [
    { term: "Gradient", definition: "The measure of steepness of a line: $m=\\frac{\\text{change in }y}{\\text{change in }x}=\\frac{y_2-y_1}{x_2-x_1}$." },
    { term: "Equation of a line", definition: "A relationship satisfied by every point $(x,y)$ on the line; common forms $y=mx+c$ and $ax+by=c$." },
    { term: "Y-intercept", definition: "The point where a line crosses the $y$-axis, at $x=0$; equals $c$ in $y=mx+c$." },
    { term: "X-intercept", definition: "The point where a line crosses the $x$-axis, at $y=0$." },
    { term: "Parallel lines", definition: "Lines with the same gradient that never meet." },
    { term: "Perpendicular lines", definition: "Lines meeting at $90^\\circ$; their gradients multiply to $-1$." },
    { term: "Midpoint", definition: "The point halfway between two points: $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$." },
  ],
  concepts: [
    {
      id: "ciem-u3-gradient-equation",
      title: "Gradient and equation of a line",
      skill: "Calculate gradients, write equations of lines, and find intercepts.",
      lesson: {
        sections: [
          {
            heading: "Gradient",
            body: "The gradient measures steepness: $m=\\frac{y_2-y_1}{x_2-x_1}$. For the line through $(1,2)$ and $(3,8)$: $m=\\frac{8-2}{3-1}=\\frac{6}{2}=3$.\n\nA positive gradient rises left-to-right; negative falls; zero is horizontal; undefined is vertical.",
          },
          {
            heading: "Equation y = mx + c",
            body: "Once you know the gradient $m$ and a point $(x_1,y_1)$ on the line, substitute into $y-y_1=m(x-x_1)$ and rearrange to $y=mx+c$.\n\nFor a line through $(2,3)$ with gradient 4: $y-3=4(x-2)$, so $y=4x-5$. The $y$-intercept is $-5$; the $x$-intercept is found by setting $y=0$: $x=\\frac{5}{4}$.",
          },
          {
            heading: "Checking points on a line",
            body: "A point lies on a line exactly when its coordinates satisfy the equation. For $y=2x+2$, the point $(7,16)$ works because $2(7)+2=16$.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
          { name: "Gradient-intercept form", statement: "$y=mx+c$" },
        ],
        workedExample: {
          problem: "Find the equation of the line through $A(1,4)$ and $B(5,12)$.",
          solution: "Gradient $m=\\frac{12-4}{5-1}=\\frac{8}{4}=2$. Using point $A$: $y-4=2(x-1)$, so $y=2x+2$. Check with $B$: $2(5)+2=12$ ✓",
        },
      },
      questions: [
        {
          id: "ciem-u3-gradient-equation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the gradient of the line through the points $(1,2)$ and $(3,8)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
            ],
            steps: [
              { reasoning: "Apply the gradient formula.", working: "m=\\frac{8-2}{3-1}=\\frac{6}{2}=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Inverting the ratio to get $\\frac{1}{3}$.", "Subtracting coordinates in the wrong order."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The line $y=2x+5$ passes through a point. Find the value of $y$ when $x=4$.",
          response: { type: "numeric", parts: [{ label: "y", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equation of a line", statement: "Every point on the line satisfies $y=mx+c$." },
            ],
            steps: [
              { reasoning: "Substitute $x=4$.", working: "y=2(4)+5=13", marks: 1, markCode: "M" },
              { reasoning: "State the value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=13$",
            commonErrors: ["Computing $2\\times4+5$ as $2\\times(4+5)=18$."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the equation of the line that passes through $(2,3)$ and has gradient 4. Give your answer in the form $y=mx+c$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Substitute the point and gradient into point-gradient form.", working: "y-3=4(x-2)", marks: 1, markCode: "M" },
              { reasoning: "Expand and collect into $y=mx+c$.", working: "y=4x-8+3=4x-5", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=4x-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=4x-5$",
            commonErrors: ["Sign error on the constant: $y=4x+11$.", "Writing $y=4x-3$ by forgetting to expand."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The line $L$ passes through the points $A(1,4)$ and $B(5,12)$.",
          parts: [
            { label: "a", prompt: "Find the gradient of $L$.", marks: 2 },
            { label: "b", prompt: "Find the equation of $L$ in the form $y=mx+c$.", marks: 3 },
            { label: "c", prompt: "Write down the coordinates of the points where $L$ crosses the $x$-axis and the $y$-axis.", marks: 2 },
            { label: "d", prompt: "Show that the point $(7,16)$ lies on $L$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the gradient formula to $A$ and $B$.", working: "m=\\frac{12-4}{5-1}=\\frac{8}{4}=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the gradient.", working: "m=2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use point-gradient form with $A$.", working: "y-4=2(x-1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand and rearrange.", working: "y=2x-2+4=2x+2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the equation.", working: "y=2x+2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$y$-intercept at $x=0$; $x$-intercept at $y=0$.", working: "x=0\\Rightarrow y=2;\\quad y=0\\Rightarrow x=-1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both intercepts.", working: "(0,2)\\text{ and }(-1,0)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x=7$ into the equation.", working: "y=2(7)+2=16", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclude the point satisfies the equation, so it lies on $L$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $m=2$ (b) $y=2x+2$ (c) $(0,2)$ and $(-1,0)$ (d) shown",
            commonErrors: ["In (c) giving only one intercept.", "In (d) substituting into the wrong equation or only checking one coordinate."],
            examinerNote: "Part (d) is a 'show that' — the substitution must be shown.",
          },
        },
        {
          id: "ciem-u3-gradient-equation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the gradient of the line $y=5x-2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{5}$" },
              { id: "b", text: "0" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gradient", statement: "In $y=mx+c$, $m$ is the gradient." },
            ],
            steps: [
              { reasoning: "Read off the coefficient of $x$.", working: "m=5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $m=5$",
            commonErrors: ["Reading the constant term $-2$ as the gradient.", "Taking the reciprocal to get $\\frac{1}{5}$."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Find the $y$-intercept of the line $y=3x+7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "3" },
              { id: "c", text: "$(7,0)$" },
              { id: "d", text: "$(0,3)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "y-intercept", statement: "In $y=mx+c$, $c$ is the value of $y$ when $x=0$ — the $y$-intercept." },
            ],
            steps: [
              { reasoning: "Set $x=0$: $y=3(0)+7=7$; the intercept value is $c=7$.", working: "c=7", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $7$",
            commonErrors: ["Confusing the gradient 3 with the intercept.", "Giving the point $(0,7)$ when asked for the value."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Find the gradient of the line $2x+3y=12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{3}$" },
              { id: "b", text: "$-6$" },
              { id: "c", text: "$-\\frac{2}{3}$" },
              { id: "d", text: "$-\\frac{3}{2}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Gradient from general form", statement: "Rearrange $ax+by=c$ into $y=mx+c$ to read the gradient $m=-\\frac{a}{b}$." },
            ],
            steps: [
              { reasoning: "Rearrange: $3y=12-2x$, so $y=-\\frac{2}{3}x+4$.", working: "m=-\\frac{2}{3}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $m=-\\frac{2}{3}$",
            commonErrors: ["Writing $m=-\\frac{3}{2}$ by inverting the fraction.", "Forgetting the negative sign."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The line $y=4x-3$ passes through a point. Find the value of $y$ when $x=-1$. Enter the value.",
          response: { type: "numeric", parts: [{ label: "y", answer: -7 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Evaluating a linear function", statement: "Substitute the $x$-value into $y=mx+c$." },
            ],
            steps: [
              { reasoning: "Substitute $x=-1$.", working: "y=4(-1)-3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, taking care with the negative.", working: "=-4-3=-7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-7$",
            commonErrors: ["Computing $4(-1)-3=-1$ by sign error.", "Writing $y=4(-1)+3=-1$."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the line that passes through $(0,5)$ and has gradient $-2$. Give your answer in the form $y=mx+c$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Substitute $m=-2$ and the point $(0,5)$ into point-gradient form.", working: "y-5=-2(x-0)", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "y=-2x+5", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=-2x+5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-2x+5$",
            commonErrors: ["Writing $y=-2x-5$ — sign error on the constant.", "Using $y=mx+c$ and forgetting to use the point to find $c$."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the equation of the line that passes through $(-2,1)$ and $(2,9)$. Give your answer in the form $y=mx+c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Gradient m", answer: 2 },
              { label: "Intercept c", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Compute the gradient.", working: "m=\\frac{9-1}{2-(-2)}=\\frac{8}{4}=2", marks: 1, markCode: "M" },
              { reasoning: "Substitute a point to find $c$.", working: "1=2(-2)+c\\Rightarrow c=5", marks: 1, markCode: "M" },
              { reasoning: "State $m$ and $c$.", working: "y=2x+5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2x+5$ ($m=2$, $c=5$)",
            commonErrors: ["Gradient sign error: $\\frac{9-1}{-2-2}$ gives $-2$.", "Using only one point and guessing $c$."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The line $L$ passes through the points $P(2,-1)$ and $Q(6,3)$.",
          parts: [
            { label: "a", prompt: "Find the gradient of $L$.", marks: 2 },
            { label: "b", prompt: "Find the equation of $L$ in the form $y=mx+c$.", marks: 3 },
            { label: "c", prompt: "Write down the coordinates of the point where $L$ crosses the $x$-axis.", marks: 2 },
            { label: "d", prompt: "Show that the point $(4,1)$ lies on $L$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) x-intercept", answer: 3 },
              { label: "(d) check", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the gradient formula.", working: "m=\\frac{3-(-1)}{6-2}=\\frac{4}{4}=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the gradient.", working: "m=1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use point-gradient form with $P$.", working: "y-(-1)=1(x-2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify to $y=mx+c$.", working: "y=x-3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the equation.", working: "y=x-3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $y=0$ and solve for $x$.", working: "0=x-3\\Rightarrow x=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the intercept.", working: "(3,0)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x=4$ into the equation.", working: "y=4-3=1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Since $y=1$ matches, the point lies on $L$.", working: "(4,1)\\text{ satisfies }y=x-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $m=1$ (b) $y=x-3$ (c) $(3,0)$ (d) shown",
            commonErrors: ["In (c) setting $x=0$ instead of $y=0$.", "In (d) only checking one coordinate."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what the gradient of a straight line represents, and how it is calculated from two points.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gradient", statement: "The gradient measures steepness: change in $y$ per unit change in $x$." },
            ],
            steps: [
              { reasoning: "Gradient is the ratio of vertical change to horizontal change between two points.", marks: 1, markCode: "M" },
              { reasoning: "For points $(x_1,y_1)$ and $(x_2,y_2)$, $m=\\frac{y_2-y_1}{x_2-x_1}$.", marks: 1, markCode: "M" },
              { reasoning: "A larger $|m|$ means a steeper line; negative $m$ means the line slopes downwards.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradient = $\\frac{\\text{rise}}{\\text{run}}=\\frac{y_2-y_1}{x_2-x_1}$, measuring steepness.",
            commonErrors: ["Reversing the formula to $\\frac{x_2-x_1}{y_2-y_1}$."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the equation of the line that passes through $(4,1)$ and is perpendicular to $y=2x+1$. Give your answer in the form $y=mx+c$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Perpendicular gradients", statement: "$m_1\\times m_2=-1$; perpendicular to $m=2$ means $m=-\\frac{1}{2}$." },
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "The given line has gradient 2, so the perpendicular gradient is $-\\frac{1}{2}$.", working: "m=-\\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the point and gradient.", working: "y-1=-\\frac{1}{2}(x-4)", marks: 1, markCode: "M" },
              { reasoning: "Expand and rearrange.", working: "y=-\\frac{1}{2}x+3", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=-\\frac{1}{2}x+3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-\\frac{1}{2}x+3$",
            commonErrors: ["Using $m=2$ or $m=-2$ instead of the negative reciprocal $-\\frac{1}{2}$."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Line $L_1$ has equation $y=3x-2$. Line $L_2$ passes through $(0,4)$.",
          parts: [
            { label: "a", prompt: "Find the gradient of $L_1$.", marks: 1 },
            { label: "b", prompt: "Given that $L_1$ and $L_2$ are parallel, find the gradient of $L_2$.", marks: 1 },
            { label: "c", prompt: "Find the equation of $L_2$ in the form $y=mx+c$.", marks: 2 },
            { label: "d", prompt: "Explain whether $L_1$ and $L_2$ intersect.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel lines", statement: "Parallel lines have the same gradient." },
            ],
            steps: [
              { part: "a", reasoning: "Read off the coefficient of $x$.", working: "m=3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Parallel lines share the same gradient.", working: "m=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use $y=mx+c$ with the point $(0,4)$.", working: "4=3(0)+c\\Rightarrow c=4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the equation.", working: "y=3x+4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Same gradient but different intercepts means the lines never meet.", working: "3x-2\\ne3x+4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Conclude they are parallel and do not intersect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $m=3$ (b) $m=3$ (c) $y=3x+4$ (d) no — parallel lines do not intersect",
            commonErrors: ["In (c) using the gradient of $L_1$ but the intercept of $L_1$.", "Claiming the lines intersect at $(0,4)$."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the gradient of the line $y=-4x+9$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "$-\\frac{1}{4}$" },
              { id: "c", text: "$-4$" },
              { id: "d", text: "$9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gradient", statement: "In $y=mx+c$, $m$ is the gradient." },
            ],
            steps: [
              { reasoning: "Read off the coefficient of $x$, including its sign.", working: "m=-4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $m=-4$",
            commonErrors: ["Dropping the negative sign to get 4."],
          },
        },
        {
          id: "ciem-u3-gradient-equation-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The line $y=mx+c$ passes through $(1,5)$ and $(3,11)$. What is the value of $c$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "8" },
              { id: "c", text: "3" },
              { id: "d", text: "2" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
            ],
            steps: [
              { reasoning: "$m=\\frac{11-5}{3-1}=3$; then $5=3(1)+c$ gives $c=2$.", working: "c=2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $c=2$",
            commonErrors: ["Using $c=5$ — confusing the $y$-value with the intercept."],
          },
        },
      ],
    },
    {
      id: "ciem-u3-parallel-perpendicular",
      title: "Parallel, perpendicular and midpoint",
      skill: "Use gradient relationships for parallel and perpendicular lines, and find midpoints.",
      lesson: {
        sections: [
          {
            heading: "Parallel lines",
            body: "Parallel lines have the **same gradient**. A line parallel to $y=3x+1$ has gradient 3; its equation is $y=3x+c$ for some $c$.",
          },
          {
            heading: "Perpendicular lines",
            body: "Perpendicular lines have gradients that are **negative reciprocals**: $m_1\\times m_2=-1$. A line perpendicular to gradient 3 has gradient $-\\frac{1}{3}$. A horizontal line is perpendicular to a vertical line.",
          },
          {
            heading: "Midpoint of a segment",
            body: "The midpoint averages the coordinates: $M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$. For $(2,4)$ and $(6,10)$: $M=(4,7)$.",
          },
        ],
        keyFormulas: [
          { name: "Parallel", statement: "$m_1=m_2$" },
          { name: "Perpendicular", statement: "$m_1\\times m_2=-1$" },
          { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
          { name: "Distance", statement: "$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
        ],
        workedExample: {
          problem: "Find the gradient of the line perpendicular to $y=3x+1$.",
          solution: "The given gradient is 3, so the perpendicular gradient is $-\\frac{1}{3}$ (negative reciprocal).",
        },
      },
      questions: [
        {
          id: "ciem-u3-parallel-perpendicular-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of a line perpendicular to $y=3x+1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$-\\frac{1}{3}$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$-3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Perpendicular gradients", statement: "$m_1\\times m_2=-1$; perpendicular gradients are negative reciprocals." },
            ],
            steps: [
              { reasoning: "Take the negative reciprocal of 3.", working: "m=-\\frac{1}{3}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $-\\frac{1}{3}$",
            commonErrors: ["Forgetting the negative sign.", "Inverting without negating."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the midpoint of the line segment joining $(2,4)$ and $(6,10)$. Enter the $x$-coordinate and the $y$-coordinate.",
          response: {
            type: "numeric",
            parts: [
              { label: "x", answer: 4 },
              { label: "y", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "Average the coordinates.", working: "\\left(\\frac{2+6}{2},\\frac{4+10}{2}\\right)=(4,7)", marks: 1, markCode: "M" },
              { reasoning: "State both coordinates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(4,7)$",
            commonErrors: ["Adding coordinates without dividing by 2.", "Swapping $x$ and $y$."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the length of the line segment joining $(0,0)$ and $(3,4)$.",
          response: { type: "numeric", parts: [{ label: "Length", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ (Pythagoras on the coordinate differences)." },
            ],
            steps: [
              { reasoning: "Apply the distance formula.", working: "d=\\sqrt{(3-0)^2+(4-0)^2}=\\sqrt{9+16}", marks: 1, markCode: "M" },
              { reasoning: "Simplify under the root.", working: "=\\sqrt{25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Computing $3+4=7$ instead of using Pythagoras.", "Forgetting the square root."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The points $A(2,4)$ and $B(8,10)$ are joined by a line segment.",
          parts: [
            { label: "a", prompt: "Find the coordinates of the midpoint of $AB$.", marks: 2 },
            { label: "b", prompt: "Find the gradient of $AB$, and hence the gradient of the perpendicular bisector of $AB$.", marks: 3 },
            { label: "c", prompt: "Find the equation of the perpendicular bisector of $AB$ in the form $y=mx+c$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
              { kind: "law", name: "Perpendicular gradients", statement: "$m_1\\times m_2=-1$; a perpendicular bisector passes through the midpoint." },
            ],
            steps: [
              { part: "a", reasoning: "Average the coordinates.", working: "M=\\left(\\frac{2+8}{2},\\frac{4+10}{2}\\right)=(5,7)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the midpoint.", working: "(5,7)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gradient of $AB$.", working: "m_{AB}=\\frac{10-4}{8-2}=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Perpendicular gradient is the negative reciprocal.", working: "m_{\\perp}=-1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both gradients.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use point-gradient form with the midpoint $(5,7)$ and $m=-1$.", working: "y-7=-1(x-5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Expand.", working: "y=-x+5+7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify to $y=mx+c$.", working: "y=-x+12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Verify it passes through the midpoint: $-5+12=7$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(5,7)$ (b) $m_{AB}=1$, perpendicular gradient $=-1$ (c) $y=-x+12$",
            commonErrors: ["Using the same gradient for the perpendicular bisector.", "Using point $A$ or $B$ instead of the midpoint."],
            examinerNote: "The perpendicular bisector must pass through the midpoint — check $y=-x+12$ gives 7 when $x=5$.",
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of a line parallel to $y=-2x+3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "$-\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{1}{2}$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel lines", statement: "Parallel lines have the same gradient." },
            ],
            steps: [
              { reasoning: "Parallel lines share the gradient $m=-2$.", working: "m=-2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $m=-2$",
            commonErrors: ["Taking the negative reciprocal — that gives the perpendicular gradient."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the gradient of a line perpendicular to $y=4x-1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-4$" },
              { id: "b", text: "4" },
              { id: "c", text: "$-\\frac{1}{4}$" },
              { id: "d", text: "$\\frac{1}{4}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Perpendicular lines", statement: "$m_1\\times m_2=-1$; the perpendicular gradient is the negative reciprocal." },
            ],
            steps: [
              { reasoning: "Negative reciprocal of 4 is $-\\frac{1}{4}$.", working: "m=-\\frac{1}{4}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $m=-\\frac{1}{4}$",
            commonErrors: ["Writing $m=\\frac{1}{4}$ and forgetting the negative sign."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Are the lines $y=2x+1$ and $y=2x-5$ parallel, perpendicular, or neither?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Parallel" },
              { id: "b", text: "Neither" },
              { id: "c", text: "Perpendicular" },
              { id: "d", text: "Identical" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel lines", statement: "Lines with equal gradients are parallel (or identical if intercepts also match)." },
            ],
            steps: [
              { reasoning: "Both gradients are 2; the intercepts differ ($1$ vs $-5$), so they are distinct parallel lines.", working: "m_1=m_2=2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Parallel",
            commonErrors: ["Calling them identical — the intercepts differ."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the midpoint of the line segment joining $(1,3)$ and $(5,7)$. Enter the $x$-coordinate and the $y$-coordinate.",
          response: { type: "numeric", parts: [{ label: "x", answer: 3 }, { label: "y", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "Average the coordinates.", working: "\\left(\\frac{1+5}{2},\\frac{3+7}{2}\\right)=(3,5)", marks: 1, markCode: "M" },
              { reasoning: "State both coordinates.", working: "(3,5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,5)$",
            commonErrors: ["Adding without dividing by 2.", "Swapping coordinates."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the length of the line segment joining $(1,1)$ and $(4,5)$. Enter the length.",
          response: { type: "numeric", parts: [{ label: "Length", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compute the differences: $\\Delta x=3$, $\\Delta y=4$.", working: "\\sqrt{3^2+4^2}", marks: 1, markCode: "M" },
              { reasoning: "Apply Pythagoras inside the root.", working: "=\\sqrt{9+16}=\\sqrt{25}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Writing $\\sqrt{3^2+4^2}=3+4=7$.", "Forgetting to square the differences."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the length of the line segment joining $(2,-1)$ and $(6,3)$. Enter the length, giving your answer to 2 decimal places if necessary.",
          response: { type: "numeric", parts: [{ label: "Length", answer: 5.66, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { reasoning: "Compute the differences: $\\Delta x=4$, $\\Delta y=4$.", working: "\\sqrt{4^2+4^2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the root.", working: "=\\sqrt{32}=4\\sqrt{2}\\approx5.66", marks: 1, markCode: "M" },
              { reasoning: "State the rounded value.", working: "5.66", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\sqrt{2}\\approx5.66$",
            commonErrors: ["Writing $\\sqrt{32}=16$ by halving instead of rooting.", "Computing $\\Delta y$ as $3-(-1)=2$."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The points $A(0,0)$, $B(6,0)$ and $C(3,4)$ are the vertices of a triangle.",
          parts: [
            { label: "a", prompt: "Find the midpoint of $AB$.", marks: 2 },
            { label: "b", prompt: "Find the midpoint of $BC$.", marks: 2 },
            { label: "c", prompt: "Find the length of $AC$.", marks: 2 },
            { label: "d", prompt: "Find the area of triangle $ABC$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) midpoint x", answer: 3 },
              { label: "(a) midpoint y", answer: 0 },
              { label: "(b) midpoint x", answer: 4.5 },
              { label: "(b) midpoint y", answer: 2 },
              { label: "(c) length AC", answer: 5 },
              { label: "(d) area", answer: 12, unit: "square units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
            ],
            steps: [
              { part: "a", reasoning: "Average the coordinates of $A$ and $B$.", working: "\\left(\\frac{0+6}{2},\\frac{0+0}{2}\\right)=(3,0)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the midpoint.", working: "(3,0)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Average the coordinates of $B$ and $C$.", working: "\\left(\\frac{6+3}{2},\\frac{0+4}{2}\\right)=(4.5,2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the midpoint.", working: "(4.5,2)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply the distance formula to $A$ and $C$.", working: "AC=\\sqrt{3^2+4^2}=\\sqrt{25}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Take $AB$ as the base: length 6, height is the $y$-coordinate of $C$.", working: "\\text{base}=6,\\ \\text{height}=4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply $\\frac{1}{2}\\times\\text{base}\\times\\text{height}$.", working: "A=\\frac{1}{2}\\times6\\times4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and state.", working: "=12\\text{ square units}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(3,0)$ (b) $(4.5,2)$ (c) $5$ (d) $12$ square units",
            commonErrors: ["In (d) using $AC$ as base without finding the corresponding height.", "In (c) computing $\\sqrt{3+4}=\\sqrt{7}$."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why two parallel lines have the same gradient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Parallel lines", statement: "Parallel lines never meet, so they have identical steepness." },
            ],
            steps: [
              { reasoning: "Parallel lines have the same direction — neither rises faster than the other.", marks: 1, markCode: "M" },
              { reasoning: "Gradient measures steepness ($\\frac{\\text{rise}}{\\text{run}}$), so equal steepness means equal gradient.", marks: 1, markCode: "M" },
              { reasoning: "Conclude equal gradients; only the intercept $c$ differs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Parallel lines have the same steepness, hence the same gradient.",
            commonErrors: ["Claiming parallel lines have gradient 0 — only horizontal lines do."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Find the equation of the line that passes through $(1,2)$ and is perpendicular to $y=3x+1$. Give your answer in the form $y=mx+c$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Perpendicular lines", statement: "$m_1\\times m_2=-1$; perpendicular to $m=3$ means $m=-\\frac{1}{3}$." },
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Find the perpendicular gradient.", working: "m=-\\frac{1}{3}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the point.", working: "y-2=-\\frac{1}{3}(x-1)", marks: 1, markCode: "M" },
              { reasoning: "Expand and simplify.", working: "y=-\\frac{1}{3}x+\\frac{7}{3}", marks: 1, markCode: "M" },
              { reasoning: "State the equation.", working: "y=-\\frac{1}{3}x+\\frac{7}{3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-\\frac{1}{3}x+\\frac{7}{3}$",
            commonErrors: ["Using $m=-3$ instead of $-\\frac{1}{3}$."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "The points $A(1,1)$ and $B(7,5)$ are joined by a line segment.",
          parts: [
            { label: "a", prompt: "Find the midpoint of $AB$.", marks: 2 },
            { label: "b", prompt: "Find the gradient of $AB$.", marks: 1 },
            { label: "c", prompt: "Find the gradient of the perpendicular bisector of $AB$.", marks: 1 },
            { label: "d", prompt: "Find the equation of the perpendicular bisector of $AB$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
              { kind: "law", name: "Perpendicular lines", statement: "$m_1\\times m_2=-1$." },
            ],
            steps: [
              { part: "a", reasoning: "Average the coordinates.", working: "\\left(\\frac{1+7}{2},\\frac{1+5}{2}\\right)=(4,3)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the midpoint.", working: "(4,3)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply the gradient formula.", working: "m=\\frac{5-1}{7-1}=\\frac{4}{6}=\\frac{2}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Negative reciprocal of $\\frac{2}{3}$.", working: "m=-\\frac{3}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Use point-gradient form through the midpoint $(4,3)$.", working: "y-3=-\\frac{3}{2}(x-4)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify to $y=mx+c$.", working: "y=-\\frac{3}{2}x+9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $(4,3)$ (b) $m=\\frac{2}{3}$ (c) $m=-\\frac{3}{2}$ (d) $y=-\\frac{3}{2}x+9$",
            commonErrors: ["Using the midpoint of $AB$ but the gradient of $AB$ for the bisector — gradients must be perpendicular.", "Sign error in the negative reciprocal."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two lines are perpendicular. One has gradient $5$. What is the gradient of the other line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{1}{5}$" },
              { id: "b", text: "$-5$" },
              { id: "c", text: "$\\frac{1}{5}$" },
              { id: "d", text: "5" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Perpendicular lines", statement: "$m_1\\times m_2=-1$; the perpendicular gradient is the negative reciprocal." },
            ],
            steps: [
              { reasoning: "Negative reciprocal of 5 is $-\\frac{1}{5}$; check $5\\times(-\\frac{1}{5})=-1$.", working: "m=-\\frac{1}{5}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** $m=-\\frac{1}{5}$",
            commonErrors: ["Writing $m=\\frac{1}{5}$ without the negative sign."],
          },
        },
        {
          id: "ciem-u3-parallel-perpendicular-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The midpoint of a line segment is $(3,4)$ and one endpoint is $(1,2)$. What are the coordinates of the other endpoint?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4,5)$" },
              { id: "b", text: "$(2,3)$" },
              { id: "c", text: "$(5,4)$" },
              { id: "d", text: "$(5,6)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$; rearrange to find the missing endpoint." },
            ],
            steps: [
              { reasoning: "$x_2=2\\times3-1=5$, $y_2=2\\times4-2=6$.", working: "(5,6)", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $(5,6)$",
            commonErrors: ["Averaging again to get $(2,3)$ instead of doubling and subtracting."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u3-straight-lines-notes",
      title: "Straight lines — revision notes",
      summary: "Gradients, equations of lines, parallel and perpendicular relationships, midpoints and distances.",
      sections: [
        {
          heading: "Gradient",
          body: "$m=\\frac{y_2-y_1}{x_2-x_1}$ — always change in $y$ over change in $x$, in the same order for both points.\n\nFor $(1,2)$ and $(3,8)$: $m=\\frac{8-2}{3-1}=3$. Positive rises, negative falls, zero horizontal, undefined vertical.",
        },
        {
          heading: "Equation of a line",
          body: "With gradient $m$ and point $(x_1,y_1)$: $y-y_1=m(x-x_1)$, then rearrange.\n\n**Worked example.** Through $(2,3)$, gradient 4: $y-3=4(x-2) \\Rightarrow y=4x-5$. $y$-intercept $(0,-5)$; $x$-intercept $(-\\frac54,0)$ from setting $y=0$.",
        },
        {
          heading: "Parallel and perpendicular",
          body: "- Parallel: same gradient. $y=3x+1 \\parallel y=3x-7$.\n- Perpendicular: gradients multiply to $-1$ (negative reciprocals). Perpendicular to $m=3$ is $m=-\\frac13$.\n\nHorizontal $\\perp$ vertical is the exception — no finite gradient product.",
        },
        {
          heading: "Midpoint and distance",
          body: "Midpoint $=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$ — just average each coordinate.\n\nDistance $=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ — Pythagoras on the differences. $(0,0)$ to $(3,4)$: $\\sqrt{9+16}=5$.",
        },
        {
          heading: "Perpendicular bisector",
          body: "Three ingredients: midpoint of the segment, gradient of $AB$, then negative reciprocal for the bisector.\n\n**Worked example.** $A(2,4)$, $B(8,10)$: midpoint $(5,7)$, $m_{AB}=1$, so bisector has $m=-1$: $y-7=-1(x-5) \\Rightarrow y=-x+12$.",
        },
        {
          heading: "Exam technique",
          body: "- 'Show that a point lies on the line': substitute and show the equation holds — show the working.\n- Intercepts: $y$-intercept needs $x=0$; $x$-intercept needs $y=0$. Both are often asked together.\n- For perpendicular problems, write the negative reciprocal explicitly before finding the equation.",
        },
      ],
    },
  ],
};
