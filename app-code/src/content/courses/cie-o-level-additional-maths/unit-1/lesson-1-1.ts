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
            { id: "a", text: "$x=2,6$" },
            { id: "b", text: "$x=3,4$" },
            { id: "c", text: "$x=1,12$" },
            { id: "d", text: "$x=-3,-4$" },
          ], correctChoiceId: "b" },
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
        {
          id: "olam-u1-s1-so-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2+2x-15=0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=-5,3$" },
            { id: "b", text: "$x=-1,-15$" },
            { id: "c", text: "$x=1,15$" },
            { id: "d", text: "$x=5,-3$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find two numbers." }], steps: [{ reasoning: "$(x+5)(x-3)=0$ → $x=-5$ or $x=3$.", marks: 1, markCode: "A" }], finalAnswer: "$x=-5,3$" },
        },
        {
          id: "olam-u1-s1-so-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-8x+15=0$. Give the smaller root.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find roots then select." }], steps: [
            { reasoning: "$(x-3)(x-5)=0$ → $x=3$ or $x=5$.", marks: 1, markCode: "M" },
            { reasoning: "Smaller root is 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u1-s1-so-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2+3x-10=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Standard." }], steps: [
            { reasoning: "$(x+5)(x-2)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-5$ or $x=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-5,2$" },
        },
        {
          id: "olam-u1-s1-so-q8", difficulty: "core", totalMarks: 3,
          stem: "Solve $2x^2+7x+3=0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=-3,\\frac12$" },
            { id: "b", text: "$x=-2,\\frac32$" },
            { id: "c", text: "$x=-\\frac12,-3$" },
            { id: "d", text: "$x=\\frac12,3$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Non-monic." }], steps: [
            { reasoning: "$(2x+1)(x+3)=0$ → $x=-\\frac12$ or $x=-3$.", marks: 1, markCode: "M" },
            { reasoning: "Both roots verified by expansion.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-\\frac12,-3$" },
        },
        {
          id: "olam-u1-s1-so-q9", difficulty: "core", totalMarks: 2,
          stem: "Solve $4x^2-25=0$. Give the positive root.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Difference of squares", statement: "Factorise." }], steps: [
            { reasoning: "$(2x-5)(2x+5)=0$ → $x=\\pm\\frac52$.", marks: 1, markCode: "M" },
            { reasoning: "Positive root is $2.5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2.5" },
        },
        {
          id: "olam-u1-s1-so-q10", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-6x+4=0$, giving answers in surd form.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Formula", statement: "Use formula." }], steps: [
            { reasoning: "$x=\\frac{6\\pm\\sqrt{36-16}}{2}=\\frac{6\\pm\\sqrt{20}}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$=\\frac{6\\pm2\\sqrt5}{2}=3\\pm\\sqrt5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=3+\\sqrt5$ or $3-\\sqrt5$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3\\pm\\sqrt5$" },
        },
        {
          id: "olam-u1-s1-so-q11", difficulty: "challenge", totalMarks: 3,
          stem: "Which pair of values solves $3x^2-5x-2=0$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=1,-2$" },
            { id: "b", text: "$x=-2,\\frac13$" },
            { id: "c", text: "$x=2,-\\frac13$" },
            { id: "d", text: "$x=3,-\\frac12$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Non-monic." }], steps: [
            { reasoning: "$(3x+1)(x-2)=0$ → $x=-\\frac13$ or $x=2$.", marks: 1, markCode: "M" },
            { reasoning: "Check $x=2$: $12-10-2=0$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2,-\\frac13$" },
        },
        {
          id: "olam-u1-s1-so-q12", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $x^2-4x-1=0$, giving the larger root to 3 s.f.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4.24 }] },
          markscheme: { principles: [{ kind: "technique", name: "Formula", statement: "Use formula." }], steps: [
            { reasoning: "$x=\\frac{4\\pm\\sqrt{16+4}}{2}=2\\pm\\sqrt5$.", marks: 1, markCode: "M" },
            { reasoning: "Larger root $2+\\sqrt5\\approx4.236$.", marks: 1, markCode: "M" },
            { reasoning: "To 3 s.f.: $4.24$.", marks: 1, markCode: "A" },
          ], finalAnswer: "4.24" },
        },
        {
          id: "olam-u1-s1-so-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $(x-3)(x+2)=4x-6$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Expand then solve", statement: "Form standard quadratic." }], steps: [
            { reasoning: "Expand: $x^2-x-6=4x-6$ → $x^2-5x=0$.", marks: 1, markCode: "M" },
            { reasoning: "Factorise: $x(x-5)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=0$ or $x=5$.", marks: 1, markCode: "M" },
            { reasoning: "Verify $x=5$: $(2)(7)=14$ and $4(5)-6=14$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=0$ or $x=5$" },
        },
        {
          id: "olam-u1-s1-so-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2-9x+20=0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=4,5$" },
            { id: "b", text: "$x=3,6$" },
            { id: "c", text: "$x=-4,-5$" },
            { id: "d", text: "$x=2,10$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find two numbers." }], steps: [{ reasoning: "$(x-4)(x-5)=0$ → $x=4,5$.", marks: 1, markCode: "A" }], finalAnswer: "$x=4,5$" },
        },
        {
          id: "olam-u1-s1-so-q15", difficulty: "core", totalMarks: 3,
          stem: "Solve $5x^2-4x-1=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Non-monic." }], steps: [
            { reasoning: "$(5x+1)(x-1)=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=-\\frac15$ or $x=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-\\frac15,1$" },
        },
        {
          id: "olam-u1-s1-so-q16", difficulty: "core", totalMarks: 3,
          stem: "Solve $2x^2-8x+6=0$ and give the larger root.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Simplify then solve", statement: "Divide by common factor." }], steps: [
            { reasoning: "Divide by 2: $x^2-4x+3=0$ → $(x-1)(x-3)=0$.", marks: 1, markCode: "M" },
            { reasoning: "Roots $x=1,3$.", marks: 1, markCode: "M" },
            { reasoning: "Larger root is 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
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
            { id: "a", text: "-16" },
            { id: "b", text: "32" },
            { id: "c", text: "16" },
            { id: "d", text: "0" },
          ], correctChoiceId: "d" },
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
        {
          id: "olam-u1-s1-di-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The discriminant of $2x^2+5x+3$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "25" },
            { id: "b", text: "-1" },
            { id: "c", text: "1" },
            { id: "d", text: "19" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "Discriminant", statement: "$b^2-4ac$." }], steps: [{ reasoning: "$25-24=1$.", marks: 1, markCode: "A" }], finalAnswer: "1" },
        },
        {
          id: "olam-u1-s1-di-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the discriminant of $x^2-6x+9$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: { principles: [{ kind: "formula", name: "Discriminant", statement: "$b^2-4ac$." }], steps: [
            { reasoning: "$36-36=0$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.", marks: 1, markCode: "A" },
          ], finalAnswer: "0" },
        },
        {
          id: "olam-u1-s1-di-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Classify the roots of $x^2+2x+5=0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "Classify." }], steps: [
            { reasoning: "$\Delta=4-20=-16<0$.", marks: 1, markCode: "M" },
            { reasoning: "No real roots (complex roots).", marks: 1, markCode: "A" },
          ], finalAnswer: "No real roots" },
        },
        {
          id: "olam-u1-s1-di-q8", difficulty: "core", totalMarks: 3,
          stem: "The discriminant of $x^2+kx+4=0$ is 9. Find $k$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$k=\\pm3$" },
            { id: "b", text: "$k=5$ only" },
            { id: "c", text: "$k=\\pm4$" },
            { id: "d", text: "$k=\\pm5$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant equation", statement: "Set $\Delta$ and solve." }], steps: [
            { reasoning: "$k^2-16=9$ → $k^2=25$.", marks: 1, markCode: "M" },
            { reasoning: "$k=\\pm5$.", marks: 1, markCode: "M" },
            { reasoning: "Both signs satisfy.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k=\\pm5$" },
        },
        {
          id: "olam-u1-s1-di-q9", difficulty: "core", totalMarks: 3,
          stem: "Find the positive value of $k$ for which $x^2+kx+16=0$ has equal roots.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Equal roots", statement: "Set $\Delta=0$." }], steps: [
            { reasoning: "$k^2-64=0$ → $k=\\pm8$.", marks: 1, markCode: "M" },
            { reasoning: "Positive value: $k=8$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $x^2+8x+16=(x+4)^2$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "olam-u1-s1-di-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the range of $m$ for which $x^2+mx+9=0$ has no real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "Require $\Delta<0$." }], steps: [
            { reasoning: "$m^2-36<0$ → $(m-6)(m+6)<0$.", marks: 1, markCode: "M" },
            { reasoning: "$-6<m<6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-6<m<6$" },
        },
        {
          id: "olam-u1-s1-di-q11", difficulty: "core", totalMarks: 2,
          stem: "$2x^2-3x+5=0$ has…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One real and one complex root" },
            { id: "b", text: "A repeated real root" },
            { id: "c", text: "Two distinct real roots" },
            { id: "d", text: "No real roots" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "Compute and classify." }], steps: [
            { reasoning: "$\Delta=9-40=-31<0$ → no real roots.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "No real roots" },
        },
        {
          id: "olam-u1-s1-di-q12", difficulty: "core", totalMarks: 3,
          stem: "The equation $x^2-2kx+9=0$ has a repeated root. Find $k$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Set $\Delta=0$." }], steps: [
            { reasoning: "$4k^2-36=0$ → $k=\\pm3$.", marks: 1, markCode: "M" },
            { reasoning: "If a single positive value required: $k=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u1-s1-di-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the range of values of $k$ for which $x^2+kx+(k+3)=0$ has two distinct real roots.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "Require $\Delta>0$." }], steps: [
            { reasoning: "$\Delta=k^2-4(k+3)=k^2-4k-12$.", marks: 1, markCode: "M" },
            { reasoning: "$k^2-4k-12>0$ → $(k-6)(k+2)>0$.", marks: 1, markCode: "M" },
            { reasoning: "$k<-2$ or $k>6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k<-2$ or $k>6$" },
        },
        {
          id: "olam-u1-s1-di-q14", difficulty: "foundation", totalMarks: 1,
          stem: "If a quadratic has discriminant 0, its roots are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One real root and one complex root" },
            { id: "b", text: "One repeated real root" },
            { id: "c", text: "Two distinct real roots" },
            { id: "d", text: "No real roots" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Discriminant", statement: "Classification." }], steps: [{ reasoning: "$\Delta=0$ → repeated root.", marks: 1, markCode: "A" }], finalAnswer: "Repeated real root" },
        },
        {
          id: "olam-u1-s1-di-q15", difficulty: "core", totalMarks: 3,
          stem: "For what values of $k$ does $x^2-4x+k=0$ have no real roots?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant inequality", statement: "Require $\Delta<0$." }], steps: [
            { reasoning: "$16-4k<0$.", marks: 1, markCode: "M" },
            { reasoning: "$-4k<-16$ → $k>4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $k>4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k>4$" },
        },
        {
          id: "olam-u1-s1-di-q16", difficulty: "challenge", totalMarks: 3,
          stem: "The equation $2x^2+bx+8=0$ has equal roots. Find the positive value of $b$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Equal roots", statement: "Set $\Delta=0$." }], steps: [
            { reasoning: "$b^2-4(2)(8)=b^2-64=0$ → $b=\\pm8$.", marks: 1, markCode: "M" },
            { reasoning: "Positive value: $b=8$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $2x^2+8x+8=2(x+2)^2$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
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
