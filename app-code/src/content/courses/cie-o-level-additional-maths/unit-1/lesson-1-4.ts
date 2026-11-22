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
            { id: "a", text: "-3" },
            { id: "b", text: "1" },
            { id: "c", text: "0" },
            { id: "d", text: "2" },
          ], correctChoiceId: "d" },
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
        {
          id: "olam-u1-s4-sk-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The y-intercept of $y=2x^2-x+4$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "0" },
            { id: "c", text: "2" },
            { id: "d", text: "-1" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "y-intercept", statement: "Set $x=0$." }], steps: [{ reasoning: "$y=4$ when $x=0$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olam-u1-s4-sk-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The x-intercepts of $y=x^2-9$ are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=9$ only" },
            { id: "b", text: "$x=3$ and $x=-3$" },
            { id: "c", text: "$x=\\pm\\sqrt{3}$" },
            { id: "d", text: "None" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Roots", statement: "Difference of squares." }], steps: [{ reasoning: "$(x-3)(x+3)=0$ → $x=\\pm3$.", marks: 1, markCode: "A" }], finalAnswer: "$x=3,-3$" },
        },
        {
          id: "olam-u1-s4-sk-q7", difficulty: "core", totalMarks: 1,
          stem: "The graph of $y=-3x^2+2x-1$ opens…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sideways" },
            { id: "b", text: "It is a straight line" },
            { id: "c", text: "Downward" },
            { id: "d", text: "Upward" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Opening direction", statement: "$a<0$ opens down." }], steps: [{ reasoning: "$a=-3<0$.", marks: 1, markCode: "A" }], finalAnswer: "Downward" },
        },
        {
          id: "olam-u1-s4-sk-q8", difficulty: "core", totalMarks: 1,
          stem: "The vertex of $y=x^2-8x+20$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(4,-4)$" },
            { id: "b", text: "$(4,4)$" },
            { id: "c", text: "$(8,20)$" },
            { id: "d", text: "$(2,16)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex", statement: "Complete square." }], steps: [{ reasoning: "$y=(x-4)^2-16+20=(x-4)^2+4$ → vertex $(4,4)$.", marks: 1, markCode: "A" }], finalAnswer: "$(4,4)$" },
        },
        {
          id: "olam-u1-s4-sk-q9", difficulty: "challenge", totalMarks: 1,
          stem: "How many x-intercepts does $y=x^2+2x+5$ have?",
          response: { type: "mcq", choices: [
            { id: "a", text: "2" },
            { id: "b", text: "None" },
            { id: "c", text: "3" },
            { id: "d", text: "1" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "$\\Delta<0$ → no real roots." }], steps: [{ reasoning: "$\\Delta=4-20=-16<0$ → no x-intercepts.", marks: 1, markCode: "A" }], finalAnswer: "None" },
        },
        {
          id: "olam-u1-s4-sk-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Find the x-intercepts of $y=x^2-7x+12$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }, { label: "b", answer: 4 }], unordered: true },
          markscheme: { principles: [{ kind: "technique", name: "Roots", statement: "Factorise." }], steps: [
            { reasoning: "$(x-3)(x-4)=0$ → $x=3$ or $x=4$.", marks: 1, markCode: "M" },
            { reasoning: "Intercepts $(3,0)$ and $(4,0)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3,4$" },
        },
        {
          id: "olam-u1-s4-sk-q11", difficulty: "foundation", totalMarks: 1,
          stem: "Find the y-intercept of $y=3x^2+6x-1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: { principles: [{ kind: "technique", name: "y-intercept", statement: "Set $x=0$." }], steps: [{ reasoning: "$y=-1$ at $x=0$.", marks: 1, markCode: "A" }], finalAnswer: "-1" },
        },
        {
          id: "olam-u1-s4-sk-q12", difficulty: "core", totalMarks: 2,
          stem: "Find the $x$-coordinate of the vertex of $y=2x^2-8x+3$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Vertex", statement: "Complete square." }], steps: [
            { reasoning: "$y=2[(x-2)^2-4]+3=2(x-2)^2-5$.", marks: 1, markCode: "M" },
            { reasoning: "Vertex $x$-coordinate $=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u1-s4-sk-q13", difficulty: "challenge", totalMarks: 2,
          stem: "How many distinct real roots does $y=x^2-6x+9$ have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "property", name: "Repeated root", statement: "Perfect square." }], steps: [
            { reasoning: "$y=(x-3)^2$ → touches axis once at $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Number of distinct roots $=1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u1-s4-sk-q14", difficulty: "core", totalMarks: 3,
          stem: "For $y=x^2+2x-8$, find the vertex and the x- and y-intercepts, and describe the sketch.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sketch features", statement: "Vertex + intercepts." }], steps: [
            { reasoning: "$y=(x+1)^2-9$: vertex $(-1,-9)$, opens upward.", marks: 1, markCode: "M" },
            { reasoning: "x-intercepts: $(x+4)(x-2)=0$ → $x=-4,2$; y-intercept $-8$.", marks: 1, markCode: "M" },
            { reasoning: "Smooth parabola through $(-4,0),(2,0),(0,-8)$ with minimum at $(-1,-9)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(-1,-9)$; intercepts $(-4,0),(2,0),(0,-8)$" },
        },
        {
          id: "olam-u1-s4-sk-q15", difficulty: "core", totalMarks: 3,
          stem: "Sketch $y=-x^2+4x-3$, stating the vertex, intercepts and direction of opening.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sketch", statement: "Key features." }], steps: [
            { reasoning: "$y=-(x-2)^2+1$: vertex $(2,1)$, opens downward (maximum).", marks: 1, markCode: "M" },
            { reasoning: "x-intercepts: $x^2-4x+3=0$ → $(x-1)(x-3)=0$ → $x=1,3$; y-intercept $-3$.", marks: 1, markCode: "M" },
            { reasoning: "Inverted parabola through $(1,0),(3,0),(0,-3)$, peak at $(2,1)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "Vertex $(2,1)$; intercepts $(1,0),(3,0),(0,-3)$" },
        },
        {
          id: "olam-u1-s4-sk-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A ball is projected with height $h=-5t^2+30t+2$ metres after $t$ seconds. Find the maximum height and the time it occurs.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Vertex in context", statement: "Complete square." }], steps: [
            { reasoning: "$h=-5(t^2-6t)+2=-5[(t-3)^2-9]+2=-5(t-3)^2+47$.", marks: 1, markCode: "M" },
            { reasoning: "Maximum at $t=3$ s, $h=47$ m.", marks: 1, markCode: "M" },
            { reasoning: "Check: $h(3)=-45+90+2=47$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 47 m at $t=3$ s.", marks: 1, markCode: "A" },
          ], finalAnswer: "47 m at $t=3$ s" },
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
            { id: "a", text: "2 and 6" },
            { id: "b", text: "3 and 4" },
            { id: "c", text: "1 and 12" },
            { id: "d", text: "5 and 2" },
          ], correctChoiceId: "b" },
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
        {
          id: "olam-u1-s4-ap-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Two numbers multiply to 20 and add to 9. They are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "2 and 10" },
            { id: "b", text: "1 and 20" },
            { id: "c", text: "3 and 7" },
            { id: "d", text: "4 and 5" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic in context", statement: "Set up equation." }], steps: [{ reasoning: "$x^2-9x+20=0$ → $(x-4)(x-5)=0$ → 4 and 5.", marks: 1, markCode: "A" }], finalAnswer: "4 and 5" },
        },
        {
          id: "olam-u1-s4-ap-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Two consecutive positive integers have product 56. They are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "8 and 9" },
            { id: "b", text: "5 and 11" },
            { id: "c", text: "6 and 9" },
            { id: "d", text: "7 and 8" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Consecutive integers", statement: "$n(n+1)=56$." }], steps: [{ reasoning: "$n^2+n-56=0$ → $(n+8)(n-7)=0$ → $n=7$ → 7 and 8.", marks: 1, markCode: "A" }], finalAnswer: "7 and 8" },
        },
        {
          id: "olam-u1-s4-ap-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A rectangle has area 15 m² and its length is 2 m more than its width. The width is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4 m" },
            { id: "b", text: "2 m" },
            { id: "c", text: "5 m" },
            { id: "d", text: "3 m" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Area problem", statement: "Set up equation." }], steps: [{ reasoning: "$w(w+2)=15$ → $w^2+2w-15=0$ → $(w+5)(w-3)=0$ → $w=3$.", marks: 1, markCode: "A" }], finalAnswer: "3 m" },
        },
        {
          id: "olam-u1-s4-ap-q8", difficulty: "core", totalMarks: 1,
          stem: "The sum of the squares of two consecutive integers is 25. The integers are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4 and 5" },
            { id: "b", text: "2 and 3" },
            { id: "c", text: "3 and 4" },
            { id: "d", text: "1 and 2" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Sum of squares", statement: "$n^2+(n+1)^2=25$." }], steps: [{ reasoning: "$2n^2+2n-24=0$ → $n^2+n-12=0$ → $n=3$ → 3 and 4 ($9+16=25$ ✓).", marks: 1, markCode: "A" }], finalAnswer: "3 and 4" },
        },
        {
          id: "olam-u1-s4-ap-q9", difficulty: "core", totalMarks: 1,
          stem: "A positive number squared exceeds the number by 20. The number is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "-4" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Quadratic in context", statement: "$x^2-x=20$." }], steps: [{ reasoning: "$x^2-x-20=0$ → $(x-5)(x+4)=0$ → positive solution $x=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olam-u1-s4-ap-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Two positive numbers have sum 10 and product 21. Find the smaller number.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Sum and product", statement: "Quadratic roots." }], steps: [
            { reasoning: "$t^2-10t+21=0$ → $(t-3)(t-7)=0$ → 3 and 7.", marks: 1, markCode: "M" },
            { reasoning: "Smaller $=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u1-s4-ap-q11", difficulty: "foundation", totalMarks: 2,
          stem: "Two consecutive positive integers have product 132. Find the larger integer.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Consecutive integers", statement: "$n(n+1)=132$." }], steps: [
            { reasoning: "$n^2+n-132=0$ → $(n+12)(n-11)=0$ → $n=11$.", marks: 1, markCode: "M" },
            { reasoning: "Larger $=12$ (check $11\\times12=132$ ✓).", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "olam-u1-s4-ap-q12", difficulty: "core", totalMarks: 3,
          stem: "A rectangle has perimeter 24 m and area 32 m². Find its length.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Rectangle", statement: "Two equations." }], steps: [
            { reasoning: "$l+w=12$; $lw=32$ → $l(12-l)=32$ → $l^2-12l+32=0$ → $(l-4)(l-8)=0$.", marks: 1, markCode: "M" },
            { reasoning: "Sides 4 and 8; length is the longer side $=8$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 8 m.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 m" },
        },
        {
          id: "olam-u1-s4-ap-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Find the smaller positive value of $x$ satisfying $x+\\frac{9}{x}=10$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Reciprocal equation", statement: "Multiply through by $x$." }], steps: [
            { reasoning: "$x^2-10x+9=0$ → $(x-1)(x-9)=0$ → $x=1$ or $9$.", marks: 1, markCode: "M" },
            { reasoning: "Smaller positive value $=1$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $1+9=10$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u1-s4-ap-q14", difficulty: "core", totalMarks: 3,
          stem: "Find two numbers with sum 11 whose squares sum to 61.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sum of squares", statement: "Use $(x+y)^2$ identity." }], steps: [
            { reasoning: "$x^2+y^2=(x+y)^2-2xy$ → $61=121-2xy$ → $xy=30$.", marks: 1, markCode: "M" },
            { reasoning: "$x,y$ are roots of $t^2-11t+30=0$ → $(t-5)(t-6)=0$ → 5 and 6.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5 and 6 (check $25+36=61$ ✓).", marks: 1, markCode: "A" },
          ], finalAnswer: "5 and 6" },
        },
        {
          id: "olam-u1-s4-ap-q15", difficulty: "core", totalMarks: 3,
          stem: "A rectangular garden has area 20 m² and its length is 1 m more than its width. Find its dimensions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Area problem", statement: "Set up quadratic." }], steps: [
            { reasoning: "$w(w+1)=20$ → $w^2+w-20=0$ → $(w+5)(w-4)=0$ → $w=4$.", marks: 1, markCode: "M" },
            { reasoning: "Length $=5$ m.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4 m by 5 m (check area $=20$ ✓).", marks: 1, markCode: "A" },
          ], finalAnswer: "4 m by 5 m" },
        },
        {
          id: "olam-u1-s4-ap-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A farmer has 36 m of fencing to enclose a rectangular field. Find the maximum possible area.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Optimisation", statement: "Vertex of quadratic." }], steps: [
            { reasoning: "Let width $x$, length $18-x$: $A=x(18-x)=18x-x^2$.", marks: 1, markCode: "M" },
            { reasoning: "$A=-(x-9)^2+81$ → maximum at $x=9$, $A=81$ m².", marks: 1, markCode: "M" },
            { reasoning: "Check: $9\\times9=81$ ✓ (square gives max).", marks: 1, markCode: "M" },
            { reasoning: "Answer: maximum area 81 m².", marks: 1, markCode: "A" },
          ], finalAnswer: "81 m²" },
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
