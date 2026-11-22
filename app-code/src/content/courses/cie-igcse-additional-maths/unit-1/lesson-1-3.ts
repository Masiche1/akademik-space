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
            { id: "a", text: "$(x+2)^2+1$" },
            { id: "b", text: "$(x+4)^2-15$" },
            { id: "c", text: "$(x-2)^2-3$" },
            { id: "d", text: "$(x+2)^2-3$" },
          ], correctChoiceId: "d" },
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
        {
          id: "ciam-u1-s3-me-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$x^2-12x+20$ in completed-square form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x-6)^2+20$" },
            { id: "b", text: "$(x-6)^2-16$" },
            { id: "c", text: "$(x+6)^2-16$" },
            { id: "d", text: "$(x-6)^2-4$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Halve, square, adjust." }], steps: [{ reasoning: "$(x-6)^2-36+20=(x-6)^2-16$.", marks: 1, markCode: "A" }], finalAnswer: "$(x-6)^2-16$" },
        },
        {
          id: "ciam-u1-s3-me-q6", difficulty: "foundation", totalMarks: 2,
          stem: "If $x^2+10x+c=(x+5)^2-7$, find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 18 }] },
          markscheme: { principles: [{ kind: "technique", name: "Compare constants", statement: "Expand and match." }], steps: [
            { reasoning: "$(x+5)^2-25+c=(x+5)^2-7$.", marks: 1, markCode: "M" },
            { reasoning: "$-25+c=-7$ → $c=18$.", marks: 1, markCode: "A" },
          ], finalAnswer: "18" },
        },
        {
          id: "ciam-u1-s3-me-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Write $x^2+14x+10$ in completed-square form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Standard method." }], steps: [
            { reasoning: "$(x+7)^2-49+10$.", marks: 1, markCode: "M" },
            { reasoning: "$=(x+7)^2-39$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(x+7)^2-39$" },
        },
        {
          id: "ciam-u1-s3-me-q8", difficulty: "core", totalMarks: 1,
          stem: "$3x^2+12x+1$ in completed-square form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x+2)^2-11$" },
            { id: "b", text: "$3(x-2)^2-11$" },
            { id: "c", text: "$3(x+2)^2+1$" },
            { id: "d", text: "$3(x+2)^2-11$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic", statement: "Factor out 3 first." }], steps: [{ reasoning: "$3[x^2+4x]+1=3[(x+2)^2-4]+1=3(x+2)^2-11$.", marks: 1, markCode: "A" }], finalAnswer: "$3(x+2)^2-11$" },
        },
        {
          id: "ciam-u1-s3-me-q9", difficulty: "core", totalMarks: 2,
          stem: "If $2(x-3)^2+k$ expands to $2x^2-12x+20$, find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Compare constants", statement: "Expand and match." }], steps: [
            { reasoning: "$2(x-3)^2+k=2x^2-12x+18+k$.", marks: 1, markCode: "M" },
            { reasoning: "$18+k=20$ → $k=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u1-s3-me-q10", difficulty: "core", totalMarks: 3,
          stem: "Complete the square for $3x^2-18x+5$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic", statement: "Factor first." }], steps: [
            { reasoning: "$3[x^2-6x]+5=3[(x-3)^2-9]+5$.", marks: 1, markCode: "M" },
            { reasoning: "$=3(x-3)^2-27+5$.", marks: 1, markCode: "M" },
            { reasoning: "$=3(x-3)^2-22$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$3(x-3)^2-22$" },
        },
        {
          id: "ciam-u1-s3-me-q11", difficulty: "challenge", totalMarks: 1,
          stem: "$-x^2+8x-5$ in completed-square form is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-(x-4)^2+11$" },
            { id: "b", text: "$-(x+4)^2+11$" },
            { id: "c", text: "$(x-4)^2+11$" },
            { id: "d", text: "$-(x-4)^2-21$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Negative leading coefficient", statement: "Factor out $-1$." }], steps: [{ reasoning: "$-[x^2-8x+16]+11=-(x-4)^2+11$.", marks: 1, markCode: "A" }], finalAnswer: "$-(x-4)^2+11$" },
        },
        {
          id: "ciam-u1-s3-me-q12", difficulty: "challenge", totalMarks: 2,
          stem: "If $4x^2-8x+c=4(x-1)^2-3$, find $c$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Compare constants", statement: "Expand and match." }], steps: [
            { reasoning: "$4(x-1)^2-3=4x^2-8x+1$.", marks: 1, markCode: "M" },
            { reasoning: "$c=1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "ciam-u1-s3-me-q13", difficulty: "core", totalMarks: 4,
          stem: "Complete the square for $x^2-2x-8$ and state the minimum value of the quadratic.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex form", statement: "Read minimum from $k$." }], steps: [
            { reasoning: "$x^2-2x-8=(x-1)^2-1-8=(x-1)^2-9$.", marks: 1, markCode: "M" },
            { reasoning: "Since the $x^2$ coefficient is positive, the minimum value is $-9$.", marks: 1, markCode: "M" },
            { reasoning: "The minimum occurs at $x=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: minimum value $-9$.", marks: 1, markCode: "A" },
          ], finalAnswer: "Minimum value $-9$" },
        },
        {
          id: "ciam-u1-s3-me-q14", difficulty: "challenge", totalMarks: 1,
          stem: "For $2x^2+4x-5=2(x+1)^2+k$, the value of $k$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-7$" },
            { id: "b", text: "$-3$" },
            { id: "c", text: "7" },
            { id: "d", text: "$-5$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic", statement: "Adjust constant." }], steps: [{ reasoning: "$2(x+1)^2=2x^2+4x+2$, so $k=-5-2=-7$.", marks: 1, markCode: "A" }], finalAnswer: "$-7$" },
        },
        {
          id: "ciam-u1-s3-me-q15", difficulty: "core", totalMarks: 2,
          stem: "If $x^2+bx+9=(x+3)^2$, find $b$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Compare coefficients", statement: "Expand and match." }], steps: [
            { reasoning: "$(x+3)^2=x^2+6x+9$.", marks: 1, markCode: "M" },
            { reasoning: "$b=6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "ciam-u1-s3-me-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Which quadratic expands to $x^2-10x+23$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x-5)^2+2$" },
            { id: "b", text: "$(x-10)^2+23$" },
            { id: "c", text: "$(x+5)^2-2$" },
            { id: "d", text: "$(x-5)^2-2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse completing square", statement: "Expand vertex form." }], steps: [{ reasoning: "$(x-5)^2-2=x^2-10x+25-2=x^2-10x+23$.", marks: 1, markCode: "A" }], finalAnswer: "$(x-5)^2-2$" },
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
            { id: "a", text: "$(-2,3)$" },
            { id: "b", text: "$(2,3)$" },
            { id: "c", text: "$(2,-3)$" },
            { id: "d", text: "$(3,2)$" },
          ], correctChoiceId: "b" },
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
        {
          id: "ciam-u1-s3-ve-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The vertex of $y=-(x+4)^2+7$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-4,7)$" },
            { id: "b", text: "$(7,-4)$" },
            { id: "c", text: "$(-4,-7)$" },
            { id: "d", text: "$(4,7)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Vertex form", statement: "Read $(h,k)$." }], steps: [{ reasoning: "$h=-4$, $k=7$; negative coefficient means maximum.", marks: 1, markCode: "A" }], finalAnswer: "$(-4,7)$" },
        },
        {
          id: "ciam-u1-s3-ve-q6", difficulty: "foundation", totalMarks: 2,
          stem: "State the axis of symmetry of $y=(x-5)^2+2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "property", name: "Axis of symmetry", statement: "$x=h$." }], steps: [
            { reasoning: "Vertex form has $h=5$.", marks: 1, markCode: "M" },
            { reasoning: "Axis: $x=5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "ciam-u1-s3-ve-q7", difficulty: "foundation", totalMarks: 2,
          stem: "State the range of $y=(x+1)^2-4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Range", statement: "Minimum value." }], steps: [
            { reasoning: "$(x+1)^2\\geq0$ → $y\\geq-4$.", marks: 1, markCode: "M" },
            { reasoning: "Range: $[-4,\\infty)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$[-4,\\infty)$" },
        },
        {
          id: "ciam-u1-s3-ve-q8", difficulty: "core", totalMarks: 1,
          stem: "The vertex of $y=2(x-3)^2-1$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(-3,-1)$" },
            { id: "b", text: "$(-3,1)$" },
            { id: "c", text: "$(3,1)$" },
            { id: "d", text: "$(3,-1)$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Vertex form", statement: "Read $(h,k)$." }], steps: [{ reasoning: "$h=3$, $k=-1$; positive coefficient means minimum.", marks: 1, markCode: "A" }], finalAnswer: "$(3,-1)$" },
        },
        {
          id: "ciam-u1-s3-ve-q9", difficulty: "core", totalMarks: 2,
          stem: "Find the y-intercept of $y=3(x-2)^2+5$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 17 }] },
          markscheme: { principles: [{ kind: "technique", name: "Substitute x=0", statement: "Evaluate intercept." }], steps: [
            { reasoning: "$y=3(0-2)^2+5=3(4)+5$.", marks: 1, markCode: "M" },
            { reasoning: "$=17$.", marks: 1, markCode: "A" },
          ], finalAnswer: "17" },
        },
        {
          id: "ciam-u1-s3-ve-q10", difficulty: "core", totalMarks: 3,
          stem: "A quadratic has vertex $(-2,3)$ and passes through $(0,7)$. Find its equation in the form $y=a(x-h)^2+k$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find equation", statement: "Use point to find $a$." }], steps: [
            { reasoning: "$y=a(x+2)^2+3$; substitute $(0,7)$: $7=4a+3$.", marks: 1, markCode: "M" },
            { reasoning: "$4a=4$ → $a=1$.", marks: 1, markCode: "M" },
            { reasoning: "$y=(x+2)^2+3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=(x+2)^2+3$" },
        },
        {
          id: "ciam-u1-s3-ve-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The maximum value of $y=-2(x+1)^2+4$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "4" },
            { id: "c", text: "$-4$" },
            { id: "d", text: "$-2$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Vertex", statement: "Maximum is $k$ when $a<0$." }], steps: [{ reasoning: "$a=-2<0$, so $k=4$ is the maximum.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "ciam-u1-s3-ve-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Find the y-coordinate of the vertex of $y=3x^2-12x+10$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Complete square", statement: "Read $k$." }], steps: [
            { reasoning: "$y=3(x-2)^2-2$.", marks: 1, markCode: "M" },
            { reasoning: "Vertex $y$-coordinate is $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-2" },
        },
        {
          id: "ciam-u1-s3-ve-q13", difficulty: "core", totalMarks: 3,
          stem: "Describe fully the transformations that map $y=x^2$ onto $y=-(x-3)^2+2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Transformations", statement: "Read vertex form." }], steps: [
            { reasoning: "Reflection in the x-axis from the negative sign.", marks: 1, markCode: "M" },
            { reasoning: "Translation right 3 units and up 2 units.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reflection in $x$-axis, then translation $(3,2)$" },
        },
        {
          id: "ciam-u1-s3-ve-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The range of $y=-3(x+2)^2+5$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$[5,\\infty)$" },
            { id: "b", text: "$(-\\infty,-5]$" },
            { id: "c", text: "$(-\\infty,5]$" },
            { id: "d", text: "$[-5,\\infty)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Range", statement: "Maximum value." }], steps: [{ reasoning: "$a=-3<0$, so maximum is 5 and range is $(-\\infty,5]$.", marks: 1, markCode: "A" }], finalAnswer: "$(-\\infty,5]$" },
        },
        {
          id: "ciam-u1-s3-ve-q15", difficulty: "core", totalMarks: 2,
          stem: "For $y=2(x-h)^2+k$ with vertex $(-1,4)$, find $h+k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "property", name: "Vertex", statement: "Read $h$ and $k$." }], steps: [
            { reasoning: "$h=-1$, $k=4$.", marks: 1, markCode: "M" },
            { reasoning: "$h+k=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u1-s3-ve-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The axis of symmetry of $y=(x+7)^2-2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=-2$" },
            { id: "b", text: "$x=7$" },
            { id: "c", text: "$y=-7$" },
            { id: "d", text: "$x=-7$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Axis of symmetry", statement: "$x=h$." }], steps: [{ reasoning: "$h=-7$, so axis is $x=-7$.", marks: 1, markCode: "A" }], finalAnswer: "$x=-7$" },
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
