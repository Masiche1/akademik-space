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
              { id: "a", text: "$3$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$-\\frac{1}{3}$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$-3$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "a",
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
