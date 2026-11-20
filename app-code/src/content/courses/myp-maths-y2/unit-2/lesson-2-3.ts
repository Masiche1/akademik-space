import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypm2-u2-lesson-2-3",
  code: "2-3",
  title: "Coordinates and Linear Graphs",
  goal: "I CAN use coordinates in four quadrants, plot linear graphs, interpret gradient and intercept in real-life graphs, and find the equation of a line from two points.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Quadrant", definition: "One of the four regions of the coordinate plane made by the $x$-axis and $y$-axis." },
    { term: "Midpoint", definition: "The point exactly halfway between two points. Its coordinates are the means of the two $x$-values and of the two $y$-values." },
    { term: "Gradient", definition: "The steepness of a line: the change in $y$ divided by the change in $x$. It is the rate of change." },
    { term: "$y$-intercept", definition: "The point where a line crosses the $y$-axis, where $x=0$. In $y=mx+c$ it is $c$." },
    { term: "Linear graph", definition: "A straight-line graph. Its equation can be written $y=mx+c$." },
    { term: "Rate of change", definition: "How much one quantity changes for each one-unit change in another, such as euros per hour or km per hour." },
  ],
  concepts: [
    {
      id: "mypm2-u2-coordinates-lines",
      title: "Coordinates, midpoints and plotting lines",
      skill: "Use four-quadrant coordinates, find midpoints and plot lines from tables of values.",
      lesson: {
        sections: [
          {
            heading: "Four quadrants and midpoints",
            body: "The axes cross at the origin $(0,0)$. A point $(x,y)$ is $x$ units across and $y$ units up (negative means left or down). The midpoint of $A(x_1,y_1)$ and $B(x_2,y_2)$ is the mean of the coordinates: $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$. For $(-2,5)$ and $(6,-1)$ the midpoint is $(2,2)$.",
          },
          {
            heading: "Plotting $y=mx+c$",
            body: "Make a table of values by substituting $x$ into the equation. For $y=2x-3$: when $x=-1$, $y=-5$; when $x=0$, $y=-3$; when $x=2$, $y=1$. Plot the points and join them with a ruler. Two points are enough to draw a line, and a third point checks it.",
          },
          {
            heading: "Horizontal and vertical lines",
            body: "A horizontal line has the same $y$-value everywhere: $y=3$. A vertical line has the same $x$-value everywhere: $x=-2$. The $x$-axis is $y=0$ and the $y$-axis is $x=0$. A point is on a line if its coordinates satisfy the equation.",
          },
        ],
        keyFormulas: [
          { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
          { name: "Straight line", statement: "$y=mx+c$" },
        ],
        workedExample: {
          problem: "Find the midpoint of $(-4,3)$ and $(2,-7)$, and check whether it lies on $y=-x-3$.",
          solution: "Midpoint: $x=\\frac{-4+2}{2}=-1$ and $y=\\frac{3+(-7)}{2}=-2$, so $(-1,-2)$. Substitute $x=-1$ into $y=-x-3$: $y=1-3=-2$. This matches, so the midpoint lies on the line.",
        },
      },
      questions: [
        {
          id: "mypm2-u2-coordinates-lines-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the midpoint of $A(-2,5)$ and $B(6,-1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(2,2)$" },
              { id: "b", text: "$(4,4)$" },
              { id: "c", text: "$(-4,6)$" },
              { id: "d", text: "$(4,-6)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "Find the mean of the $x$-values and of the $y$-values.", working: "\\left(\\frac{-2+6}{2},\\frac{5+(-1)}{2}\\right)=(2,2)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(2,2)$",
            commonErrors: ["Adding without halving, giving $(4,4)$.", "Multiplying the coordinates, giving $(-12,-5)$ style answers.", "Subtracting instead of adding the coordinates."],
            examinerNote: "B1 for (2, 2).",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A table of values is made for $y=2x-3$. Work out the value of $y$ when $x=-2$ and when $x=3$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$y$ when $x=-2$", answer: -7 },
              { label: "$y$ when $x=3$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Table of values", statement: "Substitute each $x$-value into the equation to find $y$." },
            ],
            steps: [
              { reasoning: "Substitute $x=-2$. A positive times a negative is negative.", working: "y=2(-2)-3=-4-3=-7", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=3$.", working: "y=2(3)-3=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-7$ when $x=-2$, and $y=3$ when $x=3$",
            commonErrors: ["Calculating $-4+3$ or $2(-2)=4$ and giving $1$.", "Ignoring the $-3$ term."],
            examinerNote: "M1 for correct substitution of -2. A1 for both values correct.",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "The points $P(-7,4)$ and $Q(3,-10)$ are the ends of a line segment. Find the coordinates of the midpoint $M$ of $PQ$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of $M$", answer: -2 },
              { label: "$y$-coordinate of $M$", answer: -3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
              { kind: "law", name: "Signs", statement: "Adding a negative number is the same as subtracting: $4+(-10)=-6$." },
            ],
            steps: [
              { reasoning: "Find the mean of the $x$-coordinates.", working: "\\frac{-7+3}{2}=\\frac{-4}{2}=-2", marks: 1, markCode: "M" },
              { reasoning: "Find the mean of the $y$-coordinates.", working: "\\frac{4+(-10)}{2}=\\frac{-6}{2}=-3", marks: 1, markCode: "M" },
              { reasoning: "State the midpoint. Check: $M$ is 5 across and 7 down from $P$ and also from $Q$ in the other direction.", working: "M(-2,-3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$M(-2,-3)$",
            commonErrors: ["Subtracting the coordinates, giving $(-5,7)$.", "Forgetting to halve, giving $(-4,-6)$.", "Sign errors such as $-7+3=-10$."],
            examinerNote: "M1 for each correct coordinate method. A1 for (-2, -3).",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The points $A(-4,-1)$, $B(2,-1)$ and $C(2,5)$ are three vertices of a square $ABCD$ on a coordinate grid.",
          parts: [
            { label: "a", prompt: "Write down the equation of the line through $A$ and $B$, and the equation of the line through $B$ and $C$.", marks: 2 },
            { label: "b", prompt: "Find the coordinates of the fourth vertex $D$.", marks: 2 },
            { label: "c", prompt: "Find the coordinates of the midpoint of the diagonal $AC$.", marks: 2 },
            { label: "d", prompt: "Show that the line $y=x+3$ passes through $A$, $C$ and the midpoint of $AC$. Explain why the diagonal $AC$ has this equation.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $x$-coordinate of $D$", answer: -4 },
              { label: "(b) $y$-coordinate of $D$", answer: 5 },
              { label: "(c) $x$-coordinate of midpoint", answer: -1 },
              { label: "(c) $y$-coordinate of midpoint", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Horizontal and vertical lines", statement: "A horizontal line has equation $y=k$ and a vertical line has equation $x=k$." },
              { kind: "property", name: "Square", statement: "A square has four equal sides and four right angles, so opposite sides are parallel and equal." },
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { part: "a", reasoning: "$A$ and $B$ both have $y=-1$, so $AB$ is horizontal.", working: "y=-1", marks: 1, markCode: "B" },
              { part: "a", reasoning: "$B$ and $C$ both have $x=2$, so $BC$ is vertical.", working: "x=2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$AB$ and $BC$ have length 6, so the sides are 6 units. $D$ is directly above $A$ and level with $C$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$D$ has the $x$-coordinate of $A$ and the $y$-coordinate of $C$.", working: "D(-4,5)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the mean of the $x$-values and of the $y$-values of $A$ and $C$.", working: "\\left(\\frac{-4+2}{2},\\frac{-1+5}{2}\\right)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "(-1,2)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute each point into $y=x+3$: $A$: $-4+3=-1$. $C$: $2+3=5$. Midpoint: $-1+3=2$. All three satisfy the equation.", working: "-1=-4+3,\\quad 5=2+3,\\quad 2=-1+3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "A straight line is determined by two points. $A$ and $C$ are on the line $y=x+3$, so the line through $A$ and $C$, the diagonal, has this equation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $y=-1$ and $x=2$ (b) $D(-4,5)$ (c) $(-1,2)$ (d) All three points satisfy $y=x+3$, and a straight line is fixed by two points.",
            commonErrors: ["Swapping the equations, giving $x=-1$ for $AB$.", "Choosing $D(2,-1)$ or another point that does not make a square.", "Substituting $x$ and $y$ the wrong way round in part (d)."],
            examinerNote: "In (a) the equations must be written as y = -1 and x = 2, not just the numbers. In (d) accept a verification of A and C with an explanation that two points determine a line.",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the midpoint of $(2,4)$ and $(6,8)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(4,6)$" },
              { id: "b", text: "$(8,12)$" },
              { id: "c", text: "$(3,5)$" },
              { id: "d", text: "$(4,12)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "Find the mean of the coordinates.", working: "\\left(\\frac{2+6}{2},\\frac{4+8}{2}\\right)=(4,6)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(4,6)$",
            commonErrors: ["Adding without halving, giving $(8,12)$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which quadrant does the point $(-3,5)$ lie?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first quadrant" },
              { id: "b", text: "The second quadrant" },
              { id: "c", text: "The third quadrant" },
              { id: "d", text: "The fourth quadrant" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quadrant", statement: "Quadrant II has $x<0$ and $y>0$." },
            ],
            steps: [
              { reasoning: "Negative $x$ means left of the $y$-axis; positive $y$ means above the $x$-axis.", working: "x<0,\\ y>0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The second quadrant",
            commonErrors: ["Choosing the third quadrant by forgetting the $y$-coordinate is positive."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "For the line $y=x-2$, work out the value of $y$ when $x=4$ and when $x=-1$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$y$ when $x=4$", answer: 2 },
              { label: "$y$ when $x=-1$", answer: -3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Table of values", statement: "Substitute each $x$-value into the equation to find $y$." },
            ],
            steps: [
              { reasoning: "Substitute $x=4$.", working: "y=4-2=2", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=-1$: $-1-2=-3$.", working: "y=-1-2=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2$ when $x=4$ and $y=-3$ when $x=-1$",
            commonErrors: ["Computing $-1-2=1$ by sign error."],
            examinerNote: "M1 for $x=4$ substitution. A1 for both values.",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the midpoint of $(1,-3)$ and $(5,7)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate", answer: 3 },
              { label: "$y$-coordinate", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "Find the mean of the $x$-values and of the $y$-values.", working: "\\left(\\frac{1+5}{2},\\frac{-3+7}{2}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "(3,2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(3,2)$",
            commonErrors: ["Subtracting instead of adding before halving."],
            examinerNote: "M1 for the mean method. A1 for (3, 2).",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point lies on the line $y=2x+1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1,2)$" },
              { id: "b", text: "$(2,5)$" },
              { id: "c", text: "$(3,6)$" },
              { id: "d", text: "$(0,1)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point on a line", statement: "A point is on a line if its coordinates satisfy the equation." },
            ],
            steps: [
              { reasoning: "Test each point: $(0,1)$ gives $y=2(0)+1=1$, which matches. $(1,2)$ gives 3, not 2.", working: "2(0)+1=1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $(0,1)$",
            commonErrors: ["Choosing (c), which satisfies $y=2x$ not $y=2x+1$."],
            examinerNote: "B1 for choice (d).",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why the midpoint formula uses the mean (average) of the coordinates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "The midpoint is halfway between two points in both the $x$ and $y$ directions." },
            ],
            steps: [
              { reasoning: "Halfway in the $x$-direction is the mean of the two $x$-values; halfway in the $y$-direction is the mean of the two $y$-values.", marks: 1, markCode: "R" },
              { reasoning: "For $(0,0)$ and $(4,6)$ the midpoint is $(2,3)$, which is indeed halfway along both axes.", working: "\\left(\\frac{0+4}{2},\\frac{0+6}{2}\\right)=(2,3)", marks: 1, markCode: "M" },
            ],
            finalAnswer: "The midpoint averages the coordinates because it is halfway in each direction.",
            commonErrors: ["Saying the midpoint is the sum of the coordinates."],
            examinerNote: "The R mark is for the halfway/mean reasoning.",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "The points $A(-4,-2)$ and $B(8,10)$ are the ends of a diameter of a circle. Find the coordinates of the centre of the circle.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of centre", answer: 2 },
              { label: "$y$-coordinate of centre", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "The centre of a circle is the midpoint of any diameter." },
            ],
            steps: [
              { reasoning: "The centre is the midpoint of $AB$; find the mean of the $x$-values.", working: "\\frac{-4+8}{2}=2", marks: 1, markCode: "M" },
              { reasoning: "Find the mean of the $y$-values.", working: "\\frac{-2+10}{2}=4", marks: 1, markCode: "M" },
              { reasoning: "State the centre.", working: "(2,4)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The centre is $(2,4)$",
            commonErrors: ["Subtracting the coordinates instead of averaging."],
            examinerNote: "M1 for each coordinate. A1 for (2, 4).",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is the equation of a vertical line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=4$" },
              { id: "b", text: "$x=-2$" },
              { id: "c", text: "$y=x+4$" },
              { id: "d", text: "$x+y=4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Horizontal and vertical lines", statement: "A vertical line has the same $x$-value everywhere: $x=k$. A horizontal line has $y=k$." },
            ],
            steps: [
              { reasoning: "A vertical line fixes the $x$-coordinate, so its equation is $x=-2$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $x=-2$",
            commonErrors: ["Choosing (a), which is a horizontal line."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Show that the midpoint of $(1,1)$ and $(5,9)$ lies on the line $y=2x-1$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
              { kind: "principle", name: "Point on a line", statement: "A point is on a line if its coordinates satisfy the equation." },
            ],
            steps: [
              { reasoning: "Find the midpoint.", working: "\\left(\\frac{1+5}{2},\\frac{1+9}{2}\\right)=(3,5)", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=3$ into the equation.", working: "y=2(3)-1=5", marks: 1, markCode: "M" },
              { reasoning: "The $y$-value 5 matches the midpoint's $y$-coordinate, so the midpoint lies on the line.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Midpoint $(3,5)$ and $y=2(3)-1=5$, so it lies on the line.",
            commonErrors: ["Substituting the wrong coordinate order into the equation."],
            examinerNote: "Both the midpoint and the substitution must be correct for full marks.",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The points $A(0,0)$, $B(6,0)$ and $C(6,4)$ are three vertices of a rectangle $ABCD$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Rectangle", statement: "Opposite sides are equal and parallel, so $D$ has the $x$-coordinate of $A$ and the $y$-coordinate of $C$." },
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { reasoning: "$AB$ is horizontal along the $x$-axis and $BC$ is vertical at $x=6$.", marks: 1, markCode: "R" },
              { reasoning: "$D$ is directly above $A$ and level with $C$: $D(0,4)$.", working: "D(0,4)", marks: 1, markCode: "M" },
              { reasoning: "The midpoint of diagonal $AC$ is $\\left(\\frac{0+6}{2},\\frac{0+4}{2}\\right)=(3,2)$.", working: "(3,2)", marks: 1, markCode: "M" },
              { reasoning: "The midpoint of diagonal $BD$ is $\\left(\\frac{6+0}{2},\\frac{0+4}{2}\\right)=(3,2)$, the same point, as expected for a rectangle.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$D(0,4)$; midpoint of $AC$ is $(3,2)$, same as midpoint of $BD$",
            commonErrors: ["Choosing $D(6,4)$, which is $C$ itself."],
            examinerNote: "The second R mark is for recognising the diagonals share a midpoint.",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A treasure map uses coordinates. Point $X(2,-3)$ marks the start and point $Y(8,5)$ marks the end of a path.",
          parts: [
            { label: "a", prompt: "Find the midpoint $M$ of $XY$.", marks: 2 },
            { label: "b", prompt: "A second path goes from $M$ to $Z(4,-7)$. Find the midpoint of $MZ$.", marks: 2 },
            { label: "c", prompt: "Point $W$ is such that $M$ is the midpoint of $XW$. Find the coordinates of $W$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $x$-coordinate of $M$", answer: 5 },
              { label: "(a) $y$-coordinate of $M$", answer: 1 },
              { label: "(b) $x$-coordinate of midpoint of $MZ$", answer: 4.5 },
              { label: "(b) $y$-coordinate of midpoint of $MZ$", answer: -3 },
              { label: "(c) $x$-coordinate of $W$", answer: 8 },
              { label: "(c) $y$-coordinate of $W$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
            ],
            steps: [
              { part: "a", reasoning: "Find the mean of the coordinates of $X$ and $Y$.", working: "\\left(\\frac{2+8}{2},\\frac{-3+5}{2}\\right)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $M(5,1)$.", working: "M(5,1)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Find the mean of the coordinates of $M(5,1)$ and $Z(4,-7)$.", working: "\\left(\\frac{5+4}{2},\\frac{1+(-7)}{2}\\right)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "(4.5,-3)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$M$ is the midpoint of $XW$, so $W$ is the point such that $M$ is halfway: $W=2M-X$.", working: "W=(2\\times5-2,\\,2\\times1-(-3))", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: $W(8,5)$ — which is the same as $Y$.", working: "W(8,5)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $M(5,1)$ (b) $(4.5,-3)$ (c) $W(8,5)$",
            commonErrors: ["In (c) adding instead of doubling: $W=M+X=(7,-2)$."],
            examinerNote: "In (c) accept the answer obtained by solving $\\frac{x+2}{2}=5$ and $\\frac{y-3}{2}=1$.",
          },
        },
        {
          id: "mypm2-u2-coordinates-lines-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Four points are plotted on a coordinate grid: $P(-6,2)$, $Q(2,8)$, $R(6,-4)$ and $S(-2,-10)$.",
          parts: [
            { label: "a", prompt: "Find the midpoint of $PQ$ and the midpoint of $RS$.", marks: 2 },
            { label: "b", prompt: "What does your answer to part (a) tell you about the quadrilateral $PQRS$?", marks: 2 },
            { label: "c", prompt: "Find the midpoint of $PR$ and the midpoint of $QS$.", marks: 2 },
            { label: "d", prompt: "Use your answers to explain whether $PQRS$ is a parallelogram.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Midpoint of $PQ$, $x$", answer: -2 },
              { label: "(a) Midpoint of $PQ$, $y$", answer: 5 },
              { label: "(c) Midpoint of $PR$, $x$", answer: 0 },
              { label: "(c) Midpoint of $PR$, $y$", answer: -1 },
              { label: "(c) Midpoint of $QS$, $x$", answer: 0 },
              { label: "(c) Midpoint of $QS$, $y$", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
              { kind: "property", name: "Parallelogram", statement: "In a parallelogram the diagonals bisect each other, so the midpoints of the diagonals coincide." },
            ],
            steps: [
              { part: "a", reasoning: "Midpoint of $PQ$: $\\left(\\frac{-6+2}{2},\\frac{2+8}{2}\\right)=(-2,5)$. Midpoint of $RS$: $\\left(\\frac{6-2}{2},\\frac{-4-10}{2}\\right)=(2,-7)$.", working: "(-2,5)\\text{ and }(2,-7)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both midpoints.", working: "(-2,5),\\ (2,-7)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The midpoints of $PQ$ and $RS$ are different, so these are not the diagonals of a parallelogram in this pairing; the pairing matters.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Recognise that $PQ$ and $RS$ are opposite sides, not diagonals.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Midpoint of $PR$: $\\left(\\frac{-6+6}{2},\\frac{2-4}{2}\\right)=(0,-1)$. Midpoint of $QS$: $\\left(\\frac{2-2}{2},\\frac{8-10}{2}\\right)=(0,-1)$.", working: "(0,-1)\\text{ and }(0,-1)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both midpoints; they are equal.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The diagonals $PR$ and $QS$ have the same midpoint $(0,-1)$, so they bisect each other.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A quadrilateral whose diagonals bisect each other is a parallelogram, so $PQRS$ is a parallelogram.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $(-2,5)$ and $(2,-7)$ (b) these are midpoints of opposite sides, not diagonals (c) both $(0,-1)$ (d) yes, the diagonals bisect each other",
            commonErrors: ["Assuming any two midpoints being equal proves a parallelogram — the segments must be the diagonals."],
            examinerNote: "In (d) the reasoning must connect equal diagonal midpoints to the parallelogram property.",
          },
        },
      ],
    },
    {
      id: "mypm2-u2-gradient-equation",
      title: "Gradient, rate of change and equation of a line",
      skill: "Interpret gradient and intercept in real-life graphs and find the equation of a line from two points.",
      lesson: {
        sections: [
          {
            heading: "Gradient as rate of change",
            body: "The gradient of a line through $(x_1,y_1)$ and $(x_2,y_2)$ is $m=\\frac{y_2-y_1}{x_2-x_1}$. A positive gradient rises from left to right and a negative gradient falls. In a real-life graph the gradient is a rate: on a distance-time graph it is the speed, and on a cost graph it is the cost per unit.",
          },
          {
            heading: "The intercept in context",
            body: "In $y=mx+c$, the number $c$ is the value of $y$ when $x=0$. On a cost graph this is a fixed charge. On a distance-time graph it is the starting distance. For $C=20h+35$ the gradient 20 means 20 euros per hour, and the intercept 35 means a fixed fee of 35 euros.",
          },
          {
            heading: "Finding the equation from two points",
            body: "First find the gradient $m$. Then substitute one point into $y=mx+c$ to find $c$. For $(-1,5)$ and $(3,-3)$: $m=\\frac{-3-5}{3-(-1)}=\\frac{-8}{4}=-2$. Substitute $(-1,5)$: $5=-2(-1)+c$, so $c=3$ and $y=-2x+3$. Check with the other point: $-2(3)+3=-3$.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Equation of a line", statement: "$y=mx+c$" },
        ],
        workedExample: {
          problem: "A line passes through $(1,2)$ and $(3,8)$. Find its equation.",
          solution: "Gradient: $m=\\frac{8-2}{3-1}=\\frac{6}{2}=3$. Substitute $(1,2)$ into $y=3x+c$: $2=3+c$, so $c=-1$. The equation is $y=3x-1$. Check with $(3,8)$: $3(3)-1=8$.",
        },
      },
      questions: [
        {
          id: "mypm2-u2-gradient-equation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the gradient of the line through $(1,2)$ and $(3,8)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$\\frac{1}{3}$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$-3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$, change in $y$ divided by change in $x$." },
            ],
            steps: [
              { reasoning: "Change in $y$ is $8-2=6$ and change in $x$ is $3-1=2$.", working: "m=\\frac{6}{2}=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: ["Inverting the fraction, giving $\\frac{1}{3}$.", "Adding the differences, giving 5 style answers.", "Subtracting in different orders, giving $-3$."],
            examinerNote: "B1 for 3.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A straight line passes through $(0,3)$ and $(2,11)$. Its equation is $y=mx+c$. Find $m$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: 4 },
              { label: "$c$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "property", name: "$y$-intercept", statement: "The line crosses the $y$-axis at $(0,c)$, where $x=0$." },
            ],
            steps: [
              { reasoning: "Find the gradient using the two points.", working: "m=\\frac{11-3}{2-0}=4", marks: 1, markCode: "M" },
              { reasoning: "The point $(0,3)$ is on the $y$-axis, so $c=3$. Check: $4(2)+3=11$.", working: "y=4x+3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=4x+3$, so $m=4$ and $c=3$",
            commonErrors: ["Finding the gradient as $\\frac{2}{8}$ (inverting).", "Taking $c=11$ from the wrong point."],
            examinerNote: "M1 for the gradient calculation. A1 for both m and c.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A straight line passes through $(-1,5)$ and $(3,-3)$. Its equation is $y=mx+c$. Find $m$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: -2 },
              { label: "$c$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "principle", name: "Finding $c$", statement: "Substitute the coordinates of a point on the line into $y=mx+c$ and solve." },
            ],
            steps: [
              { reasoning: "Find the gradient. The line goes down as it goes right, so it is negative.", working: "m=\\frac{-3-5}{3-(-1)}=\\frac{-8}{4}=-2", marks: 1, markCode: "M" },
              { reasoning: "Substitute $(-1,5)$ into $y=-2x+c$.", working: "5=-2(-1)+c=2+c", marks: 1, markCode: "M" },
              { reasoning: "Solve for $c$. Check with $(3,-3)$: $-2(3)+3=-3$.", working: "c=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-2x+3$, so $m=-2$ and $c=3$",
            commonErrors: ["Computing $3-1=2$ instead of $3-(-1)=4$ for the change in $x$.", "Giving a positive gradient of 2.", "Using $c=5$ without substituting."],
            examinerNote: "M1 for gradient. M1 for substitution of a point. A1 for both values.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An electrician charges a call-out fee plus an amount for each hour of work. The graph of cost, $C$ euros, against hours worked, $h$, is a straight line through $(1,55)$ and $(3,95)$. A second electrician charges $C=25h+15$.",
          parts: [
            { label: "a", prompt: "Find the gradient of the graph and state what it means in this context.", marks: 2 },
            { label: "b", prompt: "Find the $C$-intercept and write the equation of the graph in the form $C=mh+c$. State what the intercept means.", marks: 2 },
            { label: "c", prompt: "Use your equation to find the cost, in euros, of a job lasting 4.5 hours.", marks: 2 },
            { label: "d", prompt: "For how many hours do both electricians charge the same amount? For longer jobs, which electrician is cheaper? Justify your answer.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) gradient (euros per hour)", answer: 20 },
              { label: "(b) intercept (euros)", answer: 35 },
              { label: "(c) cost for 4.5 hours (euros)", answer: 125 },
              { label: "(d) hours when the costs are equal", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{C_2-C_1}{h_2-h_1}$ is the rate of change of cost per hour." },
              { kind: "property", name: "Intercept", statement: "The intercept is the value of $C$ when $h=0$: the fixed charge." },
              { kind: "principle", name: "Intersection", statement: "The two charges are equal when their expressions are set equal." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in cost by the change in hours.", working: "m=\\frac{95-55}{3-1}=20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The gradient is the cost per hour: 20 euros for each hour of work.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Substitute $(1,55)$ into $C=20h+c$: $55=20+c$, so $c=35$.", working: "C=20h+35", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The intercept is the cost when no hours are worked: a fixed call-out fee of 35 euros.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Substitute $h=4.5$.", working: "C=20\\times4.5+35=90+35", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add.", working: "125", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set the two costs equal and solve: $20h+35=25h+15$ gives $20=5h$.", working: "h=4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "At 4 hours both charge 115 euros. After this the first electrician is cheaper because the gradient 20 is smaller than 25 (check: at 5 hours the costs are 135 and 140 euros).", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 20 euros per hour (b) $C=20h+35$; a fixed call-out fee of 35 euros (c) 125 euros (d) 4 hours; for longer jobs the first electrician is cheaper.",
            commonErrors: ["Dividing change in hours by change in cost, giving 0.05.", "Using $c=55$ without finding the value at $h=0$.", "Saying the second electrician is cheaper for long jobs because the fixed fee is lower."],
            examinerNote: "In (a) the interpretation must mention cost per hour. In (d) accept either the algebraic comparison or the check at a specific larger value.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the gradient of the line through $(0,1)$ and $(2,5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
            ],
            steps: [
              { reasoning: "Change in $y$ is $5-1=4$ and change in $x$ is $2-0=2$.", working: "m=\\frac{4}{2}=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Inverting the fraction, giving $\\frac{1}{2}$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the $y$-intercept of the line $y=3x-4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$-4$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "$y$-intercept", statement: "In $y=mx+c$, the $y$-intercept is $c$, the value of $y$ when $x=0$." },
            ],
            steps: [
              { reasoning: "When $x=0$, $y=3(0)-4=-4$.", working: "y=-4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $-4$",
            commonErrors: ["Choosing 3, the gradient, not the intercept."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A straight line passes through $(1,3)$ and $(4,9)$. Its equation is $y=mx+c$. Find $m$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: 2 },
              { label: "$c$", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "principle", name: "Finding $c$", statement: "Substitute a point into $y=mx+c$ and solve." },
            ],
            steps: [
              { reasoning: "Find the gradient.", working: "m=\\frac{9-3}{4-1}=\\frac{6}{3}=2", marks: 1, markCode: "M" },
              { reasoning: "Substitute $(1,3)$ into $y=2x+c$: $3=2+c$, so $c=1$. Check with $(4,9)$: $2(4)+1=9$.", working: "y=2x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=2x+1$, so $m=2$ and $c=1$",
            commonErrors: ["Using $c=3$ from the point without substituting."],
            examinerNote: "M1 for the gradient. A1 for both values.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the gradient of the line through $(0,5)$ and $(3,2)$.",
          response: { type: "numeric", parts: [{ label: "Gradient", answer: -1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
            ],
            steps: [
              { reasoning: "Change in $y$ is $2-5=-3$ and change in $x$ is $3-0=3$.", working: "m=\\frac{-3}{3}=-1", marks: 1, markCode: "M" },
              { reasoning: "State the gradient; the negative sign means the line falls from left to right.", working: "-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$m=-1$",
            commonErrors: ["Subtracting in the wrong order, giving $+1$."],
            examinerNote: "M1 for $\\frac{-3}{3}$. A1 for $-1$.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point lies on the line $y=x+2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(1,3)$" },
              { id: "b", text: "$(3,1)$" },
              { id: "c", text: "$(2,2)$" },
              { id: "d", text: "$(0,2)$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Point on a line", statement: "A point is on a line if its coordinates satisfy the equation." },
            ],
            steps: [
              { reasoning: "Test each point: $(1,3)$ gives $y=1+2=3$, which matches.", working: "1+2=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $(1,3)$",
            commonErrors: ["Choosing (c), which satisfies $y=x$."],
            examinerNote: "B1 for choice (a).",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what the gradient of a distance-time graph tells you about a journey.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Gradient as rate of change", statement: "On a distance-time graph the gradient is the speed." },
            ],
            steps: [
              { reasoning: "The gradient is the change in distance divided by the change in time.", marks: 1, markCode: "R" },
              { reasoning: "So it tells you how fast the distance is increasing — the speed of the journey; a steeper line means a faster speed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The gradient is the speed: how much distance is covered per unit of time.",
            commonErrors: ["Saying the gradient is the distance or the time itself."],
            examinerNote: "The answer must connect gradient to rate of change / speed.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A straight line passes through $(2,7)$ and $(4,13)$. Find its equation in the form $y=mx+c$.",
          response: { type: "numeric", parts: [{ label: "$c$", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
              { kind: "principle", name: "Finding $c$", statement: "Substitute the coordinates of a point into $y=mx+c$ and solve." },
            ],
            steps: [
              { reasoning: "Find the gradient.", working: "m=\\frac{13-7}{4-2}=\\frac{6}{2}=3", marks: 1, markCode: "M" },
              { reasoning: "Substitute $(2,7)$ into $y=3x+c$.", working: "7=3(2)+c=6+c", marks: 1, markCode: "M" },
              { reasoning: "Solve for $c$ and check with $(4,13)$: $3(4)+1=13$.", working: "c=1,\\ y=3x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=3x+1$, so $c=1$",
            commonErrors: ["Using $c=7$ without substituting."],
            examinerNote: "M1 for gradient. M1 for substitution. A1 for $c=1$ (and $y=3x+1$).",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the gradient of a horizontal line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "It is undefined" },
              { id: "d", text: "It depends on the line" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Horizontal lines", statement: "A horizontal line has equation $y=k$; the change in $y$ between any two points is 0." },
            ],
            steps: [
              { reasoning: "For a horizontal line $y$ does not change, so $\\frac{\\Delta y}{\\Delta x}=0$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $0$",
            commonErrors: ["Confusing horizontal with vertical lines (undefined gradient)."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A taxi company charges $C=4d+3$ euros for a journey of $d$ kilometres.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Intercept in context", statement: "In $y=mx+c$, $c$ is the value when $x=0$: here the fixed charge." },
              { kind: "property", name: "Gradient in context", statement: "The gradient is the rate of change: here the cost per kilometre." },
            ],
            steps: [
              { reasoning: "The gradient 4 means the cost increases by 4 euros for each extra kilometre.", marks: 1, markCode: "R" },
              { reasoning: "The intercept 3 means the charge when $d=0$: a fixed fee of 3 euros.", marks: 1, markCode: "R" },
              { reasoning: "Find the cost of a 10 km journey as a check: $4(10)+3=43$ euros.", working: "43", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradient 4 euros per km; intercept 3 euros fixed fee; 10 km costs 43 euros",
            commonErrors: ["Saying the intercept is the cost per km."],
            examinerNote: "Both interpretations must be in context.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A line $L$ has equation $y=2x+5$. A second line $M$ is parallel to $L$ and passes through $(1,1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Parallel lines", statement: "Parallel lines have the same gradient." },
              { kind: "principle", name: "Finding $c$", statement: "Substitute a point into $y=mx+c$ and solve." },
            ],
            steps: [
              { reasoning: "Parallel lines have equal gradients, so $m=2$ for line $M$.", marks: 1, markCode: "R" },
              { reasoning: "Write $M$ as $y=2x+c$ and substitute $(1,1)$.", working: "1=2(1)+c", marks: 1, markCode: "M" },
              { reasoning: "Solve for $c$.", working: "c=-1", marks: 1, markCode: "A" },
              { reasoning: "State the equation and check: $2(1)-1=1$.", working: "y=2x-1", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$y=2x-1$",
            commonErrors: ["Using $c=5$ from line $L$ instead of finding the new intercept."],
            examinerNote: "The same-gradient reasoning is needed for the first mark.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A gym charges a joining fee plus a monthly fee. The graph of total cost $C$ euros against months $m$ is a straight line through $(2,70)$ and $(5,130)$.",
          parts: [
            { label: "a", prompt: "Find the gradient of the graph and state what it means.", marks: 2 },
            { label: "b", prompt: "Find the equation of the graph in the form $C=mh+c$.", marks: 2 },
            { label: "c", prompt: "Work out the total cost, in euros, after 12 months.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) gradient", answer: 20, unit: "euros per month" },
              { label: "(c) total cost after 12 months", answer: 290, unit: "euros" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{C_2-C_1}{m_2-m_1}$" },
              { kind: "property", name: "Intercept", statement: "The intercept is the value of $C$ when $m=0$: the joining fee." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in cost by the change in months.", working: "m=\\frac{130-70}{5-2}=\\frac{60}{3}=20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The gradient is the monthly fee: 20 euros per month.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Substitute $(2,70)$ into $C=20m+c$.", working: "70=40+c", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve: $c=30$, so $C=20m+30$; check $(5,130)$: $100+30=130$.", working: "C=20m+30", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $m=12$.", working: "C=20\\times12+30=240+30", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "290", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 20 euros per month (b) $C=20m+30$ (c) 290 euros",
            commonErrors: ["Using the joining fee as the gradient."],
            examinerNote: "In (b) the equation must be complete, not just $c$.",
          },
        },
        {
          id: "mypm2-u2-gradient-equation-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A water tank is being filled. The depth of water $d$ cm after $t$ minutes is modelled by the straight line through $(4,30)$ and $(10,66)$.",
          parts: [
            { label: "a", prompt: "Find the gradient of the line and state what it means in this context.", marks: 2 },
            { label: "b", prompt: "Find the equation of the line in the form $d=mt+c$.", marks: 2 },
            { label: "c", prompt: "How deep is the water after 15 minutes? Give your answer in cm.", marks: 2 },
            { label: "d", prompt: "The tank is 120 cm deep. Use your equation to estimate when the tank is full, and explain whether this estimate is reliable.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) gradient", answer: 6, unit: "cm per minute" },
              { label: "(c) depth after 15 minutes", answer: 96, unit: "cm" },
              { label: "(d) time to fill", answer: 19, unit: "minutes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{d_2-d_1}{t_2-t_1}$" },
              { kind: "principle", name: "Extrapolation", statement: "A linear model is reliable only within or near the range of the data." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in depth by the change in time.", working: "m=\\frac{66-30}{10-4}=\\frac{36}{6}=6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The gradient is the rate the water rises: 6 cm per minute.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Substitute $(4,30)$ into $d=6t+c$.", working: "30=24+c", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve: $c=6$, so $d=6t+6$; check $(10,66)$: $60+6=66$.", working: "d=6t+6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $t=15$.", working: "d=6\\times15+6=90+6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "96", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $d=120$: $6t+6=120\\Rightarrow6t=114\\Rightarrow t=19$.", working: "t=19", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The tank is full at $t=19$ minutes. This is just outside the data range ($t=4$ to $10$), so it is an extrapolation and may be less reliable — the flow rate might change near the top.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 6 cm per minute (b) $d=6t+6$ (c) 96 cm (d) $t=19$ minutes; an extrapolation so only an estimate",
            commonErrors: ["In (d) solving $6t+6=120$ as $t=20$ by forgetting the intercept."],
            examinerNote: "In (d) t = 19 minutes exactly ($114/6=19$). The R mark needs a comment on extrapolation.",
          },
        },
      ],
    },
  ],
};
