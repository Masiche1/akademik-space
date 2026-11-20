import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olam-u1-lesson-1-1",
  code: "1-1",
  title: "Quadratic Equations",
  goal: "I CAN solve quadratic equations by factorising, completing the square and formula.",
  standards: ["4037: quadratic equations"],
  vocabulary: [
    { term: "Quadratic", definition: "$ax^2+bx+c=0$ with $a\\neq0$." },
    { term: "Discriminant", definition: "$b^2-4ac$ — determines nature of roots." },
    { term: "Completing the square", definition: "Rewriting as $(x-h)^2+k=0$." },
    { term: "Roots", definition: "Solutions of the equation." },
  ],
  concepts: [
    {
      id: "olam-u1-s1-solve",
      title: "Solving quadratics",
      skill: "Solve quadratic equations at O Level Additional level.",
      lesson: {
        sections: [
          { heading: "Factorising", body: "A quadratic equation has the form $ax^2+bx+c=0$. The quickest method is factorisation: find two numbers that multiply to $ac$ and add to $b$, split the middle term, and factorise into two brackets. Each bracket gives one root, e.g. $(x-p)(x-q)=0$ means $x=p$ or $x=q$. Always expand your brackets back to check the factorisation is correct before solving." },
          { heading: "Completing the square and formula", body: "When factorisation fails, completing the square rewrites $ax^2+bx+c$ as $a(x-h)^2+k$, giving exact roots directly. The quadratic formula $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ is the most reliable method — it works for every quadratic. The quantity under the root, $b^2-4ac$, is called the discriminant and determines whether real roots exist." },
        ],
        keyFormulas: [
          { name: "Quadratic formula", statement: "$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$" },
          { name: "Discriminant", statement: "$\\Delta=b^2-4ac$" },
        ],
        workedExample: { problem: "Solve $x^2-5x+6=0$.", solution: "Factorise: need two numbers multiplying to 6 and adding to $-5$: $-2$ and $-3$. So $(x-2)(x-3)=0$, giving $x=2$ or $x=3$. Check by expanding: $x^2-5x+6$ ✓. Using the formula as a check: $x=\\frac{5\\pm\\sqrt{25-24}}{2}=\\frac{5\\pm1}{2}$ → $x=3$ or $2$. Same answer." },
      },
      questions: [
        {
          id: "olam-u1-s1-so-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2-7x+12=0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=3,4$" }, { id: "b", text: "$x=-3,-4$" }, { id: "c", text: "$x=2,6$" }, { id: "d", text: "$x=1,12$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find two numbers." }], steps: [{ reasoning: "$(x-3)(x-4)=0$ → $x=3,4$.", marks: 1, markCode: "A" }], finalAnswer: "$x=3,4$" },
        },
        {
          id: "olam-u1-s1-so-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2+4x-5=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Standard." }], steps: [
            { reasoning: "$(x+5)(x-1)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-5,1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-5,1$" },
        },
        {
          id: "olam-u1-s1-so-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $2x^2-3x-2=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Non-monic." }], steps: [
            { reasoning: "$(2x+1)(x-2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-\\frac12$ or $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-\\frac12,2$" },
        },
        {
          id: "olam-u1-s1-so-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $x^2-4x+1=0$, giving answers to 3 s.f.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Formula", statement: "Use formula." }], steps: [
            { reasoning: "$x=\\frac{4\\pm\\sqrt{16-4}}{2}=\\frac{4\\pm\\sqrt{12}}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$=2\\pm\\sqrt3$.", marks: 1, markCode: "M" },
            { reasoning: "$x=3.73$ or $x=0.268$.", marks: 1, markCode: "M" },
            { reasoning: "Answer to 3 s.f.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3.73, 0.268$" },
        },
      ],
    },
    {
      id: "olam-u1-s1-discriminant",
      title: "Nature of roots",
      skill: "Use the discriminant to classify roots at O Level.",
      lesson: {
        sections: [
          { heading: "Discriminant", body: "The discriminant $\\Delta=b^2-4ac$ tells you the nature of the roots without solving. If $\\Delta>0$ there are two distinct real roots; if $\\Delta=0$ there is one repeated real root; if $\\Delta<0$ there are no real roots at all — the roots are complex (non-real). You only need to compute $\\Delta$, not the full formula, to classify." },
          { heading: "Geometric meaning", body: "Think of the quadratic as the intersection of $y=ax^2+bx+c$ with the x-axis. Two distinct real roots means the curve crosses the axis twice; a repeated root means it just touches (tangent); no real roots means it never touches the axis. This is why $\\Delta=0$ corresponds to a line being tangent to a curve — a key idea in later coordinate geometry work." },
        ],
        keyFormulas: [
          { name: "Discriminant", statement: "$\\Delta=b^2-4ac$" },
          { name: "Classification", statement: "$\\Delta>0$ distinct, $\\Delta=0$ repeated, $\\Delta<0$ no real roots" },
        ],
        workedExample: { problem: "Find $k$ so $x^2+kx+9=0$ has equal roots.", solution: "Equal roots requires $\\Delta=0$: $k^2-4(1)(9)=k^2-36=0$, so $k=\\pm6$. Check $k=6$: $x^2+6x+9=(x+3)^2=0$ → repeated root $x=-3$ ✓." },
      },
      questions: [
        {
          id: "olam-u1-s1-di-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The discriminant of $x^2+4x+4$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "0" }, { id: "b", text: "32" }, { id: "c", text: "16" }, { id: "d", text: "-16" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Discriminant", statement: "$b^2-4ac$." }], steps: [{ reasoning: "$16-16=0$.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "olam-u1-s1-di-q2", difficulty: "foundation", totalMarks: 2,
          stem: "For $x^2-6x+9=0$, what type of roots?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "Classify." }], steps: [
            { reasoning: "$\\Delta = 36-36 = 0$.", marks: 1, markCode: "M" },
            { reasoning: "Repeated real root ($x=3$).", marks: 1, markCode: "A" },
          ], finalAnswer: "Repeated root" },
        },
        {
          id: "olam-u1-s1-di-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the range of $k$ for $x^2+2x+k=0$ to have two distinct real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "$\\Delta>0$." }], steps: [
            { reasoning: "$4-4k>0$ → $k<1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k<1$.", marks: 1, markCode: "M" },
            { reasoning: "Check boundary $k=1$ gives $\\Delta=0$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k<1$" },
        },
        {
          id: "olam-u1-s1-di-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the values of $k$ for which $x^2+2kx+3k=0$ has two distinct real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "Require $\\Delta>0$." }], steps: [
            { reasoning: "$\\Delta = 4k^2-12k = 4k(k-3)$.", marks: 1, markCode: "M" },
            { reasoning: "$4k(k-3)>0$ → $k<0$ or $k>3$ (sign analysis of quadratic in $k$).", marks: 1, markCode: "M" },
            { reasoning: "Check: $k=-1$ gives $\\Delta=16>0$; $k=1$ gives $\\Delta=-8<0$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k<0$ or $k>3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k<0$ or $k>3$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u1-s1-quad-notes", title: "Quadratic equations — notes", summary: "Solving methods and discriminant.",
      sections: [
        { heading: "Methods", body: "Factorise → complete square → formula. Discriminant classifies roots." },
        { heading: "Discriminant", body: "$\\Delta=b^2-4ac$: >0 distinct, =0 repeated, <0 no real roots." },
      ] },
  ],
};
