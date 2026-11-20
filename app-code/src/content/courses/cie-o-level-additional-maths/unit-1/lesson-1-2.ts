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
            { id: "a", text: "$x<-3$ or $x>3$" }, { id: "b", text: "$-3<x<3$" }, { id: "c", text: "$x>3$" }, { id: "d", text: "$x<-3$" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "All real $x$" }, { id: "b", text: "No real $x$" }, { id: "c", text: "$x>0$" }, { id: "d", text: "$x\\neq0$" },
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
