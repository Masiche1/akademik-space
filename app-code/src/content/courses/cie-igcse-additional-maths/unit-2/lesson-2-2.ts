import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ciam-u2-lesson-2-2",
  code: "2-2",
  title: "Composite Functions",
  goal: "I CAN evaluate and manipulate composite functions.",
  standards: ["0606: composite functions"],
  vocabulary: [
    { term: "Composite function", definition: "$fg(x) = f(g(x))$ — apply $g$ first, then $f$." },
    { term: "Order", definition: "$fg \\neq gf$ generally." },
    { term: "Substitution", definition: "Replacing variable with expression." },
  ],
  concepts: [
    {
      id: "ciam-u2-s2-evaluate",
      title: "Evaluating composites",
      skill: "Compute $fg(x)$ and $gf(x)$ at IGCSE level.",
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
          id: "ciam-u2-s2-ev-q1", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(x)=2x$ and $g(x)=x+3$, then $fg(x)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2x+6$" },
            { id: "b", text: "$x+6$" },
            { id: "c", text: "$2x+3$" },
            { id: "d", text: "$2x^2+6x$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Substitute $g$ into $f$." }], steps: [{ reasoning: "$f(g(x))=2(x+3)=2x+6$.", marks: 1, markCode: "A" }], finalAnswer: "$2x+6$" },
        },
        {
          id: "ciam-u2-s2-ev-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find $fg(2)$ for $f(x)=x^2$, $g(x)=x-1$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Inside-out." }], steps: [
            { reasoning: "$g(2)=1$, $f(1)=1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 1.", marks: 1, markCode: "A" },
          ], finalAnswer: "1" },
        },
        {
          id: "ciam-u2-s2-ev-q3", difficulty: "core", totalMarks: 3,
          stem: "Find $gf(x)$ for $f(x)=2x+1$, $g(x)=x^2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Order matters." }], steps: [
            { reasoning: "$g(f(x))=(2x+1)^2$.", marks: 1, markCode: "M" },
            { reasoning: "$=4x^2+4x+1$ (expanded).", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$(2x+1)^2=4x^2+4x+1$" },
        },
        {
          id: "ciam-u2-s2-ev-q4", difficulty: "core", totalMarks: 4,
          stem: "Given $f(x)=\\frac{1}{x-1}$ and $g(x)=2x+3$, find $fg(x)$ and state its domain.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite + domain", statement: "Substitute then restrict." }], steps: [
            { reasoning: "$fg(x)=\\frac{1}{(2x+3)-1}=\\frac{1}{2x+2}$.", marks: 1, markCode: "M" },
            { reasoning: "Need $2x+2\\neq0$ → $x\\neq-1$.", marks: 1, markCode: "M" },
            { reasoning: "Domain: $x\\neq-1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac{1}{2x+2}$, $x\\neq-1$" },
        },
        {
          id: "ciam-u2-s2-ev-q5", difficulty: "foundation", totalMarks: 1,
          stem: "If $f(x)=x-2$ and $g(x)=3x+1$, then $fg(x)$ equals…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3x+3$" },
            { id: "b", text: "$x-1$" },
            { id: "c", text: "$3x^2-x+2$" },
            { id: "d", text: "$3x-1$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Substitute $g$ into $f$." }], steps: [{ reasoning: "$f(g(x))=(3x+1)-2=3x-1$.", marks: 1, markCode: "A" }], finalAnswer: "$3x-1$" },
        },
        {
          id: "ciam-u2-s2-ev-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find $fg(3)$ for $f(x)=x^2$ and $g(x)=x+2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Inside-out." }], steps: [
            { reasoning: "$g(3)=5$, then $f(5)=25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 25.", marks: 1, markCode: "A" },
          ], finalAnswer: "25" },
        },
        {
          id: "ciam-u2-s2-ev-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Find $gf(x)$ for $f(x)=2x$ and $g(x)=x-3$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Apply $f$ first." }], steps: [
            { reasoning: "$g(f(x))=2x-3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2x-3$" },
        },
        {
          id: "ciam-u2-s2-ev-q8", difficulty: "core", totalMarks: 1,
          stem: "For $f(x)=x+1$ and $g(x)=2x$, the value of $gf(2)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "5" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "6" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Inside-out." }], steps: [{ reasoning: "$f(2)=3$, $g(3)=6$.", marks: 1, markCode: "A" }], finalAnswer: "6" },
        },
        {
          id: "ciam-u2-s2-ev-q9", difficulty: "core", totalMarks: 2,
          stem: "Find $fg(4)$ for $f(x)=x-5$ and $g(x)=2x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Inside-out." }], steps: [
            { reasoning: "$g(4)=8$, $f(8)=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "ciam-u2-s2-ev-q10", difficulty: "core", totalMarks: 3,
          stem: "Find $fg(x)$ for $f(x)=x^2+1$ and $g(x)=x-2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Substitute $g$ into $f$." }], steps: [
            { reasoning: "$fg(x)=(x-2)^2+1$.", marks: 1, markCode: "M" },
            { reasoning: "$=x^2-4x+5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x^2-4x+5$" },
        },
        {
          id: "ciam-u2-s2-ev-q11", difficulty: "challenge", totalMarks: 1,
          stem: "For $f(x)=\\frac{1}{x-1}$ and $g(x)=x+2$, the expression $fg(x)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{x+3}$" },
            { id: "b", text: "$\\frac{1}{x-1}$" },
            { id: "c", text: "$\\frac{1}{x+1}$" },
            { id: "d", text: "$\\frac{1}{x+2}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Substitute carefully." }], steps: [{ reasoning: "$fg(x)=\\frac{1}{(x+2)-1}=\\frac{1}{x+1}$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{1}{x+1}$" },
        },
        {
          id: "ciam-u2-s2-ev-q12", difficulty: "challenge", totalMarks: 2,
          stem: "For $f(x)=x^2-1$ and $g(x)=x+1$, find $gf(3)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 9 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Inside-out." }], steps: [
            { reasoning: "$f(3)=8$, then $g(8)=9$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 9.", marks: 1, markCode: "A" },
          ], finalAnswer: "9" },
        },
        {
          id: "ciam-u2-s2-ev-q13", difficulty: "core", totalMarks: 3,
          stem: "Find $fg(x)$ for $f(x)=2x-1$ and $g(x)=3x+2$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Composite", statement: "Substitute $g$ into $f$." }], steps: [
            { reasoning: "$fg(x)=2(3x+2)-1$.", marks: 1, markCode: "M" },
            { reasoning: "$=6x+3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$6x+3$" },
        },
        {
          id: "ciam-u2-s2-ev-q14", difficulty: "challenge", totalMarks: 1,
          stem: "For $f(x)=\\frac{1}{x-3}$ and $g(x)=x-1$, the value of $fg(2)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$-\\frac12$" },
            { id: "b", text: "$\\frac12$" },
            { id: "c", text: "$-1$" },
            { id: "d", text: "1" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Inside-out." }], steps: [{ reasoning: "$g(2)=1$, $f(1)=\\frac{1}{1-3}=-\\frac12$.", marks: 1, markCode: "A" }], finalAnswer: "$-\\frac12$" },
        },
        {
          id: "ciam-u2-s2-ev-q15", difficulty: "core", totalMarks: 2,
          stem: "Find $fg(0)$ for $f(x)=x+4$ and $g(x)=x^2$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Evaluate", statement: "Inside-out." }], steps: [
            { reasoning: "$g(0)=0$, $f(0)=4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "ciam-u2-s2-ev-q16", difficulty: "challenge", totalMarks: 1,
          stem: "For $f(x)=x^2$ and $g(x)=\\frac1x$, which statement about $fg(x)$ is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$fg(x)=\\frac{1}{x}$, $x\\neq0$" },
            { id: "b", text: "$fg(x)=\\frac{1}{x^2}$, all $x$" },
            { id: "c", text: "$fg(x)=x^2$, $x\\neq0$" },
            { id: "d", text: "$fg(x)=\\frac{1}{x^2}$, $x\\neq0$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Composite + domain", statement: "Substitute and restrict." }], steps: [{ reasoning: "$fg(x)=\\left(\\frac1x\\right)^2=\\frac{1}{x^2}$; $x\\neq0$.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{1}{x^2}$, $x\\neq0$" },
        },
      ],
    },
    {
      id: "ciam-u2-s2-find",
      title: "Finding component functions",
      skill: "Find $f$ given $fg$ at IGCSE level.",
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
          id: "ciam-u2-s2-fi-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Given $fg(x)=3x+6$ and $g(x)=x-2$, the simplest first step is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Square both sides" },
            { id: "b", text: "Replace $x$ with $x+2$" },
            { id: "c", text: "Substitute $x=0$" },
            { id: "d", text: "Divide by 3" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse substitution", statement: "Undo $g$." }], steps: [{ reasoning: "Replace $x$ with $g^{-1}(x)=x+2$.", marks: 1, markCode: "A" }], finalAnswer: "Option a" },
        },
        {
          id: "ciam-u2-s2-fi-q2", difficulty: "foundation", totalMarks: 2,
          stem: "If $fg(x)=2x+4$ and $g(x)=x+1$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-1$." }], steps: [
            { reasoning: "$f(x+1)=2x+4$ → replace $x$ with $x-1$: $f(x)=2(x-1)+4=2x+2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $f(x)=2x+2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=2x+2$" },
        },
        {
          id: "ciam-u2-s2-fi-q3", difficulty: "core", totalMarks: 3,
          stem: "If $fg(x)=x^2$ and $g(x)=x+1$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-1$." }], steps: [
            { reasoning: "$f(x+1)=x^2$ → $f(x)=(x-1)^2$.", marks: 1, markCode: "M" },
            { reasoning: "Expanded: $x^2-2x+1$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=(x-1)^2=x^2-2x+1$" },
        },
        {
          id: "ciam-u2-s2-fi-q4", difficulty: "core", totalMarks: 4,
          stem: "If $fg(x)=\\frac{1}{x}$ and $g(x)=x-2$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x+2$." }], steps: [
            { reasoning: "$f(x-2)=\\frac{1}{x}$ → replace $x$ with $x+2$: $f(x)=\\frac{1}{x+2}$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $fg(x)=f(x-2)=\\frac{1}{(x-2)+2}=\\frac{1}{x}$. ✓", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "M" },
            { reasoning: "Domain: $x\\neq-2$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=\\frac{1}{x+2}$, $x\\neq-2$" },
        },
        {
          id: "ciam-u2-s2-fi-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Given $fg(x)=2x+6$ and $g(x)=x-2$, the simplest first step is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Divide by 2" },
            { id: "b", text: "Square both sides" },
            { id: "c", text: "Replace $x$ with $x+2$" },
            { id: "d", text: "Substitute $x=0$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Inverse substitution", statement: "Undo $g$." }], steps: [{ reasoning: "Replace $x$ with $g^{-1}(x)=x+2$.", marks: 1, markCode: "A" }], finalAnswer: "Option a" },
        },
        {
          id: "ciam-u2-s2-fi-q6", difficulty: "foundation", totalMarks: 2,
          stem: "If $fg(x)=x+5$ and $g(x)=x-3$, find $f(0)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 8 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Undo $g$." }], steps: [
            { reasoning: "$f(x-3)=x+5$; let $u=x-3$, so $x=u+3$ and $f(u)=u+8$.", marks: 1, markCode: "M" },
            { reasoning: "$f(0)=8$.", marks: 1, markCode: "A" },
          ], finalAnswer: "8" },
        },
        {
          id: "ciam-u2-s2-fi-q7", difficulty: "foundation", totalMarks: 2,
          stem: "If $fg(x)=3x-1$ and $g(x)=x+4$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-4$." }], steps: [
            { reasoning: "$f(x+4)=3x-1$ → replace $x$ with $x-4$: $f(x)=3(x-4)-1$.", marks: 1, markCode: "M" },
            { reasoning: "$f(x)=3x-13$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=3x-13$" },
        },
        {
          id: "ciam-u2-s2-fi-q8", difficulty: "core", totalMarks: 1,
          stem: "If $fg(x)=(x-1)^2$ and $g(x)=x+2$, then $f(x)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x-1)^2$" },
            { id: "b", text: "$x^2-2x+1$" },
            { id: "c", text: "$(x+1)^2$" },
            { id: "d", text: "$(x-3)^2$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-2$." }], steps: [{ reasoning: "Replace $x$ with $x-2$: $f(x)=(x-3)^2$.", marks: 1, markCode: "A" }], finalAnswer: "$f(x)=(x-3)^2$" },
        },
        {
          id: "ciam-u2-s2-fi-q9", difficulty: "core", totalMarks: 2,
          stem: "If $fg(x)=2x+8$ and $g(x)=\\frac{x}{2}$, find $f(1)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 12 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Use $g^{-1}(x)=2x$." }], steps: [
            { reasoning: "$f(x)=2(2x)+8=4x+8$.", marks: 1, markCode: "M" },
            { reasoning: "$f(1)=12$.", marks: 1, markCode: "A" },
          ], finalAnswer: "12" },
        },
        {
          id: "ciam-u2-s2-fi-q10", difficulty: "core", totalMarks: 4,
          stem: "If $fg(x)=x^2-3x+2$ and $g(x)=x-1$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x+1$." }], steps: [
            { reasoning: "$f(x+1)=(x+1)^2-3(x+1)+2$.", marks: 1, markCode: "M" },
            { reasoning: "$=x^2+2x+1-3x-3+2$.", marks: 1, markCode: "M" },
            { reasoning: "$=x^2-x$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=x^2-x$" },
        },
        {
          id: "ciam-u2-s2-fi-q11", difficulty: "challenge", totalMarks: 1,
          stem: "If $fg(x)=\\frac{1}{x+1}$ and $g(x)=x-2$, then $f(x)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{x-1}$" },
            { id: "b", text: "$\\frac{1}{x+1}$" },
            { id: "c", text: "$\\frac{1}{x-3}$" },
            { id: "d", text: "$\\frac{1}{x+3}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x+2$." }], steps: [{ reasoning: "Replace $x$ with $x+2$: $f(x)=\\frac{1}{x+3}$.", marks: 1, markCode: "A" }], finalAnswer: "$f(x)=\\frac{1}{x+3}$" },
        },
        {
          id: "ciam-u2-s2-fi-q12", difficulty: "challenge", totalMarks: 2,
          stem: "If $fg(x)=3x-6$ and $g(x)=2x$, find $f(4)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 0 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Use $g^{-1}(x)=\\frac{x}{2}$." }], steps: [
            { reasoning: "$f(x)=3\\left(\\frac{x}{2}\\right)-6=\\frac{3x}{2}-6$.", marks: 1, markCode: "M" },
            { reasoning: "$f(4)=6-6=0$.", marks: 1, markCode: "A" },
          ], finalAnswer: "0" },
        },
        {
          id: "ciam-u2-s2-fi-q13", difficulty: "core", totalMarks: 3,
          stem: "If $fg(x)=(x+2)^2$ and $g(x)=x-3$, find $f(x)$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x+3$." }], steps: [
            { reasoning: "$f(x+3)=(x+2)^2$ → replace $x$ with $x-3$: $f(x)=(x-1)^2$.", marks: 1, markCode: "M" },
            { reasoning: "Since $g^{-1}(x)=x+3$, replace $x$ by $x+3$: $f(x)=(x+5)^2$.", marks: 1, markCode: "M" },
            { reasoning: "$f(x)=(x+5)^2=x^2+10x+25$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$f(x)=(x+5)^2=x^2+10x+25$" },
        },
        {
          id: "ciam-u2-s2-fi-q14", difficulty: "challenge", totalMarks: 1,
          stem: "If $fg(x)=x^2+2x+1$ and $g(x)=x+1$, then $f(x)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$(x+1)^2$" },
            { id: "b", text: "$x^2+2x$" },
            { id: "c", text: "$x^2$" },
            { id: "d", text: "$(x-1)^2$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-1$." }], steps: [{ reasoning: "$f(x+1)=(x+1)^2$; let $u=x+1$ gives $f(u)=u^2$.", marks: 1, markCode: "A" }], finalAnswer: "$f(x)=x^2$" },
        },
        {
          id: "ciam-u2-s2-fi-q15", difficulty: "core", totalMarks: 2,
          stem: "If $fg(x)=4x-8$ and $g(x)=x+1$, find $f(2)$.",
          response: { type: "numeric", parts: [{ label: "a", answer: -4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-1$." }], steps: [
            { reasoning: "$f(x)=4(x-1)-8=4x-12$.", marks: 1, markCode: "M" },
            { reasoning: "$f(2)=-4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "-4" },
        },
        {
          id: "ciam-u2-s2-fi-q16", difficulty: "challenge", totalMarks: 1,
          stem: "If $fg(x)=\\frac1x$ and $g(x)=x+1$, then $f(x)$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x-1$" },
            { id: "b", text: "$\\frac{1}{x+1}$" },
            { id: "c", text: "$\\frac{1}{x}$" },
            { id: "d", text: "$\\frac{1}{x-1}$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Find f", statement: "Substitute $x-1$." }], steps: [{ reasoning: "Replace $x$ with $x-1$: $f(x)=\\frac{1}{x-1}$.", marks: 1, markCode: "A" }], finalAnswer: "$f(x)=\\frac{1}{x-1}$" },
        },
      ],
    },
  ],
  notes: [
    { id: "ciam-u2-s2-comp-notes", title: "Composite functions — notes", summary: "$fg(x)=f(g(x))$, order matters.",
      sections: [
        { heading: "Evaluation", body: "Inside-out. $fg(x)$ means apply $g$ first." },
        { heading: "Finding f", body: "Given $fg$, substitute $g^{-1}(x)$ for $x$ to isolate $f$." },
      ] },
  ],
};
