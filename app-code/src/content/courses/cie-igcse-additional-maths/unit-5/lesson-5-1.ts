import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ciam-u5-lesson-5-1",
  code: "1-5",
  title: "Coordinate Geometry",
  goal: "I CAN work with straight lines and circles in coordinate geometry.",
  standards: ["0606: coordinate geometry"],
  vocabulary: [
    { term: "Gradient", definition: "$m=\\frac{y_2-y_1}{x_2-x_1}$ — steepness of a line." },
    { term: "Straight line equation", definition: "$y=mx+c$ or $ax+by+c=0$." },
    { term: "Perpendicular", definition: "Lines meeting at $90°$; gradients multiply to $-1$." },
    { term: "Circle equation", definition: "$(x-a)^2+(y-b)^2=r^2$ — centre $(a,b)$, radius $r$." },
  ],
  concepts: [
    {
      id: "ciam-u5-s1-lines",
      title: "Straight lines",
      skill: "Find gradients, equations and intersections of lines at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Gradient and equation", body: "The gradient measures steepness: $m=\\frac{y_2-y_1}{x_2-x_1}$. Once you know one point $(x_1,y_1)$ and the gradient, the equation is $y-y_1=m(x-x_1)$, which rearranges to $y=mx+c$ where $c$ is the y-intercept. Parallel lines share the same gradient; perpendicular lines have gradients multiplying to $-1$ (e.g. $m$ and $-\\frac{1}{m}$)." },
          { heading: "Intersection", body: "To find where two lines meet, solve their equations simultaneously. Substitute one into the other to get a single equation in one variable, then find the corresponding $y$-value. If the lines are parallel they never meet; if identical they coincide." },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Line through point", statement: "$y-y_1=m(x-x_1)$" },
          { name: "Perpendicular", statement: "$m_1m_2=-1$" },
        ],
        workedExample: { problem: "Find the equation of the line through $(2,5)$ perpendicular to $y=3x-1$.", solution: "Gradient of given line is 3, so perpendicular gradient is $-\\frac13$. Equation: $y-5=-\\frac13(x-2)$ → $y=-\\frac13x+\\frac{17}{3}$." },
      },
      questions: [
        {
          id: "ciam-u5-s1-li-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of the line through $(1,2)$ and $(4,8)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" }, { id: "b", text: "6" }, { id: "c", text: "$\\frac13$" }, { id: "d", text: "3" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "Rise over run." }], steps: [{ reasoning: "$m=\\frac{8-2}{4-1}=\\frac63=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "ciam-u5-s1-li-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the equation of the line through $(0,3)$ with gradient $-2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "$y=mx+c$." }], steps: [
            { reasoning: "$y=-2x+c$; at $x=0$, $y=3$ → $c=3$.", marks: 1, markCode: "M" },
            { reasoning: "$y=-2x+3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-2x+3$" },
        },
        {
          id: "ciam-u5-s1-li-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the point of intersection of $y=2x+1$ and $y=-x+7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Solve simultaneously." }], steps: [
            { reasoning: "$2x+1=-x+7$ → $3x=6$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y=2(2)+1=5$.", marks: 1, markCode: "M" },
            { reasoning: "Point $(2,5)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,5)$" },
        },
        {
          id: "ciam-u5-s1-li-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of the perpendicular bisector of the line segment joining $(1,2)$ and $(5,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular bisector", statement: "Midpoint + negative reciprocal gradient." }], steps: [
            { reasoning: "Midpoint: $\\left(\\frac{1+5}{2},\\frac{2+4}{2}\\right)=(3,3)$.", marks: 1, markCode: "M" },
            { reasoning: "Gradient of segment: $\\frac{4-2}{5-1}=\\frac12$ → perpendicular gradient $-2$.", marks: 1, markCode: "M" },
            { reasoning: "$y-3=-2(x-3)$ → $y=-2x+9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-2x+9$" },
        },
      ],
    },
    {
      id: "ciam-u5-s1-circles",
      title: "Circles",
      skill: "Use the equation of a circle at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Equation", body: "A circle with centre $(a,b)$ and radius $r$ has equation $(x-a)^2+(y-b)^2=r^2$. This is just Pythagoras in disguise: any point $(x,y)$ on the circle is distance $r$ from the centre, since the horizontal and vertical distances form a right-angled triangle with hypotenuse $r$." },
          { heading: "Finding centre and radius", body: "Expand $x^2+y^2+Dx+Ey+F=0$ by completing the square in both $x$ and $y$ to recover the centre and radius. If the radius comes out negative or zero, the equation does not describe a real circle." },
        ],
        keyFormulas: [
          { name: "Circle", statement: "$(x-a)^2+(y-b)^2=r^2$" },
          { name: "General form", statement: "$x^2+y^2+Dx+Ey+F=0$" },
        ],
        workedExample: { problem: "Find the centre and radius of $x^2+y^2-6x+4y-12=0$.", solution: "$(x-3)^2-9+(y+2)^2-4-12=0$ → $(x-3)^2+(y+2)^2=25$ → centre $(3,-2)$, radius 5." },
      },
      questions: [
        {
          id: "ciam-u5-s1-ci-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The circle $(x-2)^2+(y+1)^2=9$ has centre…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,-1)$" }, { id: "b", text: "$(-2,1)$" }, { id: "c", text: "$(2,1)$" }, { id: "d", text: "$(9,9)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Circle centre", statement: "Read off $(a,b)$." }], steps: [{ reasoning: "Centre $(2,-1)$; radius $\\sqrt9=3$.", marks: 1, markCode: "A" }], finalAnswer: "$(2,-1)$" },
        },
        {
          id: "ciam-u5-s1-ci-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Write down the equation of the circle centre $(0,0)$ radius 7.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Circle equation", statement: "Standard form." }], steps: [
            { reasoning: "$x^2+y^2=49$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^2+y^2=49$" },
        },
        {
          id: "ciam-u5-s1-ci-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the centre and radius of $x^2+y^2+4x-6y+9=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Recover centre/radius." }], steps: [
            { reasoning: "$(x+2)^2-4+(y-3)^2-9+9=0$ → $(x+2)^2+(y-3)^2=4$.", marks: 1, markCode: "M" },
            { reasoning: "Centre $(-2,3)$, radius 2.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Centre $(-2,3)$, radius 2" },
        },
        {
          id: "ciam-u5-s1-ci-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of the circle with diameter endpoints $(1,3)$ and $(7,-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Circle from diameter", statement: "Midpoint = centre, half-length = radius." }], steps: [
            { reasoning: "Centre = midpoint $=(4,1)$.", marks: 1, markCode: "M" },
            { reasoning: "Radius: half the distance $=\\frac12\\sqrt{(7-1)^2+(-1-3)^2}=\\frac12\\sqrt{52}=\\sqrt{13}$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-4)^2+(y-1)^2=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-4)^2+(y-1)^2=13$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u5-s1-coord-notes", title: "Coordinate geometry — notes", summary: "Lines and circles.",
      sections: [
        { heading: "Lines", body: "$m=\\frac{\\Delta y}{\\Delta x}$; $y-y_1=m(x-x_1)$; perpendicular gradients multiply to $-1$; intersections via simultaneous equations." },
        { heading: "Circles", body: "$(x-a)^2+(y-b)^2=r^2$; complete the square to find centre and radius from general form." },
      ] },
  ],
};
