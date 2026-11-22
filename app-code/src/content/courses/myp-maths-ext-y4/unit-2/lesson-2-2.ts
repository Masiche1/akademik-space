import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mypme4-u2-lesson-2-2",
  code: "2-2",
  title: "Composite and Inverse Functions",
  goal: "I CAN find composite functions $fg(x)$, find inverse functions $f^{-1}(x)$, and solve equations using functions.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion B: Investigating patterns",
  ],
  vocabulary: [
    { term: "Composite function", definition: "A function formed by applying one function then another: $fg(x)=f(g(x))$ — apply $g$ first." },
    { term: "Inverse function", definition: "The function that reverses another: $f^{-1}(f(x))=x$; found by swapping $x$ and $y$ and rearranging." },
    { term: "Order of composition", definition: "$fg$ means 'do $g$ first, then $f$' — read right to left." },
    { term: "Self-inverse", definition: "A function equal to its own inverse, e.g. $f(x)=\\frac{1}{x}$ or $f(x)=5-x$." },
    { term: "Domain restriction", definition: "Limiting inputs so an inverse function exists and is single-valued." },
  ],
  concepts: [
    {
      id: "mypme4-u2-composite",
      title: "Composite functions",
      skill: "Form and evaluate composite functions, and distinguish order of composition.",
      lesson: {
        sections: [
          {
            heading: "What is a composite?",
            body: "If $f(x)=2x+1$ and $g(x)=x^2$, then $fg(x)=f(g(x))=f(x^2)=2x^2+1$ — apply $g$ first, then $f$. Note $gf(x)=g(f(x))=(2x+1)^2$ — different result! Order matters.",
          },
          {
            heading: "Evaluating composites",
            body: "To find $fg(3)$: first $g(3)=9$, then $f(9)=19$. Work inside-out: evaluate the inner function first, then substitute its output into the outer function.",
          },
          {
            heading: "Composite equations",
            body: "Equations like $f(g(x))=k$ can be solved by working backwards: find $g(x)$ that makes $f$ equal $k$, then solve for $x$. This is the basis of solving more complex equations.",
          },
        ],
        keyFormulas: [
          { name: "Composite", statement: "$fg(x)=f(g(x))$ — apply $g$ first" },
          { name: "Order", statement: "$fg \\ne gf$ in general" },
        ],
        workedExample: {
          problem: "Given $f(x)=3x-2$ and $g(x)=x+5$, find $fg(4)$.",
          solution: "$g(4)=9$; $f(9)=3(9)-2=25$.",
        },
      },
      questions: [
        {
          id: "mypme4-u2-comp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=x+2$ and $g(x)=3x$, what is $fg(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x+6$" },
              { id: "b", text: "$3x+2$" },
              { id: "c", text: "$3x$" },
              { id: "d", text: "$3x+6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$fg(x)=f(g(x))$; apply $g$ first." },
            ],
            steps: [
              { reasoning: "$f(g(x))=f(3x)=3x+2$.", working: "3x+2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3x+2$",
            commonErrors: ["Computing $gf$ instead of $fg$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-comp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=2x-1$ and $g(x)=x^2$, find $fg(3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "35" },
              { id: "b", text: "11" },
              { id: "c", text: "17" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation order", statement: "Apply $g$ first: $g(3)=9$, then $f(9)=17$." },
            ],
            steps: [
              { reasoning: "$g(3)=9$; $f(9)=2(9)-1=17$.", working: "f(9)=17", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17$",
            commonErrors: ["Applying $f$ first."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-comp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $f(x)=\\frac{x}{x-1}$ and $g(x)=2x+3$, find $fg(x)$ in simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{x}{2x+2}$" },
              { id: "b", text: "$\\frac{2x+3}{2x+2}$" },
              { id: "c", text: "$\\frac{2x+3}{2x+4}$" },
              { id: "d", text: "$\\frac{2x+3}{x-1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite", statement: "$fg(x)=f(g(x))=\\frac{g(x)}{g(x)-1}$." },
            ],
            steps: [
              { reasoning: "$g(x)=2x+3$; $g(x)-1=2x+2$.", working: "g(x)-1=2x+2", marks: 1, markCode: "M" },
              { reasoning: "$fg(x)=\\frac{2x+3}{2x+2}$.", working: "\\frac{2x+3}{2x+2}", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "\\frac{2x+3}{2x+2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2x+3}{2x+2}$",
            commonErrors: ["Forgetting to subtract 1 from $g(x)$ in the denominator."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-comp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Given $f(x)=3x+1$ and $g(x)=\\frac{x-1}{2}$.",
          parts: [
            { label: "a", prompt: "Find $fg(x)$.", marks: 2 },
            { label: "b", prompt: "Find $gf(x)$.", marks: 2 },
            { label: "c", prompt: "Show that $fg \\ne gf$.", marks: 2 },
            { label: "d", prompt: "Find $x$ such that $fg(x)=10$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$fg(x)=f(g(x))$; $gf(x)=g(f(x))$." },
            ],
            steps: [
              { part: "a", reasoning: "$f(g(x))=3\\left(\\frac{x-1}{2}\\right)+1=\\frac{3x-3}{2}+1=\\frac{3x-1}{2}$.", working: "\\frac{3x-1}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the result.", working: "fg(x)=\\frac{3x-1}{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(f(x))=\\frac{(3x+1)-1}{2}=\\frac{3x}{2}$.", working: "gf(x)=\\frac{3x}{2}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result.", working: "gf(x)=\\frac{3x}{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{3x-1}{2}\\ne\\frac{3x}{2}$ since numerators differ.", working: "\\text{different expressions}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude order matters.", working: "fg\\ne gf", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\frac{3x-1}{2}=10 \\Rightarrow 3x-1=20 \\Rightarrow x=7$.", working: "x=7", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the solution.", working: "x=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $fg(x)=\\frac{3x-1}{2}$ (b) $gf(x)=\\frac{3x}{2}$ (c) expressions differ — order matters (d) $x=7$",
            commonErrors: ["In (b), forgetting to subtract 1 before dividing by 2."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), R1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u2-comp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=x+1$ and $g(x)=2x$, what is $fg(x)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x+2$" },
              { id: "b", text: "$2x+1$" },
              { id: "c", text: "$x+2$" },
              { id: "d", text: "$2x$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$fg(x)=f(g(x))$; apply $g$ first." },
            ],
            steps: [
              { reasoning: "$f(g(x))=f(2x)=2x+1$.", working: "2x+1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2x+1$",
            commonErrors: ["Computing $gf(x)=2(x+1)=2x+2$ instead."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-comp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=3x$ and $g(x)=x-2$, find $fg(4)$.",
          response: { type: "numeric", parts: [{ label: "$fg(4)$", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation order", statement: "Apply $g$ first: $g(4)=2$, then $f(2)=6$." },
            ],
            steps: [
              { reasoning: "$g(4)=2$; $f(2)=3(2)=6$.", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Applying $f$ first: $f(4)=12$, $g(12)=10$."],
          },
        },
        {
          id: "mypme4-u2-comp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=x^2$ and $g(x)=x+3$, find $fg(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2+3$" },
              { id: "b", text: "$(x+3)^2$" },
              { id: "c", text: "$(x^2)+3$ simplified as $x^2+3x+3$" },
              { id: "d", text: "$x^2+9$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$fg(x)=f(g(x))=(x+3)^2$." },
            ],
            steps: [
              { reasoning: "$f(g(x))=f(x+3)=(x+3)^2$.", working: "(x+3)^2", marks: 1, markCode: "M" },
              { reasoning: "State the composite.", working: "(x+3)^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$(x+3)^2$",
            commonErrors: ["Writing $x^2+3$ — forgetting to substitute into the whole function."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-comp-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=2x+1$ and $g(x)=3x$, find $fg(2)$.",
          response: { type: "numeric", parts: [{ label: "$fg(2)$", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation order", statement: "Apply $g$ first: $g(2)=6$, then $f(6)=13$." },
            ],
            steps: [
              { reasoning: "$g(2)=6$; $f(6)=2(6)+1=13$.", working: "13", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$13$",
            commonErrors: ["Applying $f$ first: $f(2)=5$, $g(5)=15$."],
          },
        },
        {
          id: "mypme4-u2-comp-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=\\frac{1}{x}$ and $g(x)=x+1$, find $fg(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{x}+1$" },
              { id: "b", text: "$\\frac{1}{x-1}$" },
              { id: "c", text: "$\\frac{x+1}{x}$" },
              { id: "d", text: "$\\frac{1}{x+1}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$fg(x)=f(g(x))=\\frac{1}{g(x)}=\\frac{1}{x+1}$." },
            ],
            steps: [
              { reasoning: "$f(g(x))=\\frac{1}{x+1}$.", working: "\\frac{1}{x+1}", marks: 1, markCode: "M" },
              { reasoning: "State the composite.", working: "\\frac{1}{x+1}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{x+1}$",
            commonErrors: ["Writing $\\frac{1}{x}+1$ — adding instead of substituting."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-comp-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=x^2-1$ and $g(x)=2x$, find $fg(3)$.",
          response: { type: "numeric", parts: [{ label: "$fg(3)$", answer: 35 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation order", statement: "Apply $g$ first: $g(3)=6$, then $f(6)=35$." },
            ],
            steps: [
              { reasoning: "$g(3)=6$; $f(6)=6^2-1=35$.", working: "35", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35$",
            commonErrors: ["Applying $f$ first or squaring before substituting."],
          },
        },
        {
          id: "mypme4-u2-comp-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If $f(x)=\\frac{x-1}{2}$ and $g(x)=4x+3$, find $gf(x)$ in simplest form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2x+5$" },
              { id: "b", text: "$2x+1$" },
              { id: "c", text: "$\\frac{x-1}{2}+3$" },
              { id: "d", text: "$2x-1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite order", statement: "$gf(x)=g(f(x))$ — apply $f$ first here." },
            ],
            steps: [
              { reasoning: "$g(f(x))=4\\left(\\frac{x-1}{2}\\right)+3=2(x-1)+3=2x-2+3=2x+1$.", working: "2x+1", marks: 1, markCode: "M" },
              { reasoning: "Expand and simplify.", working: "2x+1", marks: 1, markCode: "M" },
              { reasoning: "State the result.", working: "2x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x+1$",
            commonErrors: ["Computing $fg$ instead of $gf$, or distributing wrongly."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-comp-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If $f(x)=\\frac{x}{x-2}$ and $g(x)=x+1$, find $fg(3)$.",
          response: { type: "numeric", parts: [{ label: "$fg(3)$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation order", statement: "Apply $g$ first: $g(3)=4$, then $f(4)=2$." },
            ],
            steps: [
              { reasoning: "$g(3)=4$.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "$f(4)=\\frac{4}{4-2}=\\frac{4}{2}=2$.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Substituting into $f$ without applying $g$ first."],
          },
        },
        {
          id: "mypme4-u2-comp-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Given $f(x)=2x-3$ and $g(x)=x^2$.",
          parts: [
            { label: "a", prompt: "Find $fg(x)$.", marks: 2 },
            { label: "b", prompt: "Find $gf(x)$.", marks: 2 },
            { label: "c", prompt: "Evaluate $fg(4)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$fg(x)=f(g(x))$; $gf(x)=g(f(x))$." },
            ],
            steps: [
              { part: "a", reasoning: "$f(g(x))=f(x^2)=2x^2-3$.", working: "2x^2-3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the composite.", working: "fg(x)=2x^2-3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(f(x))=(2x-3)^2$.", working: "(2x-3)^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the composite.", working: "gf(x)=(2x-3)^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$g(4)=16$; $f(16)=2(16)-3=29$.", working: "29", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the value.", working: "29", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $fg(x)=2x^2-3$ (b) $gf(x)=(2x-3)^2$ (c) 29",
            commonErrors: ["In (b), writing $2x^2-3$ — that's $fg$, not $gf$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u2-comp-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Given $f(x)=x+4$ and $g(x)=3x-1$.",
          parts: [
            { label: "a", prompt: "Find $fg(x)$.", marks: 2 },
            { label: "b", prompt: "Find $gf(x)$.", marks: 2 },
            { label: "c", prompt: "Solve $fg(x)=10$.", marks: 2 },
            { label: "d", prompt: "Explain why $fg(x)=gf(x)$ has no solution.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$fg(x)=f(g(x))$; order matters." },
            ],
            steps: [
              { part: "a", reasoning: "$f(g(x))=(3x-1)+4=3x+3$.", working: "fg(x)=3x+3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the composite.", working: "3x+3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(f(x))=3(x+4)-1=3x+12-1=3x+11$.", working: "gf(x)=3x+11", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the composite.", working: "3x+11", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$3x+3=10 \\Rightarrow 3x=7 \\Rightarrow x=\\frac{7}{3}$.", working: "x=\\frac{7}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the solution.", working: "x=\\frac{7}{3}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$3x+3=3x+11$ would require $3=11$ — impossible.", working: "\\text{no solution}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $fg(x)=3x+3$ (b) $gf(x)=3x+11$ (c) $x=\\frac{7}{3}$ (d) equations differ by constant 8 — no solution",
            commonErrors: ["In (d), trying to solve and getting a false statement — that's the point."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 for (d).",
          },
        },
        {
          id: "mypme4-u2-comp-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Given $f(x)=2x+1$ and $g(x)=\\frac{x}{3}$.",
          parts: [
            { label: "a", prompt: "Find $fg(x)$.", marks: 2 },
            { label: "b", prompt: "Find $gf(x)$.", marks: 2 },
            { label: "c", prompt: "Evaluate $fg(6)$.", marks: 2 },
            { label: "d", prompt: "Find $x$ such that $fg(x)=7$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite", statement: "$fg(x)=f(g(x))$; $gf(x)=g(f(x))$." },
            ],
            steps: [
              { part: "a", reasoning: "$f(g(x))=2\\left(\\frac{x}{3}\\right)+1=\\frac{2x}{3}+1$.", working: "\\frac{2x}{3}+1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the composite.", working: "fg(x)=\\frac{2x}{3}+1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(f(x))=\\frac{2x+1}{3}$.", working: "\\frac{2x+1}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the composite.", working: "gf(x)=\\frac{2x+1}{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$g(6)=2$; $f(2)=2(2)+1=5$.", working: "5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the value.", working: "5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\frac{2x}{3}+1=7 \\Rightarrow \\frac{2x}{3}=6 \\Rightarrow x=9$.", working: "x=9", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the solution.", working: "x=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $fg(x)=\\frac{2x}{3}+1$ (b) $gf(x)=\\frac{2x+1}{3}$ (c) 5 (d) $x=9$",
            commonErrors: ["In (d), solving $gf(x)=7$ instead of $fg(x)=7$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u2-comp-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "If $f(x)=x^2$ and $g(x)=x-2$, solve $fg(x)=16$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=18$ or $x=14$" },
              { id: "b", text: "$x=6$ or $x=-2$" },
              { id: "c", text: "$x=4$ only" },
              { id: "d", text: "$x=6$ only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Composite equation", statement: "$fg(x)=f(g(x))=(x-2)^2$; solve by taking roots." },
            ],
            steps: [
              { reasoning: "$(x-2)^2=16 \\Rightarrow x-2=\\pm4$.", working: "x-2=\\pm4", marks: 1, markCode: "M" },
              { reasoning: "$x=6$ or $x=-2$; both check: $(6-2)^2=16$, $(-2-2)^2=16$. ✓", working: "x=6\\text{ or }x=-2", marks: 1, markCode: "M" },
              { reasoning: "State both solutions.", working: "x=6\\text{ or }x=-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=6$ or $x=-2$",
            commonErrors: ["Taking only the positive root — squaring gives two solutions."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u2-inverse",
      title: "Inverse functions",
      skill: "Find inverse functions, verify inverses, and understand domain restrictions.",
      lesson: {
        sections: [
          {
            heading: "Finding the inverse",
            body: "To find $f^{-1}(x)$: write $y=f(x)$, swap $x$ and $y$, then solve for $y$. For $f(x)=2x+3$: $x=2y+3 \\Rightarrow y=\\frac{x-3}{2}$, so $f^{-1}(x)=\\frac{x-3}{2}$.",
          },
          {
            heading: "Verifying inverses",
            body: "Check that $f(f^{-1}(x))=x$ and $f^{-1}(f(x))=x$. For the example: $f\\left(\\frac{x-3}{2}\\right)=2\\left(\\frac{x-3}{2}\\right)+3=x-3+3=x$. ✓",
          },
          {
            heading: "Domain restrictions",
            body: "Not all functions have inverses — the function must be **one-to-one** (each output from exactly one input). $y=x^2$ is not one-to-one (both $x$ and $-x$ give same $y$), so we restrict the domain, e.g. $x\\ge0$, to define $f^{-1}(x)=\\sqrt{x}$.",
          },
        ],
        keyFormulas: [
          { name: "Inverse method", statement: "Swap $x$ and $y$, solve for $y$" },
          { name: "Verification", statement: "$f(f^{-1}(x))=x$" },
          { name: "One-to-one", statement: "Required for inverse to exist" },
        ],
        workedExample: {
          problem: "Find the inverse of $f(x)=\\frac{3x-1}{2}$.",
          solution: "$x=\\frac{3y-1}{2} \\Rightarrow 2x=3y-1 \\Rightarrow y=\\frac{2x+1}{3}$. So $f^{-1}(x)=\\frac{2x+1}{3}$.",
        },
      },
      questions: [
        {
          id: "mypme4-u2-inv-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $f^{-1}(x)$ if $f(x)=x-5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x-5$" },
              { id: "b", text: "$\\frac{x}{5}$" },
              { id: "c", text: "$x+5$" },
              { id: "d", text: "$5-x$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "Swap and solve: $x=y-5 \\Rightarrow y=x+5$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(x)=x+5$.", working: "x+5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x+5$",
            commonErrors: ["Writing $5-x$ — that's the negative, not the inverse."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-inv-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the inverse of $f(x)=4x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{x}$" },
              { id: "b", text: "$4x$" },
              { id: "c", text: "$x-4$" },
              { id: "d", text: "$\\frac{x}{4}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "$x=4y \\Rightarrow y=\\frac{x}{4}$." },
            ],
            steps: [
              { reasoning: "Swap: $x=4y$; solve: $y=\\frac{x}{4}$.", working: "\\frac{x}{4}", marks: 1, markCode: "M" },
              { reasoning: "Verify: $f\\left(\\frac{x}{4}\\right)=4\\times\\frac{x}{4}=x$. ✓", working: "x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{x}{4}$",
            commonErrors: ["Multiplying by 4 instead of dividing."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-inv-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the inverse of $f(x)=\\frac{x+3}{2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{x-3}{2}$" },
              { id: "b", text: "$2x-3$" },
              { id: "c", text: "$2x+3$" },
              { id: "d", text: "$\\frac{x}{2}-3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "Swap $x$ and $y$, solve for $y$." },
            ],
            steps: [
              { reasoning: "$x=\\frac{y+3}{2} \\Rightarrow 2x=y+3 \\Rightarrow y=2x-3$.", working: "y=2x-3", marks: 1, markCode: "M" },
              { reasoning: "Verify: $f(2x-3)=\\frac{(2x-3)+3}{2}=\\frac{2x}{2}=x$. ✓", working: "x", marks: 1, markCode: "M" },
              { reasoning: "State the inverse.", working: "2x-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2x-3$",
            commonErrors: ["Sign error: writing $2x+3$ instead of $2x-3$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-inv-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Given $f(x)=2x-3$.",
          parts: [
            { label: "a", prompt: "Find $f^{-1}(x)$.", marks: 2 },
            { label: "b", prompt: "Verify that $f(f^{-1}(x))=x$.", marks: 2 },
            { label: "c", prompt: "Solve $f(x)=f^{-1}(x)$.", marks: 2 },
            { label: "d", prompt: "Explain why $f$ is one-to-one.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "Swap, solve, verify." },
            ],
            steps: [
              { part: "a", reasoning: "$x=2y-3 \\Rightarrow y=\\frac{x+3}{2}$.", working: "f^{-1}(x)=\\frac{x+3}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the inverse.", working: "\\frac{x+3}{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$f\\left(\\frac{x+3}{2}\\right)=2\\left(\\frac{x+3}{2}\\right)-3=x+3-3=x$. ✓", working: "x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State verified.", working: "x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2x-3=\\frac{x+3}{2} \\Rightarrow 4x-6=x+3 \\Rightarrow 3x=9 \\Rightarrow x=3$.", working: "x=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve the equation.", working: "x=3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$f$ is linear with non-zero gradient — each output comes from exactly one input.", working: "\\text{linear, one-to-one}", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Explain clearly.", working: "\\text{non-zero gradient}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f^{-1}(x)=\\frac{x+3}{2}$ (b) verified (c) $x=3$ (d) linear function with non-zero gradient is one-to-one",
            commonErrors: ["In (c), forgetting to multiply both sides by 2."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), R1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u2-inv-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $f^{-1}(x)$ if $f(x)=x+7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7-x$" },
              { id: "b", text: "$x-7$" },
              { id: "c", text: "$\\frac{x}{7}$" },
              { id: "d", text: "$x+7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "Swap and solve: $x=y+7 \\Rightarrow y=x-7$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(x)=x-7$.", working: "x-7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x-7$",
            commonErrors: ["Writing $x+7$ — the inverse undoes the addition."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u2-inv-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $f(x)=2x-1$, find $f^{-1}(5)$.",
          response: { type: "numeric", parts: [{ label: "$f^{-1}(5)$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "$f^{-1}(x)=\\frac{x+1}{2}$; substitute $x=5$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(5)=\\frac{5+1}{2}=3$.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Computing $f(5)=9$ instead of $f^{-1}(5)$."],
          },
        },
        {
          id: "mypme4-u2-inv-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the inverse of $f(x)=5-x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x-5$" },
              { id: "b", text: "$\\frac{x}{5}$" },
              { id: "c", text: "$\\frac{5}{x}$" },
              { id: "d", text: "$5-x$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Self-inverse", statement: "$f(x)=5-x$ equals its own inverse." },
            ],
            steps: [
              { reasoning: "$x=5-y \\Rightarrow y=5-x$, so $f^{-1}(x)=5-x=f(x)$.", working: "5-x", marks: 1, markCode: "M" },
              { reasoning: "State the inverse.", working: "5-x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5-x$",
            commonErrors: ["Writing $x-5$ — that's the negative of the function."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-inv-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=3x+6$, find $f^{-1}(0)$.",
          response: { type: "numeric", parts: [{ label: "$f^{-1}(0)$", answer: -2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "$f^{-1}(x)=\\frac{x-6}{3}$; substitute $x=0$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(0)=\\frac{0-6}{3}=-2$.", working: "-2", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2$",
            commonErrors: ["Sign error in the numerator."],
          },
        },
        {
          id: "mypme4-u2-inv-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the inverse of $f(x)=\\frac{x}{4}+2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4x+8$" },
              { id: "b", text: "$\\frac{x-2}{4}$" },
              { id: "c", text: "$4(x-2)$" },
              { id: "d", text: "$4x-8$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "Swap, solve: $x=\\frac{y}{4}+2 \\Rightarrow y=4x-8$." },
            ],
            steps: [
              { reasoning: "$x=\\frac{y}{4}+2 \\Rightarrow x-2=\\frac{y}{4} \\Rightarrow y=4x-8$.", working: "4x-8", marks: 1, markCode: "M" },
              { reasoning: "State the inverse.", working: "4x-8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4x-8$",
            commonErrors: ["Writing $4x+8$ — sign error when moving the 2."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-inv-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $f(x)=2x+4$, find the value of $f(f^{-1}(9))$.",
          response: { type: "numeric", parts: [{ label: "$f(f^{-1}(9))$", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse property", statement: "$f(f^{-1}(x))=x$ for all $x$." },
            ],
            steps: [
              { reasoning: "$f(f^{-1}(9))=9$ by the inverse property — no computation needed.", working: "9", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
            commonErrors: ["Computing $f(9)=22$ — confusing $f$ with $f^{-1}$."],
          },
        },
        {
          id: "mypme4-u2-inv-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the inverse of $f(x)=\\frac{x-1}{3}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x-1$" },
              { id: "b", text: "$\\frac{x+1}{3}$" },
              { id: "c", text: "$3x+1$" },
              { id: "d", text: "$3(x-1)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "Swap, solve: $x=\\frac{y-1}{3} \\Rightarrow y=3x+1$." },
            ],
            steps: [
              { reasoning: "$3x=y-1 \\Rightarrow y=3x+1$.", working: "3x+1", marks: 1, markCode: "M" },
              { reasoning: "Verify: $f(3x+1)=\\frac{(3x+1)-1}{3}=\\frac{3x}{3}=x$. ✓", working: "x", marks: 1, markCode: "M" },
              { reasoning: "State the inverse.", working: "3x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3x+1$",
            commonErrors: ["Sign error: writing $3x-1$ instead of $3x+1$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-inv-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The function $f(x)=x^2$ is restricted to $x\\ge0$. Find $f^{-1}(9)$.",
          response: { type: "numeric", parts: [{ label: "$f^{-1}(9)$", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Restricted domain", statement: "With $x\\ge0$, $f^{-1}(x)=\\sqrt{x}$." },
            ],
            steps: [
              { reasoning: "$f^{-1}(9)=\\sqrt{9}=3$ (taking the non-negative root).", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Reject $-3$ since domain is $x\\ge0$.", working: "x\\ge0", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Giving $\\pm3$ — the restricted domain gives a single answer."],
          },
        },
        {
          id: "mypme4-u2-inv-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does $y=x^2$ (with domain all real numbers) have no inverse function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is not linear" },
              { id: "b", text: "It has a maximum value" },
              { id: "c", text: "It is not one-to-one: $x$ and $-x$ give the same output" },
              { id: "d", text: "Its range is negative" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "One-to-one", statement: "An inverse exists only if each output comes from exactly one input." },
            ],
            steps: [
              { reasoning: "$(-2)^2=2^2=4$ — two inputs give the same output.", working: "(-2)^2=2^2", marks: 1, markCode: "M" },
              { reasoning: "Not one-to-one → no inverse without a domain restriction.", working: "\\text{not one-to-one}", marks: 1, markCode: "M" },
              { reasoning: "Select the correct reason.", working: "\\text{one-to-one}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Not one-to-one — $x$ and $-x$ give the same output",
            commonErrors: ["Thinking every function has an inverse."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u2-inv-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Given $f(x)=\\frac{2x+1}{3}$.",
          parts: [
            { label: "a", prompt: "Find $f^{-1}(x)$.", marks: 3 },
            { label: "b", prompt: "Verify that $f(f^{-1}(x))=x$.", marks: 2 },
            { label: "c", prompt: "Solve $f(x)=f^{-1}(x)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "Swap $x$ and $y$, solve for $y$; verify by composition." },
            ],
            steps: [
              { part: "a", reasoning: "$x=\\frac{2y+1}{3} \\Rightarrow 3x=2y+1 \\Rightarrow y=\\frac{3x-1}{2}$.", working: "f^{-1}(x)=\\frac{3x-1}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Isolate $y$ correctly.", working: "3x-1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the inverse.", working: "\\frac{3x-1}{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$f\\left(\\frac{3x-1}{2}\\right)=\\frac{2\\left(\\frac{3x-1}{2}\\right)+1}{3}=\\frac{3x-1+1}{3}=\\frac{3x}{3}=x$. ✓", working: "x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State verified.", working: "x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{2x+1}{3}=\\frac{3x-1}{2} \\Rightarrow 2(2x+1)=3(3x-1) \\Rightarrow 4x+2=9x-3 \\Rightarrow 5=5x \\Rightarrow x=1$.", working: "x=1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the solution.", working: "x=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f^{-1}(x)=\\frac{3x-1}{2}$ (b) verified (c) $x=1$",
            commonErrors: ["In (c), forgetting to cross-multiply both sides."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u2-inv-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What domain restriction on $f(x)=x^2$ allows an inverse function to be defined?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All real $x$" },
              { id: "b", text: "$x\\le0$ only" },
              { id: "c", text: "$x\\ge0$" },
              { id: "d", text: "$x\\ne0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Domain restriction", statement: "Restrict to one branch, e.g. $x\\ge0$, so $f$ is one-to-one." },
            ],
            steps: [
              { reasoning: "$x\\ge0$ keeps only the positive branch — each output from one input.", working: "x\\ge0", marks: 1, markCode: "M" },
              { reasoning: "State the restriction.", working: "x\\ge0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\ge0$",
            commonErrors: ["Choosing $x\\ne0$ — the function is still two-to-one on each side."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u2-inv-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Given $f(x)=5-2x$.",
          parts: [
            { label: "a", prompt: "Find $f^{-1}(x)$.", marks: 2 },
            { label: "b", prompt: "Verify $f(f^{-1}(x))=x$.", marks: 2 },
            { label: "c", prompt: "Find $f^{-1}(f(3))$.", marks: 1 },
            { label: "d", prompt: "Solve $f(x)=10$.", marks: 1 },
            { label: "e", prompt: "Is $f$ equal to its own inverse? Explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse", statement: "Swap, solve, verify; $f(f^{-1}(x))=x$." },
            ],
            steps: [
              { part: "a", reasoning: "$x=5-2y \\Rightarrow 2y=5-x \\Rightarrow y=\\frac{5-x}{2}$.", working: "f^{-1}(x)=\\frac{5-x}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the inverse.", working: "\\frac{5-x}{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$f\\left(\\frac{5-x}{2}\\right)=5-2\\left(\\frac{5-x}{2}\\right)=5-(5-x)=x$. ✓", working: "x", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State verified.", working: "x", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$f^{-1}(f(3))=3$ by the inverse property.", working: "3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$5-2x=10 \\Rightarrow -2x=5 \\Rightarrow x=-2.5$.", working: "x=-2.5", marks: 1, markCode: "M" },
              { part: "e", reasoning: "$f^{-1}(x)=\\frac{5-x}{2}\\ne5-2x=f(x)$, so not self-inverse.", working: "\\text{not self-inverse}", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Compare the two expressions.", working: "\\frac{5-x}{2}\\ne5-2x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $f^{-1}(x)=\\frac{5-x}{2}$ (b) verified (c) 3 (d) $x=-2.5$ (e) no — expressions differ",
            commonErrors: ["In (d), sign error giving $x=2.5$."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), A1 for (c), M1 for (d), R1 A1 for (e).",
          },
        },
      ],
    },
  ],
};
