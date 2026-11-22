import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "olam-u1-lesson-1-2",
  code: "1-2",
  title: "Quadratic Inequalities",
  goal: "I CAN solve quadratic inequalities using sign analysis.",
  standards: ["4037: quadratic inequalities"],
  vocabulary: [
    { term: "Inequality", definition: "Relation like $x^2-4>0$ rather than equality." },
    { term: "Critical values", definition: "Values where expression equals zero — boundaries." },
    { term: "Sign diagram", definition: "Number line showing where expression is positive/negative." },
    { term: "Strict inequality", definition: "$>$ or $<$ — boundary not included." },
  ],
  concepts: [
    {
      id: "olam-u1-s2-solve",
      title: "Solving quadratic inequalities",
      skill: "Solve quadratic inequalities at O Level.",
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
          id: "olam-u1-s2-so-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2>9$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-3<x<3$" },
            { id: "b", text: "$x<-3$ or $x>3$" },
            { id: "c", text: "$x<-3$" },
            { id: "d", text: "$x>3$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Outside roots positive." }], steps: [{ reasoning: "$x^2-9>0$ → $(x-3)(x+3)>0$ → $x<-3$ or $x>3$.", marks: 1, markCode: "A" }], finalAnswer: "$x<-3$ or $x>3$" },
        },
        {
          id: "olam-u1-s2-so-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-2x-3>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Factorise", statement: "Find roots first." }], steps: [
            { reasoning: "$(x-3)(x+1)>0$ → roots $-1,3$.", marks: 1, markCode: "M" },
            { reasoning: "$x<-1$ or $x>3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x<-1$ or $x>3$" },
        },
        {
          id: "olam-u1-s2-so-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-4x+3\\leq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inequality", statement: "Between roots." }], steps: [
            { reasoning: "$(x-1)(x-3)\\leq0$ → $1\\leq x\\leq3$.", marks: 1, markCode: "M" },
            { reasoning: "Include boundaries ($\\leq$).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1\\leq x\\leq3$" },
        },
        {
          id: "olam-u1-s2-so-q4", difficulty: "core", totalMarks: 4,
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
          id: "olam-u1-s2-so-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2-16<0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x<-4$ or $x>4$" },
            { id: "b", text: "$-4<x<4$" },
            { id: "c", text: "$x<-4$" },
            { id: "d", text: "$x>4$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Between roots." }], steps: [{ reasoning: "$(x-4)(x+4)<0$ → $-4<x<4$.", marks: 1, markCode: "A" }], finalAnswer: "$-4<x<4$" },
        },
        {
          id: "olam-u1-s2-so-q6", difficulty: "foundation", totalMarks: 3,
          stem: "Solve $x^2+2x-8<0$, writing the solution as $a<x<b$. Find $b$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Inequality", statement: "Find roots then sign." }], steps: [
            { reasoning: "$(x+4)(x-2)<0$ → roots $-4,2$.", marks: 1, markCode: "M" },
            { reasoning: "Negative between roots: $-4<x<2$.", marks: 1, markCode: "M" },
            { reasoning: "$b=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olam-u1-s2-so-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2+5x+6\\geq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inequality", statement: "Outside roots." }], steps: [
            { reasoning: "$(x+2)(x+3)\\geq0$ → roots $-3,-2$.", marks: 1, markCode: "M" },
            { reasoning: "$x\\leq-3$ or $x\\geq-2$ (boundaries included).", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\leq-3$ or $x\\geq-2$" },
        },
        {
          id: "olam-u1-s2-so-q8", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2+x-12>0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x<-3$ or $x>4$" },
            { id: "b", text: "$x<-4$ or $x>3$" },
            { id: "c", text: "$x>3$" },
            { id: "d", text: "$-4<x<3$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Factorise first." }], steps: [
            { reasoning: "$(x+4)(x-3)>0$ → roots $-4,3$.", marks: 1, markCode: "M" },
            { reasoning: "Positive outside roots.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x<-4$ or $x>3$" },
        },
        {
          id: "olam-u1-s2-so-q9", difficulty: "core", totalMarks: 2,
          stem: "Solve $x^2-9\\geq0$, writing it as $x\\leq a$ or $x\\geq b$. Find $b$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Inequality", statement: "Outside roots." }], steps: [
            { reasoning: "$(x-3)(x+3)\\geq0$ → $x\\leq-3$ or $x\\geq3$.", marks: 1, markCode: "M" },
            { reasoning: "$b=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u1-s2-so-q10", difficulty: "core", totalMarks: 3,
          stem: "Solve $3x^2-5x-2<0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic inequality", statement: "Factorise then sign." }], steps: [
            { reasoning: "$(3x+1)(x-2)<0$ → roots $-\\frac13,2$.", marks: 1, markCode: "M" },
            { reasoning: "Negative between roots: $-\\frac13<x<2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-\\frac13<x<2$" },
        },
        {
          id: "olam-u1-s2-so-q11", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2-2x+1\\leq0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "No solution" },
            { id: "b", text: "All real $x$" },
            { id: "c", text: "$x\\leq1$" },
            { id: "d", text: "$x=1$ only" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Perfect square." }], steps: [
            { reasoning: "$(x-1)^2\\leq0$.", marks: 1, markCode: "M" },
            { reasoning: "Square is $\\geq0$, so only $x=1$ works.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1$" },
        },
        {
          id: "olam-u1-s2-so-q12", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $(x-1)(x-3)>8$. Give the larger boundary value of the solution.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Expand first", statement: "Standard form needed." }], steps: [
            { reasoning: "$x^2-4x+3>8$ → $x^2-4x-5>0$ → $(x-5)(x+1)>0$.", marks: 1, markCode: "M" },
            { reasoning: "$x<-1$ or $x>5$; larger boundary is 5.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olam-u1-s2-so-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $x^2-4x+4>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Perfect square." }], steps: [
            { reasoning: "$(x-2)^2>0$.", marks: 1, markCode: "M" },
            { reasoning: "True for all $x$ except where square equals 0.", marks: 1, markCode: "M" },
            { reasoning: "Exclude $x=2$ (strict inequality).", marks: 1, markCode: "M" },
            { reasoning: "Answer: all real $x$, $x\\neq2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "All real $x$, $x\\neq2$" },
        },
        {
          id: "olam-u1-s2-so-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x^2<4$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x>2$" },
            { id: "b", text: "$-2<x<2$" },
            { id: "c", text: "$x<-2$" },
            { id: "d", text: "$x<-2$ or $x>2$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Sign analysis", statement: "Between roots." }], steps: [{ reasoning: "$(x-2)(x+2)<0$ → $-2<x<2$.", marks: 1, markCode: "A" }], finalAnswer: "$-2<x<2$" },
        },
        {
          id: "olam-u1-s2-so-q15", difficulty: "core", totalMarks: 3,
          stem: "Solve $2x^2+3x-2\\leq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Non-monic inequality", statement: "Factorise then sign." }], steps: [
            { reasoning: "$(2x-1)(x+2)\\leq0$ → roots $-2,\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Between roots, include boundaries: $-2\\leq x\\leq\\frac12$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-2\\leq x\\leq\\frac12$" },
        },
        {
          id: "olam-u1-s2-so-q16", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $x^2+4x+4\\leq0$. Give the single solution value.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Perfect square." }], steps: [
            { reasoning: "$(x+2)^2\\leq0$.", marks: 1, markCode: "M" },
            { reasoning: "Only possible when $(x+2)^2=0$ → $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-2" },
        },
      ],
    },
    {
      id: "olam-u1-s2-special",
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
          id: "olam-u1-s2-sp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "$x^2+1>0$ for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All real $x$" },
            { id: "b", text: "$x>0$" },
            { id: "c", text: "$x\\neq0$" },
            { id: "d", text: "No real $x$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Always positive", statement: "$x^2+1\\geq1$." }], steps: [{ reasoning: "Minimum value is 1, always positive.", marks: 1, markCode: "A" }], finalAnswer: "All real $x$" },
        },
        {
          id: "olam-u1-s2-sp-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-2x+1<0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Perfect square." }], steps: [
            { reasoning: "$(x-1)^2<0$ — impossible since square $\\geq0$.", marks: 1, markCode: "M" },
            { reasoning: "No solution.", marks: 1, markCode: "A" },
          ], finalAnswer: "No solution" },
        },
        {
          id: "olam-u1-s2-sp-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2+4x+4\\geq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Always $\\geq0$." }], steps: [
            { reasoning: "$(x+2)^2\\geq0$ always true.", marks: 1, markCode: "M" },
            { reasoning: "All real $x$ (equality at $x=-2$ included).", marks: 1, markCode: "M" },
            { reasoning: "Answer: all real $x$.", marks: 1, markCode: "A" },
          ], finalAnswer: "All real $x$" },
        },
        {
          id: "olam-u1-s2-sp-q4", difficulty: "core", totalMarks: 4,
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
          id: "olam-u1-s2-sp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "$x^2+9>0$ for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x>0$" },
            { id: "b", text: "$x\\neq3$" },
            { id: "c", text: "No real $x$" },
            { id: "d", text: "All real $x$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Always positive", statement: "$x^2+9\\geq9$." }], steps: [{ reasoning: "Minimum value is 9, always positive.", marks: 1, markCode: "A" }], finalAnswer: "All real $x$" },
        },
        {
          id: "olam-u1-s2-sp-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2+3x+4<0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "No real roots", statement: "Check discriminant." }], steps: [
            { reasoning: "$\\Delta=9-16=-7<0$ and $a=1>0$, so always positive.", marks: 1, markCode: "M" },
            { reasoning: "$x^2+3x+4<0$ has no solution.", marks: 1, markCode: "A" },
          ], finalAnswer: "No solution" },
        },
        {
          id: "olam-u1-s2-sp-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $x^2-6x+9\\leq0$. Give the single solution value of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Perfect square." }], steps: [
            { reasoning: "$(x-3)^2\\leq0$.", marks: 1, markCode: "M" },
            { reasoning: "Only possible when $(x-3)^2=0$ → $x=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u1-s2-sp-q8", difficulty: "core", totalMarks: 1,
          stem: "$-x^2-2x-5>0$ for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x<-1$" },
            { id: "b", text: "All real $x$" },
            { id: "c", text: "No real $x$" },
            { id: "d", text: "$x>-1$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Negative leading", statement: "Always negative." }], steps: [
            { reasoning: "$\\Delta=4-20=-16<0$ and $a=-1<0$, so expression always negative.", marks: 1, markCode: "A" },
          ], finalAnswer: "No real $x$" },
        },
        {
          id: "olam-u1-s2-sp-q9", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2+5x+7\\geq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "No real roots", statement: "Check discriminant." }], steps: [
            { reasoning: "$\\Delta=25-28=-3<0$ and $a=1>0$.", marks: 1, markCode: "M" },
            { reasoning: "Quadratic is always positive.", marks: 1, markCode: "M" },
            { reasoning: "$\\geq0$ true everywhere: all real $x$.", marks: 1, markCode: "A" },
          ], finalAnswer: "All real $x$" },
        },
        {
          id: "olam-u1-s2-sp-q10", difficulty: "core", totalMarks: 3,
          stem: "Solve $x^2+2x+5>0$, and give the value of $x$ at which the quadratic takes its minimum value.",
          response: { type: "numeric", parts: [{ label: "a", answer: -1 }] },
          markscheme: { principles: [{ kind: "technique", name: "No real roots", statement: "Vertex check." }], steps: [
            { reasoning: "$\\Delta=4-20=-16<0$, so $x^2+2x+5>0$ for all real $x$.", marks: 1, markCode: "M" },
            { reasoning: "Vertex at $x=-\\frac{2}{2}=-1$ is the minimum point.", marks: 1, markCode: "M" },
            { reasoning: "Minimum value is at $x=-1$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-1" },
        },
        {
          id: "olam-u1-s2-sp-q11", difficulty: "core", totalMarks: 2,
          stem: "Solve $-x^2+2x-5\\geq0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "No real $x$" },
            { id: "b", text: "All real $x$" },
            { id: "c", text: "$x=1$" },
            { id: "d", text: "$x\\leq1$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Negative leading", statement: "Flip sign or factor." }], steps: [
            { reasoning: "Multiply by $-1$: $x^2-2x+5\\leq0$.", marks: 1, markCode: "M" },
            { reasoning: "$\\Delta=4-20=-16<0$, always positive, so $\\leq0$ has no solution.", marks: 1, markCode: "A" },
          ], finalAnswer: "No solution" },
        },
        {
          id: "olam-u1-s2-sp-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $-2x^2+8x-9>0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Negative leading", statement: "Multiply by -1 flips inequality." }], steps: [
            { reasoning: "$-2x^2+8x-9>0$ → $2x^2-8x+9<0$.", marks: 1, markCode: "M" },
            { reasoning: "$\\Delta=64-72=-8<0$ and $a=2>0$, so $2x^2-8x+9$ always positive.", marks: 1, markCode: "M" },
            { reasoning: "Can never be $<0$.", marks: 1, markCode: "M" },
            { reasoning: "No real solution.", marks: 1, markCode: "A" },
          ], finalAnswer: "No solution" },
        },
        {
          id: "olam-u1-s2-sp-q13", difficulty: "challenge", totalMarks: 3,
          stem: "Solve $x^2-12x+36\\leq0$. Give the single solution value of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Perfect square." }], steps: [
            { reasoning: "$(x-6)^2\\leq0$.", marks: 1, markCode: "M" },
            { reasoning: "Only possible when $(x-6)^2=0$ → $x=6$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "6" },
        },
        {
          id: "olam-u1-s2-sp-q14", difficulty: "challenge", totalMarks: 3,
          stem: "For which values of $k$ does $x^2+kx+9>0$ have all real numbers as its solution?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-6<k<6$" },
            { id: "b", text: "All real $k$" },
            { id: "c", text: "$k>6$" },
            { id: "d", text: "$k<-6$ or $k>6$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Discriminant condition", statement: "Need $\\Delta<0$ for all-real-x solution." }], steps: [
            { reasoning: "Need $\\Delta=k^2-36<0$.", marks: 1, markCode: "M" },
            { reasoning: "$k^2<36$ → $-6<k<6$.", marks: 1, markCode: "M" },
            { reasoning: "Since $a=1>0$, $\\Delta<0$ means always positive.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-6<k<6$" },
        },
        {
          id: "olam-u1-s2-sp-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Solve $x^2-4x+5<0$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "No real $x$" },
            { id: "b", text: "$x>2$" },
            { id: "c", text: "All real $x$" },
            { id: "d", text: "$x<2$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "No real roots", statement: "Complete the square." }], steps: [
            { reasoning: "$x^2-4x+5=(x-2)^2+1\\geq1$, always positive.", marks: 1, markCode: "M" },
            { reasoning: "Can never be $<0$: no solution.", marks: 1, markCode: "A" },
          ], finalAnswer: "No solution" },
        },
        {
          id: "olam-u1-s2-sp-q16", difficulty: "core", totalMarks: 3,
          stem: "Solve $3x^2+12x+12\\leq0$. Give the single solution value of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Repeated root", statement: "Factor out constant." }], steps: [
            { reasoning: "$3x^2+12x+12=3(x+2)^2\\leq0$.", marks: 1, markCode: "M" },
            { reasoning: "Only possible when $(x+2)^2=0$ → $x=-2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-2" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u1-s2-ineq-notes", title: "Quadratic inequalities — notes", summary: "Sign analysis and special cases.",
      sections: [
        { heading: "Method", body: "Find roots, determine sign regions. Strict inequalities exclude boundaries." },
        { heading: "Special", body: "No real roots: always one sign. Repeated root: touches axis." },
      ] },
  ],
};
