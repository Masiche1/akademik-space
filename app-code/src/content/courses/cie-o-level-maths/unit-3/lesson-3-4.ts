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
            { id: "a", text: "$(4,6)$" }, { id: "b", text: "$(8,12)$" }, { id: "c", text: "$(4,12)$" }, { id: "d", text: "$(3,5)$" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "$y=-2$" }, { id: "b", text: "$x=3$" }, { id: "c", text: "$y=3x-2$" }, { id: "d", text: "$y=-2x+3$" },
          ], correctChoiceId: "a" },
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
