import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "ciam-u1-lesson-1-1",
  code: "1-1",
  title: "Quadratic Equations",
  goal: "I CAN solve quadratic equations by factorising, completing the square and formula.",
  standards: ["0606: quadratic equations"],
  vocabulary: [
    { term: "Quadratic", definition: "$ax^2+bx+c=0$ with $a\\neq0$." },
    { term: "Discriminant", definition: "$b^2-4ac$ — determines nature of roots." },
    { term: "Completing the square", definition: "Rewriting as $(x-h)^2+k=0$." },
    { term: "Roots", definition: "Solutions of the equation." },
  ],
  concepts: [
    {
      id: "ciam-u1-s1-solve",
      title: "Solving quadratics",
      skill: "Solve quadratic equations at IGCSE Additional level.",
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
          id: "ciam-u1-s1-so-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2-7x+12=0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=2,6$" },
            { id: "b", text: "$x=1,12$" },
            { id: "c", text: "$x=-3,-4$" },
            { id: "d", text: "$x=3,4$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find two numbers." }], steps: [{ reasoning: "$(x-3)(x-4)=0$ → $x=3,4$.", marks: 1, markCode: "A" }], finalAnswer: "$x=3,4$" },
        },
        {
          id: "ciam-u1-s1-so-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2+4x-5=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Standard." }], steps: [
            { reasoning: "$(x+5)(x-1)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-5,1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-5,1$" },
        },
        {
          id: "ciam-u1-s1-so-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $2x^2-3x-2=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Non-monic." }], steps: [
            { reasoning: "$(2x+1)(x-2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-\\frac12$ or $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-\\frac12,2$" },
        },
        {
          id: "ciam-u1-s1-so-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $x^2-4x+1=0$, giving answers to 3 s.f.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Formula", statement: "Use formula." }], steps: [
            { reasoning: "$x=\\frac{4\\pm\\sqrt{16-4}}{2}=\\frac{4\\pm\\sqrt{12}}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$=2\\pm\\sqrt3$.", marks: 1, markCode: "M" },
            { reasoning: "$x=3.73$ or $x=0.268$.", marks: 1, markCode: "M" },
            { reasoning: "Answer to 3 s.f.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3.73, 0.268$" },
        },
        {
          id: "ciam-u1-s1-so-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2+2x-15=0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=-3$ or $x=5$" },
            { id: "b", text: "$x=3$ or $x=-5$" },
            { id: "c", text: "$x=1$ or $x=-15$" },
            { id: "d", text: "$x=15$ or $x=-1$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Standard." }], steps: [{ reasoning: "$(x+5)(x-3)=0$ → $x=-5,3$.", marks: 1, markCode: "A" }], finalAnswer: "$x=3,-5$" },
        },
        {
          id: "ciam-u1-s1-so-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-9=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Difference of squares", statement: "Factorise." }], steps: [
            { reasoning: "$(x-3)(x+3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=3$ or $x=-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3,-3$" },
        },
        {
          id: "ciam-u1-s1-so-q7", difficulty: "core", totalMarks: 3,
          response: { type: "numeric", unordered: true, parts: [
            { label: "a", answer: 0.3333333333333333 }, { label: "b", answer: -2 },
          ] },
          stem: "Solve $3x^2+5x-2=0$.",
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Non-monic." }], steps: [
            { reasoning: "$(3x-1)(x+2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=\\frac13$ or $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac13,-2$" },
        },
        {
          id: "ciam-u1-s1-so-q8", difficulty: "foundation", totalMarks: 2,
          response: { type: "numeric", unordered: true, parts: [
            { label: "a", answer: 2 }, { label: "b", answer: -2 },
          ] },
          stem: "Solve $2x^2-8=0$.",
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Isolate $x^2$." }], steps: [
            { reasoning: "$x^2=4$.", marks: 1, markCode: "M" },
            { reasoning: "$x=2$ or $x=-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2,-2$" },
        },
        {
          id: "ciam-u1-s1-so-q9", difficulty: "core", totalMarks: 1,
          stem: "Solve $x^2+2x-4=0$, giving exact answers.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=-1\\pm2\\sqrt5$" },
            { id: "b", text: "$x=-1\\pm\\sqrt5$" },
            { id: "c", text: "$x=1\\pm\\sqrt5$" },
            { id: "d", text: "$x=2\\pm\\sqrt5$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Formula", statement: "Exact form." }], steps: [{ reasoning: "$x=\\frac{-2\\pm\\sqrt{4+16}}{2}=-1\\pm\\sqrt5$.", marks: 1, markCode: "A" }], finalAnswer: "$x=-1\\pm\\sqrt5$" },
        },
        {
          id: "ciam-u1-s1-so-q10", difficulty: "core", totalMarks: 1,
          stem: "The quadratic equation with roots $2$ and $-5$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x^2-7x-10=0$" },
            { id: "b", text: "$x^2-3x-10=0$" },
            { id: "c", text: "$x^2+3x-10=0$" },
            { id: "d", text: "$x^2+7x-10=0$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Reverse factorise", statement: "$(x-p)(x-q)$." }], steps: [{ reasoning: "$(x-2)(x+5)=x^2+3x-10$.", marks: 1, markCode: "A" }], finalAnswer: "$x^2+3x-10=0$" },
        },
        {
          id: "ciam-u1-s1-so-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $(x-2)(x+3)=10$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand first", statement: "Standard form needed." }], steps: [
            { reasoning: "$x^2+x-6=10$ → $x^2+x-16=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=\\frac{-1\\pm\\sqrt{1+64}}{2}=\\frac{-1\\pm\\sqrt{65}}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "Check $\\sqrt{65}\\approx8.06$: $x\\approx3.53$ or $x\\approx-4.53$. Verify in original: $(1.53)(6.53)\\approx10$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\frac{-1\\pm\\sqrt{65}}{2}$" },
        },
        {
          id: "ciam-u1-s1-so-q12", difficulty: "core", totalMarks: 1,
          stem: "Solve $(2x-1)^2=9$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=\\frac12$ or $x=-2$" },
            { id: "b", text: "$x=2$ or $x=-1$" },
            { id: "c", text: "$x=5$ or $x=-7$" },
            { id: "d", text: "$x=4$ or $x=-2$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Square root both sides", statement: "$\\pm$ needed." }], steps: [{ reasoning: "$2x-1=\\pm3$ → $x=2$ or $x=-1$.", marks: 1, markCode: "A" }], finalAnswer: "$x=2,-1$" },
        },
        {
          id: "ciam-u1-s1-so-q13", difficulty: "challenge", totalMarks: 3,
          response: { type: "numeric", unordered: true, parts: [
            { label: "a", answer: 1 }, { label: "b", answer: -1 }, { label: "c", answer: 2 }, { label: "d", answer: -2 },
          ] },
          stem: "Solve $x^4-5x^2+4=0$.",
          markscheme: { principles: [{ kind: "technique", name: "Substitution", statement: "Let $u=x^2$." }], steps: [
            { reasoning: "$u^2-5u+4=0$ → $u=1$ or $u=4$.", marks: 1, markCode: "M" },
            { reasoning: "$x^2=1$ or $x^2=4$.", marks: 1, markCode: "M" },
            { reasoning: "$x=\\pm1,\\pm2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=\\pm1,\\pm2$" },
        },
        {
          id: "ciam-u1-s1-so-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2=25$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=5$ only" },
            { id: "b", text: "$x=\\pm\\frac{25}{2}$" },
            { id: "c", text: "$x=5$ or $x=-5$" },
            { id: "d", text: "$x=25$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Square root", statement: "Both signs." }], steps: [{ reasoning: "$x=\\pm5$.", marks: 1, markCode: "A" }], finalAnswer: "$x=\\pm5$" },
        },
        {
          id: "ciam-u1-s1-so-q15", difficulty: "core", totalMarks: 1,
          stem: "Solve $x^2-4x+2=0$, giving exact answers.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=4\\pm\\sqrt2$" },
            { id: "b", text: "$x=-2\\pm\\sqrt2$" },
            { id: "c", text: "$x=2\\pm2\\sqrt2$" },
            { id: "d", text: "$x=2\\pm\\sqrt2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Formula", statement: "Exact form." }], steps: [{ reasoning: "$x=\\frac{4\\pm\\sqrt{16-8}}{2}=2\\pm\\sqrt2$.", marks: 1, markCode: "A" }], finalAnswer: "$x=2\\pm\\sqrt2$" },
        },
        {
          id: "ciam-u1-s1-so-q16", difficulty: "challenge", totalMarks: 3,
          response: { type: "numeric", unordered: true, parts: [
            { label: "a", answer: -3 }, { label: "b", answer: -4 },
          ] },
          stem: "The quadratic $x^2+bx+c$ has roots $4$ and $-1$. Find $b$ and $c$.",
          markscheme: { principles: [{ kind: "technique", name: "Sum and product", statement: "Roots to coefficients." }], steps: [
            { reasoning: "Sum $=3=-b$ → $b=-3$; product $=-4=c$.", marks: 1, markCode: "M" },
            { reasoning: "Equation: $x^2-3x-4=0$. Check: roots $4,-1$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$b=-3$, $c=-4$" },
        },
      ],
    },
    {
      id: "ciam-u1-s1-discriminant",
      title: "Nature of roots",
      skill: "Use the discriminant to classify roots at IGCSE level.",
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
          id: "ciam-u1-s1-di-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The discriminant of $x^2+4x+4$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "32" },
            { id: "b", text: "-16" },
            { id: "c", text: "16" },
            { id: "d", text: "0" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "Discriminant", statement: "$b^2-4ac$." }], steps: [{ reasoning: "$16-16=0$.", marks: 1, markCode: "A" }], finalAnswer: "0" },
        },
        {
          id: "ciam-u1-s1-di-q2", difficulty: "foundation", totalMarks: 2,
          stem: "For $x^2-6x+9=0$, what type of roots?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "Classify." }], steps: [
            { reasoning: "$\\Delta = 36-36 = 0$.", marks: 1, markCode: "M" },
            { reasoning: "Repeated real root ($x=3$).", marks: 1, markCode: "A" },
          ], finalAnswer: "Repeated root" },
        },
        {
          id: "ciam-u1-s1-di-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the range of $k$ for $x^2+2x+k=0$ to have two distinct real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "$\\Delta>0$." }], steps: [
            { reasoning: "$4-4k>0$ → $k<1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k<1$.", marks: 1, markCode: "M" },
            { reasoning: "Check boundary $k=1$ gives $\\Delta=0$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k<1$" },
        },
        {
          id: "ciam-u1-s1-di-q4", difficulty: "core", totalMarks: 4,
          stem: "Find the values of $k$ for which $x^2+2kx+3k=0$ has two distinct real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "Require $\\Delta>0$." }], steps: [
            { reasoning: "$\\Delta = 4k^2-12k = 4k(k-3)$.", marks: 1, markCode: "M" },
            { reasoning: "$4k(k-3)>0$ → $k<0$ or $k>3$ (sign analysis of quadratic in $k$).", marks: 1, markCode: "M" },
            { reasoning: "Check: $k=-1$ gives $\\Delta=16>0$; $k=1$ gives $\\Delta=-8<0$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k<0$ or $k>3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k<0$ or $k>3$" },
        },
        {
          id: "ciam-u1-s1-di-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The discriminant of $2x^2-4x+3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-8$" },
            { id: "b", text: "$-20$" },
            { id: "c", text: "$8$" },
            { id: "d", text: "$20$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Discriminant", statement: "$b^2-4ac$." }], steps: [{ reasoning: "$(-4)^2-4(2)(3)=16-24=-8$.", marks: 1, markCode: "A" }], finalAnswer: "$-8$" },
        },
        {
          id: "ciam-u1-s1-di-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Describe the nature of the roots of $x^2+3x+5=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "Classify." }], steps: [
            { reasoning: "$\\Delta=9-20=-11<0$.", marks: 1, markCode: "M" },
            { reasoning: "No real roots.", marks: 1, markCode: "A" },
          ], finalAnswer: "No real roots" },
        },
        {
          id: "ciam-u1-s1-di-q7", difficulty: "core", totalMarks: 3,
          stem: "Find the values of $k$ for which $x^2+kx+16=0$ has a repeated root.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant", statement: "Set $\\Delta=0$." }], steps: [
            { reasoning: "$k^2-64=0$ → $k=\\pm8$.", marks: 1, markCode: "M" },
            { reasoning: "Both give repeated roots: $k=8$ → $(x+4)^2$; $k=-8$ → $(x-4)^2$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k=8$ or $k=-8$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k=\\pm8$" },
        },
        {
          id: "ciam-u1-s1-di-q8", difficulty: "foundation", totalMarks: 1,
          stem: "$\\Delta>0$ tells us the quadratic has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One repeated root" },
            { id: "b", text: "No real roots" },
            { id: "c", text: "One real root" },
            { id: "d", text: "Two distinct real roots" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "Classification." }], steps: [{ reasoning: "$\\Delta>0$ → curve crosses axis twice.", marks: 1, markCode: "A" }], finalAnswer: "Two distinct real roots" },
        },
        {
          id: "ciam-u1-s1-di-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the range of $k$ for which $x^2-6x+k=0$ has no real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "Require $\\Delta<0$." }], steps: [
            { reasoning: "$36-4k<0$ → $k>9$.", marks: 1, markCode: "M" },
            { reasoning: "Check $k=10$: $\\Delta=-4<0$ ✓; $k=9$: $\\Delta=0$ (repeated, excluded).", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k>9$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k>9$" },
        },
        {
          id: "ciam-u1-s1-di-q10", difficulty: "foundation", totalMarks: 2,
          response: { type: "numeric", parts: [{ label: "a", answer: -56 }] },
          stem: "Calculate the discriminant of $3x^2-2x+5$.",
          markscheme: { principles: [{ kind: "formula", name: "Discriminant", statement: "$b^2-4ac$." }], steps: [
            { reasoning: "$(-2)^2-4(3)(5)=4-60=-56$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-56$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-56$" },
        },
        {
          id: "ciam-u1-s1-di-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Find the values of $m$ for which $2x^2+mx+8=0$ has two distinct real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "Require $\\Delta>0$." }], steps: [
            { reasoning: "$\\Delta=m^2-64>0$.", marks: 1, markCode: "M" },
            { reasoning: "Sign analysis: $m^2>64$ → $m<-8$ or $m>8$.", marks: 1, markCode: "M" },
            { reasoning: "Check $m=0$: $\\Delta=-64<0$ so excluded region correct; $m=9$: $\\Delta=17>0$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer: $m<-8$ or $m>8$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$m<-8$ or $m>8$" },
        },
        {
          id: "ciam-u1-s1-di-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Find the values of $k$ for which $x^2+2kx+9k=0$ has equal roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant", statement: "Set $\\Delta=0$." }], steps: [
            { reasoning: "$4k^2-36k=0$ → $4k(k-9)=0$ → $k=0$ or $k=9$.", marks: 1, markCode: "M" },
            { reasoning: "$k=0$: $x^2=0$, repeated root $x=0$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "$k=9$: $x^2+18x+81=(x+9)^2=0$, repeated root $x=-9$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k=0$ or $k=9$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k=0$ or $k=9$" },
        },
        {
          id: "ciam-u1-s1-di-q13", difficulty: "core", totalMarks: 1,
          stem: "For which value of $c$ does $x^2-8x+c=0$ have a repeated root?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$16$" },
            { id: "b", text: "$32$" },
            { id: "c", text: "$-16$" },
            { id: "d", text: "$8$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant", statement: "Set $\\Delta=0$." }], steps: [{ reasoning: "$64-4c=0$ → $c=16$.", marks: 1, markCode: "A" }], finalAnswer: "$c=16$" },
        },
        {
          id: "ciam-u1-s1-di-q14", difficulty: "challenge", totalMarks: 4,
          stem: "The line $y=mx+1$ is tangent to the curve $y=x^2-2x+5$. Find the possible values of $m$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Tangent condition", statement: "Tangency $\\iff\\Delta=0$." }], steps: [
            { reasoning: "Intersection: $x^2-2x+5=mx+1$ → $x^2-(m+2)x+4=0$.", marks: 1, markCode: "M" },
            { reasoning: "Tangent needs $\\Delta=0$: $(m+2)^2-16=0$ → $m+2=\\pm4$.", marks: 1, markCode: "M" },
            { reasoning: "$m=2$ or $m=-6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$m=2$ or $m=-6$" },
        },
        {
          id: "ciam-u1-s1-di-q15", difficulty: "core", totalMarks: 3,
          stem: "Given that $a>0$, find the values of $a$ for which $ax^2+4x+1=0$ has two distinct real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "Require $\\Delta>0$." }], steps: [
            { reasoning: "$16-4a>0$ → $a<4$.", marks: 1, markCode: "M" },
            { reasoning: "Combined with $a>0$: $0<a<4$; also $a\\neq0$ already excluded.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $0<a<4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$0<a<4$" },
        },
        {
          id: "ciam-u1-s1-di-q16", difficulty: "challenge", totalMarks: 4,
          stem: "The equation $x^2-2(k+1)x+(k^2+k+1)=0$ has equal roots. Find $k$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant", statement: "Simplify carefully." }], steps: [
            { reasoning: "$\\Delta=4(k+1)^2-4(k^2+k+1)$.", marks: 1, markCode: "M" },
            { reasoning: "$=4[(k^2+2k+1)-(k^2+k+1)]=4k$.", marks: 1, markCode: "M" },
            { reasoning: "$4k=0$ → $k=0$.", marks: 1, markCode: "M" },
            { reasoning: "Check $k=0$: $x^2-2x+1=(x-1)^2=0$ repeated root $x=1$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$k=0$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u1-s1-quad-notes", title: "Quadratic equations — notes", summary: "Solving methods and discriminant.",
      sections: [
        { heading: "Methods", body: "Factorise → complete square → formula. Discriminant classifies roots." },
        { heading: "Discriminant", body: "$\\Delta=b^2-4ac$: >0 distinct, =0 repeated, <0 no real roots." },
      ] },
  ],
};
