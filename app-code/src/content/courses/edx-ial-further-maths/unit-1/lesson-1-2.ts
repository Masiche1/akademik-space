import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edialfm-u1-lesson-1-2",
  code: "1-2",
  title: "The Parabola and Rectangular Hyperbola",
  goal: "I CAN derive and use the standard equations of the parabola $x^2=4ay$ and rectangular hyperbola $xy=c^2$, including tangents, normals, chord properties and asymptotes.",
  standards: ["WFM01 FP1", "Coordinate systems"],
  vocabulary: [
    { term: "Parabola", definition: "Locus of points equidistant from a fixed point (focus) and fixed line (directrix); standard form $x^2=4ay$ with focus $(0,a)$, directrix $y=-a$." },
    { term: "Vertex", definition: "The turning point of the parabola, at the origin for $x^2=4ay$." },
    { term: "Focal chord", definition: "A chord of the parabola passing through the focus; endpoints have parameters $t$ and $-\\frac1t$." },
    { term: "Rectangular hyperbola", definition: "$xy=c^2$ — a hyperbola with perpendicular asymptotes $x=0$ and $y=0$." },
    { term: "Asymptote", definition: "A line that the curve approaches but never meets; for $xy=c^2$ they are the coordinate axes." },
  ],
  concepts: [
    {
      id: "edialfm-u1-parabola",
      title: "The parabola $x^2=4ay$",
      skill: "Work with the standard parabola: focus, directrix, tangents, normals, chord properties and focal chords.",
      lesson: {
        sections: [
          {
            heading: "Key elements and parametric form",
            body: "For $x^2=4ay$: focus $S=(0,a)$, directrix $y=-a$, vertex $(0,0)$, axis $x=0$. A point on the curve is parametrised as $P=(2at,at^2)$. Since $\\frac{dy}{dx}=\\frac{x}{2a}=t$ at this point, the tangent is $tx=y+at^2$ and the normal has gradient $-\\frac1t$.",
          },
          {
            heading: "Intersection of tangents",
            body: "Tangents at parameters $t_1,t_2$ meet at $T=\\left(a(t_1+t_2),\\,at_1t_2\\right)$. When $t_1t_2=-1$ (a focal chord), $T$ lies on the directrix $y=-a$ — a key exam result.",
          },
          {
            heading: "Focal chords",
            body: "A chord through the focus has endpoints with parameters $t$ and $-\\frac1t$ (since $t_1t_2=-1$). Its length is $L=a\\left(t+\\frac1t\\right)^2$, minimised when $t=\\pm1$ giving the latus rectum $4a$.",
          },
        ],
        keyFormulas: [
          { name: "Standard parabola", statement: "$x^2=4ay$: focus $(0,a)$, directrix $y=-a$" },
          { name: "Parametric point and tangent", statement: "$P=(2at,at^2)$; tangent $tx=y+at^2$" },
          { name: "Tangent intersection", statement: "$T=\\left(a(t_1+t_2),at_1t_2\\right)$; focal chord $\\Rightarrow t_1t_2=-1$" },
        ],
        workedExample: {
          problem: "Find the equation of the tangent to $x^2=8y$ at the point $(4,2)$.",
          solution: "$x^2=8y$ means $4a=8$, so $a=2$. The point $(4,2)$ corresponds to $t=1$ since $(2at,at^2)=(4,2)$. Tangent: $tx=y+at^2\\Rightarrow x=y+2$, i.e. $y=x-2$.",
        },
      },
      questions: [
        {
          id: "edialfm-par-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the parabola $x^2=12y$, what are the coordinates of the focus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3,0)$" },
              { id: "b", text: "$(0,12)$" },
              { id: "c", text: "$(0,6)$" },
              { id: "d", text: "$(0,3)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Focus", statement: "$x^2=4ay$ has focus $(0,a)$." }],
            steps: [{ reasoning: "$4a=12\\Rightarrow a=3$, focus $(0,3)$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $(0,3)$",
          },
        },
        {
          id: "edialfm-par-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the tangent to $x^2=8y$ at the point $(2,\\frac12)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Tangent", statement: "At $(2at,at^2)$ the tangent is $tx=y+at^2$." }],
            steps: [
              { reasoning: "$a=2$; point $(2,\\frac12)$ gives $2at=2\\Rightarrow t=\\frac12$; check $at^2=2(\\frac14)=\\frac12$ ✓.", working: "t=1/2", marks: 1, markCode: "M" },
              { reasoning: "Tangent: $\\frac12x=y+2(\\frac14)=y+\\frac12$, so $x=2y+1$.", working: "x=2y+1", marks: 1, markCode: "M" },
              { reasoning: "State equation $y=\\frac{x-1}{2}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=\\frac{x-1}{2}$",
            commonErrors: ["Wrong $a$ or parameter."],
          },
        },
        {
          id: "edialfm-par-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A focal chord of $x^2=4y$ has endpoints with parameters $t$ and $-\\frac1t$. Find its length in terms of $t$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Focal chord", statement: "Endpoints $(2at,at^2)$ and $(-\\frac{2a}{t},\\frac{a}{t^2})$; length $a\\left(t+\\frac1t\\right)^2$." }],
            steps: [
              { reasoning: "Endpoints: $(2t,t^2)$ and $(-\\frac2t,\\frac{1}{t^2})$ for $a=1$.", working: "endpoints", marks: 1, markCode: "M" },
              { reasoning: "$\\Delta x=2\\left(t+\\frac1t\\right)$, $\\Delta y=\\left(t-\\frac1t\\right)\\left(t+\\frac1t\\right)$.", working: "deltas", marks: 1, markCode: "M" },
              { reasoning: "$L=\\sqrt{4\\left(t+\\frac1t\\right)^2+\\left(t-\\frac1t\\right)^2\\left(t+\\frac1t\\right)^2}=\\left(t+\\frac1t\\right)^2$.", working: "L=(t+1/t)^2", marks: 1, markCode: "M" },
              { reasoning: "State length.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$L=\\left(t+\\frac{1}{t}\\right)^2$",
            commonErrors: ["Sign errors in $\\Delta y$; forgetting $a$ factor."],
          },
        },
        {
          id: "edialfm-par-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For the parabola $x^2=4ay$, tangents at points with parameters $t_1$ and $t_2$ meet at point $T$.",
          parts: [
            { label: "a", prompt: "Find the coordinates of $T$ in terms of $t_1$ and $t_2$.", marks: 4 },
            { label: "b", prompt: "Show that $T$ lies on the directrix $y=-a$ when $t_1t_2=-1$, and state what this means geometrically.", marks: 3 },
            { label: "c", prompt: "Find the coordinates of $T$ when $t_1=1$, $t_2=2$ for the parabola $x^2=8y$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "At parameter $t$: $tx=y+at^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Tangents: $t_1x=y+at_1^2$ and $t_2x=y+at_2^2$; subtract: $(t_1-t_2)x=a(t_1^2-t_2^2)$.", working: "(t_1-t_2)x=a(t_1-t_2)(t_1+t_2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "So $x=a(t_1+t_2)$; substitute into $t_1x=y+at_1^2$: $y=at_1(t_1+t_2)-at_1^2=at_1t_2$.", working: "T=(a(t_1+t_2),at_1t_2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State coordinates.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Verify symmetry gives same $y$ from the other tangent.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$y_T=at_1t_2=-a$ when $t_1t_2=-1$.", working: "y_T=-a", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Since the directrix is $y=-a$, $T$ lies on it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Geometrically: tangents at the ends of a focal chord meet on the directrix.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "$x^2=8y$: $a=2$; $T=(2(1+2),2(1)(2))=(6,4)$.", working: "(6,4)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Check: tangents $x=y+2$ and $2x=y+8$ meet at $x=6,y=4$ ✓.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State $T=(6,4)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $T=\\left(a(t_1+t_2),at_1t_2\\right)$ (b) on directrix when $t_1t_2=-1$ (c) $T=(6,4)$",
            commonErrors: ["Using parametric point $(at^2,2at)$ — that belongs to $y^2=4ax$.", "Sign slips in subtraction."],
            examinerNote: "Ensure students use $P=(2at,at^2)$ for $x^2=4ay$ consistently.",
          },
        },
      ],
    },
    {
      id: "edialfm-u1-hyperbola",
      title: "The rectangular hyperbola $xy=c^2$",
      skill: "Work with $xy=c^2$: parametric form $(ct,\\frac{c}{t})$, tangents, normals, asymptotes and chord properties.",
      lesson: {
        sections: [
          {
            heading: "Standard form and parametric equations",
            body: "$xy=c^2$ has asymptotes $x=0$ and $y=0$ (the axes), centre at the origin, vertices $(\\pm c,\\pm c)$. Parametric point: $P=\\left(ct,\\frac{c}{t}\\right)$. Since $\\frac{dy}{dx}=-\\frac{c^2}{x^2}=-\\frac{1}{t^2}$ at this point, the tangent is $x+t^2y=2ct$ and the normal is $y-\\frac{c}{t}=t^2\\left(x-ct\\right)$.",
          },
          {
            heading: "Chord properties",
            body: "The chord joining parameters $t_1,t_2$ has equation $x+(t_1t_2)y=c(t_1+t_2)$. The tangent at $t$ meets the asymptotes at $(2ct,0)$ and $(0,\\frac{2c}{t})$; their midpoint $(ct,\\frac{c}{t})$ lies on the curve.",
          },
          {
            heading: "Intersections with lines",
            body: "A line $y=mx+c$ meets $xy=c^2$ where $mx^2+cx-c^2=0$; the product of roots relates to the chord's midpoint properties.",
          },
        ],
        keyFormulas: [
          { name: "Parametric point", statement: "$\\left(ct,\\frac{c}{t}\\right)$ on $xy=c^2$" },
          { name: "Tangent", statement: "$x+t^2y=2ct$" },
          { name: "Chord", statement: "$x+(t_1t_2)y=c(t_1+t_2)$" },
        ],
        workedExample: {
          problem: "Find the equation of the tangent to $xy=4$ at the point $(4,1)$.",
          solution: "$c=2$; point $(4,1)$ has $t=2$ since $ct=4$ and $c/t=1$. Tangent: $x+t^2y=2ct\\Rightarrow x+4y=8$.",
        },
      },
      questions: [
        {
          id: "edialfm-hyp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the asymptotes of $xy=9$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=3$ and $y=3$" },
              { id: "b", text: "$x+y=9$" },
              { id: "c", text: "$x=0$ and $y=0$" },
              { id: "d", text: "$x=9$ and $y=9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Asymptotes", statement: "For $xy=c^2$ the asymptotes are the coordinate axes." }],
            steps: [{ reasoning: "As $x\\to0$, $y\\to\\infty$ and vice versa — axes are asymptotes.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $x=0$ and $y=0$",
          },
        },
        {
          id: "edialfm-hyp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the equation of the tangent to $xy=16$ at the point $(8,2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Tangent", statement: "$x+t^2y=2ct$ with $c=4$, $t=2$." }],
            steps: [
              { reasoning: "$c=4$; point $(8,2)$: $ct=8\\Rightarrow t=2$; check $c/t=2$ ✓.", working: "t=2", marks: 1, markCode: "M" },
              { reasoning: "Tangent: $x+4y=16$.", working: "x+4y=16", marks: 1, markCode: "M" },
              { reasoning: "State equation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x+4y=16$",
            commonErrors: ["Wrong $c$ or $t$."],
          },
        },
        {
          id: "edialfm-hyp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Show that the tangent to $xy=c^2$ at $(ct,\\frac{c}{t})$ meets the asymptotes at points whose midpoint lies on the hyperbola.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Tangent-asymptote property", statement: "Intercepts on axes have midpoint on the curve." }],
            steps: [
              { reasoning: "Tangent $x+t^2y=2ct$ meets $x=0$ at $y=\\frac{2c}{t}$ and $y=0$ at $x=2ct$.", working: "intercepts", marks: 1, markCode: "M" },
              { reasoning: "Midpoint: $\\left(ct,\\frac{c}{t}\\right)$ — the point of contact itself.", working: "midpoint", marks: 1, markCode: "M" },
              { reasoning: "Since $ct\\cdot\\frac{c}{t}=c^2$, the midpoint lies on $xy=c^2$.", marks: 1, markCode: "M" },
              { reasoning: "Conclude the property holds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Midpoint $(ct,\\frac{c}{t})$ lies on $xy=c^2$",
            commonErrors: ["Algebra slips with intercepts."],
          },
        },
        {
          id: "edialfm-hyp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For $xy=c^2$, the chord joining points with parameters $t_1,t_2$ has equation $x+(t_1t_2)y=c(t_1+t_2)$.",
          parts: [
            { label: "a", prompt: "Derive the chord equation.", marks: 4 },
            { label: "b", prompt: "Find the chord joining $(c, c)$ and $(4c, \\frac{c}{4})$ on $xy=c^2$.", marks: 3 },
            { label: "c", prompt: "Find where this chord meets the asymptotes.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Chord", statement: "$x+(t_1t_2)y=c(t_1+t_2)$." }],
            steps: [
              { part: "a", reasoning: "Gradient between $(ct_1,\\frac{c}{t_1})$ and $(ct_2,\\frac{c}{t_2})$: $\\frac{\\frac{c}{t_2}-\\frac{c}{t_1}}{ct_2-ct_1}=\\frac{c(t_1-t_2)/(t_1t_2)}{c(t_2-t_1)}=-\\frac{1}{t_1t_2}$.", working: "m=-1/(t_1t_2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Equation: $y-\\frac{c}{t_1}=-\\frac{1}{t_1t_2}(x-ct_1)$; multiply by $t_1t_2$: $t_1t_2y-ct_2=-x+ct_1$.", working: "rearranged", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rearrange to $x+(t_1t_2)y=c(t_1+t_2)$.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Check both endpoints satisfy the equation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$(c,c)$ has $t_1=1$; $(4c,\\frac{c}{4})$ has $t_2=4$.", working: "t_1=1,t_2=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Chord: $x+4y=c(1+4)=5c$.", working: "x+4y=5c", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State equation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$x=0$ (asymptote $y$-axis): $y=\\frac{5c}{4}$; $y=0$ ($x$-axis): $x=5c$.", working: "(0,5c/4),(5c,0)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both intercepts.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Note the chord meets the asymptotes at these points.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x+(t_1t_2)y=c(t_1+t_2)$ (b) $x+4y=5c$ (c) $(0,\\frac{5c}{4})$ and $(5c,0)$",
            commonErrors: ["Gradient sign errors.", "Wrong parameter values."],
          },
        },
      ],
    },
  ],
};
