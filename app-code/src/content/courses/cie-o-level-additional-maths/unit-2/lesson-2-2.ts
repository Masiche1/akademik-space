import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "olam-u2-lesson-2-2",
  code: "2-2",
  title: "Composite Functions",
  goal: "I CAN evaluate and manipulate composite functions.",
  standards: ["4037: composite functions"],
  vocabulary: [
    { term: "Composite function", definition: "$fg(x) = f(g(x))$ — apply $g$ first, then $f$." },
    { term: "Order", definition: "$fg \\neq gf$ generally." },
    { term: "Substitution", definition: "Replacing variable with expression." },
  ],
  concepts: [
    {
      id: "olam-u2-s2-evaluate",
      title: "Evaluating composites",
      skill: "Compute $fg(x)$ and $gf(x)$ at O Level.",
      lesson: {
        sections: [
          { heading: "What composition means", body: "$fg(x)$ means 'apply $g$ first, then apply $f$ to the result' — written $f(g(x))$. The order is crucial and $fg$ is generally not the same as $gf$. To evaluate $fg(3)$, work inside-out: compute $g(3)$ first, then feed that answer into $f$. To find the expression $fg(x)$, replace every $x$ inside $f$ with the whole of $g(x)$, then simplify — take care with brackets, since $g(x)$ is a single unit being substituted." },
          { heading: "Domain of a composite", body: "The composite $fg(x)$ is only defined where both stages work: $x$ must be in the domain of $g$, and $g(x)$ must land inside the domain of $f$. For $f(x)=\\frac{1}{x-1}$ composed with $g(x)=2x+3$, you need $g(x)\\neq1$, i.e. $x\\neq-1$. Checking the domain of composites is a favourite exam trap." },
        ],
        keyFormulas: [
          { name: "Composite", statement: "$fg(x)=f(g(x))$ — $g$ first" },
        ],
        workedExample: { problem: "Find $fg(3)$ for $f(x)=x+4$, $g(x)=2x-1$.", solution: "Inner first: $g(3)=2(3)-1=5$. Then $f(5)=5+4=9$. So $fg(3)=9$. Note $gf(3)=g(7)=13$ — different answer, confirming order matters." },
      },
      questions: [
        {
          id: "olam-u2-s2-ev-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(x)=2x$ and $g(x)=x+3$, then $fg(x)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2x+6$" }, { id: "b", text: "$2x+3$" }, { id: "c", text: "$x+6$" }, { id: "d", text: "$2x^2+6x$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Substitute $g$ into $f$." }], steps: [{ reasoning: "$f(g(x))=2(x+3)=2x+6$.", marks: 1, markCode: "A" }], finalAnswer: "$2x+6$" },
        },
        {
          id: "olam-u2-s2-ev-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find $fg(2)$ for $f(x)=x^2$, $g(x)=x-1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Inside-out." }], steps: [
            { reasoning: "$g(2)=1$, $f(1)=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "olam-u2-s2-ev-q3", difficulty: "core", totalMarks: 3,
          stem: "Find $gf(x)$ for $f(x)=2x+1$, $g(x)=x^2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Order matters." }], steps: [
            { reasoning: "$g(f(x))=(2x+1)^2$.", marks: 1, markCode: "M" },
            { reasoning: "$=4x^2+4x+1$ (expanded).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2x+1)^2=4x^2+4x+1$" },
        },
        {
          id: "olam-u2-s2-ev-q4", difficulty: "core", totalMarks: 4,
          stem: "Given $f(x)=\\frac{1}{x-1}$ and $g(x)=2x+3$, find $fg(x)$ and state its domain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite + domain", statement: "Substitute then restrict." }], steps: [
            { reasoning: "$fg(x)=\\frac{1}{(2x+3)-1}=\\frac{1}{2x+2}$.", marks: 1, markCode: "M" },
            { reasoning: "Need $2x+2\\neq0$ → $x\\neq-1$.", marks: 1, markCode: "M" },
            { reasoning: "Domain: $x\\neq-1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{1}{2x+2}$, $x\\neq-1$" },
        },
      ],
    },
    {
      id: "olam-u2-s2-find",
      title: "Finding component functions",
      skill: "Find $f$ given $fg$ at O Level.",
      lesson: {
        sections: [
          { heading: "The recovery technique", body: "If you are given the composite $fg(x)$ and one of the functions, you can recover the other by reversing the composition. Suppose $fg(x)$ is known and you want $f$: write $g(x)=u$ and solve for $x$ in terms of $u$ — that gives $g^{-1}(u)$ — then substitute $x=g^{-1}(u)$ into $fg(x)$. Equivalently, replace every $x$ in the composite with $g^{-1}(x)$ to isolate $f$. The algebra is the same as finding an inverse function." },
          { heading: "Worked pattern", body: "Given $fg(x)=4x+2$ and $g(x)=2x$: set $u=2x$, so $x=u/2$. Then $fg(x)=f(2x)=4x+2=2u+2$, meaning $f(u)=2u+2$, hence $f(x)=2x+2$. Always verify at the end by computing $fg(x)$ with your answer and checking it reproduces the given composite — this catches algebra slips." },
        ],
        keyFormulas: [
          { name: "Recovery", statement: "Replace $x$ in $fg(x)$ with $g^{-1}(x)$ to get $f$" },
        ],
        workedExample: { problem: "If $fg(x)=x^2+1$ and $g(x)=x-2$, find $f(x)$.", solution: "$g^{-1}(x)=x+2$. So $f(x)=fg(g^{-1}(x))=(x+2)^2+1=x^2+4x+5$. Verify: $fg(x)=f(x-2)=(x-2)^2+4(x-2)+5=x^2-4x+4+4x-8+5=x^2+1$ ✓." },
      },
      questions: [
        {
          id: "olam-u2-s2-fi-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Given $fg(x)=3x+6$ and $g(x)=x-2$, the simplest first step is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Replace $x$ with $x+2$" }, { id: "b", text: "Divide by 3" }, { id: "c", text: "Square both sides" }, { id: "d", text: "Substitute $x=0$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse substitution", statement: "Undo $g$." }], steps: [{ reasoning: "Replace $x$ with $g^{-1}(x)=x+2$.", marks: 1, markCode: "A" }], finalAnswer: "Option a" },
        },
        {
          id: "olam-u2-s2-fi-q2", difficulty: "foundation", totalMarks: 2,
          stem: "If $fg(x)=2x+4$ and $g(x)=x+1$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-1$." }], steps: [
            { reasoning: "$f(x+1)=2x+4$ → replace $x$ with $x-1$: $f(x)=2(x-1)+4=2x+2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $f(x)=2x+2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=2x+2$" },
        },
        {
          id: "olam-u2-s2-fi-q3", difficulty: "core", totalMarks: 3,
          stem: "If $fg(x)=x^2$ and $g(x)=x+1$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-1$." }], steps: [
            { reasoning: "$f(x+1)=x^2$ → $f(x)=(x-1)^2$.", marks: 1, markCode: "M" },
            { reasoning: "Expanded: $x^2-2x+1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=(x-1)^2=x^2-2x+1$" },
        },
        {
          id: "olam-u2-s2-fi-q4", difficulty: "core", totalMarks: 4,
          stem: "If $fg(x)=\\frac{1}{x}$ and $g(x)=x-2$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x+2$." }], steps: [
            { reasoning: "$f(x-2)=\\frac{1}{x}$ → replace $x$ with $x+2$: $f(x)=\\frac{1}{x+2}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $fg(x)=f(x-2)=\\frac{1}{(x-2)+2}=\\frac{1}{x}$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Domain: $x\\neq-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=\\frac{1}{x+2}$, $x\\neq-2$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olam-u2-s2-comp-notes", title: "Composite functions — notes", summary: "$fg(x)=f(g(x))$, order matters.",
      sections: [
        { heading: "Evaluation", body: "Inside-out. $fg(x)$ means apply $g$ first." },
        { heading: "Finding f", body: "Given $fg$, substitute $g^{-1}(x)$ for $x$ to isolate $f$." },
      ] },
  ],
};
