import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "olam-u5-lesson-5-2",
  code: "1-6",
  title: "Tangents and Line-Circle Intersections",
  goal: "I CAN find tangents to circles and intersections of lines with circles.",
  standards: ["4037: coordinate geometry of circles"],
  vocabulary: [
    { term: "Tangent", definition: "Line touching circle at exactly one point; perpendicular to radius at that point." },
    { term: "Point of contact", definition: "Where tangent meets circle." },
    { term: "Discriminant test", definition: "Substituting line into circle gives quadratic; $\\Delta$ tells number of intersections." },
    { term: "Chord", definition: "Line segment joining two points on circle." },
  ],
  concepts: [
    {
      id: "olam-u5-s2-tangent",
      title: "Tangents to circles",
      skill: "Find equations of tangents at O Level.",
      lesson: {
        sections: [
          { heading: "The perpendicularity trick", body: "A tangent to a circle is perpendicular to the radius at the point of contact. So the recipe is: find the gradient of the radius from centre to the contact point, take its negative reciprocal for the tangent's gradient, then use $y-y_1=m(x-x_1)$ with the contact point. For a circle centred at the origin this is especially clean — e.g. tangent to $x^2+y^2=r^2$ at $(x_1,y_1)$ has gradient $-\\frac{x_1}{y_1}$." },
          { heading: "Tangent from external point", body: "If the question gives an external point and asks for tangents to a circle, first find the points of contact: the tangent length satisfies $T^2=d^2-r^2$ where $d$ is distance from external point to centre. Alternatively, write the tangent equation with unknown contact point $(x_1,y_1)$ on the circle, impose perpendicularity to the radius, and solve. At O Level, most questions give you the contact point directly or use the perpendicularity shortcut." },
        ],
        keyFormulas: [
          { name: "Tangent gradient", statement: "$m_{\\text{tangent}}=-\\frac{x_1-a}{y_1-b}$ for centre $(a,b)$" },
          { name: "Tangent length", statement: "$T=\\sqrt{d^2-r^2}$" },
        ],
        workedExample: { problem: "Find the tangent to $x^2+y^2=25$ at $(3,4)$.", solution: "Radius gradient: $\\frac{4}{3}$, so tangent gradient $=-\\frac43$. Equation: $y-4=-\\frac43(x-3)$ → $4x+3y=25$. Check: $(3,4)$ satisfies $12+12=24$? No — $4(3)+3(4)=24\\neq25$. Recompute: $y-4=-\\frac43(x-3)$ → $4(y-4)=-3(x-3)$ → $4y-16=-3x+9$ → $3x+4y=25$. Check: $9+16=25$ ✓." },
      },
      questions: [
        {
          id: "olam-u5-s2-ta-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The tangent to a circle at a point is perpendicular to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The tangent at another point" },
            { id: "b", text: "The radius at that point" },
            { id: "c", text: "The centre" },
            { id: "d", text: "The x-axis" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "theorem", name: "Tangent property", statement: "Perpendicular to radius." }], steps: [{ reasoning: "Standard result: tangent ⊥ radius at contact.", marks: 1, markCode: "A" }], finalAnswer: "Radius at that point" },
        },
        {
          id: "olam-u5-s2-ta-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the tangent to $x^2+y^2=16$ at $(4,0)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Radius gradient → perpendicular." }], steps: [
            { reasoning: "Radius from $(0,0)$ to $(4,0)$ is horizontal, gradient 0 → tangent vertical: $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=4$" },
        },
        {
          id: "olam-u5-s2-ta-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the tangent to $x^2+y^2=20$ at $(2,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Negative reciprocal gradient." }], steps: [
            { reasoning: "Radius gradient $=\\frac42=2$ → tangent gradient $-\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "$y-4=-\\frac12(x-2)$ → $x+2y=10$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2+8=10$ ✓; point on circle: $4+16=20$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x+2y=10$" },
        },
        {
          id: "olam-u5-s2-ta-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the length of the tangent from $(6,8)$ to the circle $x^2+y^2=25$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent length", statement: "$T=\\sqrt{d^2-r^2}$." }], steps: [
            { reasoning: "Distance from origin: $d=\\sqrt{36+64}=10$.", marks: 1, markCode: "M" },
            { reasoning: "$T=\\sqrt{d^2-r^2}=\\sqrt{100-25}=\\sqrt{75}=5\\sqrt3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $5\\sqrt3\\approx8.66$ units.", marks: 1, markCode: "M" },
            { reasoning: "Check: tangent, radius, centre form right triangle. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$5\\sqrt3$" },
        },
        {
          id: "olam-u5-s2-ta-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A tangent to a circle and the radius to the point of contact are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Equal in length" },
            { id: "b", text: "Perpendicular" },
            { id: "c", text: "Coincident" },
            { id: "d", text: "Parallel" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "theorem", name: "Tangent property", statement: "Perpendicular to radius." }], steps: [{ reasoning: "Standard result.", marks: 1, markCode: "A" }], finalAnswer: "Perpendicular" },
        },
        {
          id: "olam-u5-s2-ta-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the tangent to $x^2+y^2=9$ at $(0,3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Radius gradient then perpendicular." }], steps: [
            { reasoning: "Radius from $(0,0)$ to $(0,3)$ is vertical → tangent horizontal: $y=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $y=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=3$" },
        },
        {
          id: "olam-u5-s2-ta-q7", difficulty: "core", totalMarks: 1,
          stem: "The tangent to $x^2+y^2=25$ at $(5,0)$ has equation…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x+y=5$" },
            { id: "b", text: "$y=-x+5$" },
            { id: "c", text: "$x=5$" },
            { id: "d", text: "$y=5$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Radius horizontal → tangent vertical." }], steps: [{ reasoning: "Radius to $(5,0)$ is horizontal, so tangent is $x=5$.", marks: 1, markCode: "A" }], finalAnswer: "$x=5$" },
        },
        {
          id: "olam-u5-s2-ta-q8", difficulty: "core", totalMarks: 3,
          stem: "Find the tangent to $x^2+y^2=50$ at $(1,7)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Negative reciprocal gradient." }], steps: [
            { reasoning: "Radius gradient $=\\frac{7}{1}=7$ → tangent gradient $-\\frac17$.", marks: 1, markCode: "M" },
            { reasoning: "$y-7=-\\frac17(x-1)$ → $x+7y=50$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $1+49=50$ ✓; point on circle: $1+49=50$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x+7y=50$" },
        },
        {
          id: "olam-u5-s2-ta-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the length of the tangent from $(5,12)$ to $x^2+y^2=25$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Tangent length", statement: "$T=\\sqrt{d^2-r^2}$." }], steps: [
            { reasoning: "$d=\\sqrt{25+144}=13$; $T=\\sqrt{169-25}=\\sqrt{144}=12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olam-u5-s2-ta-q10", difficulty: "core", totalMarks: 1,
          stem: "The tangent to a circle at $(x_1,y_1)$ on $x^2+y^2=r^2$ has gradient…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{x_1}{y_1}$" },
            { id: "b", text: "$-\\frac{x_1}{y_1}$" },
            { id: "c", text: "$-\\frac{y_1}{x_1}$" },
            { id: "d", text: "$-\\frac{r}{x_1}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Tangent gradient", statement: "Negative reciprocal of radius gradient $\\frac{y_1}{x_1}$." }], steps: [{ reasoning: "Radius gradient $\\frac{y_1}{x_1}$ → tangent $-\\frac{x_1}{y_1}$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac{x_1}{y_1}$" },
        },
        {
          id: "olam-u5-s2-ta-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the tangent to the circle $(x-2)^2+(y-3)^2=18$ at $(5,6)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent off-centre", statement: "Radius gradient relative to centre." }], steps: [
            { reasoning: "Check point: $(5-2)^2+(6-3)^2=9+9=18$ ✓ on circle.", marks: 1, markCode: "M" },
            { reasoning: "Radius from $(2,3)$ to $(5,6)$: gradient $\\frac{6-3}{5-2}=1$ → tangent gradient $-1$.", marks: 1, markCode: "M" },
            { reasoning: "$y-6=-1(x-5)$ → $x+y=11$.", marks: 1, markCode: "M" },
            { reasoning: "Distance from centre $(2,3)$ to $x+y=11$ is $\\frac{|2+3-11|}{\\sqrt2}=3\\sqrt2=r$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x+y=11$" },
        },
        {
          id: "olam-u5-s2-ta-q12", difficulty: "foundation", totalMarks: 2,
          stem: "Find the length of the tangent from $(0,13)$ to $x^2+y^2=25$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Tangent length", statement: "$T=\\sqrt{d^2-r^2}$." }], steps: [
            { reasoning: "$d=13$; $T=\\sqrt{169-25}=\\sqrt{144}=12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olam-u5-s2-ta-q13", difficulty: "core", totalMarks: 1,
          stem: "Two tangents can be drawn from an external point to a circle because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The point lies on the circle" },
            { id: "b", text: "Circles always have tangents" },
            { id: "c", text: "Tangents are parallel" },
            { id: "d", text: "The point is outside the circle, so two contact points exist" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "External point", statement: "Two tangents from outside point." }], steps: [{ reasoning: "An external point has exactly two tangent lines to a circle.", marks: 1, markCode: "A" }], finalAnswer: "Two contact points exist" },
        },
        {
          id: "olam-u5-s2-ta-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the tangent to $x^2+y^2=10$ at $(3,1)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Negative reciprocal gradient." }], steps: [
            { reasoning: "Radius gradient $=\\frac{1}{3}$ → tangent gradient $-3$.", marks: 1, markCode: "M" },
            { reasoning: "$y-1=-3(x-3)$ → $3x+y=10$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $9+1=3(3)+1=10$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3x+y=10$" },
        },
        {
          id: "olam-u5-s2-ta-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the length of the tangent from $(2,2)$ to the circle $x^2+y^2=4$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Tangent length", statement: "$T=\\sqrt{d^2-r^2}$." }], steps: [
            { reasoning: "$d=\\sqrt{4+4}=2\\sqrt2$; $T=\\sqrt{8-4}=\\sqrt4=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u5-s2-ta-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the tangent to $(x-1)^2+(y+2)^2=20$ at $(3,-6)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent off-centre", statement: "Radius from centre to contact point." }], steps: [
            { reasoning: "Check point: $(3-1)^2+(-6+2)^2=4+16=20$ ✓ on circle.", marks: 1, markCode: "M" },
            { reasoning: "Radius from $(1,-2)$ to $(3,-6)$: gradient $\\frac{-6-(-2)}{3-1}=\\frac{-4}{2}=-2$ → tangent gradient $\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "$y-(-6)=\\frac12(x-3)$ → $2y+12=x-3$.", marks: 1, markCode: "M" },
            { reasoning: "$x-2y=15$; check: $3-2(-6)=15$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x-2y=15$" },
        },
      ],
    },
    {
      id: "olam-u5-s2-intersection",
      title: "Line-circle intersections",
      skill: "Determine intersections using substitution and discriminant at O Level.",
      lesson: {
        sections: [
          { heading: "Substitution method", body: "To find where a line meets a circle, substitute the line's equation into the circle's equation. This produces a quadratic in one variable — its discriminant tells you everything: $\\Delta>0$ two intersection points (secant), $\\Delta=0$ one point (tangent), $\\Delta<0$ no intersection. The solutions give the x-coordinates; substitute back into the line to get the y-coordinates." },
          { heading: "Worked pattern", body: "For $x^2+y^2=25$ and $y=x+1$: substitute to get $x^2+(x+1)^2=25$ → $2x^2+2x-24=0$ → $x^2+x-12=0$ → $(x+4)(x-3)=0$ → $x=-4$ or $3$, giving points $(-4,-3)$ and $(3,4)$. Always verify each point satisfies BOTH equations — substitution can introduce no errors here but checking is cheap insurance." },
        ],
        keyFormulas: [
          { name: "Intersection", statement: "Substitute line into circle → quadratic → discriminant" },
        ],
        workedExample: { problem: "Does $y=x+5$ intersect $x^2+y^2=25$?", solution: "$x^2+(x+5)^2=25$ → $2x^2+10x=0$ → $x(x+5)=0$ → $x=0$ or $-5$. Points $(0,5)$ and $(-5,0)$ — two intersections (secant)." },
      },
      questions: [
        {
          id: "olam-u5-s2-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Substituting a line equation into a circle equation gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A cubic" },
            { id: "b", text: "The radius" },
            { id: "c", text: "A quadratic whose discriminant gives intersection count" },
            { id: "d", text: "A linear equation" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Quadratic in one variable." }], steps: [{ reasoning: "Standard method.", marks: 1, markCode: "A" }], finalAnswer: "Quadratic; discriminant classifies" },
        },
        {
          id: "olam-u5-s2-in-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find intersections of $x^2+y^2=9$ and $y=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Simple case." }], steps: [
            { reasoning: "$x^2+0=9$ → $x=\\pm3$ → points $(3,0)$ and $(-3,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,0)$ and $(-3,0)$" },
        },
        {
          id: "olam-u5-s2-in-q3", difficulty: "core", totalMarks: 3,
          stem: "Find where $y=x+1$ meets $x^2+y^2=25$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Solve quadratic." }], steps: [
            { reasoning: "$x^2+(x+1)^2=25$ → $2x^2+2x-24=0$ → $x^2+x-12=0$ → $(x+4)(x-3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-4$ → $y=-3$; $x=3$ → $y=4$. Points $(-4,-3),(3,4)$.", marks: 1, markCode: "M" },
            { reasoning: "Both satisfy circle equation. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-4,-3)$ and $(3,4)$" },
        },
        {
          id: "olam-u5-s2-in-q4", difficulty: "core", totalMarks: 4,
          stem: "Show that $y=3x+10$ is tangent to $x^2+y^2=10$ and find the point of contact.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangency via discriminant", statement: "$\\Delta=0$." }], steps: [
            { reasoning: "$x^2+(3x+10)^2=10$ → $x^2+9x^2+60x+100=10$ → $10x^2+60x+90=0$ → $x^2+6x+9=0$.", marks: 1, markCode: "M" },
            { reasoning: "$(x+3)^2=0$ → $x=-3$ (repeated) → $\\Delta=0$, tangent confirmed.", marks: 1, markCode: "M" },
            { reasoning: "$y=3(-3)+10=1$ → contact point $(-3,1)$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $9+1=10$ ✓ on circle; gradient of radius $-\\frac13$ ⊥ tangent gradient 3. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "Tangent at $(-3,1)$" },
        },
        {
          id: "olam-u5-s2-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A line meets a circle in exactly one point when the substituted quadratic has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No real roots" },
            { id: "b", text: "One root equal to zero" },
            { id: "c", text: "A repeated root ($\\Delta=0$)" },
            { id: "d", text: "Two distinct real roots" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "$\\Delta=0$ tangent." }], steps: [{ reasoning: "One intersection point means repeated root.", marks: 1, markCode: "A" }], finalAnswer: "Repeated root" },
        },
        {
          id: "olam-u5-s2-in-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the intersections of $x^2+y^2=16$ and $y=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Set $y=0$." }], steps: [
            { reasoning: "$x^2=16$ → $x=\\pm4$ → points $(4,0)$ and $(-4,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(4,0)$ and $(-4,0)$" },
        },
        {
          id: "olam-u5-s2-in-q7", difficulty: "core", totalMarks: 1,
          stem: "Substituting $y=x$ into $x^2+y^2=8$ gives the quadratic…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2x^2=8$" },
            { id: "b", text: "$x^4=8$" },
            { id: "c", text: "$x^2=8$" },
            { id: "d", text: "$2x^2+8=0$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Replace $y$ by $x$." }], steps: [{ reasoning: "$x^2+x^2=8$ → $2x^2=8$.", marks: 1, markCode: "A" }], finalAnswer: "$2x^2=8$" },
        },
        {
          id: "olam-u5-s2-in-q8", difficulty: "core", totalMarks: 3,
          stem: "Find where $y=x-1$ meets $x^2+y^2=25$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Solve quadratic." }], steps: [
            { reasoning: "$x^2+(x-1)^2=25$ → $2x^2-2x-24=0$ → $x^2-x-12=0$ → $(x-4)(x+3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=4$ → $y=3$; $x=-3$ → $y=-4$. Points $(4,3)$ and $(-3,-4)$.", marks: 1, markCode: "M" },
            { reasoning: "Both satisfy the circle equation. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$(4,3)$ and $(-3,-4)$" },
        },
        {
          id: "olam-u5-s2-in-q9", difficulty: "core", totalMarks: 2,
          stem: "How many points of intersection does $y=7$ have with $x^2+y^2=25$?",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant", statement: "$x^2+49=25$ impossible." }], steps: [
            { reasoning: "$x^2+49=25$ → $x^2=-24$, no real solutions.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0 intersection points.", marks: 1, markCode: "A" },
          ], finalAnswer: "0" },
        },
        {
          id: "olam-u5-s2-in-q10", difficulty: "core", totalMarks: 1,
          stem: "The line $y=x+5$ meets $x^2+y^2=25$ in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One point (tangent)" },
            { id: "b", text: "No points" },
            { id: "c", text: "Two points" },
            { id: "d", text: "Three points" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "$x=0$ or $-5$ → two points." }], steps: [{ reasoning: "$2x^2+10x=0$ → $x=0,-5$: two intersection points.", marks: 1, markCode: "A" }], finalAnswer: "Two points" },
        },
        {
          id: "olam-u5-s2-in-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Find the points of intersection of $x^2+y^2=13$ and $y=2x+1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Solve quadratic." }], steps: [
            { reasoning: "$x^2+(2x+1)^2=13$ → $5x^2+4x-12=0$ → $(5x-6)(x+2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-2$ → $y=-3$; $x=\\frac65$ → $y=\\frac{17}{5}$. Points $(-2,-3)$ and $(\\frac65,\\frac{17}{5})$.", marks: 1, markCode: "M" },
            { reasoning: "Verify $(-2,-3)$: $4+9=13$ ✓; verify $(\\frac65,\\frac{17}{5})$: $\\frac{36+289}{25}=13$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-2,-3)$ and $(\\frac65,\\frac{17}{5})$" },
        },
        {
          id: "olam-u5-s2-in-q12", difficulty: "foundation", totalMarks: 2,
          stem: "Find the intersections of $x^2+y^2=36$ and the line $x=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Set $x=0$." }], steps: [
            { reasoning: "$y^2=36$ → $y=\\pm6$ → points $(0,6)$ and $(0,-6)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(0,6)$ and $(0,-6)$" },
        },
        {
          id: "olam-u5-s2-in-q13", difficulty: "core", totalMarks: 1,
          stem: "If the substituted quadratic has $\\Delta<0$, the line and circle…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Coincide" },
            { id: "b", text: "Meet in two points" },
            { id: "c", text: "Do not intersect" },
            { id: "d", text: "Are tangent" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "$\\Delta<0$ no real roots." }], steps: [{ reasoning: "Negative discriminant means no real intersection points.", marks: 1, markCode: "A" }], finalAnswer: "Do not intersect" },
        },
        {
          id: "olam-u5-s2-in-q14", difficulty: "core", totalMarks: 3,
          stem: "Find where $y=2x$ meets $x^2+y^2=20$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Solve quadratic." }], steps: [
            { reasoning: "$x^2+4x^2=20$ → $5x^2=20$ → $x=\\pm2$.", marks: 1, markCode: "M" },
            { reasoning: "$x=2$ → $y=4$; $x=-2$ → $y=-4$. Points $(2,4)$ and $(-2,-4)$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $4+16=20$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2,4)$ and $(-2,-4)$" },
        },
        {
          id: "olam-u5-s2-in-q15", difficulty: "core", totalMarks: 2,
          stem: "Find the x-coordinates of the intersections of $y=x+2$ with $x^2+y^2=10$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 1 }, { label: "b", answer: -3 },
          ], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Solve quadratic for $x$." }], steps: [
            { reasoning: "$x^2+(x+2)^2=10$ → $2x^2+4x-6=0$ → $x^2+2x-3=0$ → $(x+3)(x-1)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=1$ → $y=3$; $x=-3$ → $y=-1$. Points $(1,3)$ and $(-3,-1)$; x-coordinates $1, -3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1$ or $x=-3$" },
        },
        {
          id: "olam-u5-s2-in-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Determine whether $y=3x-5$ is a secant, tangent or misses $x^2+y^2=10$, justifying your answer.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant test", statement: "Compute $\\Delta$." }], steps: [
            { reasoning: "$x^2+(3x-5)^2=10$ → $10x^2-30x+15=0$ → $2x^2-6x+3=0$.", marks: 1, markCode: "M" },
            { reasoning: "$\\Delta=36-24=12>0$ → two distinct real roots → secant.", marks: 1, markCode: "M" },
            { reasoning: "$x=\\frac{6\\pm\\sqrt{12}}{4}=\\frac{3\\pm\\sqrt3}{2}$; corresponding $y$ values give two intersection points.", marks: 1, markCode: "M" },
            { reasoning: "Conclusion: secant (two intersection points).", marks: 1, markCode: "A" },
          ], finalAnswer: "Secant — two intersection points" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u5-s2-circ-notes", title: "Tangents and intersections — notes", summary: "Perpendicularity and discriminant methods.",
      sections: [
        { heading: "Tangent", body: "Tangent ⊥ radius at contact. Gradient of tangent = negative reciprocal of radius gradient." },
        { heading: "Intersection", body: "Substitute line into circle → quadratic → discriminant: >0 two points, =0 tangent, <0 none." },
      ] },
  ],
};
