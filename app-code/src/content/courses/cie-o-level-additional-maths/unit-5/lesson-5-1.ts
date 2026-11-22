import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "olam-u5-lesson-5-1",
  code: "1-5",
  title: "Coordinate Geometry",
  goal: "I CAN work with straight lines and circles in coordinate geometry.",
  standards: ["4037: coordinate geometry"],
  vocabulary: [
    { term: "Gradient", definition: "$m=\\frac{y_2-y_1}{x_2-x_1}$ — steepness of a line." },
    { term: "Straight line equation", definition: "$y=mx+c$ or $ax+by+c=0$." },
    { term: "Perpendicular", definition: "Lines meeting at $90°$; gradients multiply to $-1$." },
    { term: "Circle equation", definition: "$(x-a)^2+(y-b)^2=r^2$ — centre $(a,b)$, radius $r$." },
  ],
  concepts: [
    {
      id: "olam-u5-s1-lines",
      title: "Straight lines",
      skill: "Find gradients, equations and intersections of lines at O Level.",
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
          id: "olam-u5-s1-li-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of the line through $(1,2)$ and $(4,8)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "6" },
            { id: "b", text: "3" },
            { id: "c", text: "$\\frac13$" },
            { id: "d", text: "2" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "Rise over run." }], steps: [{ reasoning: "$m=\\frac{8-2}{4-1}=\\frac63=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olam-u5-s1-li-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the equation of the line through $(0,3)$ with gradient $-2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "$y=mx+c$." }], steps: [
            { reasoning: "$y=-2x+c$; at $x=0$, $y=3$ → $c=3$.", marks: 1, markCode: "M" },
            { reasoning: "$y=-2x+3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-2x+3$" },
        },
        {
          id: "olam-u5-s1-li-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the point of intersection of $y=2x+1$ and $y=-x+7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Solve simultaneously." }], steps: [
            { reasoning: "$2x+1=-x+7$ → $3x=6$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y=2(2)+1=5$.", marks: 1, markCode: "M" },
            { reasoning: "Point $(2,5)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,5)$" },
        },
        {
          id: "olam-u5-s1-li-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of the perpendicular bisector of the line segment joining $(1,2)$ and $(5,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular bisector", statement: "Midpoint + negative reciprocal gradient." }], steps: [
            { reasoning: "Midpoint: $\\left(\\frac{1+5}{2},\\frac{2+4}{2}\\right)=(3,3)$.", marks: 1, markCode: "M" },
            { reasoning: "Gradient of segment: $\\frac{4-2}{5-1}=\\frac12$ → perpendicular gradient $-2$.", marks: 1, markCode: "M" },
            { reasoning: "$y-3=-2(x-3)$ → $y=-2x+9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-2x+9$" },
        },
        {
          id: "olam-u5-s1-li-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of the line through $(-2,3)$ and $(4,11)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "8" },
            { id: "c", text: "$\\frac43$" },
            { id: "d", text: "$\\frac12$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "Rise over run." }], steps: [{ reasoning: "$m=\\frac{11-3}{4-(-2)}=\\frac{8}{6}=\\frac43$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac43$" },
        },
        {
          id: "olam-u5-s1-li-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the y-intercept of the line $3x+2y=12$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "y-intercept", statement: "Set $x=0$." }], steps: [
            { reasoning: "At $x=0$: $2y=12$ gives $y=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olam-u5-s1-li-q7", difficulty: "core", totalMarks: 1,
          stem: "Two lines are parallel. Their gradients…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Are reciprocals" },
            { id: "b", text: "Are equal" },
            { id: "c", text: "Multiply to $-1$" },
            { id: "d", text: "Are both zero" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Parallel lines", statement: "Same gradient." }], steps: [{ reasoning: "Parallel lines share the same gradient.", marks: 1, markCode: "A" }], finalAnswer: "Equal" },
        },
        {
          id: "olam-u5-s1-li-q8", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line through $(1,-2)$ with gradient $4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$." }], steps: [
            { reasoning: "$y-(-2)=4(x-1)$, so $y+2=4x-4$.", marks: 1, markCode: "M" },
            { reasoning: "$y=4x-6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=4x-6$" },
        },
        {
          id: "olam-u5-s1-li-q9", difficulty: "core", totalMarks: 2,
          stem: "Solve the simultaneous equations $x+y=7$ and $x-y=1$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 4 }, { label: "b", answer: 3 },
          ] },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous equations", statement: "Add or subtract." }], steps: [
            { reasoning: "Adding gives $2x=8$, so $x=4$; then $y=7-4=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=4$, $y=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=4$, $y=3$" },
        },
        {
          id: "olam-u5-s1-li-q10", difficulty: "core", totalMarks: 1,
          stem: "The gradient perpendicular to a line of gradient $4$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-4$" },
            { id: "b", text: "$-\\frac14$" },
            { id: "c", text: "$\\frac14$" },
            { id: "d", text: "4" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Perpendicular", statement: "$m_1m_2=-1$." }], steps: [{ reasoning: "Negative reciprocal of 4 is $-\\frac14$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac14$" },
        },
        {
          id: "olam-u5-s1-li-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the perpendicular bisector of the segment joining $(-1,2)$ and $(3,6)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular bisector", statement: "Midpoint + negative reciprocal." }], steps: [
            { reasoning: "Midpoint: $\\left(\\frac{-1+3}{2},\\frac{2+6}{2}\\right)=(1,4)$.", marks: 1, markCode: "M" },
            { reasoning: "Segment gradient: $\\frac{6-2}{3-(-1)}=1$, so perpendicular gradient is $-1$.", marks: 1, markCode: "M" },
            { reasoning: "$y-4=-1(x-1)$, so $y=-x+5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-x+5$" },
        },
        {
          id: "olam-u5-s1-li-q12", difficulty: "foundation", totalMarks: 2,
          stem: "Find the midpoint of the segment joining $(2,8)$ and $(6,-4)$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 4 }, { label: "b", answer: 2 },
          ] },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average of coordinates." }], steps: [
            { reasoning: "$\\left(\\frac{2+6}{2},\\frac{8+(-4)}{2}\\right)=(4,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(4,2)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(4,2)$" },
        },
        {
          id: "olam-u5-s1-li-q13", difficulty: "core", totalMarks: 1,
          stem: "The line $y=2x-3$ crosses the x-axis at…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-\\frac32,0)$" },
            { id: "b", text: "$(\\frac32,0)$" },
            { id: "c", text: "$(3,0)$" },
            { id: "d", text: "$(0,-3)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "x-intercept", statement: "Set $y=0$." }], steps: [{ reasoning: "$0=2x-3$ gives $x=\\frac32$.", marks: 1, markCode: "A" }], finalAnswer: "$(\\frac32,0)$" },
        },
        {
          id: "olam-u5-s1-li-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line through $(2,1)$ and $(4,7)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Line through two points", statement: "Gradient then $y=mx+c$." }], steps: [
            { reasoning: "$m=\\frac{7-1}{4-2}=3$.", marks: 1, markCode: "M" },
            { reasoning: "$y-1=3(x-2)$ gives $y=3x-5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=3x-5$" },
        },
        {
          id: "olam-u5-s1-li-q15", difficulty: "core", totalMarks: 2,
          stem: "The line $y=kx+4$ passes through $(3,10)$. Find the value of $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute point", statement: "Solve for unknown." }], steps: [
            { reasoning: "$10=3k+4$ gives $3k=6$, so $k=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u5-s1-li-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the line parallel to $2x+3y=6$ that passes through $(4,-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel line", statement: "Same gradient, new intercept." }], steps: [
            { reasoning: "$3y=-2x+6$ gives $y=-\\frac23x+2$, gradient $-\\frac23$.", marks: 1, markCode: "M" },
            { reasoning: "$y+1=-\\frac23(x-4)$ gives $y=-\\frac23x+\\frac53$.", marks: 1, markCode: "M" },
            { reasoning: "Rearranged: $2x+3y=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2x+3y=5$" },
        },
      ],
    },
    {
      id: "olam-u5-s1-circles",
      title: "Circles",
      skill: "Use the equation of a circle at O Level.",
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
          id: "olam-u5-s1-ci-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The circle $(x-2)^2+(y+1)^2=9$ has centre…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(9,9)$" },
            { id: "b", text: "$(2,-1)$" },
            { id: "c", text: "$(2,1)$" },
            { id: "d", text: "$(-2,1)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Circle centre", statement: "Read off $(a,b)$." }], steps: [{ reasoning: "Centre $(2,-1)$; radius $\\sqrt9=3$.", marks: 1, markCode: "A" }], finalAnswer: "$(2,-1)$" },
        },
        {
          id: "olam-u5-s1-ci-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Write down the equation of the circle centre $(0,0)$ radius 7.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Circle equation", statement: "Standard form." }], steps: [
            { reasoning: "$x^2+y^2=49$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^2+y^2=49$" },
        },
        {
          id: "olam-u5-s1-ci-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the centre and radius of $x^2+y^2+4x-6y+9=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Recover centre/radius." }], steps: [
            { reasoning: "$(x+2)^2-4+(y-3)^2-9+9=0$ → $(x+2)^2+(y-3)^2=4$.", marks: 1, markCode: "M" },
            { reasoning: "Centre $(-2,3)$, radius 2.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Centre $(-2,3)$, radius 2" },
        },
        {
          id: "olam-u5-s1-ci-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of the circle with diameter endpoints $(1,3)$ and $(7,-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Circle from diameter", statement: "Midpoint = centre, half-length = radius." }], steps: [
            { reasoning: "Centre = midpoint $=(4,1)$.", marks: 1, markCode: "M" },
            { reasoning: "Radius: half the distance $=\\frac12\\sqrt{(7-1)^2+(-1-3)^2}=\\frac12\\sqrt{52}=\\sqrt{13}$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-4)^2+(y-1)^2=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-4)^2+(y-1)^2=13$" },
        },
        {
          id: "olam-u5-s1-ci-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The circle $(x+3)^2+(y-2)^2=16$ has radius…",
          response: { type: "mcq", choices: [
            { id: "a", text: "16" },
            { id: "b", text: "4" },
            { id: "c", text: "8" },
            { id: "d", text: "$\\sqrt{16}$ only" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Circle equation", statement: "$r^2$ on RHS." }], steps: [{ reasoning: "$r=\\sqrt{16}=4$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olam-u5-s1-ci-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Write down the centre and radius of $(x-5)^2+(y+7)^2=36$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 5 }, { label: "b", answer: -7 }, { label: "c", answer: 6 },
          ] },
          markscheme: { principles: [{ kind: "property", name: "Circle centre", statement: "Centre $(a,b)$, radius $\\sqrt{r^2}$." }], steps: [
            { reasoning: "Centre $(5,-7)$; radius $\\sqrt{36}=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answers: $5$, $-7$, $6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "Centre $(5,-7)$, radius 6" },
        },
        {
          id: "olam-u5-s1-ci-q7", difficulty: "core", totalMarks: 1,
          stem: "Which point lies on the circle $x^2+y^2=25$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(3,4)$" },
            { id: "b", text: "$(1,3)$" },
            { id: "c", text: "$(5,5)$" },
            { id: "d", text: "$(2,2)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Test point", statement: "Substitute into equation." }], steps: [{ reasoning: "$9+16=25$ ✓; others fail.", marks: 1, markCode: "A" }], finalAnswer: "$(3,4)$" },
        },
        {
          id: "olam-u5-s1-ci-q8", difficulty: "core", totalMarks: 3,
          stem: "Find the centre and radius of $x^2+y^2-8x+2y+8=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Recover standard form." }], steps: [
            { reasoning: "$(x-4)^2-16+(y+1)^2-1+8=0$ → $(x-4)^2+(y+1)^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "Centre $(4,-1)$, radius 3.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Centre $(4,-1)$, radius 3" },
        },
        {
          id: "olam-u5-s1-ci-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the radius of $x^2+y^2+10x-24y+185=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Check $r^2$ sign." }], steps: [
            { reasoning: "$(x+5)^2-25+(y-12)^2-144+185=0$ → $(x+5)^2+(y-12)^2=16$ → $r=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olam-u5-s1-ci-q10", difficulty: "core", totalMarks: 1,
          stem: "The circle $x^2+y^2+6x-4y-12=0$ has centre…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(3,-2)$" },
            { id: "b", text: "$(-3,2)$" },
            { id: "c", text: "$(6,-4)$" },
            { id: "d", text: "$(-6,4)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Centre $(-\\frac D2,-\\frac E2)$." }], steps: [{ reasoning: "$(x+3)^2+(y-2)^2=25$ → centre $(-3,2)$.", marks: 1, markCode: "A" }], finalAnswer: "$(-3,2)$" },
        },
        {
          id: "olam-u5-s1-ci-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the circle with centre $(-2,3)$ that passes through $(2,6)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Circle from centre+point", statement: "Radius = distance." }], steps: [
            { reasoning: "$r^2=(2-(-2))^2+(6-3)^2=16+9=25$ → $r=5$.", marks: 1, markCode: "M" },
            { reasoning: "$(x+2)^2+(y-3)^2=25$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $(4)^2+(3)^2=25$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x+2)^2+(y-3)^2=25$" },
        },
        {
          id: "olam-u5-s1-ci-q12", difficulty: "foundation", totalMarks: 2,
          stem: "The circle $(x-1)^2+(y+2)^2=20$ has centre…",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1 }, { label: "b", answer: -2 },
          ] },
          markscheme: { principles: [{ kind: "property", name: "Circle centre", statement: "Read off $(a,b)$." }], steps: [
            { reasoning: "Centre $(1,-2)$; radius $\\sqrt{20}=2\\sqrt5$.", marks: 1, markCode: "M" },
            { reasoning: "Answers: $1$, $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(1,-2)$" },
        },
        {
          id: "olam-u5-s1-ci-q13", difficulty: "core", totalMarks: 1,
          stem: "In $x^2+y^2+Dx+Ey+F=0$, completing the square gives centre…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-D,-E)$" },
            { id: "b", text: "$(D,E)$" },
            { id: "c", text: "$(-\\frac D2,-\\frac E2)$" },
            { id: "d", text: "$(\\frac D2,\\frac E2)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "General form", statement: "Centre $(-\\frac D2,-\\frac E2)$." }], steps: [{ reasoning: "Standard result.", marks: 1, markCode: "A" }], finalAnswer: "$(-\\frac D2,-\\frac E2)$" },
        },
        {
          id: "olam-u5-s1-ci-q14", difficulty: "core", totalMarks: 3,
          stem: "Write down the equation of the circle with centre $(0,-4)$ and radius 3.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Circle equation", statement: "Standard form." }], steps: [
            { reasoning: "$(x-0)^2+(y-(-4))^2=9$ → $x^2+(y+4)^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x^2+(y+4)^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "Check: radius 3, centre $(0,-4)$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^2+(y+4)^2=9$" },
        },
        {
          id: "olam-u5-s1-ci-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the centre and radius of $x^2+y^2-2x-4y+4=0$ (state radius only).",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Completing the square", statement: "Check sign of $r^2$." }], steps: [
            { reasoning: "$(x-1)^2-1+(y-2)^2-4+4=0$ → $(x-1)^2+(y-2)^2=1$ → centre $(1,2)$, $r=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: radius 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u5-s1-ci-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the circle with diameter endpoints $(-2,1)$ and $(4,5)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Circle from diameter", statement: "Midpoint centre, half-distance radius." }], steps: [
            { reasoning: "Centre = midpoint $=(1,3)$.", marks: 1, markCode: "M" },
            { reasoning: "$r^2=\\left(\\frac{4-(-2)}{2}\\right)^2+\\left(\\frac{5-1}{2}\\right)^2=9+4=13$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-1)^2+(y-3)^2=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-1)^2+(y-3)^2=13$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u5-s1-coord-notes", title: "Coordinate geometry — notes", summary: "Lines and circles.",
      sections: [
        { heading: "Lines", body: "$m=\\frac{\\Delta y}{\\Delta x}$; $y-y_1=m(x-x_1)$; perpendicular gradients multiply to $-1$; intersections via simultaneous equations." },
        { heading: "Circles", body: "$(x-a)^2+(y-b)^2=r^2$; complete the square to find centre and radius from general form." },
      ] },
  ],
};
