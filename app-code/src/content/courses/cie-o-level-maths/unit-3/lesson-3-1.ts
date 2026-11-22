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
            { id: "a", text: "7" },
            { id: "b", text: "4" },
            { id: "c", text: "$-\\frac74$" },
            { id: "d", text: "-7" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u3-s1-gr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The y-intercept of $y=2x+5$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac52$" },
            { id: "b", text: "$-5$" },
            { id: "c", text: "5" },
            { id: "d", text: "2" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "y-intercept", statement: "Value of $c$." }], steps: [{ reasoning: "$c=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olm-u3-s1-gr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of the line through $(1,2)$ and $(5,14)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "Rise/run." }], steps: [
            { reasoning: "$m=\\frac{14-2}{5-1}=\\frac{12}{4}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u3-s1-gr-q7", difficulty: "foundation", totalMarks: 1,
          stem: "The y-intercept of $y=3x-7$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac73$" },
            { id: "b", text: "7" },
            { id: "c", text: "3" },
            { id: "d", text: "$-7$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "y-intercept", statement: "Value of $c$." }], steps: [{ reasoning: "$c=-7$.", marks: 1, markCode: "A" }], finalAnswer: "$-7$" },
        },
        {
          id: "olm-u3-s1-gr-q8", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of the line $3x+6y=12$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -0.5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Make $y$ the subject." }], steps: [
            { reasoning: "$6y=12-3x$ → $y=-\\frac12x+2$ → $m=-\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-0.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac12$" },
        },
        {
          id: "olm-u3-s1-gr-q9", difficulty: "core", totalMarks: 1,
          stem: "The line $x=3$ has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gradient $\\frac13$" },
            { id: "b", text: "Gradient 3" },
            { id: "c", text: "Undefined gradient (vertical)" },
            { id: "d", text: "Gradient 0" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Vertical line", statement: "$x=h$ form." }], steps: [{ reasoning: "Vertical line → gradient undefined.", marks: 1, markCode: "A" }], finalAnswer: "Undefined" },
        },
        {
          id: "olm-u3-s1-gr-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line through $(2,1)$ and $(6,9)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "Gradient then $y=mx+c$." }], steps: [
            { reasoning: "$m=\\frac{9-1}{6-2}=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y-1=2(x-2)$ → $y=2x-3$.", marks: 1, markCode: "M" },
            { reasoning: "Check: at $x=6$, $y=9$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=2x-3$" },
        },
        {
          id: "olm-u3-s1-gr-q11", difficulty: "core", totalMarks: 2,
          stem: "Find the x-intercept of $y=2x-8$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Intercept", statement: "Set $y=0$." }], steps: [
            { reasoning: "$0=2x-8$ → $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 (point $(4,0)$).", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u3-s1-gr-q12", difficulty: "core", totalMarks: 1,
          stem: "The gradient of $y=-\\frac12x+3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac12$" },
            { id: "b", text: "3" },
            { id: "c", text: "$-2$" },
            { id: "d", text: "$-\\frac12$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Gradient", statement: "Coefficient of $x$." }], steps: [{ reasoning: "$m=-\\frac12$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac12$" },
        },
        {
          id: "olm-u3-s1-gr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the line perpendicular to $3x+2y=12$ passing through $(4,5)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular", statement: "Negative reciprocal gradient." }], steps: [
            { reasoning: "$2y=12-3x$ → $y=-\\frac32x+6$ → $m=-\\frac32$; perpendicular gradient $\\frac23$.", marks: 1, markCode: "M" },
            { reasoning: "$y-5=\\frac23(x-4)$.", marks: 1, markCode: "M" },
            { reasoning: "$y=\\frac23x+\\frac73$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=\\frac23x+\\frac73$" },
        },
        {
          id: "olm-u3-s1-gr-q14", difficulty: "challenge", totalMarks: 2,
          stem: "A line passes through $(0,1)$ and $(2,k)$ and has gradient 3. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "formula", name: "Gradient", statement: "Set rise/run = 3." }], steps: [
            { reasoning: "$\\frac{k-1}{2-0}=3$ → $k-1=6$ → $k=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u3-s1-gr-q15", difficulty: "challenge", totalMarks: 1,
          stem: "The line $2x-4y=8$ can be written in the form…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=2x-4$" },
            { id: "b", text: "$y=-2x+4$" },
            { id: "c", text: "$y=\\frac12x+2$" },
            { id: "d", text: "$y=\\frac12x-2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Make $y$ the subject." }], steps: [{ reasoning: "$-4y=8-2x$ → $y=\\frac12x-2$.", marks: 1, markCode: "A" }], finalAnswer: "$y=\\frac12x-2$" },
        },
        {
          id: "olm-u3-s1-gr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A line passes through $(1,5)$ and has x-intercept 3. Find its equation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Line equation", statement: "Two points then $y=mx+c$." }], steps: [
            { reasoning: "Second point: $(3,0)$.", marks: 1, markCode: "M" },
            { reasoning: "$m=\\frac{0-5}{3-1}=-\\frac52$.", marks: 1, markCode: "M" },
            { reasoning: "$y-5=-\\frac52(x-1)$ → $y=-\\frac52x+\\frac{15}{2}$, i.e. $5x+2y=15$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$5x+2y=15$" },
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
            { id: "a", text: "5" },
            { id: "b", text: "$\\frac15$" },
            { id: "c", text: "$-\\frac15$" },
            { id: "d", text: "$-5$" },
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
        {
          id: "olm-u3-s1-pa-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A line parallel to $y=-4x+1$ has gradient…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "$-\\frac14$" },
            { id: "c", text: "$-4$" },
            { id: "d", text: "$\\frac14$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Parallel", statement: "Equal gradients." }], steps: [{ reasoning: "$m=-4$.", marks: 1, markCode: "A" }], finalAnswer: "$-4$" },
        },
        {
          id: "olm-u3-s1-pa-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the gradient of a line perpendicular to $y=\\frac{2}{3}x-5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1.5 }] },
          markscheme: { principles: [{ kind: "property", name: "Perpendicular", statement: "Negative reciprocal." }], steps: [
            { reasoning: "$m_\\perp=-\\frac{1}{2/3}=-\\frac32$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-1.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac32$" },
        },
        {
          id: "olm-u3-s1-pa-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find the y-intercept of the line parallel to $y=-x+3$ passing through $(2,5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "technique", name: "Parallel line", statement: "Same $m$, find $c$." }], steps: [
            { reasoning: "$y=-x+c$; at $(2,5)$: $5=-2+c$ → $c=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u3-s1-pa-q8", difficulty: "foundation", totalMarks: 1,
          stem: "The lines $y=2x+1$ and $y=2x-5$ are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Intersecting at right angles" },
            { id: "b", text: "Perpendicular" },
            { id: "c", text: "Identical" },
            { id: "d", text: "Parallel" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Parallel", statement: "Same gradient." }], steps: [{ reasoning: "Both have $m=2$ → parallel.", marks: 1, markCode: "A" }], finalAnswer: "Parallel" },
        },
        {
          id: "olm-u3-s1-pa-q9", difficulty: "core", totalMarks: 1,
          stem: "The perpendicular bisector of the segment joining $(0,0)$ and $(4,2)$ has gradient…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-2$" },
            { id: "b", text: "2" },
            { id: "c", text: "$\\frac12$" },
            { id: "d", text: "$-\\frac12$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Perp bisector", statement: "Negative reciprocal of segment gradient." }], steps: [{ reasoning: "Segment gradient $\\frac{2}{4}=\\frac12$ → perpendicular $-2$.", marks: 1, markCode: "A" }], finalAnswer: "$-2$" },
        },
        {
          id: "olm-u3-s1-pa-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the equation of the line perpendicular to $y=4x-1$ passing through $(8,3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular", statement: "Negative reciprocal then $y=mx+c$." }], steps: [
            { reasoning: "Perpendicular gradient: $-\\frac14$.", marks: 1, markCode: "M" },
            { reasoning: "$y-3=-\\frac14(x-8)$ → $y=-\\frac14x+5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-\\frac14x+5$" },
        },
        {
          id: "olm-u3-s1-pa-q11", difficulty: "core", totalMarks: 1,
          stem: "The perpendicular bisector of a horizontal line segment is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A line with gradient 1" },
            { id: "b", text: "A vertical line through the midpoint" },
            { id: "c", text: "A horizontal line" },
            { id: "d", text: "The segment itself" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Perpendicular", statement: "Horizontal $\\perp$ vertical." }], steps: [{ reasoning: "Segment gradient 0 → perpendicular vertical through midpoint.", marks: 1, markCode: "A" }], finalAnswer: "Vertical line" },
        },
        {
          id: "olm-u3-s1-pa-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the gradient of the line perpendicular to $y=\\frac{2}{5}x+1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2.5 }] },
          markscheme: { principles: [{ kind: "property", name: "Perpendicular", statement: "Negative reciprocal." }], steps: [
            { reasoning: "$m_\\perp=-\\frac{1}{2/5}=-\\frac52$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-2.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac52$" },
        },
        {
          id: "olm-u3-s1-pa-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the perpendicular bisector of the segment joining $(0,2)$ and $(6,6)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perp bisector", statement: "Midpoint + negative reciprocal." }], steps: [
            { reasoning: "Midpoint: $(3,4)$; segment gradient: $\\frac{6-2}{6-0}=\\frac23$.", marks: 1, markCode: "M" },
            { reasoning: "Perpendicular gradient: $-\\frac32$.", marks: 1, markCode: "M" },
            { reasoning: "$y-4=-\\frac32(x-3)$ → $y=-\\frac32x+\\frac{17}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-\\frac32x+\\frac{17}{2}$" },
        },
        {
          id: "olm-u3-s1-pa-q14", difficulty: "challenge", totalMarks: 2,
          stem: "A line passes through $(3,4)$ and is parallel to $y=5x-2$. Find its y-intercept.",
          response: { type: "numeric", parts: [{ label: "a", answer: -11 }] },
          markscheme: { principles: [{ kind: "technique", name: "Parallel line", statement: "Same $m$, find $c$." }], steps: [
            { reasoning: "$y=5x+c$; at $(3,4)$: $4=15+c$ → $c=-11$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-11$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-11$" },
        },
        {
          id: "olm-u3-s1-pa-q15", difficulty: "challenge", totalMarks: 1,
          stem: "A line parallel to $2x+3y=6$ could have equation…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3x+2y=6$" },
            { id: "b", text: "$2x+3y=12$" },
            { id: "c", text: "$x+3y=6$" },
            { id: "d", text: "$2x-3y=6$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Parallel", statement: "Same coefficients ratio." }], steps: [{ reasoning: "$2x+3y=12$ has same gradient ($-\\frac23$).", marks: 1, markCode: "A" }], finalAnswer: "$2x+3y=12$" },
        },
        {
          id: "olm-u3-s1-pa-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the line through $(5,-1)$ perpendicular to the line joining $(0,0)$ and $(6,3)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perpendicular", statement: "Gradient of given segment then negative reciprocal." }], steps: [
            { reasoning: "Segment gradient: $\\frac{3-0}{6-0}=\\frac12$ → perpendicular gradient $-2$.", marks: 1, markCode: "M" },
            { reasoning: "$y-(-1)=-2(x-5)$ → $y+1=-2x+10$.", marks: 1, markCode: "M" },
            { reasoning: "$y=-2x+9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-2x+9$" },
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
