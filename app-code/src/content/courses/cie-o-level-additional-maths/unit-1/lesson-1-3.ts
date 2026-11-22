import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "olam-u1-lesson-1-3",
  code: "1-3",
  title: "Completing the Square",
  goal: "I CAN rewrite quadratics in completed-square form and use it.",
  standards: ["4037: completing the square"],
  vocabulary: [
    { term: "Vertex form", definition: "$y=a(x-h)^2+k$ — vertex at $(h,k)$." },
    { term: "Turning point", definition: "Maximum or minimum of parabola." },
    { term: "Axis of symmetry", definition: "Vertical line $x=h$ through vertex." },
  ],
  concepts: [
    {
      id: "olam-u1-s3-method",
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
          id: "olam-u1-s3-me-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$x^2+4x+1$ in completed-square form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x-2)^2-3$" },
            { id: "b", text: "$(x+2)^2+1$" },
            { id: "c", text: "$(x+2)^2-3$" },
            { id: "d", text: "$(x+4)^2-15$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Halve, square, adjust." }], steps: [{ reasoning: "$(x+2)^2-4+1=(x+2)^2-3$.", marks: 1, markCode: "A" }], finalAnswer: "$(x+2)^2-3$" },
        },
        {
          id: "olam-u1-s3-me-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Write $x^2-10x+20$ in completed-square form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Standard method." }], steps: [
            { reasoning: "$(x-5)^2-25+20$.", marks: 1, markCode: "M" },
            { reasoning: "$=(x-5)^2-5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x-5)^2-5$" },
        },
        {
          id: "olam-u1-s3-me-q3", difficulty: "core", totalMarks: 3,
          stem: "Complete the square for $2x^2+8x+3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic", statement: "Factor first." }], steps: [
            { reasoning: "$2[x^2+4x]+3 = 2[(x+2)^2-4]+3$.", marks: 1, markCode: "M" },
            { reasoning: "$=2(x+2)^2-8+3 = 2(x+2)^2-5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2(x+2)^2-5$" },
        },
        {
          id: "olam-u1-s3-me-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the turning point of $y=x^2-6x+11$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex", statement: "From completed square." }], steps: [
            { reasoning: "$y=(x-3)^2-9+11=(x-3)^2+2$.", marks: 1, markCode: "M" },
            { reasoning: "Minimum at $(3,2)$.", marks: 1, markCode: "M" },
            { reasoning: "Since $a=1>0$, opens upward — minimum. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $(3,2)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(3,2)$ minimum" },
        },
        {
          id: "olam-u1-s3-me-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$x^2+8x+5$ in completed-square form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x+4)^2-11$" },
            { id: "b", text: "$(x-4)^2-11$" },
            { id: "c", text: "$(x+4)^2+5$" },
            { id: "d", text: "$(x+8)^2-59$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Halve, square, adjust." }], steps: [{ reasoning: "$(x+4)^2-16+5=(x+4)^2-11$.", marks: 1, markCode: "A" }], finalAnswer: "$(x+4)^2-11$" },
        },
        {
          id: "olam-u1-s3-me-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The completed-square form of $2x^2+12x-1$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2(x-3)^2-19$" },
            { id: "b", text: "$2(x+6)^2-73$" },
            { id: "c", text: "$2(x+3)^2-1$" },
            { id: "d", text: "$2(x+3)^2-19$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic", statement: "Factor out 2 first." }], steps: [{ reasoning: "$2[(x+3)^2-9]-1=2(x+3)^2-19$.", marks: 1, markCode: "A" }], finalAnswer: "$2(x+3)^2-19$" },
        },
        {
          id: "olam-u1-s3-me-q7", difficulty: "core", totalMarks: 1,
          stem: "For $y=3(x-2)^2+5$, the vertex is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-2,5)$" },
            { id: "b", text: "$(2,-5)$" },
            { id: "c", text: "$(5,2)$" },
            { id: "d", text: "$(2,5)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Vertex form", statement: "Read off $(h,k)$." }], steps: [{ reasoning: "$h=2$, $k=5$.", marks: 1, markCode: "A" }], finalAnswer: "$(2,5)$" },
        },
        {
          id: "olam-u1-s3-me-q8", difficulty: "core", totalMarks: 1,
          stem: "$-x^2+6x-4$ can be written as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-(x-3)^2-13$" },
            { id: "b", text: "$-(x+3)^2+5$" },
            { id: "c", text: "$(x-3)^2-5$" },
            { id: "d", text: "$-(x-3)^2+5$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Negative leading coefficient", statement: "Factor out $-1$." }], steps: [{ reasoning: "$-[x^2-6x]-4=-[(x-3)^2-9]-4=-(x-3)^2+5$.", marks: 1, markCode: "A" }], finalAnswer: "$-(x-3)^2+5$" },
        },
        {
          id: "olam-u1-s3-me-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which is the correct completed-square form of $4x^2-8x+1$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$4(x-1)^2+1$" },
            { id: "b", text: "$4(x-2)^2-15$" },
            { id: "c", text: "$4(x-1)^2-3$" },
            { id: "d", text: "$4(x+1)^2-3$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic", statement: "Factor 4, halve, adjust." }], steps: [{ reasoning: "$4[(x-1)^2-1]+1=4(x-1)^2-3$.", marks: 1, markCode: "A" }], finalAnswer: "$4(x-1)^2-3$" },
        },
        {
          id: "olam-u1-s3-me-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Write $x^2-14x+20$ as $(x+p)^2+q$. Find the value of $q$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -29 }] },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Halve, square, subtract." }], steps: [
            { reasoning: "$(x-7)^2-49+20=(x-7)^2-29$.", marks: 1, markCode: "M" },
            { reasoning: "$q=-29$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-29$" },
        },
        {
          id: "olam-u1-s3-me-q11", difficulty: "core", totalMarks: 2,
          stem: "The quadratic $x^2+bx+c$ can be written as $(x+5)^2+q$. Its vertex lies on the x-axis. Find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Vertex on axis", statement: "$q=0$ at vertex." }], steps: [
            { reasoning: "$(x+5)^2+q=x^2+10x+25+q$, so $b=10$ and $c=25+q$.", marks: 1, markCode: "M" },
            { reasoning: "Vertex on x-axis → $q=0$ → $c=25$.", marks: 1, markCode: "A" },
          ], finalAnswer: "25" },
        },
        {
          id: "olam-u1-s3-me-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the minimum value of $y=x^2-8x+3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -13 }] },
          markscheme: { principles: [{ kind: "technique", name: "Minimum value", statement: "Constant in vertex form." }], steps: [
            { reasoning: "$y=(x-4)^2-16+3=(x-4)^2-13$.", marks: 1, markCode: "M" },
            { reasoning: "Minimum value $=-13$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-13$" },
        },
        {
          id: "olam-u1-s3-me-q13", difficulty: "challenge", totalMarks: 3,
          stem: "The minimum value of $x^2-10x+k$ is 7. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 32 }] },
          markscheme: { principles: [{ kind: "technique", name: "Reverse problem", statement: "Set constant term." }], steps: [
            { reasoning: "$x^2-10x+k=(x-5)^2-25+k$.", marks: 1, markCode: "M" },
            { reasoning: "Minimum $=k-25=7$ → $k=32$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $(x-5)^2+7$ expands to $x^2-10x+32$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "32" },
        },
        {
          id: "olam-u1-s3-me-q14", difficulty: "core", totalMarks: 3,
          stem: "Complete the square for $5x^2-20x+3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic", statement: "Factor 5 first." }], steps: [
            { reasoning: "$5[x^2-4x]+3=5[(x-2)^2-4]+3$.", marks: 1, markCode: "M" },
            { reasoning: "$=5(x-2)^2-20+3=5(x-2)^2-17$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$5(x-2)^2-17$" },
        },
        {
          id: "olam-u1-s3-me-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Express $3-4x-x^2$ in completed-square form and state its maximum value.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Negative quadratic", statement: "Factor $-1$." }], steps: [
            { reasoning: "$3-4x-x^2=-(x^2+4x)+3=-[(x+2)^2-4]+3$.", marks: 1, markCode: "M" },
            { reasoning: "$=-(x+2)^2+4+3=-(x+2)^2+7$.", marks: 1, markCode: "M" },
            { reasoning: "Since coefficient of square is negative, maximum occurs at $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Maximum value $=7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-(x+2)^2+7$; maximum 7" },
        },
        {
          id: "olam-u1-s3-me-q16", difficulty: "core", totalMarks: 3,
          stem: "Show that $2x^2+8x+11>0$ for all real values of $x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Square is non-negative." }], steps: [
            { reasoning: "$2x^2+8x+11=2[(x+2)^2-4]+11=2(x+2)^2+3$.", marks: 1, markCode: "M" },
            { reasoning: "$2(x+2)^2\geq0$ for all $x$, so $2(x+2)^2+3\geq3>0$.", marks: 1, markCode: "M" },
            { reasoning: "Hence the expression is always positive. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "Proven" },
        },
      ],
    },
    {
      id: "olam-u1-s3-vertex",
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
          id: "olam-u1-s3-ve-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The vertex of $y=(x-2)^2+3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-2,3)$" },
            { id: "b", text: "$(2,3)$" },
            { id: "c", text: "$(3,2)$" },
            { id: "d", text: "$(2,-3)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Vertex form", statement: "$(h,k)$." }], steps: [{ reasoning: "$h=2, k=3$.", marks: 1, markCode: "A" }], finalAnswer: "$(2,3)$" },
        },
        {
          id: "olam-u1-s3-ve-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Is $y=-3(x+1)^2-2$ a maximum or minimum?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Opening direction", statement: "$a<0$ opens down." }], steps: [
            { reasoning: "$a=-3<0$ → opens downward.", marks: 1, markCode: "M" },
            { reasoning: "Maximum at $(-1,-2)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "Maximum" },
        },
        {
          id: "olam-u1-s3-ve-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the axis of symmetry of $y=2x^2-12x+7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Axis", statement: "$x=h$." }], steps: [
            { reasoning: "$y=2(x^2-6x)+7=2[(x-3)^2-9]+7=2(x-3)^2-11$.", marks: 1, markCode: "M" },
            { reasoning: "Axis: $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$" },
        },
        {
          id: "olam-u1-s3-ve-q4", difficulty: "core", totalMarks: 4,
          stem: "A quadratic has vertex $(2,-5)$ and passes through $(4,3)$. Find its equation in form $a(x-h)^2+k$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find equation", statement: "Use point to find $a$." }], steps: [
            { reasoning: "$y=a(x-2)^2-5$; substitute $(4,3)$: $3=a(4)+(-5)$? Wait: $3=a(4-2)^2-5=4a-5$.", marks: 1, markCode: "M" },
            { reasoning: "$4a=8$ → $a=2$.", marks: 1, markCode: "M" },
            { reasoning: "$y=2(x-2)^2-5$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=4$, $2(4)-5=3$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=2(x-2)^2-5$" },
        },
        {
          id: "olam-u1-s3-ve-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The vertex of $y=-(x-4)^2+2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,4)$" },
            { id: "b", text: "$(4,2)$" },
            { id: "c", text: "$(4,-2)$" },
            { id: "d", text: "$(-4,2)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Vertex form", statement: "$(h,k)$." }], steps: [{ reasoning: "$h=4$, $k=2$.", marks: 1, markCode: "A" }], finalAnswer: "$(4,2)$" },
        },
        {
          id: "olam-u1-s3-ve-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The axis of symmetry of $y=(x+5)^2-1$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=-5$" },
            { id: "b", text: "$x=1$" },
            { id: "c", text: "$x=-1$" },
            { id: "d", text: "$x=5$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Axis", statement: "$x=h$." }], steps: [{ reasoning: "$h=-5$ → axis $x=-5$.", marks: 1, markCode: "A" }], finalAnswer: "$x=-5$" },
        },
        {
          id: "olam-u1-s3-ve-q7", difficulty: "core", totalMarks: 1,
          stem: "The range of $f(x)=(x-3)^2+2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$[3,\\infty)$" },
            { id: "b", text: "$[2,\\infty)$" },
            { id: "c", text: "$\\mathbb{R}$" },
            { id: "d", text: "$(-\\infty,2]$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Range", statement: "$a>0$ → $[k,\\infty)$." }], steps: [{ reasoning: "Opens up, minimum 2 → $[2,\\infty)$.", marks: 1, markCode: "A" }], finalAnswer: "$[2,\\infty)$" },
        },
        {
          id: "olam-u1-s3-ve-q8", difficulty: "core", totalMarks: 1,
          stem: "The turning point of $y=-2(x+1)^2+7$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Minimum at $(1,-7)$" },
            { id: "b", text: "Minimum at $(-1,7)$" },
            { id: "c", text: "Maximum at $(1,7)$" },
            { id: "d", text: "Maximum at $(-1,7)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Opening direction", statement: "$a<0$ → maximum." }], steps: [{ reasoning: "$a=-2<0$, vertex $(-1,7)$ → maximum.", marks: 1, markCode: "A" }], finalAnswer: "Maximum at $(-1,7)$" },
        },
        {
          id: "olam-u1-s3-ve-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which quadratic has a minimum value of $-3$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=(x-2)^2+3$" },
            { id: "b", text: "$y=(x+2)^2-3$" },
            { id: "c", text: "$y=-(x+2)^2-3$" },
            { id: "d", text: "$y=(x+3)^2$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Vertex", statement: "Min value is $k$ when $a>0$." }], steps: [{ reasoning: "Option a: opens up, $k=-3$.", marks: 1, markCode: "A" }], finalAnswer: "Option a" },
        },
        {
          id: "olam-u1-s3-ve-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the minimum value of $y=(x-2)^2+5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "property", name: "Minimum", statement: "$k$ when $a>0$." }], steps: [
            { reasoning: "Vertex $(2,5)$; $a=1>0$ → minimum.", marks: 1, markCode: "M" },
            { reasoning: "Minimum value $=5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olam-u1-s3-ve-q11", difficulty: "core", totalMarks: 2,
          stem: "Find the maximum value of $y=-x^2+4x-1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Find vertex." }], steps: [
            { reasoning: "$y=-(x-2)^2+4-1=-(x-2)^2+3$.", marks: 1, markCode: "M" },
            { reasoning: "Maximum value $=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u1-s3-ve-q12", difficulty: "foundation", totalMarks: 1,
          stem: "For $y=2(x+1)^2-8$, the $x$-coordinate of the vertex is…",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: { principles: [{ kind: "property", name: "Vertex", statement: "$h$ from form." }], steps: [{ reasoning: "$h=-1$.", marks: 1, markCode: "A" }], finalAnswer: "$-1$" },
        },
        {
          id: "olam-u1-s3-ve-q13", difficulty: "challenge", totalMarks: 3,
          stem: "A quadratic $y=a(x-h)^2+k$ has vertex $(2,5)$ and passes through $(4,13)$. Find $a$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find parameter", statement: "Substitute point." }], steps: [
            { reasoning: "$13=a(4-2)^2+5=4a+5$.", marks: 1, markCode: "M" },
            { reasoning: "$4a=8$ → $a=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u1-s3-ve-q14", difficulty: "core", totalMarks: 3,
          stem: "Find the vertex of $y=-x^2+6x-5$ and state whether it is a maximum or minimum.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex", statement: "Complete square." }], steps: [
            { reasoning: "$y=-(x^2-6x)-5=-[(x-3)^2-9]-5=-(x-3)^2+4$.", marks: 1, markCode: "M" },
            { reasoning: "Vertex $(3,4)$.", marks: 1, markCode: "M" },
            { reasoning: "$a=-1<0$ → maximum.", marks: 1, markCode: "A" },
          ], finalAnswer: "Maximum at $(3,4)$" },
        },
        {
          id: "olam-u1-s3-ve-q15", difficulty: "core", totalMarks: 2,
          stem: "State the range of $f(x)=x^2-6x+10$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic range", statement: "Complete square." }], steps: [
            { reasoning: "$f(x)=(x-3)^2+1$, minimum value 1.", marks: 1, markCode: "M" },
            { reasoning: "Range: $[1,\\infty)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$[1,\\infty)$" },
        },
        {
          id: "olam-u1-s3-ve-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Find the equation of the quadratic with vertex $(-1,4)$ passing through $(1,0)$, in the form $y=a(x-h)^2+k$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find equation", statement: "Use point to find $a$." }], steps: [
            { reasoning: "$y=a(x+1)^2+4$.", marks: 1, markCode: "M" },
            { reasoning: "Substitute $(1,0)$: $0=a(2)^2+4=4a+4$ → $a=-1$.", marks: 1, markCode: "M" },
            { reasoning: "$y=-(x+1)^2+4$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: at $x=1$, $-(4)+4=0$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=-(x+1)^2+4$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u1-s3-cs-notes", title: "Completing the square — notes", summary: "Vertex form, turning points, sketching.",
      sections: [
        { heading: "Method", body: "Factor $a$, halve middle coefficient, square, adjust constant." },
        { heading: "Vertex", body: "$a(x-h)^2+k$ → vertex $(h,k)$; $a>0$ min, $a<0$ max; axis $x=h$." },
      ] },
  ],
};
