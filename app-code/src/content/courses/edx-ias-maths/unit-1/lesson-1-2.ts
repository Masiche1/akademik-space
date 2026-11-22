import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edias-maths-u1-lesson-1-2",
  code: "1-2",
  title: "Straight Lines and Radian Trigonometry",
  goal: "I CAN find equations of straight lines, use parallel and perpendicular gradients, and work with radians, arc lengths and sector areas.",
  standards: ["WMA11 P1", "Coordinate geometry", "Trigonometry"],
  vocabulary: [
    { term: "Gradient", definition: "The steepness of a line, $m=\\frac{y_2-y_1}{x_2-x_1}$ between two points." },
    { term: "Parallel lines", definition: "Lines with the same gradient that never meet." },
    { term: "Perpendicular lines", definition: "Lines meeting at $90^\\circ$; their gradients multiply to $-1$ (unless one is vertical)." },
    { term: "Radian", definition: "The angle subtended at the centre of a circle by an arc equal in length to the radius. $\\pi$ radians $=180^\\circ$; one radian $=\\frac{180}{\\pi}$ degrees." },
    { term: "Arc length", definition: "The length of a curve of a circle: $s=r\\theta$ where $\\theta$ is in radians." },
    { term: "Sector area", definition: "The area of a 'slice' of a circle: $A=\\frac12r^2\\theta$ where $\\theta$ is in radians." },
  ],
  concepts: [
    {
      id: "edias-maths-u1-straight-lines",
      title: "Equations of straight lines",
      skill: "Find gradients, write equations of lines through points, and use parallel and perpendicular relationships.",
      lesson: {
        sections: [
          {
            heading: "Gradient and equation",
            body: "The gradient between $(x_1,y_1)$ and $(x_2,y_2)$ is $m=\\frac{y_2-y_1}{x_2-x_1}$. Given a point and a gradient, the equation is $y-y_1=m(x-x_1)$, which rearranges to $y=mx+c$ where $c$ is the $y$-intercept. A vertical line has undefined gradient and equation $x=a$.",
          },
          {
            heading: "Parallel and perpendicular lines",
            body: "Parallel lines share the same gradient. For perpendicular lines (neither vertical), the product of gradients is $-1$: if one line has gradient $m$, the perpendicular has gradient $-\\frac{1}{m}$.",
          },
          {
            heading: "Intersections and midpoints",
            body: "The midpoint of $(x_1,y_1)$ and $(x_2,y_2)$ is $\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$. To find where two lines meet, solve their equations simultaneously.",
          },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$" },
          { name: "Perpendicular gradients", statement: "$m_1m_2=-1$" },
        ],
        workedExample: {
          problem: "Find the equation of the line through $(2,-1)$ perpendicular to $y=3x+4$.",
          solution: "The given line has gradient $3$, so the perpendicular gradient is $-\\frac{1}{3}$. Using $y-y_1=m(x-x_1)$: $y+1=-\\frac{1}{3}(x-2)$, i.e. $y=-\\frac{1}{3}x-\\frac{1}{3}$.",
        },
      },
      questions: [
        {
          id: "edias-maths-u1-lines-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the gradient of the line through the points $(-2,5)$ and $(4,11)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$-\\frac{1}{3}$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
            ],
            steps: [
              { reasoning: "Substitute the coordinates into the gradient formula.", working: "m=\\frac{11-5}{4-(-2)}=\\frac{6}{6}=1", marks: 1, markCode: "M" },
              { reasoning: "The gradient is $1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $1$",
            commonErrors: ["Subtracting in the wrong order gives $-1$.", "Using $\\frac{x_2-x_1}{y_2-y_1}$ gives $\\frac{1}{1}=1$ coincidentally — check the formula direction."],
            examinerNote: "Order of subtraction must be consistent.",
          },
        },
        {
          id: "edias-maths-u1-lines-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the line that passes through $(1,4)$ and is parallel to $y=-2x+7$. Give your answer in the form $y=mx+c$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Parallel lines", statement: "Parallel lines have equal gradients." },
            ],
            steps: [
              { reasoning: "Parallel lines have the same gradient, so $m=-2$.", marks: 1, markCode: "M" },
              { reasoning: "Substitute the point into $y-y_1=m(x-x_1)$.", working: "y-4=-2(x-1)", marks: 1, markCode: "M" },
              { reasoning: "Expand and rearrange.", working: "y=-2x+2+4=-2x+6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-2x+6$",
            commonErrors: ["Using gradient $-\\frac{1}{2}$ (the perpendicular gradient).", "Forgetting to substitute the given point."],
          },
        },
        {
          id: "edias-maths-u1-lines-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The point $A(4,5)$ does not lie on the line $y=\\frac{1}{2}x-3$. Find the equation of the line that passes through $A$ and is perpendicular to $y=\\frac{1}{2}x-3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular gradients", statement: "For perpendicular lines $m_1m_2=-1$." },
              { kind: "formula", name: "Point-gradient form", statement: "$y-y_1=m(x-x_1)$." },
            ],
            steps: [
              { reasoning: "The given line has gradient $\\frac12$, so the perpendicular gradient is $-2$.", marks: 1, markCode: "M" },
              { reasoning: "Use point-gradient form with $A(4,5)$.", working: "y-5=-2(x-4)", marks: 1, markCode: "M" },
              { reasoning: "Expand.", working: "y=-2x+8+5", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "y=-2x+13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-2x+13$",
            commonErrors: ["Using gradient $2$ instead of $-2$ for the perpendicular.", "Passing the line through the origin instead of $A$."],
          },
        },
        {
          id: "edias-maths-u1-lines-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Points $A(-1,2)$ and $B(5,10)$ are given.",
          parts: [
            { label: "a", prompt: "Find the gradient of $AB$.", marks: 1 },
            { label: "b", prompt: "Find the equation of the line $AB$ in the form $y=mx+c$.", marks: 2 },
            { label: "c", prompt: "Find the coordinates of the midpoint of $AB$.", marks: 1 },
            { label: "d", prompt: "Find the equation of the perpendicular bisector of $AB$.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$." },
              { kind: "property", name: "Perpendicular gradients", statement: "$m_1m_2=-1$; the perpendicular bisector passes through the midpoint." },
            ],
            steps: [
              { part: "a", reasoning: "Apply the gradient formula.", working: "m=\\frac{10-2}{5-(-1)}=\\frac{8}{6}=\\frac{4}{3}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use point-gradient form with $A$.", working: "y-2=\\frac{4}{3}(x+1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand and simplify.", working: "y=\\frac{4}{3}x+\\frac{4}{3}+2=\\frac{4}{3}x+\\frac{10}{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Average the coordinates.", working: "\\left(\\frac{-1+5}{2},\\frac{2+10}{2}\\right)=(2,6)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Perpendicular gradient is the negative reciprocal.", working: "m_{\\perp}=-\\frac{3}{4}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Use the midpoint $(2,6)$ in point-gradient form.", working: "y-6=-\\frac{3}{4}(x-2)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Expand.", working: "y=-\\frac{3}{4}x+\\frac{3}{2}+6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify the constant.", working: "y=-\\frac{3}{4}x+\\frac{15}{2}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "State the final equation.", working: "y=-\\frac{3}{4}x+\\frac{15}{2}\\ \\text{or}\\ 3x+4y=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{4}{3}$ (b) $y=\\frac{4}{3}x+\\frac{10}{3}$ (c) $(2,6)$ (d) $y=-\\frac{3}{4}x+\\frac{15}{2}$",
            commonErrors: ["Using gradient $-\\frac{4}{3}$ for the perpendicular instead of $-\\frac{3}{4}$.", "Passing the perpendicular through $A$ instead of the midpoint.", "Arithmetic slips in the midpoint."],
            examinerNote: "Accept $3x+4y=30$ or any equivalent form in (d).",
          },
        },
      ],
    },
    {
      id: "edias-maths-u1-radians",
      title: "Radians, arc length and sector area",
      skill: "Convert between degrees and radians and apply $s=r\\theta$ and $A=\\frac12r^2\\theta$ in problems.",
      lesson: {
        sections: [
          {
            heading: "Radians",
            body: "One radian is the angle at the centre of a circle subtended by an arc equal to the radius. Since the circumference is $2\\pi r$, a full turn is $2\\pi$ radians and $180^\\circ=\\pi$ radians. Convert with $\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\times\\frac{\\pi}{180}$.",
          },
          {
            heading: "Arc length and sector area",
            body: "For a circle of radius $r$ and angle $\\theta$ radians at the centre: arc length $s=r\\theta$ and sector area $A=\\frac12r^2\\theta$. These follow because arc length is the fraction $\\frac{\\theta}{2\\pi}$ of the circumference $2\\pi r$, and sector area is the same fraction of $\\pi r^2$.",
          },
          {
            heading: "Choosing the right formula",
            body: "Degrees only appear in the conversion step — once in radians, use $s=r\\theta$ and $A=\\frac12r^2\\theta$. For a segment, subtract the triangle area $\\frac12r^2\\sin\\theta$ from the sector area.",
          },
        ],
        keyFormulas: [
          { name: "Degree–radian", statement: "$\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\times\\frac{\\pi}{180}$" },
          { name: "Arc length", statement: "$s=r\\theta$" },
          { name: "Sector area", statement: "$A=\\frac12r^2\\theta$" },
        ],
        workedExample: {
          problem: "A sector of a circle of radius $6$ cm has angle $\\frac{2\\pi}{3}$ radians. Find the arc length and the area of the sector.",
          solution: "$s=6\\times\\frac{2\\pi}{3}=4\\pi$ cm. $A=\\frac12\\times36\\times\\frac{2\\pi}{3}=12\\pi$ cm$^2$.",
        },
      },
      questions: [
        {
          id: "edias-maths-u1-rad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert $150^\\circ$ to radians, giving your answer in terms of $\\pi$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5\\pi}{3}$" },
              { id: "b", text: "$\\frac{5\\pi}{6}$" },
              { id: "c", text: "$\\frac{\\pi}{6}$" },
              { id: "d", text: "$\\frac{\\pi}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Degree–radian conversion", statement: "$\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\times\\frac{\\pi}{180}$." },
            ],
            steps: [
              { reasoning: "Multiply by $\\frac{\\pi}{180}$ and simplify.", working: "150\\times\\frac{\\pi}{180}=\\frac{5\\pi}{6}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{5\\pi}{6}$",
            commonErrors: ["Multiplying by $\\frac{180}{\\pi}$ instead of $\\frac{\\pi}{180}$.", "Simplifying $\\frac{150\\pi}{180}$ incorrectly."],
          },
        },
        {
          id: "edias-maths-u1-rad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sector of a circle of radius $9$ cm has an arc length of $6\\pi$ cm. Work out the angle of the sector in radians and the area of the sector.",
          response: {
            type: "numeric",
            parts: [
              { label: "angle (radians)", answer: 2.0944, tolerance: 0.001, unit: "radians" },
              { label: "area", answer: 84.823, tolerance: 0.001, unit: "cm^2" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$s=r\\theta$." },
              { kind: "formula", name: "Sector area", statement: "$A=\\frac12r^2\\theta$." },
            ],
            steps: [
              { reasoning: "Rearrange $s=r\\theta$ to find $\\theta$.", working: "\\theta=\\frac{s}{r}=\\frac{6\\pi}{9}=\\frac{2\\pi}{3}\\approx2.094", marks: 1, markCode: "M" },
              { reasoning: "Apply the sector area formula.", working: "A=\\frac12(9^2)\\left(\\frac{2\\pi}{3}\\right)", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $\\frac{81}{2}\\times\\frac{2\\pi}{3}=27\\pi$.", working: "A=27\\pi\\approx84.8\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\theta=\\frac{2\\pi}{3}$ rad $\\approx2.094$ rad; area $=27\\pi\\approx84.8$ cm$^2$",
            commonErrors: ["Using $A=\\pi r^2\\times\\frac{\\theta}{360}$ with radians — the fraction must be $\\frac{\\theta}{2\\pi}$."],
            examinerNote: "Exact answers $\\frac{2\\pi}{3}$ and $27\\pi$ are preferred; accept $2.09$ and $84.8$.",
          },
        },
        {
          id: "edias-maths-u1-rad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sector of a circle of radius $10$ cm has angle $\\frac{3\\pi}{4}$ radians. A smaller concentric sector of the same angle is removed, leaving an annular sector of area $35\\pi$ cm$^2$. Find the radius of the inner circle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sector area", statement: "$A=\\frac12r^2\\theta$; the annular sector is the difference of two sector areas." },
            ],
            steps: [
              { reasoning: "Write the annular area as outer sector minus inner sector.", working: "\\frac12\\theta(10^2-r^2)=35\\pi", marks: 1, markCode: "M" },
              { reasoning: "Substitute $\\theta=\\frac{3\\pi}{4}$.", working: "\\frac12\\times\\frac{3\\pi}{4}(100-r^2)=35\\pi", marks: 1, markCode: "M" },
              { reasoning: "Simplify and solve for $r^2$.", working: "\\frac{3\\pi}{8}(100-r^2)=35\\pi\\Rightarrow100-r^2=\\frac{280}{3}", marks: 1, markCode: "M" },
              { reasoning: "Rearrange and take the positive root.", working: "r^2=100-\\frac{280}{3}=\\frac{20}{3}\\Rightarrow r=\\sqrt{\\frac{20}{3}}=\\frac{2\\sqrt{15}}{3}\\approx2.58\\text{ cm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r=\\frac{2\\sqrt{15}}{3}$ cm $\\approx2.58$ cm",
            commonErrors: ["Adding the two sector areas instead of subtracting.", "Using $\\pi r^2\\theta$ without the $\\frac12$."],
            examinerNote: "Exact form preferred; accept $2.58$ cm.",
          },
        },
        {
          id: "edias-maths-u1-rad-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A circle has centre $O$ and radius $12$ cm. Points $A$ and $B$ lie on the circle and angle $AOB=\\frac{5\\pi}{6}$ radians.",
          parts: [
            { label: "a", prompt: "Find the length of the minor arc $AB$.", marks: 1 },
            { label: "b", prompt: "Find the area of the minor sector $AOB$.", marks: 1 },
            { label: "c", prompt: "Find the area of triangle $AOB$.", marks: 2 },
            { label: "d", prompt: "Hence find the area of the minor segment cut off by chord $AB$.", marks: 2 },
            { label: "e", prompt: "The major arc $AB$ subtends an angle of $\\frac{7\\pi}{6}$ radians at $O$. Find the length of the major arc.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arc length", statement: "$s=r\\theta$." },
              { kind: "formula", name: "Sector area", statement: "$A=\\frac12r^2\\theta$." },
              { kind: "formula", name: "Triangle area", statement: "$A=\\frac12ab\\sin C$ for two sides and included angle." },
            ],
            steps: [
              { part: "a", reasoning: "Apply $s=r\\theta$.", working: "s=12\\times\\frac{5\\pi}{6}=10\\pi\\approx31.4\\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Apply $A=\\frac12r^2\\theta$.", working: "A=\\frac12\\times144\\times\\frac{5\\pi}{6}=60\\pi\\approx188.5\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use two sides and the included angle.", working: "A=\\frac12(12)(12)\\sin\\frac{5\\pi}{6}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate: $\\sin\\frac{5\\pi}{6}=\\frac12$.", working: "A=72\\times\\frac12=36\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Segment = sector minus triangle.", working: "60\\pi-36\\approx152.5\\text{ cm}^2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Give the exact or decimal answer.", working: "60\\pi-36\\approx152.5\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Apply $s=r\\theta$ with the major angle.", working: "s=12\\times\\frac{7\\pi}{6}=14\\pi", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Simplify.", working: "14\\pi\\approx44.0\\text{ cm}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Check: minor $10\\pi$ + major $14\\pi$ $=24\\pi=2\\pi r$, the circumference.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10\\pi$ cm (b) $60\\pi$ cm$^2$ (c) $36$ cm$^2$ (d) $(60\\pi-36)$ cm$^2$ $\\approx152.5$ cm$^2$ (e) $14\\pi$ cm $\\approx44.0$ cm",
            commonErrors: ["Using degrees in the sector formula.", "Adding the triangle to the sector for the segment.", "Using $r=12$ as diameter somewhere."],
            examinerNote: "Accept $\\frac{5\\pi}{6}=150^\\circ$ conversions; exact surd/pi forms preferred.",
          },
        },
      ],
    },
  ],
};
