import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "pc-u5-lesson-5-1",
  code: "5-1",
  title: "Conic Sections",
  goal: "I CAN write and analyze the equations of parabolas, circles, ellipses, and hyperbolas, including their foci, vertices, directrices, and asymptotes.",
  standards: ["HSG-GPE.A.1", "HSG-GPE.A.2", "HSG-GPE.A.3"],
  vocabulary: [
    { term: "Focus", definition: "A fixed point used to define a conic section. A parabola has one focus; an ellipse and a hyperbola each have two." },
    { term: "Directrix", definition: "A fixed line used with the focus to define a parabola: every point of the parabola is equally far from the focus and the directrix." },
    { term: "Ellipse", definition: "The set of points in a plane for which the sum of the distances to two fixed foci is constant." },
    { term: "Hyperbola", definition: "The set of points in a plane for which the absolute value of the difference of the distances to two fixed foci is constant." },
    { term: "Vertex", definition: "A point where a conic meets its axis of symmetry: the turning point of a parabola, or an endpoint of the major axis (ellipse) or transverse axis (hyperbola)." },
    { term: "Asymptote", definition: "A line that a branch of a hyperbola approaches without touching as the points move far from the center." },
    { term: "Eccentricity", definition: "The ratio $e=c/a$ of the distance from the center to a focus over the distance from the center to a vertex; it measures how stretched a conic is." },
  ],
  concepts: [
    {
      id: "pc-u5-parabolas-circles",
      title: "Parabolas and circles",
      skill: "Use the focus-directrix definition to write and analyze parabolas, and complete the square to find the center and radius of a circle.",
      lesson: {
        sections: [
          {
            heading: "Circles",
            body: "A circle is the set of points at a fixed distance $r$ from a center $(h,k)$. The distance formula gives $(x-h)^2+(y-k)^2=r^2$. When the equation is given in expanded form such as $x^2+y^2-6x+4y-12=0$, group the $x$ terms and the $y$ terms, complete the square in each, and add the same amounts to both sides.",
          },
          {
            heading: "Parabola: focus and directrix",
            body: "A parabola is the set of points equidistant from a point (the **focus**) and a line (the **directrix**). If the vertex is $(h,k)$ and $p$ is the signed distance from the vertex to the focus, then the directrix is the same distance on the other side of the vertex. The vertex lies exactly halfway between focus and directrix.",
          },
          {
            heading: "Standard forms",
            body: "For a vertical axis: $(x-h)^2=4p(y-k)$, focus $(h,k+p)$, directrix $y=k-p$; the parabola opens up if $p>0$ and down if $p<0$. For a horizontal axis: $(y-k)^2=4p(x-h)$, focus $(h+p,k)$, directrix $x=h-p$; it opens right if $p>0$ and left if $p<0$. The parabola always opens away from the directrix and around the focus.",
          },
        ],
        keyFormulas: [
          { name: "Circle", statement: "$(x-h)^2+(y-k)^2=r^2$" },
          { name: "Parabola, vertical axis", statement: "$(x-h)^2=4p(y-k)$; focus $(h,k+p)$; directrix $y=k-p$" },
          { name: "Parabola, horizontal axis", statement: "$(y-k)^2=4p(x-h)$; focus $(h+p,k)$; directrix $x=h-p$" },
        ],
        workedExample: {
          problem: "Find the focus and directrix of the parabola $y^2=-12x$.",
          solution: "The equation has the form $(y-0)^2=4p(x-0)$, so the vertex is $(0,0)$ and the axis is horizontal. Matching $4p=-12$ gives $p=-3$. The focus is $(h+p,k)=(-3,0)$ and the directrix is $x=h-p=3$. Since $p<0$, the parabola opens left, away from the directrix $x=3$.",
        },
      },
      questions: [
        {
          id: "pc-u5-parabolas-circles-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the focus of the parabola $x^2=8y$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(0,4)$" },
              { id: "b", text: "$(0,8)$" },
              { id: "c", text: "$(0,2)$" },
              { id: "d", text: "$(2,0)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parabola, vertical axis", statement: "$x^2=4py$ has vertex $(0,0)$ and focus $(0,p)$." },
            ],
            steps: [
              { reasoning: "Match $x^2=8y$ to $x^2=4py$ to find $p$.", working: "4p=8 \\Rightarrow p=2", marks: 1, markCode: "M" },
              { reasoning: "The axis is vertical and $p>0$, so the focus is $p$ units above the vertex.", working: "(0,p)=(0,2)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $(0,2)$",
            commonErrors: ["Using the coefficient 8 as $p$ instead of $4p$.", "Using $p=4$ by halving instead of dividing by 4.", "Placing the focus on the $x$-axis for a parabola that opens up."],
          },
        },
        {
          id: "pc-u5-parabolas-circles-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A circle has equation $x^2+y^2-6x+4y-12=0$. Find the coordinates of its center and its radius.",
          response: {
            type: "numeric",
            parts: [
              { label: "Center $x$-coordinate", answer: 3 },
              { label: "Center $y$-coordinate", answer: -2 },
              { label: "Radius", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circle", statement: "$(x-h)^2+(y-k)^2=r^2$ has center $(h,k)$ and radius $r$." },
              { kind: "principle", name: "Completing the square", statement: "$x^2+bx$ becomes $\\left(x+\\tfrac{b}{2}\\right)^2-\\left(\\tfrac{b}{2}\\right)^2$." },
            ],
            steps: [
              { reasoning: "Group the terms and complete the square in $x$ and in $y$, adding $9$ and $4$ to both sides.", working: "(x^2-6x+9)+(y^2+4y+4)=12+9+4", marks: 1, markCode: "M" },
              { reasoning: "Write each group as a perfect square and add the right side.", working: "(x-3)^2+(y+2)^2=25", marks: 1, markCode: "A" },
              { reasoning: "Read the center and take the square root of $r^2$.", working: "(h,k)=(3,-2),\\quad r=\\sqrt{25}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Center $(3,-2)$, radius $5$.",
            commonErrors: ["Reporting the center as $(-3,2)$ by keeping the signs from the expanded form.", "Giving the radius as $25$ instead of $\\sqrt{25}$.", "Forgetting to add the completed-square constants to the right side."],
          },
        },
        {
          id: "pc-u5-parabolas-circles-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A parabola has vertex $(1,3)$ and directrix $x=-2$. It can be written as $(y-3)^2=4p(x-1)$. Find the focus and the value of $4p$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Focus $x$-coordinate", answer: 4 },
              { label: "Focus $y$-coordinate", answer: 3 },
              { label: "Value of $4p$", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parabola", statement: "Every point of a parabola is equidistant from the focus and the directrix, so the vertex is midway between them." },
              { kind: "formula", name: "Parabola, horizontal axis", statement: "$(y-k)^2=4p(x-h)$ has focus $(h+p,k)$ and directrix $x=h-p$." },
            ],
            steps: [
              { reasoning: "The directrix is $x=h-p$ with $h=1$, so solve for $p$. The positive value shows the parabola opens right, away from the directrix.", working: "1-p=-2 \\Rightarrow p=3", marks: 1, markCode: "M" },
              { reasoning: "The focus is $p$ units from the vertex along the axis of symmetry $y=3$.", working: "(h+p,k)=(4,3)", marks: 1, markCode: "A" },
              { reasoning: "Compute the coefficient $4p$.", working: "4p=12", marks: 1, markCode: "A" },
              { reasoning: "Check: the vertex $(1,3)$ is 3 units from the focus $(4,3)$ and 3 units from the line $x=-2$.", working: "(y-3)^2=12(x-1)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Focus $(4,3)$; $4p=12$, so $(y-3)^2=12(x-1)$.",
            commonErrors: ["Placing the focus on the same side as the directrix at $(-2,3)$.", "Using the distance between vertex and directrix as $4p$ rather than $p$."],
          },
        },
        {
          id: "pc-u5-parabolas-circles-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A satellite dish has a cross-section that is a parabola with its vertex at the origin, opening upward, with equation $x^2=16y$. Distances are in feet. The receiver is placed at the focus.",
          parts: [
            { label: "a", prompt: "Find the value of $p$ and the coordinates of the focus.", marks: 2 },
            { label: "b", prompt: "The dish is 12 feet wide across the top. How deep is the dish at its center?", marks: 2 },
            { label: "c", prompt: "Show that the point $P(8,4)$ lies on the parabola and is the same distance from the focus as from the directrix.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Parabola, vertical axis", statement: "$x^2=4py$ has focus $(0,p)$ and directrix $y=-p$." },
              { kind: "formula", name: "Distance formula", statement: "$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$" },
              { kind: "definition", name: "Parabola", statement: "A point is on the parabola exactly when its distance to the focus equals its distance to the directrix." },
            ],
            steps: [
              { part: "a", reasoning: "Match $x^2=16y$ with $x^2=4py$.", working: "4p=16 \\Rightarrow p=4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The focus lies $p$ units above the vertex on the axis.", working: "\\text{Focus }(0,4)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A width of 12 ft means the rim is at $x=\\pm6$. Substitute into the equation to find the height of the rim above the vertex.", working: "y=\\frac{x^2}{16}=\\frac{36}{16}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The depth is the rim height.", working: "y=2.25\\text{ ft}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check that $P$ satisfies the equation.", working: "8^2=64=16(4)", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Distance from $P$ to the focus $(0,4)$; the directrix is $y=-4$ and $P$ is 8 units from it vertically.", working: "d_{F}=\\sqrt{(8-0)^2+(4-4)^2}=8,\\quad d_{D}=4-(-4)=8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The distances are equal, which is the defining property of a parabola.", working: "d_F=d_D=8", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $p=4$, focus $(0,4)$. (b) $2.25$ ft. (c) $P$ satisfies $x^2=16y$ and is 8 units from both the focus and the directrix $y=-4$.",
            commonErrors: ["Using the full width 12 instead of the half-width 6.", "Measuring distance to the directrix as $4-0$ instead of $4-(-4)$."],
          },
        },
      ],
    },
    {
      id: "pc-u5-ellipses-hyperbolas",
      title: "Ellipses and hyperbolas",
      skill: "Write and analyze ellipses and hyperbolas in standard form, find foci, vertices, and asymptotes, and use completing the square to reach standard form.",
      lesson: {
        sections: [
          {
            heading: "Ellipses",
            body: "An ellipse centered at $(h,k)$ with horizontal major axis has equation $\\frac{(x-h)^2}{a^2}+\\frac{(y-k)^2}{b^2}=1$ with $a>b>0$. The vertices are $(h\\pm a,k)$, and the foci are $(h\\pm c,k)$ where $c^2=a^2-b^2$. If the larger denominator is under the $y$ term, the major axis is vertical and the roles swap. The sum of the distances from any point on the ellipse to the foci is $2a$.",
          },
          {
            heading: "Hyperbolas",
            body: "A hyperbola with horizontal transverse axis is $\\frac{(x-h)^2}{a^2}-\\frac{(y-k)^2}{b^2}=1$. Its vertices are $(h\\pm a,k)$ and its foci are $(h\\pm c,k)$ where $c^2=a^2+b^2$, so $c>a$. The asymptotes are $y-k=\\pm\\frac{b}{a}(x-h)$. For a vertical transverse axis, $\\frac{(y-k)^2}{a^2}-\\frac{(x-h)^2}{b^2}=1$ with asymptotes $y-k=\\pm\\frac{a}{b}(x-h)$. The positive term tells you which way the hyperbola opens; $a^2$ is always under the positive term.",
          },
          {
            heading: "Completing the square",
            body: "General equations such as $4x^2+9y^2-16x+18y-11=0$ must be rewritten in standard form. Group the $x$ terms and $y$ terms, factor out the leading coefficients before completing each square, and remember to add the factored amount (for example $4\\cdot4$) to the right side. Finally divide so the right side equals 1.",
          },
        ],
        keyFormulas: [
          { name: "Ellipse", statement: "$\\frac{(x-h)^2}{a^2}+\\frac{(y-k)^2}{b^2}=1$, $c^2=a^2-b^2$" },
          { name: "Hyperbola", statement: "$\\frac{(x-h)^2}{a^2}-\\frac{(y-k)^2}{b^2}=1$, $c^2=a^2+b^2$" },
          { name: "Asymptotes", statement: "$y-k=\\pm\\frac{b}{a}(x-h)$ for a horizontal transverse axis" },
        ],
        workedExample: {
          problem: "Find the foci of $\\frac{x^2}{25}+\\frac{y^2}{16}=1$.",
          solution: "The larger denominator $25$ is under $x^2$, so the major axis is horizontal with $a^2=25$ and $b^2=16$. Then $c^2=a^2-b^2=25-16=9$, so $c=3$. The center is the origin, so the foci are $(\\pm3,0)$ and the vertices are $(\\pm5,0)$.",
        },
      },
      questions: [
        {
          id: "pc-u5-ellipses-hyperbolas-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the foci of the ellipse $\\frac{x^2}{25}+\\frac{y^2}{9}=1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(\\pm5,0)$" },
              { id: "b", text: "$(\\pm4,0)$" },
              { id: "c", text: "$(\\pm3,0)$" },
              { id: "d", text: "$(0,\\pm4)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ellipse foci", statement: "For an ellipse with $a>b$, $c^2=a^2-b^2$ and the foci lie on the major axis at distance $c$ from the center." },
            ],
            steps: [
              { reasoning: "The larger denominator is under $x^2$, so $a^2=25$, $b^2=9$, and the major axis is horizontal.", working: "c^2=25-9=16 \\Rightarrow c=4", marks: 1, markCode: "M" },
              { reasoning: "Foci lie on the major axis (the $x$-axis) at distance 4 from the center.", working: "(\\pm4,0)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(\\pm4,0)$",
            commonErrors: ["Using $c=a=5$, which gives the vertices.", "Using $c=b=3$.", "Placing the foci on the minor axis."],
          },
        },
        {
          id: "pc-u5-ellipses-hyperbolas-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For the hyperbola $\\frac{x^2}{16}-\\frac{y^2}{9}=1$, find the $x$-coordinate of the right vertex, the positive slope of the asymptotes, and the $x$-coordinate of the right focus.",
          response: {
            type: "numeric",
            parts: [
              { label: "Right vertex $x$-coordinate", answer: 4 },
              { label: "Positive asymptote slope", answer: 0.75 },
              { label: "Right focus $x$-coordinate", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hyperbola", statement: "For $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$: vertices $(\\pm a,0)$, asymptotes $y=\\pm\\frac{b}{a}x$, and $c^2=a^2+b^2$." },
            ],
            steps: [
              { reasoning: "Identify $a^2=16$ (under the positive term) and $b^2=9$; the right vertex is at $x=a$.", working: "a=4,\\; b=3", marks: 1, markCode: "A" },
              { reasoning: "The asymptote slopes are $\\pm b/a$.", working: "\\frac{b}{a}=\\frac{3}{4}=0.75", marks: 1, markCode: "A" },
              { reasoning: "For a hyperbola, $c^2=a^2+b^2$ (a sum, not a difference).", working: "c=\\sqrt{16+9}=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vertex $x=4$, slope $\\frac34$, focus $x=5$.",
            commonErrors: ["Using $c^2=a^2-b^2$, which gives $\\sqrt7$.", "Using slope $a/b=4/3$.", "Taking $a=16$ rather than $a=\\sqrt{16}$."],
          },
        },
        {
          id: "pc-u5-ellipses-hyperbolas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The curve $4x^2+9y^2-16x+18y-11=0$ is an ellipse. Complete the square to write it in standard form. Find the center and the distance $c$ from the center to each focus (give $c$ to 2 decimal places).",
          response: {
            type: "numeric",
            parts: [
              { label: "Center $x$-coordinate", answer: 2 },
              { label: "Center $y$-coordinate", answer: -1 },
              { label: "Focal distance $c$", answer: 2.24, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Completing the square", statement: "Factor the leading coefficient from each variable group, complete the square, and add the factored amount to the right side." },
              { kind: "formula", name: "Ellipse", statement: "$\\frac{(x-h)^2}{a^2}+\\frac{(y-k)^2}{b^2}=1$ with $c^2=a^2-b^2$." },
            ],
            steps: [
              { reasoning: "Group and factor, then complete each square. Adding $4\\cdot4=16$ and $9\\cdot1=9$ to the right side.", working: "4(x^2-4x+4)+9(y^2+2y+1)=11+16+9", marks: 1, markCode: "M" },
              { reasoning: "Write as squares and divide by 36 so the right side equals 1.", working: "4(x-2)^2+9(y+1)^2=36 \\Rightarrow \\frac{(x-2)^2}{9}+\\frac{(y+1)^2}{4}=1", marks: 1, markCode: "A" },
              { reasoning: "Read the center from the squared terms.", working: "(h,k)=(2,-1)", marks: 1, markCode: "A" },
              { reasoning: "The larger denominator is $a^2=9$ and $b^2=4$, so $c^2=a^2-b^2$.", working: "c=\\sqrt{9-4}=\\sqrt5\\approx2.24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{(x-2)^2}{9}+\\frac{(y+1)^2}{4}=1$; center $(2,-1)$; $c=\\sqrt5\\approx2.24$.",
            commonErrors: ["Adding 4 and 1 instead of 16 and 9 to the right side.", "Reading the center as $(-2,1)$.", "Using $c=\\sqrt{9+4}$."],
          },
        },
        {
          id: "pc-u5-ellipses-hyperbolas-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider the hyperbola $9y^2-16x^2=144$.",
          parts: [
            { label: "a", prompt: "Write the equation in standard form and state the center and the direction in which the hyperbola opens.", marks: 2 },
            { label: "b", prompt: "Find the vertices and the foci.", marks: 2 },
            { label: "c", prompt: "Find the equations of the asymptotes.", marks: 2 },
            { label: "d", prompt: "Find the positive $y$-value of the point on the hyperbola with $x=3$ (to 2 decimal places), and explain why this value is greater than the $y$-value of the asymptote at $x=3$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Hyperbola, vertical transverse axis", statement: "$\\frac{y^2}{a^2}-\\frac{x^2}{b^2}=1$ has vertices $(0,\\pm a)$, foci $(0,\\pm c)$ with $c^2=a^2+b^2$, and asymptotes $y=\\pm\\frac{a}{b}x$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide by 144 so the right side is 1.", working: "\\frac{y^2}{16}-\\frac{x^2}{9}=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The center is the origin; the $y^2$ term is positive, so the branches open up and down (vertical transverse axis).", working: "a^2=16,\\; b^2=9", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Vertices are $a$ units from the center along the $y$-axis.", working: "(0,\\pm4)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $c^2=a^2+b^2$ for the foci.", working: "c=\\sqrt{16+9}=5,\\quad (0,\\pm5)", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For a vertical transverse axis the slopes are $\\pm a/b$.", working: "y=\\pm\\frac{4}{3}x", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Substitute $x=3$ and solve for the positive $y$.", working: "\\frac{y^2}{16}=1+\\frac{9}{9}=2 \\Rightarrow y=\\sqrt{32}\\approx5.66", marks: 2, markCode: "M" },
              { part: "d", reasoning: "The asymptote gives $y=\\frac43(3)=4$. Since $\\frac{y^2}{16}=1+\\frac{x^2}{9}>\\frac{x^2}{9}$, the hyperbola always lies farther from the $x$-axis than the asymptote, so $5.66>4$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{y^2}{16}-\\frac{x^2}{9}=1$, center $(0,0)$, opens up and down. (b) Vertices $(0,\\pm4)$, foci $(0,\\pm5)$. (c) $y=\\pm\\frac43x$. (d) $y\\approx5.66>4$.",
            commonErrors: ["Using slopes $\\pm b/a=\\pm3/4$ for a vertical hyperbola.", "Using $c^2=a^2-b^2$.", "Forgetting to divide the right side by 144 before reading $a^2$ and $b^2$."],
            examinerNote: "The hyperbola approaches but never touches its asymptotes, so at every $x$ the branch is strictly farther from the axis than the asymptote.",
          },
        },
      ],
    },
  ],
};
