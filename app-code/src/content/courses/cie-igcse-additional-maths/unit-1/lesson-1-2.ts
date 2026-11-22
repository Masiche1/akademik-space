import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ciam-u1-lesson-1-2",
  code: "1-2",
  title: "Quadratic Inequalities",
  goal: "I CAN solve quadratic inequalities using sign analysis.",
  standards: ["0606: quadratic inequalities"],
  vocabulary: [
    { term: "Inequality", definition: "Relation like $x^2-4>0$ rather than equality." },
    { term: "Critical values", definition: "Values where expression equals zero — boundaries." },
    { term: "Sign diagram", definition: "Number line showing where expression is positive/negative." },
    { term: "Strict inequality", definition: "$>$ or $<$ — boundary not included." },
  ],
  concepts: [
    {
      id: "ciam-u1-s2-solve",
      title: "Solving quadratic inequalities",
      skill: "Solve quadratic inequalities at IGCSE level.",
      lesson: {
        sections: [
          { heading: "Method", body: "A quadratic inequality like $x^2-4>0$ is solved exactly like an equation until the roots are found — then you must decide which regions satisfy the inequality. The standard approach is: find the critical values (where the expression equals zero), these split the number line into regions, then test a value from each region to see whether the expression is positive or negative there. Equivalently, sketch the parabola: the inequality asks where the curve is above or below the x-axis." },
          { heading: "Boundary rules", body: "Strict inequalities ($>$ and $<$) exclude the boundary values, so you write open intervals or strict inequalities in the answer. Non-strict inequalities ($\\geq$, $\\leq$) include the roots. Always finish by testing one value inside your claimed region — a quick substitution catches sign errors, which are the most common mistake in this topic." },
        ],
        keyFormulas: [
          { name: "Sign regions", statement: "Between roots: sign depends on $a$; outside roots: opposite sign" },
        ],
        workedExample: { problem: "Solve $x^2-4>0$.", solution: "Factorise: $(x-2)(x+2)>0$, critical values $x=\\pm2$. For large positive $x$ the expression is positive, so positive outside the roots and negative between them. Answer: $x<-2$ or $x>2$. Check $x=3$: $9-4=5>0$ ✓; check $x=0$: $-4<0$ so 0 is correctly excluded." },
      },
      questions: [
        {
          id: "ciam-u1-s2-so-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2>9$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-3<x<3$" },
            { id: "b", text: "$x>3$" },
            { id: "c", text: "$x<-3$ or $x>3$" },
            { id: "d", text: "$x<-3$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Outside roots positive." }], steps: [{ reasoning: "$x^2-9>0$ → $(x-3)(x+3)>0$ → $x<-3$ or $x>3$.", marks: 1, markCode: "A" }], finalAnswer: "$x<-3$ or $x>3$" },
        },
        {
          id: "ciam-u1-s2-so-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-2x-3>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find roots first." }], steps: [
            { reasoning: "$(x-3)(x+1)>0$ → roots $-1,3$.", marks: 1, markCode: "M" },
            { reasoning: "$x<-1$ or $x>3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x<-1$ or $x>3$" },
        },
        {
          id: "ciam-u1-s2-so-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-4x+3\\leq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inequality", statement: "Between roots." }], steps: [
            { reasoning: "$(x-1)(x-3)\\leq0$ → $1\\leq x\\leq3$.", marks: 1, markCode: "M" },
            { reasoning: "Include boundaries ($\\leq$).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1\\leq x\\leq3$" },
        },
        {
          id: "ciam-u1-s2-so-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $2x^2-x-3>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic inequality", statement: "Factorise then sign." }], steps: [
            { reasoning: "$(2x-3)(x+1)>0$ → roots $-1, \\frac32$.", marks: 1, markCode: "M" },
            { reasoning: "$x<-1$ or $x>\\frac32$.", marks: 1, markCode: "M" },
            { reasoning: "Check with test value $x=0$: $-3<0$ so middle region negative. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x<-1$ or $x>\\frac32$" },
        },
        {
          id: "ciam-u1-s2-so-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2-9<0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-3<x<3$" },
            { id: "b", text: "$-9<x<9$" },
            { id: "c", text: "$x<-3$ or $x>3$" },
            { id: "d", text: "$x<3$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Between roots." }], steps: [{ reasoning: "$x^2<9$ → between $-3$ and $3$.", marks: 1, markCode: "A" }], finalAnswer: "$-3<x<3$" },
        },
        {
          id: "ciam-u1-s2-so-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-5x+6>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Outside roots." }], steps: [
            { reasoning: "$(x-2)(x-3)>0$ → roots $2,3$; positive outside.", marks: 1, markCode: "M" },
            { reasoning: "$x<2$ or $x>3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x<2$ or $x>3$" },
        },
        {
          id: "ciam-u1-s2-so-q7", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2+x-6\\leq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Between roots, include." }], steps: [
            { reasoning: "$(x+3)(x-2)\\leq0$ → roots $-3,2$.", marks: 1, markCode: "M" },
            { reasoning: "Non-strict: $-3\\leq x\\leq2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-3\\leq x\\leq2$" },
        },
        {
          id: "ciam-u1-s2-so-q8", difficulty: "core", totalMarks: 2,
          response: { type: "numeric", unordered: true, parts: [
            { label: "a", answer: -2 }, { label: "b", answer: 2 },
          ] },
          stem: "Solve $x^2-4>0$. The solution is $x<a$ or $x>b$ with $a<b$; find $a$ and $b$.",
          markscheme: { principles: [{ kind: "technique", name: "Critical values", statement: "Find boundaries." }], steps: [
            { reasoning: "$x^2=4$ → $x=\\pm2$; $a=-2$, $b=2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a=-2$, $b=2$" },
        },
        {
          id: "ciam-u1-s2-so-q9", difficulty: "core", totalMarks: 1,
          stem: "Solve $2x^2-5x-3<0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x<-3$ or $x>\\frac12$" },
            { id: "b", text: "$x<-\\frac12$ or $x>3$" },
            { id: "c", text: "$-3<x<\\frac12$" },
            { id: "d", text: "$-\\frac12<x<3$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Between roots." }], steps: [{ reasoning: "$(2x+1)(x-3)<0$ → $-\\frac12<x<3$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac12<x<3$" },
        },
        {
          id: "ciam-u1-s2-so-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $x^2-4x+4\\leq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perfect square", statement: "$(x-2)^2\\leq0$ only at zero." }], steps: [
            { reasoning: "$(x-2)^2\\leq0$.", marks: 1, markCode: "M" },
            { reasoning: "A square is $\\geq0$ always, so need $(x-2)^2=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=2$ only (boundary included by $\\leq$).", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
        {
          id: "ciam-u1-s2-so-q11", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2+1<0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x<1$" },
            { id: "b", text: "$x\\neq1$" },
            { id: "c", text: "All real $x$" },
            { id: "d", text: "No solution" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Always positive", statement: "$x^2+1\\geq1$." }], steps: [{ reasoning: "Never negative → no solution.", marks: 1, markCode: "A" }], finalAnswer: "No solution" },
        },
        {
          id: "ciam-u1-s2-so-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $(x+1)^2<4$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Modulus form", statement: "Square root or expand." }], steps: [
            { reasoning: "$|x+1|<2$ → $-2<x+1<2$.", marks: 1, markCode: "M" },
            { reasoning: "$-3<x<1$.", marks: 1, markCode: "M" },
            { reasoning: "Check $x=0$: $1<4$ ✓; $x=-4$: $9\\not<4$ correctly excluded.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-3<x<1$" },
        },
        {
          id: "ciam-u1-s2-so-q13", difficulty: "core", totalMarks: 3,
          stem: "Solve $9-x^2>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Rearrange", statement: "Standard form." }], steps: [
            { reasoning: "$x^2<9$ → $(x-3)(x+3)<0$.", marks: 1, markCode: "M" },
            { reasoning: "Between roots: $-3<x<3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-3<x<3$" },
        },
        {
          id: "ciam-u1-s2-so-q14", difficulty: "core", totalMarks: 1,
          stem: "Solve $x^2-3x-10>0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-2<x<5$" },
            { id: "b", text: "$x>5$" },
            { id: "c", text: "$x<-2$ or $x>5$" },
            { id: "d", text: "$x<5$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Outside roots." }], steps: [{ reasoning: "$(x-5)(x+2)>0$ → $x<-2$ or $x>5$.", marks: 1, markCode: "A" }], finalAnswer: "$x<-2$ or $x>5$" },
        },
        {
          id: "ciam-u1-s2-so-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $x^2+4x+4>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Perfect square", statement: "$(x+2)^2>0$ fails only at zero." }], steps: [
            { reasoning: "$(x+2)^2>0$.", marks: 1, markCode: "M" },
            { reasoning: "Square is positive everywhere except where it equals 0, i.e. $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "So all real $x$ except $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x\\neq-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\neq-2$" },
        },
        {
          id: "ciam-u1-s2-so-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $3x^2-5x-2>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic inequality", statement: "Factorise then sign." }], steps: [
            { reasoning: "$(3x+1)(x-2)>0$ → roots $-\\frac13,2$.", marks: 1, markCode: "M" },
            { reasoning: "$x<-\\frac13$ or $x>2$.", marks: 1, markCode: "M" },
            { reasoning: "Check $x=0$: $-2<0$ so middle region negative. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x<-\\frac13$ or $x>2$" },
        },
      ],
    },
    {
      id: "ciam-u1-s2-special",
      title: "Special cases",
      skill: "Solve inequalities with no real roots or repeated roots.",
      lesson: {
        sections: [
          { heading: "No real roots", body: "When $\\Delta<0$ the quadratic never crosses the x-axis, so it keeps one sign everywhere. If $a>0$ the parabola opens upward and stays above the axis — the expression is always positive, so $f(x)>0$ is true for all real $x$ and $f(x)<0$ has no solution. If $a<0$ the signs flip. Always check the sign of $a$ before concluding; forgetting to flip for negative leading coefficients is a classic error." },
          { heading: "Repeated root", body: "When $\\Delta=0$ the parabola touches the axis at exactly one point — the vertex lies on the x-axis. For $\\geq$ or $\\leq$ this single point is included in the solution; for strict $>$ or $<$ it is excluded but the surrounding region still satisfies the inequality. A perfect square like $(x-1)^2$ is always $\\geq0$ and equals zero only at $x=1$." },
        ],
        keyFormulas: [
          { name: "Always positive", statement: "$\\Delta<0$ and $a>0$ → $f(x)>0$ for all $x$" },
        ],
        workedExample: { problem: "Solve $x^2+2x+5>0$.", solution: "$\\Delta=4-20=-16<0$ and $a=1>0$, so the quadratic is always positive. Answer: all real $x$. For contrast, $x^2+2x+5<0$ would have no solution." },
      },
      questions: [
        {
          id: "ciam-u1-s2-sp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$x^2+1>0$ for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No real $x$" },
            { id: "b", text: "$x\\neq0$" },
            { id: "c", text: "All real $x$" },
            { id: "d", text: "$x>0$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Always positive", statement: "$x^2+1\\geq1$." }], steps: [{ reasoning: "Minimum value is 1, always positive.", marks: 1, markCode: "A" }], finalAnswer: "All real $x$" },
        },
        {
          id: "ciam-u1-s2-sp-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-2x+1<0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Perfect square." }], steps: [
            { reasoning: "$(x-1)^2<0$ — impossible since square $\\geq0$.", marks: 1, markCode: "M" },
            { reasoning: "No solution.", marks: 1, markCode: "A" },
          ], finalAnswer: "No solution" },
        },
        {
          id: "ciam-u1-s2-sp-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2+4x+4\\geq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Always $\\geq0$." }], steps: [
            { reasoning: "$(x+2)^2\\geq0$ always true.", marks: 1, markCode: "M" },
            { reasoning: "All real $x$ (equality at $x=-2$ included).", marks: 1, markCode: "M" },
            { reasoning: "Answer: all real $x$.", marks: 1, markCode: "A" },
          ], finalAnswer: "All real $x$" },
        },
        {
          id: "ciam-u1-s2-sp-q4", difficulty: "core", totalMarks: 4,
          stem: "Solve $-x^2+4x-4>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Negative leading", statement: "Flip sign or factor." }], steps: [
            { reasoning: "$-(x^2-4x+4)>0$ → $-(x-2)^2>0$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-2)^2<0$ — impossible.", marks: 1, markCode: "M" },
            { reasoning: "No solution.", marks: 1, markCode: "M" },
            { reasoning: "Answer: no real solution.", marks: 1, markCode: "A" },
          ], finalAnswer: "No solution" },
        },
        {
          id: "ciam-u1-s2-sp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $2x^2+5x+10>0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\neq0$" },
            { id: "b", text: "All real $x$" },
            { id: "c", text: "No real $x$" },
            { id: "d", text: "$x>0$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Always positive", statement: "$\\Delta<0$ and $a>0$." }], steps: [{ reasoning: "$\\Delta=25-80=-55<0$ and $a=2>0$, so the expression is always positive.", marks: 1, markCode: "A" }], finalAnswer: "All real $x$" },
        },
        {
          id: "ciam-u1-s2-sp-q6", difficulty: "foundation", totalMarks: 2,
          stem: "The equation $x^2-6x+9=0$ has a repeated root. Find the value of $x$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 3 },
          ] },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Perfect square gives one value." }], steps: [
            { reasoning: "$(x-3)^2=0$.", marks: 1, markCode: "M" },
            { reasoning: "$x=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=3$" },
        },
        {
          id: "ciam-u1-s2-sp-q7", difficulty: "core", totalMarks: 2,
          stem: "Solve $x^2+8x+16<0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Strict inequality excludes zero." }], steps: [
            { reasoning: "$(x+4)^2<0$ — impossible since a square is $\\geq0$.", marks: 1, markCode: "M" },
            { reasoning: "No solution.", marks: 1, markCode: "A" },
          ], finalAnswer: "No solution" },
        },
        {
          id: "ciam-u1-s2-sp-q8", difficulty: "core", totalMarks: 1,
          stem: "Solve $-x^2-2x-5>0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "All real $x$" },
            { id: "b", text: "No real $x$" },
            { id: "c", text: "$x<-1$ or $x>-1$" },
            { id: "d", text: "$x=-1$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Negative leading", statement: "Check the sign after multiplying by $-1$." }], steps: [{ reasoning: "$x^2+2x+5$ has $\\Delta=-16<0$ and is always positive, so its negative is always negative and cannot be $>0$.", marks: 1, markCode: "A" }], finalAnswer: "No solution" },
        },
        {
          id: "ciam-u1-s2-sp-q9", difficulty: "core", totalMarks: 2,
          stem: "The equation $x^2-10x+k=0$ has a repeated root. Find $k$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 25 },
          ] },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant", statement: "Repeated root means $\\Delta=0$." }], steps: [
            { reasoning: "$\\Delta=(-10)^2-4(1)k=100-4k=0$.", marks: 1, markCode: "M" },
            { reasoning: "$k=25$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k=25$" },
        },
        {
          id: "ciam-u1-s2-sp-q10", difficulty: "core", totalMarks: 1,
          stem: "Solve $x^2+4x+5\\leq0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\leq-2$" },
            { id: "b", text: "No real $x$" },
            { id: "c", text: "$x=-2$" },
            { id: "d", text: "All real $x$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Always positive", statement: "$\\Delta<0$ and $a>0$." }], steps: [{ reasoning: "$\\Delta=16-20=-4<0$, so the expression is always positive and never $\\leq0$.", marks: 1, markCode: "A" }], finalAnswer: "No solution" },
        },
        {
          id: "ciam-u1-s2-sp-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $-3x^2+12x-12\\geq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Negative leading", statement: "Factor out the negative coefficient." }], steps: [
            { reasoning: "$-3x^2+12x-12=-3(x^2-4x+4)=-3(x-2)^2$.", marks: 1, markCode: "M" },
            { reasoning: "$-3(x-2)^2\\geq0$ → $(x-2)^2\\leq0$ after dividing by $-3$.", marks: 1, markCode: "M" },
            { reasoning: "A square is $\\geq0$, so it can only be $\\leq0$ when it equals zero.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=2$" },
        },
        {
          id: "ciam-u1-s2-sp-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Find the number of integer values of $k$ for which $x^2+kx+25<0$ has no solution.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 21 },
          ] },
          markscheme: { principles: [{ kind: "property", name: "No negative region", statement: "Upward quadratic has no solution to $<0$ when $\\Delta\\leq0$." }], steps: [
            { reasoning: "Require $k^2-4(1)(25)\\leq0$ → $k^2-100\\leq0$.", marks: 1, markCode: "M" },
            { reasoning: "$-10\\leq k\\leq10$.", marks: 1, markCode: "M" },
            { reasoning: "The integers are $-10,-9,\\ldots,9,10$.", marks: 1, markCode: "M" },
            { reasoning: "There are $21$ integers.", marks: 1, markCode: "A" },
          ], finalAnswer: "$21$" },
        },
        {
          id: "ciam-u1-s2-sp-q13", difficulty: "core", totalMarks: 1,
          stem: "Solve $-x^2-4x-5<0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "No real $x$" },
            { id: "b", text: "$x=-2$" },
            { id: "c", text: "All real $x$" },
            { id: "d", text: "$x<-2$ or $x>-2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Negative leading", statement: "Multiply by $-1$ and flip the inequality." }], steps: [{ reasoning: "$x^2+4x+5$ has $\\Delta=-4<0$ and is always positive, so $-(x^2+4x+5)<0$ for all real $x$.", marks: 1, markCode: "A" }], finalAnswer: "All real $x$" },
        },
        {
          id: "ciam-u1-s2-sp-q14", difficulty: "challenge", totalMarks: 3,
          stem: "Find the largest positive integer value of $k$ for which $x^2+kx+16>0$ is true for all real $x$.",
          response: { type: "numeric", parts: [
            { label: "a", answer: 7 },
          ] },
          markscheme: { principles: [{ kind: "property", name: "Strict positivity", statement: "Need $\\Delta<0$ when $a>0$." }], steps: [
            { reasoning: "Require $k^2-64<0$ → $-8<k<8$.", marks: 1, markCode: "M" },
            { reasoning: "Positive integers satisfying this are $1,2,\\ldots,7$.", marks: 1, markCode: "M" },
            { reasoning: "Largest value is $7$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$k=7$" },
        },
        {
          id: "ciam-u1-s2-sp-q15", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2-6x+9\\geq0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\neq3$" },
            { id: "b", text: "No real $x$" },
            { id: "c", text: "$x=3$ only" },
            { id: "d", text: "All real $x$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "$(x-3)^2\\geq0$ always." }], steps: [{ reasoning: "$(x-3)^2\\geq0$ for every real $x$.", marks: 1, markCode: "A" }], finalAnswer: "All real $x$" },
        },
        {
          id: "ciam-u1-s2-sp-q16", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $-x^2+6x-9<0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Negative leading", statement: "Flip sign when dividing by $-1$." }], steps: [
            { reasoning: "$-(x^2-6x+9)<0$ → $-(x-3)^2<0$.", marks: 1, markCode: "M" },
            { reasoning: "$(x-3)^2>0$, true for every real $x$ except $x=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x\\neq3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\neq3$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u1-s2-ineq-notes", title: "Quadratic inequalities — notes", summary: "Sign analysis and special cases.",
      sections: [
        { heading: "Method", body: "Find roots, determine sign regions. Strict inequalities exclude boundaries." },
        { heading: "Special", body: "No real roots: always one sign. Repeated root: touches axis." },
      ] },
  ],
};
