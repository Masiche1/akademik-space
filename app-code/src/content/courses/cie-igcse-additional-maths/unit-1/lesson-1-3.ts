import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "ciam-u1-lesson-1-3",
  code: "1-3",
  title: "Completing the Square",
  goal: "I CAN rewrite quadratics in completed-square form and use it.",
  standards: ["0606: completing the square"],
  vocabulary: [
    { term: "Vertex form", definition: "$y=a(x-h)^2+k$ — vertex at $(h,k)$." },
    { term: "Turning point", definition: "Maximum or minimum of parabola." },
    { term: "Axis of symmetry", definition: "Vertical line $x=h$ through vertex." },
  ],
  concepts: [
    {
      id: "ciam-u1-s3-method",
      title: "Completing the square",
      skill: "Rewrite $ax^2+bx+c$ as $a(x-h)^2+k$.",
      lesson: {
        sections: [
          { heading: "Method", body: "Completing the square rewrites any quadratic $ax^2+bx+c$ into vertex form $a(x-h)^2+k$, where $(h,k)$ is the turning point. The recipe: factor out $a$ from the first two terms, halve the coefficient of $x$ inside the bracket, square it, then add and subtract that square inside the bracket so the equation stays balanced. Finally multiply the constant adjustment back through by $a$. With practice this takes seconds; it also powers many later results like the discriminant and vertex formulae." },
          { heading: "Worked pattern", body: "For $x^2+6x+5$: halve 6 to get 3, square to get 9, giving $(x+3)^2-9+5=(x+3)^2-4$. For non-monic cases like $2x^2+8x+3$, factor out the 2 first: $2[x^2+4x]+3=2[(x+2)^2-4]+3=2(x+2)^2-5$ — remember the $-4$ gets multiplied by 2 but the $+3$ does not." },
        ],
        keyFormulas: [
          { name: "Vertex form", statement: "$a\\left(x+\\frac{b}{2a}\\right)^2+c-\\frac{b^2}{4a}$" },
          { name: "Vertex", statement: "$\\left(-\\frac{b}{2a},\\ c-\\frac{b^2}{4a}\\right)$" },
        ],
        workedExample: { problem: "Complete the square: $x^2-8x+3$.", solution: "Halve $-8$ to get $-4$, square to get 16: $(x-4)^2-16+3=(x-4)^2-13$. Check by expanding: $x^2-8x+16-13=x^2-8x+3$ ✓." },
      },
      questions: [
        {
          id: "ciam-u1-s3-me-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$x^2+4x+1$ in completed-square form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x+2)^2-3$" }, { id: "b", text: "$(x+2)^2+1$" }, { id: "c", text: "$(x-2)^2-3$" }, { id: "d", text: "$(x+4)^2-15$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Halve, square, adjust." }], steps: [{ reasoning: "$(x+2)^2-4+1=(x+2)^2-3$.", marks: 1, markCode: "A" }], finalAnswer: "$(x+2)^2-3$" },
        },
        {
          id: "ciam-u1-s3-me-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Write $x^2-10x+20$ in completed-square form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Standard method." }], steps: [
            { reasoning: "$(x-5)^2-25+20$.", marks: 1, markCode: "M" },
            { reasoning: "$=(x-5)^2-5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-5)^2-5$" },
        },
        {
          id: "ciam-u1-s3-me-q3", difficulty: "core", totalMarks: 3,
          stem: "Complete the square for $2x^2+8x+3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic", statement: "Factor first." }], steps: [
            { reasoning: "$2[x^2+4x]+3 = 2[(x+2)^2-4]+3$.", marks: 1, markCode: "M" },
            { reasoning: "$=2(x+2)^2-8+3 = 2(x+2)^2-5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2(x+2)^2-5$" },
        },
        {
          id: "ciam-u1-s3-me-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the turning point of $y=x^2-6x+11$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex", statement: "From completed square." }], steps: [
            { reasoning: "$y=(x-3)^2-9+11=(x-3)^2+2$.", marks: 1, markCode: "M" },
            { reasoning: "Minimum at $(3,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Since $a=1>0$, opens upward — minimum. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(3,2)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,2)$ minimum" },
        },
      ],
    },
    {
      id: "ciam-u1-s3-vertex",
      title: "Using vertex form",
      skill: "Find turning points, axes and sketch quadratics.",
      lesson: {
        sections: [
          { heading: "Reading the vertex", body: "Once in vertex form $y=a(x-h)^2+k$, the vertex $(h,k)$ is read off directly — this is the maximum or minimum point. The sign of $a$ decides which: $a>0$ opens upward giving a minimum, $a<0$ opens downward giving a maximum. The axis of symmetry is the vertical line $x=h$ through the vertex, and the graph is symmetric about it, which is useful when sketching or finding missing coordinates." },
          { heading: "Why it matters", body: "Vertex form makes many questions trivial: the turning point is immediate, the range of the function follows directly (e.g. $[k,\\infty)$ for $a>0$), and transformations are easy to describe. In applied problems — profit, projectile height, fencing area — the vertex often gives the optimal answer, which is why completing the square is tested so heavily." },
        ],
        keyFormulas: [
          { name: "Vertex", statement: "$(h,k)$ for $a(x-h)^2+k$" },
          { name: "Range", statement: "$a>0$: $[k,\\infty)$; $a<0$: $(-\\infty,k]$" },
        ],
        workedExample: { problem: "Find the turning point of $y=x^2-6x+11$.", solution: "$y=(x-3)^2-9+11=(x-3)^2+2$. Vertex $(3,2)$; since $a=1>0$ it opens upward, so $(3,2)$ is a minimum. The axis of symmetry is $x=3$; y-intercept is 11." },
      },
      questions: [
        {
          id: "ciam-u1-s3-ve-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The vertex of $y=(x-2)^2+3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,3)$" }, { id: "b", text: "$(-2,3)$" }, { id: "c", text: "$(2,-3)$" }, { id: "d", text: "$(3,2)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Vertex form", statement: "$(h,k)$." }], steps: [{ reasoning: "$h=2, k=3$.", marks: 1, markCode: "A" }], finalAnswer: "$(2,3)$" },
        },
        {
          id: "ciam-u1-s3-ve-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Is $y=-3(x+1)^2-2$ a maximum or minimum?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Opening direction", statement: "$a<0$ opens down." }], steps: [
            { reasoning: "$a=-3<0$ → opens downward.", marks: 1, markCode: "M" },
            { reasoning: "Maximum at $(-1,-2)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "Maximum" },
        },
        {
          id: "ciam-u1-s3-ve-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the axis of symmetry of $y=2x^2-12x+7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Axis", statement: "$x=h$." }], steps: [
            { reasoning: "$y=2(x^2-6x)+7=2[(x-3)^2-9]+7=2(x-3)^2-11$.", marks: 1, markCode: "M" },
            { reasoning: "Axis: $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$" },
        },
        {
          id: "ciam-u1-s3-ve-q4", difficulty: "core", totalMarks: 4,
          stem: "A quadratic has vertex $(2,-5)$ and passes through $(4,3)$. Find its equation in form $a(x-h)^2+k$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find equation", statement: "Use point to find $a$." }], steps: [
            { reasoning: "$y=a(x-2)^2-5$; substitute $(4,3)$: $3=a(4)+(-5)$? Wait: $3=a(4-2)^2-5=4a-5$.", marks: 1, markCode: "M" },
            { reasoning: "$4a=8$ → $a=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y=2(x-2)^2-5$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=4$, $2(4)-5=3$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=2(x-2)^2-5$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u1-s3-cs-notes", title: "Completing the square — notes", summary: "Vertex form, turning points, sketching.",
      sections: [
        { heading: "Method", body: "Factor $a$, halve middle coefficient, square, adjust constant." },
        { heading: "Vertex", body: "$a(x-h)^2+k$ → vertex $(h,k)$; $a>0$ min, $a<0$ max; axis $x=h$." },
      ] },
  ],
};
