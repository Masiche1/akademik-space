import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "olam-u2-lesson-2-3",
  code: "2-3",
  title: "Inverse Functions",
  goal: "I CAN find and use inverse functions.",
  standards: ["4037: inverse functions"],
  vocabulary: [
    { term: "Inverse function", definition: "$f^{-1}$ undoes $f$: $f^{-1}(f(x))=x$." },
    { term: "One-to-one", definition: "Function where each output comes from exactly one input — required for inverse." },
    { term: "Reflection", definition: "Graph of $f^{-1}$ is reflection of $f$ in $y=x$." },
    { term: "Swap x and y", definition: "Method to find inverse: interchange variables and solve." },
  ],
  concepts: [
    {
      id: "olam-u2-s3-find",
      title: "Finding inverse functions",
      skill: "Find $f^{-1}(x)$ at O Level.",
      lesson: {
        sections: [
          { heading: "The swap-and-solve method", body: "To find $f^{-1}$, write $y=f(x)$, then interchange $x$ and $y$ to get $x=f(y)$, and solve for $y$ — that expression is $f^{-1}(x)$. The key insight: if $f$ sends $a$ to $b$, then $f^{-1}$ sends $b$ back to $a$, so the inverse 'undoes' the function. Only one-to-one functions have inverses — if two different inputs give the same output, the inverse would be ambiguous, so a domain restriction (like $x\\geq0$ for $x^2$) is needed first." },
          { heading: "Domain and range swap", body: "The domain of $f^{-1}$ is exactly the range of $f$, and vice versa. So when you find an inverse, state its domain carefully — it comes from the range of the original function. For $f(x)=\\sqrt{x-1}$ with range $[0,\\infty)$, the inverse $f^{-1}(x)=x^2+1$ only exists for $x\\geq0$; forgetting this restriction is a common mark-loser." },
        ],
        keyFormulas: [
          { name: "Inverse method", statement: "Swap $x,y$ and solve for $y$" },
          { name: "Domain swap", statement: "Domain of $f^{-1}$ = range of $f$" },
        ],
        workedExample: { problem: "Find $f^{-1}$ for $f(x)=\\frac{x+1}{3}$.", solution: "Write $y=\\frac{x+1}{3}$, swap: $x=\\frac{y+1}{3}$. Solve: $3x=y+1$ → $y=3x-1$. So $f^{-1}(x)=3x-1$, valid for all real $x$. Check: $f(f^{-1}(x))=f(3x-1)=\\frac{(3x-1)+1}{3}=x$ ✓." },
      },
      questions: [
        {
          id: "olam-u2-s3-fi-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The inverse of $f(x)=x+5$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$f^{-1}(x)=x-5$" }, { id: "b", text: "$f^{-1}(x)=5-x$" }, { id: "c", text: "$f^{-1}(x)=x+5$" }, { id: "d", text: "No inverse" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Undo operation." }], steps: [{ reasoning: "Subtract 5 to undo add 5.", marks: 1, markCode: "A" }], finalAnswer: "$f^{-1}(x)=x-5$" },
        },
        {
          id: "olam-u2-s3-fi-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find $f^{-1}(x)$ for $f(x)=3x-2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=3y-2$ → $y=\\frac{x+2}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=\\frac{x+2}{3}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=\\frac{x+2}{3}$" },
        },
        {
          id: "olam-u2-s3-fi-q3", difficulty: "core", totalMarks: 3,
          stem: "Find $f^{-1}(x)$ for $f(x)=\\frac{2x-1}{3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse fraction", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=\\frac{2y-1}{3}$ → $3x=2y-1$ → $y=\\frac{3x+1}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=\\frac{3x+1}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $f(f^{-1}(x))=x$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=\\frac{3x+1}{2}$" },
        },
        {
          id: "olam-u2-s3-fi-q4", difficulty: "core", totalMarks: 4,
          stem: "Find $f^{-1}(x)$ for $f(x)=x^2-4$, $x\\geq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse with restriction", statement: "Restrict domain for one-to-one." }], steps: [
            { reasoning: "$x=y^2-4$ → $y^2=x+4$ → $y=\\pm\\sqrt{x+4}$.", marks: 1, markCode: "M" },
            { reasoning: "Since original $x\\geq0$ → outputs $\\geq-4$, take positive root.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=\\sqrt{x+4}$, domain $x\\geq-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=\\sqrt{x+4}$, $x\\geq-4$" },
        },
      ],
    },
    {
      id: "olam-u2-s3-properties",
      title: "Inverse properties and graphs",
      skill: "Use inverse properties and sketch inverse graphs.",
      lesson: {
        sections: [
          { heading: "Two fundamental properties", body: "The inverse function satisfies $f^{-1}(f(x))=x$ and $f(f^{-1}(x))=x$ — applying a function then its inverse returns the original input. This gives two powerful shortcuts: if you know $f(3)=7$, then $f^{-1}(7)=3$ without any algebra; and you can verify a candidate inverse by checking the composition equals $x$. These properties are tested constantly in exams, both as quick evaluations and as proof-style questions." },
          { heading: "Graphical meaning", body: "The graph of $y=f^{-1}(x)$ is the reflection of $y=f(x)$ in the line $y=x$. This is because swapping $x$ and $y$ — the algebraic step in finding an inverse — is exactly what reflecting in $y=x$ does geometrically. Points on the original curve map to swapped-coordinate points on the inverse. Asymptotes, intercepts and domain restrictions all mirror across the line." },
        ],
        keyFormulas: [
          { name: "Inverse property", statement: "$f^{-1}(f(x))=x$ and $f(f^{-1}(x))=x$" },
          { name: "Graph", statement: "Reflection in $y=x$" },
        ],
        workedExample: { problem: "If $f(3)=7$, find $f^{-1}(7)$.", solution: "$f^{-1}$ undoes $f$: since $f$ maps 3 to 7, $f^{-1}$ maps 7 back to 3. So $f^{-1}(7)=3$. No algebra needed — this is the inverse property in action." },
      },
      questions: [
        {
          id: "olam-u2-s3-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(5)=11$, then $f^{-1}(11)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" }, { id: "b", text: "11" }, { id: "c", text: "-5" }, { id: "d", text: "0" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Inverse", statement: "Undo mapping." }], steps: [{ reasoning: "$f^{-1}$ undoes $f$: $f^{-1}(11)=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "olam-u2-s3-pr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "The graph of $f^{-1}$ is the reflection of $f$ in…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Inverse graph", statement: "Reflection line." }], steps: [
            { reasoning: "Reflection in $y=x$.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=x$" },
        },
        {
          id: "olam-u2-s3-pr-q3", difficulty: "core", totalMarks: 3,
          stem: "Given $f(x)=2x+4$, find $f^{-1}(10)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Solve or use formula." }], steps: [
            { reasoning: "$f^{-1}(x)=\\frac{x-4}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(10)=\\frac{10-4}{2}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olam-u2-s3-pr-q4", difficulty: "core", totalMarks: 4,
          stem: "If $f(x)=\\frac{x-1}{x+2}$, find $f^{-1}(x)$ and state its domain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fractional inverse", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=\\frac{y-1}{y+2}$ → $x(y+2)=y-1$ → $xy+2x=y-1$ → $xy-y=-1-2x$ → $y(x-1)=-1-2x$.", marks: 1, markCode: "M" },
            { reasoning: "$y=\\frac{-1-2x}{x-1}=\\frac{2x+1}{1-x}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=\\frac{2x+1}{1-x}$, domain $x\\neq1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=\\frac{2x+1}{1-x}$, $x\\neq1$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u2-s3-inv-notes", title: "Inverse functions — notes", summary: "Finding, properties, graphs.",
      sections: [
        { heading: "Finding", body: "Swap $x,y$, solve for $y$. Restrict domain for non-one-to-one functions." },
        { heading: "Properties", body: "$f^{-1}(f(x))=x$. Graph = reflection in $y=x$. Domain/range swap." },
      ] },
  ],
};
