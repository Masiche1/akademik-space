import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ciam-u2-lesson-2-3",
  code: "2-3",
  title: "Inverse Functions",
  goal: "I CAN find and use inverse functions.",
  standards: ["0606: inverse functions"],
  vocabulary: [
    { term: "Inverse function", definition: "$f^{-1}$ undoes $f$: $f^{-1}(f(x))=x$." },
    { term: "One-to-one", definition: "Function where each output comes from exactly one input — required for inverse." },
    { term: "Reflection", definition: "Graph of $f^{-1}$ is reflection of $f$ in $y=x$." },
    { term: "Swap x and y", definition: "Method to find inverse: interchange variables and solve." },
  ],
  concepts: [
    {
      id: "ciam-u2-s3-find",
      title: "Finding inverse functions",
      skill: "Find $f^{-1}(x)$ at IGCSE level.",
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
          id: "ciam-u2-s3-fi-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The inverse of $f(x)=x+5$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$f^{-1}(x)=5-x$" },
            { id: "b", text: "$f^{-1}(x)=x+5$" },
            { id: "c", text: "$f^{-1}(x)=x-5$" },
            { id: "d", text: "No inverse" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Undo operation." }], steps: [{ reasoning: "Subtract 5 to undo add 5.", marks: 1, markCode: "A" }], finalAnswer: "$f^{-1}(x)=x-5$" },
        },
        {
          id: "ciam-u2-s3-fi-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find $f^{-1}(x)$ for $f(x)=3x-2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=3y-2$ → $y=\\frac{x+2}{3}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=\\frac{x+2}{3}$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=\\frac{x+2}{3}$" },
        },
        {
          id: "ciam-u2-s3-fi-q3", difficulty: "core", totalMarks: 3,
          stem: "Find $f^{-1}(x)$ for $f(x)=\\frac{2x-1}{3}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse fraction", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=\\frac{2y-1}{3}$ → $3x=2y-1$ → $y=\\frac{3x+1}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=\\frac{3x+1}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $f(f^{-1}(x))=x$. ✓", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=\\frac{3x+1}{2}$" },
        },
        {
          id: "ciam-u2-s3-fi-q4", difficulty: "core", totalMarks: 4,
          stem: "Find $f^{-1}(x)$ for $f(x)=x^2-4$, $x\\geq0$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse with restriction", statement: "Restrict domain for one-to-one." }], steps: [
            { reasoning: "$x=y^2-4$ → $y^2=x+4$ → $y=\\pm\\sqrt{x+4}$.", marks: 1, markCode: "M" },
            { reasoning: "Since original $x\\geq0$ → outputs $\\geq-4$, take positive root.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=\\sqrt{x+4}$, domain $x\\geq-4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=\\sqrt{x+4}$, $x\\geq-4$" },
        },
        {
          id: "ciam-u2-s3-fi-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The inverse of $f(x)=2x+6$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$f^{-1}(x)=\\frac{x+6}{2}$" },
            { id: "b", text: "$f^{-1}(x)=\\frac{x-6}{2}$" },
            { id: "c", text: "$f^{-1}(x)=2x-6$" },
            { id: "d", text: "No inverse" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Swap and solve." }], steps: [{ reasoning: "$x=2y+6$ → $y=\\frac{x-6}{2}$.", marks: 1, markCode: "A" }], finalAnswer: "$f^{-1}(x)=\\frac{x-6}{2}$" },
        },
        {
          id: "ciam-u2-s3-fi-q6", difficulty: "foundation", totalMarks: 2,
          stem: "For $f(x)=4x-3$, find $f^{-1}(5)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Solve or use formula." }], steps: [
            { reasoning: "$f^{-1}(x)=\\frac{x+3}{4}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(5)=\\frac{8}{4}=2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u2-s3-fi-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find $f^{-1}(x)$ for $f(x)=\\frac{x+2}{5}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=\\frac{y+2}{5}$ → $5x=y+2$ → $y=5x-2$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=5x-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=5x-2$" },
        },
        {
          id: "ciam-u2-s3-fi-q8", difficulty: "core", totalMarks: 1,
          stem: "The inverse of $f(x)=3-x$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$f^{-1}(x)=x-3$" },
            { id: "b", text: "$f^{-1}(x)=\\frac{1}{3-x}$" },
            { id: "c", text: "No inverse" },
            { id: "d", text: "$f^{-1}(x)=3-x$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Swap and solve." }], steps: [{ reasoning: "$x=3-y$ → $y=3-x$.", marks: 1, markCode: "A" }], finalAnswer: "$f^{-1}(x)=3-x$" },
        },
        {
          id: "ciam-u2-s3-fi-q9", difficulty: "core", totalMarks: 2,
          stem: "For $f(x)=2x+1$, find $f^{-1}(7)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Solve or use formula." }], steps: [
            { reasoning: "$f^{-1}(x)=\\frac{x-1}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(7)=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s3-fi-q10", difficulty: "core", totalMarks: 3,
          stem: "Find $f^{-1}(x)$ for $f(x)=\\frac{x-4}{2}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=\\frac{y-4}{2}$ → $2x=y-4$ → $y=2x+4$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=2x+4$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $f(f^{-1}(x))=x$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=2x+4$" },
        },
        {
          id: "ciam-u2-s3-fi-q11", difficulty: "challenge", totalMarks: 1,
          stem: "For $f(x)=x^2$ with domain $x\\geq0$, the inverse is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$f^{-1}(x)=x^2$, $x\\geq0$" },
            { id: "b", text: "$f^{-1}(x)=\\pm\\sqrt{x}$" },
            { id: "c", text: "$f^{-1}(x)=\\sqrt{x}$, $x\\geq0$" },
            { id: "d", text: "No inverse" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse with restriction", statement: "Take positive root." }], steps: [{ reasoning: "$x=y^2$ → $y=\\sqrt{x}$ for $x\\geq0$.", marks: 1, markCode: "A" }], finalAnswer: "$f^{-1}(x)=\\sqrt{x}$, $x\\geq0$" },
        },
        {
          id: "ciam-u2-s3-fi-q12", difficulty: "challenge", totalMarks: 2,
          stem: "For $f(x)=x^2+1$ with domain $x\\geq0$, find $f^{-1}(10)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Solve or use formula." }], steps: [
            { reasoning: "$f^{-1}(x)=\\sqrt{x-1}$, $x\\geq1$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(10)=\\sqrt9=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s3-fi-q13", difficulty: "core", totalMarks: 4,
          stem: "Find $f^{-1}(x)$ for $f(x)=\\frac{1}{x-2}$ and state its domain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fractional inverse", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=\\frac{1}{y-2}$ → $y-2=\\frac1x$ → $y=2+\\frac1x$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=2+\\frac1x$.", marks: 1, markCode: "M" },
            { reasoning: "Domain excludes $x=0$ because $f$ never outputs 0.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=2+\\frac1x$, $x\\neq0$" },
        },
        {
          id: "ciam-u2-s3-fi-q14", difficulty: "challenge", totalMarks: 1,
          stem: "For $f(x)=\\frac{x+1}{x-1}$, the domain of $f^{-1}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All real $x$" },
            { id: "b", text: "$x>1$" },
            { id: "c", text: "$x\\neq1$" },
            { id: "d", text: "$x\\neq-1$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Domain swap", statement: "Domain of $f^{-1}$ = range of $f$." }], steps: [{ reasoning: "$f(x)=1+\\frac{2}{x-1}$ never equals 1, so $x\\neq1$.", marks: 1, markCode: "A" }], finalAnswer: "$x\\neq1$" },
        },
        {
          id: "ciam-u2-s3-fi-q15", difficulty: "core", totalMarks: 2,
          stem: "For $f(x)=5-2x$, find $f^{-1}(-1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Solve or use formula." }], steps: [
            { reasoning: "$f^{-1}(x)=\\frac{5-x}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(-1)=\\frac{5-(-1)}{2}=3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s3-fi-q16", difficulty: "challenge", totalMarks: 1,
          stem: "For $f(x)=\\sqrt{x-3}$, the domain of $f^{-1}$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "All real $x$" },
            { id: "b", text: "$x\\geq3$" },
            { id: "c", text: "$x\\neq3$" },
            { id: "d", text: "$x\\geq0$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Domain swap", statement: "Domain of $f^{-1}$ = range of $f$." }], steps: [{ reasoning: "Range of $f$ is $[0,\\infty)$, so domain of $f^{-1}$ is $x\\geq0$.", marks: 1, markCode: "A" }], finalAnswer: "$x\\geq0$" },
        },
      ],
    },
    {
      id: "ciam-u2-s3-properties",
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
          id: "ciam-u2-s3-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(5)=11$, then $f^{-1}(11)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "-5" },
            { id: "b", text: "0" },
            { id: "c", text: "5" },
            { id: "d", text: "11" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Inverse", statement: "Undo mapping." }], steps: [{ reasoning: "$f^{-1}$ undoes $f$: $f^{-1}(11)=5$.", marks: 1, markCode: "A" }], finalAnswer: "5" },
        },
        {
          id: "ciam-u2-s3-pr-q2", difficulty: "foundation", totalMarks: 2,
          stem: "The graph of $f^{-1}$ is the reflection of $f$ in…",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Inverse graph", statement: "Reflection line." }], steps: [
            { reasoning: "Reflection in $y=x$.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "$y=x$" },
        },
        {
          id: "ciam-u2-s3-pr-q3", difficulty: "core", totalMarks: 3,
          stem: "Given $f(x)=2x+4$, find $f^{-1}(10)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Solve or use formula." }], steps: [
            { reasoning: "$f^{-1}(x)=\\frac{x-4}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(10)=\\frac{10-4}{2}=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s3-pr-q4", difficulty: "core", totalMarks: 4,
          stem: "If $f(x)=\\frac{x-1}{x+2}$, find $f^{-1}(x)$ and state its domain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Fractional inverse", statement: "Swap and solve." }], steps: [
            { reasoning: "$x=\\frac{y-1}{y+2}$ → $x(y+2)=y-1$ → $xy+2x=y-1$ → $xy-y=-1-2x$ → $y(x-1)=-1-2x$.", marks: 1, markCode: "M" },
            { reasoning: "$y=\\frac{-1-2x}{x-1}=\\frac{2x+1}{1-x}$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(x)=\\frac{2x+1}{1-x}$, domain $x\\neq1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f^{-1}(x)=\\frac{2x+1}{1-x}$, $x\\neq1$" },
        },
        {
          id: "ciam-u2-s3-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(4)=-2$, then $f^{-1}(-2)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "-4" },
            { id: "b", text: "0" },
            { id: "c", text: "4" },
            { id: "d", text: "$-2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Inverse", statement: "Undo mapping." }], steps: [{ reasoning: "$f^{-1}$ undoes $f$: $f^{-1}(-2)=4$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "ciam-u2-s3-pr-q6", difficulty: "foundation", totalMarks: 2,
          stem: "For $f(x)=3x-6$, find $f^{-1}(f(2))$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "property", name: "Inverse property", statement: "$f^{-1}(f(x))=x$." }], steps: [
            { reasoning: "$f^{-1}(f(2))=2$ by the inverse property.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "ciam-u2-s3-pr-q7", difficulty: "foundation", totalMarks: 2,
          stem: "The range of $f$ is $[2,\\infty)$. State the domain of $f^{-1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Domain swap", statement: "Domain of $f^{-1}$ = range of $f$." }], steps: [
            { reasoning: "Domain of $f^{-1}$ equals range of $f$.", marks: 1, markCode: "M" },
            { reasoning: "Domain of $f^{-1}$: $[2,\\infty)$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$[2,\\infty)$" },
        },
        {
          id: "ciam-u2-s3-pr-q8", difficulty: "core", totalMarks: 1,
          stem: "The graph of $f^{-1}$ is the reflection of the graph of $f$ in…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$y=-x$" },
            { id: "b", text: "the y-axis" },
            { id: "c", text: "$y=x$" },
            { id: "d", text: "the x-axis" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Inverse graph", statement: "Reflection line." }], steps: [{ reasoning: "Reflection in $y=x$.", marks: 1, markCode: "A" }], finalAnswer: "$y=x$" },
        },
        {
          id: "ciam-u2-s3-pr-q9", difficulty: "core", totalMarks: 2,
          stem: "If $f(7)=3$, find $f^{-1}(3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "property", name: "Inverse", statement: "Undo mapping." }], steps: [
            { reasoning: "$f^{-1}$ maps 3 back to 7.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "ciam-u2-s3-pr-q10", difficulty: "core", totalMarks: 3,
          stem: "For $f(x)=2x+5$, verify that $f(f^{-1}(x))=x$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Verify inverse", statement: "Compose and simplify." }], steps: [
            { reasoning: "$f^{-1}(x)=\\frac{x-5}{2}$.", marks: 1, markCode: "M" },
            { reasoning: "$f(f^{-1}(x))=2\\left(\\frac{x-5}{2}\\right)+5=x-5+5=x$.", marks: 1, markCode: "M" },
            { reasoning: "Verified.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(f^{-1}(x))=x$" },
        },
        {
          id: "ciam-u2-s3-pr-q11", difficulty: "challenge", totalMarks: 1,
          stem: "The graph of $f^{-1}$ passes through $(2,5)$. Which point must lie on the graph of $f$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(5,-2)$" },
            { id: "b", text: "$(5,2)$" },
            { id: "c", text: "$(2,5)$" },
            { id: "d", text: "$(-2,5)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Inverse graph", statement: "Coordinates swap." }], steps: [{ reasoning: "Reflection in $y=x$ swaps coordinates.", marks: 1, markCode: "A" }], finalAnswer: "$(5,2)$" },
        },
        {
          id: "ciam-u2-s3-pr-q12", difficulty: "challenge", totalMarks: 2,
          stem: "Given $f(3)=-1$ and $f(5)=4$, find $f^{-1}(-1)+f^{-1}(4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "property", name: "Inverse", statement: "Undo mappings." }], steps: [
            { reasoning: "$f^{-1}(-1)=3$ and $f^{-1}(4)=5$.", marks: 1, markCode: "M" },
            { reasoning: "Sum is 8.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "ciam-u2-s3-pr-q13", difficulty: "core", totalMarks: 4,
          stem: "For $f(x)=x^2$ with domain $x\\geq0$, explain the relationship between the domain and range of $f$ and $f^{-1}$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Domain/range swap", statement: "They interchange." }], steps: [
            { reasoning: "Domain of $f$ is $[0,\\infty)$; range of $f$ is $[0,\\infty)$.", marks: 1, markCode: "M" },
            { reasoning: "Domain of $f^{-1}$ equals range of $f$: $[0,\\infty)$.", marks: 1, markCode: "M" },
            { reasoning: "Range of $f^{-1}$ equals domain of $f$: $[0,\\infty)$.", marks: 1, markCode: "M" },
            { reasoning: "Answer stated.", marks: 1, markCode: "A" },
          ], finalAnswer: "Domain and range interchange under inversion" },
        },
        {
          id: "ciam-u2-s3-pr-q14", difficulty: "challenge", totalMarks: 1,
          stem: "If $(2,4)$ lies on the graph of $f(x)=x^2$ for $x\\geq0$, which point lies on $f^{-1}$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(2,16)$" },
            { id: "b", text: "$(2,4)$" },
            { id: "c", text: "$(4,2)$" },
            { id: "d", text: "$(16,2)$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Inverse graph", statement: "Coordinates swap." }], steps: [{ reasoning: "$(2,4)$ swaps to $(4,2)$ on $f^{-1}$.", marks: 1, markCode: "A" }], finalAnswer: "$(4,2)$" },
        },
        {
          id: "ciam-u2-s3-pr-q15", difficulty: "core", totalMarks: 2,
          stem: "For $f(x)=x+7$, find $f^{-1}(-2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -9 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate inverse", statement: "Use formula." }], steps: [
            { reasoning: "$f^{-1}(x)=x-7$.", marks: 1, markCode: "M" },
            { reasoning: "$f^{-1}(-2)=-9$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-9" },
        },
        {
          id: "ciam-u2-s3-pr-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Which equation is always true for a function and its inverse?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$f(f^{-1}(x))=f(x)$" },
            { id: "b", text: "$f(f^{-1}(x))=x$" },
            { id: "c", text: "$f^{-1}(f(x))=f(x)$" },
            { id: "d", text: "$f^{-1}(x)=-f(x)$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "property", name: "Inverse property", statement: "Composition returns $x$." }], steps: [{ reasoning: "$f(f^{-1}(x))=x$ and $f^{-1}(f(x))=x$.", marks: 1, markCode: "A" }], finalAnswer: "$f(f^{-1}(x))=x$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u2-s3-inv-notes", title: "Inverse functions — notes", summary: "Finding, properties, graphs.",
      sections: [
        { heading: "Finding", body: "Swap $x,y$, solve for $y$. Restrict domain for non-one-to-one functions." },
        { heading: "Properties", body: "$f^{-1}(f(x))=x$. Graph = reflection in $y=x$. Domain/range swap." },
      ] },
  ],
};
