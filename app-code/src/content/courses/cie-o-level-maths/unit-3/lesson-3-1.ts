import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "olm-u3-lesson-3-1",
  code: "3-1",
  title: "Linear Graphs",
  goal: "I CAN sketch and interpret linear graphs $y=mx+c$.",
  standards: ["4024: graphs"],
  vocabulary: [
    { term: "Gradient", definition: "$m=\\frac{\\text{rise}}{\\text{run}}=\\frac{y_2-y_1}{x_2-x_1}$." },
    { term: "y-intercept", definition: "Where line crosses y-axis ($x=0$), value $c$." },
    { term: "x-intercept", definition: "Where line crosses x-axis ($y=0$)." },
    { term: "Parallel lines", definition: "Lines with equal gradients." },
  ],
  concepts: [
    {
      id: "olm-u3-s1-gradient",
      title: "Gradient and intercepts",
      skill: "Find gradient and intercepts of linear graphs at O Level.",
      lesson: {
        sections: [
          { heading: "Gradient", body: "The gradient measures steepness: $m=\\frac{\\text{change in }y}{\\text{change in }x}$. Positive gradient rises left-to-right; negative falls. A gradient of 0 is horizontal; undefined (vertical line) has form $x=h$. From two points $(x_1,y_1)$ and $(x_2,y_2)$: $m=\\frac{y_2-y_1}{x_2-x_1}$ — keep the order consistent (top minus bottom, right minus left)." },
          { heading: "y = mx + c", body: "Every non-vertical straight line has equation $y=mx+c$ where $m$ is gradient and $c$ is the y-intercept. To sketch: plot the y-intercept $(0,c)$, then use the gradient as 'rise over run' to find another point — e.g. gradient 2 means up 2, right 1. For equations like $2x+3y=12$, find intercepts by setting $x=0$ and $y=0$ separately." },
        ],
        keyFormulas: [
          { name: "Gradient", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
          { name: "Equation", statement: "$y=mx+c$" },
        ],
        workedExample: { problem: "Find the gradient of the line through $(1,3)$ and $(4,12)$.", solution: "$m=\\frac{12-3}{4-1}=\\frac93=3$. Equation: $y-3=3(x-1)$ → $y=3x$. Check: at $x=4$, $y=12$ ✓." },
      },
      questions: [
        {
          id: "olm-u3-s1-gr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The gradient of $y=4x-7$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" }, { id: "b", text: "-7" }, { id: "c", text: "$-\\frac74$" }, { id: "d", text: "7" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Gradient", statement: "Coefficient of x." }], steps: [{ reasoning: "$m=4$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olm-u3-s1-gr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of the line through $(2,5)$ and $(6,17)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "Rise/run." }], steps: [
            { reasoning: "$m=\\frac{17-5}{6-2}=\\frac{12}{4}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u3-s1-gr-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line with gradient $-2$ passing through $(3,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "$y-y_1=m(x-x_1)$." }], steps: [
            { reasoning: "$y-4=-2(x-3)$ → $y=-2x+10$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $y=-2x+10$.", marks: 1, markCode: "M" },
            { reasoning: "Check: at $x=3$, $y=-6+10=4$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-2x+10$" },
        },
        {
          id: "olm-u3-s1-gr-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the x-intercept of $3x+2y=12$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intercept", statement: "Set y=0." }], steps: [
            { reasoning: "Set $y=0$: $3x=12$ → $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "y-intercept: set $x=0$: $2y=12$ → $y=6$.", marks: 1, markCode: "M" },
            { reasoning: "Intercepts $(4,0)$ and $(0,6)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: x-intercept is $(4,0)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(4,0)$" },
        },
      ],
    },
    {
      id: "olm-u3-s1-parallel",
      title: "Parallel and perpendicular lines",
      skill: "Work with parallel and perpendicular lines at O Level.",
      lesson: {
        sections: [
          { heading: "Parallel", body: "Parallel lines never meet — they have the same gradient. If $y=2x+1$ is parallel to another line, that line also has gradient 2: $y=2x+c$ for any $c$. To find $c$ when the line passes through a given point, substitute the point's coordinates." },
          { heading: "Perpendicular", body: "Perpendicular lines meet at $90°$. Their gradients multiply to $-1$: if one has gradient $m$, the other has $-\\frac{1}{m}$. This is the negative reciprocal. Exception: horizontal ($m=0$) is perpendicular to vertical (undefined gradient). The perpendicular bisector of a segment combines both ideas: find the midpoint, take the negative reciprocal of the segment's gradient." },
        ],
        keyFormulas: [
          { name: "Parallel", statement: "Same gradient $m$" },
          { name: "Perpendicular", statement: "$m_1m_2=-1$" },
        ],
        workedExample: { problem: "Find the equation of the line perpendicular to $y=2x+3$ through $(4,1)$.", solution: "Perpendicular gradient: $-\\frac12$. $y-1=-\\frac12(x-4)$ → $y=-\\frac12x+3$." },
      },
      questions: [
        {
          id: "olm-u3-s1-pa-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Lines parallel to $y=5x-2$ have gradient…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "$-\\frac15$" }, { id: "c", text: "$-5$" }, { id: "d", text: "$\\frac15$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Parallel", statement: "Equal gradients." }], steps: [{ reasoning: "$m=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olm-u3-s1-pa-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of a line perpendicular to $y=-3x+1$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Perpendicular", statement: "Negative reciprocal." }], steps: [
            { reasoning: "$m_\\perp=-\\frac{1}{-3}=\\frac13$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac13$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13$" },
        },
        {
          id: "olm-u3-s1-pa-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line parallel to $y=3x-1$ passing through $(0,4)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel line", statement: "Same m, find c." }], steps: [
            { reasoning: "$y=3x+c$; at $(0,4)$: $c=4$.", marks: 1, markCode: "M" },
            { reasoning: "$y=3x+4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=3x+4$" },
        },
        {
          id: "olm-u3-s1-pa-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the equation of the perpendicular bisector of the segment joining $(2,3)$ and $(6,7)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perp bisector", statement: "Midpoint + negative reciprocal." }], steps: [
            { reasoning: "Midpoint: $(4,5)$; segment gradient: $\\frac{7-3}{6-2}=1$.", marks: 1, markCode: "M" },
            { reasoning: "Perpendicular gradient: $-1$.", marks: 1, markCode: "M" },
            { reasoning: "$y-5=-1(x-4)$ → $y=-x+9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-x+9$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u3-s1-linear-notes", title: "Linear graphs — notes", summary: "Gradient, intercepts, parallel/perpendicular.",
      sections: [
        { heading: "Basics", body: "$m=\\frac{\\Delta y}{\\Delta x}$; $y=mx+c$; intercepts by setting $x=0$ or $y=0$." },
        { heading: "Relations", body: "Parallel: same $m$. Perpendicular: $m_1m_2=-1$. Perp bisector: midpoint + negative reciprocal." },
      ] },
  ],
};
