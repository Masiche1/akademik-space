import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ciam-u5-lesson-5-2",
  code: "1-6",
  title: "Tangents and Line-Circle Intersections",
  goal: "I CAN find tangents to circles and intersections of lines with circles.",
  standards: ["0606: coordinate geometry of circles"],
  vocabulary: [
    { term: "Tangent", definition: "Line touching circle at exactly one point; perpendicular to radius at that point." },
    { term: "Point of contact", definition: "Where tangent meets circle." },
    { term: "Discriminant test", definition: "Substituting line into circle gives quadratic; $\\Delta$ tells number of intersections." },
    { term: "Chord", definition: "Line segment joining two points on circle." },
  ],
  concepts: [
    {
      id: "ciam-u5-s2-tangent",
      title: "Tangents to circles",
      skill: "Find equations of tangents at IGCSE level.",
      lesson: {
        sections: [
          { heading: "The perpendicularity trick", body: "A tangent to a circle is perpendicular to the radius at the point of contact. So the recipe is: find the gradient of the radius from centre to the contact point, take its negative reciprocal for the tangent's gradient, then use $y-y_1=m(x-x_1)$ with the contact point. For a circle centred at the origin this is especially clean — e.g. tangent to $x^2+y^2=r^2$ at $(x_1,y_1)$ has gradient $-\\frac{x_1}{y_1}$." },
          { heading: "Tangent from external point", body: "If the question gives an external point and asks for tangents to a circle, first find the points of contact: the tangent length satisfies $T^2=d^2-r^2$ where $d$ is distance from external point to centre. Alternatively, write the tangent equation with unknown contact point $(x_1,y_1)$ on the circle, impose perpendicularity to the radius, and solve. At IGCSE level, most questions give you the contact point directly or use the perpendicularity shortcut." },
        ],
        keyFormulas: [
          { name: "Tangent gradient", statement: "$m_{\\text{tangent}}=-\\frac{x_1-a}{y_1-b}$ for centre $(a,b)$" },
          { name: "Tangent length", statement: "$T=\\sqrt{d^2-r^2}$" },
        ],
        workedExample: { problem: "Find the tangent to $x^2+y^2=25$ at $(3,4)$.", solution: "Radius gradient: $\\frac{4}{3}$, so tangent gradient $=-\\frac43$. Equation: $y-4=-\\frac43(x-3)$ → $4x+3y=25$. Check: $(3,4)$ satisfies $12+12=24$? No — $4(3)+3(4)=24\\neq25$. Recompute: $y-4=-\\frac43(x-3)$ → $4(y-4)=-3(x-3)$ → $4y-16=-3x+9$ → $3x+4y=25$. Check: $9+16=25$ ✓." },
      },
      questions: [
        {
          id: "ciam-u5-s2-ta-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The tangent to a circle at a point is perpendicular to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The radius at that point" }, { id: "b", text: "The x-axis" }, { id: "c", text: "The tangent at another point" }, { id: "d", text: "The centre" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "theorem", name: "Tangent property", statement: "Perpendicular to radius." }], steps: [{ reasoning: "Standard result: tangent ⊥ radius at contact.", marks: 1, markCode: "A" }], finalAnswer: "Radius at that point" },
        },
        {
          id: "ciam-u5-s2-ta-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the tangent to $x^2+y^2=16$ at $(4,0)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Radius gradient → perpendicular." }], steps: [
            { reasoning: "Radius from $(0,0)$ to $(4,0)$ is horizontal, gradient 0 → tangent vertical: $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=4$" },
        },
        {
          id: "ciam-u5-s2-ta-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the tangent to $x^2+y^2=20$ at $(2,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent", statement: "Negative reciprocal gradient." }], steps: [
            { reasoning: "Radius gradient $=\\frac42=2$ → tangent gradient $-\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "$y-4=-\\frac12(x-2)$ → $x+2y=10$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2+8=10$ ✓; point on circle: $4+16=20$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x+2y=10$" },
        },
        {
          id: "ciam-u5-s2-ta-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the length of the tangent from $(6,8)$ to the circle $x^2+y^2=25$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent length", statement: "$T=\\sqrt{d^2-r^2}$." }], steps: [
            { reasoning: "Distance from origin: $d=\\sqrt{36+64}=10$.", marks: 1, markCode: "M" },
            { reasoning: "$T=\\sqrt{d^2-r^2}=\\sqrt{100-25}=\\sqrt{75}=5\\sqrt3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $5\\sqrt3\\approx8.66$ units.", marks: 1, markCode: "M" },
            { reasoning: "Check: tangent, radius, centre form right triangle. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$5\\sqrt3$" },
        },
      ],
    },
    {
      id: "ciam-u5-s2-intersection",
      title: "Line-circle intersections",
      skill: "Determine intersections using substitution and discriminant at IGCSE level.",
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
          id: "ciam-u5-s2-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Substituting a line equation into a circle equation gives…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A quadratic whose discriminant gives intersection count" }, { id: "b", text: "A linear equation" }, { id: "c", text: "A cubic" }, { id: "d", text: "The radius" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Quadratic in one variable." }], steps: [{ reasoning: "Standard method.", marks: 1, markCode: "A" }], finalAnswer: "Quadratic; discriminant classifies" },
        },
        {
          id: "ciam-u5-s2-in-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find intersections of $x^2+y^2=9$ and $y=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Simple case." }], steps: [
            { reasoning: "$x^2+0=9$ → $x=\\pm3$ → points $(3,0)$ and $(-3,0)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,0)$ and $(-3,0)$" },
        },
        {
          id: "ciam-u5-s2-in-q3", difficulty: "core", totalMarks: 3,
          stem: "Find where $y=x+1$ meets $x^2+y^2=25$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Solve quadratic." }], steps: [
            { reasoning: "$x^2+(x+1)^2=25$ → $2x^2+2x-24=0$ → $x^2+x-12=0$ → $(x+4)(x-3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-4$ → $y=-3$; $x=3$ → $y=4$. Points $(-4,-3),(3,4)$.", marks: 1, markCode: "M" },
            { reasoning: "Both satisfy circle equation. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$(-4,-3)$ and $(3,4)$" },
        },
        {
          id: "ciam-u5-s2-in-q4", difficulty: "core", totalMarks: 4,
          stem: "Show that $y=3x+10$ is tangent to $x^2+y^2=10$ and find the point of contact.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangency via discriminant", statement: "$\\Delta=0$." }], steps: [
            { reasoning: "$x^2+(3x+10)^2=10$ → $x^2+9x^2+60x+100=10$ → $10x^2+60x+90=0$ → $x^2+6x+9=0$.", marks: 1, markCode: "M" },
            { reasoning: "$(x+3)^2=0$ → $x=-3$ (repeated) → $\\Delta=0$, tangent confirmed.", marks: 1, markCode: "M" },
            { reasoning: "$y=3(-3)+10=1$ → contact point $(-3,1)$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $9+1=10$ ✓ on circle; gradient of radius $-\\frac13$ ⊥ tangent gradient 3. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "Tangent at $(-3,1)$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u5-s2-circ-notes", title: "Tangents and intersections — notes", summary: "Perpendicularity and discriminant methods.",
      sections: [
        { heading: "Tangent", body: "Tangent ⊥ radius at contact. Gradient of tangent = negative reciprocal of radius gradient." },
        { heading: "Intersection", body: "Substitute line into circle → quadratic → discriminant: >0 two points, =0 tangent, <0 none." },
      ] },
  ],
};
