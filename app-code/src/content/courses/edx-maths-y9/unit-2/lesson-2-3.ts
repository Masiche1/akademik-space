import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edm9-u2-lesson-2-3",
  code: "2-3",
  title: "Graphs",
  goal: "I CAN find the gradient and equation of a straight line, recognise parallel lines, and interpret real-life, distance-time and quadratic graphs.",
  standards: ["Y9 Algebra"],
  vocabulary: [
    { term: "Gradient", definition: "A measure of how steep a line is: change in $y$ divided by change in $x$." },
    { term: "y-intercept", definition: "The value of $y$ where a line crosses the $y$-axis, the $c$ in $y = mx + c$." },
    { term: "Parallel lines", definition: "Lines with the same gradient, which never meet." },
    { term: "Distance-time graph", definition: "A graph with time on the horizontal axis and distance on the vertical axis. The gradient gives the speed." },
    { term: "Quadratic graph", definition: "A smooth U-shaped or n-shaped curve called a parabola, from an equation with an $x^2$ term." },
    { term: "Root", definition: "A value of $x$ where a graph crosses the $x$-axis, so $y = 0$." },
  ],
  concepts: [
    {
      id: "edm9-u2-straight-line-graphs",
      title: "Gradient, y = mx + c and parallel lines",
      skill: "Find the gradient and equation of a straight line and use the fact that parallel lines have equal gradients.",
      lesson: {
        sections: [
          {
            heading: "Gradient and y = mx + c",
            body: "The gradient between two points $(x_1, y_1)$ and $(x_2, y_2)$ is $\\frac{y_2 - y_1}{x_2 - x_1}$. A straight line has equation $y = mx + c$, where $m$ is the gradient and $c$ is the $y$-intercept. A line sloping up from left to right has positive gradient; sloping down has negative gradient. In $y = 4 - 3x$ the gradient is $-3$ and the $y$-intercept is 4.",
          },
          {
            heading: "Finding an equation and parallel lines",
            body: "To find the equation of a line, work out $m$, then substitute the coordinates of a point on the line into $y = mx + c$ to find $c$. **Parallel lines have the same gradient.** So a line parallel to $y = 3x - 1$ has the form $y = 3x + c$, and $c$ is found from a point it passes through.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$" },
          { name: "Straight line", statement: "$y = mx + c$" },
          { name: "Parallel lines", statement: "Parallel lines have equal gradients." },
        ],
        workedExample: {
          problem: "Find the equation of the line through $(1, 5)$ with gradient 2.",
          solution: "Use $y = mx + c$ with $m = 2$: $y = 2x + c$. Substitute $(1, 5)$: $5 = 2 + c$, so $c = 3$. The equation is $y = 2x + 3$.",
        },
      },
      questions: [
        {
          id: "edm9-u2-straight-line-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the gradient of the line $y = 4 - 3x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-4$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$-3$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "y = mx + c", statement: "$m$ is the gradient, the coefficient of $x$." }],
            steps: [
              { reasoning: "Rewrite as $y = -3x + 4$. The coefficient of $x$ is the gradient.", working: "m = -3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $-3$",
            commonErrors: ["Choosing 4, the $y$-intercept.", "Ignoring the negative sign on 3."],
          },
        },
        {
          id: "edm9-u2-straight-line-graphs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A line is parallel to $y = 3x - 1$ and passes through the point $(2, 9)$. Its equation is $y = 3x + c$. Work out the value of $c$.",
          response: { type: "numeric", parts: [{ label: "$c$", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "property", name: "Parallel lines", statement: "Parallel lines have equal gradients." }],
            steps: [
              { reasoning: "A parallel line has the same gradient, 3.", working: "y = 3x + c", marks: 1, markCode: "B" },
              { reasoning: "Substitute $x = 2$, $y = 9$.", working: "9 = 3(2) + c", marks: 1, markCode: "M" },
              { reasoning: "Solve for $c$.", working: "c = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$c = 3$, so the line is $y = 3x + 3$.",
            commonErrors: ["Using $c = -1$ from the original line.", "Substituting $x$ and $y$ the wrong way round."],
          },
        },
        {
          id: "edm9-u2-straight-line-graphs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A straight line passes through $A(-2, 1)$ and $B(4, 10)$. Its equation is $y = mx + c$. Work out $m$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: 1.5, tolerance: 0.001 },
              { label: "$c$", answer: 4, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
              { kind: "definition", name: "y = mx + c", statement: "Substitute a point on the line to find $c$." },
            ],
            steps: [
              { reasoning: "Use the gradient formula with the two points.", working: "m = \\frac{10 - 1}{4 - (-2)} = \\frac{9}{6}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "m = 1.5", marks: 1, markCode: "A" },
              { reasoning: "Substitute point $B(4, 10)$ into $y = 1.5x + c$.", working: "10 = 1.5(4) + c", marks: 1, markCode: "M" },
              { reasoning: "Solve. Check with $A$: $1.5(-2) + 4 = 1$.", working: "c = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 1.5x + 4$, so $m = 1.5$ and $c = 4$.",
            commonErrors: ["Computing $4 - 2 = 2$ instead of $4 - (-2) = 6$ for the change in $x$.", "Dividing the change in $x$ by the change in $y$."],
          },
        },
        {
          id: "edm9-u2-straight-line-graphs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Line $L_1$ passes through the points $(0, -3)$ and $(4, 5)$. Line $L_2$ is parallel to $L_1$ and passes through the point $(3, 10)$.",
          parts: [
            { label: "a", prompt: "Work out the gradient of $L_1$.", marks: 2 },
            { label: "b", prompt: "Write down the equation of $L_1$.", marks: 1 },
            { label: "c", prompt: "Find the equation of $L_2$, in the form $y = mx + c$. Enter the value of $c$.", marks: 2 },
            { label: "d", prompt: "Does the point $(5, 13)$ lie on $L_2$? Give a reason for your answer.", marks: 2 },
            { label: "e", prompt: "Work out the $x$-coordinate of the point where $L_1$ crosses the $x$-axis.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) gradient of $L_1$", answer: 2 },
              { label: "(c) value of $c$ for $L_2$", answer: 4 },
              { label: "(e) $x$-coordinate", answer: 1.5, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$" },
              { kind: "property", name: "Parallel lines", statement: "Parallel lines have equal gradients." },
            ],
            steps: [
              { part: "a", reasoning: "Use the gradient formula.", working: "m = \\frac{5 - (-3)}{4 - 0} = \\frac{8}{4}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "m = 2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The line crosses the $y$-axis at $(0, -3)$, so $c = -3$.", working: "y = 2x - 3", marks: 1, markCode: "B" },
              { part: "c", reasoning: "$L_2$ has gradient 2. Substitute $(3, 10)$ into $y = 2x + c$.", working: "10 = 2(3) + c", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $c$.", working: "c = 4 \\Rightarrow y = 2x + 4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x = 5$ into the equation of $L_2$.", working: "y = 2(5) + 4 = 14", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$14 \\ne 13$, so the point does not lie on $L_2$.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "On the $x$-axis $y = 0$, so set $2x - 3 = 0$.", working: "2x = 3", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Solve for $x$.", working: "x = 1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $2$. (b) $y = 2x - 3$. (c) $y = 2x + 4$, so $c = 4$. (d) No: when $x = 5$, $y = 14 \\ne 13$. (e) $x = 1.5$.",
            commonErrors: ["Writing $5 - 3 = 2$ instead of $5 - (-3) = 8$.", "Using $c = -3$ for $L_2$.", "Setting $x = 0$ instead of $y = 0$ in part (e)."],
            examinerNote: "Part (c) and (d) ft from a correct gradient.",
          },
        },
      ],
    },
    {
      id: "edm9-u2-real-life-quadratic-graphs",
      title: "Real-life, distance-time and quadratic graphs",
      skill: "Interpret distance-time graphs and use quadratic graphs and factorising to find roots.",
      lesson: {
        sections: [
          {
            heading: "Distance-time graphs",
            body: "On a distance-time graph, the **gradient is the speed**: $\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$. A steeper line means a faster journey. A **horizontal line** means the object is stationary (distance does not change). A line sloping downwards means the object is returning towards the start. Average speed is total distance divided by total time, including any stops.",
          },
          {
            heading: "Quadratic graphs",
            body: "A quadratic graph, from an equation such as $y = x^2 - 4x + 3$, is a smooth curve called a parabola. If the $x^2$ coefficient is positive it is U-shaped with a minimum point; if negative it is n-shaped with a maximum point. The **roots** are where the curve crosses the $x$-axis ($y = 0$). Find them by factorising: $x^2 - 4x + 3 = (x - 1)(x - 3) = 0$, so $x = 1$ or $x = 3$. The curve is symmetrical, with its turning point halfway between the roots.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}$" },
          { name: "Average speed", statement: "$\\dfrac{\\text{total distance}}{\\text{total time}}$" },
        ],
        workedExample: {
          problem: "A cyclist travels 30 km in 2 hours on a distance-time graph. Work out the speed.",
          solution: "The gradient is the speed: $\\frac{30}{2} = 15$. The speed is 15 km/h.",
        },
      },
      questions: [
        {
          id: "edm9-u2-real-life-quadratic-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a distance-time graph, what does a horizontal line show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The object is stationary" },
              { id: "b", text: "The object is moving at a constant speed" },
              { id: "c", text: "The object is returning to the start" },
              { id: "d", text: "The object is accelerating" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Distance-time graphs", statement: "The gradient is the speed, so a gradient of zero means no movement." }],
            steps: [
              { reasoning: "A horizontal line has gradient zero, so the distance does not change as time passes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The object is stationary",
            commonErrors: ["Thinking a horizontal line means constant speed.", "Confusing distance-time graphs with speed-time graphs."],
          },
        },
        {
          id: "edm9-u2-real-life-quadratic-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels 90 km in 1.5 hours at a constant speed. Work out its speed in km/h.",
          response: { type: "numeric", parts: [{ label: "Speed", answer: 60, unit: "km/h" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$" }],
            steps: [
              { reasoning: "Divide the distance by the time.", working: "\\frac{90}{1.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 60 \\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60$ km/h",
            commonErrors: ["Multiplying distance and time.", "Dividing time by distance."],
          },
        },
        {
          id: "edm9-u2-real-life-quadratic-graphs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The graph of $y = x^2 - 4x + 3$ crosses the $x$-axis at two points. Work out the $x$-coordinates of these points. Enter them in any order.",
          response: {
            type: "numeric",
            parts: [
              { label: "Root 1", answer: 1 },
              { label: "Root 2", answer: 3 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Root", statement: "A root is where the graph crosses the $x$-axis, so $y = 0$." },
              { kind: "property", name: "Zero product", statement: "If $AB = 0$ then $A = 0$ or $B = 0$." },
            ],
            steps: [
              { reasoning: "On the $x$-axis $y = 0$. Factorise: numbers with product 3 and sum $-4$ are $-1$ and $-3$.", working: "x^2 - 4x + 3 = (x - 1)(x - 3) = 0", marks: 1, markCode: "M" },
              { reasoning: "Set each factor equal to zero.", working: "x - 1 = 0 \\text{ or } x - 3 = 0", marks: 1, markCode: "M" },
              { reasoning: "Solve each equation.", working: "x = 1 \\text{ or } x = 3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 1$ and $x = 3$",
            commonErrors: ["Writing $(x + 1)(x + 3)$, which gives roots $-1$ and $-3$.", "Giving the $y$-intercept 3 instead of the roots."],
          },
        },
        {
          id: "edm9-u2-real-life-quadratic-graphs-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Priya cycles from home. She travels 12 km in the first hour. She then stops for half an hour. She then cycles straight back home, arriving 3 hours after she set off. The graph of her journey is a series of straight lines. A different graph has equation $y = x^2 - 6x + 5$.",
          parts: [
            { label: "a", prompt: "Work out Priya's speed in the first hour, in km/h.", marks: 1 },
            { label: "b", prompt: "Work out the length of time Priya's stop lasts, in minutes.", marks: 1 },
            { label: "c", prompt: "Work out Priya's speed on her journey home, in km/h.", marks: 2 },
            { label: "d", prompt: "Work out Priya's average speed for the whole journey, including the stop, in km/h.", marks: 2 },
            { label: "e", prompt: "Work out the $x$-coordinates where the graph $y = x^2 - 6x + 5$ crosses the $x$-axis, and the $y$-coordinate of its lowest point. Enter the two roots (any order) and the lowest $y$-value.", marks: 4 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) speed (km/h)", answer: 12 },
              { label: "(b) stop (minutes)", answer: 30 },
              { label: "(c) speed home (km/h)", answer: 8 },
              { label: "(d) average speed (km/h)", answer: 8 },
              { label: "(e) smaller root", answer: 1 },
              { label: "(e) larger root", answer: 5 },
              { label: "(e) lowest $y$-value", answer: -4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$" },
              { kind: "formula", name: "Average speed", statement: "$\\frac{\\text{total distance}}{\\text{total time}}$" },
              { kind: "property", name: "Symmetry of a parabola", statement: "The turning point lies halfway between the roots." },
            ],
            steps: [
              { part: "a", reasoning: "Distance divided by time for the first section.", working: "\\frac{12}{1} = 12 \\text{ km/h}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The stop is the horizontal section, lasting half an hour.", working: "0.5 \\text{ h} = 30 \\text{ minutes}", marks: 1, markCode: "B" },
              { part: "c", reasoning: "She is travelling home from 1.5 hours to 3 hours, which takes 1.5 hours, and covers 12 km.", working: "\\frac{12}{1.5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "= 8 \\text{ km/h}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total distance is 12 km out plus 12 km back, in 3 hours.", working: "\\frac{12 + 12}{3}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "= 8 \\text{ km/h}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Set $y = 0$ and factorise: numbers with product 5 and sum $-6$ are $-1$ and $-5$.", working: "(x - 1)(x - 5) = 0", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Solve for the roots.", working: "x = 1 \\text{ or } x = 5", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The lowest point is halfway between the roots, at $x = 3$.", working: "x = \\frac{1 + 5}{2} = 3", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Substitute $x = 3$ to find the lowest $y$-value.", working: "y = 9 - 18 + 5 = -4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $12$ km/h. (b) $30$ minutes. (c) $8$ km/h. (d) $8$ km/h. (e) Roots $1$ and $5$; lowest point $y = -4$.",
            commonErrors: ["Using 1 hour instead of 1.5 hours for the return journey.", "Averaging the two speeds (12 and 8) instead of dividing total distance by total time.", "Forgetting to include the stop in the total time in part (d)."],
            examinerNote: "In part (d) the average speed happens to equal the return speed; a mean of the two speeds (10 km/h) scores 0.",
          },
        },
      ],
    },
  ],
};
