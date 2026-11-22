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
            { id: "a", text: "3" },
            { id: "b", text: "$\\frac13$" },
            { id: "c", text: "6" },
            { id: "d", text: "2" },
          ], correctChoiceId: "d" },
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
        {
          id: "ciam-u5-s1-li-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of the line through $(2,3)$ and $(6,11)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "8" },
            { id: "c", text: "4" },
            { id: "d", text: "$\\frac12$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "Rise over run." }], steps: [{ reasoning: "$m=\\frac{11-3}{6-2}=\\frac84=2$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "ciam-u5-s1-li-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the y-intercept of the line through $(1,7)$ with gradient 3.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "$y=mx+c$." }], steps: [
            { reasoning: "$7=3(1)+c$ → $c=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u5-s1-li-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the equation of the line through $(1,4)$ with gradient $-1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "$y-y_1=m(x-x_1)$." }], steps: [
            { reasoning: "$y-4=-1(x-1)$ → $y=-x+5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-x+5$" },
        },
        {
          id: "ciam-u5-s1-li-q8", difficulty: "core", totalMarks: 1,
          stem: "The gradient of a line perpendicular to $y=2x+3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "$-\\frac12$" },
            { id: "c", text: "$-2$" },
            { id: "d", text: "$\\frac12$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Perpendicular", statement: "Gradients multiply to $-1$." }], steps: [{ reasoning: "Negative reciprocal of 2 is $-\\frac12$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac12$" },
        },
        {
          id: "ciam-u5-s1-li-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the x-coordinate of the intersection of $y=3x-2$ and $y=-x+6$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Solve simultaneously." }], steps: [
            { reasoning: "$3x-2=-x+6$ → $4x=8$ → $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u5-s1-li-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the point of intersection of $2x+y=7$ and $x-y=2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection", statement: "Solve simultaneous equations." }], steps: [
            { reasoning: "Adding: $3x=9$ → $x=3$; then $3-y=2$ → $y=1$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2(3)+1=7$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Point $(3,1)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,1)$" },
        },
        {
          id: "ciam-u5-s1-li-q11", difficulty: "core", totalMarks: 1,
          stem: "Which line is parallel to $y=4x-1$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=4x+7$" },
            { id: "b", text: "$y=4x^2+7$" },
            { id: "c", text: "$y=x+7$" },
            { id: "d", text: "$y=-\\frac14x+7$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Parallel", statement: "Same gradient." }], steps: [{ reasoning: "Parallel lines share gradient 4.", marks: 1, markCode: "A" }], finalAnswer: "$y=4x+7$" },
        },
        {
          id: "ciam-u5-s1-li-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the x-coordinate of the midpoint of the segment joining $(2,-1)$ and $(6,5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "formula", name: "Midpoint", statement: "Average of coordinates." }], steps: [
            { reasoning: "$\\frac{2+6}{2}=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u5-s1-li-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the perpendicular bisector of the segment joining $(0,0)$ and $(6,8)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular bisector", statement: "Midpoint + negative reciprocal." }], steps: [
            { reasoning: "Midpoint $(3,4)$; segment gradient $\\frac86=\\frac43$ → perpendicular gradient $-\\frac34$.", marks: 1, markCode: "M" },
            { reasoning: "$y-4=-\\frac34(x-3)$ → $4y-16=-3x+9$ → $3x+4y=25$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(3,4)$ gives $9+16=25$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $3x+4y=25$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x+4y=25$" },
        },
        {
          id: "ciam-u5-s1-li-q14", difficulty: "challenge", totalMarks: 2,
          stem: "The line $y=mx+2$ passes through $(4,10)$. Find $m$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Point on line", statement: "Substitute coordinates." }], steps: [
            { reasoning: "$10=4m+2$ → $4m=8$ → $m=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u5-s1-li-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Find the equation of the line through $(3,-2)$ parallel to $2x+3y=6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel line", statement: "Same gradient, new point." }], steps: [
            { reasoning: "$2x+3y=6$ → $y=-\\frac23x+2$, gradient $-\\frac23$.", marks: 1, markCode: "M" },
            { reasoning: "$y+2=-\\frac23(x-3)$ → $2x+3y=0$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2x+3y=0$" },
        },
        {
          id: "ciam-u5-s1-li-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The gradient of the line joining $(1,5)$ and $(7,-1)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "1" },
            { id: "b", text: "$-1$" },
            { id: "c", text: "$-\\frac16$" },
            { id: "d", text: "$\\frac16$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "Rise over run." }], steps: [{ reasoning: "$m=\\frac{-1-5}{7-1}=\\frac{-6}{6}=-1$.", marks: 1, markCode: "A" }], finalAnswer: "$-1$" },
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
            { id: "a", text: "$(9,9)$" },
            { id: "b", text: "$(2,1)$" },
            { id: "c", text: "$(2,-1)$" },
            { id: "d", text: "$(-2,1)$" },
          ], correctChoiceId: "c" },
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
        {
          id: "ciam-u5-s1-ci-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The radius of the circle $(x-1)^2+(y-3)^2=16$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "8" },
            { id: "c", text: "4" },
            { id: "d", text: "16" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Circle radius", statement: "$r=\\sqrt{\\text{RHS}}$." }], steps: [{ reasoning: "$r=\\sqrt{16}=4$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "ciam-u5-s1-ci-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Write down the equation of the circle with centre $(-3,2)$ and radius 5.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Circle equation", statement: "Standard form." }], steps: [
            { reasoning: "$(x+3)^2+(y-2)^2=25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x+3)^2+(y-2)^2=25$" },
        },
        {
          id: "ciam-u5-s1-ci-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the centre of the circle $x^2+y^2=49$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 0 }, { label: "y", answer: 0 }] },
          markscheme: { principles: [{ kind: "property", name: "Circle centre", statement: "Centre is $(0,0)$ when no linear terms." }], steps: [
            { reasoning: "Equation is $x^2+y^2=r^2$ form → centre $(0,0)$, radius 7.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(0,0)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(0,0)$" },
        },
        {
          id: "ciam-u5-s1-ci-q8", difficulty: "core", totalMarks: 3,
          stem: "Find the centre and radius of $x^2+y^2-8x+10y+5=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Recover centre/radius." }], steps: [
            { reasoning: "$(x-4)^2-16+(y+5)^2-25+5=0$ → $(x-4)^2+(y+5)^2=36$.", marks: 1, markCode: "M" },
            { reasoning: "Centre $(4,-5)$, radius 6.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Centre $(4,-5)$, radius 6" },
        },
        {
          id: "ciam-u5-s1-ci-q9", difficulty: "core", totalMarks: 3,
          stem: "Does the point $(5,5)$ lie on the circle $x^2+y^2=50$? Give a reason.",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yes, since $25+25=50$" },
            { id: "b", text: "Yes, since $5+5=10$" },
            { id: "c", text: "No, since $25+25=50\\neq r^2$" },
            { id: "d", text: "No, since the radius is 50" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Point on circle", statement: "Substitute into equation." }], steps: [
            { reasoning: "$5^2+5^2=50$ matches RHS.", marks: 1, markCode: "M" },
            { reasoning: "Point lies on circle.", marks: 1, markCode: "A" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Yes" },
        },
        {
          id: "ciam-u5-s1-ci-q10", difficulty: "core", totalMarks: 2,
          stem: "Find the radius of the circle $x^2+y^2-6x+4y-12=0$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Recover radius." }], steps: [
            { reasoning: "$(x-3)^2+(y+2)^2=25$ → $r=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "ciam-u5-s1-ci-q11", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of the circle with centre $(2,-3)$ passing through $(5,1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Circle from centre and point", statement: "Point gives radius." }], steps: [
            { reasoning: "$r^2=(5-2)^2+(1-(-3))^2=9+16=25$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-2)^2+(y+3)^2=25$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(5-2)^2+(1+3)^2=9+16=25$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-2)^2+(y+3)^2=25$" },
        },
        {
          id: "ciam-u5-s1-ci-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Find the centre and radius of $x^2+y^2+2x-8y+8=0$, and state whether it is a real circle.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Check radius positive." }], steps: [
            { reasoning: "$(x+1)^2-1+(y-4)^2-16+8=0$ → $(x+1)^2+(y-4)^2=9$.", marks: 1, markCode: "M" },
            { reasoning: "Centre $(-1,4)$, radius 3 — real circle since $r^2>0$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: expand back gives original equation ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "Centre $(-1,4)$, radius 3" },
        },
        {
          id: "ciam-u5-s1-ci-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Find the equation of the circle with centre $(1,1)$ and radius $2\\sqrt2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Circle equation", statement: "Use $r^2$." }], steps: [
            { reasoning: "$r^2=(2\\sqrt2)^2=8$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-1)^2+(y-1)^2=8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-1)^2+(y-1)^2=8$" },
        },
        {
          id: "ciam-u5-s1-ci-q14", difficulty: "challenge", totalMarks: 5,
          stem: "Find the equation of the circle with diameter endpoints $(2,5)$ and $(6,-1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Circle from diameter", statement: "Midpoint centre, half-length radius." }], steps: [
            { reasoning: "Centre = midpoint $=(4,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Radius: $\\frac12\\sqrt{(6-2)^2+(-1-5)^2}=\\frac12\\sqrt{16+36}=\\frac12\\sqrt{52}=\\sqrt{13}$.", marks: 1, markCode: "M" },
            { reasoning: "$r^2=13$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-4)^2+(y-2)^2=13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-4)^2+(y-2)^2=13$" },
        },
        {
          id: "ciam-u5-s1-ci-q15", difficulty: "challenge", totalMarks: 2,
          stem: "What is the radius of the circle $x^2+y^2+4x-6y+9=0$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Complete the square", statement: "Recover radius." }], steps: [
            { reasoning: "$(x+2)^2+(y-3)^2=4$ → $r=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u5-s1-ci-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The circle $(x+2)^2+(y-5)^2=36$ has centre…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(36,36)$" },
            { id: "b", text: "$(-2,-5)$" },
            { id: "c", text: "$(2,-5)$" },
            { id: "d", text: "$(-2,5)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Circle centre", statement: "Read off $(a,b)$." }], steps: [{ reasoning: "Centre $(-2,5)$; radius 6.", marks: 1, markCode: "A" }], finalAnswer: "$(-2,5)$" },
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
