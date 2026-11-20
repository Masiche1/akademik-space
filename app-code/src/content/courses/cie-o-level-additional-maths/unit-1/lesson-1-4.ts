import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "olam-u1-lesson-1-4",
  code: "1-4",
  title: "Quadratic Graphs and Problems",
  goal: "I CAN sketch quadratics and solve applied problems.",
  standards: ["4037: quadratic graphs"],
  vocabulary: [
    { term: "Parabola", definition: "U-shaped curve of a quadratic." },
    { term: "Intercepts", definition: "Where curve crosses axes." },
    { term: "Turning point", definition: "Vertex — max or min." },
    { term: "Sketch", definition: "Rough graph showing key features." },
  ],
  concepts: [
    {
      id: "olam-u1-s4-sketch",
      title: "Sketching quadratics",
      skill: "Sketch parabolas showing key features.",
      lesson: {
        sections: [
          { heading: "Features to show", body: "A good sketch of $y=ax^2+bx+c$ must show four features: the direction of opening (up if $a>0$, down if $a<0$), the vertex (found by completing the square), the y-intercept (set $x=0$), and the x-intercepts if they exist (solve $y=0$). Draw a smooth U or inverted-U curve through these points — never a series of straight segments. Label each feature on the diagram." },
          { heading: "Systematic method", body: "Work in this order: (1) complete the square to get the vertex, (2) substitute $x=0$ for the y-intercept, (3) solve the quadratic for x-intercepts if $\\Delta\\geq0$, (4) sketch with correct opening direction. If $\\Delta<0$ there are no x-intercepts and the vertex is entirely above or below the axis — say so explicitly in your answer." },
        ],
        keyFormulas: [
          { name: "Vertex", statement: "$(h,k)$ from completed square" },
          { name: "y-intercept", statement: "$(0,c)$" },
        ],
        workedExample: { problem: "Sketch $y=x^2-4x+3$.", solution: "Complete the square: $(x-2)^2-1$, vertex $(2,-1)$, opens upward. y-intercept: $x=0$ gives $y=3$. x-intercepts: $(x-1)(x-3)=0$ → $x=1,3$. Smooth parabola through $(1,0),(3,0),(0,3)$ with minimum at $(2,-1)$." },
      },
      questions: [
        {
          id: "olam-u1-s4-sk-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The y-intercept of $y=x^2-3x+2$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" }, { id: "b", text: "0" }, { id: "c", text: "-3" }, { id: "d", text: "1" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "y-intercept", statement: "Set $x=0$." }], steps: [{ reasoning: "$y=2$ when $x=0$.", marks: 1, markCode: "A" }], finalAnswer: "2" },
        },
        {
          id: "olam-u1-s4-sk-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the x-intercepts of $y=x^2-5x+6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Roots", statement: "Set $y=0$." }], steps: [
            { reasoning: "$(x-2)(x-3)=0$ → $x=2,3$.", marks: 1, markCode: "M" },
            { reasoning: "Intercepts $(2,0)$ and $(3,0)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2,3$" },
        },
        {
          id: "olam-u1-s4-sk-q3", difficulty: "core", totalMarks: 3,
          stem: "Sketch $y=x^2-2x-3$, stating vertex and intercepts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sketch", statement: "Key features." }], steps: [
            { reasoning: "$(x-1)^2-4$: vertex $(1,-4)$, opens up.", marks: 1, markCode: "M" },
            { reasoning: "x-intercepts: $(x-3)(x+1)=0$ → $x=-1,3$; y-intercept $-3$.", marks: 1, markCode: "M" },
            { reasoning: "Correct smooth parabola.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(1,-4)$; intercepts $(-1,0),(3,0),(0,-3)$" },
        },
        {
          id: "olam-u1-s4-sk-q4", difficulty: "core", totalMarks: 4,
          stem: "A ball's height is $h=-5t^2+20t+1$ metres, $t$ seconds. Find max height and when it occurs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex in context", statement: "Complete square." }], steps: [
            { reasoning: "$h=-5(t^2-4t)+1=-5[(t-2)^2-4]+1=-5(t-2)^2+21$.", marks: 1, markCode: "M" },
            { reasoning: "Max at $t=2$s, $h=21$m.", marks: 1, markCode: "M" },
            { reasoning: "Check: at $t=2$, $-20+40+1=21$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: 21 m at $t=2$ s.", marks: 1, markCode: "A" },
          ], finalAnswer: "21 m at $t=2$ s" },
        },
      ],
    },
    {
      id: "olam-u1-s4-applications",
      title: "Applied problems",
      skill: "Solve real-world quadratic problems.",
      lesson: {
        sections: [
          { heading: "Modelling approach", body: "Applied problems work in three stages: translate the words into a quadratic equation or expression, solve it, then interpret the answer in context — including rejecting solutions that are physically impossible (negative lengths, times before launch, etc.). Always state units in your final answer. Many problems hide the quadratic inside a sentence about area, product, consecutive numbers or optimisation." },
          { heading: "Common patterns", body: "Rectangle problems give $lw=A$ with a constraint linking $l$ and $w$; 'product of consecutive numbers' gives $n(n+1)=k$; optimisation problems like maximising fenced area produce a quadratic in one variable whose vertex gives the maximum. For maximum or minimum questions, complete the square rather than testing values — the vertex is exact." },
        ],
        keyFormulas: [
          { name: "Vertex optimum", statement: "Max/min of quadratic at vertex" },
        ],
        workedExample: { problem: "Product of two consecutive integers is 42. Find them.", solution: "Let the integers be $n$ and $n+1$: $n(n+1)=42$ → $n^2+n-42=0$ → $(n+7)(n-6)=0$ → $n=6$ (reject $-7$ as it gives negative integers in context, though mathematically $-7$ and $-6$ also work). Answer: 6 and 7. Check: $6\\times7=42$ ✓." },
      },
      questions: [
        {
          id: "olam-u1-s4-ap-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Two numbers multiply to 12 and add to 7. They are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "3 and 4" }, { id: "b", text: "2 and 6" }, { id: "c", text: "1 and 12" }, { id: "d", text: "5 and 2" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic in context", statement: "Set up equation." }], steps: [{ reasoning: "$x^2-7x+12=0$ → $x=3,4$.", marks: 1, markCode: "A" }], finalAnswer: "3 and 4" },
        },
        {
          id: "olam-u1-s4-ap-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A rectangle has perimeter 20 and area 24. Find its dimensions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous", statement: "Use both conditions." }], steps: [
            { reasoning: "$2(l+w)=20$ → $l+w=10$; $lw=24$ → $l(10-l)=24$ → $l^2-10l+24=0$.", marks: 1, markCode: "M" },
            { reasoning: "$(l-4)(l-6)=0$ → $4\\times6$ rectangle.", marks: 1, markCode: "A" },
          ], finalAnswer: "4 by 6" },
        },
        {
          id: "olam-u1-s4-ap-q3", difficulty: "core", totalMarks: 3,
          stem: "The sum of a number and its reciprocal is $\\frac{10}{3}$. Find the number.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Algebraic problem", statement: "Set up and solve." }], steps: [
            { reasoning: "$x+\\frac{1}{x}=\\frac{10}{3}$ → $3x^2-10x+3=0$.", marks: 1, markCode: "M" },
            { reasoning: "$(3x-1)(x-3)=0$ → $x=\\frac13$ or $3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=3$ or $\\frac13$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$ or $\\frac13$" },
        },
        {
          id: "olam-u1-s4-ap-q4", difficulty: "core", totalMarks: 4,
          stem: "A farmer has 40 m of fencing for a rectangular pen against a wall (wall side needs no fence). Maximise area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Optimisation", statement: "Vertex of quadratic." }], steps: [
            { reasoning: "Let width $x$, length $40-2x$: $A=x(40-2x)=40x-2x^2$.", marks: 1, markCode: "M" },
            { reasoning: "$A=-2(x-10)^2+200$ → max at $x=10$, $A=200$ m².", marks: 1, markCode: "M" },
            { reasoning: "Check: $x=10$ gives $l=20$; $A=200$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: max area 200 m² (10 m × 20 m).", marks: 1, markCode: "A" },
          ], finalAnswer: "200 m²" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u1-s4-graph-notes", title: "Quadratic graphs — notes", summary: "Sketching and applications.",
      sections: [
        { heading: "Sketch", body: "Vertex, intercepts, opening direction. Use completed square for vertex." },
        { heading: "Applications", body: "Model with quadratic, solve, check physical sense." },
      ] },
  ],
};
