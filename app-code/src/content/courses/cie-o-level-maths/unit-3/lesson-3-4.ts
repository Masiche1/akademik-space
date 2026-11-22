import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "olm-u3-lesson-3-4",
  code: "3-4",
  title: "Coordinate Geometry",
  goal: "I CAN find distances, midpoints and equations of lines in coordinate geometry.",
  standards: ["4024: coordinate geometry"],
  vocabulary: [
    { term: "Coordinates", definition: "$(x,y)$ position on Cartesian plane." },
    { term: "Midpoint", definition: "Average of two points' coordinates." },
    { term: "Distance formula", definition: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ — Pythagoras." },
    { term: "Gradient", definition: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
  ],
  concepts: [
    {
      id: "olm-u3-s4-distance",
      title: "Distance and midpoint",
      skill: "Apply distance and midpoint formulas at O Level.",
      lesson: {
        sections: [
          { heading: "Distance formula", body: "The distance between $(x_1,y_1)$ and $(x_2,y_2)$ is $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ — just Pythagoras on the horizontal and vertical differences. It's used constantly: checking if shapes are isosceles (equal sides), finding perimeters, verifying points are equidistant, and locating centres of circles." },
          { heading: "Midpoint", body: "The midpoint of a segment is simply the average of the endpoints' coordinates: $M=\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$. Combined with the perpendicular bisector technique (negative reciprocal gradient through midpoint), it locates points equidistant from two given points — like the centre of a circle through them." },
        ],
        keyFormulas: [
          { name: "Distance", statement: "$d=\\sqrt{(\\Delta x)^2+(\\Delta y)^2}$" },
          { name: "Midpoint", statement: "$\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$" },
        ],
        workedExample: { problem: "Find the distance and midpoint of $(1,2)$ and $(7,10)$.", solution: "$d=\\sqrt{36+64}=\\sqrt{100}=10$; midpoint $(4,6)$." },
      },
      questions: [
        {
          id: "olm-u3-s4-di-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The midpoint of $(2,4)$ and $(6,8)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(3,5)$" },
            { id: "b", text: "$(4,12)$" },
            { id: "c", text: "$(8,12)$" },
            { id: "d", text: "$(4,6)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average coordinates." }], steps: [{ reasoning: "$\\left(\\frac{2+6}{2},\\frac{4+8}{2}\\right)=(4,6)$.", marks: 1, markCode: "A" }], finalAnswer: "$(4,6)$" },
        },
        {
          id: "olm-u3-s4-di-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the distance between $(0,0)$ and $(3,4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Pythagoras." }], steps: [
            { reasoning: "$d=\\sqrt{9+16}=\\sqrt{25}=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u3-s4-di-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the distance between $(-1,3)$ and $(5,-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Careful with negatives." }], steps: [
            { reasoning: "$d=\\sqrt{(5-(-1))^2+(-1-3)^2}=\\sqrt{36+16}=\\sqrt{52}=2\\sqrt{13}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2\\sqrt{13}\\approx7.21$ units.", marks: 1, markCode: "M" },
            { reasoning: "Exact form preferred unless decimals asked.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2\\sqrt{13}$" },
        },
        {
          id: "olm-u3-s4-di-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the point equidistant from $(0,0)$, $(4,0)$ and $(0,3)$ — the circumcentre of the triangle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Circumcentre", statement: "Intersect perpendicular bisectors." }], steps: [
            { reasoning: "Perp bisector of $(0,0)-(4,0)$: midpoint $(2,0)$, gradient of segment 0 → perp bisector is vertical $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Perp bisector of $(0,0)-(0,3)$: midpoint $(0,1.5)$, segment vertical → bisector horizontal $y=1.5$.", marks: 1, markCode: "M" },
            { reasoning: "Centre: $(2,1.5)$; verify distance to all three: $\\sqrt{4+2.25}=\\sqrt{6.25}=2.5$ each ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(2,1.5)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,1.5)$" },
        },
        {
          id: "olm-u3-s4-di-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The distance between $(1,1)$ and $(4,5)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "7" },
            { id: "b", text: "$\\sqrt{32}$" },
            { id: "c", text: "$\\sqrt{7}$" },
            { id: "d", text: "5" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "$\\sqrt{(\\Delta x)^2+(\\Delta y)^2}$." }], steps: [{ reasoning: "$\\sqrt{9+16}=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olm-u3-s4-di-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the distance between $(1,2)$ and $(4,6)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Pythagoras." }], steps: [
            { reasoning: "$d=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{9+16}=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u3-s4-di-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the distance between $(-3,4)$ and $(3,-4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Careful with negatives." }], steps: [
            { reasoning: "$d=\\sqrt{6^2+(-8)^2}=\\sqrt{36+64}=10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u3-s4-di-q8", difficulty: "core", totalMarks: 1,
          stem: "The distance between $(2,3)$ and $(2,7)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "5" },
            { id: "c", text: "4" },
            { id: "d", text: "$\\sqrt{32}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Vertical distance", statement: "Same $x$ → difference in $y$." }], steps: [{ reasoning: "$|7-3|=4$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olm-u3-s4-di-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the midpoint of A$(-2,5)$ and B$(4,-3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average coordinates." }], steps: [
            { reasoning: "Midpoint $=\\left(\\frac{-2+4}{2},\\frac{5+(-3)}{2}\\right)$.", marks: 1, markCode: "M" },
            { reasoning: "$=(1,1)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(1,1)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(1,1)$" },
        },
        {
          id: "olm-u3-s4-di-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the distance between $(-1,2)$ and $(5,10)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Pythagoras with negatives." }], steps: [
            { reasoning: "$d=\\sqrt{(5-(-1))^2+(10-2)^2}=\\sqrt{36+64}$.", marks: 1, markCode: "M" },
            { reasoning: "$=\\sqrt{100}=10$ units.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u3-s4-di-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A point P is equidistant from $(0,0)$ and $(6,0)$. Which equation describes the locus of P?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=3$" },
            { id: "b", text: "$y=0$" },
            { id: "c", text: "$x=6$" },
            { id: "d", text: "$x=3$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Equidistant locus", statement: "Perpendicular bisector." }], steps: [{ reasoning: "Midpoint $(3,0)$, segment horizontal → bisector $x=3$.", marks: 1, markCode: "A" }], finalAnswer: "$x=3$" },
        },
        {
          id: "olm-u3-s4-di-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Find the point that is equidistant from $(0,0)$, $(8,0)$ and $(0,6)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Circumcentre", statement: "Intersect perpendicular bisectors." }], steps: [
            { reasoning: "Perpendicular bisector of $(0,0)$–$(8,0)$: midpoint $(4,0)$, horizontal segment → vertical line $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Perpendicular bisector of $(0,0)$–$(0,6)$: midpoint $(0,3)$, vertical segment → horizontal line $y=3$.", marks: 1, markCode: "M" },
            { reasoning: "Centre $(4,3)$; distance to each point $=\\sqrt{16+9}=5$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(4,3)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(4,3)$" },
        },
        {
          id: "olm-u3-s4-di-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Find the distance between $(0,5)$ and $(12,5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Same $y$ → difference in $x$." }], steps: [
            { reasoning: "$d=|12-0|=12$ units.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olm-u3-s4-di-q14", difficulty: "core", totalMarks: 1,
          stem: "The distance formula comes directly from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Area of a triangle" },
            { id: "b", text: "The midpoint formula" },
            { id: "c", text: "The gradient formula" },
            { id: "d", text: "Pythagoras' theorem" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Distance formula", statement: "Horizontal/vertical differences form right triangle." }], steps: [{ reasoning: "Pythagoras on $\\Delta x$ and $\\Delta y$.", marks: 1, markCode: "A" }], finalAnswer: "Pythagoras' theorem" },
        },
        {
          id: "olm-u3-s4-di-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Show that the points $(1,2)$, $(4,6)$ and $(7,10)$ lie on a straight line.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Collinearity", statement: "Distances add up." }], steps: [
            { reasoning: "$d(1,2\\text{ to }4,6)=\\sqrt{9+16}=5$.", marks: 1, markCode: "M" },
            { reasoning: "$d(4,6\\text{ to }7,10)=\\sqrt{9+16}=5$; $d(1,2\\text{ to }7,10)=\\sqrt{36+64}=10$.", marks: 1, markCode: "M" },
            { reasoning: "$5+5=10$, so the middle point lies on the segment between the other two.", marks: 1, markCode: "M" },
            { reasoning: "Answer: the three points are collinear.", marks: 1, markCode: "A" },
          ], finalAnswer: "Collinear" },
        },
        {
          id: "olm-u3-s4-di-q16", difficulty: "core", totalMarks: 2,
          stem: "Find the distance between $(3,4)$ and $(7,1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Distance", statement: "Pythagoras." }], steps: [
            { reasoning: "$d=\\sqrt{16+9}=5$ units.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
      ],
    },
    {
      id: "olm-u3-s4-equation",
      title: "Equations of lines",
      skill: "Find equations of lines at O Level.",
      lesson: {
        sections: [
          { heading: "Three forms", body: "$y=mx+c$ is the standard form. Point-gradient form $y-y_1=m(x-x_1)$ is fastest when you know a point and gradient. For lines through two points, compute the gradient first then use either form. For horizontal lines $y=k$; vertical lines $x=h$ (no $y=mx+c$ form)." },
          { heading: "Special cases", body: "A line parallel to the x-axis is $y=c$ (gradient 0). A line parallel to the y-axis is $x=c$ (undefined gradient). For lines in the form $ax+by+c=0$, find intercepts by setting one variable to zero. The general form $Ax+By+C=0$ is used in some exam questions — convert by dividing by $B$ if needed." },
        ],
        keyFormulas: [
          { name: "Point-gradient", statement: "$y-y_1=m(x-x_1)$" },
          { name: "Two-point", statement: "Compute $m$ then substitute point" },
        ],
        workedExample: { problem: "Find the equation of the line through $(2,3)$ and $(5,12)$.", solution: "$m=\\frac{12-3}{5-2}=3$; $y-3=3(x-2)$ → $y=3x-3$. Check: at $x=5$, $y=12$ ✓." },
      },
      questions: [
        {
          id: "olm-u3-s4-eq-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The equation of a horizontal line through $(3,-2)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=3x-2$" },
            { id: "b", text: "$x=3$" },
            { id: "c", text: "$y=-2x+3$" },
            { id: "d", text: "$y=-2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Horizontal line", statement: "$y=k$." }], steps: [{ reasoning: "Horizontal through y=-2.", marks: 1, markCode: "A" }], finalAnswer: "$y=-2$" },
        },
        {
          id: "olm-u3-s4-eq-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the equation of the line through $(1,1)$ with gradient 4.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Point-gradient", statement: "Standard form." }], steps: [
            { reasoning: "$y-1=4(x-1)$ → $y=4x-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-3$" },
        },
        {
          id: "olm-u3-s4-eq-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line through $(-1,4)$ and $(3,-2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two points", statement: "Gradient then equation." }], steps: [
            { reasoning: "$m=\\frac{-2-4}{3-(-1)}=\\frac{-6}{4}=-\\frac32$.", marks: 1, markCode: "M" },
            { reasoning: "$y-4=-\\frac32(x+1)$ → $y=-\\frac32x+\\frac52$ or $3x+2y=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x+2y=5$" },
        },
        {
          id: "olm-u3-s4-eq-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of the perpendicular bisector of the segment joining $(1,2)$ and $(7,8)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perp bisector", statement: "Midpoint + neg reciprocal." }], steps: [
            { reasoning: "Midpoint $(4,5)$; segment gradient $\\frac{8-2}{7-1}=1$ → perp gradient $-1$.", marks: 1, markCode: "M" },
            { reasoning: "$y-5=-1(x-4)$ → $y=-x+9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x+y=9$.", marks: 1, markCode: "M" },
            { reasoning: "Verify equidistant: distance from $(4,5)$ to both endpoints $=\\sqrt{18}$ each ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x+y=9$" },
        },
        {
          id: "olm-u3-s4-eq-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The equation of the vertical line through $(5,-3)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=5x-3$" },
            { id: "b", text: "$y=-3$" },
            { id: "c", text: "$x=-3$" },
            { id: "d", text: "$x=5$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Vertical line", statement: "$x=h$." }], steps: [{ reasoning: "Vertical line keeps $x$ constant at 5.", marks: 1, markCode: "A" }], finalAnswer: "$x=5$" },
        },
        {
          id: "olm-u3-s4-eq-q6", difficulty: "foundation", totalMarks: 2,
          stem: "The line $y=3x+c$ passes through $(1,7)$. Find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute point", statement: "Solve for $c$." }], steps: [
            { reasoning: "$7=3(1)+c$ → $c=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u3-s4-eq-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the equation of the line through $(0,0)$ with gradient 2.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Point-gradient", statement: "Through origin." }], steps: [
            { reasoning: "$y-0=2(x-0)$ → $y=2x$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=2x$" },
        },
        {
          id: "olm-u3-s4-eq-q8", difficulty: "core", totalMarks: 1,
          stem: "Which line is parallel to $y=2x+1$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=2x-5$" },
            { id: "b", text: "$y=-\\frac12x+3$" },
            { id: "c", text: "$y=-2x+1$" },
            { id: "d", text: "$y=x+2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Parallel lines", statement: "Equal gradients." }], steps: [{ reasoning: "Parallel → same gradient 2.", marks: 1, markCode: "A" }], finalAnswer: "$y=2x-5$" },
        },
        {
          id: "olm-u3-s4-eq-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line through $(2,1)$ and $(6,9)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Two points", statement: "Gradient then equation." }], steps: [
            { reasoning: "$m=\\frac{9-1}{6-2}=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y-1=2(x-2)$ → $y=2x-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=2x-3$" },
        },
        {
          id: "olm-u3-s4-eq-q10", difficulty: "core", totalMarks: 2,
          stem: "Find the $x$-intercept of the line $y=3x-6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Intercept", statement: "Set $y=0$." }], steps: [
            { reasoning: "$0=3x-6$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2$" },
        },
        {
          id: "olm-u3-s4-eq-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The gradient of a line perpendicular to $y=3x+2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-3$" },
            { id: "b", text: "3" },
            { id: "c", text: "$\\frac13$" },
            { id: "d", text: "$-\\frac13$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Perpendicular gradient", statement: "Negative reciprocal." }], steps: [{ reasoning: "$-\\frac{1}{3}$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac13$" },
        },
        {
          id: "olm-u3-s4-eq-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the perpendicular bisector of the segment joining $(0,0)$ and $(4,2)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perp bisector", statement: "Midpoint + negative reciprocal." }], steps: [
            { reasoning: "Midpoint $(2,1)$; segment gradient $\\frac{2-0}{4-0}=\\frac12$ → perpendicular gradient $-2$.", marks: 1, markCode: "M" },
            { reasoning: "$y-1=-2(x-2)$ → $y=-2x+5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $2x+y=5$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: distance from $(2,1)$ to each endpoint is $\\sqrt{5}$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2x+y=5$" },
        },
        {
          id: "olm-u3-s4-eq-q13", difficulty: "foundation", totalMarks: 2,
          stem: "A line passes through $(0,-4)$ and $(3,2)$. Find its $y$-intercept.",
          response: { type: "numeric", parts: [{ label: "a", answer: -4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "Find $m$ then $c$." }], steps: [
            { reasoning: "$m=\\frac{2-(-4)}{3-0}=2$; $y=2x+c$; at $(0,-4)$, $c=-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-4$" },
        },
        {
          id: "olm-u3-s4-eq-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line through $(2,5)$ parallel to $y=4x-1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel line", statement: "Same gradient, new point." }], steps: [
            { reasoning: "Parallel → $m=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y-5=4(x-2)$ → $y=4x-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-3$" },
        },
        {
          id: "olm-u3-s4-eq-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Find the coordinates of the point of intersection of the lines $y=2x+1$ and $y=-x+7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Equate the two expressions." }], steps: [
            { reasoning: "$2x+1=-x+7$ → $3x=6$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y=2(2)+1=5$.", marks: 1, markCode: "M" },
            { reasoning: "Check in second line: $-2+7=5$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(2,5)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,5)$" },
        },
        {
          id: "olm-u3-s4-eq-q16", difficulty: "core", totalMarks: 2,
          stem: "The line $2x+3y=12$ crosses the $y$-axis at…",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "General form", statement: "Set $x=0$." }], steps: [
            { reasoning: "$x=0$ → $3y=12$ → $y=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$4$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u3-s4-coord-notes", title: "Coordinate geometry — notes", summary: "Distance, midpoint, line equations.",
      sections: [
        { heading: "Formulas", body: "$d=\\sqrt{(\\Delta x)^2+(\\Delta y)^2}$; midpoint = average; $m=\\frac{\\Delta y}{\\Delta x}$." },
        { heading: "Lines", body: "$y=mx+c$; point-gradient form; perpendicular bisector via midpoint + negative reciprocal." },
      ] },
  ],
};
